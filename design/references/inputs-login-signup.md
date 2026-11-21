# Champs à libellé flottant — référence d’Aziz

Analyse du [CSS](https://github.com/Aziz-Missaoui-2004/login_signup_interface/blob/d0b58ab84dc7eb89f63b68cff649c10916cf0cda/style.css) et du [HTML](https://github.com/Aziz-Missaoui-2004/login_signup_interface/blob/d0b58ab84dc7eb89f63b68cff649c10916cf0cda/log-in.html), limitée aux champs textuels.

## Forme et mouvement observés dans le code

- Champ d’environ 60 px de haut, rayon de 8 px, contour bleu de 3 px et retrait de saisie de 20 px. Le libellé au repos est gris, centré verticalement et placé à 25 px du bord gauche.
- Au focus, le libellé remonte d’environ 30 px et vient se poser à cheval sur le bord supérieur. Le fond blanc derrière les lettres masque le contour. Le libellé devient bleu et prend une taille de 18 px.
- La transition applique `ease` sur 300 ms à toutes les propriétés. Au flou, un champ vide retrouve son état initial. Le sélecteur `:valid` maintient le libellé en haut quand le champ est valide. Le JavaScript sert à afficher ou masquer le mot de passe.

## Adaptation MOANA à discuter

- Reprendre le rayon de 8 px et le libellé flottant pour les champs textuels courts. Essayer une surface crème papier et un contour vert de 1 px, avec un indicateur de focus contrasté. Faire correspondre le fond du libellé flottant à la surface derrière la bordure.
- Tester un déplacement de 200 ms et un libellé légèrement plus petit en position haute. Garder la transition immédiate lorsque le mouvement réduit est demandé.
- Associer chaque libellé au champ par `for` et `id`. Garder le libellé en haut dès que le champ contient une valeur, y compris après préremplissage ou en cas de saisie invalide. Avec un champ optionnel vide, il revient en position basse après le focus.
- Essayer des libellés fixes au-dessus pour les champs de date, les listes et la zone de message. Réserver de la place pour les aides et erreurs, les libellés longs sur téléphone et la lecture de droite à gauche.

Cette piste reste à arbitrer selon le [système de design](../DESIGN.md#intégrer-un-template-à-moana). La première comparaison en navigateur pourra se faire sur les états vide, focus, renseigné, invalide et prérempli.
