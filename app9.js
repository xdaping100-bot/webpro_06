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


let subjects = [
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
  res.render('subject', {data: subjects} );
});

// Create
app.get("/subject/create", (req, res) => {
  res.redirect('/public/subject_add.html');
});

// Create
app.post("/subject", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = subjects.length + 1;
  const title= req.body.title;
  const teacher = req.body.teacher;
  const room_number = req.body.room_number;
  const days = req.body.days;
  subjects.push( { id: id, title: title, teacher: teacher, room_number: room_number, days: days } );
  res.redirect('/subject');
});

// Read
app.get("/subject/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = subjects[ number ];
  res.render('subject_detail', {id: number, data: detail} );
});

// Edit
app.get("/subject/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = subjects[ number ];
  res.render('subject_edit', {id: number, data: detail} );
});

// Update
app.post("/subject/update/:number", (req, res) => {
    const number = req.params.number;
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  subjects[req.params.number].code = req.body.code;
  subjects[req.params.number].teacher = req.body.teacher;
  subjects[req.params.number].room_number = req.body.room_number;
  subjects[req.params.number].days = req.body.days;
  res.redirect('/subject' );
});

// Delete
app.get("/subject/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  subjects.splice( req.params.number, 1 );
  res.redirect('/subject' );
});

let story = [
  { id:1, ep_number:1, title:"「カイマン」", summary:"魔法でトカゲ頭にされた記憶喪失の男カイマンが，元の姿に戻るため相棒と「魔法使い狩り」に奔走する姿が描かれます．口の中の謎の男に相手を判別させる異様な戦闘をこなしつつ，大好物のギョーザを楽しむ奇妙な日常が始まります．" },
  { id:2, ep_number:2, title:"「袋の中」,「食事中はお静かに」,「隣の町の魔法使い」", summary:"魔法でトカゲ頭にされた男カイマンが，自身の呪いを解く手がかりを求めて相棒のニカイドウと魔法使いの世界へ乗り込みます．そこで二人は，死者を蘇らせる魔法を持つ恵比寿やその仲間たちと激しい戦いを繰り広げます．" },
  { id:3, ep_number:3, title:"「死者の夜ーー決闘！ 中央デパート前ーー」", summary:"年に一度，死者が蘇るホールの怪現象「リビングデッド・デイ」が舞台となり，カイマンとニカイドウは賞品目当てにゾンビ退治へ繰り出します．一方で，カイマンの正体を追う魔法使いの殺し屋，心と能井もホールへ降り立ち，ついに両陣営が激突する一触即発の事態へと発展します．" },
  { id:4, ep_number:4, title:"「鴨のロースト魔法使い添え」,「舞踏会へは正装でおこしくださいませ」,「ゆく年くる年in ホール」", summary:"カイマンの正体を追う殺し屋の心と能井が，ついにカイマン・ニカイドウコンビと対峙し，魔法と肉弾戦が入り乱れる凄惨な死闘が繰り広げられます．追い詰められたニカイドウが隠していた実力の一端を見せる一方で，カイマンの口の中の男についても新たな謎が浮かび上がり，両者の因縁がより深く交錯し始めます．" },
  { id:5, ep_number:5, title:"魔法使いの国のカイマン", summary:"負傷したカイマンの治療のために訪れた「中央病院」で，魔法の被害者を専門に診るカスカベ博士が登場し，カイマンの過去に繋がる重要な手掛かりが示されます．一方、，法使いの世界ではボスの煙が自身の過去を振り返り，キノコを操る圧倒的な魔力とその冷酷な支配体制のルーツが明かされます．" },
  { id:6, ep_number:6, title:"「キノコの山は食べ盛り」,「はじめてのケムリ」,「マンホール哀歌」", summary:"カイマンの正体を知るかもしれない人物「栗鼠（リス）」を追って，カスカベ博士やニカイドウと共に魔法使いの世界へ再び潜入するエピソードが描かれます．一行は手掛かりを求めて，煙が主催する大規模なパーティーに紛れ込みますが，そこでニカイドウは自身の隠された過去と向き合う危機に直面します．" },
  { id:7, ep_number:7, title:"「オールスター⭐️夢の球宴」", summary:"魔法使いの世界でバラバラになった一行でしたが，ニカイドウはついに煙に捕まり，自らが「時を操る魔法使い」であることを隠して生きてきた過去と向き合うことになります．煙は彼女の希少な能力を独占しようと強引にパートナー契約を迫り，カイマンは親友を救い出すために煙の巨大な屋敷へと決死の突入を試みます．" },
];

// 一覧
app.get("/anime", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('anime', {data: story} );
});

// Create
app.get("/anime/create", (req, res) => {
  res.redirect('/public/anime_add.html');
});

// Create
app.post("/anime", (req, res) => {
  const id = story.length + 1;
  const ep_number= req.body.ep_number;
  const title = req.body.title;
  const summary = req.body.summary;
  story.push( { id: id, ep_number: ep_number, title: title, summary: summary } );
  res.redirect('/anime');
});

// Read
app.get("/anime/:number", (req, res) => {
  const number = req.params.number;
  const detail = story[ number ];
  res.render('anime_detail', {id: number, data: detail} );
});

// Edit
app.get("/anime/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = story[ number ];
  res.render('anime_edit', {id: number, data: detail} );
});

// Update
app.post("/anime/update/:number", (req, res) => {
    const number = req.params.number;
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  story[req.params.number].ep_number = req.body.ep_number;
  story[req.params.number].title = req.body.title;
  story[req.params.number].summary = req.body.summary;
  res.redirect('/anime' );
});

// Delete
app.get("/anime/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  story.splice( req.params.number, 1 );
  res.redirect('/anime' );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));