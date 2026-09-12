FROM node:20-alpine

WORKDIR /app
COPY package.json app.js index.html ./

USER node

EXPOSE 3000
CMD ["node", "app.js"]
#hello this is a demo change
