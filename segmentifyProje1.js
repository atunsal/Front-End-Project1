var sizeOzelArr = [];
var tamirArr = [];
var mobilyaArr = [];
var saglikArr = [];
var laptopArr = [];
var isitmaArr = [];
$.getJSON("product-list.json", function(json) {    
    for(let i=0; i<json.responses[0][0].params.recommendedProducts["Size Özel"].length; i++) {
        sizeOzelArr.push(json.responses[0][0].params.recommendedProducts["Size Özel"][i]);

        for(let j=0; j<json.responses[0][0].params.recommendedProducts["Size Özel"][i].categories.length; j++) {
            if(json.responses[0][0].params.recommendedProducts["Size Özel"][i].categories[j] == "Tamir, Tadilat Gereçleri") {
                tamirArr.push(json.responses[0][0].params.recommendedProducts["Size Özel"][i]);
            }
            if(json.responses[0][0].params.recommendedProducts["Size Özel"][i].categories[j] == "Mobilya") {
                mobilyaArr.push(json.responses[0][0].params.recommendedProducts["Size Özel"][i]);
            }
            if(json.responses[0][0].params.recommendedProducts["Size Özel"][i].categories[j] == "Sağlık, Medikal") {
                saglikArr.push(json.responses[0][0].params.recommendedProducts["Size Özel"][i]);
            }
            if(json.responses[0][0].params.recommendedProducts["Size Özel"][i].categories[j] == "Dizüstü Bilgisayar (Laptop)") {
                laptopArr.push(json.responses[0][0].params.recommendedProducts["Size Özel"][i]);
            }
            if(json.responses[0][0].params.recommendedProducts["Size Özel"][i].categories[j] == "Isıtma, Soğutma Sistemi") {
                isitmaArr.push(json.responses[0][0].params.recommendedProducts["Size Özel"][i]);
            }
        }
    }

    function sizeOzelPage() {
        for(let i=0; i<sizeOzelArr.length; i++) {
            var li = document.createElement('li');

            li.className = "splide__slide"
            li.innerHTML += '<img src="' + sizeOzelArr[i].image + '" loading="lazy" width="180" height="190">'
            li.innerHTML += '<p class="itemnames">' + sizeOzelArr[i].name + '</p>'
            li.innerHTML += '<p class="itemprices" style="font-family: Arial, Helvetica, sans-serif; background-color:rgb(238, 238, 238); padding:10px; border-radius:8px">' + sizeOzelArr[i].priceText + '</p>'
            if(sizeOzelArr[i].params.shippingFee == "FREE") {
                li.innerHTML += '<div id="itemshipping"class="fas">&#xf0d1;&nbsp;</div><div class="itemshipping">Ücretsiz Kargo</div>'
            }
            li.innerHTML += '<br><button class="sepettusu" type="button" onclick="sepetPopup()">Sepete Ekle</button>'
    
            document.getElementById('items').appendChild(li)
        }
    }
    function tamirPage() {
        for(let i=0; i<tamirArr.length; i++) {
            var li = document.createElement('li');

            li.className = "splide__slide"
            li.innerHTML += '<img src="' + tamirArr[i].image + '" loading="lazy" width="180" height="190">'
            li.innerHTML += '<p class="itemnames">' + tamirArr[i].name + '</p>'
            li.innerHTML += '<p class="itemprices" style="font-family: Arial, Helvetica, sans-serif; background-color:rgb(238, 238, 238); padding:10px; border-radius:8px">' + tamirArr[i].priceText + '</p>'
            if(tamirArr[i].params.shippingFee == "FREE") {
                li.innerHTML += '<div id="itemshipping"class="fas">&#xf0d1;&nbsp;</div><div class="itemshipping">Ücretsiz Kargo</div>'
            }
            li.innerHTML += '<br><button class="sepettusu" type="button" onclick="sepetPopup()">Sepete Ekle</button>'
    
            document.getElementById('items').appendChild(li)
        }
    }
    function mobilyaPage() {
        for(let i=0; i<mobilyaArr.length; i++) {
            var li = document.createElement('li');

            li.className = "splide__slide"
            li.innerHTML += '<img src="' + mobilyaArr[i].image + '" loading="lazy" width="180" height="190">'
            li.innerHTML += '<p class="itemnames">' + mobilyaArr[i].name + '</p>'
            li.innerHTML += '<p class="itemprices" style="font-family: Arial, Helvetica, sans-serif; background-color:rgb(238, 238, 238); padding:10px; border-radius:8px">' + mobilyaArr[i].priceText + '</p>'
            if(mobilyaArr[i].params.shippingFee == "FREE") {
                li.innerHTML += '<div id="itemshipping"class="fas">&#xf0d1;&nbsp;</div><div class="itemshipping">Ücretsiz Kargo</div>'
            }
            li.innerHTML += '<br><button class="sepettusu" type="button" onclick="sepetPopup()">Sepete Ekle</button>'
    
            document.getElementById('items').appendChild(li)
        }
    }
    function saglikPage() {
        for(let i=0; i<saglikArr.length; i++) {
            var li = document.createElement('li');

            li.className = "splide__slide"
            li.innerHTML += '<img src="' + saglikArr[i].image + '" loading="lazy" width="180" height="190">'
            li.innerHTML += '<p class="itemnames">' + saglikArr[i].name + '</p>'
            li.innerHTML += '<p class="itemprices" style="font-family: Arial, Helvetica, sans-serif; background-color:rgb(238, 238, 238); padding:10px; border-radius:8px">' + saglikArr[i].priceText + '</p>'
            if(saglikArr[i].params.shippingFee == "FREE") {
                li.innerHTML += '<div id="itemshipping"class="fas">&#xf0d1;&nbsp;</div><div class="itemshipping">Ücretsiz Kargo</div>'
            }
            li.innerHTML += '<br><button class="sepettusu" type="button" onclick="sepetPopup()">Sepete Ekle</button>'
    
            document.getElementById('items').appendChild(li)
        }
    }
    function laptopPage() {
        for(let i=0; i<laptopArr.length; i++) {
            var li = document.createElement('li');

            li.className = "splide__slide"
            li.innerHTML += '<img src="' + laptopArr[i].image + '" loading="lazy" width="180" height="190">'
            li.innerHTML += '<p class="itemnames">' + laptopArr[i].name + '</p>'
            li.innerHTML += '<p class="itemprices" style="font-family: Arial, Helvetica, sans-serif; background-color:rgb(238, 238, 238); padding:10px; border-radius:8px">' + laptopArr[i].priceText + '</p>'
            if(laptopArr[i].params.shippingFee == "FREE") {
                li.innerHTML += '<div id="itemshipping"class="fas">&#xf0d1;&nbsp;</div><div class="itemshipping">Ücretsiz Kargo</div>'
            }
            li.innerHTML += '<br><button class="sepettusu" type="button" onclick="sepetPopup()">Sepete Ekle</button>'
    
            document.getElementById('items').appendChild(li)
        }
    }
    function isitmaPage() {
        for(let i=0; i<isitmaArr.length; i++) {
            var li = document.createElement('li');

            li.className = "splide__slide"
            li.innerHTML += '<img src="' + isitmaArr[i].image + '" loading="lazy" width="180" height="190">'
            li.innerHTML += '<p class="itemnames">' + isitmaArr[i].name + '</p>'
            li.innerHTML += '<p class="itemprices" style="font-family: Arial, Helvetica, sans-serif; background-color:rgb(238, 238, 238); padding:10px; border-radius:8px">' + isitmaArr[i].priceText + '</p>'
            if(isitmaArr[i].params.shippingFee == "FREE") {
                li.innerHTML += '<div id="itemshipping"class="fas">&#xf0d1;&nbsp;</div><div class="itemshipping">Ücretsiz Kargo</div>'
            }
            li.innerHTML += '<br><button class="sepettusu" type="button" onclick="sepetPopup()">Sepete Ekle</button>'
    
            document.getElementById('items').appendChild(li)
        }
    }
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page=="segmentifyProje1.html") {
        sizeOzelPage()
    }
    if(page=="tamir.html") {
        tamirPage()
    }
    if(page=="mobilya.html") {
        mobilyaPage()
    }
    if(page=="saglik.html") {
        saglikPage()
    }
    if(page=="laptop.html") {
        laptopPage()
    }
    if(page=="isitma.html") {
        isitmaPage()
    }

    function sliderMobile(a) {
        if(a.matches) {
            new Splide( '.splide', {
                //type: 'loop',
                perPage: 2,
                //width: '70%',
                //padding: {left:10, right:20}
                //height:400,
                pagination: false,
            } ).mount(); 
        } else {
            new Splide( '.splide', {
                //type: 'loop',
                perPage: 4,
                //width: '70%',
                //padding: {left:10, right:20}
                //height:400,
                pagination: false,
            } ).mount(); 
        }
    }
    var a = window.matchMedia("(max-width: 700px)")
    sliderMobile(a);
    a.addListener(sliderMobile)
    console.log(isitmaArr[3].name)
});

var saniye = 8;
function sepetPopup() {
    document.getElementById("popupid").style.visibility = "visible";
    document.getElementById("popupid").style.opacity = "1";
    document.getElementById("popupid").style.transition = "opacity 2s linear";

    saniye -= 1;
    //Alttaki if statement silinirse kapatma tusu aktif edilebilir.
    //Silinmezse 8 saniyede otomatik kapanacaktir.
    if(saniye<=1) {
        document.getElementById("popupid").style.visibility = "hidden";
        saniye = 8;
    } else {
        setTimeout(sepetPopup, 1000);
    }
}

function closePopup() {
    document.getElementById("popupid").style.visibility = "hidden";
}

