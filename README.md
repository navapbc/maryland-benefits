# Maryland Benefits Application

This repository holds the Maryland Benefits application, a product created by <a href="https://www.navapbc.com/" target="_blank">Nava PBC</a> in partnership with the State of Maryland, as part of the <a href="https://www.navapbc.com/work/benefits-partnership/" target="_blank">Integrated Benefits Initiative</a>.

## Setup

### Docker

While the application can be run natively on your machine, it is easiest to set up within docker containers:

  1. Install Docker. On OSX this can be installed via [Docker for Mac](https://docs.docker.com/docker-for-mac/install/)

  1. Create an `.env` environment file. You can copy the existing example version:
      ```bash
      cp .env.example .env
      ```

  1. If you have previously run postgres, ensure it is disabled so that it does not conflict with the version run through docker
      ```bash
        brew services stop postgresql
      ```

  1. Run your docker containers
      ```bash
        docker-compose up
      ```

The first time you run `docker-compose up`, it will create the application images. If these need to be recreated in the future you can run:
```bash
  docker-compoes up --build
```

If you need to reset your database:
```bash
  docker-compose down -v
```

### Docker-sync for OSX

Docker-sync can be used to combat I/O slowness that docker experiences on OSX. This is an optional step, but can make the development experience faster & more convenient. To get started:

  1. Install docker-sync as a ruby gem
      ```bash
      gem install docker-sync
      ```

  1. Once installed, you can run either:
      ```bash
        # starts sync and docker containers, follow logs from both
        docker-sync-stack start

        # or as two separate commands
        docker-sync start  # starts sync process in the background
        docker-compose -f docker-compose.yml -f docker-compose-dev.yml up
      ```

**Note: If you run into issues where sync'ing stops. Stop and restart the docker-sync process**
