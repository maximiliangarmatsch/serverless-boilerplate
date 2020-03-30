import { UserRepository } from "../repository/user.repository";
import * as crypto from 'crypto';
import { ErrorHandler } from '../util/error/error.handler';
import { ERROR_MESSAGES } from '../util/error/error.messages';

export class UserService {
    private repository = new UserRepository();

    async getOneById(body: any) {
        const response = await this.repository.getOneById(body.id);
        if (response) {
            return response;
        }
        return new ErrorHandler(ERROR_MESSAGES.MISSING_AUTHORIZATION);
    }
    async save(body: any) {
        return await this.repository.save(body);
    }
    async getAll() {
        return await this.repository.getAll();
    }
    async delete(body: any) {
        const response = await this.repository.delete(body.id);
        if (response) {
            return response;
        }
        return new ErrorHandler(ERROR_MESSAGES.MISSING_AUTHORIZATION);
    }

}