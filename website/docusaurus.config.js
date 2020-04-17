const path = require('path');

module.exports = {
  title: 'Qovery',
  tagline: 'Deploy complex application, seamlessly',
  url: 'https://qovery.com',
  baseUrl: '/',
  favicon: 'img/logo-square.svg',
  organizationName: 'Qovery',
  projectName: 'documentation',
  customFields: {
    metadata: require('./metadata'),
  },
  themeConfig: {
    disableDarkMode: false,
    /*announcementBar: {
        id: 'support_us', // Any value that will identify this message
        content: 'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#fafbfc', // Defaults to `#fff`
        textColor: '#091E42', // Defaults to `#000`
    },*/
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Qovery',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg'
      },
      links: [
        {href: 'https://www.qovery.com', label: "Home", position: 'left'},
        // {to: 'components/', label: 'Components', position: 'left'},
        {to: 'guides/', label: 'Guides', position: 'left'},
        {to: 'docs/', label: 'Docs', position: 'left'},
        //{to: 'blog/', label: 'Blog', position: 'left'},
        {to: 'community/', label: 'Community', position: 'left'},
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
          title: 'About',
          items: [
            {
              label: 'What is Qovery?',
              to: 'docs/getting-started/what-is-Qovery/',
            },
            {
              label: 'The Team',
              to: 'community/#team',
            },
            {
              label: 'Contact Us',
              to: 'contact/',
            },
            {
              label: 'Press',
              to: 'press/',
            },
          ],
        },
        {
          title: 'Components',
          items: [
            {
              label: 'Sources',
              to: 'docs/reference/sources/',
            },
            {
              label: 'Transforms',
              to: 'docs/reference/transforms/',
            },
            {
              label: 'Sinks',
              to: 'docs/reference/sinks/',
            },
          ],
        },
        {
          title: 'Setup',
          items: [
            {
              label: 'Install',
              to: 'docs/setup/installation/',
            },
            {
              label: 'Deployment',
              to: 'docs/setup/deployment/',
            },
            {
              label: 'Configuration',
              to: 'docs/setup/configuration/',
            },
            {
              label: 'Administration',
              to: 'docs/administration/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Chat',
              to: 'https://discord.qovery.com',
            },
            {
              label: 'Github',
              to: 'https://github.com/qovery/documentation',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/qovery_',
            },
            {
              label: 'Mailing List',
              to: 'mailing_list/',
            },
            {
              label: 'Blog',
              to: 'blog/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Qovery.com',
        src: '/img/logo-light.svg',
        srcDark: '/img/logo-dark.svg',
        href: 'https://www.qovery.com',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Qovery, Inc.`,
    },
    algolia: {
      apiKey: '2356c5cb76b57b43624c6450b0a031cc',
      indexName: 'timberio_Qovery',
      algoliaOptions: {}, // Optional, if provided by Algolia
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
  scripts: [],
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
