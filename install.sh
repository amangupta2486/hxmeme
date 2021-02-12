#!/bin/sh

sed 's/#.*//' requirements.txt | xargs sudo apt-get install

