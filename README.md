# TalentMatchingBackend

https://talentmatchingbackend.onrender.com/api/v1/talents

https://www.elephantsql.com/


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
