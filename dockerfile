FROM node:22-alpine AS builder

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

ARG APP_NAME

RUN npm run build:${APP_NAME}

FROM node:22-alpine AS production

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --only=production

ARG APP_NAME

COPY --from=builder /usr/src/app/dist/apps/${APP_NAME} ./dist/

# COPY --from=builder /usr/src/app/dist/libs ./dist/libs

# COPY --from=builder /usr/src/app/assets ./assets

CMD ["node", "dist/main.js"]