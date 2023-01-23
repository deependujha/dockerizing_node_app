import('./database/conn.js');
import Express from 'express';
import StudentModel from './database/models/StudentModel.js';

const app = Express();
const PORT = process.env.PORT || 4000;
app.use(Express.json());

app.get('/', async (req, res) => {
	try {
		const { limit = 3, page = 1 } = req.query;
		const students = await StudentModel.find()
			.limit(limit)
			.skip((page - 1) * limit);
		res.send(students);
	} catch (error) {
		res.status(400).send({ error });
	}
});

app.post('/', async (req, res) => {
	try {
		const { name, email, isPass } = req.body;
		const newStudent = await new StudentModel({
			name,
			email,
			isPass,
		}).save();
		res.send(newStudent);
	} catch (error) {
		res.status(400).send({ error });
	}
});

app.listen(PORT, () => {
	console.log(`app started on http://localhost:${PORT}`);
});
