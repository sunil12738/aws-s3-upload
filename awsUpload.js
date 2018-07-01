const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

AWS.config.update({
	region: process.env.REGION,
});

s3 = new AWS.S3({
  "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
  "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadParams = { Bucket: process.argv[3], Key: '', Body: '' };

function upload(file, filepath) {
	if (!file) {
		uploadParams.Bucket = process.argv[3] + "/" + filepath + "/"
		s3Upload(uploadParams)
		return
	}
	const newFilePath = filepath + "/" + file
	const fileStream = fs.createReadStream(newFilePath);
	fileStream.on('error', function(err) {
	  console.log('File Error', err);
	});
	uploadParams.Bucket = process.argv[3] + "/" + filepath
	uploadParams.Body = fileStream;
	uploadParams.Key = path.basename(newFilePath);
	s3Upload(uploadParams)
	return
}

function s3Upload(uploadParams) {
	s3.upload (uploadParams, function (err, data) {
	  if (err) {
	    console.log("Error", err);
	    process.exit(1);
	  } if (data) {
	    console.log("Upload Success", data.Location);
	  }
	});
}

module.exports = upload
