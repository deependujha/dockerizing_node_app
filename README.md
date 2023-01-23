# Creating docker image and running it

- ## Create 'docker image' from Dockerfile

``` sh
docker build -t <name_for_image> .
# -t represents tag name
# . represents the current directory
```

- ## Run the dockerimage as container

``` sh
docker run -d -p <Browser_expose_port>:<application port> <image_id/name>

# -d(daemon) — it runs the code in the background
# -p represents port networking number (mapping port number of device to the docker container's port number)
```

---

### Some docker commands

#### commands regarding Containers

- To list running containers

``` sh
docker ps
```

- To list all the available containers
  
``` sh
docker ps -a
```

- To start a stopped container

``` sh
docker start <container_name/ID>
```

- To stop a running container

```sh
docker stop <container_name/ID>
```

- To remove a stopped container

```sh
docker rm <container_name/ID>
```

#### commands regarding Images

- To list all the available images

``` sh
docker images
```

- To list all the available images
  
``` sh
docker images -a
```

- To remove an image

``` sh
docker image rm <image_name/ID>
```
