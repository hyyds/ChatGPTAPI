FROM node:lts-alpine3.16

LABEL AUTHOR="hc" \
      TAG=V1 \
      VERSION=1.0.0

ENV REPO_URL=https://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@github.com/hyyds/ChatGPTAPI.git \
    REPO_BRANCH=main

RUN set -ex \
    && apk update \
    && apk upgrade \
    && apk add --no-cache bash tzdata git moreutils curl jq openssh-client \
    && rm -rf /var/cache/apk/* \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && npm install pm2 ts-node typescript -g \
    && git clone -b $REPO_BRANCH $REPO_URL /ChatGPTAPI \
    && cd /ChatGPTAPI \
    && npm install \
    && cp /ChatGPTAPI/docker/docker_entrypoint.sh /usr/local/bin \
    && chmod +x /usr/local/bin/docker_entrypoint.sh

WORKDIR /ChatGPTAPI

ENTRYPOINT ["docker_entrypoint.sh"]
