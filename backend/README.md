# Setup backend
create folder backend name then open terminal in backed folder


## run command npm init

package name - mynotebook-react-backend
description : My notebook on cloud

IS this OK? (yes) yes

Create file : index.js

## install command express js
npm install express 

## install command mongoose
npm install mongoose

## install command nodemon for (Node.js based applications by automatically restarting)
npm install -g nodemon

## install command express validator for validate
npm install express-validator

## install command bcrypt.js for hashing password  
npm i bcryptjs

## install command JWT (JSON Web Tokens) for Base64Url-encoded Data
npm i jsonwebtoken

#### Api End Points ########

## 1. create user Api end points with body json (http://localhost:5000/api/auth/createuser)
{
  "name" : "Saurav",
  "email" : "saurav@gmail.com",
  "password" : "bisht@95"
}

## 2. login Api end points with body json (http://localhost:5000/api/auth/login)
{
  "email" : "gaurav@gmail.com",
  "password" : "bisht@95"
}


## 3. Add Note Api end points, header with body json (http://localhost:5000/api/notes/addnote)

### add note header
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmExODRhNjI1NTE0NmQxMjNlMTAxMmFmIn0sImlhdCI6MTc3OTk3NjgwMn0.eBp22br6gQ7fMmTdsEGNuMoUxfeMPaJZnOjYQYletis  -------- (user login token)
Content-Type: application/json

### add note boby json
{
  "title": "saurav note 1",
  "description": "This is my first Note update",
  "tag": "saurav personal"
}


## 4. fetch all notes Api end points, header (http://localhost:5000/api/notes/fetchallnotes)

### fetch all notes header
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmExODRhNjI1NTE0NmQxMjNlMTAxMmFmIn0sImlhdCI6MTc3OTk3NjgwMn0.eBp22br6gQ7fMmTdsEGNuMoUxfeMPaJZnOjYQYletis   -------- (user login token)


### fetch all notes no boby json required


## 5. Update notes Api end points, header with body json (http://localhost:5000/api/notes/updatenote/6a18501206a2414c5c2031f0) with note id

### Update notes header
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmExODRhNjI1NTE0NmQxMjNlMTAxMmFmIn0sImlhdCI6MTc3OTk3NjgwMn0.eBp22br6gQ7fMmTdsEGNuMoUxfeMPaJZnOjYQYletis   -------- (user login token)

### Update boby json
{
  "title": "saurav Title 1",
  "description": "This is my First Note update",
  "tag": "saurav personal"
}


## 6. Delete notes Api end points, header (http://localhost:5000/api/notes/deletenote/6a18501206a2414c5c2031f0) with note id

### Delete notes header
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmExODRhNjI1NTE0NmQxMjNlMTAxMmFmIn0sImlhdCI6MTc3OTk3NjgwMn0.eBp22br6gQ7fMmTdsEGNuMoUxfeMPaJZnOjYQYletis   -------- (user login token)

### fetch all notes no boby json required