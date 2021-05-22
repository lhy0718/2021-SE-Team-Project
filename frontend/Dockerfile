FROM node:14-alpine
LABEL email="tsot8295@gmail.com"

WORKDIR /app

COPY ./package.json /app
COPY ./yarn.lock /app

RUN yarn 

COPY . /app
RUN yarn build 

EXPOSE 4000

CMD ["yarn", "serve"]