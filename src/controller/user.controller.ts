import { UserService } from "../service/user.service";
import { BasicController } from "./basic.controller";

export class UserController extends BasicController<any>{
    private service: UserService = new UserService();

    post() {
        return this.service.save(JSON.parse(this.body));
    }
    put() {
        return this.service.save(JSON.parse(this.body));
    }
    delete() {
        return this.service.delete(this.pathParameters);
    }
    get() {
        if (this.pathParameters) {
            return this.service.getOneById(this.pathParameters);
        }else{
            return this.service.getAll();

        }
    }

}