# E-commerce App

## Live preview
Click [here](https://rlab-9.gdsamrat.qzz.io/) to see hosted version of this lab.

## Tech Used
- Vite
- React 19
- Redux
- Redux Toolkit
- React Router Dom
- Tailwind CSS v4
- Bootstrap Icons
- Vercel (for hosting)
- Firebase (for bass)
- Cloudinary (for image upload)

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

## Cloudinary Configuration

Cloudinary is used for image uploads (product images, banners, etc.).

### Step 1: Create a Cloudinary Account

1. Go to [Cloudinary](https://cloudinary.com/)
2. Sign up or log in
3. From the **Dashboard**, note down:

   * **Cloud Name**
   * **Preset Name**

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
   - Add all `VITE_FIREBASE_*` and `VITE_CLOUDINARY_*` variables with your Firebase values
5. Deploy!
