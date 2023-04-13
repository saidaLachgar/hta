## APP VERSION
    SYMFONY 5.4 | PHP 7.4 | Angular CLI 13.2

## APP INFOS
    The website is an Electric Power Quality Monitoring System (SQE CMMS). It is a web application that allows users to track and manage the performance of electricity production, transmission, and distribution. The app allows users to monitor and measure the quality of electricity service, including continuity of service, interruption frequency, and downtime. It also allows workers to log and track breakdowns and schedule visits to fix anomalies. Additionally, it allows tracking the monthly objectives of each year, like how many visits they should do, which includes how many kilometers they will cover, and how much equipment they should set up. All data will be stored in a database and can be analyzed and visualized in charts and other forms of analysis.


## BACKEND SETUP
    - composer install
    - php bin/console assets:install public
    - php bin/console d:d:c  (abr. doctrine:database:create )

    mkdir -p config/jwt
    openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096
    openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout
    download openssl on windows : https://stackoverflow.com/a/16263688
## FRONTEND SETUP 
    - yarn install (install packages --1st time only)
    - yarn run build (run webpack to generate the assets)
    - You can also make webpack listen for changes and compile only what’s needed as you work on your files using: npm run watch

## SERVE CLIENT SIDE
> http://localhost:4200

    ng serve --open

## SERVE SERVER SIDE
>http://127.0.0.1:8000
    
    symfony serve
## DATABASE SCHEMA
>https://dbdiagram.io/d/63b9376d7d39e42284e977af

<br>
<br>

Obtain a token for API access:  
`curl -X POST 127.0.0.1:8000/api/login -d username=admin -d password=adminadmin`

`curl -X POST http://127.0.0.1:8000/api/login -H "Content-Type: application/json" -d '{"username":"admin","password":"adminadmin"}'`

| Username | Password    | Roles              |
|----------|-------------|--------------------|
| user     | useruser    | `ROLE_USER`        |
| admin    | adminadmin  | `ROLE_ADMIN`       |
| super    | supersuper  | `ROLE_SUPER_ADMIN` |

<br>

## Symfony CLI
    - Clear cache  - php bin/console cache:clear
    - DB update    - php bin/console d:s:u --force
    - New Entity   - php bin/console make:entity
    - Show routes  - php bin/console debug:router  

    - Remove bundle composer remove (name of bundle)
      d:s:u --dump-sql  (shows queries that will execute)
      d:s:u --complete --force (update db and removed tables and columns)
      d:d:d --force   ( doctrine:database:drop )
      d:s:u --force   ( doctrine:database:update )



## Angular CLI
    - Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
    - Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

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



## COMMON ERRORS
    Error : Object of class App\\Entity\\MediaObject could not be converted to string
    Fix : add string or remove from logs

    Error : method not found
    Fix : remove last slash from url

    Error : Error: x EntityAction guard for "[x] ...": payload has a missing or invalid entity key 
    Fix : add group annotations
        each entity should able to access it own attrs to do that, u add the it group to the field


<BR>

## 🧶 Checklist
  Dev. Backend
      - Create entity + repo
      - __string + constant vars
      - grant access of REST methods + api filter
  Inté Frontend
      - HTML, component, service, routing 
      - model models\index.ts
      - menu.ts (menu label)
      - access.ts (access value ex : logs_show)
      - pages-routing.module.ts (model)
      - entity-metadata.ts (entity name)


































## QUERIES



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





























## ROLES management
https://dev.to/sebastiandg7/how-do-you-handle-role-permissions-updates-with-jwt-3778

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



There are a few ways to detect when an admin has updated a user's role and update it immediately:

    Webhooks: You can set up webhooks on your backend to notify your frontend when a user's role has been updated by an admin. This way, your frontend can immediately update the user's role in local storage without having to send a request to the server.





Here's an example of how you might implement webhooks in your Symfony and Angular application:

    On the Symfony backend, you will need to create a new route for your webhook endpoint. This route should be responsible for receiving the notification when a user's role is updated and sending a notification to the frontend with the updated role information. You can use the Symfony's EventDispatcher component to dispatch an event when a user role is updated and listen to this event in a listener that will be responsible for sending the notification.

    On the Angular frontend, you will need to create a service that will listen for the notification sent by the backend when a user's role is updated. This service should be responsible for updating the user's role in local storage.

    On the Symfony backend, after the admin updates the user's role, you can use the EventDispatcher to dispatch an event with the updated role information.

    On the Angular frontend, your service should listen to the event, extract the updated role information, and update the user's role in local storage.

    Once the user's role is updated in local storage, you can update the UI accordingly to reflect the new role.

It's important to note that you should use secure communication channels such as HTTPS to prevent unauthorized access to your webhook endpoint, validate the request origin and make sure that the webhook request comes from a trusted source.
Also, you can use Symfony's security component to secure your webhook endpoint and make sure that only authenticated and authorized admin users can access it.
Salma Lachgar
write me the script of each step

I will provide you with an example of how you might implement webhooks in your Symfony and Angular application, but please keep in mind that this is just one possible implementation and you should adjust it to fit your specific use case.

    On the Symfony backend:

    Create a new route for your webhook endpoint, for example, '/webhook/user-role-updated'.
    Create a new Event class, for example, 'UserRoleUpdatedEvent' that will hold the updated user's role information.
    Create a new Listener class, for example, 'UserRoleUpdatedListener' that will listen to the 'UserRoleUpdatedEvent' and send a notification to the frontend with the updated role information.
    In the 'UserRoleUpdatedListener' use Symfony's HttpClient to send a HTTP request to the frontend with the updated role information.
    In the controller that handles the user role update, Dispatch the 'UserRoleUpdatedEvent' and pass the updated role information.
    Use Symfony's security component to secure your webhook endpoint and make sure that only authenticated and authorized admin users can access it.

    On the Angular frontend:

    Create a new service, for example, 'UserRoleService' that will listen for the notification sent by the backend when a user's role is updated.
    In the 'UserRoleService', create a method, for example, 'listenForUpdates' that will listen to the notification and extract the updated role information.
    In the 'listenForUpdates' method, use the Angular's HttpClient to listen to the notification from the backend.
    After extracting the updated role information, update the user's role in local storage using Angular's local storage.
    Once the user's role is updated in local storage, you can update the UI accordingly to reflect the new role.

It's important to note that you should use secure communication channels such as HTTPS to prevent unauthorized access to your webhook endpoint, validate the request origin and make sure that the webhook request comes from a trusted source.
Also, you can use Symfony's security component to secure your webhook endpoint and make sure that only authenticated and authorized admin users can access it.

Please note that this is just an example, you should adjust it to fit your specific use case, and it might not be complete and may require additional steps.







I will provide you with an example of how you might implement webhooks in your Symfony and Angular application, but please keep in mind that this is just one possible implementation and you should adjust it to fit your specific use case.

    On the Symfony backend:

    Create a new route for your webhook endpoint, for example, '/webhook/user-role-updated'.
    Create a new Event class, for example, 'UserRoleUpdatedEvent' that will hold the updated user's role information.
    Create a new Listener class, for example, 'UserRoleUpdatedListener' that will listen to the 'UserRoleUpdatedEvent' and send a notification to the frontend with the updated role information.
    In the 'UserRoleUpdatedListener' use Symfony's HttpClient to send a HTTP request to the frontend with the updated role information.
    In the controller that handles the user role update, Dispatch the 'UserRoleUpdatedEvent' and pass the updated role information.
    Use Symfony's security component to secure your webhook endpoint and make sure that only authenticated and authorized admin users can access it.

    On the Angular frontend:

    Create a new service, for example, 'UserRoleService' that will listen for the notification sent by the backend when a user's role is updated.
    In the 'UserRoleService', create a method, for example, 'listenForUpdates' that will listen to the notification and extract the updated role information.
    In the 'listenForUpdates' method, use the Angular's HttpClient to listen to the notification from the backend.
    After extracting the updated role information, update the user's role in local storage using Angular's local storage.
    Once the user's role is updated in local storage, you can update the UI accordingly to reflect the new role.

It's important to note that you should use secure communication channels such as HTTPS to prevent unauthorized access to your webhook endpoint, validate the request origin and make sure that the webhook request comes from a trusted source.
Also, you can use Symfony's security component to secure your webhook endpoint and make sure that only authenticated and authorized admin users can access it.

Please note that this is just an example, you should adjust it to fit your specific use case, and it might not be complete and may require additional steps.


import export 

[https://ghaidabouchala.medium.com/import-excel-data-in-the-database-symfony-back-end-e14efea51cd2](https://ghaidabouchala.medium.com/import-excel-data-in-the-database-symfony-back-end-e14efea51cd2)

programme de l’annee 5jrs

History tracking user changes 5jrs

PWA ( working offline ) 5jrs

[Convert Application to a Native Mobile App](https://betterprogramming.pub/how-to-convert-your-angular-application-to-a-native-mobile-app-android-and-ios-c212b38976df)

gestion des errors 404 500


## TODAY'S Goal

* [ ] 3 Fix bug date order travaux
* [ ] 1 Create and add new not working
* [ ] find a way to combine edit of all travaux of that day
* [ ] 1 Nb Support km table?
    * get total of kilometers based on the selected transome
* [ ] 4 Resticture schema

***

## Traveaux 🔧

* [ ] 🐞 order by date > depar > time
* [ ] 🐞 Create and add new not working
* [ ] 0 total des anomalies of that trancon
* [ ] 3 filter inters by depar
* [ ] 3 remove departement from entity and get it from app>tronçon>depar
    * [ ] remove them from depar entity too

***

## Visites 🧢

* [ ] 1 Nb Support km table?
* [ ] 3 filter visit teams by chosen depar
* [ ] 0 total anomalies of that date only
* [ ] 3 filter inters by depar
* [ ] 3 remove departement from entity and get it from app>tronçon>depar
    * [ ] remove them from depar entity too

***

## Anomalies💥

* [ ] CRUD
    * select transome
* [ ] Add to visites && traveaux (inspiration ACF)

***

## Departement 📍

* [ ] 3 Long aérien / LP ( original ) + total of each post length

***

## Trançones ⚡

* [ ] 3 Add columns depr AppareilCoupeur (source - destination)

***

## Appareil Coupeur 💈

* [ ] 3 remove departement from entity and get it from tronçon>depar
    * [ ] remove them from depar entity too
    * [ ] associate it with troncon instead

***

## Poste distribution 📮

* [ ] 3 remove departement from entity and get it from app>tronçon>depar
    * [ ] remove them from depar entity too

***

## Suivi de realisation - objectives 🎯

* Visite au sol (Km) -> all visites of this year
* Visite montée (Support) -> all visites with anomlies all complated
* other data can get from the traveux which is how many time were selected from form
    * add all items in XLS as checkboxes in traveux form

***

## Statistiques🧮

#### home

* [ ] 5 nombre inturuption

#### visites

* [ ] 5 Get total kms of a transom -> show it in the table (Nb Support)
* [ ] 5 Get count of visites for each commune of the current year ++ add this in communes list
* [ ] 5 Get count of Distance parcourue for this year and this month
* [ ] 5 Get total visites of this year

#### Traveaux

* [ ] 2 Total des interruptions (year and month)
* [ ] 3 Get avrange interpution time (year and month)
* [ ] 2 Get count of interpution foreach cause (year and month)
* [ ] 2 Get total in interpution foreach type (year and month)
* [ ] 0 Total anomalies show only undone
* [ ] 0 Travauex column ++ taux de realisation 23/40 anomalies
* [x] get **SUM DMS** values of each month of this year then per year (<strong>incidents only</strong>)
    * [x] DMS for each team
    * [x] super admin can see all curves
    * [x] users see thier curve only
    * [x] yearlly DMS total one value -> super admin only

***

## Users permissions 🔑

* [ ] menu
* [ ] actions
* [ ] charts

***

## Logs 📣

* [x] log list fill users dropdown

***

## Users 👷🏻‍♂️

* [ ] add password generator
* [ ] copy login info
* [ ] password toggle -> user update/add
* [ ] 5 Remember me
* [ ] 3 remove unautherized links from menu
* [ ] 3 user returnUrl when logged out to back to page

***

🧵 A fixer

* check breadcrumbs + form titles + authService.isAuthorized links
* tester log traveux name to string
* fix profile? checkbox user permistions

🎁 A AMÉLIORER

* add update && delete actions in view (details)
* disable submit buttons while it's loading
* permissions list to a table
* save form searched values
* logo mobile + tables

***

<br>
## Today's achievements ✨

| day 1 | day 2 | day 3 | day N | day 13 |
| ----- | ----- | ----- | ----- | ------ |
| reorder rows | clone item( inte ) | dive into search graph |  |  |
| merge cells | trançones crud | updating tasks foreach schema update |  |  |
| clone item (dev) | restruct schema |  |  |  |

***

## Priority

```
CRUD (anomalies - objectives - transomes - missing fields - background process (merge) )
import / export
analitics
les améliorations (fixes, users, a améliorer)
```

***

## ARCHIVES

```
RESTRICT statistics route on the backend using security yml
Département → Départ —— declenchment → incident —— source → point coupure —— ps → PS
Coupeur n'apas des Causes
travaux → all anomalies of transome -> same date same transome ??!
visit -> anomalies of that day
```

$towers = array(
    (object)array('id' => 'tower1', 'name' => 'Tower 1'),
    (object)array('id' => 'tower2', 'name' => 'Tower 2'),
    (object)array('id' => 'tower3', 'name' => 'Tower 3'),
    (object)array('id' => 'tower4', 'name' => 'Tower 4'),
    (object)array('id' => 'tower5', 'name' => 'Tower 5'),
    (object)array('id' => 'tower6', 'name' => 'Tower 6'),
    (object)array('id' => 'tower7', 'name' => 'Tower 7'),
);

$fragments = array(
    (object)array('from_tower' => 'tower1', 'to_tower' => 'tower2', 'distance' => 5),
    (object)array('from_tower' => 'tower2', 'to_tower' => 'tower3', 'distance' => 10),
    (object)array('from_tower' => 'tower3', 'to_tower' => 'tower4', 'distance' => 8),
    (object)array('from_tower' => 'tower2', 'to_tower' => 'tower5', 'distance' => 7),
    (object)array('from_tower' => 'tower3', 'to_tower' => 'tower5', 'distance' => 6),
    (object)array('from_tower' => 'tower5', 'to_tower' => 'tower6', 'distance' => 3),
    (object)array('from_tower' => 'tower6', 'to_tower' => 'tower7', 'distance' => 4),
    (object)array('from_tower' => 'tower7', 'to_tower' => 'tower8', 'distance' => 4),
    (object)array('from_tower' => 'tower8', 'to_tower' => 'tower9', 'distance' => 4),
);