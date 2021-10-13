const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 8000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

db.once('open', () => {
  startApolloServer();
});






// const express = require('express');
// const { ApolloServer } = require ('apollo-server-express');
// const path = require('path');
// const  {typeDefs, resolvers } = require ('./schemas')
// const db = require('./config/connection');
// //from the starter code
// //const routes = require('./routes');
// const PORT = process.env.PORT || 3001;
// const app = express();



// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const startApolloServer = async () => {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });
//   await server.start();
//   server.applyMiddleware ({ app }); 
//   app.listen(PORT, () => {
//     console.log(`API server running on port: ${PORT}`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// }


// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// // });

// // from the starter code
// //app.use(routes);

// db.once('open', () => {
//   startApolloServer();
// });


// //using  unit 21 activity 20 as a template for this