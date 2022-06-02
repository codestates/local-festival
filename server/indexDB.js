var request = require("request");
const dotenv = require('dotenv');
const config = require('./config/config');
dotenv.config();

var options = {
  method: "GET",
  url: "http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?serviceKey=stO4X3mcQKt4qoziL2sU1zxc2WkmZ3hmKg6wA6Ofi50vDavjqwvTCBPasarXjMPuRaUXMy0S1ERW8HX6KVOuFQ%3D%3D&numOfRows=400&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&listYN=Y&eventStartDate=20170901&_type=json",
  headers: {},
};

const mysql = require("mysql");

const connection = mysql.createConnection(
config[process.env.NODE_ENV || 'development']
);

function addslashes(string) {
  if(string){
    return string.replace(/\\/g, '\\\\').
        replace(/\u0008/g, '\\b').
        replace(/\t/g, '\\t').
        replace(/\n/g, '\\n').
        replace(/\f/g, '\\f').
        replace(/\r/g, '\\r').
        replace(/'/g, '\\\'').
        replace(/"/g, '\\"');
  } else {
    return
  }
}

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  let info = JSON.parse(body)

  // console.log(addslashes(info.response.body.items.item[140]["title"]))

  for (i in info["response"]["body"]["items"]["item"]) {
    let contentid = info["response"]["body"]["items"]["item"][i]["contentid"];
    let title = addslashes(info["response"]["body"]["items"]["item"][i]["title"]);
    // console.log("🚀 ~ file: index.js ~ line 35 ~ title", title)
    let image = info["response"]["body"]["items"]["item"][i]["firstimage"];
    let start_date =
      info["response"]["body"]["items"]["item"][i]["eventstartdate"];
    let end_date = info["response"]["body"]["items"]["item"][i]["eventenddate"];
    let location = info["response"]["body"]["items"]["item"][i]["addr1"];
    let tel = info["response"]["body"]["items"]["item"][i]["tel"];
    
    var options2 = {
      method: "GET",
      url: `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?serviceKey=stO4X3mcQKt4qoziL2sU1zxc2WkmZ3hmKg6wA6Ofi50vDavjqwvTCBPasarXjMPuRaUXMy0S1ERW8HX6KVOuFQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${contentid}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`,
      headers: {},
    };

    request(options2, function (error, response, body) {
      if (error) throw new Error(error);
      let info2 = JSON.parse(body)
      // console.log("🚀 ~ file: index.js ~ line 52 ~ info2", info2)
      let overview= addslashes(info2.response.body.items.item.overview)
      // console.log("🚀 ~ file: index.js ~ line 53 ~ overview", overview)
      let url = addslashes(info2.response.body.items.item.homepage)
      // console.log("🚀 ~ file: index.js ~ line 53 ~ info2.response.body.items.item.homepage", info2.response.body.items.item.homepage)


      
    connection.query(
      `INSERT INTO festival_info (content_id, title, image, start_date, end_date, location, tel, overview, url) VALUES ("${contentid}", "${title}", "${image}", ${start_date},${end_date},"${location}",'${tel}','${overview}','${url}')`,
      (error, rows, fields) => {

        if (error) throw error;
        console.log("local info is: ", rows);
      }
    );
    })
  }
})