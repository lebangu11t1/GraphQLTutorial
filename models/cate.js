import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema

const cateSchema = new Schema({
	name: {
	 	type: String,
		required: true
	}
}, { collection: 'cate', timestamps: true } );

export default mongoose.model('cate', cateSchema);
