FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
Run sudo npm uninstall -g phantomjs-prebuilt
Run sudo npm install -g phantomjs-prebuilt
RUN npm install
COPY . .
CMD ["npm", "run", "start"]