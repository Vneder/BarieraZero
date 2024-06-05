# Bariera Zero

### Live: https://vneder.github.io/BarieraZero/

## Technologie

- HTML
- CSS
- JavaScript

Dodatkowe zasoby i narzędzia:
- Widget dostępności:
  - Sienna Accessibility Widget - https://accessibility-widget.pages.dev/
- Swiper:
  - Swiper.js - https://swiperjs.com/
- Ikonki społecznościowe:
  - Font Awesome - https://fontawesome.com/
- Skrypt do czytania tekstu:
  - ResponsiveVoice - https://responsivevoice.org/
- Hamburger:
  - Hamburgers - https://github.com/jonsuh/hamburgers/tree/master

## Omówienie

### Wprowadzenie

"Bariera Zero" jest stroną internetową stworzoną w ramach projektu na studia z projektowania integracyjnego. Celem strony jest zapewnienie pełnej dostępności i użyteczności dla osób z niepełnosprawnościami. Strona zawiera szereg funkcjonalności mających na celu ułatwienie korzystania z niej przez osoby z różnymi rodzajami niepełnosprawności.

### Główne funkcjonalności

#### Moduł dostępności
Strona zawiera moduł dostępności, który umożliwia użytkownikom dostosowanie wyglądu strony do ich potrzeb. W ramach tego modułu dostępne są opcje takie jak:
- **Zmiana rozmiaru czcionki**: Użytkownicy mogą zwiększać lub zmniejszać rozmiar tekstu, aby ułatwić jego czytanie.
- **Podświetlenie tytułów**: Użytkownicy mogą włączyć opcję podświetlenia tytułów, co ułatwia nawigację po stronie i szybkie znalezienie najważniejszych sekcji.
- **Podświetlenie linków**: Opcja podświetlenia linków sprawia, że wszystkie linki na stronie są bardziej widoczne, co ułatwia nawigację dla osób z ograniczonym widzeniem kolorów lub kontrastu.
- **Czcionka dla dyslektyków**: Strona oferuje możliwość zmiany czcionki na taką, która jest bardziej przyjazna dla osób z dysleksją. Czcionka ta ma specjalne kształty liter, które redukują zamieszanie podczas czytania.
- **Zmiana odstępu między literami**: Użytkownicy mogą dostosować odstępy między literami, co ułatwia czytanie tekstu osobom z różnymi rodzajami dysleksji.
- **Zmiana odstępu między wierszami**: Opcja ta pozwala na zwiększenie odstępów między wierszami tekstu, co poprawia czytelność i ułatwia śledzenie tekstu osobom z problemami z koncentracją.
- **Pogrubienie czcionki**: Użytkownicy mogą pogrubić tekst na stronie, co zwiększa jego czytelność, zwłaszcza dla osób z wadami wzroku.
- **Zmiana kolorystyki strony**: Strona oferuje różne schematy kolorystyczne, które użytkownicy mogą wybierać w zależności od swoich potrzeb. Dostępne są m.in. tryby o wysokim kontraście oraz tryby dla osób z różnymi typami daltonizmu.
- **Pomocnik czytania**: Pomocnik czytania to narzędzie, które pozwala użytkownikom śledzić tekst za pomocą linijki czytelniczej. Ułatwia to koncentrację i zapobiega gubieniu się w tekście.
- **Wstrzymanie animacji**: Użytkownicy mogą wstrzymać wszelkie animacje na stronie, co jest pomocne dla osób z nadwrażliwością na ruch lub z epilepsją.
- **Duży kursor**: Opcja ta pozwala na zwiększenie rozmiaru kursora, co ułatwia nawigację po stronie osobom z ograniczoną sprawnością ruchową lub wadami wzroku.

#### Moduł czytania tekstu
- **Czytanie tekstu**: Wystarczy zaznaczyć tekst na stronie, aby wbudowany system odczytał go na głos.

#### Moduł opisu dźwiękowego zdjęć
- **Opisy dźwiękowe zdjęć**: Każde zdjęcie na stronie jest opatrzone ikoną głośnika. Po kliknięciu w ikonę, użytkownik usłyszy opis zdjęcia.

#### Kolorystyka
- Strona została zaprojektowana z uwzględnieniem zasad dostępności kolorystycznej. Zastosowane kolory mają wysoki kontrast, co ułatwia czytanie tekstu osobom z wadami wzroku.

#### Responsywność
- Strona "Bariera Zero" jest w pełni responsywna, co oznacza, że automatycznie dostosowuje się do rozmiaru ekranu urządzenia, na którym jest wyświetlana.
- Dla mniejszych ekranów, takich jak smartfony, menu nawigacyjne staje się rozwijanym burgerem, co zapewnia łatwy dostęp do wszystkich sekcji strony.

## Struktura strony

```plaintext
index.html
├── o-nas.html
├── poradnik-komunikacyjny.html
└── ├── koncert.html
    ├── piknik.html
    └── talent-days.html
```

### Opis drzewka strony

- **index**: Główna strona, z której użytkownicy mogą nawigować do innych sekcji strony.
    Linki na tej stronie prowadzą do:
    - **o nas**: Podstrona zawierająca informacje o twórcach projektu, ich misji oraz celu strony.
    - **poradnik komunikacyjny**: Podstrona z praktycznymi poradami dotyczącymi komunikacji z osobami z niepełnosprawnościami.
      - **koncert**: Podstrona z informacjami o wydarzeniu koncert.
      - **piknik**: Podstrona z informacjami o wydarzeniu piknik.
      - **talent days**: Podstrona z informacjami o wydarzeniu talent days.

### Strona główna (index)
- Strona główna zawiera podstawowe informacje o projekcie "Bariera Zero" oraz linki do podstron.
### O nas
- Podstrona "O nas" zawiera informacje o twórcach projektu, ich misji oraz celu, jaki przyświecał stworzeniu strony "Bariera Zero".
### Poradnik komunikacyjny
- Na tej podstronie użytkownicy znajdą praktyczne porady dotyczące komunikacji z osobami z różnymi rodzajami niepełnosprawności.

### Piknik: 
- Informacje o pikniku organizowanym przez twórców strony, w tym data, miejsce i plan wydarzenia.
### Talent Days: 
- Szczegóły dotyczące wydarzenia.
### Koncert: 
- Informacje o koncercie, w tym lista wykonawców, godziny występów i lokalizacja.

## Testowanie i walidacja
- Strona była testowana pod kątem zgodności z wytycznymi WCAG (Web Content Accessibility Guidelines) w wersji 2.0. Testy były przeprowadzane przy użyciu narzędzi takich jak Lighthouse i WAVE (Web Accessibility Evaluation Tool).

# Autorzy
- Marcel ( https://github.com/malinka32 )
- Jakub ( https://github.com/Walus0105 )
- Łukasz ( https://github.com/Vneder )
