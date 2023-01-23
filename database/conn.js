import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

mongoose
	.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.6wdsen5.mongodb.net/?retryWrites=true&w=majority`)
	.then(() => {
		console.log(`connected to mongodb`);
	})
	.catch((err) => {
		console.log(err);
	});
