module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        "getting-started",
        "getting-started/what-is-qovery",
        "getting-started/install-qovery",
        "getting-started/deploy-my-app",
        "getting-started/features",
        {
          type: 'category',
          label: 'Qovery vs. Other',
          items: [
            "getting-started/qovery-vs-other",
            "getting-started/qovery-vs-other/heroku",
            "getting-started/qovery-vs-other/netlify",
            "getting-started/qovery-vs-other/terraform",
          ],
        },
        "getting-started/whats-next",
      ],
    },
    {
      type: 'category',
      label: 'For Developers',
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
          ]
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            "using-qovery/configuration",
            "using-qovery/configuration/organization",
            "using-qovery/configuration/project",
            "using-qovery/configuration/environment",
            "using-qovery/configuration/clusters",
            "using-qovery/configuration/application",
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
            "using-qovery/configuration/environment-variable",
            "using-qovery/configuration/secret",
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
          label: 'Languages',
          items: [
              "using-qovery/languages",
              "using-qovery/languages/nodejs",
              "using-qovery/languages/java",
              "using-qovery/languages/go",
              "using-qovery/languages/python",
              "using-qovery/languages/ruby",
              "using-qovery/languages/php",
              ],
        },
        {
          type: 'category',
          label: 'Addons',
          items: [
            "using-qovery/addon",
            {
              type: 'category',
              label: 'Continuous Integration',
              items: [
                "using-qovery/addon/continuous-integration",
                "using-qovery/addon/continuous-integration/qovery-ci",
                "using-qovery/addon/continuous-integration/gitlab-ci",
                "using-qovery/addon/continuous-integration/circle-ci",
                "using-qovery/addon/continuous-integration/github-actions",
              ],
            },
            {
              type: 'category',
              label: 'Monitoring',
              items: [
                "using-qovery/addon/monitoring",
                "using-qovery/addon/monitoring/datadog",
                "using-qovery/addon/monitoring/new-relic",
              ],
            },
          ]
        },
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
          label: 'Troubleshoot',
          items: [
            "using-qovery/troubleshoot",
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'For DevOps',
      items: [
        "devops/qovery-for-devops-introduction",
        {
          type: 'category',
          label: 'Infrastructure as Code',
          items: [
            "devops/infrastructure-as-code",
            "devops/infrastructure-as-code/terraform",
          ]
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            "devops/infrastructure-config",
            "devops/infrastructure-config/kubernetes",
            "devops/infrastructure-config/custom-domain",
            "devops/infrastructure-config/load-balancer",
            "devops/infrastructure-config/observability",
            "devops/infrastructure-config/qovery-engine",
            "devops/infrastructure-config/qovery-agent",
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        {
          type: 'category',
          label: 'Rewards',
          items: [
            "community/reward",
            "community/reward/feedback",
            "community/reward/write-content",
            "community/reward/video-record",
            "community/reward/bug-bounty",
          ]
        },
        "community/become-an-ambassador",
      ],
    },
    {
      type: 'category',
      label: 'Security and Compliance',
      items: [
        "security-and-compliance",
        "security-and-compliance/backup-and-restore",
        "security-and-compliance/community-fair-use-policy",
        "security-and-compliance/encryption",
        "security-and-compliance/gdpr",
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
