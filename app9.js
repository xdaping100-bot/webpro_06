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

app.listen(8080, () => console.log("Example app listening on port 8080!"));