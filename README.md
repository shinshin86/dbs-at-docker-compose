# dbs-at-docker-compose

Multipul Databases At Docker Compose



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
docker-compose up
```



#### Connect databases

```bash
# MySQL
mysql -u {your_db_user_name} -h localhost {database_name} --protocol=tcp -p

# Postgres
psql -h localhost -U {your_db_user_name} -d {database_name}

# MongoDB
# This is initial state, Please use only development at local.
mongo
```

