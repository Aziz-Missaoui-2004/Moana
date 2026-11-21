# Structure et contenu du site MOANA

## Décisions adoptées

- **Retour à l’accueil.** Le logo en haut à gauche mène à l’accueil depuis chaque page.
- **Accueil et L’association.** Deux pages distinctes. L’accueil présente brièvement MOANA et oriente vers ses activités. L’association développe sa mission, son identité et les personnes qui la font vivre.
- **Pied de page commun.** Toutes les pages publiques affichent le même pied de page, avec le même contenu et les mêmes liens. Il est intégré au layout public sous forme d’un composant Astro partagé. Le lien « Faire un don » ouvre le formulaire HelloAsso. « Proposer un partenariat » ouvre le profil Instagram de MOANA tant que le formulaire dédié est en préparation.
- **Équipe et partenaires.** « Notre équipe » et « Partenaires » sont deux sections de présentation de l’association.
- **Première lecture.** Chaque section montre d’abord l’information qui aide à comprendre ou qui donne envie d’en savoir plus. Utiliser un titre précis, une introduction courte si utile et un lien explicite si une suite existe.

## Ordre de travail pour les pages publiques

1. **Architecture.** Donner une mission à chaque page et décider ce qui doit être visible dès l’accueil et ce qui mérite une page dédiée. Définir les sections et leur ordre à partir du parcours du visiteur.
2. **Contenu.** Éprouver la structure avec une accroche, une fiche événement réelle et une action claire. Revoir les sections qui se répètent ou pour lesquelles il manque de matière.
3. **Mise en page.** Tester le parcours sur ordinateur et sur téléphone, avec une attention particulière au téléphone. Utiliser des titres et des textes de longueur réaliste. Vérifier ce qu’on comprend au premier écran et comment on accède à l’étape suivante.
4. **Couleurs.** Reprendre la discussion sur la palette après avoir fixé l’architecture et éprouvé la mise en page. Évaluer sur une page complète le repère proposé d’environ 75 % de surfaces claires et 25 % de bandes vertes, au sein d’un thème unique.

## Langues et traduction

- Tous les textes de l’interface doivent pouvoir être localisés. Les langues et les traductions à publier seront choisies selon les besoins de MOANA.
- Les mots et expressions écrits explicitement en arabe dans le contenu source, comme **مُعاوَنة**, conservent leur graphie dans chaque version. Si le contenu donne une explication ou une traduction du sens à côté, cette explication peut être localisée.
- Les phrases sont traduites comme des unités complètes. Les passages arabes conservés peuvent être repositionnés dans la phrase selon la grammaire de la langue cible.
- L’interface conserve son ordre de lecture et sa hiérarchie. Les textes peuvent prendre plus de lignes et certaines dispositions s’inversent selon le sens de lecture. Voir les [règles de mise en page](../design/DESIGN.md#langues-et-mise-en-page).

## Page « Accueil » — contenu à discuter

1. **Premier écran.** MOANA en une phrase, avec la culture arabe et l’UGA. Ajouter une accroche distinctive si le bureau dispose d’un fait concret à mettre en avant. Action principale proposée : « Voir les événements ».
2. **Prochain rendez-vous.** Date, lieu et action de participation si l’annonce est confirmée. Entre deux annonces, montrer des exemples d’activités documentées.
3. **MOANA en chiffres.** Deux ou trois indicateurs avec une période et une source, selon les données disponibles.
4. **Découvrir l’association.** Un aperçu court de la mission et un lien vers la page « L’association ».
5. **Rejoindre MOANA.** Modalités et lien d’adhésion confirmés. La place d’un aperçu des partenaires sur l’accueil reste à discuter.

## Page « L’association » — contenu à discuter

| Section | Information à mettre en avant | Suite possible |
|---|---|---|
| Présentation | Ce que fait MOANA à l’UGA et à qui l’association s’adresse | Découvrir ses activités |
| Identité et histoire | Le sens de مُعاوَنة, l’entraide et les origines de MOANA | Comprendre l’histoire du nom et du logo |
| Activités | Exemples qui montrent comment la mission se traduit sur le campus | Voir les événements |
| Notre équipe | Les personnes ou rôles qui font vivre l’association, avec les informations autorisées | Découvrir comment s’impliquer |
| Partenaires | Un aperçu des partenaires confirmés ou d’une collaboration concrète | Voir la page Partenaires proposée |

Les exemples de contenu et les liens de suite sont des pistes. L’ordre exact et les sous-sections seront précisés lors de la discussion de chaque page.

Les informations et validations attendues pour les deux pages sont suivies dans [Préparer le site avec le bureau](bureau-site.md).

## Navigation

Le logo renvoie à l’accueil. Les entrées suivent cet ordre : « L’asso », « Nos événements », « Galerie », « Nos partenaires », « Contact », « Adhérer ». « Galerie » est le libellé de travail. « L’asso » ouvre `/asso`, « Nos événements » ouvre `/evenements/` et « Contact » ouvre `/contact/`. Galerie, Nos partenaires et Adhérer sont affichés en attente de leur destination.

La [note sur Assas Monde Arabe](../design/references/assas-navigation.md) conserve la comparaison et les propositions initiales.

## Page « Événements »

La première version de la route reprend le bloc « Prochain événement » et les trois exemples d’événements passés déplacés de l’accueil. La liste à venir et les rangées à défilement font partie du travail de conception de cette page.

Le lien « Événements » du header mène à la page dédiée `/evenements/`. La page présente trois sections, dans cet ordre.

1. **Prochain événement.** En tête de page, afficher le titre, la date, le lieu, les informations utiles et le bouton « Participer ». Quand aucune date n’est annoncée, afficher un message et garder les archives accessibles.
2. **Événements à venir.** Une rangée de cartes à défilement horizontal, classées de la date la plus proche à la plus éloignée. La rangée présente les autres dates à venir, puisque le prochain événement est déjà mis en avant.
3. **Événements passés.** Une deuxième rangée à défilement horizontal, des plus récents aux plus anciens.

Sur téléphone, chaque rangée peut être parcourue au doigt. Sur ordinateur, prévoir des commandes visibles quand la rangée déborde. Les cartes et les commandes restent accessibles au clavier, et le défilement reste limité à la rangée. L’accueil renvoie vers cette page avec son lien « Voir nos événements ». La destination exacte du bouton « Participer » sera définie avec MOANA.

## Page « Contact »

Le panneau « Nous trouver » présente l’adresse postale et les liens Instagram et HelloAsso. L’adresse e-mail publique et le compte TikTok restent à confirmer avec le bureau. Le formulaire général est visible en développement pour la revue. Son envoi sera défini avec le bureau, ainsi que les champs et la destination des demandes de partenariat.

Les questions fréquentes suivent le formulaire sur Contact. L’ancre directe est `/contact/#faq`.
