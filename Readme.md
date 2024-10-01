
# react series with chai aur code

## tailwind installation and config

```JavaScript

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

```JavaScript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```JavaScript

@tailwind base;
@tailwind components;
@tailwind utilities;

