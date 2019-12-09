// data
// functionality
// executable
/******* GLOBAL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

// An Object holds multiple variables (properties) together

//data

const product0 = {
  name: `Tyler The Creator - Igor`,
  price: `$30.00`,
  description: `Tyler Gregory Okonma (born March 6, 1991), universally refered to as Tyler, the Creator. He's a self-entitled rapper, producer, and known for his pushes through the fashion industry. He rose to prominence as the leader and co-founder of the hip hop collective Odd Future and has rapped on and produced songs for nearly every Odd Future release.`,
  qty: `Quantity 1`,
  img:  `img/tylerevolution.jpg`
};

const product1 = {
  name: `Frank Ocean - Moon River`,
  price: `$50.00`,
  description: `Frank Ocean's cover of Andy William's original composition "Moon River" delivers a new twist of vocals harmonies within the current era of music.`,
  qty: `OUT OF STOCK`
};

const product2 = {
name: `Run The Jewels - RTJ II `,
price: `$80.00`,
description: `Run the Jewels, also refered to as RTJ is a dynamic duo of rapper and producer. From their current debut of the original, self-titled Run the Jewels, is still considered a classic today. With the sequel, it follows up its previous scores and improves on it. `,
qty: `Quantity: 5`
};

const product3 = {
  name: `BROCKHAMPTON - Saturation II`,
  price: `$110.00`,
  description: `BROCKHAMPTON, the self proclaimed best boyband in the world drop their latest album, Saturation II. The American Rap Collaboration between prominent members of vocals and producers have created one of the most creative dynamics in music in the current decade.`,
  qty: `Quanity: 2`
};

const product4 = {
  name: `Playboy Carti - Die Lit`,
  price: `$120.00`,
  description: `Atlanta rapper, Playboy Carti's debut full-length studio ablbum, creates new rap conventions for the new age of hip-hop.`,
  qty: `3`
};
const product5 = {
  name: `Freddie Gibbs & Madlib - Bandana` ,
  price: `$100.00` , 
  description: `One of the most consistent records this year, by two of Hip-hop's contrasting figures.` ,
  qty: `OUT OF STOCK`
};

//Functionality


function getProductAsHtmlString(product) { 
return `<article class="intro-artstyle">

<h2 class="identificationnumber">#123456</h2>

<img src="img/tylerevolution.jpg" class="t-cre" alt="intro"></a></div>

<div class="quatity-wrap">

<h2 class="quantitynumber">${product.qty}</h2>
</div>

<h2 class="title"><a href="review.html">${product.name}</a></h2>

<p class="inr pstyle">${product.description}</p>

<p class="pricealbum" >${product.price}</p>
</article>`;
}


//array 


/************* EXECUTABLES *************/




/************* EXECUTABLE *************/
document.getElementById (`products`).innerHTML =getProductAsHtmlString (product0)
document.getElementById (`products`).innerHTML += getProductAsHtmlString (product1)
document.getElementById (`products`).innerHTML += getProductAsHtmlString (product2)
document.getElementById (`products`).innerHTML += getProductAsHtmlString (product3)
document.getElementById (`products`).innerHTML += getProductAsHtmlString (product4)
document.getElementById (`products`).innerHTML += getProductAsHtmlString (product5)