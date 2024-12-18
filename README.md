# siemens-dockerkubernetes-25thnov-2024
repository for docker and kubernetes
# Docker

## 1. Named Volume

the name of the shared volume would be known here

    -v <volume-name>:\<container-dir-path>

*Note* - Irrespective of *Volume type*; if the voulume has been shared acrorss multiple containers; if the primary container removed the shared volumes remains/persists.
But when the secondary container is removed, the volume goes off as well.

    docker volume ls
*Note* - Named volume can be created manually but not Anonymous volume by `docker volume create` command

*Note* - The volume does not increase the size of the container. 
