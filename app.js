let result = "";

fetch("./sample_products.json")
  .then((response) => response.json())
  .then(function (data) {
    data.forEach((slider) => {

     let discount = Math.round(100 - ((slider.price * 100) / slider.oldPrice)); //discount calculation
     let type = '';
     let discountDiv = '';
     let oldPriceDiv = '';
     let landDiv = '';
     let regionDiv = '';
     let artDiv = '';

    if(discount){
        discountDiv = `<div class="discount-box" id="discountBox"><p>%${discount}</p> </div>` //If there is a discount, the data is sent.
    }

    if(slider.oldPrice){
        oldPriceDiv = `<span class="price-old">${slider.oldPrice} €*</span>` //If there is a old price, the data is sent.
    }

    if(slider.params.land){
        landDiv = `${slider.params.land}` //If there is a land, the data is sent.
    }

    if(slider.params.region){
        regionDiv = `| ${slider.params.region}` //If there is a old region, the data is sent.
    }

    if(slider.params.art){
        artDiv  = `| ${slider.params.art}` //If there is a art, the data is sent.
    }

    if(slider.params.isNew == 'true'){
        type = `<div class="isNewBox" id="newBox"> <p>NUE</p> </div> ` //If there is a new product, the data is sent.
    }
    else if(slider.params.likeCount > 0){
        type = `<div class="like-box" id="likeBox"><p>&#9825;${slider.params.likeCount}</p></div>` //If there is a number of likes, the data is sent.
     }    
        
      result +=
    `<div class="item">
      <div class="container">
        <div class="space"></div>
        <div class="product-img">

            ${discountDiv}
            ${type}

            <img src=" ${slider.imageS}" alt=""> 
        </div>

        <div class="product-title">
            <h4> ${slider.name}</h4>
        </div>

        <div class="product-info">
            <p>${landDiv} ${regionDiv} ${artDiv} </p>
        </div>
        <br>
        <div class="product-price">
            <span>${slider.price}€*</span>
                  ${oldPriceDiv}
        </div>

        <div class="basePrice"> ${slider.params.basePrice} </div>
     </div>
    </div>`; 
      

      document.getElementById("owl-carousel1").innerHTML = result; // First Slider
      document.getElementById("owl-carousel2").innerHTML = result; // Second Slider
      document.getElementById("owl-carousel3").innerHTML = result; // Third Slider
    });
  });

  var delayInMilliseconds = 800; //1 second delay for the slider to enter data

  setTimeout(function() {
    const nextIcon = '<i class="fas fa-chevron-right"></i>';
    const prevIcon = '<i class="fas fa-chevron-left"></i>';
    $(".owl-carousel").owlCarousel({
      margin: 5,
      dots: false,
      nav: true,
      navText: [prevIcon, nextIcon],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1200: {
          items: 5,
        },
      },
    });

  }, delayInMilliseconds);