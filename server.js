const express    = require('express')
const bodyParser = require('body-parser');
const app        = express();
const morgan     = require('morgan');
const db         = require('./models');
const Album      = require('./models/album')

const path       = require('path');

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

/************
 * DATABASE *
 ************/


/**********
 * ROUTES *
 **********/

app.get('/', function (req, res) {
  res.render('index');
}) 


app.get('/albums', function (req,res) {
  db.Album.find( function (err, albums) {
    if(err) {
      console.log("album error" + err);
      res.sendStatus(500);
    }
    res.json(albums);
  })
})

/*
 * HTML Endpoints: This means we are expecting an HTML or EJS page to be rendered
 */

// app.get('/*', function homepage (req, res) {
//   // This albums variable is the array of objects defined above.
//   // TODO: Eventually, this should be replaced with a find() call to your database!
//   res.render('index', { albums: albums });
// });

// TODO: GET ROUTE for single album (Route has an id in the url. e.g., /:id that can be accessed
// on the request object with req.params.id).

// TODO: POST ROUTE (NOTE: You can submit a post request directly from an HTML form tag
// using the method and action attributes - no need for AJAX!)


/*
 * JSON API Endpoints: This usually means AJAX has been used to call this route
 */

// TODO: DELETE ROUTE (removes/destroys an album in the DB. Needs to be called from AJAX.)

// TODO: PUT ROUTE (edits/updates the info in the DB. Needs to be called from AJAX.)

/**********
 * SERVER *
 **********/

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })