(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7755], {
        708: function(e, t, n) {
            "use strict";
            var a = n(5893);
            t.Z = function() {
                return (0, a.jsxs)("div", {
                    className: "container py-md-4 pt-md-0 pt-4",
                    children: [(0, a.jsx)("h1", {
                        className: "text-white pb-md-5 pb-5 fontfamily fontclass text-left",
                        children: "Find jobs in our ecosystem"
                    }), (0, a.jsxs)("div", {
                        className: "row",
                        children: [(0, a.jsxs)("div", {
                            className: "col-md-4 pr-md-3",
                            children: [(0, a.jsx)("div", {
                                className: "img-position",
                                children: (0, a.jsx)("img", {
                                    src: "/img/careers/go-to-tokopedia.png",
                                    alt: "Tokopedia",
                                    className: "img-fluid image1"
                                })
                            }), (0, a.jsx)("a", {
                                href: "https://www.tokopedia.com/careers/",
                                target: "_blank",
                                children: (0, a.jsx)("button", {
                                    className: "button-position",
                                    children: (0, a.jsx)("img", {
                                        src: "/img/careers/right-arrow.png",
                                        alt: "arrow-image",
                                        className: "image-index"
                                    })
                                })
                            }), (0, a.jsx)("h5", {
                                className: "text-white pt-md-4 pt-4 fontfamily text-left",
                                children: "Tokopedia"
                            }), (0, a.jsx)("p", {
                                className: "text-white pb-4 pb-md-0 text-left",
                                children: "Join our mission to democratize commerce through technology."
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "col-md-4 px-md-3",
                            children: [(0, a.jsx)("div", {
                                className: "img-position",
                                children: (0, a.jsx)("img", {
                                    src: "/img/careers/go-to-finance.png",
                                    alt: "Financial",
                                    className: "img-fluid image1"
                                })
                            }), (0, a.jsx)("a", {
                                href: "https://gotofinancial.com/id/join-us",
                                target: "_blank",
                                children: (0, a.jsx)("button", {
                                    className: "button-position",
                                    children: (0, a.jsx)("img", {
                                        src: "/img/careers/right-arrow.png",
                                        alt: "arrow-image",
                                        className: "image-index"
                                    })
                                })
                            }), (0, a.jsx)("h5", {
                                className: "text-white pt-md-4 pt-4 fontfamily text-left",
                                children: "GoTo Financial"
                            }), (0, a.jsx)("p", {
                                className: "text-white pb-4 pb-md-0 text-left",
                                children: "Here’s your chance to reinvent how we build our financial products."
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "col-md-4 pl-md-3",
                            children: [(0, a.jsx)("div", {
                                className: "img-position",
                                children: (0, a.jsx)("img", {
                                    src: "/img/careers/group.png",
                                    alt: "Group",
                                    className: "img-fluid image1"
                                })
                            }), (0, a.jsx)("a", {
                                href: "https://www.gotocompany.com/en/careers",
                                target: "_blank",
                                children: (0, a.jsx)("button", {
                                    className: "button-position",
                                    children: (0, a.jsx)("img", {
                                        src: "/img/careers/right-arrow.png",
                                        alt: "arrow-image",
                                        className: "image-index"
                                    })
                                })
                            }), (0, a.jsx)("h5", {
                                className: "text-white pt-md-4 pt-4 fontfamily text-left",
                                children: "GoTo Group"
                            }), (0, a.jsx)("p", {
                                className: "text-white pb-4 pb-md-0 text-left",
                                children: "Help us empower progress and build a sustainable future."
                            })]
                        })]
                    })]
                })
            }
        },
        3717: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return b
                }
            });
            var a = n(828),
                i = n(5893),
                s = n(7294),
                r = n(1664),
                l = n.n(r),
                o = n(1163),
                c = n.n(o),
                u = JSON.parse('[{"id":1,"name":"Home","link":"/"},{"id":2,"name":"About us","link":"/about"},{"id":3,"name":"Life@Gojek","link":"/life-at-gojek"},{"id":4,"name":"Blogs & News","link":"/blog"},{"id":5,"name":"Join us","link":"/careers","type":"button"}]'),
                d = n(7151),
                m = n(6747),
                h = n.n(m),
                f = n(3875),
                p = n.n(f),
                g = function() {
                    return (0, i.jsx)("div", {
                        className: p().container,
                        children: (0, i.jsx)(h(), {
                            height: 4,
                            width: "100vw",
                            color: "#00aa13"
                        })
                    })
                },
                x = n(5675),
                v = n.n(x),
                b = function(e) {
                    var t = (0, o.useRouter)(),
                        n = (0, a.Z)((0, s.useState)(!1), 2),
                        r = n[0],
                        m = n[1],
                        h = (0, a.Z)((0, s.useState)(!1), 2),
                        f = h[0],
                        p = h[1],
                        x = (0, a.Z)((0, s.useState)(!1), 2),
                        b = x[0],
                        j = x[1];
                    (0, s.useEffect)(function() {
                        window.addEventListener("scroll", N), c().events.on("routeChangeStart", function(e) {
                            j(!0)
                        }), c().events.on("routeChangeComplete", function() {
                            return j(!1)
                        }), c().events.on("routeChangeError", function() {
                            return j(!1)
                        })
                    }, []);
                    var y = function() {
                            p(!f)
                        },
                        N = function() {
                            window.scrollY > 30 ? r || (document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-lg bg-white py-3 main-nav shadow-sm", m(!0)) : (document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-lg bg-transparent py-3 pt-md-5 main-nav", m(!1))
                        };
                    return (0, i.jsxs)("div", {
                        children: [b ? (0, i.jsx)(g, {}) : "", (0, i.jsxs)("nav", {
                            className: "navbar fixed-top navbar-expand-lg bg-transparent pt-md-5 main-nav",
                            children: [(0, i.jsxs)("div", {
                                className: "container pt-md-0",
                                children: [(0, i.jsx)(l(), {
                                    href: "/",
                                    legacyBehavior: !0,
                                    children: (0, i.jsxs)("a", {
                                        className: "navbar-brand pt-md-3",
                                        children: [" ", r ? (0, i.jsx)("img", {
                                            src: "/img/GojekLogo.svg",
                                            alt: "GOJEK Tech Logo "
                                        }) : e.whiteNav ? (0, i.jsx)(v(), {
                                            src: "/img/GojekLogo-white.svg",
                                            width: 130,
                                            height: 30,
                                            alt: "GOJEK Tech Logo"
                                        }) : (0, i.jsxs)("div", {
                                            children: [(0, i.jsx)("img", {
                                                src: "/img/GojekLogo.svg",
                                                alt: "GOJEK Tech Logo",
                                                className: "d-none d-md-block"
                                            }), "/" !== t.pathname && (0, i.jsx)("img", {
                                                src: "/img/GojekLogo.svg",
                                                alt: "GOJEK Tech Logo",
                                                className: "d-block d-md-none"
                                            }), "/" === t.pathname && (0, i.jsx)("img", {
                                                src: "/img/GojekLogo.svg",
                                                alt: "GOJEK Tech Logo",
                                                className: "d-block d-md-none"
                                            })]
                                        })]
                                    })
                                }), (0, i.jsx)("button", {
                                    className: "btn d-block d-lg-none",
                                    onClick: function() {
                                        return y()
                                    },
                                    children: (0, i.jsx)("div", {
                                        children: r ? (0, i.jsx)(v(), {
                                            src: "/img/font-awesome/menu.svg",
                                            alt: "hello",
                                            width: 17,
                                            height: 17
                                        }) : (0, i.jsx)(v(), {
                                            src: "/img/font-awesome/white-menu.svg",
                                            alt: "hello",
                                            width: 17,
                                            height: 17
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navbarNav",
                                    children: (0, i.jsx)("ul", {
                                        className: "navbar-nav ml-auto ".concat(e.whiteNav ? r ? "blackNav" : "whiteNav" : "blackNav"),
                                        children: u.map(function(e) {
                                            return (0, i.jsx)("li", {
                                                className: "nav-item px-3 ".concat(e.link === t.pathname || ("/careers" === e.link || "/blog" === e.link) && t.pathname.includes(e.link) ? "active" : "").concat(e.type && "button" === e.type ? "" : " "),
                                                children: e.type && "button" === e.type ? (0, i.jsx)(l(), {
                                                    href: e.link,
                                                    legacyBehavior: !0,
                                                    children: (0, i.jsxs)("a", {
                                                        className: "/careers" === t.pathname || "/careers/all" === t.pathname ? "nav-link nav-links" : "button rounded-pill px-3 py-2",
                                                        children: [e.name, " ", e.link === t.pathname ? (0, i.jsx)("span", {
                                                            className: "sr-only",
                                                            children: "(current)"
                                                        }) : ""]
                                                    })
                                                }) : (0, i.jsx)(l(), {
                                                    href: e.link,
                                                    legacyBehavior: !0,
                                                    children: (0, i.jsxs)("a", {
                                                        className: "nav-link nav-links",
                                                        children: [e.name, " ", e.link === t.pathname ? (0, i.jsx)("span", {
                                                            className: "sr-only",
                                                            children: "(current)"
                                                        }) : ""]
                                                    })
                                                })
                                            }, e.id)
                                        })
                                    })
                                })]
                            }), f ? (0, i.jsx)("div", {
                                className: "text-white bg-black full-height fixed-top pt-4",
                                children: (0, i.jsxs)("div", {
                                    className: "container pt-3 pb-2 px-3 d-block",
                                    children: [(0, i.jsxs)("div", {
                                        className: "d-flex justify-content-between pb-5",
                                        children: [(0, i.jsx)("a", {
                                            className: "navbar-brand",
                                            href: "/",
                                            children: (0, i.jsx)("img", {
                                                src: "/img/GojekLogo-white.svg",
                                                alt: "Gojek",
                                                className: "img-fluid footer-logo text-left",
                                                style: {
                                                    height: "2.5rem"
                                                }
                                            })
                                        }), (0, i.jsx)("button", {
                                            className: "btn text-white text-right",
                                            onClick: function() {
                                                return p(!1)
                                            },
                                            children: (0, i.jsx)("img", {
                                                src: "/img/cross.svg",
                                                alt: "close button"
                                            })
                                        })]
                                    }), (0, i.jsxs)("ul", {
                                        className: "list-unstyled mobile-menu text-center",
                                        children: [u.map(function(e, t) {
                                            return (0, i.jsx)("li", {
                                                className: "pb-5",
                                                children: (0, i.jsx)(l(), {
                                                    href: e.link,
                                                    legacyBehavior: !0,
                                                    children: (0, i.jsxs)("a", {
                                                        className: "text-white",
                                                        children: [" ", e.name]
                                                    })
                                                })
                                            }, t)
                                        }), (0, i.jsxs)("li", {
                                            className: "pb-5 text-white d-block",
                                            children: [(0, i.jsx)("p", {
                                                className: "mb-0",
                                                children: "Connect with us \uD83D\uDC47"
                                            }), (0, i.jsx)("ul", {
                                                className: "list-inline pt-5 d-flex justify-content-around",
                                                children: d.a.socialLinks.map(function(e, t) {
                                                    return (0, i.jsx)("li", {
                                                        className: "list-inline-item ",
                                                        children: (0, i.jsx)("a", {
                                                            className: "text-white social-icon",
                                                            href: e.link,
                                                            target: "_blank",
                                                            title: e.name,
                                                            children: (0, i.jsx)("img", {
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
                var n = s.default,
                    i = {
                        loading: function(e) {
                            return e.error, e.isLoading, e.pastDelay, null
                        }
                    };
                e instanceof Promise ? i.loader = function() {
                    return e
                } : "function" == typeof e ? i.loader = e : "object" == typeof e && (i = a({}, i, e));
                var l = (i = a({}, i, t)).loader;
                return i.loadableGenerated && delete(i = a({}, i, i.loadableGenerated)).loadableGenerated, "boolean" != typeof i.ssr || i.ssr || (delete i.webpack, delete i.modules), n(a({}, i, {
                    loader: function() {
                        return null != l ? l().then(r) : Promise.resolve(r(function() {
                            return null
                        }))
                    }
                }))
            };
            var a = n(6495).Z,
                i = n(2648).Z;
            i(n(7294));
            var s = i(n(4588));

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
                i = n(7222).Z,
                s = n(2401).Z;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(932).Z,
                l = n(6495).Z,
                o = (0, n(2648).Z)(n(7294)),
                c = n(4564),
                u = n(3644),
                d = [],
                m = [],
                h = !1;

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
            var p = function() {
                function e(t, n) {
                    a(this, e), this._loadFn = t, this._opts = n, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return i(e, [{
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
                        this._state = l({}, this._state, {
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

            function g(e) {
                return function(e, t) {
                    var n = function() {
                            if (!d) {
                                var t = new p(e, l);
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
                            e && Array.isArray(l.modules) && l.modules.forEach(function(t) {
                                e(t)
                            })
                        },
                        i = function(e) {
                            a();
                            var t = l.loading,
                                n = o.default.createElement(t, {
                                    isLoading: !0,
                                    pastDelay: !0,
                                    error: null
                                }),
                                i = l.ssr ? o.default.Fragment : c.NoSSR,
                                s = l.lazy;
                            return o.default.createElement(o.default.Suspense, {
                                fallback: n
                            }, o.default.createElement(i, null, o.default.createElement(s, Object.assign({}, e))))
                        },
                        l = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null,
                            ssr: !0
                        }, t),
                        d = null;
                    if (l.lazy = o.default.lazy(r(function() {
                            var e;
                            return s(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!(l.ssr && d)) return [3, 2];
                                        return [4, d.getCurrentValue().loaded];
                                    case 1:
                                        if (e = t.sent()) return [2, e];
                                        t.label = 2;
                                    case 2:
                                        return [4, l.loader()];
                                    case 3:
                                        return [2, t.sent()]
                                }
                            })
                        })), !h) {
                        var f = l.webpack ? l.webpack() : l.modules;
                        f && m.push(function(e) {
                            var t = !0,
                                a = !1,
                                i = void 0;
                            try {
                                for (var s, r = f[Symbol.iterator](); !(t = (s = r.next()).done); t = !0) {
                                    var l = s.value;
                                    if (-1 !== e.indexOf(l)) return n()
                                }
                            } catch (e) {
                                a = !0, i = e
                            } finally {
                                try {
                                    t || null == r.return || r.return()
                                } finally {
                                    if (a) throw i
                                }
                            }
                        })
                    }
                    return i.preload = function() {
                        return n()
                    }, i.displayName = "LoadableComponent", i
                }(f, e)
            }

            function x(e, t) {
                for (var n = []; e.length;) {
                    var a = e.pop();
                    n.push(a(t))
                }
                return Promise.all(n).then(function() {
                    if (e.length) return x(e, t)
                })
            }
            g.preloadAll = function() {
                return new Promise(function(e, t) {
                    x(d).then(e, t)
                })
            }, g.preloadReady = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise(function(t) {
                    var n = function() {
                        return h = !0, t()
                    };
                    x(m, e).then(n, n)
                })
            }, window.__NEXT_PRELOADREADY = g.preloadReady, t.default = g
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