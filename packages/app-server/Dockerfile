FROM node:lts AS base

WORKDIR /app

FROM base AS dependencies

# Copy common package files
COPY packages/common packages/common

# Copy app-server package
COPY packages/app-server packages/app-server

# Coppy root package.json
COPY package.json .

# Copy root-level tsconfig files because they are used by the packages
COPY tsconfig.build.json .
COPY tsconfig.json .

RUN npm i

# Build app-server
WORKDIR /app/packages/app-server
RUN npm i
RUN npm run build

CMD ["npm","run","start:local"]