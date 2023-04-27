module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        "getting-started",
        "getting-started/what-is-qovery",
        "getting-started/how-qovery-works",
        "getting-started/basic-concepts",
        "getting-started/install-qovery",
        "getting-started/deploy-my-app",
        "getting-started/whats-next",
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      items: [
        "using-qovery",
        {
          type: 'category',
          label: 'Interface',
          items: [
            "using-qovery/interface",
            "using-qovery/interface/web-interface",
            "using-qovery/interface/cli",
            "using-qovery/interface/rest-api",
            "using-qovery/interface/terraform-interface",
          ]
        },
        {
          type: 'category',
          label: 'Integrations',
          items: [
            "using-qovery/integration",
            "using-qovery/integration/git-repository",
            "using-qovery/integration/container-registry",
            "using-qovery/integration/terraform",
            {
              type: 'category',
              label: 'Continuous Integration',
              items: [
                "using-qovery/integration/continuous-integration",
                "using-qovery/integration/continuous-integration/github-actions",
                "using-qovery/integration/continuous-integration/gitlab-ci",
                "using-qovery/integration/continuous-integration/circle-ci",
                "using-qovery/integration/continuous-integration/jenkins",
              ],
            },
            {
              type: 'category',
              label: 'Monitoring',
              items: [
                "using-qovery/integration/monitoring",
                "using-qovery/integration/monitoring/datadog",
                "using-qovery/integration/monitoring/new-relic",
              ],
            },
            "using-qovery/integration/webhook",
            "using-qovery/integration/api-integration",
            "using-qovery/integration/slack",
          ]
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            "using-qovery/configuration",
            {
              type: 'category',
              label: 'Organization',
              items: [
                "using-qovery/configuration/organization",
                "using-qovery/configuration/organization/members-rbac",
                "using-qovery/configuration/organization/git-repository-access",
                "using-qovery/configuration/organization/container-registry",
                "using-qovery/configuration/organization/api-token",
              ],
            },
            "using-qovery/configuration/project",
            "using-qovery/configuration/environment",
            "using-qovery/configuration/clusters",
            "using-qovery/configuration/cluster-advanced-settings",
            "using-qovery/configuration/application",
            "using-qovery/configuration/advanced-settings",
            {
              type: 'category',
              label: 'Database',
              items: [
                "using-qovery/configuration/database",
                "using-qovery/configuration/database/postgresql",
                "using-qovery/configuration/database/mysql",
                "using-qovery/configuration/database/mongodb",
                "using-qovery/configuration/database/redis",
              ],
            },
            "using-qovery/configuration/cronjob",
            "using-qovery/configuration/lifecycle-job",
            "using-qovery/configuration/environment-variable",
            "using-qovery/configuration/object-storage",
            "using-qovery/configuration/deployment-rule",
            {
              type: 'category',
              label: 'Cloud Service Provider',
              items: [
                "using-qovery/configuration/cloud-service-provider",
                "using-qovery/configuration/cloud-service-provider/amazon-web-services",
                "using-qovery/configuration/cloud-service-provider/microsoft-azure",
                "using-qovery/configuration/cloud-service-provider/google-cloud-platform",
                "using-qovery/configuration/cloud-service-provider/digital-ocean",
                "using-qovery/configuration/cloud-service-provider/scaleway",
              ],
            },
          ]
        },
        {
          type: 'category',
          label: 'Deployment',
          items: [
            "using-qovery/deployment",
            "using-qovery/deployment/deployment-pipeline",
            "using-qovery/deployment/deployment-actions",
            "using-qovery/deployment/deploying-with-ci-cd",
            "using-qovery/deployment/deployment-history",
            "using-qovery/deployment/running-and-deployment-statuses",
            "using-qovery/deployment/logs",
          ],
        },
       
        "using-qovery/troubleshoot",
        {
          type: 'category',
          label: 'Quickstarts',
          items: [
            "using-qovery/quickstart",
            "using-qovery/quickstart/hasura",
            "using-qovery/quickstart/strapi",
            "using-qovery/quickstart/meilisearch",
            "using-qovery/quickstart/nodejs",
            "using-qovery/quickstart/rust",
            "using-qovery/quickstart/spring",
            "using-qovery/quickstart/django",
            "using-qovery/quickstart/rails",
          ]
        },
        
        {
          type: 'category',
          label: 'Maintenance',
          items: [
            "using-qovery/maintenance",
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Security and Compliance',
      items: [
        "security-and-compliance",
        "security-and-compliance/backup-and-restore",
        "security-and-compliance/encryption",
        "security-and-compliance/gdpr",
        "security-and-compliance/soc2",
      ],
    },
    {
      type: 'category',
      label: 'Useful Resources',
      items: [
        {
          type: 'link',
          label: 'API documentation',
          href: 'https://api-doc.qovery.com'
        },
        "useful-resources/faq",
        {
          type: 'link',
          label: 'Roadmap',
          href: 'https://roadmap.qovery.com'
        },
        {
          type: 'link',
          label: 'Github',
          href: 'https://github.com/qovery'
        },
        "useful-resources/help-and-support",
      ],
    },
  ]
};

