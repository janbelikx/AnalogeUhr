// Funktion aktualisiert die Uhrzeiger auf die aktuelle Zeit
function updateClock() {

  // aktuelle Zeit holen
  const now = new Date();
  const seconds = now.getSeconds(); 
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Winkel für die Zeiger berechnen
  // 6° pro Sekunde, 6° pro Minute, 30° pro Stunde + 0.5° pro Minute
  const secDeg = seconds * 6;
  const minDeg = minutes * 6;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  // Zeiger-Elemente aus dem HTML auswählen
  const sec = document.querySelector('.second-hand');
  const min = document.querySelector('.min-hand');
  const hour = document.querySelector('.hour-hand');

  // Zeiger drehen
  sec.style.transform  = "translateX(-50%) rotate(" + secDeg + "deg)";
  min.style.transform  = "translateX(-50%) rotate(" + minDeg + "deg)";
  hour.style.transform = "translateX(-50%) rotate(" + hourDeg + "deg)";
}

// Funktion jede Sekunde ausführen
setInterval(updateClock, 1000);
updateClock();