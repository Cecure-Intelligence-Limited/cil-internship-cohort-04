provider "aws" {
  region  = "us-east-1"
  access_key = "My name is Ifeoluwa and i removed my access keys because it poses a security risks"
  secret_key = "My name is Ifeoluwa and i removed my secret keys because it poses a security risks"
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
