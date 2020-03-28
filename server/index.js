const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
// const cors = require('cors');
const path = require('path');

const app = express();
// app.use(cors())
app.use(express.static(path.join(__dirname, '../public')))

app.all('/songData', createProxyMiddleware({ target: 'http://ec2-54-219-75-95.us-west-1.compute.amazonaws.com:3001/'}));
app.all('/songs', createProxyMiddleware({ target: 'http://ec2-52-53-195-134.us-west-1.compute.amazonaws.com/'}));
app.all('/api/mainSong', createProxyMiddleware({ target: 'http://ec2-18-144-8-70.us-west-1.compute.amazonaws.com:3003/'}));
app.all('/api/comments', createProxyMiddleware({ target: 'http://ec2-18-144-133-175.us-west-1.compute.amazonaws.com:4001/'}));
app.all('/api/tracker', createProxyMiddleware({ target: 'http://ec2-18-144-133-175.us-west-1.compute.amazonaws.com:4001/'}));
app.all('/api/reply', createProxyMiddleware({ target: 'http://ec2-18-144-133-175.us-west-1.compute.amazonaws.com:4001/'}));

app.listen(3000, console.log('listening on port 3000'));
