const dotenv = require("dotenv");
const express = require("express");

const app = express();
dotenv.config();
const port = 3000;

var AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.aws_access_key_id,
  secretAccessKey: process.env.aws_secret_access_key,
  region: "ap-northeast-2",
});

// const ec2 = new AWS.EC2();
// ec2
//   .describeInstanceStatus()
//   .promise()
//   .then((data) => {
//     console.log("EC2 : ", JSON.stringify(data, null, 2));
//   });

//* 버킷 목록 가져오기
const s3 = new AWS.S3();
s3.listBuckets() // s3 버킷 정보 가져오기
  .promise() // 메소드를 프로미스 객체화
  .then((data) => {
    console.log("S3 : ", JSON.stringify(data, null, 2));
  });

//axios테스트
https: app.get("/test", (req, res, next) => {
  res.json("data from back");
});

app.listen(port, () => console.log("Server is running on : " + port));
