# Hosty
Ecco il contenuto completo già pronto per essere copiato e incollato nel file README.md su GitHub:


---

Hosty Backend

Questo è il backend del progetto Hosty, una piattaforma per la gestione di proprietà e host.

Funzionalità principali

Registrazione degli utenti (Proprietari e Gestori).

Login degli utenti con autenticazione tramite token JWT.

Creazione di nuove proprietà da parte dei Proprietari.

Visualizzazione delle proprietà disponibili.


Come avviare il backend

1. Assicurati di avere Node.js installato.


2. Esegui il comando seguente per installare le dipendenze:

npm install


3. Avvia il server con il comando:

npm start



Endpoint disponibili

1. Registrazione

Metodo: POST /register
Dati richiesti:

{
  "email": "example@email.com",
  "password": "password123",
  "role": "proprietario" // oppure "gestore"
}

2. Login

Metodo: POST /login
Dati richiesti:

{
  "email": "example@email.com",
  "password": "password123"
}

Risposta:

{
  "message": "Login riuscito!",
  "token": "jwt_token"
}

3. Creazione di una proprietà

Metodo: POST /properties
Dati richiesti:

{
  "title": "Villa indipendente",
  "description": "Bagni, parcheggio e giardino",
  "location": "Roma"
}

Nota: Richiede il token di autenticazione nell'header:

Authorization: jwt_token

4. Visualizzazione delle proprietà

Metodo: GET /properties
Risposta:

[
  {
    "id": 1,
    "title": "Villa indipendente",
    "description": "Bagni, parcheggio e giardino",
    "location": "Roma",
    "owner": "example@email.com"
  }
]


---

Copia tutto questo contenuto e incollalo direttamente nel file README.md. Una volta fatto, clicca su "Commit changes". Se serve aiuto ulteriore, sono qui!

