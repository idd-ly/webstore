/******* GLOBAL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

// An Object holds multiple variables (properties) together

//data

//arrays

const products = [
  {
    name: `Tyler the Creator - Igor`,
    price: `35.09`,
    img: `img/tylerevolution.jpg`,
    description: `Tyler, the Creator’s sixth album is impressionistic and emotionally charged, the result of an auteur refining his style and baring more of his soul than ever before.`,
    qty: `IN STOCK`,
    idty: `Product 012`,
  }, {
  name: `Frank Ocean - Moon River`,
  price: `50.00`,
  img: `img/moonriver`,
  description: `Frank Ocean's cover of Andy William's original composition "Moon River" delivers a new twist of vocals harmonies within the current era of music.`,
  qty: `OUT OF STOCK`,
  idty:  `Product 013`,
  },

{
  name:`Run The Jewels -RTJ II`,
  price: `41.86`,
  img:`img/rtj`,
  description: `Run the Jewels, also refered to as RTJ is a dynamic duo of rapper and producer. From their current debut of the original, self-titled Run the Jewels, is still considered a classic today. With the sequel, it follows up its previous scores and improves on it.`,
  qty:  `IN STOCK`,
  idty: `Product 014`,
},

{
  name:`BROCKHAMPTON - SATURATION II`,
  price: `37.99`,
  img:`img/sat`,
  description: `BROCKHAMPTON, the self proclaimed best boyband in the world drop their latest album, Saturation II. `,
  qty:  `OUT OF STOCK`,
  idty: `Prouct: 015`,
},

{
  name:`Playboy Carti - Die Lit`,
  price: `29.99`,
  img:`img/dielit`,
  description: `Atlanta rapper, Playboy Carti's debut full-length studio ablbum, creates new rap conventions for the new age of hip-hop.`,
  qty:  `IN STOCK`,
  idty: `Procudt: 016`, 
},

{
  name:`Freddie Gibbs & Madlib - Bandana`,
  price: `36.99`,
  img:`img/fre`,
  description: `One of the most consistent records this year, by two of Hip-hop's contrasting figures.`,
  qty:  `OUT OF STOCK`,
  idty: `Product: 017`,
},

{
  name:`E-Dubble - Plan A`,
  price: `23.99`,
  img:`img/pna`,
  description: `A stylistic tone that is necessary for E-Dubble's music, with his most recent album drop.`,
  qty:  `OUT OF STOCK`,
  idty: `Product: 018`,
},

{
  name:`Frank Ocean - Chanel Orange`,
  price: `16.99`,
  img:`img/cho`,
  description: `After making a splash with his first mixtape, Frank Ocean is killing it in the world of contemporary R&B with this new album..`,
  qty:  `OUT OF STOCK`,
  idty: `Product: 019`,
},

{
  name:`Childish Gambino - Because the Internet`,
  price: `15.95`,
  img:`img/bti`,
  description: ` Because The Internet, the most ambitious album from multi-talented figure, Childish Gambino.  `,
  qty:  `IN STOCK`,
  idty: `Product: 020`,
},

{
  name:`Vince Staples - FM!`,
  price: `100.99`,
  img:`img/fml`,
  description: `FM!'s fun concept begs for a longer runtime, but even at 22 minutes the project has plenty to offer with its quality beats, flows, hooks, and lyrics.`,
  qty:  `OUT OF STOCK`,
  idty: `Product: 021`,
},

{
  name:`The Weeknd - Kiss Land`,
  price: `47.99`,
  img:`img/ksl`,
  description: `The Canadian experimental R&B project the Weekend goes from his mixtape, to his first commerical studio album.`,
  qty:  `IN STOCK`,
  idty: `Product: 022`,
},

{
  name:`N.E.R.D - No One Ever Really Dies`,
  price: `$29.99`,
  img:`img/ned`,
  description: `N.E.R.D.'s latest offers some of the freshest production of 2017.  `,
  qty:  `OUT OF STOCK`,
  idty: `Product: 023`,
},

{
  name:`Janelle Monáe - Dirty Computer`,
  price: `44.99`,
  img:`img/dct`,
  description: `Dirty Computer is Janelle Monáe's poppiest album to date, as well as her most deeply sexual and political.`,
  qty:  `OUT OF STOCK`,
  idty: ` Product: 024 `,
},

{
  name:`KIDS SEE GHOSTS -Self-Titled DELUXE EDITION `,
  price: `249.99`,
  img:`img/ksg`,
  description: `KIDS SEE GHOSTS finds both Kanye West and Kid Cudi in top form as they host a psychedelic odyssey through the darkest and brightest corners of their psyches.`,
  qty:  `OUT OF STOCK`,
  idty: `Product: 025`,
},

{
  name:`Kendrick Lamar - To Pimp a Butterfly`,
  price: `34.99`,
  img:`img/tpb`,
  description: `Several years ago, Kendrick Lamar was hip hop's underdog. Today, he's dropping what's possibly the best rap album of the decade.`,
  qty:  `IN STOCK`,
  idty: `Product: 026`,
},

{
  name:`Jaden Smith - Syre`,
  price: `34.99`,
  img:`img/syr`,
  description: `Jaden Smith's latest film is an auditory one, exploring the lyrical follies of in desperate need of perspective.`,
  qty:  `OUT OF STOCK`,
  idty: `Product: 027`,
},

{
  name:`MadeinTYO - Thank You Mr. Tokyo`,
  price: `89.99`,
  img:`img/tyt`,
  description: `After making the undeniably great "Uber Everywhere", Madeintyo comes back with his most recent release.`,
  qty:  ` IN STOCK `,
  idty: `Product: 028`,
},

{
  name:`Anderson Paak - Oxnard`,
  price: `32.99`,
  img:`img/oxd`,
  description: `Oxnard has a stronger sense of direction than its predecessor and is a breath of fresh air in the current state of pop rap and neo-soul.`,
  qty:  `IN STOCK`,
  idty: `Product: 029`,
},

{
  name:`BROCKHAMPTON - Ginger`,
  price: `39.99`,
  img:`img/gng`,
  description: `GINGER is a return to form for the BROCKHAMPTON boys, albeit a decidedly downcast one.  `,
  qty:  `IN STOCK`,
  idty: `Product: 030`,
},

{
  name:`Aminé - Places + Faces`,
  price: `$44.99`,
  img:`img/pnf`,
  description: `Portland's own Aminé sells himself, of a different sound compared to his first-single.`,
  qty:  `OUT OF STOCK`,
  idty: `Product: 031`,
},
]
//Functionality

/*
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
*/

function getProductAsHtmlString (Prod) {
return`	
	<article class="intro-artstyle">
<div class="idproduct">
<h2 class="identificationnumber">${Prod.idty}</h2>
</div>
<div class="bg-color">
  <a href="review.html"><img alt="intro" class="t-cre" src="img/tylerevolution.jpg"></a>
</div>
<div class="quatity-wrap">
  <h2 class="quantitynumber">${Prod.qty}</h2>
</div>
<h2 class="title"><a href="review.html">${Prod.name}</a></h2>
<p class="inr pstyle>${Product.description} </p>
<p class="priceablum">${Product.price}</p>
</article>`;
}






/************* function render *************/

function renderProducts(arr) {
  document.getElementById('products').innerHTML = arr.map(getProductAsHtmlString).join('');
}

renderProducts(products);




/************* EXECUTABLE *************/

