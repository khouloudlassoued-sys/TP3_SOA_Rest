const axios = require("axios");

/* =========================
   1) RandomUser API (async)
   ========================= */
async function testRandomUser() {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    const user = response.data.results[0];

    console.log("\n=== RandomUser API ===");
    console.log("Nom :", user.name.first, user.name.last);
    console.log("Email :", user.email);
    console.log("Pays :", user.location.country);
  } catch (error) {
    console.error("Erreur RandomUser:", error.message);
  }
}

/* =========================
   2) OpenLibrary API (async)
   ========================= */
async function testOpenLibrary() {
  try {
    const livre = "harry potter";
    const url =
      "https://openlibrary.org/search.json?q=" + encodeURIComponent(livre);

    const response = await axios.get(url);
    const data = response.data;

    console.log("\n=== OpenLibrary API ===");
    console.log("Nombre total de résultats :", data.numFound);

    console.log("Livres trouvés :");
    data.docs.slice(0, 3).forEach((book, index) => {
      console.log(`${index + 1}. ${book.title} (${book.first_publish_year})`);
    });
  } catch (error) {
    console.error("Erreur OpenLibrary:", error.message);
  }
}

/* =========================
   3) NASA API (async)
   ========================= */
async function testNasaAPI() {
  try {
    const NASA_API_KEY = "TA_CLE_NASA_ICI";
    const url =
      "https://api.nasa.gov/planetary/apod?api_key=" + NASA_API_KEY;

    const response = await axios.get(url);
    const data = response.data;

    console.log("\n=== NASA API (APOD) ===");
    console.log("Titre :", data.title);
    console.log("Date :", data.date);
    console.log("Lien image :", data.url);
  } catch (error) {
    // axios met parfois le message utile ici :
    const msg = error?.response?.data?.error?.message || error.message;
    console.error("Erreur NASA:", msg);
  }
}

/* =========================
   Lancement (async)
   ========================= */
async function main() {
  await testRandomUser();
  await testOpenLibrary();
  await testNasaAPI();
}

main();
