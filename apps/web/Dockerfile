FROM base as web

WORKDIR /app
COPY . .

EXPOSE 3000

CMD ["pnpm", "--filter", "web", "dev"]
