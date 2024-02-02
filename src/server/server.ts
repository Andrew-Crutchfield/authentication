import express from 'express';
import path from 'path';
import routes from './routes';
// import { generateHash } from './utls/passwords';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client')));


app.use(routes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

