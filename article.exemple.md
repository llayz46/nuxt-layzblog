---
title: 'Exemple de titre' # Titre de l'article (h1) & nom dans breadcrumb & titre de la page
slug: 'exemple-slug' # Slug de l'article
description: "Ma roadmap pour devenir développeur web en 2024, des bases HTML/CSS à Laravel et Vue.js."
date: 2024-11-16 # Date de publication de l'article
draft: 0 # Brouillon ou non (0 visible / 1 brouillon)
tags: ["dev", "articles", "web", "roadmap"] # Tags de l'article - voir liste des tags dans le dossier article.tags.md
thumbnail: 'devenir-developpeur-web-2024-roadmap.png' # Image de couverture de l'article - public/img/content/articles/image.ext
---
# {{ $doc.title }}

::subtitle
---
tags: ["dev", "articles", "web", "roadmap"]
img: 'devenir-developpeur-web-2024-roadmap.png'
---
::

Devenir développeur web est un parcours qui peut sembler intimidant, mais avec une roadmap claire et bien structurée, vous pouvez avancer sereinement. Voici une feuille de route pour 2024, que vous pouvez suivre pour bâtir des compétences solides en développement web, en partant des bases jusqu'aux technologies modernes.

## 1. Les Fondamentaux : HTML et CSS

### Pourquoi HTML et CSS ?
HTML (HyperText Markup Language) et CSS (Cascading Style Sheets) sont les piliers de tout site web. Ils vous permettent de structurer et de styliser vos pages web. Sans une bonne maîtrise de ces technologies, il est difficile de progresser.

### Objectifs :
- **Apprenez la sémantique HTML** : comprenez l'importance de balises comme `<header>`, `<main>`, `<footer>`, etc.
- **Maîtrisez le CSS** : mise en page, flexbox, grid, animations de base.

### Ressources :
- [Documentation Vue.js](https://vuejs.org/guide/introduction.html)
- [Documentation Nuxt.js](https://nuxt.com/docs)

---

```js [app.js]
const name = 'world';

console.log('Hello ' + name + ' !');
```

```js [app.js] {1}
const name = 'world';

console.log('Hello ' + name + ' !');
```

::callout{type="astuce"}
The code in this next section is a simplified version of the code I use on my website; this makes it easier to understand, but it's not the actual code I use. The whole thing is linked below.
::

::callout{type="important"}
The code in this next section is a simplified version of the code I use on my website; this makes it easier to understand, but it's not the actual code I use. The whole thing is linked below.
::

::callout{type="note"}
The code in this next section is a simplified version of the code I use on my website; this makes it easier to understand, but it's not the actual code I use. The whole thing is linked below.
::

::callout{type="idea" dropdown=true title="Quelques idées à tester"}
The code in this next section is a simplified version of the code I use on my website; this makes it easier to understand, but it's not the actual code I use. The whole thing is linked below.
::

::callout{type="astuce" dropdown=true title="Une fois NGINX installer les différentes commandes suivantes sont disponibles :"}
Contenu du callout
```bash
sudo systemctl status nginx
```
[Docs DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-debian-11)
::