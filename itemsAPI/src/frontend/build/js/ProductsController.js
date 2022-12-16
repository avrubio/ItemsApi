class ProductsController {
  products = [];
  //set up constructor with id = 0 and an empty array
  constructor() {
    let localStorageArray = JSON.parse(window.localStorage.getItem("products"));
    this.currentId = localStorageArray.length;
  }

 addProduct(name, description, price, imageUrl) {
    save(name, description, price, imageUrl);
    
    const product = {
      id: id,
      name: name,
      description: description,
      price: price,
      imageUrl: imageUrl,
    };
    this.products.push(product);
     
    

    //push the product to the products array
    
    
    
    
  }


  saveProductToLocalStorage() {
    if (!localStorage.getItem("products")) {
      localStorage.setItem("products", JSON.stringify(this.products));
    } else {
      const oldLocalStorage = JSON.parse(localStorage.getItem("products"));
      oldLocalStorage.push(this.products[this.products.length - 1]);
      localStorage.setItem("products", JSON.stringify(oldLocalStorage));
    }
  }

  loadProductsFromLocalStorage() {
    const storageProducts = localStorage.getItem("products");
    if (storageProducts) {
      const products = JSON.parse(storageProducts);
      //TODO load the items into the local items structure (this.items)
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        this.products.push(product);
      }
    }
  }

  getData(id) {
    deleteDrama(id);
  }
  }

  async function save(name, description, price, imageUrl) {
  try{
    const data = { name, description, price, imageUrl };

    const response = await fetch("http://localhost:8080/item", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
      const responseJSO = await response.json();
      console.log(responseJSO);
      
    document.getElementById('test').innerText = responseJSO.id;
    
    
    
  } catch(e)
 {
  console.log(e);
 }    
      
  }

/*   async function getData()  {
  
    try {
        const response = await fetch('http://localhost:8080/item/all');
        const responseJSO = await response.json();
        console.log(responseJSO);

    } catch (e) {
        console.log(e);
    }
} */



  async function update(name, description, price, imageUrl) {
    try{
      const data = { name, description, price, imageUrl };
  
      const response = await fetch("http://localhost:8080/item", {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseJSO = await response.json();
    } catch(e)
   {
    console.log(e);
   }    
        
    }

    async function deleteDrama(id) {
      try{
        const response1 = await fetch('http://localhost:8080/item/all');
        const responseJSO1 = await response1.json();
        const itemId = responseJSO1[id - 1].id;
        console.log(itemId);
        const url = "http://localhost:8080/item/" + itemId;
        const response = await fetch(url, {
          method: "DELETE", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseJSO = await response.json();
      } catch(e)
     {
      console.log(e);
     }    
          
      }

    

  


