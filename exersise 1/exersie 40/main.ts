// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// agar ksi cheez ko opt rakna ho tho uskay agay question mark rakdethay haim

function make_album(artist: string, title: string, tracks?: number) {
    const album: { artist: string, title: string, tracks?: number } = {
        artist,
        title,
        tracks
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}
// example function call

const album1 = make_album('Ed Sheeran', 'Divide');
const album2 = make_album('Taylor Swift', 'Fearless', 16);
const album3 = make_album('Beyoncé', 'Lemonade', 12);

console.log(album1);
console.log(album2);
console.log(album3);






// Certainly! Let's break down the code step by step:

// 1. **Function Declaration**: 
// ```javascript
// function make_album(artist: string, title: string, tracks?: number) {
// ```
//    - This line declares a function named `make_album`.
//    - It takes three parameters: `artist` (a string representing the name of the artist), `title` (a string representing the title of the album), and `tracks` (an optional parameter which represents the number of tracks on the album, denoted by the question mark `?`).

// 2. **Album Object Creation**: 
// ```javascript
//     const album: { artist: string, title: string, tracks?: number } = {
//         artist,
//         title,
//         tracks
//     };
// ```
//    - This block creates an object named `album`.
//    - The object has three properties: `artist`, `title`, and optionally `tracks`.
//    - `artist` and `title` properties are always present and are set equal to the passed arguments.
//    - `tracks` property is optional, and its value is set equal to the passed `tracks` argument. If `tracks` argument is not provided, it remains `undefined`.

// 3. **Optional Tracks Assignment**:
// ```javascript
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
// ```
//    - This block checks if the `tracks` parameter is provided.
//    - If `tracks` is provided (i.e., it's not `undefined`), it assigns the value of `tracks` to the `tracks` property of the `album` object.

// 4. **Return Statement**:
// ```javascript
//     return album;
// }
// ```
//    - This line returns the `album` object after it has been created and potentially modified based on the provided arguments.

// 5. **Function Calls**:
// ```javascript
// const album1 = make_album('Ed Sheeran', 'Divide');
// const album2 = make_album('Taylor Swift', 'Fearless', 16);
// const album3 = make_album('Beyoncé', 'Lemonade', 12);
// ```
//    - These lines call the `make_album` function with different combinations of arguments.
//    - `album1`, `album2`, and `album3` store the objects returned by the function calls, representing different albums.

// 6. **Console Logging**:
// ```javascript
// console.log(album1);
// console.log(album2);
// console.log(album3);
// ```
//    - These lines log the album objects to the console, displaying their properties and values.

// This function allows you to create album objects with information about the artist, title, and optionally the number of tracks.