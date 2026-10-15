# 🚀 Merazul Khan - Professional Portfolio Website

A modern, responsive, high-performance portfolio website built with HTML5, Tailwind CSS, Lucide Icons, and Vanilla JavaScript.

Designed with an aesthetic glassmorphic theme, dark/light mode toggle, dynamic typewriter header, animated project showcases with category filters, interactive project quick-view modals, timeline experience tracker, and a working contact form.

---

## 🌟 Key Features

- **⚡ Blazing Fast**: Zero-build required! Runs directly in any browser or modern static host.
- **🎨 Glassmorphic Dark & Light Modes**: Seamless theme switcher with automatic preference memory saved in `localStorage`.
- **⌨️ Dynamic Typewriter Hero**: Eye-catching role cycler highlighting your specializations.
- **💼 Interactive Project Showcase**: Filter projects by **Full Stack**, **Frontend**, and **Backend/Cloud**, with deep-dive modal details.
- **📊 Animated Metric Counters**: Engaging statistics counters triggered as they scroll into view.
- **🛠️ Decoupled Content Architecture**: All your data (bio, skills, projects, timeline, socials) is cleanly stored in [`js/data.js`](js/data.js) so you can update anything in seconds without touching HTML.
- **📱 100% Mobile Responsive**: Tested across desktop, tablets, and mobile devices with a fluid slide-out drawer menu.
- **📬 Working Contact Form & Direct Email Links**: Instant mail client launcher and toast notification feedback.

---

## 📂 Project Structure

```
├── index.html            # Main portfolio single-page application
├── css/
│   └── styles.css        # Custom styles, glassmorphism, animations & theme rules
├── js/
│   ├── data.js           # ⚙️ YOUR PORTFOLIO DATA (Edit this to update your info!)
│   └── app.js            # Interactive logic (filters, modal, theme, animations)
├── assets/
│   ├── images/           # SVG illustrations, mockups, and avatars
│   └── resume.pdf        # (Optional) Place your PDF resume here
├── package.json          # Simple npm start script
└── README.md             # Documentation & deployment guide
```

---

## 🚀 How to Run Locally

### Option 1: Using npm (Recommended)
Make sure you have Node.js installed, then run:
```bash
npm start
```
Then open your browser at **[http://localhost:3000](http://localhost:3000)**.

### Option 2: Direct Browser Open
Simply double-click the `index.html` file in your file explorer, or right-click and choose **"Open with Chrome / Edge / Firefox"**.

### Option 3: Using Python
```bash
python -m http.server 3000
```

---

## ✏️ How to Customize Your Portfolio

All your personal and technical details are in **`js/data.js`**. You don't have to touch complex HTML tags!

### 1. Update Profile & Social Links
Open `js/data.js` and edit the `profile` object:
```javascript
profile: {
  name: "Merazul Khan",
  headline: "Full Stack Software Engineer & Solution Architect",
  email: "merajulhaikhan@gmail.com",
  location: "Kolkata, India / Remote Worldwide",
  socials: [
    { name: "GitHub", url: "https://github.com/your-username", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon: "linkedin" },
    // ...
  ]
}
```

### 2. Add Your Resume PDF
1. Save your resume as `resume.pdf` inside the `assets/` folder (i.e. `assets/resume.pdf`).
2. In `js/data.js`, set:
   ```javascript
   resumeUrl: "assets/resume.pdf"
   ```

### 3. Add or Modify Projects
In `js/data.js`, you can add any project to the `projects` array:
```javascript
{
  id: "my-cool-project",
  title: "My Project Title",
  category: "fullstack", // "fullstack", "frontend", or "backend"
  tagline: "Short 1-sentence summary",
  image: "assets/images/project-omniflow.svg",
  featured: true,
  tags: ["React", "Node.js", "Tailwind CSS"],
  liveUrl: "https://my-live-demo.com",
  githubUrl: "https://github.com/username/project",
  details: {
    overview: "In-depth explanation of the architecture...",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    results: "Key measurable impact or benchmarks."
  }
}
```

---

## 🌐 How to Publish Online for Free (Where Everyone Can See It!)

Here are the 3 easiest and 100% free ways to publish your portfolio with a live public URL:

### Method 1: GitHub Pages (Free forever)
1. Commit and push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Launch portfolio website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to your repository on **GitHub.com** -> **Settings** -> **Pages** (in the left sidebar).
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. In ~60 seconds, your portfolio will be live at:
   `https://<your-username>.github.io/<your-repo-name>/`

### Method 2: Vercel (Instant Deploy)
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **"Add New Project"** and select this repository.
3. Keep default settings and click **Deploy**.
4. You get an instant custom `.vercel.app` URL with automated SSL and global CDN!

### Method 3: Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com) and log in.
2. Drag and drop this whole folder onto the Netlify dashboard.
3. Your site goes live instantly with a free URL!

---

## 📄 License
This project is licensed under the MIT License - feel free to customize and make it your own!
