FROM ruby:2.5

WORKDIR /var/core/app
COPY . /var/core/app

# Install ruby gems and start rails server
RUN bundle install

CMD rm /tmp/pids/server.pid && RAILS_ENV=$RAILS_ENV rails s
