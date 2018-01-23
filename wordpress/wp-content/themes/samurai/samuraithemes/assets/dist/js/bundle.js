if (function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = !!t && "length" in t && t.length,
                n = tt.type(t);
            return "function" !== n && !tt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function i(t, e, n) {
            if (tt.isFunction(e)) return tt.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return tt.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (ct.test(e)) return tt.filter(e, t, n);
                e = tt.filter(e, t)
            }
            return tt.grep(t, function(t) {
                return Q.call(e, t) > -1 !== n
            })
        }

        function o(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function r() {
            B.removeEventListener("DOMContentLoaded", r), t.removeEventListener("load", r), tt.ready()
        }

        function s() {
            this.expando = tt.expando + s.uid++
        }

        function a(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Ct, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : wt.test(n) ? tt.parseJSON(n) : n)
                    } catch (t) {}
                    xt.set(t, e, n)
                } else n = void 0;
            return n
        }

        function l(t, e, n, i) {
            var o, r = 1,
                s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return tt.css(t, e, "")
                },
                l = a(),
                u = n && n[3] || (tt.cssNumber[e] ? "" : "px"),
                c = (tt.cssNumber[e] || "px" !== u && +l) && kt.exec(tt.css(t, e));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do {
                    r = r || ".5", c /= r, tt.style(t, e, c + u)
                } while (r !== (r = a() / l) && 1 !== r && --s)
            }
            return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
        }

        function u(t, e) {
            var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && tt.nodeName(t, e) ? tt.merge([t], n) : n
        }

        function c(t, e) {
            for (var n = 0, i = t.length; i > n; n++) bt.set(t[n], "globalEval", !e || bt.get(e[n], "globalEval"))
        }

        function h(t, e, n, i, o) {
            for (var r, s, a, l, h, f, d = e.createDocumentFragment(), p = [], g = 0, v = t.length; v > g; g++)
                if ((r = t[g]) || 0 === r)
                    if ("object" === tt.type(r)) tt.merge(p, r.nodeType ? [r] : r);
                    else if (jt.test(r)) {
                for (s = s || d.appendChild(e.createElement("div")), a = (Nt.exec(r) || ["", ""])[1].toLowerCase(), l = Dt[a] || Dt._default, s.innerHTML = l[1] + tt.htmlPrefilter(r) + l[2], f = l[0]; f--;) s = s.lastChild;
                tt.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
            } else p.push(e.createTextNode(r));
            for (d.textContent = "", g = 0; r = p[g++];)
                if (i && tt.inArray(r, i) > -1) o && o.push(r);
                else if (h = tt.contains(r.ownerDocument, r), s = u(d.appendChild(r), "script"), h && c(s), n)
                for (f = 0; r = s[f++];) At.test(r.type || "") && n.push(r);
            return d
        }

        function f() {
            return !0
        }

        function d() {
            return !1
        }

        function p() {
            try {
                return B.activeElement
            } catch (t) {}
        }

        function g(t, e, n, i, o, r) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) g(t, a, n, i, e[a], r);
                return t
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = d;
            else if (!o) return t;
            return 1 === r && (s = o, o = function(t) {
                return tt().off(t), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = tt.guid++)), t.each(function() {
                tt.event.add(this, e, o, i, n)
            })
        }

        function v(t, e) {
            return tt.nodeName(t, "table") && tt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function m(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function y(t) {
            var e = Pt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function b(t, e) {
            var n, i, o, r, s, a, l, u;
            if (1 === e.nodeType) {
                if (bt.hasData(t) && (r = bt.access(t), s = bt.set(e, r), u = r.events)) {
                    delete s.handle, s.events = {};
                    for (o in u)
                        for (n = 0, i = u[o].length; i > n; n++) tt.event.add(e, o, u[o][n])
                }
                xt.hasData(t) && (a = xt.access(t), l = tt.extend({}, a), xt.set(e, l))
            }
        }

        function x(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && $t.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function w(t, e, n, i) {
            e = V.apply([], e);
            var o, r, s, a, l, c, f = 0,
                d = t.length,
                p = d - 1,
                g = e[0],
                v = tt.isFunction(g);
            if (v || d > 1 && "string" == typeof g && !K.checkClone && Ht.test(g)) return t.each(function(o) {
                var r = t.eq(o);
                v && (e[0] = g.call(this, o, r.html())), w(r, e, n, i)
            });
            if (d && (o = h(e, t[0].ownerDocument, !1, t, i), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                for (a = (s = tt.map(u(o, "script"), m)).length; d > f; f++) l = o, f !== p && (l = tt.clone(l, !0, !0), a && tt.merge(s, u(l, "script"))), n.call(t[f], l, f);
                if (a)
                    for (c = s[s.length - 1].ownerDocument, tt.map(s, y), f = 0; a > f; f++) l = s[f], At.test(l.type || "") && !bt.access(l, "globalEval") && tt.contains(c, l) && (l.src ? tt._evalUrl && tt._evalUrl(l.src) : tt.globalEval(l.textContent.replace(qt, "")))
            }
            return t
        }

        function C(t, e, n) {
            for (var i, o = e ? tt.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || tt.cleanData(u(i)), i.parentNode && (n && tt.contains(i.ownerDocument, i) && c(u(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function T(t, e) {
            var n = tt(e.createElement(t)).appendTo(e.body),
                i = tt.css(n[0], "display");
            return n.detach(), i
        }

        function k(t) {
            var e = B,
                n = Ut[t];
            return n || ("none" !== (n = T(t, e)) && n || (Ft = (Ft || tt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), (e = Ft[0].contentDocument).write(), e.close(), n = T(t, e), Ft.detach()), Ut[t] = n), n
        }

        function S(t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || Bt(t), "" !== (s = n ? n.getPropertyValue(e) || n[e] : void 0) && void 0 !== s || tt.contains(t.ownerDocument, t) || (s = tt.style(t, e)), n && !K.pixelMarginRight() && Mt.test(s) && Wt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
        }

        function E(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function $(t) {
            if (t in Jt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = Gt.length; n--;)
                if ((t = Gt[n] + e) in Jt) return t
        }

        function N(t, e, n) {
            var i = kt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function A(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += tt.css(t, n + St[r], !0, o)), i ? ("content" === n && (s -= tt.css(t, "padding" + St[r], !0, o)), "margin" !== n && (s -= tt.css(t, "border" + St[r] + "Width", !0, o))) : (s += tt.css(t, "padding" + St[r], !0, o), "padding" !== n && (s += tt.css(t, "border" + St[r] + "Width", !0, o)));
            return s
        }

        function D(e, n, i) {
            var o = !0,
                r = "width" === n ? e.offsetWidth : e.offsetHeight,
                s = Bt(e),
                a = "border-box" === tt.css(e, "boxSizing", !1, s);
            if (B.msFullscreenElement && t.top !== t && e.getClientRects().length && (r = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= r || null == r) {
                if ((0 > (r = S(e, n, s)) || null == r) && (r = e.style[n]), Mt.test(r)) return r;
                o = a && (K.boxSizingReliable() || r === e.style[n]), r = parseFloat(r) || 0
            }
            return r + A(e, n, i || (a ? "border" : "content"), o, s) + "px"
        }

        function j(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)(i = t[s]).style && (r[s] = bt.get(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Et(i) && (r[s] = bt.access(i, "olddisplay", k(i.nodeName)))) : (o = Et(i), "none" === n && o || bt.set(i, "olddisplay", o ? n : tt.css(i, "display"))));
            for (s = 0; a > s; s++)(i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function O(t, e, n, i, o) {
            return new O.prototype.init(t, e, n, i, o)
        }

        function I() {
            return t.setTimeout(function() {
                Kt = void 0
            }), Kt = tt.now()
        }

        function L(t, e) {
            var n, i = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = St[i], o["margin" + n] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function R(t, e, n) {
            for (var i, o = (_.tweeners[e] || []).concat(_.tweeners["*"]), r = 0, s = o.length; s > r; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function _(t, e, n) {
            var i, o, r = 0,
                s = _.prefilters.length,
                a = tt.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = Kt || I(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), r = 0, s = u.tweens.length; s > r; r++) u.tweens[r].run(i);
                    return a.notifyWith(t, [u, i, n]), 1 > i && s ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: tt.extend({}, e),
                    opts: tt.extend(!0, {
                        specialEasing: {},
                        easing: tt.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Kt || I(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = tt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (function(t, e) {
                    var n, i, o, r, s;
                    for (n in t)
                        if (i = tt.camelCase(n), o = e[i], r = t[n], tt.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = tt.cssHooks[i]) && "expand" in s) {
                            r = s.expand(r), delete t[i];
                            for (n in r) n in t || (t[n] = r[n], e[n] = o)
                        } else e[i] = o
                }(c, u.opts.specialEasing); s > r; r++)
                if (i = _.prefilters[r].call(u, t, c, u.opts)) return tt.isFunction(i.stop) && (tt._queueHooks(u.elem, u.opts.queue).stop = tt.proxy(i.stop, i)), i;
            return tt.map(c, R, u), tt.isFunction(u.opts.start) && u.opts.start.call(t, u), tt.fx.timer(tt.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function H(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function P(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(gt) || [];
                if (tt.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function q(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, tt.each(t[a] || [], function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
                }), l
            }
            var r = {},
                s = t === be;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function F(t, e) {
            var n, i, o = tt.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && tt.extend(!0, t, i), t
        }

        function U(t, e, n, i) {
            var o;
            if (tt.isArray(e)) tt.each(e, function(e, o) {
                n || Te.test(t) ? i(t, o) : U(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== tt.type(e)) i(t, e);
            else
                for (o in e) U(t + "[" + o + "]", e[o], n, i)
        }

        function W(t) {
            return tt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var M = [],
            B = t.document,
            z = M.slice,
            V = M.concat,
            X = M.push,
            Q = M.indexOf,
            Y = {},
            G = Y.toString,
            J = Y.hasOwnProperty,
            K = {},
            Z = "2.2.2",
            tt = function(t, e) {
                return new tt.fn.init(t, e)
            },
            et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            nt = /^-ms-/,
            it = /-([\da-z])/gi,
            ot = function(t, e) {
                return e.toUpperCase()
            };
        tt.fn = tt.prototype = {
            jquery: Z,
            constructor: tt,
            selector: "",
            length: 0,
            toArray: function() {
                return z.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : z.call(this)
            },
            pushStack: function(t) {
                var e = tt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return tt.each(this, t)
            },
            map: function(t) {
                return this.pushStack(tt.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(z.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: X,
            sort: M.sort,
            splice: M.splice
        }, tt.extend = tt.fn.extend = function() {
            var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || tt.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = s[e], i = t[e], s !== i && (u && i && (tt.isPlainObject(i) || (o = tt.isArray(i))) ? (o ? (o = !1, r = n && tt.isArray(n) ? n : []) : r = n && tt.isPlainObject(n) ? n : {}, s[e] = tt.extend(u, r, i)) : void 0 !== i && (s[e] = i));
            return s
        }, tt.extend({
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === tt.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !tt.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== tt.type(t) || t.nodeType || tt.isWindow(t)) return !1;
                if (t.constructor && !J.call(t, "constructor") && !J.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || J.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Y[G.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, n = eval;
                (t = tt.trim(t)) && (1 === t.indexOf("use strict") ? (e = B.createElement("script"), e.text = t, B.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            },
            camelCase: function(t) {
                return t.replace(nt, "ms-").replace(it, ot)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var i, o = 0;
                if (n(t))
                    for (i = t.length; i > o && !1 !== e.call(t[o], o, t[o]); o++);
                else
                    for (o in t)
                        if (!1 === e.call(t[o], o, t[o])) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(et, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? tt.merge(i, "string" == typeof t ? [t] : t) : X.call(i, t)), i
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : Q.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i; i++) t[o++] = e[i];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i = [], o = 0, r = t.length, s = !n; r > o; o++) !e(t[o], o) !== s && i.push(t[o]);
                return i
            },
            map: function(t, e, i) {
                var o, r, s = 0,
                    a = [];
                if (n(t))
                    for (o = t.length; o > s; s++) null != (r = e(t[s], s, i)) && a.push(r);
                else
                    for (s in t) null != (r = e(t[s], s, i)) && a.push(r);
                return V.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                return "string" == typeof e && (n = t[e], e = t, t = n), tt.isFunction(t) ? (i = z.call(arguments, 2), o = function() {
                    return t.apply(e || this, i.concat(z.call(arguments)))
                }, o.guid = t.guid = t.guid || tt.guid++, o) : void 0
            },
            now: Date.now,
            support: K
        }), "function" == typeof Symbol && (tt.fn[Symbol.iterator] = M[Symbol.iterator]), tt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            Y["[object " + e + "]"] = e.toLowerCase()
        });
        var rt = function(t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, u, h, d, p = e && e.ownerDocument,
                    g = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return n;
                if (!i && ((e ? e.ownerDocument || e : q) !== j && D(e), e = e || j, I)) {
                    if (11 !== g && (u = vt.exec(t)))
                        if (o = u[1]) {
                            if (9 === g) {
                                if (!(s = e.getElementById(o))) return n;
                                if (s.id === o) return n.push(s), n
                            } else if (p && (s = p.getElementById(o)) && H(e, s) && s.id === o) return n.push(s), n
                        } else {
                            if (u[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = u[3]) && x.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(o)), n
                        }
                    if (x.qsa && !B[t + " "] && (!L || !L.test(t))) {
                        if (1 !== g) p = e, d = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(yt, "\\$&") : e.setAttribute("id", a = P), r = (h = k(t)).length, l = ht.test(a) ? "#" + a : "[id='" + a + "']"; r--;) h[r] = l + " " + f(h[r]);
                            d = h.join(","), p = mt.test(t) && c(e.parentNode) || e
                        }
                        if (d) try {
                            return J.apply(n, p.querySelectorAll(d)), n
                        } catch (t) {} finally {
                            a === P && e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(st, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[P] = !0, t
            }

            function o(t) {
                var e = j.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function u(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function h() {}

            function f(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function d(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = U++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r)
                } : function(e, n, s) {
                    var a, l, u, c = [F, r];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) {
                                if (u = e[P] || (e[P] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === F && a[1] === r) return c[2] = a[2];
                                if (l[i] = c, c[2] = t(e, n, s)) return !0
                            }
                }
            }

            function p(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), u && e.push(a)));
                return s
            }

            function v(t, n, o, r, s, a) {
                return r && !r[P] && (r = v(r)), s && !s[P] && (s = v(s, a)), i(function(i, a, l, u) {
                    var c, h, f, d = [],
                        p = [],
                        v = a.length,
                        m = i || function(t, n, i) {
                            for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
                            return i
                        }(n || "*", l.nodeType ? [l] : l, []),
                        y = !t || !i && n ? m : g(m, d, t, l, u),
                        b = o ? s || (i ? t : v || r) ? [] : a : y;
                    if (o && o(y, b, l, u), r)
                        for (c = g(b, p), r(c, [], l, u), h = c.length; h--;)(f = c[h]) && (b[p[h]] = !(y[p[h]] = f));
                    if (i) {
                        if (s || t) {
                            if (s) {
                                for (c = [], h = b.length; h--;)(f = b[h]) && c.push(y[h] = f);
                                s(null, b = [], c, u)
                            }
                            for (h = b.length; h--;)(f = b[h]) && (c = s ? Z(i, f) : d[h]) > -1 && (i[c] = !(a[c] = f))
                        }
                    } else b = g(b === a ? b.splice(v, b.length) : b), s ? s(null, a, b, u) : J.apply(a, b)
                })
            }

            function m(t) {
                for (var e, n, i, o = t.length, r = w.relative[t[0].type], s = r || w.relative[" "], a = r ? 1 : 0, l = d(function(t) {
                        return t === e
                    }, s, !0), u = d(function(t) {
                        return Z(e, t) > -1
                    }, s, !0), c = [function(t, n, i) {
                        var o = !r && (i || n !== $) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                        return e = null, o
                    }]; o > a; a++)
                    if (n = w.relative[t[a].type]) c = [d(p(c), n)];
                    else {
                        if ((n = w.filter[t[a].type].apply(null, t[a].matches))[P]) {
                            for (i = ++a; o > i && !w.relative[t[i].type]; i++);
                            return v(a > 1 && p(c), a > 1 && f(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(st, "$1"), n, i > a && m(t.slice(a, i)), o > i && m(t = t.slice(i)), o > i && f(t))
                        }
                        c.push(n)
                    }
                return p(c)
            }

            function y(t, n) {
                var o = n.length > 0,
                    r = t.length > 0,
                    s = function(i, s, a, l, u) {
                        var c, h, f, d = 0,
                            p = "0",
                            v = i && [],
                            m = [],
                            y = $,
                            b = i || r && w.find.TAG("*", u),
                            x = F += null == y ? 1 : Math.random() || .1,
                            C = b.length;
                        for (u && ($ = s === j || s || u); p !== C && null != (c = b[p]); p++) {
                            if (r && c) {
                                for (h = 0, s || c.ownerDocument === j || (D(c), a = !I); f = t[h++];)
                                    if (f(c, s || j, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (F = x)
                            }
                            o && ((c = !f && c) && d--, i && v.push(c))
                        }
                        if (d += p, o && p !== d) {
                            for (h = 0; f = n[h++];) f(v, m, s, a);
                            if (i) {
                                if (d > 0)
                                    for (; p--;) v[p] || m[p] || (m[p] = Y.call(l));
                                m = g(m)
                            }
                            J.apply(l, m), u && !i && m.length > 0 && d + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (F = x, $ = y), v
                    };
                return o ? i(s) : s
            }
            var b, x, w, C, T, k, S, E, $, N, A, D, j, O, I, L, R, _, H, P = "sizzle" + 1 * new Date,
                q = t.document,
                F = 0,
                U = 0,
                W = n(),
                M = n(),
                B = n(),
                z = function(t, e) {
                    return t === e && (A = !0), 0
                },
                V = 1 << 31,
                X = {}.hasOwnProperty,
                Q = [],
                Y = Q.pop,
                G = Q.push,
                J = Q.push,
                K = Q.slice,
                Z = function(t, e) {
                    for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                et = "[\\x20\\t\\r\\n\\f]",
                nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                it = "\\[" + et + "*(" + nt + ")(?:" + et + "*([*^$|!~]?=)" + et + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + et + "*\\]",
                ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
                rt = new RegExp(et + "+", "g"),
                st = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
                at = new RegExp("^" + et + "*," + et + "*"),
                lt = new RegExp("^" + et + "*([>+~]|" + et + ")" + et + "*"),
                ut = new RegExp("=" + et + "*([^\\]'\"]*?)" + et + "*\\]", "g"),
                ct = new RegExp(ot),
                ht = new RegExp("^" + nt + "$"),
                ft = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt + "|[*])"),
                    ATTR: new RegExp("^" + it),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + tt + ")$", "i"),
                    needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
                },
                dt = /^(?:input|select|textarea|button)$/i,
                pt = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                mt = /[+~]/,
                yt = /'|\\/g,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + et + "?|(" + et + ")|.)", "ig"),
                xt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i != i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                wt = function() {
                    D()
                };
            try {
                J.apply(Q = K.call(q.childNodes), q.childNodes), Q[q.childNodes.length].nodeType
            } catch (t) {
                J = {
                    apply: Q.length ? function(t, e) {
                        G.apply(t, K.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, T = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, D = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : q;
                return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, O = j.documentElement, I = !T(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), x.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = o(function(t) {
                    return t.appendChild(j.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = gt.test(j.getElementsByClassName), x.getById = o(function(t) {
                    return O.appendChild(t).id = P, !j.getElementsByName || !j.getElementsByName(P).length
                }), x.getById ? (w.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && I) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, w.filter.ID = function(t) {
                    var e = t.replace(bt, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete w.find.ID, w.filter.ID = function(t) {
                    var e = t.replace(bt, xt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), w.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, w.find.CLASS = x.getElementsByClassName && function(t, e) {
                    return void 0 !== e.getElementsByClassName && I ? e.getElementsByClassName(t) : void 0
                }, R = [], L = [], (x.qsa = gt.test(j.querySelectorAll)) && (o(function(t) {
                    O.appendChild(t).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + et + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + et + "*(?:value|" + tt + ")"), t.querySelectorAll("[id~=" + P + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + P + "+*").length || L.push(".#.+[+~]")
                }), o(function(t) {
                    var e = j.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + et + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                })), (x.matchesSelector = gt.test(_ = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(t) {
                    x.disconnectedMatch = _.call(t, "div"), _.call(t, "[s!='']:x"), R.push("!=", ot)
                }), L = L.length && new RegExp(L.join("|")), R = R.length && new RegExp(R.join("|")), e = gt.test(O.compareDocumentPosition), H = e || gt.test(O.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, z = e ? function(t, e) {
                    if (t === e) return A = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === j || t.ownerDocument === q && H(q, t) ? -1 : e === j || e.ownerDocument === q && H(q, e) ? 1 : N ? Z(N, t) - Z(N, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return A = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!o || !r) return t === j ? -1 : e === j ? 1 : o ? -1 : r ? 1 : N ? Z(N, t) - Z(N, e) : 0;
                    if (o === r) return s(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? s(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0
                }, j) : j
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== j && D(t), n = n.replace(ut, "='$1']"), x.matchesSelector && I && !B[n + " "] && (!R || !R.test(n)) && (!L || !L.test(n))) try {
                    var i = _.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return e(n, j, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== j && D(t), H(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== j && D(t);
                var n = w.attrHandle[e.toLowerCase()],
                    i = n && X.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
                return void 0 !== i ? i : x.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (A = !x.detectDuplicates, N = !x.sortStable && t.slice(0), t.sort(z), A) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return N = null, t
            }, C = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += C(e);
                return n
            }, (w = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(bt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(bt, xt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + et + ")" + t + "(" + et + "|$)")) && W(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, h, f, d, p, g = r !== s ? "nextSibling" : "previousSibling",
                                v = e.parentNode,
                                m = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (v) {
                                if (r) {
                                    for (; g;) {
                                        for (f = e; f = f[g];)
                                            if (a ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                        p = g = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? v.firstChild : v.lastChild], s && y) {
                                    for (b = (d = (u = (c = (h = (f = v)[P] || (f[P] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] || [])[0] === F && u[1]) && u[2], f = d && v.childNodes[d]; f = ++d && f && f[g] || (b = d = 0) || p.pop();)
                                        if (1 === f.nodeType && ++b && f === e) {
                                            c[t] = [F, d, b];
                                            break
                                        }
                                } else if (y && (f = e, h = f[P] || (f[P] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), u = c[t] || [], d = u[0] === F && u[1], b = d), !1 === b)
                                    for (;
                                        (f = ++d && f && f[g] || (b = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++b || (y && (h = f[P] || (f[P] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), c[t] = [F, b]), f !== e)););
                                return (b -= o) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var o, r = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[P] ? r(n) : r.length > 1 ? (o = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, o = r(t, n), s = o.length; s--;) i = Z(t, o[s]), t[i] = !(e[i] = o[s])
                        }) : function(t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            o = S(t.replace(st, "$1"));
                        return o[P] ? i(function(t, e, n, i) {
                            for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(bt, xt),
                            function(e) {
                                return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, xt).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === O
                    },
                    focus: function(t) {
                        return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return !1 === t.disabled
                    },
                    disabled: function(t) {
                        return !0 === t.disabled
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !w.pseudos.empty(t)
                    },
                    header: function(t) {
                        return pt.test(t.nodeName)
                    },
                    input: function(t) {
                        return dt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: u(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: u(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = w.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[b] = a(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[b] = l(b);
            return h.prototype = w.filters = w.pseudos, w.setFilters = new h, k = e.tokenize = function(t, n) {
                var i, o, r, s, a, l, u, c = M[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = t, l = [], u = w.preFilter; a;) {
                    i && !(o = at.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = lt.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(st, " ")
                    }), a = a.slice(i.length));
                    for (s in w.filter) !(o = ft[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : M(t, l).slice(0)
            }, S = e.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = B[t + " "];
                if (!r) {
                    for (e || (e = k(t)), n = e.length; n--;)(r = m(e[n]))[P] ? i.push(r) : o.push(r);
                    (r = B(t, y(o, i))).selector = t
                }
                return r
            }, E = e.select = function(t, e, n, i) {
                var o, r, s, a, l, u = "function" == typeof t && t,
                    h = !i && k(t = u.selector || t);
                if (n = n || [], 1 === h.length) {
                    if ((r = h[0] = h[0].slice(0)).length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && I && w.relative[r[1].type]) {
                        if (!(e = (w.find.ID(s.matches[0].replace(bt, xt), e) || [])[0])) return n;
                        u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
                        if ((l = w.find[a]) && (i = l(s.matches[0].replace(bt, xt), mt.test(r[0].type) && c(e.parentNode) || e))) {
                            if (r.splice(o, 1), !(t = i.length && f(r))) return J.apply(n, i), n;
                            break
                        }
                }
                return (u || S(t, h))(i, e, !I, n, !e || mt.test(t) && c(e.parentNode) || e), n
            }, x.sortStable = P.split("").sort(z).join("") === P, x.detectDuplicates = !!A, D(), x.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(j.createElement("div"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || r(tt, function(t, e, n) {
                var i;
                return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        tt.find = rt, tt.expr = rt.selectors, tt.expr[":"] = tt.expr.pseudos, tt.uniqueSort = tt.unique = rt.uniqueSort, tt.text = rt.getText, tt.isXMLDoc = rt.isXML, tt.contains = rt.contains;
        var st = function(t, e, n) {
                for (var i = [], o = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && tt(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            at = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            lt = tt.expr.match.needsContext,
            ut = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            ct = /^.[^:#\[\.,]*$/;
        tt.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? tt.find.matchesSelector(i, t) ? [i] : [] : tt.find.matches(t, tt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, tt.fn.extend({
            find: function(t) {
                var e, n = this.length,
                    i = [],
                    o = this;
                if ("string" != typeof t) return this.pushStack(tt(t).filter(function() {
                    for (e = 0; n > e; e++)
                        if (tt.contains(o[e], this)) return !0
                }));
                for (e = 0; n > e; e++) tt.find(t, o[e], i);
                return i = this.pushStack(n > 1 ? tt.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && lt.test(t) ? tt(t) : t || [], !1).length
            }
        });
        var ht, ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (tt.fn.init = function(t, e, n) {
            var i, o;
            if (!t) return this;
            if (n = n || ht, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ft.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof tt ? e[0] : e, tt.merge(this, tt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : B, !0)), ut.test(i[1]) && tt.isPlainObject(e))
                        for (i in e) tt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (o = B.getElementById(i[2])) && o.parentNode && (this.length = 1, this[0] = o), this.context = B, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : tt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(tt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), tt.makeArray(t, this))
        }).prototype = tt.fn, ht = tt(B);
        var dt = /^(?:parents|prev(?:Until|All))/,
            pt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        tt.fn.extend({
            has: function(t) {
                var e = tt(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; n > t; t++)
                        if (tt.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, r = [], s = lt.test(t) || "string" != typeof t ? tt(t, e || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && tt.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? tt.uniqueSort(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? Q.call(tt(t), this[0]) : Q.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(tt.uniqueSort(tt.merge(this.get(), tt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), tt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return st(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return st(t, "parentNode", n)
            },
            next: function(t) {
                return o(t, "nextSibling")
            },
            prev: function(t) {
                return o(t, "previousSibling")
            },
            nextAll: function(t) {
                return st(t, "nextSibling")
            },
            prevAll: function(t) {
                return st(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return st(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return st(t, "previousSibling", n)
            },
            siblings: function(t) {
                return at((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return at(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || tt.merge([], t.childNodes)
            }
        }, function(t, e) {
            tt.fn[t] = function(n, i) {
                var o = tt.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = tt.filter(i, o)), this.length > 1 && (pt[t] || tt.uniqueSort(o), dt.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var gt = /\S+/g;
        tt.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return tt.each(t.match(gt) || [], function(t, n) {
                    e[n] = !0
                }), e
            }(t) : tt.extend({}, t);
            var e, n, i, o, r = [],
                s = [],
                a = -1,
                l = function() {
                    for (o = t.once, i = e = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && t.stopOnFalse && (a = r.length, n = !1);
                    t.memory || (n = !1), e = !1, o && (r = n ? [] : "")
                },
                u = {
                    add: function() {
                        return r && (n && !e && (a = r.length - 1, s.push(n)), function e(n) {
                            tt.each(n, function(n, i) {
                                tt.isFunction(i) ? t.unique && u.has(i) || r.push(i) : i && i.length && "string" !== tt.type(i) && e(i)
                            })
                        }(arguments), n && !e && l()), this
                    },
                    remove: function() {
                        return tt.each(arguments, function(t, e) {
                            for (var n;
                                (n = tt.inArray(e, r, n)) > -1;) r.splice(n, 1), a >= n && a--
                        }), this
                    },
                    has: function(t) {
                        return t ? tt.inArray(t, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return o = s = [], r = n = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return o = s = [], n || (r = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(t, n) {
                        return o || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || l()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, tt.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", tt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", tt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", tt.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return tt.Deferred(function(n) {
                                tt.each(e, function(e, r) {
                                    var s = tt.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && tt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? tt.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, tt.each(e, function(t, r) {
                    var s = r[2],
                        a = r[3];
                    i[r[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, n, i, o = 0,
                    r = z.call(arguments),
                    s = r.length,
                    a = 1 !== s || t && tt.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : tt.Deferred(),
                    u = function(t, n, i) {
                        return function(o) {
                            n[t] = this, i[t] = arguments.length > 1 ? z.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && tt.isFunction(r[o].promise) ? r[o].promise().progress(u(o, n, e)).done(u(o, i, r)).fail(l.reject) : --a;
                return a || l.resolveWith(i, r), l.promise()
            }
        });
        var vt;
        tt.fn.ready = function(t) {
            return tt.ready.promise().done(t), this
        }, tt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? tt.readyWait++ : tt.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --tt.readyWait : tt.isReady) || (tt.isReady = !0, !0 !== t && --tt.readyWait > 0 || (vt.resolveWith(B, [tt]), tt.fn.triggerHandler && (tt(B).triggerHandler("ready"), tt(B).off("ready"))))
            }
        }), tt.ready.promise = function(e) {
            return vt || (vt = tt.Deferred(), "complete" === B.readyState || "loading" !== B.readyState && !B.documentElement.doScroll ? t.setTimeout(tt.ready) : (B.addEventListener("DOMContentLoaded", r), t.addEventListener("load", r))), vt.promise(e)
        }, tt.ready.promise();
        var mt = function(t, e, n, i, o, r, s) {
                var a = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === tt.type(n)) {
                    o = !0;
                    for (a in n) mt(t, e, a, n[a], !0, r, s)
                } else if (void 0 !== i && (o = !0, tt.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(tt(t), n)
                    })), e))
                    for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
            },
            yt = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        s.uid = 1, s.prototype = {
            register: function(t, e) {
                var n = e || {};
                return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!yt(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, yt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e) o[e] = n;
                else
                    for (i in e) o[i] = e[i];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, n) {
                var i;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? void 0 !== (i = this.get(t, e)) ? i : this.get(t, tt.camelCase(e)) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i, o, r = t[this.expando];
                if (void 0 !== r) {
                    if (void 0 === e) this.register(t);
                    else {
                        tt.isArray(e) ? i = e.concat(e.map(tt.camelCase)) : (o = tt.camelCase(e), e in r ? i = [e, o] : (i = o, i = i in r ? [i] : i.match(gt) || [])), n = i.length;
                        for (; n--;) delete r[i[n]]
                    }(void 0 === e || tt.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !tt.isEmptyObject(e)
            }
        };
        var bt = new s,
            xt = new s,
            wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ct = /[A-Z]/g;
        tt.extend({
            hasData: function(t) {
                return xt.hasData(t) || bt.hasData(t)
            },
            data: function(t, e, n) {
                return xt.access(t, e, n)
            },
            removeData: function(t, e) {
                xt.remove(t, e)
            },
            _data: function(t, e, n) {
                return bt.access(t, e, n)
            },
            _removeData: function(t, e) {
                bt.remove(t, e)
            }
        }), tt.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = xt.get(r), 1 === r.nodeType && !bt.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = tt.camelCase(i.slice(5)), a(r, i, o[i]));
                        bt.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    xt.set(this, t)
                }) : mt(this, function(e) {
                    var n, i;
                    if (r && void 0 === e) {
                        if (void 0 !== (n = xt.get(r, t) || xt.get(r, t.replace(Ct, "-$&").toLowerCase()))) return n;
                        if (i = tt.camelCase(t), void 0 !== (n = xt.get(r, i))) return n;
                        if (void 0 !== (n = a(r, i, void 0))) return n
                    } else i = tt.camelCase(t), this.each(function() {
                        var n = xt.get(this, i);
                        xt.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && xt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    xt.remove(this, t)
                })
            }
        }), tt.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = bt.get(t, e), n && (!i || tt.isArray(n) ? i = bt.access(t, e, tt.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = tt.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = tt._queueHooks(t, e);
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function() {
                    tt.dequeue(t, e)
                }, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return bt.get(t, n) || bt.access(t, n, {
                    empty: tt.Callbacks("once memory").add(function() {
                        bt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), tt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? tt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = tt.queue(this, t, e);
                    tt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && tt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    tt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = tt.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = bt.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var Tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            kt = new RegExp("^(?:([+-])=|)(" + Tt + ")([a-z%]*)$", "i"),
            St = ["Top", "Right", "Bottom", "Left"],
            Et = function(t, e) {
                return t = e || t, "none" === tt.css(t, "display") || !tt.contains(t.ownerDocument, t)
            },
            $t = /^(?:checkbox|radio)$/i,
            Nt = /<([\w:-]+)/,
            At = /^$|\/(?:java|ecma)script/i,
            Dt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Dt.optgroup = Dt.option, Dt.tbody = Dt.tfoot = Dt.colgroup = Dt.caption = Dt.thead, Dt.th = Dt.td;
        var jt = /<|&#?\w+;/;
        ! function() {
            var t = B.createDocumentFragment().appendChild(B.createElement("div")),
                e = B.createElement("input");
            e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), K.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Ot = /^key/,
            It = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Lt = /^([^.]*)(?:\.(.+)|)/;
        tt.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, u, c, h, f, d, p, g, v = bt.get(t);
                if (v)
                    for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = tt.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
                            return void 0 !== tt && tt.event.triggered !== e.type ? tt.event.dispatch.apply(t, arguments) : void 0
                        }), u = (e = (e || "").match(gt) || [""]).length; u--;) a = Lt.exec(e[u]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d && (h = tt.event.special[d] || {}, d = (o ? h.delegateType : h.bindType) || d, h = tt.event.special[d] || {}, c = tt.extend({
                        type: d,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && tt.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, r), (f = l[d]) || (f = l[d] = [], f.delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(d, s)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), tt.event.global[d] = !0)
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, u, c, h, f, d, p, g, v = bt.hasData(t) && bt.get(t);
                if (v && (l = v.events)) {
                    for (u = (e = (e || "").match(gt) || [""]).length; u--;)
                        if (a = Lt.exec(e[u]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d) {
                            for (h = tt.event.special[d] || {}, f = l[d = (i ? h.delegateType : h.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) c = f[r], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(r, 1), c.selector && f.delegateCount--, h.remove && h.remove.call(t, c));
                            s && !f.length && (h.teardown && !1 !== h.teardown.call(t, p, v.handle) || tt.removeEvent(t, d, v.handle), delete l[d])
                        } else
                            for (d in l) tt.event.remove(t, d + e[u], n, i, !0);
                    tt.isEmptyObject(l) && bt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = tt.event.fix(t);
                var e, n, i, o, r, s = [],
                    a = z.call(arguments),
                    l = (bt.get(this, "events") || {})[t.type] || [],
                    u = tt.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                    for (s = tt.event.handlers.call(this, t, l), e = 0;
                        (o = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, void 0 !== (i = ((tt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                            for (i = [], n = 0; a > n; n++) r = e[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? tt(o, this).index(l) > -1 : tt.find(o, this, null, [l]).length), i[o] && i.push(r);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, o, r = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || B, i = n.documentElement, o = n.body, t.pageX = e.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[tt.expando]) return t;
                var e, n, i, o = t.type,
                    r = t,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = It.test(o) ? this.mouseHooks : Ot.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new tt.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
                return t.target || (t.target = B), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== p() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === p() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && tt.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return tt.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, tt.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, tt.Event = function(t, e) {
            return this instanceof tt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? f : d) : this.type = t, e && tt.extend(this, e), this.timeStamp = t && t.timeStamp || tt.now(), void(this[tt.expando] = !0)) : new tt.Event(t, e)
        }, tt.Event.prototype = {
            constructor: tt.Event,
            isDefaultPrevented: d,
            isPropagationStopped: d,
            isImmediatePropagationStopped: d,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = f, t && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = f, t && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, tt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            tt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = t.relatedTarget,
                        o = t.handleObj;
                    return i && (i === this || tt.contains(this, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), tt.fn.extend({
            on: function(t, e, n, i) {
                return g(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return g(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, tt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = d), this.each(function() {
                    tt.event.remove(this, t, n, e)
                })
            }
        });
        var Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            _t = /<script|<style|<link/i,
            Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pt = /^true\/(.*)/,
            qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        tt.extend({
            htmlPrefilter: function(t) {
                return t.replace(Rt, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, o, r, s, a = t.cloneNode(!0),
                    l = tt.contains(t.ownerDocument, t);
                if (!(K.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || tt.isXMLDoc(t)))
                    for (s = u(a), r = u(t), i = 0, o = r.length; o > i; i++) x(r[i], s[i]);
                if (e)
                    if (n)
                        for (r = r || u(t), s = s || u(a), i = 0, o = r.length; o > i; i++) b(r[i], s[i]);
                    else b(t, a);
                return (s = u(a, "script")).length > 0 && c(s, !l && u(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, n, i, o = tt.event.special, r = 0; void 0 !== (n = t[r]); r++)
                    if (yt(n)) {
                        if (e = n[bt.expando]) {
                            if (e.events)
                                for (i in e.events) o[i] ? tt.event.remove(n, i) : tt.removeEvent(n, i, e.handle);
                            n[bt.expando] = void 0
                        }
                        n[xt.expando] && (n[xt.expando] = void 0)
                    }
            }
        }), tt.fn.extend({
            domManip: w,
            detach: function(t) {
                return C(this, t, !0)
            },
            remove: function(t) {
                return C(this, t)
            },
            text: function(t) {
                return mt(this, function(t) {
                    return void 0 === t ? tt.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return w(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        v(this, t).appendChild(t)
                    }
                })
            },
            prepend: function() {
                return w(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return w(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return w(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (tt.cleanData(u(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return tt.clone(this, t, e)
                })
            },
            html: function(t) {
                return mt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !_t.test(t) && !Dt[(Nt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = tt.htmlPrefilter(t);
                        try {
                            for (; i > n; n++) 1 === (e = this[n] || {}).nodeType && (tt.cleanData(u(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return w(this, arguments, function(e) {
                    var n = this.parentNode;
                    tt.inArray(this, t) < 0 && (tt.cleanData(u(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), tt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            tt.fn[t] = function(t) {
                for (var n, i = [], o = tt(t), r = o.length - 1, s = 0; r >= s; s++) n = s === r ? this : this.clone(!0), tt(o[s])[e](n), X.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Ft, Ut = {
                HTML: "block",
                BODY: "block"
            },
            Wt = /^margin/,
            Mt = new RegExp("^(" + Tt + ")(?!px)[a-z%]+$", "i"),
            Bt = function(e) {
                var n = e.ownerDocument.defaultView;
                return n && n.opener || (n = t), n.getComputedStyle(e)
            },
            zt = function(t, e, n, i) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = s[r];
                return o
            },
            Vt = B.documentElement;
        ! function() {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Vt.appendChild(s);
                var e = t.getComputedStyle(a);
                n = "1%" !== e.top, r = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Vt.removeChild(s)
            }
            var n, i, o, r, s = B.createElement("div"),
                a = B.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), tt.extend(K, {
                pixelPosition: function() {
                    return e(), n
                },
                boxSizingReliable: function() {
                    return null == i && e(), i
                },
                pixelMarginRight: function() {
                    return null == i && e(), o
                },
                reliableMarginLeft: function() {
                    return null == i && e(), r
                },
                reliableMarginRight: function() {
                    var e, n = a.appendChild(B.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Vt.appendChild(s), e = !parseFloat(t.getComputedStyle(n).marginRight), Vt.removeChild(s), a.removeChild(n), e
                }
            }))
        }();
        var Xt = /^(none|table(?!-c[ea]).+)/,
            Qt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Yt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Gt = ["Webkit", "O", "Moz", "ms"],
            Jt = B.createElement("div").style;
        tt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = S(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = tt.camelCase(e),
                        u = t.style;
                    return e = tt.cssProps[a] || (tt.cssProps[a] = $(a) || a), s = tt.cssHooks[e] || tt.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : u[e] : ("string" === (r = typeof n) && (o = kt.exec(n)) && o[1] && (n = l(t, e, o), r = "number"), void(null != n && n == n && ("number" === r && (n += o && o[3] || (tt.cssNumber[a] ? "" : "px")), K.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (u[e] = n))))
                }
            },
            css: function(t, e, n, i) {
                var o, r, s, a = tt.camelCase(e);
                return e = tt.cssProps[a] || (tt.cssProps[a] = $(a) || a), (s = tt.cssHooks[e] || tt.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = S(t, e, i)), "normal" === o && e in Yt && (o = Yt[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), tt.each(["height", "width"], function(t, e) {
            tt.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? Xt.test(tt.css(t, "display")) && 0 === t.offsetWidth ? zt(t, Qt, function() {
                        return D(t, e, i)
                    }) : D(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var o, r = i && Bt(t),
                        s = i && A(t, e, i, "border-box" === tt.css(t, "boxSizing", !1, r), r);
                    return s && (o = kt.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = tt.css(t, e)), N(0, n, s)
                }
            }
        }), tt.cssHooks.marginLeft = E(K.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(S(t, "marginLeft")) || t.getBoundingClientRect().left - zt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), tt.cssHooks.marginRight = E(K.reliableMarginRight, function(t, e) {
            return e ? zt(t, {
                display: "inline-block"
            }, S, [t, "marginRight"]) : void 0
        }), tt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            tt.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + St[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, Wt.test(t) || (tt.cssHooks[t + e].set = N)
        }), tt.fn.extend({
            css: function(t, e) {
                return mt(this, function(t, e, n) {
                    var i, o, r = {},
                        s = 0;
                    if (tt.isArray(e)) {
                        for (i = Bt(t), o = e.length; o > s; s++) r[e[s]] = tt.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? tt.style(t, e, n) : tt.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return j(this, !0)
            },
            hide: function() {
                return j(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Et(this) ? tt(this).show() : tt(this).hide()
                })
            }
        }), tt.Tween = O, (O.prototype = {
            constructor: O,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || tt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (tt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = O.propHooks[this.prop];
                return t && t.get ? t.get(this) : O.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = O.propHooks[this.prop];
                return this.options.duration ? this.pos = e = tt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
            }
        }).init.prototype = O.prototype, (O.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = tt.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    tt.fx.step[t.prop] ? tt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[tt.cssProps[t.prop]] && !tt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : tt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }).scrollTop = O.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, tt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, tt.fx = O.prototype.init, tt.fx.step = {};
        var Kt, Zt, te = /^(?:toggle|show|hide)$/,
            ee = /queueHooks$/;
        tt.Animation = tt.extend(_, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return l(n.elem, t, kt.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    tt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(gt);
                    for (var n, i = 0, o = t.length; o > i; i++) n = t[i], _.tweeners[n] = _.tweeners[n] || [], _.tweeners[n].unshift(e)
                },
                prefilters: [function(t, e, n) {
                    var i, o, r, s, a, l, u, c = this,
                        h = {},
                        f = t.style,
                        d = t.nodeType && Et(t),
                        p = bt.get(t, "fxshow");
                    n.queue || (null == (a = tt._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || l()
                    }), a.unqueued++, c.always(function() {
                        c.always(function() {
                            a.unqueued--, tt.queue(t, "fx").length || a.empty.fire()
                        })
                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (u = tt.css(t, "display")) ? bt.get(t, "olddisplay") || k(t.nodeName) : u) && "none" === tt.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function() {
                        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                    }));
                    for (i in e)
                        if (o = e[i], te.exec(o)) {
                            if (delete e[i], r = r || "toggle" === o, o === (d ? "hide" : "show")) {
                                if ("show" !== o || !p || void 0 === p[i]) continue;
                                d = !0
                            }
                            h[i] = p && p[i] || tt.style(t, i)
                        } else u = void 0;
                    if (tt.isEmptyObject(h)) "inline" === ("none" === u ? k(t.nodeName) : u) && (f.display = u);
                    else {
                        p ? "hidden" in p && (d = p.hidden) : p = bt.access(t, "fxshow", {}), r && (p.hidden = !d), d ? tt(t).show() : c.done(function() {
                            tt(t).hide()
                        }), c.done(function() {
                            var e;
                            bt.remove(t, "fxshow");
                            for (e in h) tt.style(t, e, h[e])
                        });
                        for (i in h) s = R(d ? p[i] : 0, i, c), i in p || (p[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
                    }
                }],
                prefilter: function(t, e) {
                    e ? _.prefilters.unshift(t) : _.prefilters.push(t)
                }
            }), tt.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? tt.extend({}, t) : {
                    complete: n || !n && e || tt.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !tt.isFunction(e) && e
                };
                return i.duration = tt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in tt.fx.speeds ? tt.fx.speeds[i.duration] : tt.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    tt.isFunction(i.old) && i.old.call(this), i.queue && tt.dequeue(this, i.queue)
                }, i
            }, tt.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Et).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = tt.isEmptyObject(t),
                        r = tt.speed(e, n, i),
                        s = function() {
                            var e = _(this, tt.extend({}, t), r);
                            (o || bt.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = tt.timers,
                            s = bt.get(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && ee.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        !e && n || tt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, n = bt.get(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = tt.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, tt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), tt.each(["toggle", "show", "hide"], function(t, e) {
                var n = tt.fn[e];
                tt.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(L(e, !0), t, i, o)
                }
            }), tt.each({
                slideDown: L("show"),
                slideUp: L("hide"),
                slideToggle: L("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                tt.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), tt.timers = [], tt.fx.tick = function() {
                var t, e = 0,
                    n = tt.timers;
                for (Kt = tt.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || tt.fx.stop(), Kt = void 0
            }, tt.fx.timer = function(t) {
                tt.timers.push(t), t() ? tt.fx.start() : tt.timers.pop()
            }, tt.fx.interval = 13, tt.fx.start = function() {
                Zt || (Zt = t.setInterval(tt.fx.tick, tt.fx.interval))
            }, tt.fx.stop = function() {
                t.clearInterval(Zt), Zt = null
            }, tt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, tt.fn.delay = function(e, n) {
                return e = tt.fx ? tt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                    var o = t.setTimeout(n, e);
                    i.stop = function() {
                        t.clearTimeout(o)
                    }
                })
            },
            function() {
                var t = B.createElement("input"),
                    e = B.createElement("select"),
                    n = e.appendChild(B.createElement("option"));
                t.type = "checkbox", K.checkOn = "" !== t.value, K.optSelected = n.selected, e.disabled = !0, K.optDisabled = !n.disabled, (t = B.createElement("input")).value = "t", t.type = "radio", K.radioValue = "t" === t.value
            }();
        var ne, ie = tt.expr.attrHandle;
        tt.fn.extend({
            attr: function(t, e) {
                return mt(this, tt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    tt.removeAttr(this, t)
                })
            }
        }), tt.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? tt.prop(t, e, n) : (1 === r && tt.isXMLDoc(t) || (e = e.toLowerCase(), o = tt.attrHooks[e] || (tt.expr.match.bool.test(e) ? ne : void 0)), void 0 !== n ? null === n ? void tt.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = tt.find.attr(t, e)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!K.radioValue && "radio" === e && tt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                    r = e && e.match(gt);
                if (r && 1 === t.nodeType)
                    for (; n = r[o++];) i = tt.propFix[n] || n, tt.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
            }
        }), ne = {
            set: function(t, e, n) {
                return !1 === e ? tt.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, tt.each(tt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = ie[e] || tt.find.attr;
            ie[e] = function(t, e, i) {
                var o, r;
                return i || (r = ie[e], ie[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, ie[e] = r), o
            }
        });
        var oe = /^(?:input|select|textarea|button)$/i,
            re = /^(?:a|area)$/i;
        tt.fn.extend({
            prop: function(t, e) {
                return mt(this, tt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[tt.propFix[t] || t]
                })
            }
        }), tt.extend({
            prop: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && tt.isXMLDoc(t) || (e = tt.propFix[e] || e, o = tt.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = tt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : oe.test(t.nodeName) || re.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), K.optSelected || (tt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), tt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            tt.propFix[this.toLowerCase()] = this
        });
        var se = /[\t\r\n\f]/g;
        tt.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (tt.isFunction(t)) return this.each(function(e) {
                    tt(this).addClass(t.call(this, e, H(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(gt) || []; n = this[l++];)
                        if (o = H(n), i = 1 === n.nodeType && (" " + o + " ").replace(se, " ")) {
                            for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (a = tt.trim(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (tt.isFunction(t)) return this.each(function(e) {
                    tt(this).removeClass(t.call(this, e, H(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(gt) || []; n = this[l++];)
                        if (o = H(n), i = 1 === n.nodeType && (" " + o + " ").replace(se, " ")) {
                            for (s = 0; r = e[s++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            o !== (a = tt.trim(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : tt.isFunction(t) ? this.each(function(n) {
                    tt(this).toggleClass(t.call(this, n, H(this), e), e)
                }) : this.each(function() {
                    var e, i, o, r;
                    if ("string" === n)
                        for (i = 0, o = tt(this), r = t.match(gt) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== n || ((e = H(this)) && bt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : bt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + H(n) + " ").replace(se, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var ae = /\r/g,
            le = /[\x20\t\r\n\f]+/g;
        tt.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = tt.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? t.call(this, n, tt(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : tt.isArray(o) && (o = tt.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = tt.valHooks[this.type] || tt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = tt.valHooks[o.type] || tt.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(ae, "") : null == n ? "" : n : void 0
            }
        }), tt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = tt.find.attr(t, "value");
                        return null != e ? e : tt.trim(tt.text(t)).replace(le, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                            if (((n = i[l]).selected || l === o) && (K.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !tt.nodeName(n.parentNode, "optgroup"))) {
                                if (e = tt(n).val(), r) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = tt.makeArray(e), s = o.length; s--;) i = o[s], (i.selected = tt.inArray(tt.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), tt.each(["radio", "checkbox"], function() {
            tt.valHooks[this] = {
                set: function(t, e) {
                    return tt.isArray(e) ? t.checked = tt.inArray(tt(t).val(), e) > -1 : void 0
                }
            }, K.checkOn || (tt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var ue = /^(?:focusinfocus|focusoutblur)$/;
        tt.extend(tt.event, {
            trigger: function(e, n, i, o) {
                var r, s, a, l, u, c, h, f = [i || B],
                    d = J.call(e, "type") ? e.type : e,
                    p = J.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = i = i || B, 3 !== i.nodeType && 8 !== i.nodeType && !ue.test(d + tt.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), d = p.shift(), p.sort()), u = d.indexOf(":") < 0 && "on" + d, e = e[tt.expando] ? e : new tt.Event(d, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : tt.makeArray(n, [e]), h = tt.event.special[d] || {}, o || !h.trigger || !1 !== h.trigger.apply(i, n))) {
                    if (!o && !h.noBubble && !tt.isWindow(i)) {
                        for (l = h.delegateType || d, ue.test(l + d) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                        a === (i.ownerDocument || B) && f.push(a.defaultView || a.parentWindow || t)
                    }
                    for (r = 0;
                        (s = f[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : h.bindType || d, (c = (bt.get(s, "events") || {})[e.type] && bt.get(s, "handle")) && c.apply(s, n), (c = u && s[u]) && c.apply && yt(s) && (e.result = c.apply(s, n), !1 === e.result && e.preventDefault());
                    return e.type = d, o || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(f.pop(), n) || !yt(i) || u && tt.isFunction(i[d]) && !tt.isWindow(i) && ((a = i[u]) && (i[u] = null), tt.event.triggered = d, i[d](), tt.event.triggered = void 0, a && (i[u] = a)), e.result
                }
            },
            simulate: function(t, e, n) {
                var i = tt.extend(new tt.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                tt.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
            }
        }), tt.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    tt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? tt.event.trigger(t, e, n, !0) : void 0
            }
        }), tt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            tt.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), tt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), K.focusin = "onfocusin" in t, K.focusin || tt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                tt.event.simulate(e, t.target, tt.event.fix(t))
            };
            tt.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = bt.access(i, e);
                    o || i.addEventListener(t, n, !0), bt.access(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = bt.access(i, e) - 1;
                    o ? bt.access(i, e, o) : (i.removeEventListener(t, n, !0), bt.remove(i, e))
                }
            }
        });
        var ce = t.location,
            he = tt.now(),
            fe = /\?/;
        tt.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, tt.parseXML = function(e) {
            var n;
            if (!e || "string" != typeof e) return null;
            try {
                n = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || tt.error("Invalid XML: " + e), n
        };
        var de = /#.*$/,
            pe = /([?&])_=[^&]*/,
            ge = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ve = /^(?:GET|HEAD)$/,
            me = /^\/\//,
            ye = {},
            be = {},
            xe = "*/".concat("*"),
            we = B.createElement("a");
        we.href = ce.href, tt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ce.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ce.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": xe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": tt.parseJSON,
                    "text xml": tt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? F(F(t, tt.ajaxSettings), e) : F(tt.ajaxSettings, t)
            },
            ajaxPrefilter: P(ye),
            ajaxTransport: P(be),
            ajax: function(e, n) {
                function i(e, n, i, a) {
                    var u, h, y, b, w, T = n;
                    2 !== x && (x = 2, l && t.clearTimeout(l), o = void 0, s = a || "", C.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, i && (b = function(t, e, n) {
                        for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (i)
                            for (o in a)
                                if (a[o] && a[o].test(i)) {
                                    l.unshift(o);
                                    break
                                }
                        if (l[0] in n) r = l[0];
                        else {
                            for (o in n) {
                                if (!l[0] || t.converters[o + " " + l[0]]) {
                                    r = o;
                                    break
                                }
                                s || (s = o)
                            }
                            r = r || s
                        }
                        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
                    }(f, C, i)), b = function(t, e, n, i) {
                        var o, r, s, a, l, u = {},
                            c = t.dataTypes.slice();
                        if (c[1])
                            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                        for (r = c.shift(); r;)
                            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                            if (!(s = u[l + " " + r] || u["* " + r]))
                                for (o in u)
                                    if ((a = o.split(" "))[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                        !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], c.unshift(a[1]));
                                        break
                                    }
                            if (!0 !== s)
                                if (s && t.throws) e = s(e);
                                else try {
                                    e = s(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: s ? t : "No conversion from " + l + " to " + r
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(f, b, C, u), u ? (f.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (tt.lastModified[r] = w), (w = C.getResponseHeader("etag")) && (tt.etag[r] = w)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, h = b.data, y = b.error, u = !y)) : (y = T, !e && T || (T = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || T) + "", u ? g.resolveWith(d, [h, T, C]) : g.rejectWith(d, [C, T, y]), C.statusCode(m), m = void 0, c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [C, f, u ? h : y]), v.fireWith(d, [C, T]), c && (p.trigger("ajaxComplete", [C, f]), --tt.active || tt.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var o, r, s, a, l, u, c, h, f = tt.ajaxSetup({}, n),
                    d = f.context || f,
                    p = f.context && (d.nodeType || d.jquery) ? tt(d) : tt.event,
                    g = tt.Deferred(),
                    v = tt.Callbacks("once memory"),
                    m = f.statusCode || {},
                    y = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === x) {
                                if (!a)
                                    for (a = {}; e = ge.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return x || (t = b[n] = b[n] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return x || (f.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > x)
                                    for (e in t) m[e] = [m[e], t[e]];
                                else C.always(t[C.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return o && o.abort(e), i(0, e), this
                        }
                    };
                if (g.promise(C).complete = v.add, C.success = C.done, C.error = C.fail, f.url = ((e || f.url || ce.href) + "").replace(de, "").replace(me, ce.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = tt.trim(f.dataType || "*").toLowerCase().match(gt) || [""], null == f.crossDomain) {
                    u = B.createElement("a");
                    try {
                        u.href = f.url, u.href = u.href, f.crossDomain = we.protocol + "//" + we.host != u.protocol + "//" + u.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = tt.param(f.data, f.traditional)), q(ye, f, n, C), 2 === x) return C;
                (c = tt.event && f.global) && 0 == tt.active++ && tt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !ve.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (fe.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = pe.test(r) ? r.replace(pe, "$1_=" + he++) : r + (fe.test(r) ? "&" : "?") + "_=" + he++)), f.ifModified && (tt.lastModified[r] && C.setRequestHeader("If-Modified-Since", tt.lastModified[r]), tt.etag[r] && C.setRequestHeader("If-None-Match", tt.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xe + "; q=0.01" : "") : f.accepts["*"]);
                for (h in f.headers) C.setRequestHeader(h, f.headers[h]);
                if (f.beforeSend && (!1 === f.beforeSend.call(d, C, f) || 2 === x)) return C.abort();
                w = "abort";
                for (h in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) C[h](f[h]);
                if (o = q(be, f, n, C)) {
                    if (C.readyState = 1, c && p.trigger("ajaxSend", [C, f]), 2 === x) return C;
                    f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                        C.abort("timeout")
                    }, f.timeout));
                    try {
                        x = 1, o.send(y, i)
                    } catch (t) {
                        if (!(2 > x)) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return C
            },
            getJSON: function(t, e, n) {
                return tt.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return tt.get(t, void 0, e, "script")
            }
        }), tt.each(["get", "post"], function(t, e) {
            tt[e] = function(t, n, i, o) {
                return tt.isFunction(n) && (o = o || i, i = n, n = void 0), tt.ajax(tt.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                }, tt.isPlainObject(t) && t))
            }
        }), tt._evalUrl = function(t) {
            return tt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, tt.fn.extend({
            wrapAll: function(t) {
                var e;
                return tt.isFunction(t) ? this.each(function(e) {
                    tt(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = tt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return tt.isFunction(t) ? this.each(function(e) {
                    tt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = tt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = tt.isFunction(t);
                return this.each(function(n) {
                    tt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    tt.nodeName(this, "body") || tt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), tt.expr.filters.hidden = function(t) {
            return !tt.expr.filters.visible(t)
        }, tt.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var Ce = /%20/g,
            Te = /\[\]$/,
            ke = /\r?\n/g,
            Se = /^(?:submit|button|image|reset|file)$/i,
            Ee = /^(?:input|select|textarea|keygen)/i;
        tt.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    e = tt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = tt.ajaxSettings && tt.ajaxSettings.traditional), tt.isArray(t) || t.jquery && !tt.isPlainObject(t)) tt.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) U(n, t[n], e, o);
            return i.join("&").replace(Ce, "+")
        }, tt.fn.extend({
            serialize: function() {
                return tt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = tt.prop(this, "elements");
                    return t ? tt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !tt(this).is(":disabled") && Ee.test(this.nodeName) && !Se.test(t) && (this.checked || !$t.test(t))
                }).map(function(t, e) {
                    var n = tt(this).val();
                    return null == n ? null : tt.isArray(n) ? tt.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(ke, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(ke, "\r\n")
                    }
                }).get()
            }
        }), tt.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var $e = {
                0: 200,
                1223: 204
            },
            Ne = tt.ajaxSettings.xhr();
        K.cors = !!Ne && "withCredentials" in Ne, K.ajax = Ne = !!Ne, tt.ajaxTransport(function(e) {
            var n, i;
            return K.cors || Ne && !e.crossDomain ? {
                send: function(o, r) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o) a.setRequestHeader(s, o[s]);
                    n = function(t) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r($e[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (n) throw t
                    }
                },
                abort: function() {
                    n && n()
                }
            } : void 0
        }), tt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return tt.globalEval(t), t
                }
            }
        }), tt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), tt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(i, o) {
                        e = tt("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), B.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Ae = [],
            De = /(=)\?(?=&|$)|\?\?/;
        tt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ae.pop() || tt.expando + "_" + he++;
                return this[t] = !0, t
            }
        }), tt.ajaxPrefilter("json jsonp", function(e, n, i) {
            var o, r, s, a = !1 !== e.jsonp && (De.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && De.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = tt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(De, "$1" + o) : !1 !== e.jsonp && (e.url += (fe.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || tt.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, i.always(function() {
                void 0 === r ? tt(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Ae.push(o)), s && tt.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), tt.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || B;
            var i = ut.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = h([t], e, o), o && o.length && tt(o).remove(), tt.merge([], i.childNodes))
        };
        var je = tt.fn.load;
        tt.fn.load = function(t, e, n) {
            if ("string" != typeof t && je) return je.apply(this, arguments);
            var i, o, r, s = this,
                a = t.indexOf(" ");
            return a > -1 && (i = tt.trim(t.slice(a)), t = t.slice(0, a)), tt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && tt.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, s.html(i ? tt("<div>").append(tt.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                s.each(function() {
                    n.apply(s, r || [t.responseText, e, t])
                })
            }), this
        }, tt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            tt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), tt.expr.filters.animated = function(t) {
            return tt.grep(tt.timers, function(e) {
                return t === e.elem
            }).length
        }, tt.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, s, a, l, u = tt.css(t, "position"),
                    c = tt(t),
                    h = {};
                "static" === u && (t.style.position = "relative"), a = c.offset(), r = tt.css(t, "top"), l = tt.css(t, "left"), ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1 ? (i = c.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), tt.isFunction(e) && (e = e.call(t, n, tt.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : c.css(h)
            }
        }, tt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    tt.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    r = i && i.ownerDocument;
                return r ? (e = r.documentElement, tt.contains(e, i) ? (o = i.getBoundingClientRect(), n = W(r), {
                    top: o.top + n.pageYOffset - e.clientTop,
                    left: o.left + n.pageXOffset - e.clientLeft
                }) : o) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === tt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), tt.nodeName(t[0], "html") || (i = t.offset()), i.top += tt.css(t[0], "borderTopWidth", !0), i.left += tt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - tt.css(n, "marginTop", !0),
                        left: e.left - i.left - tt.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === tt.css(t, "position");) t = t.offsetParent;
                    return t || Vt
                })
            }
        }), tt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            tt.fn[t] = function(i) {
                return mt(this, function(t, i, o) {
                    var r = W(t);
                    return void 0 === o ? r ? r[e] : t[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o)
                }, t, i, arguments.length)
            }
        }), tt.each(["top", "left"], function(t, e) {
            tt.cssHooks[e] = E(K.pixelPosition, function(t, n) {
                return n ? (n = S(t, e), Mt.test(n) ? tt(t).position()[e] + "px" : n) : void 0
            })
        }), tt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            tt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                tt.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return mt(this, function(e, n, i) {
                        var o;
                        return tt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? tt.css(e, n, s) : tt.style(e, n, i, s)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), tt.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            size: function() {
                return this.length
            }
        }), tt.fn.andSelf = tt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return tt
        });
        var Oe = t.jQuery,
            Ie = t.$;
        return tt.noConflict = function(e) {
            return t.$ === tt && (t.$ = Ie), e && t.jQuery === tt && (t.jQuery = Oe), tt
        }, e || (t.jQuery = t.$ = tt), tt
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        return setTimeout(function() {
            n || t(i).trigger(t.support.transition.end)
        }, e), this
    }, t(function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e)
                if (void 0 !== t.style[n]) return {
                    end: e[n]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        n = function(n) {
            t(n).on("click", e, this.close)
        };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t("#" === r ? [] : r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var i = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = i, this
    }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e);
        if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
        var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(e, o),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var u = r[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(r)]);
                h && h.addClass("active")
            }
            var f = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var o = function(n) {
        var i, o = t(this),
            r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.collapse"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o),
            s = r.data("bs.collapse") ? "toggle" : o.data();
        n.call(r, s)
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(i).remove(), t(o).each(function() {
            var i = t(this),
                o = e(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }
    var i = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        r = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.3.7", r.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o),
                s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, r.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = e(i),
                    s = r.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                var a = r.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(n.target);
                    38 == n.which && l > 0 && l--, 40 == n.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
        })
    }, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, e.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, e.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, e.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, e.prototype.show = function() {
        var n = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(n);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (n.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(a);
            u && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                h = r[0].offsetWidth,
                f = r[0].offsetHeight;
            if (u) {
                var d = a,
                    p = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + f > p.bottom ? "top" : "top" == a && c.top - f < p.top ? "bottom" : "right" == a && c.right + h > p.width ? "left" : "left" == a && c.left - h < p.left ? "right" : a, r.removeClass(d).addClass(a)
            }
            var g = this.getCalculatedOffset(a, c, h, f);
            this.applyPlacement(g, a);
            var v = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(e.TRANSITION_DURATION) : v()
        }
    }, e.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != r && (e.top = e.top + r - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var h = /top|bottom/.test(n),
            f = h ? 2 * c.left - o + l : 2 * c.top - r + u,
            d = h ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(f, i[0][d], h)
    }, e.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function(n) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), n && n()
        }
        var o = this,
            r = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(e.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(e) {
        var n = (e = e || this.$element)[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            s = i ? {
                top: 0,
                left: 0
            } : r ? null : e.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, a, l, s)
    }, e.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var u = e.left - r,
                c = e.left + r + n;
            u < s.left ? o.left = s.left - u : c > s.right && (o.left = s.left + s.width - c)
        }
        return o
    }, e.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var n = this;
        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, e.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = function(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof n && n;
            !o && /destroy|hide/.test(n) || (o || i.data("bs.tooltip", o = new e(this, r)), "string" == typeof n && o[n]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = function(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                r = "object" == typeof n && n;
            !o && /destroy|hide/.test(n) || (o || i.data("bs.popover", o = new e(this, r)), "string" == typeof n && o[n]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery),
function(t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + i, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var s = i.find("> .active"),
            a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top;
        return null != n && o <= n ? "top" : null != i && l + (a ? s : e) >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - r
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery),
function(t, e, n) {
    function i(t, n) {
        var i = e(t);
        i.data(o, this), this._$element = i, this.shares = [], this._init(n), this._render()
    }
    var o = "JSSocials",
        r = function(t, n) {
            return e.isFunction(t) ? t.apply(n, e.makeArray(arguments).slice(2)) : t
        },
        s = /(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,
        a = /(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,
        l = {
            G: 1e9,
            M: 1e6,
            K: 1e3
        },
        u = {};
    i.prototype = {
        url: "",
        text: "",
        shareIn: "blank",
        showLabel: function(t) {
            return !1 === this.showCount ? t > this.smallScreenWidth : t >= this.largeScreenWidth
        },
        showCount: function(t) {
            return !(t <= this.smallScreenWidth) || "inside"
        },
        smallScreenWidth: 640,
        largeScreenWidth: 1024,
        resizeTimeout: 200,
        elementClass: "jssocials",
        sharesClass: "jssocials-shares",
        shareClass: "jssocials-share",
        shareButtonClass: "jssocials-share-button",
        shareLinkClass: "jssocials-share-link",
        shareLogoClass: "jssocials-share-logo",
        shareLabelClass: "jssocials-share-label",
        shareLinkCountClass: "jssocials-share-link-count",
        shareCountBoxClass: "jssocials-share-count-box",
        shareCountClass: "jssocials-share-count",
        shareZeroCountClass: "jssocials-share-no-count",
        _init: function(t) {
            this._initDefaults(), e.extend(this, t), this._initShares(), this._attachWindowResizeCallback()
        },
        _initDefaults: function() {
            this.url = t.location.href, this.text = e.trim(e("meta[name=description]").attr("content") || e("title").text())
        },
        _initShares: function() {
            this.shares = e.map(this.shares, e.proxy(function(t) {
                "string" == typeof t && (t = {
                    share: t
                });
                var n = t.share && u[t.share];
                if (!n && !t.renderer) throw Error("Share '" + t.share + "' is not found");
                return e.extend({
                    url: this.url,
                    text: this.text
                }, n, t)
            }, this))
        },
        _attachWindowResizeCallback: function() {
            e(t).on("resize", e.proxy(this._windowResizeHandler, this))
        },
        _detachWindowResizeCallback: function() {
            e(t).off("resize", this._windowResizeHandler)
        },
        _windowResizeHandler: function() {
            (e.isFunction(this.showLabel) || e.isFunction(this.showCount)) && (t.clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(e.proxy(this.refresh, this), this.resizeTimeout))
        },
        _render: function() {
            this._clear(), this._defineOptionsByScreen(), this._$element.addClass(this.elementClass), this._$shares = e("<div>").addClass(this.sharesClass).appendTo(this._$element), this._renderShares()
        },
        _defineOptionsByScreen: function() {
            this._screenWidth = e(t).width(), this._showLabel = r(this.showLabel, this, this._screenWidth), this._showCount = r(this.showCount, this, this._screenWidth)
        },
        _renderShares: function() {
            e.each(this.shares, e.proxy(function(t, e) {
                this._renderShare(e)
            }, this))
        },
        _renderShare: function(t) {
            (e.isFunction(t.renderer) ? e(t.renderer()) : this._createShare(t)).addClass(this.shareClass).addClass(t.share ? "jssocials-share-" + t.share : "").addClass(t.css).appendTo(this._$shares)
        },
        _createShare: function(t) {
            var n = e("<div>"),
                i = this._createShareLink(t).appendTo(n);
            if (this._showCount) {
                var o = "inside" === this._showCount,
                    r = o ? i : e("<div>").addClass(this.shareCountBoxClass).appendTo(n);
                r.addClass(o ? this.shareLinkCountClass : this.shareCountBoxClass), this._renderShareCount(t, r)
            }
            return n
        },
        _createShareLink: function(t) {
            var n = this._getShareStrategy(t).call(t, {
                shareUrl: this._getShareUrl(t)
            });
            return n.addClass(this.shareLinkClass).append(this._createShareLogo(t)), this._showLabel && n.append(this._createShareLabel(t)), e.each(this.on || {}, function(i, o) {
                e.isFunction(o) && n.on(i, e.proxy(o, t))
            }), n
        },
        _getShareStrategy: function(t) {
            var e = c[t.shareIn || this.shareIn];
            if (!e) throw Error("Share strategy '" + this.shareIn + "' not found");
            return e
        },
        _getShareUrl: function(t) {
            var e = r(t.shareUrl, t);
            return this._formatShareUrl(e, t)
        },
        _createShareLogo: function(t) {
            var n = t.logo,
                i = s.test(n) ? e("<img>").attr("src", t.logo) : e("<i>").addClass(n);
            return i.addClass(this.shareLogoClass), i
        },
        _createShareLabel: function(t) {
            return e("<span>").addClass(this.shareLabelClass).text(t.label)
        },
        _renderShareCount: function(t, n) {
            var i = e("<span>").addClass(this.shareCountClass);
            n.addClass(this.shareZeroCountClass).append(i), this._loadCount(t).done(e.proxy(function(t) {
                t && (n.removeClass(this.shareZeroCountClass), i.text(t))
            }, this))
        },
        _loadCount: function(t) {
            var n = e.Deferred(),
                i = this._getCountUrl(t);
            if (!i) return n.resolve(0).promise();
            var o = e.proxy(function(e) {
                n.resolve(this._getCountValue(e, t))
            }, this);
            return e.getJSON(i).done(o).fail(function() {
                e.get(i).done(o).fail(function() {
                    n.resolve(0)
                })
            }), n.promise()
        },
        _getCountUrl: function(t) {
            var e = r(t.countUrl, t);
            return this._formatShareUrl(e, t)
        },
        _getCountValue: function(t, n) {
            var i = (e.isFunction(n.getCount) ? n.getCount(t) : t) || 0;
            return "string" == typeof i ? i : this._formatNumber(i)
        },
        _formatNumber: function(t) {
            return e.each(l, function(e, n) {
                return t >= n ? (t = parseFloat((t / n).toFixed(2)) + e, !1) : void 0
            }), t
        },
        _formatShareUrl: function(e, n) {
            return e.replace(a, function(e, i, o) {
                var r = n[o] || "";
                return r ? (i || "") + t.encodeURIComponent(r) : ""
            })
        },
        _clear: function() {
            t.clearTimeout(this._resizeTimer), this._$element.empty()
        },
        _passOptionToShares: function(t, n) {
            var i = this.shares;
            e.each(["url", "text"], function(o, r) {
                r === t && e.each(i, function(e, i) {
                    i[t] = n
                })
            })
        },
        _normalizeShare: function(t) {
            return e.isNumeric(t) ? this.shares[t] : "string" == typeof t ? e.grep(this.shares, function(e) {
                return e.share === t
            })[0] : t
        },
        refresh: function() {
            this._render()
        },
        destroy: function() {
            this._clear(), this._detachWindowResizeCallback(), this._$element.removeClass(this.elementClass).removeData(o)
        },
        option: function(t, e) {
            return 1 === arguments.length ? this[t] : (this[t] = e, this._passOptionToShares(t, e), void this.refresh())
        },
        shareOption: function(t, e, n) {
            return t = this._normalizeShare(t), 2 === arguments.length ? t[e] : (t[e] = n, void this.refresh())
        }
    }, e.fn.jsSocials = function(t) {
        var n = e.makeArray(arguments).slice(1),
            r = this;
        return this.each(function() {
            var s, a = e(this),
                l = a.data(o);
            if (l)
                if ("string" == typeof t) {
                    if (void 0 !== (s = l[t].apply(l, n)) && s !== l) return r = s, !1
                } else l._detachWindowResizeCallback(), l._init(t), l._render();
            else new i(a, t)
        }), r
    };
    var c = {
        popup: function(n) {
            return e("<a>").attr("href", "#").on("click", function() {
                return t.open(n.shareUrl, null, "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"), !1
            })
        },
        blank: function(t) {
            return e("<a>").attr({
                target: "_blank",
                href: t.shareUrl
            })
        },
        self: function(t) {
            return e("<a>").attr({
                target: "_self",
                href: t.shareUrl
            })
        }
    };
    t.jsSocials = {
        Socials: i,
        shares: u,
        shareStrategies: c,
        setDefaults: function(t) {
            var n;
            e.isPlainObject(t) ? n = i.prototype : (n = u[t], t = arguments[1] || {}), e.extend(n, t)
        }
    }
}(window, jQuery),
function(t, e, n) {
    e.extend(n.shares, {
        email: {
            label: "E-mail",
            logo: "fa fa-at",
            shareUrl: "mailto:{to}?subject={text}&body={url}",
            countUrl: "",
            shareIn: "self"
        },
        twitter: {
            label: "Tweet",
            logo: "fa fa-twitter",
            shareUrl: "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
            countUrl: ""
        },
        facebook: {
            label: "Like",
            logo: "fa fa-facebook",
            shareUrl: "https://facebook.com/sharer/sharer.php?u={url}",
            countUrl: "https://graph.facebook.com/?id={url}",
            getCount: function(t) {
                return t.share && t.share.share_count || 0
            }
        },
        vkontakte: {
            label: "Like",
            logo: "fa fa-vk",
            shareUrl: "https://vk.com/share.php?url={url}&title={title}&description={text}",
            countUrl: "https://vk.com/share.php?act=count&index=1&url={url}",
            getCount: function(t) {
                return parseInt(t.slice(15, -2).split(", ")[1])
            }
        },
        googleplus: {
            label: "+1",
            logo: "fa fa-google",
            shareUrl: "https://plus.google.com/share?url={url}",
            countUrl: ""
        },
        linkedin: {
            label: "Share",
            logo: "fa fa-linkedin",
            shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}",
            countUrl: "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
            getCount: function(t) {
                return t.count
            }
        },
        pinterest: {
            label: "Pin it",
            logo: "fa fa-pinterest",
            shareUrl: "https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",
            countUrl: "https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",
            getCount: function(t) {
                return t.count
            }
        },
        stumbleupon: {
            label: "Share",
            logo: "fa fa-stumbleupon",
            shareUrl: "http://www.stumbleupon.com/submit?url={url}&title={title}",
            countUrl: "https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",
            getCount: function(t) {
                return t.result.views
            }
        },
        telegram: {
            label: "Telegram",
            logo: "fa fa-paper-plane",
            shareUrl: "tg://msg?text={url} {text}",
            countUrl: "",
            shareIn: "self"
        },
        whatsapp: {
            label: "WhatsApp",
            logo: "fa fa-whatsapp",
            shareUrl: "whatsapp://send?text={url} {text}",
            countUrl: "",
            shareIn: "self"
        },
        line: {
            label: "LINE",
            logo: "fa fa-comment",
            shareUrl: "http://line.me/R/msg/text/?{text} {url}",
            countUrl: ""
        },
        viber: {
            label: "Viber",
            logo: "fa fa-volume-control-phone",
            shareUrl: "viber://forward?text={url} {text}",
            countUrl: "",
            shareIn: "self"
        },
        pocket: {
            label: "Pocket",
            logo: "fa fa-get-pocket",
            shareUrl: "https://getpocket.com/save?url={url}&title={title}",
            countUrl: ""
        },
        messenger: {
            label: "Share",
            logo: "fa fa-commenting",
            shareUrl: "fb-messenger://share?link={url}",
            countUrl: "",
            shareIn: "self"
        }
    })
}(window, jQuery, window.jsSocials),
function(t, e) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], e);
    else if ("undefined" != typeof exports) e(module, exports);
    else {
        var n = {
            exports: {}
        };
        e(n, n.exports), t.WOW = n.exports
    }
}(this, function(t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        return e.indexOf(t) >= 0
    }

    function o(t, e, n) {
        null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
    }

    function r(t, e, n) {
        null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s, a, l = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        u = window.WeakMap || window.MozWeakMap || function() {
            function t() {
                n(this, t), this.keys = [], this.values = []
            }
            return l(t, [{
                key: "get",
                value: function(t) {
                    for (var e = 0; e < this.keys.length; e++) {
                        if (this.keys[e] === t) return this.values[e]
                    }
                }
            }, {
                key: "set",
                value: function(t, e) {
                    for (var n = 0; n < this.keys.length; n++) {
                        if (this.keys[n] === t) return this.values[n] = e, this
                    }
                    return this.keys.push(t), this.values.push(e), this
                }
            }]), t
        }(),
        c = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (a = s = function() {
            function t() {
                n(this, t), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
            }
            return l(t, [{
                key: "observe",
                value: function() {}
            }]), t
        }(), s.notSupported = !0, a),
        h = window.getComputedStyle || function(t) {
            var e = /(\-([a-z]){1})/g;
            return {
                getPropertyValue: function(n) {
                    "float" === n && (n = "styleFloat"), e.test(n) && n.replace(e, function(t, e) {
                        return e.toUpperCase()
                    });
                    var i = t.currentStyle;
                    return (null != i ? i[n] : void 0) || null
                }
            }
        },
        f = function() {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                n(this, t), this.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null,
                    resetAnimation: !0
                }, this.animate = "requestAnimationFrame" in window ? function(t) {
                    return window.requestAnimationFrame(t)
                } : function(t) {
                    return t()
                }, this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = function(t, e) {
                    for (var n in e)
                        if (null == t[n]) {
                            var i = e[n];
                            t[n] = i
                        }
                    return t
                }(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new u, this.wowEvent = function(t) {
                    var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
                        n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
                        i = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
                        o = void 0;
                    return null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
                }(this.config.boxClass)
            }
            return l(t, [{
                key: "init",
                value: function() {
                    this.element = window.document.documentElement, i(document.readyState, ["interactive", "complete"]) ? this.start() : o(document, "DOMContentLoaded", this.start), this.finished = []
                }
            }, {
                key: "start",
                value: function() {
                    var t = this;
                    if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
                        if (this.disabled()) this.resetStyle();
                        else
                            for (var e = 0; e < this.boxes.length; e++) {
                                var n = this.boxes[e];
                                this.applyStyle(n, !0)
                            }
                        if (this.disabled() || (o(this.config.scrollContainer || window, "scroll", this.scrollHandler), o(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
                            new c(function(e) {
                                for (var n = 0; n < e.length; n++)
                                    for (var i = e[n], o = 0; o < i.addedNodes.length; o++) {
                                        var r = i.addedNodes[o];
                                        t.doSync(r)
                                    }
                            }).observe(document.body, {
                                childList: !0,
                                subtree: !0
                            })
                        }
                }
            }, {
                key: "stop",
                value: function() {
                    this.stopped = !0, r(this.config.scrollContainer || window, "scroll", this.scrollHandler), r(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval)
                }
            }, {
                key: "sync",
                value: function() {
                    c.notSupported && this.doSync(this.element)
                }
            }, {
                key: "doSync",
                value: function(t) {
                    if (void 0 !== t && null !== t || (t = this.element), 1 === t.nodeType)
                        for (var e = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass), n = 0; n < e.length; n++) {
                            var o = e[n];
                            i(o, this.all) || (this.boxes.push(o), this.all.push(o), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(o, !0), this.scrolled = !0)
                        }
                }
            }, {
                key: "show",
                value: function(t) {
                    return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t),
                        function(t, e) {
                            null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) && t["on" + e]()
                        }(t, this.wowEvent), this.config.resetAnimation && (o(t, "animationend", this.resetAnimation), o(t, "oanimationend", this.resetAnimation), o(t, "webkitAnimationEnd", this.resetAnimation), o(t, "MSAnimationEnd", this.resetAnimation)), t
                }
            }, {
                key: "applyStyle",
                value: function(t, e) {
                    var n = this,
                        i = t.getAttribute("data-wow-duration"),
                        o = t.getAttribute("data-wow-delay"),
                        r = t.getAttribute("data-wow-iteration");
                    return this.animate(function() {
                        return n.customStyle(t, e, i, o, r)
                    })
                }
            }, {
                key: "resetStyle",
                value: function() {
                    for (var t = 0; t < this.boxes.length; t++) {
                        this.boxes[t].style.visibility = "visible"
                    }
                }
            }, {
                key: "resetAnimation",
                value: function(t) {
                    if (t.type.toLowerCase().indexOf("animationend") >= 0) {
                        var e = t.target || t.srcElement;
                        e.className = e.className.replace(this.config.animateClass, "").trim()
                    }
                }
            }, {
                key: "customStyle",
                value: function(t, e, n, i, o) {
                    return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
                        animationDuration: n
                    }), i && this.vendorSet(t.style, {
                        animationDelay: i
                    }), o && this.vendorSet(t.style, {
                        animationIterationCount: o
                    }), this.vendorSet(t.style, {
                        animationName: e ? "none" : this.cachedAnimationName(t)
                    }), t
                }
            }, {
                key: "vendorSet",
                value: function(t, e) {
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var i = e[n];
                            t["" + n] = i;
                            for (var o = 0; o < this.vendors.length; o++) {
                                t["" + this.vendors[o] + n.charAt(0).toUpperCase() + n.substr(1)] = i
                            }
                        }
                }
            }, {
                key: "vendorCSS",
                value: function(t, e) {
                    for (var n = h(t), i = n.getPropertyCSSValue(e), o = 0; o < this.vendors.length; o++) {
                        var r = this.vendors[o];
                        i = i || n.getPropertyCSSValue("-" + r + "-" + e)
                    }
                    return i
                }
            }, {
                key: "animationName",
                value: function(t) {
                    var e = void 0;
                    try {
                        e = this.vendorCSS(t, "animation-name").cssText
                    } catch (n) {
                        e = h(t).getPropertyValue("animation-name")
                    }
                    return "none" === e ? "" : e
                }
            }, {
                key: "cacheAnimationName",
                value: function(t) {
                    return this.animationNameCache.set(t, this.animationName(t))
                }
            }, {
                key: "cachedAnimationName",
                value: function(t) {
                    return this.animationNameCache.get(t)
                }
            }, {
                key: "scrollHandler",
                value: function() {
                    this.scrolled = !0
                }
            }, {
                key: "scrollCallback",
                value: function() {
                    if (this.scrolled) {
                        this.scrolled = !1;
                        for (var t = [], e = 0; e < this.boxes.length; e++) {
                            var n = this.boxes[e];
                            if (n) {
                                if (this.isVisible(n)) {
                                    this.show(n);
                                    continue
                                }
                                t.push(n)
                            }
                        }
                        this.boxes = t, this.boxes.length || this.config.live || this.stop()
                    }
                }
            }, {
                key: "offsetTop",
                value: function(t) {
                    for (; void 0 === t.offsetTop;) t = t.parentNode;
                    for (var e = t.offsetTop; t.offsetParent;) t = t.offsetParent, e += t.offsetTop;
                    return e
                }
            }, {
                key: "isVisible",
                value: function(t) {
                    var e = t.getAttribute("data-wow-offset") || this.config.offset,
                        n = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                        i = n + Math.min(this.element.clientHeight, "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight) - e,
                        o = this.offsetTop(t),
                        r = o + t.clientHeight;
                    return i >= o && r >= n
                }
            }, {
                key: "disabled",
                value: function() {
                    return !this.config.mobile && function(t) {
                        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
                    }(navigator.userAgent)
                }
            }]), t
        }();
    e.default = f, t.exports = e.default
});