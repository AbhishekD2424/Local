(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9195], {
        7286: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog", function() {
                return n(8547)
            }])
        },
        4589: function(e, t, n) {
            "use strict";
            new(n(7414)).Z({
                url: "https://blog.gojek.io",
                key: "dc81903c2020e7c9d2f8bafcf7",
                version: "v3"
            })
        },
        8547: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n(828),
                a = n(5893);
            n(4589);
            var o = n(7294),
                i = n(2995),
                c = n(4803),
                l = n.n(c),
                r = n(3717),
                d = n(7753),
                u = n.n(d),
                h = n(2962),
                g = n(8433),
                m = n(5152),
                p = n.n(m),
                f = n(6261),
                b = n(8783),
                x = n.n(b),
                j = n(5675),
                w = n.n(j),
                N = "".concat("https://www.gojek.io/", "img/og-img.jpg"),
                k = p()(function() {
                    return n.e(9710).then(n.bind(n, 9710))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [9710]
                        }
                    },
                    ssr: !1
                }),
                v = p()(function() {
                    return Promise.all([n.e(6066), n.e(3367)]).then(n.bind(n, 3367))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [3367]
                        }
                    },
                    ssr: !1
                }),
                y = p()(function() {
                    return Promise.all([n.e(6066), n.e(1024)]).then(n.bind(n, 1024))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [1024]
                        }
                    },
                    ssr: !1
                }),
                _ = p()(function() {
                    return n.e(8898).then(n.bind(n, 8898))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [8898]
                        }
                    },
                    ssr: !1
                });
            p()(function() {
                return n.e(3024).then(n.bind(n, 3024))
            }, {
                loadableGenerated: {
                    webpack: function() {
                        return [3024]
                    }
                },
                ssr: !1
            }), t.default = function(e) {
                var t = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = "";
                        return null !== e ? t = {
                            order: "published_at DESC",
                            limit: 4,
                            include: "tags,authors",
                            filter: "tags: ".concat(e)
                        } : null == e && (t = {
                            order: "published_at DESC",
                            limit: 4,
                            include: "tags,authors"
                        }), g.Z.get("https://blog.gojek.io/ghost/api/v3/content/posts/?key=".concat("dc81903c2020e7c9d2f8bafcf7"), {
                            params: t
                        }).then(function(e) {
                            return e.data.posts
                        }).catch(function(e) {})
                    },
                    n = (0, s.Z)((0, o.useState)([]), 2),
                    c = n[0],
                    d = n[1],
                    m = (0, s.Z)((0, o.useState)([]), 2),
                    p = m[0],
                    b = m[1],
                    j = (0, s.Z)((0, o.useState)([]), 2),
                    C = j[0],
                    S = j[1],
                    Z = (0, s.Z)((0, o.useState)([]), 2),
                    E = Z[0],
                    G = Z[1],
                    T = (0, s.Z)((0, o.useState)([]), 2),
                    B = T[0],
                    D = T[1],
                    W = (0, s.Z)((0, o.useState)([]), 2),
                    O = W[0],
                    L = W[1],
                    P = (0, s.Z)((0, o.useState)([]), 2),
                    R = P[0],
                    F = P[1],
                    M = (0, s.Z)((0, o.useState)("tech"), 2),
                    A = M[0],
                    K = M[1],
                    z = (0, s.Z)((0, o.useState)(""), 2),
                    H = z[0],
                    I = z[1],
                    Q = (0, s.Z)((0, o.useState)([]), 2),
                    X = Q[0],
                    J = Q[1],
                    Y = (0, s.Z)((0, o.useState)(!1), 2),
                    q = Y[0],
                    U = Y[1],
                    V = (0, s.Z)((0, o.useState)(!1), 2),
                    $ = V[0],
                    ee = V[1],
                    et = (0, s.Z)((0, o.useState)([]), 2),
                    en = et[0],
                    es = et[1];
                (0, o.useEffect)(function() {
                    ee(!0), g.Z.get("https://blog.gojek.io/ghost/api/v3/content/posts/?key=".concat("dc81903c2020e7c9d2f8bafcf7"), {
                        params: {
                            order: "published_at DESC",
                            limit: 4,
                            include: "tags,authors",
                            filter: "featured: true"
                        }
                    }).then(function(e) {
                        return e.data.posts
                    }).catch(function(e) {}).then(function(e) {
                        F(e)
                    }), t().then(function(e) {
                        d(e), ee(!1)
                    }), t("tech").then(function(e) {
                        b(e)
                    }), t("data").then(function(e) {
                        S(e)
                    }), t("design").then(function(e) {
                        G(e)
                    }), t("culture").then(function(e) {
                        D(e)
                    }), t("news").then(function(e) {
                        L(e)
                    })
                }, []), (0, o.useEffect)(function() {
                    q && ei.current.focus()
                }, [q]), (0, o.useEffect)(function() {
                    g.Z.get("https://blog.gojek.io/ghost/api/v3/content/posts/?key=dc81903c2020e7c9d2f8bafcf7&limit=all").then(function(e) {
                        es(e.data.posts)
                    }).catch(function(e) {})
                }, []);
                var ea = function() {
                        U(!0)
                    },
                    eo = function(e) {
                        I(e), ee(!0), f.OK.scrollTo("searchResults", {
                            offset: -175,
                            smooth: "easeOutCubic",
                            duration: 500,
                            delay: 0
                        }), J(en.filter(function(t) {
                            return t.title.toLowerCase().includes(e.toLowerCase())
                        })), ee(!1)
                    },
                    ei = (0, o.useRef)(null);
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: "text-center text-md-left blog-page",
                        children: [(0, a.jsx)(h.PB, {
                            title: "Everything you wanted to know about Gojek and how we do what we do.",
                            description: "The blog section provides valuable information on Gojek's engineering ideals, our culture, and insights on where we failed and what we learnt in the process.",
                            openGraph: {
                                url: "https://www.gojek.io",
                                title: "Everything you wanted to know about Gojek and how we do what we do.",
                                description: "The blog section provides valuable information on Gojek's engineering ideals, our culture, and insights on where we failed and what we learnt in the process.",
                                images: [{
                                    url: N
                                }],
                                site_name: "Gojek"
                            },
                            twitter: {
                                handle: "@gojektech",
                                site: "@gojektech",
                                cardType: "summary_large_image"
                            }
                        }), (0, a.jsx)(r.Z, {
                            whiteNav: !0
                        }), (0, a.jsx)("section", {
                            className: "py-5 mb-3 mb-md-5 d-flex align-items-center blog-banner",
                            style: {
                                backgroundColor: "#00a913"
                            },
                            children: (0, a.jsx)("div", {
                                className: "container pt-5",
                                children: (0, a.jsxs)("div", {
                                    className: "row justify-content-around align-items-center",
                                    children: [(0, a.jsxs)("div", {
                                        className: "col-12 col-md-5 col-lg-5 order-1 order-md-0",
                                        children: [(0, a.jsxs)("h1", {
                                            className: "banner-head text-white pt-5 pt-md-0 px-4 px-md-0",
                                            children: ["Wondering ", (0, a.jsx)("br", {
                                                className: "d-none d-md-block"
                                            }), "how ", (0, a.jsx)("br", {
                                                className: "d-block d-md-none"
                                            }), " we do it all?"]
                                        }), (0, a.jsx)("p", {
                                            className: "banner-sub-head text-white",
                                            children: "Take a behind-the-scenes peek into the triumphs and tribulations it takes to build Indonesia's leading on-demand platform."
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "col-12 col-md-7 col-lg-7 px-0 px-md-3",
                                        children: (0, a.jsx)(w(), {
                                            src: "/img/Blog-Banner.png",
                                            alt: "Gojek Banner",
                                            width: 520,
                                            height: 220,
                                            className: "px-3 px-md-0",
                                            sizes: "100vw",
                                            style: {
                                                width: "100%",
                                                height: "auto"
                                            }
                                        })
                                    })]
                                })
                            })
                        }), (0, a.jsx)("section", {
                            className: "tags-nav bg-white sticky-top pt-2",
                            children: (0, a.jsxs)("div", {
                                className: "container",
                                style: {
                                    position: "relative"
                                },
                                children: [(0, a.jsx)(k, {
                                    tags: [{
                                        name: "Tech",
                                        slug: "tech"
                                    }, {
                                        name: "Data",
                                        slug: "data"
                                    }, {
                                        name: "Design",
                                        slug: "design"
                                    }, {
                                        name: "Culture",
                                        slug: "culture"
                                    }, {
                                        name: "News",
                                        slug: "news"
                                    }],
                                    onClick: function(e) {
                                        K(e), f.OK.scrollTo(e, {
                                            offset: -175,
                                            smooth: "easeOutCubic",
                                            duration: 500,
                                            delay: 0
                                        })
                                    },
                                    activeTag: A,
                                    handlesearchClicked: ea,
                                    clicked: q,
                                    page: "blog"
                                }), (0, a.jsxs)("div", {
                                    className: "input-group my-3 ".concat(x().searchBox, " ").concat(q ? x().activeWidth : x().normalWidth),
                                    children: [(0, a.jsx)("div", {
                                        className: "input-group-prepend",
                                        style: q ? {
                                            borderBottom: "1px solid green",
                                            backgroundColor: "white"
                                        } : {
                                            borderBottom: "none",
                                            backgroundColor: "white"
                                        },
                                        onClick: ea,
                                        children: (0, a.jsx)("span", {
                                            className: "input-group-text text-green-light ".concat(0 == en.length ? "d-none" : ""),
                                            style: {
                                                backgroundColor: "transparent",
                                                border: 0,
                                                paddingLeft: "1rem"
                                            },
                                            children: (0, a.jsx)("img", {
                                                className: "img-fluid pointer",
                                                src: "/img/blog/search.svg",
                                                alt: "search"
                                            })
                                        })
                                    }), (0, a.jsx)("input", {
                                        type: "text",
                                        className: "input-search form-control active-link ".concat(q ? "d-block" : "d-none"),
                                        ref: ei,
                                        value: H,
                                        onChange: function(e) {
                                            return eo(e.target.value)
                                        },
                                        placeholder: "Search blogs (kubernetes, #firstprinciples, design)"
                                    }), (0, a.jsx)("div", {
                                        className: "input-group-append ".concat(q ? "d-block" : "d-none"),
                                        style: {
                                            borderBottom: "1px solid green"
                                        },
                                        children: (0, a.jsx)("span", {
                                            "aria-hidden": "true",
                                            className: "input-group-text text-green-light pointer",
                                            style: {
                                                border: "0",
                                                backgroundColor: "transparent",
                                                fontSize: "24px"
                                            },
                                            onClick: function() {
                                                I(""), U(!1)
                                            },
                                            children: "\xd7"
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsx)("section", {
                            className: "container",
                            id: "searchResults",
                            children: (0, a.jsxs)("div", {
                                className: "" !== H ? "py-5" : "",
                                children: ["" !== H ? $ ? (0, a.jsxs)("h1", {
                                    className: "heading pb-4",
                                    children: ["Loading search Results for '", H, "'"]
                                }) : (0, a.jsxs)("h1", {
                                    className: "heading pb-4",
                                    children: ["Search Results for '", H, "'"]
                                }) : "", "" !== H ? (0, a.jsx)("div", {
                                    className: "row posts",
                                    children: X.map(function(e, t) {
                                        return (0, a.jsx)("div", {
                                            className: "col-md-4 mb-md-5",
                                            children: (0, a.jsx)("a", {
                                                href: "/blog/".concat(e.slug),
                                                className: "post",
                                                children: (0, a.jsxs)("div", {
                                                    className: "card border-0 bg-transparent",
                                                    children: [(0, a.jsx)(a.Fragment, {
                                                        children: (0, a.jsx)("div", {
                                                            className: "thumbnail small",
                                                            style: {
                                                                backgroundImage: "url(".concat(e.feature_image, ")")
                                                            }
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "card-body px-0",
                                                        children: [(0, a.jsx)("h5", {
                                                            className: "".concat(e.featured ? "search" : "", " title"),
                                                            children: e.title
                                                        }), (0, a.jsxs)("p", {
                                                            className: "".concat(e.featured ? "featured" : "", " description"),
                                                            children: [" ", e.excerpt, "..."]
                                                        }), (0, a.jsx)(a.Fragment, {
                                                            children: (0, a.jsxs)("div", {
                                                                className: "mt-3 meta",
                                                                children: [(0, a.jsx)("p", {
                                                                    className: "mb-0 author",
                                                                    children: e.author
                                                                }), (0, a.jsxs)("p", {
                                                                    className: "date-time",
                                                                    children: [(0, a.jsx)(l(), {
                                                                        format: "MMM DD",
                                                                        children: e.published_at
                                                                    }), " |", " ", e.reading_time, " min read"]
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })
                                        }, t)
                                    })
                                }) : ""]
                            })
                        }), $ ? (0, a.jsx)("div", {
                            className: "row align-items-center w-100 justify-content-center position-absolute",
                            children: (0, a.jsx)(u(), {
                                height: 10,
                                width: "100px",
                                color: "#00aa13"
                            })
                        }) : (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("section", {
                                className: "post-feed container mt-md-5 pt-3",
                                children: (null == c ? void 0 : c.length) > 0 && (0, a.jsx)(v, {
                                    heading: "Latest",
                                    posts: c,
                                    link: "/blog/tag/design",
                                    pageName: "blog",
                                    id: "latest"
                                })
                            }), (0, a.jsx)("section", {
                                className: "py-3 py-md-5 px-md-3 px-xl-0",
                                style: {
                                    backgroundColor: "#f2f2f2"
                                },
                                children: (0, a.jsx)("div", {
                                    className: "post-feed",
                                    children: (null == R ? void 0 : R.length) > 0 && (0, a.jsx)(y, {
                                        heading: "Featured Articles",
                                        posts: R
                                    })
                                })
                            }), (0, a.jsx)("section", {
                                className: "post-feed container mt-md-5 pt-5",
                                children: (null == p ? void 0 : p.length) > 0 && (0, a.jsx)(v, {
                                    heading: "Tech",
                                    posts: p,
                                    link: "/blog/tag/tech",
                                    id: "tech",
                                    pageName: "blog"
                                })
                            }), "" === H && (0, a.jsx)("div", {
                                className: "pt-5 pb-4",
                                children: (0, a.jsx)(i.M, {
                                    title: "Build the tech that powers an entire country.",
                                    href: "/careers",
                                    hrefText: "Apply Now"
                                })
                            }), (0, a.jsx)("section", {
                                className: "post-feed container mt-md-5 pt-5",
                                children: (null == C ? void 0 : C.length) > 0 && (0, a.jsx)(v, {
                                    heading: "Data",
                                    posts: C,
                                    link: "/blog/tag/data",
                                    id: "data",
                                    pageName: "blog"
                                })
                            }), (0, a.jsx)("section", {
                                className: "post-feed container mt-5",
                                children: (null == E ? void 0 : E.length) > 0 && (0, a.jsx)(v, {
                                    heading: "Design",
                                    posts: E,
                                    link: "/blog/tag/design",
                                    pageName: "blog",
                                    id: "design"
                                })
                            }), (0, a.jsx)("section", {
                                className: "post-feed container mt-5",
                                children: (null == B ? void 0 : B.length) > 0 && (0, a.jsx)(v, {
                                    heading: "Culture",
                                    posts: B,
                                    link: "/blog/tag/culture",
                                    pageName: "blog",
                                    id: "culture"
                                })
                            }), (0, a.jsx)("section", {
                                className: "post-feed container mt-5",
                                children: (null == O ? void 0 : O.length) > 0 && (0, a.jsx)(v, {
                                    heading: "News",
                                    posts: O,
                                    link: "/blog/tag/news",
                                    id: "news",
                                    pageName: "blog"
                                })
                            })]
                        }), (0, a.jsx)(_, {
                            mobile: "We're dedicated to creating (and scaling) positive socio-economic impact for our ecosystem of users."
                        })]
                    })
                })
            }
        },
        8783: function(e) {
            e.exports = {
                searchBox: "blog_searchBox__thYQJ",
                blogContainer: "blog_blogContainer__A4DDm",
                normalWidth: "blog_normalWidth___aHKj",
                activeWidth: "blog_activeWidth__SHfQl"
            }
        }
    },
    function(e) {
        e.O(0, [4885, 7960, 4803, 9990, 7414, 3357, 9774, 2888, 179], function() {
            return e(e.s = 7286)
        }), _N_E = e.O()
    }
]);