FROM node:18

WORKDIR /app

COPY . .

RUN cd apps/ws-server && npm install

EXPOSE 8080

CMD ["npm", "run", "--prefix", "apps/ws-server", "start"]
