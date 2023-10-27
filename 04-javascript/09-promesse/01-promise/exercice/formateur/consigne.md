# Exercice sur les promesses #

## 1. tri ##

1. Lire la documentation de la fonction sort() de javascript et permettre à celle ci de trier convenablement notre tableau.
2. Faire une fonction de "tri" qui va retourner une promesse.

- Cette fonction devra trier notre tableau.
- Puis si tous s'est bien passé, lancé le .then();
- Mais si deux éléments du tableau sont de type différent, lancer le .catch();

Exemple :

```javascript
const a1 = [3,12, 45, 4, 70];
const a2 = [3,"12", 45, 4, 70];
// Le code suivant affichera [3, 4, 12, 45, 70]
tri(a1).then(tableau=>console.log(tableau)).catch(e=>console.error(e));
// Le code suivant affichera "Erreur, type incompatible."
tri(a2).then(tableau=>console.log(tableau)).catch(e=>console.error(e));
```

## 2.Circulation ##

Créer un feu de circulation qui restera 3 seconde au vert

- PUIS qui restera 1 seconde au jaune,
- PUIS qui restera 2 seconde au rouge.
- PUIS se répètera à nouveau.

Tout cela à l'aide de promesse.
