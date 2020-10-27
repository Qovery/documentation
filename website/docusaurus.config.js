const path = require('path');

module.exports = {
    title: 'Qovery',
    tagline: 'Deploy complex application, seamlessly',
    url: 'https://docs.qovery.com',
    baseUrl: '/',
    favicon: 'img/logo-square.svg',
    organizationName: 'Qovery',
    projectName: 'documentation',
    customFields: {
        metadata: require('./metadata'),
    },
    themeConfig: {
        disableDarkMode: false,
        announcementBar: {
            id: 'qovery_is_free', // Any value that will identify this message
            content: 'Qovery is <b>free</b> for developers 🚀 - <a target="_blank" rel="noopener noreferrer" href="https://www.qovery.com/blog/qovery-is-free-for-open-source-projects">Read more</a>',
            backgroundColor: '#3a3ca1', // Defaults to `#fff`
            textColor: '#fff', // Defaults to `#000`
        },
        navbar: {
            hideOnScroll: true,
            logo: {
                alt: 'Qovery',
                src: 'img/logo-light.svg',
                srcDark: 'img/logo-dark.svg',
                url: 'https://www.qovery.com'
            },
            links: [
                {href: 'https://www.qovery.com', label: "Home", position: 'left'},
                // {to: 'components/', label: 'Components', position: 'left'},
                {to: 'docs/', label: 'Docs', position: 'left'},
                {to: 'guides/', label: 'Guides', position: 'left'},
                {to: 'guides/tutorial', label: 'Tutorials', position: 'left'},
                {to: 'guides/engineering', label: 'Engineering', position: 'left'},
                //{to: 'blog/', label: 'Blog', position: 'left'},
                {to: 'community/', label: 'Community', position: 'right'},
                // {to: 'releases/', label: 'Download', position: 'right'},
                {href: 'https://github.com/Qovery', label: "GitHub", position: 'right'},
            ],
        },
        image: 'img/open-graph.png',
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
        },
        footer: {
            links: [
                {
                    title: 'Resources',
                    items: [
                        {
                            label: 'Documentation',
                            to: 'docs',
                        },
                        {
                            label: 'Guides',
                            to: 'guides',
                        },
                        {
                            label: 'Tutorials',
                            to: 'guides/tutorial',
                        },
                        {
                            label: 'Engineering',
                            to: 'guides/engineering',
                        },
                        {
                            label: 'Pricing',
                            to: 'https://www.qovery.com/pricing',
                        },
                        {
                            label: 'Enterprise',
                            to: 'https://www.qovery.com/enterprise',
                        },
                        {
                            label: 'API',
                            to: 'https://api.qovery.io/swagger-ui.html#',
                        },
                        {
                            label: 'Github',
                            to: 'https://github.com/Qovery',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            to: 'https://discord.qovery.com',
                        },
                        {
                            label: 'Roadmap',
                            to: 'https://roadmap.qovery.com',
                        },
                    ],
                },
                {
                    title: 'Company',
                    items: [
                        {
                            label: 'Blog',
                            to: 'https://www.qovery.com/blog',
                        },
                        {
                            label: 'Jobs',
                            to: 'https://jobs.qovery.com',
                        },
                        {
                            label: 'Team',
                            to: 'https://www.qovery.com/team',
                        },
                        {
                            label: 'Investors',
                            to: 'https://www.qovery.com/investors',
                        },
                        {
                            label: 'Contact',
                            to: 'https://www.qovery.com/contact',
                        },
                    ],
                },
            ],
            /* logo: {
                 alt: 'Qovery.com',
                 src: '/img/logo-light.svg',
                 srcDark: '/img/logo-dark.svg',
                 href: 'https://www.qovery.com',
             },*/
            copyright: `© ${new Date().getFullYear()} DESIGNED BY QOVERY | BACKED BY TECHSTARS | PROUD SILVER MEMBER OF CNCF AND LINUX FOUNDATION | QOVERY BY BIRDSIGHT - ALL RIGHTS RESERVED`,
        },
        algolia: {
            apiKey: '9818067f4257abce10ba3c9855f0e0f1',
            indexName: 'qovery',
            algoliaOptions: {}, // Optional, if provided by Algolia
        },
        googleAnalytics: {
            trackingId: 'UA-129773960-5',
        },
    },
    presets: [],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                editUrl: 'https://github.com/Qovery/documentation/edit/master/website/',
                sidebarPath: require.resolve('./sidebars.js')
            }
        ],
        [
            '@docusaurus/plugin-content-blog',
            {
                feedOptions: {
                    type: 'all',
                    copyright: `Copyright © ${new Date().getFullYear()} Qovery, Inc.`,
                    baseUrl: ''
                }
            }
        ],
        path.resolve(__dirname, './plugins/guides'),
        ['@docusaurus/plugin-content-pages', {}],
        [path.resolve(__dirname, './plugins/sitemap'), {}]
    ],
    scripts: [
        {
            src: 'https://www.googletagmanager.com/gtag/js?id=UA-129773960-5',
            async: true,
        },
        '/js/ga.js'
    ],
    stylesheets: [
        'https://fonts.googleapis.com/css?family=Ubuntu|Roboto|Source+Code+Pro',
        'https://at-ui.github.io/feather-font/css/iconfont.css'
    ],
    themes: [
        [
            '@docusaurus/theme-classic',
            {
                customCss: require.resolve('./src/css/custom.css')
            }
        ],
        '@docusaurus/theme-search-algolia'
    ]
};
