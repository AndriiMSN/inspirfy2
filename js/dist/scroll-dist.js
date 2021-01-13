(() => {
    let e = !0;
    setTimeout((() => {
        e = !1
    }), 3600);
    let t = 1600, s = 0;
    const i = document.querySelectorAll(".scrolling-block"), o = document.querySelector(".lets__talk"),
        n = document.querySelector(".start__earning");

    function l(e, t) {
        e.ripples({resolution: 40, perturbance: .15, interactive: !1, width: t});
        let s = .5 * e.outerWidth(), i = .5 * e.outerHeight();
        e.ripples("drop", s, i, 200, .15), setTimeout((() => {
            e.ripples("set", "perturbance", .1)
        }), 600), setTimeout((() => {
            e.ripples("set", "perturbance", .05)
        }), 900), setTimeout((() => {
            e.ripples("set", "perturbance", .025)
        }), 1200), setTimeout((() => {
            e.ripples("set", "perturbance", 0), e.ripples("destroy")
        }), 1500)
    }

    function c(e) {
        if (2 === e) {
            let t = i[e].querySelector(".toggle__slider.active .toggle-bg-img");
            t.classList.add("rippled"), l($(`.${t.className.split(" ")[0]}`), t.clientWidth)
        }
        if (3 === e) {
            let t = i[e].querySelector(".toggle__slider.active .toggle-bg-img");
            t.classList.add("rippled"), l($(`.${t.className.split(" ")[0]}`), t.clientWidth)
        }
        if (4 === e) {
            let t = i[e].querySelector(".toggle__slider.active .toggle-bg-img");
            t.classList.add("rippled"), l($(`.${t.className.split(" ")[0]}`), t.clientWidth)
        }
        if (6 === e) {
            let t = i[e].querySelector(".about__img");
            t.classList.add("rippled"), l($(`.${t.className.split(" ")[0]}`), t.clientWidth)
        }
    }

    function a() {
        return s + 1 !== i.length ? (s++, i[s - 1].classList.remove("active"), i[s - 1].classList.remove("animate"), i[s].classList.add("active"), i[s].classList.add("animate"), s !== i.length ? i[s - 1].classList.add("active") : i[s - 1].classList.add("invise"), i[s + 1] && (i[s + 1].classList.remove("active"), i[s + 1].classList.add("invise")), c(s)) : s = s, s
    }

    function d() {
        return s - 1 != -1 ? (s--, i[s].classList.remove("invise"), i[s].classList.add("animate"), i[s].classList.add("active"), i[s + 1].classList.remove("animate"), i[s + 1].classList.remove("active"), i[s + 1].classList.add("invise"), c(s)) : s = s, s
    }

    function r() {
        s === i.length - 2 ? $("html,body").animate({
            scrollTop: i[s].offsetTop - (document.documentElement.clientHeight - i[s].clientHeight) / 2,
            behavior: "smooth"
        }, 800, (() => {
            setTimeout((() => {
            }), t)
        })) : $("html,body").animate({scrollTop: i[s].offsetTop, behavior: "smooth"}, 800, (() => {
            setTimeout((() => {
            }), t)
        }))
    }

    function u(s, o, n) {
        e || 0 === i[2].offsetTop || (e = !0, 0 !== o ? (s.preventDefault(), setTimeout((function () {
            e = !1
        }), t)) : e = !1, o > 0 && 0 === n ? (a(), r()) : o < 0 && 0 === n && (d(), r()))
    }

    window.addEventListener("wheel", (function (e) {
        if (o.classList.contains("open") || n.classList.contains("open")) return !1;
        if (document.documentElement.clientWidth >= 1366) {
            let t = e.deltaY, s = e.deltaX, o = i[i.length - 1].offsetTop;
            pageYOffset > o - 10 && 0 !== o ? t < 0 && 0 === s && (e.preventDefault(), u(e, t, s)) : (0 !== t && e.preventDefault(), u(e, t, s))
        }
    }), {passive: !1});
    window.addEventListener("scroll", (e => {
        e.preventDefault(), s !== i.length - 1 && document.documentElement.clientWidth >= 1366 && (s === i.length - 2 ? window.scrollTo(0, i[s].offsetTop - (document.documentElement.clientHeight - i[s].clientHeight) / 2) : window.scrollTo(0, i[s].offsetTop))
    }));
    let f = 0, m = 0;
    window.addEventListener("scroll", (e => {
        if (document.documentElement.clientWidth < 1366) {
            let e = window.pageYOffset || document.documentElement.scrollTop;
            if (e > f) {
                if (pageYOffset > i[i.length - 2].offsetTop) return s = i.length - 1, i[s].classList.add("animate"), i[s].classList.add("active"), console.log(s, "1"), s;
                if (i[m + 1] && pageYOffset + document.documentElement.clientHeight > i[m + 1].offsetTop + i[m + 1].clientHeight / 10 - 10) return m += 1, s = m, i[s].classList.add("animate"), i[s].classList.add("active"), console.log(s, "2"), m
            } else {
                if (pageYOffset < i[1].offsetTop) return s = 0, i[s].classList.add("animate"), i[s].classList.add("active"), console.log(s, "3"), s;
                if (i[m - 1] && pageYOffset - document.documentElement.clientHeight < i[m - 1].offsetTop + i[m - 1].clientHeight / 10 - 10) return m -= 1, s = m, i[s].classList.add("animate"), i[s].classList.add("active"), console.log(s, "4"), m
            }
            return f = e <= 0 ? 0 : e
        }
    }));
    let p = document.documentElement.clientWidth, g = document.documentElement.clientHeight;
    window.addEventListener("resize", (() => {
        if (console.log(s), document.documentElement.clientWidth !== p && document.documentElement.clientHeight !== g) return i[s].classList.add("active"), window.scrollTo(0, i[s].offsetTop), p = document.documentElement.clientWidth, g = document.documentElement.clientHeight
    }));
    const h = document.querySelector(".arrow__up");
    ["click", "touchend"].forEach((e => h.addEventListener(e, (() => (s = 0, $("html,body").animate({
        scrollTop: i[s].offsetTop,
        behavior: "smooth"
    }, 800), s))))), document.querySelectorAll(".header__nav__items li").forEach((e => {
        let t = e.getAttribute("data-nav"), o = e.getAttribute("data-counter");
        ["click", "touchend"].forEach((n => e.addEventListener(n, (() => {
            s = +o, document.querySelector("html").classList.remove("lock"), i.forEach((e => {
                e.classList.add("active")
            })), $("html,body").animate({
                scrollTop: document.querySelector(`.${t}`).offsetTop,
                behavior: "smooth"
            }, 800), setTimeout((() => {
                i[s].classList.add("animate")
            }), 300)
        }), !1)))
    })), document.onkeydown = function (t) {
        if (document.documentElement.clientWidth >= 1366) {
            if (32 === t.keyCode && t.target === document.body) {
                let s = i[i.length - 1].offsetTop;
                if (pageYOffset > s - 10 && 0 !== s) ; else if (o.classList.contains("open") || n.classList.contains("open")) ; else {
                    if (e || 0 === i[2].offsetTop) return void t.preventDefault();
                    e = !0, setTimeout((function () {
                        e = !1
                    }), 700), a(), r()
                }
            }
            if ("38" == t.keyCode) {
                let s = i[i.length - 1].offsetTop;
                if (pageYOffset > s - 10 && 0 !== s) ; else if (o.classList.contains("open") || n.classList.contains("open")) ; else {
                    if (e || 0 === i[2].offsetTop) return void t.preventDefault();
                    e = !0, setTimeout((function () {
                        e = !1
                    }), 700), d(), r()
                }
            } else if ("40" == t.keyCode) {
                let s = i[i.length - 1].offsetTop;
                if (pageYOffset > s - 10 && 0 !== s) ; else if (o.classList.contains("open") || n.classList.contains("open")) ; else {
                    if (e || 0 === i[2].offsetTop) return void t.preventDefault();
                    e = !0, setTimeout((function () {
                        e = !1
                    }), 700), a(), r()
                }
            }
        }
    }
})();