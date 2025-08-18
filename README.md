# Jewellery Setup for local environment using Herd

## 📌 Overview

This project is built using **Laravel**, **Inertia.js**, **React**, **TailwindCSS**, and **MySQL**.  
It follows a simple **branching strategy** and includes essential configurations for database, mail, and storage.

---

## 🔀 Branch Strategy

-   **main** → Stable production-ready code
-   **develop** → Active development branch

---

## 🛠️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/Ahmed-Tahiri/jewellery-shop.git
cd jewellery-shop
```

### 2. Install Dependencies

```bash
composer install
npm install
```

### 3. Environment Setup

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Update `.env` with your configuration:

```ini
APP_NAME=Jewellery Shop
APP_ENV=local
APP_KEY=base64:bMP5BwrjB6Ag+K9MDDFfhoqD6jBCYDZLUMHd0VRp0kE=
APP_DEBUG=true
APP_URL=https://jewellery-shop.test


DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=jewellery_shop
DB_USERNAME=root
DB_PASSWORD=Ahmed12/3


MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=a27162e98f46aa
MAIL_PASSWORD=8a48f8a6295367
MAIL_SCHEME=null
MAIL_FROM_ADDRESS="admin@jewelleryshop.com"
MAIL_FROM_NAME="${APP_NAME}"

FILESYSTEM_DISK=public
```

Generate app key:

```bash
php artisan key:generate
```

### 4. Run Migrations

```bash
php artisan migrate
```

### 5. Run the Application

## 🖥️ Running the Application with Laravel Herd

1. Make sure [Laravel Herd](https://laravel.com/docs/herd) is installed and running.
2. Place this project inside Herd’s directory (usually `~/Herd`).
3. Open the app in your browser at:
    ```
    https://jewellery-shop.test
    ```
4. Start the Vite dev server for frontend hot reloading:
    ```bash
    npm run dev
    ```

---

## 📦 Installed Stack

-   **Laravel**
-   **Inertia.js**
-   **React**
-   **TailwindCSS**
-   **Vite**
-   **MySQL**

---

## 🚀 Development Scripts

    Run Herd

-   **Start Herd:**
    ```bash
    herd
    ```
-   **Start frontend dev server:**
    ```bash
    npm run dev
    ```
-   **Build assets for production:**
    ```bash
    npm run build
    ```

---
