function setCookie(a, b, c) { "use strict";
    c = c || {}; var d = c.expires; if ("number" == typeof d && d) { var e = new Date;
        e.setTime(e.getTime() + 1e3 * d), d = c.expires = e } d && d.toUTCString && (c.expires = d.toUTCString()), b = encodeURIComponent(b); var f = a + "=" + b; for (var g in c) { f += "; " + g; var h = c[g];
        h !== !0 && (f += "=" + h) } document.cookie = f }

function getCookie(a) { "use strict"; var b = document.cookie.match(new RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")); return b ? decodeURIComponent(b[1]) : void 0 }

function compareNumbers(a, b, c) { b = b || "==", c = c || 0; var d = a[0] < a[1] - c,
        e = a[0] > a[1] + c,
        f = !d && !e; return "<" == b && d || ">" == b && e || "==" == b && f || "!=" == b && !f }

function addTitleFromContents(a) { "use strict";
    a = $.extend({ items: [] }, a), $.each(a.items, function(a, b) { $(b).not("[title]").each(function() { var a = $(this),
                b = "";
            b = a.is("img[alt]") ? $.trim(a.attr("alt")) : $.trim(a.text()) || $.trim($("img[alt]:first", a).attr("alt")) || "", b && a.attr("title", b) }) }) }

function convertTextToHtmlSpecialChars(a) { "use strict"; return $("<s/>").text(a || "").html() }

function getFormParams(a) { "use strict"; var b = {}; return $("input, select, textarea", $(a)).filter(function() { var a = $(this); return a.is("[name]:enabled") && (a.is(':not([type="checkbox"])') || a.is('[type="checkbox"]:checked')) }).each(function() { var a = $(this),
            c = a.attr("name"),
            d = a.val(); "" !== d && (c.match(/\[\]$/) ? (b[c] || (b[c] = []), b[c].push(d)) : b[c] = d) }), b }


function addSearchAutocomplete(a) { "use strict";
    a = a || {};
    $(document.documentElement);
    $(a.scope).each(function() { var b = $(this),
            c = b.is("form") ? b : $("form", b),
            d = $('input[name="keywords"]', c),
            e = $('input[type="submit"]', c);
        d.devbridgeAutocomplete({ serviceUrl: "/common/ajax/search-autocomplete.html", params: { limit: 8 }, deferRequestBy: 100, minChars: 2, triggerSelectOnValidInput: !1, preventBadQueries: !1, appendTo: a.appendTo ? $(a.appendTo, b) : d.parent(), onSelect: function() { setTimeout(function() { e.click() }, 100) } }) }) }

function addGoogleAnalyticsEvent(a) { "use strict";
    a = a || {}, window.ga && window._googleAnalytics && $.each(window._googleAnalytics.trackers, function() { ga(this.get("name") + ".send", "event", a.category, a.action, a.label) }) }

function isExtraSmallScreen() { "use strict"; return "matchMedia" in window && window.matchMedia("(max-width: 767px)").matches }

function isTouchDevice() { "use strict"; return "ontouchstart" in window }
if (! function(a, b) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
        "use strict";

        function c(a, b) { b = b || _; var c = b.createElement("script");
            c.text = a, b.head.appendChild(c).parentNode.removeChild(c) }

        function d(a) { var b = !!a && "length" in a && a.length,
                c = ma.type(a); return "function" !== c && !ma.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a) }

        function e(a, b, c) { if (ma.isFunction(b)) return ma.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return ma.grep(a, function(a) { return a === b !== c }); if ("string" == typeof b) { if (wa.test(b)) return ma.filter(b, a, c);
                b = ma.filter(b, a) } return ma.grep(a, function(a) { return ea.call(b, a) > -1 !== c && 1 === a.nodeType }) }

        function f(a, b) { for (;
                (a = a[b]) && 1 !== a.nodeType;); return a }

        function g(a) { var b = {}; return ma.each(a.match(Ca) || [], function(a, c) { b[c] = !0 }), b }

        function h(a) { return a }

        function i(a) { throw a }

        function j(a, b, c) { var d; try { a && ma.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && ma.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a) } catch (a) { c.call(void 0, a) } }

        function k() { _.removeEventListener("DOMContentLoaded", k), a.removeEventListener("load", k), ma.ready() }

        function l() { this.expando = ma.expando + l.uid++ }

        function m(a, b, c) { var d; if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(Ka, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : Ja.test(c) ? JSON.parse(c) : c) } catch (e) {} Ia.set(a, b, c) } else c = void 0; return c }

        function n(a, b, c, d) { var e, f = 1,
                g = 20,
                h = d ? function() { return d.cur() } : function() { return ma.css(a, b, "") },
                i = h(),
                j = c && c[3] || (ma.cssNumber[b] ? "" : "px"),
                k = (ma.cssNumber[b] || "px" !== j && +i) && Ma.exec(ma.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1;
                do f = f || ".5", k /= f, ma.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e }

        function o(a) { var b, c = a.ownerDocument,
                d = a.nodeName,
                e = Qa[d]; return e ? e : (b = c.body.appendChild(c.createElement(d)), e = ma.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), Qa[d] = e, e) }

        function p(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = Ha.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && Oa(d) && (e[f] = o(d))) : "none" !== c && (e[f] = "none", Ha.set(d, "display", c))); for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]); return a }

        function q(a, b) { var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && ma.nodeName(a, b) ? ma.merge([a], c) : c }

        function r(a, b) { for (var c = 0, d = a.length; c < d; c++) Ha.set(a[c], "globalEval", !b || Ha.get(b[c], "globalEval")) }

        function s(a, b, c, d, e) { for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
                if (f = a[n], f || 0 === f)
                    if ("object" === ma.type(f)) ma.merge(m, f.nodeType ? [f] : f);
                    else if (Va.test(f)) { for (g = g || l.appendChild(b.createElement("div")), h = (Sa.exec(f) || ["", ""])[1].toLowerCase(), i = Ua[h] || Ua._default, g.innerHTML = i[1] + ma.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
                ma.merge(m, g.childNodes), g = l.firstChild, g.textContent = "" } else m.push(b.createTextNode(f)); for (l.textContent = "", n = 0; f = m[n++];)
                if (d && ma.inArray(f, d) > -1) e && e.push(f);
                else if (j = ma.contains(f.ownerDocument, f), g = q(l.appendChild(f), "script"), j && r(g), c)
                for (k = 0; f = g[k++];) Ta.test(f.type || "") && c.push(f); return l }

        function t() { return !0 }

        function u() { return !1 }

        function v() { try { return _.activeElement } catch (a) {} }

        function w(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) w(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = u;
            else if (!e) return a; return 1 === f && (g = e, e = function(a) { return ma().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = ma.guid++)), a.each(function() { ma.event.add(this, b, e, d, c) }) }

        function x(a, b) { return ma.nodeName(a, "table") && ma.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a }

        function y(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

        function z(a) { var b = bb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

        function A(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (Ha.hasData(a) && (f = Ha.access(a), g = Ha.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j)
                        for (c = 0, d = j[e].length; c < d; c++) ma.event.add(b, e, j[e][c]) } Ia.hasData(a) && (h = Ia.access(a), i = ma.extend({}, h), Ia.set(b, i)) } }

        function B(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && Ra.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) }

        function C(a, b, d, e) { b = ca.apply([], b); var f, g, h, i, j, k, l = 0,
                m = a.length,
                n = m - 1,
                o = b[0],
                p = ma.isFunction(o); if (p || m > 1 && "string" == typeof o && !ka.checkClone && ab.test(o)) return a.each(function(c) { var f = a.eq(c);
                p && (b[0] = o.call(this, c, f.html())), C(f, b, d, e) }); if (m && (f = s(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) { for (h = ma.map(q(f, "script"), y), i = h.length; l < m; l++) j = f, l !== n && (j = ma.clone(j, !0, !0), i && ma.merge(h, q(j, "script"))), d.call(a[l], j, l); if (i)
                    for (k = h[h.length - 1].ownerDocument, ma.map(h, z), l = 0; l < i; l++) j = h[l], Ta.test(j.type || "") && !Ha.access(j, "globalEval") && ma.contains(k, j) && (j.src ? ma._evalUrl && ma._evalUrl(j.src) : c(j.textContent.replace(cb, ""), k)) } return a }

        function D(a, b, c) { for (var d, e = b ? ma.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || ma.cleanData(q(d)), d.parentNode && (c && ma.contains(d.ownerDocument, d) && r(q(d, "script")), d.parentNode.removeChild(d)); return a }

        function E(a, b, c) { var d, e, f, g, h = a.style; return c = c || fb(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || ma.contains(a.ownerDocument, a) || (g = ma.style(a, b)), !ka.pixelMarginRight() && eb.test(g) && db.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g }

        function F(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }

        function G(a) { if (a in kb) return a; for (var b = a[0].toUpperCase() + a.slice(1), c = jb.length; c--;)
                if (a = jb[c] + b, a in kb) return a }

        function H(a, b, c) { var d = Ma.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b }

        function I(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += ma.css(a, c + Na[f], !0, e)), d ? ("content" === c && (g -= ma.css(a, "padding" + Na[f], !0, e)), "margin" !== c && (g -= ma.css(a, "border" + Na[f] + "Width", !0, e))) : (g += ma.css(a, "padding" + Na[f], !0, e), "padding" !== c && (g += ma.css(a, "border" + Na[f] + "Width", !0, e))); return g }

        function J(a, b, c) { var d, e = !0,
                f = fb(a),
                g = "border-box" === ma.css(a, "boxSizing", !1, f); if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) { if (d = E(a, b, f), (d < 0 || null == d) && (d = a.style[b]), eb.test(d)) return d;
                e = g && (ka.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0 } return d + I(a, b, c || (g ? "border" : "content"), e, f) + "px" }

        function K(a, b, c, d, e) { return new K.prototype.init(a, b, c, d, e) }

        function L() { mb && (a.requestAnimationFrame(L), ma.fx.tick()) }

        function M() { return a.setTimeout(function() { lb = void 0 }), lb = ma.now() }

        function N(a, b) { var c, d = 0,
                e = { height: a }; for (b = b ? 1 : 0; d < 4; d += 2 - b) c = Na[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e }

        function O(a, b, c) { for (var d, e = (R.tweeners[b] || []).concat(R.tweeners["*"]), f = 0, g = e.length; f < g; f++)
                if (d = e[f].call(c, b, a)) return d }

        function P(a, b, c) { var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
                m = this,
                n = {},
                o = a.style,
                q = a.nodeType && Oa(a),
                r = Ha.get(a, "fxshow");
            c.queue || (g = ma._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() { g.unqueued || h() }), g.unqueued++, m.always(function() { m.always(function() { g.unqueued--, ma.queue(a, "fx").length || g.empty.fire() }) })); for (d in b)
                if (e = b[d], nb.test(e)) { if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) { if ("show" !== e || !r || void 0 === r[d]) continue;
                        q = !0 } n[d] = r && r[d] || ma.style(a, d) } if (i = !ma.isEmptyObject(b), i || !ma.isEmptyObject(n)) { l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = r && r.display, null == j && (j = Ha.get(a, "display")), k = ma.css(a, "display"), "none" === k && (j ? k = j : (p([a], !0), j = a.style.display || j, k = ma.css(a, "display"), p([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === ma.css(a, "float") && (i || (m.done(function() { o.display = j }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })), i = !1; for (d in n) i || (r ? "hidden" in r && (q = r.hidden) : r = Ha.access(a, "fxshow", { display: j }), f && (r.hidden = !q), q && p([a], !0), m.done(function() { q || p([a]), Ha.remove(a, "fxshow"); for (d in n) ma.style(a, d, n[d]) })), i = O(q ? r[d] : 0, d, m), d in r || (r[d] = i.start, q && (i.end = i.start, i.start = 0)) } }

        function Q(a, b) { var c, d, e, f, g; for (c in a)
                if (d = ma.camelCase(c), e = b[d], f = a[c], ma.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ma.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e }

        function R(a, b, c) { var d, e, f = 0,
                g = R.prefilters.length,
                h = ma.Deferred().always(function() { delete i.elem }),
                i = function() { if (e) return !1; for (var b = lb || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1) },
                j = h.promise({ elem: a, props: ma.extend({}, b), opts: ma.extend(!0, { specialEasing: {}, easing: ma.easing._default }, c), originalProperties: b, originalOptions: c, startTime: lb || M(), duration: c.duration, tweens: [], createTween: function(b, c) { var d = ma.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function(b) { var c = 0,
                            d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; c < d; c++) j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }),
                k = j.props; for (Q(k, j.opts.specialEasing); f < g; f++)
                if (d = R.prefilters[f].call(j, a, k, j.opts)) return ma.isFunction(d.stop) && (ma._queueHooks(j.elem, j.opts.queue).stop = ma.proxy(d.stop, d)), d; return ma.map(k, O, j), ma.isFunction(j.opts.start) && j.opts.start.call(a, j), ma.fx.timer(ma.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }

        function S(a) { return a.getAttribute && a.getAttribute("class") || "" }

        function T(a, b, c, d) { var e; if (ma.isArray(b)) ma.each(b, function(b, e) { c || Ab.test(a) ? d(a, e) : T(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
            else if (c || "object" !== ma.type(b)) d(a, b);
            else
                for (e in b) T(a + "[" + e + "]", b[e], c, d) }

        function U(a) { return function(b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0,
                    f = b.toLowerCase().match(Ca) || []; if (ma.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } }

        function V(a, b, c, d) {
            function e(h) { var i; return f[h] = !0, ma.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1) }), i } var f = {},
                g = a === Mb; return e(b.dataTypes[0]) || !f["*"] && e("*") }

        function W(a, b) { var c, d, e = ma.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && ma.extend(!0, a, d), a }

        function X(a, b, c) { for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) { i.unshift(e); break } if (i[0] in c) f = i[0];
            else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break } g || (g = e) } f = f || g } if (f) return f !== i[0] && i.unshift(f), c[f] }

        function Y(a, b, c, d) { var e, f, g, h, i, j = {},
                k = a.dataTypes.slice(); if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } }

        function Z(a) { return ma.isWindow(a) ? a : 9 === a.nodeType && a.defaultView }
        var $ = [],
            _ = a.document,
            aa = Object.getPrototypeOf,
            ba = $.slice,
            ca = $.concat,
            da = $.push,
            ea = $.indexOf,
            fa = {},
            ga = fa.toString,
            ha = fa.hasOwnProperty,
            ia = ha.toString,
            ja = ia.call(Object),
            ka = {},
            la = "3.1.0",
            ma = function(a, b) { return new ma.fn.init(a, b) },
            na = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            oa = /^-ms-/,
            pa = /-([a-z])/g,
            qa = function(a, b) { return b.toUpperCase() };
        ma.fn = ma.prototype = { jquery: la, constructor: ma, length: 0, toArray: function() { return ba.call(this) }, get: function(a) { return null != a ? a < 0 ? this[a + this.length] : this[a] : ba.call(this) }, pushStack: function(a) { var b = ma.merge(this.constructor(), a); return b.prevObject = this, b }, each: function(a) { return ma.each(this, a) }, map: function(a) { return this.pushStack(ma.map(this, function(b, c) { return a.call(b, c, b) })) }, slice: function() { return this.pushStack(ba.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(a) { var b = this.length,
                    c = +a + (a < 0 ? b : 0); return this.pushStack(c >= 0 && c < b ? [this[c]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: da, sort: $.sort, splice: $.splice }, ma.extend = ma.fn.extend = function() { var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ma.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (ma.isPlainObject(d) || (e = ma.isArray(d))) ? (e ? (e = !1, f = c && ma.isArray(c) ? c : []) : f = c && ma.isPlainObject(c) ? c : {}, g[b] = ma.extend(j, f, d)) : void 0 !== d && (g[b] = d)); return g }, ma.extend({ expando: "jQuery" + (la + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) { throw new Error(a) }, noop: function() {}, isFunction: function(a) { return "function" === ma.type(a) }, isArray: Array.isArray, isWindow: function(a) { return null != a && a === a.window }, isNumeric: function(a) { var b = ma.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) }, isPlainObject: function(a) { var b, c; return !(!a || "[object Object]" !== ga.call(a) || (b = aa(a)) && (c = ha.call(b, "constructor") && b.constructor, "function" != typeof c || ia.call(c) !== ja)) }, isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 }, type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? fa[ga.call(a)] || "object" : typeof a }, globalEval: function(a) { c(a) }, camelCase: function(a) { return a.replace(oa, "ms-").replace(pa, qa) }, nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, b) { var c, e = 0; if (d(a))
                    for (c = a.length; e < c && b.call(a[e], e, a[e]) !== !1; e++);
                else
                    for (e in a)
                        if (b.call(a[e], e, a[e]) === !1) break; return a }, trim: function(a) { return null == a ? "" : (a + "").replace(na, "") }, makeArray: function(a, b) { var c = b || []; return null != a && (d(Object(a)) ? ma.merge(c, "string" == typeof a ? [a] : a) : da.call(c, a)), c }, inArray: function(a, b, c) { return null == b ? -1 : ea.call(b, a, c) }, merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d]; return a.length = e, a }, grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function(a, b, c) { var e, f, g = 0,
                    h = []; if (d(a))
                    for (e = a.length; g < e; g++) f = b(a[g], g, c), null != f && h.push(f);
                else
                    for (g in a) f = b(a[g], g, c), null != f && h.push(f); return ca.apply([], h) }, guid: 1, proxy: function(a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), ma.isFunction(a)) return d = ba.call(arguments, 2), e = function() { return a.apply(b || this, d.concat(ba.call(arguments))) }, e.guid = a.guid = a.guid || ma.guid++, e }, now: Date.now, support: ka }), "function" == typeof Symbol && (ma.fn[Symbol.iterator] = $[Symbol.iterator]), ma.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { fa["[object " + b + "]"] = b.toLowerCase() });
        var ra = function(a) {
            function b(a, b, c, d) { var e, f, g, h, i, j, k, m = b && b.ownerDocument,
                    o = b ? b.nodeType : 9; if (c = c || [], "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o) return c; if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) { if (11 !== o && (i = ra.exec(a)))
                        if (e = i[1]) { if (9 === o) { if (!(g = b.getElementById(e))) return c; if (g.id === e) return c.push(g), c } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), c } else { if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c; if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c } if (w.qsa && !U[a + " "] && (!K || !K.test(a))) { if (1 !== o) m = b, k = a;
                        else if ("object" !== b.nodeName.toLowerCase()) { for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O), j = A(a), f = j.length; f--;) j[f] = "#" + h + " " + n(j[f]);
                            k = j.join(","), m = sa.test(a) && l(b.parentNode) || b } if (k) try { return $.apply(c, m.querySelectorAll(k)), c } catch (p) {} finally { h === O && b.removeAttribute("id") } } } return C(a.replace(ha, "$1"), b, c, d) }

            function c() {
                function a(c, d) { return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = d } var b = []; return a }

            function d(a) { return a[O] = !0, a }

            function e(a) { var b = H.createElement("fieldset"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

            function f(a, b) { for (var c = a.split("|"), d = c.length; d--;) x.attrHandle[c[d]] = b }

            function g(a, b) { var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex; if (d) return d; if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1; return a ? 1 : -1 }

            function h(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

            function i(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

            function j(a) { return function(b) { return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ya(b)) !== a) } }

            function k(a) { return d(function(b) { return b = +b, d(function(c, d) { for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

            function l(a) { return a && "undefined" != typeof a.getElementsByTagName && a }

            function m() {}

            function n(a) { for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value; return d }

            function o(a, b, c) { var d = b.dir,
                    e = b.next,
                    f = e || d,
                    g = c && "parentNode" === f,
                    h = R++; return b.first ? function(b, c, e) { for (; b = b[d];)
                        if (1 === b.nodeType || g) return a(b, c, e) } : function(b, c, i) { var j, k, l, m = [Q, h]; if (i) { for (; b = b[d];)
                            if ((1 === b.nodeType || g) && a(b, c, i)) return !0 } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || g)
                                if (l = b[O] || (b[O] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                                else { if ((j = k[f]) && j[0] === Q && j[1] === h) return m[2] = j[2]; if (k[f] = m, m[2] = a(b, c, i)) return !0 } } }

            function p(a) { return a.length > 1 ? function(b, c, d) { for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1; return !0 } : a[0] }

            function q(a, c, d) { for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d); return d }

            function r(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

            function s(a, b, c, e, f, g) { return e && !e[O] && (e = s(e)), f && !f[O] && (f = s(f, g)), d(function(d, g, h, i) { var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = d || q(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? p : r(p, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s; if (c && c(s, t, h, i), e)
                        for (j = r(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l)); if (d) { if (f || a) { if (f) { for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i) } for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l)) } } else t = r(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t) }) }

            function t(a) { for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function(a) { return a === b }, g, !0), j = o(function(a) { return aa(b, a) > -1 }, g, !0), k = [function(a, c, d) { var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d)); return b = null, e }]; h < e; h++)
                    if (c = x.relative[a[h].type]) k = [o(p(k), c)];
                    else { if (c = x.filter[a[h].type].apply(null, a[h].matches), c[O]) { for (d = ++h; d < e && !x.relative[a[d].type]; d++); return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({ value: " " === a[h - 2].type ? "*" : "" })).replace(ha, "$1"), c, h < d && t(a.slice(h, d)), d < e && t(a = a.slice(d)), d < e && n(a)) } k.push(c) } return p(k) }

            function u(a, c) { var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) { var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            q = [],
                            s = D,
                            t = d || f && x.find.TAG("*", j),
                            u = Q += null == s ? 1 : Math.random() || .1,
                            v = t.length; for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) { if (f && k) { for (l = 0, g || k.ownerDocument === H || (G(k), h = !J); m = a[l++];)
                                    if (m(k, g || H, h)) { i.push(k); break } j && (Q = u) } e && ((k = !m && k) && n--, d && p.push(k)) } if (n += o, e && o !== n) { for (l = 0; m = c[l++];) m(p, q, g, h); if (d) { if (n > 0)
                                    for (; o--;) p[o] || q[o] || (q[o] = Y.call(i));
                                q = r(q) } $.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i) } return j && (Q = u, D = s), p }; return e ? d(g) : g }
            var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date,
                P = a.document,
                Q = 0,
                R = 0,
                S = c(),
                T = c(),
                U = c(),
                V = function(a, b) { return a === b && (F = !0), 0 },
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function(a, b) { for (var c = 0, d = a.length; c < d; c++)
                        if (a[c] === b) return c; return -1 },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
                fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
                ga = new RegExp(ca + "+", "g"),
                ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ia = new RegExp("^" + ca + "*," + ca + "*"),
                ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                la = new RegExp(fa),
                ma = new RegExp("^" + da + "$"),
                na = { ID: new RegExp("^#(" + da + ")"), CLASS: new RegExp("^\\.(" + da + ")"), TAG: new RegExp("^(" + da + "|[*])"), ATTR: new RegExp("^" + ea), PSEUDO: new RegExp("^" + fa), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"), bool: new RegExp("^(?:" + ba + ")$", "i"), needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i") },
                oa = /^(?:input|select|textarea|button)$/i,
                pa = /^h\d$/i,
                qa = /^[^{]+\{\s*\[native \w/,
                ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                sa = /[+~]/,
                ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                ua = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
                va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                wa = function(a, b) { return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a },
                xa = function() { G() },
                ya = o(function(a) { return a.disabled === !0 }, { dir: "parentNode", next: "legend" });
            try { $.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType } catch (za) { $ = { apply: X.length ? function(a, b) { Z.apply(a, _.call(b)) } : function(a, b) { for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1 } } } w = b.support = {}, z = b.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, G = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : P;
                return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, J = !z(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), w.attributes = e(function(a) { return a.className = "i", !a.getAttribute("className") }), w.getElementsByTagName = e(function(a) { return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length }), w.getElementsByClassName = qa.test(H.getElementsByClassName), w.getById = e(function(a) { return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length }), w.getById ? (x.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && J) { var c = b.getElementById(a); return c ? [c] : [] } }, x.filter.ID = function(a) { var b = a.replace(ta, ua); return function(a) { return a.getAttribute("id") === b } }) : (delete x.find.ID, x.filter.ID = function(a) { var b = a.replace(ta, ua); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), x.find.TAG = w.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) { var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a); if ("*" === a) { for (; c = f[e++];) 1 === c.nodeType && d.push(c); return d } return f }, x.find.CLASS = w.getElementsByClassName && function(a, b) { if ("undefined" != typeof b.getElementsByClassName && J) return b.getElementsByClassName(a) }, L = [], K = [], (w.qsa = qa.test(H.querySelectorAll)) && (e(function(a) { I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]") }), e(function(a) { a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var b = H.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:") })), (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function(a) { w.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", fa) }), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), b = qa.test(I.compareDocumentPosition), N = b || qa.test(I.contains) ? function(a, b) { var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) { if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0; return !1 }, V = b ? function(a, b) { if (a === b) return F = !0, 0; var c = !a.compareDocumentPosition - !b.compareDocumentPosition; return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1) } : function(a, b) {
                    if (a === b) return F = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        h = [a],
                        i = [b];
                    if (!e || !f) return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
                    if (e === f) return g(a, b);
                    for (c = a; c = c.parentNode;) h.unshift(c);
                    for (c = b; c = c.parentNode;) i.unshift(c);
                    for (; h[d] === i[d];) d++;
                    return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
                }, H) : H
            }, b.matches = function(a, c) { return b(a, null, null, c) }, b.matchesSelector = function(a, c) { if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ka, "='$1']"), w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))) try { var d = M.call(a, c); if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
                return b(c, H, null, [a]).length > 0 }, b.contains = function(a, b) { return (a.ownerDocument || a) !== H && G(a), N(a, b) }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== H && G(a); var c = x.attrHandle[b.toLowerCase()],
                    d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0; return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }, b.escape = function(a) { return (a + "").replace(va, wa) }, b.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, b.uniqueSort = function(a) { var b, c = [],
                    d = 0,
                    e = 0; if (F = !w.detectDuplicates, E = !w.sortStable && a.slice(0), a.sort(V), F) { for (; b = a[e++];) b === a[e] && (d = c.push(e)); for (; d--;) a.splice(c[d], 1) } return E = null, a }, y = b.getText = function(a) { var b, c = "",
                    d = 0,
                    e = a.nodeType; if (e) { if (1 === e || 9 === e || 11 === e) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += y(a) } else if (3 === e || 4 === e) return a.nodeValue } else
                    for (; b = a[d++];) c += y(b); return c }, x = b.selectors = { cacheLength: 50, createPseudo: d, match: na, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) { return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) { var b = a.replace(ta, ua).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) { var b = S[a + " "]; return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function(a, c, d) { return function(e) { var f = b.attr(e, a); return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-")) } }, CHILD: function(a, b, c, d, e) { var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b; return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1; if (q) { if (f) { for (; p;) { for (m = b; m = m[p];)
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { for (m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                        if (1 === m.nodeType && ++t && m === b) { k[a] = [Q, n, t]; break } } else if (s && (m = b, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n), t === !1)
                                    for (;
                                        (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [Q, t]), m !== b));); return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function(a, c) { var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a); return f[O] ? f(c) : f.length > 1 ? (e = [a, a, "", c], x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) { for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g]) }) : function(a) { return f(a, 0, e) }) : f } }, pseudos: { not: d(function(a) { var b = [],
                            c = [],
                            e = B(a.replace(ha, "$1")); return e[O] ? d(function(a, b, c, d) { for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, d, f) { return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop() } }), has: d(function(a) { return function(c) { return b(a, c).length > 0 } }), contains: d(function(a) { return a = a.replace(ta, ua),
                            function(b) { return (b.textContent || b.innerText || y(b)).indexOf(a) > -1 } }), lang: d(function(a) { return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(),
                            function(b) { var c;
                                do
                                    if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function(a) { return a === I }, focus: function(a) { return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: j(!1), disabled: j(!0), checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function(a) { for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1; return !0 }, parent: function(a) { return !x.pseudos.empty(a) }, header: function(a) { return pa.test(a.nodeName) }, input: function(a) { return oa.test(a.nodeName) }, button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: k(function() { return [0] }), last: k(function(a, b) { return [b - 1] }), eq: k(function(a, b, c) { return [c < 0 ? c + b : c] }), even: k(function(a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }), odd: k(function(a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }), lt: k(function(a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d); return a }), gt: k(function(a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d); return a }) } }, x.pseudos.nth = x.pseudos.eq;
            for (v in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[v] = h(v);
            for (v in { submit: !0, reset: !0 }) x.pseudos[v] = i(v);
            return m.prototype = x.filters = x.pseudos, x.setFilters = new m, A = b.tokenize = function(a, c) { var d, e, f, g, h, i, j, k = T[a + " "]; if (k) return c ? 0 : k.slice(0); for (h = a, i = [], j = x.preFilter; h;) { d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({ value: d, type: e[0].replace(ha, " ") }), h = h.slice(d.length)); for (g in x.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({ value: d, type: g, matches: e }), h = h.slice(d.length)); if (!d) break } return c ? h.length : h ? b.error(a) : T(a, i).slice(0) }, B = b.compile = function(a, b) { var c, d = [],
                    e = [],
                    f = U[a + " "]; if (!f) { for (b || (b = A(a)), c = b.length; c--;) f = t(b[c]), f[O] ? d.push(f) : e.push(f);
                    f = U(a, u(e, d)), f.selector = a } return f }, C = b.select = function(a, b, c, d) { var e, f, g, h, i, j = "function" == typeof a && a,
                    k = !d && A(a = j.selector || a); if (c = c || [], 1 === k.length) { if (f = k[0] = k[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && w.getById && 9 === b.nodeType && J && x.relative[f[1].type]) { if (b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0], !b) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length) } for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !x.relative[h = g.type]);)
                        if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) { if (f.splice(e, 1), a = d.length && n(f), !a) return $.apply(c, d), c; break } } return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b), c }, w.sortStable = O.split("").sort(V).join("") === O, w.detectDuplicates = !!F, G(), w.sortDetached = e(function(a) { return 1 & a.compareDocumentPosition(H.createElement("fieldset")) }), e(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || f("type|href|height|width", function(a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), w.attributes && e(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || f("value", function(a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), e(function(a) { return null == a.getAttribute("disabled") }) || f(ba, function(a, b, c) { var d; if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), b
        }(a);
        ma.find = ra, ma.expr = ra.selectors, ma.expr[":"] = ma.expr.pseudos, ma.uniqueSort = ma.unique = ra.uniqueSort, ma.text = ra.getText, ma.isXMLDoc = ra.isXML, ma.contains = ra.contains, ma.escapeSelector = ra.escape;
        var sa = function(a, b, c) { for (var d = [], e = void 0 !== c;
                    (a = a[b]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) { if (e && ma(a).is(c)) break;
                        d.push(a) } return d },
            ta = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
            ua = ma.expr.match.needsContext,
            va = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            wa = /^.[^:#\[\.,]*$/;
        ma.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ma.find.matchesSelector(d, a) ? [d] : [] : ma.find.matches(a, ma.grep(b, function(a) { return 1 === a.nodeType })) }, ma.fn.extend({ find: function(a) { var b, c, d = this.length,
                    e = this; if ("string" != typeof a) return this.pushStack(ma(a).filter(function() { for (b = 0; b < d; b++)
                        if (ma.contains(e[b], this)) return !0 })); for (c = this.pushStack([]), b = 0; b < d; b++) ma.find(a, e[b], c); return d > 1 ? ma.uniqueSort(c) : c }, filter: function(a) { return this.pushStack(e(this, a || [], !1)) }, not: function(a) { return this.pushStack(e(this, a || [], !0)) }, is: function(a) { return !!e(this, "string" == typeof a && ua.test(a) ? ma(a) : a || [], !1).length } });
        var xa, ya = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            za = ma.fn.init = function(a, b, c) { var d, e; if (!a) return this; if (c = c || xa, "string" == typeof a) { if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ya.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (d[1]) { if (b = b instanceof ma ? b[0] : b, ma.merge(this, ma.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : _, !0)), va.test(d[1]) && ma.isPlainObject(b))
                            for (d in b) ma.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]); return this } return e = _.getElementById(d[2]), e && (this[0] = e, this.length = 1), this } return a.nodeType ? (this[0] = a, this.length = 1, this) : ma.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(ma) : ma.makeArray(a, this) };
        za.prototype = ma.fn, xa = ma(_);
        var Aa = /^(?:parents|prev(?:Until|All))/,
            Ba = { children: !0, contents: !0, next: !0, prev: !0 };
        ma.fn.extend({ has: function(a) { var b = ma(a, this),
                    c = b.length; return this.filter(function() { for (var a = 0; a < c; a++)
                        if (ma.contains(this, b[a])) return !0 }) }, closest: function(a, b) { var c, d = 0,
                    e = this.length,
                    f = [],
                    g = "string" != typeof a && ma(a); if (!ua.test(a))
                    for (; d < e; d++)
                        for (c = this[d]; c && c !== b; c = c.parentNode)
                            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ma.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? ma.uniqueSort(f) : f) }, index: function(a) { return a ? "string" == typeof a ? ea.call(ma(a), this[0]) : ea.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) { return this.pushStack(ma.uniqueSort(ma.merge(this.get(), ma(a, b)))) }, addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }), ma.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return sa(a, "parentNode") }, parentsUntil: function(a, b, c) { return sa(a, "parentNode", c) }, next: function(a) { return f(a, "nextSibling") }, prev: function(a) { return f(a, "previousSibling") }, nextAll: function(a) { return sa(a, "nextSibling") }, prevAll: function(a) { return sa(a, "previousSibling") }, nextUntil: function(a, b, c) { return sa(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return sa(a, "previousSibling", c) }, siblings: function(a) { return ta((a.parentNode || {}).firstChild, a) }, children: function(a) { return ta(a.firstChild) }, contents: function(a) { return a.contentDocument || ma.merge([], a.childNodes) } }, function(a, b) { ma.fn[a] = function(c, d) { var e = ma.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ma.filter(d, e)), this.length > 1 && (Ba[a] || ma.uniqueSort(e), Aa.test(a) && e.reverse()), this.pushStack(e) } });
        var Ca = /\S+/g;
        ma.Callbacks = function(a) { a = "string" == typeof a ? g(a) : ma.extend({}, a); var b, c, d, e, f = [],
                h = [],
                i = -1,
                j = function() { for (e = a.once, d = b = !0; h.length; i = -1)
                        for (c = h.shift(); ++i < f.length;) f[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = f.length, c = !1);
                    a.memory || (c = !1), b = !1, e && (f = c ? [] : "") },
                k = { add: function() { return f && (c && !b && (i = f.length - 1, h.push(c)), function d(b) { ma.each(b, function(b, c) { ma.isFunction(c) ? a.unique && k.has(c) || f.push(c) : c && c.length && "string" !== ma.type(c) && d(c) }) }(arguments), c && !b && j()), this }, remove: function() { return ma.each(arguments, function(a, b) { for (var c;
                                (c = ma.inArray(b, f, c)) > -1;) f.splice(c, 1), c <= i && i-- }), this }, has: function(a) { return a ? ma.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = h = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = h = [], c || b || (f = c = ""), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this }, fire: function() { return k.fireWith(this, arguments), this }, fired: function() { return !!d } }; return k }, ma.extend({ Deferred: function(b) { var c = [
                        ["notify", "progress", ma.Callbacks("memory"), ma.Callbacks("memory"), 2],
                        ["resolve", "done", ma.Callbacks("once memory"), ma.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", ma.Callbacks("once memory"), ma.Callbacks("once memory"), 1, "rejected"]
                    ],
                    d = "pending",
                    e = { state: function() { return d }, always: function() { return f.done(arguments).fail(arguments), this }, "catch": function(a) { return e.then(null, a) }, pipe: function() { var a = arguments; return ma.Deferred(function(b) { ma.each(c, function(c, d) { var e = ma.isFunction(a[d[4]]) && a[d[4]];
                                    f[d[1]](function() { var a = e && e.apply(this, arguments);
                                        a && ma.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments) }) }), a = null }).promise() }, then: function(b, d, e) {
                            function f(b, c, d, e) { return function() { var j = this,
                                        k = arguments,
                                        l = function() { var a, l; if (!(b < g)) { if (a = d.apply(j, k), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                                l = a && ("object" == typeof a || "function" == typeof a) && a.then, ma.isFunction(l) ? e ? l.call(a, f(g, c, h, e), f(g, c, i, e)) : (g++, l.call(a, f(g, c, h, e), f(g, c, i, e), f(g, c, h, c.notifyWith))) : (d !== h && (j = void 0, k = [a]), (e || c.resolveWith)(j, k)) } },
                                        m = e ? l : function() { try { l() } catch (a) { ma.Deferred.exceptionHook && ma.Deferred.exceptionHook(a, m.stackTrace), b + 1 >= g && (d !== i && (j = void 0, k = [a]), c.rejectWith(j, k)) } };
                                    b ? m() : (ma.Deferred.getStackHook && (m.stackTrace = ma.Deferred.getStackHook()), a.setTimeout(m)) } } var g = 0; return ma.Deferred(function(a) { c[0][3].add(f(0, a, ma.isFunction(e) ? e : h, a.notifyWith)), c[1][3].add(f(0, a, ma.isFunction(b) ? b : h)), c[2][3].add(f(0, a, ma.isFunction(d) ? d : i)) }).promise() }, promise: function(a) { return null != a ? ma.extend(a, e) : e } },
                    f = {}; return ma.each(c, function(a, b) { var g = b[2],
                        h = b[5];
                    e[b[1]] = g.add, h && g.add(function() { d = h }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this }, f[b[0] + "With"] = g.fireWith }), e.promise(f), b && b.call(f, f), f }, when: function(a) { var b = arguments.length,
                    c = b,
                    d = Array(c),
                    e = ba.call(arguments),
                    f = ma.Deferred(),
                    g = function(a) { return function(c) { d[a] = this, e[a] = arguments.length > 1 ? ba.call(arguments) : c, --b || f.resolveWith(d, e) } }; if (b <= 1 && (j(a, f.done(g(c)).resolve, f.reject), "pending" === f.state() || ma.isFunction(e[c] && e[c].then))) return f.then(); for (; c--;) j(e[c], g(c), f.reject); return f.promise() } });
        var Da = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        ma.Deferred.exceptionHook = function(b, c) { a.console && a.console.warn && b && Da.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c) }, ma.readyException = function(b) { a.setTimeout(function() { throw b }) };
        var Ea = ma.Deferred();
        ma.fn.ready = function(a) { return Ea.then(a)["catch"](function(a) { ma.readyException(a) }), this }, ma.extend({ isReady: !1, readyWait: 1, holdReady: function(a) { a ? ma.readyWait++ : ma.ready(!0) }, ready: function(a) {
                (a === !0 ? --ma.readyWait : ma.isReady) || (ma.isReady = !0, a !== !0 && --ma.readyWait > 0 || Ea.resolveWith(_, [ma])) } }), ma.ready.then = Ea.then, "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? a.setTimeout(ma.ready) : (_.addEventListener("DOMContentLoaded", k), a.addEventListener("load", k));
        var Fa = function(a, b, c, d, e, f, g) { var h = 0,
                    i = a.length,
                    j = null == c; if ("object" === ma.type(c)) { e = !0; for (h in c) Fa(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, ma.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(ma(a), c) })), b))
                    for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f },
            Ga = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };
        l.uid = 1, l.prototype = { cache: function(a) { var b = a[this.expando]; return b || (b = {}, Ga(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function(a, b, c) { var d, e = this.cache(a); if ("string" == typeof b) e[ma.camelCase(b)] = c;
                else
                    for (d in b) e[ma.camelCase(d)] = b[d]; return e }, get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][ma.camelCase(b)] }, access: function(a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function(a, b) { var c, d = a[this.expando]; if (void 0 !== d) { if (void 0 !== b) { ma.isArray(b) ? b = b.map(ma.camelCase) : (b = ma.camelCase(b), b = b in d ? [b] : b.match(Ca) || []), c = b.length; for (; c--;) delete d[b[c]] }(void 0 === b || ma.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !ma.isEmptyObject(b) } };
        var Ha = new l,
            Ia = new l,
            Ja = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ka = /[A-Z]/g;
        ma.extend({ hasData: function(a) { return Ia.hasData(a) || Ha.hasData(a) }, data: function(a, b, c) { return Ia.access(a, b, c) }, removeData: function(a, b) { Ia.remove(a, b) }, _data: function(a, b, c) { return Ha.access(a, b, c) }, _removeData: function(a, b) { Ha.remove(a, b) } }), ma.fn.extend({ data: function(a, b) { var c, d, e, f = this[0],
                    g = f && f.attributes; if (void 0 === a) { if (this.length && (e = Ia.get(f), 1 === f.nodeType && !Ha.get(f, "hasDataAttrs"))) { for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ma.camelCase(d.slice(5)), m(f, d, e[d])));
                        Ha.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function() { Ia.set(this, a) }) : Fa(this, function(b) { var c; if (f && void 0 === b) { if (c = Ia.get(f, a), void 0 !== c) return c; if (c = m(f, a), void 0 !== c) return c } else this.each(function() { Ia.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function(a) { return this.each(function() { Ia.remove(this, a) }) } }), ma.extend({ queue: function(a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = Ha.get(a, b), c && (!d || ma.isArray(c) ? d = Ha.access(a, b, ma.makeArray(c)) : d.push(c)), d || [] }, dequeue: function(a, b) { b = b || "fx"; var c = ma.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = ma._queueHooks(a, b),
                    g = function() { ma.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) { var c = b + "queueHooks"; return Ha.get(a, c) || Ha.access(a, c, { empty: ma.Callbacks("once memory").add(function() { Ha.remove(a, [b + "queue", c]) }) }) } }), ma.fn.extend({ queue: function(a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ma.queue(this[0], a) : void 0 === b ? this : this.each(function() { var c = ma.queue(this, a, b);
                    ma._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ma.dequeue(this, a) }) }, dequeue: function(a) { return this.each(function() { ma.dequeue(this, a) }) }, clearQueue: function(a) { return this.queue(a || "fx", []) }, promise: function(a, b) { var c, d = 1,
                    e = ma.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {--d || e.resolveWith(f, [f]) }; for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = Ha.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } });
        var La = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ma = new RegExp("^(?:([+-])=|)(" + La + ")([a-z%]*)$", "i"),
            Na = ["Top", "Right", "Bottom", "Left"],
            Oa = function(a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && ma.contains(a.ownerDocument, a) && "none" === ma.css(a, "display") },
            Pa = function(a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e },
            Qa = {};
        ma.fn.extend({ show: function() { return p(this, !0) }, hide: function() { return p(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { Oa(this) ? ma(this).show() : ma(this).hide() }) } });
        var Ra = /^(?:checkbox|radio)$/i,
            Sa = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Ta = /^$|\/(?:java|ecma)script/i,
            Ua = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        Ua.optgroup = Ua.option, Ua.tbody = Ua.tfoot = Ua.colgroup = Ua.caption = Ua.thead, Ua.th = Ua.td;
        var Va = /<|&#?\w+;/;
        ! function() { var a = _.createDocumentFragment(),
                b = a.appendChild(_.createElement("div")),
                c = _.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), ka.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", ka.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }();
        var Wa = _.documentElement,
            Xa = /^key/,
            Ya = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Za = /^([^.]*)(?:\.(.+)|)/;
        ma.event = { global: {}, add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = Ha.get(a); if (q)
                    for (c.handler && (f = c, c = f.handler, e = f.selector), e && ma.find.matchesSelector(Wa, e), c.guid || (c.guid = ma.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) { return "undefined" != typeof ma && ma.event.triggered !== b.type ? ma.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(Ca) || [""], j = b.length; j--;) h = Za.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = ma.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = ma.event.special[n] || {}, k = ma.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && ma.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), ma.event.global[n] = !0) }, remove: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = Ha.hasData(a) && Ha.get(a); if (q && (i = q.events)) { for (b = (b || "").match(Ca) || [""], j = b.length; j--;)
                        if (h = Za.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) { for (l = ma.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ma.removeEvent(a, n, q.handle), delete i[n]) } else
                            for (n in i) ma.event.remove(a, n + b[j], c, d, !0);
                    ma.isEmptyObject(i) && Ha.remove(a, "handle events") } }, dispatch: function(a) { var b, c, d, e, f, g, h = ma.event.fix(a),
                    i = new Array(arguments.length),
                    j = (Ha.get(this, "events") || {})[h.type] || [],
                    k = ma.event.special[h.type] || {}; for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b]; if (h.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, h) !== !1) { for (g = ma.event.handlers.call(this, h, j), b = 0;
                        (e = g[b++]) && !h.isPropagationStopped();)
                        for (h.currentTarget = e.elem, c = 0;
                            (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();) h.rnamespace && !h.rnamespace.test(f.namespace) || (h.handleObj = f, h.data = f.data, d = ((ma.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i), void 0 !== d && (h.result = d) === !1 && (h.preventDefault(), h.stopPropagation())); return k.postDispatch && k.postDispatch.call(this, h), h.result } }, handlers: function(a, b) { var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target; if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                    for (; i !== this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (d = [], c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? ma(e, this).index(i) > -1 : ma.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({ elem: i, handlers: d }) } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, addProp: function(a, b) { Object.defineProperty(ma.Event.prototype, a, { enumerable: !0, configurable: !0, get: ma.isFunction(b) ? function() { if (this.originalEvent) return b(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[a] }, set: function(b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) }, fix: function(a) { return a[ma.expando] ? a : new ma.Event(a) }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== v() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === v() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && ma.nodeName(this, "input")) return this.click(), !1 }, _default: function(a) { return ma.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } } }, ma.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, ma.Event = function(a, b) { return this instanceof ma.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? t : u, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && ma.extend(this, b), this.timeStamp = a && a.timeStamp || ma.now(), void(this[ma.expando] = !0)) : new ma.Event(a, b) }, ma.Event.prototype = { constructor: ma.Event, isDefaultPrevented: u, isPropagationStopped: u, isImmediatePropagationStopped: u, isSimulated: !1, preventDefault: function() { var a = this.originalEvent;
                this.isDefaultPrevented = t, a && !this.isSimulated && a.preventDefault() }, stopPropagation: function() { var a = this.originalEvent;
                this.isPropagationStopped = t, a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function() { var a = this.originalEvent;
                this.isImmediatePropagationStopped = t, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation() } }, ma.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(a) { var b = a.button; return null == a.which && Xa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && Ya.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, ma.event.addProp), ma.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) { ma.event.special[a] = { delegateType: b, bindType: b, handle: function(a) { var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj; return e && (e === d || ma.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), ma.fn.extend({ on: function(a, b, c, d) { return w(this, a, b, c, d) }, one: function(a, b, c, d) { return w(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ma(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = u), this.each(function() { ma.event.remove(this, a, c, b) }) } });
        var $a = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            _a = /<script|<style|<link/i,
            ab = /checked\s*(?:[^=]|=\s*.checked.)/i,
            bb = /^true\/(.*)/,
            cb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ma.extend({ htmlPrefilter: function(a) { return a.replace($a, "<$1></$2>") }, clone: function(a, b, c) { var d, e, f, g, h = a.cloneNode(!0),
                    i = ma.contains(a.ownerDocument, a); if (!(ka.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ma.isXMLDoc(a)))
                    for (g = q(h), f = q(a), d = 0, e = f.length; d < e; d++) B(f[d], g[d]); if (b)
                    if (c)
                        for (f = f || q(a), g = g || q(h), d = 0, e = f.length; d < e; d++) A(f[d], g[d]);
                    else A(a, h); return g = q(h, "script"), g.length > 0 && r(g, !i && q(a, "script")), h }, cleanData: function(a) { for (var b, c, d, e = ma.event.special, f = 0; void 0 !== (c = a[f]); f++)
                    if (Ga(c)) { if (b = c[Ha.expando]) { if (b.events)
                                for (d in b.events) e[d] ? ma.event.remove(c, d) : ma.removeEvent(c, d, b.handle);
                            c[Ha.expando] = void 0 } c[Ia.expando] && (c[Ia.expando] = void 0) } } }), ma.fn.extend({ detach: function(a) { return D(this, a, !0) }, remove: function(a) { return D(this, a) }, text: function(a) { return Fa(this, function(a) { return void 0 === a ? ma.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) }, append: function() { return C(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = x(this, a);
                        b.appendChild(a) } }) }, prepend: function() { return C(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = x(this, a);
                        b.insertBefore(a, b.firstChild) } }) }, before: function() { return C(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() { return C(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (ma.cleanData(q(a, !1)), a.textContent = ""); return this }, clone: function(a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function() { return ma.clone(this, a, b) }) }, html: function(a) { return Fa(this, function(a) { var b = this[0] || {},
                        c = 0,
                        d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !_a.test(a) && !Ua[(Sa.exec(a) || ["", ""])[1].toLowerCase()]) { a = ma.htmlPrefilter(a); try { for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (ma.cleanData(q(b, !1)), b.innerHTML = a);
                            b = 0 } catch (e) {} } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function() { var a = []; return C(this, arguments, function(b) { var c = this.parentNode;
                    ma.inArray(this, a) < 0 && (ma.cleanData(q(this)), c && c.replaceChild(b, this)) }, a) } }), ma.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { ma.fn[a] = function(a) { for (var c, d = [], e = ma(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), ma(e[g])[b](c), da.apply(d, c.get()); return this.pushStack(d) } });
        var db = /^margin/,
            eb = new RegExp("^(" + La + ")(?!px)[a-z%]+$", "i"),
            fb = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) };
        ! function() {
            function b() { if (h) { h.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Wa.appendChild(g); var b = a.getComputedStyle(h);
                    c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, Wa.removeChild(g), h = null } } var c, d, e, f, g = _.createElement("div"),
                h = _.createElement("div");
            h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", ka.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), ma.extend(ka, { pixelPosition: function() { return b(), c }, boxSizingReliable: function() { return b(), d }, pixelMarginRight: function() { return b(), e }, reliableMarginLeft: function() { return b(), f } })) }();
        var gb = /^(none|table(?!-c[ea]).+)/,
            hb = { position: "absolute", visibility: "hidden", display: "block" },
            ib = { letterSpacing: "0", fontWeight: "400" },
            jb = ["Webkit", "Moz", "ms"],
            kb = _.createElement("div").style;
        ma.extend({
            cssHooks: { opacity: { get: function(a, b) { if (b) { var c = E(a, "opacity"); return "" === c ? "1" : c } } } },
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
            cssProps: { "float": "cssFloat" },
            style: function(a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = ma.camelCase(b),
                        i = a.style; return b = ma.cssProps[h] || (ma.cssProps[h] = G(h) || h), g = ma.cssHooks[b] || ma.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ma.exec(c)) && e[1] && (c = n(a, b, e), f = "number"), void(null != c && c === c && ("number" === f && (c += e && e[3] || (ma.cssNumber[h] ? "" : "px")), ka.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)))) } },
            css: function(a, b, c, d) { var e, f, g, h = ma.camelCase(b); return b = ma.cssProps[h] || (ma.cssProps[h] = G(h) || h), g = ma.cssHooks[b] || ma.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = E(a, b, d)), "normal" === e && b in ib && (e = ib[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e }
        }), ma.each(["height", "width"], function(a, b) { ma.cssHooks[b] = { get: function(a, c, d) { if (c) return !gb.test(ma.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? J(a, b, d) : Pa(a, hb, function() { return J(a, b, d) }) }, set: function(a, c, d) { var e, f = d && fb(a),
                        g = d && I(a, b, d, "border-box" === ma.css(a, "boxSizing", !1, f), f); return g && (e = Ma.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = ma.css(a, b)), H(a, c, g) } } }), ma.cssHooks.marginLeft = F(ka.reliableMarginLeft, function(a, b) { if (b) return (parseFloat(E(a, "marginLeft")) || a.getBoundingClientRect().left - Pa(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" }), ma.each({ margin: "", padding: "", border: "Width" }, function(a, b) { ma.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + Na[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, db.test(a) || (ma.cssHooks[a + b].set = H) }), ma.fn.extend({ css: function(a, b) { return Fa(this, function(a, b, c) { var d, e, f = {},
                        g = 0; if (ma.isArray(b)) { for (d = fb(a), e = b.length; g < e; g++) f[b[g]] = ma.css(a, b[g], !1, d); return f } return void 0 !== c ? ma.style(a, b, c) : ma.css(a, b) }, a, b, arguments.length > 1) } }), ma.Tween = K, K.prototype = { constructor: K, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || ma.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ma.cssNumber[c] ? "" : "px") }, cur: function() { var a = K.propHooks[this.prop]; return a && a.get ? a.get(this) : K.propHooks._default.get(this) }, run: function(a) { var b, c = K.propHooks[this.prop]; return this.options.duration ? this.pos = b = ma.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : K.propHooks._default.set(this), this } }, K.prototype.init.prototype = K.prototype, K.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = ma.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { ma.fx.step[a.prop] ? ma.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[ma.cssProps[a.prop]] && !ma.cssHooks[a.prop] ? a.elem[a.prop] = a.now : ma.style(a.elem, a.prop, a.now + a.unit) } } }, K.propHooks.scrollTop = K.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, ma.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, ma.fx = K.prototype.init, ma.fx.step = {};
        var lb, mb, nb = /^(?:toggle|show|hide)$/,
            ob = /queueHooks$/;
        ma.Animation = ma.extend(R, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return n(c.elem, a, Ma.exec(b), c), c }] }, tweener: function(a, b) { ma.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Ca); for (var c, d = 0, e = a.length; d < e; d++) c = a[d], R.tweeners[c] = R.tweeners[c] || [], R.tweeners[c].unshift(b) }, prefilters: [P], prefilter: function(a, b) { b ? R.prefilters.unshift(a) : R.prefilters.push(a) } }), ma.speed = function(a, b, c) { var d = a && "object" == typeof a ? ma.extend({}, a) : { complete: c || !c && b || ma.isFunction(a) && a, duration: a, easing: c && b || b && !ma.isFunction(b) && b }; return ma.fx.off || _.hidden ? d.duration = 0 : d.duration = "number" == typeof d.duration ? d.duration : d.duration in ma.fx.speeds ? ma.fx.speeds[d.duration] : ma.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() { ma.isFunction(d.old) && d.old.call(this), d.queue && ma.dequeue(this, d.queue) }, d }, ma.fn.extend({ fadeTo: function(a, b, c, d) { return this.filter(Oa).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) { var e = ma.isEmptyObject(a),
                        f = ma.speed(b, c, d),
                        g = function() { var b = R(this, ma.extend({}, a), f);
                            (e || Ha.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, b, c) { var d = function(a) { var b = a.stop;
                        delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() { var b = !0,
                            e = null != a && a + "queueHooks",
                            f = ma.timers,
                            g = Ha.get(this); if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && ob.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));!b && c || ma.dequeue(this, a) }) }, finish: function(a) { return a !== !1 && (a = a || "fx"), this.each(function() { var b, c = Ha.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = ma.timers,
                            g = d ? d.length : 0; for (c.finish = !0, ma.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish }) } }), ma.each(["toggle", "show", "hide"], function(a, b) { var c = ma.fn[b];
                ma.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e) } }), ma.each({ slideDown: N("show"), slideUp: N("hide"), slideToggle: N("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { ma.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), ma.timers = [], ma.fx.tick = function() { var a, b = 0,
                    c = ma.timers; for (lb = ma.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                c.length || ma.fx.stop(), lb = void 0 }, ma.fx.timer = function(a) { ma.timers.push(a), a() ? ma.fx.start() : ma.timers.pop() }, ma.fx.interval = 13, ma.fx.start = function() { mb || (mb = a.requestAnimationFrame ? a.requestAnimationFrame(L) : a.setInterval(ma.fx.tick, ma.fx.interval)) }, ma.fx.stop = function() { a.cancelAnimationFrame ? a.cancelAnimationFrame(mb) : a.clearInterval(mb), mb = null }, ma.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ma.fn.delay = function(b, c) { return b = ma.fx ? ma.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) { var e = a.setTimeout(c, b);
                    d.stop = function() { a.clearTimeout(e) } }) },
            function() { var a = _.createElement("input"),
                    b = _.createElement("select"),
                    c = b.appendChild(_.createElement("option"));
                a.type = "checkbox", ka.checkOn = "" !== a.value, ka.optSelected = c.selected, a = _.createElement("input"), a.value = "t", a.type = "radio", ka.radioValue = "t" === a.value }();
        var pb, qb = ma.expr.attrHandle;
        ma.fn.extend({ attr: function(a, b) { return Fa(this, ma.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { ma.removeAttr(this, a) }) } }), ma.extend({ attr: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? ma.prop(a, b, c) : (1 === f && ma.isXMLDoc(a) || (e = ma.attrHooks[b.toLowerCase()] || (ma.expr.match.bool.test(b) ? pb : void 0)), void 0 !== c ? null === c ? void ma.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = ma.find.attr(a, b), null == d ? void 0 : d)) }, attrHooks: { type: { set: function(a, b) { if (!ka.radioValue && "radio" === b && ma.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function(a, b) { var c, d = 0,
                    e = b && b.match(Ca); if (e && 1 === a.nodeType)
                    for (; c = e[d++];) a.removeAttribute(c) } }), pb = { set: function(a, b, c) { return b === !1 ? ma.removeAttr(a, c) : a.setAttribute(c, c), c } }, ma.each(ma.expr.match.bool.source.match(/\w+/g), function(a, b) { var c = qb[b] || ma.find.attr;
            qb[b] = function(a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = qb[g], qb[g] = e, e = null != c(a, b, d) ? g : null, qb[g] = f), e } });
        var rb = /^(?:input|select|textarea|button)$/i,
            sb = /^(?:a|area)$/i;
        ma.fn.extend({ prop: function(a, b) { return Fa(this, ma.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[ma.propFix[a] || a] }) } }), ma.extend({ prop: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && ma.isXMLDoc(a) || (b = ma.propFix[b] || b, e = ma.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = ma.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : rb.test(a.nodeName) || sb.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), ka.optSelected || (ma.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null }, set: function(a) { var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), ma.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { ma.propFix[this.toLowerCase()] = this });
        var tb = /[\t\r\n\f]/g;
        ma.fn.extend({ addClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (ma.isFunction(a)) return this.each(function(b) { ma(this).addClass(a.call(this, b, S(this))) }); if ("string" == typeof a && a)
                    for (b = a.match(Ca) || []; c = this[i++];)
                        if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(tb, " ")) { for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            h = ma.trim(d), e !== h && c.setAttribute("class", h) } return this }, removeClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (ma.isFunction(a)) return this.each(function(b) { ma(this).removeClass(a.call(this, b, S(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a)
                    for (b = a.match(Ca) || []; c = this[i++];)
                        if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(tb, " ")) { for (g = 0; f = b[g++];)
                                for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                            h = ma.trim(d), e !== h && c.setAttribute("class", h) } return this }, toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : ma.isFunction(a) ? this.each(function(c) { ma(this).toggleClass(a.call(this, c, S(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c)
                        for (d = 0, e = ma(this), f = a.match(Ca) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else void 0 !== a && "boolean" !== c || (b = S(this), b && Ha.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : Ha.get(this, "__className__") || "")) }) }, hasClass: function(a) { var b, c, d = 0; for (b = " " + a + " "; c = this[d++];)
                    if (1 === c.nodeType && (" " + S(c) + " ").replace(tb, " ").indexOf(b) > -1) return !0; return !1 } });
        var ub = /\r/g,
            vb = /[\x20\t\r\n\f]+/g;
        ma.fn.extend({ val: function(a) { var b, c, d, e = this[0]; return arguments.length ? (d = ma.isFunction(a), this.each(function(c) { var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, ma(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ma.isArray(e) && (e = ma.map(e, function(a) { return null == a ? "" : a + "" })), b = ma.valHooks[this.type] || ma.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) })) : e ? (b = ma.valHooks[e.type] || ma.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)) : void 0 } }), ma.extend({ valHooks: { option: { get: function(a) { var b = ma.find.attr(a, "value"); return null != b ? b : ma.trim(ma.text(a)).replace(vb, " ") } }, select: { get: function(a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                            if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !ma.nodeName(c.parentNode, "optgroup"))) { if (b = ma(c).val(), f) return b;
                                g.push(b) } return g }, set: function(a, b) { for (var c, d, e = a.options, f = ma.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = ma.inArray(ma.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), ma.each(["radio", "checkbox"], function() { ma.valHooks[this] = { set: function(a, b) { if (ma.isArray(b)) return a.checked = ma.inArray(ma(a).val(), b) > -1 } }, ka.checkOn || (ma.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
        var wb = /^(?:focusinfocus|focusoutblur)$/;
        ma.extend(ma.event, { trigger: function(b, c, d, e) { var f, g, h, i, j, k, l, m = [d || _],
                    n = ha.call(b, "type") ? b.type : b,
                    o = ha.call(b, "namespace") ? b.namespace.split(".") : []; if (g = h = d = d || _, 3 !== d.nodeType && 8 !== d.nodeType && !wb.test(n + ma.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[ma.expando] ? b : new ma.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ma.makeArray(c, [b]), l = ma.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) { if (!e && !l.noBubble && !ma.isWindow(d)) { for (i = l.delegateType || n, wb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                        h === (d.ownerDocument || _) && m.push(h.defaultView || h.parentWindow || a) } for (f = 0;
                        (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (Ha.get(g, "events") || {})[b.type] && Ha.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && Ga(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault()); return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !Ga(d) || j && ma.isFunction(d[n]) && !ma.isWindow(d) && (h = d[j], h && (d[j] = null), ma.event.triggered = n, d[n](), ma.event.triggered = void 0, h && (d[j] = h)), b.result } }, simulate: function(a, b, c) { var d = ma.extend(new ma.Event, c, { type: a, isSimulated: !0 });
                ma.event.trigger(d, null, b) } }), ma.fn.extend({ trigger: function(a, b) { return this.each(function() { ma.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; if (c) return ma.event.trigger(a, b, c, !0) } }), ma.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) { ma.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), ma.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), ka.focusin = "onfocusin" in a, ka.focusin || ma.each({ focus: "focusin", blur: "focusout" }, function(a, b) { var c = function(a) { ma.event.simulate(b, a.target, ma.event.fix(a)) };
            ma.event.special[b] = { setup: function() { var d = this.ownerDocument || this,
                        e = Ha.access(d, b);
                    e || d.addEventListener(a, c, !0), Ha.access(d, b, (e || 0) + 1) }, teardown: function() { var d = this.ownerDocument || this,
                        e = Ha.access(d, b) - 1;
                    e ? Ha.access(d, b, e) : (d.removeEventListener(a, c, !0), Ha.remove(d, b)) } } });
        var xb = a.location,
            yb = ma.now(),
            zb = /\?/;
        ma.parseXML = function(b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || ma.error("Invalid XML: " + b), c };
        var Ab = /\[\]$/,
            Bb = /\r?\n/g,
            Cb = /^(?:submit|button|image|reset|file)$/i,
            Db = /^(?:input|select|textarea|keygen)/i;
        ma.param = function(a, b) { var c, d = [],
                e = function(a, b) { var c = ma.isFunction(b) ? b() : b;
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c) }; if (ma.isArray(a) || a.jquery && !ma.isPlainObject(a)) ma.each(a, function() { e(this.name, this.value) });
            else
                for (c in a) T(c, a[c], b, e); return d.join("&") }, ma.fn.extend({ serialize: function() { return ma.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = ma.prop(this, "elements"); return a ? ma.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !ma(this).is(":disabled") && Db.test(this.nodeName) && !Cb.test(a) && (this.checked || !Ra.test(a)) }).map(function(a, b) { var c = ma(this).val(); return null == c ? null : ma.isArray(c) ? ma.map(c, function(a) { return { name: b.name, value: a.replace(Bb, "\r\n") } }) : { name: b.name, value: c.replace(Bb, "\r\n") } }).get() } });
        var Eb = /%20/g,
            Fb = /#.*$/,
            Gb = /([?&])_=[^&]*/,
            Hb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ib = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Jb = /^(?:GET|HEAD)$/,
            Kb = /^\/\//,
            Lb = {},
            Mb = {},
            Nb = "*/".concat("*"),
            Ob = _.createElement("a");
        Ob.href = xb.href, ma.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: xb.href, type: "GET", isLocal: Ib.test(xb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Nb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": ma.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) { return b ? W(W(a, ma.ajaxSettings), b) : W(ma.ajaxSettings, a) }, ajaxPrefilter: U(Lb), ajaxTransport: U(Mb), ajax: function(b, c) {
                function d(b, c, d, h) { var j, m, n, u, v, w = c;
                    k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (u = X(o, x, d)), u = Y(o, u, x, j), j ? (o.ifModified && (v = x.getResponseHeader("Last-Modified"), v && (ma.lastModified[f] = v), v = x.getResponseHeader("etag"), v && (ma.etag[f] = v)), 204 === b || "HEAD" === o.type ? w = "nocontent" : 304 === b ? w = "notmodified" : (w = u.state, m = u.data, n = u.error, j = !n)) : (n = w, !b && w || (w = "error", b < 0 && (b = 0))), x.status = b, x.statusText = (c || w) + "", j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]), x.statusCode(t), t = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]), s.fireWith(p, [x, w]), l && (q.trigger("ajaxComplete", [x, o]), --ma.active || ma.event.trigger("ajaxStop"))) } "object" == typeof b && (c = b, b = void 0), c = c || {}; var e, f, g, h, i, j, k, l, m, n, o = ma.ajaxSetup({}, c),
                    p = o.context || o,
                    q = o.context && (p.nodeType || p.jquery) ? ma(p) : ma.event,
                    r = ma.Deferred(),
                    s = ma.Callbacks("once memory"),
                    t = o.statusCode || {},
                    u = {},
                    v = {},
                    w = "canceled",
                    x = { readyState: 0, getResponseHeader: function(a) { var b; if (k) { if (!h)
                                    for (h = {}; b = Hb.exec(g);) h[b[1].toLowerCase()] = b[2];
                                b = h[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function() { return k ? g : null }, setRequestHeader: function(a, b) { return null == k && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a, u[a] = b), this }, overrideMimeType: function(a) { return null == k && (o.mimeType = a), this }, statusCode: function(a) { var b; if (a)
                                if (k) x.always(a[x.status]);
                                else
                                    for (b in a) t[b] = [t[b], a[b]]; return this }, abort: function(a) { var b = a || w; return e && e.abort(b), d(0, b), this } }; if (r.promise(x), o.url = ((b || o.url || xb.href) + "").replace(Kb, xb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(Ca) || [""], null == o.crossDomain) { j = _.createElement("a"); try { j.href = o.url, j.href = j.href, o.crossDomain = Ob.protocol + "//" + Ob.host != j.protocol + "//" + j.host } catch (y) { o.crossDomain = !0 } } if (o.data && o.processData && "string" != typeof o.data && (o.data = ma.param(o.data, o.traditional)), V(Lb, o, c, x), k) return x;
                l = ma.event && o.global, l && 0 === ma.active++ && ma.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Jb.test(o.type), f = o.url.replace(Fb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Eb, "+")) : (n = o.url.slice(f.length), o.data && (f += (zb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Gb, ""), n = (zb.test(f) ? "&" : "?") + "_=" + yb++ + n), o.url = f + n), o.ifModified && (ma.lastModified[f] && x.setRequestHeader("If-Modified-Since", ma.lastModified[f]), ma.etag[f] && x.setRequestHeader("If-None-Match", ma.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", o.contentType), x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Nb + "; q=0.01" : "") : o.accepts["*"]); for (m in o.headers) x.setRequestHeader(m, o.headers[m]); if (o.beforeSend && (o.beforeSend.call(p, x, o) === !1 || k)) return x.abort(); if (w = "abort", s.add(o.complete), x.done(o.success), x.fail(o.error), e = V(Mb, o, c, x)) { if (x.readyState = 1, l && q.trigger("ajaxSend", [x, o]), k) return x;
                    o.async && o.timeout > 0 && (i = a.setTimeout(function() { x.abort("timeout") }, o.timeout)); try { k = !1, e.send(u, d) } catch (y) { if (k) throw y;
                        d(-1, y) } } else d(-1, "No Transport"); return x }, getJSON: function(a, b, c) { return ma.get(a, b, c, "json") }, getScript: function(a, b) { return ma.get(a, void 0, b, "script") } }), ma.each(["get", "post"], function(a, b) { ma[b] = function(a, c, d, e) { return ma.isFunction(c) && (e = e || d, d = c, c = void 0), ma.ajax(ma.extend({ url: a, type: b, dataType: e, data: c, success: d }, ma.isPlainObject(a) && a)) } }), ma._evalUrl = function(a) { return ma.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, ma.fn.extend({ wrapAll: function(a) { var b; return this[0] && (ma.isFunction(a) && (a = a.call(this[0])), b = ma(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { for (var a = this; a.firstElementChild;) a = a.firstElementChild; return a }).append(this)), this }, wrapInner: function(a) { return ma.isFunction(a) ? this.each(function(b) { ma(this).wrapInner(a.call(this, b)) }) : this.each(function() { var b = ma(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) { var b = ma.isFunction(a); return this.each(function(c) { ma(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function(a) { return this.parent(a).not("body").each(function() { ma(this).replaceWith(this.childNodes) }), this } }), ma.expr.pseudos.hidden = function(a) { return !ma.expr.pseudos.visible(a) }, ma.expr.pseudos.visible = function(a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, ma.ajaxSettings.xhr = function() { try { return new a.XMLHttpRequest } catch (b) {} };
        var Pb = { 0: 200, 1223: 204 },
            Qb = ma.ajaxSettings.xhr();
        ka.cors = !!Qb && "withCredentials" in Qb, ka.ajax = Qb = !!Qb, ma.ajaxTransport(function(b) { var c, d; if (ka.cors || Qb && !b.crossDomain) return { send: function(e, f) { var g, h = b.xhr(); if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (g in b.xhrFields) h[g] = b.xhrFields[g];
                    b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (g in e) h.setRequestHeader(g, e[g]);
                    c = function(a) { return function() { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Pb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() { 4 === h.readyState && a.setTimeout(function() { c && d() }) }, c = c("abort"); try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i } }, abort: function() { c && c() } } }), ma.ajaxPrefilter(function(a) { a.crossDomain && (a.contents.script = !1) }), ma.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return ma.globalEval(a), a } } }), ma.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), ma.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(d, e) { b = ma("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type) }), _.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
        var Rb = [],
            Sb = /(=)\?(?=&|$)|\?\?/;
        ma.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Rb.pop() || ma.expando + "_" + yb++; return this[a] = !0, a } }), ma.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Sb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Sb.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = ma.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Sb, "$1" + e) : b.jsonp !== !1 && (b.url += (zb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || ma.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? ma(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Rb.push(e)), g && ma.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), ka.createHTMLDocument = function() { var a = _.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length }(), ma.parseHTML = function(a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var d, e, f; return b || (ka.createHTMLDocument ? (b = _.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = _.location.href, b.head.appendChild(d)) : b = _), e = va.exec(a), f = !c && [], e ? [b.createElement(e[1])] : (e = s([a], b, f), f && f.length && ma(f).remove(), ma.merge([], e.childNodes)) }, ma.fn.load = function(a, b, c) { var d, e, f, g = this,
                h = a.indexOf(" "); return h > -1 && (d = ma.trim(a.slice(h)), a = a.slice(0, h)), ma.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && ma.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? ma("<div>").append(ma.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this }, ma.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { ma.fn[b] = function(a) { return this.on(b, a) } }), ma.expr.pseudos.animated = function(a) { return ma.grep(ma.timers, function(b) { return a === b.elem }).length }, ma.offset = { setOffset: function(a, b, c) { var d, e, f, g, h, i, j, k = ma.css(a, "position"),
                    l = ma(a),
                    m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = ma.css(a, "top"), i = ma.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ma.isFunction(b) && (b = b.call(a, c, ma.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, ma.fn.extend({ offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { ma.offset.setOffset(this, a, b) }); var b, c, d, e, f = this[0]; return f ? f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Z(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var a, b, c = this[0],
                        d = { top: 0, left: 0 }; return "fixed" === ma.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ma.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + ma.css(a[0], "borderTopWidth", !0), left: d.left + ma.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - ma.css(c, "marginTop", !0), left: b.left - d.left - ma.css(c, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var a = this.offsetParent; a && "static" === ma.css(a, "position");) a = a.offsetParent; return a || Wa }) } }), ma.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) { var c = "pageYOffset" === b;
            ma.fn[a] = function(d) { return Fa(this, function(a, d, e) { var f = Z(a); return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) } }), ma.each(["top", "left"], function(a, b) { ma.cssHooks[b] = F(ka.pixelPosition, function(a, c) { if (c) return c = E(a, b), eb.test(c) ? ma(a).position()[b] + "px" : c }) }), ma.each({ Height: "height", Width: "width" }, function(a, b) { ma.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) { ma.fn[d] = function(e, f) { var g = arguments.length && (c || "boolean" != typeof e),
                        h = c || (e === !0 || f === !0 ? "margin" : "border"); return Fa(this, function(b, c, e) { var f; return ma.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? ma.css(b, c, h) : ma.style(b, c, e, h) }, b, g ? e : void 0, g) } }) }), ma.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), ma.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() { return ma });
        var Tb = a.jQuery,
            Ub = a.$;
        return ma.noConflict = function(b) { return a.$ === ma && (a.$ = Ub), b && a.jQuery === ma && (a.jQuery = Tb), ma }, b || (a.jQuery = a.$ = ma), ma
    }), function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) }(function(a) {
        function b(a) { for (var b = a.css("visibility");
                "inherit" === b;) a = a.parent(), b = a.css("visibility"); return "hidden" !== b }

        function c(a) { for (var b, c; a.length && a[0] !== document;) { if (b = a.css("position"), ("absolute" === b || "relative" === b || "fixed" === b) && (c = parseInt(a.css("zIndex"), 10), !isNaN(c) && 0 !== c)) return c;
                a = a.parent() } return 0 }

        function d() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, a.extend(this._defaults, this.regional[""]), this.regional.en = a.extend(!0, {}, this.regional[""]), this.regional["en-US"] = a.extend(!0, {}, this.regional.en), this.dpDiv = e(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

        function e(b) { var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return b.on("mouseout", c, function() { a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover") }).on("mouseover", c, f) }

        function f() { a.datepicker._isDisabledDatepicker(l.inline ? l.dpDiv.parent()[0] : l.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover")) }

        function g(b, c) { a.extend(b, c); for (var d in c) null == c[d] && (b[d] = c[d]); return b } a.ui = a.ui || {}, a.ui.version = "1.12.0";
        var h = 0,
            i = Array.prototype.slice;
        a.cleanData = function(b) { return function(c) { var d, e, f; for (f = 0; null != (e = c[f]); f++) try { d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove") } catch (g) {} b(c) } }(a.cleanData), a.widget = function(b, c, d) {
                var e, f, g, h = {},
                    i = b.split(".")[0];
                b = b.split(".")[1];
                var j = i + "-" + b;
                return d || (d = c, c = a.Widget), a.isArray(d) && (d = a.extend.apply(null, [{}].concat(d))), a.expr[":"][j.toLowerCase()] = function(b) { return !!a.data(b, j) }, a[i] = a[i] || {}, e = a[i][b], f = a[i][b] = function(a, b) {
                    return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new f(a, b)
                }, a.extend(f, e, { version: d.version, _proto: a.extend({}, d), _childConstructors: [] }), g = new c, g.options = a.widget.extend({}, g.options), a.each(d, function(b, d) { return a.isFunction(d) ? void(h[b] = function() {
                        function a() { return c.prototype[b].apply(this, arguments) }

                        function e(a) { return c.prototype[b].apply(this, a) } return function() { var b, c = this._super,
                                f = this._superApply; return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b } }()) : void(h[b] = d) }), f.prototype = a.widget.extend(g, { widgetEventPrefix: e ? g.widgetEventPrefix || b : b }, h, { constructor: f, namespace: i, widgetName: b, widgetFullName: j }), e ? (a.each(e._childConstructors, function(b, c) { var d = c.prototype;
                    a.widget(d.namespace + "." + d.widgetName, f, c._proto) }), delete e._childConstructors) : c._childConstructors.push(f), a.widget.bridge(b, f), f
            }, a.widget.extend = function(b) { for (var c, d, e = i.call(arguments, 1), f = 0, g = e.length; g > f; f++)
                    for (c in e[f]) d = e[f][c], e[f].hasOwnProperty(c) && void 0 !== d && (b[c] = a.isPlainObject(d) ? a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d) : d); return b }, a.widget.bridge = function(b, c) { var d = c.prototype.widgetFullName || b;
                a.fn[b] = function(e) { var f = "string" == typeof e,
                        g = i.call(arguments, 1),
                        h = this; return f ? this.each(function() { var c, f = a.data(this, d); return "instance" === e ? (h = f, !1) : f ? a.isFunction(f[e]) && "_" !== e.charAt(0) ? (c = f[e].apply(f, g), c !== f && void 0 !== c ? (h = c && c.jquery ? h.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + e + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + e + "'") }) : (g.length && (e = a.widget.extend.apply(null, [e].concat(g))), this.each(function() { var b = a.data(this, d);
                        b ? (b.option(e || {}), b._init && b._init()) : a.data(this, d, new c(e, this)) })), h } }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: !1, create: null }, _createWidget: function(b, c) { c = a(c || this.defaultElement || this)[0], this.element = a(c), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), this.classesElementLookup = {}, c !== this && (a.data(c, this.widgetFullName, this), this._on(!0, this.element, { remove: function(a) { a.target === c && this.destroy() } }), this.document = a(c.style ? c.ownerDocument : c.document || c), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init() }, _getCreateOptions: function() { return {} }, _getCreateEventData: a.noop, _create: a.noop, _init: a.noop, destroy: function() { var b = this;
                    this._destroy(), a.each(this.classesElementLookup, function(a, c) { b._removeClass(c, a) }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace) }, _destroy: a.noop, widget: function() { return this.element }, option: function(b, c) { var d, e, f, g = b; if (0 === arguments.length) return a.widget.extend({}, this.options); if ("string" == typeof b)
                        if (g = {}, d = b.split("."), b = d.shift(), d.length) { for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; d.length - 1 > f; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]]; if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
                            e[b] = c } else { if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                            g[b] = c } return this._setOptions(g), this }, _setOptions: function(a) { var b; for (b in a) this._setOption(b, a[b]); return this }, _setOption: function(a, b) { return "classes" === a && this._setOptionClasses(b), this.options[a] = b, "disabled" === a && this._setOptionDisabled(b), this }, _setOptionClasses: function(b) { var c, d, e; for (c in b) e = this.classesElementLookup[c], b[c] !== this.options.classes[c] && e && e.length && (d = a(e.get()), this._removeClass(e, c), d.addClass(this._classes({ element: d, keys: c, classes: b, add: !0 }))) }, _setOptionDisabled: function(a) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!a), a && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus")) }, enable: function() { return this._setOptions({ disabled: !1 }) }, disable: function() { return this._setOptions({ disabled: !0 }) }, _classes: function(b) {
                    function c(c, f) { var g, h; for (h = 0; c.length > h; h++) g = e.classesElementLookup[c[h]] || a(), g = a(b.add ? a.unique(g.get().concat(b.element.get())) : g.not(b.element).get()), e.classesElementLookup[c[h]] = g, d.push(c[h]), f && b.classes[c[h]] && d.push(b.classes[c[h]]) } var d = [],
                        e = this; return b = a.extend({ element: this.element, classes: this.options.classes || {} }, b), b.keys && c(b.keys.match(/\S+/g) || [], !0), b.extra && c(b.extra.match(/\S+/g) || []), d.join(" ") }, _removeClass: function(a, b, c) { return this._toggleClass(a, b, c, !1) }, _addClass: function(a, b, c) { return this._toggleClass(a, b, c, !0) }, _toggleClass: function(a, b, c, d) { d = "boolean" == typeof d ? d : c; var e = "string" == typeof a || null === a,
                        f = { extra: e ? b : c, keys: e ? a : b, element: e ? this.element : a, add: d }; return f.element.toggleClass(this._classes(f), d), this }, _on: function(b, c, d) { var e, f = this; "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                        function h() { return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0 } "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++); var i = d.match(/^([\w:-]*)\s*(.*)$/),
                            j = i[1] + f.eventNamespace,
                            k = i[2];
                        k ? e.on(j, k, h) : c.on(j, h) }) }, _off: function(b, c) { c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.off(c).off(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get()) }, _delay: function(a, b) {
                    function c() { return ("string" == typeof a ? d[a] : a).apply(d, arguments) } var d = this; return setTimeout(c, b || 0) }, _hoverable: function(b) { this.hoverable = this.hoverable.add(b), this._on(b, { mouseenter: function(b) { this._addClass(a(b.currentTarget), null, "ui-state-hover") }, mouseleave: function(b) { this._removeClass(a(b.currentTarget), null, "ui-state-hover") } }) }, _focusable: function(b) { this.focusable = this.focusable.add(b), this._on(b, { focusin: function(b) { this._addClass(a(b.currentTarget), null, "ui-state-focus") }, focusout: function(b) { this._removeClass(a(b.currentTarget), null, "ui-state-focus") } }) }, _trigger: function(b, c, d) { var e, f, g = this.options[b]; if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                        for (e in f) e in c || (c[e] = f[e]); return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented()) } }, a.each({ show: "fadeIn", hide: "fadeOut" }, function(b, c) { a.Widget.prototype["_" + b] = function(d, e, f) { "string" == typeof e && (e = { effect: e }); var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
                    e = e || {}, "number" == typeof e && (e = { duration: e }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) { a(this)[b](), f && f.call(d[0]), c() }) } }), a.widget,
            function() {
                function b(a, b, c) { return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)] }

                function c(b, c) { return parseInt(a.css(b, c), 10) || 0 }

                function d(b) { var c = b[0]; return 9 === c.nodeType ? { width: b.width(), height: b.height(), offset: { top: 0, left: 0 } } : a.isWindow(c) ? { width: b.width(), height: b.height(), offset: { top: b.scrollTop(), left: b.scrollLeft() } } : c.preventDefault ? { width: 0, height: 0, offset: { top: c.pageY, left: c.pageX } } : { width: b.outerWidth(), height: b.outerHeight(), offset: b.offset() } } var e, f, g = Math.max,
                    h = Math.abs,
                    i = Math.round,
                    j = /left|center|right/,
                    k = /top|center|bottom/,
                    l = /[\+\-]\d+(\.[\d]+)?%?/,
                    m = /^\w+/,
                    n = /%$/,
                    o = a.fn.position;
                f = function() { var b = a("<div>").css("position", "absolute").appendTo("body").offset({ top: 1.5, left: 1.5 }),
                        c = 1.5 === b.offset().top; return b.remove(), f = function() { return c }, c }, a.position = { scrollbarWidth: function() { if (void 0 !== e) return e; var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            f = d.children()[0]; return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), e = b - c }, getScrollInfo: function(b) { var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"),
                            d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"),
                            e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
                            f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight; return { width: f ? a.position.scrollbarWidth() : 0, height: e ? a.position.scrollbarWidth() : 0 } }, getWithinInfo: function(b) { var c = a(b || window),
                            d = a.isWindow(c[0]),
                            e = !!c[0] && 9 === c[0].nodeType,
                            f = !d && !e; return { element: c, isWindow: d, isDocument: e, offset: f ? a(b).offset() : { left: 0, top: 0 }, scrollLeft: c.scrollLeft(), scrollTop: c.scrollTop(), width: c.outerWidth(), height: c.outerHeight() } } }, a.fn.position = function(e) { if (!e || !e.of) return o.apply(this, arguments);
                    e = a.extend({}, e); var n, p, q, r, s, t, u = a(e.of),
                        v = a.position.getWithinInfo(e.within),
                        w = a.position.getScrollInfo(v),
                        x = (e.collision || "flip").split(" "),
                        y = {}; return t = d(u), u[0].preventDefault && (e.at = "left top"), p = t.width, q = t.height, r = t.offset, s = a.extend({}, r), a.each(["my", "at"], function() { var a, b, c = (e[this] || "").split(" ");
                        1 === c.length && (c = j.test(c[0]) ? c.concat(["center"]) : k.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = j.test(c[0]) ? c[0] : "center", c[1] = k.test(c[1]) ? c[1] : "center", a = l.exec(c[0]), b = l.exec(c[1]), y[this] = [a ? a[0] : 0, b ? b[0] : 0], e[this] = [m.exec(c[0])[0], m.exec(c[1])[0]] }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? s.left += p : "center" === e.at[0] && (s.left += p / 2), "bottom" === e.at[1] ? s.top += q : "center" === e.at[1] && (s.top += q / 2), n = b(y.at, p, q), s.left += n[0], s.top += n[1], this.each(function() { var d, j, k = a(this),
                            l = k.outerWidth(),
                            m = k.outerHeight(),
                            o = c(this, "marginLeft"),
                            t = c(this, "marginTop"),
                            z = l + o + c(this, "marginRight") + w.width,
                            A = m + t + c(this, "marginBottom") + w.height,
                            B = a.extend({}, s),
                            C = b(y.my, k.outerWidth(), k.outerHeight()); "right" === e.my[0] ? B.left -= l : "center" === e.my[0] && (B.left -= l / 2), "bottom" === e.my[1] ? B.top -= m : "center" === e.my[1] && (B.top -= m / 2), B.left += C[0], B.top += C[1], f() || (B.left = i(B.left), B.top = i(B.top)), d = { marginLeft: o, marginTop: t }, a.each(["left", "top"], function(b, c) { a.ui.position[x[b]] && a.ui.position[x[b]][c](B, { targetWidth: p, targetHeight: q, elemWidth: l, elemHeight: m, collisionPosition: d, collisionWidth: z, collisionHeight: A, offset: [n[0] + C[0], n[1] + C[1]], my: e.my, at: e.at, within: v, elem: k }) }), e.using && (j = function(a) { var b = r.left - B.left,
                                c = b + p - l,
                                d = r.top - B.top,
                                f = d + q - m,
                                i = { target: { element: u, left: r.left, top: r.top, width: p, height: q }, element: { element: k, left: B.left, top: B.top, width: l, height: m }, horizontal: 0 > c ? "left" : b > 0 ? "right" : "center", vertical: 0 > f ? "top" : d > 0 ? "bottom" : "middle" };
                            l > p && p > h(b + c) && (i.horizontal = "center"), m > q && q > h(d + f) && (i.vertical = "middle"), i.important = g(h(b), h(c)) > g(h(d), h(f)) ? "horizontal" : "vertical", e.using.call(this, a, i) }), k.offset(a.extend(B, { using: j })) }) }, a.ui.position = { fit: { left: function(a, b) { var c, d = b.within,
                                e = d.isWindow ? d.scrollLeft : d.offset.left,
                                f = d.width,
                                h = a.left - b.collisionPosition.marginLeft,
                                i = e - h,
                                j = h + b.collisionWidth - f - e;
                            b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left) }, top: function(a, b) { var c, d = b.within,
                                e = d.isWindow ? d.scrollTop : d.offset.top,
                                f = b.within.height,
                                h = a.top - b.collisionPosition.marginTop,
                                i = e - h,
                                j = h + b.collisionHeight - f - e;
                            b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top) } }, flip: { left: function(a, b) { var c, d, e = b.within,
                                f = e.offset.left + e.scrollLeft,
                                g = e.width,
                                i = e.isWindow ? e.scrollLeft : e.offset.left,
                                j = a.left - b.collisionPosition.marginLeft,
                                k = j - i,
                                l = j + b.collisionWidth - g - i,
                                m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                                n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                                o = -2 * b.offset[0];
                            0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || h(k) > c) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || l > h(d)) && (a.left += m + n + o)) }, top: function(a, b) { var c, d, e = b.within,
                                f = e.offset.top + e.scrollTop,
                                g = e.height,
                                i = e.isWindow ? e.scrollTop : e.offset.top,
                                j = a.top - b.collisionPosition.marginTop,
                                k = j - i,
                                l = j + b.collisionHeight - g - i,
                                m = "top" === b.my[1],
                                n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                                o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                                p = -2 * b.offset[1];
                            0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, (0 > d || h(k) > d) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, (c > 0 || l > h(c)) && (a.top += n + o + p)) } }, flipfit: { left: function() { a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments) }, top: function() { a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments) } } } }(), a.ui.position, a.extend(a.expr[":"], { data: a.expr.createPseudo ? a.expr.createPseudo(function(b) { return function(c) { return !!a.data(c, b) } }) : function(b, c, d) { return !!a.data(b, d[3]) } }), a.fn.extend({ disableSelection: function() { var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.on(a + ".ui-disableSelection", function(a) { a.preventDefault() }) } }(), enableSelection: function() { return this.off(".ui-disableSelection") } }), a.ui.focusable = function(c, d) { var e, f, g, h, i, j = c.nodeName.toLowerCase(); return "area" === j ? (e = c.parentNode, f = e.name, !(!c.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']"), g.length > 0 && g.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(j) ? (h = !c.disabled, h && (i = a(c).closest("fieldset")[0], i && (h = !i.disabled))) : h = "a" === j ? c.href || d : d, h && a(c).is(":visible") && b(a(c))) }, a.extend(a.expr[":"], { focusable: function(b) { return a.ui.focusable(b, null != a.attr(b, "tabindex")) } }), a.ui.focusable, a.fn.form = function() { return "string" == typeof this[0].form ? this.closest("form") : a(this[0].form) }, a.ui.formResetMixin = { _formResetHandler: function() { var b = a(this);
                    setTimeout(function() { var c = b.data("ui-form-reset-instances");
                        a.each(c, function() { this.refresh() }) }) }, _bindFormResetHandler: function() { if (this.form = this.element.form(), this.form.length) { var a = this.form.data("ui-form-reset-instances") || [];
                        a.length || this.form.on("reset.ui-form-reset", this._formResetHandler), a.push(this), this.form.data("ui-form-reset-instances", a) } }, _unbindFormResetHandler: function() { if (this.form.length) { var b = this.form.data("ui-form-reset-instances");
                        b.splice(a.inArray(this, b), 1), b.length ? this.form.data("ui-form-reset-instances", b) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset") } } }, a.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, a.ui.escapeSelector = function() { var a = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g; return function(b) { return b.replace(a, "\\$1") } }(), a.fn.labels = function() { var b, c, d, e, f; return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"), d = this.attr("id"), d && (b = this.eq(0).parents().last(), f = b.add(b.length ? b.siblings() : this.siblings()), c = "label[for='" + a.ui.escapeSelector(d) + "']", e = e.add(f.find(c).addBack(c))), this.pushStack(e)) }, a.fn.scrollParent = function(b) { var c = this.css("position"),
                    d = "absolute" === c,
                    e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    f = this.parents().filter(function() { var b = a(this); return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x")) }).eq(0); return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document) }, a.extend(a.expr[":"], { tabbable: function(b) { var c = a.attr(b, "tabindex"),
                        d = null != c; return (!d || c >= 0) && a.ui.focusable(b, d) } }), a.fn.extend({ uniqueId: function() { var a = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++a) }) } }(), removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id") }) } }), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var j = !1;
        a(document).on("mouseup", function() { j = !1 }), a.widget("ui.mouse", { version: "1.12.0", options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 }, _mouseInit: function() { var b = this;
                this.element.on("mousedown." + this.widgetName, function(a) { return b._mouseDown(a) }).on("click." + this.widgetName, function(c) { return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0 }), this.started = !1 }, _mouseDestroy: function() { this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function(b) { if (!j) { this._mouseMoved = !1, this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b; var c = this,
                        d = 1 === b.which,
                        e = !("string" != typeof this.options.cancel || !b.target.nodeName) && a(b.target).closest(this.options.cancel).length; return !(d && !e && this._mouseCapture(b)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { c.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1, !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) { return c._mouseMove(a) }, this._mouseUpDelegate = function(a) { return c._mouseUp(a) }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), j = !0, !0)) } }, _mouseMove: function(b) { if (this._mouseMoved) { if (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button) return this._mouseUp(b); if (!b.which)
                        if (b.originalEvent.altKey || b.originalEvent.ctrlKey || b.originalEvent.metaKey || b.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(b) } return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted) }, _mouseUp: function(b) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, j = !1, b.preventDefault() }, _mouseDistanceMet: function(a) { return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance }, _mouseDelayMet: function() { return this.mouseDelayMet }, _mouseStart: function() {}, _mouseDrag: function() {}, _mouseStop: function() {}, _mouseCapture: function() { return !0 } }), a.ui.plugin = { add: function(b, c, d) { var e, f = a.ui[b].prototype; for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]]) }, call: function(a, b, c, d) { var e, f = a.plugins[b]; if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                    for (e = 0; f.length > e; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c) } }, a.ui.safeActiveElement = function(a) { var b; try { b = a.activeElement } catch (c) { b = a.body } return b || (b = a.body), b.nodeName || (b = a.body), b }, a.ui.safeBlur = function(b) { b && "body" !== b.nodeName.toLowerCase() && a(b).trigger("blur") }, a.widget("ui.draggable", a.ui.mouse, { version: "1.12.0", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null }, _create: function() { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit() }, _setOption: function(a, b) { this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName()) }, _destroy: function() { return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy()) }, _mouseCapture: function(b) { var c = this.options; return this._blurActiveElement(b), !(this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(b), !!this.handle && (this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix), !0)) }, _blockFrames: function(b) { this.iframeBlocks = this.document.find(b).map(function() { var b = a(this); return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0] }) }, _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _blurActiveElement: function(b) { var c = a.ui.safeActiveElement(this.document[0]),
                    d = a(b.target);
                this._getHandle(b) && d.closest(c).length || a.ui.safeBlur(c) }, _mouseStart: function(b) { var c = this.options; return this.helper = this._createHelper(b), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() { return "fixed" === a(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(b), this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0) }, _refreshOffsets: function(a) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: a.pageX - this.offset.left, top: a.pageY - this.offset.top } }, _mouseDrag: function(b, c) { if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) { var d = this._uiHash(); if (this._trigger("drag", b, d) === !1) return this._mouseUp(new a.Event("mouseup", b)), !1;
                    this.position = d.position } return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1 }, _mouseStop: function(b) { var c = this,
                    d = !1; return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() { c._trigger("stop", b) !== !1 && c._clear() }) : this._trigger("stop", b) !== !1 && this._clear(), !1 }, _mouseUp: function(b) { return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), this.handleElement.is(b.target) && this.element.trigger("focus"), a.ui.mouse.prototype._mouseUp.call(this, b) }, cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new a.Event("mouseup", { target: this.element[0] })) : this._clear(), this }, _getHandle: function(b) { return !this.options.handle || !!a(b.target).closest(this.element.find(this.options.handle)).length }, _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle") }, _removeHandleClassName: function() { this._removeClass(this.handleElement, "ui-draggable-handle") }, _createHelper: function(b) { var c = this.options,
                    d = a.isFunction(c.helper),
                    e = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element; return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d && e[0] === this.element[0] && this._setPositionRelative(), e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"), e }, _setPositionRelative: function() { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") }, _adjustOffsetFromHelper: function(b) { "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top) }, _isRootNode: function(a) { return /(html|body)/i.test(a.tagName) || a === this.document[0] }, _getParentOffset: function() { var b = this.offsetParent.offset(),
                    c = this.document[0]; return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = { top: 0, left: 0 }), { top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function() { if ("relative" !== this.cssPosition) return { top: 0, left: 0 }; var a = this.element.position(),
                    b = this._isRootNode(this.scrollParent[0]); return { top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()), left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft()) } }, _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } }, _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function() { var b, c, d, e = this.options,
                    f = this.document[0]; return this.relativeContainer = null, e.containment ? "window" === e.containment ? void(this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void(this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void(this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void(d && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c))) : void(this.containment = null) }, _convertPositionTo: function(a, b) { b || (b = this.position); var c = "absolute" === a ? 1 : -1,
                    d = this._isRootNode(this.scrollParent[0]); return { top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c, left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c } }, _generatePosition: function(a, b) { var c, d, e, f, g = this.options,
                    h = this._isRootNode(this.scrollParent[0]),
                    i = a.pageX,
                    j = a.pageY; return h && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), { top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top), left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left) } }, _clear: function() { this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() }, _trigger: function(b, c, d) { return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d, this], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d) }, plugins: {}, _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } } }), a.ui.plugin.add("draggable", "connectToSortable", {
            start: function(b, c, d) { var e = a.extend({}, c, { item: d.element });
                d.sortables = [], a(d.options.connectToSortable).each(function() { var c = a(this).sortable("instance");
                    c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e)) }) },
            stop: function(b, c, d) { var e = a.extend({}, c, { item: d.element });
                d.cancelHelperRemoval = !1, a.each(d.sortables, function() { var a = this;
                    a.isOver ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, a._storedCSS = { position: a.placeholder.css("position"), top: a.placeholder.css("top"), left: a.placeholder.css("left") }, a._mouseStop(b), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, a._trigger("deactivate", b, e)) }) },
            drag: function(b, c, d) {
                a.each(d.sortables, function() {
                    var e = !1,
                        f = this;
                    f.positionAbs = d.positionAbs, f.helperProportions = d.helperProportions, f.offset.click = d.offset.click, f._intersectsWith(f.containerCache) && (e = !0,
                        a.each(d.sortables, function() { return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), e })), e ? (f.isOver || (f.isOver = 1, d._parent = c.helper.parent(), f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function() { return c.helper[0] }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function() { this.refreshPositions() }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), c.helper.appendTo(d._parent), d._refreshOffsets(b), c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, a.each(d.sortables, function() { this.refreshPositions() }))
                })
            }
        }), a.ui.plugin.add("draggable", "cursor", { start: function(b, c, d) { var e = a("body"),
                    f = d.options;
                e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor) }, stop: function(b, c, d) { var e = d.options;
                e._cursor && a("body").css("cursor", e._cursor) } }), a.ui.plugin.add("draggable", "opacity", { start: function(b, c, d) { var e = a(c.helper),
                    f = d.options;
                e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity) }, stop: function(b, c, d) { var e = d.options;
                e._opacity && a(c.helper).css("opacity", e._opacity) } }), a.ui.plugin.add("draggable", "scroll", { start: function(a, b, c) { c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset()) }, drag: function(b, c, d) { var e = d.options,
                    f = !1,
                    g = d.scrollParentNotHidden[0],
                    h = d.document[0];
                g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))), f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b) } }), a.ui.plugin.add("draggable", "snap", { start: function(b, c, d) { var e = d.options;
                d.snapElements = [], a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function() { var b = a(this),
                        c = b.offset();
                    this !== d.element[0] && d.snapElements.push({ item: this, width: b.outerWidth(), height: b.outerHeight(), top: c.top, left: c.left }) }) }, drag: function(b, c, d) { var e, f, g, h, i, j, k, l, m, n, o = d.options,
                    p = o.snapTolerance,
                    q = c.offset.left,
                    r = q + d.helperProportions.width,
                    s = c.offset.top,
                    t = s + d.helperProportions.height; for (m = d.snapElements.length - 1; m >= 0; m--) i = d.snapElements[m].left - d.margins.left, j = i + d.snapElements[m].width, k = d.snapElements[m].top - d.margins.top, l = k + d.snapElements[m].height, i - p > r || q > j + p || k - p > t || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), { snapItem: d.snapElements[m].item })), d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = p >= Math.abs(k - t), f = p >= Math.abs(l - s), g = p >= Math.abs(i - r), h = p >= Math.abs(j - q), e && (c.position.top = d._convertPositionTo("relative", { top: k - d.helperProportions.height, left: 0 }).top), f && (c.position.top = d._convertPositionTo("relative", { top: l, left: 0 }).top), g && (c.position.left = d._convertPositionTo("relative", { top: 0, left: i - d.helperProportions.width }).left), h && (c.position.left = d._convertPositionTo("relative", { top: 0, left: j }).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = p >= Math.abs(k - s), f = p >= Math.abs(l - t), g = p >= Math.abs(i - q), h = p >= Math.abs(j - r), e && (c.position.top = d._convertPositionTo("relative", { top: k, left: 0 }).top), f && (c.position.top = d._convertPositionTo("relative", { top: l - d.helperProportions.height, left: 0 }).top), g && (c.position.left = d._convertPositionTo("relative", { top: 0, left: i }).left), h && (c.position.left = d._convertPositionTo("relative", { top: 0, left: j - d.helperProportions.width }).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), { snapItem: d.snapElements[m].item })), d.snapElements[m].snapping = e || f || g || h || n) } }), a.ui.plugin.add("draggable", "stack", { start: function(b, c, d) { var e, f = d.options,
                    g = a.makeArray(a(f.stack)).sort(function(b, c) { return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0) });
                g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function(b) { a(this).css("zIndex", e + b) }), this.css("zIndex", e + g.length)) } }), a.ui.plugin.add("draggable", "zIndex", { start: function(b, c, d) { var e = a(c.helper),
                    f = d.options;
                e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex) }, stop: function(b, c, d) { var e = d.options;
                e._zIndex && a(c.helper).css("zIndex", e._zIndex) } }), a.ui.draggable, a.widget("ui.droppable", { version: "1.12.0", widgetEventPrefix: "drop", options: { accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function() { var b, c = this.options,
                    d = c.accept;
                this.isover = !1, this.isout = !0, this.accept = a.isFunction(d) ? d : function(a) { return a.is(d) }, this.proportions = function() { return arguments.length ? void(b = arguments[0]) : b ? b : b = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight } }, this._addToManager(c.scope), c.addClasses && this._addClass("ui-droppable") }, _addToManager: function(b) { a.ui.ddmanager.droppables[b] = a.ui.ddmanager.droppables[b] || [], a.ui.ddmanager.droppables[b].push(this) }, _splice: function(a) { for (var b = 0; a.length > b; b++) a[b] === this && a.splice(b, 1) }, _destroy: function() { var b = a.ui.ddmanager.droppables[this.options.scope];
                this._splice(b) }, _setOption: function(b, c) { if ("accept" === b) this.accept = a.isFunction(c) ? c : function(a) { return a.is(c) };
                else if ("scope" === b) { var d = a.ui.ddmanager.droppables[this.options.scope];
                    this._splice(d), this._addToManager(c) } this._super(b, c) }, _activate: function(b) { var c = a.ui.ddmanager.current;
                this._addActiveClass(), c && this._trigger("activate", b, this.ui(c)) }, _deactivate: function(b) { var c = a.ui.ddmanager.current;
                this._removeActiveClass(), c && this._trigger("deactivate", b, this.ui(c)) }, _over: function(b) { var c = a.ui.ddmanager.current;
                c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this._addHoverClass(), this._trigger("over", b, this.ui(c))) }, _out: function(b) { var c = a.ui.ddmanager.current;
                c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this._removeHoverClass(), this._trigger("out", b, this.ui(c))) }, _drop: function(b, c) { var d = c || a.ui.ddmanager.current,
                    e = !1; return !(!d || (d.currentItem || d.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() { var c = a(this).droppable("instance"); return c.options.greedy && !c.options.disabled && c.options.scope === d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && k(d, a.extend(c, { offset: c.element.offset() }), c.options.tolerance, b) ? (e = !0, !1) : void 0 }), !e && (!!this.accept.call(this.element[0], d.currentItem || d.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", b, this.ui(d)), this.element))) }, ui: function(a) { return { draggable: a.currentItem || a.element, helper: a.helper, position: a.position, offset: a.positionAbs } }, _addHoverClass: function() { this._addClass("ui-droppable-hover") }, _removeHoverClass: function() { this._removeClass("ui-droppable-hover") }, _addActiveClass: function() { this._addClass("ui-droppable-active") }, _removeActiveClass: function() { this._removeClass("ui-droppable-active") } });
        var k = a.ui.intersect = function() {
            function a(a, b, c) { return a >= b && b + c > a } return function(b, c, d, e) { if (!c.offset) return !1; var f = (b.positionAbs || b.position.absolute).left + b.margins.left,
                    g = (b.positionAbs || b.position.absolute).top + b.margins.top,
                    h = f + b.helperProportions.width,
                    i = g + b.helperProportions.height,
                    j = c.offset.left,
                    k = c.offset.top,
                    l = j + c.proportions().width,
                    m = k + c.proportions().height; switch (d) {
                    case "fit":
                        return f >= j && l >= h && g >= k && m >= i;
                    case "intersect":
                        return f + b.helperProportions.width / 2 > j && l > h - b.helperProportions.width / 2 && g + b.helperProportions.height / 2 > k && m > i - b.helperProportions.height / 2;
                    case "pointer":
                        return a(e.pageY, k, c.proportions().height) && a(e.pageX, j, c.proportions().width);
                    case "touch":
                        return (g >= k && m >= g || i >= k && m >= i || k > g && i > m) && (f >= j && l >= f || h >= j && l >= h || j > f && h > l);
                    default:
                        return !1 } } }();
        a.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function(b, c) { var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [],
                    g = c ? c.type : null,
                    h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
                a: for (d = 0; f.length > d; d++)
                    if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) { for (e = 0; h.length > e; e++)
                            if (h[e] === f[d].element[0]) { f[d].proportions().height = 0; continue a } f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions({ width: f[d].element[0].offsetWidth, height: f[d].element[0].offsetHeight })) } }, drop: function(b, c) { var d = !1; return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function() { this.options && (!this.options.disabled && this.visible && k(b, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c))) }), d }, dragStart: function(b, c) { b.element.parentsUntil("body").on("scroll.droppable", function() { b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c) }) }, drag: function(b, c) { b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() { if (!this.options.disabled && !this.greedyChild && this.visible) { var d, e, f, g = k(b, this, this.options.tolerance, c),
                            h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                        h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() { return a(this).droppable("instance").options.scope === e }), f.length && (d = a(f[0]).droppable("instance"), d.greedyChild = "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c))) } }) }, dragStop: function(b, c) { b.element.parentsUntil("body").off("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c) } }, a.uiBackCompat !== !1 && a.widget("ui.droppable", a.ui.droppable, { options: { hoverClass: !1, activeClass: !1 }, _addActiveClass: function() { this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass) }, _removeActiveClass: function() { this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass) }, _addHoverClass: function() { this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass) }, _removeHoverClass: function() { this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass) } }), a.ui.droppable, a.widget("ui.resizable", a.ui.mouse, { version: "1.12.0", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function(a) { return parseFloat(a) || 0 }, _isNumber: function(a) { return !isNaN(parseFloat(a)) }, _hasScroll: function(b, c) { if ("hidden" === a(b).css("overflow")) return !1; var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                    e = !1; return b[d] > 0 || (b[d] = 1, e = b[d] > 0, b[d] = 0, e) }, _create: function() { var b, c = this.options,
                    d = this;
                this._addClass("ui-resizable"), a.extend(this, { _aspectRatio: !!c.aspectRatio, aspectRatio: c.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: c.helper || c.ghost || c.animate ? c.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, b = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(b), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css(b), this._proportionallyResize()), this._setupHandles(), c.autoHide && a(this.element).on("mouseenter", function() { c.disabled || (d._removeClass("ui-resizable-autohide"), d._handles.show()) }).on("mouseleave", function() { c.disabled || d.resizing || (d._addClass("ui-resizable-autohide"), d._handles.hide()) }), this._mouseInit() }, _destroy: function() { this._mouseDestroy(); var b, c = function(b) { a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({ position: b.css("position"), width: b.outerWidth(), height: b.outerHeight(), top: b.css("top"), left: b.css("left") }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this }, _setOption: function(a, b) { switch (this._super(a, b), a) {
                    case "handles":
                        this._removeHandles(), this._setupHandles() } }, _setupHandles: function() { var b, c, d, e, f, g = this.options,
                    h = this; if (this.handles = g.handles || (a(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = a(), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), d = this.handles.split(","), this.handles = {}, c = 0; d.length > c; c++) b = a.trim(d[c]), e = "ui-resizable-" + b, f = a("<div>"), this._addClass(f, "ui-resizable-handle " + e), f.css({ zIndex: g.zIndex }), this.handles[b] = ".ui-resizable-" + b, this.element.append(f);
                this._renderAxis = function(b) { var c, d, e, f;
                    b = b || this.element; for (c in this.handles) this.handles[c].constructor === String ? this.handles[c] = this.element.children(this.handles[c]).first().show() : (this.handles[c].jquery || this.handles[c].nodeType) && (this.handles[c] = a(this.handles[c]), this._on(this.handles[c], { mousedown: h._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), this._handles = this._handles.add(this.handles[c]) }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() { h.resizing || (this.className && (f = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), h.axis = f && f[1] ? f[1] : "se") }), g.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide")) }, _removeHandles: function() { this._handles.remove() }, _mouseCapture: function(b) { var c, d, e = !1; for (c in this.handles) d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0); return !this.options.disabled && e }, _mouseStart: function(b) { var c, d, e, f = this.options,
                    g = this.element; return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), d = this._num(this.helper.css("top")), f.containment && (c += a(f.containment).scrollLeft() || 0, d += a(f.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: c, top: d }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: g.width(), height: g.height() }, this.originalSize = this._helper ? { width: g.outerWidth(), height: g.outerHeight() } : { width: g.width(), height: g.height() }, this.sizeDiff = { width: g.outerWidth() - g.width(), height: g.outerHeight() - g.height() }, this.originalPosition = { left: c, top: d }, this.originalMousePosition = { left: b.pageX, top: b.pageY }, this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), this._addClass("ui-resizable-resizing"), this._propagate("start", b), !0 }, _mouseDrag: function(b) { var c, d, e = this.originalMousePosition,
                    f = this.axis,
                    g = b.pageX - e.left || 0,
                    h = b.pageY - e.top || 0,
                    i = this._change[f]; return this._updatePrevProperties(), !!i && (c = i.apply(this, [b, g, h]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", b, this.ui()), this._applyChanges()), !1) }, _mouseStop: function(b) { this.resizing = !1; var c, d, e, f, g, h, i, j = this.options,
                    k = this; return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && this._hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = { width: k.helper.width() - f, height: k.helper.height() - e }, h = parseFloat(k.element.css("left")) + (k.position.left - k.originalPosition.left) || null, i = parseFloat(k.element.css("top")) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, { top: i, left: h })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1 }, _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } }, _applyChanges: function() { var a = {}; return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"), this.helper.css(a), a }, _updateVirtualBoundaries: function(a) { var b, c, d, e, f, g = this.options;
                f = { minWidth: this._isNumber(g.minWidth) ? g.minWidth : 0, maxWidth: this._isNumber(g.maxWidth) ? g.maxWidth : 1 / 0, minHeight: this._isNumber(g.minHeight) ? g.minHeight : 0, maxHeight: this._isNumber(g.maxHeight) ? g.maxHeight : 1 / 0 }, (this._aspectRatio || a) && (b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, c = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), d > f.minHeight && (f.minHeight = d), f.maxWidth > c && (f.maxWidth = c), f.maxHeight > e && (f.maxHeight = e)), this._vBoundaries = f }, _updateCache: function(a) { this.offset = this.helper.offset(), this._isNumber(a.left) && (this.position.left = a.left), this._isNumber(a.top) && (this.position.top = a.top), this._isNumber(a.height) && (this.size.height = a.height), this._isNumber(a.width) && (this.size.width = a.width) }, _updateRatio: function(a) { var b = this.position,
                    c = this.size,
                    d = this.axis; return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === d && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width)), a }, _respectSize: function(a) { var b = this._vBoundaries,
                    c = this.axis,
                    d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width,
                    e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height,
                    f = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width,
                    g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height,
                    h = this.originalPosition.left + this.originalSize.width,
                    i = this.originalPosition.top + this.originalSize.height,
                    j = /sw|nw|w/.test(c),
                    k = /nw|ne|n/.test(c); return f && (a.width = b.minWidth), g && (a.height = b.minHeight), d && (a.width = b.maxWidth), e && (a.height = b.maxHeight), f && j && (a.left = h - b.minWidth), d && j && (a.left = h - b.maxWidth), g && k && (a.top = i - b.minHeight), e && k && (a.top = i - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a }, _getPaddingPlusBorderDimensions: function(a) { for (var b = 0, c = [], d = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")], e = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; 4 > b; b++) c[b] = parseFloat(d[b]) || 0, c[b] += parseFloat(e[b]) || 0; return { height: c[0] + c[2], width: c[1] + c[3] } }, _proportionallyResize: function() { if (this._proportionallyResizeElements.length)
                    for (var a, b = 0, c = this.helper || this.element; this._proportionallyResizeElements.length > b; b++) a = this._proportionallyResizeElements[b], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({ height: c.height() - this.outerDimensions.height || 0, width: c.width() - this.outerDimensions.width || 0 }) }, _renderProxy: function() { var b = this.element,
                    c = this.options;
                this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++c.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element }, _change: { e: function(a, b) { return { width: this.originalSize.width + b } }, w: function(a, b) { var c = this.originalSize,
                        d = this.originalPosition; return { left: d.left + b, width: c.width - b } }, n: function(a, b, c) { var d = this.originalSize,
                        e = this.originalPosition; return { top: e.top + c, height: d.height - c } }, s: function(a, b, c) { return { height: this.originalSize.height + c } }, se: function(b, c, d) { return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d])) }, sw: function(b, c, d) { return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d])) }, ne: function(b, c, d) { return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d])) }, nw: function(b, c, d) { return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d])) } }, _propagate: function(b, c) { a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui()) }, plugins: {}, ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } } }), a.ui.plugin.add("resizable", "animate", { stop: function(b) { var c = a(this).resizable("instance"),
                    d = c.options,
                    e = c._proportionallyResizeElements,
                    f = e.length && /textarea/i.test(e[0].nodeName),
                    g = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
                    h = f ? 0 : c.sizeDiff.width,
                    i = { width: c.size.width - h, height: c.size.height - g },
                    j = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null,
                    k = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null;
                c.element.animate(a.extend(i, k && j ? { top: k, left: j } : {}), { duration: d.animateDuration, easing: d.animateEasing, step: function() { var d = { width: parseFloat(c.element.css("width")), height: parseFloat(c.element.css("height")), top: parseFloat(c.element.css("top")), left: parseFloat(c.element.css("left")) };
                        e && e.length && a(e[0]).css({ width: d.width, height: d.height }), c._updateCache(d), c._propagate("resize", b) } }) } }), a.ui.plugin.add("resizable", "containment", { start: function() { var b, c, d, e, f, g, h, i = a(this).resizable("instance"),
                    j = i.options,
                    k = i.element,
                    l = j.containment,
                    m = l instanceof a ? l.get(0) : /parent/.test(l) ? k.parent().get(0) : l;
                m && (i.containerElement = a(m), /document/.test(l) || l === document ? (i.containerOffset = { left: 0, top: 0 }, i.containerPosition = { left: 0, top: 0 }, i.parentData = { element: a(document), left: 0, top: 0, width: a(document).width(), height: a(document).height() || document.body.parentNode.scrollHeight }) : (b = a(m), c = [], a(["Top", "Right", "Left", "Bottom"]).each(function(a, d) { c[a] = i._num(b.css("padding" + d)) }), i.containerOffset = b.offset(), i.containerPosition = b.position(), i.containerSize = { height: b.innerHeight() - c[3], width: b.innerWidth() - c[1] }, d = i.containerOffset, e = i.containerSize.height, f = i.containerSize.width, g = i._hasScroll(m, "left") ? m.scrollWidth : f, h = i._hasScroll(m) ? m.scrollHeight : e, i.parentData = { element: m, left: d.left, top: d.top, width: g, height: h })) }, resize: function(b) { var c, d, e, f, g = a(this).resizable("instance"),
                    h = g.options,
                    i = g.containerOffset,
                    j = g.position,
                    k = g._aspectRatio || b.shiftKey,
                    l = { top: 0, left: 0 },
                    m = g.containerElement,
                    n = !0;
                m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio, n = !1), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio, n = !1), g.position.top = g._helper ? i.top : 0), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f ? (g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top) : (g.offset.left = g.element.offset().left, g.offset.top = g.element.offset().top), c = Math.abs(g.sizeDiff.width + (g._helper ? g.offset.left - l.left : g.offset.left - i.left)), d = Math.abs(g.sizeDiff.height + (g._helper ? g.offset.top - l.top : g.offset.top - i.top)), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio, n = !1)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio, n = !1)), n || (g.position.left = g.prevPosition.left, g.position.top = g.prevPosition.top, g.size.width = g.prevSize.width, g.size.height = g.prevSize.height) }, stop: function() { var b = a(this).resizable("instance"),
                    c = b.options,
                    d = b.containerOffset,
                    e = b.containerPosition,
                    f = b.containerElement,
                    g = a(b.helper),
                    h = g.offset(),
                    i = g.outerWidth() - b.sizeDiff.width,
                    j = g.outerHeight() - b.sizeDiff.height;
                b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({ left: h.left - e.left - d.left, width: i, height: j }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({ left: h.left - e.left - d.left, width: i, height: j }) } }), a.ui.plugin.add("resizable", "alsoResize", { start: function() { var b = a(this).resizable("instance"),
                    c = b.options;
                a(c.alsoResize).each(function() { var b = a(this);
                    b.data("ui-resizable-alsoresize", { width: parseFloat(b.width()), height: parseFloat(b.height()), left: parseFloat(b.css("left")), top: parseFloat(b.css("top")) }) }) }, resize: function(b, c) { var d = a(this).resizable("instance"),
                    e = d.options,
                    f = d.originalSize,
                    g = d.originalPosition,
                    h = { height: d.size.height - f.height || 0, width: d.size.width - f.width || 0, top: d.position.top - g.top || 0, left: d.position.left - g.left || 0 };
                a(e.alsoResize).each(function() { var b = a(this),
                        d = a(this).data("ui-resizable-alsoresize"),
                        e = {},
                        f = b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    a.each(f, function(a, b) { var c = (d[b] || 0) + (h[b] || 0);
                        c && c >= 0 && (e[b] = c || null) }), b.css(e) }) }, stop: function() { a(this).removeData("ui-resizable-alsoresize") } }), a.ui.plugin.add("resizable", "ghost", { start: function() { var b = a(this).resizable("instance"),
                    c = b.size;
                b.ghost = b.originalElement.clone(), b.ghost.css({ opacity: .25, display: "block", position: "relative", height: c.height, width: c.width, margin: 0, left: 0, top: 0 }), b._addClass(b.ghost, "ui-resizable-ghost"), a.uiBackCompat !== !1 && "string" == typeof b.options.ghost && b.ghost.addClass(this.options.ghost), b.ghost.appendTo(b.helper) }, resize: function() { var b = a(this).resizable("instance");
                b.ghost && b.ghost.css({ position: "relative", height: b.size.height, width: b.size.width }) }, stop: function() { var b = a(this).resizable("instance");
                b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0)) } }), a.ui.plugin.add("resizable", "grid", { resize: function() { var b, c = a(this).resizable("instance"),
                    d = c.options,
                    e = c.size,
                    f = c.originalSize,
                    g = c.originalPosition,
                    h = c.axis,
                    i = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid,
                    j = i[0] || 1,
                    k = i[1] || 1,
                    l = Math.round((e.width - f.width) / j) * j,
                    m = Math.round((e.height - f.height) / k) * k,
                    n = f.width + l,
                    o = f.height + m,
                    p = d.maxWidth && n > d.maxWidth,
                    q = d.maxHeight && o > d.maxHeight,
                    r = d.minWidth && d.minWidth > n,
                    s = d.minHeight && d.minHeight > o;
                d.grid = i, r && (n += j), s && (o += k), p && (n -= j), q && (o -= k), /^(se|s|e)$/.test(h) ? (c.size.width = n, c.size.height = o) : /^(ne)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.top = g.top - m) : /^(sw)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.left = g.left - l) : ((0 >= o - k || 0 >= n - j) && (b = c._getPaddingPlusBorderDimensions(this)), o - k > 0 ? (c.size.height = o, c.position.top = g.top - m) : (o = k - b.height, c.size.height = o, c.position.top = g.top + f.height - o), n - j > 0 ? (c.size.width = n, c.position.left = g.left - l) : (n = j - b.width, c.size.width = n, c.position.left = g.left + f.width - n)) } }), a.ui.resizable, a.widget("ui.selectable", a.ui.mouse, {
            version: "1.12.0",
            options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null },
            _create: function() { var b = this;
                this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() { b.elementPos = a(b.element[0]).offset(), b.selectees = a(b.options.filter, b.element[0]), b._addClass(b.selectees, "ui-selectee"), b.selectees.each(function() { var c = a(this),
                            d = c.offset(),
                            e = { left: d.left - b.elementPos.left, top: d.top - b.elementPos.top };
                        a.data(this, "selectable-item", { element: this, $element: c, left: e.left, top: e.top, right: e.left + c.outerWidth(), bottom: e.top + c.outerHeight(), startselected: !1, selected: c.hasClass("ui-selected"), selecting: c.hasClass("ui-selecting"), unselecting: c.hasClass("ui-unselecting") }) }) }, this.refresh(), this._mouseInit(), this.helper = a("<div>"), this._addClass(this.helper, "ui-selectable-helper") },
            _destroy: function() { this.selectees.removeData("selectable-item"), this._mouseDestroy() },
            _mouseStart: function(b) {
                var c = this,
                    d = this.options;
                this.opos = [b.pageX, b.pageY], this.elementPos = a(this.element[0]).offset(), this.options.disabled || (this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({ left: b.pageX, top: b.pageY, width: 0, height: 0 }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var d = a.data(this, "selectable-item");
                    d.startselected = !0, b.metaKey || b.ctrlKey || (c._removeClass(d.$element, "ui-selected"),
                        d.selected = !1, c._addClass(d.$element, "ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, { unselecting: d.element }))
                }), a(b.target).parents().addBack().each(function() { var d, e = a.data(this, "selectable-item"); return e ? (d = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), c._removeClass(e.$element, d ? "ui-unselecting" : "ui-selected")._addClass(e.$element, d ? "ui-selecting" : "ui-unselecting"), e.unselecting = !d, e.selecting = d, e.selected = d, d ? c._trigger("selecting", b, { selecting: e.element }) : c._trigger("unselecting", b, { unselecting: e.element }), !1) : void 0 }))
            },
            _mouseDrag: function(b) { if (this.dragged = !0, !this.options.disabled) { var c, d = this,
                        e = this.options,
                        f = this.opos[0],
                        g = this.opos[1],
                        h = b.pageX,
                        i = b.pageY; return f > h && (c = h, h = f, f = c), g > i && (c = i, i = g, g = c), this.helper.css({ left: f, top: g, width: h - f, height: i - g }), this.selectees.each(function() { var c = a.data(this, "selectable-item"),
                            j = !1,
                            k = {};
                        c && c.element !== d.element[0] && (k.left = c.left + d.elementPos.left, k.right = c.right + d.elementPos.left, k.top = c.top + d.elementPos.top, k.bottom = c.bottom + d.elementPos.top, "touch" === e.tolerance ? j = !(k.left > h || f > k.right || k.top > i || g > k.bottom) : "fit" === e.tolerance && (j = k.left > f && h > k.right && k.top > g && i > k.bottom), j ? (c.selected && (d._removeClass(c.$element, "ui-selected"), c.selected = !1), c.unselecting && (d._removeClass(c.$element, "ui-unselecting"), c.unselecting = !1), c.selecting || (d._addClass(c.$element, "ui-selecting"), c.selecting = !0, d._trigger("selecting", b, { selecting: c.element }))) : (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (d._removeClass(c.$element, "ui-selecting"), c.selecting = !1, d._addClass(c.$element, "ui-selected"), c.selected = !0) : (d._removeClass(c.$element, "ui-selecting"), c.selecting = !1, c.startselected && (d._addClass(c.$element, "ui-unselecting"), c.unselecting = !0), d._trigger("unselecting", b, { unselecting: c.element }))), c.selected && (b.metaKey || b.ctrlKey || c.startselected || (d._removeClass(c.$element, "ui-selected"), c.selected = !1, d._addClass(c.$element, "ui-unselecting"), c.unselecting = !0, d._trigger("unselecting", b, { unselecting: c.element }))))) }), !1 } },
            _mouseStop: function(b) { var c = this; return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function() { var d = a.data(this, "selectable-item");
                    c._removeClass(d.$element, "ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, { unselected: d.element }) }), a(".ui-selecting", this.element[0]).each(function() { var d = a.data(this, "selectable-item");
                    c._removeClass(d.$element, "ui-selecting")._addClass(d.$element, "ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, { selected: d.element }) }), this._trigger("stop", b), this.helper.remove(), !1 }
        }), a.widget("ui.sortable", a.ui.mouse, { version: "1.12.0", widgetEventPrefix: "sort", ready: !1, options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function(a, b, c) { return a >= b && b + c > a }, _isFloating: function(a) { return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display")) }, _create: function() { this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 }, _setOption: function(a, b) { this._super(a, b), "handle" === a && this._setHandleClassName() }, _setHandleClassName: function() { var b = this;
                this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), a.each(this.items, function() { b._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle") }) }, _destroy: function() { this._mouseDestroy(); for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item"); return this }, _mouseCapture: function(b, c) { var d = null,
                    e = !1,
                    f = this; return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(b), a(b.target).parents().each(function() { return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0 }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), !!d && (!(this.options.handle && !c && (a(this.options.handle, d).find("*").addBack().each(function() { this === b.target && (e = !0) }), !e)) && (this.currentItem = d, this._removeCurrentsFromItems(), !0)))) }, _mouseStart: function(b, c, d) { var e, f, g = this.options; if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, a.extend(this.offset, { click: { left: b.pageX - this.offset.left, top: b.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), g.containment && this._setContainment(), g.cursor && "auto" !== g.cursor && (f = this.document.find("body"), this.storedCursor = f.css("cursor"), f.css("cursor", g.cursor), this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f)), g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", g.opacity)), g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", g.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)
                    for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this)); return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(b), !0 }, _mouseDrag: function(b) { var c, d, e, f, g = this.options,
                    h = !1; for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - this.document.scrollTop() < g.scrollSensitivity ? h = this.document.scrollTop(this.document.scrollTop() - g.scrollSpeed) : this.window.height() - (b.pageY - this.document.scrollTop()) < g.scrollSensitivity && (h = this.document.scrollTop(this.document.scrollTop() + g.scrollSpeed)), b.pageX - this.document.scrollLeft() < g.scrollSensitivity ? h = this.document.scrollLeft(this.document.scrollLeft() - g.scrollSpeed) : this.window.width() - (b.pageX - this.document.scrollLeft()) < g.scrollSensitivity && (h = this.document.scrollLeft(this.document.scrollLeft() + g.scrollSpeed))), h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--)
                    if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" !== this.options.type || !a.contains(this.element[0], e))) { if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                        this._rearrange(b, d), this._trigger("change", b, this._uiHash()); break } return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1 }, _mouseStop: function(b, c) { if (b) { if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) { var d = this,
                            e = this.placeholder.offset(),
                            f = this.options.axis,
                            g = {};
                        f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() { d._clear(b) }) } else this._clear(b, c); return !1 } }, cancel: function() { if (this.dragging) { this._mouseUp({ target: null }), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show(); for (var b = this.containers.length - 1; b >= 0; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this }, serialize: function(b) { var c = this._getItemsAsjQuery(b && b.connected),
                    d = []; return b = b || {}, a(c).each(function() { var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                    c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2])) }), !d.length && b.key && d.push(b.key + "="), d.join("&") }, toArray: function(b) { var c = this._getItemsAsjQuery(b && b.connected),
                    d = []; return b = b || {}, c.each(function() { d.push(a(b.item || this).attr(b.attribute || "id") || "") }), d }, _intersectsWith: function(a) { var b = this.positionAbs.left,
                    c = b + this.helperProportions.width,
                    d = this.positionAbs.top,
                    e = d + this.helperProportions.height,
                    f = a.left,
                    g = f + a.width,
                    h = a.top,
                    i = h + a.height,
                    j = this.offset.click.top,
                    k = this.offset.click.left,
                    l = "x" === this.options.axis || d + j > h && i > d + j,
                    m = "y" === this.options.axis || b + k > f && g > b + k,
                    n = l && m; return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? n : b + this.helperProportions.width / 2 > f && g > c - this.helperProportions.width / 2 && d + this.helperProportions.height / 2 > h && i > e - this.helperProportions.height / 2 }, _intersectsWithPointer: function(a) { var b, c, d = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height),
                    e = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width),
                    f = d && e; return !!f && (b = this._getDragVerticalDirection(), c = this._getDragHorizontalDirection(), this.floating ? "right" === c || "down" === b ? 2 : 1 : b && ("down" === b ? 2 : 1)) }, _intersectsWithSides: function(a) { var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height),
                    c = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width),
                    d = this._getDragVerticalDirection(),
                    e = this._getDragHorizontalDirection(); return this.floating && e ? "right" === e && c || "left" === e && !c : d && ("down" === d && b || "up" === d && !b) }, _getDragVerticalDirection: function() { var a = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== a && (a > 0 ? "down" : "up") }, _getDragHorizontalDirection: function() { var a = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== a && (a > 0 ? "right" : "left") }, refresh: function(a) { return this._refreshItems(a), this._setHandleClassName(), this.refreshPositions(), this }, _connectWith: function() { var a = this.options; return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith }, _getItemsAsjQuery: function(b) {
                function c() { h.push(this) } var d, e, f, g, h = [],
                    i = [],
                    j = this._connectWith(); if (j && b)
                    for (d = j.length - 1; d >= 0; d--)
                        for (f = a(j[d], this.document[0]), e = f.length - 1; e >= 0; e--) g = a.data(f[e], this.widgetFullName), g && g !== this && !g.options.disabled && i.push([a.isFunction(g.options.items) ? g.options.items.call(g.element) : a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g]); for (i.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), d = i.length - 1; d >= 0; d--) i[d][0].each(c); return a(h) }, _removeCurrentsFromItems: function() { var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = a.grep(this.items, function(a) { for (var c = 0; b.length > c; c++)
                        if (b[c] === a.item[0]) return !1; return !0 }) }, _refreshItems: function(b) { this.items = [], this.containers = [this]; var c, d, e, f, g, h, i, j, k = this.items,
                    l = [
                        [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, { item: this.currentItem }) : a(this.options.items, this.element), this]
                    ],
                    m = this._connectWith(); if (m && this.ready)
                    for (c = m.length - 1; c >= 0; c--)
                        for (e = a(m[c], this.document[0]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, { item: this.currentItem }) : a(f.options.items, f.element), f]), this.containers.push(f)); for (c = l.length - 1; c >= 0; c--)
                    for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++) i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({ item: i, instance: g, width: 0, height: 0, left: 0, top: 0 }) }, refreshPositions: function(b) { this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()); var c, d, e, f; for (c = this.items.length - 1; c >= 0; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top); if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight(); return this }, _createPlaceholder: function(b) { b = b || this; var c, d = b.options;
                d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = { element: function() { var d = b.currentItem[0].nodeName.toLowerCase(),
                            e = a("<" + d + ">", b.document[0]); return b._addClass(e, "ui-sortable-placeholder", c || b.currentItem[0].className)._removeClass(e, "ui-sortable-helper"), "tbody" === d ? b._createTrPlaceholder(b.currentItem.find("tr").eq(0), a("<tr>", b.document[0]).appendTo(e)) : "tr" === d ? b._createTrPlaceholder(b.currentItem, e) : "img" === d && e.attr("src", b.currentItem.attr("src")), c || e.css("visibility", "hidden"), e }, update: function(a, e) {
                        (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10))) } }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder) }, _createTrPlaceholder: function(b, c) { var d = this;
                b.children().each(function() { a("<td>&#160;</td>", d.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(c) }) }, _contactContainers: function(b) { var c, d, e, f, g, h, i, j, k, l, m = null,
                    n = null; for (c = this.containers.length - 1; c >= 0; c--)
                    if (!a.contains(this.currentItem[0], this.containers[c].element[0]))
                        if (this._intersectsWith(this.containers[c].containerCache)) { if (m && a.contains(this.containers[c].element[0], m.element[0])) continue;
                            m = this.containers[c], n = c } else this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), this.containers[c].containerCache.over = 0); if (m)
                    if (1 === this.containers.length) this.containers[n].containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1);
                    else { for (e = 1e4, f = null, k = m.floating || this._isFloating(this.currentItem), g = k ? "left" : "top", h = k ? "width" : "height", l = k ? "pageX" : "pageY", d = this.items.length - 1; d >= 0; d--) a.contains(this.containers[n].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (i = this.items[d].item.offset()[g], j = !1, b[l] - i > this.items[d][h] / 2 && (j = !0), e > Math.abs(b[l] - i) && (e = Math.abs(b[l] - i), f = this.items[d], this.direction = j ? "up" : "down")); if (!f && !this.options.dropOnEmpty) return; if (this.currentContainer === this.containers[n]) return void(this.currentContainer.containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash()), this.currentContainer.containerCache.over = 1));
                        f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[n].element, !0), this._trigger("change", b, this._uiHash()), this.containers[n]._trigger("change", b, this._uiHash(this)), this.currentContainer = this.containers[n], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1 } }, _createHelper: function(b) { var c = this.options,
                    d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem; return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d }, _adjustOffsetFromHelper: function(b) { "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top) }, _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var b = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = { top: 0, left: 0 }), { top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function() { if ("relative" === this.cssPosition) { var a = this.currentItem.position(); return { top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } }, _cacheMargins: function() { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } }, _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function() { var b, c, d, e = this.options; "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === e.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === e.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) }, _convertPositionTo: function(b, c) { c || (c = this.position); var d = "absolute" === b ? 1 : -1,
                    e = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    f = /(html|body)/i.test(e[0].tagName); return { top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d, left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d } }, _generatePosition: function(b) { var c, d, e = this.options,
                    f = b.pageX,
                    g = b.pageY,
                    h = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    i = /(html|body)/i.test(h[0].tagName); return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), { top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()), left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft()) } }, _rearrange: function(a, b, c, d) { c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1; var e = this.counter;
                this._delay(function() { e === this.counter && this.refreshPositions(!d) }) }, _clear: function(a, b) {
                function c(a, b, c) { return function(d) { c._trigger(a, d, b._uiHash(b)) } } this.reverting = !1; var d, e = []; if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) { for (d in this._storedCSS)("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) && (this._storedCSS[d] = "");
                    this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper") } else this.currentItem.show(); for (this.fromOutside && !b && e.push(function(a) { this._trigger("receive", a, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || e.push(function(a) { this._trigger("update", a, this._uiHash()) }), this !== this.currentContainer && (b || (e.push(function(a) { this._trigger("remove", a, this._uiHash()) }), e.push(function(a) { return function(b) { a._trigger("receive", b, this._uiHash(this)) } }.call(this, this.currentContainer)), e.push(function(a) { return function(b) { a._trigger("update", b, this._uiHash(this)) } }.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--) b || e.push(c("deactivate", this, this.containers[d])), this.containers[d].containerCache.over && (e.push(c("out", this, this.containers[d])), this.containers[d].containerCache.over = 0); if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !b) { for (d = 0; e.length > d; d++) e[d].call(this, a);
                    this._trigger("stop", a, this._uiHash()) } return this.fromOutside = !1, !this.cancelHelperRemoval }, _trigger: function() { a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() }, _uiHash: function(b) { var c = b || this; return { helper: c.helper, placeholder: c.placeholder || a([]), position: c.position, originalPosition: c.originalPosition, offset: c.positionAbs, item: c.currentItem, sender: b ? b.element : null } } }), a.extend(a.ui, { datepicker: { version: "1.12.0" } });
        var l;
        a.extend(d.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() { return this.dpDiv },
            setDefaults: function(a) { return g(this._defaults, a || {}), this },
            _attachDatepicker: function(b, c) { var d, e, f;
                d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f) },
            _newInst: function(b, c) { var d = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: d, input: b, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: c, dpDiv: c ? e(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } },
            _connectDatepicker: function(b, c) { var d = a(b);
                c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b)) },
            _attachments: function(b, c) { var d, e, f, g = this._get(c, "appendText"),
                    h = this._get(c, "isRTL");
                c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.off("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.on("focus", this._showDatepicker), ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({ src: f, alt: e, title: e }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({ src: f, alt: e, title: e }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.on("click", function() { return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1 })) },
            _autoSize: function(a) { if (this._get(a, "autoSize") && !a.inline) { var b, c, d, e, f = new Date(2009, 11, 20),
                        g = this._get(a, "dateFormat");
                    g.match(/[DM]/) && (b = function(a) { for (c = 0, d = 0, e = 0; a.length > e; e++) a[e].length > c && (c = a[e].length, d = e); return d }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length) } },
            _inlineDatepicker: function(b, c) { var d = a(b);
                d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block")) },
            _dialogDatepicker: function(b, c, d, e, f) { var h, i, j, k, l, m = this._dialogInst; return m || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), a("body").append(this._dialogInput), m = this._dialogInst = this._newInst(this._dialogInput, !1), m.settings = {}, a.data(this._dialogInput[0], "datepicker", m)), g(m.settings, e || {}), c = c && c.constructor === Date ? this._formatDate(m, c) : c, this._dialogInput.val(c), this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null, this._pos || (i = document.documentElement.clientWidth, j = document.documentElement.clientHeight, k = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [i / 2 - 100 + k, j / 2 - 150 + l]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), m.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], "datepicker", m), this },
            _destroyDatepicker: function(b) { var c, d = a(b),
                    e = a.data(b, "datepicker");
                d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty(), l === e && (l = null)) },
            _enableDatepicker: function(b) {
                var c, d, e = a(b),
                    f = a.data(b, "datepicker");
                e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass),
                    d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function(a) { return a === b ? null : a }))
            },
            _disableDatepicker: function(b) { var c, d, e = a(b),
                    f = a.data(b, "datepicker");
                e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function(a) { return a === b ? null : a }), this._disabledInputs[this._disabledInputs.length] = b) },
            _isDisabledDatepicker: function(a) { if (!a) return !1; for (var b = 0; this._disabledInputs.length > b; b++)
                    if (this._disabledInputs[b] === a) return !0; return !1 },
            _getInst: function(b) { try { return a.data(b, "datepicker") } catch (c) { throw "Missing instance data for this datepicker" } },
            _optionDatepicker: function(b, c, d) { var e, f, h, i, j = this._getInst(b); return 2 === arguments.length && "string" == typeof c ? "defaults" === c ? a.extend({}, a.datepicker._defaults) : j ? "all" === c ? a.extend({}, j.settings) : this._get(j, c) : null : (e = c || {}, "string" == typeof c && (e = {}, e[c] = d), void(j && (this._curInst === j && this._hideDatepicker(), f = this._getDateDatepicker(b, !0), h = this._getMinMaxDate(j, "min"), i = this._getMinMaxDate(j, "max"), g(j.settings, e), null !== h && void 0 !== e.dateFormat && void 0 === e.minDate && (j.settings.minDate = this._formatDate(j, h)), null !== i && void 0 !== e.dateFormat && void 0 === e.maxDate && (j.settings.maxDate = this._formatDate(j, i)), "disabled" in e && (e.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), this._attachments(a(b), j), this._autoSize(j), this._setDate(j, f), this._updateAlternate(j), this._updateDatepicker(j)))) },
            _changeDatepicker: function(a, b, c) { this._optionDatepicker(a, b, c) },
            _refreshDatepicker: function(a) { var b = this._getInst(a);
                b && this._updateDatepicker(b) },
            _setDateDatepicker: function(a, b) { var c = this._getInst(a);
                c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c)) },
            _getDateDatepicker: function(a, b) { var c = this._getInst(a); return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null },
            _doKeyDown: function(b) { var c, d, e, f = a.datepicker._getInst(b.target),
                    g = !0,
                    h = f.dpDiv.is(".ui-datepicker-rtl"); if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
                    case 9:
                        a.datepicker._hideDatepicker(), g = !1; break;
                    case 13:
                        return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
                    case 27:
                        a.datepicker._hideDatepicker(); break;
                    case 33:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M"); break;
                    case 34:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M"); break;
                    case 35:
                        (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey; break;
                    case 36:
                        (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey; break;
                    case 37:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M"); break;
                    case 38:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey; break;
                    case 39:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M"); break;
                    case 40:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey; break;
                    default:
                        g = !1 } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
                g && (b.preventDefault(), b.stopPropagation()) },
            _doKeyPress: function(b) { var c, d, e = a.datepicker._getInst(b.target); return a.datepicker._get(e, "constrainInput") ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || c.indexOf(d) > -1) : void 0 },
            _doKeyUp: function(b) { var c, d = a.datepicker._getInst(b.target); if (d.input.val() !== d.lastVal) try { c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d)) } catch (e) {}
                return !0 },
            _showDatepicker: function(b) { if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) { var d, e, f, h, i, j, k;
                    d = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== d && (a.datepicker._curInst.dpDiv.stop(!0, !0), d && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), e = a.datepicker._get(d, "beforeShow"), f = e ? e.apply(b, [b, d]) : {}, f !== !1 && (g(d.settings, f), d.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(d), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), h = !1, a(b).parents().each(function() { return h |= "fixed" === a(this).css("position"), !h }), i = { left: a.datepicker._pos[0], top: a.datepicker._pos[1] }, a.datepicker._pos = null, d.dpDiv.empty(), d.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), a.datepicker._updateDatepicker(d), i = a.datepicker._checkOffset(d, i, h), d.dpDiv.css({ position: a.datepicker._inDialog && a.blockUI ? "static" : h ? "fixed" : "absolute", display: "none", left: i.left + "px", top: i.top + "px" }), d.inline || (j = a.datepicker._get(d, "showAnim"), k = a.datepicker._get(d, "duration"), d.dpDiv.css("z-index", c(a(b)) + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[j] ? d.dpDiv.show(j, a.datepicker._get(d, "showOptions"), k) : d.dpDiv[j || "show"](j ? k : null), a.datepicker._shouldFocusInput(d) && d.input.trigger("focus"), a.datepicker._curInst = d)) } },
            _updateDatepicker: function(b) { this.maxRows = 4, l = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b); var c, d = this._getNumberOfMonths(b),
                    e = d[1],
                    g = 17,
                    h = b.dpDiv.find("." + this._dayOverClass + " a");
                h.length > 0 && f.apply(h.get(0)), b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", g * e + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.trigger("focus"), b.yearshtml && (c = b.yearshtml, setTimeout(function() { c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null }, 0)) },
            _shouldFocusInput: function(a) { return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus") },
            _checkOffset: function(b, c, d) { var e = b.dpDiv.outerWidth(),
                    f = b.dpDiv.outerHeight(),
                    g = b.input ? b.input.outerWidth() : 0,
                    h = b.input ? b.input.outerHeight() : 0,
                    i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
                    j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop()); return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c },
            _findPos: function(b) { for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"]; return c = a(b).offset(), [c.left, c.top] },
            _hideDatepicker: function(b) { var c, d, e, f, g = this._curInst;!g || b && g !== a.data(b, "datepicker") || this._datepickerShowing && (c = this._get(g, "showAnim"), d = this._get(g, "duration"), e = function() { a.datepicker._tidyDialog(g) }, a.effects && (a.effects.effect[c] || a.effects[c]) ? g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e) : g.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(g, "onClose"), f && f.apply(g.input ? g.input[0] : null, [g.input ? g.input.val() : "", g]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1) },
            _tidyDialog: function(a) { a.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar") },
            _checkExternalClick: function(b) { if (a.datepicker._curInst) { var c = a(b.target),
                        d = a.datepicker._getInst(c[0]);
                    (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker() } },
            _adjustDate: function(b, c, d) { var e = a(b),
                    f = this._getInst(e[0]);
                this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f)) },
            _gotoToday: function(b) { var c, d = a(b),
                    e = this._getInst(d[0]);
                this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d) },
            _selectMonthYear: function(b, c, d) { var e = a(b),
                    f = this._getInst(e[0]);
                f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e) },
            _selectDay: function(b, c, d, e) { var f, g = a(b);
                a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))) },
            _clearDate: function(b) { var c = a(b);
                this._selectDate(c, "") },
            _selectDate: function(b, c) { var d, e = a(b),
                    f = this._getInst(e[0]);
                c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.trigger("focus"), this._lastInput = null) },
            _updateAlternate: function(b) { var c, d, e, f = this._get(b, "altField");
                f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).val(e)) },
            noWeekends: function(a) { var b = a.getDay(); return [b > 0 && 6 > b, ""] },
            iso8601Week: function(a) { var b, c = new Date(a.getTime()); return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1 },
            parseDate: function(b, c, d) { if (null == b || null == c) throw "Invalid arguments"; if (c = "object" == typeof c ? "" + c : c + "", "" === c) return null; var e, f, g, h, i = 0,
                    j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    k = "string" != typeof j ? j : (new Date).getFullYear() % 100 + parseInt(j, 10),
                    l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
                    m = (d ? d.dayNames : null) || this._defaults.dayNames,
                    n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort,
                    o = (d ? d.monthNames : null) || this._defaults.monthNames,
                    p = -1,
                    q = -1,
                    r = -1,
                    s = -1,
                    t = !1,
                    u = function(a) { var c = b.length > e + 1 && b.charAt(e + 1) === a; return c && e++, c },
                    v = function(a) { var b = u(a),
                            d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2,
                            e = "y" === a ? d : 1,
                            f = RegExp("^\\d{" + e + "," + d + "}"),
                            g = c.substring(i).match(f); if (!g) throw "Missing number at position " + i; return i += g[0].length, parseInt(g[0], 10) },
                    w = function(b, d, e) { var f = -1,
                            g = a.map(u(b) ? e : d, function(a, b) { return [
                                    [b, a]
                                ] }).sort(function(a, b) { return -(a[1].length - b[1].length) }); if (a.each(g, function(a, b) { var d = b[1]; return c.substr(i, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], i += d.length, !1) : void 0 }), -1 !== f) return f + 1; throw "Unknown name at position " + i },
                    x = function() { if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
                        i++ }; for (e = 0; b.length > e; e++)
                    if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1;
                    else switch (b.charAt(e)) {
                        case "d":
                            r = v("d"); break;
                        case "D":
                            w("D", l, m); break;
                        case "o":
                            s = v("o"); break;
                        case "m":
                            q = v("m"); break;
                        case "M":
                            q = w("M", n, o); break;
                        case "y":
                            p = v("y"); break;
                        case "@":
                            h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate(); break;
                        case "!":
                            h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate(); break;
                        case "'":
                            u("'") ? x() : t = !0; break;
                        default:
                            x() }
                if (c.length > i && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g; if (-1 === p ? p = (new Date).getFullYear() : 100 > p && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (k >= p ? 0 : -100)), s > -1)
                    for (q = 1, r = s; f = this._getDaysInMonth(p, q - 1), !(f >= r);) q++, r -= f; if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date"; return h },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function(a, b, c) { if (!b) return ""; var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                    f = (c ? c.dayNames : null) || this._defaults.dayNames,
                    g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                    h = (c ? c.monthNames : null) || this._defaults.monthNames,
                    i = function(b) { var c = a.length > d + 1 && a.charAt(d + 1) === b; return c && d++, c },
                    j = function(a, b, c) { var d = "" + b; if (i(a))
                            for (; c > d.length;) d = "0" + d; return d },
                    k = function(a, b, c, d) { return i(a) ? d[b] : c[b] },
                    l = "",
                    m = !1; if (b)
                    for (d = 0; a.length > d; d++)
                        if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
                        else switch (a.charAt(d)) {
                            case "d":
                                l += j("d", b.getDate(), 2); break;
                            case "D":
                                l += k("D", b.getDay(), e, f); break;
                            case "o":
                                l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3); break;
                            case "m":
                                l += j("m", b.getMonth() + 1, 2); break;
                            case "M":
                                l += k("M", b.getMonth(), g, h); break;
                            case "y":
                                l += i("y") ? b.getFullYear() : (10 > b.getFullYear() % 100 ? "0" : "") + b.getFullYear() % 100; break;
                            case "@":
                                l += b.getTime(); break;
                            case "!":
                                l += 1e4 * b.getTime() + this._ticksTo1970; break;
                            case "'":
                                i("'") ? l += "'" : m = !0; break;
                            default:
                                l += a.charAt(d) }
                return l },
            _possibleChars: function(a) { var b, c = "",
                    d = !1,
                    e = function(c) { var d = a.length > b + 1 && a.charAt(b + 1) === c; return d && b++, d }; for (b = 0; a.length > b; b++)
                    if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
                    else switch (a.charAt(b)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            c += "0123456789"; break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            e("'") ? c += "'" : d = !0; break;
                        default:
                            c += a.charAt(b) }
                return c },
            _get: function(a, b) { return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b] },
            _setDateFromField: function(a, b) { if (a.input.val() !== a.lastVal) { var c = this._get(a, "dateFormat"),
                        d = a.lastVal = a.input ? a.input.val() : null,
                        e = this._getDefaultDate(a),
                        f = e,
                        g = this._getFormatConfig(a); try { f = this.parseDate(c, d, g) || e } catch (h) { d = b ? "" : d } a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a) } },
            _getDefaultDate: function(a) { return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date)) },
            _determineDate: function(b, c, d) { var e = function(a) { var b = new Date; return b.setDate(b.getDate() + a), b },
                    f = function(c) { try { return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b)) } catch (d) {} for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j;) { switch (j[2] || "d") {
                                case "d":
                                case "D":
                                    h += parseInt(j[1], 10); break;
                                case "w":
                                case "W":
                                    h += 7 * parseInt(j[1], 10); break;
                                case "m":
                                case "M":
                                    g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g)); break;
                                case "y":
                                case "Y":
                                    f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g)) } j = i.exec(c) } return new Date(f, g, h) },
                    g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime()); return g = g && "Invalid Date" == "" + g ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g) },
            _daylightSavingAdjust: function(a) { return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null },
            _setDate: function(a, b, c) { var d = !b,
                    e = a.selectedMonth,
                    f = a.selectedYear,
                    g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
                a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a)) },
            _getDate: function(a) { var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay)); return b },
            _attachHandlers: function(b) { var c = this._get(b, "stepMonths"),
                    d = "#" + b.id.replace(/\\\\/g, "\\");
                b.dpDiv.find("[data-handler]").map(function() { var b = { prev: function() { a.datepicker._adjustDate(d, -c, "M") }, next: function() { a.datepicker._adjustDate(d, +c, "M") }, hide: function() { a.datepicker._hideDatepicker() }, today: function() { a.datepicker._gotoToday(d) }, selectDay: function() { return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return a.datepicker._selectMonthYear(d, this, "M"), !1 }, selectYear: function() { return a.datepicker._selectMonthYear(d, this, "Y"), !1 } };
                    a(this).on(this.getAttribute("data-event"), b[this.getAttribute("data-handler")]) }) },
            _generateHTML: function(a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
                    P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
                    Q = this._get(a, "isRTL"),
                    R = this._get(a, "showButtonPanel"),
                    S = this._get(a, "hideIfNoPrevNext"),
                    T = this._get(a, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(a),
                    V = this._get(a, "showCurrentAtPos"),
                    W = this._get(a, "stepMonths"),
                    X = 1 !== U[0] || 1 !== U[1],
                    Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                    Z = this._getMinMaxDate(a, "min"),
                    $ = this._getMinMaxDate(a, "max"),
                    _ = a.drawMonth - V,
                    aa = a.drawYear; if (0 > _ && (_ += 12, aa--), $)
                    for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b;) _--, 0 > _ && (_ = 11, aa--); for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; U[0] > w; w++) { for (x = "", this.maxRows = 4, y = 0; U[1] > y; y++) { if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", B = "", X) { if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
                                case 0:
                                    B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left"); break;
                                case U[1] - 1:
                                    B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right"); break;
                                default:
                                    B += " ui-datepicker-group-middle", A = "" } B += "'>" } for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th scope='col'" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>"; for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; H > J; J++) { for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                            B += K + "</tr>" } _++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B } u += x } return u += j, a._keyEvent = !1, u },
            _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) { var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
                    r = this._get(a, "changeYear"),
                    s = this._get(a, "showMonthAfterYear"),
                    t = "<div class='ui-datepicker-title'>",
                    u = ""; if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
                else { for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; 12 > k; k++)(!i || k >= d.getMonth()) && (!j || e.getMonth() >= k) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                    u += "</select>" } if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
                    if (a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
                    else { for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function(a) { var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10); return isNaN(b) ? m : b }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                        a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null } return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>" },
            _adjustInstDate: function(a, b, c) { var d = a.selectedYear + ("Y" === c ? b : 0),
                    e = a.selectedMonth + ("M" === c ? b : 0),
                    f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
                    g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
                a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" === c || "Y" === c) && this._notifyChange(a) },
            _restrictMinMax: function(a, b) { var c = this._getMinMaxDate(a, "min"),
                    d = this._getMinMaxDate(a, "max"),
                    e = c && c > b ? c : b; return d && e > d ? d : e },
            _notifyChange: function(a) { var b = this._get(a, "onChangeMonthYear");
                b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a]) },
            _getNumberOfMonths: function(a) { var b = this._get(a, "numberOfMonths"); return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b },
            _getMinMaxDate: function(a, b) { return this._determineDate(a, this._get(a, b + "Date"), null) },
            _getDaysInMonth: function(a, b) { return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate() },
            _getFirstDayOfMonth: function(a, b) { return new Date(a, b, 1).getDay() },
            _canAdjustMonth: function(a, b, c, d) { var e = this._getNumberOfMonths(a),
                    f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1)); return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f) },
            _isInRange: function(a, b) { var c, d, e = this._getMinMaxDate(a, "min"),
                    f = this._getMinMaxDate(a, "max"),
                    g = null,
                    h = null,
                    i = this._get(a, "yearRange"); return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || h >= b.getFullYear()) },
            _getFormatConfig: function(a) { var b = this._get(a, "shortYearCutoff"); return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), { shortYearCutoff: b, dayNamesShort: this._get(a, "dayNamesShort"), dayNames: this._get(a, "dayNames"), monthNamesShort: this._get(a, "monthNamesShort"), monthNames: this._get(a, "monthNames") } },
            _formatDate: function(a, b, c, d) { b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear); var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay)); return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a)) }
        }), a.fn.datepicker = function(b) { if (!this.length) return this;
            a.datepicker.initialized || (a(document).on("mousedown", a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv); var c = Array.prototype.slice.call(arguments, 1); return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() { "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b) }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) }, a.datepicker = new d, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.12.0", a.datepicker, a.widget("ui.progressbar", { version: "1.12.0", options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null }, min: 0, _create: function() { this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({ role: "progressbar", "aria-valuemin": this.min }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = a("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue() }, _destroy: function() { this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove() }, value: function(a) { return void 0 === a ? this.options.value : (this.options.value = this._constrainedValue(a), void this._refreshValue()) }, _constrainedValue: function(a) { return void 0 === a && (a = this.options.value), this.indeterminate = a === !1, "number" != typeof a && (a = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, a)) }, _setOptions: function(a) { var b = a.value;
                delete a.value, this._super(a), this.options.value = this._constrainedValue(b), this._refreshValue() }, _setOption: function(a, b) { "max" === a && (b = Math.max(this.min, b)), this._super(a, b) }, _setOptionDisabled: function(a) { this._super(a), this.element.attr("aria-disabled", a), this._toggleClass(null, "ui-state-disabled", !!a) }, _percentage: function() { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) }, _refreshValue: function() { var b = this.options.value,
                    c = this._percentage();
                this.valueDiv.toggle(this.indeterminate || b > this.min).width(c.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, b === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = a("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": b }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== b && (this.oldValue = b, this._trigger("change")), b === this.options.max && this._trigger("complete") } }), a.widget("ui.slider", a.ui.mouse, {
            version: "1.12.0",
            widgetEventPrefix: "slide",
            options: { animate: !1, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null },
            numPages: 5,
            _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1 },
            _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() },
            _createHandles: function() { var b, c, d = this.options,
                    e = this.element.find(".ui-slider-handle"),
                    f = "<span tabindex='0'></span>",
                    g = []; for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), e = e.slice(0, c)), b = e.length; c > b; b++) g.push(f);
                this.handles = e.add(a(g.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(b) { a(this).data("ui-slider-handle-index", b) }) },
            _createRange: function() {
                var b = this.options;
                b.range ? (b.range === !0 && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [b.values[0], b.values[0]] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"),
                    this.range.css({ left: "", bottom: "" })) : (this.range = a("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === b.range || "max" === b.range) && this._addClass(this.range, "ui-slider-range-" + b.range)) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) },
            _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy() },
            _mouseCapture: function(b) { var c, d, e, f, g, h, i, j, k = this,
                    l = this.options; return !l.disabled && (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), c = { x: b.pageX, y: b.pageY }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function(b) { var c = Math.abs(d - k.values(b));
                    (e > c || e === c && (b === k._lastChangedValue || k.values(b) === l.min)) && (e = c, f = a(this), g = b) }), h = this._start(b, g), h !== !1 && (this._mouseSliding = !0, this._handleIndex = g, this._addClass(f, null, "ui-state-active"), f.trigger("focus"), i = f.offset(), j = !a(b.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = j ? { left: 0, top: 0 } : { left: b.pageX - i.left - f.width() / 2, top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, !0)) },
            _mouseStart: function() { return !0 },
            _mouseDrag: function(a) { var b = { x: a.pageX, y: a.pageY },
                    c = this._normValueFromMouse(b); return this._slide(a, this._handleIndex, c), !1 },
            _mouseStop: function(a) { return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 },
            _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" },
            _normValueFromMouse: function(a) { var b, c, d, e, f; return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f) },
            _uiHash: function(a, b, c) { var d = { handle: this.handles[a], handleIndex: a, value: void 0 !== b ? b : this.value() }; return this._hasMultipleValues() && (d.value = void 0 !== b ? b : this.values(a), d.values = c || this.values()), d },
            _hasMultipleValues: function() { return this.options.values && this.options.values.length },
            _start: function(a, b) { return this._trigger("start", a, this._uiHash(b)) },
            _slide: function(a, b, c) { var d, e, f = this.value(),
                    g = this.values();
                this._hasMultipleValues() && (e = this.values(b ? 0 : 1), f = this.values(b), 2 === this.options.values.length && this.options.range === !0 && (c = 0 === b ? Math.min(e, c) : Math.max(e, c)), g[b] = c), c !== f && (d = this._trigger("slide", a, this._uiHash(b, c, g)), d !== !1 && (this._hasMultipleValues() ? this.values(b, c) : this.value(c))) },
            _stop: function(a, b) { this._trigger("stop", a, this._uiHash(b)) },
            _change: function(a, b) { this._keySliding || this._mouseSliding || (this._lastChangedValue = b, this._trigger("change", a, this._uiHash(b))) },
            value: function(a) { return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), void this._change(null, 0)) : this._value() },
            values: function(b, c) { var d, e, f; if (arguments.length > 1) return this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), void this._change(null, b); if (!arguments.length) return this._values(); if (!a.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(b) : this.value(); for (d = this.options.values, e = arguments[0], f = 0; d.length > f; f += 1) d[f] = this._trimAlignValue(e[f]), this._change(null, f);
                this._refreshValue() },
            _setOption: function(b, c) { var d, e = 0; switch ("range" === b && this.options.range === !0 && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), this._super(b, c), b) {
                    case "orientation":
                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(c), this.handles.css("horizontal" === c ? "bottom" : "left", ""); break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1; break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), d = e - 1; d >= 0; d--) this._change(null, d);
                        this._animateOff = !1; break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1; break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1 } },
            _setOptionDisabled: function(a) { this._super(a), this._toggleClass(null, "ui-state-disabled", !!a) },
            _value: function() { var a = this.options.value; return a = this._trimAlignValue(a) },
            _values: function(a) { var b, c, d; if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b); if (this._hasMultipleValues()) { for (c = this.options.values.slice(), d = 0; c.length > d; d += 1) c[d] = this._trimAlignValue(c[d]); return c } return [] },
            _trimAlignValue: function(a) { if (this._valueMin() >= a) return this._valueMin(); if (a >= this._valueMax()) return this._valueMax(); var b = this.options.step > 0 ? this.options.step : 1,
                    c = (a - this._valueMin()) % b,
                    d = a - c; return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5)) },
            _calculateNewMax: function() { var a = this.options.max,
                    b = this._valueMin(),
                    c = this.options.step,
                    d = Math.round((a - b) / c) * c;
                a = d + b, a > this.options.max && (a -= c), this.max = parseFloat(a.toFixed(this._precision())) },
            _precision: function() { var a = this._precisionOf(this.options.step); return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a },
            _precisionOf: function(a) { var b = "" + a,
                    c = b.indexOf("."); return -1 === c ? 0 : b.length - c - 1 },
            _valueMin: function() { return this.options.min },
            _valueMax: function() { return this.max },
            _refreshRange: function(a) { "vertical" === a && this.range.css({ width: "", left: "" }), "horizontal" === a && this.range.css({ height: "", bottom: "" }) },
            _refreshValue: function() { var b, c, d, e, f, g = this.options.range,
                    h = this.options,
                    i = this,
                    j = !this._animateOff && h.animate,
                    k = {};
                this._hasMultipleValues() ? this.handles.each(function(d) { c = 100 * ((i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin())), k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), i.options.range === !0 && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({ left: c + "%" }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({ width: c - b + "%" }, { queue: !1, duration: h.animate })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({ bottom: c + "%" }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({ height: c - b + "%" }, { queue: !1, duration: h.animate }))), b = c }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? 100 * ((d - e) / (f - e)) : 0, k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({ width: c + "%" }, h.animate), "max" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({ width: 100 - c + "%" }, h.animate), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({ height: c + "%" }, h.animate), "max" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({ height: 100 - c + "%" }, h.animate)) },
            _handleEvents: { keydown: function(b) { var c, d, e, f, g = a(b.target).data("ui-slider-handle-index"); switch (b.keyCode) {
                        case a.ui.keyCode.HOME:
                        case a.ui.keyCode.END:
                        case a.ui.keyCode.PAGE_UP:
                        case a.ui.keyCode.PAGE_DOWN:
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (b.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(a(b.target), null, "ui-state-active"), c = this._start(b, g), c === !1)) return } switch (f = this.options.step, d = e = this._hasMultipleValues() ? this.values(g) : this.value(), b.keyCode) {
                        case a.ui.keyCode.HOME:
                            e = this._valueMin(); break;
                        case a.ui.keyCode.END:
                            e = this._valueMax(); break;
                        case a.ui.keyCode.PAGE_UP:
                            e = this._trimAlignValue(d + (this._valueMax() - this._valueMin()) / this.numPages); break;
                        case a.ui.keyCode.PAGE_DOWN:
                            e = this._trimAlignValue(d - (this._valueMax() - this._valueMin()) / this.numPages); break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                            if (d === this._valueMax()) return;
                            e = this._trimAlignValue(d + f); break;
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (d === this._valueMin()) return;
                            e = this._trimAlignValue(d - f) } this._slide(b, g, e) }, keyup: function(b) { var c = a(b.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), this._removeClass(a(b.target), null, "ui-state-active")) } }
        });
        var m = "ui-effects-",
            n = "ui-effects-style",
            o = "ui-effects-animated",
            p = a;
        a.effects = { effect: {} },
            function(a, b) {
                function c(a, b, c) { var d = l[b.type] || {}; return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : a > d.max ? d.max : a) }

                function d(c) { var d = j(),
                        e = d._rgba = []; return c = c.toLowerCase(), o(i, function(a, f) { var g, h = f.re.exec(c),
                            i = h && f.parse(h),
                            j = f.space || "rgba"; return i ? (g = d[j](i), d[k[j].cache] = g[k[j].cache], e = d._rgba = g._rgba, !1) : b }), e.length ? ("0,0,0,0" === e.join() && a.extend(e, f.transparent), d) : f[c] }

                function e(a, b, c) { return c = (c + 1) % 1, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a } var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    h = /^([\-+])=\s*(\d+\.?\d*)/,
                    i = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(a) { return [a[1], a[2], a[3], a[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(a) { return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(a) { return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(a) { return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(a) { return [a[1], a[2] / 100, a[3] / 100, a[4]] } }],
                    j = a.Color = function(b, c, d, e) { return new a.Color.fn.parse(b, c, d, e) },
                    k = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                    l = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                    m = j.support = {},
                    n = a("<p>")[0],
                    o = a.each;
                n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function(a, b) { b.cache = "_" + a, b.props.alpha = { idx: 3, type: "percent", def: 1 } }), j.fn = a.extend(j.prototype, { parse: function(e, g, h, i) { if (e === b) return this._rgba = [null, null, null, null], this;
                        (e.jquery || e.nodeType) && (e = a(e).css(g), g = b); var l = this,
                            m = a.type(e),
                            n = this._rgba = []; return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) { n[b.idx] = c(e[b.idx], b) }), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) { e[b.cache] && (l[b.cache] = e[b.cache].slice()) }) : o(k, function(b, d) { var f = d.cache;
                            o(d.props, function(a, b) { if (!l[f] && d.to) { if ("alpha" === a || null == e[a]) return;
                                    l[f] = d.to(l._rgba) } l[f][b.idx] = c(e[a], b, !0) }), l[f] && 0 > a.inArray(null, l[f].slice(0, 3)) && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f]))) }), this) : b }, is: function(a) { var c = j(a),
                            d = !0,
                            e = this; return o(k, function(a, f) { var g, h = c[f.cache]; return h && (g = e[f.cache] || f.to && f.to(e._rgba) || [], o(f.props, function(a, c) { return null != h[c.idx] ? d = h[c.idx] === g[c.idx] : b })), d }), d }, _space: function() { var a = [],
                            b = this; return o(k, function(c, d) { b[d.cache] && a.push(c) }), a.pop() }, transition: function(a, b) { var d = j(a),
                            e = d._space(),
                            f = k[e],
                            g = 0 === this.alpha() ? j("transparent") : this,
                            h = g[f.cache] || f.to(g._rgba),
                            i = h.slice(); return d = d[f.cache], o(f.props, function(a, e) { var f = e.idx,
                                g = h[f],
                                j = d[f],
                                k = l[e.type] || {};
                            null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e))) }), this[e](i) }, blend: function(b) { if (1 === this._rgba[3]) return this; var c = this._rgba.slice(),
                            d = c.pop(),
                            e = j(b)._rgba; return j(a.map(c, function(a, b) { return (1 - d) * e[b] + d * a })) }, toRgbaString: function() { var b = "rgba(",
                            c = a.map(this._rgba, function(a, b) { return null == a ? b > 2 ? 1 : 0 : a }); return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")" }, toHslaString: function() { var b = "hsla(",
                            c = a.map(this.hsla(), function(a, b) { return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a }); return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")" }, toHexString: function(b) { var c = this._rgba.slice(),
                            d = c.pop(); return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) { return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a }).join("") }, toString: function() { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() } }), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) { if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]]; var b, c, d = a[0] / 255,
                        e = a[1] / 255,
                        f = a[2] / 255,
                        g = a[3],
                        h = Math.max(d, e, f),
                        i = Math.min(d, e, f),
                        j = h - i,
                        k = h + i,
                        l = .5 * k; return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g] }, k.hsla.from = function(a) { if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]]; var b = a[0] / 360,
                        c = a[1],
                        d = a[2],
                        f = a[3],
                        g = .5 >= d ? d * (1 + c) : d + c - d * c,
                        h = 2 * d - g; return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f] }, o(k, function(d, e) { var f = e.props,
                        g = e.cache,
                        i = e.to,
                        k = e.from;
                    j.fn[d] = function(d) { if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice(); var e, h = a.type(d),
                            l = "array" === h || "object" === h ? d : arguments,
                            m = this[g].slice(); return o(f, function(a, b) { var d = l["object" === h ? a : b.idx];
                            null == d && (d = m[b.idx]), m[b.idx] = c(d, b) }), k ? (e = j(k(m)), e[g] = m, e) : j(m) }, o(f, function(b, c) { j.fn[b] || (j.fn[b] = function(e) { var f, g = a.type(e),
                                i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
                                j = this[i](),
                                k = j[c.idx]; return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[c.idx] = e, this[i](j))) }) }) }), j.hook = function(b) { var c = b.split(" ");
                    o(c, function(b, c) { a.cssHooks[c] = { set: function(b, e) { var f, g, h = ""; if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) { if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) { for (g = "backgroundColor" === c ? b.parentNode : b;
                                            ("" === h || "transparent" === h) && g && g.style;) try { h = a.css(g, "backgroundColor"), g = g.parentNode } catch (i) {} e = e.blend(h && "transparent" !== h ? h : "_default") } e = e.toRgbaString() } try { b.style[c] = e } catch (i) {} } }, a.fx.step[c] = function(b) { b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos)) } }) }, j.hook(g), a.cssHooks.borderColor = { expand: function(a) { var b = {}; return o(["Top", "Right", "Bottom", "Left"], function(c, d) { b["border" + d + "Color"] = a }), b } }, f = a.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" } }(p),
            function() {
                function b(b) { var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
                        f = {}; if (e && e.length && e[0] && e[e[0]])
                        for (d = e.length; d--;) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]);
                    else
                        for (c in e) "string" == typeof e[c] && (f[c] = e[c]); return f }

                function c(b, c) { var d, f, g = {}; for (d in c) f = c[d], b[d] !== f && (e[d] || (a.fx.step[d] || !isNaN(parseFloat(f))) && (g[d] = f)); return g } var d = ["add", "remove", "toggle"],
                    e = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
                a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, c) { a.fx.step[c] = function(a) {
                        ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (p.style(a.elem, c, a.end), a.setAttr = !0) } }), a.fn.addBack || (a.fn.addBack = function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }), a.effects.animateClass = function(e, f, g, h) { var i = a.speed(f, g, h); return this.queue(function() { var f, g = a(this),
                            h = g.attr("class") || "",
                            j = i.children ? g.find("*").addBack() : g;
                        j = j.map(function() { var c = a(this); return { el: c, start: b(this) } }), f = function() { a.each(d, function(a, b) { e[b] && g[b + "Class"](e[b]) }) }, f(), j = j.map(function() { return this.end = b(this.el[0]), this.diff = c(this.start, this.end), this }), g.attr("class", h), j = j.map(function() { var b = this,
                                c = a.Deferred(),
                                d = a.extend({}, i, { queue: !1, complete: function() { c.resolve(b) } }); return this.el.animate(this.diff, d), c.promise() }), a.when.apply(a, j.get()).done(function() { f(), a.each(arguments, function() { var b = this.el;
                                a.each(this.diff, function(a) { b.css(a, "") }) }), i.complete.call(g[0]) }) }) }, a.fn.extend({ addClass: function(b) { return function(c, d, e, f) { return d ? a.effects.animateClass.call(this, { add: c }, d, e, f) : b.apply(this, arguments) } }(a.fn.addClass), removeClass: function(b) { return function(c, d, e, f) { return arguments.length > 1 ? a.effects.animateClass.call(this, { remove: c }, d, e, f) : b.apply(this, arguments) } }(a.fn.removeClass), toggleClass: function(b) { return function(c, d, e, f, g) { return "boolean" == typeof d || void 0 === d ? e ? a.effects.animateClass.call(this, d ? { add: c } : { remove: c }, e, f, g) : b.apply(this, arguments) : a.effects.animateClass.call(this, { toggle: c }, d, e, f) } }(a.fn.toggleClass), switchClass: function(b, c, d, e, f) { return a.effects.animateClass.call(this, { add: c, remove: b }, d, e, f) } }) }(),
            function() {
                function b(b, c, d, e) { return a.isPlainObject(b) && (c = b, b = b.effect), b = { effect: b }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b }

                function c(b) { return !(b && "number" != typeof b && !a.fx.speeds[b]) || ("string" == typeof b && !a.effects.effect[b] || (!!a.isFunction(b) || "object" == typeof b && !b.effect)) }

                function d(a, b) { var c = b.outerWidth(),
                        d = b.outerHeight(),
                        e = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                        f = e.exec(a) || ["", 0, c, d, 0]; return { top: parseFloat(f[1]) || 0, right: "auto" === f[2] ? c : parseFloat(f[2]), bottom: "auto" === f[3] ? d : parseFloat(f[3]), left: parseFloat(f[4]) || 0 } } a.expr && a.expr.filters && a.expr.filters.animated && (a.expr.filters.animated = function(b) { return function(c) { return !!a(c).data(o) || b(c) } }(a.expr.filters.animated)), a.uiBackCompat !== !1 && a.extend(a.effects, { save: function(a, b) { for (var c = 0, d = b.length; d > c; c++) null !== b[c] && a.data(m + b[c], a[0].style[b[c]]) }, restore: function(a, b) { for (var c, d = 0, e = b.length; e > d; d++) null !== b[d] && (c = a.data(m + b[d]), a.css(b[d], c)) }, setMode: function(a, b) { return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b }, createWrapper: function(b) { if (b.parent().is(".ui-effects-wrapper")) return b.parent(); var c = { width: b.outerWidth(!0), height: b.outerHeight(!0), "float": b.css("float") },
                            d = a("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                            e = { width: b.width(), height: b.height() },
                            f = document.activeElement; try { f.id } catch (g) { f = document.body } return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).trigger("focus"), d = b.parent(), "static" === b.css("position") ? (d.css({ position: "relative" }), b.css({ position: "relative" })) : (a.extend(c, { position: b.css("position"), zIndex: b.css("z-index") }), a.each(["top", "left", "bottom", "right"], function(a, d) { c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto") }), b.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), b.css(e), d.css(c).show() }, removeWrapper: function(b) { var c = document.activeElement; return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).trigger("focus")), b } }), a.extend(a.effects, { version: "1.12.0", define: function(b, c, d) { return d || (d = c, c = "effect"), a.effects.effect[b] = d, a.effects.effect[b].mode = c, d }, scaledDimensions: function(a, b, c) { if (0 === b) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }; var d = "horizontal" !== c ? (b || 100) / 100 : 1,
                            e = "vertical" !== c ? (b || 100) / 100 : 1; return { height: a.height() * e, width: a.width() * d, outerHeight: a.outerHeight() * e, outerWidth: a.outerWidth() * d } }, clipToBox: function(a) { return { width: a.clip.right - a.clip.left, height: a.clip.bottom - a.clip.top, left: a.clip.left, top: a.clip.top } }, unshift: function(a, b, c) { var d = a.queue();
                        b > 1 && d.splice.apply(d, [1, 0].concat(d.splice(b, c))), a.dequeue() }, saveStyle: function(a) { a.data(n, a[0].style.cssText) }, restoreStyle: function(a) { a[0].style.cssText = a.data(n) || "", a.removeData(n) }, mode: function(a, b) { var c = a.is(":hidden"); return "toggle" === b && (b = c ? "show" : "hide"), (c ? "hide" === b : "show" === b) && (b = "none"), b }, getBaseline: function(a, b) { var c, d; switch (a[0]) {
                            case "top":
                                c = 0; break;
                            case "middle":
                                c = .5; break;
                            case "bottom":
                                c = 1; break;
                            default:
                                c = a[0] / b.height } switch (a[1]) {
                            case "left":
                                d = 0; break;
                            case "center":
                                d = .5; break;
                            case "right":
                                d = 1; break;
                            default:
                                d = a[1] / b.width } return { x: d, y: c } }, createPlaceholder: function(b) { var c, d = b.css("position"),
                            e = b.position(); return b.css({ marginTop: b.css("marginTop"), marginBottom: b.css("marginBottom"), marginLeft: b.css("marginLeft"), marginRight: b.css("marginRight") }).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()), /^(static|relative)/.test(d) && (d = "absolute", c = a("<" + b[0].nodeName + ">").insertAfter(b).css({ display: /^(inline|ruby)/.test(b.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: b.css("marginTop"), marginBottom: b.css("marginBottom"), marginLeft: b.css("marginLeft"), marginRight: b.css("marginRight"), "float": b.css("float") }).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).addClass("ui-effects-placeholder"), b.data(m + "placeholder", c)), b.css({ position: d, left: e.left, top: e.top }), c }, removePlaceholder: function(a) { var b = m + "placeholder",
                            c = a.data(b);
                        c && (c.remove(), a.removeData(b)) }, cleanUp: function(b) { a.effects.restoreStyle(b), a.effects.removePlaceholder(b) }, setTransition: function(b, c, d, e) { return e = e || {}, a.each(c, function(a, c) { var f = b.cssUnit(c);
                            f[0] > 0 && (e[c] = f[0] * d + f[1]) }), e } }), a.fn.extend({ effect: function() {
                        function c(b) {
                            function c() { h.removeData(o), a.effects.cleanUp(h), "hide" === d.mode && h.hide(), g() }

                            function g() { a.isFunction(i) && i.call(h[0]), a.isFunction(b) && b() } var h = a(this);
                            d.mode = k.shift(), a.uiBackCompat === !1 || f ? "none" === d.mode ? (h[j](), g()) : e.call(h[0], d, c) : (h.is(":hidden") ? "hide" === j : "show" === j) ? (h[j](), g()) : e.call(h[0], d, g) } var d = b.apply(this, arguments),
                            e = a.effects.effect[d.effect],
                            f = e.mode,
                            g = d.queue,
                            h = g || "fx",
                            i = d.complete,
                            j = d.mode,
                            k = [],
                            l = function(b) { var c = a(this),
                                    d = a.effects.mode(c, j) || f;
                                c.data(o, !0), k.push(d), f && ("show" === d || d === f && "hide" === d) && c.show(), f && "none" === d || a.effects.saveStyle(c), a.isFunction(b) && b() }; return a.fx.off || !e ? j ? this[j](d.duration, i) : this.each(function() { i && i.call(this) }) : g === !1 ? this.each(l).each(c) : this.queue(h, l).queue(h, c) }, show: function(a) { return function(d) { if (c(d)) return a.apply(this, arguments); var e = b.apply(this, arguments); return e.mode = "show", this.effect.call(this, e) } }(a.fn.show), hide: function(a) { return function(d) { if (c(d)) return a.apply(this, arguments); var e = b.apply(this, arguments); return e.mode = "hide", this.effect.call(this, e) } }(a.fn.hide), toggle: function(a) { return function(d) { if (c(d) || "boolean" == typeof d) return a.apply(this, arguments); var e = b.apply(this, arguments); return e.mode = "toggle", this.effect.call(this, e) } }(a.fn.toggle), cssUnit: function(b) { var c = this.css(b),
                            d = []; return a.each(["em", "px", "%", "pt"], function(a, b) { c.indexOf(b) > 0 && (d = [parseFloat(c), b]) }), d }, cssClip: function(a) { return a ? this.css("clip", "rect(" + a.top + "px " + a.right + "px " + a.bottom + "px " + a.left + "px)") : d(this.css("clip"), this) }, transfer: function(b, c) { var d = a(this),
                            e = a(b.to),
                            f = "fixed" === e.css("position"),
                            g = a("body"),
                            h = f ? g.scrollTop() : 0,
                            i = f ? g.scrollLeft() : 0,
                            j = e.offset(),
                            k = { top: j.top - h, left: j.left - i, height: e.innerHeight(), width: e.innerWidth() },
                            l = d.offset(),
                            m = a("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(b.className).css({ top: l.top - h, left: l.left - i, height: d.innerHeight(), width: d.innerWidth(), position: f ? "fixed" : "absolute" }).animate(k, b.duration, b.easing, function() { m.remove(), a.isFunction(c) && c() }) } }), a.fx.step.clip = function(b) { b.clipInit || (b.start = a(b.elem).cssClip(), "string" == typeof b.end && (b.end = d(b.end, b.elem)), b.clipInit = !0), a(b.elem).cssClip({ top: b.pos * (b.end.top - b.start.top) + b.start.top, right: b.pos * (b.end.right - b.start.right) + b.start.right, bottom: b.pos * (b.end.bottom - b.start.bottom) + b.start.bottom, left: b.pos * (b.end.left - b.start.left) + b.start.left }) } }(),
            function() { var b = {};
                a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, c) { b[c] = function(b) { return Math.pow(b, a + 2) } }), a.extend(b, { Sine: function(a) { return 1 - Math.cos(a * Math.PI / 2) }, Circ: function(a) { return 1 - Math.sqrt(1 - a * a) }, Elastic: function(a) { return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15) }, Back: function(a) { return a * a * (3 * a - 2) }, Bounce: function(a) { for (var b, c = 4;
                            ((b = Math.pow(2, --c)) - 1) / 11 > a;); return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2) } }), a.each(b, function(b, c) { a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) { return 1 - c(1 - a) }, a.easing["easeInOut" + b] = function(a) { return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2 } }) }();
        var q = a.effects;
        a.effects.define("blind", "hide", function(b, c) { var d = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
                e = a(this),
                f = b.direction || "up",
                g = e.cssClip(),
                h = { clip: a.extend({}, g) },
                i = a.effects.createPlaceholder(e);
            h.clip[d[f][0]] = h.clip[d[f][1]], "show" === b.mode && (e.cssClip(h.clip), i && i.css(a.effects.clipToBox(h)), h.clip = g), i && i.animate(a.effects.clipToBox(h), b.duration, b.easing), e.animate(h, { queue: !1, duration: b.duration, easing: b.easing, complete: c }) }), a.effects.define("bounce", function(b, c) { var d, e, f, g = a(this),
                h = b.mode,
                i = "hide" === h,
                j = "show" === h,
                k = b.direction || "up",
                l = b.distance,
                m = b.times || 5,
                n = 2 * m + (j || i ? 1 : 0),
                o = b.duration / n,
                p = b.easing,
                q = "up" === k || "down" === k ? "top" : "left",
                r = "up" === k || "left" === k,
                s = 0,
                t = g.queue().length; for (a.effects.createPlaceholder(g), f = g.css(q), l || (l = g["top" === q ? "outerHeight" : "outerWidth"]() / 3), j && (e = { opacity: 1 }, e[q] = f, g.css("opacity", 0).css(q, r ? 2 * -l : 2 * l).animate(e, o, p)), i && (l /= Math.pow(2, m - 1)), e = {}, e[q] = f; m > s; s++) d = {}, d[q] = (r ? "-=" : "+=") + l, g.animate(d, o, p).animate(e, o, p), l = i ? 2 * l : l / 2;
            i && (d = { opacity: 0 }, d[q] = (r ? "-=" : "+=") + l, g.animate(d, o, p)), g.queue(c), a.effects.unshift(g, t, n + 1) }), a.effects.define("clip", "hide", function(b, c) { var d, e = {},
                f = a(this),
                g = b.direction || "vertical",
                h = "both" === g,
                i = h || "horizontal" === g,
                j = h || "vertical" === g;
            d = f.cssClip(), e.clip = { top: j ? (d.bottom - d.top) / 2 : d.top, right: i ? (d.right - d.left) / 2 : d.right, bottom: j ? (d.bottom - d.top) / 2 : d.bottom, left: i ? (d.right - d.left) / 2 : d.left }, a.effects.createPlaceholder(f), "show" === b.mode && (f.cssClip(e.clip), e.clip = d), f.animate(e, { queue: !1, duration: b.duration, easing: b.easing, complete: c }) }), a.effects.define("drop", "hide", function(b, c) { var d, e = a(this),
                f = b.mode,
                g = "show" === f,
                h = b.direction || "left",
                i = "up" === h || "down" === h ? "top" : "left",
                j = "up" === h || "left" === h ? "-=" : "+=",
                k = "+=" === j ? "-=" : "+=",
                l = { opacity: 0 };
            a.effects.createPlaceholder(e), d = b.distance || e["top" === i ? "outerHeight" : "outerWidth"](!0) / 2, l[i] = j + d, g && (e.css(l), l[i] = k + d, l.opacity = 1), e.animate(l, { queue: !1, duration: b.duration, easing: b.easing, complete: c }) }), a.effects.define("explode", "hide", function(b, c) {
            function d() { t.push(this), t.length === l * m && e() }

            function e() { n.css({ visibility: "visible" }), a(t).remove(), c() } var f, g, h, i, j, k, l = b.pieces ? Math.round(Math.sqrt(b.pieces)) : 3,
                m = l,
                n = a(this),
                o = b.mode,
                p = "show" === o,
                q = n.show().css("visibility", "hidden").offset(),
                r = Math.ceil(n.outerWidth() / m),
                s = Math.ceil(n.outerHeight() / l),
                t = []; for (f = 0; l > f; f++)
                for (i = q.top + f * s, k = f - (l - 1) / 2, g = 0; m > g; g++) h = q.left + g * r, j = g - (m - 1) / 2, n.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -g * r, top: -f * s }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: r, height: s, left: h + (p ? j * r : 0), top: i + (p ? k * s : 0), opacity: p ? 0 : 1 }).animate({ left: h + (p ? 0 : j * r), top: i + (p ? 0 : k * s), opacity: p ? 1 : 0 }, b.duration || 500, b.easing, d) }), a.effects.define("fade", "toggle", function(b, c) { var d = "show" === b.mode;
            a(this).css("opacity", d ? 0 : 1).animate({ opacity: d ? 1 : 0 }, { queue: !1, duration: b.duration, easing: b.easing, complete: c }) }), a.effects.define("fold", "hide", function(b, c) { var d = a(this),
                e = b.mode,
                f = "show" === e,
                g = "hide" === e,
                h = b.size || 15,
                i = /([0-9]+)%/.exec(h),
                j = !!b.horizFirst,
                k = j ? ["right", "bottom"] : ["bottom", "right"],
                l = b.duration / 2,
                m = a.effects.createPlaceholder(d),
                n = d.cssClip(),
                o = { clip: a.extend({}, n) },
                p = { clip: a.extend({}, n) },
                q = [n[k[0]], n[k[1]]],
                r = d.queue().length;
            i && (h = parseInt(i[1], 10) / 100 * q[g ? 0 : 1]), o.clip[k[0]] = h, p.clip[k[0]] = h, p.clip[k[1]] = 0, f && (d.cssClip(p.clip), m && m.css(a.effects.clipToBox(p)), p.clip = n), d.queue(function(c) { m && m.animate(a.effects.clipToBox(o), l, b.easing).animate(a.effects.clipToBox(p), l, b.easing), c() }).animate(o, l, b.easing).animate(p, l, b.easing).queue(c), a.effects.unshift(d, r, 4) }), a.effects.define("highlight", "show", function(b, c) { var d = a(this),
                e = { backgroundColor: d.css("backgroundColor") }; "hide" === b.mode && (e.opacity = 0), a.effects.saveStyle(d), d.css({ backgroundImage: "none", backgroundColor: b.color || "#ffff99" }).animate(e, { queue: !1, duration: b.duration, easing: b.easing, complete: c }) }), a.effects.define("size", function(b, c) { var d, e, f, g = a(this),
                h = ["fontSize"],
                i = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                j = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                k = b.mode,
                l = "effect" !== k,
                m = b.scale || "both",
                n = b.origin || ["middle", "center"],
                o = g.css("position"),
                p = g.position(),
                q = a.effects.scaledDimensions(g),
                r = b.from || q,
                s = b.to || a.effects.scaledDimensions(g, 0);
            a.effects.createPlaceholder(g), "show" === k && (f = r, r = s, s = f), e = { from: { y: r.height / q.height, x: r.width / q.width }, to: { y: s.height / q.height, x: s.width / q.width } }, ("box" === m || "both" === m) && (e.from.y !== e.to.y && (r = a.effects.setTransition(g, i, e.from.y, r), s = a.effects.setTransition(g, i, e.to.y, s)), e.from.x !== e.to.x && (r = a.effects.setTransition(g, j, e.from.x, r), s = a.effects.setTransition(g, j, e.to.x, s))), ("content" === m || "both" === m) && e.from.y !== e.to.y && (r = a.effects.setTransition(g, h, e.from.y, r), s = a.effects.setTransition(g, h, e.to.y, s)), n && (d = a.effects.getBaseline(n, q), r.top = (q.outerHeight - r.outerHeight) * d.y + p.top, r.left = (q.outerWidth - r.outerWidth) * d.x + p.left, s.top = (q.outerHeight - s.outerHeight) * d.y + p.top, s.left = (q.outerWidth - s.outerWidth) * d.x + p.left), g.css(r), ("content" === m || "both" === m) && (i = i.concat(["marginTop", "marginBottom"]).concat(h), j = j.concat(["marginLeft", "marginRight"]), g.find("*[width]").each(function() { var c = a(this),
                    d = a.effects.scaledDimensions(c),
                    f = { height: d.height * e.from.y, width: d.width * e.from.x, outerHeight: d.outerHeight * e.from.y, outerWidth: d.outerWidth * e.from.x },
                    g = { height: d.height * e.to.y, width: d.width * e.to.x, outerHeight: d.height * e.to.y, outerWidth: d.width * e.to.x };
                e.from.y !== e.to.y && (f = a.effects.setTransition(c, i, e.from.y, f), g = a.effects.setTransition(c, i, e.to.y, g)), e.from.x !== e.to.x && (f = a.effects.setTransition(c, j, e.from.x, f), g = a.effects.setTransition(c, j, e.to.x, g)), l && a.effects.saveStyle(c), c.css(f), c.animate(g, b.duration, b.easing, function() { l && a.effects.restoreStyle(c) }) })), g.animate(s, { queue: !1, duration: b.duration, easing: b.easing, complete: function() { var b = g.offset();
                    0 === s.opacity && g.css("opacity", r.opacity), l || (g.css("position", "static" === o ? "relative" : o).offset(b), a.effects.saveStyle(g)), c() } }) }), a.effects.define("scale", function(b, c) { var d = a(this),
                e = b.mode,
                f = parseInt(b.percent, 10) || (0 === parseInt(b.percent, 10) ? 0 : "effect" !== e ? 0 : 100),
                g = a.extend(!0, { from: a.effects.scaledDimensions(d), to: a.effects.scaledDimensions(d, f, b.direction || "both"), origin: b.origin || ["middle", "center"] }, b);
            b.fade && (g.from.opacity = 1, g.to.opacity = 0), a.effects.effect.size.call(this, g, c) }), a.effects.define("puff", "hide", function(b, c) {
            var d = a.extend(!0, {}, b, { fade: !0, percent: parseInt(b.percent, 10) || 150 });
            a.effects.effect.scale.call(this, d, c)
        }), a.effects.define("pulsate", "show", function(b, c) { var d = a(this),
                e = b.mode,
                f = "show" === e,
                g = "hide" === e,
                h = f || g,
                i = 2 * (b.times || 5) + (h ? 1 : 0),
                j = b.duration / i,
                k = 0,
                l = 1,
                m = d.queue().length; for ((f || !d.is(":visible")) && (d.css("opacity", 0).show(), k = 1); i > l; l++) d.animate({ opacity: k }, j, b.easing), k = 1 - k;
            d.animate({ opacity: k }, j, b.easing), d.queue(c), a.effects.unshift(d, m, i + 1) }), a.effects.define("shake", function(b, c) { var d = 1,
                e = a(this),
                f = b.direction || "left",
                g = b.distance || 20,
                h = b.times || 3,
                i = 2 * h + 1,
                j = Math.round(b.duration / i),
                k = "up" === f || "down" === f ? "top" : "left",
                l = "up" === f || "left" === f,
                m = {},
                n = {},
                o = {},
                p = e.queue().length; for (a.effects.createPlaceholder(e), m[k] = (l ? "-=" : "+=") + g, n[k] = (l ? "+=" : "-=") + 2 * g, o[k] = (l ? "-=" : "+=") + 2 * g, e.animate(m, j, b.easing); h > d; d++) e.animate(n, j, b.easing).animate(o, j, b.easing);
            e.animate(n, j, b.easing).animate(m, j / 2, b.easing).queue(c), a.effects.unshift(e, p, i + 1) }), a.effects.define("slide", "show", function(b, c) { var d, e, f = a(this),
                g = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
                h = b.mode,
                i = b.direction || "left",
                j = "up" === i || "down" === i ? "top" : "left",
                k = "up" === i || "left" === i,
                l = b.distance || f["top" === j ? "outerHeight" : "outerWidth"](!0),
                m = {};
            a.effects.createPlaceholder(f), d = f.cssClip(), e = f.position()[j], m[j] = (k ? -1 : 1) * l + e, m.clip = f.cssClip(), m.clip[g[i][1]] = m.clip[g[i][0]], "show" === h && (f.cssClip(m.clip), f.css(j, m[j]), m.clip = d, m[j] = e), f.animate(m, { queue: !1, duration: b.duration, easing: b.easing, complete: c }) });
        var q;
        a.uiBackCompat !== !1 && (q = a.effects.define("transfer", function(b, c) { a(this).transfer(b, c) }))
    }), ! function(a) {
        function b(a, b) { if (!(a.originalEvent.touches.length > 1)) { a.preventDefault(); var c = a.originalEvent.changedTouches[0],
                    d = document.createEvent("MouseEvents");
                d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d) } } if (a.support.touch = "ontouchend" in document, a.support.touch) { var c, d = a.ui.mouse.prototype,
                e = d._mouseInit,
                f = d._mouseDestroy;
            d._touchStart = function(a) { var d = this;!c && d._mouseCapture(a.originalEvent.changedTouches[0]) && (c = !0, d._touchMoved = !1, b(a, "mouseover"), b(a, "mousemove"), b(a, "mousedown")) }, d._touchMove = function(a) { c && (this._touchMoved = !0, b(a, "mousemove")) }, d._touchEnd = function(a) { c && (b(a, "mouseup"), b(a, "mouseout"), this._touchMoved || b(a, "click"), c = !1) }, d._mouseInit = function() { var b = this;
                b.element.bind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), e.call(b) }, d._mouseDestroy = function() { var b = this;
                b.element.unbind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), f.call(b) } } }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(a, b, c, d, e) { return jQuery.easing[jQuery.easing.def](a, b, c, d, e) }, easeInQuad: function(a, b, c, d, e) { return d * (b /= e) * b + c }, easeOutQuad: function(a, b, c, d, e) { return -d * (b /= e) * (b - 2) + c }, easeInOutQuad: function(a, b, c, d, e) { return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c }, easeInCubic: function(a, b, c, d, e) { return d * (b /= e) * b * b + c }, easeOutCubic: function(a, b, c, d, e) { return d * ((b = b / e - 1) * b * b + 1) + c }, easeInOutCubic: function(a, b, c, d, e) { return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c }, easeInQuart: function(a, b, c, d, e) { return d * (b /= e) * b * b * b + c }, easeOutQuart: function(a, b, c, d, e) { return -d * ((b = b / e - 1) * b * b * b - 1) + c }, easeInOutQuart: function(a, b, c, d, e) { return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c }, easeInQuint: function(a, b, c, d, e) { return d * (b /= e) * b * b * b * b + c }, easeOutQuint: function(a, b, c, d, e) { return d * ((b = b / e - 1) * b * b * b * b + 1) + c }, easeInOutQuint: function(a, b, c, d, e) { return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c }, easeInSine: function(a, b, c, d, e) { return -d * Math.cos(b / e * (Math.PI / 2)) + d + c }, easeOutSine: function(a, b, c, d, e) { return d * Math.sin(b / e * (Math.PI / 2)) + c }, easeInOutSine: function(a, b, c, d, e) { return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c }, easeInExpo: function(a, b, c, d, e) { return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c }, easeOutExpo: function(a, b, c, d, e) { return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c }, easeInOutExpo: function(a, b, c, d, e) { return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c }, easeInCirc: function(a, b, c, d, e) { return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c }, easeOutCirc: function(a, b, c, d, e) { return d * Math.sqrt(1 - (b = b / e - 1) * b) + c }, easeInOutCirc: function(a, b, c, d, e) { return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c }, easeInElastic: function(a, b, c, d, e) { var f = 1.70158,
                g = 0,
                h = d; if (0 == b) return c; if (1 == (b /= e)) return c + d; if (g || (g = .3 * e), h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c }, easeOutElastic: function(a, b, c, d, e) { var f = 1.70158,
                g = 0,
                h = d; if (0 == b) return c; if (1 == (b /= e)) return c + d; if (g || (g = .3 * e), h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c }, easeInOutElastic: function(a, b, c, d, e) { var f = 1.70158,
                g = 0,
                h = d; if (0 == b) return c; if (2 == (b /= e / 2)) return c + d; if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); return b < 1 ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c }, easeInBack: function(a, b, c, d, e, f) { return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c }, easeOutBack: function(a, b, c, d, e, f) { return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c }, easeInOutBack: function(a, b, c, d, e, f) { return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c }, easeInBounce: function(a, b, c, d, e) { return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c }, easeOutBounce: function(a, b, c, d, e) { return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c }, easeInOutBounce: function(a, b, c, d, e) { return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c } }), String.prototype.repeat || ! function() { "use strict"; var a = function() { try { var a = {},
                        b = Object.defineProperty,
                        c = b(a, a, a) && b } catch (d) {} return c }(),
            b = function(a) { if (null == this) throw TypeError(); var b = String(this),
                    c = a ? Number(a) : 0; if (c != c && (c = 0), c < 0 || c == 1 / 0) throw RangeError(); for (var d = ""; c;) c % 2 == 1 && (d += b), c > 1 && (b += b), c >>= 1; return d };
        a ? a(String.prototype, "repeat", { value: b, configurable: !0, writable: !0 }) : String.prototype.repeat = b }(), ! function() { "use strict";

        function a(a) { return c(d(a), arguments) }

        function b(b, c) { return a.apply(null, [b].concat(c || [])) }

        function c(b, c) { var d, f, g, h, i, j, k, l, m, n = 1,
                o = b.length,
                p = ""; for (f = 0; f < o; f++)
                if ("string" == typeof b[f]) p += b[f];
                else if ("object" == typeof b[f]) { if (h = b[f], h.keys)
                    for (d = c[n], g = 0; g < h.keys.length; g++) { if (!d.hasOwnProperty(h.keys[g])) throw new Error(a('[sprintf] property "%s" does not exist', h.keys[g]));
                        d = d[h.keys[g]] } else d = h.param_no ? c[h.param_no] : c[n++]; if (e.not_type.test(h.type) && e.not_primitive.test(h.type) && d instanceof Function && (d = d()), e.numeric_arg.test(h.type) && "number" != typeof d && isNaN(d)) throw new TypeError(a("[sprintf] expecting number but found %T", d)); switch (e.number.test(h.type) && (l = d >= 0), h.type) {
                    case "b":
                        d = parseInt(d, 10).toString(2); break;
                    case "c":
                        d = String.fromCharCode(parseInt(d, 10)); break;
                    case "d":
                    case "i":
                        d = parseInt(d, 10); break;
                    case "j":
                        d = JSON.stringify(d, null, h.width ? parseInt(h.width) : 0); break;
                    case "e":
                        d = h.precision ? parseFloat(d).toExponential(h.precision) : parseFloat(d).toExponential(); break;
                    case "f":
                        d = h.precision ? parseFloat(d).toFixed(h.precision) : parseFloat(d); break;
                    case "g":
                        d = h.precision ? String(Number(d.toPrecision(h.precision))) : parseFloat(d); break;
                    case "o":
                        d = (parseInt(d, 10) >>> 0).toString(8); break;
                    case "s":
                        d = String(d), d = h.precision ? d.substring(0, h.precision) : d; break;
                    case "t":
                        d = String(!!d), d = h.precision ? d.substring(0, h.precision) : d; break;
                    case "T":
                        d = Object.prototype.toString.call(d).slice(8, -1).toLowerCase(), d = h.precision ? d.substring(0, h.precision) : d; break;
                    case "u":
                        d = parseInt(d, 10) >>> 0; break;
                    case "v":
                        d = d.valueOf(), d = h.precision ? d.substring(0, h.precision) : d; break;
                    case "x":
                        d = (parseInt(d, 10) >>> 0).toString(16); break;
                    case "X":
                        d = (parseInt(d, 10) >>> 0).toString(16).toUpperCase() } e.json.test(h.type) ? p += d : (!e.number.test(h.type) || l && !h.sign ? m = "" : (m = l ? "+" : "-", d = d.toString().replace(e.sign, "")), j = h.pad_char ? "0" === h.pad_char ? "0" : h.pad_char.charAt(1) : " ", k = h.width - (m + d).length, i = h.width && k > 0 ? j.repeat(k) : "", p += h.align ? m + d + i : "0" === j ? m + i + d : i + m + d) } return p }

        function d(a) { if (f[a]) return f[a]; for (var b, c = a, d = [], g = 0; c;) { if (null !== (b = e.text.exec(c))) d.push(b[0]);
                else if (null !== (b = e.modulo.exec(c))) d.push("%");
                else { if (null === (b = e.placeholder.exec(c))) throw new SyntaxError("[sprintf] unexpected placeholder"); if (b[2]) { g |= 1; var h = [],
                            i = b[2],
                            j = []; if (null === (j = e.key.exec(i))) throw new SyntaxError("[sprintf] failed to parse named argument key"); for (h.push(j[1]);
                            "" !== (i = i.substring(j[0].length));)
                            if (null !== (j = e.key_access.exec(i))) h.push(j[1]);
                            else { if (null === (j = e.index_access.exec(i))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                h.push(j[1]) } b[2] = h } else g |= 2; if (3 === g) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                    d.push({ placeholder: b[0], param_no: b[1], keys: b[2], sign: b[3], pad_char: b[4], align: b[5], width: b[6], precision: b[7], type: b[8] }) } c = c.substring(b[0].length) } return f[a] = d } var e = { not_string: /[^s]/, not_bool: /[^t]/, not_type: /[^T]/, not_primitive: /[^v]/, number: /[diefg]/, numeric_arg: /[bcdiefguxX]/, json: /[j]/, not_json: /[^j]/, text: /^[^\x25]+/, modulo: /^\x25{2}/, placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/, key: /^([a-z_][a-z_\d]*)/i, key_access: /^\.([a-z_][a-z_\d]*)/i, index_access: /^\[(\d+)\]/, sign: /^[\+\-]/ },
            f = Object.create(null); "undefined" != typeof exports && (exports.sprintf = a, exports.vsprintf = b), "undefined" != typeof window && (window.sprintf = a, window.vsprintf = b, "function" == typeof define && define.amd && define(function() { return { sprintf: a, vsprintf: b } })) }(), + function(a) { "use strict";

        function b() { var a = document.createElement("bootstrap"),
                b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var c in b)
                if (void 0 !== a.style[c]) return { end: b[c] }; return !1 } a.fn.emulateTransitionEnd = function(b) { var c = !1,
                d = this;
            a(this).one("bsTransitionEnd", function() { c = !0 }); var e = function() { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function() { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function(b) { if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments) } }) }) }(jQuery), + function(a) { "use strict";

        function b(b) { return this.each(function() { var c = a(this),
                    e = c.data("bs.alert");
                e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c) }) } var c = '[data-dismiss="alert"]',
            d = function(b) { a(b).on("click", c, this.close) };
        d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
            function c() { g.detach().trigger("closed.bs.alert").remove() } var e = a(this),
                f = e.attr("data-target");
            f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")); var g = a(f);
            b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c()) }; var e = a.fn.alert;
        a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close) }(jQuery), + function(a) { "use strict";

        function b(b) { return this.each(function() { var d = a(this),
                    e = d.data("bs.button"),
                    f = "object" == typeof b && b;
                e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b) }) } var c = function(b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 };
        c.VERSION = "3.3.6", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function(b) { var c = "disabled",
                d = this.$element,
                e = d.is("input") ? "val" : "html",
                f = d.data();
            b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() { d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c)) }, this), 0) }, c.prototype.toggle = function() { var a = !0,
                b = this.$element.closest('[data-toggle="buttons"]'); if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") }; var d = a.fn.button;
        a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) { var d = a(c.target);
            d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault() }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) { a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type)) }) }(jQuery), + function(a) { "use strict";

        function b(b) { return this.each(function() { var d = a(this),
                    e = d.data("bs.carousel"),
                    f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                    g = "string" == typeof b ? b : f.slide;
                e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle() }) } var c = function(b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) };
        c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function(a) { if (!/input|textarea/i.test(a.target.tagName)) { switch (a.which) {
                    case 37:
                        this.prev(); break;
                    case 39:
                        this.next(); break;
                    default:
                        return } a.preventDefault() } }, c.prototype.cycle = function(b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function(a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.getItemForDirection = function(a, b) { var c = this.getItemIndex(b),
                d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1; if (d && !this.options.wrap) return b; var e = "prev" == a ? -1 : 1,
                f = (c + e) % this.$items.length; return this.$items.eq(f) }, c.prototype.to = function(a) { var b = this,
                c = this.getItemIndex(this.$active = this.$element.find(".item.active")); if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { b.to(a) }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a)) }, c.prototype.pause = function(b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function() { if (!this.sliding) return this.slide("next") }, c.prototype.prev = function() { if (!this.sliding) return this.slide("prev") }, c.prototype.slide = function(b, d) { var e = this.$element.find(".item.active"),
                f = d || this.getItemForDirection(b, e),
                g = this.interval,
                h = "next" == b ? "left" : "right",
                i = this; if (f.hasClass("active")) return this.sliding = !1; var j = f[0],
                k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h }); if (this.$element.trigger(k), !k.isDefaultPrevented()) { if (this.sliding = !0, g && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                    l && l.addClass("active") } var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h }); return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() { f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() { i.$element.trigger(m) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this } }; var d = a.fn.carousel;
        a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() { return a.fn.carousel = d, this }; var e = function(c) { var d, e = a(this),
                f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")); if (f.hasClass("carousel")) { var g = a.extend({}, f.data(), e.data()),
                    h = e.attr("data-slide-to");
                h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault() } };
        a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() { a('[data-ride="carousel"]').each(function() { var c = a(this);
                b.call(c, c.data()) }) }) }(jQuery), + function(a) { "use strict";

        function b(b) { var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""); return a(d) }

        function c(b) { return this.each(function() { var c = a(this),
                    e = c.data("bs.collapse"),
                    f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]() }) } var d = function(b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
        d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function() { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, d.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) { var f = a.Event("show.bs.collapse"); if (this.$element.trigger(f), !f.isDefaultPrevented()) { e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null)); var g = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var h = function() { this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!a.support.transition) return h.call(this); var i = a.camelCase(["scroll", g].join("-"));
                        this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]) } } } }, d.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var b = a.Event("hide.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.dimension();
                    this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var e = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this) } } }, d.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, d.prototype.getParent = function() { return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) { var e = a(d);
                this.addAriaAndCollapsedClass(b(e), e) }, this)).end() }, d.prototype.addAriaAndCollapsedClass = function(a, b) { var c = a.hasClass("in");
            a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c) }; var e = a.fn.collapse;
        a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() { return a.fn.collapse = e, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) { var e = a(this);
            e.attr("data-target") || d.preventDefault(); var f = b(e),
                g = f.data("bs.collapse"),
                h = g ? "toggle" : e.data();
            c.call(f, h) }) }(jQuery), + function(a) { "use strict";

        function b(b) { var c = b.attr("data-target");
            c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")); var d = c && a(c); return d && d.length ? d : b.parent() }

        function c(c) { c && 3 === c.which || (a(e).remove(), a(f).each(function() { var d = a(this),
                    e = b(d),
                    f = { relatedTarget: this };
                e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f))))) })) }

        function d(b) { return this.each(function() { var c = a(this),
                    d = c.data("bs.dropdown");
                d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c) }) } var e = ".dropdown-backdrop",
            f = '[data-toggle="dropdown"]',
            g = function(b) { a(b).on("click.bs.dropdown", this.toggle) };
        g.VERSION = "3.3.6", g.prototype.toggle = function(d) { var e = a(this); if (!e.is(".disabled, :disabled")) { var f = b(e),
                    g = f.hasClass("open"); if (c(), !g) { "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c); var h = { relatedTarget: this }; if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                    e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h)) } return !1 } }, g.prototype.keydown = function(c) { if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) { var d = a(this); if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) { var e = b(d),
                        g = e.hasClass("open"); if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click"); var h = " li:not(.disabled):visible a",
                        i = e.find(".dropdown-menu" + h); if (i.length) { var j = i.index(c.target);
                        38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus") } } } }; var h = a.fn.dropdown;
        a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown) }(jQuery), + function(a) { "use strict";

        function b(b, d) { return this.each(function() { var e = a(this),
                    f = e.data("bs.modal"),
                    g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
                f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d) }) } var c = function(b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
        c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function(a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function(b) { var d = this,
                e = a.Event("show.bs.modal", { relatedTarget: b });
            this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { d.$element.one("mouseup.dismiss.bs.modal", function(b) { a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0) }) }), this.backdrop(function() { var e = a.support.transition && d.$element.hasClass("fade");
                d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus(); var f = a.Event("shown.bs.modal", { relatedTarget: b });
                e ? d.$dialog.one("bsTransitionEnd", function() { d.$element.trigger("focus").trigger(f) }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f) })) }, c.prototype.hide = function(b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()) }, c.prototype.enforceFocus = function() { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) { this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.resize = function() { this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal") }, c.prototype.hideModal = function() { var a = this;
            this.$element.hide(), this.backdrop(function() { a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal") }) }, c.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function(b) { var d = this,
                e = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var f = a.support.transition && e; if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var g = function() { d.removeBackdrop(), b && b() };
                a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g() } else b && b() }, c.prototype.handleUpdate = function() { this.adjustDialog() }, c.prototype.adjustDialog = function() { var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" }) }, c.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, c.prototype.checkScrollbar = function() { var a = window.innerWidth; if (!a) { var b = document.documentElement.getBoundingClientRect();
                a = b.right - Math.abs(b.left) } this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar() }, c.prototype.setScrollbar = function() { var a = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth) }, c.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, c.prototype.measureScrollbar = function() { var a = document.createElement("div");
            a.className = "modal-scrollbar-measure", this.$body.append(a); var b = a.offsetWidth - a.clientWidth; return this.$body[0].removeChild(a), b }; var d = a.fn.modal;
        a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) { var d = a(this),
                e = d.attr("href"),
                f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
                g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
            d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function() { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this) }) }(jQuery), + function(a) {
        "use strict";

        function b(b) { return this.each(function() { var d = a(this),
                    e = d.data("bs.tooltip"),
                    f = "object" == typeof b && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]()) }) }
        var c = function(a, b) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b) };
        c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function(b, c, d) { if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var e = this.options.trigger.split(" "), f = e.length; f--;) { var g = e[f]; if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                else if ("manual" != g) { var h = "hover" == g ? "mouseenter" : "focusin",
                        i = "hover" == g ? "mouseleave" : "focusout";
                    this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } } this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.getOptions = function(b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function() { var b = {},
                c = this.getDefaults(); return this._options && a.each(this._options, function(a, d) { c[a] != d && (b[a] = d) }), b }, c.prototype.enter = function(b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
            return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show());
        }, c.prototype.isInStateTrue = function() { for (var a in this.inState)
                if (this.inState[a]) return !0; return !1 }, c.prototype.leave = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide() }, c.prototype.show = function() { var b = a.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(b); var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (b.isDefaultPrevented() || !d) return; var e = this,
                    f = this.tip(),
                    g = this.getUID(this.type);
                this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade"); var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                    i = /\s?auto?\s?/i,
                    j = i.test(h);
                j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var k = this.getPosition(),
                    l = f[0].offsetWidth,
                    m = f[0].offsetHeight; if (j) { var n = h,
                        o = this.getPosition(this.$viewport);
                    h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h) } var p = this.getCalculatedOffset(h, k, l, m);
                this.applyPlacement(p, h); var q = function() { var a = e.hoverState;
                    e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e) };
                a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q() } }, c.prototype.applyPlacement = function(b, c) { var d = this.tip(),
                e = d[0].offsetWidth,
                f = d[0].offsetHeight,
                g = parseInt(d.css("margin-top"), 10),
                h = parseInt(d.css("margin-left"), 10);
            isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function(a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in"); var i = d[0].offsetWidth,
                j = d[0].offsetHeight; "top" == c && j != f && (b.top = b.top + f - j); var k = this.getViewportAdjustedDelta(c, b, i, j);
            k.left ? b.left += k.left : b.top += k.top; var l = /top|bottom/.test(c),
                m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
                n = l ? "offsetWidth" : "offsetHeight";
            d.offset(b), this.replaceArrow(m, d[0][n], l) }, c.prototype.replaceArrow = function(a, b, c) { this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "") }, c.prototype.setContent = function() { var a = this.tip(),
                b = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, c.prototype.hide = function(b) {
            function d() { "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b() } var e = this,
                f = a(this.$tip),
                g = a.Event("hide.bs." + this.type); if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this }, c.prototype.fixTitle = function() { var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, c.prototype.hasContent = function() { return this.getTitle() }, c.prototype.getPosition = function(b) { b = b || this.$element; var c = b[0],
                d = "BODY" == c.tagName,
                e = c.getBoundingClientRect();
            null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top })); var f = d ? { top: 0, left: 0 } : b.offset(),
                g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
                h = d ? { width: a(window).width(), height: a(window).height() } : null; return a.extend({}, e, g, h, f) }, c.prototype.getCalculatedOffset = function(a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) { var e = { top: 0, left: 0 }; if (!this.$viewport) return e; var f = this.options.viewport && this.options.viewport.padding || 0,
                g = this.getPosition(this.$viewport); if (/right|left/.test(a)) { var h = b.top - f - g.scroll,
                    i = b.top + f - g.scroll + d;
                h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i) } else { var j = b.left - f,
                    k = b.left + f + c;
                j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k) } return e }, c.prototype.getTitle = function() { var a, b = this.$element,
                c = this.options; return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, c.prototype.getUID = function(a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function() { if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.enable = function() { this.enabled = !0 }, c.prototype.disable = function() { this.enabled = !1 }, c.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, c.prototype.toggle = function(b) { var c = this;
            b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, c.prototype.destroy = function() { var a = this;
            clearTimeout(this.timeout), this.hide(function() { a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null }) };
        var d = a.fn.tooltip;
        a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() { return a.fn.tooltip = d, this }
    }(jQuery), + function(a) { "use strict";

        function b(b) { return this.each(function() { var d = a(this),
                    e = d.data("bs.popover"),
                    f = "object" == typeof b && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.init("popover", a, b) }; if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
        c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.setContent = function() { var a = this.tip(),
                b = this.getTitle(),
                c = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, c.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, c.prototype.getContent = function() { var a = this.$element,
                b = this.options; return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var d = a.fn.popover;
        a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() { return a.fn.popover = d, this } }(jQuery), + function(a) { "use strict";

        function b(c, d) { this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process() }

        function c(c) { return this.each(function() { var d = a(this),
                    e = d.data("bs.scrollspy"),
                    f = "object" == typeof c && c;
                e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) } b.VERSION = "3.3.6", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function() { var b = this,
                c = "offset",
                d = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() { var b = a(this),
                    e = b.data("target") || b.attr("href"),
                    f = /^#./.test(e) && a(e); return f && f.length && f.is(":visible") && [
                    [f[c]().top + d, e]
                ] || null }).sort(function(a, b) { return a[0] - b[0] }).each(function() { b.offsets.push(this[0]), b.targets.push(this[1]) }) }, b.prototype.process = function() { var a, b = this.$scrollElement.scrollTop() + this.options.offset,
                c = this.getScrollHeight(),
                d = this.options.offset + c - this.$scrollElement.height(),
                e = this.offsets,
                f = this.targets,
                g = this.activeTarget; if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a); if (g && b < e[0]) return this.activeTarget = null, this.clear(); for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function(b) { this.activeTarget = b, this.clear(); var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
                d = a(c).parents("li").addClass("active");
            d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy") }, b.prototype.clear = function() { a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") }; var d = a.fn.scrollspy;
        a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function() { a('[data-spy="scroll"]').each(function() { var b = a(this);
                c.call(b, b.data()) }) }) }(jQuery), + function(a) { "use strict";

        function b(b) { return this.each(function() { var d = a(this),
                    e = d.data("bs.tab");
                e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]() }) } var c = function(b) { this.element = a(b) };
        c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function() { var b = this.element,
                c = b.closest("ul:not(.dropdown-menu)"),
                d = b.data("target"); if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) { var e = c.find(".active:last a"),
                    f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                    g = a.Event("show.bs.tab", { relatedTarget: e[0] }); if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) { var h = a(d);
                    this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() { e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] }) }) } } }, c.prototype.activate = function(b, d, e) {
            function f() { g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e() } var g = d.find("> .active"),
                h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
            g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in") }; var d = a.fn.tab;
        a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() { return a.fn.tab = d, this }; var e = function(c) { c.preventDefault(), b.call(a(this), "show") };
        a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e) }(jQuery), + function(a) { "use strict";

        function b(b) { return this.each(function() { var d = a(this),
                    e = d.data("bs.affix"),
                    f = "object" == typeof b && b;
                e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]() }) } var c = function(b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
        c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function(a, b, c, d) { var e = this.$target.scrollTop(),
                f = this.$element.offset(),
                g = this.$target.height(); if (null != c && "top" == this.affixed) return e < c && "top"; if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom"; var h = null == this.affixed,
                i = h ? e : f.top,
                j = h ? g : b; return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom" }, c.prototype.getPinnedOffset = function() { if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(c.RESET).addClass("affix"); var a = this.$target.scrollTop(),
                b = this.$element.offset(); return this.pinnedOffset = b.top - a }, c.prototype.checkPositionWithEventLoop = function() { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function() { if (this.$element.is(":visible")) { var b = this.$element.height(),
                    d = this.options.offset,
                    e = d.top,
                    f = d.bottom,
                    g = Math.max(a(document).height(), a(document.body).height()); "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element)); var h = this.getState(g, b, e, f); if (this.affixed != h) { null != this.unpin && this.$element.css("top", ""); var i = "affix" + (h ? "-" + h : ""),
                        j = a.Event(i + ".bs.affix"); if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                    this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix") } "bottom" == h && this.$element.offset({ top: g - b - f }) } }; var d = a.fn.affix;
        a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() { return a.fn.affix = d, this }, a(window).on("load", function() { a('[data-spy="affix"]').each(function() { var c = a(this),
                    d = c.data();
                d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d) }) }) }(jQuery), function() {
        ! function(a) {
            var b = this || (0, eval)("this"),
                c = b.document,
                d = b.navigator,
                e = b.jQuery,
                f = b.JSON;
            ! function(a) { "function" == typeof define && define.amd ? define(["exports", "require"], a) : a("object" == typeof exports && "object" == typeof module ? module.exports || exports : b.ko = {}) }(function(g, h) {
                function i(a, b) { return (null === a || typeof a in q) && a === b }

                function j(b, c) { var d; return function() { d || (d = p.a.setTimeout(function() { d = a, b() }, c)) } }

                function k(a, b) { var c; return function() { clearTimeout(c), c = p.a.setTimeout(a, b) } }

                function l(a, b) { b && b !== r ? "beforeChange" === b ? this.Kb(a) : this.Ha(a, b) : this.Lb(a) }

                function m(a, b) { null !== b && b.k && b.k() }

                function n(a, b) { var c = this.Hc,
                        d = c[w];
                    d.R || (this.lb && this.Ma[b] ? (c.Pb(b, a, this.Ma[b]), this.Ma[b] = null, --this.lb) : d.r[b] || c.Pb(b, a, d.s ? { ia: a } : c.uc(a))) }

                function o(a, b, c, d) { p.d[a] = { init: function(a, e, f, g, h) { var i, j; return p.m(function() { var f = p.a.c(e()),
                                    g = !c != !f,
                                    k = !j;
                                (k || b || g !== i) && (k && p.va.Aa() && (j = p.a.ua(p.f.childNodes(a), !0)), g ? (k || p.f.da(a, p.a.ua(j)), p.eb(d ? d(h, f) : h, a)) : p.f.xa(a), i = g) }, null, { i: a }), { controlsDescendantBindings: !0 } } }, p.h.ta[a] = !1, p.f.Z[a] = !0 }
                var p = "undefined" != typeof g ? g : {};
                p.b = function(a, b) { for (var c = a.split("."), d = p, e = 0; e < c.length - 1; e++) d = d[c[e]];
                        d[c[c.length - 1]] = b }, p.G = function(a, b, c) { a[b] = c }, p.version = "3.4.0", p.b("version", p.version), p.options = { deferUpdates: !1, useOnlyNativeEvents: !1 }, p.a = function() {
                        function g(a, b) { for (var c in a) a.hasOwnProperty(c) && b(c, a[c]) }

                        function h(a, b) { if (b)
                                for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]); return a }

                        function i(a, b) { return a.__proto__ = b, a }

                        function j(a, b, c, d) { var e = a[b].match(r) || [];
                            p.a.q(c.match(r), function(a) { p.a.pa(e, a, d) }), a[b] = e.join(" ") } var k = { __proto__: [] } instanceof Array,
                            l = "function" == typeof Symbol,
                            m = {},
                            n = {};
                        m[d && /Firefox\/2/i.test(d.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"], m.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "), g(m, function(a, b) { if (b.length)
                                for (var c = 0, d = b.length; c < d; c++) n[b[c]] = a }); var o = { propertychange: !0 },
                            q = c && function() { for (var b = 3, d = c.createElement("div"), e = d.getElementsByTagName("i"); d.innerHTML = "<!--[if gt IE " + ++b + "]><i></i><![endif]-->", e[0];); return 4 < b ? b : a }(),
                            r = /\S+/g; return { cc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/], q: function(a, b) { for (var c = 0, d = a.length; c < d; c++) b(a[c], c) }, o: function(a, b) { if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b); for (var c = 0, d = a.length; c < d; c++)
                                    if (a[c] === b) return c; return -1 }, Sb: function(a, b, c) { for (var d = 0, e = a.length; d < e; d++)
                                    if (b.call(c, a[d], d)) return a[d]; return null }, La: function(a, b) { var c = p.a.o(a, b);
                                0 < c ? a.splice(c, 1) : 0 === c && a.shift() }, Tb: function(a) { a = a || []; for (var b = [], c = 0, d = a.length; c < d; c++) 0 > p.a.o(b, a[c]) && b.push(a[c]); return b }, fb: function(a, b) { a = a || []; for (var c = [], d = 0, e = a.length; d < e; d++) c.push(b(a[d], d)); return c }, Ka: function(a, b) { a = a || []; for (var c = [], d = 0, e = a.length; d < e; d++) b(a[d], d) && c.push(a[d]); return c }, ra: function(a, b) { if (b instanceof Array) a.push.apply(a, b);
                                else
                                    for (var c = 0, d = b.length; c < d; c++) a.push(b[c]); return a }, pa: function(a, b, c) { var d = p.a.o(p.a.zb(a), b);
                                0 > d ? c && a.push(b) : c || a.splice(d, 1) }, ka: k, extend: h, Xa: i, Ya: k ? i : h, D: g, Ca: function(a, b) { if (!a) return a; var c, d = {}; for (c in a) a.hasOwnProperty(c) && (d[c] = b(a[c], c, a)); return d }, ob: function(a) { for (; a.firstChild;) p.removeNode(a.firstChild) }, jc: function(a) { a = p.a.V(a); for (var b = (a[0] && a[0].ownerDocument || c).createElement("div"), d = 0, e = a.length; d < e; d++) b.appendChild(p.$(a[d])); return b }, ua: function(a, b) { for (var c = 0, d = a.length, e = []; c < d; c++) { var f = a[c].cloneNode(!0);
                                    e.push(b ? p.$(f) : f) } return e }, da: function(a, b) { if (p.a.ob(a), b)
                                    for (var c = 0, d = b.length; c < d; c++) a.appendChild(b[c]) }, qc: function(a, b) { var c = a.nodeType ? [a] : a; if (0 < c.length) { for (var d = c[0], e = d.parentNode, f = 0, g = b.length; f < g; f++) e.insertBefore(b[f], d); for (f = 0, g = c.length; f < g; f++) p.removeNode(c[f]) } }, za: function(a, b) { if (a.length) { for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) a.splice(0, 1); for (; 1 < a.length && a[a.length - 1].parentNode !== b;) a.length--; if (1 < a.length) { var c = a[0],
                                            d = a[a.length - 1]; for (a.length = 0; c !== d;) a.push(c), c = c.nextSibling;
                                        a.push(d) } } return a }, sc: function(a, b) { 7 > q ? a.setAttribute("selected", b) : a.selected = b }, $a: function(b) { return null === b || b === a ? "" : b.trim ? b.trim() : b.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") }, nd: function(a, b) { return a = a || "", !(b.length > a.length) && a.substring(0, b.length) === b }, Mc: function(a, b) { if (a === b) return !0; if (11 === a.nodeType) return !1; if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a); if (b.compareDocumentPosition) return 16 == (16 & b.compareDocumentPosition(a)); for (; a && a != b;) a = a.parentNode; return !!a }, nb: function(a) { return p.a.Mc(a, a.ownerDocument.documentElement) }, Qb: function(a) { return !!p.a.Sb(a, p.a.nb) }, A: function(a) { return a && a.tagName && a.tagName.toLowerCase() }, Wb: function(a) { return p.onError ? function() { try { return a.apply(this, arguments) } catch (b) { throw p.onError && p.onError(b), b } } : a }, setTimeout: function(a, b) { return setTimeout(p.a.Wb(a), b) }, $b: function(a) { setTimeout(function() { throw p.onError && p.onError(a), a }, 0) }, p: function(a, b, c) { var d = p.a.Wb(c); if (c = q && o[b], p.options.useOnlyNativeEvents || c || !e)
                                    if (c || "function" != typeof a.addEventListener) { if ("undefined" == typeof a.attachEvent) throw Error("Browser doesn't support addEventListener or attachEvent"); var f = function(b) { d.call(a, b) },
                                            g = "on" + b;
                                        a.attachEvent(g, f), p.a.F.oa(a, function() { a.detachEvent(g, f) }) } else a.addEventListener(b, d, !1);
                                else e(a).bind(b, d) }, Da: function(a, d) { if (!a || !a.nodeType) throw Error("element must be a DOM node when calling triggerEvent"); var f; if ("input" === p.a.A(a) && a.type && "click" == d.toLowerCase() ? (f = a.type, f = "checkbox" == f || "radio" == f) : f = !1, p.options.useOnlyNativeEvents || !e || f)
                                    if ("function" == typeof c.createEvent) { if ("function" != typeof a.dispatchEvent) throw Error("The supplied element doesn't support dispatchEvent");
                                        f = c.createEvent(n[d] || "HTMLEvents"), f.initEvent(d, !0, !0, b, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, a), a.dispatchEvent(f) } else if (f && a.click) a.click();
                                else { if ("undefined" == typeof a.fireEvent) throw Error("Browser doesn't support triggering events");
                                    a.fireEvent("on" + d) } else e(a).trigger(d) }, c: function(a) { return p.H(a) ? a() : a }, zb: function(a) { return p.H(a) ? a.t() : a }, bb: function(a, b, c) { var d;
                                b && ("object" == typeof a.classList ? (d = a.classList[c ? "add" : "remove"], p.a.q(b.match(r), function(b) { d.call(a.classList, b) })) : "string" == typeof a.className.baseVal ? j(a.className, "baseVal", b, c) : j(a, "className", b, c)) }, Za: function(b, c) { var d = p.a.c(c);
                                null !== d && d !== a || (d = ""); var e = p.f.firstChild(b);!e || 3 != e.nodeType || p.f.nextSibling(e) ? p.f.da(b, [b.ownerDocument.createTextNode(d)]) : e.data = d, p.a.Rc(b) }, rc: function(a, b) { if (a.name = b, 7 >= q) try { a.mergeAttributes(c.createElement("<input name='" + a.name + "'/>"), !1) } catch (d) {} }, Rc: function(a) { 9 <= q && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom)) }, Nc: function(a) { if (q) { var b = a.style.width;
                                    a.style.width = 0, a.style.width = b } }, hd: function(a, b) { a = p.a.c(a), b = p.a.c(b); for (var c = [], d = a; d <= b; d++) c.push(d); return c }, V: function(a) { for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c]); return b }, Yb: function(a) { return l ? Symbol(a) : a }, rd: 6 === q, sd: 7 === q, C: q, ec: function(a, b) { for (var c = p.a.V(a.getElementsByTagName("input")).concat(p.a.V(a.getElementsByTagName("textarea"))), d = "string" == typeof b ? function(a) { return a.name === b } : function(a) { return b.test(a.name) }, e = [], f = c.length - 1; 0 <= f; f--) d(c[f]) && e.push(c[f]); return e }, ed: function(a) { return "string" == typeof a && (a = p.a.$a(a)) ? f && f.parse ? f.parse(a) : new Function("return " + a)() : null }, Eb: function(a, b, c) { if (!f || !f.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"); return f.stringify(p.a.c(a), b, c) }, fd: function(a, b, d) { d = d || {}; var e = d.params || {},
                                    f = d.includeFields || this.cc,
                                    h = a; if ("object" == typeof a && "form" === p.a.A(a))
                                    for (var h = a.action, i = f.length - 1; 0 <= i; i--)
                                        for (var j = p.a.ec(a, f[i]), k = j.length - 1; 0 <= k; k--) e[j[k].name] = j[k].value;
                                b = p.a.c(b); var l = c.createElement("form");
                                l.style.display = "none", l.action = h, l.method = "post"; for (var m in b) a = c.createElement("input"), a.type = "hidden", a.name = m, a.value = p.a.Eb(p.a.c(b[m])), l.appendChild(a);
                                g(e, function(a, b) { var d = c.createElement("input");
                                    d.type = "hidden", d.name = a, d.value = b, l.appendChild(d) }), c.body.appendChild(l), d.submitter ? d.submitter(l) : l.submit(), setTimeout(function() { l.parentNode.removeChild(l) }, 0) } } }(), p.b("utils", p.a), p.b("utils.arrayForEach", p.a.q), p.b("utils.arrayFirst", p.a.Sb), p.b("utils.arrayFilter", p.a.Ka), p.b("utils.arrayGetDistinctValues", p.a.Tb), p.b("utils.arrayIndexOf", p.a.o), p.b("utils.arrayMap", p.a.fb), p.b("utils.arrayPushAll", p.a.ra), p.b("utils.arrayRemoveItem", p.a.La), p.b("utils.extend", p.a.extend), p.b("utils.fieldsIncludedWithJsonPost", p.a.cc), p.b("utils.getFormFields", p.a.ec), p.b("utils.peekObservable", p.a.zb), p.b("utils.postJson", p.a.fd), p.b("utils.parseJson", p.a.ed), p.b("utils.registerEventHandler", p.a.p), p.b("utils.stringifyJson", p.a.Eb), p.b("utils.range", p.a.hd), p.b("utils.toggleDomNodeCssClass", p.a.bb), p.b("utils.triggerEvent", p.a.Da), p.b("utils.unwrapObservable", p.a.c), p.b("utils.objectForEach", p.a.D), p.b("utils.addOrRemoveItem", p.a.pa), p.b("utils.setTextContent", p.a.Za), p.b("unwrap", p.a.c), Function.prototype.bind || (Function.prototype.bind = function(a) { var b = this; if (1 === arguments.length) return function() { return b.apply(a, arguments) }; var c = Array.prototype.slice.call(arguments, 1); return function() { var d = c.slice(0); return d.push.apply(d, arguments), b.apply(a, d) } }), p.a.e = new function() {
                        function b(b, f) { var g = b[d]; if (!g || "null" === g || !e[g]) { if (!f) return a;
                                g = b[d] = "ko" + c++, e[g] = {} } return e[g] } var c = 0,
                            d = "__ko__" + (new Date).getTime(),
                            e = {}; return { get: function(c, d) { var e = b(c, !1); return e === a ? a : e[d] }, set: function(c, d, e) { e === a && b(c, !1) === a || (b(c, !0)[d] = e) }, clear: function(a) { var b = a[d]; return !!b && (delete e[b], a[d] = null, !0) }, I: function() { return c++ + d } } }, p.b("utils.domData", p.a.e), p.b("utils.domData.clear", p.a.e.clear), p.a.F = new function() {
                        function b(b, c) { var e = p.a.e.get(b, d); return e === a && c && (e = [], p.a.e.set(b, d, e)), e }

                        function c(a) { var d = b(a, !1); if (d)
                                for (var d = d.slice(0), e = 0; e < d.length; e++) d[e](a); if (p.a.e.clear(a), p.a.F.cleanExternalData(a), g[a.nodeType])
                                for (d = a.firstChild; a = d;) d = a.nextSibling, 8 === a.nodeType && c(a) } var d = p.a.e.I(),
                            f = { 1: !0, 8: !0, 9: !0 },
                            g = { 1: !0, 9: !0 }; return { oa: function(a, c) { if ("function" != typeof c) throw Error("Callback must be a function");
                                b(a, !0).push(c) }, pc: function(c, e) { var f = b(c, !1);
                                f && (p.a.La(f, e), 0 == f.length && p.a.e.set(c, d, a)) }, $: function(a) { if (f[a.nodeType] && (c(a), g[a.nodeType])) { var b = [];
                                    p.a.ra(b, a.getElementsByTagName("*")); for (var d = 0, e = b.length; d < e; d++) c(b[d]) } return a }, removeNode: function(a) { p.$(a), a.parentNode && a.parentNode.removeChild(a) }, cleanExternalData: function(a) { e && "function" == typeof e.cleanData && e.cleanData([a]) } } }, p.$ = p.a.F.$, p.removeNode = p.a.F.removeNode, p.b("cleanNode", p.$), p.b("removeNode", p.removeNode), p.b("utils.domNodeDisposal", p.a.F), p.b("utils.domNodeDisposal.addDisposeCallback", p.a.F.oa), p.b("utils.domNodeDisposal.removeDisposeCallback", p.a.F.pc),
                    function() { var d = [0, "", ""],
                            f = [1, "<table>", "</table>"],
                            g = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            h = [1, "<select multiple='multiple'>", "</select>"],
                            i = { thead: f, tbody: f, tfoot: f, tr: [2, "<table><tbody>", "</tbody></table>"], td: g, th: g, option: h, optgroup: h },
                            j = 8 >= p.a.C;
                        p.a.ma = function(a, f) { var g; if (e) { if (e.parseHTML) g = e.parseHTML(a, f) || [];
                                else if ((g = e.clean([a], f)) && g[0]) { for (var h = g[0]; h.parentNode && 11 !== h.parentNode.nodeType;) h = h.parentNode;
                                    h.parentNode && h.parentNode.removeChild(h) } } else {
                                (g = f) || (g = c); var k, h = g.parentWindow || g.defaultView || b,
                                    l = p.a.$a(a).toLowerCase(),
                                    m = g.createElement("div"); for (k = (l = l.match(/^<([a-z]+)[ >]/)) && i[l[1]] || d, l = k[0], k = "ignored<div>" + k[1] + a + k[2] + "</div>", "function" == typeof h.innerShiv ? m.appendChild(h.innerShiv(k)) : (j && g.appendChild(m), m.innerHTML = k, j && m.parentNode.removeChild(m)); l--;) m = m.lastChild;
                                g = p.a.V(m.lastChild.childNodes) } return g }, p.a.Cb = function(b, c) { if (p.a.ob(b), c = p.a.c(c), null !== c && c !== a)
                                if ("string" != typeof c && (c = c.toString()), e) e(b).html(c);
                                else
                                    for (var d = p.a.ma(c, b.ownerDocument), f = 0; f < d.length; f++) b.appendChild(d[f]) } }(), p.b("utils.parseHtmlFragment", p.a.ma), p.b("utils.setHtml", p.a.Cb), p.M = function() {
                        function b(a, c) { if (a)
                                if (8 == a.nodeType) { var d = p.M.lc(a.nodeValue);
                                    null != d && c.push({ Lc: a, cd: d }) } else if (1 == a.nodeType)
                                for (var d = 0, e = a.childNodes, f = e.length; d < f; d++) b(e[d], c) } var c = {}; return { wb: function(a) { if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()"); var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1); return c[b] = a, "<!--[ko_memo:" + b + "]-->" }, xc: function(b, d) { var e = c[b]; if (e === a) throw Error("Couldn't find any memo with ID " + b + ". Perhaps it's already been unmemoized."); try { return e.apply(null, d || []), !0 } finally { delete c[b] } }, yc: function(a, c) { var d = [];
                                b(a, d); for (var e = 0, f = d.length; e < f; e++) { var g = d[e].Lc,
                                        h = [g];
                                    c && p.a.ra(h, c), p.M.xc(d[e].cd, h), g.nodeValue = "", g.parentNode && g.parentNode.removeChild(g) } }, lc: function(a) { return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null } } }(), p.b("memoization", p.M), p.b("memoization.memoize", p.M.wb), p.b("memoization.unmemoize", p.M.xc), p.b("memoization.parseMemoText", p.M.lc), p.b("memoization.unmemoizeDomNodeAndDescendants", p.M.yc), p.Y = function() {
                        function a() { if (f)
                                for (var a, b = f, c = 0; h < f;)
                                    if (a = e[h++]) { if (h > b) { if (5e3 <= ++c) { h = f, p.a.$b(Error("'Too much recursion' after processing " + c + " task groups.")); break } b = f } try { a() } catch (d) { p.a.$b(d) } } }

                        function d() { a(), h = f = e.length = 0 } var e = [],
                            f = 0,
                            g = 1,
                            h = 0; return { scheduler: b.MutationObserver ? function(a) { var b = c.createElement("div"); return new MutationObserver(a).observe(b, { attributes: !0 }),
                                    function() { b.classList.toggle("foo") } }(d) : c && "onreadystatechange" in c.createElement("script") ? function(a) { var b = c.createElement("script");
                                b.onreadystatechange = function() { b.onreadystatechange = null, c.documentElement.removeChild(b), b = null, a() }, c.documentElement.appendChild(b) } : function(a) { setTimeout(a, 0) }, Wa: function(a) { return f || p.Y.scheduler(d), e[f++] = a, g++ }, cancel: function(a) { a -= g - f, a >= h && a < f && (e[a] = null) }, resetForTesting: function() { var a = f - h; return h = f = e.length = 0, a }, md: a } }(), p.b("tasks", p.Y), p.b("tasks.schedule", p.Y.Wa), p.b("tasks.runEarly", p.Y.md), p.ya = { throttle: function(a, b) { a.throttleEvaluation = b; var c = null; return p.B({ read: a, write: function(d) { clearTimeout(c), c = p.a.setTimeout(function() { a(d) }, b) } }) }, rateLimit: function(a, b) { var c, d, e; "number" == typeof b ? c = b : (c = b.timeout, d = b.method), a.cb = !1, e = "notifyWhenChangesStop" == d ? k : j, a.Ta(function(a) { return e(a, c) }) }, deferred: function(b, c) { if (!0 !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                            b.cb || (b.cb = !0, b.Ta(function(c) { var d; return function() { p.Y.cancel(d), d = p.Y.Wa(c), b.notifySubscribers(a, "dirty") } })) }, notify: function(a, b) { a.equalityComparer = "always" == b ? null : i } };
                var q = { undefined: 1, "boolean": 1, number: 1, string: 1 };
                p.b("extenders", p.ya), p.vc = function(a, b, c) { this.ia = a, this.gb = b, this.Kc = c, this.R = !1, p.G(this, "dispose", this.k) }, p.vc.prototype.k = function() { this.R = !0, this.Kc() }, p.J = function() { p.a.Ya(this, s), s.rb(this) };
                var r = "change",
                    s = { rb: function(a) { a.K = {}, a.Nb = 1 }, X: function(a, b, c) { var d = this;
                            c = c || r; var e = new p.vc(d, b ? a.bind(b) : a, function() { p.a.La(d.K[c], e), d.Ia && d.Ia(c) }); return d.sa && d.sa(c), d.K[c] || (d.K[c] = []), d.K[c].push(e), e }, notifySubscribers: function(a, b) { if (b = b || r, b === r && this.zc(), this.Pa(b)) try { p.l.Ub(); for (var c, d = this.K[b].slice(0), e = 0; c = d[e]; ++e) c.R || c.gb(a) } finally { p.l.end() } }, Na: function() { return this.Nb }, Uc: function(a) { return this.Na() !== a }, zc: function() {++this.Nb }, Ta: function(a) { var b, c, d, e = this,
                                f = p.H(e);
                            e.Ha || (e.Ha = e.notifySubscribers, e.notifySubscribers = l); var g = a(function() { e.Mb = !1, f && d === e && (d = e()), b = !1, e.tb(c, d) && e.Ha(c = d) });
                            e.Lb = function(a) { e.Mb = b = !0, d = a, g() }, e.Kb = function(a) { b || (c = a, e.Ha(a, "beforeChange")) } }, Pa: function(a) { return this.K[a] && this.K[a].length }, Sc: function(a) { if (a) return this.K[a] && this.K[a].length || 0; var b = 0; return p.a.D(this.K, function(a, c) { "dirty" !== a && (b += c.length) }), b }, tb: function(a, b) { return !this.equalityComparer || !this.equalityComparer(a, b) }, extend: function(a) { var b = this; return a && p.a.D(a, function(a, c) { var d = p.ya[a]; "function" == typeof d && (b = d(b, c) || b) }), b } };
                p.G(s, "subscribe", s.X), p.G(s, "extend", s.extend), p.G(s, "getSubscriptionsCount", s.Sc), p.a.ka && p.a.Xa(s, Function.prototype), p.J.fn = s, p.hc = function(a) { return null != a && "function" == typeof a.X && "function" == typeof a.notifySubscribers }, p.b("subscribable", p.J), p.b("isSubscribable", p.hc), p.va = p.l = function() {
                    function a(a) { d.push(c), c = a }

                    function b() { c = d.pop() } var c, d = [],
                        e = 0; return { Ub: a, end: b, oc: function(a) { if (c) { if (!p.hc(a)) throw Error("Only subscribable things can act as dependencies");
                                c.gb.call(c.Gc, a, a.Cc || (a.Cc = ++e)) } }, w: function(c, d, e) { try { return a(), c.apply(d, e || []) } finally { b() } }, Aa: function() { if (c) return c.m.Aa() }, Sa: function() { if (c) return c.Sa } } }(), p.b("computedContext", p.va), p.b("computedContext.getDependenciesCount", p.va.Aa), p.b("computedContext.isInitial", p.va.Sa), p.b("ignoreDependencies", p.qd = p.l.w);
                var t = p.a.Yb("_latestValue");
                p.N = function(a) {
                    function b() { return 0 < arguments.length ? (b.tb(b[t], arguments[0]) && (b.ga(), b[t] = arguments[0], b.fa()), this) : (p.l.oc(b), b[t]) } return b[t] = a, p.a.ka || p.a.extend(b, p.J.fn), p.J.fn.rb(b), p.a.Ya(b, u), p.options.deferUpdates && p.ya.deferred(b, !0), b };
                var u = { equalityComparer: i, t: function() { return this[t] }, fa: function() { this.notifySubscribers(this[t]) }, ga: function() { this.notifySubscribers(this[t], "beforeChange") } };
                p.a.ka && p.a.Xa(u, p.J.fn);
                var v = p.N.gd = "__ko_proto__";
                u[v] = p.N, p.Oa = function(b, c) {
                    return null !== b && b !== a && b[v] !== a && (b[v] === c || p.Oa(b[v], c));
                }, p.H = function(a) { return p.Oa(a, p.N) }, p.Ba = function(a) { return !!("function" == typeof a && a[v] === p.N || "function" == typeof a && a[v] === p.B && a.Vc) }, p.b("observable", p.N), p.b("isObservable", p.H), p.b("isWriteableObservable", p.Ba), p.b("isWritableObservable", p.Ba), p.b("observable.fn", u), p.G(u, "peek", u.t), p.G(u, "valueHasMutated", u.fa), p.G(u, "valueWillMutate", u.ga), p.la = function(a) { if (a = a || [], "object" != typeof a || !("length" in a)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined."); return a = p.N(a), p.a.Ya(a, p.la.fn), a.extend({ trackArrayChanges: !0 }) }, p.la.fn = { remove: function(a) { for (var b = this.t(), c = [], d = "function" != typeof a || p.H(a) ? function(b) { return b === a } : a, e = 0; e < b.length; e++) { var f = b[e];
                            d(f) && (0 === c.length && this.ga(), c.push(f), b.splice(e, 1), e--) } return c.length && this.fa(), c }, removeAll: function(b) { if (b === a) { var c = this.t(),
                                d = c.slice(0); return this.ga(), c.splice(0, c.length), this.fa(), d } return b ? this.remove(function(a) { return 0 <= p.a.o(b, a) }) : [] }, destroy: function(a) { var b = this.t(),
                            c = "function" != typeof a || p.H(a) ? function(b) { return b === a } : a;
                        this.ga(); for (var d = b.length - 1; 0 <= d; d--) c(b[d]) && (b[d]._destroy = !0);
                        this.fa() }, destroyAll: function(b) { return b === a ? this.destroy(function() { return !0 }) : b ? this.destroy(function(a) { return 0 <= p.a.o(b, a) }) : [] }, indexOf: function(a) { var b = this(); return p.a.o(b, a) }, replace: function(a, b) { var c = this.indexOf(a);
                        0 <= c && (this.ga(), this.t()[c] = b, this.fa()) } }, p.a.ka && p.a.Xa(p.la.fn, p.N.fn), p.a.q("pop push reverse shift sort splice unshift".split(" "), function(a) { p.la.fn[a] = function() { var b = this.t();
                        this.ga(), this.Vb(b, a, arguments); var c = b[a].apply(b, arguments); return this.fa(), c === b ? this : c } }), p.a.q(["slice"], function(a) { p.la.fn[a] = function() { var b = this(); return b[a].apply(b, arguments) } }), p.b("observableArray", p.la), p.ya.trackArrayChanges = function(a, b) {
                    function c() { if (!e) { e = !0; var b = a.notifySubscribers;
                            a.notifySubscribers = function(a, c) { return c && c !== r || ++g, b.apply(this, arguments) }; var c = [].concat(a.t() || []);
                            f = null, d = a.X(function(b) { if (b = [].concat(b || []), a.Pa("arrayChange")) { var d;
                                    (!f || 1 < g) && (f = p.a.ib(c, b, a.hb)), d = f } c = b, f = null, g = 0, d && d.length && a.notifySubscribers(d, "arrayChange") }) } } if (a.hb = {}, b && "object" == typeof b && p.a.extend(a.hb, b), a.hb.sparse = !0, !a.Vb) { var d, e = !1,
                            f = null,
                            g = 0,
                            h = a.sa,
                            i = a.Ia;
                        a.sa = function(b) { h && h.call(a, b), "arrayChange" === b && c() }, a.Ia = function(b) { i && i.call(a, b), "arrayChange" !== b || a.Pa("arrayChange") || (d.k(), e = !1) }, a.Vb = function(a, b, c) {
                            function d(a, b, c) { return h[h.length] = { status: a, value: b, index: c } } if (e && !g) { var h = [],
                                    i = a.length,
                                    j = c.length,
                                    k = 0; switch (b) {
                                    case "push":
                                        k = i;
                                    case "unshift":
                                        for (b = 0; b < j; b++) d("added", c[b], k + b); break;
                                    case "pop":
                                        k = i - 1;
                                    case "shift":
                                        i && d("deleted", a[k], k); break;
                                    case "splice":
                                        b = Math.min(Math.max(0, 0 > c[0] ? i + c[0] : c[0]), i); for (var i = 1 === j ? i : Math.min(b + (c[1] || 0), i), j = b + j - 2, k = Math.max(i, j), l = [], m = [], n = 2; b < k; ++b, ++n) b < i && m.push(d("deleted", a[b], b)), b < j && l.push(d("added", c[n], b));
                                        p.a.dc(m, l); break;
                                    default:
                                        return } f = h } } } };
                var w = p.a.Yb("_state");
                p.m = p.B = function(b, c, d) {
                    function e() { if (0 < arguments.length) { if ("function" != typeof f) throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters."); return f.apply(g.pb, arguments), this } return p.l.oc(e), (g.S || g.s && e.Qa()) && e.aa(), g.T } if ("object" == typeof b ? d = b : (d = d || {}, b && (d.read = b)), "function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed"); var f = d.write,
                        g = { T: a, S: !0, Ra: !1, Fb: !1, R: !1, Va: !1, s: !1, jd: d.read, pb: c || d.owner, i: d.disposeWhenNodeIsRemoved || d.i || null, wa: d.disposeWhen || d.wa, mb: null, r: {}, L: 0, bc: null }; return e[w] = g, e.Vc = "function" == typeof f, p.a.ka || p.a.extend(e, p.J.fn), p.J.fn.rb(e), p.a.Ya(e, x), d.pure ? (g.Va = !0, g.s = !0, p.a.extend(e, y)) : d.deferEvaluation && p.a.extend(e, z), p.options.deferUpdates && p.ya.deferred(e, !0), g.i && (g.Fb = !0, g.i.nodeType || (g.i = null)), g.s || d.deferEvaluation || e.aa(), g.i && e.ba() && p.a.F.oa(g.i, g.mb = function() { e.k() }), e };
                var x = { equalityComparer: i, Aa: function() { return this[w].L }, Pb: function(a, b, c) { if (this[w].Va && b === this) throw Error("A 'pure' computed must not be called recursively");
                            this[w].r[a] = c, c.Ga = this[w].L++, c.na = b.Na() }, Qa: function() { var a, b, c = this[w].r; for (a in c)
                                if (c.hasOwnProperty(a) && (b = c[a], b.ia.Uc(b.na))) return !0 }, bd: function() { this.Fa && !this[w].Ra && this.Fa() }, ba: function() { return this[w].S || 0 < this[w].L }, ld: function() { this.Mb || this.ac() }, uc: function(a) { if (a.cb && !this[w].i) { var b = a.X(this.bd, this, "dirty"),
                                    c = a.X(this.ld, this); return { ia: a, k: function() { b.k(), c.k() } } } return a.X(this.ac, this) }, ac: function() { var a = this,
                                b = a.throttleEvaluation;
                            b && 0 <= b ? (clearTimeout(this[w].bc), this[w].bc = p.a.setTimeout(function() { a.aa(!0) }, b)) : a.Fa ? a.Fa() : a.aa(!0) }, aa: function(a) { var b = this[w],
                                c = b.wa; if (!b.Ra && !b.R) { if (b.i && !p.a.nb(b.i) || c && c()) { if (!b.Fb) return void this.k() } else b.Fb = !1;
                                b.Ra = !0; try { this.Qc(a) } finally { b.Ra = !1 } b.L || this.k() } }, Qc: function(b) { var c = this[w],
                                d = c.Va ? a : !c.L,
                                e = { Hc: this, Ma: c.r, lb: c.L };
                            p.l.Ub({ Gc: e, gb: n, m: this, Sa: d }), c.r = {}, c.L = 0, e = this.Pc(c, e), this.tb(c.T, e) && (c.s || this.notifySubscribers(c.T, "beforeChange"), c.T = e, c.s ? this.zc() : b && this.notifySubscribers(c.T)), d && this.notifySubscribers(c.T, "awake") }, Pc: function(a, b) { try { var c = a.jd; return a.pb ? c.call(a.pb) : c() } finally { p.l.end(), b.lb && !a.s && p.a.D(b.Ma, m), a.S = !1 } }, t: function() { var a = this[w]; return (a.S && !a.L || a.s && this.Qa()) && this.aa(), a.T }, Ta: function(a) { p.J.fn.Ta.call(this, a), this.Fa = function() { this.Kb(this[w].T), this[w].S = !0, this.Lb(this) } }, k: function() { var a = this[w];!a.s && a.r && p.a.D(a.r, function(a, b) { b.k && b.k() }), a.i && a.mb && p.a.F.pc(a.i, a.mb), a.r = null, a.L = 0, a.R = !0, a.S = !1, a.s = !1, a.i = null } },
                    y = { sa: function(a) { var b = this,
                                c = b[w]; if (!c.R && c.s && "change" == a) { if (c.s = !1, c.S || b.Qa()) c.r = null, c.L = 0, c.S = !0, b.aa();
                                else { var d = [];
                                    p.a.D(c.r, function(a, b) { d[b.Ga] = a }), p.a.q(d, function(a, d) { var e = c.r[a],
                                            f = b.uc(e.ia);
                                        f.Ga = d, f.na = e.na, c.r[a] = f }) } c.R || b.notifySubscribers(c.T, "awake") } }, Ia: function(b) { var c = this[w];
                            c.R || "change" != b || this.Pa("change") || (p.a.D(c.r, function(a, b) { b.k && (c.r[a] = { ia: b.ia, Ga: b.Ga, na: b.na }, b.k()) }), c.s = !0, this.notifySubscribers(a, "asleep")) }, Na: function() { var a = this[w]; return a.s && (a.S || this.Qa()) && this.aa(), p.J.fn.Na.call(this) } },
                    z = { sa: function(a) { "change" != a && "beforeChange" != a || this.t() } };
                p.a.ka && p.a.Xa(x, p.J.fn);
                var A = p.N.gd;
                p.m[A] = p.N, x[A] = p.m, p.Xc = function(a) { return p.Oa(a, p.m) }, p.Yc = function(a) { return p.Oa(a, p.m) && a[w] && a[w].Va }, p.b("computed", p.m), p.b("dependentObservable", p.m), p.b("isComputed", p.Xc), p.b("isPureComputed", p.Yc), p.b("computed.fn", x), p.G(x, "peek", x.t), p.G(x, "dispose", x.k), p.G(x, "isActive", x.ba), p.G(x, "getDependenciesCount", x.Aa), p.nc = function(a, b) { return "function" == typeof a ? p.m(a, b, { pure: !0 }) : (a = p.a.extend({}, a), a.pure = !0, p.m(a, b)) }, p.b("pureComputed", p.nc),
                    function() {
                        function b(e, f, g) { if (g = g || new d, e = f(e), "object" != typeof e || null === e || e === a || e instanceof RegExp || e instanceof Date || e instanceof String || e instanceof Number || e instanceof Boolean) return e; var h = e instanceof Array ? [] : {}; return g.save(e, h), c(e, function(c) { var d = f(e[c]); switch (typeof d) {
                                    case "boolean":
                                    case "number":
                                    case "string":
                                    case "function":
                                        h[c] = d; break;
                                    case "object":
                                    case "undefined":
                                        var i = g.get(d);
                                        h[c] = i !== a ? i : b(d, f, g) } }), h }

                        function c(a, b) { if (a instanceof Array) { for (var c = 0; c < a.length; c++) b(c); "function" == typeof a.toJSON && b("toJSON") } else
                                for (c in a) b(c) }

                        function d() { this.keys = [], this.Ib = [] } p.wc = function(a) { if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert."); return b(a, function(a) { for (var b = 0; p.H(a) && 10 > b; b++) a = a(); return a }) }, p.toJSON = function(a, b, c) { return a = p.wc(a), p.a.Eb(a, b, c) }, d.prototype = { save: function(a, b) { var c = p.a.o(this.keys, a);
                                0 <= c ? this.Ib[c] = b : (this.keys.push(a), this.Ib.push(b)) }, get: function(b) { return b = p.a.o(this.keys, b), 0 <= b ? this.Ib[b] : a } } }(), p.b("toJS", p.wc), p.b("toJSON", p.toJSON),
                    function() { p.j = { u: function(b) { switch (p.a.A(b)) {
                                    case "option":
                                        return !0 === b.__ko__hasDomDataOptionValue__ ? p.a.e.get(b, p.d.options.xb) : 7 >= p.a.C ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                                    case "select":
                                        return 0 <= b.selectedIndex ? p.j.u(b.options[b.selectedIndex]) : a;
                                    default:
                                        return b.value } }, ha: function(b, c, d) { switch (p.a.A(b)) {
                                    case "option":
                                        switch (typeof c) {
                                            case "string":
                                                p.a.e.set(b, p.d.options.xb, a), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c; break;
                                            default:
                                                p.a.e.set(b, p.d.options.xb, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" == typeof c ? c : "" } break;
                                    case "select":
                                        "" !== c && null !== c || (c = a); for (var e, f = -1, g = 0, h = b.options.length; g < h; ++g)
                                            if (e = p.j.u(b.options[g]), e == c || "" == e && c === a) { f = g; break }(d || 0 <= f || c === a && 1 < b.size) && (b.selectedIndex = f); break;
                                    default:
                                        null !== c && c !== a || (c = ""), b.value = c } } } }(), p.b("selectExtensions", p.j), p.b("selectExtensions.readValue", p.j.u), p.b("selectExtensions.writeValue", p.j.ha), p.h = function() {
                        function a(a) { a = p.a.$a(a), 123 === a.charCodeAt(0) && (a = a.slice(1, -1)); var b, c = [],
                                g = a.match(d),
                                h = [],
                                i = 0; if (g) { g.push(","); for (var j, k = 0; j = g[k]; ++k) { var l = j.charCodeAt(0); if (44 === l) { if (0 >= i) { c.push(b && h.length ? { key: b, value: h.join("") } : { unknown: b || h.join("") }), b = i = 0, h = []; continue } } else if (58 === l) { if (!i && !b && 1 === h.length) { b = h.pop(); continue } } else 47 === l && k && 1 < j.length ? (l = g[k - 1].match(e)) && !f[l[0]] && (a = a.substr(a.indexOf(j) + 1), g = a.match(d), g.push(","), k = -1, j = "/") : 40 === l || 123 === l || 91 === l ? ++i : 41 === l || 125 === l || 93 === l ? --i : b || h.length || 34 !== l && 39 !== l || (j = j.slice(1, -1));
                                    h.push(j) } } return c } var b = ["true", "false", "null", "undefined"],
                            c = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                            d = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
                            e = /[\])"'A-Za-z0-9_$]+$/,
                            f = { "in": 1, "return": 1, "typeof": 1 },
                            g = {}; return { ta: [], ea: g, yb: a, Ua: function(d, e) {
                                function f(a, d) { var e; if (!k) { var l = p.getBindingHandler(a); if (l && l.preprocess && !(d = l.preprocess(d, a, f))) return;
                                        (l = g[a]) && (e = d, 0 <= p.a.o(b, e) ? e = !1 : (l = e.match(c), e = null !== l && (l[1] ? "Object(" + l[1] + ")" + l[2] : e)), l = e), l && i.push("'" + a + "':function(_z){" + e + "=_z}") } j && (d = "function(){return " + d + " }"), h.push("'" + a + "':" + d) } e = e || {}; var h = [],
                                    i = [],
                                    j = e.valueAccessors,
                                    k = e.bindingParams,
                                    l = "string" == typeof d ? a(d) : d; return p.a.q(l, function(a) { f(a.key || a.unknown, a.value) }), i.length && f("_ko_property_writers", "{" + i.join(",") + " }"), h.join(",") }, ad: function(a, b) { for (var c = 0; c < a.length; c++)
                                    if (a[c].key == b) return !0; return !1 }, Ea: function(a, b, c, d, e) { a && p.H(a) ? !p.Ba(a) || e && a.t() === d || a(d) : (a = b.get("_ko_property_writers")) && a[c] && a[c](d) } } }(), p.b("expressionRewriting", p.h), p.b("expressionRewriting.bindingRewriteValidators", p.h.ta), p.b("expressionRewriting.parseObjectLiteral", p.h.yb), p.b("expressionRewriting.preProcessBindings", p.h.Ua), p.b("expressionRewriting._twoWayBindings", p.h.ea), p.b("jsonExpressionRewriting", p.h), p.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", p.h.Ua),
                    function() {
                        function a(a) { return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue) }

                        function b(a) { return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue) }

                        function d(c, d) { for (var e = c, f = 1, g = []; e = e.nextSibling;) { if (b(e) && (f--, 0 === f)) return g;
                                g.push(e), a(e) && f++ } if (!d) throw Error("Cannot find closing comment tag to match: " + c.nodeValue); return null }

                        function e(a, b) { var c = d(a, b); return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null } var f = c && "<!--test-->" === c.createComment("test").text,
                            g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                            h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                            i = { ul: !0, ol: !0 };
                        p.f = { Z: {}, childNodes: function(b) { return a(b) ? d(b) : b.childNodes }, xa: function(b) { if (a(b)) { b = p.f.childNodes(b); for (var c = 0, d = b.length; c < d; c++) p.removeNode(b[c]) } else p.a.ob(b) }, da: function(b, c) { if (a(b)) { p.f.xa(b); for (var d = b.nextSibling, e = 0, f = c.length; e < f; e++) d.parentNode.insertBefore(c[e], d) } else p.a.da(b, c) }, mc: function(b, c) { a(b) ? b.parentNode.insertBefore(c, b.nextSibling) : b.firstChild ? b.insertBefore(c, b.firstChild) : b.appendChild(c) }, gc: function(b, c, d) { d ? a(b) ? b.parentNode.insertBefore(c, d.nextSibling) : d.nextSibling ? b.insertBefore(c, d.nextSibling) : b.appendChild(c) : p.f.mc(b, c) }, firstChild: function(c) { return a(c) ? !c.nextSibling || b(c.nextSibling) ? null : c.nextSibling : c.firstChild }, nextSibling: function(c) { return a(c) && (c = e(c)), c.nextSibling && b(c.nextSibling) ? null : c.nextSibling }, Tc: a, pd: function(a) { return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null }, kc: function(c) { if (i[p.a.A(c)]) { var d = c.firstChild; if (d)
                                        do
                                            if (1 === d.nodeType) { var f;
                                                f = d.firstChild; var g = null; if (f)
                                                    do
                                                        if (g) g.push(f);
                                                        else if (a(f)) { var h = e(f, !0);
                                                    h ? f = h : g = [f] } else b(f) && (g = [f]); while (f = f.nextSibling); if (f = g)
                                                    for (g = d.nextSibling, h = 0; h < f.length; h++) g ? c.insertBefore(f[h], g) : c.appendChild(f[h]) } while (d = d.nextSibling) } } } }(), p.b("virtualElements", p.f), p.b("virtualElements.allowedBindings", p.f.Z), p.b("virtualElements.emptyNode", p.f.xa), p.b("virtualElements.insertAfter", p.f.gc), p.b("virtualElements.prepend", p.f.mc), p.b("virtualElements.setDomNodeChildren", p.f.da),
                    function() { p.Q = function() { this.Fc = {} }, p.a.extend(p.Q.prototype, { nodeHasBindings: function(a) { switch (a.nodeType) {
                                    case 1:
                                        return null != a.getAttribute("data-bind") || p.g.getComponentNameForNode(a);
                                    case 8:
                                        return p.f.Tc(a);
                                    default:
                                        return !1 } }, getBindings: function(a, b) { var c = this.getBindingsString(a, b),
                                    c = c ? this.parseBindingsString(c, b, a) : null; return p.g.Ob(c, a, b, !1) }, getBindingAccessors: function(a, b) { var c = this.getBindingsString(a, b),
                                    c = c ? this.parseBindingsString(c, b, a, { valueAccessors: !0 }) : null; return p.g.Ob(c, a, b, !0) }, getBindingsString: function(a) { switch (a.nodeType) {
                                    case 1:
                                        return a.getAttribute("data-bind");
                                    case 8:
                                        return p.f.pd(a);
                                    default:
                                        return null } }, parseBindingsString: function(a, b, c, d) { try { var e, f = this.Fc,
                                        g = a + (d && d.valueAccessors || ""); if (!(e = f[g])) { var h, i = "with($context){with($data||{}){return{" + p.h.Ua(a, d) + "}}}";
                                        h = new Function("$context", "$element", i), e = f[g] = h } return e(b, c) } catch (j) { throw j.message = "Unable to parse bindings.\nBindings value: " + a + "\nMessage: " + j.message, j } } }), p.Q.instance = new p.Q }(), p.b("bindingProvider", p.Q),
                    function() {
                        function c(a) { return function() { return a } }

                        function d(a) { return a() }

                        function f(a) { return p.a.Ca(p.l.w(a), function(b, c) { return function() { return a()[c] } }) }

                        function g(a, b, d) { return "function" == typeof a ? f(a.bind(null, b, d)) : p.a.Ca(a, c) }

                        function h(a, b) { return f(this.getBindings.bind(this, a, b)) }

                        function i(a, b, c) { var d, e = p.f.firstChild(b),
                                f = p.Q.instance,
                                g = f.preprocessNode; if (g) { for (; d = e;) e = p.f.nextSibling(d), g.call(f, d);
                                e = p.f.firstChild(b) } for (; d = e;) e = p.f.nextSibling(d), j(a, d, c) }

                        function j(a, b, c) { var d = !0,
                                e = 1 === b.nodeType;
                            e && p.f.kc(b), (e && c || p.Q.instance.nodeHasBindings(b)) && (d = l(b, null, a, c).shouldBindDescendants), d && !n[p.a.A(b)] && i(a, b, !e) }

                        function k(a) { var b = [],
                                c = {},
                                d = []; return p.a.D(a, function e(f) { if (!c[f]) { var g = p.getBindingHandler(f);
                                    g && (g.after && (d.push(f), p.a.q(g.after, function(b) { if (a[b]) { if (-1 !== p.a.o(d, b)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + d.join(", "));
                                            e(b) } }), d.length--), b.push({ key: f, fc: g })), c[f] = !0 } }), b }

                        function l(b, c, e, f) { var g = p.a.e.get(b, o); if (!c) { if (g) throw Error("You cannot apply bindings multiple times to the same element.");
                                p.a.e.set(b, o, !0) }!g && f && p.tc(b, e); var i; if (c && "function" != typeof c) i = c;
                            else { var j = p.Q.instance,
                                    l = j.getBindingAccessors || h,
                                    m = p.B(function() { return (i = c ? c(e, b) : l.call(j, b, e)) && e.P && e.P(), i }, null, { i: b });
                                i && m.ba() || (m = null) } var n; if (i) { var q = m ? function(a) { return function() { return d(m()[a]) } } : function(a) { return i[a] },
                                    r = function() { return p.a.Ca(m ? m() : i, d) };
                                r.get = function(a) { return i[a] && d(q(a)) }, r.has = function(a) { return a in i }, f = k(i), p.a.q(f, function(c) { var d = c.fc.init,
                                        f = c.fc.update,
                                        g = c.key; if (8 === b.nodeType && !p.f.Z[g]) throw Error("The binding '" + g + "' cannot be used with virtual elements"); try { "function" == typeof d && p.l.w(function() { var c = d(b, q(g), r, e.$data, e); if (c && c.controlsDescendantBindings) { if (n !== a) throw Error("Multiple bindings (" + n + " and " + g + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                                n = g } }), "function" == typeof f && p.B(function() { f(b, q(g), r, e.$data, e) }, null, { i: b }) } catch (h) { throw h.message = 'Unable to process binding "' + g + ": " + i[g] + '"\nMessage: ' + h.message, h } }) } return { shouldBindDescendants: n === a } }

                        function m(a) { return a && a instanceof p.U ? a : new p.U(a) } p.d = {}; var n = { script: !0, textarea: !0, template: !0 };
                        p.getBindingHandler = function(a) { return p.d[a] }, p.U = function(b, c, d, e) { var f, g = this,
                                h = "function" == typeof b && !p.H(b),
                                i = p.B(function() { var a = h ? b() : b,
                                        f = p.a.c(a); return c ? (c.P && c.P(), p.a.extend(g, c), i && (g.P = i)) : (g.$parents = [], g.$root = f, g.ko = p), g.$rawData = a, g.$data = f, d && (g[d] = f), e && e(g, c, f), g.$data }, null, { wa: function() { return f && !p.a.Qb(f) }, i: !0 });
                            i.ba() && (g.P = i, i.equalityComparer = null, f = [], i.Ac = function(b) { f.push(b), p.a.F.oa(b, function(b) { p.a.La(f, b), f.length || (i.k(), g.P = i = a) }) }) }, p.U.prototype.createChildContext = function(a, b, c) { return new p.U(a, this, b, function(a, b) { a.$parentContext = b, a.$parent = b.$data, a.$parents = (b.$parents || []).slice(0), a.$parents.unshift(a.$parent), c && c(a) }) }, p.U.prototype.extend = function(a) { return new p.U(this.P || this.$data, this, null, function(b, c) { b.$rawData = c.$rawData, p.a.extend(b, "function" == typeof a ? a() : a) }) }; var o = p.a.e.I(),
                            q = p.a.e.I();
                        p.tc = function(a, b) { return 2 != arguments.length ? p.a.e.get(a, q) : (p.a.e.set(a, q, b), void(b.P && b.P.Ac(a))) }, p.Ja = function(a, b, c) { return 1 === a.nodeType && p.f.kc(a), l(a, b, m(c), !0) }, p.Dc = function(a, b, c) { return c = m(c), p.Ja(a, g(b, c, a), c) }, p.eb = function(a, b) { 1 !== b.nodeType && 8 !== b.nodeType || i(m(a), b, !0) }, p.Rb = function(a, c) { if (!e && b.jQuery && (e = b.jQuery), c && 1 !== c.nodeType && 8 !== c.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                            c = c || b.document.body, j(m(a), c, !0) }, p.kb = function(b) { switch (b.nodeType) {
                                case 1:
                                case 8:
                                    var c = p.tc(b); if (c) return c; if (b.parentNode) return p.kb(b.parentNode) } return a }, p.Jc = function(b) { return (b = p.kb(b)) ? b.$data : a }, p.b("bindingHandlers", p.d), p.b("applyBindings", p.Rb), p.b("applyBindingsToDescendants", p.eb), p.b("applyBindingAccessorsToNode", p.Ja), p.b("applyBindingsToNode", p.Dc), p.b("contextFor", p.kb), p.b("dataFor", p.Jc) }(),
                    function(a) {
                        function b(b, d) { var g, h = e.hasOwnProperty(b) ? e[b] : a;
                            h ? h.X(d) : (h = e[b] = new p.J, h.X(d), c(b, function(a, c) { var d = !(!c || !c.synchronous);
                                f[b] = { definition: a, Zc: d }, delete e[b], g || d ? h.notifySubscribers(a) : p.Y.Wa(function() { h.notifySubscribers(a) }) }), g = !0) }

                        function c(a, b) { d("getConfig", [a], function(c) { c ? d("loadComponent", [a, c], function(a) { b(a, c) }) : b(null, null) }) }

                        function d(b, c, e, f) { f || (f = p.g.loaders.slice(0)); var g = f.shift(); if (g) { var h = g[b]; if (h) { var i = !1; if (h.apply(g, c.concat(function(a) { i ? e(null) : null !== a ? e(a) : d(b, c, e, f) })) !== a && (i = !0, !g.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.") } else d(b, c, e, f) } else e(null) } var e = {},
                            f = {};
                        p.g = { get: function(c, d) { var e = f.hasOwnProperty(c) ? f[c] : a;
                                e ? e.Zc ? p.l.w(function() { d(e.definition) }) : p.Y.Wa(function() { d(e.definition) }) : b(c, d) }, Xb: function(a) { delete f[a] }, Jb: d }, p.g.loaders = [], p.b("components", p.g), p.b("components.get", p.g.get), p.b("components.clearCachedDefinition", p.g.Xb) }(),
                    function() {
                        function a(a, b, c, d) {
                            function e() { 0 === --h && d(f) } var f = {},
                                h = 2,
                                i = c.template;
                            c = c.viewModel, i ? g(b, i, function(b) { p.g.Jb("loadTemplate", [a, b], function(a) { f.template = a, e() }) }) : e(), c ? g(b, c, function(b) { p.g.Jb("loadViewModel", [a, b], function(a) { f[k] = a, e() }) }) : e() }

                        function d(a, b, c) { if ("function" == typeof b) c(function(a) { return new b(a) });
                            else if ("function" == typeof b[k]) c(b[k]);
                            else if ("instance" in b) { var e = b.instance;
                                c(function() { return e }) } else "viewModel" in b ? d(a, b.viewModel, c) : a("Unknown viewModel value: " + b) }

                        function e(a) { switch (p.a.A(a)) {
                                case "script":
                                    return p.a.ma(a.text);
                                case "textarea":
                                    return p.a.ma(a.value);
                                case "template":
                                    if (f(a.content)) return p.a.ua(a.content.childNodes) } return p.a.ua(a.childNodes) }

                        function f(a) { return b.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType }

                        function g(a, c, d) { "string" == typeof c.require ? h || b.require ? (h || b.require)([c.require], d) : a("Uses require, but no AMD loader is present") : d(c) }

                        function i(a) { return function(b) { throw Error("Component '" + a + "': " + b) } } var j = {};
                        p.g.register = function(a, b) { if (!b) throw Error("Invalid configuration for " + a); if (p.g.ub(a)) throw Error("Component " + a + " is already registered");
                            j[a] = b }, p.g.ub = function(a) { return j.hasOwnProperty(a) }, p.g.od = function(a) { delete j[a], p.g.Xb(a) }, p.g.Zb = { getConfig: function(a, b) { b(j.hasOwnProperty(a) ? j[a] : null) }, loadComponent: function(b, c, d) { var e = i(b);
                                g(e, c, function(c) { a(b, e, c, d) }) }, loadTemplate: function(a, d, g) { if (a = i(a), "string" == typeof d) g(p.a.ma(d));
                                else if (d instanceof Array) g(d);
                                else if (f(d)) g(p.a.V(d.childNodes));
                                else if (d.element)
                                    if (d = d.element, b.HTMLElement ? d instanceof HTMLElement : d && d.tagName && 1 === d.nodeType) g(e(d));
                                    else if ("string" == typeof d) { var h = c.getElementById(d);
                                    h ? g(e(h)) : a("Cannot find element with ID " + d) } else a("Unknown element type: " + d);
                                else a("Unknown template value: " + d) }, loadViewModel: function(a, b, c) { d(i(a), b, c) } }; var k = "createViewModel";
                        p.b("components.register", p.g.register), p.b("components.isRegistered", p.g.ub), p.b("components.unregister", p.g.od), p.b("components.defaultLoader", p.g.Zb), p.g.loaders.push(p.g.Zb), p.g.Bc = j }(),
                    function() {
                        function a(a, c) { var d = a.getAttribute("params"); if (d) { var d = b.parseBindingsString(d, c, a, { valueAccessors: !0, bindingParams: !0 }),
                                    d = p.a.Ca(d, function(b) { return p.m(b, null, { i: a }) }),
                                    e = p.a.Ca(d, function(b) { var c = b.t(); return b.ba() ? p.m({ read: function() { return p.a.c(b()) }, write: p.Ba(c) && function(a) { b()(a) }, i: a }) : c }); return e.hasOwnProperty("$raw") || (e.$raw = d), e } return { $raw: {} } } p.g.getComponentNameForNode = function(a) { var b = p.a.A(a); if (p.g.ub(b) && (-1 != b.indexOf("-") || "[object HTMLUnknownElement]" == "" + a || 8 >= p.a.C && a.tagName === b)) return b }, p.g.Ob = function(b, c, d, e) { if (1 === c.nodeType) { var f = p.g.getComponentNameForNode(c); if (f) { if (b = b || {}, b.component) throw Error('Cannot use the "component" binding on a custom element matching a component'); var g = { name: f, params: a(c, d) };
                                    b.component = e ? function() { return g } : g } } return b }; var b = new p.Q;
                        9 > p.a.C && (p.g.register = function(a) { return function(b) { return c.createElement(b), a.apply(this, arguments) } }(p.g.register), c.createDocumentFragment = function(a) { return function() { var b, c = a(),
                                    d = p.g.Bc; for (b in d) d.hasOwnProperty(b) && c.createElement(b); return c } }(c.createDocumentFragment)) }(),
                    function(a) {
                        function b(a, b, c) { if (b = b.template, !b) throw Error("Component '" + a + "' has no template");
                            a = p.a.ua(b), p.f.da(c, a) }

                        function c(a, b, c, d) { var e = a.createViewModel; return e ? e.call(a, d, { element: b, templateNodes: c }) : d } var d = 0;
                        p.d.component = { init: function(e, f, g, h, i) {
                                function j() { var a = k && k.dispose; "function" == typeof a && a.call(k), l = k = null } var k, l, m = p.a.V(p.f.childNodes(e)); return p.a.F.oa(e, j), p.m(function() { var g, h, n = p.a.c(f()); if ("string" == typeof n ? g = n : (g = p.a.c(n.name), h = p.a.c(n.params)), !g) throw Error("No component name specified"); var o = l = ++d;
                                    p.g.get(g, function(d) { if (l === o) { if (j(), !d) throw Error("Unknown component '" + g + "'");
                                            b(g, d, e); var f = c(d, e, m, h);
                                            d = i.createChildContext(f, a, function(a) { a.$component = f, a.$componentTemplateNodes = m }), k = f, p.eb(d, e) } }) }, null, { i: e }), { controlsDescendantBindings: !0 } } }, p.f.Z.component = !0 }();
                var B = { "class": "className", "for": "htmlFor" };
                p.d.attr = { update: function(b, c) { var d = p.a.c(c()) || {};
                            p.a.D(d, function(c, d) { d = p.a.c(d); var e = !1 === d || null === d || d === a;
                                e && b.removeAttribute(c), 8 >= p.a.C && c in B ? (c = B[c], e ? b.removeAttribute(c) : b[c] = d) : e || b.setAttribute(c, d.toString()), "name" === c && p.a.rc(b, e ? "" : d.toString()) }) } },
                    function() { p.d.checked = { after: ["value", "attr"], init: function(b, c, d) {
                                function e() { var a = b.checked,
                                        e = n ? g() : a; if (!p.va.Sa() && (!i || a)) { var f = p.l.w(c); if (k) { var h = l ? f.t() : f;
                                            m !== e ? (a && (p.a.pa(h, e, !0), p.a.pa(h, m, !1)), m = e) : p.a.pa(h, e, a), l && p.Ba(f) && f(h) } else p.h.Ea(f, d, "checked", e, !0) } }

                                function f() { var a = p.a.c(c());
                                    b.checked = k ? 0 <= p.a.o(a, g()) : h ? a : g() === a } var g = p.nc(function() { return d.has("checkedValue") ? p.a.c(d.get("checkedValue")) : d.has("value") ? p.a.c(d.get("value")) : b.value }),
                                    h = "checkbox" == b.type,
                                    i = "radio" == b.type; if (h || i) { var j = c(),
                                        k = h && p.a.c(j) instanceof Array,
                                        l = !(k && j.push && j.splice),
                                        m = k ? g() : a,
                                        n = i || k;
                                    i && !b.name && p.d.uniqueName.init(b, function() { return !0 }), p.m(e, null, { i: b }), p.a.p(b, "click", e), p.m(f, null, { i: b }), j = a } } }, p.h.ea.checked = !0, p.d.checkedValue = { update: function(a, b) { a.value = p.a.c(b()) } } }(), p.d.css = { update: function(a, b) { var c = p.a.c(b());
                            null !== c && "object" == typeof c ? p.a.D(c, function(b, c) { c = p.a.c(c), p.a.bb(a, b, c) }) : (c = p.a.$a(String(c || "")), p.a.bb(a, a.__ko__cssValue, !1), a.__ko__cssValue = c, p.a.bb(a, c, !0)) } }, p.d.enable = { update: function(a, b) { var c = p.a.c(b());
                            c && a.disabled ? a.removeAttribute("disabled") : c || a.disabled || (a.disabled = !0) } }, p.d.disable = { update: function(a, b) { p.d.enable.update(a, function() { return !p.a.c(b()) }) } }, p.d.event = { init: function(a, b, c, d, e) { var f = b() || {};
                            p.a.D(f, function(f) { "string" == typeof f && p.a.p(a, f, function(a) { var g, h = b()[f]; if (h) { try { var i = p.a.V(arguments);
                                            d = e.$data, i.unshift(d), g = h.apply(d, i) } finally {!0 !== g && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }!1 === c.get(f + "Bubble") && (a.cancelBubble = !0, a.stopPropagation && a.stopPropagation()) } }) }) } }, p.d.foreach = { ic: function(a) { return function() { var b = a(),
                                    c = p.a.zb(b); return c && "number" != typeof c.length ? (p.a.c(b), { foreach: c.data, as: c.as, includeDestroyed: c.includeDestroyed, afterAdd: c.afterAdd, beforeRemove: c.beforeRemove, afterRender: c.afterRender, beforeMove: c.beforeMove, afterMove: c.afterMove, templateEngine: p.W.sb }) : { foreach: b, templateEngine: p.W.sb } } }, init: function(a, b) { return p.d.template.init(a, p.d.foreach.ic(b)) }, update: function(a, b, c, d, e) { return p.d.template.update(a, p.d.foreach.ic(b), c, d, e) } }, p.h.ta.foreach = !1, p.f.Z.foreach = !0, p.d.hasfocus = { init: function(a, b, c) {
                            function d(d) { a.__ko_hasfocusUpdating = !0; var e = a.ownerDocument; if ("activeElement" in e) { var f; try { f = e.activeElement } catch (g) { f = e.body } d = f === a } e = b(), p.h.Ea(e, c, "hasfocus", d, !0), a.__ko_hasfocusLastValue = d, a.__ko_hasfocusUpdating = !1 } var e = d.bind(null, !0),
                                f = d.bind(null, !1);
                            p.a.p(a, "focus", e), p.a.p(a, "focusin", e), p.a.p(a, "blur", f), p.a.p(a, "focusout", f) }, update: function(a, b) { var c = !!p.a.c(b());
                            a.__ko_hasfocusUpdating || a.__ko_hasfocusLastValue === c || (c ? a.focus() : a.blur(), !c && a.__ko_hasfocusLastValue && a.ownerDocument.body.focus(), p.l.w(p.a.Da, null, [a, c ? "focusin" : "focusout"])) } }, p.h.ea.hasfocus = !0, p.d.hasFocus = p.d.hasfocus, p.h.ea.hasFocus = !0, p.d.html = { init: function() { return { controlsDescendantBindings: !0 } }, update: function(a, b) { p.a.Cb(a, b()) } }, o("if"), o("ifnot", !1, !0), o("with", !0, !1, function(a, b) { return a.createChildContext(b) });
                var C = {};
                p.d.options = { init: function(a) { if ("select" !== p.a.A(a)) throw Error("options binding applies only to SELECT elements"); for (; 0 < a.length;) a.remove(0); return { controlsDescendantBindings: !0 } }, update: function(b, c, d) {
                            function e() { return p.a.Ka(b.options, function(a) { return a.selected }) }

                            function f(a, b, c) { var d = typeof b; return "function" == d ? b(a) : "string" == d ? a[b] : c }

                            function g(a, c) { if (o && k) p.j.ha(b, p.a.c(d.get("value")), !0);
                                else if (n.length) { var e = 0 <= p.a.o(n, p.j.u(c[0]));
                                    p.a.sc(c[0], e), o && !e && p.l.w(p.a.Da, null, [b, "change"]) } } var h = b.multiple,
                                i = 0 != b.length && h ? b.scrollTop : null,
                                j = p.a.c(c()),
                                k = d.get("valueAllowUnset") && d.has("value"),
                                l = d.get("optionsIncludeDestroyed");
                            c = {}; var m, n = [];
                            k || (h ? n = p.a.fb(e(), p.j.u) : 0 <= b.selectedIndex && n.push(p.j.u(b.options[b.selectedIndex]))), j && ("undefined" == typeof j.length && (j = [j]), m = p.a.Ka(j, function(b) { return l || b === a || null === b || !p.a.c(b._destroy) }), d.has("optionsCaption") && (j = p.a.c(d.get("optionsCaption")), null !== j && j !== a && m.unshift(C))); var o = !1;
                            c.beforeRemove = function(a) { b.removeChild(a) }, j = g, d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (j = function(b, c) { g(0, c), p.l.w(d.get("optionsAfterRender"), null, [c[0], b !== C ? b : a]) }), p.a.Bb(b, m, function(c, e, g) { return g.length && (n = !k && g[0].selected ? [p.j.u(g[0])] : [], o = !0), e = b.ownerDocument.createElement("option"), c === C ? (p.a.Za(e, d.get("optionsCaption")), p.j.ha(e, a)) : (g = f(c, d.get("optionsValue"), c), p.j.ha(e, p.a.c(g)), c = f(c, d.get("optionsText"), g), p.a.Za(e, c)), [e] }, c, j), p.l.w(function() { k ? p.j.ha(b, p.a.c(d.get("value")), !0) : (h ? n.length && e().length < n.length : n.length && 0 <= b.selectedIndex ? p.j.u(b.options[b.selectedIndex]) !== n[0] : n.length || 0 <= b.selectedIndex) && p.a.Da(b, "change") }), p.a.Nc(b), i && 20 < Math.abs(i - b.scrollTop) && (b.scrollTop = i) } }, p.d.options.xb = p.a.e.I(), p.d.selectedOptions = { after: ["options", "foreach"], init: function(a, b, c) { p.a.p(a, "change", function() { var d = b(),
                                    e = [];
                                p.a.q(a.getElementsByTagName("option"), function(a) { a.selected && e.push(p.j.u(a)) }), p.h.Ea(d, c, "selectedOptions", e) }) }, update: function(a, b) { if ("select" != p.a.A(a)) throw Error("values binding applies only to SELECT elements"); var c = p.a.c(b()),
                                d = a.scrollTop;
                            c && "number" == typeof c.length && p.a.q(a.getElementsByTagName("option"), function(a) { var b = 0 <= p.a.o(c, p.j.u(a));
                                a.selected != b && p.a.sc(a, b) }), a.scrollTop = d } }, p.h.ea.selectedOptions = !0, p.d.style = { update: function(b, c) { var d = p.a.c(c() || {});
                            p.a.D(d, function(c, d) { d = p.a.c(d), null !== d && d !== a && !1 !== d || (d = ""), b.style[c] = d }) } }, p.d.submit = { init: function(a, b, c, d, e) { if ("function" != typeof b()) throw Error("The value for a submit binding must be a function");
                            p.a.p(a, "submit", function(c) { var d, f = b(); try { d = f.call(e.$data, a) } finally {!0 !== d && (c.preventDefault ? c.preventDefault() : c.returnValue = !1) } }) } }, p.d.text = { init: function() { return { controlsDescendantBindings: !0 } }, update: function(a, b) { p.a.Za(a, b()) } }, p.f.Z.text = !0,
                    function() { if (b && b.navigator) var c = function(a) { if (a) return parseFloat(a[1]) },
                            d = b.opera && b.opera.version && parseInt(b.opera.version()),
                            e = b.navigator.userAgent,
                            f = c(e.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                            g = c(e.match(/Firefox\/([^ ]*)/)); if (10 > p.a.C) var h = p.a.e.I(),
                            i = p.a.e.I(),
                            j = function(a) { var b = this.activeElement;
                                (b = b && p.a.e.get(b, i)) && b(a) },
                            k = function(a, b) { var c = a.ownerDocument;
                                p.a.e.get(c, h) || (p.a.e.set(c, h, !0), p.a.p(c, "selectionchange", j)), p.a.e.set(a, i, b) };
                        p.d.textInput = { init: function(b, c, e) {
                                function h(a, c) { p.a.p(b, a, c) }

                                function i() { var d = p.a.c(c());
                                    null !== d && d !== a || (d = ""), n !== a && d === n ? p.a.setTimeout(i, 4) : b.value !== d && (o = d, b.value = d) }

                                function j() { m || (n = b.value, m = p.a.setTimeout(l, 4)) }

                                function l() { clearTimeout(m), n = m = a; var d = b.value;
                                    o !== d && (o = d, p.h.Ea(c(), e, "textInput", d)) } var m, n, o = b.value,
                                    q = 9 == p.a.C ? j : l;
                                10 > p.a.C ? (h("propertychange", function(a) { "value" === a.propertyName && q(a) }), 8 == p.a.C && (h("keyup", l), h("keydown", l)), 8 <= p.a.C && (k(b, q), h("dragend", j))) : (h("input", l), 5 > f && "textarea" === p.a.A(b) ? (h("keydown", j), h("paste", j), h("cut", j)) : 11 > d ? h("keydown", j) : 4 > g && (h("DOMAutoComplete", l), h("dragdrop", l), h("drop", l))), h("change", l), p.m(i, null, { i: b }) } }, p.h.ea.textInput = !0, p.d.textinput = { preprocess: function(a, b, c) { c("textInput", a) } } }(), p.d.uniqueName = { init: function(a, b) { if (b()) { var c = "ko_unique_" + ++p.d.uniqueName.Ic;
                                p.a.rc(a, c) } } }, p.d.uniqueName.Ic = 0, p.d.value = { after: ["options", "foreach"], init: function(a, b, c) { if ("input" != a.tagName.toLowerCase() || "checkbox" != a.type && "radio" != a.type) { var d = ["change"],
                                    e = c.get("valueUpdate"),
                                    f = !1,
                                    g = null;
                                e && ("string" == typeof e && (e = [e]), p.a.ra(d, e), d = p.a.Tb(d)); var h = function() { g = null, f = !1; var d = b(),
                                        e = p.j.u(a);
                                    p.h.Ea(d, c, "value", e) };!p.a.C || "input" != a.tagName.toLowerCase() || "text" != a.type || "off" == a.autocomplete || a.form && "off" == a.form.autocomplete || -1 != p.a.o(d, "propertychange") || (p.a.p(a, "propertychange", function() { f = !0 }), p.a.p(a, "focus", function() { f = !1 }), p.a.p(a, "blur", function() { f && h() })), p.a.q(d, function(b) { var c = h;
                                    p.a.nd(b, "after") && (c = function() { g = p.j.u(a), p.a.setTimeout(h, 0) }, b = b.substring(5)), p.a.p(a, b, c) }); var i = function() { var d = p.a.c(b()),
                                        e = p.j.u(a); if (null !== g && d === g) p.a.setTimeout(i, 0);
                                    else if (d !== e)
                                        if ("select" === p.a.A(a)) { var f = c.get("valueAllowUnset"),
                                                e = function() { p.j.ha(a, d, f) };
                                            e(), f || d === p.j.u(a) ? p.a.setTimeout(e, 0) : p.l.w(p.a.Da, null, [a, "change"]) } else p.j.ha(a, d) };
                                p.m(i, null, { i: a }) } else p.Ja(a, { checkedValue: b }) }, update: function() {} }, p.h.ea.value = !0, p.d.visible = { update: function(a, b) { var c = p.a.c(b()),
                                d = "none" != a.style.display;
                            c && !d ? a.style.display = "" : !c && d && (a.style.display = "none") } },
                    function(a) { p.d[a] = { init: function(b, c, d, e, f) { return p.d.event.init.call(this, b, function() { var b = {}; return b[a] = c(), b }, d, e, f) } } }("click"), p.O = function() {}, p.O.prototype.renderTemplateSource = function() {
                        throw Error("Override renderTemplateSource");
                    }, p.O.prototype.createJavaScriptEvaluatorBlock = function() { throw Error("Override createJavaScriptEvaluatorBlock") }, p.O.prototype.makeTemplateSource = function(a, b) { if ("string" == typeof a) { b = b || c; var d = b.getElementById(a); if (!d) throw Error("Cannot find template with ID " + a); return new p.v.n(d) } if (1 == a.nodeType || 8 == a.nodeType) return new p.v.qa(a); throw Error("Unknown template type: " + a) }, p.O.prototype.renderTemplate = function(a, b, c, d) { return a = this.makeTemplateSource(a, d), this.renderTemplateSource(a, b, c, d) }, p.O.prototype.isTemplateRewritten = function(a, b) { return !1 === this.allowTemplateRewriting || this.makeTemplateSource(a, b).data("isRewritten") }, p.O.prototype.rewriteTemplate = function(a, b, c) { a = this.makeTemplateSource(a, c), b = b(a.text()), a.text(b), a.data("isRewritten", !0) }, p.b("templateEngine", p.O), p.Gb = function() {
                        function a(a, b, c, d) { a = p.h.yb(a); for (var e = p.h.ta, f = 0; f < a.length; f++) { var g = a[f].key; if (e.hasOwnProperty(g)) { var h = e[g]; if ("function" == typeof h) { if (g = h(a[f].value)) throw Error(g) } else if (!h) throw Error("This template engine does not support the '" + g + "' binding within its templates") } } return c = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + p.h.Ua(a, { valueAccessors: !0 }) + " } })()},'" + c.toLowerCase() + "')", d.createJavaScriptEvaluatorBlock(c) + b } var b = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                            c = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g; return { Oc: function(a, b, c) { b.isTemplateRewritten(a, c) || b.rewriteTemplate(a, function(a) { return p.Gb.dd(a, b) }, c) }, dd: function(d, e) { return d.replace(b, function(b, c, d, f, g) { return a(g, c, d, e) }).replace(c, function(b, c) { return a(c, "<!-- ko -->", "#comment", e) }) }, Ec: function(a, b) { return p.M.wb(function(c, d) { var e = c.nextSibling;
                                    e && e.nodeName.toLowerCase() === b && p.Ja(e, a, d) }) } } }(), p.b("__tr_ambtns", p.Gb.Ec),
                    function() { p.v = {}, p.v.n = function(a) { if (this.n = a) { var b = p.a.A(a);
                                this.ab = "script" === b ? 1 : "textarea" === b ? 2 : "template" == b && a.content && 11 === a.content.nodeType ? 3 : 4 } }, p.v.n.prototype.text = function() { var a = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML"; if (0 == arguments.length) return this.n[a]; var b = arguments[0]; "innerHTML" === a ? p.a.Cb(this.n, b) : this.n[a] = b }; var b = p.a.e.I() + "_";
                        p.v.n.prototype.data = function(a) { return 1 === arguments.length ? p.a.e.get(this.n, b + a) : void p.a.e.set(this.n, b + a, arguments[1]) }; var c = p.a.e.I();
                        p.v.n.prototype.nodes = function() { var b = this.n; return 0 == arguments.length ? (p.a.e.get(b, c) || {}).jb || (3 === this.ab ? b.content : 4 === this.ab ? b : a) : void p.a.e.set(b, c, { jb: arguments[0] }) }, p.v.qa = function(a) { this.n = a }, p.v.qa.prototype = new p.v.n, p.v.qa.prototype.text = function() { if (0 == arguments.length) { var b = p.a.e.get(this.n, c) || {}; return b.Hb === a && b.jb && (b.Hb = b.jb.innerHTML), b.Hb } p.a.e.set(this.n, c, { Hb: arguments[0] }) }, p.b("templateSources", p.v), p.b("templateSources.domElement", p.v.n), p.b("templateSources.anonymousTemplate", p.v.qa) }(),
                    function() {
                        function b(a, b, c) { var d; for (b = p.f.nextSibling(b); a && (d = a) !== b;) a = p.f.nextSibling(d), c(d, a) }

                        function c(a, c) { if (a.length) { var d = a[0],
                                    e = a[a.length - 1],
                                    f = d.parentNode,
                                    g = p.Q.instance,
                                    h = g.preprocessNode; if (h) { if (b(d, e, function(a, b) { var c = a.previousSibling,
                                                f = h.call(g, a);
                                            f && (a === d && (d = f[0] || b), a === e && (e = f[f.length - 1] || c)) }), a.length = 0, !d) return;
                                    d === e ? a.push(d) : (a.push(d, e), p.a.za(a, f)) } b(d, e, function(a) { 1 !== a.nodeType && 8 !== a.nodeType || p.Rb(c, a) }), b(d, e, function(a) { 1 !== a.nodeType && 8 !== a.nodeType || p.M.yc(a, [c]) }), p.a.za(a, f) } }

                        function d(a) { return a.nodeType ? a : 0 < a.length ? a[0] : null }

                        function e(a, b, e, f, h) { h = h || {}; var i = (a && d(a) || e || {}).ownerDocument,
                                j = h.templateEngine || g; if (p.Gb.Oc(e, j, i), e = j.renderTemplate(e, f, h, i), "number" != typeof e.length || 0 < e.length && "number" != typeof e[0].nodeType) throw Error("Template engine must return an array of DOM nodes"); switch (i = !1, b) {
                                case "replaceChildren":
                                    p.f.da(a, e), i = !0; break;
                                case "replaceNode":
                                    p.a.qc(a, e), i = !0; break;
                                case "ignoreTargetNode":
                                    break;
                                default:
                                    throw Error("Unknown renderMode: " + b) } return i && (c(e, f), h.afterRender && p.l.w(h.afterRender, null, [e, f.$data])), e }

                        function f(a, b, c) { return p.H(a) ? a() : "function" == typeof a ? a(b, c) : a } var g;
                        p.Db = function(b) { if (b != a && !(b instanceof p.O)) throw Error("templateEngine must inherit from ko.templateEngine");
                            g = b }, p.Ab = function(b, c, h, i, j) { if (h = h || {}, (h.templateEngine || g) == a) throw Error("Set a template engine before calling renderTemplate"); if (j = j || "replaceChildren", i) { var k = d(i); return p.B(function() { var a = c && c instanceof p.U ? c : new p.U(p.a.c(c)),
                                        g = f(b, a.$data, a),
                                        a = e(i, j, g, a, h); "replaceNode" == j && (i = a, k = d(i)) }, null, { wa: function() { return !k || !p.a.nb(k) }, i: k && "replaceNode" == j ? k.parentNode : k }) } return p.M.wb(function(a) { p.Ab(b, c, h, a, "replaceNode") }) }, p.kd = function(b, d, g, h, i) {
                            function j(a, b) { c(b, l), g.afterRender && g.afterRender(b, a), l = null }

                            function k(a, c) { l = i.createChildContext(a, g.as, function(a) { a.$index = c }); var d = f(b, a, l); return e(null, "ignoreTargetNode", d, l, g) } var l; return p.B(function() { var b = p.a.c(d) || []; "undefined" == typeof b.length && (b = [b]), b = p.a.Ka(b, function(b) { return g.includeDestroyed || b === a || null === b || !p.a.c(b._destroy) }), p.l.w(p.a.Bb, null, [h, b, k, g, j]) }, null, { i: h }) }; var h = p.a.e.I();
                        p.d.template = { init: function(a, b) { var c = p.a.c(b()); if ("string" == typeof c || c.name) p.f.xa(a);
                                else { if ("nodes" in c) { if (c = c.nodes || [], p.H(c)) throw Error('The "nodes" option must be a plain, non-observable array.') } else c = p.f.childNodes(a);
                                    c = p.a.jc(c), new p.v.qa(a).nodes(c) } return { controlsDescendantBindings: !0 } }, update: function(b, c, d, e, f) { var g, i = c();
                                c = p.a.c(i), d = !0, e = null, "string" == typeof c ? c = {} : (i = c.name, "if" in c && (d = p.a.c(c["if"])), d && "ifnot" in c && (d = !p.a.c(c.ifnot)), g = p.a.c(c.data)), "foreach" in c ? e = p.kd(i || b, d && c.foreach || [], c, b, f) : d ? (f = "data" in c ? f.createChildContext(g, c.as) : f, e = p.Ab(i || b, f, c, b)) : p.f.xa(b), f = e, (g = p.a.e.get(b, h)) && "function" == typeof g.k && g.k(), p.a.e.set(b, h, f && f.ba() ? f : a) } }, p.h.ta.template = function(a) { return a = p.h.yb(a), 1 == a.length && a[0].unknown || p.h.ad(a, "name") ? null : "This template engine does not support anonymous templates nested within its templates" }, p.f.Z.template = !0 }(), p.b("setTemplateEngine", p.Db), p.b("renderTemplate", p.Ab), p.a.dc = function(a, b, c) { if (a.length && b.length) { var d, e, f, g, h; for (d = e = 0;
                                (!c || d < c) && (g = a[e]); ++e) { for (f = 0; h = b[f]; ++f)
                                    if (g.value === h.value) { g.moved = h.index, h.moved = g.index, b.splice(f, 1), d = f = 0; break } d += f } } }, p.a.ib = function() {
                        function a(a, b, c, d, e) { var f, g, h, i, j, k = Math.min,
                                l = Math.max,
                                m = [],
                                n = a.length,
                                o = b.length,
                                q = o - n || 1,
                                r = n + o + 1; for (f = 0; f <= n; f++)
                                for (i = h, m.push(h = []), j = k(o, f + q), g = l(0, f - 1); g <= j; g++) h[g] = g ? f ? a[f - 1] === b[g - 1] ? i[g - 1] : k(i[g] || r, h[g - 1] || r) + 1 : g + 1 : f + 1; for (k = [], l = [], q = [], f = n, g = o; f || g;) o = m[f][g] - 1, g && o === m[f][g - 1] ? l.push(k[k.length] = { status: c, value: b[--g], index: g }) : f && o === m[f - 1][g] ? q.push(k[k.length] = { status: d, value: a[--f], index: f }) : (--g, --f, e.sparse || k.push({ status: "retained", value: b[g] })); return p.a.dc(q, l, !e.dontLimitMoves && 10 * n), k.reverse() } return function(b, c, d) { return d = "boolean" == typeof d ? { dontLimitMoves: d } : d || {}, b = b || [], c = c || [], b.length < c.length ? a(b, c, "added", "deleted", d) : a(c, b, "deleted", "added", d) } }(), p.b("utils.compareArrays", p.a.ib),
                    function() {
                        function b(b, c, d, e, f) { var g = [],
                                h = p.B(function() { var a = c(d, f, p.a.za(g, b)) || [];
                                    0 < g.length && (p.a.qc(g, a), e && p.l.w(e, null, [d, a, f])), g.length = 0, p.a.ra(g, a) }, null, { i: b, wa: function() { return !p.a.Qb(g) } }); return { ca: g, B: h.ba() ? h : a } } var c = p.a.e.I(),
                            d = p.a.e.I();
                        p.a.Bb = function(e, f, g, h, i) {
                            function j(a, b) { v = m[b], s !== b && (y[a] = v), v.qb(s++), p.a.za(v.ca, e), q.push(v), u.push(v) }

                            function k(a, b) { if (a)
                                    for (var c = 0, d = b.length; c < d; c++) b[c] && p.a.q(b[c].ca, function(d) { a(d, c, b[c].ja) }) } f = f || [], h = h || {}; var l = p.a.e.get(e, c) === a,
                                m = p.a.e.get(e, c) || [],
                                n = p.a.fb(m, function(a) { return a.ja }),
                                o = p.a.ib(n, f, h.dontLimitMoves),
                                q = [],
                                r = 0,
                                s = 0,
                                t = [],
                                u = [];
                            f = []; for (var v, w, x, y = [], n = [], z = 0; w = o[z]; z++) switch (x = w.moved, w.status) {
                                case "deleted":
                                    x === a && (v = m[r], v.B && (v.B.k(), v.B = a), p.a.za(v.ca, e).length && (h.beforeRemove && (q.push(v), u.push(v), v.ja === d ? v = null : f[z] = v), v && t.push.apply(t, v.ca))), r++; break;
                                case "retained":
                                    j(z, r++); break;
                                case "added":
                                    x !== a ? j(z, x) : (v = { ja: w.value, qb: p.N(s++) }, q.push(v), u.push(v), l || (n[z] = v)) } p.a.e.set(e, c, q), k(h.beforeMove, y), p.a.q(t, h.beforeRemove ? p.$ : p.removeNode); for (var A, z = 0, l = p.f.firstChild(e); v = u[z]; z++) { for (v.ca || p.a.extend(v, b(e, g, v.ja, i, v.qb)), r = 0; o = v.ca[r]; l = o.nextSibling, A = o, r++) o !== l && p.f.gc(e, o, A);!v.Wc && i && (i(v.ja, v.ca, v.qb), v.Wc = !0) } for (k(h.beforeRemove, f), z = 0; z < f.length; ++z) f[z] && (f[z].ja = d);
                            k(h.afterMove, y), k(h.afterAdd, n) } }(), p.b("utils.setDomNodeChildrenFromArrayMapping", p.a.Bb), p.W = function() { this.allowTemplateRewriting = !1 }, p.W.prototype = new p.O, p.W.prototype.renderTemplateSource = function(a, b, c, d) { return (b = (9 > p.a.C ? 0 : a.nodes) ? a.nodes() : null) ? p.a.V(b.cloneNode(!0).childNodes) : (a = a.text(), p.a.ma(a, d)) }, p.W.sb = new p.W, p.Db(p.W.sb), p.b("nativeTemplateEngine", p.W),
                    function() { p.vb = function() { var a = this.$c = function() { if (!e || !e.tmpl) return 0; try { if (0 <= e.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2 } catch (a) {} return 1 }();
                            this.renderTemplateSource = function(b, d, f, g) { if (g = g || c, f = f || {}, 2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."); var h = b.data("precompiled"); return h || (h = b.text() || "", h = e.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h)), b = [d.$data], d = e.extend({ koBindingContext: d }, f.templateOptions), d = e.tmpl(h, b, d), d.appendTo(g.createElement("div")), e.fragments = {}, d }, this.createJavaScriptEvaluatorBlock = function(a) { return "{{ko_code ((function() { return " + a + " })()) }}" }, this.addTemplate = function(a, b) { c.write("<script type='text/html' id='" + a + "'>" + b + "</script>") }, 0 < a && (e.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, e.tmpl.tag.ko_with = { open: "with($1) {", close: "} " }) }, p.vb.prototype = new p.O; var a = new p.vb;
                        0 < a.$c && p.Db(a), p.b("jqueryTmplTemplateEngine", p.vb) }()
            })
        }()
    }(), window.FormValidation = { AddOn: {}, Framework: {}, I18n: {}, Validator: {} }, "undefined" == typeof jQuery) throw new Error("FormValidation requires jQuery");
! function(a) { var b = a.fn.jquery.split(" ")[0].split("."); if (+b[0] < 2 && +b[1] < 9 || 1 === +b[0] && 9 === +b[1] && +b[2] < 1) throw new Error("FormValidation requires jQuery version 1.9.1 or higher") }(jQuery),
function(a) {
    FormValidation.Base = function(b, c, d) { this.$form = a(b), this.options = a.extend({}, a.fn.formValidation.DEFAULT_OPTIONS, c), this._namespace = d || "fv", this.$invalidFields = a([]), this.$submitButton = null, this.$hiddenButton = null, this.STATUS_NOT_VALIDATED = "NOT_VALIDATED", this.STATUS_VALIDATING = "VALIDATING", this.STATUS_INVALID = "INVALID", this.STATUS_VALID = "VALID", this.STATUS_IGNORED = "IGNORED", this.DEFAULT_MESSAGE = a.fn.formValidation.DEFAULT_MESSAGE, this._ieVersion = function() { for (var a = 3, b = document.createElement("div"), c = b.all || []; b.innerHTML = "<!--[if gt IE " + ++a + "]><br><![endif]-->", c[0];); return a > 4 ? a : document.documentMode }(); var e = document.createElement("div");
        this._changeEvent = 9 !== this._ieVersion && "oninput" in e ? "input" : "keyup", this._submitIfValid = null, this._cacheFields = {}, this._init() }, FormValidation.Base.prototype = {
        constructor: FormValidation.Base,
        _exceedThreshold: function(b) { var c = this._namespace,
                d = b.attr("data-" + c + "-field"),
                e = this.options.fields[d].threshold || this.options.threshold; if (!e) return !0; var f = -1 !== a.inArray(b.attr("type"), ["button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit"]); return f || b.val().length >= e },
        _init: function() { var b = this,
                c = this._namespace,
                d = { addOns: {}, autoFocus: this.$form.attr("data-" + c + "-autofocus"), button: { selector: this.$form.attr("data-" + c + "-button-selector") || this.$form.attr("data-" + c + "-submitbuttons"), disabled: this.$form.attr("data-" + c + "-button-disabled") }, control: { valid: this.$form.attr("data-" + c + "-control-valid"), invalid: this.$form.attr("data-" + c + "-control-invalid") }, err: { clazz: this.$form.attr("data-" + c + "-err-clazz"), container: this.$form.attr("data-" + c + "-err-container") || this.$form.attr("data-" + c + "-container"), parent: this.$form.attr("data-" + c + "-err-parent") }, events: { formInit: this.$form.attr("data-" + c + "-events-form-init"), formPreValidate: this.$form.attr("data-" + c + "-events-form-prevalidate"), formError: this.$form.attr("data-" + c + "-events-form-error"), formReset: this.$form.attr("data-" + c + "-events-form-reset"), formSuccess: this.$form.attr("data-" + c + "-events-form-success"), fieldAdded: this.$form.attr("data-" + c + "-events-field-added"), fieldRemoved: this.$form.attr("data-" + c + "-events-field-removed"), fieldInit: this.$form.attr("data-" + c + "-events-field-init"), fieldError: this.$form.attr("data-" + c + "-events-field-error"), fieldReset: this.$form.attr("data-" + c + "-events-field-reset"), fieldSuccess: this.$form.attr("data-" + c + "-events-field-success"), fieldStatus: this.$form.attr("data-" + c + "-events-field-status"), localeChanged: this.$form.attr("data-" + c + "-events-locale-changed"), validatorError: this.$form.attr("data-" + c + "-events-validator-error"), validatorSuccess: this.$form.attr("data-" + c + "-events-validator-success"), validatorIgnored: this.$form.attr("data-" + c + "-events-validator-ignored") }, excluded: this.$form.attr("data-" + c + "-excluded"), icon: { valid: this.$form.attr("data-" + c + "-icon-valid") || this.$form.attr("data-" + c + "-feedbackicons-valid"), invalid: this.$form.attr("data-" + c + "-icon-invalid") || this.$form.attr("data-" + c + "-feedbackicons-invalid"), validating: this.$form.attr("data-" + c + "-icon-validating") || this.$form.attr("data-" + c + "-feedbackicons-validating"), feedback: this.$form.attr("data-" + c + "-icon-feedback") }, live: this.$form.attr("data-" + c + "-live"), locale: this.$form.attr("data-" + c + "-locale"), message: this.$form.attr("data-" + c + "-message"), onPreValidate: this.$form.attr("data-" + c + "-onprevalidate"), onError: this.$form.attr("data-" + c + "-onerror"), onReset: this.$form.attr("data-" + c + "-onreset"), onSuccess: this.$form.attr("data-" + c + "-onsuccess"), row: { selector: this.$form.attr("data-" + c + "-row-selector") || this.$form.attr("data-" + c + "-group"), valid: this.$form.attr("data-" + c + "-row-valid"), invalid: this.$form.attr("data-" + c + "-row-invalid"), feedback: this.$form.attr("data-" + c + "-row-feedback") }, threshold: this.$form.attr("data-" + c + "-threshold"), trigger: this.$form.attr("data-" + c + "-trigger"), verbose: this.$form.attr("data-" + c + "-verbose"), fields: {} };
            this.$form.attr("novalidate", "novalidate").addClass(this.options.elementClass).on("submit." + c, function(a) { a.preventDefault(), b.validate() }).on("click." + c, this.options.button.selector, function() { b.$submitButton = a(this), b._submitIfValid = !0 }), (this.options.declarative === !0 || "true" === this.options.declarative) && this.$form.find("[name], [data-" + c + "-field]").each(function() { var e = a(this),
                    f = e.attr("name") || e.attr("data-" + c + "-field"),
                    g = b._parseOptions(e);
                g && (e.attr("data-" + c + "-field", f), d.fields[f] = a.extend({}, g, d.fields[f])) }), this.options = a.extend(!0, this.options, d), "string" == typeof this.options.err.parent && (this.options.err.parent = new RegExp(this.options.err.parent)), this.options.container && (this.options.err.container = this.options.container, delete this.options.container), this.options.feedbackIcons && (this.options.icon = a.extend(!0, this.options.icon, this.options.feedbackIcons), delete this.options.feedbackIcons), this.options.group && (this.options.row.selector = this.options.group, delete this.options.group), this.options.submitButtons && (this.options.button.selector = this.options.submitButtons, delete this.options.submitButtons), FormValidation.I18n[this.options.locale] || (this.options.locale = a.fn.formValidation.DEFAULT_OPTIONS.locale), (this.options.declarative === !0 || "true" === this.options.declarative) && (this.options = a.extend(!0, this.options, { addOns: this._parseAddOnOptions() })), this.$hiddenButton = a("<button/>").attr("type", "submit").prependTo(this.$form).addClass("fv-hidden-submit").css({ display: "none", width: 0, height: 0 }), this.$form.on("click." + this._namespace, '[type="submit"]', function(c) { if (!c.isDefaultPrevented()) { var d = a(c.target),
                        e = d.is('[type="submit"]') ? d.eq(0) : d.parent('[type="submit"]').eq(0);!b.options.button.selector || e.is(b.options.button.selector) || e.is(b.$hiddenButton) || b.$form.off("submit." + b._namespace).submit() } }); for (var e in this.options.fields) this._initField(e); for (var f in this.options.addOns) "function" == typeof FormValidation.AddOn[f].init && FormValidation.AddOn[f].init(this, this.options.addOns[f]);
            this.$form.trigger(a.Event(this.options.events.formInit), { bv: this, fv: this, options: this.options }), this.options.onPreValidate && this.$form.on(this.options.events.formPreValidate, function(a) { FormValidation.Helper.call(b.options.onPreValidate, [a]) }), this.options.onSuccess && this.$form.on(this.options.events.formSuccess, function(a) { FormValidation.Helper.call(b.options.onSuccess, [a]) }), this.options.onError && this.$form.on(this.options.events.formError, function(a) { FormValidation.Helper.call(b.options.onError, [a]) }), this.options.onReset && this.$form.on(this.options.events.formReset, function(a) { FormValidation.Helper.call(b.options.onReset, [a]) }) },
        _initField: function(b) { var c = this._namespace,
                d = a([]); switch (typeof b) {
                case "object":
                    d = b, b = b.attr("data-" + c + "-field"); break;
                case "string":
                    d = this.getFieldElements(b), d.attr("data-" + c + "-field", b) } if (0 !== d.length && null !== this.options.fields[b] && null !== this.options.fields[b].validators) { var e, f, g = this.options.fields[b].validators; for (e in g) f = g[e].alias || e, FormValidation.Validator[f] || delete this.options.fields[b].validators[e];
                null === this.options.fields[b].enabled && (this.options.fields[b].enabled = !0); for (var h = this, i = d.length, j = d.attr("type"), k = 1 === i || "radio" === j || "checkbox" === j, l = this._getFieldTrigger(d.eq(0)), m = this.options.err.clazz.split(" ").join("."), n = a.map(l, function(a) { return a + ".update." + c }).join(" "), o = 0; i > o; o++) { var p = d.eq(o),
                        q = this.options.fields[b].row || this.options.row.selector,
                        r = p.closest(q),
                        s = "function" == typeof(this.options.fields[b].container || this.options.fields[b].err || this.options.err.container) ? (this.options.fields[b].container || this.options.fields[b].err || this.options.err.container).call(this, p, this) : this.options.fields[b].container || this.options.fields[b].err || this.options.err.container,
                        t = s && "tooltip" !== s && "popover" !== s ? a(s) : this._getMessageContainer(p, q);
                    s && "tooltip" !== s && "popover" !== s && t.addClass(this.options.err.clazz), t.find("." + m + "[data-" + c + "-validator][data-" + c + '-for="' + b + '"]').remove(), r.find("i[data-" + c + '-icon-for="' + b + '"]').remove(), p.off(n).on(n, function() { h.updateStatus(a(this), h.STATUS_NOT_VALIDATED) }), p.data(c + ".messages", t); for (e in g) p.data(c + ".result." + e, this.STATUS_NOT_VALIDATED), k && o !== i - 1 || a("<small/>").css("display", "none").addClass(this.options.err.clazz).attr("data-" + c + "-validator", e).attr("data-" + c + "-for", b).attr("data-" + c + "-result", this.STATUS_NOT_VALIDATED).html(this._getMessage(b, e)).appendTo(t), f = g[e].alias || e, "function" == typeof FormValidation.Validator[f].init && FormValidation.Validator[f].init(this, p, this.options.fields[b].validators[e], e); if (this.options.fields[b].icon !== !1 && "false" !== this.options.fields[b].icon && this.options.icon && this.options.icon.valid && this.options.icon.invalid && this.options.icon.validating && (!k || o === i - 1)) { r.addClass(this.options.row.feedback); var u = a("<i/>").css("display", "none").addClass(this.options.icon.feedback).attr("data-" + c + "-icon-for", b).insertAfter(p);
                        (k ? d : p).data(c + ".icon", u), ("tooltip" === s || "popover" === s) && ((k ? d : p).on(this.options.events.fieldError, function() { r.addClass("fv-has-tooltip") }).on(this.options.events.fieldSuccess, function() { r.removeClass("fv-has-tooltip") }), p.off("focus.container." + c).on("focus.container." + c, function() { h._showTooltip(a(this), s) }).off("blur.container." + c).on("blur.container." + c, function() { h._hideTooltip(a(this), s) })), "string" == typeof this.options.fields[b].icon && "true" !== this.options.fields[b].icon ? u.appendTo(a(this.options.fields[b].icon)) : this._fixIcon(p, u) } } var v = []; for (e in g) f = g[e].alias || e, g[e].priority = parseInt(g[e].priority || FormValidation.Validator[f].priority || 1, 10), v.push({ validator: e, priority: g[e].priority });
                v = v.sort(function(a, b) { return a.priority - b.priority }), d.data(c + ".validators", v).on(this.options.events.fieldSuccess, function(a, b) { var c = h.getOptions(b.field, null, "onSuccess");
                    c && FormValidation.Helper.call(c, [a, b]) }).on(this.options.events.fieldError, function(a, b) { var c = h.getOptions(b.field, null, "onError");
                    c && FormValidation.Helper.call(c, [a, b]) }).on(this.options.events.fieldReset, function(a, b) { var c = h.getOptions(b.field, null, "onReset");
                    c && FormValidation.Helper.call(c, [a, b]) }).on(this.options.events.fieldStatus, function(a, b) { var c = h.getOptions(b.field, null, "onStatus");
                    c && FormValidation.Helper.call(c, [a, b]) }).on(this.options.events.validatorError, function(a, b) { var c = h.getOptions(b.field, b.validator, "onError");
                    c && FormValidation.Helper.call(c, [a, b]) }).on(this.options.events.validatorIgnored, function(a, b) { var c = h.getOptions(b.field, b.validator, "onIgnored");
                    c && FormValidation.Helper.call(c, [a, b]) }).on(this.options.events.validatorSuccess, function(a, b) { var c = h.getOptions(b.field, b.validator, "onSuccess");
                    c && FormValidation.Helper.call(c, [a, b]) }), this.onLiveChange(d, "live", function() { h._exceedThreshold(a(this)) && h.validateField(a(this)) }), d.trigger(a.Event(this.options.events.fieldInit), { bv: this, fv: this, field: b, element: d }) } },
        _isExcluded: function(b) { var c = this._namespace,
                d = b.attr("data-" + c + "-excluded"),
                e = b.attr("data-" + c + "-field") || b.attr("name"); switch (!0) {
                case !!e && this.options.fields && this.options.fields[e] && ("true" === this.options.fields[e].excluded || this.options.fields[e].excluded === !0):
                case "true" === d:
                case "" === d:
                    return !0;
                case !!e && this.options.fields && this.options.fields[e] && ("false" === this.options.fields[e].excluded || this.options.fields[e].excluded === !1):
                case "false" === d:
                    return !1;
                case !!e && this.options.fields && this.options.fields[e] && "function" == typeof this.options.fields[e].excluded:
                    return this.options.fields[e].excluded.call(this, b, this);
                case !!e && this.options.fields && this.options.fields[e] && "string" == typeof this.options.fields[e].excluded:
                case d:
                    return FormValidation.Helper.call(this.options.fields[e].excluded, [b, this]);
                default:
                    if (this.options.excluded) { "string" == typeof this.options.excluded && (this.options.excluded = a.map(this.options.excluded.split(","), function(b) { return a.trim(b) })); for (var f = this.options.excluded.length, g = 0; f > g; g++)
                            if ("string" == typeof this.options.excluded[g] && b.is(this.options.excluded[g]) || "function" == typeof this.options.excluded[g] && this.options.excluded[g].call(this, b, this) === !0) return !0 } return !1 } },
        _getFieldTrigger: function(a) { var b = this._namespace,
                c = a.data(b + ".trigger"); if (c) return c; var d = a.attr("type"),
                e = a.attr("data-" + b + "-field"),
                f = "radio" === d || "checkbox" === d || "file" === d || "SELECT" === a.get(0).tagName ? "change" : this._ieVersion >= 10 && a.attr("placeholder") ? "keyup" : this._changeEvent; return c = ((this.options.fields[e] ? this.options.fields[e].trigger : null) || this.options.trigger || f).split(" "), a.data(b + ".trigger", c), c },
        _getMessage: function(a, b) { if (!this.options.fields[a] || !this.options.fields[a].validators) return ""; var c = this.options.fields[a].validators,
                d = c[b] && c[b].alias ? c[b].alias : b; if (!FormValidation.Validator[d]) return ""; switch (!0) {
                case !!c[b].message:
                    return c[b].message;
                case !!this.options.fields[a].message:
                    return this.options.fields[a].message;
                case !!this.options.message:
                    return this.options.message;
                case !!FormValidation.I18n[this.options.locale] && !!FormValidation.I18n[this.options.locale][d] && !!FormValidation.I18n[this.options.locale][d]["default"]:
                    return FormValidation.I18n[this.options.locale][d]["default"];
                default:
                    return this.DEFAULT_MESSAGE } },
        _getMessageContainer: function(a, b) { if (!this.options.err.parent) throw new Error("The err.parent option is not defined"); var c = a.parent(); if (c.is(b)) return c; var d = c.attr("class"); return d && this.options.err.parent.test(d) ? c : this._getMessageContainer(c, b) },
        _parseAddOnOptions: function() { var a = this._namespace,
                b = this.$form.attr("data-" + a + "-addons"),
                c = this.options.addOns || {}; if (b) { b = b.replace(/\s/g, "").split(","); for (var d = 0; d < b.length; d++) c[b[d]] || (c[b[d]] = {}) } var e, f, g, h; for (e in c)
                if (FormValidation.AddOn[e]) { if (f = FormValidation.AddOn[e].html5Attributes)
                        for (g in f) h = this.$form.attr("data-" + a + "-addons-" + e.toLowerCase() + "-" + g.toLowerCase()), h && (c[e][f[g]] = h) } else delete c[e]; return c },
        _parseOptions: function(b) { var c, d, e, f, g, h, i, j, k, l = this._namespace,
                m = b.attr("name") || b.attr("data-" + l + "-field"),
                n = {},
                o = new RegExp("^data-" + l + "-([a-z]+)-alias$"),
                p = a.extend({}, FormValidation.Validator);
            a.each(b.get(0).attributes, function(a, b) { b.value && o.test(b.name) && (d = b.name.split("-")[2], p[b.value] && (p[d] = p[b.value], p[d].alias = b.value)) }); for (d in p)
                if (c = p[d], e = "data-" + l + "-" + d.toLowerCase(), f = b.attr(e) + "", k = "function" == typeof c.enableByHtml5 ? c.enableByHtml5(b) : null, k && "false" !== f || k !== !0 && ("" === f || "true" === f || e === f.toLowerCase())) { c.html5Attributes = a.extend({}, { message: "message", onerror: "onError", onreset: "onReset", onsuccess: "onSuccess", priority: "priority", transformer: "transformer" }, c.html5Attributes), n[d] = a.extend({}, k === !0 ? {} : k, n[d]), c.alias && (n[d].alias = c.alias); for (j in c.html5Attributes) g = c.html5Attributes[j], h = "data-" + l + "-" + d.toLowerCase() + "-" + j, i = b.attr(h), i && ("true" === i || h === i.toLowerCase() ? i = !0 : "false" === i && (i = !1), n[d][g] = i) } var q = { autoFocus: b.attr("data-" + l + "-autofocus"), err: b.attr("data-" + l + "-err-container") || b.attr("data-" + l + "-container"), enabled: b.attr("data-" + l + "-enabled"), excluded: b.attr("data-" + l + "-excluded"), icon: b.attr("data-" + l + "-icon") || b.attr("data-" + l + "-feedbackicons") || (this.options.fields && this.options.fields[m] ? this.options.fields[m].feedbackIcons : null), message: b.attr("data-" + l + "-message"), onError: b.attr("data-" + l + "-onerror"), onReset: b.attr("data-" + l + "-onreset"), onStatus: b.attr("data-" + l + "-onstatus"), onSuccess: b.attr("data-" + l + "-onsuccess"), row: b.attr("data-" + l + "-row") || b.attr("data-" + l + "-group") || (this.options.fields && this.options.fields[m] ? this.options.fields[m].group : null), selector: b.attr("data-" + l + "-selector"), threshold: b.attr("data-" + l + "-threshold"), transformer: b.attr("data-" + l + "-transformer"), trigger: b.attr("data-" + l + "-trigger"), verbose: b.attr("data-" + l + "-verbose"), validators: n },
                r = a.isEmptyObject(q),
                s = a.isEmptyObject(n); return !s || !r && this.options.fields && this.options.fields[m] ? q : null },
        _submit: function() { var b = this.isValid(); if (null !== b) { var c = b ? this.options.events.formSuccess : this.options.events.formError,
                    d = a.Event(c);
                this.$form.trigger(d), this.$submitButton && (b ? this._onSuccess(d) : this._onError(d)) } },
        _onError: function(b) { if (!b.isDefaultPrevented()) { if ("submitted" === this.options.live) { this.options.live = "enabled"; var c = this; for (var d in this.options.fields) ! function(b) { var d = c.getFieldElements(b);
                        d.length && c.onLiveChange(d, "live", function() { c._exceedThreshold(a(this)) && c.validateField(a(this)) }) }(d) } for (var e = this._namespace, f = 0; f < this.$invalidFields.length; f++) { var g = this.$invalidFields.eq(f),
                        h = this.isOptionEnabled(g.attr("data-" + e + "-field"), "autoFocus"); if (h) { g.focus(); break } } } },
        _onFieldValidated: function(b, c) { var d = this._namespace,
                e = b.attr("data-" + d + "-field"),
                f = this.options.fields[e].validators,
                g = {},
                h = 0,
                i = { bv: this, fv: this, field: e, element: b, validator: c, result: b.data(d + ".response." + c) }; if (c) switch (b.data(d + ".result." + c)) {
                case this.STATUS_INVALID:
                    b.trigger(a.Event(this.options.events.validatorError), i); break;
                case this.STATUS_VALID:
                    b.trigger(a.Event(this.options.events.validatorSuccess), i); break;
                case this.STATUS_IGNORED:
                    b.trigger(a.Event(this.options.events.validatorIgnored), i) } g[this.STATUS_NOT_VALIDATED] = 0, g[this.STATUS_VALIDATING] = 0, g[this.STATUS_INVALID] = 0, g[this.STATUS_VALID] = 0, g[this.STATUS_IGNORED] = 0; for (var j in f)
                if (f[j].enabled !== !1) { h++; var k = b.data(d + ".result." + j);
                    k && g[k]++ } g[this.STATUS_VALID] + g[this.STATUS_IGNORED] === h ? (this.$invalidFields = this.$invalidFields.not(b), b.trigger(a.Event(this.options.events.fieldSuccess), i)) : (0 === g[this.STATUS_NOT_VALIDATED] || !this.isOptionEnabled(e, "verbose")) && 0 === g[this.STATUS_VALIDATING] && g[this.STATUS_INVALID] > 0 && (this.$invalidFields = this.$invalidFields.add(b), b.trigger(a.Event(this.options.events.fieldError), i)) },
        _onSuccess: function(a) { a.isDefaultPrevented() || this.disableSubmitButtons(!0).defaultSubmit() },
        _fixIcon: function(a, b) {},
        _createTooltip: function(a, b, c) {},
        _destroyTooltip: function(a, b) {},
        _hideTooltip: function(a, b) {},
        _showTooltip: function(a, b) {},
        defaultSubmit: function() { var b = this._namespace;
            this.$submitButton && a("<input/>").attr({ type: "hidden", name: this.$submitButton.attr("name") }).attr("data-" + b + "-submit-hidden", "").val(this.$submitButton.val()).appendTo(this.$form), this.$form.off("submit." + b).submit() },
        disableSubmitButtons: function(a) { return a ? "disabled" !== this.options.live && this.$form.find(this.options.button.selector).attr("disabled", "disabled").addClass(this.options.button.disabled) : this.$form.find(this.options.button.selector).removeAttr("disabled").removeClass(this.options.button.disabled), this },
        getFieldElements: function(b) { if (!this._cacheFields[b])
                if (this.options.fields[b] && this.options.fields[b].selector) { var c = this.$form.find(this.options.fields[b].selector);
                    this._cacheFields[b] = c.length ? c : a(this.options.fields[b].selector) } else this._cacheFields[b] = this.$form.find('[name="' + b + '"]'); return this._cacheFields[b] },
        getFieldValue: function(a, b) { var c, d = this._namespace; if ("string" == typeof a) { if (c = this.getFieldElements(a), 0 === c.length) return null } else c = a, a = c.attr("data-" + d + "-field"); if (!a || !this.options.fields[a]) return c.val(); var e = (this.options.fields[a].validators && this.options.fields[a].validators[b] ? this.options.fields[a].validators[b].transformer : null) || this.options.fields[a].transformer; return e ? FormValidation.Helper.call(e, [c, b, this]) : c.val() },
        getNamespace: function() { return this._namespace },
        getOptions: function(a, b, c) { var d = this._namespace; if (!a) return c ? this.options[c] : this.options; if ("object" == typeof a && (a = a.attr("data-" + d + "-field")), !this.options.fields[a]) return null; var e = this.options.fields[a]; return b ? e.validators && e.validators[b] ? c ? e.validators[b][c] : e.validators[b] : null : c ? e[c] : e },
        getStatus: function(a, b) { var c = this._namespace; switch (typeof a) {
                case "object":
                    return a.data(c + ".result." + b);
                case "string":
                default:
                    return this.getFieldElements(a).eq(0).data(c + ".result." + b) } },
        isOptionEnabled: function(a, b) { return !(!this.options.fields[a] || "true" !== this.options.fields[a][b] && this.options.fields[a][b] !== !0) || (!this.options.fields[a] || "false" !== this.options.fields[a][b] && this.options.fields[a][b] !== !1) && ("true" === this.options[b] || this.options[b] === !0) },
        isValid: function() { for (var a in this.options.fields) { var b = this.isValidField(a); if (null === b) return null; if (b === !1) return !1 } return !0 },
        isValidContainer: function(b) { var c = this,
                d = this._namespace,
                e = [],
                f = "string" == typeof b ? a(b) : b; if (0 === f.length) return !0;
            f.find("[data-" + d + "-field]").each(function() { var b = a(this);
                c._isExcluded(b) || e.push(b) }); for (var g = e.length, h = this.options.err.clazz.split(" ").join("."), i = 0; g > i; i++) { var j = e[i],
                    k = j.attr("data-" + d + "-field"),
                    l = j.data(d + ".messages").find("." + h + "[data-" + d + "-validator][data-" + d + '-for="' + k + '"]'); if (!this.options.fields || !this.options.fields[k] || "false" !== this.options.fields[k].enabled && this.options.fields[k].enabled !== !1) { if (l.filter("[data-" + d + '-result="' + this.STATUS_INVALID + '"]').length > 0) return !1; if (l.filter("[data-" + d + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0 || l.filter("[data-" + d + '-result="' + this.STATUS_VALIDATING + '"]').length > 0) return null } } return !0 },
        isValidField: function(b) { var c = this._namespace,
                d = a([]); switch (typeof b) {
                case "object":
                    d = b, b = b.attr("data-" + c + "-field"); break;
                case "string":
                    d = this.getFieldElements(b) } if (0 === d.length || !this.options.fields[b] || "false" === this.options.fields[b].enabled || this.options.fields[b].enabled === !1) return !0; for (var e, f, g, h = d.attr("type"), i = "radio" === h || "checkbox" === h ? 1 : d.length, j = 0; i > j; j++)
                if (e = d.eq(j), !this._isExcluded(e))
                    for (f in this.options.fields[b].validators)
                        if (this.options.fields[b].validators[f].enabled !== !1) { if (g = e.data(c + ".result." + f), g === this.STATUS_VALIDATING || g === this.STATUS_NOT_VALIDATED) return null; if (g === this.STATUS_INVALID) return !1 } return !0 },
        offLiveChange: function(b, c) { if (null === b || 0 === b.length) return this; var d = this._namespace,
                e = this._getFieldTrigger(b.eq(0)),
                f = a.map(e, function(a) { return a + "." + c + "." + d }).join(" "); return b.off(f), this },
        onLiveChange: function(b, c, d) {
            if (null === b || 0 === b.length) return this;
            var e = this._namespace,
                f = this._getFieldTrigger(b.eq(0)),
                g = a.map(f, function(a) { return a + "." + c + "." + e }).join(" ");
            switch (this.options.live) {
                case "submitted":
                    break;
                case "disabled":
                    b.off(g);
                    break;
                case "enabled":
                default:
                    b.off(g).on(g, function(a) {
                        d.apply(this, arguments)
                    })
            }
            return this
        },
        updateMessage: function(b, c, d) { var e = this._namespace,
                f = a([]); switch (typeof b) {
                case "object":
                    f = b, b = b.attr("data-" + e + "-field"); break;
                case "string":
                    f = this.getFieldElements(b) } var g = this.options.err.clazz.split(" ").join("."); return f.each(function() { a(this).data(e + ".messages").find("." + g + "[data-" + e + '-validator="' + c + '"][data-' + e + '-for="' + b + '"]').html(d) }), this },
        updateStatus: function(b, c, d) { var e = this._namespace,
                f = a([]); switch (typeof b) {
                case "object":
                    f = b, b = b.attr("data-" + e + "-field"); break;
                case "string":
                    f = this.getFieldElements(b) } if (!b || !this.options.fields[b]) return this;
            c === this.STATUS_NOT_VALIDATED && (this._submitIfValid = !1); for (var g = this, h = f.attr("type"), i = this.options.fields[b].row || this.options.row.selector, j = "radio" === h || "checkbox" === h ? 1 : f.length, k = this.options.err.clazz.split(" ").join("."), l = 0; j > l; l++) { var m = f.eq(l); if (!this._isExcluded(m)) { var n, o, p = m.closest(i),
                        q = m.data(e + ".messages"),
                        r = q.find("." + k + "[data-" + e + "-validator][data-" + e + '-for="' + b + '"]'),
                        s = d ? r.filter("[data-" + e + '-validator="' + d + '"]') : r,
                        t = m.data(e + ".icon"),
                        u = "function" == typeof(this.options.fields[b].container || this.options.fields[b].err || this.options.err.container) ? (this.options.fields[b].container || this.options.fields[b].err || this.options.err.container).call(this, m, this) : this.options.fields[b].container || this.options.fields[b].err || this.options.err.container,
                        v = null; if (d) m.data(e + ".result." + d, c);
                    else
                        for (var w in this.options.fields[b].validators) m.data(e + ".result." + w, c); switch (s.attr("data-" + e + "-result", c), c) {
                        case this.STATUS_VALIDATING:
                            v = null, this.disableSubmitButtons(!0), m.removeClass(this.options.control.valid).removeClass(this.options.control.invalid), p.removeClass(this.options.row.valid).removeClass(this.options.row.invalid), t && t.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).addClass(this.options.icon.validating).show(); break;
                        case this.STATUS_INVALID:
                            v = !1, this.disableSubmitButtons(!0), m.removeClass(this.options.control.valid).addClass(this.options.control.invalid), p.removeClass(this.options.row.valid).addClass(this.options.row.invalid), t && t.removeClass(this.options.icon.valid).removeClass(this.options.icon.validating).addClass(this.options.icon.invalid).show(); break;
                        case this.STATUS_IGNORED:
                        case this.STATUS_VALID:
                            n = r.filter("[data-" + e + '-result="' + this.STATUS_VALIDATING + '"]').length > 0, o = r.filter("[data-" + e + '-result="' + this.STATUS_NOT_VALIDATED + '"]').length > 0; var x = r.filter("[data-" + e + '-result="' + this.STATUS_IGNORED + '"]').length;
                            v = n || o ? null : r.filter("[data-" + e + '-result="' + this.STATUS_VALID + '"]').length + x === r.length, m.removeClass(this.options.control.valid).removeClass(this.options.control.invalid), v === !0 ? (this.disableSubmitButtons(this.isValid() === !1), c === this.STATUS_VALID && m.addClass(this.options.control.valid)) : v === !1 && (this.disableSubmitButtons(!0), c === this.STATUS_VALID && m.addClass(this.options.control.invalid)), t && (t.removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).removeClass(this.options.icon.valid), (c === this.STATUS_VALID || x !== r.length) && t.addClass(n ? this.options.icon.validating : null === v ? "" : v ? this.options.icon.valid : this.options.icon.invalid).show()); var y = this.isValidContainer(p);
                            null !== y && (p.removeClass(this.options.row.valid).removeClass(this.options.row.invalid), (c === this.STATUS_VALID || x !== r.length) && p.addClass(y ? this.options.row.valid : this.options.row.invalid)); break;
                        case this.STATUS_NOT_VALIDATED:
                        default:
                            v = null, this.disableSubmitButtons(!1), m.removeClass(this.options.control.valid).removeClass(this.options.control.invalid), p.removeClass(this.options.row.valid).removeClass(this.options.row.invalid), t && t.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).hide() }!t || "tooltip" !== u && "popover" !== u ? c === this.STATUS_INVALID ? s.show() : s.hide() : v === !1 ? this._createTooltip(m, r.filter("[data-" + e + '-result="' + g.STATUS_INVALID + '"]').eq(0).html(), u) : this._destroyTooltip(m, u), m.trigger(a.Event(this.options.events.fieldStatus), { bv: this, fv: this, field: b, element: m, status: c }), this._onFieldValidated(m, d) } } return this },
        validate: function() { if (a.isEmptyObject(this.options.fields)) return this._submit(), this;
            this.$form.trigger(a.Event(this.options.events.formPreValidate)), this.disableSubmitButtons(!0), this._submitIfValid = !1; for (var b in this.options.fields) this.validateField(b); return this._submit(), this._submitIfValid = !0, this },
        validateField: function(b) { var c = this._namespace,
                d = a([]); switch (typeof b) {
                case "object":
                    d = b, b = b.attr("data-" + c + "-field"); break;
                case "string":
                    d = this.getFieldElements(b) } if (0 === d.length || !this.options.fields[b] || "false" === this.options.fields[b].enabled || this.options.fields[b].enabled === !1) return this; for (var e, f, g, h = this, i = d.attr("type"), j = "radio" === i || "checkbox" === i ? 1 : d.length, k = "radio" === i || "checkbox" === i, l = this.options.fields[b].validators, m = this.isOptionEnabled(b, "verbose"), n = 0; j > n; n++) { var o = d.eq(n); if (!this._isExcluded(o))
                    for (var p = !1, q = o.data(c + ".validators"), r = q.length, s = 0; r > s && (e = q[s].validator, o.data(c + ".dfs." + e) && o.data(c + ".dfs." + e).reject(), !p); s++) { var t = o.data(c + ".result." + e); if (t !== this.STATUS_VALID && t !== this.STATUS_INVALID)
                            if (l[e].enabled !== !1)
                                if (o.data(c + ".result." + e, this.STATUS_VALIDATING), f = l[e].alias || e, g = FormValidation.Validator[f].validate(this, o, l[e], e), "object" == typeof g && g.resolve) this.updateStatus(k ? b : o, this.STATUS_VALIDATING, e), o.data(c + ".dfs." + e, g), g.done(function(a, b, d) { a.removeData(c + ".dfs." + b).data(c + ".response." + b, d), d.message && h.updateMessage(a, b, d.message), h.updateStatus(k ? a.attr("data-" + c + "-field") : a, d.valid === !0 ? h.STATUS_VALID : d.valid === !1 ? h.STATUS_INVALID : h.STATUS_IGNORED, b), d.valid && h._submitIfValid === !0 ? h._submit() : d.valid !== !1 || m || (p = !0) });
                                else if ("object" == typeof g && void 0 !== g.valid) { if (o.data(c + ".response." + e, g), g.message && this.updateMessage(k ? b : o, e, g.message), this.updateStatus(k ? b : o, g.valid === !0 ? this.STATUS_VALID : g.valid === !1 ? this.STATUS_INVALID : this.STATUS_IGNORED, e), g.valid === !1 && !m) break } else if ("boolean" == typeof g) { if (o.data(c + ".response." + e, g), this.updateStatus(k ? b : o, g ? this.STATUS_VALID : this.STATUS_INVALID, e), !g && !m) break } else null === g && (o.data(c + ".response." + e, g), this.updateStatus(k ? b : o, this.STATUS_IGNORED, e));
                        else this.updateStatus(k ? b : o, this.STATUS_IGNORED, e);
                        else this._onFieldValidated(o, e) } } return this },
        addField: function(b, c) { var d = this._namespace,
                e = a([]); switch (typeof b) {
                case "object":
                    e = b, b = b.attr("data-" + d + "-field") || b.attr("name"); break;
                case "string":
                    delete this._cacheFields[b], e = this.getFieldElements(b) } e.attr("data-" + d + "-field", b); for (var f = e.attr("type"), g = "radio" === f || "checkbox" === f ? 1 : e.length, h = 0; g > h; h++) { var i = e.eq(h),
                    j = this._parseOptions(i);
                j = null === j ? c : a.extend(!0, j, c), this.options.fields[b] = a.extend(!0, this.options.fields[b], j), this._cacheFields[b] = this._cacheFields[b] ? this._cacheFields[b].add(i) : i, this._initField("checkbox" === f || "radio" === f ? b : i) } return this.disableSubmitButtons(!1), this.$form.trigger(a.Event(this.options.events.fieldAdded), { field: b, element: e, options: this.options.fields[b] }), this },
        destroy: function() { var a, b, c, d, e, f, g, h, i = this._namespace; for (b in this.options.fields)
                for (c = this.getFieldElements(b), a = 0; a < c.length; a++) { d = c.eq(a); for (e in this.options.fields[b].validators) d.data(i + ".dfs." + e) && d.data(i + ".dfs." + e).reject(), d.removeData(i + ".result." + e).removeData(i + ".response." + e).removeData(i + ".dfs." + e), h = this.options.fields[b].validators[e].alias || e, "function" == typeof FormValidation.Validator[h].destroy && FormValidation.Validator[h].destroy(this, d, this.options.fields[b].validators[e], e) }
            var j = this.options.err.clazz.split(" ").join("."); for (b in this.options.fields)
                for (c = this.getFieldElements(b), g = this.options.fields[b].row || this.options.row.selector, a = 0; a < c.length; a++) { d = c.eq(a), d.data(i + ".messages").find("." + j + "[data-" + i + "-validator][data-" + i + '-for="' + b + '"]').remove().end().end().removeData(i + ".messages").removeData(i + ".validators").closest(g).removeClass(this.options.row.valid).removeClass(this.options.row.invalid).removeClass(this.options.row.feedback).end().off("." + i).removeAttr("data-" + i + "-field"); var k = "function" == typeof(this.options.fields[b].container || this.options.fields[b].err || this.options.err.container) ? (this.options.fields[b].container || this.options.fields[b].err || this.options.err.container).call(this, d, this) : this.options.fields[b].container || this.options.fields[b].err || this.options.err.container;
                    ("tooltip" === k || "popover" === k) && this._destroyTooltip(d, k), f = d.data(i + ".icon"), f && f.remove(), d.removeData(i + ".icon").removeData(i + ".trigger") }
            for (var l in this.options.addOns) "function" == typeof FormValidation.AddOn[l].destroy && FormValidation.AddOn[l].destroy(this, this.options.addOns[l]);
            this.disableSubmitButtons(!1), this.$hiddenButton.remove(), this.$form.removeClass(this.options.elementClass).off("." + i).removeData("bootstrapValidator").removeData("formValidation").find("[data-" + i + "-submit-hidden]").remove().end().find('[type="submit"]').off("click." + i) },
        enableFieldValidators: function(a, b, c) { var d = this.options.fields[a].validators; if (c && d && d[c] && d[c].enabled !== b) this.options.fields[a].validators[c].enabled = b, this.updateStatus(a, this.STATUS_NOT_VALIDATED, c);
            else if (!c && this.options.fields[a].enabled !== b) { this.options.fields[a].enabled = b; for (var e in d) this.enableFieldValidators(a, b, e) } return this },
        getDynamicOption: function(a, b) { var c = "string" == typeof a ? this.getFieldElements(a) : a,
                d = c.val(); if ("function" == typeof b) return FormValidation.Helper.call(b, [d, this, c]); if ("string" == typeof b) { var e = this.getFieldElements(b); return e.length ? e.val() : FormValidation.Helper.call(b, [d, this, c]) || b } return null },
        getForm: function() { return this.$form },
        getInvalidFields: function() { return this.$invalidFields },
        getLocale: function() { return this.options.locale },
        getMessages: function(b, c) { var d = this,
                e = this._namespace,
                f = [],
                g = a([]); switch (!0) {
                case b && "object" == typeof b:
                    g = b; break;
                case b && "string" == typeof b:
                    var h = this.getFieldElements(b); if (h.length > 0) { var i = h.attr("type");
                        g = "radio" === i || "checkbox" === i ? h.eq(0) : h } break;
                default:
                    g = this.$invalidFields } var j = c ? "[data-" + e + '-validator="' + c + '"]' : "",
                k = this.options.err.clazz.split(" ").join("."); return g.each(function() { f = f.concat(a(this).data(e + ".messages").find("." + k + "[data-" + e + '-for="' + a(this).attr("data-" + e + "-field") + '"][data-' + e + '-result="' + d.STATUS_INVALID + '"]' + j).map(function() { var b = a(this).attr("data-" + e + "-validator"),
                        c = a(this).attr("data-" + e + "-for"); return d.options.fields[c].validators[b].enabled === !1 ? "" : a(this).html() }).get()) }), f },
        getSubmitButton: function() { return this.$submitButton },
        removeField: function(b) { var c = this._namespace,
                d = a([]); switch (typeof b) {
                case "object":
                    d = b, b = b.attr("data-" + c + "-field") || b.attr("name"), d.attr("data-" + c + "-field", b); break;
                case "string":
                    d = this.getFieldElements(b) } if (0 === d.length) return this; for (var e = d.attr("type"), f = "radio" === e || "checkbox" === e ? 1 : d.length, g = 0; f > g; g++) { var h = d.eq(g);
                this.$invalidFields = this.$invalidFields.not(h), this._cacheFields[b] = this._cacheFields[b].not(h) } return this._cacheFields[b] && 0 !== this._cacheFields[b].length || delete this.options.fields[b], ("checkbox" === e || "radio" === e) && this._initField(b), this.disableSubmitButtons(!1), this.$form.trigger(a.Event(this.options.events.fieldRemoved), { field: b, element: d }), this },
        resetField: function(b, c) { var d = this._namespace,
                e = a([]); switch (typeof b) {
                case "object":
                    e = b, b = b.attr("data-" + d + "-field"); break;
                case "string":
                    e = this.getFieldElements(b) } var f = 0,
                g = e.length; if (this.options.fields[b])
                for (f = 0; g > f; f++)
                    for (var h in this.options.fields[b].validators) e.eq(f).removeData(d + ".dfs." + h); if (c) { var i = e.attr("type"); "radio" === i || "checkbox" === i ? e.prop("checked", !1).removeAttr("selected") : e.val("") } for (this.updateStatus(b, this.STATUS_NOT_VALIDATED), f = 0; g > f; f++) e.eq(f).trigger(a.Event(this.options.events.fieldReset), { fv: this, field: b, element: e.eq(f), resetValue: c }); return this },
        resetForm: function(b) { for (var c in this.options.fields) this.resetField(c, b); return this.$invalidFields = a([]), this.$submitButton = null, this.disableSubmitButtons(!1), this.$form.trigger(a.Event(this.options.events.formReset), { fv: this, resetValue: b }), this },
        revalidateField: function(a) { return this.updateStatus(a, this.STATUS_NOT_VALIDATED).validateField(a), this },
        setLocale: function(b) { return this.options.locale = b, this.$form.trigger(a.Event(this.options.events.localeChanged), { locale: b, bv: this, fv: this }), this },
        updateOption: function(a, b, c, d) { var e = this._namespace; return "object" == typeof a && (a = a.attr("data-" + e + "-field")), this.options.fields[a] && this.options.fields[a].validators[b] && (this.options.fields[a].validators[b][c] = d, this.updateStatus(a, this.STATUS_NOT_VALIDATED, b)), this },
        validateContainer: function(b) { var c = this,
                d = this._namespace,
                e = [],
                f = "string" == typeof b ? a(b) : b; if (0 === f.length) return this;
            f.find("[data-" + d + "-field]").each(function() { var b = a(this);
                c._isExcluded(b) || e.push(b) }); for (var g = e.length, h = 0; g > h; h++) this.validateField(e[h]); return this }
    }, a.fn.formValidation = function(b) { var c = arguments; return this.each(function() { var d = a(this),
                e = d.data("formValidation"),
                f = "object" == typeof b && b; if (!e) { var g = (f.framework || d.attr("data-fv-framework") || "bootstrap").toLowerCase(),
                    h = g.substr(0, 1).toUpperCase() + g.substr(1); if ("undefined" == typeof FormValidation.Framework[h]) throw new Error("The class FormValidation.Framework." + h + " is not implemented");
                e = new FormValidation.Framework[h](this, f), d.addClass("fv-form-" + g).data("formValidation", e) } "string" == typeof b && e[b].apply(e, Array.prototype.slice.call(c, 1)) }) }, a.fn.formValidation.Constructor = FormValidation.Base, a.fn.formValidation.DEFAULT_MESSAGE = "This value is not valid", a.fn.formValidation.DEFAULT_OPTIONS = { autoFocus: !0, declarative: !0, elementClass: "fv-form", events: { formInit: "init.form.fv", formPreValidate: "prevalidate.form.fv", formError: "err.form.fv", formReset: "rst.form.fv", formSuccess: "success.form.fv", fieldAdded: "added.field.fv", fieldRemoved: "removed.field.fv", fieldInit: "init.field.fv", fieldError: "err.field.fv", fieldReset: "rst.field.fv", fieldSuccess: "success.field.fv", fieldStatus: "status.field.fv", localeChanged: "changed.locale.fv", validatorError: "err.validator.fv", validatorSuccess: "success.validator.fv", validatorIgnored: "ignored.validator.fv" }, excluded: [":disabled", ":hidden", ":not(:visible)"], fields: null, live: "enabled", locale: "en_US", message: null, threshold: null, verbose: !0, button: { selector: '[type="submit"]:not([formnovalidate])', disabled: "" }, control: { valid: "", invalid: "" }, err: { clazz: "", container: null, parent: null }, icon: { valid: null, invalid: null, validating: null, feedback: "" }, row: { selector: null, valid: "", invalid: "", feedback: "" } }
}(jQuery),
function(a) { FormValidation.Helper = { call: function(a, b) { if ("function" == typeof a) return a.apply(this, b); if ("string" == typeof a) { "()" === a.substring(a.length - 2) && (a = a.substring(0, a.length - 2)); for (var c = a.split("."), d = c.pop(), e = window, f = 0; f < c.length; f++) e = e[c[f]]; return "undefined" == typeof e[d] ? null : e[d].apply(this, b) } }, date: function(a, b, c, d) { if (isNaN(a) || isNaN(b) || isNaN(c)) return !1; if (c.length > 2 || b.length > 2 || a.length > 4) return !1; if (c = parseInt(c, 10), b = parseInt(b, 10), a = parseInt(a, 10), 1e3 > a || a > 9999 || 0 >= b || b > 12) return !1; var e = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; if ((a % 400 === 0 || a % 100 !== 0 && a % 4 === 0) && (e[1] = 29), 0 >= c || c > e[b - 1]) return !1; if (d === !0) { var f = new Date,
                    g = f.getFullYear(),
                    h = f.getMonth(),
                    i = f.getDate(); return g > a || a === g && h > b - 1 || a === g && b - 1 === h && i > c } return !0 }, format: function(b, c) { a.isArray(c) || (c = [c]); for (var d in c) b = b.replace("%s", c[d]); return b }, luhn: function(a) { for (var b = a.length, c = 0, d = [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                ], e = 0; b--;) e += d[c][parseInt(a.charAt(b), 10)], c ^= 1; return e % 10 === 0 && e > 0 }, mod11And10: function(a) { for (var b = 5, c = a.length, d = 0; c > d; d++) b = (2 * (b || 10) % 11 + parseInt(a.charAt(d), 10)) % 10; return 1 === b }, mod37And36: function(a, b) { b = b || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; for (var c = b.length, d = a.length, e = Math.floor(c / 2), f = 0; d > f; f++) e = (2 * (e || c) % (c + 1) + b.indexOf(a.charAt(f))) % c; return 1 === e } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { base64: { "default": "Please enter a valid base 64 encoded" } } }), FormValidation.Validator.base64 = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); return "" === e || /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/.test(e) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { between: { "default": "Please enter a value between %s and %s", notInclusive: "Please enter a value between %s and %s strictly" } } }), FormValidation.Validator.between = { html5Attributes: { message: "message", min: "min", max: "max", inclusive: "inclusive" }, enableByHtml5: function(a) { return "range" === a.attr("type") && { min: a.attr("min"), max: a.attr("max") } }, validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0;
            f = this._format(f); var g = b.getLocale(),
                h = a.isNumeric(d.min) ? d.min : b.getDynamicOption(c, d.min),
                i = a.isNumeric(d.max) ? d.max : b.getDynamicOption(c, d.max),
                j = this._format(h),
                k = this._format(i); return d.inclusive === !0 || void 0 === d.inclusive ? { valid: a.isNumeric(f) && parseFloat(f) >= j && parseFloat(f) <= k, message: FormValidation.Helper.format(d.message || FormValidation.I18n[g].between["default"], [h, i]) } : { valid: a.isNumeric(f) && parseFloat(f) > j && parseFloat(f) < k, message: FormValidation.Helper.format(d.message || FormValidation.I18n[g].between.notInclusive, [h, i]) } }, _format: function(a) { return (a + "").replace(",", ".") } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { bic: { "default": "Please enter a valid BIC number" } } }), FormValidation.Validator.bic = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); return "" === e || /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(e) } } }(jQuery),
function(a) { FormValidation.Validator.blank = { validate: function(a, b, c, d) { return !0 } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { callback: { "default": "Please enter a valid value" } } }), FormValidation.Validator.callback = { priority: 999, html5Attributes: { message: "message", callback: "callback" }, validate: function(b, c, d, e) { var f = b.getFieldValue(c, e),
                g = new a.Deferred,
                h = { valid: !0 }; if (d.callback) { var i = FormValidation.Helper.call(d.callback, [f, b, c]);
                h = "boolean" == typeof i || null === i ? { valid: i } : i } return g.resolve(c, e, h), g } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { choice: { "default": "Please enter a valid value", less: "Please choose %s options at minimum", more: "Please choose %s options at maximum", between: "Please choose %s - %s options" } } }), FormValidation.Validator.choice = { html5Attributes: { message: "message", min: "min", max: "max" }, validate: function(b, c, d, e) { var f = b.getLocale(),
                g = b.getNamespace(),
                h = c.is("select") ? b.getFieldElements(c.attr("data-" + g + "-field")).find("option").filter(":selected").length : b.getFieldElements(c.attr("data-" + g + "-field")).filter(":checked").length,
                i = d.min ? a.isNumeric(d.min) ? d.min : b.getDynamicOption(c, d.min) : null,
                j = d.max ? a.isNumeric(d.max) ? d.max : b.getDynamicOption(c, d.max) : null,
                k = !0,
                l = d.message || FormValidation.I18n[f].choice["default"]; switch ((i && h < parseInt(i, 10) || j && h > parseInt(j, 10)) && (k = !1), !0) {
                case !!i && !!j:
                    l = FormValidation.Helper.format(d.message || FormValidation.I18n[f].choice.between, [parseInt(i, 10), parseInt(j, 10)]); break;
                case !!i:
                    l = FormValidation.Helper.format(d.message || FormValidation.I18n[f].choice.less, parseInt(i, 10)); break;
                case !!j:
                    l = FormValidation.Helper.format(d.message || FormValidation.I18n[f].choice.more, parseInt(j, 10)) } return { valid: k, message: l } } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { color: { "default": "Please enter a valid color" } } }), FormValidation.Validator.color = { html5Attributes: { message: "message", type: "type" }, enableByHtml5: function(a) { return "color" === a.attr("type") }, SUPPORTED_TYPES: ["hex", "rgb", "rgba", "hsl", "hsla", "keyword"], KEYWORD_COLORS: ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"], validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0; if (this.enableByHtml5(c)) return /^#[0-9A-F]{6}$/i.test(f); var g = d.type || this.SUPPORTED_TYPES;
            a.isArray(g) || (g = g.replace(/s/g, "").split(",")); for (var h, i, j = !1, k = 0; k < g.length; k++)
                if (i = g[k], h = "_" + i.toLowerCase(), j = j || this[h](f)) return !0; return !1 }, _hex: function(a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a) }, _hsl: function(a) { return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(a) }, _hsla: function(a) { return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(a) }, _keyword: function(b) { return a.inArray(b, this.KEYWORD_COLORS) >= 0 }, _rgb: function(a) { var b = /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/,
                c = /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/; return b.test(a) || c.test(a) }, _rgba: function(a) { var b = /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/,
                c = /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/; return b.test(a) || c.test(a) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { creditCard: { "default": "Please enter a valid credit card number" } } }), FormValidation.Validator.creditCard = { validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0; if (/[^0-9-\s]+/.test(f)) return !1; if (f = f.replace(/\D/g, ""), !FormValidation.Helper.luhn(f)) return !1; var g, h, i = { AMERICAN_EXPRESS: { length: [15], prefix: ["34", "37"] }, DINERS_CLUB: { length: [14], prefix: ["300", "301", "302", "303", "304", "305", "36"] }, DINERS_CLUB_US: { length: [16], prefix: ["54", "55"] }, DISCOVER: { length: [16], prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"] }, JCB: { length: [16], prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"] }, LASER: { length: [16, 17, 18, 19], prefix: ["6304", "6706", "6771", "6709"] }, MAESTRO: { length: [12, 13, 14, 15, 16, 17, 18, 19], prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"] }, MASTERCARD: { length: [16], prefix: ["51", "52", "53", "54", "55"] }, SOLO: { length: [16, 18, 19], prefix: ["6334", "6767"] }, UNIONPAY: { length: [16, 17, 18, 19], prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"] }, VISA: { length: [16], prefix: ["4"] } }; for (g in i)
                for (h in i[g].prefix)
                    if (f.substr(0, i[g].prefix[h].length) === i[g].prefix[h] && -1 !== a.inArray(f.length, i[g].length)) return { valid: !0, type: g }; return !1 } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { cusip: { "default": "Please enter a valid CUSIP number" } } }), FormValidation.Validator.cusip = { validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0; if (f = f.toUpperCase(), !/^[0-9A-Z]{9}$/.test(f)) return !1; for (var g = a.map(f.split(""), function(a) { var b = a.charCodeAt(0); return b >= "A".charCodeAt(0) && b <= "Z".charCodeAt(0) ? b - "A".charCodeAt(0) + 10 : a }), h = g.length, i = 0, j = 0; h - 1 > j; j++) { var k = parseInt(g[j], 10);
                j % 2 !== 0 && (k *= 2), k > 9 && (k -= 9), i += k } return i = (10 - i % 10) % 10, i === parseInt(g[h - 1], 10) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { cvv: { "default": "Please enter a valid CVV number" } } }), FormValidation.Validator.cvv = { html5Attributes: { message: "message", ccfield: "creditCardField" }, init: function(a, b, c, d) { if (c.creditCardField) { var e = a.getFieldElements(c.creditCardField);
                a.onLiveChange(e, "live_" + d, function() { var c = a.getStatus(b, d);
                    c !== a.STATUS_NOT_VALIDATED && a.revalidateField(b) }) } }, destroy: function(a, b, c, d) { if (c.creditCardField) { var e = a.getFieldElements(c.creditCardField);
                a.offLiveChange(e, "live_" + d) } }, validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0; if (!/^[0-9]{3,4}$/.test(f)) return !1; if (!d.creditCardField) return !0; var g = b.getFieldElements(d.creditCardField).val(); if ("" === g) return !0;
            g = g.replace(/\D/g, ""); var h, i, j = { AMERICAN_EXPRESS: { length: [15], prefix: ["34", "37"] }, DINERS_CLUB: { length: [14], prefix: ["300", "301", "302", "303", "304", "305", "36"] }, DINERS_CLUB_US: { length: [16], prefix: ["54", "55"] }, DISCOVER: { length: [16], prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"] }, JCB: { length: [16], prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"] }, LASER: { length: [16, 17, 18, 19], prefix: ["6304", "6706", "6771", "6709"] }, MAESTRO: { length: [12, 13, 14, 15, 16, 17, 18, 19], prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"] }, MASTERCARD: { length: [16], prefix: ["51", "52", "53", "54", "55"] }, SOLO: { length: [16, 18, 19], prefix: ["6334", "6767"] }, UNIONPAY: { length: [16, 17, 18, 19], prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"] }, VISA: { length: [16], prefix: ["4"] } },
                k = null; for (h in j)
                for (i in j[h].prefix)
                    if (g.substr(0, j[h].prefix[i].length) === j[h].prefix[i] && -1 !== a.inArray(g.length, j[h].length)) { k = h; break } return null !== k && ("AMERICAN_EXPRESS" === k ? 4 === f.length : 3 === f.length) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { date: { "default": "Please enter a valid date", min: "Please enter a date after %s", max: "Please enter a date before %s", range: "Please enter a date in the range %s - %s" } } }), FormValidation.Validator.date = { html5Attributes: { message: "message", format: "format", min: "min", max: "max", separator: "separator" }, validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0;
            d.format = d.format || "MM/DD/YYYY", "date" === c.attr("type") && (d.format = "YYYY-MM-DD"); var g = b.getLocale(),
                h = d.message || FormValidation.I18n[g].date["default"],
                i = d.format.split(" "),
                j = i[0],
                k = i.length > 1 ? i[1] : null,
                l = i.length > 2 ? i[2] : null,
                m = f.split(" "),
                n = m[0],
                o = m.length > 1 ? m[1] : null; if (i.length !== m.length) return { valid: !1, message: h }; var p = d.separator; if (p || (p = -1 !== n.indexOf("/") ? "/" : -1 !== n.indexOf("-") ? "-" : -1 !== n.indexOf(".") ? "." : null), null === p || -1 === n.indexOf(p)) return { valid: !1, message: h }; if (n = n.split(p), j = j.split(p), n.length !== j.length) return { valid: !1, message: h }; var q = n[a.inArray("YYYY", j)],
                r = n[a.inArray("MM", j)],
                s = n[a.inArray("DD", j)]; if (!q || !r || !s || 4 !== q.length) return { valid: !1, message: h }; var t = null,
                u = null,
                v = null; if (k) { if (k = k.split(":"), o = o.split(":"), k.length !== o.length) return { valid: !1, message: h }; if (u = o.length > 0 ? o[0] : null, t = o.length > 1 ? o[1] : null, v = o.length > 2 ? o[2] : null, "" === u || "" === t || "" === v) return { valid: !1, message: h }; if (v) { if (isNaN(v) || v.length > 2) return { valid: !1, message: h }; if (v = parseInt(v, 10), 0 > v || v > 60) return { valid: !1, message: h } } if (u) { if (isNaN(u) || u.length > 2) return { valid: !1, message: h }; if (u = parseInt(u, 10), 0 > u || u >= 24 || l && u > 12) return { valid: !1, message: h } } if (t) { if (isNaN(t) || t.length > 2) return { valid: !1, message: h }; if (t = parseInt(t, 10), 0 > t || t > 59) return { valid: !1, message: h } } } var w = FormValidation.Helper.date(q, r, s),
                x = null,
                y = null,
                z = d.min,
                A = d.max; switch (z && (x = z instanceof Date ? z : this._parseDate(z, j, p) || this._parseDate(b.getDynamicOption(c, z), j, p), z = this._formatDate(x, d.format)), A && (y = A instanceof Date ? A : this._parseDate(A, j, p) || this._parseDate(b.getDynamicOption(c, A), j, p), A = this._formatDate(y, d.format)), n = new Date(q, r - 1, s, u, t, v), !0) {
                case z && !A && w:
                    w = n.getTime() >= x.getTime(), h = d.message || FormValidation.Helper.format(FormValidation.I18n[g].date.min, z); break;
                case A && !z && w:
                    w = n.getTime() <= y.getTime(), h = d.message || FormValidation.Helper.format(FormValidation.I18n[g].date.max, A); break;
                case A && z && w:
                    w = n.getTime() <= y.getTime() && n.getTime() >= x.getTime(), h = d.message || FormValidation.Helper.format(FormValidation.I18n[g].date.range, [z, A]) } return { valid: w, date: n, message: h } }, _parseDate: function(b, c, d) { if (b instanceof Date) return b; if ("string" != typeof b) return null; var e = a.inArray("YYYY", c),
                f = a.inArray("MM", c),
                g = a.inArray("DD", c); if (-1 === e || -1 === f || -1 === g) return null; var h = 0,
                i = 0,
                j = 0,
                k = b.split(" "),
                l = k[0].split(d); if (l.length < 3) return null; if (k.length > 1) { var m = k[1].split(":");
                i = m.length > 0 ? m[0] : null, h = m.length > 1 ? m[1] : null, j = m.length > 2 ? m[2] : null } return new Date(l[e], l[f] - 1, l[g], i, h, j) }, _formatDate: function(a, b) { b = b.replace(/Y/g, "y").replace(/M/g, "m").replace(/D/g, "d").replace(/:m/g, ":M").replace(/:mm/g, ":MM").replace(/:S/, ":s").replace(/:SS/, ":ss"); var c = { d: function(a) { return a.getDate() }, dd: function(a) { var b = a.getDate(); return 10 > b ? "0" + b : b }, m: function(a) { return a.getMonth() + 1 }, mm: function(a) { var b = a.getMonth() + 1; return 10 > b ? "0" + b : b }, yy: function(a) { return ("" + a.getFullYear()).substr(2) }, yyyy: function(a) { return a.getFullYear() }, h: function(a) { return a.getHours() % 12 || 12 }, hh: function(a) { var b = a.getHours() % 12 || 12; return 10 > b ? "0" + b : b }, H: function(a) { return a.getHours() }, HH: function(a) { var b = a.getHours(); return 10 > b ? "0" + b : b }, M: function(a) { return a.getMinutes() }, MM: function(a) { var b = a.getMinutes(); return 10 > b ? "0" + b : b }, s: function(a) { return a.getSeconds() }, ss: function(a) { var b = a.getSeconds(); return 10 > b ? "0" + b : b } }; return b.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function(b) { return c[b] ? c[b](a) : b.slice(1, b.length - 1) }) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { different: { "default": "Please enter a different value" } } }), FormValidation.Validator.different = { html5Attributes: { message: "message", field: "field" }, init: function(b, c, d, e) { for (var f = d.field.split(","), g = 0; g < f.length; g++) { var h = b.getFieldElements(a.trim(f[g]));
                b.onLiveChange(h, "live_" + e, function() { var a = b.getStatus(c, e);
                    a !== b.STATUS_NOT_VALIDATED && b.revalidateField(c) }) } }, destroy: function(b, c, d, e) { for (var f = d.field.split(","), g = 0; g < f.length; g++) { var h = b.getFieldElements(a.trim(f[g]));
                b.offLiveChange(h, "live_" + e) } }, validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0; for (var g = d.field.split(","), h = !0, i = 0; i < g.length; i++) { var j = b.getFieldElements(a.trim(g[i])); if (null != j && 0 !== j.length) { var k = b.getFieldValue(j, e);
                    f === k ? h = !1 : "" !== k && b.updateStatus(j, b.STATUS_VALID, e) } } return h } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { digits: { "default": "Please enter only digits" } } }), FormValidation.Validator.digits = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); return "" === e || /^\d+$/.test(e) } } }(jQuery),
function(a) {
    FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, {
        en_US: { ean: { "default": "Please enter a valid EAN number" } }
    }), FormValidation.Validator.ean = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; if (!/^(\d{8}|\d{12}|\d{13})$/.test(e)) return !1; for (var f = e.length, g = 0, h = 8 === f ? [3, 1] : [1, 3], i = 0; f - 1 > i; i++) g += parseInt(e.charAt(i), 10) * h[i % 2]; return g = (10 - g % 10) % 10, g + "" === e.charAt(f - 1) } }
}(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { ein: { "default": "Please enter a valid EIN number" } } }), FormValidation.Validator.ein = { CAMPUS: { ANDOVER: ["10", "12"], ATLANTA: ["60", "67"], AUSTIN: ["50", "53"], BROOKHAVEN: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"], CINCINNATI: ["30", "32", "35", "36", "37", "38", "61"], FRESNO: ["15", "24"], KANSAS_CITY: ["40", "44"], MEMPHIS: ["94", "95"], OGDEN: ["80", "90"], PHILADELPHIA: ["33", "39", "41", "42", "43", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"], INTERNET: ["20", "26", "27", "45", "46", "47"], SMALL_BUSINESS_ADMINISTRATION: ["31"] }, validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0; if (!/^[0-9]{2}-?[0-9]{7}$/.test(f)) return !1; var g = f.substr(0, 2) + ""; for (var h in this.CAMPUS)
                if (-1 !== a.inArray(g, this.CAMPUS[h])) return { valid: !0, campus: h }; return !1 } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { emailAddress: { "default": "Please enter a valid email address" } } }), FormValidation.Validator.emailAddress = { html5Attributes: { message: "message", multiple: "multiple", separator: "separator" }, enableByHtml5: function(a) { return "email" === a.attr("type") }, validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; var f = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                g = c.multiple === !0 || "true" === c.multiple; if (g) { for (var h = c.separator || /[,;]/, i = this._splitEmailAddresses(e, h), j = 0; j < i.length; j++)
                    if (!f.test(i[j])) return !1; return !0 } return f.test(e) }, _splitEmailAddresses: function(a, b) { for (var c = a.split(/"/), d = c.length, e = [], f = "", g = 0; d > g; g++)
                if (g % 2 === 0) { var h = c[g].split(b),
                        i = h.length; if (1 === i) f += h[0];
                    else { e.push(f + h[0]); for (var j = 1; i - 1 > j; j++) e.push(h[j]);
                        f = h[i - 1] } } else f += '"' + c[g], d - 1 > g && (f += '"'); return e.push(f), e } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { file: { "default": "Please choose a valid file" } } }), FormValidation.Validator.file = { html5Attributes: { extension: "extension", maxfiles: "maxFiles", minfiles: "minFiles", maxsize: "maxSize", minsize: "minSize", maxtotalsize: "maxTotalSize", mintotalsize: "minTotalSize", message: "message", type: "type" }, validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0; var g, h = d.extension ? d.extension.toLowerCase().split(",") : null,
                i = d.type ? d.type.toLowerCase().split(",") : null,
                j = window.File && window.FileList && window.FileReader; if (j) { var k = c.get(0).files,
                    l = k.length,
                    m = 0; if (d.maxFiles && l > parseInt(d.maxFiles, 10) || d.minFiles && l < parseInt(d.minFiles, 10)) return !1; for (var n = 0; l > n; n++)
                    if (m += k[n].size, g = k[n].name.substr(k[n].name.lastIndexOf(".") + 1), d.minSize && k[n].size < parseInt(d.minSize, 10) || d.maxSize && k[n].size > parseInt(d.maxSize, 10) || h && -1 === a.inArray(g.toLowerCase(), h) || k[n].type && i && -1 === a.inArray(k[n].type.toLowerCase(), i)) return !1; if (d.maxTotalSize && m > parseInt(d.maxTotalSize, 10) || d.minTotalSize && m < parseInt(d.minTotalSize, 10)) return !1 } else if (g = f.substr(f.lastIndexOf(".") + 1), h && -1 === a.inArray(g.toLowerCase(), h)) return !1; return !0 } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { greaterThan: { "default": "Please enter a value greater than or equal to %s", notInclusive: "Please enter a value greater than %s" } } }), FormValidation.Validator.greaterThan = { html5Attributes: { message: "message", value: "value", inclusive: "inclusive" }, enableByHtml5: function(a) { var b = a.attr("type"),
                c = a.attr("min"); return !(!c || "date" === b) && { value: c } }, validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0;
            f = this._format(f); var g = b.getLocale(),
                h = a.isNumeric(d.value) ? d.value : b.getDynamicOption(c, d.value),
                i = this._format(h); return d.inclusive === !0 || void 0 === d.inclusive ? { valid: a.isNumeric(f) && parseFloat(f) >= i, message: FormValidation.Helper.format(d.message || FormValidation.I18n[g].greaterThan["default"], h) } : { valid: a.isNumeric(f) && parseFloat(f) > i, message: FormValidation.Helper.format(d.message || FormValidation.I18n[g].greaterThan.notInclusive, h) } }, _format: function(a) { return (a + "").replace(",", ".") } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { grid: { "default": "Please enter a valid GRId number" } } }), FormValidation.Validator.grid = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); return "" === e || (e = e.toUpperCase(), !!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(e) && (e = e.replace(/\s/g, "").replace(/-/g, ""), "GRID:" === e.substr(0, 5) && (e = e.substr(5)), FormValidation.Helper.mod37And36(e))) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { hex: { "default": "Please enter a valid hexadecimal number" } } }), FormValidation.Validator.hex = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); return "" === e || /^[0-9a-fA-F]+$/.test(e) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { iban: { "default": "Please enter a valid IBAN number", country: "Please enter a valid IBAN number in %s", countries: { AD: "Andorra", AE: "United Arab Emirates", AL: "Albania", AO: "Angola", AT: "Austria", AZ: "Azerbaijan", BA: "Bosnia and Herzegovina", BE: "Belgium", BF: "Burkina Faso", BG: "Bulgaria", BH: "Bahrain", BI: "Burundi", BJ: "Benin", BR: "Brazil", CH: "Switzerland", CI: "Ivory Coast", CM: "Cameroon", CR: "Costa Rica", CV: "Cape Verde", CY: "Cyprus", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", DO: "Dominican Republic", DZ: "Algeria", EE: "Estonia", ES: "Spain", FI: "Finland", FO: "Faroe Islands", FR: "France", GB: "United Kingdom", GE: "Georgia", GI: "Gibraltar", GL: "Greenland", GR: "Greece", GT: "Guatemala", HR: "Croatia", HU: "Hungary", IE: "Ireland", IL: "Israel", IR: "Iran", IS: "Iceland", IT: "Italy", JO: "Jordan", KW: "Kuwait", KZ: "Kazakhstan", LB: "Lebanon", LI: "Liechtenstein", LT: "Lithuania", LU: "Luxembourg", LV: "Latvia", MC: "Monaco", MD: "Moldova", ME: "Montenegro", MG: "Madagascar", MK: "Macedonia", ML: "Mali", MR: "Mauritania", MT: "Malta", MU: "Mauritius", MZ: "Mozambique", NL: "Netherlands", NO: "Norway", PK: "Pakistan", PL: "Poland", PS: "Palestine", PT: "Portugal", QA: "Qatar", RO: "Romania", RS: "Serbia", SA: "Saudi Arabia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", SM: "San Marino", SN: "Senegal", TL: "East Timor", TN: "Tunisia", TR: "Turkey", VG: "Virgin Islands, British", XK: "Republic of Kosovo" } } } }), FormValidation.Validator.iban = { html5Attributes: { message: "message", country: "country", sepa: "sepa" }, REGEX: { AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}", AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}", AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}", AO: "AO[0-9]{2}[0-9]{21}", AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}", AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}", BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}", BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}", BF: "BF[0-9]{2}[0-9]{23}", BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}", BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}", BI: "BI[0-9]{2}[0-9]{12}", BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}", BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]", CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}", CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}", CM: "CM[0-9]{2}[0-9]{23}", CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}", CV: "CV[0-9]{2}[0-9]{21}", CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}", CZ: "CZ[0-9]{2}[0-9]{20}", DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}", DK: "DK[0-9]{2}[0-9]{14}", DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}", DZ: "DZ[0-9]{2}[0-9]{20}", EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}", ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}", FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}", FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}", FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}", GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}", GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}", GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}", GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}", GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}", GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}", HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}", HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}", IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}", IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}", IR: "IR[0-9]{2}[0-9]{22}", IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}", IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}", JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}", KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}", KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}", LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}", LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}", LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}", LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}", LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}", MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}", MD: "MD[0-9]{2}[A-Z0-9]{20}", ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}", MG: "MG[0-9]{2}[0-9]{23}", MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}", ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}", MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}", MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}", MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}", MZ: "MZ[0-9]{2}[0-9]{21}", NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}", NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}", PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}", PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}", PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}", PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}", QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}", RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}", RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}", SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}", SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}", SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}", SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}", SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}", SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}", TL: "TL38[0-9]{3}[0-9]{14}[0-9]{2}", TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}", TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}", VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}", XK: "XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}" }, SEPA_COUNTRIES: ["AT", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GI", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK", "SM"], validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0;
            f = f.replace(/[^a-zA-Z0-9]/g, "").toUpperCase(); var g = d.country;
            g ? "string" == typeof g && this.REGEX[g] || (g = b.getDynamicOption(c, g)) : g = f.substr(0, 2); var h = b.getLocale(); if (!this.REGEX[g]) return !1; if (void 0 !== typeof d.sepa) { var i = -1 !== a.inArray(g, this.SEPA_COUNTRIES); if (("true" === d.sepa || d.sepa === !0) && !i || ("false" === d.sepa || d.sepa === !1) && i) return !1 } if (!new RegExp("^" + this.REGEX[g] + "$").test(f)) return { valid: !1, message: FormValidation.Helper.format(d.message || FormValidation.I18n[h].iban.country, FormValidation.I18n[h].iban.countries[g]) };
            f = f.substr(4) + f.substr(0, 4), f = a.map(f.split(""), function(a) { var b = a.charCodeAt(0); return b >= "A".charCodeAt(0) && b <= "Z".charCodeAt(0) ? b - "A".charCodeAt(0) + 10 : a }), f = f.join(""); for (var j = parseInt(f.substr(0, 1), 10), k = f.length, l = 1; k > l; ++l) j = (10 * j + parseInt(f.substr(l, 1), 10)) % 97; return { valid: 1 === j, message: FormValidation.Helper.format(d.message || FormValidation.I18n[h].iban.country, FormValidation.I18n[h].iban.countries[g]) } } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { id: { "default": "Please enter a valid identification number", country: "Please enter a valid identification number in %s", countries: { BA: "Bosnia and Herzegovina", BG: "Bulgaria", BR: "Brazil", CH: "Switzerland", CL: "Chile", CN: "China", CZ: "Czech Republic", DK: "Denmark", EE: "Estonia", ES: "Spain", FI: "Finland", HR: "Croatia", IE: "Ireland", IS: "Iceland", LT: "Lithuania", LV: "Latvia", ME: "Montenegro", MK: "Macedonia", NL: "Netherlands", PL: "Poland", RO: "Romania", RS: "Serbia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", SM: "San Marino", TH: "Thailand", TR: "Turkey", ZA: "South Africa" } } } }), FormValidation.Validator.id = { html5Attributes: { message: "message", country: "country" }, COUNTRY_CODES: ["BA", "BG", "BR", "CH", "CL", "CN", "CZ", "DK", "EE", "ES", "FI", "HR", "IE", "IS", "LT", "LV", "ME", "MK", "NL", "PL", "RO", "RS", "SE", "SI", "SK", "SM", "TH", "TR", "ZA"], validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0; var g = b.getLocale(),
                h = d.country; if (h ? ("string" != typeof h || -1 === a.inArray(h.toUpperCase(), this.COUNTRY_CODES)) && (h = b.getDynamicOption(c, h)) : h = f.substr(0, 2), -1 === a.inArray(h, this.COUNTRY_CODES)) return !0; var i = ["_", h.toLowerCase()].join(""),
                j = this[i](f); return j = j === !0 || j === !1 ? { valid: j } : j, j.message = FormValidation.Helper.format(d.message || FormValidation.I18n[g].id.country, FormValidation.I18n[g].id.countries[h.toUpperCase()]), j }, _validateJMBG: function(a, b) { if (!/^\d{13}$/.test(a)) return !1; var c = parseInt(a.substr(0, 2), 10),
                d = parseInt(a.substr(2, 2), 10),
                e = (parseInt(a.substr(4, 3), 10), parseInt(a.substr(7, 2), 10)),
                f = parseInt(a.substr(12, 1), 10); if (c > 31 || d > 12) return !1; for (var g = 0, h = 0; 6 > h; h++) g += (7 - h) * (parseInt(a.charAt(h), 10) + parseInt(a.charAt(h + 6), 10)); if (g = 11 - g % 11, (10 === g || 11 === g) && (g = 0), g !== f) return !1; switch (b.toUpperCase()) {
                case "BA":
                    return e >= 10 && 19 >= e;
                case "MK":
                    return e >= 41 && 49 >= e;
                case "ME":
                    return e >= 20 && 29 >= e;
                case "RS":
                    return e >= 70 && 99 >= e;
                case "SI":
                    return e >= 50 && 59 >= e;
                default:
                    return !0 } }, _ba: function(a) { return this._validateJMBG(a, "BA") }, _mk: function(a) { return this._validateJMBG(a, "MK") }, _me: function(a) { return this._validateJMBG(a, "ME") }, _rs: function(a) { return this._validateJMBG(a, "RS") }, _si: function(a) { return this._validateJMBG(a, "SI") }, _bg: function(a) { if (!/^\d{10}$/.test(a) && !/^\d{6}\s\d{3}\s\d{1}$/.test(a)) return !1;
            a = a.replace(/\s/g, ""); var b = parseInt(a.substr(0, 2), 10) + 1900,
                c = parseInt(a.substr(2, 2), 10),
                d = parseInt(a.substr(4, 2), 10); if (c > 40 ? (b += 100, c -= 40) : c > 20 && (b -= 100, c -= 20), !FormValidation.Helper.date(b, c, d)) return !1; for (var e = 0, f = [2, 4, 8, 5, 10, 9, 7, 3, 6], g = 0; 9 > g; g++) e += parseInt(a.charAt(g), 10) * f[g]; return e = e % 11 % 10, e + "" === a.substr(9, 1) }, _br: function(a) { if (a = a.replace(/\D/g, ""), !/^\d{11}$/.test(a) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(a)) return !1; for (var b = 0, c = 0; 9 > c; c++) b += (10 - c) * parseInt(a.charAt(c), 10); if (b = 11 - b % 11, (10 === b || 11 === b) && (b = 0), b + "" !== a.charAt(9)) return !1; var d = 0; for (c = 0; 10 > c; c++) d += (11 - c) * parseInt(a.charAt(c), 10); return d = 11 - d % 11, (10 === d || 11 === d) && (d = 0), d + "" === a.charAt(10) }, _ch: function(a) { if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(a)) return !1;
            a = a.replace(/\D/g, "").substr(3); for (var b = a.length, c = 0, d = 8 === b ? [3, 1] : [1, 3], e = 0; b - 1 > e; e++) c += parseInt(a.charAt(e), 10) * d[e % 2]; return c = 10 - c % 10, c + "" === a.charAt(b - 1) }, _cl: function(a) { if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(a)) return !1; for (a = a.replace(/\-/g, ""); a.length < 9;) a = "0" + a; for (var b = 0, c = [3, 2, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b = 11 - b % 11, 11 === b ? b = 0 : 10 === b && (b = "K"), b + "" === a.charAt(8).toUpperCase() }, _cn: function(b) { if (b = b.trim(), !/^\d{15}$/.test(b) && !/^\d{17}[\dXx]{1}$/.test(b)) return !1; var c = { 11: { 0: [0], 1: [
                            [0, 9],
                            [11, 17]
                        ], 2: [0, 28, 29] }, 12: { 0: [0], 1: [
                            [0, 16]
                        ], 2: [0, 21, 23, 25] }, 13: { 0: [0], 1: [
                            [0, 5], 7, 8, 21, [23, 33],
                            [81, 85]
                        ], 2: [
                            [0, 5],
                            [7, 9],
                            [23, 25], 27, 29, 30, 81, 83
                        ], 3: [
                            [0, 4],
                            [21, 24]
                        ], 4: [
                            [0, 4], 6, 21, [23, 35], 81
                        ], 5: [
                            [0, 3],
                            [21, 35], 81, 82
                        ], 6: [
                            [0, 4],
                            [21, 38],
                            [81, 84]
                        ], 7: [
                            [0, 3], 5, 6, [21, 33]
                        ], 8: [
                            [0, 4],
                            [21, 28]
                        ], 9: [
                            [0, 3],
                            [21, 30],
                            [81, 84]
                        ], 10: [
                            [0, 3],
                            [22, 26], 28, 81, 82
                        ], 11: [
                            [0, 2],
                            [21, 28], 81, 82
                        ] }, 14: { 0: [0], 1: [0, 1, [5, 10],
                            [21, 23], 81
                        ], 2: [
                            [0, 3], 11, 12, [21, 27]
                        ], 3: [
                            [0, 3], 11, 21, 22
                        ], 4: [
                            [0, 2], 11, 21, [23, 31], 81
                        ], 5: [
                            [0, 2], 21, 22, 24, 25, 81
                        ], 6: [
                            [0, 3],
                            [21, 24]
                        ], 7: [
                            [0, 2],
                            [21, 29], 81
                        ], 8: [
                            [0, 2],
                            [21, 30], 81, 82
                        ], 9: [
                            [0, 2],
                            [21, 32], 81
                        ], 10: [
                            [0, 2],
                            [21, 34], 81, 82
                        ], 11: [
                            [0, 2],
                            [21, 30], 81, 82
                        ], 23: [
                            [0, 3], 22, 23, [25, 30], 32, 33
                        ] }, 15: { 0: [0], 1: [
                            [0, 5],
                            [21, 25]
                        ], 2: [
                            [0, 7],
                            [21, 23]
                        ], 3: [
                            [0, 4]
                        ], 4: [
                            [0, 4],
                            [21, 26],
                            [28, 30]
                        ], 5: [
                            [0, 2],
                            [21, 26], 81
                        ], 6: [
                            [0, 2],
                            [21, 27]
                        ], 7: [
                            [0, 3],
                            [21, 27],
                            [81, 85]
                        ], 8: [
                            [0, 2],
                            [21, 26]
                        ], 9: [
                            [0, 2],
                            [21, 29], 81
                        ], 22: [
                            [0, 2],
                            [21, 24]
                        ], 25: [
                            [0, 2],
                            [22, 31]
                        ], 26: [
                            [0, 2],
                            [24, 27],
                            [29, 32], 34
                        ], 28: [0, 1, [22, 27]], 29: [0, [21, 23]] }, 21: { 0: [0], 1: [
                            [0, 6],
                            [11, 14],
                            [22, 24], 81
                        ], 2: [
                            [0, 4],
                            [11, 13], 24, [81, 83]
                        ], 3: [
                            [0, 4], 11, 21, 23, 81
                        ], 4: [
                            [0, 4], 11, [21, 23]
                        ], 5: [
                            [0, 5], 21, 22
                        ], 6: [
                            [0, 4], 24, 81, 82
                        ], 7: [
                            [0, 3], 11, 26, 27, 81, 82
                        ], 8: [
                            [0, 4], 11, 81, 82
                        ], 9: [
                            [0, 5], 11, 21, 22
                        ], 10: [
                            [0, 5], 11, 21, 81
                        ], 11: [
                            [0, 3], 21, 22
                        ], 12: [
                            [0, 2], 4, 21, 23, 24, 81, 82
                        ], 13: [
                            [0, 3], 21, 22, 24, 81, 82
                        ], 14: [
                            [0, 4], 21, 22, 81
                        ] }, 22: { 0: [0], 1: [
                            [0, 6], 12, 22, [81, 83]
                        ], 2: [
                            [0, 4], 11, 21, [81, 84]
                        ], 3: [
                            [0, 3], 22, 23, 81, 82
                        ], 4: [
                            [0, 3], 21, 22
                        ], 5: [
                            [0, 3], 21, 23, 24, 81, 82
                        ], 6: [
                            [0, 2], 4, 5, [21, 23], 25, 81
                        ], 7: [
                            [0, 2],
                            [21, 24], 81
                        ], 8: [
                            [0, 2], 21, 22, 81, 82
                        ], 24: [
                            [0, 6], 24, 26
                        ] }, 23: { 0: [0], 1: [
                            [0, 12], 21, [23, 29],
                            [81, 84]
                        ], 2: [
                            [0, 8], 21, [23, 25], 27, [29, 31], 81
                        ], 3: [
                            [0, 7], 21, 81, 82
                        ], 4: [
                            [0, 7], 21, 22
                        ], 5: [
                            [0, 3], 5, 6, [21, 24]
                        ], 6: [
                            [0, 6],
                            [21, 24]
                        ], 7: [
                            [0, 16], 22, 81
                        ], 8: [
                            [0, 5], 11, 22, 26, 28, 33, 81, 82
                        ], 9: [
                            [0, 4], 21
                        ], 10: [
                            [0, 5], 24, 25, 81, [83, 85]
                        ], 11: [
                            [0, 2], 21, 23, 24, 81, 82
                        ], 12: [
                            [0, 2],
                            [21, 26],
                            [81, 83]
                        ], 27: [
                            [0, 4],
                            [21, 23]
                        ] }, 31: { 0: [0], 1: [0, 1, [3, 10],
                            [12, 20]
                        ], 2: [0, 30] }, 32: { 0: [0], 1: [
                            [0, 7], 11, [13, 18], 24, 25
                        ], 2: [
                            [0, 6], 11, 81, 82
                        ], 3: [
                            [0, 5], 11, 12, [21, 24], 81, 82
                        ], 4: [
                            [0, 2], 4, 5, 11, 12, 81, 82
                        ], 5: [
                            [0, 9],
                            [81, 85]
                        ], 6: [
                            [0, 2], 11, 12, 21, 23, [81, 84]
                        ], 7: [0, 1, 3, 5, 6, [21, 24]], 8: [
                            [0, 4], 11, 26, [29, 31]
                        ], 9: [
                            [0, 3],
                            [21, 25], 28, 81, 82
                        ], 10: [
                            [0, 3], 11, 12, 23, 81, 84, 88
                        ], 11: [
                            [0, 2], 11, 12, [81, 83]
                        ], 12: [
                            [0, 4],
                            [81, 84]
                        ], 13: [
                            [0, 2], 11, [21, 24]
                        ] }, 33: { 0: [0], 1: [
                            [0, 6],
                            [8, 10], 22, 27, 82, 83, 85
                        ], 2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]], 3: [
                            [0, 4], 22, 24, [26, 29], 81, 82
                        ], 4: [
                            [0, 2], 11, 21, 24, [81, 83]
                        ], 5: [
                            [0, 3],
                            [21, 23]
                        ], 6: [
                            [0, 2], 21, 24, [81, 83]
                        ], 7: [
                            [0, 3], 23, 26, 27, [81, 84]
                        ], 8: [
                            [0, 3], 22, 24, 25, 81
                        ], 9: [
                            [0, 3], 21, 22
                        ], 10: [
                            [0, 4],
                            [21, 24], 81, 82
                        ], 11: [
                            [0, 2],
                            [21, 27], 81
                        ] }, 34: { 0: [0], 1: [
                            [0, 4], 11, [21, 24], 81
                        ], 2: [
                            [0, 4], 7, 8, [21, 23], 25
                        ], 3: [
                            [0, 4], 11, [21, 23]
                        ], 4: [
                            [0, 6], 21
                        ], 5: [
                            [0, 4], 6, [21, 23]
                        ], 6: [
                            [0, 4], 21
                        ], 7: [
                            [0, 3], 11, 21
                        ], 8: [
                            [0, 3], 11, [22, 28], 81
                        ], 10: [
                            [0, 4],
                            [21, 24]
                        ], 11: [
                            [0, 3], 22, [24, 26], 81, 82
                        ], 12: [
                            [0, 4], 21, 22, 25, 26, 82
                        ], 13: [
                            [0, 2],
                            [21, 24]
                        ], 14: [
                            [0, 2],
                            [21, 24]
                        ], 15: [
                            [0, 3],
                            [21, 25]
                        ], 16: [
                            [0, 2],
                            [21, 23]
                        ], 17: [
                            [0, 2],
                            [21, 23]
                        ], 18: [
                            [0, 2],
                            [21, 25], 81
                        ] }, 35: { 0: [0], 1: [
                            [0, 5], 11, [21, 25], 28, 81, 82
                        ], 2: [
                            [0, 6],
                            [11, 13]
                        ], 3: [
                            [0, 5], 22
                        ], 4: [
                            [0, 3], 21, [23, 30], 81
                        ], 5: [
                            [0, 5], 21, [24, 27],
                            [81, 83]
                        ], 6: [
                            [0, 3],
                            [22, 29], 81
                        ], 7: [
                            [0, 2],
                            [21, 25],
                            [81, 84]
                        ], 8: [
                            [0, 2],
                            [21, 25], 81
                        ], 9: [
                            [0, 2],
                            [21, 26], 81, 82
                        ] }, 36: { 0: [0], 1: [
                            [0, 5], 11, [21, 24]
                        ], 2: [
                            [0, 3], 22, 81
                        ], 3: [
                            [0, 2], 13, [21, 23]
                        ], 4: [
                            [0, 3], 21, [23, 30], 81, 82
                        ], 5: [
                            [0, 2], 21
                        ], 6: [
                            [0, 2], 22, 81
                        ], 7: [
                            [0, 2],
                            [21, 35], 81, 82
                        ], 8: [
                            [0, 3],
                            [21, 30], 81
                        ], 9: [
                            [0, 2],
                            [21, 26],
                            [81, 83]
                        ], 10: [
                            [0, 2],
                            [21, 30]
                        ], 11: [
                            [0, 2],
                            [21, 30], 81
                        ] }, 37: { 0: [0], 1: [
                            [0, 5], 12, 13, [24, 26], 81
                        ], 2: [
                            [0, 3], 5, [11, 14],
                            [81, 85]
                        ], 3: [
                            [0, 6],
                            [21, 23]
                        ], 4: [
                            [0, 6], 81
                        ], 5: [
                            [0, 3],
                            [21, 23]
                        ], 6: [
                            [0, 2],
                            [11, 13], 34, [81, 87]
                        ], 7: [
                            [0, 5], 24, 25, [81, 86]
                        ], 8: [
                            [0, 2], 11, [26, 32],
                            [81, 83]
                        ], 9: [
                            [0, 3], 11, 21, 23, 82, 83
                        ], 10: [
                            [0, 2],
                            [81, 83]
                        ], 11: [
                            [0, 3], 21, 22
                        ], 12: [
                            [0, 3]
                        ], 13: [
                            [0, 2], 11, 12, [21, 29]
                        ], 14: [
                            [0, 2],
                            [21, 28], 81, 82
                        ], 15: [
                            [0, 2],
                            [21, 26], 81
                        ], 16: [
                            [0, 2],
                            [21, 26]
                        ], 17: [
                            [0, 2],
                            [21, 28]
                        ] }, 41: { 0: [0], 1: [
                            [0, 6], 8, 22, [81, 85]
                        ], 2: [
                            [0, 5], 11, [21, 25]
                        ], 3: [
                            [0, 7], 11, [22, 29], 81
                        ], 4: [
                            [0, 4], 11, [21, 23], 25, 81, 82
                        ], 5: [
                            [0, 3], 5, 6, 22, 23, 26, 27, 81
                        ], 6: [
                            [0, 3], 11, 21, 22
                        ], 7: [
                            [0, 4], 11, 21, [24, 28], 81, 82
                        ], 8: [
                            [0, 4], 11, [21, 23], 25, [81, 83]
                        ], 9: [
                            [0, 2], 22, 23, [26, 28]
                        ], 10: [
                            [0, 2],
                            [23, 25], 81, 82
                        ], 11: [
                            [0, 4],
                            [21, 23]
                        ], 12: [
                            [0, 2], 21, 22, 24, 81, 82
                        ], 13: [
                            [0, 3],
                            [21, 30], 81
                        ], 14: [
                            [0, 3],
                            [21, 26], 81
                        ], 15: [
                            [0, 3],
                            [21, 28]
                        ], 16: [
                            [0, 2],
                            [21, 28], 81
                        ], 17: [
                            [0, 2],
                            [21, 29]
                        ], 90: [0, 1] }, 42: { 0: [0], 1: [
                            [0, 7],
                            [11, 17]
                        ], 2: [
                            [0, 5], 22, 81
                        ], 3: [
                            [0, 3],
                            [21, 25], 81
                        ], 5: [
                            [0, 6],
                            [25, 29],
                            [81, 83]
                        ], 6: [
                            [0, 2], 6, 7, [24, 26],
                            [82, 84]
                        ], 7: [
                            [0, 4]
                        ], 8: [
                            [0, 2], 4, 21, 22, 81
                        ], 9: [
                            [0, 2],
                            [21, 23], 81, 82, 84
                        ], 10: [
                            [0, 3],
                            [22, 24], 81, 83, 87
                        ], 11: [
                            [0, 2],
                            [21, 27], 81, 82
                        ], 12: [
                            [0, 2],
                            [21, 24], 81
                        ], 13: [
                            [0, 3], 21, 81
                        ], 28: [
                            [0, 2], 22, 23, [25, 28]
                        ], 90: [0, [4, 6], 21] }, 43: { 0: [0], 1: [
                            [0, 5], 11, 12, 21, 22, 24, 81
                        ], 2: [
                            [0, 4], 11, 21, [23, 25], 81
                        ], 3: [
                            [0, 2], 4, 21, 81, 82
                        ], 4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82], 5: [
                            [0, 3], 11, [21, 25],
                            [27, 29], 81
                        ], 6: [
                            [0, 3], 11, 21, 23, 24, 26, 81, 82
                        ], 7: [
                            [0, 3],
                            [21, 26], 81
                        ], 8: [
                            [0, 2], 11, 21, 22
                        ], 9: [
                            [0, 3],
                            [21, 23], 81
                        ], 10: [
                            [0, 3],
                            [21, 28], 81
                        ], 11: [
                            [0, 3],
                            [21, 29]
                        ], 12: [
                            [0, 2],
                            [21, 30], 81
                        ], 13: [
                            [0, 2], 21, 22, 81, 82
                        ], 31: [0, 1, [22, 27], 30] }, 44: { 0: [0], 1: [
                            [0, 7],
                            [11, 16], 83, 84
                        ], 2: [
                            [0, 5], 21, 22, 24, 29, 32, 33, 81, 82
                        ], 3: [0, 1, [3, 8]], 4: [
                            [0, 4]
                        ], 5: [0, 1, [6, 15], 23, 82, 83], 6: [0, 1, [4, 8]], 7: [0, 1, [3, 5], 81, [83, 85]], 8: [
                            [0, 4], 11, 23, 25, [81, 83]
                        ], 9: [
                            [0, 3], 23, [81, 83]
                        ], 12: [
                            [0, 3],
                            [23, 26], 83, 84
                        ], 13: [
                            [0, 3],
                            [22, 24], 81
                        ], 14: [
                            [0, 2],
                            [21, 24], 26, 27, 81
                        ], 15: [
                            [0, 2], 21, 23, 81
                        ], 16: [
                            [0, 2],
                            [21, 25]
                        ], 17: [
                            [0, 2], 21, 23, 81
                        ], 18: [
                            [0, 3], 21, 23, [25, 27], 81, 82
                        ], 19: [0], 20: [0], 51: [
                            [0, 3], 21, 22
                        ], 52: [
                            [0, 3], 21, 22, 24, 81
                        ], 53: [
                            [0, 2],
                            [21, 23], 81
                        ] }, 45: { 0: [0], 1: [
                            [0, 9],
                            [21, 27]
                        ], 2: [
                            [0, 5],
                            [21, 26]
                        ], 3: [
                            [0, 5], 11, 12, [21, 32]
                        ], 4: [0, 1, [3, 6], 11, [21, 23], 81], 5: [
                            [0, 3], 12, 21
                        ], 6: [
                            [0, 3], 21, 81
                        ], 7: [
                            [0, 3], 21, 22
                        ], 8: [
                            [0, 4], 21, 81
                        ], 9: [
                            [0, 3],
                            [21, 24], 81
                        ], 10: [
                            [0, 2],
                            [21, 31]
                        ], 11: [
                            [0, 2],
                            [21, 23]
                        ], 12: [
                            [0, 2],
                            [21, 29], 81
                        ], 13: [
                            [0, 2],
                            [21, 24], 81
                        ], 14: [
                            [0, 2],
                            [21, 25], 81
                        ] }, 46: { 0: [0], 1: [0, 1, [5, 8]], 2: [0, 1], 3: [0, [21, 23]], 90: [
                            [0, 3],
                            [5, 7],
                            [21, 39]
                        ] }, 50: { 0: [0], 1: [
                            [0, 19]
                        ], 2: [0, [22, 38],
                            [40, 43]
                        ], 3: [0, [81, 84]] }, 51: { 0: [0], 1: [0, 1, [4, 8],
                            [12, 15],
                            [21, 24], 29, 31, 32, [81, 84]
                        ], 3: [
                            [0, 4], 11, 21, 22
                        ], 4: [
                            [0, 3], 11, 21, 22
                        ], 5: [
                            [0, 4], 21, 22, 24, 25
                        ], 6: [0, 1, 3, 23, 26, [81, 83]], 7: [0, 1, 3, 4, [22, 27], 81], 8: [
                            [0, 2], 11, 12, [21, 24]
                        ], 9: [
                            [0, 4],
                            [21, 23]
                        ], 10: [
                            [0, 2], 11, 24, 25, 28
                        ], 11: [
                            [0, 2],
                            [11, 13], 23, 24, 26, 29, 32, 33, 81
                        ], 13: [
                            [0, 4],
                            [21, 25], 81
                        ], 14: [
                            [0, 2],
                            [21, 25]
                        ], 15: [
                            [0, 3],
                            [21, 29]
                        ], 16: [
                            [0, 3],
                            [21, 23], 81
                        ], 17: [
                            [0, 3],
                            [21, 25], 81
                        ], 18: [
                            [0, 3],
                            [21, 27]
                        ], 19: [
                            [0, 3],
                            [21, 23]
                        ], 20: [
                            [0, 2], 21, 22, 81
                        ], 32: [0, [21, 33]], 33: [0, [21, 38]], 34: [0, 1, [22, 37]] }, 52: { 0: [0], 1: [
                            [0, 3],
                            [11, 15],
                            [21, 23], 81
                        ], 2: [0, 1, 3, 21, 22], 3: [
                            [0, 3],
                            [21, 30], 81, 82
                        ], 4: [
                            [0, 2],
                            [21, 25]
                        ], 5: [
                            [0, 2],
                            [21, 27]
                        ], 6: [
                            [0, 3],
                            [21, 28]
                        ], 22: [0, 1, [22, 30]], 23: [0, 1, [22, 28]], 24: [0, 1, [22, 28]], 26: [0, 1, [22, 36]], 27: [
                            [0, 2], 22, 23, [25, 32]
                        ] }, 53: { 0: [0], 1: [
                            [0, 3],
                            [11, 14], 21, 22, [24, 29], 81
                        ], 3: [
                            [0, 2],
                            [21, 26], 28, 81
                        ], 4: [
                            [0, 2],
                            [21, 28]
                        ], 5: [
                            [0, 2],
                            [21, 24]
                        ], 6: [
                            [0, 2],
                            [21, 30]
                        ], 7: [
                            [0, 2],
                            [21, 24]
                        ], 8: [
                            [0, 2],
                            [21, 29]
                        ], 9: [
                            [0, 2],
                            [21, 27]
                        ], 23: [0, 1, [22, 29], 31], 25: [
                            [0, 4],
                            [22, 32]
                        ], 26: [0, 1, [21, 28]], 27: [0, 1, [22, 30]], 28: [0, 1, 22, 23], 29: [0, 1, [22, 32]], 31: [0, 2, 3, [22, 24]], 34: [0, [21, 23]], 33: [0, 21, [23, 25]], 35: [0, [21, 28]] }, 54: { 0: [0], 1: [
                            [0, 2],
                            [21, 27]
                        ], 21: [0, [21, 29], 32, 33], 22: [0, [21, 29],
                            [31, 33]
                        ], 23: [0, 1, [22, 38]], 24: [0, [21, 31]], 25: [0, [21, 27]], 26: [0, [21, 27]] }, 61: { 0: [0], 1: [
                            [0, 4],
                            [11, 16], 22, [24, 26]
                        ], 2: [
                            [0, 4], 22
                        ], 3: [
                            [0, 4],
                            [21, 24],
                            [26, 31]
                        ], 4: [
                            [0, 4],
                            [22, 31], 81
                        ], 5: [
                            [0, 2],
                            [21, 28], 81, 82
                        ], 6: [
                            [0, 2],
                            [21, 32]
                        ], 7: [
                            [0, 2],
                            [21, 30]
                        ], 8: [
                            [0, 2],
                            [21, 31]
                        ], 9: [
                            [0, 2],
                            [21, 29]
                        ], 10: [
                            [0, 2],
                            [21, 26]
                        ] }, 62: { 0: [0], 1: [
                            [0, 5], 11, [21, 23]
                        ], 2: [0, 1], 3: [
                            [0, 2], 21
                        ], 4: [
                            [0, 3],
                            [21, 23]
                        ], 5: [
                            [0, 3],
                            [21, 25]
                        ], 6: [
                            [0, 2],
                            [21, 23]
                        ], 7: [
                            [0, 2],
                            [21, 25]
                        ], 8: [
                            [0, 2],
                            [21, 26]
                        ], 9: [
                            [0, 2],
                            [21, 24], 81, 82
                        ], 10: [
                            [0, 2],
                            [21, 27]
                        ], 11: [
                            [0, 2],
                            [21, 26]
                        ], 12: [
                            [0, 2],
                            [21, 28]
                        ], 24: [0, 21, [24, 29]], 26: [0, 21, [23, 30]], 29: [0, 1, [21, 27]], 30: [0, 1, [21, 27]] }, 63: { 0: [0], 1: [
                            [0, 5],
                            [21, 23]
                        ], 2: [0, 2, [21, 25]], 21: [0, [21, 23],
                            [26, 28]
                        ], 22: [0, [21, 24]], 23: [0, [21, 24]], 25: [0, [21, 25]], 26: [0, [21, 26]], 27: [0, 1, [21, 26]], 28: [
                            [0, 2],
                            [21, 23]
                        ] }, 64: { 0: [0], 1: [0, 1, [4, 6], 21, 22, 81], 2: [
                            [0, 3], 5, [21, 23]
                        ], 3: [
                            [0, 3],
                            [21, 24], 81
                        ], 4: [
                            [0, 2],
                            [21, 25]
                        ], 5: [
                            [0, 2], 21, 22
                        ] }, 65: { 0: [0], 1: [
                            [0, 9], 21
                        ], 2: [
                            [0, 5]
                        ], 21: [0, 1, 22, 23], 22: [0, 1, 22, 23], 23: [
                            [0, 3],
                            [23, 25], 27, 28
                        ], 28: [0, 1, [22, 29]], 29: [0, 1, [22, 29]], 30: [0, 1, [22, 24]], 31: [0, 1, [21, 31]], 32: [0, 1, [21, 27]], 40: [0, 2, 3, [21, 28]], 42: [
                            [0, 2], 21, [23, 26]
                        ], 43: [0, 1, [21, 26]], 90: [
                            [0, 4]
                        ], 27: [
                            [0, 2], 22, 23
                        ] }, 71: { 0: [0] }, 81: { 0: [0] }, 82: { 0: [0] } },
                d = parseInt(b.substr(0, 2), 10),
                e = parseInt(b.substr(2, 2), 10),
                f = parseInt(b.substr(4, 2), 10); if (!c[d] || !c[d][e]) return !1; for (var g = !1, h = c[d][e], i = 0; i < h.length; i++)
                if (a.isArray(h[i]) && h[i][0] <= f && f <= h[i][1] || !a.isArray(h[i]) && f === h[i]) { g = !0; break } if (!g) return !1; var j;
            j = 18 === b.length ? b.substr(6, 8) : "19" + b.substr(6, 6); var k = parseInt(j.substr(0, 4), 10),
                l = parseInt(j.substr(4, 2), 10),
                m = parseInt(j.substr(6, 2), 10); if (!FormValidation.Helper.date(k, l, m)) return !1; if (18 === b.length) { var n = 0,
                    o = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; for (i = 0; 17 > i; i++) n += parseInt(b.charAt(i), 10) * o[i];
                n = (12 - n % 11) % 11; var p = "X" !== b.charAt(17).toUpperCase() ? parseInt(b.charAt(17), 10) : 10; return p === n } return !0 }, _cz: function(a) { if (!/^\d{9,10}$/.test(a)) return !1; var b = 1900 + parseInt(a.substr(0, 2), 10),
                c = parseInt(a.substr(2, 2), 10) % 50 % 20,
                d = parseInt(a.substr(4, 2), 10); if (9 === a.length) { if (b >= 1980 && (b -= 100), b > 1953) return !1 } else 1954 > b && (b += 100); if (!FormValidation.Helper.date(b, c, d)) return !1; if (10 === a.length) { var e = parseInt(a.substr(0, 9), 10) % 11; return 1985 > b && (e %= 10), e + "" === a.substr(9, 1) } return !0 }, _dk: function(a) { if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(a)) return !1;
            a = a.replace(/-/g, ""); var b = parseInt(a.substr(0, 2), 10),
                c = parseInt(a.substr(2, 2), 10),
                d = parseInt(a.substr(4, 2), 10); switch (!0) {
                case -1 !== "5678".indexOf(a.charAt(6)) && d >= 58:
                    d += 1800; break;
                case -1 !== "0123".indexOf(a.charAt(6)):
                case -1 !== "49".indexOf(a.charAt(6)) && d >= 37:
                    d += 1900; break;
                default:
                    d += 2e3 } return FormValidation.Helper.date(d, c, b) }, _ee: function(a) { return this._lt(a) }, _es: function(a) { var b = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(a),
                c = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(a),
                d = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(a); if (!b && !c && !d) return !1;
            a = a.replace(/-/g, ""); var e, f, g = !0; if (b || c) { f = "DNI"; var h = "XYZ".indexOf(a.charAt(0)); return -1 !== h && (a = h + a.substr(1) + "", f = "NIE"), e = parseInt(a.substr(0, 8), 10), e = "TRWAGMYFPDXBNJZSQVHLCKE" [e % 23], { valid: e === a.substr(8, 1), type: f } } e = a.substr(1, 7), f = "CIF"; for (var i = a[0], j = a.substr(-1), k = 0, l = 0; l < e.length; l++)
                if (l % 2 !== 0) k += parseInt(e[l], 10);
                else { var m = "" + 2 * parseInt(e[l], 10);
                    k += parseInt(m[0], 10), 2 === m.length && (k += parseInt(m[1], 10)) } var n = k - 10 * Math.floor(k / 10); return 0 !== n && (n = 10 - n), g = -1 !== "KQS".indexOf(i) ? j === "JABCDEFGHI" [n] : -1 !== "ABEH".indexOf(i) ? j === "" + n : j === "" + n || j === "JABCDEFGHI" [n], { valid: g, type: f } }, _fi: function(a) { if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(a)) return !1; var b = parseInt(a.substr(0, 2), 10),
                c = parseInt(a.substr(2, 2), 10),
                d = parseInt(a.substr(4, 2), 10),
                e = { "+": 1800, "-": 1900, A: 2e3 }; if (d = e[a.charAt(6)] + d, !FormValidation.Helper.date(d, c, b)) return !1; var f = parseInt(a.substr(7, 3), 10); if (2 > f) return !1; var g = a.substr(0, 6) + a.substr(7, 3) + ""; return g = parseInt(g, 10), "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(g % 31) === a.charAt(10) }, _hr: function(a) { return !!/^[0-9]{11}$/.test(a) && FormValidation.Helper.mod11And10(a) }, _ie: function(a) { if (!/^\d{7}[A-W][AHWTX]?$/.test(a)) return !1; var b = function(a) { for (; a.length < 7;) a = "0" + a; for (var b = "WABCDEFGHIJKLMNOPQRSTUV", c = 0, d = 0; 7 > d; d++) c += parseInt(a.charAt(d), 10) * (8 - d); return c += 9 * b.indexOf(a.substr(7)), b[c % 23] }; return 9 !== a.length || "A" !== a.charAt(8) && "H" !== a.charAt(8) ? a.charAt(7) === b(a.substr(0, 7)) : a.charAt(7) === b(a.substr(0, 7) + a.substr(8) + "") }, _is: function(a) { if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(a)) return !1;
            a = a.replace(/-/g, ""); var b = parseInt(a.substr(0, 2), 10),
                c = parseInt(a.substr(2, 2), 10),
                d = parseInt(a.substr(4, 2), 10),
                e = parseInt(a.charAt(9), 10); if (d = 9 === e ? 1900 + d : 100 * (20 + e) + d, !FormValidation.Helper.date(d, c, b, !0)) return !1; for (var f = 0, g = [3, 2, 7, 6, 5, 4, 3, 2], h = 0; 8 > h; h++) f += parseInt(a.charAt(h), 10) * g[h]; return f = 11 - f % 11, f + "" === a.charAt(8) }, _lt: function(a) { if (!/^[0-9]{11}$/.test(a)) return !1; var b = parseInt(a.charAt(0), 10),
                c = parseInt(a.substr(1, 2), 10),
                d = parseInt(a.substr(3, 2), 10),
                e = parseInt(a.substr(5, 2), 10),
                f = b % 2 === 0 ? 17 + b / 2 : 17 + (b + 1) / 2; if (c = 100 * f + c, !FormValidation.Helper.date(c, d, e, !0)) return !1; for (var g = 0, h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1], i = 0; 10 > i; i++) g += parseInt(a.charAt(i), 10) * h[i]; if (g %= 11, 10 !== g) return g + "" === a.charAt(10); for (g = 0, h = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3], i = 0; 10 > i; i++) g += parseInt(a.charAt(i), 10) * h[i]; return g %= 11, 10 === g && (g = 0), g + "" === a.charAt(10) }, _lv: function(a) { if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(a)) return !1;
            a = a.replace(/\D/g, ""); var b = parseInt(a.substr(0, 2), 10),
                c = parseInt(a.substr(2, 2), 10),
                d = parseInt(a.substr(4, 2), 10); if (d = d + 1800 + 100 * parseInt(a.charAt(6), 10), !FormValidation.Helper.date(d, c, b, !0)) return !1; for (var e = 0, f = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], g = 0; 10 > g; g++) e += parseInt(a.charAt(g), 10) * f[g]; return e = (e + 1) % 11 % 10, e + "" === a.charAt(10) }, _nl: function(a) { if (a.length < 8) return !1; if (8 === a.length && (a = "0" + a), !/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(a)) return !1; if (a = a.replace(/\./g, ""), 0 === parseInt(a, 10)) return !1; for (var b = 0, c = a.length, d = 0; c - 1 > d; d++) b += (9 - d) * parseInt(a.charAt(d), 10); return b %= 11, 10 === b && (b = 0), b + "" === a.charAt(c - 1) }, _pl: function(a) { if (!/^[0-9]{11}$/.test(a)) return !1; for (var b = 0, c = a.length, d = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7], e = 0; c - 1 > e; e++) b += d[e] * parseInt(a.charAt(e), 10); return b %= 10, 0 === b && (b = 10), b = 10 - b, b + "" === a.charAt(c - 1) }, _ro: function(a) { if (!/^[0-9]{13}$/.test(a)) return !1; var b = parseInt(a.charAt(0), 10); if (0 === b || 7 === b || 8 === b) return !1; var c = parseInt(a.substr(1, 2), 10),
                d = parseInt(a.substr(3, 2), 10),
                e = parseInt(a.substr(5, 2), 10),
                f = { 1: 1900, 2: 1900, 3: 1800, 4: 1800, 5: 2e3, 6: 2e3 }; if (e > 31 && d > 12) return !1; if (9 !== b && (c = f[b + ""] + c, !FormValidation.Helper.date(c, d, e))) return !1; for (var g = 0, h = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], i = a.length, j = 0; i - 1 > j; j++) g += parseInt(a.charAt(j), 10) * h[j]; return g %= 11, 10 === g && (g = 1), g + "" === a.charAt(i - 1) }, _se: function(a) { if (!/^[0-9]{10}$/.test(a) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(a)) return !1;
            a = a.replace(/[^0-9]/g, ""); var b = parseInt(a.substr(0, 2), 10) + 1900,
                c = parseInt(a.substr(2, 2), 10),
                d = parseInt(a.substr(4, 2), 10); return !!FormValidation.Helper.date(b, c, d) && FormValidation.Helper.luhn(a) }, _sk: function(a) { return this._cz(a) }, _sm: function(a) { return /^\d{5}$/.test(a) }, _th: function(a) { if (13 !== a.length) return !1; for (var b = 0, c = 0; 12 > c; c++) b += parseInt(a.charAt(c), 10) * (13 - c); return (11 - b % 11) % 10 === parseInt(a.charAt(12), 10) }, _tr: function(a) { if (11 !== a.length) return !1; for (var b = 0, c = 0; 10 > c; c++) b += parseInt(a.charAt(c), 10); return b % 10 === parseInt(a.charAt(10), 10) }, _za: function(a) { if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(a)) return !1; var b = parseInt(a.substr(0, 2), 10),
                c = (new Date).getFullYear() % 100,
                d = parseInt(a.substr(2, 2), 10),
                e = parseInt(a.substr(4, 2), 10); return b = b >= c ? b + 1900 : b + 2e3, !!FormValidation.Helper.date(b, d, e) && FormValidation.Helper.luhn(a) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { identical: { "default": "Please enter the same value" } } }), FormValidation.Validator.identical = { html5Attributes: { message: "message", field: "field" }, init: function(a, b, c, d) { var e = a.getFieldElements(c.field);
            a.onLiveChange(e, "live_" + d, function() { var c = a.getStatus(b, d);
                c !== a.STATUS_NOT_VALIDATED && a.revalidateField(b) }) }, destroy: function(a, b, c, d) { var e = a.getFieldElements(c.field);
            a.offLiveChange(e, "live_" + d) }, validate: function(a, b, c, d) { var e = a.getFieldValue(b, d),
                f = a.getFieldElements(c.field); if (null === f || 0 === f.length) return !0; var g = a.getFieldValue(f, d); return e === g && (a.updateStatus(f, a.STATUS_VALID, d), !0) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { imei: { "default": "Please enter a valid IMEI number" } } }), FormValidation.Validator.imei = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; switch (!0) {
                case /^\d{15}$/.test(e):
                case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(e):
                case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(e):
                    return e = e.replace(/[^0-9]/g, ""), FormValidation.Helper.luhn(e);
                case /^\d{14}$/.test(e):
                case /^\d{16}$/.test(e):
                case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(e):
                case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(e):
                    return !0;
                default:
                    return !1 } } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { imo: { "default": "Please enter a valid IMO number" } } }), FormValidation.Validator.imo = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; if (!/^IMO \d{7}$/i.test(e)) return !1; for (var f = 0, g = e.replace(/^.*(\d{7})$/, "$1"), h = 6; h >= 1; h--) f += g.slice(6 - h, -h) * (h + 1); return f % 10 === parseInt(g.charAt(6), 10) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { integer: { "default": "Please enter a valid number" } } }), FormValidation.Validator.integer = { html5Attributes: { message: "message", thousandsseparator: "thousandsSeparator", decimalseparator: "decimalSeparator" }, enableByHtml5: function(a) { return "number" === a.attr("type") && (void 0 === a.attr("step") || a.attr("step") % 1 === 0) }, validate: function(a, b, c, d) { if (this.enableByHtml5(b) && b.get(0).validity && b.get(0).validity.badInput === !0) return !1; var e = a.getFieldValue(b, d); if ("" === e) return !0; var f = c.decimalSeparator || ".",
                g = c.thousandsSeparator || "";
            f = "." === f ? "\\." : f, g = "." === g ? "\\." : g; var h = new RegExp("^-?[0-9]{1,3}(" + g + "[0-9]{3})*(" + f + "[0-9]+)?$"),
                i = new RegExp(g, "g"); return !!h.test(e) && (g && (e = e.replace(i, "")), f && (e = e.replace(f, ".")), !(isNaN(e) || !isFinite(e)) && (e = parseFloat(e), Math.floor(e) === e)) } } }(jQuery),
function(a) {
    FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { ip: { "default": "Please enter a valid IP address", ipv4: "Please enter a valid IPv4 address", ipv6: "Please enter a valid IPv6 address" } } }), FormValidation.Validator.ip = {
        html5Attributes: { message: "message", ipv4: "ipv4", ipv6: "ipv6" },
        validate: function(b, c, d, e) {
            var f = b.getFieldValue(c, e);
            if ("" === f) return !0;
            d = a.extend({}, { ipv4: !0, ipv6: !0 }, d);
            var g, h = b.getLocale(),
                i = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                j = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                k = !1;
            switch (!0) {
                case d.ipv4 && !d.ipv6:
                    k = i.test(f), g = d.message || FormValidation.I18n[h].ip.ipv4; break;
                case !d.ipv4 && d.ipv6:
                    k = j.test(f), g = d.message || FormValidation.I18n[h].ip.ipv6; break;
                case d.ipv4 && d.ipv6:
                default:
                    k = i.test(f) || j.test(f), g = d.message || FormValidation.I18n[h].ip["default"] }
            return { valid: k, message: g }
        }
    }
}(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { isbn: { "default": "Please enter a valid ISBN number" } } }), FormValidation.Validator.isbn = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; var f; switch (!0) {
                case /^\d{9}[\dX]$/.test(e):
                case 13 === e.length && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(e):
                case 13 === e.length && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(e):
                    f = "ISBN10"; break;
                case /^(978|979)\d{9}[\dX]$/.test(e):
                case 17 === e.length && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(e):
                case 17 === e.length && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(e):
                    f = "ISBN13"; break;
                default:
                    return !1 } e = e.replace(/[^0-9X]/gi, ""); var g, h, i = e.split(""),
                j = i.length,
                k = 0; switch (f) {
                case "ISBN10":
                    for (k = 0, g = 0; j - 1 > g; g++) k += parseInt(i[g], 10) * (10 - g); return h = 11 - k % 11, 11 === h ? h = 0 : 10 === h && (h = "X"), { type: f, valid: h + "" === i[j - 1] };
                case "ISBN13":
                    for (k = 0, g = 0; j - 1 > g; g++) k += g % 2 === 0 ? parseInt(i[g], 10) : 3 * parseInt(i[g], 10); return h = 10 - k % 10, 10 === h && (h = "0"), { type: f, valid: h + "" === i[j - 1] };
                default:
                    return !1 } } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { isin: { "default": "Please enter a valid ISIN number" } } }), FormValidation.Validator.isin = { COUNTRY_CODES: "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW", validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0;
            e = e.toUpperCase(); var f = new RegExp("^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$"); if (!f.test(e)) return !1; for (var g = "", h = e.length, i = 0; h - 1 > i; i++) { var j = e.charCodeAt(i);
                g += j > 57 ? (j - 55).toString() : e.charAt(i) } var k = "",
                l = g.length,
                m = l % 2 !== 0 ? 0 : 1; for (i = 0; l > i; i++) k += parseInt(g[i], 10) * (i % 2 === m ? 2 : 1) + ""; var n = 0; for (i = 0; i < k.length; i++) n += parseInt(k.charAt(i), 10); return n = (10 - n % 10) % 10, n + "" === e.charAt(h - 1) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { ismn: { "default": "Please enter a valid ISMN number" } } }), FormValidation.Validator.ismn = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; var f; switch (!0) {
                case /^M\d{9}$/.test(e):
                case /^M-\d{4}-\d{4}-\d{1}$/.test(e):
                case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(e):
                    f = "ISMN10"; break;
                case /^9790\d{9}$/.test(e):
                case /^979-0-\d{4}-\d{4}-\d{1}$/.test(e):
                case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(e):
                    f = "ISMN13"; break;
                default:
                    return !1 } "ISMN10" === f && (e = "9790" + e.substr(1)), e = e.replace(/[^0-9]/gi, ""); for (var g = e.length, h = 0, i = [1, 3], j = 0; g - 1 > j; j++) h += parseInt(e.charAt(j), 10) * i[j % 2]; return h = 10 - h % 10, { type: f, valid: h + "" === e.charAt(g - 1) } } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { issn: { "default": "Please enter a valid ISSN number" } } }), FormValidation.Validator.issn = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; if (!/^\d{4}\-\d{3}[\dX]$/.test(e)) return !1;
            e = e.replace(/[^0-9X]/gi, ""); var f = e.split(""),
                g = f.length,
                h = 0; "X" === f[7] && (f[7] = 10); for (var i = 0; g > i; i++) h += parseInt(f[i], 10) * (8 - i); return h % 11 === 0 } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { lessThan: { "default": "Please enter a value less than or equal to %s", notInclusive: "Please enter a value less than %s" } } }), FormValidation.Validator.lessThan = { html5Attributes: { message: "message", value: "value", inclusive: "inclusive" }, enableByHtml5: function(a) { var b = a.attr("type"),
                c = a.attr("max"); return !(!c || "date" === b) && { value: c } }, validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0;
            f = this._format(f); var g = b.getLocale(),
                h = a.isNumeric(d.value) ? d.value : b.getDynamicOption(c, d.value),
                i = this._format(h); return d.inclusive === !0 || void 0 === d.inclusive ? { valid: a.isNumeric(f) && parseFloat(f) <= i, message: FormValidation.Helper.format(d.message || FormValidation.I18n[g].lessThan["default"], h) } : { valid: a.isNumeric(f) && parseFloat(f) < i, message: FormValidation.Helper.format(d.message || FormValidation.I18n[g].lessThan.notInclusive, h) } }, _format: function(a) { return (a + "").replace(",", ".") } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { mac: { "default": "Please enter a valid MAC address" } } }), FormValidation.Validator.mac = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); return "" === e || (/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(e) || /^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(e)) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { meid: { "default": "Please enter a valid MEID number" } } }), FormValidation.Validator.meid = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; switch (!0) {
                case /^[0-9A-F]{15}$/i.test(e):
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(e):
                case /^\d{19}$/.test(e):
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(e):
                    var f = e.charAt(e.length - 1); if (e = e.replace(/[- ]/g, ""), e.match(/^\d*$/i)) return FormValidation.Helper.luhn(e);
                    e = e.slice(0, -1); for (var g = "", h = 1; 13 >= h; h += 2) g += (2 * parseInt(e.charAt(h), 16)).toString(16); var i = 0; for (h = 0; h < g.length; h++) i += parseInt(g.charAt(h), 16); return i % 10 === 0 ? "0" === f : f === (2 * (10 * Math.floor((i + 10) / 10) - i)).toString(16);
                case /^[0-9A-F]{14}$/i.test(e):
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(e):
                case /^\d{18}$/.test(e):
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(e):
                    return !0;
                default:
                    return !1 } } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { notEmpty: { "default": "Please enter a value" } } }), FormValidation.Validator.notEmpty = { enableByHtml5: function(a) { var b = a.attr("required") + ""; return "required" === b || "true" === b }, validate: function(b, c, d, e) { var f = c.attr("type"); if ("radio" === f || "checkbox" === f) { var g = b.getNamespace(); return b.getFieldElements(c.attr("data-" + g + "-field")).filter(":checked").length > 0 } if ("number" === f && c.get(0).validity && c.get(0).validity.badInput === !0) return !0; var h = b.getFieldValue(c, e); return "" !== a.trim(h) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { numeric: { "default": "Please enter a valid float number" } } }), FormValidation.Validator.numeric = { html5Attributes: { message: "message", separator: "separator", thousandsseparator: "thousandsSeparator", decimalseparator: "decimalSeparator" }, enableByHtml5: function(a) { return "number" === a.attr("type") && void 0 !== a.attr("step") && a.attr("step") % 1 !== 0 }, validate: function(a, b, c, d) { if (this.enableByHtml5(b) && b.get(0).validity && b.get(0).validity.badInput === !0) return !1; var e = a.getFieldValue(b, d); if ("" === e) return !0; var f = c.separator || c.decimalSeparator || ".",
                g = c.thousandsSeparator || "";
            e.substr(0, 1) === f ? e = "0" + f + e.substr(1) : e.substr(0, 2) === "-" + f && (e = "-0" + f + e.substr(2)), f = "." === f ? "\\." : f, g = "." === g ? "\\." : g; var h = new RegExp("^-?[0-9]{1,3}(" + g + "[0-9]{3})*(" + f + "[0-9]+)?$"),
                i = new RegExp(g, "g"); return !!h.test(e) && (g && (e = e.replace(i, "")), f && (e = e.replace(f, ".")), !isNaN(parseFloat(e)) && isFinite(e)) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { phone: { "default": "Please enter a valid phone number", country: "Please enter a valid phone number in %s", countries: { AE: "United Arab Emirates", BG: "Bulgaria", BR: "Brazil", CN: "China", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", ES: "Spain", FR: "France", GB: "United Kingdom", IN: "India", MA: "Morocco", NL: "Netherlands", PK: "Pakistan", RO: "Romania", RU: "Russia", SK: "Slovakia", TH: "Thailand", US: "USA", VE: "Venezuela" } } } }), FormValidation.Validator.phone = { html5Attributes: { message: "message", country: "country" }, COUNTRY_CODES: ["AE", "BG", "BR", "CN", "CZ", "DE", "DK", "ES", "FR", "GB", "IN", "MA", "NL", "PK", "RO", "RU", "SK", "TH", "US", "VE"], validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0; var g = b.getLocale(),
                h = d.country; if (("string" != typeof h || -1 === a.inArray(h, this.COUNTRY_CODES)) && (h = b.getDynamicOption(c, h)), !h || -1 === a.inArray(h.toUpperCase(), this.COUNTRY_CODES)) return !0; var i = !0; switch (h.toUpperCase()) {
                case "AE":
                    f = a.trim(f), i = /^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/.test(f); break;
                case "BG":
                    f = f.replace(/\+|\s|-|\/|\(|\)/gi, ""), i = /^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(f); break;
                case "BR":
                    f = a.trim(f), i = /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(f); break;
                case "CN":
                    f = a.trim(f), i = /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(f); break;
                case "CZ":
                    i = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(f); break;
                case "DE":
                    f = a.trim(f), i = /^(((((((00|\+)49[ \-\/]?)|0)[1-9][0-9]{1,4})[ \-\/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-\/]?))[0-9]{1,7}([ \-\/]?[0-9]{1,5})?)$/.test(f); break;
                case "DK":
                    f = a.trim(f), i = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(f); break;
                case "ES":
                    f = a.trim(f), i = /^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(f); break;
                case "FR":
                    f = a.trim(f), i = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(f); break;
                case "GB":
                    f = a.trim(f), i = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(f); break;
                case "IN":
                    f = a.trim(f), i = /((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(f); break;
                case "MA":
                    f = a.trim(f), i = /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(f); break;
                case "NL":
                    f = a.trim(f), i = /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(f); break;
                case "PK":
                    f = a.trim(f), i = /^0?3[0-9]{2}[0-9]{7}$/.test(f); break;
                case "RO":
                    i = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(f); break;
                case "RU":
                    i = /^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(f); break;
                case "SK":
                    i = /^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(f); break;
                case "TH":
                    i = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(f); break;
                case "VE":
                    f = a.trim(f), i = /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(f); break;
                case "US":
                default:
                    i = /^(?:(1\-?)|(\+1 ?))?\(?\d{3}\)?\s?[\-\.]?\d{3}[\-\.]?\d{4}$/.test(f) } return { valid: i, message: FormValidation.Helper.format(d.message || FormValidation.I18n[g].phone.country, FormValidation.I18n[g].phone.countries[h]) } } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { promise: { "default": "Please enter a valid value" } } }), FormValidation.Validator.promise = { priority: 999, html5Attributes: { message: "message", promise: "promise" }, validate: function(b, c, d, e) { var f = b.getFieldValue(c, e),
                g = new a.Deferred,
                h = FormValidation.Helper.call(d.promise, [f, b, c]); return h.done(function(a) { g.resolve(c, e, a) }).fail(function(a) { a = a || {}, a.valid = !1, g.resolve(c, e, a) }), g } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { regexp: { "default": "Please enter a value matching the pattern" } } }), FormValidation.Validator.regexp = { html5Attributes: { message: "message", flags: "flags", regexp: "regexp" }, enableByHtml5: function(a) { var b = a.attr("pattern"); return !!b && { regexp: b } }, validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; var f = "string" == typeof c.regexp ? c.flags ? new RegExp(c.regexp, c.flags) : new RegExp(c.regexp) : c.regexp; return f.test(e) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { remote: { "default": "Please enter a valid value" } } }), FormValidation.Validator.remote = { priority: 1e3, html5Attributes: { async: "async", crossdomain: "crossDomain", data: "data", datatype: "dataType", delay: "delay", message: "message", name: "name", type: "type", url: "url", validkey: "validKey" }, destroy: function(a, b, c, d) { var e = a.getNamespace(),
                f = b.data(e + "." + d + ".timer");
            f && (clearTimeout(f), b.removeData(e + "." + d + ".timer")) }, validate: function(b, c, d, e) {
            function f() { var b = a.ajax(n); return b.success(function(a) { a.valid = a[m] === !0 || "true" === a[m] || a[m] !== !1 && "false" !== a[m] && null, i.resolve(c, e, a) }).error(function(a) { i.resolve(c, e, { valid: !1 }) }), i.fail(function() { b.abort() }), i } var g = b.getNamespace(),
                h = b.getFieldValue(c, e),
                i = new a.Deferred; if ("" === h) return i.resolve(c, e, { valid: !0 }), i; var j = c.attr("data-" + g + "-field"),
                k = d.data || {},
                l = d.url,
                m = d.validKey || "valid"; "function" == typeof k && (k = k.call(this, b, c, h)), "string" == typeof k && (k = JSON.parse(k)), "function" == typeof l && (l = l.call(this, b, c, h)), k[d.name || j] = h; var n = { async: null === d.async || d.async === !0 || "true" === d.async, data: k, dataType: d.dataType || "json", headers: d.headers || {}, type: d.type || "GET", url: l }; return null !== d.crossDomain && (n.crossDomain = d.crossDomain === !0 || "true" === d.crossDomain), d.delay ? (c.data(g + "." + e + ".timer") && clearTimeout(c.data(g + "." + e + ".timer")), c.data(g + "." + e + ".timer", setTimeout(f, d.delay)), i) : f() } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { rtn: { "default": "Please enter a valid RTN number" } } }), FormValidation.Validator.rtn = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; if (!/^\d{9}$/.test(e)) return !1; for (var f = 0, g = 0; g < e.length; g += 3) f += 3 * parseInt(e.charAt(g), 10) + 7 * parseInt(e.charAt(g + 1), 10) + parseInt(e.charAt(g + 2), 10); return 0 !== f && f % 10 === 0 } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { sedol: { "default": "Please enter a valid SEDOL number" } } }), FormValidation.Validator.sedol = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; if (e = e.toUpperCase(), !/^[0-9A-Z]{7}$/.test(e)) return !1; for (var f = 0, g = [1, 3, 1, 7, 3, 9, 1], h = e.length, i = 0; h - 1 > i; i++) f += g[i] * parseInt(e.charAt(i), 36); return f = (10 - f % 10) % 10, f + "" === e.charAt(h - 1) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { siren: { "default": "Please enter a valid SIREN number" } } }), FormValidation.Validator.siren = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); return "" === e || !!/^\d{9}$/.test(e) && FormValidation.Helper.luhn(e) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { siret: { "default": "Please enter a valid SIRET number" } } }), FormValidation.Validator.siret = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; for (var f, g = 0, h = e.length, i = 0; h > i; i++) f = parseInt(e.charAt(i), 10), i % 2 === 0 && (f = 2 * f, f > 9 && (f -= 9)), g += f; return g % 10 === 0 } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { step: { "default": "Please enter a valid step of %s" } } }), FormValidation.Validator.step = { html5Attributes: { message: "message", base: "baseValue", step: "step" }, validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0; if (d = a.extend({}, { baseValue: 0, step: 1 }, d), f = parseFloat(f), !a.isNumeric(f)) return !1; var g = function(a, b) { var c = Math.pow(10, b);
                    a *= c; var d = a > 0 | -(0 > a),
                        e = a % 1 === .5 * d; return e ? (Math.floor(a) + (d > 0)) / c : Math.round(a) / c },
                h = function(a, b) { if (0 === b) return 1; var c = (a + "").split("."),
                        d = (b + "").split("."),
                        e = (1 === c.length ? 0 : c[1].length) + (1 === d.length ? 0 : d[1].length); return g(a - b * Math.floor(a / b), e) },
                i = b.getLocale(),
                j = h(f - d.baseValue, d.step); return { valid: 0 === j || j === d.step, message: FormValidation.Helper.format(d.message || FormValidation.I18n[i].step["default"], [d.step]) } } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { stringCase: { "default": "Please enter only lowercase characters", upper: "Please enter only uppercase characters" } } }), FormValidation.Validator.stringCase = { html5Attributes: { message: "message", "case": "case" }, validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; var f = a.getLocale(),
                g = (c["case"] || "lower").toLowerCase(); return { valid: "upper" === g ? e === e.toUpperCase() : e === e.toLowerCase(), message: c.message || ("upper" === g ? FormValidation.I18n[f].stringCase.upper : FormValidation.I18n[f].stringCase["default"]) } } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { stringLength: { "default": "Please enter a value with valid length", less: "Please enter less than %s characters", more: "Please enter more than %s characters", between: "Please enter value between %s and %s characters long" } } }), FormValidation.Validator.stringLength = { html5Attributes: { message: "message", min: "min", max: "max", trim: "trim", utf8bytes: "utf8Bytes" }, enableByHtml5: function(b) { var c = {},
                d = b.attr("maxlength"),
                e = b.attr("minlength"); return d && (c.max = parseInt(d, 10)), e && (c.min = parseInt(e, 10)), !a.isEmptyObject(c) && c }, validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ((d.trim === !0 || "true" === d.trim) && (f = a.trim(f)), "" === f) return !0; var g = b.getLocale(),
                h = a.isNumeric(d.min) ? d.min : b.getDynamicOption(c, d.min),
                i = a.isNumeric(d.max) ? d.max : b.getDynamicOption(c, d.max),
                j = function(a) { for (var b = a.length, c = a.length - 1; c >= 0; c--) { var d = a.charCodeAt(c);
                        d > 127 && 2047 >= d ? b++ : d > 2047 && 65535 >= d && (b += 2), d >= 56320 && 57343 >= d && c-- } return b },
                k = d.utf8Bytes ? j(f) : f.length,
                l = !0,
                m = d.message || FormValidation.I18n[g].stringLength["default"]; switch ((h && k < parseInt(h, 10) || i && k > parseInt(i, 10)) && (l = !1), !0) {
                case !!h && !!i:
                    m = FormValidation.Helper.format(d.message || FormValidation.I18n[g].stringLength.between, [parseInt(h, 10), parseInt(i, 10)]); break;
                case !!h:
                    m = FormValidation.Helper.format(d.message || FormValidation.I18n[g].stringLength.more, parseInt(h, 10) - 1); break;
                case !!i:
                    m = FormValidation.Helper.format(d.message || FormValidation.I18n[g].stringLength.less, parseInt(i, 10) + 1) } return { valid: l, message: m } } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { uri: { "default": "Please enter a valid URI" } } }), FormValidation.Validator.uri = { html5Attributes: { message: "message", allowlocal: "allowLocal", allowemptyprotocol: "allowEmptyProtocol", protocol: "protocol" }, enableByHtml5: function(a) { return "url" === a.attr("type") }, validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; var f = c.allowLocal === !0 || "true" === c.allowLocal,
                g = c.allowEmptyProtocol === !0 || "true" === c.allowEmptyProtocol,
                h = (c.protocol || "http, https, ftp").split(",").join("|").replace(/\s/g, ""),
                i = new RegExp("^(?:(?:" + h + ")://)" + (g ? "?" : "") + "(?:\\S+(?::\\S*)?@)?(?:" + (f ? "" : "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (f ? "?" : "") + ")(?::\\d{2,5})?(?:/[^\\s]*)?$", "i"); return i.test(e) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { uuid: { "default": "Please enter a valid UUID number", version: "Please enter a valid UUID version %s number" } } }), FormValidation.Validator.uuid = { html5Attributes: { message: "message", version: "version" }, validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; var f = a.getLocale(),
                g = { 3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i, 4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, 5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i },
                h = c.version ? c.version + "" : "all"; return { valid: null === g[h] || g[h].test(e), message: c.version ? FormValidation.Helper.format(c.message || FormValidation.I18n[f].uuid.version, c.version) : c.message || FormValidation.I18n[f].uuid["default"] } } } }(jQuery),
function(a) {
    FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { vat: { "default": "Please enter a valid VAT number", country: "Please enter a valid VAT number in %s", countries: { AT: "Austria", BE: "Belgium", BG: "Bulgaria", BR: "Brazil", CH: "Switzerland", CY: "Cyprus", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", EE: "Estonia", ES: "Spain", FI: "Finland", FR: "France", GB: "United Kingdom", GR: "Greek", EL: "Greek", HU: "Hungary", HR: "Croatia", IE: "Ireland", IS: "Iceland", IT: "Italy", LT: "Lithuania", LU: "Luxembourg", LV: "Latvia", MT: "Malta", NL: "Netherlands", NO: "Norway", PL: "Poland", PT: "Portugal", RO: "Romania", RU: "Russia", RS: "Serbia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", VE: "Venezuela", ZA: "South Africa" } } } }), FormValidation.Validator.vat = {
        html5Attributes: { message: "message", country: "country" },
        COUNTRY_CODES: ["AT", "BE", "BG", "BR", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "RS", "SE", "SK", "SI", "VE", "ZA"],
        validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f) return !0; var g = b.getLocale(),
                h = d.country; if (h ? ("string" != typeof h || -1 === a.inArray(h.toUpperCase(), this.COUNTRY_CODES)) && (h = b.getDynamicOption(c, h)) : h = f.substr(0, 2), -1 === a.inArray(h, this.COUNTRY_CODES)) return !0; var i = ["_", h.toLowerCase()].join(""),
                j = this[i](f); return j = j === !0 || j === !1 ? { valid: j } : j, j.message = FormValidation.Helper.format(d.message || FormValidation.I18n[g].vat.country, FormValidation.I18n[g].vat.countries[h.toUpperCase()]), j },
        _at: function(a) { if (/^ATU[0-9]{8}$/.test(a) && (a = a.substr(2)), !/^U[0-9]{8}$/.test(a)) return !1;
            a = a.substr(1); for (var b = 0, c = [1, 2, 1, 2, 1, 2, 1], d = 0, e = 0; 7 > e; e++) d = parseInt(a.charAt(e), 10) * c[e], d > 9 && (d = Math.floor(d / 10) + d % 10), b += d; return b = 10 - (b + 4) % 10, 10 === b && (b = 0), b + "" === a.substr(7, 1) },
        _be: function(a) { if (/^BE[0]{0,1}[0-9]{9}$/.test(a) && (a = a.substr(2)), !/^[0]{0,1}[0-9]{9}$/.test(a)) return !1; if (9 === a.length && (a = "0" + a), "0" === a.substr(1, 1)) return !1; var b = parseInt(a.substr(0, 8), 10) + parseInt(a.substr(8, 2), 10); return b % 97 === 0 },
        _bg: function(a) { if (/^BG[0-9]{9,10}$/.test(a) && (a = a.substr(2)), !/^[0-9]{9,10}$/.test(a)) return !1; var b = 0,
                c = 0; if (9 === a.length) { for (c = 0; 8 > c; c++) b += parseInt(a.charAt(c), 10) * (c + 1); if (b %= 11, 10 === b)
                    for (b = 0, c = 0; 8 > c; c++) b += parseInt(a.charAt(c), 10) * (c + 3); return b %= 10, b + "" === a.substr(8) } if (10 === a.length) { var d = function(a) { var b = parseInt(a.substr(0, 2), 10) + 1900,
                            c = parseInt(a.substr(2, 2), 10),
                            d = parseInt(a.substr(4, 2), 10); if (c > 40 ? (b += 100, c -= 40) : c > 20 && (b -= 100, c -= 20), !FormValidation.Helper.date(b, c, d)) return !1; for (var e = 0, f = [2, 4, 8, 5, 10, 9, 7, 3, 6], g = 0; 9 > g; g++) e += parseInt(a.charAt(g), 10) * f[g]; return e = e % 11 % 10, e + "" === a.substr(9, 1) },
                    e = function(a) { for (var b = 0, c = [21, 19, 17, 13, 11, 9, 7, 3, 1], d = 0; 9 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b %= 10, b + "" === a.substr(9, 1) },
                    f = function(a) { for (var b = 0, c = [4, 3, 2, 7, 6, 5, 4, 3, 2], d = 0; 9 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b = 11 - b % 11, 10 !== b && (11 === b && (b = 0), b + "" === a.substr(9, 1)) }; return d(a) || e(a) || f(a) } return !1 },
        _br: function(a) { if ("" === a) return !0; var b = a.replace(/[^\d]+/g, ""); if ("" === b || 14 !== b.length) return !1; if ("00000000000000" === b || "11111111111111" === b || "22222222222222" === b || "33333333333333" === b || "44444444444444" === b || "55555555555555" === b || "66666666666666" === b || "77777777777777" === b || "88888888888888" === b || "99999999999999" === b) return !1; for (var c = b.length - 2, d = b.substring(0, c), e = b.substring(c), f = 0, g = c - 7, h = c; h >= 1; h--) f += parseInt(d.charAt(c - h), 10) * g--, 2 > g && (g = 9); var i = 2 > f % 11 ? 0 : 11 - f % 11; if (i !== parseInt(e.charAt(0), 10)) return !1; for (c += 1, d = b.substring(0, c), f = 0, g = c - 7, h = c; h >= 1; h--) f += parseInt(d.charAt(c - h), 10) * g--, 2 > g && (g = 9); return i = 2 > f % 11 ? 0 : 11 - f % 11, i === parseInt(e.charAt(1), 10) },
        _ch: function(a) { if (/^CHE[0-9]{9}(MWST)?$/.test(a) && (a = a.substr(2)), !/^E[0-9]{9}(MWST)?$/.test(a)) return !1;
            a = a.substr(1); for (var b = 0, c = [5, 4, 3, 2, 7, 6, 5, 4], d = 0; 8 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b = 11 - b % 11, 10 !== b && (11 === b && (b = 0), b + "" === a.substr(8, 1)) },
        _cy: function(a) { if (/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(a) && (a = a.substr(2)), !/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(a)) return !1; if ("12" === a.substr(0, 2)) return !1; for (var b = 0, c = { 0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21 }, d = 0; 8 > d; d++) { var e = parseInt(a.charAt(d), 10);
                d % 2 === 0 && (e = c[e + ""]), b += e } return b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" [b % 26], b + "" === a.substr(8, 1) },
        _cz: function(a) { if (/^CZ[0-9]{8,10}$/.test(a) && (a = a.substr(2)), !/^[0-9]{8,10}$/.test(a)) return !1; var b = 0,
                c = 0; if (8 === a.length) { if (a.charAt(0) + "" == "9") return !1; for (b = 0, c = 0; 7 > c; c++) b += parseInt(a.charAt(c), 10) * (8 - c); return b = 11 - b % 11, 10 === b && (b = 0), 11 === b && (b = 1), b + "" === a.substr(7, 1) } if (9 === a.length && a.charAt(0) + "" == "6") { for (b = 0, c = 0; 7 > c; c++) b += parseInt(a.charAt(c + 1), 10) * (8 - c); return b = 11 - b % 11, 10 === b && (b = 0), 11 === b && (b = 1), b = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][b - 1], b + "" === a.substr(8, 1) } if (9 === a.length || 10 === a.length) { var d = 1900 + parseInt(a.substr(0, 2), 10),
                    e = parseInt(a.substr(2, 2), 10) % 50 % 20,
                    f = parseInt(a.substr(4, 2), 10); if (9 === a.length) { if (d >= 1980 && (d -= 100), d > 1953) return !1 } else 1954 > d && (d += 100); if (!FormValidation.Helper.date(d, e, f)) return !1; if (10 === a.length) { var g = parseInt(a.substr(0, 9), 10) % 11; return 1985 > d && (g %= 10), g + "" === a.substr(9, 1) } return !0 } return !1 },
        _de: function(a) { return /^DE[0-9]{9}$/.test(a) && (a = a.substr(2)), !!/^[0-9]{9}$/.test(a) && FormValidation.Helper.mod11And10(a) },
        _dk: function(a) { if (/^DK[0-9]{8}$/.test(a) && (a = a.substr(2)), !/^[0-9]{8}$/.test(a)) return !1; for (var b = 0, c = [2, 7, 6, 5, 4, 3, 2, 1], d = 0; 8 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b % 11 === 0 },
        _ee: function(a) { if (/^EE[0-9]{9}$/.test(a) && (a = a.substr(2)), !/^[0-9]{9}$/.test(a)) return !1; for (var b = 0, c = [3, 7, 1, 3, 7, 1, 3, 7, 1], d = 0; 9 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b % 10 === 0 },
        _es: function(a) { if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(a) && (a = a.substr(2)), !/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(a)) return !1; var b = function(a) { var b = parseInt(a.substr(0, 8), 10); return b = "TRWAGMYFPDXBNJZSQVHLCKE" [b % 23], b + "" === a.substr(8, 1) },
                c = function(a) { var b = ["XYZ".indexOf(a.charAt(0)), a.substr(1)].join(""); return b = parseInt(b, 10), b = "TRWAGMYFPDXBNJZSQVHLCKE" [b % 23], b + "" === a.substr(8, 1) },
                d = function(a) { var b, c = a.charAt(0); if (-1 !== "KLM".indexOf(c)) return b = parseInt(a.substr(1, 8), 10), b = "TRWAGMYFPDXBNJZSQVHLCKE" [b % 23], b + "" === a.substr(8, 1); if (-1 !== "ABCDEFGHJNPQRSUVW".indexOf(c)) { for (var d = 0, e = [2, 1, 2, 1, 2, 1, 2], f = 0, g = 0; 7 > g; g++) f = parseInt(a.charAt(g + 1), 10) * e[g], f > 9 && (f = Math.floor(f / 10) + f % 10), d += f; return d = 10 - d % 10, 10 === d && (d = 0), d + "" === a.substr(8, 1) || "JABCDEFGHI" [d] === a.substr(8, 1) } return !1 },
                e = a.charAt(0); return /^[0-9]$/.test(e) ? { valid: b(a), type: "DNI" } : /^[XYZ]$/.test(e) ? { valid: c(a), type: "NIE" } : { valid: d(a), type: "CIF" } },
        _fi: function(a) { if (/^FI[0-9]{8}$/.test(a) && (a = a.substr(2)), !/^[0-9]{8}$/.test(a)) return !1; for (var b = 0, c = [7, 9, 10, 5, 8, 4, 2, 1], d = 0; 8 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b % 11 === 0 },
        _fr: function(a) { if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(a) && (a = a.substr(2)), !/^[0-9A-Z]{2}[0-9]{9}$/.test(a)) return !1; if (!FormValidation.Helper.luhn(a.substr(2))) return !1; if (/^[0-9]{2}$/.test(a.substr(0, 2))) return a.substr(0, 2) === parseInt(a.substr(2) + "12", 10) % 97 + ""; var b, c = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ"; return b = /^[0-9]{1}$/.test(a.charAt(0)) ? 24 * c.indexOf(a.charAt(0)) + c.indexOf(a.charAt(1)) - 10 : 34 * c.indexOf(a.charAt(0)) + c.indexOf(a.charAt(1)) - 100, (parseInt(a.substr(2), 10) + 1 + Math.floor(b / 11)) % 11 === b % 11 },
        _gb: function(a) { if ((/^GB[0-9]{9}$/.test(a) || /^GB[0-9]{12}$/.test(a) || /^GBGD[0-9]{3}$/.test(a) || /^GBHA[0-9]{3}$/.test(a) || /^GB(GD|HA)8888[0-9]{5}$/.test(a)) && (a = a.substr(2)), !(/^[0-9]{9}$/.test(a) || /^[0-9]{12}$/.test(a) || /^GD[0-9]{3}$/.test(a) || /^HA[0-9]{3}$/.test(a) || /^(GD|HA)8888[0-9]{5}$/.test(a))) return !1; var b = a.length; if (5 === b) { var c = a.substr(0, 2),
                    d = parseInt(a.substr(2), 10); return "GD" === c && 500 > d || "HA" === c && d >= 500 } if (11 === b && ("GD8888" === a.substr(0, 6) || "HA8888" === a.substr(0, 6))) return !("GD" === a.substr(0, 2) && parseInt(a.substr(6, 3), 10) >= 500 || "HA" === a.substr(0, 2) && parseInt(a.substr(6, 3), 10) < 500) && parseInt(a.substr(6, 3), 10) % 97 === parseInt(a.substr(9, 2), 10); if (9 === b || 12 === b) { for (var e = 0, f = [8, 7, 6, 5, 4, 3, 2, 10, 1], g = 0; 9 > g; g++) e += parseInt(a.charAt(g), 10) * f[g]; return e %= 97, parseInt(a.substr(0, 3), 10) >= 100 ? 0 === e || 42 === e || 55 === e : 0 === e } return !0 },
        _gr: function(a) { if (/^(GR|EL)[0-9]{9}$/.test(a) && (a = a.substr(2)), !/^[0-9]{9}$/.test(a)) return !1;
            8 === a.length && (a = "0" + a); for (var b = 0, c = [256, 128, 64, 32, 16, 8, 4, 2], d = 0; 8 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b = b % 11 % 10, b + "" === a.substr(8, 1) },
        _el: function(a) { return this._gr(a) },
        _hu: function(a) { if (/^HU[0-9]{8}$/.test(a) && (a = a.substr(2)), !/^[0-9]{8}$/.test(a)) return !1; for (var b = 0, c = [9, 7, 3, 1, 9, 7, 3, 1], d = 0; 8 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b % 10 === 0 },
        _hr: function(a) { return /^HR[0-9]{11}$/.test(a) && (a = a.substr(2)), !!/^[0-9]{11}$/.test(a) && FormValidation.Helper.mod11And10(a) },
        _ie: function(a) { if (/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(a) && (a = a.substr(2)), !/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(a)) return !1; var b = function(a) { for (; a.length < 7;) a = "0" + a; for (var b = "WABCDEFGHIJKLMNOPQRSTUV", c = 0, d = 0; 7 > d; d++) c += parseInt(a.charAt(d), 10) * (8 - d); return c += 9 * b.indexOf(a.substr(7)), b[c % 23] }; return /^[0-9]+$/.test(a.substr(0, 7)) ? a.charAt(7) === b(a.substr(0, 7) + a.substr(8) + "") : -1 === "ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(a.charAt(1)) || a.charAt(7) === b(a.substr(2, 5) + a.substr(0, 1) + "") },
        _is: function(a) { return /^IS[0-9]{5,6}$/.test(a) && (a = a.substr(2)), /^[0-9]{5,6}$/.test(a) },
        _it: function(a) { if (/^IT[0-9]{11}$/.test(a) && (a = a.substr(2)), !/^[0-9]{11}$/.test(a)) return !1; if (0 === parseInt(a.substr(0, 7), 10)) return !1; var b = parseInt(a.substr(7, 3), 10); return !(1 > b || b > 201 && 999 !== b && 888 !== b) && FormValidation.Helper.luhn(a) },
        _lt: function(a) { if (/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(a) && (a = a.substr(2)), !/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(a)) return !1; var b, c = a.length,
                d = 0; for (b = 0; c - 1 > b; b++) d += parseInt(a.charAt(b), 10) * (1 + b % 9); var e = d % 11; if (10 === e)
                for (d = 0, b = 0; c - 1 > b; b++) d += parseInt(a.charAt(b), 10) * (1 + (b + 2) % 9); return e = e % 11 % 10, e + "" === a.charAt(c - 1) },
        _lu: function(a) { return /^LU[0-9]{8}$/.test(a) && (a = a.substr(2)), !!/^[0-9]{8}$/.test(a) && parseInt(a.substr(0, 6), 10) % 89 + "" === a.substr(6, 2) },
        _lv: function(a) { if (/^LV[0-9]{11}$/.test(a) && (a = a.substr(2)), !/^[0-9]{11}$/.test(a)) return !1; var b, c = parseInt(a.charAt(0), 10),
                d = 0,
                e = [],
                f = a.length; if (c > 3) { for (d = 0, e = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1], b = 0; f > b; b++) d += parseInt(a.charAt(b), 10) * e[b]; return d %= 11, 3 === d } var g = parseInt(a.substr(0, 2), 10),
                h = parseInt(a.substr(2, 2), 10),
                i = parseInt(a.substr(4, 2), 10); if (i = i + 1800 + 100 * parseInt(a.charAt(6), 10), !FormValidation.Helper.date(i, h, g)) return !1; for (d = 0, e = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], b = 0; f - 1 > b; b++) d += parseInt(a.charAt(b), 10) * e[b]; return d = (d + 1) % 11 % 10, d + "" === a.charAt(f - 1) },
        _mt: function(a) { if (/^MT[0-9]{8}$/.test(a) && (a = a.substr(2)), !/^[0-9]{8}$/.test(a)) return !1; for (var b = 0, c = [3, 4, 6, 7, 8, 9, 10, 1], d = 0; 8 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b % 37 === 0 },
        _nl: function(a) { if (/^NL[0-9]{9}B[0-9]{2}$/.test(a) && (a = a.substr(2)), !/^[0-9]{9}B[0-9]{2}$/.test(a)) return !1; for (var b = 0, c = [9, 8, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b %= 11, b > 9 && (b = 0), b + "" === a.substr(8, 1) },
        _no: function(a) { if (/^NO[0-9]{9}$/.test(a) && (a = a.substr(2)), !/^[0-9]{9}$/.test(a)) return !1; for (var b = 0, c = [3, 2, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b = 11 - b % 11, 11 === b && (b = 0), b + "" === a.substr(8, 1) },
        _pl: function(a) { if (/^PL[0-9]{10}$/.test(a) && (a = a.substr(2)), !/^[0-9]{10}$/.test(a)) return !1; for (var b = 0, c = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], d = 0; 10 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b % 11 === 0 },
        _pt: function(a) { if (/^PT[0-9]{9}$/.test(a) && (a = a.substr(2)), !/^[0-9]{9}$/.test(a)) return !1; for (var b = 0, c = [9, 8, 7, 6, 5, 4, 3, 2], d = 0; 8 > d; d++) b += parseInt(a.charAt(d), 10) * c[d]; return b = 11 - b % 11, b > 9 && (b = 0), b + "" === a.substr(8, 1) },
        _ro: function(a) {
            if (/^RO[1-9][0-9]{1,9}$/.test(a) && (a = a.substr(2)), !/^[1-9][0-9]{1,9}$/.test(a)) return !1;
            for (var b = a.length, c = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - b), d = 0, e = 0; b - 1 > e; e++) d += parseInt(a.charAt(e), 10) * c[e];
            return d = 10 * d % 11 % 10, d + "" === a.substr(b - 1, 1)
        },
        _ru: function(a) { if (/^RU([0-9]{10}|[0-9]{12})$/.test(a) && (a = a.substr(2)), !/^([0-9]{10}|[0-9]{12})$/.test(a)) return !1; var b = 0; if (10 === a.length) { var c = 0,
                    d = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0]; for (b = 0; 10 > b; b++) c += parseInt(a.charAt(b), 10) * d[b]; return c %= 11, c > 9 && (c %= 10), c + "" === a.substr(9, 1) } if (12 === a.length) { var e = 0,
                    f = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
                    g = 0,
                    h = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0]; for (b = 0; 11 > b; b++) e += parseInt(a.charAt(b), 10) * f[b], g += parseInt(a.charAt(b), 10) * h[b]; return e %= 11, e > 9 && (e %= 10), g %= 11, g > 9 && (g %= 10), e + "" === a.substr(10, 1) && g + "" === a.substr(11, 1) } return !1 },
        _rs: function(a) { if (/^RS[0-9]{9}$/.test(a) && (a = a.substr(2)), !/^[0-9]{9}$/.test(a)) return !1; for (var b = 10, c = 0, d = 0; 8 > d; d++) c = (parseInt(a.charAt(d), 10) + b) % 10, 0 === c && (c = 10), b = 2 * c % 11; return (b + parseInt(a.substr(8, 1), 10)) % 10 === 1 },
        _se: function(a) { return /^SE[0-9]{10}01$/.test(a) && (a = a.substr(2)), !!/^[0-9]{10}01$/.test(a) && (a = a.substr(0, 10), FormValidation.Helper.luhn(a)) },
        _si: function(a) { var b = a.match(/^(SI)?([1-9][0-9]{7})$/); if (!b) return !1;
            b[1] && (a = a.substr(2)); for (var c = 0, d = [8, 7, 6, 5, 4, 3, 2], e = 0; 7 > e; e++) c += parseInt(a.charAt(e), 10) * d[e]; return c = 11 - c % 11, 10 === c && (c = 0), c + "" === a.substr(7, 1) },
        _sk: function(a) { return /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(a) && (a = a.substr(2)), !!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(a) && parseInt(a, 10) % 11 === 0 },
        _ve: function(a) { if (/^VE[VEJPG][0-9]{9}$/.test(a) && (a = a.substr(2)), !/^[VEJPG][0-9]{9}$/.test(a)) return !1; for (var b = { V: 4, E: 8, J: 12, P: 16, G: 20 }, c = b[a.charAt(0)], d = [3, 2, 7, 6, 5, 4, 3, 2], e = 0; 8 > e; e++) c += parseInt(a.charAt(e + 1), 10) * d[e]; return c = 11 - c % 11, (11 === c || 10 === c) && (c = 0), c + "" === a.substr(9, 1) },
        _za: function(a) { return /^ZA4[0-9]{9}$/.test(a) && (a = a.substr(2)), /^4[0-9]{9}$/.test(a) }
    }
}(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { vin: { "default": "Please enter a valid VIN number" } } }), FormValidation.Validator.vin = { validate: function(a, b, c, d) { var e = a.getFieldValue(b, d); if ("" === e) return !0; if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(e)) return !1;
            e = e.toUpperCase(); for (var f = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, J: 1, K: 2, L: 3, M: 4, N: 5, P: 7, R: 9, S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0 }, g = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], h = 0, i = e.length, j = 0; i > j; j++) h += f[e.charAt(j) + ""] * g[j]; var k = h % 11; return 10 === k && (k = "X"), k + "" === e.charAt(8) } } }(jQuery),
function(a) { FormValidation.I18n = a.extend(!0, FormValidation.I18n || {}, { en_US: { zipCode: { "default": "Please enter a valid postal code", country: "Please enter a valid postal code in %s", countries: { AT: "Austria", BG: "Bulgaria", BR: "Brazil", CA: "Canada", CH: "Switzerland", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", ES: "Spain", FR: "France", GB: "United Kingdom", IE: "Ireland", IN: "India", IT: "Italy", MA: "Morocco", NL: "Netherlands", PL: "Poland", PT: "Portugal", RO: "Romania", RU: "Russia", SE: "Sweden", SG: "Singapore", SK: "Slovakia", US: "USA" } } } }), FormValidation.Validator.zipCode = { html5Attributes: { message: "message", country: "country" }, COUNTRY_CODES: ["AT", "BG", "BR", "CA", "CH", "CZ", "DE", "DK", "ES", "FR", "GB", "IE", "IN", "IT", "MA", "NL", "PL", "PT", "RO", "RU", "SE", "SG", "SK", "US"], validate: function(b, c, d, e) { var f = b.getFieldValue(c, e); if ("" === f || !d.country) return !0; var g = b.getLocale(),
                h = d.country; if (("string" != typeof h || -1 === a.inArray(h, this.COUNTRY_CODES)) && (h = b.getDynamicOption(c, h)), !h || -1 === a.inArray(h.toUpperCase(), this.COUNTRY_CODES)) return !0; var i = !1; switch (h = h.toUpperCase()) {
                case "AT":
                    i = /^([1-9]{1})(\d{3})$/.test(f); break;
                case "BG":
                    i = /^([1-9]{1}[0-9]{3})$/.test(a.trim(f)); break;
                case "BR":
                    i = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(f); break;
                case "CA":
                    i = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(f); break;
                case "CH":
                    i = /^([1-9]{1})(\d{3})$/.test(f); break;
                case "CZ":
                    i = /^(\d{3})([ ]?)(\d{2})$/.test(f); break;
                case "DE":
                    i = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(f); break;
                case "DK":
                    i = /^(DK(-|\s)?)?\d{4}$/i.test(f); break;
                case "ES":
                    i = /^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(f); break;
                case "FR":
                    i = /^[0-9]{5}$/i.test(f); break;
                case "GB":
                    i = this._gb(f); break;
                case "IN":
                    i = /^\d{3}\s?\d{3}$/.test(f); break;
                case "IE":
                    i = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(f); break;
                case "IT":
                    i = /^(I-|IT-)?\d{5}$/i.test(f); break;
                case "MA":
                    i = /^[1-9][0-9]{4}$/i.test(f); break;
                case "NL":
                    i = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(f); break;
                case "PL":
                    i = /^[0-9]{2}\-[0-9]{3}$/.test(f); break;
                case "PT":
                    i = /^[1-9]\d{3}-\d{3}$/.test(f); break;
                case "RO":
                    i = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(f); break;
                case "RU":
                    i = /^[0-9]{6}$/i.test(f); break;
                case "SE":
                    i = /^(S-)?\d{3}\s?\d{2}$/i.test(f); break;
                case "SG":
                    i = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(f); break;
                case "SK":
                    i = /^(\d{3})([ ]?)(\d{2})$/.test(f); break;
                case "US":
                default:
                    i = /^\d{4,5}([\-]?\d{4})?$/.test(f) } return { valid: i, message: FormValidation.Helper.format(d.message || FormValidation.I18n[g].zipCode.country, FormValidation.I18n[g].zipCode.countries[h]) } }, _gb: function(a) { for (var b = "[ABCDEFGHIJKLMNOPRSTUWYZ]", c = "[ABCDEFGHKLMNOPQRSTUVWXY]", d = "[ABCDEFGHJKPMNRSTUVWXY]", e = "[ABEHMNPRVWXY]", f = "[ABDEFGHJLNPQRSTUWXYZ]", g = [new RegExp("^(" + b + "{1}" + c + "?[0-9]{1,2})(\\s*)([0-9]{1}" + f + "{2})$", "i"), new RegExp("^(" + b + "{1}[0-9]{1}" + d + "{1})(\\s*)([0-9]{1}" + f + "{2})$", "i"), new RegExp("^(" + b + "{1}" + c + "{1}?[0-9]{1}" + e + "{1})(\\s*)([0-9]{1}" + f + "{2})$", "i"), new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$", "i"), /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i], h = 0; h < g.length; h++)
                if (g[h].test(a)) return !0; return !1 } } }(jQuery), ! function(a) { FormValidation.Framework.Bootstrap = function(b, c, d) { c = a.extend(!0, { button: { selector: '[type="submit"]:not([formnovalidate])', disabled: "disabled" }, err: { clazz: "help-block", parent: "^(.*)col-(xs|sm|md|lg)-(offset-){0,1}[0-9]+(.*)$" }, icon: { valid: null, invalid: null, validating: null, feedback: "form-control-feedback" }, row: { selector: ".form-group", valid: "has-success", invalid: "has-error", feedback: "has-feedback" } }, c), FormValidation.Base.apply(this, [b, c, d]) }, FormValidation.Framework.Bootstrap.prototype = a.extend({}, FormValidation.Base.prototype, { _fixIcon: function(a, b) { var c = this._namespace,
                d = a.attr("type"),
                e = a.attr("data-" + c + "-field"),
                f = this.options.fields[e].row || this.options.row.selector,
                g = a.closest(f); if ("checkbox" === d || "radio" === d) { var h = a.parent();
                h.hasClass(d) ? b.insertAfter(h) : h.parent().hasClass(d) && b.insertAfter(h.parent()) } 0 === g.find("label").length && b.addClass("fv-icon-no-label"), 0 !== g.find(".input-group").length && b.addClass("fv-bootstrap-icon-input-group").insertAfter(g.find(".input-group").eq(0)) }, _createTooltip: function(a, b, c) { var d = this._namespace,
                e = a.data(d + ".icon"); if (e) switch (c) {
                case "popover":
                    e.css({ cursor: "pointer", "pointer-events": "auto" }).popover("destroy").popover({ container: "body", content: b, html: !0, placement: "auto top", trigger: "hover click" }); break;
                case "tooltip":
                default:
                    e.css({ cursor: "pointer", "pointer-events": "auto" }).tooltip("destroy").tooltip({ container: "body", html: !0, placement: "auto top", title: b }) } }, _destroyTooltip: function(a, b) { var c = this._namespace,
                d = a.data(c + ".icon"); if (d) switch (b) {
                case "popover":
                    d.css({ cursor: "", "pointer-events": "none" }).popover("destroy"); break;
                case "tooltip":
                default:
                    d.css({ cursor: "", "pointer-events": "none" }).tooltip("destroy") } }, _hideTooltip: function(a, b) { var c = this._namespace,
                d = a.data(c + ".icon"); if (d) switch (b) {
                case "popover":
                    d.popover("hide"); break;
                case "tooltip":
                default:
                    d.tooltip("hide") } }, _showTooltip: function(a, b) { var c = this._namespace,
                d = a.data(c + ".icon"); if (d) switch (b) {
                case "popover":
                    d.popover("show"); break;
                case "tooltip":
                default:
                    d.tooltip("show") } } }), a.fn.bootstrapValidator = function(b) { var c = arguments; return this.each(function() { var d = a(this),
                e = d.data("formValidation") || d.data("bootstrapValidator"),
                f = "object" == typeof b && b;
            e || (e = new FormValidation.Framework.Bootstrap(this, a.extend({}, { events: { formInit: "init.form.bv", formPreValidate: "prevalidate.form.bv", formError: "error.form.bv", formSuccess: "success.form.bv", fieldAdded: "added.field.bv", fieldRemoved: "removed.field.bv", fieldInit: "init.field.bv", fieldError: "error.field.bv", fieldSuccess: "success.field.bv", fieldStatus: "status.field.bv", localeChanged: "changed.locale.bv", validatorError: "error.validator.bv", validatorSuccess: "success.validator.bv" } }, f), "bv"), d.addClass("fv-form-bootstrap").data("formValidation", e).data("bootstrapValidator", e)), "string" == typeof b && e[b].apply(e, Array.prototype.slice.call(c, 1)) }) }, a.fn.bootstrapValidator.Constructor = FormValidation.Framework.Bootstrap }(jQuery), ! function(a, b) { "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipe = b() }(this, function() {
    "use strict";
    var a = function(a, b, c, d) {
        var e = { features: null, bind: function(a, b, c, d) { var e = (d ? "remove" : "add") + "EventListener";
                b = b.split(" "); for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1) }, isArray: function(a) { return a instanceof Array }, createEl: function(a, b) { var c = document.createElement(b || "div"); return a && (c.className = a), c }, getScrollY: function() { var a = window.pageYOffset; return void 0 !== a ? a : document.documentElement.scrollTop }, unbind: function(a, b, c) { e.bind(a, b, c, !0) }, removeClass: function(a, b) { var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
                a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "") }, addClass: function(a, b) { e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b) }, hasClass: function(a, b) { return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className) }, getChildByClass: function(a, b) { for (var c = a.firstChild; c;) { if (e.hasClass(c, b)) return c;
                    c = c.nextSibling } }, arraySearch: function(a, b, c) { for (var d = a.length; d--;)
                    if (a[d][c] === b) return d; return -1 }, extend: function(a, b, c) { for (var d in b)
                    if (b.hasOwnProperty(d)) { if (c && a.hasOwnProperty(d)) continue;
                        a[d] = b[d] } }, easing: { sine: { out: function(a) { return Math.sin(a * (Math.PI / 2)) }, inOut: function(a) { return -(Math.cos(Math.PI * a) - 1) / 2 } }, cubic: { out: function(a) { return --a * a * a + 1 } } }, detectFeatures: function() { if (e.features) return e.features; var a = e.createEl(),
                    b = a.style,
                    c = "",
                    d = {}; if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !d.pointerEvent) { var f = navigator.userAgent; if (/iP(hone|od)/.test(navigator.platform)) { var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && 8 > g && (d.isOldIOSPhone = !0)) } var h = f.match(/Android\s([0-9\.]*)/),
                        i = h ? h[1] : 0;
                    i = parseFloat(i), i >= 1 && (4.4 > i && (d.isOldAndroid = !0), d.androidVersion = i), d.isMobileOpera = /opera mini|opera mobi/i.test(f) } for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; 4 > n; n++) { c = m[n]; for (var o = 0; 3 > o; o++) j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), !d[j] && k in b && (d[j] = k);
                    c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"])) } if (!d.raf) { var p = 0;
                    d.raf = function(a) { var b = (new Date).getTime(),
                            c = Math.max(0, 16 - (b - p)),
                            d = window.setTimeout(function() { a(b + c) }, c); return p = b + c, d }, d.caf = function(a) { clearTimeout(a) } } return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, e.features = d, d } };
        e.detectFeatures(), e.features.oldIE && (e.bind = function(a, b, c, d) { b = b.split(" "); for (var e, f = (d ? "detach" : "attach") + "Event", g = function() { c.handleEvent.call(c) }, h = 0; h < b.length; h++)
                if (e = b[h])
                    if ("object" == typeof c && c.handleEvent) { if (d) { if (!c["oldIE" + e]) return !1 } else c["oldIE" + e] = g;
                        a[f]("on" + e, c["oldIE" + e]) } else a[f]("on" + e, c) });
        var f = this,
            g = 25,
            h = 3,
            i = { allowPanToNext: !0, spacing: .12, bgOpacity: 1, mouseUsed: !1, loop: !0, pinchToClose: !0, closeOnScroll: !0, closeOnVerticalDrag: !0, verticalDragRange: .75, hideAnimationDuration: 333, showAnimationDuration: 333, showHideOpacity: !1, focus: !0, escKey: !0, arrowKeys: !0, mainScrollEndFriction: .35, panEndFriction: .35, isClickableElement: function(a) { return "A" === a.tagName }, getDoubleTapZoom: function(a, b) { return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.33 }, maxSpreadZoom: 1.33, modal: !0, scaleMode: "fit" };
        e.extend(i, d);
        var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la = function() { return { x: 0, y: 0 } },
            ma = la(),
            na = la(),
            oa = la(),
            pa = {},
            qa = 0,
            ra = {},
            sa = la(),
            ta = 0,
            ua = !0,
            va = [],
            wa = {},
            xa = !1,
            ya = function(a, b) { e.extend(f, b.publicMethods), va.push(a) },
            za = function(a) { var b = _b(); return a > b - 1 ? a - b : 0 > a ? b + a : a },
            Aa = {},
            Ba = function(a, b) { return Aa[a] || (Aa[a] = []), Aa[a].push(b) },
            Ca = function(a) { var b = Aa[a]; if (b) { var c = Array.prototype.slice.call(arguments);
                    c.shift(); for (var d = 0; d < b.length; d++) b[d].apply(f, c) } },
            Da = function() { return (new Date).getTime() },
            Ea = function(a) { ia = a, f.bg.style.opacity = a * i.bgOpacity },
            Fa = function(a, b, c, d, e) {
                (!xa || e && e !== f.currItem) && (d /= e ? e.fitRatio : f.currItem.fitRatio), a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")" },
            Ga = function(a) { da && (a && (s > f.currItem.fitRatio ? xa || (lc(f.currItem, !1, !0), xa = !0) : xa && (lc(f.currItem), xa = !1)), Fa(da, oa.x, oa.y, s)) },
            Ha = function(a) { a.container && Fa(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a) },
            Ia = function(a, b) { b[E] = u + a + "px, 0px" + v },
            Ja = function(a, b) { if (!i.loop && b) { var c = m + (sa.x * qa - a) / sa.x,
                        d = Math.round(a - sb.x);
                    (0 > c && d > 0 || c >= _b() - 1 && 0 > d) && (a = sb.x + d * i.mainScrollEndFriction) } sb.x = a, Ia(a, n) },
            Ka = function(a, b) { var c = tb[a] - ra[a]; return na[a] + ma[a] + c - c * (b / t) },
            La = function(a, b) { a.x = b.x, a.y = b.y, b.id && (a.id = b.id) },
            Ma = function(a) { a.x = Math.round(a.x), a.y = Math.round(a.y) },
            Na = null,
            Oa = function() { Na && (e.unbind(document, "mousemove", Oa), e.addClass(a, "pswp--has_mouse"), i.mouseUsed = !0, Ca("mouseUsed")), Na = setTimeout(function() { Na = null }, 100) },
            Pa = function() { e.bind(document, "keydown", f), N.transform && e.bind(f.scrollWrap, "click", f), i.mouseUsed || e.bind(document, "mousemove", Oa), e.bind(window, "resize scroll", f), Ca("bindEvents") },
            Qa = function() { e.unbind(window, "resize", f), e.unbind(window, "scroll", r.scroll), e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Oa), N.transform && e.unbind(f.scrollWrap, "click", f), U && e.unbind(window, p, f), Ca("unbindEvents") },
            Ra = function(a, b) { var c = hc(f.currItem, pa, a); return b && (ca = c), c },
            Sa = function(a) { return a || (a = f.currItem), a.initialZoomLevel },
            Ta = function(a) { return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1 },
            Ua = function(a, b, c, d) { return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], !0) : (c[a] = Ka(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] && (c[a] = b.max[a], !0)) },
            Va = function() { if (E) { var b = N.perspective && !G; return u = "translate" + (b ? "3d(" : "("), void(v = N.perspective ? ", 0px)" : ")") } E = "left", e.addClass(a, "pswp--ie"), Ia = function(a, b) { b.left = a + "px" }, Ha = function(a) { var b = a.fitRatio > 1 ? 1 : a.fitRatio,
                        c = a.container.style,
                        d = b * a.w,
                        e = b * a.h;
                    c.width = d + "px", c.height = e + "px", c.left = a.initialPosition.x + "px", c.top = a.initialPosition.y + "px" }, Ga = function() { if (da) { var a = da,
                            b = f.currItem,
                            c = b.fitRatio > 1 ? 1 : b.fitRatio,
                            d = c * b.w,
                            e = c * b.h;
                        a.width = d + "px", a.height = e + "px", a.left = oa.x + "px", a.top = oa.y + "px" } } },
            Wa = function(a) { var b = "";
                i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, f[b]())) },
            Xa = function(a) { a && (X || W || ea || S) && (a.preventDefault(), a.stopPropagation()) },
            Ya = function() { f.setScrollOffset(0, e.getScrollY()) },
            Za = {},
            $a = 0,
            _a = function(a) { Za[a] && (Za[a].raf && I(Za[a].raf), $a--, delete Za[a]) },
            ab = function(a) { Za[a] && _a(a), Za[a] || ($a++, Za[a] = {}) },
            bb = function() { for (var a in Za) Za.hasOwnProperty(a) && _a(a) },
            cb = function(a, b, c, d, e, f, g) { var h, i = Da();
                ab(a); var j = function() { if (Za[a]) { if (h = Da() - i, h >= d) return _a(a), f(c), void(g && g());
                        f((c - b) * e(h / d) + b), Za[a].raf = H(j) } };
                j() },
            db = { shout: Ca, listen: Ba, viewportSize: pa, options: i, isMainScrollAnimating: function() { return ea }, getZoomLevel: function() { return s }, getCurrentIndex: function() { return m }, isDragging: function() { return U }, isZooming: function() { return _ }, setScrollOffset: function(a, b) { ra.x = a, M = ra.y = b, Ca("updateScrollOffset", ra) }, applyZoomPan: function(a, b, c, d) { oa.x = b, oa.y = c, s = a, Ga(d) }, init: function() { if (!j && !k) { var c;
                        f.framework = e, f.template = a, f.bg = e.getChildByClass(a, "pswp__bg"), J = a.className, j = !0, N = e.detectFeatures(), H = N.raf, I = N.caf, E = N.transform, L = N.oldIE, f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), n = f.container.style, f.itemHolders = y = [{ el: f.container.children[0], wrap: 0, index: -1 }, { el: f.container.children[1], wrap: 0, index: -1 }, { el: f.container.children[2], wrap: 0, index: -1 }], y[0].el.style.display = y[2].el.style.display = "none", Va(), r = { resize: f.updateSize, scroll: Ya, keydown: Wa, click: Xa }; var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera; for (N.animationName && N.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0; c < va.length; c++) f["init" + va[c]](); if (b) { var g = f.ui = new b(f, e);
                            g.init() } Ca("firstUpdate"), m = m || i.index || 0, (isNaN(m) || 0 > m || m >= _b()) && (m = 0), f.currItem = $b(m), (N.isOldIOSPhone || N.isOldAndroid) && (ua = !1), a.setAttribute("aria-hidden", "false"), i.modal && (ua ? a.style.position = "fixed" : (a.style.position = "absolute", a.style.top = e.getScrollY() + "px")), void 0 === M && (Ca("initialLayout"), M = K = e.getScrollY()); var l = "pswp--open "; for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), l += G ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", l += N.svg ? " pswp--svg" : "", e.addClass(a, l), f.updateSize(), o = -1, ta = null, c = 0; h > c; c++) Ia((c + o) * sa.x, y[c].el.style);
                        L || e.bind(f.scrollWrap, q, f), Ba("initialZoomInEnd", function() { f.setContent(y[0], m - 1), f.setContent(y[2], m + 1), y[0].el.style.display = y[2].el.style.display = "block", i.focus && a.focus(), Pa() }), f.setContent(y[1], m), f.updateCurrItem(), Ca("afterInit"), ua || (w = setInterval(function() { $a || U || _ || s !== f.currItem.initialZoomLevel || f.updateSize() }, 1e3)), e.addClass(a, "pswp--visible") } }, close: function() { j && (j = !1, k = !0, Ca("close"), Qa(), bc(f.currItem, null, !0, f.destroy)) }, destroy: function() { Ca("destroy"), Wb && clearTimeout(Wb), a.setAttribute("aria-hidden", "true"), a.className = J, w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), yb(), bb(), Aa = null }, panTo: function(a, b, c) { c || (a > ca.min.x ? a = ca.min.x : a < ca.max.x && (a = ca.max.x), b > ca.min.y ? b = ca.min.y : b < ca.max.y && (b = ca.max.y)), oa.x = a, oa.y = b, Ga() }, handleEvent: function(a) { a = a || window.event, r[a.type] && r[a.type](a) }, goTo: function(a) { a = za(a); var b = a - m;
                    ta = b, m = a, f.currItem = $b(m), qa -= b, Ja(sa.x * qa), bb(), ea = !1, f.updateCurrItem() }, next: function() { f.goTo(m + 1) }, prev: function() { f.goTo(m - 1) }, updateCurrZoomItem: function(a) { if (a && Ca("beforeChange", 0), y[1].el.children.length) { var b = y[1].el.children[0];
                        da = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null } else da = null;
                    ca = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, oa.x = ca.center.x, oa.y = ca.center.y, a && Ca("afterChange") }, invalidateCurrItems: function() { x = !0; for (var a = 0; h > a; a++) y[a].item && (y[a].item.needsUpdate = !0) }, updateCurrItem: function(a) { if (0 !== ta) { var b, c = Math.abs(ta); if (!(a && 2 > c)) { f.currItem = $b(m), xa = !1, Ca("beforeChange", ta), c >= h && (o += ta + (ta > 0 ? -h : h), c = h); for (var d = 0; c > d; d++) ta > 0 ? (b = y.shift(), y[h - 1] = b, o++, Ia((o + 2) * sa.x, b.el.style), f.setContent(b, m - c + d + 1 + 1)) : (b = y.pop(), y.unshift(b), o--, Ia(o * sa.x, b.el.style), f.setContent(b, m + c - d - 1 - 1)); if (da && 1 === Math.abs(ta)) { var e = $b(z);
                                e.initialZoomLevel !== s && (hc(e, pa), lc(e), Ha(e)) } ta = 0, f.updateCurrZoomItem(), z = m, Ca("afterChange") } } }, updateSize: function(b) { if (!ua && i.modal) { var c = e.getScrollY(); if (M !== c && (a.style.top = c + "px", M = c), !b && wa.x === window.innerWidth && wa.y === window.innerHeight) return;
                        wa.x = window.innerWidth, wa.y = window.innerHeight, a.style.height = wa.y + "px" } if (pa.x = f.scrollWrap.clientWidth, pa.y = f.scrollWrap.clientHeight, Ya(), sa.x = pa.x + Math.round(pa.x * i.spacing), sa.y = pa.y, Ja(sa.x * qa), Ca("beforeResize"), void 0 !== o) { for (var d, g, j, k = 0; h > k; k++) d = y[k], Ia((k + o) * sa.x, d.el.style), j = m + k - 1, i.loop && _b() > 2 && (j = za(j)), g = $b(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : -1 === d.index && j >= 0 && f.setContent(d, j), g && g.container && (hc(g, pa), lc(g), Ha(g));
                        x = !1 } t = s = f.currItem.initialZoomLevel, ca = f.currItem.bounds, ca && (oa.x = ca.center.x, oa.y = ca.center.y, Ga(!0)), Ca("resize") }, zoomTo: function(a, b, c, d, f) { b && (t = s, tb.x = Math.abs(b.x) - oa.x, tb.y = Math.abs(b.y) - oa.y, La(na, oa)); var g = Ra(a, !1),
                        h = {};
                    Ua("x", g, h, a), Ua("y", g, h, a); var i = s,
                        j = { x: oa.x, y: oa.y };
                    Ma(h); var k = function(b) { 1 === b ? (s = a, oa.x = h.x, oa.y = h.y) : (s = (a - i) * b + i, oa.x = (h.x - j.x) * b + j.x, oa.y = (h.y - j.y) * b + j.y), f && f(b), Ga(1 === b) };
                    c ? cb("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1) } },
            eb = 30,
            fb = 10,
            gb = {},
            hb = {},
            ib = {},
            jb = {},
            kb = {},
            lb = [],
            mb = {},
            nb = [],
            ob = {},
            pb = 0,
            qb = la(),
            rb = 0,
            sb = la(),
            tb = la(),
            ub = la(),
            vb = function(a, b) { return a.x === b.x && a.y === b.y },
            wb = function(a, b) { return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g },
            xb = function(a, b) { return ob.x = Math.abs(a.x - b.x), ob.y = Math.abs(a.y - b.y), Math.sqrt(ob.x * ob.x + ob.y * ob.y) },
            yb = function() { Y && (I(Y), Y = null) },
            zb = function() { U && (Y = H(zb), Pb()) },
            Ab = function() { return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel) },
            Bb = function(a, b) { return !(!a || a === document) && (!(a.getAttribute("class") && a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (b(a) ? a : Bb(a.parentNode, b))) },
            Cb = {},
            Db = function(a, b) { return Cb.prevent = !Bb(a.target, i.isClickableElement), Ca("preventDragEvent", a, b, Cb), Cb.prevent },
            Eb = function(a, b) { return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b },
            Fb = function(a, b, c) { c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y) },
            Gb = function(a, b, c) { if (a - P > 50) { var d = nb.length > 2 ? nb.shift() : {};
                    d.x = b, d.y = c, nb.push(d), P = a } },
            Hb = function() { var a = oa.y - f.currItem.initialPosition.y; return 1 - Math.abs(a / (pa.y / 2)) },
            Ib = {},
            Jb = {},
            Kb = [],
            Lb = function(a) { for (; Kb.length > 0;) Kb.pop(); return F ? (ka = 0, lb.forEach(function(a) { 0 === ka ? Kb[0] = a : 1 === ka && (Kb[1] = a), ka++ })) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Kb[0] = Eb(a.touches[0], Ib), a.touches.length > 1 && (Kb[1] = Eb(a.touches[1], Jb))) : (Ib.x = a.pageX, Ib.y = a.pageY, Ib.id = "", Kb[0] = Ib), Kb },
            Mb = function(a, b) { var c, d, e, g, h = 0,
                    j = oa[a] + b[a],
                    k = b[a] > 0,
                    l = sb.x + b.x,
                    m = sb.x - mb.x; return c = j > ca.min[a] || j < ca.max[a] ? i.panEndFriction : 1, j = oa[a] + b[a] * c, !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (da ? "h" !== fa || "x" !== a || W || (k ? (j > ca.min[a] && (c = i.panEndFriction, h = ca.min[a] - j, d = ca.min[a] - na[a]), (0 >= d || 0 > m) && _b() > 1 ? (g = l, 0 > m && l > mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j)) : (j < ca.max[a] && (c = i.panEndFriction, h = j - ca.max[a], d = na[a] - ca.max[a]), (0 >= d || m > 0) && _b() > 1 ? (g = l, m > 0 && l < mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j))) : g = l, "x" !== a) ? void(ea || Z || s > f.currItem.fitRatio && (oa[a] += b[a] * c)) : (void 0 !== g && (Ja(g, !0), Z = g !== mb.x), ca.min.x !== ca.max.x && (void 0 !== e ? oa.x = e : Z || (oa.x += b.x * c)), void 0 !== g) },
            Nb = function(a) { if (!("mousedown" === a.type && a.button > 0)) { if (Zb) return void a.preventDefault(); if (!T || "mousedown" !== a.type) { if (Db(a, !0) && a.preventDefault(), Ca("pointerDown"), F) { var b = e.arraySearch(lb, a.pointerId, "id");
                            0 > b && (b = lb.length), lb[b] = { x: a.pageX, y: a.pageY, id: a.pointerId } } var c = Lb(a),
                            d = c.length;
                        $ = null, bb(), U && 1 !== d || (U = ga = !0, e.bind(window, p, f), R = ja = ha = S = Z = X = V = W = !1, fa = null, Ca("firstTouchStart", c), La(na, oa), ma.x = ma.y = 0, La(jb, c[0]), La(kb, jb), mb.x = sa.x * qa, nb = [{ x: jb.x, y: jb.y }], P = O = Da(), Ra(s, !0), yb(), zb()), !_ && d > 1 && !ea && !Z && (t = s, W = !1, _ = V = !0, ma.y = ma.x = 0, La(na, oa), La(gb, c[0]), La(hb, c[1]), Fb(gb, hb, ub), tb.x = Math.abs(ub.x) - oa.x, tb.y = Math.abs(ub.y) - oa.y, aa = ba = xb(gb, hb)) } } },
            Ob = function(a) { if (a.preventDefault(), F) { var b = e.arraySearch(lb, a.pointerId, "id"); if (b > -1) { var c = lb[b];
                        c.x = a.pageX, c.y = a.pageY } } if (U) { var d = Lb(a); if (fa || X || _) $ = d;
                    else if (sb.x !== sa.x * qa) fa = "h";
                    else { var f = Math.abs(d[0].x - jb.x) - Math.abs(d[0].y - jb.y);
                        Math.abs(f) >= fb && (fa = f > 0 ? "h" : "v", $ = d) } } },
            Pb = function() { if ($) { var a = $.length; if (0 !== a)
                        if (La(gb, $[0]), ib.x = gb.x - jb.x, ib.y = gb.y - jb.y, _ && a > 1) { if (jb.x = gb.x, jb.y = gb.y, !ib.x && !ib.y && vb($[1], hb)) return;
                            La(hb, $[1]), W || (W = !0, Ca("zoomGestureStarted")); var b = xb(gb, hb),
                                c = Ub(b);
                            c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ja = !0); var d = 1,
                                e = Sa(),
                                g = Ta(); if (e > c)
                                if (i.pinchToClose && !ja && t <= f.currItem.initialZoomLevel) { var h = e - c,
                                        j = 1 - h / (e / 1.2);
                                    Ea(j), Ca("onPinchClose", j), ha = !0 } else d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3);
                            else c > g && (d = (c - g) / (6 * e), d > 1 && (d = 1), c = g + d * e);
                            0 > d && (d = 0), aa = b, Fb(gb, hb, qb), ma.x += qb.x - ub.x, ma.y += qb.y - ub.y, La(ub, qb), oa.x = Ka("x", c), oa.y = Ka("y", c), R = c > s, s = c, Ga() } else { if (!fa) return; if (ga && (ga = !1, Math.abs(ib.x) >= fb && (ib.x -= $[0].x - kb.x), Math.abs(ib.y) >= fb && (ib.y -= $[0].y - kb.y)), jb.x = gb.x, jb.y = gb.y, 0 === ib.x && 0 === ib.y) return; if ("v" === fa && i.closeOnVerticalDrag && !Ab()) { ma.y += ib.y, oa.y += ib.y; var k = Hb(); return S = !0, Ca("onVerticalDrag", k), Ea(k), void Ga() } Gb(Da(), gb.x, gb.y), X = !0, ca = f.currItem.bounds; var l = Mb("x", ib);
                            l || (Mb("y", ib), Ma(oa), Ga()) } } },
            Qb = function(a) { if (N.isOldAndroid) { if (T && "mouseup" === a.type) return;
                    a.type.indexOf("touch") > -1 && (clearTimeout(T), T = setTimeout(function() { T = 0 }, 600)) } Ca("pointerUp"), Db(a, !1) && a.preventDefault(); var b; if (F) { var c = e.arraySearch(lb, a.pointerId, "id"); if (c > -1)
                        if (b = lb.splice(c, 1)[0], navigator.pointerEnabled) b.type = a.pointerType || "mouse";
                        else { var d = { 4: "mouse", 2: "touch", 3: "pen" };
                            b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse") } } var g, h = Lb(a),
                    j = h.length; if ("mouseup" === a.type && (j = 0), 2 === j) return $ = null, !0;
                1 === j && La(kb, h[0]), 0 !== j || fa || ea || (b || ("mouseup" === a.type ? b = { x: a.pageX, y: a.pageY, type: "mouse" } : a.changedTouches && a.changedTouches[0] && (b = { x: a.changedTouches[0].pageX, y: a.changedTouches[0].pageY, type: "touch" })), Ca("touchRelease", a, b)); var k = -1; if (0 === j && (U = !1, e.unbind(window, p, f), yb(), _ ? k = 0 : -1 !== rb && (k = Da() - rb)), rb = 1 === j ? Da() : -1, g = -1 !== k && 150 > k ? "zoom" : "swipe", _ && 2 > j && (_ = !1, 1 === j && (g = "zoomPointerUp"), Ca("zoomGestureEnded")), $ = null, X || W || ea || S)
                    if (bb(), Q || (Q = Rb()), Q.calculateSwipeSpeed("x"), S) { var l = Hb(); if (l < i.verticalDragRange) f.close();
                        else { var m = oa.y,
                                n = ia;
                            cb("verticalDrag", 0, 1, 300, e.easing.cubic.out, function(a) { oa.y = (f.currItem.initialPosition.y - m) * a + m, Ea((1 - n) * a + n), Ga() }), Ca("onVerticalDrag", 1) } } else { if ((Z || ea) && 0 === j) { var o = Tb(g, Q); if (o) return;
                            g = "zoomPointerUp" } if (!ea) return "swipe" !== g ? void Vb() : void(!Z && s > f.currItem.fitRatio && Sb(Q)) } },
            Rb = function() { var a, b, c = { lastFlickOffset: {}, lastFlickDist: {}, lastFlickSpeed: {}, slowDownRatio: {}, slowDownRatioReverse: {}, speedDecelerationRatio: {}, speedDecelerationRatioAbs: {}, distanceOffset: {}, backAnimDestination: {}, backAnimStarted: {}, calculateSwipeSpeed: function(d) { nb.length > 1 ? (a = Da() - P + 50, b = nb[nb.length - 2][d]) : (a = Da() - O, b = kb[d]), c.lastFlickOffset[d] = jb[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), c.lastFlickDist[d] > 20 ? c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a : c.lastFlickSpeed[d] = 0, Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1 }, calculateOverBoundsAnimOffset: function(a, b) { c.backAnimStarted[a] || (oa[a] > ca.min[a] ? c.backAnimDestination[a] = ca.min[a] : oa[a] < ca.max[a] && (c.backAnimDestination[a] = ca.max[a]), void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, cb("bounceZoomPan" + a, oa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function(b) { oa[a] = b, Ga() })))) }, calculateAnimOffset: function(a) { c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, oa[a] += c.distanceOffset[a]) }, panAnimLoop: function() { return Za.zoomPan && (Za.zoomPan.raf = H(c.panAnimLoop), c.now = Da(), c.timeDiff = c.now - c.lastNow, c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Ga(), c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05) ? (oa.x = Math.round(oa.x), oa.y = Math.round(oa.y), Ga(), void _a("zoomPan")) : void 0 } }; return c },
            Sb = function(a) { return a.calculateSwipeSpeed("y"), ca = f.currItem.bounds, a.backAnimDestination = {}, a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (ab("zoomPan"), a.lastNow = Da(), void a.panAnimLoop()) },
            Tb = function(a, b) { var c;
                ea || (pb = m); var d; if ("swipe" === a) { var g = jb.x - kb.x,
                        h = b.lastFlickDist.x < 10;
                    g > eb && (h || b.lastFlickOffset.x > 20) ? d = -1 : -eb > g && (h || b.lastFlickOffset.x < -20) && (d = 1) } var j;
                d && (m += d, 0 > m ? (m = i.loop ? _b() - 1 : 0, j = !0) : m >= _b() && (m = i.loop ? 0 : _b() - 1, j = !0), (!j || i.loop) && (ta += d, qa -= d, c = !0)); var k, l = sa.x * qa,
                    n = Math.abs(l - sb.x); return c || l > sb.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, pb === m && (c = !1), ea = !0, Ca("mainScrollAnimStart"), cb("mainScroll", sb.x, l, k, e.easing.cubic.out, Ja, function() { bb(), ea = !1, pb = -1, (c || pb !== m) && f.updateCurrItem(), Ca("mainScrollAnimComplete") }), c && f.updateCurrItem(!0), c },
            Ub = function(a) { return 1 / ba * a * t },
            Vb = function() { var a = s,
                    b = Sa(),
                    c = Ta();
                b > s ? a = b : s > c && (a = c); var d, g = 1,
                    h = ia; return ha && !R && !ja && b > s ? (f.close(), !0) : (ha && (d = function(a) { Ea((g - h) * a + h) }), f.zoomTo(a, 0, 200, e.easing.cubic.out, d), !0) };
        ya("Gestures", { publicMethods: { initGestures: function() { var a = function(a, b, c, d, e) { A = a + b, B = a + c, C = a + d, D = e ? a + e : "" };
                    F = N.pointerEvent, F && N.touch && (N.touch = !1), F ? navigator.pointerEnabled ? a("pointer", "down", "move", "up", "cancel") : a("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (a("touch", "start", "move", "end", "cancel"), G = !0) : a("mouse", "down", "move", "up"), p = B + " " + C + " " + D, q = A, F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), f.likelyTouchDevice = G, r[A] = Nb, r[B] = Ob, r[C] = Qb, D && (r[D] = r[C]), N.touch && (q += " mousedown", p += " mousemove mouseup", r.mousedown = r[A], r.mousemove = r[B], r.mouseup = r[C]), G || (i.allowPanToNext = !1) } } });
        var Wb, Xb, Yb, Zb, $b, _b, ac, bc = function(b, c, d, g) { Wb && clearTimeout(Wb), Zb = !0, Yb = !0; var h;
                b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m); var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
                    k = function() { _a("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Ea(1), c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Ca("initialZoom" + (d ? "OutEnd" : "InEnd"))), g && g(), Zb = !1 }; if (!j || !h || void 0 === h.x) return Ca("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), a.style.opacity = d ? 0 : 1, Ea(1), void(j ? setTimeout(function() { k() }, j) : k()); var n = function() { var c = l,
                        g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
                    b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, oa.x = h.x, oa.y = h.y - K, f[g ? "template" : "bg"].style.opacity = .001, Ga()), ab("initialZoom"), d && !c && e.removeClass(a, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity") : setTimeout(function() { e.addClass(a, "pswp--animate_opacity") }, 30)), Wb = setTimeout(function() { if (Ca("initialZoom" + (d ? "Out" : "In")), d) { var f = h.w / b.w,
                                i = { x: oa.x, y: oa.y },
                                l = s,
                                m = ia,
                                n = function(b) { 1 === b ? (s = f, oa.x = h.x, oa.y = h.y - M) : (s = (f - l) * b + l, oa.x = (h.x - i.x) * b + i.x, oa.y = (h.y - M - i.y) * b + i.y), Ga(), g ? a.style.opacity = 1 - b : Ea(m - b * m) };
                            c ? cb("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Wb = setTimeout(k, j + 20)) } else s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), Ea(1), g ? a.style.opacity = 1 : Ea(1), Wb = setTimeout(k, j + 20) }, d ? 25 : 90) };
                n() },
            cc = {},
            dc = [],
            ec = { index: 0, errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>', forceProgressiveLoading: !1, preload: [1, 1], getNumItemsFn: function() { return Xb.length } },
            fc = function() { return { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } } },
            gc = function(a, b, c) {
                var d = a.bounds;
                d.center.x = Math.round((cc.x - b) / 2), d.center.y = Math.round((cc.y - c) / 2) + a.vGap.top, d.max.x = b > cc.x ? Math.round(cc.x - b) : d.center.x, d.max.y = c > cc.y ? Math.round(cc.y - c) + a.vGap.top : d.center.y, d.min.x = b > cc.x ? 0 : d.center.x,
                    d.min.y = c > cc.y ? a.vGap.top : d.center.y
            },
            hc = function(a, b, c) { if (a.src && !a.loadError) { var d = !c; if (d && (a.vGap || (a.vGap = { top: 0, bottom: 0 }), Ca("parseVerticalMargin", a)), cc.x = b.x, cc.y = b.y - a.vGap.top - a.vGap.bottom, d) { var e = cc.x / a.w,
                            f = cc.y / a.h;
                        a.fitRatio = f > e ? e : f; var g = i.scaleMode; "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, a.bounds || (a.bounds = fc()) } if (!c) return; return gc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds } return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = fc(), a.initialPosition = a.bounds.center, a.bounds },
            ic = function(a, b, c, d, e, g) { b.loadError || d && (b.imageAppended = !0, lc(b, d, b === f.currItem && xa), c.appendChild(d), g && setTimeout(function() { b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null) }, 500)) },
            jc = function(a) { a.loading = !0, a.loaded = !1; var b = a.img = e.createEl("pswp__img", "img"),
                    c = function() { a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, b.onload = b.onerror = null, b = null }; return b.onload = c, b.onerror = function() { a.loadError = !0, c() }, b.src = a.src, b },
            kc = function(a, b) { return a.src && a.loadError && a.container ? (b && (a.container.innerHTML = ""), a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0) : void 0 },
            lc = function(a, b, c) { if (a.src) { b || (b = a.container.lastChild); var d = c ? a.w : Math.round(a.w * a.fitRatio),
                        e = c ? a.h : Math.round(a.h * a.fitRatio);
                    a.placeholder && !a.loaded && (a.placeholder.style.width = d + "px", a.placeholder.style.height = e + "px"), b.style.width = d + "px", b.style.height = e + "px" } },
            mc = function() { if (dc.length) { for (var a, b = 0; b < dc.length; b++) a = dc[b], a.holder.index === a.index && ic(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
                    dc = [] } };
        ya("Controller", { publicMethods: { lazyLoadItem: function(a) { a = za(a); var b = $b(a);
                    b && (!b.loaded && !b.loading || x) && (Ca("gettingData", a, b), b.src && jc(b)) }, initController: function() { e.extend(i, ec, !0), f.items = Xb = c, $b = f.getItemAt, _b = i.getNumItemsFn, ac = i.loop, _b() < 3 && (i.loop = !1), Ba("beforeChange", function(a) { var b, c = i.preload,
                            d = null === a || a >= 0,
                            e = Math.min(c[0], _b()),
                            g = Math.min(c[1], _b()); for (b = 1;
                            (d ? g : e) >= b; b++) f.lazyLoadItem(m + b); for (b = 1;
                            (d ? e : g) >= b; b++) f.lazyLoadItem(m - b) }), Ba("initialLayout", function() { f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m) }), Ba("mainScrollAnimComplete", mc), Ba("initialZoomInEnd", mc), Ba("destroy", function() { for (var a, b = 0; b < Xb.length; b++) a = Xb[b], a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
                        dc = null }) }, getItemAt: function(a) { return a >= 0 && void 0 !== Xb[a] && Xb[a] }, allowProgressiveImg: function() { return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200 }, setContent: function(a, b) { i.loop && (b = za(b)); var c = f.getItemAt(a.index);
                    c && (c.container = null); var d, g = f.getItemAt(b); if (!g) return void(a.el.innerHTML = "");
                    Ca("gettingData", b, g), a.index = b, a.item = g; var h = g.container = e.createEl("pswp__zoom-wrap"); if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), kc(g), hc(g, pa), !g.src || g.loadError || g.loaded) g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), d.style.opacity = 1, d.src = g.src, lc(g, d), ic(b, g, h, d, !0));
                    else { if (g.loadComplete = function(c) { if (j) { if (a && a.index === b) { if (kc(c, !0)) return c.loadComplete = c.img = null, hc(c, pa), Ha(c), void(a.index === m && f.updateCurrZoomItem());
                                        c.imageAppended ? !Zb && c.placeholder && (c.placeholder.style.display = "none", c.placeholder = null) : N.transform && (ea || Zb) ? dc.push({ item: c, baseDiv: h, img: c.img, index: b, holder: a, clearPlaceholder: !0 }) : ic(b, c, h, c.img, ea || Zb, !0) } c.loadComplete = null, c.img = null, Ca("imageLoadComplete", b, c) } }, e.features.transform) { var k = "pswp__img pswp__img--placeholder";
                            k += g.msrc ? "" : " pswp__img--placeholder--blank"; var l = e.createEl(k, g.msrc ? "img" : "");
                            g.msrc && (l.src = g.msrc), lc(g, l), h.appendChild(l), g.placeholder = l } g.loading || jc(g), f.allowProgressiveImg() && (!Yb && N.transform ? dc.push({ item: g, baseDiv: h, img: g.img, index: b, holder: a }) : ic(b, g, h, g.img, !0, !0)) } Yb || b !== m ? Ha(g) : (da = h.style, bc(g, d || g.img)), a.el.innerHTML = "", a.el.appendChild(h) }, cleanSlide: function(a) { a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1 } } });
        var nc, oc = {},
            pc = function(a, b, c) { var d = document.createEvent("CustomEvent"),
                    e = { origEvent: a, target: a.target, releasePoint: b, pointerType: c || "touch" };
                d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d) };
        ya("Tap", { publicMethods: { initTap: function() { Ba("firstTouchStart", f.onTapStart), Ba("touchRelease", f.onTapRelease), Ba("destroy", function() { oc = {}, nc = null }) }, onTapStart: function(a) { a.length > 1 && (clearTimeout(nc), nc = null) }, onTapRelease: function(a, b) { if (b && !X && !V && !$a) { var c = b; if (nc && (clearTimeout(nc), nc = null, wb(c, oc))) return void Ca("doubleTap", c); if ("mouse" === b.type) return void pc(a, b, "mouse"); var d = a.target.tagName.toUpperCase(); if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap")) return void pc(a, b);
                        La(oc, c), nc = setTimeout(function() { pc(a, b), nc = null }, 300) } } } });
        var qc;
        ya("DesktopZoom", { publicMethods: { initDesktopZoom: function() { L || (G ? Ba("mouseUsed", function() { f.setupDesktopZoom() }) : f.setupDesktopZoom(!0)) }, setupDesktopZoom: function(b) { qc = {}; var c = "wheel mousewheel DOMMouseScroll";
                    Ba("bindEvents", function() { e.bind(a, c, f.handleMouseWheel) }), Ba("unbindEvents", function() { qc && e.unbind(a, c, f.handleMouseWheel) }), f.mouseZoomedIn = !1; var d, g = function() { f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), f.mouseZoomedIn = !1), 1 > s ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), h() },
                        h = function() { d && (e.removeClass(a, "pswp--dragging"), d = !1) };
                    Ba("resize", g), Ba("afterChange", g), Ba("pointerDown", function() { f.mouseZoomedIn && (d = !0, e.addClass(a, "pswp--dragging")) }), Ba("pointerUp", h), b || g() }, handleMouseWheel: function(a) { if (s <= f.currItem.fitRatio) return i.modal && (!i.closeOnScroll || $a || U ? a.preventDefault() : E && Math.abs(a.deltaY) > 2 && (l = !0, f.close())), !0; if (a.stopPropagation(), qc.x = 0, "deltaX" in a) 1 === a.deltaMode ? (qc.x = 18 * a.deltaX, qc.y = 18 * a.deltaY) : (qc.x = a.deltaX, qc.y = a.deltaY);
                    else if ("wheelDelta" in a) a.wheelDeltaX && (qc.x = -.16 * a.wheelDeltaX), a.wheelDeltaY ? qc.y = -.16 * a.wheelDeltaY : qc.y = -.16 * a.wheelDelta;
                    else { if (!("detail" in a)) return;
                        qc.y = a.detail } Ra(s, !0); var b = oa.x - qc.x,
                        c = oa.y - qc.y;
                    (i.modal || b <= ca.min.x && b >= ca.max.x && c <= ca.min.y && c >= ca.max.y) && a.preventDefault(), f.panTo(b, c) }, toggleDesktopZoom: function(b) { b = b || { x: pa.x / 2 + ra.x, y: pa.y / 2 + ra.y }; var c = i.getDoubleTapZoom(!0, f.currItem),
                        d = s === c;
                    f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in") } } });
        var rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc = { history: !0, galleryUID: 1 },
            Ec = function() { return Bc.hash.substring(1) },
            Fc = function() { rc && clearTimeout(rc), tc && clearTimeout(tc) },
            Gc = function() { var a = Ec(),
                    b = {}; if (a.length < 5) return b; var c, d = a.split("&"); for (c = 0; c < d.length; c++)
                    if (d[c]) { var e = d[c].split("=");
                        e.length < 2 || (b[e[0]] = e[1]) } if (i.galleryPIDs) { var f = b.pid; for (b.pid = 0, c = 0; c < Xb.length; c++)
                        if (Xb[c].pid === f) { b.pid = c; break } } else b.pid = parseInt(b.pid, 10) - 1; return b.pid < 0 && (b.pid = 0), b },
            Hc = function() { if (tc && clearTimeout(tc), $a || U) return void(tc = setTimeout(Hc, 500));
                uc ? clearTimeout(sc) : uc = !0; var a = m + 1,
                    b = $b(m);
                b.hasOwnProperty("pid") && (a = b.pid); var c = xc + "&gid=" + i.galleryUID + "&pid=" + a;
                yc || -1 === Bc.hash.indexOf(c) && (Ac = !0); var d = Bc.href.split("#")[0] + "#" + c;
                Cc ? "#" + c !== window.location.hash && history[yc ? "replaceState" : "pushState"]("", document.title, d) : yc ? Bc.replace(d) : Bc.hash = c, yc = !0, sc = setTimeout(function() { uc = !1 }, 60) };
        ya("History", { publicMethods: { initHistory: function() { if (e.extend(i, Dc, !0), i.history) { Bc = window.location, Ac = !1, zc = !1, yc = !1, xc = Ec(), Cc = "pushState" in history, xc.indexOf("gid=") > -1 && (xc = xc.split("&gid=")[0], xc = xc.split("?gid=")[0]), Ba("afterChange", f.updateURL), Ba("unbindEvents", function() { e.unbind(window, "hashchange", f.onHashChange) }); var a = function() { wc = !0, zc || (Ac ? history.back() : xc ? Bc.hash = xc : Cc ? history.pushState("", document.title, Bc.pathname + Bc.search) : Bc.hash = ""), Fc() };
                        Ba("unbindEvents", function() { l && a() }), Ba("destroy", function() { wc || a() }), Ba("firstUpdate", function() { m = Gc().pid }); var b = xc.indexOf("pid=");
                        b > -1 && (xc = xc.substring(0, b), "&" === xc.slice(-1) && (xc = xc.slice(0, -1))), setTimeout(function() { j && e.bind(window, "hashchange", f.onHashChange) }, 40) } }, onHashChange: function() { return Ec() === xc ? (zc = !0, void f.close()) : void(uc || (vc = !0, f.goTo(Gc().pid), vc = !1)) }, updateURL: function() { Fc(), vc || (yc ? rc = setTimeout(Hc, 800) : Hc()) } } }), e.extend(f, db)
    };
    return a
}), ! function(a, b) { "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b() }(this, function() { "use strict"; var a = function(a, b) { var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this,
            w = !1,
            x = !0,
            y = !0,
            z = { barsSize: { top: 44, bottom: "auto" }, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"], timeToIdle: 4e3, timeToIdleOutside: 1e3, loadingIndicatorDelay: 1e3, addCaptionHTMLFn: function(a, b) { return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1) }, closeEl: !0, captionEl: !0, fullscreenEl: !0, zoomEl: !0, shareEl: !0, counterEl: !0, arrowEl: !0, preloaderEl: !0, tapToClose: !1, tapToToggleControls: !0, clickToCloseNonZoomable: !0, shareButtons: [{ id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" }, { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" }, { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" }, { id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0 }], getImageURLForShare: function() { return a.currItem.src || "" }, getPageURLForShare: function() { return window.location.href }, getTextForShare: function() { return a.currItem.title || "" }, indexIndicatorSep: " / ", fitControlsWidth: 1200 },
            A = function(a) { if (r) return !0;
                a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K(); for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0); if (d) { a.stopPropagation && a.stopPropagation(), r = !0; var h = b.features.isOldAndroid ? 600 : 30;
                    s = setTimeout(function() { r = !1 }, h) } },
            B = function() { return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth },
            C = function(a, c, d) { b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c) },
            D = function() { var a = 1 === q.getNumItemsFn();
                a !== p && (C(d, "ui--one-slide", a), p = a) },
            E = function() { C(i, "share-modal--hidden", y) },
            F = function() { return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function() { y && E() }, 300)) : (E(), setTimeout(function() { y || b.addClass(i, "pswp__share-modal--fade-in") }, 30)), y || H(), !1 },
            G = function(b) { b = b || window.event; var c = b.target || b.srcElement; return a.shout("shareLinkClick", b, c), !!c.href && (!!c.hasAttribute("download") || (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1)) },
            H = function() { for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
                i.children[0].innerHTML = f, i.children[0].onclick = G },
            I = function(a) { for (var c = 0; c < q.closeElClasses.length; c++)
                    if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0 },
            J = 0,
            K = function() { clearTimeout(u), J = 0, k && v.setIdle(!1) },
            L = function(a) { a = a ? a : window.event; var b = a.relatedTarget || a.toElement;
                b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function() { v.setIdle(!0) }, q.timeToIdleOutside)) },
            M = function() { q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs")) },
            N = function() { q.preloaderEl && (O(!0), l("beforeChange", function() { clearTimeout(o), o = setTimeout(function() { a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0) }, q.loadingIndicatorDelay) }), l("imageLoadComplete", function(b, c) { a.currItem === c && O(!0) })) },
            O = function(a) { n !== a && (C(m, "preloader--active", !a), n = a) },
            P = function(a) { var c = a.vGap; if (B()) { var g = q.barsSize; if (q.captionEl && "auto" === g.bottom)
                        if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) { var h = f.clientHeight;
                            c.bottom = parseInt(h, 10) || 44 } else c.bottom = g.top;
                    else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
                    c.top = g.top } else c.top = c.bottom = 0 },
            Q = function() { q.timeToIdle && l("mouseUsed", function() { b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function() { J++, 2 === J && v.setIdle(!0) }, q.timeToIdle / 2) }) },
            R = function() { l("onVerticalDrag", function(a) { x && .95 > a ? v.hideControls() : !x && a >= .95 && v.showControls() }); var a;
                l("onPinchClose", function(b) { x && .9 > b ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls() }), l("zoomGestureEnded", function() { a = !1, a && !x && v.showControls() }) },
            S = [{ name: "caption", option: "captionEl", onInit: function(a) { e = a } }, { name: "share-modal", option: "shareEl", onInit: function(a) { i = a }, onTap: function() { F() } }, { name: "button--share", option: "shareEl", onInit: function(a) { h = a }, onTap: function() { F() } }, { name: "button--zoom", option: "zoomEl", onTap: a.toggleDesktopZoom }, { name: "counter", option: "counterEl", onInit: function(a) { g = a } }, { name: "button--close", option: "closeEl", onTap: a.close }, { name: "button--arrow--left", option: "arrowEl", onTap: a.prev }, { name: "button--arrow--right", option: "arrowEl", onTap: a.next }, { name: "button--fs", option: "fullscreenEl", onTap: function() { c.isFullscreen() ? c.exit() : c.enter() } }, { name: "preloader", option: "preloaderEl", onInit: function(a) { m = a } }],
            T = function() { var a, c, e, f = function(d) { if (d)
                        for (var f = d.length, g = 0; f > g; g++) { a = d[g], c = a.className; for (var h = 0; h < S.length; h++) e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled")) } };
                f(d.children); var g = b.getChildByClass(d, "pswp__top-bar");
                g && f(g.children) };
        v.init = function() { b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function(b) { var c = a.currItem.initialZoomLevel;
                a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333) }), l("preventDragEvent", function(a, b, c) { var d = a.target || a.srcElement;
                d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1) }), l("bindEvents", function() { b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver) }), l("unbindEvents", function() { y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null) }), l("destroy", function() { q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1) }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function() { q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden") }), l("initialZoomOut", function() { b.addClass(d, "pswp__ui--hidden") }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N() }, v.setIdle = function(a) { k = a, C(d, "ui--idle", a) }, v.update = function() { x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D() }, v.updateFullscreen = function(d) { d && setTimeout(function() { a.setScrollOffset(0, b.getScrollY()) }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs") }, v.updateIndexIndicator = function() { q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn()) }, v.onGlobalTap = function(c) { c = c || window.event; var d = c.target || c.srcElement; if (!r)
                if (c.detail && "mouse" === c.detail.pointerType) { if (I(d)) return void a.close();
                    b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint)) } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void a.close() }, v.onMouseOver = function(a) { a = a || window.event; var b = a.target || a.srcElement;
            C(d, "ui--over-close", I(b)) }, v.hideControls = function() { b.addClass(d, "pswp__ui--hidden"), x = !1 }, v.showControls = function() { x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden") }, v.supportsFullscreen = function() { var a = document; return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen) }, v.getFullscreenAPI = function() { var b, c = document.documentElement,
                d = "fullscreenchange"; return c.requestFullscreen ? b = { enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: d } : c.mozRequestFullScreen ? b = { enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + d } : c.webkitRequestFullscreen ? b = { enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + d } : c.msRequestFullscreen && (b = { enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange" }), b && (b.enter = function() { return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT) }, b.exit = function() { return q.closeOnScroll = j, document[this.exitK]() }, b.isFullscreen = function() { return document[this.elementK] }), b } }; return a }),
function(a, b, c) {
    function d(b, c) { this.bodyOverflowX, this.callbacks = { hide: [], show: [] }, this.checkInterval = null, this.Content, this.$el = a(b), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = a.extend({}, i, c), this.mouseIsOverProxy = !1, this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this._init() }

    function e(b, c) { var d = !0; return a.each(b, function(a, e) { if ("undefined" == typeof c[a] || b[a] !== c[a]) return d = !1, !1 }), d }

    function f() { return !k && j }

    function g() { var a = c.body || c.documentElement,
            b = a.style,
            d = "transition"; if ("string" == typeof b[d]) return !0;
        v = ["Moz", "Webkit", "Khtml", "O", "ms"], d = d.charAt(0).toUpperCase() + d.substr(1); for (var e = 0; e < v.length; e++)
            if ("string" == typeof b[v[e] + d]) return !0; return !1 }
    var h = "tooltipster",
        i = { animation: "fade", arrow: !0, arrowColor: "", autoClose: !0, content: null, contentAsHTML: !1, contentCloning: !0, debug: !0, delay: 200, minWidth: 0, maxWidth: null, functionInit: function(a, b) {}, functionBefore: function(a, b) { b() }, functionReady: function(a, b) {}, functionAfter: function(a) {}, hideOnClick: !1, icon: "(?)", iconCloning: !0, iconDesktop: !1, iconTouch: !1, iconTheme: "tooltipster-icon", interactive: !1, interactiveTolerance: 350, multiple: !1, offsetX: 0, offsetY: 0, onlyOne: !1, position: "top", positionTracker: !1, positionTrackerCallback: function(a) { "hover" == this.option("trigger") && this.option("autoClose") && this.hide() }, restoration: "current", speed: 350, timer: 0, theme: "tooltipster-default", touchDevices: !0, trigger: "hover", updateAnimation: !0 };
    d.prototype = {
        _init: function() { var b = this; if (c.querySelector) { var d = null;
                void 0 === b.$el.data("tooltipster-initialTitle") && (d = b.$el.attr("title"), void 0 === d && (d = null), b.$el.data("tooltipster-initialTitle", d)), null !== b.options.content ? b._content_set(b.options.content) : b._content_set(d); var e = b.options.functionInit.call(b.$el, b.$el, b.Content); "undefined" != typeof e && b._content_set(e), b.$el.removeAttr("title").addClass("tooltipstered"), !j && b.options.iconDesktop || j && b.options.iconTouch ? ("string" == typeof b.options.icon ? (b.$elProxy = a('<span class="' + b.options.iconTheme + '"></span>'), b.$elProxy.text(b.options.icon)) : b.options.iconCloning ? b.$elProxy = b.options.icon.clone(!0) : b.$elProxy = b.options.icon, b.$elProxy.insertAfter(b.$el)) : b.$elProxy = b.$el, "hover" == b.options.trigger ? (b.$elProxy.on("mouseenter." + b.namespace, function() { f() && !b.options.touchDevices || (b.mouseIsOverProxy = !0, b._show()) }).on("mouseleave." + b.namespace, function() { f() && !b.options.touchDevices || (b.mouseIsOverProxy = !1) }), j && b.options.touchDevices && b.$elProxy.on("touchstart." + b.namespace, function() { b._showNow() })) : "click" == b.options.trigger && b.$elProxy.on("click." + b.namespace, function() { f() && !b.options.touchDevices || b._show() }) } },
        _show: function() { var a = this; "shown" != a.Status && "appearing" != a.Status && (a.options.delay ? a.timerShow = setTimeout(function() {
                ("click" == a.options.trigger || "hover" == a.options.trigger && a.mouseIsOverProxy) && a._showNow() }, a.options.delay) : a._showNow()) },
        _showNow: function(c) { var d = this;
            d.options.functionBefore.call(d.$el, d.$el, function() { if (d.enabled && null !== d.Content) { c && d.callbacks.show.push(c), d.callbacks.hide = [], clearTimeout(d.timerShow), d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null, d.options.onlyOne && a(".tooltipstered").not(d.$el).each(function(b, c) { var d = a(c),
                            e = d.data("tooltipster-ns");
                        a.each(e, function(a, b) { var c = d.data(b),
                                e = c.status(),
                                f = c.option("autoClose"); "hidden" !== e && "disappearing" !== e && f && c.hide() }) }); var e = function() { d.Status = "shown", a.each(d.callbacks.show, function(a, b) { b.call(d.$el) }), d.callbacks.show = [] }; if ("hidden" !== d.Status) { var f = 0; "disappearing" === d.Status ? (d.Status = "appearing", g() ? (d.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + d.options.animation + "-show"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.stop().fadeIn(e)) : "shown" === d.Status && e() } else { d.Status = "appearing"; var f = d.options.speed;
                        d.bodyOverflowX = a("body").css("overflow-x"), a("body").css("overflow-x", "hidden"); var h = "tooltipster-" + d.options.animation,
                            i = "-webkit-transition-duration: " + d.options.speed + "ms; -webkit-animation-duration: " + d.options.speed + "ms; -moz-transition-duration: " + d.options.speed + "ms; -moz-animation-duration: " + d.options.speed + "ms; -o-transition-duration: " + d.options.speed + "ms; -o-animation-duration: " + d.options.speed + "ms; -ms-transition-duration: " + d.options.speed + "ms; -ms-animation-duration: " + d.options.speed + "ms; transition-duration: " + d.options.speed + "ms; animation-duration: " + d.options.speed + "ms;",
                            k = d.options.minWidth ? "min-width:" + Math.round(d.options.minWidth) + "px;" : "",
                            l = d.options.maxWidth ? "max-width:" + Math.round(d.options.maxWidth) + "px;" : "",
                            m = d.options.interactive ? "pointer-events: auto;" : ""; if (d.$tooltip = a('<div class="tooltipster-base ' + d.options.theme + '" style="' + k + " " + l + " " + m + " " + i + '"><div class="tooltipster-content"></div></div>'), g() && d.$tooltip.addClass(h), d._content_insert(), d.$tooltip.appendTo("body"), d.reposition(), d.options.functionReady.call(d.$el, d.$el, d.$tooltip), g() ? (d.$tooltip.addClass(h + "-show"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(e)) : d.$tooltip.css("display", "none").fadeIn(d.options.speed, e), d._interval_set(), a(b).on("scroll." + d.namespace + " resize." + d.namespace, function() { d.reposition() }), d.options.autoClose)
                            if (a("body").off("." + d.namespace), "hover" == d.options.trigger) { if (j && setTimeout(function() { a("body").on("touchstart." + d.namespace, function() { d.hide() }) }, 0), d.options.interactive) { j && d.$tooltip.on("touchstart." + d.namespace, function(a) { a.stopPropagation() }); var n = null;
                                    d.$elProxy.add(d.$tooltip).on("mouseleave." + d.namespace + "-autoClose", function() { clearTimeout(n), n = setTimeout(function() { d.hide() }, d.options.interactiveTolerance) }).on("mouseenter." + d.namespace + "-autoClose", function() { clearTimeout(n) }) } else d.$elProxy.on("mouseleave." + d.namespace + "-autoClose", function() { d.hide() });
                                d.options.hideOnClick && d.$elProxy.on("click." + d.namespace + "-autoClose", function() { d.hide() }) } else "click" == d.options.trigger && (setTimeout(function() { a("body").on("click." + d.namespace + " touchstart." + d.namespace, function() { d.hide() }) }, 0), d.options.interactive && d.$tooltip.on("click." + d.namespace + " touchstart." + d.namespace, function(a) { a.stopPropagation() })) } d.options.timer > 0 && (d.timerHide = setTimeout(function() { d.timerHide = null, d.hide() }, d.options.timer + f)) } }) },
        _interval_set: function() { var b = this;
            b.checkInterval = setInterval(function() { if (0 === a("body").find(b.$el).length || 0 === a("body").find(b.$elProxy).length || "hidden" == b.Status || 0 === a("body").find(b.$tooltip).length) "shown" != b.Status && "appearing" != b.Status || b.hide(), b._interval_cancel();
                else if (b.options.positionTracker) { var c = b._repositionInfo(b.$elProxy),
                        d = !1;
                    e(c.dimension, b.elProxyPosition.dimension) && ("fixed" === b.$elProxy.css("position") ? e(c.position, b.elProxyPosition.position) && (d = !0) : e(c.offset, b.elProxyPosition.offset) && (d = !0)), d || (b.reposition(), b.options.positionTrackerCallback.call(b, b.$el)) } }, 200) },
        _interval_cancel: function() { clearInterval(this.checkInterval), this.checkInterval = null },
        _content_set: function(a) { "object" == typeof a && null !== a && this.options.contentCloning && (a = a.clone(!0)), this.Content = a },
        _content_insert: function() { var a = this,
                b = this.$tooltip.find(".tooltipster-content"); "string" != typeof a.Content || a.options.contentAsHTML ? b.empty().append(a.Content) : b.text(a.Content) },
        _update: function(a) { var b = this;
            b._content_set(a), null !== b.Content ? "hidden" !== b.Status && (b._content_insert(), b.reposition(), b.options.updateAnimation && (g() ? (b.$tooltip.css({ width: "", "-webkit-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms", "-moz-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms", "-o-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms", "-ms-transition": "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms", transition: "all " + b.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms" }).addClass("tooltipster-content-changing"), setTimeout(function() { "hidden" != b.Status && (b.$tooltip.removeClass("tooltipster-content-changing"), setTimeout(function() { "hidden" !== b.Status && b.$tooltip.css({ "-webkit-transition": b.options.speed + "ms", "-moz-transition": b.options.speed + "ms", "-o-transition": b.options.speed + "ms", "-ms-transition": b.options.speed + "ms", transition: b.options.speed + "ms" }) }, b.options.speed)) }, b.options.speed)) : b.$tooltip.fadeTo(b.options.speed, .5, function() { "hidden" != b.Status && b.$tooltip.fadeTo(b.options.speed, 1) }))) : b.hide() },
        _repositionInfo: function(a) { return { dimension: { height: a.outerHeight(!1), width: a.outerWidth(!1) }, offset: a.offset(), position: { left: parseInt(a.css("left")), top: parseInt(a.css("top")) } } },
        hide: function(c) { var d = this;
            c && d.callbacks.hide.push(c), d.callbacks.show = [], clearTimeout(d.timerShow), d.timerShow = null, clearTimeout(d.timerHide), d.timerHide = null; var e = function() { a.each(d.callbacks.hide, function(a, b) { b.call(d.$el) }), d.callbacks.hide = [] }; if ("shown" == d.Status || "appearing" == d.Status) { d.Status = "disappearing"; var f = function() { d.Status = "hidden", "object" == typeof d.Content && null !== d.Content && d.Content.detach(), d.$tooltip.remove(), d.$tooltip = null, a(b).off("." + d.namespace), a("body").off("." + d.namespace).css("overflow-x", d.bodyOverflowX), a("body").off("." + d.namespace), d.$elProxy.off("." + d.namespace + "-autoClose"), d.options.functionAfter.call(d.$el, d.$el), e() };
                g() ? (d.$tooltip.clearQueue().removeClass("tooltipster-" + d.options.animation + "-show").addClass("tooltipster-dying"), d.options.speed > 0 && d.$tooltip.delay(d.options.speed), d.$tooltip.queue(f)) : d.$tooltip.stop().fadeOut(d.options.speed, f) } else "hidden" == d.Status && e(); return d },
        show: function(a) { return this._showNow(a), this },
        update: function(a) { return this.content(a) },
        content: function(a) { return "undefined" == typeof a ? this.Content : (this._update(a), this) },
        reposition: function() {
            function c() { var c = a(b).scrollLeft();
                C - c < 0 && (f = C - c, C = c), C + i - c > g && (f = C - (g + c - i), C = g + c - i) }

            function d(c, d) { h.offset.top - a(b).scrollTop() - j - F - 12 < 0 && d.indexOf("top") > -1 && (H = c), h.offset.top + h.dimension.height + j + 12 + F > a(b).scrollTop() + a(b).height() && d.indexOf("bottom") > -1 && (H = c, E = h.offset.top - j - F - 12) }
            var e = this;
            if (0 !== a("body").find(e.$tooltip).length) {
                e.$tooltip.css("width", ""), e.elProxyPosition = e._repositionInfo(e.$elProxy);
                var f = null,
                    g = a(b).width(),
                    h = e.elProxyPosition,
                    i = e.$tooltip.outerWidth(!1),
                    j = (e.$tooltip.innerWidth() + 1, e.$tooltip.outerHeight(!1));
                if (e.$elProxy.is("area")) { var k = e.$elProxy.attr("shape"),
                        l = e.$elProxy.parent().attr("name"),
                        m = a('img[usemap="#' + l + '"]'),
                        n = m.offset().left,
                        o = m.offset().top,
                        p = void 0 !== e.$elProxy.attr("coords") ? e.$elProxy.attr("coords").split(",") : void 0; if ("circle" == k) { var q = parseInt(p[0]),
                            r = parseInt(p[1]),
                            s = parseInt(p[2]);
                        h.dimension.height = 2 * s, h.dimension.width = 2 * s, h.offset.top = o + r - s, h.offset.left = n + q - s } else if ("rect" == k) { var q = parseInt(p[0]),
                            r = parseInt(p[1]),
                            t = parseInt(p[2]),
                            u = parseInt(p[3]);
                        h.dimension.height = u - r, h.dimension.width = t - q, h.offset.top = o + r, h.offset.left = n + q } else if ("poly" == k) { for (var v = 0, w = 0, x = 0, y = 0, z = "even", A = 0; A < p.length; A++) { var B = parseInt(p[A]); "even" == z ? (B > x && (x = B, 0 === A && (v = x)), B < v && (v = B), z = "odd") : (B > y && (y = B, 1 == A && (w = y)), B < w && (w = B), z = "even") } h.dimension.height = y - w, h.dimension.width = x - v, h.offset.top = o + w, h.offset.left = n + v } else h.dimension.height = m.outerHeight(!1), h.dimension.width = m.outerWidth(!1), h.offset.top = o, h.offset.left = n }
                var C = 0,
                    D = 0,
                    E = 0,
                    F = parseInt(e.options.offsetY),
                    G = parseInt(e.options.offsetX),
                    H = e.options.position;
                if ("top" == H) { var I = h.offset.left + i - (h.offset.left + h.dimension.width);
                    C = h.offset.left + G - I / 2, E = h.offset.top - j - F - 12, c(), d("bottom", "top") }
                if ("top-left" == H && (C = h.offset.left + G, E = h.offset.top - j - F - 12, c(), d("bottom-left", "top-left")), "top-right" == H && (C = h.offset.left + h.dimension.width + G - i, E = h.offset.top - j - F - 12, c(), d("bottom-right", "top-right")), "bottom" == H) { var I = h.offset.left + i - (h.offset.left + h.dimension.width);
                    C = h.offset.left - I / 2 + G, E = h.offset.top + h.dimension.height + F + 12, c(), d("top", "bottom") }
                if ("bottom-left" == H && (C = h.offset.left + G, E = h.offset.top + h.dimension.height + F + 12, c(), d("top-left", "bottom-left")), "bottom-right" == H && (C = h.offset.left + h.dimension.width + G - i, E = h.offset.top + h.dimension.height + F + 12, c(), d("top-right", "bottom-right")), "left" == H) { C = h.offset.left - G - i - 12, D = h.offset.left + G + h.dimension.width + 12; var J = h.offset.top + j - (h.offset.top + h.dimension.height); if (E = h.offset.top - J / 2 - F, C < 0 && D + i > g) { var K = 2 * parseFloat(e.$tooltip.css("border-width")),
                            L = i + C - K;
                        e.$tooltip.css("width", L + "px"), j = e.$tooltip.outerHeight(!1), C = h.offset.left - G - L - 12 - K, J = h.offset.top + j - (h.offset.top + h.dimension.height), E = h.offset.top - J / 2 - F } else C < 0 && (C = h.offset.left + G + h.dimension.width + 12, f = "left") }
                if ("right" == H) { C = h.offset.left + G + h.dimension.width + 12, D = h.offset.left - G - i - 12; var J = h.offset.top + j - (h.offset.top + h.dimension.height); if (E = h.offset.top - J / 2 - F, C + i > g && D < 0) { var K = 2 * parseFloat(e.$tooltip.css("border-width")),
                            L = g - C - K;
                        e.$tooltip.css("width", L + "px"), j = e.$tooltip.outerHeight(!1), J = h.offset.top + j - (h.offset.top + h.dimension.height), E = h.offset.top - J / 2 - F } else C + i > g && (C = h.offset.left - G - i - 12, f = "right") }
                if (e.options.arrow) {
                    var M = "tooltipster-arrow-" + H;
                    if (e.options.arrowColor.length < 1) var N = e.$tooltip.css("background-color");
                    else var N = e.options.arrowColor;
                    if (f ? "left" == f ? (M = "tooltipster-arrow-right", f = "") : "right" == f ? (M = "tooltipster-arrow-left", f = "") : f = "left:" + Math.round(f) + "px;" : f = "", "top" == H || "top-left" == H || "top-right" == H) var O = parseFloat(e.$tooltip.css("border-bottom-width")),
                        P = e.$tooltip.css("border-bottom-color");
                    else if ("bottom" == H || "bottom-left" == H || "bottom-right" == H) var O = parseFloat(e.$tooltip.css("border-top-width")),
                        P = e.$tooltip.css("border-top-color");
                    else if ("left" == H) var O = parseFloat(e.$tooltip.css("border-right-width")),
                        P = e.$tooltip.css("border-right-color");
                    else if ("right" == H) var O = parseFloat(e.$tooltip.css("border-left-width")),
                        P = e.$tooltip.css("border-left-color");
                    else var O = parseFloat(e.$tooltip.css("border-bottom-width")),
                        P = e.$tooltip.css("border-bottom-color");
                    O > 1 && O++;
                    var Q = "";
                    if (0 !== O) { var R = "",
                            S = "border-color: " + P + ";";
                        M.indexOf("bottom") !== -1 ? R = "margin-top: -" + Math.round(O) + "px;" : M.indexOf("top") !== -1 ? R = "margin-bottom: -" + Math.round(O) + "px;" : M.indexOf("left") !== -1 ? R = "margin-right: -" + Math.round(O) + "px;" : M.indexOf("right") !== -1 && (R = "margin-left: -" + Math.round(O) + "px;"), Q = '<span class="tooltipster-arrow-border" style="' + R + " " + S + ';"></span>' } e.$tooltip.find(".tooltipster-arrow").remove();
                    var T = '<div class="' + M + ' tooltipster-arrow" style="' + f + '">' + Q + '<span style="border-color:' + N + ';"></span></div>';
                    e.$tooltip.append(T)
                }
                e.$tooltip.css({ top: Math.round(E) + "px", left: Math.round(C) + "px" })
            }
            return e
        },
        enable: function() { return this.enabled = !0, this },
        disable: function() { return this.hide(), this.enabled = !1, this },
        destroy: function() { var b = this;
            b.hide(), b.$el[0] !== b.$elProxy[0] && b.$elProxy.remove(), b.$el.removeData(b.namespace).off("." + b.namespace); var c = b.$el.data("tooltipster-ns"); if (1 === c.length) { var d = null; "previous" === b.options.restoration ? d = b.$el.data("tooltipster-initialTitle") : "current" === b.options.restoration && (d = "string" == typeof b.Content ? b.Content : a("<div></div>").append(b.Content).html()), d && b.$el.attr("title", d), b.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle") } else c = a.grep(c, function(a, c) { return a !== b.namespace }), b.$el.data("tooltipster-ns", c); return b },
        elementIcon: function() { return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0 },
        elementTooltip: function() { return this.$tooltip ? this.$tooltip[0] : void 0 },
        option: function(a, b) { return "undefined" == typeof b ? this.options[a] : (this.options[a] = b, this) },
        status: function() { return this.Status }
    }, a.fn[h] = function() { var b = arguments; if (0 === this.length) { if ("string" == typeof b[0]) { var c = !0; switch (b[0]) {
                    case "setDefaults":
                        a.extend(i, b[1]); break;
                    default:
                        c = !1 } return !!c || this } return this } if ("string" == typeof b[0]) { var e = "#*$~&"; return this.each(function() { var c = a(this).data("tooltipster-ns"),
                    d = c ? a(this).data(c[0]) : null; if (!d) throw new Error("You called Tooltipster's \"" + b[0] + '" method on an uninitialized element'); if ("function" != typeof d[b[0]]) throw new Error('Unknown method .tooltipster("' + b[0] + '")'); var f = d[b[0]](b[1], b[2]); if (f !== d) return e = f, !1 }), "#*$~&" !== e ? e : this } var f = [],
            g = b[0] && "undefined" != typeof b[0].multiple,
            h = g && b[0].multiple || !g && i.multiple,
            j = b[0] && "undefined" != typeof b[0].debug,
            k = j && b[0].debug || !j && i.debug; return this.each(function() { var c = !1,
                e = a(this).data("tooltipster-ns"),
                g = null;
            e ? h ? c = !0 : k && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : c = !0, c && (g = new d(this, b[0]), e || (e = []), e.push(g.namespace), a(this).data("tooltipster-ns", e), a(this).data(g.namespace, g)), f.push(g) }), h ? f : this };
    var j = !!("ontouchstart" in b),
        k = !1;
    a("body").one("mousemove", function() { k = !0 })
}(jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) { this._handlers[c] = a.proxy(this[c], this) }, this)), a.each(e.Plugins, a.proxy(function(a, b) { this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Workers, a.proxy(function(b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() } e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, { filter: ["width", "items", "settings"], run: function(a) { var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };!c && this.$stage.children().css(e), a.css = e } }, { filter: ["width", "items", "settings"], run: function(a) { var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = []; for (a.items = { merge: !1, width: b }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f } }, { filter: ["items", "settings"], run: function() { var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = ""; for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage) } }, { filter: ["width", "items", "settings"], run: function() { for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f } }, { filter: ["width", "items", "settings"], run: function() { var a = this.settings.stagePadding,
                b = this._coordinates,
                c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
            this.$stage.css(c) } }, { filter: ["width", "items", "settings"], run: function(a) { var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children(); if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css)) } }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function() { var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = []; for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center")) } }], e.prototype.initialize = function() { if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) { var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b) } this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized") }, e.prototype.setup = function() { var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) { a <= b && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }) }, e.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function(b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function() { for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) { return this[a] }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid") }, e.prototype.width = function(a) { switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, e.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, e.prototype.onThrottledResize = function() { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function() { return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))))) }, e.prototype.registerEventHandlers = function() { a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this))) }, e.prototype.onDragStart = function(b) { var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) { var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag")) }, this))) }, e.prototype.onDragMove = function(a) { var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x)) }, e.prototype.onDragEnd = function(b) { var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged")) }, e.prototype.closest = function(b, c) { var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates(); return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) { return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1 }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d }, e.prototype.animate = function(b) { var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" }) }, e.prototype.is = function(a) { return this._states.current[a] && this._states.current[a] > 0 }, e.prototype.current = function(a) { if (a === d) return this._current; if (0 === this._items.length) return d; if (a = this.normalize(a), this._current !== a) { var b = this.trigger("change", { property: { name: "position", value: a } });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, e.prototype.invalidate = function(b) { return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) { return b }) }, e.prototype.reset = function(a) { a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function(a, b) { var c = this._items.length,
            e = b ? 0 : this._clones.length; return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a }, e.prototype.relative = function(a) { return a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function(a) { var b, c, d, e = this.settings,
            f = this._coordinates.length; if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) { for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
            f = b + 1 } else f = e.center ? this._items.length - 1 : this._items.length - e.items; return a && (f -= this._clones.length / 2), Math.max(f, 0) }, e.prototype.minimum = function(a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function(a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function(a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function(b) { var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) { return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2 }; return b === d ? a.map(this._clones, function(a, b) { return f(b) }) : a.map(this._clones, function(a, c) { return a === b ? f(c) : null }) }, e.prototype.speed = function(a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function(b) { var c, e = 1,
            f = b - 1; return b === d ? a.map(this._coordinates, a.proxy(function(a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c)) }, e.prototype.duration = function(a, b, c) { return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function(a, b) { var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update() }, e.prototype.next = function(a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function(a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.onTransitionEnd = function(a) { return (a === d || (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated")) }, e.prototype.viewport = function() { var d; return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d }, e.prototype.replace = function(b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() { return 1 === this.nodeType }).each(a.proxy(function(a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function(b, c) { var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c }) }, e.prototype.remove = function(a) { a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.preloadAutoWidthImages = function(b) { b.each(a.proxy(function(b, c) { this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) { c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")) }, this)) }, e.prototype.destroy = function() { this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize)); for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel") }, e.prototype.op = function(a, b, c) { var d = this.settings.rtl; switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c } }, e.prototype.on = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function(a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function(b, c, d, f, g) { var h = { item: { count: this._items.length, index: this.current() } },
            i = a.camelCase(a.grep(["on", b, d], function(a) { return a }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c)); return this._supress[b] || (a.each(this._plugins, function(a, b) { b.onTrigger && b.onTrigger(j) }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j }, e.prototype.enter = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++ }, this)) }, e.prototype.leave = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b]-- }, this)) }, e.prototype.register = function(b) { if (b.type === e.Type.Event) { if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) { var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) { return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments) }, a.event.special[b.name].owl = !0 } } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) { return a.inArray(c, this._states.tags[b.name]) === d }, this))) }, e.prototype.suppress = function(b) { a.each(b, a.proxy(function(a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function(b) { a.each(b, a.proxy(function(a, b) { delete this._supress[b] }, this)) }, e.prototype.pointer = function(a) { var c = { x: null, y: null }; return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c }, e.prototype.isNumeric = function(a) { return !isNaN(parseFloat(a)) }, e.prototype.difference = function(a, b) { return { x: a.x - b.x, y: a.y - b.y } }, a.fn.owlCarousel = function(b) { var c = Array.prototype.slice.call(arguments, 1); return this.each(function() { var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) { f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) { a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c])) }, f)) })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c) }) }, a.fn.owlCarousel.Constructor = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function() { this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, e.prototype.refresh = function() { this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, e.prototype.destroy = function() { var a, c;
        b.clearInterval(this._interval); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) { if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) { this.load(b) }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++ }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { lazyLoad: !1 }, e.prototype.load = function(c) { var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) { var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() { f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g) }, this)), this._loaded.push(d.get(0))) }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function() { var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;
        a.each(d, function(b, c) { e.push(a(c).height()) }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass) }, e.prototype.destroy = function() { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this._core = b, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this), "resize.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault() }, this), "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" === a.property.name && this._playing && this.stop() }, this), "prepared.owl.carousel": a.proxy(function(b) { if (b.namespace) { var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content))) } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) { this.play(a) }, this)) };
    e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function(a, b) { var c = function() { return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube" }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href"); if (!g) throw new Error("Missing video URL."); if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else { if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar" } d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]) }, e.prototype.thumbnail = function(b, c) { var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e) }; return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a[0].thumbnail_large, l(f) } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a.framegrab_url, l(f) } })) }, e.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, e.prototype.play = function(b) {
        var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'),
            a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function() { var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return b && a(b).parent().hasClass("owl-video-frame") }, e.prototype.destroy = function() { var a, b;
        this._core.$element.off("click.owl.video"); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) { a.namespace && (this.swapping = "translated" == a.type) }, this), "translate.owl.carousel": a.proxy(function(a) { a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function() { if (1 === this.core.settings.items && a.support.animation && a.support.transition) { this.core.speed(0); var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f)) } }, e.prototype.clear = function(b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Animate = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": a.proxy(function(a) { a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": a.proxy(function(a, b, c) { a.namespace && this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function(a) { a.namespace && this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options) };
    e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype.play = function(a, b) { this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval()) }, e.prototype._getNextTimeout = function(d, e) { return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() { this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed) }, this), d || this._core.settings.autoplayTimeout) }, e.prototype._setAutoPlayInterval = function() { this._timeout = this._getNextTimeout() }, e.prototype.stop = function() { this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating")) }, e.prototype.pause = function() { this._core.is("rotating") && (this._paused = !0) }, e.prototype.destroy = function() { var a, b;
        this.stop(); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { "use strict"; var e = function(b) { this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b) { b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && this.draw() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) };
    e.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function() { var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) { this.prev(c.navSpeed) }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) { this.next(c.navSpeed) }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) { var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed) }, this)); for (b in this._overrides) this._core[b] = a.proxy(this[b], this) }, e.prototype.destroy = function() { var a, b, c, d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, e.prototype.update = function() { var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items; if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) { if (b >= h || 0 === b) { if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break;
                    b = 0, ++c } b += this._core.mergers(this._core.relative(a)) } }, e.prototype.draw = function() { var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active")) }, e.prototype.onTrigger = function(b) { var c = this._core.settings;
        b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) } }, e.prototype.current = function() { var b = this._core.relative(this._core.current()); return a.grep(this._pages, a.proxy(function(a, c) { return a.start <= b && a.end >= b }, this)).pop() }, e.prototype.getPosition = function(b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, e.prototype.next = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, e.prototype.prev = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, e.prototype.to = function(b, c, d) { var e;!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { "use strict"; var e = function(c) { this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function(c) { c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": a.proxy(function(b) { if (b.namespace) { var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash"); if (!c) return;
                    this._hashes[c] = b.content } }, this), "changed.owl.carousel": a.proxy(function(c) { if (c.namespace && "position" === c.property.name) { var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) { return a === d ? b : null }).join(); if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) { var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0) }, this)) };
    e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function() { var c, d;
        a(b).off("hashchange.owl.navigation"); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) { var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1); return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) { if (g[b] !== d) return e = !c || b, !1 }), e }

    function f(a) { return e(a, !0) } var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        j = { csstransforms: function() { return !!e("transform") }, csstransforms3d: function() { return !!e("perspective") }, csstransitions: function() { return !!e("transition") }, cssanimations: function() { return !!e("animation") } };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d()) }(window.Zepto || window.jQuery, window, document), ! function(a, b) { "function" == typeof define && define.amd ? define([], function() { return a.svg4everybody = b() }) : "object" == typeof module && module.exports ? module.exports = b() : a.svg4everybody = b() }(this, function() {
    function a(a, b, c) { if (c) { var d = document.createDocumentFragment(),
                e = !b.hasAttribute("viewBox") && c.getAttribute("viewBox");
            e && b.setAttribute("viewBox", e); for (var f = c.cloneNode(!0); f.childNodes.length;) d.appendChild(f.firstChild);
            a.appendChild(d) } }

    function b(b) { b.onreadystatechange = function() { if (4 === b.readyState) { var c = b._cachedDocument;
                c || (c = b._cachedDocument = document.implementation.createHTMLDocument(""), c.body.innerHTML = b.responseText, b._cachedTarget = {}), b._embeds.splice(0).map(function(d) { var e = b._cachedTarget[d.id];
                    e || (e = b._cachedTarget[d.id] = c.getElementById(d.id)), a(d.parent, d.svg, e) }) } }, b.onreadystatechange() }

    function c(c) {
        function e() { for (var c = 0; c < o.length;) { var h = o[c],
                    i = h.parentNode,
                    j = d(i); if (j) { var k = h.getAttribute("xlink:href") || h.getAttribute("href"); if (f)
                        if (!g.validate || g.validate(k, j, h)) { i.removeChild(h); var l = k.split("#"),
                                q = l.shift(),
                                r = l.join("#"); if (q.length) { var s = m[q];
                                s || (s = m[q] = new XMLHttpRequest, s.open("GET", q), s.send(), s._embeds = []), s._embeds.push({ parent: i, svg: j, id: r }), b(s) } else a(i, document.getElementById(r)) } else ++c, ++p } else ++c } n(e, o.length - p > 0 ? 67 : 500) } var f, g = Object(c),
            h = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
            i = /\bAppleWebKit\/(\d+)\b/,
            j = /\bEdge\/12\.(\d+)\b/,
            k = /\bEdge\/.(\d+)\b/,
            l = window.top !== window.self;
        f = "polyfill" in g ? g.polyfill : h.test(navigator.userAgent) || (navigator.userAgent.match(j) || [])[1] < 10547 || (navigator.userAgent.match(i) || [])[1] < 537 || k.test(navigator.userAgent) && l; var m = {},
            n = window.requestAnimationFrame || setTimeout,
            o = document.getElementsByTagName("use"),
            p = 0;
        f && e() }

    function d(a) { for (var b = a;
            "svg" !== b.nodeName.toLowerCase() && (b = b.parentNode);); return b } return c }), $(function() { svg4everybody({ polyfill: !0 }) }),
    function(a) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports && "function" == typeof require ? require("jquery") : jQuery) }(function(a) { "use strict";

        function b(c, d) { var e = a.noop,
                f = this,
                g = { ajaxSettings: {}, autoSelectFirst: !1, appendTo: document.body, serviceUrl: null, lookup: null, onSelect: null, width: "auto", minChars: 1, maxHeight: 300, deferRequestBy: 0, params: {}, formatResult: b.formatResult, formatGroup: b.formatGroup, delimiter: null, zIndex: 9999, type: "GET", noCache: !1, onSearchStart: e, onSearchComplete: e, onSearchError: e, preserveInput: !1, containerClass: "autocomplete-suggestions", tabDisabled: !1, dataType: "text", currentRequest: null, triggerSelectOnValidInput: !0, preventBadQueries: !0, lookupFilter: function(a, b, c) { return a.value.toLowerCase().indexOf(c) !== -1 }, paramName: "query", transformResult: function(b) { return "string" == typeof b ? a.parseJSON(b) : b }, showNoSuggestionNotice: !1, noSuggestionNotice: "No results", orientation: "bottom", forceFixPosition: !1 };
            f.element = c, f.el = a(c), f.suggestions = [], f.badQueries = [], f.selectedIndex = -1, f.currentValue = f.element.value, f.intervalId = 0, f.cachedResponse = {}, f.onChangeInterval = null, f.onChange = null, f.isLocal = !1, f.suggestionsContainer = null, f.noSuggestionsContainer = null, f.options = a.extend({}, g, d), f.classes = { selected: "autocomplete-selected", suggestion: "autocomplete-suggestion" }, f.hint = null, f.hintValue = "", f.selection = null, f.initialize(), f.setOptions(d) } var c = function() { return { escapeRegExChars: function(a) { return a.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&") }, createNode: function(a) { var b = document.createElement("div"); return b.className = a, b.style.position = "absolute", b.style.display = "none", b } } }(),
            d = { ESC: 27, TAB: 9, RETURN: 13, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
        b.utils = c, a.Autocomplete = b, b.formatResult = function(a, b) { if (!b) return a.value; var d = "(" + c.escapeRegExChars(b) + ")"; return a.value.replace(new RegExp(d, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>") }, b.formatGroup = function(a, b) { return '<div class="autocomplete-group"><strong>' + b + "</strong></div>" }, b.prototype = { killerFn: null, initialize: function() { var c, d = this,
                    e = "." + d.classes.suggestion,
                    f = d.classes.selected,
                    g = d.options;
                d.element.setAttribute("autocomplete", "off"), d.killerFn = function(b) { a(b.target).closest("." + d.options.containerClass).length || (d.killSuggestions(), d.disableKillerFn()) }, d.noSuggestionsContainer = a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), d.suggestionsContainer = b.utils.createNode(g.containerClass), c = a(d.suggestionsContainer), c.appendTo(g.appendTo), "auto" !== g.width && c.css("width", g.width), c.on("mouseover.autocomplete", e, function() { d.activate(a(this).data("index")) }), c.on("mouseout.autocomplete", function() { d.selectedIndex = -1, c.children("." + f).removeClass(f) }), c.on("click.autocomplete", e, function() { return d.select(a(this).data("index")), !1 }), d.fixPositionCapture = function() { d.visible && d.fixPosition() }, a(window).on("resize.autocomplete", d.fixPositionCapture), d.el.on("keydown.autocomplete", function(a) { d.onKeyPress(a) }), d.el.on("keyup.autocomplete", function(a) { d.onKeyUp(a) }), d.el.on("blur.autocomplete", function() { d.onBlur() }), d.el.on("focus.autocomplete", function() { d.onFocus() }), d.el.on("change.autocomplete", function(a) { d.onKeyUp(a) }), d.el.on("input.autocomplete", function(a) { d.onKeyUp(a) }) }, onFocus: function() { var a = this;
                a.fixPosition(), a.el.val().length >= a.options.minChars && a.onValueChange() }, onBlur: function() { this.enableKillerFn() }, abortAjax: function() { var a = this;
                a.currentRequest && (a.currentRequest.abort(), a.currentRequest = null) }, setOptions: function(b) { var c = this,
                    d = c.options;
                a.extend(d, b), c.isLocal = a.isArray(d.lookup), c.isLocal && (d.lookup = c.verifySuggestionsFormat(d.lookup)), d.orientation = c.validateOrientation(d.orientation, "bottom"), a(c.suggestionsContainer).css({ "max-height": d.maxHeight + "px", width: d.width + "px", "z-index": d.zIndex }) }, clearCache: function() { this.cachedResponse = {}, this.badQueries = [] }, clear: function() { this.clearCache(), this.currentValue = "", this.suggestions = [] }, disable: function() { var a = this;
                a.disabled = !0, clearInterval(a.onChangeInterval), a.abortAjax() }, enable: function() { this.disabled = !1 }, fixPosition: function() { var b = this,
                    c = a(b.suggestionsContainer),
                    d = c.parent().get(0); if (d === document.body || b.options.forceFixPosition) { var e = b.options.orientation,
                        f = c.outerHeight(),
                        g = b.el.outerHeight(),
                        h = b.el.offset(),
                        i = { top: h.top, left: h.left }; if ("auto" === e) { var j = a(window).height(),
                            k = a(window).scrollTop(),
                            l = -k + h.top - f,
                            m = k + j - (h.top + g + f);
                        e = Math.max(l, m) === l ? "top" : "bottom" } if ("top" === e ? i.top += -f : i.top += g, d !== document.body) { var n, o = c.css("opacity");
                        b.visible || c.css("opacity", 0).show(), n = c.offsetParent().offset(), i.top -= n.top, i.left -= n.left, b.visible || c.css("opacity", o).hide() } "auto" === b.options.width && (i.width = b.el.outerWidth() + "px"), c.css(i) } }, enableKillerFn: function() { var b = this;
                a(document).on("click.autocomplete", b.killerFn) }, disableKillerFn: function() { var b = this;
                a(document).off("click.autocomplete", b.killerFn) }, killSuggestions: function() { var a = this;
                a.stopKillSuggestions(), a.intervalId = window.setInterval(function() { a.visible && (a.options.preserveInput || a.el.val(a.currentValue), a.hide()), a.stopKillSuggestions() }, 50) }, stopKillSuggestions: function() { window.clearInterval(this.intervalId) }, isCursorAtEnd: function() { var a, b = this,
                    c = b.el.val().length,
                    d = b.element.selectionStart; return "number" == typeof d ? d === c : !document.selection || (a = document.selection.createRange(), a.moveStart("character", -c), c === a.text.length) }, onKeyPress: function(a) { var b = this; if (!b.disabled && !b.visible && a.which === d.DOWN && b.currentValue) return void b.suggest(); if (!b.disabled && b.visible) { switch (a.which) {
                        case d.ESC:
                            b.el.val(b.currentValue), b.hide(); break;
                        case d.RIGHT:
                            if (b.hint && b.options.onHint && b.isCursorAtEnd()) { b.selectHint(); break } return;
                        case d.TAB:
                            if (b.hint && b.options.onHint) return void b.selectHint(); if (b.selectedIndex === -1) return void b.hide(); if (b.select(b.selectedIndex), b.options.tabDisabled === !1) return; break;
                        case d.RETURN:
                            if (b.selectedIndex === -1) return void b.hide();
                            b.select(b.selectedIndex); break;
                        case d.UP:
                            b.moveUp(); break;
                        case d.DOWN:
                            b.moveDown(); break;
                        default:
                            return } a.stopImmediatePropagation(), a.preventDefault() } }, onKeyUp: function(a) { var b = this; if (!b.disabled) { switch (a.which) {
                        case d.UP:
                        case d.DOWN:
                            return } clearInterval(b.onChangeInterval), b.currentValue !== b.el.val() && (b.findBestHint(), b.options.deferRequestBy > 0 ? b.onChangeInterval = setInterval(function() { b.onValueChange() }, b.options.deferRequestBy) : b.onValueChange()) } }, onValueChange: function() { var b = this,
                    c = b.options,
                    d = b.el.val(),
                    e = b.getQuery(d); return b.selection && b.currentValue !== e && (b.selection = null, (c.onInvalidateSelection || a.noop).call(b.element)), clearInterval(b.onChangeInterval), b.currentValue = d, b.selectedIndex = -1, c.triggerSelectOnValidInput && b.isExactMatch(e) ? void b.select(0) : void(e.length < c.minChars ? b.hide() : b.getSuggestions(e)) }, isExactMatch: function(a) { var b = this.suggestions; return 1 === b.length && b[0].value.toLowerCase() === a.toLowerCase() }, getQuery: function(b) { var c, d = this.options.delimiter; return d ? (c = b.split(d), a.trim(c[c.length - 1])) : b }, getSuggestionsLocal: function(b) { var c, d = this,
                    e = d.options,
                    f = b.toLowerCase(),
                    g = e.lookupFilter,
                    h = parseInt(e.lookupLimit, 10); return c = { suggestions: a.grep(e.lookup, function(a) { return g(a, b, f) }) }, h && c.suggestions.length > h && (c.suggestions = c.suggestions.slice(0, h)), c }, getSuggestions: function(b) { var c, d, e, f, g = this,
                    h = g.options,
                    i = h.serviceUrl; if (h.params[h.paramName] = b, d = h.ignoreParams ? null : h.params, h.onSearchStart.call(g.element, h.params) !== !1) { if (a.isFunction(h.lookup)) return void h.lookup(b, function(a) { g.suggestions = a.suggestions, g.suggest(), h.onSearchComplete.call(g.element, b, a.suggestions) });
                    g.isLocal ? c = g.getSuggestionsLocal(b) : (a.isFunction(i) && (i = i.call(g.element, b)), e = i + "?" + a.param(d || {}), c = g.cachedResponse[e]), c && a.isArray(c.suggestions) ? (g.suggestions = c.suggestions, g.suggest(), h.onSearchComplete.call(g.element, b, c.suggestions)) : g.isBadQuery(b) ? h.onSearchComplete.call(g.element, b, []) : (g.abortAjax(), f = { url: i, data: d, type: h.type, dataType: h.dataType }, a.extend(f, h.ajaxSettings), g.currentRequest = a.ajax(f).done(function(a) { var c;
                        g.currentRequest = null, c = h.transformResult(a, b), g.processResponse(c, b, e), h.onSearchComplete.call(g.element, b, c.suggestions) }).fail(function(a, c, d) { h.onSearchError.call(g.element, b, a, c, d) })) } }, isBadQuery: function(a) { if (!this.options.preventBadQueries) return !1; for (var b = this.badQueries, c = b.length; c--;)
                    if (0 === a.indexOf(b[c])) return !0; return !1 }, hide: function() { var b = this,
                    c = a(b.suggestionsContainer);
                a.isFunction(b.options.onHide) && b.visible && b.options.onHide.call(b.element, c), b.visible = !1, b.selectedIndex = -1, clearInterval(b.onChangeInterval), a(b.suggestionsContainer).hide(), b.signalHint(null) }, suggest: function() { if (!this.suggestions.length) return void(this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide()); var b, c = this,
                    d = c.options,
                    e = d.groupBy,
                    f = d.formatResult,
                    g = c.getQuery(c.currentValue),
                    h = c.classes.suggestion,
                    i = c.classes.selected,
                    j = a(c.suggestionsContainer),
                    k = a(c.noSuggestionsContainer),
                    l = d.beforeRender,
                    m = "",
                    n = function(a, c) { var f = a.data[e]; return b === f ? "" : (b = f, d.formatGroup(a, b)) }; return d.triggerSelectOnValidInput && c.isExactMatch(g) ? void c.select(0) : (a.each(c.suggestions, function(a, b) { e && (m += n(b, g, a)), m += '<div class="' + h + '" data-index="' + a + '">' + f(b, g, a) + "</div>" }), this.adjustContainerWidth(), k.detach(), j.html(m), a.isFunction(l) && l.call(c.element, j, c.suggestions), c.fixPosition(), j.show(), d.autoSelectFirst && (c.selectedIndex = 0, j.scrollTop(0), j.children("." + h).first().addClass(i)), c.visible = !0, void c.findBestHint()) }, noSuggestions: function() { var b = this,
                    c = a(b.suggestionsContainer),
                    d = a(b.noSuggestionsContainer);
                this.adjustContainerWidth(), d.detach(), c.empty(), c.append(d), b.fixPosition(), c.show(), b.visible = !0 }, adjustContainerWidth: function() { var b, c = this,
                    d = c.options,
                    e = a(c.suggestionsContainer); "auto" === d.width ? (b = c.el.outerWidth(), e.css("width", b > 0 ? b : 300)) : "flex" === d.width && e.css("width", "") }, findBestHint: function() { var b = this,
                    c = b.el.val().toLowerCase(),
                    d = null;
                c && (a.each(b.suggestions, function(a, b) { var e = 0 === b.value.toLowerCase().indexOf(c); return e && (d = b), !e }), b.signalHint(d)) }, signalHint: function(b) { var c = "",
                    d = this;
                b && (c = d.currentValue + b.value.substr(d.currentValue.length)), d.hintValue !== c && (d.hintValue = c, d.hint = b, (this.options.onHint || a.noop)(c)) }, verifySuggestionsFormat: function(b) { return b.length && "string" == typeof b[0] ? a.map(b, function(a) { return { value: a, data: null } }) : b }, validateOrientation: function(b, c) { return b = a.trim(b || "").toLowerCase(), a.inArray(b, ["auto", "bottom", "top"]) === -1 && (b = c), b }, processResponse: function(a, b, c) { var d = this,
                    e = d.options;
                a.suggestions = d.verifySuggestionsFormat(a.suggestions), e.noCache || (d.cachedResponse[c] = a, e.preventBadQueries && !a.suggestions.length && d.badQueries.push(b)), b === d.getQuery(d.currentValue) && (d.suggestions = a.suggestions, d.suggest()) }, activate: function(b) { var c, d = this,
                    e = d.classes.selected,
                    f = a(d.suggestionsContainer),
                    g = f.find("." + d.classes.suggestion); return f.find("." + e).removeClass(e), d.selectedIndex = b, d.selectedIndex !== -1 && g.length > d.selectedIndex ? (c = g.get(d.selectedIndex), a(c).addClass(e), c) : null }, selectHint: function() { var b = this,
                    c = a.inArray(b.hint, b.suggestions);
                b.select(c) }, select: function(a) { var b = this;
                b.hide(), b.onSelect(a), b.disableKillerFn() }, moveUp: function() { var b = this; if (b.selectedIndex !== -1) return 0 === b.selectedIndex ? (a(b.suggestionsContainer).children().first().removeClass(b.classes.selected), b.selectedIndex = -1, b.el.val(b.currentValue), void b.findBestHint()) : void b.adjustScroll(b.selectedIndex - 1) }, moveDown: function() { var a = this;
                a.selectedIndex !== a.suggestions.length - 1 && a.adjustScroll(a.selectedIndex + 1) }, adjustScroll: function(b) { var c = this,
                    d = c.activate(b); if (d) { var e, f, g, h = a(d).outerHeight();
                    e = d.offsetTop, f = a(c.suggestionsContainer).scrollTop(), g = f + c.options.maxHeight - h, e < f ? a(c.suggestionsContainer).scrollTop(e) : e > g && a(c.suggestionsContainer).scrollTop(e - c.options.maxHeight + h), c.options.preserveInput || c.el.val(c.getValue(c.suggestions[b].value)), c.signalHint(null) } }, onSelect: function(b) { var c = this,
                    d = c.options.onSelect,
                    e = c.suggestions[b];
                c.currentValue = c.getValue(e.value), c.currentValue === c.el.val() || c.options.preserveInput || c.el.val(c.currentValue), c.signalHint(null), c.suggestions = [], c.selection = e, a.isFunction(d) && d.call(c.element, e) }, getValue: function(a) { var b, c, d = this,
                    e = d.options.delimiter; return e ? (b = d.currentValue, c = b.split(e), 1 === c.length ? a : b.substr(0, b.length - c[c.length - 1].length) + a) : a }, dispose: function() { var b = this;
                b.el.off(".autocomplete").removeData("autocomplete"), b.disableKillerFn(), a(window).off("resize.autocomplete", b.fixPositionCapture), a(b.suggestionsContainer).remove() } }, a.fn.autocomplete = a.fn.devbridgeAutocomplete = function(c, d) { var e = "autocomplete"; return arguments.length ? this.each(function() { var f = a(this),
                    g = f.data(e); "string" == typeof c ? g && "function" == typeof g[c] && g[c](d) : (g && g.dispose && g.dispose(), g = new b(this, c), f.data(e, g)) }) : this.first().data(e) } });
var TabGroup = function() {
    function a() { for (var a, b = {}, c = location.search.substring(1).split("&"), d = 0, e = c.length; d < e; d++) a = c[d].split("="), a[0] && (b[a[0]] = a[1]); return b }

    function b(b) { if (b = b || {}, history.pushState) { var c = b.key,
                d = b.value,
                e = b.add || !1,
                f = location.href.replace(/#.*$/, "").replace(/(\?|&)$/, ""),
                g = a();
            e ? c in g ? f = f.replace(new RegExp(c + "=" + g[c], "g"), c + "=" + d) : f += (f.match(/\?/) ? "&" : "?") + c + "=" + d : (f = f.replace(new RegExp("(\\?|&)" + c + "=" + g[c], "g"), ""), !f.match(/\?/) && f.match(/&/) && (f = f.replace(/&/, "?"))), (e || c in g) && history.pushState(null, document.title, f) } }

    function c(a, b, c) { b = b || "==", c = c || 0; var d = a[0] < a[1] - c,
            e = a[0] > a[1] + c,
            f = !d && !e; return "<" == b && d || ">" == b && e || "==" == b && f || "!=" == b && !f } var d, e, f, g, h = this,
        i = $.extend({ workspace: "", heading: "> .hidden:first-child", key: "tab", scrollOffset: 0, scrollDuration: 250, autoScroll: !0, activatedElementClass: "active", createCallback: function() {}, version: 1.2 }, arguments[0]),
        j = $(window),
        k = $(document),
        l = $(document.documentElement),
        m = $(document.body),
        n = $(i.workspace);
    window.app = window.app || {}, $.extend(h, { getConfig: function() { return $.extend({}, i) }, isValid: function() { return !!n.length }, isCreated: function() { return !!n.data("tabGroup") }, isActivated: function(a) { var b; return b = a ? e.filter(a).hasClass(i.activatedElementClass) : !!e.filter("." + i.activatedElementClass).length }, getActivatedElementIndex: function() { return e.filter("." + i.activatedElementClass).index() }, getNamespace: function() { var a = []; return g.each(function() { a.push($(this).data("name")) }), a }, getControls: function() { return d }, getControlsElements: function(a) { return a = a || "*", e.filter(a) }, getContents: function() { return f }, getContentsElements: function(a) { return a = a || "*", g.filter(a) }, show: function(a, b) { b = b || {}; var c = h.getControlsElements(a); return b.popstate && c.data("popstate", !0), c.children().tab("show"), h }, scroll: function(a, b) {
            function d() { return (c([k.scrollTop() + j.height(), k.height()], "<", p) || c([o, k.scrollTop()], "<", p)) && c([o, k.scrollTop()], "!=", p) } b = b || {}, b.scrollCallback = b.scrollCallback || function() {}; var e = a ? f.find(a) : $(),
                g = i.scrollOffset,
                o = 0,
                p = 2,
                q = !1; return e.length && e.is(":visible") || (e = n), "auto" === g && (g = -parseInt(e.css("margin-top")), g < 0 && (g = 0)), o = Math.round(e.offset().top + g), d() ? (window.app.preventScrollEvent = !0, l.add(m).stop(!0).delay(10).animate({ scrollTop: o }, i.scrollDuration, function() { q || (window.app.preventScrollEvent = !1, q = !0, o = Math.round(e.offset().top + g), d() ? h.scroll(a, b) : b.scrollCallback(h)) })) : b.scrollCallback(h), h }, autoScroll: function() { var b = a();!location.hash && i.key in b && $.inArray(b[i.key], h.getNamespace()) != -1 && setTimeout(function() { var a = h.getContentsElements(":visible").length > 1 ? '[data-name="' + b[i.key] + '"]' : "";
                h.scroll(a) }, 10) }, create: function() { h.isValid() && !h.isCreated() && (d = $(".tab-control:first > .nav-tabs", n), e = d.children(), f = $(".tab-content:first", n), g = f.children(), e.each(function() { var a = $(this);
                a.on({ "show.bs.tab": function() { a.hasClass(i.activatedElementClass) || (a.data("popstate") ? a.removeData("popstate") : b({ key: i.key, value: a.data("name"), add: !!a.index() })) } }) }), j.on({ popstate: function(b) { var c = a(),
                        d = c[i.key] ? '[data-name="' + c[i.key] + '"]' : ":first";
                    h.show(d, { popstate: !0 }) } }), i.createCallback(h), i.autoScroll && h.autoScroll(), n.data("tabGroup", h)) } }), h.create() };
window.app.translate = function(a, b) { a = a.toString().replace(/^{{_(.*)_}}$/, "$1"); for (var c = window.app.translations || [], d = 0; d < c.length; d++)
        if (c[d][0] === a) { a = c[d][1]; break } return vsprintf(a, b) }, $.fn.formValidation.COMMON_OPTIONS = { framework: "bootstrap", icon: { valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh" } }, FormValidation.Validator.atLeastOneNotEmpty = {
    validate: function(a, b, c) {
        "use strict";
        var d, e = "atLeastOneNotEmpty",
            f = [],
            g = !0;
        if ($.each(Object.keys(a.options.fields), function(b, c) { return !d && void("object" == typeof a.options.fields[c] && $.each(Object.keys(a.options.fields[c]), function(b, f) { if ("validators" == f && a.options.fields[c][f].hasOwnProperty(e)) return d = c, !1 })) }), d) {
            if (f = a.getFieldElements(d), f.each(function() { if ($(this).is('[type="checkbox"]')) { if ($(this).is(":checked")) return g = !1, !1 } else if ("" !== $(this).val()) return g = !1, !1 }), !g) return a.updateStatus(d, a.STATUS_VALID, e),
                !0;
            a.updateStatus(d, a.STATUS_INVALID, e)
        }
        return { valid: !1, message: f.length > 1 ? c.message : c.defaultMessage }
    }
}, $.fn.tooltipster("setDefaults", { minWidth: 150, maxWidth: 300, contentAsHTML: !0, delay: 50, speed: 100, positionTracker: !0 }), $(function() { "use strict"; var a = $(window),
        b = $(document),
        c = $(document.documentElement),
        d = ($(document.head), $(document.body)),
        e = $("#app"),
        f = $("header.common", e),
        g = $("main", e),
        h = ($("footer.common", e), $('<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="' + app.translate("{{_Close (Esc)_}}") + '"></button><button class="pswp__button pswp__button--fs" title="' + app.translate("{{_Toggle fullscreen_}}") + '"></button><button class="pswp__button pswp__button--zoom" title="' + app.translate("{{_Zoom in/out_}}") + '"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="' + app.translate("{{_Previous_}}") + '"></button><button class="pswp__button pswp__button--arrow--right" title="' + app.translate("{{_Next_}}") + '"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>').appendTo(d)),
        i = window.app.modal = $('<div class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h1 class="modal-title"></h1></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal"></button><button type="button" class="btn btn-primary"></button></div></div></div></div>').appendTo(d);! function() {
        function a() { return $.extend({}, i.data("defaultConfig"), i.data("config")) } var b = $(".modal-dialog", i),
            c = $(".modal-title", i),
            d = $(".modal-body", i),
            e = $(".modal-footer", i),
            f = $(".btn-default", e),
            g = $(".btn-primary", e);
        i.data("defaultConfig", { modalClass: "", dialogClass: "", title: "", body: "", defaultButtonValue: app.translate("{{_Close_}}"), defaultButtonCallback: function() {}, primaryButtonValue: !1, primaryButtonCallback: function() {}, showCallback: function() {}, shownCallback: function() {}, hideCallback: function() {}, hiddenCallback: function() {} }).on({ "show.bs.modal": function() { var h = a();
                i.removeClass(i.data("modalClass")).addClass(h.modalClass).data("modalClass", h.modalClass), b.removeClass(b.data("dialogClass")).addClass(h.dialogClass).data("dialogClass", h.dialogClass), c.html(h.title).toggleClass("hidden", !h.title), d.empty().append(h.body), e.toggleClass("hidden", !h.defaultButtonValue && !h.primaryButtonValue), f.html(h.defaultButtonValue).toggleClass("hidden", !h.defaultButtonValue), g.html(h.primaryButtonValue).toggleClass("hidden", !h.primaryButtonValue), h.defaultButtonCallback(f), h.primaryButtonCallback(g), h.showCallback() }, "shown.bs.modal": function(b) { var c = a();
                c.shownCallback(b) }, "hide.bs.modal": function(b) { var c = a();
                c.hideCallback(b) }, "hidden.bs.modal": function() { var b = a();
                f.add(g).off(), b.hiddenCallback(), i.removeClass(i.data("modalClass")).removeData("config") } }) }(), $(".navbar", f).each(function() { var c = $(this),
            e = $(".navbar-collapse", c),
            f = $(".dropdown", e),
            g = a.width(),
            h = !1;
        f.each(function() { var a = $(this),
                b = $("[data-toggle]", a),
                c = b.filter('[data-toggle="dropdown"]'),
                g = (b.filter('[data-toggle="collapse"]'), $(".dropdown-menu", a)),
                i = { show: 0, hide: 0 };
            a.on({ "show.bs.dropdown": function() { isExtraSmallScreen() || g.css({ "margin-left": "", visibility: "hidden" }) }, "shown.bs.dropdown": function() { if (!isExtraSmallScreen()) { var a = d.outerWidth() - e.outerWidth() - parseInt(e.offset().left),
                            b = d.outerWidth() - a - g.outerWidth() - parseInt(g.offset().left);
                        g.css({ "margin-left": b < 0 ? b : 0, visibility: "" }) } }, "hide.bs.dropdown": function() { if (isExtraSmallScreen()) return !1 }, mouseenter: function() { return !isExtraSmallScreen() && void clearTimeout(i.hide) }, mouseleave: function() { return !isExtraSmallScreen() && (clearTimeout(i.show), clearTimeout(i.hide), void(i.hide = setTimeout(function() { f.filter(".open").find(c).dropdown("toggle") }, 100))) } }), b.on({ click: function(a, b) { b = b || {}; var d = $(this); return !(!a.originalEvent && !b.sameAsOriginalEvent) && void(isExtraSmallScreen() ? d.is('[aria-expanded="true"]') ? d.is(c) ? window.location.assign(d.attr("href")) : a.stopPropagation() : a.preventDefault() : d.is(c) ? d.is('[aria-expanded="true"]') && window.location.assign(d.attr("href")) : a.stopPropagation()) } }), c.on({ mouseenter: function(a) { var b = $(this);
                    isExtraSmallScreen() || h || b.closest(f).filter(".open").length || (clearTimeout(i.show), i.show = setTimeout(function() { b.dropdown("toggle") }, 50)) } }), isExtraSmallScreen() && (a.hasClass("current") || a.is('[data-content-id="255"]')) && c.trigger("click", { sameAsOriginalEvent: !0 }) }), a.on({ touchstart: function() { h = !0 }, touchmove: function() { h = !1 }, "resize orientationchange touchend": function(b) { if (!isExtraSmallScreen()) { if ("resize" == b.type) { if (a.width() == g) return;
                        g = a.width() }("touchend" != b.type || h && !$(b.target).closest(f).length) && f.filter(".open").find('[data-toggle="dropdown"]').dropdown("toggle") } } }), b.on({ click: function(a) { a.stopPropagation() } }, "#header-navbar-collapse .dropdown-menu") }), d.on({ change: function() { this.value && this.form.submit() } }, ".language-navigation select"), d.on({ change: function() { $(this).closest("form").submit() } }, ".product-dashboard select"), d.on({ _toggleWishList: function() { var b = $(this),
                c = b.data("config") || {},
                d = { productId: b.data("product-id"), action: b.data("action") };
            a.trigger("_wishListUpdateRequested", { commonConfig: c, request: d, toggle: b }) }, click: function(a) { a.preventDefault(), $(this).trigger("_toggleWishList") } }, ".wish-list-toggle"), $(".product").each(function() {
        function b(a, b) { return (b || "") + parseFloat(a).toFixed(2) } var c = $(this),
            d = ($(".product-title", c), $(".product-player a[href]", c)),
            e = $(".product-thumbnail", c),
            f = $(".product-form:first", c),
            g = $(".product-rating", f),
            j = $(".product-code", f),
            k = $('[class*="-value"]', j),
            l = $(".product-pricing", f),
            m = $(".product-prices", l),
            n = $(".product-rrp", m),
            o = $('[class*="-value"]', n),
            p = $(".product-old-price", m),
            q = $('[class*="-value"]', p),
            r = $(".product-price", m),
            s = $('[class*="-value"]', r),
            t = $(".product-price-inc-vat", m),
            u = $('[class*="-value"]', t),
            v = $(".product-discount", l),
            w = $('[class*="-title"]', v),
            x = $(".product-availability", f),
            y = $(".product-options", f),
            z = $(".product-options-quantity", y),
            A = $('input[type="number"]', z),
            B = $(".product-options-stock", y),
            C = $('[class*="-value"]', B),
            D = $(".product-options-shipping", y),
            E = $(".product-basket-button", f),
            F = ($(".product-wish-list-button", f), $(".product-tabs"));! function() {
            function a(a) { a = $.extend({}, g, a || {}); var b = new PhotoSwipe(h[0], PhotoSwipeUI_Default, f, a);
                b.listen("afterChange", function() { e.filter('[data-index="' + b.getCurrentIndex() + '"]').trigger("_showPlayer") }), b.init() } if (d.length) { var b, c = $("img", d),
                    f = e.length ? [] : [{ src: d.attr("href"), w: d.data("gallery-image-width"), h: d.data("gallery-image-height"), msrc: c.attr("src"), title: convertTextToHtmlSpecialChars(c.attr("alt")) }],
                    g = { closeOnScroll: !1, getThumbBoundsFn: function() { return { x: c.offset().left, y: c.offset().top, w: c.width() } } };
                d.on({ _showGallery: function() { e.length ? e.filter(".current").trigger("_showGallery") : a() }, click: function(a) { a.preventDefault(), d.trigger("_showGallery") } }), e.each(function() { var g = $(this),
                        h = $("img", g),
                        i = document.createElement("img");
                    i.src = g.data("player-image-src"), f.push({ src: g.attr("href"), w: g.data("gallery-image-width"), h: g.data("gallery-image-height"), msrc: g.data("player-image-src"), title: convertTextToHtmlSpecialChars(h.attr("alt")) }), g.on({ _showGallery: function() { a({ index: g.data("index") }) }, _showPlayer: function() { d.attr("href", g.attr("href")), c.attr({ src: i.src, width: g.data("player-image-width"), height: g.data("player-image-height"), alt: h.attr("alt") }), e.removeClass("current"), g.addClass("current") }, mouseenter: function() { clearTimeout(b), b = setTimeout(function() { g.trigger("_showPlayer") }, 80) }, mouseleave: function() { clearTimeout(b) }, click: function(a) { a.preventDefault(), isTouchDevice() || g.trigger("_showGallery") } }) }), addTitleFromContents({ items: [e] }) } }(), $('a[href*="tab=reviews"]', g).on({ click: function(a) { var b = F.data("tabGroup");
                b && (a.preventDefault(), 1 == $(this).data("mode") && $(document.forms["guestbook-form"], b.getContents()).filter(".collapse").addClass("in").attr("aria-expanded", "true"), b.getContentsElements(":visible").length > 1 ? b.scroll('[data-name="reviews"]') : b.show('[data-name="reviews"]').scroll()) } }), y.on({ click: function() { i.data("config", $(this).data("config")).modal("show") } }, ".product-options-tooltip"), E.filter('[data-config*="tooltip"]').each(function() { var a = $(this);
            a.tooltipster({ content: a.data("config").tooltip, trigger: !1, timer: 4e3 }).on({ _showTooltip: function() { $(".tooltipstered").not(a).trigger("_hideTooltip"), a.tooltipster("show") }, _hideTooltip: function() { a.tooltipster("hide") } }) }), f.on({ submit: function(b) { b.preventDefault(), f.data("disabled") ? (f.removeData("disabled"), a.trigger("_basketUpdateCancelled", { scope: c })) : a.trigger("_basketUpdateRequested", { scope: c }) } }), a.on({ _productOptionsUpdated: function(a, c) { c = c || {}; var d, f = B.data("config") || {}; "code" in c && k.html(null === c.code ? "" : c.code), "rrp" in c && (o.html(null === c.rrp ? "" : b(c.rrp, c.currency)), n.toggleClass("hidden", null === c.rrp)), "oldPrice" in c && (q.html(null === c.oldPrice ? "" : b(c.oldPrice, c.currency)), p.toggleClass("hidden", null === c.oldPrice), v.is('[data-type="relative"][data-relative-value][data-absolute-value-pattern]') && $(":last", w).attr("data-after", v.data("absolute-value-pattern").replace("%1$s", b(c.oldPrice - c.price)).replace(".00", ""))), "price" in c && (s.html(null === c.price ? "" : b(c.price, c.currency)), r.toggleClass("hidden", null === c.price)), "priceIncVat" in c && (u.html(null === c.priceIncVat ? "" : b(c.priceIncVat, c.currency)), t.toggleClass("hidden", null === c.priceIncVat)), "availability" in c && (c.availability || x.length || (x = $(".product-availability", $("<div/>").append($("#product-availability-template").html())).addClass("hidden").insertAfter(l)), l.toggleClass("hidden", !c.availability), x.toggleClass("hidden", c.availability)), "stock" in c && (null === c.stock ? A.removeAttr("max") : (Array.isArray(f.valuePattern) && (d = c.stock < 1 ? f.valuePattern[0] : 1 == c.stock ? f.valuePattern[1] : f.valuePattern[2], C.html(d.replace("%1$s", c.stock))), A.attr("max", Math.max(c.stock, 1)), c.stock < 1 ? A.val(0) : A.val(Math.max(A.val(), 1)))), "image" in c && e.filter('[data-image-id="' + c.image + '"]').trigger("mouseover"), j.toggleClass("hidden", !c.availability || null === c.code), A.prop("disabled", !c.availability || 0 == c.stock), B.toggleClass("hidden", !c.availability), E.prop("disabled", !c.availability || 0 == c.stock) }, _basketUpdateRequested: function(b, c) { c = c || {}; var d = $(c.scope); if (d.hasClass("product")) { var e = $.extend({}, getFormParams(f), app.productOptions ? app.productOptions.getParams() : {});
                    E.trigger("_hideTooltip"), $("input, button, select, textarea", f).filter(":enabled").prop("disabled", !0).addClass("_disabled"), $.ajax({ url: "/common/ajax/update-basket.html", method: "POST", data: e }).done(function(b) { b = b || {}, "message" in b ? (a.trigger("_basketUpdateCancelled", { scope: c.scope }), "body" in b.message && i.data("config", b.message).modal("show")) : ("basket" in b && a.trigger("_basketUpdated", $.extend({ scope: c.scope }, b.basket)), "shipping" in b && a.trigger("_shippingUpdated", $.extend({ scope: c.scope }, b.shipping))) }).fail(function() { a.trigger("_basketUpdateCancelled", { scope: c.scope }) }) } }, "_basketUpdateCancelled _basketUpdated": function(a, b) { b = b || {}; var c = $(b.scope);
                c.hasClass("product") && $("input, button, select, textarea", f).filter("._disabled").prop("disabled", !1).removeClass("_disabled") }, _basketUpdateCancelled: function() {}, _basketUpdated: function(a, b) { b = b || {}; var c = $(b.scope);
                c.hasClass("product") && E.trigger("_showTooltip").blur() }, _shippingUpdated: function(a, b) { b = b || {}; var c = $(b.scope); if (c.hasClass("product")) { var d = $("select", D);
                    $('option[value="' + b.id + '"]', d).length || $("<option/>").val(b.id).html(b.value).insertBefore($("option:first", d.prop({ selectedIndex: 0, disabled: !1 }))), d.val(b.id).change() } } }) }), $(".basket").each(function() { var b = $(this),
            c = $(".basket-contents", b);
        a.on({ _basketUpdated: function(a, b) { b = b || {}, c.html(b.contents) } }) }), $(".attachments .images").each(function() {
        function a(a) { a = $.extend({}, d, a || {}); var b = new PhotoSwipe(h[0], PhotoSwipeUI_Default, c, a);
            b.init() } var b = $('a[href]:not([href*=".pdf"])', this),
            c = [],
            d = { closeOnScroll: !1, getThumbBoundsFn: function(a) { var c = $("img", b.eq(a)); return { x: c.offset().left, y: c.offset().top, w: c.width() } } };
        b.each(function() { var b = $(this),
                d = $("img", b);
            c.push({ src: b.attr("href"), w: b.data("width"), h: b.data("height"), msrc: d.attr("src"), title: convertTextToHtmlSpecialChars(d.attr("alt")) }), b.on({ _showGallery: function() { a({ index: b.data("index") }) }, click: function(a) { a.preventDefault(), b.trigger("_showGallery") } }) }), addTitleFromContents({ items: [b] }) }), $(".rating-picker").each(function() { var a = $(this).closest("form"),
            b = $('input[name="rating-verification"]', this),
            c = $(".rating-picker-criteria", this),
            d = "selected";
        c.each(function() { var e = $("li", this);
            e.each(function() { var f = $(this),
                    g = $("input", f);
                f.on({ _select: function() { f.add(f.prevAll()).addClass(d) }, _deselect: function() { var a = $("input:checked", e);
                        a.length ? a.closest(e).nextAll().removeClass(d) : e.removeClass(d) }, mouseenter: function() { f.trigger("_select") }, mouseleave: function() { f.trigger("_deselect") }, click: function(d, e) { e = e || {}, g.prop("checked") || f.trigger("_select"), e.init || (g.prop("checked", !g.prop("checked")), f.trigger("_deselect")), b.val($("input:checked", c).length ? 1 : ""), a.data("formValidation") && a.formValidation("revalidateField", b) } }), g.on({ click: function(a) { a.preventDefault(), a.stopPropagation() } }) }).filter("." + d).trigger("click", { init: !0 }) }) });
    window.Filter ? new Filter({ workspace: "form.filter", contents: ".filter-contents", bindedFields: '.product-dashboard select, .search input[type="hidden"][name="keywords"]', scrollTo: "main", scrollOffset: parseInt(g.css("padding-top")) - 30, initializeCallback: function(a) { var b = a.getForm(),
                c = $(".filter-toggle"),
                d = $(".product-dashboard", a.getContents()),
                e = { forcedLoad: !0, scrollTo: ".product-dashboard", scrollOffset: parseInt(d.css("padding-top")) ? parseInt(d.css("border-top-width")) : -parseInt(d.css("margin-bottom")) };
            a.getContents().on({ submit: function(b) { b.preventDefault(), a.loadContents($.extend({}, e)) } }, ".product-dashboard form").on({ click: function(b) { b.preventDefault(), a.loadContents($.extend({ url: a.getRequestUrl($(this).attr("href")) }, e)) } }, ".page-navigation a[href]"), a.getSections('[data-name="price"]').each(function() { var b, c = $(this),
                    d = c.find(a.getFields()),
                    e = d.filter('[name="priceFrom"]'),
                    f = d.filter('[name="priceTo"]'),
                    g = c.find(".filter-price-slider"),
                    h = e.prop("disabled") && f.prop("disabled"),
                    i = +e.data("minValue") || 0,
                    j = +f.data("maxValue") || 1;
                g.slider({ disabled: h, range: !0, min: i, max: j, values: [i, j], animate: 200, slide: function(a, b) { e.val(b.values[0] > i ? b.values[0] : ""), f.val(b.values[1] < j ? b.values[1] : "") }, stop: function(a, b) { d.filter(":eq(" + $(b.handle).index(".filter-price-slider .ui-slider-handle") + ")").trigger("change", { initiator: "priceSlider" }) } }).on({ _updateValues: function(a) { a.stopPropagation(); var b = [];
                        $.each([e.val(), f.val()], function(a, c) { c ? a ? c < g.slider("values", 0) ? c = g.slider("values", 0) : c > j && (c = j) : c > g.slider("values", 1) ? c = g.slider("values", 1) : c < i && (c = i) : c = a ? j : i, b.push(+c) }), g.slider("values", b) } }).trigger("_updateValues"), d.on({ "input change": function(a, c) { c = c || {}, "change" == a.type && "priceSlider" == c.initiator || (clearTimeout(b), b = setTimeout(function() { g.trigger("_updateValues") }, 200)) } }), c.on({ _reset: function() { g.slider("values", [i, j]) } }) }), b.on({ _change: function() { c.toggleClass("selected", b.hasClass("selected")) } }), c.toggleClass("selected", b.hasClass("selected")).on({ click: function() { var a = $("<form/>").addClass("hidden").insertAfter(b);
                    i.data("config", { modalClass: "filter-modal", dialogClass: "modal-sm", title: app.translate("{{_Filter_}}"), body: b, defaultButtonValue: !1, primaryButtonValue: app.translate("{{_Show results_}}"), primaryButtonCallback: function(a) { a.on({ click: function() { i.modal("hide") } }) }, hiddenCallback: function() { b.insertAfter(a), a.detach() } }).modal("show") } }), window.ga && window._googleAnalytics && a.getSections(':not([data-name="price"])').each(function() { var b = $(this),
                    c = $(a.getFields(), b),
                    d = $(".filter-section-title", b).text();
                c.on({ change: function() { var a = $(this),
                            b = a.is('input[type="checkbox"]');
                        (b && a.is(":checked") || !b && a.val()) && addGoogleAnalyticsEvent({ category: "Product filter", action: "Search", label: d + ": " + (b ? $.trim(a.closest("label").text()) : a.val()) }) } }) }) }, processContentsCallback: function(b) { a.trigger("_createProductPercentageDiscounts", { scope: b.getContents() }).trigger("_processNoscriptDisabled", { scope: b.getContents() }).trigger("_equalizeHeight", { scope: b.getContents(), delay: 100, callback: function() { a.trigger("_processDeferredAnimation", { scope: b.getContents(), delay: 100 }) } }) } }) : null;
    addTitleFromContents({ items: [".banner img", ".payment-cards img"] }), addSearchAutocomplete({ scope: ".search", appendTo: "form" }), addSearchAutocomplete({ scope: ".search-form" }), d.on({ change: function() { $(this).closest("form").submit() } }, ".currency select"), d.on({ click: function(b) { b.preventDefault(), a.trigger("_showEnquiryModal") } }, '[data-action="make-an-enquiry"]'), d.on({ click: function(b) { $(this).closest("#header-navbar-collapse").length || (b.preventDefault(), a.trigger("_showSearchModal")) } }, '[data-action="search"], a[href="/search"]'), d.on({ click: function(b) { c.hasClass("member") || (b.preventDefault(), a.trigger("_showSignInModal")) } }, '[data-action="sign-in"], a[href="/your-account"]'), d.on({ click: function() { a.trigger("_hideSignInModal") } }, '.sign-in-modal a[href^="/sign-in"]'), $(".tab-group").each(function() { var b = $(this),
            c = { workspace: b, createCallback: function(c) { c.getControlsElements().on({ "shown.bs.tab": function() { c.scroll(null, { scrollCallback: function() { var c = $(".tab-pane.active", b);
                                    a.trigger("_equalizeHeight", { scope: c, callback: function() { a.trigger("_processDeferredAnimation", { scope: c, delay: 100 }) } }) } }) } }) } },
            d = b.data("config") || {};
        d.key && (c.key = d.key);
        new TabGroup(c) }), "#guestbook-form" == window.location.hash && $(document.forms["guestbook-form"]).filter(".collapse").addClass("in").attr("aria-expanded", "true"), $(document.forms).each(function() { var a = $(this),
            b = $(".captcha", a),
            c = $('input[name="data"]', b);
        $(b.data("remove")).detach(), c.val($.trim(c.closest("div").text())) }), a.on({ _createTooltips: function(a, b) { b = $.extend({ scope: d }, b || {}), $("[data-tooltip]:not(.tooltipstered)", b.scope).each(function() { var a = $(this);
                a.tooltipster({ content: convertTextToHtmlSpecialChars(a.data("tooltip")) }) }) }, _createProductPercentageDiscounts: function(a, b) { b = $.extend({ className: "product-discount-label", scope: d }, b || {}), b.contentsPattern = b.contentsPattern || { relative: '<a><span class="' + b.className + '-value" data-before="&minus;" data-after="%">%1$s</span></a>', absolute: '<a><span class="' + b.className + '-value" data-before="&minus;%2$s">%1$s</span></a>', special: "<a><span>" + app.translate("{{_Special_}}") + "</span></a>" }, $(".product-discount", b.scope).each(function() { var a, c, d, e = $(this),
                    f = e.data("type"),
                    g = $("<div/>").attr("data-type", f).addClass(b.className);
                e.closest(".product-form").length ? (a = e.closest(".product"), c = $(".product-player", a)) : (a = e.closest(".product-item"), c = $(".product-image", a), d = $("a", c).attr("href")), "special" == f || $("." + b.className, a).length || (g.html(b.contentsPattern[f].replace("%2$s", e.data("currency-symbol")).replace("%1$s", e.data(f + "-value").toString().replace(/(\..+$)/, "<span>$1</span>"))), d && $("a", g).attr("href", d), g.insertBefore(c)) }) }, _processNoscriptDisabled: function(a, b) { b = $.extend({ scope: d }, b || {}), $("[data-noscript-disabled]", b.scope).each(function() { $(this).removeAttr("disabled data-noscript-disabled").prop("disabled", !1) }) }, _equalizeHeight: function(b, c) { c = $.extend({ items: [{}, { items: ".product-item", target: "> .wrap" }, {}, { items: ".library-item", target: "> .wrap" }, { items: ".equal-height" }], scope: d, delay: 0, callback: function() {} }, c); var e, f = $(); if (clearTimeout(app.equalizeHeightTimer), c.delay) e = c.delay, delete c.delay, app.equalizeHeightTimer = setTimeout(function() { a.trigger("_equalizeHeight", c) }, e);
            else { if ($.each(c.items, function(a, b) { f = f.add($(b.items, c.scope)) }), f.filter(function() { var a = $(this); return (a.hasClass("da-processed") || a.hasClass("da-applied")) && !a.hasClass("da-completed") && !$(this).data("deferredEqualizeHeight") }).data("deferredEqualizeHeight", !0).each(function() { $(this).one({ _daCompleted: function(b) { c.delay = 500, a.trigger("_equalizeHeight", c) } }) }), f.filter(".da-applied").not(".da-completed").length) return;
                $.each(c.items, function(a, b) { equalizeHeight({ items: $(b.items, c.scope), target: b.target, callback: c.callback }) }) } }, _processDeferredAnimation: function(b, c) {
            function e() { var a = { className: "da-fade-up", offset: 50, delay: 100, delayIncrement: 200, duration: 400, easing: "ease-out-quad" },
                    b = $.extend({}, a, {}),
                    d = $.extend({}, a, { className: "da-fade" }),
                    e = $(c.scope).filter(":visible"),
                    f = $("> .deferred-animation, :visible > .deferred-animation", e).each(function() { var c = $(this),
                            e = a;
                        c.hasClass("carousel-banner") ? e = b : c.hasClass("filter") && (e = d), c.data("deferredAnimation", e) }),
                    g = $("> [data-da], :visible > [data-da]", e).each(function() { var b = $(this),
                            c = b.data("deferredAnimation") || { className: b.data("da"), offset: void 0 !== b.data("da-offset") ? b.data("da-offset") : a.offset, delay: void 0 !== b.data("da-delay") ? b.data("da-delay") : a.delay, delayIncrement: void 0 !== b.data("da-delay-increment") ? b.data("da-delay-increment") : 600, duration: b.data("da-duration") || 800, easing: b.data("da-easing") || a.easing };
                        b.data("deferredAnimation", c) });
                processDeferredAnimation(f.add(g)) } c = $.extend({ scope: d, delay: 0 }, c); var f;
            clearTimeout(app.deferredAnimationTimer), c.delay ? (f = c.delay, delete c.delay, app.deferredAnimationTimer = setTimeout(function() { a.trigger("_processDeferredAnimation", c) }, f)) : e() }, _showEnquiryModal: function() { var a = "/common/ajax/make-an-enquiry.html";
            app.enquiryRequest && app.enquiryRequest.abort(), app.enquiryRequest = $.ajax({ url: a }).done(function(b) { app.enquiryRequest = null; var c = $(b),
                    d = $("form", c),
                    e = $('input[type="submit"]', d),
                    f = $.extend({ modalClass: "enquiry-modal", dialogClass: "modal-sm", commentsProductPattern: "" }, $("[data-config]:first", c).data("config")),
                    g = null;
                $(".product .product-title:first").each(function() { $('textarea[name="comments"]', d).val(f.commentsProductPattern.toString().replace("%1$s", $(this).text())) }), d.on({ "success.form.fv": function(b) { b.preventDefault(); var c = getFormParams(d);
                        e.val(f.submitValue).prop("disabled", !0), g = $.ajax({ url: a, method: "POST", data: $.extend(c, { location: window.location.href }) }).done(function(a) { g = null; var b = $(a);
                            i.data("config", { modalClass: f.modalClass, dialogClass: f.dialogClass, title: f.title, body: b }).modal("show") }) } }), i.data("config", { modalClass: f.modalClass, dialogClass: f.dialogClass, title: f.title, body: c, defaultButtonValue: !1, hideCallback: function(a) { g && (a.preventDefault(), confirm(f.confirmMessage) && g && (g.abort(), g = null, i.modal("hide"))) } }).modal("show") }) }, _showSearchModal: function() { app.searchRequest && app.searchRequest.abort(), app.searchRequest = $.ajax({ url: "/common/ajax/search.html" }).done(function(a) { app.searchRequest = null; var b = $(a);
                i.data("config", { title: app.translate("{{_Site search_}}"), body: b, defaultButtonValue: !1, showCallback: function() { addSearchAutocomplete({ scope: b }) }, shownCallback: function() { $('input[name="keywords"]', b).focus() } }).modal("show") }) }, _showSignInModal: function() { app.signInRequest && app.signInRequest.abort(), app.signInRequest = $.ajax({ url: "/common/ajax/sign-in.html", data: { return_url: window.location.href } }).done(function(a) { app.signInRequest = null; var b = $(a);
                i.data("config", { modalClass: "sign-in-modal", dialogClass: "modal-sm", title: app.translate("{{_Member sign in_}}"), body: b, defaultButtonValue: !1 }).modal("show"), $("form", i).formValidation($.extend({}, $.fn.formValidation.COMMON_OPTIONS, { fields: { login: { validators: { notEmpty: { message: app.translate("{{_Required_}}") } } }, password: { validators: { notEmpty: { message: app.translate("{{_Required_}}") }, stringLength: { min: 5, message: app.translate("{{_The password must be at least 5 characters_}}") } } } } })) }) }, _hideSignInModal: function() { app.signInRequest && (app.signInRequest.abort(), app.signInRequest = null); var a = i.filter(".sign-in-modal");
            $("form", a).formValidation("destroy"), a.modal("hide") }, _productOptionsUpdated: function(a, b) {}, _shippingUpdated: function(a, b) {}, _basketUpdateRequested: function(a, b) {}, _basketUpdateCancelled: function(a, b) {}, _basketUpdated: function(a, b) {}, _wishListUpdateRequested: function(b, c) { c = $.extend({ commonConfig: {}, request: {}, toggle: null }, c), $(c.toggle).prop("disabled", !0), app.wishListUpdateRequest && app.wishListUpdateRequest.abort(), app.wishListUpdateRequest = $.ajax({ url: "/common/ajax/update-wish-list.html", method: "POST", data: c.request }).done(function(b) { b = b || {}, a.trigger("_wishListUpdated", $.extend({}, c, { response: b })) }).fail(function(b) { b = b || {}, a.trigger("_wishListUpdateCancelled", $.extend({}, c, { response: b })) }).always(function() { app.wishListUpdateRequest = null }) }, _wishListUpdateCancelled: function(a, b) { b = b || {}, $(b.toggle).prop("disabled", !1) }, _wishListUpdated: function(a, b) { b = b || {}; var c = $(b.toggle).prop("disabled", !1),
                d = c.is('[type="button"]'); "add" == c.data("action") && b.response.inWishList ? (c.attr("data-action", "remove").data("action", "remove"), d ? c.val(b.commonConfig.removeValue) : c.text(b.commonConfig.removeValue)) : c.closest(".wish-list-section").length ? window.location.reload() : (c.attr("data-action", "add").data("action", "add"), d ? c.val(b.commonConfig.addValue) : c.text(b.commonConfig.addValue)), "count" in b.response && $("a", ".wish-list-navigation").attr("data-mode", b.response.count > 0 ? 1 : 0) }, resize: function() { a.trigger("_equalizeHeight", { delay: 200, callback: function() { a.trigger("_processDeferredAnimation", { delay: 100 }) } }) }, scroll: function() { app.preventScrollEvent || a.trigger("_processDeferredAnimation", { delay: 100 }) }, orientationchange: function() { a.trigger("_processDeferredAnimation", { delay: 100 }) } }), c.addClass("ready"), a.trigger("_createProductPercentageDiscounts"), a.trigger("_createTooltips"), a.trigger("_processNoscriptDisabled"), a.trigger("_equalizeHeight", { delay: 100, callback: function() { a.trigger("_processDeferredAnimation", { delay: 100 }) } }), $.each(app.documentReady, function() { var a = this; "function" == typeof a && setTimeout(function() { a.call() }, 0) }) }), $(window).on({ load: function() { "use strict"; var a = $(this),
            b = ($(document), $(document.documentElement)),
            c = $(document.head),
            d = $(document.body);
        b.addClass("loaded"), a.trigger("_equalizeHeight", { delay: 100, callback: function() { a.trigger("_processDeferredAnimation", { delay: 100 }) } }), b.hasClass("bot") || (createOwlCarousel({ target: ".carousel-banner", items: ".banner-item" }), d.on({ click: function() { var a = $(this);
                addGoogleAnalyticsEvent({ category: "Banner", action: "Click", label: $(".banner-title", a).text() || $("img", a).attr("alt") }) } }, ".banner a"), d.on({ click: function() { var a = $(this);
                addGoogleAnalyticsEvent({ category: "Social networking website", action: "Click", label: a.attr("href") }) } }, '.external-navigation a[href^="http"]'), $(".share-widget").each(function() {
            function a() { $(".addthis_counter", d).children().length ? d.addClass("loaded") : setTimeout(function() { a() }, 200) } var b = '<a class="addthis_button_facebook"></a><a class="addthis_button_twitter"></a><a class="addthis_button_google_plusone_share"></a><a class="addthis_button_linkedin"></a><a class="addthis_button_compact"></a><a class="addthis_counter addthis_bubble_style"></a>',
                d = $(this).append("<div><div>" + app.translate("{{_Share_}}") + '</div><div><div class="addthis_toolbox addthis_default_style hidden-xs">' + b + '</div><div class="addthis_toolbox addthis_default_style addthis_32x32_style visible-xs-block">' + b + "</div></div></div>");
            $("<script/>").attr("src", "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-53d8a5ce640d8af6").appendTo(c), a() })), $.each(app.windowLoad, function() { var a = this; "function" == typeof a && setTimeout(function() { a.call() }, 0) }) } }), $(function() { "use strict"; var a = ($(window), $(document), $(document.documentElement), $(document.head), $(document.body));
    a.on({ click: function(a) { a.preventDefault(); var b, c = $(this),
                d = c.closest(".social-sign-in"),
                e = Math.min(screen.width, 420),
                f = Math.min(screen.height, 320),
                g = Math.max(0, Math.round((screen.width - e) / 2)),
                h = Math.max(0, Math.round((screen.height - f) / 2)),
                i = window.open("/common/modules/social-sign-in/window.html?location=" + encodeURIComponent(c.attr("href")), "socialSignIn", "width=" + e + ", height=" + f + ", left=" + g + ", top=" + h + ", scrollbars=1, status=0, toolbar=0, menubar=0, location=0, resizable=1");
            i.focus(), localStorage.setItem("socialSignIn", {}); var j = setInterval(function() { i.closed && (clearInterval(j), b = JSON.parse(localStorage.getItem("socialSignIn")) || {}, b ? b.error && d.length ? $(b.error).insertBefore(d) : b.location && window.location.assign(b.location) : window.location.reload()) }, 200) } }, "a.social-sign-in-item[href]") }), $(function() {}), $(function() { var a, b = $.extend({ cookieName: "cookieNotice" }, window.app.cookieNotice || {}),
        c = $("<div/>").addClass("cookie-notice"),
        d = $("<div/>").addClass("deactivator").append($("<a/>")),
        e = $("<div/>").addClass("contents");
    c.on({ "_activate.cn": function() { a && c.css({ bottom: -1 * c.outerHeight() + "px", visibility: "visible" }).animate({ bottom: -1 * parseInt(c.css("padding-bottom")) + "px" }, 500, "easeInQuint") }, "_deactivate.cn": function() { if (a) { var d = new Date;
                d.setTime(d.getTime() + 31536e6), setCookie(b.cookieName, 1, $.extend({ expires: d, path: "/" }, "https:" == location.protocol ? { secure: !0, samesite: "None" } : { samesite: "Lax" })), c.animate({ bottom: -1 * c.outerHeight() + "px" }, 500, "easeOutQuint", function() {}) } }, "_initialize.cn": function() { a || getCookie(b.cookieName) || $(document.documentElement).hasClass("bot") || window.location.pathname.match(/^\/cc\//) || (d.attr("title", app.translate("{{_Continue_}}")).on({ click: function() { c.trigger("_deactivate.cn") } }), b.onDetailsPage && $("[data-details]", e).detach(), c.append($("<div/>").append(e, d)).appendTo(document.body), setTimeout(function() { a = !0, c.trigger("_activate.cn") }, 1e3)) } }).trigger("_initialize.cn") });