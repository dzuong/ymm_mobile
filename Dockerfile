FROM ruby:2.3.1

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

RUN gem install bundle

RUN mkdir /ymm_mobile

WORKDIR /ymm_mobile


RUN bundle install

ADD . /ymm_mobile
