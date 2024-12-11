# E-Commerce_Project
This is a E-commerce pabbly assessment project.This project enables users to browse products, add them to a cart, and complete purchases using Stripe's payment gateway.

---
## **Problem Statement**

Create a web application that allows users to:
1. Browse products.
2. Add products to a shopping cart.
3. Complete a simple payment process using **Stripe's API**.

---

## **Technologies Used**

- **Frontend**: React, React Router, Redux Toolkit, Material-UI (MUI)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Payment Gateway**: Stripe API
- **State Management**: Redux Toolkit

---

## **Features**

### 1. **User Interface**

- **Product Listing**: 
  - A clean and intuitive product listing page resembling an e-commerce platform.
  - Each product displays an **Add to Cart** button for quick selection.

### 2. **Cart Functionality**

- **Cart Icon**: Displays the number of items currently in the cart.
- **Cart Page**: 
  - Users can click the cart icon to view selected items.
  - Option to proceed to the checkout process.

### 3.**Checkout Process**

- **Checkout Page**: 
  - Includes an email input field and payment details.
  - Redirects to Stripe's secure payment checkout page upon proceeding.

- **Stripe Integration**:
  - After completing payment on Stripe's checkout page, the user is redirected to a corresponding page based on payment status (**Success** or **Failure**).

---

## **State Management**

- **Redux Toolkit**: Manages the state for orders and cart items on the client side.

---

## **Database**

- **MongoDB** stores order details, including:
  - Transaction ID
  - Payment Intent ID
  - User Email
  - Purchased Items

---

## **Project Setup**

### 1. **Clone the Repository**

```bash
git clone https://github.com/Aryan9131/E-Commerce_Project
cd E-Commerce_Project
```

### 2. **Install Dependencies**

#### Install Frontend Dependencies

```bash
cd frontend
npm install
```

#### Install Backend Dependencies

```bash
cd ../backend
npm install
```

### 3. **Environment Variables**

Create a `.env` file in the `backend` folder with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### 4. **Run the Application**

#### Start Backend

```bash
cd server
npm start
```

#### Start Frontend

```bash
cd frontend
npm start
```

The application will be live at `http://localhost:3000`.

---

## **Usage**

1. **Browse Products**: View the list of available products on the homepage.
2. **Add to Cart**: Click the "Add to Cart" button to add items.
3. **View Cart**: Click the cart icon to review selected items.
4. **Checkout**: Proceed to checkout and complete payment through Stripe.

---

## **Contact**

If you have any questions or feedback, feel free to reach out!

---

**Happy Coding!** 🚀

