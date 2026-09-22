# 🌍 Wanderlust

Wanderlust is a full-stack web application inspired by Airbnb, designed for discovering, listing, and reviewing vacation rentals. It features user authentication, dynamic image uploads, interactive maps, and complete CRUD functionality for listings and reviews.

🚧 This project is actively being improved with new features and UI enhancements.

🔗 **Live Demo:** [https://wanderlust-1rjp.onrender.com/listings](https://wanderlust-1rjp.onrender.com/listings)

---

## ✨ Features

- **Listing Management:** Create, browse, edit, and delete accommodation listings.
- **Image Uploads:** Cloud image storage and management powered by Cloudinary and Multer.
- **Interactive Maps:** Visual geolocation and map markers using Mapbox.
- **User Authentication & Authorization:** Secure signup/login via Passport.js with permission checks (only owners can modify their listings or delete their reviews).
- **Reviews & Ratings:** Authenticated users can leave star ratings and comments on stays.
- **Validation & Error Handling:** Schema validation using Joi with custom asynchronous error handling.

---

## 🛠️ Tech Stack

- **Frontend:** EJS, Bootstrap 5, Custom CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB & Mongoose ODM
- **Authentication:** Passport.js (`passport-local`, `passport-local-mongoose`)
- **Cloud Storage:** Cloudinary
- **Mapping:** Mapbox GL JS
- **Deployment:** Render (App) & MongoDB Atlas (Database)

---

## 🚀 Deployment Note

This app is deployed on **Render's Free Tier**. The server spins down after a period of inactivity, so the first request may take **30-50 seconds** to load. Thank you for your patience!

## 📁 Repository Overview

```text
Wanderlust/
├── controllers/      # Route logic for listings, reviews, and users
├── init/             # Sample seed data & DB initialization
├── models/           # Mongoose schemas (Listing, Review, User)
├── public/           # Static CSS and client-side JavaScript
├── routes/           # Express route definitions
├── utils/            # Custom error handlers and async wrappers
├── views/            # EJS templates and page layouts
├── app.js            # Main application server file
└── schema.js         # Joi validation schemas
```

---

## ⚙️ Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/Amarsingh240/Wanderlust.git
cd Wanderlust
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory:
```env
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_token
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
PORT=8080
```

### 4. Seed the database (optional)
```bash
node init/index.js
```

### 5. Run the app
```bash
node app.js
```
Visit `http://localhost:8080/listings` in your browser.

---

## 👤 Author

- **Amar Singh** — [@Amarsingh240](https://github.com/Amarsingh240)
- **Live Project:** [Wanderlust on Render](https://wanderlust-1rjp.onrender.com/listings)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
