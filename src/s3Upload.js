const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const awsConsts = require("./consts")
const getContentType = require("./getContentType")

AWS.config.update({
  region: awsConsts.region,
});

s3 = new AWS.S3({
  "accessKeyId": awsConsts.accessKeyId,
  "secretAccessKey": awsConsts.secretAccessKey,
});

const uploadParams = {
  Bucket: awsConsts.s3BucketName,
  Key: '',
  Body: ''
};

function upload(file, fileLocation) {
  const fileUploadLocation = awsConsts.s3BucketName + "/" + fileLocation
  if (!file) {
    uploadParams.Bucket = fileUploadLocation + "/"
    s3Upload(uploadParams)
    return
  }
  const filePath = fileLocation + "/" + file
  const fileStream = fs.createReadStream(filePath);
  fileStream.on('error', function(err) {
    console.log('File Error', err);
    process.exit(1);
  });
  uploadParams.Bucket = fileUploadLocation
  uploadParams.Body = fileStream;
  uploadParams.Key = path.basename(filePath);
  const contentType = getContentType(uploadParams.Key)
  if (contentType) {
    uploadParams.ContentType = contentType
  }
  s3Upload(uploadParams)
  return
}

function s3Upload(uploadParams) {
  s3.upload (uploadParams, function (err, data) {
    if (err) {
      console.log("Error", err);
      process.exit(1);
    }
    if (data) {
      console.log("Upload Success", data.Location);
    }
  });
}

module.exports = upload
