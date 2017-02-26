# angular-docker

After cloning the project, make sure you are in the current working directory of the app

- Install docker
- Build a docker image, be in CWD
    "docker build -t angular-docker:dev ."
- Start\run a container
    "docker run -d --name angular-docker-container -p 7878:7878 angular-docker:dev"
- browse the app at "http://localhost:7878"