// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetElement = document.querySelector(targetId); // Find the target element

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling effect
                block: 'start' // Align the top of the target element with the top of the viewport
            });
        }
    });
});

// Scroll-Triggered Animations Using Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate"); // Add 'animate' class when element comes into view
            }
        });
    }, {
        threshold: 0.2, // Trigger animation when 20% of the element is visible
    });

    // Observe sections that need animations
    document.querySelectorAll(".about, .projects, .contact").forEach((section) => {
        observer.observe(section);
    });
});

// Lazy Loading for Images
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('loading');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });

    images.forEach(img => {
        observer.observe(img);
    });
});

// Cross-Browser Compatibility for Smooth Scrolling
if (!('scrollBehavior' in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = Math.abs(distance) / 2;
                const startTime = performance.now();

                requestAnimationFrame(function animate(time) {
                    const timeElapsed = time - startTime;
                    const run = ease(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animate);
                });

                function ease(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }
            }
        });
    });
}

// Fetch and Display GitHub Projects
document.addEventListener("DOMContentLoaded", () => {
    const projectGrid = document.getElementById('project-grid');
    const apiUrl = 'https://api.github.com/users/yourusername/repos';

    fetch(apiUrl)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                projectCard.innerHTML = `
                    <img src="${repo.owner.avatar_url}" alt="${repo.name}" loading="lazy">
                    <h3>${repo.name}</h3>
                    <p>${repo.description}</p>
                    <a href="${repo.html_url}" target="_blank" class="btn">View on GitHub</a>
                `;
                projectGrid.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error fetching GitHub repos:', error));
});

// Dark/Light Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});