# Documentation

This website is built using Docusaurus 2, a modern static website generator.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     README.md.erb
-->

## Installation and usage (Docker)

You can simply use Docker this way:

```bash
docker run -it --rm -v $(pwd):/mnt/documentation -p 3000:3000 qoveryrd/doc:0.1 /mnt/documentation/scripts/docker.sh
```

Open a browser to http://localhost:3000

## Installation and usage (Local)

### Installation (website)

```bash
cd website
yarn
```

### Starting the website locally

```bash
cd website
yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Updating documentation, guides and articles

First, install Ruby gems used for markdown generation in `scripts` folder:

```bash
cd scripts
bundle install
```

Most of the markdown is generated using Ruby templates. You should never update the markdown files - instead, update the Ruby template file.

Markdown is generated using `ERB` (Embedded RuBy).
Instead of editing `.md` files directly, remember to apply your changes to some_doc.md`.erb` and
then generate markdown by running `make generate USE_CONTAINER=none` in the root folder
of the documentation repository.

Running `make generate USE_CONTAINER=none` will apply your changes to all affected markdown files. The `make` command should be executed in the root folder of this repository.
Commit, push & create a PR after running the `make generate USE_CONTAINER=none` with markdown files generated by the templating system.

If you want to have live update writing (the web ui is updated on any save), you can use this:
```
./scripts/live_update.sh
```
#### Screenshot guidelines
- No background
- No rounded corners
- No browser header

Preferred screenshot tools:
- Flameshot
- Skitch (only MacOs)

#### Example

To update the **Getting Started** page in the docs, update the **website/docs/getting-started.md.erb** instead of **website/docs/getting-started.md** file (see the difference in **.erb** file extension).
After making changes to the template, run `make generate USE_CONTAINER=none` in the root folder of the repository. The last step - commit and push your changes, open a PR, and wait for your changes to go live!

### Rewards for contribution

Want to help the community and [get great rewards](https://hub.qovery.com/docs/community/reward/) at the same time? Contribute to Qovery documentation! 
Qovery Community plan is charged by contributions to the community - you can get free credits to host your applications by contributing in many ways - including by writing or fixing the docs!

Learn more about our reward system:
- [How Qovery Billing Works](https://www.qovery.com/blog/how-qovery-billing-works)
- [Rewards](https://hub.qovery.com/docs/community/reward/)



