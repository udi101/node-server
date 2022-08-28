// import bodyParser from 'body-parser';
import express, { response } from 'express';
import cookieParser from 'cookie-parser';
import { serverConfig } from './server.config';
import helmet from 'helmet';
// const workersRouter = require('./workers/workers.route');

import { workersRouter } from './workers/workers.route';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(helmet());
app.use(cookieParser());
app.use(express.static('public'));   // Serving static files

app.listen(serverConfig.port, () => { console.log(`Listening on port ${serverConfig.port}`);});
app.use('/workers', workersRouter);


app.get('*',  async (req,res)  => {
    res.cookie('name','Udi',  {maxAge: 5000, path: '/cat'});
    const name = await req.cookies?.name;
    res.header('name','Udi Mazor').status(200).json('Welcome to Twitter ' + (!!name ? name : 'Please log in'));
});
app.post('*', (req,res) => {
    console.log(req.body);
    console.log(__dirname);
    res.status(200).json('This is the post reply');
});
