# Tutoriel node.js avec le framework nest.js

## Version

| Date | Version | Auteur | Commentaire |
| :--: | ------: | :----- | :---------- |
| 28/02/2024 | 1.0 | Patrick B. | Initilisation du document |

## Pourquoi utiliser ce framework dans le cadre d'un développement back

D'après Copilot, pour un projet Node.js utilisant TypeScript, avec injection de dépendance, ORM, OpenAPI et basé sur la clean architecture, je recommande le framework NestJS. Voici pourquoi :

1. TypeScript : NestJS est entièrement écrit en TypeScript et offre un excellent support pour ce langage ;

2. Injection de dépendance : NestJS utilise un conteneur d'injection de dépendance intégré, inspiré par Angular, ce qui facilite la gestion des dépendances ;

3. ORM : Vous pouvez utiliser TypeORM ou Prisma avec NestJS pour la gestion des bases de données ;

4. OpenAPI : NestJS supporte la génération de documentation OpenAPI (Swagger) via des décorateurs et des modules intégrés ;

5. Clean Architecture : NestJS encourage une architecture modulaire et propre, facilitant la maintenance et l'évolutivité de votre application.

Toujours d'après Copilot, les retours des développeurs sur NestJS sont généralement très positifs. Voici quelques points clés qui ressortent souvent :

1. Clean architecture modulaire : Les développeurs apprécient l'architecture modulaire de NestJS, qui facilite la configuration et la mise à l'échelle des applications. Cela permet de diviser le code en modules réutilisables, ce qui est particulièrement utile pour les grandes applications1.

2. Support TypeScript : NestJS est conçu pour fonctionner nativement avec TypeScript, ce qui est un grand avantage pour les développeurs qui préfèrent ce langage. Cela permet une meilleure sécurité de type et des vérifications à la compilation2.

3. Injection de dépendances : Le système d'injection de dépendances de NestJS est souvent comparé à celui d'Angular, ce qui le rend familier et facile à utiliser pour les développeurs ayant une expérience avec Angular2.

4. Documentation et communauté : La documentation de NestJS est claire, détaillée et bien structurée, ce qui facilite la prise en main du framework. De plus, la communauté est très active, offrant de nombreux exemples et ressources2.

5. Performance et scalabilité : Les développeurs trouvent que NestJS offre de bonnes performances et est facilement scalable, ce qui est crucial pour les applications modernes1.

6. Intégration avec d'autres outils : NestJS s'intègre bien avec d'autres outils et bibliothèques populaires, comme TypeORM, Prisma, et Swagger, ce qui simplifie le développement et la documentation des API2.

Cependant, certains développeurs notent que la courbe d'apprentissage peut être un peu raide pour ceux qui ne sont pas familiers avec TypeScript ou les concepts d'injection de dépendances3.

En résumé, NestJS est largement apprécié pour sa robustesse, sa flexibilité et son support TypeScript, bien que son adoption puisse nécessiter un certain temps d'adaptation pour les nouveaux utilisateurs.

## Installation de node.js

Se rendre sur le site de [node.js](https://nodejs.org/en/download) et installer la dernière version LTS (*Long Term Support*) correspondant à votre système d'exploitation.

### Vérification de l'installation de node.js

Ouvrir une invite de commandes et taper la commande :
```bash
node -v
```
Le numéro de version doit apparaître. Par exemple :
```bash
v22.14.0
```

### Vérification de l'installation de npm

Toujours dans une invite de commandes, taper la commande :
```bash
npm -v
```
Le numéro de version doit apparaître. Par exemple :
```bash
11.1.0
```

## Installation du framework nest.js

Dans une invite de commandes, taper la commande :
```bash
npm i -g @nestjs/cli
```

## Installation d'un client REST

Afin de tester son API REST en cours de développement, il est nécessaire d'installer un logiciel de type **[Bruno](https://www.usebruno.com/)**, [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

Pour la suite du tuto, je me baserai sur `Bruno` qui permet de versionner ses collections et ainsi de les partager entre collègues. Bruno permet aussi d'intégrer ses collections au sein des projets en cours de développement.

## Création du projet

Se positionner à la racine de son workspace et taper la commande :
```bash
nest new nomDuProjet
```

Ouvrir Visual Studio Code sur le dossier du projet et ouvrir une console dans celui-ci.

Taper la commande suivante pour lancer le test :
```bash
npm run start:dev
```

Ouvrir un logiciel `Bruno` et créer une collection. 

Lui donner un nom et en `location` créer un dossier `bruno` à la racine de son projet.

Dans la collection nouvellement créée, ajouter une `new request` de type `HTTP`.

La nommer `Hello World` et lui donner comme url `http://localhost:3000`. Le port d'écoute par défaut du projet est le port `3000`. C'est vérifiable dans le fichier `main.ts` :
```ts
await app.listen(process.env.PORT ?? 3000);
```
Exécuter la requête dans `bruno`.

La réponse devrait être `Hello World!`.

## Nettoyage du code

Dans la console de VSCode, arrêter le test en cours avec `Ctrl+C`.

