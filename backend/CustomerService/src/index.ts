import express,{Request,Response} from 'express';
const app = express();
const port = 8001;

app.get('/', (req:Request, res:Response) => {
    res.send('Hello Customer Service');
});

app.listen(port, () => {
    return console.log(`Customer server is listening at http://localhost:${port}`);
});
