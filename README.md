# 🌌 Taskflow

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Vanilla CSS](https://img.shields.io/badge/CSS-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#design--aesthetic)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**Taskflow** is a professional, keyboard-optimized, and aesthetically polished task management application built with **React 19** and **Vite**. Inspired by modern, minimal tools like Linear and Notion, Taskflow features a sleek, dark interface with HSL-based accents, priority indicators, relative timestamps, and visual analytics.

> ✨ **Designed for speed and focus.** Run through your daily schedule with absolute clarity.

---

## 🎨 Key Features

- 📱 **Two-Column Professional Layout**: Sleek collapsible sidebar for organization and status, combined with a focused main task panel.
- 🏷️ **Dynamic Categories**: Effortlessly partition tasks into **Personal**, **Work**, **Shopping**, and **Other** groups.
- ⚡ **⌘K / Ctrl+K Focus**: A keyboard-first design. Hit `⌘K` or `Ctrl+K` instantly from anywhere to focus the input field.
- 📊 **Real-time Progress Analytics**: Monitor completion rates with visual percentage counters and sleek progress animations.
- 🎯 **Priority Matrix**: Color-coded High, Medium, and Low priorities for high-impact task scheduling.
- 🕒 **Relative Timestamps**: Instantly see when tasks were created (e.g., *"2m ago"*, *"5h ago"*).
- 💾 **Persistent Session States**: Custom React hooks save task configurations directly to local storage.
- 🧹 **Quick Actions**: Clean up completed tasks with one click via the `Clear completed` dynamic action button.
- 🌐 **Responsive & Accessible**: Fully optimized for desktop, tablet, and mobile screens, leveraging semantic HTML5 and screen-reader friendliness.

---

## 🛠️ Tech Stack & Design Tokens

- **Core Framework**: React 19.2 (Functional Components & Hooks)
- **Build System**: Vite 8.0 (Fast HMR & Optimized Bundles)
- **Styling**: Vanilla CSS (Single component-free design system in `App.css`)
- **Typography**: 
  - **Inter** (Primary sans-serif for UI)
  - **Playfair Display** (Elegant headers)
  - **JetBrains Mono** (System keyboard shortcuts)
- **Icons**: Lucide React (Clean, thin svg icon set)

---

## 🚀 Getting Started

Follow these steps to run Taskflow locally on your machine.

### Prerequisites

Make sure you have **Node.js** installed (version `v18.0.0` or higher recommended).
```bash
node -v
```

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sadikworkbd5622/Taskflow.git
   cd Taskflow
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   *The application will open on [http://localhost:5173](http://localhost:5173).*

4. **Production Build**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```
├── public/                  # Static assets
│   └── empty-state.png      # Empty state illustration
├── src/
│   ├── assets/              # Icons and local media
│   ├── components/          # React layout components
│   │   ├── Sidebar.jsx      # Navigation, categories, and progress indicators
│   │   ├── MainPanel.jsx    # Task entry, filter selectors, and list wrapper
│   │   ├── TaskList.jsx     # Grouped rendering by categories
│   │   └── TaskItem.jsx     # Task row, relative time, priority stripes, and actions
│   ├── hooks/
│   │   └── useLocalStorage.js # Custom state persistence hook
│   ├── App.jsx              # Main state machine
│   ├── App.css              # Central design system stylesheet
│   └── main.jsx             # React entry mount
├── index.html               # Entry HTML page (SEO headers included)
├── package.json             # Core dependencies and scripts
└── vite.config.js           # Vite configuration
```

---

## ⌨️ Shortcuts & Navigation

Taskflow is designed with accessibility and speed in mind. Use these shortcuts to speed up your workflow:

| Key Binding | Action | Description |
|---|---|---|
| <kbd>⌘</kbd> + <kbd>K</kbd> / <kbd>Ctrl</kbd> + <kbd>K</kbd> | **Focus Input** | Instantly puts cursor in the task creator input. |
| <kbd>Enter</kbd> | **Submit Task** | Adds task when typing in input. |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | **Focus Navigate** | Cycle cleanly through checkmarks, filters, and delete buttons. |
| <kbd>Space</kbd> / <kbd>Enter</kbd> on check | **Toggle Complete** | Toggle selected task. |

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more details.
