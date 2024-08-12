# ORDO Surabaya Frontend Skill Test
This project is created to complete assignment of Skill Test at ORDO Surabaya Frontend Developer.

# What are Inside This Project?
- Laravel
- Inertia JS
- SASS

# Note
1. No specific .env setup needed, it's using init .env
2. The website only optimized for 1440px & 1920px dekstop/laptop width

# PHP Version
This project was built in PHP 8.2

# How to Run This Project?
## Step 1 (The JS)
## Using Bun
```
$ bun install
$ bun dev
```

## Using Yarn
```
$ yarn install
$ yarn dev
```

## Step 2 (The PHP)
## Using Composer & PHP Artisan
```
$ composer install
$ cp .env.example .env
$ php artisan key:generate
$ php artisan migrate
$ php artisan serve
```

## Step 3
Access ``http://localhost:8000``
