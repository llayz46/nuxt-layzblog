---
title: 'About !'
slug: 'about'
description: 'Super article sur pourquoi la vie et pourquoi le monde.'
date: 2024-11-16
draft: false
tags: [ "dev", "test" ]
thumbnail: 'about.jpg'
---
## 2. PHP Natif : les bases de la dynamique

### Pourquoi PHP Natif ?
PHP est un langage côté serveur qui vous permettra d'apporter de la dynamique à vos sites. C'est une excellente façon d'apprendre les concepts de la programmation back-end sans vous noyer dans des frameworks complexes.

### Objectifs :
- **Apprenez la syntaxe de base** : variables, boucles, conditions, fonctions.
- **Créez des petits projets** : par exemple, un système d'inscription ou un simple panier e-commerce.

### Projets :
- **Formulaire de contact** : dévelosppez un formulaire qui envoie un e-mail de confirmation.
- **Web app blog** : construisez un blog avec la possibilité d’ajouter, modifier, et supprimer des articles.
- **Gestion de tâches** : réalisez une application qui permet de gérer une liste de tâches, avec des fonctionnalités comme ajouter, marquer comme terminée, et supprimer des tâches.

---

## 3. Test code block

```php [AppController.php] {13}
<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // $schedule->command('inspire')->hourly();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
```

```js [app.js]
const name = 'world';

console.log('Hello ' + name + ' !');
```

Lorem ipsum dolor sit amet ut dolores at tempor aliquyam. Amet et amet labore sed eum. Clita sed dolor et clita facilisi illum eos clita stet facilisi. Laoreet odio dolores feugiat ut minim zzril amet illum et duis velit lorem praesent.

```js [file.js]
const name = 'world';

console.log('Hello ' + name + ' !');
```

---

## 4. Apprenez à Utiliser Git pour le Contrôle de Version

### Pourquoi Git ?
Git est un système de contrôle de version distribué qui vous permet de suivre les modifications apportées à votre code et de collaborer efficacement avec d'autres développeurs. Il est essentiel pour tout développeur de comprendre Git, ainsi que les plateformes populaires comme GitHub et GitLab.

### Objectifs :
- **Comprenez les bases de Git** : initialisation d'un dépôt, suivi des changements, validation (commit), et gestion des branches.
- **Travaillez avec GitHub ou GitLab** : apprenez à héberger vos projets, collaborer avec d'autres développeurs, et utiliser les pull requests pour les révisions de code.
- **Utilisez Git dans vos projets** : versionnez vos projets pour mieux organiser votre travail et faciliter la collaboration.

::callout{type="astuce"}
The code in this next section is a simplified version of the code I use on my website; this makes it easier to understand, but it's not the actual code I use. The whole thing is linked below.
::

::callout{type="important"}
The code in this next section is a simplified version of the code I use on my website; this makes it easier to understand, but it's not the actual code I use. The whole thing is linked below.
::

::callout{type="note"}
The code in this next section is a simplified version of the code I use on my website; this makes it easier to understand, but it's not the actual code I use. The whole thing is linked below.
::

### Ressources :
- [Documentation Git](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [GitLab Documentation](https://docs.gitlab.com/)
