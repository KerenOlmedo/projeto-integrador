function inicial() {

  var ofertas = [
    { titulo: "Mercado Dia", imagem: "../imagens/oferta1.jpg", link: "https://www.dia.com.br" },
    { titulo: "Supermercado Carrefour", imagem: "../imagens/oferta2.jpg", link: "https://mercado.carrefour.com.br/?gad_source=1&gclid=Cj0KCQiA6vaqBhCbARIsACF9M6nDRSECHHbxjFlZte6aNk-PA-MgaFWOeJ7OwAfxehDAsSzPRkfvI2EaAm2-EALw_wcB" },
    { titulo: "Supermercado Assai", imagem: "../imagens/oferta3.jpg", link: "https://www.assai.com.br/ofertas" }
  ];


  var ofertasContainer = document.getElementById('ofertas-container');


  if (ofertasContainer.children.length === 0) {

    ofertas.forEach(function (oferta) {
      var ofertaDiv = document.createElement('div');
      ofertaDiv.classList.add('oferta');

      var link = document.createElement('a');
      link.href = oferta.link;
      link.target = "_blank";

      var imagem = document.createElement('img');
      imagem.src = oferta.imagem;
      imagem.alt = oferta.titulo;

      var titulo = document.createElement('h3');
      titulo.textContent = oferta.titulo;

      var descricao = document.createElement('p');
      descricao.textContent = oferta.descricao;

      link.appendChild(imagem);
      ofertaDiv.appendChild(link);
      ofertaDiv.appendChild(titulo);
      ofertaDiv.appendChild(descricao);


      ofertasContainer.appendChild(ofertaDiv);
    });
  }
}


document.addEventListener("DOMContentLoaded", function () {
  function redirectToLogin() {
    window.location.href = "../html/login.html";
  }

  document.querySelector('nav.menu-usuario a[href="#"]').addEventListener('click', redirectToLogin);
  document.querySelector('nav.menu-usuario a[href="#"]').nextElementSibling.addEventListener('click', redirectToCadastro);
});