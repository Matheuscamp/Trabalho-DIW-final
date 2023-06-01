const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

fetch(`http://diwserver.vps.webdock.cloud:8765/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    const detalhesProduto = `
  
              <h3>${data.title}</h3>
          
              <img src="${data.image}" class="Img-card" alt="Product Image">
              <h2>Price:<span class="cor_do_preco"> $${data.price}</h2></span>
              <p>Description: <strong class="Cor_Descrição">${data.description}</p>  </strong>
              <p>Category:<strong class="Cor_Descrição"> ${data.category}</p> </strong>
              
          `;

    const detalhesProdutoContainer =
      document.getElementById("detalhes-produto");
    detalhesProdutoContainer.innerHTML = detalhesProduto;
  })
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });
