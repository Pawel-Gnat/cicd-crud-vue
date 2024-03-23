resource "aws_s3_bucket" "cicd_catalog" {
  bucket              = "cicd-vue-test"
  bucket_prefix       = null
  force_destroy       = null
  object_lock_enabled = false
  tags                = {}
  tags_all            = {}
}
