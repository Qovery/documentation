module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        "getting-started",
        "getting-started/what-is-qovery",
        "getting-started/how-qovery-works",
        "getting-started/quickstart",
        "getting-started/whats-next",
      ],
    },
    {
      type: 'category',
      label: 'Main Concepts',
      items: [
        "main-concepts",
        "main-concepts/application",
        "main-concepts/project",
        "main-concepts/environment",
      ],
    },
    {
      type: 'category',
      label: 'Using Qovery',
      items: [
        "using-qovery",
        {
          type: 'category',
          label: 'Configuration',
          items: [
            "using-qovery/configuration",
            "using-qovery/configuration/environment-variables",
            {
              type: 'category',
              label: 'Databases',
              items: [
                "using-qovery/configuration/databases",
                "using-qovery/configuration/databases/mongodb",
                "using-qovery/configuration/databases/postgresql",
                "using-qovery/configuration/databases/mysql",
              ],
            },
            "using-qovery/configuration/domains",
            "using-qovery/configuration/storage",
            "using-qovery/configuration/brokers",
            "using-qovery/configuration/routing",
          ]
        },
        {
          type: 'category',
          label: 'Integration',
          items: [
            "using-qovery/integration",
            "using-qovery/integration/ide-plugins",
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Security and Compliance',
      items: [
        "security-and-compliance",
        "security-and-compliance/gdpr",
        "security-and-compliance/data",
        "security-and-compliance/backup-and-restore",
        "security-and-compliance/encryption",
      ],
    },
    {
      type: 'category',
      label: 'Useful Links',
      items: [
        {
          type: 'link',
          label: 'API',
          href: 'https://api.qovery.io/swagger-ui.html#'
        },
        "useful-links/faq",
        "useful-links/help-and-support",
      ],
    },
  ]
};
