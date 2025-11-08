# 🧩 Node.js API Starter Structure (MySQL Integrated)

A pre-structured, production-ready **Node.js + Express.js + MySQL** API boilerplate to help you build scalable applications faster.  
This project includes complete folder structuring, MySQL integration, environment setup, request handling layers, reusable middleware, and helper utilities.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Framework-blue)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange?logo=mysql)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 📁 Folder Structure

```
nodejs_api_structure/
│
├── .env                         # Environment variables
├── package.json                 # Dependencies and scripts
├── server.js                    # App entry point
│
├── docs/                        # Project documentation
│   ├── notes.txt
│   ├── structure.js
│   └── structure.txt
│
├── logs/                        # Auto-generated log files
│
├── public/                      # Public/static assets
│
└── src/
    ├── app.js                   # Main Express app configuration
    │
    ├── config/                  # Configurations and database connections
    │   ├── config.json
    │   ├── db.js                # Primary MySQL connection setup
    │   ├── history_db.js        # Optional secondary DB connection
    │   ├── env.js
    │   ├── firebase.js
    │   ├── firebaseServiceAccount.json
    │   └── config.json
    │
    ├── controllers/             # Route controllers (business logic)
    │   ├── admin/
    │   │   ├── authController.js
    │   │   └── transactionController.js
    │   ├── client/
    │   └── common/
    │       └── ipController.js
    │
    ├── email_templates/         # Email HTML templates
    │   ├── forgotTemplate.js
    │   └── verifyOTPTemplate.js
    │
    ├── helpers/                 # Utility functions
    │   ├── currency.js
    │   ├── functions.js
    │   ├── slug.js
    │   └── static_page_html.js
    │
    ├── middlewares/             # Global middlewares
    │   ├── globalAuth.js
    │   ├── logger.js
    │   └── rateLimiter.js
    │
    ├── routes/                  # Route definitions
    │   ├── index.js
    │   ├── v1/
    │   │   ├── index.js
    │   │   ├── admin/
    │   │   │   ├── auth.routes.js
    │   │   │   └── index.js
    │   │   └── client/
    │   │       └── index.js
    │   └── v2/
    │
    ├── services/                # Service integrations
    │   ├── mailer.js
    │   ├── notify.js
    │   ├── smsService.js
    │   └── transactionService.js
    │
    └── utils/                   # Utility error handling and async wrappers
        ├── appError.js
        ├── asyncErrorHandler.js
        └── catchAsync.js
```

---

## 🚀 Features

- ⚙️ Ready-to-use **Express.js + MySQL** app structure  
- 🧩 Modular **MVC architecture** (Controllers, Routes, Services)  
- 🗄️ Built-in **MySQL database integration** (using `mysql2`)  
- 🔐 Built-in **JWT/Auth** and **Rate Limiting** middleware  
- 📨 Email & SMS service modules  
- 🧾 Centralized **Error Handling** system  
- 🧠 Reusable **Helper utilities** for business logic  
- 🌐 Multi-versioned API support (`/v1`, `/v2`)  
- 🧰 Pre-configured environment setup with `.env`  
- 🪵 Built-in **Logger** and structured  

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/gssrinivas59/nodejs_api_structure.git

# Move into the project directory
cd nodejs_api_structure/nodejs_api_structure

# Install dependencies
npm install
```

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
#NODE_ENV=development
#NODE_ENV=production

PORT_DEV=8420
PORT_PROD=9420

API_URL=""
WEBPAGE_URL=""

# DB credentials
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_HOST=localhost
DB_PORT=3306

# DB DEV credentials
DB_DEV_USERNAME=
DB_DEV_PASSWORD=
DB_DEV_NAME=
DB_DEV_HOST=localhost
DB_DEV_PORT=3306

# DB HISTORY credentials
DB_HISTORY_USERNAME=
DB_HISTORY_PASSWORD=
DB_HISTORY_NAME=
DB_HISTORY_HOST=localhost
DB_HISTORY_PORT=3306

# Email credentials
EMAIL_HOST=
EMAIL_PORT=
EMAIL_SECURECONNECTION=tls
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_NAME=
EMAIL_FROM=

# jwt info
JWT_SECRET_KEY=
JWT_EXPIRES_IN=

# crypto-js
ENCRYPTION_KEY=

# admin info
ADMIN_EMAIL=
ADMIN_PASSWORD=
```

---

## 🧩 MySQL Configuration

The MySQL connection is managed through **`src/config/db.js`**.  
You can modify it to use either connection pools or raw connections depending on your use case.

**Example (db.js):**
```js
const mysql = require('mysql2');
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('❌ MySQL Connection Failed:', err);
  } else {
    console.log('✅ MySQL Connected Successfully');
  }
});

module.exports = connection;
```

**Alternate connection:**  
`src/config/history_db.js` can be used for connecting to an additional database if required (e.g., logging or archival).

---

## ▶️ Running the Server

```bash
# For development
npm run dev

# For development nodemon
npm run mdev

# For production
npm run prod

# For production nodemon
npm run mprod
```

By default, the server runs at  
👉 development `http://localhost:8420`
👉 production `http://localhost:9420`

---

## 🧪 Folder Highlights

| Folder | Purpose |
|--------|----------|
| **config/** | MySQL, Firebase, and environment configuration |
| **controllers/** | Business logic for admin/client endpoints |
| **middlewares/** | Authentication, rate-limiting, and logging |
| **helpers/** | Common utility and formatting functions |
| **services/** | Email, SMS, and transaction integrations |
| **utils/** | Error classes and async wrappers |
| **routes/** | Organized API routing (v1, v2 supported) |

---

## 🧱 API Versioning Example

```
/api/v1/admin/auth/login
/ip-address
```

---

## 📦 Scripts (package.json)

```bash
npm run prod    # Start production server
npm run mprod   # Start production server with nodemon
npm run dev     # Start development server
npm run mdev    # Start development server with nodemon
```

---

## 💡 How to Extend

You can easily extend this boilerplate by:
- Adding new routes under `/src/routes/v1/`
- Creating a new controller in `/src/controllers/`
- Adding new MySQL tables and queries in `/src/config/db.js`
- Linking new services in `/src/services/`
- Registering routes in `/src/app.js`

---

## 🧰 Dependencies (core)

- **express**
- **dotenv**
- **mysql2**
- **cors**
- **body-parser**
- **morgan**
- **firebase-admin**
- **jsonwebtoken**
- **nodemailer**

---

## 🧑‍💻 Author

**Sudhir Srinivas Gummella**  
🚀 _Built for developers who want a clean, modular Node.js + MySQL API foundation._
