import { BasicController } from "./basic.controller";
import { UserAWSService } from "../service/user-aws.service";

export class UserAWSController extends BasicController<any>{
    private service: UserAWSService = new UserAWSService();

    post() {
        let body = JSON.parse(this.body);
        if (body.username) {
            return this.service.getOne(body);
        } else {
            return this.service.save(body);
        }
    }
    put() {
        return { message: 'Not implemented yet' }
    }
    delete() {
        return { message: 'Not implemented yet' }
    }
    get() {
        return { message: 'Not implemented yet' }
    }

}
