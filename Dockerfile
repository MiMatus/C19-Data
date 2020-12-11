FROM node as builder
WORKDIR /usr/src/app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY . ./
RUN yarn build \
    && yarn install --production --ignore-scripts --prefer-offline \
    && yarn cache clean

FROM node:slim
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .

EXPOSE 3000
CMD  yarn start
