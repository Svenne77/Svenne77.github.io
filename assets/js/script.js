var animating = !1;
document.querySelectorAll("button.BTN[data-category-target]").forEach(function (t) {
    t.addEventListener("click", function () {
        if (!1 === animating) {
            var t = this.dataset.categoryTarget;
            if (((animating = !0), "*" === t))
                $("div[data-category]").fadeIn(function () {
                    animating = !1;
                });
            else {
                var a = JSON.stringify(t);
                $("div[data-category]:not([data-category=" + a + "])").fadeOut(function () {
                    setTimeout(function () {
                        $("div[data-category=" + a + "]").fadeIn(function () {
                            animating = !1;
                        });
                    }, 150);
                });
            }
        }
    });
});
