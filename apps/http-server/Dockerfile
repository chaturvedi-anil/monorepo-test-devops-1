FROM base as http-server

WORKDIR /app
COPY . .

EXPOSE 8000

CMD ["pnpm", "--filter", "http-server", "start"]
