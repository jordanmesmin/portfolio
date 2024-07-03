# Utilise une image de base Node.js
FROM node:14

# Définit le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copie le fichier package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installe les dépendances du projet
RUN npm install

# Copie tout le reste du code de l'application dans le répertoire de travail
COPY . .

# Expose le port que l'application utilisera
EXPOSE 3000

# Commande pour démarrer l'application
CMD [ "node", "server.js" ]
