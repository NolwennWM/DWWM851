<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;J'aime la &quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2defaut="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" nbDecimales="8" totalAffichages="1000" totalBoucles="5000000" epaisseurLigne="2" maxBoucle="500000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#mot" algoitem="mot EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#mot2" algoitem="mot2 EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#mot#'Ananas'#pasliste" algoitem="mot PREND_LA_VALEUR 'Ananas'"/>
        <item code="3#mot#1#pasliste" algoitem="AFFICHER mot"/>
        <item code="2#mot2#pasliste" algoitem="LIRE mot2"/>
        <item code="4#J'aime la #0" algoitem="AFFICHER &quot;J'aime la &quot;"/>
        <item code="3#mot2#0#pasliste" algoitem="AFFICHER mot2"/>
        <item code="4# à #0" algoitem="AFFICHER &quot; à &quot;"/>
        <item code="3#mot#1#pasliste" algoitem="AFFICHER mot"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
