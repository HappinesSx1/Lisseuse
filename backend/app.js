const express = require("express");
const app = express();
const port = 3001;

// Simulons une base de données de chapitres
const chapitresData = {
  "hero-manager": {
    littleimg: "/assets/img/heromanagerlittle.jpg",
    title: "hero-manager",
    chapitres: {
      1: ["/assets/img/HAT01_1.png", "/assets/img/HAT01_2.png"],
      2: ["/assets/img/HAT01_2.png", "/assets/img/HAT01_1.png"],
    },
  },
};

app.get("/", (req, res) => {
  const nomChapitre = req.params.nomChapitre;

  // Vérifiez si le chapitre existe dans la base de données simulée
  if (chapitresData[nomChapitre]) {
    res.json(chapitresData[nomChapitre]);
  } else {
    res.status(404).json({ message: "Chapitre non trouvé" });
  }
});

// app.get("/", function (req, res) {
//   res.write("hello world!");
//   res.end();
// });

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
