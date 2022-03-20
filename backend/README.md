# Project eecomerce backendside


1. This project runs using docker compose so be sure that you have it installed already


2. run npm i


3. run docker-compose up
    * This command setup a docker container of mysql and creates the database **eecomerce if doesn't exists**
    the http server container waits until the mysql container setup successfuly. Then it runs on development mode. The container use a **bind mount** to use
    your localhost folders and files to put it inside the container, so when you change some file inside src/ on your localhost machine, this file will change inside the cointaner and trigger ts-node. 

4. This project uses Apollo server and Typeorm



