# Prerequisite
 - [Node.js 16](https://nodejs.org/en/)

# Development
 - Open root directory in any code editor
 - Run the following command in the root directory.
 ```
  $ npm install
  $ npm run dev
 ```
 - Edit code.

# Production build
 - Run the following command in the root directory
```
  $ npm run build
```
 - Built assets will be compiled in the `dist/` folder

 > NOTE: Opening `index.html` on a web browser will not work due to browser
 > security policy. You will need a web server to serve the content.
 > You can use [http-server](https://github.com/http-party/http-server), a NodeJS HTTP server.
 >
 > Open the `dist/` directory on a terminal and run the following command.
 > ```
 > $ npm install -g http-server
 > $ http-server .
 > ````
 > By default, content is served at [http://localhost:8080](http://localhost:8080)
