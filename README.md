# TalentMatchingBackend


```
*Links*

https://talentmatchingbackend.onrender.com/api/v1/talents
https://www.elephantsql.com/
http://www.plantuml.com/
https://www.postman.com/
https://render.com/

```

# User Story Map

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

