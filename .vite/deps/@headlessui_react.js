import {
  clsx_default
} from "./chunk-2KHBIA62.js";
import {
  autoUpdate,
  detectOverflow,
  evaluate,
  flip,
  floor,
  getComputedStyle as getComputedStyle2,
  isElement,
  max,
  min,
  offset,
  round,
  shift,
  size,
  useFloating
} from "./chunk-OOCVEDOZ.js";
import {
  require_react_dom
} from "./chunk-2P3ERJ6G.js";
import {
  require_react
} from "./chunk-N4N5IM6X.js";
import {
  __commonJS,
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js
var require_use_sync_external_store_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js"(exports) {
    "use strict";
    (function() {
      function is(x13, y11) {
        return x13 === y11 && (0 !== x13 || 1 / x13 === 1 / y11) || x13 !== x13 && y11 !== y11;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React3 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React3.useSyncExternalStore, useRef4 = React3.useRef, useEffect6 = React3.useEffect, useMemo2 = React3.useMemo, useDebugValue = React3.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef4(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo2(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect6(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_with_selector_development();
    }
  }
});

// node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var import_react = __toESM(require_react(), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react.default).useLayoutEffect : () => {
};

// node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var import_react2 = __toESM(require_react(), 1);
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = (0, import_react2.useRef)(null);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return (0, import_react2.useCallback)((...args) => {
    const f24 = ref.current;
    return f24 === null || f24 === void 0 ? void 0 : f24(...args);
  }, []);
}

// node_modules/@react-aria/utils/dist/useValueEffect.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useId.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var import_react4 = __toESM(require_react(), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $b5e257d569688ac6$var$SSRContext = (0, import_react4.default).createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = (0, import_react4.default).createContext(false);
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled2 = false) {
  let ctx = (0, import_react4.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react4.useRef)(null);
  if (ref.current === null && !isDisabled2) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react4.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react4.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM && true) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react4.default).useId();
  let [didSSR] = (0, import_react4.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react4.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react4.default)["useSyncExternalStore"] === "function") return (0, import_react4.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (0, import_react4.useContext)($b5e257d569688ac6$var$IsSSRContext);
}

// node_modules/@react-aria/utils/dist/useId.mjs
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $bdb11010cef70236$export$d41a04c74483c6ef = /* @__PURE__ */ new Map();
var $bdb11010cef70236$var$registry;
if (typeof FinalizationRegistry !== "undefined") $bdb11010cef70236$var$registry = new FinalizationRegistry((heldValue) => {
  $bdb11010cef70236$export$d41a04c74483c6ef.delete(heldValue);
});
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB) return idA;
  let setIdsA = $bdb11010cef70236$export$d41a04c74483c6ef.get(idA);
  if (setIdsA) {
    setIdsA.forEach((ref) => ref.current = idB);
    return idB;
  }
  let setIdsB = $bdb11010cef70236$export$d41a04c74483c6ef.get(idB);
  if (setIdsB) {
    setIdsB.forEach((ref) => ref.current = idA);
    return idA;
  }
  return idB;
}

// node_modules/@react-aria/utils/dist/chain.mjs
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks) if (typeof callback === "function") callback(...args);
  };
}

// node_modules/@react-aria/utils/dist/domHelpers.mjs
var $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
var $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el) return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
  return doc.defaultView || window;
};
function $431fbd86ca7dc216$var$isNode(value) {
  return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
}
function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
  return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
}

// node_modules/@react-stately/flags/dist/import.mjs
var $f4e2df6bd15f8569$var$_shadowDOM = false;
function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
  return $f4e2df6bd15f8569$var$_shadowDOM;
}

// node_modules/@react-aria/utils/dist/DOMFunctions.mjs
function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
  if (!(0, $f4e2df6bd15f8569$export$98658e8c59125e6a)()) return otherNode && node ? node.contains(otherNode) : false;
  if (!node || !otherNode) return false;
  let currentNode = otherNode;
  while (currentNode !== null) {
    if (currentNode === node) return true;
    if (currentNode.tagName === "SLOT" && currentNode.assignedSlot)
      currentNode = currentNode.assignedSlot.parentNode;
    else if ((0, $431fbd86ca7dc216$export$af51f0f06c0f328a)(currentNode))
      currentNode = currentNode.host;
    else currentNode = currentNode.parentNode;
  }
  return false;
}
var $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document) => {
  var _activeElement_shadowRoot;
  if (!(0, $f4e2df6bd15f8569$export$98658e8c59125e6a)()) return doc.activeElement;
  let activeElement2 = doc.activeElement;
  while (activeElement2 && "shadowRoot" in activeElement2 && ((_activeElement_shadowRoot = activeElement2.shadowRoot) === null || _activeElement_shadowRoot === void 0 ? void 0 : _activeElement_shadowRoot.activeElement)) activeElement2 = activeElement2.shadowRoot.activeElement;
  return activeElement2;
};
function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
  if ((0, $f4e2df6bd15f8569$export$98658e8c59125e6a)() && event.target.shadowRoot) {
    if (event.composedPath) return event.composedPath()[0];
  }
  return event.target;
}

// node_modules/@react-aria/utils/dist/mergeProps.mjs
function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
  let result = {
    ...args[0]
  };
  for (let i18 = 1; i18 < args.length; i18++) {
    let props = args[i18];
    for (let key in props) {
      let a27 = result[key];
      let b11 = props[key];
      if (typeof a27 === "function" && typeof b11 === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(a27, b11);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a27 === "string" && typeof b11 === "string") result[key] = (0, clsx_default)(a27, b11);
      else if (key === "id" && a27 && b11) result.id = (0, $bdb11010cef70236$export$cd8c9cb68f842629)(a27, b11);
      else result[key] = b11 !== void 0 ? b11 : a27;
    }
  }
  return result;
}

// node_modules/@react-aria/utils/dist/mergeRefs.mjs
function $5dc95899b306f630$export$c9058316764c140e(...refs) {
  if (refs.length === 1 && refs[0]) return refs[0];
  return (value) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup2 = $5dc95899b306f630$var$setRef(ref, value);
      hasCleanup || (hasCleanup = typeof cleanup2 == "function");
      return cleanup2;
    });
    if (hasCleanup) return () => {
      cleanups.forEach((cleanup2, i18) => {
        if (typeof cleanup2 === "function") cleanup2();
        else $5dc95899b306f630$var$setRef(refs[i18], null);
      });
    };
  };
}
function $5dc95899b306f630$var$setRef(ref, value) {
  if (typeof ref === "function") return ref(value);
  else if (ref != null) ref.current = value;
}

// node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
    preventScroll: true
  });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

// node_modules/@react-aria/utils/dist/platform.mjs
function $c87311424ea30a05$var$testUserAgent(re5) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null) return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re5.test(brand.brand))) || re5.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re5) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re5.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
  if (false) return fn;
  let res = null;
  return () => {
    if (res == null) res = fn();
    return res;
  };
}
var $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
var $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
var $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
var $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});
var $c87311424ea30a05$export$e1865c3bedcd822b = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
});
var $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
var $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
var $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
var $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});

// node_modules/@react-aria/utils/dist/openLink.mjs
var import_react6 = __toESM(require_react(), 1);
var $ea8dcbcb9ea1b556$var$RouterContext = (0, import_react6.createContext)({
  isNative: true,
  open: $ea8dcbcb9ea1b556$var$openSyntheticLink,
  useHref: (href) => href
});
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ((0, $c87311424ea30a05$export$9ac100e40613ea10)()) metaKey = true;
    else ctrlKey = true;
  }
  let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
  if (target instanceof HTMLAnchorElement) open(target);
  else if (target.hasAttribute("data-href")) {
    let link = document.createElement("a");
    link.href = target.getAttribute("data-href");
    if (target.hasAttribute("data-target")) link.target = target.getAttribute("data-target");
    if (target.hasAttribute("data-rel")) link.rel = target.getAttribute("data-rel");
    if (target.hasAttribute("data-download")) link.download = target.getAttribute("data-download");
    if (target.hasAttribute("data-ping")) link.ping = target.getAttribute("data-ping");
    if (target.hasAttribute("data-referrer-policy")) link.referrerPolicy = target.getAttribute("data-referrer-policy");
    target.appendChild(link);
    open(link);
    target.removeChild(link);
  }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
  $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link) => $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}

// node_modules/@react-aria/utils/dist/runAfterTransition.mjs
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined") return;
  function isTransitionEvent(event) {
    return "propertyName" in event;
  }
  let onTransitionStart = (e8) => {
    if (!isTransitionEvent(e8) || !e8.target) return;
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e8.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e8.target, transitions);
      e8.target.addEventListener("transitioncancel", onTransitionEnd, {
        once: true
      });
    }
    transitions.add(e8.propertyName);
  };
  let onTransitionEnd = (e8) => {
    if (!isTransitionEvent(e8) || !e8.target) return;
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e8.target);
    if (!properties) return;
    properties.delete(e8.propertyName);
    if (properties.size === 0) {
      e8.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e8.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks) cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
  else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$var$cleanupDetachedElements() {
  for (const [eventTarget] of $bbed8b41f857bcc0$var$transitionsByElement)
    if ("isConnected" in eventTarget && !eventTarget.isConnected) $bbed8b41f857bcc0$var$transitionsByElement.delete(eventTarget);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
  requestAnimationFrame(() => {
    $bbed8b41f857bcc0$var$cleanupDetachedElements();
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
    else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
  });
}

// node_modules/@react-aria/utils/dist/useDrag1D.mjs
var import_react7 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
var import_react8 = __toESM(require_react(), 1);
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, import_react8.useRef)(/* @__PURE__ */ new Map());
  let addGlobalListener = (0, import_react8.useCallback)((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, fn, options);
  }, []);
  let removeGlobalListener = (0, import_react8.useCallback)((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react8.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react8.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}

// node_modules/@react-aria/utils/dist/useObjectRef.mjs
var import_react9 = __toESM(require_react(), 1);
function $df56164dff5785e2$export$4338b53315abf666(ref) {
  const objRef = (0, import_react9.useRef)(null);
  const cleanupRef = (0, import_react9.useRef)(void 0);
  const refEffect = (0, import_react9.useCallback)((instance) => {
    if (typeof ref === "function") {
      const refCallback = ref;
      const refCleanup = refCallback(instance);
      return () => {
        if (typeof refCleanup === "function") refCleanup();
        else refCallback(null);
      };
    } else if (ref) {
      ref.current = instance;
      return () => {
        ref.current = null;
      };
    }
  }, [
    ref
  ]);
  return (0, import_react9.useMemo)(() => ({
    get current() {
      return objRef.current;
    },
    set current(value) {
      objRef.current = value;
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = void 0;
      }
      if (value != null) cleanupRef.current = refEffect(value);
    }
  }), [
    refEffect
  ]);
}

// node_modules/@react-aria/utils/dist/useUpdateEffect.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useUpdateLayoutEffect.mjs
var import_react11 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var import_react12 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useSyncRef.mjs
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        if (context.ref) context.ref.current = null;
      };
    }
  });
}

// node_modules/@react-aria/utils/dist/useViewportSize.mjs
var import_react13 = __toESM(require_react(), 1);
var $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;

// node_modules/@react-aria/utils/dist/useDescription.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useEvent.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted) return true;
  if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
  return !(0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}

// node_modules/@react-aria/utils/dist/useDeepMemo.mjs
var import_react16 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useFormReset.mjs
var import_react17 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useLoadMore.mjs
var import_react18 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useLoadMoreSentinel.mjs
var import_react19 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/inertValue.mjs
var import_react20 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/animation.mjs
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react21 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/isFocusable.mjs
var $b4b717babfbb907b$var$focusableElements = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])'
];
var $b4b717babfbb907b$var$FOCUSABLE_ELEMENT_SELECTOR = $b4b717babfbb907b$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$b4b717babfbb907b$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
var $b4b717babfbb907b$var$TABBABLE_ELEMENT_SELECTOR = $b4b717babfbb907b$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $b4b717babfbb907b$export$4c063cf1350e6fed(element) {
  return element.matches($b4b717babfbb907b$var$FOCUSABLE_ELEMENT_SELECTOR);
}

// node_modules/@react-stately/utils/dist/useControlledState.mjs
var import_react22 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/utils.mjs
var import_react23 = __toESM(require_react(), 1);
function $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent) {
  let event = nativeEvent;
  event.nativeEvent = nativeEvent;
  event.isDefaultPrevented = () => event.defaultPrevented;
  event.isPropagationStopped = () => event.cancelBubble;
  event.persist = () => {
  };
  return event;
}
function $8a9cb279dc87e130$export$c2b7abe5d61ec696(event, target) {
  Object.defineProperty(event, "target", {
    value: target
  });
  Object.defineProperty(event, "currentTarget", {
    value: target
  });
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = (0, import_react23.useRef)({
    isFocused: false,
    observer: null
  });
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  let dispatchBlur = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e8) => {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e8);
  });
  return (0, import_react23.useCallback)((e8) => {
    if (e8.target instanceof HTMLButtonElement || e8.target instanceof HTMLInputElement || e8.target instanceof HTMLTextAreaElement || e8.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e8.target;
      let onBlurHandler = (e9) => {
        stateRef.current.isFocused = false;
        if (target.disabled) {
          let event = $8a9cb279dc87e130$export$525bc4921d56d4a(e9);
          dispatchBlur(event);
        }
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}
var $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
function $8a9cb279dc87e130$export$cabe61c495ee3649(target) {
  while (target && !(0, $b4b717babfbb907b$export$4c063cf1350e6fed)(target)) target = target.parentElement;
  let window2 = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(target);
  let activeElement2 = window2.document.activeElement;
  if (!activeElement2 || activeElement2 === target) return;
  $8a9cb279dc87e130$export$fda7da73ab5d4c48 = true;
  let isRefocusing = false;
  let onBlur = (e8) => {
    if (e8.target === activeElement2 || isRefocusing) e8.stopImmediatePropagation();
  };
  let onFocusOut = (e8) => {
    if (e8.target === activeElement2 || isRefocusing) {
      e8.stopImmediatePropagation();
      if (!target && !isRefocusing) {
        isRefocusing = true;
        (0, $7215afc6de606d6b$export$de79e2c695e052f3)(activeElement2);
        cleanup2();
      }
    }
  };
  let onFocus = (e8) => {
    if (e8.target === target || isRefocusing) e8.stopImmediatePropagation();
  };
  let onFocusIn = (e8) => {
    if (e8.target === target || isRefocusing) {
      e8.stopImmediatePropagation();
      if (!isRefocusing) {
        isRefocusing = true;
        (0, $7215afc6de606d6b$export$de79e2c695e052f3)(activeElement2);
        cleanup2();
      }
    }
  };
  window2.addEventListener("blur", onBlur, true);
  window2.addEventListener("focusout", onFocusOut, true);
  window2.addEventListener("focusin", onFocusIn, true);
  window2.addEventListener("focus", onFocus, true);
  let cleanup2 = () => {
    cancelAnimationFrame(raf);
    window2.removeEventListener("blur", onBlur, true);
    window2.removeEventListener("focusout", onFocusOut, true);
    window2.removeEventListener("focusin", onFocusIn, true);
    window2.removeEventListener("focus", onFocus, true);
    $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
    isRefocusing = false;
  };
  let raf = requestAnimationFrame(cleanup2);
  return cleanup2;
}

// node_modules/@react-aria/interactions/dist/textSelection.mjs
var $14c0b72509d70225$var$state = "default";
var $14c0b72509d70225$var$savedUserSelect = "";
var $14c0b72509d70225$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state === "default") {
      const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
      $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style[property]);
    target.style[property] = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state !== "disabled") return;
    $14c0b72509d70225$var$state = "restoring";
    setTimeout(() => {
      (0, $bbed8b41f857bcc0$export$24490316f764c430)(() => {
        if ($14c0b72509d70225$var$state === "restoring") {
          const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
          $14c0b72509d70225$var$savedUserSelect = "";
          $14c0b72509d70225$var$state = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
      let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
      let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
      if (target.style[property] === "none") target.style[property] = targetOldUserSelect;
      if (target.getAttribute("style") === "") target.removeAttribute("style");
      $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
  }
}

// node_modules/@react-aria/interactions/dist/context.mjs
var import_react24 = __toESM(require_react(), 1);
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, import_react24.default).createContext({
  register: () => {
  }
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";

// node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js
function _class_apply_descriptor_get(receiver, descriptor) {
  if (descriptor.get) return descriptor.get.call(receiver);
  return descriptor.value;
}

// node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js
function _class_extract_field_descriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}

// node_modules/@swc/helpers/esm/_class_private_field_get.js
function _class_private_field_get(receiver, privateMap) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
  return _class_apply_descriptor_get(receiver, descriptor);
}

// node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_init.js
function _class_private_field_init(obj, privateMap, value) {
  _check_private_redeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

// node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js
function _class_apply_descriptor_set(receiver, descriptor, value) {
  if (descriptor.set) descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_set.js
function _class_private_field_set(receiver, privateMap, value) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
  _class_apply_descriptor_set(receiver, descriptor, value);
  return value;
}

// node_modules/@react-aria/interactions/dist/usePress.mjs
var import_react_dom2 = __toESM(require_react_dom(), 1);
var import_react25 = __toESM(require_react(), 1);
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = (0, import_react25.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  if (context) {
    let { register, ...contextProps } = context;
    props = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(contextProps, props);
    register();
  }
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, props.ref);
  return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /* @__PURE__ */ new WeakMap();
var $f6c31cce2adf654f$var$PressEvent = class {
  continuePropagation() {
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
  }
  get shouldStopPropagation() {
    return (0, _class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
  }
  constructor(type, pointerType, originalEvent, state) {
    (0, _class_private_field_init)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
      writable: true,
      value: void 0
    });
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
    var _state_target;
    let currentTarget = (_state_target = state === null || state === void 0 ? void 0 : state.target) !== null && _state_target !== void 0 ? _state_target : originalEvent.currentTarget;
    const rect = currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.getBoundingClientRect();
    let x13, y11 = 0;
    let clientX, clientY = null;
    if (originalEvent.clientX != null && originalEvent.clientY != null) {
      clientX = originalEvent.clientX;
      clientY = originalEvent.clientY;
    }
    if (rect) {
      if (clientX != null && clientY != null) {
        x13 = clientX - rect.left;
        y11 = clientY - rect.top;
      } else {
        x13 = rect.width / 2;
        y11 = rect.height / 2;
      }
    }
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
    this.x = x13;
    this.y = y11;
  }
};
var $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
var $f6c31cce2adf654f$var$STYLE_ID = "react-aria-pressable-style";
var $f6c31cce2adf654f$var$PRESSABLE_ATTRIBUTE = "data-react-aria-pressable";
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
  let { onPress, onPressChange, onPressStart, onPressEnd, onPressUp, onClick, isDisabled: isDisabled2, isPressed: isPressedProp, preventFocusOnPress, shouldCancelOnPointerExit, allowTextSelectionOnPress, ref: domRef, ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let [isPressed, setPressed] = (0, import_react25.useState)(false);
  let ref = (0, import_react25.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null,
    disposables: []
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let triggerPressStart = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled2 || state.didFirePressStart) return false;
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(true);
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  });
  let triggerPressEnd = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType, wasPressed = true) => {
    let state = ref.current;
    if (!state.didFirePressStart) return false;
    state.didFirePressStart = false;
    state.isTriggeringEvent = true;
    let shouldStopPropagation = true;
    if (onPressEnd) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
      onPressEnd(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(false);
    setPressed(false);
    if (onPress && wasPressed && !isDisabled2) {
      let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
      onPress(event);
      shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
    }
    state.isTriggeringEvent = false;
    return shouldStopPropagation;
  });
  let triggerPressUp = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled2) return false;
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  });
  let cancel = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e8) => {
    let state = ref.current;
    if (state.isPressed && state.target) {
      if (state.didFirePressStart && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType, false);
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
      for (let dispose of state.disposables) dispose();
      state.disposables = [];
    }
  });
  let cancelOnPointerExit = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e8) => {
    if (shouldCancelOnPointerExit) cancel(e8);
  });
  let triggerClick = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e8) => {
    onClick === null || onClick === void 0 ? void 0 : onClick(e8);
  });
  let triggerSyntheticClick = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e8, target) => {
    if (onClick) {
      let event = new MouseEvent("click", e8);
      (0, $8a9cb279dc87e130$export$c2b7abe5d61ec696)(event, target);
      onClick((0, $8a9cb279dc87e130$export$525bc4921d56d4a)(event));
    }
  });
  let pressProps = (0, import_react25.useMemo)(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e8) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e8.nativeEvent, e8.currentTarget) && (0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) {
          var _state_metaKeyEvents;
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard((0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent), e8.key)) e8.preventDefault();
          let shouldStopPropagation = true;
          if (!state.isPressed && !e8.repeat) {
            state.target = e8.currentTarget;
            state.isPressed = true;
            state.pointerType = "keyboard";
            shouldStopPropagation = triggerPressStart(e8, "keyboard");
            let originalTarget = e8.currentTarget;
            let pressUp = (e9) => {
              if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e9, originalTarget) && !e9.repeat && (0, $d4ee10de306f2510$export$4282f70798064fe0)(originalTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e9)) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e9), "keyboard");
            };
            addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.currentTarget), "keyup", (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(pressUp, onKeyUp), true);
          }
          if (shouldStopPropagation) e8.stopPropagation();
          if (e8.metaKey && (0, $c87311424ea30a05$export$9ac100e40613ea10)()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e8.key, e8.nativeEvent);
        } else if (e8.key === "Meta") state.metaKeyEvents = /* @__PURE__ */ new Map();
      },
      onClick(e8) {
        if (e8 && !(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) return;
        if (e8 && e8.button === 0 && !state.isTriggeringEvent && !(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled2) e8.preventDefault();
          if (!state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (0, $6a7db85432448f7f$export$60278871457622de)(e8.nativeEvent))) {
            let stopPressStart = triggerPressStart(e8, "virtual");
            let stopPressUp = triggerPressUp(e8, "virtual");
            let stopPressEnd = triggerPressEnd(e8, "virtual");
            triggerClick(e8);
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          } else if (state.isPressed && state.pointerType !== "keyboard") {
            let pointerType = state.pointerType || e8.nativeEvent.pointerType || "virtual";
            let stopPressUp = triggerPressUp($f6c31cce2adf654f$var$createEvent(e8.currentTarget, e8), pointerType);
            let stopPressEnd = triggerPressEnd($f6c31cce2adf654f$var$createEvent(e8.currentTarget, e8), pointerType, true);
            shouldStopPropagation = stopPressUp && stopPressEnd;
            state.isOverTarget = false;
            triggerClick(e8);
            cancel(e8);
          }
          state.ignoreEmulatedMouseEvents = false;
          if (shouldStopPropagation) e8.stopPropagation();
        }
      }
    };
    let onKeyUp = (e8) => {
      var _state_metaKeyEvents;
      if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e8, state.target)) {
        var _state_metaKeyEvents1;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard((0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8), e8.key)) e8.preventDefault();
        let target = (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8);
        let wasPressed = (0, $d4ee10de306f2510$export$4282f70798064fe0)(state.target, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8));
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), "keyboard", wasPressed);
        if (wasPressed) triggerSyntheticClick(e8, state.target);
        removeAllGlobalListeners();
        if (e8.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && (0, $d4ee10de306f2510$export$4282f70798064fe0)(state.target, target) && !e8[$f6c31cce2adf654f$var$LINK_CLICKED]) {
          e8[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
          (0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7)(state.target, e8, false);
        }
        state.isPressed = false;
        (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e8.key);
      } else if (e8.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
        var _state_target;
        let events = state.metaKeyEvents;
        state.metaKeyEvents = void 0;
        for (let event of events.values()) (_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e8) => {
        if (e8.button !== 0 || !(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) return;
        if ((0, $6a7db85432448f7f$export$29bf1b5f2c56cf63)(e8.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        state.pointerType = e8.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e8.pointerId;
          state.target = e8.currentTarget;
          if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
          shouldStopPropagation = triggerPressStart(e8, state.pointerType);
          let target = (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent);
          if ("releasePointerCapture" in target) target.releasePointerCapture(e8.pointerId);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.currentTarget), "pointercancel", onPointerCancel, false);
        }
        if (shouldStopPropagation) e8.stopPropagation();
      };
      pressProps2.onMouseDown = (e8) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) return;
        if (e8.button === 0) {
          if (preventFocusOnPress) {
            let dispose = (0, $8a9cb279dc87e130$export$cabe61c495ee3649)(e8.target);
            if (dispose) state.disposables.push(dispose);
          }
          e8.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e8) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent)) || state.pointerType === "virtual") return;
        if (e8.button === 0 && !state.isPressed) triggerPressUp(e8, state.pointerType || e8.pointerType);
      };
      pressProps2.onPointerEnter = (e8) => {
        if (e8.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = true;
          triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType);
        }
      };
      pressProps2.onPointerLeave = (e8) => {
        if (e8.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType, false);
          cancelOnPointerExit(e8);
        }
      };
      let onPointerUp = (e8) => {
        if (e8.pointerId === state.activePointerId && state.isPressed && e8.button === 0 && state.target) {
          if ((0, $d4ee10de306f2510$export$4282f70798064fe0)(state.target, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8)) && state.pointerType != null) {
            let clicked = false;
            let timeout = setTimeout(() => {
              if (state.isPressed && state.target instanceof HTMLElement) {
                if (clicked) cancel(e8);
                else {
                  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(state.target);
                  state.target.click();
                }
              }
            }, 80);
            addGlobalListener(e8.currentTarget, "click", () => clicked = true, true);
            state.disposables.push(() => clearTimeout(timeout));
          } else cancel(e8);
          state.isOverTarget = false;
        }
      };
      let onPointerCancel = (e8) => {
        cancel(e8);
      };
      pressProps2.onDragStart = (e8) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) return;
        cancel(e8);
      };
    } else if (false) {
      pressProps2.onMouseDown = (e8) => {
        if (e8.button !== 0 || !(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) return;
        if (state.ignoreEmulatedMouseEvents) {
          e8.stopPropagation();
          return;
        }
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e8.currentTarget;
        state.pointerType = (0, $6a7db85432448f7f$export$60278871457622de)(e8.nativeEvent) ? "virtual" : "mouse";
        let shouldStopPropagation = (0, import_react_dom2.flushSync)(() => triggerPressStart(e8, state.pointerType));
        if (shouldStopPropagation) e8.stopPropagation();
        if (preventFocusOnPress) {
          let dispose = (0, $8a9cb279dc87e130$export$cabe61c495ee3649)(e8.target);
          if (dispose) state.disposables.push(dispose);
        }
        addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.currentTarget), "mouseup", onMouseUp, false);
      };
      pressProps2.onMouseEnter = (e8) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = true;
          shouldStopPropagation = triggerPressStart(e8, state.pointerType);
        }
        if (shouldStopPropagation) e8.stopPropagation();
      };
      pressProps2.onMouseLeave = (e8) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e8, state.pointerType, false);
          cancelOnPointerExit(e8);
        }
        if (shouldStopPropagation) e8.stopPropagation();
      };
      pressProps2.onMouseUp = (e8) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) return;
        if (!state.ignoreEmulatedMouseEvents && e8.button === 0 && !state.isPressed) triggerPressUp(e8, state.pointerType || "mouse");
      };
      let onMouseUp = (e8) => {
        if (e8.button !== 0) return;
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if (state.target && state.target.contains(e8.target) && state.pointerType != null) ;
        else cancel(e8);
        state.isOverTarget = false;
      };
      pressProps2.onTouchStart = (e8) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) return;
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e8.nativeEvent);
        if (!touch) return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e8.currentTarget;
        state.pointerType = "touch";
        if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
        let shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType);
        if (shouldStopPropagation) e8.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8.currentTarget), "scroll", onScroll, true);
      };
      pressProps2.onTouchMove = (e8) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) return;
        if (!state.isPressed) {
          e8.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e8.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e8.currentTarget)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType);
          }
        } else if (state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType, false);
          cancelOnPointerExit($f6c31cce2adf654f$var$createTouchEvent(state.target, e8));
        }
        if (shouldStopPropagation) e8.stopPropagation();
      };
      pressProps2.onTouchEnd = (e8) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) return;
        if (!state.isPressed) {
          e8.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e8.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e8.currentTarget) && state.pointerType != null) {
          triggerPressUp($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType);
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType);
          triggerSyntheticClick(e8.nativeEvent, state.target);
        } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType, false);
        if (shouldStopPropagation) e8.stopPropagation();
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (state.target && !allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        removeAllGlobalListeners();
      };
      pressProps2.onTouchCancel = (e8) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) return;
        e8.stopPropagation();
        if (state.isPressed) cancel($f6c31cce2adf654f$var$createTouchEvent(state.target, e8));
      };
      let onScroll = (e8) => {
        if (state.isPressed && (0, $d4ee10de306f2510$export$4282f70798064fe0)((0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8), state.target)) cancel({
          currentTarget: state.target,
          shiftKey: false,
          ctrlKey: false,
          metaKey: false,
          altKey: false
        });
      };
      pressProps2.onDragStart = (e8) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e8.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent))) return;
        cancel(e8);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled2,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancel,
    cancelOnPointerExit,
    triggerPressEnd,
    triggerPressStart,
    triggerPressUp,
    triggerClick,
    triggerSyntheticClick
  ]);
  (0, import_react25.useEffect)(() => {
    if (!domRef || false) return;
    const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(domRef.current);
    if (!ownerDocument || !ownerDocument.head || ownerDocument.getElementById($f6c31cce2adf654f$var$STYLE_ID)) return;
    const style = ownerDocument.createElement("style");
    style.id = $f6c31cce2adf654f$var$STYLE_ID;
    style.textContent = `
@layer {
  [${$f6c31cce2adf654f$var$PRESSABLE_ATTRIBUTE}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim();
    ownerDocument.head.prepend(style);
  }, [
    domRef
  ]);
  (0, import_react25.useEffect)(() => {
    let state = ref.current;
    return () => {
      var _state_target;
      if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)((_state_target = state.target) !== null && _state_target !== void 0 ? _state_target : void 0);
      for (let dispose of state.disposables) dispose();
      state.disposables = [];
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, pressProps, {
      [$f6c31cce2adf654f$var$PRESSABLE_ATTRIBUTE]: true
    })
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
  !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$createEvent(target, e8) {
  let clientX = e8.clientX;
  let clientY = e8.clientY;
  return {
    currentTarget: target,
    shiftKey: e8.shiftKey,
    ctrlKey: e8.ctrlKey,
    metaKey: e8.metaKey,
    altKey: e8.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$shouldPreventDefaultUp(target) {
  if (target instanceof HTMLInputElement) return false;
  if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
  if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
  return true;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
  if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
  return $f6c31cce2adf654f$var$shouldPreventDefaultUp(target);
}
var $f6c31cce2adf654f$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}

// node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var import_react26 = __toESM(require_react(), 1);
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e8) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e8);
}
function $507fabe10e71c6fb$var$isValidKey(e8) {
  return !(e8.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea10)() && e8.altKey || e8.ctrlKey || e8.key === "Control" || e8.key === "Shift" || e8.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e8) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e8)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e8);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e8) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e8.type === "mousedown" || e8.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e8);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e8) {
  if ((0, $6a7db85432448f7f$export$60278871457622de)(e8)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e8) {
  if (e8.target === window || e8.target === document || (0, $8a9cb279dc87e130$export$fda7da73ab5d4c48) || !e8.isTrusted) return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e8);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  if (0, $8a9cb279dc87e130$export$fda7da73ab5d4c48) return;
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || typeof document === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element))) return;
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else if (false) {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else if (false) {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
  return $507fabe10e71c6fb$var$currentModality;
}
var $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e8) {
  let document1 = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e8 === null || e8 === void 0 ? void 0 : e8.target);
  const IHTMLInputElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).KeyboardEvent : KeyboardEvent;
  isTextInput = isTextInput || document1.activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(document1.activeElement.type) || document1.activeElement instanceof IHTMLTextAreaElement || document1.activeElement instanceof IHTMLElement && document1.activeElement.isContentEditable;
  return !(isTextInput && modality === "keyboard" && e8 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e8.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  (0, import_react26.useEffect)(() => {
    let handler = (modality, e8) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e8)) return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}

// node_modules/@react-aria/interactions/dist/focusSafely.mjs
function $3ad3f6e1647bc98d$export$80f3e147d781571c(element) {
  const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  const activeElement2 = (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
  if ((0, $507fabe10e71c6fb$export$630ff653c5ada6a9)() === "virtual") {
    let lastFocusedElement = activeElement2;
    (0, $bbed8b41f857bcc0$export$24490316f764c430)(() => {
      if ((0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument) === lastFocusedElement && element.isConnected) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(element);
    });
  } else (0, $7215afc6de606d6b$export$de79e2c695e052f3)(element);
}

// node_modules/@react-aria/interactions/dist/useFocus.mjs
var import_react27 = __toESM(require_react(), 1);
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled: isDisabled2, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = (0, import_react27.useCallback)((e8) => {
    if (e8.target === e8.currentTarget) {
      if (onBlurProp) onBlurProp(e8);
      if (onFocusChange) onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  const onFocus = (0, import_react27.useCallback)((e8) => {
    const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.target);
    const activeElement2 = ownerDocument ? (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument) : (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)();
    if (e8.target === e8.currentTarget && activeElement2 === (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent)) {
      if (onFocusProp) onFocusProp(e8);
      if (onFocusChange) onFocusChange(true);
      onSyntheticFocus(e8);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled2 && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled2 && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}

// node_modules/@react-aria/interactions/dist/createEventHandler.mjs
function $93925083ecbb358c$export$48d1ea6320830260(handler) {
  if (!handler) return void 0;
  let shouldStopPropagation = true;
  return (e8) => {
    let event = {
      ...e8,
      preventDefault() {
        e8.preventDefault();
      },
      isDefaultPrevented() {
        return e8.isDefaultPrevented();
      },
      stopPropagation() {
        if (shouldStopPropagation && true) console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
        else shouldStopPropagation = true;
      },
      continuePropagation() {
        shouldStopPropagation = false;
      },
      isPropagationStopped() {
        return shouldStopPropagation;
      }
    };
    handler(event);
    if (shouldStopPropagation) e8.stopPropagation();
  };
}

// node_modules/@react-aria/interactions/dist/useKeyboard.mjs
function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyDown),
      onKeyUp: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyUp)
    }
  };
}

// node_modules/@react-aria/interactions/dist/useFocusable.mjs
var import_react28 = __toESM(require_react(), 1);
var $f645667febf57a63$export$f9762fab77588ecb = (0, import_react28.default).createContext(null);
function $f645667febf57a63$var$useFocusableContext(ref) {
  let context = (0, import_react28.useContext)($f645667febf57a63$export$f9762fab77588ecb) || {};
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, ref);
  let { ref: _10, ...otherProps } = context;
  return otherProps;
}
var $f645667febf57a63$export$13f3202a3e5ddd5 = (0, import_react28.default).forwardRef(function FocusableProvider(props, ref) {
  let { children, ...otherProps } = props;
  let objRef = (0, $df56164dff5785e2$export$4338b53315abf666)(ref);
  let context = {
    ...otherProps,
    ref: objRef
  };
  return (0, import_react28.default).createElement($f645667febf57a63$export$f9762fab77588ecb.Provider, {
    value: context
  }, children);
});
function $f645667febf57a63$export$4c014de7c8940b4c(props, domRef) {
  let { focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)(props);
  let { keyboardProps } = (0, $46d819fcbaf35654$export$8f71654801c2f7cd)(props);
  let interactions = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(focusProps, keyboardProps);
  let domProps = $f645667febf57a63$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  let autoFocusRef = (0, import_react28.useRef)(props.autoFocus);
  (0, import_react28.useEffect)(() => {
    if (autoFocusRef.current && domRef.current) (0, $3ad3f6e1647bc98d$export$80f3e147d781571c)(domRef.current);
    autoFocusRef.current = false;
  }, [
    domRef
  ]);
  let tabIndex = props.excludeFromTabOrder ? -1 : 0;
  if (props.isDisabled) tabIndex = void 0;
  return {
    focusableProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)({
      ...interactions,
      tabIndex
    }, interactionProps)
  };
}
var $f645667febf57a63$export$35a3bebf7ef2d934 = (0, import_react28.forwardRef)(({ children, ...props }, ref) => {
  ref = (0, $df56164dff5785e2$export$4338b53315abf666)(ref);
  let { focusableProps } = $f645667febf57a63$export$4c014de7c8940b4c(props, ref);
  let child = (0, import_react28.default).Children.only(children);
  (0, import_react28.useEffect)(() => {
    if (false) return;
    let el = ref.current;
    if (!el || !(el instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(el).Element)) {
      console.error("<Focusable> child must forward its ref to a DOM element.");
      return;
    }
    if (!props.isDisabled && !(0, $b4b717babfbb907b$export$4c063cf1350e6fed)(el)) {
      console.warn("<Focusable> child must be focusable. Please ensure the tabIndex prop is passed through.");
      return;
    }
    if (el.localName !== "button" && el.localName !== "input" && el.localName !== "select" && el.localName !== "textarea" && el.localName !== "a" && el.localName !== "area" && el.localName !== "summary" && el.localName !== "img" && el.localName !== "svg") {
      let role = el.getAttribute("role");
      if (!role) console.warn("<Focusable> child must have an interactive ARIA role.");
      else if (
        // https://w3c.github.io/aria/#widget_roles
        role !== "application" && role !== "button" && role !== "checkbox" && role !== "combobox" && role !== "gridcell" && role !== "link" && role !== "menuitem" && role !== "menuitemcheckbox" && role !== "menuitemradio" && role !== "option" && role !== "radio" && role !== "searchbox" && role !== "separator" && role !== "slider" && role !== "spinbutton" && role !== "switch" && role !== "tab" && role !== "tabpanel" && role !== "textbox" && role !== "treeitem" && // aria-describedby is also announced on these roles
        role !== "img" && role !== "meter" && role !== "progressbar"
      ) console.warn(`<Focusable> child must have an interactive ARIA role. Got "${role}".`);
    }
  }, [
    ref,
    props.isDisabled
  ]);
  let childRef = parseInt((0, import_react28.default).version, 10) < 19 ? child.ref : child.props.ref;
  return (0, import_react28.default).cloneElement(child, {
    ...(0, $3ef42575df84b30b$export$9d1611c77c2fe928)(focusableProps, child.props),
    // @ts-ignore
    ref: (0, $5dc95899b306f630$export$c9058316764c140e)(childRef, ref)
  });
});

// node_modules/@react-aria/interactions/dist/Pressable.mjs
var import_react29 = __toESM(require_react(), 1);
var $3b117e43dc0ca95d$export$27c701ed9e449e99 = (0, import_react29.default).forwardRef(({ children, ...props }, ref) => {
  ref = (0, $df56164dff5785e2$export$4338b53315abf666)(ref);
  let { pressProps } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
    ...props,
    ref
  });
  let { focusableProps } = (0, $f645667febf57a63$export$4c014de7c8940b4c)(props, ref);
  let child = (0, import_react29.default).Children.only(children);
  (0, import_react29.useEffect)(() => {
    if (false) return;
    let el = ref.current;
    if (!el || !(el instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(el).Element)) {
      console.error("<Pressable> child must forward its ref to a DOM element.");
      return;
    }
    if (!props.isDisabled && !(0, $b4b717babfbb907b$export$4c063cf1350e6fed)(el)) {
      console.warn("<Pressable> child must be focusable. Please ensure the tabIndex prop is passed through.");
      return;
    }
    if (el.localName !== "button" && el.localName !== "input" && el.localName !== "select" && el.localName !== "textarea" && el.localName !== "a" && el.localName !== "area" && el.localName !== "summary") {
      let role = el.getAttribute("role");
      if (!role) console.warn("<Pressable> child must have an interactive ARIA role.");
      else if (
        // https://w3c.github.io/aria/#widget_roles
        role !== "application" && role !== "button" && role !== "checkbox" && role !== "combobox" && role !== "gridcell" && role !== "link" && role !== "menuitem" && role !== "menuitemcheckbox" && role !== "menuitemradio" && role !== "option" && role !== "radio" && role !== "searchbox" && role !== "separator" && role !== "slider" && role !== "spinbutton" && role !== "switch" && role !== "tab" && role !== "textbox" && role !== "treeitem"
      ) console.warn(`<Pressable> child must have an interactive ARIA role. Got "${role}".`);
    }
  }, [
    ref,
    props.isDisabled
  ]);
  let childRef = parseInt((0, import_react29.default).version, 10) < 19 ? child.ref : child.props.ref;
  return (0, import_react29.default).cloneElement(child, {
    ...(0, $3ef42575df84b30b$export$9d1611c77c2fe928)(pressProps, focusableProps, child.props),
    // @ts-ignore
    ref: (0, $5dc95899b306f630$export$c9058316764c140e)(childRef, ref)
  });
});

// node_modules/@react-aria/interactions/dist/PressResponder.mjs
var import_react30 = __toESM(require_react(), 1);
var $f1ab8c75478c6f73$export$3351871ee4b288b8 = (0, import_react30.default).forwardRef(({ children, ...props }, ref) => {
  let isRegistered = (0, import_react30.useRef)(false);
  let prevContext = (0, import_react30.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  ref = (0, $df56164dff5785e2$export$4338b53315abf666)(ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref));
  let context = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(prevContext || {}, {
    ...props,
    ref,
    register() {
      isRegistered.current = true;
      if (prevContext) prevContext.register();
    }
  });
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(prevContext, ref);
  (0, import_react30.useEffect)(() => {
    if (!isRegistered.current) {
      if (true) console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
      isRegistered.current = true;
    }
  }, []);
  return (0, import_react30.default).createElement((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
    value: context
  }, children);
});

// node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var import_react31 = __toESM(require_react(), 1);
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled: isDisabled2, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = (0, import_react31.useRef)({
    isFocusWithin: false
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let onBlur = (0, import_react31.useCallback)((e8) => {
    if (!e8.currentTarget.contains(e8.target)) return;
    if (state.current.isFocusWithin && !e8.currentTarget.contains(e8.relatedTarget)) {
      state.current.isFocusWithin = false;
      removeAllGlobalListeners();
      if (onBlurWithin) onBlurWithin(e8);
      if (onFocusWithinChange) onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state,
    removeAllGlobalListeners
  ]);
  let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  let onFocus = (0, import_react31.useCallback)((e8) => {
    if (!e8.currentTarget.contains(e8.target)) return;
    const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.target);
    const activeElement2 = (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
    if (!state.current.isFocusWithin && activeElement2 === (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e8.nativeEvent)) {
      if (onFocusWithin) onFocusWithin(e8);
      if (onFocusWithinChange) onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e8);
      let currentTarget = e8.currentTarget;
      addGlobalListener(ownerDocument, "focus", (e9) => {
        if (state.current.isFocusWithin && !(0, $d4ee10de306f2510$export$4282f70798064fe0)(currentTarget, e9.target)) {
          let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
            relatedTarget: e9.target
          });
          (0, $8a9cb279dc87e130$export$c2b7abe5d61ec696)(nativeEvent, currentTarget);
          let event = (0, $8a9cb279dc87e130$export$525bc4921d56d4a)(nativeEvent);
          onBlur(event);
        }
      }, {
        capture: true
      });
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus,
    addGlobalListener,
    onBlur
  ]);
  if (isDisabled2) return {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}

// node_modules/@react-aria/interactions/dist/useHover.mjs
var import_react32 = __toESM(require_react(), 1);
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
var $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e8) {
  if (e8.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined") return;
  if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
  else if (false) document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0) return;
    if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else if (false) document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled: isDisabled2 } = props;
  let [isHovered, setHovered] = (0, import_react32.useState)(false);
  let state = (0, import_react32.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react32.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let { hoverProps, triggerHoverEnd } = (0, import_react32.useMemo)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled2 || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(event.target), "pointerover", (e8) => {
        if (state.isHovered && state.target && !(0, $d4ee10de306f2510$export$4282f70798064fe0)(state.target, e8.target)) triggerHoverEnd2(e8, e8.pointerType);
      }, {
        capture: true
      });
      if (onHoverStart) onHoverStart({
        type: "hoverstart",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      let target = state.target;
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered || !target) return;
      state.isHovered = false;
      removeAllGlobalListeners();
      if (onHoverEnd) onHoverEnd({
        type: "hoverend",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e8) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e8.pointerType === "mouse") return;
        triggerHoverStart(e8, e8.pointerType);
      };
      hoverProps2.onPointerLeave = (e8) => {
        if (!isDisabled2 && e8.currentTarget.contains(e8.target)) triggerHoverEnd2(e8, e8.pointerType);
      };
    } else if (false) {
      hoverProps2.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps2.onMouseEnter = (e8) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e8, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps2.onMouseLeave = (e8) => {
        if (!isDisabled2 && e8.currentTarget.contains(e8.target)) triggerHoverEnd2(e8, "mouse");
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled2,
    state,
    addGlobalListener,
    removeAllGlobalListeners
  ]);
  (0, import_react32.useEffect)(() => {
    if (isDisabled2) triggerHoverEnd({
      currentTarget: state.target
    }, state.pointerType);
  }, [
    isDisabled2
  ]);
  return {
    hoverProps,
    isHovered
  };
}

// node_modules/@react-aria/interactions/dist/useInteractOutside.mjs
var import_react33 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useMove.mjs
var import_react34 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useScrollWheel.mjs
var import_react35 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useLongPress.mjs
var import_react36 = __toESM(require_react(), 1);

// node_modules/@react-aria/focus/dist/FocusScope.mjs
var import_react37 = __toESM(require_react(), 1);
var $9bf71ea28793e738$var$FocusContext = (0, import_react37.default).createContext(null);
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  if (!element) return false;
  if (!scope) return false;
  return scope.some((node) => node.contains(element));
}
var $9bf71ea28793e738$var$Tree = class _$9bf71ea28793e738$var$Tree {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(data) {
    return this.fastMap.get(data);
  }
  addTreeNode(scopeRef, parent, nodeToRestore) {
    let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
    if (!parentNode) return;
    let node = new $9bf71ea28793e738$var$TreeNode({
      scopeRef
    });
    parentNode.addChild(node);
    node.parent = parentNode;
    this.fastMap.set(scopeRef, node);
    if (nodeToRestore) node.nodeToRestore = nodeToRestore;
  }
  addNode(node) {
    this.fastMap.set(node.scopeRef, node);
  }
  removeTreeNode(scopeRef) {
    if (scopeRef === null) return;
    let node = this.fastMap.get(scopeRef);
    if (!node) return;
    let parentNode = node.parent;
    for (let current of this.traverse()) if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
    let children = node.children;
    if (parentNode) {
      parentNode.removeChild(node);
      if (children.size > 0) children.forEach((child) => parentNode && parentNode.addChild(child));
    }
    this.fastMap.delete(node.scopeRef);
  }
  // Pre Order Depth First
  *traverse(node = this.root) {
    if (node.scopeRef != null) yield node;
    if (node.children.size > 0) for (let child of node.children) yield* this.traverse(child);
  }
  clone() {
    var _node_parent;
    let newTree = new _$9bf71ea28793e738$var$Tree();
    var _node_parent_scopeRef;
    for (let node of this.traverse()) newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
    return newTree;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map();
    this.root = new $9bf71ea28793e738$var$TreeNode({
      scopeRef: null
    });
    this.fastMap.set(null, this.root);
  }
};
var $9bf71ea28793e738$var$TreeNode = class {
  addChild(node) {
    this.children.add(node);
    node.parent = this;
  }
  removeChild(node) {
    this.children.delete(node);
    node.parent = void 0;
  }
  constructor(props) {
    this.children = /* @__PURE__ */ new Set();
    this.contain = false;
    this.scopeRef = props.scopeRef;
  }
};
var $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();

// node_modules/@react-aria/focus/dist/useFocusRing.mjs
var import_react38 = __toESM(require_react(), 1);
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (0, import_react38.useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || (0, $507fabe10e71c6fb$export$b9b3dfddab17db27)()
  });
  let [isFocused, setFocused] = (0, import_react38.useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (0, import_react38.useState)(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = (0, import_react38.useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = (0, import_react38.useCallback)((isFocused2) => {
    state.current.isFocused = isFocused2;
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  (0, $507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = (0, $9ab94262bd0047c7$export$420e68273165f4ec)({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

// node_modules/@react-aria/focus/dist/FocusRing.mjs
var import_react39 = __toESM(require_react(), 1);

// node_modules/@react-aria/focus/dist/useHasTabbableChild.mjs
var import_react40 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/button/button.js
var import_react48 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
var import_react45 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t13, e8, n17) => e8 in t13 ? i(t13, e8, { enumerable: true, configurable: true, writable: true, value: n17 }) : t13[e8] = n17;
var r = (t13, e8, n17) => (d(t13, typeof e8 != "symbol" ? e8 + "" : e8, n17), n17);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e8) {
    this.current !== e8 && (this.handoffState = "pending", this.currentId = 0, this.current = e8);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/utils/owner.js
function o2(n17) {
  var e8, r20;
  return s.isServer ? null : n17 ? "ownerDocument" in n17 ? n17.ownerDocument : "current" in n17 ? (r20 = (e8 = n17.current) == null ? void 0 : e8.ownerDocument) != null ? r20 : document : null : document;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react41 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e8) {
  typeof queueMicrotask == "function" ? queueMicrotask(e8) : Promise.resolve().then(e8).catch((o21) => setTimeout(() => {
    throw o21;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o3() {
  let s17 = [], r20 = { addEventListener(e8, t13, n17, i18) {
    return e8.addEventListener(t13, n17, i18), r20.add(() => e8.removeEventListener(t13, n17, i18));
  }, requestAnimationFrame(...e8) {
    let t13 = requestAnimationFrame(...e8);
    return r20.add(() => cancelAnimationFrame(t13));
  }, nextFrame(...e8) {
    return r20.requestAnimationFrame(() => r20.requestAnimationFrame(...e8));
  }, setTimeout(...e8) {
    let t13 = setTimeout(...e8);
    return r20.add(() => clearTimeout(t13));
  }, microTask(...e8) {
    let t13 = { current: true };
    return t(() => {
      t13.current && e8[0]();
    }), r20.add(() => {
      t13.current = false;
    });
  }, style(e8, t13, n17) {
    let i18 = e8.style.getPropertyValue(t13);
    return Object.assign(e8.style, { [t13]: n17 }), this.add(() => {
      Object.assign(e8.style, { [t13]: i18 });
    });
  }, group(e8) {
    let t13 = o3();
    return e8(t13), this.add(() => t13.dispose());
  }, add(e8) {
    return s17.includes(e8) || s17.push(e8), () => {
      let t13 = s17.indexOf(e8);
      if (t13 >= 0) for (let n17 of s17.splice(t13, 1)) n17();
    };
  }, dispose() {
    for (let e8 of s17.splice(0)) e8();
  } };
  return r20;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e8] = (0, import_react41.useState)(o3);
  return (0, import_react41.useEffect)(() => () => e8.dispose(), [e8]), e8;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react44 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react43 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react42 = __toESM(require_react(), 1);
var n = (e8, t13) => {
  s.isServer ? (0, import_react42.useEffect)(e8, t13) : (0, import_react42.useLayoutEffect)(e8, t13);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s3(e8) {
  let r20 = (0, import_react43.useRef)(e8);
  return n(() => {
    r20.current = e8;
  }, [e8]), r20;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o5 = function(t13) {
  let e8 = s3(t13);
  return import_react44.default.useCallback((...r20) => e8.current(...r20), [e8]);
};

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
function E(e8) {
  let t13 = e8.width / 2, n17 = e8.height / 2;
  return { top: e8.clientY - n17, right: e8.clientX + t13, bottom: e8.clientY + n17, left: e8.clientX - t13 };
}
function P(e8, t13) {
  return !(!e8 || !t13 || e8.right < t13.left || e8.left > t13.right || e8.bottom < t13.top || e8.top > t13.bottom);
}
function w({ disabled: e8 = false } = {}) {
  let t13 = (0, import_react45.useRef)(null), [n17, l16] = (0, import_react45.useState)(false), r20 = p(), o21 = o5(() => {
    t13.current = null, l16(false), r20.dispose();
  }), f24 = o5((s17) => {
    if (r20.dispose(), t13.current === null) {
      t13.current = s17.currentTarget, l16(true);
      {
        let i18 = o2(s17.currentTarget);
        r20.addEventListener(i18, "pointerup", o21, false), r20.addEventListener(i18, "pointermove", (c18) => {
          if (t13.current) {
            let p12 = E(c18);
            l16(P(p12, t13.current.getBoundingClientRect()));
          }
        }, false), r20.addEventListener(i18, "pointercancel", o21, false);
      }
    }
  });
  return { pressed: n17, pressProps: e8 ? {} : { onPointerDown: f24, onPointerUp: o21, onClick: o21 } };
}

// node_modules/@headlessui/react/dist/internal/disabled.js
var import_react46 = __toESM(require_react(), 1);
var e = (0, import_react46.createContext)(void 0);
function a3() {
  return (0, import_react46.useContext)(e);
}
function l({ value: t13, children: o21 }) {
  return import_react46.default.createElement(e.Provider, { value: t13 }, o21);
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react47 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t3(...r20) {
  return Array.from(new Set(r20.flatMap((n17) => typeof n17 == "string" ? n17.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/match.js
function u(r20, n17, ...a27) {
  if (r20 in n17) {
    let e8 = n17[r20];
    return typeof e8 == "function" ? e8(...a27) : e8;
  }
  let t13 = new Error(`Tried to handle "${r20}" but there is no handler defined. Only defined handlers are: ${Object.keys(n17).map((e8) => `"${e8}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t13, u), t13;
}

// node_modules/@headlessui/react/dist/utils/render.js
var O = ((a27) => (a27[a27.None = 0] = "None", a27[a27.RenderStrategy = 1] = "RenderStrategy", a27[a27.Static = 2] = "Static", a27))(O || {});
var A = ((e8) => (e8[e8.Unmount = 0] = "Unmount", e8[e8.Hidden = 1] = "Hidden", e8))(A || {});
function L() {
  let n17 = U();
  return (0, import_react47.useCallback)((r20) => C({ mergeRefs: n17, ...r20 }), [n17]);
}
function C({ ourProps: n17, theirProps: r20, slot: e8, defaultTag: a27, features: s17, visible: t13 = true, name: l16, mergeRefs: i18 }) {
  i18 = i18 != null ? i18 : $;
  let o21 = P2(r20, n17);
  if (t13) return F(o21, e8, a27, l16, i18);
  let y11 = s17 != null ? s17 : 0;
  if (y11 & 2) {
    let { static: f24 = false, ...u24 } = o21;
    if (f24) return F(u24, e8, a27, l16, i18);
  }
  if (y11 & 1) {
    let { unmount: f24 = true, ...u24 } = o21;
    return u(f24 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return F({ ...u24, hidden: true, style: { display: "none" } }, e8, a27, l16, i18);
    } });
  }
  return F(o21, e8, a27, l16, i18);
}
function F(n17, r20 = {}, e8, a27, s17) {
  let { as: t13 = e8, children: l16, refName: i18 = "ref", ...o21 } = h(n17, ["unmount", "static"]), y11 = n17.ref !== void 0 ? { [i18]: n17.ref } : {}, f24 = typeof l16 == "function" ? l16(r20) : l16;
  "className" in o21 && o21.className && typeof o21.className == "function" && (o21.className = o21.className(r20)), o21["aria-labelledby"] && o21["aria-labelledby"] === o21.id && (o21["aria-labelledby"] = void 0);
  let u24 = {};
  if (r20) {
    let d14 = false, p12 = [];
    for (let [c18, T15] of Object.entries(r20)) typeof T15 == "boolean" && (d14 = true), T15 === true && p12.push(c18.replace(/([A-Z])/g, (g8) => `-${g8.toLowerCase()}`));
    if (d14) {
      u24["data-headlessui-state"] = p12.join(" ");
      for (let c18 of p12) u24[`data-${c18}`] = "";
    }
  }
  if (t13 === import_react47.Fragment && (Object.keys(m2(o21)).length > 0 || Object.keys(m2(u24)).length > 0)) if (!(0, import_react47.isValidElement)(f24) || Array.isArray(f24) && f24.length > 1) {
    if (Object.keys(m2(o21)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${a27} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m2(o21)).concat(Object.keys(m2(u24))).map((d14) => `  - ${d14}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d14) => `  - ${d14}`).join(`
`)].join(`
`));
  } else {
    let d14 = f24.props, p12 = d14 == null ? void 0 : d14.className, c18 = typeof p12 == "function" ? (...R5) => t3(p12(...R5), o21.className) : t3(p12, o21.className), T15 = c18 ? { className: c18 } : {}, g8 = P2(f24.props, m2(h(o21, ["ref"])));
    for (let R5 in u24) R5 in g8 && delete u24[R5];
    return (0, import_react47.cloneElement)(f24, Object.assign({}, g8, u24, y11, { ref: s17(H(f24), y11.ref) }, T15));
  }
  return (0, import_react47.createElement)(t13, Object.assign({}, h(o21, ["ref"]), t13 !== import_react47.Fragment && y11, t13 !== import_react47.Fragment && u24), f24);
}
function U() {
  let n17 = (0, import_react47.useRef)([]), r20 = (0, import_react47.useCallback)((e8) => {
    for (let a27 of n17.current) a27 != null && (typeof a27 == "function" ? a27(e8) : a27.current = e8);
  }, []);
  return (...e8) => {
    if (!e8.every((a27) => a27 == null)) return n17.current = e8, r20;
  };
}
function $(...n17) {
  return n17.every((r20) => r20 == null) ? void 0 : (r20) => {
    for (let e8 of n17) e8 != null && (typeof e8 == "function" ? e8(r20) : e8.current = r20);
  };
}
function P2(...n17) {
  var a27;
  if (n17.length === 0) return {};
  if (n17.length === 1) return n17[0];
  let r20 = {}, e8 = {};
  for (let s17 of n17) for (let t13 in s17) t13.startsWith("on") && typeof s17[t13] == "function" ? ((a27 = e8[t13]) != null || (e8[t13] = []), e8[t13].push(s17[t13])) : r20[t13] = s17[t13];
  if (r20.disabled || r20["aria-disabled"]) for (let s17 in e8) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s17) && (e8[s17] = [(t13) => {
    var l16;
    return (l16 = t13 == null ? void 0 : t13.preventDefault) == null ? void 0 : l16.call(t13);
  }]);
  for (let s17 in e8) Object.assign(r20, { [s17](t13, ...l16) {
    let i18 = e8[s17];
    for (let o21 of i18) {
      if ((t13 instanceof Event || (t13 == null ? void 0 : t13.nativeEvent) instanceof Event) && t13.defaultPrevented) return;
      o21(t13, ...l16);
    }
  } });
  return r20;
}
function _(...n17) {
  var a27;
  if (n17.length === 0) return {};
  if (n17.length === 1) return n17[0];
  let r20 = {}, e8 = {};
  for (let s17 of n17) for (let t13 in s17) t13.startsWith("on") && typeof s17[t13] == "function" ? ((a27 = e8[t13]) != null || (e8[t13] = []), e8[t13].push(s17[t13])) : r20[t13] = s17[t13];
  for (let s17 in e8) Object.assign(r20, { [s17](...t13) {
    let l16 = e8[s17];
    for (let i18 of l16) i18 == null || i18(...t13);
  } });
  return r20;
}
function K(n17) {
  var r20;
  return Object.assign((0, import_react47.forwardRef)(n17), { displayName: (r20 = n17.displayName) != null ? r20 : n17.name });
}
function m2(n17) {
  let r20 = Object.assign({}, n17);
  for (let e8 in r20) r20[e8] === void 0 && delete r20[e8];
  return r20;
}
function h(n17, r20 = []) {
  let e8 = Object.assign({}, n17);
  for (let a27 of r20) a27 in e8 && delete e8[a27];
  return e8;
}
function H(n17) {
  return import_react47.default.version.split(".")[0] >= "19" ? n17.props.ref : n17.ref;
}

// node_modules/@headlessui/react/dist/components/button/button.js
var R = "button";
function v2(a27, u24) {
  var p12;
  let l16 = a3(), { disabled: e8 = l16 || false, autoFocus: t13 = false, ...o21 } = a27, { isFocusVisible: r20, focusProps: i18 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: t13 }), { isHovered: s17, hoverProps: T15 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), { pressed: n17, pressProps: d14 } = w({ disabled: e8 }), f24 = _({ ref: u24, type: (p12 = o21.type) != null ? p12 : "button", disabled: e8 || void 0, autoFocus: t13 }, i18, T15, d14), m12 = (0, import_react48.useMemo)(() => ({ disabled: e8, hover: s17, focus: r20, active: n17, autofocus: t13 }), [e8, s17, r20, n17, t13]);
  return L()({ ourProps: f24, theirProps: o21, slot: m12, defaultTag: R, name: "Button" });
}
var H2 = K(v2);

// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
var import_react57 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react49 = __toESM(require_react(), 1);
function T(l16, r20, c18) {
  let [i18, s17] = (0, import_react49.useState)(c18), e8 = l16 !== void 0, t13 = (0, import_react49.useRef)(e8), u24 = (0, import_react49.useRef)(false), d14 = (0, import_react49.useRef)(false);
  return e8 && !t13.current && !u24.current ? (u24.current = true, t13.current = e8, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e8 && t13.current && !d14.current && (d14.current = true, t13.current = e8, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e8 ? l16 : i18, o5((n17) => (e8 || s17(n17), r20 == null ? void 0 : r20(n17)))];
}

// node_modules/@headlessui/react/dist/hooks/use-default-value.js
var import_react50 = __toESM(require_react(), 1);
function l2(e8) {
  let [t13] = (0, import_react50.useState)(e8);
  return t13;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react51 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/form-fields.js
var import_react52 = __toESM(require_react(), 1);
var import_react_dom3 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/utils/form.js
function e2(i18 = {}, s17 = null, t13 = []) {
  for (let [r20, n17] of Object.entries(i18)) o7(t13, f3(s17, r20), n17);
  return t13;
}
function f3(i18, s17) {
  return i18 ? i18 + "[" + s17 + "]" : s17;
}
function o7(i18, s17, t13) {
  if (Array.isArray(t13)) for (let [r20, n17] of t13.entries()) o7(i18, f3(s17, r20.toString()), n17);
  else t13 instanceof Date ? i18.push([s17, t13.toISOString()]) : typeof t13 == "boolean" ? i18.push([s17, t13 ? "1" : "0"]) : typeof t13 == "string" ? i18.push([s17, t13]) : typeof t13 == "number" ? i18.push([s17, `${t13}`]) : t13 == null ? i18.push([s17, ""]) : e2(t13, s17, i18);
}
function p2(i18) {
  var t13, r20;
  let s17 = (t13 = i18 == null ? void 0 : i18.form) != null ? t13 : i18.closest("form");
  if (s17) {
    for (let n17 of s17.elements) if (n17 !== i18 && (n17.tagName === "INPUT" && n17.type === "submit" || n17.tagName === "BUTTON" && n17.type === "submit" || n17.nodeName === "INPUT" && n17.type === "image")) {
      n17.click();
      return;
    }
    (r20 = s17.requestSubmit) == null || r20.call(s17);
  }
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a4 = "span";
var s4 = ((e8) => (e8[e8.None = 1] = "None", e8[e8.Focusable = 2] = "Focusable", e8[e8.Hidden = 4] = "Hidden", e8))(s4 || {});
function l3(t13, r20) {
  var n17;
  let { features: d14 = 1, ...e8 } = t13, o21 = { ref: r20, "aria-hidden": (d14 & 2) === 2 ? true : (n17 = e8["aria-hidden"]) != null ? n17 : void 0, hidden: (d14 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(d14 & 4) === 4 && (d14 & 2) !== 2 && { display: "none" } } };
  return L()({ ourProps: o21, theirProps: e8, slot: {}, defaultTag: a4, name: "Hidden" });
}
var f4 = K(l3);

// node_modules/@headlessui/react/dist/internal/form-fields.js
var f5 = (0, import_react52.createContext)(null);
function W(t13) {
  let [e8, r20] = (0, import_react52.useState)(null);
  return import_react52.default.createElement(f5.Provider, { value: { target: e8 } }, t13.children, import_react52.default.createElement(f4, { features: s4.Hidden, ref: r20 }));
}
function c2({ children: t13 }) {
  let e8 = (0, import_react52.useContext)(f5);
  if (!e8) return import_react52.default.createElement(import_react52.default.Fragment, null, t13);
  let { target: r20 } = e8;
  return r20 ? (0, import_react_dom3.createPortal)(import_react52.default.createElement(import_react52.default.Fragment, null, t13), r20) : null;
}
function j2({ data: t13, form: e8, disabled: r20, onReset: n17, overrides: F13 }) {
  let [i18, a27] = (0, import_react52.useState)(null), p12 = p();
  return (0, import_react52.useEffect)(() => {
    if (n17 && i18) return p12.addEventListener(i18, "reset", n17);
  }, [i18, e8, n17]), import_react52.default.createElement(c2, null, import_react52.default.createElement(C2, { setForm: a27, formId: e8 }), e2(t13).map(([s17, v6]) => import_react52.default.createElement(f4, { features: s4.Hidden, ...m2({ key: s17, as: "input", type: "hidden", hidden: true, readOnly: true, form: e8, disabled: r20, name: s17, value: v6, ...F13 }) })));
}
function C2({ setForm: t13, formId: e8 }) {
  return (0, import_react52.useEffect)(() => {
    if (e8) {
      let r20 = document.getElementById(e8);
      r20 && t13(r20);
    }
  }, [t13, e8]), e8 ? null : import_react52.default.createElement(f4, { features: s4.Hidden, as: "input", type: "hidden", hidden: true, readOnly: true, ref: (r20) => {
    if (!r20) return;
    let n17 = r20.closest("form");
    n17 && t13(n17);
  } });
}

// node_modules/@headlessui/react/dist/internal/id.js
var import_react53 = __toESM(require_react(), 1);
var e3 = (0, import_react53.createContext)(void 0);
function u4() {
  return (0, import_react53.useContext)(e3);
}
function f6({ id: t13, children: r20 }) {
  return import_react53.default.createElement(e3.Provider, { value: t13 }, r20);
}

// node_modules/@headlessui/react/dist/utils/dom.js
function o9(e8) {
  return typeof e8 != "object" || e8 === null ? false : "nodeType" in e8;
}
function t4(e8) {
  return o9(e8) && "tagName" in e8;
}
function n4(e8) {
  return t4(e8) && "accessKey" in e8;
}
function i4(e8) {
  return t4(e8) && "tabIndex" in e8;
}
function r4(e8) {
  return t4(e8) && "style" in e8;
}
function u5(e8) {
  return n4(e8) && e8.nodeName === "IFRAME";
}
function l4(e8) {
  return n4(e8) && e8.nodeName === "INPUT";
}
function m4(e8) {
  return n4(e8) && e8.nodeName === "LABEL";
}
function a5(e8) {
  return n4(e8) && e8.nodeName === "FIELDSET";
}
function E4(e8) {
  return n4(e8) && e8.nodeName === "LEGEND";
}
function L2(e8) {
  return t4(e8) ? e8.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]') : false;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function s5(l16) {
  let e8 = l16.parentElement, t13 = null;
  for (; e8 && !a5(e8); ) E4(e8) && (t13 = e8), e8 = e8.parentElement;
  let i18 = (e8 == null ? void 0 : e8.getAttribute("disabled")) === "";
  return i18 && r5(t13) ? false : i18;
}
function r5(l16) {
  if (!l16) return false;
  let e8 = l16.previousElementSibling;
  for (; e8 !== null; ) {
    if (E4(e8)) return false;
    e8 = e8.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react55 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react54 = __toESM(require_react(), 1);
var u6 = Symbol();
function T2(t13, n17 = true) {
  return Object.assign(t13, { [u6]: n17 });
}
function y(...t13) {
  let n17 = (0, import_react54.useRef)(t13);
  (0, import_react54.useEffect)(() => {
    n17.current = t13;
  }, [t13]);
  let c18 = o5((e8) => {
    for (let o21 of n17.current) o21 != null && (typeof o21 == "function" ? o21(e8) : o21.current = e8);
  });
  return t13.every((e8) => e8 == null || (e8 == null ? void 0 : e8[u6])) ? void 0 : c18;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var a6 = (0, import_react55.createContext)(null);
a6.displayName = "DescriptionContext";
function f7() {
  let r20 = (0, import_react55.useContext)(a6);
  if (r20 === null) {
    let e8 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e8, f7), e8;
  }
  return r20;
}
function U2() {
  var r20, e8;
  return (e8 = (r20 = (0, import_react55.useContext)(a6)) == null ? void 0 : r20.value) != null ? e8 : void 0;
}
function w3() {
  let [r20, e8] = (0, import_react55.useState)([]);
  return [r20.length > 0 ? r20.join(" ") : void 0, (0, import_react55.useMemo)(() => function(t13) {
    let i18 = o5((n17) => (e8((s17) => [...s17, n17]), () => e8((s17) => {
      let o21 = s17.slice(), p12 = o21.indexOf(n17);
      return p12 !== -1 && o21.splice(p12, 1), o21;
    }))), l16 = (0, import_react55.useMemo)(() => ({ register: i18, slot: t13.slot, name: t13.name, props: t13.props, value: t13.value }), [i18, t13.slot, t13.name, t13.props, t13.value]);
    return import_react55.default.createElement(a6.Provider, { value: l16 }, t13.children);
  }, [e8])];
}
var S2 = "p";
function C3(r20, e8) {
  let d14 = (0, import_react51.useId)(), t13 = a3(), { id: i18 = `headlessui-description-${d14}`, ...l16 } = r20, n17 = f7(), s17 = y(e8);
  n(() => n17.register(i18), [i18, n17.register]);
  let o21 = t13 || false, p12 = (0, import_react55.useMemo)(() => ({ ...n17.slot, disabled: o21 }), [n17.slot, o21]), D8 = { ref: s17, ...n17.props, id: i18 };
  return L()({ ourProps: D8, theirProps: l16, slot: p12, defaultTag: S2, name: n17.name || "Description" });
}
var _2 = K(C3);
var H4 = Object.assign(_2, {});

// node_modules/@headlessui/react/dist/components/keyboard.js
var o10 = ((r20) => (r20.Space = " ", r20.Enter = "Enter", r20.Escape = "Escape", r20.Backspace = "Backspace", r20.Delete = "Delete", r20.ArrowLeft = "ArrowLeft", r20.ArrowUp = "ArrowUp", r20.ArrowRight = "ArrowRight", r20.ArrowDown = "ArrowDown", r20.Home = "Home", r20.End = "End", r20.PageUp = "PageUp", r20.PageDown = "PageDown", r20.Tab = "Tab", r20))(o10 || {});

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react56 = __toESM(require_react(), 1);
var L3 = (0, import_react56.createContext)(null);
L3.displayName = "LabelContext";
function C4() {
  let n17 = (0, import_react56.useContext)(L3);
  if (n17 === null) {
    let l16 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l16, C4), l16;
  }
  return n17;
}
function N(n17) {
  var a27, e8, o21;
  let l16 = (e8 = (a27 = (0, import_react56.useContext)(L3)) == null ? void 0 : a27.value) != null ? e8 : void 0;
  return ((o21 = n17 == null ? void 0 : n17.length) != null ? o21 : 0) > 0 ? [l16, ...n17].filter(Boolean).join(" ") : l16;
}
function Q({ inherit: n17 = false } = {}) {
  let l16 = N(), [a27, e8] = (0, import_react56.useState)([]), o21 = n17 ? [l16, ...a27].filter(Boolean) : a27;
  return [o21.length > 0 ? o21.join(" ") : void 0, (0, import_react56.useMemo)(() => function(t13) {
    let p12 = o5((i18) => (e8((u24) => [...u24, i18]), () => e8((u24) => {
      let d14 = u24.slice(), f24 = d14.indexOf(i18);
      return f24 !== -1 && d14.splice(f24, 1), d14;
    }))), b11 = (0, import_react56.useMemo)(() => ({ register: p12, slot: t13.slot, name: t13.name, props: t13.props, value: t13.value }), [p12, t13.slot, t13.name, t13.props, t13.value]);
    return import_react56.default.createElement(L3.Provider, { value: b11 }, t13.children);
  }, [e8])];
}
var G = "label";
function U3(n17, l16) {
  var E17;
  let a27 = (0, import_react51.useId)(), e8 = C4(), o21 = u4(), y11 = a3(), { id: t13 = `headlessui-label-${a27}`, htmlFor: p12 = o21 != null ? o21 : (E17 = e8.props) == null ? void 0 : E17.htmlFor, passive: b11 = false, ...i18 } = n17, u24 = y(l16);
  n(() => e8.register(t13), [t13, e8.register]);
  let d14 = o5((s17) => {
    let g8 = s17.currentTarget;
    if (!(s17.target !== s17.currentTarget && L2(s17.target)) && (m4(g8) && s17.preventDefault(), e8.props && "onClick" in e8.props && typeof e8.props.onClick == "function" && e8.props.onClick(s17), m4(g8))) {
      let r20 = document.getElementById(g8.htmlFor);
      if (r20) {
        let x13 = r20.getAttribute("disabled");
        if (x13 === "true" || x13 === "") return;
        let h11 = r20.getAttribute("aria-disabled");
        if (h11 === "true" || h11 === "") return;
        (l4(r20) && (r20.type === "file" || r20.type === "radio" || r20.type === "checkbox") || r20.role === "radio" || r20.role === "checkbox" || r20.role === "switch") && r20.click(), r20.focus({ preventScroll: true });
      }
    }
  }), f24 = y11 || false, R5 = (0, import_react56.useMemo)(() => ({ ...e8.slot, disabled: f24 }), [e8.slot, f24]), c18 = { ref: u24, ...e8.props, id: t13, htmlFor: p12, onClick: d14 };
  return b11 && ("onClick" in c18 && (delete c18.htmlFor, delete c18.onClick), "onClick" in i18 && delete i18.onClick), L()({ ourProps: c18, theirProps: i18, slot: R5, defaultTag: p12 ? G : "div", name: e8.name || "Label" });
}
var j3 = K(U3);
var V = Object.assign(j3, {});

// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
var de = "span";
function pe(T15, h11) {
  let C13 = (0, import_react51.useId)(), k9 = u4(), x13 = a3(), { id: g8 = k9 || `headlessui-checkbox-${C13}`, disabled: e8 = x13 || false, autoFocus: s17 = false, checked: E17, defaultChecked: v6, onChange: P7, name: d14, value: D8, form: R5, indeterminate: n17 = false, tabIndex: A6 = 0, ...F13 } = T15, r20 = l2(v6), [a27, t13] = T(E17, P7, r20 != null ? r20 : false), K6 = N(), _10 = U2(), H12 = p(), [p12, c18] = (0, import_react57.useState)(false), u24 = o5(() => {
    c18(true), t13 == null || t13(!a27), H12.nextFrame(() => {
      c18(false);
    });
  }), B4 = o5((o21) => {
    if (s5(o21.currentTarget)) return o21.preventDefault();
    o21.preventDefault(), u24();
  }), I8 = o5((o21) => {
    o21.key === o10.Space ? (o21.preventDefault(), u24()) : o21.key === o10.Enter && p2(o21.currentTarget);
  }), L8 = o5((o21) => o21.preventDefault()), { isFocusVisible: m12, focusProps: M9 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: s17 }), { isHovered: b11, hoverProps: U6 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), { pressed: f24, pressProps: O8 } = w({ disabled: e8 }), X4 = _({ ref: h11, id: g8, role: "checkbox", "aria-checked": n17 ? "mixed" : a27 ? "true" : "false", "aria-labelledby": K6, "aria-describedby": _10, "aria-disabled": e8 ? true : void 0, indeterminate: n17 ? "true" : void 0, tabIndex: e8 ? void 0 : A6, onKeyUp: e8 ? void 0 : I8, onKeyPress: e8 ? void 0 : L8, onClick: e8 ? void 0 : B4 }, M9, U6, O8), G6 = (0, import_react57.useMemo)(() => ({ checked: a27, disabled: e8, hover: b11, focus: m12, active: f24, indeterminate: n17, changing: p12, autofocus: s17 }), [a27, n17, e8, b11, m12, f24, p12, s17]), S10 = (0, import_react57.useCallback)(() => {
    if (r20 !== void 0) return t13 == null ? void 0 : t13(r20);
  }, [t13, r20]), W2 = L();
  return import_react57.default.createElement(import_react57.default.Fragment, null, d14 != null && import_react57.default.createElement(j2, { disabled: e8, data: { [d14]: D8 || "on" }, overrides: { type: "checkbox", checked: a27 }, form: R5, onReset: S10 }), W2({ ourProps: X4, theirProps: F13, slot: G6, defaultTag: de, name: "Checkbox" }));
}
var Fe = K(pe);

// node_modules/@headlessui/react/dist/components/close-button/close-button.js
var import_react59 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/close-provider.js
var import_react58 = __toESM(require_react(), 1);
var e4 = (0, import_react58.createContext)(() => {
});
function u8() {
  return (0, import_react58.useContext)(e4);
}
function C5({ value: t13, children: o21 }) {
  return import_react58.default.createElement(e4.Provider, { value: t13 }, o21);
}

// node_modules/@headlessui/react/dist/components/close-button/close-button.js
function l6(t13, e8) {
  let o21 = u8();
  return import_react59.default.createElement(H2, { ref: e8, ..._({ onClick: o21 }, t13) });
}
var y2 = K(l6);

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var React = __toESM(require_react());
var import_react_dom4 = __toESM(require_react_dom());

// node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  function memoizedFunction() {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index2) => deps[index2] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  }
  memoizedFunction.updateDeps = (newDeps) => {
    deps = newDeps;
  };
  return memoizedFunction;
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
var approxEqual = (a27, b11) => Math.abs(a27 - b11) < 1.01;
var debounce = (targetWindow, fn, ms) => {
  let timeoutId2;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId2);
    timeoutId2 = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
};

// node_modules/@tanstack/virtual-core/dist/esm/index.js
var getRect = (element) => {
  const { offsetWidth, offsetHeight } = element;
  return { width: offsetWidth, height: offsetHeight };
};
var defaultKeyExtractor = (index2) => index2;
var defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i18 = start; i18 <= end; i18++) {
    arr.push(i18);
  }
  return arr;
};
var observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(getRect(element));
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const run = () => {
      const entry = entries[0];
      if (entry == null ? void 0 : entry.borderBoxSize) {
        const box = entry.borderBoxSize[0];
        if (box) {
          handler({ width: box.inlineSize, height: box.blockSize });
          return;
        }
      }
      handler(getRect(element));
    };
    instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset2 = 0;
  const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(
    targetWindow,
    () => {
      cb(offset2, false);
    },
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    const { horizontal, isRtl } = instance.options;
    offset2 = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
    fallback();
    cb(offset2, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
  if (registerScrollendEvent) {
    element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  }
  return () => {
    element.removeEventListener("scroll", handler);
    if (registerScrollendEvent) {
      element.removeEventListener("scrollend", endHandler);
    }
  };
};
var measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size2 = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size2;
    }
  }
  return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
};
var elementScroll = (offset2, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset2 + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
var Virtualizer = class {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            const run = () => {
              this._measureElement(entry.target, entry);
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get()) == null ? void 0 : _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined") delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        useScrollendEvent: false,
        useAnimationFrameWithResizeObserver: false,
        ...opts2
      };
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d14) => d14());
      this.unsubs = [];
      this.observer.disconnect();
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset2, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset2 ? "forward" : "backward" : null;
            this.scrollOffset = offset2;
            this.isScrolling = isScrolling;
            this.maybeNotify();
          })
        );
      }
    };
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index2) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m12 = index2 - 1; m12 >= 0; m12--) {
        const measurement = measurements[m12];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a27, b11) => {
        if (a27.end === b11.end) {
          return a27.index - b11.index;
        }
        return a27.end - b11.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (count2, paddingStart, scrollMargin, getItemKey, enabled) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count: count2,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: count2, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          return [];
        }
        if (this.measurementsCache.length === 0) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min2 = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min2);
        for (let i18 = min2; i18 < count2; i18++) {
          const key = getItemKey(i18);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i18 - 1] : this.getFurthestMeasurement(measurements, i18);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size2 = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i18);
          const end = start + size2;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i18 % this.options.lanes;
          measurements[i18] = {
            index: i18,
            start,
            size: size2,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (measurements, outerSize, scrollOffset, lanes) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset,
          lanes
        }) : null;
      },
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    );
    this.getVirtualIndexes = memo(
      () => {
        let startIndex = null;
        let endIndex = null;
        const range = this.calculateRange();
        if (range) {
          startIndex = range.startIndex;
          endIndex = range.endIndex;
        }
        this.maybeNotify.updateDeps([this.isScrolling, startIndex, endIndex]);
        return [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          startIndex,
          endIndex
        ];
      },
      (rangeExtractor, overscan, count2, startIndex, endIndex) => {
        return startIndex === null || endIndex === null ? [] : rangeExtractor({
          startIndex,
          endIndex,
          overscan,
          count: count2
        });
      },
      {
        key: "getVirtualIndexes",
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const index2 = this.indexFromElement(node);
      const item = this.measurementsCache[index2];
      if (!item) {
        return;
      }
      const key = item.key;
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if (node.isConnected) {
        this.resizeItem(index2, this.options.measureElement(node, entry, this));
      }
    };
    this.resizeItem = (index2, size2) => {
      const item = this.measurementsCache[index2];
      if (!item) {
        return;
      }
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size2 - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
          if (this.options.debug) {
            console.info("correction", delta);
          }
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size2));
        this.notify(false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key);
          }
        });
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k9 = 0, len = indexes.length; k9 < len; k9++) {
          const i18 = indexes[k9];
          const measurement = measurements[i18];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: "getVirtualItems",
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset2) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index2) => notUndefined(measurements[index2]).start,
          offset2
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
      const size2 = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        align = toOffset >= scrollOffset + size2 ? "end" : "start";
      }
      if (align === "center") {
        toOffset += (itemSize - size2) / 2;
      } else if (align === "end") {
        toOffset -= size2;
      }
      const maxOffset = this.getTotalSize() + this.options.scrollMargin - size2;
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index2, align = "auto") => {
      index2 = Math.max(0, Math.min(index2, this.options.count - 1));
      const item = this.measurementsCache[index2];
      if (!item) {
        return void 0;
      }
      const size2 = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (item.end >= scrollOffset + size2 - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(toOffset, align, item.size),
        align
      ];
    };
    this.isDynamicMode = () => this.elementsCache.size > 0;
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index2, { align: initialAlign = "auto", behavior } = {}) => {
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      index2 = Math.max(0, Math.min(index2, this.options.count - 1));
      let attempts = 0;
      const maxAttempts = 10;
      const tryScroll = (currentAlign) => {
        if (!this.targetWindow) return;
        const offsetInfo = this.getOffsetForIndex(index2, currentAlign);
        if (!offsetInfo) {
          console.warn("Failed to get offset for index:", index2);
          return;
        }
        const [offset2, align] = offsetInfo;
        this._scrollToOffset(offset2, { adjustments: void 0, behavior });
        this.targetWindow.requestAnimationFrame(() => {
          const currentOffset = this.getScrollOffset();
          const afterInfo = this.getOffsetForIndex(index2, align);
          if (!afterInfo) {
            console.warn("Failed to get offset for index:", index2);
            return;
          }
          if (!approxEqual(afterInfo[0], currentOffset)) {
            scheduleRetry(align);
          }
        });
      };
      const scheduleRetry = (align) => {
        if (!this.targetWindow) return;
        attempts++;
        if (attempts < maxAttempts) {
          if (this.options.debug) {
            console.info("Schedule retry", attempts, maxAttempts);
          }
          this.targetWindow.requestAnimationFrame(() => tryScroll(align));
        } else {
          console.warn(
            `Failed to scroll to index ${index2} after ${maxAttempts} attempts.`
          );
        }
      };
      tryScroll(initialAlign);
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getScrollOffset() + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else if (this.options.lanes === 1) {
        end = ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0;
      } else {
        const endByLane = Array(this.options.lanes).fill(null);
        let endIndex = measurements.length - 1;
        while (endIndex >= 0 && endByLane.some((val) => val === null)) {
          const item = measurements[endIndex];
          if (endByLane[item.lane] === null) {
            endByLane[item.lane] = item.end;
          }
          endIndex--;
        }
        end = Math.max(...endByLane.filter((val) => val !== null));
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this._scrollToOffset = (offset2, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset2, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.notify(false);
    };
    this.setOptions(opts);
  }
};
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset,
  lanes
}) {
  const lastIndex = measurements.length - 1;
  const getOffset = (index2) => measurements[index2].start;
  if (measurements.length <= lanes) {
    return {
      startIndex: 0,
      endIndex: lastIndex
    };
  }
  let startIndex = findNearestBinarySearch(
    0,
    lastIndex,
    getOffset,
    scrollOffset
  );
  let endIndex = startIndex;
  if (lanes === 1) {
    while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) {
      endIndex++;
    }
  } else if (lanes > 1) {
    const endPerLane = Array(lanes).fill(0);
    while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
      const item = measurements[endIndex];
      endPerLane[item.lane] = item.end;
      endIndex++;
    }
    const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
    while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
      const item = measurements[startIndex];
      startPerLane[item.lane] = item.start;
      startIndex--;
    }
    startIndex = Math.max(0, startIndex - startIndex % lanes);
    endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
  }
  return { startIndex, endIndex };
}

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useVirtualizerBase(options) {
  const rerender = React.useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        (0, import_react_dom4.flushSync)(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = React.useState(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  useIsomorphicLayoutEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var import_react87 = __toESM(require_react(), 1);
var import_react_dom8 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-by-comparator.js
var import_react60 = __toESM(require_react(), 1);
function l7(e8, r20) {
  return e8 !== null && r20 !== null && typeof e8 == "object" && typeof r20 == "object" && "id" in e8 && "id" in r20 ? e8.id === r20.id : e8 === r20;
}
function u9(e8 = l7) {
  return (0, import_react60.useCallback)((r20, t13) => {
    if (typeof e8 == "string") {
      let o21 = e8;
      return (r20 == null ? void 0 : r20[o21]) === (t13 == null ? void 0 : t13[o21]);
    }
    return e8(r20, t13);
  }, [e8]);
}

// node_modules/@headlessui/react/dist/hooks/use-element-size.js
var import_react61 = __toESM(require_react(), 1);
function f8(e8) {
  if (e8 === null) return { width: 0, height: 0 };
  let { width: t13, height: r20 } = e8.getBoundingClientRect();
  return { width: t13, height: r20 };
}
function d3(e8, t13 = false) {
  let [r20, u24] = (0, import_react61.useReducer)(() => ({}), {}), i18 = (0, import_react61.useMemo)(() => f8(e8), [e8, r20]);
  return n(() => {
    if (!e8) return;
    let n17 = new ResizeObserver(u24);
    return n17.observe(e8), () => {
      n17.disconnect();
    };
  }, [e8]), t13 ? { width: `${i18.width}px`, height: `${i18.height}px` } : i18;
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
var import_react62 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/default-map.js
var a7 = class extends Map {
  constructor(t13) {
    super();
    this.factory = t13;
  }
  get(t13) {
    let e8 = super.get(t13);
    return e8 === void 0 && (e8 = this.factory(t13), this.set(t13, e8)), e8;
  }
};

// node_modules/@headlessui/react/dist/machine.js
var p3 = Object.defineProperty;
var h3 = (t13, e8, r20) => e8 in t13 ? p3(t13, e8, { enumerable: true, configurable: true, writable: true, value: r20 }) : t13[e8] = r20;
var f9 = (t13, e8, r20) => (h3(t13, typeof e8 != "symbol" ? e8 + "" : e8, r20), r20);
var b2 = (t13, e8, r20) => {
  if (!e8.has(t13)) throw TypeError("Cannot " + r20);
};
var n8 = (t13, e8, r20) => (b2(t13, e8, "read from private field"), r20 ? r20.call(t13) : e8.get(t13));
var c4 = (t13, e8, r20) => {
  if (e8.has(t13)) throw TypeError("Cannot add the same private member more than once");
  e8 instanceof WeakSet ? e8.add(t13) : e8.set(t13, r20);
};
var u10 = (t13, e8, r20, s17) => (b2(t13, e8, "write to private field"), s17 ? s17.call(t13, r20) : e8.set(t13, r20), r20);
var i8;
var a8;
var o12;
var E5 = class {
  constructor(e8) {
    c4(this, i8, {});
    c4(this, a8, new a7(() => /* @__PURE__ */ new Set()));
    c4(this, o12, /* @__PURE__ */ new Set());
    f9(this, "disposables", o3());
    u10(this, i8, e8);
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return n8(this, i8);
  }
  subscribe(e8, r20) {
    let s17 = { selector: e8, callback: r20, current: e8(n8(this, i8)) };
    return n8(this, o12).add(s17), this.disposables.add(() => {
      n8(this, o12).delete(s17);
    });
  }
  on(e8, r20) {
    return n8(this, a8).get(e8).add(r20), this.disposables.add(() => {
      n8(this, a8).get(e8).delete(r20);
    });
  }
  send(e8) {
    let r20 = this.reduce(n8(this, i8), e8);
    if (r20 !== n8(this, i8)) {
      u10(this, i8, r20);
      for (let s17 of n8(this, o12)) {
        let l16 = s17.selector(n8(this, i8));
        j4(s17.current, l16) || (s17.current = l16, s17.callback(l16));
      }
      for (let s17 of n8(this, a8).get(e8.type)) s17(n8(this, i8), e8);
    }
  }
};
i8 = /* @__PURE__ */ new WeakMap(), a8 = /* @__PURE__ */ new WeakMap(), o12 = /* @__PURE__ */ new WeakMap();
function j4(t13, e8) {
  return Object.is(t13, e8) ? true : typeof t13 != "object" || t13 === null || typeof e8 != "object" || e8 === null ? false : Array.isArray(t13) && Array.isArray(e8) ? t13.length !== e8.length ? false : d4(t13[Symbol.iterator](), e8[Symbol.iterator]()) : t13 instanceof Map && e8 instanceof Map || t13 instanceof Set && e8 instanceof Set ? t13.size !== e8.size ? false : d4(t13.entries(), e8.entries()) : y3(t13) && y3(e8) ? d4(Object.entries(t13)[Symbol.iterator](), Object.entries(e8)[Symbol.iterator]()) : false;
}
function d4(t13, e8) {
  do {
    let r20 = t13.next(), s17 = e8.next();
    if (r20.done && s17.done) return true;
    if (r20.done || s17.done || !Object.is(r20.value, s17.value)) return false;
  } while (true);
}
function y3(t13) {
  if (Object.prototype.toString.call(t13) !== "[object Object]") return false;
  let e8 = Object.getPrototypeOf(t13);
  return e8 === null || Object.getPrototypeOf(e8) === null;
}
function x2(t13) {
  let [e8, r20] = t13(), s17 = o3();
  return (...l16) => {
    e8(...l16), s17.dispose(), s17.microTask(r20);
  };
}

// node_modules/@headlessui/react/dist/machines/stack-machine.js
var a9 = Object.defineProperty;
var r7 = (e8, c18, t13) => c18 in e8 ? a9(e8, c18, { enumerable: true, configurable: true, writable: true, value: t13 }) : e8[c18] = t13;
var p4 = (e8, c18, t13) => (r7(e8, typeof c18 != "symbol" ? c18 + "" : c18, t13), t13);
var k3 = ((t13) => (t13[t13.Push = 0] = "Push", t13[t13.Pop = 1] = "Pop", t13))(k3 || {});
var y4 = { [0](e8, c18) {
  let t13 = c18.id, s17 = e8.stack, i18 = e8.stack.indexOf(t13);
  if (i18 !== -1) {
    let n17 = e8.stack.slice();
    return n17.splice(i18, 1), n17.push(t13), s17 = n17, { ...e8, stack: s17 };
  }
  return { ...e8, stack: [...e8.stack, t13] };
}, [1](e8, c18) {
  let t13 = c18.id, s17 = e8.stack.indexOf(t13);
  if (s17 === -1) return e8;
  let i18 = e8.stack.slice();
  return i18.splice(s17, 1), { ...e8, stack: i18 };
} };
var o13 = class _o2 extends E5 {
  constructor() {
    super(...arguments);
    p4(this, "actions", { push: (t13) => this.send({ type: 0, id: t13 }), pop: (t13) => this.send({ type: 1, id: t13 }) });
    p4(this, "selectors", { isTop: (t13, s17) => t13.stack[t13.stack.length - 1] === s17, inStack: (t13, s17) => t13.stack.includes(s17) });
  }
  static new() {
    return new _o2({ stack: [] });
  }
  reduce(t13, s17) {
    return u(s17.type, y4, t13, s17);
  }
};
var x3 = new a7(() => o13.new());

// node_modules/@headlessui/react/dist/react-glue.js
var import_with_selector = __toESM(require_with_selector(), 1);
function S3(e8, n17, r20 = j4) {
  return (0, import_with_selector.useSyncExternalStoreWithSelector)(o5((i18) => e8.subscribe(s6, i18)), o5(() => e8.state), o5(() => e8.state), o5(n17), r20);
}
function s6(e8) {
  return e8;
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
function I(o21, s17) {
  let t13 = (0, import_react62.useId)(), r20 = x3.get(s17), [i18, c18] = S3(r20, (0, import_react62.useCallback)((e8) => [r20.selectors.isTop(e8, t13), r20.selectors.inStack(e8, t13)], [r20, t13]));
  return n(() => {
    if (o21) return r20.actions.push(t13), () => r20.actions.pop(t13);
  }, [r20, o21, t13]), o21 ? c18 ? i18 : true : false;
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var f10 = /* @__PURE__ */ new Map();
var u12 = /* @__PURE__ */ new Map();
function h4(t13) {
  var e8;
  let r20 = (e8 = u12.get(t13)) != null ? e8 : 0;
  return u12.set(t13, r20 + 1), r20 !== 0 ? () => m6(t13) : (f10.set(t13, { "aria-hidden": t13.getAttribute("aria-hidden"), inert: t13.inert }), t13.setAttribute("aria-hidden", "true"), t13.inert = true, () => m6(t13));
}
function m6(t13) {
  var i18;
  let r20 = (i18 = u12.get(t13)) != null ? i18 : 1;
  if (r20 === 1 ? u12.delete(t13) : u12.set(t13, r20 - 1), r20 !== 1) return;
  let e8 = f10.get(t13);
  e8 && (e8["aria-hidden"] === null ? t13.removeAttribute("aria-hidden") : t13.setAttribute("aria-hidden", e8["aria-hidden"]), t13.inert = e8.inert, f10.delete(t13));
}
function y5(t13, { allowed: r20, disallowed: e8 } = {}) {
  let i18 = I(t13, "inert-others");
  n(() => {
    var d14, c18;
    if (!i18) return;
    let a27 = o3();
    for (let n17 of (d14 = e8 == null ? void 0 : e8()) != null ? d14 : []) n17 && a27.add(h4(n17));
    let s17 = (c18 = r20 == null ? void 0 : r20()) != null ? c18 : [];
    for (let n17 of s17) {
      if (!n17) continue;
      let l16 = o2(n17);
      if (!l16) continue;
      let o21 = n17.parentElement;
      for (; o21 && o21 !== l16.body; ) {
        for (let p12 of o21.children) s17.some((E17) => p12.contains(E17)) || a27.add(h4(p12));
        o21 = o21.parentElement;
      }
    }
    return a27.dispose;
  }, [i18, r20, e8]);
}

// node_modules/@headlessui/react/dist/hooks/use-on-disappear.js
var import_react63 = __toESM(require_react(), 1);
function p5(s17, n17, o21) {
  let i18 = s3((t13) => {
    let e8 = t13.getBoundingClientRect();
    e8.x === 0 && e8.y === 0 && e8.width === 0 && e8.height === 0 && o21();
  });
  (0, import_react63.useEffect)(() => {
    if (!s17) return;
    let t13 = n17 === null ? null : n4(n17) ? n17 : n17.current;
    if (!t13) return;
    let e8 = o3();
    if (typeof ResizeObserver != "undefined") {
      let r20 = new ResizeObserver(() => i18.current(t13));
      r20.observe(t13), e8.add(() => r20.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let r20 = new IntersectionObserver(() => i18.current(t13));
      r20.observe(t13), e8.add(() => r20.disconnect());
    }
    return () => e8.dispose();
  }, [n17, i18, s17]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react66 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/focus-management.js
var f11 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e8) => `${e8}:not([tabindex='-1'])`).join(",");
var F2 = ["[data-autofocus]"].map((e8) => `${e8}:not([tabindex='-1'])`).join(",");
var T5 = ((n17) => (n17[n17.First = 1] = "First", n17[n17.Previous = 2] = "Previous", n17[n17.Next = 4] = "Next", n17[n17.Last = 8] = "Last", n17[n17.WrapAround = 16] = "WrapAround", n17[n17.NoScroll = 32] = "NoScroll", n17[n17.AutoFocus = 64] = "AutoFocus", n17))(T5 || {});
var y6 = ((o21) => (o21[o21.Error = 0] = "Error", o21[o21.Overflow = 1] = "Overflow", o21[o21.Success = 2] = "Success", o21[o21.Underflow = 3] = "Underflow", o21))(y6 || {});
var S4 = ((t13) => (t13[t13.Previous = -1] = "Previous", t13[t13.Next = 1] = "Next", t13))(S4 || {});
function b3(e8 = document.body) {
  return e8 == null ? [] : Array.from(e8.querySelectorAll(f11)).sort((r20, t13) => Math.sign((r20.tabIndex || Number.MAX_SAFE_INTEGER) - (t13.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function O2(e8 = document.body) {
  return e8 == null ? [] : Array.from(e8.querySelectorAll(F2)).sort((r20, t13) => Math.sign((r20.tabIndex || Number.MAX_SAFE_INTEGER) - (t13.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h5 = ((t13) => (t13[t13.Strict = 0] = "Strict", t13[t13.Loose = 1] = "Loose", t13))(h5 || {});
function A2(e8, r20 = 0) {
  var t13;
  return e8 === ((t13 = o2(e8)) == null ? void 0 : t13.body) ? false : u(r20, { [0]() {
    return e8.matches(f11);
  }, [1]() {
    let l16 = e8;
    for (; l16 !== null; ) {
      if (l16.matches(f11)) return true;
      l16 = l16.parentElement;
    }
    return false;
  } });
}
function V2(e8) {
  let r20 = o2(e8);
  o3().nextFrame(() => {
    r20 && i4(r20.activeElement) && !A2(r20.activeElement, 0) && I2(e8);
  });
}
var H5 = ((t13) => (t13[t13.Keyboard = 0] = "Keyboard", t13[t13.Mouse = 1] = "Mouse", t13))(H5 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e8) => {
  e8.metaKey || e8.altKey || e8.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e8) => {
  e8.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e8.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function I2(e8) {
  e8 == null || e8.focus({ preventScroll: true });
}
var w5 = ["textarea", "input"].join(",");
function _4(e8) {
  var r20, t13;
  return (t13 = (r20 = e8 == null ? void 0 : e8.matches) == null ? void 0 : r20.call(e8, w5)) != null ? t13 : false;
}
function P5(e8, r20 = (t13) => t13) {
  return e8.slice().sort((t13, l16) => {
    let o21 = r20(t13), c18 = r20(l16);
    if (o21 === null || c18 === null) return 0;
    let u24 = o21.compareDocumentPosition(c18);
    return u24 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u24 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function j5(e8, r20) {
  return g2(b3(), r20, { relativeTo: e8 });
}
function g2(e8, r20, { sorted: t13 = true, relativeTo: l16 = null, skipElements: o21 = [] } = {}) {
  let c18 = Array.isArray(e8) ? e8.length > 0 ? e8[0].ownerDocument : document : e8.ownerDocument, u24 = Array.isArray(e8) ? t13 ? P5(e8) : e8 : r20 & 64 ? O2(e8) : b3(e8);
  o21.length > 0 && u24.length > 1 && (u24 = u24.filter((s17) => !o21.some((a27) => a27 != null && "current" in a27 ? (a27 == null ? void 0 : a27.current) === s17 : a27 === s17))), l16 = l16 != null ? l16 : c18.activeElement;
  let n17 = (() => {
    if (r20 & 5) return 1;
    if (r20 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x13 = (() => {
    if (r20 & 1) return 0;
    if (r20 & 2) return Math.max(0, u24.indexOf(l16)) - 1;
    if (r20 & 4) return Math.max(0, u24.indexOf(l16)) + 1;
    if (r20 & 8) return u24.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M9 = r20 & 32 ? { preventScroll: true } : {}, m12 = 0, d14 = u24.length, i18;
  do {
    if (m12 >= d14 || m12 + d14 <= 0) return 0;
    let s17 = x13 + m12;
    if (r20 & 16) s17 = (s17 + d14) % d14;
    else {
      if (s17 < 0) return 3;
      if (s17 >= d14) return 1;
    }
    i18 = u24[s17], i18 == null || i18.focus(M9), m12 += n17;
  } while (i18 !== c18.activeElement);
  return r20 & 6 && _4(i18) && i18.select(), 2;
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t5() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i9() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n10() {
  return t5() || i9();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react64 = __toESM(require_react(), 1);
function i10(t13, e8, o21, n17) {
  let u24 = s3(o21);
  (0, import_react64.useEffect)(() => {
    if (!t13) return;
    function r20(m12) {
      u24.current(m12);
    }
    return document.addEventListener(e8, r20, n17), () => document.removeEventListener(e8, r20, n17);
  }, [t13, e8, n17]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react65 = __toESM(require_react(), 1);
function s7(t13, e8, o21, n17) {
  let i18 = s3(o21);
  (0, import_react65.useEffect)(() => {
    if (!t13) return;
    function r20(d14) {
      i18.current(d14);
    }
    return window.addEventListener(e8, r20, n17), () => window.removeEventListener(e8, r20, n17);
  }, [t13, e8, n17]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var C6 = 30;
function k4(o21, f24, h11) {
  let m12 = s3(h11), s17 = (0, import_react66.useCallback)(function(e8, c18) {
    if (e8.defaultPrevented) return;
    let r20 = c18(e8);
    if (r20 === null || !r20.getRootNode().contains(r20) || !r20.isConnected) return;
    let M9 = function u24(n17) {
      return typeof n17 == "function" ? u24(n17()) : Array.isArray(n17) || n17 instanceof Set ? n17 : [n17];
    }(f24);
    for (let u24 of M9) if (u24 !== null && (u24.contains(r20) || e8.composed && e8.composedPath().includes(u24))) return;
    return !A2(r20, h5.Loose) && r20.tabIndex !== -1 && e8.preventDefault(), m12.current(e8, r20);
  }, [m12, f24]), i18 = (0, import_react66.useRef)(null);
  i10(o21, "pointerdown", (t13) => {
    var e8, c18;
    n10() || (i18.current = ((c18 = (e8 = t13.composedPath) == null ? void 0 : e8.call(t13)) == null ? void 0 : c18[0]) || t13.target);
  }, true), i10(o21, "pointerup", (t13) => {
    if (n10() || !i18.current) return;
    let e8 = i18.current;
    return i18.current = null, s17(t13, () => e8);
  }, true);
  let l16 = (0, import_react66.useRef)({ x: 0, y: 0 });
  i10(o21, "touchstart", (t13) => {
    l16.current.x = t13.touches[0].clientX, l16.current.y = t13.touches[0].clientY;
  }, true), i10(o21, "touchend", (t13) => {
    let e8 = { x: t13.changedTouches[0].clientX, y: t13.changedTouches[0].clientY };
    if (!(Math.abs(e8.x - l16.current.x) >= C6 || Math.abs(e8.y - l16.current.y) >= C6)) return s17(t13, () => i4(t13.target) ? t13.target : null);
  }, true), s7(o21, "blur", (t13) => s17(t13, () => u5(window.document.activeElement) ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react67 = __toESM(require_react(), 1);
function n11(...e8) {
  return (0, import_react67.useMemo)(() => o2(...e8), [...e8]);
}

// node_modules/@headlessui/react/dist/hooks/use-quick-release.js
var import_react68 = __toESM(require_react(), 1);
var m7 = ((e8) => (e8[e8.Ignore = 0] = "Ignore", e8[e8.Select = 1] = "Select", e8[e8.Close = 2] = "Close", e8))(m7 || {});
var g3 = { Ignore: { kind: 0 }, Select: (r20) => ({ kind: 1, target: r20 }), Close: { kind: 2 } };
var E7 = 200;
function k5(r20, { trigger: n17, action: s17, close: e8, select: a27 }) {
  let o21 = (0, import_react68.useRef)(null);
  i10(r20 && n17 !== null, "pointerdown", (t13) => {
    o9(t13 == null ? void 0 : t13.target) && n17 != null && n17.contains(t13.target) && (o21.current = /* @__PURE__ */ new Date());
  }), i10(r20 && n17 !== null, "pointerup", (t13) => {
    if (o21.current === null || !i4(t13.target)) return;
    let i18 = s17(t13), u24 = (/* @__PURE__ */ new Date()).getTime() - o21.current.getTime();
    switch (o21.current = null, i18.kind) {
      case 0:
        return;
      case 1: {
        u24 > E7 && (a27(i18.target), e8());
        break;
      }
      case 2: {
        e8();
        break;
      }
    }
  }, { capture: true });
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
var import_react70 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react69 = __toESM(require_react(), 1);
function E8(n17, e8, a27, t13) {
  let i18 = s3(a27);
  (0, import_react69.useEffect)(() => {
    n17 = n17 != null ? n17 : window;
    function r20(o21) {
      i18.current(o21);
    }
    return n17.addEventListener(e8, r20, t13), () => n17.removeEventListener(e8, r20, t13);
  }, [n17, e8, t13]);
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
function f12(e8) {
  let l16 = (0, import_react70.useRef)({ value: "", selectionStart: null, selectionEnd: null });
  return E8(e8, "blur", (n17) => {
    let t13 = n17.target;
    l4(t13) && (l16.current = { value: t13.value, selectionStart: t13.selectionStart, selectionEnd: t13.selectionEnd });
  }), o5(() => {
    if (document.activeElement !== e8 && l4(e8) && e8.isConnected) {
      if (e8.focus({ preventScroll: true }), e8.value !== l16.current.value) e8.setSelectionRange(e8.value.length, e8.value.length);
      else {
        let { selectionStart: n17, selectionEnd: t13 } = l16.current;
        n17 !== null && t13 !== null && e8.setSelectionRange(n17, t13);
      }
      l16.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react71 = __toESM(require_react(), 1);
function e5(t13, u24) {
  return (0, import_react71.useMemo)(() => {
    var n17;
    if (t13.type) return t13.type;
    let r20 = (n17 = t13.as) != null ? n17 : "button";
    if (typeof r20 == "string" && r20.toLowerCase() === "button" || (u24 == null ? void 0 : u24.tagName) === "BUTTON" && !u24.hasAttribute("type")) return "button";
  }, [t13.type, t13.as, u24]);
}

// node_modules/@headlessui/react/dist/hooks/use-store.js
var import_react72 = __toESM(require_react(), 1);
function o14(t13) {
  return (0, import_react72.useSyncExternalStore)(t13.subscribe, t13.getSnapshot, t13.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a13(o21, r20) {
  let t13 = o21(), n17 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t13;
  }, subscribe(e8) {
    return n17.add(e8), () => n17.delete(e8);
  }, dispatch(e8, ...s17) {
    let i18 = r20[e8].call(t13, ...s17);
    i18 && (t13 = i18, n17.forEach((c18) => c18()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function d7() {
  let r20;
  return { before({ doc: e8 }) {
    var l16;
    let o21 = e8.documentElement, t13 = (l16 = e8.defaultView) != null ? l16 : window;
    r20 = Math.max(0, t13.innerWidth - o21.clientWidth);
  }, after({ doc: e8, d: o21 }) {
    let t13 = e8.documentElement, l16 = Math.max(0, t13.clientWidth - t13.offsetWidth), n17 = Math.max(0, r20 - l16);
    o21.style(t13, "paddingRight", `${n17}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function w6() {
  return t5() ? { before({ doc: n17, d: l16, meta: f24 }) {
    function i18(a27) {
      return f24.containers.flatMap((r20) => r20()).some((r20) => r20.contains(a27));
    }
    l16.microTask(() => {
      var c18;
      if (window.getComputedStyle(n17.documentElement).scrollBehavior !== "auto") {
        let t13 = o3();
        t13.style(n17.documentElement, "scrollBehavior", "auto"), l16.add(() => l16.microTask(() => t13.dispose()));
      }
      let a27 = (c18 = window.scrollY) != null ? c18 : window.pageYOffset, r20 = null;
      l16.addEventListener(n17, "click", (t13) => {
        if (i4(t13.target)) try {
          let e8 = t13.target.closest("a");
          if (!e8) return;
          let { hash: m12 } = new URL(e8.href), s17 = n17.querySelector(m12);
          i4(s17) && !i18(s17) && (r20 = s17);
        } catch {
        }
      }, true), l16.addEventListener(n17, "touchstart", (t13) => {
        if (i4(t13.target) && r4(t13.target)) if (i18(t13.target)) {
          let e8 = t13.target;
          for (; e8.parentElement && i18(e8.parentElement); ) e8 = e8.parentElement;
          l16.style(e8, "overscrollBehavior", "contain");
        } else l16.style(t13.target, "touchAction", "none");
      }), l16.addEventListener(n17, "touchmove", (t13) => {
        if (i4(t13.target)) {
          if (l4(t13.target)) return;
          if (i18(t13.target)) {
            let e8 = t13.target;
            for (; e8.parentElement && e8.dataset.headlessuiPortal !== "" && !(e8.scrollHeight > e8.clientHeight || e8.scrollWidth > e8.clientWidth); ) e8 = e8.parentElement;
            e8.dataset.headlessuiPortal === "" && t13.preventDefault();
          } else t13.preventDefault();
        }
      }, { passive: false }), l16.add(() => {
        var e8;
        let t13 = (e8 = window.scrollY) != null ? e8 : window.pageYOffset;
        a27 !== t13 && window.scrollTo(0, a27), r20 && r20.isConnected && (r20.scrollIntoView({ block: "nearest" }), r20 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function r8() {
  return { before({ doc: e8, d: o21 }) {
    o21.style(e8.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m8(e8) {
  let n17 = {};
  for (let t13 of e8) Object.assign(n17, t13(n17));
  return n17;
}
var a14 = a13(() => /* @__PURE__ */ new Map(), { PUSH(e8, n17) {
  var o21;
  let t13 = (o21 = this.get(e8)) != null ? o21 : { doc: e8, count: 0, d: o3(), meta: /* @__PURE__ */ new Set() };
  return t13.count++, t13.meta.add(n17), this.set(e8, t13), this;
}, POP(e8, n17) {
  let t13 = this.get(e8);
  return t13 && (t13.count--, t13.meta.delete(n17)), this;
}, SCROLL_PREVENT({ doc: e8, d: n17, meta: t13 }) {
  let o21 = { doc: e8, d: n17, meta: m8(t13) }, c18 = [w6(), d7(), r8()];
  c18.forEach(({ before: r20 }) => r20 == null ? void 0 : r20(o21)), c18.forEach(({ after: r20 }) => r20 == null ? void 0 : r20(o21));
}, SCROLL_ALLOW({ d: e8 }) {
  e8.dispose();
}, TEARDOWN({ doc: e8 }) {
  this.delete(e8);
} });
a14.subscribe(() => {
  let e8 = a14.getSnapshot(), n17 = /* @__PURE__ */ new Map();
  for (let [t13] of e8) n17.set(t13, t13.documentElement.style.overflow);
  for (let t13 of e8.values()) {
    let o21 = n17.get(t13.doc) === "hidden", c18 = t13.count !== 0;
    (c18 && !o21 || !c18 && o21) && a14.dispatch(t13.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t13), t13.count === 0 && a14.dispatch("TEARDOWN", t13);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function a15(r20, e8, n17 = () => ({ containers: [] })) {
  let f24 = o14(a14), o21 = e8 ? f24.get(e8) : void 0, i18 = o21 ? o21.count > 0 : false;
  return n(() => {
    if (!(!e8 || !r20)) return a14.dispatch("PUSH", e8, n17), () => a14.dispatch("POP", e8, n17);
  }, [r20, e8]), i18;
}

// node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js
function f13(e8, c18, n17 = () => [document.body]) {
  let r20 = I(e8, "scroll-lock");
  a15(r20, c18, (t13) => {
    var o21;
    return { containers: [...(o21 = t13.containers) != null ? o21 : [], n17] };
  });
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react73 = __toESM(require_react(), 1);
function t7(e8) {
  return [e8.screenX, e8.screenY];
}
function u14() {
  let e8 = (0, import_react73.useRef)([-1, -1]);
  return { wasMoved(r20) {
    let n17 = t7(r20);
    return e8.current[0] === n17[0] && e8.current[1] === n17[1] ? false : (e8.current = n17, true);
  }, update(r20) {
    e8.current = t7(r20);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var import_react75 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react74 = __toESM(require_react(), 1);
function c6(u24 = 0) {
  let [t13, l16] = (0, import_react74.useState)(u24), g8 = (0, import_react74.useCallback)((e8) => l16(e8), [t13]), s17 = (0, import_react74.useCallback)((e8) => l16((a27) => a27 | e8), [t13]), m12 = (0, import_react74.useCallback)((e8) => (t13 & e8) === e8, [t13]), n17 = (0, import_react74.useCallback)((e8) => l16((a27) => a27 & ~e8), [l16]), F13 = (0, import_react74.useCallback)((e8) => l16((a27) => a27 ^ e8), [l16]);
  return { flags: t13, setFlag: g8, addFlag: s17, hasFlag: m12, removeFlag: n17, toggleFlag: F13 };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var T7;
var b5;
typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((T7 = process == null ? void 0 : process.env) == null ? void 0 : T7["NODE_ENV"]) === "test" && typeof ((b5 = Element == null ? void 0 : Element.prototype) == null ? void 0 : b5.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var L4 = ((r20) => (r20[r20.None = 0] = "None", r20[r20.Closed = 1] = "Closed", r20[r20.Enter = 2] = "Enter", r20[r20.Leave = 4] = "Leave", r20))(L4 || {});
function R2(t13) {
  let n17 = {};
  for (let e8 in t13) t13[e8] === true && (n17[`data-${e8}`] = "");
  return n17;
}
function x4(t13, n17, e8, i18) {
  let [r20, o21] = (0, import_react75.useState)(e8), { hasFlag: s17, addFlag: a27, removeFlag: l16 } = c6(t13 && r20 ? 3 : 0), u24 = (0, import_react75.useRef)(false), f24 = (0, import_react75.useRef)(false), E17 = p();
  return n(() => {
    var d14;
    if (t13) {
      if (e8 && o21(true), !n17) {
        e8 && a27(3);
        return;
      }
      return (d14 = i18 == null ? void 0 : i18.start) == null || d14.call(i18, e8), C7(n17, { inFlight: u24, prepare() {
        f24.current ? f24.current = false : f24.current = u24.current, u24.current = true, !f24.current && (e8 ? (a27(3), l16(4)) : (a27(4), l16(2)));
      }, run() {
        f24.current ? e8 ? (l16(3), a27(4)) : (l16(4), a27(3)) : e8 ? l16(1) : a27(1);
      }, done() {
        var p12;
        f24.current && typeof n17.getAnimations == "function" && n17.getAnimations().length > 0 || (u24.current = false, l16(7), e8 || o21(false), (p12 = i18 == null ? void 0 : i18.end) == null || p12.call(i18, e8));
      } });
    }
  }, [t13, e8, n17, E17]), t13 ? [r20, { closed: s17(1), enter: s17(2), leave: s17(4), transition: s17(2) || s17(4) }] : [e8, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function C7(t13, { prepare: n17, run: e8, done: i18, inFlight: r20 }) {
  let o21 = o3();
  return j6(t13, { prepare: n17, inFlight: r20 }), o21.nextFrame(() => {
    e8(), o21.requestAnimationFrame(() => {
      o21.add(M(t13, i18));
    });
  }), o21.dispose;
}
function M(t13, n17) {
  var o21, s17;
  let e8 = o3();
  if (!t13) return e8.dispose;
  let i18 = false;
  e8.add(() => {
    i18 = true;
  });
  let r20 = (s17 = (o21 = t13.getAnimations) == null ? void 0 : o21.call(t13).filter((a27) => a27 instanceof CSSTransition)) != null ? s17 : [];
  return r20.length === 0 ? (n17(), e8.dispose) : (Promise.allSettled(r20.map((a27) => a27.finished)).then(() => {
    i18 || n17();
  }), e8.dispose);
}
function j6(t13, { inFlight: n17, prepare: e8 }) {
  if (n17 != null && n17.current) {
    e8();
    return;
  }
  let i18 = t13.style.transition;
  t13.style.transition = "none", e8(), t13.offsetHeight, t13.style.transition = i18;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react76 = __toESM(require_react(), 1);
function F3(c18, { container: e8, accept: t13, walk: r20 }) {
  let o21 = (0, import_react76.useRef)(t13), l16 = (0, import_react76.useRef)(r20);
  (0, import_react76.useEffect)(() => {
    o21.current = t13, l16.current = r20;
  }, [t13, r20]), n(() => {
    if (!e8 || !c18) return;
    let n17 = o2(e8);
    if (!n17) return;
    let f24 = o21.current, p12 = l16.current, i18 = Object.assign((m12) => f24(m12), { acceptNode: f24 }), u24 = n17.createTreeWalker(e8, NodeFilter.SHOW_ELEMENT, i18, false);
    for (; u24.nextNode(); ) p12(u24.currentNode);
  }, [e8, c18, o21, l16]);
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react77 = __toESM(require_react(), 1);
function m9(u24, t13) {
  let e8 = (0, import_react77.useRef)([]), r20 = o5(u24);
  (0, import_react77.useEffect)(() => {
    let o21 = [...e8.current];
    for (let [a27, l16] of t13.entries()) if (e8.current[a27] !== l16) {
      let n17 = r20(t13, o21);
      return e8.current = t13, n17;
    }
  }, [r20, ...t13]);
}

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var React2 = __toESM(require_react(), 1);
var import_react78 = __toESM(require_react(), 1);

// node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/tabbable/dist/index.esm.js
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var ReactDOM = __toESM(require_react_dom(), 1);
function useMergeRefs(refs) {
  return React2.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }, refs);
}
var SafeReact = {
  ...React2
};
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React2.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React2.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index2, cols, prevRow) {
  return Math.floor(index2 / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index2) {
  return index2 < 0 || index2 >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index2 = startingIndex;
  do {
    index2 += decrement ? -amount : amount;
  } while (index2 >= 0 && index2 <= list.length - 1 && isDisabled(list, index2, disabledIndices));
  return index2;
}
function getGridNavigatedIndex(elementsRef, _ref) {
  let {
    event,
    orientation,
    loop,
    rtl,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset2 = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset2 : offset2 - cols;
        }
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === (rtl ? ARROW_LEFT : ARROW_RIGHT)) {
      stop && stopEvent(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT)) {
      stop && stopEvent(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT) ? maxIndex : findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function buildCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index2) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (true) {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index2 + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i18 = 0; i18 < width; i18++) {
        for (let j11 = 0; j11 < height; j11++) {
          targetCells.push(startIndex + i18 + j11 * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every((cell) => cellMap[cell] == null)) {
        targetCells.forEach((cell) => {
          cellMap[cell] = index2;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });
  return [...cellMap];
}
function getCellIndexOfCorner(index2, sizes, cellMap, cols, corner) {
  if (index2 === -1) return -1;
  const firstCellIndex = cellMap.indexOf(index2);
  const sizeItem = sizes[index2];
  switch (corner) {
    case "tl":
      return firstCellIndex;
    case "tr":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + sizeItem.width - 1;
    case "bl":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + (sizeItem.height - 1) * cols;
    case "br":
      return cellMap.lastIndexOf(index2);
  }
}
function getCellIndices(indices, cellMap) {
  return cellMap.flatMap((index2, cellIndex) => indices.includes(index2) ? [cellIndex] : []);
}
function isDisabled(list, index2, disabledIndices) {
  if (disabledIndices) {
    return disabledIndices.includes(index2);
  }
  const element = list[index2];
  return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}
var index = typeof document !== "undefined" ? import_react78.useLayoutEffect : import_react78.useEffect;
function sortByDocumentPosition(a27, b11) {
  const position = a27.compareDocumentPosition(b11);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
var FloatingListContext = React2.createContext({
  register: () => {
  },
  unregister: () => {
  },
  map: /* @__PURE__ */ new Map(),
  elementsRef: {
    current: []
  }
});
function FloatingList(props) {
  const {
    children,
    elementsRef,
    labelsRef
  } = props;
  const [map, setMap] = React2.useState(() => /* @__PURE__ */ new Map());
  const register = React2.useCallback((node) => {
    setMap((prevMap) => new Map(prevMap).set(node, null));
  }, []);
  const unregister = React2.useCallback((node) => {
    setMap((prevMap) => {
      const map2 = new Map(prevMap);
      map2.delete(node);
      return map2;
    });
  }, []);
  index(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index2) => {
      newMap.set(node, index2);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return React2.createElement(FloatingListContext.Provider, {
    value: React2.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef])
  }, children);
}
function useListItem(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    label
  } = props;
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = React2.useContext(FloatingListContext);
  const [index$1, setIndex] = React2.useState(null);
  const componentRef = React2.useRef(null);
  const ref = React2.useCallback((node) => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== void 0;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  index(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index(() => {
    const index2 = componentRef.current ? map.get(componentRef.current) : null;
    if (index2 != null) {
      setIndex(index2);
    }
  }, [map]);
  return React2.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}
function renderJsx(render, computedProps) {
  if (typeof render === "function") {
    return render(computedProps);
  }
  if (render) {
    return React2.cloneElement(render, computedProps);
  }
  return React2.createElement("div", computedProps);
}
var CompositeContext = React2.createContext({
  activeIndex: 0,
  onNavigate: () => {
  }
});
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
var allKeys = [...horizontalKeys, ...verticalKeys];
var Composite = React2.forwardRef(function Composite2(props, forwardedRef) {
  const {
    render,
    orientation = "both",
    loop = true,
    rtl = false,
    cols = 1,
    disabledIndices,
    activeIndex: externalActiveIndex,
    onNavigate: externalSetActiveIndex,
    itemSizes,
    dense = false,
    ...domProps
  } = props;
  const [internalActiveIndex, internalSetActiveIndex] = React2.useState(0);
  const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
  const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
  const elementsRef = React2.useRef([]);
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const contextValue = React2.useMemo(() => ({
    activeIndex,
    onNavigate
  }), [activeIndex, onNavigate]);
  const isGrid = cols > 1;
  function handleKeyDown(event) {
    if (!allKeys.includes(event.key)) return;
    let nextIndex = activeIndex;
    const minIndex = getMinIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxIndex(elementsRef, disabledIndices);
    const horizontalEndKey = rtl ? ARROW_LEFT : ARROW_RIGHT;
    const horizontalStartKey = rtl ? ARROW_RIGHT : ARROW_LEFT;
    if (isGrid) {
      const sizes = itemSizes || Array.from({
        length: elementsRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex((index2) => index2 != null && !isDisabled(elementsRef.current, index2, disabledIndices));
      const maxGridIndex = cellMap.reduce((foundIndex, index2, cellIndex) => index2 != null && !isDisabled(elementsRef.current, index2, disabledIndices) ? cellIndex : foundIndex, -1);
      const maybeNextIndex = cellMap[getGridNavigatedIndex({
        current: cellMap.map((itemIndex) => itemIndex ? elementsRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        rtl,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...disabledIndices || elementsRef.current.map((_10, index2) => isDisabled(elementsRef.current, index2) ? index2 : void 0), void 0], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(
          activeIndex > maxIndex ? minIndex : activeIndex,
          sizes,
          cellMap,
          cols,
          // use a corner matching the edge closest to the direction we're
          // moving in so we don't end up in the same item. Prefer
          // top/left over bottom/right.
          event.key === ARROW_DOWN ? "bl" : event.key === horizontalEndKey ? "tr" : "tl"
        )
      })];
      if (maybeNextIndex != null) {
        nextIndex = maybeNextIndex;
      }
    }
    const toEndKeys = {
      horizontal: [horizontalEndKey],
      vertical: [ARROW_DOWN],
      both: [horizontalEndKey, ARROW_DOWN]
    }[orientation];
    const toStartKeys = {
      horizontal: [horizontalStartKey],
      vertical: [ARROW_UP],
      both: [horizontalStartKey, ARROW_UP]
    }[orientation];
    const preventedKeys = isGrid ? allKeys : {
      horizontal: horizontalKeys,
      vertical: verticalKeys,
      both: allKeys
    }[orientation];
    if (nextIndex === activeIndex && [...toEndKeys, ...toStartKeys].includes(event.key)) {
      if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
        nextIndex = minIndex;
      } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
        nextIndex = maxIndex;
      } else {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: nextIndex,
          decrement: toStartKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== activeIndex && !isIndexOutOfBounds(elementsRef, nextIndex)) {
      var _elementsRef$current$;
      event.stopPropagation();
      if (preventedKeys.includes(event.key)) {
        event.preventDefault();
      }
      onNavigate(nextIndex);
      (_elementsRef$current$ = elementsRef.current[nextIndex]) == null || _elementsRef$current$.focus();
    }
  }
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: forwardedRef,
    "aria-orientation": orientation === "both" ? void 0 : orientation,
    onKeyDown(e8) {
      domProps.onKeyDown == null || domProps.onKeyDown(e8);
      renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e8);
      handleKeyDown(e8);
    }
  };
  return React2.createElement(CompositeContext.Provider, {
    value: contextValue
  }, React2.createElement(FloatingList, {
    elementsRef
  }, renderJsx(render, computedProps)));
});
var CompositeItem = React2.forwardRef(function CompositeItem2(props, forwardedRef) {
  const {
    render,
    ...domProps
  } = props;
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const {
    activeIndex,
    onNavigate
  } = React2.useContext(CompositeContext);
  const {
    ref,
    index: index2
  } = useListItem();
  const mergedRef = useMergeRefs([ref, forwardedRef, renderElementProps.ref]);
  const isActive = activeIndex === index2;
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: mergedRef,
    tabIndex: isActive ? 0 : -1,
    "data-active": isActive ? "" : void 0,
    onFocus(e8) {
      domProps.onFocus == null || domProps.onFocus(e8);
      renderElementProps.onFocus == null || renderElementProps.onFocus(e8);
      onNavigate(index2);
    }
  };
  return renderJsx(render, computedProps);
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i18 = 1; i18 < arguments.length; i18++) {
      var source = arguments[i18];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var serverHandoffComplete = false;
var count = 0;
var genId = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
);
function useFloatingId() {
  const [id, setId] = React2.useState(() => serverHandoffComplete ? genId() : void 0);
  index(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React2.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
var useReactId = SafeReact.useId;
var useId = useReactId || useFloatingId;
var devMessageSet;
if (true) {
  devMessageSet = /* @__PURE__ */ new Set();
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}
var FloatingArrow = React2.forwardRef(function FloatingArrow2(props, ref) {
  const {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow: arrow2,
        shift: shift2
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d: d14,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = props;
  if (true) {
    if (!ref) {
      warn("The `ref` prop is required for `FloatingArrow`.");
    }
  }
  const clipPathId = useId();
  const [isRTL, setIsRTL] = React2.useState(false);
  index(() => {
    if (!floating) return;
    const isRTL2 = getComputedStyle2(floating).direction === "rtl";
    if (isRTL2) {
      setIsRTL(true);
    }
  }, [floating]);
  if (!floating) {
    return null;
  }
  const [side, alignment] = placement.split("-");
  const isVerticalSide = side === "top" || side === "bottom";
  let computedStaticOffset = staticOffset;
  if (isVerticalSide && shift2 != null && shift2.x || !isVerticalSide && shift2 != null && shift2.y) {
    computedStaticOffset = null;
  }
  const computedStrokeWidth = strokeWidth * 2;
  const halfStrokeWidth = computedStrokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const isCustomShape = !!d14;
  const yOffsetProp = computedStaticOffset && alignment === "end" ? "bottom" : "top";
  let xOffsetProp = computedStaticOffset && alignment === "end" ? "right" : "left";
  if (computedStaticOffset && isRTL) {
    xOffsetProp = alignment === "end" ? "left" : "right";
  }
  const arrowX = (arrow2 == null ? void 0 : arrow2.x) != null ? computedStaticOffset || arrow2.x : "";
  const arrowY = (arrow2 == null ? void 0 : arrow2.y) != null ? computedStaticOffset || arrow2.y : "";
  const dValue = d14 || "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
  const rotation = {
    top: isCustomShape ? "rotate(180deg)" : "",
    left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: isCustomShape ? "" : "rotate(180deg)",
    right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
  }[side];
  return React2.createElement("svg", _extends({}, rest, {
    "aria-hidden": true,
    ref,
    width: isCustomShape ? width : width + computedStrokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + computedStrokeWidth / 2 + "px)",
      transform: [rotation, transform].filter((t13) => !!t13).join(" "),
      ...restStyle
    }
  }), computedStrokeWidth > 0 && React2.createElement("path", {
    clipPath: "url(#" + clipPathId + ")",
    fill: "none",
    stroke,
    strokeWidth: computedStrokeWidth + (d14 ? 0 : 1),
    d: dValue
  }), React2.createElement("path", {
    stroke: computedStrokeWidth && !d14 ? rest.fill : "none",
    d: dValue
  }), React2.createElement("clipPath", {
    id: clipPathId
  }, React2.createElement("rect", {
    x: -halfStrokeWidth,
    y: halfStrokeWidth * (isCustomShape ? -1 : 1),
    width: width + computedStrokeWidth,
    height: width
  })));
});
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l16) => l16 !== listener)) || []);
    }
  };
}
var FloatingNodeContext = React2.createContext(null);
var FloatingTreeContext = React2.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React2.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
var useFloatingTree = () => React2.useContext(FloatingTreeContext);
function createAttribute(name) {
  return "data-floating-ui-" + name;
}
var safePolygonIdentifier = createAttribute("safe-polygon");
var NOOP = () => {
};
var FloatingDelayGroupContext = React2.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: NOOP,
  setState: NOOP,
  isInstantPhase: false
});
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    event.target;
    clearTimeout(timeoutId);
  }
}
var FocusGuard = React2.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React2.useState();
  index(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    "aria-hidden": role ? void 0 : true,
    [createAttribute("focus-guard")]: "",
    style: HIDDEN_STYLES
  };
  return React2.createElement("span", _extends({}, props, restProps));
});
var PortalContext = React2.createContext(null);
var attr = createAttribute("portal");
var FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
var VisuallyHiddenDismiss = React2.forwardRef(function VisuallyHiddenDismiss2(props, ref) {
  return React2.createElement("button", _extends({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
var lockCount = 0;
function enableScrollLock() {
  const isIOS = /iP(hone|ad|od)|iOS/.test(getPlatform());
  const bodyStyle = document.body.style;
  const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
  const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.scrollX;
  const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.scrollY;
  bodyStyle.overflow = "hidden";
  if (scrollbarWidth) {
    bodyStyle[paddingProp] = scrollbarWidth + "px";
  }
  if (isIOS) {
    var _window$visualViewpor, _window$visualViewpor2;
    const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
    const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
    Object.assign(bodyStyle, {
      position: "fixed",
      top: -(scrollY - Math.floor(offsetTop)) + "px",
      left: -(scrollX - Math.floor(offsetLeft)) + "px",
      right: "0"
    });
  }
  return () => {
    Object.assign(bodyStyle, {
      overflow: "",
      [paddingProp]: ""
    });
    if (isIOS) {
      Object.assign(bodyStyle, {
        position: "",
        top: "",
        left: "",
        right: ""
      });
      window.scrollTo(scrollX, scrollY);
    }
  };
}
var cleanup = () => {
};
var FloatingOverlay = React2.forwardRef(function FloatingOverlay2(props, ref) {
  const {
    lockScroll = false,
    ...rest
  } = props;
  index(() => {
    if (!lockScroll) return;
    lockCount++;
    if (lockCount === 1) {
      cleanup = enableScrollLock();
    }
    return () => {
      lockCount--;
      if (lockCount === 0) {
        cleanup();
      }
    };
  }, [lockScroll]);
  return React2.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = React2.useRef({});
  const [events] = React2.useState(() => createPubSub());
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
    }
  }
  const [positionReference, setPositionReference] = React2.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    dataRef.current.openEvent = open2 ? event : void 0;
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
  });
  const refs = React2.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = React2.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return React2.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = React2.useState(null);
  const [positionReference, _setPositionReference] = React2.useState(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.domReference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = React2.useRef(null);
  const tree = useFloatingTree();
  index(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = useFloating({
    ...options,
    elements: {
      ...computedElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React2.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React2.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React2.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React2.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React2.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React2.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _10,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1,
      [FOCUSABLE_ATTRIBUTE]: ""
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
  const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
  const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
  const getReferenceProps = React2.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps
  );
  const getFloatingProps = React2.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps
  );
  const getItemProps = React2.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps
  );
  return React2.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
var inner = (props) => ({
  name: "inner",
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index2 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = evaluate(props, state);
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index2];
    const scrollEl = (scrollRef == null ? void 0 : scrollRef.current) || floating;
    const clientTop = floating.clientTop || scrollEl.clientTop;
    const floatingIsBordered = floating.clientTop !== 0;
    const scrollElIsBordered = scrollEl.clientTop !== 0;
    const floatingIsScrollEl = floating === scrollEl;
    if (true) {
      if (!state.placement.startsWith("bottom")) {
        warn('`placement` side must be "bottom" when using the `inner`', "middleware.");
      }
    }
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...await offset(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
    };
    const overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions);
    const refOverflow = await detectOverflow(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    });
    const diffY = max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight;
    const rounder = isScrollable ? (v6) => v6 : round;
    const maxHeight = rounder(max(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - max(0, overflow.bottom)));
    scrollEl.style.maxHeight = maxHeight + "px";
    scrollEl.scrollTop = diffY;
    if (onFallbackChange) {
      const shouldFallback = scrollEl.offsetHeight < item.offsetHeight * min(minItemsVisible, listRef.current.length) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
      ReactDOM.flushSync(() => onFallbackChange(shouldFallback));
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
});
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context;
  const {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props;
  const onChange = useEffectEvent(unstable_onChange);
  const controlledScrollingRef = React2.useRef(false);
  const prevScrollTopRef = React2.useRef(null);
  const initialOverflowRef = React2.useRef(null);
  React2.useEffect(() => {
    if (!enabled) return;
    function onWheel(e8) {
      if (e8.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e8.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e8.preventDefault();
        ReactDOM.flushSync(() => {
          onChange((d14) => d14 + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        el.scrollTop += dY;
      }
    }
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener("wheel", onWheel);
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  const floating = React2.useMemo(() => ({
    onKeyDown() {
      controlledScrollingRef.current = true;
    },
    onWheel() {
      controlledScrollingRef.current = false;
    },
    onPointerMove() {
      controlledScrollingRef.current = false;
    },
    onScroll() {
      const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
      if (!overflowRef.current || !el || !controlledScrollingRef.current) {
        return;
      }
      if (prevScrollTopRef.current !== null) {
        const scrollDiff = el.scrollTop - prevScrollTopRef.current;
        if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
          ReactDOM.flushSync(() => onChange((d14) => d14 + scrollDiff));
        }
      }
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
      });
    }
  }), [elements.floating, onChange, overflowRef, scrollRef]);
  return React2.useMemo(() => enabled ? {
    floating
  } : {}, [enabled, floating]);
}

// node_modules/@headlessui/react/dist/internal/floating.js
var j7 = __toESM(require_react(), 1);
var import_react80 = __toESM(require_react(), 1);
var y7 = (0, import_react80.createContext)({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
y7.displayName = "FloatingContext";
var $3 = (0, import_react80.createContext)(null);
$3.displayName = "PlacementContext";
function ye(e8) {
  return (0, import_react80.useMemo)(() => e8 ? typeof e8 == "string" ? { to: e8 } : e8 : null, [e8]);
}
function Fe2() {
  return (0, import_react80.useContext)(y7).setReference;
}
function be() {
  return (0, import_react80.useContext)(y7).getReferenceProps;
}
function Te() {
  let { getFloatingProps: e8, slot: t13 } = (0, import_react80.useContext)(y7);
  return (0, import_react80.useCallback)((...n17) => Object.assign({}, e8(...n17), { "data-anchor": t13.anchor }), [e8, t13]);
}
function Re(e8 = null) {
  e8 === false && (e8 = null), typeof e8 == "string" && (e8 = { to: e8 });
  let t13 = (0, import_react80.useContext)($3), n17 = (0, import_react80.useMemo)(() => e8, [JSON.stringify(e8, (l16, o21) => {
    var u24;
    return (u24 = o21 == null ? void 0 : o21.outerHTML) != null ? u24 : o21;
  })]);
  n(() => {
    t13 == null || t13(n17 != null ? n17 : null);
  }, [t13, n17]);
  let r20 = (0, import_react80.useContext)(y7);
  return (0, import_react80.useMemo)(() => [r20.setFloating, e8 ? r20.styles : {}], [r20.setFloating, e8, r20.styles]);
}
var D2 = 4;
function Ae({ children: e8, enabled: t13 = true }) {
  let [n17, r20] = (0, import_react80.useState)(null), [l16, o21] = (0, import_react80.useState)(0), u24 = (0, import_react80.useRef)(null), [f24, s17] = (0, import_react80.useState)(null);
  ce(f24);
  let i18 = t13 && n17 !== null && f24 !== null, { to: F13 = "bottom", gap: E17 = 0, offset: A6 = 0, padding: c18 = 0, inner: h11 } = ge(n17, f24), [a27, p12 = "center"] = F13.split(" ");
  n(() => {
    i18 && o21(0);
  }, [i18]);
  let { refs: b11, floatingStyles: S10, context: g8 } = useFloating2({ open: i18, placement: a27 === "selection" ? p12 === "center" ? "bottom" : `bottom-${p12}` : p12 === "center" ? `${a27}` : `${a27}-${p12}`, strategy: "absolute", transform: false, middleware: [offset({ mainAxis: a27 === "selection" ? 0 : E17, crossAxis: A6 }), shift({ padding: c18 }), a27 !== "selection" && flip({ padding: c18 }), a27 === "selection" && h11 ? inner({ ...h11, padding: c18, overflowRef: u24, offset: l16, minItemsVisible: D2, referenceOverflowThreshold: c18, onFallbackChange(P7) {
    var L8, N2;
    if (!P7) return;
    let d14 = g8.elements.floating;
    if (!d14) return;
    let M9 = parseFloat(getComputedStyle(d14).scrollPaddingBottom) || 0, I8 = Math.min(D2, d14.childElementCount), W2 = 0, B4 = 0;
    for (let m12 of (N2 = (L8 = g8.elements.floating) == null ? void 0 : L8.childNodes) != null ? N2 : []) if (n4(m12)) {
      let x13 = m12.offsetTop, k9 = x13 + m12.clientHeight + M9, H12 = d14.scrollTop, U6 = H12 + d14.clientHeight;
      if (x13 >= H12 && k9 <= U6) I8--;
      else {
        B4 = Math.max(0, Math.min(k9, U6) - Math.max(x13, H12)), W2 = m12.clientHeight;
        break;
      }
    }
    I8 >= 1 && o21((m12) => {
      let x13 = W2 * I8 - B4 + M9;
      return m12 >= x13 ? m12 : x13;
    });
  } }) : null, size({ padding: c18, apply({ availableWidth: P7, availableHeight: d14, elements: M9 }) {
    Object.assign(M9.floating.style, { overflow: "auto", maxWidth: `${P7}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${d14}px)` });
  } })].filter(Boolean), whileElementsMounted: autoUpdate }), [w12 = a27, V6 = p12] = g8.placement.split("-");
  a27 === "selection" && (w12 = "selection");
  let G6 = (0, import_react80.useMemo)(() => ({ anchor: [w12, V6].filter(Boolean).join(" ") }), [w12, V6]), K6 = useInnerOffset(g8, { overflowRef: u24, onChange: o21 }), { getReferenceProps: Q4, getFloatingProps: X4 } = useInteractions([K6]), Y4 = o5((P7) => {
    s17(P7), b11.setFloating(P7);
  });
  return j7.createElement($3.Provider, { value: r20 }, j7.createElement(y7.Provider, { value: { setFloating: Y4, setReference: b11.setReference, styles: S10, getReferenceProps: Q4, getFloatingProps: X4, slot: G6 } }, e8));
}
function ce(e8) {
  n(() => {
    if (!e8) return;
    let t13 = new MutationObserver(() => {
      let n17 = window.getComputedStyle(e8).maxHeight, r20 = parseFloat(n17);
      if (isNaN(r20)) return;
      let l16 = parseInt(n17);
      isNaN(l16) || r20 !== l16 && (e8.style.maxHeight = `${Math.ceil(r20)}px`);
    });
    return t13.observe(e8, { attributes: true, attributeFilter: ["style"] }), () => {
      t13.disconnect();
    };
  }, [e8]);
}
function ge(e8, t13) {
  var o21, u24, f24;
  let n17 = O3((o21 = e8 == null ? void 0 : e8.gap) != null ? o21 : "var(--anchor-gap, 0)", t13), r20 = O3((u24 = e8 == null ? void 0 : e8.offset) != null ? u24 : "var(--anchor-offset, 0)", t13), l16 = O3((f24 = e8 == null ? void 0 : e8.padding) != null ? f24 : "var(--anchor-padding, 0)", t13);
  return { ...e8, gap: n17, offset: r20, padding: l16 };
}
function O3(e8, t13, n17 = void 0) {
  let r20 = p(), l16 = o5((s17, i18) => {
    if (s17 == null) return [n17, null];
    if (typeof s17 == "number") return [s17, null];
    if (typeof s17 == "string") {
      if (!i18) return [n17, null];
      let F13 = J2(s17, i18);
      return [F13, (E17) => {
        let A6 = q(s17);
        {
          let c18 = A6.map((h11) => window.getComputedStyle(i18).getPropertyValue(h11));
          r20.requestAnimationFrame(function h11() {
            r20.nextFrame(h11);
            let a27 = false;
            for (let [b11, S10] of A6.entries()) {
              let g8 = window.getComputedStyle(i18).getPropertyValue(S10);
              if (c18[b11] !== g8) {
                c18[b11] = g8, a27 = true;
                break;
              }
            }
            if (!a27) return;
            let p12 = J2(s17, i18);
            F13 !== p12 && (E17(p12), F13 = p12);
          });
        }
        return r20.dispose;
      }];
    }
    return [n17, null];
  }), o21 = (0, import_react80.useMemo)(() => l16(e8, t13)[0], [e8, t13]), [u24 = o21, f24] = (0, import_react80.useState)();
  return n(() => {
    let [s17, i18] = l16(e8, t13);
    if (f24(s17), !!i18) return i18(f24);
  }, [e8, t13]), u24;
}
function q(e8) {
  let t13 = /var\((.*)\)/.exec(e8);
  if (t13) {
    let n17 = t13[1].indexOf(",");
    if (n17 === -1) return [t13[1]];
    let r20 = t13[1].slice(0, n17).trim(), l16 = t13[1].slice(n17 + 1).trim();
    return l16 ? [r20, ...q(l16)] : [r20];
  }
  return [];
}
function J2(e8, t13) {
  let n17 = document.createElement("div");
  t13.appendChild(n17), n17.style.setProperty("margin-top", "0px", "important"), n17.style.setProperty("margin-top", e8, "important");
  let r20 = parseFloat(window.getComputedStyle(n17).marginTop) || 0;
  return t13.removeChild(n17), r20;
}

// node_modules/@headlessui/react/dist/internal/frozen.js
var import_react81 = __toESM(require_react(), 1);
function f15({ children: o21, freeze: e8 }) {
  let n17 = l9(e8, o21);
  return import_react81.default.createElement(import_react81.default.Fragment, null, n17);
}
function l9(o21, e8) {
  let [n17, t13] = (0, import_react81.useState)(e8);
  return !o21 && n17 !== e8 && t13(e8), o21 ? n17 : e8;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react82 = __toESM(require_react(), 1);
var n12 = (0, import_react82.createContext)(null);
n12.displayName = "OpenClosedContext";
var i11 = ((e8) => (e8[e8.Open = 1] = "Open", e8[e8.Closed = 2] = "Closed", e8[e8.Closing = 4] = "Closing", e8[e8.Opening = 8] = "Opening", e8))(i11 || {});
function u16() {
  return (0, import_react82.useContext)(n12);
}
function c8({ value: o21, children: t13 }) {
  return import_react82.default.createElement(n12.Provider, { value: o21 }, t13);
}
function s9({ children: o21 }) {
  return import_react82.default.createElement(n12.Provider, { value: null }, o21);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t8(n17) {
  function e8() {
    document.readyState !== "loading" && (n17(), document.removeEventListener("DOMContentLoaded", e8));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e8), e8());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var n13 = [];
t8(() => {
  function e8(t13) {
    if (!i4(t13.target) || t13.target === document.body || n13[0] === t13.target) return;
    let r20 = t13.target;
    r20 = r20.closest(f11), n13.unshift(r20 != null ? r20 : t13.target), n13 = n13.filter((o21) => o21 != null && o21.isConnected), n13.splice(10);
  }
  window.addEventListener("click", e8, { capture: true }), window.addEventListener("mousedown", e8, { capture: true }), window.addEventListener("focus", e8, { capture: true }), document.body.addEventListener("click", e8, { capture: true }), document.body.addEventListener("mousedown", e8, { capture: true }), document.body.addEventListener("focus", e8, { capture: true });
});

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u17(l16) {
  throw new Error("Unexpected object: " + l16);
}
var c9 = ((i18) => (i18[i18.First = 0] = "First", i18[i18.Previous = 1] = "Previous", i18[i18.Next = 2] = "Next", i18[i18.Last = 3] = "Last", i18[i18.Specific = 4] = "Specific", i18[i18.Nothing = 5] = "Nothing", i18))(c9 || {});
function f16(l16, n17) {
  let t13 = n17.resolveItems();
  if (t13.length <= 0) return null;
  let r20 = n17.resolveActiveIndex(), s17 = r20 != null ? r20 : -1;
  switch (l16.focus) {
    case 0: {
      for (let e8 = 0; e8 < t13.length; ++e8) if (!n17.resolveDisabled(t13[e8], e8, t13)) return e8;
      return r20;
    }
    case 1: {
      s17 === -1 && (s17 = t13.length);
      for (let e8 = s17 - 1; e8 >= 0; --e8) if (!n17.resolveDisabled(t13[e8], e8, t13)) return e8;
      return r20;
    }
    case 2: {
      for (let e8 = s17 + 1; e8 < t13.length; ++e8) if (!n17.resolveDisabled(t13[e8], e8, t13)) return e8;
      return r20;
    }
    case 3: {
      for (let e8 = t13.length - 1; e8 >= 0; --e8) if (!n17.resolveDisabled(t13[e8], e8, t13)) return e8;
      return r20;
    }
    case 4: {
      for (let e8 = 0; e8 < t13.length; ++e8) if (n17.resolveId(t13[e8], e8, t13) === l16.id) return e8;
      return r20;
    }
    case 5:
      return null;
    default:
      u17(l16);
  }
}

// node_modules/@headlessui/react/dist/components/mouse.js
var g4 = ((f24) => (f24[f24.Left = 0] = "Left", f24[f24.Right = 2] = "Right", f24))(g4 || {});

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react85 = __toESM(require_react(), 1);
var import_react_dom7 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react83 = __toESM(require_react(), 1);
function c10(t13) {
  let r20 = o5(t13), e8 = (0, import_react83.useRef)(false);
  (0, import_react83.useEffect)(() => (e8.current = false, () => {
    e8.current = true, t(() => {
      e8.current && r20();
    });
  }), [r20]);
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t9 = __toESM(require_react(), 1);
function s10() {
  let r20 = typeof document == "undefined";
  return "useSyncExternalStore" in t9 ? ((o21) => o21.useSyncExternalStore)(t9)(() => () => {
  }, () => false, () => !r20) : false;
}
function l11() {
  let r20 = s10(), [e8, n17] = t9.useState(s.isHandoffComplete);
  return e8 && s.isHandoffComplete === false && n17(false), t9.useEffect(() => {
    e8 !== true && n17(true);
  }, [e8]), t9.useEffect(() => s.handoff(), []), r20 ? false : e8;
}

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react84 = __toESM(require_react(), 1);
var e7 = (0, import_react84.createContext)(false);
function a16() {
  return (0, import_react84.useContext)(e7);
}
function l12(o21) {
  return import_react84.default.createElement(e7.Provider, { value: o21.force }, o21.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function I3(e8) {
  let l16 = a16(), o21 = (0, import_react85.useContext)(H6), [r20, u24] = (0, import_react85.useState)(() => {
    var i18;
    if (!l16 && o21 !== null) return (i18 = o21.current) != null ? i18 : null;
    if (s.isServer) return null;
    let t13 = e8 == null ? void 0 : e8.getElementById("headlessui-portal-root");
    if (t13) return t13;
    if (e8 === null) return null;
    let a27 = e8.createElement("div");
    return a27.setAttribute("id", "headlessui-portal-root"), e8.body.appendChild(a27);
  });
  return (0, import_react85.useEffect)(() => {
    r20 !== null && (e8 != null && e8.body.contains(r20) || e8 == null || e8.body.appendChild(r20));
  }, [r20, e8]), (0, import_react85.useEffect)(() => {
    l16 || o21 !== null && u24(o21.current);
  }, [o21, u24, l16]), r20;
}
var M2 = import_react85.Fragment;
var D3 = K(function(l16, o21) {
  let { ownerDocument: r20 = null, ...u24 } = l16, t13 = (0, import_react85.useRef)(null), a27 = y(T2((s17) => {
    t13.current = s17;
  }), o21), i18 = n11(t13), f24 = r20 != null ? r20 : i18, p12 = I3(f24), [n17] = (0, import_react85.useState)(() => {
    var s17;
    return s.isServer ? null : (s17 = f24 == null ? void 0 : f24.createElement("div")) != null ? s17 : null;
  }), P7 = (0, import_react85.useContext)(g5), O8 = l11();
  n(() => {
    !p12 || !n17 || p12.contains(n17) || (n17.setAttribute("data-headlessui-portal", ""), p12.appendChild(n17));
  }, [p12, n17]), n(() => {
    if (n17 && P7) return P7.register(n17);
  }, [P7, n17]), c10(() => {
    var s17;
    !p12 || !n17 || (o9(n17) && p12.contains(n17) && p12.removeChild(n17), p12.childNodes.length <= 0 && ((s17 = p12.parentElement) == null || s17.removeChild(p12)));
  });
  let b11 = L();
  return O8 ? !p12 || !n17 ? null : (0, import_react_dom7.createPortal)(b11({ ourProps: { ref: a27 }, theirProps: u24, slot: {}, defaultTag: M2, name: "Portal" }), n17) : null;
});
function J3(e8, l16) {
  let o21 = y(l16), { enabled: r20 = true, ownerDocument: u24, ...t13 } = e8, a27 = L();
  return r20 ? import_react85.default.createElement(D3, { ...t13, ownerDocument: u24, ref: o21 }) : a27({ ourProps: { ref: o21 }, theirProps: t13, slot: {}, defaultTag: M2, name: "Portal" });
}
var X = import_react85.Fragment;
var H6 = (0, import_react85.createContext)(null);
function k6(e8, l16) {
  let { target: o21, ...r20 } = e8, t13 = { ref: y(l16) }, a27 = L();
  return import_react85.default.createElement(H6.Provider, { value: o21 }, a27({ ourProps: t13, theirProps: r20, defaultTag: X, name: "Popover.Group" }));
}
var g5 = (0, import_react85.createContext)(null);
function oe() {
  let e8 = (0, import_react85.useContext)(g5), l16 = (0, import_react85.useRef)([]), o21 = o5((t13) => (l16.current.push(t13), e8 && e8.register(t13), () => r20(t13))), r20 = o5((t13) => {
    let a27 = l16.current.indexOf(t13);
    a27 !== -1 && l16.current.splice(a27, 1), e8 && e8.unregister(t13);
  }), u24 = (0, import_react85.useMemo)(() => ({ register: o21, unregister: r20, portals: l16 }), [o21, r20, l16]);
  return [l16, (0, import_react85.useMemo)(() => function({ children: a27 }) {
    return import_react85.default.createElement(g5.Provider, { value: u24 }, a27);
  }, [u24])];
}
var B = K(J3);
var q2 = K(k6);
var ne = Object.assign(B, { Group: q2 });

// node_modules/@headlessui/react/dist/components/combobox/combobox-machine.js
var S6 = Object.defineProperty;
var I4 = (t13, i18, e8) => i18 in t13 ? S6(t13, i18, { enumerable: true, configurable: true, writable: true, value: e8 }) : t13[i18] = e8;
var c13 = (t13, i18, e8) => (I4(t13, typeof i18 != "symbol" ? i18 + "" : i18, e8), e8);
var C8 = ((e8) => (e8[e8.Open = 0] = "Open", e8[e8.Closed = 1] = "Closed", e8))(C8 || {});
var M3 = ((e8) => (e8[e8.Single = 0] = "Single", e8[e8.Multi = 1] = "Multi", e8))(M3 || {});
var F4 = ((n17) => (n17[n17.Pointer = 0] = "Pointer", n17[n17.Focus = 1] = "Focus", n17[n17.Other = 2] = "Other", n17))(F4 || {});
var _6 = ((l16) => (l16[l16.OpenCombobox = 0] = "OpenCombobox", l16[l16.CloseCombobox = 1] = "CloseCombobox", l16[l16.GoToOption = 2] = "GoToOption", l16[l16.SetTyping = 3] = "SetTyping", l16[l16.RegisterOption = 4] = "RegisterOption", l16[l16.UnregisterOption = 5] = "UnregisterOption", l16[l16.DefaultToFirstOption = 6] = "DefaultToFirstOption", l16[l16.SetActivationTrigger = 7] = "SetActivationTrigger", l16[l16.UpdateVirtualConfiguration = 8] = "UpdateVirtualConfiguration", l16[l16.SetInputElement = 9] = "SetInputElement", l16[l16.SetButtonElement = 10] = "SetButtonElement", l16[l16.SetOptionsElement = 11] = "SetOptionsElement", l16))(_6 || {});
function T11(t13, i18 = (e8) => e8) {
  let e8 = t13.activeOptionIndex !== null ? t13.options[t13.activeOptionIndex] : null, n17 = i18(t13.options.slice()), o21 = n17.length > 0 && n17[0].dataRef.current.order !== null ? n17.sort((u24, a27) => u24.dataRef.current.order - a27.dataRef.current.order) : P5(n17, (u24) => u24.dataRef.current.domRef.current), r20 = e8 ? o21.indexOf(e8) : null;
  return r20 === -1 && (r20 = null), { options: o21, activeOptionIndex: r20 };
}
var D4 = { [1](t13) {
  var i18;
  return (i18 = t13.dataRef.current) != null && i18.disabled || t13.comboboxState === 1 ? t13 : { ...t13, activeOptionIndex: null, comboboxState: 1, isTyping: false, activationTrigger: 2, __demoMode: false };
}, [0](t13) {
  var i18, e8;
  if ((i18 = t13.dataRef.current) != null && i18.disabled || t13.comboboxState === 0) return t13;
  if ((e8 = t13.dataRef.current) != null && e8.value) {
    let n17 = t13.dataRef.current.calculateIndex(t13.dataRef.current.value);
    if (n17 !== -1) return { ...t13, activeOptionIndex: n17, comboboxState: 0, __demoMode: false };
  }
  return { ...t13, comboboxState: 0, __demoMode: false };
}, [3](t13, i18) {
  return t13.isTyping === i18.isTyping ? t13 : { ...t13, isTyping: i18.isTyping };
}, [2](t13, i18) {
  var r20, u24, a27, d14;
  if ((r20 = t13.dataRef.current) != null && r20.disabled || t13.optionsElement && !((u24 = t13.dataRef.current) != null && u24.optionsPropsRef.current.static) && t13.comboboxState === 1) return t13;
  if (t13.virtual) {
    let { options: p12, disabled: s17 } = t13.virtual, b11 = i18.focus === c9.Specific ? i18.idx : f16(i18, { resolveItems: () => p12, resolveActiveIndex: () => {
      var v6, m12;
      return (m12 = (v6 = t13.activeOptionIndex) != null ? v6 : p12.findIndex((y11) => !s17(y11))) != null ? m12 : null;
    }, resolveDisabled: s17, resolveId() {
      throw new Error("Function not implemented.");
    } }), l16 = (a27 = i18.trigger) != null ? a27 : 2;
    return t13.activeOptionIndex === b11 && t13.activationTrigger === l16 ? t13 : { ...t13, activeOptionIndex: b11, activationTrigger: l16, isTyping: false, __demoMode: false };
  }
  let e8 = T11(t13);
  if (e8.activeOptionIndex === null) {
    let p12 = e8.options.findIndex((s17) => !s17.dataRef.current.disabled);
    p12 !== -1 && (e8.activeOptionIndex = p12);
  }
  let n17 = i18.focus === c9.Specific ? i18.idx : f16(i18, { resolveItems: () => e8.options, resolveActiveIndex: () => e8.activeOptionIndex, resolveId: (p12) => p12.id, resolveDisabled: (p12) => p12.dataRef.current.disabled }), o21 = (d14 = i18.trigger) != null ? d14 : 2;
  return t13.activeOptionIndex === n17 && t13.activationTrigger === o21 ? t13 : { ...t13, ...e8, isTyping: false, activeOptionIndex: n17, activationTrigger: o21, __demoMode: false };
}, [4]: (t13, i18) => {
  var r20, u24, a27, d14;
  if ((r20 = t13.dataRef.current) != null && r20.virtual) return { ...t13, options: [...t13.options, i18.payload] };
  let e8 = i18.payload, n17 = T11(t13, (p12) => (p12.push(e8), p12));
  t13.activeOptionIndex === null && (a27 = (u24 = t13.dataRef.current).isSelected) != null && a27.call(u24, i18.payload.dataRef.current.value) && (n17.activeOptionIndex = n17.options.indexOf(e8));
  let o21 = { ...t13, ...n17, activationTrigger: 2 };
  return (d14 = t13.dataRef.current) != null && d14.__demoMode && t13.dataRef.current.value === void 0 && (o21.activeOptionIndex = 0), o21;
}, [5]: (t13, i18) => {
  var n17;
  if ((n17 = t13.dataRef.current) != null && n17.virtual) return { ...t13, options: t13.options.filter((o21) => o21.id !== i18.id) };
  let e8 = T11(t13, (o21) => {
    let r20 = o21.findIndex((u24) => u24.id === i18.id);
    return r20 !== -1 && o21.splice(r20, 1), o21;
  });
  return { ...t13, ...e8, activationTrigger: 2 };
}, [6]: (t13, i18) => t13.defaultToFirstOption === i18.value ? t13 : { ...t13, defaultToFirstOption: i18.value }, [7]: (t13, i18) => t13.activationTrigger === i18.trigger ? t13 : { ...t13, activationTrigger: i18.trigger }, [8]: (t13, i18) => {
  var n17, o21;
  if (t13.virtual === null) return { ...t13, virtual: { options: i18.options, disabled: (n17 = i18.disabled) != null ? n17 : () => false } };
  if (t13.virtual.options === i18.options && t13.virtual.disabled === i18.disabled) return t13;
  let e8 = t13.activeOptionIndex;
  if (t13.activeOptionIndex !== null) {
    let r20 = i18.options.indexOf(t13.virtual.options[t13.activeOptionIndex]);
    r20 !== -1 ? e8 = r20 : e8 = null;
  }
  return { ...t13, activeOptionIndex: e8, virtual: { options: i18.options, disabled: (o21 = i18.disabled) != null ? o21 : () => false } };
}, [9]: (t13, i18) => t13.inputElement === i18.element ? t13 : { ...t13, inputElement: i18.element }, [10]: (t13, i18) => t13.buttonElement === i18.element ? t13 : { ...t13, buttonElement: i18.element }, [11]: (t13, i18) => t13.optionsElement === i18.element ? t13 : { ...t13, optionsElement: i18.element } };
var O4 = class _O extends E5 {
  constructor(e8) {
    super(e8);
    c13(this, "actions", { onChange: (e9) => {
      let { onChange: n17, compare: o21, mode: r20, value: u24 } = this.state.dataRef.current;
      return u(r20, { [0]: () => n17 == null ? void 0 : n17(e9), [1]: () => {
        let a27 = u24.slice(), d14 = a27.findIndex((p12) => o21(p12, e9));
        return d14 === -1 ? a27.push(e9) : a27.splice(d14, 1), n17 == null ? void 0 : n17(a27);
      } });
    }, registerOption: (e9, n17) => (this.send({ type: 4, payload: { id: e9, dataRef: n17 } }), () => {
      this.state.activeOptionIndex === this.state.dataRef.current.calculateIndex(n17.current.value) && this.send({ type: 6, value: true }), this.send({ type: 5, id: e9 });
    }), goToOption: (e9, n17) => (this.send({ type: 6, value: false }), this.send({ type: 2, ...e9, trigger: n17 })), setIsTyping: (e9) => {
      this.send({ type: 3, isTyping: e9 });
    }, closeCombobox: () => {
      var e9, n17;
      this.send({ type: 1 }), this.send({ type: 6, value: false }), (n17 = (e9 = this.state.dataRef.current).onClose) == null || n17.call(e9);
    }, openCombobox: () => {
      this.send({ type: 0 }), this.send({ type: 6, value: true });
    }, setActivationTrigger: (e9) => {
      this.send({ type: 7, trigger: e9 });
    }, selectActiveOption: () => {
      let e9 = this.selectors.activeOptionIndex(this.state);
      if (e9 !== null) {
        if (this.actions.setIsTyping(false), this.state.virtual) this.actions.onChange(this.state.virtual.options[e9]);
        else {
          let { dataRef: n17 } = this.state.options[e9];
          this.actions.onChange(n17.current.value);
        }
        this.actions.goToOption({ focus: c9.Specific, idx: e9 });
      }
    }, setInputElement: (e9) => {
      this.send({ type: 9, element: e9 });
    }, setButtonElement: (e9) => {
      this.send({ type: 10, element: e9 });
    }, setOptionsElement: (e9) => {
      this.send({ type: 11, element: e9 });
    } });
    c13(this, "selectors", { activeDescendantId: (e9) => {
      var o21, r20;
      let n17 = this.selectors.activeOptionIndex(e9);
      if (n17 !== null) return e9.virtual ? (r20 = e9.options.find((u24) => !u24.dataRef.current.disabled && e9.dataRef.current.compare(u24.dataRef.current.value, e9.virtual.options[n17]))) == null ? void 0 : r20.id : (o21 = e9.options[n17]) == null ? void 0 : o21.id;
    }, activeOptionIndex: (e9) => {
      if (e9.defaultToFirstOption && e9.activeOptionIndex === null && (e9.virtual ? e9.virtual.options.length > 0 : e9.options.length > 0)) {
        if (e9.virtual) {
          let { options: o21, disabled: r20 } = e9.virtual, u24 = o21.findIndex((a27) => {
            var d14;
            return !((d14 = r20 == null ? void 0 : r20(a27)) != null && d14);
          });
          if (u24 !== -1) return u24;
        }
        let n17 = e9.options.findIndex((o21) => !o21.dataRef.current.disabled);
        if (n17 !== -1) return n17;
      }
      return e9.activeOptionIndex;
    }, activeOption: (e9) => {
      var o21, r20;
      let n17 = this.selectors.activeOptionIndex(e9);
      return n17 === null ? null : e9.virtual ? e9.virtual.options[n17 != null ? n17 : 0] : (r20 = (o21 = e9.options[n17]) == null ? void 0 : o21.dataRef.current.value) != null ? r20 : null;
    }, isActive: (e9, n17, o21) => {
      var u24;
      let r20 = this.selectors.activeOptionIndex(e9);
      return r20 === null ? false : e9.virtual ? r20 === e9.dataRef.current.calculateIndex(n17) : ((u24 = e9.options[r20]) == null ? void 0 : u24.id) === o21;
    }, shouldScrollIntoView: (e9, n17, o21) => !(e9.virtual || e9.__demoMode || e9.comboboxState !== 0 || e9.activationTrigger === 0 || !this.selectors.isActive(e9, n17, o21)) });
    {
      let n17 = this.state.id, o21 = x3.get(null);
      this.disposables.add(o21.on(k3.Push, (r20) => {
        !o21.selectors.isTop(r20, n17) && this.state.comboboxState === 0 && this.actions.closeCombobox();
      })), this.on(0, () => o21.actions.push(n17)), this.on(1, () => o21.actions.pop(n17));
    }
  }
  static new({ id: e8, virtual: n17 = null, __demoMode: o21 = false }) {
    var r20;
    return new _O({ id: e8, dataRef: { current: {} }, comboboxState: o21 ? 0 : 1, isTyping: false, options: [], virtual: n17 ? { options: n17.options, disabled: (r20 = n17.disabled) != null ? r20 : () => false } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: o21 });
  }
  reduce(e8, n17) {
    return u(n17.type, D4, e8, n17);
  }
};

// node_modules/@headlessui/react/dist/components/combobox/combobox-machine-glue.js
var import_react86 = __toESM(require_react(), 1);
var u19 = (0, import_react86.createContext)(null);
function p6(n17) {
  let o21 = (0, import_react86.useContext)(u19);
  if (o21 === null) {
    let e8 = new Error(`<${n17} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, b6), e8;
  }
  return o21;
}
function b6({ id: n17, virtual: o21 = null, __demoMode: e8 = false }) {
  let t13 = (0, import_react86.useMemo)(() => O4.new({ id: n17, virtual: o21, __demoMode: e8 }), []);
  return c10(() => t13.dispose()), t13;
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var de2 = (0, import_react87.createContext)(null);
de2.displayName = "ComboboxDataContext";
function ae2(C13) {
  let h11 = (0, import_react87.useContext)(de2);
  if (h11 === null) {
    let e8 = new Error(`<${C13} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, ae2), e8;
  }
  return h11;
}
var Me = (0, import_react87.createContext)(null);
function vo(C13) {
  let h11 = p6("VirtualProvider"), e8 = ae2("VirtualProvider"), { options: o21 } = e8.virtual, A6 = S3(h11, (a27) => a27.optionsElement), [R5, v6] = (0, import_react87.useMemo)(() => {
    let a27 = A6;
    if (!a27) return [0, 0];
    let u24 = window.getComputedStyle(a27);
    return [parseFloat(u24.paddingBlockStart || u24.paddingTop), parseFloat(u24.paddingBlockEnd || u24.paddingBottom)];
  }, [A6]), T15 = useVirtualizer({ enabled: o21.length !== 0, scrollPaddingStart: R5, scrollPaddingEnd: v6, count: o21.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return h11.state.optionsElement;
  }, overscan: 12 }), [I8, m12] = (0, import_react87.useState)(0);
  n(() => {
    m12((a27) => a27 + 1);
  }, [o21]);
  let g8 = T15.getVirtualItems(), n17 = S3(h11, (a27) => a27.activationTrigger === F4.Pointer), f24 = S3(h11, h11.selectors.activeOptionIndex);
  return g8.length === 0 ? null : import_react87.default.createElement(Me.Provider, { value: T15 }, import_react87.default.createElement("div", { style: { position: "relative", width: "100%", height: `${T15.getTotalSize()}px` }, ref: (a27) => {
    a27 && (n17 || f24 !== null && o21.length > f24 && T15.scrollToIndex(f24));
  } }, g8.map((a27) => {
    var u24;
    return import_react87.default.createElement(import_react87.Fragment, { key: a27.key }, import_react87.default.cloneElement((u24 = C13.children) == null ? void 0 : u24.call(C13, { ...C13.slot, option: o21[a27.index] }), { key: `${I8}-${a27.key}`, "data-index": a27.index, "aria-setsize": o21.length, "aria-posinset": a27.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${a27.start}px)`, overflowAnchor: "none" } }));
  })));
}
var Po = import_react87.Fragment;
function Eo(C13, h11) {
  let e8 = (0, import_react51.useId)(), o21 = a3(), { value: A6, defaultValue: R5, onChange: v6, form: T15, name: I8, by: m12, invalid: g8 = false, disabled: n17 = o21 || false, onClose: f24, __demoMode: a27 = false, multiple: u24 = false, immediate: S10 = false, virtual: d14 = null, nullable: k9, ...W2 } = C13, y11 = l2(R5), [x13 = u24 ? [] : void 0, P7] = T(A6, v6, y11), b11 = b6({ id: e8, virtual: d14, __demoMode: a27 }), G6 = (0, import_react87.useRef)({ static: false, hold: false }), _10 = u9(m12), z4 = o5((s17) => d14 ? m12 === null ? d14.options.indexOf(s17) : d14.options.findIndex((c18) => _10(c18, s17)) : b11.state.options.findIndex((c18) => _10(c18.dataRef.current.value, s17))), U6 = (0, import_react87.useCallback)((s17) => u(r20.mode, { [M3.Multi]: () => x13.some((c18) => _10(c18, s17)), [M3.Single]: () => _10(x13, s17) }), [x13]), w12 = S3(b11, (s17) => s17.virtual), J8 = o5(() => f24 == null ? void 0 : f24()), r20 = (0, import_react87.useMemo)(() => ({ __demoMode: a27, immediate: S10, optionsPropsRef: G6, value: x13, defaultValue: y11, disabled: n17, invalid: g8, mode: u24 ? M3.Multi : M3.Single, virtual: d14 ? w12 : null, onChange: P7, isSelected: U6, calculateIndex: z4, compare: _10, onClose: J8 }), [x13, y11, n17, g8, u24, P7, U6, a27, b11, d14, w12, J8]);
  n(() => {
    var s17;
    d14 && b11.send({ type: _6.UpdateVirtualConfiguration, options: d14.options, disabled: (s17 = d14.disabled) != null ? s17 : null });
  }, [d14, d14 == null ? void 0 : d14.options, d14 == null ? void 0 : d14.disabled]), n(() => {
    b11.state.dataRef.current = r20;
  }, [r20]);
  let [M9, X4, i18, H12] = S3(b11, (s17) => [s17.comboboxState, s17.buttonElement, s17.inputElement, s17.optionsElement]), j11 = x3.get(null), q5 = S3(j11, (0, import_react87.useCallback)((s17) => j11.selectors.isTop(s17, e8), [j11, e8]));
  k4(q5, [X4, i18, H12], () => b11.actions.closeCombobox());
  let Q4 = S3(b11, b11.selectors.activeOptionIndex), $7 = S3(b11, b11.selectors.activeOption), be5 = (0, import_react87.useMemo)(() => ({ open: M9 === C8.Open, disabled: n17, invalid: g8, activeIndex: Q4, activeOption: $7, value: x13 }), [r20, n17, x13, g8, $7, M9]), [Y4, te4] = Q(), t13 = h11 === null ? {} : { ref: h11 }, B4 = (0, import_react87.useCallback)(() => {
    if (y11 !== void 0) return P7 == null ? void 0 : P7(y11);
  }, [P7, y11]), E17 = L();
  return import_react87.default.createElement(te4, { value: Y4, props: { htmlFor: i18 == null ? void 0 : i18.id }, slot: { open: M9 === C8.Open, disabled: n17 } }, import_react87.default.createElement(Ae, null, import_react87.default.createElement(de2.Provider, { value: r20 }, import_react87.default.createElement(u19.Provider, { value: b11 }, import_react87.default.createElement(c8, { value: u(M9, { [C8.Open]: i11.Open, [C8.Closed]: i11.Closed }) }, I8 != null && import_react87.default.createElement(j2, { disabled: n17, data: x13 != null ? { [I8]: x13 } : {}, form: T15, onReset: B4 }), E17({ ourProps: t13, theirProps: W2, slot: be5, defaultTag: Po, name: "Combobox" }))))));
}
var Oo = "input";
function ho(C13, h11) {
  var Y4, te4;
  let e8 = p6("Combobox.Input"), o21 = ae2("Combobox.Input"), A6 = (0, import_react51.useId)(), R5 = u4(), { id: v6 = R5 || `headlessui-combobox-input-${A6}`, onChange: T15, displayValue: I8, disabled: m12 = o21.disabled || false, autoFocus: g8 = false, type: n17 = "text", ...f24 } = C13, [a27] = S3(e8, (t13) => [t13.inputElement]), u24 = (0, import_react87.useRef)(null), S10 = y(u24, h11, Fe2(), e8.actions.setInputElement), d14 = n11(a27), [k9, W2] = S3(e8, (t13) => [t13.comboboxState, t13.isTyping]), y11 = p(), x13 = o5(() => {
    e8.actions.onChange(null), e8.state.optionsElement && (e8.state.optionsElement.scrollTop = 0), e8.actions.goToOption({ focus: c9.Nothing });
  }), P7 = (0, import_react87.useMemo)(() => {
    var t13;
    return typeof I8 == "function" && o21.value !== void 0 ? (t13 = I8(o21.value)) != null ? t13 : "" : typeof o21.value == "string" ? o21.value : "";
  }, [o21.value, I8]);
  m9(([t13, B4], [E17, s17]) => {
    if (e8.state.isTyping) return;
    let c18 = u24.current;
    c18 && ((s17 === C8.Open && B4 === C8.Closed || t13 !== E17) && (c18.value = t13), requestAnimationFrame(() => {
      if (e8.state.isTyping || !c18 || (d14 == null ? void 0 : d14.activeElement) !== c18) return;
      let { selectionStart: p12, selectionEnd: ne4 } = c18;
      Math.abs((ne4 != null ? ne4 : 0) - (p12 != null ? p12 : 0)) === 0 && p12 === 0 && c18.setSelectionRange(c18.value.length, c18.value.length);
    }));
  }, [P7, k9, d14, W2]), m9(([t13], [B4]) => {
    if (t13 === C8.Open && B4 === C8.Closed) {
      if (e8.state.isTyping) return;
      let E17 = u24.current;
      if (!E17) return;
      let s17 = E17.value, { selectionStart: c18, selectionEnd: p12, selectionDirection: ne4 } = E17;
      E17.value = "", E17.value = s17, ne4 !== null ? E17.setSelectionRange(c18, p12, ne4) : E17.setSelectionRange(c18, p12);
    }
  }, [k9]);
  let b11 = (0, import_react87.useRef)(false), G6 = o5(() => {
    b11.current = true;
  }), _10 = o5(() => {
    y11.nextFrame(() => {
      b11.current = false;
    });
  }), z4 = o5((t13) => {
    switch (e8.actions.setIsTyping(true), t13.key) {
      case o10.Enter:
        if (e8.state.comboboxState !== C8.Open || b11.current) return;
        if (t13.preventDefault(), t13.stopPropagation(), e8.selectors.activeOptionIndex(e8.state) === null) {
          e8.actions.closeCombobox();
          return;
        }
        e8.actions.selectActiveOption(), o21.mode === M3.Single && e8.actions.closeCombobox();
        break;
      case o10.ArrowDown:
        return t13.preventDefault(), t13.stopPropagation(), u(e8.state.comboboxState, { [C8.Open]: () => e8.actions.goToOption({ focus: c9.Next }), [C8.Closed]: () => e8.actions.openCombobox() });
      case o10.ArrowUp:
        return t13.preventDefault(), t13.stopPropagation(), u(e8.state.comboboxState, { [C8.Open]: () => e8.actions.goToOption({ focus: c9.Previous }), [C8.Closed]: () => {
          (0, import_react_dom8.flushSync)(() => e8.actions.openCombobox()), o21.value || e8.actions.goToOption({ focus: c9.Last });
        } });
      case o10.Home:
        if (t13.shiftKey) break;
        return t13.preventDefault(), t13.stopPropagation(), e8.actions.goToOption({ focus: c9.First });
      case o10.PageUp:
        return t13.preventDefault(), t13.stopPropagation(), e8.actions.goToOption({ focus: c9.First });
      case o10.End:
        if (t13.shiftKey) break;
        return t13.preventDefault(), t13.stopPropagation(), e8.actions.goToOption({ focus: c9.Last });
      case o10.PageDown:
        return t13.preventDefault(), t13.stopPropagation(), e8.actions.goToOption({ focus: c9.Last });
      case o10.Escape:
        return e8.state.comboboxState !== C8.Open ? void 0 : (t13.preventDefault(), e8.state.optionsElement && !o21.optionsPropsRef.current.static && t13.stopPropagation(), o21.mode === M3.Single && o21.value === null && x13(), e8.actions.closeCombobox());
      case o10.Tab:
        if (e8.state.comboboxState !== C8.Open) return;
        o21.mode === M3.Single && e8.state.activationTrigger !== F4.Focus && e8.actions.selectActiveOption(), e8.actions.closeCombobox();
        break;
    }
  }), U6 = o5((t13) => {
    T15 == null || T15(t13), o21.mode === M3.Single && t13.target.value === "" && x13(), e8.actions.openCombobox();
  }), w12 = o5((t13) => {
    var E17, s17, c18;
    let B4 = (E17 = t13.relatedTarget) != null ? E17 : n13.find((p12) => p12 !== t13.currentTarget);
    if (!((s17 = e8.state.optionsElement) != null && s17.contains(B4)) && !((c18 = e8.state.buttonElement) != null && c18.contains(B4)) && e8.state.comboboxState === C8.Open) return t13.preventDefault(), o21.mode === M3.Single && o21.value === null && x13(), e8.actions.closeCombobox();
  }), J8 = o5((t13) => {
    var E17, s17, c18;
    let B4 = (E17 = t13.relatedTarget) != null ? E17 : n13.find((p12) => p12 !== t13.currentTarget);
    (s17 = e8.state.buttonElement) != null && s17.contains(B4) || (c18 = e8.state.optionsElement) != null && c18.contains(B4) || o21.disabled || o21.immediate && e8.state.comboboxState !== C8.Open && y11.microTask(() => {
      (0, import_react_dom8.flushSync)(() => e8.actions.openCombobox()), e8.actions.setActivationTrigger(F4.Focus);
    });
  }), r20 = N(), M9 = U2(), { isFocused: X4, focusProps: i18 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: g8 }), { isHovered: H12, hoverProps: j11 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: m12 }), q5 = S3(e8, (t13) => t13.optionsElement), Q4 = (0, import_react87.useMemo)(() => ({ open: k9 === C8.Open, disabled: m12, invalid: o21.invalid, hover: H12, focus: X4, autofocus: g8 }), [o21, H12, X4, g8, m12, o21.invalid]), $7 = _({ ref: S10, id: v6, role: "combobox", type: n17, "aria-controls": q5 == null ? void 0 : q5.id, "aria-expanded": k9 === C8.Open, "aria-activedescendant": S3(e8, e8.selectors.activeDescendantId), "aria-labelledby": r20, "aria-describedby": M9, "aria-autocomplete": "list", defaultValue: (te4 = (Y4 = C13.defaultValue) != null ? Y4 : o21.defaultValue !== void 0 ? I8 == null ? void 0 : I8(o21.defaultValue) : null) != null ? te4 : o21.defaultValue, disabled: m12 || void 0, autoFocus: g8, onCompositionStart: G6, onCompositionEnd: _10, onKeyDown: z4, onChange: U6, onFocus: J8, onBlur: w12 }, i18, j11);
  return L()({ ourProps: $7, theirProps: f24, slot: Q4, defaultTag: Oo, name: "Combobox.Input" });
}
var Ao = "button";
function Io(C13, h11) {
  let e8 = p6("Combobox.Button"), o21 = ae2("Combobox.Button"), [A6, R5] = (0, import_react87.useState)(null), v6 = y(h11, R5, e8.actions.setButtonElement), T15 = (0, import_react51.useId)(), { id: I8 = `headlessui-combobox-button-${T15}`, disabled: m12 = o21.disabled || false, autoFocus: g8 = false, ...n17 } = C13, [f24, a27, u24] = S3(e8, (r20) => [r20.comboboxState, r20.inputElement, r20.optionsElement]), S10 = f12(a27), d14 = f24 === C8.Open;
  k5(d14, { trigger: A6, action: (0, import_react87.useCallback)((r20) => {
    if (A6 != null && A6.contains(r20.target)) return g3.Ignore;
    if (a27 != null && a27.contains(r20.target)) return g3.Ignore;
    let M9 = r20.target.closest('[role="option"]:not([data-disabled])');
    return n4(M9) ? g3.Select(M9) : u24 != null && u24.contains(r20.target) ? g3.Ignore : g3.Close;
  }, [A6, a27, u24]), close: e8.actions.closeCombobox, select: e8.actions.selectActiveOption });
  let k9 = o5((r20) => {
    switch (r20.key) {
      case o10.Space:
      case o10.Enter:
        r20.preventDefault(), r20.stopPropagation(), e8.state.comboboxState === C8.Closed && (0, import_react_dom8.flushSync)(() => e8.actions.openCombobox()), S10();
        return;
      case o10.ArrowDown:
        r20.preventDefault(), r20.stopPropagation(), e8.state.comboboxState === C8.Closed && ((0, import_react_dom8.flushSync)(() => e8.actions.openCombobox()), e8.state.dataRef.current.value || e8.actions.goToOption({ focus: c9.First })), S10();
        return;
      case o10.ArrowUp:
        r20.preventDefault(), r20.stopPropagation(), e8.state.comboboxState === C8.Closed && ((0, import_react_dom8.flushSync)(() => e8.actions.openCombobox()), e8.state.dataRef.current.value || e8.actions.goToOption({ focus: c9.Last })), S10();
        return;
      case o10.Escape:
        if (e8.state.comboboxState !== C8.Open) return;
        r20.preventDefault(), e8.state.optionsElement && !o21.optionsPropsRef.current.static && r20.stopPropagation(), (0, import_react_dom8.flushSync)(() => e8.actions.closeCombobox()), S10();
        return;
      default:
        return;
    }
  }), W2 = o5((r20) => {
    r20.preventDefault(), !s5(r20.currentTarget) && (r20.button === g4.Left && (e8.state.comboboxState === C8.Open ? e8.actions.closeCombobox() : e8.actions.openCombobox()), S10());
  }), y11 = N([I8]), { isFocusVisible: x13, focusProps: P7 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: g8 }), { isHovered: b11, hoverProps: G6 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: m12 }), { pressed: _10, pressProps: z4 } = w({ disabled: m12 }), U6 = (0, import_react87.useMemo)(() => ({ open: f24 === C8.Open, active: _10 || f24 === C8.Open, disabled: m12, invalid: o21.invalid, value: o21.value, hover: b11, focus: x13 }), [o21, b11, x13, _10, m12, f24]), w12 = _({ ref: v6, id: I8, type: e5(C13, A6), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": u24 == null ? void 0 : u24.id, "aria-expanded": f24 === C8.Open, "aria-labelledby": y11, disabled: m12 || void 0, autoFocus: g8, onPointerDown: W2, onKeyDown: k9 }, P7, G6, z4);
  return L()({ ourProps: w12, theirProps: n17, slot: U6, defaultTag: Ao, name: "Combobox.Button" });
}
var Ro = "div";
var Do = O.RenderStrategy | O.Static;
function _o(C13, h11) {
  var E17, s17, c18;
  let e8 = (0, import_react51.useId)(), { id: o21 = `headlessui-combobox-options-${e8}`, hold: A6 = false, anchor: R5, portal: v6 = false, modal: T15 = true, transition: I8 = false, ...m12 } = C13, g8 = p6("Combobox.Options"), n17 = ae2("Combobox.Options"), f24 = ye(R5);
  f24 && (v6 = true);
  let [a27, u24] = Re(f24), [S10, d14] = (0, import_react87.useState)(null), k9 = Te(), W2 = y(h11, f24 ? a27 : null, g8.actions.setOptionsElement, d14), [y11, x13, P7, b11, G6] = S3(g8, (p12) => [p12.comboboxState, p12.inputElement, p12.buttonElement, p12.optionsElement, p12.activationTrigger]), _10 = n11(x13 || P7), z4 = n11(b11), U6 = u16(), [w12, J8] = x4(I8, S10, U6 !== null ? (U6 & i11.Open) === i11.Open : y11 === C8.Open);
  p5(w12, x13, g8.actions.closeCombobox);
  let r20 = n17.__demoMode ? false : T15 && y11 === C8.Open;
  f13(r20, z4);
  let M9 = n17.__demoMode ? false : T15 && y11 === C8.Open;
  y5(M9, { allowed: (0, import_react87.useCallback)(() => [x13, P7, b11], [x13, P7, b11]) }), n(() => {
    var p12;
    n17.optionsPropsRef.current.static = (p12 = C13.static) != null ? p12 : false;
  }, [n17.optionsPropsRef, C13.static]), n(() => {
    n17.optionsPropsRef.current.hold = A6;
  }, [n17.optionsPropsRef, A6]), F3(y11 === C8.Open, { container: b11, accept(p12) {
    return p12.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : p12.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(p12) {
    p12.setAttribute("role", "none");
  } });
  let X4 = N([P7 == null ? void 0 : P7.id]), i18 = (0, import_react87.useMemo)(() => ({ open: y11 === C8.Open, option: void 0 }), [y11]), H12 = o5(() => {
    g8.actions.setActivationTrigger(F4.Pointer);
  }), j11 = o5((p12) => {
    p12.preventDefault(), g8.actions.setActivationTrigger(F4.Pointer);
  }), q5 = _(f24 ? k9() : {}, { "aria-labelledby": X4, role: "listbox", "aria-multiselectable": n17.mode === M3.Multi ? true : void 0, id: o21, ref: W2, style: { ...m12.style, ...u24, "--input-width": d3(x13, true).width, "--button-width": d3(P7, true).width }, onWheel: G6 === F4.Pointer ? void 0 : H12, onMouseDown: j11, ...R2(J8) }), Q4 = w12 && y11 === C8.Closed, $7 = l9(Q4, (E17 = n17.virtual) == null ? void 0 : E17.options), be5 = l9(Q4, n17.value), Y4 = o5((p12) => n17.compare(be5, p12)), te4 = (0, import_react87.useMemo)(() => {
    if (!n17.virtual) return n17;
    if ($7 === void 0) throw new Error("Missing `options` in virtual mode");
    return $7 !== n17.virtual.options ? { ...n17, virtual: { ...n17.virtual, options: $7 } } : n17;
  }, [n17, $7, (s17 = n17.virtual) == null ? void 0 : s17.options]);
  n17.virtual && Object.assign(m12, { children: import_react87.default.createElement(de2.Provider, { value: te4 }, import_react87.default.createElement(vo, { slot: i18 }, m12.children)) });
  let t13 = L(), B4 = (0, import_react87.useMemo)(() => n17.mode === M3.Multi ? n17 : { ...n17, isSelected: Y4 }, [n17, Y4]);
  return import_react87.default.createElement(ne, { enabled: v6 ? C13.static || w12 : false, ownerDocument: _10 }, import_react87.default.createElement(de2.Provider, { value: B4 }, t13({ ourProps: q5, theirProps: { ...m12, children: import_react87.default.createElement(f15, { freeze: Q4 }, typeof m12.children == "function" ? (c18 = m12.children) == null ? void 0 : c18.call(m12, i18) : m12.children) }, slot: i18, defaultTag: Ro, features: Do, visible: w12, name: "Combobox.Options" })));
}
var Fo = "div";
function So(C13, h11) {
  var r20, M9, X4;
  let e8 = ae2("Combobox.Option"), o21 = p6("Combobox.Option"), A6 = (0, import_react51.useId)(), { id: R5 = `headlessui-combobox-option-${A6}`, value: v6, disabled: T15 = (X4 = (M9 = (r20 = e8.virtual) == null ? void 0 : r20.disabled) == null ? void 0 : M9.call(r20, v6)) != null ? X4 : false, order: I8 = null, ...m12 } = C13, [g8] = S3(o21, (i18) => [i18.inputElement]), n17 = f12(g8), f24 = S3(o21, (0, import_react87.useCallback)((i18) => o21.selectors.isActive(i18, v6, R5), [v6, R5])), a27 = e8.isSelected(v6), u24 = (0, import_react87.useRef)(null), S10 = s3({ disabled: T15, value: v6, domRef: u24, order: I8 }), d14 = (0, import_react87.useContext)(Me), k9 = y(h11, u24, d14 ? d14.measureElement : null), W2 = o5(() => {
    o21.actions.setIsTyping(false), o21.actions.onChange(v6);
  });
  n(() => o21.actions.registerOption(R5, S10), [S10, R5]);
  let y11 = S3(o21, (0, import_react87.useCallback)((i18) => o21.selectors.shouldScrollIntoView(i18, v6, R5), [v6, R5]));
  n(() => {
    if (y11) return o3().requestAnimationFrame(() => {
      var i18, H12;
      (H12 = (i18 = u24.current) == null ? void 0 : i18.scrollIntoView) == null || H12.call(i18, { block: "nearest" });
    });
  }, [y11, u24]);
  let x13 = o5((i18) => {
    i18.preventDefault(), i18.button === g4.Left && (T15 || (W2(), n10() || requestAnimationFrame(() => n17()), e8.mode === M3.Single && o21.actions.closeCombobox()));
  }), P7 = o5(() => {
    if (T15) return o21.actions.goToOption({ focus: c9.Nothing });
    let i18 = e8.calculateIndex(v6);
    o21.actions.goToOption({ focus: c9.Specific, idx: i18 });
  }), b11 = u14(), G6 = o5((i18) => b11.update(i18)), _10 = o5((i18) => {
    if (!b11.wasMoved(i18) || T15 || f24) return;
    let H12 = e8.calculateIndex(v6);
    o21.actions.goToOption({ focus: c9.Specific, idx: H12 }, F4.Pointer);
  }), z4 = o5((i18) => {
    b11.wasMoved(i18) && (T15 || f24 && (e8.optionsPropsRef.current.hold || o21.actions.goToOption({ focus: c9.Nothing })));
  }), U6 = (0, import_react87.useMemo)(() => ({ active: f24, focus: f24, selected: a27, disabled: T15 }), [f24, a27, T15]), w12 = { id: R5, ref: k9, role: "option", tabIndex: T15 === true ? void 0 : -1, "aria-disabled": T15 === true ? true : void 0, "aria-selected": a27, disabled: void 0, onMouseDown: x13, onFocus: P7, onPointerEnter: G6, onMouseEnter: G6, onPointerMove: _10, onMouseMove: _10, onPointerLeave: z4, onMouseLeave: z4 };
  return L()({ ourProps: w12, theirProps: m12, slot: U6, defaultTag: Fo, name: "Combobox.Option" });
}
var Mo = K(Eo);
var Lo = K(Io);
var Vo = K(ho);
var wo = V;
var Bo = K(_o);
var No = K(So);
var wt = Object.assign(Mo, { Input: Vo, Button: Lo, Label: wo, Options: Bo, Option: No });

// node_modules/@headlessui/react/dist/components/data-interactive/data-interactive.js
var import_react88 = __toESM(require_react(), 1);
var E11 = import_react88.Fragment;
function d10(o21, n17) {
  let { ...s17 } = o21, e8 = false, { isFocusVisible: t13, focusProps: p12 } = $f7dceffc5ad7768b$export$4e328f61c538687f(), { isHovered: r20, hoverProps: i18 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), { pressed: a27, pressProps: T15 } = w({ disabled: e8 }), l16 = _({ ref: n17 }, p12, i18, T15), c18 = (0, import_react88.useMemo)(() => ({ hover: r20, focus: t13, active: a27 }), [r20, t13, a27]);
  return L()({ ourProps: l16, theirProps: s17, slot: c18, defaultTag: E11, name: "DataInteractive" });
}
var x6 = K(d10);

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react95 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-escape.js
function a18(o21, r20 = typeof document != "undefined" ? document.defaultView : null, t13) {
  let n17 = I(o21, "escape");
  E8(r20, "keydown", (e8) => {
    n17 && (e8.defaultPrevented || e8.key === o10.Escape && t13(e8));
  });
}

// node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js
var import_react89 = __toESM(require_react(), 1);
function f18() {
  var t13;
  let [e8] = (0, import_react89.useState)(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o21, c18] = (0, import_react89.useState)((t13 = e8 == null ? void 0 : e8.matches) != null ? t13 : false);
  return n(() => {
    if (!e8) return;
    function n17(r20) {
      c18(r20.matches);
    }
    return e8.addEventListener("change", n17), () => e8.removeEventListener("change", n17);
  }, [e8]), o21;
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react90 = __toESM(require_react(), 1);
function H7({ defaultContainers: r20 = [], portals: n17, mainTreeNode: o21 } = {}) {
  let l16 = n11(o21), u24 = o5(() => {
    var i18, c18;
    let t13 = [];
    for (let e8 of r20) e8 !== null && (t4(e8) ? t13.push(e8) : "current" in e8 && t4(e8.current) && t13.push(e8.current));
    if (n17 != null && n17.current) for (let e8 of n17.current) t13.push(e8);
    for (let e8 of (i18 = l16 == null ? void 0 : l16.querySelectorAll("html > *, body > *")) != null ? i18 : []) e8 !== document.body && e8 !== document.head && t4(e8) && e8.id !== "headlessui-portal-root" && (o21 && (e8.contains(o21) || e8.contains((c18 = o21 == null ? void 0 : o21.getRootNode()) == null ? void 0 : c18.host)) || t13.some((d14) => e8.contains(d14)) || t13.push(e8));
    return t13;
  });
  return { resolveContainers: u24, contains: o5((t13) => u24().some((i18) => i18.contains(t13))) };
}
var a19 = (0, import_react90.createContext)(null);
function P6({ children: r20, node: n17 }) {
  let [o21, l16] = (0, import_react90.useState)(null), u24 = y8(n17 != null ? n17 : o21);
  return import_react90.default.createElement(a19.Provider, { value: u24 }, r20, u24 === null && import_react90.default.createElement(f4, { features: s4.Hidden, ref: (t13) => {
    var i18, c18;
    if (t13) {
      for (let e8 of (c18 = (i18 = o2(t13)) == null ? void 0 : i18.querySelectorAll("html > *, body > *")) != null ? c18 : []) if (e8 !== document.body && e8 !== document.head && t4(e8) && e8 != null && e8.contains(t13)) {
        l16(e8);
        break;
      }
    }
  } }));
}
function y8(r20 = null) {
  var n17;
  return (n17 = (0, import_react90.useContext)(a19)) != null ? n17 : r20;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react93 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react91 = __toESM(require_react(), 1);
function f19() {
  let e8 = (0, import_react91.useRef)(false);
  return n(() => (e8.current = true, () => {
    e8.current = false;
  }), []), e8;
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react92 = __toESM(require_react(), 1);
var a20 = ((r20) => (r20[r20.Forwards = 0] = "Forwards", r20[r20.Backwards = 1] = "Backwards", r20))(a20 || {});
function u20() {
  let e8 = (0, import_react92.useRef)(0);
  return s7(true, "keydown", (r20) => {
    r20.key === "Tab" && (e8.current = r20.shiftKey ? 1 : 0);
  }, true), e8;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function x7(s17) {
  if (!s17) return /* @__PURE__ */ new Set();
  if (typeof s17 == "function") return new Set(s17());
  let e8 = /* @__PURE__ */ new Set();
  for (let t13 of s17.current) t4(t13.current) && e8.add(t13.current);
  return e8;
}
var $4 = "div";
var G3 = ((n17) => (n17[n17.None = 0] = "None", n17[n17.InitialFocus = 1] = "InitialFocus", n17[n17.TabLock = 2] = "TabLock", n17[n17.FocusLock = 4] = "FocusLock", n17[n17.RestoreFocus = 8] = "RestoreFocus", n17[n17.AutoFocus = 16] = "AutoFocus", n17))(G3 || {});
function D6(s17, e8) {
  let t13 = (0, import_react93.useRef)(null), r20 = y(t13, e8), { initialFocus: o21, initialFocusFallback: a27, containers: n17, features: u24 = 15, ...f24 } = s17;
  l11() || (u24 = 0);
  let l16 = n11(t13);
  te(u24, { ownerDocument: l16 });
  let m12 = re2(u24, { ownerDocument: l16, container: t13, initialFocus: o21, initialFocusFallback: a27 });
  ne2(u24, { ownerDocument: l16, container: t13, containers: n17, previousActiveElement: m12 });
  let g8 = u20(), v6 = o5((c18) => {
    if (!n4(t13.current)) return;
    let E17 = t13.current;
    ((V6) => V6())(() => {
      u(g8.current, { [a20.Forwards]: () => {
        g2(E17, T5.First, { skipElements: [c18.relatedTarget, a27] });
      }, [a20.Backwards]: () => {
        g2(E17, T5.Last, { skipElements: [c18.relatedTarget, a27] });
      } });
    });
  }), A6 = I(!!(u24 & 2), "focus-trap#tab-lock"), N2 = p(), b11 = (0, import_react93.useRef)(false), k9 = { ref: r20, onKeyDown(c18) {
    c18.key == "Tab" && (b11.current = true, N2.requestAnimationFrame(() => {
      b11.current = false;
    }));
  }, onBlur(c18) {
    if (!(u24 & 4)) return;
    let E17 = x7(n17);
    n4(t13.current) && E17.add(t13.current);
    let L8 = c18.relatedTarget;
    i4(L8) && L8.dataset.headlessuiFocusGuard !== "true" && (I5(E17, L8) || (b11.current ? g2(t13.current, u(g8.current, { [a20.Forwards]: () => T5.Next, [a20.Backwards]: () => T5.Previous }) | T5.WrapAround, { relativeTo: c18.target }) : i4(c18.target) && I2(c18.target)));
  } }, B4 = L();
  return import_react93.default.createElement(import_react93.default.Fragment, null, A6 && import_react93.default.createElement(f4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: v6, features: s4.Focusable }), B4({ ourProps: k9, theirProps: f24, defaultTag: $4, name: "FocusTrap" }), A6 && import_react93.default.createElement(f4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: v6, features: s4.Focusable }));
}
var w7 = K(D6);
var Re2 = Object.assign(w7, { features: G3 });
function ee(s17 = true) {
  let e8 = (0, import_react93.useRef)(n13.slice());
  return m9(([t13], [r20]) => {
    r20 === true && t13 === false && t(() => {
      e8.current.splice(0);
    }), r20 === false && t13 === true && (e8.current = n13.slice());
  }, [s17, n13, e8]), o5(() => {
    var t13;
    return (t13 = e8.current.find((r20) => r20 != null && r20.isConnected)) != null ? t13 : null;
  });
}
function te(s17, { ownerDocument: e8 }) {
  let t13 = !!(s17 & 8), r20 = ee(t13);
  m9(() => {
    t13 || (e8 == null ? void 0 : e8.activeElement) === (e8 == null ? void 0 : e8.body) && I2(r20());
  }, [t13]), c10(() => {
    t13 && I2(r20());
  });
}
function re2(s17, { ownerDocument: e8, container: t13, initialFocus: r20, initialFocusFallback: o21 }) {
  let a27 = (0, import_react93.useRef)(null), n17 = I(!!(s17 & 1), "focus-trap#initial-focus"), u24 = f19();
  return m9(() => {
    if (s17 === 0) return;
    if (!n17) {
      o21 != null && o21.current && I2(o21.current);
      return;
    }
    let f24 = t13.current;
    f24 && t(() => {
      if (!u24.current) return;
      let l16 = e8 == null ? void 0 : e8.activeElement;
      if (r20 != null && r20.current) {
        if ((r20 == null ? void 0 : r20.current) === l16) {
          a27.current = l16;
          return;
        }
      } else if (f24.contains(l16)) {
        a27.current = l16;
        return;
      }
      if (r20 != null && r20.current) I2(r20.current);
      else {
        if (s17 & 16) {
          if (g2(f24, T5.First | T5.AutoFocus) !== y6.Error) return;
        } else if (g2(f24, T5.First) !== y6.Error) return;
        if (o21 != null && o21.current && (I2(o21.current), (e8 == null ? void 0 : e8.activeElement) === o21.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      a27.current = e8 == null ? void 0 : e8.activeElement;
    });
  }, [o21, n17, s17]), a27;
}
function ne2(s17, { ownerDocument: e8, container: t13, containers: r20, previousActiveElement: o21 }) {
  let a27 = f19(), n17 = !!(s17 & 4);
  E8(e8 == null ? void 0 : e8.defaultView, "focus", (u24) => {
    if (!n17 || !a27.current) return;
    let f24 = x7(r20);
    n4(t13.current) && f24.add(t13.current);
    let l16 = o21.current;
    if (!l16) return;
    let m12 = u24.target;
    n4(m12) ? I5(f24, m12) ? (o21.current = m12, I2(m12)) : (u24.preventDefault(), u24.stopPropagation(), I2(l16)) : I2(o21.current);
  }, true);
}
function I5(s17, e8) {
  for (let t13 of s17) if (t13.contains(e8)) return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/transition/transition.js
var import_react94 = __toESM(require_react(), 1);
function ue2(e8) {
  var t13;
  return !!(e8.enter || e8.enterFrom || e8.enterTo || e8.leave || e8.leaveFrom || e8.leaveTo) || ((t13 = e8.as) != null ? t13 : de3) !== import_react94.Fragment || import_react94.default.Children.count(e8.children) === 1;
}
var w8 = (0, import_react94.createContext)(null);
w8.displayName = "TransitionContext";
var _e = ((n17) => (n17.Visible = "visible", n17.Hidden = "hidden", n17))(_e || {});
function De() {
  let e8 = (0, import_react94.useContext)(w8);
  if (e8 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e8;
}
function He() {
  let e8 = (0, import_react94.useContext)(M5);
  if (e8 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e8;
}
var M5 = (0, import_react94.createContext)(null);
M5.displayName = "NestingContext";
function U4(e8) {
  return "children" in e8 ? U4(e8.children) : e8.current.filter(({ el: t13 }) => t13.current !== null).filter(({ state: t13 }) => t13 === "visible").length > 0;
}
function Te2(e8, t13) {
  let n17 = s3(e8), l16 = (0, import_react94.useRef)([]), S10 = f19(), R5 = p(), d14 = o5((o21, i18 = A.Hidden) => {
    let a27 = l16.current.findIndex(({ el: s17 }) => s17 === o21);
    a27 !== -1 && (u(i18, { [A.Unmount]() {
      l16.current.splice(a27, 1);
    }, [A.Hidden]() {
      l16.current[a27].state = "hidden";
    } }), R5.microTask(() => {
      var s17;
      !U4(l16) && S10.current && ((s17 = n17.current) == null || s17.call(n17));
    }));
  }), y11 = o5((o21) => {
    let i18 = l16.current.find(({ el: a27 }) => a27 === o21);
    return i18 ? i18.state !== "visible" && (i18.state = "visible") : l16.current.push({ el: o21, state: "visible" }), () => d14(o21, A.Unmount);
  }), C13 = (0, import_react94.useRef)([]), p12 = (0, import_react94.useRef)(Promise.resolve()), h11 = (0, import_react94.useRef)({ enter: [], leave: [] }), g8 = o5((o21, i18, a27) => {
    C13.current.splice(0), t13 && (t13.chains.current[i18] = t13.chains.current[i18].filter(([s17]) => s17 !== o21)), t13 == null || t13.chains.current[i18].push([o21, new Promise((s17) => {
      C13.current.push(s17);
    })]), t13 == null || t13.chains.current[i18].push([o21, new Promise((s17) => {
      Promise.all(h11.current[i18].map(([r20, f24]) => f24)).then(() => s17());
    })]), i18 === "enter" ? p12.current = p12.current.then(() => t13 == null ? void 0 : t13.wait.current).then(() => a27(i18)) : a27(i18);
  }), v6 = o5((o21, i18, a27) => {
    Promise.all(h11.current[i18].splice(0).map(([s17, r20]) => r20)).then(() => {
      var s17;
      (s17 = C13.current.shift()) == null || s17();
    }).then(() => a27(i18));
  });
  return (0, import_react94.useMemo)(() => ({ children: l16, register: y11, unregister: d14, onStart: g8, onStop: v6, wait: p12, chains: h11 }), [y11, d14, l16, g8, v6, h11, p12]);
}
var de3 = import_react94.Fragment;
var fe = O.RenderStrategy;
function Ae2(e8, t13) {
  var ee5, te4;
  let { transition: n17 = true, beforeEnter: l16, afterEnter: S10, beforeLeave: R5, afterLeave: d14, enter: y11, enterFrom: C13, enterTo: p12, entered: h11, leave: g8, leaveFrom: v6, leaveTo: o21, ...i18 } = e8, [a27, s17] = (0, import_react94.useState)(null), r20 = (0, import_react94.useRef)(null), f24 = ue2(e8), j11 = y(...f24 ? [r20, t13, s17] : t13 === null ? [] : [t13]), H12 = (ee5 = i18.unmount) == null || ee5 ? A.Unmount : A.Hidden, { show: u24, appear: z4, initial: K6 } = De(), [m12, G6] = (0, import_react94.useState)(u24 ? "visible" : "hidden"), Q4 = He(), { register: A6, unregister: I8 } = Q4;
  n(() => A6(r20), [A6, r20]), n(() => {
    if (H12 === A.Hidden && r20.current) {
      if (u24 && m12 !== "visible") {
        G6("visible");
        return;
      }
      return u(m12, { ["hidden"]: () => I8(r20), ["visible"]: () => A6(r20) });
    }
  }, [m12, r20, A6, I8, u24, H12]);
  let B4 = l11();
  n(() => {
    if (f24 && B4 && m12 === "visible" && r20.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [r20, m12, B4, f24]);
  let ce3 = K6 && !z4, Y4 = z4 && u24 && K6, W2 = (0, import_react94.useRef)(false), L8 = Te2(() => {
    W2.current || (G6("hidden"), I8(r20));
  }, Q4), Z4 = o5((k9) => {
    W2.current = true;
    let F13 = k9 ? "enter" : "leave";
    L8.onStart(r20, F13, (_10) => {
      _10 === "enter" ? l16 == null || l16() : _10 === "leave" && (R5 == null || R5());
    });
  }), $7 = o5((k9) => {
    let F13 = k9 ? "enter" : "leave";
    W2.current = false, L8.onStop(r20, F13, (_10) => {
      _10 === "enter" ? S10 == null || S10() : _10 === "leave" && (d14 == null || d14());
    }), F13 === "leave" && !U4(L8) && (G6("hidden"), I8(r20));
  });
  (0, import_react94.useEffect)(() => {
    f24 && n17 || (Z4(u24), $7(u24));
  }, [u24, f24, n17]);
  let pe5 = /* @__PURE__ */ (() => !(!n17 || !f24 || !B4 || ce3))(), [, T15] = x4(pe5, a27, u24, { start: Z4, end: $7 }), Ce4 = m2({ ref: j11, className: ((te4 = t3(i18.className, Y4 && y11, Y4 && C13, T15.enter && y11, T15.enter && T15.closed && C13, T15.enter && !T15.closed && p12, T15.leave && g8, T15.leave && !T15.closed && v6, T15.leave && T15.closed && o21, !T15.transition && u24 && h11)) == null ? void 0 : te4.trim()) || void 0, ...R2(T15) }), N2 = 0;
  m12 === "visible" && (N2 |= i11.Open), m12 === "hidden" && (N2 |= i11.Closed), u24 && m12 === "hidden" && (N2 |= i11.Opening), !u24 && m12 === "visible" && (N2 |= i11.Closing);
  let he3 = L();
  return import_react94.default.createElement(M5.Provider, { value: L8 }, import_react94.default.createElement(c8, { value: N2 }, he3({ ourProps: Ce4, theirProps: i18, defaultTag: de3, features: fe, visible: m12 === "visible", name: "Transition.Child" })));
}
function Ie(e8, t13) {
  let { show: n17, appear: l16 = false, unmount: S10 = true, ...R5 } = e8, d14 = (0, import_react94.useRef)(null), y11 = ue2(e8), C13 = y(...y11 ? [d14, t13] : t13 === null ? [] : [t13]);
  l11();
  let p12 = u16();
  if (n17 === void 0 && p12 !== null && (n17 = (p12 & i11.Open) === i11.Open), n17 === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [h11, g8] = (0, import_react94.useState)(n17 ? "visible" : "hidden"), v6 = Te2(() => {
    n17 || g8("hidden");
  }), [o21, i18] = (0, import_react94.useState)(true), a27 = (0, import_react94.useRef)([n17]);
  n(() => {
    o21 !== false && a27.current[a27.current.length - 1] !== n17 && (a27.current.push(n17), i18(false));
  }, [a27, n17]);
  let s17 = (0, import_react94.useMemo)(() => ({ show: n17, appear: l16, initial: o21 }), [n17, l16, o21]);
  n(() => {
    n17 ? g8("visible") : !U4(v6) && d14.current !== null && g8("hidden");
  }, [n17, v6]);
  let r20 = { unmount: S10 }, f24 = o5(() => {
    var u24;
    o21 && i18(false), (u24 = e8.beforeEnter) == null || u24.call(e8);
  }), j11 = o5(() => {
    var u24;
    o21 && i18(false), (u24 = e8.beforeLeave) == null || u24.call(e8);
  }), H12 = L();
  return import_react94.default.createElement(M5.Provider, { value: v6 }, import_react94.default.createElement(w8.Provider, { value: s17 }, H12({ ourProps: { ...r20, as: import_react94.Fragment, children: import_react94.default.createElement(me2, { ref: C13, ...r20, ...R5, beforeEnter: f24, beforeLeave: j11 }) }, theirProps: {}, defaultTag: import_react94.Fragment, features: fe, visible: h11 === "visible", name: "Transition" })));
}
function Le(e8, t13) {
  let n17 = (0, import_react94.useContext)(w8) !== null, l16 = u16() !== null;
  return import_react94.default.createElement(import_react94.default.Fragment, null, !n17 && l16 ? import_react94.default.createElement(X2, { ref: t13, ...e8 }) : import_react94.default.createElement(me2, { ref: t13, ...e8 }));
}
var X2 = K(Ie);
var me2 = K(Ae2);
var Fe3 = K(Le);
var ze = Object.assign(X2, { Child: Fe3, Root: X2 });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Ge = ((o21) => (o21[o21.Open = 0] = "Open", o21[o21.Closed = 1] = "Closed", o21))(Ge || {});
var we = ((t13) => (t13[t13.SetTitleId = 0] = "SetTitleId", t13))(we || {});
var Be = { [0](e8, t13) {
  return e8.titleId === t13.id ? e8 : { ...e8, titleId: t13.id };
} };
var w9 = (0, import_react95.createContext)(null);
w9.displayName = "DialogContext";
function O6(e8) {
  let t13 = (0, import_react95.useContext)(w9);
  if (t13 === null) {
    let o21 = new Error(`<${e8} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o21, O6), o21;
  }
  return t13;
}
function Ue(e8, t13) {
  return u(t13.type, Be, e8, t13);
}
var z = K(function(t13, o21) {
  let a27 = (0, import_react51.useId)(), { id: n17 = `headlessui-dialog-${a27}`, open: i18, onClose: s17, initialFocus: d14, role: p12 = "dialog", autoFocus: T15 = true, __demoMode: u24 = false, unmount: y11 = false, ...S10 } = t13, F13 = (0, import_react95.useRef)(false);
  p12 = function() {
    return p12 === "dialog" || p12 === "alertdialog" ? p12 : (F13.current || (F13.current = true, console.warn(`Invalid role [${p12}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let c18 = u16();
  i18 === void 0 && c18 !== null && (i18 = (c18 & i11.Open) === i11.Open);
  let f24 = (0, import_react95.useRef)(null), I8 = y(f24, o21), b11 = n11(f24), g8 = i18 ? 0 : 1, [v6, Q4] = (0, import_react95.useReducer)(Ue, { titleId: null, descriptionId: null, panelRef: (0, import_react95.createRef)() }), m12 = o5(() => s17(false)), B4 = o5((r20) => Q4({ type: 0, id: r20 })), D8 = l11() ? g8 === 0 : false, [Z4, ee5] = oe(), te4 = { get current() {
    var r20;
    return (r20 = v6.panelRef.current) != null ? r20 : f24.current;
  } }, L8 = y8(), { resolveContainers: M9 } = H7({ mainTreeNode: L8, portals: Z4, defaultContainers: [te4] }), U6 = c18 !== null ? (c18 & i11.Closing) === i11.Closing : false;
  y5(u24 || U6 ? false : D8, { allowed: o5(() => {
    var r20, W2;
    return [(W2 = (r20 = f24.current) == null ? void 0 : r20.closest("[data-headlessui-portal]")) != null ? W2 : null];
  }), disallowed: o5(() => {
    var r20;
    return [(r20 = L8 == null ? void 0 : L8.closest("body > *:not(#headlessui-portal-root)")) != null ? r20 : null];
  }) });
  let P7 = x3.get(null);
  n(() => {
    if (D8) return P7.actions.push(n17), () => P7.actions.pop(n17);
  }, [P7, n17, D8]);
  let H12 = S3(P7, (0, import_react95.useCallback)((r20) => P7.selectors.isTop(r20, n17), [P7, n17]));
  k4(H12, M9, (r20) => {
    r20.preventDefault(), m12();
  }), a18(H12, b11 == null ? void 0 : b11.defaultView, (r20) => {
    r20.preventDefault(), r20.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), m12();
  }), f13(u24 || U6 ? false : D8, b11, M9), p5(D8, f24, m12);
  let [oe4, ne4] = w3(), re5 = (0, import_react95.useMemo)(() => [{ dialogState: g8, close: m12, setTitleId: B4, unmount: y11 }, v6], [g8, v6, m12, B4, y11]), N2 = (0, import_react95.useMemo)(() => ({ open: g8 === 0 }), [g8]), le2 = { ref: I8, id: n17, role: p12, tabIndex: -1, "aria-modal": u24 ? void 0 : g8 === 0 ? true : void 0, "aria-labelledby": v6.titleId, "aria-describedby": oe4, unmount: y11 }, ae4 = !f18(), E17 = G3.None;
  D8 && !u24 && (E17 |= G3.RestoreFocus, E17 |= G3.TabLock, T15 && (E17 |= G3.AutoFocus), ae4 && (E17 |= G3.InitialFocus));
  let ie3 = L();
  return import_react95.default.createElement(s9, null, import_react95.default.createElement(l12, { force: true }, import_react95.default.createElement(ne, null, import_react95.default.createElement(w9.Provider, { value: re5 }, import_react95.default.createElement(q2, { target: f24 }, import_react95.default.createElement(l12, { force: false }, import_react95.default.createElement(ne4, { slot: N2 }, import_react95.default.createElement(ee5, null, import_react95.default.createElement(Re2, { initialFocus: d14, initialFocusFallback: f24, containers: M9, features: E17 }, import_react95.default.createElement(C5, { value: m12 }, ie3({ ourProps: le2, theirProps: S10, slot: N2, defaultTag: He2, features: Ne, visible: g8 === 0, name: "Dialog" })))))))))));
});
var He2 = "div";
var Ne = O.RenderStrategy | O.Static;
function We(e8, t13) {
  let { transition: o21 = false, open: a27, ...n17 } = e8, i18 = u16(), s17 = e8.hasOwnProperty("open") || i18 !== null, d14 = e8.hasOwnProperty("onClose");
  if (!s17 && !d14) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!s17) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!d14) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i18 && typeof e8.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e8.open}`);
  if (typeof e8.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e8.onClose}`);
  return (a27 !== void 0 || o21) && !n17.static ? import_react95.default.createElement(P6, null, import_react95.default.createElement(ze, { show: a27, transition: o21, unmount: n17.unmount }, import_react95.default.createElement(z, { ref: t13, ...n17 }))) : import_react95.default.createElement(P6, null, import_react95.default.createElement(z, { ref: t13, open: a27, ...n17 }));
}
var $e = "div";
function je(e8, t13) {
  let o21 = (0, import_react51.useId)(), { id: a27 = `headlessui-dialog-panel-${o21}`, transition: n17 = false, ...i18 } = e8, [{ dialogState: s17, unmount: d14 }, p12] = O6("Dialog.Panel"), T15 = y(t13, p12.panelRef), u24 = (0, import_react95.useMemo)(() => ({ open: s17 === 0 }), [s17]), y11 = o5((I8) => {
    I8.stopPropagation();
  }), S10 = { ref: T15, id: a27, onClick: y11 }, F13 = n17 ? Fe3 : import_react95.Fragment, c18 = n17 ? { unmount: d14 } : {}, f24 = L();
  return import_react95.default.createElement(F13, { ...c18 }, f24({ ourProps: S10, theirProps: i18, slot: u24, defaultTag: $e, name: "Dialog.Panel" }));
}
var Ye = "div";
function Je(e8, t13) {
  let { transition: o21 = false, ...a27 } = e8, [{ dialogState: n17, unmount: i18 }] = O6("Dialog.Backdrop"), s17 = (0, import_react95.useMemo)(() => ({ open: n17 === 0 }), [n17]), d14 = { ref: t13, "aria-hidden": true }, p12 = o21 ? Fe3 : import_react95.Fragment, T15 = o21 ? { unmount: i18 } : {}, u24 = L();
  return import_react95.default.createElement(p12, { ...T15 }, u24({ ourProps: d14, theirProps: a27, slot: s17, defaultTag: Ye, name: "Dialog.Backdrop" }));
}
var Ke = "h2";
function Xe(e8, t13) {
  let o21 = (0, import_react51.useId)(), { id: a27 = `headlessui-dialog-title-${o21}`, ...n17 } = e8, [{ dialogState: i18, setTitleId: s17 }] = O6("Dialog.Title"), d14 = y(t13);
  (0, import_react95.useEffect)(() => (s17(a27), () => s17(null)), [a27, s17]);
  let p12 = (0, import_react95.useMemo)(() => ({ open: i18 === 0 }), [i18]), T15 = { ref: d14, id: a27 };
  return L()({ ourProps: T15, theirProps: n17, slot: p12, defaultTag: Ke, name: "Dialog.Title" });
}
var Ve = K(We);
var qe = K(je);
var bt = K(Je);
var ze2 = K(Xe);
var vt = H4;
var Lt = Object.assign(Ve, { Panel: qe, Title: ze2, Description: H4 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react97 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react96 = __toESM(require_react(), 1);
var t11;
var a21 = (t11 = import_react96.default.startTransition) != null ? t11 : function(i18) {
  i18();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var de5 = ((l16) => (l16[l16.Open = 0] = "Open", l16[l16.Closed = 1] = "Closed", l16))(de5 || {});
var Te4 = ((n17) => (n17[n17.ToggleDisclosure = 0] = "ToggleDisclosure", n17[n17.CloseDisclosure = 1] = "CloseDisclosure", n17[n17.SetButtonId = 2] = "SetButtonId", n17[n17.SetPanelId = 3] = "SetPanelId", n17[n17.SetButtonElement = 4] = "SetButtonElement", n17[n17.SetPanelElement = 5] = "SetPanelElement", n17))(Te4 || {});
var me3 = { [0]: (e8) => ({ ...e8, disclosureState: u(e8.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e8) => e8.disclosureState === 1 ? e8 : { ...e8, disclosureState: 1 }, [2](e8, t13) {
  return e8.buttonId === t13.buttonId ? e8 : { ...e8, buttonId: t13.buttonId };
}, [3](e8, t13) {
  return e8.panelId === t13.panelId ? e8 : { ...e8, panelId: t13.panelId };
}, [4](e8, t13) {
  return e8.buttonElement === t13.element ? e8 : { ...e8, buttonElement: t13.element };
}, [5](e8, t13) {
  return e8.panelElement === t13.element ? e8 : { ...e8, panelElement: t13.element };
} };
var _7 = (0, import_react97.createContext)(null);
_7.displayName = "DisclosureContext";
function M6(e8) {
  let t13 = (0, import_react97.useContext)(_7);
  if (t13 === null) {
    let l16 = new Error(`<${e8} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l16, M6), l16;
  }
  return t13;
}
var F7 = (0, import_react97.createContext)(null);
F7.displayName = "DisclosureAPIContext";
function J4(e8) {
  let t13 = (0, import_react97.useContext)(F7);
  if (t13 === null) {
    let l16 = new Error(`<${e8} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l16, J4), l16;
  }
  return t13;
}
var H8 = (0, import_react97.createContext)(null);
H8.displayName = "DisclosurePanelContext";
function fe3() {
  return (0, import_react97.useContext)(H8);
}
function De2(e8, t13) {
  return u(t13.type, me3, e8, t13);
}
var ye2 = import_react97.Fragment;
function Pe(e8, t13) {
  let { defaultOpen: l16 = false, ...p12 } = e8, a27 = (0, import_react97.useRef)(null), c18 = y(t13, T2((u24) => {
    a27.current = u24;
  }, e8.as === void 0 || e8.as === import_react97.Fragment)), n17 = (0, import_react97.useReducer)(De2, { disclosureState: l16 ? 0 : 1, buttonElement: null, panelElement: null, buttonId: null, panelId: null }), [{ disclosureState: o21, buttonId: r20 }, f24] = n17, s17 = o5((u24) => {
    f24({ type: 1 });
    let d14 = o2(a27);
    if (!d14 || !r20) return;
    let T15 = (() => u24 ? i4(u24) ? u24 : "current" in u24 && i4(u24.current) ? u24.current : d14.getElementById(r20) : d14.getElementById(r20))();
    T15 == null || T15.focus();
  }), E17 = (0, import_react97.useMemo)(() => ({ close: s17 }), [s17]), m12 = (0, import_react97.useMemo)(() => ({ open: o21 === 0, close: s17 }), [o21, s17]), D8 = { ref: c18 }, S10 = L();
  return import_react97.default.createElement(_7.Provider, { value: n17 }, import_react97.default.createElement(F7.Provider, { value: E17 }, import_react97.default.createElement(C5, { value: s17 }, import_react97.default.createElement(c8, { value: u(o21, { [0]: i11.Open, [1]: i11.Closed }) }, S10({ ourProps: D8, theirProps: p12, slot: m12, defaultTag: ye2, name: "Disclosure" })))));
}
var Ee2 = "button";
function Se(e8, t13) {
  let l16 = (0, import_react51.useId)(), { id: p12 = `headlessui-disclosure-button-${l16}`, disabled: a27 = false, autoFocus: c18 = false, ...n17 } = e8, [o21, r20] = M6("Disclosure.Button"), f24 = fe3(), s17 = f24 === null ? false : f24 === o21.panelId, E17 = (0, import_react97.useRef)(null), m12 = y(E17, t13, o5((i18) => {
    if (!s17) return r20({ type: 4, element: i18 });
  }));
  (0, import_react97.useEffect)(() => {
    if (!s17) return r20({ type: 2, buttonId: p12 }), () => {
      r20({ type: 2, buttonId: null });
    };
  }, [p12, r20, s17]);
  let D8 = o5((i18) => {
    var g8;
    if (s17) {
      if (o21.disclosureState === 1) return;
      switch (i18.key) {
        case o10.Space:
        case o10.Enter:
          i18.preventDefault(), i18.stopPropagation(), r20({ type: 0 }), (g8 = o21.buttonElement) == null || g8.focus();
          break;
      }
    } else switch (i18.key) {
      case o10.Space:
      case o10.Enter:
        i18.preventDefault(), i18.stopPropagation(), r20({ type: 0 });
        break;
    }
  }), S10 = o5((i18) => {
    switch (i18.key) {
      case o10.Space:
        i18.preventDefault();
        break;
    }
  }), u24 = o5((i18) => {
    var g8;
    s5(i18.currentTarget) || a27 || (s17 ? (r20({ type: 0 }), (g8 = o21.buttonElement) == null || g8.focus()) : r20({ type: 0 }));
  }), { isFocusVisible: d14, focusProps: T15 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: c18 }), { isHovered: b11, hoverProps: h11 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: a27 }), { pressed: U6, pressProps: G6 } = w({ disabled: a27 }), X4 = (0, import_react97.useMemo)(() => ({ open: o21.disclosureState === 0, hover: b11, active: U6, disabled: a27, focus: d14, autofocus: c18 }), [o21, b11, U6, d14, a27, c18]), N2 = e5(e8, o21.buttonElement), q5 = s17 ? _({ ref: m12, type: N2, disabled: a27 || void 0, autoFocus: c18, onKeyDown: D8, onClick: u24 }, T15, h11, G6) : _({ ref: m12, id: p12, type: N2, "aria-expanded": o21.disclosureState === 0, "aria-controls": o21.panelElement ? o21.panelId : void 0, disabled: a27 || void 0, autoFocus: c18, onKeyDown: D8, onKeyUp: S10, onClick: u24 }, T15, h11, G6);
  return L()({ ourProps: q5, theirProps: n17, slot: X4, defaultTag: Ee2, name: "Disclosure.Button" });
}
var ge3 = "div";
var Ae3 = O.RenderStrategy | O.Static;
function be2(e8, t13) {
  let l16 = (0, import_react51.useId)(), { id: p12 = `headlessui-disclosure-panel-${l16}`, transition: a27 = false, ...c18 } = e8, [n17, o21] = M6("Disclosure.Panel"), { close: r20 } = J4("Disclosure.Panel"), [f24, s17] = (0, import_react97.useState)(null), E17 = y(t13, o5((b11) => {
    a21(() => o21({ type: 5, element: b11 }));
  }), s17);
  (0, import_react97.useEffect)(() => (o21({ type: 3, panelId: p12 }), () => {
    o21({ type: 3, panelId: null });
  }), [p12, o21]);
  let m12 = u16(), [D8, S10] = x4(a27, f24, m12 !== null ? (m12 & i11.Open) === i11.Open : n17.disclosureState === 0), u24 = (0, import_react97.useMemo)(() => ({ open: n17.disclosureState === 0, close: r20 }), [n17.disclosureState, r20]), d14 = { ref: E17, id: p12, ...R2(S10) }, T15 = L();
  return import_react97.default.createElement(s9, null, import_react97.default.createElement(H8.Provider, { value: n17.panelId }, T15({ ourProps: d14, theirProps: c18, slot: u24, defaultTag: ge3, features: Ae3, visible: D8, name: "Disclosure.Panel" })));
}
var Ce = K(Pe);
var Re3 = K(Se);
var Ie2 = K(be2);
var Ve2 = Object.assign(Ce, { Button: Re3, Panel: Ie2 });

// node_modules/@headlessui/react/dist/components/field/field.js
var import_react98 = __toESM(require_react(), 1);
var _8 = "div";
function c15(d14, l16) {
  let t13 = `headlessui-control-${(0, import_react51.useId)()}`, [s17, p12] = Q(), [n17, a27] = w3(), m12 = a3(), { disabled: e8 = m12 || false, ...i18 } = d14, o21 = (0, import_react98.useMemo)(() => ({ disabled: e8 }), [e8]), F13 = { ref: l16, disabled: e8 || void 0, "aria-disabled": e8 || void 0 }, T15 = L();
  return import_react98.default.createElement(l, { value: e8 }, import_react98.default.createElement(p12, { value: s17 }, import_react98.default.createElement(a27, { value: n17 }, import_react98.default.createElement(f6, { id: t13 }, T15({ ourProps: F13, theirProps: { ...i18, children: import_react98.default.createElement(W, null, typeof i18.children == "function" ? i18.children(o21) : i18.children) }, slot: o21, defaultTag: _8, name: "Field" })))));
}
var H9 = K(c15);

// node_modules/@headlessui/react/dist/components/fieldset/fieldset.js
var import_react100 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-resolved-tag.js
var import_react99 = __toESM(require_react(), 1);
function d11(t13) {
  let e8 = typeof t13 == "string" ? t13 : void 0, [s17, o21] = (0, import_react99.useState)(e8);
  return [e8 != null ? e8 : s17, (0, import_react99.useCallback)((n17) => {
    e8 || n4(n17) && o21(n17.tagName.toLowerCase());
  }, [e8])];
}

// node_modules/@headlessui/react/dist/components/fieldset/fieldset.js
var d12 = "fieldset";
function _9(t13, a27) {
  var s17;
  let i18 = a3(), { disabled: e8 = i18 || false, ...p12 } = t13, [n17, T15] = d11((s17 = t13.as) != null ? s17 : d12), l16 = y(a27, T15), [r20, f24] = Q(), m12 = (0, import_react100.useMemo)(() => ({ disabled: e8 }), [e8]), y11 = n17 === "fieldset" ? { ref: l16, "aria-labelledby": r20, disabled: e8 || void 0 } : { ref: l16, role: "group", "aria-labelledby": r20, "aria-disabled": e8 || void 0 }, F13 = L();
  return import_react100.default.createElement(l, { value: e8 }, import_react100.default.createElement(f24, null, F13({ ourProps: y11, theirProps: p12, slot: m12, defaultTag: d12, name: "Fieldset" })));
}
var G4 = K(_9);

// node_modules/@headlessui/react/dist/components/input/input.js
var import_react101 = __toESM(require_react(), 1);
var x9 = "input";
function h8(p12, s17) {
  let a27 = (0, import_react51.useId)(), l16 = u4(), i18 = a3(), { id: d14 = l16 || `headlessui-input-${a27}`, disabled: e8 = i18 || false, autoFocus: o21 = false, invalid: t13 = false, ...u24 } = p12, f24 = N(), m12 = U2(), { isFocused: r20, focusProps: T15 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o21 }), { isHovered: n17, hoverProps: b11 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), y11 = _({ ref: s17, id: d14, "aria-labelledby": f24, "aria-describedby": m12, "aria-invalid": t13 ? "true" : void 0, disabled: e8 || void 0, autoFocus: o21 }, T15, b11), I8 = (0, import_react101.useMemo)(() => ({ disabled: e8, invalid: t13, hover: n17, focus: r20, autofocus: o21 }), [e8, t13, n17, r20, o21]);
  return L()({ ourProps: y11, theirProps: u24, slot: I8, defaultTag: x9, name: "Input" });
}
var S7 = K(h8);

// node_modules/@headlessui/react/dist/components/legend/legend.js
var import_react102 = __toESM(require_react(), 1);
function o18(t13, n17) {
  return import_react102.default.createElement(V, { as: "div", ref: n17, ...t13 });
}
var d13 = K(o18);

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react106 = __toESM(require_react(), 1);
var import_react_dom9 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-did-element-move.js
var import_react103 = __toESM(require_react(), 1);
function s12(n17, t13) {
  let e8 = (0, import_react103.useRef)({ left: 0, top: 0 });
  if (n(() => {
    if (!t13) return;
    let r20 = t13.getBoundingClientRect();
    r20 && (e8.current = r20);
  }, [n17, t13]), t13 == null || !n17 || t13 === document.activeElement) return false;
  let o21 = t13.getBoundingClientRect();
  return o21.top !== e8.current.top || o21.left !== e8.current.left;
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react104 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a23 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o19(e8) {
  var l16, n17;
  let i18 = (l16 = e8.innerText) != null ? l16 : "", t13 = e8.cloneNode(true);
  if (!n4(t13)) return i18;
  let u24 = false;
  for (let f24 of t13.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f24.remove(), u24 = true;
  let r20 = u24 ? (n17 = t13.innerText) != null ? n17 : "" : i18;
  return a23.test(r20) && (r20 = r20.replace(a23, "")), r20;
}
function F8(e8) {
  let i18 = e8.getAttribute("aria-label");
  if (typeof i18 == "string") return i18.trim();
  let t13 = e8.getAttribute("aria-labelledby");
  if (t13) {
    let u24 = t13.split(" ").map((r20) => {
      let l16 = document.getElementById(r20);
      if (l16) {
        let n17 = l16.getAttribute("aria-label");
        return typeof n17 == "string" ? n17.trim() : o19(l16).trim();
      }
      return null;
    }).filter(Boolean);
    if (u24.length > 0) return u24.join(", ");
  }
  return o19(e8).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s13(c18) {
  let t13 = (0, import_react104.useRef)(""), r20 = (0, import_react104.useRef)("");
  return o5(() => {
    let e8 = c18.current;
    if (!e8) return "";
    let u24 = e8.innerText;
    if (t13.current === u24) return r20.current;
    let n17 = F8(e8).trim().toLowerCase();
    return t13.current = u24, r20.current = n17, n17;
  });
}

// node_modules/@headlessui/react/dist/components/listbox/listbox-machine.js
var T12 = Object.defineProperty;
var m11 = (e8, o21, t13) => o21 in e8 ? T12(e8, o21, { enumerable: true, configurable: true, writable: true, value: t13 }) : e8[o21] = t13;
var v5 = (e8, o21, t13) => (m11(e8, typeof o21 != "symbol" ? o21 + "" : o21, t13), t13);
var E13 = ((t13) => (t13[t13.Open = 0] = "Open", t13[t13.Closed = 1] = "Closed", t13))(E13 || {});
var L6 = ((t13) => (t13[t13.Single = 0] = "Single", t13[t13.Multi = 1] = "Multi", t13))(L6 || {});
var F9 = ((t13) => (t13[t13.Pointer = 0] = "Pointer", t13[t13.Other = 1] = "Other", t13))(F9 || {});
var M7 = ((r20) => (r20[r20.OpenListbox = 0] = "OpenListbox", r20[r20.CloseListbox = 1] = "CloseListbox", r20[r20.GoToOption = 2] = "GoToOption", r20[r20.Search = 3] = "Search", r20[r20.ClearSearch = 4] = "ClearSearch", r20[r20.RegisterOptions = 5] = "RegisterOptions", r20[r20.UnregisterOptions = 6] = "UnregisterOptions", r20[r20.SetButtonElement = 7] = "SetButtonElement", r20[r20.SetOptionsElement = 8] = "SetOptionsElement", r20[r20.SortOptions = 9] = "SortOptions", r20))(M7 || {});
function b9(e8, o21 = (t13) => t13) {
  let t13 = e8.activeOptionIndex !== null ? e8.options[e8.activeOptionIndex] : null, n17 = P5(o21(e8.options.slice()), (s17) => s17.dataRef.current.domRef.current), i18 = t13 ? n17.indexOf(t13) : null;
  return i18 === -1 && (i18 = null), { options: n17, activeOptionIndex: i18 };
}
var C10 = { [1](e8) {
  return e8.dataRef.current.disabled || e8.listboxState === 1 ? e8 : { ...e8, activeOptionIndex: null, pendingFocus: { focus: c9.Nothing }, listboxState: 1, __demoMode: false };
}, [0](e8, o21) {
  if (e8.dataRef.current.disabled || e8.listboxState === 0) return e8;
  let t13 = e8.activeOptionIndex, { isSelected: n17 } = e8.dataRef.current, i18 = e8.options.findIndex((s17) => n17(s17.dataRef.current.value));
  return i18 !== -1 && (t13 = i18), { ...e8, pendingFocus: o21.focus, listboxState: 0, activeOptionIndex: t13, __demoMode: false };
}, [2](e8, o21) {
  var s17, l16, u24, d14, a27;
  if (e8.dataRef.current.disabled || e8.listboxState === 1) return e8;
  let t13 = { ...e8, searchQuery: "", activationTrigger: (s17 = o21.trigger) != null ? s17 : 1, __demoMode: false };
  if (o21.focus === c9.Nothing) return { ...t13, activeOptionIndex: null };
  if (o21.focus === c9.Specific) return { ...t13, activeOptionIndex: e8.options.findIndex((r20) => r20.id === o21.id) };
  if (o21.focus === c9.Previous) {
    let r20 = e8.activeOptionIndex;
    if (r20 !== null) {
      let O8 = e8.options[r20].dataRef.current.domRef, f24 = f16(o21, { resolveItems: () => e8.options, resolveActiveIndex: () => e8.activeOptionIndex, resolveId: (c18) => c18.id, resolveDisabled: (c18) => c18.dataRef.current.disabled });
      if (f24 !== null) {
        let c18 = e8.options[f24].dataRef.current.domRef;
        if (((l16 = O8.current) == null ? void 0 : l16.previousElementSibling) === c18.current || ((u24 = c18.current) == null ? void 0 : u24.previousElementSibling) === null) return { ...t13, activeOptionIndex: f24 };
      }
    }
  } else if (o21.focus === c9.Next) {
    let r20 = e8.activeOptionIndex;
    if (r20 !== null) {
      let O8 = e8.options[r20].dataRef.current.domRef, f24 = f16(o21, { resolveItems: () => e8.options, resolveActiveIndex: () => e8.activeOptionIndex, resolveId: (c18) => c18.id, resolveDisabled: (c18) => c18.dataRef.current.disabled });
      if (f24 !== null) {
        let c18 = e8.options[f24].dataRef.current.domRef;
        if (((d14 = O8.current) == null ? void 0 : d14.nextElementSibling) === c18.current || ((a27 = c18.current) == null ? void 0 : a27.nextElementSibling) === null) return { ...t13, activeOptionIndex: f24 };
      }
    }
  }
  let n17 = b9(e8), i18 = f16(o21, { resolveItems: () => n17.options, resolveActiveIndex: () => n17.activeOptionIndex, resolveId: (r20) => r20.id, resolveDisabled: (r20) => r20.dataRef.current.disabled });
  return { ...t13, ...n17, activeOptionIndex: i18 };
}, [3]: (e8, o21) => {
  if (e8.dataRef.current.disabled || e8.listboxState === 1) return e8;
  let n17 = e8.searchQuery !== "" ? 0 : 1, i18 = e8.searchQuery + o21.value.toLowerCase(), l16 = (e8.activeOptionIndex !== null ? e8.options.slice(e8.activeOptionIndex + n17).concat(e8.options.slice(0, e8.activeOptionIndex + n17)) : e8.options).find((d14) => {
    var a27;
    return !d14.dataRef.current.disabled && ((a27 = d14.dataRef.current.textValue) == null ? void 0 : a27.startsWith(i18));
  }), u24 = l16 ? e8.options.indexOf(l16) : -1;
  return u24 === -1 || u24 === e8.activeOptionIndex ? { ...e8, searchQuery: i18 } : { ...e8, searchQuery: i18, activeOptionIndex: u24, activationTrigger: 1 };
}, [4](e8) {
  return e8.dataRef.current.disabled || e8.listboxState === 1 || e8.searchQuery === "" ? e8 : { ...e8, searchQuery: "" };
}, [5]: (e8, o21) => {
  let t13 = e8.options.concat(o21.options), n17 = e8.activeOptionIndex;
  if (e8.pendingFocus.focus !== c9.Nothing && (n17 = f16(e8.pendingFocus, { resolveItems: () => t13, resolveActiveIndex: () => e8.activeOptionIndex, resolveId: (i18) => i18.id, resolveDisabled: (i18) => i18.dataRef.current.disabled })), e8.activeOptionIndex === null) {
    let { isSelected: i18 } = e8.dataRef.current;
    if (i18) {
      let s17 = t13.findIndex((l16) => i18 == null ? void 0 : i18(l16.dataRef.current.value));
      s17 !== -1 && (n17 = s17);
    }
  }
  return { ...e8, options: t13, activeOptionIndex: n17, pendingFocus: { focus: c9.Nothing }, pendingShouldSort: true };
}, [6]: (e8, o21) => {
  let t13 = e8.options, n17 = [], i18 = new Set(o21.options);
  for (let [s17, l16] of t13.entries()) if (i18.has(l16.id) && (n17.push(s17), i18.delete(l16.id), i18.size === 0)) break;
  if (n17.length > 0) {
    t13 = t13.slice();
    for (let s17 of n17.reverse()) t13.splice(s17, 1);
  }
  return { ...e8, options: t13, activationTrigger: 1 };
}, [7]: (e8, o21) => e8.buttonElement === o21.element ? e8 : { ...e8, buttonElement: o21.element }, [8]: (e8, o21) => e8.optionsElement === o21.element ? e8 : { ...e8, optionsElement: o21.element }, [9]: (e8) => e8.pendingShouldSort ? { ...e8, ...b9(e8), pendingShouldSort: false } : e8 };
var h9 = class _h extends E5 {
  constructor(t13) {
    super(t13);
    v5(this, "actions", { onChange: (t14) => {
      let { onChange: n17, compare: i18, mode: s17, value: l16 } = this.state.dataRef.current;
      return u(s17, { [0]: () => n17 == null ? void 0 : n17(t14), [1]: () => {
        let u24 = l16.slice(), d14 = u24.findIndex((a27) => i18(a27, t14));
        return d14 === -1 ? u24.push(t14) : u24.splice(d14, 1), n17 == null ? void 0 : n17(u24);
      } });
    }, registerOption: x2(() => {
      let t14 = [], n17 = /* @__PURE__ */ new Set();
      return [(i18, s17) => {
        n17.has(s17) || (n17.add(s17), t14.push({ id: i18, dataRef: s17 }));
      }, () => (n17.clear(), this.send({ type: 5, options: t14.splice(0) }))];
    }), unregisterOption: x2(() => {
      let t14 = [];
      return [(n17) => t14.push(n17), () => {
        this.send({ type: 6, options: t14.splice(0) });
      }];
    }), goToOption: x2(() => {
      let t14 = null;
      return [(n17, i18) => {
        t14 = { type: 2, ...n17, trigger: i18 };
      }, () => t14 && this.send(t14)];
    }), closeListbox: () => {
      this.send({ type: 1 });
    }, openListbox: (t14) => {
      this.send({ type: 0, focus: t14 });
    }, selectActiveOption: () => {
      if (this.state.activeOptionIndex !== null) {
        let { dataRef: t14, id: n17 } = this.state.options[this.state.activeOptionIndex];
        this.actions.onChange(t14.current.value), this.send({ type: 2, focus: c9.Specific, id: n17 });
      }
    }, selectOption: (t14) => {
      let n17 = this.state.options.find((i18) => i18.id === t14);
      n17 && this.actions.onChange(n17.dataRef.current.value);
    }, search: (t14) => {
      this.send({ type: 3, value: t14 });
    }, clearSearch: () => {
      this.send({ type: 4 });
    }, setButtonElement: (t14) => {
      this.send({ type: 7, element: t14 });
    }, setOptionsElement: (t14) => {
      this.send({ type: 8, element: t14 });
    } });
    v5(this, "selectors", { activeDescendantId(t14) {
      var s17;
      let n17 = t14.activeOptionIndex, i18 = t14.options;
      return n17 === null || (s17 = i18[n17]) == null ? void 0 : s17.id;
    }, isActive(t14, n17) {
      var l16;
      let i18 = t14.activeOptionIndex, s17 = t14.options;
      return i18 !== null ? ((l16 = s17[i18]) == null ? void 0 : l16.id) === n17 : false;
    }, shouldScrollIntoView(t14, n17) {
      return t14.__demoMode || t14.listboxState !== 0 || t14.activationTrigger === 0 ? false : this.isActive(t14, n17);
    } });
    this.on(5, () => {
      requestAnimationFrame(() => {
        this.send({ type: 9 });
      });
    });
    {
      let n17 = this.state.id, i18 = x3.get(null);
      this.disposables.add(i18.on(k3.Push, (s17) => {
        !i18.selectors.isTop(s17, n17) && this.state.listboxState === 0 && this.actions.closeListbox();
      })), this.on(0, () => i18.actions.push(n17)), this.on(1, () => i18.actions.pop(n17));
    }
  }
  static new({ id: t13, __demoMode: n17 = false }) {
    return new _h({ id: t13, dataRef: { current: {} }, listboxState: n17 ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, buttonElement: null, optionsElement: null, pendingShouldSort: false, pendingFocus: { focus: c9.Nothing }, __demoMode: n17 });
  }
  reduce(t13, n17) {
    return u(n17.type, C10, t13, n17);
  }
};

// node_modules/@headlessui/react/dist/components/listbox/listbox-machine-glue.js
var import_react105 = __toESM(require_react(), 1);
var c16 = (0, import_react105.createContext)(null);
function p9(o21) {
  let e8 = (0, import_react105.useContext)(c16);
  if (e8 === null) {
    let t13 = new Error(`<${o21} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t13, u21), t13;
  }
  return e8;
}
function u21({ id: o21, __demoMode: e8 = false }) {
  let t13 = (0, import_react105.useMemo)(() => h9.new({ id: o21, __demoMode: e8 }), []);
  return c10(() => t13.dispose()), t13;
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var re3 = (0, import_react106.createContext)(null);
re3.displayName = "ListboxDataContext";
function Y2(g8) {
  let D8 = (0, import_react106.useContext)(re3);
  if (D8 === null) {
    let x13 = new Error(`<${g8} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(x13, Y2), x13;
  }
  return D8;
}
var gt = import_react106.Fragment;
function vt2(g8, D8) {
  let x13 = (0, import_react51.useId)(), u24 = a3(), { value: l16, defaultValue: p12, form: R5, name: i18, onChange: b11, by: o21, invalid: d14 = false, disabled: m12 = u24 || false, horizontal: a27 = false, multiple: t13 = false, __demoMode: s17 = false, ...A6 } = g8;
  const v6 = a27 ? "horizontal" : "vertical";
  let U6 = y(D8), w12 = l2(p12), [c18 = t13 ? [] : void 0, O8] = T(l16, b11, w12), y11 = u21({ id: x13, __demoMode: s17 }), I8 = (0, import_react106.useRef)({ static: false, hold: false }), N2 = (0, import_react106.useRef)(/* @__PURE__ */ new Map()), _10 = u9(o21), H12 = (0, import_react106.useCallback)((h11) => u(n17.mode, { [L6.Multi]: () => c18.some((W2) => _10(W2, h11)), [L6.Single]: () => _10(c18, h11) }), [c18]), n17 = (0, import_react106.useMemo)(() => ({ value: c18, disabled: m12, invalid: d14, mode: t13 ? L6.Multi : L6.Single, orientation: v6, onChange: O8, compare: _10, isSelected: H12, optionsPropsRef: I8, listRef: N2 }), [c18, m12, d14, t13, v6, O8, _10, H12, I8, N2]);
  n(() => {
    y11.state.dataRef.current = n17;
  }, [n17]);
  let L8 = S3(y11, (h11) => h11.listboxState), G6 = x3.get(null), K6 = S3(G6, (0, import_react106.useCallback)((h11) => G6.selectors.isTop(h11, x13), [G6, x13])), [E17, z4] = S3(y11, (h11) => [h11.buttonElement, h11.optionsElement]);
  k4(K6, [E17, z4], (h11, W2) => {
    y11.send({ type: M7.CloseListbox }), A2(W2, h5.Loose) || (h11.preventDefault(), E17 == null || E17.focus());
  });
  let r20 = (0, import_react106.useMemo)(() => ({ open: L8 === E13.Open, disabled: m12, invalid: d14, value: c18 }), [L8, m12, d14, c18]), [B4, ae4] = Q({ inherit: true }), le2 = { ref: U6 }, ie3 = (0, import_react106.useCallback)(() => {
    if (w12 !== void 0) return O8 == null ? void 0 : O8(w12);
  }, [O8, w12]), Z4 = L();
  return import_react106.default.createElement(ae4, { value: B4, props: { htmlFor: E17 == null ? void 0 : E17.id }, slot: { open: L8 === E13.Open, disabled: m12 } }, import_react106.default.createElement(Ae, null, import_react106.default.createElement(c16.Provider, { value: y11 }, import_react106.default.createElement(re3.Provider, { value: n17 }, import_react106.default.createElement(c8, { value: u(L8, { [E13.Open]: i11.Open, [E13.Closed]: i11.Closed }) }, i18 != null && c18 != null && import_react106.default.createElement(j2, { disabled: m12, data: { [i18]: c18 }, form: R5, onReset: ie3 }), Z4({ ourProps: le2, theirProps: A6, slot: r20, defaultTag: gt, name: "Listbox" }))))));
}
var Et = "button";
function ht(g8, D8) {
  let x13 = (0, import_react51.useId)(), u24 = u4(), l16 = Y2("Listbox.Button"), p12 = p9("Listbox.Button"), { id: R5 = u24 || `headlessui-listbox-button-${x13}`, disabled: i18 = l16.disabled || false, autoFocus: b11 = false, ...o21 } = g8, d14 = y(D8, Fe2(), p12.actions.setButtonElement), m12 = be(), [a27, t13, s17] = S3(p12, (r20) => [r20.listboxState, r20.buttonElement, r20.optionsElement]), A6 = a27 === E13.Open;
  k5(A6, { trigger: t13, action: (0, import_react106.useCallback)((r20) => {
    if (t13 != null && t13.contains(r20.target)) return g3.Ignore;
    let B4 = r20.target.closest('[role="option"]:not([data-disabled])');
    return n4(B4) ? g3.Select(B4) : s17 != null && s17.contains(r20.target) ? g3.Ignore : g3.Close;
  }, [t13, s17]), close: p12.actions.closeListbox, select: p12.actions.selectActiveOption });
  let v6 = o5((r20) => {
    switch (r20.key) {
      case o10.Enter:
        p2(r20.currentTarget);
        break;
      case o10.Space:
      case o10.ArrowDown:
        r20.preventDefault(), p12.actions.openListbox({ focus: l16.value ? c9.Nothing : c9.First });
        break;
      case o10.ArrowUp:
        r20.preventDefault(), p12.actions.openListbox({ focus: l16.value ? c9.Nothing : c9.Last });
        break;
    }
  }), U6 = o5((r20) => {
    switch (r20.key) {
      case o10.Space:
        r20.preventDefault();
        break;
    }
  }), w12 = o5((r20) => {
    var B4;
    if (r20.button === 0) {
      if (s5(r20.currentTarget)) return r20.preventDefault();
      p12.state.listboxState === E13.Open ? ((0, import_react_dom9.flushSync)(() => p12.actions.closeListbox()), (B4 = p12.state.buttonElement) == null || B4.focus({ preventScroll: true })) : (r20.preventDefault(), p12.actions.openListbox({ focus: c9.Nothing }));
    }
  }), c18 = o5((r20) => r20.preventDefault()), O8 = N([R5]), y11 = U2(), { isFocusVisible: I8, focusProps: N2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: b11 }), { isHovered: _10, hoverProps: H12 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i18 }), { pressed: n17, pressProps: L8 } = w({ disabled: i18 }), G6 = (0, import_react106.useMemo)(() => ({ open: a27 === E13.Open, active: n17 || a27 === E13.Open, disabled: i18, invalid: l16.invalid, value: l16.value, hover: _10, focus: I8, autofocus: b11 }), [a27, l16.value, i18, _10, I8, n17, l16.invalid, b11]), K6 = S3(p12, (r20) => r20.listboxState === E13.Open), E17 = _(m12(), { ref: d14, id: R5, type: e5(g8, t13), "aria-haspopup": "listbox", "aria-controls": s17 == null ? void 0 : s17.id, "aria-expanded": K6, "aria-labelledby": O8, "aria-describedby": y11, disabled: i18 || void 0, autoFocus: b11, onKeyDown: v6, onKeyUp: U6, onKeyPress: c18, onPointerDown: w12 }, N2, H12, L8);
  return L()({ ourProps: E17, theirProps: o21, slot: G6, defaultTag: Et, name: "Listbox.Button" });
}
var Le2 = (0, import_react106.createContext)(false);
var Dt = "div";
var At = O.RenderStrategy | O.Static;
function St(g8, D8) {
  let x13 = (0, import_react51.useId)(), { id: u24 = `headlessui-listbox-options-${x13}`, anchor: l16, portal: p12 = false, modal: R5 = true, transition: i18 = false, ...b11 } = g8, o21 = ye(l16), [d14, m12] = (0, import_react106.useState)(null);
  o21 && (p12 = true);
  let a27 = Y2("Listbox.Options"), t13 = p9("Listbox.Options"), [s17, A6, v6, U6] = S3(t13, (e8) => [e8.listboxState, e8.buttonElement, e8.optionsElement, e8.__demoMode]), w12 = n11(A6), c18 = n11(v6), O8 = u16(), [y11, I8] = x4(i18, d14, O8 !== null ? (O8 & i11.Open) === i11.Open : s17 === E13.Open);
  p5(y11, A6, t13.actions.closeListbox);
  let N2 = U6 ? false : R5 && s17 === E13.Open;
  f13(N2, c18);
  let _10 = U6 ? false : R5 && s17 === E13.Open;
  y5(_10, { allowed: (0, import_react106.useCallback)(() => [A6, v6], [A6, v6]) });
  let H12 = s17 !== E13.Open, L8 = s12(H12, A6) ? false : y11, G6 = y11 && s17 === E13.Closed, K6 = l9(G6, a27.value), E17 = o5((e8) => a27.compare(K6, e8)), z4 = S3(t13, (e8) => {
    var X4;
    if (o21 == null || !((X4 = o21 == null ? void 0 : o21.to) != null && X4.includes("selection"))) return null;
    let S10 = e8.options.findIndex((se2) => E17(se2.dataRef.current.value));
    return S10 === -1 && (S10 = 0), S10;
  }), r20 = (() => {
    if (o21 == null) return;
    if (z4 === null) return { ...o21, inner: void 0 };
    let e8 = Array.from(a27.listRef.current.values());
    return { ...o21, inner: { listRef: { current: e8 }, index: z4 } };
  })(), [B4, ae4] = Re(r20), le2 = Te(), ie3 = y(D8, o21 ? B4 : null, t13.actions.setOptionsElement, m12), Z4 = p();
  (0, import_react106.useEffect)(() => {
    var S10;
    let e8 = v6;
    e8 && s17 === E13.Open && e8 !== ((S10 = o2(e8)) == null ? void 0 : S10.activeElement) && (e8 == null || e8.focus({ preventScroll: true }));
  }, [s17, v6]);
  let h11 = o5((e8) => {
    var S10, X4;
    switch (Z4.dispose(), e8.key) {
      case o10.Space:
        if (t13.state.searchQuery !== "") return e8.preventDefault(), e8.stopPropagation(), t13.actions.search(e8.key);
      case o10.Enter:
        if (e8.preventDefault(), e8.stopPropagation(), t13.state.activeOptionIndex !== null) {
          let { dataRef: se2 } = t13.state.options[t13.state.activeOptionIndex];
          t13.actions.onChange(se2.current.value);
        }
        a27.mode === L6.Single && ((0, import_react_dom9.flushSync)(() => t13.actions.closeListbox()), (S10 = t13.state.buttonElement) == null || S10.focus({ preventScroll: true }));
        break;
      case u(a27.orientation, { vertical: o10.ArrowDown, horizontal: o10.ArrowRight }):
        return e8.preventDefault(), e8.stopPropagation(), t13.actions.goToOption({ focus: c9.Next });
      case u(a27.orientation, { vertical: o10.ArrowUp, horizontal: o10.ArrowLeft }):
        return e8.preventDefault(), e8.stopPropagation(), t13.actions.goToOption({ focus: c9.Previous });
      case o10.Home:
      case o10.PageUp:
        return e8.preventDefault(), e8.stopPropagation(), t13.actions.goToOption({ focus: c9.First });
      case o10.End:
      case o10.PageDown:
        return e8.preventDefault(), e8.stopPropagation(), t13.actions.goToOption({ focus: c9.Last });
      case o10.Escape:
        e8.preventDefault(), e8.stopPropagation(), (0, import_react_dom9.flushSync)(() => t13.actions.closeListbox()), (X4 = t13.state.buttonElement) == null || X4.focus({ preventScroll: true });
        return;
      case o10.Tab:
        e8.preventDefault(), e8.stopPropagation(), (0, import_react_dom9.flushSync)(() => t13.actions.closeListbox()), j5(t13.state.buttonElement, e8.shiftKey ? T5.Previous : T5.Next);
        break;
      default:
        e8.key.length === 1 && (t13.actions.search(e8.key), Z4.setTimeout(() => t13.actions.clearSearch(), 350));
        break;
    }
  }), W2 = S3(t13, (e8) => {
    var S10;
    return (S10 = e8.buttonElement) == null ? void 0 : S10.id;
  }), Pe3 = (0, import_react106.useMemo)(() => ({ open: s17 === E13.Open }), [s17]), ge7 = _(o21 ? le2() : {}, { id: u24, ref: ie3, "aria-activedescendant": S3(t13, t13.selectors.activeDescendantId), "aria-multiselectable": a27.mode === L6.Multi ? true : void 0, "aria-labelledby": W2, "aria-orientation": a27.orientation, onKeyDown: h11, role: "listbox", tabIndex: s17 === E13.Open ? 0 : void 0, style: { ...b11.style, ...ae4, "--button-width": d3(A6, true).width }, ...R2(I8) }), ve3 = L(), Ee3 = (0, import_react106.useMemo)(() => a27.mode === L6.Multi ? a27 : { ...a27, isSelected: E17 }, [a27, E17]);
  return import_react106.default.createElement(ne, { enabled: p12 ? g8.static || y11 : false, ownerDocument: w12 }, import_react106.default.createElement(re3.Provider, { value: Ee3 }, ve3({ ourProps: ge7, theirProps: b11, slot: Pe3, defaultTag: Dt, features: At, visible: L8, name: "Listbox.Options" })));
}
var Rt = "div";
function _t(g8, D8) {
  let x13 = (0, import_react51.useId)(), { id: u24 = `headlessui-listbox-option-${x13}`, disabled: l16 = false, value: p12, ...R5 } = g8, i18 = (0, import_react106.useContext)(Le2) === true, b11 = Y2("Listbox.Option"), o21 = p9("Listbox.Option"), d14 = S3(o21, (n17) => o21.selectors.isActive(n17, u24)), m12 = b11.isSelected(p12), a27 = (0, import_react106.useRef)(null), t13 = s13(a27), s17 = s3({ disabled: l16, value: p12, domRef: a27, get textValue() {
    return t13();
  } }), A6 = y(D8, a27, (n17) => {
    n17 ? b11.listRef.current.set(u24, n17) : b11.listRef.current.delete(u24);
  }), v6 = S3(o21, (n17) => o21.selectors.shouldScrollIntoView(n17, u24));
  n(() => {
    if (v6) return o3().requestAnimationFrame(() => {
      var n17, L8;
      (L8 = (n17 = a27.current) == null ? void 0 : n17.scrollIntoView) == null || L8.call(n17, { block: "nearest" });
    });
  }, [v6, a27]), n(() => {
    if (!i18) return o21.actions.registerOption(u24, s17), () => o21.actions.unregisterOption(u24);
  }, [s17, u24, i18]);
  let U6 = o5((n17) => {
    var L8;
    if (l16) return n17.preventDefault();
    o21.actions.onChange(p12), b11.mode === L6.Single && ((0, import_react_dom9.flushSync)(() => o21.actions.closeListbox()), (L8 = o21.state.buttonElement) == null || L8.focus({ preventScroll: true }));
  }), w12 = o5(() => {
    if (l16) return o21.actions.goToOption({ focus: c9.Nothing });
    o21.actions.goToOption({ focus: c9.Specific, id: u24 });
  }), c18 = u14(), O8 = o5((n17) => {
    c18.update(n17), !l16 && (d14 || o21.actions.goToOption({ focus: c9.Specific, id: u24 }, F9.Pointer));
  }), y11 = o5((n17) => {
    c18.wasMoved(n17) && (l16 || d14 || o21.actions.goToOption({ focus: c9.Specific, id: u24 }, F9.Pointer));
  }), I8 = o5((n17) => {
    c18.wasMoved(n17) && (l16 || d14 && o21.actions.goToOption({ focus: c9.Nothing }));
  }), N2 = (0, import_react106.useMemo)(() => ({ active: d14, focus: d14, selected: m12, disabled: l16, selectedOption: m12 && i18 }), [d14, m12, l16, i18]), _10 = i18 ? {} : { id: u24, ref: A6, role: "option", tabIndex: l16 === true ? void 0 : -1, "aria-disabled": l16 === true ? true : void 0, "aria-selected": m12, disabled: void 0, onClick: U6, onFocus: w12, onPointerEnter: O8, onMouseEnter: O8, onPointerMove: y11, onMouseMove: y11, onPointerLeave: I8, onMouseLeave: I8 }, H12 = L();
  return !m12 && i18 ? null : H12({ ourProps: _10, theirProps: R5, slot: N2, defaultTag: Rt, name: "Listbox.Option" });
}
var Ft = import_react106.Fragment;
function Ct(g8, D8) {
  let { options: x13, placeholder: u24, ...l16 } = g8, R5 = { ref: y(D8) }, i18 = Y2("ListboxSelectedOption"), b11 = (0, import_react106.useMemo)(() => ({}), []), o21 = i18.value === void 0 || i18.value === null || i18.mode === L6.Multi && Array.isArray(i18.value) && i18.value.length === 0, d14 = L();
  return import_react106.default.createElement(Le2.Provider, { value: true }, d14({ ourProps: R5, theirProps: { ...l16, children: import_react106.default.createElement(import_react106.default.Fragment, null, u24 && o21 ? u24 : x13) }, slot: b11, defaultTag: Ft, name: "ListboxSelectedOption" }));
}
var Mt = K(vt2);
var wt2 = K(ht);
var It = V;
var Bt = K(St);
var kt = K(_t);
var Ut = K(Ct);
var wo2 = Object.assign(Mt, { Button: wt2, Label: It, Options: Bt, Option: kt, SelectedOption: Ut });

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react108 = __toESM(require_react(), 1);
var import_react_dom10 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/components/menu/menu-machine.js
var h10 = Object.defineProperty;
var y10 = (e8, i18, t13) => i18 in e8 ? h10(e8, i18, { enumerable: true, configurable: true, writable: true, value: t13 }) : e8[i18] = t13;
var g7 = (e8, i18, t13) => (y10(e8, typeof i18 != "symbol" ? i18 + "" : i18, t13), t13);
var E14 = ((t13) => (t13[t13.Open = 0] = "Open", t13[t13.Closed = 1] = "Closed", t13))(E14 || {});
var O7 = ((t13) => (t13[t13.Pointer = 0] = "Pointer", t13[t13.Other = 1] = "Other", t13))(O7 || {});
var F11 = ((r20) => (r20[r20.OpenMenu = 0] = "OpenMenu", r20[r20.CloseMenu = 1] = "CloseMenu", r20[r20.GoToItem = 2] = "GoToItem", r20[r20.Search = 3] = "Search", r20[r20.ClearSearch = 4] = "ClearSearch", r20[r20.RegisterItems = 5] = "RegisterItems", r20[r20.UnregisterItems = 6] = "UnregisterItems", r20[r20.SetButtonElement = 7] = "SetButtonElement", r20[r20.SetItemsElement = 8] = "SetItemsElement", r20[r20.SortItems = 9] = "SortItems", r20))(F11 || {});
function S8(e8, i18 = (t13) => t13) {
  let t13 = e8.activeItemIndex !== null ? e8.items[e8.activeItemIndex] : null, n17 = P5(i18(e8.items.slice()), (l16) => l16.dataRef.current.domRef.current), s17 = t13 ? n17.indexOf(t13) : null;
  return s17 === -1 && (s17 = null), { items: n17, activeItemIndex: s17 };
}
var D7 = { [1](e8) {
  return e8.menuState === 1 ? e8 : { ...e8, activeItemIndex: null, pendingFocus: { focus: c9.Nothing }, menuState: 1 };
}, [0](e8, i18) {
  return e8.menuState === 0 ? e8 : { ...e8, __demoMode: false, pendingFocus: i18.focus, menuState: 0 };
}, [2]: (e8, i18) => {
  var l16, o21, d14, a27, I8;
  if (e8.menuState === 1) return e8;
  let t13 = { ...e8, searchQuery: "", activationTrigger: (l16 = i18.trigger) != null ? l16 : 1, __demoMode: false };
  if (i18.focus === c9.Nothing) return { ...t13, activeItemIndex: null };
  if (i18.focus === c9.Specific) return { ...t13, activeItemIndex: e8.items.findIndex((r20) => r20.id === i18.id) };
  if (i18.focus === c9.Previous) {
    let r20 = e8.activeItemIndex;
    if (r20 !== null) {
      let p12 = e8.items[r20].dataRef.current.domRef, m12 = f16(i18, { resolveItems: () => e8.items, resolveActiveIndex: () => e8.activeItemIndex, resolveId: (u24) => u24.id, resolveDisabled: (u24) => u24.dataRef.current.disabled });
      if (m12 !== null) {
        let u24 = e8.items[m12].dataRef.current.domRef;
        if (((o21 = p12.current) == null ? void 0 : o21.previousElementSibling) === u24.current || ((d14 = u24.current) == null ? void 0 : d14.previousElementSibling) === null) return { ...t13, activeItemIndex: m12 };
      }
    }
  } else if (i18.focus === c9.Next) {
    let r20 = e8.activeItemIndex;
    if (r20 !== null) {
      let p12 = e8.items[r20].dataRef.current.domRef, m12 = f16(i18, { resolveItems: () => e8.items, resolveActiveIndex: () => e8.activeItemIndex, resolveId: (u24) => u24.id, resolveDisabled: (u24) => u24.dataRef.current.disabled });
      if (m12 !== null) {
        let u24 = e8.items[m12].dataRef.current.domRef;
        if (((a27 = p12.current) == null ? void 0 : a27.nextElementSibling) === u24.current || ((I8 = u24.current) == null ? void 0 : I8.nextElementSibling) === null) return { ...t13, activeItemIndex: m12 };
      }
    }
  }
  let n17 = S8(e8), s17 = f16(i18, { resolveItems: () => n17.items, resolveActiveIndex: () => n17.activeItemIndex, resolveId: (r20) => r20.id, resolveDisabled: (r20) => r20.dataRef.current.disabled });
  return { ...t13, ...n17, activeItemIndex: s17 };
}, [3]: (e8, i18) => {
  let n17 = e8.searchQuery !== "" ? 0 : 1, s17 = e8.searchQuery + i18.value.toLowerCase(), o21 = (e8.activeItemIndex !== null ? e8.items.slice(e8.activeItemIndex + n17).concat(e8.items.slice(0, e8.activeItemIndex + n17)) : e8.items).find((a27) => {
    var I8;
    return ((I8 = a27.dataRef.current.textValue) == null ? void 0 : I8.startsWith(s17)) && !a27.dataRef.current.disabled;
  }), d14 = o21 ? e8.items.indexOf(o21) : -1;
  return d14 === -1 || d14 === e8.activeItemIndex ? { ...e8, searchQuery: s17 } : { ...e8, searchQuery: s17, activeItemIndex: d14, activationTrigger: 1 };
}, [4](e8) {
  return e8.searchQuery === "" ? e8 : { ...e8, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e8, i18) => {
  let t13 = e8.items.concat(i18.items.map((s17) => s17)), n17 = e8.activeItemIndex;
  return e8.pendingFocus.focus !== c9.Nothing && (n17 = f16(e8.pendingFocus, { resolveItems: () => t13, resolveActiveIndex: () => e8.activeItemIndex, resolveId: (s17) => s17.id, resolveDisabled: (s17) => s17.dataRef.current.disabled })), { ...e8, items: t13, activeItemIndex: n17, pendingFocus: { focus: c9.Nothing }, pendingShouldSort: true };
}, [6]: (e8, i18) => {
  let t13 = e8.items, n17 = [], s17 = new Set(i18.items);
  for (let [l16, o21] of t13.entries()) if (s17.has(o21.id) && (n17.push(l16), s17.delete(o21.id), s17.size === 0)) break;
  if (n17.length > 0) {
    t13 = t13.slice();
    for (let l16 of n17.reverse()) t13.splice(l16, 1);
  }
  return { ...e8, items: t13, activationTrigger: 1 };
}, [7]: (e8, i18) => e8.buttonElement === i18.element ? e8 : { ...e8, buttonElement: i18.element }, [8]: (e8, i18) => e8.itemsElement === i18.element ? e8 : { ...e8, itemsElement: i18.element }, [9]: (e8) => e8.pendingShouldSort ? { ...e8, ...S8(e8), pendingShouldSort: false } : e8 };
var x10 = class _x extends E5 {
  constructor(t13) {
    super(t13);
    g7(this, "actions", { registerItem: x2(() => {
      let t14 = [], n17 = /* @__PURE__ */ new Set();
      return [(s17, l16) => {
        n17.has(l16) || (n17.add(l16), t14.push({ id: s17, dataRef: l16 }));
      }, () => (n17.clear(), this.send({ type: 5, items: t14.splice(0) }))];
    }), unregisterItem: x2(() => {
      let t14 = [];
      return [(n17) => t14.push(n17), () => this.send({ type: 6, items: t14.splice(0) })];
    }) });
    g7(this, "selectors", { activeDescendantId(t14) {
      var l16;
      let n17 = t14.activeItemIndex, s17 = t14.items;
      return n17 === null || (l16 = s17[n17]) == null ? void 0 : l16.id;
    }, isActive(t14, n17) {
      var o21;
      let s17 = t14.activeItemIndex, l16 = t14.items;
      return s17 !== null ? ((o21 = l16[s17]) == null ? void 0 : o21.id) === n17 : false;
    }, shouldScrollIntoView(t14, n17) {
      return t14.__demoMode || t14.menuState !== 0 || t14.activationTrigger === 0 ? false : this.isActive(t14, n17);
    } });
    this.on(5, () => {
      this.disposables.requestAnimationFrame(() => {
        this.send({ type: 9 });
      });
    });
    {
      let n17 = this.state.id, s17 = x3.get(null);
      this.disposables.add(s17.on(k3.Push, (l16) => {
        !s17.selectors.isTop(l16, n17) && this.state.menuState === 0 && this.send({ type: 1 });
      })), this.on(0, () => s17.actions.push(n17)), this.on(1, () => s17.actions.pop(n17));
    }
  }
  static new({ id: t13, __demoMode: n17 = false }) {
    return new _x({ id: t13, __demoMode: n17, menuState: n17 ? 0 : 1, buttonElement: null, itemsElement: null, items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1, pendingShouldSort: false, pendingFocus: { focus: c9.Nothing } });
  }
  reduce(t13, n17) {
    return u(n17.type, D7, t13, n17);
  }
};

// node_modules/@headlessui/react/dist/components/menu/menu-machine-glue.js
var import_react107 = __toESM(require_react(), 1);
var a24 = (0, import_react107.createContext)(null);
function p10(t13) {
  let n17 = (0, import_react107.useContext)(a24);
  if (n17 === null) {
    let e8 = new Error(`<${t13} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, s14), e8;
  }
  return n17;
}
function s14({ id: t13, __demoMode: n17 = false }) {
  let e8 = (0, import_react107.useMemo)(() => x10.new({ id: t13, __demoMode: n17 }), []);
  return c10(() => e8.dispose()), e8;
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var et = import_react108.Fragment;
function tt(c18, E17) {
  let p12 = (0, import_react51.useId)(), { __demoMode: a27 = false, ...s17 } = c18, l16 = s14({ id: p12, __demoMode: a27 }), [n17, g8, y11] = S3(l16, (T15) => [T15.menuState, T15.itemsElement, T15.buttonElement]), I8 = y(E17), o21 = x3.get(null), h11 = S3(o21, (0, import_react108.useCallback)((T15) => o21.selectors.isTop(T15, p12), [o21, p12]));
  k4(h11, [y11, g8], (T15, u24) => {
    var f24;
    l16.send({ type: F11.CloseMenu }), A2(u24, h5.Loose) || (T15.preventDefault(), (f24 = l16.state.buttonElement) == null || f24.focus());
  });
  let _10 = o5(() => {
    l16.send({ type: F11.CloseMenu });
  }), M9 = (0, import_react108.useMemo)(() => ({ open: n17 === E14.Open, close: _10 }), [n17, _10]), i18 = { ref: I8 }, b11 = L();
  return import_react108.default.createElement(Ae, null, import_react108.default.createElement(a24.Provider, { value: l16 }, import_react108.default.createElement(c8, { value: u(n17, { [E14.Open]: i11.Open, [E14.Closed]: i11.Closed }) }, b11({ ourProps: i18, theirProps: s17, slot: M9, defaultTag: et, name: "Menu" }))));
}
var ot = "button";
function nt(c18, E17) {
  let p12 = p10("Menu.Button"), a27 = (0, import_react51.useId)(), { id: s17 = `headlessui-menu-button-${a27}`, disabled: l16 = false, autoFocus: n17 = false, ...g8 } = c18, y11 = (0, import_react108.useRef)(null), I8 = be(), o21 = y(E17, y11, Fe2(), o5((e8) => p12.send({ type: F11.SetButtonElement, element: e8 }))), h11 = o5((e8) => {
    switch (e8.key) {
      case o10.Space:
      case o10.Enter:
      case o10.ArrowDown:
        e8.preventDefault(), e8.stopPropagation(), p12.send({ type: F11.OpenMenu, focus: { focus: c9.First } });
        break;
      case o10.ArrowUp:
        e8.preventDefault(), e8.stopPropagation(), p12.send({ type: F11.OpenMenu, focus: { focus: c9.Last } });
        break;
    }
  }), _10 = o5((e8) => {
    switch (e8.key) {
      case o10.Space:
        e8.preventDefault();
        break;
    }
  }), [M9, i18, b11] = S3(p12, (e8) => [e8.menuState, e8.buttonElement, e8.itemsElement]), T15 = M9 === E14.Open;
  k5(T15, { trigger: i18, action: (0, import_react108.useCallback)((e8) => {
    if (i18 != null && i18.contains(e8.target)) return g3.Ignore;
    let R5 = e8.target.closest('[role="menuitem"]:not([data-disabled])');
    return n4(R5) ? g3.Select(R5) : b11 != null && b11.contains(e8.target) ? g3.Ignore : g3.Close;
  }, [i18, b11]), close: (0, import_react108.useCallback)(() => p12.send({ type: F11.CloseMenu }), []), select: (0, import_react108.useCallback)((e8) => e8.click(), []) });
  let u24 = o5((e8) => {
    var R5;
    if (e8.button === 0) {
      if (s5(e8.currentTarget)) return e8.preventDefault();
      l16 || (M9 === E14.Open ? ((0, import_react_dom10.flushSync)(() => p12.send({ type: F11.CloseMenu })), (R5 = y11.current) == null || R5.focus({ preventScroll: true })) : (e8.preventDefault(), p12.send({ type: F11.OpenMenu, focus: { focus: c9.Nothing }, trigger: O7.Pointer })));
    }
  }), { isFocusVisible: f24, focusProps: v6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: n17 }), { isHovered: S10, hoverProps: O8 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: l16 }), { pressed: F13, pressProps: U6 } = w({ disabled: l16 }), H12 = (0, import_react108.useMemo)(() => ({ open: M9 === E14.Open, active: F13 || M9 === E14.Open, disabled: l16, hover: S10, focus: f24, autofocus: n17 }), [M9, S10, f24, F13, l16, n17]), G6 = _(I8(), { ref: o21, id: s17, type: e5(c18, y11.current), "aria-haspopup": "menu", "aria-controls": b11 == null ? void 0 : b11.id, "aria-expanded": M9 === E14.Open, disabled: l16 || void 0, autoFocus: n17, onKeyDown: h11, onKeyUp: _10, onPointerDown: u24 }, v6, O8, U6);
  return L()({ ourProps: G6, theirProps: g8, slot: H12, defaultTag: ot, name: "Menu.Button" });
}
var rt = "div";
var at = O.RenderStrategy | O.Static;
function st(c18, E17) {
  let p12 = (0, import_react51.useId)(), { id: a27 = `headlessui-menu-items-${p12}`, anchor: s17, portal: l16 = false, modal: n17 = true, transition: g8 = false, ...y11 } = c18, I8 = ye(s17), o21 = p10("Menu.Items"), [h11, _10] = Re(I8), M9 = Te(), [i18, b11] = (0, import_react108.useState)(null), T15 = y(E17, I8 ? h11 : null, o5((t13) => o21.send({ type: F11.SetItemsElement, element: t13 })), b11), [u24, f24] = S3(o21, (t13) => [t13.menuState, t13.buttonElement]), v6 = n11(f24), S10 = n11(i18);
  I8 && (l16 = true);
  let O8 = u16(), [F13, U6] = x4(g8, i18, O8 !== null ? (O8 & i11.Open) === i11.Open : u24 === E14.Open);
  p5(F13, f24, () => {
    o21.send({ type: F11.CloseMenu });
  });
  let H12 = S3(o21, (t13) => t13.__demoMode), G6 = H12 ? false : n17 && u24 === E14.Open;
  f13(G6, S10);
  let w12 = H12 ? false : n17 && u24 === E14.Open;
  y5(w12, { allowed: (0, import_react108.useCallback)(() => [f24, i18], [f24, i18]) });
  let e8 = u24 !== E14.Open, le2 = s12(e8, f24) ? false : F13;
  (0, import_react108.useEffect)(() => {
    let t13 = i18;
    t13 && u24 === E14.Open && t13 !== (S10 == null ? void 0 : S10.activeElement) && t13.focus({ preventScroll: true });
  }, [u24, i18, S10]), F3(u24 === E14.Open, { container: i18, accept(t13) {
    return t13.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t13.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t13) {
    t13.setAttribute("role", "none");
  } });
  let z4 = p(), pe5 = o5((t13) => {
    var N2, Y4, Z4;
    switch (z4.dispose(), t13.key) {
      case o10.Space:
        if (o21.state.searchQuery !== "") return t13.preventDefault(), t13.stopPropagation(), o21.send({ type: F11.Search, value: t13.key });
      case o10.Enter:
        if (t13.preventDefault(), t13.stopPropagation(), o21.state.activeItemIndex !== null) {
          let { dataRef: ce3 } = o21.state.items[o21.state.activeItemIndex];
          (Y4 = (N2 = ce3.current) == null ? void 0 : N2.domRef.current) == null || Y4.click();
        }
        o21.send({ type: F11.CloseMenu }), V2(o21.state.buttonElement);
        break;
      case o10.ArrowDown:
        return t13.preventDefault(), t13.stopPropagation(), o21.send({ type: F11.GoToItem, focus: c9.Next });
      case o10.ArrowUp:
        return t13.preventDefault(), t13.stopPropagation(), o21.send({ type: F11.GoToItem, focus: c9.Previous });
      case o10.Home:
      case o10.PageUp:
        return t13.preventDefault(), t13.stopPropagation(), o21.send({ type: F11.GoToItem, focus: c9.First });
      case o10.End:
      case o10.PageDown:
        return t13.preventDefault(), t13.stopPropagation(), o21.send({ type: F11.GoToItem, focus: c9.Last });
      case o10.Escape:
        t13.preventDefault(), t13.stopPropagation(), (0, import_react_dom10.flushSync)(() => o21.send({ type: F11.CloseMenu })), (Z4 = o21.state.buttonElement) == null || Z4.focus({ preventScroll: true });
        break;
      case o10.Tab:
        t13.preventDefault(), t13.stopPropagation(), (0, import_react_dom10.flushSync)(() => o21.send({ type: F11.CloseMenu })), j5(o21.state.buttonElement, t13.shiftKey ? T5.Previous : T5.Next);
        break;
      default:
        t13.key.length === 1 && (o21.send({ type: F11.Search, value: t13.key }), z4.setTimeout(() => o21.send({ type: F11.ClearSearch }), 350));
        break;
    }
  }), ie3 = o5((t13) => {
    switch (t13.key) {
      case o10.Space:
        t13.preventDefault();
        break;
    }
  }), ue5 = (0, import_react108.useMemo)(() => ({ open: u24 === E14.Open }), [u24]), de6 = _(I8 ? M9() : {}, { "aria-activedescendant": S3(o21, o21.selectors.activeDescendantId), "aria-labelledby": S3(o21, (t13) => {
    var N2;
    return (N2 = t13.buttonElement) == null ? void 0 : N2.id;
  }), id: a27, onKeyDown: pe5, onKeyUp: ie3, role: "menu", tabIndex: u24 === E14.Open ? 0 : void 0, ref: T15, style: { ...y11.style, ..._10, "--button-width": d3(f24, true).width }, ...R2(U6) }), me5 = L();
  return import_react108.default.createElement(ne, { enabled: l16 ? c18.static || F13 : false, ownerDocument: v6 }, me5({ ourProps: de6, theirProps: y11, slot: ue5, defaultTag: rt, features: at, visible: le2, name: "Menu.Items" }));
}
var lt = import_react108.Fragment;
function pt(c18, E17) {
  let p12 = (0, import_react51.useId)(), { id: a27 = `headlessui-menu-item-${p12}`, disabled: s17 = false, ...l16 } = c18, n17 = p10("Menu.Item"), g8 = S3(n17, (e8) => n17.selectors.isActive(e8, a27)), y11 = (0, import_react108.useRef)(null), I8 = y(E17, y11), o21 = S3(n17, (e8) => n17.selectors.shouldScrollIntoView(e8, a27));
  n(() => {
    if (o21) return o3().requestAnimationFrame(() => {
      var e8, R5;
      (R5 = (e8 = y11.current) == null ? void 0 : e8.scrollIntoView) == null || R5.call(e8, { block: "nearest" });
    });
  }, [o21, y11]);
  let h11 = s13(y11), _10 = (0, import_react108.useRef)({ disabled: s17, domRef: y11, get textValue() {
    return h11();
  } });
  n(() => {
    _10.current.disabled = s17;
  }, [_10, s17]), n(() => (n17.actions.registerItem(a27, _10), () => n17.actions.unregisterItem(a27)), [_10, a27]);
  let M9 = o5(() => {
    n17.send({ type: F11.CloseMenu });
  }), i18 = o5((e8) => {
    if (s17) return e8.preventDefault();
    n17.send({ type: F11.CloseMenu }), V2(n17.state.buttonElement);
  }), b11 = o5(() => {
    if (s17) return n17.send({ type: F11.GoToItem, focus: c9.Nothing });
    n17.send({ type: F11.GoToItem, focus: c9.Specific, id: a27 });
  }), T15 = u14(), u24 = o5((e8) => {
    T15.update(e8), !s17 && (g8 || n17.send({ type: F11.GoToItem, focus: c9.Specific, id: a27, trigger: O7.Pointer }));
  }), f24 = o5((e8) => {
    T15.wasMoved(e8) && (s17 || g8 || n17.send({ type: F11.GoToItem, focus: c9.Specific, id: a27, trigger: O7.Pointer }));
  }), v6 = o5((e8) => {
    T15.wasMoved(e8) && (s17 || g8 && n17.send({ type: F11.GoToItem, focus: c9.Nothing }));
  }), [S10, O8] = Q(), [F13, U6] = w3(), H12 = (0, import_react108.useMemo)(() => ({ active: g8, focus: g8, disabled: s17, close: M9 }), [g8, s17, M9]), G6 = { id: a27, ref: I8, role: "menuitem", tabIndex: s17 === true ? void 0 : -1, "aria-disabled": s17 === true ? true : void 0, "aria-labelledby": S10, "aria-describedby": F13, disabled: void 0, onClick: i18, onFocus: b11, onPointerEnter: u24, onMouseEnter: u24, onPointerMove: f24, onMouseMove: f24, onPointerLeave: v6, onMouseLeave: v6 }, w12 = L();
  return import_react108.default.createElement(O8, null, import_react108.default.createElement(U6, null, w12({ ourProps: G6, theirProps: l16, slot: H12, defaultTag: lt, name: "Menu.Item" })));
}
var it = "div";
function ut(c18, E17) {
  let [p12, a27] = Q(), s17 = c18, l16 = { ref: E17, "aria-labelledby": p12, role: "group" }, n17 = L();
  return import_react108.default.createElement(a27, null, n17({ ourProps: l16, theirProps: s17, slot: {}, defaultTag: it, name: "Menu.Section" }));
}
var dt = "header";
function mt(c18, E17) {
  let p12 = (0, import_react51.useId)(), { id: a27 = `headlessui-menu-heading-${p12}`, ...s17 } = c18, l16 = C4();
  n(() => l16.register(a27), [a27, l16.register]);
  let n17 = { id: a27, ref: E17, role: "presentation", ...l16.props };
  return L()({ ourProps: n17, theirProps: s17, slot: {}, defaultTag: dt, name: "Menu.Heading" });
}
var ct = "div";
function Tt(c18, E17) {
  let p12 = c18, a27 = { ref: E17, role: "separator" };
  return L()({ ourProps: a27, theirProps: p12, slot: {}, defaultTag: ct, name: "Menu.Separator" });
}
var ft = K(tt);
var yt = K(nt);
var Pt = K(st);
var Et2 = K(pt);
var gt2 = K(ut);
var Mt2 = K(mt);
var bt2 = K(Tt);
var lo = Object.assign(ft, { Button: yt, Items: Pt, Item: Et2, Section: gt2, Heading: Mt2, Separator: bt2 });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react110 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/popover/popover-machine.js
var S9 = Object.defineProperty;
var f21 = (t13, n17, e8) => n17 in t13 ? S9(t13, n17, { enumerable: true, configurable: true, writable: true, value: e8 }) : t13[n17] = e8;
var p11 = (t13, n17, e8) => (f21(t13, typeof n17 != "symbol" ? n17 + "" : n17, e8), e8);
var I7 = ((e8) => (e8[e8.Open = 0] = "Open", e8[e8.Closed = 1] = "Closed", e8))(I7 || {});
var M8 = ((l16) => (l16[l16.OpenPopover = 0] = "OpenPopover", l16[l16.ClosePopover = 1] = "ClosePopover", l16[l16.SetButton = 2] = "SetButton", l16[l16.SetButtonId = 3] = "SetButtonId", l16[l16.SetPanel = 4] = "SetPanel", l16[l16.SetPanelId = 5] = "SetPanelId", l16))(M8 || {});
var T13 = { [0]: (t13) => t13.popoverState === 0 ? t13 : { ...t13, popoverState: 0, __demoMode: false }, [1](t13) {
  return t13.popoverState === 1 ? t13 : { ...t13, popoverState: 1, __demoMode: false };
}, [2](t13, n17) {
  return t13.button === n17.button ? t13 : { ...t13, button: n17.button };
}, [3](t13, n17) {
  return t13.buttonId === n17.buttonId ? t13 : { ...t13, buttonId: n17.buttonId };
}, [4](t13, n17) {
  return t13.panel === n17.panel ? t13 : { ...t13, panel: n17.panel };
}, [5](t13, n17) {
  return t13.panelId === n17.panelId ? t13 : { ...t13, panelId: n17.panelId };
} };
var i15 = class _i extends E5 {
  constructor(e8) {
    super(e8);
    p11(this, "actions", { close: () => this.send({ type: 1 }), refocusableClose: (e9) => {
      this.actions.close();
      let o21 = (() => e9 ? n4(e9) ? e9 : "current" in e9 && n4(e9.current) ? e9.current : this.state.button : this.state.button)();
      o21 == null || o21.focus();
    }, open: () => this.send({ type: 0 }), setButtonId: (e9) => this.send({ type: 3, buttonId: e9 }), setButton: (e9) => this.send({ type: 2, button: e9 }), setPanelId: (e9) => this.send({ type: 5, panelId: e9 }), setPanel: (e9) => this.send({ type: 4, panel: e9 }) });
    p11(this, "selectors", { isPortalled: (e9) => {
      if (!e9.button || !e9.panel) return false;
      for (let r20 of document.querySelectorAll("body > *")) if (Number(r20 == null ? void 0 : r20.contains(e9.button)) ^ Number(r20 == null ? void 0 : r20.contains(e9.panel))) return true;
      let o21 = b3(), u24 = o21.indexOf(e9.button), a27 = (u24 + o21.length - 1) % o21.length, l16 = (u24 + 1) % o21.length, d14 = o21[a27], c18 = o21[l16];
      return !e9.panel.contains(d14) && !e9.panel.contains(c18);
    } });
    {
      let o21 = this.state.id, u24 = x3.get(null);
      this.on(0, () => u24.actions.push(o21)), this.on(1, () => u24.actions.pop(o21));
    }
  }
  static new({ id: e8, __demoMode: o21 = false }) {
    return new _i({ id: e8, __demoMode: o21, popoverState: o21 ? 0 : 1, buttons: { current: [] }, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: { current: null }, afterPanelSentinel: { current: null }, afterButtonSentinel: { current: null } });
  }
  reduce(e8, o21) {
    return u(o21.type, T13, e8, o21);
  }
};

// node_modules/@headlessui/react/dist/components/popover/popover-machine-glue.js
var import_react109 = __toESM(require_react(), 1);
var a25 = (0, import_react109.createContext)(null);
function u23(r20) {
  let o21 = (0, import_react109.useContext)(a25);
  if (o21 === null) {
    let e8 = new Error(`<${r20} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, u23), e8;
  }
  return o21;
}
function f22({ id: r20, __demoMode: o21 = false }) {
  let e8 = (0, import_react109.useMemo)(() => i15.new({ id: r20, __demoMode: o21 }), []);
  return c10(() => e8.dispose()), e8;
}

// node_modules/@headlessui/react/dist/components/popover/popover.js
var ge4 = (0, import_react110.createContext)(null);
ge4.displayName = "PopoverGroupContext";
function Ge2() {
  return (0, import_react110.useContext)(ge4);
}
var fe5 = (0, import_react110.createContext)(null);
fe5.displayName = "PopoverPanelContext";
function ut2() {
  return (0, import_react110.useContext)(fe5);
}
var ct2 = "div";
function dt2(b11, M9) {
  var k9;
  let F13 = (0, import_react51.useId)(), { __demoMode: B4 = false, ...d14 } = b11, r20 = f22({ id: F13, __demoMode: B4 }), g8 = (0, import_react110.useRef)(null), t13 = y(M9, T2((n17) => {
    g8.current = n17;
  })), [_10, f24, o21, O8, E17] = S3(r20, (0, import_react110.useCallback)((n17) => [n17.popoverState, n17.button, n17.panel, n17.buttonId, n17.panelId], [])), P7 = n11((k9 = g8.current) != null ? k9 : f24), A6 = s3(O8), a27 = s3(E17), i18 = (0, import_react110.useMemo)(() => ({ buttonId: A6, panelId: a27, close: r20.actions.close }), [A6, a27, r20]), u24 = Ge2(), l16 = u24 == null ? void 0 : u24.registerPopover, v6 = o5(() => {
    var n17;
    return (n17 = u24 == null ? void 0 : u24.isFocusWithinPopoverGroup()) != null ? n17 : (P7 == null ? void 0 : P7.activeElement) && ((f24 == null ? void 0 : f24.contains(P7.activeElement)) || (o21 == null ? void 0 : o21.contains(P7.activeElement)));
  });
  (0, import_react110.useEffect)(() => l16 == null ? void 0 : l16(i18), [l16, i18]);
  let [m12, j11] = oe(), $7 = y8(f24), J8 = H7({ mainTreeNode: $7, portals: m12, defaultContainers: [{ get current() {
    return r20.state.button;
  } }, { get current() {
    return r20.state.panel;
  } }] });
  E8(P7 == null ? void 0 : P7.defaultView, "focus", (n17) => {
    var D8, z4, G6, U6, L8, N2;
    n17.target !== window && i4(n17.target) && r20.state.popoverState === I7.Open && (v6() || r20.state.button && r20.state.panel && (J8.contains(n17.target) || (z4 = (D8 = r20.state.beforePanelSentinel.current) == null ? void 0 : D8.contains) != null && z4.call(D8, n17.target) || (U6 = (G6 = r20.state.afterPanelSentinel.current) == null ? void 0 : G6.contains) != null && U6.call(G6, n17.target) || (N2 = (L8 = r20.state.afterButtonSentinel.current) == null ? void 0 : L8.contains) != null && N2.call(L8, n17.target) || r20.actions.close()));
  }, true);
  let x13 = _10 === I7.Open;
  k4(x13, J8.resolveContainers, (n17, D8) => {
    r20.actions.close(), A2(D8, h5.Loose) || (n17.preventDefault(), f24 == null || f24.focus());
  });
  let X4 = (0, import_react110.useMemo)(() => ({ open: _10 === I7.Open, close: r20.actions.refocusableClose }), [_10, r20]), te4 = S3(r20, (0, import_react110.useCallback)((n17) => u(n17.popoverState, { [I7.Open]: i11.Open, [I7.Closed]: i11.Closed }), [])), q5 = { ref: t13 }, C13 = L();
  return import_react110.default.createElement(P6, { node: $7 }, import_react110.default.createElement(Ae, null, import_react110.default.createElement(fe5.Provider, { value: null }, import_react110.default.createElement(a25.Provider, { value: r20 }, import_react110.default.createElement(C5, { value: r20.actions.refocusableClose }, import_react110.default.createElement(c8, { value: te4 }, import_react110.default.createElement(j11, null, C13({ ourProps: q5, theirProps: d14, slot: X4, defaultTag: ct2, name: "Popover" }))))))));
}
var ft2 = "button";
function Pt2(b11, M9) {
  let F13 = (0, import_react51.useId)(), { id: B4 = `headlessui-popover-button-${F13}`, disabled: d14 = false, autoFocus: r20 = false, ...g8 } = b11, t13 = u23("Popover.Button"), [_10, f24, o21, O8, E17, P7, A6] = S3(t13, (0, import_react110.useCallback)((e8) => [e8.popoverState, t13.selectors.isPortalled(e8), e8.button, e8.buttonId, e8.panel, e8.panelId, e8.afterButtonSentinel], [])), a27 = (0, import_react110.useRef)(null), i18 = `headlessui-focus-sentinel-${(0, import_react51.useId)()}`, u24 = Ge2(), l16 = u24 == null ? void 0 : u24.closeOthers, m12 = ut2() !== null;
  (0, import_react110.useEffect)(() => {
    if (!m12) return t13.actions.setButtonId(B4), () => t13.actions.setButtonId(null);
  }, [m12, B4, t13]);
  let [j11] = (0, import_react110.useState)(() => Symbol()), $7 = y(a27, M9, Fe2(), o5((e8) => {
    if (!m12) {
      if (e8) t13.state.buttons.current.push(j11);
      else {
        let p12 = t13.state.buttons.current.indexOf(j11);
        p12 !== -1 && t13.state.buttons.current.splice(p12, 1);
      }
      t13.state.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e8 && t13.actions.setButton(e8);
    }
  })), J8 = y(a27, M9), x13 = n11(a27), X4 = o5((e8) => {
    var p12, h11, S10;
    if (m12) {
      if (t13.state.popoverState === I7.Closed) return;
      switch (e8.key) {
        case o10.Space:
        case o10.Enter:
          e8.preventDefault(), (h11 = (p12 = e8.target).click) == null || h11.call(p12), t13.actions.close(), (S10 = t13.state.button) == null || S10.focus();
          break;
      }
    } else switch (e8.key) {
      case o10.Space:
      case o10.Enter:
        e8.preventDefault(), e8.stopPropagation(), t13.state.popoverState === I7.Closed ? (l16 == null || l16(t13.state.buttonId), t13.actions.open()) : t13.actions.close();
        break;
      case o10.Escape:
        if (t13.state.popoverState !== I7.Open) return l16 == null ? void 0 : l16(t13.state.buttonId);
        if (!a27.current || x13 != null && x13.activeElement && !a27.current.contains(x13.activeElement)) return;
        e8.preventDefault(), e8.stopPropagation(), t13.actions.close();
        break;
    }
  }), te4 = o5((e8) => {
    m12 || e8.key === o10.Space && e8.preventDefault();
  }), q5 = o5((e8) => {
    var p12, h11;
    s5(e8.currentTarget) || d14 || (m12 ? (t13.actions.close(), (p12 = t13.state.button) == null || p12.focus()) : (e8.preventDefault(), e8.stopPropagation(), t13.state.popoverState === I7.Closed ? (l16 == null || l16(t13.state.buttonId), t13.actions.open()) : t13.actions.close(), (h11 = t13.state.button) == null || h11.focus()));
  }), C13 = o5((e8) => {
    e8.preventDefault(), e8.stopPropagation();
  }), { isFocusVisible: k9, focusProps: n17 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r20 }), { isHovered: D8, hoverProps: z4 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: d14 }), { pressed: G6, pressProps: U6 } = w({ disabled: d14 }), L8 = _10 === I7.Open, N2 = (0, import_react110.useMemo)(() => ({ open: L8, active: G6 || L8, disabled: d14, hover: D8, focus: k9, autofocus: r20 }), [L8, D8, k9, G6, d14, r20]), ae4 = e5(b11, o21), Pe3 = m12 ? _({ ref: J8, type: ae4, onKeyDown: X4, onClick: q5, disabled: d14 || void 0, autoFocus: r20 }, n17, z4, U6) : _({ ref: $7, id: O8, type: ae4, "aria-expanded": _10 === I7.Open, "aria-controls": E17 ? P7 : void 0, disabled: d14 || void 0, autoFocus: r20, onKeyDown: X4, onKeyUp: te4, onClick: q5, onMouseDown: C13 }, n17, z4, U6), se2 = u20(), s17 = o5(() => {
    if (!n4(t13.state.panel)) return;
    let e8 = t13.state.panel;
    function p12() {
      u(se2.current, { [a20.Forwards]: () => g2(e8, T5.First), [a20.Backwards]: () => g2(e8, T5.Last) }) === y6.Error && g2(b3().filter((S10) => S10.dataset.headlessuiFocusGuard !== "true"), u(se2.current, { [a20.Forwards]: T5.Next, [a20.Backwards]: T5.Previous }), { relativeTo: t13.state.button });
    }
    p12();
  }), R5 = L();
  return import_react110.default.createElement(import_react110.default.Fragment, null, R5({ ourProps: Pe3, theirProps: g8, slot: N2, defaultTag: ft2, name: "Popover.Button" }), L8 && !m12 && f24 && import_react110.default.createElement(f4, { id: i18, ref: A6, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: s17 }));
}
var vt3 = "div";
var mt2 = O.RenderStrategy | O.Static;
function ke(b11, M9) {
  let F13 = (0, import_react51.useId)(), { id: B4 = `headlessui-popover-backdrop-${F13}`, transition: d14 = false, ...r20 } = b11, g8 = u23("Popover.Backdrop"), t13 = S3(g8, (0, import_react110.useCallback)((l16) => l16.popoverState, [])), [_10, f24] = (0, import_react110.useState)(null), o21 = y(M9, f24), O8 = u16(), [E17, P7] = x4(d14, _10, O8 !== null ? (O8 & i11.Open) === i11.Open : t13 === I7.Open), A6 = o5((l16) => {
    if (s5(l16.currentTarget)) return l16.preventDefault();
    g8.actions.close();
  }), a27 = (0, import_react110.useMemo)(() => ({ open: t13 === I7.Open }), [t13]), i18 = { ref: o21, id: B4, "aria-hidden": true, onClick: A6, ...R2(P7) };
  return L()({ ourProps: i18, theirProps: r20, slot: a27, defaultTag: vt3, features: mt2, visible: E17, name: "Popover.Backdrop" });
}
var Tt2 = "div";
var Et3 = O.RenderStrategy | O.Static;
function bt3(b11, M9) {
  let F13 = (0, import_react51.useId)(), { id: B4 = `headlessui-popover-panel-${F13}`, focus: d14 = false, anchor: r20, portal: g8 = false, modal: t13 = false, transition: _10 = false, ...f24 } = b11, o21 = u23("Popover.Panel"), O8 = S3(o21, o21.selectors.isPortalled), [E17, P7, A6, a27, i18] = S3(o21, (0, import_react110.useCallback)((s17) => [s17.popoverState, s17.button, s17.__demoMode, s17.beforePanelSentinel, s17.afterPanelSentinel], [])), u24 = `headlessui-focus-sentinel-before-${F13}`, l16 = `headlessui-focus-sentinel-after-${F13}`, v6 = (0, import_react110.useRef)(null), m12 = ye(r20), [j11, $7] = Re(m12), J8 = Te();
  m12 && (g8 = true);
  let [x13, X4] = (0, import_react110.useState)(null), te4 = y(v6, M9, m12 ? j11 : null, o21.actions.setPanel, X4), q5 = n11(P7), C13 = n11(v6);
  n(() => (o21.actions.setPanelId(B4), () => o21.actions.setPanelId(null)), [B4, o21]);
  let k9 = u16(), [n17, D8] = x4(_10, x13, k9 !== null ? (k9 & i11.Open) === i11.Open : E17 === I7.Open);
  p5(n17, P7, o21.actions.close), f13(A6 ? false : t13 && n17, C13);
  let G6 = o5((s17) => {
    var R5;
    switch (s17.key) {
      case o10.Escape:
        if (o21.state.popoverState !== I7.Open || !v6.current || C13 != null && C13.activeElement && !v6.current.contains(C13.activeElement)) return;
        s17.preventDefault(), s17.stopPropagation(), o21.actions.close(), (R5 = o21.state.button) == null || R5.focus();
        break;
    }
  });
  (0, import_react110.useEffect)(() => {
    var s17;
    b11.static || E17 === I7.Closed && ((s17 = b11.unmount) == null || s17) && o21.actions.setPanel(null);
  }, [E17, b11.unmount, b11.static, o21]), (0, import_react110.useEffect)(() => {
    if (A6 || !d14 || E17 !== I7.Open || !v6.current) return;
    let s17 = C13 == null ? void 0 : C13.activeElement;
    v6.current.contains(s17) || g2(v6.current, T5.First);
  }, [A6, d14, v6.current, E17]);
  let U6 = (0, import_react110.useMemo)(() => ({ open: E17 === I7.Open, close: o21.actions.refocusableClose }), [E17, o21]), L8 = _(m12 ? J8() : {}, { ref: te4, id: B4, onKeyDown: G6, onBlur: d14 && E17 === I7.Open ? (s17) => {
    var e8, p12, h11, S10, w12;
    let R5 = s17.relatedTarget;
    R5 && v6.current && ((e8 = v6.current) != null && e8.contains(R5) || (o21.actions.close(), ((h11 = (p12 = a27.current) == null ? void 0 : p12.contains) != null && h11.call(p12, R5) || (w12 = (S10 = i18.current) == null ? void 0 : S10.contains) != null && w12.call(S10, R5)) && R5.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1, style: { ...f24.style, ...$7, "--button-width": d3(P7, true).width }, ...R2(D8) }), N2 = u20(), ae4 = o5(() => {
    let s17 = v6.current;
    if (!s17) return;
    function R5() {
      u(N2.current, { [a20.Forwards]: () => {
        var p12;
        g2(s17, T5.First) === y6.Error && ((p12 = o21.state.afterPanelSentinel.current) == null || p12.focus());
      }, [a20.Backwards]: () => {
        var e8;
        (e8 = o21.state.button) == null || e8.focus({ preventScroll: true });
      } });
    }
    R5();
  }), Pe3 = o5(() => {
    let s17 = v6.current;
    if (!s17) return;
    function R5() {
      u(N2.current, { [a20.Forwards]: () => {
        if (!o21.state.button) return;
        let e8 = b3(), p12 = e8.indexOf(o21.state.button), h11 = e8.slice(0, p12 + 1), w12 = [...e8.slice(p12 + 1), ...h11];
        for (let ve3 of w12.slice()) if (ve3.dataset.headlessuiFocusGuard === "true" || x13 != null && x13.contains(ve3)) {
          let Re5 = w12.indexOf(ve3);
          Re5 !== -1 && w12.splice(Re5, 1);
        }
        g2(w12, T5.First, { sorted: false });
      }, [a20.Backwards]: () => {
        var p12;
        g2(s17, T5.Previous) === y6.Error && ((p12 = o21.state.button) == null || p12.focus());
      } });
    }
    R5();
  }), se2 = L();
  return import_react110.default.createElement(s9, null, import_react110.default.createElement(fe5.Provider, { value: B4 }, import_react110.default.createElement(C5, { value: o21.actions.refocusableClose }, import_react110.default.createElement(ne, { enabled: g8 ? b11.static || n17 : false, ownerDocument: q5 }, n17 && O8 && import_react110.default.createElement(f4, { id: u24, ref: a27, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: ae4 }), se2({ ourProps: L8, theirProps: f24, slot: U6, defaultTag: Tt2, features: Et3, visible: n17, name: "Popover.Panel" }), n17 && O8 && import_react110.default.createElement(f4, { id: l16, ref: i18, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: Pe3 })))));
}
var yt2 = "div";
function gt3(b11, M9) {
  let F13 = (0, import_react110.useRef)(null), B4 = y(F13, M9), [d14, r20] = (0, import_react110.useState)([]), g8 = o5((a27) => {
    r20((i18) => {
      let u24 = i18.indexOf(a27);
      if (u24 !== -1) {
        let l16 = i18.slice();
        return l16.splice(u24, 1), l16;
      }
      return i18;
    });
  }), t13 = o5((a27) => (r20((i18) => [...i18, a27]), () => g8(a27))), _10 = o5(() => {
    var u24;
    let a27 = o2(F13);
    if (!a27) return false;
    let i18 = a27.activeElement;
    return (u24 = F13.current) != null && u24.contains(i18) ? true : d14.some((l16) => {
      var v6, m12;
      return ((v6 = a27.getElementById(l16.buttonId.current)) == null ? void 0 : v6.contains(i18)) || ((m12 = a27.getElementById(l16.panelId.current)) == null ? void 0 : m12.contains(i18));
    });
  }), f24 = o5((a27) => {
    for (let i18 of d14) i18.buttonId.current !== a27 && i18.close();
  }), o21 = (0, import_react110.useMemo)(() => ({ registerPopover: t13, unregisterPopover: g8, isFocusWithinPopoverGroup: _10, closeOthers: f24 }), [t13, g8, _10, f24]), O8 = (0, import_react110.useMemo)(() => ({}), []), E17 = b11, P7 = { ref: B4 }, A6 = L();
  return import_react110.default.createElement(P6, null, import_react110.default.createElement(ge4.Provider, { value: o21 }, A6({ ourProps: P7, theirProps: E17, slot: O8, defaultTag: yt2, name: "Popover.Group" })));
}
var Rt2 = K(dt2);
var Ft2 = K(Pt2);
var Bt2 = K(ke);
var _t2 = K(ke);
var At2 = K(bt3);
var Ct2 = K(gt3);
var io = Object.assign(Rt2, { Button: Ft2, Backdrop: _t2, Overlay: Bt2, Panel: At2, Group: Ct2 });

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react111 = __toESM(require_react(), 1);
var Ie3 = ((e8) => (e8[e8.RegisterOption = 0] = "RegisterOption", e8[e8.UnregisterOption = 1] = "UnregisterOption", e8))(Ie3 || {});
var Fe5 = { [0](o21, t13) {
  let e8 = [...o21.options, { id: t13.id, element: t13.element, propsRef: t13.propsRef }];
  return { ...o21, options: P5(e8, (i18) => i18.element.current) };
}, [1](o21, t13) {
  let e8 = o21.options.slice(), i18 = o21.options.findIndex((v6) => v6.id === t13.id);
  return i18 === -1 ? o21 : (e8.splice(i18, 1), { ...o21, options: e8 });
} };
var J6 = (0, import_react111.createContext)(null);
J6.displayName = "RadioGroupDataContext";
function X3(o21) {
  let t13 = (0, import_react111.useContext)(J6);
  if (t13 === null) {
    let e8 = new Error(`<${o21} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, X3), e8;
  }
  return t13;
}
var z2 = (0, import_react111.createContext)(null);
z2.displayName = "RadioGroupActionsContext";
function q4(o21) {
  let t13 = (0, import_react111.useContext)(z2);
  if (t13 === null) {
    let e8 = new Error(`<${o21} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, q4), e8;
  }
  return t13;
}
function Ue2(o21, t13) {
  return u(t13.type, Fe5, o21, t13);
}
var Me2 = "div";
function Se3(o21, t13) {
  let e8 = (0, import_react51.useId)(), i18 = a3(), { id: v6 = `headlessui-radiogroup-${e8}`, value: m12, form: D8, name: n17, onChange: f24, by: u24, disabled: a27 = i18 || false, defaultValue: M9, tabIndex: T15 = 0, ...S10 } = o21, R5 = u9(u24), [A6, y11] = (0, import_react111.useReducer)(Ue2, { options: [] }), p12 = A6.options, [C13, _10] = Q(), [h11, L8] = w3(), k9 = (0, import_react111.useRef)(null), c18 = y(k9, t13), b11 = l2(M9), [l16, I8] = T(m12, f24, b11), g8 = (0, import_react111.useMemo)(() => p12.find((r20) => !r20.propsRef.current.disabled), [p12]), O8 = (0, import_react111.useMemo)(() => p12.some((r20) => R5(r20.propsRef.current.value, l16)), [p12, l16]), s17 = o5((r20) => {
    var d14;
    if (a27 || R5(r20, l16)) return false;
    let F13 = (d14 = p12.find((w12) => R5(w12.propsRef.current.value, r20))) == null ? void 0 : d14.propsRef.current;
    return F13 != null && F13.disabled ? false : (I8 == null || I8(r20), true);
  }), ue5 = o5((r20) => {
    let F13 = k9.current;
    if (!F13) return;
    let d14 = o2(F13), w12 = p12.filter((P7) => P7.propsRef.current.disabled === false).map((P7) => P7.element.current);
    switch (r20.key) {
      case o10.Enter:
        p2(r20.currentTarget);
        break;
      case o10.ArrowLeft:
      case o10.ArrowUp:
        if (r20.preventDefault(), r20.stopPropagation(), g2(w12, T5.Previous | T5.WrapAround) === y6.Success) {
          let E17 = p12.find((W2) => W2.element.current === (d14 == null ? void 0 : d14.activeElement));
          E17 && s17(E17.propsRef.current.value);
        }
        break;
      case o10.ArrowRight:
      case o10.ArrowDown:
        if (r20.preventDefault(), r20.stopPropagation(), g2(w12, T5.Next | T5.WrapAround) === y6.Success) {
          let E17 = p12.find((W2) => W2.element.current === (d14 == null ? void 0 : d14.activeElement));
          E17 && s17(E17.propsRef.current.value);
        }
        break;
      case o10.Space:
        {
          r20.preventDefault(), r20.stopPropagation();
          let P7 = p12.find((E17) => E17.element.current === (d14 == null ? void 0 : d14.activeElement));
          P7 && s17(P7.propsRef.current.value);
        }
        break;
    }
  }), Q4 = o5((r20) => (y11({ type: 0, ...r20 }), () => y11({ type: 1, id: r20.id }))), ce3 = (0, import_react111.useMemo)(() => ({ value: l16, firstOption: g8, containsCheckedOption: O8, disabled: a27, compare: R5, tabIndex: T15, ...A6 }), [l16, g8, O8, a27, R5, T15, A6]), fe6 = (0, import_react111.useMemo)(() => ({ registerOption: Q4, change: s17 }), [Q4, s17]), Te6 = { ref: c18, id: v6, role: "radiogroup", "aria-labelledby": C13, "aria-describedby": h11, onKeyDown: ue5 }, Re5 = (0, import_react111.useMemo)(() => ({ value: l16 }), [l16]), me5 = (0, import_react111.useCallback)(() => {
    if (b11 !== void 0) return s17(b11);
  }, [s17, b11]), ye4 = L();
  return import_react111.default.createElement(L8, { name: "RadioGroup.Description" }, import_react111.default.createElement(_10, { name: "RadioGroup.Label" }, import_react111.default.createElement(z2.Provider, { value: fe6 }, import_react111.default.createElement(J6.Provider, { value: ce3 }, n17 != null && import_react111.default.createElement(j2, { disabled: a27, data: { [n17]: l16 || "on" }, overrides: { type: "radio", checked: l16 != null }, form: D8, onReset: me5 }), ye4({ ourProps: Te6, theirProps: S10, slot: Re5, defaultTag: Me2, name: "RadioGroup" })))));
}
var He3 = "div";
function we2(o21, t13) {
  var g8;
  let e8 = X3("RadioGroup.Option"), i18 = q4("RadioGroup.Option"), v6 = (0, import_react51.useId)(), { id: m12 = `headlessui-radiogroup-option-${v6}`, value: D8, disabled: n17 = e8.disabled || false, autoFocus: f24 = false, ...u24 } = o21, a27 = (0, import_react111.useRef)(null), M9 = y(a27, t13), [T15, S10] = Q(), [R5, A6] = w3(), y11 = s3({ value: D8, disabled: n17 });
  n(() => i18.registerOption({ id: m12, element: a27, propsRef: y11 }), [m12, i18, a27, y11]);
  let p12 = o5((O8) => {
    var s17;
    if (s5(O8.currentTarget)) return O8.preventDefault();
    i18.change(D8) && ((s17 = a27.current) == null || s17.focus());
  }), C13 = ((g8 = e8.firstOption) == null ? void 0 : g8.id) === m12, { isFocusVisible: _10, focusProps: h11 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: f24 }), { isHovered: L8, hoverProps: k9 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: n17 }), c18 = e8.compare(e8.value, D8), b11 = _({ ref: M9, id: m12, role: "radio", "aria-checked": c18 ? "true" : "false", "aria-labelledby": T15, "aria-describedby": R5, "aria-disabled": n17 ? true : void 0, tabIndex: (() => n17 ? -1 : c18 || !e8.containsCheckedOption && C13 ? e8.tabIndex : -1)(), onClick: n17 ? void 0 : p12, autoFocus: f24 }, h11, k9), l16 = (0, import_react111.useMemo)(() => ({ checked: c18, disabled: n17, active: _10, hover: L8, focus: _10, autofocus: f24 }), [c18, n17, L8, _10, f24]), I8 = L();
  return import_react111.default.createElement(A6, { name: "RadioGroup.Description" }, import_react111.default.createElement(S10, { name: "RadioGroup.Label" }, I8({ ourProps: b11, theirProps: u24, slot: l16, defaultTag: He3, name: "RadioGroup.Option" })));
}
var Ne2 = "span";
function We2(o21, t13) {
  var g8;
  let e8 = X3("Radio"), i18 = q4("Radio"), v6 = (0, import_react51.useId)(), m12 = u4(), D8 = a3(), { id: n17 = m12 || `headlessui-radio-${v6}`, value: f24, disabled: u24 = e8.disabled || D8 || false, autoFocus: a27 = false, ...M9 } = o21, T15 = (0, import_react111.useRef)(null), S10 = y(T15, t13), R5 = N(), A6 = U2(), y11 = s3({ value: f24, disabled: u24 });
  n(() => i18.registerOption({ id: n17, element: T15, propsRef: y11 }), [n17, i18, T15, y11]);
  let p12 = o5((O8) => {
    var s17;
    if (s5(O8.currentTarget)) return O8.preventDefault();
    i18.change(f24) && ((s17 = T15.current) == null || s17.focus());
  }), { isFocusVisible: C13, focusProps: _10 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: a27 }), { isHovered: h11, hoverProps: L8 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: u24 }), k9 = ((g8 = e8.firstOption) == null ? void 0 : g8.id) === n17, c18 = e8.compare(e8.value, f24), b11 = _({ ref: S10, id: n17, role: "radio", "aria-checked": c18 ? "true" : "false", "aria-labelledby": R5, "aria-describedby": A6, "aria-disabled": u24 ? true : void 0, tabIndex: (() => u24 ? -1 : c18 || !e8.containsCheckedOption && k9 ? e8.tabIndex : -1)(), autoFocus: a27, onClick: u24 ? void 0 : p12 }, _10, L8), l16 = (0, import_react111.useMemo)(() => ({ checked: c18, disabled: u24, hover: h11, focus: C13, autofocus: a27 }), [c18, u24, h11, C13, a27]);
  return L()({ ourProps: b11, theirProps: M9, slot: l16, defaultTag: Ne2, name: "Radio" });
}
var Be3 = K(Se3);
var Ve3 = K(we2);
var Ke2 = K(We2);
var $e2 = V;
var je2 = H4;
var mt3 = Object.assign(Be3, { Option: Ve3, Radio: Ke2, Label: $e2, Description: je2 });

// node_modules/@headlessui/react/dist/components/select/select.js
var import_react112 = __toESM(require_react(), 1);
var H10 = "select";
function B3(a27, i18) {
  let p12 = (0, import_react51.useId)(), d14 = u4(), n17 = a3(), { id: c18 = d14 || `headlessui-select-${p12}`, disabled: e8 = n17 || false, invalid: t13 = false, autoFocus: o21 = false, ...f24 } = a27, m12 = N(), u24 = U2(), { isFocusVisible: r20, focusProps: T15 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o21 }), { isHovered: l16, hoverProps: b11 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), { pressed: s17, pressProps: y11 } = w({ disabled: e8 }), P7 = _({ ref: i18, id: c18, "aria-labelledby": m12, "aria-describedby": u24, "aria-invalid": t13 ? "true" : void 0, disabled: e8 || void 0, autoFocus: o21 }, T15, b11, y11), S10 = (0, import_react112.useMemo)(() => ({ disabled: e8, invalid: t13, hover: l16, focus: r20, active: s17, autofocus: o21 }), [e8, t13, l16, r20, s17, o21]);
  return L()({ ourProps: P7, theirProps: f24, slot: S10, defaultTag: H10, name: "Select" });
}
var j10 = K(B3);

// node_modules/@headlessui/react/dist/components/switch/switch.js
var import_react113 = __toESM(require_react(), 1);
var E15 = (0, import_react113.createContext)(null);
E15.displayName = "GroupContext";
var ge6 = import_react113.Fragment;
function ve(n17) {
  var u24;
  let [o21, s17] = (0, import_react113.useState)(null), [h11, b11] = Q(), [T15, t13] = w3(), p12 = (0, import_react113.useMemo)(() => ({ switch: o21, setSwitch: s17 }), [o21, s17]), y11 = {}, S10 = n17, c18 = L();
  return import_react113.default.createElement(t13, { name: "Switch.Description", value: T15 }, import_react113.default.createElement(b11, { name: "Switch.Label", value: h11, props: { htmlFor: (u24 = p12.switch) == null ? void 0 : u24.id, onClick(d14) {
    o21 && (m4(d14.currentTarget) && d14.preventDefault(), o21.click(), o21.focus({ preventScroll: true }));
  } } }, import_react113.default.createElement(E15.Provider, { value: p12 }, c18({ ourProps: y11, theirProps: S10, slot: {}, defaultTag: ge6, name: "Switch.Group" }))));
}
var xe2 = "button";
function Ce2(n17, o21) {
  var L8;
  let s17 = (0, import_react51.useId)(), h11 = u4(), b11 = a3(), { id: T15 = h11 || `headlessui-switch-${s17}`, disabled: t13 = b11 || false, checked: p12, defaultChecked: y11, onChange: S10, name: c18, value: u24, form: d14, autoFocus: m12 = false, ...F13 } = n17, _10 = (0, import_react113.useContext)(E15), [H12, k9] = (0, import_react113.useState)(null), M9 = (0, import_react113.useRef)(null), U6 = y(M9, o21, _10 === null ? null : _10.setSwitch, k9), l16 = l2(y11), [a27, r20] = T(p12, S10, l16 != null ? l16 : false), I8 = p(), [P7, D8] = (0, import_react113.useState)(false), g8 = o5(() => {
    D8(true), r20 == null || r20(!a27), I8.nextFrame(() => {
      D8(false);
    });
  }), B4 = o5((e8) => {
    if (s5(e8.currentTarget)) return e8.preventDefault();
    e8.preventDefault(), g8();
  }), K6 = o5((e8) => {
    e8.key === o10.Space ? (e8.preventDefault(), g8()) : e8.key === o10.Enter && p2(e8.currentTarget);
  }), O8 = o5((e8) => e8.preventDefault()), W2 = N(), N2 = U2(), { isFocusVisible: v6, focusProps: J8 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: m12 }), { isHovered: x13, hoverProps: V6 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: t13 }), { pressed: C13, pressProps: X4 } = w({ disabled: t13 }), j11 = (0, import_react113.useMemo)(() => ({ checked: a27, disabled: t13, hover: x13, focus: v6, active: C13, autofocus: m12, changing: P7 }), [a27, x13, v6, C13, t13, P7, m12]), $7 = _({ id: T15, ref: U6, role: "switch", type: e5(n17, H12), tabIndex: n17.tabIndex === -1 ? 0 : (L8 = n17.tabIndex) != null ? L8 : 0, "aria-checked": a27, "aria-labelledby": W2, "aria-describedby": N2, disabled: t13 || void 0, autoFocus: m12, onClick: B4, onKeyUp: K6, onKeyPress: O8 }, J8, V6, X4), q5 = (0, import_react113.useCallback)(() => {
    if (l16 !== void 0) return r20 == null ? void 0 : r20(l16);
  }, [r20, l16]), z4 = L();
  return import_react113.default.createElement(import_react113.default.Fragment, null, c18 != null && import_react113.default.createElement(j2, { disabled: t13, data: { [c18]: u24 || "on" }, overrides: { type: "checkbox", checked: a27 }, form: d14, onReset: q5 }), z4({ ourProps: $7, theirProps: F13, slot: j11, defaultTag: xe2, name: "Switch" }));
}
var Le3 = K(Ce2);
var Re4 = ve;
var Ge3 = V;
var Ae5 = H4;
var Ze = Object.assign(Le3, { Group: Re4, Label: Ge3, Description: Ae5 });

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var import_react115 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
var import_react114 = __toESM(require_react(), 1);
function b10({ onFocus: n17 }) {
  let [r20, o21] = (0, import_react114.useState)(true), u24 = f19();
  return r20 ? import_react114.default.createElement(f4, { as: "button", type: "button", features: s4.Focusable, onFocus: (a27) => {
    a27.preventDefault();
    let e8, i18 = 50;
    function t13() {
      if (i18-- <= 0) {
        e8 && cancelAnimationFrame(e8);
        return;
      }
      if (n17()) {
        if (cancelAnimationFrame(e8), !u24.current) return;
        o21(false);
        return;
      }
      e8 = requestAnimationFrame(t13);
    }
    e8 = requestAnimationFrame(t13);
  } }) : null;
}

// node_modules/@headlessui/react/dist/utils/stable-collection.js
var l15 = __toESM(require_react(), 1);
var s16 = l15.createContext(null);
function a26() {
  return { groups: /* @__PURE__ */ new Map(), get(o21, e8) {
    var i18;
    let t13 = this.groups.get(o21);
    t13 || (t13 = /* @__PURE__ */ new Map(), this.groups.set(o21, t13));
    let n17 = (i18 = t13.get(e8)) != null ? i18 : 0;
    t13.set(e8, n17 + 1);
    let r20 = Array.from(t13.keys()).indexOf(e8);
    function u24() {
      let c18 = t13.get(e8);
      c18 > 1 ? t13.set(e8, c18 - 1) : t13.delete(e8);
    }
    return [r20, u24];
  } };
}
function f23({ children: o21 }) {
  let e8 = l15.useRef(a26());
  return l15.createElement(s16.Provider, { value: e8 }, o21);
}
function C11(o21) {
  let e8 = l15.useContext(s16);
  if (!e8) throw new Error("You must wrap your component in a <StableCollection>");
  let t13 = l15.useId(), [n17, r20] = e8.current.get(o21, t13);
  return l15.useEffect(() => r20, []), n17;
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var Le4 = ((t13) => (t13[t13.Forwards = 0] = "Forwards", t13[t13.Backwards = 1] = "Backwards", t13))(Le4 || {});
var _e2 = ((l16) => (l16[l16.Less = -1] = "Less", l16[l16.Equal = 0] = "Equal", l16[l16.Greater = 1] = "Greater", l16))(_e2 || {});
var De3 = ((n17) => (n17[n17.SetSelectedIndex = 0] = "SetSelectedIndex", n17[n17.RegisterTab = 1] = "RegisterTab", n17[n17.UnregisterTab = 2] = "UnregisterTab", n17[n17.RegisterPanel = 3] = "RegisterPanel", n17[n17.UnregisterPanel = 4] = "UnregisterPanel", n17))(De3 || {});
var Se4 = { [0](e8, r20) {
  var d14;
  let t13 = P5(e8.tabs, (u24) => u24.current), l16 = P5(e8.panels, (u24) => u24.current), a27 = t13.filter((u24) => {
    var T15;
    return !((T15 = u24.current) != null && T15.hasAttribute("disabled"));
  }), n17 = { ...e8, tabs: t13, panels: l16 };
  if (r20.index < 0 || r20.index > t13.length - 1) {
    let u24 = u(Math.sign(r20.index - e8.selectedIndex), { [-1]: () => 1, [0]: () => u(Math.sign(r20.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    if (a27.length === 0) return n17;
    let T15 = u(u24, { [0]: () => t13.indexOf(a27[0]), [1]: () => t13.indexOf(a27[a27.length - 1]) });
    return { ...n17, selectedIndex: T15 === -1 ? e8.selectedIndex : T15 };
  }
  let s17 = t13.slice(0, r20.index), b11 = [...t13.slice(r20.index), ...s17].find((u24) => a27.includes(u24));
  if (!b11) return n17;
  let f24 = (d14 = t13.indexOf(b11)) != null ? d14 : e8.selectedIndex;
  return f24 === -1 && (f24 = e8.selectedIndex), { ...n17, selectedIndex: f24 };
}, [1](e8, r20) {
  if (e8.tabs.includes(r20.tab)) return e8;
  let t13 = e8.tabs[e8.selectedIndex], l16 = P5([...e8.tabs, r20.tab], (n17) => n17.current), a27 = e8.selectedIndex;
  return e8.info.current.isControlled || (a27 = l16.indexOf(t13), a27 === -1 && (a27 = e8.selectedIndex)), { ...e8, tabs: l16, selectedIndex: a27 };
}, [2](e8, r20) {
  return { ...e8, tabs: e8.tabs.filter((t13) => t13 !== r20.tab) };
}, [3](e8, r20) {
  return e8.panels.includes(r20.panel) ? e8 : { ...e8, panels: P5([...e8.panels, r20.panel], (t13) => t13.current) };
}, [4](e8, r20) {
  return { ...e8, panels: e8.panels.filter((t13) => t13 !== r20.panel) };
} };
var V5 = (0, import_react115.createContext)(null);
V5.displayName = "TabsDataContext";
function C12(e8) {
  let r20 = (0, import_react115.useContext)(V5);
  if (r20 === null) {
    let t13 = new Error(`<${e8} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t13, C12), t13;
  }
  return r20;
}
var Q3 = (0, import_react115.createContext)(null);
Q3.displayName = "TabsActionsContext";
function Y3(e8) {
  let r20 = (0, import_react115.useContext)(Q3);
  if (r20 === null) {
    let t13 = new Error(`<${e8} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t13, Y3), t13;
  }
  return r20;
}
function Fe6(e8, r20) {
  return u(r20.type, Se4, e8, r20);
}
var Ie4 = "div";
function he2(e8, r20) {
  let { defaultIndex: t13 = 0, vertical: l16 = false, manual: a27 = false, onChange: n17, selectedIndex: s17 = null, ...g8 } = e8;
  const b11 = l16 ? "vertical" : "horizontal", f24 = a27 ? "manual" : "auto";
  let d14 = s17 !== null, u24 = s3({ isControlled: d14 }), T15 = y(r20), [p12, c18] = (0, import_react115.useReducer)(Fe6, { info: u24, selectedIndex: s17 != null ? s17 : t13, tabs: [], panels: [] }), h11 = (0, import_react115.useMemo)(() => ({ selectedIndex: p12.selectedIndex }), [p12.selectedIndex]), m12 = s3(n17 || (() => {
  })), M9 = s3(p12.tabs), S10 = (0, import_react115.useMemo)(() => ({ orientation: b11, activation: f24, ...p12 }), [b11, f24, p12]), P7 = o5((i18) => (c18({ type: 1, tab: i18 }), () => c18({ type: 2, tab: i18 }))), A6 = o5((i18) => (c18({ type: 3, panel: i18 }), () => c18({ type: 4, panel: i18 }))), E17 = o5((i18) => {
    _10.current !== i18 && m12.current(i18), d14 || c18({ type: 0, index: i18 });
  }), _10 = s3(d14 ? e8.selectedIndex : p12.selectedIndex), D8 = (0, import_react115.useMemo)(() => ({ registerTab: P7, registerPanel: A6, change: E17 }), []);
  n(() => {
    c18({ type: 0, index: s17 != null ? s17 : t13 });
  }, [s17]), n(() => {
    if (_10.current === void 0 || p12.tabs.length <= 0) return;
    let i18 = P5(p12.tabs, (R5) => R5.current);
    i18.some((R5, X4) => p12.tabs[X4] !== R5) && E17(i18.indexOf(p12.tabs[_10.current]));
  });
  let K6 = { ref: T15 }, J8 = L();
  return import_react115.default.createElement(f23, null, import_react115.default.createElement(Q3.Provider, { value: D8 }, import_react115.default.createElement(V5.Provider, { value: S10 }, S10.tabs.length <= 0 && import_react115.default.createElement(b10, { onFocus: () => {
    var i18, G6;
    for (let R5 of M9.current) if (((i18 = R5.current) == null ? void 0 : i18.tabIndex) === 0) return (G6 = R5.current) == null || G6.focus(), true;
    return false;
  } }), J8({ ourProps: K6, theirProps: g8, slot: h11, defaultTag: Ie4, name: "Tabs" }))));
}
var ve2 = "div";
function Ce3(e8, r20) {
  let { orientation: t13, selectedIndex: l16 } = C12("Tab.List"), a27 = y(r20), n17 = (0, import_react115.useMemo)(() => ({ selectedIndex: l16 }), [l16]), s17 = e8, g8 = { ref: a27, role: "tablist", "aria-orientation": t13 };
  return L()({ ourProps: g8, theirProps: s17, slot: n17, defaultTag: ve2, name: "Tabs.List" });
}
var Me3 = "button";
function Ge4(e8, r20) {
  var ee5, te4;
  let t13 = (0, import_react51.useId)(), { id: l16 = `headlessui-tabs-tab-${t13}`, disabled: a27 = false, autoFocus: n17 = false, ...s17 } = e8, { orientation: g8, activation: b11, selectedIndex: f24, tabs: d14, panels: u24 } = C12("Tab"), T15 = Y3("Tab"), p12 = C12("Tab"), [c18, h11] = (0, import_react115.useState)(null), m12 = (0, import_react115.useRef)(null), M9 = y(m12, r20, h11);
  n(() => T15.registerTab(m12), [T15, m12]);
  let S10 = C11("tabs"), P7 = d14.indexOf(m12);
  P7 === -1 && (P7 = S10);
  let A6 = P7 === f24, E17 = o5((o21) => {
    var $7;
    let L8 = o21();
    if (L8 === y6.Success && b11 === "auto") {
      let q5 = ($7 = o2(m12)) == null ? void 0 : $7.activeElement, re5 = p12.tabs.findIndex((ce3) => ce3.current === q5);
      re5 !== -1 && T15.change(re5);
    }
    return L8;
  }), _10 = o5((o21) => {
    let L8 = d14.map((q5) => q5.current).filter(Boolean);
    if (o21.key === o10.Space || o21.key === o10.Enter) {
      o21.preventDefault(), o21.stopPropagation(), T15.change(P7);
      return;
    }
    switch (o21.key) {
      case o10.Home:
      case o10.PageUp:
        return o21.preventDefault(), o21.stopPropagation(), E17(() => g2(L8, T5.First));
      case o10.End:
      case o10.PageDown:
        return o21.preventDefault(), o21.stopPropagation(), E17(() => g2(L8, T5.Last));
    }
    if (E17(() => u(g8, { vertical() {
      return o21.key === o10.ArrowUp ? g2(L8, T5.Previous | T5.WrapAround) : o21.key === o10.ArrowDown ? g2(L8, T5.Next | T5.WrapAround) : y6.Error;
    }, horizontal() {
      return o21.key === o10.ArrowLeft ? g2(L8, T5.Previous | T5.WrapAround) : o21.key === o10.ArrowRight ? g2(L8, T5.Next | T5.WrapAround) : y6.Error;
    } })) === y6.Success) return o21.preventDefault();
  }), D8 = (0, import_react115.useRef)(false), K6 = o5(() => {
    var o21;
    D8.current || (D8.current = true, (o21 = m12.current) == null || o21.focus({ preventScroll: true }), T15.change(P7), t(() => {
      D8.current = false;
    }));
  }), J8 = o5((o21) => {
    o21.preventDefault();
  }), { isFocusVisible: i18, focusProps: G6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: n17 }), { isHovered: R5, hoverProps: X4 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: a27 }), { pressed: Z4, pressProps: ue5 } = w({ disabled: a27 }), Te6 = (0, import_react115.useMemo)(() => ({ selected: A6, hover: R5, active: Z4, focus: i18, autofocus: n17, disabled: a27 }), [A6, R5, i18, Z4, n17, a27]), de6 = _({ ref: M9, onKeyDown: _10, onMouseDown: J8, onClick: K6, id: l16, role: "tab", type: e5(e8, c18), "aria-controls": (te4 = (ee5 = u24[P7]) == null ? void 0 : ee5.current) == null ? void 0 : te4.id, "aria-selected": A6, tabIndex: A6 ? 0 : -1, disabled: a27 || void 0, autoFocus: n17 }, G6, X4, ue5);
  return L()({ ourProps: de6, theirProps: s17, slot: Te6, defaultTag: Me3, name: "Tabs.Tab" });
}
var Ue3 = "div";
function He4(e8, r20) {
  let { selectedIndex: t13 } = C12("Tab.Panels"), l16 = y(r20), a27 = (0, import_react115.useMemo)(() => ({ selectedIndex: t13 }), [t13]), n17 = e8, s17 = { ref: l16 };
  return L()({ ourProps: s17, theirProps: n17, slot: a27, defaultTag: Ue3, name: "Tabs.Panels" });
}
var we3 = "div";
var Oe2 = O.RenderStrategy | O.Static;
function Ne3(e8, r20) {
  var A6, E17, _10, D8;
  let t13 = (0, import_react51.useId)(), { id: l16 = `headlessui-tabs-panel-${t13}`, tabIndex: a27 = 0, ...n17 } = e8, { selectedIndex: s17, tabs: g8, panels: b11 } = C12("Tab.Panel"), f24 = Y3("Tab.Panel"), d14 = (0, import_react115.useRef)(null), u24 = y(d14, r20);
  n(() => f24.registerPanel(d14), [f24, d14]);
  let T15 = C11("panels"), p12 = b11.indexOf(d14);
  p12 === -1 && (p12 = T15);
  let c18 = p12 === s17, { isFocusVisible: h11, focusProps: m12 } = $f7dceffc5ad7768b$export$4e328f61c538687f(), M9 = (0, import_react115.useMemo)(() => ({ selected: c18, focus: h11 }), [c18, h11]), S10 = _({ ref: u24, id: l16, role: "tabpanel", "aria-labelledby": (E17 = (A6 = g8[p12]) == null ? void 0 : A6.current) == null ? void 0 : E17.id, tabIndex: c18 ? a27 : -1 }, m12), P7 = L();
  return !c18 && ((_10 = n17.unmount) == null || _10) && !((D8 = n17.static) != null && D8) ? import_react115.default.createElement(f4, { "aria-hidden": "true", ...S10 }) : P7({ ourProps: S10, theirProps: n17, slot: M9, defaultTag: we3, features: Oe2, visible: c18, name: "Tabs.Panel" });
}
var ke2 = K(Ge4);
var Be4 = K(he2);
var We3 = K(Ce3);
var je3 = K(He4);
var Ke3 = K(Ne3);
var Tt3 = Object.assign(ke2, { Group: Be4, List: We3, Panels: je3, Panel: Ke3 });

// node_modules/@headlessui/react/dist/components/textarea/textarea.js
var import_react116 = __toESM(require_react(), 1);
var L7 = "textarea";
function H11(s17, l16) {
  let i18 = (0, import_react51.useId)(), d14 = u4(), n17 = a3(), { id: p12 = d14 || `headlessui-textarea-${i18}`, disabled: e8 = n17 || false, autoFocus: r20 = false, invalid: a27 = false, ...T15 } = s17, f24 = N(), m12 = U2(), { isFocused: o21, focusProps: u24 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r20 }), { isHovered: t13, hoverProps: b11 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), y11 = _({ ref: l16, id: p12, "aria-labelledby": f24, "aria-describedby": m12, "aria-invalid": a27 ? "true" : void 0, disabled: e8 || void 0, autoFocus: r20 }, u24, b11), x13 = (0, import_react116.useMemo)(() => ({ disabled: e8, invalid: a27, hover: t13, focus: o21, autofocus: r20 }), [e8, a27, t13, o21, r20]);
  return L()({ ourProps: y11, theirProps: T15, slot: x13, defaultTag: L7, name: "Textarea" });
}
var J7 = K(H11);
export {
  H2 as Button,
  Fe as Checkbox,
  y2 as CloseButton,
  wt as Combobox,
  Lo as ComboboxButton,
  Vo as ComboboxInput,
  wo as ComboboxLabel,
  No as ComboboxOption,
  Bo as ComboboxOptions,
  x6 as DataInteractive,
  H4 as Description,
  Lt as Dialog,
  bt as DialogBackdrop,
  vt as DialogDescription,
  qe as DialogPanel,
  ze2 as DialogTitle,
  Ve2 as Disclosure,
  Re3 as DisclosureButton,
  Ie2 as DisclosurePanel,
  H9 as Field,
  G4 as Fieldset,
  Re2 as FocusTrap,
  G3 as FocusTrapFeatures,
  S7 as Input,
  V as Label,
  d13 as Legend,
  wo2 as Listbox,
  wt2 as ListboxButton,
  It as ListboxLabel,
  kt as ListboxOption,
  Bt as ListboxOptions,
  Ut as ListboxSelectedOption,
  lo as Menu,
  yt as MenuButton,
  Mt2 as MenuHeading,
  Et2 as MenuItem,
  Pt as MenuItems,
  gt2 as MenuSection,
  bt2 as MenuSeparator,
  io as Popover,
  _t2 as PopoverBackdrop,
  Ft2 as PopoverButton,
  Ct2 as PopoverGroup,
  Bt2 as PopoverOverlay,
  At2 as PopoverPanel,
  ne as Portal,
  Ke2 as Radio,
  mt3 as RadioGroup,
  je2 as RadioGroupDescription,
  $e2 as RadioGroupLabel,
  Ve3 as RadioGroupOption,
  j10 as Select,
  Ze as Switch,
  Ae5 as SwitchDescription,
  Re4 as SwitchGroup,
  Ge3 as SwitchLabel,
  Tt3 as Tab,
  Be4 as TabGroup,
  We3 as TabList,
  Ke3 as TabPanel,
  je3 as TabPanels,
  J7 as Textarea,
  ze as Transition,
  Fe3 as TransitionChild,
  u8 as useClose
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
//# sourceMappingURL=@headlessui_react.js.map
