import { BasicController } from "./basic.controller";
import { UserAWSService } from "../service/user-aws.service";

export class UserAWSController extends BasicController<any>{
    private service: UserAWSService = new UserAWSService();

    post() {
        if (this.body.pass) {
            return this.service.getOne(JSON.parse(this.body))
        } else {
            return this.service.save(JSON.parse(this.body))
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
