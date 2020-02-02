const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
const bodyParser=require('body-parser')

const connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		database:'sunday',
		password:'blahblah',
	});


connection.connect(err=>{
	if(err) {
		return err;
	}
});

app.use(bodyParser.json());
app.use(cors());

app.post('/addEmp',(req,res)=>{
	const {name,email,salary} =req.body.emp;
	const INSERT_EMP=`insert into employee (name,email,salary) values('${name}','${email}',${salary});`;
	console.log(INSERT_EMP)
	connection.query(INSERT_EMP,(err,results)=>{
		if(err){
			return res.send(err)
		}else{
			return res.status(201).send(results)
		}
	})
});

//view all todo
app.get('/getEmp',(req,res)=>{
	const SELECT_EMP='select * from employee';
	connection.query(SELECT_EMP,(err,results)=>{
		if(err){
			return res.send(err)
		}else{
			return res.send(results)
		}
	})
});


app.listen(5000,()=>{
	console.log('server listening on port 5000')
})
