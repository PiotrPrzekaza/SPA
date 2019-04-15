import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest REST Api?",
        author: "Patryk Jar",
        text: "REST (ang. Representational State Transfer) jest wzorcem narzucającym dobre praktyki tworzenia architektury aplikacji rozproszonych. RESTful Webservices (inaczej RESTful web API) jest usługą sieciową zaimplementowaną na bazie protokołu HTTP i głównych zasad wzorca REST. W tym wpisie postaram się pokazać (bardzo) podstawowe założenia.Ważnym założeniem REST jest istnienie zasobów (ang. resources) jako źródeł danych a także żądana akcja. Ale może po kolei…",
    },
    {
        id: 2,
        title: "Co to Promise?",
        author: "MDN",
        text: "Promise jest proxy dla wartości niekoniecznie znanej, gdy jest tworzona. Pozwala na kojarzenie uchwytu z ewentualnym sukcesem lub porażką asynchroniczne akcji. Pozwala to metodom asynchronicznym zwracać wartości takie jak metody synchroniczne, zamiast natychmiastowego zwracania wartości końcowej, metoda asynchroniczna zwraca obietnicę dostarczenia wartości w pewnym momencie w przyszłości.Promise jest dostpny w jednym z tych stanów: -pending: stan inicjacji, ani wypełnione, ani odrzucone -fulfilled: operacja zakończona sukcesem -rejected: operacja zakończona porażką .Obowiązująca objetnica może być zakończona z wartością lub odrzucona z powodem(błędem).Kiedy dzieje się jedna z tych opcji, wywoływane są zakolejkowane, powiązane za pomocą metody then procedury. (Jeśli obietnica została już spełniona lub odrzucona, gdy dołączony jest odpowiedni moduł obsługi, zostanie on wywołany, więc nie ma potrzeby wyścigu między zakończeniem operacji asynchronicznej a jej obsługą)."
    },
    {
        id: 3,
        title: "Testy jednostkowe",
        author: "Piotr Przekaza",
        text: "Testy jednostkowe to metoda testowania wytwarzanego oprogramowania, polegająca na pisaniu metod testujących określone, małe fragmenty naszego programu (jednostki). Jednostkami mogą być np. metody lub klasy. Kończąc studia informatyczne lub zaczynając przygodę z programowaniem ciężko dostrzec zalety pisania testów jednostkowych. Wszystko wydaje się niby proste, jednak nasuwa się pytanie: po co testować coś, co sami piszemy? Brzmi to paradoksalnie jak np. sprawdzanie poprawności zadania matematycznego rozwiązanego przez nas samych.Dodatkowym zniechęceniem do pisania testów mogą okazać się cechy testów jednostkowych takie jak: żadnego oprogramowania nie jesteśmy przetestować całkowicie, nigdy nie mamy pewności znalezienia wszystkich błędów, nawet gdyby pokrycie testami wynosiło 100% (co jest nierealne), testy wydłużają czas wytwarzania oprogramowania praktycznie nawet o połowę.Po tych wszystkich rozważaniach nasuwa się pytanie: po co?",
    }

]

const HomePage = (props) => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))

    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;