module.exports = {
    purge: {
        // enabled: true,
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
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
