// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(router);

app.listen(PORT);
app.get('/', (req, res) => {
    res.send('Hello World!')
})