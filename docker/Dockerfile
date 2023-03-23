FROM node:lts-alpine3.12

LABEL AUTHOR="hc" \
      TAG=V1 \
      VERSION=1.0.0

ENV REPO_URL=https://vhuangcan:5ae2e98d940cf0785157f38595ece2a5@gitee.com/vhuangcan/xiaoman.git \
    REPO_BRANCH=main

RUN set -ex \
    && apk update \
    && apk upgrade \
    && apk add --no-cache bash tzdata git moreutils curl jq openssh-client \
    && rm -rf /var/cache/apk/* \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && npm install pm2 ts-node typescript -g \
    && git clone -b $REPO_BRANCH $REPO_URL /xiaoman \
    && cd /xiaoman \
    && npm install \
    && cp /xiaoman/docker/docker_entrypoint.sh /usr/local/bin \
    && chmod +x /usr/local/bin/docker_entrypoint.sh

WORKDIR /xiaoman

ENTRYPOINT ["docker_entrypoint.sh"]
