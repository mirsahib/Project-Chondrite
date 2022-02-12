import express,{Request,Response} from 'express';
const app = express();
const port = 8002;

app.get('/', (req:Request, res:Response) => {
    res.send('Hello Order Service');
});

app.listen(port, () => {
    return console.log(`Order Service is listening at http://localhost:${port}`);
});
