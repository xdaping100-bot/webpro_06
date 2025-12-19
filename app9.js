"use strict";
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let album = [
  { id:1, title:"Lasarus", artist:"Kamasi Washington, Bonobo", year:2025, time:"2h2m", price:6800 },
  { id:2, title:"呪術廻戦 懐玉・玉折/渋谷事変", artist:"照井 順政", year:2024, time:"2h21m", price:3600 },
  { id:3, title:"攻殻機動隊 STAND ALONE COMPLEX O.S.T.+", artist:"菅野 よう子", year:2003, time:"1h11m", price:3000 },
  { id:4, title:"Oh!スケトラ!!! ユーリ!!!on ICE", artist:"梅林 太郎, 松司 馬拓, etc", year:2016, time:"1h12m",price:3300 },
  { id:5, title:"TRIGUN STAMPEDE Soundtrack 1", artist:"加藤 達也", year:2023, time:"1h23m", price:9900 },
  { id:6, title:"消滅都市 ORIGINAL SOUNDTRACK", artist:"加藤 浩義", year:2016, time:"1h17m", price:2500 },
  { id:7, title:"天使乃恥部", artist:"菊地 成孔, Pepe・Torment・Azucarar", year:2024, time:"1h6m", price:48000 },
];

// 一覧
app.get("/music", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('music', {data: album} );
});

// Create
app.get("/music/create", (req, res) => {
  res.redirect('/public/music_add.html');
});

// Create
app.post("/music", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = album.length + 1;
  const title= req.body.title;
  const artist = req.body.artist;
  const year = req.body.year;
  const time = req.body.time;
  const price = req.body.price;
  album.push( { id: id, title: title, artist: artist, year: year, time: time, price: price } );
  res.redirect('/music');
});

// Read
app.get("/music/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = album[ number ];
  res.render('music_detail', {id: number, data: detail} );
});

// Edit
app.get("/music/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = album[ number ];
  res.render('music_edit', {id: number, data: detail} );
});

// Update
app.post("/music/update/:number", (req, res) => {
    const number = req.params.number;
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  album[req.params.number].code = req.body.code;
  album[req.params.number].artist = req.body.artist;
  album[req.params.number].year = req.body.year;
  album[req.params.number].time = req.body.time;
  album[req.params.number].price = req.body.price;
  res.redirect('/music' );
});

// Delete
app.get("/music/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  album.splice( req.params.number, 1 );
  res.redirect('/music' );
});


let class = [
  { id:1, title:"論理回路", teacher:"鎌倉 浩嗣", room_number:7103, days:"水曜日" },
  { id:2, title:"技術文書作成", teacher:"信川 創", room_number:3212, days:"木曜日" },
  { id:3, title:"プログラミング言語", teacher:"須田 宇宙", room_number:3212, days:"火曜日" },
  { id:4, title:"言語と文化１ 中国語", teacher:"近衛 飛鳥", room_number:5305, days:"月曜日" },
  { id:5, title:"電気回路", teacher:"東山 幸司，安武 伸俊，丸山 敏毅，鎌田 智之", room_number:8109, days:"金曜日" },
  { id:6, title:"英語表現", teacher:"布川 由美子", room_number:5205, days:"水曜日" },
  { id:7, title:"環境科学概論", teacher:"笠嶋 義夫", room_number:7201, days:"火曜日" },
];

// 一覧
app.get("/subject", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('subject', {data: class} );
});

// Create
app.get("/subject/create", (req, res) => {
  res.redirect('/public/subject_add.html');
});

// Create
app.post("/subject", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = class.length + 1;
  const title= req.body.title;
  const teacher = req.body.teacher;
  const room_number = req.body.room_number;
  const days = req.body.days;
  album.push( { id: id, title: title, teacher: teacher, room_number: room_number, days: days } );
  res.redirect('/subject');
});

// Read
app.get("/subject/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = class[ number ];
  res.render('subject_detail', {id: number, data: detail} );
});

// Edit
app.get("/subject/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = class[ number ];
  res.render('subject_edit', {id: number, data: detail} );
});

// Update
app.post("/subject/update/:number", (req, res) => {
    const number = req.params.number;
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  class[req.params.number].code = req.body.code;
  class[req.params.number].teacher = req.body.teacher;
  class[req.params.number].room_number = req.body.room_number;
  class[req.params.number].days = req.body.days;
  res.redirect('/subject' );
});

// Delete
app.get("/subject/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  album.splice( req.params.number, 1 );
  res.redirect('/subject' );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));