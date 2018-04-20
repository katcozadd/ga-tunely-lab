/*
  NOTE: THE PURPOSE OF THIS FILE IS TO INSERT SAMPLE DATA INTO YOUR DATABASE.
  IT DOES NOT RUN AS PART OF YOUR NORMAL APPLICATION!
  The purpose is to create data in your database so that you have
  something to display on the page while you develop. You only need to run it once.
  The only reason you'd need to run it again is if you changed the sample data.

  You can run this file by typing the following command in the root of your app
  `node seed.js`
*/


var db = require("./models");

var sampleAlbums = [{
  albumImage: "./public/images/ladyhawke.jpg",
   artistName: 'Ladyhawke',
   albumName: 'Ladyhawke',
   releaseDate: '2008, November 18',
   genres: [ 'new wave', 'indie rock', 'synth pop' ]
 },
 {
  albumImage: "./public/images/theknife.jpg",
   artistName: 'The Knife',
   albumName: 'Silent Shout',
   releaseDate: '2006, February 17',
   genres: [ 'synth pop', 'electronica', 'experimental' ]
 },
 {
  albumImage: "./public/images/juno.jpg",
   artistName: 'Juno Reactor',
   albumName: 'Shango',
   releaseDate: '2000, October 9',
   genres: [ 'electronic', 'goa trance', 'tribal house' ]
 },
 {
  albumImage: "./public/images/philip.jpg",
   artistName: 'Philip Wesley',
   albumName: 'Dark Night of the Soul',
   releaseDate: '2008, September 12',
   genres: [ 'piano' ]
 }];

db.Album.remove({}, function(err, albums){

  db.Album.create(sampleAlbums, function(err, albums){
    if (err) { return console.log('ERROR', err); }
    console.log("all albums:", albums);
    console.log("created", albums.length, "albums");
    process.exit();
  });

});
