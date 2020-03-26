const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
// const cors = require('cors');
const path = require('path');

const app = express();
// app.use(cors())
app.use(express.static(path.join(__dirname, '../public')))

app.all('/songData', createProxyMiddleware({ target: 'http://localhost:3001'}));
app.all('/songs', createProxyMiddleware({ target: 'http://localhost:3002'}));
app.all('/api/mainSong', createProxyMiddleware({ target: 'http://localhost:3003'}));
app.all('/api/comments', createProxyMiddleware({ target: 'http://localhost:4001'}));
app.all('/api/tracker', createProxyMiddleware({ target: 'http://localhost:4001'}));
app.all('/api/reply', createProxyMiddleware({ target: 'http://localhost:4001'}));

app.listen(3000, console.log('listening on port 3000'));
