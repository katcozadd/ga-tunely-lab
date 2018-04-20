/* CLIENT-SIDE JS
 *
 * You will need this file for doing PUT or DELETE requests.
 * As an example, here is how one might implement a delete button
 * 1. Create a big red button that says delete. Give it an id.
 * 2. Listen for the click event on the button (using the id you made for it).
 * 3. In the function that executes on that click event, make an AJAX request to the server to
 *    delete the album. (Note: you will need the album id as part of the url)
 * 4. Make the route on the server side that accepts this request. Make sure it is getting there.
 * 5. Perform the deletion in the database
 *
 */

$(document).ready(function() {
  console.log('app.js loaded!');

	var $albumsList = $('#albums');
	var albumsArr = [];

  $.ajax({
  	method: "GET",
  	url: '/api/albums',
  	success: renderAlbumSuccess,
  	error: renderAlbumError
  });


  $('#newAlbumForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/api/albums",
      data: $(this).serialize(),
      success: newAlbumSuccess,
      error: newAlbumError
    });
  });

function getAlbumHtml(album) {
  return `
    <div class="row album">

      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-body">

            <div class='row'>
              <div class="col-md-3 col-xs-12 thumbnail album-art">
                <img src="http://placehold.it/800x800" alt="">
              </div>

              <div class="col-md-9 col-xs-12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4 class='inline-header'>Album Name:</h4>
                    <span class='album-name'>${album.albumName}</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Artist Name:</h4>
                    <span class='artist-name'>${album.artistName}</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Released date:</h4>
                    <span class='album-releaseDate'>${album.releaseDate}</span>
                  </li>

                  <li class="list-group-item">
                    <h4 class='inline-header'>Genres:</h4>
                    <span class='album-releaseDate'>${album.genres}</span>
                  </li>

                </ul>
              </div>

            </div>

            <div class='panel-footer'>
            </div>

          </div>
        </div>
      </div>
    </div>`;
}


function getAllAlbumsHtml(albums) {
  return albums.map(getAlbumHtml).join("");
}
// helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
function render () {
  // empty existing posts from view
  $albumsList.empty();
  // pass `allTodo` into the template function
  var albumsHtml = getAllAlbumsHtml(albumsArr);
  // append html to the view
  $albumsList.append(albumsHtml);
};


function renderAlbumSuccess(json) {
	albumsArr = json;
	console.log(albumsArr);
	render();
}

function renderAlbumError(e) {
	console.log('uh oh');
	$('#albums').text('Failed to load albums, is the server working?');
}


function newAlbumSuccess() {
  window.location.href = '/albums';
}

function newAlbumError(e) {
  console.log("create album error, could not create!");
}




});
//------------------------------------------------
