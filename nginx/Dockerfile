FROM nginx:1.17

RUN groupadd 1000
RUN usermod -g 1000 nginx

RUN chown -R nginx:nginx /var/cache/nginx
RUN chown -R nginx:nginx /var/run
RUN chown -R nginx:nginx /run
RUN chown -R nginx:nginx /var/log/nginx

RUN mkdir /var/www

RUN chown -R nginx:1000 /var/www
RUN chmod -R 775 /var/www

USER nginx

EXPOSE 8080
