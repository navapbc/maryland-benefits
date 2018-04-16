FROM node:8.11.1

WORKDIR /var/core/app
COPY . /var/core/app

# Install node modules
RUN yarn install

# Start dev server
CMD yarn run docker:start
