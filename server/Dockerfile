FROM node:14-alpine
LABEL email="tost8295@gmail.com"

RUN apk add --no-cache bash 

WORKDIR /app 

# for faster build, copy package scripts first.
COPY ./package.json /app 
COPY ./yarn.lock /app

RUN yarn --verbose

# insert necessary files
COPY ./src /app/src
COPY ./tsconfig.json /app 
COPY ./tsconfig.build.json /app 
COPY ./wait-for-it.sh /app
COPY ./.development.env /app

# build the app at docker image build stage
RUN yarn build

ENV NODE_ENV production
EXPOSE 3000

CMD ["yarn", "start:without-build"]