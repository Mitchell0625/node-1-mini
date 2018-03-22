let books = [];

let id = 0;

module.exports = {
  read: (req, res, next) => {
    res.send(books);
  },
  create: (req, res, next) => {
    const { title, author } = req.body;
    let book = {
      id: id,
      title: title,
      author: author
    };
    books.push(book);
    id++;
    res.send(books);
  },
  
    }
    const bookIndex = books.indexOf(id) === id;
    books.splice(bookIndex, 1, req.params);
    res.send(books);
  }
};
