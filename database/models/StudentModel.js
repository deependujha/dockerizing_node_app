import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
	name: String,
	email: String,
	isPass: Boolean,
});

const StudentModel = new mongoose.model('StudentModel', studentSchema);

export default StudentModel;
