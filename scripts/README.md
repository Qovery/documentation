# `scripts` folder

The `scripts` folder contains various utility scripts that help to
maintain the Qovery docs. All of these are exposed through the `Makefile`,
and it should be rare that you have to call these directly (except `generate` script that generates).

## Setup

Make sure you have Ruby installed. A simple way to install this is:

```bash
brew install rbenv
rbenv install 2.6.3
rbenv global 2.6.3
```

We also need bundler

```bash
gem install bundler
```

These are currently the only requirements.
