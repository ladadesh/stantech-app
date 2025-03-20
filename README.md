### **🚀 Pokémon React App (Vite + Redux + Material UI) - README**  

This is a **Pokémon Listing App** built with **React (Vite), Redux, Material UI, and Vitest**. It fetches Pokémon data from an API, supports **search, pagination**, and displays **detailed Pokémon info** on a separate page.

---

## **📌 Features**  
👉 Fetches Pokémon data from **Pokémon API**  
👉 **Pagination** (Shows 12 Pokémon per page)  
👉 **Search Pokémon by name**  
👉 **Detailed Pokémon Page** with stats, abilities & moves  
👉 **Redux Toolkit** for state management  
👉 **Material UI** for a clean UI  
👉 **Vitest & React Testing Library** for testing  

---

## **📌 Installation & Setup**  
**1️⃣ Clone the repository:**  
```bash
git clone https://github.com/ladadesh/stantech-app.git
cd pokemon-app
```

**2️⃣ Install dependencies:**  
```bash
npm install
```

**3️⃣ Start the development server:**  
```bash
npm run dev
```
App runs at **`http://localhost:5173/`**.

---

## **📌 Folder Structure**  
```
stantech-app/
│\── src/
│   ├── components/ (Reusable UI components)
│   │   ├── Header.jsx (header Component)
│   │   ├── PostList.jsx (Pokemon Card Component)
│   │   ├── PostDetails.js (Pokemon Deatails Component)
│   │   └── Loader.jsx (Loading Spinner)
│   ├── pages/ (Application Pages)
│   │   ├── Home.jsx (Main Pokémon List Page)
│   │   └── Details.jsx (Pokémon Details Page)
│   ├── redux/ (Redux Store)
│   │   ├── store.js (Redux Store Configuration)
│   │   └── postsSlice.js (Redux Slice for Pokémon)
│   ├── tests/ (Test Cases)
│   │   ├── setup.js (Jest-DOM setup for Vitest)
│   │   ├── PostList.test.jsx (Test for PostList Component)
│   ├── App.js (Main App Component)
│   ├── main.js (Entry Point)
│   └── vite.config.js (Vite Configuration)
│\── package.json
│\── README.md
│\── .gitignore
```

---

## **📌 Testing**  
Run **all tests**:  
```bash
npm run test
```

Run tests in **watch mode** (auto-refresh on changes):  
```bash
npm run test:watch
```

---

## **📌 Technologies Used**  
- **React 19 + Vite** 🚀 (Fast development)  
- **Redux Toolkit** (State management)  
- **Material UI** 🎨 (Modern UI)  
- **Vitest + React Testing Library** 🥞 (Unit Testing)  
- **Pokémon API** 🔥 (Fetches Pokémon data)  

---

## **📌 Future Improvements**  
👉 Add sorting by **HP, Attack, Speed**  
👉 Implement a **Favorites Feature**  
👉 Improve **mobile responsiveness**  

---

## **📌 Contributors**  
👨‍💻 **Your Name** – Adesh Lad 

---

## **📌 License**  
This project is open-source under the **MIT License**.

---

### **🚀 Start Catching Pokémon Now!**  
Let me know if you'd like **screenshots** or **additional sections**! 😊🔥

