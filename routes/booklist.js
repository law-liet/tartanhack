var mongoose = require('mongoose'), 
  book = require('../models/book.js');

module.exports = BookList;

function BookList(connection) {
  mongoose.connect(connection);
}

BookList.prototype = {
  showBooks: function(req, res) {
    book.find({}, function foundBooks(err, items) {
    res.render('index', { title: 'Selling Books', books: items });
    });
  },

  addBook: function(req,res) {
    var item = req.body;
    var newBook = new book(item);
    newBook.save(function savedTask(err, result) {
      if(err) {
        throw err;
      }
      res.json(result);
    });
    //res.redirect('/');
  },

  soldBook: function(req,res) {
    var soldbook = req.body;
    book.remove(soldbook);
    /*
    for (bookId in completedBooks) {
      if (completedBooks[bookId] == 'true') {
        var conditions = {_id: bookId};
        var updates = {itemSold: completedBooks[bookId]};
        book.update(conditions, updates, function updatedBook(err, result) {
          if (err) {
            throw err;
          }
          res.json(result);
        });
      }
    }
    */
  },
    //res.redirect('/');
  searchBook: function(req, res) {
    book.find(req.body, function(err,results){
      if (!err) {
        throw err;
      }
      res.json(results);
    });

  }
};