// Basket
var basketLink = document.querySelectorAll(".basket-link");

var basketPopup = document.querySelector(".modal-basket");
var basketClose = basketPopup.querySelector(".modal-close");
var continueShopping = basketPopup.querySelector(".basket-button-continue-shopping");


basketLink.forEach(function (elem) {
    elem.addEventListener("click", function (evt) {
        evt.preventDefault();
        basketPopup.classList.add("modal-show-appear");
    });
});

basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show-appear");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (basketPopup.classList.contains("modal-show-appear")) {
            basketPopup.classList.remove("modal-show-appear");
        }
    }
});

continueShopping.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show-appear");
});


// Map
var mapLink = document.querySelector(".modal-map-link");

if (mapLink) {
    var mapPopup = document.querySelector(".modal-map");

    var mapClose = mapPopup.querySelector(".modal-close");

    mapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (mapPopup.classList.contains("modal-show")) {
                mapPopup.classList.remove("modal-show");
            }
        }
    });
}


// Feedback
var feedbackLink = document.querySelector(".modal-feedback-link");

if (feedbackLink) {
    var feedbackPopup = document.querySelector(".modal-feedback");
    var feedbackClose = feedbackPopup.querySelector(".modal-close");

    var feedbackForm = feedbackPopup.querySelector("form");
    var feedbackFormName = feedbackPopup.querySelector("[name=name]");
    var feedbackFormEmail = feedbackPopup.querySelector("[name=email]");
    var feedbackFormText = feedbackPopup.querySelector("textarea");

    var isStorageSupport = true;
    var storageName = "";
    var storageEmail = "";

    try {
        storageName = localStorage.getItem("name");
    } catch (err) {
        isStorageSupport = false;
    }

    try {
        storageEmail = localStorage.getItem("email");
    } catch (err) {
        isStorageSupport = false;
    }

    feedbackLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        feedbackPopup.classList.add("modal-show");

        if (storageName) {
            feedbackFormName.value = storageName;
        }

        if (storageEmail) {
            feedbackFormEmail.value = storageEmail;
        }

        if (!storageName && !storageEmail) {
            feedbackFormName.focus();
        } else if (storageName && !storageEmail) {
            feedbackFormEmail.focus();
        } else if (storageName && storageEmail) {
            feedbackFormText.focus();
        }
    });

    feedbackClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
        feedbackPopup.classList.remove("modal-error");
    });

    feedbackForm.addEventListener("submit", function (evt) {
        if (!feedbackFormName.value || !feedbackFormEmail.value || !feedbackFormText.value) {
            evt.preventDefault();
            feedbackPopup.classList.remove("modal-error");
            feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
            feedbackPopup.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("name", feedbackFormName.value);
                localStorage.setItem("email", feedbackFormEmail.value);
            }
        }
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (feedbackPopup.classList.contains("modal-show")) {
                feedbackPopup.classList.remove("modal-show");
                feedbackPopup.classList.remove("modal-show");
                feedbackPopup.classList.remove("modal-error");
            }
        }
    });
}


// Promo-slider
var promoSlides = document.querySelectorAll(".promo-big-item");
if (promoSlides.length) {
    var currentPromoSlide = 0;
    var slideInterval = setInterval(nextPromoSlide, 3000);

    var promoNextButton = document.querySelector(".promo-big-item-slider-scroll-next");
    var promoBackButton = document.querySelector(".promo-big-item-slider-scroll-back");

    var promoSliderControls = document.querySelectorAll(".slider-control");

    function nextPromoSlide() {
        promoSlides[currentPromoSlide].classList.remove("promo-big-item-show");
        promoSliderControls[currentPromoSlide].classList.remove("slider-control-active");
        currentPromoSlide = (currentPromoSlide + 1) % promoSlides.length;
        promoSlides[currentPromoSlide].classList.add("promo-big-item-show");
        promoSliderControls[currentPromoSlide].classList.add("slider-control-active");
    }

    promoNextButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (currentPromoSlide !== promoSlides.length - 1) {
            promoSlides[currentPromoSlide].classList.remove("promo-big-item-show");
            promoSliderControls[currentPromoSlide].classList.remove("slider-control-active");
            currentPromoSlide = (currentPromoSlide + 1);


            promoSlides[currentPromoSlide].classList.add("promo-big-item-show");
            promoSliderControls[currentPromoSlide].classList.add("slider-control-active");
        }
    });

    promoBackButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (currentPromoSlide !== 0) {
            promoSlides[currentPromoSlide].classList.remove("promo-big-item-show");
            promoSliderControls[currentPromoSlide].classList.remove("slider-control-active");
            currentPromoSlide = (currentPromoSlide - 1);
            promoSlides[currentPromoSlide].classList.add("promo-big-item-show");
            promoSliderControls[currentPromoSlide].classList.add("slider-control-active");
        }
    });
}


// Service-slider
var serviceSlides = document.querySelectorAll(".service-item-info");
var serviceSliderControls = document.querySelectorAll(".service-item");

serviceSliderControls.forEach(function (item, i, arr) {
    item.addEventListener("click", function (evt) {
        evt.preventDefault();

        serviceSliderControls.forEach(function (elem) {
            elem.classList.remove("service-item-current");
        });
        serviceSlides.forEach(function (elem) {
            elem.classList.remove("service-item-info-current");
        });

        item.classList.add("service-item-current");
        serviceSlides[i].classList.add("service-item-info-current");
    });
});



