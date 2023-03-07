import express from 'express'

const app = express()

const PORT = process.env.PORT || 5000 //any input device has ports, we are opening up a port on ur computer

//middleware
app.use(express.json())

let students = [
    {id:1, name: 'Fred', age: 16},
    {id:2, name: 'Michael', age: 17},
    {id:3, name: 'Kyle', age: 14}
]

//create endpoint routes
app.get('/api/students',(req, res)=> res.send(students)) 

app.get('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id))
    if (!student) return res.status(404).send('Student not found')
    res.send(student)
})

app.post('/api/students', (req,res) => {
    if(!req.body.name) res.status(400).send('Name is required.')
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    }
    students.push(student)
    res.send(student)
})

app.put('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id))
    if (!student) return res.status(404).send('Student not found')

    student.name = req.body.name
    student.age = req.body.age

    res.send(student)
})

//app.get('/',(req,res)=> res.send('Hello Fred!')) //The local host url is: http://localhost:5000/, there are no words after path, so it calls this path because it is /____

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));