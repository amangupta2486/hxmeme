#!/bin/sh

sed 's/#.*//' requirements1.txt | xargs sudo apt-get install

