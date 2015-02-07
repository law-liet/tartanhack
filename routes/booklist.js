var mongoose = require('mongoose'), 
  book = require('../models/book.js');

module.exports = BookList;

function BookList(connection) {
  mongoose.connect(connection);
}

BookList.prototype = {
  showBooks: function(req, res) {
    book.find({ itemCompleted : false }, function foundBooks(err, items) {
    res.render('index', { title: 'Selling Books', books: items })
    });
  },

  addBook: function(req,res) {
    var item = req.body;
    var newBook = new book();
    newBook.itemName = item.itemName;
    newBook.ownerName = item.ownerName;
    newBook.ownerTelephone = item.ownerTelephone
    newBook.itemCategory = item.itemCategory;
    newBook.save(function savedTask(err) {
      if(err) {
        throw err;
      }
    });
    res.redirect('/');
  },

  completeTask: function(req,res) {
    var completedTasks = req.body;
    for(taskId in completedTasks) {
      if(completedTasks[taskId]=='true') {
        var conditions = { _id: taskId };
        var updates = { itemCompleted: completedTasks[taskId] };
        task.update(conditions, updates, function updatedTask(err) {
          if(err) {    
          	throw err;
          }
        });
      }
    }
    res.redirect('/');
  }
}