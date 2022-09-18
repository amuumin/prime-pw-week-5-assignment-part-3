// > While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.

// ### Required Features

// - Create a variable `collection` that starts as an empty array.

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object




// > When testing your functions, write all tests in the JavaScript file!

console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished){
    let CD = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    
    }

collection.push(CD);
return CD;
}

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

addToCollection('Sweetener', 'Ariana Grande', '2018');
addToCollection('Wunna', 'Gunna', '2020');
addToCollection('Luv is Rage 2', 'Lil Uzi', '2017');
addToCollection('2 Alive', 'Yeat', '2022');
addToCollection('Astroworld', 'Travis Scott', '2018');
addToCollection('CTRL', 'SZA', '2017');

//   - After all are added, console.log the `collection` array.
console.log(collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection(array){
    console.log(array.length);
    for(let i=0;i<array.length; i++){
        console.log(array[i].title+ ' by ' + array[i].artist + ' published in ' + array[i].yearPublished)
    }

 }
 showCollection(collection);

// - Test the `showCollection` function.


// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.



function findByArtist(artist){
    let results =[];
    for(artist of collection){
        if (collection.artist == artist){ // im not sure how to write this conditional, but I hope my reasoning makes sense.
            results.push(artist) 
            return results
        } 
        return results
    }
    
}
console.log(findByArtist('Rihanna'));
console.log(findByArtist('Gunna')); // artist is in the collection but isnt showing up??