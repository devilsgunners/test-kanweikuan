# Development
## Requirement

1. Node 8.8.1
1. Docker (LATEST)
1. Docker Compose (LATEST)

Change directory to dhome service directory

    cd ./services/dhome

To install dependencies run 
    
    npm install

To run the backend service for development run

    docker-compose up --remove-orphans --build
    
    
> __NOTE__ Do note that backend service should run first before frontend service

> __NOTE__ By default we will use staging database 
    
## Process

This project is deployed automatically using Bitbucket pipeline

Every deployment to Staging and Production must pass through Pull Request