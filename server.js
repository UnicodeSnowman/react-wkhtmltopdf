const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const wkhtmltopdf = require('wkhtmltopdf');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Form = require('./public/build/server-bundle').default;
const PORT = 8080;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/render', function(req, res) {
    const FormComponent = React.createElement(Form, { data: req.body });
    const html = ReactDOMServer.renderToStaticMarkup(FormComponent);

    wkhtmltopdf(html, {
            userStyleSheet: 'public/form.css',
            printMediaType: true
        })
        .pipe(fs.createWriteStream('public/build/generated.pdf'));

    // Obviously, you'd want to handle PDF generation errors here...
    res.send('OK Computer');
});

app.listen(PORT, function() {
    console.log('listening on port:', PORT);
});
