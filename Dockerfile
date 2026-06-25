FROM node:22
WORKDIR /app
COPY . .
CMD ["node", "assemble.mjs"]
