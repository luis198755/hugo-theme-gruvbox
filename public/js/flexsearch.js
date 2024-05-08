(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/flexsearch/dist/flexsearch.bundle.js
  var require_flexsearch_bundle = __commonJS({
    "node_modules/flexsearch/dist/flexsearch.bundle.js"(exports, module) {
      (function _f(self) {
        "use strict";
        try {
          if (module)
            self = module;
        } catch (e) {
        }
        self._factory = _f;
        var t;
        function u(a2) {
          return "undefined" !== typeof a2 ? a2 : true;
        }
        function aa(a2) {
          const b2 = Array(a2);
          for (let c2 = 0; c2 < a2; c2++)
            b2[c2] = v();
          return b2;
        }
        function v() {
          return /* @__PURE__ */ Object.create(null);
        }
        function ba(a2, b2) {
          return b2.length - a2.length;
        }
        function x(a2) {
          return "string" === typeof a2;
        }
        function C(a2) {
          return "object" === typeof a2;
        }
        function D(a2) {
          return "function" === typeof a2;
        }
        ;
        function ca(a2, b2) {
          var c2 = da;
          if (a2 && (b2 && (a2 = E(a2, b2)), this.H && (a2 = E(a2, this.H)), this.J && 1 < a2.length && (a2 = E(a2, this.J)), c2 || "" === c2)) {
            a2 = a2.split(c2);
            if (this.filter) {
              b2 = this.filter;
              c2 = a2.length;
              const d2 = [];
              for (let e = 0, f = 0; e < c2; e++) {
                const g = a2[e];
                g && !b2[g] && (d2[f++] = g);
              }
              a2 = d2;
            }
            return a2;
          }
          return a2;
        }
        const da = /[\p{Z}\p{S}\p{P}\p{C}]+/u, ea = /[\u0300-\u036f]/g;
        function fa(a2, b2) {
          const c2 = Object.keys(a2), d2 = c2.length, e = [];
          let f = "", g = 0;
          for (let h = 0, k, m; h < d2; h++)
            k = c2[h], (m = a2[k]) ? (e[g++] = F(b2 ? "(?!\\b)" + k + "(\\b|_)" : k), e[g++] = m) : f += (f ? "|" : "") + k;
          f && (e[g++] = F(b2 ? "(?!\\b)(" + f + ")(\\b|_)" : "(" + f + ")"), e[g] = "");
          return e;
        }
        function E(a2, b2) {
          for (let c2 = 0, d2 = b2.length; c2 < d2 && (a2 = a2.replace(b2[c2], b2[c2 + 1]), a2); c2 += 2)
            ;
          return a2;
        }
        function F(a2) {
          return new RegExp(a2, "g");
        }
        function ha(a2) {
          let b2 = "", c2 = "";
          for (let d2 = 0, e = a2.length, f; d2 < e; d2++)
            (f = a2[d2]) !== c2 && (b2 += c2 = f);
          return b2;
        }
        ;
        var ja = { encode: ia, F: false, G: "" };
        function ia(a2) {
          return ca.call(this, ("" + a2).toLowerCase(), false);
        }
        ;
        const ka = {}, G = {};
        function la(a2) {
          I(a2, "add");
          I(a2, "append");
          I(a2, "search");
          I(a2, "update");
          I(a2, "remove");
        }
        function I(a2, b2) {
          a2[b2 + "Async"] = function() {
            const c2 = this, d2 = arguments;
            var e = d2[d2.length - 1];
            let f;
            D(e) && (f = e, delete d2[d2.length - 1]);
            e = new Promise(function(g) {
              setTimeout(function() {
                c2.async = true;
                const h = c2[b2].apply(c2, d2);
                c2.async = false;
                g(h);
              });
            });
            return f ? (e.then(f), this) : e;
          };
        }
        ;
        function ma(a2, b2, c2, d2) {
          const e = a2.length;
          let f = [], g, h, k = 0;
          d2 && (d2 = []);
          for (let m = e - 1; 0 <= m; m--) {
            const n = a2[m], w = n.length, q = v();
            let r = !g;
            for (let l = 0; l < w; l++) {
              const p = n[l], z = p.length;
              if (z)
                for (let B = 0, A, y; B < z; B++)
                  if (y = p[B], g) {
                    if (g[y]) {
                      if (!m) {
                        if (c2)
                          c2--;
                        else if (f[k++] = y, k === b2)
                          return f;
                      }
                      if (m || d2)
                        q[y] = 1;
                      r = true;
                    }
                    if (d2 && (A = (h[y] || 0) + 1, h[y] = A, A < e)) {
                      const H = d2[A - 2] || (d2[A - 2] = []);
                      H[H.length] = y;
                    }
                  } else
                    q[y] = 1;
            }
            if (d2)
              g || (h = q);
            else if (!r)
              return [];
            g = q;
          }
          if (d2)
            for (let m = d2.length - 1, n, w; 0 <= m; m--) {
              n = d2[m];
              w = n.length;
              for (let q = 0, r; q < w; q++)
                if (r = n[q], !g[r]) {
                  if (c2)
                    c2--;
                  else if (f[k++] = r, k === b2)
                    return f;
                  g[r] = 1;
                }
            }
          return f;
        }
        function na(a2, b2) {
          const c2 = v(), d2 = v(), e = [];
          for (let f = 0; f < a2.length; f++)
            c2[a2[f]] = 1;
          for (let f = 0, g; f < b2.length; f++) {
            g = b2[f];
            for (let h = 0, k; h < g.length; h++)
              k = g[h], c2[k] && !d2[k] && (d2[k] = 1, e[e.length] = k);
          }
          return e;
        }
        ;
        function J(a2) {
          this.l = true !== a2 && a2;
          this.cache = v();
          this.h = [];
        }
        function oa(a2, b2, c2) {
          C(a2) && (a2 = a2.query);
          let d2 = this.cache.get(a2);
          d2 || (d2 = this.search(a2, b2, c2), this.cache.set(a2, d2));
          return d2;
        }
        J.prototype.set = function(a2, b2) {
          if (!this.cache[a2]) {
            var c2 = this.h.length;
            c2 === this.l ? delete this.cache[this.h[c2 - 1]] : c2++;
            for (--c2; 0 < c2; c2--)
              this.h[c2] = this.h[c2 - 1];
            this.h[0] = a2;
          }
          this.cache[a2] = b2;
        };
        J.prototype.get = function(a2) {
          const b2 = this.cache[a2];
          if (this.l && b2 && (a2 = this.h.indexOf(a2))) {
            const c2 = this.h[a2 - 1];
            this.h[a2 - 1] = this.h[a2];
            this.h[a2] = c2;
          }
          return b2;
        };
        const qa = { memory: { charset: "latin:extra", D: 3, B: 4, m: false }, performance: { D: 3, B: 3, s: false, context: { depth: 2, D: 1 } }, match: { charset: "latin:extra", G: "reverse" }, score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } }, "default": {} };
        function ra(a2, b2, c2, d2, e, f, g) {
          setTimeout(function() {
            const h = a2(c2 ? c2 + "." + d2 : d2, JSON.stringify(g));
            h && h.then ? h.then(function() {
              b2.export(a2, b2, c2, e, f + 1);
            }) : b2.export(a2, b2, c2, e, f + 1);
          });
        }
        ;
        function K(a2, b2) {
          if (!(this instanceof K))
            return new K(a2);
          var c2;
          if (a2) {
            x(a2) ? a2 = qa[a2] : (c2 = a2.preset) && (a2 = Object.assign({}, c2[c2], a2));
            c2 = a2.charset;
            var d2 = a2.lang;
            x(c2) && (-1 === c2.indexOf(":") && (c2 += ":default"), c2 = G[c2]);
            x(d2) && (d2 = ka[d2]);
          } else
            a2 = {};
          let e, f, g = a2.context || {};
          this.encode = a2.encode || c2 && c2.encode || ia;
          this.register = b2 || v();
          this.D = e = a2.resolution || 9;
          this.G = b2 = c2 && c2.G || a2.tokenize || "strict";
          this.depth = "strict" === b2 && g.depth;
          this.l = u(g.bidirectional);
          this.s = f = u(a2.optimize);
          this.m = u(a2.fastupdate);
          this.B = a2.minlength || 1;
          this.C = a2.boost;
          this.map = f ? aa(e) : v();
          this.A = e = g.resolution || 1;
          this.h = f ? aa(e) : v();
          this.F = c2 && c2.F || a2.rtl;
          this.H = (b2 = a2.matcher || d2 && d2.H) && fa(b2, false);
          this.J = (b2 = a2.stemmer || d2 && d2.J) && fa(b2, true);
          if (c2 = b2 = a2.filter || d2 && d2.filter) {
            c2 = b2;
            d2 = v();
            for (let h = 0, k = c2.length; h < k; h++)
              d2[c2[h]] = 1;
            c2 = d2;
          }
          this.filter = c2;
          this.cache = (b2 = a2.cache) && new J(b2);
        }
        t = K.prototype;
        t.append = function(a2, b2) {
          return this.add(a2, b2, true);
        };
        t.add = function(a2, b2, c2, d2) {
          if (b2 && (a2 || 0 === a2)) {
            if (!d2 && !c2 && this.register[a2])
              return this.update(a2, b2);
            b2 = this.encode(b2);
            if (d2 = b2.length) {
              const m = v(), n = v(), w = this.depth, q = this.D;
              for (let r = 0; r < d2; r++) {
                let l = b2[this.F ? d2 - 1 - r : r];
                var e = l.length;
                if (l && e >= this.B && (w || !n[l])) {
                  var f = L(q, d2, r), g = "";
                  switch (this.G) {
                    case "full":
                      if (2 < e) {
                        for (f = 0; f < e; f++)
                          for (var h = e; h > f; h--)
                            if (h - f >= this.B) {
                              var k = L(q, d2, r, e, f);
                              g = l.substring(f, h);
                              M(this, n, g, k, a2, c2);
                            }
                        break;
                      }
                    case "reverse":
                      if (1 < e) {
                        for (h = e - 1; 0 < h; h--)
                          g = l[h] + g, g.length >= this.B && M(
                            this,
                            n,
                            g,
                            L(q, d2, r, e, h),
                            a2,
                            c2
                          );
                        g = "";
                      }
                    case "forward":
                      if (1 < e) {
                        for (h = 0; h < e; h++)
                          g += l[h], g.length >= this.B && M(this, n, g, f, a2, c2);
                        break;
                      }
                    default:
                      if (this.C && (f = Math.min(f / this.C(b2, l, r) | 0, q - 1)), M(this, n, l, f, a2, c2), w && 1 < d2 && r < d2 - 1) {
                        for (e = v(), g = this.A, f = l, h = Math.min(w + 1, d2 - r), e[f] = 1, k = 1; k < h; k++)
                          if ((l = b2[this.F ? d2 - 1 - r - k : r + k]) && l.length >= this.B && !e[l]) {
                            e[l] = 1;
                            const p = this.l && l > f;
                            M(this, m, p ? f : l, L(g + (d2 / 2 > g ? 0 : 1), d2, r, h - 1, k - 1), a2, c2, p ? l : f);
                          }
                      }
                  }
                }
              }
              this.m || (this.register[a2] = 1);
            }
          }
          return this;
        };
        function L(a2, b2, c2, d2, e) {
          return c2 && 1 < a2 ? b2 + (d2 || 0) <= a2 ? c2 + (e || 0) : (a2 - 1) / (b2 + (d2 || 0)) * (c2 + (e || 0)) + 1 | 0 : 0;
        }
        function M(a2, b2, c2, d2, e, f, g) {
          let h = g ? a2.h : a2.map;
          if (!b2[c2] || g && !b2[c2][g])
            a2.s && (h = h[d2]), g ? (b2 = b2[c2] || (b2[c2] = v()), b2[g] = 1, h = h[g] || (h[g] = v())) : b2[c2] = 1, h = h[c2] || (h[c2] = []), a2.s || (h = h[d2] || (h[d2] = [])), f && h.includes(e) || (h[h.length] = e, a2.m && (a2 = a2.register[e] || (a2.register[e] = []), a2[a2.length] = h));
        }
        t.search = function(a2, b2, c2) {
          c2 || (!b2 && C(a2) ? (c2 = a2, a2 = c2.query) : C(b2) && (c2 = b2));
          let d2 = [], e;
          let f, g = 0;
          if (c2) {
            a2 = c2.query || a2;
            b2 = c2.limit;
            g = c2.offset || 0;
            var h = c2.context;
            f = c2.suggest;
          }
          if (a2 && (a2 = this.encode("" + a2), e = a2.length, 1 < e)) {
            c2 = v();
            var k = [];
            for (let n = 0, w = 0, q; n < e; n++)
              if ((q = a2[n]) && q.length >= this.B && !c2[q])
                if (this.s || f || this.map[q])
                  k[w++] = q, c2[q] = 1;
                else
                  return d2;
            a2 = k;
            e = a2.length;
          }
          if (!e)
            return d2;
          b2 || (b2 = 100);
          h = this.depth && 1 < e && false !== h;
          c2 = 0;
          let m;
          h ? (m = a2[0], c2 = 1) : 1 < e && a2.sort(ba);
          for (let n, w; c2 < e; c2++) {
            w = a2[c2];
            h ? (n = sa(
              this,
              d2,
              f,
              b2,
              g,
              2 === e,
              w,
              m
            ), f && false === n && d2.length || (m = w)) : n = sa(this, d2, f, b2, g, 1 === e, w);
            if (n)
              return n;
            if (f && c2 === e - 1) {
              k = d2.length;
              if (!k) {
                if (h) {
                  h = 0;
                  c2 = -1;
                  continue;
                }
                return d2;
              }
              if (1 === k)
                return ta(d2[0], b2, g);
            }
          }
          return ma(d2, b2, g, f);
        };
        function sa(a2, b2, c2, d2, e, f, g, h) {
          let k = [], m = h ? a2.h : a2.map;
          a2.s || (m = ua(m, g, h, a2.l));
          if (m) {
            let n = 0;
            const w = Math.min(m.length, h ? a2.A : a2.D);
            for (let q = 0, r = 0, l, p; q < w; q++)
              if (l = m[q]) {
                if (a2.s && (l = ua(l, g, h, a2.l)), e && l && f && (p = l.length, p <= e ? (e -= p, l = null) : (l = l.slice(e), e = 0)), l && (k[n++] = l, f && (r += l.length, r >= d2)))
                  break;
              }
            if (n) {
              if (f)
                return ta(k, d2, 0);
              b2[b2.length] = k;
              return;
            }
          }
          return !c2 && k;
        }
        function ta(a2, b2, c2) {
          a2 = 1 === a2.length ? a2[0] : [].concat.apply([], a2);
          return c2 || a2.length > b2 ? a2.slice(c2, c2 + b2) : a2;
        }
        function ua(a2, b2, c2, d2) {
          c2 ? (d2 = d2 && b2 > c2, a2 = (a2 = a2[d2 ? b2 : c2]) && a2[d2 ? c2 : b2]) : a2 = a2[b2];
          return a2;
        }
        t.contain = function(a2) {
          return !!this.register[a2];
        };
        t.update = function(a2, b2) {
          return this.remove(a2).add(a2, b2);
        };
        t.remove = function(a2, b2) {
          const c2 = this.register[a2];
          if (c2) {
            if (this.m)
              for (let d2 = 0, e; d2 < c2.length; d2++)
                e = c2[d2], e.splice(e.indexOf(a2), 1);
            else
              N(this.map, a2, this.D, this.s), this.depth && N(this.h, a2, this.A, this.s);
            b2 || delete this.register[a2];
            if (this.cache) {
              b2 = this.cache;
              for (let d2 = 0, e, f; d2 < b2.h.length; d2++)
                f = b2.h[d2], e = b2.cache[f], e.includes(a2) && (b2.h.splice(d2--, 1), delete b2.cache[f]);
            }
          }
          return this;
        };
        function N(a2, b2, c2, d2, e) {
          let f = 0;
          if (a2.constructor === Array)
            if (e)
              b2 = a2.indexOf(b2), -1 !== b2 ? 1 < a2.length && (a2.splice(b2, 1), f++) : f++;
            else {
              e = Math.min(a2.length, c2);
              for (let g = 0, h; g < e; g++)
                if (h = a2[g])
                  f = N(h, b2, c2, d2, e), d2 || f || delete a2[g];
            }
          else
            for (let g in a2)
              (f = N(a2[g], b2, c2, d2, e)) || delete a2[g];
          return f;
        }
        t.searchCache = oa;
        t.export = function(a2, b2, c2, d2, e) {
          let f, g;
          switch (e || (e = 0)) {
            case 0:
              f = "reg";
              if (this.m) {
                g = v();
                for (let h in this.register)
                  g[h] = 1;
              } else
                g = this.register;
              break;
            case 1:
              f = "cfg";
              g = { doc: 0, opt: this.s ? 1 : 0 };
              break;
            case 2:
              f = "map";
              g = this.map;
              break;
            case 3:
              f = "ctx";
              g = this.h;
              break;
            default:
              return;
          }
          ra(a2, b2 || this, c2, f, d2, e, g);
          return true;
        };
        t.import = function(a2, b2) {
          if (b2)
            switch (x(b2) && (b2 = JSON.parse(b2)), a2) {
              case "cfg":
                this.s = !!b2.opt;
                break;
              case "reg":
                this.m = false;
                this.register = b2;
                break;
              case "map":
                this.map = b2;
                break;
              case "ctx":
                this.h = b2;
            }
        };
        la(K.prototype);
        function va(a2) {
          a2 = a2.data;
          var b2 = self._index;
          const c2 = a2.args;
          var d2 = a2.task;
          switch (d2) {
            case "init":
              d2 = a2.options || {};
              a2 = a2.factory;
              b2 = d2.encode;
              d2.cache = false;
              b2 && 0 === b2.indexOf("function") && (d2.encode = Function("return " + b2)());
              a2 ? (Function("return " + a2)()(self), self._index = new self.FlexSearch.Index(d2), delete self.FlexSearch) : self._index = new K(d2);
              break;
            default:
              a2 = a2.id, b2 = b2[d2].apply(b2, c2), postMessage("search" === d2 ? { id: a2, msg: b2 } : { id: a2 });
          }
        }
        ;
        let wa = 0;
        function O(a2) {
          if (!(this instanceof O))
            return new O(a2);
          var b2;
          a2 ? D(b2 = a2.encode) && (a2.encode = b2.toString()) : a2 = {};
          (b2 = (self || window)._factory) && (b2 = b2.toString());
          const c2 = "undefined" === typeof window && self.exports, d2 = this;
          this.o = xa(b2, c2, a2.worker);
          this.h = v();
          if (this.o) {
            if (c2)
              this.o.on("message", function(e) {
                d2.h[e.id](e.msg);
                delete d2.h[e.id];
              });
            else
              this.o.onmessage = function(e) {
                e = e.data;
                d2.h[e.id](e.msg);
                delete d2.h[e.id];
              };
            this.o.postMessage({ task: "init", factory: b2, options: a2 });
          }
        }
        P("add");
        P("append");
        P("search");
        P("update");
        P("remove");
        function P(a2) {
          O.prototype[a2] = O.prototype[a2 + "Async"] = function() {
            const b2 = this, c2 = [].slice.call(arguments);
            var d2 = c2[c2.length - 1];
            let e;
            D(d2) && (e = d2, c2.splice(c2.length - 1, 1));
            d2 = new Promise(function(f) {
              setTimeout(function() {
                b2.h[++wa] = f;
                b2.o.postMessage({ task: a2, id: wa, args: c2 });
              });
            });
            return e ? (d2.then(e), this) : d2;
          };
        }
        function xa(a, b, c) {
          let d;
          try {
            d = b ? eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")') : a ? new Worker(URL.createObjectURL(new Blob(["onmessage=" + va.toString()], { type: "text/javascript" }))) : new Worker(x(c) ? c : "worker/worker.js", { type: "module" });
          } catch (e) {
          }
          return d;
        }
        ;
        function Q(a2) {
          if (!(this instanceof Q))
            return new Q(a2);
          var b2 = a2.document || a2.doc || a2, c2;
          this.K = [];
          this.h = [];
          this.A = [];
          this.register = v();
          this.key = (c2 = b2.key || b2.id) && S(c2, this.A) || "id";
          this.m = u(a2.fastupdate);
          this.C = (c2 = b2.store) && true !== c2 && [];
          this.store = c2 && v();
          this.I = (c2 = b2.tag) && S(c2, this.A);
          this.l = c2 && v();
          this.cache = (c2 = a2.cache) && new J(c2);
          a2.cache = false;
          this.o = a2.worker;
          this.async = false;
          c2 = v();
          let d2 = b2.index || b2.field || b2;
          x(d2) && (d2 = [d2]);
          for (let e = 0, f, g; e < d2.length; e++)
            f = d2[e], x(f) || (g = f, f = f.field), g = C(g) ? Object.assign({}, a2, g) : a2, this.o && (c2[f] = new O(g), c2[f].o || (this.o = false)), this.o || (c2[f] = new K(g, this.register)), this.K[e] = S(f, this.A), this.h[e] = f;
          if (this.C)
            for (a2 = b2.store, x(a2) && (a2 = [a2]), b2 = 0; b2 < a2.length; b2++)
              this.C[b2] = S(a2[b2], this.A);
          this.index = c2;
        }
        function S(a2, b2) {
          const c2 = a2.split(":");
          let d2 = 0;
          for (let e = 0; e < c2.length; e++)
            a2 = c2[e], 0 <= a2.indexOf("[]") && (a2 = a2.substring(0, a2.length - 2)) && (b2[d2] = true), a2 && (c2[d2++] = a2);
          d2 < c2.length && (c2.length = d2);
          return 1 < d2 ? c2 : c2[0];
        }
        function T(a2, b2) {
          if (x(b2))
            a2 = a2[b2];
          else
            for (let c2 = 0; a2 && c2 < b2.length; c2++)
              a2 = a2[b2[c2]];
          return a2;
        }
        function U(a2, b2, c2, d2, e) {
          a2 = a2[e];
          if (d2 === c2.length - 1)
            b2[e] = a2;
          else if (a2)
            if (a2.constructor === Array)
              for (b2 = b2[e] = Array(a2.length), e = 0; e < a2.length; e++)
                U(a2, b2, c2, d2, e);
            else
              b2 = b2[e] || (b2[e] = v()), e = c2[++d2], U(a2, b2, c2, d2, e);
        }
        function V(a2, b2, c2, d2, e, f, g, h) {
          if (a2 = a2[g])
            if (d2 === b2.length - 1) {
              if (a2.constructor === Array) {
                if (c2[d2]) {
                  for (b2 = 0; b2 < a2.length; b2++)
                    e.add(f, a2[b2], true, true);
                  return;
                }
                a2 = a2.join(" ");
              }
              e.add(f, a2, h, true);
            } else if (a2.constructor === Array)
              for (g = 0; g < a2.length; g++)
                V(a2, b2, c2, d2, e, f, g, h);
            else
              g = b2[++d2], V(a2, b2, c2, d2, e, f, g, h);
        }
        t = Q.prototype;
        t.add = function(a2, b2, c2) {
          C(a2) && (b2 = a2, a2 = T(b2, this.key));
          if (b2 && (a2 || 0 === a2)) {
            if (!c2 && this.register[a2])
              return this.update(a2, b2);
            for (let d2 = 0, e, f; d2 < this.h.length; d2++)
              f = this.h[d2], e = this.K[d2], x(e) && (e = [e]), V(b2, e, this.A, 0, this.index[f], a2, e[0], c2);
            if (this.I) {
              let d2 = T(b2, this.I), e = v();
              x(d2) && (d2 = [d2]);
              for (let f = 0, g, h; f < d2.length; f++)
                if (g = d2[f], !e[g] && (e[g] = 1, h = this.l[g] || (this.l[g] = []), !c2 || !h.includes(a2))) {
                  if (h[h.length] = a2, this.m) {
                    const k = this.register[a2] || (this.register[a2] = []);
                    k[k.length] = h;
                  }
                }
            }
            if (this.store && (!c2 || !this.store[a2])) {
              let d2;
              if (this.C) {
                d2 = v();
                for (let e = 0, f; e < this.C.length; e++)
                  f = this.C[e], x(f) ? d2[f] = b2[f] : U(b2, d2, f, 0, f[0]);
              }
              this.store[a2] = d2 || b2;
            }
          }
          return this;
        };
        t.append = function(a2, b2) {
          return this.add(a2, b2, true);
        };
        t.update = function(a2, b2) {
          return this.remove(a2).add(a2, b2);
        };
        t.remove = function(a2) {
          C(a2) && (a2 = T(a2, this.key));
          if (this.register[a2]) {
            for (var b2 = 0; b2 < this.h.length && (this.index[this.h[b2]].remove(a2, !this.o), !this.m); b2++)
              ;
            if (this.I && !this.m)
              for (let c2 in this.l) {
                b2 = this.l[c2];
                const d2 = b2.indexOf(a2);
                -1 !== d2 && (1 < b2.length ? b2.splice(d2, 1) : delete this.l[c2]);
              }
            this.store && delete this.store[a2];
            delete this.register[a2];
          }
          return this;
        };
        t.search = function(a2, b2, c2, d2) {
          c2 || (!b2 && C(a2) ? (c2 = a2, a2 = "") : C(b2) && (c2 = b2, b2 = 0));
          let e = [], f = [], g, h, k, m, n, w, q = 0;
          if (c2)
            if (c2.constructor === Array)
              k = c2, c2 = null;
            else {
              a2 = c2.query || a2;
              k = (g = c2.pluck) || c2.index || c2.field;
              m = c2.tag;
              h = this.store && c2.enrich;
              n = "and" === c2.bool;
              b2 = c2.limit || b2 || 100;
              w = c2.offset || 0;
              if (m && (x(m) && (m = [m]), !a2)) {
                for (let l = 0, p; l < m.length; l++)
                  if (p = ya.call(this, m[l], b2, w, h))
                    e[e.length] = p, q++;
                return q ? e : [];
              }
              x(k) && (k = [k]);
            }
          k || (k = this.h);
          n = n && (1 < k.length || m && 1 < m.length);
          const r = !d2 && (this.o || this.async) && [];
          for (let l = 0, p, z, B; l < k.length; l++) {
            let A;
            z = k[l];
            x(z) || (A = z, z = A.field, a2 = A.query || a2, b2 = A.limit || b2);
            if (r)
              r[l] = this.index[z].searchAsync(a2, b2, A || c2);
            else {
              d2 ? p = d2[l] : p = this.index[z].search(a2, b2, A || c2);
              B = p && p.length;
              if (m && B) {
                const y = [];
                let H = 0;
                n && (y[0] = [p]);
                for (let X = 0, pa, R; X < m.length; X++)
                  if (pa = m[X], B = (R = this.l[pa]) && R.length)
                    H++, y[y.length] = n ? [R] : R;
                H && (p = n ? ma(y, b2 || 100, w || 0) : na(p, y), B = p.length);
              }
              if (B)
                f[q] = z, e[q++] = p;
              else if (n)
                return [];
            }
          }
          if (r) {
            const l = this;
            return new Promise(function(p) {
              Promise.all(r).then(function(z) {
                p(l.search(
                  a2,
                  b2,
                  c2,
                  z
                ));
              });
            });
          }
          if (!q)
            return [];
          if (g && (!h || !this.store))
            return e[0];
          for (let l = 0, p; l < f.length; l++) {
            p = e[l];
            p.length && h && (p = za.call(this, p));
            if (g)
              return p;
            e[l] = { field: f[l], result: p };
          }
          return e;
        };
        function ya(a2, b2, c2, d2) {
          let e = this.l[a2], f = e && e.length - c2;
          if (f && 0 < f) {
            if (f > b2 || c2)
              e = e.slice(c2, c2 + b2);
            d2 && (e = za.call(this, e));
            return { tag: a2, result: e };
          }
        }
        function za(a2) {
          const b2 = Array(a2.length);
          for (let c2 = 0, d2; c2 < a2.length; c2++)
            d2 = a2[c2], b2[c2] = { id: d2, doc: this.store[d2] };
          return b2;
        }
        t.contain = function(a2) {
          return !!this.register[a2];
        };
        t.get = function(a2) {
          return this.store[a2];
        };
        t.set = function(a2, b2) {
          this.store[a2] = b2;
          return this;
        };
        t.searchCache = oa;
        t.export = function(a2, b2, c2, d2, e) {
          e || (e = 0);
          d2 || (d2 = 0);
          if (d2 < this.h.length) {
            const f = this.h[d2], g = this.index[f];
            b2 = this;
            setTimeout(function() {
              g.export(a2, b2, e ? f : "", d2, e++) || (d2++, e = 1, b2.export(a2, b2, f, d2, e));
            });
          } else {
            let f, g;
            switch (e) {
              case 1:
                f = "tag";
                g = this.l;
                break;
              case 2:
                f = "store";
                g = this.store;
                break;
              default:
                return;
            }
            ra(a2, this, c2, f, d2, e, g);
          }
        };
        t.import = function(a2, b2) {
          if (b2)
            switch (x(b2) && (b2 = JSON.parse(b2)), a2) {
              case "tag":
                this.l = b2;
                break;
              case "reg":
                this.m = false;
                this.register = b2;
                for (let d2 = 0, e; d2 < this.h.length; d2++)
                  e = this.index[this.h[d2]], e.register = b2, e.m = false;
                break;
              case "store":
                this.store = b2;
                break;
              default:
                a2 = a2.split(".");
                const c2 = a2[0];
                a2 = a2[1];
                c2 && a2 && this.index[c2].import(a2, b2);
            }
        };
        la(Q.prototype);
        var Ba = { encode: Aa, F: false, G: "" };
        const Ca = [F("[\xE0\xE1\xE2\xE3\xE4\xE5]"), "a", F("[\xE8\xE9\xEA\xEB]"), "e", F("[\xEC\xED\xEE\xEF]"), "i", F("[\xF2\xF3\xF4\xF5\xF6\u0151]"), "o", F("[\xF9\xFA\xFB\xFC\u0171]"), "u", F("[\xFD\u0177\xFF]"), "y", F("\xF1"), "n", F("[\xE7c]"), "k", F("\xDF"), "s", F(" & "), " and "];
        function Aa(a2) {
          var b2 = a2 = "" + a2;
          b2.normalize && (b2 = b2.normalize("NFD").replace(ea, ""));
          return ca.call(this, b2.toLowerCase(), !a2.normalize && Ca);
        }
        ;
        var Ea = { encode: Da, F: false, G: "strict" };
        const Fa = /[^a-z0-9]+/, Ga = { b: "p", v: "f", w: "f", z: "s", x: "s", "\xDF": "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
        function Da(a2) {
          a2 = Aa.call(this, a2).join(" ");
          const b2 = [];
          if (a2) {
            const c2 = a2.split(Fa), d2 = c2.length;
            for (let e = 0, f, g = 0; e < d2; e++)
              if ((a2 = c2[e]) && (!this.filter || !this.filter[a2])) {
                f = a2[0];
                let h = Ga[f] || f, k = h;
                for (let m = 1; m < a2.length; m++) {
                  f = a2[m];
                  const n = Ga[f] || f;
                  n && n !== k && (h += n, k = n);
                }
                b2[g++] = h;
              }
          }
          return b2;
        }
        ;
        var Ia = { encode: Ha, F: false, G: "" };
        const Ja = [F("ae"), "a", F("oe"), "o", F("sh"), "s", F("th"), "t", F("ph"), "f", F("pf"), "f", F("(?![aeo])h(?![aeo])"), "", F("(?!^[aeo])h(?!^[aeo])"), ""];
        function Ha(a2, b2) {
          a2 && (a2 = Da.call(this, a2).join(" "), 2 < a2.length && (a2 = E(a2, Ja)), b2 || (1 < a2.length && (a2 = ha(a2)), a2 && (a2 = a2.split(" "))));
          return a2 || [];
        }
        ;
        var La = { encode: Ka, F: false, G: "" };
        const Ma = F("(?!\\b)[aeo]");
        function Ka(a2) {
          a2 && (a2 = Ha.call(this, a2, true), 1 < a2.length && (a2 = a2.replace(Ma, "")), 1 < a2.length && (a2 = ha(a2)), a2 && (a2 = a2.split(" ")));
          return a2 || [];
        }
        ;
        G["latin:default"] = ja;
        G["latin:simple"] = Ba;
        G["latin:balance"] = Ea;
        G["latin:advanced"] = Ia;
        G["latin:extra"] = La;
        const W = self;
        let Y;
        const Z = { Index: K, Document: Q, Worker: O, registerCharset: function(a2, b2) {
          G[a2] = b2;
        }, registerLanguage: function(a2, b2) {
          ka[a2] = b2;
        } };
        (Y = W.define) && Y.amd ? Y([], function() {
          return Z;
        }) : W.exports ? W.exports = Z : W.FlexSearch = Z;
      })(exports);
    }
  });

  // <stdin>
  var import_flexsearch = __toESM(require_flexsearch_bundle());
  var search = document.getElementById("search__text");
  var suggestions = document.getElementById("search__suggestions");
  if (search !== null) {
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault();
        search.focus();
      } else if (e.key === "Escape") {
        search.blur();
        suggestions.classList.add("search__suggestions--hidden");
      }
    });
  }
  document.addEventListener("click", (e) => {
    const clickInsideSuggestions = suggestions.contains(e.target);
    if (!clickInsideSuggestions) {
      suggestions.classList.add("search__suggestions--hidden");
    }
  });
  document.addEventListener("keydown", (e) => {
    const suggestionsHidden = suggestions.classList.contains(
      "search__suggestions--hidden"
    );
    if (suggestionsHidden)
      return;
    const focusableSuggestions = [...suggestions.querySelectorAll("a")];
    if (focusableSuggestions.length === 0)
      return;
    const currentIndex = focusableSuggestions.indexOf(document.activeElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex2 = currentIndex + 1 < focusableSuggestions.length ? currentIndex + 1 : currentIndex;
      focusableSuggestions[nextIndex2].focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      focusableSuggestions[nextIndex].focus();
    }
  });
  (function() {
    const index = new import_flexsearch.Document({
      tokenize: "forward",
      cache: 100,
      document: {
        id: "id",
        store: ["href", "title", "description"],
        index: ["title", "description", "content"]
      }
    });
    index.add(
      {
        id: 0,
        href: "/blog/git-init-repo/",
        title: "Git Init Script for local Repo",
        description: 'You can create a new file, for example, named setup_repo.sh, and then add the following contents to it: Prerequisites# Install Git and configured Create a GitHub account. SSH access set up for GitHub. Script# #!/bin/bash # Add a title to the README.md file echo "# prueba" >> README.md # Initialize a new Git repository git init # Add README.md to the staging area git add README.md # Commit the changes with a message git commit -m "',
        content: 'You can create a new file, for example, named setup_repo.sh, and then add the following contents to it:\nPrerequisites# Install Git and configured Create a GitHub account. SSH access set up for GitHub. Script# #!/bin/bash # Add a title to the README.md file echo "# prueba" >> README.md # Initialize a new Git repository git init # Add README.md to the staging area git add README.md # Commit the changes with a message git commit -m "first commit" # Rename the default branch to main git branch -M main # Add a remote repository git remote add origin git@github.com:UserName/prueba.git # Push changes to the main branch of the remote repository # And set it to track the upstream branch git push -u origin main Make sure to grant execute permissions to your script by running:\nchmod +x setup_repo.sh You can then run the script from your terminal with:\n./setup_repo.sh This script assumes you have Git configured and SSH access set up for GitHub. Adjust the GitHub repository URL if necessary.\nGitHub web web: https://docs.github.com/\n'
      }
    ).add(
      {
        id: 1,
        href: "/blog/nodejs-install/",
        title: "Node.js Install",
        description: "Node.js\xAE is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.\nNode.js is similar in design to, and influenced by, systems like Ruby&rsquo;s Event Machine and Python&rsquo;s Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop.",
        content: "Node.js\xAE is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.\nNode.js is similar in design to, and influenced by, systems like Ruby&rsquo;s Event Machine and Python&rsquo;s Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript \u2014 the event loop is hidden from the user.\nInstall# Download Node.js as Package Manager\nInstalls NVM (Node Version Manager):\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash Download and install Node.js:\nnvm install 20 Verifies the right Node.js version is in the environment:\nnode -v # should print `v20.12.2` Verifies the right NPM version is in the environment:\nnpm -v # should print `10.5.0` Node.js installation web: https://nodejs.org/en/download/package-manager\n"
      }
    ).add(
      {
        id: 2,
        href: "/blog/hugo-install/",
        title: "Hugo Install",
        description: "Hugo is a static site generator written in Go, optimized for speed and designed for flexibility. With its advanced templating system and fast asset pipelines, Hugo renders a complete site in seconds, often less.\nDue to its flexible framework, multilingual support, and powerful taxonomy system, Hugo is widely used to create:\nCorporate, government, nonprofit, education, news, event, and project sites Documentation sites Image portfolios Landing pages Business, professional, and personal blogs Resumes and CVs Use Hugo\u2019s embedded web server during development to instantly see changes to content, structure, behavior, and presentation.",
        content: `Hugo is a static site generator written in Go, optimized for speed and designed for flexibility. With its advanced templating system and fast asset pipelines, Hugo renders a complete site in seconds, often less.
Due to its flexible framework, multilingual support, and powerful taxonomy system, Hugo is widely used to create:
Corporate, government, nonprofit, education, news, event, and project sites Documentation sites Image portfolios Landing pages Business, professional, and personal blogs Resumes and CVs Use Hugo\u2019s embedded web server during development to instantly see changes to content, structure, behavior, and presentation. Then deploy the site to your host, or push changes to your Git provider for automated builds and deployment.
And with Hugo Modules, you can share content, assets, data, translations, themes, templates, and configuration with other projects via public or private Git repositories.
Prerequisites# To install HUGO on a Linux system, you can follow these steps. These steps are generally applicable to most Linux distributions, such as Ubuntu, Fedora, and CentOS. Make sure to download the latest version of Go and Node.js.
Install Go Install Install Node.js Install# Option 1: Derivatives of the Debian distribution of Linux include elementary OS, KDE neon, Linux Lite, Linux Mint, MX Linux, Pop!_OS, Ubuntu, Zorin OS, and others. To install the extended edition of Hugo:
sudo apt install hugo OPtion 2: Prebuilt binaries are available for a variety of operating systems and architectures. Visit the latest release page, and scroll down to the Assets section.
Download the archive for the desired edition, operating system, and architecture Extract the archive Move the executable to the desired directory Add this directory to the PATH environment variable Verify that you have execute permission on the file Verify installation# Open a new terminal window or type source ~/.bashrc to update your shell configuration. To verify that HUGO is installed correctly, run:
hugo version Quick Start# Run these commands to create a Hugo site with the Ananke theme. The next section provides an explanation of each command.
hugo new site quickstart cd quickstart git init git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke echo "theme = 'ananke'" >> hugo.toml hugo server View your site at the URL displayed in your terminal. Press Ctrl + C to stop Hugo\u2019s development server.
Hugo installation web: https://gohugo.io/installation/linux/
`
      }
    ).add(
      {
        id: 3,
        href: "/blog/go-install/",
        title: "Go Install",
        description: "The Go programming language is an open source project to make programmers more productive.\nGo is expressive, concise, clean, and efficient. Its concurrency mechanisms make it easy to write programs that get the most out of multicore and networked machines, while its novel type system enables flexible and modular program construction. Go compiles quickly to machine code yet has the convenience of garbage collection and the power of run-time reflection. It&rsquo;s a fast, statically typed, compiled language that feels like a dynamically typed, interpreted language.",
        content: "The Go programming language is an open source project to make programmers more productive.\nGo is expressive, concise, clean, and efficient. Its concurrency mechanisms make it easy to write programs that get the most out of multicore and networked machines, while its novel type system enables flexible and modular program construction. Go compiles quickly to machine code yet has the convenience of garbage collection and the power of run-time reflection. It&rsquo;s a fast, statically typed, compiled language that feels like a dynamically typed, interpreted language.\nPrerequisites# To install Go (Golang) on a Linux system, you can follow these steps. These steps are generally applicable to most Linux distributions, such as Ubuntu, Fedora, and CentOS. Make sure to download the latest version of Go from the official website.\nDownload the Go binary: Visit the official Go downloads page at https://golang.org/dl/ to find the binary distribution for Linux. You can download it using wget or curl. For example:\nwget https://go.dev/dl/go1.22.2.linux-amd64.tar.gz Install# Remove any previous Go installation by deleting the /usr/local/go folder (if it exists), then extract the archive you just downloaded into /usr/local, creating a fresh Go tree in /usr/local/go:\nsudo rm -rf /usr/local/go sudo tar -C /usr/local -xzf go1.22.2.linux-amd64.tar.gz Set up your environment variables: Add /usr/local/go/bin to the PATH environment variable. You can do this by adding the following lines to your $HOME/.profile, $HOME/.bashrc, or $HOME/.zshrc depending on the shell you use.\nexport PATH=$PATH:/usr/local/go/bin export GOPATH=$HOME/go export GOBIN=$GOPATH/bin After adding these lines, apply the changes by sourcing the profile file:\nsource $HOME/.profile Verify the installation: To check that Go is installed correctly and see the installed version, you can use:\ngo version Go installation web: https://go.dev/doc/install\n"
      }
    ).add(
      {
        id: 4,
        href: "/blog/oh-my-zsh/",
        title: "Oh my Zsh Install",
        description: "Oh My Zsh is a delightful, open source, community-driven framework for managing your Zsh configuration. It comes bundled with thousands of helpful functions, helpers, plugins, themes, and a few things that make you shout&hellip;\nPrerequisites# Installing Oh My Zsh on a Linux system is a straightforward process that enhances the default shell with additional features and themes. Here\u2019s a step-by-step guide to install Oh My Zsh:\nMake sure you have zsh installed on your system.",
        content: 'Oh My Zsh is a delightful, open source, community-driven framework for managing your Zsh configuration. It comes bundled with thousands of helpful functions, helpers, plugins, themes, and a few things that make you shout&hellip;\nPrerequisites# Installing Oh My Zsh on a Linux system is a straightforward process that enhances the default shell with additional features and themes. Here\u2019s a step-by-step guide to install Oh My Zsh:\nMake sure you have zsh installed on your system. You can install it using your package manager. For example, on Ubuntu, you can install it with:\nsudo apt update sudo apt install zsh Install# Install Oh My Zsh: You can install Oh My Zsh via the curl. Here are the commands:\nUsing curl:\nsh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" Change your default shell: After installing Oh My Zsh, you might want to change your default shell to zsh if it isn&rsquo;t already. You can do this by running:\nchsh -s $(which zsh) You will need to log out and log back in to see this change.\nCustomize your environment: Oh My Zsh comes with lots of themes and plugins. You can change themes by modifying the ZSH_THEME variable in the ~/.zshrc file. Plugins can be added by editing the plugins array in the same file.\nThis will set up a robust, feature-rich shell environment using Oh My Zsh, making your terminal more user-friendly and visually appealing.\nOh my Zsh web: https://ohmyz.sh/\n'
      }
    ).add(
      {
        id: 5,
        href: "/blog/embed-video-files/",
        title: "Embed Video Files x",
        description: "Use the video shortcode to embed your video files from Hugo Page Resources.\n",
        content: "Use the video shortcode to embed your video files from Hugo Page Resources.\nWith a page bundle looking like the following:\nembed-videos/ |-- index.md |-- my-video.jpg |-- my-video.mp4 |-- my-video.webm You can embed my-video like this:\n{{&lt; video src=&#34;my-video&#34; autoplay=&#34;true&#34; controls=&#34;false&#34; loop=&#34;true&#34; &gt;}} The shortcode looks for media files matching the filename my-video*. For each video MIME type file, a &lt;source&gt; element is added. The first image MIME type file is used as poster (thumbnail). It will render the following HTML:\n&lt;video autoplay loop poster=&#34;/blog/embed-videos/my-video.jpg&#34; width=&#34;100%&#34; playsinline &gt; &lt;source src=&#34;/blog/embed-videos/my-video.mp4&#34; type=&#34;video/mp4&#34; /&gt; &lt;source src=&#34;/blog/embed-videos/my-video.webm&#34; type=&#34;video/webm&#34; /&gt; &lt;/video&gt; You can set a Markdown caption, wrapping the &lt;video&gt; inside a &lt;figure&gt;.\nAdditionally, the shortcode allows you to set the following attributes:\nAttribute Default autoplay false controls true height loop false muted true preload width 100% playsinline true Learn more about the &lt;video&gt; attributes here.\n"
      }
    ).add(
      {
        id: 6,
        href: "/blog/image-optimization/",
        title: "Image Optimization",
        description: "The theme optimizes images by default with a custom Hugo&rsquo;s markdown render hook:\nThe theme creates resized versions for each image, ranging from 100 to 700 pixels wide. It generates WebP versions for each size if the original image format isn&rsquo;t WebP. The theme keeps the original file format as a fallback for browsers that don&rsquo;t support the WebP format. Images in SVG format are embedded as-is. Blog Post Cover Images# Use the front matter of your posts to add cover images:",
        content: "The theme optimizes images by default with a custom Hugo&rsquo;s markdown render hook:\nThe theme creates resized versions for each image, ranging from 100 to 700 pixels wide. It generates WebP versions for each size if the original image format isn&rsquo;t WebP. The theme keeps the original file format as a fallback for browsers that don&rsquo;t support the WebP format. Images in SVG format are embedded as-is. Blog Post Cover Images# Use the front matter of your posts to add cover images:\n--- cover: src: alexandre-van-thuan-mr9FouttLGY-unsplash.jpg alt: The interior of Stadsbiblioteket in Stockholm - Gunnar Asplunds library from 1928. The architecture is a transition between neoclassicism and functionalism. caption: By [Alexandre Van Thuan](https://unsplash.com/photos/mr9FouttLGY) --- Captions# Add captions to your inline images like this:\n--- ![Alt text](image-url.jpg &#34;Caption with **markdown support**&#34;) --- The main library in Vancouver is architecturally significant. The angles and levels contour together to produce a trippy scene. It&rsquo;s pretty from the outside but stunning from the inside. By Aaron Thomas JPEG and WebP Quality# The default quality is 75%. See the official Image Processing Config Hugo docs. Change it by adding the following to the config.toml file:\n[imaging] quality = 75 Resizing# By default, the theme creates resized versions of images ranging from 300 to 700 pixels wide in increments of 100 pixels. Override the resize behavior by adding the following to the config.toml file:\n[params] [params.imageResize] min = 300 max = 700 increment = 100 Lazy Loading# Images are lazily loaded by default using the loading=&quot;lazy&quot; attribute on HTML img tags.\n"
      }
    ).add(
      {
        id: 7,
        href: "/blog/prism-code-highlighting-showcase/",
        title: "Prism Code Highlighting Showcase",
        description: "This theme uses Prism for code highlighting. Other Hugo themes usually include a pre-configured version of Prism, which complicates updates and clutters the source code base with third-party JavaScript.\nOnly the Prism features you select in the Hugo site configuration are bundled by the build process. This way, Prism can be easily updated with npm and the size of the JavaScript and CSS bundles are minimized by only including what you need.\n",
        content: "This theme uses Prism for code highlighting. Other Hugo themes usually include a pre-configured version of Prism, which complicates updates and clutters the source code base with third-party JavaScript.\nOnly the Prism features you select in the Hugo site configuration are bundled by the build process. This way, Prism can be easily updated with npm and the size of the JavaScript and CSS bundles are minimized by only including what you need.\nHere is a an example configuration demonstrating how to configure languages and plugins in the config.toml file of your Hugo site:\n[params] [params.prism] languages = [ &#34;markup&#34;, &#34;css&#34;, &#34;clike&#34;, &#34;javascript&#34; ] plugins = [ &#34;normalize-whitespace&#34;, &#34;toolbar&#34;, &#34;copy-to-clipboard&#34; ] Languages# The following languages are available:\nabap abnf actionscript ada agda al antlr4 apacheconf apex apl applescript aql arduino arff armasm arturo asciidoc asm6502 asmatmel aspnet autohotkey autoit avisynth avro-idl awk bash basic batch bbcode bbj bicep birb bison bnf bqn brainfuck brightscript bro bsl c cfscript chaiscript cil cilkc cilkcpp clike clojure cmake cobol coffeescript concurnas cooklang coq core cpp crystal csharp cshtml csp css-extras css csv cue cypher d dart dataweave dax dhall diff django dns-zone-file docker dot ebnf editorconfig eiffel ejs elixir elm erb erlang etlua excel-formula factor false firestore-security-rules flow fortran fsharp ftl gap gcode gdscript gedcom gettext gherkin git glsl gml gn go-module go gradle graphql groovy haml handlebars haskell haxe hcl hlsl hoon hpkp hsts http ichigojam icon icu-message-format idris iecst ignore inform7 ini io j java javadoc javadoclike javascript javastacktrace jexl jolie jq js-extras js-templates jsdoc json json5 jsonp jsstacktrace jsx julia keepalived keyman kotlin kumir kusto latex latte less lilypond linker-script liquid lisp livescript llvm log lolcode lua magma makefile markdown markup-templating markup mata matlab maxscript mel mermaid metafont mizar mongodb monkey moonscript n1ql n4js nand2tetris-hdl naniscript nasm neon nevod nginx nim nix nsis objectivec ocaml odin opencl openqasm oz parigp parser pascal pascaligo pcaxis peoplecode perl php-extras php phpdoc plant-uml plsql powerquery powershell processing prolog promql properties protobuf psl pug puppet pure purebasic purescript python q qml qore qsharp r racket reason regex rego renpy rescript rest rip roboconf robotframework ruby rust sas sass scala scheme scss shell-session smali smalltalk smarty sml solidity solution-file soy sparql splunk-spl sqf sql squirrel stan stata stylus supercollider swift systemd t4-cs t4-templating t4-vb tap tcl textile toml tremor tsx tt2 turtle twig typescript typoscript unrealscript uorazor uri v vala vbnet velocity verilog vhdl vim visual-basic warpscript wasm web-idl wgsl wiki wolfram wren xeora xml-doc xojo xquery yaml yang zig Plugins# Before using a plugin in production, read its documentation and test it thoroughly. E.g., the remove-initial-line-feed plugin is still available despite being deprecated in favor of normalize-whitespace.\nMany Prism plugins require using &lt;pre&gt; tags with custom attributes. Hugo uses Goldmark as Markdown handler, which by default doesn&rsquo;t render raw inline HTML, so make sure to enable unsafe rendering if required:\n[markup] [markup.goldmark] [markup.goldmark.renderer] unsafe = true The following plugins are available:\nautolinker autoloader command-line copy-to-clipboard custom-class data-uri-highlight diff-highlight download-button file-highlight filter-highlight-all highlight-keywords inline-color jsonp-highlight keep-markup line-highlight line-numbers match-braces normalize-whitespace previewers remove-initial-line-feed show-invisibles show-language toolbar treeview unescaped-markup wpd Examples# Copy to Clipboard# copy-to-clipboard requires the toolbar plugin, so make sure to add it after adding toolbar in the config.toml file:\nConfig:\n[params.prism] # ... plugins = [ &#34;toolbar&#34;, &#34;copy-to-clipboard&#34; ] Line Numbers# Config:\n[params.prism] plugins = [ &#34;line-numbers&#34; ] Input:\n&lt;pre class=&#34;line-numbers&#34;&gt; &lt;code&gt; Example &lt;/code&gt; &lt;/pre&gt; Output:\nHello, World! Foo Bar Command Line# Config:\n[params.prism] languages = [ &#34;bash&#34; ] plugins = [ &#34;command-line&#34; ] Input:\n&lt;pre class=&#34;command-line language-bash&#34; data-user=&#34;root&#34; data-host=&#34;localhost&#34;&gt; &lt;code&gt; cd /usr/local/etc cp php.ini php.ini.bak vi php.ini &lt;/code&gt; &lt;/pre&gt; &lt;pre class=&#34;command-line language-bash&#34; data-user=&#34;chris&#34; data-host=&#34;remotehost&#34; data-output=&#34;2, 4-8&#34; &gt; &lt;code&gt; pwd /usr/home/chris/bin ls -la total 2 drwxr-xr-x 2 chris chris 11 Jan 10 16:48 . drwxr--r-x 45 chris chris 92 Feb 14 11:10 .. -rwxr-xr-x 1 chris chris 444 Aug 25 2013 backup -rwxr-xr-x 1 chris chris 642 Jan 17 14:42 deploy &lt;/code&gt; &lt;/pre&gt; Output:\ncd /usr/local/etc cp php.ini php.ini.bak vi php.ini pwd /usr/home/chris/bin ls -la total 2 drwxr-xr-x 2 chris chris 11 Jan 10 16:48 . drwxr--r-x 45 chris chris 92 Feb 14 11:10 .. -rwxr-xr-x 1 chris chris 444 Aug 25 2013 backup -rwxr-xr-x 1 chris chris 642 Jan 17 14:42 deploy Diff Highlight# Config:\n[params.prism] languages = [ &#34;javascript&#34;, &#34;diff&#34; ] plugins = [ &#34;diff-highlight&#34; ] Input:\n&lt;pre class=&#34;language-diff-javascript diff-highlight&#34;&gt; &lt;code&gt; @@ -4,6 +4,5 @@ - let foo = bar.baz([1, 2, 3]); - foo = foo + 1; + const foo = bar.baz([1, 2, 3]) + 1; console.log(`foo: ${foo}`); &lt;/code&gt; &lt;/pre&gt; Output:\n@@ -4,6 +4,5 @@ - let foo = bar.baz([1, 2, 3]); - foo = foo + 1; + const foo = bar.baz([1, 2, 3]) + 1; console.log(`foo: ${foo}`); "
      }
    ).add(
      {
        id: 8,
        href: "/blog/markdown-syntax/",
        title: "Markdown Syntax Guide",
        description: "Sample article showcasing basic Markdown syntax and formatting for HTML elements.",
        content: "This article offers a sample of basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in a Hugo theme.\nHeadings# The following HTML &lt;h1&gt;\u2014&lt;h6&gt; elements represent six levels of section headings. &lt;h1&gt; is the highest section level while &lt;h6&gt; is the lowest.\nH1# H2# H3# H4# H5# H6# Paragraph# Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.\nItatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.\nBlockquotes# The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations.\nBlockquote without attribution# Tiam, ad mint andaepu dandae nostion secatur sequo quae. Note that you can use Markdown syntax within a blockquote.\nBlockquote with attribution# Don&rsquo;t communicate by sharing memory, share memory by communicating.\n\u2014 Rob Pike1\nTables# Tables aren&rsquo;t part of the core Markdown spec, but Hugo supports supports them out-of-the-box.\nName Age Bob 27 Alice 23 Inline Markdown within tables# Italics Bold Code italics bold code Code Blocks# Code block with backticks# &lt;!doctype html&gt; &lt;html lang=&#34;en&#34;&gt; &lt;head&gt; &lt;meta charset=&#34;utf-8&#34;&gt; &lt;title&gt;Example HTML5 Document&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;p&gt;Test&lt;/p&gt; &lt;/body&gt; &lt;/html&gt; Code block indented with four spaces# &lt;!doctype html&gt; &lt;html lang=&quot;en&quot;&gt; &lt;head&gt; &lt;meta charset=&quot;utf-8&quot;&gt; &lt;title&gt;Example HTML5 Document&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;p&gt;Test&lt;/p&gt; &lt;/body&gt; &lt;/html&gt; Code block with Hugo&rsquo;s internal highlight shortcode# &lt;!doctype html&gt; &lt;html lang=&#34;en&#34;&gt; &lt;head&gt; &lt;meta charset=&#34;utf-8&#34;&gt; &lt;title&gt;Example HTML5 Document&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;p&gt;Test&lt;/p&gt; &lt;/body&gt; &lt;/html&gt; List Types# Ordered List# First item Second item Third item Unordered List# List item Another item And another item Nested list# Fruit Apple Orange Banana Dairy Milk Cheese Other Elements \u2014 abbr, sub, sup, kbd, mark# GIF is a bitmap image format.\nH2O\nXn + Yn = Zn\nPress CTRL+ALT+Delete to end the session.\nMost salamanders are nocturnal, and hunt for insects, worms, and other small creatures.\nThe above quote is excerpted from Rob Pike&rsquo;s talk during Gopherfest, November 18, 2015.&#160;&#x21a9;&#xfe0e;\n"
      }
    ).add(
      {
        id: 9,
        href: "/blog/rich-content/",
        title: "Rich Content",
        description: "A brief description of Hugo Shortcodes",
        content: "Hugo ships with several Built-in Shortcodes for rich content, along with a Privacy Config and a set of Simple Shortcodes that enable static and no-JS versions of various social media embeds.\nYouTube Privacy Enhanced Shortcode# Twitter Simple Shortcode# \u201CIn addition to being more logical, asymmetry has the advantage that its complete appearance is far more optically effective than symmetry.\u201D\n\u2014 Jan Tschichold pic.twitter.com/gcv7SrhvJb\n&mdash; Design Reviewed | Graphic Design History (@DesignReviewed) January 17, 2019 Vimeo Simple Shortcode# "
      }
    ).add(
      {
        id: 10,
        href: "/blog/placeholder-text/",
        title: "Placeholder Text",
        description: "Lorem Ipsum Dolor Si Amet",
        content: "Lorem est tota propiore conpellat pectoribus de pectora summo.\nRedit teque digerit hominumque toris verebor lumina non cervice subde tollit usus habet Arctonque, furores quas nec ferunt. Quoque montibus nunc caluere tempus inhospita parcite confusaque translucet patri vestro qui optatis lumine cognoscere flos nubis! Fronde ipsamque patulos Dryopen deorum.\nExierant elisi ambit vivere dedere Duce pollice Eris modo Spargitque ferrea quos palude Rursus nulli murmur; hastile inridet ut ab gravi sententia! Nomine potitus silentia flumen, sustinet placuit petis in dilapsa erat sunt. Atria tractus malis.\nComas hunc haec pietate fetum procerum dixit Post torum vates letum Tiresia Flumen querellas Arcanaque montibus omnes Quidem et Vagus elidunt# The Van de Graaf Canon\nMane refeci capiebant unda mulcebat# Victa caducifer, malo vulnere contra dicere aurato, ludit regale, voca! Retorsit colit est profanae esse virescere furit nec; iaculi matertera et visa est, viribus. Divesque creatis, tecta novat collumque vulnus est, parvas. Faces illo pepulere tempus adest. Tendit flamma, ab opes virum sustinet, sidus sequendo urbis.\nIubar proles corpore raptos vero auctor imperium; sed et huic: manus caeli Lelegas tu lux. Verbis obstitit intus oblectamina fixis linguisque ausus sperare Echionides cornuaque tenent clausit possit. Omnia putatur. Praeteritae refert ausus; ferebant e primus lora nutat, vici quae mea ipse. Et iter nil spectatae vulnus haerentia iuste et exercebat, sui et.\nEurytus Hector, materna ipsumque ut Politen, nec, nate, ignari, vernum cohaesit sequitur. Vel mitis temploque vocatus, inque alis, oculos nomen non silvis corpore coniunx ne displicet illa. Crescunt non unus, vidit visa quantum inmiti flumina mortis facto sic: undique a alios vincula sunt iactata abdita! Suspenderat ego fuit tendit: luna, ante urbem Propoetides parte.\n"
      }
    ).add(
      {
        id: 11,
        href: "/blog/math-typesetting/",
        title: "Math Typesetting",
        description: "A brief guide to setup KaTeX",
        content: "Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries.\nIn this example we will be using KaTeX\nCreate a partial under /layouts/partials/math.html Within this partial reference the Auto-render Extension or host these scripts locally. Include the partial in your templates like so: {{ if or .Params.math .Site.Params.math }} {{ partial &#34;math.html&#34; . }} {{ end }} To enable KaTex globally set the parameter math to true in a project&rsquo;s configuration To enable KaTex on a per page basis include the parameter math: true in content files Note: Use the online reference of Supported TeX Functions\nExamples# Block math: $$ \\varphi = 1+\\frac{1} {1+\\frac{1} {1+\\frac{1} {1+\\cdots} } } $$\n"
      }
    ).add(
      {
        id: 12,
        href: "/blog/emoji-support/",
        title: "Emoji Support",
        description: "Guide to emoji usage in Hugo",
        content: "Emoji can be enabled in a Hugo project in a number of ways.\nThe emojify function can be called directly in templates or Inline Shortcodes.\nTo enable emoji globally, set enableEmoji to true in your site&rsquo;s configuration and then you can type emoji shorthand codes directly in content files; e.g.\n\u{1F648} :see_no_evil: \u{1F649} :hear_no_evil: \u{1F64A} :speak_no_evil:\nThe Emoji cheat sheet is a useful reference for emoji shorthand codes.\nN.B. The above steps enable Unicode Standard emoji characters and sequences in Hugo, however the rendering of these glyphs depends on the browser and the platform. To style the emoji you can either use a third party emoji font or a font stack; e.g.\n.emoji { font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols; }"
      }
    );
    search.addEventListener("input", function() {
      const maxResultsCount = 5;
      const searchText = this.value;
      const searchResults = index.search(searchText, maxResultsCount, { enrich: true });
      const searchResultsMap = /* @__PURE__ */ new Map();
      for (const searchResult of searchResults.flatMap((r) => r.result)) {
        if (searchResultsMap.has(searchResult.href))
          continue;
        searchResultsMap.set(searchResult.doc.href, searchResult.doc);
      }
      suggestions.innerHTML = "";
      suggestions.classList.remove("search__suggestions--hidden");
      if (searchResultsMap.size === 0 && searchText) {
        const noResultsMessage = document.createElement("div");
        noResultsMessage.innerHTML = `No results for "<strong>${searchText}</strong>"`;
        noResultsMessage.classList.add("search__no-results");
        suggestions.appendChild(noResultsMessage);
        return;
      }
      for (const [href, searchResult] of searchResultsMap) {
        const suggestion = document.createElement("a");
        suggestion.href = href;
        suggestion.classList.add("search__suggestion-item");
        suggestions.appendChild(suggestion);
        const title = document.createElement("div");
        title.textContent = searchResult.title;
        title.classList.add("search__suggestion-title");
        suggestion.appendChild(title);
        const description = document.createElement("div");
        description.textContent = searchResult.description;
        description.classList.add("search__suggestion-description");
        suggestion.appendChild(description);
        if (suggestions.childElementCount === maxResultsCount)
          break;
      }
    });
  })();
})();
//! Source: https://github.com/h-enk/doks/blob/master/assets/js/index.js
/*! Source: https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3 */
//! Source: https://discourse.gohugo.io/t/range-length-or-last-element/3803/2
