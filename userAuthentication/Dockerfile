FROM openjdk:11-jre-slim
WORKDIR usr/src
EXPOSE 8085
ADD ./target/userAuthentication-0.0.1-SNAPSHOT.jar /usr/src/userAuthentication-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","userAuthentication-0.0.1-SNAPSHOT.jar"]
