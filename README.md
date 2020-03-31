# INSTRUSCTION

## Start backend boilerplate

  1. npm install
  2. npm install serverless -g (possibly with admin access, sudo)
  3. sls dynamodb install
  4. Install Java JDK  (https://www.oracle.com/java/technologies/javase-jdk13-downloads.html)
  5. npm run start
  
### 1. Serverless will start on

  port 4000

### 2. Dynamo NoSQL DB will start on

  port 8080

### 3. In the DB there is several users. see
```
src/db/seed/users.json
```

### 4. In the DB there is several users with

path: api/user/{id} method: get
path: api/user/{id} method: delete
path: api/user/ method: get
path: api/user/ method: post
path: api/user/ method: put

### 5. Dynamo Info

  DB IS RUNNING IN MEMORY, data that is entered will be deleted after reset.
