# Specify a base image
# This is case sensitive!
FROM node:alpine 

# Set working directory for application
WORKDIR /usr/app

# Let the image access the files in my folder
# A little change in the source files causes
# all the dependencies to reinstall
# that is why I broke the copy command
COPY ./package.json ./

# Install some dependencies
RUN npm install

# now we copy all the source files
COPY ./ ./

# Default command
CMD ["npm", "start"]