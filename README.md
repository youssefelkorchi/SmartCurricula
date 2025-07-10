# 🚀 SmartCurricula - Epic Learning Platform

> **Transform your learning journey with personalized, AI-powered curricula and stunning visual experiences**

![SmartCurricula Banner](https://img.shields.io/badge/SmartCurricula-Epic%20Learning%20Platform-purple?style=for-the-badge&logo=react)

## ✨ Epic Features

### 🎯 **Personalized Learning Paths**
- **AI-Generated Curricula**: Define your goals and get step-by-step learning paths tailored to your knowledge level
- **Adaptive Difficulty**: Choose from Beginner, Intermediate, or Advanced learning tracks
- **Learning Style Preferences**: Videos, Articles, or Hands-on projects based on your preferences

### 🎨 **Stunning Visual Experience**
- **Aurora Background Effects**: Mesmerizing gradient animations that create an immersive atmosphere
- **3D Card Effects**: Interactive cards with perspective transforms and hover animations
- **Animated Particles**: Floating elements that bring the interface to life
- **Glassmorphism Design**: Modern glass-like cards with backdrop blur effects
- **Gradient Accents**: Beautiful purple, pink, and indigo color schemes throughout

### 📊 **Advanced Dashboard**
- **Real-time Progress Tracking**: Visual progress bars with animated fills
- **Learning Statistics**: Total goals, completion rates, weekly progress, and learning streaks
- **Achievement System**: Unlock badges and track your learning milestones
- **Recent Activity Feed**: Stay updated with your latest learning activities
- **Quick Actions**: Resume learning or customize your profile with one click

### 🎭 **Epic User Experience**
- **Animated Transitions**: Smooth page transitions and micro-interactions
- **Interactive Elements**: Hover effects, scale transforms, and responsive animations
- **Loading States**: Beautiful spinners and skeleton screens
- **Error Handling**: Graceful error states with helpful messaging
- **Responsive Design**: Perfect experience across all devices

### 🔐 **Authentication & Security**
- **Modern Login/Signup**: Epic forms with floating labels and password visibility toggles
- **Form Validation**: Real-time validation with helpful error messages
- **Secure Routing**: Protected routes and authentication state management

## 🛠️ Tech Stack

### **Frontend Framework**
- ⚛️ **React 18** - Modern React with hooks and functional components
- 🛣️ **React Router v6** - Client-side routing with nested routes
- 🎨 **TailwindCSS** - Utility-first CSS framework for rapid UI development

### **UI/UX Libraries**
- 🎯 **React Icons** - Beautiful icon library (Feather icons)
- ✨ **Custom Animations** - CSS animations and transforms
- 🎭 **Glassmorphism** - Modern glass-like design patterns

### **Development Tools**
- 📦 **Create React App** - Zero-configuration build tool
- 🔍 **ESLint** - Code quality and consistency
- 🎨 **PostCSS** - CSS processing and optimization

## 🚀 Quick Start

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/youssefelkorchi/SmartCurricula.git
   cd SmartCurricula
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm start` | 🚀 Runs the app in development mode |
| `npm test` | 🧪 Launches the test runner |
| `npm run build` | 📦 Builds the app for production |
| `npm run eject` | ⚠️ Ejects from Create React App |

## 📁 Project Structure

```
SmartCurricula/
├── public/                 # Static assets and HTML template
│   ├── index.html         # Main HTML file
│   ├── favicon.ico        # App icon
│   └── manifest.json      # PWA manifest
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components
│   │   │   ├── Tooltip.js
│   │   │   └── TopicSelector.js
│   │   ├── GoalDetailsForm.js
│   │   ├── LearningPreferencesForm.js
│   │   ├── ReviewGoal.js
│   │   └── illustrations/
│   │       └── LearningPathSteps.js
│   ├── pages/            # Main page components
│   │   ├── Dashboard.js  # Epic dashboard with 3D effects
│   │   ├── LandingPage.js # Stunning landing page
│   │   ├── Login.js      # Modern authentication
│   │   ├── Signup.js     # User registration
│   │   ├── NewGoal.js    # Goal creation wizard
│   │   ├── PathView.js   # Learning path visualization
│   │   └── Profile.js    # User profile management
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── assets/           # Images and static files
│   │   └── avatar.png    # Default user avatar
│   ├── App.js           # Main application component
│   ├── App.css          # Global styles
│   ├── index.js         # Application entry point
│   ├── index.css        # TailwindCSS imports
│   └── router.js        # Route configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js   # TailwindCSS configuration
└── README.md            # This file
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Purple (`#8B5CF6`) to Pink (`#EC4899`) gradients
- **Secondary**: Indigo (`#6366F1`) to Cyan (`#06B6D4`) accents
- **Background**: Dark slate (`#0F172A`) with aurora effects
- **Text**: White and slate variations for optimal contrast

### **Typography**
- **Headings**: Bold, gradient text with epic scaling
- **Body**: Clean, readable fonts with proper hierarchy
- **Interactive**: Hover states and focus indicators

### **Animations**
- **Fade In**: Smooth entrance animations with staggered delays
- **Hover Effects**: Scale, translate, and color transitions
- **Loading**: Spinners and skeleton screens
- **Particles**: Floating elements with random movements

## 🌟 Key Components

### **Dashboard**
- 3D perspective effects with mouse tracking
- Animated statistics cards
- Interactive goal management
- Achievement system with badges
- Real-time activity feed

### **Learning Paths**
- Timeline-based visualization
- Progress tracking with animated bars
- Stage locking/unlocking system
- Resource links and completion tracking

### **Authentication**
- Glassmorphic form design
- Password visibility toggles
- Real-time validation
- Loading states and error handling

## 🔧 Customization

### **Adding New Pages**
1. Create a new component in `src/pages/`
2. Add the route in `src/router.js`
3. Follow the established design patterns

### **Styling Guidelines**
- Use TailwindCSS utility classes
- Implement glassmorphism for cards
- Add gradient backgrounds for sections
- Include hover animations for interactivity

### **Animation Patterns**
- Use `animate-fadeInUp` for entrance effects
- Implement `hover:scale-105` for card interactions
- Add `transition-all duration-300` for smooth transitions

## 🚀 Deployment

### **Production Build**
```bash
npm run build
```

### **Static Hosting**
The app can be deployed to any static hosting service:
- **Vercel**: Zero-config deployment
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Free hosting for open source projects

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **TailwindCSS** for the utility-first CSS approach
- **Feather Icons** for the beautiful icon set
- **Create React App** for the zero-config setup

---

<div align="center">

**Made with ❤️ and lots of ☕ by the SmartCurricula Team**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>
