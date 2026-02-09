# TP3 – Consommation d’APIs RESTful  
## Architecture Orientée Services (SOA)

---

## 1. Introduction

Dans le cadre du module **Architecture Orientée Services (SOA)**, ce travail pratique a pour objectif de découvrir et de mettre en œuvre la **consommation d’APIs RESTful** en utilisant **JavaScript avec Node.js**.

Une API RESTful permet à une application cliente de communiquer avec un service distant via le protocole HTTP afin d’échanger des données, généralement sous format **JSON**.  
Ce TP met l’accent sur :
- l’envoi de requêtes HTTP,
- la gestion des réponses,
- la manipulation des données retournées,
- l’utilisation de bibliothèques modernes telles que **axios**.

---

## 2. Environnement de travail

### 2.1 Outils utilisés
- **Node.js**
- **JavaScript**
- **Fetch API**
- **Axios**
- **Git & GitHub**
- **GitHub Codespaces / Visual Studio Code**

### 2.2 APIs utilisées
- **OpenWeather API** (données météorologiques)
- **RandomUser API**
- **OpenLibrary API**
- **NASA API (APOD)**

---

## 3. Question 3 – Consommation de l’API OpenWeather avec Fetch

### Objectif
Implémenter une fonction permettant de récupérer les données météo d’une ville donnée en utilisant l’API **OpenWeather** et la méthode **fetch**.

### Principe
- Une requête HTTP GET est envoyée vers l’API OpenWeather.
- La réponse est reçue au format JSON.
- Les données sont transmises via une fonction callback.

### Implémentation
Une fonction `getWeatherData(city, callback)` a été créée afin de :
- construire l’URL de la requête,
- envoyer la requête avec `fetch`,
- convertir la réponse en JSON,
- gérer les erreurs éventuelles.

---

## 4. Question 4 – Affichage des données météo de la ville de Sousse

### Objectif
Afficher dans la console les informations suivantes pour la ville de **Sousse** :
- Description du temps
- Température
- Humidité

### Résultat
Les champs suivants de la réponse JSON ont été exploités :
- `weather[0].description`
- `main.temp`
- `main.humidity`

Les données ont été affichées de manière lisible dans la console.

---

## 5. Question 5 – Unités métriques et langue française

### Objectif
Adapter la requête afin de :
- afficher la température en **degrés Celsius**,
- afficher la description météo en **langue française**.

### Solution
Deux paramètres ont été ajoutés à l’URL de la requête :
- `units=metric`
- `lang=fr`

Cela permet d’obtenir des résultats plus adaptés à l’utilisateur final.

---

## 6. Question 6 – Utilisation de la bibliothèque Axios

### Objectif
Refaire le même travail que dans les questions précédentes, mais en remplaçant **fetch** par **axios**.

### Avantages d’Axios
- Les données sont directement accessibles via `response.data`
- La gestion des erreurs est plus simple
- Le code est plus lisible

### Résultat
La fonction de récupération des données météo a été réécrite en utilisant `axios.get()`, tout en conservant la même logique de traitement et d’affichage.

---

## 7. Question 7 – Test de plusieurs APIs RESTful

### Objectif
Tester la consommation de plusieurs APIs RESTful publiques afin de comparer leurs usages.

### APIs testées

#### 7.1 RandomUser API
- Génération d’un utilisateur aléatoire
- Données affichées :
  - Nom
  - Email
  - Pays

#### 7.2 OpenLibrary API
- Recherche de livres via un mot-clé
- Affichage :
  - Nombre total de résultats
  - Titres de quelques livres
  - Années de publication

#### 7.3 NASA API (APOD)
- Récupération de l’image astronomique du jour
- Données affichées :
  - Titre
  - Date
  - Lien de l’image

### Implémentation
Les trois APIs ont été consommées dans **un seul fichier JavaScript**, à l’aide de **fonctions asynchrones (`async/await`)**, ce qui permet :
- un code plus clair,
- une meilleure gestion des erreurs avec `try/catch`,
- une exécution séquentielle des appels.

---

## 8. Structure du projet

├── index.js
├── index2.js
├── index3.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md


Le dossier `node_modules` est ignoré grâce au fichier `.gitignore`.

---






