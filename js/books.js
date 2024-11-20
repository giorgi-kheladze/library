let http = new XMLHttpRequest();
http.open("get", "./json/books.json", true);
http.send();

http.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let books = JSON.parse(this.responseText); 

        let currentPage = 1;
        const booksPerPage = 12;

        function renderBooks(page) {
            let bookGrid = document.querySelector('.books');
            bookGrid.innerHTML = ''; // Clear existing books

            const start = (page - 1) * booksPerPage;
            const end = page * booksPerPage;
            const booksToShow = books.slice(start, end);

            booksToShow.forEach((book) => {
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
                bookGrid.appendChild(bookDiv);
            });
        }

        function showPage(page) {
            currentPage = page;
            renderBooks(page);

            const paginationButtons = document.querySelectorAll('.pagination button');
            paginationButtons.forEach(button => button.classList.remove('active'));
            document.getElementById('page' + page)?.classList.add('active');
        }

        // Initial page load
        showPage(1);

        // Set up pagination buttons
        const paginationButtons = document.querySelectorAll('.pagination button');
        paginationButtons.forEach((button, index) => {
            button.addEventListener('click', () => showPage(index + 1));
        });
    }
}