// Basket
var basketLink = document.querySelectorAll(".basket-link");

var basketPopup = document.querySelector(".modal-basket");
var basketClose = basketPopup.querySelector(".modal-close");

basketLink.forEach (function (elem) {
    elem.addEventListener("click", function(evt) {
        evt.preventDefault();
        basketPopup.classList.add("modal-show");
    });
});

basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (basketPopup.classList.contains("modal-show")) {
            basketPopup.classList.remove("modal-show");
        }
    }
});





// Map
var mapLink = document.querySelector(".modal-map-link");

if (mapLink)
{
    var mapPopup = document.querySelector(".modal-map");

    var mapClose = mapPopup.querySelector(".modal-close");

    mapLink.addEventListener("click", function(evt) {
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

if (feedbackLink)
{
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
        }

        else if (storageName && !storageEmail) {
            feedbackFormEmail.focus();
        }
        else if (storageName && storageEmail) {
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
            if (feedbackPopup.classList.contains("modal-show"))
            {
                feedbackPopup.classList.remove("modal-show");
                feedbackPopup.classList.remove("modal-show");
                feedbackPopup.classList.remove("modal-error");
            }
        }
    });
}





// Service-slider
var serviceItemDelivery = document.querySelector(".service-item-delivery");

if (serviceItemDelivery)
{
    var serviceItemGuarantee = document.querySelector(".service-item-guarantee");
    var serviceItemCredit = document.querySelector(".service-item-credit");

    var serviceItemInfoDelivery = document.querySelector(".service-item-info-delivery");
    var serviceItemInfoGuarantee = document.querySelector(".service-item-info-guarantee");
    var serviceItemInfoCredit = document.querySelector(".service-item-info-credit");

    serviceItemDelivery.addEventListener("click", function (evt) {
        evt.preventDefault();
        serviceItemDelivery.classList.add("service-item-current");
        serviceItemGuarantee.classList.remove("service-item-current");
        serviceItemCredit.classList.remove("service-item-current");

        serviceItemInfoDelivery.classList.add("service-item-info-current");
        serviceItemInfoGuarantee.classList.remove("service-item-info-current");
        serviceItemInfoCredit.classList.remove("service-item-info-current");
    });

    serviceItemGuarantee.addEventListener("click", function (evt) {
        evt.preventDefault();
        serviceItemGuarantee.classList.add("service-item-current");
        serviceItemDelivery.classList.remove("service-item-current");
        serviceItemCredit.classList.remove("service-item-current");

        serviceItemInfoDelivery.classList.remove("service-item-info-current");
        serviceItemInfoGuarantee.classList.add("service-item-info-current");
        serviceItemInfoCredit.classList.remove("service-item-info-current");
    });

    serviceItemCredit.addEventListener("click", function (evt) {
        evt.preventDefault();
        serviceItemCredit.classList.add("service-item-current");
        serviceItemDelivery.classList.remove("service-item-current");
        serviceItemGuarantee.classList.remove("service-item-current");

        serviceItemInfoDelivery.classList.remove("service-item-info-current");
        serviceItemInfoGuarantee.classList.remove("service-item-info-current");
        serviceItemInfoCredit.classList.add("service-item-info-current");
    });
}



