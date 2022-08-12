const cartItems = document.querySelector('.cart__items');
const addElementos = document.querySelector('.items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// SALVANDO PRODUTO
const salvar = () => {
  const produto = cartItems.innerHTML;
  localStorage.setItem('listaSalva', produto);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// REMOVENDO ITENS
const cartItemClickListener = (event) => {
  event.target.remove();
  salvar();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// ADD AO CARRINHO
const produtoSelec = async (event) => {
  const id = getSkuFromProductItem(event.target.parentNode);
  console.log(id);
  const item = await fetchItem(id);
  console.log(item);
  const carrinho = createCartItemElement(item);
  console.log(carrinho);
  cartItems.appendChild(carrinho);
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const addCarrinho = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  addCarrinho.addEventListener('click', produtoSelec);
  section.appendChild(addCarrinho);

  return section;
};

// LISTANDO OS PRODUTOS NA PAGINA
const addProdutos = async () => {
const produtos = await fetchProducts('computador');
produtos.results.forEach((element) => {
const produto = createProductItemElement(element);
addElementos.appendChild(produto);
});
};

window.onload = () => { 
  addProdutos();
  // getSavedCartItems();
};
