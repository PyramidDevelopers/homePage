module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                '3xl': '2000px',
                '5xl': '4000px',
            },
        },

        spacing: {
            1: '8px',
            2: '12px',
            3: '16px',
            4: '24px',
            5: '32px',
            6: '48px',
            20: '100px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
