# NeuroLearn-Personalized-Learning-Platform-for-ADHD-Students
To create an intelligent e-learning platform that adapts content delivery for students with ADHD by analyzing their engagement using real-time attention tracking and content optimization algorithms.
## Key Features
### 1. Adaptive Content Delivery
- **Learner chooses a topic.**
- The system adapts:
  - **Visual vs. Textual content** based on preference & behavior.
  - **Pacing** (slower for distraction signs, faster for sustained focus).
- Machine Learning (ML) models track patterns over time to personalize further.
### 2. Real-Time Attention Tracking (MediaPipe + Webcam)
- **Eye-tracking** using webcam (no additional hardware required).
- Utilizes **MediaPipe Face Mesh** to track gaze and blink rate.
- Classifies states as “attentive” vs. “distracted.”
- Can trigger:
  - Alerts
  - Pause videos
  - Suggest breaks
### 3. Microlearning & Smart Scheduling
- Recommends **short, modular lessons** (microlearning).
- Sends **timely reminders and breaks** using a Pomodoro-style learning approach.
- Integration with **Google Calendar** or **Firebase notifications**.
### 4. Progress Dashboard & Suggestions
- Tracks and visualizes **attention trends over time.**
- Correlates **topic mastery** with attention trends.
- Offers **personalized tips**, e.g., “Try video mode for theory-heavy subjects.”

## Architecture Overview
### **Frontend (React - Hosted on Vercel):**
- Lesson player (video/text toggle)
- Webcam attention tracker widget
- Dashboard with progress & focus graph
### **Backend (Django - Render or Railway):**
- User management and session tracking
- ML model integration for personalization
- Stores user content preferences and performance history
### **Eye Tracking:**
- MediaPipe Face Mesh (runs in-browser)
- Optional: TensorFlow.js for lightweight emotion/attention prediction
### **Database (Firebase/Firestore):**
- Stores user data, session logs, and learning stats
- Optional: Firebase Auth for login

## Tech Stack
| Component              | Technology           |
|------------------------|----------------------|
| **Frontend**           | React.js, Tailwind CSS |
| **Backend**            | Django + Django Rest Framework (DRF) |
| **Eye Tracking**       | MediaPipe Face Mesh |
| **ML Models**          | Scikit-learn / TensorFlow |
| **Database**           | Firebase/Firestore |
| **Hosting**            | Vercel (frontend), Render or Railway (backend), Firebase (DB/Auth) |

## Sample Use Case Flow
1. Student logs in and selects a topic.
2. System displays a short video lesson.
3. Webcam analyzes attention every few seconds.
4. If distraction is detected:
   - Pause the lesson.
   - Suggest micro-content.
5. Dashboard displays attention stats and learning progress.
6. 
## Datasets (for Personalization Model)
- **Synthetic user logs + open-source educational datasets.**
- Collect your own via testing (e.g., user input + webcam logs).
- **Emotion Detection Datasets**: FER2013 (optional for mood detection).

### Prerequisites
1. Install [Node.js](https://nodejs.org/) for React frontend.
2. Install [Python](https://www.python.org/) for Django backend.
3. Set up a Firebase project for database and authentication.

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/codebyjyotsna/neurolearn.git
   cd neurolearn
   ```
2. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm start
   ```
3. **Backend Setup:**
   ```bash
   cd backend
   pip install -r requirements.txt
   python manage.py runserver
   ```
4. **Firebase Configuration:**
   - Create a Firebase project.
   - Add the Firebase configuration to `frontend/src/firebase.js`.

### Usage
1. Access the frontend at `http://localhost:3000`.
2. Access the backend at `http://localhost:8000`.
3. Log in and start exploring personalized lessons!
## Contributors
- [Jyotsna](https://github.com/codebyjyotsna)
