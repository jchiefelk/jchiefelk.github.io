<h4>Universal JavaScript boilerplate built with Express.js, Node.js, React.js, MySQL, React-Router, and bundled with Webpack</h4>

<p>Built using the server-client model; The back-end is handled on a server, while the front-end is rendered on the client. A quality explanation on the differences between rendering the front-end on a server, versus on the client-side, plus the pros and cons of each, is given <a href="https://spin.atomicobject.com/2015/04/06/web-app-client-side-server-side"/>here.</a>
</p>
<p>
Built with react, express, node, and MySQL.  Webpack is used to compile the dependencies and view components into the static JavaScript bundle that is rendered by the client.  The front-end architecture is built to follow the Flux design pattern.  The Flux library is used to build the Store, Actions, and the Dispatcher.  Routing was built with react-router.  
</p>

<p>
Http authentication implemented for database requests, prepared statements implemented for POST/GET requests to protect againts SQL Injection.
</p>

<p>
To launch the development version, clone the repo, then run
</p>

<pre>
cd cointelmob
npm install
npm run build
npm start
</pre>

<p>The dev mode can then be viewed at <a href="http://localhost:3000"/> http://localhost:3000 </a> </p>

<h4>Deploying to Heroku</h4>

<p>To deploy your app to Heroku, go <a href="https://devcenter.heroku.com/articles/heroku-cli">here</a>, for Heroku Cli download instructions.</p>

<p>To run your app you will need to create a Procfile plus a Git.  To learn more about Deploying with Git on Heroku, peep this usefull guide <a href="https://devcenter.heroku.com/articles/git#deploying-code">here.</a>  I've already provided a Procfile
</p>

<p>
Login to Heroku, 
</p>

<pre>
heroku login
</pre>

<p>
Create Heroku app
</p>

<pre>
heroku apps:create your-app-name  
</pre>

<p>
Push to Heroku
</p>

<pre>
git push heroku master
</pre>

<p>
If everything is successfull, Heroku will deploy your Node.js app to https://your-app-name.herokuapp.com
</p>

<p>
We're currently deployed at <a href="https://node-express-react-flux.herokuapp.com/"> https://node-express-react-flux.herokuapp.com/ </a> </p>
