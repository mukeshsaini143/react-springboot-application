<<<<<<< HEAD
# Use the official OpenJDK 17 base image
FROM openjdk:17-jdk-slim AS builder
=======
# Stage 1: Build
FROM eclipse-temurin:17-jdk-alpine as builder
>>>>>>> 1699e260808ca95a6d4a481c3912aec942d5f6ba

WORKDIR /app

COPY .mvn .mvn
COPY mvnw mvnw
COPY mvnw.cmd mvnw.cmd
COPY pom.xml .
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline

COPY src ./src
RUN ./mvnw clean package -DskipTests

# Stage 2: Run
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

COPY --from=builder /app/target/product-service-*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
