var listaPelis = [
  "https://mx.web.img3.acsta.net/pictures/23/07/31/20/07/3754594.jpg",
  "https://m.media-amazon.com/images/S/pv-target-images/20d5708d15616c1cacb57351d47118756a5abd3037583b62b8ebe44525ae54d9.jpg",
  "https://22minutoscon.com/wp-content/uploads/2023/07/IMG_9485.jpg",
  "https://es.web.img3.acsta.net/pictures/15/05/05/11/56/026812.jpg",
  "https://es.web.img2.acsta.net/medias/nmedia/18/77/55/19/20235641.jpg",
  "https://cdn1.naekranie.pl/media/cache/thumb-media-card/2018/08/Green-Book-plakat-1.jpg"
];

//Desafío 2: agregue elementos a la lista usando .push

listaPelis.push(
  "https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg",
  "https://cdn.shopify.com/s/files/1/1057/4964/products/harry-potter-and-the-chamber-of-secrets-vintage-movie-poster-original-1-sheet-27x41.jpg"
);

var nombrePelis = [
  "El justiciero",
  "Yo antes de ti",
  "Barbie",
  "San Andrés",
  "Mi nombre es Khan",
  "Green book",
  "Intensamente",
  "Harry Potter"
];

document.write('<div class="container_todosFilmes">');

//Desafío 1 - Convertir for en while
var i = 0;
while (i < listaPelis.length) {
  if (listaPelis[i].endsWith("jpg") || listaPelis[i].endsWith("jpeg")) {
    document.write('<div class="container_filme">');
    document.write("<img src=" + listaPelis[i] + ">");
    document.write("<p>" + nombrePelis[i] + "</p>");

    //Desafío 4 - Colocar títulos debajo de la imagen
    document.write("</div>");
  } else {
    document.write("<p> La imagen " + i + " no es un archivo jpeg o jpg </p>");
  }
  i++;
}
document.write("</div>");
