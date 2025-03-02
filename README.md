# Tutoriel node.js avec le framework nest.js

## Version

|    Date    | Version | Auteur     | Commentaire               |
| :--------: | ------: | :--------- | :------------------------ |
| 28/02/2024 |     0.1 | Patrick B. | Initilisation du document |
| 02/03/2024 |     0.1 | Patrick B. | Création du projet        |

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

Se rendre sur le site de [node.js](https://nodejs.org/en/download) et installer la dernière version LTS (_Long Term Support_) correspondant à votre système d'exploitation.

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

### Nettoyage du code

Dans la console de VSCode, arrêter le test en cours avec `Ctrl+C`.

Supprimer les fichiers `src/app.controller.spec.ts`, `src/app.controller.ts`, `scr/app.service.ts`.

Editer le fichier `app.module.ts` et supprimer toutes les références à `AppController` et `AppService` :

```ts
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

Enregistrer le fichier app.module.ts.

### Création du premier _module_

Un [module](https://docs.nestjs.com/modules) est une classe annotée avec le décorateur `@Module()`. Ce décoreur fournit au framework `nest.js` des informations permettant d'organiser et gérer de manière architecturée le code source de l'application.

Dans la console de VSCode, nous allons créer un premier module pour gérer les bovins par exemple :

```bash
nest generate module bovin
```

Un dossier `bovin` a été créé à l'intérieur du dossier `src`.

Le dossier `scr/bovin`contient un nouveau fichier module nommé `bovin.module.ts`.

Finalement, la commande `generate` a aussi enregistrer le nouveau module dans le fichier app.module :

```ts
import { Module } from '@nestjs/common';
import { BovinModule } from './bovin/bovin.module';

@Module({
  imports: [BovinModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

### Création du contrôleur et du service

Le contrôleur permet de gérer les routes.
Le service héberge le code métier.

Dans la console :

```bash
nest generate controller bovin --no-spec
nest generate service bovin --no-spec
```

Note : `--no-spec`signifie qu'il n'est pas nécessaire de générer les fichiers de tests.

Le framework a créé le contrôleur `bovin.controller.ts` et `bovin.service.ts`.

A remarquer que le contrôleur et le service ont été automatiquement enregistrer dans le fichier module `bovin.module.ts` :

```ts
import { Module } from '@nestjs/common';
import { BovinController } from './bovin.controller';
import { BovinService } from './bovin.service';

@Module({
  controllers: [BovinController],
  providers: [BovinService],
})
export class BovinModule {}
```

### Ajout de nos premières routes

Contenu du fichier `bovin.controller.ts :

```ts
import { Controller } from '@nestjs/common';

@Controller('bovin')
export class BovinController {}
```

Le décorateur `@Controller` informe que la classe est un contrôleur, donc va exposer des routes. Il informe aussi que toutes les routes de ce contrôleur auront l'url `http://localhost:3000/bovin`.

Je souhaite que toutes les routes des APIs soient sous la forme `http://localhost:3000/api/v1/...`.

Une première solution serait de modifier le décorateur `@Controller` pour tous les contrôleurs.

Une autre solution plus élégante est de déclarer le préfixe de manière globale.

Ouvrir le fichier `main.ts` et le modifier ainsi :

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => console.error(err));
```

#### Ajouter une route listant l'ensemble des bovins

Il faut ajouter une route avec le verbe `GET` :

```ts
import { Controller, Get } from '@nestjs/common';
import { BovinService } from './bovin.service';

@Controller('bovins')
export class BovinController {
  constructor(private readonly bovinService: BovinService) {}

  @Get()
  getBovins(): Bovin[] {
    return this.bovinService.getBovins();
  }
}
```

Parmi le code modifié, on a :

- importé la classe de service des bovins ;
- injecté la classe de service dans le constructeur du contrôleur ;
- ajouté une méthode `getBovins`avec un décorateur `@Get``

La méthode `getBovins`va retourner un tableau de `Bovin` qui n'existe pas encore en déléguant le chargement des bovins à la méthode `getBovins`de la classe de service. Méthode qui , elle non plus, n'existe pas encore.

#### Création de la classe _Bovin_

Dans le dossier `src`, créer un sous-dossier `entity`.

Dans le dossier `src/entity`, créer un nouveau fichier `bovin.ts` :

```ts
export enum Sexe {
  M = 1,
  F = 2,
}

export class Bovin {
  // Code pays
  private copaip: string;
  // Numéro national
  private nunati: string;
  // Nom
  private nobovi: string;
  // Date de naissance
  private danais: Date;
  // Sexe
  private sexbov: Sexe;
  // Date de création de l'enregistrement
  private dcre: Date;
  // Date de mise à jour de l'enregistrement
  private dmaj: Date;

  constructor(
    copaip: string | null = null,
    nunati: string | null = null,
    nobovi: string | null = null,
    danais: Date | null = null,
    sexbov: Sexe | null = null,
    dcre: Date | null = null,
    dmaj: Date | null = null,
  ) {
    this.init(copaip, nunati, nobovi, danais, sexbov, dcre, dmaj);
  }

  private init(
    copaip: string | null = null,
    nunati: string | null = null,
    nobovi: string | null = null,
    danais: Date | null = null,
    sexbov: Sexe | null = null,
    dcre: Date | null = null,
    dmaj: Date | null = null,
  ): void {
    this.setCopaip(copaip ?? '');
    this.setNunati(nunati ?? '');
    this.setNobovi(nobovi ?? '');
    this.setDanais(danais ?? new Date());
    this.setSexbov(sexbov ?? Sexe.F);
    this.setDcre(dcre ?? new Date());
    this.setDmaj(dmaj ?? new Date());
  }

  getCopaip(): string {
    return this.copaip;
  }

  getNunati(): string {
    return this.nunati;
  }

  getNobovi(): string {
    return this.nobovi;
  }

  getDanais(): Date {
    return this.danais;
  }

  getSexbov(): Sexe {
    return this.sexbov;
  }

  getDcre(): Date {
    return this.dcre;
  }

  getDmaj(): Date {
    return this.dmaj;
  }

  setCopaip(copaip: string): void {
    this.copaip = copaip;
  }

  setNunati(nunati: string): void {
    this.nunati = nunati;
  }

  setNobovi(nobovi: string): void {
    this.nobovi = nobovi;
  }

  setDanais(danais: Date): void {
    if (danais > new Date()) {
      throw new Error(
        'La date de naissance ne peut pas être supérieure à la date du jour',
      );
    }
    this.danais = danais;
  }

  setSexbov(sexbov: Sexe): void {
    this.sexbov = sexbov;
  }

  setDcre(dcre: Date): void {
    this.dcre = dcre;
  }

  setDmaj(dmaj: Date): void {
    this.dmaj = dmaj;
  }
}
```

A noter que les membres de la classe sont privés afin de gérer au mieux l'**encapsulation** et qu'ils ne sont accessibles qu'à travers les **assesseurs**.

Cela permet de gérer le cas d'usage suivant : un bovin ne peut pas être né à une date postérieure à la date du jour.

Dans le fichier `bovin.service.ts`, ajouter la méthode `getBovins` :

```ts
import { Injectable } from '@nestjs/common';
import { Bovin, Sexe } from 'src/entity/bovin';

@Injectable()
export class BovinService {
  // Liste de bovins créée en dur
  private static readonly bovins: Bovin[] = [
    new Bovin(
      'FR',
      '2512345678',
      'Marguerite',
      new Date('2019-01-01'),
      Sexe.F,
      new Date('2019-01-02'),
      new Date('2019-01-02T12:34:56'),
    ),
    new Bovin(
      'FR',
      '2598765432',
      'Gustave',
      new Date('2020-01-01'),
      Sexe.M,
      new Date('2020-01-02'),
      new Date('2020-01-02T12:34:56'),
    ),
    new Bovin(
      'FR',
      '2567890123',
      'Blanchette',
      new Date('2021-01-01'),
      Sexe.F,
      new Date('2021-01-02'),
      new Date('2021-01-02T12:34:56'),
    ),
  ];

  getBovins(): Bovin[] {
    return BovinService.bovins;
  }
}
```

#### Test de la ressource dans `bruno`

S'il n'y a plus d'erreur dans le code et que les imports sont bien gérés, on peut dans `bruno` supprimer la requête `Hello World` et créer une nouvelle requête `GET`nommée `Liste des bovins` avec l'url suivante : [http://localhost:3000/api/v1/bovins](http://localhost:3000/api/v1/bovins).

Le résultat doit donner ceci :

```json
[
  {
    "copaip": "FR",
    "nunati": "2512345678",
    "nobovi": "Marguerite",
    "danais": "2019-01-01T00:00:00.000Z",
    "sexbov": 2,
    "dcre": "2019-01-02T00:00:00.000Z",
    "dmaj": "2019-01-02T11:34:56.000Z"
  },
  {
    "copaip": "FR",
    "nunati": "2598765432",
    "nobovi": "Gustave",
    "danais": "2020-01-01T00:00:00.000Z",
    "sexbov": 1,
    "dcre": "2020-01-02T00:00:00.000Z",
    "dmaj": "2020-01-02T11:34:56.000Z"
  },
  {
    "copaip": "FR",
    "nunati": "2567890123",
    "nobovi": "Blanchette",
    "danais": "2021-01-01T00:00:00.000Z",
    "sexbov": 2,
    "dcre": "2021-01-02T00:00:00.000Z",
    "dmaj": "2021-01-02T11:34:56.000Z"
  }
]
```

Syntaxiquement, le résultat est OK.

Par contre, il est inutile de retourner les champs `dcre`et `dmaj`qui ne servent que dans le code et la base de données.

De plus la date de naissance serait plus lisble au format `YYYY-MM-DD`.

Nous allons donc créer un [DTO](https://code-garage.com/blog/a-quoi-servent-les-data-transfer-objects-dto/).

Il faut créer un dossier `tools` dans le dossier `src`. Dans le dossier `src/tools`, il faut créer le fichier `tools.ts`:

```ts
export class Tools {
  private constructor() {}

  static dateToStringIso8601(date: Date): string {
    return date == null
      ? ''
      : date.getFullYear() +
          '-' +
          (date.getMonth() + 1).toLocaleString('fr-FR', {
            minimumIntegerDigits: 2,
          }) +
          '-' +
          date.getDate().toLocaleString('fr-FR', {
            minimumIntegerDigits: 2,
          });
  }
}
```

Il faut créer un dossier `dto` dans le dossier `src`. Dans le dossier `src/dto`, il faut créer le fichier `bovin.dto.ts` :

```ts
import { Bovin } from 'src/entity/bovin';
import { Tools } from 'src/tools/tools';

export class BovinDto {
  private copaip: string;
  private nunati: string;
  private nobovi: string;
  private danais: string;
  private sexbov: string;

  static fromEntity(bovin: Bovin): BovinDto {
    const bovinDto = new BovinDto();

    bovinDto.copaip = bovin.getCopaip();
    bovinDto.nunati = bovin.getNunati();
    bovinDto.nobovi = bovin.getNobovi();
    bovinDto.danais = Tools.dateToStringIso8601(bovin.getDanais());
    bovinDto.sexbov = bovin.getSexbov().valueOf().toString();
    return bovinDto;
  }
}
```

Finalement, on va modifier le contrôleur de cette manière :

```ts
import { Controller, Get } from '@nestjs/common';
import { BovinService } from './bovin.service';
import { Bovin } from 'src/entity/bovin';
import { BovinDto } from 'src/dto/bovin.dto';

@Controller('bovins')
export class BovinController {
  constructor(private readonly bovinService: BovinService) {}

  @Get()
  getBovins(): BovinDto[] {
    return this.bovinService
      .getBovins()
      .map((bovin: Bovin) => BovinDto.fromEntity(bovin));
  }
}
```

En réexécutant la requête dans `bruno`, on obtient désormais :

```json
[
  {
    "copaip": "FR",
    "nunati": "2512345678",
    "nobovi": "Marguerite",
    "danais": "2019-01-01",
    "sexbov": "2"
  },
  {
    "copaip": "FR",
    "nunati": "2598765432",
    "nobovi": "Gustave",
    "danais": "2020-01-01",
    "sexbov": "1"
  },
  {
    "copaip": "FR",
    "nunati": "2567890123",
    "nobovi": "Blanchette",
    "danais": "2021-01-01",
    "sexbov": "2"
  }
]
```

### Ajout d'une route pour récupérer un bovin

Pour récupérer un bovin, il faut renseigner son code pays (copaip) et son numéro national (nunati).

#### Modification du service

Commençons par ajouter la méthode `getBovin` à la classe de service `bovin.service.ts` :

```ts
...

getBovin(copaip: string, nunati: string): Bovin | undefined {
  return BovinService.bovins.find(
    (bovin: Bovin) =>
      bovin.getCopaip() === copaip && bovin.getNunati() === nunati,
  );
}
```

A noter que le `getBovin`peut retourner soit un bovin soit une valeur non initialisée.

#### Modification du contrôleur

Ajoutons aussi une méthode `getBovin` dans le contrôleur :

```ts
import { Controller, Get, Param } from '@nestjs/common';
...
@Get(':copaip/:nunati')
getBovin(
  @Param('copaip') copaip: string,
  @Param('nunati') nunati: string,
): BovinDto | undefined {
  const bovin = this.bovinService.getBovin(copaip, nunati);

  return bovin ? BovinDto.fromEntity(bovin) : undefined;
}
```

#### Test dans `bruno``

Ajouter une nouvelle requête `GET`dans `bruno` : [http://localhost:3000/api/v1/bovins/FR/2567890123](http://localhost:3000/api/v1/bovins/FR/2567890123).

L'animal existe, l'API nous retourne donc une réponse avec le code `200`.

Restestons avec la requête suivante : [http://localhost:3000/api/v1/bovins/FR/256789012](http://localhost:3000/api/v1/bovins/FR/256789012).

L'animal n'existe pas, l'API ne nous retourne pas d'animal. C'est parfait !

NON, j'aimerais que l'API me retourne le code HTTP `404` !

`nest.js`permet de gérer les exceptions à travers un `ExceptionFilter`, ce qui est un bonne pratique.

Pour ce tuto, on va faire plus simple pour ne pas trop alourdir l'apprentissage. Modifions la méthode `getBovin` dans le contrôleur :

```ts
@Get(':copaip/:nunati')
getBovin(
  @Param('copaip') copaip: string,
  @Param('nunati') nunati: string,
): BovinDto | undefined {
  const bovin = this.bovinService.getBovin(copaip, nunati);

  if (bovin) {
    return BovinDto.fromEntity(bovin);
  }
  throw new NotFoundException(`Le bovin ${copaip}${nunati} n'existe pas`);
}
```

La requête [http://localhost:3000/api/v1/bovins/FR/256789012](http://localhost:3000/api/v1/bovins/FR/256789012) retourne bien une 404 avec un message d'erreur :

```json
{
  "message": "Le bovin FR/256789012 n'existe pas",
  "error": "Not Found",
  "statusCode": 404
}
```

## Quelques optimisations avant la suite

### Optimisation des entités

#### Création d'une classe abstraite _Entity_

La plupart des entités par la suite (Bovin, Cheptel, ...) vont avoir les attributs `dcre` et `dmaj`.

Afin de répéter le même code, nous allons créer une classe abtraite `Entity` dans le dossier `scr/entity` :

```js
export abstract class Entity {
  // Date de création de l'enregistrement
  private dcre: Date;
  // Date de mise à jour de l'enregistrement
  private dmaj: Date;

  constructor(dcre: Date | null = null, dmaj: Date | null = null) {
    this.init(dcre, dmaj);
  }

  private init(dcre: Date | null = null, dmaj: Date | null = null): void {
    this.setDcre(dcre ?? new Date());
    this.setDmaj(dmaj ?? new Date());
  }

  getDcre(): Date {
    return this.dcre;
  }

  getDmaj(): Date {
    return this.dmaj;
  }

  setDcre(dcre: Date): void {
    this.dcre = dcre;
  }

  setDmaj(dmaj: Date): void {
    this.dmaj = dmaj;
  }
}
```

#### Modification de la classe _Bovin_

Nous pouvons modifier la classe de telle manière :

- Mise en place de l'import de l'héritage

  ```ts
  import { Entity } from './Entity';

  export enum Sexe {
    M = 1,
    F = 2,
  }

  export class Bovin extends Entity {
  ...
  ```

- Suppression des membres `dcre` et `dmaj` ;

- Suppression des assesseurs `getDcre`, `getDmaj`, `setDcre` et `setDmaj`;

- Modification du constructeur

  ```ts
  constructor(
    copaip: string | null = null,
    nunati: string | null = null,
    nobovi: string | null = null,
    danais: Date | null = null,
    sexbov: Sexe | null = null,
    dcre: Date | null = null,
    dmaj: Date | null = null,
  ) {
    super(dcre, dmaj);
    this.initBovin(copaip, nunati, nobovi, danais, sexbov);
  }
  ```

- Modification de la méthode d'initialisation
  ```ts
  private initBovin(
    copaip: string | null = null,
    nunati: string | null = null,
    nobovi: string | null = null,
    danais: Date | null = null,
    sexbov: Sexe | null = null,
  ): void {
    this.setCopaip(copaip ?? '');
    this.setNunati(nunati ?? '');
    this.setNobovi(nobovi ?? '');
    this.setDanais(danais ?? new Date());
    this.setSexbov(sexbov ?? Sexe.F);
  }
  ```

#### Mise en place d'un fichier d'environnement

Par la suite, nous allons nous brancher sur une base de données. Par mesure de sécurité, nous allons externaliser les informations de connexion à la base (url, identifiant, mot de passe, ...).

On va donc créer un fichier d'environnement qu'il ne faudra surtout pas exposer dans les sources versionnées (gitHub ou autre).

A la racine du projet, nous allons créer le fichier `.env`.

Afin de l'exclure du _versionning_, il convient de vérifier que le fichier `.gitignore` est correctement configuré avec la présence des lignes suivantes :

```text
# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local
```

Dans un premier temps, dans le fichier `.env`, nous allons positionner le port d'écoute du serveur :

```text
PORT=3333
```

Dans la console de VSCode, installer le module `@nestjs/config` :

```bash
npm install @nestjs/config
```

Modifier le fichier àpp.module.ts`:

```ts
import { Module } from '@nestjs/common';
import { BovinModule } from './bovin/bovin.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    BovinModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

Normalement, le serveur doit maintenant écouter sur le port 3333.

A tester dans `bruno`.

## Mise en place de TypeORM

---

MIT License

Copyright &copy; 2025 gen'IAtest

[https://www.geniatest.com/](https://www.geniatest.com/)
