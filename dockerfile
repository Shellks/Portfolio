FROM node:22.14.0-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--poll", "1000"]

# Prod settings
# RUN npm install
# RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
# COPY . .
# RUN npm run build
# FROM nginx:stable
# COPY default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html
# EXPOSE 443