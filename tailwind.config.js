module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production' ? true : false,
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                openSans: ['OpenSans'],
            },
            backgroundImage: {
                popupsBack: "url('../Assets/Images/orangenwhite.jpg')",
                popupsBack2: "url('../Assets/Images/orangenwhite2.jpg')",
            },
            spacing: {
                128: '32rem',
                144: '36rem',
                192: '48rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
