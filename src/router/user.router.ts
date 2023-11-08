import { userController } from "../controllers/user.controller";
import { BaseRouter } from "./router";

export class UserRouter extends BaseRouter<userController> {
    public constructor() {
        super(userController);
    }

    routes() {
        this.router.get('/user', (req, res)=> this.controller.getUsers(req, res));
        
    }
}