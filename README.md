
# BiteSpeed Flow Builder

A minimal, modern **React + Vite** application for building and editing flow diagrams with a drag-and-drop interface. This project leverages React Flow, TailwindCSS, and a clean, modular architecture to provide a smooth flow-building experience.

---

## Features

- **React 19 + Vite**: Fast development and build times with hot module replacement.
- **Drag-and-Drop Flow Builder**: Create, connect, and edit nodes visually.
- **Custom Node Types**: Easily extendable (currently includes a WhatsApp-style message node).
- **State Management**: Uses React Context API for global state sharing.
- **Persistence**: Automatically saves and loads flows from localStorage.
- **User Feedback**: Toast notifications for save actions and errors.
- **ESLint Integration**: Code quality enforced with modern linting rules.
- **TailwindCSS**: Utility-first styling with Google Fonts (Montserrat).
---

## Project Structure

```
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public/
│   └── bitespeed.png
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── components/
│   │   ├── EditNode.jsx
│   │   ├── Home.jsx
│   │   ├── MessageNode.jsx
│   │   ├── Navbar.jsx
│   │   ├── NodeContext.jsx
│   │   ├── Nodes.js
│   │   ├── ReactflowContainer.jsx
│   │   └── Sidebar.jsx
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```
   git clone 
   cd 
   ```

2. **Install dependencies:**
   ```
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Usage

- **Drag nodes** from the sidebar onto the canvas.
- **Connect nodes** by dragging from the source handle to the target handle.
- **Edit node labels** by clicking a node and updating the text in the sidebar.
- **Save your flow** using the "Save changes" button in the navbar.
- **Your flow is persisted** in localStorage and will be restored on reload.

---

## Scripts

| Script   | Description                   |
|----------|-------------------------------|
| `dev`    | Start development server      |
| `build`  | Build for production          |
| `preview`| Preview production build      |
| `lint`   | Run ESLint on all source files|

---

## Main Dependencies

| Package            | Purpose                        |
|--------------------|-------------------------------|
| react              | UI library                     |
| react-dom          | DOM rendering for React        |
| vite               | Fast development/build tool     |
| tailwindcss        | Utility-first CSS              |
| @tailwindcss/vite  | Tailwind + Vite integration    |
| react-icons        | Icon library                   |
| react-router-dom   | Routing support                |
| react-toastify     | Toast notifications            |
| reactflow          | Flow diagram rendering         |

---

## File Highlights

- **`src/components/ReactflowContainer.jsx`**  
  Core logic for rendering and managing the flow builder, including drag-and-drop, edge creation, and persistence.

- **`src/components/Sidebar.jsx`**  
  Sidebar with draggable node types.

- **`src/components/MessageNode.jsx`**  
  Custom node styled for WhatsApp messages.

- **`src/components/EditNode.jsx`**  
  Editor for updating the label/text of selected nodes.

- **`src/components/NodeContext.jsx`**  
  Context provider for global app state (selected node, unsaved changes, etc.).

- **`src/components/Navbar.jsx`**  
  Top navigation bar with save button and project title.

---

## Customization

- **Add new node types:**  
  Edit `src/components/Nodes.js` to add new node configurations and icons.
- **Change styling:**  
  Modify Tailwind classes in component files or update `App.css` for global styles.
- **Update icons:**  
  Use any [react-icons](https://react-icons.github.io/react-icons/) package icon.

---

## Linting & Formatting

- ESLint is configured for React, Hooks, and Vite.
- Custom rule: ignores unused variables starting with uppercase or underscore.

Run the linter:
```
npm run lint
```

---

## Images & Videos
> - [Demo Video](https://github.com/GautamGulati28/bitespeed-frontend/blob/main/demo_video.mp4)

---

## License

This project is provided for educational and demonstration purposes.

---

## Acknowledgements

- [React Flow](https://reactflow.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)

---

**Happy flow building!**
