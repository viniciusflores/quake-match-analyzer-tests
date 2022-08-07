FROM node:14.20.0-slim

WORKDIR /usr

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/paulo-silva/quake-log-parser.git

WORKDIR /usr/quake-log-parser

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]
