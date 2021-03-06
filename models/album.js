const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema ({
	albumImage: { data: Buffer, contentType: String },
	artistName: String,
	albumName: String,
	releaseDate: String,
	genres: Object
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;