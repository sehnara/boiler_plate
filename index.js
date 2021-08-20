const express = require('express');
const app = express();
const bbpp = require('body-parser');
const port = 5000;

const config = require("./config/key");

const {User} = require("./models/User");
app.use(bbpp.urlencoded({extended:true})); // 클라이언트에서 오는 정보를 서버에서 분석하도록
app.use(bbpp.json()); // json 타입의 정보를 분석할 수 있도록

const mongoose = require("mongoose");
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>console.log("mongoDB connection....")).catch(err => console.log(err));



app.get('/', (req, res) => {
  res.send('Hello World 강세훈 dddd');
});

app.post('/register', (req, res)=>{

  // 회원가입할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.

  const user = new User(req.body);
  user.save((err, userInfo) =>{
    if(err) return res.json({success : false, err})
    return res.status(200).json({
      success : true
    })
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
