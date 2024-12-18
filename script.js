document.getElementById("translateButton").addEventListener("click", () => {
  const inputText = document.getElementById("inputText").value;
  const fromLanguage = document.getElementById("fromLanguage").value;
  const toLanguage = document.getElementById("toLanguage").value;

  if (!inputText.trim()) {
    alert("Please enter some text to translate.");
    return;
  }

  fetchTranslation(inputText, fromLanguage, toLanguage);
});

async function fetchTranslation(text, from, to) {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`
    );
    const data = await response.json();
    document.getElementById("outputText").innerText = data.responseData.translatedText;
  } catch (error) {
    document.getElementById("outputText").innerText = "Translation failed. Please try again.";
  }
}
