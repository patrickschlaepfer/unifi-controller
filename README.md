# unifi-controller

Dockerimage that will run the unifi-controller inside.

The name has changed to: `lscr.io/linuxserver/unifi-network-application:latest`

Now it also needs a mongo db.

## Pure Linux

Create a directory called `config` in the current directory.

## Mongodb

Create a two directoies

* /mnt/user/appdata/mongo/
* /mnt/user/appdata/mongo/db

## unraid

Create a directory `/mnt/user/appdata/unifi-network-application`n

## Link

* https://hub.docker.com/r/linuxserver/unifi-controller
* https://computingforgeeks.com/how-to-run-unifi-controller-in-docker-container/

## Run

    $ docker-compose up

## Run in background

    $ docker-compose up -d

## Adjust Inform host

As of in the docker container, unifi app doesn't have to correct hostname/IP address:

its under Settings -> System -> Advanced -> Override Inform Host

![Alt text](inform_host.png)
