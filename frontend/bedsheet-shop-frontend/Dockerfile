# Step 1: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy only the package files first (for better Docker cache usage)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install   # "npm ci" is faster, cleaner than "npm install"

# Copy all project files
COPY . .

# Build your app
RUN npm run build

# Step 2: Serve the build using Nginx
FROM nginx:alpine

# Clean default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy only the build output from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy a custom nginx config if you have one (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
