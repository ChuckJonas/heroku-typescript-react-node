import * as express from 'express';
import * as path from 'path';
const app = express();
const PORT = process.env.PORT || 5000;


// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-app/dist')));

// Answer API requests.
app.get('/api/items', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../react-app/dist', 'index.html'));
});

app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});