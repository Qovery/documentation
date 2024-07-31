FROM public.ecr.aws/r3m4q3r9/pub-mirror-ubuntu:22.04

RUN apt-get update && \
    apt-get -y install yarnpkg bundler git locales sudo inotify-tools npm && \
    apt-get clean && \
    ln -s /usr/bin/yarnpkg /usr/bin/yarn && \
    locale-gen --no-purge en_US.UTF-8 && \
    update-locale LANG=en_US.UTF-8

RUN useradd -u 1000 -m qovery && \
    usermod --password qovery qovery && \
    echo 'qovery ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
    chown qovery /mnt
USER qovery

RUN cd /mnt && \
    git clone https://github.com/Qovery/documentation.git && \
    cd documentation/scripts && \
    bundle install && \
    cd / && rm -Rf /mnt/documentation
