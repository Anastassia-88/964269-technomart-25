// Map
var mapLink = document.querySelector(".modal-map-link");

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



// Feedback
var feedbackLink = document.querySelector(".modal-feedback-link");
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

    if (storageName && !storageEmail) {
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
            feedbackPopup.classList.remove("modal-error");
        }
    }
});


