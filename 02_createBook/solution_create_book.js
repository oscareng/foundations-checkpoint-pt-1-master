/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price, rating)
{Object.create(bookproto)
    return {
    id,
    title, 
    author, 
    price, 
    rating: [],
    getPrice() {return this.price},
getInfo(){return `${this.title} by ${this.author}`},
addRating(rate){this.rating = [rate]},
getRating(){}
}
}
const bookproto = {
getPrice() {return this.price},
getInfo(){return `${this.title} by ${this.author}`},
addRating(rate){this.rating = [rate]},
getRating(){}
}
// function createBook() {
//     const book1 = Object.create()
//     return book1
// }
const theCatInTheHat = createBook(
    3,
    'The Cat in the Hat',
    'Dr. Seuss',
    1.99
  );
  console.log(theCatInTheHat)