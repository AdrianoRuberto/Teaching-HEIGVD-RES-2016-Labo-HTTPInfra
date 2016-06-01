FROM php:5.6-apache

COPY proxy.conf /etc/apache2/sites-available/
RUN a2ensite proxy
RUN a2enmod proxy_http