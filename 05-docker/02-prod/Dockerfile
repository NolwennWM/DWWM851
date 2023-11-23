# à partir de quel image nous allons construire notre nouvelle image.
FROM php:8.2-apache
# Copier des fichiers présents avec le Dockerfile, dans l'image.
COPY . /var/www/html
# RUN permet de lancer des commandes lors de la construction du conteneur.
RUN apt update && apt upgrade
