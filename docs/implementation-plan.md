# MOANA — Par où commencer

MOANA communique aujourd’hui sur Instagram. Le lien en bio passe par Linktree et mène vers HelloAsso. L’application web doit faire connaître l’association au-delà de ce parcours et donner à quelqu’un qui découvre MOANA un moyen simple de comprendre ce qu’elle fait et de participer. Le bureau doit pouvoir faire vivre le site lui-même.

## Phase A · Une vitrine que le bureau peut tenir à jour

### 0. Fixer le socle technique et l’environnement

Faire l’inventaire du code et des outils disponibles. Le frontend actuel utilise Astro, TypeScript, du CSS partagé et npm. Confirmer ce socle pour la vitrine, puis préciser le travail technique de la phase A, dont les besoins serveur pour l’administration et les formulaires, les données, les médias et les accès du bureau. Consigner les choix retenus et les décisions encore ouvertes.

Documenter le démarrage, la compilation et la prévisualisation. Vérifier qu’on peut ouvrir l’accueil sur l’ordinateur de développement et préparer un accès à l’aperçu sur téléphone pour tester les interactions tactiles.

### 1. Prototyper la page Événements

Commencer sur ordinateur à partir de la copie de travail dans le frontend Astro. Conserver [`home-supplied.html`](../design/references/home-supplied.html) dans les références comme brouillon d’origine. Sur la page Événements, placer **le prochain événement avec un bouton « Participer »** en premier. Depuis l’accueil, le lien « Voir nos événements » ouvre cette page.

Utiliser un exemple marqué « Démonstration ». Le bloc affiche le titre, la date, le lieu, un court résumé et une action. Prévoir aussi le cas où aucune date n’est annoncée. Puis adapter le bloc au téléphone avant de passer à la suite. Sur les deux appareils, une personne qui découvre MOANA doit comprendre qui organise l’événement et comment participer.

### Adaptation sur ordinateur et téléphone

Concevoir et vérifier chaque écran sur ordinateur et sur téléphone, avec une attention particulière au parcours sur téléphone. Les informations et actions essentielles restent accessibles sur les deux. Adapter la composition, l’ordre de lecture et les interactions à chaque appareil. Sur ordinateur, vérifier le survol à la souris et le focus au clavier. Sur téléphone, vérifier la taille des zones tactiles et le retour visible à l’appui. Une action disponible au survol doit aussi être accessible au toucher et au clavier. Vérifier les animations dans les deux contextes et respecter la préférence de mouvement réduit. Les règles visuelles sont dans le [système de design](../design/DESIGN.md#responsivité-et-modes-dinteraction).

### 2. Compléter la vitrine

L’accueil et L’association sont deux pages distinctes. Les contenus à discuter pour chaque page figurent dans la [structure du site](site-structure.md#page-accueil--contenu-à-discuter). Les événements passés figurent sur la page Événements. Préparer la navigation et vérifier l’ordre des sections sur ordinateur et sur téléphone. Le bureau valide les textes et les noms, photos et logos qu’il autorise à publier.

L’entête commun suit l’ordre et les destinations définis dans la [structure du site](site-structure.md#navigation).

### 3. Construire l’espace administrateur

Dès que le bloc événement est clair, définir les données que le bureau devra renseigner et tester le parcours d’édition avec lui. Livrer dans cet ordre :

1. Un accès réservé au bureau.
2. Une liste d’événements et un formulaire pour ajouter ou modifier un événement, sa photo et son lien de participation.
3. Un aperçu, la publication et le retrait ou la suppression d’un événement et de ses photos. Vérifier que la page Événements affiche le bon prochain événement et que les événements passés restent consultables selon la règle retenue.
4. Les réglages de la vitrine que le bureau demande en priorité. Établir une courte liste à partir d’un besoin réel avant de les développer.

Le chantier est prêt quand une personne du bureau réalise avec un événement de démonstration le parcours « ajouter → prévisualiser → publier → modifier → retirer » et constate le résultat sur la page Événements. Les choix de stockage et d’accès se font après avoir défini ce parcours.

### 4. Ajouter le contact et la demande de partenariat

En bas de l’accueil, ajouter les réseaux confirmés et un formulaire court. Ajouter un lien « Vous représentez un organisme ? » vers une page dédiée, avec un formulaire adapté aux demandes de partenariat. Avant de brancher l’envoi, convenir avec MOANA des champs nécessaires, du destinataire et du traitement des messages. Vérifier ensuite les deux parcours, y compris la confirmation et l’erreur d’envoi.

### Décisions à prendre au bon moment

Les décisions, les données à fournir et les tâches associées sont suivies dans [Préparer le site avec le bureau](bureau-site.md).

Aziz commence la revue sur ordinateur et donne son avis sur l’ordre des informations. La revue sur téléphone vérifie ensuite la composition et les interactions tactiles. Codex prépare le prototype, les variantes et la recette. Le bureau valide les contenus et les décisions qui l’engagent.

## Phases suivantes · À discuter ensemble

Les comptes membres, l’adhésion directement sur le site et les inscriptions gratuites gérées dans l’application restent des sujets à discuter avec MOANA. La phase A utilise un bouton de participation dont la destination dépend de l’événement.
