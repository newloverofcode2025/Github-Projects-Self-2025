// Import Firebase functions
import { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, collection, addDoc, query, where, getDocs } from './firebase-config.js';

// Select DOM elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const addTransactionBtn = document.getElementById('addTransactionBtn');
const transactionsList = document.getElementById('transactionsList');
const totalIncome = document.getElementById('totalIncome');
const totalExpenses = document.getElementById('totalExpenses');
const savings = document.getElementById('savings');
const budgetProgress = document.getElementById('budgetProgress');
const budgetPercentage = document.getElementById('budgetPercentage');
const financeChart = document.getElementById('financeChart').getContext('2d');

let transactions = [];

// Login Functionality
loginBtn.addEventListener('click', () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");
    signInWithEmailAndPassword(auth, email, password)
        .then(() => alert("Logged in successfully!"))
        .catch((error) => alert(error.message));
});

// Signup Functionality
signupBtn.addEventListener('click', () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => alert("Account created successfully!"))
        .catch((error) => alert(error.message));
});

// Logout Functionality
logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => alert("Logged out successfully!"));
});