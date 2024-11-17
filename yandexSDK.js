var YaGames;
(() => {
  "use strict";
  var e = {
      419: (e) => {
        function t(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        e.exports = function (e, n, r, o) {
          (n = n || "&"), (r = r || "=");
          var a = {};
          if ("string" != typeof e || 0 === e.length) return a;
          var s = /\+/g;
          e = e.split(n);
          var i = 1e3;
          o && "number" == typeof o.maxKeys && (i = o.maxKeys);
          var l = e.length;
          i > 0 && l > i && (l = i);
          for (var c = 0; c < l; ++c) {
            var d,
              u,
              p,
              h,
              m = e[c].replace(s, "%20"),
              g = m.indexOf(r);
            g >= 0
              ? ((d = m.substr(0, g)), (u = m.substr(g + 1)))
              : ((d = m), (u = ""));
            try {
              (p = decodeURIComponent(d)), (h = decodeURIComponent(u));
            } catch (e) {
              console.warn(e);
              continue;
            }
            t(a, p)
              ? Array.isArray(a[p])
                ? a[p].push(h)
                : (a[p] = [a[p], h])
              : (a[p] = h);
          }
          return a;
        };
      },
      509: (e) => {
        var t = function (e) {
          switch (typeof e) {
            case "string":
              return e;
            case "boolean":
              return e ? "true" : "false";
            case "number":
              return isFinite(e) ? e : "";
            default:
              return "";
          }
        };
        e.exports = function (e, n, r, o) {
          return (
            (n = n || "&"),
            (r = r || "="),
            null === e && (e = void 0),
            "object" == typeof e
              ? Object.keys(e)
                  .map(function (o) {
                    var a = encodeURIComponent(t(o)) + r;
                    return Array.isArray(e[o])
                      ? e[o]
                          .map(function (e) {
                            return a + encodeURIComponent(t(e));
                          })
                          .join(n)
                      : a + encodeURIComponent(t(e[o]));
                  })
                  .filter(Boolean)
                  .join(n)
              : o
              ? encodeURIComponent(t(o)) + r + encodeURIComponent(t(e))
              : ""
          );
        };
      },
      751: (e, t, n) => {
        (t.decode = t.parse = n(419)), (t.encode = t.stringify = n(509));
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.d = (e, t) => {
    for (var r in t)
      n.o(t, r) &&
        !n.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      if (void 0 !== n) {
        var e = n.u,
          t = n.e,
          r = {},
          o = {};
        (n.u = function (t) {
          return e(t) + (r.hasOwnProperty(t) ? "?" + r[t] : "");
        }),
          (n.e = function (r) {
            return t(r).catch(function (t) {
              var a = o.hasOwnProperty(r) ? o[r] : 3;
              if (a < 1) {
                var s = e(r);
                throw (
                  ((t.message =
                    "Loading chunk " +
                    r +
                    " failed after 3 retries.\n(" +
                    s +
                    ")"),
                  (t.request = s),
                  t)
                );
              }
              return new Promise(function (e) {
                setTimeout(function () {
                  (o[r] = a - 1), e(n.e(r));
                }, 0);
              });
            });
          });
      }
    })();
  var r = {};
  (() => {
    n.d(r, { default: () => za });
    var e = ((e) => (
      (e.ABORT_CONTROLLER = "abort-controller"),
      (e.GLOBAL_THIS = "global-this"),
      (e.INTERSECTION_OBSERVER = "intersection-observer"),
      (e.LEGACY = "legacy"),
      (e.SMOOTH_SCROLL = "smooth-scroll"),
      e
    ))(e || {});
    const t = (e) => {
      const {
          async: t,
          content: n,
          crossOrigin: r,
          id: o,
          nonce: a,
          onErrCb: s,
          onLoadCb: i,
          src: l,
        } = e,
        c = document.createElement("script");
      if (
        (i && (c.onload = i),
        s && (c.onerror = s),
        (c.type = "text/javascript"),
        t && (c.async = t),
        l && (c.src = l),
        a && c.setAttribute("nonce", a),
        r && c.setAttribute("crossOrigin", r),
        o &&
          (c.setAttribute("id", `${o}-script`),
          (c.dataset.rcid = `load-script-${o}`)),
        n)
      ) {
        const e = document.createTextNode(n);
        c.appendChild(e);
      }
      return c;
    };
    function o(e, t) {
      let n, r;
      return function (...o) {
        const a = o,
          s = this;
        return (
          n || ((n = !0), setTimeout(() => (n = !1), t), (r = e.apply(s, a))), r
        );
      };
    }
    var a = ((e) => (
      (e.ADV_STICKY = "AdvSticky"),
      (e.AFFILIATES = "Affiliates"),
      (e.APP_COMPONENT = "App: component"),
      (e.APP_PAGE = "App: page"),
      (e.AUTH = "Auth"),
      (e.BUNDLES_PLAY = "Bundles play"),
      (e.CATALOG = "Catalog"),
      (e.CLICKDAEMON = "Clickdaemon"),
      (e.CLID = "Clid"),
      (e.ERROR_BOUNDARY = "Error boundary"),
      (e.ERROR_COUNTER = "Error counter"),
      (e.GAME_IMAGE = "GameImage"),
      (e.GOOGLE_ADS = "Google ads"),
      (e.I18N = "i18n"),
      (e.INIT_BUNDLE_CATALOG = "Init bundle catalog"),
      (e.INIT_BUNDLE_GAME = "Init bundle game"),
      (e.METRIKA = "Metrika"),
      (e.MIDDLE_LAYER = "Middle layer"),
      (e.MONETIZATION = "Monetization"),
      (e.OFFLINE_MOD_HELPER = "Offline mod helper"),
      (e.PARTNER = "Embedding in partner"),
      (e.PLAY_TO_EARN = "Play2Earn"),
      (e.POLYFILL = "Polyfill"),
      (e.REACT_HYDRATION = "React Hydration"),
      (e.REDUX = "Redux"),
      (e.RUM_NATIVE_ERROR = "Rum: native error in catalog"),
      (e.RUM_UNSPECIFIED = "Rum: unspecified error without block"),
      (e.SCRIPT_LOADER = "Script Loader"),
      (e.SERVER_MIDDLEWARE = "Server middleware"),
      (e.SERVICE_WORKER_REGISTRATION = "ServiceWorker Registration"),
      (e.SERVICE_WORKER_UNREGISTRATION = "ServiceWorker Unregistration"),
      (e.SHORTCUTS_POPUP_MANAGER = "ShortcutsPopupManager"),
      (e.SIMILAR_GAMES = "Similar games"),
      (e.SSE = "Notify API"),
      (e.SSR_GAME = "SSR: Game"),
      (e.SSR_INDEX = "SSR: Index"),
      (e.TIME_GOAL_SENDER = "Time Goal Sender"),
      (e.TRUST = "Trust"),
      (e.TV = "tv"),
      (e.UTILS_LOCATION = "Utils: location"),
      (e.UTILS_UNIVERSAL = "Utils: universal"),
      (e.VIDEO_LOADER = "Video loader"),
      (e.XSOLLA = "Xsolla"),
      e
    ))(a || {});
    const s = () =>
      "undefined" != typeof window &&
      (!window.gdpr.applicable ||
        !window.gdpr.blockAnalyticsBeforeGdprAccepted ||
        (!!window.gdpr.gdprStatus &&
          window.gdpr.gdprStatus.analyticsAllowed &&
          window.gdpr.gdprStatus.performanceAllowed));
    const i = [
        {
          regexp:
            /Monetization error \[yandex]: yandex error - Container with id .* is hidden/,
          title:
            "Monetization error [yandex]: yandex error - Container is hidden",
        },
        {
          regexp:
            /Monetization error \[google]: yandex error - Container with id .* is hidden/,
          title:
            "Monetization error [google]: yandex error - Container is hidden",
        },
        {
          regexp:
            /Monetization error \[yandex]: yandex error - Container with id .* is not found \(init\)/,
          title:
            "Monetization error [yandex]: yandex error - Container is not found (init)",
        },
        {
          regexp:
            /Monetization error \[google]: yandex error - Container with id .* is not found \(init\)/,
          title:
            "Monetization error [google]: yandex error - Container is not found (init)",
        },
        {
          substr:
            "[SW] Trouble with registration; Failed to register a ServiceWorker",
          title:
            "[SW] Trouble with registration; Failed to register a ServiceWorker",
        },
        { substr: "window.cb", title: "Error related to window.cb" },
        {
          regexp: /Loading chunk.*?partner-code-bundles/,
          title: "Loading chunk partner-code-bundles errors",
        },
        {
          substr: "[pcode] Loading chunk",
          title: "Loading chunk partner-code-bundles errors",
        },
        {
          regexp: /Loading chunk \S+ failed after \d+ retries/,
          title: "Loading chunk loadable-components errors",
        },
        {
          substr:
            "loadable-components: failed to asynchronously load component",
          title: "Loading component loadable-components errors",
        },
        {
          regexp: new RegExp(/Current domain is not allowed on the page "\d+"/),
          title: "[adv] Current domain is not allowed on the page",
        },
      ],
      l = (e, t) => {
        var n;
        if (!e.startsWith("[SW]")) return t;
        const r = null == (n = e.split(": ").pop()) ? void 0 : n.trim();
        return r === e ? t : `${t}: ${r}`;
      },
      c = () => {
        var e;
        return Boolean(
          "undefined" != typeof window &&
            (null == (e = null == window ? void 0 : window.Ya) ? void 0 : e.Rum)
        );
      };
    var d = Object.defineProperty,
      u =
        (Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols),
      p = Object.prototype.hasOwnProperty,
      h = Object.prototype.propertyIsEnumerable,
      m = (e, t, n) =>
        t in e
          ? d(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n),
      g = (e, t) => {
        for (var n in t || (t = {})) p.call(t, n) && m(e, n, t[n]);
        if (u) for (var n of u(t)) h.call(t, n) && m(e, n, t[n]);
        return e;
      };
    let f = [],
      y = [];
    const v = 250;
    function w() {
      f.length > v && (f = f.slice(-250)), y.length > v && (y = y.slice(-250));
    }
    function b() {
      var e, t, n;
      try {
        throw new Error();
      } catch (r) {
        const o = /(\w+)@|at (.+) \(/g,
          a = r.stack || "";
        if (a.matchAll) {
          const r = Array.from(a.matchAll(o)) || [];
          return (
            (null == (e = r[2]) ? void 0 : e[2]) ||
            (null == (t = r[1]) ? void 0 : t[2]) ||
            (null == (n = r[0]) ? void 0 : n[2])
          );
        }
        return;
      }
    }
    const E = o(function () {
        if (
          !y.length ||
          !(
            c() &&
            Boolean(window.Ya.Rum.logEventFloat) &&
            Boolean(window.Ya.Rum.logEventInteger) &&
            Boolean(window.Ya.Rum.logEventString)
          ) ||
          !s()
        )
          return;
        y.splice(0, 10).forEach(({ event: e, value: t, options: n }) => {
          var r, o, a, s, i, l;
          return "number" == typeof t
            ? Number.isInteger(t)
              ? null == (o = null == (r = window.Ya) ? void 0 : r.Rum)
                ? void 0
                : o.logEventInteger(e, t, n)
              : null == (s = null == (a = window.Ya) ? void 0 : a.Rum)
              ? void 0
              : s.logEventFloat(e, t, n)
            : null == (l = null == (i = window.Ya) ? void 0 : i.Rum)
            ? void 0
            : l.logEventString(e, t, n);
        }),
          y.length && E();
      }, 1e3),
      P = o(function () {
        if (
          !f.length ||
          !(() => {
            var e, t;
            return Boolean(
              c() &&
                (null == (t = null == (e = window.Ya) ? void 0 : e.Rum)
                  ? void 0
                  : t.logError)
            );
          })() ||
          !s()
        )
          return;
        f.splice(0, 10).forEach(({ error: e, data: t }) => {
          var n, r;
          null == (r = null == (n = window.Ya) ? void 0 : n.Rum) ||
            r.logError(t, e);
        }),
          f.length && P();
      }, 1e3);
    const S = function (e, t) {
      var n, r, o, s;
      let c = e,
        {
          additional: d,
          level: m,
          message: y,
          prefix: v,
          source: E = "catalog",
          sourceMethod: S,
        } = c,
        A = ((e, t) => {
          var n = {};
          for (var r in e) p.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && u)
            for (var r of u(e))
              t.indexOf(r) < 0 && h.call(e, r) && (n[r] = e[r]);
          return n;
        })(c, [
          "additional",
          "level",
          "message",
          "prefix",
          "source",
          "sourceMethod",
        ]);
      const { message: O, additional: I = {} } = ((e) => {
        for (const t of i)
          if (
            (t.regexp && -1 !== e.search(t.regexp)) ||
            (t.substr && e.includes(t.substr))
          )
            return {
              message: `[grouped] ${l(e, t.title)}`,
              additional: { message: e },
            };
        return { message: e };
      })(y || (null == t ? void 0 : t.message) || String(e));
      (y = O),
        (m =
          m ||
          ("undefined" != typeof window &&
            (null == (r = null == (n = window.Ya) ? void 0 : n.Rum)
              ? void 0
              : r.ERROR_LEVEL.ERROR)) ||
          "error"),
        (t = t || e),
        (d = g(
          g(g({}, d), I),
          ("undefined" != typeof window &&
            (null == (o = window.appData) ? void 0 : o.clientFeatures)) ||
            {}
        )),
        v && (y = `${v} ${y}`);
      const T = g(
        {
          additional: d,
          block: null != (s = A.block) ? s : a.RUM_UNSPECIFIED,
          ignoreErrorMessage: !0,
          level: m,
          message: y,
          source: E,
          sourceMethod: S || b(),
        },
        A
      );
      _("logError", T), f.push({ data: T, error: t }), w(), P();
    };
    function _(e, t) {}
    function A(e, t) {
      return e.endsWith("/") || (e = `${e}/`), `${e}polyfill/${t}`;
    }
    function O(e, t) {
      return A(
        e,
        (function (e) {
          var t, n;
          return (
            null == (n = null == (t = window.loadPolyfillHash) ? void 0 : t[e])
              ? void 0
              : n.contenthash
          )
            ? `${e}.${window.loadPolyfillHash[e].contenthash}.js`
            : `${e}.js`;
        })(t)
      );
    }
    const I = [
        {
          regexp: new RegExp("User .+ already exists in users list!"),
          title: "User already exists in users list!",
        },
        {
          regexp: new RegExp("\\(Filename:.+Line: -?[0-9]+\\)"),
          title: "Unity",
        },
        { substr: "UnityEngine", title: "Unity" },
        { substr: "Dimensions must match", title: "Unity" },
        { substr: "Loading FSB failed for audio clip", title: "Unity" },
        { substr: "UnityLoader", title: "Unity" },
        {
          substr:
            "FS.syncfs operations in flight at once, probably just doing extra work",
          title: "Unity",
        },
        { substr: "GLSL", title: "GLSL" },
        { substr: "ValerypopoffJS plugin", title: "ValerypopoffJS plugin" },
        {
          substr: "https://github.com/cocos-creator/engine",
          title: "cocos-creator",
        },
        { substr: "Wicket.Ajax", title: "Wicket.Ajax" },
        { substr: 'Error loading sound "%s"', title: '"loading sound"' },
        { substr: "Error loading image", title: '"loading image"' },
        { substr: "Error loading Texture", title: '"loading Texture"' },
        { substr: "Error loading asset", title: '"loading asset"' },
        { substr: "Error loading audio url", title: '"loading audio url"' },
        {
          substr: "Error loading animation resource",
          title: '"loading animation resource"',
        },
        { substr: "Failed to load resource:", title: '"loading resource"' },
        { substr: "Could not load", title: '"loading"' },
        { substr: "Failed to load", title: '"loading"' },
        {
          regexp: new RegExp("[Cc]ould not allocate memory"),
          title: "working with memory",
        },
        {
          substr: "Out of executable memory in function at index",
          title: "working with memory",
        },
        { substr: "memory access out of bounds", title: "working with memory" },
        { substr: "pre-main prep time: ", title: '"pre-main prep time"' },
        { substr: "FAILED DIGGING: ", title: '"DIGGING"' },
        {
          substr: "sth wrong with connection!",
          title: '"sth wrong with connection!"',
        },
        {
          substr: "Object2D is not available",
          title: '"Object2D is not available"',
        },
        {
          regexp: new RegExp("^Client : Error finish action.*?respawn$"),
          title: '"finish action respawn"',
        },
        { substr: "[TokenStorageYandex]", title: "TokenStorageYandex" },
        { substr: "TOO_SMALL_CONTAINER", title: "TOO_SMALL_CONTAINER" },
        { substr: "Too small container", title: "TOO_SMALL_CONTAINER" },
        { substr: "window.cb", title: "Error related to window.cb" },
        {
          substr: "Not allowed to call RecalculateBounds",
          title: "Not allowed to call RecalculateBounds",
        },
        {
          regexp: /Loading chunk.*?partner-code-bundles/,
          title: "Loading chunk partner-code-bundles errors",
        },
        {
          substr: "[pcode] Loading chunk",
          title: "Loading chunk partner-code-bundles errors",
        },
        {
          regexp: /Loading chunk \S+ failed after \d+ retries/,
          title: "Loading chunk loadable-components errors",
        },
        {
          substr:
            "loadable-components: failed to asynchronously load component",
          title: "Loading component loadable-components errors",
        },
      ],
      T = (e) => {
        for (const t of I)
          if (
            (t.regexp && -1 !== e.search(t.regexp)) ||
            (t.substr && e.includes(t.substr))
          )
            return {
              message: `[grouped] ${t.title}`,
              additional: { message: e },
            };
        return { message: e };
      },
      x = (e) => {
        const t = ((e) =>
            e
              .map((e) => {
                if ("object" == typeof e)
                  try {
                    return JSON.stringify(e);
                  } catch (t) {
                    return `${e}: ${t.message}`;
                  }
                return String(e);
              })
              .join(" "))(e),
          n = T(t),
          r = new Error(n.message);
        return n.additional && (r.additional = n.additional), r;
      };
    class D extends Error {
      constructor({ code: e, message: t }, n, r) {
        super(t, n, r),
          (this.name = "AuthError"),
          (this.code = e),
          Object.setPrototypeOf(this, D.prototype),
          Error.captureStackTrace && Error.captureStackTrace(this, D);
      }
      toJSON() {
        return {
          code: this.code,
          message: this.message,
          name: this.name,
          stack: this.stack,
        };
      }
    }
    const k = D;
    class C extends Error {
      constructor({ code: e, httpStatus: t, message: n }, r, o) {
        super(n, r, o),
          (this.name = "FetchError"),
          (this.code = e),
          (this.httpStatus = t),
          Object.setPrototypeOf(this, C.prototype),
          Error.captureStackTrace && Error.captureStackTrace(this, C);
      }
      toJSON() {
        return {
          code: this.code,
          httpStatus: this.httpStatus,
          message: this.message,
          name: this.name,
          stack: this.stack,
        };
      }
    }
    const L = C;
    class R extends Error {
      constructor({ code: e, httpStatus: t, message: n }, r, o) {
        super(n, r, o),
          (this.name = "PaymentsError"),
          (this.code = e),
          (this.httpStatus = t),
          Object.setPrototypeOf(this, R.prototype),
          Error.captureStackTrace && Error.captureStackTrace(this, R);
      }
      toJSON() {
        return {
          code: this.code,
          httpStatus: this.httpStatus,
          message: this.message,
          name: this.name,
          stack: this.stack,
        };
      }
    }
    const N = R,
      M = { AuthError: k, FetchError: L, PaymentsError: N };
    class G {
      constructor(e = []) {
        (this.history = {}),
          (this.defaultAction = Symbol()),
          e.forEach((e) => {
            this.add(e);
          });
      }
      add(e) {
        const { type: t, action: n = this.defaultAction } = e.data || {};
        t &&
          (this.history[t] || (this.history[t] = {}), (this.history[t][n] = e));
      }
      hasEvent(e, t) {
        return Boolean(this.getEvents(e, t).length);
      }
      getEvents(e, t) {
        const n = this.history[e] || {};
        return t
          ? n[t]
            ? [n[t]]
            : []
          : [
              ...(n[this.defaultAction] ? [n[this.defaultAction]] : []),
              ...Object.values(n),
            ];
      }
    }
    var j = Object.defineProperty,
      $ = Object.defineProperties,
      U = Object.getOwnPropertyDescriptors,
      Y = Object.getOwnPropertySymbols,
      B = Object.prototype.hasOwnProperty,
      F = Object.prototype.propertyIsEnumerable,
      K = (e, t, n) =>
        t in e
          ? j(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n),
      H = (e, t) => {
        for (var n in t || (t = {})) B.call(t, n) && K(e, n, t[n]);
        if (Y) for (var n of Y(t)) F.call(t, n) && K(e, n, t[n]);
        return e;
      };
    class W {
      constructor() {
        var e;
        (this.externalCallbacks = {}),
          (this.internalCallbacks = {}),
          (this.suppressNoGameFrameWarning = !1),
          (this.externalHistory = new G(this.getExternalEvents())),
          (this.internalHistory = new G([])),
          this.getInternalEvents().forEach((e) => {
            this.postEventDataToListeners(e, []);
          });
        const t =
          null == (e = window.earlyEvents)
            ? void 0
            : e.listeners.find((e) => "message" === e.type);
        t && t.element.removeEventListener(t.type, t.fn),
          window.earlyEvents &&
            (window.earlyEvents.messages = window.earlyEvents.messages.filter(
              (e) =>
                !(
                  "forward" === e.action &&
                  ["gameMessage", "internalMessage"].includes(e.type)
                )
            )),
          (this._promises = Object.create(null)),
          (this._externalListeners = Object.create(null)),
          (this._internalListeners = Object.create(null)),
          this._addEventListener();
      }
      get _parentTarget() {
        return window.parent !== window ? window.parent : void 0;
      }
      get _gameFrame() {
        const e = (function () {
          const e = window.YandexGamesSDK && window.YandexGamesSDK.FRAME_ID;
          if (e && "string" == typeof e) {
            const t = document.getElementById(e);
            if (t) return t;
          }
        })();
        return (
          e ||
            this.suppressNoGameFrameWarning ||
            console.warn("No game frame to post"),
          e
        );
      }
      get _gameFrameAllowedOrigins() {
        var e;
        try {
          const t =
            null == (e = this._gameFrame) ? void 0 : e.dataset.allowedOrigins;
          if (!t) return;
          return JSON.parse(t);
        } catch (e) {
          return;
        }
      }
      get _childTarget() {
        var e;
        return null == (e = this._gameFrame) ? void 0 : e.contentWindow;
      }
      hasEvents({ action: e, source: t, type: n }) {
        return "external" === t
          ? this.externalHistory.hasEvent(n, e)
          : "internal" === t
          ? this.internalHistory.hasEvent(n, e)
          : this.internalHistory.hasEvent(n, e) ||
            this.externalHistory.hasEvent(n, e);
      }
      getEvents({ action: e, source: t, type: n }) {
        const r = [];
        return (
          (t && "external" !== t) ||
            r.push(...this.externalHistory.getEvents(n, e)),
          (t && "internal" !== t) ||
            r.push(...this.internalHistory.getEvents(n, e)),
          r
        );
      }
      onAllMessages(e, t, n) {
        this.onExternalMessage(e, t, n), this.onInternalMessage(e, t, n);
      }
      offAllMessages(e, t) {
        this.offExternalMessage(e, t), this.offInternalMessage(e, t);
      }
      onExternalMessage(e, t, n) {
        const { withHistory: r = !0 } = n || {};
        r &&
          this.getSortedEvents(e, "external").forEach((e) => {
            t(e, this.getExternalCallback(e));
          }),
          this._onMessage(this._externalListeners, e, t);
      }
      offExternalMessage(e, t) {
        this._offMessage(this._externalListeners, e, t);
      }
      onInternalMessage(e, t, n) {
        const { withHistory: r = !1 } = n || {};
        r &&
          this.getSortedEvents(e, "internal").forEach((e) => {
            t(e, this.internalCallbacks[e.data.messageId] || (() => {}));
          }),
          this._onMessage(this._internalListeners, e, t);
      }
      offInternalMessage(e, t) {
        this._offMessage(this._internalListeners, e, t);
      }
      externalPost(e) {
        this._handleEvent(e);
      }
      post(e) {
        return this.postEventDataToListeners(
          e,
          this._internalListeners[e.type]
        );
      }
      hasParent() {
        return Boolean(this._parentTarget);
      }
      postToParent(e) {
        const t = this._parentTarget;
        return t
          ? this._post(t, e)
          : Promise.reject(new Error("No parent to post message"));
      }
      hasChild() {
        this.suppressNoGameFrameWarning = !0;
        const e = Boolean(this._childTarget);
        return (this.suppressNoGameFrameWarning = !1), e;
      }
      postToChild(e) {
        const t = this._childTarget;
        return t
          ? this._post(t, e)
          : Promise.reject(
              new Error(
                `No child to post message: type = ${e.type}, action = ${
                  "action" in e ? e.action : "-"
                }`
              )
            );
      }
      getInternalEvents() {
        const { messages: e } = window.earlyEvents || {};
        return e
          ? e
              .filter((e) => {
                var t;
                return (
                  "internalMessage" === e.type &&
                  "forward" === e.action &&
                  (null == (t = e.data) ? void 0 : t.originalEvent)
                );
              })
              .map((e) => e.data.originalEvent)
          : [];
      }
      getExternalEvents() {
        const { messages: e } = window.earlyEvents || {};
        if (!e) return [];
        const t =
          this.getOriginsFromParams() || this._gameFrameAllowedOrigins || [];
        return e
          .filter((e) => {
            var n;
            return (
              "gameMessage" === e.type &&
              "forward" === e.action &&
              t.includes(e.origin) &&
              (null == (n = e.data) ? void 0 : n.originalEvent)
            );
          })
          .map((e) => e.data.originalEvent);
      }
      _addEventListener() {
        window.addEventListener("message", (e) => {
          const { source: t } = e.data || {};
          "YandexGamesSDK" === t && this._handleEvent(e);
        });
      }
      getExternalCallback(e) {
        const { type: t, action: n, messageId: r, payload: o } = e.data || {};
        if (this.externalCallbacks[r]) return this.externalCallbacks[r];
        return (
          (this.externalCallbacks[r] = (e = {}) => {
            const a = {
              type: e.type || t,
              action: e.action || n,
              originMessageId: r,
              originPayload: o,
              data: e.data || {},
            };
            !(function (e, t) {
              t.error &&
                ((e.error = String(t.error.message) || null),
                (e.errorJSON = JSON.stringify(t.error) || null));
            })(a, e),
              this.postCallbackToChild(a),
              (this.externalCallbacks[r] = () => {});
          }),
          this.externalCallbacks[r]
        );
      }
      _handleEvent(e) {
        const {
            type: t,
            action: n,
            originMessageId: r,
            originPayload: o,
            data: a,
            error: s,
            errorJSON: i,
          } = e.data || {},
          l = this._promises[r];
        l &&
          (this.deletePromise(r),
          void 0 === s
            ? l.resolve({ type: t, action: n, originPayload: o, data: a })
            : l.reject(
                (function ({ error: e, errorJSON: t }) {
                  if (t)
                    try {
                      const e = JSON.parse(t);
                      if (e && e.name in M) return new M[e.name](e);
                    } catch (e) {
                      se(e);
                    }
                  return new Error(e || "");
                })({ error: s, errorJSON: i })
              ));
        const c = this.getExternalCallback(e);
        this.externalHistory.add(e);
        const d = this._externalListeners[t] || [];
        for (const t of d)
          try {
            t(e, c);
          } catch (e) {
            se(e);
          }
      }
      getSortedEvents(e, t) {
        const n =
          "external" === t ? this.externalHistory : this.internalHistory;
        return (
          "string" == typeof e && (e = [e]),
          e
            .reduce((e, t) => e.concat(n.getEvents(t)), [])
            .sort((e, t) => (e.data.messageId > t.data.messageId ? 1 : -1))
        );
      }
      _onMessage(e, t, n) {
        if (("string" == typeof t && (t = [t]), !Array.isArray(t)))
          throw new Error('Wrong argument "types"');
        for (const r of t) r in e || (e[r] = []), e[r].push(n);
      }
      _offMessage(e, t, n) {
        if (("string" == typeof t && (t = [t]), !Array.isArray(t)))
          throw new Error('Wrong argument "types"');
        for (const r of t) r in e && (e[r] = e[r].filter((e) => e !== n));
      }
      postEventDataToListeners(e, t = []) {
        const { action: n, type: r } = e;
        return new Promise((o) => {
          const a = `${Date.now()}-${Math.random()}`,
            s = (e = {}) => {
              const t = {
                action: e.action || n,
                data: e.data || {},
                errorInstance: e.error,
                originMessageId: a,
                type: e.type || r,
              };
              o(t), delete this.internalCallbacks[a];
            };
          this.internalCallbacks[a] = s;
          const i = new MessageEvent(r, {
            data: ((l = H({}, e)), (c = { messageId: a }), $(l, U(c))),
          });
          var l, c;
          this.internalHistory.add(i);
          for (const e of t)
            try {
              e(i, s);
            } catch (e) {
              se(e);
            }
        });
      }
      postCallbackToChild(e) {
        const t = this._childTarget;
        return t
          ? this._post(t, e)
          : Promise.reject(
              new Error(
                `No child to post message: type = ${e.type}, action = ${e.action}`
              )
            );
      }
      clearPromiseWaitTimeout(e) {
        const t = this._promises[e];
        (null == t ? void 0 : t.timeoutId) &&
          (window.clearTimeout(t.timeoutId), delete t.timeoutId);
      }
      deletePromise(e) {
        this.clearPromiseWaitTimeout(e), delete this._promises[e];
      }
      _post(e, t) {
        const n = Date.now(),
          r = `${n}-${Math.random()}`;
        t = Object.assign({}, t, { source: "YandexGamesSDK", messageId: r });
        let o = (e) => {},
          s = (e) => {};
        const i = new Promise((e, t) => {
          (o = e), (s = t);
        });
        this._promises[r] = { promise: i, resolve: o, reject: s, time: n };
        try {
          e.postMessage(
            (function (e) {
              if ("function" == typeof structuredClone)
                try {
                  return structuredClone(e), e;
                } catch (t) {
                  return (
                    S({
                      block: a.UTILS_UNIVERSAL,
                      message: "Error structuredClone operation",
                      additional: { error: t },
                    }),
                    e
                  );
                }
              return e;
            })(t),
            "*"
          );
        } catch (e) {
          return this.deletePromise(r), Promise.reject(e);
        }
        if ("timeout" in t) {
          const { timeout: e } = t;
          "number" == typeof e && e > 0
            ? (this._promises[r].timeoutId = window.setTimeout(() => {
                this.deletePromise(r),
                  s(new Error("Message rejected by timeout"));
              }, e))
            : se(new Error("Wrong timeout value"));
        }
        return i;
      }
      getOriginsFromParams() {
        var e, t;
        const n = [];
        return (
          "string" ==
            typeof (null == (e = window.playPageData)
              ? void 0
              : e.gameOrigin) && n.push(window.playPageData.gameOrigin),
          "string" ==
            typeof (null == (t = window.appData) ? void 0 : t.baseHost) &&
            n.push(window.appData.baseHost),
          n.length ? n : void 0
        );
      }
    }
    let V;
    if ("object" == typeof window)
      (window.YandexGamesSDKGlobals = window.YandexGamesSDKGlobals || {}),
        window.YandexGamesSDKGlobals.messaging ||
          (window.YandexGamesSDKGlobals.messaging = new W()),
        (V = window.YandexGamesSDKGlobals.messaging);
    else {
      const e = () => {
          throw new Error("Not impl");
        },
        t = (e) => Promise.reject(new Error("Not impl"));
      V = {
        externalPost: (t) => e,
        getEvents: e,
        hasChild: () => !1,
        hasEvents: e,
        hasParent: () => !1,
        offAllMessages: e,
        offExternalMessage: e,
        offInternalMessage: e,
        onAllMessages: e,
        onExternalMessage: e,
        onInternalMessage: e,
        post: t,
        postToChild: t,
        postToParent: t,
      };
    }
    const z = V,
      q = /Adv was delayed on/,
      J = (e) => q.test((null == e ? void 0 : e.message) || "");
    var Z = Object.defineProperty,
      X = Object.getOwnPropertySymbols,
      Q = Object.prototype.hasOwnProperty,
      ee = Object.prototype.propertyIsEnumerable,
      te = (e, t, n) =>
        t in e
          ? Z(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n),
      ne = (e, t) => {
        for (var n in t || (t = {})) Q.call(t, n) && te(e, n, t[n]);
        if (X) for (var n of X(t)) ee.call(t, n) && te(e, n, t[n]);
        return e;
      };
    const re = "YandexSDKLogError";
    function oe(e) {
      var t;
      let n;
      try {
        throw new Error();
      } catch (r) {
        const o = /(\w+)@|at (.+) \(/g,
          a = e || r.stack || "";
        if (a.matchAll) {
          const e = Array.from(a.matchAll(o)) || [];
          n = null == (t = e[e.length - 1]) ? void 0 : t[2];
        }
      }
      return n;
    }
    function ae(e, t, n) {
      var r, o, a;
      const s = (function (e, t) {
        var n, r, o, a;
        const { message: s, additional: i = {} } = T(e.message || String(e)),
          l = {
            columnNumber: null != (n = e.columnNumber) ? n : -1,
            fileName: e.fileName || "",
            lineNumber: null != (r = e.lineNumber) ? r : -1,
            name: e.name || "Error",
            message: s,
            stack: e.stack || "",
          },
          c = {
            appId: void 0,
            version:
              parseInt(
                (null == (o = window.YandexGamesSDKEnvironment)
                  ? void 0
                  : o.APP_VERSION) ||
                  (null == (a = window.clientMetadata) ? void 0 : a.appVersion),
                10
              ) || 0,
          };
        return (
          (l.additional = ne(ne(ne(ne({}, e.additional), t.additional), c), i)),
          l
        );
      })(t, n);
      n.message && (s.message = n.message),
        n.prefix && (s.message = `${n.prefix} ${s.message}`),
        z["YaGames" in window ? "postToParent" : "post"]({
          data: {
            block: `ErrorCounter/common: ${e}`,
            error: s,
            level: null != (r = n.level) ? r : "error",
            source: e,
            sourceMethod: null != (o = n.sourceMethod) ? o : oe(s.stack),
            type: null != (a = n.type) ? a : "error",
          },
          type: "error",
        }).catch(console.warn);
    }
    function se(e, t = {}) {
      J(e) || ae("sdk", e, t), console.warn(e);
    }
    function ie(e, t = {}) {
      ae("sdk-game", e, t), console.error(e, re);
    }
    function le(e, t = !0) {
      var n;
      const r = Object.create(null);
      return (
        [
          null == (n = e.hash) ? void 0 : n.replace(/^#/, ""),
          e.search.replace(/^\?/, ""),
        ]
          .join("&")
          .split("&")
          .filter(Boolean)
          .forEach((e) => {
            const [n, o] = e.split("=");
            try {
              r[n] = t ? decodeURIComponent(o) : o;
            } catch (e) {
              console.warn(e);
            }
          }),
        r
      );
    }
    function ce(e = window) {
      var t;
      return (null == (t = e.YandexGamesSDK) ? void 0 : t.game)
        ? e.YandexGamesSDK.game.info.isDraft
        : "true" ===
            (function (e, t) {
              var n, r;
              return t
                ? "entryQuery" in t
                  ? "string" == typeof t.entryQuery[e]
                    ? t.entryQuery[e]
                    : void 0
                  : le(t)[e]
                : "object" == typeof window
                ? (null ==
                  (r = null == (n = window.appData) ? void 0 : n.location)
                    ? void 0
                    : r.entryQuery[e]) || le(window.location)[e]
                : void 0;
            })("draft");
    }
    const de = "achv-manager",
      ue = (e) => ({ action: "getList", type: de, data: e }),
      pe = (e) => ({ action: "getProgress", type: de, data: e }),
      he = (e) => ({ action: "setProgress", type: de, data: e });
    const me = class {
      constructor() {
        (this.resolve = () => {}),
          (this.reject = () => {}),
          (this.promiseState = 0),
          (this.promise = new Promise((e, t) => {
            (this.resolve = (t) => {
              (this.promiseState = 1), e(t);
            }),
              (this.reject = (e) => {
                (this.promiseState = 2), t(e);
              });
          }));
      }
      get state() {
        return this.promiseState;
      }
    };
    class ge {
      static SetFlag(e, t) {
        return e | t;
      }
      static UnsetFlag(e, t) {
        return e & ~t;
      }
      static HasFlag(e, t) {
        return (e & t) === t;
      }
      static ToggleFlag(e, t) {
        return e ^ t;
      }
    }
    function fe(e) {
      const t = this.constructor.prototype[e],
        n = function () {
          return t.apply(n, arguments);
        };
      return (
        Object.setPrototypeOf(n, this.constructor.prototype),
        Object.getOwnPropertyNames(t).forEach(function (e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
        }),
        n
      );
    }
    fe.prototype = Object.create(Function.prototype);
    const ye = fe;
    var ve = ((e) => (
      (e.Adv = "Adv"),
      (e.Auth = "Auth"),
      (e.Dev = "Dev"),
      (e.Popup = "Popup"),
      (e.Test = "Test"),
      (e.Unknown = "Unknown"),
      e
    ))(ve || {});
    const we = [],
      be =
        (Date.now(),
        (() => {
          var e;
          if ("object" != typeof window) return 0;
          const t = String(window.location).match("debug-mode(=(\\d+))?");
          return t
            ? t[1]
              ? parseInt(null != (e = t[2]) ? e : "0", 10)
              : 1
            : 0;
        })()),
      Ee = Boolean(be),
      Pe = class e extends ye {
        constructor(t, n, r) {
          var o, a;
          super("log"),
            (this.spoilerData = []),
            (this.spoiler = (...e) => (this.spoilerData.push(e), this)),
            (this.spoilerFunc = (e) => (this.spoilerData.push([e()]), this)),
            (this.tag = (t) =>
              new e(this.prefix, this.initialTag.concat(t), this.color)),
            (this.prefix = t),
            (this.color = r),
            (this.initialTag = [].concat(n)),
            (this.label = this.initialTag.join("|")),
            (this.prefixStyle = `\n            background: ${
              null != (o = null == r ? void 0 : r.background) ? o : "peru"
            };\n            color: ${
              null != (a = null == r ? void 0 : r.text) ? a : "black"
            };\n            font-size: 8px;\n            font-weight: normal;\n            border-radius: 0 4px 4px 0;\n            padding: 2px;\n        `);
        }
        static GetLogSize() {
          return Ee ? 1e3 : 300;
        }
        static GetLogFunc() {
          return 0 === be
            ? "dummyLog"
            : ge.HasFlag(be, 2)
            ? "extendedLog"
            : "simpleLog";
        }
        dummyLog(...e) {}
        simpleLog(...t) {
          console.log(
            `%c${this.label}%c${this.prefix}%c`,
            e.labelStyle,
            this.prefixStyle,
            e.dataStyle,
            ...t
          );
        }
        extendedLog(...t) {
          if (
            (/^((?!chrome|android).)*safari/i.test(window.navigator.userAgent)
              ? console.groupCollapsed(
                  `%c${this.label}%c${this.prefix}%c ${Ae(t).join(" ")}`,
                  e.labelStyle,
                  this.prefixStyle,
                  e.dataStyle
                )
              : console.groupCollapsed(
                  `%c${this.label}%c${this.prefix}%c`,
                  e.labelStyle,
                  this.prefixStyle,
                  e.dataStyle,
                  ...t
                ),
            this.spoilerData.length)
          ) {
            for (const e of this.spoilerData) console.log(...e);
            this.spoilerData = [];
          }
          console.trace(), console.groupEnd();
        }
        clientLog(...t) {
          const n = Math.max(0, we.length - e.LOG_SIZE + 1);
          n > 0 && we.splice(0, Math.max(n, 0.1 * e.LOG_SIZE));
          let r = Ae(t);
          r.reduce((e, t) => e + t.length, 0) > 1e3 &&
            (r = ["Error: Stringified data is too big."]);
          const o = {
            data: r,
            prefix: this.prefix,
            tag: this.initialTag,
            time: Date.now(),
          };
          this.color && (o.color = this.color),
            this.spoilerData.length && (o.spoilerData = Ae(this.spoilerData)),
            we.push(o);
        }
        log(...t) {
          "object" == typeof window && Ee && this.clientLog(...t),
            this[e.LOG_FUNC](...t);
        }
      };
    (Pe.labelStyle =
      "\n        background: dimgrey;\n        color: darkgrey;\n        font-size: 8px;\n        font-weight: normal;\n        border-radius:4px 0 0 4px;\n        padding: 2px\n    "),
      (Pe.dataStyle = "font-weight: normal;"),
      (Pe.LOG_SIZE = Pe.GetLogSize()),
      (Pe.LOG_FUNC = Pe.GetLogFunc());
    let Se = Pe;
    const _e = (e, t = "Unknown", n) => new Se(e, t, n);
    function Ae(e) {
      try {
        return e.map((e) =>
          "object" == typeof e
            ? (function (e, t = 1) {
                const n = new WeakMap();
                return JSON.stringify(
                  (function e(t, r) {
                    if (!t || "object" != typeof t) return t;
                    let o,
                      a = Array.isArray(t),
                      s = n.has(t);
                    return (
                      n.set(t, !0),
                      s
                        ? o
                        : (JSON.stringify(t, function (n, s) {
                            if (a || r > 0) {
                              if (!n) return (a = Array.isArray(s)), (t = s), s;
                              !o && (o = a ? [] : {}),
                                (o[n] = e(s, a ? r : r - 1));
                            }
                          }),
                          void 0 === o ? (a ? [] : {}) : o)
                    );
                  })(e, t)
                );
              })(e, 2)
            : String(e)
        );
      } catch (e) {
        return ["Error: Can not stringifyArrayObjects"];
      }
    }
    const Oe = _e("sdkTimeout", [ve.Dev]);
    function Ie(
      e,
      t = (function () {
        var e;
        switch (null == (e = navigator.connection) ? void 0 : e.effectiveType) {
          case "slow-2g":
            return 4e4;
          case "2g":
            return 2e4;
          case "3g":
            return 1e4;
          default:
            return 5e3;
        }
      })()
    ) {
      const n = new me();
      Oe("init", e),
        n.promise.catch(() => {
          var n;
          const r = new Error(`[SDK] to long resolve for method '${e}'`);
          (r.additional = {
            speed:
              (null == (n = navigator.connection) ? void 0 : n.effectiveType) ||
              "unknown",
            timeout: t,
          }),
            Oe("timeout", e),
            se(r);
        });
      const r = setTimeout(() => {
        n.reject();
      }, t);
      return () => {
        Oe("resolve", e), n.resolve(), clearTimeout(r);
      };
    }
    class Te {
      constructor(e) {
        (this.log = e),
          (this.observers = {}),
          (this.subscribe = (e, t) => {
            var n, r;
            return (
              (null != (r = (n = this.observers)[e]) ? r : (n[e] = [])).push(t),
              this.unsubscribe.bind(this, e, t)
            );
          }),
          (this.unsubscribe = (e, t) => {
            var n;
            if (!t) return void delete this.observers[e];
            const r = this.observers[e];
            if (!r)
              return void (
                null == (n = this.log) ||
                n.call(this, `Observable: eventId {${e}} does not exist`)
              );
            const o = r.indexOf(t);
            -1 !== o && r.splice(o, 1);
          }),
          (this.notifyObservers = (e, t) =>
            e.forEach((e) => {
              const n = this.observers[e];
              n &&
                n.forEach((n) => {
                  var r;
                  try {
                    n(t);
                  } catch (t) {
                    null == (r = this.log) ||
                      r.call(
                        this,
                        `Observable: {${e}} event observer error`,
                        t
                      );
                  }
                });
            })),
          (this.getObserversNumber = (e) => {
            var t, n;
            return null !=
              (n = null == (t = this.observers[e]) ? void 0 : t.length)
              ? n
              : 0;
          });
      }
    }
    var xe = (e, t, n) =>
      new Promise((r, o) => {
        var a = (e) => {
            try {
              i(n.next(e));
            } catch (e) {
              o(e);
            }
          },
          s = (e) => {
            try {
              i(n.throw(e));
            } catch (e) {
              o(e);
            }
          },
          i = (e) =>
            e.done ? r(e.value) : Promise.resolve(e.value).then(a, s);
        i((n = n.apply(e, t)).next());
      });
    const De = { background: "#6c5b7b", text: "#ffffff" },
      ke = class {
        constructor() {
          (this.log = _e("Achievements | Child frame", ve.Dev, De)),
            (this.observable = new Te(this.log)),
            (this.setProgress = (e, t) =>
              xe(this, null, function* () {
                return this.post(he({ id: e, progress: t }));
              })),
            (this.getProgress = (e) =>
              xe(this, null, function* () {
                return this.post(pe({ id: e }));
              })),
            (this.getList = (...e) =>
              xe(this, [...e], function* (e = ["allLocal"]) {
                return this.post(ue({ status: e }));
              })),
            (this.on = ({ action: e, id: t = "" }, n) =>
              this.observable.subscribe(this.buildId(e, t), n)),
            (this.off = ({ action: e, id: t }, n) =>
              this.observable.unsubscribe(this.buildId(e, t), n)),
            (this.post = (e) =>
              xe(this, null, function* () {
                this.log("post to parent", e.action, e.data);
                const t = Ie(`AchvManager.${e}`);
                return z
                  .postToParent(e)
                  .then((t) => {
                    var n;
                    this.log("receive from parent", e, t);
                    const { result: r, success: o, error: a } = t.data;
                    return o && r
                      ? (this.notify(
                          e.action,
                          null != (n = e.data) ? n : {},
                          r
                        ),
                        r)
                      : (this.log("reject", e, "due to error"),
                        Promise.reject(a));
                  })
                  .finally(() => {
                    t();
                  });
              })),
            (this.notify = (e, t, n) => {
              const r = [this.buildId(e)];
              t.id && r.push(this.buildId(e, t.id)),
                this.observable.notifyObservers(r, { data: n, payload: t });
            }),
            (this.buildId = (e, t = "") => `${e}${t}`);
        }
      };
    ke.init = () => {
      const {
        getList: e,
        getProgress: t,
        off: n,
        on: r,
        setProgress: o,
      } = new ke();
      return { getList: e, getProgress: t, off: n, on: r, setProgress: o };
    };
    let Ce = ke;
    var Le = ((e) => (
        (e.AudioAPI = "AudioAPI"),
        (e.GameplayAPI = "GameplayAPI"),
        (e.GamesAPI = "GamesAPI"),
        (e.LoadingAPI = "LoadingAPI"),
        (e.PluginEngineDataReporterAPI = "PluginEngineDataReporterAPI"),
        e
      ))(Le || {}),
      Re = ((e) => (
        (e.GameInit = "loading_api_game_init"),
        (e.GameReady = "loading_api_game_ready"),
        (e.GameReadyForce = "loading_api_game_ready_force"),
        (e.IframeAdded = "loading_api_iframe_added"),
        (e.IframeError = "loading_api_iframe_resources_error"),
        (e.IframeLoaded = "loading_api_iframe_resources_loaded"),
        (e.ScriptInit = "loading_api_script_init"),
        (e.TTIReady = "loading_api_tti_ready"),
        e
      ))(Re || {});
    const Ne = ["GameplayAPI", "LoadingAPI", "PluginEngineDataReporterAPI"];
    const Me = "sdk-event",
      Ge = (e) => ({ type: "foolproof-sdk-init", data: e }),
      je = (e) => ({ type: "error", data: e }),
      $e = "adv-manager",
      Ue = () => ({ type: $e, action: "get-disabled-state" }),
      Ye = () => ({ type: $e, action: "adv-show-fullscreen", timeout: 1e4 }),
      Be = () => ({
        type: $e,
        action: "adv-show-rewarded-video",
        timeout: 1e4,
      }),
      Fe = () => ({ type: $e, action: "adv-show-sticky-banner", timeout: 3e3 }),
      Ke = () => ({ type: $e, action: "adv-hide-sticky-banner", timeout: 3e3 }),
      He = () => ({
        type: $e,
        action: "adv-status-sticky-banner",
        timeout: 3e3,
      }),
      We = _e("NoAds", [ve.Adv]),
      Ve = "yandex-games-no-ads-style";
    function ze() {
      Array.isArray(window.yaContextCb) &&
        0 !== window.yaContextCb.length &&
        (window.yaContextCb = []),
        Array.isArray(window.yandexContextAsyncCallbacks) &&
          0 !== window.yandexContextAsyncCallbacks.length &&
          (window.yandexContextAsyncCallbacks = []);
    }
    let qe = !1;
    function Je() {
      qe ||
        ((qe = !0),
        We("_disableAds"),
        (function () {
          var e;
          if (document.getElementById(Ve)) return;
          const t = document.createElement("style");
          (t.id = Ve),
            (t.textContent =
              '\nbody div[id*="yandex_rtb"],\nbody div[id*="adfox"],\nbody iframe#bwiframe,\nbody iframe[src*="yabnrwall.html"],\nbody iframe[src*="yartbbnr.html"],\nbody yatag,\nbody yatag[class]\n{ display: none !important; }'),
            null == (e = document.body) || e.appendChild(t);
        })(),
        (function () {
          var e, t, n;
          const r = {
            destroy() {
              We("Ya.Context.AdvManager.destroy disabled");
            },
            render(e, t) {
              "function" == typeof t
                ? t()
                : "function" == typeof e.altCallback
                ? e.altCallback()
                : "function" == typeof e.onError &&
                  e.onError({
                    code: "YA_GAMES_ADS_DISABLED",
                    text: "",
                    type: "error",
                  });
            },
          };
          "function" ==
            typeof (null ==
            (n =
              null == (t = null == (e = window.Ya) ? void 0 : e.Context)
                ? void 0
                : t.AdvManager)
              ? void 0
              : n.render) && (window.Ya.Context.AdvManager.render = r.render),
            ze();
          let o = window.Ya;
          Object.defineProperty(window, "Ya", {
            get() {
              var e;
              return (
                (null == (e = null == o ? void 0 : o.Context)
                  ? void 0
                  : e.AdvManager) &&
                  o.Context.AdvManager !== r &&
                  (o.Context.AdvManager = r),
                ze(),
                o
              );
            },
            set(e) {
              var t;
              (null == (t = e.Context) ? void 0 : t.AdvManager) &&
                e.Context.AdvManager !== r &&
                (e.Context.AdvManager = r),
                (o = e);
            },
            enumerable: !0,
            configurable: !0,
          }),
            (window.Ya = window.Ya || {}),
            (window.Ya.Context = window.Ya.Context || { AdvManager: r }),
            (window.Ya.Context.AdvManager = r),
            We("disable Ya.Context.AdvManager.render");
        })());
    }
    function Ze(e) {
      try {
        return String(e.message || e).substring(0, 100);
      } catch (e) {}
      return "";
    }
    var Xe = ((e) => (
      (e.ADV_IS_NOT_CONNECTED = "ADV_IS_NOT_CONNECTED"),
      (e.UNKNOWN = "UNKNOWN"),
      e
    ))(Xe || {});
    const Qe = _e("AdvManager", ve.Adv);
    function et(e, t) {
      return "function" == typeof e[t]
        ? ((n = e[t]),
          (r = `Error in callback ${t}`),
          (...e) => {
            try {
              return n(...e);
            } catch (e) {
              se(e, { additional: { origError: Ze(e) }, message: r });
            }
          })
        : () => {};
      var n, r;
    }
    class tt {
      constructor(e) {
        var t;
        (this.callbacks = {}),
          (this.onAdvDebugManagerExternalMessage = (e) => {
            const { action: t } = e.data;
            switch (t) {
              case "debug-action-showFullscreenAdv":
                this.showFullscreenAdvDebug(t);
                break;
              case "debug-action-showRewardedVideo":
                this.showRewardedVideoDebug(t);
                break;
              case "debug-action-switchStickyBanners":
                this.switchStickyBannersDebug(t);
            }
          }),
          (this.onAdvManagerExternalMessage = (e) => {
            var t, n, r, o, a, s, i, l, c, d, u, p, h, m, g;
            const { action: f, data: y } = e.data;
            switch ((Qe(`onAdvManagerExternalMessage ${f}`), f)) {
              case "adv-callback-open":
                null == (n = (t = this.callbacks).onOpen) || n.call(t);
                break;
              case "adv-callback-close":
                this.callOnAdvClose(y.wasShown);
                break;
              case "adv-callback-error":
                this.callOnAdvClose(!1);
                try {
                  if (
                    "string" !=
                    typeof (null == (r = null == y ? void 0 : y.error)
                      ? void 0
                      : r.message)
                  ) {
                    const e = new Error("Undefined error message");
                    try {
                      e.additional = JSON.stringify(y);
                    } catch (t) {
                      e.additional = "undefined";
                    }
                    se(e);
                  }
                } catch (e) {}
                null == (a = (o = this.callbacks).onError) ||
                  a.call(o, new Error(y.error.message, { cause: y.error }));
                break;
              case "adv-callback-offline":
                this.callOnAdvClose(!1),
                  null == (i = (s = this.callbacks).onOffline) || i.call(s);
                break;
              case "rewarded-video-callback-open":
                null == (c = (l = this.callbacks).onOpen) || c.call(l);
                break;
              case "rewarded-video-callback-rewarded":
                null == (u = (d = this.callbacks).onRewarded) || u.call(d);
                break;
              case "rewarded-video-callback-close":
                null == (h = (p = this.callbacks).onClose) || h.call(p);
                break;
              case "rewarded-video-callback-error":
                null == (g = (m = this.callbacks).onError) ||
                  g.call(m, new Error(y.error.message, { cause: y.error }));
                break;
              case "set-disabled-state":
                Qe('On "set-disabled-state" event', e.data, y.value),
                  this.setDisabledState(y.value);
            }
          }),
          (this.adv = e.adv || {}),
          this.checkDeprecatedOnAdvCloseUsage(),
          (null == (t = window.YandexGamesSDKEnvironment)
            ? void 0
            : t.isWorldWide) && this.setDisabledState(!0),
          Object.defineProperty(this, "callbacks", {
            enumerable: !1,
            writable: !0,
          }),
          Object.defineProperty(this.adv, "onAdvClose", {
            enumerable: !1,
            writable: !0,
          }),
          z.onExternalMessage("adv-manager", this.onAdvManagerExternalMessage),
          z.onExternalMessage(
            "adv-debug-manager",
            this.onAdvDebugManagerExternalMessage
          ),
          this.updateDisabledState();
      }
      checkDeprecatedOnAdvCloseUsage() {
        "onAdvClose" in this.adv &&
          ie(
            new Error(
              'Deprecated usage "onAdvClose". Please, use `ysdk.adv.method({callbacks})` https://yandex.ru/dev/games/doc/sdk/sdk-adv'
            )
          );
      }
      showFullscreenAdvDebug(e) {
        this.showFullscreenAdv({
          callbacks: {
            onClose: (t) => Qe(`${e} onClose, wasShown = ${t}`),
            onError: (t) => Qe(`${e} onError, error =`, t),
            onOffline: () => Qe(`${e} onOffline`),
            onOpen: () => Qe(`${e} onOpen`),
          },
        });
      }
      showRewardedVideoDebug(e) {
        this.showRewardedVideo({
          callbacks: {
            onClose: () => Qe(`${e} onClose`),
            onError: (t) => Qe(`${e} onError, error =`, t),
            onOpen: () => Qe(`${e} onOpen`),
            onRewarded: () => Qe(`${e} onRewarded`),
          },
        });
      }
      switchStickyBannersDebug(e) {
        this.getBannerAdvStatus().then(({ stickyAdvIsShowing: t }) => {
          t
            ? this.hideBannerAdv().then(({ stickyAdvIsShowing: t }) => {
                Qe(`${e} hideBannerAdv, stickyAdvIsShowing = ${t}`);
              })
            : this.showBannerAdv().then(
                ({ reason: t, stickyAdvIsShowing: n }) => {
                  Qe(
                    `${e} hideBannerAdv, stickyAdvIsShowing = ${n}, reason = ${t}`
                  );
                }
              );
        });
      }
      updateDisabledState() {
        z.postToParent(Ue())
          .then(({ data: e }) => {
            this.setDisabledState(e.value);
          })
          .catch(console.warn);
      }
      setDisabledState(e) {
        Qe("setDisabledState", e), e ? Je() : qe && (qe = !1);
      }
      ensureCallbacksIsValid(e, t) {
        if (!Object.keys(t).length) return;
        let n = ["onClose", "onError"];
        "showRewardedVideo" === e && n.push("onRewarded");
        try {
          n = n.filter((e) => !(e in t && "function" == typeof t[e]));
        } catch (e) {
          ie(new Error('Error in "ensureCallbacksIsValid"'), {
            additional: { error: String(e).substring(0, 100) },
          });
        }
        if (n.length) {
          ie(
            new Error(
              `Callbacks for "${e}" has unpresented methods. See https://yandex.ru/dev/games/doc/ru/sdk/sdk-adv`
            ),
            { additional: { unpresentedMethods: n } }
          );
        }
      }
      showFullscreenAdv({ callbacks: e = {} } = {}) {
        this.ensureCallbacksIsValid("showFullscreenAdv", e);
        const t = Ie("AdvManager.showFullscreenAdv");
        z.postToParent(Ye())
          .then(({ data: { error: t } }) => {
            if (!t)
              return this.setCallbacks(e, [
                "onClose",
                "onOpen",
                "onError",
                "onOffline",
              ]);
            if (ce() && t.message.includes("often than once per")) throw t;
            se(t),
              et(e, "onError")(t),
              et(e, "onClose")(!1),
              this.callDeprecatedOnClose(!1);
          })
          .catch((t) => {
            se(t),
              et(e, "onError")(t),
              et(e, "onClose")(!1),
              this.callDeprecatedOnClose(!1);
          })
          .finally(() => {
            t();
          });
      }
      showRewardedVideo({ callbacks: e = {} } = {}) {
        this.ensureCallbacksIsValid("showRewardedVideo", e);
        const t = Ie("AdvManager.showRewardedVideo");
        z.postToParent(Be())
          .then(({ data: { error: t } }) => {
            if (t) throw t;
            this.setCallbacks(e, [
              "onOpen",
              "onRewarded",
              "onClose",
              "onError",
            ]);
          })
          .catch((t) => {
            se(t), et(e, "onError")(t), et(e, "onClose")(!1);
          })
          .finally(() => {
            t();
          });
      }
      showBannerAdv() {
        return new Promise((e) => {
          const t = Ie("AdvManager.showBannerAdv");
          z.postToParent(Fe())
            .then(({ data: t }) => {
              e(t);
            })
            .catch((t) => {
              se(t), e({ reason: Xe.UNKNOWN, stickyAdvIsShowing: !1 });
            })
            .finally(() => {
              t();
            });
        });
      }
      hideBannerAdv() {
        return new Promise((e) => {
          const t = Ie("AdvManager.hideBannerAdv");
          z.postToParent(Ke())
            .then(({ data: t }) => {
              e(t);
            })
            .catch((t) => {
              se(t), e({ stickyAdvIsShowing: !1 });
            })
            .finally(() => {
              t();
            });
        });
      }
      getBannerAdvStatus() {
        return new Promise((e) => {
          const t = Ie("AdvManager.getBannerAdvStatus");
          z.postToParent(He())
            .then(({ data: t }) => {
              e(t);
            })
            .catch((t) => {
              se(t), e({ reason: Xe.UNKNOWN, stickyAdvIsShowing: !1 });
            })
            .finally(() => {
              t();
            });
        });
      }
      setCallbacks(e, t) {
        (this.callbacks = {}),
          t.forEach((t) => {
            this.callbacks[t] = et(e, t);
          });
      }
      callOnAdvClose(e = !1) {
        var t, n;
        this.callDeprecatedOnClose(e),
          null == (n = (t = this.callbacks).onClose) || n.call(t, e);
      }
      callDeprecatedOnClose(e = !1) {
        if ("function" == typeof this.adv.onAdvClose)
          try {
            this.adv.onAdvClose(e);
          } catch (e) {
            ie(e);
          }
      }
    }
    const nt = "auth",
      rt = () => ({
        type: nt,
        action: "auth-dialog-open",
        data: { initializer: "auth-manager-public" },
      });
    const ot = new (class {
        openAuthDialog() {
          const e = Ie("AuthManagerPublic.openAuthDialog", 12e4),
            t = z.postToParent(rt());
          return (
            t.finally(() => {
              e();
            }),
            t
          );
        }
      })(),
      at = (e) => ({
        type: "availability-methods",
        action: "check-availability",
        data: e,
      }),
      st = "leaderboard",
      it = (e) => ({ type: st, action: "description", data: e }),
      lt = (e) => ({ type: st, action: "entries", data: e }),
      ct = (e) => ({ type: st, action: "player-entry", data: e }),
      dt = (e) => ({ type: st, action: "score", data: e }),
      ut = (e) => ({ type: st, action: "stat", data: e }),
      pt = "%TLD%",
      ht = "%DOMAIN_NAME%";
    var mt = ((e) => (
      (e.CON = "CON"), (e.HOP = "HOP"), (e.TST = "TST"), (e.YAN = "YAN"), e
    ))(mt || {});
    function gt(e) {
      return (function (e, t) {
        if ("function" != typeof t)
          throw new Error("Argument is not a function");
        let n;
        return function (...r) {
          return (
            --e > 0 && t && (n = t.apply(this, r)), e <= 1 && (t = void 0), n
          );
        };
      })(2, e);
    }
    const ft = (e) => {
        const t = new URL(e);
        class n {
          constructor() {
            this.items = [];
          }
          contains(e) {
            return this.items.includes(e);
          }
          item(e) {
            var t;
            return null != (t = this.items[e]) ? t : null;
          }
          get length() {
            return this.items.length;
          }
          *[Symbol.iterator]() {}
        }
        return {
          location: {
            ancestorOrigins: new n(),
            hash: t.hash,
            host: t.host,
            hostname: t.hostname,
            href: t.href,
            origin: t.origin,
            pathname: t.pathname,
            port: t.port,
            protocol: t.protocol,
            search: t.search,
            assign: () => {},
            reload: () => {},
            replace: () => {},
          },
        };
      },
      yt =
        "undefined" != typeof window
          ? window
          : ft("https://yandex.ru/games/app/1");
    var vt;
    const wt = _e("src/sdk/common/api/constructExternalApiUrl", ve.Dev),
      bt =
        ("undefined" != typeof window &&
          (null == (vt = window.appData) ? void 0 : vt.env)) ||
        void 0,
      Et = le(yt.location).origin || void 0 || yt.location.origin;
    function Pt(e) {
      const [t, n, r] = Et.match(new RegExp(`[./](${e})\\.([a-z.]+)$`)) || [
          "/yandex.ru",
          "yandex",
          "ru",
        ],
        o = (function (e, t = "ru") {
          return e.replace(pt, t);
        })(
          (
            (bt
              ? bt.SDK_BACKEND_URL
              : "https://games-sdk.%DOMAIN_NAME%.%TLD%/games/api/sdk/v1") || ""
          ).replace(ht, n),
          r
        );
      return gt(() => wt("BACKEND_SDK_URL", o)), o;
    }
    function St() {
      var e, t;
      return Pt(
        "undefined" != typeof window
          ? (null == (e = window.YandexGamesSDKEnvironment)
              ? void 0
              : e.serviceHostname) ||
              (null == (t = window.YandexGamesSDKEnvironment)
                ? void 0
                : t.serviceName)
          : void 0
      );
    }
    const _t = "payments",
      At = (e) => ({ type: _t, action: "get-catalog", data: e }),
      Ot = (e) => ({ type: _t, action: "get-purchases", data: e }),
      It = (e) => ({ type: _t, action: "purchase-start", data: e }),
      Tt = (e) => ({ type: _t, action: "purchase-consume", data: e }),
      xt = () => ({ type: _t, action: "get-game-purchase-enabled" });
    function Dt() {
      var e, t, n, r, o, s;
      if ("undefined" == typeof window) return "";
      let i = "";
      return (
        (null == (e = window.YandexGamesSDK) ? void 0 : e.environment) &&
          (i =
            (null ==
            (n =
              null == (t = window.YandexGamesSDK.environment) ? void 0 : t.app)
              ? void 0
              : n.id) || ""),
        window.YandexGamesSDKEnvironment &&
          (i =
            (null == (r = window.YandexGamesSDKEnvironment.app)
              ? void 0
              : r.id) || ""),
        i ||
          S(
            {
              block: a.UTILS_LOCATION,
              level:
                null == (s = null == (o = window.Ya) ? void 0 : o.Rum)
                  ? void 0
                  : s.ERROR_LEVEL.ERROR,
            },
            new Error("Can not get appId from environment")
          ),
        i
      );
    }
    const kt = "metrika",
      Ct = (e) => ({ type: kt, action: "reachGoal", data: e }),
      Lt = (e) => ({ type: kt, action: "params", data: e });
    var Rt,
      Nt,
      Mt,
      Gt,
      jt = ((e) => ((e.PLAYHOP = "playhop"), (e.YANDEX = "yandex"), e))(
        jt || {}
      );
    const $t =
        ("undefined" != typeof window &&
          ((null ==
          (Nt = null == (Rt = window.YandexGamesSDK) ? void 0 : Rt.environment)
            ? void 0
            : Nt.serviceName) ||
            (null == (Mt = window.YandexGamesSDKEnvironment)
              ? void 0
              : Mt.serviceName) ||
            (null == (Gt = window.clientMetadata)
              ? void 0
              : Gt.serviceName))) ||
        jt.YANDEX,
      Ut = Object.create(null),
      Yt = {
        gameSessionUID: "",
        init() {},
        sendOnceDeprecatedUsage(e) {
          e in Ut ||
            ((Ut[e] = 1),
            this.params({
              borrowParams: { sdkDeprecatedUsage: { key: e, appId: Dt() } },
              service: $t,
            }));
        },
        params(e) {
          z.hasParent() &&
            z.postToParent(Lt(e)).catch((e) => {
              se(e);
            });
        },
        reachGoal(e, t, n) {
          z.hasParent() &&
            z.postToParent(Ct({ data: t, goal: e, params: n })).catch((e) => {
              se(e);
            });
        },
      },
      Bt = Yt;
    var Ft = ((e) => (
      (e.ALL_GAMES = "ALL_GAMES"),
      (e.APP = "APP"),
      (e.CATEGORIES = "CATEGORIES"),
      (e.CATEGORY = "CATEGORY"),
      (e.DIST_APP = "DIST_APP"),
      (e.TAG = "TAG"),
      (e.TAGS = "TAGS"),
      e
    ))(Ft || {});
    Object.values(Ft);
    const Kt = (e, t) => {
      var n;
      if (!(null == (n = t[e]) ? void 0 : n.path))
        throw new Error(`Property pathsMapping.path not found for "${e}"`);
      return t[e].path;
    };
    let Ht;
    function Wt(e, ...t) {
      function n(n, r = Kt) {
        let o = "";
        for (let a = 0; a < t.length; a++) {
          o += e[a];
          const s = t[a];
          if ("function" != typeof s)
            if (Ft[s])
              try {
                o += r(s, n);
              } catch (e) {
                null == Ht || Ht(e), (o += t[a]);
                continue;
              }
            else o += s;
          else o += s(n, r);
        }
        return (o += e[e.length - 1]), o;
      }
      return (
        (n.pathParams = t.reduce(
          (e, t) =>
            "function" == typeof t
              ? e.concat(t.pathParams)
              : (Ft[t] && e.push(t), e),
          []
        )),
        (n.hasParams = n.pathParams.length > 0),
        n
      );
    }
    var Vt = Object.defineProperty,
      zt = Object.defineProperties,
      qt = Object.getOwnPropertyDescriptors,
      Jt = Object.getOwnPropertySymbols,
      Zt = Object.prototype.hasOwnProperty,
      Xt = Object.prototype.propertyIsEnumerable,
      Qt = (e, t, n) =>
        t in e
          ? Vt(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
    var en = ((e) => (
      (e.ANDROID_OTHER = "android_other"),
      (e.ANDROID_STANDALONE = "android_standalone"),
      (e.ANDROID_TV = "tv_android"),
      (e.ANDROID_YABRO = "android_yabro"),
      (e.ANDROID_YASEARCH = "android_yasearch"),
      (e.DESKTOP_OTHER = "desktop_other"),
      (e.IOS_CHROME = "ios_chrome"),
      (e.IOS_OTHER = "ios_other"),
      (e.IOS_SAFARI = "ios_safari"),
      (e.IOS_STANDALONE = "ios_standalone"),
      (e.IOS_SUPERAPP = "ios_superapp"),
      (e.MOBILE_OTHER = "mobile_other"),
      e
    ))(en || {});
    Object.freeze(
      Object.values(en).reduce((e, t) => {
        return (
          (n = ((e, t) => {
            for (var n in t || (t = {})) Zt.call(t, n) && Qt(e, n, t[n]);
            if (Jt) for (var n of Jt(t)) Xt.call(t, n) && Qt(e, n, t[n]);
            return e;
          })({}, e)),
          zt(n, qt({ [t]: t }))
        );
        var n;
      }, {})
    ),
      Wt`/${Ft.APP}`,
      Wt`/${Ft.DIST_APP}`,
      Wt`/${Ft.TAG}`,
      Wt`/${Ft.TAGS}`,
      Wt`/${Ft.CATEGORY}`,
      Wt`/${Ft.CATEGORIES}`,
      Wt`/${Ft.ALL_GAMES}`;
    var tn = ((e) => (
      (e.ACCENT_THUMB_HORIZONTAL = "accent_thumb_horizontal"),
      (e.ADAPTIVE_RECOMMENDED_NEW = "adaptive_recommended_new"),
      (e.ADV_LOADER_DESKTOP = "adv_loader_desktop"),
      (e.ALL_GAMES_DESKTOP = "all_games_desktop"),
      (e.ALL_GAMES_MOBILE = "all_games_mobile"),
      (e.ALL_GAMES_TABLET = "all_games_tablet"),
      (e.CATEGORIZED_NEW_L = "categorized_new_l"),
      (e.L = "l"),
      (e.M = "m"),
      (e.MID_GRID_GAME_INFO_SIZE = "mid-grid-info"),
      (e.PAGE_ICON_DESKTOP = "page_icon_desktop"),
      (e.PAGE_ICON_DESKTOP_WITH_PLAY = "page_icon_desktop_with_play"),
      (e.PAGE_ICON_MOBILE = "page_icon_mobile"),
      (e.PAGE_ICON_MOBILE_WITH_PLAY = "page_icon_mobile_with_play"),
      (e.PAGE_SCROLLED_ICON_MOBILE = "page_scrolled_icon_mobile"),
      (e.PLAY_SIMILAR_GAMES = "play_similar_games"),
      (e.PREMIUM = "premium"),
      (e.PREMIUM_BIG = "premium_big"),
      (e.PROFILE_RECENT_GAMES = "profile_recent_games"),
      (e.PROMO_BAR = "promo_bar"),
      (e.RECOMMENDED_NEW = "recommended_new"),
      (e.S = "s"),
      (e.SIZE_22 = "size22"),
      (e.SIZE_36 = "size36"),
      (e.SIZE_48 = "size48"),
      (e.SIZE_84_LOW = "size84_low"),
      (e.SIZE_144 = "size144"),
      (e.TV = "tv"),
      (e.YOUR_GAMES = "your_games"),
      (e.YOUR_GAMES_FORCE = "your_games_force"),
      e
    ))(tn || {});
    Wt`\\/${Ft.CATEGORY}\\/(\\w+)`;
    Object.defineProperty,
      Object.defineProperties,
      Object.getOwnPropertyDescriptors,
      Object.getOwnPropertySymbols,
      Object.prototype.hasOwnProperty,
      Object.prototype.propertyIsEnumerable;
    tn.L,
      tn.CATEGORIZED_NEW_L,
      tn.RECOMMENDED_NEW,
      tn.ADAPTIVE_RECOMMENDED_NEW,
      tn.PROFILE_RECENT_GAMES,
      tn.PREMIUM_BIG,
      tn.TV,
      tn.PLAY_SIMILAR_GAMES,
      tn.ACCENT_THUMB_HORIZONTAL;
    var nn = ((e) => (
      (e.BIG = "big"),
      (e.ISLANDS_75 = "islands-75"),
      (e.ISLANDS_200 = "islands-200"),
      (e.ISLANDS_MIDDLE = "islands-middle"),
      (e.ISLANDS_RETINA_MEDIUM = "islands-retina-medium"),
      (e.ISLANDS_RETINA_SMALL = "islands-retina-small"),
      (e.NORMAL = "normal"),
      e
    ))(nn || {});
    const rn = "0/0-0";
    var on = n(751);
    function an(e, t, n) {
      var r, o;
      if (!e) return;
      let a = (function (e, t, n) {
        let r;
        try {
          let t = new URL(e);
          r = on.parse((n ? t.hash : t.search).slice(1));
        } catch (e) {
          return;
        }
        if (void 0 === r) return;
        let o = null == r ? void 0 : r[t];
        return o ? (Array.isArray(o) ? o[0] : o) : void 0;
      })(e, "sdk_url", t);
      if (void 0 === a) return;
      const s =
        void 0 !== n ? n.SDK_CUSTOM_DOMAINS : process.env.SDK_CUSTOM_DOMAINS;
      if (!s) return;
      let i;
      try {
        i = JSON.parse(s);
      } catch (e) {
        return;
      }
      if (void 0 === i) return;
      return null !=
        (o = null == (r = null == i ? void 0 : i[a]) ? void 0 : r.apiDomain)
        ? o
        : void 0;
    }
    function sn(e) {
      var t;
      let n = new URL(e);
      if (
        null == (t = null == window ? void 0 : window.appData) ? void 0 : t.env
      ) {
        let e = an(window.location.href, !0, window.appData.env);
        if (e) return (n.hostname = e), n.href;
      }
      return e;
    }
    const ln = {
        small: nn.ISLANDS_RETINA_SMALL,
        medium: nn.ISLANDS_RETINA_MEDIUM,
        large: nn.ISLANDS_200,
      },
      cn = { small: nn.ISLANDS_200, medium: nn.ISLANDS_200, large: nn.BIG };
    class dn {
      constructor(e) {
        this._personalInfo = e;
      }
      getID() {
        return (
          ie(
            new Error(
              "Player.getID() is deprecated. Please, use Player.getUniqueID().\nhttps://yandex.ru/dev/games/doc/dg/sdk/sdk-player.html#sdk-player__profile-data"
            )
          ),
          Bt.sendOnceDeprecatedUsage("Player.getID"),
          this._personalInfo.id
        );
      }
      getUniqueID() {
        return this._personalInfo.uniqueID;
      }
      getName() {
        return this._personalInfo.publicName;
      }
      getMode() {
        var e;
        return null != (e = this._personalInfo.mode) ? e : "";
      }
      getPayingStatus() {
        return (
          z.postToParent(xt()).then(({ data: { enabled: e } }) => {
            e ||
              ie(
                new Error(
                  "We provide data on the player's ability to pay in games that already support purchases"
                ),
                { level: "warn" }
              );
          }),
          this._personalInfo.payingStatus
        );
      }
      getPhoto(e = "medium") {
        var t, n, r;
        const o = ln[e];
        if (!o) throw new Error(`Unknown size value ('${e}')`);
        if (this._personalInfo.avatarIdHash) {
          let e = `${St()}/player`;
          return (
            "undefined" != typeof window &&
              (e =
                (null !=
                (r =
                  null == (n = null == (t = window.appData) ? void 0 : t.env)
                    ? void 0
                    : n.SDK_BACKEND_URL)
                  ? r
                  : St()) + "/player"),
            `${sn(e)}/avatar/${this._personalInfo.avatarIdHash}/${o}`
          );
        }
        return `https://avatars.mds.yandex.net/get-yapic/${rn}/${o}`;
      }
    }
    var un = Object.defineProperty,
      pn = Object.getOwnPropertySymbols,
      hn = Object.prototype.hasOwnProperty,
      mn = Object.prototype.propertyIsEnumerable,
      gn = (e, t, n) =>
        t in e
          ? un(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n),
      fn = (e, t) => {
        for (var n in t || (t = {})) hn.call(t, n) && gn(e, n, t[n]);
        if (pn) for (var n of pn(t)) mn.call(t, n) && gn(e, n, t[n]);
        return e;
      };
    const yn = (e, t) => {
        z.postToParent({
          type: "telegram",
          data: { playdeck: fn({ method: e }, t) },
        });
      },
      vn = "tgData",
      wn = () => (
        yn("getData", { key: vn }),
        new Promise((e, t) => {
          function n(r) {
            var o;
            if (
              !((e) => {
                var t, n, r;
                return (
                  "getData" ===
                  (null ==
                  (r =
                    null == (n = null == (t = e.data) ? void 0 : t.data)
                      ? void 0
                      : n.playdeck)
                    ? void 0
                    : r.method)
                );
              })(r)
            )
              return;
            z.offExternalMessage("telegram", n);
            const a =
              (null == (o = r.data.data.playdeck.value) ? void 0 : o.data) ||
              "{}";
            if ("string" == typeof a)
              try {
                e(JSON.parse(a));
              } catch (e) {
                const n = new Error("Error parsing game data from telegram");
                (n.additional = { originalError: e }),
                  se(n, { prefix: "telegram" }),
                  t({});
              }
            else e(a);
          }
          z.onExternalMessage("telegram", n),
            setTimeout(() => {
              z.offExternalMessage("telegram", n), t();
            }, 1e3);
        })
      );
    var bn = Object.defineProperty,
      En = Object.defineProperties,
      Pn = Object.getOwnPropertyDescriptors,
      Sn = Object.getOwnPropertySymbols,
      _n = Object.prototype.hasOwnProperty,
      An = Object.prototype.propertyIsEnumerable,
      On = (e, t, n) =>
        t in e
          ? bn(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
    const In = o(
      (e) => z.postToParent(dt(e)).then(({ data: e }) => e.result),
      1e3
    );
    class Tn {
      getLeaderboardDescription(e) {
        const t = Ie("Leaderboards.getLeaderboardDescription"),
          n = z.postToParent(it({ name: e })).then(({ data: e }) => e);
        return (
          n.finally(() => {
            t();
          }),
          n
        );
      }
      getLeaderboardStat(e) {
        const t = Ie("Leaderboards.getLeaderboardStat"),
          n = z.postToParent(ut({ name: e })).then(({ data: e }) => e);
        return (
          n.finally(() => {
            t();
          }),
          n
        );
      }
      getLeaderboardEntries(e, t) {
        const {
            includeUser: n = !1,
            quantityAround: r = 5,
            quantityTop: o = 5,
          } = t || {},
          a = Ie("Leaderboards.getLeaderboardEntries"),
          s = z
            .postToParent(
              lt({
                include_user: n,
                name: e,
                quantity_around: r,
                quantity_top: o,
              })
            )
            .then(({ data: e }) => {
              const { avatarPrefix: t, result: n } = e,
                { entries: r, leaderboard: o, ranges: a, userRank: s } = n;
              return {
                entries: this.transformLeaderboardEntries(r, t),
                leaderboard: o,
                ranges: a,
                userRank: s,
              };
            });
        return (
          s.finally(() => {
            a();
          }),
          s
        );
      }
      getLeaderboardPlayerEntry(e) {
        return (
          (t = this),
          (n = null),
          (r = function* () {
            const { data: t } = yield z.postToParent(ct({ name: e }));
            return this.transformLeaderboardEntry(t.result, t.avatarPrefix);
          }),
          new Promise((e, o) => {
            var a = (e) => {
                try {
                  i(r.next(e));
                } catch (e) {
                  o(e);
                }
              },
              s = (e) => {
                try {
                  i(r.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              i = (t) =>
                t.done ? e(t.value) : Promise.resolve(t.value).then(a, s);
            i((r = r.apply(t, n)).next());
          })
        );
        var t, n, r;
      }
      setLeaderboardScore(e, t, n) {
        yn("setScore", { value: t });
        const r = { name: e, score: t };
        return this.lastTimeLeaderboardWasSend &&
          !this.canSetLeaderboardScoreByTime()
          ? Promise.reject(
              "The request to setLeaderboardScore can be sent no more than once per second"
            )
          : (n && (r.extraData = n),
            (this.lastTimeLeaderboardWasSend = Date.now()),
            In(r));
      }
      canSetLeaderboardScoreByTime() {
        return Date.now() - this.lastTimeLeaderboardWasSend > 1e3;
      }
      transformLeaderboardEntry(e, t) {
        const {
            avatarIdHash: n,
            lang: r,
            publicName: o,
            scopePermissions: a,
            uniqueID: s,
          } = e.player,
          i = `${t}${n}`;
        return (
          (l = ((e, t) => {
            for (var n in t || (t = {})) _n.call(t, n) && On(e, n, t[n]);
            if (Sn) for (var n of Sn(t)) An.call(t, n) && On(e, n, t[n]);
            return e;
          })({}, e)),
          En(
            l,
            Pn({
              player: {
                getAvatarSrc: (e = "medium") => (
                  ln[e] || (e = "medium"), `${i}/${ln[e]}`
                ),
                getAvatarSrcSet: (e = "medium") => (
                  ln[e] || (e = "medium"), `${i}/${ln[e]} 1x, ${i}/${cn[e]} 2x`
                ),
                lang: r,
                publicName: o,
                scopePermissions: a,
                uniqueID: s,
              },
            })
          )
        );
        var l;
      }
      transformLeaderboardEntries(e, t) {
        return e.map((e) => this.transformLeaderboardEntry(e, t));
      }
    }
    const xn = () => {
        const e = new Tn();
        return Promise.resolve(e);
      },
      Dn = new Set(["ru", "uk", "be", "kk", "uz"]);
    var kn = ((e) => (
      (e.BE = "be"),
      (e.EN = "en"),
      (e.KK = "kk"),
      (e.RU = "ru"),
      (e.TR = "tr"),
      (e.UK = "uk"),
      (e.UZ = "uz"),
      e
    ))(kn || {});
    const Cn = kn.RU;
    function Ln(e, t = Cn, n = "") {
      if (e) {
        if ("string" == typeof e) return e;
        if (t in e) return e[t] || n;
        if (!((e) => !e || Dn.has(e))(t) && "en" in e) return e.en || n;
        if (Cn in e) return e[Cn] || n;
      }
      return n;
    }
    function Rn() {
      var e, t;
      return `//yastatic.net/s3/games-static/static-data/images/payments/sdk${
        (
          null == (e = window.YandexGamesSDKEnvironment)
            ? void 0
            : e.moneyCodeSymbol
        )
          ? `/${
              null == (t = window.YandexGamesSDKEnvironment)
                ? void 0
                : t.moneyCodeSymbol.toLowerCase()
            }`
          : ""
      }`;
    }
    let Nn = function () {
      (Nn = () => {}),
        Bt.params({
          borrowParams: {
            payments: { appId: Dt(), productCurrencyCodeGet: !0 },
          },
        });
    };
    class Mn {
      constructor(e) {
        this._productData = e;
      }
      get id() {
        return this._productData.id;
      }
      get title() {
        return Ln(this._productData.title);
      }
      get description() {
        return Ln(this._productData.description);
      }
      get imageURI() {
        const { image: e } = this._productData;
        return e && "object" == typeof e && "url_prefix" in e
          ? /\.(png|jpg|svg)$/.test(String(e.url_prefix))
            ? e.url_prefix
            : `${e.url_prefix}/default256x256`
          : "https://yastatic.net/s3/games-static/static-data/images/payments/default-product-image.png";
      }
      get price() {
        const { price: e } = this._productData;
        return `${e} ${this.priceCurrencyCode}`;
      }
      get priceValue() {
        return String(this._productData.price);
      }
      get priceCurrencyCode() {
        var e;
        return (
          Nn(),
          null == (e = window.YandexGamesSDKEnvironment)
            ? void 0
            : e.moneyCodeSymbol
        );
      }
      getPriceCurrencyImage(e = "small") {
        if ("svg" === e) return `${Rn()}/currency-icon-m.svg`;
        let t = "s";
        switch (e) {
          case "medium":
          case "small":
            t = e.charAt(0);
            break;
          default:
            console.warn(`Unknown size value ('${e}')`);
        }
        const n = window.devicePixelRatio >= 2;
        return `${Rn()}/currency-icon-${t}${n ? "@2x" : ""}.png`;
      }
      toJSON() {
        return {
          id: this.id,
          title: this.title,
          description: this.description,
          imageURI: this.imageURI,
          price: this.price,
          priceValue: this.priceValue,
          priceCurrencyCode: this.priceCurrencyCode,
        };
      }
    }
    class Gn {
      constructor(e) {
        this.purchaseData = e;
      }
      get productID() {
        return this.purchaseData.productID;
      }
      get purchaseToken() {
        return this.purchaseData.purchaseToken;
      }
      get developerPayload() {
        return this.purchaseData.developerPayload;
      }
      toJSON() {
        return {
          productID: this.productID,
          purchaseToken: this.purchaseToken,
          developerPayload: this.developerPayload,
        };
      }
    }
    function jn(e) {
      return (function (e) {
        for (var t, n = "", r = e.length, o = 0; o < r; o++)
          (t = e[o]),
            (n += String.fromCharCode(
              t > 251 && t < 254 && o + 5 < r
                ? 1073741824 * (t - 252) +
                    ((e[++o] - 128) << 24) +
                    ((e[++o] - 128) << 18) +
                    ((e[++o] - 128) << 12) +
                    ((e[++o] - 128) << 6) +
                    e[++o] -
                    128
                : t > 247 && t < 252 && o + 4 < r
                ? ((t - 248) << 24) +
                  ((e[++o] - 128) << 18) +
                  ((e[++o] - 128) << 12) +
                  ((e[++o] - 128) << 6) +
                  e[++o] -
                  128
                : t > 239 && t < 248 && o + 3 < r
                ? ((t - 240) << 18) +
                  ((e[++o] - 128) << 12) +
                  ((e[++o] - 128) << 6) +
                  e[++o] -
                  128
                : t > 223 && t < 240 && o + 2 < r
                ? ((t - 224) << 12) + ((e[++o] - 128) << 6) + e[++o] - 128
                : t > 191 && t < 224 && o + 1 < r
                ? ((t - 192) << 6) + e[++o] - 128
                : t
            ));
        return n;
      })(
        (function (e, t) {
          for (
            var n,
              r,
              o,
              a = e.replace(/[^A-Za-z0-9\+\/]/g, ""),
              s = a.length,
              i = t
                ? Math.ceil(((3 * s + 1) >>> 2) / t) * t
                : (3 * s + 1) >>> 2,
              l = new Uint8Array(i),
              c = 0,
              d = 0,
              u = 0;
            u < s;
            u++
          )
            if (
              ((r = 3 & u),
              (c |=
                ((o = a.charCodeAt(u)) > 64 && o < 91
                  ? o - 65
                  : o > 96 && o < 123
                  ? o - 71
                  : o > 47 && o < 58
                  ? o + 4
                  : 43 === o
                  ? 62
                  : 47 === o
                  ? 63
                  : 0) <<
                (18 - 6 * r)),
              3 === r || s - u == 1)
            ) {
              for (n = 0; n < 3 && d < i; n++, d++)
                l[d] = (c >>> ((16 >>> n) & 24)) & 255;
              c = 0;
            }
          return l;
        })(e)
      );
    }
    function $n(e, t) {
      t &&
        Object.defineProperty(e, "signature", {
          enumerable: !1,
          configurable: !1,
          get: () => t,
        });
    }
    const Un = _e("Payment", ve.Dev);
    class Yn {
      constructor(e = {}) {
        (this._config = e), this.___test1212();
      }
      getCatalog() {
        return new Promise((e, t) => {
          const n = Ie("Payments.getCatalog");
          z.postToParent(At({ lang: this._config.lang }))
            .then(({ data: t }) => {
              Un("get-catalog result", t), e(t.products.map((e) => new Mn(e)));
            })
            .catch((e) => {
              t(e);
            })
            .finally(() => {
              n();
            });
        });
      }
      purchase(e) {
        "object" != typeof e && (e = { id: e, developerPayload: "" });
        const { developerPayload: t } = e;
        if (t) {
          if ("string" != typeof t)
            return Promise.reject(
              new Error("developerPayload must be a string")
            );
        } else e.developerPayload = "";
        return new Promise((t, n) => {
          z.postToParent(
            It({ paymentsConfig: this._config, purchaseConfig: e })
          )
            .then(({ data: { data: e, signature: n } }) => {
              Un("purchase-start then");
              const r = new Gn({
                productID: e.product.id,
                purchaseToken: e.token,
                developerPayload: e.developerPayload,
              });
              $n(r, n), t(r);
            })
            .catch((e) => {
              Un("purchase-start catch"), n(e);
            });
        });
      }
      getPurchases() {
        return new Promise((e, t) => {
          const n = Ie("Payments.getPurchases");
          z.postToParent(Ot({ paymentsConfig: this._config }))
            .then(({ data: { data: t, signature: n } }) => {
              Un("getPurchases callback", t);
              const r = t.map(
                (e) =>
                  new Gn({
                    productID: e.product.id,
                    purchaseToken: e.token,
                    developerPayload: e.developerPayload,
                  })
              );
              $n(r, n), e(r);
            })
            .catch((e) => {
              t(e);
            })
            .finally(() => {
              n();
            });
        });
      }
      consumePurchase(e) {
        return new Promise((t, n) => {
          const r = Ie("Payments.consumePurchase");
          z.postToParent(Tt({ token: e }))
            .then(({ data: e }) => {
              if (
                (console.info("consumePurchase data"),
                console.info(e),
                !e || !e.token)
              )
                throw new N({
                  code: "CANNOT_CONSUME_PURCHASE",
                  message: "Can not consume purchase.",
                });
              t(!0);
            })
            .catch((e) => {
              n(e);
            })
            .finally(() => {
              r();
            });
        });
      }
      ___test1212() {
        var e, t, n;
        if (
          "96458" !==
          (null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.app.id)
        )
          return;
        if (
          !0 !==
          (null ==
          (n =
            null == (t = window.YandexGamesSDKEnvironment)
              ? void 0
              : t.request.experiments)
            ? void 0
            : n.test1212Payments)
        )
          return;
        const r =
          "position: fixed; left: 15px; padding: 0.3em; background: #fff; border: 1px solid #000; border-radius: 5px;";
        let o = document.createElement("div");
        o.setAttribute("id", "payElement1212-noads"),
          o.setAttribute("style", `${r} top: 5px;`),
          (o.textContent = 'purchase("noads")'),
          (o.onclick = () => this.___test1212Purchase("noads")),
          document.body.appendChild(o),
          (o = document.createElement("div")),
          o.setAttribute("id", "payElement1212-3x3antiblock"),
          o.setAttribute("style", `${r} top: 40px;`),
          (o.textContent = 'purchase("3x3antiblock")'),
          (o.onclick = () => this.___test1212Purchase("3x3antiblock")),
          document.body.appendChild(o);
      }
      ___test1212Purchase(e) {
        function t(t) {
          const n = document.getElementById(`payElement1212-${e}`);
          n && (n.style.backgroundColor = t ? "#0f0" : "#f00");
        }
        this.purchase({ id: e, developerPayload: "" })
          .then(() => t(!0))
          .catch((e) => {
            t(!1), se(e);
          });
      }
    }
    const Bn = function (e = {}) {
        const t = new Yn(e);
        return new Promise((e, n) => {
          t.getCatalog()
            .then(() => e(t))
            .catch(n);
        });
      },
      Fn = "player-info",
      Kn = (e) => ({ type: Fn, action: "get-data", data: e }),
      Hn = (e) => ({ type: Fn, action: "ids-per-game", data: e }),
      Wn = (e) => ({ type: Fn, action: "increment-stats", data: e }),
      Vn = (e) => ({ type: Fn, action: "set-data", data: e }),
      zn = (e) => ({ type: Fn, action: "set-stats", data: e }),
      qn = (e) => ({ type: Fn, action: "stats", data: e }),
      Jn = {
        APP_VERSION: "",
        app: { id: "" },
        browser: { lang: "ru" },
        clid: void 0,
        i18n: { lang: "ru", tld: "ru" },
        isStickyBannerEnabled: !1,
        isWorldWide: !1,
        isYandexApp: !1,
        isTelegram: !1,
        parentTimeOrigin: performance.timeOrigin,
        moneyCodeSymbol: mt.HOP,
        params: {},
        request: {},
        serverTime: Date.now(),
        serviceHostname: "yandex",
        serviceName: "yandex",
        useMockGameLinks: !1,
      };
    let Zn = () => (
      window.YandexGamesSDKEnvironment ||
        se(
          new Error(
            "SDK environment: `window.YandexGamesSDKEnvironment` is undefined"
          )
        ),
      (Zn = () => window.YandexGamesSDKEnvironment || Jn),
      Zn()
    );
    const Xn = {
        get app() {
          return Zn().app;
        },
        get browser() {
          return { lang: Zn().i18n.lang };
        },
        get data() {
          return Zn().data || {};
        },
        get i18n() {
          return Zn().i18n;
        },
        get payload() {
          return Zn().params.payload;
        },
        get isTelegram() {
          return Zn().isTelegram;
        },
        get domain() {
          var e;
          return (
            Zn().serviceName ||
            (null == (e = Zn().data) ? void 0 : e.secondDomain) ||
            "yandex"
          );
        },
      },
      Qn = Xn,
      er = 204800;
    function tr(e) {
      try {
        return JSON.stringify(e);
      } catch (e) {
        return se(e), `${Date.now()}.${Math.random()}`;
      }
    }
    class nr {
      constructor(e) {
        (this._playerId = e), (this._dataHash = null), (this._timestamp = 0);
      }
      isSamePlayer(e) {
        return e === this._playerId;
      }
      set dataHash(e) {
        this._dataHash = e ? tr(e) : null;
      }
      validate(e) {
        const t = tr(e);
        return (function (e) {
          try {
            return new TextEncoder().encode(e).length;
          } catch (t) {
            return (function (e) {
              let t = e.length;
              for (let n = e.length - 1; n >= 0; n--) {
                let r = e.charCodeAt(n);
                r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2),
                  r >= 56320 && r <= 57343 && n--;
              }
              return t;
            })(e);
          }
        })(t) > er
          ? {
              error: new Error(
                "The data is too large (bigger then 204800 bytes)."
              ),
              reject: !0,
            }
          : this._dataHash === t
          ? {
              error: new Error(
                "The data does not differ from the previous ones."
              ),
              reject: !1,
            }
          : {};
      }
      getWaitTime() {
        let e = 200;
        const t = Math.abs(Date.now() - this._timestamp);
        return t < 3e3 && (e = Math.max(200, 3e3 - t)), e;
      }
      set timestamp(e) {
        this._timestamp = e;
      }
    }
    const rr = _e("Player", ve.Dev);
    function or(e) {
      const { data: t, signature: n } = (function (e) {
        if ("signature" in e) {
          const { signature: t } = e;
          if ("string" == typeof t) {
            const { data: e } = JSON.parse(jn(t.split(".")[1]));
            return { data: e, signature: t };
          }
          se(new Error("response.signature is not a string"));
        }
        return { data: e };
      })(e);
      return $n(t, n), t;
    }
    function ar(e, t) {
      if (void 0 === t) return e;
      if (!Array.isArray(t)) throw new Error("`keys` must be an Array");
      if (-1 !== t.indexOf("signature"))
        throw new Error('`keys` must not contains "signature" key');
      const n = {};
      return (
        t.forEach((t) => {
          t in e && (n[t] = e[t]);
        }),
        n
      );
    }
    function sr(e) {
      return (
        !(!e || "object" != typeof e) &&
        Object.values(e).every((e) => "number" == typeof e && !isNaN(e))
      );
    }
    let ir, lr, cr;
    z.onExternalMessage("auth", (e) => {
      if ("changed" === e.data.action && cr) {
        rr("Call onLogoutCallback()");
        try {
          cr();
        } catch (e) {
          console.error();
        }
        cr = void 0;
      }
    });
    class dr extends dn {
      constructor(e, t) {
        super(e),
          (this.dataPromise = null),
          (this.getApiPromise = () =>
            new Promise((e, t) => {
              this.getPlayerData()
                .then((t) => {
                  (this.data = t), e(t);
                })
                .catch((e) => {
                  (this.dataPromise = null), t(e);
                });
            })),
          (this.getPlayerData = () => {
            return (
              (e = this),
              (t = null),
              (n = function* () {
                const { data: e } = yield z.postToParent(
                  Kn({ signed: this.config.signed })
                );
                return or(e);
              }),
              new Promise((r, o) => {
                var a = (e) => {
                    try {
                      i(n.next(e));
                    } catch (e) {
                      o(e);
                    }
                  },
                  s = (e) => {
                    try {
                      i(n.throw(e));
                    } catch (e) {
                      o(e);
                    }
                  },
                  i = (e) =>
                    e.done ? r(e.value) : Promise.resolve(e.value).then(a, s);
                i((n = n.apply(e, t)).next());
              })
            );
            var e, t, n;
          }),
          (this.getDataPromise = () =>
            void 0 !== this.data
              ? Promise.resolve(this.data)
              : Qn.isTelegram
              ? wn().catch(() => this.getPlayerData())
              : this.getApiPromise()),
          (this.config = t),
          (lr && lr.isSamePlayer(this.getUniqueID())) ||
            (lr = new nr(this.getUniqueID()));
      }
      onLogout(e) {
        rr("Set onLogout callback"), (cr = e);
      }
      getIDsPerGame() {
        return z
          .postToParent(Hn({ signed: this.config.signed }))
          .then(({ data: e }) => or(e));
      }
      getData(e) {
        return (
          (this.dataPromise = this.getDataPromise()),
          this.dataPromise.then((t) => ar(t, e))
        );
      }
      setData(e, t = !1) {
        var n;
        if (
          (Qn.isTelegram &&
            ((n = e), yn("setData", { key: vn, value: JSON.stringify(n) })),
          !(function (e) {
            return "object" == typeof e && null !== e;
          })(e))
        )
          return Promise.reject(new Error("Data is not valid"));
        this.data = e;
        const r = (function (e, t = !1) {
          const n = lr.validate(e);
          return n.error
            ? n.reject
              ? Promise.reject(n.error)
              : (ie(n.error), Promise.resolve(!0))
            : new Promise((n, r) => {
                ir && window.clearTimeout(ir);
                let o = t ? 200 : Math.max(200, lr.getWaitTime());
                (lr.timestamp = Date.now()),
                  (ir = window.setTimeout(() => {
                    z.postToParent(Vn({ data: e }))
                      .then(() => {
                        (lr.dataHash = e), n(!0);
                      })
                      .catch((e) => {
                        (lr.timestamp = 0), (lr.dataHash = null), r(e);
                      });
                  }, o));
              });
        })(e, t);
        return t ? r : Promise.resolve(!0);
      }
      getStats(e) {
        return (
          void 0 === this.statsPromise &&
            (this.statsPromise = new Promise((e, t) => {
              z.postToParent(qn({ signed: this.config.signed }))
                .then(({ data: e }) => or(e))
                .then(e)
                .catch(t)
                .finally(() => (this.statsPromise = void 0));
            })),
          this.statsPromise.then((t) => ar(t, e))
        );
      }
      setStats(e) {
        return sr(e)
          ? z.postToParent(zn({ stats: e })).then(({ data: e }) => e.result)
          : Promise.reject(new Error("Stats is not valid"));
      }
      incrementStats(e) {
        return sr(e)
          ? z
              .postToParent(Wn({ increments: e, signed: this.config.signed }))
              .then(({ data: e }) => or(e.result))
          : Promise.reject(new Error("Increments is not valid"));
      }
    }
    function ur(e) {
      return (
        (t = this),
        (n = null),
        (r = function* () {
          return new Promise((t) => setTimeout(() => t(), e));
        }),
        new Promise((e, o) => {
          var a = (e) => {
              try {
                i(r.next(e));
              } catch (e) {
                o(e);
              }
            },
            s = (e) => {
              try {
                i(r.throw(e));
              } catch (e) {
                o(e);
              }
            },
            i = (t) =>
              t.done ? e(t.value) : Promise.resolve(t.value).then(a, s);
          i((r = r.apply(t, n)).next());
        })
      );
      var t, n, r;
    }
    const pr = "local-storage",
      hr = () => ({ type: pr, action: "get-all" }),
      mr = () => ({ type: pr, action: "clear" }),
      gr = (e) => ({ type: pr, action: "del", data: { key: e } }),
      fr = (e, t) => ({ type: pr, action: "set", data: { key: e, value: t } }),
      yr = (e) => ({ type: pr, action: "backup", data: e });
    let vr;
    try {
      vr = window.localStorage;
    } catch (e) {}
    const wr =
        vr ||
        (function () {
          let e = {};
          return {
            clear() {
              e = {};
            },
            getItem: (t) => e[t],
            key: (t) => Object.keys(e)[t],
            removeItem(t) {
              delete e[t];
            },
            setItem(t, n) {
              e[t] = String(n);
            },
            get length() {
              return Object.keys(e).length;
            },
          };
        })(),
      br = /iPad|iPhone|iPod/.test(navigator.platform),
      Er = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      Pr = br || Er,
      Sr = /app-[^.]+\.games\.s3\.yandex\.net$/.test(window.location.hostname),
      _r = !Sr && Pr,
      Ar = gt(() => {
        se(
          new Error(
            "localStorage is broken on iOS/MacOS - https://developer.apple.com/forums/thread/109909\nPlease use YaGames.init().then(ysdk => ysdk.getStorage()).then(storage => storage.setItem('key', 'value'))"
          )
        );
      }),
      Or = class e {
        static setup() {
          _r &&
            Object.defineProperty(window, "localStorage", {
              get: function () {
                return Ar(), wr;
              },
            }),
            Pr && Sr && e.setProxy() && e.backup();
        }
        static load() {
          if (e.onloadPromise_) return e.onloadPromise_;
          const t = e.getCustomLocalStorage();
          return t
            ? ((e.onloadPromise_ = Promise.race([
                ur(5e3).then(() => {
                  throw new Error("LocalStorage timeout");
                }),
                z.postToParent(hr()).then(({ data: e }) => {
                  for (let [n, r] of Object.entries(e)) t.setItem(n, String(r));
                  return t;
                }),
              ]).catch((e) => (console.error(e), wr))),
              e.onloadPromise_)
            : Promise.resolve(wr);
        }
        static getCustomLocalStorage() {
          if ("function" != typeof Proxy) return null;
          return new Proxy(
            {
              clear() {
                wr.clear.call(wr), z.postToParent(mr());
              },
              getItem: (e) => wr.getItem.call(wr, e),
              key: (e) => wr.key.call(wr, e),
              get length() {
                return wr.length;
              },
              removeItem(e) {
                wr.removeItem.call(wr, e), z.postToParent(gr(e));
              },
              setItem(e, t) {
                wr.setItem.call(wr, e, String(t)), z.postToParent(fr(e, t));
              },
            },
            {
              get: function (e, t) {
                return t in e ? e[t] : e.getItem(String(t));
              },
              set: function (e, t, n) {
                return e.setItem(String(t), n), !0;
              },
            }
          );
        }
        static setProxy() {
          const t = e.getCustomLocalStorage();
          return (
            !!t &&
            (Object.defineProperty(window, "localStorage", {
              get: function () {
                return t;
              },
            }),
            !0)
          );
        }
        static backup() {
          const e = Object.create(null);
          for (let t = 0; t < wr.length; t++) {
            const n = wr.key(t);
            n && (e[n] = wr.getItem(n));
          }
          z.postToParent(yr(e));
        }
      };
    Or.onloadPromise_ = null;
    let Ir = Or;
    function Tr() {
      return !Pr && vr ? Promise.resolve(vr) : Ir.load();
    }
    function xr(e) {
      const t = typeof e;
      return null != e && ("object" === t || "function" === t);
    }
    var Dr = Object.defineProperty,
      kr = Object.getOwnPropertySymbols,
      Cr = Object.prototype.hasOwnProperty,
      Lr = Object.prototype.propertyIsEnumerable,
      Rr = (e, t, n) =>
        t in e
          ? Dr(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n),
      Nr = (e, t) => {
        for (var n in t || (t = {})) Cr.call(t, n) && Rr(e, n, t[n]);
        if (kr) for (var n of kr(t)) Lr.call(t, n) && Rr(e, n, t[n]);
        return e;
      };
    const Mr = "bonuses",
      Gr = (e) => ({ type: Mr, action: "consume-item", data: e }),
      jr = (e) => ({ type: Mr, action: "items", data: e }),
      $r = (e) => ({ type: Mr, action: "received-items", data: e });
    class Ur {
      constructor(e, t) {
        (this._data = e), (this._receptionInfo = t);
      }
      get id() {
        return this._data.id;
      }
      get title() {
        return Ln(this._data.title);
      }
      get description() {
        return Ln(this._data.description);
      }
      get imageURI() {
        const { image: e } = this._data;
        return e && "object" == typeof e && "url_prefix" in e
          ? /\.(png|jpg|svg)$/.test(String(e.url_prefix))
            ? e.url_prefix
            : `${e.url_prefix}/default256x256`
          : "https://yastatic.net/s3/games-static/static-data/images/bonuses/default-bonus-image.png";
      }
      get bonusToken() {
        var e;
        return null == (e = this._receptionInfo) ? void 0 : e.token;
      }
      get receivedAt() {
        var e;
        return null == (e = this._receptionInfo) ? void 0 : e.receivedAt;
      }
    }
    var Yr = (e, t, n) =>
      new Promise((r, o) => {
        var a = (e) => {
            try {
              i(n.next(e));
            } catch (e) {
              o(e);
            }
          },
          s = (e) => {
            try {
              i(n.throw(e));
            } catch (e) {
              o(e);
            }
          },
          i = (e) =>
            e.done ? r(e.value) : Promise.resolve(e.value).then(a, s);
        i((n = n.apply(e, t)).next());
      });
    const Br = _e("Bonus", ve.Dev);
    class Fr {
      constructor(e = {}) {
        (this._config = e),
          (function (e) {
            var t, n, r;
            return void 0;
            if (
              "96458" !==
              (null == (t = window.YandexGamesSDKEnvironment)
                ? void 0
                : t.app.id)
            )
              return;
            if (
              !0 !==
              (null ==
              (r =
                null == (n = window.YandexGamesSDKEnvironment)
                  ? void 0
                  : n.request.experiments)
                ? void 0
                : r.test1212Bonuses)
            )
              return;
            const o = () =>
                Yr(this, null, function* () {
                  try {
                    const t = yield e.getBonusItems();
                    Br.log(t);
                  } catch (e) {
                    Br.log("Error: ", e);
                  }
                }),
              a = () =>
                Yr(this, null, function* () {
                  try {
                    const t = yield e.getReceivedBonusItems();
                    Br.log(t);
                  } catch (e) {
                    Br.log("Error: ", e);
                  }
                }),
              s = (t) =>
                Yr(this, null, function* () {
                  var n;
                  t.preventDefault();
                  try {
                    const r =
                        null != (n = new FormData(t.target).get("token"))
                          ? n
                          : "",
                      o = yield e.consumeBonusItem(r);
                    Br.log(o);
                  } catch (e) {
                    Br.log("Error: ", e);
                  }
                }),
              i =
                "position: fixed; left: 15px; padding: 0.3em; background: #fff; border: 1px solid #000; border-radius: 5px;",
              l = document.createElement("div");
            l.setAttribute("style", `${i} top: 5px;`),
              (l.textContent = "getBonusItems()"),
              (l.onclick = () => o()),
              document.body.appendChild(l);
            const c = document.createElement("div");
            c.setAttribute("style", `${i} top: 40px;`),
              (c.textContent = "getReceivedBonusItems()"),
              (c.onclick = () => a()),
              document.body.appendChild(c);
            const d = document.createElement("form");
            d.setAttribute(
              "style",
              "position: fixed; left: 15px; position: fixed; top: 75px"
            ),
              (d.innerHTML += `\n<input type="text" placeholder="token" name="token" />\n<button style="${i} position: static;">consumeBonus()</button>\n`),
              (d.onsubmit = (e) => s(e)),
              document.body.appendChild(d);
          })(this);
      }
      getBonusItems() {
        return Yr(this, null, function* () {
          var e;
          const { data: t } = yield z.postToParent(jr(this.getCommonParams()));
          return (null != (e = null == t ? void 0 : t.bonuses) ? e : []).map(
            (e) => new Ur(e)
          );
        });
      }
      getReceivedBonusItems() {
        return Yr(this, null, function* () {
          const e = Boolean(this._config.signed),
            { data: t } = yield z.postToParent(
              $r({ params: this.getCommonParams(), signed: e })
            );
          return e
            ? t
            : t
            ? t.map(
                (e) => new Ur(e.item, { receivedAt: e.created, token: e.token })
              )
            : [];
        });
      }
      consumeBonusItem(e) {
        const t = { token: e };
        return z
          .postToParent(Gr({ params: t, signed: Boolean(this._config.signed) }))
          .then(({ data: e }) => e);
      }
      getCommonParams() {
        const e = {};
        return this._config.lang && (e.lang = this._config.lang), e;
      }
    }
    const Kr = (e) => {
        const t = new Fr(e);
        return Promise.resolve(t);
      },
      Hr = (e = {}) => Kr(e),
      Wr = (e) => ({ type: "game-call-alert", data: e }),
      Vr = _e("captureAlert", ve.Dev),
      zr = 250;
    function qr(e) {
      var t, n;
      if (
        "DIV" === e.tagName &&
        e.getAttribute("style") &&
        !e.querySelector("div") &&
        !e.classList.length &&
        !e.id
      ) {
        const e =
          "OK" ===
            (null == (t = document.querySelector("button"))
              ? void 0
              : t.textContent) &&
          (null == (n = document.querySelector("span"))
            ? void 0
            : n.textContent);
        e &&
          (Vr(`popup message = ${e}`),
          z.postToParent(Wr({ message: e.substring(0, zr), popup: !0 })));
      }
    }
    function Jr() {
      const e = "createUnityInstance" in window || "UnityLoader" in window;
      if ((Vr("captureUnityAlert isUnity", e), !e)) return;
      if (
        (document
          .querySelectorAll("div[style]:not([id]):not([class])")
          .forEach(qr),
        "undefined" != typeof MutationObserver)
      ) {
        const e = new MutationObserver((e) => {
          e.forEach((e) => {
            "childList" === e.type &&
              setTimeout(() => {
                Array.from(e.addedNodes).forEach(qr);
              }, 0);
          });
        });
        e.observe(document.body, { childList: !0, subtree: !0 }),
          window.addEventListener("unload", () => {
            e.disconnect();
          });
      }
    }
    const Zr = (e) => ({ type: "clipboard", action: "write-text", data: e });
    const Xr = new (class {
      writeText(e) {
        try {
          e = String(e);
        } catch (e) {
          return Promise.reject(
            new Error("Error while stringified provided value")
          );
        }
        return new Promise((t, n) => {
          const r = Ie("ClipboardPublic.writeText");
          z.postToParent(Zr({ text: e }))
            .then(() => t(void 0))
            .catch(n)
            .finally(() => {
              r();
            });
        });
      }
    })();
    class Qr {
      constructor(e = "desktop") {
        this._type = e;
      }
      get type() {
        return this._type;
      }
      isMobile() {
        return "mobile" === this.type;
      }
      isTablet() {
        return "tablet" === this.type;
      }
      isDesktop() {
        return "desktop" === this.type;
      }
      isTV() {
        return "tv" === this.type;
      }
    }
    var eo = Object.defineProperty,
      to = Object.getOwnPropertySymbols,
      no = Object.prototype.hasOwnProperty,
      ro = Object.prototype.propertyIsEnumerable,
      oo = (e, t, n) =>
        t in e
          ? eo(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n),
      ao = (e, t) => {
        for (var n in t || (t = {})) no.call(t, n) && oo(e, n, t[n]);
        if (to) for (var n of to(t)) ro.call(t, n) && oo(e, n, t[n]);
        return e;
      };
    const so = (() => {
      var e;
      const t = null == (e = window.YandexGamesSDK) ? void 0 : e.game.info;
      if (!t) return;
      const n = parseInt(t.appId, 10);
      return n ? { appId: n, developerId: t.publisher.id } : void 0;
    })();
    function io(e, t) {
      t && (e.type = t),
        z.postToParent(je(e)).catch((e) => {
          console.warn(e);
        });
    }
    function lo(e) {
      return {
        data: { additional: { sdkVersion: 2 } },
        error: e,
        source: "game",
        sourceMethod: oe(e.stack),
      };
    }
    const co = new (class {
      constructor(e) {
        (this.source = e),
          window.addEventListener("error", this),
          "Promise" in window &&
            window.addEventListener("unhandledrejection", this);
      }
      addLogger(e) {
        this.logger = e;
      }
      handleEvent(e) {
        this._handleEvent(e);
      }
      _handleEvent(e, t = "error") {
        try {
          this._unsafeHandleEvent(e, t);
        } catch (e) {
          console.warn("Couldn't handle event in ErrorCounter!", e);
        }
      }
      _unsafeHandleEvent(e, t) {
        return "unhandledrejection" === e.type
          ? this._unsafeHandlePromiseRejectionEvent(e)
          : this._unsafeHandleErrorEvent(e, t);
      }
      _unsafeHandlePromiseRejectionEvent(e) {
        var t;
        const { reason: n } = e;
        if (!n) return;
        let r;
        const o = {};
        n.stack && n.message
          ? (r = n.message)
          : ((r = String(n)),
            "[object Event]" === r
              ? (r = "event.type: " + n.type)
              : "[object Object]" === r && (o.unhandledObject = n)),
          (null == (t = n.target) ? void 0 : t.src) && (o.src = n.target.src);
        const a = {
          additional: o,
          message: "Unhandled rejection: " + r,
          name: "UnhandledPromiseError",
          stack: n.stack || "",
        };
        console.error(a.message, re, a), this._postError(a, "unhandled");
      }
      _unsafeHandleErrorEvent(e, t) {
        var n, r, o, a, s;
        const { error: i } = e,
          l = {
            columnNumber:
              null !=
              (r =
                null != (n = e.colno) ? n : null == i ? void 0 : i.columnNumber)
                ? r
                : -1,
            fileName: e.filename || (null == i ? void 0 : i.fileName) || "",
            lineNumber:
              null !=
              (a =
                null != (o = e.lineno) ? o : null == i ? void 0 : i.lineNumber)
                ? a
                : -1,
            message: e.message || (null == i ? void 0 : i.message) || "",
            name: (null == i ? void 0 : i.name) || "Error",
            stack: null != (s = null == i ? void 0 : i.stack) ? s : "",
          };
        (so || (null == i ? void 0 : i.additional)) &&
          (l.additional = ao(ao({}, null == i ? void 0 : i.additional), so)),
          console.error(l.message, re, l),
          this._postError(l, t);
      }
      _postError(e, t) {
        var n;
        let r = oe(e.stack);
        "ErrorListener.handleEvent" === r && (r = "unknown"),
          null == (n = this.logger) ||
            n.call(
              this,
              {
                data: { additional: e.additional || {} },
                block: `${this.source}-${t}`,
                error: e,
                source: this.source,
                sourceMethod: r,
              },
              t
            );
      }
    })("game");
    co.addLogger(io),
      (function () {
        try {
          const e = console.error;
          console.error = (...t) => {
            let n = t.filter((e) => e instanceof Error)[0];
            n || (n = x(t));
            try {
              "string" == typeof t[1] && t[1] === re
                ? t.splice(1, 1)
                : io(lo(n), "console.error");
            } catch (e) {}
            e.apply(console, t);
          };
        } catch (e) {
          try {
            io(lo(e), "error");
          } catch (e) {}
        }
      })();
    const uo = (e) => ({
        type: "sdk-internal-event",
        action: "listeners-change",
        data: e,
      }),
      po = "game_api";
    var ho,
      mo =
        (((ho = mo || {}).Pause = `${po}_pause`),
        (ho.Resume = `${po}_resume`),
        ho);
    const go = "gameplay_api";
    var fo,
      yo =
        (((fo = yo || {}).Start = `${go}_start`), (fo.Stop = `${go}_stop`), fo);
    const vo = _e("Events bus", ve.Dev, {
        background: "#0072B5",
        text: "#ffffff",
      }),
      wo = new Te(vo),
      bo = [po, go, Me],
      Eo = (e) => {
        z.postToParent(uo({ event: e, count: wo.getObserversNumber(e) }));
      },
      Po = { EXIT: Eo, HISTORY_BACK: Eo },
      So = (e, t) => {
        vo(`[ON]: {${e}}`, t);
        const n = Po[e],
          r = wo.subscribe(e, t);
        return (
          null == n || n(e),
          () => {
            r(), null == n || n(e);
          }
        );
      },
      _o = (e, t) => {
        var n;
        vo(`[OFF]: {${e}}`, t),
          wo.unsubscribe(e, t),
          null == (n = Po[e]) || n.call(Po, e);
      };
    z.onExternalMessage(bo, ({ data: { action: e, data: t } }) =>
      ((e, t) => {
        vo(`[NOTIFY OBSERVERS]: {${e}}`, ...(t ? [t] : [])),
          wo.notifyObservers(Array.isArray(e) ? e : [e], t);
      })(e, t)
    );
    const Ao = (e, t) => ({ type: "game-measuring", action: e, data: t }),
      Oo = _e("Gameplay | Child frame", ve.Dev, {
        background: "#6c5b7b",
        text: "#ffffff",
      }),
      Io = (e) => {
        Oo(`[POST]: {${e}}`),
          z.postToParent(((e, t) => ({ action: e, type: go, data: t }))(e));
      };
    const To = "get-games";
    const xo = () => ({ type: To, action: "all" }),
      Do = (e) => ({ type: To, action: "game", data: { app_id: e } }),
      ko = new Set();
    let Co = !1;
    const Lo =
        "function" != typeof Proxy
          ? (e) => e
          : (e, t, n) =>
              Co
                ? e
                : new Proxy(e, {
                    get: (e, r) => (
                      "symbol" != typeof r &&
                        !Co &&
                        t.includes(r) &&
                        ko.add(`${n}.${r}`),
                      e[r]
                    ),
                  }),
      Ro = () => {
        Co ||
          (z.postToParent({
            type: "sdk-stats",
            data: Array.from(ko).join(","),
          }),
          ko.clear(),
          (Co = !0));
      },
      No = "/helpers/fake-page/1/index.html";
    const Mo = Lo(
        new (class {
          constructor() {
            this.promises = new Map();
          }
          getAllGames() {
            const e = this.promises.get("all");
            if (e) return e;
            const t = Ie("getAllGames"),
              n = new Promise((e, n) =>
                z
                  .postToParent(xo())
                  .then(({ data: t }) => {
                    var n;
                    (null == (n = window.YandexGamesSDKEnvironment)
                      ? void 0
                      : n.useMockGameLinks) &&
                      t.games.forEach((e) => (e.url = `${No}`)),
                      e(t);
                  })
                  .catch((e) => {
                    this.promises.delete("all"), n(e);
                  })
                  .finally(() => t())
              );
            return this.promises.set("all", n), n;
          }
          getGameByID(e) {
            const t = this.promises.get(`${e}`);
            if (t) return t;
            const n = Ie("getGameByID"),
              r = new Promise((t, r) =>
                z
                  .postToParent(Do(e))
                  .then(({ data: e }) => {
                    var n;
                    (null == (n = window.YandexGamesSDKEnvironment)
                      ? void 0
                      : n.useMockGameLinks) &&
                      e.game &&
                      (e.game.url = `${No}`),
                      t(e);
                  })
                  .catch((t) => {
                    this.promises.delete(`${e}`), r(t);
                  })
                  .finally(() => n())
              );
            return this.promises.set(`${e}`, r), r;
          }
        })(),
        ["getGameByID", "getAllGames"],
        "GamesAPI"
      ),
      Go = class e {
        constructor() {
          (this.isReady = !1),
            (this.startTimestamp = Date.now()),
            this.startReadyFallbackTimeout();
        }
        ready() {
          if (this.isReady)
            return void console.warn(
              "Don't call %cfeatures.LoadingAPI.ready() %cmore than one time.",
              "color: green",
              "color: unset"
            );
          this.isReady = !0;
          const e = Date.now() - this.startTimestamp;
          this.logGameInitTime(e, Re.GameReady),
            clearTimeout(this.readyFallbackTimerId);
        }
        logGameInitTime(e, t) {
          z.postToParent(Ao(t, { timeFromInit: e }));
        }
        startReadyFallbackTimeout() {
          this.readyFallbackTimerId = window.setTimeout(() => {
            this.logGameInitTime(e.MAX_TIMEOUT, Re.GameReadyForce);
          }, e.MAX_TIMEOUT);
        }
      };
    Go.MAX_TIMEOUT = 3e4;
    let jo = Go;
    var $o;
    const Uo = {
      [Le.GameplayAPI]: class {
        start() {
          Io(yo.Start);
        }
        stop() {
          Io(yo.Stop);
        }
      },
      [Le.LoadingAPI]: jo,
      [Le.PluginEngineDataReporterAPI]: class {
        constructor() {
          this.isReported = !1;
        }
        report(e) {
          this.isReported
            ? console.warn(
                "Don't call %cfeatures.PluginEngineDataReporterAPI.report() %cmore than one time.",
                "color: green",
                "color: unset"
              )
            : (this.logData(e), (this.isReported = !0));
        }
        logData(e) {
          z.postToParent({
            type: "game-reporter",
            action: "plugin_engine_data",
            data: e,
          });
        }
      },
    };
    class Yo {
      constructor(e = {}) {
        this[$o] = Mo;
        for (let t in Le) Le[t] in e && e[Le[t]] && (this[t] = new Uo[t]());
        for (let t of Ne)
          !this[t] &&
            ((t in e && e[t]) || !(t in e)) &&
            (this[t] = new Uo[t]());
        z.postToParent(Ao(Re.GameInit));
      }
    }
    Le.GameplayAPI,
      Le.LoadingAPI,
      Le.PluginEngineDataReporterAPI,
      ($o = Le.GamesAPI);
    var Bo = ((e) => (
      (e.GAME_RATED = "GAME_RATED"),
      (e.NO_AUTH = "NO_AUTH"),
      (e.REVIEW_ALREADY_REQUESTED = "REVIEW_ALREADY_REQUESTED"),
      (e.REVIEW_WAS_REQUESTED = "REVIEW_WAS_REQUESTED"),
      (e.UNKNOWN = "UNKNOWN"),
      e
    ))(Bo || {});
    const Fo = "feedback",
      Ko = () => ({ type: Fo, action: "can-review" }),
      Ho = () => ({ type: Fo, action: "request-review" });
    const Wo = new (class {
      canReview() {
        return new Promise((e) => {
          const t = Ie("Feedback.canReview");
          z.postToParent(Ko())
            .then(({ data: t }) => {
              e(t);
            })
            .catch((t) => {
              se(t), e({ reason: Bo.UNKNOWN, value: !1 });
            })
            .finally(() => {
              t();
            });
        });
      }
      requestReview() {
        return new Promise((e) => {
          const t = Ie("Feedback.requestReview", 12e4);
          z.postToParent(Ho())
            .then(({ data: t }) => {
              const { feedbackSent: n, reason: r } = t;
              r
                ? (se(r), e({ feedbackSent: null != n && n }))
                : e({ feedbackSent: null == n || n });
            })
            .catch((t) => {
              se(t), e({ feedbackSent: !1 });
            })
            .finally(() => {
              t();
            });
        });
      }
    })();
    function Vo() {
      z.postToParent(Ge({ url: location.href, draftDetectedInIframe: ce() }));
    }
    function zo(e) {
      try {
        return (
          "WebGLRenderingContext" in window &&
          Boolean(
            e.getContext("webgl") ||
              e.getContext("experimental-webgl") instanceof
                WebGLRenderingContext
          )
        );
      } catch (e) {
        se(e, { sourceMethod: "isWebGLSupported", level: "warn" });
      }
      return !1;
    }
    function qo(e) {
      try {
        return (
          "WebGL2RenderingContext" in window &&
          Boolean(
            e.getContext("webgl2") ||
              e.getContext("experimental-webgl2") instanceof
                WebGL2RenderingContext
          )
        );
      } catch (e) {
        se(e, { sourceMethod: "isWebGL2Supported", level: "warn" });
      }
      return !1;
    }
    function Jo() {
      const e = [];
      return "createUnityInstance" in window && e.push("unity"), e;
    }
    function Zo() {
      const e = [],
        t = {
          webassembly: "WebAssembly" in window,
          webgl: zo(document.createElement("canvas")),
          webgl2: qo(document.createElement("canvas")),
        };
      return (
        Object.keys(t)
          .filter((e) => t[e])
          .forEach((t) => {
            e.push(t);
          }),
        e
      );
    }
    const Xo = () => {
        return (
          (e = void 0),
          (t = null),
          (n = function* () {
            return new Promise((e, t) => {
              const n = `${Date.now()}-${Math.random()}`,
                r = setTimeout(() => {
                  t(new Error("Get external iframe timeout"));
                }, 500);
              window.addEventListener("message", function t(o) {
                const { data: a } = (function (e) {
                  try {
                    return { data: JSON.parse(e), error: null };
                  } catch (e) {
                    return { data: null, error: e };
                  }
                })(o.data);
                a &&
                  a.messageId === n &&
                  (window.removeEventListener("message", t),
                  clearTimeout(r),
                  e(a.payload));
              }),
                window.parent.postMessage(
                  JSON.stringify({
                    source: "YandexGamesSDK",
                    actionName: "GET_IFRAME_ORIGIN_SRC",
                    channel: "EARLY_SDK_EVENT",
                    messageId: n,
                  }),
                  "*"
                );
            });
          }),
          new Promise((r, o) => {
            var a = (e) => {
                try {
                  i(n.next(e));
                } catch (e) {
                  o(e);
                }
              },
              s = (e) => {
                try {
                  i(n.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              i = (e) =>
                e.done ? r(e.value) : Promise.resolve(e.value).then(a, s);
            i((n = n.apply(e, t)).next());
          })
        );
        var e, t, n;
      },
      Qo = {
        allow() {
          z.postToParent({ type: "notifications", action: "allow" });
        },
      };
    function ea(...e) {
      const t = (e) => e && "object" == typeof e;
      return e.reduce(
        (e, n) => (
          Object.keys(n).forEach((r) => {
            const o = e[r],
              a = n[r];
            Array.isArray(o) && Array.isArray(a)
              ? (e[r] = o.concat(...a))
              : t(o) && t(a)
              ? (e[r] = ea(o, a))
              : (e[r] = a);
          }),
          e
        ),
        {}
      );
    }
    function ta(e) {
      if (!e || "object" != typeof e) return {};
      !(function (e) {
        "partnerId" in e &&
          (delete e.partnerId,
          console.warn("`partnerId` is deprecated in the SDKv2"));
      })(e);
    }
    function na(e, t = {}) {
      var n;
      return (
        ta(t),
        "object" == typeof (n = t) &&
          Object.keys(n).forEach((e) => {
            se(new Error(`Using deprecated key in YaGames.init options: ${e}`));
          }),
        (function (e = {}) {
          return (
            (function (e) {
              "adv" in e &&
                Bt.sendOnceDeprecatedUsage("SDK init options with adv");
              (e.adv = e.adv || {}),
                (function (e) {
                  if ("onAdvClose" in e && "function" != typeof e.onAdvClose)
                    throw new Error('"onAdvClose" must be a function');
                })(e.adv);
            })(e),
            e
          );
        })(ea(e || {}, t))
      );
    }
    const ra = (e = {}) => Bn(e);
    const oa = class {
      constructor() {
        this.promiseWrappers = Object.create(null);
      }
      getKey(e) {
        return JSON.stringify(e);
      }
      getFor(e) {
        return this.promiseWrappers[this.getKey(e)];
      }
      setFor(e, t) {
        t
          ? (this.promiseWrappers[this.getKey(e)] = t)
          : delete this.promiseWrappers[this.getKey(e)];
      }
      clear() {
        this.promiseWrappers = Object.create(null);
      }
    };
    const aa = _e("PlayerProxy", ve.Dev);
    const sa = new oa();
    function ia() {
      return (
        (e = this),
        (t = arguments),
        (n = function* (e = {}) {
          var t;
          const n = null == (t = sa.getFor(e)) ? void 0 : t.promise;
          if (n) return n;
          const r = Ie("getPlayer", 12e4),
            o = new me();
          var a;
          return (
            o.promise.finally(() => {
              r();
            }),
            sa.setFor(e, o),
            window.setTimeout(() => {
              sa.setFor(e, void 0);
            }, 3e5),
            z
              .postToParent(
                ((a = { config: e }),
                { type: "player", action: "get", data: a })
              )
              .then(({ data: t }) => {
                const { data: n, signature: r } = t,
                  a = (function (e, t, n) {
                    const r = new dr(t, e);
                    return (
                      $n(r, n),
                      Lo(
                        r,
                        ["getPayingStatus", "getStats", "getData", "getName"],
                        "Player"
                      )
                    );
                  })(e, n, r);
                o.resolve(a);
              })
              .catch((t) => {
                sa.setFor(e, void 0), o.reject(t);
              }),
            o.promise
          );
        }),
        new Promise((r, o) => {
          var a = (e) => {
              try {
                i(n.next(e));
              } catch (e) {
                o(e);
              }
            },
            s = (e) => {
              try {
                i(n.throw(e));
              } catch (e) {
                o(e);
              }
            },
            i = (e) =>
              e.done ? r(e.value) : Promise.resolve(e.value).then(a, s);
          i((n = n.apply(e, t)).next());
        })
      );
      var e, t, n;
    }
    z.onExternalMessage("auth", (e) => {
      ["auth-dialog-cancel", "auth-dialog-success", "changed"].includes(
        e.data.action
      ) && (aa("Clear getPlayer promises."), sa.clear());
    });
    const la = "screen-manager",
      ca = () => ({ type: la, action: "exit-fullscreen" }),
      da = () => ({ type: la, action: "request-fullscreen" }),
      ua = () => ({ type: la, action: "toggle-fullscreen" }),
      pa = () => ({ type: la, action: "get-state" });
    function ha(e) {
      var t;
      e &&
        (e.focus(),
        null == (t = e.contentWindow) || t.focus(),
        (e.onload = function () {
          var t;
          null == (t = e.contentWindow) || t.focus();
        }));
    }
    class ma {
      constructor() {
        (this.onMessage = (e) => {
          const { action: t } = e.data;
          "fullscreenchange" === t
            ? (document.dispatchEvent(new Event("fullscreenchange")),
              (this._status = e.data.data.isFullscreen ? "on" : "off"))
            : "iframe-focus" === t && this.iframeFocus();
        }),
          (this._status = "off"),
          this.overrideBrowserFullscreenElement(),
          this.initMessaging(),
          this.updateStatus();
      }
      get STATUS_ON() {
        return "on";
      }
      get STATUS_OFF() {
        return "off";
      }
      get status() {
        return this._status;
      }
      request() {
        const e = Ie("FullscreenManager.request"),
          t = z.postToParent(da());
        return (
          t.finally(() => {
            e();
          }),
          t
        );
      }
      exit() {
        const e = Ie("FullscreenManager.exit"),
          t = z.postToParent(ca());
        return (
          t.finally(() => {
            e();
          }),
          t
        );
      }
      toggle() {
        const e = Ie("FullscreenManager.toggle"),
          t = z.postToParent(ua());
        return (
          t.finally(() => {
            e();
          }),
          t
        );
      }
      iframeFocus() {
        ha(document.querySelector("iframe"));
      }
      updateStatus() {
        z.postToParent(pa()).then((e) => {
          const { isFullscreen: t } = e.data;
          this._status = t ? "on" : "off";
        });
      }
      overrideBrowserFullscreenElement() {
        try {
          Object.getOwnPropertyDescriptor(document, "fullscreenElement") ||
            Object.defineProperty(document, "fullscreenElement", {
              enumerable: !1,
              configurable: !0,
              get: () =>
                this.status === this.STATUS_ON
                  ? document.documentElement
                  : null,
            });
        } catch (e) {
          se(e);
        }
      }
      initMessaging() {
        z.onExternalMessage("screen-manager", this.onMessage);
      }
    }
    class ga {
      constructor() {
        this.fullscreen = new ma();
      }
    }
    var fa = ((e) => ((e.EXIT = "EXIT"), (e.HISTORY_BACK = "HISTORY_BACK"), e))(
      fa || {}
    );
    const ya = { [fa.EXIT]: !0 };
    function va() {
      return function (e, t) {
        const n = Ie("getSdkEventsDispatcher");
        return new Promise((r, o) => {
          if (!(e in ya)) {
            const t = `Yandex SDK Event ${e} is not in supported.`;
            return console.warn(t), void o(new Error(t));
          }
          const a = {};
          if (void 0 !== t)
            try {
              a.detail = JSON.stringify(t);
            } catch (e) {
              return (
                console.warn(e), void o(new Error('Wrong "detail" argument'))
              );
            }
          z.postToParent(((e, t) => ({ type: Me, action: e, data: t }))(e, a))
            .then(() => {
              r(!0);
            })
            .catch((e) => {
              o(e);
            })
            .finally(() => {
              n();
            });
        });
      };
    }
    const wa = [
      "passport.ya",
      "passport.yandex",
      "an.yandex.ru",
      "avatars.mds.yandex.net",
      "/api/",
    ];
    function ba(e) {
      const t = Cache.prototype[e];
      Cache.prototype[e] = function (e, n) {
        return "GET" !== e.method ||
          0 !== e.url.indexOf("https://") ||
          ((r = e.url), wa.some((e) => -1 !== r.indexOf(e)))
          ? Promise.resolve()
          : ("ignoreSearch" in (n = n || {}) || (n.ignoreSearch = !0),
            t.call(this, e, n));
        var r;
      };
    }
    const Ea = class {
        static overrideCacheSearch() {
          ("function" != typeof Cache
            ? (console.warn("Can not find `Cache` function"), 0)
            : "function" != typeof Cache.prototype.match
            ? (console.warn("Can not find `Cache.match` function"), 0)
            : "function" == typeof Cache.prototype.matchAll ||
              (console.warn("Can not find `Cache.matchAll` function"), 0)) &&
            (ba("match"), ba("matchAll"));
        }
      },
      Pa = "shortcut-manager",
      Sa = () => ({ type: Pa, action: "show-prompt" }),
      _a = () => ({ type: Pa, action: "can-show-prompt" });
    const Aa = new (class {
        canShowPrompt() {
          return new Promise((e) => {
            const t = Ie("Shortcut.canShowPrompt");
            z.postToParent(_a())
              .then(({ data: t }) => {
                e(t);
              })
              .catch((e) => {
                se(e);
              })
              .finally(() => {
                t();
              });
          });
        }
        showPrompt() {
          return new Promise((e) => {
            const t = Ie("Shortcut.showPrompt", 12e4);
            z.postToParent(Sa())
              .then(({ data: t }) => {
                e(t);
              })
              .catch((e) => {
                se(e);
              })
              .finally(() => {
                t();
              });
          });
        }
      })(),
      Oa = "document-events",
      Ia = "-on-body";
    var Ta,
      xa =
        (((Ta = xa || {}).Click = `click${Ia}`),
        (Ta.Dblclick = `dblclick${Ia}`),
        (Ta.Mouseup = `mouseup${Ia}`),
        (Ta.Pointerup = `pointerup${Ia}`),
        (Ta.Touchend = `touchend${Ia}`),
        Ta);
    const Da = {
      ClickOnBody: () => ({ type: Oa, action: xa.Click }),
      DblclickOnBody: () => ({ type: Oa, action: xa.Dblclick }),
      MouseupOnBody: () => ({ type: Oa, action: xa.Mouseup }),
      PointerupOnBody: () => ({ type: Oa, action: xa.Pointerup }),
      TouchendOnBody: () => ({ type: Oa, action: xa.Touchend }),
    };
    function ka() {
      return new Promise((e) => {
        if ("loading" === document.readyState) {
          const t = () => {
            "loading" !== document.readyState &&
              (document.removeEventListener("readystatechange", t), e());
          };
          document.addEventListener("readystatechange", t);
        } else e();
      });
    }
    const Ca = (e) => ({ type: "varioqub", action: "fetch", data: e }),
      La = new oa();
    function Ra(e = {}) {
      const { clientFeatures: t = [], defaultFlags: n = {} } = e,
        r = La.getFor(e);
      if (r) return r.promise;
      const o = Ie("get_flags/fetch"),
        a = new me();
      return (
        a.promise.finally(() => {
          o();
        }),
        La.setFor(e, a),
        z
          .postToParent(Ca({ clientFeatures: t }))
          .then(({ data: e }) => {
            const t = Object.assign(n, e);
            a.resolve(t);
          })
          .catch(() => {
            a.resolve(n), La.setFor(e, void 0);
          }),
        a.promise
      );
    }
    const Na = "yaMetrikaCounter",
      Ma = (e) => ({ type: Na, action: "reachGoal", data: e }),
      Ga = (e) => ({ type: Na, action: "hit", data: e });
    class ja {
      reachGoal(e, t, n) {
        z.postToParent(Ma({ counterId: e, target: t, goalData: n }));
      }
      sendGoal(e, t, n) {
        console.warn(
          '"sendGoal" method is deprecated. Please use "reachGoal" instead.'
        ),
          z.postToParent(Ma({ counterId: e, target: t, goalData: n }));
      }
      hit(e, t = {}) {
        z.postToParent(Ga({ counterId: e, hitData: t }));
      }
    }
    var $a = (e, t, n) =>
      new Promise((r, o) => {
        var a = (e) => {
            try {
              i(n.next(e));
            } catch (e) {
              o(e);
            }
          },
          s = (e) => {
            try {
              i(n.throw(e));
            } catch (e) {
              o(e);
            }
          },
          i = (e) =>
            e.done ? r(e.value) : Promise.resolve(e.value).then(a, s);
        i((n = n.apply(e, t)).next());
      });
    const Ua = _e("sdkv2", ve.Dev);
    !(function () {
      var e;
      if (ce()) Vr("alert hook disabled");
      else
        try {
          "function" == typeof window.alert &&
            ((e = window.alert),
            (window.alert = function () {
              const t = arguments[0];
              return (
                Vr(`alert message = ${t}`),
                z.postToParent(Wr({ message: t.substring(0, zr) })),
                e.apply(this, arguments)
              );
            })),
            window.addEventListener("load", Jr, { once: !0 }),
            Vr("alert hook enabled");
        } catch (e) {
          se(e, { prefix: "game_hook_alert exp error: ", level: "warn" });
        }
    })();
    const Ya = $a(void 0, null, function* () {
      return (function (n) {
        if (window.loadPolyfillsPromise) return window.loadPolyfillsPromise;
        let r = [
          [e.LEGACY, Boolean(Array.prototype.at)],
          [
            e.INTERSECTION_OBSERVER,
            Boolean(
              "IntersectionObserver" in window &&
                "IntersectionObserverEntry" in window &&
                "intersectionRatio" in
                  window.IntersectionObserverEntry.prototype
            ),
          ],
          [
            e.SMOOTH_SCROLL,
            Boolean("scrollBehavior" in document.documentElement.style),
          ],
          [e.ABORT_CONTROLLER, "undefined" != typeof AbortController],
          [e.GLOBAL_THIS, "object" == typeof globalThis],
        ].filter(([, e]) => !e);
        return (
          (window.loadPolyfillsPromise = new Promise((e, o) => {
            var a, s;
            r.length
              ? document.head.appendChild(
                  t({
                    id: "loadPolyfillHash",
                    src: A(
                      n,
                      `stats-hash.js?v=${
                        (null == (a = window.appData) ? void 0 : a.version) ||
                        (null == (s = window.YandexGamesSDKEnvironment)
                          ? void 0
                          : s.APP_VERSION) ||
                        new Date().setUTCHours(12, 0, 0, 0)
                      }`
                    ),
                    onErrCb: o,
                    onLoadCb: e,
                  })
                )
              : e();
          })
            .then(() =>
              Promise.all(
                r.map(
                  ([e]) =>
                    new Promise((r, o) => {
                      document.head.appendChild(
                        t({ id: e, src: O(n, e), onErrCb: o, onLoadCb: r })
                      );
                    })
                )
              )
            )
            .catch((e) => {
              S({
                block: a.POLYFILL,
                message: "Error while loading polyfills",
                additional: { error: e },
              });
            })),
          window.loadPolyfillsPromise
        );
      })("//yastatic.net/s3/games-static/_/build");
    }).then(() => {
      (() => {
        if (window.top !== window) return;
        const { hostname: e } = window.location;
        if (
          !/(games\.s3\.yandex\.net|games-storage(-awst?)?\.yandex\.net)$/.test(
            e
          )
        )
          return;
        const t = Dt();
        if (!t) return;
        const { search: n, hash: r } = window.location;
        let o;
        (o = /games\.s3\.yandex\.net$/.test(e)
          ? `https://yandex.ru/games/app/${t}${n}${r}`
          : `https://yandex.com/games/app/${t}${n}${r}`),
          window.top.location.replace(o);
      })(),
        Vo(),
        (window.loadEnvironmentPromise =
          window.loadEnvironmentPromise ||
          new Promise((e, t) => {
            const n = Ie("loadEnvironment");
            z.postToParent({
              type: "environment",
              action: "get",
              params: { withOptions: !0 },
            })
              .then(({ data: t }) => {
                e(t);
              })
              .catch((e) => {
                t(e);
              })
              .finally(() => {
                n();
              });
          }).then((e) => {
            const t = !("enviroment" in e && "options" in e),
              n = t ? e : e.enviroment;
            return (
              (window.YandexGamesSDKEnvironment = n),
              Ua("APP_VERSION", n.APP_VERSION),
              !t && e.options
            );
          })),
        (function (e) {
          const t = o(e, 2e3),
            n = [
              "click",
              "keydown",
              "keyup",
              "mousedown",
              "mouseenter",
              "mouseleave",
              "mouseup",
              "pointerup",
              "touchcancel",
              "touchend",
              "touchmove",
              "touchstart",
            ];
          n.forEach((e) =>
            document.addEventListener(e, t, { passive: !0, capture: !0 })
          );
        })(() => z.postToParent({ type: "user-action" }));
    });
    let Ba, Fa;
    class Ka {
      constructor(e) {
        var t, n;
        (e = na(e)),
          (this.EVENTS = { EXIT: fa.EXIT, HISTORY_BACK: fa.HISTORY_BACK }),
          (this.dispatchEvent = va()),
          (this.onEvent = (e, t) => (
            console.warn(
              "Deprecated usage of `ysdk.onEvent`, please use `ysdk.on(...)` instead."
            ),
            So(e, t)
          )),
          (this.achievements = Ce.init()),
          (this.adv = Lo(new tt(e), ["showBannerAdv"], "AdvManager")),
          (this.auth = ot),
          (this.clipboard = Xr),
          (this.deviceInfo = new Qr(e.deviceType)),
          (Wa.deviceInfo = this.deviceInfo),
          (this.environment = Qn),
          (this.feedback = Wo),
          (this.isAvailableMethod =
            ((n = this),
            (e) => {
              const t = Ie("isAvailableMethod"),
                r = z
                  .postToParent(at({ methodToVerify: e }))
                  .then(({ data: t }) => {
                    const { isAvailable: r } = t;
                    if (!r) return !1;
                    const o = {
                        leaderboards: Tn,
                        payments: Yn,
                        player: dr,
                        storage: Ir.getCustomLocalStorage(),
                      },
                      a = e.split(".");
                    let s = Nr(Nr({}, o), n);
                    for (let e = 0; e < a.length; e++) {
                      const t = s[a[e]];
                      if (!t) return !1;
                      if (e === a.length - 1) return "function" == typeof t;
                      if (!xr(t)) return !1;
                      s = xr(t.prototype) ? t.prototype : t;
                    }
                    return !1;
                  });
              return (
                r.finally(() => {
                  t();
                }),
                r
              );
            })),
          (this.shortcut = Aa),
          (this.getLeaderboards = xn),
          (this.getBonuses = Hr),
          (this.getPayments = ra),
          (this.getPlayer = ia),
          (this.getStorage = Tr),
          (this.notifications = Qo),
          (this.analytics = { yaMetrikaCounter: new ja() }),
          (this.screen = new ga()),
          (this.features = Lo(
            new Yo(e.features),
            [Le.GameplayAPI, Le.LoadingAPI],
            "FeatureManager"
          )),
          (this.yandexApp = {
            enabled: Boolean(
              null == (t = window.YandexGamesSDKEnvironment)
                ? void 0
                : t.isYandexApp
            ),
          }),
          (this.serverTime = (function () {
            var e, t;
            const n = performance.timeOrigin || Date.now(),
              r =
                (null == (e = window.YandexGamesSDKEnvironment)
                  ? void 0
                  : e.serverTime) || n,
              o =
                (null == (t = window.YandexGamesSDKEnvironment)
                  ? void 0
                  : t.parentTimeOrigin) || n,
              a = (performance.timeOrigin || n) - o,
              s = performance.now.bind(performance);
            return () => new Date(r + a + s()).valueOf();
          })()),
          (this.getFlags = Ra),
          (this.on = So),
          (this.off = _o);
      }
    }
    function Ha(e) {
      if ("complete" === document.readyState) e();
      else {
        const t = () => {
          e(), window.removeEventListener("load", t);
        };
        window.addEventListener("load", t);
      }
    }
    try {
      Fa = new URLSearchParams(window.location.hash.slice(1)).get(
        "device-type"
      );
    } catch (e) {}
    class Wa {
      constructor() {
        throw new Error("Please, use `YaGames.init` instead.");
      }
      static longtaskObserver() {
        var e;
        const t = "longtask";
        if (
          "undefined" != typeof PerformanceObserver &&
          (null == (e = PerformanceObserver.supportedEntryTypes)
            ? void 0
            : e.includes(t))
        ) {
          let e;
          const n = () => {
              clearTimeout(e),
                (e = setTimeout(() => {
                  "complete" === document.readyState ? r.disconnect() : n();
                }, 5e3));
            },
            r = new PerformanceObserver((e) => {
              e.getEntries().forEach(() => {
                z.postToParent({ type: "longtask" }), n();
              });
            });
          r.observe({ entryTypes: [t] });
        }
        "complete" === document.readyState
          ? z.postToParent({ type: "longtask_frame_ready" })
          : window.addEventListener("load", () => {
              z.postToParent({ type: "longtask_frame_ready" });
            });
      }
      static init(e) {
        return $a(this, null, function* () {
          let t = window.location.hash;
          try {
            const e = yield $a(void 0, null, function* () {
              let e = window.location.href;
              try {
                e = yield Xo();
              } catch (e) {
                console.warn("Error get IFrameURL", e);
              }
              return new URL(e || window.location.href);
            });
            t = new URL(e).hash;
          } catch (e) {}
          return Ba
            ? (console.warn("YaGames was initialized"), Ba)
            : (this.longtaskObserver(),
              Ua("Start initialization"),
              yield Ya,
              (Ba = new Promise((n, r) => {
                !(function () {
                  const e = () => {
                    z.postToParent({
                      type: "sdk_initialization",
                      data: { initialized: !0 },
                    }),
                      window.removeEventListener("load", e);
                  };
                  "complete" === document.readyState
                    ? e()
                    : window.addEventListener("load", e);
                })();
                const o = (o) => {
                  try {
                    let r = na(o, e);
                    if (!r.deviceType)
                      try {
                        r.deviceType = new URLSearchParams(t.slice(1)).get(
                          "device-type"
                        );
                      } catch (e) {
                        se(e, { message: "No deviceType in options" });
                      }
                    ka().then(() => {
                      const e = new Ka(r);
                      e.environment.isTelegram && yn("loading", { value: 100 }),
                        r.hasAuth && e.getPlayer({ scopes: !1 }),
                        window.setTimeout(Ro, 6e4),
                        n(
                          Lo(
                            e,
                            [
                              "auth",
                              "getFlags",
                              "getLeaderboards",
                              "getPayments",
                              "getStorage",
                              "serverTime",
                            ],
                            "SDK"
                          )
                        );
                    });
                  } catch (e) {
                    se(e), r(e);
                  }
                };
                window.loadEnvironmentPromise
                  .then((e) => {
                    e
                      ? o(e)
                      : new Promise((e, t) => {
                          const n = Ie("loadOptions");
                          z.postToParent({ type: "options", action: "get" })
                            .then(({ data: t }) => {
                              e(t);
                            })
                            .catch((e) => {
                              t(e);
                            })
                            .finally(() => {
                              n();
                            });
                        })
                          .then(o)
                          .catch((e) => {
                            console.warn(`Options load failed with error ${e}`),
                              o();
                          });
                  })
                  .catch((e) => {
                    se(e), o();
                  }),
                  setTimeout(() => {
                    const e = { clientTech: Zo(), gameTech: Jo() };
                    Ua("checkAndSendGameInfo tech data:", e),
                      Ha(() => {
                        z.postToParent({ type: "game-stats", data: e });
                      });
                  }, 1e4);
              })),
              Ba.then(() => Ua("Initialized")),
              Ba);
        });
      }
    }
    if (((Wa.deviceInfo = new Qr(Fa)), window.YaGames && window.YaGamesAdded)) {
      const e =
        'YaGames is already defined. Please, check double <script src="https://yandex.ru/games/sdk/v2"> on the page.';
      ce() && z.postToParent({ type: "alert", error: (Va = new Error(e)) }),
        ie(new Error(e));
    } else {
      if (window.parent !== window) {
        const e = (() => {
          var e;
          return {
            type: "sdk-bundle-start",
            data: {
              time: Date.now(),
              sdkVersion: "v2",
              sdkBundle:
                null == (e = window.YandexGamesSDKEnvironment)
                  ? void 0
                  : e.APP_VERSION,
              isSdkLoader: Boolean(window.isSdkLoader),
            },
          };
        })();
        console.info(
          `SDK Init. Version: ${e.data.sdkVersion}. Is loader: ${e.data.isSdkLoader}.`
        ),
          z.postToParent(e);
      }
      try {
        Ir.setup();
      } catch (Va) {
        se(Va);
      }
      window.top !== window &&
        ka().then(function () {
          Object.values(Da).forEach((e) => {
            const t = e(),
              [n] = t.action.split(Ia);
            document.addEventListener(n, () => z.postToParent(t), !0);
          });
        }),
        ha(document.querySelector("iframe")),
        Ea.overrideCacheSearch(),
        "SecurityPolicyViolationEvent" in window
          ? window.addEventListener(
              "securitypolicyviolation",
              ({
                blockedURI: e,
                columnNumber: t,
                disposition: n,
                documentURI: r,
                effectiveDirective: o,
                lineNumber: a,
                originalPolicy: s,
                referrer: i,
                sample: l,
                sourceFile: c,
                statusCode: d,
                violatedDirective: u,
              }) => {
                z.postToParent({
                  type: "csp",
                  action: "violation",
                  data: {
                    blockedURI: e,
                    columnNumber: t,
                    disposition: n,
                    documentURI: r,
                    effectiveDirective: o,
                    lineNumber: a,
                    originalPolicy: s,
                    referrer: i,
                    sample: l,
                    sourceFile: c,
                    statusCode: d,
                    violatedDirective: u,
                  },
                });
              }
            )
          : console.warn(
              "SecurityPolicyViolationEvent is not available for this browser"
            );
    }
    var Va;
    Ha(() => {
      z.postToParent({ type: "frame", action: Re.IframeLoaded });
    }),
      (window.YaGamesAdded = !0),
      (window.YaGames = Wa);
    const za = Wa;
  })(),
    (YaGames = r.default);
})();
