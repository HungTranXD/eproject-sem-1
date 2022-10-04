let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/sem1-eproject'));

app.get('/*', (req, resp) => {
  resp.sendFile(__dirname + 'dist/sem1-eproject/index.html');
});


app.listen(process.env.PORT || 8080);
