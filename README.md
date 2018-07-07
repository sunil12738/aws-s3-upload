# aws-s3-upload
A package to upload folders (maintaining folder structure) to aws3 in javascript

## How to use

#### To configure AWS, we need the following values as a form of environment variables

- S3_BUCKET_NAME: AWS S3 bucket name where folder is to be uploaded
- AWS_ACCESS_KEY_ID: Access Id
- AWS_SECRET_ACCESS_KEY: Secret Key
- REGION: S3 bucket region
- FOLDER_NAME: Folder name to be uploaded (optional: It can be passed as parameter while calling the function)  

#### Example

```
const s3Upload = require("aws-s3-upload")
s3Upload("foldername") //Make sure to update the envs before using it
```

#### What happends in case of error

The process will exit(process.exit(1)) in case no directory is specified or some error happens while uploading  

#### Upcoming features in next releases

- Show statistics of total files, successful uploads and errored uploads
- Support for file upload
- Support for file/folder upload present in different location other than current directory
