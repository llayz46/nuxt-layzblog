---
title: 'Nomenclature Git : Adoptez une convention claire et efficace'
slug: 'git-naming-convention'
description: "Apprenez à structurer vos messages de commit Git avec une nomenclature claire et adaptée. Facilitez la collaboration et le suivi de projet."
date: 2024-12-18
draft: 0
tags: [ "git", "dev", "workflow", "productivite", "collaboration", "versionning", "convention", "nomenclature", "commit", "github" ]
thumbnail: 'git-naming-convention.webp'
sitemap:
   loc: /blog/git-naming-convention
   priority: 0.7
   changefreq: monthly
   lastmod: 2024-12-18
---

# {{ $doc.title }}

::subtitle
---
tags: ["git", "dev", "workflow", "productivite", "collaboration", "versionning", "convention", "nomenclature", "commit", "github"]
img: 'git-naming-convention.webp'
---
::

L’adoption d’une convention de nomenclature pour vos messages de commit dans Git est essentielle pour garantir un
historique clair, compréhensible et bien organisé. Voici une nomenclature complète qui vous aidera à structurer vos
commits de manière cohérente.

---

## Structure générale d'un message de commit

Un message de commit peut suivre la structure suivante :

```md
<type>[scope]: <description>

[corps du message]

[footer]
```

- **type** : Le type de modification (obligatoire).
- **scope** : L’élément ou la partie impactée (optionnel).
- **description** : Une brève description de la modification (obligatoire).
- **corps** : Une explication détaillée de la modification (optionnel).
- **footer** : Informations additionnelles comme des numéros de ticket ou des notes de breaking change (optionnel).

---

## Liste des types de commits

Voici une liste non exhaustive des types les plus couramment utilisés :

### 1. **feat**

Utilisé pour ajouter une nouvelle fonctionnalité ou feature.

```md
feat: ajout du formulaire d'inscription
```

### 2. **fix**

Utilisé pour corriger un bug ou un comportement inattendu.

```md
fix: résolution du crash lors de la soumission du formulaire
```

### 3. **chore**

Utilisé pour des tâches qui ne modifient pas le code exécuté par l’utilisateur (mise à jour de dépendances,
configuration, etc.).

```md
chore: mise à jour des dépendances npm
```

### 4. **style**

Utilisé pour des modifications concernant l'apparence ou la présentation du code, sans impact sur sa logique ou son
comportement fonctionnel (par exemple, mise en forme, espaces, indentations, ou commentaires).

```md
style: reformattage du code selon ESLint
```

### 5. **refactor**

Utilisé pour réorganiser ou optimiser le code sans changer son comportement.

```md
refactor: simplification de la logique dans le composant Header
```

### 6. **perf**

Utilisé pour des modifications améliorant les performances.

```md
perf: optimisation du rendu des listes
```

### 7. **test**

Utilisé pour ajouter ou modifier des tests unitaires ou fonctionnels.

```md
test: ajout des tests unitaires pour la fonction de validation
```

### 8. **docs**

Utilisé pour des changements dans la documentation (README, commentaires, etc.).

```md
docs: mise à jour des instructions d'installation dans le README
```

### 9. **build**

Utilisé pour les changements affectant le système de build ou les dépendances externes.

```md
build: ajout de Webpack pour la gestion des assets
```

### 10. **ci**

Utilisé pour des modifications liées à l’intégration continue ou les scripts de déploiement.

```md
ci: ajout d'un workflow GitHub Actions pour les tests
```

### 11. **revert**

Utilisé pour annuler un commit précédent.

```md
revert: annulation du commit abc123 pour corriger un bug
```

### 12. **hotfix**

Utilisé pour des corrections rapides en production.

```md
hotfix: correction du bouton de connexion sur mobile
```

### 13. **content**
Utilisé pour ajouter ou mettre à jour du contenu rédactionnel, comme des articles de blog, des pages de documentation ou des fichiers Markdown.

```text
content(blog): ajout d'un nouvel article
```

---

## Exemples d’utilisation avec scope

Inclure un scope dans le message permet de préciser la partie impactée par la modification :

```md
feat(auth): ajout de la connexion via Google
fix(api): correction de l’erreur 500 lors de la création d’un utilisateur
refactor(utils): simplification de la fonction de calcul
```

---

## Bonnes pratiques

1. **Utiliser l'impératif pour la description** :
    - [✓]{style="color: green;"}  "Fix a bug in user authentication"
    - [✗]{style="color: red;"}  "Fixed a bug in user authentication"

2. **Rester concis** : Le type et la description doivent suffire pour comprendre l’essentiel.

3. **Utiliser le corps pour plus de détails** : Si besoin, détaillez dans le corps du message.

4. **Indiquer les breaking changes** : Ajoutez une note dans le footer si votre modification casse des éléments
   existants.

```md
BREAKING CHANGE: suppression du champ « username » de l'API
```

---

## Conclusion

Adopter une convention de nomenclature Git permet d’assurer un historique de commit propre et compréhensible. Cela
facilite la collaboration, la relecture et le suivi des évolutions dans votre projet. N’hésitez pas à adapter cette
nomenclature pour qu’elle corresponde à vos besoins !