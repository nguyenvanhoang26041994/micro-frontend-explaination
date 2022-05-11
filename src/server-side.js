const express = require('express');
const path = require('path')
const app = express()
const port = 6001

app.use(express.static('public'));

const MusicSPA = (res) => res.sendFile(path.join(__dirname, '../public/music-app/index.html'));
const ChatAndDocumentApp = (res) => res.sendFile(path.join(__dirname, '../public/chat-app/index.html'));
const LegacyApp = (res) => res.sendFile(path.join(__dirname, '../public/dashboard.html'));

app.get(['/music-app', '/music-app/*'], (req, res) => {
  return MusicSPA(res);
});
app.get(['/chat-app', '/chat-app/*', '/system-guideline', '/system-guideline/*'], (req, res) => {
  return ChatAndDocumentApp(res);
});
app.get(['/legacy-dashboard', '/legacy-dashboard/*'], (req, res) => {
  return LegacyApp(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
