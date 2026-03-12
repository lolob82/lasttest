# NatureMama Heritage - Local Development Guide

## Prerequisites

Before you start, ensure you have the following installed on your Windows machine:

### 1. Install Node.js and npm
- Download Node.js (v18 or later) from: https://nodejs.org/
- Choose the LTS (Long Term Support) version
- Run the installer and follow the prompts
- Verify installation by opening a terminal and running:
  ```bash
  node --version
  npm --version
  ```

### 2. Install Git (Optional but recommended)
- Download from: https://git-scm.com/download/win
- This helps with version control and deploying to AWS Amplify later

## Step-by-Step Setup

### Step 1: Navigate to Your Project
Open a terminal (Command Prompt, PowerShell, or Git Bash) and navigate to your project folder:
```bash
cd path/to/naturemama-heritage
```

### Step 2: Install Dependencies
Install all required packages listed in package.json:
```bash
npm install
```

This will download React, Vite, and all other dependencies. It may take 2-3 minutes.

### Step 3: Start the Development Server
Run the development server:
```bash
npm run dev
```

### Step 4: View Your Website
- The terminal will show a message like: "Local: http://localhost:5173"
- Open your web browser and go to: http://localhost:5173
- Your website should now be visible!

### Step 5: Making Changes
- Any changes you make to files in the `src/` folder will automatically refresh in the browser
- No need to restart the server

- Keep the terminal window open while developing

## Troubleshooting

### Issue: "npm: command not found"
- Node.js is not installed or not in your PATH
- Reinstall Node.js and restart your terminal

### Issue: Port 5173 is already in use
- Another application is using that port
- Stop the other application or Vite will automatically use a different port

### Issue: Module not found errors
- Run `npm install` again to ensure all dependencies are installed

### Issue: Changes not reflecting
- Hard refresh your browser: Ctrl + Shift + R (Windows)
- Check the terminal for any error messages

## Stopping the Development Server

To stop the server:
- Press `Ctrl + C` in the terminal
- Type `Y` if prompted to confirm

## Next Steps

Once you're happy with your local website:
1. Create a GitHub repository
2. Push your code to GitHub
3. Follow the AWS Amplify deployment guide to publish your site

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (creates optimized files)
npm run build

# Preview production build locally
npm run preview
```

## File Structure Overview

```
naturemama-heritage/
├── src/               # Your source code
│   ├── components/    # React components
│   ├── App.jsx        # Main app component
│   └── main.jsx       # Entry point
├── public/            # Static assets (images, videos)
├── package.json       # Project dependencies
└── index.html         # HTML template
```

## Tips for Development

- Save files frequently (Ctrl + S)
- Check the browser console (F12) for errors
- Use the terminal output to debug issues
- Test on different screen sizes using browser dev tools (F12 > Toggle device toolbar)
