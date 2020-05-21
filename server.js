const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());

app.use(express.static('client/build'));
app.get('/videourl', (req,res) => {
var URL = req.query.URL;
console.log(URL);
var title="video.mp4";

ytdl.getInfo(URL, (err, info) => {
    
    res.send(info);
    console.log(info);
    });
// res.header('Content-Disposition', `attachment; filename=${title}`);

// ytdl(URL, {
//     format: 'mp4'
//     }).pipe(res);
});

// app.get('/download',(req,res) => {
//     let videoUrl = req.query.videourl;
//     let videotitle= req.query.videotitle;
//     res.header('Content-Disposition', `attachment; filename=${videotitle}`);
//     // res
// })

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    
});


app.listen(process.env.PORT || 5000, () => {
    console.log('Server Works !!! At port 5000');
});