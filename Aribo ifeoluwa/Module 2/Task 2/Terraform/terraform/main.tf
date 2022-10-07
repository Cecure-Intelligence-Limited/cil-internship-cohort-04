provider "aws" {
  region  = "us-east-1"
  access_key = "AKIAVDYTXDOZDCEK7PFV"
  secret_key = "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"
}

terraform {
  required_providers {
    aws = {
    source = "hashicorp/aws"
    version = ">= 4.0"
    }
  }
}

resource "aws_vpc" "example" {
  cidr_block = "10.0.0.0/16"
}