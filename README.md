# dbs-at-docker-compose

Multipul Databases At Docker Compose



## System required

This `docker-compose.yml` specifies the `version: "3.9"`.

You can check if your "docker-compose" meets the requirements here.

[Compose and Docker compatibility matrix(docker docs)](https://docs.docker.com/compose/compose-file/#compose-and-docker-compatibility-matrix)



## Usage

Write your setting to ``.env`` file

```bash
cp -p .env_example .env
vi .env # write your setting
```



#### Setting Variable

* DB_USER : Your DB user name
* DB_PASSWORD : Your DB password
* DB_ROOT_PASSWORD : Your DB ROOT password (Only at MySQL)
* DB_NAME : Database to be created first (Only at MySQL, Postgres)




#### And docker compose run!!

```bash
# Run containers in the background
docker-compose up -d
```



#### Connect databases

```bash
### MySQL
mysql -u {your_db_user_name} -h localhost {database_name} --protocol=tcp -p

### Postgres
psql -h localhost -U {your_db_user_name} -d {database_name}

### MongoDB
# This is initial state, Please use only development at local.
mongo

### redis
redis-cli

### memcached
telnet localhost 11211

### Couch DB
curl -X GET http://{your_db_user_name}:{your_db_password}@127.0.0.1:5984/_all_dbs
# Create "exampledb"
curl -X PUT http://{your_db_user_name}:{your_db_password}@127.0.0.1:5984/exampledb
# Check all dbs
curl -X GET http://{your_db_user_name}:{your_db_password}@127.0.0.1:5984/_all_dbs
# => ["exampledb"]
```

#### How to delete containers

To delete all docker containers, execute ``allclear.sh``.

```bash
./allclear.sh
```

