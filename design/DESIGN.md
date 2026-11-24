# MOANA — Système de design

## Règle de projet

Ce document s’applique à chaque création ou modification d’interface, sur le site public et dans l’espace du bureau. Lire d’abord ce fichier, puis le composant existant le plus proche. Réutiliser les couleurs, formes et composants avant d’en introduire de nouveaux. Une référence externe ou un skill peut nourrir une exploration. Les règles de MOANA guident le résultat livré.

L’[accueil de travail](../frontend/src/pages/index.astro) est le modèle visuel de départ. L’[export original](references/home-supplied.html) sert à comparer les évolutions. Le [prototype à trois pages](references/navigation-prototype/index.html) documente une piste de navigation.

Les sections « Palette », « Typographie » et « Accueil » s’appuient sur la page livrée. Les layouts des futures pages et du bureau sont des règles de prolongement. Les écarts identifiés en fin de document guident les corrections lorsqu’on intervient sur les éléments concernés.

Le site public utilise une échelle d’affichage de 88 % sur ordinateur et sur téléphone. Le zoom du navigateur reste disponible.

## Direction artistique

MOANA est une association étudiante de culture arabe à l’UGA. L’interface publique a le caractère d’une affiche culturelle et la lisibilité d’un agenda. Elle fait comprendre l’association, montre des activités concrètes et donne un prochain geste clair.

- Alterner de grandes surfaces vert profond et papier ou beige. Donner de la respiration aux titres et aux photos.
- Utiliser les vagues du logo aux transitions entre grandes bandes publiques. Réserver l’olivier et les vagues aux endroits où ils renforcent l’identité. Les panneaux de gestion restent sobres.
- Conserver le logo fourni et l’écriture **مُعاوَنة**. Utiliser les vraies photos autorisées pour illustrer les activités. Une fiche sans photo garde un titre fort et ses informations pratiques.
- Préférer une séquence lisible de sections, des filets fins et des aplats. Éviter les gradients décoratifs, le verre dépoli, les ombres lourdes et les grilles de cartes pour de simples paragraphes.

## Palette

| Rôle | Clair | Sombre |
|---|---|---|
| Fond général | Beige `#EFE6D2` | `#13241B` |
| Fond FAQ | Beige renforcé `#E5D9BF` | `#1A2E23` |
| Surface de contenu | Papier `#F8F3E7` | `#1A2E23` |
| Bande contrastée | Vert profond `#1E3A2B` | `#0E1C14` |
| Carte sur bande | Vert secondaire `#2A4D39` | `#203A2C` |
| Texte principal | Encre `#1C241F` | `#ECE3CF` |
| Texte secondaire | `#59645B` | `#B2B49E` |
| Texte sur bande foncée | `#EFE6D2` | `#ECE3CF` |
| Filet décoratif | `#D6C9AB` | `#2F4A3A` |
| Accent olive | `#7F9A3C` | `#A9C25E` |

L’olive sert aux accents et motifs. Sur fond clair, choisir le vert profond pour les petits libellés et vérifier le contraste du focus. Les filets décoratifs peuvent être subtils. Les bordures indispensables à l’identification d’un champ doivent rester visibles. Exprimer chaque état métier par un libellé, avec la couleur en appui. Suivre la préférence système sur les écrans qui reprennent le thème sombre de l’accueil.

## Typographie, grille et rythmes

| Élément | Règle |
|---|---|
| Grands titres de page (`h1`) | DejaVu Serif Bold (700), hébergée avec le site. Taille `clamp(2.4rem, 6.5vw, 4.4rem)`, interligne autour de 1,15. |
| Titres de section et sous-titres (`h2` et `h3`) | DejaVu Serif Regular (400), hébergée avec le site. Titres de section `clamp(1.8rem, 4.2vw, 2.7rem)`. Interligne autour de 1,15. |
| Texte et interface | Inter, avec repli sans sérif système. Corps public autour de 17 px et interligne 1,7. Graisse 600 pour actions et libellés. |
| Arabe | Amiri, avec repli sérif. Appliquer `lang="ar"` et `dir="rtl"` aux passages concernés. Isoler les passages courts en contexte français et laisser de la place aux diacritiques. |
| Conteneur | Largeur fluide sur toute la fenêtre. À l’échelle du site, les retraits visibles sont de 25 px jusqu’à 1 000 px et de 150 px au-delà, à gauche et à droite. Les marges de sécurité de l’appareil priment si elles dépassent ces retraits. |
| Espacement | Base 4 px. Employer surtout 8, 12, 16, 24, 32 et 48 px. Les grandes sections publiques peuvent aller jusqu’à 72 px de respiration verticale en bureau. |
| Longueur de ligne | Colonne de lecture autour de 34 à 42 rem. Pour un formulaire, garder les libellés, champs et erreurs dans la même colonne. |

Les fichiers DejaVu Serif et Inter sont hébergés avec leurs licences respectives, [DejaVu](../frontend/public/fonts/DejaVuSerif-LICENSE.txt) et [SIL OFL](../frontend/public/fonts/Inter-OFL.txt). Marcellus reste utilisée pour les éléments décoratifs qui l’emploient déjà.

## Composants

| Composant | Forme et comportement |
|---|---|
| Navigation | Logo suivi du nom arabe مُعاوَنة en Amiri, avec un nom accessible. L’ensemble mène à l’accueil. Libellés courts et ordre stable. Sur ordinateur, souligner la page active en permanence. Exposer `aria-current="page"`. À la souris, le lien s’éclaircit et un trait de 1 px s’étend depuis le centre sous le libellé, puis se rétracte à la sortie en 200 ms. Le focus clavier garde son contour et affiche le trait immédiatement. Avec le mouvement réduit, les états sont immédiats. Jusqu’à 760 px, les liens passent dans le tiroir du menu mobile. Les entrées en préparation sont atténuées et signalées comme indisponibles aux aides techniques. Elles restent hors de l’ordre de tabulation. |
| Bouton principal | Pilule, rayon 999 px, graisse 600, hauteur cible d’au moins 44 px. Vert profond avec texte beige sur fond clair. Beige avec texte vert sur bande foncée. Un niveau d’action principal par bloc. |
| Bouton secondaire | Même pilule, contour 1 à 1,5 px et fond transparent. Pour un renvoi discret, utiliser un lien texte descriptif. |
| Carte événement | Rayon 14 px, environ 24 px de marge intérieure. Titre, date ou statut, lieu et lien d’action. Le type d’événement peut figurer dans une petite pilule s’il aide à distinguer les activités. Garder les renseignements lisibles avec ou sans image. |
| Carte d’adhésion | Surface papier, fin contour, rayon 18 px. Conditions et prix confirmés près de l’action HelloAsso. Bouton pleine largeur sur mobile. |
| FAQ | Accordéon natif `details` / `summary`, surface papier, rayon 12 px. Question reconnaissable, signe d’ouverture et réponse lisible au clavier. Sur Contact, la réponse se déploie et se replie en 280 ms avec un léger fondu. L’état change immédiatement en mouvement réduit ou si le navigateur ne prend pas en charge la transition de l’accordéon. |
| Formulaire du bureau | Champs avec libellé visible au-dessus, rayon proposé de 8 px. Champs pleine largeur sur mobile. Aide et erreur près du champ. Actions de sauvegarde et de publication clairement nommées. |
| Statut et retour d’action | Texte explicite, par exemple « Brouillon », « Publié » ou « Échec de l’envoi ». Prévoir les états vide, attente, erreur et réussite lorsque le parcours les utilise. |

## Labels, paragraphes et champs

### Labels et textes courts

| Type | Usage | Traitement |
|---|---|---|
| Surtitre de section | Introduire un thème, par exemple « Qui sommes-nous » | Inter 600, 0,78 rem, capitales espacées de 0,16 em. Choisir une couleur de texte lisible sur le fond. |
| Catégorie d’événement | Situer rapidement l’activité, par exemple « Atelier » | Petite pilule, Inter 600, 0,72 rem, capitales espacées. |
| Métadonnée | Informer sur le lieu, le prix ou une condition | Texte court en casse normale. Le lieu garde une place stable en bas des cartes d’exemples. |
| Libellé de champ | Dire ce qu’il faut saisir, par exemple « Titre de l’événement » | Inter 600, casse normale, au-dessus du champ. Associer le libellé au contrôle. |
| Statut | Indiquer l’état d’un élément, par exemple « Brouillon » | Texte explicite. Une couleur ou une forme peut faciliter le repérage. |

### Paragraphes

| Type | Usage | Traitement |
|---|---|---|
| Introduction du bandeau | Expliquer ce que fait MOANA et à qui elle s’adresse | Inter à 1,15 rem, largeur maximale de 34 rem. |
| Introduction de section | Donner le contexte utile avant le contenu | Dans l’entête de 42 rem maximum, avec le titre. Texte secondaire ajusté au fond. |
| Corps éditorial | Développer un sujet ou raconter une activité | Inter autour de 1,05 rem et interligne 1,7. Paragraphes courts, avec intertitres si la lecture l’exige. |
| Description de carte | Résumer l’activité | 0,97 rem dans l’accueil actuel. Placer le lieu et les conditions dans leurs éléments dédiés. |
| Aide, erreur ou note | Préciser un format, expliquer un problème ou apporter un détail | Texte court et lisible, placé près de l’élément concerné. En cas d’erreur, expliquer la correction attendue. |

### Champs du bureau — base proposée

L’accueil fourni ne contient pas de formulaire. Les règles ci-dessous sont à éprouver sur le premier écran d’édition et pourront évoluer après examen des templates.

- Prévoir un style commun pour les champs courts, dates et heures, listes de choix et zones de texte. Surface papier, contour visible, rayon de 8 px proposé. Empiler les champs sur mobile. Grouper date et heure sur une ligne si la largeur le permet.
- Ordre d’un champ : libellé visible, contrôle, aide ou erreur. Le texte indicatif sert à donner un exemple de saisie. Relier les messages au contrôle avec `aria-describedby` lorsque nécessaire et marquer les erreurs avec `aria-invalid`.
- Définir les états normal, focus, erreur et désactivé. En erreur, conserver la saisie et accompagner le changement visuel d’un message. Prévoir un retour distinct pendant l’envoi d’une photo.
- Pour une photo, présenter les formats acceptés à proximité du contrôle. Une fois l’image choisie, afficher le nom ou l’aperçu et une action explicite pour la remplacer ou la retirer.

## Intégrer un template à MOANA

1. Examiner le template reçu dans ses formats disponibles. Relever ses couleurs, formes, typographies, mises en page, composants et états responsive. Si le template contient du code, vérifier comment les effets et interactions sont obtenus.
2. Comparer chaque élément intéressant à l’accueil de référence et aux règles de ce fichier. Préparer une proposition concrète pour la discussion.

| Décision à discuter | Ce qu’on consigne |
|---|---|
| Garder comme référence | L’élément, le template d’origine et ce qu’il illustre. |
| Intégrer au design MOANA | La règle ou le composant à modifier, l’adaptation proposée et les écrans concernés. |
| Écarter | L’élément et la raison liée à l’identité, à l’usage ou à la complexité. |

3. Après arbitrage, mettre à jour les sections concernées de ce fichier. Conserver une référence au template si elle aide à comprendre le choix. Reporter les styles dans le CSS partagé et les formes dans les composants au moment de l’implémentation.
4. Vérifier le résultat sur l’écran visé, sur téléphone et en bureau. Les éléments en discussion restent des propositions jusqu’à la décision.

## Mises en page principales

La [structure du site MOANA](../docs/site-structure.md) définit les sections et leurs priorités de contenu. La [référence Assas](references/assas-navigation.md) conserve l’analyse qui a nourri la discussion.

### Accueil

L’accueil combine des ancres internes et un lien vers la page Événements. Le tableau décrit l’export de référence. Dans la version Astro, le bloc « Prochain événement » et les cartes d’exemples sont sur la page Événements. Les blocs « Le nom » et « L’association » figurent sur la page L’asso. La vague du bandeau d’accueil débouche sur le fond général de la section Adhérer. Cette section utilise une colonne de lecture de 42 rem maximum, alignée sur les autres sections, avec le titre, l’introduction et la liste des bénéfices. Le bouton principal « Adhérer sur HelloAsso » prend place sous la liste, en pilule crème papier avec texte vert profond et contour fin de la même couleur. Dans la mise en page compacte, jusqu’à 760 px, le bouton est centré et mesure jusqu’à 17 rem, dans la largeur disponible. Garder 2 rem au-dessus et au-dessous du bouton. Le bandeau présente l’association en une phrase qui mentionne l’Université Grenoble Alpes. Un seul lien texte souligné « Découvrir l’asso », avec une zone d’appui d’au moins 44 px, ouvre la page L’asso. Les événements restent accessibles dans la navigation. Les questions fréquentes se trouvent sur Contact, sous le formulaire. Un changement d’ordre est une modification de l’accueil à tester.

Dans le bandeau Astro, deux colonnes donnent la priorité au texte sur ordinateur, avec le médaillon à droite. Jusqu’à 760 px, le titre et l’introduction précèdent le médaillon, qui reste centré et occupe au plus 58 % de la largeur disponible et 12 rem.

| Bloc et ancre | Composition observée dans la page fournie |
|---|---|
| Bandeau `#top` | Fond vert, texte beige. Navigation intégrée en haut. Logo de 2,6 rem avec le nom à gauche, liens « Le nom », « L’asso », « Événements », « Adhérer », « Questions » à droite. Le conteneur a un retrait vertical de 1,6 rem en haut et 3,5 rem en bas, avec 2,8 rem entre navigation et contenu. |
| Contenu du bandeau | Grille texte/visuel de 1,25 pour 1, espace 2,5 rem et centrage vertical. Dans le texte, le surtitre situe l’association à l’UGA. Le H1 mêle Moana, مُعاوَنة en Amiri olive gras et « la culture arabe en partage » sur une nouvelle ligne. Introduction à 1,15 rem sur 34 rem maximum. Les deux actions se replient sur plusieurs lignes si nécessaire. « Adhérer à Moana » est pleine et ouvre HelloAsso. « Voir nos événements » est entourée et mène à l’ancre. Les trois mentions pratiques suivent en texte plus petit. |
| Logo du bandeau | Visuel carré de 24 rem maximum, centré dans sa colonne et circulaire. Deux anneaux discrets à 10 et 22 px prolongent le médaillon, avec 10 % et 5 % de la couleur de texte sur vert. |
| Le nom `#nom` | Fond papier. Grille de 1 pour 1,3 et espace de 3 rem. À gauche, mot arabe centré entre 4 et 7 rem, translittération puis traduction. À droite, explication sur 36 rem maximum et deux blocs courts, « Le rameau d’olivier » et « Les vagues », signalés chacun par un filet supérieur. |
| L’association `#asso` | Fond général. Entête éditorial puis trois valeurs, « Transmettre », « Rassembler », « S’entraider ». Tous les blocs sont alignés en haut, en trois colonnes espacées de 2 rem. Chaque valeur commence par le même pictogramme feuille olive de 2,4 rem, puis un titre à 1,3 rem et un texte secondaire. |
| Événements `#evenements` | Bande verte. Introduction puis trois cartes d’exemples, « Stand henné », « Exposition cinématographique » et « Pique-nique ». Chaque carte sur vert secondaire affiche une catégorie, un titre, une description et son lieu. Le lieu s’aligne au bas de la carte et est précédé d’un filet. Sous la grille, encart de rayon 14 px et contour pointillé, texte à gauche et pilule beige « Voir les annonces » vers Instagram. |
| Adhésion `#adherer` | Fond général. Grille 1,2 pour 1, espace 2,5 rem, alignement en haut. À gauche, annonce de l’adhésion puis liste de trois bénéfices avec coches olive. À droite, carte papier bordée de rayon 18 px et retrait de 2 rem, contenu centré, logo 5 rem, tarif en Marcellus à 3,4 rem, explication puis bouton HelloAsso pleine largeur. |
| Questions `#faq` | Beige renforcé. Entête puis pile de cinq accordéons indépendants, largeur maximale 46 rem, intervalle 0,7 rem. Chaque élément a un filet, un rayon de 12 px et un retrait de 1 rem vertical et 1,25 rem horizontal. Question à gauche et signe plus ou moins à droite. La première question est ouverte au chargement. |
| Suivre `#suivre` | Fond général. Titre à gauche, lien Instagram à droite. Le lien est en Marcellus entre 1,6 et 2,6 rem et peut se couper sur une petite largeur. |
| Pied de page | Bande verte. Une ligne flexible qui se replie avec marque à gauche, attribution à l’UGA et nom arabe. Logo réduit à 2,2 rem, retrait vertical de 2,2 rem. |

**Transitions.** Trois vagues SVG décoratives relient le bandeau au papier, le fond général à la bande événements, puis la bande événements au fond général. Elles font 56 px de haut sur toute la largeur, avec `viewBox="0 0 1200 56"`, `preserveAspectRatio="none"` et `aria-hidden="true"`. La première ajoute un filet olive fin à la silhouette verte. Reprendre les tracés de la source quand une transition identique est nécessaire.

**Détails réutilisables.** L’entête de section associe éventuellement un surtitre, un titre et un paragraphe. Il occupe 42 rem maximum, avec 0,6 rem entre éléments et 2,4 rem avant le contenu. Le surtitre historique est à 0,78 rem, graisse 600, capitales espacées de 0,16 em. Sur les nouvelles sections, utiliser une couleur de texte suffisamment contrastée. Les pilules ont un retrait de 0,8 rem vertical et 1,4 rem horizontal. Les cartes d’événement existantes ont un retrait de 1,5 rem, un titre à 1,4 rem et une catégorie en pilule à 0,72 rem. Elles présentent des exemples passés, sans image ni action individuelle. Les futures fiches peuvent ajouter date et action selon leur contenu.

**Adaptation de l’export de référence.**

| Largeur | Rendu |
|---|---|
| Plus de 760 px | Bandeau, nom et adhésion en deux colonnes. Valeurs et événements en trois colonnes. |
| De 560 à 760 px | Bandeau, nom, adhésion et bloc Instagram en une colonne. Le logo du bandeau passe visuellement avant le texte et est limité à 70 % de la largeur et 18 rem. Valeurs en une colonne. Événements en deux colonnes avec la dernière carte sur toute la largeur. |
| En dessous de 560 px | Événements en une colonne. La navigation et les actions peuvent se replier. |
| Jusqu’à 480 px inclus | Les deux explications de symboles passent aussi en une colonne. |

Le conteneur combine le retrait de 16 px avec les marges de sécurité de l’appareil. Le défilement vers les ancres est animé par défaut et instantané lorsque le mouvement réduit est activé. Le soulignement de navigation, le contour de focus et le léger déplacement des pilules au survol constituent les retours existants.

### Événements et fiche événement

Lorsqu’un événement est annoncé, la section « Prochain événement » occupe toute la largeur et au moins une hauteur d’écran. Elle associe la photo et le panneau d’information sans cadre extérieur. Sur ordinateur, la photo s’affiche à gauche sur fond beige et le panneau vert profond à droite présente un surtitre crème légèrement teinté d’olive, un grand titre, la date et le lieu sous un filet fin, une courte description limitée à 40 caractères de largeur et le bouton crème « Participer ». Le lieu et la mention de démonstration utilisent un crème atténué. La photo couvre tout son conteneur avec un recadrage centré. Sur ordinateur, le bord gauche du panneau vert est incliné vers la droite en haut. La photo se prolonge derrière la diagonale. Jusqu’à 760 px, la photo passe au-dessus du panneau et le bouton occupe toute la largeur du contenu. Sans événement annoncé, le bloc se réduit au texte et au lien « Voir les annonces » vers Instagram. L’événement mis en avant figure aussi dans la rangée d’aperçu et dans la liste complète.

Une même rangée horizontale de cartes vert secondaire regroupe les événements à venir, puis les événements passés. Chaque carte occupe jusqu’à 21 rem et mesure 20 rem de haut. La date figure dans une pastille en haut des cartes à venir. Les cartes passées affichent une pastille grise (`#555`) et le libellé blanc « Passé ». Une photo d’illustration remplit chaque carte affichée. Les événements sans photo restent hors de la rangée. La pastille reste visible en haut et le bandeau vert du bas, d’une opacité de 88 %, affiche uniquement le titre, avec un retrait de 1,15 rem sous le texte. Au survol, le bandeau s’agrandit vers le haut en 300 ms, juste assez pour révéler la description sous le titre. La photo et la pastille restent visibles au-dessus du bandeau. Une bordure beige de 1 px souligne la carte dépliée. Le bouton du titre permet de déplier ou replier la description au clavier et au toucher. Jusqu’à 760 px, un chevron vers le haut apparaît à droite du titre et se retourne à l’ouverture. Ouvrir une autre carte ou cliquer en dehors referme la description active. En mouvement réduit, le changement est immédiat. Les illustrations de démonstration et les dates fictives sont visibles en développement et sur GitHub Pages pour la revue du bureau. Sur GitHub Pages, la mention « Événements fictifs » accompagne la rangée et la liste complète. Lorsque le visuel est sous licence Creative Commons, le crédit et la licence figurent sous la description dépliée. La barre de défilement est séparée des cartes par 30 px visibles. Sur téléphone, elle occupe au plus 82 % de la rangée pour laisser entrevoir la suivante. La rangée défile au toucher, au pavé tactile, avec sa barre native ou avec les flèches du clavier après avoir reçu le focus. L’alignement sur les cartes se fait à proximité, sans défilement automatique. La rangée affiche les cinq premiers événements. Sous la rangée, le bouton crème « Voir tous les événements » est aligné à droite, avec une icône chevron à droite du libellé, un espace de 1 rem au-dessus et un retrait latéral de 0,75 rem. Au survol, le chevron se décale de 0,25 rem vers la droite en 200 ms et revient à sa position au départ du curseur. En mouvement réduit, le déplacement est immédiat. Le lien ouvre la page dédiée qui affiche les cartes en grille sous des titres d’année en police de texte courant, de la plus récente à la plus ancienne. Chaque grille passe en une colonne si nécessaire. Sur la page dédiée, le lien crème « Retour » se place à droite du titre. Son chevron gauche précède le libellé et se décale vers la gauche au survol, avec les mêmes réglages de mouvement que le lien aller.

Sur la page de liste complète, un bouton circulaire beige opaque, bordé de vert sur 2 px et muni d’un chevron vert vers le haut, apparaît après une hauteur de fenêtre de défilement. Il reste fixé à 15 % du bord droit et du bas. Il apparaît avec une remontée de 0,5 rem et disparaît dans le mouvement inverse, en 220 ms. Son activation remonte en haut et rend le focus au titre. En mouvement réduit, l’apparition, la disparition et le retour en haut sont immédiats.

Une liste ou une grille de cartes réutilise le même composant. Partir d’une colonne sur téléphone, passer à deux ou trois selon la place, le contenu et la longueur des titres. Indiquer clairement ce qui est à venir et ce qui relève des archives.

Sur la fiche, montrer le titre, la date, le lieu, les modalités et l’action de participation avant le contenu secondaire. En bureau, un encart pratique peut accompagner la description. En mobile, le placer dans le flux de lecture. Une annulation ou un changement de lieu est signalé près du titre et de l’action.

### À propos

Pour construire « L’association », suivre les [sections actées](../docs/site-structure.md) et reprendre les formes de l’accueil. La page pourra utiliser une colonne de lecture pour la mission et des bandes éditoriales courtes pour l’équipe et les partenaires. L’[essai archivé](references/association-draft/about.html) reste consultable pour comparer la composition.

### Contact

Une vague décorative de 56 px sépare le formulaire et les questions fréquentes. Elle raccorde le crème soutenu de Contact au fond général de la FAQ. Un filet crème orangé (`#C9AD7E`) suit le tracé sur toute la largeur et garde une épaisseur de 3 px. Le titre de la FAQ et la colonne d’accordéons sont centrés. Les questions et les réponses sont alignées au début de leur ligne. Chaque carte de la FAQ reprend le [remplissage circulaire](#remplissage-circulaire) du bouton Instagram. Le cercle recouvre toute la carte, y compris la réponse quand elle est ouverte. Le titre et le signe + ou − passent au vert dans la zone crème. En thème clair, le texte de la réponse passe du vert secondaire au vert profond pendant son ouverture, puis reprend sa teinte de départ pendant le repli. En thème sombre, il évolue entre les teintes de texte secondaire et principal. Dans la zone crème, il évolue vers le vert profond en 280 ms au survol et pendant l’ouverture d’une réponse survolée ou active au clavier. Il reprend sa teinte de départ en 280 ms à la sortie ou pendant le repli. La couleur change immédiatement en mouvement réduit. La réponse conserve son animation d’ouverture et de fermeture. Sur téléphone, un appui ouvre ou ferme directement la réponse.

Le titre « Contacter MOANA » reprend la typographie et les retraits des autres titres de bandeau. Il est centré jusqu’à 760 px et aligné à gauche au-delà. Le bandeau et le contenu restent crème soutenu (`#E5D9BF`) dans les deux thèmes. Le panneau vert des moyens de contact reprend la composition de la [référence d’Aziz](references/contact-form-interface.md). Au-dessus de 760 px, il chevauche le bord gauche du formulaire sur fond papier, avec deux champs courts côte à côte. Jusqu’à 760 px, le panneau précède le formulaire. Les deux blocs se touchent, avec les angles arrondis aux extrémités et des angles droits à la jonction. Les champs s’empilent. Les deux blocs ont un rayon de 6 px, un contour de 1 px adapté à leur fond et une ombre légère. Les coordonnées et les liens du panneau associent un pictogramme crème de 20 px à un libellé lisible. Sur ordinateur et sur téléphone, les liens forment une rangée centrée sans filet. Chaque icône est centrée au-dessus de son libellé, sans soulignement. Les liens reviennent à la ligne quand la place manque. Les zones d’appui mesurent au moins 44 px de haut. Le bouton d’envoi reprend la bordure vert profond de 1 px et le rayon de 15 px des champs courts. Son libellé tient sur une ligne avec un retrait horizontal de 16 px.

Les champs courts au rayon de 15 px gardent un libellé associé qui remonte au focus ou quand une valeur est saisie. La transition dure 200 ms et devient immédiate en mouvement réduit. Le champ Message garde un libellé fixe, une hauteur de 120 px sans redimensionnement et un seul trait inférieur. Le compteur en haut à droite indique ce qu’il reste sur 2 000 caractères. La saisie et le collage sont limités par le champ natif. Au-delà de la hauteur visible, le défilement reste disponible à la souris, au toucher et au clavier. La barre reprend la [référence Contact](references/contact-form-interface.md#zone--message---css-de-référence), avec une piste grise translucide de 10 px et un curseur vert profond `#1E3A2B`. Si le navigateur expose uniquement les réglages standard, la barre garde les mêmes couleurs et utilise sa largeur fine native. Le contour des champs courts passe visuellement de 1 à 2 px au focus et revient à 1 px à la sortie, sans déplacer le texte. Les bordures des champs, le trait de Message et le curseur de sa barre de défilement utilisent le même vert profond. Au focus, un trait de 2 px s’étend de gauche à droite sur le trait de 1 px. Il reste déployé quand le champ contient du texte et se rétracte à la sortie du focus si le champ est vide. Ces transitions durent 200 ms dans les deux sens et deviennent immédiates en mouvement réduit. Cette bordure sert aussi de repère au clavier. En couleurs forcées, un contour système prend le relais. Dans la rangée d’actions, la case « Je représente un organisme » est à droite et le bouton d’envoi à gauche. Quand la largeur utile du formulaire passe sous 28 rem, chaque commande est centrée sur sa propre ligne. Décochée, elle est bordée avec un libellé atténué. Cochée, elle est remplie en vert profond avec une coche crème et un libellé de couleur normale. Son libellé est cliquable et la case s’active aussi au clavier avec un focus visible. En couleurs forcées, la case reprend son apparence native.

### Bureau

Entrer par la liste d’événements avec les statuts et une action de création visible. L’éditeur suit un ordre de lecture simple. Informations essentielles, médias, aperçu, puis publication. Utiliser une colonne principale et des surfaces calmes. Un aperçu latéral en bureau est possible si la largeur suffit. Sur téléphone, conserver l’ordre et donner accès à l’aperçu depuis le formulaire.

### Soulignement interactif

Les deux variantes sont disponibles dans [la feuille de styles commune](../frontend/src/styles/site.css). La classe `link-underline` fait apparaître le trait depuis le centre. Ajouter `link-underline-from-left` pour le faire progresser de gauche à droite. À la souris, le trait s’étend en 200 ms et se rétracte à la sortie. Le trait apparaît immédiatement au focus clavier, avec un contour visible, et au survol lorsque le mouvement réduit est activé. Sur un écran tactile, le lien s’active d’un appui.

### Remplissage circulaire

Au survol avec un pointeur précis, un cercle crème s’étend en 380 ms depuis un centre situé à 200 px du point d’entrée du curseur, vers l’extérieur et perpendiculairement au bord le plus proche. Le cercle reste découpé par le contour du contrôle. Le texte et l’icône passent au vert dans la zone recouverte. Le cercle se rétracte vers son centre à la sortie. Le focus clavier conserve son contour et remplit le contrôle, le mouvement réduit rend le remplissage immédiat et le toucher déclenche directement l’action. Les classes `circle-reveal` et `circle-reveal-fill` sont disponibles dans la feuille de styles commune.

### Pied de page commun

Le pied de page commun conserve le vert de la palette en fond. Le lien FAQ et le copyright placé juste dessous sont crème. La partie haute reprend l’organisation du [Two-Tiered Footer](references/two-tiered-footer.html). La partie haute place les liens de don, de partenariat et de FAQ à gauche, l’identité de MOANA au centre et l’invitation Instagram à droite. Le copyright suit la FAQ. Les liens « Faire un don » et « Proposer un partenariat » utilisent un pictogramme crème de 20 px à côté du libellé et une zone d’appui d’au moins 44 px. La [vague du second template](references/svg-wave-divider-footer.html) inspire le raccord au fond de la section précédente, réalisé avec le tracé MOANA de 56 px. La page Événements utilise sa vague de fin existante. L’invitation utilise une pilule transparente avec bordure et texte crème sur le fond vert du pied de page. Son pictogramme crème occupe un rond vert sur toute la hauteur du bord gauche. Le libellé a un espacement de 0,85 rem après le rond et un retrait de 1,65 rem au bord droit. Le bouton utilise le [remplissage circulaire](#remplissage-circulaire). Les liens « Faire un don », « Proposer un partenariat » et « FAQ » utilisent le soulignement de gauche à droite. Les liens du header utilisent le soulignement centré. Sur ordinateur, la partie haute a un minimum de 20 rem et un retrait de 1,5 à 2,5 rem en haut et de 2,75 rem en bas. Dans la colonne centrale, le logo et la présentation sont centrés horizontalement et verticalement sur ordinateur et sur téléphone. La largeur de lecture est la même dans les deux formats. Jusqu’à 760 px, les liens occupent la colonne gauche et l’identité la colonne droite. Les textes se replient selon la largeur disponible. L’invitation est centrée sous les deux colonnes, sans filet horizontal. En mode compact, la partie haute suit la hauteur de son contenu, avec 1 rem de retrait en haut. Sur téléphone, l’invitation est centrée verticalement dans sa zone avec 2,75 rem d’espace au-dessus et en dessous. Sur ordinateur, la partie haute suit la largeur du conteneur commun. Les deux premières colonnes se partagent les deux tiers de la grille, avec un espacement qui augmente avec la largeur. La pilule Instagram s’aligne sur le bord droit du conteneur. La bande basse garde 1 rem de retrait vertical. L’ensemble peut grandir si le contenu en a besoin. La bande basse reprend le [template Two-Tiered Footer](references/two-tiered-footer.html). Sur un vert plus profond, le crédit « Site développé par Aziz Missaoui » apparaît en Inter crème de 19 px à gauche. À droite, les icônes LinkedIn et GitHub de 24 px occupent des zones d’appui de 44 px espacées de 10 px. Au survol à la souris, l’icône prend l’accent olive comme le lien Instagram de l’accueil. Le changement de couleur est immédiat et le focus clavier reste visible. En mode compact, les icônes restent à droite. Le crédit peut se replier sur plusieurs lignes à gauche.

### Header public au défilement

La navigation commune reste en haut de l’écran sur ordinateur et sur téléphone. En haut de page, son fond est transparent et laisse apparaître la teinte du bandeau. Sur les 160 premiers pixels de défilement, ou sur toute la distance disponible si elle est plus courte, la teinte et l’ombre sous la barre évoluent progressivement, avec un début et une fin adoucis. En fin de transition, l’ombre est décalée de 3 px vers le bas, avec un flou de 10 px et une opacité de 20 %. Sur Contact, le crème reste identique à celui du bandeau. Seule l’ombre apparaît au défilement. Sur les pages à bandeau vert, elle prend le vert secondaire, légèrement plus clair que le bandeau. En mouvement réduit, le changement de teinte et d’ombre est immédiat. Les liens restent accessibles au clavier et les ancres tiennent compte de la hauteur réelle de la barre, y compris quand le menu se replie sur téléphone.

### Menu mobile

Jusqu’à 760 px, une commande de 76 × 60 px sans bordure affiche trois traits. Elle est centrée sur la hauteur du header, avec un retrait de 10 px en haut, en bas et à droite. Son bord intérieur est arrondi. À l’ouverture, elle glisse vers le bord gauche du panneau et les traits forment une croix. Le panneau et le bouton reprennent la teinte actuelle du header de la page. Le panneau arrive de la droite et un voile sombre couvre l’arrière-plan. Le bouton et le bord du panneau restent sans ombre à l’appui et pendant le mouvement. Un appui au doigt ou à la souris n’affiche pas de contour sur le bouton, le contour étant réservé à la navigation clavier. À la fermeture, la croix redevient trois traits et le panneau repart à droite. Les déplacements et le voile durent 300 ms et sont immédiats avec le mouvement réduit.

À l’ouverture et à la fermeture, la page garde sa largeur et sa position. Le défilement derrière le menu est bloqué en gardant l’espace réservé à la barre de défilement. Le menu s’ouvre au toucher ou au clavier. Le focus va sur « Fermer le menu » et reste dans le panneau ouvert. La croix, Échap et un appui sur le voile ferment le menu et rendent le focus au bouton d’ouverture. Le lien actif est en graisse 600, sans trait horizontal. Le contour de focus reste visible. En revenant à la largeur bureau, le tiroir se ferme et les liens réapparaissent dans le header.

## Responsivité et modes d’interaction

Concevoir la version téléphone et la version ordinateur à partir du même parcours. Adapter la composition, la navigation et les retours d’interaction tout en gardant les informations et les actions essentielles accessibles dans les deux versions.

| Contexte | Composition et interaction |
|---|---|
| Téléphone | Donner la priorité à l’action utile dans une lecture verticale. Passer à une colonne lorsque les blocs deviennent étroits. Garder assez d’espace entre les commandes et viser une zone tactile d’au moins 44 × 44 px pour les contrôles principaux. Montrer un retour à l’appui et signaler l’état ouvert ou sélectionné après activation. |
| Ordinateur | Exploiter les colonnes et les alignements latéraux lorsqu’ils aident à comparer ou à parcourir le contenu. Le survol peut souligner un lien ou animer légèrement un bouton. Le clavier donne accès aux mêmes commandes avec un focus visible. |
| Tablette et appareil hybride | Adapter la mise en page à la place disponible. Un écran large peut être tactile et un écran compact peut avoir une souris. Vérifier le point de rupture du composant et tester le toucher et le clavier sans supposer de périphérique unique. |

Déclencher un menu, un accordéon ou une action avec une commande activable au toucher et au clavier. Le survol apporte un retour supplémentaire. Les libellés, informations et actions utiles doivent aussi être accessibles en l’absence de survol. Sur un bouton qui déplie une zone, exposer son état avec `aria-expanded` si le composant n’a pas déjà cette sémantique native.

Appliquer les effets de souris associés au pointeur principal dans `@media (hover: hover) and (pointer: fine)`. Au toucher, supprimer le flash bleu du navigateur sur les éléments de la page. Employer un retour bref à l’appui, puis un état visible si l’action change l’interface. Le focus clavier garde son propre repère. Les transitions d’ouverture et de fermeture accompagnent le changement d’état. Avec `prefers-reduced-motion: reduce`, supprimer les mouvements décoratifs et garder le retour d’état immédiat.

Le lien « Aller au contenu » apparaît en haut à gauche quand il reçoit le focus clavier. Il reprend la pilule beige du bandeau et place le focus au début du contenu principal, y compris sur mobile. Son apparition est immédiate et le défilement suit la préférence de mouvement réduit.

Quand le logo est accompagné du nom « Moana », laisser son texte alternatif vide. Décrire le grand logo et utiliser le même fichier pour ses différentes occurrences. Garder les ancres existantes si une section est déplacée.

## Langues et mise en page

Appliquer la [règle de traduction du site](../docs/site-structure.md#langues-et-traduction) à chaque écran.

- Déclarer la langue et le sens de lecture de la page selon la langue affichée. Sur les mots arabes conservés dans une autre langue, indiquer `lang="ar"` et isoler le passage en RTL, par exemple avec `<bdi lang="ar" dir="rtl" translate="no">مُعاوَنة</bdi>`.
- Utiliser des espacements et alignements logiques, par exemple `padding-inline` et `text-align: start`. Vérifier la place du logo en début de lecture et le sens des flèches de navigation en RTL. Conserver l’orientation des logos.
- Laisser les éléments grandir en hauteur et autoriser le retour à la ligne dans les titres, boutons et libellés. Prévoir un repli du menu quand ses textes dépassent l’espace disponible. Garder les actions et informations essentielles lisibles.
- Prévoir des polices de repli adaptées aux écritures utilisées et assez d’interligne pour leurs signes. Garder les textes localisables sous forme de texte dans l’interface.
- Pour la recette, vérifier le français, une version avec des textes plus longs et une version RTL, sur téléphone et en bureau. Contrôler que les mots arabes conservés restent intacts et que les actions demeurent accessibles.

## Recette avant livraison

- Vérifier l’écran à 360 px, en bureau et à une largeur intermédiaire si la grille ou le menu se replie. Essayer le titre long, l’absence d’image et les états métier concernés.
- Tester à la souris, au toucher ou en émulation tactile, puis au clavier. Contrôler le retour à l’appui, les états ouverts et fermés, et l’accès aux actions sans survol.
- Tester les actions et la navigation au clavier, le focus visible et le contraste dans les thèmes utilisés. Respecter la préférence de mouvement réduit.
- Vérifier le sens de lecture des contenus mixtes français et arabe et le comportement à l’agrandissement.
- Joindre des captures mobile et bureau pour un changement visuel important. Documenter ici toute nouvelle règle visuelle adoptée.

Les valeurs du site public sont issues de l’accueil fourni. Les règles de composition des nouvelles pages et des formulaires du bureau servent de base de mise en œuvre. Le fichier source du logo et les droits de diffusion des médias restent à confirmer avec le bureau.

## Écarts repérés dans l’export

- **Contraste.** Le petit texte olive historique atteint environ 2,88:1 sur papier, 2,57:1 sur beige et 3,89:1 sur vert profond. Pour les petits libellés et liens, employer l’encre ou le vert profond sur clair, et le beige ou un accent plus clair sur vert. Vérifier le focus sur la surface réelle.
- **Sombre et mouvement.** Les variables suivent la préférence système, sauf thème clair explicite. Le CSS accepte aussi `data-theme="dark"`, sans sélecteur de thème dans l’interface. Certaines couleurs restent littérales dans les boutons. Vérifier les associations de couleurs dans les deux thèmes. Le portage respecte aussi la préférence de mouvement réduit pour les boutons.
- **Contenu.** Le tarif de 3 à 6 €, les conditions de participation, les liens et les exemples sont les données de l’accueil fourni. Les vérifier avant publication et les tenir modifiables dans le site.

## Où ranger le code

Le balisage de l’accueil se trouve dans [la page Astro](../frontend/src/pages/index.astro) et ses styles dans [le CSS partagé](../frontend/src/styles/site.css). L’export conserve le HTML et le CSS d’origine. Ce fichier documente les usages et les valeurs à reprendre. Quand plusieurs écrans partagent les mêmes règles, mettre les variables de thème et de typographie dans la feuille de style commune, puis réutiliser le code des composants et de la navigation. Les chemins dépendront de la structure du site retenue. Les consignes de développement et de vérification restent référencées dans `AGENTS.md` et le skill `visual-review`. Les tableaux ci-dessus suffisent à transmettre les valeurs, sans maintenir une deuxième version du CSS dans le Markdown.
