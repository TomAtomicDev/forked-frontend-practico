const desktopMenu = document.querySelector(".desktop-menu");
const btnAccount = document.getElementById("btnAccount");
const mobileMenu = document.querySelector(".mobile-menu");
const btnHamIcon = document.querySelector(".menu");
const myOrderMenu = document.querySelector(".my-order-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
const productDetailAside = document.querySelector(".product-detail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

btnAccount.addEventListener('click', toggleDesktopMenu);
btnHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleMyOrderMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetail)

function toggleDesktopMenu () {
    desktopMenu.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    myOrderMenu.classList.add("inactive");
    productDetailAside.classList.add('inactive');
}
function toggleMobileMenu () {
    mobileMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    myOrderMenu.classList.add("inactive");
    productDetailAside.classList.add('inactive');
}
function toggleMyOrderMenu () {
    myOrderMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailAside.classList.add('inactive');
}
function openProductDetail () {
  productDetailAside.classList.remove('inactive');
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  myOrderMenu.classList.add("inactive");
}
function closeProductDetail () {
  productDetailAside.classList.add('inactive')
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail)
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.append(productInfoDiv, productInfoFigure);
     
    productCard.append(productImg, productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);



