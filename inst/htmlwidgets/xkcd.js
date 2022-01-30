var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/.pnpm/chart.xkcd@1.1.13/node_modules/chart.xkcd/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/chart.xkcd@1.1.13/node_modules/chart.xkcd/dist/index.js"(exports, module2) {
    (function() {
      function wb(a2) {
        return a2 && a2.__esModule ? { d: a2.default } : { d: a2 };
      }
      var xb = {};
      function yb(t2, e2) {
        var i2 = Object.keys(t2);
        if (Object.getOwnPropertySymbols) {
          var o2 = Object.getOwnPropertySymbols(t2);
          e2 && (o2 = o2.filter(function(e3) {
            return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
          })), i2.push.apply(i2, o2);
        }
        return i2;
      }
      function od(t2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var i2 = arguments[e2] != null ? arguments[e2] : {};
          e2 % 2 ? yb(i2, true).forEach(function(e3) {
            pd(t2, e3, i2[e3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(i2)) : yb(i2).forEach(function(e3) {
            Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(i2, e3));
          });
        }
        return t2;
      }
      function pd(t2, e2, i2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: i2, enumerable: true, configurable: true, writable: true }) : t2[e2] = i2, t2;
      }
      function qd() {
      }
      var zb = function($2) {
        return $2 == null ? qd : function() {
          return this.querySelector($2);
        };
      };
      var rd = function(e2) {
        typeof e2 != "function" && (e2 = zb(e2));
        for (var r2 = this._groups, t2 = r2.length, a2 = new Array(t2), l2 = 0; l2 < t2; ++l2)
          for (var $2, _2, o2 = r2[l2], n2 = o2.length, i2 = a2[l2] = new Array(n2), p2 = 0; p2 < n2; ++p2)
            ($2 = o2[p2]) && (_2 = e2.call($2, $2.__data__, p2, o2)) && ("__data__" in $2 && (_2.__data__ = $2.__data__), i2[p2] = _2);
        return new m(a2, this._parents);
      };
      function sd() {
        return [];
      }
      var td = function(t2) {
        return t2 == null ? sd : function() {
          return this.querySelectorAll(t2);
        };
      };
      var ud = function(e2) {
        typeof e2 != "function" && (e2 = td(e2));
        for (var r2 = this._groups, p2 = r2.length, t2 = [], $2 = [], f2 = 0; f2 < p2; ++f2)
          for (var l2, o2 = r2[f2], a2 = o2.length, u2 = 0; u2 < a2; ++u2)
            (l2 = o2[u2]) && (t2.push(e2.call(l2, l2.__data__, u2, o2)), $2.push(l2));
        return new m(t2, $2);
      };
      var vd = function(r2) {
        return function() {
          return this.matches(r2);
        };
      };
      var wd = function(r2) {
        typeof r2 != "function" && (r2 = vd(r2));
        for (var e2 = this._groups, a2 = e2.length, t2 = new Array(a2), $2 = 0; $2 < a2; ++$2)
          for (var S2, o2 = e2[$2], n2 = o2.length, p2 = t2[$2] = [], i2 = 0; i2 < n2; ++i2)
            (S2 = o2[i2]) && r2.call(S2, S2.__data__, i2, o2) && p2.push(S2);
        return new m(t2, this._parents);
      };
      var Ab = function(e2) {
        return new Array(e2.length);
      };
      var xd = function() {
        return new m(this._enter || this._groups.map(Ab), this._parents);
      };
      function ia(e2, t2) {
        this.ownerDocument = e2.ownerDocument, this.namespaceURI = e2.namespaceURI, this._next = null, this._parent = e2, this.__data__ = t2;
      }
      ia.prototype = { constructor: ia, appendChild: function(e2) {
        return this._parent.insertBefore(e2, this._next);
      }, insertBefore: function(e2, t2) {
        return this._parent.insertBefore(e2, t2);
      }, querySelector: function(e2) {
        return this._parent.querySelector(e2);
      }, querySelectorAll: function(e2) {
        return this._parent.querySelectorAll(e2);
      } };
      var yd = function(r2) {
        return function() {
          return r2;
        };
      };
      var Bb = "$";
      function zd(r2, e2, n2, $2, t2, a2) {
        for (var c2, i2 = 0, o2 = e2.length, l2 = a2.length; i2 < l2; ++i2)
          (c2 = e2[i2]) ? (c2.__data__ = a2[i2], $2[i2] = c2) : n2[i2] = new ia(r2, a2[i2]);
        for (; i2 < o2; ++i2)
          (c2 = e2[i2]) && (t2[i2] = c2);
      }
      function Ad(r2, e2, n2, $2, t2, a2, c2) {
        var i2, o2, l2, f2 = {}, q2 = e2.length, _2 = a2.length, O2 = new Array(q2);
        for (i2 = 0; i2 < q2; ++i2)
          (o2 = e2[i2]) && (O2[i2] = l2 = Bb + c2.call(o2, o2.__data__, i2, e2), l2 in f2 ? t2[i2] = o2 : f2[l2] = o2);
        for (i2 = 0; i2 < _2; ++i2)
          (o2 = f2[l2 = Bb + c2.call(r2, a2[i2], i2, a2)]) ? ($2[i2] = o2, o2.__data__ = a2[i2], f2[l2] = null) : n2[i2] = new ia(r2, a2[i2]);
        for (i2 = 0; i2 < q2; ++i2)
          (o2 = e2[i2]) && f2[O2[i2]] === o2 && (t2[i2] = o2);
      }
      var Bd = function(r2, e2) {
        if (!r2)
          return O2 = new Array(this.size()), l2 = -1, this.each(function(r3) {
            O2[++l2] = r3;
          }), O2;
        var n2 = e2 ? Ad : zd, $2 = this._parents, t2 = this._groups;
        typeof r2 != "function" && (r2 = yd(r2));
        for (var a2 = t2.length, c2 = new Array(a2), i2 = new Array(a2), o2 = new Array(a2), l2 = 0; l2 < a2; ++l2) {
          var f2 = $2[l2], q2 = t2[l2], _2 = q2.length, O2 = r2.call(f2, f2 && f2.__data__, l2, $2), d2 = O2.length, u2 = i2[l2] = new Array(d2), v2 = c2[l2] = new Array(d2);
          n2(f2, q2, u2, v2, o2[l2] = new Array(_2), O2, e2);
          for (var p2, y2, h2 = 0, x2 = 0; h2 < d2; ++h2)
            if (p2 = u2[h2]) {
              for (h2 >= x2 && (x2 = h2 + 1); !(y2 = v2[x2]) && ++x2 < d2; )
                ;
              p2._next = y2 || null;
            }
        }
        return (c2 = new m(c2, $2))._enter = i2, c2._exit = o2, c2;
      };
      var Cd = function() {
        return new m(this._exit || this._groups.map(Ab), this._parents);
      };
      var Dd = function(e2, t2, r2) {
        var $2 = this.enter(), n2 = this, o2 = this.exit();
        return $2 = typeof e2 == "function" ? e2($2) : $2.append(e2 + ""), t2 != null && (n2 = t2(n2)), r2 == null ? o2.remove() : r2(o2), $2 && n2 ? $2.merge(n2).order() : n2;
      };
      var Ed = function(r2) {
        for (var e2 = this._groups, t2 = r2._groups, $2 = e2.length, n2 = t2.length, a2 = Math.min($2, n2), o2 = new Array($2), x2 = 0; x2 < a2; ++x2)
          for (var p2, i2 = e2[x2], l2 = t2[x2], u2 = i2.length, f2 = o2[x2] = new Array(u2), s2 = 0; s2 < u2; ++s2)
            (p2 = i2[s2] || l2[s2]) && (f2[s2] = p2);
        for (; x2 < $2; ++x2)
          o2[x2] = e2[x2];
        return new m(o2, this._parents);
      };
      var Fd = function() {
        for (var e2 = this._groups, t2 = -1, r2 = e2.length; ++t2 < r2; )
          for (var o2, $2 = e2[t2], n2 = $2.length - 1, a2 = $2[n2]; --n2 >= 0; )
            (o2 = $2[n2]) && (a2 && 4 ^ o2.compareDocumentPosition(a2) && a2.parentNode.insertBefore(o2, a2), a2 = o2);
        return this;
      };
      var Gd = function(r2) {
        function e2(e3, t3) {
          return e3 && t3 ? r2(e3.__data__, t3.__data__) : !e3 - !t3;
        }
        r2 || (r2 = Hd);
        for (var t2 = this._groups, n2 = t2.length, $2 = new Array(n2), a2 = 0; a2 < n2; ++a2) {
          for (var w2, o2 = t2[a2], i2 = o2.length, u2 = $2[a2] = new Array(i2), _2 = 0; _2 < i2; ++_2)
            (w2 = o2[_2]) && (u2[_2] = w2);
          u2.sort(e2);
        }
        return new m($2, this._parents).order();
      };
      function Hd(r2, e2) {
        return r2 < e2 ? -1 : r2 > e2 ? 1 : r2 >= e2 ? 0 : NaN;
      }
      var Id = function() {
        var t2 = arguments[0];
        return arguments[0] = this, t2.apply(null, arguments), this;
      };
      var Jd = function() {
        var t2 = new Array(this.size()), a2 = -1;
        return this.each(function() {
          t2[++a2] = this;
        }), t2;
      };
      var Kd = function() {
        for (var r2 = this._groups, t2 = 0, e2 = r2.length; t2 < e2; ++t2)
          for (var $2 = r2[t2], o2 = 0, u2 = $2.length; o2 < u2; ++o2) {
            var a2 = $2[o2];
            if (a2)
              return a2;
          }
        return null;
      };
      var Ld = function() {
        var e2 = 0;
        return this.each(function() {
          ++e2;
        }), e2;
      };
      var Md = function() {
        return !this.node();
      };
      var Nd = function(t2) {
        for (var r2 = this._groups, e2 = 0, $2 = r2.length; e2 < $2; ++e2)
          for (var a2, n2 = r2[e2], p2 = 0, o2 = n2.length; p2 < o2; ++p2)
            (a2 = n2[p2]) && t2.call(a2, a2.__data__, p2, n2);
        return this;
      };
      function Od(t2) {
        return function() {
          this.removeAttribute(t2);
        };
      }
      function Pd(t2) {
        return function() {
          this.removeAttributeNS(t2.space, t2.local);
        };
      }
      function Qd(t2, r2) {
        return function() {
          this.setAttribute(t2, r2);
        };
      }
      function Rd(t2, r2) {
        return function() {
          this.setAttributeNS(t2.space, t2.local, r2);
        };
      }
      function Sd(t2, r2) {
        return function() {
          var e2 = r2.apply(this, arguments);
          e2 == null ? this.removeAttribute(t2) : this.setAttribute(t2, e2);
        };
      }
      function Td(t2, r2) {
        return function() {
          var e2 = r2.apply(this, arguments);
          e2 == null ? this.removeAttributeNS(t2.space, t2.local) : this.setAttributeNS(t2.space, t2.local, e2);
        };
      }
      var Ha = "http://www.w3.org/1999/xhtml";
      var Cb = { svg: "http://www.w3.org/2000/svg", xhtml: Ha, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
      var Db = function(e2) {
        var $2 = e2 += "", a2 = $2.indexOf(":");
        return a2 >= 0 && ($2 = e2.slice(0, a2)) !== "xmlns" && (e2 = e2.slice(a2 + 1)), Cb.hasOwnProperty($2) ? { space: Cb[$2], local: e2 } : e2;
      };
      var Ud = function(t2, r2) {
        var e2 = Db(t2);
        if (arguments.length < 2) {
          var a2 = this.node();
          return e2.local ? a2.getAttributeNS(e2.space, e2.local) : a2.getAttribute(e2);
        }
        return this.each((r2 == null ? e2.local ? Pd : Od : typeof r2 == "function" ? e2.local ? Td : Sd : e2.local ? Rd : Qd)(e2, r2));
      };
      function Vd(e2) {
        return function() {
          this.style.removeProperty(e2);
        };
      }
      function Wd(e2, t2, r2) {
        return function() {
          this.style.setProperty(e2, t2, r2);
        };
      }
      function Xd(e2, t2, r2) {
        return function() {
          var $2 = t2.apply(this, arguments);
          $2 == null ? this.style.removeProperty(e2) : this.style.setProperty(e2, $2, r2);
        };
      }
      var Eb = function(e2) {
        return e2.ownerDocument && e2.ownerDocument.defaultView || e2.document && e2 || e2.defaultView;
      };
      var Yd = function(e2, t2, r2) {
        return arguments.length > 1 ? this.each((t2 == null ? Vd : typeof t2 == "function" ? Xd : Wd)(e2, t2, r2 == null ? "" : r2)) : Zd(this.node(), e2);
      };
      function Zd(e2, t2) {
        return e2.style.getPropertyValue(t2) || Eb(e2).getComputedStyle(e2, null).getPropertyValue(t2);
      }
      function $d(r2) {
        return function() {
          delete this[r2];
        };
      }
      function _d(r2, t2) {
        return function() {
          this[r2] = t2;
        };
      }
      function ae(r2, t2) {
        return function() {
          var n2 = t2.apply(this, arguments);
          n2 == null ? delete this[r2] : this[r2] = n2;
        };
      }
      var be = function(r2, t2) {
        return arguments.length > 1 ? this.each((t2 == null ? $d : typeof t2 == "function" ? ae : _d)(r2, t2)) : this.node()[r2];
      };
      function Fb(s2) {
        return s2.trim().split(/^|\s+/);
      }
      function Ia(s2) {
        return s2.classList || new Gb(s2);
      }
      function Gb(s2) {
        this._node = s2, this._names = Fb(s2.getAttribute("class") || "");
      }
      function Hb(s2, t2) {
        for (var a2 = Ia(s2), $2 = -1, e2 = t2.length; ++$2 < e2; )
          a2.add(t2[$2]);
      }
      function Ib(s2, t2) {
        for (var a2 = Ia(s2), $2 = -1, e2 = t2.length; ++$2 < e2; )
          a2.remove(t2[$2]);
      }
      function ce(s2) {
        return function() {
          Hb(this, s2);
        };
      }
      function de(s2) {
        return function() {
          Ib(this, s2);
        };
      }
      function ee(s2, t2) {
        return function() {
          (t2.apply(this, arguments) ? Hb : Ib)(this, s2);
        };
      }
      Gb.prototype = { add: function(s2) {
        this._names.indexOf(s2) < 0 && (this._names.push(s2), this._node.setAttribute("class", this._names.join(" ")));
      }, remove: function(s2) {
        var t2 = this._names.indexOf(s2);
        t2 >= 0 && (this._names.splice(t2, 1), this._node.setAttribute("class", this._names.join(" ")));
      }, contains: function(s2) {
        return this._names.indexOf(s2) >= 0;
      } };
      var fe = function(s2, t2) {
        var a2 = Fb(s2 + "");
        if (arguments.length < 2) {
          for (var $2 = Ia(this.node()), e2 = -1, n2 = a2.length; ++e2 < n2; )
            if (!$2.contains(a2[e2]))
              return false;
          return true;
        }
        return this.each((typeof t2 == "function" ? ee : t2 ? ce : de)(a2, t2));
      };
      function ge() {
        this.textContent = "";
      }
      function he(t2) {
        return function() {
          this.textContent = t2;
        };
      }
      function ie(t2) {
        return function() {
          var n2 = t2.apply(this, arguments);
          this.textContent = n2 == null ? "" : n2;
        };
      }
      var je = function(t2) {
        return arguments.length ? this.each(t2 == null ? ge : (typeof t2 == "function" ? ie : he)(t2)) : this.node().textContent;
      };
      function ke() {
        this.innerHTML = "";
      }
      function le(n2) {
        return function() {
          this.innerHTML = n2;
        };
      }
      function me(n2) {
        return function() {
          var t2 = n2.apply(this, arguments);
          this.innerHTML = t2 == null ? "" : t2;
        };
      }
      var ne = function(n2) {
        return arguments.length ? this.each(n2 == null ? ke : (typeof n2 == "function" ? me : le)(n2)) : this.node().innerHTML;
      };
      function oe() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      var pe = function() {
        return this.each(oe);
      };
      function qe() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      var re = function() {
        return this.each(qe);
      };
      function se(e2) {
        return function() {
          var r2 = this.ownerDocument, t2 = this.namespaceURI;
          return t2 === Ha && r2.documentElement.namespaceURI === Ha ? r2.createElement(e2) : r2.createElementNS(t2, e2);
        };
      }
      function te(e2) {
        return function() {
          return this.ownerDocument.createElementNS(e2.space, e2.local);
        };
      }
      var Jb = function(e2) {
        var r2 = Db(e2);
        return (r2.local ? te : se)(r2);
      };
      var ue = function(t2) {
        var r2 = typeof t2 == "function" ? t2 : Jb(t2);
        return this.select(function() {
          return this.appendChild(r2.apply(this, arguments));
        });
      };
      function ve() {
        return null;
      }
      var we = function(t2, r2) {
        var e2 = typeof t2 == "function" ? t2 : Jb(t2), $2 = r2 == null ? ve : typeof r2 == "function" ? r2 : zb(r2);
        return this.select(function() {
          return this.insertBefore(e2.apply(this, arguments), $2.apply(this, arguments) || null);
        });
      };
      function xe() {
        var e2 = this.parentNode;
        e2 && e2.removeChild(this);
      }
      var ye = function() {
        return this.each(xe);
      };
      function ze() {
        return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
      }
      function Ae() {
        return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
      }
      var Be = function(e2) {
        return this.select(e2 ? Ae : ze);
      };
      var Ce = function(t2) {
        return arguments.length ? this.property("__data__", t2) : this.node().__data__;
      };
      var De = {}, Kb = null;
      if (typeof document != "undefined") {
        var Ee = document.documentElement;
        "onmouseenter" in Ee || (De = { mouseenter: "mouseover", mouseleave: "mouseout" });
      }
      function Fe(e2, t2, n2) {
        return e2 = Lb(e2, t2, n2), function(t3) {
          var n3 = t3.relatedTarget;
          n3 && (n3 === this || 8 & n3.compareDocumentPosition(this)) || e2.call(this, t3);
        };
      }
      function Lb(e2, t2, n2) {
        return function(r2) {
          var $2 = Kb;
          Kb = r2;
          try {
            e2.call(this, this.__data__, t2, n2);
          } finally {
            Kb = $2;
          }
        };
      }
      function Ge(e2) {
        return e2.trim().split(/^|\s+/).map(function(e3) {
          var t2 = "", n2 = e3.indexOf(".");
          return n2 >= 0 && (t2 = e3.slice(n2 + 1), e3 = e3.slice(0, n2)), { type: e3, name: t2 };
        });
      }
      function He(e2) {
        return function() {
          var t2 = this.__on;
          if (t2) {
            for (var n2, r2 = 0, $2 = -1, i2 = t2.length; r2 < i2; ++r2)
              n2 = t2[r2], e2.type && n2.type !== e2.type || n2.name !== e2.name ? t2[++$2] = n2 : this.removeEventListener(n2.type, n2.listener, n2.capture);
            ++$2 ? t2.length = $2 : delete this.__on;
          }
        };
      }
      function Ie(e2, t2, n2) {
        var r2 = De.hasOwnProperty(e2.type) ? Fe : Lb;
        return function($2, i2, p2) {
          var o2, a2 = this.__on, v2 = r2(t2, i2, p2);
          if (a2) {
            for (var s2 = 0, u2 = a2.length; s2 < u2; ++s2)
              if ((o2 = a2[s2]).type === e2.type && o2.name === e2.name)
                return this.removeEventListener(o2.type, o2.listener, o2.capture), this.addEventListener(o2.type, o2.listener = v2, o2.capture = n2), void (o2.value = t2);
          }
          this.addEventListener(e2.type, v2, n2), o2 = { type: e2.type, name: e2.name, value: t2, listener: v2, capture: n2 }, a2 ? a2.push(o2) : this.__on = [o2];
        };
      }
      var Je = function(e2, t2, n2) {
        var r2, $2, i2 = Ge(e2 + ""), p2 = i2.length;
        if (!(arguments.length < 2)) {
          for (o2 = t2 ? Ie : He, n2 == null && (n2 = false), r2 = 0; r2 < p2; ++r2)
            this.each(o2(i2[r2], t2, n2));
          return this;
        }
        var o2 = this.node().__on;
        if (o2) {
          for (var a2, v2 = 0, s2 = o2.length; v2 < s2; ++v2)
            for (r2 = 0, a2 = o2[v2]; r2 < p2; ++r2)
              if (($2 = i2[r2]).type === a2.type && $2.name === a2.name)
                return a2.value;
        }
      };
      function Mb(t2, n2, e2) {
        var $2 = Eb(t2), a2 = $2.CustomEvent;
        typeof a2 == "function" ? a2 = new a2(n2, e2) : (a2 = $2.document.createEvent("Event"), e2 ? (a2.initEvent(n2, e2.bubbles, e2.cancelable), a2.detail = e2.detail) : a2.initEvent(n2, false, false)), t2.dispatchEvent(a2);
      }
      function Ke(t2, n2) {
        return function() {
          return Mb(this, t2, n2);
        };
      }
      function Le(t2, n2) {
        return function() {
          return Mb(this, t2, n2.apply(this, arguments));
        };
      }
      var Me = function(t2, n2) {
        return this.each((typeof n2 == "function" ? Le : Ke)(t2, n2));
      };
      var Ne = [null];
      function m(e2, $2) {
        this._groups = e2, this._parents = $2;
      }
      m.prototype = { constructor: m, select: rd, selectAll: ud, filter: wd, data: Bd, enter: xd, exit: Cd, join: Dd, merge: Ed, order: Fd, sort: Gd, call: Id, nodes: Jd, node: Kd, size: Ld, empty: Md, each: Nd, attr: Ud, style: Yd, property: be, classed: fe, text: je, html: ne, raise: pe, lower: re, append: ue, insert: we, remove: ye, clone: Be, datum: Ce, on: Je, dispatch: Me };
      var f = function(e2) {
        return typeof e2 == "string" ? new m([[document.querySelector(e2)]], [document.documentElement]) : new m([[e2]], Ne);
      };
      var Oe = function() {
        for (var e2, r2 = Kb; e2 = r2.sourceEvent; )
          r2 = e2;
        return r2;
      };
      var Pe = function(e2, t2) {
        var n2 = e2.ownerSVGElement || e2;
        if (n2.createSVGPoint) {
          var r2 = n2.createSVGPoint();
          return r2.x = t2.clientX, r2.y = t2.clientY, [(r2 = r2.matrixTransform(e2.getScreenCTM().inverse())).x, r2.y];
        }
        var i2 = e2.getBoundingClientRect();
        return [t2.clientX - i2.left - e2.clientLeft, t2.clientY - i2.top - e2.clientTop];
      };
      var w = function(e2) {
        var $2 = Oe();
        return $2.changedTouches && ($2 = $2.changedTouches[0]), Pe(e2, $2);
      };
      function ja() {
        var n2, r2, t2 = Sb().unknown(void 0), e2 = t2.domain, i2 = t2.range, u2 = 0, a2 = 1, o2 = false, $2 = 0, l2 = 0, g2 = 0.5;
        function d2() {
          var t3 = e2().length, d3 = a2 < u2, p2 = d3 ? a2 : u2, c2 = d3 ? u2 : a2;
          n2 = (c2 - p2) / Math.max(1, t3 - $2 + 2 * l2), o2 && (n2 = Math.floor(n2)), p2 += (c2 - p2 - n2 * (t3 - $2)) * g2, r2 = n2 * (1 - $2), o2 && (p2 = Math.round(p2), r2 = Math.round(r2));
          var f2 = Te(t3).map(function(r3) {
            return p2 + n2 * r3;
          });
          return i2(d3 ? f2.reverse() : f2);
        }
        return delete t2.unknown, t2.domain = function(n3) {
          return arguments.length ? (e2(n3), d2()) : e2();
        }, t2.range = function(n3) {
          return arguments.length ? ([u2, a2] = n3, u2 = +u2, a2 = +a2, d2()) : [u2, a2];
        }, t2.rangeRound = function(n3) {
          return [u2, a2] = n3, u2 = +u2, a2 = +a2, o2 = true, d2();
        }, t2.bandwidth = function() {
          return r2;
        }, t2.step = function() {
          return n2;
        }, t2.round = function(n3) {
          return arguments.length ? (o2 = !!n3, d2()) : o2;
        }, t2.padding = function(n3) {
          return arguments.length ? ($2 = Math.min(1, l2 = +n3), d2()) : $2;
        }, t2.paddingInner = function(n3) {
          return arguments.length ? ($2 = Math.min(1, n3), d2()) : $2;
        }, t2.paddingOuter = function(n3) {
          return arguments.length ? (l2 = +n3, d2()) : l2;
        }, t2.align = function(n3) {
          return arguments.length ? (g2 = Math.max(0, Math.min(1, n3)), d2()) : g2;
        }, t2.copy = function() {
          return ja(e2(), [u2, a2]).round(o2).paddingInner($2).paddingOuter(l2).align(g2);
        }, la.apply(d2(), arguments);
      }
      function Nb(n2) {
        var r2 = n2.copy;
        return n2.padding = n2.paddingOuter, delete n2.paddingInner, delete n2.paddingOuter, n2.copy = function() {
          return Nb(r2());
        }, n2;
      }
      function Qe() {
        return Nb(ja.apply(null, arguments).paddingInner(1));
      }
      var Ob = function($2, t2) {
        return $2 < t2 ? -1 : $2 > t2 ? 1 : $2 >= t2 ? 0 : NaN;
      };
      var Pb = function(r2) {
        return r2.length === 1 && (r2 = Re(r2)), { left: function(n2, t2, e2, $2) {
          for (e2 == null && (e2 = 0), $2 == null && ($2 = n2.length); e2 < $2; ) {
            var a2 = e2 + $2 >>> 1;
            r2(n2[a2], t2) < 0 ? e2 = a2 + 1 : $2 = a2;
          }
          return e2;
        }, right: function(n2, t2, e2, $2) {
          for (e2 == null && (e2 = 0), $2 == null && ($2 = n2.length); e2 < $2; ) {
            var a2 = e2 + $2 >>> 1;
            r2(n2[a2], t2) > 0 ? $2 = a2 : e2 = a2 + 1;
          }
          return e2;
        } };
      };
      function Re(r2) {
        return function(n2, t2) {
          return Ob(r2(n2), t2);
        };
      }
      var Qb = Pb(Ob), Se = Qb.right;
      var ci = Qb.left;
      var Te = function(t2, e2, r2) {
        t2 = +t2, e2 = +e2, r2 = (a2 = arguments.length) < 2 ? (e2 = t2, t2 = 0, 1) : a2 < 3 ? 1 : +r2;
        for (var $2 = -1, a2 = 0 | Math.max(0, Math.ceil((e2 - t2) / r2)), c2 = new Array(a2); ++$2 < a2; )
          c2[$2] = t2 + $2 * r2;
        return c2;
      };
      var Ja = Math.sqrt(50), Ka = Math.sqrt(10), La = Math.sqrt(2), Ue = function($2, t2, r2) {
        var e2, a2, o2, g2, z2 = -1;
        if (r2 = +r2, ($2 = +$2) === (t2 = +t2) && r2 > 0)
          return [$2];
        if ((e2 = t2 < $2) && (a2 = $2, $2 = t2, t2 = a2), (g2 = ka($2, t2, r2)) === 0 || !isFinite(g2))
          return [];
        if (g2 > 0)
          for ($2 = Math.ceil($2 / g2), t2 = Math.floor(t2 / g2), o2 = new Array(a2 = Math.ceil(t2 - $2 + 1)); ++z2 < a2; )
            o2[z2] = ($2 + z2) * g2;
        else
          for ($2 = Math.floor($2 * g2), t2 = Math.ceil(t2 * g2), o2 = new Array(a2 = Math.ceil($2 - t2 + 1)); ++z2 < a2; )
            o2[z2] = ($2 - z2) / g2;
        return e2 && o2.reverse(), o2;
      };
      function ka($2, t2, r2) {
        var e2 = (t2 - $2) / Math.max(0, r2), a2 = Math.floor(Math.log(e2) / Math.LN10), o2 = e2 / Math.pow(10, a2);
        return a2 >= 0 ? (o2 >= Ja ? 10 : o2 >= Ka ? 5 : o2 >= La ? 2 : 1) * Math.pow(10, a2) : -Math.pow(10, -a2) / (o2 >= Ja ? 10 : o2 >= Ka ? 5 : o2 >= La ? 2 : 1);
      }
      function Ma($2, t2, r2) {
        var e2 = Math.abs(t2 - $2) / Math.max(0, r2), a2 = Math.pow(10, Math.floor(Math.log(e2) / Math.LN10)), o2 = e2 / a2;
        return o2 >= Ja ? a2 *= 10 : o2 >= Ka ? a2 *= 5 : o2 >= La && (a2 *= 2), t2 < $2 ? -a2 : a2;
      }
      function la(t2, e2) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t2);
            break;
          default:
            this.range(e2).domain(t2);
        }
        return this;
      }
      const Rb = Symbol("implicit");
      function Sb() {
        var t2 = /* @__PURE__ */ new Map(), n2 = [], e2 = [], r2 = Rb;
        function i2(i3) {
          var $2 = i3 + "", o2 = t2.get($2);
          if (!o2) {
            if (r2 !== Rb)
              return r2;
            t2.set($2, o2 = n2.push(i3));
          }
          return e2[(o2 - 1) % e2.length];
        }
        return i2.domain = function(e3) {
          if (!arguments.length)
            return n2.slice();
          n2 = [], t2 = /* @__PURE__ */ new Map();
          for (const r3 of e3) {
            const e4 = r3 + "";
            t2.has(e4) || t2.set(e4, n2.push(r3));
          }
          return i2;
        }, i2.range = function(t3) {
          return arguments.length ? (e2 = Array.from(t3), i2) : e2.slice();
        }, i2.unknown = function(t3) {
          return arguments.length ? (r2 = t3, i2) : r2;
        }, i2.copy = function() {
          return Sb(n2, e2).unknown(r2);
        }, la.apply(i2, arguments), i2;
      }
      function Ve(t2) {
        var r2 = t2.domain;
        return t2.ticks = function(t3) {
          var $2 = r2();
          return Ue($2[0], $2[$2.length - 1], t3 == null ? 10 : t3);
        }, t2.tickFormat = function(t3, $2) {
          var e2 = r2();
          return Of(e2[0], e2[e2.length - 1], t3 == null ? 10 : t3, $2);
        }, t2.nice = function($2) {
          $2 == null && ($2 = 10);
          var e2, i2 = r2(), n2 = 0, o2 = i2.length - 1, a2 = i2[n2], k2 = i2[o2];
          return k2 < a2 && (e2 = a2, a2 = k2, k2 = e2, e2 = n2, n2 = o2, o2 = e2), (e2 = ka(a2, k2, $2)) > 0 ? (a2 = Math.floor(a2 / e2) * e2, k2 = Math.ceil(k2 / e2) * e2, e2 = ka(a2, k2, $2)) : e2 < 0 && (a2 = Math.ceil(a2 * e2) / e2, k2 = Math.floor(k2 * e2) / e2, e2 = ka(a2, k2, $2)), e2 > 0 ? (i2[n2] = Math.floor(a2 / e2) * e2, i2[o2] = Math.ceil(k2 / e2) * e2, r2(i2)) : e2 < 0 && (i2[n2] = Math.ceil(a2 * e2) / e2, i2[o2] = Math.floor(k2 * e2) / e2, r2(i2)), t2;
        }, t2;
      }
      function A() {
        var t2 = Bc(z, z);
        return t2.copy = function() {
          return Ac(t2, A());
        }, la.apply(t2, arguments), Ve(t2);
      }
      function x() {
      }
      var G = function(t2, e2, r2) {
        t2.prototype = e2.prototype = r2, r2.constructor = t2;
      };
      function P(t2, e2) {
        var r2 = Object.create(t2.prototype);
        for (var o2 in e2)
          r2[o2] = e2[o2];
        return r2;
      }
      var t = 0.7;
      var H = 1 / t;
      var I = "\\s*([+-]?\\d+)\\s*", R = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", e = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", We = /^#([0-9a-f]{3})$/, Xe = /^#([0-9a-f]{6})$/, Ye = new RegExp("^rgb\\(" + [I, I, I] + "\\)$"), Ze = new RegExp("^rgb\\(" + [e, e, e] + "\\)$"), $e = new RegExp("^rgba\\(" + [I, I, I, R] + "\\)$"), _e = new RegExp("^rgba\\(" + [e, e, e, R] + "\\)$"), af = new RegExp("^hsl\\(" + [R, e, e] + "\\)$"), bf = new RegExp("^hsla\\(" + [R, e, e, R] + "\\)$"), Tb = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
      function Ub() {
        return this.rgb().formatHex();
      }
      function cf() {
        return _b(this).formatHsl();
      }
      function Vb() {
        return this.rgb().formatRgb();
      }
      function S(r2) {
        var a2;
        return r2 = (r2 + "").trim().toLowerCase(), (a2 = We.exec(r2)) ? new g((a2 = parseInt(a2[1], 16)) >> 8 & 15 | a2 >> 4 & 240, a2 >> 4 & 15 | 240 & a2, (15 & a2) << 4 | 15 & a2, 1) : (a2 = Xe.exec(r2)) ? Wb(parseInt(a2[1], 16)) : (a2 = Ye.exec(r2)) ? new g(a2[1], a2[2], a2[3], 1) : (a2 = Ze.exec(r2)) ? new g(255 * a2[1] / 100, 255 * a2[2] / 100, 255 * a2[3] / 100, 1) : (a2 = $e.exec(r2)) ? Xb(a2[1], a2[2], a2[3], a2[4]) : (a2 = _e.exec(r2)) ? Xb(255 * a2[1] / 100, 255 * a2[2] / 100, 255 * a2[3] / 100, a2[4]) : (a2 = af.exec(r2)) ? $b(a2[1], a2[2] / 100, a2[3] / 100, 1) : (a2 = bf.exec(r2)) ? $b(a2[1], a2[2] / 100, a2[3] / 100, a2[4]) : Tb.hasOwnProperty(r2) ? Wb(Tb[r2]) : r2 === "transparent" ? new g(NaN, NaN, NaN, 0) : null;
      }
      function Wb(r2) {
        return new g(r2 >> 16 & 255, r2 >> 8 & 255, 255 & r2, 1);
      }
      function Xb(r2, a2, e2, $2) {
        return $2 <= 0 && (r2 = a2 = e2 = NaN), new g(r2, a2, e2, $2);
      }
      function Na(r2) {
        return r2 instanceof x || (r2 = S(r2)), r2 ? new g((r2 = r2.rgb()).r, r2.g, r2.b, r2.opacity) : new g();
      }
      function ma(r2, a2, e2, $2) {
        return arguments.length === 1 ? Na(r2) : new g(r2, a2, e2, $2 == null ? 1 : $2);
      }
      function g(r2, a2, e2, $2) {
        this.r = +r2, this.g = +a2, this.b = +e2, this.opacity = +$2;
      }
      function Yb() {
        return "#" + Oa(this.r) + Oa(this.g) + Oa(this.b);
      }
      function Zb() {
        var r2 = this.opacity;
        return ((r2 = isNaN(r2) ? 1 : Math.max(0, Math.min(1, r2))) === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (r2 === 1 ? ")" : ", " + r2 + ")");
      }
      function Oa(r2) {
        return ((r2 = Math.max(0, Math.min(255, Math.round(r2) || 0))) < 16 ? "0" : "") + r2.toString(16);
      }
      function $b(r2, a2, e2, $2) {
        return $2 <= 0 ? r2 = a2 = e2 = NaN : e2 <= 0 || e2 >= 1 ? r2 = a2 = NaN : a2 <= 0 && (r2 = NaN), new s(r2, a2, e2, $2);
      }
      function _b(r2) {
        if (r2 instanceof s)
          return new s(r2.h, r2.s, r2.l, r2.opacity);
        if (r2 instanceof x || (r2 = S(r2)), !r2)
          return new s();
        if (r2 instanceof s)
          return r2;
        var a2 = (r2 = r2.rgb()).r / 255, e2 = r2.g / 255, $2 = r2.b / 255, t2 = Math.min(a2, e2, $2), o2 = Math.max(a2, e2, $2), n2 = NaN, i2 = o2 - t2, f2 = (o2 + t2) / 2;
        return i2 ? (n2 = a2 === o2 ? (e2 - $2) / i2 + 6 * (e2 < $2) : e2 === o2 ? ($2 - a2) / i2 + 2 : (a2 - e2) / i2 + 4, i2 /= f2 < 0.5 ? o2 + t2 : 2 - o2 - t2, n2 *= 60) : i2 = f2 > 0 && f2 < 1 ? 0 : n2, new s(n2, i2, f2, r2.opacity);
      }
      function Pa(r2, a2, e2, $2) {
        return arguments.length === 1 ? _b(r2) : new s(r2, a2, e2, $2 == null ? 1 : $2);
      }
      function s(r2, a2, e2, $2) {
        this.h = +r2, this.s = +a2, this.l = +e2, this.opacity = +$2;
      }
      function Qa(r2, a2, e2) {
        return 255 * (r2 < 60 ? a2 + (e2 - a2) * r2 / 60 : r2 < 180 ? e2 : r2 < 240 ? a2 + (e2 - a2) * (240 - r2) / 60 : a2);
      }
      G(x, S, { copy: function(r2) {
        return Object.assign(new this.constructor(), this, r2);
      }, displayable: function() {
        return this.rgb().displayable();
      }, hex: Ub, formatHex: Ub, formatHsl: cf, formatRgb: Vb, toString: Vb }), G(g, ma, P(x, { brighter: function(r2) {
        return r2 = r2 == null ? H : Math.pow(H, r2), new g(this.r * r2, this.g * r2, this.b * r2, this.opacity);
      }, darker: function(r2) {
        return r2 = r2 == null ? t : Math.pow(t, r2), new g(this.r * r2, this.g * r2, this.b * r2, this.opacity);
      }, rgb: function() {
        return this;
      }, displayable: function() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
      }, hex: Yb, formatHex: Yb, formatRgb: Zb, toString: Zb })), G(s, Pa, P(x, { brighter: function(r2) {
        return r2 = r2 == null ? H : Math.pow(H, r2), new s(this.h, this.s, this.l * r2, this.opacity);
      }, darker: function(r2) {
        return r2 = r2 == null ? t : Math.pow(t, r2), new s(this.h, this.s, this.l * r2, this.opacity);
      }, rgb: function() {
        var r2 = this.h % 360 + 360 * (this.h < 0), a2 = isNaN(r2) || isNaN(this.s) ? 0 : this.s, e2 = this.l, $2 = e2 + (e2 < 0.5 ? e2 : 1 - e2) * a2, t2 = 2 * e2 - $2;
        return new g(Qa(r2 >= 240 ? r2 - 240 : r2 + 120, t2, $2), Qa(r2, t2, $2), Qa(r2 < 120 ? r2 + 240 : r2 - 120, t2, $2), this.opacity);
      }, displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      }, formatHsl: function() {
        var r2 = this.opacity;
        return ((r2 = isNaN(r2) ? 1 : Math.max(0, Math.min(1, r2))) === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (r2 === 1 ? ")" : ", " + r2 + ")");
      } }));
      var ac = Math.PI / 180;
      var bc = 180 / Math.PI;
      var na = 18, cc = 0.96422, dc = 1, ec = 0.82521, fc = 4 / 29, J = 6 / 29, gc = 3 * J * J, df = J * J * J;
      function hc($2) {
        if ($2 instanceof i)
          return new i($2.l, $2.a, $2.b, $2.opacity);
        if ($2 instanceof n)
          return ic($2);
        $2 instanceof g || ($2 = Na($2));
        var r2, t2, v2 = Ua($2.r), a2 = Ua($2.g), f2 = Ua($2.b), e2 = Ra((0.2225045 * v2 + 0.7168786 * a2 + 0.0606169 * f2) / dc);
        return v2 === a2 && a2 === f2 ? r2 = t2 = e2 : (r2 = Ra((0.4360747 * v2 + 0.3850649 * a2 + 0.1430804 * f2) / cc), t2 = Ra((0.0139322 * v2 + 0.0971045 * a2 + 0.7141733 * f2) / ec)), new i(116 * e2 - 16, 500 * (r2 - e2), 200 * (e2 - t2), $2.opacity);
      }
      function ef($2, r2, t2, v2) {
        return arguments.length === 1 ? hc($2) : new i($2, r2, t2, v2 == null ? 1 : v2);
      }
      function i($2, r2, t2, v2) {
        this.l = +$2, this.a = +r2, this.b = +t2, this.opacity = +v2;
      }
      function Ra($2) {
        return $2 > df ? Math.pow($2, 1 / 3) : $2 / gc + fc;
      }
      function Sa($2) {
        return $2 > J ? $2 * $2 * $2 : gc * ($2 - fc);
      }
      function Ta($2) {
        return 255 * ($2 <= 31308e-7 ? 12.92 * $2 : 1.055 * Math.pow($2, 1 / 2.4) - 0.055);
      }
      function Ua($2) {
        return ($2 /= 255) <= 0.04045 ? $2 / 12.92 : Math.pow(($2 + 0.055) / 1.055, 2.4);
      }
      function ff($2) {
        if ($2 instanceof n)
          return new n($2.h, $2.c, $2.l, $2.opacity);
        if ($2 instanceof i || ($2 = hc($2)), $2.a === 0 && $2.b === 0)
          return new n(NaN, 0 < $2.l && $2.l < 100 ? 0 : NaN, $2.l, $2.opacity);
        var r2 = Math.atan2($2.b, $2.a) * bc;
        return new n(r2 < 0 ? r2 + 360 : r2, Math.sqrt($2.a * $2.a + $2.b * $2.b), $2.l, $2.opacity);
      }
      function Va($2, r2, t2, v2) {
        return arguments.length === 1 ? ff($2) : new n($2, r2, t2, v2 == null ? 1 : v2);
      }
      function n($2, r2, t2, v2) {
        this.h = +$2, this.c = +r2, this.l = +t2, this.opacity = +v2;
      }
      function ic($2) {
        if (isNaN($2.h))
          return new i($2.l, 0, 0, $2.opacity);
        var r2 = $2.h * ac;
        return new i($2.l, Math.cos(r2) * $2.c, Math.sin(r2) * $2.c, $2.opacity);
      }
      G(i, ef, P(x, { brighter: function($2) {
        return new i(this.l + na * ($2 == null ? 1 : $2), this.a, this.b, this.opacity);
      }, darker: function($2) {
        return new i(this.l - na * ($2 == null ? 1 : $2), this.a, this.b, this.opacity);
      }, rgb: function() {
        var $2 = (this.l + 16) / 116, r2 = isNaN(this.a) ? $2 : $2 + this.a / 500, t2 = isNaN(this.b) ? $2 : $2 - this.b / 200;
        return r2 = cc * Sa(r2), $2 = dc * Sa($2), t2 = ec * Sa(t2), new g(Ta(3.1338561 * r2 - 1.6168667 * $2 - 0.4906146 * t2), Ta(-0.9787684 * r2 + 1.9161415 * $2 + 0.033454 * t2), Ta(0.0719453 * r2 - 0.2289914 * $2 + 1.4052427 * t2), this.opacity);
      } })), G(n, Va, P(x, { brighter: function($2) {
        return new n(this.h, this.c, this.l + na * ($2 == null ? 1 : $2), this.opacity);
      }, darker: function($2) {
        return new n(this.h, this.c, this.l - na * ($2 == null ? 1 : $2), this.opacity);
      }, rgb: function() {
        return ic(this).rgb();
      } }));
      var jc = -0.14861, Wa = 1.78277, Xa = -0.29227, oa = -0.90649, T = 1.97294, kc = T * oa, lc = T * Wa, mc = Wa * Xa - oa * jc;
      function gf($2) {
        if ($2 instanceof B)
          return new B($2.h, $2.s, $2.l, $2.opacity);
        $2 instanceof g || ($2 = Na($2));
        var r2 = $2.r / 255, t2 = $2.g / 255, e2 = $2.b / 255, C2 = (mc * e2 + kc * r2 - lc * t2) / (mc + kc - lc), a2 = e2 - C2, M2 = (T * (t2 - C2) - Xa * a2) / oa, i2 = Math.sqrt(M2 * M2 + a2 * a2) / (T * C2 * (1 - C2)), X2 = i2 ? Math.atan2(M2, a2) * bc - 120 : NaN;
        return new B(X2 < 0 ? X2 + 360 : X2, i2, C2, $2.opacity);
      }
      function Ya($2, r2, t2, e2) {
        return arguments.length === 1 ? gf($2) : new B($2, r2, t2, e2 == null ? 1 : e2);
      }
      function B($2, r2, t2, e2) {
        this.h = +$2, this.s = +r2, this.l = +t2, this.opacity = +e2;
      }
      G(B, Ya, P(x, { brighter: function($2) {
        return $2 = $2 == null ? H : Math.pow(H, $2), new B(this.h, this.s, this.l * $2, this.opacity);
      }, darker: function($2) {
        return $2 = $2 == null ? t : Math.pow(t, $2), new B(this.h, this.s, this.l * $2, this.opacity);
      }, rgb: function() {
        var $2 = isNaN(this.h) ? 0 : (this.h + 120) * ac, r2 = +this.l, t2 = isNaN(this.s) ? 0 : this.s * r2 * (1 - r2), e2 = Math.cos($2), C2 = Math.sin($2);
        return new g(255 * (r2 + t2 * (jc * e2 + Wa * C2)), 255 * (r2 + t2 * (Xa * e2 + oa * C2)), 255 * (r2 + t2 * (T * e2)), this.opacity);
      } }));
      function nc($2, r2, t2, e2, a2) {
        var l2 = $2 * $2, o2 = l2 * $2;
        return ((1 - 3 * $2 + 3 * l2 - o2) * r2 + (4 - 6 * l2 + 3 * o2) * t2 + (1 + 3 * $2 + 3 * l2 - 3 * o2) * e2 + o2 * a2) / 6;
      }
      var hf = function($2) {
        var r2 = $2.length - 1;
        return function(t2) {
          var e2 = t2 <= 0 ? t2 = 0 : t2 >= 1 ? (t2 = 1, r2 - 1) : Math.floor(t2 * r2), a2 = $2[e2], l2 = $2[e2 + 1], o2 = e2 > 0 ? $2[e2 - 1] : 2 * a2 - l2, s2 = e2 < r2 - 1 ? $2[e2 + 2] : 2 * l2 - a2;
          return nc((t2 - e2 / r2) * r2, o2, a2, l2, s2);
        };
      };
      var jf = function(r2) {
        var $2 = r2.length;
        return function(t2) {
          var e2 = Math.floor(((t2 %= 1) < 0 ? ++t2 : t2) * $2), n2 = r2[(e2 + $2 - 1) % $2], a2 = r2[e2 % $2], o2 = r2[(e2 + 1) % $2], h2 = r2[(e2 + 2) % $2];
          return nc((t2 - e2 / $2) * $2, n2, a2, o2, h2);
        };
      };
      function oc($2, t2) {
        return function(r2) {
          return $2 + r2 * t2;
        };
      }
      function kf($2, t2, r2) {
        return $2 = Math.pow($2, r2), t2 = Math.pow(t2, r2) - $2, r2 = 1 / r2, function(n2) {
          return Math.pow($2 + n2 * t2, r2);
        };
      }
      function Za($2, t2) {
        var r2 = t2 - $2;
        return r2 ? oc($2, r2 > 180 || r2 < -180 ? r2 - 360 * Math.round(r2 / 360) : r2) : pa(isNaN($2) ? t2 : $2);
      }
      function lf($2) {
        return ($2 = +$2) == 1 ? j : function(t2, r2) {
          return r2 - t2 ? kf(t2, r2, $2) : pa(isNaN(t2) ? r2 : t2);
        };
      }
      function j($2, t2) {
        var r2 = t2 - $2;
        return r2 ? oc($2, r2) : pa(isNaN($2) ? t2 : $2);
      }
      var pa = function(t2) {
        return function() {
          return t2;
        };
      };
      var pc = function r2($2) {
        var o2 = lf($2);
        function e2(r3, $3) {
          var e3 = o2((r3 = ma(r3)).r, ($3 = ma($3)).r), a2 = o2(r3.g, $3.g), t2 = o2(r3.b, $3.b), i2 = j(r3.opacity, $3.opacity);
          return function($4) {
            return r3.r = e3($4), r3.g = a2($4), r3.b = t2($4), r3.opacity = i2($4), r3 + "";
          };
        }
        return e2.gamma = r2, e2;
      }(1);
      function qc(r2) {
        return function($2) {
          var o2, e2, a2 = $2.length, t2 = new Array(a2), i2 = new Array(a2), v2 = new Array(a2);
          for (o2 = 0; o2 < a2; ++o2)
            e2 = ma($2[o2]), t2[o2] = e2.r || 0, i2[o2] = e2.g || 0, v2[o2] = e2.b || 0;
          return t2 = r2(t2), i2 = r2(i2), v2 = r2(v2), e2.opacity = 1, function(r3) {
            return e2.r = t2(r3), e2.g = i2(r3), e2.b = v2(r3), e2 + "";
          };
        };
      }
      var di = qc(hf);
      var ei = qc(jf);
      var mf = function(r2, e2) {
        var t2, $2 = e2 ? e2.length : 0, a2 = r2 ? Math.min($2, r2.length) : 0, n2 = new Array(a2), o2 = new Array($2);
        for (t2 = 0; t2 < a2; ++t2)
          n2[t2] = ab(r2[t2], e2[t2]);
        for (; t2 < $2; ++t2)
          o2[t2] = e2[t2];
        return function(r3) {
          for (t2 = 0; t2 < a2; ++t2)
            o2[t2] = n2[t2](r3);
          return o2;
        };
      };
      var nf = function(e2, t2) {
        var r2 = new Date();
        return t2 -= e2 = +e2, function($2) {
          return r2.setTime(e2 + t2 * $2), r2;
        };
      };
      var v = function(t2, $2) {
        return $2 -= t2 = +t2, function(e2) {
          return t2 + $2 * e2;
        };
      };
      var of = function(e2, r2) {
        var t2, $2 = {}, i2 = {};
        for (t2 in e2 !== null && typeof e2 == "object" || (e2 = {}), r2 !== null && typeof r2 == "object" || (r2 = {}), r2)
          t2 in e2 ? $2[t2] = ab(e2[t2], r2[t2]) : i2[t2] = r2[t2];
        return function(e3) {
          for (t2 in $2)
            i2[t2] = $2[t2](e3);
          return i2;
        };
      };
      var $a = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, _a = new RegExp($a.source, "g");
      function pf(r2) {
        return function() {
          return r2;
        };
      }
      function qf(r2) {
        return function($2) {
          return r2($2) + "";
        };
      }
      var rf = function(r2, $2) {
        var n2, e2, t2, a2 = $a.lastIndex = _a.lastIndex = 0, u2 = -1, E2 = [], o2 = [];
        for (r2 += "", $2 += ""; (n2 = $a.exec(r2)) && (e2 = _a.exec($2)); )
          (t2 = e2.index) > a2 && (t2 = $2.slice(a2, t2), E2[u2] ? E2[u2] += t2 : E2[++u2] = t2), (n2 = n2[0]) === (e2 = e2[0]) ? E2[u2] ? E2[u2] += e2 : E2[++u2] = e2 : (E2[++u2] = null, o2.push({ i: u2, x: v(n2, e2) })), a2 = _a.lastIndex;
        return a2 < $2.length && (t2 = $2.slice(a2), E2[u2] ? E2[u2] += t2 : E2[++u2] = t2), E2.length < 2 ? o2[0] ? qf(o2[0].x) : pf($2) : ($2 = o2.length, function(r3) {
          for (var n3, e3 = 0; e3 < $2; ++e3)
            E2[(n3 = o2[e3]).i] = n3.x(r3);
          return E2.join("");
        });
      };
      var ab = function(r2, $2) {
        var e2, c2 = typeof $2;
        return $2 == null || c2 === "boolean" ? pa($2) : (c2 === "number" ? v : c2 === "string" ? (e2 = S($2)) ? ($2 = e2, pc) : rf : $2 instanceof S ? pc : $2 instanceof Date ? nf : Array.isArray($2) ? mf : typeof $2.valueOf != "function" && typeof $2.toString != "function" || isNaN($2) ? of : v)(r2, $2);
      };
      var sf = function(t2, n2) {
        return n2 -= t2 = +t2, function(r2) {
          return Math.round(t2 + n2 * r2);
        };
      };
      function rc(r2, e2, t2, l2) {
        function n2(r3) {
          return r3.length ? r3.pop() + " " : "";
        }
        return function(a2, $2) {
          var s2 = [], o2 = [];
          return a2 = r2(a2), $2 = r2($2), function(r3, l3, n3, a3, $3, s3) {
            if (r3 !== n3 || l3 !== a3) {
              var o3 = $3.push("translate(", null, e2, null, t2);
              s3.push({ i: o3 - 4, x: v(r3, n3) }, { i: o3 - 2, x: v(l3, a3) });
            } else
              (n3 || a3) && $3.push("translate(" + n3 + e2 + a3 + t2);
          }(a2.translateX, a2.translateY, $2.translateX, $2.translateY, s2, o2), function(r3, e3, t3, a3) {
            r3 !== e3 ? (r3 - e3 > 180 ? e3 += 360 : e3 - r3 > 180 && (r3 += 360), a3.push({ i: t3.push(n2(t3) + "rotate(", null, l2) - 2, x: v(r3, e3) })) : e3 && t3.push(n2(t3) + "rotate(" + e3 + l2);
          }(a2.rotate, $2.rotate, s2, o2), function(r3, e3, t3, a3) {
            r3 !== e3 ? a3.push({ i: t3.push(n2(t3) + "skewX(", null, l2) - 2, x: v(r3, e3) }) : e3 && t3.push(n2(t3) + "skewX(" + e3 + l2);
          }(a2.skewX, $2.skewX, s2, o2), function(r3, e3, t3, l3, a3, $3) {
            if (r3 !== t3 || e3 !== l3) {
              var s3 = a3.push(n2(a3) + "scale(", null, ",", null, ")");
              $3.push({ i: s3 - 4, x: v(r3, t3) }, { i: s3 - 2, x: v(e3, l3) });
            } else
              t3 === 1 && l3 === 1 || a3.push(n2(a3) + "scale(" + t3 + "," + l3 + ")");
          }(a2.scaleX, a2.scaleY, $2.scaleX, $2.scaleY, s2, o2), a2 = $2 = null, function(r3) {
            for (var e3, t3 = -1, l3 = o2.length; ++t3 < l3; )
              s2[(e3 = o2[t3]).i] = e3.x(r3);
            return s2.join("");
          };
        };
      }
      var qa, sc, tf, bb;
      function uf($2) {
        return $2 === "none" ? cb : (qa || (qa = document.createElement("DIV"), sc = document.documentElement, tf = document.defaultView), qa.style.transform = $2, $2 = tf.getComputedStyle(sc.appendChild(qa), null).getPropertyValue("transform"), sc.removeChild(qa), $2 = $2.slice(7, -1).split(","), uc(+$2[0], +$2[1], +$2[2], +$2[3], +$2[4], +$2[5]));
      }
      function vf($2) {
        return $2 == null ? cb : (bb || (bb = document.createElementNS("http://www.w3.org/2000/svg", "g")), bb.setAttribute("transform", $2), ($2 = bb.transform.baseVal.consolidate()) ? ($2 = $2.matrix, uc($2.a, $2.b, $2.c, $2.d, $2.e, $2.f)) : cb);
      }
      var tc = 180 / Math.PI, cb = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
      var uc = function(t2, e2, a2, $2, r2, s2) {
        var X2, n2, w2;
        return (X2 = Math.sqrt(t2 * t2 + e2 * e2)) && (t2 /= X2, e2 /= X2), (w2 = t2 * a2 + e2 * $2) && (a2 -= t2 * w2, $2 -= e2 * w2), (n2 = Math.sqrt(a2 * a2 + $2 * $2)) && (a2 /= n2, $2 /= n2, w2 /= n2), t2 * $2 < e2 * a2 && (t2 = -t2, e2 = -e2, w2 = -w2, X2 = -X2), { translateX: r2, translateY: s2, rotate: Math.atan2(e2, t2) * tc, skewX: Math.atan(w2) * tc, scaleX: X2, scaleY: n2 };
      };
      var fi = rc(uf, "px, ", "px)", "deg)");
      var gi = rc(vf, ", ", ")", ")");
      var hi = Math.SQRT2;
      function vc($2) {
        return function(r2, e2) {
          var o2 = $2((r2 = Pa(r2)).h, (e2 = Pa(e2)).h), t2 = j(r2.s, e2.s), l2 = j(r2.l, e2.l), d2 = j(r2.opacity, e2.opacity);
          return function($3) {
            return r2.h = o2($3), r2.s = t2($3), r2.l = l2($3), r2.opacity = d2($3), r2 + "";
          };
        };
      }
      var ii = vc(Za);
      var ji = vc(j);
      function wc($2) {
        return function(r2, o2) {
          var c2 = $2((r2 = Va(r2)).h, (o2 = Va(o2)).h), t2 = j(r2.c, o2.c), x2 = j(r2.l, o2.l), l2 = j(r2.opacity, o2.opacity);
          return function($3) {
            return r2.h = c2($3), r2.c = t2($3), r2.l = x2($3), r2.opacity = l2($3), r2 + "";
          };
        };
      }
      var ki = wc(Za);
      var li = wc(j);
      function xc($2) {
        return function r2(o2) {
          function V2(r3, V3) {
            var e2 = $2((r3 = Ya(r3)).h, (V3 = Ya(V3)).h), t2 = j(r3.s, V3.s), i2 = j(r3.l, V3.l), l2 = j(r3.opacity, V3.opacity);
            return function($3) {
              return r3.h = e2($3), r3.s = t2($3), r3.l = i2(Math.pow($3, o2)), r3.opacity = l2($3), r3 + "";
            };
          }
          return o2 = +o2, V2.gamma = r2, V2;
        }(1);
      }
      var mi = xc(Za);
      var ni = xc(j);
      var wf = function(t2) {
        return function() {
          return t2;
        };
      };
      var xf = function($2) {
        return +$2;
      };
      var yc = [0, 1];
      function z(r2) {
        return r2;
      }
      function db(r2, n2) {
        return (n2 -= r2 = +r2) ? function(t2) {
          return (t2 - r2) / n2;
        } : wf(isNaN(n2) ? NaN : 0.5);
      }
      function zc(r2) {
        var n2, t2 = r2[0], e2 = r2[r2.length - 1];
        return t2 > e2 && (n2 = t2, t2 = e2, e2 = n2), function(r3) {
          return Math.max(t2, Math.min(e2, r3));
        };
      }
      function yf(r2, n2, t2) {
        var e2 = r2[0], $2 = r2[1], a2 = n2[0], o2 = n2[1];
        return $2 < e2 ? (e2 = db($2, e2), a2 = t2(o2, a2)) : (e2 = db(e2, $2), a2 = t2(a2, o2)), function(r3) {
          return a2(e2(r3));
        };
      }
      function zf(r2, n2, t2) {
        var e2 = Math.min(r2.length, n2.length) - 1, $2 = new Array(e2), a2 = new Array(e2), o2 = -1;
        for (r2[e2] < r2[0] && (r2 = r2.slice().reverse(), n2 = n2.slice().reverse()); ++o2 < e2; )
          $2[o2] = db(r2[o2], r2[o2 + 1]), a2[o2] = t2(n2[o2], n2[o2 + 1]);
        return function(n3) {
          var t3 = Se(r2, n3, 1, e2) - 1;
          return a2[t3]($2[t3](n3));
        };
      }
      function Ac(r2, n2) {
        return n2.domain(r2.domain()).range(r2.range()).interpolate(r2.interpolate()).clamp(r2.clamp()).unknown(r2.unknown());
      }
      function Af() {
        var r2, n2, t2, e2, $2, a2, o2 = yc, i2 = yc, u2 = ab, p2 = z;
        function l2() {
          return e2 = Math.min(o2.length, i2.length) > 2 ? zf : yf, $2 = a2 = null, c2;
        }
        function c2(n3) {
          return isNaN(n3 = +n3) ? t2 : ($2 || ($2 = e2(o2.map(r2), i2, u2)))(r2(p2(n3)));
        }
        return c2.invert = function(t3) {
          return p2(n2((a2 || (a2 = e2(i2, o2.map(r2), v)))(t3)));
        }, c2.domain = function(r3) {
          return arguments.length ? (o2 = Array.from(r3, xf), p2 === z || (p2 = zc(o2)), l2()) : o2.slice();
        }, c2.range = function(r3) {
          return arguments.length ? (i2 = Array.from(r3), l2()) : i2.slice();
        }, c2.rangeRound = function(r3) {
          return i2 = Array.from(r3), u2 = sf, l2();
        }, c2.clamp = function(r3) {
          return arguments.length ? (p2 = r3 ? zc(o2) : z, c2) : p2 !== z;
        }, c2.interpolate = function(r3) {
          return arguments.length ? (u2 = r3, l2()) : u2;
        }, c2.unknown = function(r3) {
          return arguments.length ? (t2 = r3, c2) : t2;
        }, function(t3, e3) {
          return r2 = t3, n2 = e3, l2();
        };
      }
      function Bc(r2, n2) {
        return Af()(r2, n2);
      }
      var eb, Bf, Cf;
      function Df($2) {
        return eb = Kf($2), Bf = eb.format, Cf = eb.formatPrefix, eb;
      }
      var ra = function(e2, t2) {
        if ((l2 = (e2 = t2 ? e2.toExponential(t2 - 1) : e2.toExponential()).indexOf("e")) < 0)
          return null;
        var l2, n2 = e2.slice(0, l2);
        return [n2.length > 1 ? n2[0] + n2.slice(2) : n2, +e2.slice(l2 + 1)];
      };
      var K = function(t2) {
        return (t2 = ra(Math.abs(t2))) ? t2[1] : NaN;
      };
      var Ef = function(r2, t2) {
        return function(e2, n2) {
          for (var $2 = e2.length, u2 = [], o2 = 0, a2 = r2[0], f2 = 0; $2 > 0 && a2 > 0 && (f2 + a2 + 1 > n2 && (a2 = Math.max(1, n2 - f2)), u2.push(e2.substring($2 -= a2, $2 + a2)), !((f2 += a2 + 1) > n2)); )
            a2 = r2[o2 = (o2 + 1) % r2.length];
          return u2.reverse().join(t2);
        };
      };
      var Ff = function(t2) {
        return function(e2) {
          return e2.replace(/[0-9]/g, function(e3) {
            return t2[+e3];
          });
        };
      };
      var Gf = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function sa(i2) {
        return new fb(i2);
      }
      function fb(i2) {
        if (!(t2 = Gf.exec(i2)))
          throw new Error("invalid format: " + i2);
        var t2;
        this.fill = t2[1] || " ", this.align = t2[2] || ">", this.sign = t2[3] || "-", this.symbol = t2[4] || "", this.zero = !!t2[5], this.width = t2[6] && +t2[6], this.comma = !!t2[7], this.precision = t2[8] && +t2[8].slice(1), this.trim = !!t2[9], this.type = t2[10] || "";
      }
      sa.prototype = fb.prototype, fb.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width == null ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (this.precision == null ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
      };
      var Hf = function(e2) {
        e:
          for (var r2, t2 = e2.length, a2 = 1, $2 = -1; a2 < t2; ++a2)
            switch (e2[a2]) {
              case ".":
                $2 = r2 = a2;
                break;
              case "0":
                $2 === 0 && ($2 = a2), r2 = a2;
                break;
              default:
                if ($2 > 0) {
                  if (!+e2[a2])
                    break e;
                  $2 = 0;
                }
            }
        return $2 > 0 ? e2.slice(0, $2) + e2.slice(r2 + 1) : e2;
      };
      var If;
      var Jf = function(e2, p2) {
        var r2, a2 = ra(e2, p2);
        if (!a2)
          return e2 + "";
        var $2 = a2[0], t2 = a2[1], f2 = t2 - (r2 = If = 3 * Math.max(-8, Math.min(8, Math.floor(t2 / 3))), r2) + 1, o2 = $2.length;
        return f2 === o2 ? $2 : f2 > o2 ? $2 + new Array(f2 - o2 + 1).join("0") : f2 > 0 ? $2.slice(0, f2) + "." + $2.slice(f2) : "0." + new Array(1 - f2).join("0") + ra(e2, Math.max(0, p2 + f2 - 1))[0];
      };
      var Cc = function(r2, e2) {
        var t2 = ra(r2, e2);
        if (!t2)
          return r2 + "";
        var $2 = t2[0], a2 = t2[1];
        return a2 < 0 ? "0." + new Array(-a2).join("0") + $2 : $2.length > a2 + 1 ? $2.slice(0, a2 + 1) + "." + $2.slice(a2 + 1) : $2 + new Array(a2 - $2.length + 2).join("0");
      };
      var Dc = { "%": function(t2, r2) {
        return (100 * t2).toFixed(r2);
      }, b: function(t2) {
        return Math.round(t2).toString(2);
      }, c: function(t2) {
        return t2 + "";
      }, d: function(t2) {
        return Math.round(t2).toString(10);
      }, e: function(t2, r2) {
        return t2.toExponential(r2);
      }, f: function(t2, r2) {
        return t2.toFixed(r2);
      }, g: function(t2, r2) {
        return t2.toPrecision(r2);
      }, o: function(t2) {
        return Math.round(t2).toString(8);
      }, p: function(t2, r2) {
        return Cc(100 * t2, r2);
      }, r: Cc, s: Jf, X: function(t2) {
        return Math.round(t2).toString(16).toUpperCase();
      }, x: function(t2) {
        return Math.round(t2).toString(16);
      } };
      var Ec = function(t2) {
        return t2;
      };
      var Fc = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"], Kf = function(r2) {
        var e2 = r2.grouping && r2.thousands ? Ef(r2.grouping, r2.thousands) : Ec, t2 = r2.currency, a2 = r2.decimal, m2 = r2.numerals ? Ff(r2.numerals) : Ec, $2 = r2.percent || "%";
        function i2(r3) {
          var i3 = (r3 = sa(r3)).fill, o2 = r3.align, n2 = r3.sign, p2 = r3.symbol, f2 = r3.zero, l2 = r3.width, s2 = r3.comma, u2 = r3.precision, M2 = r3.trim, c2 = r3.type;
          c2 === "n" ? (s2 = true, c2 = "g") : Dc[c2] || (u2 == null && (u2 = 12), M2 = true, c2 = "g"), (f2 || i3 === "0" && o2 === "=") && (f2 = true, i3 = "0", o2 = "=");
          var I2 = p2 === "$" ? t2[0] : p2 === "#" && /[boxX]/.test(c2) ? "0" + c2.toLowerCase() : "", V2 = p2 === "$" ? t2[1] : /[%p]/.test(c2) ? $2 : "", h2 = Dc[c2], g2 = /[defgprs%]/.test(c2);
          function x2(r4) {
            var t3, $3, p3, x3 = I2, d2 = V2;
            if (c2 === "c")
              d2 = h2(r4) + d2, r4 = "";
            else {
              var v2 = (r4 = +r4) < 0;
              if (r4 = h2(Math.abs(r4), u2), M2 && (r4 = Hf(r4)), v2 && +r4 == 0 && (v2 = false), x3 = (v2 ? n2 === "(" ? n2 : "-" : n2 === "-" || n2 === "(" ? "" : n2) + x3, d2 = (c2 === "s" ? Fc[8 + If / 3] : "") + d2 + (v2 && n2 === "(" ? ")" : ""), g2) {
                for (t3 = -1, $3 = r4.length; ++t3 < $3; )
                  if (48 > (p3 = r4.charCodeAt(t3)) || p3 > 57) {
                    d2 = (p3 === 46 ? a2 + r4.slice(t3 + 1) : r4.slice(t3)) + d2, r4 = r4.slice(0, t3);
                    break;
                  }
              }
            }
            s2 && !f2 && (r4 = e2(r4, 1 / 0));
            var y2 = x3.length + r4.length + d2.length, q2 = y2 < l2 ? new Array(l2 - y2 + 1).join(i3) : "";
            switch (s2 && f2 && (r4 = e2(q2 + r4, q2.length ? l2 - d2.length : 1 / 0), q2 = ""), o2) {
              case "<":
                r4 = x3 + r4 + d2 + q2;
                break;
              case "=":
                r4 = x3 + q2 + r4 + d2;
                break;
              case "^":
                r4 = q2.slice(0, y2 = q2.length >> 1) + x3 + r4 + d2 + q2.slice(y2);
                break;
              default:
                r4 = q2 + x3 + r4 + d2;
            }
            return m2(r4);
          }
          return u2 = u2 == null ? 6 : /[gprs]/.test(c2) ? Math.max(1, Math.min(21, u2)) : Math.max(0, Math.min(20, u2)), x2.toString = function() {
            return r3 + "";
          }, x2;
        }
        return { format: i2, formatPrefix: function(r3, e3) {
          var t3 = i2(((r3 = sa(r3)).type = "f", r3)), a3 = 3 * Math.max(-8, Math.min(8, Math.floor(K(e3) / 3))), m3 = Math.pow(10, -a3), $3 = Fc[8 + a3 / 3];
          return function(r4) {
            return t3(m3 * r4) + $3;
          };
        } };
      };
      Df({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] });
      var Lf = function(e2) {
        return Math.max(0, -K(Math.abs(e2)));
      };
      var Mf = function(t2, $2) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(K($2) / 3))) - K(Math.abs(t2)));
      };
      var Nf = function($2, e2) {
        return $2 = Math.abs($2), e2 = Math.abs(e2) - $2, Math.max(0, K(e2) - K($2)) + 1;
      };
      var Of = function(a2, r2, e2, i2) {
        var $2, t2 = Ma(a2, r2, e2);
        switch ((i2 = sa(i2 == null ? ",f" : i2)).type) {
          case "s":
            var p2 = Math.max(Math.abs(a2), Math.abs(r2));
            return i2.precision != null || isNaN($2 = Mf(t2, p2)) || (i2.precision = $2), Cf(i2, p2);
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            i2.precision != null || isNaN($2 = Nf(t2, Math.max(Math.abs(a2), Math.abs(r2)))) || (i2.precision = $2 - (i2.type === "e"));
            break;
          case "f":
          case "%":
            i2.precision != null || isNaN($2 = Lf(t2)) || (i2.precision = $2 - 2 * (i2.type === "%"));
        }
        return Bf(i2);
      };
      var gb = Array.prototype.slice;
      var Pf = function(x2) {
        return x2;
      };
      var hb = 1, ib = 2, jb = 3, Y = 4, Gc = 1e-6;
      function Qf(t2) {
        return "translate(" + (t2 + 0.5) + ",0)";
      }
      function Rf(t2) {
        return "translate(0," + (t2 + 0.5) + ")";
      }
      function Sf(t2) {
        return function(r2) {
          return +t2(r2);
        };
      }
      function Tf(t2) {
        var r2 = Math.max(0, t2.bandwidth() - 1) / 2;
        return t2.round() && (r2 = Math.round(r2)), function($2) {
          return +t2($2) + r2;
        };
      }
      function Uf() {
        return !this.__axis;
      }
      function Hc(t2, r2) {
        var $2 = [], n2 = null, e2 = null, a2 = 6, i2 = 6, c2 = 3, o2 = t2 === hb || t2 === Y ? -1 : 1, l2 = t2 === Y || t2 === ib ? "x" : "y", s2 = t2 === hb || t2 === jb ? Qf : Rf;
        function u2(u3) {
          var M2 = n2 == null ? r2.ticks ? r2.ticks.apply(r2, $2) : r2.domain() : n2, F2 = e2 == null ? r2.tickFormat ? r2.tickFormat.apply(r2, $2) : Pf : e2, f2 = Math.max(a2, 0) + c2, p2 = r2.range(), v2 = +p2[0] + 0.5, x2 = +p2[p2.length - 1] + 0.5, m2 = (r2.bandwidth ? Tf : Sf)(r2.copy()), h2 = u3.selection ? u3.selection() : u3, g2 = h2.selectAll(".domain").data([null]), d2 = h2.selectAll(".tick").data(M2, r2).order(), k2 = d2.exit(), y2 = d2.enter().append("g").attr("class", "tick"), b2 = d2.select("line"), _2 = d2.select("text");
          g2 = g2.merge(g2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), d2 = d2.merge(y2), b2 = b2.merge(y2.append("line").attr("stroke", "currentColor").attr(l2 + "2", o2 * a2)), _2 = _2.merge(y2.append("text").attr("fill", "currentColor").attr(l2, o2 * f2).attr("dy", t2 === hb ? "0em" : t2 === jb ? "0.71em" : "0.32em")), u3 !== h2 && (g2 = g2.transition(u3), d2 = d2.transition(u3), b2 = b2.transition(u3), _2 = _2.transition(u3), k2 = k2.transition(u3).attr("opacity", Gc).attr("transform", function(t3) {
            return isFinite(t3 = m2(t3)) ? s2(t3) : this.getAttribute("transform");
          }), y2.attr("opacity", Gc).attr("transform", function(t3) {
            var r3 = this.parentNode.__axis;
            return s2(r3 && isFinite(r3 = r3(t3)) ? r3 : m2(t3));
          })), k2.remove(), g2.attr("d", t2 === Y || t2 == ib ? i2 ? "M" + o2 * i2 + "," + v2 + "H0.5V" + x2 + "H" + o2 * i2 : "M0.5," + v2 + "V" + x2 : i2 ? "M" + v2 + "," + o2 * i2 + "V0.5H" + x2 + "V" + o2 * i2 : "M" + v2 + ",0.5H" + x2), d2.attr("opacity", 1).attr("transform", function(t3) {
            return s2(m2(t3));
          }), b2.attr(l2 + "2", o2 * a2), _2.attr(l2, o2 * f2).text(F2), h2.filter(Uf).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t2 === ib ? "start" : t2 === Y ? "end" : "middle"), h2.each(function() {
            this.__axis = m2;
          });
        }
        return u2.scale = function(t3) {
          return arguments.length ? (r2 = t3, u2) : r2;
        }, u2.ticks = function() {
          return $2 = gb.call(arguments), u2;
        }, u2.tickArguments = function(t3) {
          return arguments.length ? ($2 = t3 == null ? [] : gb.call(t3), u2) : $2.slice();
        }, u2.tickValues = function(t3) {
          return arguments.length ? (n2 = t3 == null ? null : gb.call(t3), u2) : n2 && n2.slice();
        }, u2.tickFormat = function(t3) {
          return arguments.length ? (e2 = t3, u2) : e2;
        }, u2.tickSize = function(t3) {
          return arguments.length ? (a2 = i2 = +t3, u2) : a2;
        }, u2.tickSizeInner = function(t3) {
          return arguments.length ? (a2 = +t3, u2) : a2;
        }, u2.tickSizeOuter = function(t3) {
          return arguments.length ? (i2 = +t3, u2) : i2;
        }, u2.tickPadding = function(t3) {
          return arguments.length ? (c2 = +t3, u2) : c2;
        }, u2;
      }
      function Vf(t2) {
        return Hc(jb, t2);
      }
      function Wf(t2) {
        return Hc(Y, t2);
      }
      const Xf = (t2, { yScale: l2, tickCount: e2, fontFamily: i2, unxkcdify: s2, stroke: a2 }) => {
        t2.append("g").call(Wf(l2).tickSize(1).tickPadding(10).ticks(e2, "s")), t2.selectAll(".domain").attr("filter", s2 ? null : "url(#xkcdify)").style("stroke", a2), t2.selectAll(".tick > text").style("font-family", i2).style("font-size", "16").style("fill", a2);
      }, Yf = (t2, { xScale: l2, tickCount: e2, moveDown: i2, fontFamily: s2, unxkcdify: a2, stroke: $2 }) => {
        t2.append("g").attr("transform", `translate(0,${i2})`).call(Vf(l2).tickSize(0).tickPadding(6).ticks(e2)), t2.selectAll(".domain").attr("filter", a2 ? null : "url(#xkcdify)").style("stroke", $2), t2.selectAll(".tick > text").style("font-family", s2).style("font-size", "16").style("fill", $2);
      };
      var y = { xAxis: Yf, yAxis: Xf };
      const Zf = (t2, e2, a2) => {
        t2.append("text").style("font-size", "20").style("font-weight", "bold").style("fill", a2).attr("x", "50%").attr("y", 30).attr("text-anchor", "middle").text(e2);
      }, $f = (t2, e2, a2) => {
        t2.append("text").style("font-size", 17).style("fill", a2).attr("x", "50%").attr("y", t2.attr("height") - 10).attr("text-anchor", "middle").text(e2);
      }, _f = (t2, e2, a2) => {
        t2.append("text").attr("text-anchor", "end").attr("dy", ".75em").attr("transform", "rotate(-90)").style("font-size", 17).style("fill", a2).text(e2).attr("y", 6).call((e3) => {
          const a3 = e3.node().getComputedTextLength();
          e3.attr("x", 0 - t2.attr("height") / 2 + a3 / 2);
        });
      };
      var k = { title: Zf, xLabel: $f, yLabel: _f };
      const b = { positionType: { upLeft: 1, upRight: 2, downLeft: 3, downRight: 4 } };
      class L {
        constructor({ parent: t2, title: i2, items: e2, position: s2, unxkcdify: r2, backgroundColor: o2, strokeColor: h2 }) {
          this.title = i2, this.items = e2, this.position = s2, this.filter = r2 ? null : "url(#xkcdify)", this.backgroundColor = o2, this.strokeColor = h2, this.svg = t2.append("svg").attr("x", this._getUpLeftX()).attr("y", this._getUpLeftY()).style("visibility", "hidden"), this.tipBackground = this.svg.append("rect").style("fill", this.backgroundColor).attr("fill-opacity", 0.9).attr("stroke", h2).attr("stroke-width", 2).attr("rx", 5).attr("ry", 5).attr("filter", this.filter).attr("width", this._getBackgroundWidth()).attr("height", this._getBackgroundHeight()).attr("x", 5).attr("y", 5), this.tipTitle = this.svg.append("text").style("font-size", 15).style("font-weight", "bold").style("fill", this.strokeColor).attr("x", 15).attr("y", 25).text(i2), this.tipItems = e2.map((t3, i3) => {
            return this._generateTipItem(t3, i3);
          });
        }
        show() {
          this.svg.style("visibility", "visible");
        }
        hide() {
          this.svg.style("visibility", "hidden");
        }
        update({ title: t2, items: i2, position: e2 }) {
          if (t2 && t2 !== this.title && (this.title = t2, this.tipTitle.text(t2)), i2 && JSON.stringify(i2) !== JSON.stringify(this.items)) {
            this.items = i2, this.tipItems.forEach((t4) => t4.svg.remove()), this.tipItems = this.items.map((t4, i3) => {
              return this._generateTipItem(t4, i3);
            });
            const t3 = Math.max(...this.tipItems.map((t4) => t4.width), this.tipTitle.node().getBBox().width);
            this.tipBackground.attr("width", t3 + 15).attr("height", this._getBackgroundHeight());
          }
          e2 && (this.position = e2, this.svg.attr("x", this._getUpLeftX()), this.svg.attr("y", this._getUpLeftY()));
        }
        _generateTipItem(t2, i2) {
          const e2 = this.svg.append("svg");
          e2.append("rect").style("fill", t2.color).attr("width", 8).attr("height", 8).attr("rx", 2).attr("ry", 2).attr("filter", this.filter).attr("x", 15).attr("y", 37 + 20 * i2), e2.append("text").style("font-size", "15").style("fill", this.strokeColor).attr("x", 27).attr("y", 37 + 20 * i2 + 8).text(t2.text);
          const s2 = e2.node().getBBox();
          return { svg: e2, width: s2.width + 15, height: s2.height + 10 };
        }
        _getBackgroundWidth() {
          const t2 = this.items.reduce((t3, i2) => t3 > i2.text.length ? t3 : i2.text.length, 0);
          return 7.4 * Math.max(t2, this.title.length) + 25;
        }
        _getBackgroundHeight() {
          return 20 * (this.items.length + 1) + 10;
        }
        _getUpLeftX() {
          return this.position.type === b.positionType.upRight || this.position.type === b.positionType.downRight ? this.position.x : this.position.x - this._getBackgroundWidth() - 20;
        }
        _getUpLeftY() {
          return this.position.type === b.positionType.downLeft || this.position.type === b.positionType.downRight ? this.position.y : this.position.y - this._getBackgroundHeight() - 20;
        }
      }
      function M(A2) {
        A2.append("defs").append("style").attr("type", "text/css").text(`@font-face {
      font-family: "xkcd";
      src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');
    }`);
      }
      function N(t2) {
        t2.append("filter").attr("id", "xkcdify").attr("filterUnits", "userSpaceOnUse").attr("x", -5).attr("y", -5).attr("width", "100%").attr("height", "100%").call((t3) => t3.append("feTurbulence").attr("type", "fractalNoise").attr("baseFrequency", "0.05").attr("result", "noise")).call((t3) => t3.append("feDisplacementMap").attr("scale", "5").attr("xChannelSelector", "R").attr("yChannelSelector", "G").attr("in", "SourceGraphic").attr("in2", "noise")), t2.append("filter").attr("id", "xkcdify-pie").call((t3) => t3.append("feTurbulence").attr("type", "fractalNoise").attr("baseFrequency", "0.05").attr("result", "noise")).call((t3) => t3.append("feDisplacementMap").attr("scale", "5").attr("xChannelSelector", "R").attr("yChannelSelector", "G").attr("in", "SourceGraphic").attr("in2", "noise"));
      }
      var O = ["#dd4528", "#28a3dd", "#f3db52", "#ed84b5", "#4ab74e", "#9179c0", "#8e6d5a", "#f19839", "#949494"];
      const l = { top: 50, right: 30, bottom: 50, left: 50 };
      class ag {
        constructor(t2, { title: e2, xLabel: i2, yLabel: o2, data: { labels: r2, datasets: s2 }, options: a2 }) {
          this.options = od({ unxkcdify: false, yTickCount: 3, dataColors: O, fontFamily: "xkcd", strokeColor: "black", backgroundColor: "white" }, a2), e2 && (this.title = e2, l.top = 60), i2 && (this.xLabel = i2, l.bottom = 50), o2 && (this.yLabel = o2, l.left = 70), this.data = { labels: r2, datasets: s2 }, this.filter = "url(#xkcdify)", this.fontFamily = this.options.fontFamily || "xkcd", this.options.unxkcdify && (this.filter = null, this.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'), this.svgEl = f(t2).style("stroke-width", "3").style("font-family", this.fontFamily).style("background", this.options.backgroundColor).attr("width", t2.parentElement.clientWidth).attr("height", Math.min(2 * t2.parentElement.clientWidth / 3, window.innerHeight)), this.svgEl.selectAll("*").remove(), this.chart = this.svgEl.append("g").attr("transform", `translate(${l.left},${l.top})`), this.width = this.svgEl.attr("width") - l.left - l.right, this.height = this.svgEl.attr("height") - l.top - l.bottom, M(this.svgEl), N(this.svgEl), this.render();
        }
        render() {
          this.title && k.title(this.svgEl, this.title, this.options.strokeColor), this.xLabel && k.xLabel(this.svgEl, this.xLabel, this.options.strokeColor), this.yLabel && k.yLabel(this.svgEl, this.yLabel, this.options.strokeColor);
          const t2 = new L({ parent: this.svgEl, title: "tooltip", items: [{ color: "red", text: "weweyang: 12" }, { color: "blue", text: "timqian: 13" }], position: { x: 30, y: 30, type: b.positionType.upRight }, unxkcdify: this.options.unxkcdify, backgroundColor: this.options.backgroundColor, strokeColor: this.options.strokeColor }), e2 = ja().range([0, this.width]).domain(this.data.labels).padding(0.4), i2 = this.data.datasets.reduce((t3, e3) => t3.concat(e3.data), []), o2 = A().domain([0, Math.max(...i2)]).range([this.height, 0]), r2 = this.chart.append("g");
          y.xAxis(r2, { xScale: e2, tickCount: 3, moveDown: this.height, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), y.yAxis(r2, { yScale: o2, tickCount: this.options.yTickCount || 3, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), r2.selectAll(".xkcd-chart-bar").data(this.data.datasets[0].data).enter().append("rect").attr("class", "xkcd-chart-bar").attr("x", (t3, i3) => e2(this.data.labels[i3])).attr("width", e2.bandwidth()).attr("y", (t3) => o2(t3)).attr("height", (t3) => this.height - o2(t3)).attr("fill", "none").attr("pointer-events", "all").attr("stroke", this.options.strokeColor).attr("stroke-width", 3).attr("rx", 2).attr("filter", this.filter).on("mouseover", (e3, i3, o3) => {
            f(o3[i3]).attr("fill", this.options.dataColors[i3]), t2.show();
          }).on("mouseout", (e3, i3, o3) => {
            f(o3[i3]).attr("fill", "none"), t2.hide();
          }).on("mousemove", (e3, i3, o3) => {
            const r3 = w(o3[i3])[0] + l.left + 10, s2 = w(o3[i3])[1] + l.top + 10;
            let a2 = b.positionType.downRight;
            r3 > this.width / 2 && s2 < this.height / 2 ? a2 = b.positionType.downLeft : r3 > this.width / 2 && s2 > this.height / 2 ? a2 = b.positionType.upLeft : r3 < this.width / 2 && s2 > this.height / 2 && (a2 = b.positionType.upRight), t2.update({ title: this.data.labels[i3], items: [{ color: this.options.dataColors[i3], text: `${this.data.datasets[0].label || ""}: ${e3}` }], position: { x: r3, y: s2, type: a2 } });
          });
        }
        update() {
        }
      }
      function Ic(t2, o2) {
        var e2 = Object.keys(t2);
        if (Object.getOwnPropertySymbols) {
          var i2 = Object.getOwnPropertySymbols(t2);
          o2 && (i2 = i2.filter(function(o3) {
            return Object.getOwnPropertyDescriptor(t2, o3).enumerable;
          })), e2.push.apply(e2, i2);
        }
        return e2;
      }
      function bg(t2) {
        for (var o2 = 1; o2 < arguments.length; o2++) {
          var e2 = arguments[o2] != null ? arguments[o2] : {};
          o2 % 2 ? Ic(e2, true).forEach(function(o3) {
            cg(t2, o3, e2[o3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(e2)) : Ic(e2).forEach(function(o3) {
            Object.defineProperty(t2, o3, Object.getOwnPropertyDescriptor(e2, o3));
          });
        }
        return t2;
      }
      function cg(t2, o2, e2) {
        return o2 in t2 ? Object.defineProperty(t2, o2, { value: e2, enumerable: true, configurable: true, writable: true }) : t2[o2] = e2, t2;
      }
      function Z(t2, { items: r2, position: e2, unxkcdify: i2, parentWidth: o2, parentHeight: a2, strokeColor: p2, backgroundColor: n2 }) {
        const l2 = i2 ? null : "url(#xkcdify)", $2 = t2.append("svg"), d2 = $2.append("svg"), s2 = $2.append("svg");
        r2.forEach((t3, r3) => {
          s2.append("rect").style("fill", t3.color).attr("width", 8).attr("height", 8).attr("rx", 2).attr("ry", 2).attr("filter", l2).attr("x", 15).attr("y", 17 + 20 * r3), s2.append("text").style("font-size", "15").style("fill", p2).attr("x", 27).attr("y", 17 + 20 * r3 + 8).text(t3.text);
        });
        const f2 = s2.node().getBBox(), c2 = f2.width + 15, g2 = f2.height + 10;
        let y2 = 0, h2 = 0;
        e2 !== b.positionType.downLeft && e2 !== b.positionType.downRight || (h2 = a2 - g2 - 13), e2 !== b.positionType.upRight && e2 !== b.positionType.downRight || (y2 = o2 - c2 - 13), d2.append("rect").style("fill", n2).attr("fill-opacity", 0.85).attr("stroke", p2).attr("stroke-width", 2).attr("rx", 5).attr("ry", 5).attr("filter", l2).attr("width", c2).attr("height", g2).attr("x", 8).attr("y", 5), $2.attr("x", y2).attr("y", h2);
      }
      const p = { top: 50, right: 30, bottom: 50, left: 50 };
      class dg {
        constructor(t2, { title: o2, xLabel: e2, yLabel: i2, data: { labels: r2, datasets: s2 }, options: a2 }) {
          this.options = bg({ unxkcdify: false, yTickCount: 3, dataColors: O, fontFamily: "xkcd", strokeColor: "black", backgroundColor: "white", legendPosition: b.positionType.upLeft, showLegend: true }, a2), o2 && (this.title = o2, p.top = 60), e2 && (this.xLabel = e2, p.bottom = 50), i2 && (this.yLabel = i2, p.left = 70), this.data = { labels: r2, datasets: s2 }, this.filter = "url(#xkcdify)", this.fontFamily = this.options.fontFamily || "xkcd", this.options.unxkcdify && (this.filter = null, this.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'), this.svgEl = f(t2).style("stroke-width", "3").style("font-family", this.fontFamily).style("background", this.options.backgroundColor).attr("width", t2.parentElement.clientWidth).attr("height", Math.min(2 * t2.parentElement.clientWidth / 3, window.innerHeight)), this.svgEl.selectAll("*").remove(), this.chart = this.svgEl.append("g").attr("transform", `translate(${p.left},${p.top})`), this.width = this.svgEl.attr("width") - p.left - p.right, this.height = this.svgEl.attr("height") - p.top - p.bottom, M(this.svgEl), N(this.svgEl), this.render();
        }
        render() {
          this.title && k.title(this.svgEl, this.title, this.options.strokeColor), this.xLabel && k.xLabel(this.svgEl, this.xLabel, this.options.strokeColor), this.yLabel && k.yLabel(this.svgEl, this.yLabel, this.options.strokeColor);
          const t2 = new L({ parent: this.svgEl, title: "tooltip", items: [{ color: "red", text: "weweyang: 12" }, { color: "blue", text: "timqian: 13" }], position: { x: 30, y: 30, type: b.positionType.upRight }, unxkcdify: this.options.unxkcdify, backgroundColor: this.options.backgroundColor, strokeColor: this.options.strokeColor }), o2 = ja().range([0, this.width]).domain(this.data.labels).padding(0.4), e2 = this.data.datasets.reduce((t3, o3) => o3.data.map((o4, e3) => (t3[e3] || 0) + o4), []), i2 = A().domain([0, Math.max(...e2)]).range([this.height, 0]), r2 = this.chart.append("g");
          y.xAxis(r2, { xScale: o2, tickCount: 3, moveDown: this.height, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), y.yAxis(r2, { yScale: i2, tickCount: this.options.yTickCount || 3, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor });
          const s2 = this.data.datasets.reduce((t3, o3) => t3.concat(o3.data), []), a2 = this.data.datasets[0].data.length, n2 = this.data.datasets.reduce((t3, o3, e3) => (e3 > 0 ? t3.push(o3.data.map((o4, i3) => this.data.datasets[e3 - 1].data[i3] + t3[e3 - 1][i3])) : t3.push(new Array(o3.data.length).fill(0)), t3), []).flat();
          if (r2.selectAll(".xkcd-chart-stacked-bar").data(s2).enter().append("rect").attr("class", "xkcd-chart-stacked-bar").attr("x", (t3, e3) => o2(this.data.labels[e3 % a2])).attr("width", o2.bandwidth()).attr("y", (t3, o3) => i2(t3 + n2[o3])).attr("height", (t3) => this.height - i2(t3)).attr("fill", (t3, o3) => this.options.dataColors[Math.floor(o3 / a2)]).attr("pointer-events", "all").attr("stroke", this.options.strokeColor).attr("stroke-width", 3).attr("rx", 2).attr("filter", this.filter).on("mouseover", () => t2.show()).on("mouseout", () => t2.hide()).on("mousemove", (o3, e3, i3) => {
            const r3 = w(i3[e3])[0] + p.left + 10, s3 = w(i3[e3])[1] + p.top + 10, n3 = this.data.datasets.map((t3, o4) => ({ color: this.options.dataColors[o4], text: `${this.data.datasets[o4].label || ""}: ${this.data.datasets[o4].data[e3 % a2]}` })).reverse();
            let l2 = b.positionType.downRight;
            r3 > this.width / 2 && s3 < this.height / 2 ? l2 = b.positionType.downLeft : r3 > this.width / 2 && s3 > this.height / 2 ? l2 = b.positionType.upLeft : r3 < this.width / 2 && s3 > this.height / 2 && (l2 = b.positionType.upRight), t2.update({ title: this.data.labels[e3], items: n3, position: { x: r3, y: s3, type: l2 } });
          }), this.options.showLegend) {
            const t3 = this.data.datasets.map((t4, o3) => ({ color: this.options.dataColors[o3], text: `${this.data.datasets[o3].label || ""}` })).reverse();
            Z(r2, { items: t3, position: this.options.legendPosition, unxkcdify: this.options.unxkcdify, parentWidth: this.width, parentHeight: this.height, strokeColor: this.options.strokeColor, backgroundColor: this.options.backgroundColor });
          }
        }
        update() {
        }
      }
      function Jc(t2, e2) {
        var i2 = Object.keys(t2);
        if (Object.getOwnPropertySymbols) {
          var o2 = Object.getOwnPropertySymbols(t2);
          e2 && (o2 = o2.filter(function(e3) {
            return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
          })), i2.push.apply(i2, o2);
        }
        return i2;
      }
      function eg(t2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var i2 = arguments[e2] != null ? arguments[e2] : {};
          e2 % 2 ? Jc(i2, true).forEach(function(e3) {
            fg(t2, e3, i2[e3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(i2)) : Jc(i2).forEach(function(e3) {
            Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(i2, e3));
          });
        }
        return t2;
      }
      function fg(t2, e2, i2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: i2, enumerable: true, configurable: true, writable: true }) : t2[e2] = i2, t2;
      }
      var c = function(e2) {
        return function() {
          return e2;
        };
      };
      var gg = function($2, t2) {
        return t2 < $2 ? -1 : t2 > $2 ? 1 : t2 >= $2 ? 0 : NaN;
      };
      var hg = function($2) {
        return $2;
      };
      var Kc = Math.abs;
      var Q = Math.atan2;
      var W = Math.cos;
      var ig = Math.max;
      var kb = Math.min;
      var V = Math.sin;
      var X = Math.sqrt;
      var U = 1e-12;
      var _ = Math.PI;
      var ta = _ / 2;
      var ua = 2 * _;
      function jg($2) {
        return $2 > 1 ? 0 : $2 < -1 ? _ : Math.acos($2);
      }
      function Lc($2) {
        return $2 >= 1 ? ta : $2 <= -1 ? -ta : Math.asin($2);
      }
      var kg = function() {
        var t2 = hg, n2 = gg, r2 = null, e2 = c(0), $2 = c(ua), o2 = c(0);
        function a2(a3) {
          var i2, u2, l2, p2, c2, A2 = a3.length, f2 = 0, s2 = new Array(A2), b2 = new Array(A2), U2 = +e2.apply(this, arguments), Z2 = Math.min(ua, Math.max(-ua, $2.apply(this, arguments) - U2)), m2 = Math.min(Math.abs(Z2) / A2, o2.apply(this, arguments)), d2 = m2 * (Z2 < 0 ? -1 : 1);
          for (i2 = 0; i2 < A2; ++i2)
            (c2 = b2[s2[i2] = i2] = +t2(a3[i2], i2, a3)) > 0 && (f2 += c2);
          for (n2 != null ? s2.sort(function(t3, r3) {
            return n2(b2[t3], b2[r3]);
          }) : r2 != null && s2.sort(function(t3, n3) {
            return r2(a3[t3], a3[n3]);
          }), i2 = 0, l2 = f2 ? (Z2 - A2 * d2) / f2 : 0; i2 < A2; ++i2, U2 = p2)
            u2 = s2[i2], p2 = U2 + ((c2 = b2[u2]) > 0 ? c2 * l2 : 0) + d2, b2[u2] = { data: a3[u2], index: i2, value: c2, startAngle: U2, endAngle: p2, padAngle: m2 };
          return b2;
        }
        return a2.value = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : c(+n3), a2) : t2;
        }, a2.sortValues = function(t3) {
          return arguments.length ? (n2 = t3, r2 = null, a2) : n2;
        }, a2.sort = function(t3) {
          return arguments.length ? (r2 = t3, n2 = null, a2) : r2;
        }, a2.startAngle = function(t3) {
          return arguments.length ? (e2 = typeof t3 == "function" ? t3 : c(+t3), a2) : e2;
        }, a2.endAngle = function(t3) {
          return arguments.length ? ($2 = typeof t3 == "function" ? t3 : c(+t3), a2) : $2;
        }, a2.padAngle = function(t3) {
          return arguments.length ? (o2 = typeof t3 == "function" ? t3 : c(+t3), a2) : o2;
        }, a2;
      };
      function lg($2) {
        return $2.innerRadius;
      }
      function mg($2) {
        return $2.outerRadius;
      }
      function ng($2) {
        return $2.startAngle;
      }
      function og($2) {
        return $2.endAngle;
      }
      function pg($2) {
        return $2 && $2.padAngle;
      }
      function qg($2, t2, r2, n2, i2, o2, a2, p2) {
        var e2 = r2 - $2, c2 = n2 - t2, I2 = a2 - i2, B2 = p2 - o2, L2 = B2 * e2 - I2 * c2;
        if (!(L2 * L2 < U))
          return [$2 + (L2 = (I2 * (t2 - o2) - B2 * ($2 - i2)) / L2) * e2, t2 + L2 * c2];
      }
      function va($2, t2, r2, n2, i2, o2, a2) {
        var p2 = $2 - r2, e2 = t2 - n2, c2 = (a2 ? o2 : -o2) / X(p2 * p2 + e2 * e2), I2 = c2 * e2, B2 = -c2 * p2, L2 = $2 + I2, m2 = t2 + B2, s2 = r2 + I2, l2 = n2 + B2, u2 = (L2 + s2) / 2, y2 = (m2 + l2) / 2, f2 = s2 - L2, x2 = l2 - m2, v2 = f2 * f2 + x2 * x2, g2 = i2 - o2, h2 = L2 * l2 - s2 * m2, d2 = (x2 < 0 ? -1 : 1) * X(ig(0, g2 * g2 * v2 - h2 * h2)), T2 = (h2 * x2 - f2 * d2) / v2, A2 = (-h2 * f2 - x2 * d2) / v2, R2 = (h2 * x2 + f2 * d2) / v2, q2 = (-h2 * f2 + x2 * d2) / v2, P2 = T2 - u2, b2 = A2 - y2, E2 = R2 - u2, O2 = q2 - y2;
        return P2 * P2 + b2 * b2 > E2 * E2 + O2 * O2 && (T2 = R2, A2 = q2), { cx: T2, cy: A2, x01: -I2, y01: -B2, x11: T2 * (i2 / g2 - 1), y11: A2 * (i2 / g2 - 1) };
      }
      var lb = Math.PI, mb = 2 * lb, C = 1e-6, rg = mb - C;
      function nb() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
      }
      function ob() {
        return new nb();
      }
      nb.prototype = ob.prototype = { constructor: nb, moveTo: function(t2, h2) {
        this._ += "M" + (this._x0 = this._x1 = +t2) + "," + (this._y0 = this._y1 = +h2);
      }, closePath: function() {
        this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
      }, lineTo: function(t2, h2) {
        this._ += "L" + (this._x1 = +t2) + "," + (this._y1 = +h2);
      }, quadraticCurveTo: function(t2, h2, i2, s2) {
        this._ += "Q" + +t2 + "," + +h2 + "," + (this._x1 = +i2) + "," + (this._y1 = +s2);
      }, bezierCurveTo: function(t2, h2, i2, s2, $2, o2) {
        this._ += "C" + +t2 + "," + +h2 + "," + +i2 + "," + +s2 + "," + (this._x1 = +$2) + "," + (this._y1 = +o2);
      }, arcTo: function(t2, h2, i2, s2, $2) {
        t2 = +t2, h2 = +h2, i2 = +i2, s2 = +s2, $2 = +$2;
        var o2 = this._x1, a2 = this._y1, r2 = i2 - t2, _2 = s2 - h2, n2 = o2 - t2, M2 = a2 - h2, e2 = n2 * n2 + M2 * M2;
        if ($2 < 0)
          throw new Error("negative radius: " + $2);
        if (this._x1 === null)
          this._ += "M" + (this._x1 = t2) + "," + (this._y1 = h2);
        else if (e2 > C) {
          if (Math.abs(M2 * r2 - _2 * n2) > C && $2) {
            var u2 = i2 - o2, b2 = s2 - a2, v2 = r2 * r2 + _2 * _2, l2 = u2 * u2 + b2 * b2, x2 = Math.sqrt(v2), p2 = Math.sqrt(e2), c2 = $2 * Math.tan((lb - Math.acos((v2 + e2 - l2) / (2 * x2 * p2))) / 2), f2 = c2 / p2, y2 = c2 / x2;
            Math.abs(f2 - 1) > C && (this._ += "L" + (t2 + f2 * n2) + "," + (h2 + f2 * M2)), this._ += "A" + $2 + "," + $2 + ",0,0," + +(M2 * u2 > n2 * b2) + "," + (this._x1 = t2 + y2 * r2) + "," + (this._y1 = h2 + y2 * _2);
          } else
            this._ += "L" + (this._x1 = t2) + "," + (this._y1 = h2);
        } else
          ;
      }, arc: function(t2, h2, i2, s2, $2, o2) {
        t2 = +t2, h2 = +h2, o2 = !!o2;
        var a2 = (i2 = +i2) * Math.cos(s2), r2 = i2 * Math.sin(s2), _2 = t2 + a2, n2 = h2 + r2, M2 = 1 ^ o2, e2 = o2 ? s2 - $2 : $2 - s2;
        if (i2 < 0)
          throw new Error("negative radius: " + i2);
        this._x1 === null ? this._ += "M" + _2 + "," + n2 : (Math.abs(this._x1 - _2) > C || Math.abs(this._y1 - n2) > C) && (this._ += "L" + _2 + "," + n2), i2 && (e2 < 0 && (e2 = e2 % mb + mb), e2 > rg ? this._ += "A" + i2 + "," + i2 + ",0,1," + M2 + "," + (t2 - a2) + "," + (h2 - r2) + "A" + i2 + "," + i2 + ",0,1," + M2 + "," + (this._x1 = _2) + "," + (this._y1 = n2) : e2 > C && (this._ += "A" + i2 + "," + i2 + ",0," + +(e2 >= lb) + "," + M2 + "," + (this._x1 = t2 + i2 * Math.cos($2)) + "," + (this._y1 = h2 + i2 * Math.sin($2))));
      }, rect: function(t2, h2, i2, s2) {
        this._ += "M" + (this._x0 = this._x1 = +t2) + "," + (this._y0 = this._y1 = +h2) + "h" + +i2 + "v" + +s2 + "h" + -i2 + "Z";
      }, toString: function() {
        return this._;
      } };
      var sg = function() {
        var $2 = lg, t2 = mg, r2 = c(0), n2 = null, i2 = ng, o2 = og, a2 = pg, p2 = null;
        function e2() {
          var e3, c2, I2 = +$2.apply(this, arguments), B2 = +t2.apply(this, arguments), L2 = i2.apply(this, arguments) - ta, m2 = o2.apply(this, arguments) - ta, s2 = Kc(m2 - L2), l2 = m2 > L2;
          if (p2 || (p2 = e3 = ob()), B2 < I2 && (c2 = B2, B2 = I2, I2 = c2), B2 > U) {
            if (s2 > ua - U)
              p2.moveTo(B2 * W(L2), B2 * V(L2)), p2.arc(0, 0, B2, L2, m2, !l2), I2 > U && (p2.moveTo(I2 * W(m2), I2 * V(m2)), p2.arc(0, 0, I2, m2, L2, l2));
            else {
              var u2, y2, f2 = L2, x2 = m2, v2 = L2, g2 = m2, h2 = s2, d2 = s2, T2 = a2.apply(this, arguments) / 2, A2 = T2 > U && (n2 ? +n2.apply(this, arguments) : X(I2 * I2 + B2 * B2)), R2 = kb(Kc(B2 - I2) / 2, +r2.apply(this, arguments)), q2 = R2, P2 = R2;
              if (A2 > U) {
                var b2 = Lc(A2 / I2 * V(T2)), E2 = Lc(A2 / B2 * V(T2));
                (h2 -= 2 * b2) > U ? (v2 += b2 *= l2 ? 1 : -1, g2 -= b2) : (h2 = 0, v2 = g2 = (L2 + m2) / 2), (d2 -= 2 * E2) > U ? (f2 += E2 *= l2 ? 1 : -1, x2 -= E2) : (d2 = 0, f2 = x2 = (L2 + m2) / 2);
              }
              var O2 = B2 * W(f2), S2 = B2 * V(f2), j2 = I2 * W(g2), k2 = I2 * V(g2);
              if (R2 > U) {
                var w2, z2 = B2 * W(x2), C2 = B2 * V(x2), D2 = I2 * W(v2), F2 = I2 * V(v2);
                if (s2 < _ && (w2 = qg(O2, S2, D2, F2, z2, C2, j2, k2))) {
                  var G2 = O2 - w2[0], H2 = S2 - w2[1], J2 = z2 - w2[0], K2 = C2 - w2[1], M2 = 1 / V(jg((G2 * J2 + H2 * K2) / (X(G2 * G2 + H2 * H2) * X(J2 * J2 + K2 * K2))) / 2), N2 = X(w2[0] * w2[0] + w2[1] * w2[1]);
                  q2 = kb(R2, (I2 - N2) / (M2 - 1)), P2 = kb(R2, (B2 - N2) / (M2 + 1));
                }
              }
              d2 > U ? P2 > U ? (u2 = va(D2, F2, O2, S2, B2, P2, l2), y2 = va(z2, C2, j2, k2, B2, P2, l2), p2.moveTo(u2.cx + u2.x01, u2.cy + u2.y01), P2 < R2 ? p2.arc(u2.cx, u2.cy, P2, Q(u2.y01, u2.x01), Q(y2.y01, y2.x01), !l2) : (p2.arc(u2.cx, u2.cy, P2, Q(u2.y01, u2.x01), Q(u2.y11, u2.x11), !l2), p2.arc(0, 0, B2, Q(u2.cy + u2.y11, u2.cx + u2.x11), Q(y2.cy + y2.y11, y2.cx + y2.x11), !l2), p2.arc(y2.cx, y2.cy, P2, Q(y2.y11, y2.x11), Q(y2.y01, y2.x01), !l2))) : (p2.moveTo(O2, S2), p2.arc(0, 0, B2, f2, x2, !l2)) : p2.moveTo(O2, S2), I2 > U && h2 > U ? q2 > U ? (u2 = va(j2, k2, z2, C2, I2, -q2, l2), y2 = va(O2, S2, D2, F2, I2, -q2, l2), p2.lineTo(u2.cx + u2.x01, u2.cy + u2.y01), q2 < R2 ? p2.arc(u2.cx, u2.cy, q2, Q(u2.y01, u2.x01), Q(y2.y01, y2.x01), !l2) : (p2.arc(u2.cx, u2.cy, q2, Q(u2.y01, u2.x01), Q(u2.y11, u2.x11), !l2), p2.arc(0, 0, I2, Q(u2.cy + u2.y11, u2.cx + u2.x11), Q(y2.cy + y2.y11, y2.cx + y2.x11), l2), p2.arc(y2.cx, y2.cy, q2, Q(y2.y11, y2.x11), Q(y2.y01, y2.x01), !l2))) : p2.arc(0, 0, I2, g2, v2, l2) : p2.lineTo(j2, k2);
            }
          } else
            p2.moveTo(0, 0);
          if (p2.closePath(), e3)
            return p2 = null, e3 + "" || null;
        }
        return e2.centroid = function() {
          var r3 = (+$2.apply(this, arguments) + +t2.apply(this, arguments)) / 2, n3 = (+i2.apply(this, arguments) + +o2.apply(this, arguments)) / 2 - _ / 2;
          return [W(n3) * r3, V(n3) * r3];
        }, e2.innerRadius = function(t3) {
          return arguments.length ? ($2 = typeof t3 == "function" ? t3 : c(+t3), e2) : $2;
        }, e2.outerRadius = function($3) {
          return arguments.length ? (t2 = typeof $3 == "function" ? $3 : c(+$3), e2) : t2;
        }, e2.cornerRadius = function($3) {
          return arguments.length ? (r2 = typeof $3 == "function" ? $3 : c(+$3), e2) : r2;
        }, e2.padRadius = function($3) {
          return arguments.length ? (n2 = $3 == null ? null : typeof $3 == "function" ? $3 : c(+$3), e2) : n2;
        }, e2.startAngle = function($3) {
          return arguments.length ? (i2 = typeof $3 == "function" ? $3 : c(+$3), e2) : i2;
        }, e2.endAngle = function($3) {
          return arguments.length ? (o2 = typeof $3 == "function" ? $3 : c(+$3), e2) : o2;
        }, e2.padAngle = function($3) {
          return arguments.length ? (a2 = typeof $3 == "function" ? $3 : c(+$3), e2) : a2;
        }, e2.context = function($3) {
          return arguments.length ? (p2 = $3 == null ? null : $3, e2) : p2;
        }, e2;
      };
      const tg = 50;
      class ug {
        constructor(t2, { title: e2, data: { labels: i2, datasets: o2 }, options: r2 }) {
          this.options = eg({ unxkcdify: false, innerRadius: 0.5, legendPosition: b.positionType.upLeft, dataColors: O, fontFamily: "xkcd", strokeColor: "black", backgroundColor: "white", showLegend: true }, r2), this.title = e2, this.data = { labels: i2, datasets: o2 }, this.filter = "url(#xkcdify-pie)", this.fontFamily = this.options.fontFamily || "xkcd", this.options.unxkcdify && (this.filter = null, this.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'), this.svgEl = f(t2).style("stroke-width", "3").style("font-family", this.fontFamily).style("background", this.options.backgroundColor).attr("width", t2.parentElement.clientWidth).attr("height", Math.min(2 * t2.parentElement.clientWidth / 3, window.innerHeight)), this.svgEl.selectAll("*").remove(), this.width = this.svgEl.attr("width"), this.height = this.svgEl.attr("height"), this.chart = this.svgEl.append("g").attr("transform", `translate(${this.width / 2},${this.height / 2})`), M(this.svgEl), N(this.svgEl), this.render();
        }
        render() {
          this.title && k.title(this.svgEl, this.title, this.options.strokeColor);
          const t2 = new L({ parent: this.svgEl, title: "tooltip", items: [{ color: "red", text: "weweyang: 12" }, { color: "blue", text: "timqian: 13" }], position: { x: 30, y: 30, type: b.positionType.upRight }, unxkcdify: this.options.unxkcdify, strokeColor: this.options.strokeColor, backgroundColor: this.options.backgroundColor }), e2 = Math.min(this.width, this.height) / 2 - tg, i2 = kg()(this.data.datasets[0].data), o2 = sg().innerRadius(e2 * (this.options.innerRadius === void 0 ? 0.5 : this.options.innerRadius)).outerRadius(e2);
          this.chart.selectAll(".xkcd-chart-arc").data(i2).enter().append("path").attr("class", ".xkcd-chart-arc").attr("d", o2).attr("fill", "none").attr("stroke", this.options.strokeColor).attr("stroke-width", 2).attr("fill", (t3, e3) => this.options.dataColors[e3]).attr("filter", this.filter).on("mouseover", (e3, i3, o3) => {
            f(o3[i3]).attr("fill-opacity", 0.6), t2.show();
          }).on("mouseout", (e3, i3, o3) => {
            f(o3[i3]).attr("fill-opacity", 1), t2.hide();
          }).on("mousemove", (e3, i3, o3) => {
            const r3 = w(o3[i3])[0] + this.width / 2 + 10, s3 = w(o3[i3])[1] + this.height / 2 + 10;
            t2.update({ title: this.data.labels[i3], items: [{ color: this.options.dataColors[i3], text: `${this.data.datasets[0].label || ""}: ${e3.data}` }], position: { x: r3, y: s3, type: b.positionType.downRight } });
          });
          const r2 = this.data.datasets[0].data.map((t3, e3) => ({ color: this.options.dataColors[e3], text: this.data.labels[e3] })), s2 = this.svgEl.append("g").attr("transform", "translate(0, 30)");
          this.options.showLegend && Z(s2, { items: r2, position: this.options.legendPosition, unxkcdify: this.options.unxkcdify, parentWidth: this.width, parentHeight: this.height, strokeColor: this.options.strokeColor, backgroundColor: this.options.backgroundColor });
        }
        update() {
        }
      }
      function Mc(t2, i2) {
        var o2 = Object.keys(t2);
        if (Object.getOwnPropertySymbols) {
          var e2 = Object.getOwnPropertySymbols(t2);
          i2 && (e2 = e2.filter(function(i3) {
            return Object.getOwnPropertyDescriptor(t2, i3).enumerable;
          })), o2.push.apply(o2, e2);
        }
        return o2;
      }
      function vg(t2) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var o2 = arguments[i2] != null ? arguments[i2] : {};
          i2 % 2 ? Mc(o2, true).forEach(function(i3) {
            wg(t2, i3, o2[i3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(o2)) : Mc(o2).forEach(function(i3) {
            Object.defineProperty(t2, i3, Object.getOwnPropertyDescriptor(o2, i3));
          });
        }
        return t2;
      }
      function wg(t2, i2, o2) {
        return i2 in t2 ? Object.defineProperty(t2, i2, { value: o2, enumerable: true, configurable: true, writable: true }) : t2[i2] = o2, t2;
      }
      function Nc(t2) {
        this._context = t2;
      }
      Nc.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, i2) {
        switch (t2 = +t2, i2 = +i2, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t2, i2) : this._context.moveTo(t2, i2);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t2, i2);
        }
      } };
      var xg = function(t2) {
        return new Nc(t2);
      };
      function yg($2) {
        return $2[0];
      }
      function zg($2) {
        return $2[1];
      }
      var pb = function() {
        var n2 = yg, t2 = zg, r2 = c(true), e2 = null, $2 = xg, o2 = null;
        function u2(u3) {
          var i2, l2, p2, h2 = u3.length, c2 = false;
          for (e2 == null && (o2 = $2(p2 = ob())), i2 = 0; i2 <= h2; ++i2)
            !(i2 < h2 && r2(l2 = u3[i2], i2, u3)) === c2 && ((c2 = !c2) ? o2.lineStart() : o2.lineEnd()), c2 && o2.point(+n2(l2, i2, u3), +t2(l2, i2, u3));
          if (p2)
            return o2 = null, p2 + "" || null;
        }
        return u2.x = function(t3) {
          return arguments.length ? (n2 = typeof t3 == "function" ? t3 : c(+t3), u2) : n2;
        }, u2.y = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : c(+n3), u2) : t2;
        }, u2.defined = function(n3) {
          return arguments.length ? (r2 = typeof n3 == "function" ? n3 : c(!!n3), u2) : r2;
        }, u2.curve = function(n3) {
          return arguments.length ? ($2 = n3, e2 != null && (o2 = $2(e2)), u2) : $2;
        }, u2.context = function(n3) {
          return arguments.length ? (n3 == null ? e2 = o2 = null : o2 = $2(e2 = n3), u2) : e2;
        }, u2;
      };
      function Oc(t2) {
        return t2 < 0 ? -1 : 1;
      }
      function Pc(t2, o2, n2) {
        var i2 = t2._x1 - t2._x0, e2 = o2 - t2._x1, $2 = (t2._y1 - t2._y0) / (i2 || e2 < 0 && -0), s2 = (n2 - t2._y1) / (e2 || i2 < 0 && -0), x2 = ($2 * e2 + s2 * i2) / (i2 + e2);
        return (Oc($2) + Oc(s2)) * Math.min(Math.abs($2), Math.abs(s2), 0.5 * Math.abs(x2)) || 0;
      }
      function Qc(t2, o2) {
        var n2 = t2._x1 - t2._x0;
        return n2 ? (3 * (t2._y1 - t2._y0) / n2 - o2) / 2 : o2;
      }
      function qb(t2, o2, n2) {
        var i2 = t2._x0, e2 = t2._y0, $2 = t2._x1, s2 = t2._y1, x2 = ($2 - i2) / 3;
        t2._context.bezierCurveTo(i2 + x2, e2 + x2 * o2, $2 - x2, s2 - x2 * n2, $2, s2);
      }
      function $(t2) {
        this._context = t2;
      }
      function Rc(t2) {
        return new $(t2);
      }
      $.prototype = { areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            qb(this, this._t0, Qc(this, this._t0));
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, o2) {
        var n2 = NaN;
        if (o2 = +o2, (t2 = +t2) !== this._x1 || o2 !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t2, o2) : this._context.moveTo(t2, o2);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, qb(this, Qc(this, n2 = Pc(this, t2, o2)), n2);
              break;
            default:
              qb(this, this._t0, n2 = Pc(this, t2, o2));
          }
          this._x0 = this._x1, this._x1 = t2, this._y0 = this._y1, this._y1 = o2, this._t0 = n2;
        }
      } }, Object.create($.prototype).point = function(t2, o2) {
        $.prototype.point.call(this, o2, t2);
      };
      const q = { top: 50, right: 30, bottom: 50, left: 50 };
      class Ag {
        constructor(t2, { title: i2, xLabel: o2, yLabel: e2, data: { labels: s2, datasets: r2 }, options: a2 }) {
          this.options = vg({ unxkcdify: false, yTickCount: 3, legendPosition: b.positionType.upLeft, dataColors: O, fontFamily: "xkcd", strokeColor: "black", backgroundColor: "white", showLegend: true }, a2), i2 && (this.title = i2, q.top = 60), o2 && (this.xLabel = o2, q.bottom = 50), e2 && (this.yLabel = e2, q.left = 70), this.data = { labels: s2, datasets: r2 }, this.filter = "url(#xkcdify)", this.fontFamily = this.options.fontFamily || "xkcd", this.options.unxkcdify && (this.filter = null, this.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'), this.svgEl = f(t2).style("stroke-width", "3").style("font-family", this.fontFamily).style("background", this.options.backgroundColor).attr("width", t2.parentElement.clientWidth).attr("height", Math.min(2 * t2.parentElement.clientWidth / 3, window.innerHeight)), this.svgEl.selectAll("*").remove(), this.chart = this.svgEl.append("g").attr("transform", `translate(${q.left},${q.top})`), this.width = this.svgEl.attr("width") - q.left - q.right, this.height = this.svgEl.attr("height") - q.top - q.bottom, M(this.svgEl), N(this.svgEl), this.render();
        }
        render() {
          this.title && k.title(this.svgEl, this.title, this.options.strokeColor), this.xLabel && k.xLabel(this.svgEl, this.xLabel, this.options.strokeColor), this.yLabel && k.yLabel(this.svgEl, this.yLabel, this.options.strokeColor);
          const t2 = new L({ parent: this.svgEl, title: "", items: [{ color: "red", text: "weweyang" }, { color: "blue", text: "timqian" }], position: { x: 60, y: 60, type: b.positionType.downRight }, unxkcdify: this.options.unxkcdify, backgroundColor: this.options.backgroundColor, strokeColor: this.options.strokeColor }), i2 = Qe().domain(this.data.labels).range([0, this.width]), o2 = this.data.datasets.reduce((t3, i3) => t3.concat(i3.data), []), e2 = A().domain([Math.min(...o2), Math.max(...o2)]).range([this.height, 0]), s2 = this.chart.append("g").attr("pointer-events", "all");
          y.xAxis(s2, { xScale: i2, tickCount: 3, moveDown: this.height, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), y.yAxis(s2, { yScale: e2, tickCount: this.options.yTickCount || 3, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), this.svgEl.selectAll(".domain").attr("filter", this.filter);
          const r2 = pb().x((t3, o3) => i2(this.data.labels[o3])).y((t3) => e2(t3)).curve(Rc);
          s2.selectAll(".xkcd-chart-line").data(this.data.datasets).enter().append("path").attr("class", "xkcd-chart-line").attr("d", (t3) => r2(t3.data)).attr("fill", "none").attr("stroke", (t3, i3) => this.options.dataColors[i3]).attr("filter", this.filter);
          const a2 = s2.append("line").attr("x1", 30).attr("y1", 0).attr("x2", 30).attr("y2", this.height).attr("stroke", "#aaa").attr("stroke-width", 1.5).attr("stroke-dasharray", "7,7").style("visibility", "hidden"), l2 = this.data.datasets.map((t3, i3) => s2.append("circle").style("stroke", this.options.dataColors[i3]).style("fill", this.options.dataColors[i3]).attr("r", 3.5).style("visibility", "hidden"));
          if (s2.append("rect").attr("width", this.width).attr("height", this.height).attr("fill", "none").on("mouseover", () => {
            l2.forEach((t3) => t3.style("visibility", "visible")), a2.style("visibility", "visible"), t2.show();
          }).on("mouseout", () => {
            l2.forEach((t3) => t3.style("visibility", "hidden")), a2.style("visibility", "hidden"), t2.hide();
          }).on("mousemove", (o3, s3, r3) => {
            const n2 = w(r3[s3])[0] + q.left + 10, $2 = w(r3[s3])[1] + q.top + 10, h2 = this.data.labels.map((t3) => i2(t3) + q.left).map((t3) => Math.abs(t3 - w(r3[s3])[0] - q.left)), d2 = h2.indexOf(Math.min(...h2));
            a2.attr("x1", i2(this.data.labels[d2])).attr("x2", i2(this.data.labels[d2])), this.data.datasets.forEach((t3, o4) => {
              l2[o4].style("visibility", "visible").attr("cx", i2(this.data.labels[d2])).attr("cy", e2(t3.data[d2]));
            });
            const m2 = this.data.datasets.map((t3, i3) => ({ color: this.options.dataColors[i3], text: `${this.data.datasets[i3].label || ""}: ${this.data.datasets[i3].data[d2]}` }));
            let p2 = b.positionType.downRight;
            n2 > this.width / 2 && $2 < this.height / 2 ? p2 = b.positionType.downLeft : n2 > this.width / 2 && $2 > this.height / 2 ? p2 = b.positionType.upLeft : n2 < this.width / 2 && $2 > this.height / 2 && (p2 = b.positionType.upRight), t2.update({ title: this.data.labels[d2], items: m2, position: { x: n2, y: $2, type: p2 } });
          }), this.options.showLegend) {
            const t3 = this.data.datasets.map((t4, i3) => ({ color: this.options.dataColors[i3], text: t4.label }));
            Z(s2, { items: t3, position: this.options.legendPosition, unxkcdify: this.options.unxkcdify, parentWidth: this.width, parentHeight: this.height, backgroundColor: this.options.backgroundColor, strokeColor: this.options.strokeColor });
          }
        }
        update() {
        }
      }
      function Sc(t2, o2) {
        var i2 = Object.keys(t2);
        if (Object.getOwnPropertySymbols) {
          var e2 = Object.getOwnPropertySymbols(t2);
          o2 && (e2 = e2.filter(function(o3) {
            return Object.getOwnPropertyDescriptor(t2, o3).enumerable;
          })), i2.push.apply(i2, e2);
        }
        return i2;
      }
      function Bg(t2) {
        for (var o2 = 1; o2 < arguments.length; o2++) {
          var i2 = arguments[o2] != null ? arguments[o2] : {};
          o2 % 2 ? Sc(i2, true).forEach(function(o3) {
            Cg(t2, o3, i2[o3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(i2)) : Sc(i2).forEach(function(o3) {
            Object.defineProperty(t2, o3, Object.getOwnPropertyDescriptor(i2, o3));
          });
        }
        return t2;
      }
      function Cg(t2, o2, i2) {
        return o2 in t2 ? Object.defineProperty(t2, o2, { value: i2, enumerable: true, configurable: true, writable: true }) : t2[o2] = i2, t2;
      }
      var rb = new Date(), sb = new Date();
      function d(t2, r2, e2, n2) {
        function o2(r3) {
          return t2(r3 = new Date(+r3)), r3;
        }
        return o2.floor = o2, o2.ceil = function(e3) {
          return t2(e3 = new Date(e3 - 1)), r2(e3, 1), t2(e3), e3;
        }, o2.round = function(t3) {
          var r3 = o2(t3), e3 = o2.ceil(t3);
          return t3 - r3 < e3 - t3 ? r3 : e3;
        }, o2.offset = function(t3, e3) {
          return r2(t3 = new Date(+t3), e3 == null ? 1 : Math.floor(e3)), t3;
        }, o2.range = function(e3, n3, $2) {
          var u2, f2 = [];
          if (e3 = o2.ceil(e3), $2 = $2 == null ? 1 : Math.floor($2), !(e3 < n3 && $2 > 0))
            return f2;
          do {
            f2.push(u2 = new Date(+e3)), r2(e3, $2), t2(e3);
          } while (u2 < e3 && e3 < n3);
          return f2;
        }, o2.filter = function(e3) {
          return d(function(r3) {
            if (r3 >= r3)
              for (; t2(r3), !e3(r3); )
                r3.setTime(r3 - 1);
          }, function(t3, n3) {
            if (t3 >= t3)
              if (n3 < 0)
                for (; ++n3 <= 0; )
                  for (; r2(t3, -1), !e3(t3); )
                    ;
              else
                for (; --n3 >= 0; )
                  for (; r2(t3, 1), !e3(t3); )
                    ;
          });
        }, e2 && (o2.count = function(r3, n3) {
          return rb.setTime(+r3), sb.setTime(+n3), t2(rb), t2(sb), Math.floor(e2(rb, sb));
        }, o2.every = function(t3) {
          return t3 = Math.floor(t3), isFinite(t3) && t3 > 0 ? t3 > 1 ? o2.filter(n2 ? function(r3) {
            return n2(r3) % t3 == 0;
          } : function(r3) {
            return o2.count(0, r3) % t3 == 0;
          }) : o2 : null;
        }), o2;
      }
      var wa = d(function() {
      }, function(e2, t2) {
        e2.setTime(+e2 + t2);
      }, function(e2, t2) {
        return t2 - e2;
      });
      wa.every = function(e2) {
        return e2 = Math.floor(e2), isFinite(e2) && e2 > 0 ? e2 > 1 ? d(function(t2) {
          t2.setTime(Math.floor(t2 / e2) * e2);
        }, function(t2, $2) {
          t2.setTime(+t2 + $2 * e2);
        }, function(t2, $2) {
          return ($2 - t2) / e2;
        }) : wa : null;
      };
      var oi = wa.range;
      var xa = 1e3;
      var D = 6e4;
      var ya = 36e5;
      var Tc = 864e5;
      var Uc = 6048e5;
      var Vc = d(function(e2) {
        e2.setTime(e2 - e2.getMilliseconds());
      }, function(e2, $2) {
        e2.setTime(+e2 + $2 * xa);
      }, function(e2, $2) {
        return ($2 - e2) / xa;
      }, function(e2) {
        return e2.getUTCSeconds();
      });
      var pi = Vc.range;
      var Wc = d(function(e2) {
        e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * xa);
      }, function(e2, t2) {
        e2.setTime(+e2 + t2 * D);
      }, function(e2, t2) {
        return (t2 - e2) / D;
      }, function(e2) {
        return e2.getMinutes();
      });
      var qi = Wc.range;
      var Xc = d(function(r2) {
        r2.setTime(r2 - r2.getMilliseconds() - r2.getSeconds() * xa - r2.getMinutes() * D);
      }, function(r2, $2) {
        r2.setTime(+r2 + $2 * ya);
      }, function(r2, $2) {
        return ($2 - r2) / ya;
      }, function(r2) {
        return r2.getHours();
      });
      var ri = Xc.range;
      var za = d(function(r2) {
        r2.setHours(0, 0, 0, 0);
      }, function(r2, e2) {
        r2.setDate(r2.getDate() + e2);
      }, function(r2, e2) {
        return (e2 - r2 - (e2.getTimezoneOffset() - r2.getTimezoneOffset()) * D) / Tc;
      }, function(r2) {
        return r2.getDate() - 1;
      });
      var si = za.range;
      function r(e2) {
        return d(function($2) {
          $2.setDate($2.getDate() - ($2.getDay() + 7 - e2) % 7), $2.setHours(0, 0, 0, 0);
        }, function(e3, $2) {
          e3.setDate(e3.getDate() + 7 * $2);
        }, function(e3, $2) {
          return ($2 - e3 - ($2.getTimezoneOffset() - e3.getTimezoneOffset()) * D) / Uc;
        });
      }
      var tb = r(0);
      var Aa = r(1);
      var Dg = r(2);
      var Eg = r(3);
      var Ba = r(4);
      var Fg = r(5);
      var Gg = r(6);
      var ti = tb.range;
      var ui = Aa.range;
      var vi = Dg.range;
      var wi = Eg.range;
      var xi = Ba.range;
      var yi = Fg.range;
      var zi = Gg.range;
      var Yc = d(function(t2) {
        t2.setDate(1), t2.setHours(0, 0, 0, 0);
      }, function(t2, e2) {
        t2.setMonth(t2.getMonth() + e2);
      }, function(t2, e2) {
        return e2.getMonth() - t2.getMonth() + 12 * (e2.getFullYear() - t2.getFullYear());
      }, function(t2) {
        return t2.getMonth();
      });
      var Ai = Yc.range;
      var o = d(function(e2) {
        e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
      }, function(e2, t2) {
        e2.setFullYear(e2.getFullYear() + t2);
      }, function(e2, t2) {
        return t2.getFullYear() - e2.getFullYear();
      }, function(e2) {
        return e2.getFullYear();
      });
      o.every = function(e2) {
        return isFinite(e2 = Math.floor(e2)) && e2 > 0 ? d(function(t2) {
          t2.setFullYear(Math.floor(t2.getFullYear() / e2) * e2), t2.setMonth(0, 1), t2.setHours(0, 0, 0, 0);
        }, function(t2, r2) {
          t2.setFullYear(t2.getFullYear() + r2 * e2);
        }) : null;
      };
      var Bi = o.range;
      var Hg = d(function(t2) {
        t2.setUTCSeconds(0, 0);
      }, function(t2, e2) {
        t2.setTime(+t2 + e2 * D);
      }, function(t2, e2) {
        return (e2 - t2) / D;
      }, function(t2) {
        return t2.getUTCMinutes();
      });
      var Ci = Hg.range;
      var Ig = d(function(r2) {
        r2.setUTCMinutes(0, 0, 0);
      }, function(r2, $2) {
        r2.setTime(+r2 + $2 * ya);
      }, function(r2, $2) {
        return ($2 - r2) / ya;
      }, function(r2) {
        return r2.getUTCHours();
      });
      var Di = Ig.range;
      var ub = d(function(t2) {
        t2.setUTCHours(0, 0, 0, 0);
      }, function(t2, $2) {
        t2.setUTCDate(t2.getUTCDate() + $2);
      }, function(t2, $2) {
        return ($2 - t2) / Tc;
      }, function(t2) {
        return t2.getUTCDate() - 1;
      });
      var Ei = ub.range;
      function E($2) {
        return d(function(t2) {
          t2.setUTCDate(t2.getUTCDate() - (t2.getUTCDay() + 7 - $2) % 7), t2.setUTCHours(0, 0, 0, 0);
        }, function($3, t2) {
          $3.setUTCDate($3.getUTCDate() + 7 * t2);
        }, function($3, t2) {
          return (t2 - $3) / Uc;
        });
      }
      var Zc = E(0);
      var Ca = E(1);
      var Jg = E(2);
      var Kg = E(3);
      var Da = E(4);
      var Lg = E(5);
      var Mg = E(6);
      var Fi = Zc.range;
      var Gi = Ca.range;
      var Hi = Jg.range;
      var Ii = Kg.range;
      var Ji = Da.range;
      var Ki = Lg.range;
      var Li = Mg.range;
      var Ng = d(function(t2) {
        t2.setUTCDate(1), t2.setUTCHours(0, 0, 0, 0);
      }, function(t2, e2) {
        t2.setUTCMonth(t2.getUTCMonth() + e2);
      }, function(t2, e2) {
        return e2.getUTCMonth() - t2.getUTCMonth() + 12 * (e2.getUTCFullYear() - t2.getUTCFullYear());
      }, function(t2) {
        return t2.getUTCMonth();
      });
      var Mi = Ng.range;
      var F = d(function(e2) {
        e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
      }, function(e2, t2) {
        e2.setUTCFullYear(e2.getUTCFullYear() + t2);
      }, function(e2, t2) {
        return t2.getUTCFullYear() - e2.getUTCFullYear();
      }, function(e2) {
        return e2.getUTCFullYear();
      });
      F.every = function(e2) {
        return isFinite(e2 = Math.floor(e2)) && e2 > 0 ? d(function(t2) {
          t2.setUTCFullYear(Math.floor(t2.getUTCFullYear() / e2) * e2), t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
        }, function(t2, r2) {
          t2.setUTCFullYear(t2.getUTCFullYear() + r2 * e2);
        }) : null;
      };
      var Ni = F.range;
      var aa, Og, Oi, Pg, Qg;
      function Rg($2) {
        return aa = Tg($2), Og = aa.format, Oi = aa.parse, Pg = aa.utcFormat, Qg = aa.utcParse, aa;
      }
      function Sg(r2) {
        if (0 <= r2.y && r2.y < 100) {
          var $2 = new Date(-1, r2.m, r2.d, r2.H, r2.M, r2.S, r2.L);
          return $2.setFullYear(r2.y), $2;
        }
        return new Date(r2.y, r2.m, r2.d, r2.H, r2.M, r2.S, r2.L);
      }
      function Ea(r2) {
        if (0 <= r2.y && r2.y < 100) {
          var $2 = new Date(Date.UTC(-1, r2.m, r2.d, r2.H, r2.M, r2.S, r2.L));
          return $2.setUTCFullYear(r2.y), $2;
        }
        return new Date(Date.UTC(r2.y, r2.m, r2.d, r2.H, r2.M, r2.S, r2.L));
      }
      function ba(r2) {
        return { y: r2, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
      }
      function Tg(r2) {
        var $2 = r2.dateTime, e2 = r2.date, a2 = r2.time, t2 = r2.periods, U2 = r2.days, n2 = r2.shortDays, o2 = r2.months, u2 = r2.shortMonths, b2 = ca(t2), i2 = da(t2), H2 = ca(U2), v2 = da(U2), c2 = ca(n2), f2 = da(n2), m2 = ca(o2), s2 = da(o2), l2 = ca(u2), d2 = da(u2), p2 = { a: function(r3) {
          return n2[r3.getDay()];
        }, A: function(r3) {
          return U2[r3.getDay()];
        }, b: function(r3) {
          return u2[r3.getMonth()];
        }, B: function(r3) {
          return o2[r3.getMonth()];
        }, c: null, d: bd, e: bd, f: ph, H: mh, I: nh, j: oh, L: cd, m: qh, M: rh, p: function(r3) {
          return t2[+(r3.getHours() >= 12)];
        }, Q: gd, s: hd, S: sh, u: th, U: uh, V: vh, w: wh, W: xh, x: null, X: null, y: yh, Y: zh, Z: Ah, "%": fd }, y2 = { a: function(r3) {
          return n2[r3.getUTCDay()];
        }, A: function(r3) {
          return U2[r3.getUTCDay()];
        }, b: function(r3) {
          return u2[r3.getUTCMonth()];
        }, B: function(r3) {
          return o2[r3.getUTCMonth()];
        }, c: null, d: dd, e: dd, f: Eh, H: Bh, I: Ch, j: Dh, L: ed, m: Fh, M: Gh, p: function(r3) {
          return t2[+(r3.getUTCHours() >= 12)];
        }, Q: gd, s: hd, S: Hh, u: Ih, U: Jh, V: Kh, w: Lh, W: Mh, x: null, X: null, y: Nh, Y: Oh, Z: Ph, "%": fd }, g2 = { a: function(r3, $3, e3) {
          var a3 = c2.exec($3.slice(e3));
          return a3 ? (r3.w = f2[a3[0].toLowerCase()], e3 + a3[0].length) : -1;
        }, A: function(r3, $3, e3) {
          var a3 = H2.exec($3.slice(e3));
          return a3 ? (r3.w = v2[a3[0].toLowerCase()], e3 + a3[0].length) : -1;
        }, b: function(r3, $3, e3) {
          var a3 = l2.exec($3.slice(e3));
          return a3 ? (r3.m = d2[a3[0].toLowerCase()], e3 + a3[0].length) : -1;
        }, B: function(r3, $3, e3) {
          var a3 = m2.exec($3.slice(e3));
          return a3 ? (r3.m = s2[a3[0].toLowerCase()], e3 + a3[0].length) : -1;
        }, c: function(r3, e3, a3) {
          return h2(r3, $2, e3, a3);
        }, d: _c, e: _c, f: ih, H: ad, I: ad, j: eh, L: hh, m: dh, M: fh, p: function(r3, $3, e3) {
          var a3 = b2.exec($3.slice(e3));
          return a3 ? (r3.p = i2[a3[0].toLowerCase()], e3 + a3[0].length) : -1;
        }, Q: kh, s: lh, S: gh, u: Yg, U: Zg, V: $g, w: Xg, W: _g, x: function(r3, $3, a3) {
          return h2(r3, e2, $3, a3);
        }, X: function(r3, $3, e3) {
          return h2(r3, a2, $3, e3);
        }, y: bh, Y: ah, Z: ch, "%": jh };
        function T2(r3, $3) {
          return function(e3) {
            var a3, t3, U3, n3 = [], o3 = -1, u3 = 0, b3 = r3.length;
            for (e3 instanceof Date || (e3 = new Date(+e3)); ++o3 < b3; )
              r3.charCodeAt(o3) === 37 && (n3.push(r3.slice(u3, o3)), (t3 = $c[a3 = r3.charAt(++o3)]) != null ? a3 = r3.charAt(++o3) : t3 = a3 === "e" ? " " : "0", (U3 = $3[a3]) && (a3 = U3(e3, t3)), n3.push(a3), u3 = o3 + 1);
            return n3.push(r3.slice(u3, o3)), n3.join("");
          };
        }
        function M2(r3, $3) {
          return function(e3) {
            var a3, t3, U3 = ba(1900);
            if (h2(U3, r3, e3 += "", 0) != e3.length)
              return null;
            if ("Q" in U3)
              return new Date(U3.Q);
            if ("p" in U3 && (U3.H = U3.H % 12 + 12 * U3.p), "V" in U3) {
              if (U3.V < 1 || U3.V > 53)
                return null;
              "w" in U3 || (U3.w = 1), "Z" in U3 ? (t3 = (a3 = Ea(ba(U3.y))).getUTCDay(), a3 = t3 > 4 || t3 === 0 ? Ca.ceil(a3) : Ca(a3), a3 = ub.offset(a3, 7 * (U3.V - 1)), U3.y = a3.getUTCFullYear(), U3.m = a3.getUTCMonth(), U3.d = a3.getUTCDate() + (U3.w + 6) % 7) : (t3 = (a3 = $3(ba(U3.y))).getDay(), a3 = t3 > 4 || t3 === 0 ? Aa.ceil(a3) : Aa(a3), a3 = za.offset(a3, 7 * (U3.V - 1)), U3.y = a3.getFullYear(), U3.m = a3.getMonth(), U3.d = a3.getDate() + (U3.w + 6) % 7);
            } else
              ("W" in U3 || "U" in U3) && ("w" in U3 || (U3.w = "u" in U3 ? U3.u % 7 : "W" in U3 ? 1 : 0), t3 = "Z" in U3 ? Ea(ba(U3.y)).getUTCDay() : $3(ba(U3.y)).getDay(), U3.m = 0, U3.d = "W" in U3 ? (U3.w + 6) % 7 + 7 * U3.W - (t3 + 5) % 7 : U3.w + 7 * U3.U - (t3 + 6) % 7);
            return "Z" in U3 ? (U3.H += U3.Z / 100 | 0, U3.M += U3.Z % 100, Ea(U3)) : $3(U3);
          };
        }
        function h2(r3, $3, e3, a3) {
          for (var t3, U3, n3 = 0, o3 = $3.length, u3 = e3.length; n3 < o3; ) {
            if (a3 >= u3)
              return -1;
            if ((t3 = $3.charCodeAt(n3++)) === 37) {
              if (t3 = $3.charAt(n3++), !(U3 = g2[t3 in $c ? $3.charAt(n3++) : t3]) || (a3 = U3(r3, e3, a3)) < 0)
                return -1;
            } else if (t3 != e3.charCodeAt(a3++))
              return -1;
          }
          return a3;
        }
        return p2.x = T2(e2, p2), p2.X = T2(a2, p2), p2.c = T2($2, p2), y2.x = T2(e2, y2), y2.X = T2(a2, y2), y2.c = T2($2, y2), { format: function(r3) {
          var $3 = T2(r3 += "", p2);
          return $3.toString = function() {
            return r3;
          }, $3;
        }, parse: function(r3) {
          var $3 = M2(r3 += "", Sg);
          return $3.toString = function() {
            return r3;
          }, $3;
        }, utcFormat: function(r3) {
          var $3 = T2(r3 += "", y2);
          return $3.toString = function() {
            return r3;
          }, $3;
        }, utcParse: function(r3) {
          var $3 = M2(r3, Ea);
          return $3.toString = function() {
            return r3;
          }, $3;
        } };
      }
      var $c = { "-": "", _: " ", 0: "0" }, h = /^\s*\d+/, Ug = /^%/, Vg = /[\\^$*+?|[\]().{}]/g;
      function a(r2, $2, e2) {
        var a2 = r2 < 0 ? "-" : "", t2 = (a2 ? -r2 : r2) + "", U2 = t2.length;
        return a2 + (U2 < e2 ? new Array(e2 - U2 + 1).join($2) + t2 : t2);
      }
      function Wg(r2) {
        return r2.replace(Vg, "\\$&");
      }
      function ca(r2) {
        return new RegExp("^(?:" + r2.map(Wg).join("|") + ")", "i");
      }
      function da(r2) {
        for (var $2 = {}, e2 = -1, a2 = r2.length; ++e2 < a2; )
          $2[r2[e2].toLowerCase()] = e2;
        return $2;
      }
      function Xg(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 1));
        return a2 ? (r2.w = +a2[0], e2 + a2[0].length) : -1;
      }
      function Yg(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 1));
        return a2 ? (r2.u = +a2[0], e2 + a2[0].length) : -1;
      }
      function Zg(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 2));
        return a2 ? (r2.U = +a2[0], e2 + a2[0].length) : -1;
      }
      function $g(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 2));
        return a2 ? (r2.V = +a2[0], e2 + a2[0].length) : -1;
      }
      function _g(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 2));
        return a2 ? (r2.W = +a2[0], e2 + a2[0].length) : -1;
      }
      function ah(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 4));
        return a2 ? (r2.y = +a2[0], e2 + a2[0].length) : -1;
      }
      function bh(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 2));
        return a2 ? (r2.y = +a2[0] + (+a2[0] > 68 ? 1900 : 2e3), e2 + a2[0].length) : -1;
      }
      function ch(r2, $2, e2) {
        var a2 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec($2.slice(e2, e2 + 6));
        return a2 ? (r2.Z = a2[1] ? 0 : -(a2[2] + (a2[3] || "00")), e2 + a2[0].length) : -1;
      }
      function dh(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 2));
        return a2 ? (r2.m = a2[0] - 1, e2 + a2[0].length) : -1;
      }
      function _c(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 2));
        return a2 ? (r2.d = +a2[0], e2 + a2[0].length) : -1;
      }
      function eh(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 3));
        return a2 ? (r2.m = 0, r2.d = +a2[0], e2 + a2[0].length) : -1;
      }
      function ad(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 2));
        return a2 ? (r2.H = +a2[0], e2 + a2[0].length) : -1;
      }
      function fh(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 2));
        return a2 ? (r2.M = +a2[0], e2 + a2[0].length) : -1;
      }
      function gh(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 2));
        return a2 ? (r2.S = +a2[0], e2 + a2[0].length) : -1;
      }
      function hh(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 3));
        return a2 ? (r2.L = +a2[0], e2 + a2[0].length) : -1;
      }
      function ih(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2, e2 + 6));
        return a2 ? (r2.L = Math.floor(a2[0] / 1e3), e2 + a2[0].length) : -1;
      }
      function jh(r2, $2, e2) {
        var a2 = Ug.exec($2.slice(e2, e2 + 1));
        return a2 ? e2 + a2[0].length : -1;
      }
      function kh(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2));
        return a2 ? (r2.Q = +a2[0], e2 + a2[0].length) : -1;
      }
      function lh(r2, $2, e2) {
        var a2 = h.exec($2.slice(e2));
        return a2 ? (r2.Q = 1e3 * +a2[0], e2 + a2[0].length) : -1;
      }
      function bd(r2, $2) {
        return a(r2.getDate(), $2, 2);
      }
      function mh(r2, $2) {
        return a(r2.getHours(), $2, 2);
      }
      function nh(r2, $2) {
        return a(r2.getHours() % 12 || 12, $2, 2);
      }
      function oh(r2, $2) {
        return a(1 + za.count(o(r2), r2), $2, 3);
      }
      function cd(r2, $2) {
        return a(r2.getMilliseconds(), $2, 3);
      }
      function ph(r2, $2) {
        return cd(r2, $2) + "000";
      }
      function qh(r2, $2) {
        return a(r2.getMonth() + 1, $2, 2);
      }
      function rh(r2, $2) {
        return a(r2.getMinutes(), $2, 2);
      }
      function sh(r2, $2) {
        return a(r2.getSeconds(), $2, 2);
      }
      function th(r2) {
        var $2 = r2.getDay();
        return $2 === 0 ? 7 : $2;
      }
      function uh(r2, $2) {
        return a(tb.count(o(r2), r2), $2, 2);
      }
      function vh(r2, $2) {
        var e2 = r2.getDay();
        return r2 = e2 >= 4 || e2 === 0 ? Ba(r2) : Ba.ceil(r2), a(Ba.count(o(r2), r2) + (o(r2).getDay() === 4), $2, 2);
      }
      function wh(r2) {
        return r2.getDay();
      }
      function xh(r2, $2) {
        return a(Aa.count(o(r2), r2), $2, 2);
      }
      function yh(r2, $2) {
        return a(r2.getFullYear() % 100, $2, 2);
      }
      function zh(r2, $2) {
        return a(r2.getFullYear() % 1e4, $2, 4);
      }
      function Ah(r2) {
        var $2 = r2.getTimezoneOffset();
        return ($2 > 0 ? "-" : ($2 *= -1, "+")) + a($2 / 60 | 0, "0", 2) + a($2 % 60, "0", 2);
      }
      function dd(r2, $2) {
        return a(r2.getUTCDate(), $2, 2);
      }
      function Bh(r2, $2) {
        return a(r2.getUTCHours(), $2, 2);
      }
      function Ch(r2, $2) {
        return a(r2.getUTCHours() % 12 || 12, $2, 2);
      }
      function Dh(r2, $2) {
        return a(1 + ub.count(F(r2), r2), $2, 3);
      }
      function ed(r2, $2) {
        return a(r2.getUTCMilliseconds(), $2, 3);
      }
      function Eh(r2, $2) {
        return ed(r2, $2) + "000";
      }
      function Fh(r2, $2) {
        return a(r2.getUTCMonth() + 1, $2, 2);
      }
      function Gh(r2, $2) {
        return a(r2.getUTCMinutes(), $2, 2);
      }
      function Hh(r2, $2) {
        return a(r2.getUTCSeconds(), $2, 2);
      }
      function Ih(r2) {
        var $2 = r2.getUTCDay();
        return $2 === 0 ? 7 : $2;
      }
      function Jh(r2, $2) {
        return a(Zc.count(F(r2), r2), $2, 2);
      }
      function Kh(r2, $2) {
        var e2 = r2.getUTCDay();
        return r2 = e2 >= 4 || e2 === 0 ? Da(r2) : Da.ceil(r2), a(Da.count(F(r2), r2) + (F(r2).getUTCDay() === 4), $2, 2);
      }
      function Lh(r2) {
        return r2.getUTCDay();
      }
      function Mh(r2, $2) {
        return a(Ca.count(F(r2), r2), $2, 2);
      }
      function Nh(r2, $2) {
        return a(r2.getUTCFullYear() % 100, $2, 2);
      }
      function Oh(r2, $2) {
        return a(r2.getUTCFullYear() % 1e4, $2, 4);
      }
      function Ph() {
        return "+0000";
      }
      function fd() {
        return "%";
      }
      function gd(r2) {
        return +r2;
      }
      function hd(r2) {
        return Math.floor(+r2 / 1e3);
      }
      Rg({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
      var id = "%Y-%m-%dT%H:%M:%S.%LZ";
      function Qh($2) {
        return $2.toISOString();
      }
      var Pi = Date.prototype.toISOString ? Qh : Pg(id);
      function Rh(e2) {
        var $2 = new Date(e2);
        return isNaN($2) ? null : $2;
      }
      var Qi = +new Date("2000-01-01T00:00:00.000Z") ? Rh : Qg(id);
      var Sh = function(e2, t2) {
        var $2, r2 = 0, M2 = (e2 = e2.slice()).length - 1, l2 = e2[r2], o2 = e2[M2];
        return o2 < l2 && ($2 = r2, r2 = M2, M2 = $2, $2 = l2, l2 = o2, o2 = $2), e2[r2] = t2.floor(l2), e2[M2] = t2.ceil(o2), e2;
      };
      var ea = 1e3, fa = 60 * ea, ga = 60 * fa, ha = 24 * ga, Th = 7 * ha, jd = 30 * ha, vb = 365 * ha;
      function Uh(t2) {
        return new Date(t2);
      }
      function Vh(t2) {
        return t2 instanceof Date ? +t2 : +new Date(+t2);
      }
      function kd(t2, $2, r2, a2, n2, e2, i2, o2, u2) {
        var k2 = Bc(z, z), V2 = k2.invert, X2 = k2.domain, d2 = u2(".%L"), v2 = u2(":%S"), c2 = u2("%I:%M"), p2 = u2("%I %p"), m2 = u2("%a %d"), l2 = u2("%b %d"), f2 = u2("%B"), y2 = u2("%Y"), M2 = [[i2, 1, ea], [i2, 5, 5 * ea], [i2, 15, 15 * ea], [i2, 30, 30 * ea], [e2, 1, fa], [e2, 5, 5 * fa], [e2, 15, 15 * fa], [e2, 30, 30 * fa], [n2, 1, ga], [n2, 3, 3 * ga], [n2, 6, 6 * ga], [n2, 12, 12 * ga], [a2, 1, ha], [a2, 2, 2 * ha], [r2, 1, Th], [$2, 1, jd], [$2, 3, 3 * jd], [t2, 1, vb]];
        function D2(o3) {
          return (i2(o3) < o3 ? d2 : e2(o3) < o3 ? v2 : n2(o3) < o3 ? c2 : a2(o3) < o3 ? p2 : $2(o3) < o3 ? r2(o3) < o3 ? m2 : l2 : t2(o3) < o3 ? f2 : y2)(o3);
        }
        function h2($3, r3, a3) {
          if ($3 == null && ($3 = 10), typeof $3 == "number") {
            var n3, e3 = Math.abs(a3 - r3) / $3, i3 = Pb(function(t3) {
              return t3[2];
            }).right(M2, e3);
            return i3 === M2.length ? (n3 = Ma(r3 / vb, a3 / vb, $3), $3 = t2) : i3 ? (n3 = (i3 = M2[e3 / M2[i3 - 1][2] < M2[i3][2] / e3 ? i3 - 1 : i3])[1], $3 = i3[0]) : (n3 = Math.max(Ma(r3, a3, $3), 1), $3 = o2), $3.every(n3);
          }
          return $3;
        }
        return k2.invert = function(t3) {
          return new Date(V2(t3));
        }, k2.domain = function(t3) {
          return arguments.length ? X2(Array.from(t3, Vh)) : X2().map(Uh);
        }, k2.ticks = function(t3) {
          var $3, r3 = X2(), a3 = r3[0], n3 = r3[r3.length - 1], e3 = n3 < a3;
          return e3 && ($3 = a3, a3 = n3, n3 = $3), $3 = ($3 = h2(t3, a3, n3)) ? $3.range(a3, n3 + 1) : [], e3 ? $3.reverse() : $3;
        }, k2.tickFormat = function(t3, $3) {
          return $3 == null ? D2 : u2($3);
        }, k2.nice = function(t3) {
          var $3 = X2();
          return (t3 = h2(t3, $3[0], $3[$3.length - 1])) ? X2(Sh($3, t3)) : k2;
        }, k2.copy = function() {
          return Ac(k2, kd(t2, $2, r2, a2, n2, e2, i2, o2, u2));
        }, k2;
      }
      var Wh = function() {
        return la.apply(kd(o, Yc, tb, za, Xc, Wc, Vc, wa, Og).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
      };
      var Fa = {};
      !function(t2, n2) {
        typeof Fa == "object" ? Fa = n2() : typeof define == "function" && define.amd ? define(n2) : t2.dayjs = n2();
      }(Fa, function() {
        var t2 = "millisecond", n2 = "second", e2 = "minute", r2 = "hour", i2 = "day", s2 = "week", u2 = "month", a2 = "quarter", o2 = "year", h2 = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/, f2 = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c2 = function(t3, n3, e3) {
          var r3 = String(t3);
          return !r3 || r3.length >= n3 ? t3 : "" + Array(n3 + 1 - r3.length).join(e3) + t3;
        }, d2 = { s: c2, z: function(t3) {
          var n3 = -t3.utcOffset(), e3 = Math.abs(n3), r3 = Math.floor(e3 / 60), i3 = e3 % 60;
          return (n3 <= 0 ? "+" : "-") + c2(r3, 2, "0") + ":" + c2(i3, 2, "0");
        }, m: function(t3, n3) {
          var e3 = 12 * (n3.year() - t3.year()) + (n3.month() - t3.month()), r3 = t3.clone().add(e3, u2), i3 = n3 - r3 < 0, s3 = t3.clone().add(e3 + (i3 ? -1 : 1), u2);
          return Number(-(e3 + (n3 - r3) / (i3 ? r3 - s3 : s3 - r3)) || 0);
        }, a: function(t3) {
          return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
        }, p: function(h3) {
          return { M: u2, y: o2, w: s2, d: i2, h: r2, m: e2, s: n2, ms: t2, Q: a2 }[h3] || String(h3 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t3) {
          return t3 === void 0;
        } }, $2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, l2 = "en", m2 = {};
        m2[l2] = $2;
        var y2 = function(t3) {
          return t3 instanceof v2;
        }, M2 = function(t3, n3, e3) {
          var r3;
          if (!t3)
            return l2;
          if (typeof t3 == "string")
            m2[t3] && (r3 = t3), n3 && (m2[t3] = n3, r3 = t3);
          else {
            var i3 = t3.name;
            m2[i3] = t3, r3 = i3;
          }
          return e3 || (l2 = r3), r3;
        }, g2 = function(t3, n3, e3) {
          if (y2(t3))
            return t3.clone();
          var r3 = n3 ? typeof n3 == "string" ? { format: n3, pl: e3 } : n3 : {};
          return r3.date = t3, new v2(r3);
        }, D2 = d2;
        D2.l = M2, D2.i = y2, D2.w = function(t3, n3) {
          return g2(t3, { locale: n3.$L, utc: n3.$u });
        };
        var v2 = function() {
          function c3(t3) {
            this.$L = this.$L || M2(t3.locale, null, true), this.parse(t3);
          }
          var d3 = c3.prototype;
          return d3.parse = function(t3) {
            this.$d = function(t4) {
              var n3 = t4.date, e3 = t4.utc;
              if (n3 === null)
                return new Date(NaN);
              if (D2.u(n3))
                return new Date();
              if (n3 instanceof Date)
                return new Date(n3);
              if (typeof n3 == "string" && !/Z$/i.test(n3)) {
                var r3 = n3.match(h2);
                if (r3)
                  return e3 ? new Date(Date.UTC(r3[1], r3[2] - 1, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, r3[7] || 0)) : new Date(r3[1], r3[2] - 1, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, r3[7] || 0);
              }
              return new Date(n3);
            }(t3), this.init();
          }, d3.init = function() {
            var t3 = this.$d;
            this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
          }, d3.$utils = function() {
            return D2;
          }, d3.isValid = function() {
            return !(this.$d.toString() === "Invalid Date");
          }, d3.isSame = function(t3, n3) {
            var e3 = g2(t3);
            return this.startOf(n3) <= e3 && e3 <= this.endOf(n3);
          }, d3.isAfter = function(t3, n3) {
            return g2(t3) < this.startOf(n3);
          }, d3.isBefore = function(t3, n3) {
            return this.endOf(n3) < g2(t3);
          }, d3.$g = function(t3, n3, e3) {
            return D2.u(t3) ? this[n3] : this.set(e3, t3);
          }, d3.year = function(t3) {
            return this.$g(t3, "$y", o2);
          }, d3.month = function(t3) {
            return this.$g(t3, "$M", u2);
          }, d3.day = function(t3) {
            return this.$g(t3, "$W", i2);
          }, d3.date = function(t3) {
            return this.$g(t3, "$D", "date");
          }, d3.hour = function(t3) {
            return this.$g(t3, "$H", r2);
          }, d3.minute = function(t3) {
            return this.$g(t3, "$m", e2);
          }, d3.second = function(t3) {
            return this.$g(t3, "$s", n2);
          }, d3.millisecond = function(n3) {
            return this.$g(n3, "$ms", t2);
          }, d3.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, d3.valueOf = function() {
            return this.$d.getTime();
          }, d3.startOf = function(t3, a3) {
            var h3 = this, f3 = !!D2.u(a3) || a3, c4 = D2.p(t3), d4 = function(t4, n3) {
              var e3 = D2.w(h3.$u ? Date.UTC(h3.$y, n3, t4) : new Date(h3.$y, n3, t4), h3);
              return f3 ? e3 : e3.endOf(i2);
            }, $3 = function(t4, n3) {
              return D2.w(h3.toDate()[t4].apply(h3.toDate(), (f3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n3)), h3);
            }, l3 = this.$W, m3 = this.$M, y3 = this.$D, M3 = "set" + (this.$u ? "UTC" : "");
            switch (c4) {
              case o2:
                return f3 ? d4(1, 0) : d4(31, 11);
              case u2:
                return f3 ? d4(1, m3) : d4(0, m3 + 1);
              case s2:
                var g3 = this.$locale().weekStart || 0, v3 = (l3 < g3 ? l3 + 7 : l3) - g3;
                return d4(f3 ? y3 - v3 : y3 + (6 - v3), m3);
              case i2:
              case "date":
                return $3(M3 + "Hours", 0);
              case r2:
                return $3(M3 + "Minutes", 1);
              case e2:
                return $3(M3 + "Seconds", 2);
              case n2:
                return $3(M3 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, d3.endOf = function(t3) {
            return this.startOf(t3, false);
          }, d3.$set = function(s3, a3) {
            var h3, f3 = D2.p(s3), c4 = "set" + (this.$u ? "UTC" : ""), d4 = (h3 = {}, h3[i2] = c4 + "Date", h3.date = c4 + "Date", h3[u2] = c4 + "Month", h3[o2] = c4 + "FullYear", h3[r2] = c4 + "Hours", h3[e2] = c4 + "Minutes", h3[n2] = c4 + "Seconds", h3[t2] = c4 + "Milliseconds", h3)[f3], $3 = f3 === i2 ? this.$D + (a3 - this.$W) : a3;
            if (f3 === u2 || f3 === o2) {
              var l3 = this.clone().set("date", 1);
              l3.$d[d4]($3), l3.init(), this.$d = l3.set("date", Math.min(this.$D, l3.daysInMonth())).toDate();
            } else
              d4 && this.$d[d4]($3);
            return this.init(), this;
          }, d3.set = function(t3, n3) {
            return this.clone().$set(t3, n3);
          }, d3.get = function(t3) {
            return this[D2.p(t3)]();
          }, d3.add = function(t3, a3) {
            var h3, f3 = this;
            t3 = Number(t3);
            var c4 = D2.p(a3), d4 = function(n3) {
              var e3 = g2(f3);
              return D2.w(e3.date(e3.date() + Math.round(n3 * t3)), f3);
            };
            if (c4 === u2)
              return this.set(u2, this.$M + t3);
            if (c4 === o2)
              return this.set(o2, this.$y + t3);
            if (c4 === i2)
              return d4(1);
            if (c4 === s2)
              return d4(7);
            var $3 = (h3 = {}, h3[e2] = 6e4, h3[r2] = 36e5, h3[n2] = 1e3, h3)[c4] || 1, l3 = this.valueOf() + t3 * $3;
            return D2.w(l3, this);
          }, d3.subtract = function(t3, n3) {
            return this.add(-1 * t3, n3);
          }, d3.format = function(t3) {
            var n3 = this;
            if (!this.isValid())
              return "Invalid Date";
            var e3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", r3 = D2.z(this), i3 = this.$locale(), s3 = this.$H, u3 = this.$m, a3 = this.$M, o3 = i3.weekdays, h3 = i3.months, c4 = function(t4, r4, i4, s4) {
              return t4 && (t4[r4] || t4(n3, e3)) || i4[r4].substr(0, s4);
            }, d4 = function(t4) {
              return D2.s(s3 % 12 || 12, t4, "0");
            }, $3 = i3.meridiem || function(t4, n4, e4) {
              var r4 = t4 < 12 ? "AM" : "PM";
              return e4 ? r4.toLowerCase() : r4;
            }, l3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a3 + 1, MM: D2.s(a3 + 1, 2, "0"), MMM: c4(i3.monthsShort, a3, h3, 3), MMMM: h3[a3] || h3(this, e3), D: this.$D, DD: D2.s(this.$D, 2, "0"), d: String(this.$W), dd: c4(i3.weekdaysMin, this.$W, o3, 2), ddd: c4(i3.weekdaysShort, this.$W, o3, 3), dddd: o3[this.$W], H: String(s3), HH: D2.s(s3, 2, "0"), h: d4(1), hh: d4(2), a: $3(s3, u3, true), A: $3(s3, u3, false), m: String(u3), mm: D2.s(u3, 2, "0"), s: String(this.$s), ss: D2.s(this.$s, 2, "0"), SSS: D2.s(this.$ms, 3, "0"), Z: r3 };
            return e3.replace(f2, function(t4, n4) {
              return n4 || l3[t4] || r3.replace(":", "");
            });
          }, d3.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, d3.diff = function(t3, h3, f3) {
            var c4, d4 = D2.p(h3), $3 = g2(t3), l3 = 6e4 * ($3.utcOffset() - this.utcOffset()), m3 = this - $3, y3 = D2.m(this, $3);
            return y3 = (c4 = {}, c4[o2] = y3 / 12, c4[u2] = y3, c4[a2] = y3 / 3, c4[s2] = (m3 - l3) / 6048e5, c4[i2] = (m3 - l3) / 864e5, c4[r2] = m3 / 36e5, c4[e2] = m3 / 6e4, c4[n2] = m3 / 1e3, c4)[d4] || m3, f3 ? y3 : D2.a(y3);
          }, d3.daysInMonth = function() {
            return this.endOf(u2).$D;
          }, d3.$locale = function() {
            return m2[this.$L];
          }, d3.locale = function(t3, n3) {
            if (!t3)
              return this.$L;
            var e3 = this.clone();
            return e3.$L = M2(t3, n3, true), e3;
          }, d3.clone = function() {
            return D2.w(this.toDate(), this);
          }, d3.toDate = function() {
            return new Date(this.$d);
          }, d3.toJSON = function() {
            return this.toISOString();
          }, d3.toISOString = function() {
            return this.$d.toISOString();
          }, d3.toString = function() {
            return this.$d.toUTCString();
          }, c3;
        }();
        return g2.prototype = v2.prototype, g2.extend = function(t3, n3) {
          return t3(n3, v2, g2), g2;
        }, g2.locale = M2, g2.isDayjs = y2, g2.unix = function(t3) {
          return g2(1e3 * t3);
        }, g2.en = m2[l2], g2.Ls = m2, g2;
      });
      const u = { top: 50, right: 30, bottom: 50, left: 50 };
      class Xh {
        constructor(t2, { title: o2, xLabel: i2, yLabel: e2, data: { datasets: r2 }, options: s2 }) {
          this.options = Bg({ unxkcdify: false, dotSize: 1, showLine: false, timeFormat: "", xTickCount: 3, yTickCount: 3, legendPosition: b.positionType.upLeft, dataColors: O, fontFamily: "xkcd", strokeColor: "black", backgroundColor: "white", showLegend: true }, s2), o2 && (this.title = o2, u.top = 60), i2 && (this.xLabel = i2, u.bottom = 50), e2 && (this.yLabel = e2, u.left = 70), this.data = { datasets: r2 }, this.filter = "url(#xkcdify)", this.fontFamily = this.options.fontFamily || "xkcd", this.options.unxkcdify && (this.filter = null, this.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'), this.svgEl = f(t2).style("stroke-width", 3).style("font-family", this.fontFamily).style("background", this.options.backgroundColor).attr("width", t2.parentElement.clientWidth).attr("height", Math.min(2 * t2.parentElement.clientWidth / 3, window.innerHeight)), this.svgEl.selectAll("*").remove(), this.chart = this.svgEl.append("g").attr("transform", `translate(${u.left},${u.top})`), this.width = this.svgEl.attr("width") - u.left - u.right, this.height = this.svgEl.attr("height") - u.top - u.bottom, M(this.svgEl), N(this.svgEl), this.render();
        }
        render() {
          this.title && k.title(this.svgEl, this.title, this.options.strokeColor), this.xLabel && k.xLabel(this.svgEl, this.xLabel, this.options.strokeColor), this.yLabel && k.yLabel(this.svgEl, this.yLabel, this.options.strokeColor);
          const t2 = new L({ parent: this.svgEl, title: "", items: [{ color: "red", text: "weweyang" }, { color: "blue", text: "timqian" }], position: { x: 60, y: 60, type: b.positionType.dowfnRight }, unxkcdify: this.options.unxkcdify, strokeColor: this.options.strokeColor, backgroundColor: this.options.backgroundColor });
          this.options.timeFormat && this.data.datasets.forEach((t3) => {
            t3.data.forEach((t4) => {
              var $dZYI$$interop$default = wb(Fa);
              t4.x = $dZYI$$interop$default.d(t4.x);
            });
          });
          const o2 = this.data.datasets.reduce((t3, o3) => t3.concat(o3.data), []), i2 = o2.map((t3) => t3.x), e2 = o2.map((t3) => t3.y);
          let r2 = A().domain([Math.min(...i2), Math.max(...i2)]).range([0, this.width]);
          this.options.timeFormat && (r2 = Wh().domain([Math.min(...i2), Math.max(...i2)]).range([0, this.width]));
          const s2 = A().domain([Math.min(...e2), Math.max(...e2)]).range([this.height, 0]), a2 = this.chart.append("g").attr("pointer-events", "all");
          if (y.xAxis(a2, { xScale: r2, tickCount: this.options.xTickCount === void 0 ? 3 : this.options.xTickCount, moveDown: this.height, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), y.yAxis(a2, { yScale: s2, tickCount: this.options.yTickCount === void 0 ? 3 : this.options.yTickCount, fontFamily: this.fontFamily, unxkcdify: this.options.unxkcdify, stroke: this.options.strokeColor }), this.options.showLine) {
            const t3 = pb().x((t4) => r2(t4.x)).y((t4) => s2(t4.y)).curve(Rc);
            a2.selectAll(".xkcd-chart-xyline").data(this.data.datasets).enter().append("path").attr("class", "xkcd-chart-xyline").attr("d", (o3) => t3(o3.data)).attr("fill", "none").attr("stroke", (t4, o3) => this.options.dataColors[o3]).attr("filter", this.filter);
          }
          const n2 = 3.5 * (this.options.dotSize === void 0 ? 1 : this.options.dotSize), l2 = 6 * (this.options.dotSize === void 0 ? 1 : this.options.dotSize);
          if (a2.selectAll(".xkcd-chart-xycircle-group").data(this.data.datasets).enter().append("g").attr("class", ".xkcd-chart-xycircle-group").attr("filter", this.filter).attr("xy-group-index", (t3, o3) => o3).selectAll(".xkcd-chart-xycircle-circle").data((t3) => t3.data).enter().append("circle").style("stroke", (t3, o3, i3) => {
            const e3 = Number(f(i3[o3].parentElement).attr("xy-group-index"));
            return this.options.dataColors[e3];
          }).style("fill", (t3, o3, i3) => {
            const e3 = Number(f(i3[o3].parentElement).attr("xy-group-index"));
            return this.options.dataColors[e3];
          }).attr("r", n2).attr("cx", (t3) => r2(t3.x)).attr("cy", (t3) => s2(t3.y)).attr("pointer-events", "all").on("mouseover", (o3, i3, e3) => {
            const a3 = Number(f(e3[i3].parentElement).attr("xy-group-index"));
            f(e3[i3]).attr("r", l2);
            const n3 = r2(o3.x) + u.left + 5, $2 = s2(o3.y) + u.top + 5;
            let p2 = b.positionType.downRight;
            var $dZYI$$interop$default = wb(Fa);
            n3 > this.width / 2 && $2 < this.height / 2 ? p2 = b.positionType.downLeft : n3 > this.width / 2 && $2 > this.height / 2 ? p2 = b.positionType.upLeft : n3 < this.width / 2 && $2 > this.height / 2 && (p2 = b.positionType.upRight), t2.update({ title: this.options.timeFormat ? $dZYI$$interop$default.d(this.data.datasets[a3].data[i3].x).format(this.options.timeFormat) : `${this.data.datasets[a3].data[i3].x}`, items: [{ color: this.options.dataColors[a3], text: `${this.data.datasets[a3].label || ""}: ${o3.y}` }], position: { x: n3, y: $2, type: p2 } }), t2.show();
          }).on("mouseout", (o3, i3, e3) => {
            f(e3[i3]).attr("r", n2), t2.hide();
          }), this.options.showLegend) {
            const t3 = this.data.datasets.map((t4, o3) => ({ color: this.options.dataColors[o3], text: t4.label }));
            Z(a2, { items: t3, position: this.options.legendPosition, unxkcdify: this.options.unxkcdify, parentWidth: this.width, parentHeight: this.height, strokeColor: this.options.strokeColor, backgroundColor: this.options.backgroundColor });
          }
        }
        update() {
        }
      }
      function ld(t2, e2) {
        var a2 = Object.keys(t2);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(t2);
          e2 && (r2 = r2.filter(function(e3) {
            return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
          })), a2.push.apply(a2, r2);
        }
        return a2;
      }
      function Yh(t2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var a2 = arguments[e2] != null ? arguments[e2] : {};
          e2 % 2 ? ld(a2, true).forEach(function(e3) {
            Zh(t2, e3, a2[e3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(a2)) : ld(a2).forEach(function(e3) {
            Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(a2, e3));
          });
        }
        return t2;
      }
      function Zh(t2, e2, a2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: a2, enumerable: true, configurable: true, writable: true }) : t2[e2] = a2, t2;
      }
      function md(t2) {
        this._context = t2;
      }
      var nd = function() {
      };
      md.prototype = { areaStart: nd, areaEnd: nd, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        this._point && this._context.closePath();
      }, point: function(t2, o2) {
        t2 = +t2, o2 = +o2, this._point ? this._context.lineTo(t2, o2) : (this._point = 1, this._context.moveTo(t2, o2));
      } };
      var $h = function(t2) {
        return new md(t2);
      };
      const _h = 50, Ga = -Math.PI / 2, ai = 0.2;
      class bi {
        constructor(t2, { title: e2, data: { labels: a2, datasets: r2 }, options: i2 }) {
          this.options = Yh({ showLabels: false, ticksCount: 3, showLegend: false, legendPosition: b.positionType.upLeft, dataColors: O, fontFamily: "xkcd", dotSize: 1, strokeColor: "black", backgroundColor: "white" }, i2), this.title = e2, this.data = { labels: a2, datasets: r2 }, this.directionsCount = r2[0].data.length, this.filter = "url(#xkcdify-pie)", this.fontFamily = this.options.fontFamily || "xkcd", this.options.unxkcdify && (this.filter = null, this.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'), this.svgEl = f(t2).style("stroke-width", "3").style("font-family", this.fontFamily).style("background", this.options.backgroundColor).attr("width", t2.parentElement.clientWidth).attr("height", Math.min(2 * t2.parentElement.clientWidth / 3, window.innerHeight)), this.svgEl.selectAll("*").remove(), this.width = this.svgEl.attr("width"), this.height = this.svgEl.attr("height"), this.chart = this.svgEl.append("g").attr("transform", `translate(${this.width / 2},${this.height / 2})`), M(this.svgEl), N(this.svgEl), this.render();
        }
        render() {
          this.title && k.title(this.svgEl, this.title, this.options.strokeColor);
          const t2 = new L({ parent: this.svgEl, title: "", items: [], position: { x: 0, y: 0, type: b.positionType.downRight }, unxkcdify: this.options.unxkcdify, strokeColor: this.options.strokeColor, backgroundColor: this.options.backgroundColor }), e2 = 3.5 * (this.options.dotSize || 1), a2 = 6 * (this.options.dotSize || 1), r2 = Math.min(this.width, this.height) / 2 - _h, i2 = 2 * Math.PI / this.directionsCount, o2 = this.data.datasets.reduce((t3, e3) => t3.concat(e3.data), []), s2 = Math.max(...o2), n2 = Array(this.directionsCount).fill(s2), l2 = A().domain([0, s2]).range([0, r2]), h2 = (t3, e3) => l2(t3) * Math.cos(i2 * e3 + Ga), d2 = (t3, e3) => l2(t3) * Math.sin(i2 * e3 + Ga), c2 = pb().x(h2).y(d2).curve($h), p2 = l2.ticks(this.options.ticksCount || 3), $2 = this.chart.append("g").attr("class", "xkcd-chart-radar-grid").attr("stroke-width", "1").attr("filter", this.filter);
          $2.selectAll(".xkcd-chart-radar-level").data(p2).enter().append("path").attr("class", "xkcd-chart-radar-level").attr("d", (t3) => c2(Array(this.directionsCount).fill(t3))).style("fill", "none").attr("stroke", this.options.strokeColor).attr("stroke-dasharray", "7,7"), $2.selectAll(".xkcd-chart-radar-line").data(n2).enter().append("line").attr("class", ".xkcd-chart-radar-line").attr("stroke", this.options.strokeColor).attr("x1", 0).attr("y1", 0).attr("x2", h2).attr("y2", d2), $2.selectAll(".xkcd-chart-radar-tick").data(p2).enter().append("text").attr("class", "xkcd-chart-radar-tick").attr("x", (t3) => h2(t3, 0)).attr("y", (t3) => d2(t3, 0)).style("font-size", "16").style("fill", this.options.strokeColor).attr("text-anchor", "end").attr("dx", "-.125em").attr("dy", ".35em").text((t3) => t3), this.options.showLabels && $2.selectAll(".xkcd-chart-radar-label").data(n2.map((t3) => 1.15 * t3)).enter().append("text").attr("class", "xkcd-chart-radar-label").style("font-size", "16").style("fill", this.options.strokeColor).attr("x", (t3, e3) => (r2 + 10) * Math.cos(i2 * e3 + Ga)).attr("y", (t3, e3) => (r2 + 10) * Math.sin(i2 * e3 + Ga)).attr("dy", ".35em").attr("text-anchor", (t3, e3, a3) => {
            let r3 = "start";
            return f(a3[e3]).attr("x") < 0 && (r3 = "end"), r3;
          }).text((t3, e3) => this.data.labels[e3]);
          const g2 = this.chart.selectAll(".xkcd-chart-radar-group").data(this.data.datasets).enter().append("g").attr("class", "xkcd-chart-radar-group").attr("filter", this.filter).attr("stroke", (t3, e3) => this.options.dataColors[e3]).attr("fill", (t3, e3) => this.options.dataColors[e3]);
          if (g2.selectAll("circle").data((t3) => t3.data).enter().append("circle").attr("r", e2).attr("cx", h2).attr("cy", d2).attr("pointer-events", "all").on("mouseover", (e3, r3, i3) => {
            f(i3[r3]).attr("r", a2);
            const o3 = h2(e3, r3) + this.width / 2, s3 = d2(e3, r3) + this.height / 2;
            let n3 = b.positionType.downRight;
            o3 > this.width / 2 && s3 < this.height / 2 ? n3 = b.positionType.downLeft : o3 > this.width / 2 && s3 > this.height / 2 ? n3 = b.positionType.upLeft : o3 < this.width / 2 && s3 > this.height / 2 && (n3 = b.positionType.upRight), t2.update({ title: this.data.labels[r3], items: this.data.datasets.map((t3, e4) => ({ color: this.options.dataColors[e4], text: `${t3.label || ""}: ${t3.data[r3]}` })), position: { x: o3, y: s3, type: n3 } }), t2.show();
          }).on("mouseout", (a3, r3, i3) => {
            f(i3[r3]).attr("r", e2), t2.hide();
          }), g2.selectAll("path").data((t3) => [t3.data]).enter().append("path").attr("d", c2).attr("pointer-events", "none").style("fill-opacity", ai), this.options.showLegend) {
            const t3 = this.data.datasets.map((t4, e4) => ({ color: this.options.dataColors[e4], text: t4.label || "" })), e3 = this.svgEl.append("g").attr("transform", "translate(0, 30)");
            Z(e3, { items: t3, position: this.options.legendPosition, unxkcdify: this.options.unxkcdify, parentWidth: this.width, parentHeight: this.height, backgroundColor: this.options.backgroundColor, strokeColor: this.options.strokeColor });
          }
        }
        update() {
        }
      }
      xb = { config: b, Bar: ag, StackedBar: dg, Pie: ug, Line: Ag, XY: Xh, Radar: bi };
      if (typeof exports === "object" && typeof module2 !== "undefined") {
        module2.exports = xb;
      } else if (typeof define === "function" && define.amd) {
        define(function() {
          return xb;
        });
      }
    })();
  }
});

// srcts/lib/payload.ts
var buildDatasets = (payload, label_single = true, label_group = true) => {
  let datasets;
  if (payload.group) {
    datasets = [];
    for (let group in payload.data) {
      if (label_group) {
        datasets.push({
          label: group,
          data: payload.data[group]
        });
      } else {
        datasets.push({
          data: payload.data[group]
        });
      }
    }
  } else {
    const ydata = payload.data[payload.y];
    if (label_single) {
      datasets = [
        {
          label: payload.y,
          data: ydata
        }
      ];
    } else {
      datasets = [
        {
          data: ydata
        }
      ];
    }
  }
  return datasets;
};
var lineTransformer = (payload) => {
  const datasets = buildDatasets(payload);
  return {
    labels: payload.xlabels,
    datasets
  };
};
var barTransformer = (payload) => {
  const datasets = buildDatasets(payload, false);
  return {
    labels: payload.xlabels,
    datasets
  };
};
var pointTransformer = (payload) => {
  let datasets = [];
  if (payload.group) {
    for (let group in payload.data) {
      datasets.push({
        label: group,
        data: payload.data[group]
      });
    }
  } else {
    datasets = [
      {
        label: payload.y,
        data: payload.data
      }
    ];
  }
  return {
    labels: payload.xlabels,
    datasets
  };
};
var pieTransformer = (payload) => {
  const datasets = [
    {
      data: payload.data
    }
  ];
  return {
    labels: payload.xlabels,
    datasets
  };
};
var radarTransformer = (payload) => {
  const datasets = buildDatasets(payload);
  return {
    labels: payload.xlabels,
    datasets
  };
};
var config = {
  bar: barTransformer,
  stacked_bar: barTransformer,
  line: lineTransformer,
  point: pointTransformer,
  pie: pieTransformer,
  radar: radarTransformer
};
var transformPayload = (payload, type) => {
  let transformer = config[type];
  return transformer(payload);
};

// srcts/lib/plot.ts
var import_chart = __toESM(require_dist());
var buildOptions = (x) => {
  return Object.assign(__spreadValues({}, x.chartOptions), {
    data: x.payload
  });
};
var plot = (svg, x) => {
  const options = buildOptions(x);
  switch (x.type) {
    case "line" /* LINE */:
      new import_chart.default.Line(svg, options);
      break;
    case "point" /* POINT */:
      new import_chart.default.XY(svg, options);
      break;
    case "bar" /* BAR */:
      new import_chart.default.Bar(svg, options);
      break;
    case "stacked_bar" /* STACKED_BAR */:
      new import_chart.default.StackedBar(svg, options);
      break;
    case "pie" /* PIE */:
      new import_chart.default.Pie(svg, options);
      break;
    case "radar" /* RADAR */:
      new import_chart.default.Radar(svg, options);
      break;
  }
};
var plot_default = plot;

// srcts/lib/svg.ts
var createSvg = (type = "svg") => {
  return document.createElementNS("http://www.w3.org/2000/svg", type);
};

// srcts/index.ts
HTMLWidgets.widget({
  name: "xkcd",
  type: "output",
  factory: function(el, width, height) {
    return {
      renderValue: function(x) {
        if (!x["type"]) {
          console.warn("xkcd: a chart type is required after x_chart(), e.g. x_chart(data.frame(x = 1:10, y = 1:10)) |> x_line(x = 'x', y = 'y'), see https://qiushiyan.github.io/xkcd/index.html for documentation");
          return;
        }
        const svg = createSvg();
        el.appendChild(svg);
        x["payload"] = transformPayload(x["payload"], x["type"]);
        plot_default(svg, x);
      },
      resize: function(width2, height2) {
      }
    };
  }
});
