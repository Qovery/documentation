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
        {
          type: 'category',
          label: 'Install Qovery',
          items: [
            "getting-started/install-qovery",
            "getting-started/install-qovery/local",
            {
              type: 'category',
              label: 'AWS',
              items: [
                "getting-started/install-qovery/aws",
                {
                  type: 'category',
                  label: 'Cluster Managed By Qovery',
                  items: [
                    "getting-started/install-qovery/aws/cluster-managed-by-qovery",
                    "getting-started/install-qovery/aws/cluster-managed-by-qovery/quickstart",
                    "getting-started/install-qovery/aws/cluster-managed-by-qovery/create-credentials",
                    "getting-started/install-qovery/aws/cluster-managed-by-qovery/infrastructure",
                    "getting-started/install-qovery/aws/cluster-managed-by-qovery/faq",
                  ]
                },
                "getting-started/install-qovery/aws/self-managed-cluster",
              ]
            },
            {
              type: 'category',
              label: 'GCP',
              items: [
                "getting-started/install-qovery/gcp",
                {
                  type: 'category',
                  label: 'Cluster Managed By Qovery',
                  items: [
                    "getting-started/install-qovery/gcp/cluster-managed-by-qovery",
                    "getting-started/install-qovery/gcp/cluster-managed-by-qovery/quickstart",
                    "getting-started/install-qovery/gcp/cluster-managed-by-qovery/create-credentials",
                  ]
                },
                "getting-started/install-qovery/gcp/self-managed-cluster",
              ]
            },
            {
              type: 'category',
              label: 'Scaleway',
              items: [
                "getting-started/install-qovery/scaleway",
                {
                  type: 'category',
                  label: 'Cluster Managed By Qovery',
                  items: [
                    "getting-started/install-qovery/scaleway/cluster-managed-by-qovery",
                    "getting-started/install-qovery/scaleway/cluster-managed-by-qovery/quickstart",
                    "getting-started/install-qovery/scaleway/cluster-managed-by-qovery/create-credentials",
                    "getting-started/install-qovery/scaleway/cluster-managed-by-qovery/faq",
                  ]
                },
                "getting-started/install-qovery/scaleway/self-managed-cluster",
              ]
            },
            {
              type: 'category',
              label: 'Azure',
              items: [
                "getting-started/install-qovery/azure",
                {
                  type: 'category',
                  label: 'Cluster Managed By Qovery',
                  items: [
                    "getting-started/install-qovery/azure/cluster-managed-by-qovery",
                    "getting-started/install-qovery/azure/cluster-managed-by-qovery/quickstart",
                    "getting-started/install-qovery/azure/cluster-managed-by-qovery/create-credentials",
                  ]
                },
                "getting-started/install-qovery/azure/self-managed-cluster",
              ]
            },
            {
              type: 'category',
              label: 'Kubernetes',
              items: [
                "getting-started/install-qovery/kubernetes",
                "getting-started/install-qovery/kubernetes/quickstart",
                "getting-started/install-qovery/kubernetes/byok-config",
                "getting-started/install-qovery/kubernetes/validate-installation",
                "getting-started/install-qovery/kubernetes/faq",
              ]
            },
          ],
        },
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
            "using-qovery/integration/helm-repository",
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
              label: 'IaC',
              items: [
                "using-qovery/integration/iac",
                "using-qovery/integration/iac/terraform",
                "using-qovery/integration/iac/cloudformation",
                "using-qovery/integration/iac/other",
              ],
            },
            {
              type: 'category',
              label: 'Secret Manager',
              items: [
                "using-qovery/integration/secret-manager",
                "using-qovery/integration/secret-manager/doppler",
                "using-qovery/integration/secret-manager/aws-secrets-manager",
              ],
            },
            "using-qovery/integration/webhook",
            "using-qovery/integration/terraform-provider",
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
                "using-qovery/configuration/organization/container-registry",
                "using-qovery/configuration/organization/helm-repository",
                "using-qovery/configuration/organization/cloud-credentials",
                "using-qovery/configuration/organization/git-repository-access",
                "using-qovery/configuration/organization/api-token",
                "using-qovery/configuration/organization/labels-annotations",
              ],
            },
            {
              type: 'category',
              label: 'Clusters',
              items: [
                "using-qovery/configuration/clusters",
                "using-qovery/configuration/clusters/aws",
                "using-qovery/configuration/clusters/aws-with-karpenter",
                "using-qovery/configuration/clusters/gcp",
                "using-qovery/configuration/clusters/azure",
                "using-qovery/configuration/clusters/scaleway",
              ],
            },
            "using-qovery/configuration/cluster-advanced-settings",
            "using-qovery/configuration/project",
            "using-qovery/configuration/environment",
            "using-qovery/configuration/application",
            "using-qovery/configuration/helm",
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
            "using-qovery/configuration/service-health-checks",
            "using-qovery/configuration/advanced-settings",
            "using-qovery/configuration/object-storage",
            "using-qovery/configuration/deployment-rule",
            "using-qovery/configuration/user-account",
          ]
        },
        {
          type: 'category',
          label: 'Deployment',
          items: [
            "using-qovery/deployment",
            "using-qovery/deployment/deploying-with-auto-deploy",
            "using-qovery/deployment/deploying-with-ci-cd",
            "using-qovery/deployment/deployment-pipeline",
            "using-qovery/deployment/deployment-actions",
            "using-qovery/deployment/deployment-history",
            "using-qovery/deployment/running-and-deployment-statuses",
            "using-qovery/deployment/logs",
            "using-qovery/deployment/deployment-strategies",
            "using-qovery/deployment/image-mirroring",
          ],
        },
        {
          type: 'category',
          label: 'Observability',
          items: [
            "using-qovery/observability",
            "using-qovery/observability/architecture",
            "using-qovery/observability/monitoring",
            "using-qovery/observability/logs",
          ],
        },
        {
          type: 'category',
          label: 'Troubleshoot',
          items: [
            "using-qovery/troubleshoot",
            "using-qovery/troubleshoot/service-deployment-troubleshoot",
            "using-qovery/troubleshoot/service-run-troubleshoot",
            "using-qovery/troubleshoot/cluster-troubleshoot",
          ],
        },
        "using-qovery/audit-logs",
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
          href: 'https://roadmap.qovery.com/roadmap'
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

