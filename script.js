var page = 1;

function buscarProdutosInicial(parametro) {
  const arrayJs = [];
  const numerodapag = document.getElementById("numeroPagina");
  numerodapag.innerHTML = page;

  fetch(`http://diwserver.vps.webdock.cloud:8765/products?${parametro}`)
    .then((response) => response.json())
    .then((data) => {
      const produtos = data.products;

      produtos.forEach((element) => {
        const produtosFor = {
          id: element.id,
          title: element.title,
          price: element.price,
          description: element.description,
          image: element.image,
          brandName: element.brandName,
          season: element.season,
          usage: element.usage,
          gender: element.gender,
          articleNumber: element.articleNumber,
          baseColour: element.baseColour,
          year: element.year,
          articleType: element.articleType,
          displayCategories: element.displayCategories,
          category: element.category,
        };
        arrayJs.push(produtosFor);
      });
      adicionarAoDom(arrayJs);
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    });
}

function buscarProdutosInicial2(parametro) {
  const arrayJs = [];
  page = 1;
  const numerodapag = document.getElementById("numeroPagina");
  numerodapag.innerHTML = page;

  fetch(`http://diwserver.vps.webdock.cloud:8765/products?${parametro}`)
    .then((response) => response.json())
    .then((data) => {
      const produtos = data.products;

      produtos.forEach((element) => {
        const produtosFor = {
          id: element.id,
          title: element.title,
          price: element.price,
          description: element.description,
          image: element.image,
          brandName: element.brandName,
          season: element.season,
          usage: element.usage,
          gender: element.gender,
          articleNumber: element.articleNumber,
          baseColour: element.baseColour,
          year: element.year,
          articleType: element.articleType,
          displayCategories: element.displayCategories,
          category: element.category,
        };
        arrayJs.push(produtosFor);
      });
      adicionarAoDom(arrayJs);
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    });
}

function buscarProdutosInicial3(parametro) {
  const arrayJs = [];
  page = 1;
  const numerodapag = document.getElementById("numeroPagina");
  numerodapag.innerHTML = page;

  fetch(`http://diwserver.vps.webdock.cloud:8765/products/${parametro}`)
    .then((response) => response.json())
    .then((data) => {
      const produtosFor = {
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
        image: data.image,
        brandName: data.brandName,
        season: data.season,
        usage: data.usage,
        gender: data.gender,
        articleNumber: data.articleNumber,
        baseColour: data.baseColour,
        year: data.year,
        articleType: data.articleType,
        displayCategories: data.displayCategories,
        category: data.category,
      };
      arrayJs.push(produtosFor);
      adicionarAoDom(arrayJs);
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    });
}

function adicionarAoDom(Produtos) {
  const pagina = document.getElementById("prods");
  pagina.innerHTML = "";

  Produtos.forEach((element) => {
    const CardProduto = document.createElement("div");
    CardProduto.classList.add("card");

    const titulo = document.createElement("h1");
    titulo.textContent = element.title;
    titulo.classList.add("titulo-card");

    const id = document.createElement("p");
    id.innerHTML = `ID: ${element.id}`;
    id.classList.add("id-card");

    const preço = document.createElement("p");
    preço.innerHTML = `R$ ${element.price},00`;
    preço.classList.add("preco-card");

    const imagem = document.createElement("img");
    imagem.src = element.image;
    imagem.classList.add("Img-card");

    CardProduto.appendChild(id);
    CardProduto.appendChild(imagem);
    CardProduto.appendChild(titulo);
    CardProduto.appendChild(preço);

    CardProduto.addEventListener("click", () => {
      window.location.href = `pagina_detalhes.html?id=${element.id}`;
    });

    pagina.appendChild(CardProduto);
  });
}

function Direita() {
  page += 1;
  console.log(page);

  buscarProdutosInicial(`page=${page}`);
  const numerodapag = document.getElementById("numeroPagina");
  numerodapag.innerHTML = page;
}

function Esquerda() {
  if (page <= 1) {
    alert("Já está na pagina inicial");
  } else {
    page -= 1;
    console.log(page);

    buscarProdutosInicial(`page=${page}`);
    const numerodapag = document.getElementById("numeroPagina");
    numerodapag.innerHTML = page;
  }
}

function pesquisaID() {
  const numeroDoID = document.getElementById("iddapesquisa").value;
  console.log(numeroDoID);

  buscarProdutosInicial3(numeroDoID);
}

function BuscarCategory() {
  const category = document.getElementById("Seleção").value;
  const limparTela = document.getElementById("prods");
  limparTela.innerHTML = "";

  fetch(`http://diwserver.vps.webdock.cloud:8765/products/category/${category}`)
    .then((response) => response.json())
    .then((data) => {
      const produtos_Category = data.products;

      produtos_Category.forEach((VariavelDoForEach) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        const titleElement = document.createElement("h3");
        titleElement.textContent = VariavelDoForEach.title;

        const priceElement = document.createElement("p");
        priceElement.textContent = `Price: $${VariavelDoForEach.price}`;

        const imageElement = document.createElement("img");
        imageElement.src = VariavelDoForEach.image;
        imageElement.classList.add("Img-card");

        const idElement = document.createElement("p");
        idElement.textContent = `ID: ${VariavelDoForEach.id}`;
        idElement.classList.add("Id-card");

        cardElement.appendChild(idElement);
        cardElement.appendChild(imageElement);
        cardElement.appendChild(titleElement);
        cardElement.appendChild(priceElement);

        cardElement.addEventListener("click", () => {
          window.location.href = `pagina_detalhes.html?id=${VariavelDoForEach.id}`;
        });

        limparTela.appendChild(cardElement);
      });
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    });
}
