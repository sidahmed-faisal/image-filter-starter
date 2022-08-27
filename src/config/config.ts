export const config = {
    "dev": {
      "username": process.env.POSTGRESS_USERNAME,
      "password": process.env.POSTGRESS_PASSWORD,
      "database": process.env.POSTGRESS_DATABASE,
      "host": process.env.POSTGRESS_HOST,
      "dialect": "postgres",
      "aws_region": process.env.AWS_REGION,
      "aws_profile": process.env.AWS_PROFILE,
      "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
    },
    "jwt": {
      "secret": "helloworld"
    },
    "prod": {
      "username": process.env.POSTGRESS_USERNAME,
      "password": process.env.POSTGRESS_PASSWORD,
      "database": process.env.POSTGRESS_DATABASE,
      "host": process.env.POSTGRESS_HOST,
      "dialect": "postgres"
    }
  }
  
  
  // export const config = {
  //   "dev": {
  //     "username": "workdata",
  //     "password": "workdata",
  //     "database": "workdata",
  //     "host": "workdata.czxhvngvmxvp.us-east-1.rds.amazonaws.com",
  
  //     "dialect": "postgres",
  //     "aws_region": "us-east-1",
  //     "aws_profile": "default",
  //     "aws_media_bucket": "workbucklol"
  //   },
  //   "jwt": {
  //     "secret": ""
  //   },
  //   "prod": {
  //     "username": "workdata",
  //     "password": "workdata",
  //     "database": "workdata",
  //     "host": "workdata.czxhvngvmxvp.us-east-1.rds.amazonaws.com",
  //     "dialect": "postgres"
  //   }
  // }
  