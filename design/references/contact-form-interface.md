# Formulaire de contact — référence d’Aziz

Analyse statique du [HTML](https://github.com/Aziz-Missaoui-2004/contact_form_interface/blob/9a7ed2bf002785a396ea2bfceafa423698f1d6c9/index.html) et du [CSS](https://github.com/Aziz-Missaoui-2004/contact_form_interface/blob/9a7ed2bf002785a396ea2bfceafa423698f1d6c9/style.css).

## Composition et comportement

- Un panneau vert de coordonnées et réseaux chevauche le formulaire blanc sur ordinateur. Le prénom et le nom forment une rangée, l’e-mail et le téléphone une deuxième. Le message et l’envoi occupent chacun une rangée. À 860 px et moins, le panneau passe au-dessus du formulaire et les champs s’empilent.
- Les champs sont ouverts, avec un trait inférieur gris de 1 px. Le libellé passe de 18 à 12 px, remonte de 20 px et devient vert en 300 ms. Le focus ou la validité déclenche cet état, y compris pour la zone de message. Le champ perd son contour de focus natif.
- Les icônes Font Awesome signalent le lieu, l’e-mail, le téléphone et les réseaux. Les champs eux-mêmes utilisent du texte. Les icônes sociales blanches virent au vert clair au survol. Dans cette maquette, les coordonnées n’ont pas de destination et les liens sociaux pointent vers `#`.
- Le bouton vert s’éclaircit au survol et reprend son vert initial à l’appui. Tous les champs sont obligatoires et l’e-mail et le téléphone utilisent le type texte. Les libellés sont des `span` et le formulaire ne définit ni destination d’envoi ni retour de succès ou d’erreur.

## Zone « Message » — CSS de référence

Extrait des règles de la maquette qui s’appliquent au `textarea`. Le champ fait toute la largeur et le texte flottant est un `span` placé juste après le `textarea`, dans un conteneur `.inputBox.w100`.

```css
.container .contactForm .formBox .inputBox {
    position: relative;
    margin-bottom: 35px;
}

.container .contactForm .formBox .inputBox.w100 {
    width: 100%;
}

.container .contactForm .formBox .inputBox textarea {
    width: 100%;
    height: 120px;
    resize: none;
    padding: 5px 0;
    font-size: 18px;
    font-weight: 300;
    color: #333;
    border: none;
    outline: none;
    border-bottom: 1px solid #777;
}

.container .contactForm .formBox .inputBox span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    pointer-events: none;
    font-size: 18px;
    font-weight: 300;
    transition: 0.3s;
}

.container .contactForm .formBox .inputBox textarea:focus ~ span,
.container .contactForm .formBox .inputBox textarea:valid ~ span {
    transform: translateY(-20px);
    font-size: 12px;
    color: #095a55;
    font-weight: 500;
}

.container .contactForm .formBox .inputBox textarea::-webkit-scrollbar {
    background-color: rgba(212, 212, 212, 0.651);
    width: 10px;
    border-top: 1px solid rgba(110, 110, 110, 0.651);
    cursor: pointer;
}

.container .contactForm .formBox .inputBox textarea::-webkit-scrollbar-thumb {
    background-color: #095a55;
}
```

Cet extrait isole les règles qui produisent le rendu du champ Message dans la maquette. [CSS original](https://github.com/Aziz-Missaoui-2004/contact_form_interface/blob/9a7ed2bf002785a396ea2bfceafa423698f1d6c9/style.css)

## Piste MOANA à discuter

### Mémo du panneau de coordonnées original

Le panneau vert fait 350 px de large sur ordinateur et chevauche le formulaire par la gauche. Sous le titre, les coordonnées forment trois lignes. Chaque icône blanche est à gauche dans une colonne de 30 px, avec le texte aligné à droite de l’icône.

| Ordre | Icône Font Awesome | Texte associé |
|---|---|---|
| 1 | Carte avec repère `fa-map-marked-alt` | Adresse |
| 2 | Arobase `fa-at` | E-mail |
| 3 | Combiné avec ondes `fa-phone-volume` | Téléphone |

En bas du panneau, les icônes sociales sont centrées sur une rangée, dans cet ordre : **Facebook → Twitter → Instagram → Pinterest → LinkedIn**. Chaque icône blanche mesure 28 px et occupe un emplacement de 60 px de large. Au survol, elle passe au vert clair `#77DA59` avec une transition de 300 ms. En format compact, le panneau prend toute la largeur au-dessus du formulaire.

### Adaptation envisagée

Reprendre la séparation entre « Écrire à MOANA » et « Autres moyens de nous joindre ». Sur téléphone, placer le formulaire en premier si envoyer un message est l’action principale. Sur ordinateur, utiliser deux zones côte à côte si des coordonnées officielles justifient la deuxième. Employer les icônes à côté des liens de contact utiles, avec un libellé lisible et une destination vérifiée.

Pour les champs courts, voir le cadre de 8 px à libellé flottant de l’[autre référence](inputs-login-signup.md). Pour la zone Message, le CSS de la maquette est reproduit ci-dessus pour comparaison avec le [design actuel](../DESIGN.md). Définir avec le bureau les champs nécessaires, le destinataire et les états d’envoi dans le [document de suivi](../../docs/bureau-site.md).
