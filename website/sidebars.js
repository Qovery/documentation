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
                {
                    type: 'category',
                    label: 'Qovery Business',
                    items: [
                        "main-concepts/business",
                        "main-concepts/business/organization",
                        "main-concepts/business/cloud-account",
                        "main-concepts/business/build-platform",
                        "main-concepts/business/container-registry",
                        "main-concepts/business/policy",
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
                        "using-qovery/configuration/regions",
                        "using-qovery/configuration/projects",
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
                        "using-qovery/configuration/environment-variables",
                        "using-qovery/configuration/secrets",
                        "using-qovery/configuration/domains",
                        "using-qovery/configuration/storage",
                        "using-qovery/configuration/brokers",
                        "using-qovery/configuration/routing",
                        {
                            type: 'category',
                            label: 'Business',
                            items: [
                                "using-qovery/configuration/business",
                                "using-qovery/configuration/business/organization",
                                "using-qovery/configuration/business/cloud-account",
                                "using-qovery/configuration/business/build-platform",
                                "using-qovery/configuration/business/container-registry",
                                "using-qovery/configuration/business/policy",
                            ],
                        },
                    ]
                },
                {
                    type: 'category',
                    label: 'Integration',
                    items: [
                        "using-qovery/integration",
                        "using-qovery/integration/project-templates",
                        "using-qovery/integration/ide-plugins",
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
            label: 'Useful Links',
            items: [
                {
                    type: 'link',
                    label: 'API',
                    href: 'https://api.qovery.io/swagger-ui.html#'
                },
                "useful-links/faq",
                {
                    type: 'link',
                    label: 'Roadmap',
                    href: 'https://roadmap.qovery.com'
                },
                "useful-links/help-and-support",
            ],
        },
    ]
};
