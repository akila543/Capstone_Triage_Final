#!/bin/sh
cd /home/akila/.jenkins/workspace/Capstone_pipeline
docker-compose build
docker-compose up -d mongodb triag-core
