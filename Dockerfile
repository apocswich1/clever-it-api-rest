# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de la aplicación a /app
COPY package*.json ./

RUN npm install

# Instala SQLite en el contenedor
RUN apt-get update && \
    apt-get install -y sqlite3 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY . .

# Instala las dependencias de la aplicación
#RUN npm install

# construye la aplicación
RUN npm run build

# Expón el puerto en el que se ejecutará la aplicación
EXPOSE 8000

# Define el comando para iniciar la aplicación
CMD ["node", "build/index.js"]