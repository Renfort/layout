async function fetchJson() {
  const response = await fetch('js/products.json');
  const data = await response.json();

  for (let i = 0; i < 9; i++) {
    document.querySelector('.products').innerHTML += `
    <div class="product-container"> 
        <img src=${data.image} alt=${data.imageAlt} />
        <p>${data.header}</p>
        <p>${data.description}</p>
        <p>Price: ${data.price}</p>
        <button>BUY</button>
    </div>`;
  }
}

fetchJson();
