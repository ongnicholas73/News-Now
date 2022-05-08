var apiKey = "bb2e404c73214cf0940459d839ad00b5";

//https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey

var showWorldNews = function () {
  var userInput = document.querySelector("#world-news-input-section").value;
  fetch(
    `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${userInput}&sortBy=publishedAt&apiKey=${apiKey}`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      //world-news-container
      console.log(data);

      var temp = "";

      for (var i = 0; i < 3; i++) {
        var imghtml = "";
        if (data.articles[i].urlToImage) {
          imghtml = `<img class="world-news-img" src="${data.articles[i].urlToImage}"/>`;
        }
        temp += `
        <div>
            ${imghtml}
            </div>
            <h1>
                ${data.articles[i].title}
            </h1>
            <div>
                ${data.articles[i].content}
            </div>
        </div>
        `;
      }

      document.querySelector("#world-news-container").innerHTML = temp;
    });
};

document
  .querySelector("#world-news-button")
  .addEventListener("click", showWorldNews);
