module.exports = {
    purge: {
        enabled: process.env.NODE_ENV == "production",
        content: [
            'index.html'
        ]
    },
    theme: {
        extend: {},
    },
    variants: {
        outline: ['focus', 'responsive', 'hover']
    },
    plugins: [],
}
