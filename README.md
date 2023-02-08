# TalentMatchingBackend


```
*Links*
Frontend: https://felixbuch.github.io/
Backend: https://talentmatchingbackend.onrender.com  
DaaS: https://www.elephantsql.com/
UML-Tool: http://www.plantuml.com/
API-Testing: https://www.postman.com/
Hosting-Backend: https://render.com/
Email: https://nodemailer.com/
Email: https://sendgrid.com/
```
´´´
*Datenbankschema kreieren (mit Testdaten):*

CREATE TABLE users (User_ID SERIAL PRIMARY KEY, Name Varchar(255) NOT NULL, Email Varchar(255) NOT NULL);
CREATE TABLE fakultaeten (Fakultaet_ID SERIAL PRIMARY KEY, Name VARCHAR(255) NOT NULL);
CREATE TABLE projekte (Projekt_ID SERIAL PRIMARY KEY, User_ID SERIAL REFERENCES users(User_ID), Name VARCHAR(255) NOT NULL, Description VARCHAR(255) NOT NULL);
CREATE TABLE skills (Skill_ID SERIAL PRIMARY KEY, Fakultaet_ID SERIAL REFERENCES   fakultaeten(Fakultaet_ID), Name VARCHAR(255) NOT NULL);
CREATE TABLE us_links (User_ID SERIAL REFERENCES users(User_ID), Skill_ID SERIAL REFERENCES skills(Skill_ID));
CREATE TABLE ps_links (Projekt_ID SERIAL REFERENCES projekte(Projekt_ID), Skill_ID SERIAL REFERENCES skills(Skill_ID));
INSERT INTO fakultaeten(name) VALUES ('Gestaltung'), ('Wirtschaft'), ('Technik');
INSERT INTO skills(name, Fakultaet_ID) VALUES ('Javascript', 3), ('Holzarbeit', 1), ('Webdesign', 3),
('3D Druck', 3), ('Textilarbeit', 1), ('Software', 3), ('Produktdesign', 1), ('Goldschmied', 1), ('Projektmanagement', 2), ('Malen', 1), ('Buchhaltung', 2), ('Grafikdesign', 1), ('Logistik', 2), ('Marketing', 2);
INSERT INTO users (name, email) VALUES ('Ruediger Steffan', 'Testmail1@23.de'), ('Juergen Cleve', 'Testmail2@34.de'), ('Joeran Pieper', 'Testmail3@45.de');
INSERT INTO projekte (User_ID, Name, Description) VALUES (1, 'Testprojekt1', 'Suche Projektpartner im Bezug auf Datenbanken.'), (2, 'Testprojekt2', 'Suche Mitfahrgelegenheit zum nächsten Hansa-Spiel.'), (3, 'Testprojekt3', 'Suche kompetente Studenten für Startup-Yard-Projekte.');
INSERT INTO us_links (User_ID, Skill_ID) VALUES (1,1), (1,6), (2,6), (2,9), (2,13), (3,1), (3,3), (3,4), (3,6), (3,9);
INSERT INTO ps_links (Projekt_ID, Skill_ID) VALUES (1,6), (1,14), (2,13), (3,1), (3,7), (3,12);

´´´


```
*Sequenzdiagramm*

@startuml
title Talent Matching Prozess

actor User
participant "Frontend: index.html,\nstyles.css, index.js" as A
participant "Backend: NodeJS,\nExpress, PostgreSQL" as B

User -> A: Zugang zur Applikation


User -> A: Click "Anmelden"-Button
A -> B: Schicke HTML-Formular mit Namen, Email und verschiedenen Skills ab

B -> B: Speichere Talent Data in Datenbank

User -> A: Zugang zur Applikation
User -> A: Click "Start Projekt"-Button
A -> B: Schicke HTML-Formular mit Namen, Email, gesuchten Projekt Skills und Projektbeschreibung

B -> B: Speichere Projekt Data in Datenbank
B -> B: Datenbank nach passenden Talenten abfragen
B -> Email: Generiere Email mit Projektbeschreibung für "gematchte" Talente

loop für jedes "gematchte" Talent
Email -> Talent: Sende Projektbeschreibung
Talent -> Email: Antwort bei Interesse

end
@enduml
```

![image](https://user-images.githubusercontent.com/93072175/211167432-da9e2ef4-c2fe-406e-ba49-15bbfdb271c6.png)



```
*Aktivitätsdiagramm*

@startuml

title Talent Matching Prozess

start
:Zugang zur Applikation;

if (Click "Anmelden"-Button) then (ja)
:Schicke HTML-Formular mit Namen, Email und verschiedenen Skills ab;
:Speichere Talent Data in Datenbank;
else (nein)
if (Click "Start Projekt"-Button) then (ja)
:Schicke HTML-Formular mit Namen, Email, gesuchten Projekt Skills und Projektbeschreibung;
:Speichere Projekt Data in Datenbank;
:Datenbank nach passenden Talenten abfragen;
:Schicke Email mit Projektbeschreibung an "gematchte" Talente;
:Antwort bei Interesse;
else (nein)
:Tue nichts;
endif
endif

stop

@enduml
```
![image](https://user-images.githubusercontent.com/93072175/211168065-d0ef919b-ce2a-4fe5-8b13-437115fd711c.png)


Datenbankschema![image](https://user-images.githubusercontent.com/93072175/211536356-977d77ef-7f54-4501-9674-bacb63f12a67.png)

