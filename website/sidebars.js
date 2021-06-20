module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Getting Started',
            items: [
                "getting-started",
                "getting-started/what-is-qovery",
                "getting-started/how-qovery-works",
                "getting-started/whats-next",
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
            ],
        },
        {
            type: 'category',
            label: 'Using Qovery',
            items: [
                "using-qovery",
                {
                    type: 'category',
                    label: 'Interface',
                    items: [
                        "using-qovery/interface",
                        "using-qovery/interface/cli",
                        "using-qovery/interface/web-interface",
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
                        "using-qovery/configuration/domain",
                        "using-qovery/configuration/storage",
                        "using-qovery/configuration/routing",
                        "using-qovery/configuration/deployment-rule",
                        {
                            type: 'category',
                            label: 'Cloud Service Provider',
                            items: [
                                "using-qovery/configuration/cloud-service-provider",
                                "using-qovery/configuration/cloud-service-provider/amazon-web-services",
                                "using-qovery/configuration/cloud-service-provider/azure",
                                "using-qovery/configuration/cloud-service-provider/google-cloud-platform",
                                "using-qovery/configuration/cloud-service-provider/digital-ocean",
                                "using-qovery/configuration/cloud-service-provider/scaleway",
                            ],
                        },
                    ]
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
                            label: 'Container Registry',
                            items: [
                                "using-qovery/addon/container-registry",
                                "using-qovery/addon/container-registry/elastic-container-registry",
                                "using-qovery/addon/container-registry/azure-container-registry",
                                "using-qovery/addon/container-registry/digital-ocean-container-registry",
                                "using-qovery/addon/container-registry/scaleway-container-registry",
                                "using-qovery/addon/container-registry/docker-hub",
                            ],
                        },
                        "using-qovery/configuration/external-service",
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
                        "using-qovery/quickstart/strapi",
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
            label: 'Community',
            items: [
                {
                    type: 'category',
                    label: 'Rewards',
                    items: [
                        "community/reward",
                    ]
                }
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
            ],
        },
        {
            type: 'category',
            label: 'Useful Resources',
            items: [
                {
                    type: 'link',
                    label: 'API',
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
