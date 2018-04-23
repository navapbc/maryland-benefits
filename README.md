# Maryland Benefits Application

This repository holds the Maryland Benefits application, a product created by <a href="https://www.navapbc.com/" target="_blank">Nava PBC</a> in partnership with the State of Maryland, as part of the <a href="https://www.navapbc.com/work/benefits-partnership/" target="_blank">Integrated Benefits Initiative</a>.

## Setup

### Docker

While the application can be run natively on your machine, it is easiest to set up within docker containers:

  1. Install Docker. On OSX this can be installed via [Docker for Mac](https://docs.docker.com/docker-for-mac/install/)
  2. Create an `.env` environment file. You can copy the existing example version:

         cp .env.example .env

  3. If you have previously run postgres, ensure it is disabled so that it does not conflict with the version run through docker

         brew services stop postgresql

  3. Run your docker containers

         docker-compose up

The first time you run `docker-compose up`, it will create the application images. If these need to be recreated in the future you can run:

         docker-compoes up --build

If you need to reset your database:

        docker-compose down -v

### Docker-sync for OSX

Docker-sync can be used to combat I/O slowness that docker experiences on OSX. This is an optional step, but can make the development experience faster & more convenient. To get started:

  1. Install docker-sync as a ruby gem


        gem install docker-sync

  2. Once installed, you can run either:


       docker-sync-stack start
       # or

       docker-sync start  # starts sync process in the background
       docker-compose -f docker-compose.yml -f docker-compose-dev.yml up

**Note: If you run into issues where sync'ing stops. Stop and restart the docker-sync process**
