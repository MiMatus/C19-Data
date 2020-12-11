# C19-DATA - Michal Matúš - MAT0370

Webová aplikácia zobrazujúca najdôležitejšie data o šírení vírusu covid-19 v Českej Republike.

## Možnosti spustenia

### Node.js + yarn - localy

Vyžaduje nainstalovaný [Node.js](https://nodejs.org/) v4+ a package manager [Yarn](https://yarnpkg.com)

```sh
$ yarn install
$ yarn build
$ yarn start
```

### Docker

Požiadavky [Docker](https://www.docker.com)

```sh
$ docker build -t cdata .
$ docker run --rm -it -p 3000:3000 cdata
```

V oboch prípadoch sa projekt sa spustí na porte 3000, tzn. bude dostupný na url: http://localhost:3000
