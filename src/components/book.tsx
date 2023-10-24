type BookProps = {
    book: {
        title: string,
        pages: number,
        isRead: boolean,
        isFavorite: boolean
    }

};

function Book({ book }: BookProps) {
    const myArray = [2];
    return (
        <li>
            <span>{book.isRead ? '✅ ' : '📴 '}</span>
            <span>
                {`${book.title} (${book.pages} páginas)`}
            </span>
            {/* {myArray.length > 0 && <span> 😍</span>} */}
            {book.isFavorite && <span> 😍</span>}
        </li>
    );
}

export default Book;
