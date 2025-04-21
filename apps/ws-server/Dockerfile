FROM base as ws-server

WORKDIR /app
COPY . .

EXPOSE 8080

CMD ["pnpm", "--filter", "ws-server", "start"]
