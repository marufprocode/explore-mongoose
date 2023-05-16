import express from 'express';
import mongoose from 'mongoose';
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


main().catch(err => console.log(err));

async function main() {
	try{
		await mongoose.connect('mongodb://127.0.0.1:27017/test');
		console.log("Database connection successfull")
	}catch(err){
		console.error(`Failed to connect Database Error: ${err.message}`)
	}  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()