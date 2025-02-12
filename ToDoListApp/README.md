# 📋 Halo - Your Assistant

![Halo - Your Assistant](https://via.placeholder.com/800x400?text=Halo+-+Your+Assistant)  
*(Replace the placeholder image with a screenshot of your app)*

---

## 🌟 Overview

**Halo - Your Assistant** is a fully-featured To-Do List App designed to help you manage tasks efficiently. It includes advanced features like drag-and-drop reordering, task notifications, user authentication, multi-device sync, and much more. The app is built with modern web technologies and follows best practices for accessibility, responsiveness, and performance.

This project demonstrates proficiency in **HTML**, **CSS**, **JavaScript**, and backend integration (e.g., Firebase). It’s perfect for showcasing your skills as a full-stack developer.

---

## 🚀 Features

### Core Features:
- **Task Management:** Add, edit, delete, and reorder tasks.
- **Due Dates & Notifications:** Assign due dates and receive browser notifications for upcoming tasks.
- **Priority Levels:** Categorize tasks by priority (High, Medium, Low).
- **Categories:** Group tasks into categories like "Work," "Personal," and "Shopping."
- **Progress Tracker:** Visualize your progress with a dynamic progress bar.
- **Search & Filters:** Search tasks by name and filter by priority or completion status.
- **Dark Mode:** Toggle between dark and light themes.
- **Export/Import:** Export tasks as a JSON file and import them back.
- **Drag-and-Drop Reordering:** Rearrange tasks with ease.
- **Offline Mode:** Use the app even without an internet connection (via Service Workers).

### Advanced Features:
- **User Authentication:** Secure login/signup functionality for saving tasks across devices.
- **Multi-Device Sync:** Store tasks in a database (e.g., Firebase) for seamless access from multiple devices.
- **Customizable Themes:** Choose from multiple themes (e.g., Dark, Light, Ocean Blue).
- **Accessibility:** Fully accessible with ARIA roles and keyboard navigation.
- **Undo Feature:** Restore accidentally deleted tasks.

---

## 🛠 Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Firebase (or similar service for multi-device sync)
- **Storage:** Local Storage, JSON Export/Import
- **Notifications:** Browser Notifications API
- **Animations:** CSS Animations and Transitions
- **Offline Support:** Service Workers
- **Accessibility:** ARIA Roles, Keyboard Navigation

---

## 🚀 Getting Started in VS Code

### Prerequisites

To run this project locally in **VS Code**, you’ll need:
- [Visual Studio Code](https://code.visualstudio.com/) installed on your machine.
- A modern web browser (e.g., Chrome, Firefox, Edge).
- Basic knowledge of HTML, CSS, and JavaScript.

### Installation

1. **Clone the Repository:**
   Open your terminal in VS Code (`Ctrl + ``) and run:
   ```bash
   git clone https://github.com/yourusername/Halo-Assistant.git
   ```

2. **Open the Project in VS Code:**
   - Navigate to the cloned repository:
     ```bash
     cd Halo-Assistant
     ```
   - Open the folder in VS Code:
     ```bash
     code .
     ```

3. **Install Recommended Extensions (Optional):**
   - Install the following extensions for a better development experience:
     - **Live Server:** Automatically reloads your browser when you save changes.
       - Install via Extensions Marketplace: Search for "Live Server" by Ritwick Dey.
     - **Prettier - Code Formatter:** Ensures consistent code formatting.
       - Install via Extensions Marketplace: Search for "Prettier".
     - **ESLint:** Lints your JavaScript code for errors and best practices.
       - Install via Extensions Marketplace: Search for "ESLint".

4. **Run the App:**
   - Right-click on the `index.html` file in the Explorer panel and select **"Open with Live Server"**.
   - Your default browser will open, and you can interact with the app.

---

## 🔧 Recommended VS Code Settings

For a smoother development experience, consider configuring the following settings in VS Code:

### 1. Enable Auto Save
- Go to **File > Preferences > Settings** (or press `Ctrl + ,`).
- Search for "Auto Save" and set it to **"After Delay"** or **"On Focus Change"**.

### 2. Format on Save
- Search for "Format On Save" in the settings and enable it.
- Ensure **Prettier** is set as the default formatter:
  - Open the Command Palette (`Ctrl + Shift + P`) and search for "Preferences: Open Settings (JSON)".
  - Add the following configuration:
    ```json
    {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    }
    ```

### 3. Linting with ESLint
- If you’re using **ESLint**, ensure it’s enabled in your workspace:
  - Open the Command Palette (`Ctrl + Shift + P`) and search for "ESLint: Enable ESLint".
  - Add an `.eslintrc.json` file to your project for linting rules:
    ```json
    {
        "env": {
            "browser": true,
            "es2021": true
        },
        "extends": "eslint:recommended",
        "rules": {
            "indent": ["error", 4],
            "linebreak-style": ["error", "unix"],
            "quotes": ["error", "single"],
            "semi": ["error", "always"]
        }
    }
    ```

---

## 🎨 Design and Styling

The app follows a **minimalistic and modern design** inspired by sleek UI principles:
- **Jet Black Theme:** Clean white text on a jet-black background for better readability.
- **Priority Indicators:** Color-coded badges for High (Red), Medium (Yellow), and Low (Green) priorities.
- **Responsive Layout:** The app adjusts seamlessly to different screen sizes, ensuring usability on mobile, tablet, and desktop devices.

---

## 🧩 How It Works

### Adding a Task:
1. Enter the task description in the input field.
2. Select a due date using the date picker.
3. Choose a priority level (High, Medium, Low) and category (Work, Personal, Shopping) from the dropdown menus.
4. Click the **"Add Task"** button to add the task to the list.

### Marking a Task as Complete:
- Click on a task to mark it as complete. Completed tasks will have a strikethrough effect.

### Deleting a Task:
- Click the **"×"** button next to a task to delete it. The task will fade out smoothly before being removed.

### Drag-and-Drop Reordering:
- Drag tasks to rearrange their order in the list.

### Notifications:
- Enable notifications to receive alerts for upcoming due dates.

### Progress Tracker:
- The progress bar at the bottom shows the percentage of completed tasks.

---

## 📦 Local Storage & Backend Integration

- Tasks are saved in the browser's **local storage**, ensuring they persist even after closing or refreshing the browser.
- For multi-device access, tasks can be stored in a backend service like **Firebase**.

---

## 🎬 Animations

The app includes subtle animations to enhance the user experience:
- **Fade-In Animation:** New tasks slide into view smoothly.
- **Fade-Out Animation:** Tasks disappear with a smooth transition when deleted.
- **Drag-and-Drop Animation:** Tasks animate while being dragged and dropped.

---

## 🤝 Contributing

Contributions are welcome! If you’d like to improve this project, feel free to fork the repository and submit a pull request. Here’s how you can contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m "Add Your Feature"`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---



---

## 🙏 Acknowledgments

- Inspired by minimalist design principles and modern web development practices.
- Built using **HTML**, **CSS**, and **JavaScript**.
- Special thanks to the developer community for their support and resources.

---

### Screenshot Examples

#### Desktop View:
![Desktop View](https://via.placeholder.com/800x400?text=Desktop+View)  
*(Replace with an actual screenshot of the app on desktop)*

#### Mobile View:
![Mobile View](https://via.placeholder.com/400x800?text=Mobile+View)  
*(Replace with an actual screenshot of the app on mobile)*

---





---

### VS Code Workspace File (Optional)

If you want to share your VS Code workspace settings with collaborators, you can include a `.vscode` folder in your project with the following files:

#### `settings.json`
```json
{
    "editor.tabSize": 4,
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "files.autoSave": "afterDelay",
    "eslint.enable": true
}
```

#### `extensions.json`
```json
{
    "recommendations": [
        "ritwickdey.LiveServer",
        "esbenp.prettier-vscode",
        "dbaeumer.vscode-eslint"
    ]
}
```

This ensures that anyone opening the project in VS Code will be prompted to install the recommended extensions and use the same settings.

---



Happy coding in VS Code! 🚀