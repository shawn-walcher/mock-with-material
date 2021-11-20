# Stage 1 build frontend
FROM node:14-alpine3.12 as build

WORKDIR /usr/src/app
COPY ./frontend/package* ./

RUN npm ci

COPY ./frontend ./

RUN npm run build

# Stage 2 Setup express.js backend to serve built frontend with minimal dependencies
FROM node:14-alpine3.12 as runner

WORKDIR /app
COPY ./backend/package* ./

RUN npm ci
RUN rm -rf ./build

COPY --from=build ./usr/src/app/build ./build
COPY ./backend ./

EXPOSE 8000

CMD ["node", "--trace-warnings", "server.js"]