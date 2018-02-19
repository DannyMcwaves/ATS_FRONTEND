FROM node:alpine

WORKDIR /app

COPY . /app

#RUN npm install --save

EXPOSE 80

ENV PORT 80

ENV HOST 127.0.0.1

CMD node bin/www
