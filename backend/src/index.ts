import express, {Request, Response} from 'express';
const app = express();


app.listen(8000, () => {
  console.log('Listening to port 8000');
});

app.get('/hello', (req: Request, res: Response) => {
  console.log('adsa');
  res.json({
    ok: 'true',
  });
});

app.get('/world', (req: Request, res: Response) => {
  res.json({
    ok: 'true',
  });
});
