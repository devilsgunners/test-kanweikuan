# FROM node:lts-slim

# RUN mkdir -p /mnt/c/Code/Projects/Test

# WORKDIR /mnt/c/Code/Projects/Test

# EXPOSE 3000

# CMD [ "npm", "start" ]

FROM node:12
# Create app directory
RUN mkdir /app
WORKDIR /app
# Install app dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]