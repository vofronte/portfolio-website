var homeLayers = $('.home-parallax__layer');
var feedbackLayers = $('.feedback-parallax__layer');

//speed to array homePar
var speedHomeArr = [];
for (let i = 0; i < homeLayers.length; i++) {
    var speed = homeLayers[i].dataset.speed;
    speedHomeArr.push(speed);
}

//speed to array feedbackPar
var speedFeedbackArr = [];
for (let i = 0; i < feedbackLayers.length; i++) {
    var speed = feedbackLayers[i].dataset.speed;
    speedFeedbackArr.push(speed);
}

//change translateY in Home Section
function homeParallax() {
    var wScroll = window.pageYOffset;
    for (let i = 0; i < speedHomeArr.length; i++) {
        var coords = wScroll / -speedHomeArr[i] + 'px';
        homeLayers[i].style.transform = `translateY(${coords})`;
    }
}

//change translateY in FeedBack Section
function feedbackParallax(wScroll) {
    for (let i = 0; i < speedFeedbackArr.length; i++) {
        var coords = wScroll / -speedFeedbackArr[i] + 'px';
        feedbackLayers[i].style.transform = `translateY(${coords})`;
    }
}

//event scroll
$(window).scroll(function () {
    var wScroll = window.pageYOffset;

    if (window.innerHeight > wScroll) {
        homeParallax();
    }

    var feedbackBlock = document.querySelector('.feedback-parallax');
    var topFeedbackBlock = feedbackBlock.getBoundingClientRect().top;
    var feedbackBlockOffset = window.innerHeight - topFeedbackBlock;

    if (feedbackBlockOffset > 0) {
        feedbackParallax(feedbackBlockOffset);
    }

});

