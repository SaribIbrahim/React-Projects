# 🍽️ Food Menu App

A responsive food menu web app with category filters and search functionality, built using **React (Vite)** on the frontend and **Express.js** on the backend. The app showcases various food items, allowing users to browse by meal type or search by name.

---

## 📁 Project Structure

```
root/
├── app/        # React frontend (Vite)
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   └── ...
├── server/     # Express backend
│   ├── index.js
│   ├── public/
│   │   └── images/
│   └── ...
└── README.md
```

---

## 🚀 Features

- 🔎 Search bar to find food items by name
- 🍳 Filter buttons for "Breakfast", "Lunch", "Dinner"
- 📡 Data fetched dynamically from Express backend
- 🖼️ Static food images served through Express
- 💅 Smooth CSS transitions and responsive design

---

## 🧪 How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/food-menu-app.git
cd food-menu-app
```

### 2️⃣ Start the Backend

```bash
cd server
npm install
node index.js
```

Backend runs at: `http://localhost:9000`

---

### 3️⃣ Start the Frontend

In a **new terminal tab**:

```bash
cd app
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173` (default Vite port)

---

## 🌐 API Endpoint

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| GET    | `/`              | Returns food item data |

Static images are served from:  
```
http://localhost:9000/images/<image-name>
```

---

## 🛠️ Tech Stack

**Frontend**: React (Vite), CSS  
**Backend**: Node.js, Express  
**Other**: Axios, CORS, Static file serving

---

## 📸 Preview

*Include screenshots here if you'd like*

---

## 🙌 Credits

This project was created as a practice exercise to strengthen frontend/backend integration, React state management, and CSS layout skills.

---

## 📬 Contact

Reach out or connect via [LinkedIn](www.linkedin.com/in/sarib-ibraheem-67b885312)  
Open to suggestions, feedback, or collaboration!
