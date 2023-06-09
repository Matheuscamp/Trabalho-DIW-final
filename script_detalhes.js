const urlParametros = new URLSearchParams(window.location.search);
const produtoID = urlParametros.get("id");

fetch(`https://diwserver.vps.webdock.cloud/products/${produtoID}`)
  .then((response) => response.json())
  .then((data) => {
    const detalhesProduto = `
             <h1 class="title-detalhes">${data.title}</h1>
         
             <img src="${data.image}" class="Img-card" alt="Product Image">
             <h2>Price:<span class="cor_do_preco"> $${data.price}</h2></span>
             <p>Category:<class="Cor_Descrição"> ${data.category}</p>
             <p>Description: <class="Cor_Descrição">${data.description}</p>
             <p> Tipo: ${data.articleType} <br/>Ano: ${data.year} <br/>Cor base: ${data.baseColour}</p>`;

    const detalhesProdutoContainer =
      document.getElementById("detalhes-produto");
    detalhesProdutoContainer.innerHTML = detalhesProduto;
  })
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });
