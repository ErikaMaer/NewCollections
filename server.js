const express =require('express');
const mongoose =require('mongoose');
const bodyParser =require('body-parser');
<<<<<<< HEAD
=======
const path= require('path')
>>>>>>> Update app

const items = require('./back-end/routes/api/items');

const app = express();

app.use(bodyParser.json());

const db = require('./back-end/config/keys').mongoURI;

mongoose
    .connect(db,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.use('/api/items', items );
app.use('/api/card', require('./back-end/routes/api/card.routes'))
app.use('/api/item', require('./back-end/routes/api/card.items.routes'))

<<<<<<< HEAD
=======

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('front-end/build'))

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'))
    })
}



>>>>>>> Update app
const port =process.env.PORT || 5000;


app.listen(port, () => console.log(`Server started on port ${port}`));