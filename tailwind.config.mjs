export default {
    darkMode: ["selector", "[class~='dark']"],
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F',
            },
            fontFamily: {
                outfit: ['var(--font-outfit)'],
                ovo: ['var(--font-ovo)'],
            },
            boxShadow: {
                black: '4px 4px 0 #000',
                white: '4px 4px 0 #fff',
            },
        },
    },
    plugins: [],
};
