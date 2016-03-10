const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const wkhtmltopdf = require('wkhtmltopdf');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Form = require('./public/build/node-bundle').default;
const PORT = 8080;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/render', function(req, res) {
    const FormComponent = React.createElement(Form, { data: req.body });

    wkhtmltopdf(
        ReactDOMServer.renderToStaticMarkup(FormComponent),
        {
            userStyleSheet: 'public/form.css',
            printMediaType: false
        })
        .pipe(fs.createWriteStream('public/generated.pdf'));
});

app.listen(PORT, function() {
    console.log('listening on port:', PORT);
});
