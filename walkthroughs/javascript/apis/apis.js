const apiKey = "54f0MhTKuI2nxwD9nhEvN4ifNwephcpz";
const giphyUrl = "https://api.giphy.com/v1/gifs/translate";

document.querySelector("#submitBtn").addEventListener("click", () => {
  let search = document.querySelector("#search").value;
  fetch(giphyUrl + "?api_key=" + apiKey + "&s=" + search, { mode: "cors" })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".imgContainer > img").src = data.data.url;
      document.querySelector("#share").addEventListener("click", (e) => {
        if (navigator.share) {
          navigator
            .share({
              title: data.data.title,
              text: "Sent from GIPHY",
              url: data.data.url,
            })
            .then(() => {
              console.log("Shared successfully.");
            })
            .catch((error) => {
              console.log("There was an error sharing:", error);
            });
        } else {
          console.log("The Web Share API is not supported in your browser.");
        }
      });
      document.querySelector(".imgContainer").classList.remove("d-none");
    })
    .catch((err) => console.error(err));
});
