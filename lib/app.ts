import express from "express";
import {Request, Response} from "express";
import bodyParser from "body-parser";
import hbs from "hbs";
import path from "path";

class App {
    public app : express.Application;               //kao let x: number;

    constructor(){
        this.app = express();                              //kao x=3;
        this.config();
        this.routes();                      
    }

    public config():void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use('/', express.static('public'));
        this.app.use('/', express.static('node_modules/bootstrap/dist'));

        hbs.registerPartials(path.join(__dirname, '../../views/partials'));
        this.app.set('view engine', 'hbs');
        this.app.set('views', path.join(__dirname, '../../views'));
    }

    public routes(): void{
        const router = express.Router();

        router.get('/', (req:Request, res:Response) => {
            res.send('Hello world');       //moze i '<h1>Hello world</h1>'
        });

        router.get('/about', (req:Request, res:Response) => {
            res.render('about', {
                pageTitle: 'This is about page!!',
                pageAuthor: 'Plamenac',
                pagePeople:[
                    {name:'Marko', surname:'Markovic'},
                    {name:'Petar', surname:'Petrovic'}
                ],
                pageClass: 'autor'
            });
        });

        this.app.use('/', router);
    }
}

export default new App().app;