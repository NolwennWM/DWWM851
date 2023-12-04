-- Récupérer la BDD dans les ressources.
--  1. Quels sont les tickets qui comportent l’article d’ID 500, afficher le numéro de  ticket uniquement ? (24 résultats attendus)
SELECT NUMERO_TICKET FROM ventes WHERE ID_ARTICLE = 500;
--  2. Afficher les tickets du 15/01/2014. (1 résultat attendu)
SELECT NUMERO_TICKET FROM ticket WHERE DATE_VENTE = "2014-01-15"
--  3. Afficher les tickets émis du 15/01/2014 au 17/01/2014.(4 résultats attendus)
SELECT NUMERO_TICKET FROM ticket WHERE DATE_VENTE BETWEEN "2014-01-15" AND "2014-01-17"
--  4. Afficher la liste des articles apparaissant à 50 et plus exemplaires sur un ticket.(1274 résultats attendus)
SELECT ID_ARTICLE FROM ventes  WHERE QUANTITE >=50
--  5. Quelles sont les tickets émis au mois de mars 2014.(78 résultats attendus)
SELECT * FROM ticket WHERE DATE_VENTE LIKE "2014-03%"
-- Ou
SELECT * FROM ticket WHERE MONTH(DATE_VENTE) = "03" AND ANNEE = 2014;
--  6. Quelles sont les tickets émis entre les mois de mars et avril 2014 ? (166 résultats attendus)
SELECT * FROM ticket WHERE DATE_VENTE BETWEEN "2014-03-01" AND "2014-04-30"
-- OU
SELECT * FROM ticket WHERE MONTH(DATE_VENTE) BETWEEN "03" AND "04" AND ANNEE = 2014
--  7. Quelles sont les tickets émis au mois de mars et juin 2014 ? (174 résultats attendus)
SELECT * FROM ticket WHERE DATE_VENTE LIKE "2014-03%" OR DATE_VENTE LIKE "2014-06%"
--  8. Afficher l’id et le nom des bières classée par couleur. (3922 résultats attendus, vous pouvez afficher la couleur pour vérifier votre résultat)
SELECT ID_ARTICLE, nom_article FROM article ORDER BY ID_Couleur
--  9. Afficher l’id et le nom des bières n’ayant pas de couleur. (706 résultats attendus)
SELECT ID_ARTICLE, nom_article FROM article WHERE ID_Couleur IS NULL;
--  10. Lister pour chaque ticket la quantité totale d’articles vendus classée par quantité décroissante. (4502 résultats attendus)
SELECT NUMERO_TICKET, sum(QUANTITE) as total FROM ventes GROUP BY NUMERO_TICKET ORDER BY total DESC
--  11. Lister chaque ticket pour lequel la quantité totale d’articles vendus est supérieure
--  à 500 classée par quantité décroissante.(1026 résultats attendus)
SELECT NUMERO_TICKET, sum(QUANTITE) as total FROM ventes GROUP BY NUMERO_TICKET HAVING total > 500 ORDER BY total DESC
--  12. Lister chaque ticket pour lequel la quantité totale d’articles vendus est supérieure
--  à 500 classée par quantité décroissante.On exclura du total,
--  les ventes ayant une quantité supérieure à 50  (1021 résultats attendus)
SELECT NUMERO_TICKET, sum(QUANTITE) as total FROM ventes WHERE QUANTITE <= 50 GROUP BY NUMERO_TICKET HAVING total > 500 ORDER BY total DESC
--  13. Lister l'id, le nom de la bière, le volume et le titrage des bières de type ‘Trappiste’. (48 résultats attendus.)
SELECT NOM_ARTICLE, ID_ARTICLE, VOLUME, TITRAGE FROM article INNER JOIN type t USING(ID_TYPE) WHERE t.NOM_TYPE = "Trappiste"
--  14. Lister les marques de bières du continent ‘Afrique’ (3 résultats attendus)
SELECT m.ID_MARQUE, p.NOM_PAYS FROM marque m INNER JOIN pays p ON m.ID_PAYS = p.ID_PAYS INNER JOIN continent c ON p.ID_CONTINENT = c.ID_CONTINENT WHERE NOM_CONTINENT = "Afrique"
--  15. Lister les bières du continent ‘Afrique’ (6 résultats attendus)
SELECT a.NOM_ARTICLE, p.NOM_PAYS FROM article a RIGHT JOIN marque m USING(ID_MARQUE) RIGHT JOIN pays p USING(ID_PAYS) RIGHT JOIN continent c USING(ID_CONTINENT) WHERE c.NOM_CONTINENT = "Afrique"
--  16. Lister les tickets (année, numéro de ticket, montant total payé). En sachant que le
--  prix de vente est égal au prix d’achat augmenté de 15% et que l’on n’est pas
--  assujetti à la TVA. (8263 résultats attendus avec pour les tickets 1, 2 et 3 des totaux égaux à "601.40", "500.05" et "513.33")
SELECT NUMERO_TICKET, t.ANNEE, SUM(QUANTITE*PRIX_ACHAT*1.15) FROM ticket t INNER JOIN ventes USING(NUMERO_TICKET) INNER JOIN article a USING (ID_ARTICLE) GROUP BY t.ANNEE, NUMERO_TICKET;
-- OU
SELECT NUMERO_TICKET, ANNEE, ROUND(SUM(QUANTITE*PRIX_ACHAT*1.15),2) FROM ventes INNER JOIN article a USING (ID_ARTICLE) GROUP BY ANNEE, NUMERO_TICKET;
--  17. Donner le C.A. par année. (3 résultats attendus : 
-- 2014: "585094.47", 2015: "1513663.13", 2016: "2508162.52")
SELECT ANNEE, ROUND(SUM(QUANTITE*PRIX_ACHAT*1.15),2) as Total FROM ventes INNER JOIN article USING (ID_ARTICLE) GROUP BY ANNEE
--  18. Lister les quantités vendues de chaque article pour l’année 2016. (1960 résultats attendues (ou 3922))
SELECT a.NOM_ARTICLE, v.ANNEE, SUM(QUANTITE) as Total 
FROM article a 
INNER JOIN ventes v USING(ID_ARTICLE) 
WHERE v.ANNEE = 2016 
GROUP BY NOM_ARTICLE 
ORDER BY total DESC;
--  19. Lister les quantités vendues de chaque article pour les années 2014,2015 ,2016. (5838 résultats attendus (ou 11197))
SELECT a.NOM_ARTICLE, v.ANNEE, SUM(QUANTITE) as Total 
FROM article a 
INNER JOIN ventes v USING(ID_ARTICLE) 
WHERE v.ANNEE IN (2014, 2015, 2016)
GROUP BY NOM_ARTICLE, ANNEE
--  20. Lister les articles qui n’ont fait l’objet d’aucune vente en 2014. (498 résultats attendus)
SELECT NOM_ARTICLE FROM article a RIGHT JOIN ventes v USING(ID_ARTICLE) WHERE a.ID_ARTICLE NOT IN (SELECT DISTINCT ID_ARTICLE FROM ventes WHERE ANNEE = 2014)
GROUP BY NOM_ARTICLE;
--  21. Coder de 3 manières différentes la requête suivante :
--  Lister les pays qui fabriquent des bières de type ‘Trappiste’. (3 résultats attendus)
SELECT NOM_PAYS FROM pays 
    LEFT JOIN marque USING(ID_PAYS)
    LEFT JOIN article USING(ID_MARQUE)
    LEFT JOIN type USING(ID_TYPE)
    WHERE NOM_TYPE = "Trappiste"
    GROUP BY NOM_PAYS;

SELECT DISTINCT NOM_PAYS FROM pays 
    LEFT JOIN marque USING(ID_PAYS)
    LEFT JOIN article USING(ID_MARQUE)
    LEFT JOIN type USING(ID_TYPE)
    WHERE NOM_TYPE = "Trappiste";

SELECT NOM_PAYS FROM pays 
    LEFT JOIN marque USING(ID_PAYS)
    LEFT JOIN article USING(ID_MARQUE)
    WHERE ID_TYPE = (SELECT ID_TYPE FROM type WHERE NOM_TYPE = "Trappiste")
    GROUP BY NOM_PAYS;
--  22. Lister les tickets sur lesquels apparaissent un des articles apparaissant aussi sur
--  le ticket 2014-856. (38 résultats attendus)
SELECT concat(ANNEE, "-", NUMERO_TICKET) as idTicket
    FROM ventes
    WHERE ID_ARTICLE IN
    (SELECT ID_ARTICLE FROM ventes WHERE ANNEE = 2014 AND NUMERO_TICKET = 856)
--  23. Lister les articles ayant un degré d’alcool plus élevé que la plus forte des
--  trappistes. (74 résultats attendus)
SELECT NOM_ARTICLE, TITRAGE, VOLUME
FROM article
WHERE TITRAGE > (SELECT MAX(TITRAGE) FROM article INNER JOIN type USING (ID_TYPE) WHERE NOM_TYPE = "Trappiste")
--  24. Afficher les quantités vendues pour chaque couleur en 2014.
-- (5 résultats attendus : Blonde	"72569", Brune	"49842"	,
-- NULL	"36899", Ambrée	31427, Blanche	14416	)
SELECT NOM_COULEUR, SUM(QUANTITE) as Total FROM ventes
LEFT JOIN article USING(ID_ARTICLE)
LEFT JOIN couleur USING (ID_Couleur)
WHERE ANNEE = 2014
GROUP BY NOM_COULEUR;
--  25. Donner pour chaque fabricant, le nombre de tickets sur lesquels apparait un de
--  ses produits en 2014. (11 résultats attendus dont 7383 sans NULL)
SELECT NOM_FABRICANT, COUNT(NUMERO_TICKET) as Total 
FROM ticket t 
LEFT JOIN ventes v ON t.ANNEE = v.ANNEE AND t.NUMERO_TICKET = v.NUMERO_TICKET 
LEFT JOIN article a USING(ID_ARTICLE)
LEFT JOIN marque USING(ID_MARQUE)
LEFT JOIN fabricant USING(ID_FABRICANT)
WHERE t.ANNEE = 2014
GROUP BY NOM_FABRICANT
-- 26. Donner l’ID, le nom, le volume et la quantité vendue des 20 articles les plus  vendus en 2016. 
--(résultats allant de l'id "3192" avec 597 ventes à l'id "3789" avec 488 ventes)
SELECT ID_ARTICLE, NOM_ARTICLE, VOLUME, SUM(QUANTITE) total FROM article INNER JOIN ventes USING(ID_ARTICLE) WHERE ANNEE = 2016 GROUP BY ID_ARTICLE ORDER BY total DESC LIMIT 20;
--  27. Donner l’ID, le nom, le volume et la quantité vendue des 5 ‘Trappistes’ les plus vendus en 2016.
-- (résultats allant de l'id "3588" avec 502 ventes à l'id "2104" avec 357 ventes)
SELECT article.ID_ARTICLE, NOM_ARTICLE, VOLUME, SUM(QUANTITE) total FROM article INNER JOIN ventes USING (ID_ARTICLE) INNER JOIN type USING(ID_TYPE) WHERE ANNEE = 2016 AND NOM_TYPE = "Trappiste" GROUP BY article.ID_ARTICLE ORDER BY total DESC LIMIT 5;
--  28. Donner l’ID, le nom, le volume et les quantité vendues en 2015 et 2016, des
--  bières dont les ventes ont été stables. (moins de 1% de variation)
-- (29 résultats attendus)
SELECT ID_ARTICLE, NOM_ARTICLE, VOLUME, 
    (SELECT SUM(QUANTITE) from ventes WHERE ID_ARTICLE = A.ID_ARTICLE AND ANNEE = 2015) as "2015",
    (SELECT SUM(QUANTITE) from ventes WHERE ID_ARTICLE = A.ID_ARTICLE AND ANNEE = 2016) as "2016"
FROM article A
WHERE CAST((SELECT SUM(QUANTITE) from ventes WHERE ID_ARTICLE = A.ID_ARTICLE AND ANNEE = 2016) -
(SELECT SUM(QUANTITE) from ventes WHERE ID_ARTICLE = A.ID_ARTICLE AND ANNEE = 2015) as float) /
(SELECT SUM(QUANTITE) from ventes WHERE ID_ARTICLE = A.ID_ARTICLE AND ANNEE = 2015) * 100 BETWEEN -1 AND 1;
--  29. Lister les types de bières suivant l’évolution de leurs ventes entre 2015 et 2016.
--  Classer le résultat par ordre décroissant des performances.
-- (13 résultats attendus allant de "Bio" 82.71 à "Lambic" 47.28)
select ID_TYPE, NOM_TYPE,
  round(
    (
    cast(
      (
        select sum(quantite)
        from ventes
        where annee = 2016
          and ID_article in (
            select ID_article
            from article
            where ID_TYPE = t.id_type
            )
      )
      - 
      (
        select sum(quantite)
        from ventes
        where annee = 2015
          and ID_article in 
            (
              select ID_article
              from article
              where ID_TYPE = t.id_type
            )
      )
    as float) /
    (
      select sum(quantite)
      from ventes
      where annee = 2015
      and ID_article in 
        (
          select ID_article
          from article
          where ID_TYPE = t.id_type
        )
    )
  * 100) ,2) as evolution
from type t
order by evolution desc

--  30. Existe-t-il des tickets sans vente ? (3 résultats attendus)
SELECT ANNEE, NUMERO_TICKET FROM ticket WHERE concat(ANNEE, NUMERO_TICKET) NOT IN (SELECT concat(ANNEE, NUMERO_TICKET) FROM ventes);

--  31. Lister les produits vendus en 2016 dans des quantités jusqu’à -15% des quantités
--  de l’article le plus vendu. (12 résultats attendus)
select a.ID_ARTICLE,
    NOM_ARTICLE,
    (select sum(QUANTITE) from ventes where ANNEE = 2016 and ID_ARTICLE = a.ID_ARTICLE) as qte
from article a
where (select sum(QUANTITE) from ventes where ANNEE = 2016 and ID_ARTICLE = a.ID_ARTICLE)
        >=
      (select sum(QUANTITE)as q from ventes where ANNEE = 2016 group by ID_ARTICLE order by q desc limit 1) * 0.85
order by qte desc;

--  LES BESOINS DE MISE A JOUR
--  32. Appliquer une augmentation de tarif de 10% pour toutes les bières ‘Trappistes’ de couleur ‘Blonde’ (Résultat attendu : 22 lignes modifiées)
UPDATE article a INNER JOIN couleur c ON a.ID_Couleur = c.ID_Couleur INNER JOIN type t ON a.ID_TYPE = t.ID_TYPE SET a.PRIX_ACHAT = (SELECT a.PRIX_ACHAT)*1.10 WHERE c.NOM_COULEUR = "Blonde" AND t.NOM_TYPE = "Trappiste";
-- OU
UPDATE article SET PRIX_ACHAT = PRIX_ACHAT * 1.1 WHERE ID_TYPE = (SELECT ID_TYPE FROM type WHERE NOM_TYPE = "Trappiste") and id_couleur = (SELECT ID_Couleur FROM couleur WHERE NOM_COULEUR = "Blonde");
--  33. Mettre à jour le degré d’alcool des toutes les bières n’ayant pas cette information.
--  On y mettra le degré d’alcool de la moins forte des bières du même type et de même couleur. (6 lignes modifiées ou 28)
UPDATE article as a1 SET a1.TITRAGE = (SELECT MIN(a2.TITRAGE) FROM article as a2 WHERE a2.TITRAGE is NOT NULL AND a1.ID_TYPE = a2.ID_TYPE and a1.ID_Couleur = a2.ID_Couleur) WHERE a1.TITRAGE is NULL;
-- VERSION compliqué qui prend en compte couleur et type séparé :
UPDATE article a SET TITRAGE = 
IF((SELECT MIN(TITRAGE) FROM article WHERE a.ID_Couleur = ID_Couleur AND a.ID_TYPE = ID_TYPE) IS NOT NULL,
  	(SELECT MIN(TITRAGE) FROM article WHERE a.ID_Couleur = ID_Couleur AND a.ID_TYPE = ID_TYPE),
  IF((SELECT MIN(TITRAGE) FROM article WHERE a.ID_TYPE = ID_TYPE) IS NOT NULL,
    (SELECT MIN(TITRAGE) FROM article WHERE a.ID_TYPE = ID_TYPE),
    IF((SELECT MIN(TITRAGE) FROM article WHERE a.ID_Couleur = ID_Couleur) IS NOT NULL,
      (SELECT MIN(TITRAGE) FROM article WHERE a.ID_Couleur = ID_Couleur),
      (SELECT MIN(TITRAGE) FROM article)))) 
WHERE TITRAGE IS NULL;
--  34. Suppression des bières qui ne sont pas des bières ! (type ‘Bière Aromatisée’) (262 lignes supprimées)
DELETE FROM article WHERE ID_TYPE = (SELECT ID_TYPE FROM type WHERE NOM_TYPE = "Bière Aromatisée")
--  35. Supprimer les tickets qui n’ont pas de ventes.(3 lignes supprimées)
DELETE
FROM ticket
WHERE concat(ANNEE, NUMERO_TICKET) NOT IN
    (SELECT concat(ANNEE, NUMERO_TICKET) FROM ventes);