const express = require('express') // import thư viện express
const app = express() //khởi tạo function
const port = 3000 //port sever

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})