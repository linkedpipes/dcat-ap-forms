FROM node:21.1.0-bullseye

WORKDIR /opt/dcat-ap-forms/
COPY ./package*.json ./
RUN npm ci

COPY ./ ./
RUN npm run build

CMD ["npm", "run", "start"]
