const getTheTitles = function(books) {
    let allBookTitles = []

    books.map((book) => {
        allBookTitles.push(book.title);
    })

    return allBookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
