# Background processes

## Puis-appelée (Tableau postes)

- champ-depar = champ Courant Max (Tableau départ)
- Puissance = round([ (champ-depar x 22 x √3) / total (PKVA) ] x PKVA, 2)

## END (Tableau travaux)

- END = tatal(puissance) x h x 0,9

## nb Support (Tableau visites)

- nbSupport = longueur edges between two nodes

## Clients interrompus (number)

- CI = nb clients between two nodes (app. coupeur)

## Clients connectés (number)

- CC = nb clients in a directions provinciales

## IFS ( System Interruption Frequency Index : the average number of interruptions per connected client)

- ifs = round((CI / CC), 3)

## DMS ( Duration of System Interruption : the average duration of interruption in *hours* for each connected client)

- dms = durationInSeconds * CI / (CC * 3600)

## Total anomalies

- travaux → all anomalies of transome -> same date same transome ??!
- visit -> anomalies of that day

## Auto updates

- Node commune
  on persist edge
- Adjacency List Cache
  on persist/remove ( edge - node )
- Objectives automatization
  on persist ( anomalies - Mission actions, Visite au sol )

## @todo

- frontend process

## Notes

- Coupeur n'apas des Causes
- eg. anomaly : un isolateur cassé suport N° 6 pt el mazoudi
- overture : show undone anomalies
- incident + visite : add new anomaly + show undone anomalies

<br><br><br>

# TODOs

## Travaux 🔧

- [x] order by date > depar > time
- [ ] 3 find a way to combine edit of all travaux of that day
- [ ] 0 total des anomalies of that tronçon

---

## Visites 🧢

- [ ] 1 Nb Support km table?
  - get total of kilometers based on the selected tronçon
- [ ] 3 filter visit teams by chosen depar
- [ ] 0 total anomalies of that date only

---

## Suivi de réalisation - objectives 🎯

- Visite au sol (Km) -> all visites of this year
- Visite montée (Support) -> all visites with anomalies all completed

---

## Statistiques🧮

#### home

- [ ] 5 nombre interruption

#### visites

- [ ] 5 Get total kms of a transom -> show it in the table (Nb Support)
- [ ] 5 Get count of visites for each commune of the current year ++ add this in communes list
- [ ] 5 Get count of Distance parcourue for this year and this month
- [ ] 5 Get total visites of this year

#### Travaux

- [ ] 2 Total des interruptions (year and month)
- [ ] 3 Get avrange interpution time (year and month)
- [ ] 2 Get count of interruption for-each cause (year and month)
- [ ] 2 Get total in interruption foreach type (year and month)
- [ ] 0 Total anomalies show only undone
- [ ] 0 Travauex column ++ taux de realisation 23/40 anomalies
- [x] get **SUM DMS** values of each month of this year then per year (<strong>incidents only</strong>)
  - [x] DMS for each team
  - [x] super admin can see all curves
  - [x] users see thier curve only
  - [x] yearlly DMS total one value -> super admin only

---

## Users permissions 🔑

- [ ] menu
- [ ] actions
- [ ] charts

---

## Département 📍

- [ ] 3 Long aérien / LP ( original ) + total of each tronçon length

---

## Logs 📣

---

## Anomalies💥

---

## Tronçonnes (Edge)⚡

---

## Appareil Coupeur (Node) 💈

---

## Poste distribution 📮

---

## Users 👷🏻‍♂️

- [ ] add password generator
- [ ] copy login info
- [ ] password toggle -> user update/add
- [ ] 5 Remember me
- [ ] 3 remove unautherized links from menu
- [ ] 3 user returnUrl when logged out to back to page

---

🧵 A fixer

- check breadcrumbs + form titles + authService.isAuthorized links
- tester log traveux name to string
- fix profile? checkbox user permistions

🎁 A AMÉLIORER

- refresh button
- add update && delete actions in view (details)
- disable submit buttons while it's loading
- permissions list to a table
- save form searched values
- logo mobile + tables

---

## JAWAD'S VALIDATION 🚩

```
Traveaux remove seconds?
can we chose which team went to a mission? just like visites
```

## ARCHIVES 📦

```
RESTRICT statistics route on the backend using security yml
```
