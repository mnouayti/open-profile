FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN apk --update add fontconfig ttf-dejavu
RUN npm install
COPY . .
CMD ["npm", "run", "start"]