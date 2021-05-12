module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                '3xl': '2000px',
                '5xl': '4000px',
            },
        },

        scale: {
            0: '0',
            5: '0.05',
            7.5: '0.075',
            25: '.25',
            30: '0.30',
            40: '0.40',
            50: '.5',
            75: '.75',
            90: '.9',
            95: '.95',
            100: '1',
            105: '1.05',
            110: '1.1',
            125: '1.25',
            150: '1.5',
            200: '2',
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
