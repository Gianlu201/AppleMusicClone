# Apple Music Clone

**Apple Music Clone** — replica grafica della pagina di ascolto di Apple Music, realizzata come progetto didattico per mettere in pratica conoscenze su **React + TypeScript + Vite**.  
L'interfaccia mostra una pagina di ascolto (player, lista brani/album, artwork) usando immagini degli album inserite in modo **statico** nella cartella `public/assets/images` e brani musicali recuperati dall'API Deezer di Strive.

---

## Descrizione
Questo progetto è un esercizio front-end: l'obiettivo è ricreare fedelmente (a livello grafico e di layout) la sezione di riproduzione di Apple Music — con player, copertine album, playlist e controlli. Non integra playback reale via streaming; i brani e le copertine sono **statici** e servono esclusivamente a scopo didattico per esercitarsi con React, TypeScript e il flusso dati lato client.

---

## Demo
Demo disponibile al seguente [link](https://apple-music-clone-nine.vercel.app/)!

---

## Caratteristiche principali
- Interfaccia (UI) responsive che ricrea la pagina *Now Playing* / *Listen* di Apple Music.
- Player statico con controlli base (play/pause, progress bar visiva, skip precedente/successivo).
- Griglia/lista di album e brani.
- Componenti React modulari (Player, AlbumCard, Sidebar, TrackList, Header).
- Uso di TypeScript per typing dei dati (Album, Track, PlayerState).
- Stili realizzati con CSS.
- Progetto pensato per essere semplice da estendere e usare come base per ulteriori esercitazioni.

---

## Tech stack
- React (Functional components + Hooks)  
- TypeScript  
- Vite 
- CSS
- Bootstrap
- Chiamate API

---

## Struttura del progetto
```
/public
  /assets
    /albums
      album-01.jpg
      album-02.jpg
    favicon.ico
/src
  /components
    Header.tsx
    Sidebar.tsx
    Player.tsx
    AlbumCard.tsx
    TrackList.tsx
  /pages
    Home.tsx
  /data
    albums.ts           // dati statici: lista album + tracce
  /styles
    globals.css
    player.css
  main.tsx
  App.tsx
vite.config.ts
tsconfig.json
package.json
README.md
```

---

## Come avviare il progetto (locale)

1. Clona la repo:
```bash
git clone https://github.com/Gianlu201/AppleMusicClone.git
cd AppleMusicClone
```

2. Installa le dipendenze:
```bash
npm install
# oppure
# yarn
```

3. Avvia il dev server:
```bash
npm run dev
# (o `yarn dev`)
```

4. Apri il browser su `http://localhost:5173` (o la porta indicata dal terminale).

Per build di produzione:
```bash
npm run build
npm run preview
```

---

## Tipi e interfaccia TypeScript
```ts
export interface Track {
  id: string;
  title: string;
  duration: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  cover: string;
  tracks: Track[];
}
```

---

## Crediti
Progetto sviluppato da **Gianlu201** come esercizio.  
