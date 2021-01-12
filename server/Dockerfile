FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
Run sudo npm uninstall -g phantomjs-prebuilt
Run npm install phantomjs-prebuilt@2.1.13
RUN sudo apt-get install libfontconfig
RUN npm install
COPY . .
CMD ["npm", "run", "start"]