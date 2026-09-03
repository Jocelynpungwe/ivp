# IVP — Infirmières des Voies Publiques

React + Vite + Tailwind CSS + Redux Toolkit starter for the IVP healthcare charity website.

## Routes
- `/` — Home
- `/about` — About
- `/gallery` — Gallery
- `/contact` — Contact
- `/donate` — Donate

## Structure
```text
src/
├── app/store.js
├── components/
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── SectionHeading.jsx
├── features/ui/uiSlice.js
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   ├── Donate.jsx
│   └── NotFound.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

Tailwind CSS v4 is configured through `@tailwindcss/vite`. Redux Toolkit currently manages mobile navigation state and donation amount; additional slices can be added under `src/features/`.
