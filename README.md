# DnD Project

![App Screenshot](./assets/screenshot.png)

This is a React-based project that renders 3D rotating crystals using Three.js. The project includes optimizations to improve performance.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Project Structure](#project-structure)
-   [Technologies Used](#technologies-used)
-   [Optimization](#optimization)
-   [License](#license)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/JohnImril/dnd.git
    cd dnd
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

To start the development server, run:

```sh
npm start
```

This will start the `webpack-dev-server` on `http://localhost:3000` with hot module replacement enabled.

To build the project for production, run:

```sh
npm run build
```

## Project Structure

```
dnd/
├── src/
│   ├── assets/
│   │   └── img/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.css
│   │   ├── RotatingCrystals/
│   │   │   ├── RotatingCrystals.tsx
│   │   │   └── RotatingCrystals.css
│   ├── textures/
│   │   └── crystal.jpg.dds
│   ├── models/
│   │   └── scene.glb
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.html
├── .babelrc
├── .gitignore
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```

## Technologies Used

-   **React**: A JavaScript library for building user interfaces.
-   **Three.js**: A 3D graphics library that makes WebGL simpler.
-   **Webpack**: A module bundler for JavaScript applications.
-   **Babel**: A JavaScript compiler that allows you to use next-generation JavaScript.
-   **TypeScript**: A strongly typed programming language that builds on JavaScript.

## Optimization

The project includes several optimization techniques:

1. **Memoization**: React components and functions are memoized using `React.memo`, `useCallback`, and `useMemo` to avoid unnecessary re-renders.
2. **Webpack Configuration**: The Webpack configuration is optimized for production builds, including minification and code splitting.

### Example Optimization

The `RotatingCrystals` component is optimized to reduce rendering delays:

```typescript
const RotatingCrystals: React.FC = React.memo(() => {});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
