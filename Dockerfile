# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine AS runner

# Set NODE_ENV to production
ENV NODE_ENV production

# Set the working directory inside the container
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
