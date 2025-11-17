# AnalogeUhr

Dieses Projekt ist eine einfache, responsive analoge Uhr, die vollständig mit HTML, CSS und JavaScript umgesetzt wurde.
Die Uhr zeigt die aktuelle Zeit an, inklusive Stunden-, Minuten- und Sekundenzeiger.

Drei Zeiger: Stunden, Minuten, Sekunden
Sekunde bewegt sich live und korrekt im 6-Grad-Takt
Uhr ist responsiv und passt sich der Bildschirmgrösse an
Code ist kommentiert

CSS

Die Uhr besteht aus einem runden Container (.clock)
Zeiger sind als Elemente mit transform: rotate() umgesetzt
Stundenstriche werden per repeating-conic-gradient erzeugt
Die Uhr bleibt dank vmin und aspect-ratio responsiv

JavaScript

Jede Sekunde wird die aktuelle Uhrzeit gelesen
Es werden die passenden Rotationswinkel berechnet:
Sekunden: seconds * 6
Minuten: (minutes + seconds / 60) * 6
Stunden: ((hours % 12) + minutes / 60) * 30
Die Zeiger erhalten per style.transform den passenden Winkel
