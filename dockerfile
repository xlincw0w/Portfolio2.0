FROM node:15.3.0

WORKDIR /app

COPY /api /api
COPY ./public ./public
COPY .babelrc .babelrc
COPY package.json package.json
COPY webpack.dev.js webpack.dev.js
COPY webpack.prod.js webpack.prod.js
COPY tailwind.config.js tailwind.config.js
COPY tsconfig.json tsconfig.json
COPY postcss.config.js postcss.config.js

RUN yarn

CMD ["/bin/bash"]