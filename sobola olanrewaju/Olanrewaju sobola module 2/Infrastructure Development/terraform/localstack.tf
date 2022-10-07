provider "aws" {
  region                      = "eu-west-1"
  access_key                  = "fakekey"
  secret_key                  = "fakekey"
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
  s3_force_path_style         = true

  endpoints {
    lambda         = "http://localhost:4566"
    iam            = "http://localhost:4566"
  }
}