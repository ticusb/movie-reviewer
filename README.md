# movie-reviewer

### To connect to the database:

We are connecting it to a database hosted by MongoDB Atlas, execture the command

mongosh "mongodb+srv://cluster0.x71nqfg.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509" --apiVersion 1 --tls --tlsCertificateKeyFile ../../certificates/X509-cert-9076983465375967499.pem

### To run the spring serever:

We are using spring to run our server, in order to run execute the command

cd server
./mvnw spring-boot:run

### To run the client application:

cd client
npm start
