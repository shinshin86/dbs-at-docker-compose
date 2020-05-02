# remove docker containers
docker rm -f dbs-mysql
docker rm -f dbs-postgres
docker rm -f dbs-mongodb

# clear data dir
rm -rf datadir/
mkdir datadir
