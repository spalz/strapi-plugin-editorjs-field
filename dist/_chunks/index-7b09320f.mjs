import { prefixPluginTranslations } from "@strapi/helper-plugin";
import { jsx, jsxs } from "react/jsx-runtime";
import { Flex } from "@strapi/design-system";
import styled from "styled-components";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v2 = glob[path];
  if (v2) {
    return typeof v2 === "function" ? v2() : Promise.resolve(v2);
  }
  return new Promise((_2, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const IconBox = styled(Flex)`
  background-color: #f0f0ff;
  border: 1px solid #d9d8ff;
`;
const EditorjsIcon = () => {
  return /* @__PURE__ */ jsx(
    IconBox,
    {
      justifyContent: "center",
      alignItems: "center",
      width: 7,
      height: 6,
      hasRadius: true,
      "aria-hidden": true,
      children: /* @__PURE__ */ jsxs(
        "svg",
        {
          width: "86",
          height: "86",
          viewBox: "0 0 86 86",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M42.5 81C63.2107 81 80 64.2107 80 43.5C80 22.7893 63.2107 6 42.5 6C21.7893 6 5 22.7893 5 43.5C5 64.2107 21.7893 81 42.5 81Z",
                fill: "url(#paint0_radial_2121_7781)"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M39.0116 24.3141C39.0116 23.3889 39.3791 22.5016 40.0333 21.8474C40.6875 21.1932 41.5748 20.8257 42.5 20.8257C43.4251 20.8257 44.3124 21.1932 44.9666 21.8474C45.6208 22.5016 45.9883 23.3889 45.9883 24.3141V62.6862C45.9883 63.6113 45.6208 64.4986 44.9666 65.1528C44.3124 65.807 43.4251 66.1745 42.5 66.1745C41.5748 66.1745 40.6875 65.807 40.0333 65.1528C39.3791 64.4986 39.0116 63.6113 39.0116 62.6862V24.3141Z",
                fill: "white"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M19.8256 43.5001C19.8256 42.5749 20.1931 41.6876 20.8473 41.0334C21.5015 40.3792 22.3888 40.0117 23.3139 40.0117H61.686C62.6112 40.0117 63.4985 40.3792 64.1527 41.0334C64.8069 41.6876 65.1744 42.5749 65.1744 43.5001C65.1744 44.4253 64.8069 45.3125 64.1527 45.9667C63.4985 46.6209 62.6112 46.9885 61.686 46.9885H23.3139C22.3888 46.9885 21.5015 46.6209 20.8473 45.9667C20.1931 45.3125 19.8256 44.4253 19.8256 43.5001Z",
                fill: "white"
              }
            ),
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
              "radialGradient",
              {
                id: "paint0_radial_2121_7781",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(33.7791 6) rotate(56.5138) scale(67.9674)",
                children: [
                  /* @__PURE__ */ jsx("stop", { stopColor: "#1EE4FF" }),
                  /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#1CADFF" })
                ]
              }
            ) })
          ]
        }
      )
    }
  );
};
const pluginId = "editorjs";
function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e = 1; e < r2; e++)
    t2[e - 1] = arguments[e];
  if ("production" !== process.env.NODE_ENV) {
    var i2 = Y[n2], o2 = i2 ? "function" == typeof i2 ? i2.apply(null, t2) : i2 : "unknown error nr: " + n2;
    throw Error("[Immer] " + o2);
  }
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n2) {
  return !!n2 && !!n2[Q];
}
function t(n2) {
  var r2;
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3)
      return false;
    var r3 = Object.getPrototypeOf(n3);
    if (null === r3)
      return true;
    var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!(null === (r2 = n2.constructor) || void 0 === r2 ? void 0 : r2[L]) || s(n2) || v(n2));
}
function i(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e) {
    t2 && "symbol" == typeof e || r2(e, n2[e], n2);
  }) : n2.forEach(function(t3, e) {
    return r2(e, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, r2) {
  return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return 2 === o(n2) ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e = o(n2);
  2 === e ? n2.set(r2, t2) : 3 === e ? n2.add(t2) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];
  for (var t2 = nn(r2), e = 0; e < t2.length; e++) {
    var i2 = t2[e], o2 = r2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e) {
  return void 0 === e && (e = false), y(n2) || r(n2) || !t(n2) || (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, r2) {
    return d(r2, true);
  }, true)), n2;
}
function h() {
  n(2);
}
function y(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function _() {
  return "production" === process.env.NODE_ENV || U || n(0), U;
}
function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}
function g(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var r2 = n2[Q];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.O = true;
}
function P(r2, e) {
  e._ = e.p.length;
  var i2 = e.p[0], o2 = void 0 !== r2 && r2 !== i2;
  return e.h.g || b("ES5").S(e, r2, o2), o2 ? (i2[Q].P && (O(e), n(4)), t(r2) && (r2 = M(e, r2), e.l || x(e, r2)), e.u && b("Patches").M(i2[Q].t, r2, e.u, e.s)) : r2 = M(e, i2, []), O(e), e.u && e.v(e.u, e.s), r2 !== H ? r2 : void 0;
}
function M(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e = r2[Q];
  if (!e)
    return i(r2, function(i2, o3) {
      return A(n2, e, r2, i2, o3, t2);
    }, true), r2;
  if (e.A !== n2)
    return r2;
  if (!e.P)
    return x(n2, e.t, true), e.t;
  if (!e.I) {
    e.I = true, e.A._--;
    var o2 = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o, u2 = o2, a2 = false;
    3 === e.i && (u2 = new Set(o2), o2.clear(), a2 = true), i(u2, function(r3, i2) {
      return A(n2, e, o2, r3, i2, t2, a2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").N(e, t2, n2.u, n2.s);
  }
  return e.o;
}
function A(e, i2, o2, a2, c2, s2, v2) {
  if ("production" !== process.env.NODE_ENV && c2 === o2 && n(5), r(c2)) {
    var p2 = M(e, c2, s2 && i2 && 3 !== i2.i && !u(i2.R, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, p2), !r(p2))
      return;
    e.m = false;
  } else
    v2 && o2.add(c2);
  if (t(c2) && !y(c2)) {
    if (!e.h.D && e._ < 1)
      return;
    M(e, c2), i2 && i2.A.l || x(e, c2);
  }
}
function x(n2, r2, t2) {
  void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d(r2, t2);
}
function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}
function I(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e = Object.getOwnPropertyDescriptor(t2, r2);
      if (e)
        return e;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function N(n2, r2, t2) {
  var e = s(r2) ? b("MapSet").F(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
    var t3 = Array.isArray(n3), e2 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, R: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e2, o2 = en;
    t3 && (i2 = [e2], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e2.k = f2, e2.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e), e;
}
function R(e) {
  return r(e) || n(22, e), function n2(r2) {
    if (!t(r2))
      return r2;
    var e2, u2 = r2[Q], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e2 = D(r2, c2), u2.I = false;
    } else
      e2 = D(r2, c2);
    return i(e2, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e2, r3, n2(t2));
    }), 3 === c2 ? new Set(e2) : e2;
  }(e);
}
function D(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
var G, U, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X = "undefined" != typeof Map, q = "undefined" != typeof Set, B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state", Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
  return "Cannot apply patch, path doesn't resolve: " + n2;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
  return "Unsupported patch operation: " + n2;
}, 18: function(n2) {
  return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
}, 22: function(n2) {
  return "'current' expects a draft, got: " + n2;
}, 23: function(n2) {
  return "'original' expects a draft, got: " + n2;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Z = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q)
    return n2;
  var e = p(n2);
  if (!u(e, r2))
    return function(n3, r3, t2) {
      var e2, i3 = I(r3, t2);
      return i3 ? "value" in i3 ? i3.value : null === (e2 = i3.get) || void 0 === e2 ? void 0 : e2.call(n3.k) : void 0;
    }(n2, e, r2);
  var i2 = e[r2];
  return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = N(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, r2, t2) {
  var e = I(p(n2), r2);
  if (null == e ? void 0 : e.set)
    return e.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p(n2), r2), o2 = null == i2 ? void 0 : i2[Q];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.R[r2] = false, true;
    if (c(t2, i2) && (void 0 !== t2 || u(n2.t, r2)))
      return true;
    E(n2), k(n2);
  }
  return n2.o[r2] === t2 && (void 0 !== t2 || r2 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r2]) || (n2.o[r2] = t2, n2.R[r2] = true), true;
}, deleteProperty: function(n2, r2) {
  return void 0 !== z(n2.t, r2) || r2 in n2.t ? (n2.R[r2] = false, E(n2), k(n2)) : delete n2.R[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p(n2), e = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e.enumerable, value: t2[r2] } : e;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} }, on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return "production" !== process.env.NODE_ENV && isNaN(parseInt(t2)) && n(13), on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e) {
  return "production" !== process.env.NODE_ENV && "length" !== t2 && isNaN(parseInt(t2)) && n(14), en.set.call(this, r2[0], t2, e, r2[0]);
};
var un = function() {
  function e(r2) {
    var e2 = this;
    this.g = B, this.D = true, this.produce = function(r3, i3, o2) {
      if ("function" == typeof r3 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r3;
        var a2 = e2;
        return function(n2) {
          var r4 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e3 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e3[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e3));
          });
        };
      }
      var f2;
      if ("function" != typeof i3 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), t(r3)) {
        var c2 = w(e2), s2 = N(e2, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw O(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r3 || "object" != typeof r3) {
        if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H && (f2 = void 0), e2.D && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if ("function" == typeof n2)
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e2.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e2.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e.prototype;
  return i2.createDraft = function(e2) {
    t(e2) || n(8), r(e2) && (e2 = R(e2));
    var i3 = w(this), o2 = N(this, e2, void 0);
    return o2[Q].C = true, g(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e2 = r2 && r2[Q];
    "production" !== process.env.NODE_ENV && (e2 && e2.C || n(9), e2.I && n(10));
    var i3 = e2.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.D = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n(20), this.g = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e2;
    for (e2 = t2.length - 1; e2 >= 0; e2--) {
      var i3 = t2[e2];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e2 > -1 && (t2 = t2.slice(e2 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e;
}(), an = new un(), fn = an.produce;
an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
const produce = fn;
const RESOLVE_CONFIG = `${pluginId}/resolve-config`;
const initialState = {
  isLoading: true,
  config: {
    apiKey: null,
    defaultCenter: null,
    favoritesPlaces: null
  }
};
const configReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case RESOLVE_CONFIG: {
      state.isLoading = false;
      state.config = action.data;
      break;
    }
    default:
      return state;
  }
  return state;
});
const reducers = {
  [`${pluginId}_config`]: configReducer
};
const getTrad = (id) => `${pluginId}.${id}`;
const index = {
  register(app) {
    app.addReducers(reducers);
    app.customFields.register({
      name: pluginId,
      pluginId,
      type: "string",
      icon: EditorjsIcon,
      intlLabel: {
        id: getTrad("editorjs.label"),
        defaultMessage: "EditorJs"
      },
      intlDescription: {
        id: getTrad("editorjs.description"),
        defaultMessage: "Block-style editor, JSON output"
      },
      components: {
        Input: async () => import("./Editorjs-c2cd37cb.mjs").then((module) => ({
          default: module.Editorjs
        }))
      },
      options: {
        base: [],
        advanced: [
          {
            sectionTitle: {
              id: "editorjs.tools.settings",
              defaultMessage: "Tools settings, enabling / disabling tools"
            },
            items: [
              {
                name: "options.header",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.header",
                  defaultMessage: "Header"
                }
              },
              {
                name: "options.list",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.list",
                  defaultMessage: "List"
                }
              },
              {
                name: "options.checklist",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.checklist",
                  defaultMessage: "Checklist"
                }
              },
              {
                name: "options.embed",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.embed",
                  defaultMessage: "Embed"
                }
              },
              {
                name: "options.warning",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.warning",
                  defaultMessage: "Warning"
                }
              },
              {
                name: "options.code",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.code",
                  defaultMessage: "Code"
                }
              },
              {
                name: "options.link_tool",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.link_tool",
                  defaultMessage: "Link tool"
                }
              },
              {
                name: "options.raw",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.raw",
                  defaultMessage: "Raw"
                }
              },
              {
                name: "options.quote",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.quote",
                  defaultMessage: "Quote"
                }
              },
              {
                name: "options.marker",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.marker",
                  defaultMessage: "Marker"
                }
              },
              {
                name: "options.delimiter",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.delimiter",
                  defaultMessage: "Delimiter"
                }
              },
              {
                name: "options.inlineCode",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.inlineCode",
                  defaultMessage: "Inline Code"
                }
              },
              {
                name: "options.image",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.image",
                  defaultMessage: "Image"
                }
              },
              {
                name: "options.attaches",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.attaches",
                  defaultMessage: "Attaches"
                }
              },
              {
                name: "options.component",
                type: "checkbox",
                defaultValue: false,
                intlLabel: {
                  id: "editorjs.tools.settings.component",
                  defaultMessage: "Component selector"
                }
              }
            ]
          },
          {
            sectionTitle: {
              id: "global.settings",
              defaultMessage: "Settings"
            },
            items: [
              {
                name: "required",
                type: "checkbox",
                intlLabel: {
                  id: getTrad("editorjs.options.advanced.requiredField"),
                  defaultMessage: "Required field"
                },
                description: {
                  id: getTrad(
                    "editorjs.options.advanced.requiredField.description"
                  ),
                  defaultMessage: "You won't be able to create an entry if this field is empty"
                }
              }
            ]
          }
        ],
        validator: () => ({})
      }
    });
  },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/en.json": () => import("./en-68620c27.mjs"), "./translations/ru.json": () => import("./ru-2c85025d.mjs") }), `./translations/${locale}.json`).then(({ default: data }) => {
          return {
            data: prefixPluginTranslations(data, pluginId),
            locale
          };
        }).catch(() => {
          return {
            data: {},
            locale
          };
        });
      })
    );
    return Promise.resolve(importedTrads);
  }
};
export {
  RESOLVE_CONFIG as R,
  index as i,
  pluginId as p
};
//# sourceMappingURL=index-7b09320f.mjs.map
