# Counter App

A simple yet visually appealing **counter application** built with **Vite + React** as part of onboarding training for new associate hires. Styled with **Bootstrap** for a polished UI and optimized for performance using React best practices.

---

## Features

* Increment and reset counter functionality
* Clean, responsive UI using Bootstrap CDN
* Classic serif font for an elegant, old-style feel
* Performance optimizations with `React.memo`, `useCallback`, and `useMemo`
* Accessible design with `aria` attributes

---

## Tech Stack

* **React** (with Vite for fast development)
* **Bootstrap** (CDN)
* **Google Fonts** (Playfair Display)
* **JavaScript (ES6+)**

---

## Getting Started

### Prerequisites

* Node.js (v16+ recommended)
* npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd elegant-counter

# Install dependencies
npm install
```

### Run in Development

```bash
npm run dev
```

Then open the URL shown in the terminal (default: `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
├─ index.html
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ styles.css
│  └─ components/
│     ├─ CounterDisplay.jsx
│     └─ ControlButton.jsx
```

---

## Performance Practices Used

* Component memoization (`React.memo`)
* Stable handler references with `useCallback`
* Derived value memoization using `useMemo`
* Avoided inline objects/styles in JSX
* CSS animations for smooth transitions

---
