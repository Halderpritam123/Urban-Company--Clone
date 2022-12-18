let cartData = JSON.parse(localStorage.getItem("cart"));
if(cartData==null){
    cartData=[]
}
let container=document.getElementById("cart-product")
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

    // faq
    document.getElementById("question1").addEventListener("click", () =>{
        document.getElementById("ans1").innerText ="Plus members save 15% on every order. Additionally, they get access to top-rated Plus professionals. UC Plus professionals are a curated set of professionals who are top-rated, specially trained, and experts in their field. UC Plus members also get discounts up to *150. The fee for repairs will be charged as per actuals."
    });
    document.getElementById("ans1").addEventListener("click", ()=>{
        document.getElementById("ans1").innerText=null;
    })
    document.getElementById("question2").addEventListener("click", ()=>{
        document.getElementById("ans2").innerText =" if a subscriber saves less than the membership price at the end of the membership period, he/she will automatically get a refund worth members price - total discount availed as UC cash can be used while booking any service across any category"
    });
    document.getElementById("ans2").addEventListener("click", ()=>{
        document.getElementById("ans2").innerText=null;
    })
    document.getElementById("question3").addEventListener("click",  ()=>{
        document.getElementById("ans3").innerText = "Yes, maximum discount per transaction is limited to ₹150 "
    });
    document.getElementById("ans3").addEventListener("click", ()=>{
        document.getElementById("ans3").innerText=null;
    })
     document.getElementById("question4").addEventListener("click",  ()=>{
        document.getElementById("ans4").innerText = "No, there's no number of transactions under the membership. But as per our fair usage policy. the total discount you can avail is limited to 7 times the membership price."
    });
    document.getElementById("ans4").addEventListener("click", ()=>{
        document.getElementById("ans4").innerText=null;
    })
     document.getElementById("question5").addEventListener("click",  ()=>{
        document.getElementById("ans5").innerText ="Yes, as per our fair usage policy, the total discount you can avail is limited to 7 times the membership price you paid";
    });
    document.getElementById("ans5").addEventListener("click", ()=>{
        document.getElementById("ans5").innerText=null;
    })
     document.getElementById("question6").addEventListener("click",  ()=>{
        document.getElementById("ans6").innerText ="UC Plus professionals are a curated set of professionals who are top-rated, specially trained, and experts in their field."
    });
    document.getElementById("ans6").addEventListener("click", ()=>{
        document.getElementById("ans6").innerText=null;
    })
    let totalValue=0;
    for(let i=0;i< cartData.length;i++){
        totalValue+=cartData[i].price
    }
    let originalVal=document.getElementById("price")
    originalVal.innerText="₹"+totalValue;
    localStorage.setItem("total",totalValue)
    let paymentVal=document.getElementById("total")
    paymentVal.innerText="₹"+(totalValue-150)
