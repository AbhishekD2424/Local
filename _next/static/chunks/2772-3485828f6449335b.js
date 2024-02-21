(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2772, 3024], {
        3024: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return o
                }
            });
            var i = t(5893),
                a = t(9008),
                s = t.n(a),
                o = function(e) {
                    var n, t, a, o = null !== (n = e.img) && void 0 !== n ? n : "".concat("https://www.gojek.io/", "img/og-img.jpg");
                    return (0, i.jsx)("div", {
                        children: (0, i.jsxs)(s(), {
                            children: [(0, i.jsx)("title", {
                                children: e.title
                            }), (0, i.jsx)("meta", {
                                content: "yes",
                                name: "apple-mobile-web-app-capable"
                            }), (0, i.jsx)("meta", {
                                property: "description",
                                content: "".concat(e.description)
                            }), (0, i.jsx)("meta", {
                                property: "twitter:title",
                                content: "".concat(e.title)
                            }), (0, i.jsx)("meta", {
                                property: "twitter:card",
                                content: "summary_large_image"
                            }), (0, i.jsx)("meta", {
                                property: "twitter:site",
                                content: "@gojektech"
                            }), (0, i.jsx)("meta", {
                                property: "twitter:image",
                                content: o
                            }), (0, i.jsx)("meta", {
                                property: "twitter:description",
                                content: "".concat(e.description)
                            }), (0, i.jsx)("meta", {
                                property: "og:title",
                                content: "".concat(e.title)
                            }, "title"), (0, i.jsx)("meta", {
                                property: "og:url",
                                content: null !== (t = e.url) && void 0 !== t ? t : "https://www.gojek.io"
                            }), (0, i.jsx)("meta", {
                                property: "og:image",
                                content: o
                            }), (0, i.jsx)("meta", {
                                property: "og:description",
                                content: "".concat(e.description)
                            }), (0, i.jsx)("meta", {
                                property: "og:type",
                                content: null !== (a = e.type) && void 0 !== a ? a : "website"
                            }), (0, i.jsx)("link", {
                                rel: "shortcut icon",
                                href: "/img/favicon.png",
                                type: "image/x-icon "
                            }), (0, i.jsx)("link", {
                                rel: "icon",
                                href: "/img/favicon.png",
                                type: "image/x-icon"
                            })]
                        })
                    })
                }
        },
        3717: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return b
                }
            });
            var i = t(828),
                a = t(5893),
                s = t(7294),
                o = t(1664),
                r = t.n(o),
                c = t(1163),
                l = t.n(c),
                d = JSON.parse('[{"id":1,"name":"Home","link":"/"},{"id":2,"name":"About us","link":"/about"},{"id":3,"name":"Life@Gojek","link":"/life-at-gojek"},{"id":4,"name":"Blogs & News","link":"/blog"},{"id":5,"name":"Join us","link":"/careers","type":"button"}]'),
                g = t(7151),
                m = t(6747),
                h = t.n(m),
                x = t(3875),
                u = t.n(x),
                p = function() {
                    return (0, a.jsx)("div", {
                        className: u().container,
                        children: (0, a.jsx)(h(), {
                            height: 4,
                            width: "100vw",
                            color: "#00aa13"
                        })
                    })
                },
                _ = t(5675),
                j = t.n(_),
                b = function(e) {
                    var n = (0, c.useRouter)(),
                        t = (0, i.Z)((0, s.useState)(!1), 2),
                        o = t[0],
                        m = t[1],
                        h = (0, i.Z)((0, s.useState)(!1), 2),
                        x = h[0],
                        u = h[1],
                        _ = (0, i.Z)((0, s.useState)(!1), 2),
                        b = _[0],
                        v = _[1];
                    (0, s.useEffect)(function() {
                        window.addEventListener("scroll", k), l().events.on("routeChangeStart", function(e) {
                            v(!0)
                        }), l().events.on("routeChangeComplete", function() {
                            return v(!1)
                        }), l().events.on("routeChangeError", function() {
                            return v(!1)
                        })
                    }, []);
                    var f = function() {
                            u(!x)
                        },
                        k = function() {
                            window.scrollY > 30 ? o || (document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-lg bg-white py-3 main-nav shadow-sm", m(!0)) : (document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-lg bg-transparent py-3 pt-md-5 main-nav", m(!1))
                        };
                    return (0, a.jsxs)("div", {
                        children: [b ? (0, a.jsx)(p, {}) : "", (0, a.jsxs)("nav", {
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
                                        }) : e.whiteNav ? (0, a.jsx)(j(), {
                                            src: "/img/GojekLogo-white.svg",
                                            width: 130,
                                            height: 30,
                                            alt: "GOJEK Tech Logo"
                                        }) : (0, a.jsxs)("div", {
                                            children: [(0, a.jsx)("img", {
                                                src: "/img/GojekLogo.svg",
                                                alt: "GOJEK Tech Logo",
                                                className: "d-none d-md-block"
                                            }), "/" !== n.pathname && (0, a.jsx)("img", {
                                                src: "/img/GojekLogo.svg",
                                                alt: "GOJEK Tech Logo",
                                                className: "d-block d-md-none"
                                            }), "/" === n.pathname && (0, a.jsx)("img", {
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
                                        children: o ? (0, a.jsx)(j(), {
                                            src: "/img/font-awesome/menu.svg",
                                            alt: "hello",
                                            width: 17,
                                            height: 17
                                        }) : (0, a.jsx)(j(), {
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
                                                className: "nav-item px-3 ".concat(e.link === n.pathname || ("/careers" === e.link || "/blog" === e.link) && n.pathname.includes(e.link) ? "active" : "").concat(e.type && "button" === e.type ? "" : " "),
                                                children: e.type && "button" === e.type ? (0, a.jsx)(r(), {
                                                    href: e.link,
                                                    legacyBehavior: !0,
                                                    children: (0, a.jsxs)("a", {
                                                        className: "/careers" === n.pathname || "/careers/all" === n.pathname ? "nav-link nav-links" : "button rounded-pill px-3 py-2",
                                                        children: [e.name, " ", e.link === n.pathname ? (0, a.jsx)("span", {
                                                            className: "sr-only",
                                                            children: "(current)"
                                                        }) : ""]
                                                    })
                                                }) : (0, a.jsx)(r(), {
                                                    href: e.link,
                                                    legacyBehavior: !0,
                                                    children: (0, a.jsxs)("a", {
                                                        className: "nav-link nav-links",
                                                        children: [e.name, " ", e.link === n.pathname ? (0, a.jsx)("span", {
                                                            className: "sr-only",
                                                            children: "(current)"
                                                        }) : ""]
                                                    })
                                                })
                                            }, e.id)
                                        })
                                    })
                                })]
                            }), x ? (0, a.jsx)("div", {
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
                                                return u(!1)
                                            },
                                            children: (0, a.jsx)("img", {
                                                src: "/img/cross.svg",
                                                alt: "close button"
                                            })
                                        })]
                                    }), (0, a.jsxs)("ul", {
                                        className: "list-unstyled mobile-menu text-center",
                                        children: [d.map(function(e, n) {
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
                                            }, n)
                                        }), (0, a.jsxs)("li", {
                                            className: "pb-5 text-white d-block",
                                            children: [(0, a.jsx)("p", {
                                                className: "mb-0",
                                                children: "Connect with us \uD83D\uDC47"
                                            }), (0, a.jsx)("ul", {
                                                className: "list-inline pt-5 d-flex justify-content-around",
                                                children: g.a.socialLinks.map(function(e, n) {
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
                                                    }, n)
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
        3875: function(e) {
            e.exports = {
                container: "Loader_container__wMqIw"
            }
        },
        2844: function(e) {
            e.exports = {
                "social-media": "index_social-media___kM_k",
                "text-orange-light": "index_text-orange-light__82Iqo",
                "text-green-light": "index_text-green-light__K9PSy",
                heading: "index_heading__b7Ury",
                title: "index_title__qVQRs",
                date: "index_date__x8zbc",
                bannerVideo: "index_bannerVideo__NUjc_",
                bannerContainer: "index_bannerContainer__xib3a",
                blackContainer: "index_blackContainer__Z1DEh",
                homeBanner: "index_homeBanner__eIkL5",
                videoContainer: "index_videoContainer__RDWXh",
                products: "index_products__37ZT0",
                gojekBg: "index_gojekBg__oZT6G",
                "full-height": "index_full-height__EM0PO",
                subHeading: "index_subHeading__9mM8g",
                subHeadingMobile: "index_subHeadingMobile__5yv9O",
                pointers: "index_pointers__sW3LL",
                point: "index_point__ph_aR",
                spacingTechPowers: "index_spacingTechPowers__N8_ef",
                ourTechPowerHeading: "index_ourTechPowerHeading__95og5",
                fundingHeading: "index_fundingHeading__eEhWq",
                illustration: "index_illustration__u1eSL",
                fundingSection: "index_fundingSection__vKI5l",
                fundingContent: "index_fundingContent__MJaKm",
                fundingDescription: "index_fundingDescription__KPDiW",
                fundingSpacingMobile: "index_fundingSpacingMobile__62bQQ",
                socialMedia: "index_socialMedia__0nlzv",
                socialMediaCard: "index_socialMediaCard__b24Jl",
                test: "index_test__1IOm5"
            }
        }
    }
]);