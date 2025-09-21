# Cinéphoria Desktop
___

Application de bureau destiné à afficher/signaler les incidents.

## Installation

### Pré-requis
- [Angular](https://angular.dev/) `npm install -g @angular/cli`
- [Node.js](https://nodejs.org/)
- [Deno](https://deno.com/)
- [Cargo](https://crates.io/)

### Librairies

Lancez les commandes suivantes :

```bash
rustup default stable
```

```bash
deno install --allow-scripts
```

### Variables d'environnement

Vous aurez besoin de modifier les variables d'environnement du fichier `env.ts` pour que l'application bureautique 
se connecte correctement aux différents microservices de Cinéphoria.

## Déploiement en local

Lancez la commande suivante pour lancer l'application bureautique **Cinéphoria Desktop** :

```bash
deno task tauri dev
```

> Remarque : sur Linux, si l'erreur `Error 71 (Protocol error) dispatching to Wayland display.` apparaît, ajoutez 
> `WEBKIT_DISABLE_DMABUF_RENDERER=1` au début de la commande ci-dessus.

L'application bureautique est désormais disponible en local.