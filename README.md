# Projekt aplkiacji biznes-plan

## Opis projektu

-Projekt ma celu stworzenie aplikacji, odpowiedzialnej za tworzenie biznes-planów.
-Użytkownik, wybiera poszczególne kafelki zależnie od wyboru (BUILD, INSTALLATION etc)
-Najeżdża na dany obrazek i klika podgląd lub dodanie do koszyka.
-Każda sekcja produktów ma swoją podstronę
-Na podstronie Cart, wypełnia wszystkie luki i dokonuje zakupu
-W efekcie otrzymuje biznes plan na maila
-Projekt ukierunkowany jest do micro i mid przedsiębiorców.

## Projekt odpalamy przez link z heroku

heroku --> https://businessappmichal.herokuapp.com/

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `npm install`.

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderze `src/`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderu `src` buduje project w folderze `dist`
- `start`: odpala `browser-sync`, obserwuje zmiany w folderze `src` i przebudowuje projekt
- `code-quality`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu i sprawdza błędy w JS.

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostanie uruchomiony skrypt `code-quality`
dla plików, które zostały wybrane do za-commit'owania.

## Konwencje i dobre praktyki

1. Podział na komponenty plików scss,sass, komponentów react, images.

## Działanie projektu

# TOPBAR

Sekcja Topbar:
1. Home, FAQ, ABOUT ma charakter wizualny
2. button o klasie "button-welcome" o treści 'TELL ME MORE' otwiera modal z instrukcją obsługi dla użytkownika

# MIDBAR

Sekcja MidBar:
1. Istnieje numer telefonu i logo
2. Obrazek z koszykiem służy do przejścia na podstronę Cart, odpowiada za to komponent MidBar, który rejestruje kliknięcia w "ADD TO CART" w komponencie Main. linia 63.
3. Komponent MidBar ma dwie metody.
# Metoda refreshProductCart() służy do odświeżenia localstorage przy każdej zmianie.
# Metoda addProductToCart() służy do dodawania produktów z komponentu Main

# PANEL-BAR
Sekcja Panel-Bar znajduje się w klasie content-container:
1. Wybieramy poszczególne produkty z Sekcji BUILD, INSTALLATION, FURNISHING, MACHINE lub przez kropki "dots" w komponencie Panel-Bar.
2. Komponent Sorter odpowiada za sortowanie produktów.
# Metoda handleChange() aktualizuje reactowy stan po każdej zmianie po rozwinięciu listy sorter.
3. PanelBar jest uruchamiany w komponencie MainNawigation.js

# MAIN
1. Główny komponent produktowy składający się rutingów, donoszących się do poszczególnych komponentów w katalogu Products.
2. Katalog Products posiada cztery komponenty (produkty) o tym samych stylach, które są zadeklarowane w Main.scss
3. Każdy z komponentów produktowych ma:
# Metodę onClickAddToCart() odpowiadającą za dodanie produktu do koszyka
# Routing link do przekierowania do kompotentu "Product-Details". Linia 36, button "QUICK VIEW"
4. Po najechaniu kursorem na daną kartę pojawiają się dwa buttony. "QUICK VIEW" i 'ADD TO CART'.
5. W komponencie Main znajdują się routingi przekierowujące do poszczególnych podstron
6. Komponent wykorzystuje metodą odpowiadającą za sortowanie produktów.
# Metoda getSortedProducts() pozwala na sortowanie produktów po cenie od najniższej do najwyższej oraz vice versa, a także na sortowanie od A-Z i od Z-A.
# Metoda getSortedProducts() oraz addProductToCart jest wykorzystywana w każdym routingu.
7. W Main znajdują się wszystkie style produktów, zdjęcia oraz tablica z obiektami products.

# ProductDetails
1. W 69 linijka odpowiada za rozwinięcie dodatkowych infromacji dot. produktu.
2. Klikamy w okienko obok tekstu 'Show additional information'.
3. Button 'CLOSE' pojawia się na miejscu buttona 'QUICK VIEW' i zamyka podstronę.

# ShoppingCart
1. Odpowiada za wyświetlnie koszyka
# Metoda removeProductFromCart() usuwa całkowicie produkty z koszyka po kliknięciu ikonki kosza.
# Metoda addProductToCart() dodaje produkt dodatkowy w CART po kliknięciu "+".
# Metoda removeSingleProduct() usuwa pojedyńczy produkt z CART
# Metoda sumUpProductPrice() sumuje całkowtą cenę za wszystko w linijce 176
# Funkcja getBackButton() wraca do strony głównej wykorzystywana w linijce 133.
2. W 122 linicje jest modal otwierający okno podsumowujące zakup
# Metoda onClickBuy() jest wykorzystywana w linijce 230 i służy do finalizacji zakupu, odświeżenia podstrony CART.
# Metoda onChangeDiscount() jest wykorzystywana w linijce 206 i służy do obniżania 'TOTAL PRICE', kod 'ZXCVBNM' należy wpisać w okienku input.

# LINK DO REPOZYTORIUM

repo --> https://github.com/MichalAW/00.Business-plan.git
