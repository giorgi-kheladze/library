let http = new XMLHttpRequest();
http.open("get", "./json/books.json", true);
http.send();

http.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let books = JSON.parse(this.responseText); 

        function getRandomBooks() {
            let similarBooksContainer = document.querySelector('.similar-books');
            let randomBooks = books
                .sort(() => 0.5 - Math.random())
                .slice(0, 5);
        
            similarBooksContainer.innerHTML = '';
        
            randomBooks.forEach((book) => {
                let bookDiv = document.createElement('div');
                bookDiv.className = 'book';
                bookDiv.innerHTML = `
                    <img src="${book.image}" alt="${book.title}">
                    <p class="title">${book.title}</p>
                    <p class="publish">${book.publish}</p>
                `;
        
                bookDiv.addEventListener('click', function() {
                    localStorage.setItem('selectedBook', JSON.stringify(book));
                    window.location.href = 'book-detail.html';
                });
                similarBooksContainer.appendChild(bookDiv);
            });
        }
        getRandomBooks();
    }
}