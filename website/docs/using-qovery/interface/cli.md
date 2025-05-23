---
last_modified_on: "2025-01-29"
title: CLI
description: How to use the Qovery CLI (Command Line Interface)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Alert from '@site/src/components/Alert';

<Alert type="success">

Use Infrastructure as Code (IaC) with our [Terraform Provider][docs.using-qovery.integration.terraform-provider] and our [REST API][docs.using-qovery.interface.rest-api] to manage Qovery and deploy your apps.

</Alert>

Qovery provides a very easy to use CLI (Command Line Interface) designed to fit the developer workflow perfectly.

----

The purpose of the CLI is to integrate seamlessly with your development workflow:

1. Write code
2. Commit
3. **Qovery** - deploy a new version of your application
4. **Qovery CLI** - check the status of your application
5. **Qovery CLI** - debug your application
6. Repeat

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/using-qovery/interface/cli.md.erb
-->

## First usage

### Install

<Tabs
  centered={true}
  className={"rounded"}
  defaultValue={"linux"}
  placeholder="Select your OS"
  select={false}
  size={null}
  values={[{"group":"Platforms","label":"Linux","value":"linux"},{"group":"Platforms","label":"MacOS","value":"macos"},{"group":"Platforms","label":"Windows","value":"windows"},{"group": "Platforms","label":"Docker","value":"docker"}]}>

<TabItem value="linux">

<Tabs
  centered={true}
  className="rounded"
  defaultValue="universal"
  values={[{"label":"*nix","value":"universal"},{"label":"Arch Linux","value":"arch"},{"label":"Manual","value":"manual"}]}>

<TabItem value="universal">

To download and install Qovery CLI on any Linux distribution:
```bash
$ curl -s https://get.qovery.com | bash
```

</TabItem>
<TabItem value="arch">

Qovery is part of [AUR](https://aur.archlinux.org/packages) packages, so you can install it with [yay](https://github.com/Jguer/yay):

```bash
$ yay qovery-cli
```

</TabItem>
<TabItem value="manual">

Install the Qovery CLI on Linux manually by downloading the [latest release][urls.qovery_cli_releases], and uncompress its content to a folder into your shell `PATH`.

</TabItem>
</Tabs>
</TabItem>

<TabItem value="macos">

<Tabs
  centered={true}
  className="rounded"
  defaultValue="homebrew"
  values={[{"label":"Homebrew","value":"homebrew"},{"label":"Script","value":"script"},{"label":"Manual","value":"manual"}]}>

<TabItem value="homebrew">

The common solution to install a command line binary on the MacOS is to use [Homebrew][urls.brew].

```bash
# Add Qovery brew repository
$ brew tap Qovery/qovery-cli

# Install the CLI
$ brew install qovery-cli
```

</TabItem>

<TabItem value="script">

To download and install Qovery CLI from the command line:
```bash
$ curl -s https://get.qovery.com | bash
```

</TabItem>

<TabItem value="manual">

Install the Qovery CLI on Mac OS manually by downloading the [latest release][urls.qovery_cli_releases], and uncompress its content to a folder into your shell `PATH`.

</TabItem>

</Tabs>

</TabItem>

<TabItem value="windows">

<Tabs
  centered={true}
  className="rounded"
  defaultValue="scoop"
  values={[{"label":"Scoop","value":"scoop"},{"label":"Manual","value":"manual"}]}>

<TabItem value="scoop">

The classic way to install binaries on Windows is to use [Scoop][urls.scoop].

```bash
# Add Qovery bucket
$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli

# Install the CLI
$ scoop install qovery-cli
```

</TabItem>

<TabItem value="manual">

Install the Qovery CLI on Windows manually by downloading the [latest release][urls.qovery_cli_releases], and uncompress its content to
`C:\Windows`.

</TabItem>

</Tabs>

</TabItem>


<TabItem value="docker">

Install Docker on your local machine and run the following command:

```bash
# Pull and Run the latest Qovery CLI
$ docker run ghcr.io/qovery/qovery-cli:latest help
```

Change `latest` by the version you want to use. For example, to use the version 0.58.4, run:

```bash
$ docker run ghcr.io/qovery/qovery-cli:0.58.4 help
```

Note: `ghcr.io` is the [GitHub Container Registry](https://github.com/Qovery/qovery-cli/pkgs/container/qovery-cli).

</TabItem>

</Tabs>

### Sign up

```bash
# Sign up and sign in command
$ qovery auth
```

<Alert type="info">

If you are using a headless (without GUI) environment, you can use the following command to sign up and sign in:

```bash
# Sign up and sign in command
$ qovery auth --headless
```

</Alert>

Your browser window with Qovery sign-up page will open. Follow the instructions to sign up and sign in.

### Help

You can see all the commands available by executing:

```bash
$ qovery help
```

```bash title="Help output"
$ qovery help
A Command-line Interface of the Qovery platform

Usage:
  qovery [command]

Available Commands:
  application  Manage applications
  auth         Log in to Qovery
  cluster      Manage clusters
  completion   Generate the autocompletion script for the specified shell
  console      Opens the application in Qovery Console in your browser
  container    Manage containers
  context      Manage CLI context
  cronjob      Manage cronjobs
  database     Manage databases
  env          Manage Environment Variables and Secrets
  environment  Manage environments
  helm         Manage helms
  help         Help about any command
  lifecycle    Manage lifecycle jobs
  list-pods    List the pods of a service with their pods
  log          Print your application logs
  port-forward Port forward a port to an application container
  project      Manage Project
  service      Manage services
  shell        Connect to an application container
  status       Print the status of your application
  token        Generate an API token
  upgrade      Upgrade Qovery CLI to latest version
  version      Print installed version of the Qovery CLI

Flags:
  -h, --help      help for qovery
      --verbose   Verbose output

Use "qovery [command] --help" for more information about a command.
```

## Context

Context command lets you configure the CLI to work with your chosen application. Before executing other commands, you need first to set up the context.
The context is then remembered and used by the CLI. You can configure a new context anytime by running the `qovery context set` command.

Most of the commands support an inline context set allowing you to directly pass the URL of the application you wants to interact with.

Example:
```bash
$ qovery shell https://console.qovery.com/organization/51927012-8377-4e0f-84cf-7f5f38a0154b/project/a6545d50-69a3-4966-89cc-4c0bfb6d3448/environment/c9ac549b-a855-4d3b-b652-d68d5f1fea11/application/820ca0a3-08bf-42c1-8ad2-540714ad657f/general
# this is the url of my back-end application

Organization | My orga
Project      | R&D / Backend
Environment  | prod
ServiceLevel | back-end
ServiceType  | application

$ ls
...
```

### Set New Context

To set a new context, type `qovery context set`:

```bash
$ qovery context set
Qovery: Current context:
Organization | Qovery
Project      | test
Environment  | development
Application  | website

Qovery: Select new context
Organization:
✔ Qovery
Project:
✔ admin
Environment:
✔ main
Application:
✔ app

Qovery: New context:
Organization | Qovery
Project      | admin
Environment  | main
Application  | app
```

### Print Current Context

```bash
$ qovery context
Qovery: Current context:
Organization | Qovery
Project      | admin
Environment  | main
Application  | app

Qovery: You can set a new context using 'qovery context set'.
```

## Log

Log command allows you to display the application logs.

```bash
$ qovery log
  TIME                    MESSAGE
  Jul 15 08:46:13.019717       at /usr/src/app/autoFunctions/levels.js:17:16
  Jul 15 08:46:13.019721       at Array.forEach (<anonymous>)
  Jul 15 08:46:13.019724       at Timeout._onTimeout (/usr/src/app/autoFunctions/levels.js:15:14)
  Jul 15 08:46:13.019728       at listOnTimeout (internal/timers.js:557:17)
  # ... the rest of logs
```

By default, the last 1000 logs is displayed.

### Follow Logs

To make the CLI follow your logs, use `-f` flag:

```bash
$ qovery log -f
  TIME                    MESSAGE
  Jul 15 08:46:13.019717       at /usr/src/app/autoFunctions/levels.js:17:16
  Jul 15 08:46:13.019721       at Array.forEach (<anonymous>)
  Jul 15 08:46:13.019724       at Timeout._onTimeout (/usr/src/app/autoFunctions/levels.js:15:14)
  Jul 15 08:46:13.019728       at listOnTimeout (internal/timers.js:557:17)
  # ... the rest of logs
```

This will make the CLI follow your application logs and append any new logs till you use `CTRL+C`.

## Status

Status command lets you print the basic status of your application.

```bash
$ qovery status
15 Jul 21 10:55 CEST
Application | Backend
Status      | RUNNING
```

## Console

Console command quickly opens the Qovery Console in your browser to let you display more information about your application.

```bash
$ qovery console
Qovery: Opening https://console.qovery.com/platform/organization/your-org/projects/your-proj/environments/your-env/applications/your-app/summary
```

## Shell

Shell command allows you to open a connection and execute commands directly on the container running application.

```bash
$ qovery shell
/ # ls
bin                   media                 srv
dev                   mnt                   sys
docker-entrypoint.d   opt                   tmp
docker-entrypoint.sh  proc                  usr
etc                   root                  var
home                  run                   www
lib                   sbin
```
<Alert type="info">
Keep in mind these limitations when using this feature:
<ul>
  <li>Install a process reaper as pid one in your container (i.e: dumb-init), as you may leave zoombie process in your container if your shell terminate unproperly (i.e: ctrl+c, cnx restart). This is a known issue with kubernetes exec to leave process alive after attach is closed;</li>
  <li>shell is force closed after [1 hour, 1GB transmitted];</li>
  <li>we use SH by default. To have auto-completion, start bash.</li>
</ul>
</Alert>

<Alert type="info">
The width of the terminal is limited to 80 characters. But you can resize it once you are inside the application with one of these commands:

```bash
COLUMNS=200 tput init
stty cols 200
```

</Alert>

### Pass a command

To pass a command, you can use the `--command` or `-c` argument followed by your command.

```bash
$ qovery shell --command ls
bin                   media                 srv
dev                   mnt                   sys
docker-entrypoint.d   opt                   tmp
docker-entrypoint.sh  proc                  usr
etc                   root                  var
home                  run                   www
lib                   sbin
```

To pass several arguments, you can separate them with a comma or send different `--command`.

`qovery shell --command ls --command -l`
`qovery shell --command ls,-l`
`qovery shell -c ls,-l`

```bash
$ qovery shell --command ls --command -l
drwxr-xr-x    2 root     root          4096 Nov 30 09:32 bin
drwxr-xr-x    5 root     root           360 Dec 21 09:46 dev
drwxr-xr-x    1 root     root            41 Dec 20 20:13 docker-entrypoint.d
-rwxr-xr-x    1 root     root          1620 Dec 20 20:13 docker-entrypoint.sh
drwxr-xr-x    1 root     root            25 Dec 21 09:46 etc
drwxr-xr-x    2 root     root             6 Nov 30 09:32 home
drwxr-xr-x    1 root     root            61 Dec 20 22:11 lib
drwxr-xr-x    5 root     root            44 Nov 30 09:32 media
drwxr-xr-x    2 root     root             6 Nov 30 09:32 mnt
drwxr-xr-x    2 root     root             6 Nov 30 09:32 opt
dr-xr-xr-x  209 root     root             0 Dec 21 09:46 proc
drwx------    1 root     root            26 Dec 21 10:38 root
drwxr-xr-x    1 root     root            23 Dec 21 09:46 run
drwxr-xr-x    2 root     root          4096 Nov 30 09:32 sbin
drwxr-xr-x    2 root     root             6 Nov 30 09:32 srv
dr-xr-xr-x   13 root     root             0 Dec 21 09:46 sys
drwxrwxrwt    2 root     root             6 Nov 30 09:32 tmp
drwxr-xr-x    1 root     root            66 Nov 30 09:32 usr
drwxr-xr-x    1 root     root            19 Nov 30 09:32 var
drwxr-xr-x    2 root     root            59 Dec 21 09:45 www
```

### Shell in a dedicated pod

If your application is running on several pods, you can shell directly in a dedicated one by using the `--pod` or `-p` argument followed by your pod name.

```bash
$ qovery shell --pod app-5f65fb5c4-frontend-5f65db5c4b-q4w11
```

NOTE: you can get the list of pods by running the `qovery list-pods` command.

### Shell in a dedicated container

If you have several containers in your pod, you can shell directly in a dedicated one by using the `--container` argument followed by your container name.

```bash
$ qovery shell --container app-5f65fb5c4-frontend
```

## Port-forward

Port-forward command allows you to port-forward all the traffic on your local machine to a remote resource available on a Qovery environment. This mechanism allows developers to create a secure, encrypted tunnel from their local machine to the application or databases hosted in the cloud. 

```bash
$ qovery port-forward -p 8000:80 #your_local_port:your_remote_port
Info: Current context:
Organization | Qovery Prod
Project      | R&D / Frontend
Environment  | prod
Service      | console
Type         | application

Info: Continue with port-forward command using this context ?
Please type "yes" to validate context: yes

Listening on 127.0.0.1:8000 => 80
```

The port-forward feature works with any `application`, `Cronjob`, `Lifecycle job` or `database` (Container or Managed) deployed with Qovery.

Im this example, you can now connect on `http://localhost:8000` to access your application.

<Alert type="warning">

Qovery port-forward limitations:

* The connection time is limited to 30s of inactivity for the first message or the connection will be closed.
* The total connection time is limited to 1h of activity. After that, the connection will be closed.
* The maximum size of data transferred is 1GB. Above that size, the connection will be closed.

If you want to bypass those limitations, you need to have an access to the Kubernetes cluster directly. Then use [Kubernetes dedicated port-forward mechanism](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_port-forward/)
(you can use `qovery cluster kubeconfig --cluster-id xxxx` to get your kubeconfig).

</Alert>

### Port-forward a dedicated pod

If your application is running on several pods, you can port-forward to a dedicated one by using the `--pod` argument followed by your pod name.

```bash
$ qovery port-forward -p 8000:80 -pod app-5f65fb5c4-frontend-5f65db5c4b-q4w11
```
NOTE: you can get the list of pods by running the `qovery list-pods` command.

### Port-forward on a managed database

Before connecting to your database, it is important to review the requirements from the Cloud Provider's documentation. A common mistake is to overlook this documentation, which can lead to hours of troubleshooting.

In this example we'll refer to the [DocumentDB (MongoDB) documentation](https://docs.aws.amazon.com/documentdb/latest/developerguide/connect_programmatically.html) from AWS.
As noted, you need to use TLS to connect to the database. First, download the TLS certificate:

```bash
wget https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem
```

Next, run the Qovery port forward command, which you can obtain directly from the console:

<p align="center">
  <img src="/img/port_forward_docdb.png" alt="Get DB connectivity" />
</p>

Finally, validate the connectivity with the following command:
```bash
mongosh --tls --host localhost:27017 --tlsCAFile global-bundle.pem --tlsAllowInvalidHostnames true --username <sample-user> --password <password>
```

## Generate API token

To use the Qovery API you will need to generate an authentication token. To generate an API token you can install the CLI and type

<Alert type="warning">

Never share your API token with anyone.

</Alert>

```bash
$ qovery token

Qovery: Select organization
Organization:
✔ My Organization
Choose a token name
Token name: Romaric
Choose a token description
Token description: used for Github Actions
Qovery: ---- Never share this authentication token and keep it secure ----
Qovery: qov_4LnEg2wFxxxxxHObGSQ22rjBZZyyyySgyR6Y_2500882691
Qovery: ---- Never share this authentication token and keep it secure ----
```

To use your token and list your organizations.

```shell
curl -X GET -H 'Authorization: Token qov_4LnEg2wFxxxxxHObGSQ22rjBZZyyyySgyR6Y_2500882691' https://api.qovery.com/organization
```
<Alert type="info">

The token can be used to interact programmatically with our API (directly, via our Terraform Provider etc..).
If you get a 424 error while trying to create new applications from one of your git repository, please make sure that the Organization Owner has access to the repository you are configuring for your app.

</Alert>

Check out our [API documentation][urls.qovery_swagger]

## Managing services, environments and projects
The CLI allows you to manage and deploy the environment and services within your organization

### application, container, lifecycle, cronjob
These commands allow you to manage all these services via the CLI. You can run the following actions on these services:
- cancel: Cancel the service deployment
- delete: Delete a service
- deploy: Deploy a service
- list: List the service of the specified type
- redeploy: Redeploy a service (already deployed before)
- stop: Stop a service
- update: Update a service (service name, git branch, auto-deploy, ...)

Each action allows you to specify additional parameters to define the service you want to modify (you can find them via the --help command) 

Example: Listing applications and triggering a deployment
```bash
$ qovery application list
Name      | Type        | Status  | Last Update                         
backend   | Application | STOPPED | 2023-02-02 14:48:05.339652 +0000 UTC
front-end | Application | STOPPED | 2023-02-09 14:04:38.079792 +0000 UTC

$ qovery application deploy -n "backend"
Deploying application backend in progress..

$ qovery application list
Name      | Type        | Status  | Last Update                         
backend   | Application | RUNNING | 2023-02-13 12:59:23.228231 +0000 UTC
front-end | Application | STOPPED | 2023-02-09 14:04:38.079792 +0000 UTC
```

Example: Enable the auto-deploy feature for an application
```bash
$ qovery application update --application backend --auto-deploy true
Application backend updated!
```

### Environment
The command `environment` allow you to manage a specific environment via the CLI. You can run the following actions on environments:
- cancel: Cancel an environment deployment
- clone: Clone an environment
- delete: Delete an environment
- deploy: Deploy an environment
- list: List environments
- redeploy: Redeploy an environment
- stage: Manage deployment stages
- stop: Stop an environment

Each action allows you to specify additional parameters to define the service you want to modify (you can find them via the --help command)

Example: Manage deployment stages and triggering deployment
```bash
~ $ qovery environment stage list

# deployment stage 1: "DATABASE DEFAULT"
Rename me to avoid default/legacy ordering

Type     | Name
DATABASE | Redis
DATABASE | DB


# deployment stage 2: "JOB DEFAULT"
Rename me to avoid default/legacy ordering

<no service>


# deployment stage 3: "CONTAINER DEFAULT"
Rename me to avoid default/legacy ordering

Type      | Name
CONTAINER | Rabbitmq


# deployment stage 4: "APPLICATION DEFAULT"
Rename me to avoid default/legacy ordering

Type        | Name
APPLICATION | Backend
APPLICATION | Frontend
APPLICATION | Pablo Backend App
APPLICATION | API gateway

~ $ qovery environment deploy
Environment is deploying!
```

### Projects

You can list the organization's projects by using the following command:

```bash
qovery project list
```

## Access your cluster

To access your Qovery managed cluster, follow these steps:

<Tabs
  centered={true}
  className={"rounded"}
  defaultValue={"managed-cluster"}
  placeholder="Select your cluster mode"
  select={false}
  size={null}
  values={[
    {"group":"Features","label":"Managed cluster","value":"managed-cluster"},
    {"group":"Features","label":"Self-Managed cluster","value":"self-managed-cluster"},
  ]}>

<TabItem value="managed-cluster">

1. **Export your kubeconfig file** by running the command below, replacing `your-cluster_id` with your actual cluster ID:

```bash
qovery cluster kubeconfig --cluster-id <your-cluster_id>
```

2. **Set the KUBECONFIG environment variable** to the path of the kubeconfig file obtained from the previous command:

```bash
export KUBECONFIG=<path_to_kubeconfig_file>
```
  
</TabItem>

<TabItem value="self-managed-cluster">

1. **Launch a debug pod** by running the command below, replacing `your-cluster_id` with your actual cluster ID:

```bash
qovery cluster debug-pod --cluster-id <your-cluster_id>
```

2. **You are connected directly on your pod attached to your cluster**

</TabItem>
</Tabs>

3. You can now use tools like `k9s` or `kubectl` to access and manage your cluster:

<Alert type="info">

Some cloud providers like GCP or AWS require additional configuration to access the cluster. Make sure you have CLI binaries installed (gcloud CLI/AWS CLI/...), and the right permissions and credentials set up (environment variables or profile file).

</Alert>

**Using k9s**

Launch the k9s terminal UI to interact with your Kubernetes cluster:

```bash
k9s
```

**Using kubectl**

Here are a few examples of common kubectl commands:

```bash
kubectl get pods #List all pods in the default namespace
```

```bash
kubectl describe pod <pod_name> #Get detailed information about a specific pod
```

## Lock cluster updates

The lock cluster command prevents any update or deployment from being initiated on a cluster while it is locked. Once a cluster is locked, no new updates can be processed until it is unlocked.

**Lock cluster**

```bash
qovery cluster lock --cluster-id <your-cluster_id> --reason <reason> --ttl-in-days <days>
```

Note that the TTL can not be greater than 5 days.

**Unlock cluster**

```bash
qovery cluster unlock --cluster-id <your-cluster_id>
```

**List clusters locked**

You can list all the cluster locked withing an organization by running this comamnd:

```bash
qovery cluster locked --organization-id <org-id>
```

## Managing the Deployment Pipeline

In the following sections we will describe how to modify the Deployment Pipeline. 

### List stages

You can list all the stages of your environment by using the following command:

```bash
qovery environment stage list
```

### Add a stage
You can add a new stage by using the following command:

```bash
qovery environment stage create -n <name> -d <description>
```

Note that the stage will be added at the end of the pipeline (the highest number)

### Modify a stage
You can modify a stage by using the following command:

```bash
qovery environment stage edit -n <original name> --new-name <new name> --new-description <new description>
```

### Delete a stage
You can modify a stage by using the following command:

```bash
qovery environment stage delete -n <name>
```

### Change stage for a service
You can modify the stage associated to a service by using the following command:

```bash
qovery environment stage move -n <service name> --stage <stage name>
```

## Static token

You can use a static token to authenticate to Qovery CLI. Which is useful for CI/CD pipelines.

Environment variables available to set static token:
- `QOVERY_CLI_ACCESS_TOKEN`
- `Q_CLI_ACCESS_TOKEN`

```bash
export QOVERY_CLI_ACCESS_TOKEN=xxx

qovery log --organization MyOrg --project MyProject --environment MyEnv --application MyApp
# you will see the log output
```

## Support

Do you have any issues with Qovery CLI? [Open an issue](https://github.com/Qovery/qovery-cli/issues).


[docs.using-qovery.integration.terraform-provider]: /docs/using-qovery/integration/terraform-provider/
[docs.using-qovery.interface.rest-api]: /docs/using-qovery/interface/rest-api/
[urls.brew]: https://brew.sh/
[urls.qovery_cli_releases]: https://github.com/Qovery/qovery-cli/releases
[urls.qovery_swagger]: https://api-doc.qovery.com
[urls.scoop]: https://scoop.sh/
