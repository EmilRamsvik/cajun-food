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
- [x] Steg 19: Forbedret mobil navigasjon
- [x] Steg 20: Kode-opprydding og strukturforbedringer

---

## Steg 20: Kode-opprydding og strukturforbedringer

### Mål
- Forbedre kodestruktur og vedlikeholdbarhet
- Fjerne ubrukt kode og avhengigheter
- Rette opp inkonsistenser i filnavn

### Delsteg

#### 20.1: Ekstraher SVG-scener til separate komponenter
- Splitt IllustrationPlaceholder.tsx (544 linjer) til 9 separate scene-komponenter
- Opprett `src/components/illustrations/` mappe
- Hver scene blir ~50-80 linjer, mye enklere å vedlikeholde

#### 20.2: Fjern ubrukt cn() utility
- Slett `src/lib/utils.ts` som eksporterer en cn() wrapper som aldri brukes
- Fjern clsx avhengighet hvis den ikke lenger trengs

#### 20.3: Fiks bilde-filnavn inkonsistens
- Gi nytt navn til `church-noir-style.jpeg.jpeg` → `church-noir-style.jpeg`
- Oppdater referansen i useRandomImages.ts

#### 20.4: Lint og commit

---

## Steg 19: Forbedret mobil navigasjon

### Mål
- Gjøre det enklere for mobilbrukere å forstå hvordan de kan bytte mellom oppskrifter
- Legge til en tydelig "Neste oppskrift"-knapp nederst på siden
- Gjøre navigasjonspilene mer synlige på alle skjermstørrelser

### Delsteg

#### 19.1: Synlige navigasjonspiler på mobil
- Fjerne `hidden sm:block` fra pilene
- Øke opacity fra 20% til 50%
- Gjøre pilene større og tydeligere

#### 19.2: Legg til navigasjonsknapp nederst
- Legge til en "Neste oppskrift →"-knapp nederst på RecipeCard
- Knappen skal være tydelig og inviterende
- Vise tittelen på neste oppskrift i knappen

#### 19.3: Lint og commit

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

## FASE 2: FUN & ENGAGEMENT FORBEDRINGER 🎉

### Steg 21: Spice Meter & Visuell Kryddernivå-indikator
**Mål**: Gi brukerne en visuell indikasjon på hvor sterk/krydret hver oppskrift er

#### Delsteg
- Legge til `spiceLevel` (1-5 chili peppers) i Recipe-typen
- Vurdere spicy-nivå for hver oppskrift (Gumbo = 4, Cajunpasta = 3, osv.)
- Opprette animert chili pepper-ikon-komponent
- Vise spice meter på toppen av hvert recipe card med animerte chilier
- Legg til hover-effekt som får chiliene til å "flamme"
- Tooltip som forklarer nivået på norsk

#### Teknisk
- SVG animated chili peppers
- CSS keyframe animations for "flaming" effect
- Tailwind for responsiv styling

---

### Steg 22: Oppskriftsfremdrift-tracker med Session Storage
**Mål**: La brukere se hvilke oppskrifter de har utforsket i denne sesjonen

#### Delsteg
- Opprette `useRecipeProgress` hook som tracker besøkte oppskrifter
- Lagre progress i sessionStorage
- Vise diskret progress bar på bunnen av skjermen (f.eks. "5/8 oppskrifter utforsket")
- Legg til checkmark-ikon på besøkte oppskrifter i navigation
- Feiring-animasjon når alle oppskrifter er besøkt ("Gratulerer! Du har utforsket alle oppskriftene!")
- Small confetti animation ved fullføring

#### Teknisk
- sessionStorage for persistence
- Custom hook for state management
- Canvas eller CSS-basert confetti-effekt

---

### Steg 23: Cajun-ordtak og "Did You Know?" fakta-kort
**Mål**: Legge til morsomme Cajun-uttrykk og matfakta mellom oppskrifter

#### Delsteg
- Opprette datasett med cajun-ordtak på norsk og engelsk:
  - "Laissez les bons temps rouler!" (La de gode tider rulle!)
  - "Lagniappe" (litt ekstra som gave)
  - "Making groceries" (handle mat)
  - "Where y'at?" (hvordan går det?)
- Legge til "Did You Know?" fakta om cajun-mat og Louisiana-kultur
- 10-15% sjanse for å vise trivia-kort mellom oppskrifter
- Animert slide-in effekt
- Swipe/klikk for å fortsette til neste oppskrift
- Illustrasjoner: alligator, crawfish, eller Louisiana-flagg

#### Teknisk
- Ny TriviaCar-komponent
- Random chance-generator for visning
- Louisiana-themed illustrasjoner (SVG)

---

### Steg 24: Animerte ingredienser & visuell "wow"-faktor
**Mål**: Legge til subtile, morsomme animasjoner som gir liv til siden

#### Delsteg
- Flytende krydderstøv-partikler i bakgrunnen (paprika, pepper)
- Hover-effekt på ingredienser som gjør dem "bounce"
- Steam/damp-animasjon som stiger fra bunnen av cards
- Page-turn animasjon når man bytter oppskrift (bok-effekt)
- Papir-rusle-lydeffekt (optional, med mute-knapp)
- Parallax-effekt på background images

#### Teknisk
- CSS animations og transforms
- Framer Motion for avanserte animasjoner
- Canvas for partikkel-effekter
- Web Audio API for lydeffekter (optional)

---

### Steg 25: Favoritter & bokmerke-system
**Mål**: La brukere markere favoritt-oppskrifter

#### Delsteg
- Legg til "Favoritt"-hjerte-knapp øverst på hvert kort
- Lagre favoritter i localStorage (persistent)
- Animasjon når hjerte klikkes (beat/pulse effekt)
- Vise "Dine favoritter" lenke på landingssiden
- Egen side som viser kun favoritt-oppskrifter
- Mulighet til å fjerne favoritter
- Badge-count på landingsside-knappen ("3 favoritter")

#### Teknisk
- localStorage for persistence
- Favoritter context/state management
- Hjerte SVG med fill animation

---

### Steg 26: Handlelistegenenerator
**Mål**: La brukere generere en handlelist basert på valgte oppskrifter

#### Delsteg
- "Legg til i handleliste"-knapp på hvert recipe card
- Modal/side-panel som viser valgte oppskrifter
- Intelligent ingrediens-kombinering (f.eks. 2 løk + 1 løk = 3 løk totalt)
- Kategori-gruppering (grønnsaker, kjøtt, krydder, etc.)
- Eksporter handleliste:
  - Copy til clipboard
  - Print-vennlig visning
  - SMS/email (optional)
- Checkbox for å huke av ingredienser under shopping

#### Teknisk
- ShoppingList context for state
- Modal-komponent
- Ingrediens-parsing og aggregering-logikk
- Print CSS styling

---

### Steg 27: Recipe card "shuffle"-animasjon på landingsside
**Mål**: Gjøre landingssiden mer dynamisk og inngitende

#### Delsteg
- Vise 3-4 recipe cards som "floater" i bakgrunnen på landingssiden
- Cards roterer sakte i 3D (parallax/perspective)
- Subtle shadow og depth-effekt
- Cards "shuffler" når man hovrer over "Gi meg en oppskrift!"-knappen
- Smooth fade-in animation ved page load
- Cards har miniature bilder og titler (preview)

#### Teknisk
- CSS 3D transforms
- Framer Motion for orchestrated animations
- Stagger effect for card entries

---

### Steg 28: Mørk modus for kvelds-matlaging
**Mål**: Øyevennlig mørk versjon for bruk om kvelden

#### Delsteg
- Toggle-knapp øverst til høyre (sol/måne-ikon)
- Definere dark mode fargepalett:
  - Mørk pergament: `#2c2416`
  - Varm cream: `#e8d4a8`
  - Dempet sepia: `#a68456`
- Lagre brukerpreferanse i localStorage
- Smooth transition mellom modes (0.3s)
- Opprettholde Louisiana-estetikken i dark mode
- Justere bilde-opacity for bedre kontrast

#### Teknisk
- CSS variables for theming
- localStorage for persistence
- Tailwind dark: variants
- Prefers-color-scheme media query support

---

### Steg 29: Sosial deling & "Recipe of the Day"
**Mål**: Gjøre det enkelt å dele oppskrifter og oppmuntre til daglig besøk

#### Delsteg
- "Del oppskrift"-knapp med native share API
- Generere vakre share images (Open Graph)
- QR-kode modal for enkel mobil-deling
- "Recipe of the Day" badge på én tilfeldig oppskrift
- Roterende "Recipe of the Day" (ny hver dag basert på dato)
- Special highlight/border på dagens oppskrift
- Meta tags for rik preview i sosiale medier

#### Teknisk
- Navigator.share API
- QR code generator library
- Date-based seeding for "recipe of the day"
- Meta tags i head

---

### Steg 30: Interaktiv koketimer med steg-for-steg modus
**Mål**: Hjelpe brukere mens de faktisk lager maten

#### Delsteg
- "Start cooking"-knapp som aktiverer cooking mode
- Full-screen step-by-step visning av instruksjoner
- Timer-funksjonalitet for steg som krever det
- Store, lett lesbare fonter (hands-free reading)
- "Forrige/Neste steg"-navigasjon
- Voice commands (optional, advanced)
- Progress bar for hvor langt man er i oppskriften
- Keep screen awake (wakeLock API)

#### Teknisk
- Full-screen modal/mode
- Timer hooks og state management
- wakeLock API
- Large touch targets for smuss-vennlig interaksjon

---

### Steg 31: Animated mascot - "Boudreaux the Crawfish"
**Mål**: Gi nettsiden en personlighet med en morsom maskot

#### Delsteg
- Lage en animert cartoon crawfish karakter
- Mascot "peeker" inn fra siden av skjermen random ganger
- Bobler med tips eller morsome kommentarer på norsk
- Crawfish reagerer på brukerinteraksjon (klikk, hover)
- Forskjellige animasjoner:
  - Vinke hei
  - Holde opp en chili pepper
  - Danse når alle oppskrifter er besøkt
  - Spise (om øm motion)
- Easter egg: Klikk på crawfish 5 ganger for special animation

#### Teknisk
- SVG animasjoner eller Lottie
- Random appearance intervals
- Click counter for easter egg
- CSS transforms og keyframes

---

### Steg 32: Ingrediens-substitusjon-tooltip
**Mål**: Hjelpe brukere som mangler spesifikke ingredienser

#### Delsteg
- Legg til question-mark ikon ved siden av utvalgte ingredienser
- Hover/klikk viser substitusjon-forslag:
  - "Cayennepepper → Chiliflak eller Sriracha"
  - "Fløte → Crème fraiche eller kokosmjølk (vegansk)"
  - "Scampi → Kylling eller grønnsaker"
- Inkluder vegetarianske/veganske alternativer
- Norsk språk, enkel formatering
- Subtle fade-in animasjon

#### Teknisk
- Tooltip-komponent (Radix UI eller custom)
- Substitution data-structure
- Conditional rendering basert på ingredient

---

### Steg 33: Background ambiance - Louisiana sounds (optional)
**Mål**: Skape atmosfære med subtile lyder fra Louisiana

#### Delsteg
- Toggle-knapp for å aktivere lyder
- Subtil ambient background audio:
  - Zydeco/Cajun musikk (royalty-free)
  - Bayou-lyder (vann, fugler, cikader)
  - Restaurant-atmosfære (subtle)
- Veldig lav volume (15-20%)
- Fade in/out ved toggle
- Pause automatisk hvis brukeren bytter tab
- Respektere browser autoplay policies

#### Teknisk
- Web Audio API
- Volume controls
- Royalty-free audio sources
- Page Visibility API for auto-pause

---

### Steg 34: Print-vennlig oppskriftskort
**Mål**: La brukere skrive ut vakre oppskriftskort

#### Delsteg
- "Print"-knapp på hvert recipe card
- Print CSS som formaterer for A4/Letter
- Fjern navigasjon og UI-elementer ved print
- Beholde Louisiana-aesthetikk
- Include QR-code til oppskrift-URL på print
- Optimalisert typografi for lesbarhet
- Checkbox ved siden av ingredienser for print-out

#### Teknisk
- @media print CSS
- window.print() API
- QR code generator
- Print-optimized layout

---

### Steg 35: Recipe search & filter-system
**Mål**: Hjelpe brukere å finne ønsket oppskrift raskt

#### Delsteg
- Søkebar på landingssiden
- Filter etter:
  - Kategori (base, main, side)
  - Spice level (1-5 chilier)
  - Ingredienser (search: "kylling")
  - Koketid (quick/medium/long)
- Real-time søkeresultater
- Animert filter-panel (slide-down)
- "Clear filters"-knapp
- Responsive design for mobile

#### Teknisk
- Search state management
- Filter logic på client side
- Debounced search input
- Animated transitions

---

### Steg 36: Easter eggs & hidden gems
**Mål**: Belønne nysgjerrige brukere med morsomme overraskelser

#### Delsteg
- Konami-kode aktiverer special mode (opp, opp, ned, ned, venstre, høyre, venstre, høyre)
- Klikke på spesifikke elementer i bestemt rekkefølge åpner hidden recipe
- Secret "Cajun Slang Dictionary" side
- Hidden animation når man skriver "gumbo" i søket
- Recipe card flips 180° om man holder shift og klikker
- Crawfish mascot dance party mode

#### Teknisk
- Keyboard event listeners for konami code
- Click sequence tracking
- Hidden content/modes
- Fun animations

---

## Prioriterte steg for maksimal moro

### 🔥 HIGH PRIORITY (Max impact, moderate effort)
1. **Steg 21**: Spice Meter (visuelt attraktivt, nyttig)
2. **Steg 22**: Progress tracker (gamification, engagement)
3. **Steg 24**: Animerte ingredienser (wow-factor)
4. **Steg 25**: Favoritter (practical + engagement)
5. **Steg 27**: Landing page shuffle animation (first impression)

### ⭐ MEDIUM PRIORITY (Great features, more effort)
6. **Steg 23**: Cajun trivia facts (content + fun)
7. **Steg 26**: Handleliste-generator (super practical)
8. **Steg 28**: Dark mode (accessibility + aesthetics)
9. **Steg 32**: Ingrediens-substitusjon (helpful)

### 🎨 NICE TO HAVE (Polish & delight)
10. **Steg 31**: Crawfish mascot (personality)
11. **Steg 29**: Social sharing (growth)
12. **Steg 30**: Cooking timer mode (advanced functionality)
13. **Steg 34**: Print-friendly (practical)
14. **Steg 35**: Search/filter (scalability)
15. **Steg 36**: Easter eggs (delight)
16. **Steg 33**: Ambient sounds (optional, atmosphere)

---

## Neste steg
Implementere Steg 21: Spice Meter & Visuell Kryddernivå-indikator
