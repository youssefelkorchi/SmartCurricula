## SmartCurricula – Complete Walkthrough

## 📌 1. Project Goal Recap
SmartCurricula is a web application that helps users define a learning goal and generates a personalized, step-by-step learning path using curated content tailored to their:

- Current knowledge level
- Preferred learning style (videos, articles, hands-on)
- Progress pace

## 🧱 2. Architecture Summary
Tech Stack:
| Part | Technology |
|------|------------|
| Frontend | React + TailwindCSS |
| Backend | Node.js + Express |
| Database | MongoDB |
| Auth | Firebase Auth |
| AI (optional) | Python (LangChain, GPT APIs later) |
| Hosting | Vercel (frontend), Render/Railway (backend) |

## 🛠 3. Project Structure
```
smartcurricula/
├── backend/
│   ├── index.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── utils/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       ├── utils/
│       └── App.js
├── database/
│   └── models.js
├── README.md
└── docs/
```

## 🚀 4. MVP Features

For the initial release, we'll focus on these core features:

🎯 User MVP Features:
- Basic sign up / log in (Firebase Auth)
- Enter a learning goal (from predefined list or simple free-text)
- Answer a few key questions:
  - Current knowledge level (beginner, intermediate, advanced)
  - Preferred learning style (videos, articles, hands-on)
- Receive a structured learning path with 3 stages:
  - Stage 1: Basics
  - Stage 2: Core Concepts
  - Stage 3: Projects
- View curated resources for each stage
- Simple progress tracking (mark steps as complete)

🧠 MVP Recommendation Engine:
- Rule-based matching (no AI in initial version)
- Predefined paths for popular topics
- Hardcoded or semi-structured database of quality resources
- Basic filtering based on user level and preferences

🖥️ MVP Frontend Focus:
- Clean, intuitive goal-setting form
- Progress-style display of the generated path
- Mobile-responsive design
- Minimal but effective UI for resource display

⏱️ Features for Later Versions:
- Advanced user preferences
- AI-enhanced path generation
- Community features
- Admin panel
- Gamification elements

## 🧩 5. Data Schema Design (MongoDB Example)

### Users Collection
```
{
  _id: ObjectId,
  email: String,
  name: String,
  preferences: {
    learningStyle: String,
    pacePreference: String,
    difficulty: String
  },
  created_at: Date
}
```

### Goals Collection
```
{
  _id: ObjectId,
  user_id: ObjectId,
  title: String,
  description: String,
  level: String,
  created_at: Date
}
```

### Learning Paths Collection
```
{
  _id: ObjectId,
  goal_id: ObjectId,
  step_number: Number,
  title: String,
  description: String,
  resource_id: ObjectId,
  estimated_time: Number
}
```

### Resources Collection
```
{
  _id: ObjectId,
  type: String,
  title: String,
  url: String,
  topic: String,
  level: String,
  format: String,
  tags: [String]
}
```

### Progress Collection
```
{
  _id: ObjectId,
  user_id: ObjectId,
  path_id: ObjectId,
  step_number: Number,
  completed: Boolean,
  completed_at: Date
}
```

## 🖥️ 6. Frontend Walkthrough (React)

### Pages:
- `/` → Landing page
- `/dashboard` → Current learning goals
- `/new-goal` → Define a new goal
- `/path/:goalId` → Show generated path
- `/profile` → Manage preferences

### Components:
- `<GoalForm />` → For setting goal
- `<PathStep />` → For each step with resource preview
- `<ProgressTracker />` → Progress bar
- `<LearningStyleSelector />` → User preferences UI

## 🔗 7. Backend Walkthrough

### Endpoints:
| Route | Method | Description |
|-------|--------|-------------|
| /api/users | POST | Create user |
| /api/goals | POST | Set new learning goal |
| /api/goals/:id | GET | Get goal details |
| /api/path/:goalId | GET | Generate/fetch personalized path |
| /api/progress | POST | Mark step as complete |
| /api/resources | GET | Return filtered resources |

## 🧠 8. Recommendation Engine (V1 → V2 Plan)

### Phase 1: Rule-Based (MVP)
- User picks topic (e.g., "React")
- Based on level (beginner, intermediate), match predefined learning path
- Pull content from internal curated DB

### Phase 2: Smart Matching
- Add tags (format, style, length, difficulty)
- Match user learning style and path dynamically

### Phase 3 (Future): AI-enhanced
- NLP to extract goal intent from text input
- LLM to dynamically generate step structure
- Collaborative filtering (what others like you studied)

## 📊 9. Admin Panel (Optional Later)
- Upload and tag learning resources
- Add/edit learning templates
- View user path analytics
- Moderate submitted content

## ☁️ 10. Hosting & Deployment

### Frontend:
- Vercel (connected to GitHub)

### Backend:
- Render / Railway
- Setup environment variables for DB and auth

### Database:
- MongoDB Atlas

## 🔐 11. Authentication
- Firebase Auth (easy integration with frontend)
- Store user preferences and progress securely

## 📌 12. Potential Extensions
- AI Chat Tutor: Guide through learning
- Gamified Points System
- Path Sharing / Community Goals
- Mobile App (React Native)
- Certificates at milestones

## 🧪 13. Testing and QA
- Unit tests (Jest for frontend, Jest for backend)
- API testing (Postman or Insomnia)
- End-to-end tests (Cypress)