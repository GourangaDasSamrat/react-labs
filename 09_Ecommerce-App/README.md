# E-commerce App

## Live preview
Click [here](https://ecommerce-app-six-tau.vercel.app/) to see hosted version of this lab.

## Tech Used
- Vite
- React 19
- Redux
- Redux Toolkit
- Tailwind CSS
- Firebase
- React Router Dom
- Vercel (for hosting)

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn or pnpm
- Firebase account (create one at https://firebase.google.com/)

### Clone Repository
```bash
# Clone the repository
git clone https://github.com/GourangaDasSamrat/react-labs

# Navigate to project directory
cd 09_Ecommerce-App
```

### Install Dependencies
```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

### Firebase Configuration

#### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Enable Authentication, Firestore, and Storage services as needed

#### Step 2: Get Firebase Configuration
1. In Firebase Console, select your project
2. Click on the gear icon (Project Settings)
3. Scroll down to "Your apps" section
4. Click on the web icon (`</>`) to create a web app or select existing one
5. Copy the Firebase configuration values

#### Step 3: Setup Environment Variables
1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace the placeholder values with your actual Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id_here
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   VITE_FIREBASE_APP_ID=your_app_id_here
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
   ```

3. **Important**: Never commit your `.env` file to version control. It's already added to `.gitignore`.

### Development Server
```bash
# Start development server
npm run dev

# Application will be available at http://localhost:5173
```

### Build for Production
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all `VITE_FIREBASE_*` variables with your Firebase values
5. Deploy!
