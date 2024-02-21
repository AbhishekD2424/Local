(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3357], {
        2995: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return c
                }
            });
            var a = n(5893),
                l = n(5850),
                i = n(7140),
                r = n.n(i),
                s = n(5675),
                o = n.n(s);

            function c(e) {
                return (0, a.jsx)("div", {
                    className: "container ".concat(r().ctaContainer),
                    children: (0, a.jsx)("a", {
                        href: e.href,
                        className: "".concat(r().ctaLink),
                        children: (0, a.jsx)("div", {
                            className: "".concat(r().ctaPurple, " py-4"),
                            children: (0, a.jsxs)("div", {
                                className: "row justify-content-center align-items-center mx-0",
                                children: [(0, a.jsx)("div", {
                                    className: "col-md-5",
                                    children: (0, a.jsx)("img", {
                                        className: "img-fluid mx-auto d-block rounded-md-pill",
                                        src: l.R.image,
                                        alt: e.title
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "col-md-5 pl-md-5 px-5 px-md-0",
                                    children: [(0, a.jsxs)("div", {
                                        className: "d-none d-md-block",
                                        children: [(0, a.jsx)("h1", {
                                            style: {
                                                fontSize: "small" === e.font ? "20px" : "",
                                                lineHeight: "small" === e.font ? "30px" : ""
                                            },
                                            className: "text-white mb-3 ".concat(r().ctaTitle),
                                            dangerouslySetInnerHTML: {
                                                __html: e.title
                                            }
                                        }), e.hrefText, (0, a.jsx)(o(), {
                                            src: "/img/life-at-gojek/arrow-right.svg",
                                            alt: "hello",
                                            width: 29,
                                            height: 22,
                                            className: "pl-2 mt-1"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "d-md-none text-center px-0",
                                        children: [(0, a.jsx)("h1", {
                                            className: "text-white my-4 ".concat(r().ctaTitle),
                                            children: l.R.xsTitle
                                        }), (0, a.jsxs)("span", {
                                            children: [e.hrefText, " ", (0, a.jsx)("img", {
                                                src: "/img/life-at-gojek/arrow-right.svg",
                                                alt: "Right arrow"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
        },
        5850: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return a
                }
            });
            var a = {
                image: "/img/blog-cta.jpg",
                title: "Code Coverage: from Failing the Build to Publishing",
                link: "#",
                linkText: "Read the article",
                xsTitle: "Build the tech that powers an entire country.",
                xsLink: "/careers",
                xsLinkText: "Apply Now"
            }
        },
        3717: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return _
                }
            });
            var a = n(828),
                l = n(5893),
                i = n(7294),
                r = n(1664),
                s = n.n(r),
                o = n(1163),
                c = n.n(o),
                u = JSON.parse('[{"id":1,"name":"Home","link":"/"},{"id":2,"name":"About us","link":"/about"},{"id":3,"name":"Life@Gojek","link":"/life-at-gojek"},{"id":4,"name":"Blogs & News","link":"/blog"},{"id":5,"name":"Join us","link":"/careers","type":"button"}]'),
                d = n(7151),
                h = n(6747),
                m = n.n(h),
                f = n(3875),
                g = n.n(f),
                p = function() {
                    return (0, l.jsx)("div", {
                        className: g().container,
                        children: (0, l.jsx)(m(), {
                            height: 4,
                            width: "100vw",
                            color: "#00aa13"
                        })
                    })
                },
                v = n(5675),
                x = n.n(v),
                _ = function(e) {
                    var t = (0, o.useRouter)(),
                        n = (0, a.Z)((0, i.useState)(!1), 2),
                        r = n[0],
                        h = n[1],
                        m = (0, a.Z)((0, i.useState)(!1), 2),
                        f = m[0],
                        g = m[1],
                        v = (0, a.Z)((0, i.useState)(!1), 2),
                        _ = v[0],
                        b = v[1];
                    (0, i.useEffect)(function() {
                        window.addEventListener("scroll", y), c().events.on("routeChangeStart", function(e) {
                            b(!0)
                        }), c().events.on("routeChangeComplete", function() {
                            return b(!1)
                        }), c().events.on("routeChangeError", function() {
                            return b(!1)
                        })
                    }, []);
                    var j = function() {
                            g(!f)
                        },
                        y = function() {
                            window.scrollY > 30 ? r || (document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-lg bg-white py-3 main-nav shadow-sm", h(!0)) : (document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-lg bg-transparent py-3 pt-md-5 main-nav", h(!1))
                        };
                    return (0, l.jsxs)("div", {
                        children: [_ ? (0, l.jsx)(p, {}) : "", (0, l.jsxs)("nav", {
                            className: "navbar fixed-top navbar-expand-lg bg-transparent pt-md-5 main-nav",
                            children: [(0, l.jsxs)("div", {
                                className: "container pt-md-0",
                                children: [(0, l.jsx)(s(), {
                                    href: "/",
                                    legacyBehavior: !0,
                                    children: (0, l.jsxs)("a", {
                                        className: "navbar-brand pt-md-3",
                                        children: [" ", r ? (0, l.jsx)("img", {
                                            src: "/img/GojekLogo.svg",
                                            alt: "GOJEK Tech Logo "
                                        }) : e.whiteNav ? (0, l.jsx)(x(), {
                                            src: "/img/GojekLogo-white.svg",
                                            width: 130,
                                            height: 30,
                                            alt: "GOJEK Tech Logo"
                                        }) : (0, l.jsxs)("div", {
                                            children: [(0, l.jsx)("img", {
                                                src: "/img/GojekLogo.svg",
                                                alt: "GOJEK Tech Logo",
                                                className: "d-none d-md-block"
                                            }), "/" !== t.pathname && (0, l.jsx)("img", {
                                                src: "/img/GojekLogo.svg",
                                                alt: "GOJEK Tech Logo",
                                                className: "d-block d-md-none"
                                            }), "/" === t.pathname && (0, l.jsx)("img", {
                                                src: "/img/GojekLogo.svg",
                                                alt: "GOJEK Tech Logo",
                                                className: "d-block d-md-none"
                                            })]
                                        })]
                                    })
                                }), (0, l.jsx)("button", {
                                    className: "btn d-block d-lg-none",
                                    onClick: function() {
                                        return j()
                                    },
                                    children: (0, l.jsx)("div", {
                                        children: r ? (0, l.jsx)(x(), {
                                            src: "/img/font-awesome/menu.svg",
                                            alt: "hello",
                                            width: 17,
                                            height: 17
                                        }) : (0, l.jsx)(x(), {
                                            src: "/img/font-awesome/white-menu.svg",
                                            alt: "hello",
                                            width: 17,
                                            height: 17
                                        })
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navbarNav",
                                    children: (0, l.jsx)("ul", {
                                        className: "navbar-nav ml-auto ".concat(e.whiteNav ? r ? "blackNav" : "whiteNav" : "blackNav"),
                                        children: u.map(function(e) {
                                            return (0, l.jsx)("li", {
                                                className: "nav-item px-3 ".concat(e.link === t.pathname || ("/careers" === e.link || "/blog" === e.link) && t.pathname.includes(e.link) ? "active" : "").concat(e.type && "button" === e.type ? "" : " "),
                                                children: e.type && "button" === e.type ? (0, l.jsx)(s(), {
                                                    href: e.link,
                                                    legacyBehavior: !0,
                                                    children: (0, l.jsxs)("a", {
                                                        className: "/careers" === t.pathname || "/careers/all" === t.pathname ? "nav-link nav-links" : "button rounded-pill px-3 py-2",
                                                        children: [e.name, " ", e.link === t.pathname ? (0, l.jsx)("span", {
                                                            className: "sr-only",
                                                            children: "(current)"
                                                        }) : ""]
                                                    })
                                                }) : (0, l.jsx)(s(), {
                                                    href: e.link,
                                                    legacyBehavior: !0,
                                                    children: (0, l.jsxs)("a", {
                                                        className: "nav-link nav-links",
                                                        children: [e.name, " ", e.link === t.pathname ? (0, l.jsx)("span", {
                                                            className: "sr-only",
                                                            children: "(current)"
                                                        }) : ""]
                                                    })
                                                })
                                            }, e.id)
                                        })
                                    })
                                })]
                            }), f ? (0, l.jsx)("div", {
                                className: "text-white bg-black full-height fixed-top pt-4",
                                children: (0, l.jsxs)("div", {
                                    className: "container pt-3 pb-2 px-3 d-block",
                                    children: [(0, l.jsxs)("div", {
                                        className: "d-flex justify-content-between pb-5",
                                        children: [(0, l.jsx)("a", {
                                            className: "navbar-brand",
                                            href: "/",
                                            children: (0, l.jsx)("img", {
                                                src: "/img/GojekLogo-white.svg",
                                                alt: "Gojek",
                                                className: "img-fluid footer-logo text-left",
                                                style: {
                                                    height: "2.5rem"
                                                }
                                            })
                                        }), (0, l.jsx)("button", {
                                            className: "btn text-white text-right",
                                            onClick: function() {
                                                return g(!1)
                                            },
                                            children: (0, l.jsx)("img", {
                                                src: "/img/cross.svg",
                                                alt: "close button"
                                            })
                                        })]
                                    }), (0, l.jsxs)("ul", {
                                        className: "list-unstyled mobile-menu text-center",
                                        children: [u.map(function(e, t) {
                                            return (0, l.jsx)("li", {
                                                className: "pb-5",
                                                children: (0, l.jsx)(s(), {
                                                    href: e.link,
                                                    legacyBehavior: !0,
                                                    children: (0, l.jsxs)("a", {
                                                        className: "text-white",
                                                        children: [" ", e.name]
                                                    })
                                                })
                                            }, t)
                                        }), (0, l.jsxs)("li", {
                                            className: "pb-5 text-white d-block",
                                            children: [(0, l.jsx)("p", {
                                                className: "mb-0",
                                                children: "Connect with us \uD83D\uDC47"
                                            }), (0, l.jsx)("ul", {
                                                className: "list-inline pt-5 d-flex justify-content-around",
                                                children: d.a.socialLinks.map(function(e, t) {
                                                    return (0, l.jsx)("li", {
                                                        className: "list-inline-item ",
                                                        children: (0, l.jsx)("a", {
                                                            className: "text-white social-icon",
                                                            href: e.link,
                                                            target: "_blank",
                                                            title: e.name,
                                                            children: (0, l.jsx)("img", {
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
        4564: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.suspense = function() {
                var e = Error(a.NEXT_DYNAMIC_NO_SSR_CODE);
                throw e.digest = a.NEXT_DYNAMIC_NO_SSR_CODE, e
            }, t.NoSSR = function(e) {
                return e.children
            }, (0, n(2648).Z)(n(7294));
            var a = n(2983)
        },
        7645: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n = i.default,
                    l = {
                        loading: function(e) {
                            return e.error, e.isLoading, e.pastDelay, null
                        }
                    };
                e instanceof Promise ? l.loader = function() {
                    return e
                } : "function" == typeof e ? l.loader = e : "object" == typeof e && (l = a({}, l, e));
                var s = (l = a({}, l, t)).loader;
                return l.loadableGenerated && delete(l = a({}, l, l.loadableGenerated)).loadableGenerated, "boolean" != typeof l.ssr || l.ssr || (delete l.webpack, delete l.modules), n(a({}, l, {
                    loader: function() {
                        return null != s ? s().then(r) : Promise.resolve(r(function() {
                            return null
                        }))
                    }
                }))
            };
            var a = n(6495).Z,
                l = n(2648).Z;
            l(n(7294));
            var i = l(n(4588));

            function r(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3644: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LoadableContext = void 0;
            var a = (0, n(2648).Z)(n(7294)).default.createContext(null);
            t.LoadableContext = a
        },
        4588: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(9658).Z,
                l = n(7222).Z,
                i = n(2401).Z;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(932).Z,
                s = n(6495).Z,
                o = (0, n(2648).Z)(n(7294)),
                c = n(4564),
                u = n(3644),
                d = [],
                h = [],
                m = !1;

            function f(e) {
                var t = e(),
                    n = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return n.promise = t.then(function(e) {
                    return n.loading = !1, n.loaded = e, e
                }).catch(function(e) {
                    throw n.loading = !1, n.error = e, e
                }), n
            }
            var g = function() {
                function e(t, n) {
                    a(this, e), this._loadFn = t, this._opts = n, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return l(e, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var e = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var t = this._res,
                            n = this._opts;
                        t.loading && ("number" == typeof n.delay && (0 === n.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(function() {
                            e._update({
                                pastDelay: !0
                            })
                        }, n.delay)), "number" == typeof n.timeout && (this._timeout = setTimeout(function() {
                            e._update({
                                timedOut: !0
                            })
                        }, n.timeout))), this._res.promise.then(function() {
                            e._update({}), e._clearTimeouts()
                        }).catch(function(t) {
                            e._update({}), e._clearTimeouts()
                        }), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        this._state = s({}, this._state, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, e), this._callbacks.forEach(function(e) {
                            return e()
                        })
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(e) {
                        var t = this;
                        return this._callbacks.add(e),
                            function() {
                                t._callbacks.delete(e)
                            }
                    }
                }]), e
            }();

            function p(e) {
                return function(e, t) {
                    var n = function() {
                            if (!d) {
                                var t = new g(e, s);
                                d = {
                                    getCurrentValue: t.getCurrentValue.bind(t),
                                    subscribe: t.subscribe.bind(t),
                                    retry: t.retry.bind(t),
                                    promise: t.promise.bind(t)
                                }
                            }
                            return d.promise()
                        },
                        a = function() {
                            n();
                            var e = o.default.useContext(u.LoadableContext);
                            e && Array.isArray(s.modules) && s.modules.forEach(function(t) {
                                e(t)
                            })
                        },
                        l = function(e) {
                            a();
                            var t = s.loading,
                                n = o.default.createElement(t, {
                                    isLoading: !0,
                                    pastDelay: !0,
                                    error: null
                                }),
                                l = s.ssr ? o.default.Fragment : c.NoSSR,
                                i = s.lazy;
                            return o.default.createElement(o.default.Suspense, {
                                fallback: n
                            }, o.default.createElement(l, null, o.default.createElement(i, Object.assign({}, e))))
                        },
                        s = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null,
                            ssr: !0
                        }, t),
                        d = null;
                    if (s.lazy = o.default.lazy(r(function() {
                            var e;
                            return i(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!(s.ssr && d)) return [3, 2];
                                        return [4, d.getCurrentValue().loaded];
                                    case 1:
                                        if (e = t.sent()) return [2, e];
                                        t.label = 2;
                                    case 2:
                                        return [4, s.loader()];
                                    case 3:
                                        return [2, t.sent()]
                                }
                            })
                        })), !m) {
                        var f = s.webpack ? s.webpack() : s.modules;
                        f && h.push(function(e) {
                            var t = !0,
                                a = !1,
                                l = void 0;
                            try {
                                for (var i, r = f[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
                                    var s = i.value;
                                    if (-1 !== e.indexOf(s)) return n()
                                }
                            } catch (e) {
                                a = !0, l = e
                            } finally {
                                try {
                                    t || null == r.return || r.return()
                                } finally {
                                    if (a) throw l
                                }
                            }
                        })
                    }
                    return l.preload = function() {
                        return n()
                    }, l.displayName = "LoadableComponent", l
                }(f, e)
            }

            function v(e, t) {
                for (var n = []; e.length;) {
                    var a = e.pop();
                    n.push(a(t))
                }
                return Promise.all(n).then(function() {
                    if (e.length) return v(e, t)
                })
            }
            p.preloadAll = function() {
                return new Promise(function(e, t) {
                    v(d).then(e, t)
                })
            }, p.preloadReady = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise(function(t) {
                    var n = function() {
                        return m = !0, t()
                    };
                    v(h, e).then(n, n)
                })
            }, window.__NEXT_PRELOADREADY = p.preloadReady, t.default = p
        },
        7140: function(e) {
            e.exports = {
                "social-media": "BlogNew_social-media__j70ff",
                "text-orange-light": "BlogNew_text-orange-light__Bk_Cu",
                "text-green-light": "BlogNew_text-green-light__uNyDT",
                blogImg: "BlogNew_blogImg__76sRE",
                heading: "BlogNew_heading__grlYQ",
                featuredHeading: "BlogNew_featuredHeading__d4Jtl",
                ctaPurple: "BlogNew_ctaPurple___HJGT",
                ctaTitle: "BlogNew_ctaTitle__zp60t",
                ctaLink: "BlogNew_ctaLink__yojh6",
                readMore: "BlogNew_readMore__lhwTi",
                ctaContainer: "BlogNew_ctaContainer__kPtFf"
            }
        },
        3875: function(e) {
            e.exports = {
                container: "Loader_container__wMqIw"
            }
        },
        5152: function(e, t, n) {
            e.exports = n(7645)
        }
    }
]);