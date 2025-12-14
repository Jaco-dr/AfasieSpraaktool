function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'nl-NL';
  window.speechSynthesis.speak(msg);
}
