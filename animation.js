var isDiaporamaVisible = false; // Variable pour suivre l'état du diaporama
  
    // Fonction pour afficher la nouvelle page de menu
    function showMenuPage() {
      document.getElementById("accueil").style.display = "none";
      document.getElementById("menu-page").style.display = "block";
    }
  
    function changeColor() {
      var button = document.getElementById("like-button");
      button.classList.toggle("clicked");
    }
  
    function showAccueil() {
      document.getElementById("menu-page").style.display = "none";
      document.getElementById("accueil").style.display = "block";
    }
  
    // Fonction pour revenir à la page d'accueil
    function showAccueil() {
      document.getElementById("menu-page").style.display = "none";
      document.getElementById("accueil").style.display = "block";
    }
  
    document.querySelector("#inscription form").addEventListener("submit", function(event) {
      event.preventDefault();
      document.getElementById("inscription").style.display = "none";
      document.getElementById("diaporama").style.display = "block";
      isDiaporamaVisible = true; // Le diaporama est maintenant visible
    });
  
    document.querySelector(".btn-acceder").addEventListener("click", function() {
      if (isDiaporamaVisible) {
        document.getElementById("diaporama").style.display = "none";
        document.getElementById("accueil").style.display = "block";
      }
    });
  
    document.getElementById("contact-link").addEventListener("click", function() {
      document.getElementById("accueil").style.display = "none";
      document.getElementById("contact-form").style.display = "block";
    });
  
    // Initialiser Swiper
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChangeTransitionEnd: function() {
          if (this.activeIndex === 0 && !isDiaporamaVisible) {
            // Le diaporama est revenu à la première slide et n'a pas encore été visité
            isDiaporamaVisible = true;
            document.getElementById("inscription").style.display = "none";
            document.getElementById("diaporama").style.display = "block";
          }
        }
      }
    });
  
    var plusButtons = document.querySelectorAll(".plus-btn");
  var minusButtons = document.querySelectorAll(".minus-btn");
  var quantityInputs = document.querySelectorAll(".quantity");

  plusButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
      var currentQuantity = parseInt(quantityInputs[index].textContent);
      quantityInputs[index].textContent = currentQuantity + 1;
      total(); // Mettre à jour la somme après l'augmentation de la quantité
    });
  });

  minusButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
      var currentQuantity = parseInt(quantityInputs[index].textContent);
      if (currentQuantity > 0) {
        quantityInputs[index].textContent = currentQuantity - 1;
        total(); // Mettre à jour la somme après la diminution de la quantité
      }
    });
  });
  var likeButtons = document.querySelectorAll(".like-btn");
likeButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    this.classList.toggle("is-active");
  });
});
  // Fonction pour calculer la somme
  function total() {
    var prices = document.querySelectorAll(".price");
    var quantities = document.querySelectorAll(".quantity");
    var sum = 0;

    for (var i = 0; i < prices.length; i++) {
      sum += parseFloat(prices[i].textContent) * parseInt(quantities[i].textContent);
    }

    document.getElementById("total").textContent = sum.toFixed(2);
  }

  // Appel initial à la fonction total() pour mettre à jour la somme au chargement de la page
  total();
