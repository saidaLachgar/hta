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



Error : Object of class App\\Entity\\MediaObject could not be converted to string
Fix : add string or remove from logs

Error : method not found
Fix : remove last slash from url

Error : Error: x EntityAction guard for "[x] ...": payload has a missing or invalid entity key 
Fix : add group annotations




How to grant access in front?
    on login get user role from token which can be only (super_admin,admin,user)
    send a new request to get the user's groupe ( using find by name )
    store groupe in local storage
        use ng guard to tell if a route can be accessed or not
        you should add a validation foreach item in the menu if it can be accessed or not
How to grant api by role dynamically?
    in the api u can do something like (user.groupe.roles as json) contains current entity also current method (add,delete....)
How to update stored roles for each user :
    set authz for each REST api in backend
    if gets an authz error (in front interceptor) 
        -> refresh the user's token (which will get a new roles to the front)
        -> refresh page
        -> show a toast of something went wrong

The changes may tak a while to be effected
For having the permission changes immediately reflected, the user should logout and re-authenticate, otherwise the changes will be effected when the user is Unauthorized or denied from accessing an interface or when it session end which will take approximately one hour

https://nehalist.io/logging-events-to-database-in-symfony/
07:58 x download monolog bundel
09:10 x create monolog.yml file config > package
12:52 x create Monolog handler php src > utlity
15:26 x create new entity log
15:45 : update services.yaml > config
01:40 : create dbprocessor > utillity


🧶 Checklist
  Dev. Backend
      - Create entity
      - __string + constant vars
      - grant access of REST methods + api filter
  Inté Frontend
      - HTML, component, service, routing, model
      - menu.ts (url)
      - access.ts (access value ex : logs_show)
      - pages-routing.module.ts (model)
      - entity-metadata.ts (entity name)


🧵 A fixer
  Urgent
    - Departement CRUD should have multiple team to choose
    - fix DATE filter -> api platform   (logs, postes )
  Normale
    - Token session refresh?!
    - Communes toggle form text (edit/add)
    - wrong password error
    - toggle password show -> login
    x menu active elm
    - check breadcrumbs + form titles + authService.isAuthorized links


🎈 A FAIR
    x authorized menu items
    x users
    x history
    ~ Departement
      x crud 
      - Long aérien / LP ( original ) + total of each post length
    x teams
    x Commune
    x poste de distribution (designation, xDépart, origine, MLE, P KVA, Nb clients, xCommune, Date MST)
    x Appareils coupeur (titre, depar(many to one), postes(many to many))
    - visites au sol
    - anomalies
    - travaux/inteription (deprtement, Appareils coupeur, ps, datetime depart/end,type de travaux, Causes, list anomalies )
    

🎁 A AMÉLIORER 
  - add update && delete actions in view (details)
  - password toggle -> user update/add
  - disable submit buttons while it's loading
  - add symfony index to entities
  - permissions list to a table 


⚽ FAST TODOs
  x update depars to a real names chichawa..
  x do u really need the service getters? only for validation






SELECT 
t.id, t.departement_id,	t.appareil_id, t.ps_id, t.date_start,t.type,t.causes,
-- get Duration
timediff(date_end,date_start) as `DIFF`,
time_format((select DIFF),'%H:%i:%s') as `Duration`,
-- time_format((select DIFF),'%H') * 1 as "Hours",
TIME_TO_SEC((select DIFF)) as "Seconds",
(SELECT sum(nb_clients) FROM poste as p1 WHERE p1.departement_id= d.id) as "CC",

CASE
    -- depar & endTime are null
    WHEN date_end IS Null or t.departement_id IS Null THEN NULL
    -- source IS NULL & ps IS NULL
    WHEN t.appareil_id IS Null and t.ps_id IS Null THEN (SELECT CC)
    -- source NOT NULL & ps IS NULL
    WHEN t.appareil_id IS NOT Null and t.ps_id IS Null THEN 
        (SELECT sum(nb_clients) FROM poste as p2 
        LEFT JOIN  appareil_coupeur_poste ap ON p2.id = ap.poste_id 
        WHERE p2.departement_id = d.id 
        AND ap.appareil_coupeur_id = t.appareil_id )
        -- source IS NULL & ps NOT NULL
    WHEN t.appareil_id IS Null and t.ps_id IS NOT Null THEN 
        (SELECT sum(nb_clients) FROM poste as p2 
        WHERE p2.departement_id = d.id 
        AND p2.id NOT IN (
            SELECT poste_id from appareil_coupeur_poste where appareil_coupeur_id = t.ps_id
        ))
    -- source NOT NULL & ps NOT NULL
    ELSE 
        (SELECT sum(nb_clients) FROM poste as p2 
        LEFT JOIN  appareil_coupeur_poste ap ON p2.id = ap.poste_id 
        WHERE p2.departement_id = d.id 
        AND ap.appareil_coupeur_id = t.appareil_id 
        AND p2.id NOT IN (
            SELECT poste_id from appareil_coupeur_poste where appareil_coupeur_id = t.ps_id
        ))
    END as "CI",
-- CALC
((SELECT Seconds) * (SELECT CI) / (SELECT CC * 3600)) as `DMS`

-- Anomalies
-- sum(case CATEGORY when 'Shirt' then STOCK else 0 end) as `Anomalies`
-- sum(case CATEGORY when 'Shirt' then STOCK else 0 end) as `Anomalies`

FROM `travaux` as t
LEFT JOIN  departement d ON t.departement_id = d.id 
-- LEFT JOIN  appareil_coupeur ap1 ON appareil_id = d.id AND
-- LEFT JOIN  appareil_coupeur ap2 ON ps_id = d.id








where date_end is not null


-- Do not calc when date_end && depart is null
-- if 

-- on presist
    -- set the value of depar if depar is null but one of the ps or source(apprai) is set







SELECT sum(nb_clients) FROM poste as p2 
LEFT JOIN  appareil_coupeur_poste ap ON p2.id = ap.poste_id 
WHERE p2.departement_id = 26 
AND ap.appareil_coupeur_id = 4 
AND ap.appareil_coupeur_id NOT IN (3)



SELECT sum(nb_clients) FROM poste as p2 
LEFT JOIN  appareil_coupeur_poste ap ON p2.id = ap.poste_id 
WHERE p2.departement_id = 26 
AND ap.appareil_coupeur_id = 4 
AND p2.id NOT IN (
    SELECT poste_id from appareil_coupeur_poste where appareil_coupeur_id = 3
)



SELECT ac.id,ac.titre,p.id, p.designation FROM `appareil_coupeur_poste` as ap
LEFT JOIN  poste p ON ap.poste_id = p.id 
LEFT JOIN  appareil_coupeur ac ON ap.appareil_coupeur_id = ac.id


SELECT * FROM poste as p2 
LEFT JOIN  appareil_coupeur_poste ap ON p2.id = ap.poste_id 
WHERE p2.departement_id = 26 ORDER BY ap.appareil_coupeur_id
-- AND ap.appareil_coupeur_id NOT IN (3)

SELECT * FROM poste as p2 
WHERE p2.departement_id = 26 
AND p2.id NOT IN (
    SELECT poste_id from appareil_coupeur_poste where appareil_coupeur_id = 3
)




-- get CI
(SELECT sum(nb_clients) FROM poste as p1 WHERE p1.departement_id= d.id) as `CC`,
-- if ps and ap has not set and 
-- (CASE WHEN ps_id is null then CC else   
(
SELECT sum(nb_clients) FROM poste as p2 
LEFT JOIN  appareil_coupeur_poste ap ON p2.id = ap.poste_id 
WHERE p2.departement_id = d.id 
AND ap.appareil_coupeur_id = t.appareil_id 
AND p2.id NOT IN (
    SELECT poste_id from appareil_coupeur_poste where appareil_coupeur_id = t.ps_id
)) as `CI`,
-- END) as `CI`,