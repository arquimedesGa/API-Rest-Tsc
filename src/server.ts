import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { UserRouter } from './router/user.router';

class ServerApp {
    public app: express.Application = express();
    private port: number = 3000;

    constructor() {
      this.app.use(cors());
      this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.app.use("/api", this.routers());

        this.listen();

    }

    routers(): Array<express.Router> {
        return [new UserRouter().router];
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    };

   
}

new ServerApp();