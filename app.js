const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(res.get.toString);
  res.send('Hello World!')
})

app.get('/user',(req,res) =>{
  res.send('Name : Alok  Kumar , Password : 1234 , DeviceId : tty35jjh')
})

app.get('/employee',(req,res) =>{
  console.log("/employee");
  res.send('Name : Alok  Kumar , Profile : Software Developer - Android , DeviceId :hj7667kk')
})

app.get('/renderPage',(req,res)=>{
  res.sendFile('firstPage.html')
})

app.listen(port, () => {
  console.log(`MyApp listening at http://localhost:${port}`)
})


