import { APIGatewayEvent } from "aws-lambda";

export abstract class BasicController<Model = any>{
    protected header: object;
    protected body?: any;
    protected pathParameters?: any;

    constructor(event: APIGatewayEvent) {
        this.header = event.headers;
        this.body = event.body;
        this.pathParameters = event.pathParameters;
    }
    async redirectByMethod(httpMethod: string): Promise<Model | Model[]> {
        switch (httpMethod) {
            case 'GET':
                return this.get();
            case 'POST':
                return this.post();
            case 'PUT':
                return this.put();
            case 'DELETE':
                return this.delete();
        }
    }
    abstract async post();
    abstract async get();
    abstract async put();
    abstract async delete();
}