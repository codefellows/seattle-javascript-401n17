# HTTP and REST

Using REST (Representational State Transfer) over HTTP allows us to easily (and more importantly - reliably) perform CRUD Operations using a client library such as `fetch`, `superagent`, `axios` or even your browser. REST is a common architectural pattern that is widely adopted and used as a standard means of accessing and manipulating data over the internet.

## Learning Objectives

### Students will be able to

#### Describe and Define

- A broader view of the WRRC (Web Request Response Cycle)
- Clients and Servers
- The operations of HTTP
  - Verbs
  - Status Codes
  - Headers
  - Requests and Responses
- REST
  - Supported Verbs
  - Usage of HTTP
  - What is a resource?
  - What is an API?

#### Execute

- Use `json-server` to create a "Proof of Concept" API
- Generate Swagger Documentation

## Resources

- [json server](https://github.com/typicode/json-server)

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Running JSON-Server

```bash
json-server --watch <PATH_TO_JSON_DATA>
```

### ReST/HTTP Methods

| Request Method | Description                                                                                                                               |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| GET            | Retrieve a piece of data from the server (either a file, data entry, HTML page, etc.)                                                     |
| POST           | Create a new data entry on the server                                                                                                     |
| PUT            | Update an existing data entry on the server. This is a _full_ update, meaning the data entry is entirely replaced by the new content      |
| DELETE         | Delete an existing data entry on the server                                                                                               |
| HEAD           | Retrieve only the header of a standard request response. This can be useful to get administrative data about the server                   |
| CONNECT        | Create a connection link between the client and server                                                                                    |
| OPTIONS        | Get a list of supported HTTP methods this server has coded for                                                                            |
| TRACE          | Used for debugging, this method will complete a loop of the WRRC by passing a message from client to server and back to client            |
| PATCH          | Partially updates a data entry on the server (instead of updating every bit of the entry)                                                 |

> When performing a CRUD operation using ReST, the server is expected to return the result of that operation.

- **POST** (CREATE) should return an object representing the newly added record
- **PUT/PATCH** (UPDATE) should return an object representing the updated record, after the save
- **DELETE** should return either an empty object or `null`
- **GET** should return a single object if a specific resource was requested, or an array of objects, with appropriate metadata

   ```javascript
   {
     name: 'carrot'
   }
  ```

  ```javascript
  {
    count: 2,
    next: null,
    results: [
      { name: 'carrot' },
      { name: 'apple' },
    ]
  }
  ```

### Example HTTP Request

```bash
POST /api/note HTTP/1.1
Host: api.example.com
Origin: www.example.com
Authorization: Bearer bHVsIHRoaXMgaXMgYSBmYWtlIHNlY3JldCB0b2tlbg==
Accept: application/json
Content-Type: application/json; charset=UTF-8
Content-Length: 58

{"title":"kata","content":"get 100 points on hacker rank"}
```

### Example HTTP Response

```bash
HTTP/1.1 200 OK
Date: Tue, 22 Aug 2017 06:34:16 GMT
Content-Type: application/json; charset=UTF-8
Content-Encoding: UTF-8
Content-Length: 82
Last-Modified: Mon, 21 Aug 2017 12:10:38 GMT
Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
ETag: "3f80f-1b6-3e1cb03b"
Connection: close

{"id":"1234123412341324","title":"kata","content":"get 100 points on hacker rank"}
```

#### Common HTTP Status Codes

| Code | Name                          | Meaning                                                                                                                                                                                                                                                                                    |
| ---- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 200  | OK                            | Generic success in sending the response                                                                                                                                                                                                                                                    |
| 201  | Created                       | The request was completed and a new data entry was created on the server                                                                                                                                                                                                                   |
| 202  | Accepted                      | The request has been accepted and an action that has been kicked off but not completed. When the action completes, another response will be sent.                                                                                                                                          |
| 203  | Non-Authoritative Information | The server is a middleman, and received a 200 OK response from its request to another server. Now, when sending a response to the original client, the server will be modifying some of the data it received.                                                                              |
| 204  | No Content                    | The server successfully processed the request and is not returning any content                                                                                                                                                                                                             |
| 300  | Multiple Choices              | The client requested something that was ambiguous; for example they asked for something that is stored in multiple formats, or has a duplicate somewhere. The response does not include the requested data, but instead a list of the possible data entries the client should choose from. |
| 301  | Moved Permanently             | The client requested something from a location that no longer holds that data                                                                                                                                                                                                              |
| 304  | Not Modified                  | The client already requested this data, and the data has not changed since then. Instead of sending the same data again, the server sends nothing with a 304 response status code.                                                                                                         |
| 400  | Bad Request                   | The client made some error when creating the request and so the server can't understand it.                                                                                                                                                                                                |
| 401  | Unauthorized                  | The server wanted the client to provide some authorization for security purposes, but the client did not                                                                                                                                                                                   |
| 403  | Forbidden                     | The client provided authorization, but the server is not willing to give a response (either the authenticated client doesn't have permissions to access this data, or some other reason)                                                                                                   |
| 404  | Not Found                     | The requested data was not found on the server                                                                                                                                                                                                                                             |
| 405  | Method Not Allowed            | The server API doesn't support this method (GET, POST, PUT, DELETE, etc) on this data                                                                                                                                                                                                      |
| 500  | Internal Server Error         | Generic server error                                                                                                                                                                                                                                                                       |
| 501  | Not Implemented               | The request is not recognized by the server and thus can't be completed                                                                                                                                                                                                                    |
| 502  | Bad Gateway                   | The server is also waiting on another server, and never got a response                                                                                                                                                                                                                     |
| 503  | Service Unavailable           | The server cannot handle the request because it is temporarily overloaded or down for maintenance                                                                                                                                                                                          |
| 504  | Gateway Timeout               | The server is also waiting on another server, but it took too long, resulting in a timeout=                                                                                                                                                                                                |
