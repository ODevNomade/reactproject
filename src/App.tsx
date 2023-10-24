import Header from "./components/header";
import Footer from "./components/footer";
import Book from "./components/book";

const book = {
  title: 'The Little Prince',
  pages: 92,
  isRead: true,
  isFavorite: true,
};

const book2 = {
  title: 'The Prince',
  pages: 238,
  isRead: true,
  isFavorite: false,
};

const book3 = {
  title: 'Prince of persia',
  pages: 392,
  isRead: false,
  isFavorite: false,
};

function App() {
  return (
    <div>
      <Header />
      <p>Meus Livros</p>
      <ul>
        <Book book={book} />
        <Book book={book2} />
        <Book book={book3} />
      </ul>
      <Footer />
    </div>
  );
}

export default App;
