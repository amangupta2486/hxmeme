#!/bin/sh

uvicorn main:app --host=0.0.0.0 --port=${PORT:-8081} --reload
