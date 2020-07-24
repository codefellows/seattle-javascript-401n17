# Install MongoDB

## Installation and Setup

- [Installation Instructions](https://docs.mongodb.com/manual/installation/)
- Create a folder called `db` in  your `codefellows/401` folder
- Startup your mongo server with this command: `mongod --dbpath=/PATH/TO/codefellows/db` (substituting your actual path to that folder)
- You should see output that looks like this, indicating that your mongodb server is up and running:

```bash
2018-09-25T17:34:13.054-0700 I CONTROL  [initandlisten] MongoDB starting : pid=75078 port=27017 dbpath=/Users/john/codefellows/tools/db 64-bit host=cfc.localdomain
...
2018-09-25T17:34:14.191-0700 I NETWORK  [initandlisten] waiting for connections on port 27017
```

- Once your server is running, open a new terminal window or tab and open the mongo client by typing `mongo`
- Your output should look like what appears below. Specifically, we're looking for the `>` on the last line, indicating that you can type in database commands.
- You can type `exit` to leave the shell
- Stop the server in the other terminal by pressing `CTRL+C`

```bash
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3
Server has startup warnings:
2018-09-25T17:34:28.844-0700 I CONTROL  [initandlisten]
2018-09-25T17:34:28.844-0700 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-09-25T17:34:28.844-0700 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-09-25T17:34:28.844-0700 I CONTROL  [initandlisten]
2018-09-25T17:34:28.844-0700 I CONTROL  [initandlisten] ** WARNING: This server is bound to localhost.
2018-09-25T17:34:28.844-0700 I CONTROL  [initandlisten] **          Remote systems will be unable to connect to this server.
2018-09-25T17:34:28.844-0700 I CONTROL  [initandlisten] **          Start the server with --bind_ip <address> to specify which IP
2018-09-25T17:34:28.844-0700 I CONTROL  [initandlisten] **          addresses it should serve responses from, or with --bind_ip_all to
2018-09-25T17:34:28.844-0700 I CONTROL  [initandlisten] **          bind to all interfaces. If this behavior is desired, start the
2018-09-25T17:34:28.844-0700 I CONTROL  [initandlisten] **          server with --bind_ip 127.0.0.1 to disable this warning.
2018-09-25T17:34:28.844-0700 I CONTROL  [initandlisten]
>
```

## Submitting This Assignment

- Submit a screen shot showing the output of the above commands, run from your terminal

```bash
mongo --version

mongod --version
```
