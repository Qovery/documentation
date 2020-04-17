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
        "main-concepts/Application",
        "main-concepts/Project",
        "main-concepts/Environment",
      ],
    },
    {
      type: 'category',
      label: 'Using Qovery',
      items: [
             "setup/configuration",
        {
          type: 'category',
          label: 'Examples',
          items: [
                  "using-qovery/examples",
                  "using-qovery/examples/cli",
                  "using-qovery/examples/authentication",
                  "using-qovery/examples/git",
                  "using-qovery/examples/deploying-application",
                  "using-qovery/examples/using-environment-variables",
                  "using-qovery/examples/branches-and-environments",
                  "using-qovery/examples/fetching-logs",
                  "using-qovery/examples/custom-domains",
                  "using-qovery/examples/routing",
                  "using-qovery/examples/using-templates",
                  "using-qovery/examples/adding-databases",
                  "using-qovery/examples/microservices"
                  ]
        }
      ],
    },
  ]
};
