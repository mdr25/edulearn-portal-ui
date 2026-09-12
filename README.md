# MDR - Learning Management System & Student Dashboard

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-3.x-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)

A responsive web application featuring a marketing landing page and a feature-rich student dashboard. This project was developed as a case study milestone (GameLab Indonesia x UKK), highlighting fundamental competencies in UI slicing from design mockups, mobile-first responsive design, DOM manipulation, and browser data persistence.

---

## Key Features

### 1. Marketing & Course Landing Page
* **Hero & Category Navigation:** Mobile-responsive navbar with smooth section scrolling.
* **Course & Class Directory:** Card-based catalog showcasing active classes, course metadata, and instructor bios.
* **Responsive Layout:** Built with Bootstrap 5 grid, custom CSS media queries, and back-to-top scroll triggers.

### 2. Interactive Student Dashboard
* **Persistent Task Manager (CRUD):** 
  * Full create, read, update, and delete workflow for daily student tasks.
  * Synchronized with browser `localStorage` to preserve state across sessions.
  * Implemented input sanitization against XSS and safe fallback default records.
* **Data Visualization:**
  * Interactive line charts (weekly performance tracking) and pie charts powered by **Chart.js**.
* **Multi-View Application Modules:**
  * **Courses (`courses.html`):** Grid of enrolled and available classes.
  * **Social & Friends (`friends.html`):** Peer network with online status badges.
  * **Real-Time Style Messenger (`chat.html`):** Interactive multi-user chat interface with pill-based conversations.
  * **Student Profile (`profile.html`):** Tabbed user bio, social links, and enrolled course history.
  * **Account Settings (`settings.html`):** Profile customization layout and preferences.
  * **Membership Upgrade (`upgrade.html`):** Resource expansion tiers and billing overview.
* **Offcanvas Mobile Navigation:** Toggleable sidebar drawer for seamless navigation on small viewports.

---

## Project Structure

```text
├── index.html                    # Root entry-point (routing to landing page)
├── README.md                     # Technical documentation & project portfolio context
├── Landing Page/
│   ├── index.html                # Main landing page
│   ├── css/                      # Landing page stylesheets
│   ├── js/                       # Scroll & interaction scripts
│   └── img/                      # Class previews, instructors, and banners
└── Dashboard/
    ├── dashboard.html            # Main dashboard overview & analytics
    ├── courses.html              # Course listings
    ├── chat.html                 # Chat messaging simulation
    ├── friends.html              # Peer network directory
    ├── profile.html              # User profile & public tabs
    ├── settings.html             # Profile settings
    ├── upgrade.html              # Subscription & tier options
    ├── css/                      # Dashboard UI themes
    ├── js/
    │   └── main.js               # Task store (localStorage CRUD) & Chart.js logic
    └── img/                      # Avatars, badges, and card assets
```

---

## Technical Stack

* **Markup & Structure:** Semantic HTML5
* **Styling & Layout:** Vanilla CSS3 + Bootstrap 5.1.3
* **Icons & Fonts:** FontAwesome 5, Boxicons, Google Fonts (Poppins, Raleway, Oswald)
* **Scripting:** Vanilla JavaScript (ES6) & jQuery 3.6
* **Data Visualization:** Chart.js
* **Persistence:** Web Storage API (`localStorage`)

---

## Getting Started Locally

No build tools or package installations required. 

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mdr25/edulearn-portal-ui.git
   cd edulearn-portal-ui
   ```

2. **Open in browser:**
   * Double-click `index.html` to open directly in any modern browser, or
   * Serve with VS Code extension **Live Server** for hot-reloading.

---

## Author & Attribution

* **Developer:** [Dihya Ramdhan](https://github.com/mdr25)
* **Program:** Case Study Project - GameLab Indonesia x UKK SMK
* **Original Preview Reference:** [GameLab Project Showcase](https://www.gamelab.id/project/3640/preview_web?pn=dashboard)
