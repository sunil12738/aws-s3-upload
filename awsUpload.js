const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

AWS.config.update({region: 'us-west-2'});

s3 = new AWS.S3({
  "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
  "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadParams = {Bucket: process.argv[3], Key: '', Body: ''};

function upload(file, fpath, fileStatus) {
	const newFilePath = fpath + "/" + file
	const fileStream = fs.createReadStream(newFilePath);
	fileStream.on('error', function(err) {
	  console.log('File Error', err);
	});
	uploadParams.Bucket = process.argv[3] + "/" + fpath
	uploadParams.Body = fileStream;
	uploadParams.Key = path.basename(newFilePath);
	s3.upload (uploadParams, function (err, data) {
	  if (err) {
	    process.exit(1);
	    console.log("Error", err);
	  } if (data) {
	    console.log("Upload Success", data.Location);
	  }
	});
	return fileStatus
}

module.exports = upload
