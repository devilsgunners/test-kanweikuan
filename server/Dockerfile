# FROM node:lts-slim

# RUN mkdir -p /mnt/c/Code/Projects/Test

# WORKDIR /mnt/c/Code/Projects/Test

# EXPOSE 9000

# # You can change this
# CMD [ "npm", "run", "dev" ]

# FROM node:12
# # Create app directory
# WORKDIR /mnt/c/Code/Projects/Test/server
# # Install app dependencies
# COPY package*.json ./

# RUN npm install
# # Copy app source code
# COPY . .

# #Expose port and start application
# EXPOSE 8080
# CMD [ "npm", "start" ]


FROM node:12
# Create app directory
RUN mkdir -p /usr/src/app/test-server
WORKDIR /usr/src/app/test-server
# Install app dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 9000
CMD ["npm", "start"]