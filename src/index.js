const path = require('path');
const express = require('express'); // import thư viện express
const morgan = require('morgan');
const { engine } = require ('express-handlebars'); //Khai báo thư viện handlebars
const app = express(); //khởi tạo function
const port = 3000; //port sever

// Http Logger
app.use(morgan('combined'));

//Template engine
// app.engine('handlebars', engine()); //Khởi tạo handlebars bằng hàm engine được import từ thư viện
app.engine( "hds", engine({ extname: "hds", defaultLayout: false, layoutsDir: "views/layouts/" }) );

app.set('view engine', 'hds'); // set view engine là handlebars

app.set('views', path.join(__dirname, 'resources/views')); //set lại đường dẫn tới folder view

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})