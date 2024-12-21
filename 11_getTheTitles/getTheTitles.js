const getTheTitles = function (books) {
  return books.map((book) => book.title);
};

console.log(
  getTheTitles([
    {
      title: "Book",
      author: "Name",
    },
    {
      title: "Book2",
      author: "Name2",
    },
  ])
);

// Do not edit below this line
module.exports = getTheTitles;
