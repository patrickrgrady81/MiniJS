function reqListener () {
  const author = JSON.parse(this.responseText).author;
  const quote = JSON.parse(this.responseText).quote;

  domAuthor = document.getElementById("author");
  domQuote = document.getElementById("quote");

  domAuthor.innerText = `-${author}`;
  domQuote.innerText = quote;
}

let req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://quotes.stormconsultancy.co.uk/random.json");
req.send();