# Paragon Group Website

-> DEADLINES <-

PHASE 1: Due Date  - 10/12/24
- [ ] Navigation Bar
- [ ] Home Page 
- [ ] About Us Page (and CSR page)
- [ ] Milestone Page
- [ ] Footer Bar

Notes:
- These pages are pretty simple, keep in mind photo resolutions and image processing speeds. Reserach a bit how next can be used to optimize images and speed up the page load times.

PHASE 2: Due Date--- 18/12/24
- [ ] Businesss Activites ALL pages
- [ ] Company Pages (ALL) pages

Tip: 
- The business pages all have the same or similar layout, so you can use the same components for them. I recommend that you make one template component page that will be used for all the business pages. (NOTE: Some business pages have certificates to display, so for these pages you will need to add a bottom component specific to that template page. If any questions, ask me)

PHASE 4: Due Date-- 30/01/25
- [ ] Rest of the pages 
- [ ] Full project delivery

----------------------------------------------------------------------------------------------------------------------------------
"Paragon Group is a modern, responsive website built with Next.js 14, Tailwind CSS, and Shadcn UI. It features fast performance, clean design, and SEO-friendly architecture. This repository contains the complete source code, offering a scalable foundation for high-quality web applications. Explore and contribute to its development!"

---

## Quick Start Guide

### Prerequisites

Ensure you have the following installed:

- **Node.js** v20+
- **npm** or **yarn**
- **Git**

---

### Clone Repository

```bash
git clone <repository-url>
cd paragon-group
```

---

### Environment Setup

Create a `.env` file in the root directory and define the following variables:

```plaintext
# .env
NEXT_PUBLIC_API_URL="https://your-backend-api-url.com"
```

---

### Installation

1. Install project dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the application in your browser:

   ```plaintext
   http://localhost:3000
   ```

---

### Running Locally (Development)

Start the application locally:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

Start the production build:

```bash
npm start
```

---

## Current Features

### General Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- **Dynamic Pages:** Modern layout with reusable components for efficiency.
- **SEO Optimization:** Meta tags and dynamic routing for better search engine performance.
- **Dark/Light Mode:** Theme toggling using Tailwind CSS.

---

### Pages Implemented

1. **Home Page:**  
   A visually appealing landing page with an overview of services and features.

2. **About Us Page:**  
   Details about the Paragon Group and its mission.

3. **Services Page:**  
   A section showcasing the company’s offerings.

4. **Contact Page:**  
   A contact form for user inquiries and feedback.

5. **404 Page:**  
   A custom error page for unmatched routes.

---

### Components Created

- **Navigation Bar:**  
  Responsive header with links to key sections and pages.

- **Hero Section:**  
  A visually striking introductory banner.

- **Cards:**  
  Reusable cards for showcasing services or features.

- **Footer:**  
  Informative footer with links to social media and policies.

- **Forms:**  
  Tailwind-styled contact forms with input validation.

---

## Directory Structure

```plaintext
paragon-group/
├── public/                 # Static assets (e.g., images, icons)
│   ├── images/             # Website images
│   └── favicon.ico         # Favicon for the site
├── src/
│   ├── app/                # Next.js 14 app directory
│   │   ├── api/            # (Optional) Client-side API helpers
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── styles/         # Tailwind CSS custom styles
│   │   ├── utils/          # Helper functions and utilities
│   │   └── layouts/        # Layout components
│   └── config/             # Configuration files (e.g., SEO settings)
├── .env                    # Environment variables
├── .gitignore              # Files and directories to ignore in Git
├── README.md               # Documentation for the project
├── next.config.js          # Next.js configuration
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## Development Tools

- **VS Code** (with ESLint and Prettier)  
- **React Developer Tools**  
- **Tailwind CSS Intellisense**  

---

## Future Enhancements

- **Animations:** Smooth animations using Tailwind CSS and Framer Motion.  
- **Dynamic Forms:** Advanced forms with more interactivity.  
- **Multi-language Support:** Adding internationalization (i18n).  
- **CMS Integration:** Connect with a headless CMS for easy content updates.  

---

## Design Principles

- **Mobile-First Approach:** Ensure the best experience for mobile users.  
- **Accessibility Compliance:** Follow ARIA and WCAG standards.  
- **Performance Optimization:** Minimize load times and improve UX.  
- **Reusable Components:** Maintain a scalable and modular codebase.  

---

## Author

**Paragon Group Team**  
Feel free to reach out for feedback or collaboration!
