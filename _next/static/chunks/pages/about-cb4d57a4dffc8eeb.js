(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2521], {
        512: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
                return n(7900)
            }])
        },
        3717: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return k
                }
            });
            var i = n(828),
                a = n(5893),
                s = n(7294),
                o = n(1664),
                r = n.n(o),
                l = n(1163),
                c = n.n(l),
                d = JSON.parse('[{"id":1,"name":"Home","link":"/"},{"id":2,"name":"About us","link":"/about"},{"id":3,"name":"Life@Gojek","link":"/life-at-gojek"},{"id":4,"name":"Blogs & News","link":"/blog"},{"id":5,"name":"Join us","link":"/careers","type":"button"}]'),
                g = n(7151),
                u = n(6747),
                m = n.n(u),
                h = n(3875),
                b = n.n(h),
                p = function() {
                    return (0, a.jsx)("div", {
                        className: b().container,
                        children: (0, a.jsx)(m(), {
                            height: 4,
                            width: "100vw",
                            color: "#00aa13"
                        })
                    })
                },
                j = n(5675),
                x = n.n(j),
                k = function(e) {
                    var t = (0, l.useRouter)(),
                        n = (0, i.Z)((0, s.useState)(!1), 2),
                        o = n[0],
                        u = n[1],
                        m = (0, i.Z)((0, s.useState)(!1), 2),
                        h = m[0],
                        b = m[1],
                        j = (0, i.Z)((0, s.useState)(!1), 2),
                        k = j[0],
                        v = j[1];
                    (0, s.useEffect)(function() {
                        window.addEventListener("scroll", w), c().events.on("routeChangeStart", function(e) {
                            v(!0)
                        }), c().events.on("routeChangeComplete", function() {
                            return v(!1)
                        }), c().events.on("routeChangeError", function() {
                            return v(!1)
                        })
                    }, []);
                    var f = function() {
                            b(!h)
                        },
                        w = function() {
                            window.scrollY > 30 ? o || (document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-lg bg-white py-3 main-nav shadow-sm", u(!0)) : (document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-lg bg-transparent py-3 pt-md-5 main-nav", u(!1))
                        };
                    return (0, a.jsxs)("div", {
                        children: [k ? (0, a.jsx)(p, {}) : "", (0, a.jsxs)("nav", {
                            className: "navbar fixed-top navbar-expand-lg bg-transparent pt-md-5 main-nav",
                            children: [(0, a.jsxs)("div", {
                                className: "container pt-md-0",
                                children: [(0, a.jsx)(r(), {
                                    href: "/",
                                    legacyBehavior: !0,
                                    children: (0, a.jsxs)("a", {
                                        className: "navbar-brand pt-md-3",
                                        children: [" ", o ? (0, a.jsx)("img", {
                                            src: "/img/GojekLogo.svg",
                                            alt: "GOJEK Tech Logo "
                                        }) : e.whiteNav ? (0, a.jsx)(x(), {
                                            src: "/img/GojekLogo-white.svg",
                                            width: 130,
                                            height: 30,
                                            alt: "GOJEK Tech Logo"
                                        }) : (0, a.jsxs)("div", {
                                            children: [(0, a.jsx)("img", {
                                                src: "/img/GojekLogo.svg",
                                                alt: "GOJEK Tech Logo",
                                                className: "d-none d-md-block"
                                            }), "/" !== t.pathname && (0, a.jsx)("img", {
                                                src: "/img/GojekLogo.svg",
                                                alt: "GOJEK Tech Logo",
                                                className: "d-block d-md-none"
                                            }), "/" === t.pathname && (0, a.jsx)("img", {
                                                src: "/img/GojekLogo.svg",
                                                alt: "GOJEK Tech Logo",
                                                className: "d-block d-md-none"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("button", {
                                    className: "btn d-block d-lg-none",
                                    onClick: function() {
                                        return f()
                                    },
                                    children: (0, a.jsx)("div", {
                                        children: o ? (0, a.jsx)(x(), {
                                            src: "/img/font-awesome/menu.svg",
                                            alt: "hello",
                                            width: 17,
                                            height: 17
                                        }) : (0, a.jsx)(x(), {
                                            src: "/img/font-awesome/white-menu.svg",
                                            alt: "hello",
                                            width: 17,
                                            height: 17
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navbarNav",
                                    children: (0, a.jsx)("ul", {
                                        className: "navbar-nav ml-auto ".concat(e.whiteNav ? o ? "blackNav" : "whiteNav" : "blackNav"),
                                        children: d.map(function(e) {
                                            return (0, a.jsx)("li", {
                                                className: "nav-item px-3 ".concat(e.link === t.pathname || ("/careers" === e.link || "/blog" === e.link) && t.pathname.includes(e.link) ? "active" : "").concat(e.type && "button" === e.type ? "" : " "),
                                                children: e.type && "button" === e.type ? (0, a.jsx)(r(), {
                                                    href: e.link,
                                                    legacyBehavior: !0,
                                                    children: (0, a.jsxs)("a", {
                                                        className: "/careers" === t.pathname || "/careers/all" === t.pathname ? "nav-link nav-links" : "button rounded-pill px-3 py-2",
                                                        children: [e.name, " ", e.link === t.pathname ? (0, a.jsx)("span", {
                                                            className: "sr-only",
                                                            children: "(current)"
                                                        }) : ""]
                                                    })
                                                }) : (0, a.jsx)(r(), {
                                                    href: e.link,
                                                    legacyBehavior: !0,
                                                    children: (0, a.jsxs)("a", {
                                                        className: "nav-link nav-links",
                                                        children: [e.name, " ", e.link === t.pathname ? (0, a.jsx)("span", {
                                                            className: "sr-only",
                                                            children: "(current)"
                                                        }) : ""]
                                                    })
                                                })
                                            }, e.id)
                                        })
                                    })
                                })]
                            }), h ? (0, a.jsx)("div", {
                                className: "text-white bg-black full-height fixed-top pt-4",
                                children: (0, a.jsxs)("div", {
                                    className: "container pt-3 pb-2 px-3 d-block",
                                    children: [(0, a.jsxs)("div", {
                                        className: "d-flex justify-content-between pb-5",
                                        children: [(0, a.jsx)("a", {
                                            className: "navbar-brand",
                                            href: "/",
                                            children: (0, a.jsx)("img", {
                                                src: "/img/GojekLogo-white.svg",
                                                alt: "Gojek",
                                                className: "img-fluid footer-logo text-left",
                                                style: {
                                                    height: "2.5rem"
                                                }
                                            })
                                        }), (0, a.jsx)("button", {
                                            className: "btn text-white text-right",
                                            onClick: function() {
                                                return b(!1)
                                            },
                                            children: (0, a.jsx)("img", {
                                                src: "/img/cross.svg",
                                                alt: "close button"
                                            })
                                        })]
                                    }), (0, a.jsxs)("ul", {
                                        className: "list-unstyled mobile-menu text-center",
                                        children: [d.map(function(e, t) {
                                            return (0, a.jsx)("li", {
                                                className: "pb-5",
                                                children: (0, a.jsx)(r(), {
                                                    href: e.link,
                                                    legacyBehavior: !0,
                                                    children: (0, a.jsxs)("a", {
                                                        className: "text-white",
                                                        children: [" ", e.name]
                                                    })
                                                })
                                            }, t)
                                        }), (0, a.jsxs)("li", {
                                            className: "pb-5 text-white d-block",
                                            children: [(0, a.jsx)("p", {
                                                className: "mb-0",
                                                children: "Connect with us \uD83D\uDC47"
                                            }), (0, a.jsx)("ul", {
                                                className: "list-inline pt-5 d-flex justify-content-around",
                                                children: g.a.socialLinks.map(function(e, t) {
                                                    return (0, a.jsx)("li", {
                                                        className: "list-inline-item ",
                                                        children: (0, a.jsx)("a", {
                                                            className: "text-white social-icon",
                                                            href: e.link,
                                                            target: "_blank",
                                                            title: e.name,
                                                            children: (0, a.jsx)("img", {
                                                                src: e.icon,
                                                                alt: e.title
                                                            })
                                                        })
                                                    }, t)
                                                })
                                            })]
                                        }, "connect-with-us")]
                                    })]
                                })
                            }) : ""]
                        })]
                    })
                }
        },
        7900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n(5893),
                a = n(6042),
                s = n(9396),
                o = n(6066);
            n(5675);
            var r = function(e) {
                    var t = e.data,
                        n = (0, i.jsx)("a", {
                            className: "text-green-light link",
                            target: "_blank",
                            href: t.linkURL,
                            children: t.linkText
                        });
                    return (0, i.jsx)("div", {
                        className: "".concat(t.bgClass, " ").concat(t.bgPattern),
                        children: (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsxs)("div", {
                                className: "row full-height d-flex align-items-center justify-content-md-around justify-content-lg-between",
                                children: [(0, i.jsx)("img", {
                                    src: t.img,
                                    alt: t.title,
                                    className: "".concat(t.id % 2 == 1 ? "order-1" : "order-2", " img-fluid col-md-5")
                                }), (0, i.jsxs)("div", {
                                    className: "".concat(t.id % 2 == 0 ? "order-1" : "order-2", " col-md-4"),
                                    children: [(0, i.jsx)("h2", {
                                        className: "heading",
                                        children: t.title
                                    }), (0, i.jsx)("p", {
                                        dangerouslySetInnerHTML: {
                                            __html: t.description
                                        }
                                    }), t.linkText ? n : ""]
                                })]
                            })
                        })
                    })
                },
                l = function(e) {
                    var t = e.data,
                        n = (0, i.jsx)("a", {
                            className: "text-green-light link",
                            href: t.linkURL,
                            children: t.linkText
                        });
                    return (0, i.jsxs)("div", {
                        className: "".concat(t.bgClass, " card align-items-center justify-content-around p-4 mr-4"),
                        children: [(0, i.jsxs)("div", {
                            className: "card-body flex-grow-0",
                            children: [(0, i.jsx)("h2", {
                                className: "heading",
                                children: t.title
                            }), (0, i.jsx)("p", {
                                dangerouslySetInnerHTML: {
                                    __html: t.description
                                }
                            }), t.linkText ? n : ""]
                        }), (0, i.jsx)("img", {
                            src: t.img,
                            className: "card-img-bottom img-fluid illustration",
                            alt: t.title
                        })]
                    })
                },
                c = [{
                    id: 1,
                    img: "/img/about-us/about-gojek-2010.svg",
                    class: "",
                    bgClass: "about-green-bg",
                    bgPattern: "about-pattern-a",
                    title: "In 2010",
                    description: "Gojek started with a mission to improve the livelihoods of local ojeks (motorcycle taxis). Every customer was 'matched' manually with a driver via a call center.",
                    linkText: "",
                    linkURL: ""
                }, {
                    id: 2,
                    img: "/img/about-us/about-gojek-2015.svg",
                    class: "",
                    bgClass: "about-blue-bg",
                    bgPattern: "about-pattern-b",
                    title: "In 2015",
                    description: "A version of the app was launched to automate matchmaking between customers and driver partners. <br/>Orders scaled from 3,000 to 100,000 a day.",
                    linkText: "",
                    linkURL: ""
                }, {
                    id: 3,
                    img: "/img/about-us/about-gojek-end-of-2015.svg",
                    class: "",
                    bgClass: "about-purple-bg",
                    bgPattern: "about-pattern-c",
                    title: "End of 2015",
                    description: "Systems were crashing because of a major spike in volumes. <br/> We rewrote a key piece of technology in Golang in under 3 days.",
                    linkText: "Read our story",
                    linkURL: "".concat("https://www.gojek.io/", "blog/how-gojek-manages-1-million-drivers-with-12-engineers-part-1")
                }, {
                    id: 4,
                    img: "/img/about-us/about-gojek-2016.svg",
                    class: "text-green-light",
                    bgClass: "about-green-bg",
                    bgPattern: "about-pattern-a",
                    title: "In 2016",
                    description: "Orders climbed to 300,000+ a day. Driver incomes increased by 150%. In April, with the launch of GoPay, cashless transactions were introduced. 18 million monthly bookings. \uD83E\uDD2F",
                    linkText: "",
                    linkURL: ""
                }, {
                    id: 5,
                    img: "/img/about-us/about-gojek-the-big-rewrite.svg",
                    class: "text-green-light",
                    bgClass: "about-orange-bg",
                    bgPattern: "about-pattern-b",
                    title: "The big rewrite",
                    description: 'Downtimes were a routine affair and leaky faucets needed to be fixed. <br class="d-none d-md-block"/> "No project has a budget and impact as big as this in Gojek\'s history"<br/> - From Nadiem’s internal mail.',
                    linkText: "Read our story",
                    linkURL: "".concat("https://www.gojek.io/", "blog/how-gojek-manages-1-million-drivers-with-12-engineers-part-2-2")
                }, {
                    id: 6,
                    img: "/img/about-us/about-gojek-2017.svg",
                    class: "text-green-light",
                    bgClass: "about-green-bg",
                    bgPattern: "about-pattern-c",
                    title: "In 2017",
                    description: "Reached 30 million monthly bookings. Gojek employed more than 30,000 people with disabilities.",
                    linkText: "Watch the video",
                    linkURL: "https://www.youtube.com/watch?v=tu-5s8KhzvQ&feature=youtu.be"
                }, {
                    id: 7,
                    img: "/img/about-us/about-gojek-2018.svg",
                    class: "text-green-light",
                    bgClass: "about-blue-bg",
                    bgPattern: "about-pattern-a",
                    title: "By 2018",
                    description: "Gojek did 100+ million orders across 18+ products. Total order volume growth: 1100x.",
                    linkText: "",
                    linkURL: ""
                }, {
                    id: 8,
                    img: "/img/about-us/about-gojek-going-international.svg",
                    class: "text-green-light",
                    bgClass: "about-pink-bg",
                    bgPattern: "about-pattern-b",
                    title: "Going international",
                    description: "Gojek went live in Vietnam \uD83C\uDDFB\uD83C\uDDF3, Singapore \uD83C\uDDF8\uD83C\uDDEC, and Thailand \uD83C\uDDF9\uD83C\uDDED in 2018.",
                    linkText: "Read the story",
                    linkURL: "".concat("https://www.gojek.io/", "blog/to-new-frontiers-how-gojek-went-international-2")
                }, {
                    id: 9,
                    img: "/img/about-us/about-gojek-2019.svg",
                    class: "text-green-light",
                    bgClass: "about-green-bg",
                    bgPattern: "about-pattern-c",
                    title: "In 2019",
                    description: "Gojek became Indonesia's first decacorn. We also underwent a massive rebranding and had a new identity: Solv.",
                    linkText: "Read about Solv",
                    linkURL: "".concat("https://www.gojek.io/", "blog/a-new-gojek")
                }, {
                    id: 10,
                    img: "/img/about-us/about-gojek-uplifting-the-economy.svg",
                    class: "text-green-light",
                    bgClass: "about-orange-bg",
                    bgPattern: "about-pattern-a",
                    title: "Uplifting the economy",
                    description: "Gojek contributed $7.1 billion to the Indonesian economy in 2019 (that's more than twice of 2018!)",
                    linkText: "",
                    linkURL: ""
                }],
                d = function() {
                    var e = {
                        dots: !0,
                        infinite: !1,
                        arrows: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        cssEase: "ease-in-out",
                        responsive: [{
                            breakpoint: 576,
                            settings: {
                                arrows: !1,
                                slidesToShow: 1.1
                            }
                        }]
                    };
                    return (0, i.jsxs)("div", {
                        className: "container-fluid px-0 milestones",
                        children: [(0, i.jsx)("div", {
                            className: "d-none d-md-block desktop",
                            children: (0, i.jsx)(o.Z, (0, s.Z)((0, a.Z)({}, e), {
                                children: c.map(function(e, t) {
                                    return (0, i.jsx)(r, {
                                        data: e
                                    }, t)
                                })
                            }))
                        }), (0, i.jsx)("div", {
                            className: "d-md-none pl-5 pr-0 mobile bg-black",
                            children: (0, i.jsx)(o.Z, (0, s.Z)((0, a.Z)({}, e), {
                                children: c.map(function(e, t) {
                                    return (0, i.jsx)(l, {
                                        data: e
                                    }, t)
                                })
                            }))
                        })]
                    })
                },
                g = n(3717),
                u = n(2962),
                m = "".concat("https://www.gojek.io/", "img/og-img.jpg"),
                h = function() {
                    return (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(u.PB, {
                            title: "Gojek Tech: 3 countries. 20+ products. 1 leading on-demand platform.",
                            description: "Gojek is Southeast Asia’s leading on-demand platform and a pioneer of the multi-service ecosystem model, providing access to a wide range of services including transportation, food delivery, logistics and more.",
                            openGraph: {
                                url: "https://www.gojek.io",
                                title: "Gojek Tech",
                                description: "Gojek is Southeast Asia’s leading on-demand platform and a pioneer of the multi-service ecosystem model, providing access to a wide range of services including transportation, food delivery, logistics and more.",
                                images: [{
                                    url: m
                                }],
                                site_name: "Gojek"
                            },
                            twitter: {
                                handle: "@gojektech",
                                site: "@gojektech",
                                cardType: "summary_large_image"
                            }
                        }), (0, i.jsx)(g.Z, {
                            whiteNav: !0
                        }), (0, i.jsx)(d, {}), (0, i.jsx)("section", {
                            className: "bg-green-light text-white py-5",
                            children: (0, i.jsxs)("div", {
                                className: "container-fluid",
                                children: [(0, i.jsx)("h1", {
                                    className: "heading mb-3",
                                    children: "About Us"
                                }), (0, i.jsx)("p", {
                                    children: "Gojek is Southeast Asia’s leading on-demand platform and a pioneer of the multi-service ecosystem model, providing access to a wide range of services including transportation, food delivery, logistics and more."
                                })]
                            })
                        })]
                    })
                }
        },
        3875: function(e) {
            e.exports = {
                container: "Loader_container__wMqIw"
            }
        },
        9396: function(e, t, n) {
            "use strict";

            function i(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, i)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e
            }
            n.d(t, {
                Z: function() {
                    return i
                }
            })
        }
    },
    function(e) {
        e.O(0, [7960, 6066, 9774, 2888, 179], function() {
            return e(e.s = 512)
        }), _N_E = e.O()
    }
]);