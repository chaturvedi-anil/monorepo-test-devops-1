# Base image
FROM node:18

WORKDIR /app

COPY . .

RUN cd apps/web && npm install

EXPOSE 3000

CMD ["npm", "run", "--prefix", "apps/web", "dev"]
