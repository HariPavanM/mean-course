const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
  next();
});


app.use("/api/posts",(req, res, next) => {
  const posts = [{
    id: "ABC1234",
    title: "First server side post",
    content: "This is coming from the server"
  },
  {
    id: "XYZ5678",
    title: "Second server side post",
    content: "This is coming from the server !!"
  }];

  return res.status(200).json({
  message: 'posts fetched sucessfully',
  posts: posts
  });
})

module.exports = app;
