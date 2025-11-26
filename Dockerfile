# --- Stage 1: Build Angular ---
FROM node:18-alpine AS build

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Installa dipendenze (aggiunto legacy-peer-deps per evitare conflitti Tailwind)
RUN npm install --legacy-peer-deps

# Copia tutto il progetto
COPY . .

# Genera la build di produzione
RUN npm run build --prod

# --- Stage 2: Serve con Nginx ---
FROM nginx:alpine

# Copia la build prod in Nginx
COPY --from=build /app/dist/configurator-fe /usr/share/nginx/html

# Espone la porta 80
EXPOSE 80

# Avvia Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
