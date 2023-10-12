FROM public.ecr.aws/i3c5v1i2/node:16
RUN npm install -g npm

EXPOSE 3000
WORKDIR /app
COPY package.json .
COPY npm-*.yaml .
COPY . .
RUN npm install
RUN npm build
CMD ["npm", "start"]