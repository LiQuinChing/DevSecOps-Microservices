# Stage 1: Build and install dependencies
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Highly Secure Distroless Run Environment
FROM cgr.dev/chainguard/node:latest
ENV NODE_ENV=production
WORKDIR /app

# Copy the entire app from the builder stage
COPY --from=builder /app /app

EXPOSE 5000

# Chainguard executes directly via Node, no shell needed
CMD ["server.js"]