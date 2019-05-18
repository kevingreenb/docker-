# Use an existing docker image as a base
# Alpine Linux is the OS, it's 5MB
FROM alpine

# Download and install a dependency
# This is a linux command, it installs redis on
# Apline
RUN apk add --update redis

# Tell the image what to do whent it starts
# as a container
CMD ["redis-server"]

#FROM, RUN, CMD are the most important instructions
#although there are more instructions!

# 1st Terminal window
# docker run -it alpine sh
# apk add --update redis
# 2nd Terminal window
# docker ps to get the id of the container from #1
# docker commit -c 'CMD ["redis-server"]' <container-id>
# docker run container-id