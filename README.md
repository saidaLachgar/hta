## APP VERSION
    SYMFONY 5.4 | PHP 7.4 | Angular CLI 13.2

## BACKEND SETUP
    - composer install
    - php bin/console assets:install public
    - php bin/console d:d:c  (abr. doctrine:database:create )

## FRONTEND SETUP 
    - yarn install (install packages --1st time only)
    - yarn run build (run webpack to generate the assets)
    - You can also make webpack listen for changes and compile only what’s needed as you work on your files using: npm run watch

## SERVE CLIENT SIDE
    ng serve --open
> http://localhost:4200/ 

## SERVE SERVER SIDE
    symfony server:start
>http://127.0.0.1:8000

<br>
<br>

Obtain a token for API access:  
`curl -X POST 127.0.0.1:8000/login -d username=admin -d password=admin`

Swagger API Docs http://127.0.0.1:8000/api/


| Username | Password | Roles              |
|----------|----------|--------------------|
| user     | user     | `ROLE_USER`        |
| admin    | admin    | `ROLE_ADMIN`       |
| super    | super    | `ROLE_SUPER_ADMIN` |

<br>

## Symfony CLI
- New Entity
  - php bin/console make:entity
  - php bin/console make:migration
  - php bin/console doctrine:migrations:migrate
  
- New Admin
  - php bin/console make:sonata:admin
  
- Clear cache
  - php bin/console cache:clear

- Update database structure
  - php bin/console d:s:u --dump-sql  (shows queries that will execute)
  - php bin/console d:s:u --force (update db)
  - php bin/console d:s:u --complete --force (update db and removed tables and columns)
  - php bin/console d:d:d --force   ( doctrine:database:drop )
  - php bin/console d:s:u --force   ( doctrine:database:update )

- Show all routes
  - php bin/console debug:router  

- Remove bundle
  - composer remove (name of bundle)

## Angular CLI
- Code scaffolding
  - Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
- Build
  - Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
- Running unit tests
  - Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Running end-to-end tests
  - Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

    g : generate
    c : component
    m : module
    npm install -g @angular/cli           // install angular globally      
    ng new client                         // install a new angular app     
    ng serve --open                       // serve the new angular app     
    ng set --global packageManager=yarn   // swatch to yarn instead of npm
    ng g m shared --routing               // create a A Shared Module is used to organize a set of commonly used pieces into one module and export them to any module that imports the Share Module 
    ng g c shared/components/compoName --module shared // create a shared compos
    source-map-explorer dist/skote/main.3d439155b7914070.js