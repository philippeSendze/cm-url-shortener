const form = document.getElementById("urlForm");

const getShortenLink = (link) => {
  const shortenLink = document.getElementById("shortenLink");
  shortenLink.innerHTML = link;
};

const sendData = () => {
  const url = document.getElementById("url").value;
  const TOKEN = ""; // Your token from Bitly here
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: url,
      domain: "bit.ly",
    }),
  };
  fetch("https://api-ssl.bitly.com/v4/shorten", options)
    .then((res) => res.json())
    .then((data) => getShortenLink(data.link));
};

// Add 'submit' event handler
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
