let h = prompt("Donne moi l'heure !"),
    m = prompt("Donne moi les minutes"),
    s = prompt("Donne moi les secondes");

if(++s==60)
{
    s=0;
    if(++m==60)
    {
        m=0;
        if(++h==24) h=0;
    }
}
// Version raccourci : bien que plus gourmande
// if(++s==60) s=0;
// if(++m==60) m=0;
// if(++h==24) h=0;
alert(`Dans une seconde il sera ${h}h${m}m${s}s.`);