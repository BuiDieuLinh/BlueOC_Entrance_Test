# 📘 React-Redux Posts Management App

This is a simple React-Redux application built with **TypeScript** that uses **Redux Toolkit** for state management and integrates with the public API [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts). The app fetches posts from the API and includes a form to simulate the creation of new posts.

---

## 🚀 Features

- **Fetch Posts**: Retrieves and displays a list of posts from the API.
- **Add New Post**: Simulates adding a new post using a `PostForm` component.
- **State Management**: Uses **Redux Toolkit** and **RTK Query** for efficient state and API handling.
- **Modern Syntax**: Written in modular **TypeScript (TSX)** using **ES6+** features.

---

## 🔗 API Endpoint
https://jsonplaceholder.typicode.com/posts

## 📁 Project Structure

src/
├── component/
│   └── PostForm.tsx          # Component for adding new posts
│
├── pages/
│   └── PostsManagement.tsx  # Page for list posts
│
├── service/
│   └── apiPost.tsx          # Handles API requests
│
├── store/
│   └── index.ts             # Redux store configuration
│
├── App.js                   # Main app component
└── index.js                 # Entry point of the application

## 🛠️ Getting Started

### 1. Clone the Repository

bash
git clone https://github.com/BuiDieuLinh/BlueOC_Entrance_Test.git
cd EntranceTest


### 2. Install Dependencies

bash
npm install


### 3. Start the Development Server

bash
npm start


Open your browser and go to [http://localhost:3000](http://localhost:3000)

---

## 🧱 Build for Production

bash
npm run build


This will create an optimized production build in the build/ directory.

---

## 📦 Technologies Used

- React
- Redux Toolkit
- ES6+ 
- Create React App

⚠️ Notes
- The PostForm only simulates post submission; no data is persisted to the API.
- This project uses TypeScript to ensure type safety across the app.
- This app was completed as part of the BlueOC Entrance Test.