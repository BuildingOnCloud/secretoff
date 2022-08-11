FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install express --save
RUN npm install body-parser --save
RUN npm install cookie-parser --save
RUN npm install multer --save
RUN npm install cors --save
COPY . .
EXPOSE 8080
CMD ["node", "app.js"]
