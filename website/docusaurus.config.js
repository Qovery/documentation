const path = require("path");

module.exports = {
  title: "Qovery",
  tagline: "Deploy On-demand Environments on AWS, Remarkably Fast",
  url: "https://hub.qovery.com",
  baseUrl: "/",
  favicon: "img/logo-square.svg",
  organizationName: "Qovery",
  projectName: "documentation",
  customFields: {
    metadata: require("./metadata"),
  },
  themeConfig: {
    disableDarkMode: false,
    /*        announcementBar: {
                    id: 'qovery_is_free', // Any value that will identify this message
                    content: 'Qovery is <b>free</b> for developers 🚀 - <a target="_blank" rel="noopener noreferrer" href="https://www.qovery.com/blog/qovery-is-free-for-open-source-projects">Read more</a>',
                    backgroundColor: '#3a3ca1', // Defaults to `#fff`
                    textColor: '#fff', // Defaults to `#000`
                },*/
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Qovery",
        src: "img/logo-light.svg",
        srcDark: "img/logo-dark.svg",
        url: "https://www.qovery.com",
      },
      links: [
        // {to: 'components/', label: 'Components', position: 'left'},
        { to: "guides/", label: "Guides", position: "left" },
        { to: "docs/", label: "Docs", position: "left" },
        { to: "guides/tutorial", label: "Tutorials", position: "left" },
        {
          href: "https://discuss.qovery.com",
          label: "Forum",
          position: "left",
        },
        //{to: 'blog/', label: 'Blog', position: 'left'},
        //{to: 'community/', label: 'Community', position: 'right'},
        // {to: 'releases/', label: 'Download', position: 'right'},
        {
          href: "https://start.qovery.com",
          label: "Web Console",
          position: "right",
        },
        { href: "https://www.qovery.com", label: "Home", position: "right" },
        {
          href: "https://github.com/Qovery",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    image: "img/open-graph.png",
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ["hcl", "rust"],
    },
    footer: {
      links: [
        {
          title: "Resources",
          items: [
            {
              label: "Documentation",
              to: "docs",
            },
            {
              label: "Guides",
              to: "guides",
            },
            {
              label: "Tutorials",
              to: "guides/tutorial",
            },
            {
              label: "Engineering",
              to: "guides/engineering",
            },
            {
              label: "Pricing",
              to: "https://www.qovery.com/pricing",
            },
            {
              label: "Enterprise",
              to: "https://www.qovery.com/enterprise",
            },
            {
              label: "API",
              to: "https://api-doc.qovery.com",
            },
            {
              label: "Github",
              to: "https://github.com/Qovery",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              to: "https://discord.qovery.com",
            },
            {
              label: "Forum",
              to: "https://community.qovery.com",
            },
            {
              label: "Community call",
              to: "https://www.qovery.com/community-call",
            },
            {
              label: "Goodies",
              to: "https://shop.qovery.com",
            },
            {
              label: "Roadmap",
              to: "https://roadmap.qovery.com",
            },
            {
              label: "Replibyte",
              to: "https://github.com/Qovery/replibyte",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Blog",
              to: "https://www.qovery.com/blog",
            },
            {
              label: "Jobs",
              to: "https://jobs.qovery.com",
            },
            {
              label: "Team",
              to: "https://www.qovery.com/team",
            },
            {
              label: "Investors",
              to: "https://www.qovery.com/investors",
            },
            {
              label: "Contact",
              to: "https://www.qovery.com/contact",
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
      copyright: `© ${new Date().getFullYear()} DESIGNED BY QOVERY | PROUD SILVER MEMBER OF CNCF AND LINUX FOUNDATION | QOVERY BY BIRDSIGHT - ALL RIGHTS RESERVED`,
    },
    algolia: {
      appId: "FT65SBJ2DA",
      apiKey: "02604e8b2e0918e90edd1d9eb8e30f5e", // required key for Algolia (can be public)
      indexName: "qovery",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    googleAnalytics: {
      trackingId: "UA-129773960-5",
    },
    posthog: {
      apiKey: "phc_IgdG1K2GveDUte1gJ6hlwNbFHCv9nViWETUyLMU7ciq", // required key for ph (can be public)
      appUrl: "https://phprox.qovery.com", // optional
      enableInDevelopment: false, // optional
      // other options are passed to posthog-js init as is
    },
    imageZoom: {
      selector: "img",
    },
  },
  presets: [],
  plugins: [
    "plugin-image-zoom",
    "posthog-docusaurus",
    [
      "@docusaurus/plugin-content-docs",
      {
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        feedOptions: {
          type: "all",
          copyright: `Copyright © ${new Date().getFullYear()} Qovery, Inc.`,
          baseUrl: "",
        },
      },
    ],
    path.resolve(__dirname, "./plugins/guides"),
    ["@docusaurus/plugin-content-pages", {}],
    [path.resolve(__dirname, "./plugins/sitemap"), {}],
  ],
  scripts: [
    "/js/intercom.js",
    {
      src: "https://www.googletagmanager.com/gtag/js?id=UA-129773960-5",
      async: true,
    },
    "/js/ga.js",
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Ubuntu|Roboto|Source+Code+Pro",
    "https://at-ui.github.io/feather-font/css/iconfont.css",
  ],
  themes: [
    [
      "@docusaurus/theme-classic",
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    "@docusaurus/theme-search-algolia",
  ],
};
