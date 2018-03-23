#!/bin/sh

cd client && yarn build && aws s3 sync ./build/ s3://maryland-benefits-hosted-demo
