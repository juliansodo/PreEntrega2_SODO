const ChakraTheme = {
  initialColorMode: "dark",
  breakpoints: ["30em", "48em", "62em", "80em"],
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  colors: {
    brand: {
      50: '#ffece3',
      100: '#f4cfbe',
      200: '#e7b097',
      300: '#dc9270',
      400: '#d07348',
      500: '#b7592f', // Asegúrate de que este valor esté presente
      600: '#8f4623',
      700: '#673118',
      800: '#401d0c',
      900: '#1c0700',
    },
    blueBrand:
    {
      50: '#e6e5ff',
      100: '#b4b3ff',
      200: '#8380fd',
      300: '#524efc',
      400: '#261dfb',
      500: '#1405e2',
      600: '#0c02b0',
      700: '#06017e',
      800: '#01004d',
      900: '#00001d',
    }
  },
};

export default ChakraTheme;
