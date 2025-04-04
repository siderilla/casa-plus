Struttura componenti:
1. homepage – mostra tutte le card dei libri
2. book-card – singola card del libro
3. book-detail – pagina con info dettagliate sul singolo libro

---------------------------------------

STEP 1: crea i componenti
ng generate component components/homepage
ng generate component components/book-card
ng generate component components/book-detail

---------------------------------------

STEP 2: aggiungi il routing
il routing serve a 'tracciare' una rotta per tutte le pagine presenti nella nostra web app, con un path e il componente relativo inseriti in un array Routes generato dalla libreria di angular

---------------------------------------

STEP 3: interface
è una descrizione del tipo di dati
non crea nessun oggetto, nessun dato, niente a runtime
serve solo a livello di scrittura del codice per dire: "questo oggetto deve avere questa struttura"

Se tu hai una variabile book, un'interfaccia ti dice:
✅ questo book ha un titolo
✅ ha un array di autori
✅ ha un'immagine
❌ non può avere proprietà strane tipo book.patateFritte — TypeScript ti avverte

L'interfaccia conviene usarla perché:
- Permette autocompletamento intelligente
	Quando scrivi book. → ti appaiono solo le proprietà valide
	➜ Risparmi tempo, eviti errori

- Tipo forte e controllato
	Se sbagli a scrivere 'authorss' invece di 'authors', Typescript ti blocca subito

- Più leggibilità del codice
	Se leggi 'Book' come tipo, capisci subito che sta rappresentando un libro

- Evita bug stupidi
	Ti avvisa se una proprità non esiste o è del tipo sbagliato (es. 'number' invece di 'string')

- Base perfetta per refactoring
	Se cambi qualcosa nella struttura dati, Typescript ti dirà dove devi aggiornare tutto

---------------------------------------

STEP 4: importare l'interface

STEP 5: BookDetailComponent
- recuperare l'id della URL
- trovare il libro corrispondente via BookService
- mostrare info dettagliate
- aggiungere un link per tornare alla homepage


tasks:
- routing del dettaglio
- inserire nuovo libro (titolo, descr, autore, immagine) nel
momento in cui schiaccio submit aggiungo il libro nell'array
- fare il giro per il localStorage


ripasso:
promise await async
arrow function
