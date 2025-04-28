# Use the official OpenJDK 17 base image
FROM openjdk:17-jdk-slim as builder

# Set the working directory in the container
WORKDIR /app

# Copy the Maven wrapper and pom.xml to the container
COPY .mvn .mvn
COPY mvnw mvnw
COPY mvnw.cmd mvnw.cmd
COPY pom.xml .

# Make the mvnw file executable
RUN chmod +x mvnw

# Download the dependencies using the wrapper
RUN ./mvnw dependency:go-offline

# Copy the entire project into the container
COPY src ./src

# Build the project (this generates the jar file)
RUN ./mvnw clean package -DskipTests

# Use a smaller base image for the final container
FROM openjdk:17-jdk-slim

# Set the working directory in the final container
WORKDIR /app

# Copy the jar file from the builder image to the final container
COPY --from=builder /app/target/product-service-*.jar app.jar

# Expose port 8080 (the default port for Spring Boot)
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
