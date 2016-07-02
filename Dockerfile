FROM node:4-onbuild

RUN apt-get update -qq && apt-get install -y git-core curl build-essential openssl libssl-dev

RUN mkdir -p /usr/src/ymm_mobile_ui

WORKDIR /usr/src/ymm_mobile_ui

COPY package.json /usr/src/ymm_mobile_ui

RUN npm install

ADD . /usr/src/ymm_mobile_ui

EXPOSE 8088

CMD ["npm", "start"]