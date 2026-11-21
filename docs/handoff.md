# Reprise de MOANA dans la machine virtuelle

MOANA est une association étudiante de culture arabe à l’Université Grenoble Alpes. Ouvrir le dossier MOANA comme projet Codex dans la VM. Transférer aussi les fichiers cachés du projet si tu passes par un dossier partagé ou une archive.

- Lire [les consignes du projet](../AGENTS.md), [le système de design](../design/DESIGN.md) et [la structure du site](site-structure.md).
- Suivre [le démarrage local](../README.md#démarrer). Dans la VM, `nvm use 24` après chargement de `nvm.sh` donne Node.js 24.22.2 et npm 11.19.1. Ces commandes sont absentes du PATH initial.
- L’accueil est la seule route Astro. Son balisage est dans [index.astro](../frontend/src/pages/index.astro), son document HTML dans [SiteLayout.astro](../frontend/src/layouts/SiteLayout.astro) et ses styles dans [site.css](../frontend/src/styles/site.css). Le logo WebP fourni est partagé par ses quatre occurrences.
- La [référence fournie par Aziz](../design/references/home-supplied.html) correspond à l’ancien accueil HTML. Les autres pages restent des essais archivés. La base de données, l’authentification et le backend seront décidés plus tard.
- Le skill Sites est exclu. Les mots explicitement écrits en arabe gardent leur graphie lors de la traduction.

La suite du projet est dans le [plan d’implémentation](implementation-plan.md).

## Recette du portage Astro

Les destinations, textes et exemples sont repris de l’export. Le document déclare le français et signale les passages arabes comme non traduisibles. Un lien d’évitement apparaît au focus. La pilule conserve son léger mouvement au survol à la souris quand le système autorise les animations. La barre d’outils Astro est désactivée en développement pour garder le rendu local comparable à la référence.

- `npm ci` a été vérifié dans un dossier temporaire à partir du fichier de verrouillage. Astro 6.4.8 génère une seule page statique avec `npm run build`. Le serveur de développement renvoie l’accueil et `astro preview` sert le HTML produit par la compilation.
- Chrome avec Playwright, thèmes clair et sombre. Les captures pleine page à 360 × 800 px et 1 440 × 900 px sont identiques à l’export pixel par pixel, avec les trois polices chargées. À 768 × 900 px en clair, les positions et dimensions des sections concordent. Aucun débordement horizontal aux trois largeurs, y compris avec le titre allongé.
- Les ancres du menu, le bouton vers les événements, l’accès direct à la FAQ et le retour en haut par le logo ont été vérifiés. Les accordéons s’ouvrent et se ferment au clic, au toucher émulé et au clavier. Le focus du lien d’évitement, la graphie arabe, le défilement en mouvement réduit et les destinations HelloAsso et Instagram ont été contrôlés.
- Le contrôle tactile reste à faire sur un téléphone réel. Les services tiers ont été contrôlés jusqu’aux URL reprises de l’export. Le tarif et les modalités de participation restent à confirmer avant publication.
- Le dossier partagé ne contient pas les métadonnées Git nécessaires à une PR.
