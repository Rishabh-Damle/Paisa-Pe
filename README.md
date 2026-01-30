# Paisa-Pe

Paisa-Pe is a basic digital wallet and peer-to-peer payment application inspired by platforms like Paytm.  
It allows users to securely register, manage their balance, and send money to other users using an initial dummy balance.

This project focuses on understanding real-world payment flows, authentication, and transaction handling using a modern full-stack setup.

![Landing Page](frontend/assets/Screenshot%202026-01-30%20123852.png)

## Problem Statement

Traditional cash transactions are slow, inconvenient, and hard to track.  
Even digital payments can become complex if the system is not simple, secure, and reliable.

Paisa-Pe aims to solve this by providing:

- A simple wallet-based payment system
- Secure user authentication
- Easy peer-to-peer money transfers

This project is built as a learning-focused implementation of a real-world fintech product.

## Features

### User Authentication

- User signup and login
- Secure authentication flow
- Protected routes for logged-in users

### Wallet System

- Each user has a wallet balance
- Balance stored and managed securely in the database

### Peer-to-Peer Transfers

- Send money to other registered users
- Instant balance updates for sender and receiver
- Transaction consistency ensured on the backend

### Transaction Handling

- Proper debit and credit flow
- Basic validation for insufficient balance
- Atomic operations to prevent incorrect transfers

## Tech Stack

### Frontend

- React
- Tailwind CSS

### Backend

- Node.js
- Express.js
- TypeScript

### Database

- MongoDB

## Project Structure (High Level)

### Frontend

- React components
- Tailwind-based UI
- API integration with backend

### Backend

- Express REST APIs
- Authentication middleware
- Wallet and transaction logic

### Database

- User collection
- Wallet balance and transaction records

## Future Scope

- Transaction history for users
- JWT refresh tokens and improved authentication security
- Role-based access (admin / user)
- UPI-style QR code payments
- Notifications for successful transactions
- Rate limiting and fraud prevention

## Quick Start

### Clone the repository

```bash
git clone https://github.com/your-username/paisa-pe.git
cd paisa-pe
```

## Install dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

## Environment Variables (Backend)

### Create a .env file:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Run the application

### Start backend

```bash
npm run dev
```

### Start frontend

```bash
npm run dev
```

## Disclaimer

Paisa-Pe is a learning project and not intended for real financial use.
It does not handle real money or production-level security practices.
