import { prefixPluginTranslations as Jt } from "@strapi/helper-plugin";
import gt from "react";
import { Flex as Ht } from "@strapi/design-system";
import Xt from "styled-components";
const Zt = (e, r) => {
  const n = e[r];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((o, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + r)));
  });
};
var je = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var it;
function Qt() {
  if (it)
    return J;
  it = 1;
  var e = gt, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(d, v, h) {
    var g, P = {}, _ = null, S = null;
    h !== void 0 && (_ = "" + h), v.key !== void 0 && (_ = "" + v.key), v.ref !== void 0 && (S = v.ref);
    for (g in v)
      o.call(v, g) && !s.hasOwnProperty(g) && (P[g] = v[g]);
    if (d && d.defaultProps)
      for (g in v = d.defaultProps, v)
        P[g] === void 0 && (P[g] = v[g]);
    return { $$typeof: r, type: d, key: _, ref: S, props: P, _owner: i.current };
  }
  return J.Fragment = n, J.jsx = f, J.jsxs = f, J;
}
var H = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function er() {
  return ut || (ut = 1, process.env.NODE_ENV !== "production" && function() {
    var e = gt, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), B = Symbol.iterator, D = "@@iterator";
    function le(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = B && t[B] || t[D];
      return typeof a == "function" ? a : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(t) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
          u[l - 1] = arguments[l];
        V("error", t, u);
      }
    }
    function V(t, a, u) {
      {
        var l = T.ReactDebugCurrentFrame, m = l.getStackAddendum();
        m !== "" && (a += "%s", u = u.concat([m]));
        var b = u.map(function(p) {
          return String(p);
        });
        b.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, b);
      }
    }
    var ce = !1, Q = !1, yt = !1, Et = !1, _t = !1, Me;
    Me = Symbol.for("react.module.reference");
    function Rt(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === s || _t || t === i || t === h || t === g || Et || t === S || ce || Q || yt || typeof t == "object" && t !== null && (t.$$typeof === _ || t.$$typeof === P || t.$$typeof === f || t.$$typeof === d || t.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Me || t.getModuleId !== void 0));
    }
    function jt(t, a, u) {
      var l = t.displayName;
      if (l)
        return l;
      var m = a.displayName || a.name || "";
      return m !== "" ? u + "(" + m + ")" : u;
    }
    function Ne(t) {
      return t.displayName || "Context";
    }
    function A(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case h:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case d:
            var a = t;
            return Ne(a) + ".Consumer";
          case f:
            var u = t;
            return Ne(u._context) + ".Provider";
          case v:
            return jt(t, t.render, "ForwardRef");
          case P:
            var l = t.displayName || null;
            return l !== null ? l : A(t.type) || "Memo";
          case _: {
            var m = t, b = m._payload, p = m._init;
            try {
              return A(p(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, K = 0, Le, Ve, $e, We, Ye, Ue, qe;
    function ze() {
    }
    ze.__reactDisabledLog = !0;
    function Pt() {
      {
        if (K === 0) {
          Le = console.log, Ve = console.info, $e = console.warn, We = console.error, Ye = console.group, Ue = console.groupCollapsed, qe = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        K++;
      }
    }
    function Ot() {
      {
        if (K--, K === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, t, {
              value: Le
            }),
            info: M({}, t, {
              value: Ve
            }),
            warn: M({}, t, {
              value: $e
            }),
            error: M({}, t, {
              value: We
            }),
            group: M({}, t, {
              value: Ye
            }),
            groupCollapsed: M({}, t, {
              value: Ue
            }),
            groupEnd: M({}, t, {
              value: qe
            })
          });
        }
        K < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = T.ReactCurrentDispatcher, de;
    function ee(t, a, u) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (m) {
            var l = m.stack.trim().match(/\n( *(at )?)/);
            de = l && l[1] || "";
          }
        return `
` + de + t;
      }
    }
    var pe = !1, te;
    {
      var wt = typeof WeakMap == "function" ? WeakMap : Map;
      te = new wt();
    }
    function Be(t, a) {
      if (!t || pe)
        return "";
      {
        var u = te.get(t);
        if (u !== void 0)
          return u;
      }
      var l;
      pe = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = fe.current, fe.current = null, Pt();
      try {
        if (a) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (F) {
              l = F;
            }
            Reflect.construct(t, [], p);
          } else {
            try {
              p.call();
            } catch (F) {
              l = F;
            }
            t.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            l = F;
          }
          t();
        }
      } catch (F) {
        if (F && l && typeof F.stack == "string") {
          for (var c = F.stack.split(`
`), O = l.stack.split(`
`), y = c.length - 1, E = O.length - 1; y >= 1 && E >= 0 && c[y] !== O[E]; )
            E--;
          for (; y >= 1 && E >= 0; y--, E--)
            if (c[y] !== O[E]) {
              if (y !== 1 || E !== 1)
                do
                  if (y--, E--, E < 0 || c[y] !== O[E]) {
                    var C = `
` + c[y].replace(" at new ", " at ");
                    return t.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", t.displayName)), typeof t == "function" && te.set(t, C), C;
                  }
                while (y >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        pe = !1, fe.current = b, Ot(), Error.prepareStackTrace = m;
      }
      var W = t ? t.displayName || t.name : "", at = W ? ee(W) : "";
      return typeof t == "function" && te.set(t, at), at;
    }
    function xt(t, a, u) {
      return Be(t, !1);
    }
    function Ct(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function re(t, a, u) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Be(t, Ct(t));
      if (typeof t == "string")
        return ee(t);
      switch (t) {
        case h:
          return ee("Suspense");
        case g:
          return ee("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case v:
            return xt(t.render);
          case P:
            return re(t.type, a, u);
          case _: {
            var l = t, m = l._payload, b = l._init;
            try {
              return re(b(m), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Ke = {}, Ge = T.ReactDebugCurrentFrame;
    function oe(t) {
      if (t) {
        var a = t._owner, u = re(t.type, t._source, a ? a.type : null);
        Ge.setExtraStackFrame(u);
      } else
        Ge.setExtraStackFrame(null);
    }
    function Tt(t, a, u, l, m) {
      {
        var b = Function.call.bind(ne);
        for (var p in t)
          if (b(t, p)) {
            var c = void 0;
            try {
              if (typeof t[p] != "function") {
                var O = Error((l || "React class") + ": " + u + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              c = t[p](a, p, l, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              c = y;
            }
            c && !(c instanceof Error) && (oe(m), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", u, p, typeof c), oe(null)), c instanceof Error && !(c.message in Ke) && (Ke[c.message] = !0, oe(m), R("Failed %s type: %s", u, c.message), oe(null));
          }
      }
    }
    var kt = Array.isArray;
    function ve(t) {
      return kt(t);
    }
    function St(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, u = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u;
      }
    }
    function Dt(t) {
      try {
        return Je(t), !1;
      } catch {
        return !0;
      }
    }
    function Je(t) {
      return "" + t;
    }
    function He(t) {
      if (Dt(t))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", St(t)), Je(t);
    }
    var G = T.ReactCurrentOwner, At = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xe, Ze, me;
    me = {};
    function Ft(t) {
      if (ne.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function It(t) {
      if (ne.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Mt(t, a) {
      if (typeof t.ref == "string" && G.current && a && G.current.stateNode !== a) {
        var u = A(G.current.type);
        me[u] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(G.current.type), t.ref), me[u] = !0);
      }
    }
    function Nt(t, a) {
      {
        var u = function() {
          Xe || (Xe = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Lt(t, a) {
      {
        var u = function() {
          Ze || (Ze = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Vt = function(t, a, u, l, m, b, p) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: a,
        ref: u,
        props: p,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function $t(t, a, u, l, m) {
      {
        var b, p = {}, c = null, O = null;
        u !== void 0 && (He(u), c = "" + u), It(a) && (He(a.key), c = "" + a.key), Ft(a) && (O = a.ref, Mt(a, m));
        for (b in a)
          ne.call(a, b) && !At.hasOwnProperty(b) && (p[b] = a[b]);
        if (t && t.defaultProps) {
          var y = t.defaultProps;
          for (b in y)
            p[b] === void 0 && (p[b] = y[b]);
        }
        if (c || O) {
          var E = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          c && Nt(p, E), O && Lt(p, E);
        }
        return Vt(t, c, O, m, l, G.current, p);
      }
    }
    var ge = T.ReactCurrentOwner, Qe = T.ReactDebugCurrentFrame;
    function $(t) {
      if (t) {
        var a = t._owner, u = re(t.type, t._source, a ? a.type : null);
        Qe.setExtraStackFrame(u);
      } else
        Qe.setExtraStackFrame(null);
    }
    var he;
    he = !1;
    function be(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function et() {
      {
        if (ge.current) {
          var t = A(ge.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Wt(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), u = t.lineNumber;
          return `

Check your code at ` + a + ":" + u + ".";
        }
        return "";
      }
    }
    var tt = {};
    function Yt(t) {
      {
        var a = et();
        if (!a) {
          var u = typeof t == "string" ? t : t.displayName || t.name;
          u && (a = `

Check the top-level render call using <` + u + ">.");
        }
        return a;
      }
    }
    function rt(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var u = Yt(a);
        if (tt[u])
          return;
        tt[u] = !0;
        var l = "";
        t && t._owner && t._owner !== ge.current && (l = " It was passed a child from " + A(t._owner.type) + "."), $(t), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, l), $(null);
      }
    }
    function nt(t, a) {
      {
        if (typeof t != "object")
          return;
        if (ve(t))
          for (var u = 0; u < t.length; u++) {
            var l = t[u];
            be(l) && rt(l, a);
          }
        else if (be(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var m = le(t);
          if (typeof m == "function" && m !== t.entries)
            for (var b = m.call(t), p; !(p = b.next()).done; )
              be(p.value) && rt(p.value, a);
        }
      }
    }
    function Ut(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var u;
        if (typeof a == "function")
          u = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === P))
          u = a.propTypes;
        else
          return;
        if (u) {
          var l = A(a);
          Tt(u, t.props, "prop", l, t);
        } else if (a.PropTypes !== void 0 && !he) {
          he = !0;
          var m = A(a);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qt(t) {
      {
        for (var a = Object.keys(t.props), u = 0; u < a.length; u++) {
          var l = a[u];
          if (l !== "children" && l !== "key") {
            $(t), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), $(null);
            break;
          }
        }
        t.ref !== null && ($(t), R("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function ot(t, a, u, l, m, b) {
      {
        var p = Rt(t);
        if (!p) {
          var c = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = Wt(m);
          O ? c += O : c += et();
          var y;
          t === null ? y = "null" : ve(t) ? y = "array" : t !== void 0 && t.$$typeof === r ? (y = "<" + (A(t.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof t, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
        }
        var E = $t(t, a, u, m, b);
        if (E == null)
          return E;
        if (p) {
          var C = a.children;
          if (C !== void 0)
            if (l)
              if (ve(C)) {
                for (var W = 0; W < C.length; W++)
                  nt(C[W], t);
                Object.freeze && Object.freeze(C);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              nt(C, t);
        }
        return t === o ? qt(E) : Ut(E), E;
      }
    }
    function zt(t, a, u) {
      return ot(t, a, u, !0);
    }
    function Bt(t, a, u) {
      return ot(t, a, u, !1);
    }
    var Kt = Bt, Gt = zt;
    H.Fragment = o, H.jsx = Kt, H.jsxs = Gt;
  }()), H;
}
process.env.NODE_ENV === "production" ? je.exports = Qt() : je.exports = er();
var I = je.exports;
const tr = Xt(Ht)`
  background-color: #f0f0ff;
  border: 1px solid #d9d8ff;
  /* svg > path {
    fill: #4285f4;
  } */
`, rr = () => /* @__PURE__ */ I.jsx(
  tr,
  {
    justifyContent: "center",
    alignItems: "center",
    width: 7,
    height: 6,
    hasRadius: !0,
    "aria-hidden": !0,
    children: /* @__PURE__ */ I.jsxs(
      "svg",
      {
        width: "86",
        height: "86",
        viewBox: "0 0 86 86",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ I.jsx(
            "path",
            {
              d: "M42.5 81C63.2107 81 80 64.2107 80 43.5C80 22.7893 63.2107 6 42.5 6C21.7893 6 5 22.7893 5 43.5C5 64.2107 21.7893 81 42.5 81Z",
              fill: "url(#paint0_radial_2121_7781)"
            }
          ),
          /* @__PURE__ */ I.jsx(
            "path",
            {
              d: "M39.0116 24.3141C39.0116 23.3889 39.3791 22.5016 40.0333 21.8474C40.6875 21.1932 41.5748 20.8257 42.5 20.8257C43.4251 20.8257 44.3124 21.1932 44.9666 21.8474C45.6208 22.5016 45.9883 23.3889 45.9883 24.3141V62.6862C45.9883 63.6113 45.6208 64.4986 44.9666 65.1528C44.3124 65.807 43.4251 66.1745 42.5 66.1745C41.5748 66.1745 40.6875 65.807 40.0333 65.1528C39.3791 64.4986 39.0116 63.6113 39.0116 62.6862V24.3141Z",
              fill: "white"
            }
          ),
          /* @__PURE__ */ I.jsx(
            "path",
            {
              d: "M19.8256 43.5001C19.8256 42.5749 20.1931 41.6876 20.8473 41.0334C21.5015 40.3792 22.3888 40.0117 23.3139 40.0117H61.686C62.6112 40.0117 63.4985 40.3792 64.1527 41.0334C64.8069 41.6876 65.1744 42.5749 65.1744 43.5001C65.1744 44.4253 64.8069 45.3125 64.1527 45.9667C63.4985 46.6209 62.6112 46.9885 61.686 46.9885H23.3139C22.3888 46.9885 21.5015 46.6209 20.8473 45.9667C20.1931 45.3125 19.8256 44.4253 19.8256 43.5001Z",
              fill: "white"
            }
          ),
          /* @__PURE__ */ I.jsx("defs", { children: /* @__PURE__ */ I.jsxs(
            "radialGradient",
            {
              id: "paint0_radial_2121_7781",
              cx: "0",
              cy: "0",
              r: "1",
              gradientUnits: "userSpaceOnUse",
              gradientTransform: "translate(33.7791 6) rotate(56.5138) scale(67.9674)",
              children: [
                /* @__PURE__ */ I.jsx("stop", { stopColor: "#1EE4FF" }),
                /* @__PURE__ */ I.jsx("stop", { offset: "1", stopColor: "#1CADFF" })
              ]
            }
          ) })
        ]
      }
    )
  }
), Y = "editorjs";
function j(e) {
  for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    n[o - 1] = arguments[o];
  if (process.env.NODE_ENV !== "production") {
    var i = cr[e], s = i ? typeof i == "function" ? i.apply(null, n) : i : "unknown error nr: " + e;
    throw Error("[Immer] " + s);
  }
  throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(f) {
    return "'" + f + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function U(e) {
  return !!e && !!e[w];
}
function L(e) {
  var r;
  return !!e && (function(n) {
    if (!n || typeof n != "object")
      return !1;
    var o = Object.getPrototypeOf(n);
    if (o === null)
      return !0;
    var i = Object.hasOwnProperty.call(o, "constructor") && o.constructor;
    return i === Object || typeof i == "function" && Function.toString.call(i) === fr;
  }(e) || Array.isArray(e) || !!e[mt] || !!(!((r = e.constructor) === null || r === void 0) && r[mt]) || Te(e) || ke(e));
}
function Z(e, r, n) {
  n === void 0 && (n = !1), z(e) === 0 ? (n ? Object.keys : Ie)(e).forEach(function(o) {
    n && typeof o == "symbol" || r(o, e[o], e);
  }) : e.forEach(function(o, i) {
    return r(i, o, e);
  });
}
function z(e) {
  var r = e[w];
  return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(e) ? 1 : Te(e) ? 2 : ke(e) ? 3 : 0;
}
function Pe(e, r) {
  return z(e) === 2 ? e.has(r) : Object.prototype.hasOwnProperty.call(e, r);
}
function nr(e, r) {
  return z(e) === 2 ? e.get(r) : e[r];
}
function ht(e, r, n) {
  var o = z(e);
  o === 2 ? e.set(r, n) : o === 3 ? e.add(n) : e[r] = n;
}
function or(e, r) {
  return e === r ? e !== 0 || 1 / e == 1 / r : e != e && r != r;
}
function Te(e) {
  return sr && e instanceof Map;
}
function ke(e) {
  return lr && e instanceof Set;
}
function N(e) {
  return e.o || e.t;
}
function Se(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var r = dr(e);
  delete r[w];
  for (var n = Ie(r), o = 0; o < n.length; o++) {
    var i = n[o], s = r[i];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[i] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[i] });
  }
  return Object.create(Object.getPrototypeOf(e), r);
}
function De(e, r) {
  return r === void 0 && (r = !1), Ae(e) || U(e) || !L(e) || (z(e) > 1 && (e.set = e.add = e.clear = e.delete = ar), Object.freeze(e), r && Z(e, function(n, o) {
    return De(o, !0);
  }, !0)), e;
}
function ar() {
  j(2);
}
function Ae(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function k(e) {
  var r = pr[e];
  return r || j(18, e), r;
}
function st() {
  return process.env.NODE_ENV === "production" || q || j(0), q;
}
function ye(e, r) {
  r && (k("Patches"), e.u = [], e.s = [], e.v = r);
}
function ie(e) {
  Oe(e), e.p.forEach(ir), e.p = null;
}
function Oe(e) {
  e === q && (q = e.l);
}
function lt(e) {
  return q = { p: [], l: q, h: e, m: !0, _: 0 };
}
function ir(e) {
  var r = e[w];
  r.i === 0 || r.i === 1 ? r.j() : r.O = !0;
}
function Ee(e, r) {
  r._ = r.p.length;
  var n = r.p[0], o = e !== void 0 && e !== n;
  return r.h.g || k("ES5").S(r, e, o), o ? (n[w].P && (ie(r), j(4)), L(e) && (e = ue(r, e), r.l || se(r, e)), r.u && k("Patches").M(n[w].t, e, r.u, r.s)) : e = ue(r, n, []), ie(r), r.u && r.v(r.u, r.s), e !== bt ? e : void 0;
}
function ue(e, r, n) {
  if (Ae(r))
    return r;
  var o = r[w];
  if (!o)
    return Z(r, function(d, v) {
      return ct(e, o, r, d, v, n);
    }, !0), r;
  if (o.A !== e)
    return r;
  if (!o.P)
    return se(e, o.t, !0), o.t;
  if (!o.I) {
    o.I = !0, o.A._--;
    var i = o.i === 4 || o.i === 5 ? o.o = Se(o.k) : o.o, s = i, f = !1;
    o.i === 3 && (s = new Set(i), i.clear(), f = !0), Z(s, function(d, v) {
      return ct(e, o, i, d, v, n, f);
    }), se(e, i, !1), n && e.u && k("Patches").N(o, n, e.u, e.s);
  }
  return o.o;
}
function ct(e, r, n, o, i, s, f) {
  if (process.env.NODE_ENV !== "production" && i === n && j(5), U(i)) {
    var d = ue(e, i, s && r && r.i !== 3 && !Pe(r.R, o) ? s.concat(o) : void 0);
    if (ht(n, o, d), !U(d))
      return;
    e.m = !1;
  } else
    f && n.add(i);
  if (L(i) && !Ae(i)) {
    if (!e.h.D && e._ < 1)
      return;
    ue(e, i), r && r.A.l || se(e, i);
  }
}
function se(e, r, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && De(r, n);
}
function _e(e, r) {
  var n = e[w];
  return (n ? N(n) : e)[r];
}
function ft(e, r) {
  if (r in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var o = Object.getOwnPropertyDescriptor(n, r);
      if (o)
        return o;
      n = Object.getPrototypeOf(n);
    }
}
function we(e) {
  e.P || (e.P = !0, e.l && we(e.l));
}
function Re(e) {
  e.o || (e.o = Se(e.t));
}
function xe(e, r, n) {
  var o = Te(r) ? k("MapSet").F(r, n) : ke(r) ? k("MapSet").T(r, n) : e.g ? function(i, s) {
    var f = Array.isArray(i), d = { i: f ? 1 : 0, A: s ? s.A : st(), P: !1, I: !1, R: {}, l: s, t: i, k: null, o: null, j: null, C: !1 }, v = d, h = Ce;
    f && (v = [d], h = X);
    var g = Proxy.revocable(v, h), P = g.revoke, _ = g.proxy;
    return d.k = _, d.j = P, _;
  }(r, n) : k("ES5").J(r, n);
  return (n ? n.A : st()).p.push(o), o;
}
function ur(e) {
  return U(e) || j(22, e), function r(n) {
    if (!L(n))
      return n;
    var o, i = n[w], s = z(n);
    if (i) {
      if (!i.P && (i.i < 4 || !k("ES5").K(i)))
        return i.t;
      i.I = !0, o = dt(n, s), i.I = !1;
    } else
      o = dt(n, s);
    return Z(o, function(f, d) {
      i && nr(i.t, f) === d || ht(o, f, r(d));
    }), s === 3 ? new Set(o) : o;
  }(e);
}
function dt(e, r) {
  switch (r) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Se(e);
}
var pt, q, Fe = typeof Symbol < "u" && typeof Symbol("x") == "symbol", sr = typeof Map < "u", lr = typeof Set < "u", vt = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", bt = Fe ? Symbol.for("immer-nothing") : ((pt = {})["immer-nothing"] = !0, pt), mt = Fe ? Symbol.for("immer-draftable") : "__$immer_draftable", w = Fe ? Symbol.for("immer-state") : "__$immer_state", cr = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(e) {
  return "Cannot apply patch, path doesn't resolve: " + e;
}, 16: 'Sets cannot have "replace" patches.', 17: function(e) {
  return "Unsupported patch operation: " + e;
}, 18: function(e) {
  return "The plugin for '" + e + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + e + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(e) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + e + "'";
}, 22: function(e) {
  return "'current' expects a draft, got: " + e;
}, 23: function(e) {
  return "'original' expects a draft, got: " + e;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, fr = "" + Object.prototype.constructor, Ie = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, dr = Object.getOwnPropertyDescriptors || function(e) {
  var r = {};
  return Ie(e).forEach(function(n) {
    r[n] = Object.getOwnPropertyDescriptor(e, n);
  }), r;
}, pr = {}, Ce = { get: function(e, r) {
  if (r === w)
    return e;
  var n = N(e);
  if (!Pe(n, r))
    return function(i, s, f) {
      var d, v = ft(s, f);
      return v ? "value" in v ? v.value : (d = v.get) === null || d === void 0 ? void 0 : d.call(i.k) : void 0;
    }(e, n, r);
  var o = n[r];
  return e.I || !L(o) ? o : o === _e(e.t, r) ? (Re(e), e.o[r] = xe(e.A.h, o, e)) : o;
}, has: function(e, r) {
  return r in N(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(N(e));
}, set: function(e, r, n) {
  var o = ft(N(e), r);
  if (o?.set)
    return o.set.call(e.k, n), !0;
  if (!e.P) {
    var i = _e(N(e), r), s = i?.[w];
    if (s && s.t === n)
      return e.o[r] = n, e.R[r] = !1, !0;
    if (or(n, i) && (n !== void 0 || Pe(e.t, r)))
      return !0;
    Re(e), we(e);
  }
  return e.o[r] === n && (n !== void 0 || r in e.o) || Number.isNaN(n) && Number.isNaN(e.o[r]) || (e.o[r] = n, e.R[r] = !0), !0;
}, deleteProperty: function(e, r) {
  return _e(e.t, r) !== void 0 || r in e.t ? (e.R[r] = !1, Re(e), we(e)) : delete e.R[r], e.o && delete e.o[r], !0;
}, getOwnPropertyDescriptor: function(e, r) {
  var n = N(e), o = Reflect.getOwnPropertyDescriptor(n, r);
  return o && { writable: !0, configurable: e.i !== 1 || r !== "length", enumerable: o.enumerable, value: n[r] };
}, defineProperty: function() {
  j(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  j(12);
} }, X = {};
Z(Ce, function(e, r) {
  X[e] = function() {
    return arguments[0] = arguments[0][0], r.apply(this, arguments);
  };
}), X.deleteProperty = function(e, r) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(r)) && j(13), X.set.call(this, e, r, void 0);
}, X.set = function(e, r, n) {
  return process.env.NODE_ENV !== "production" && r !== "length" && isNaN(parseInt(r)) && j(14), Ce.set.call(this, e[0], r, n, e[0]);
};
var vr = function() {
  function e(n) {
    var o = this;
    this.g = vt, this.D = !0, this.produce = function(i, s, f) {
      if (typeof i == "function" && typeof s != "function") {
        var d = s;
        s = i;
        var v = o;
        return function(D) {
          var le = this;
          D === void 0 && (D = d);
          for (var T = arguments.length, R = Array(T > 1 ? T - 1 : 0), V = 1; V < T; V++)
            R[V - 1] = arguments[V];
          return v.produce(D, function(ce) {
            var Q;
            return (Q = s).call.apply(Q, [le, ce].concat(R));
          });
        };
      }
      var h;
      if (typeof s != "function" && j(6), f !== void 0 && typeof f != "function" && j(7), L(i)) {
        var g = lt(o), P = xe(o, i, void 0), _ = !0;
        try {
          h = s(P), _ = !1;
        } finally {
          _ ? ie(g) : Oe(g);
        }
        return typeof Promise < "u" && h instanceof Promise ? h.then(function(D) {
          return ye(g, f), Ee(D, g);
        }, function(D) {
          throw ie(g), D;
        }) : (ye(g, f), Ee(h, g));
      }
      if (!i || typeof i != "object") {
        if ((h = s(i)) === void 0 && (h = i), h === bt && (h = void 0), o.D && De(h, !0), f) {
          var S = [], B = [];
          k("Patches").M(i, h, S, B), f(S, B);
        }
        return h;
      }
      j(21, i);
    }, this.produceWithPatches = function(i, s) {
      if (typeof i == "function")
        return function(h) {
          for (var g = arguments.length, P = Array(g > 1 ? g - 1 : 0), _ = 1; _ < g; _++)
            P[_ - 1] = arguments[_];
          return o.produceWithPatches(h, function(S) {
            return i.apply(void 0, [S].concat(P));
          });
        };
      var f, d, v = o.produce(i, s, function(h, g) {
        f = h, d = g;
      });
      return typeof Promise < "u" && v instanceof Promise ? v.then(function(h) {
        return [h, f, d];
      }) : [v, f, d];
    }, typeof n?.useProxies == "boolean" && this.setUseProxies(n.useProxies), typeof n?.autoFreeze == "boolean" && this.setAutoFreeze(n.autoFreeze);
  }
  var r = e.prototype;
  return r.createDraft = function(n) {
    L(n) || j(8), U(n) && (n = ur(n));
    var o = lt(this), i = xe(this, n, void 0);
    return i[w].C = !0, Oe(o), i;
  }, r.finishDraft = function(n, o) {
    var i = n && n[w];
    process.env.NODE_ENV !== "production" && (i && i.C || j(9), i.I && j(10));
    var s = i.A;
    return ye(s, o), Ee(void 0, s);
  }, r.setAutoFreeze = function(n) {
    this.D = n;
  }, r.setUseProxies = function(n) {
    n && !vt && j(20), this.g = n;
  }, r.applyPatches = function(n, o) {
    var i;
    for (i = o.length - 1; i >= 0; i--) {
      var s = o[i];
      if (s.path.length === 0 && s.op === "replace") {
        n = s.value;
        break;
      }
    }
    i > -1 && (o = o.slice(i + 1));
    var f = k("Patches").$;
    return U(n) ? f(n, o) : this.produce(n, function(d) {
      return f(d, o);
    });
  }, e;
}(), x = new vr(), mr = x.produce;
x.produceWithPatches.bind(x);
x.setAutoFreeze.bind(x);
x.setUseProxies.bind(x);
x.applyPatches.bind(x);
x.createDraft.bind(x);
x.finishDraft.bind(x);
const gr = mr, hr = `${Y}/resolve-config`, br = {
  isLoading: !0,
  config: {
    apiKey: null,
    defaultCenter: null,
    favoritesPlaces: null
  }
}, yr = gr((e = br, r) => {
  switch (r.type) {
    case hr: {
      e.isLoading = !1, e.config = r.data;
      break;
    }
    default:
      return e;
  }
  return e;
}), Er = {
  [`${Y}_config`]: yr
}, ae = (e) => `${Y}.${e}`, Or = {
  register(e) {
    e.addReducers(Er), e.customFields.register({
      name: Y,
      pluginId: Y,
      type: "string",
      icon: rr,
      intlLabel: {
        id: ae("editorjs.label"),
        defaultMessage: "EditorJs"
      },
      intlDescription: {
        id: ae("editorjs.description"),
        defaultMessage: "Block-style editor, JSON output"
      },
      components: {
        Input: async () => import("./Editorjs-21e6c58c.mjs").then((r) => ({
          default: r.Editorjs
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
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.header",
                  defaultMessage: "Header"
                }
              },
              {
                name: "options.list",
                type: "checkbox",
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.list",
                  defaultMessage: "List"
                }
              },
              {
                name: "options.checklist",
                type: "checkbox",
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.checklist",
                  defaultMessage: "Checklist"
                }
              },
              {
                name: "options.embed",
                type: "checkbox",
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.embed",
                  defaultMessage: "Embed"
                }
              },
              {
                name: "options.warning",
                type: "checkbox",
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.warning",
                  defaultMessage: "Warning"
                }
              },
              {
                name: "options.code",
                type: "checkbox",
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.code",
                  defaultMessage: "Code"
                }
              },
              {
                name: "options.link_tool",
                type: "checkbox",
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.link_tool",
                  defaultMessage: "Link tool"
                }
              },
              {
                name: "options.raw",
                type: "checkbox",
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.raw",
                  defaultMessage: "Raw"
                }
              },
              {
                name: "options.quote",
                type: "checkbox",
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.quote",
                  defaultMessage: "Quote"
                }
              },
              {
                name: "options.marker",
                type: "checkbox",
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.marker",
                  defaultMessage: "Marker"
                }
              },
              {
                name: "options.delimiter",
                type: "checkbox",
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.delimiter",
                  defaultMessage: "Delimiter"
                }
              },
              {
                name: "options.inlineCode",
                type: "checkbox",
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.inlineCode",
                  defaultMessage: "Inline Code"
                }
              },
              {
                name: "options.image",
                type: "checkbox",
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.image",
                  defaultMessage: "Image"
                }
              },
              {
                name: "options.attaches",
                type: "checkbox",
                defaultValue: !0,
                intlLabel: {
                  id: "editorjs.tools.settings.attaches",
                  defaultMessage: "Attaches"
                }
              },
              {
                name: "options.component",
                type: "checkbox",
                defaultValue: !1,
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
                  id: ae("editorjs.options.advanced.requiredField"),
                  defaultMessage: "Required field"
                },
                description: {
                  id: ae(
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
  async registerTrads({ locales: e }) {
    const r = await Promise.all(
      e.map((n) => Zt(/* @__PURE__ */ Object.assign({ "./translations/en.json": () => import("./en-fca630eb.mjs"), "./translations/ru.json": () => import("./ru-336e02ac.mjs") }), `./translations/${n}.json`).then(({ default: o }) => ({
        data: Jt(o, Y),
        locale: n
      })).catch(() => ({
        data: {},
        locale: n
      })))
    );
    return Promise.resolve(r);
  }
};
export {
  hr as R,
  Or as i,
  I as j,
  Y as p
};
//# sourceMappingURL=index-60f1300c.mjs.map
