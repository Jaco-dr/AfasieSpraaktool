# Afasie Communicatie Webapp (Met Chat en Toetsenbord)

Een eenvoudige, toegankelijke webtool voor mensen met **afasie** en **beperkte motoriek**. De app gebruikt **grote knoppen**, **pictogrammen** en een **chatfunctie** zodat de gebruiker niet hoeft te typen of spraak te gebruiken.

## ✨ Functionaliteiten

* Grote, duidelijke knoppen
* Vaste woorden / zinnen
* Chatfunctie om zinnen samen te stellen
* Virtueel toetsenbord met grote letters
* Werkt op tablet, laptop en telefoon
* Geen spraak

## 🧠 Doelgroep

* Mensen met afasie
* Mensen die niet (goed) kunnen typen
* Zorgsituaties (thuis, instelling, ziekenhuis)

---

## 📁 Projectstructuur

```
afasie-communicatie-app/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Installatie / Gebruik

1. Maak een nieuwe repository op GitHub
2. Voeg de onderstaande bestanden toe
3. Open `index.html` in een browser

Of host via **GitHub Pages**.

---

## 📄 index.html

```html
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Afasie Communicatie</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <h1>Communicatie</h1>

  <div id="chat" class="chatbox"></div>

  <div class="grid" id="word-buttons">
    <button onclick="addWord('Ik')">IK</button>
    <button onclick="addWord('Wil')">WIL</button>
    <button onclick="addWord('Drinken')">DRINKEN</button>
    <button onclick="addWord('Eten')">ETEN</button>
    <button onclick="addWord('Pijn')">PIJN</button>
    <button onclick="addWord('Help')">HELP</button>
    <button onclick="addWord('Ja')">JA</button>
    <button onclick="addWord('Nee')">NEE</button>
  </div>

  <div class="input-container">
    <input type="text" id="sentence" placeholder="Zin wordt hier opgebouwd" readonly />
    <button onclick="sendMessage()">Verstuur</button>
    <button onclick="clearSentence()">Wis</button>
  </div>

  <div class="keyboard" id="keyboard"></div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 style.css

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background: #f4f4f4;
}

h1 {
  font-size: 2.5rem;
}

.chatbox {
  border: 2px solid #007bff;
  border-radius: 10px;
  height: 150px;
  margin: 20px auto;
  padding: 10px;
  overflow-y: auto;
  width: 90%;
  background: white;
  font-size: 1.5rem;
}

.grid, .keyboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  padding: 10px;
  width: 90%;
  margin: auto;
}

button {
  font-size: 1.5rem;
  padding: 20px;
  border: none;
  border-radius: 15px;
  background: #007bff;
  color: white;
}

button:active {
  transform: scale(0.97);
}

.input-container {
  margin: 20px auto;
  width: 90%;
  display: flex;
  gap: 10px;
  justify-content: center;
}

input#sentence {
  flex: 1;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #007bff;
}
```

---

## 🔧 script.js

```javascript
const chat = document.getElementById('chat');
const sentenceInput = document.getElementById('sentence');

function addWord(word) {
  sentenceInput.value += (sentenceInput.value ? ' ' : '') + word;
}

function sendMessage() {
  if(sentenceInput.value.trim() !== '') {
    const message = document.createElement('div');
    message.textContent = sentenceInput.value;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
    sentenceInput.value = '';
  }
}

function clearSentence() {
  sentenceInput.value = '';
}

// Virtueel toetsenbord
const keyboardContainer = document.getElementById('keyboard');
const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('');
keys.forEach(key => {
  const btn = document.createElement('button');
  btn.textContent = key === ' ' ? 'SPATIE' : key;
  btn.onclick = () => addChar(key === ' ' ? ' ' : key);
  keyboardContainer.appendChild(btn);
});

function addChar(char) {
  sentenceInput.value += char;
}
```
