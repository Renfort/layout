if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function alertFunc(alertMessage) {
  const alertTemplate = `<div class="alert-box alert-pop">${alertMessage}</div>`;
  document.querySelector('body').innerHTML += alertTemplate;
  setTimeout(() => {
    document.querySelectorAll('.alert-box').forEach((el) => el.remove());
  }, 1000);
  ready();
}

function ready() {
  const removeCartItemButtons = document.querySelectorAll('.btn-danger');
  removeCartItemButtons.forEach((button) =>
    button.addEventListener('click', removeCartItem)
  );

  const quantityInputs = document.querySelectorAll('.cart-quantity-input');
  quantityInputs.forEach((button) =>
    button.addEventListener('change', quantityChanged)
  );

  const addToCartButtons = document.querySelectorAll('.shop-item-button');
  addToCartButtons.forEach((button) =>
    button.addEventListener('click', addToCartClicked)
  );

  document
    .querySelector('.btn-purchase')
    .addEventListener('click', purchaseClicked);
}

function purchaseClicked() {
  alertFunc('Thank you for your purchase');
  const cartItems = document.querySelectorAll('.cart-items')[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
  alertFunc('Item removed from cart');
}

function quantityChanged(event) {
  const input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  alertFunc('Item added to cart');
  const button = event.target;
  const shopItem = button.parentElement.parentElement;
  const title = shopItem.querySelectorAll('.shop-item-title')[0].innerText;
  const price = shopItem.querySelectorAll('.shop-item-price')[0].innerText;
  const imageSrc = shopItem.querySelectorAll('.shop-item-image')[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  const cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  const cartItems = document.querySelectorAll('.cart-items')[0];
  const cartItemNames = cartItems.querySelectorAll('.cart-item-title');
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alertFunc('This item is already added to the cart');
      return;
    }
  }

  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .querySelectorAll('.btn-danger')[0]
    .addEventListener('click', removeCartItem);
  cartRow
    .querySelectorAll('.cart-quantity-input')[0]
    .addEventListener('change', quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.querySelectorAll('.cart-items')[0];
  var cartRows = cartItemContainer.querySelectorAll('.cart-row');
  let total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i];
    const priceElement = cartRow.querySelectorAll('.cart-price')[0];
    const quantityElement = cartRow.querySelectorAll('.cart-quantity-input')[0];
    const price = parseFloat(priceElement.innerText.replace('$', ''));
    const quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.querySelectorAll('.cart-total-price')[0].innerText = '$' + total;
}
