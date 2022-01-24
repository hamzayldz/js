class Media {
    constructor(title, type) {
        this._title = title;
        this._type = type;
        this._isCheckOut = false;
        this._rating = [7, 8];
    }
    get title() {
        return this._title;
    }
    get type() {
        return this._type
    }
    get isCheckOut() {
        return this._isCheckOut
    }
    get rating() {
        return this._rating
    }
    set isCheckOut(value) {
        this._isCheckOut = value
    }
    toggleCheckoutStatus() {
        this._isCheckOut = !this._isCheckOut;
    }
    get averageRating() {
        let rating = this._rating.reduce((total, rating) => total + rating) / this._rating.length
        return rating.toFixed(2);
    }
    addRating(value) {
        if (value >= 1 && value <= 10) {
            this._rating.push(value)
        }
    }
}
const medya = new Media("test", "deneme");

medya.toggleCheckoutStatus();
medya.addRating(6);
medya.addRating(8);
console.log(medya);
console.log(medya.averageRating)

class Book extends Media {
    constructor(title, type, author, pages) {
        super(title, type)
        this._author = author
        this._pages = pages
    }
    get author() {
        return this._author
    }
    get pages() {
        return this._pages
    }

}
class Movie extends Media {
    constructor(title, type, director, runTime) {
        super(title, type)
        this._director = director
        this._runTime = runTime
    }
    get director() {
        return this._director
    }
    get runTime() {
        return this._runTime
    }

}
class CD extends Media {
    constructor(title, type, artist, duration) {
        super(title, type);
        this._artist = artist
        this._songs = ["a", "b", "c", "d"]
        this._duration = duration
    }
    get artist() {
        return this._artist
    }
    get songs() {
        return this._song
    }
    addSongs(song) {
        this._songs.push(song)
    }
    shuffle() {
        return this._songs.sort(() => Math.random() - 0.5);
    }
}

class Catalog {
    constructor() {
        this._myCatalog = []
    }
    get myCatalog() {
        return this._myCatalog
    }
    set myCatalog(newMedia) {
        this._myCatalog.push(newMedia);
    }
    addMedia(newMedia) {
        this.myCatalog.push(newMedia);
    }
}
const historyOfViolence = new Book(
    'History of Violence',
    "crime",
    'Édouard Louis',
    224
);
console.log(historyOfViolence);
historyOfViolence.toggleCheckoutStatus();
console.log(historyOfViolence.isCheckOut)

historyOfViolence.addRating(5);
historyOfViolence.addRating(6);
historyOfViolence.addRating(10);

console.log(historyOfViolence.averageRating)

const tarkan = new Movie("tarkan",
    "action",
    "kartal tibet",
    125)

const sila = new CD(
    "sıla",
    "pop",
    "sıla gencoğlu",
    22
)
console.log(sila)

const catalogLibrary = new Catalog();
catalogLibrary.addMedia(historyOfViolence);
catalogLibrary.addMedia(sila)
catalogLibrary.myCatalog = tarkan

console.log(catalogLibrary)

let submitBtn = document.getElementById("submit_btn");
let mediaSelect = document.getElementById("mediaTypeSelect");
let titleMedia = document.getElementById("titleOfMedia");
let typeMedia = document.getElementById("typeOfMedia");
let creatorMedia = document.getElementById("creatorOfMedia");
let durationMedia = document.getElementById("durationOfMedia");
let ratings = document.getElementsByClassName("ratingsOfMedia");
let catalogLib = document.getElementById("catalogLibrary");

submitBtn.onclick = () => {
    let selectMedia = mediaSelect.value === "Movie"
        ? Movie
        : mediaSelect.value === "Book"
            ? Book
            : mediaSelect.value === "CD"
            ?CD
    : "";

    let newMedia =new selectMedia(
        titleMedia.value,
        typeMedia.value,
        creatorMedia.value,
        durationMedia.value
    )
    newMedia.addRating(ratings[0].value);
    newMedia.addRating(ratings[1].value);
    newMedia.addRating(ratings[2].value);
    newMedia.addRating(ratings[3].value);

    catalogLibrary.addMedia(newMedia);
    console.log(catalogLibrary);

    let result =[];
    catalogLibrary.myCatalog.forEach(item=> result.push(item.title));
        
       catalogLib.innerHTML= result.join("<br>")
}