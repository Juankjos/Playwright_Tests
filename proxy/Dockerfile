FROM nginx:1.22.0-alpine AS builder
RUN apk update && apk upgrade && apk add --no-cache --virtual .build-deps git gcc libc-dev make openssl-dev pcre-dev zlib-dev linux-headers curl gnupg libxslt-dev gd-dev geoip-dev curl
RUN curl "https://nginx.org/download/nginx-1.22.0.tar.gz" -o nginx.tar.gz && mkdir -p /usr/src
COPY ./ngx_upstream_jdomain /usr/src/ngx_upstream_jdomain
RUN tar -zxC /usr/src -f nginx.tar.gz
RUN cd /usr/src/nginx-1.22.0 && ./configure --with-compat $CONFARGS --add-dynamic-module=/usr/src/ngx_upstream_jdomain
RUN cd /usr/src/nginx-1.22.0 && make modules
FROM nginx:1.22.0-alpine
COPY --from=builder /usr/src/nginx-1.22.0/objs/ngx_http_upstream_jdomain_module.so /usr/local/nginx/modules/objs/ngx_http_upstream_jdomain_module.so
# COPY ./config/nginx.conf /etc/nginx/nginx.conf
