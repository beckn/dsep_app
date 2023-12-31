/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    output: 'export',
    trailingSlash: true,
    images: {
        loader: 'akamai',
        path: '',
        domains: [
            'cdn.sanity.io',
            'bazaar.becknprotocol.io',
            'mandi.succinct.in',
            'market.becknprotocol.io',
            'retail-osm-stage.becknprotocol.io',
            'retail-osm-prod.becknprotocol.io',
        ],
    },
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]',
                },
            },
        })
        return config
    },
}

module.exports = nextConfig
