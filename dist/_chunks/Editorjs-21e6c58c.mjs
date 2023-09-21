import { p as B, R as ze, j as k } from "./index-60f1300c.mjs";
import { Box as Ye, Field as Be, Stack as je, FieldLabel as qe, FieldHint as He, FieldError as Ue } from "@strapi/design-system";
import { useIntl as We } from "react-intl";
import * as Ge from "react";
import Q, { createContext as Ke, version as Je, useContext as Xe, useRef as ke, useCallback as W, useDebugValue as Qe, useEffect as Me, useState as U } from "react";
import { useNotification as Ze, request as er, auth as X, useLibrary as rr, prefixFileUrlWithBackendUrl as tr, useQueryParams as or } from "@strapi/helper-plugin";
import "react-dom";
import { createReactEditorJS as nr } from "react-editor-js";
import ar from "@editorjs/checklist";
import ir from "@editorjs/code";
import sr from "@editorjs/delimiter";
import cr from "@editorjs/embed";
import ur from "@editorjs/header";
import lr from "@editorjs/inline-code";
import dr from "@editorjs/link";
import fr from "@editorjs/list";
import mr from "@editorjs/marker";
import pr from "@editorjs/quote";
import hr from "@editorjs/raw";
import Sr from "@editorjs/table";
import _r from "@editorjs/warning";
import vr from "editorjs-component-selector";
import yr from "@editorjs/attaches";
import Er from "@editorjs/image";
import ye from "axios";
import br from "styled-components";
var pe = { exports: {} }, le = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function gr() {
  if (Ee)
    return le;
  Ee = 1;
  var e = Q;
  function r(i, m) {
    return i === m && (i !== 0 || 1 / i === 1 / m) || i !== i && m !== m;
  }
  var a = typeof Object.is == "function" ? Object.is : r, n = e.useState, s = e.useEffect, f = e.useLayoutEffect, p = e.useDebugValue;
  function y(i, m) {
    var _ = m(), E = n({ inst: { value: _, getSnapshot: m } }), S = E[0].inst, o = E[1];
    return f(function() {
      S.value = _, S.getSnapshot = m, g(S) && o({ inst: S });
    }, [i, _, m]), s(function() {
      return g(S) && o({ inst: S }), i(function() {
        g(S) && o({ inst: S });
      });
    }, [i]), p(_), _;
  }
  function g(i) {
    var m = i.getSnapshot;
    i = i.value;
    try {
      var _ = m();
      return !a(i, _);
    } catch {
      return !0;
    }
  }
  function v(i, m) {
    return m();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? v : y;
  return le.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, le;
}
var de = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function xr() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Q, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(h) {
      {
        for (var c = arguments.length, t = new Array(c > 1 ? c - 1 : 0), b = 1; b < c; b++)
          t[b - 1] = arguments[b];
        n("error", h, t);
      }
    }
    function n(h, c, t) {
      {
        var b = r.ReactDebugCurrentFrame, $ = b.getStackAddendum();
        $ !== "" && (c += "%s", t = t.concat([$]));
        var O = t.map(function(A) {
          return String(A);
        });
        O.unshift("Warning: " + c), Function.prototype.apply.call(console[h], console, O);
      }
    }
    function s(h, c) {
      return h === c && (h !== 0 || 1 / h === 1 / c) || h !== h && c !== c;
    }
    var f = typeof Object.is == "function" ? Object.is : s, p = e.useState, y = e.useEffect, g = e.useLayoutEffect, v = e.useDebugValue, d = !1, i = !1;
    function m(h, c, t) {
      d || e.startTransition !== void 0 && (d = !0, a("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var b = c();
      if (!i) {
        var $ = c();
        f(b, $) || (a("The result of getSnapshot should be cached to avoid an infinite loop"), i = !0);
      }
      var O = p({
        inst: {
          value: b,
          getSnapshot: c
        }
      }), A = O[0].inst, M = O[1];
      return g(function() {
        A.value = b, A.getSnapshot = c, _(A) && M({
          inst: A
        });
      }, [h, b, c]), y(function() {
        _(A) && M({
          inst: A
        });
        var I = function() {
          _(A) && M({
            inst: A
          });
        };
        return h(I);
      }, [h]), v(b), b;
    }
    function _(h) {
      var c = h.getSnapshot, t = h.value;
      try {
        var b = c();
        return !f(t, b);
      } catch {
        return !0;
      }
    }
    function E(h, c, t) {
      return c();
    }
    var S = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", o = !S, R = o ? E : m, L = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : R;
    de.useSyncExternalStore = L, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), de;
}
process.env.NODE_ENV === "production" ? pe.exports = gr() : pe.exports = xr();
var Pe = pe.exports, he = { exports: {} }, fe = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function Cr() {
  if (ge)
    return fe;
  ge = 1;
  var e = Q, r = Pe;
  function a(v, d) {
    return v === d && (v !== 0 || 1 / v === 1 / d) || v !== v && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : a, s = r.useSyncExternalStore, f = e.useRef, p = e.useEffect, y = e.useMemo, g = e.useDebugValue;
  return fe.useSyncExternalStoreWithSelector = function(v, d, i, m, _) {
    var E = f(null);
    if (E.current === null) {
      var S = { hasValue: !1, value: null };
      E.current = S;
    } else
      S = E.current;
    E = y(function() {
      function R(b) {
        if (!L) {
          if (L = !0, h = b, b = m(b), _ !== void 0 && S.hasValue) {
            var $ = S.value;
            if (_($, b))
              return c = $;
          }
          return c = b;
        }
        if ($ = c, n(h, b))
          return $;
        var O = m(b);
        return _ !== void 0 && _($, O) ? $ : (h = b, c = O);
      }
      var L = !1, h, c, t = i === void 0 ? null : i;
      return [function() {
        return R(d());
      }, t === null ? void 0 : function() {
        return R(t());
      }];
    }, [d, i, m, _]);
    var o = s(v, E[0], E[1]);
    return p(function() {
      S.hasValue = !0, S.value = o;
    }, [o]), g(o), o;
  }, fe;
}
var me = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function Tr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Q, r = Pe;
    function a(d, i) {
      return d === i && (d !== 0 || 1 / d === 1 / i) || d !== d && i !== i;
    }
    var n = typeof Object.is == "function" ? Object.is : a, s = r.useSyncExternalStore, f = e.useRef, p = e.useEffect, y = e.useMemo, g = e.useDebugValue;
    function v(d, i, m, _, E) {
      var S = f(null), o;
      S.current === null ? (o = {
        hasValue: !1,
        value: null
      }, S.current = o) : o = S.current;
      var R = y(function() {
        var t = !1, b, $, O = function(P) {
          if (!t) {
            t = !0, b = P;
            var D = _(P);
            if (E !== void 0 && o.hasValue) {
              var F = o.value;
              if (E(F, D))
                return $ = F, F;
            }
            return $ = D, D;
          }
          var j = b, N = $;
          if (n(j, P))
            return N;
          var V = _(P);
          return E !== void 0 && E(N, V) ? N : (b = P, $ = V, V);
        }, A = m === void 0 ? null : m, M = function() {
          return O(i());
        }, I = A === null ? void 0 : function() {
          return O(A());
        };
        return [M, I];
      }, [i, m, _, E]), L = R[0], h = R[1], c = s(d, L, h);
      return p(function() {
        o.hasValue = !0, o.value = c;
      }, [c]), g(c), c;
    }
    me.useSyncExternalStoreWithSelector = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), me;
}
process.env.NODE_ENV === "production" ? he.exports = Cr() : he.exports = Tr();
var wr = he.exports;
const Ce = Symbol.for(`react-redux-context-${Je}`), Te = globalThis;
function Rr() {
  let e = Te[Ce];
  return e || (e = Ke(null), process.env.NODE_ENV !== "production" && (e.displayName = "ReactRedux"), Te[Ce] = e), e;
}
const z = /* @__PURE__ */ new Proxy({}, /* @__PURE__ */ new Proxy({}, {
  get(e, r) {
    const a = Rr();
    return (n, ...s) => Reflect[r](a, ...s);
  }
}));
function _e(e = z) {
  return function() {
    const a = Xe(e);
    if (process.env.NODE_ENV !== "production" && !a)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return a;
  };
}
const Ie = /* @__PURE__ */ _e(), $r = () => {
  throw new Error("uSES not initialized!");
};
let De = $r;
const Or = (e) => {
  De = e;
}, Ar = (e, r) => e === r;
function Lr(e = z) {
  const r = e === z ? Ie : _e(e);
  return function(n, s = {}) {
    const {
      equalityFn: f = Ar,
      stabilityCheck: p = void 0,
      noopCheck: y = void 0
    } = typeof s == "function" ? {
      equalityFn: s
    } : s;
    if (process.env.NODE_ENV !== "production") {
      if (!n)
        throw new Error("You must pass a selector to useSelector");
      if (typeof n != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof f != "function")
        throw new Error("You must pass a function as an equality function to useSelector");
    }
    const {
      store: g,
      subscription: v,
      getServerState: d,
      stabilityCheck: i,
      noopCheck: m
    } = r(), _ = ke(!0), E = W({
      [n.name](o) {
        const R = n(o);
        if (process.env.NODE_ENV !== "production") {
          const L = typeof p > "u" ? i : p;
          if (L === "always" || L === "once" && _.current) {
            const c = n(o);
            f(R, c) || console.warn("Selector " + (n.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`, {
              state: o,
              selected: R,
              selected2: c
            });
          }
          const h = typeof y > "u" ? m : y;
          (h === "always" || h === "once" && _.current) && R === o && console.warn("Selector " + (n.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`), _.current && (_.current = !1);
        }
        return R;
      }
    }[n.name], [n, i, p]), S = De(v.addNestedSub, g.getState, d || g.getState, E, f);
    return Qe(S), S;
  };
}
const kr = /* @__PURE__ */ Lr();
var Se = { exports: {} }, x = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function Mr() {
  if (we)
    return x;
  we = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, f = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, y = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, v = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, i = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, o = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
  function h(t) {
    if (typeof t == "object" && t !== null) {
      var b = t.$$typeof;
      switch (b) {
        case r:
          switch (t = t.type, t) {
            case g:
            case v:
            case n:
            case f:
            case s:
            case i:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case y:
                case d:
                case E:
                case _:
                case p:
                  return t;
                default:
                  return b;
              }
          }
        case a:
          return b;
      }
    }
  }
  function c(t) {
    return h(t) === v;
  }
  return x.AsyncMode = g, x.ConcurrentMode = v, x.ContextConsumer = y, x.ContextProvider = p, x.Element = r, x.ForwardRef = d, x.Fragment = n, x.Lazy = E, x.Memo = _, x.Portal = a, x.Profiler = f, x.StrictMode = s, x.Suspense = i, x.isAsyncMode = function(t) {
    return c(t) || h(t) === g;
  }, x.isConcurrentMode = c, x.isContextConsumer = function(t) {
    return h(t) === y;
  }, x.isContextProvider = function(t) {
    return h(t) === p;
  }, x.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === r;
  }, x.isForwardRef = function(t) {
    return h(t) === d;
  }, x.isFragment = function(t) {
    return h(t) === n;
  }, x.isLazy = function(t) {
    return h(t) === E;
  }, x.isMemo = function(t) {
    return h(t) === _;
  }, x.isPortal = function(t) {
    return h(t) === a;
  }, x.isProfiler = function(t) {
    return h(t) === f;
  }, x.isStrictMode = function(t) {
    return h(t) === s;
  }, x.isSuspense = function(t) {
    return h(t) === i;
  }, x.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === n || t === v || t === f || t === s || t === i || t === m || typeof t == "object" && t !== null && (t.$$typeof === E || t.$$typeof === _ || t.$$typeof === p || t.$$typeof === y || t.$$typeof === d || t.$$typeof === o || t.$$typeof === R || t.$$typeof === L || t.$$typeof === S);
  }, x.typeOf = h, x;
}
var C = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function Pr() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, f = e ? Symbol.for("react.profiler") : 60114, p = e ? Symbol.for("react.provider") : 60109, y = e ? Symbol.for("react.context") : 60110, g = e ? Symbol.for("react.async_mode") : 60111, v = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, i = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, o = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
    function h(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === n || u === v || u === f || u === s || u === i || u === m || typeof u == "object" && u !== null && (u.$$typeof === E || u.$$typeof === _ || u.$$typeof === p || u.$$typeof === y || u.$$typeof === d || u.$$typeof === o || u.$$typeof === R || u.$$typeof === L || u.$$typeof === S);
    }
    function c(u) {
      if (typeof u == "object" && u !== null) {
        var H = u.$$typeof;
        switch (H) {
          case r:
            var l = u.type;
            switch (l) {
              case g:
              case v:
              case n:
              case f:
              case s:
              case i:
                return l;
              default:
                var Y = l && l.$$typeof;
                switch (Y) {
                  case y:
                  case d:
                  case E:
                  case _:
                  case p:
                    return Y;
                  default:
                    return H;
                }
            }
          case a:
            return H;
        }
      }
    }
    var t = g, b = v, $ = y, O = p, A = r, M = d, I = n, P = E, D = _, F = a, j = f, N = s, V = i, q = !1;
    function G(u) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), K(u) || c(u) === g;
    }
    function K(u) {
      return c(u) === v;
    }
    function Z(u) {
      return c(u) === y;
    }
    function ee(u) {
      return c(u) === p;
    }
    function re(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function te(u) {
      return c(u) === d;
    }
    function oe(u) {
      return c(u) === n;
    }
    function ne(u) {
      return c(u) === E;
    }
    function ae(u) {
      return c(u) === _;
    }
    function ie(u) {
      return c(u) === a;
    }
    function se(u) {
      return c(u) === f;
    }
    function ce(u) {
      return c(u) === s;
    }
    function ue(u) {
      return c(u) === i;
    }
    C.AsyncMode = t, C.ConcurrentMode = b, C.ContextConsumer = $, C.ContextProvider = O, C.Element = A, C.ForwardRef = M, C.Fragment = I, C.Lazy = P, C.Memo = D, C.Portal = F, C.Profiler = j, C.StrictMode = N, C.Suspense = V, C.isAsyncMode = G, C.isConcurrentMode = K, C.isContextConsumer = Z, C.isContextProvider = ee, C.isElement = re, C.isForwardRef = te, C.isFragment = oe, C.isLazy = ne, C.isMemo = ae, C.isPortal = ie, C.isProfiler = se, C.isStrictMode = ce, C.isSuspense = ue, C.isValidElementType = h, C.typeOf = c;
  }()), C;
}
process.env.NODE_ENV === "production" ? Se.exports = Mr() : Se.exports = Pr();
var Ir = Se.exports, Fe = Ir, Dr = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Fr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ne = {};
Ne[Fe.ForwardRef] = Dr;
Ne[Fe.Memo] = Fr;
var T = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Nr() {
  if ($e)
    return T;
  $e = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), p = Symbol.for("react.context"), y = Symbol.for("react.server_context"), g = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), E;
  E = Symbol.for("react.module.reference");
  function S(o) {
    if (typeof o == "object" && o !== null) {
      var R = o.$$typeof;
      switch (R) {
        case e:
          switch (o = o.type, o) {
            case a:
            case s:
            case n:
            case v:
            case d:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case y:
                case p:
                case g:
                case m:
                case i:
                case f:
                  return o;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  return T.ContextConsumer = p, T.ContextProvider = f, T.Element = e, T.ForwardRef = g, T.Fragment = a, T.Lazy = m, T.Memo = i, T.Portal = r, T.Profiler = s, T.StrictMode = n, T.Suspense = v, T.SuspenseList = d, T.isAsyncMode = function() {
    return !1;
  }, T.isConcurrentMode = function() {
    return !1;
  }, T.isContextConsumer = function(o) {
    return S(o) === p;
  }, T.isContextProvider = function(o) {
    return S(o) === f;
  }, T.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === e;
  }, T.isForwardRef = function(o) {
    return S(o) === g;
  }, T.isFragment = function(o) {
    return S(o) === a;
  }, T.isLazy = function(o) {
    return S(o) === m;
  }, T.isMemo = function(o) {
    return S(o) === i;
  }, T.isPortal = function(o) {
    return S(o) === r;
  }, T.isProfiler = function(o) {
    return S(o) === s;
  }, T.isStrictMode = function(o) {
    return S(o) === n;
  }, T.isSuspense = function(o) {
    return S(o) === v;
  }, T.isSuspenseList = function(o) {
    return S(o) === d;
  }, T.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === a || o === s || o === n || o === v || o === d || o === _ || typeof o == "object" && o !== null && (o.$$typeof === m || o.$$typeof === i || o.$$typeof === f || o.$$typeof === p || o.$$typeof === g || o.$$typeof === E || o.getModuleId !== void 0);
  }, T.typeOf = S, T;
}
var w = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function Vr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), p = Symbol.for("react.context"), y = Symbol.for("react.server_context"), g = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), E = !1, S = !1, o = !1, R = !1, L = !1, h;
    h = Symbol.for("react.module.reference");
    function c(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === a || l === s || L || l === n || l === v || l === d || R || l === _ || E || S || o || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === i || l.$$typeof === f || l.$$typeof === p || l.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === h || l.getModuleId !== void 0));
    }
    function t(l) {
      if (typeof l == "object" && l !== null) {
        var Y = l.$$typeof;
        switch (Y) {
          case e:
            var J = l.type;
            switch (J) {
              case a:
              case s:
              case n:
              case v:
              case d:
                return J;
              default:
                var ve = J && J.$$typeof;
                switch (ve) {
                  case y:
                  case p:
                  case g:
                  case m:
                  case i:
                  case f:
                    return ve;
                  default:
                    return Y;
                }
            }
          case r:
            return Y;
        }
      }
    }
    var b = p, $ = f, O = e, A = g, M = a, I = m, P = i, D = r, F = s, j = n, N = v, V = d, q = !1, G = !1;
    function K(l) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(l) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ee(l) {
      return t(l) === p;
    }
    function re(l) {
      return t(l) === f;
    }
    function te(l) {
      return typeof l == "object" && l !== null && l.$$typeof === e;
    }
    function oe(l) {
      return t(l) === g;
    }
    function ne(l) {
      return t(l) === a;
    }
    function ae(l) {
      return t(l) === m;
    }
    function ie(l) {
      return t(l) === i;
    }
    function se(l) {
      return t(l) === r;
    }
    function ce(l) {
      return t(l) === s;
    }
    function ue(l) {
      return t(l) === n;
    }
    function u(l) {
      return t(l) === v;
    }
    function H(l) {
      return t(l) === d;
    }
    w.ContextConsumer = b, w.ContextProvider = $, w.Element = O, w.ForwardRef = A, w.Fragment = M, w.Lazy = I, w.Memo = P, w.Portal = D, w.Profiler = F, w.StrictMode = j, w.Suspense = N, w.SuspenseList = V, w.isAsyncMode = K, w.isConcurrentMode = Z, w.isContextConsumer = ee, w.isContextProvider = re, w.isElement = te, w.isForwardRef = oe, w.isFragment = ne, w.isLazy = ae, w.isMemo = ie, w.isPortal = se, w.isProfiler = ce, w.isStrictMode = ue, w.isSuspense = u, w.isSuspenseList = H, w.isValidElementType = c, w.typeOf = t;
  }()), w;
}
process.env.NODE_ENV === "production" ? Nr() : Vr();
function Ve(e = z) {
  const r = (
    // @ts-ignore
    e === z ? Ie : (
      // @ts-ignore
      _e(e)
    )
  );
  return function() {
    const {
      store: n
    } = r();
    return n;
  };
}
const zr = /* @__PURE__ */ Ve();
function Yr(e = z) {
  const r = (
    // @ts-ignore
    e === z ? zr : Ve(e)
  );
  return function() {
    return r().dispatch;
  };
}
const Br = /* @__PURE__ */ Yr();
Or(wr.useSyncExternalStoreWithSelector);
const jr = () => {
  const e = Br(), r = Ze(), { config: a, isLoading: n } = kr(
    (s) => s[`${B}_config`]
  );
  return Me(() => {
    if (!n && a)
      return;
    const s = new AbortController();
    return (async () => {
      try {
        const p = `/${B}/config`;
        return await er(p, {
          method: "GET",
          signal: s.signal
        }) ?? {};
      } catch (p) {
        if (!s.signal.aborted)
          return r({
            type: "warning",
            message: { id: "notification.error" }
          }), p;
      }
    })().then((p) => e({ type: ze, data: p })), () => s.abort();
  }, [e, r]), { config: a, isLoading: n };
}, qr = (e, r) => ({
  ...e.header ? {
    header: {
      class: ur,
      ...r.header ? r.header : {}
    }
  } : {},
  ...e.list ? {
    list: {
      class: fr,
      ...r.list ? r.list : {}
    }
  } : {},
  ...e.checklist ? {
    checklist: {
      class: ar,
      ...r.checklist ? r.checklist : {}
    }
  } : {},
  ...e.embed ? {
    embed: {
      class: cr,
      ...r.embed ? r.embed : {}
    }
  } : {},
  ...e.table ? {
    table: {
      class: Sr,
      ...r.table ? r.table : {}
    }
  } : {},
  ...e.warning ? {
    warning: {
      class: _r,
      ...r.warning ? r.warning : {}
    }
  } : {},
  ...e.code ? {
    code: {
      class: ir,
      ...r.code ? r.code : {}
    }
  } : {},
  ...e.link_tool ? {
    link_tool: {
      class: dr,
      ...r.link_tool ? r.link_tool : {}
    }
  } : {},
  ...e.raw ? {
    raw: {
      class: hr,
      ...r.raw ? r.raw : {}
    }
  } : {},
  ...e.quote ? {
    quote: {
      class: pr,
      ...r.quote ? r.quote : {}
    }
  } : {},
  ...e.marker ? {
    marker: {
      class: mr,
      ...r.marker ? r.marker : {}
    }
  } : {},
  ...e.delimiter ? {
    delimiter: {
      class: sr,
      ...r.delimiter ? r.delimiter : {}
    }
  } : {},
  ...e.inlineCode ? {
    inlineCode: {
      class: lr,
      ...r.inlineCode ? r.inlineCode : {}
    }
  } : {},
  ...e.component ? {
    component: {
      class: vr,
      ...r.component ? r.component : {}
    }
  } : {}
}), Hr = {
  image: {
    class: Er,
    config: {
      field: "files.image",
      additionalRequestData: {
        data: JSON.stringify({})
      },
      additionalRequestHeaders: {
        Authorization: `Bearer ${X.getToken()}`
      },
      endpoints: {
        byUrl: `/api/${B}/image/byUrl`
      },
      uploader: {
        async uploadByFile(e) {
          const r = new FormData();
          r.append("data", JSON.stringify({})), r.append("files.image", e);
          const { data: a } = await ye.post(
            `/api/${B}/image/byFile`,
            r,
            {
              headers: {
                Authorization: `Bearer ${X.getToken()}`
              }
            }
          );
          return a;
        }
      }
    }
  },
  attaches: {
    class: yr,
    config: {
      field: "files.image",
      additionalRequestData: {
        data: JSON.stringify({})
      },
      additionalRequestHeaders: {
        Authorization: `Bearer ${X.getToken()}`
      },
      endpoints: {
        byUrl: `/api/${B}/image/byUrl`
      },
      uploader: {
        async uploadByFile(e) {
          const r = new FormData();
          r.append("data", JSON.stringify({})), r.append("files.image", e);
          const { data: a } = await ye.post(
            `/api/${B}/image/byFile`,
            r,
            {
              headers: {
                Authorization: `Bearer ${X.getToken()}`
              }
            }
          );
          return a;
        }
      }
    }
  }
};
class Ur {
  api;
  config;
  static get toolbox() {
    return {
      title: "Image",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"></rect><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"></path></svg>'
    };
  }
  constructor({ api: r, config: a }) {
    this.api = r, this.config = a || {};
  }
  render() {
    const r = this.api.blocks.getCurrentBlockIndex();
    return this.config.mediaLibToggleFunc && this.config.mediaLibToggleFunc(r), document.createElement("p");
  }
  save() {
    return {
      name: "mediaLibraryStrapi"
    };
  }
}
class Wr {
  api;
  config;
  static get toolbox() {
    return {
      title: "Attachment",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.3236 8.43554L9.49533 12.1908C9.13119 12.5505 8.93118 13.043 8.9393 13.5598C8.94741 14.0767 9.163 14.5757 9.53862 14.947C9.91424 15.3182 10.4191 15.5314 10.9422 15.5397C11.4653 15.5479 11.9637 15.3504 12.3279 14.9908L16.1562 11.2355C16.8845 10.5161 17.2845 9.53123 17.2682 8.4975C17.252 7.46376 16.8208 6.46583 16.0696 5.72324C15.3184 4.98066 14.3086 4.55425 13.2624 4.53782C12.2162 4.52138 11.2193 4.91627 10.4911 5.63562L6.66277 9.39093C5.57035 10.4699 4.97032 11.9473 4.99467 13.4979C5.01903 15.0485 5.66578 16.5454 6.79264 17.6592C7.9195 18.7731 9.43417 19.4127 11.0034 19.4374C12.5727 19.462 14.068 18.8697 15.1604 17.7907L18.9887 14.0354"></path></svg>'
    };
  }
  constructor({ api: r, config: a }) {
    this.api = r, this.config = a || {};
  }
  render() {
    const r = this.api.blocks.getCurrentBlockIndex();
    return this.config.mediaLibAttachesToggleFunc && this.config.mediaLibAttachesToggleFunc(r), document.createElement("p");
  }
  save() {
    return {
      name: "mediaLibraryAttachesStrapi"
    };
  }
}
const Ae = ({
  isOpen: e,
  onChange: r,
  onToggle: a,
  allowedTypes: n
}) => {
  const { components: s } = rr(), [f, p] = Ge.useState(null), y = s["media-library"], g = (d) => {
    d && p(d);
  }, v = (d) => {
    const i = d.map((m) => ({
      alt: m.alternativeText || m.name,
      url: tr(m.url),
      width: m.width,
      height: m.height,
      size: m.size,
      mime: m.mime,
      formats: m.formats
    }));
    r(i);
  };
  return e ? /* @__PURE__ */ k.jsx(
    y,
    {
      allowedTypes: n,
      onClose: a,
      onInputMediaChange: g,
      onSelectAssets: v
    }
  ) : null;
}, Le = ({ openStateSetter: e, indexStateSetter: r }) => (a) => {
  (a || a === 0) && r(a), e((n) => !n);
}, Gr = ({ indexStateSetter: e, editor: r, data: a, index: n }) => {
  let s = 0;
  a.forEach((f) => {
    if (!f.mime.includes("image"))
      return;
    const p = "image", y = {
      file: {
        url: f.url.replace(window.location.origin, ""),
        mime: f.mime,
        height: f.height,
        width: f.width,
        size: f.size,
        alt: f.alt,
        formats: f.formats
      },
      caption: "",
      withBorder: !1,
      withBackground: !1,
      stretched: !1
    };
    r.blocks.insert(
      p,
      y,
      {},
      n + s,
      !0
    ), s++;
  }), r.blocks.delete(n + s), e(-1);
}, Kr = ({
  indexStateSetter: e,
  editor: r,
  data: a,
  index: n
}) => {
  let s = 0;
  a.forEach((f) => {
    const p = "attaches", y = {
      file: {
        url: f.url.replace(window.location.origin, ""),
        size: f.size * 1024,
        name: f.name,
        extension: f.ext
      },
      title: f.alt
    };
    r.blocks.insert(
      p,
      y,
      {},
      n + s,
      !0
    ), s++;
  }), r.blocks.delete(n + s), e(-1);
}, Jr = ({
  onChange: e,
  name: r,
  value: a,
  attribute: n,
  config: s,
  placeholder: f
}) => {
  const p = nr(), [y, g] = U(), [v, d] = U(-1), [i, m] = U(!1), [_, E] = U(-1), [S, o] = U(!1), R = W(
    Le({
      openStateSetter: m,
      indexStateSetter: d
    }),
    []
  ), L = W(
    Le({
      openStateSetter: o,
      indexStateSetter: E
    }),
    []
  ), h = W(
    (O) => {
      Gr({
        indexStateSetter: d,
        data: O,
        index: v,
        editor: y
      }), R(v);
    },
    [v, y]
  ), c = W(
    (O) => {
      Kr({
        indexStateSetter: E,
        data: O,
        index: _,
        editor: y
      }), L(_);
    },
    [_, y]
  ), t = {
    ...n?.options?.image ? {
      mediaLib: {
        class: Ur,
        config: {
          mediaLibToggleFunc: R
        }
      }
    } : {},
    ...n?.options?.attaches ? {
      mediaLibAttaches: {
        class: Wr,
        config: {
          mediaLibAttachesToggleFunc: L
        }
      }
    } : {}
  }, b = or(), $ = ke(0);
  return Me(() => {
    $.current = $?.current + 1;
  }, [b]), /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsx(
      p,
      {
        holder: `editorjs${r}`,
        defaultValue: a ? JSON.parse(a) : void 0,
        onReady: () => {
          document?.querySelector('[data-item-name="image"]')?.remove(), document?.querySelector('[data-item-name="attaches"]')?.remove();
        },
        tools: {
          ...Hr,
          ...qr(n.options, s),
          ...t
        },
        placeholder: f?.defaultMessage,
        onChange: (O) => {
          g(O), O.saver.save().then((A) => {
            A?.blocks?.length > 0 ? e({
              target: { name: r, value: JSON.stringify(A), type: "string" }
            }) : e({
              target: { name: r, value: null, type: "string" }
            });
          });
        },
        minHeight: s.minHeight ? s.minHeight : 80
      },
      `editorjs${$.current}`
    ),
    /* @__PURE__ */ k.jsx(
      Ae,
      {
        isOpen: i,
        onChange: h,
        onToggle: R,
        allowedTypes: ["images"]
      }
    ),
    /* @__PURE__ */ k.jsx(
      Ae,
      {
        isOpen: S,
        onChange: c,
        onToggle: L,
        allowedTypes: ["files"]
      }
    )
  ] });
}, Xr = br(Ye)`
  .codex-editor__redactor {
    color: ${({ theme: e }) => e.colors.neutral800};
  }
  .ce-toolbox__button {
    color: ${({ theme: e }) => e.colors.neutral800};
    &:hover {
      color: ${({ theme: e }) => e.colors.neutral150};
      background-color: ${({ theme: e }) => e.colors.neutral900};
    }
  }
  .ce-toolbar__plus,
  .ce-toolbar__settings-btn {
    color: ${({ theme: e }) => e.colors.neutral800};
    background-color: ${({ theme: e }) => e.colors.neutral100};
    &:hover {
      color: ${({ theme: e }) => e.colors.neutral150};
      background-color: ${({ theme: e }) => e.colors.neutral900};
    }
  }
  .codex-editor {
    border: 1px solid ${({ theme: e }) => e.colors.neutral200};
    border-radius: ${({ theme: e }) => e.borderRadius};
    background: ${({ theme: e }) => e.colors.neutral0};
  }
  &.error .codex-editor {
    border-color: ${({ theme: e }) => e.colors.danger700};
  }
  .ce-block--selected {
    .ce-block__content {
      background: ${({ theme: e }) => e.colors.neutral100};
    }
  }

  .cdx-input {
    border: 1px solid ${({ theme: e }) => e.colors.neutral200};
    border-radius: ${({ theme: e }) => e.borderRadius};
    color: ${({ theme: e }) => e.colors.neutral800};
    line-height: 1.6;
    ::placeholder {
      color: ${({ theme: e }) => e.colors.neutral500};
      opacity: 1;
    }
    &:focus-within,
    &:focus {
      border: 1px solid ${({ theme: e }) => e.colors.primary600};
      box-shadow: ${({ theme: e }) => e.colors.primary600} 0px 0px 0px 2px;
    }
  }

  .codex-editor {
    padding: 16px;
    font-size: 1rem;
    a {
      color: ${({ theme: e }) => e.colors.secondary500};
      &:hover {
        color: ${({ theme: e }) => e.colors.secondary700};
      }
    }
  }
  *:focus-visible {
    outline: none;
  }
  mark {
    background-color: #e9ddf6;
    padding: 0 0.2em;
    border-radius: 2px;
    font-weight: 600;
  }
  code {
    background-color: #d9f6f0;
    padding: 0 0.2em;
    border-radius: 2px;
    font-weight: 600;
  }
  .ce-header {
    color: ${({ theme: e }) => e.colors.neutral800};
  }
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }
  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
  h4 {
    font-size: 1em;
    font-weight: bold;
  }
  h5 {
    font-size: 0.83em;
    font-weight: bold;
  }
  h6 {
    font-size: 0.67em;
    font-weight: bold;
  }
  label {
    display: block;
  }
  &.bordered {
    .editorWrapper {
      border-color: red;
    }
  }
  > div + p {
    width: 100%;
    padding-top: 12px;
    font-size: 1.2rem;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: -9px;
  }
  div,
  pre,
  code {
    ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
      cursor: default;
    }
  }
  .cdx-input.image-tool__caption {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .Box {
    display: flex;
  }
  .ToggleShow {
    margin-left: auto;
    font-size: 14px;
  }

  // * attachement styles
  .cdx-attaches {
    &.cdx-attaches--with-file {
      background: ${({ theme: e }) => e.colors.neutral0};
      border: 1px solid ${({ theme: e }) => e.colors.neutral200};
      .cdx-attaches__title {
        color: ${({ theme: e }) => e.colors.neutral800};
      }
      .cdx-attaches__size {
        color: ${({ theme: e }) => e.colors.neutral500};
      }
      .cdx-attaches__download-button {
        background: ${({ theme: e }) => e.colors.neutral100};
        color: ${({ theme: e }) => e.colors.neutral800};
      }
    }
  }

  // * link-tool styles
  .link-tool {
    .link-tool__content {
      border: 1px solid ${({ theme: e }) => e.colors.neutral200};
      border-radius: ${({ theme: e }) => e.borderRadius};
      box-shadow: none;
      background: transparent;
      color: ${({ theme: e }) => e.colors.neutral800}!important;
      transition: none;
      transition: all 0.05s ease-in-out;
      .link-tool__title {
        transition: all 0.05s ease-in-out;
      }
      &:hover {
        outline: ${({ theme: e }) => e.colors.primary500} solid 2px;
        border-color: ${({ theme: e }) => e.colors.primary500};
        .link-tool__title {
          color: ${({ theme: e }) => e.colors.primary500}!important;
        }
      }
      .link-tool__anchor {
        color: ${({ theme: e }) => e.colors.neutral700};
      }
    }
    .link-tool__progress {
      border: 1px solid ${({ theme: e }) => e.colors.neutral200};
      border-radius: ${({ theme: e }) => e.borderRadius};
      box-shadow: none;
      background: transparent;
    }
  }

  .cdx-quote {
    .cdx-quote__text {
      line-height: 1.6;
    }
    .cdx-quote__caption {
    }
  }

  .cdx-checklist {
    .cdx-checklist__item {
      .cdx-checklist__item-text {
        line-height: 1.5;
      }
    }
    .cdx-checklist__item--checked {
      .cdx-checklist__item-checkbox-check {
        background: ${({ theme: e }) => e.colors.primary500};
        border-color: ${({ theme: e }) => e.colors.primary500};
      }
    }
  }

  .cdx-warning {
    &:before {
      filter: invert(1);
      background-color: rgb(24, 24, 38);
      border-radius: ${({ theme: e }) => e.borderRadius};
    }
  }
`, xt = ({
  name: e,
  description: r,
  intlLabel: a,
  required: n,
  onChange: s,
  value: f,
  disabled: p,
  attribute: y,
  labelAction: g,
  placeholder: v,
  error: d
}) => {
  const { formatMessage: i } = We(), { config: m } = jr();
  return /* @__PURE__ */ k.jsx(k.Fragment, { children: /* @__PURE__ */ k.jsx(Xr, { className: d !== null ? "error" : null, children: m ? /* @__PURE__ */ k.jsx(
    Be,
    {
      id: e,
      name: e,
      hint: r && i(r),
      required: n,
      error: d,
      children: /* @__PURE__ */ k.jsxs(je, { spacing: 1, children: [
        /* @__PURE__ */ k.jsx(
          qe,
          {
            action: g,
            required: n,
            style: { display: "inline-flex" },
            children: i(a)
          }
        ),
        /* @__PURE__ */ k.jsx(
          Jr,
          {
            intlLabel: a,
            onChange: s,
            attribute: y,
            name: e,
            description: r,
            disabled: p,
            error: d,
            labelAction: g,
            required: n,
            value: f,
            placeholder: v,
            config: m
          }
        ),
        /* @__PURE__ */ k.jsx(He, {}),
        /* @__PURE__ */ k.jsx(Ue, {})
      ] })
    }
  ) : null }) });
};
export {
  xt as Editorjs
};
//# sourceMappingURL=Editorjs-21e6c58c.mjs.map
