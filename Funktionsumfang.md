```
addProject()
addUser()
getSkills()
check Email
```

Funktion: Projekt hinzufügen:
umgesetzt durch addProject()
Funktion:


```
const addUser = async (req, res) => {
  const {
    name,
    email,
    skills
  } = req.body;
  //console.log(skills);
  console.log(req.body)

  // E-Mail checken
  let results = await pool.query(queries.checkEmailExists, [email]) // Deklariere ich als let, weil ich's dann überschreiben kann nachher.

  if (results.rows.length) {
    res.send("Email existiert bereits");
    return // Early return, damit spar ich mir eine Einrückung hier nach in einem zusätzlichen else-Teil.
  }

  results = await pool.query(
    queries.addUser,
    [
      name,
      email,
    ],
  )
  const user = results.rows[0]; // 0-tes Element des Arrays ist hier der User

  // Jeweils die Skill-IDs aus dem Array holen und mit User_ID in us_links-Tabelle schreiben
  for (let i = 0; i < skills.length; i++) {
    await pool.query(assignSkillToUser, [user.user_id, skills[i]])
  }

  res.status(201).json(user);
};
```
