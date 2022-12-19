let totalPrice=localStorage.getItem("total")
if(totalPrice==null){
    totalPrice=0
}
document.getElementById("getTotal").innerText="₹"+totalPrice;
document.getElementById("getFinal").innerText="₹"+((+totalPrice)+49-150);

// append part 
let cartData = JSON.parse(localStorage.getItem("cart"));
if(cartData==null){
    cartData=[]
}
let container=document.getElementById("products")
    container.innerHTML = null;
    cartData.forEach((element) => {
      let products = document.createElement("div")
      products.setAttribute("class", "seperate")
      let productsTitle = document.createElement("div") //first div
      let productsImg = document.createElement("div")  //second div
      let image = document.createElement("img")
      image.setAttribute("src", element.image_url)
      let category = document.createElement("h3")
      category.innerText = element.category;
      let brand = document.createElement("h1")
      brand.innerText = element.name;
      let price = document.createElement("h3")
      price.innerText = "₹ " + element.price
      let rateing = document.createElement("p")
      rateing.innerText = element.rating
      let time = document.createElement("p")
      time.innerText = element.time
      let discount = document.createElement("h4")
      discount.innerText = element.discount
      let hr = document.createElement("hr")
      let detail = document.createElement("p")
      detail.innerText = element.description
      productsImg.append(image)
      productsTitle.append(category, brand, price, rateing, time, discount, hr, detail)
      products.append(productsTitle, productsImg)
      container.append(products)
    })
    