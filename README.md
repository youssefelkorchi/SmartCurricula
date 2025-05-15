# SmartCurricula

A personalized learning path generator that creates customized curricula based on your learning style, pace, and goals.

## 🌟 Features

- **Personalized Learning Paths**: Get a structured learning path tailored to your:
  - Current knowledge level
  - Preferred learning style (videos, articles, hands-on)
  - Learning pace

- **Progress Tracking**: Keep track of your learning journey with simple progress indicators

- **Resource Curation**: Access carefully selected learning resources matched to your preferences

## 🛠️ Tech Stack

- **Frontend**: React + TailwindCSS
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Authentication**: Firebase Auth

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/smartcurricula.git
   cd smartcurricula
   ```

2. Install frontend dependencies
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies
   ```bash
   cd ../backend
   npm install
   ```

4. Set up environment variables
   - Create `.env` files in both frontend and backend directories
   - Add necessary environment variables (see `.env.example` files)

5. Start the development servers
   ```bash
   # Terminal 1 - Frontend
   cd frontend
   npm start

   # Terminal 2 - Backend
   cd backend
   npm run dev
   ```

## 📁 Project Structure

```
smartcurricula/
├── backend/           # Express server
│   ├── routes/       # API routes
│   ├── controllers/  # Route controllers
│   ├── models/       # Database models
│   └── utils/        # Utility functions
├── frontend/         # React application
│   ├── public/       # Static files
│   └── src/
│       ├── components/  # Reusable components
│       ├── pages/       # Page components
│       ├── hooks/       # Custom React hooks
│       └── utils/       # Utility functions
├── database/         # Database configuration
└── docs/            # Documentation
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.