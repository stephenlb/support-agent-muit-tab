# Host OS Setup
FROM python:3.9-alpine
RUN apk update
RUN apk add openssl
RUN apk add zsh
RUN apk add openssl-dev

## Start Webserver Port
ENTRYPOINT ["/root/website/webserver/generate.sh"]
