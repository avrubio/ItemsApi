//const productsController = new ProductsController();

function addProductCard(product) {
  const productHTML = `<div class="flip-card col-sm-12 col-lg-4 col-md-6 float-left">\n
  <div class="flip-card-inner"> \n
      <div class="flip-card-front">\n 
          <img src="${product.imageUrl}" alt="product image" style="width: 100%; height: 300px;">\n
      </div> \n
      <div class="flip-card-back"> \n
          <h1>${product.name}</h1>\n
          <p>${product.description}</p>\n
          <label><strong>Price: $${product.price}</strong></label><br>\n
          <input type="number" name="beef" size="1" min="0" id="beef"> <br>\n
          <a href="#" class="btn btn-secondary mt-2">Add to cart</a>\n
      </div>\n
  </div> \n
</div>\n`;
  /* const productsContainer = document.getElementById("list-products");
  productsContainer.innerHTML += productHTML; */
  const lastAddedItem = document.getElementById("lastAddedItem");
  lastAddedItem.innerHTML += productHTML;
}

function loadStorageSampleData() {
  if (!localStorage.getItem("products")) {
    const sampleProducts = [
      {
        id: 1,
        name: "Beef Bao",
        description:
          "Flavorful beef pot roast, mixed with spinach, green onions, and marinated in hoisin sauce, wrapped in a soft fluffy bun",
        price: "3",
        imageUrl: "./img/bao-beef-bun.jpeg",
      },
      {
        id: 2,
        name: "Chicken Bao",
        description:
          "Ground chicken mixed with green onions, grated ginder, and white pepper marinated in oyster sauce, soy suace, and sesame oil",
        price: "3",
        imageUrl: "./img/steamed-chicken-buns4.png",
      },
      {
        id: 3,
        name: "Egg Custard Bao",
        description: "Egg custard filling steamed bun",
        price: "3",
        imageUrl: "./img/eggcustard.jpeg",
      },
    ];
    localStorage.setItem("products", JSON.stringify(sampleProducts));
  }
}

function loadCardsListFromProductsController() {
  for (let i = 0, size = productsController.products.length; i < size; i++) {
    const product = productsController.products[i];
    addProductCard(product);
  }
}

function loadLastCardsListFromProductsController() {
  addProductCard(
    productsController.products[productsController.products.length - 1]
  );
}

loadStorageSampleData();
productsController.loadProductsFromLocalStorage();
loadCardsListFromProductsController();

/*  let itemName = document.getElementById('itemName');
let description = document.getElementById('itemDescription');
let price = document.getElementById('itemPrice');
let imageUrl = document.getElementById('itemImage');
function addProductFromForm() {
  productsController.addProduct(itemName.value, description.value, price.value, imageUrl.value);
  productsController.addProductCard(products[0]); 
} */
