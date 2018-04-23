FROM node:8.11.1

COPY . /var/core/app
WORKDIR /var/core/app

# Install node modules
RUN yarn install

# Start dev server
CMD yarn run docker:start
