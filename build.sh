#!/bin/sh
nohup /home/triaguser/elasticsearch-6.3.2/bin/elasticsearch > el.txt &
nohup /home/triaguser/kibana-6.3.2-linux-x86_64/bin/kibana > ki.txt &
nohup npm start > node.txt &
/bin/bash
