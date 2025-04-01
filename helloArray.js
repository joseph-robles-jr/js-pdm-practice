let spellBook = ['fireball', 'magic missile'];
const replaceBook = function(book) {
  book = ['heat metal', 'misty step'];
  return book;
};
const newBook = replaceBook(spellBook);
console.log(spellBook); // Output: ['fireball', 'magic missile']
console.log(newBook); // Output: ['heat metal', 'misty step']
