
# Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
# Click nbfs://nbhost/SystemFileSystem/Templates/Other/Dockerfile to edit this template

FROM openjdk:8-jdk-alpine
ADD ./target/Go-Stay-0.0.1-SNAPSHOT.jar nc.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/nc.jar"]
