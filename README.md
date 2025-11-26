# Shoppy Corner - an e-commerce website

**Live Demo:** [https://shoppy-corner.vercel.app/](https://shoppy-corner.vercel.app/)  

Shoppy Corner is a full-stack e-commerce web application built with the MERN stack (MongoDB, Express, React, Node.js). It features user authentication, an admin panel, product search, filtering, sorting, cart functionality, and a test Khalti payment integration. The app is fully responsive.

---

## Features

- **User Authentication:** Sign up, login
- **Admin Panel:** Upload products, manage inventory, and view orders.
- **Product Browsing:** Search items, filter by categories, and sort by price.
- **Cart & Orders:** Add products to cart and place orders.
- **Payment Integration:** Khalti payment gateway (sandbox/test mode).
- **Responsive Design:** Works on mobile, tablet, and desktop devices.

---

## How to Test Khalti Payment

To checkout and make a test payment using **Khalti**:

1. Enter delivery information, and click place order button
2. Select **Khalti Wallet** as the payment method.  
3. Use one of the following phone numbers for sandbox testing:
   ```
    9800000000
    9800000001
    9800000002
    9800000003
    9800000004
    9800000005
   ```
4. Enter the **MPIN**: `1111`  
5. Enter the **OTP**: `987654`  
6. Complete the payment to see the order confirmed.  

---

## Tech Stack

- **Frontend:** React (Vite), Tailwind CSS
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT
- **State Management:** Context API
- **Payment Gateway:** Khalti (sandbox)  

---

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/preykriti/Ecommerce-app
cd Ecommerce-app
```
### 2. Install Dependencies (Backend, Frontend & Admin)

The project has three main folders:
- backend/
- frontend/
- admin/
  
Follow these steps inside each folder:
```bash
cd <folder-name>
npm install
cp .env.demo .env  # copy demo env
# Then fill in your own values in .env
npm run dev
```
