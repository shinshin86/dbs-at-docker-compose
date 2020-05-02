# remove docker containers
docker rm -f dbs-mysql
docker rm -f dbs-postgres
docker rm -f dbs-mongodb
docker rm -f dbs-redis

# clear data dir
rm -rf datadir/
mkdir datadir
