# MDR - Learning Management System & Student Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.x-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)

A fullstack-ready educational web platform featuring a high-conversion marketing landing page and an interactive student dashboard. Originally developed as a vocational milestone (GameLab Indonesia x UKK), this project has been modernized and re-architected from static HTML/CSS/jQuery into **Next.js (App Router) + TypeScript** while preserving 100% of its original pixel-perfect aesthetics and responsive design.

---

## Key Features

### 1. Marketing & Course Landing Page (`/`)
* **Hero & Search Bar:** High-performance pre-rendered landing page with search action.
* **Top Categories & Class Directory:** Dynamic course grids and instructor cards with optimized local assets.
* **Responsive Layout:** Smooth anchor scrolling, passive event-managed back-to-top trigger, and responsive navbar collapse.

### 2. Interactive Student Dashboard (`/dashboard`)
* **Persistent Task Manager (CRUD):** 
  * Full create, read, update, and delete workflow for student assignments.
  * Encapsulated via custom React hook (`useTaskManager`) synchronized with browser `localStorage`.
* **Data Visualization:**
  * Client-hydrated **Line Charts** (weekly learning hours) and **Pie Charts** (category distribution) powered by **Chart.js**.
* **Unified Dual-Sidebar Shell:**
  * **Left Sidebar:** App-wide navigation with automated active-route indicator (`usePathname`) and bottom-pinned logout.
  * **Right Sidebar:** Persistent user profile dropdown, skill progress bars, and upcoming schedule cards.
* **Sub-Modules:**
  * **All Courses (`/dashboard/courses`):** Filterable category tabs and progress track indicators.
  * **Peer Network (`/dashboard/friends`):** Interactive peer directory with online/offline indicators and instant message triggers.
  * **Real-Time Messenger (`/dashboard/chat`):** Interactive chat window with live message state across friend conversations.
  * **Student Profile (`/dashboard/profile`):** Tabbed public view for Bio, Peers, and Course badges.
  * **Settings (`/dashboard/settings`):** Controlled preference forms with instant confirmation alerts.
  * **Upgrade Plans (`/dashboard/upgrade`):** Tier pricing cards with active plan selection.

---

## Project Structure

```text
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root HTML shell + Google Fonts (Poppins/Raleway/Oswald)
│   │   ├── page.tsx                # Marketing Landing Page
│   │   └── dashboard/
│   │       ├── layout.tsx          # Dual-Sidebar Shell (Left & Right aside)
│   │       ├── page.tsx            # Analytics & Task Tracker
│   │       ├── courses/page.tsx    # Course catalog
│   │       ├── chat/page.tsx       # Live chat simulator
│   │       ├── friends/page.tsx    # Peer network
│   │       ├── profile/page.tsx    # User bio & tabs
│   │       ├── settings/page.tsx   # Account form
│   │       └── upgrade/page.tsx    # Pricing tiers
│   ├── components/
│   │   ├── dashboard/              # LeftSidebar, RightSidebar, TaskTable, AnalyticsCharts
│   │   └── marketing/              # LandingNavbar, LandingFooter
│   ├── hooks/                      # useTaskManager (localStorage synchronization)
│   ├── styles/                     # globals.css, dashboard.css, landing.css
│   └── types/                      # TypeScript definitions (Task, Course, Friend)
├── public/img/                     # Optimized visual assets
└── legacy-static/                  # Archived original static HTML/CSS files
```

---

## Technical Stack

* **Framework:** Next.js 14 (App Router, Server & Client Components)
* **Language:** TypeScript 5.x
* **Core Library:** React 18
* **Styling:** Bootstrap 5.3 + Custom CSS Modules + Boxicons + FontAwesome
* **Data Visualization:** Chart.js 4.x + React-Chartjs-2
* **Storage:** Web Storage API (`localStorage`)

---

## Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mdr25/edulearn-portal-ui.git
   cd edulearn-portal-ui
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production build:**
   ```bash
   npm run build
   npm run start
   ```

---

## Author & Attribution

* **Developer:** [Dihya Ramdhan](https://github.com/mdr25)
* **Program:** Case Study Project - GameLab Indonesia x UKK SMK
* **Original Preview Reference:** [GameLab Project Showcase](https://www.gamelab.id/project/3640/preview_web?pn=dashboard)

