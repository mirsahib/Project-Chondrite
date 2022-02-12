import express,{Request,Response} from 'express';
const app = express();
const port = 8003;

app.get('/', (req:Request, res:Response) => {
    res.send('Hello Product Service');
});

app.listen(port, () => {
    return console.log(`Customer server is listening at http://localhost:${port}`);
});
