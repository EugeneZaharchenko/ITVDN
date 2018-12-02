(function() {
    var openFormButton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');
    var nav = document.querySelector('.nav');

    if (openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            ITVDN.form.open();
        })
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (ITVDN.form.isValid()) {
                console.log('All good');
            } else {
                console.log('Is not valid');
            }

        })
    }

    if (nav) {
        nav.addEventListener('click', function(e) {
            var target = e.target;

            if (target.tagName.toLowerCase() !== 'a') {
                return;
            }

            e.preventDefault();
            ITVDN.navigation.toggleToActiveLink(target);
        });
    }

    window.onload = function () {
        var scrolled;
        var timer;
        document.getElementById('top').style.visibility = 'hidden';

        document.getElementById('top').onclick = function(){
            scrolled = window.pageYOffset;
            scrollToTop();
        }

        function scrollToTop(){
            if (scrolled > 0) {
                window.scrollTo(0, scrolled);
                scrolled = scrolled - 180; //100 - скорость прокрутки
                timer = setTimeout(scrollToTop, 200);
            }
            else {
                clearTimeout(timer);
                window.scrollTo(0,0);
            }
        }
    }

    var prevScrollpos = 1074;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("top").style.visibility = "hidden";
        } else {
            document.getElementById("top").style.visibility = "visible";
        }
    }

}());