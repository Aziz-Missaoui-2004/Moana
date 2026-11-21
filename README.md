# MOANA

Application web de MOANA, association étudiante de culture arabe à l’Université Grenoble Alpes. Le site doit faire connaître l’association, ses activités, son équipe et ses partenaires, et permettre aux visiteurs de savoir comment participer. Le bureau doit pouvoir tenir les événements à jour.

## Commencer ici

Le [plan de la phase A](docs/implementation-plan.md) est le point d’entrée. On commence par [fixer le socle technique et l’environnement](docs/implementation-plan.md#0-fixer-le-socle-technique-et-lenvironnement), puis on prépare le [prototype de la page Événements sur ordinateur et son équivalent sur téléphone](docs/implementation-plan.md#1-prototyper-la-page-événements).

## Voir l’accueil actuel

Avec Node.js 24 et npm, lancer depuis la racine du projet. Dans la VM, si Node.js est absent du PATH, charger `source ~/.nvm/nvm.sh` puis exécuter `nvm use 24`.

```sh
cd frontend
npm ci
npm run dev
```

Ouvrir [l’aperçu local](http://localhost:4321/). Les changements s’affichent dans le navigateur pendant que le serveur tourne. `npm run build` vérifie la compilation.

### Développer aussi sur macOS

Pour travailler directement sur le Mac, installer Node.js 24 et npm avec le paquet macOS `.pkg` de Node.js. Si Homebrew est déjà disponible, on peut aussi lancer `brew install node@24` et ajouter `$(brew --prefix node@24)/bin` au `PATH` de zsh. Vérifier les installations avec `node --version`, `npm --version` et `git --version`. La CLI GitHub (`gh`) est facultative pour le développement local, tout comme la CLI Codex si on travaille depuis l’application. [Node.js 24](https://nodejs.org/dist/latest-v24.x/) · [CLI Codex](https://learn.chatgpt.com/docs/codex/cli)

Utiliser une copie locale de MOANA sur le Mac et lancer les commandes ci-dessus depuis cette copie. Cela donne à macOS son propre `node_modules`, notamment pour les dépendances natives d’Astro. Conserver les dossiers cachés du projet lors d’une copie, dont `.agents` à la racine et `frontend/.agents`.

Les skills Visual Review et Color Expert sont dans le projet. Pour retrouver aussi les skills globaux utilisés dans la VM, lancer `npx skills add nutlope/hallmark --agent codex --skill hallmark -g` et `npx skills add vercel-labs/skills --agent codex --skill find-skills -g` sur le Mac. Quand Codex travaille sur l’hôte SSH `moana-vm`, il utilise l’environnement de la VM. [Hallmark](https://github.com/Nutlope/hallmark#install) · [Find Skills](https://www.skills.sh/vercel-labs/skills/find-skills)

## Références de travail

| Sujet | Fichier |
|---|---|
| Périmètre, étapes et décisions à prendre | [Plan de la phase A](docs/implementation-plan.md) |
| Structure des pages et règles de contenu | [Structure du site](docs/site-structure.md) |
| Informations, décisions et validations attendues du bureau | [Préparer le site avec le bureau](docs/bureau-site.md) |
| Règles visuelles | [Système de design](design/DESIGN.md) |
| État du code et recette du portage Astro | [Reprise dans la VM](docs/handoff.md) |
| Consignes de développement et de vérification | [AGENTS.md](AGENTS.md) |
| Modèles pour le bureau | [Fiche événement](templates/event.md) et [fiche tâche](templates/task.md) |

Le code actif se trouve dans [frontend/](frontend/). L’[export HTML d’origine](design/references/home-supplied.html) est conservé comme brouillon de référence. Les modifications se font dans la copie de travail Astro. Les essais de pages sont aussi conservés dans les références.
