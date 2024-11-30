---
title: 'Comment installer et configurer une stack LEMP sur un serveur VPS'
slug: 'vps-setup-une-stack-lemp'
description: "Découvrez comment installer et configurer une stack LEMP (Linux, Nginx, MySQL, PHP) sur un serveur VPS."
date: 2024-11-21
draft: 0
tags: [ "linux", "debian", "ubuntu", "nginx", "deploy", "web", "serveur", "vps", "mysql", "bdd", "php", "lemp" ]
thumbnail: 'vps-setup-une-stack-lemp.webp'
---

# {{ $doc.title }}

::subtitle
---
tags: ["linux", "debian", "ubuntu", "nginx", "deploy", "web", "serveur", "vps", "mysql", "bdd", "php", "lemp"]
img: 'vps-setup-une-stack-lemp.webp'
---
::

Vous avez loué un serveur VPS et vous souhaitez y installer une stack LEMP (Linux, Nginx, MySQL, PHP) pour héberger vos
sites web ? Dans ce tutoriel, je vais vous montrer comment installer et configurer une stack LEMP sur un serveur VPS
sous Debian ou Ubuntu.

## 0. Prérequis & informations

1. Un serveur de type VPS, HomeLab ou autre, fonctionnant de préférence sous Debian ou Ubuntu.
2. Rien ne vous oblige à utiliser MySQL par exemple, chaque étape peut-être modifiée.
3. Pour copier/coller les commandes, vous pouvez utiliser `Shift + Insert` pour coller.

---

## 1. Choisir une image & nettoyer l'installation

Plusieurs images s'offrent à nous, des images dites basiques telles qu'Ubuntu 24.04 ou encore Debian 12. Des images
préconfigurées existent également, comme des stacks LEMP (Linux, Nginx, MySQL, etc.). Vous pouvez choisir une image
neutre et suivre cette note dans son intégralité, ou bien opter pour une installation préconfigurée et vous aider de
cette note pour la personnaliser.

Ici, nous choisirons de partir sur une installation vierge de [Debian 12](https://www.debian.org/).

Une fois le serveur en place, avant toute chose, nettoyons l'installation avec les commandes suivantes dans votre
terminal :

```bash
sudo apt update
```

```bash
sudo apt upgrade
```

```bash
sudo apt autoremove
```

```bash
sudo apt autoclean
```

```bash
sudo apt clean
```

---

## 2. Installer NGINX

Pour ce faire :

```bash
sudo apt install nginx
```

::callout{type="astuce" dropdown=true title="Une fois NGINX installer les différentes commandes suivantes sont disponibles :"}
```bash
sudo systemctl stop nginx
```
```bash
sudo systemctl start nginx
```
```bash
sudo systemctl restart nginx
```
```bash
sudo systemctl reload nginx
```
```bash
sudo systemctl status nginx
```
[Docs DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-debian-11)
::

---

## 3. Installer un pare-feu

1. Installer le package "UFW" :

```bash
sudo apt install ufw
```

2. Activer les règles suivantes :

```bash
sudo ufw allow ssh
```

```bash
sudo ufw allow 80
```

```bash
sudo ufw allow 443
```

::callout{type="astuce" dropdown=true title="Liste de règle proposé directement par NGINX :"}
Voir la liste des règles :

```bash
sudo ufw app list
```

Activer une règle :

```bash
sudo ufw allow 'OpenSSH'
```
::

3. Activer le pare-feu :

```bash
sudo ufw enable
```

---

## 4. Installer PHP et les extensions nécessaires

Pour installer PHP ainsi que les extensions nécessaires au bon fonctionnement de notre serveur web, nous aurons besoin de quelques prérequis :

D'abord, ajoutons le dépôt "Sury" pour PHP :


1. Ajout de la clé au dépôt :

```bash
wget -qO - https://packages.sury.org/php/apt.gpg | sudo apt-key add -
```

2. Ajout du dépôt `Sury` à la liste des sources :

```bash
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php.list
```

3. Mettons à jour notre liste de paquets :

```bash
sudo apt update
```

Ensuite, installons la bonne version de PHP ainsi que la dépendance de la BDD :

```bash
sudo apt-get install php8.4-fpm php8.4-mysql
```

*Remplacer `php8.4-mysql` par votre `driver` de base de donnée. Et n'oubliez pas d'activer les extensions dans votre php.ini : `/etc/php/8.4/fpm/php.ini`.*

::callout{type="astuce" dropdown=true title="Astuce"}
> Pour vérifier que PHP est bien installé, utilisé la commande :
> ```bash
> php -v
> ```
> *Vous devriez voir écrit : "PHP 8.4.0" ou votre version de PHP*

> Pour vérifier que PHP-FPM est bien actif :
> ```bash
> sudo systemctl status php8.4-fpm
> ```
::

Vous pouvez installer toutes les extensions que vous souhaitez, voici quelques exemples :

```bash
sudo apt install php8.4-mbstring php8.4-xml php8.4-bcmath php8.4-curl php8.4-zip
```
::underpre
*(remplacé 8.4 par votre version)*
::

---

## 5. Installer et configurer une base de données

### MySQL

Dans un premier temps, téléchargeons puis installons MySQL depuis le site officiel :

```bash
wget https://dev.mysql.com/get/mysql-apt-config_0.8.30-1_all.deb
```

::callout{type="note" dropdown=true title="Note"}
Si vous avez un message d'erreur du type "wget: command not found", installez wget avec la commande suivante :

```bash
sudo apt-get install apt-transport-https lsb-release ca-certificates wget
```
::

```bash
sudo apt install ./mysql-apt-config_0.8.30-1_all.deb
```
::underpre
Vous verrez un message vous demandant de choisir la version de MySQL que vous souhaitez installer. Choisissez la version voulue puis valider avec **flèche de droite** ensuite **espace**.
::

```bash
sudo apt-get update
```

```bash
sudo apt install mysql-server
```

::callout{type="astuce" dropdown=true title="Astuce"}
Pour vérifier que MySQL est bien installé, on peut utiliser la commande :

```bash
service mysql status
```

*Vous devriez voir écrit : "Active: active (running)"*
::

Pour sécuriser l'installation de MySQL, exécutez la commande suivante :

```bash
sudo mysql_secure_installation
```

Si la commande vous demande d'activer unix_socket mais que vous souhaitez utiliser un mot de passe, répondez "n" :

```bash
Switch to unix_socket authentication [Y/n] n
```

Ensuite, créons un compte administrateur pour accéder à MySQL :

```bash
sudo mysql
```
::underpre
Ajoutez le *flag* **-p** si vous avez un mot de passe pour l'utilisateur root.
::

```sql
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
```

```sql
GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost' WITH GRANT OPTION;
```

```sql
FLUSH PRIVILEGES;
```

### MariaDB

Pour installer MariaDB, exécutez les commandes suivantes :

```bash
sudo apt install mariadb-server
```

Pour sécuriser l'installation de MariaDB, exécutez la commande suivante :

```bash
sudo mysql_secure_installation
```

La commande vous demandera si vous souhaitez activer unix_socket, si vous souhaitez utiliser un mot de passe, répondez "n" :

```bash
Switch to unix_socket authentication [Y/n] n
```

Ensuite, créons un compte administrateur pour accéder à MariaDB :

```bash
sudo mariadb
```

```sql
GRANT ALL ON *.* TO 'user'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;
```

```sql
FLUSH PRIVILEGES;
```

### PostgreSQL

Pour installer PostgreSQL, commençons par mettre à jour notre liste de paquets :

```bash
sudo apt update && sudo apt upgrade
```

Ensuite, installons PostgreSQL :

```bash
sudo apt install postgresql postgresql-contrib
```

::callout{type="astuce" dropdown=true title="Astuce"}
Une fois PostgreSQL installé, les commandes suivantes sont disponibles :

> Vérifier le statut :
> ```bash
> sudo systemctl status postgresql
> ```

> Démarrer PostgreSQL :
> ```bash
> sudo systemctl start postgresql
> ```

> Arrêter PostgreSQL :
> ```bash
> sudo systemctl stop postgresql
> ```
::

Pour configurer PostgreSQL, nous devons nous assurer qu'il est démarré :

```bash
sudo systemctl start postgresql && sudo systemctl enable postgresql
```

Ensuite, nous devons nous connecter à PostgreSQL. Par défaut, Postgre créer un utilisateur `postgres` au quelle nous allons nous connecter puis changer le mot de passe :

```bash
sudo -u postgres psql
```

```sql
\password postgres
```
::underpre
Entrez un nouveau mot de passe, confirmer le puis quitter avec **\q**.
::

Enfin, pour que PHP puisse se connecter à PostgreSQL, nous devons installer l'extension PHP :

```bash
sudo apt install php8.4-pgsql
```

Enfin, redémarrons PHP-FPM :

```bash
sudo systemctl restart php8.4-fpm
```

### SQLite

Commençons par installer SQLite :

```bash
sudo apt-get install php-sqlite3
```

Ensuite, activons l'extension dans notre fichier php.ini, ouvrez le fichier :

```bash
nano /etc/php/<version>/fpm/php.ini
```

Au niveau des extensions, ajoutez la ligne suivante :

```bash
extension=sqlite3
```

Enfin, il vous faudra vous assurer que votre projet ait les permissions nécessaires sur votre fichier de base de données :

```bash
chmod 664 /var/www/projet/ficher_bdd.sqlite
```

```bash
chown www-data:www-data /var/www/projet/ficher_bdd.sqlite
```

```bash
chown -R /var/www/projet/dossier_du_fichier_bdd
```

::callout{type="note" dropdown=true title="Exemple pour un projet Laravel :"}
```bash
chmod 664 /var/www/laravel_projet/database/database.sqlite
```

```bash
chown www-data:www-data /var/www/laravel_projet/database/database.sqlite
```

```bash
chown -R /var/www/laravel_projet/database
```
::

::callout{type="astuce" dropdown=true title="Astuce"}
Si vous avez besoin d'une interface, installez SQLite 3 :

```bash
sudo apt install sqlite3
```

Voici une liste des commandes utiles :

1. Ouvrir une base de données :
```bash
.sqlite3 database.sqlite
```

2. Voir les tables :
```bash
.tables
```

3. Modifier un JSON :
```bash
UPDATE user SET ROLES = REPLACE(ROLES, '[]', '["ROLE_ADMIN"]') WHERE id = 1;
```
::

---

## 6. Créer une base de données

### MySQL ou MariaDB

1. Entrer dans MySQL ou MariaDB :

```bash
mysql -u <user> -p
```

::callout{type="note" dropdown=true title="Note" italic=true}
- **-u**{style="color: #be185d;"} sert a choisir l'utilisateur avec le quel l'on souhaite se connecter
- **-p**{style="color: #be185d;"} sert à demander le mot de passe
- **user**{style="color: #be185d;"} est le nom de l'utilisateur
::

2. Créer une base de données :

```sql
CREATE DATABASE nom_de_la_base;
```

3. Créer un utilisateur pour cette base de données :

```sql
CREATE USER 'username'@'%' IDENTIFIED WITH sha256_password BY 'password';
```

4. Donner les droits à cet utilisateur sur la base de données :

```sql
GRANT ALL PRIVILEGES ON nom_de_la_base.* TO 'username'@'%';
```

::callout{type="important" italic=true}
**GRANT ALL** donne tous les privilèges (SELECT, INSERT, UPDATE, DELETE, etc.) sur la base de données en question.
::

### PostgreSQL

1. Entrer dans PostgreSQL :

```bash
sudo -u postgres psql
```

2. Créer une base de données :

```sql
CREATE DATABASE nom_de_votre_base;
```

3. Créer un utilisateur pour cette base de données :

```sql
CREATE USER nom_utilisateur WITH PASSWORD 'mot_de_passe';
```

4. Donner les droits à cet utilisateur sur la base de données :

```sql
GRANT ALL PRIVILEGES ON DATABASE nom_de_votre_base TO nom_utilisateur;
```

::callout{type="important" italic=true}
**GRANT ALL** donne tous les privilèges (SELECT, INSERT, UPDATE, DELETE, etc.) sur la base de données en question.
::

5. Quitter PostgreSQL :

```sql
\q
```

---

## 7. Installer Node et Composer

1. Installer Node.js via nvm :

    1. Installer nvm :

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
    ```

    2. Ajouter nvm à votre fichier `.bashrc` :

    ```bash
    source ~/.bashrc
    ```

    3. Lister les versions de Node.js disponibles :

    ```bash
    nvm ls-remote
    ```

    4. Installer la dernière version LTS de Node.js :

    ```bash
    nvm install --lts
    ```
   ::underpre
   *Pour installer une version spécifique, remplacez `--lts` par le numéro de version souhaité.*
   ::

2. Installer Composer :

```bash
curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php
```

3. Déplacer Composer :

```bash
sudo php8.4 /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

4. Vérifier l'installation :

```bash
composer --version && node -v && npm -v
```

---

## 8. Cloner un projet sur le serveur

Pour ce faire, nous aurons besoin dans un premier temps de créer une clé SSH et de la renseigner dans GIT afin de s'assurer une connexion sécurisée :

1. Créer une clé SSH :

```bash
ssh-keygen -t ed25519 -C "Nom"
```

2. Ensuite, affichons puis copions le contenu de la clé publique :

```bash
cat ~/.ssh/id_ed25519.pub
```
::underpre
Sélectionner l'entièreté du contenu afficher puis copier le.
::

3. Ajouter la clé SSH dans GIT :

Accéder au dépôt GitHub de votre choix puis accéder à "**Settings**" et enfin "**Deploy keys**". Ensuite, cliquer sur "**Add deploy key**", renseigner un nom pour votre clé et ajouter le contenu préalablement copier de la clé publique. Cliquer enfin sur "**Add key**".

4. Installer GIT :

```bash
sudo apt install git
```

5. Cloner le projet :

Naviguer jusqu'à l'endroit où vous souhaitez ajouter votre projet, habituellement **/var/www/** et cloner votre dépôt grâce à la méthode SSH de GIT :

```bash
git clone git@github.com:llayz46/<depot>.git
```

::callout{type="astuce" flex=true}
Pour cloner une branche spécifique de votre repository, ajoutez le nom de la branche à la fin de la commande :

```bash
git clone -b <nom_de_la_branche> git@github.com:llayz46/<depot>.git
```
::

6. Récupérer les dernières modifications :

```bash
git pull
```

---

## 9. Créer un bloc de serveur NGINX

1. Créer un fichier de configuration pour votre site :

```bash
sudo nano /etc/nginx/sites-available/monsite
```

2. Ajouter le contenu suivant :

::callout{type="note" dropdown=true title="Infos"}
> `root` dois pointer vers le répertoire publique de votre projet.
>
> /var/www/mon_projet/public;

> `server_name` doit correspondre à votre nom de domaine.
>
> `server_name` llayz.fr www.llayz.fr

> `fastcgi_pass` doit correspondre à votre version de PHP.
>
> Pour voir votre version : php-v.
>
> `fastcgi_pass` unix:/var/run/php/php8.4-fpm.sock;
::

### Version HTTP
```nginx
server {
        listen 80 http2 default_server;
        listen [::]:80 http2 default_server ipv6only=on;

        root /var/www/<dossier_projet>/<dossier_public>;
        index index.php;

        server_name nom_de_domaine www.nom_de_domaine;

        add_header X-Content-Type-Options "nosniff";
        add_header X-Frame-Options "SAMEORIGIN";
        add_header X-XSS-Protection "1; mode=block";

        location / {
                try_files $uri /index.php$is_args$args;
        }

        location ~ ^/index\.php(/|$) {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php<PHP_VERSION>-fpm.sock;
                fastcgi_split_path_info ^(.+\.php)(/.*)$;
                include fastcgi_params;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                fastcgi_param PATH_INFO $fastcgi_path_info;
                internal;
        }

        location ~ \.php$ {
                return 404;
        }

        error_log /var/log/nginx/your_domain_error.log;
        access_log /var/log/nginx/your_domain_access.log;
}
```

### Version HTTPS
```nginx
server {
        listen 443 ssl http2 default_server; # default_server permet de définir ce serveur comme serveur par défaut
        listen [::]:443 ssl http2 default_server ipv6only=on;

        root /var/www/<dossier_projet>/<dossier_public>;
        index index.php;

        server_name nom_de_domaine www.nom_de_domaine;
    
        add_header X-Frame-Options "SAMEORIGIN"; 
        add_header X-Content-Type-Options "nosniff"; 
        add_header X-XSS-Protection "1; mode=block";

		ssl_certificate /etc/letsencrypt/live/nom_de_domaine/fullchain.pem;
		ssl_certificate_key /etc/letsencrypt/live/nom_de_domaine/privkey.pem;

		# include /etc/nginx/snippets/ssl-params.conf;

        location / {
                try_files $uri /index.php$is_args$args;
        }

        location ~ ^/index\.php(/|$) {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php<PHP_VERSION>-fpm.sock;
                fastcgi_split_path_info ^(.+\.php)(/.*)$;
                include fastcgi_params;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                fastcgi_param PATH_INFO $fastcgi_path_info;
                internal;
        }

        location ~ \.php$ {
                return 404;
        }

        error_log /var/log/nginx/your_domain_error.log;
        access_log /var/log/nginx/your_domain_access.log;
}
```

::callout{type="note" dropdown=true title="Générer un certificat SSL"}
> **Certbot** doit être installé pour la version HTTPS.
> ```bash
> sudo apt install certbot python3-certbot-nginx
> ```

> Vous devez ensuite obtenir un certificat SSL pour votre domaine :
> ```bash
> sudo certbot --nginx -d nom_de_domaine -d www.nom_de_domaine
> ```

> Pour finir, vous devez donner les permissions nécessaires à NGINX pour accéder aux certificats :
> ```bash
> sudo chown root:root /etc/letsencrypt/live/nom_de_domaine/{fullchain.pem,privkey.pem}
> ```
> ```bash
> sudo chmod 600 /etc/letsencrypt/live/nom_de_domaine/{fullchain.pem,privkey.pem}
> ```
> *Remplacer `nom_de_domaine` par votre nom de domaine sans les `www`.*
::

3. Lier votre configuration à sites-enabled :

```bash
sudo ln -s /etc/nginx/sites-available/monsite /etc/nginx/sites-enabled/
```

4. Redémarrez NGINX :

```bash
sudo systemctl restart nginx
```

::callout{type="important" dropdown=true title="Attention"}
Si vous rencontrez l'erreur suivante :

> ```bash
> Job for nginx.service failed because the control process exited with error code. See "systemctl status nginx.service" and "journalctl -xeu nginx.service" for details.
> ```

Cela peut venir d'une duplication sur l'écoute d'un port, vérifier dans /etc/nginx/sites-available/default qu'il n'y ai déjà pas une écoute sur le même port que vous.
::

::callout{type="astuce" title="Vérifier la configuration"}
```bash
sudo nginx -t
```
::

---

## 10. Dépendances & configuration du projet

::callout{type="code" dropdown=true title="Symfony"}
Pour commencer, rendez-vous dans le dossier de votre projet Symfony.

1. Dupliquer le fichier `.env` en `.env.local` :

```bash
cp .env .env.local
```

2. Modifier le fichier `.env.local` :

```bash
sudo nano .env.local
```

```dotenv [.env.local]
APP_ENV=prod
APP_DEBUG=true*
MAILER=native://default ou SMTP
Ajouter les informations de connexion à la base de données
```
::underpre
**APP_DEBUG=true** : je vous conseille d'activer debug pendant la mise en place du serveur afin de voir directement d'où viennent les erreurs. N'oubliez pas de le retirer par la suite.
::

3. Installer les dépendances Composer :

```bash
composer install --no-dev --optimize-autoloader
```

4. Installer les dépendances NPM :

```bash
npm install --omit=dev
```

5. Lancer les migrations Doctrine :

```bash
php bin/console d:m:m -n
```

6. *Optionnel* : Lancer le build de Tailwind :

```bash
php bin/console tailwind:build
```

7. Compiler les assets :

```bash
php bin/console asset-map:compile
```

8. Donner les permissions nécessaires :

```bash
sudo chown -R www-data:www-data /var/www/mon_projet
```

```bash
sudo chmod -R 775 /var/www/mon_projet
```
::

::callout{type="code" dropdown=true title="Laravel"}
Pour commencer, rendez-vous dans le dossier de votre projet Laravel.

1. Dupliquer le fichier `.env.example` en `.env` :

```bash
cp .env.example .env
```

2. Modifier le fichier `.env` :

```bash
sudo nano .env
```

```dotenv [.env]
APP_ENV=prod
APP_DEBUG=true*
APP_URL=https://www.nom_de_domaine.com
Ajouter les informations de connexion à la base de données
```
::underpre
**APP_DEBUG=true** : je vous conseille d'activer debug pendant la mise en place du serveur afin de voir directement d'où viennent les erreurs. N'oubliez pas de le retirer par la suite.
::

3. Installer les dépendances Composer :

```bash
composer install --no-dev --optimize-autoloader
```

4. Installer les dépendances NPM :

```bash
npm install --omit=dev
```
::underpre
Si vous avez utilisé **Vite**, enlever le flag `--omit=dev`.
::

5. Générer une clé d'application :

```bash
php artisan key:generate
```

6. Lancer les migrations Eloquent :

```bash
php artisan migrate
```

7. Lancer le build de Vite :

```bash
npm run build
```

8. Lier le dossier de storage :

```bash
php artisan storage:link
```

9. Donner les permissions nécessaires :

```bash
sudo chown -R www-data:www-data /var/www/mon_projet
```

```bash
sudo chmod -R 775 /var/www/mon_projet
```
::

---

## 11. Optimisation & sécurité

Votre serveur est en ligne mais vous souhaitez améliorer les performances des tests.

Plusieurs actions possibles :

::callout{type="note" dropdown=true title="Compression GZIP"}
> Pour activer la compression GZIP, ajoutez les lignes suivantes dans votre fichier de configuration NGINX :
>
> ```nginx
> gzip on;
> gzip_comp_level 5;
> gzip_min_length 256;
> gzip_proxied any;
> gzip_vary on;
> gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript application/vnd.ms-fontobject application/x-font-ttf font/opentype image/svg+xml image/x-icon;
> ```
::

---

## 12. Conclusion

Vous avez maintenant une stack LEMP fonctionnelle sur votre serveur VPS. Vous pouvez maintenant héberger vos sites web.

Quelques conseils pour aller plus loin :

::callout{type="idea" dropdown=true title="Tips"}
> Voir les logs du serveur :
> ```bash
> sudo tail -f /var/log/nginx/nom_du_log.log
> ```

> Pensez à mettre à jour régulièrement votre serveur :
> ```bash
> sudo apt update
> ```

> N'oubliez pas de retirer le mode debug de vos applications une fois en production.
> ```dotenv
> APP_DEBUG=false
> ```

> Pour obtenir les modifications de votre dépôt GIT distant :
> ```bash
> git pull
> ```
::