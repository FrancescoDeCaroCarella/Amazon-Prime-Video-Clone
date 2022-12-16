**Nome progetto**: Pop Prime Movie
**Periodo svolgimento**: 12/12/2022 - 16/12/2022

**Professionista**: De Caro Carella Francesco

**Descrizione**: il cliente ha richiesto di realizzare una piccola web app, con un design molto simile ad Amazon Prime Video, nel quale mostrare i film più popolari della storia del cinema.

**Target**: utenti appassionati di cinema

**Linee guida**: riferimento a Movie DB API: https://developers.themoviedb.org/3/getting-started/search-and-query-for-details

**Strumenti**: utilizza JSON Formatter per Chrome qualora non l’abbia installato in modo da vedere il JSON formattato direttamente da Chrome.

**Caratteristiche**
- [x] Creare una web app simile a **_Prime Video_** ma dal design rinnovato e accattivante, adatto ad una fascia di età compresa tra i 25 e i 45 anni.
- [x] Mostrare **_esclusivamente i film_** e non i telefilm.
- [x] Creare una **_separazione di genere_** mettendo in risalto queste tre categorie: commedia, thriller, horror. Poi vada per il resto delle categorie.
- [x] Creare una **_sezione separata per i Top Rated_** raggiungibile da una voce di menu. (Suggerimento: controlla che esiste un endpoint di MovieDB API che ci permetta di avere i top rated).
- [x] Creare per ogni card “Movie” **_una modal_** con i dettagli del film che si apre al click sulla card stessa.
- [x] Stampare **_il vote average per ogni movie_** attraverso la stampa di “n” stelle (Esempio: https://codepen.io/FredGenkin/pen/eaXYGV).

**Extra features by Fdcc**
- [x] Ripulire codice CSS + JS.
- [x] Creare modale con info aggiungtive al passagio del mouse sulle card.
- [ ] Perfezionare somiglianza col servizio Prime Video.
- [ ] Creare una search bar.
- [x] Creare hero film del momento.
- [ ] Creare funzione salvataggio Preferiti.

**Considerazioni importanti**: bisogna trovare una strategia per capire quali sono i film più popolari sfruttando le API che abbiamo a disposizione. Ci sarà sicuramente qualche proprietà nell’oggetto movie che ci può far comprendere che un film è popolare oppure no. O ancora potrebbe esistere un qualche endpoint che le API di MovieDB ci mettono a disposizione.