FROM node:18

WORKDIR /app

COPY . .

RUN cd apps/http-server && npm install

EXPOSE 8000

CMD ["npm", "run", "--prefix", "apps/http-server", "start"]

