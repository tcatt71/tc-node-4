fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let ol = document.querySelector("#filmsList");
    data.forEach((film) => {
      let li = document.createElement("li");
      li.innerHTML = `<h3>${film.title}</h3><small>${film.release_date}</small><p>${film.description}</p>`;
      ol.appendChild(li);
    });
  })
  .catch((err) => {
    console.error(err);
  });
