const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema ({
	albumName: String,
	artistName: String,
	releaseDate: String,
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
