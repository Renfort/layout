async function fetchJson() {
  const response = await fetch('js/products.json');
  const data = await response.json();
  document.querySelector('.products').innerHTML = `
    <div class="product-container"> 
        <img src=${data.image} alt=${data.imageAlt} />
        <p>${data.header}</p>
        <p>${data.description}</p>
        <p>Price: ${data.price}</p>
        <button>BUY</button>
    </div>
    <div class="product-container"> 
        <img src=${data.image} alt=${data.imageAlt} />
        <p>${data.header}</p>
        <p>${data.description}</p>
        <p>Price: ${data.price}</p>
        <button>BUY</button>
    </div>
    <div class="product-container"> 
        <img src=${data.image} alt=${data.imageAlt} />
        <p>${data.header}</p>
        <p>${data.description}</p>
        <p>Price: ${data.price}</p>
        <button>BUY</button>
    </div>
    `;
}

fetchJson();
