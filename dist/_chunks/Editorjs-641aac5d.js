"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const designSystem = require("@strapi/design-system");
const reactIntl = require("react-intl");
const helperPlugin = require("@strapi/helper-plugin");
require("react-dom");
const index = require("./index-9064377e.js");
const EditorJS = require("@editorjs/editorjs");
const styled = require("styled-components");
const CheckList = require("@editorjs/checklist");
const Code = require("@editorjs/code");
const Delimiter = require("@editorjs/delimiter");
const Embed = require("@editorjs/embed");
const Header = require("@editorjs/header");
const InlineCode = require("@editorjs/inline-code");
const LinkTool = require("@editorjs/link");
const List = require("@editorjs/list");
const Marker = require("@editorjs/marker");
const Quote = require("@editorjs/quote");
const Raw = require("@editorjs/raw");
const Table = require("@editorjs/table");
const Warning = require("@editorjs/warning");
const ComponentSelectorTool = require("editorjs-component-selector");
const AttachesTool = require("@editorjs/attaches");
const Image = require("@editorjs/image");
const axios = require("axios");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const EditorJS__default = /* @__PURE__ */ _interopDefault(EditorJS);
const styled__default = /* @__PURE__ */ _interopDefault(styled);
const CheckList__default = /* @__PURE__ */ _interopDefault(CheckList);
const Code__default = /* @__PURE__ */ _interopDefault(Code);
const Delimiter__default = /* @__PURE__ */ _interopDefault(Delimiter);
const Embed__default = /* @__PURE__ */ _interopDefault(Embed);
const Header__default = /* @__PURE__ */ _interopDefault(Header);
const InlineCode__default = /* @__PURE__ */ _interopDefault(InlineCode);
const LinkTool__default = /* @__PURE__ */ _interopDefault(LinkTool);
const List__default = /* @__PURE__ */ _interopDefault(List);
const Marker__default = /* @__PURE__ */ _interopDefault(Marker);
const Quote__default = /* @__PURE__ */ _interopDefault(Quote);
const Raw__default = /* @__PURE__ */ _interopDefault(Raw);
const Table__default = /* @__PURE__ */ _interopDefault(Table);
const Warning__default = /* @__PURE__ */ _interopDefault(Warning);
const ComponentSelectorTool__default = /* @__PURE__ */ _interopDefault(ComponentSelectorTool);
const AttachesTool__default = /* @__PURE__ */ _interopDefault(AttachesTool);
const Image__default = /* @__PURE__ */ _interopDefault(Image);
const axios__default = /* @__PURE__ */ _interopDefault(axios);
var shim = { exports: {} };
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredUseSyncExternalStoreShim_production_min;
function requireUseSyncExternalStoreShim_production_min() {
  if (hasRequiredUseSyncExternalStoreShim_production_min)
    return useSyncExternalStoreShim_production_min;
  hasRequiredUseSyncExternalStoreShim_production_min = 1;
  var e = React__namespace.default;
  function h(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var k = "function" === typeof Object.is ? Object.is : h, l = e.useState, m = e.useEffect, n = e.useLayoutEffect, p = e.useDebugValue;
  function q(a, b) {
    var d = b(), f = l({ inst: { value: d, getSnapshot: b } }), c = f[0].inst, g = f[1];
    n(function() {
      c.value = d;
      c.getSnapshot = b;
      r(c) && g({ inst: c });
    }, [a, d, b]);
    m(function() {
      r(c) && g({ inst: c });
      return a(function() {
        r(c) && g({ inst: c });
      });
    }, [a]);
    p(d);
    return d;
  }
  function r(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var d = b();
      return !k(a, d);
    } catch (f) {
      return true;
    }
  }
  function t(a, b) {
    return b();
  }
  var u = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t : q;
  useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u;
  return useSyncExternalStoreShim_production_min;
}
var useSyncExternalStoreShim_development = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredUseSyncExternalStoreShim_development;
function requireUseSyncExternalStoreShim_development() {
  if (hasRequiredUseSyncExternalStoreShim_development)
    return useSyncExternalStoreShim_development;
  hasRequiredUseSyncExternalStoreShim_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      }
      var React2 = React__namespace.default;
      var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error(format) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame.getStackAddendum();
          if (stack !== "") {
            format += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      function is(x, y) {
        return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
      }
      var objectIs = typeof Object.is === "function" ? Object.is : is;
      var useState = React2.useState, useEffect = React2.useEffect, useLayoutEffect = React2.useLayoutEffect, useDebugValue = React2.useDebugValue;
      var didWarnOld18Alpha = false;
      var didWarnUncachedGetSnapshot = false;
      function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        {
          if (!didWarnOld18Alpha) {
            if (React2.startTransition !== void 0) {
              didWarnOld18Alpha = true;
              error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
            }
          }
        }
        var value = getSnapshot();
        {
          if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            if (!objectIs(value, cachedValue)) {
              error("The result of getSnapshot should be cached to avoid an infinite loop");
              didWarnUncachedGetSnapshot = true;
            }
          }
        }
        var _useState = useState({
          inst: {
            value,
            getSnapshot
          }
        }), inst = _useState[0].inst, forceUpdate = _useState[1];
        useLayoutEffect(function() {
          inst.value = value;
          inst.getSnapshot = getSnapshot;
          if (checkIfSnapshotChanged(inst)) {
            forceUpdate({
              inst
            });
          }
        }, [subscribe, value, getSnapshot]);
        useEffect(function() {
          if (checkIfSnapshotChanged(inst)) {
            forceUpdate({
              inst
            });
          }
          var handleStoreChange = function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          };
          return subscribe(handleStoreChange);
        }, [subscribe]);
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        var prevValue = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(prevValue, nextValue);
        } catch (error2) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
        return getSnapshot();
      }
      var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
      var isServerEnvironment = !canUseDOM;
      var shim2 = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
      var useSyncExternalStore$2 = React2.useSyncExternalStore !== void 0 ? React2.useSyncExternalStore : shim2;
      useSyncExternalStoreShim_development.useSyncExternalStore = useSyncExternalStore$2;
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
      }
    })();
  }
  return useSyncExternalStoreShim_development;
}
if (process.env.NODE_ENV === "production") {
  shim.exports = requireUseSyncExternalStoreShim_production_min();
} else {
  shim.exports = requireUseSyncExternalStoreShim_development();
}
var shimExports = shim.exports;
var withSelector = { exports: {} };
var withSelector_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredWithSelector_production_min;
function requireWithSelector_production_min() {
  if (hasRequiredWithSelector_production_min)
    return withSelector_production_min;
  hasRequiredWithSelector_production_min = 1;
  var h = React__namespace.default, n = shimExports;
  function p(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var q = "function" === typeof Object.is ? Object.is : p, r = n.useSyncExternalStore, t = h.useRef, u = h.useEffect, v = h.useMemo, w = h.useDebugValue;
  withSelector_production_min.useSyncExternalStoreWithSelector = function(a, b, e, l, g) {
    var c = t(null);
    if (null === c.current) {
      var f = { hasValue: false, value: null };
      c.current = f;
    } else
      f = c.current;
    c = v(function() {
      function a2(a3) {
        if (!c2) {
          c2 = true;
          d2 = a3;
          a3 = l(a3);
          if (void 0 !== g && f.hasValue) {
            var b2 = f.value;
            if (g(b2, a3))
              return k = b2;
          }
          return k = a3;
        }
        b2 = k;
        if (q(d2, a3))
          return b2;
        var e2 = l(a3);
        if (void 0 !== g && g(b2, e2))
          return b2;
        d2 = a3;
        return k = e2;
      }
      var c2 = false, d2, k, m = void 0 === e ? null : e;
      return [function() {
        return a2(b());
      }, null === m ? void 0 : function() {
        return a2(m());
      }];
    }, [b, e, l, g]);
    var d = r(a, c[0], c[1]);
    u(function() {
      f.hasValue = true;
      f.value = d;
    }, [d]);
    w(d);
    return d;
  };
  return withSelector_production_min;
}
var withSelector_development = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredWithSelector_development;
function requireWithSelector_development() {
  if (hasRequiredWithSelector_development)
    return withSelector_development;
  hasRequiredWithSelector_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      }
      var React2 = React__namespace.default;
      var shim2 = shimExports;
      function is(x, y) {
        return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
      }
      var objectIs = typeof Object.is === "function" ? Object.is : is;
      var useSyncExternalStore = shim2.useSyncExternalStore;
      var useRef = React2.useRef, useEffect = React2.useEffect, useMemo = React2.useMemo, useDebugValue = React2.useDebugValue;
      function useSyncExternalStoreWithSelector2(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        var inst;
        if (instRef.current === null) {
          inst = {
            hasValue: false,
            value: null
          };
          instRef.current = inst;
        } else {
          inst = instRef.current;
        }
        var _useMemo = useMemo(function() {
          var hasMemo = false;
          var memoizedSnapshot;
          var memoizedSelection;
          var memoizedSelector = function(nextSnapshot) {
            if (!hasMemo) {
              hasMemo = true;
              memoizedSnapshot = nextSnapshot;
              var _nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0) {
                if (inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, _nextSelection)) {
                    memoizedSelection = currentSelection;
                    return currentSelection;
                  }
                }
              }
              memoizedSelection = _nextSelection;
              return _nextSelection;
            }
            var prevSnapshot = memoizedSnapshot;
            var prevSelection = memoizedSelection;
            if (objectIs(prevSnapshot, nextSnapshot)) {
              return prevSelection;
            }
            var nextSelection = selector(nextSnapshot);
            if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
              return prevSelection;
            }
            memoizedSnapshot = nextSnapshot;
            memoizedSelection = nextSelection;
            return nextSelection;
          };
          var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
          var getSnapshotWithSelector = function() {
            return memoizedSelector(getSnapshot());
          };
          var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
            return memoizedSelector(maybeGetServerSnapshot());
          };
          return [getSnapshotWithSelector, getServerSnapshotWithSelector];
        }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
        var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
        useEffect(function() {
          inst.hasValue = true;
          inst.value = value;
        }, [value]);
        useDebugValue(value);
        return value;
      }
      withSelector_development.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector2;
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
      }
    })();
  }
  return withSelector_development;
}
if (process.env.NODE_ENV === "production") {
  withSelector.exports = requireWithSelector_production_min();
} else {
  withSelector.exports = requireWithSelector_development();
}
var withSelectorExports = withSelector.exports;
const ContextKey = Symbol.for(`react-redux-context-${React.version}`);
const gT = globalThis;
function getContext() {
  let realContext = gT[ContextKey];
  if (!realContext) {
    realContext = React.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      realContext.displayName = "ReactRedux";
    }
    gT[ContextKey] = realContext;
  }
  return realContext;
}
const ReactReduxContext = /* @__PURE__ */ new Proxy({}, /* @__PURE__ */ new Proxy({}, {
  get(_, handler) {
    const target = getContext();
    return (_target, ...args) => Reflect[handler](target, ...args);
  }
}));
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = React.useContext(context);
    if (process.env.NODE_ENV !== "production" && !contextValue) {
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    }
    return contextValue;
  };
}
const useReduxContext = /* @__PURE__ */ createReduxContextHook();
const notInitialized = () => {
  throw new Error("uSES not initialized!");
};
let useSyncExternalStoreWithSelector = notInitialized;
const initializeUseSelector = (fn) => {
  useSyncExternalStoreWithSelector = fn;
};
const refEquality = (a, b) => a === b;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  return function useSelector2(selector, equalityFnOrOptions = {}) {
    const {
      equalityFn = refEquality,
      stabilityCheck = void 0,
      noopCheck = void 0
    } = typeof equalityFnOrOptions === "function" ? {
      equalityFn: equalityFnOrOptions
    } : equalityFnOrOptions;
    if (process.env.NODE_ENV !== "production") {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`);
      }
      if (typeof selector !== "function") {
        throw new Error(`You must pass a function as a selector to useSelector`);
      }
      if (typeof equalityFn !== "function") {
        throw new Error(`You must pass a function as an equality function to useSelector`);
      }
    }
    const {
      store,
      subscription,
      getServerState,
      stabilityCheck: globalStabilityCheck,
      noopCheck: globalNoopCheck
    } = useReduxContext$1();
    const firstRun = React.useRef(true);
    const wrappedSelector = React.useCallback({
      [selector.name](state) {
        const selected = selector(state);
        if (process.env.NODE_ENV !== "production") {
          const finalStabilityCheck = typeof stabilityCheck === "undefined" ? globalStabilityCheck : stabilityCheck;
          if (finalStabilityCheck === "always" || finalStabilityCheck === "once" && firstRun.current) {
            const toCompare = selector(state);
            if (!equalityFn(selected, toCompare)) {
              console.warn("Selector " + (selector.name || "unknown") + " returned a different result when called with the same parameters. This can lead to unnecessary rerenders.\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization", {
                state,
                selected,
                selected2: toCompare
              });
            }
          }
          const finalNoopCheck = typeof noopCheck === "undefined" ? globalNoopCheck : noopCheck;
          if (finalNoopCheck === "always" || finalNoopCheck === "once" && firstRun.current) {
            if (selected === state) {
              console.warn("Selector " + (selector.name || "unknown") + " returned the root state when called. This can lead to unnecessary rerenders.\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.");
            }
          }
          if (firstRun.current)
            firstRun.current = false;
        }
        return selected;
      }
    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
    React.useDebugValue(selectedState);
    return selectedState;
  };
}
const useSelector = /* @__PURE__ */ createSelectorHook();
var reactIs$1 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min$1;
function requireReactIs_production_min$1() {
  if (hasRequiredReactIs_production_min$1)
    return reactIs_production_min$1;
  hasRequiredReactIs_production_min$1 = 1;
  var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min$1.AsyncMode = l;
  reactIs_production_min$1.ConcurrentMode = m;
  reactIs_production_min$1.ContextConsumer = k;
  reactIs_production_min$1.ContextProvider = h;
  reactIs_production_min$1.Element = c;
  reactIs_production_min$1.ForwardRef = n;
  reactIs_production_min$1.Fragment = e;
  reactIs_production_min$1.Lazy = t;
  reactIs_production_min$1.Memo = r;
  reactIs_production_min$1.Portal = d;
  reactIs_production_min$1.Profiler = g;
  reactIs_production_min$1.StrictMode = f;
  reactIs_production_min$1.Suspense = p;
  reactIs_production_min$1.isAsyncMode = function(a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min$1.isConcurrentMode = A;
  reactIs_production_min$1.isContextConsumer = function(a) {
    return z(a) === k;
  };
  reactIs_production_min$1.isContextProvider = function(a) {
    return z(a) === h;
  };
  reactIs_production_min$1.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min$1.isForwardRef = function(a) {
    return z(a) === n;
  };
  reactIs_production_min$1.isFragment = function(a) {
    return z(a) === e;
  };
  reactIs_production_min$1.isLazy = function(a) {
    return z(a) === t;
  };
  reactIs_production_min$1.isMemo = function(a) {
    return z(a) === r;
  };
  reactIs_production_min$1.isPortal = function(a) {
    return z(a) === d;
  };
  reactIs_production_min$1.isProfiler = function(a) {
    return z(a) === g;
  };
  reactIs_production_min$1.isStrictMode = function(a) {
    return z(a) === f;
  };
  reactIs_production_min$1.isSuspense = function(a) {
    return z(a) === p;
  };
  reactIs_production_min$1.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };
  reactIs_production_min$1.typeOf = z;
  return reactIs_production_min$1;
}
var reactIs_development$1 = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development$1;
function requireReactIs_development$1() {
  if (hasRequiredReactIs_development$1)
    return reactIs_development$1;
  hasRequiredReactIs_development$1 = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type) {
        return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      reactIs_development$1.AsyncMode = AsyncMode;
      reactIs_development$1.ConcurrentMode = ConcurrentMode;
      reactIs_development$1.ContextConsumer = ContextConsumer;
      reactIs_development$1.ContextProvider = ContextProvider;
      reactIs_development$1.Element = Element;
      reactIs_development$1.ForwardRef = ForwardRef;
      reactIs_development$1.Fragment = Fragment;
      reactIs_development$1.Lazy = Lazy;
      reactIs_development$1.Memo = Memo;
      reactIs_development$1.Portal = Portal;
      reactIs_development$1.Profiler = Profiler;
      reactIs_development$1.StrictMode = StrictMode;
      reactIs_development$1.Suspense = Suspense;
      reactIs_development$1.isAsyncMode = isAsyncMode;
      reactIs_development$1.isConcurrentMode = isConcurrentMode;
      reactIs_development$1.isContextConsumer = isContextConsumer;
      reactIs_development$1.isContextProvider = isContextProvider;
      reactIs_development$1.isElement = isElement;
      reactIs_development$1.isForwardRef = isForwardRef;
      reactIs_development$1.isFragment = isFragment;
      reactIs_development$1.isLazy = isLazy;
      reactIs_development$1.isMemo = isMemo;
      reactIs_development$1.isPortal = isPortal;
      reactIs_development$1.isProfiler = isProfiler;
      reactIs_development$1.isStrictMode = isStrictMode;
      reactIs_development$1.isSuspense = isSuspense;
      reactIs_development$1.isValidElementType = isValidElementType;
      reactIs_development$1.typeOf = typeOf;
    })();
  }
  return reactIs_development$1;
}
if (process.env.NODE_ENV === "production") {
  reactIs$1.exports = requireReactIs_production_min$1();
} else {
  reactIs$1.exports = requireReactIs_development$1();
}
var reactIsExports = reactIs$1.exports;
var reactIs = reactIsExports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min)
    return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
  u = Symbol.for("react.module.reference");
  function v(a) {
    if ("object" === typeof a && null !== a) {
      var r = a.$$typeof;
      switch (r) {
        case b:
          switch (a = a.type, a) {
            case d:
            case f:
            case e:
            case m:
            case n:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case h:
                case l:
                case q:
                case p:
                case g:
                  return a;
                default:
                  return r;
              }
          }
        case c:
          return r;
      }
    }
  }
  reactIs_production_min.ContextConsumer = h;
  reactIs_production_min.ContextProvider = g;
  reactIs_production_min.Element = b;
  reactIs_production_min.ForwardRef = l;
  reactIs_production_min.Fragment = d;
  reactIs_production_min.Lazy = q;
  reactIs_production_min.Memo = p;
  reactIs_production_min.Portal = c;
  reactIs_production_min.Profiler = f;
  reactIs_production_min.StrictMode = e;
  reactIs_production_min.Suspense = m;
  reactIs_production_min.SuspenseList = n;
  reactIs_production_min.isAsyncMode = function() {
    return false;
  };
  reactIs_production_min.isConcurrentMode = function() {
    return false;
  };
  reactIs_production_min.isContextConsumer = function(a) {
    return v(a) === h;
  };
  reactIs_production_min.isContextProvider = function(a) {
    return v(a) === g;
  };
  reactIs_production_min.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === b;
  };
  reactIs_production_min.isForwardRef = function(a) {
    return v(a) === l;
  };
  reactIs_production_min.isFragment = function(a) {
    return v(a) === d;
  };
  reactIs_production_min.isLazy = function(a) {
    return v(a) === q;
  };
  reactIs_production_min.isMemo = function(a) {
    return v(a) === p;
  };
  reactIs_production_min.isPortal = function(a) {
    return v(a) === c;
  };
  reactIs_production_min.isProfiler = function(a) {
    return v(a) === f;
  };
  reactIs_production_min.isStrictMode = function(a) {
    return v(a) === e;
  };
  reactIs_production_min.isSuspense = function(a) {
    return v(a) === m;
  };
  reactIs_production_min.isSuspenseList = function(a) {
    return v(a) === n;
  };
  reactIs_production_min.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
  };
  reactIs_production_min.typeOf = v;
  return reactIs_production_min;
}
var reactIs_development = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development;
function requireReactIs_development() {
  if (hasRequiredReactIs_development)
    return reactIs_development;
  hasRequiredReactIs_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      var enableScopeAPI = false;
      var enableCacheElement = false;
      var enableTransitionTracing = false;
      var enableLegacyHidden = false;
      var enableDebugTracing = false;
      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      }
      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        }
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (typeof type === "object" && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
          // types supported by any Flight configuration anywhere since
          // we don't know which Flight build this will end up being used
          // with.
          type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
            return true;
          }
        }
        return false;
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_SERVER_CONTEXT_TYPE:
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      var hasWarnedAboutDeprecatedIsConcurrentMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isConcurrentMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
            hasWarnedAboutDeprecatedIsConcurrentMode = true;
            console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      function isSuspenseList(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
      }
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.SuspenseList = SuspenseList;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isSuspenseList = isSuspenseList;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}
if (process.env.NODE_ENV === "production") {
  requireReactIs_production_min();
} else {
  requireReactIs_development();
}
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext$1 = (
    // @ts-ignore
    context === ReactReduxContext ? useReduxContext : (
      // @ts-ignore
      createReduxContextHook(context)
    )
  );
  return function useStore2() {
    const {
      store
    } = useReduxContext$1();
    return store;
  };
}
const useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context = ReactReduxContext) {
  const useStore$1 = (
    // @ts-ignore
    context === ReactReduxContext ? useStore : createStoreHook(context)
  );
  return function useDispatch2() {
    const store = useStore$1();
    return store.dispatch;
  };
}
const useDispatch = /* @__PURE__ */ createDispatchHook();
initializeUseSelector(withSelectorExports.useSyncExternalStoreWithSelector);
const usePluginConfig = () => {
  const dispatch = useDispatch();
  const fetchClient = helperPlugin.useFetchClient();
  const toggleNotification = helperPlugin.useNotification();
  const { config, isLoading } = useSelector(
    (state) => state[`${index.pluginId}_config`]
  );
  React.useEffect(() => {
    if (!isLoading && !!config) {
      return;
    }
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const endpoint = `/${index.pluginId}/config`;
        const { data } = await fetchClient.get(endpoint, {
          signal: abortController.signal
        });
        return data ?? {};
      } catch (err) {
        if (!abortController.signal.aborted) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
          return err;
        }
      }
    };
    fetchData().then((data) => dispatch({ type: index.RESOLVE_CONFIG, data }));
    return () => abortController.abort();
  }, [dispatch, fetchClient, toggleNotification]);
  return { config, isLoading };
};
const customTools = (options, config) => {
  return {
    ...options.header ? {
      header: {
        class: Header__default.default,
        ...config.header ? config.header : {}
      }
    } : {},
    ...options.list ? {
      list: {
        class: List__default.default,
        ...config.list ? config.list : {}
      }
    } : {},
    ...options.checklist ? {
      checklist: {
        class: CheckList__default.default,
        ...config.checklist ? config.checklist : {}
      }
    } : {},
    ...options.embed ? {
      embed: {
        class: Embed__default.default,
        ...config.embed ? config.embed : {}
      }
    } : {},
    ...options.table ? {
      table: {
        class: Table__default.default,
        ...config.table ? config.table : {}
      }
    } : {},
    ...options.warning ? {
      warning: {
        class: Warning__default.default,
        ...config.warning ? config.warning : {}
      }
    } : {},
    ...options.code ? {
      code: {
        class: Code__default.default,
        ...config.code ? config.code : {}
      }
    } : {},
    ...options.link_tool ? {
      link_tool: {
        class: LinkTool__default.default,
        ...config.link_tool ? config.link_tool : {}
      }
    } : {},
    ...options.raw ? {
      raw: {
        class: Raw__default.default,
        ...config.raw ? config.raw : {}
      }
    } : {},
    ...options.quote ? {
      quote: {
        class: Quote__default.default,
        ...config.quote ? config.quote : {}
      }
    } : {},
    ...options.marker ? {
      marker: {
        class: Marker__default.default,
        ...config.marker ? config.marker : {}
      }
    } : {},
    ...options.delimiter ? {
      delimiter: {
        class: Delimiter__default.default,
        ...config.delimiter ? config.delimiter : {}
      }
    } : {},
    ...options.inlineCode ? {
      inlineCode: {
        class: InlineCode__default.default,
        ...config.inlineCode ? config.inlineCode : {}
      }
    } : {},
    ...options.component && config.component ? {
      component: {
        class: ComponentSelectorTool__default.default,
        ...config.component ? config.component : {}
      }
    } : {}
  };
};
const requiredTools = {
  image: {
    class: Image__default.default,
    config: {
      field: "files.image",
      additionalRequestData: {
        data: JSON.stringify({})
      },
      additionalRequestHeaders: {
        Authorization: `Bearer ${helperPlugin.auth.getToken()}`
      },
      endpoints: {
        byUrl: `/api/${index.pluginId}/image/byUrl`
      },
      uploader: {
        async uploadByFile(file) {
          const formData = new FormData();
          formData.append("data", JSON.stringify({}));
          formData.append("files.image", file);
          const { data } = await axios__default.default.post(
            `/api/${index.pluginId}/image/byFile`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${helperPlugin.auth.getToken()}`
              }
            }
          );
          return data;
        }
      }
    }
  },
  attaches: {
    class: AttachesTool__default.default,
    config: {
      field: "files.image",
      additionalRequestData: {
        data: JSON.stringify({})
      },
      additionalRequestHeaders: {
        Authorization: `Bearer ${helperPlugin.auth.getToken()}`
      },
      endpoints: {
        byUrl: `/api/${index.pluginId}/image/byUrl`
      },
      uploader: {
        async uploadByFile(file) {
          const formData = new FormData();
          formData.append("data", JSON.stringify({}));
          formData.append("files.image", file);
          const { data } = await axios__default.default.post(
            `/api/${index.pluginId}/image/byFile`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${helperPlugin.auth.getToken()}`
              }
            }
          );
          return data;
        }
      }
    }
  }
};
class MediaLibAdapter {
  api;
  config;
  static get toolbox() {
    return {
      title: "Image",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"></rect><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"></path></svg>'
    };
  }
  constructor({ api, config }) {
    this.api = api;
    this.config = config || {};
  }
  render() {
    const currentIndex = this.api.blocks.getCurrentBlockIndex();
    if (this.config.mediaLibToggleFunc) {
      this.config.mediaLibToggleFunc(currentIndex);
    }
    return document.createElement("p");
  }
  save() {
    return {
      name: "mediaLibraryStrapi"
    };
  }
}
class MediaLibAttachesAdapter {
  api;
  config;
  static get toolbox() {
    return {
      title: "Attachment",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.3236 8.43554L9.49533 12.1908C9.13119 12.5505 8.93118 13.043 8.9393 13.5598C8.94741 14.0767 9.163 14.5757 9.53862 14.947C9.91424 15.3182 10.4191 15.5314 10.9422 15.5397C11.4653 15.5479 11.9637 15.3504 12.3279 14.9908L16.1562 11.2355C16.8845 10.5161 17.2845 9.53123 17.2682 8.4975C17.252 7.46376 16.8208 6.46583 16.0696 5.72324C15.3184 4.98066 14.3086 4.55425 13.2624 4.53782C12.2162 4.52138 11.2193 4.91627 10.4911 5.63562L6.66277 9.39093C5.57035 10.4699 4.97032 11.9473 4.99467 13.4979C5.01903 15.0485 5.66578 16.5454 6.79264 17.6592C7.9195 18.7731 9.43417 19.4127 11.0034 19.4374C12.5727 19.462 14.068 18.8697 15.1604 17.7907L18.9887 14.0354"></path></svg>'
    };
  }
  constructor({ api, config }) {
    this.api = api;
    this.config = config || {};
  }
  render() {
    const currentIndex = this.api.blocks.getCurrentBlockIndex();
    if (this.config.mediaLibAttachesToggleFunc) {
      this.config.mediaLibAttachesToggleFunc(currentIndex);
    }
    return document.createElement("p");
  }
  save() {
    return {
      name: "mediaLibraryAttachesStrapi"
    };
  }
}
const MediaLibComponent = ({
  isOpen,
  onChange,
  onToggle,
  allowedTypes
}) => {
  const { components } = helperPlugin.useLibrary();
  const [data, setData] = React__namespace.useState(null);
  const MediaLibraryDialog = components["media-library"];
  const handleInputChange = (files) => {
    if (files) {
      setData(files);
    }
  };
  const handleSelectAssets = (files) => {
    const formattedFiles = files.map((f) => ({
      alt: f.alternativeText || f.name,
      url: helperPlugin.prefixFileUrlWithBackendUrl(f.url),
      width: f.width,
      height: f.height,
      size: f.size,
      mime: f.mime,
      formats: f.formats
    }));
    onChange(formattedFiles);
  };
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    MediaLibraryDialog,
    {
      allowedTypes,
      onClose: onToggle,
      onInputMediaChange: handleInputChange,
      onSelectAssets: handleSelectAssets
    }
  );
};
const getToggleFunc = ({
  openStateSetter,
  indexStateSetter
}) => {
  return (idx) => {
    if (idx || idx === 0) {
      indexStateSetter(idx);
    }
    openStateSetter((prev) => !prev);
  };
};
const changeFunc = ({
  indexStateSetter,
  editor,
  data,
  index: index2
}) => {
  let insertedBlocksCount = 0;
  data.forEach((entry) => {
    if (!entry.mime.includes("image")) {
      return;
    }
    const newBlockType = "image";
    const newBlockData = {
      file: {
        url: entry.url.replace(window.location.origin, ""),
        mime: entry.mime,
        height: entry.height,
        width: entry.width,
        size: entry.size,
        alt: entry.alt,
        formats: entry.formats
      },
      caption: "",
      withBorder: false,
      withBackground: false,
      stretched: false
    };
    editor.blocks.insert(
      newBlockType,
      newBlockData,
      {},
      index2 + insertedBlocksCount,
      true
    );
    insertedBlocksCount++;
  });
  editor.blocks.delete(index2 + insertedBlocksCount);
  indexStateSetter(-1);
};
const changeFuncAttaches = ({
  indexStateSetter,
  editor,
  data,
  index: index2
}) => {
  let insertedBlocksCount = 0;
  data.forEach((entry) => {
    const newBlockType = "attaches";
    const newBlockData = {
      file: {
        url: entry.url.replace(window.location.origin, ""),
        size: entry.size * 1024,
        name: entry.name,
        extension: entry.ext
      },
      title: entry.alt
    };
    editor.blocks.insert(
      newBlockType,
      newBlockData,
      {},
      index2 + insertedBlocksCount,
      true
    );
    insertedBlocksCount++;
  });
  editor.blocks.delete(index2 + insertedBlocksCount);
  indexStateSetter(-1);
};
const INITIAL_DATA = {
  time: (/* @__PURE__ */ new Date()).getTime(),
  blocks: [
    {
      type: "paragraph",
      data: {
        text: ""
      }
    }
  ]
};
let EditorjsFieldNew = ({
  name,
  value,
  onChange,
  attribute,
  config
}) => {
  const ref = React.useRef(null);
  const [newEditorInstance, setnewEditorInstance] = React.useState();
  const [mediaLibBlockIndex, setMediaLibBlockIndex] = React.useState(-1);
  const [isMediaLibOpen, setIsMediaLibOpen] = React.useState(false);
  const [mediaLibAttachesBlockIndex, setMediaLibAttachesBlockIndex] = React.useState(-1);
  const [isMediaLibAttachesOpen, setIsMediaLibAttachesOpen] = React.useState(false);
  const mediaLibToggleFunc = React.useCallback(
    getToggleFunc({
      openStateSetter: setIsMediaLibOpen,
      indexStateSetter: setMediaLibBlockIndex
    }),
    []
  );
  const mediaLibAttachesToggleFunc = React.useCallback(
    getToggleFunc({
      openStateSetter: setIsMediaLibAttachesOpen,
      indexStateSetter: setMediaLibAttachesBlockIndex
    }),
    []
  );
  const handleMediaLibChange = React.useCallback(
    (data) => {
      console.log("handleMediaLibChange", data);
      changeFunc({
        indexStateSetter: setMediaLibBlockIndex,
        data,
        index: mediaLibBlockIndex,
        editor: newEditorInstance
      });
      mediaLibToggleFunc(mediaLibBlockIndex);
    },
    [mediaLibBlockIndex, newEditorInstance]
  );
  const handleMediaLibAttachesChange = React.useCallback(
    (data) => {
      console.log("handleMediaLibAttachesChange", data);
      changeFuncAttaches({
        indexStateSetter: setMediaLibAttachesBlockIndex,
        data,
        index: mediaLibAttachesBlockIndex,
        editor: newEditorInstance
      });
      mediaLibAttachesToggleFunc(mediaLibAttachesBlockIndex);
    },
    [mediaLibAttachesBlockIndex, newEditorInstance]
  );
  const customToolsOther = {
    ...attribute?.options?.image ? {
      mediaLib: {
        class: MediaLibAdapter,
        config: {
          mediaLibToggleFunc
        }
      }
    } : {},
    ...attribute?.options?.attaches ? {
      mediaLibAttaches: {
        class: MediaLibAttachesAdapter,
        config: {
          mediaLibAttachesToggleFunc
        }
      }
    } : {}
  };
  React.useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS__default.default({
        holder: `${name}`,
        tools: {
          ...requiredTools,
          ...customTools(attribute.options, config),
          ...customToolsOther
        },
        onReady: () => {
          document?.querySelector('[data-item-name="image"]')?.remove();
          document?.querySelector('[data-item-name="attaches"]')?.remove();
        },
        data: !value || value === "" ? INITIAL_DATA : JSON.parse(value),
        async onChange(api, event) {
          setnewEditorInstance(api);
          api.saver.save().then((blocks) => {
            if (blocks?.blocks?.length > 0) {
              onChange({
                target: { name, value: JSON.stringify(blocks), type: "string" }
              });
            } else {
              onChange({
                target: { name, value: null, type: "string" }
              });
            }
          });
        },
        minHeight: config.minHeight ? config.minHeight : 80
      });
      ref.current = editor;
    }
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsx(SEditor, { id: `${name}` }),
    /* @__PURE__ */ jsxRuntime.jsx(
      MediaLibComponent,
      {
        isOpen: isMediaLibOpen,
        onChange: handleMediaLibChange,
        onToggle: mediaLibToggleFunc,
        allowedTypes: ["images"]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      MediaLibComponent,
      {
        isOpen: isMediaLibAttachesOpen,
        onChange: handleMediaLibAttachesChange,
        onToggle: mediaLibAttachesToggleFunc,
        allowedTypes: ["files"]
      }
    )
  ] });
};
EditorjsFieldNew = React.memo(EditorjsFieldNew);
const SEditor = styled__default.default.div`
  width: 100%;
`;
const EditorjsFieldNew$1 = EditorjsFieldNew;
const SStyleWrapper = styled__default.default(designSystem.Box)`
  width: 100%;
  .codex-editor__redactor {
    color: ${({ theme }) => theme.colors.neutral800};
  }
  .ce-toolbox__button {
    color: ${({ theme }) => theme.colors.neutral800};
    &:hover {
      color: ${({ theme }) => theme.colors.neutral150};
      background-color: ${({ theme }) => theme.colors.neutral900};
    }
  }
  .ce-toolbar__plus,
  .ce-toolbar__settings-btn {
    color: ${({ theme }) => theme.colors.neutral800};
    background-color: ${({ theme }) => theme.colors.neutral100};
    &:hover {
      color: ${({ theme }) => theme.colors.neutral150};
      background-color: ${({ theme }) => theme.colors.neutral900};
    }
  }
  .codex-editor {
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.colors.neutral0};
  }
  &.error .codex-editor {
    border-color: ${({ theme }) => theme.colors.danger700};
  }
  .ce-block--selected {
    .ce-block__content {
      background: ${({ theme }) => theme.colors.neutral100};
    }
  }

  .cdx-input {
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.neutral800};
    line-height: 1.6;
    ::placeholder {
      color: ${({ theme }) => theme.colors.neutral500};
      opacity: 1;
    }
    &:focus-within,
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.primary600};
      box-shadow: ${({ theme }) => theme.colors.primary600} 0px 0px 0px 2px;
    }
  }

  .codex-editor {
    padding: 16px;
    font-size: 1rem;
    a {
      color: ${({ theme }) => theme.colors.secondary500};
      &:hover {
        color: ${({ theme }) => theme.colors.secondary700};
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
    color: ${({ theme }) => theme.colors.neutral800};
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
      background: ${({ theme }) => theme.colors.neutral0};
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      .cdx-attaches__title {
        color: ${({ theme }) => theme.colors.neutral800};
      }
      .cdx-attaches__size {
        color: ${({ theme }) => theme.colors.neutral500};
      }
      .cdx-attaches__download-button {
        background: ${({ theme }) => theme.colors.neutral100};
        color: ${({ theme }) => theme.colors.neutral800};
      }
    }
  }

  // * link-tool styles
  .link-tool {
    .link-tool__content {
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: none;
      background: transparent;
      color: ${({ theme }) => theme.colors.neutral800}!important;
      transition: none;
      transition: all 0.05s ease-in-out;
      .link-tool__title {
        transition: all 0.05s ease-in-out;
      }
      &:hover {
        outline: ${({ theme }) => theme.colors.primary500} solid 2px;
        border-color: ${({ theme }) => theme.colors.primary500};
        .link-tool__title {
          color: ${({ theme }) => theme.colors.primary500}!important;
        }
      }
      .link-tool__anchor {
        color: ${({ theme }) => theme.colors.neutral700};
      }
    }
    .link-tool__progress {
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      border-radius: ${({ theme }) => theme.borderRadius};
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
        background: ${({ theme }) => theme.colors.primary500};
        border-color: ${({ theme }) => theme.colors.primary500};
      }
    }
  }

  .cdx-warning {
    &:before {
      background-color: #fff;
      background-position: center;
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }

  .ce-code .cdx-input,
  .ce-rawtool .cdx-input {
    color: ${({ theme }) => theme.colors.neutral800};
    background: ${({ theme }) => theme.colors.neutral100};
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
  }
`;
const Editorjs = React__namespace.default.forwardRef(
  ({
    name,
    description,
    intlLabel,
    onChange,
    value,
    disabled,
    attribute,
    labelAction,
    placeholder,
    error
  }, ref) => {
    const { formatMessage } = reactIntl.useIntl();
    const { config } = usePluginConfig();
    return /* @__PURE__ */ jsxRuntime.jsx(SStyleWrapper, { className: error !== "" ? "error" : null, children: config ? /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Field,
      {
        id: name,
        name,
        hint: description && formatMessage(description),
        required: attribute.required,
        error,
        children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Stack, { spacing: 1, children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.FieldLabel, { children: formatMessage(intlLabel) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            EditorjsFieldNew$1,
            {
              intlLabel,
              onChange,
              attribute,
              name,
              description,
              disabled,
              error,
              labelAction,
              required: attribute.required,
              value,
              placeholder,
              config
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.FieldHint, {}),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.FieldError, {})
        ] })
      }
    ) : null });
  }
);
exports.Editorjs = Editorjs;
//# sourceMappingURL=Editorjs-641aac5d.js.map
