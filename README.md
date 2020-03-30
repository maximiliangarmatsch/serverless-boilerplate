# INSTRUSCTION

## Start backend boilerplate

  1. npm install
  2. npm install serverless -g
  3. sls dynamodb install
  4. npm run start
  
### 1. Serverless will start on

  port 4000

### 2. Dynamo NoSQL DB will start on

  port 8080

### 3. In the DB there is several users with

``` json
[
    {
        "firstName": "Admin",
        "lastName": "Root",
        "createdDate": "Fri Mar 13 2020 12:35:28 GMT+0100 (Central European Standard Time)",
        "id": "1"
    },
    {
        "firstName": "Ira",
        "lastName": "Hayes",
        "createdDate": "Fri Mar 13 2020 12:35:28 GMT+0100 (Central European Standard Time)",
        "id": "3"
    },
    {
        "firstName": "Jo",
        "lastName": "Doom",
        "createdDate": "Fri Mar 13 2020 12:35:28 GMT+0100 (Central European Standard Time)",
        "id": "2"
    }
]
```

### 4. In the DB there is several users with

path: api/user/{id} method: get
path: api/user/{id} method: delete
path: api/user/ method: get
path: api/user/ method: post
path: api/user/ method: put

### 5. Dynamo Info

  DB IS RUNNING IN MEMORY, data that is entered will be deleted after reset.
