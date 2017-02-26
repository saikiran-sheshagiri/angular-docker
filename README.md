# angular-docker

- Install docker
- Build a docker image
    docker build -t angular-docker:dev .
- Start\run a container
    docker run -d --name angular-docker-container -p 7878:7878 angular-docker:dev