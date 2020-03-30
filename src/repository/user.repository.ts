
import client from "../db/dynamo.db";

export class UserRepository {

    async getOneById(id: String) {
        return new Promise((resolve, reject) => {
            client
                .get({ Key: { id }, TableName: 'user' })
                .promise()
                .then(res => {
                    resolve(res.Item || null);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
    async getAll(){
        return new Promise((resolve, reject) => {
            client
                .scan({TableName: 'user' })
                .promise()
                .then(res => {
                    resolve(res.Items || null);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
    async save(data: any) {
        return new Promise((resolve, reject) => {
            client
                .put({
                    Item: data,
                    TableName: 'user',
                })
                .promise()
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    console.log(error)
                    reject(error);
                });
        });
    }
    async delete(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            client
                .delete({ Key: { id }, TableName: 'user' })
                .promise()
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}
