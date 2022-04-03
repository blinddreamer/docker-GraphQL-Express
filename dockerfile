FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --check-files
COPY server.js ./
CMD [ "node", "server.js" ]