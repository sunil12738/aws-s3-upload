module.exports = {
  s3BucketName: process.env.S3_BUCKET_NAME,
  // s3BucketPath: process.env.S3_BUCKET_PATH,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  folderNameToUpload: process.env.FOLDER_NAME,
  region: process.env.REGION,
}