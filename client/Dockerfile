# FROM node:lts-slim

# RUN mkdir -p /mnt/c/Code/Projects/Test

# WORKDIR /mnt/c/Code/Projects/Test

# EXPOSE 3000

# CMD [ "npm", "start" ]

FROM node:12
# Create app directory
RUN mkdir -p /usr/src/app/test-client
WORKDIR /usr/src/app/test-client
# Install app dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install
#RUN npm update
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 4000
CMD ["npm", "start"]