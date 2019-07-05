# Projekt aplkiacji biznes-plan

## Opis projektu

-Projekt ma celu stworzenie aplikacji, odpowiedzialnej za tworzenie biznes-planów.
-Projekt zakłada, użytkownika logującego się na konto.
-Użytkownik loguje się, wybiera poszczególne kafelki zależnie od wyboru (Farmer,Enterpriser etc)
-W efekcie otrzymuje biznes plan.
-Projekt ukierunkowany jest do micro i mid przedsiębiorców.

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `npm install`.

Teraz możesz zacząć pracę, korzystając z przygotowanych zadania `npm run watch`.

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderze `src/`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderu `src` buduje project w folderze `dist`
- `watch`: odpala `browser-sync`, obserwuje zmiany w folderze `src` i przebudowuje projekt
- `code-quality`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu i sprawdza błędy w JS.

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostanie uruchomiony skrypt `code-quality`
dla plików, które zostały wybrane do za-commit'owania.

## Konwencje i dobre praktyki

1. Podział na komponenty plików scss, html, js

## Działanie projektu

# ETAP 1 LOGOWANIA REJESTRACJI

1. Sekcja Topbar, klasa 'fa-user' odpowiedzialna za logowania, klasa 'fa-lock' odpowiedzialna za rejestracje. linia 23 i 29
2. Kliknięcie w login/register, powoduje wyskoczenie modalu, do logowania/rejestracji potrzebne mail + hasło.
3. Kliknięcie button Submit tworzy i zapisuje użytkownika
4. Userem jest mail użytkownika

# ETAP 2 KORZYSTANIA Z APKI
1. Rozwijamy pierwszą listę, klasa 'ddProducts'. Element Selection linia 65
2. Roziwjamy drugą listę, wybieramy sposób rozliczania.
3. Pojawiają sie kafelki.
4. Wybieramy nas interesujące i klikamy submit

# ETAP 3 KORZYSTANIA Z APKI
1. Pojawia się Score z przygotowanądokumentacją (połączony efekt kafelków)
2. Aby go otrzymać i pobrać należy kliknąć w koszyk, element a clasa 'cart-icon'. Linia 50
3. Po kliknięciu pobiera się dokument.
# 00. Links
Own app about creating buisness-plan.

repo --> https://github.com/MichalAW/00.Business-plan.git

io-site ---> https://michalaw.github.io/
