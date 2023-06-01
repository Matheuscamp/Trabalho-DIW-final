var page = 1;

function BuscarprodsInicial(parametro) {
  const json_do_js = [];
  const numerodapag = document.getElementById("Numpag");
  numerodapag.innerHTML = page;

  fetch(`http://diwserver.vps.webdock.cloud:8765/products?${parametro}`)
    .then((response) => response.json())
    .then((data) => {
      //reecbe o data e paga apenas o elemento produtos da api
      const produtos = data.products;

      //faz um for dentro de cada produto e adciona ao objeto produtos_do_for
      produtos.forEach((element) => {
        const produtos_do_for = {
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
        //Adiona os produtos do for dentro da
        json_do_js.push(produtos_do_for);
      });
      AdcionarAoDom(json_do_js);
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    });
}

function BuscarprodsInicial2(parametro) {
  const json_do_js = [];
  page = 1;
  const numerodapag = document.getElementById("Numpag");
  numerodapag.innerHTML = page;

  fetch(`http://diwserver.vps.webdock.cloud:8765/products?${parametro}`)
    .then((response) => response.json())
    .then((data) => {
      //reecbe o data e paga apenas o elemento produtos da api
      const produtos = data.products;

      //faz um for dentro de cada produto e adciona ao objeto produtos_do_for
      produtos.forEach((element) => {
        const produtos_do_for = {
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
        //Adiona os produtos do for dentro da
        json_do_js.push(produtos_do_for);
      });
      AdcionarAoDom(json_do_js);
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    });
}

function BuscarprodsInicial3(parametro) {
  const json_do_js = [];
  page = 1;
  const numerodapag = document.getElementById("Numpag");
  numerodapag.innerHTML = page;

  fetch(`http://diwserver.vps.webdock.cloud:8765/products/${parametro}`)
    .then((response) => response.json())
    .then((data) => {
      const produtos_do_for = {
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
      //Adiona os produtos do for dentro da
      json_do_js.push(produtos_do_for);
      AdcionarAoDom(json_do_js);
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    });
}

function AdcionarAoDom(Produtos) {
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

    // Adiciona o evento de clique ao card
    CardProduto.addEventListener("click", () => {
      // Redireciona para a página de detalhes do card
      window.location.href = `pagina_detalhes.html?id=${element.id}`;
    });

    pagina.appendChild(CardProduto);
  });
}

function Direita() {
  page += 1;
  console.log(page);

  BuscarprodsInicial(`page=${page}`);
  const numerodapag = document.getElementById("Numpag");
  numerodapag.innerHTML = page;
}

function Esquerda() {
  if (page <= 1) {
    alert("Já está na pagina inicial");
  } else {
    page -= 1;
    console.log(page);

    BuscarprodsInicial(`page=${page}`);
    const numerodapag = document.getElementById("Numpag");
    numerodapag.innerHTML = page;
  }
}

function pesquisaid() {
  const numero_do_id = document.getElementById("iddapesquisa").value;
  console.log(numero_do_id);

  BuscarprodsInicial3(numero_do_id);
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
        // Cria os elementos HTML para cada produto
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

        // Adiciona os elementos ao card
        cardElement.appendChild(idElement);
        cardElement.appendChild(imageElement);
        cardElement.appendChild(titleElement);
        cardElement.appendChild(priceElement);

        // Adiciona o evento de clique ao card
        cardElement.addEventListener("click", () => {
          // Redireciona para a página de detalhes do card
          window.location.href = `pagina_detalhes.html?id=${VariavelDoForEach.id}`;
        });

        // Adiciona o card à página
        limparTela.appendChild(cardElement);
      });
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    });
}
