# SubTracker

A subscription management application that helps users track recurring payments, monitor spending, and receive renewal reminders. SubTracker provides a centralized way to manage subscriptions and avoid unexpected charges.

## Key Features

* Track and manage all subscriptions in one place
* Receive renewal reminders before upcoming payments
* Monitor monthly and yearly subscription spending
* Support for multiple currencies
* Organize subscriptions by category
* Secure authentication using JWT and bcrypt
* Protected API with security middleware and Arcjet integration

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Bcrypt
* Arcjet

### Frontend

* React 18
* Vite
* React Router v6
* Axios
* date-fns

## Getting Started

### Prerequisites

* Node.js v22+
* npm
* MongoDB (recommended)

### Installation

```bash
git clone https://github.com/Adamyaaa/subsciption-manager.git
cd project-backend
npm install
npm start
```

The backend will run on:

```text
http://localhost:5500
```

## API Overview

Base Route:

```text
/api/v1/
```

### Authentication

```http
POST /auth/sign-up
POST /auth/sign-in
```

### Users

```http
GET /users/:id
```

### Subscriptions

```http
POST   /subscriptions
GET    /subscriptions/user/:id
GET    /subscriptions/:id
PUT    /subscriptions/:id
DELETE /subscriptions/:id
PUT    /subscriptions/:id/cancel
```

## Application Flow

1. User signs up and passwords are securely hashed.
2. User signs in and receives a JWT token.
3. Subscriptions are created and renewal dates are calculated automatically.
4. Spending and renewal information are tracked in real time.
5. Notifications help users stay informed about upcoming renewals.

## Categories

Supported subscription categories include:

* Sports
* News
* Entertainment
* Technology
* Finance
* Lifestyle
* Other

## Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5500
NODE_ENV=development
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
MONGODB_URI=your_mongodb_connection_string
ARCJET_KEY=your_arcjet_key
```

## Project Structure

```text
project-backend/
├── config/
├── middlewares/
├── models/
├── routes/
└── app.js

project-frontend/
├── src/
│   ├── pages/
│   ├── components/
│   ├── context/
│   ├── styles/
│   └── api.js
```

## Future Enhancements

* Mobile applications (iOS and Android)
* Analytics dashboard
* Push notifications
* CSV export functionality
* Payment integrations
* Dark mode support

## License

MIT License

## Author

Built to help users better manage recurring subscriptions and control their spending.
