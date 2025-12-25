# Cajun Oppskriftskort - Implementeringsplan

## Prosjektstatus
- [x] Steg 0: Analyse og planlegging
- [x] Steg 1: Prosjektoppsett med Next.js 14+
- [x] Steg 2: Grunnleggende prosjektstruktur og konfigurasjon
- [x] Steg 3: Oppskriftsdata (recipes.json)
- [x] Steg 4: Tailwind-tema og fargepalett
- [x] Steg 5: Grunnleggende layout og typografi
- [x] Steg 6: RecipeCard-komponent
- [x] Steg 7: Navigasjonssystem (swipe, piltaster, klikk)
- [x] Steg 8: Lenker til basisoppskrifter
- [x] Steg 9: Next-up panel/forhåndsvisning
- [x] Steg 10: Placeholder-illustrasjoner
- [x] Steg 11: Animasjoner og overganger
- [x] Steg 12: Responsivt design og finjustering
- [x] Steg 13: Static export-konfigurasjon for Vercel
- [x] Steg 14: Tilfeldig oppskriftsrekkefølge
- [x] Steg 15: Erstatte SVG-illustrasjoner med bilder
- [x] Steg 16: Ny landingsside med kryddermiks-introduksjon
- [x] Steg 17: Tilfeldige bilder uten kobling til oppskrifter
- [x] Steg 18: Forbedret oppskriftsstruktur med lenker og kategorier

---

## Steg 18: Forbedret oppskriftsstruktur med lenker og kategorier

### Mål
- Legge til eksterne lenker (videoer, artikler) til oppskrifter
- Gjøre det enklere å differensiere og kategorisere oppskrifter
- Forbedre typedefinisjonene for bedre vedlikehold

### Delsteg

#### 18.1: Oppdatere Recipe-typen
- Legge til `category` felt for å skille oppskriftstyper:
  - `base` - Basisoppskrifter (roux, holy trinity)
  - `main` - Hovedretter (gumbo, jambalaya, cajunpasta)
  - `side` - Sideretter (dirty rice, red beans and rice)
  - `event` - Spesielle anledninger (skalldyrfest)
- Legge til `externalLinks` felt for eksterne ressurser (videoer, artikler)
- Flytte video-lenken fra instructions til externalLinks

#### 18.2: Oppdatere recipes.ts med ny struktur
- Legge til kategori for hver oppskrift
- Flytte eksisterende video-lenke til externalLinks
- Legge til flere relevante lenker der det er aktuelt

#### 18.3: Lint og commit

---

## Detaljert stegbeskrivelse

### Steg 1: Prosjektoppsett med Next.js 14+
- Initialisere Next.js 14+ med App Router
- TypeScript i strict mode
- Tailwind CSS
- ESLint + Prettier
- Opprette `.gitignore`

### Steg 2: Grunnleggende prosjektstruktur
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── RecipeCard.tsx
│   ├── RecipeNavigation.tsx
│   ├── NextUpPanel.tsx
│   └── RecipeLink.tsx
├── data/
│   └── recipes.ts
├── hooks/
│   ├── useSwipe.ts
│   └── useKeyboardNavigation.ts
├── types/
│   └── recipe.ts
└── lib/
    └── utils.ts
public/
└── images/
    └── (placeholder-bilder)
```

### Steg 3: Oppskriftsdata
- Definere TypeScript-typer for oppskrifter
- Opprette oppskriftsdata med alle 9 oppskrifter
- Inkludere metadata: id, tittel, scene, illustrasjon, ingredienser, instruksjoner, lenker

### Steg 4: Tailwind-tema og fargepalett
Louisiana-farger:
- Pergamentgul: `#F5E6C8`
- Varm brun: `#8B7355`
- Grå-brun: `#6B5B4F`
- Mosegrønn: `#4A5240`
- Dyp sumpgrønn: `#2D3A2D`

Fonter:
- Playfair Display (titler)
- Libre Baskerville eller lignende (brødtekst)

### Steg 5: Grunnleggende layout
- App layout med Louisiana-bakgrunn
- Pergamenttekstur-bakgrunn (CSS gradient/pattern)
- Font-import via Google Fonts

### Steg 6: RecipeCard-komponent
- Kortdesign med pergamentbakgrunn
- Oppskrifttekst øverst til venstre
- Illustrasjonsområde nederst til høyre
- Responsive størrelser
- Fade-effekt på illustrasjon

### Steg 7: Navigasjonssystem
- `useSwipe` hook for touch-navigasjon
- `useKeyboardNavigation` hook for piltaster
- Klikk på kortkanter for navigasjon
- State management for aktiv oppskrift

### Steg 8: Lenker til basisoppskrifter
- Identifisere og markere basisoppskrift-referanser i tekst
- Klikkbare lenker som navigerer til riktig kort
- Visuell markering (understrek/annen farge)

### Steg 9: Next-up panel
- Diskret "Neste oppskrift"-seksjon
- Accordion-animasjon ved utfolding
- Thumbnail og tittel for neste kort

### Steg 10: Placeholder-illustrasjoner
- SVG eller gradient-baserte placeholder-bilder
- Louisiana-tema (silhuetter av cypress, moss, etc.)
- Fade-effekt mot pergamentbakgrunn

### Steg 11: Animasjoner
- Kortovergang (glir inn fra siden)
- Hover-effekter på lenker
- Accordion-animasjon
- Fade-in på illustrasjoner

### Steg 12: Responsivt design
- Mobil-først tilnærming
- Breakpoints for tablet og desktop
- Touch-vennlige interaksjoner
- Lesbar tekst på alle skjermstørrelser

### Steg 13: Static export
- Konfigurere `next.config.js` for static export
- Verifisere at alle funksjoner fungerer uten server
- Teste build og deployment

### Steg 14: Tilfeldig oppskriftsrekkefølge
- Implementere shufflet rekkefølge med sessionStorage for konsistens
- Navigasjon basert på tilfeldig rekkefølge, ikke fast sekvens
- Startsiden omdirigerer til tilfeldig oppskrift
- Brukere kan klikke på basisoppskrift-lenker for å hoppe direkte

### Steg 15: Erstatte SVG-illustrasjoner med bilder
6 bilder tilgjengelig i `public/images/`:

**Bildekartlegging til oppskrifter:**
| Bilde | Innhold | Oppskrift (tema) |
|-------|---------|------------------|
| `SCR-20251207-imnn.jpeg` | Dampbåt på Mississippi | Roux (`steamboat`) |
| `SCR-20251207-imqk.jpeg` | Gammel kirke i sumpen | Holy Trinity (`church`) |
| `SCR-20251207-imrn.jpeg` | Bayou med cypress og hytte | Cajunkrydder (`bayou`) |
| `SCR-20251207-iphe.jpeg` | Fisker med båt og krabbeteiner | Dirty Rice (`fisherman`) |
| `SCR-20251207-ipij.jpeg` | Bourbon Street om natten | Cajunpasta (`bourbon-street`) |
| `SCR-20251207-ipjf.jpeg` | Antebellum-herskapshus | Jambalaya (`antebellum`) |

**Implementeringssteg:**
1. Gi nytt navn til bildene for bedre lesbarhet:
   - `steamboat.jpeg`, `church.jpeg`, `bayou.jpeg`, `fisherman.jpeg`, `bourbon-street.jpeg`, `antebellum.jpeg`
2. Legg til `image`-felt i `Recipe`-typen (`src/types/recipe.ts`)
3. Oppdater oppskriftsdata med bildestier (`src/data/recipes.ts`)
4. Oppdater `IllustrationPlaceholder`-komponenten til å:
   - Bruke Next.js `Image`-komponent for optimalisering
   - Falle tilbake til SVG-placeholder hvis bilde ikke finnes
   - Beholde fade-effekten mot pergamentbakgrunnen
5. Oppskrifter uten bilder (Gumbo, Red Beans and Rice, Skalldyrfest) beholder SVG-placeholders

**Manglende bilder (3 oppskrifter):**
- Gumbo (`true-detective`) - beholder SVG
- Red Beans and Rice (`robicheaux`) - beholder SVG
- Skalldyrfest (`bayou-fest`) - beholder SVG

### Steg 16: Ny landingsside med kryddermiks-introduksjon
- Erstatte redirect-landingssiden med en introduksjonsside
- Vise oversikt over cajunkryddermiks og hvordan bruke den
- Stor, tydelig knapp: "Gi meg en oppskrift!"
- Knappen navigerer til en tilfeldig oppskrift
- Louisiana-inspirert design som matcher resten av siden

### Steg 17: Tilfeldige bilder uten kobling til oppskrifter
- Fjerne faste bilde-referanser fra oppskriftsdata
- Opprette utility for tilfeldig bilde-tildeling med sessionStorage
- Shufflet bilde-mapping som persisteres i sesjonen
- Ingen forutsigbar kobling mellom oppskrift og bilde

---

## Viktige avgjørelser (AVKLART)

### Illustrasjoner
- **Beslutning**: CSS/SVG-baserte placeholder-illustrasjoner i Louisiana-stil
- Hver scene får unike SVG-elementer (cypress-trær, Spanish moss, steamboat-silhuetter, etc.)
- Gradienter og teksturer for atmosfære
- Strukturert slik at ekte bilder enkelt kan erstatte placeholders senere

### Navigasjon og URL-routing
- **Beslutning**: Hver oppskrift har sin egen URL
- Ruter: `/cajunkrydder`, `/roux`, `/holy-trinity`, `/cajunpasta`, `/jambalaya`, `/gumbo`, `/dirty-rice`, `/red-beans-and-rice`, `/skalldyrfest`
- Forside (`/`) viser første oppskrift (Cajunkrydder)
- Swipe/piltaster/klikk navigerer mellom URL-er

---

## Neste steg
Implementere Steg 18: Forbedret oppskriftsstruktur med lenker og kategorier
