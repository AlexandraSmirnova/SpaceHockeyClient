//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function () {
	function n(n) {
		function t(t, r, e, u, i, o) {
			for (; i >= 0 && o > i; i += n) {
				var a = u ? u[i] : i;
				e = r(e, t[a], a, t)
			}
			return e
		}

		return function (r, e, u, i) {
			e = b(e, i, 4);
			var o = !k(r) && m.keys(r), a = (o || r).length, c = n > 0 ? 0 : a - 1;
			return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a)
		}
	}

	function t(n) {
		return function (t, r, e) {
			r = x(r, e);
			for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)if (r(t[i], i, t))return i;
			return -1
		}
	}

	function r(n, t, r) {
		return function (e, u, i) {
			var o = 0, a = O(e);
			if ("number" == typeof i)n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1; else if (r && i && a)return i = r(e, u), e[i] === u ? i : -1;
			if (u !== u)return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1;
			for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n)if (e[i] === u)return i;
			return -1
		}
	}

	function e(n, t) {
		var r = I.length, e = n.constructor, u = m.isFunction(e) && e.prototype || a, i = "constructor";
		for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;)i = I[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
	}

	var u = this, i = u._, o = Array.prototype, a = Object.prototype, c = Function.prototype, f = o.push, l = o.slice, s = a.toString, p = a.hasOwnProperty, h = Array.isArray, v = Object.keys, g = c.bind, y = Object.create, d = function () {
	}, m = function (n) {
		return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n)
	};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3";
	var b = function (n, t, r) {
		if (t === void 0)return n;
		switch (null == r ? 3 : r) {
			case 1:
				return function (r) {
					return n.call(t, r)
				};
			case 2:
				return function (r, e) {
					return n.call(t, r, e)
				};
			case 3:
				return function (r, e, u) {
					return n.call(t, r, e, u)
				};
			case 4:
				return function (r, e, u, i) {
					return n.call(t, r, e, u, i)
				}
		}
		return function () {
			return n.apply(t, arguments)
		}
	}, x = function (n, t, r) {
		return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
	};
	m.iteratee = function (n, t) {
		return x(n, t, 1 / 0)
	};
	var _ = function (n, t) {
		return function (r) {
			var e = arguments.length;
			if (2 > e || null == r)return r;
			for (var u = 1; e > u; u++)for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
				var f = o[c];
				t && r[f] !== void 0 || (r[f] = i[f])
			}
			return r
		}
	}, j = function (n) {
		if (!m.isObject(n))return {};
		if (y)return y(n);
		d.prototype = n;
		var t = new d;
		return d.prototype = null, t
	}, w = function (n) {
		return function (t) {
			return null == t ? void 0 : t[n]
		}
	}, A = Math.pow(2, 53) - 1, O = w("length"), k = function (n) {
		var t = O(n);
		return "number" == typeof t && t >= 0 && A >= t
	};
	m.each = m.forEach = function (n, t, r) {
		t = b(t, r);
		var e, u;
		if (k(n))for (e = 0, u = n.length; u > e; e++)t(n[e], e, n); else {
			var i = m.keys(n);
			for (e = 0, u = i.length; u > e; e++)t(n[i[e]], i[e], n)
		}
		return n
	}, m.map = m.collect = function (n, t, r) {
		t = x(t, r);
		for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
			var a = e ? e[o] : o;
			i[o] = t(n[a], a, n)
		}
		return i
	}, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function (n, t, r) {
		var e;
		return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), e !== void 0 && e !== -1 ? n[e] : void 0
	}, m.filter = m.select = function (n, t, r) {
		var e = [];
		return t = x(t, r), m.each(n, function (n, r, u) {
			t(n, r, u) && e.push(n)
		}), e
	}, m.reject = function (n, t, r) {
		return m.filter(n, m.negate(x(t)), r)
	}, m.every = m.all = function (n, t, r) {
		t = x(t, r);
		for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
			var o = e ? e[i] : i;
			if (!t(n[o], o, n))return !1
		}
		return !0
	}, m.some = m.any = function (n, t, r) {
		t = x(t, r);
		for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
			var o = e ? e[i] : i;
			if (t(n[o], o, n))return !0
		}
		return !1
	}, m.contains = m.includes = m.include = function (n, t, r, e) {
		return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0
	}, m.invoke = function (n, t) {
		var r = l.call(arguments, 2), e = m.isFunction(t);
		return m.map(n, function (n) {
			var u = e ? t : n[t];
			return null == u ? u : u.apply(n, r)
		})
	}, m.pluck = function (n, t) {
		return m.map(n, m.property(t))
	}, m.where = function (n, t) {
		return m.filter(n, m.matcher(t))
	}, m.findWhere = function (n, t) {
		return m.find(n, m.matcher(t))
	}, m.max = function (n, t, r) {
		var e, u, i = -1 / 0, o = -1 / 0;
		if (null == t && null != n) {
			n = k(n) ? n : m.values(n);
			for (var a = 0, c = n.length; c > a; a++)e = n[a], e > i && (i = e)
		} else t = x(t, r), m.each(n, function (n, r, e) {
			u = t(n, r, e), (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
		});
		return i
	}, m.min = function (n, t, r) {
		var e, u, i = 1 / 0, o = 1 / 0;
		if (null == t && null != n) {
			n = k(n) ? n : m.values(n);
			for (var a = 0, c = n.length; c > a; a++)e = n[a], i > e && (i = e)
		} else t = x(t, r), m.each(n, function (n, r, e) {
			u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u)
		});
		return i
	}, m.shuffle = function (n) {
		for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i];
		return u
	}, m.sample = function (n, t, r) {
		return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
	}, m.sortBy = function (n, t, r) {
		return t = x(t, r), m.pluck(m.map(n, function (n, r, e) {
			return {value: n, index: r, criteria: t(n, r, e)}
		}).sort(function (n, t) {
			var r = n.criteria, e = t.criteria;
			if (r !== e) {
				if (r > e || r === void 0)return 1;
				if (e > r || e === void 0)return -1
			}
			return n.index - t.index
		}), "value")
	};
	var F = function (n) {
		return function (t, r, e) {
			var u = {};
			return r = x(r, e), m.each(t, function (e, i) {
				var o = r(e, i, t);
				n(u, e, o)
			}), u
		}
	};
	m.groupBy = F(function (n, t, r) {
		m.has(n, r) ? n[r].push(t) : n[r] = [t]
	}), m.indexBy = F(function (n, t, r) {
		n[r] = t
	}), m.countBy = F(function (n, t, r) {
		m.has(n, r) ? n[r]++ : n[r] = 1
	}), m.toArray = function (n) {
		return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
	}, m.size = function (n) {
		return null == n ? 0 : k(n) ? n.length : m.keys(n).length
	}, m.partition = function (n, t, r) {
		t = x(t, r);
		var e = [], u = [];
		return m.each(n, function (n, r, i) {
			(t(n, r, i) ? e : u).push(n)
		}), [e, u]
	}, m.first = m.head = m.take = function (n, t, r) {
		return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t)
	}, m.initial = function (n, t, r) {
		return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
	}, m.last = function (n, t, r) {
		return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
	}, m.rest = m.tail = m.drop = function (n, t, r) {
		return l.call(n, null == t || r ? 1 : t)
	}, m.compact = function (n) {
		return m.filter(n, m.identity)
	};
	var S = function (n, t, r, e) {
		for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++) {
			var c = n[o];
			if (k(c) && (m.isArray(c) || m.isArguments(c))) {
				t || (c = S(c, t, r));
				var f = 0, l = c.length;
				for (u.length += l; l > f;)u[i++] = c[f++]
			} else r || (u[i++] = c)
		}
		return u
	};
	m.flatten = function (n, t) {
		return S(n, t, !1)
	}, m.without = function (n) {
		return m.difference(n, l.call(arguments, 1))
	}, m.uniq = m.unique = function (n, t, r, e) {
		m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = x(r, e));
		for (var u = [], i = [], o = 0, a = O(n); a > o; o++) {
			var c = n[o], f = r ? r(c, o, n) : c;
			t ? (o && i === f || u.push(c), i = f) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c)
		}
		return u
	}, m.union = function () {
		return m.uniq(S(arguments, !0, !0))
	}, m.intersection = function (n) {
		for (var t = [], r = arguments.length, e = 0, u = O(n); u > e; e++) {
			var i = n[e];
			if (!m.contains(t, i)) {
				for (var o = 1; r > o && m.contains(arguments[o], i); o++);
				o === r && t.push(i)
			}
		}
		return t
	}, m.difference = function (n) {
		var t = S(arguments, !0, !0, 1);
		return m.filter(n, function (n) {
			return !m.contains(t, n)
		})
	}, m.zip = function () {
		return m.unzip(arguments)
	}, m.unzip = function (n) {
		for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++)r[e] = m.pluck(n, e);
		return r
	}, m.object = function (n, t) {
		for (var r = {}, e = 0, u = O(n); u > e; e++)t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
		return r
	}, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function (n, t, r, e) {
		r = x(r, e, 1);
		for (var u = r(t), i = 0, o = O(n); o > i;) {
			var a = Math.floor((i + o) / 2);
			r(n[a]) < u ? i = a + 1 : o = a
		}
		return i
	}, m.indexOf = r(1, m.findIndex, m.sortedIndex), m.lastIndexOf = r(-1, m.findLastIndex), m.range = function (n, t, r) {
		null == t && (t = n || 0, n = 0), r = r || 1;
		for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r)u[i] = n;
		return u
	};
	var E = function (n, t, r, e, u) {
		if (!(e instanceof t))return n.apply(r, u);
		var i = j(n.prototype), o = n.apply(i, u);
		return m.isObject(o) ? o : i
	};
	m.bind = function (n, t) {
		if (g && n.bind === g)return g.apply(n, l.call(arguments, 1));
		if (!m.isFunction(n))throw new TypeError("Bind must be called on a function");
		var r = l.call(arguments, 2), e = function () {
			return E(n, e, t, this, r.concat(l.call(arguments)))
		};
		return e
	}, m.partial = function (n) {
		var t = l.call(arguments, 1), r = function () {
			for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++)i[o] = t[o] === m ? arguments[e++] : t[o];
			for (; e < arguments.length;)i.push(arguments[e++]);
			return E(n, r, this, this, i)
		};
		return r
	}, m.bindAll = function (n) {
		var t, r, e = arguments.length;
		if (1 >= e)throw new Error("bindAll must be passed function names");
		for (t = 1; e > t; t++)r = arguments[t], n[r] = m.bind(n[r], n);
		return n
	}, m.memoize = function (n, t) {
		var r = function (e) {
			var u = r.cache, i = "" + (t ? t.apply(this, arguments) : e);
			return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
		};
		return r.cache = {}, r
	}, m.delay = function (n, t) {
		var r = l.call(arguments, 2);
		return setTimeout(function () {
			return n.apply(null, r)
		}, t)
	}, m.defer = m.partial(m.delay, m, 1), m.throttle = function (n, t, r) {
		var e, u, i, o = null, a = 0;
		r || (r = {});
		var c = function () {
			a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null)
		};
		return function () {
			var f = m.now();
			a || r.leading !== !1 || (a = f);
			var l = t - (f - a);
			return e = this, u = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i
		}
	}, m.debounce = function (n, t, r) {
		var e, u, i, o, a, c = function () {
			var f = m.now() - o;
			t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null, r || (a = n.apply(i, u), e || (i = u = null)))
		};
		return function () {
			i = this, u = arguments, o = m.now();
			var f = r && !e;
			return e || (e = setTimeout(c, t)), f && (a = n.apply(i, u), i = u = null), a
		}
	}, m.wrap = function (n, t) {
		return m.partial(t, n)
	}, m.negate = function (n) {
		return function () {
			return !n.apply(this, arguments)
		}
	}, m.compose = function () {
		var n = arguments, t = n.length - 1;
		return function () {
			for (var r = t, e = n[t].apply(this, arguments); r--;)e = n[r].call(this, e);
			return e
		}
	}, m.after = function (n, t) {
		return function () {
			return --n < 1 ? t.apply(this, arguments) : void 0
		}
	}, m.before = function (n, t) {
		var r;
		return function () {
			return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r
		}
	}, m.once = m.partial(m.before, 2);
	var M = !{toString: null}.propertyIsEnumerable("toString"), I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
	m.keys = function (n) {
		if (!m.isObject(n))return [];
		if (v)return v(n);
		var t = [];
		for (var r in n)m.has(n, r) && t.push(r);
		return M && e(n, t), t
	}, m.allKeys = function (n) {
		if (!m.isObject(n))return [];
		var t = [];
		for (var r in n)t.push(r);
		return M && e(n, t), t
	}, m.values = function (n) {
		for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)e[u] = n[t[u]];
		return e
	}, m.mapObject = function (n, t, r) {
		t = x(t, r);
		for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++)e = u[a], o[e] = t(n[e], e, n);
		return o
	}, m.pairs = function (n) {
		for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)e[u] = [t[u], n[t[u]]];
		return e
	}, m.invert = function (n) {
		for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++)t[n[r[e]]] = r[e];
		return t
	}, m.functions = m.methods = function (n) {
		var t = [];
		for (var r in n)m.isFunction(n[r]) && t.push(r);
		return t.sort()
	}, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function (n, t, r) {
		t = x(t, r);
		for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)if (e = u[i], t(n[e], e, n))return e
	}, m.pick = function (n, t, r) {
		var e, u, i = {}, o = n;
		if (null == o)return i;
		m.isFunction(t) ? (u = m.allKeys(o), e = b(t, r)) : (u = S(arguments, !1, !1, 1), e = function (n, t, r) {
			return t in r
		}, o = Object(o));
		for (var a = 0, c = u.length; c > a; a++) {
			var f = u[a], l = o[f];
			e(l, f, o) && (i[f] = l)
		}
		return i
	}, m.omit = function (n, t, r) {
		if (m.isFunction(t))t = m.negate(t); else {
			var e = m.map(S(arguments, !1, !1, 1), String);
			t = function (n, t) {
				return !m.contains(e, t)
			}
		}
		return m.pick(n, t, r)
	}, m.defaults = _(m.allKeys, !0), m.create = function (n, t) {
		var r = j(n);
		return t && m.extendOwn(r, t), r
	}, m.clone = function (n) {
		return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
	}, m.tap = function (n, t) {
		return t(n), n
	}, m.isMatch = function (n, t) {
		var r = m.keys(t), e = r.length;
		if (null == n)return !e;
		for (var u = Object(n), i = 0; e > i; i++) {
			var o = r[i];
			if (t[o] !== u[o] || !(o in u))return !1
		}
		return !0
	};
	var N = function (n, t, r, e) {
		if (n === t)return 0 !== n || 1 / n === 1 / t;
		if (null == n || null == t)return n === t;
		n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
		var u = s.call(n);
		if (u !== s.call(t))return !1;
		switch (u) {
			case"[object RegExp]":
			case"[object String]":
				return "" + n == "" + t;
			case"[object Number]":
				return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
			case"[object Date]":
			case"[object Boolean]":
				return +n === +t
		}
		var i = "[object Array]" === u;
		if (!i) {
			if ("object" != typeof n || "object" != typeof t)return !1;
			var o = n.constructor, a = t.constructor;
			if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t)return !1
		}
		r = r || [], e = e || [];
		for (var c = r.length; c--;)if (r[c] === n)return e[c] === t;
		if (r.push(n), e.push(t), i) {
			if (c = n.length, c !== t.length)return !1;
			for (; c--;)if (!N(n[c], t[c], r, e))return !1
		} else {
			var f, l = m.keys(n);
			if (c = l.length, m.keys(t).length !== c)return !1;
			for (; c--;)if (f = l[c], !m.has(t, f) || !N(n[f], t[f], r, e))return !1
		}
		return r.pop(), e.pop(), !0
	};
	m.isEqual = function (n, t) {
		return N(n, t)
	}, m.isEmpty = function (n) {
		return null == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length
	}, m.isElement = function (n) {
		return !(!n || 1 !== n.nodeType)
	}, m.isArray = h || function (n) {
			return "[object Array]" === s.call(n)
		}, m.isObject = function (n) {
		var t = typeof n;
		return "function" === t || "object" === t && !!n
	}, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (n) {
		m["is" + n] = function (t) {
			return s.call(t) === "[object " + n + "]"
		}
	}), m.isArguments(arguments) || (m.isArguments = function (n) {
		return m.has(n, "callee")
	}), "function" != typeof/./ && "object" != typeof Int8Array && (m.isFunction = function (n) {
		return "function" == typeof n || !1
	}), m.isFinite = function (n) {
		return isFinite(n) && !isNaN(parseFloat(n))
	}, m.isNaN = function (n) {
		return m.isNumber(n) && n !== +n
	}, m.isBoolean = function (n) {
		return n === !0 || n === !1 || "[object Boolean]" === s.call(n)
	}, m.isNull = function (n) {
		return null === n
	}, m.isUndefined = function (n) {
		return n === void 0
	}, m.has = function (n, t) {
		return null != n && p.call(n, t)
	}, m.noConflict = function () {
		return u._ = i, this
	}, m.identity = function (n) {
		return n
	}, m.constant = function (n) {
		return function () {
			return n
		}
	}, m.noop = function () {
	}, m.property = w, m.propertyOf = function (n) {
		return null == n ? function () {
		} : function (t) {
			return n[t]
		}
	}, m.matcher = m.matches = function (n) {
		return n = m.extendOwn({}, n), function (t) {
			return m.isMatch(t, n)
		}
	}, m.times = function (n, t, r) {
		var e = Array(Math.max(0, n));
		t = b(t, r, 1);
		for (var u = 0; n > u; u++)e[u] = t(u);
		return e
	}, m.random = function (n, t) {
		return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
	}, m.now = Date.now || function () {
			return (new Date).getTime()
		};
	var B = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#x27;",
		"`": "&#x60;"
	}, T = m.invert(B), R = function (n) {
		var t = function (t) {
			return n[t]
		}, r = "(?:" + m.keys(n).join("|") + ")", e = RegExp(r), u = RegExp(r, "g");
		return function (n) {
			return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n
		}
	};
	m.escape = R(B), m.unescape = R(T), m.result = function (n, t, r) {
		var e = null == n ? void 0 : n[t];
		return e === void 0 && (e = r), m.isFunction(e) ? e.call(n) : e
	};
	var q = 0;
	m.uniqueId = function (n) {
		var t = ++q + "";
		return n ? n + t : t
	}, m.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
	var K = /(.)^/, z = {
		"'": "'",
		"\\": "\\",
		"\r": "r",
		"\n": "n",
		"\u2028": "u2028",
		"\u2029": "u2029"
	}, D = /\\|'|\r|\n|\u2028|\u2029/g, L = function (n) {
		return "\\" + z[n]
	};
	m.template = function (n, t, r) {
		!t && r && (t = r), t = m.defaults({}, t, m.templateSettings);
		var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"), u = 0, i = "__p+='";
		n.replace(e, function (t, r, e, o, a) {
			return i += n.slice(u, a).replace(D, L), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t
		}), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
		try {
			var o = new Function(t.variable || "obj", "_", i)
		} catch (a) {
			throw a.source = i, a
		}
		var c = function (n) {
			return o.call(this, n, m)
		}, f = t.variable || "obj";
		return c.source = "function(" + f + "){\n" + i + "}", c
	}, m.chain = function (n) {
		var t = m(n);
		return t._chain = !0, t
	};
	var P = function (n, t) {
		return n._chain ? m(t).chain() : t
	};
	m.mixin = function (n) {
		m.each(m.functions(n), function (t) {
			var r = m[t] = n[t];
			m.prototype[t] = function () {
				var n = [this._wrapped];
				return f.apply(n, arguments), P(this, r.apply(m, n))
			}
		})
	}, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) {
		var t = o[n];
		m.prototype[n] = function () {
			var r = this._wrapped;
			return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], P(this, r)
		}
	}), m.each(["concat", "join", "slice"], function (n) {
		var t = o[n];
		m.prototype[n] = function () {
			return P(this, t.apply(this._wrapped, arguments))
		}
	}), m.prototype.value = function () {
		return this._wrapped
	}, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function () {
		return "" + this._wrapped
	}, "function" == typeof define && define.amd && define("underscore", [], function () {
		return m
	})
}).call(this);
//# sourceMappingURL=underscore-min.map;
/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document)throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
	var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.3", m = function (a, b) {
		return new m.fn.init(a, b)
	}, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) {
		return b.toUpperCase()
	};
	m.fn = m.prototype = {
		jquery: l, constructor: m, selector: "", length: 0, toArray: function () {
			return d.call(this)
		}, get: function (a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
		}, pushStack: function (a) {
			var b = m.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		}, each: function (a, b) {
			return m.each(this, a, b)
		}, map: function (a) {
			return this.pushStack(m.map(this, function (b, c) {
				return a.call(b, c, b)
			}))
		}, slice: function () {
			return this.pushStack(d.apply(this, arguments))
		}, first: function () {
			return this.eq(0)
		}, last: function () {
			return this.eq(-1)
		}, eq: function (a) {
			var b = this.length, c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		}, end: function () {
			return this.prevObject || this.constructor(null)
		}, push: f, sort: c.sort, splice: c.splice
	}, m.extend = m.fn.extend = function () {
		var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h]))for (d in e)a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
		return g
	}, m.extend({
		expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
			throw new Error(a)
		}, noop: function () {
		}, isFunction: function (a) {
			return "function" === m.type(a)
		}, isArray: Array.isArray || function (a) {
			return "array" === m.type(a)
		}, isWindow: function (a) {
			return null != a && a == a.window
		}, isNumeric: function (a) {
			return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
		}, isEmptyObject: function (a) {
			var b;
			for (b in a)return !1;
			return !0
		}, isPlainObject: function (a) {
			var b;
			if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))return !1;
			try {
				if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))return !1
			} catch (c) {
				return !1
			}
			if (k.ownLast)for (b in a)return j.call(a, b);
			for (b in a);
			return void 0 === b || j.call(a, b)
		}, type: function (a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
		}, globalEval: function (b) {
			b && m.trim(b) && (a.execScript || function (b) {
				a.eval.call(a, b)
			})(b)
		}, camelCase: function (a) {
			return a.replace(o, "ms-").replace(p, q)
		}, nodeName: function (a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		}, each: function (a, b, c) {
			var d, e = 0, f = a.length, g = r(a);
			if (c) {
				if (g) {
					for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
				} else for (e in a)if (d = b.apply(a[e], c), d === !1)break
			} else if (g) {
				for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
			} else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
			return a
		}, trim: function (a) {
			return null == a ? "" : (a + "").replace(n, "")
		}, makeArray: function (a, b) {
			var c = b || [];
			return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
		}, inArray: function (a, b, c) {
			var d;
			if (b) {
				if (g)return g.call(b, a, c);
				for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
			}
			return -1
		}, merge: function (a, b) {
			var c = +b.length, d = 0, e = a.length;
			while (c > d)a[e++] = b[d++];
			if (c !== c)while (void 0 !== b[d])a[e++] = b[d++];
			return a.length = e, a
		}, grep: function (a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		}, map: function (a, b, c) {
			var d, f = 0, g = a.length, h = r(a), i = [];
			if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
			return e.apply([], i)
		}, guid: 1, proxy: function (a, b) {
			var c, e, f;
			return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
				return a.apply(b || this, c.concat(d.call(arguments)))
			}, e.guid = a.guid = a.guid || m.guid++, e) : void 0
		}, now: function () {
			return +new Date
		}, support: k
	}), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
		h["[object " + b + "]"] = b.toLowerCase()
	});
	function r(a) {
		var b = "length" in a && a.length, c = m.type(a);
		return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}

	var s = function (a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
			return a === b && (l = !0), 0
		}, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
			for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
			return -1
		}, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
			ID: new RegExp("^#(" + M + ")"),
			CLASS: new RegExp("^\\.(" + M + ")"),
			TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
			ATTR: new RegExp("^" + O),
			PSEUDO: new RegExp("^" + P),
			CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
			bool: new RegExp("^(?:" + K + ")$", "i"),
			needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
		}, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) {
			var d = "0x" + b - 65536;
			return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
		}, ea = function () {
			m()
		};
		try {
			H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
		} catch (fa) {
			H = {
				apply: E.length ? function (a, b) {
					G.apply(a, I.call(b))
				} : function (a, b) {
					var c = a.length, d = 0;
					while (a[c++] = b[d++]);
					a.length = c - 1
				}
			}
		}
		function ga(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w, x;
			if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)return d;
			if (!e && p) {
				if (11 !== k && (f = _.exec(a)))if (j = f[1]) {
					if (9 === k) {
						if (h = b.getElementById(j), !h || !h.parentNode)return d;
						if (h.id === j)return d.push(h), d
					} else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
				} else {
					if (f[2])return H.apply(d, b.getElementsByTagName(a)), d;
					if ((j = f[3]) && c.getElementsByClassName)return H.apply(d, b.getElementsByClassName(j)), d
				}
				if (c.qsa && (!q || !q.test(a))) {
					if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
						o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
						while (l--)o[l] = s + ra(o[l]);
						w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
					}
					if (x)try {
						return H.apply(d, w.querySelectorAll(x)), d
					} catch (y) {
					} finally {
						r || b.removeAttribute("id")
					}
				}
			}
			return i(a.replace(R, "$1"), b, d, e)
		}

		function ha() {
			var a = [];

			function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
			}

			return b
		}

		function ia(a) {
			return a[u] = !0, a
		}

		function ja(a) {
			var b = n.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function ka(a, b) {
			var c = a.split("|"), e = a.length;
			while (e--)d.attrHandle[c[e]] = b
		}

		function la(a, b) {
			var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
			if (d)return d;
			if (c)while (c = c.nextSibling)if (c === b)return -1;
			return a ? 1 : -1
		}

		function ma(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function na(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function oa(a) {
			return ia(function (b) {
				return b = +b, ia(function (c, d) {
					var e, f = a([], c.length, b), g = f.length;
					while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function pa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a
		}

		c = ga.support = {}, f = ga.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, m = ga.setDocument = function (a) {
			var b, e, g = a ? a.ownerDocument || a : v;
			return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
				return a.className = "i", !a.getAttribute("className")
			}), c.getElementsByTagName = ja(function (a) {
				return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
			}), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
				return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
			}), c.getById ? (d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(ca, da);
				return function (a) {
					return a.getAttribute("id") === b
				}
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(ca, da);
				return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
			} : function (a, b) {
				var c, d = [], e = 0, f = b.getElementsByTagName(a);
				if ("*" === a) {
					while (c = f[e++])1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
					return p ? b.getElementsByClassName(a) : void 0
				}, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
			}), ja(function (a) {
				var b = g.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
			})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function (a, b) {
				if (b)while (b = b.parentNode)if (b === a)return !0;
				return !1
			}, B = b ? function (a, b) {
				if (a === b)return l = !0, 0;
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
			} : function (a, b) {
				if (a === b)return l = !0, 0;
				var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
				if (!e || !f)return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
				if (e === f)return la(a, b);
				c = a;
				while (c = c.parentNode)h.unshift(c);
				c = b;
				while (c = c.parentNode)i.unshift(c);
				while (h[d] === i[d])d++;
				return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
			}, g) : n
		}, ga.matches = function (a, b) {
			return ga(a, null, null, b)
		}, ga.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
				var d = s.call(a, b);
				if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
			} catch (e) {
			}
			return ga(b, n, null, [a]).length > 0
		}, ga.contains = function (a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b)
		}, ga.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);
			var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
			return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
		}, ga.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, ga.uniqueSort = function (a) {
			var b, d = [], e = 0, f = 0;
			if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++])b === a[f] && (e = d.push(f));
				while (e--)a.splice(d[e], 1)
			}
			return k = null, a
		}, e = ga.getText = function (a) {
			var b, c = "", d = 0, f = a.nodeType;
			if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent)return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
				} else if (3 === f || 4 === f)return a.nodeValue
			} else while (b = a[d++])c += e(b);
			return c
		}, d = ga.selectors = {
			cacheLength: 50,
			createPseudo: ia,
			match: X,
			attrHandle: {},
			find: {},
			relative: {
				">": {dir: "parentNode", first: !0},
				" ": {dir: "parentNode"},
				"+": {dir: "previousSibling", first: !0},
				"~": {dir: "previousSibling"}
			},
			preFilter: {
				ATTR: function (a) {
					return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				}, CHILD: function (a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
				}, PSEUDO: function (a) {
					var b, c = !a[6] && a[2];
					return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function (a) {
					var b = a.replace(ca, da).toLowerCase();
					return "*" === a ? function () {
						return !0
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				}, CLASS: function (a) {
					var b = y[a + " "];
					return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
							return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
						})
				}, ATTR: function (a, b, c) {
					return function (d) {
						var e = ga.attr(d, a);
						return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
					}
				}, CHILD: function (a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
					return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode
					} : function (b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
						if (q) {
							if (f) {
								while (p) {
									l = b;
									while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
								while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
									k[a] = [w, n, m];
									break
								}
							} else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
							return m -= e, m === d || m % d === 0 && m / d >= 0
						}
					}
				}, PSEUDO: function (a, b) {
					var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
					return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
						var d, f = e(a, b), g = f.length;
						while (g--)d = J(a, f[g]), a[d] = !(c[d] = f[g])
					}) : function (a) {
						return e(a, 0, c)
					}) : e
				}
			},
			pseudos: {
				not: ia(function (a) {
					var b = [], c = [], d = h(a.replace(R, "$1"));
					return d[u] ? ia(function (a, b, c, e) {
						var f, g = d(a, null, e, []), h = a.length;
						while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function (a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
					}
				}), has: ia(function (a) {
					return function (b) {
						return ga(a, b).length > 0
					}
				}), contains: ia(function (a) {
					return a = a.replace(ca, da), function (b) {
						return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
					}
				}), lang: ia(function (a) {
					return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
						var c;
						do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
						return !1
					}
				}), target: function (b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				}, root: function (a) {
					return a === o
				}, focus: function (a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				}, enabled: function (a) {
					return a.disabled === !1
				}, disabled: function (a) {
					return a.disabled === !0
				}, checked: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				}, selected: function (a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				}, empty: function (a) {
					for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
					return !0
				}, parent: function (a) {
					return !d.pseudos.empty(a)
				}, header: function (a) {
					return Z.test(a.nodeName)
				}, input: function (a) {
					return Y.test(a.nodeName)
				}, button: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				}, text: function (a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				}, first: oa(function () {
					return [0]
				}), last: oa(function (a, b) {
					return [b - 1]
				}), eq: oa(function (a, b, c) {
					return [0 > c ? c + b : c]
				}), even: oa(function (a, b) {
					for (var c = 0; b > c; c += 2)a.push(c);
					return a
				}), odd: oa(function (a, b) {
					for (var c = 1; b > c; c += 2)a.push(c);
					return a
				}), lt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
					return a
				}), gt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
					return a
				})
			}
		}, d.pseudos.nth = d.pseudos.eq;
		for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = ma(b);
		for (b in{submit: !0, reset: !0})d.pseudos[b] = na(b);
		function qa() {
		}

		qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
			var c, e, f, g, h, i, j, k = z[a + " "];
			if (k)return b ? 0 : k.slice(0);
			h = a, i = [], j = d.preFilter;
			while (h) {
				(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
					value: c,
					type: e[0].replace(R, " ")
				}), h = h.slice(c.length));
				for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
					value: c,
					type: g,
					matches: e
				}), h = h.slice(c.length));
				if (!c)break
			}
			return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
		};
		function ra(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
			return d
		}

		function sa(a, b, c) {
			var d = b.dir, e = c && "parentNode" === d, f = x++;
			return b.first ? function (b, c, f) {
				while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
			} : function (b, c, g) {
				var h, i, j = [w, f];
				if (g) {
					while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
				} else while (b = b[d])if (1 === b.nodeType || e) {
					if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
					if (i[d] = j, j[2] = a(b, c, g))return !0
				}
			}
		}

		function ta(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;
				while (e--)if (!a[e](b, c, d))return !1;
				return !0
			} : a[0]
		}

		function ua(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++)ga(a, b[d], c);
			return c
		}

		function va(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function wa(a, b, c, d, e, f) {
			return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
				var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
				if (c && c(q, r, h, i), d) {
					j = va(r, n), d(j, [], h, i), k = j.length;
					while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
				}
				if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;
							while (k--)(l = r[k]) && j.push(q[k] = l);
							e(null, r = [], j, i)
						}
						k = r.length;
						while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
					}
				} else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
			})
		}

		function xa(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
				return a === b
			}, h, !0), l = sa(function (a) {
				return J(b, a) > -1
			}, h, !0), m = [function (a, c, d) {
				var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
				return b = null, e
			}]; f > i; i++)if (c = d.relative[a[i].type])m = [sa(ta(m), c)]; else {
				if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
					for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
					return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
				}
				m.push(c)
			}
			return ta(m)
		}

		function ya(a, b) {
			var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
				var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
				for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
					if (e && l) {
						m = 0;
						while (o = a[m++])if (o(l, g, h)) {
							i.push(l);
							break
						}
						k && (w = v)
					}
					c && ((l = !o && l) && p--, f && r.push(l))
				}
				if (p += q, c && q !== p) {
					m = 0;
					while (o = b[m++])o(r, s, g, h);
					if (f) {
						if (p > 0)while (q--)r[q] || s[q] || (s[q] = F.call(i));
						s = va(s)
					}
					H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
				}
				return k && (w = v, j = t), r
			};
			return c ? ia(f) : f
		}

		return h = ga.compile = function (a, b) {
			var c, d = [], e = [], f = A[a + " "];
			if (!f) {
				b || (b = g(a)), c = b.length;
				while (c--)f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
				f = A(a, ya(e, d)), f.selector = a
			}
			return f
		}, i = ga.select = function (a, b, e, f) {
			var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
			if (e = e || [], 1 === o.length) {
				if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)return e;
					n && (b = b.parentNode), a = a.slice(j.shift().value.length)
				}
				i = X.needsContext.test(a) ? 0 : j.length;
				while (i--) {
					if (k = j[i], d.relative[l = k.type])break;
					if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
						if (j.splice(i, 1), a = f.length && ra(j), !a)return H.apply(e, f), e;
						break
					}
				}
			}
			return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"))
		}), ja(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || ka("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), c.attributes && ja(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || ka("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), ja(function (a) {
			return null == a.getAttribute("disabled")
		}) || ka(K, function (a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), ga
	}(a);
	m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
	var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;

	function w(a, b, c) {
		if (m.isFunction(b))return m.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType)return m.grep(a, function (a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (v.test(b))return m.filter(b, a, c);
			b = m.filter(b, a)
		}
		return m.grep(a, function (a) {
			return m.inArray(a, b) >= 0 !== c
		})
	}

	m.filter = function (a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
			return 1 === a.nodeType
		}))
	}, m.fn.extend({
		find: function (a) {
			var b, c = [], d = this, e = d.length;
			if ("string" != typeof a)return this.pushStack(m(a).filter(function () {
				for (b = 0; e > b; b++)if (m.contains(d[b], this))return !0
			}));
			for (b = 0; e > b; b++)m.find(a, d[b], c);
			return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
		}, filter: function (a) {
			return this.pushStack(w(this, a || [], !1))
		}, not: function (a) {
			return this.pushStack(w(this, a || [], !0))
		}, is: function (a) {
			return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
		}
	});
	var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) {
		var c, d;
		if (!a)return this;
		if ("string" == typeof a) {
			if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
			if (c[1]) {
				if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))for (c in b)m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
				return this
			}
			if (d = y.getElementById(c[2]), d && d.parentNode) {
				if (d.id !== c[2])return x.find(a);
				this.length = 1, this[0] = d
			}
			return this.context = y, this.selector = a, this
		}
		return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
	};
	A.prototype = m.fn, x = m(y);
	var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
	m.extend({
		dir: function (a, b, c) {
			var d = [], e = a[b];
			while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))1 === e.nodeType && d.push(e), e = e[b];
			return d
		}, sibling: function (a, b) {
			for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), m.fn.extend({
		has: function (a) {
			var b, c = m(a, this), d = c.length;
			return this.filter(function () {
				for (b = 0; d > b; b++)if (m.contains(this, c[b]))return !0
			})
		}, closest: function (a, b) {
			for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
				f.push(c);
				break
			}
			return this.pushStack(f.length > 1 ? m.unique(f) : f)
		}, index: function (a) {
			return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		}, add: function (a, b) {
			return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
		}, addBack: function (a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	});
	function D(a, b) {
		do a = a[b]; while (a && 1 !== a.nodeType);
		return a
	}

	m.each({
		parent: function (a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		}, parents: function (a) {
			return m.dir(a, "parentNode")
		}, parentsUntil: function (a, b, c) {
			return m.dir(a, "parentNode", c)
		}, next: function (a) {
			return D(a, "nextSibling")
		}, prev: function (a) {
			return D(a, "previousSibling")
		}, nextAll: function (a) {
			return m.dir(a, "nextSibling")
		}, prevAll: function (a) {
			return m.dir(a, "previousSibling")
		}, nextUntil: function (a, b, c) {
			return m.dir(a, "nextSibling", c)
		}, prevUntil: function (a, b, c) {
			return m.dir(a, "previousSibling", c)
		}, siblings: function (a) {
			return m.sibling((a.parentNode || {}).firstChild, a)
		}, children: function (a) {
			return m.sibling(a.firstChild)
		}, contents: function (a) {
			return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
		}
	}, function (a, b) {
		m.fn[a] = function (c, d) {
			var e = m.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
		}
	});
	var E = /\S+/g, F = {};

	function G(a) {
		var b = F[a] = {};
		return m.each(a.match(E) || [], function (a, c) {
			b[c] = !0
		}), b
	}

	m.Callbacks = function (a) {
		a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
		var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
			for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
				c = !1;
				break
			}
			b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
		}, k = {
			add: function () {
				if (h) {
					var d = h.length;
					!function f(b) {
						m.each(b, function (b, c) {
							var d = m.type(c);
							"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
						})
					}(arguments), b ? e = h.length : c && (g = d, j(c))
				}
				return this
			}, remove: function () {
				return h && m.each(arguments, function (a, c) {
					var d;
					while ((d = m.inArray(c, h, d)) > -1)h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
				}), this
			}, has: function (a) {
				return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
			}, empty: function () {
				return h = [], e = 0, this
			}, disable: function () {
				return h = i = c = void 0, this
			}, disabled: function () {
				return !h
			}, lock: function () {
				return i = void 0, c || k.disable(), this
			}, locked: function () {
				return !i
			}, fireWith: function (a, c) {
				return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
			}, fire: function () {
				return k.fireWith(this, arguments), this
			}, fired: function () {
				return !!d
			}
		};
		return k
	}, m.extend({
		Deferred: function (a) {
			var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], c = "pending", d = {
				state: function () {
					return c
				}, always: function () {
					return e.done(arguments).fail(arguments), this
				}, then: function () {
					var a = arguments;
					return m.Deferred(function (c) {
						m.each(b, function (b, f) {
							var g = m.isFunction(a[b]) && a[b];
							e[f[1]](function () {
								var a = g && g.apply(this, arguments);
								a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
							})
						}), a = null
					}).promise()
				}, promise: function (a) {
					return null != a ? m.extend(a, d) : d
				}
			}, e = {};
			return d.pipe = d.then, m.each(b, function (a, f) {
				var g = f[2], h = f[3];
				d[f[1]] = g.add, h && g.add(function () {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		}, when: function (a) {
			var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) {
				return function (e) {
					b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
				}
			}, i, j, k;
			if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
			return f || g.resolveWith(k, c), g.promise()
		}
	});
	var H;
	m.fn.ready = function (a) {
		return m.ready.promise().done(a), this
	}, m.extend({
		isReady: !1, readyWait: 1, holdReady: function (a) {
			a ? m.readyWait++ : m.ready(!0)
		}, ready: function (a) {
			if (a === !0 ? !--m.readyWait : !m.isReady) {
				if (!y.body)return setTimeout(m.ready);
				m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
			}
		}
	});
	function I() {
		y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
	}

	function J() {
		(y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
	}

	m.ready.promise = function (b) {
		if (!H)if (H = m.Deferred(), "complete" === y.readyState)setTimeout(m.ready); else if (y.addEventListener)y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1); else {
			y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
			var c = !1;
			try {
				c = null == a.frameElement && y.documentElement
			} catch (d) {
			}
			c && c.doScroll && !function e() {
				if (!m.isReady) {
					try {
						c.doScroll("left")
					} catch (a) {
						return setTimeout(e, 50)
					}
					I(), m.ready()
				}
			}()
		}
		return H.promise(b)
	};
	var K = "undefined", L;
	for (L in m(k))break;
	k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
		var a, b, c, d;
		c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
	}), function () {
		var a = y.createElement("div");
		if (null == k.deleteExpando) {
			k.deleteExpando = !0;
			try {
				delete a.test
			} catch (b) {
				k.deleteExpando = !1
			}
		}
		a = null
	}(), m.acceptData = function (a) {
		var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
		return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
	};
	var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;

	function O(a, b, c) {
		if (void 0 === c && 1 === a.nodeType) {
			var d = "data-" + b.replace(N, "-$1").toLowerCase();
			if (c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
				} catch (e) {
				}
				m.data(a, b, c)
			} else c = void 0
		}
		return c
	}

	function P(a) {
		var b;
		for (b in a)if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)return !1;

		return !0
	}

	function Q(a, b, d, e) {
		if (m.acceptData(a)) {
			var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
			if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: m.noop}), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
		}
	}

	function R(a, b, c) {
		if (m.acceptData(a)) {
			var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
			if (g[h]) {
				if (b && (d = c ? g[h] : g[h].data)) {
					m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
					while (e--)delete d[b[e]];
					if (c ? !P(d) : !m.isEmptyObject(d))return
				}
				(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
			}
		}
	}

	m.extend({
		cache: {},
		noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
		hasData: function (a) {
			return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
		},
		data: function (a, b, c) {
			return Q(a, b, c)
		},
		removeData: function (a, b) {
			return R(a, b)
		},
		_data: function (a, b, c) {
			return Q(a, b, c, !0)
		},
		_removeData: function (a, b) {
			return R(a, b, !0)
		}
	}), m.fn.extend({
		data: function (a, b) {
			var c, d, e, f = this[0], g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
					c = g.length;
					while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
					m._data(f, "parsedAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function () {
				m.data(this, a)
			}) : arguments.length > 1 ? this.each(function () {
				m.data(this, a, b)
			}) : f ? O(f, a, m.data(f, a)) : void 0
		}, removeData: function (a) {
			return this.each(function () {
				m.removeData(this, a)
			})
		}
	}), m.extend({
		queue: function (a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
		}, dequeue: function (a, b) {
			b = b || "fx";
			var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () {
				m.dequeue(a, b)
			};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		}, _queueHooks: function (a, b) {
			var c = b + "queueHooks";
			return m._data(a, c) || m._data(a, c, {
					empty: m.Callbacks("once memory").add(function () {
						m._removeData(a, b + "queue"), m._removeData(a, c)
					})
				})
		}
	}), m.fn.extend({
		queue: function (a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = m.queue(this, a, b);
				m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
			})
		}, dequeue: function (a) {
			return this.each(function () {
				m.dequeue(this, a)
			})
		}, clearQueue: function (a) {
			return this.queue(a || "fx", [])
		}, promise: function (a, b) {
			var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () {
				--d || e.resolveWith(f, [f])
			};
			"string" != typeof a && (b = a, a = void 0), a = a || "fx";
			while (g--)c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function (a, b) {
		return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
	}, V = m.access = function (a, b, c, d, e, f, g) {
		var h = 0, i = a.length, j = null == c;
		if ("object" === m.type(c)) {
			e = !0;
			for (h in c)m.access(a, b, h, c[h], !0, f, g)
		} else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
				return j.call(m(a), c)
			})), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	}, W = /^(?:checkbox|radio)$/i;
	!function () {
		var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
		if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
				k.noCloneEvent = !1
			}), b.cloneNode(!0).click()), null == k.deleteExpando) {
			k.deleteExpando = !0;
			try {
				delete b.test
			} catch (d) {
				k.deleteExpando = !1
			}
		}
	}(), function () {
		var b, c, d = y.createElement("div");
		for (b in{
			submit: !0,
			change: !0,
			focusin: !0
		})c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
		d = null
	}();
	var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;

	function aa() {
		return !0
	}

	function ba() {
		return !1
	}

	function ca() {
		try {
			return y.activeElement
		} catch (a) {
		}
	}

	m.event = {
		global: {},
		add: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
			if (r) {
				c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
					return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
				}, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
				while (h--)f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
					type: o,
					origType: q,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && m.expr.match.needsContext.test(e),
					namespace: p.join(".")
				}, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
				a = null
			}
		},
		remove: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
			if (r && (k = r.events)) {
				b = (b || "").match(E) || [""], j = b.length;
				while (j--)if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
					l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
					while (f--)g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
					i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
				} else for (o in k)m.event.remove(a, o + b[j], c, d, !0);
				m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
			}
		},
		trigger: function (b, c, d, e) {
			var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
			if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
				if (!e && !k.noBubble && !m.isWindow(d)) {
					for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), l = h;
					l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
				}
				n = 0;
				while ((h = o[n++]) && !b.isPropagationStopped())b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
				if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
					l = d[g], l && (d[g] = null), m.event.triggered = p;
					try {
						d[p]()
					} catch (r) {
					}
					m.event.triggered = void 0, l && (d[g] = l)
				}
				return b.result
			}
		},
		dispatch: function (a) {
			a = m.event.fix(a);
			var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = m.event.handlers.call(this, a, j), b = 0;
				while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, g = 0;
					while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
				}
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function (a, b) {
			var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
				for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
				e.length && g.push({elem: i, handlers: e})
			}
			return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
		},
		fix: function (a) {
			if (a[m.expando])return a;
			var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
			g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
			while (b--)c = d[b], a[c] = f[c];
			return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "), filter: function (a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (a, b) {
				var c, d, e, f = b.button, g = b.fromElement;
				return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		},
		special: {
			load: {noBubble: !0}, focus: {
				trigger: function () {
					if (this !== ca() && this.focus)try {
						return this.focus(), !1
					} catch (a) {
					}
				}, delegateType: "focusin"
			}, blur: {
				trigger: function () {
					return this === ca() && this.blur ? (this.blur(), !1) : void 0
				}, delegateType: "focusout"
			}, click: {
				trigger: function () {
					return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				}, _default: function (a) {
					return m.nodeName(a.target, "a")
				}
			}, beforeunload: {
				postDispatch: function (a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function (a, b, c, d) {
			var e = m.extend(new m.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
			d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, m.removeEvent = y.removeEventListener ? function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	} : function (a, b, c) {
		var d = "on" + b;
		a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
	}, m.Event = function (a, b) {
		return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
	}, m.Event.prototype = {
		isDefaultPrevented: ba,
		isPropagationStopped: ba,
		isImmediatePropagationStopped: ba,
		preventDefault: function () {
			var a = this.originalEvent;
			this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function () {
			var a = this.originalEvent;
			this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function () {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, m.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (a, b) {
		m.event.special[a] = {
			delegateType: b, bindType: b, handle: function (a) {
				var c, d = this, e = a.relatedTarget, f = a.handleObj;
				return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), k.submitBubbles || (m.event.special.submit = {
		setup: function () {
			return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
				var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
				c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
					a._submit_bubble = !0
				}), m._data(c, "submitBubbles", !0))
			})
		}, postDispatch: function (a) {
			a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
		}, teardown: function () {
			return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
		}
	}), k.changeBubbles || (m.event.special.change = {
		setup: function () {
			return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
				"checked" === a.originalEvent.propertyName && (this._just_changed = !0)
			}), m.event.add(this, "click._change", function (a) {
				this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
			})), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
				var b = a.target;
				X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
					!this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
				}), m._data(b, "changeBubbles", !0))
			})
		}, handle: function (a) {
			var b = a.target;
			return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
		}, teardown: function () {
			return m.event.remove(this, "._change"), !X.test(this.nodeName)
		}
	}), k.focusinBubbles || m.each({focus: "focusin", blur: "focusout"}, function (a, b) {
		var c = function (a) {
			m.event.simulate(b, a.target, m.event.fix(a), !0)
		};
		m.event.special[b] = {
			setup: function () {
				var d = this.ownerDocument || this, e = m._data(d, b);
				e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
			}, teardown: function () {
				var d = this.ownerDocument || this, e = m._data(d, b) - 1;
				e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
			}
		}
	}), m.fn.extend({
		on: function (a, b, c, d, e) {
			var f, g;
			if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);
				for (f in a)this.on(f, b, c, a[f], e);
				return this
			}
			if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = ba; else if (!d)return this;
			return 1 === e && (g = d, d = function (a) {
				return m().off(a), g.apply(this, arguments)
			}, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
				m.event.add(this, a, d, c, b)
			})
		}, one: function (a, b, c, d) {
			return this.on(a, b, c, d, 1)
		}, off: function (a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj)return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a)this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function () {
				m.event.remove(this, a, c, b)
			})
		}, trigger: function (a, b) {
			return this.each(function () {
				m.event.trigger(a, b, this)
			})
		}, triggerHandler: function (a, b) {
			var c = this[0];
			return c ? m.event.trigger(a, b, c, !0) : void 0
		}
	});
	function da(a) {
		var b = ea.split("|"), c = a.createDocumentFragment();
		if (c.createElement)while (b.length)c.createElement(b.pop());
		return c
	}

	var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fa = / jQuery\d+="(?:null|\d+)"/g, ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"), ha = /^\s+/, ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ja = /<([\w:]+)/, ka = /<tbody/i, la = /<|&#?\w+;/, ma = /<(?:script|style|link)/i, na = /checked\s*(?:[^=]|=\s*.checked.)/i, oa = /^$|\/(?:java|ecma)script/i, pa = /^true\/(.*)/, qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ra = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	}, sa = da(y), ta = sa.appendChild(y.createElement("div"));
	ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;
	function ua(a, b) {
		var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
		if (!f)for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
		return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
	}

	function va(a) {
		W.test(a.type) && (a.defaultChecked = a.checked)
	}

	function wa(a, b) {
		return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function xa(a) {
		return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
	}

	function ya(a) {
		var b = pa.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function za(a, b) {
		for (var c, d = 0; null != (c = a[d]); d++)m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
	}

	function Aa(a, b) {
		if (1 === b.nodeType && m.hasData(a)) {
			var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h)for (d = 0, e = h[c].length; e > d; d++)m.event.add(b, c, h[c][d])
			}
			g.data && (g.data = m.extend({}, g.data))
		}
	}

	function Ba(a, b) {
		var c, d, e;
		if (1 === b.nodeType) {
			if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
				e = m._data(b);
				for (d in e.events)m.removeEvent(b, d, e.handle);
				b.removeAttribute(m.expando)
			}
			"script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
		}
	}

	m.extend({
		clone: function (a, b, c) {
			var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
			if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g)d[g] && Ba(e, d[g]);
			if (b)if (c)for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++)Aa(e, d[g]); else Aa(a, f);
			return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f
		}, buildFragment: function (a, b, c, d) {
			for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)if (f = a[q], f || 0 === f)if ("object" === m.type(f))m.merge(p, f.nodeType ? [f] : f); else if (la.test(f)) {
				h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];
				while (e--)h = h.lastChild;
				if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
					f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
					while (e--)m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
				}
				m.merge(p, h.childNodes), h.textContent = "";
				while (h.firstChild)h.removeChild(h.firstChild);
				h = o.lastChild
			} else p.push(b.createTextNode(f));
			h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
			while (f = p[q++])if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
				e = 0;
				while (f = h[e++])oa.test(f.type || "") && c.push(f)
			}
			return h = null, o
		}, cleanData: function (a, b) {
			for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
				if (g.events)for (e in g.events)n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
				j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
			}
		}
	}), m.fn.extend({
		text: function (a) {
			return V(this, function (a) {
				return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
			}, null, a, arguments.length)
		}, append: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = wa(this, a);
					b.appendChild(a)
				}
			})
		}, prepend: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = wa(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		}, before: function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		}, after: function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		}, remove: function (a, b) {
			for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
			return this
		}, empty: function () {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && m.cleanData(ua(a, !1));
				while (a.firstChild)a.removeChild(a.firstChild);
				a.options && m.nodeName(a, "select") && (a.options.length = 0)
			}
			return this
		}, clone: function (a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
				return m.clone(this, a, b)
			})
		}, html: function (a) {
			return V(this, function (a) {
				var b = this[0] || {}, c = 0, d = this.length;
				if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
				if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
					a = a.replace(ia, "<$1></$2>");
					try {
						for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {
					}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		}, replaceWith: function () {
			var a = arguments[0];
			return this.domManip(arguments, function (b) {
				a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this)
			}), a && (a.length || a.nodeType) ? this : this.remove()
		}, detach: function (a) {
			return this.remove(a, !0)
		}, domManip: function (a, b) {
			a = e.apply([], a);
			var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
			if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p))return this.each(function (c) {
				var d = n.eq(c);
				q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
			});
			if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
				for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++)d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
				if (f)for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++)d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
				i = c = null
			}
			return this
		}
	}), m.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (a, b) {
		m.fn[a] = function (a) {
			for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
			return this.pushStack(e)
		}
	});
	var Ca, Da = {};

	function Ea(b, c) {
		var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
		return e.detach(), f
	}

	function Fa(a) {
		var b = y, c = Da[a];
		return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c
	}

	!function () {
		var a;
		k.shrinkWrapBlocks = function () {
			if (null != a)return a;
			a = !1;
			var b, c, d;
			return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
		}
	}();
	var Ga = /^margin/, Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ia, Ja, Ka = /^(top|right|bottom|left)$/;
	a.getComputedStyle ? (Ia = function (b) {
		return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
	}, Ja = function (a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
	}) : y.documentElement.currentStyle && (Ia = function (a) {
		return a.currentStyle
	}, Ja = function (a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
	});
	function La(a, b) {
		return {
			get: function () {
				var c = a();
				if (null != c)return c ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}

	!function () {
		var b, c, d, e, f, g, h;
		if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
			c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
				reliableHiddenOffsets: function () {
					return null == g && i(), g
				}, boxSizingReliable: function () {
					return null == f && i(), f
				}, pixelPosition: function () {
					return null == e && i(), e
				}, reliableMarginRight: function () {
					return null == h && i(), h
				}
			});
			function i() {
				var b, c, d, i;
				c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {width: "4px"}).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
			}
		}
	}(), m.swap = function (a, b, c, d) {
		var e, f, g = {};
		for (f in b)g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b)a.style[f] = g[f];
		return e
	};
	var Ma = /alpha\([^)]*\)/i, Na = /opacity\s*=\s*([^)]*)/, Oa = /^(none|table(?!-c[ea]).+)/, Pa = new RegExp("^(" + S + ")(.*)$", "i"), Qa = new RegExp("^([+-])=(" + S + ")", "i"), Ra = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	}, Sa = {letterSpacing: "0", fontWeight: "400"}, Ta = ["Webkit", "O", "Moz", "ms"];

	function Ua(a, b) {
		if (b in a)return b;
		var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ta.length;
		while (e--)if (b = Ta[e] + c, b in a)return b;
		return d
	}

	function Va(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
		for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}

	function Wa(a, b, c) {
		var d = Pa.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function Xa(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
		return g
	}

	function Ya(a, b, c) {
		var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ia(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e))return e;
			d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}

	m.extend({
		cssHooks: {
			opacity: {
				get: function (a, b) {
					if (b) {
						var c = Ja(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
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
		cssProps: {"float": k.cssFloat ? "cssFloat" : "styleFloat"},
		style: function (a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = m.camelCase(b), i = a.style;
				if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c)return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
				if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))try {
					i[b] = c
				} catch (j) {
				}
			}
		},
		css: function (a, b, c, d) {
			var e, f, g, h = m.camelCase(b);
			return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
		}
	}), m.each(["height", "width"], function (a, b) {
		m.cssHooks[b] = {
			get: function (a, c, d) {
				return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function () {
					return Ya(a, b, d)
				}) : Ya(a, b, d) : void 0
			}, set: function (a, c, d) {
				var e = d && Ia(a);
				return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), k.opacity || (m.cssHooks.opacity = {
		get: function (a, b) {
			return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		}, set: function (a, b) {
			var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
			c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
		}
	}), m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
		return b ? m.swap(a, {display: "inline-block"}, Ja, [a, "marginRight"]) : void 0
	}), m.each({margin: "", padding: "", border: "Width"}, function (a, b) {
		m.cssHooks[a + b] = {
			expand: function (c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, Ga.test(a) || (m.cssHooks[a + b].set = Wa)
	}), m.fn.extend({
		css: function (a, b) {
			return V(this, function (a, b, c) {
				var d, e, f = {}, g = 0;
				if (m.isArray(b)) {
					for (d = Ia(a), e = b.length; e > g; g++)f[b[g]] = m.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
			}, a, b, arguments.length > 1)
		}, show: function () {
			return Va(this, !0)
		}, hide: function () {
			return Va(this)
		}, toggle: function (a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				U(this) ? m(this).show() : m(this).hide()
			})
		}
	});
	function Za(a, b, c, d, e) {
		return new Za.prototype.init(a, b, c, d, e)
	}

	m.Tween = Za, Za.prototype = {
		constructor: Za, init: function (a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
		}, cur: function () {
			var a = Za.propHooks[this.prop];
			return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
		}, run: function (a) {
			var b, c = Za.propHooks[this.prop];
			return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this
		}
	}, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
		_default: {
			get: function (a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			}, set: function (a) {
				m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
		set: function (a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, m.easing = {
		linear: function (a) {
			return a
		}, swing: function (a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, m.fx = Za.prototype.init, m.fx.step = {};
	var $a, _a, ab = /^(?:toggle|show|hide)$/, bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cb = /queueHooks$/, db = [ib], eb = {
		"*": [function (a, b) {
			var c = this.createTween(a, b), d = c.cur(), e = bb.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)), h = 1, i = 20;
			if (g && g[3] !== f) {
				f = f || g[3], e = e || [], g = +d || 1;
				do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
			}
			return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
		}]
	};

	function fb() {
		return setTimeout(function () {
			$a = void 0
		}), $a = m.now()
	}

	function gb(a, b) {
		var c, d = {height: a}, e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = T[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}

	function hb(a, b, c) {
		for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
	}

	function ib(a, b, c) {
		var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
		c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
			h.unqueued || i()
		}), h.unqueued++, n.always(function () {
			n.always(function () {
				h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
			p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
		}));
		for (d in b)if (e = b[d], ab.exec(e)) {
			if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
				if ("show" !== e || !r || void 0 === r[d])continue;
				q = !0
			}
			o[d] = r && r[d] || m.style(a, d)
		} else j = void 0;
		if (m.isEmptyObject(o))"inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j); else {
			r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
				m(a).hide()
			}), n.done(function () {
				var b;
				m._removeData(a, "fxshow");
				for (b in o)m.style(a, b, o[b])
			});
			for (d in o)g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function jb(a, b) {
		var c, d, e, f, g;
		for (c in a)if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
			f = g.expand(f), delete a[d];
			for (c in f)c in a || (a[c] = f[c], b[c] = e)
		} else b[d] = e
	}

	function kb(a, b, c) {
		var d, e, f = 0, g = db.length, h = m.Deferred().always(function () {
			delete i.elem
		}), i = function () {
			if (e)return !1;
			for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
			return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
		}, j = h.promise({
			elem: a,
			props: m.extend({}, b),
			opts: m.extend(!0, {specialEasing: {}}, c),
			originalProperties: b,
			originalOptions: c,
			startTime: $a || fb(),
			duration: c.duration,
			tweens: [],
			createTween: function (b, c) {
				var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
				return j.tweens.push(d), d
			},
			stop: function (b) {
				var c = 0, d = b ? j.tweens.length : 0;
				if (e)return this;
				for (e = !0; d > c; c++)j.tweens[c].run(1);
				return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
			}
		}), k = j.props;
		for (jb(k, j.opts.specialEasing); g > f; f++)if (d = db[f].call(j, a, k, j.opts))return d;
		return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}

	m.Animation = m.extend(kb, {
		tweener: function (a, b) {
			m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
			for (var c, d = 0, e = a.length; e > d; d++)c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b)
		}, prefilter: function (a, b) {
			b ? db.unshift(a) : db.push(a)
		}
	}), m.speed = function (a, b, c) {
		var d = a && "object" == typeof a ? m.extend({}, a) : {
			complete: c || !c && b || m.isFunction(a) && a,
			duration: a,
			easing: c && b || b && !m.isFunction(b) && b
		};
		return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
			m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
		}, d
	}, m.fn.extend({
		fadeTo: function (a, b, c, d) {
			return this.filter(U).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
		}, animate: function (a, b, c, d) {
			var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () {
				var b = kb(this, m.extend({}, a), f);
				(e || m._data(this, "finish")) && b.stop(!0)
			};
			return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		}, stop: function (a, b, c) {
			var d = function (a) {
				var b = a.stop;
				delete a.stop, b(c)
			};
			return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
				var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
				if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && cb.test(e) && d(g[e]);
				for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				(b || !c) && m.dequeue(this, a)
			})
		}, finish: function (a) {
			return a !== !1 && (a = a || "fx"), this.each(function () {
				var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
				for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
				delete c.finish
			})
		}
	}), m.each(["toggle", "show", "hide"], function (a, b) {
		var c = m.fn[b];
		m.fn[b] = function (a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
		}
	}), m.each({
		slideDown: gb("show"),
		slideUp: gb("hide"),
		slideToggle: gb("toggle"),
		fadeIn: {opacity: "show"},
		fadeOut: {opacity: "hide"},
		fadeToggle: {opacity: "toggle"}
	}, function (a, b) {
		m.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), m.timers = [], m.fx.tick = function () {
		var a, b = m.timers, c = 0;
		for ($a = m.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1);
		b.length || m.fx.stop(), $a = void 0
	}, m.fx.timer = function (a) {
		m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
	}, m.fx.interval = 13, m.fx.start = function () {
		_a || (_a = setInterval(m.fx.tick, m.fx.interval))
	}, m.fx.stop = function () {
		clearInterval(_a), _a = null
	}, m.fx.speeds = {slow: 600, fast: 200, _default: 400}, m.fn.delay = function (a, b) {
		return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
			var d = setTimeout(b, a);
			c.stop = function () {
				clearTimeout(d)
			}
		})
	}, function () {
		var a, b, c, d, e;
		b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
	}();
	var lb = /\r/g;
	m.fn.extend({
		val: function (a) {
			var b, c, d, e = this[0];
			{
				if (arguments.length)return d = m.isFunction(a), this.each(function (c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
						return null == a ? "" : a + ""
					})), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if (e)return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
			}
		}
	}), m.extend({
		valHooks: {
			option: {
				get: function (a) {
					var b = m.find.attr(a, "value");
					return null != b ? b : m.trim(m.text(a))
				}
			}, select: {
				get: function (a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
						if (b = m(c).val(), f)return b;
						g.push(b)
					}
					return g
				}, set: function (a, b) {
					var c, d, e = a.options, f = m.makeArray(b), g = e.length;
					while (g--)if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0)try {
						d.selected = c = !0
					} catch (h) {
						d.scrollHeight
					} else d.selected = !1;
					return c || (a.selectedIndex = -1), e
				}
			}
		}
	}), m.each(["radio", "checkbox"], function () {
		m.valHooks[this] = {
			set: function (a, b) {
				return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
			}
		}, k.checkOn || (m.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	});
	var mb, nb, ob = m.expr.attrHandle, pb = /^(?:checked|selected)$/i, qb = k.getSetAttribute, rb = k.input;
	m.fn.extend({
		attr: function (a, b) {
			return V(this, m.attr, a, b, arguments.length > 1)
		}, removeAttr: function (a) {
			return this.each(function () {
				m.removeAttr(this, a)
			})
		}
	}), m.extend({
		attr: function (a, b, c) {
			var d, e, f = a.nodeType;
			if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
		}, removeAttr: function (a, b) {
			var c, d, e = 0, f = b && b.match(E);
			if (f && 1 === a.nodeType)while (c = f[e++])d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d)
		}, attrHooks: {
			type: {
				set: function (a, b) {
					if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		}
	}), nb = {
		set: function (a, b, c) {
			return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
		}
	}, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = ob[b] || m.find.attr;
		ob[b] = rb && qb || !pb.test(b) ? function (a, b, d) {
			var e, f;
			return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e
		} : function (a, b, c) {
			return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
		}
	}), rb && qb || (m.attrHooks.value = {
		set: function (a, b, c) {
			return m.nodeName(a, "input") ? void(a.defaultValue = b) : mb && mb.set(a, b, c)
		}
	}), qb || (mb = {
		set: function (a, b, c) {
			var d = a.getAttributeNode(c);
			return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
		}
	}, ob.id = ob.name = ob.coords = function (a, b, c) {
		var d;
		return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
	}, m.valHooks.button = {
		get: function (a, b) {
			var c = a.getAttributeNode(b);
			return c && c.specified ? c.value : void 0
		}, set: mb.set
	}, m.attrHooks.contenteditable = {
		set: function (a, b, c) {
			mb.set(a, "" === b ? !1 : b, c)
		}
	}, m.each(["width", "height"], function (a, b) {
		m.attrHooks[b] = {
			set: function (a, c) {
				return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
			}
		}
	})), k.style || (m.attrHooks.style = {
		get: function (a) {
			return a.style.cssText || void 0
		}, set: function (a, b) {
			return a.style.cssText = b + ""
		}
	});
	var sb = /^(?:input|select|textarea|button|object)$/i, tb = /^(?:a|area)$/i;
	m.fn.extend({
		prop: function (a, b) {
			return V(this, m.prop, a, b, arguments.length > 1)
		}, removeProp: function (a) {
			return a = m.propFix[a] || a, this.each(function () {
				try {
					this[a] = void 0, delete this[a]
				} catch (b) {
				}
			})
		}
	}), m.extend({
		propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
			var d, e, f, g = a.nodeType;
			if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		}, propHooks: {
			tabIndex: {
				get: function (a) {
					var b = m.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		}
	}), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
		m.propHooks[b] = {
			get: function (a) {
				return a.getAttribute(b, 4)
			}
		}
	}), k.optSelected || (m.propHooks.selected = {
		get: function (a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	}), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		m.propFix[this.toLowerCase()] = this
	}), k.enctype || (m.propFix.enctype = "encoding");
	var ub = /[\t\r\n\f]/g;
	m.fn.extend({
		addClass: function (a) {
			var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
			if (m.isFunction(a))return this.each(function (b) {
				m(this).addClass(a.call(this, b, this.className))
			});
			if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
				f = 0;
				while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
				g = m.trim(d), c.className !== g && (c.className = g)
			}
			return this
		}, removeClass: function (a) {
			var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
			if (m.isFunction(a))return this.each(function (b) {
				m(this).removeClass(a.call(this, b, this.className))
			});
			if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
				f = 0;
				while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
				g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
			}
			return this
		}, toggleClass: function (a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
				m(this).toggleClass(a.call(this, c, this.className, b), b)
			} : function () {
				if ("string" === c) {
					var b, d = 0, e = m(this), f = a.match(E) || [];
					while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
				} else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
			})
		}, hasClass: function (a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0)return !0;
			return !1
		}
	}), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		m.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), m.fn.extend({
		hover: function (a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}, bind: function (a, b, c) {
			return this.on(a, null, b, c)
		}, unbind: function (a, b) {
			return this.off(a, null, b)
		}, delegate: function (a, b, c, d) {
			return this.on(b, a, c, d)
		}, undelegate: function (a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var vb = m.now(), wb = /\?/, xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	m.parseJSON = function (b) {
		if (a.JSON && a.JSON.parse)return a.JSON.parse(b + "");
		var c, d = null, e = m.trim(b + "");
		return e && !m.trim(e.replace(xb, function (a, b, e, f) {
			return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
		})) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
	}, m.parseXML = function (b) {
		var c, d;
		if (!b || "string" != typeof b)return null;
		try {
			a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
		} catch (e) {
			c = void 0
		}
		return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
	};
	var yb, zb, Ab = /#.*$/, Bb = /([?&])_=[^&]*/, Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Eb = /^(?:GET|HEAD)$/, Fb = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hb = {}, Ib = {}, Jb = "*/".concat("*");
	try {
		zb = location.href
	} catch (Kb) {
		zb = y.createElement("a"), zb.href = "", zb = zb.href
	}
	yb = Gb.exec(zb.toLowerCase()) || [];
	function Lb(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0, f = b.toLowerCase().match(E) || [];
			if (m.isFunction(c))while (d = f[e++])"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function Mb(a, b, c, d) {
		var e = {}, f = a === Ib;

		function g(h) {
			var i;
			return e[h] = !0, m.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}

		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}

	function Nb(a, b) {
		var c, d, e = m.ajaxSettings.flatOptions || {};
		for (d in b)void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
		return c && m.extend(!0, a, c), a
	}

	function Ob(a, b, c) {
		var d, e, f, g, h = a.contents, i = a.dataTypes;
		while ("*" === i[0])i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
		if (e)for (g in h)if (h[g] && h[g].test(e)) {
			i.unshift(g);
			break
		}
		if (i[0] in c)f = i[0]; else {
			for (g in c) {
				if (!i[0] || a.converters[g + " " + i[0]]) {
					f = g;
					break
				}
				d || (d = g)
			}
			f = f || d
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function Pb(a, b, c, d) {
		var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
		if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
		f = k.shift();
		while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
				g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
				break
			}
			if (g !== !0)if (g && a["throws"])b = g(b); else try {
				b = g(b)
			} catch (l) {
				return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
			}
		}
		return {state: "success", data: b}
	}

	m.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: zb,
			type: "GET",
			isLocal: Db.test(yb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Jb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {xml: /xml/, html: /html/, json: /json/},
			responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
			converters: {"* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML},
			flatOptions: {url: !0, context: !0}
		},
		ajaxSetup: function (a, b) {
			return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
		},
		ajaxPrefilter: Lb(Hb),
		ajaxTransport: Lb(Ib),
		ajax: function (a, b) {
			"object" == typeof a && (b = a, a = void 0), b = b || {};
			var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
				readyState: 0,
				getResponseHeader: function (a) {
					var b;
					if (2 === t) {
						if (!j) {
							j = {};
							while (b = Cb.exec(f))j[b[1].toLowerCase()] = b[2]
						}
						b = j[a.toLowerCase()]
					}
					return null == b ? null : b
				},
				getAllResponseHeaders: function () {
					return 2 === t ? f : null
				},
				setRequestHeader: function (a, b) {
					var c = a.toLowerCase();
					return t || (a = s[c] = s[c] || a, r[a] = b), this
				},
				overrideMimeType: function (a) {
					return t || (k.mimeType = a), this
				},
				statusCode: function (a) {
					var b;
					if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
					return this
				},
				abort: function (a) {
					var b = a || u;
					return i && i.abort(b), x(0, b), this
				}
			};
			if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t)return v;
			h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
			for (d in k.headers)v.setRequestHeader(d, k.headers[d]);
			if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
			u = "abort";
			for (d in{success: 1, error: 1, complete: 1})v[d](k[d]);
			if (i = Mb(Ib, k, b, v)) {
				v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
					v.abort("timeout")
				}, k.timeout));
				try {
					t = 1, i.send(r, x)
				} catch (w) {
					if (!(2 > t))throw w;
					x(-1, w)
				}
			} else x(-1, "No Transport");
			function x(a, b, c, d) {
				var j, r, s, u, w, x = b;
				2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
			}

			return v
		},
		getJSON: function (a, b, c) {
			return m.get(a, b, c, "json")
		},
		getScript: function (a, b) {
			return m.get(a, void 0, b, "script")
		}
	}), m.each(["get", "post"], function (a, b) {
		m[b] = function (a, c, d, e) {
			return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			})
		}
	}), m._evalUrl = function (a) {
		return m.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
	}, m.fn.extend({
		wrapAll: function (a) {
			if (m.isFunction(a))return this.each(function (b) {
				m(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
					var a = this;
					while (a.firstChild && 1 === a.firstChild.nodeType)a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		}, wrapInner: function (a) {
			return this.each(m.isFunction(a) ? function (b) {
				m(this).wrapInner(a.call(this, b))
			} : function () {
				var b = m(this), c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		}, wrap: function (a) {
			var b = m.isFunction(a);
			return this.each(function (c) {
				m(this).wrapAll(b ? a.call(this, c) : a)
			})
		}, unwrap: function () {
			return this.parent().each(function () {
				m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
			}).end()
		}
	}), m.expr.filters.hidden = function (a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
	}, m.expr.filters.visible = function (a) {
		return !m.expr.filters.hidden(a)
	};
	var Qb = /%20/g, Rb = /\[\]$/, Sb = /\r?\n/g, Tb = /^(?:submit|button|image|reset|file)$/i, Ub = /^(?:input|select|textarea|keygen)/i;

	function Vb(a, b, c, d) {
		var e;
		if (m.isArray(b))m.each(b, function (b, e) {
			c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		}); else if (c || "object" !== m.type(b))d(a, b); else for (e in b)Vb(a + "[" + e + "]", b[e], c, d)
	}

	m.param = function (a, b) {
		var c, d = [], e = function (a, b) {
			b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
		};
		if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a))m.each(a, function () {
			e(this.name, this.value)
		}); else for (c in a)Vb(c, a[c], b, e);
		return d.join("&").replace(Qb, "+")
	}, m.fn.extend({
		serialize: function () {
			return m.param(this.serializeArray())
		}, serializeArray: function () {
			return this.map(function () {
				var a = m.prop(this, "elements");
				return a ? m.makeArray(a) : this
			}).filter(function () {
				var a = this.type;
				return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
			}).map(function (a, b) {
				var c = m(this).val();
				return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
					return {name: b.name, value: a.replace(Sb, "\r\n")}
				}) : {name: b.name, value: c.replace(Sb, "\r\n")}
			}).get()
		}
	}), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
	} : Zb;
	var Wb = 0, Xb = {}, Yb = m.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function () {
		for (var a in Xb)Xb[a](void 0, !0)
	}), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function (a) {
		if (!a.crossDomain || k.cors) {
			var b;
			return {
				send: function (c, d) {
					var e, f = a.xhr(), g = ++Wb;
					if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
					a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
					for (e in c)void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
					f.send(a.hasContent && a.data || null), b = function (c, e) {
						var h, i, j;
						if (b && (e || 4 === f.readyState))if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e)4 !== f.readyState && f.abort(); else {
							j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
							try {
								i = f.statusText
							} catch (k) {
								i = ""
							}
							h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
						}
						j && d(h, i, j, f.getAllResponseHeaders())
					}, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
				}, abort: function () {
					b && b(void 0, !0)
				}
			}
		}
	});
	function Zb() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {
		}
	}

	function $b() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {
		}
	}

	m.ajaxSetup({
		accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
		contents: {script: /(?:java|ecma)script/},
		converters: {
			"text script": function (a) {
				return m.globalEval(a), a
			}
		}
	}), m.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), m.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, c = y.head || m("head")[0] || y.documentElement;
			return {
				send: function (d, e) {
					b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
						(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
					}, c.insertBefore(b, c.firstChild)
				}, abort: function () {
					b && b.onload(void 0, !0)
				}
			}
		}
	});
	var _b = [], ac = /(=)\?(?=&|$)|\?\?/;
	m.ajaxSetup({
		jsonp: "callback", jsonpCallback: function () {
			var a = _b.pop() || m.expando + "_" + vb++;
			return this[a] = !0, a
		}
	}), m.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || m.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments
		}, d.always(function () {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), m.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a)return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || y;
		var d = u.exec(a), e = !c && [];
		return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
	};
	var bc = m.fn.load;
	m.fn.load = function (a, b, c) {
		if ("string" != typeof a && bc)return bc.apply(this, arguments);
		var d, e, f, g = this, h = a.indexOf(" ");
		return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
			url: a,
			type: f,
			dataType: "html",
			data: b
		}).done(function (a) {
			e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
		}).complete(c && function (a, b) {
				g.each(c, e || [a.responseText, b, a])
			}), this
	}, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		m.fn[b] = function (a) {
			return this.on(b, a)
		}
	}), m.expr.filters.animated = function (a) {
		return m.grep(m.timers, function (b) {
			return a === b.elem
		}).length
	};
	var cc = a.document.documentElement;

	function dc(a) {
		return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}

	m.offset = {
		setOffset: function (a, b, c) {
			var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
		}
	}, m.fn.extend({
		offset: function (a) {
			if (arguments.length)return void 0 === a ? this : this.each(function (b) {
				m.offset.setOffset(this, a, b)
			});
			var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
			if (f)return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), {
				top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
				left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
			}) : d
		}, position: function () {
			if (this[0]) {
				var a, b, c = {top: 0, left: 0}, d = this[0];
				return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - c.top - m.css(d, "marginTop", !0),
					left: b.left - c.left - m.css(d, "marginLeft", !0)
				}
			}
		}, offsetParent: function () {
			return this.map(function () {
				var a = this.offsetParent || cc;
				while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))a = a.offsetParent;
				return a || cc
			})
		}
	}), m.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
		var c = /Y/.test(b);
		m.fn[a] = function (d) {
			return V(this, function (a, d, e) {
				var f = dc(a);
				return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
			}, a, d, arguments.length, null)
		}
	}), m.each(["top", "left"], function (a, b) {
		m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
			return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
		})
	}), m.each({Height: "height", Width: "width"}, function (a, b) {
		m.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
			m.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
				return V(this, function (b, c, d) {
					var e;
					return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), m.fn.size = function () {
		return this.length
	}, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return m
	});
	var ec = a.jQuery, fc = a.$;
	return m.noConflict = function (b) {
		return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m
	}, typeof b === K && (a.jQuery = a.$ = m), m
});

//     Backbone.js 1.0.0

//     (c) 2010-2011 Jeremy Ashkenas, DocumentCloud Inc.
//     (c) 2011-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function () {

	// Initial Setup
	// -------------

	// Save a reference to the global object (`window` in the browser, `exports`
	// on the server).
	var root = this;

	// Save the previous value of the `Backbone` variable, so that it can be
	// restored later on, if `noConflict` is used.
	var previousBackbone = root.Backbone;

	// Create local references to array methods we'll want to use later.
	var array = [];
	var push = array.push;
	var slice = array.slice;
	var splice = array.splice;

	// The top-level namespace. All public Backbone classes and modules will
	// be attached to this. Exported for both the browser and the server.
	var Backbone;
	if (typeof exports !== 'undefined') {
		Backbone = exports;
	} else {
		Backbone = root.Backbone = {};
	}

	// Current version of the library. Keep in sync with `package.json`.
	Backbone.VERSION = '1.0.0';

	// Require Underscore, if we're on the server, and it's not already present.
	var _ = root._;
	if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

	// For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	// the `$` variable.
	Backbone.$ = root.jQuery || root.Zepto || root.ender || root.$;

	// Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	// to its previous owner. Returns a reference to this Backbone object.
	Backbone.noConflict = function () {
		root.Backbone = previousBackbone;
		return this;
	};

	// Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	// will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	// set a `X-Http-Method-Override` header.
	Backbone.emulateHTTP = false;

	// Turn on `emulateJSON` to support legacy servers that can't deal with direct
	// `application/json` requests ... will encode the body as
	// `application/x-www-form-urlencoded` instead and will send the model in a
	// form param named `model`.
	Backbone.emulateJSON = false;

	// Backbone.Events
	// ---------------

	// A module that can be mixed in to *any object* in order to provide it with
	// custom events. You may bind with `on` or remove with `off` callback
	// functions to an event; `trigger`-ing an event fires all callbacks in
	// succession.
	//
	//     var object = {};
	//     _.extend(object, Backbone.Events);
	//     object.on('expand', function(){ alert('expanded'); });
	//     object.trigger('expand');
	//
	var Events = Backbone.Events = {

		// Bind an event to a `callback` function. Passing `"all"` will bind
		// the callback to all events fired.
		on: function (name, callback, context) {
			if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
			this._events || (this._events = {});
			var events = this._events[name] || (this._events[name] = []);
			events.push({callback: callback, context: context, ctx: context || this});
			return this;
		},

		// Bind an event to only be triggered a single time. After the first time
		// the callback is invoked, it will be removed.
		once: function (name, callback, context) {
			if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
			var self = this;
			var once = _.once(function () {
				self.off(name, once);
				callback.apply(this, arguments);
			});
			once._callback = callback;
			return this.on(name, once, context);
		},

		// Remove one or many callbacks. If `context` is null, removes all
		// callbacks with that function. If `callback` is null, removes all
		// callbacks for the event. If `name` is null, removes all bound
		// callbacks for all events.
		off: function (name, callback, context) {
			var retain, ev, events, names, i, l, j, k;
			if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
			if (!name && !callback && !context) {
				this._events = {};
				return this;
			}

			names = name ? [name] : _.keys(this._events);
			for (i = 0, l = names.length; i < l; i++) {
				name = names[i];
				if (events = this._events[name]) {
					this._events[name] = retain = [];
					if (callback || context) {
						for (j = 0, k = events.length; j < k; j++) {
							ev = events[j];
							if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
								(context && context !== ev.context)) {
								retain.push(ev);
							}
						}
					}
					if (!retain.length) delete this._events[name];
				}
			}

			return this;
		},

		// Trigger one or many events, firing all bound callbacks. Callbacks are
		// passed the same arguments as `trigger` is, apart from the event name
		// (unless you're listening on `"all"`, which will cause your callback to
		// receive the true name of the event as the first argument).
		trigger: function (name) {
			if (!this._events) return this;
			var args = slice.call(arguments, 1);
			if (!eventsApi(this, 'trigger', name, args)) return this;
			var events = this._events[name];
			var allEvents = this._events.all;
			if (events) triggerEvents(events, args);
			if (allEvents) triggerEvents(allEvents, arguments);
			return this;
		},

		// Tell this object to stop listening to either specific events ... or
		// to every object it's currently listening to.
		stopListening: function (obj, name, callback) {
			var listeners = this._listeners;
			if (!listeners) return this;
			var deleteListener = !name && !callback;
			if (typeof name === 'object') callback = this;
			if (obj) (listeners = {})[obj._listenerId] = obj;
			for (var id in listeners) {
				listeners[id].off(name, callback, this);
				if (deleteListener) delete this._listeners[id];
			}
			return this;
		}

	};

	// Regular expression used to split event strings.
	var eventSplitter = /\s+/;

	// Implement fancy features of the Events API such as multiple event
	// names `"change blur"` and jQuery-style event maps `{change: action}`
	// in terms of the existing API.
	var eventsApi = function (obj, action, name, rest) {
		if (!name) return true;

		// Handle event maps.
		if (typeof name === 'object') {
			for (var key in name) {
				obj[action].apply(obj, [key, name[key]].concat(rest));
			}
			return false;
		}

		// Handle space separated event names.
		if (eventSplitter.test(name)) {
			var names = name.split(eventSplitter);
			for (var i = 0, l = names.length; i < l; i++) {
				obj[action].apply(obj, [names[i]].concat(rest));
			}
			return false;
		}

		return true;
	};

	// A difficult-to-believe, but optimized internal dispatch function for
	// triggering events. Tries to keep the usual cases speedy (most internal
	// Backbone events have 3 arguments).
	var triggerEvents = function (events, args) {
		var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
		switch (args.length) {
			case 0:
				while (++i < l) (ev = events[i]).callback.call(ev.ctx);
				return;
			case 1:
				while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1);
				return;
			case 2:
				while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2);
				return;
			case 3:
				while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
				return;
			default:
				while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
		}
	};

	var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

	// Inversion-of-control versions of `on` and `once`. Tell *this* object to
	// listen to an event in another object ... keeping track of what it's
	// listening to.
	_.each(listenMethods, function (implementation, method) {
		Events[method] = function (obj, name, callback) {
			var listeners = this._listeners || (this._listeners = {});
			var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
			listeners[id] = obj;
			if (typeof name === 'object') callback = this;
			obj[implementation](name, callback, this);
			return this;
		};
	});

	// Aliases for backwards compatibility.
	Events.bind = Events.on;
	Events.unbind = Events.off;

	// Allow the `Backbone` object to serve as a global event bus, for folks who
	// want global "pubsub" in a convenient place.
	_.extend(Backbone, Events);

	// Backbone.Model
	// --------------

	// Backbone **Models** are the basic data object in the framework --
	// frequently representing a row in a table in a database on your server.
	// A discrete chunk of data and a bunch of useful, related methods for
	// performing computations and transformations on that data.

	// Create a new model with the specified attributes. A client id (`cid`)
	// is automatically generated and assigned for you.
	var Model = Backbone.Model = function (attributes, options) {
		var defaults;
		var attrs = attributes || {};
		options || (options = {});
		this.cid = _.uniqueId('c');
		this.attributes = {};
		if (options.collection) this.collection = options.collection;
		if (options.parse) attrs = this.parse(attrs, options) || {};
		options._attrs || (options._attrs = attrs);
		if (defaults = _.result(this, 'defaults')) {
			attrs = _.defaults({}, attrs, defaults);
		}
		this.set(attrs, options);
		this.changed = {};
		this.initialize.apply(this, arguments);
	};

	// Attach all inheritable methods to the Model prototype.
	_.extend(Model.prototype, Events, {

		// A hash of attributes whose current and previous value differ.
		changed: null,

		// The value returned during the last failed validation.
		validationError: null,

		// The default name for the JSON `id` attribute is `"id"`. MongoDB and
		// CouchDB users may want to set this to `"_id"`.
		idAttribute: 'id',

		// Initialize is an empty function by default. Override it with your own
		// initialization logic.
		initialize: function () {
		},

		// Return a copy of the model's `attributes` object.
		toJSON: function (options) {
			return _.clone(this.attributes);
		},

		// Proxy `Backbone.sync` by default -- but override this if you need
		// custom syncing semantics for *this* particular model.
		sync: function () {
			return Backbone.sync.apply(this, arguments);
		},

		// Get the value of an attribute.
		get: function (attr) {
			return this.attributes[attr];
		},

		// Get the HTML-escaped value of an attribute.
		escape: function (attr) {
			return _.escape(this.get(attr));
		},

		// Returns `true` if the attribute contains a value that is not null
		// or undefined.
		has: function (attr) {
			return this.get(attr) != null;
		},

		// Set a hash of model attributes on the object, firing `"change"`. This is
		// the core primitive operation of a model, updating the data and notifying
		// anyone who needs to know about the change in state. The heart of the beast.
		set: function (key, val, options) {
			var attr, attrs, unset, changes, silent, changing, prev, current;
			if (key == null) return this;

			// Handle both `"key", value` and `{key: value}` -style arguments.
			if (typeof key === 'object') {
				attrs = key;
				options = val;
			} else {
				(attrs = {})[key] = val;
			}

			options || (options = {});

			// Run validation.
			if (!this._validate(attrs, options)) return false;

			// Extract attributes and options.
			unset = options.unset;
			silent = options.silent;
			changes = [];
			changing = this._changing;
			this._changing = true;

			if (!changing) {
				this._previousAttributes = _.clone(this.attributes);
				this.changed = {};
			}
			current = this.attributes, prev = this._previousAttributes;

			// Check for changes of `id`.
			if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

			// For each `set` attribute, update or delete the current value.
			for (attr in attrs) {
				val = attrs[attr];
				if (!_.isEqual(current[attr], val)) changes.push(attr);
				if (!_.isEqual(prev[attr], val)) {
					this.changed[attr] = val;
				} else {
					delete this.changed[attr];
				}
				unset ? delete current[attr] : current[attr] = val;
			}

			// Trigger all relevant attribute changes.
			if (!silent) {
				if (changes.length) this._pending = true;
				for (var i = 0, l = changes.length; i < l; i++) {
					this.trigger('change:' + changes[i], this, current[changes[i]], options);
				}
			}

			// You might be wondering why there's a `while` loop here. Changes can
			// be recursively nested within `"change"` events.
			if (changing) return this;
			if (!silent) {
				while (this._pending) {
					this._pending = false;
					this.trigger('change', this, options);
				}
			}
			this._pending = false;
			this._changing = false;
			return this;
		},

		// Remove an attribute from the model, firing `"change"`. `unset` is a noop
		// if the attribute doesn't exist.
		unset: function (attr, options) {
			return this.set(attr, void 0, _.extend({}, options, {unset: true}));
		},

		// Clear all attributes on the model, firing `"change"`.
		clear: function (options) {
			var attrs = {};
			for (var key in this.attributes) attrs[key] = void 0;
			return this.set(attrs, _.extend({}, options, {unset: true}));
		},

		// Determine if the model has changed since the last `"change"` event.
		// If you specify an attribute name, determine if that attribute has changed.
		hasChanged: function (attr) {
			if (attr == null) return !_.isEmpty(this.changed);
			return _.has(this.changed, attr);
		},

		// Return an object containing all the attributes that have changed, or
		// false if there are no changed attributes. Useful for determining what
		// parts of a view need to be updated and/or what attributes need to be
		// persisted to the server. Unset attributes will be set to undefined.
		// You can also pass an attributes object to diff against the model,
		// determining if there *would be* a change.
		changedAttributes: function (diff) {
			if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
			var val, changed = false;
			var old = this._changing ? this._previousAttributes : this.attributes;
			for (var attr in diff) {
				if (_.isEqual(old[attr], (val = diff[attr]))) continue;
				(changed || (changed = {}))[attr] = val;
			}
			return changed;
		},

		// Get the previous value of an attribute, recorded at the time the last
		// `"change"` event was fired.
		previous: function (attr) {
			if (attr == null || !this._previousAttributes) return null;
			return this._previousAttributes[attr];
		},

		// Get all of the attributes of the model at the time of the previous
		// `"change"` event.
		previousAttributes: function () {
			return _.clone(this._previousAttributes);
		},

		// Fetch the model from the server. If the server's representation of the
		// model differs from its current attributes, they will be overridden,
		// triggering a `"change"` event.
		fetch: function (options) {
			options = options ? _.clone(options) : {};
			if (options.parse === void 0) options.parse = true;
			var model = this;
			var success = options.success;
			options.success = function (resp) {
				if (!model.set(model.parse(resp, options), options)) return false;
				if (success) success(model, resp, options);
				model.trigger('sync', model, resp, options);
			};
			wrapError(this, options);
			return this.sync('read', this, options);
		},

		// Set a hash of model attributes, and sync the model to the server.
		// If the server returns an attributes hash that differs, the model's
		// state will be `set` again.
		save: function (key, val, options) {
			var attrs, method, xhr, attributes = this.attributes;

			// Handle both `"key", value` and `{key: value}` -style arguments.
			if (key == null || typeof key === 'object') {
				attrs = key;
				options = val;
			} else {
				(attrs = {})[key] = val;
			}

			options = _.extend({validate: true}, options);

			// If we're not waiting and attributes exist, save acts as
			// `set(attr).save(null, opts)` with validation. Otherwise, check if
			// the model will be valid when the attributes, if any, are set.
			if (attrs && !options.wait) {
				if (!this.set(attrs, options)) return false;
			} else {
				if (!this._validate(attrs, options)) return false;
			}

			// Set temporary attributes if `{wait: true}`.
			if (attrs && options.wait) {
				this.attributes = _.extend({}, attributes, attrs);
			}

			// After a successful server-side save, the client is (optionally)
			// updated with the server-side state.
			if (options.parse === void 0) options.parse = true;
			var model = this;
			var success = options.success;
			options.success = function (resp) {
				// Ensure attributes are restored during synchronous saves.
				model.attributes = attributes;
				var serverAttrs = model.parse(resp, options);
				if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
				if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
					return false;
				}
				if (success) success(model, resp, options);
				model.trigger('sync', model, resp, options);
			};
			wrapError(this, options);

			method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
			if (method === 'patch') options.attrs = attrs;
			xhr = this.sync(method, this, options);

			// Restore attributes.
			if (attrs && options.wait) this.attributes = attributes;

			return xhr;
		},

		// Destroy this model on the server if it was already persisted.
		// Optimistically removes the model from its collection, if it has one.
		// If `wait: true` is passed, waits for the server to respond before removal.
		destroy: function (options) {
			options = options ? _.clone(options) : {};
			var model = this;
			var success = options.success;

			var destroy = function () {
				model.trigger('destroy', model, model.collection, options);
			};

			options.success = function (resp) {
				if (options.wait || model.isNew()) destroy();
				if (success) success(model, resp, options);
				if (!model.isNew()) model.trigger('sync', model, resp, options);
			};

			if (this.isNew()) {
				options.success();
				return false;
			}
			wrapError(this, options);

			var xhr = this.sync('delete', this, options);
			if (!options.wait) destroy();
			return xhr;
		},

		// Default URL for the model's representation on the server -- if you're
		// using Backbone's restful methods, override this to change the endpoint
		// that will be called.
		url: function () {
			var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
			if (this.isNew()) return base;
			return base + (base.charAt(base.length - 1) === '/' ? '' : '/') + encodeURIComponent(this.id);
		},

		// **parse** converts a response into the hash of attributes to be `set` on
		// the model. The default implementation is just to pass the response along.
		parse: function (resp, options) {
			return resp;
		},

		// Create a new model with identical attributes to this one.
		clone: function () {
			return new this.constructor(this.attributes);
		},

		// A model is new if it has never been saved to the server, and lacks an id.
		isNew: function () {
			return this.id == null;
		},

		// Check if the model is currently in a valid state.
		isValid: function (options) {
			return this._validate({}, _.extend(options || {}, {validate: true}));
		},

		// Run validation against the next complete set of model attributes,
		// returning `true` if all is well. Otherwise, fire an `"invalid"` event.
		_validate: function (attrs, options) {
			if (!options.validate || !this.validate) return true;
			attrs = _.extend({}, this.attributes, attrs);
			var error = this.validationError = this.validate(attrs, options) || null;
			if (!error) return true;
			this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
			return false;
		}

	});

	// Underscore methods that we want to implement on the Model.
	var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

	// Mix in each Underscore method as a proxy to `Model#attributes`.
	_.each(modelMethods, function (method) {
		Model.prototype[method] = function () {
			var args = slice.call(arguments);
			args.unshift(this.attributes);
			return _[method].apply(_, args);
		};
	});

	// Backbone.Collection
	// -------------------

	// If models tend to represent a single row of data, a Backbone Collection is
	// more analagous to a table full of data ... or a small slice or page of that
	// table, or a collection of rows that belong together for a particular reason
	// -- all of the messages in this particular folder, all of the documents
	// belonging to this particular author, and so on. Collections maintain
	// indexes of their models, both in order, and for lookup by `id`.

	// Create a new **Collection**, perhaps to contain a specific type of `model`.
	// If a `comparator` is specified, the Collection will maintain
	// its models in sort order, as they're added and removed.
	var Collection = Backbone.Collection = function (models, options) {
		options || (options = {});
		if (options.model) this.model = options.model;
		if (options.comparator !== void 0) this.comparator = options.comparator;
		this._reset();
		this.initialize.apply(this, arguments);
		if (models) this.reset(models, _.extend({silent: true}, options));
	};

	// Default options for `Collection#set`.
	var setOptions = {add: true, remove: true, merge: true};
	var addOptions = {add: true, remove: false};

	// Define the Collection's inheritable methods.
	_.extend(Collection.prototype, Events, {

		// The default model for a collection is just a **Backbone.Model**.
		// This should be overridden in most cases.
		model: Model,

		// Initialize is an empty function by default. Override it with your own
		// initialization logic.
		initialize: function () {
		},

		// The JSON representation of a Collection is an array of the
		// models' attributes.
		toJSON: function (options) {
			return this.map(function (model) {
				return model.toJSON(options);
			});
		},

		// Proxy `Backbone.sync` by default.
		sync: function () {
			return Backbone.sync.apply(this, arguments);
		},

		// Add a model, or list of models to the set.
		add: function (models, options) {
			return this.set(models, _.extend({merge: false}, options, addOptions));
		},

		// Remove a model, or a list of models from the set.
		remove: function (models, options) {
			models = _.isArray(models) ? models.slice() : [models];
			options || (options = {});
			var i, l, index, model;
			for (i = 0, l = models.length; i < l; i++) {
				model = this.get(models[i]);
				if (!model) continue;
				delete this._byId[model.id];
				delete this._byId[model.cid];
				index = this.indexOf(model);
				this.models.splice(index, 1);
				this.length--;
				if (!options.silent) {
					options.index = index;
					model.trigger('remove', model, this, options);
				}
				this._removeReference(model);
			}
			return this;
		},

		// Update a collection by `set`-ing a new list of models, adding new ones,
		// removing models that are no longer present, and merging models that
		// already exist in the collection, as necessary. Similar to **Model#set**,
		// the core operation for updating the data contained by the collection.
		set: function (models, options) {
			options = _.defaults({}, options, setOptions);
			if (options.parse) models = this.parse(models, options);
			if (!_.isArray(models)) models = models ? [models] : [];
			var i, l, model, attrs, existing, sort;
			var at = options.at;
			var sortable = this.comparator && (at == null) && options.sort !== false;
			var sortAttr = _.isString(this.comparator) ? this.comparator : null;
			var toAdd = [], toRemove = [], modelMap = {};
			var add = options.add, merge = options.merge, remove = options.remove;
			var order = !sortable && add && remove ? [] : false;

			// Turn bare objects into model references, and prevent invalid models
			// from being added.
			for (i = 0, l = models.length; i < l; i++) {
				if (!(model = this._prepareModel(attrs = models[i], options))) continue;

				// If a duplicate is found, prevent it from being added and
				// optionally merge it into the existing model.
				if (existing = this.get(model)) {
					if (remove) modelMap[existing.cid] = true;
					if (merge) {
						attrs = attrs === model ? model.attributes : options._attrs;
						existing.set(attrs, options);
						if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
					}

					// This is a new model, push it to the `toAdd` list.
				} else if (add) {
					toAdd.push(model);

					// Listen to added models' events, and index models for lookup by
					// `id` and by `cid`.
					model.on('all', this._onModelEvent, this);
					this._byId[model.cid] = model;
					if (model.id != null) this._byId[model.id] = model;
				}
				if (order) order.push(existing || model);
				delete options._attrs;
			}

			// Remove nonexistent models if appropriate.
			if (remove) {
				for (i = 0, l = this.length; i < l; ++i) {
					if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
				}
				if (toRemove.length) this.remove(toRemove, options);
			}

			// See if sorting is needed, update `length` and splice in new models.
			if (toAdd.length || (order && order.length)) {
				if (sortable) sort = true;
				this.length += toAdd.length;
				if (at != null) {
					splice.apply(this.models, [at, 0].concat(toAdd));
				} else {
					if (order) this.models.length = 0;
					push.apply(this.models, order || toAdd);
				}
			}

			// Silently sort the collection if appropriate.
			if (sort) this.sort({silent: true});

			if (options.silent) return this;

			// Trigger `add` events.
			for (i = 0, l = toAdd.length; i < l; i++) {
				(model = toAdd[i]).trigger('add', model, this, options);
			}

			// Trigger `sort` if the collection was sorted.
			if (sort || (order && order.length)) this.trigger('sort', this, options);
			return this;
		},

		// When you have more items than you want to add or remove individually,
		// you can reset the entire set with a new list of models, without firing
		// any granular `add` or `remove` events. Fires `reset` when finished.
		// Useful for bulk operations and optimizations.
		reset: function (models, options) {
			options || (options = {});
			for (var i = 0, l = this.models.length; i < l; i++) {
				this._removeReference(this.models[i]);
			}
			options.previousModels = this.models;
			this._reset();
			this.add(models, _.extend({silent: true}, options));
			if (!options.silent) this.trigger('reset', this, options);
			return this;
		},

		// Add a model to the end of the collection.
		push: function (model, options) {
			model = this._prepareModel(model, options);
			this.add(model, _.extend({at: this.length}, options));
			return model;
		},

		// Remove a model from the end of the collection.
		pop: function (options) {
			var model = this.at(this.length - 1);
			this.remove(model, options);
			return model;
		},

		// Add a model to the beginning of the collection.
		unshift: function (model, options) {
			model = this._prepareModel(model, options);
			this.add(model, _.extend({at: 0}, options));
			return model;
		},

		// Remove a model from the beginning of the collection.
		shift: function (options) {
			var model = this.at(0);
			this.remove(model, options);
			return model;
		},

		// Slice out a sub-array of models from the collection.
		slice: function () {
			return slice.apply(this.models, arguments);
		},

		// Get a model from the set by id.
		get: function (obj) {
			if (obj == null) return void 0;
			return this._byId[obj.id] || this._byId[obj.cid] || this._byId[obj];
		},

		// Get the model at the given index.
		at: function (index) {
			return this.models[index];
		},

		// Return models with matching attributes. Useful for simple cases of
		// `filter`.
		where: function (attrs, first) {
			if (_.isEmpty(attrs)) return first ? void 0 : [];
			return this[first ? 'find' : 'filter'](function (model) {
				for (var key in attrs) {
					if (attrs[key] !== model.get(key)) return false;
				}
				return true;
			});
		},

		// Return the first model with matching attributes. Useful for simple cases
		// of `find`.
		findWhere: function (attrs) {
			return this.where(attrs, true);
		},

		// Force the collection to re-sort itself. You don't need to call this under
		// normal circumstances, as the set will maintain sort order as each item
		// is added.
		sort: function (options) {
			if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
			options || (options = {});

			// Run sort based on type of `comparator`.
			if (_.isString(this.comparator) || this.comparator.length === 1) {
				this.models = this.sortBy(this.comparator, this);
			} else {
				this.models.sort(_.bind(this.comparator, this));
			}

			if (!options.silent) this.trigger('sort', this, options);
			return this;
		},

		// Figure out the smallest index at which a model should be inserted so as
		// to maintain order.
		sortedIndex: function (model, value, context) {
			value || (value = this.comparator);
			var iterator = _.isFunction(value) ? value : function (model) {
				return model.get(value);
			};
			return _.sortedIndex(this.models, model, iterator, context);
		},

		// Pluck an attribute from each model in the collection.
		pluck: function (attr) {
			return _.invoke(this.models, 'get', attr);
		},

		// Fetch the default set of models for this collection, resetting the
		// collection when they arrive. If `reset: true` is passed, the response
		// data will be passed through the `reset` method instead of `set`.
		fetch: function (options) {
			options = options ? _.clone(options) : {};
			if (options.parse === void 0) options.parse = true;
			var success = options.success;
			var collection = this;
			options.success = function (resp) {
				var method = options.reset ? 'reset' : 'set';
				collection[method](resp, options);
				if (success) success(collection, resp, options);
				collection.trigger('sync', collection, resp, options);
			};
			wrapError(this, options);
			return this.sync('read', this, options);
		},

		// Create a new instance of a model in this collection. Add the model to the
		// collection immediately, unless `wait: true` is passed, in which case we
		// wait for the server to agree.
		create: function (model, options) {
			options = options ? _.clone(options) : {};
			if (!(model = this._prepareModel(model, options))) return false;
			if (!options.wait) this.add(model, options);
			var collection = this;
			var success = options.success;
			options.success = function (model, resp, options) {
				if (options.wait) collection.add(model, options);
				if (success) success(model, resp, options);
			};
			model.save(null, options);
			return model;
		},

		// **parse** converts a response into a list of models to be added to the
		// collection. The default implementation is just to pass it through.
		parse: function (resp, options) {
			return resp;
		},

		// Create a new collection with an identical list of models as this one.
		clone: function () {
			return new this.constructor(this.models);
		},

		// Private method to reset all internal state. Called when the collection
		// is first initialized or reset.
		_reset: function () {
			this.length = 0;
			this.models = [];
			this._byId = {};
		},

		// Prepare a hash of attributes (or other model) to be added to this
		// collection.
		_prepareModel: function (attrs, options) {
			if (attrs instanceof Model) {
				if (!attrs.collection) attrs.collection = this;
				return attrs;
			}
			options || (options = {});
			options.collection = this;
			var model = new this.model(attrs, options);
			if (!model.validationError) return model;
			this.trigger('invalid', this, attrs, options);
			return false;
		},

		// Internal method to sever a model's ties to a collection.
		_removeReference: function (model) {
			if (this === model.collection) delete model.collection;
			model.off('all', this._onModelEvent, this);
		},

		// Internal method called every time a model in the set fires an event.
		// Sets need to update their indexes when models change ids. All other
		// events simply proxy through. "add" and "remove" events that originate
		// in other collections are ignored.
		_onModelEvent: function (event, model, collection, options) {
			if ((event === 'add' || event === 'remove') && collection !== this) return;
			if (event === 'destroy') this.remove(model, options);
			if (model && event === 'change:' + model.idAttribute) {
				delete this._byId[model.previous(model.idAttribute)];
				if (model.id != null) this._byId[model.id] = model;
			}
			this.trigger.apply(this, arguments);
		}

	});

	// Underscore methods that we want to implement on the Collection.
	// 90% of the core usefulness of Backbone Collections is actually implemented
	// right here:
	var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
		'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
		'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
		'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
		'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
		'lastIndexOf', 'isEmpty', 'chain'];

	// Mix in each Underscore method as a proxy to `Collection#models`.
	_.each(methods, function (method) {
		Collection.prototype[method] = function () {
			var args = slice.call(arguments);
			args.unshift(this.models);
			return _[method].apply(_, args);
		};
	});

	// Underscore methods that take a property name as an argument.
	var attributeMethods = ['groupBy', 'countBy', 'sortBy'];

	// Use attributes instead of properties.
	_.each(attributeMethods, function (method) {
		Collection.prototype[method] = function (value, context) {
			var iterator = _.isFunction(value) ? value : function (model) {
				return model.get(value);
			};
			return _[method](this.models, iterator, context);
		};
	});

	// Backbone.View
	// -------------

	// Backbone Views are almost more convention than they are actual code. A View
	// is simply a JavaScript object that represents a logical chunk of UI in the
	// DOM. This might be a single item, an entire list, a sidebar or panel, or
	// even the surrounding frame which wraps your whole app. Defining a chunk of
	// UI as a **View** allows you to define your DOM events declaratively, without
	// having to worry about render order ... and makes it easy for the view to
	// react to specific changes in the state of your models.

	// Options with special meaning *(e.g. model, collection, id, className)* are
	// attached directly to the view.  See `viewOptions` for an exhaustive
	// list.

	// Creating a Backbone.View creates its initial element outside of the DOM,
	// if an existing element is not provided...
	var View = Backbone.View = function (options) {
		this.cid = _.uniqueId('view');
		options || (options = {});
		_.extend(this, _.pick(options, viewOptions));
		this._ensureElement();
		this.initialize.apply(this, arguments);
		this.delegateEvents();
	};

	// Cached regex to split keys for `delegate`.
	var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	// List of view options to be merged as properties.
	var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	// Set up all inheritable **Backbone.View** properties and methods.
	_.extend(View.prototype, Events, {

		// The default `tagName` of a View's element is `"div"`.
		tagName: 'div',

		// jQuery delegate for element lookup, scoped to DOM elements within the
		// current view. This should be preferred to global lookups where possible.
		$: function (selector) {
			return this.$el.find(selector);
		},

		// Initialize is an empty function by default. Override it with your own
		// initialization logic.
		initialize: function () {
		},

		// **render** is the core function that your view should override, in order
		// to populate its element (`this.el`), with the appropriate HTML. The
		// convention is for **render** to always return `this`.
		render: function () {
			return this;
		},

		// Remove this view by taking the element out of the DOM, and removing any
		// applicable Backbone.Events listeners.
		remove: function () {
			this.$el.remove();
			this.stopListening();
			return this;
		},

		// Change the view's element (`this.el` property), including event
		// re-delegation.
		setElement: function (element, delegate) {
			if (this.$el) this.undelegateEvents();
			this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
			this.el = this.$el[0];
			if (delegate !== false) this.delegateEvents();
			return this;
		},

		// Set callbacks, where `this.events` is a hash of
		//
		// *{"event selector": "callback"}*
		//
		//     {
		//       'mousedown .title':  'edit',
		//       'click .button':     'save',
		//       'click .open':       function(e) { ... }
		//     }
		//
		// pairs. Callbacks will be bound to the view, with `this` set properly.
		// Uses event delegation for efficiency.
		// Omitting the selector binds the event to `this.el`.
		// This only works for delegate-able events: not `focus`, `blur`, and
		// not `change`, `submit`, and `reset` in Internet Explorer.
		delegateEvents: function (events) {
			if (!(events || (events = _.result(this, 'events')))) return this;
			this.undelegateEvents();
			for (var key in events) {
				var method = events[key];
				if (!_.isFunction(method)) method = this[events[key]];
				if (!method) continue;

				var match = key.match(delegateEventSplitter);
				var eventName = match[1], selector = match[2];
				method = _.bind(method, this);
				eventName += '.delegateEvents' + this.cid;
				if (selector === '') {
					this.$el.on(eventName, method);
				} else {
					this.$el.on(eventName, selector, method);
				}
			}
			return this;
		},

		// Clears all callbacks previously bound to the view with `delegateEvents`.
		// You usually don't need to use this, but may wish to if you have multiple
		// Backbone views attached to the same DOM element.
		undelegateEvents: function () {
			this.$el.off('.delegateEvents' + this.cid);
			return this;
		},

		// Ensure that the View has a DOM element to render into.
		// If `this.el` is a string, pass it through `$()`, take the first
		// matching element, and re-assign it to `el`. Otherwise, create
		// an element from the `id`, `className` and `tagName` properties.
		_ensureElement: function () {
			if (!this.el) {
				var attrs = _.extend({}, _.result(this, 'attributes'));
				if (this.id) attrs.id = _.result(this, 'id');
				if (this.className) attrs['class'] = _.result(this, 'className');
				var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
				this.setElement($el, false);
			} else {
				this.setElement(_.result(this, 'el'), false);
			}
		}

	});

	// Backbone.sync
	// -------------

	// Override this function to change the manner in which Backbone persists
	// models to the server. You will be passed the type of request, and the
	// model in question. By default, makes a RESTful Ajax request
	// to the model's `url()`. Some possible customizations could be:
	//
	// * Use `setTimeout` to batch rapid-fire updates into a single request.
	// * Send up the models as XML instead of JSON.
	// * Persist models via WebSockets instead of Ajax.
	//
	// Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	// as `POST`, with a `_method` parameter containing the true HTTP method,
	// as well as all requests with the body as `application/x-www-form-urlencoded`
	// instead of `application/json` with the model in a param named `model`.
	// Useful when interfacing with server-side languages like **PHP** that make
	// it difficult to read the body of `PUT` requests.
	Backbone.sync = function (method, model, options) {
		var type = methodMap[method];

		// Default options, unless specified.
		_.defaults(options || (options = {}), {
			emulateHTTP: Backbone.emulateHTTP,
			emulateJSON: Backbone.emulateJSON
		});

		// Default JSON-request options.
		var params = {type: type, dataType: 'json'};

		// Ensure that we have a URL.
		if (!options.url) {
			params.url = _.result(model, 'url') || urlError();
		}

		// Ensure that we have the appropriate request data.
		if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
			params.contentType = 'application/json';
			params.data = JSON.stringify(options.attrs || model.toJSON(options));
		}

		// For older servers, emulate JSON by encoding the request into an HTML-form.
		if (options.emulateJSON) {
			params.contentType = 'application/x-www-form-urlencoded';
			params.data = params.data ? {model: params.data} : {};
		}

		// For older servers, emulate HTTP by mimicking the HTTP method with `_method`
		// And an `X-HTTP-Method-Override` header.
		if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
			params.type = 'POST';
			if (options.emulateJSON) params.data._method = type;
			var beforeSend = options.beforeSend;
			options.beforeSend = function (xhr) {
				xhr.setRequestHeader('X-HTTP-Method-Override', type);
				if (beforeSend) return beforeSend.apply(this, arguments);
			};
		}

		// Don't process data on a non-GET request.
		if (params.type !== 'GET' && !options.emulateJSON) {
			params.processData = false;
		}

		// If we're sending a `PATCH` request, and we're in an old Internet Explorer
		// that still has ActiveX enabled by default, override jQuery to use that
		// for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
		if (params.type === 'PATCH' && noXhrPatch) {
			params.xhr = function () {
				return new ActiveXObject("Microsoft.XMLHTTP");
			};
		}

		// Make the request, allowing the user to override any Ajax options.
		var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
		model.trigger('request', model, xhr, options);
		return xhr;
	};

	var noXhrPatch = typeof window !== 'undefined' && !!window.ActiveXObject && !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

	// Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	var methodMap = {
		'create': 'POST',
		'update': 'PUT',
		'patch': 'PATCH',
		'delete': 'DELETE',
		'read': 'GET'
	};

	// Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	// Override this if you'd like to use a different library.
	Backbone.ajax = function () {
		return Backbone.$.ajax.apply(Backbone.$, arguments);
	};

	// Backbone.Router
	// ---------------

	// Routers map faux-URLs to actions, and fire events when routes are
	// matched. Creating a new one sets its `routes` hash, if not set statically.
	var Router = Backbone.Router = function (options) {
		options || (options = {});
		if (options.routes) this.routes = options.routes;
		this._bindRoutes();
		this.initialize.apply(this, arguments);
	};

	// Cached regular expressions for matching named param parts and splatted
	// parts of route strings.
	var optionalParam = /\((.*?)\)/g;
	var namedParam = /(\(\?)?:\w+/g;
	var splatParam = /\*\w+/g;
	var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	// Set up all inheritable **Backbone.Router** properties and methods.
	_.extend(Router.prototype, Events, {

		// Initialize is an empty function by default. Override it with your own
		// initialization logic.
		initialize: function () {
		},

		// Manually bind a single named route to a callback. For example:
		//
		//     this.route('search/:query/p:num', 'search', function(query, num) {
		//       ...
		//     });
		//
		route: function (route, name, callback) {
			if (!_.isRegExp(route)) route = this._routeToRegExp(route);
			if (_.isFunction(name)) {
				callback = name;
				name = '';
			}
			if (!callback) callback = this[name];
			var router = this;
			Backbone.history.route(route, function (fragment) {
				var args = router._extractParameters(route, fragment);
				callback && callback.apply(router, args);
				router.trigger.apply(router, ['route:' + name].concat(args));
				router.trigger('route', name, args);
				Backbone.history.trigger('route', router, name, args);
			});
			return this;
		},

		// Simple proxy to `Backbone.history` to save a fragment into the history.
		navigate: function (fragment, options) {
			Backbone.history.navigate(fragment, options);
			return this;
		},

		// Bind all defined routes to `Backbone.history`. We have to reverse the
		// order of the routes here to support behavior where the most general
		// routes can be defined at the bottom of the route map.
		_bindRoutes: function () {
			if (!this.routes) return;
			this.routes = _.result(this, 'routes');
			var route, routes = _.keys(this.routes);
			while ((route = routes.pop()) != null) {
				this.route(route, this.routes[route]);
			}
		},

		// Convert a route string into a regular expression, suitable for matching
		// against the current location hash.
		_routeToRegExp: function (route) {
			route = route.replace(escapeRegExp, '\\$&')
				.replace(optionalParam, '(?:$1)?')
				.replace(namedParam, function (match, optional) {
					return optional ? match : '([^\/]+)';
				})
				.replace(splatParam, '(.*?)');
			return new RegExp('^' + route + '$');
		},

		// Given a route, and a URL fragment that it matches, return the array of
		// extracted decoded parameters. Empty or unmatched parameters will be
		// treated as `null` to normalize cross-browser behavior.
		_extractParameters: function (route, fragment) {
			var params = route.exec(fragment).slice(1);
			return _.map(params, function (param) {
				return param ? decodeURIComponent(param) : null;
			});
		}

	});

	// Backbone.History
	// ----------------

	// Handles cross-browser history management, based on either
	// [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	// [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	// and URL fragments. If the browser supports neither (old IE, natch),
	// falls back to polling.
	var History = Backbone.History = function () {
		this.handlers = [];
		_.bindAll(this, 'checkUrl');

		// Ensure that `History` can be used outside of the browser.
		if (typeof window !== 'undefined') {
			this.location = window.location;
			this.history = window.history;
		}
	};

	// Cached regex for stripping a leading hash/slash and trailing space.
	var routeStripper = /^[#\/]|\s+$/g;

	// Cached regex for stripping leading and trailing slashes.
	var rootStripper = /^\/+|\/+$/g;

	// Cached regex for detecting MSIE.
	var isExplorer = /msie [\w.]+/;

	// Cached regex for removing a trailing slash.
	var trailingSlash = /\/$/;

	// Has the history handling already been started?
	History.started = false;

	// Set up all inheritable **Backbone.History** properties and methods.
	_.extend(History.prototype, Events, {

		// The default interval to poll for hash changes, if necessary, is
		// twenty times a second.
		interval: 50,

		// Gets the true hash value. Cannot use location.hash directly due to bug
		// in Firefox where location.hash will always be decoded.
		getHash: function (window) {
			var match = (window || this).location.href.match(/#(.*)$/);
			return match ? match[1] : '';
		},

		// Get the cross-browser normalized URL fragment, either from the URL,
		// the hash, or the override.
		getFragment: function (fragment, forcePushState) {
			if (fragment == null) {
				if (this._hasPushState || !this._wantsHashChange || forcePushState) {
					fragment = this.location.pathname;
					var root = this.root.replace(trailingSlash, '');
					if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
				} else {
					fragment = this.getHash();
				}
			}
			return fragment.replace(routeStripper, '');
		},

		// Start the hash change handling, returning `true` if the current URL matches
		// an existing route, and `false` otherwise.
		start: function (options) {
			if (History.started) throw new Error("Backbone.history has already been started");
			History.started = true;

			// Figure out the initial configuration. Do we need an iframe?
			// Is pushState desired ... is it available?
			this.options = _.extend({}, {root: '/'}, this.options, options);
			this.root = this.options.root;
			this._wantsHashChange = this.options.hashChange !== false;
			this._wantsPushState = !!this.options.pushState;
			this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
			var fragment = this.getFragment();
			var docMode = document.documentMode;
			var oldIE = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

			// Normalize root to always include a leading and trailing slash.
			this.root = ('/' + this.root + '/').replace(rootStripper, '/');

			if (oldIE && this._wantsHashChange) {
				this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
				this.navigate(fragment);
			}

			// Depending on whether we're using pushState or hashes, and whether
			// 'onhashchange' is supported, determine how we check the URL state.
			if (this._hasPushState) {
				Backbone.$(window).on('popstate', this.checkUrl);
			} else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
				Backbone.$(window).on('hashchange', this.checkUrl);
			} else if (this._wantsHashChange) {
				this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
			}

			// Determine if we need to change the base url, for a pushState link
			// opened by a non-pushState browser.
			this.fragment = fragment;
			var loc = this.location;
			var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

			// Transition from hashChange to pushState or vice versa if both are
			// requested.
			if (this._wantsHashChange && this._wantsPushState) {

				// If we've started off with a route from a `pushState`-enabled
				// browser, but we're currently in a browser that doesn't support it...
				if (!this._hasPushState && !atRoot) {
					this.fragment = this.getFragment(null, true);
					this.location.replace(this.root + this.location.search + '#' + this.fragment);
					// Return immediately as browser will do redirect to new url
					return true;

					// Or if we've started out with a hash-based route, but we're currently
					// in a browser where it could be `pushState`-based instead...
				} else if (this._hasPushState && atRoot && loc.hash) {
					this.fragment = this.getHash().replace(routeStripper, '');
					this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);
				}

			}

			if (!this.options.silent) return this.loadUrl();
		},

		// Disable Backbone.history, perhaps temporarily. Not useful in a real app,
		// but possibly useful for unit testing Routers.
		stop: function () {
			Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
			clearInterval(this._checkUrlInterval);
			History.started = false;
		},

		// Add a route to be tested when the fragment changes. Routes added later
		// may override previous routes.
		route: function (route, callback) {
			this.handlers.unshift({route: route, callback: callback});
		},

		// Checks the current URL to see if it has changed, and if it has,
		// calls `loadUrl`, normalizing across the hidden iframe.
		checkUrl: function (e) {
			var current = this.getFragment();
			if (current === this.fragment && this.iframe) {
				current = this.getFragment(this.getHash(this.iframe));
			}
			if (current === this.fragment) return false;
			if (this.iframe) this.navigate(current);
			this.loadUrl();
		},

		// Attempt to load the current URL fragment. If a route succeeds with a
		// match, returns `true`. If no defined routes matches the fragment,
		// returns `false`.
		loadUrl: function (fragmentOverride) {
			var fragment = this.fragment = this.getFragment(fragmentOverride);
			return _.any(this.handlers, function (handler) {
				if (handler.route.test(fragment)) {
					handler.callback(fragment);
					return true;
				}
			});
		},

		// Save a fragment into the hash history, or replace the URL state if the
		// 'replace' option is passed. You are responsible for properly URL-encoding
		// the fragment in advance.
		//
		// The options object can contain `trigger: true` if you wish to have the
		// route callback be fired (not usually desirable), or `replace: true`, if
		// you wish to modify the current URL without adding an entry to the history.
		navigate: function (fragment, options) {
			if (!History.started) return false;
			if (!options || options === true) options = {trigger: !!options};

			fragment = this.getFragment(fragment || '');
			if (this.fragment === fragment) return;
			this.fragment = fragment;

			var url = this.root + fragment;

			// Don't include a trailing slash on the root.
			if (fragment === '' && url !== '/') url = url.slice(0, -1);

			// If pushState is available, we use it to set the fragment as a real URL.
			if (this._hasPushState) {
				this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

				// If hash changes haven't been explicitly disabled, update the hash
				// fragment to store history.
			} else if (this._wantsHashChange) {
				this._updateHash(this.location, fragment, options.replace);
				if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
					// Opening and closing the iframe tricks IE7 and earlier to push a
					// history entry on hash-tag change.  When replace is true, we don't
					// want this.
					if (!options.replace) this.iframe.document.open().close();
					this._updateHash(this.iframe.location, fragment, options.replace);
				}

				// If you've told us that you explicitly don't want fallback hashchange-
				// based history, then `navigate` becomes a page refresh.
			} else {
				return this.location.assign(url);
			}
			if (options.trigger) return this.loadUrl(fragment);
		},

		// Update the hash location, either replacing the current entry, or adding
		// a new one to the browser history.
		_updateHash: function (location, fragment, replace) {
			if (replace) {
				var href = location.href.replace(/(javascript:|#).*$/, '');
				location.replace(href + '#' + fragment);
			} else {
				// Some browsers require that `hash` contains a leading #.
				location.hash = '#' + fragment;
			}
		}

	});

	// Create the default Backbone.history.
	Backbone.history = new History;

	// Helpers
	// -------

	// Helper function to correctly set up the prototype chain, for subclasses.
	// Similar to `goog.inherits`, but uses a hash of prototype properties and
	// class properties to be extended.
	var extend = function (protoProps, staticProps) {
		var parent = this;
		var child;

		// The constructor function for the new subclass is either defined by you
		// (the "constructor" property in your `extend` definition), or defaulted
		// by us to simply call the parent's constructor.
		if (protoProps && _.has(protoProps, 'constructor')) {
			child = protoProps.constructor;
		} else {
			child = function () {
				return parent.apply(this, arguments);
			};
		}

		// Add static properties to the constructor function, if supplied.
		_.extend(child, parent, staticProps);

		// Set the prototype chain to inherit from `parent`, without calling
		// `parent`'s constructor function.
		var Surrogate = function () {
			this.constructor = child;
		};
		Surrogate.prototype = parent.prototype;
		child.prototype = new Surrogate;

		// Add prototype properties (instance properties) to the subclass,
		// if supplied.
		if (protoProps) _.extend(child.prototype, protoProps);

		// Set a convenience property in case the parent's prototype is needed
		// later.
		child.__super__ = parent.prototype;

		return child;
	};

	// Set up inheritance for the model, collection, router, view and history.
	Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	// Throw an error when a URL is needed, and none is supplied.
	var urlError = function () {
		throw new Error('A "url" property or function must be specified');
	};

	// Wrap an optional error callback with a fallback error event.
	var wrapError = function (model, options) {
		var error = options.error;
		options.error = function (resp) {
			if (error) error(model, resp, options);
			model.trigger('error', model, resp, options);
		};
	};

}).call(this);

define("backbone", ["underscore","jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.Backbone;
    };
}(this)));

define('syncs/playerSync',[
	'backbone'
], function (Backbone) {
	var methodMap = {
		'create': 'POST',
		'update': 'POST',
		'delete': 'POST',
		'read': 'POST'
	};

	var urlMap = {
		'signup': '/auth/signup',
		'signin': '/auth/signin',
		'signout': '/auth/signout',
		'check': '/profile'
	};

	return function (method, model, options) {
		var requestType = "";
		var url = "";
		var data = {};
		var successFunc;
		var errorFunc;

		if (options.callback && options.callback.success) {
			successFunc = options.callback.success;
		}
		else {
			successFunc = function () {
				console.log("OK");
			};
		}
		;

		if (options.callback && options.callback.error) {
			errorFunc = options.callback.error;
		}
		else {
			errorFunc = function (xhr, status, error) {
				console.log(error.statusText);
			};
		}
		;

		if (method == 'create') {
			console.log("create");
			console.log(data);
			requestType = methodMap['create'];
			url = urlMap['signup'];
			data = options.param;
		}
		else if (method == 'update') {
			requestType = methodMap['update'];
			url = urlMap['signin'];
			data = options.param;
		}
		else if (method == 'delete') {
			requestType = methodMap['delete'];
			url = urlMap['signout'];
			data = {};
		}
		else if (method == 'read') {
			requestType = methodMap['read'];
			url = urlMap['check'];
			successFunc = function (response) {
				resp = JSON.parse(response);
				console.log(resp.body);
				if (resp.status == '200')
					model.set(resp.body);
				else
					console.log("UNAUTHORIZED");
			}
		}

		$.ajax({
			type: requestType,
			url: url,
			data: JSON.stringify(data),
			success: successFunc,
			error: errorFunc
		});
	}

});
define('models/userProfile',[
	'backbone',
	'syncs/playerSync'
], function (Backbone,
             playerSync) {

	var UserModel = Backbone.Model.extend({
		sync: playerSync,
		url: "/profile",

		defaults: {
			login: "",
			password: "",
			email: "",
			logged_in: false
		},

		registration: function (param, callback) {
			this.sync('create', this, {callback: callback, param: param});
		},

		login: function (param, callback) {
			this.sync('update', this, {callback: callback, param: param});
		},

		logout: function (callback) {
			this.sync('delete', this, {callback: callback});
		},

		isLoggedIn: function () {
			return this.logged_in;
		}

	});

	var user = new UserModel();
	user.fetch();
	return user;
});

define('game/socket',[
	'models/userProfile'
], function (User) {


	var Game = function () {

		var started = false;
		var finished = false;

		//var me = JSON.parse(localStorage.getItem("user"));
		var myName = null;
		var enemyName = "";

		var ws;

		this.init = function (user) {
			myName = User.login;
			console.log("entered socket init");
			ws = new WebSocket("ws://localhost:8080/gameplay");

			ws.onopen = function (event) {
				console.log("connection opened");
			}

			ws.onmessage = function (event) {
				console.log("onmessage");
				var data = JSON.parse(event.data);
				if (data.status == "start" && data.enemyName != myName) {
					$("#wait").hide();
					$("#gameplay").show();
					$("#enemyName").html(data.enemyName);
				}

				if (data.status == "finish") {
					$("#gameOver").show();
					$("#gameplay").hide();

					if (data.win)
						$("#win").html("winner!");
					else
						$("#win").html("loser!");
				}

				if (data.status == "increment" && data.name == myName) {

					$("#myScore").html(data.score);
				}

				if (data.status == "increment" && data.name == $("#enemyName").html()) {
					$("#enemyScore").html(data.score);
				}
			}

		};

		this.sendMessage = function () {
			var message = "{}";
			ws.send(message);
		};
	}

	return new Game();
});
            
            

define('tmpl/game',[],function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var json=__fest_context;__fest_buf+=("<div class=\"game-field\"><div class=\"game-wait\"><p>Hello, ");try{__fest_buf+=(__fest_escapeHTML(json.login))}catch(e){__fest_log_error(e.message + "6");}__fest_buf+=("</p><p>Prepare yourself. Wait for enemy!</p></div><div class=\"game-play\"><p class=\"game-play__info game-play__info_first-player\"><span class=\"first-player\"></span>: <span class=\"my-score\">0</span></p><p class=\"game-play__info game-play__info_second-player\"><span class=\"second-player\"></span>: <span class=\"enemy-score\">0</span></p><canvas width=\"580\" height=\"700\" id=\"gamefield\"></canvas></div><div class=\"game-over\"><p>Game over!</p><p>Winner: <span class=\"game-over__winner\"></span></p><p>Your result: <span class=\"geme-over__result\"></span></p><a class=\"submit-btn btn btn-primary\" href=\"#game\">Restart</a></div>");var __fest_context0;try{__fest_context0=json}catch(e){__fest_context0={};__fest_log_error(e.message)};(function(__fest_context){__fest_buf+=("<a href=\"#\" class=\"back-button btn btn-primary\">Menu</a>");})(__fest_context0);__fest_buf+=("</div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });
define(
	'lib/input',[],function () {
		var pressedKeys = {};

		function setKey(event, status) {
			var code = event.keyCode;
			var key;

			switch (code) {
				case 32:
					key = 'SPACE';
					break;
				case 37:
					key = 'LEFT';
					break;
				case 38:
					key = 'UP';
					break;
				case 39:
					key = 'RIGHT';
					break;
				case 40:
					key = 'DOWN';
					break;
				default:
					// Convert ASCII codes to letters
					key = String.fromCharCode(code);
			}

			pressedKeys[key] = status;
		}

		document.addEventListener('keydown', function (e) {
			setKey(e, true);
		});

		document.addEventListener('keyup', function (e) {
			setKey(e, false);
		});

		window.addEventListener('blur', function () {
			pressedKeys = {};
		});

		function isDown(key) {
			return pressedKeys[key.toUpperCase()];
		}

		return {
			isDown: isDown
		}
	});
define('game/gameWebSocket',[
	'models/userProfile'
], function (userModel) {
	console.log('GAMEWEBSOCKET');
	function initConnect() {
		console.log("entered gamewebsocket initconnect");
		var ws = new WebSocket("ws://localhost:8080/gameplay");
		ws.onopen = function () {
			console.log("Open");
		};
		//var playerName = null;
//		var enemyName = "";
		ws.onclose = function () {
			console.log('connection closed');
		};

		return ws;
	}

	function sendMessage(ws, message) {
		ws.send(message);
	}

	return {
		initConnect: initConnect,
		sendMessage: sendMessage
	};
});
define('game/gamePlay',[
	'backbone',
	'lib/input',
	'game/gameWebSocket',
	'models/userProfile'
], function (Backbone,
             input,
             gameWebSocket,
             User) {
	var context;
	var CANVAS_WIDTH;
	var CANVAS_HEIGHT;
	var ws = undefined;
	//var gameStarted = false;

	function PlayField(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;

		this.draw = function () {
			context.strokeStyle = this.color;
			context.strokeRect(this.x, this.y, this.width, this.height);
		};
		this.clear = function () {
			context.clearRect(this.x, this.y, this.width, this.height);
		}
	}

	function Platform(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.draw = function () {
			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
		}
	}

	function Ball(centerX, centerY, radius) {
		this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;
		this.image = new Image();
		this.image.src = 'img/ball.png';

		this.draw = function () {
			context.drawImage(this.image, this.centerX - this.radius, this.centerY - this.radius, 20, 20);
		};
	}

	var gameField = new PlayField(40, 40, 500, 630, "green");
	var myPlatform = new Platform(235, 80, 100, 20, "red");
	var enemyPlatform = new Platform(235, 610, 100, 20, "red");
	var ball = new Ball(350, 415, 10);
	var left = false, right = false, send = false;


	function draw() {
		gameField.clear();
		gameField.draw();
		myPlatform.draw();
		enemyPlatform.draw();
		ball.draw();
	}

	function update() {
		if (input.isDown('LEFT') && !right) {
			left = true;
			right = false;
			if (!send) {
				var message = {
					"status": "movePlatform",
					"direction": "LEFT"
				}
				gameWebSocket.sendMessage(ws, JSON.stringify(message));
				send = true;
			}
		}
		if (!input.isDown('LEFT') && left) {
			left = false;
			send = false;
			var message = {
				"status": "movePlatform",
				"direction": "STOP"
			}
			gameWebSocket.sendMessage(ws, JSON.stringify(message));
		}
		if (input.isDown('RIGHT') && !left) {
			right = true;
			left = false;
			if (!send) {
				var message = {
					"status": "movePlatform",
					"direction": "RIGHT"
				}
				gameWebSocket.sendMessage(ws, JSON.stringify(message));
				send = true;
			}
		}
		if (!input.isDown('RIGHT') && right) {
			right = false;
			send = false;
			var message = {
				"status": "movePlatform",
				"direction": "STOP"
			}
			gameWebSocket.sendMessage(ws, JSON.stringify(message));
		}
	}


	var Game = Backbone.View.extend({
		gameStarted: false,
		playerName: null,

		start: function (canvas) {
			console.log('ODIN RAZ');
			this.gameStarted = true;
			this.playerName = User.get("login");
			ws = gameWebSocket.initConnect();
			console.log(this.gameStarted);
			console.log("INIT CONNECT");
			this.analizeMessage();
			var FPS = 60;
			CANVAS_WIDTH = canvas.width;
			CANVAS_HEIGHT = canvas.height;
			context = canvas.getContext('2d');

			setInterval(function () {
				update();
				draw();
			}, 1000 / FPS);
		},

		analizeMessage: function () {
			var self = this;

			ws.onmessage = function (event) {
				var data = JSON.parse(event.data);
				if (data.status == "worldInfo") {
					myPlatform.x = parseInt(data.first.positionX, 10);
					enemyPlatform.x = parseInt(data.second.positionX, 10);
					ball.centerX = parseInt(data.ball.positionX, 10);
					ball.centerY = parseInt(data.ball.positionY, 10);
				}
				if (data.status == "start" && data.second.name != data.first.name) {
					$(".game-wait").hide();
					$(".game-play").show();

					$(".first-player").html(data.first.name);
					$(".second-player").html(data.second.name);

				}
				if (data.status == "finish") {
					console.log(data);
					$(".game-over").show();
					$(".game-play").hide()
					if (data.gameState == 0)
						$(".game-over__winner").html("dead heat!");
					else if (data.gameState == 1)
						$(".game-over__winner").html("first winner!");
					else if (data.gameState == 2)
						$(".game-over__winner").html("second winner!");
					if (data.first.name == self.playerName)
						$(".game-over__result").html("wwr!");
					else
						$(".game-over__result").html("2!");
					self.gameStarted = false;
				}
				if (data.status == "incrementScore") {
					$(".my-score").html(data.first.score);
					$(".enemy-score").html(data.second.score);
				}
			}
		}
	});

	return new Game();
});
define('views/game',[
	'backbone',
	'game/socket',
	'tmpl/game',
	'models/userProfile',
	'game/gamePlay'
], function (Backbone,
             socket,
             tmpl,
             User,
             gamePlay) {

	var View = Backbone.View.extend({
		template: tmpl,
		started: false,

		events: {
			"click .submit-btn": "restart"
		},

		initialize: function () {
			//this.render();
			//var self = this;
			//this.listenTo(User, 'change', function () {
			//self.render();
			//});
		},

		render: function () {
			var user = User.get('login');
			if (user) {
				var userData = {
					'login': user
				};
				// socket.init(userData);
				console.log('in game.js gamestarted: ' + gamePlay.gameStarted);
				this.$el.html(this.template(userData));
				var canvas = document.getElementById('gamefield');
				if (gamePlay.gameStarted === false) {
					console.log("gameStarted");
					gamePlay.start(canvas);
					console.log('in if' + gamePlay.gameStarted);
				}
				//else{
				//	Backbone.history.navigate('', {trigger: true});			
				//}
			}
			else {
				Backbone.history.navigate('login', {trigger: true});
			}
			return this;
		},

		restart: function () {
			console.log("restart!");
			this.render();
		},

		show: function () {
			console.log(this.started);
			if (this.started == false) {
				this.render();
			}
			this.started = true;
			this.$el.show();
			this.trigger("show", this);
		},
		hide: function () {
			this.$el.hide();
		}

	});

	return new View({model: User});
});

/*!
 * modernizr v3.2.0
 * Build http://modernizr.com/download?-devicemotion_deviceorientation-eventlistener-touchevents-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
 */

;(function (window, document, undefined) {
	var tests = [];


	/**
	 *
	 * ModernizrProto is the constructor for Modernizr
	 *
	 * @class
	 * @access public
	 */

	var ModernizrProto = {
		// The current version, dummy
		_version: '3.2.0',

		// Any settings that don't work as separate modules
		// can go in here as configuration.
		_config: {
			'classPrefix': '',
			'enableClasses': true,
			'enableJSClass': true,
			'usePrefixes': true
		},

		// Queue of tests
		_q: [],

		// Stub these for people who are listening
		on: function (test, cb) {
			// I don't really think people should do this, but we can
			// safe guard it a bit.
			// -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
			// This is in case people listen to synchronous tests. I would leave it out,
			// but the code to *disallow* sync tests in the real version of this
			// function is actually larger than this.
			var self = this;
			setTimeout(function () {
				cb(self[test]);
			}, 0);
		},

		addTest: function (name, fn, options) {
			tests.push({name: name, fn: fn, options: options});
		},

		addAsyncTest: function (fn) {
			tests.push({name: null, fn: fn});
		}
	};


	// Fake some of Object.create so we can force non test results to be non "own" properties.
	var Modernizr = function () {
	};
	Modernizr.prototype = ModernizrProto;

	// Leak modernizr globally when you `require` it rather than force it here.
	// Overwrite name so constructor name is nicer :D
	Modernizr = new Modernizr();


	var classes = [];


	/**
	 * is returns a boolean if the typeof an obj is exactly type.
	 *
	 * @access private
	 * @function is
	 * @param {*} obj - A thing we want to check the type of
	 * @param {string} type - A string to compare the typeof against
	 * @returns {boolean}
	 */

	function is(obj, type) {
		return typeof obj === type;
	}
	;

	/**
	 * Run through all tests and detect their support in the current UA.
	 *
	 * @access private
	 */

	function testRunner() {
		var featureNames;
		var feature;
		var aliasIdx;
		var result;
		var nameIdx;
		var featureName;
		var featureNameSplit;

		for (var featureIdx in tests) {
			if (tests.hasOwnProperty(featureIdx)) {
				featureNames = [];
				feature = tests[featureIdx];
				// run the test, throw the return value into the Modernizr,
				// then based on that boolean, define an appropriate className
				// and push it into an array of classes we'll join later.
				//
				// If there is no name, it's an 'async' test that is run,
				// but not directly added to the object. That should
				// be done with a post-run addTest call.
				if (feature.name) {
					featureNames.push(feature.name.toLowerCase());

					if (feature.options && feature.options.aliases && feature.options.aliases.length) {
						// Add all the aliases into the names list
						for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
							featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
						}
					}
				}

				// Run the test, or use the raw value if it's not a function
				result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


				// Set each of the names on the Modernizr object
				for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
					featureName = featureNames[nameIdx];
					// Support dot properties as sub tests. We don't do checking to make sure
					// that the implied parent tests have been added. You must call them in
					// order (either in the test, or make the parent test a dependency).
					//
					// Cap it to TWO to make the logic simple and because who needs that kind of subtesting
					// hashtag famous last words
					featureNameSplit = featureName.split('.');

					if (featureNameSplit.length === 1) {
						Modernizr[featureNameSplit[0]] = result;
					} else {
						// cast to a Boolean, if not one already
						/* jshint -W053 */
						if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
							Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
						}

						Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
					}

					classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
				}
			}
		}
	}
	;

	/**
	 * docElement is a convenience wrapper to grab the root element of the document
	 *
	 * @access private
	 * @returns {HTMLElement|SVGElement} The root element of the document
	 */

	var docElement = document.documentElement;


	/**
	 * A convenience helper to check if the document we are running in is an SVG document
	 *
	 * @access private
	 * @returns {boolean}
	 */

	var isSVG = docElement.nodeName.toLowerCase() === 'svg';


	/**
	 * setClasses takes an array of class names and adds them to the root element
	 *
	 * @access private
	 * @function setClasses
	 * @param {string[]} classes - Array of class names
	 */

	// Pass in an and array of class names, e.g.:
	//  ['no-webp', 'borderradius', ...]
	function setClasses(classes) {
		var className = docElement.className;
		var classPrefix = Modernizr._config.classPrefix || '';

		if (isSVG) {
			className = className.baseVal;
		}

		// Change `no-js` to `js` (independently of the `enableClasses` option)
		// Handle classPrefix on this too
		if (Modernizr._config.enableJSClass) {
			var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
			className = className.replace(reJS, '$1' + classPrefix + 'js$2');
		}

		if (Modernizr._config.enableClasses) {
			// Add the new classes
			className += ' ' + classPrefix + classes.join(' ' + classPrefix);
			isSVG ? docElement.className.baseVal = className : docElement.className = className;
		}

	}

	;
	/*!
	 {
	 "name": "Event Listener",
	 "property": "eventlistener",
	 "authors": ["Andrew Betts (@triblondon)"],
	 "notes": [{
	 "name": "W3C Spec",
	 "href": "http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Registration-interfaces"
	 }],
	 "polyfills": ["eventlistener"]
	 }
	 !*/
	/* DOC
	 Detects native support for addEventListener
	 */

	Modernizr.addTest('eventlistener', 'addEventListener' in window);


	/**
	 * List of property values to set for css tests. See ticket #21
	 * http://git.io/vUGl4
	 *
	 * @memberof Modernizr
	 * @name Modernizr._prefixes
	 * @optionName Modernizr._prefixes
	 * @optionProp prefixes
	 * @access public
	 * @example
	 *
	 * Modernizr._prefixes is the internal list of prefixes that we test against
	 * inside of things like [prefixed](#modernizr-prefixed) and [prefixedCSS](#-code-modernizr-prefixedcss). It is simply
	 * an array of kebab-case vendor prefixes you can use within your code.
	 *
	 * Some common use cases include
	 *
	 * Generating all possible prefixed version of a CSS property
	 * ```js
	 * var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
	 *
	 * rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'
	 * ```
	 *
	 * Generating all possible prefixed version of a CSS value
	 * ```js
	 * rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
	 *
	 * rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'
	 * ```
	 */

	var prefixes = (ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : []);

	// expose these for the plugin API. Look in the source for how to join() them against your input
	ModernizrProto._prefixes = prefixes;


	/**
	 * createElement is a convenience wrapper around document.createElement. Since we
	 * use createElement all over the place, this allows for (slightly) smaller code
	 * as well as abstracting away issues with creating elements in contexts other than
	 * HTML documents (e.g. SVG documents).
	 *
	 * @access private
	 * @function createElement
	 * @returns {HTMLElement|SVGElement} An HTML or SVG element
	 */

	function createElement() {
		if (typeof document.createElement !== 'function') {
			// This is the case in IE7, where the type of createElement is "object".
			// For this reason, we cannot call apply() as Object is not a Function.
			return document.createElement(arguments[0]);
		} else if (isSVG) {
			return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
		} else {
			return document.createElement.apply(document, arguments);
		}
	}

	;

	/**
	 * getBody returns the body of a document, or an element that can stand in for
	 * the body if a real body does not exist
	 *
	 * @access private
	 * @function getBody
	 * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
	 * artificially created element that stands in for the body
	 */

	function getBody() {
		// After page load injecting a fake body doesn't work so check if body exists
		var body = document.body;

		if (!body) {
			// Can't use the real body create a fake one.
			body = createElement(isSVG ? 'svg' : 'body');
			body.fake = true;
		}

		return body;
	}

	;

	/**
	 * injectElementWithStyles injects an element with style element and some CSS rules
	 *
	 * @access private
	 * @function injectElementWithStyles
	 * @param {string} rule - String representing a css rule
	 * @param {function} callback - A function that is used to test the injected element
	 * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
	 * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
	 * @returns {boolean}
	 */

	function injectElementWithStyles(rule, callback, nodes, testnames) {
		var mod = 'modernizr';
		var style;
		var ret;
		var node;
		var docOverflow;
		var div = createElement('div');
		var body = getBody();

		if (parseInt(nodes, 10)) {
			// In order not to give false positives we create a node for each test
			// This also allows the method to scale for unspecified uses
			while (nodes--) {
				node = createElement('div');
				node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
				div.appendChild(node);
			}
		}

		style = createElement('style');
		style.type = 'text/css';
		style.id = 's' + mod;

		// IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
		// Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
		(!body.fake ? div : body).appendChild(style);
		body.appendChild(div);

		if (style.styleSheet) {
			style.styleSheet.cssText = rule;
		} else {
			style.appendChild(document.createTextNode(rule));
		}
		div.id = mod;

		if (body.fake) {
			//avoid crashing IE8, if background image is used
			body.style.background = '';
			//Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
			body.style.overflow = 'hidden';
			docOverflow = docElement.style.overflow;
			docElement.style.overflow = 'hidden';
			docElement.appendChild(body);
		}

		ret = callback(div, rule);
		// If this is done after page load we don't want to remove the body so check if body exists
		if (body.fake) {
			body.parentNode.removeChild(body);
			docElement.style.overflow = docOverflow;
			// Trigger layout so kinetic scrolling isn't disabled in iOS6+
			docElement.offsetHeight;
		} else {
			div.parentNode.removeChild(div);
		}

		return !!ret;

	}

	;

	/**
	 * testStyles injects an element with style element and some CSS rules
	 *
	 * @memberof Modernizr
	 * @name Modernizr.testStyles
	 * @optionName Modernizr.testStyles()
	 * @optionProp testStyles
	 * @access public
	 * @function testStyles
	 * @param {string} rule - String representing a css rule
	 * @param {function} callback - A function that is used to test the injected element
	 * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
	 * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
	 * @returns {boolean}
	 * @example
	 *
	 * `Modernizr.testStyles` takes a CSS rule and injects it onto the current page
	 * along with (possibly multiple) DOM elements. This lets you check for features
	 * that can not be detected by simply checking the [IDL](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_development_guide/IDL_interface_rules).
	 *
	 * ```js
	 * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {
   *   // elem is the first DOM node in the page (by default #modernizr)
   *   // rule is the first argument you supplied - the CSS rule in string form
   *
   *   addTest('widthworks', elem.style.width === '9px')
   * });
	 * ```
	 *
	 * If your test requires multiple nodes, you can include a third argument
	 * indicating how many additional div elements to include on the page. The
	 * additional nodes are injected as children of the `elem` that is returned as
	 * the first argument to the callback.
	 *
	 * ```js
	 * Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
   *   document.getElementById('modernizr').style.width === '1px'; // true
   *   document.getElementById('modernizr2').style.width === '2px'; // true
   *   elem.firstChild === document.getElementById('modernizr2'); // true
   * }, 1);
	 * ```
	 *
	 * By default, all of the additional elements have an ID of `modernizr[n]`, where
	 * `n` is its index (e.g. the first additional, second overall is `#modernizr2`,
	 * the second additional is `#modernizr3`, etc.).
	 * If you want to have more meaningful IDs for your function, you can provide
	 * them as the fourth argument, as an array of strings
	 *
	 * ```js
	 * Modernizr.testStyles('#foo {width: 10px}; #bar {height: 20px}', function(elem) {
   *   elem.firstChild === document.getElementById('foo'); // true
   *   elem.lastChild === document.getElementById('bar'); // true
   * }, 2, ['foo', 'bar']);
	 * ```
	 *
	 */

	var testStyles = ModernizrProto.testStyles = injectElementWithStyles;

	/*!
	 {
	 "name": "Touch Events",
	 "property": "touchevents",
	 "caniuse" : "touch",
	 "tags": ["media", "attribute"],
	 "notes": [{
	 "name": "Touch Events spec",
	 "href": "http://www.w3.org/TR/2013/WD-touch-events-20130124/"
	 }],
	 "warnings": [
	 "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
	 ],
	 "knownBugs": [
	 "False-positive on some configurations of Nokia N900",
	 "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
	 ]
	 }
	 !*/
	/* DOC
	 Indicates if the browser supports the W3C Touch Events API.

	 This *does not* necessarily reflect a touchscreen device:

	 * Older touchscreen devices only emulate mouse events
	 * Modern IE touch devices implement the Pointer Events API instead: use `Modernizr.pointerevents` to detect support for that
	 * Some browsers & OS setups may enable touch APIs when no touchscreen is connected
	 * Future browsers may implement other event models for touch interactions

	 See this article: [You Can't Detect A Touchscreen](http://www.stucox.com/blog/you-cant-detect-a-touchscreen/).

	 It's recommended to bind both mouse and touch/pointer events simultaneously – see [this HTML5 Rocks tutorial](http://www.html5rocks.com/en/mobile/touchandmouse/).

	 This test will also return `true` for Firefox 4 Multitouch support.
	 */

	// Chrome (desktop) used to lie about its support on this, but that has since been rectified: http://crbug.com/36415
	Modernizr.addTest('touchevents', function () {
		var bool;
		if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
			bool = true;
		} else {
			var query = ['@media (', prefixes.join('touch-enabled),('), 'heartz', ')', '{#modernizr{top:9px;position:absolute}}'].join('');
			testStyles(query, function (node) {
				bool = node.offsetTop === 9;
			});
		}
		return bool;
	});

	/*!
	 {
	 "name": "Orientation and Motion Events",
	 "property": ["devicemotion", "deviceorientation"],
	 "caniuse": "deviceorientation",
	 "notes": [{
	 "name": "W3C Editor's Draft",
	 "href": "http://dev.w3.org/geo/api/spec-source-orientation.html"
	 },{
	 "name": "Implementation by iOS Safari (Orientation)",
	 "href": "http://goo.gl/fhce3"
	 },{
	 "name": "Implementation by iOS Safari (Motion)",
	 "href": "http://goo.gl/rLKz8"
	 }],
	 "authors": ["Shi Chuan"],
	 "tags": ["event"],
	 "builderAliases": ["event_deviceorientation_motion"]
	 }
	 !*/
	/* DOC
	 Part of Device Access aspect of HTML5, same category as geolocation.

	 `devicemotion` tests for Device Motion Event support, returns boolean value true/false.

	 `deviceorientation` tests for Device Orientation Event support, returns boolean value true/false
	 */

	Modernizr.addTest('devicemotion', 'DeviceMotionEvent' in window);
	Modernizr.addTest('deviceorientation', 'DeviceOrientationEvent' in window);


	// Run each test
	testRunner();

	// Remove the "no-js" class if it exists
	setClasses(classes);

	delete ModernizrProto.addTest;
	delete ModernizrProto.addAsyncTest;

	// Run the things that are supposed to run after the tests
	for (var i = 0; i < Modernizr._q.length; i++) {
		Modernizr._q[i]();
	}

	// Leak Modernizr namespace
	window.Modernizr = Modernizr;


	;

})(window, document);
define("modernizr", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.Modernizr;
    };
}(this)));

define('tmpl/mobile',[],function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var json=__fest_context;__fest_buf+=("<div class=\"gameField\"><div class=\"game-wait\"><p>Hello, ");try{__fest_buf+=(__fest_escapeHTML(json.login))}catch(e){__fest_log_error(e.message + "6");}__fest_buf+=("</p><p>Prepare yourself. Wait for enemy!</p></div><div class=\"game-play\"><p class=\"game-play__info game-play__info_first-player\"><span class=\"first-player\"></span>: <span class=\"my-score\">0</span></p><p class=\"game-play__info game-play__info_second-player\"><span class=\"second-player\"></span>: <span class=\"enemy-score\">0</span></p><canvas width=\"580\" height=\"700\" id=\"gamefield\"></canvas><div class=\"game-play__move-buttons\"><img src=\"img\/left-btn.png\" class=\"btn-left\"/><img src=\"img\/right-btn.png\" class=\"btn-right\"/></div></div><div class=\"game-over\"><p>Game over!</p><p>Winner: <span class=\"game-over__winner\"></span></p><p>Your result: <span class=\"geme-over__result\"></span></p><a class=\"submit-btn btn btn-primary\" href=\"#game\">Restart</a></div>");var __fest_context0;try{__fest_context0=json}catch(e){__fest_context0={};__fest_log_error(e.message)};(function(__fest_context){__fest_buf+=("<a href=\"#\" class=\"back-button btn btn-primary\">Menu</a>");})(__fest_context0);__fest_buf+=("</div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });
define('game/mobilePlay',[
	'backbone',
	'game/gameWebSocket',
	'models/userProfile'
], function (Backbone,
             gameWebSocket,
             User) {


	var context;
	var CANVAS_WIDTH;
	var CANVAS_HEIGHT;
	var ws = undefined;
	var alphaLeft;
	var alphaRight;

	window.addEventListener('deviceorientation', function (event) {
		if (event.alpha) {
			var alphaX = event.alpha;
			if (alphaX > 20 && !alphaLeft) {
				alphaLeft = true;
				alphaRight = false;
			} else if (alphaX < -20 && !alphaRight) {
				alphaRight = true;
				alphaLeft = false;
			} else {
				//console.log('mid® 20');
				alphaLeft = false;
				alphaRight = false;
			}
		}
	});

	function PlayField(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;

		this.draw = function () {
			context.strokeStyle = this.color;
			context.strokeRect(this.x, this.y, this.width, this.height);
		};
		this.clear = function () {
			context.clearRect(this.x, this.y, this.width, this.height);
		}
	}

	function Platform(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.draw = function () {
			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
		}
	}

	function Ball(centerX, centerY, radius) {
		this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;
		this.image = new Image();
		this.image.src = 'img/ball.png';

		this.draw = function () {
			context.drawImage(this.image, this.centerX - this.radius, this.centerY - this.radius, 20, 20);
		};
	}

	var gameField = new PlayField(40, 40, 500, 630, "green");
	var myPlatform = new Platform(235, 80, 100, 20, "red");
	var enemyPlatform = new Platform(235, 610, 100, 20, "red");
	var ball = new Ball(350, 415, 10);
	var left = false, right = false, send = false;


	function draw() {
		gameField.clear();
		gameField.draw();
		myPlatform.draw();
		enemyPlatform.draw();
		ball.draw();
	}

	function update() {
		if (alphaLeft && !right) {
			left = true;
			right = false;
			if (!send) {
				var message = {
					"status": "movePlatform",
					"direction": "LEFT"
				}
				gameWebSocket.sendMessage(ws, JSON.stringify(message));
				send = true;
			}
		}
		if (!alphaLeft && left) {
			left = false;
			send = false;
			var message = {
				"status": "movePlatform",
				"direction": "STOP"
			}
			gameWebSocket.sendMessage(ws, JSON.stringify(message));
		}
		if (alphaRight && !left) {
			right = true;
			left = false;
			if (!send) {
				var message = {
					"status": "movePlatform",
					"direction": "RIGHT"
				}
				gameWebSocket.sendMessage(ws, JSON.stringify(message));
				send = true;
			}
		}
		if (!alphaRight && right) {
			right = false;
			send = false;
			var message = {
				"status": "movePlatform",
				"direction": "STOP"
			}
			gameWebSocket.sendMessage(ws, JSON.stringify(message));
		}
	}


	var Game = Backbone.View.extend({
		gameStarted: false,
		playerName: null,

		start: function (canvas) {
			this.gameStarted = true;
			this.playerName = User.get("login");
			ws = gameWebSocket.initConnect();
			console.log(this.gameStarted);
			console.log("INIT CONNECT");
			this.analizeMessage();
			var FPS = 60;
			CANVAS_WIDTH = canvas.width;
			CANVAS_HEIGHT = canvas.height;
			context = canvas.getContext('2d');

			setInterval(function () {
				update();
				draw();
			}, 1000 / FPS);
		},

		analizeMessage: function () {
			var self = this;

			ws.onmessage = function (event) {
				var data = JSON.parse(event.data);
				if (data.status == "worldInfo") {
					myPlatform.x = parseInt(data.first.positionX, 10);
					enemyPlatform.x = parseInt(data.second.positionX, 10);
					ball.centerX = parseInt(data.ball.positionX, 10);
					ball.centerY = parseInt(data.ball.positionY, 10);
				}
				if (data.status == "start" && data.second.name != data.first.name) {
					$(".game-wait").hide();
					$(".game-play").show();

					$(".first-player").html(data.first.name);
					$(".second-player").html(data.second.name);

				}
				if (data.status == "finish") {
					console.log(data);
					$(".game-over").show();
					$(".game-play").hide()
					if (data.gameState == 0)
						$(".game-over__winner").html("dead heat!");
					else if (data.gameState == 1)
						$(".game-over__winner").html("first winner!");
					else if (data.gameState == 2)
						$(".game-over__winner").html("second winner!");
					if (data.first.name == self.playerName)
						$(".game-over__result").html("wwr!");
					else
						$(".game-over__result").html("2!");
					self.gameStarted = false;
				}
				if (data.status == "incrementScore") {
					$(".my-score").html(data.first.score);
					$(".enemy-score").html(data.second.score);
				}
			}
		},

		touchLeftStart: function () {
			alphaLeft = true;
			alphaRight = false;
		},
		touchRightStart: function () {
			alphaLeft = false;
			alphaRight = true;
		},
		touchEnd: function () {
			alphaRight = false;
			alphaLeft = false;
		}
	});

	return new Game();
});
define('views/mobile',[
	'backbone',
	'modernizr',
	'game/socket',
	'tmpl/mobile',
	'models/userProfile',
	'game/mobilePlay'
], function (Backbone,
             Modernizr,
             socket,
             tmpl,
             User,
             gamePlay) {

	var View = Backbone.View.extend({
		template: tmpl,
		started: false,

		events: {
			"click .submit-btn": "restart",
			"touchstart .btn-left": "btnLeftStart",
			"touchstart .btn-right": "btnRightStart",
			"touchend .btn-left": "btnEnd",
			"touchend .btn-right": "btnEnd"
		},

		render: function () {
			console.log('MOBILE RENDER START');
			var user = User.get('login');
			console.log(Modernizr);
			//if(!Modernizr.deviceorientation || !Modernizr.devicemotion || !Modernizr.touchevents) {
			if (!Modernizr.deviceorientation || !Modernizr.devicemotion) {
				this.$el.html('cant®');
				return this;
			}
			if (user) {
				var userData = {
					'login': user
				};
				this.$el.html(this.template(userData));
				var canvas = document.getElementById('gamefield');
				gamePlay.start(canvas);
			}
			else {
				Backbone.history.navigate('login', {trigger: true});
			}
			console.log('CONSOLE RENDER STOP');
			return this;
		},

		restart: function () {
			this.render();
		},

		show: function () {
			if (this.started == false) {
				this.render();
			}
			this.started = true;
			this.$el.show();
			this.trigger("show", this);
		},

		hide: function () {
			this.$el.hide();
		},

		btnLeftStart: function () {
			gamePlay.touchLeftStart();
		},

		btnRightStart: function () {
			gamePlay.touchRightStart();
		},

		btnEnd: function () {
			gamePlay.touchEnd();
		}
	});

	return new View({model: User});
});

define('tmpl/main',[],function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var user=__fest_context;try{var json = {title: 'Main Menu' };}catch(e){__fest_log_error(e.message);}var __fest_context0;try{__fest_context0=json}catch(e){__fest_context0={};__fest_log_error(e.message)};(function(__fest_context){var json=__fest_context;__fest_buf+=("<div class=\"header\"><div class=\"header__game-title\">Space Hockey</div><div class=\"header__page-title\">");try{__fest_buf+=(json.title)}catch(e){__fest_log_error(e.message + "4");}__fest_buf+=("</div></div>");})(__fest_context0);try{Cufon.replace("h1", {fontFamily: 'CalgaryShadow-Heavy'});}catch(e){__fest_log_error(e.message);}__fest_buf+=("<div class=\"container\"><div class=\"menu\"><div class=\"menu__item\"><a href=\"#scoreboard\" class=\"menu__link\">ScoreBoard</a></div>");try{__fest_if=!user.login}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"menu__item\"><a href=\"#login\" class=\"menu__link\">Start Game</a></div><div class=\"menu__item\"><a href=\"#login\" class=\"menu__link\">Mobile Game</a></div><div class=\"menu__item menu__item_login\"><a href=\"#login\" class=\"menu__link\">Login</a></div><div class=\"menu__item menu__item_reg\"><a href=\"#register\" class=\"menu__link\">Registration</a></div>");}try{__fest_if=user.login}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"menu__item\"><a href=\"#game\" class=\"menu__link\">Start Game</a></div><div class=\"menu__item\"><a href=\"#mobile\" class=\"menu__link\">Mobile Game</a></div><div class=\"menu__item  menu__item_logout\"><a href=\"#\" class=\"menu__link\">Logout</a></div>");}__fest_buf+=("</div></div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });
define('views/main',[
	'backbone',
	'tmpl/main',
	'models/userProfile'
], function (Backbone,
             tmpl,
             User) {

	var Main = Backbone.View.extend({
		template: tmpl,
		model: User,

		events: {
			"click .menu__item_logout": "logout"
		},

		initialize: function () {
			this.render();
			that = this;
			this.listenTo(User, 'change', function () {
				that.render();
			});
		},

		logout: function () {
			this.model.logout({
				success: function (response) {
					response = JSON.parse(response);
					if (response.status == "200") {
						console.log("ajax success");
						User.clear();
						Backbone.history.navigate('', {trigger: true});
					}
				}
			});
			this.render();
		},

		render: function () {
			var userlogin = User.get('login');
			var userData = {
				"login": userlogin
			}
			this.$el.html(this.template(userData));
		},

		show: function () {
			this.trigger('show', this);
			this.$el.show();
		},

		hide: function () {
			this.$el.hide();
		}

	});

	return new Main();
});

define('tmpl/login',[],function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var user_info=__fest_context;try{var json = {title: 'Login' };}catch(e){__fest_log_error(e.message);}var __fest_context0;try{__fest_context0=json}catch(e){__fest_context0={};__fest_log_error(e.message)};(function(__fest_context){var json=__fest_context;__fest_buf+=("<div class=\"header\"><div class=\"header__game-title\">Space Hockey</div><div class=\"header__page-title\">");try{__fest_buf+=(json.title)}catch(e){__fest_log_error(e.message + "4");}__fest_buf+=("</div></div>");})(__fest_context0);__fest_buf+=("<div class=\"container\"><form class=\"form form_signin\" id=\"idFormSignin\"><div class=\"form__row form__row_errors alert alert-danger\"></div><div class=\"form__row\"><label for=\"login\">Login:<br/><input type=\"text\" class=\"form__input\" name=\"login\" id=\"login\"/></label></div><div class=\"form__row\"><label for=\"password\">Password:<br/><input type=\"password\" class=\"form__input\" name=\"password\" id=\"password\"/></label></div><div class=\"form__row\"><button type=\"submit\" class=\"submit-btn submit-btn_go btn btn-success\">GO!</button></div><a class=\"submit-btn btn btn-primary\" href=\"#register\">Register</a></form>");(function(__fest_context){__fest_buf+=("<a href=\"#\" class=\"back-button btn btn-primary\">Menu</a>");})(__fest_context);__fest_buf+=("</div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });
define('utils/validator',['backbone'],
	function (Backbone) {
		// if typeForm = 1 -> it is login form, if typeForm = 0 -> register form
		var Validator = Backbone.View.extend({
			form_valid: false,
			type: null,

			validateForm: function (form_class) {
				this.type = form_class;
				if (this.type == ".form_signin") {
					this.form_valid = validateLogin(this);
				}
				else if (this.type == ".form_signup") {
					this.form_valid = validateRegister(this);
				}
			},

			clearErrors: function () {
				$('.form__row_errors').text("")
									  .css('display', 'none');
			}
		});


		function validateLogin(form) {
			var valid = checkName(form) && checkPassword(form);
			if (!valid) {
				$('.form__row_errors').css('display', 'block');
			}
			return valid;
		}

		function validateRegister(form) {
			var valid = checkName(form) && checkPasswords(form) && checkEmail(form);
			if (!valid) {
				$('.form__row_errors').css('display', 'block');
			}
			return valid;
		}

		function checkPasswords(form) {
			var userPassword1 = $(form.type + " input[name = password]").val();
			var userPassword2 = $(form.type + " input[name = password2]").val();

			if (userPassword1.length < 6) {
				$('.form__row_errors').text("Your password must contain at least 6 symbols");
				return false;

			}
			if (userPassword1 != userPassword2) {
				$('.form__row_errors').text("Passwords should be the same!Input again, please.");
				return false;
			}
			return true;
		}

		function checkName(form) {
			var userName = $(form.type + " input[name = login]").val();

			if (userName == '') {
				$('.form__row_errors').text("Input your login, please!");
				return false;
			}
			return true;
		}

		function checkPassword(form) {
			var userPassword = $(form.type + " input[name = password]").val();
			if (userPassword == '') {
				$('.form__row_errors').text("Input your password, please!");
				return false;
			}
			return true;
		}

		function checkEmail(form) {
			var userEmail = $(form.type + " input[name = email]").val();
			if (userEmail == '') {
				$('.form__row_errors').text("Input your email, please!");
				return false;
			}
			return true;
		}

		return Validator;
	});

define('views/login',[
	'backbone',
	'tmpl/login',
	'utils/validator',
	'models/userProfile'
], function (Backbone,
             tmpl,
             Validator,
             User) {

	var formClass = ".form_signin";
	var validator = new Validator();

	var View = Backbone.View.extend({
		template: tmpl,
		model: User,

		events: {
			"submit .form_signin": "submitSignin"
		},

		initialize: function () {
			this.render();
		},

		render: function () {
			$(this.el).html(this.template());
			return this;
		},

		submitSignin: function (event) {
			validator.clearErrors();
			validator.validateForm(formClass);

			if (validator.form_valid) {
				var user = this.model;
				var data = {
					'login': $(formClass + " input[name = login]").val(),
					'password': $(formClass + " input[name = password]").val()
				};
				this.model.login(data, {
					success: function (response) {
						response = JSON.parse(response);
						console.log(response.status);
						if (response.status == "200") {
							console.log(response.body.login);
							user.set({
								'login': response.body.login
							});
							Backbone.history.navigate('menu', {trigger: true});
						}
						else {
							var $error = $(".form__row_errors");
							$error.append("Login or password is incorrect!");
							$error.show();
						}
					},
				});
			}
			return false;

		},

		show: function () {
			validator.clearErrors()
			this.$el.show();
			this.trigger("show", this);
		},

		hide: function () {
			this.$el.hide();
		}

	});

	return new View();
});

define('tmpl/scoreboard',[],function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var scores=__fest_context;try{var json = {title: 'ScoreBoard' };}catch(e){__fest_log_error(e.message);}var __fest_context0;try{__fest_context0=json}catch(e){__fest_context0={};__fest_log_error(e.message)};(function(__fest_context){var json=__fest_context;__fest_buf+=("<div class=\"header\"><div class=\"header__game-title\">Space Hockey</div><div class=\"header__page-title\">");try{__fest_buf+=(json.title)}catch(e){__fest_log_error(e.message + "4");}__fest_buf+=("</div></div>");})(__fest_context0);__fest_buf+=("<div class=\"container\"><table class=\"score-list\"><tr class=\"score-list__item score-list__item_head\"><th class=\"score-list__cell score-list__cell_head\">Player</th><th class=\"score-list__cell score-list__cell_head\">Score</th></tr>");var i,v,__fest_iterator1;try{__fest_iterator1=scores || {};}catch(e){__fest_iterator={};__fest_log_error(e.message);}for(i in __fest_iterator1){v=__fest_iterator1[i];__fest_buf+=("<tr class=\"score-list__item\"><th class=\"score-list__cell\">");try{__fest_buf+=(__fest_escapeHTML(v.login))}catch(e){__fest_log_error(e.message + "12");}__fest_buf+=("</th><th class=\"score-list__cell\">");try{__fest_buf+=(__fest_escapeHTML(v.score))}catch(e){__fest_log_error(e.message + "15");}__fest_buf+=("</th></tr>");}__fest_buf+=("</table>");var __fest_context2;try{__fest_context2=json}catch(e){__fest_context2={};__fest_log_error(e.message)};(function(__fest_context){__fest_buf+=("<a href=\"#\" class=\"back-button btn btn-primary\">Menu</a>");})(__fest_context2);__fest_buf+=("</div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });
define('models/score',[
	'backbone'
], function (Backbone) {

	var PlayerModel = Backbone.Model.extend({
		defaults: {
			login: 'Unnamed player',
			score: 0
		}
	});

	return PlayerModel;
});

define('syncs/scoreSync',[
	'backbone'
], function () {

	return function (method, collection) {
		var url;
		var requestType;
		var successFunc;
		var errorFunc;

		if (method == 'read') {
			url = '/score?limit=10';
			requestType = "GET";
			successFunc = function (response) {
				var resp = JSON.parse(response);
				console.log(resp.body);
				collection.set(resp.body.scoreList);
			};
			errorFunc = function (error) {
				console.log(error.statusText);
			}
		}

		$.ajax({
			type: requestType,
			url: url,
			async: false,
			success: successFunc,
			error: errorFunc
		});

	};
});
define('collections/scores',[
	'backbone',
	'models/score',
	'syncs/scoreSync'
], function (Backbone,
             PlayerModel,
             sync) {
	var PlayerCollection = Backbone.Collection.extend({
		model: PlayerModel,
		url: '/score?limit=10',
		sync: sync,

		comparator: function (playerA, playerB) {
			var scoreDiff = playerB.get('score') - playerA.get('score');
			if (scoreDiff === 0) {
				return playerA.get('name') < playerB.get('name') ? -1 : 1;
			}
			return scoreDiff;
		}
	});
	var playerCollection = new PlayerCollection();

	playerCollection.fetch();

	return playerCollection;
});

define('views/scoreboard',[
	'backbone',
	'tmpl/scoreboard',
	'models/score',
	'collections/scores'
], function (Backbone,
             tmpl,
             playerModel,
             playerCollection) {

	var ScoreBoardView = Backbone.View.extend({
		template: tmpl,
		collection: playerCollection,
		tagName: 'div',

		initialize: function () {
			console.log('initializing scoreboard view');
			$('.page').append(this.el);
			this.render();
		},

		render: function () {
			this.$el.html(this.template(this.collection.toJSON()));
		},


		show: function () {
			this.trigger('show', this);
			this.$el.show();
		},
		hide: function () {
			this.$el.hide();
		}

	});
	return new ScoreBoardView();
});


define('tmpl/register',[],function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var json=__fest_context;try{var json = {title: 'Registration' };}catch(e){__fest_log_error(e.message);}var __fest_context0;try{__fest_context0=json}catch(e){__fest_context0={};__fest_log_error(e.message)};(function(__fest_context){var json=__fest_context;__fest_buf+=("<div class=\"header\"><div class=\"header__game-title\">Space Hockey</div><div class=\"header__page-title\">");try{__fest_buf+=(json.title)}catch(e){__fest_log_error(e.message + "4");}__fest_buf+=("</div></div>");})(__fest_context0);__fest_buf+=("<div class=\"container\"><form class=\"form form_signup\" id=\"idFormSignup\"><div class=\"form__row form__row_errors alert alert-danger\"></div><div class=\"form__row\"><label for=\"login\">Login*:<br/><input type=\"text\" class=\"form__input\" name=\"login\" id=\"login\"/></label></div><div class=\"form__row\"><label for=\"email\">Email*:<br/><input type=\"email\" class=\"form__input\" name=\"email\" id=\"email\"/></label></div><div class=\"form__row\"><label for=\"password\">Password*:<br/><input type=\"password\" class=\"form__input\" name=\"password\" id=\"password\"/></label></div><div class=\"form__row\"><label for=\"password2\">Password again*:<br/><input type=\"password\" class=\"form__input\" name=\"password2\" id=\"password2\"/></label></div><div class=\"form__row\"><button type=\"submit\" class=\"submit-btn submit-btn_go btn btn-success\">GO!</button></div></form>");var __fest_context1;try{__fest_context1=json}catch(e){__fest_context1={};__fest_log_error(e.message)};(function(__fest_context){__fest_buf+=("<a href=\"#\" class=\"back-button btn btn-primary\">Menu</a>");})(__fest_context1);__fest_buf+=("</div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });
define('views/register',[
	'backbone',
	'tmpl/register',
	'utils/validator',
	'models/userProfile'
], function (Backbone,
             tmpl,
             Validator,
             User) {

	var formClass = ".form_signup";
	var validator = new Validator();

	var View = Backbone.View.extend({
		template: tmpl,
		model: User,

		events: {
			"submit .form_signup": "submitSignup"
		},

		initialize: function () {
			this.render();
		},

		render: function () {
			$(this.el).html(this.template());
			return this;
		},

		submitSignup: function (event) {
			validator.clearErrors();
			validator.validateForm(formClass);
			if (validator.form_valid) {
				var data = {
					'login': $(formClass + " input[name = login]").val(),
					'password': $(formClass + " input[name = password]").val(),
					'email': $(formClass + " input[name = email]").val()
				};
				this.model.registration(data, {
					success: function (response) {
						console.log(response);
						data = JSON.parse(response);
						if (parseInt(data["status"]) == "200") {
							Backbone.history.navigate('', {trigger: true});
						}
						else {
							var $error = $(".form__row_errors");
							$error.append("User cann't be registrated. Try to change your input data");
							$error.show();
						}
					}
				});
			}
			return false;
		},

		show: function () {
			validator.clearErrors()
			this.$el.show();
			this.trigger("show", this);
		},

		hide: function () {
			this.$el.hide();
		}

	});

	return new View();
});

define('views/manager',[
	'backbone'
], function (Backbone) {

	var views = [];
	var $page = $(".page");

	var Manager = Backbone.View.extend({
		addView: function (currentView) {
			$page.append(currentView.$el);
			views.push(currentView);

			this.listenTo(currentView, 'show', function () {
				views.forEach(function (view) {
					if (view && view != currentView) {
						view.hide();
					}
				});
			});
		},
		orientationchange: function () {
			console.log("orientation: " + window.orientation);
			//var gameF = $(".gameField");
			var header = $(".header__game-title");
			if (window.orientation % 180 == 0) {
				if (header) {
					header.show();
				}
			} else {
				if (header) {
					header.hide();
				}
			}
		}
	});

	var manager = new Manager();

	window.addEventListener('orientationchange', manager.orientationchange);
	manager.orientationchange();

	return manager;
});

define('router',[
	'backbone',
	'views/game',
	'views/mobile',
	'views/main',
	'views/login',
	'views/scoreboard',
	'views/register',
	'views/manager'
], function (Backbone,
             gamePage,
             mobilePage,
             mainPage,
             loginPage,
             scoreboardPage,
             registerPage,
             viewManager) {

	var Router = Backbone.Router.extend({
		routes: {
			'scoreboard': 'scoreboardAction',
			'game': 'gameAction',
			'mobile': 'mobileAction',
			'login': 'loginAction',
			'register': 'registerAction',
			'*default': 'defaultActions'
		},

		initialize: function () {
			viewManager.addView(scoreboardPage);
			viewManager.addView(loginPage);
			viewManager.addView(mainPage);
			viewManager.addView(gamePage);
			viewManager.addView(mobilePage);
			viewManager.addView(registerPage);
		},

		defaultActions: function () {
			mainPage.show();
		},

		scoreboardAction: function () {
			scoreboardPage.show();
		},

		gameAction: function () {
			gamePage.show();
		},

		mobileAction: function () {
			mobilePage.show();
		},

		loginAction: function () {
			loginPage.show();
		},

		registerAction: function () {
			registerPage.show();
		}
	});

	return new Router();
});

require.config({
	// urlUrgs - доп. параметры для скрипта(решает вопрос кэширования)
	urlArgs: "_=" + (new Date()).getTime(),

	// базовый путь, где лежат все модули
	baseUrl: "js",
	paths: {
		// пути для модулей, которые находятся не в baseUrl
		jquery: "lib/jquery",
		underscore: "lib/underscore",
		backbone: "lib/backbone",
		modernizr: "lib/modernizr"
	},
	shim: {
		// параметр shim позволяет добавить сторонние модули
		// (который без метода define)
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'modernizr': {
			exports: 'Modernizr'
		}
	}
});

define('main',[
	'backbone',
	'router'
], function (Backbone,
             router) {
	Backbone.history.start();
});

