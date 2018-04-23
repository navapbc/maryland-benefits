FROM ruby:2.5

COPY . /var/core/app
WORKDIR /var/core/app

# Install ruby gems and start rails server
RUN bundle install

CMD RAILS_ENV=$RAILS_ENV rails s
