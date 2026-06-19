// =============================================
// quiz.js — Brown Quiz
// 30 Questions HTML & CSS en français
// =============================================

const questions = [
  // ── HTML ──────────────────────────────────
  {
    question: "Quelle balise HTML est utilisée pour créer un lien hypertexte ?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1
  },
  {
    question: "Quelle est la balise correcte pour le titre principal d'une page HTML ?",
    options: ["<h6>", "<heading>", "<h1>", "<title>"],
    correct: 2
  },
  {
    question: "Quel attribut permet de spécifier l'adresse d'un lien ?",
    options: ["src", "href", "link", "url"],
    correct: 1
  },
  {
    question: "Quelle balise HTML est utilisée pour insérer une image ?",
    options: ["<picture>", "<photo>", "<image>", "<img>"],
    correct: 3
  },
  {
    question: "Quel attribut d'une image fournit un texte alternatif pour les personnes malvoyantes ?",
    options: ["title", "caption", "alt", "src"],
    correct: 2
  },
  {
    question: "Quelle balise crée une liste non ordonnée (avec des puces) ?",
    options: ["<ol>", "<dl>", "<list>", "<ul>"],
    correct: 3
  },
  {
    question: "Quelle balise est utilisée pour chaque élément d'une liste ?",
    options: ["<item>", "<li>", "<el>", "<point>"],
    correct: 1
  },
  {
    question: "Quel élément HTML est utilisé pour créer un tableau ?",
    options: ["<grid>", "<tb>", "<table>", "<tab>"],
    correct: 2
  },
  {
    question: "Quelle balise définit une ligne dans un tableau HTML ?",
    options: ["<td>", "<tr>", "<th>", "<row>"],
    correct: 1
  },
  {
    question: "Quelle balise HTML crée un champ de saisie de texte dans un formulaire ?",
    options: ["<textbox>", "<field>", "<textarea>", "<input type='text'>"],
    correct: 3
  },
  {
    question: "Quel élément HTML représente la section principale du contenu d'une page ?",
    options: ["<content>", "<body>", "<main>", "<section>"],
    correct: 2
  },
  {
    question: "Quelle balise est utilisée pour mettre du texte en gras en HTML sémantique ?",
    options: ["<bold>", "<b>", "<strong>", "<em>"],
    correct: 2
  },
  {
    question: "Quelle balise HTML permet d'incorporer un script JavaScript ?",
    options: ["<js>", "<code>", "<javascript>", "<script>"],
    correct: 3
  },
  {
    question: "Quel attribut d'une balise <form> définit la méthode d'envoi des données ?",
    options: ["type", "action", "method", "send"],
    correct: 2
  },
  {
    question: "Quelle balise HTML5 définit un en-tête de page ou de section ?",
    options: ["<top>", "<header>", "<head>", "<nav>"],
    correct: 1
  },

  // ── CSS ───────────────────────────────────
  {
    question: "Quelle propriété CSS change la couleur de fond d'un élément ?",
    options: ["color", "bg-color", "background-color", "fill"],
    correct: 2
  },
  {
    question: "Comment sélectionne-t-on tous les éléments <p> en CSS ?",
    options: ["#p", ".p", "all.p", "p"],
    correct: 3
  },
  {
    question: "Quelle propriété CSS modifie la taille du texte ?",
    options: ["text-size", "font-weight", "font-size", "text-style"],
    correct: 2
  },
  {
    question: "Quel sélecteur CSS cible un élément avec l'id 'header' ?",
    options: [".header", "*header", "#header", "id=header"],
    correct: 2
  },
  {
    question: "Quelle valeur de 'display' rend un élément flexible pour le Flexbox ?",
    options: ["block", "flex", "inline", "grid"],
    correct: 1
  },
  {
    question: "Quelle propriété CSS contrôle l'espace entre les éléments enfants d'un conteneur flexbox ?",
    options: ["spacing", "gap", "margin-between", "padding-gap"],
    correct: 1
  },
  {
    question: "Quelle propriété CSS permet d'arrondir les coins d'un élément ?",
    options: ["corner-radius", "round-border", "border-curve", "border-radius"],
    correct: 3
  },
  {
    question: "Comment rendre un texte en italique avec CSS ?",
    options: ["font-style: italic", "text-decoration: italic", "font-weight: italic", "text-style: italic"],
    correct: 0
  },
  {
    question: "Quelle propriété CSS contrôle l'espace interne d'un élément (entre le contenu et la bordure) ?",
    options: ["margin", "spacing", "padding", "border-spacing"],
    correct: 2
  },
  {
    question: "Quelle propriété CSS permet de positionner un élément de manière absolue ?",
    options: ["position: relative", "position: fixed", "position: absolute", "float: left"],
    correct: 2
  },
  {
    question: "Quelle valeur de 'position' sort l'élément du flux et reste fixé à l'écran lors du défilement ?",
    options: ["sticky", "absolute", "relative", "fixed"],
    correct: 3
  },
  {
    question: "Comment centrer un bloc horizontalement avec CSS moderne ?",
    options: ["text-align: center", "align: center", "margin: 0 auto", "center: true"],
    correct: 2
  },
  {
    question: "Quelle propriété CSS contrôle la transparence d'un élément ?",
    options: ["transparency", "filter: alpha", "opacity", "visibility"],
    correct: 2
  },
  {
    question: "Quelle règle CSS permet d'appliquer des styles selon la taille de l'écran ?",
    options: ["@screen", "@breakpoint", "@media", "@viewport"],
    correct: 2
  },
  {
    question: "Quelle propriété CSS définit l'épaisseur d'une bordure ?",
    options: ["border-style", "border-size", "border-weight", "border-width"],
    correct: 3
  }
];

// =============================================
// ÉTAT DE L'APPLICATION
// =============================================
let playerName   = "";
let currentIndex = 0;
let score        = 0;
let answered     = false;

const letters = ["A", "B", "C", "D"];

// =============================================
// LOGIN
// =============================================
function startQuiz() {
  const input = document.getElementById("playerName");
  const error = document.getElementById("nameError");
  const name  = input.value.trim();

  if (!name) {
    error.classList.add("show");
    input.focus();
    return;
  }

  error.classList.remove("show");
  playerName = name;

  // Afficher la page quiz
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("quizPage").classList.remove("hidden");

  document.getElementById("welcomeMsg").textContent = `👋 ${playerName}`;

  currentIndex = 0;
  score        = 0;
  answered     = false;

  loadQuestion();
}

// =============================================
// CHARGER UNE QUESTION
// =============================================
function loadQuestion() {
  answered = false;

  const q = questions[currentIndex];
  const n = currentIndex + 1;

  // Mettre à jour les indicateurs
  document.getElementById("currentQ").textContent = n;
  document.getElementById("qNumber").textContent  = `Q${n}`;
  document.getElementById("liveScore").textContent = score;

  // Barre de progression
  const pct = ((currentIndex) / questions.length) * 100;
  document.getElementById("progressBar").style.width = pct + "%";

  // Texte de la question
  document.getElementById("questionText").textContent = q.question;

  // Construire les boutons de réponse
  const grid = document.getElementById("optionsGrid");
  grid.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.disabled  = false;

    const letterSpan = document.createElement("span");
    letterSpan.className = "option-letter";
    letterSpan.textContent = letters[i];

    const textSpan = document.createElement("span");
    textSpan.className = "option-text";
    textSpan.textContent = opt;

    btn.appendChild(letterSpan);
    btn.appendChild(textSpan);
    btn.onclick = () => selectAnswer(i);
    grid.appendChild(btn);
  });

  // Réinitialiser feedback et bouton suivant
  const fb   = document.getElementById("feedbackBox");
  const next = document.getElementById("btnNext");
  fb.classList.add("hidden");
  fb.className = "feedback-box hidden";
  next.classList.add("hidden");
}

// =============================================
// SÉLECTIONNER UNE RÉPONSE
// =============================================
function selectAnswer(index) {
  if (answered) return;
  answered = true;

  const q    = questions[currentIndex];
  const btns = document.querySelectorAll(".option-btn");

  // Désactiver tous les boutons
  btns.forEach(b => b.disabled = true);

  const fb   = document.getElementById("feedbackBox");
  const icon = document.getElementById("feedbackIcon");
  const text = document.getElementById("feedbackText");

  if (index === q.correct) {
    // Bonne réponse
    score++;
    document.getElementById("liveScore").textContent = score;
    btns[index].classList.add("correct");
    fb.className = "feedback-box correct-fb";
    icon.textContent = "✅";
    text.textContent = "Bonne réponse ! Excellent !";
  } else {
    // Mauvaise réponse
    btns[index].classList.add("wrong");
    btns[q.correct].classList.add("correct");
    fb.className = "feedback-box wrong-fb";
    icon.textContent = "❌";
    text.textContent = `Incorrect. La bonne réponse était : ${q.options[q.correct]}`;
  }

  fb.classList.remove("hidden");
  document.getElementById("btnNext").classList.remove("hidden");
}

// =============================================
// QUESTION SUIVANTE
// =============================================
function nextQuestion() {
  currentIndex++;

  if (currentIndex >= questions.length) {
    showResults();
  } else {
    loadQuestion();
  }
}

// =============================================
// RÉSULTATS FINAUX
// =============================================
function showResults() {
  document.getElementById("quizPage").classList.add("hidden");
  document.getElementById("resultPage").classList.remove("hidden");

  document.getElementById("finalScore").textContent = score;
  document.getElementById("resultPlayer").textContent = `Bravo, ${playerName} !`;

  // Barre de progression à 100 %
  document.getElementById("progressBar").style.width = "100%";

  // Message personnalisé selon le score
  let emoji, title, msg;

  if (score === 30) {
    emoji = "🏆"; title = "Score Parfait !";
    msg   = "Incroyable ! Vous maîtrisez parfaitement le HTML et le CSS. Vous êtes un expert !";
  } else if (score >= 24) {
    emoji = "🎉"; title = "Excellent !";
    msg   = "Très belle performance ! Vous avez une très bonne maîtrise du HTML et CSS.";
  } else if (score >= 18) {
    emoji = "👍"; title = "Bien joué !";
    msg   = "Bon résultat ! Encore un peu de pratique et vous serez au sommet.";
  } else if (score >= 12) {
    emoji = "📚"; title = "Pas mal !";
    msg   = "Continuez à apprendre ! Révisez les bases du HTML et CSS pour progresser.";
  } else {
    emoji = "💪"; title = "Ne lâchez pas !";
    msg   = "C'est un bon début ! Le HTML et CSS s'apprennent avec de la pratique. Recommencez !";
  }

  document.getElementById("resultEmoji").textContent = emoji;
  document.getElementById("resultTitle").textContent  = title;
  document.getElementById("resultMsg").textContent    = msg;
}

// =============================================
// RECOMMENCER
// =============================================
function restartQuiz() {
  document.getElementById("resultPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
  document.getElementById("playerName").value = "";
  document.getElementById("progressBar").style.width = "0%";
  currentIndex = 0;
  score        = 0;
  answered     = false;
}

// Permettre de valider le login avec la touche Entrée
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("playerName").addEventListener("keydown", (e) => {
    if (e.key === "Enter") startQuiz();
  });
});