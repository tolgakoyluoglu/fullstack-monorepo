function v2(e, r) {
  for (var l = 0; l < r.length; l++) {
    const a = r[l]
    if (typeof a != 'string' && !Array.isArray(a)) {
      for (const u in a)
        if (u !== 'default' && !(u in e)) {
          const f = Object.getOwnPropertyDescriptor(a, u)
          f && Object.defineProperty(e, u, f.get ? f : { enumerable: !0, get: () => a[u] })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
;(function () {
  const r = document.createElement('link').relList
  if (r && r.supports && r.supports('modulepreload')) return
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u)
  new MutationObserver((u) => {
    for (const f of u)
      if (f.type === 'childList')
        for (const d of f.addedNodes) d.tagName === 'LINK' && d.rel === 'modulepreload' && a(d)
  }).observe(document, { childList: !0, subtree: !0 })
  function l(u) {
    const f = {}
    return (
      u.integrity && (f.integrity = u.integrity),
      u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : u.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    )
  }
  function a(u) {
    if (u.ep) return
    u.ep = !0
    const f = l(u)
    fetch(u.href, f)
  }
})()
function x2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var Kp = { exports: {} },
  su = {}
var V0
function S2() {
  if (V0) return su
  V0 = 1
  var e = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.fragment')
  function l(a, u, f) {
    var d = null
    if ((f !== void 0 && (d = '' + f), u.key !== void 0 && (d = '' + u.key), 'key' in u)) {
      f = {}
      for (var m in u) m !== 'key' && (f[m] = u[m])
    } else f = u
    return ((u = f.ref), { $$typeof: e, type: a, key: d, ref: u !== void 0 ? u : null, props: f })
  }
  return ((su.Fragment = r), (su.jsx = l), (su.jsxs = l), su)
}
var L0
function R2() {
  return (L0 || ((L0 = 1), (Kp.exports = S2())), Kp.exports)
}
var E = R2(),
  Xp = { exports: {} },
  et = {}
var H0
function E2() {
  if (H0) return et
  H0 = 1
  var e = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    l = Symbol.for('react.fragment'),
    a = Symbol.for('react.strict_mode'),
    u = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    d = Symbol.for('react.context'),
    m = Symbol.for('react.forward_ref'),
    p = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    y = Symbol.for('react.activity'),
    x = Symbol.iterator
  function T(O) {
    return O === null || typeof O != 'object'
      ? null
      : ((O = (x && O[x]) || O['@@iterator']), typeof O == 'function' ? O : null)
  }
  var w = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    N = {}
  function A(O, P, H) {
    ;((this.props = O), (this.context = P), (this.refs = N), (this.updater = H || w))
  }
  ;((A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (O, P) {
      if (typeof O != 'object' && typeof O != 'function' && O != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        )
      this.updater.enqueueSetState(this, O, P, 'setState')
    }),
    (A.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, 'forceUpdate')
    }))
  function R() {}
  R.prototype = A.prototype
  function I(O, P, H) {
    ;((this.props = O), (this.context = P), (this.refs = N), (this.updater = H || w))
  }
  var j = (I.prototype = new R())
  ;((j.constructor = I), S(j, A.prototype), (j.isPureReactComponent = !0))
  var M = Array.isArray
  function V() {}
  var k = { H: null, A: null, T: null, S: null },
    _ = Object.prototype.hasOwnProperty
  function ee(O, P, H) {
    var X = H.ref
    return { $$typeof: e, type: O, key: P, ref: X !== void 0 ? X : null, props: H }
  }
  function ie(O, P) {
    return ee(O.type, P, O.props)
  }
  function Q(O) {
    return typeof O == 'object' && O !== null && O.$$typeof === e
  }
  function le(O) {
    var P = { '=': '=0', ':': '=2' }
    return (
      '$' +
      O.replace(/[=:]/g, function (H) {
        return P[H]
      })
    )
  }
  var q = /\/+/g
  function Y(O, P) {
    return typeof O == 'object' && O !== null && O.key != null ? le('' + O.key) : P.toString(36)
  }
  function F(O) {
    switch (O.status) {
      case 'fulfilled':
        return O.value
      case 'rejected':
        throw O.reason
      default:
        switch (
          (typeof O.status == 'string'
            ? O.then(V, V)
            : ((O.status = 'pending'),
              O.then(
                function (P) {
                  O.status === 'pending' && ((O.status = 'fulfilled'), (O.value = P))
                },
                function (P) {
                  O.status === 'pending' && ((O.status = 'rejected'), (O.reason = P))
                }
              )),
          O.status)
        ) {
          case 'fulfilled':
            return O.value
          case 'rejected':
            throw O.reason
        }
    }
    throw O
  }
  function z(O, P, H, X, te) {
    var re = typeof O
    ;(re === 'undefined' || re === 'boolean') && (O = null)
    var W = !1
    if (O === null) W = !0
    else
      switch (re) {
        case 'bigint':
        case 'string':
        case 'number':
          W = !0
          break
        case 'object':
          switch (O.$$typeof) {
            case e:
            case r:
              W = !0
              break
            case v:
              return ((W = O._init), z(W(O._payload), P, H, X, te))
          }
      }
    if (W)
      return (
        (te = te(O)),
        (W = X === '' ? '.' + Y(O, 0) : X),
        M(te)
          ? ((H = ''),
            W != null && (H = W.replace(q, '$&/') + '/'),
            z(te, P, H, '', function (ue) {
              return ue
            }))
          : te != null &&
            (Q(te) &&
              (te = ie(
                te,
                H +
                  (te.key == null || (O && O.key === te.key)
                    ? ''
                    : ('' + te.key).replace(q, '$&/') + '/') +
                  W
              )),
            P.push(te)),
        1
      )
    W = 0
    var de = X === '' ? '.' : X + ':'
    if (M(O))
      for (var ve = 0; ve < O.length; ve++)
        ((X = O[ve]), (re = de + Y(X, ve)), (W += z(X, P, H, re, te)))
    else if (((ve = T(O)), typeof ve == 'function'))
      for (O = ve.call(O), ve = 0; !(X = O.next()).done; )
        ((X = X.value), (re = de + Y(X, ve++)), (W += z(X, P, H, re, te)))
    else if (re === 'object') {
      if (typeof O.then == 'function') return z(F(O), P, H, X, te)
      throw (
        (P = String(O)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (P === '[object Object]' ? 'object with keys {' + Object.keys(O).join(', ') + '}' : P) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      )
    }
    return W
  }
  function L(O, P, H) {
    if (O == null) return O
    var X = [],
      te = 0
    return (
      z(O, X, '', '', function (re) {
        return P.call(H, re, te++)
      }),
      X
    )
  }
  function D(O) {
    if (O._status === -1) {
      var P = O._result
      ;((P = P()),
        P.then(
          function (H) {
            ;(O._status === 0 || O._status === -1) && ((O._status = 1), (O._result = H))
          },
          function (H) {
            ;(O._status === 0 || O._status === -1) && ((O._status = 2), (O._result = H))
          }
        ),
        O._status === -1 && ((O._status = 0), (O._result = P)))
    }
    if (O._status === 1) return O._result.default
    throw O._result
  }
  var $ =
      typeof reportError == 'function'
        ? reportError
        : function (O) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var P = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof O == 'object' && O !== null && typeof O.message == 'string'
                    ? String(O.message)
                    : String(O),
                error: O,
              })
              if (!window.dispatchEvent(P)) return
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', O)
              return
            }
            console.error(O)
          },
    oe = {
      map: L,
      forEach: function (O, P, H) {
        L(
          O,
          function () {
            P.apply(this, arguments)
          },
          H
        )
      },
      count: function (O) {
        var P = 0
        return (
          L(O, function () {
            P++
          }),
          P
        )
      },
      toArray: function (O) {
        return (
          L(O, function (P) {
            return P
          }) || []
        )
      },
      only: function (O) {
        if (!Q(O))
          throw Error('React.Children.only expected to receive a single React element child.')
        return O
      },
    }
  return (
    (et.Activity = y),
    (et.Children = oe),
    (et.Component = A),
    (et.Fragment = l),
    (et.Profiler = u),
    (et.PureComponent = I),
    (et.StrictMode = a),
    (et.Suspense = p),
    (et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    (et.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (O) {
        return k.H.useMemoCache(O)
      },
    }),
    (et.cache = function (O) {
      return function () {
        return O.apply(null, arguments)
      }
    }),
    (et.cacheSignal = function () {
      return null
    }),
    (et.cloneElement = function (O, P, H) {
      if (O == null) throw Error('The argument must be a React element, but you passed ' + O + '.')
      var X = S({}, O.props),
        te = O.key
      if (P != null)
        for (re in (P.key !== void 0 && (te = '' + P.key), P))
          !_.call(P, re) ||
            re === 'key' ||
            re === '__self' ||
            re === '__source' ||
            (re === 'ref' && P.ref === void 0) ||
            (X[re] = P[re])
      var re = arguments.length - 2
      if (re === 1) X.children = H
      else if (1 < re) {
        for (var W = Array(re), de = 0; de < re; de++) W[de] = arguments[de + 2]
        X.children = W
      }
      return ee(O.type, te, X)
    }),
    (et.createContext = function (O) {
      return (
        (O = {
          $$typeof: d,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (O.Provider = O),
        (O.Consumer = { $$typeof: f, _context: O }),
        O
      )
    }),
    (et.createElement = function (O, P, H) {
      var X,
        te = {},
        re = null
      if (P != null)
        for (X in (P.key !== void 0 && (re = '' + P.key), P))
          _.call(P, X) && X !== 'key' && X !== '__self' && X !== '__source' && (te[X] = P[X])
      var W = arguments.length - 2
      if (W === 1) te.children = H
      else if (1 < W) {
        for (var de = Array(W), ve = 0; ve < W; ve++) de[ve] = arguments[ve + 2]
        te.children = de
      }
      if (O && O.defaultProps)
        for (X in ((W = O.defaultProps), W)) te[X] === void 0 && (te[X] = W[X])
      return ee(O, re, te)
    }),
    (et.createRef = function () {
      return { current: null }
    }),
    (et.forwardRef = function (O) {
      return { $$typeof: m, render: O }
    }),
    (et.isValidElement = Q),
    (et.lazy = function (O) {
      return { $$typeof: v, _payload: { _status: -1, _result: O }, _init: D }
    }),
    (et.memo = function (O, P) {
      return { $$typeof: g, type: O, compare: P === void 0 ? null : P }
    }),
    (et.startTransition = function (O) {
      var P = k.T,
        H = {}
      k.T = H
      try {
        var X = O(),
          te = k.S
        ;(te !== null && te(H, X),
          typeof X == 'object' && X !== null && typeof X.then == 'function' && X.then(V, $))
      } catch (re) {
        $(re)
      } finally {
        ;(P !== null && H.types !== null && (P.types = H.types), (k.T = P))
      }
    }),
    (et.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh()
    }),
    (et.use = function (O) {
      return k.H.use(O)
    }),
    (et.useActionState = function (O, P, H) {
      return k.H.useActionState(O, P, H)
    }),
    (et.useCallback = function (O, P) {
      return k.H.useCallback(O, P)
    }),
    (et.useContext = function (O) {
      return k.H.useContext(O)
    }),
    (et.useDebugValue = function () {}),
    (et.useDeferredValue = function (O, P) {
      return k.H.useDeferredValue(O, P)
    }),
    (et.useEffect = function (O, P) {
      return k.H.useEffect(O, P)
    }),
    (et.useEffectEvent = function (O) {
      return k.H.useEffectEvent(O)
    }),
    (et.useId = function () {
      return k.H.useId()
    }),
    (et.useImperativeHandle = function (O, P, H) {
      return k.H.useImperativeHandle(O, P, H)
    }),
    (et.useInsertionEffect = function (O, P) {
      return k.H.useInsertionEffect(O, P)
    }),
    (et.useLayoutEffect = function (O, P) {
      return k.H.useLayoutEffect(O, P)
    }),
    (et.useMemo = function (O, P) {
      return k.H.useMemo(O, P)
    }),
    (et.useOptimistic = function (O, P) {
      return k.H.useOptimistic(O, P)
    }),
    (et.useReducer = function (O, P, H) {
      return k.H.useReducer(O, P, H)
    }),
    (et.useRef = function (O) {
      return k.H.useRef(O)
    }),
    (et.useState = function (O) {
      return k.H.useState(O)
    }),
    (et.useSyncExternalStore = function (O, P, H) {
      return k.H.useSyncExternalStore(O, P, H)
    }),
    (et.useTransition = function () {
      return k.H.useTransition()
    }),
    (et.version = '19.2.3'),
    et
  )
}
var B0
function Uu() {
  return (B0 || ((B0 = 1), (Xp.exports = E2())), Xp.exports)
}
var h = Uu()
const T2 = x2(h),
  n1 = v2({ __proto__: null, default: T2 }, [h])
var Qp = { exports: {} },
  uu = {},
  Zp = { exports: {} },
  Jp = {}
var F0
function C2() {
  return (
    F0 ||
      ((F0 = 1),
      (function (e) {
        function r(z, L) {
          var D = z.length
          z.push(L)
          e: for (; 0 < D; ) {
            var $ = (D - 1) >>> 1,
              oe = z[$]
            if (0 < u(oe, L)) ((z[$] = L), (z[D] = oe), (D = $))
            else break e
          }
        }
        function l(z) {
          return z.length === 0 ? null : z[0]
        }
        function a(z) {
          if (z.length === 0) return null
          var L = z[0],
            D = z.pop()
          if (D !== L) {
            z[0] = D
            e: for (var $ = 0, oe = z.length, O = oe >>> 1; $ < O; ) {
              var P = 2 * ($ + 1) - 1,
                H = z[P],
                X = P + 1,
                te = z[X]
              if (0 > u(H, D))
                X < oe && 0 > u(te, H)
                  ? ((z[$] = te), (z[X] = D), ($ = X))
                  : ((z[$] = H), (z[P] = D), ($ = P))
              else if (X < oe && 0 > u(te, D)) ((z[$] = te), (z[X] = D), ($ = X))
              else break e
            }
          }
          return L
        }
        function u(z, L) {
          var D = z.sortIndex - L.sortIndex
          return D !== 0 ? D : z.id - L.id
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var f = performance
          e.unstable_now = function () {
            return f.now()
          }
        } else {
          var d = Date,
            m = d.now()
          e.unstable_now = function () {
            return d.now() - m
          }
        }
        var p = [],
          g = [],
          v = 1,
          y = null,
          x = 3,
          T = !1,
          w = !1,
          S = !1,
          N = !1,
          A = typeof setTimeout == 'function' ? setTimeout : null,
          R = typeof clearTimeout == 'function' ? clearTimeout : null,
          I = typeof setImmediate < 'u' ? setImmediate : null
        function j(z) {
          for (var L = l(g); L !== null; ) {
            if (L.callback === null) a(g)
            else if (L.startTime <= z) (a(g), (L.sortIndex = L.expirationTime), r(p, L))
            else break
            L = l(g)
          }
        }
        function M(z) {
          if (((S = !1), j(z), !w))
            if (l(p) !== null) ((w = !0), V || ((V = !0), le()))
            else {
              var L = l(g)
              L !== null && F(M, L.startTime - z)
            }
        }
        var V = !1,
          k = -1,
          _ = 5,
          ee = -1
        function ie() {
          return N ? !0 : !(e.unstable_now() - ee < _)
        }
        function Q() {
          if (((N = !1), V)) {
            var z = e.unstable_now()
            ee = z
            var L = !0
            try {
              e: {
                ;((w = !1), S && ((S = !1), R(k), (k = -1)), (T = !0))
                var D = x
                try {
                  t: {
                    for (j(z), y = l(p); y !== null && !(y.expirationTime > z && ie()); ) {
                      var $ = y.callback
                      if (typeof $ == 'function') {
                        ;((y.callback = null), (x = y.priorityLevel))
                        var oe = $(y.expirationTime <= z)
                        if (((z = e.unstable_now()), typeof oe == 'function')) {
                          ;((y.callback = oe), j(z), (L = !0))
                          break t
                        }
                        ;(y === l(p) && a(p), j(z))
                      } else a(p)
                      y = l(p)
                    }
                    if (y !== null) L = !0
                    else {
                      var O = l(g)
                      ;(O !== null && F(M, O.startTime - z), (L = !1))
                    }
                  }
                  break e
                } finally {
                  ;((y = null), (x = D), (T = !1))
                }
                L = void 0
              }
            } finally {
              L ? le() : (V = !1)
            }
          }
        }
        var le
        if (typeof I == 'function')
          le = function () {
            I(Q)
          }
        else if (typeof MessageChannel < 'u') {
          var q = new MessageChannel(),
            Y = q.port2
          ;((q.port1.onmessage = Q),
            (le = function () {
              Y.postMessage(null)
            }))
        } else
          le = function () {
            A(Q, 0)
          }
        function F(z, L) {
          k = A(function () {
            z(e.unstable_now())
          }, L)
        }
        ;((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (z) {
            z.callback = null
          }),
          (e.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (_ = 0 < z ? Math.floor(1e3 / z) : 5)
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return x
          }),
          (e.unstable_next = function (z) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var L = 3
                break
              default:
                L = x
            }
            var D = x
            x = L
            try {
              return z()
            } finally {
              x = D
            }
          }),
          (e.unstable_requestPaint = function () {
            N = !0
          }),
          (e.unstable_runWithPriority = function (z, L) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                z = 3
            }
            var D = x
            x = z
            try {
              return L()
            } finally {
              x = D
            }
          }),
          (e.unstable_scheduleCallback = function (z, L, D) {
            var $ = e.unstable_now()
            switch (
              (typeof D == 'object' && D !== null
                ? ((D = D.delay), (D = typeof D == 'number' && 0 < D ? $ + D : $))
                : (D = $),
              z)
            ) {
              case 1:
                var oe = -1
                break
              case 2:
                oe = 250
                break
              case 5:
                oe = 1073741823
                break
              case 4:
                oe = 1e4
                break
              default:
                oe = 5e3
            }
            return (
              (oe = D + oe),
              (z = {
                id: v++,
                callback: L,
                priorityLevel: z,
                startTime: D,
                expirationTime: oe,
                sortIndex: -1,
              }),
              D > $
                ? ((z.sortIndex = D),
                  r(g, z),
                  l(p) === null && z === l(g) && (S ? (R(k), (k = -1)) : (S = !0), F(M, D - $)))
                : ((z.sortIndex = oe), r(p, z), w || T || ((w = !0), V || ((V = !0), le()))),
              z
            )
          }),
          (e.unstable_shouldYield = ie),
          (e.unstable_wrapCallback = function (z) {
            var L = x
            return function () {
              var D = x
              x = L
              try {
                return z.apply(this, arguments)
              } finally {
                x = D
              }
            }
          }))
      })(Jp)),
    Jp
  )
}
var P0
function w2() {
  return (P0 || ((P0 = 1), (Zp.exports = C2())), Zp.exports)
}
var Wp = { exports: {} },
  qn = {}
var q0
function M2() {
  if (q0) return qn
  q0 = 1
  var e = Uu()
  function r(p) {
    var g = 'https://react.dev/errors/' + p
    if (1 < arguments.length) {
      g += '?args[]=' + encodeURIComponent(arguments[1])
      for (var v = 2; v < arguments.length; v++) g += '&args[]=' + encodeURIComponent(arguments[v])
    }
    return (
      'Minified React error #' +
      p +
      '; visit ' +
      g +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function l() {}
  var a = {
      d: {
        f: l,
        r: function () {
          throw Error(r(522))
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    u = Symbol.for('react.portal')
  function f(p, g, v) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: u,
      key: y == null ? null : '' + y,
      children: p,
      containerInfo: g,
      implementation: v,
    }
  }
  var d = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  function m(p, g) {
    if (p === 'font') return ''
    if (typeof g == 'string') return g === 'use-credentials' ? g : ''
  }
  return (
    (qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a),
    (qn.createPortal = function (p, g) {
      var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(r(299))
      return f(p, g, null, v)
    }),
    (qn.flushSync = function (p) {
      var g = d.T,
        v = a.p
      try {
        if (((d.T = null), (a.p = 2), p)) return p()
      } finally {
        ;((d.T = g), (a.p = v), a.d.f())
      }
    }),
    (qn.preconnect = function (p, g) {
      typeof p == 'string' &&
        (g
          ? ((g = g.crossOrigin),
            (g = typeof g == 'string' ? (g === 'use-credentials' ? g : '') : void 0))
          : (g = null),
        a.d.C(p, g))
    }),
    (qn.prefetchDNS = function (p) {
      typeof p == 'string' && a.d.D(p)
    }),
    (qn.preinit = function (p, g) {
      if (typeof p == 'string' && g && typeof g.as == 'string') {
        var v = g.as,
          y = m(v, g.crossOrigin),
          x = typeof g.integrity == 'string' ? g.integrity : void 0,
          T = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0
        v === 'style'
          ? a.d.S(p, typeof g.precedence == 'string' ? g.precedence : void 0, {
              crossOrigin: y,
              integrity: x,
              fetchPriority: T,
            })
          : v === 'script' &&
            a.d.X(p, {
              crossOrigin: y,
              integrity: x,
              fetchPriority: T,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            })
      }
    }),
    (qn.preinitModule = function (p, g) {
      if (typeof p == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var v = m(g.as, g.crossOrigin)
            a.d.M(p, {
              crossOrigin: v,
              integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            })
          }
        } else g == null && a.d.M(p)
    }),
    (qn.preload = function (p, g) {
      if (typeof p == 'string' && typeof g == 'object' && g !== null && typeof g.as == 'string') {
        var v = g.as,
          y = m(v, g.crossOrigin)
        a.d.L(p, v, {
          crossOrigin: y,
          integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          type: typeof g.type == 'string' ? g.type : void 0,
          fetchPriority: typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0,
          referrerPolicy: typeof g.referrerPolicy == 'string' ? g.referrerPolicy : void 0,
          imageSrcSet: typeof g.imageSrcSet == 'string' ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == 'string' ? g.imageSizes : void 0,
          media: typeof g.media == 'string' ? g.media : void 0,
        })
      }
    }),
    (qn.preloadModule = function (p, g) {
      if (typeof p == 'string')
        if (g) {
          var v = m(g.as, g.crossOrigin)
          a.d.m(p, {
            as: typeof g.as == 'string' && g.as !== 'script' ? g.as : void 0,
            crossOrigin: v,
            integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          })
        } else a.d.m(p)
    }),
    (qn.requestFormReset = function (p) {
      a.d.r(p)
    }),
    (qn.unstable_batchedUpdates = function (p, g) {
      return p(g)
    }),
    (qn.useFormState = function (p, g, v) {
      return d.H.useFormState(p, g, v)
    }),
    (qn.useFormStatus = function () {
      return d.H.useHostTransitionStatus()
    }),
    (qn.version = '19.2.3'),
    qn
  )
}
var G0
function r1() {
  if (G0) return Wp.exports
  G0 = 1
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
      } catch (r) {
        console.error(r)
      }
  }
  return (e(), (Wp.exports = M2()), Wp.exports)
}
var Y0
function O2() {
  if (Y0) return uu
  Y0 = 1
  var e = w2(),
    r = Uu(),
    l = r1()
  function a(t) {
    var n = 'https://react.dev/errors/' + t
    if (1 < arguments.length) {
      n += '?args[]=' + encodeURIComponent(arguments[1])
      for (var o = 2; o < arguments.length; o++) n += '&args[]=' + encodeURIComponent(arguments[o])
    }
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      n +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function u(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
  }
  function f(t) {
    var n = t,
      o = t
    if (t.alternate) for (; n.return; ) n = n.return
    else {
      t = n
      do ((n = t), (n.flags & 4098) !== 0 && (o = n.return), (t = n.return))
      while (t)
    }
    return n.tag === 3 ? o : null
  }
  function d(t) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if ((n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)), n !== null))
        return n.dehydrated
    }
    return null
  }
  function m(t) {
    if (t.tag === 31) {
      var n = t.memoizedState
      if ((n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)), n !== null))
        return n.dehydrated
    }
    return null
  }
  function p(t) {
    if (f(t) !== t) throw Error(a(188))
  }
  function g(t) {
    var n = t.alternate
    if (!n) {
      if (((n = f(t)), n === null)) throw Error(a(188))
      return n !== t ? null : t
    }
    for (var o = t, i = n; ; ) {
      var s = o.return
      if (s === null) break
      var c = s.alternate
      if (c === null) {
        if (((i = s.return), i !== null)) {
          o = i
          continue
        }
        break
      }
      if (s.child === c.child) {
        for (c = s.child; c; ) {
          if (c === o) return (p(s), t)
          if (c === i) return (p(s), n)
          c = c.sibling
        }
        throw Error(a(188))
      }
      if (o.return !== i.return) ((o = s), (i = c))
      else {
        for (var b = !1, C = s.child; C; ) {
          if (C === o) {
            ;((b = !0), (o = s), (i = c))
            break
          }
          if (C === i) {
            ;((b = !0), (i = s), (o = c))
            break
          }
          C = C.sibling
        }
        if (!b) {
          for (C = c.child; C; ) {
            if (C === o) {
              ;((b = !0), (o = c), (i = s))
              break
            }
            if (C === i) {
              ;((b = !0), (i = c), (o = s))
              break
            }
            C = C.sibling
          }
          if (!b) throw Error(a(189))
        }
      }
      if (o.alternate !== i) throw Error(a(190))
    }
    if (o.tag !== 3) throw Error(a(188))
    return o.stateNode.current === o ? t : n
  }
  function v(t) {
    var n = t.tag
    if (n === 5 || n === 26 || n === 27 || n === 6) return t
    for (t = t.child; t !== null; ) {
      if (((n = v(t)), n !== null)) return n
      t = t.sibling
    }
    return null
  }
  var y = Object.assign,
    x = Symbol.for('react.element'),
    T = Symbol.for('react.transitional.element'),
    w = Symbol.for('react.portal'),
    S = Symbol.for('react.fragment'),
    N = Symbol.for('react.strict_mode'),
    A = Symbol.for('react.profiler'),
    R = Symbol.for('react.consumer'),
    I = Symbol.for('react.context'),
    j = Symbol.for('react.forward_ref'),
    M = Symbol.for('react.suspense'),
    V = Symbol.for('react.suspense_list'),
    k = Symbol.for('react.memo'),
    _ = Symbol.for('react.lazy'),
    ee = Symbol.for('react.activity'),
    ie = Symbol.for('react.memo_cache_sentinel'),
    Q = Symbol.iterator
  function le(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (Q && t[Q]) || t['@@iterator']), typeof t == 'function' ? t : null)
  }
  var q = Symbol.for('react.client.reference')
  function Y(t) {
    if (t == null) return null
    if (typeof t == 'function') return t.$$typeof === q ? null : t.displayName || t.name || null
    if (typeof t == 'string') return t
    switch (t) {
      case S:
        return 'Fragment'
      case A:
        return 'Profiler'
      case N:
        return 'StrictMode'
      case M:
        return 'Suspense'
      case V:
        return 'SuspenseList'
      case ee:
        return 'Activity'
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case w:
          return 'Portal'
        case I:
          return t.displayName || 'Context'
        case R:
          return (t._context.displayName || 'Context') + '.Consumer'
        case j:
          var n = t.render
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ''),
              (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          )
        case k:
          return ((n = t.displayName || null), n !== null ? n : Y(t.type) || 'Memo')
        case _:
          ;((n = t._payload), (t = t._init))
          try {
            return Y(t(n))
          } catch {}
      }
    return null
  }
  var F = Array.isArray,
    z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    L = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    D = { pending: !1, data: null, method: null, action: null },
    $ = [],
    oe = -1
  function O(t) {
    return { current: t }
  }
  function P(t) {
    0 > oe || ((t.current = $[oe]), ($[oe] = null), oe--)
  }
  function H(t, n) {
    ;(oe++, ($[oe] = t.current), (t.current = n))
  }
  var X = O(null),
    te = O(null),
    re = O(null),
    W = O(null)
  function de(t, n) {
    switch ((H(re, n), H(te, t), H(X, null), n.nodeType)) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? a0(t) : 0
        break
      default:
        if (((t = n.tagName), (n = n.namespaceURI))) ((n = a0(n)), (t = s0(n, t)))
        else
          switch (t) {
            case 'svg':
              t = 1
              break
            case 'math':
              t = 2
              break
            default:
              t = 0
          }
    }
    ;(P(X), H(X, t))
  }
  function ve() {
    ;(P(X), P(te), P(re))
  }
  function ue(t) {
    t.memoizedState !== null && H(W, t)
    var n = X.current,
      o = s0(n, t.type)
    n !== o && (H(te, t), H(X, o))
  }
  function K(t) {
    ;(te.current === t && (P(X), P(te)), W.current === t && (P(W), (ou._currentValue = D)))
  }
  var xe, Ee
  function Fe(t) {
    if (xe === void 0)
      try {
        throw Error()
      } catch (o) {
        var n = o.stack.trim().match(/\n( *(at )?)/)
        ;((xe = (n && n[1]) || ''),
          (Ee =
            -1 <
            o.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < o.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''))
      }
    return (
      `
` +
      xe +
      t +
      Ee
    )
  }
  var Re = !1
  function be(t, n) {
    if (!t || Re) return ''
    Re = !0
    var o = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var ge = function () {
                throw Error()
              }
              if (
                (Object.defineProperty(ge.prototype, 'props', {
                  set: function () {
                    throw Error()
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(ge, [])
                } catch (ae) {
                  var ne = ae
                }
                Reflect.construct(t, [], ge)
              } else {
                try {
                  ge.call()
                } catch (ae) {
                  ne = ae
                }
                t.call(ge.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (ae) {
                ne = ae
              }
              ;(ge = t()) && typeof ge.catch == 'function' && ge.catch(function () {})
            }
          } catch (ae) {
            if (ae && ne && typeof ae.stack == 'string') return [ae.stack, ne.stack]
          }
          return [null, null]
        },
      }
      i.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot'
      var s = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, 'name')
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        })
      var c = i.DetermineComponentFrameRoot(),
        b = c[0],
        C = c[1]
      if (b && C) {
        var U = b.split(`
`),
          J = C.split(`
`)
        for (s = i = 0; i < U.length && !U[i].includes('DetermineComponentFrameRoot'); ) i++
        for (; s < J.length && !J[s].includes('DetermineComponentFrameRoot'); ) s++
        if (i === U.length || s === J.length)
          for (i = U.length - 1, s = J.length - 1; 1 <= i && 0 <= s && U[i] !== J[s]; ) s--
        for (; 1 <= i && 0 <= s; i--, s--)
          if (U[i] !== J[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || U[i] !== J[s])) {
                  var ce =
                    `
` + U[i].replace(' at new ', ' at ')
                  return (
                    t.displayName &&
                      ce.includes('<anonymous>') &&
                      (ce = ce.replace('<anonymous>', t.displayName)),
                    ce
                  )
                }
              while (1 <= i && 0 <= s)
            break
          }
      }
    } finally {
      ;((Re = !1), (Error.prepareStackTrace = o))
    }
    return (o = t ? t.displayName || t.name : '') ? Fe(o) : ''
  }
  function Se(t, n) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Fe(t.type)
      case 16:
        return Fe('Lazy')
      case 13:
        return t.child !== n && n !== null ? Fe('Suspense Fallback') : Fe('Suspense')
      case 19:
        return Fe('SuspenseList')
      case 0:
      case 15:
        return be(t.type, !1)
      case 11:
        return be(t.type.render, !1)
      case 1:
        return be(t.type, !0)
      case 31:
        return Fe('Activity')
      default:
        return ''
    }
  }
  function Le(t) {
    try {
      var n = '',
        o = null
      do ((n += Se(t, o)), (o = t), (t = t.return))
      while (t)
      return n
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      )
    }
  }
  var Oe = Object.prototype.hasOwnProperty,
    _e = e.unstable_scheduleCallback,
    pe = e.unstable_cancelCallback,
    je = e.unstable_shouldYield,
    Ce = e.unstable_requestPaint,
    Me = e.unstable_now,
    we = e.unstable_getCurrentPriorityLevel,
    Xe = e.unstable_ImmediatePriority,
    We = e.unstable_UserBlockingPriority,
    Be = e.unstable_NormalPriority,
    dt = e.unstable_LowPriority,
    Rt = e.unstable_IdlePriority,
    Dt = e.log,
    jt = e.unstable_setDisableYieldValue,
    rt = null,
    ye = null
  function Qe(t) {
    if ((typeof Dt == 'function' && jt(t), ye && typeof ye.setStrictMode == 'function'))
      try {
        ye.setStrictMode(rt, t)
      } catch {}
  }
  var it = Math.clz32 ? Math.clz32 : Yt,
    wt = Math.log,
    ct = Math.LN2
  function Yt(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((wt(t) / ct) | 0)) | 0)
  }
  var Ze = 256,
    tn = 262144,
    xt = 4194304
  function ft(t) {
    var n = t & 42
    if (n !== 0) return n
    switch (t & -t) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
        return 64
      case 128:
        return 128
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560
      case 67108864:
        return 67108864
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 0
      default:
        return t
    }
  }
  function Nn(t, n, o) {
    var i = t.pendingLanes
    if (i === 0) return 0
    var s = 0,
      c = t.suspendedLanes,
      b = t.pingedLanes
    t = t.warmLanes
    var C = i & 134217727
    return (
      C !== 0
        ? ((i = C & ~c),
          i !== 0
            ? (s = ft(i))
            : ((b &= C), b !== 0 ? (s = ft(b)) : o || ((o = C & ~t), o !== 0 && (s = ft(o)))))
        : ((C = i & ~c),
          C !== 0
            ? (s = ft(C))
            : b !== 0
              ? (s = ft(b))
              : o || ((o = i & ~t), o !== 0 && (s = ft(o)))),
      s === 0
        ? 0
        : n !== 0 &&
            n !== s &&
            (n & c) === 0 &&
            ((c = s & -s), (o = n & -n), c >= o || (c === 32 && (o & 4194048) !== 0))
          ? n
          : s
    )
  }
  function Kn(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0
  }
  function fr(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function st() {
    var t = xt
    return ((xt <<= 1), (xt & 62914560) === 0 && (xt = 4194304), t)
  }
  function Et(t) {
    for (var n = [], o = 0; 31 > o; o++) n.push(t)
    return n
  }
  function Xt(t, n) {
    ;((t.pendingLanes |= n),
      n !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)))
  }
  function Bt(t, n, o, i, s, c) {
    var b = t.pendingLanes
    ;((t.pendingLanes = o),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= o),
      (t.entangledLanes &= o),
      (t.errorRecoveryDisabledLanes &= o),
      (t.shellSuspendCounter = 0))
    var C = t.entanglements,
      U = t.expirationTimes,
      J = t.hiddenUpdates
    for (o = b & ~o; 0 < o; ) {
      var ce = 31 - it(o),
        ge = 1 << ce
      ;((C[ce] = 0), (U[ce] = -1))
      var ne = J[ce]
      if (ne !== null)
        for (J[ce] = null, ce = 0; ce < ne.length; ce++) {
          var ae = ne[ce]
          ae !== null && (ae.lane &= -536870913)
        }
      o &= ~ge
    }
    ;(i !== 0 && qe(t, i, 0),
      c !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(b & ~n)))
  }
  function qe(t, n, o) {
    ;((t.pendingLanes |= n), (t.suspendedLanes &= ~n))
    var i = 31 - it(n)
    ;((t.entangledLanes |= n),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (o & 261930)))
  }
  function Pn(t, n) {
    var o = (t.entangledLanes |= n)
    for (t = t.entanglements; o; ) {
      var i = 31 - it(o),
        s = 1 << i
      ;((s & n) | (t[i] & n) && (t[i] |= n), (o &= ~s))
    }
  }
  function li(t, n) {
    var o = n & -n
    return ((o = (o & 42) !== 0 ? 1 : dr(o)), (o & (t.suspendedLanes | n)) !== 0 ? 0 : o)
  }
  function dr(t) {
    switch (t) {
      case 2:
        t = 1
        break
      case 8:
        t = 4
        break
      case 32:
        t = 16
        break
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128
        break
      case 268435456:
        t = 134217728
        break
      default:
        t = 0
    }
    return t
  }
  function Oo(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2)
  }
  function Ao() {
    var t = L.p
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : z0(t.type))
  }
  function oa(t, n) {
    var o = L.p
    try {
      return ((L.p = t), n())
    } finally {
      L.p = o
    }
  }
  var mr = Math.random().toString(36).slice(2),
    cn = '__reactFiber$' + mr,
    fn = '__reactProps$' + mr,
    mo = '__reactContainer$' + mr,
    pr = '__reactEvents$' + mr,
    No = '__reactListeners$' + mr,
    Fd = '__reactHandles$' + mr,
    hs = '__reactResources$' + mr,
    ii = '__reactMarker$' + mr
  function ai(t) {
    ;(delete t[cn], delete t[fn], delete t[pr], delete t[No], delete t[Fd])
  }
  function zo(t) {
    var n = t[cn]
    if (n) return n
    for (var o = t.parentNode; o; ) {
      if ((n = o[mo] || o[cn])) {
        if (((o = n.alternate), n.child !== null || (o !== null && o.child !== null)))
          for (t = g0(t); t !== null; ) {
            if ((o = t[cn])) return o
            t = g0(t)
          }
        return n
      }
      ;((t = o), (o = t.parentNode))
    }
    return null
  }
  function po(t) {
    if ((t = t[cn] || t[mo])) {
      var n = t.tag
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3) return t
    }
    return null
  }
  function si(t) {
    var n = t.tag
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode
    throw Error(a(33))
  }
  function Xr(t) {
    var n = t[hs]
    return (n || (n = t[hs] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), n)
  }
  function dn(t) {
    t[ii] = !0
  }
  var Xn = new Set(),
    Qn = {}
  function gr(t, n) {
    ;(Qr(t, n), Qr(t + 'Capture', n))
  }
  function Qr(t, n) {
    for (Qn[t] = n, t = 0; t < n.length; t++) Xn.add(n[t])
  }
  var Pd = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    la = {},
    ia = {}
  function qd(t) {
    return Oe.call(ia, t)
      ? !0
      : Oe.call(la, t)
        ? !1
        : Pd.test(t)
          ? (ia[t] = !0)
          : ((la[t] = !0), !1)
  }
  function Io(t, n, o) {
    if (qd(n))
      if (o === null) t.removeAttribute(n)
      else {
        switch (typeof o) {
          case 'undefined':
          case 'function':
          case 'symbol':
            t.removeAttribute(n)
            return
          case 'boolean':
            var i = n.toLowerCase().slice(0, 5)
            if (i !== 'data-' && i !== 'aria-') {
              t.removeAttribute(n)
              return
            }
        }
        t.setAttribute(n, '' + o)
      }
  }
  function fl(t, n, o) {
    if (o === null) t.removeAttribute(n)
    else {
      switch (typeof o) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(n)
          return
      }
      t.setAttribute(n, '' + o)
    }
  }
  function hr(t, n, o, i) {
    if (i === null) t.removeAttribute(o)
    else {
      switch (typeof i) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(o)
          return
      }
      t.setAttributeNS(n, o, '' + i)
    }
  }
  function Jn(t) {
    switch (typeof t) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return t
      case 'object':
        return t
      default:
        return ''
    }
  }
  function tc(t) {
    var n = t.type
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (n === 'checkbox' || n === 'radio')
  }
  function Gd(t, n, o) {
    var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, n)
    if (
      !t.hasOwnProperty(n) &&
      typeof i < 'u' &&
      typeof i.get == 'function' &&
      typeof i.set == 'function'
    ) {
      var s = i.get,
        c = i.set
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return s.call(this)
          },
          set: function (b) {
            ;((o = '' + b), c.call(this, b))
          },
        }),
        Object.defineProperty(t, n, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return o
          },
          setValue: function (b) {
            o = '' + b
          },
          stopTracking: function () {
            ;((t._valueTracker = null), delete t[n])
          },
        }
      )
    }
  }
  function bs(t) {
    if (!t._valueTracker) {
      var n = tc(t) ? 'checked' : 'value'
      t._valueTracker = Gd(t, n, '' + t[n])
    }
  }
  function aa(t) {
    if (!t) return !1
    var n = t._valueTracker
    if (!n) return !0
    var o = n.getValue(),
      i = ''
    return (
      t && (i = tc(t) ? (t.checked ? 'true' : 'false') : t.value),
      (t = i),
      t !== o ? (n.setValue(t), !0) : !1
    )
  }
  function dl(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null
    try {
      return t.activeElement || t.body
    } catch {
      return t.body
    }
  }
  var ys = /[\n"\\]/g
  function Wn(t) {
    return t.replace(ys, function (n) {
      return '\\' + n.charCodeAt(0).toString(16) + ' '
    })
  }
  function vs(t, n, o, i, s, c, b, C) {
    ;((t.name = ''),
      b != null && typeof b != 'function' && typeof b != 'symbol' && typeof b != 'boolean'
        ? (t.type = b)
        : t.removeAttribute('type'),
      n != null
        ? b === 'number'
          ? ((n === 0 && t.value === '') || t.value != n) && (t.value = '' + Jn(n))
          : t.value !== '' + Jn(n) && (t.value = '' + Jn(n))
        : (b !== 'submit' && b !== 'reset') || t.removeAttribute('value'),
      n != null
        ? xs(t, b, Jn(n))
        : o != null
          ? xs(t, b, Jn(o))
          : i != null && t.removeAttribute('value'),
      s == null && c != null && (t.defaultChecked = !!c),
      s != null && (t.checked = s && typeof s != 'function' && typeof s != 'symbol'),
      C != null && typeof C != 'function' && typeof C != 'symbol' && typeof C != 'boolean'
        ? (t.name = '' + Jn(C))
        : t.removeAttribute('name'))
  }
  function nc(t, n, o, i, s, c, b, C) {
    if (
      (c != null &&
        typeof c != 'function' &&
        typeof c != 'symbol' &&
        typeof c != 'boolean' &&
        (t.type = c),
      n != null || o != null)
    ) {
      if (!((c !== 'submit' && c !== 'reset') || n != null)) {
        bs(t)
        return
      }
      ;((o = o != null ? '' + Jn(o) : ''),
        (n = n != null ? '' + Jn(n) : o),
        C || n === t.value || (t.value = n),
        (t.defaultValue = n))
    }
    ;((i = i ?? s),
      (i = typeof i != 'function' && typeof i != 'symbol' && !!i),
      (t.checked = C ? t.checked : !!i),
      (t.defaultChecked = !!i),
      b != null &&
        typeof b != 'function' &&
        typeof b != 'symbol' &&
        typeof b != 'boolean' &&
        (t.name = b),
      bs(t))
  }
  function xs(t, n, o) {
    ;(n === 'number' && dl(t.ownerDocument) === t) ||
      t.defaultValue === '' + o ||
      (t.defaultValue = '' + o)
  }
  function ml(t, n, o, i) {
    if (((t = t.options), n)) {
      n = {}
      for (var s = 0; s < o.length; s++) n['$' + o[s]] = !0
      for (o = 0; o < t.length; o++)
        ((s = n.hasOwnProperty('$' + t[o].value)),
          t[o].selected !== s && (t[o].selected = s),
          s && i && (t[o].defaultSelected = !0))
    } else {
      for (o = '' + Jn(o), n = null, s = 0; s < t.length; s++) {
        if (t[s].value === o) {
          ;((t[s].selected = !0), i && (t[s].defaultSelected = !0))
          return
        }
        n !== null || t[s].disabled || (n = t[s])
      }
      n !== null && (n.selected = !0)
    }
  }
  function rc(t, n, o) {
    if (n != null && ((n = '' + Jn(n)), n !== t.value && (t.value = n), o == null)) {
      t.defaultValue !== n && (t.defaultValue = n)
      return
    }
    t.defaultValue = o != null ? '' + Jn(o) : ''
  }
  function ze(t, n, o, i) {
    if (n == null) {
      if (i != null) {
        if (o != null) throw Error(a(92))
        if (F(i)) {
          if (1 < i.length) throw Error(a(93))
          i = i[0]
        }
        o = i
      }
      ;(o == null && (o = ''), (n = o))
    }
    ;((o = Jn(n)),
      (t.defaultValue = o),
      (i = t.textContent),
      i === o && i !== '' && i !== null && (t.value = i),
      bs(t))
  }
  function Pe(t, n) {
    if (n) {
      var o = t.firstChild
      if (o && o === t.lastChild && o.nodeType === 3) {
        o.nodeValue = n
        return
      }
    }
    t.textContent = n
  }
  var ot = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  )
  function Ft(t, n, o) {
    var i = n.indexOf('--') === 0
    o == null || typeof o == 'boolean' || o === ''
      ? i
        ? t.setProperty(n, '')
        : n === 'float'
          ? (t.cssFloat = '')
          : (t[n] = '')
      : i
        ? t.setProperty(n, o)
        : typeof o != 'number' || o === 0 || ot.has(n)
          ? n === 'float'
            ? (t.cssFloat = o)
            : (t[n] = ('' + o).trim())
          : (t[n] = o + 'px')
  }
  function $t(t, n, o) {
    if (n != null && typeof n != 'object') throw Error(a(62))
    if (((t = t.style), o != null)) {
      for (var i in o)
        !o.hasOwnProperty(i) ||
          (n != null && n.hasOwnProperty(i)) ||
          (i.indexOf('--') === 0
            ? t.setProperty(i, '')
            : i === 'float'
              ? (t.cssFloat = '')
              : (t[i] = ''))
      for (var s in n) ((i = n[s]), n.hasOwnProperty(s) && o[s] !== i && Ft(t, s, i))
    } else for (var c in n) n.hasOwnProperty(c) && Ft(t, c, n[c])
  }
  function mn(t) {
    if (t.indexOf('-') === -1) return !1
    switch (t) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var Do = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    jo =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
  function ko(t) {
    return jo.test('' + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t
  }
  function Zr() {}
  var oc = null
  function Yd(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    )
  }
  var sa = null,
    ua = null
  function ib(t) {
    var n = po(t)
    if (n && (t = n.stateNode)) {
      var o = t[fn] || null
      e: switch (((t = n.stateNode), n.type)) {
        case 'input':
          if (
            (vs(
              t,
              o.value,
              o.defaultValue,
              o.defaultValue,
              o.checked,
              o.defaultChecked,
              o.type,
              o.name
            ),
            (n = o.name),
            o.type === 'radio' && n != null)
          ) {
            for (o = t; o.parentNode; ) o = o.parentNode
            for (
              o = o.querySelectorAll('input[name="' + Wn('' + n) + '"][type="radio"]'), n = 0;
              n < o.length;
              n++
            ) {
              var i = o[n]
              if (i !== t && i.form === t.form) {
                var s = i[fn] || null
                if (!s) throw Error(a(90))
                vs(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                )
              }
            }
            for (n = 0; n < o.length; n++) ((i = o[n]), i.form === t.form && aa(i))
          }
          break e
        case 'textarea':
          rc(t, o.value, o.defaultValue)
          break e
        case 'select':
          ;((n = o.value), n != null && ml(t, !!o.multiple, n, !1))
      }
    }
  }
  var $d = !1
  function ab(t, n, o) {
    if ($d) return t(n, o)
    $d = !0
    try {
      var i = t(n)
      return i
    } finally {
      if (
        (($d = !1),
        (sa !== null || ua !== null) &&
          (Gc(), sa && ((n = sa), (t = ua), (ua = sa = null), ib(n), t)))
      )
        for (n = 0; n < t.length; n++) ib(t[n])
    }
  }
  function Ss(t, n) {
    var o = t.stateNode
    if (o === null) return null
    var i = o[fn] || null
    if (i === null) return null
    o = i[n]
    e: switch (n) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;((i = !i.disabled) ||
          ((t = t.type),
          (i = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
          (t = !i))
        break e
      default:
        t = !1
    }
    if (t) return null
    if (o && typeof o != 'function') throw Error(a(231, n, typeof o))
    return o
  }
  var _o = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Kd = !1
  if (_o)
    try {
      var Rs = {}
      ;(Object.defineProperty(Rs, 'passive', {
        get: function () {
          Kd = !0
        },
      }),
        window.addEventListener('test', Rs, Rs),
        window.removeEventListener('test', Rs, Rs))
    } catch {
      Kd = !1
    }
  var pl = null,
    Xd = null,
    lc = null
  function sb() {
    if (lc) return lc
    var t,
      n = Xd,
      o = n.length,
      i,
      s = 'value' in pl ? pl.value : pl.textContent,
      c = s.length
    for (t = 0; t < o && n[t] === s[t]; t++);
    var b = o - t
    for (i = 1; i <= b && n[o - i] === s[c - i]; i++);
    return (lc = s.slice(t, 1 < i ? 1 - i : void 0))
  }
  function ic(t) {
    var n = t.keyCode
    return (
      'charCode' in t ? ((t = t.charCode), t === 0 && n === 13 && (t = 13)) : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    )
  }
  function ac() {
    return !0
  }
  function ub() {
    return !1
  }
  function er(t) {
    function n(o, i, s, c, b) {
      ;((this._reactName = o),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = c),
        (this.target = b),
        (this.currentTarget = null))
      for (var C in t) t.hasOwnProperty(C) && ((o = t[C]), (this[C] = o ? o(c) : c[C]))
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? ac
          : ub),
        (this.isPropagationStopped = ub),
        this
      )
    }
    return (
      y(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var o = this.nativeEvent
          o &&
            (o.preventDefault
              ? o.preventDefault()
              : typeof o.returnValue != 'unknown' && (o.returnValue = !1),
            (this.isDefaultPrevented = ac))
        },
        stopPropagation: function () {
          var o = this.nativeEvent
          o &&
            (o.stopPropagation
              ? o.stopPropagation()
              : typeof o.cancelBubble != 'unknown' && (o.cancelBubble = !0),
            (this.isPropagationStopped = ac))
        },
        persist: function () {},
        isPersistent: ac,
      }),
      n
    )
  }
  var ui = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    sc = er(ui),
    Es = y({}, ui, { view: 0, detail: 0 }),
    bE = er(Es),
    Qd,
    Zd,
    Ts,
    uc = y({}, Es, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Wd,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget
      },
      movementX: function (t) {
        return 'movementX' in t
          ? t.movementX
          : (t !== Ts &&
              (Ts && t.type === 'mousemove'
                ? ((Qd = t.screenX - Ts.screenX), (Zd = t.screenY - Ts.screenY))
                : (Zd = Qd = 0),
              (Ts = t)),
            Qd)
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Zd
      },
    }),
    cb = er(uc),
    yE = y({}, uc, { dataTransfer: 0 }),
    vE = er(yE),
    xE = y({}, Es, { relatedTarget: 0 }),
    Jd = er(xE),
    SE = y({}, ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    RE = er(SE),
    EE = y({}, ui, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData
      },
    }),
    TE = er(EE),
    CE = y({}, ui, { data: 0 }),
    fb = er(CE),
    wE = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    ME = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    OE = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
  function AE(t) {
    var n = this.nativeEvent
    return n.getModifierState ? n.getModifierState(t) : (t = OE[t]) ? !!n[t] : !1
  }
  function Wd() {
    return AE
  }
  var NE = y({}, Es, {
      key: function (t) {
        if (t.key) {
          var n = wE[t.key] || t.key
          if (n !== 'Unidentified') return n
        }
        return t.type === 'keypress'
          ? ((t = ic(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? ME[t.keyCode] || 'Unidentified'
            : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Wd,
      charCode: function (t) {
        return t.type === 'keypress' ? ic(t) : 0
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0
      },
      which: function (t) {
        return t.type === 'keypress'
          ? ic(t)
          : t.type === 'keydown' || t.type === 'keyup'
            ? t.keyCode
            : 0
      },
    }),
    zE = er(NE),
    IE = y({}, uc, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    db = er(IE),
    DE = y({}, Es, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Wd,
    }),
    jE = er(DE),
    kE = y({}, ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _E = er(kE),
    UE = y({}, uc, {
      deltaX: function (t) {
        return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0
      },
      deltaY: function (t) {
        return 'deltaY' in t
          ? t.deltaY
          : 'wheelDeltaY' in t
            ? -t.wheelDeltaY
            : 'wheelDelta' in t
              ? -t.wheelDelta
              : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    VE = er(UE),
    LE = y({}, ui, { newState: 0, oldState: 0 }),
    HE = er(LE),
    BE = [9, 13, 27, 32],
    em = _o && 'CompositionEvent' in window,
    Cs = null
  _o && 'documentMode' in document && (Cs = document.documentMode)
  var FE = _o && 'TextEvent' in window && !Cs,
    mb = _o && (!em || (Cs && 8 < Cs && 11 >= Cs)),
    pb = ' ',
    gb = !1
  function hb(t, n) {
    switch (t) {
      case 'keyup':
        return BE.indexOf(n.keyCode) !== -1
      case 'keydown':
        return n.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function bb(t) {
    return ((t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null)
  }
  var ca = !1
  function PE(t, n) {
    switch (t) {
      case 'compositionend':
        return bb(n)
      case 'keypress':
        return n.which !== 32 ? null : ((gb = !0), pb)
      case 'textInput':
        return ((t = n.data), t === pb && gb ? null : t)
      default:
        return null
    }
  }
  function qE(t, n) {
    if (ca)
      return t === 'compositionend' || (!em && hb(t, n))
        ? ((t = sb()), (lc = Xd = pl = null), (ca = !1), t)
        : null
    switch (t) {
      case 'paste':
        return null
      case 'keypress':
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char
          if (n.which) return String.fromCharCode(n.which)
        }
        return null
      case 'compositionend':
        return mb && n.locale !== 'ko' ? null : n.data
      default:
        return null
    }
  }
  var GE = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function yb(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase()
    return n === 'input' ? !!GE[t.type] : n === 'textarea'
  }
  function vb(t, n, o, i) {
    ;(sa ? (ua ? ua.push(i) : (ua = [i])) : (sa = i),
      (n = Jc(n, 'onChange')),
      0 < n.length &&
        ((o = new sc('onChange', 'change', null, o, i)), t.push({ event: o, listeners: n })))
  }
  var ws = null,
    Ms = null
  function YE(t) {
    t0(t, 0)
  }
  function cc(t) {
    var n = si(t)
    if (aa(n)) return t
  }
  function xb(t, n) {
    if (t === 'change') return n
  }
  var Sb = !1
  if (_o) {
    var tm
    if (_o) {
      var nm = 'oninput' in document
      if (!nm) {
        var Rb = document.createElement('div')
        ;(Rb.setAttribute('oninput', 'return;'), (nm = typeof Rb.oninput == 'function'))
      }
      tm = nm
    } else tm = !1
    Sb = tm && (!document.documentMode || 9 < document.documentMode)
  }
  function Eb() {
    ws && (ws.detachEvent('onpropertychange', Tb), (Ms = ws = null))
  }
  function Tb(t) {
    if (t.propertyName === 'value' && cc(Ms)) {
      var n = []
      ;(vb(n, Ms, t, Yd(t)), ab(YE, n))
    }
  }
  function $E(t, n, o) {
    t === 'focusin'
      ? (Eb(), (ws = n), (Ms = o), ws.attachEvent('onpropertychange', Tb))
      : t === 'focusout' && Eb()
  }
  function KE(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return cc(Ms)
  }
  function XE(t, n) {
    if (t === 'click') return cc(n)
  }
  function QE(t, n) {
    if (t === 'input' || t === 'change') return cc(n)
  }
  function ZE(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n)
  }
  var br = typeof Object.is == 'function' ? Object.is : ZE
  function Os(t, n) {
    if (br(t, n)) return !0
    if (typeof t != 'object' || t === null || typeof n != 'object' || n === null) return !1
    var o = Object.keys(t),
      i = Object.keys(n)
    if (o.length !== i.length) return !1
    for (i = 0; i < o.length; i++) {
      var s = o[i]
      if (!Oe.call(n, s) || !br(t[s], n[s])) return !1
    }
    return !0
  }
  function Cb(t) {
    for (; t && t.firstChild; ) t = t.firstChild
    return t
  }
  function wb(t, n) {
    var o = Cb(t)
    t = 0
    for (var i; o; ) {
      if (o.nodeType === 3) {
        if (((i = t + o.textContent.length), t <= n && i >= n)) return { node: o, offset: n - t }
        t = i
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling
            break e
          }
          o = o.parentNode
        }
        o = void 0
      }
      o = Cb(o)
    }
  }
  function Mb(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? Mb(t, n.parentNode)
            : 'contains' in t
              ? t.contains(n)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(n) & 16)
                : !1
      : !1
  }
  function Ob(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window
    for (var n = dl(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var o = typeof n.contentWindow.location.href == 'string'
      } catch {
        o = !1
      }
      if (o) t = n.contentWindow
      else break
      n = dl(t.document)
    }
    return n
  }
  function rm(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase()
    return (
      n &&
      ((n === 'input' &&
        (t.type === 'text' ||
          t.type === 'search' ||
          t.type === 'tel' ||
          t.type === 'url' ||
          t.type === 'password')) ||
        n === 'textarea' ||
        t.contentEditable === 'true')
    )
  }
  var JE = _o && 'documentMode' in document && 11 >= document.documentMode,
    fa = null,
    om = null,
    As = null,
    lm = !1
  function Ab(t, n, o) {
    var i = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument
    lm ||
      fa == null ||
      fa !== dl(i) ||
      ((i = fa),
      'selectionStart' in i && rm(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = ((i.ownerDocument && i.ownerDocument.defaultView) || window).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (As && Os(As, i)) ||
        ((As = i),
        (i = Jc(om, 'onSelect')),
        0 < i.length &&
          ((n = new sc('onSelect', 'select', null, n, o)),
          t.push({ event: n, listeners: i }),
          (n.target = fa))))
  }
  function ci(t, n) {
    var o = {}
    return (
      (o[t.toLowerCase()] = n.toLowerCase()),
      (o['Webkit' + t] = 'webkit' + n),
      (o['Moz' + t] = 'moz' + n),
      o
    )
  }
  var da = {
      animationend: ci('Animation', 'AnimationEnd'),
      animationiteration: ci('Animation', 'AnimationIteration'),
      animationstart: ci('Animation', 'AnimationStart'),
      transitionrun: ci('Transition', 'TransitionRun'),
      transitionstart: ci('Transition', 'TransitionStart'),
      transitioncancel: ci('Transition', 'TransitionCancel'),
      transitionend: ci('Transition', 'TransitionEnd'),
    },
    im = {},
    Nb = {}
  _o &&
    ((Nb = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete da.animationend.animation,
      delete da.animationiteration.animation,
      delete da.animationstart.animation),
    'TransitionEvent' in window || delete da.transitionend.transition)
  function fi(t) {
    if (im[t]) return im[t]
    if (!da[t]) return t
    var n = da[t],
      o
    for (o in n) if (n.hasOwnProperty(o) && o in Nb) return (im[t] = n[o])
    return t
  }
  var zb = fi('animationend'),
    Ib = fi('animationiteration'),
    Db = fi('animationstart'),
    WE = fi('transitionrun'),
    eT = fi('transitionstart'),
    tT = fi('transitioncancel'),
    jb = fi('transitionend'),
    kb = new Map(),
    am =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  am.push('scrollEnd')
  function Jr(t, n) {
    ;(kb.set(t, n), gr(n, [t]))
  }
  var fc =
      typeof reportError == 'function'
        ? reportError
        : function (t) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var n = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == 'object' && t !== null && typeof t.message == 'string'
                    ? String(t.message)
                    : String(t),
                error: t,
              })
              if (!window.dispatchEvent(n)) return
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', t)
              return
            }
            console.error(t)
          },
    Dr = [],
    ma = 0,
    sm = 0
  function dc() {
    for (var t = ma, n = (sm = ma = 0); n < t; ) {
      var o = Dr[n]
      Dr[n++] = null
      var i = Dr[n]
      Dr[n++] = null
      var s = Dr[n]
      Dr[n++] = null
      var c = Dr[n]
      if (((Dr[n++] = null), i !== null && s !== null)) {
        var b = i.pending
        ;(b === null ? (s.next = s) : ((s.next = b.next), (b.next = s)), (i.pending = s))
      }
      c !== 0 && _b(o, s, c)
    }
  }
  function mc(t, n, o, i) {
    ;((Dr[ma++] = t),
      (Dr[ma++] = n),
      (Dr[ma++] = o),
      (Dr[ma++] = i),
      (sm |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i))
  }
  function um(t, n, o, i) {
    return (mc(t, n, o, i), pc(t))
  }
  function di(t, n) {
    return (mc(t, null, null, n), pc(t))
  }
  function _b(t, n, o) {
    t.lanes |= o
    var i = t.alternate
    i !== null && (i.lanes |= o)
    for (var s = !1, c = t.return; c !== null; )
      ((c.childLanes |= o),
        (i = c.alternate),
        i !== null && (i.childLanes |= o),
        c.tag === 22 && ((t = c.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = c),
        (c = c.return))
    return t.tag === 3
      ? ((c = t.stateNode),
        s &&
          n !== null &&
          ((s = 31 - it(o)),
          (t = c.hiddenUpdates),
          (i = t[s]),
          i === null ? (t[s] = [n]) : i.push(n),
          (n.lane = o | 536870912)),
        c)
      : null
  }
  function pc(t) {
    if (50 < Zs) throw ((Zs = 0), (yp = null), Error(a(185)))
    for (var n = t.return; n !== null; ) ((t = n), (n = t.return))
    return t.tag === 3 ? t.stateNode : null
  }
  var pa = {}
  function nT(t, n, o, i) {
    ;((this.tag = t),
      (this.key = o),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null))
  }
  function yr(t, n, o, i) {
    return new nT(t, n, o, i)
  }
  function cm(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent))
  }
  function Uo(t, n) {
    var o = t.alternate
    return (
      o === null
        ? ((o = yr(t.tag, n, t.key, t.mode)),
          (o.elementType = t.elementType),
          (o.type = t.type),
          (o.stateNode = t.stateNode),
          (o.alternate = t),
          (t.alternate = o))
        : ((o.pendingProps = n),
          (o.type = t.type),
          (o.flags = 0),
          (o.subtreeFlags = 0),
          (o.deletions = null)),
      (o.flags = t.flags & 65011712),
      (o.childLanes = t.childLanes),
      (o.lanes = t.lanes),
      (o.child = t.child),
      (o.memoizedProps = t.memoizedProps),
      (o.memoizedState = t.memoizedState),
      (o.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (o.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (o.sibling = t.sibling),
      (o.index = t.index),
      (o.ref = t.ref),
      (o.refCleanup = t.refCleanup),
      o
    )
  }
  function Ub(t, n) {
    t.flags &= 65011714
    var o = t.alternate
    return (
      o === null
        ? ((t.childLanes = 0),
          (t.lanes = n),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = o.childLanes),
          (t.lanes = o.lanes),
          (t.child = o.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = o.memoizedProps),
          (t.memoizedState = o.memoizedState),
          (t.updateQueue = o.updateQueue),
          (t.type = o.type),
          (n = o.dependencies),
          (t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext })),
      t
    )
  }
  function gc(t, n, o, i, s, c) {
    var b = 0
    if (((i = t), typeof t == 'function')) cm(t) && (b = 1)
    else if (typeof t == 'string')
      b = a2(t, o, X.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5
    else
      e: switch (t) {
        case ee:
          return ((t = yr(31, o, n, s)), (t.elementType = ee), (t.lanes = c), t)
        case S:
          return mi(o.children, s, c, n)
        case N:
          ;((b = 8), (s |= 24))
          break
        case A:
          return ((t = yr(12, o, n, s | 2)), (t.elementType = A), (t.lanes = c), t)
        case M:
          return ((t = yr(13, o, n, s)), (t.elementType = M), (t.lanes = c), t)
        case V:
          return ((t = yr(19, o, n, s)), (t.elementType = V), (t.lanes = c), t)
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case I:
                b = 10
                break e
              case R:
                b = 9
                break e
              case j:
                b = 11
                break e
              case k:
                b = 14
                break e
              case _:
                ;((b = 16), (i = null))
                break e
            }
          ;((b = 29), (o = Error(a(130, t === null ? 'null' : typeof t, ''))), (i = null))
      }
    return ((n = yr(b, o, n, s)), (n.elementType = t), (n.type = i), (n.lanes = c), n)
  }
  function mi(t, n, o, i) {
    return ((t = yr(7, t, i, n)), (t.lanes = o), t)
  }
  function fm(t, n, o) {
    return ((t = yr(6, t, null, n)), (t.lanes = o), t)
  }
  function Vb(t) {
    var n = yr(18, null, null, 0)
    return ((n.stateNode = t), n)
  }
  function dm(t, n, o) {
    return (
      (n = yr(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = o),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    )
  }
  var Lb = new WeakMap()
  function jr(t, n) {
    if (typeof t == 'object' && t !== null) {
      var o = Lb.get(t)
      return o !== void 0 ? o : ((n = { value: t, source: n, stack: Le(n) }), Lb.set(t, n), n)
    }
    return { value: t, source: n, stack: Le(n) }
  }
  var ga = [],
    ha = 0,
    hc = null,
    Ns = 0,
    kr = [],
    _r = 0,
    gl = null,
    go = 1,
    ho = ''
  function Vo(t, n) {
    ;((ga[ha++] = Ns), (ga[ha++] = hc), (hc = t), (Ns = n))
  }
  function Hb(t, n, o) {
    ;((kr[_r++] = go), (kr[_r++] = ho), (kr[_r++] = gl), (gl = t))
    var i = go
    t = ho
    var s = 32 - it(i) - 1
    ;((i &= ~(1 << s)), (o += 1))
    var c = 32 - it(n) + s
    if (30 < c) {
      var b = s - (s % 5)
      ;((c = (i & ((1 << b) - 1)).toString(32)),
        (i >>= b),
        (s -= b),
        (go = (1 << (32 - it(n) + s)) | (o << s) | i),
        (ho = c + t))
    } else ((go = (1 << c) | (o << s) | i), (ho = t))
  }
  function mm(t) {
    t.return !== null && (Vo(t, 1), Hb(t, 1, 0))
  }
  function pm(t) {
    for (; t === hc; ) ((hc = ga[--ha]), (ga[ha] = null), (Ns = ga[--ha]), (ga[ha] = null))
    for (; t === gl; )
      ((gl = kr[--_r]),
        (kr[_r] = null),
        (ho = kr[--_r]),
        (kr[_r] = null),
        (go = kr[--_r]),
        (kr[_r] = null))
  }
  function Bb(t, n) {
    ;((kr[_r++] = go), (kr[_r++] = ho), (kr[_r++] = gl), (go = n.id), (ho = n.overflow), (gl = t))
  }
  var jn = null,
    Pt = null,
    vt = !1,
    hl = null,
    Ur = !1,
    gm = Error(a(519))
  function bl(t) {
    var n = Error(
      a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
    )
    throw (zs(jr(n, t)), gm)
  }
  function Fb(t) {
    var n = t.stateNode,
      o = t.type,
      i = t.memoizedProps
    switch (((n[cn] = t), (n[fn] = i), o)) {
      case 'dialog':
        ;(pt('cancel', n), pt('close', n))
        break
      case 'iframe':
      case 'object':
      case 'embed':
        pt('load', n)
        break
      case 'video':
      case 'audio':
        for (o = 0; o < Ws.length; o++) pt(Ws[o], n)
        break
      case 'source':
        pt('error', n)
        break
      case 'img':
      case 'image':
      case 'link':
        ;(pt('error', n), pt('load', n))
        break
      case 'details':
        pt('toggle', n)
        break
      case 'input':
        ;(pt('invalid', n),
          nc(n, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0))
        break
      case 'select':
        pt('invalid', n)
        break
      case 'textarea':
        ;(pt('invalid', n), ze(n, i.value, i.defaultValue, i.children))
    }
    ;((o = i.children),
      (typeof o != 'string' && typeof o != 'number' && typeof o != 'bigint') ||
      n.textContent === '' + o ||
      i.suppressHydrationWarning === !0 ||
      l0(n.textContent, o)
        ? (i.popover != null && (pt('beforetoggle', n), pt('toggle', n)),
          i.onScroll != null && pt('scroll', n),
          i.onScrollEnd != null && pt('scrollend', n),
          i.onClick != null && (n.onclick = Zr),
          (n = !0))
        : (n = !1),
      n || bl(t, !0))
  }
  function Pb(t) {
    for (jn = t.return; jn; )
      switch (jn.tag) {
        case 5:
        case 31:
        case 13:
          Ur = !1
          return
        case 27:
        case 3:
          Ur = !0
          return
        default:
          jn = jn.return
      }
  }
  function ba(t) {
    if (t !== jn) return !1
    if (!vt) return (Pb(t), (vt = !0), !1)
    var n = t.tag,
      o
    if (
      ((o = n !== 3 && n !== 27) &&
        ((o = n === 5) &&
          ((o = t.type), (o = !(o !== 'form' && o !== 'button') || Dp(t.type, t.memoizedProps))),
        (o = !o)),
      o && Pt && bl(t),
      Pb(t),
      n === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(a(317))
      Pt = p0(t)
    } else if (n === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(a(317))
      Pt = p0(t)
    } else
      n === 27
        ? ((n = Pt), zl(t.type) ? ((t = Vp), (Vp = null), (Pt = t)) : (Pt = n))
        : (Pt = jn ? Lr(t.stateNode.nextSibling) : null)
    return !0
  }
  function pi() {
    ;((Pt = jn = null), (vt = !1))
  }
  function hm() {
    var t = hl
    return (t !== null && (or === null ? (or = t) : or.push.apply(or, t), (hl = null)), t)
  }
  function zs(t) {
    hl === null ? (hl = [t]) : hl.push(t)
  }
  var bm = O(null),
    gi = null,
    Lo = null
  function yl(t, n, o) {
    ;(H(bm, n._currentValue), (n._currentValue = o))
  }
  function Ho(t) {
    ;((t._currentValue = bm.current), P(bm))
  }
  function ym(t, n, o) {
    for (; t !== null; ) {
      var i = t.alternate
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), i !== null && (i.childLanes |= n))
          : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n),
        t === o)
      )
        break
      t = t.return
    }
  }
  function vm(t, n, o, i) {
    var s = t.child
    for (s !== null && (s.return = t); s !== null; ) {
      var c = s.dependencies
      if (c !== null) {
        var b = s.child
        c = c.firstContext
        e: for (; c !== null; ) {
          var C = c
          c = s
          for (var U = 0; U < n.length; U++)
            if (C.context === n[U]) {
              ;((c.lanes |= o),
                (C = c.alternate),
                C !== null && (C.lanes |= o),
                ym(c.return, o, t),
                i || (b = null))
              break e
            }
          c = C.next
        }
      } else if (s.tag === 18) {
        if (((b = s.return), b === null)) throw Error(a(341))
        ;((b.lanes |= o), (c = b.alternate), c !== null && (c.lanes |= o), ym(b, o, t), (b = null))
      } else b = s.child
      if (b !== null) b.return = s
      else
        for (b = s; b !== null; ) {
          if (b === t) {
            b = null
            break
          }
          if (((s = b.sibling), s !== null)) {
            ;((s.return = b.return), (b = s))
            break
          }
          b = b.return
        }
      s = b
    }
  }
  function ya(t, n, o, i) {
    t = null
    for (var s = n, c = !1; s !== null; ) {
      if (!c) {
        if ((s.flags & 524288) !== 0) c = !0
        else if ((s.flags & 262144) !== 0) break
      }
      if (s.tag === 10) {
        var b = s.alternate
        if (b === null) throw Error(a(387))
        if (((b = b.memoizedProps), b !== null)) {
          var C = s.type
          br(s.pendingProps.value, b.value) || (t !== null ? t.push(C) : (t = [C]))
        }
      } else if (s === W.current) {
        if (((b = s.alternate), b === null)) throw Error(a(387))
        b.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(ou) : (t = [ou]))
      }
      s = s.return
    }
    ;(t !== null && vm(n, t, o, i), (n.flags |= 262144))
  }
  function bc(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!br(t.context._currentValue, t.memoizedValue)) return !0
      t = t.next
    }
    return !1
  }
  function hi(t) {
    ;((gi = t), (Lo = null), (t = t.dependencies), t !== null && (t.firstContext = null))
  }
  function kn(t) {
    return qb(gi, t)
  }
  function yc(t, n) {
    return (gi === null && hi(t), qb(t, n))
  }
  function qb(t, n) {
    var o = n._currentValue
    if (((n = { context: n, memoizedValue: o, next: null }), Lo === null)) {
      if (t === null) throw Error(a(308))
      ;((Lo = n), (t.dependencies = { lanes: 0, firstContext: n }), (t.flags |= 524288))
    } else Lo = Lo.next = n
    return o
  }
  var rT =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var t = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (o, i) {
                  t.push(i)
                },
              })
            this.abort = function () {
              ;((n.aborted = !0),
                t.forEach(function (o) {
                  return o()
                }))
            }
          },
    oT = e.unstable_scheduleCallback,
    lT = e.unstable_NormalPriority,
    pn = {
      $$typeof: I,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    }
  function xm() {
    return { controller: new rT(), data: new Map(), refCount: 0 }
  }
  function Is(t) {
    ;(t.refCount--,
      t.refCount === 0 &&
        oT(lT, function () {
          t.controller.abort()
        }))
  }
  var Ds = null,
    Sm = 0,
    va = 0,
    xa = null
  function iT(t, n) {
    if (Ds === null) {
      var o = (Ds = [])
      ;((Sm = 0),
        (va = Tp()),
        (xa = {
          status: 'pending',
          value: void 0,
          then: function (i) {
            o.push(i)
          },
        }))
    }
    return (Sm++, n.then(Gb, Gb), n)
  }
  function Gb() {
    if (--Sm === 0 && Ds !== null) {
      xa !== null && (xa.status = 'fulfilled')
      var t = Ds
      ;((Ds = null), (va = 0), (xa = null))
      for (var n = 0; n < t.length; n++) (0, t[n])()
    }
  }
  function aT(t, n) {
    var o = [],
      i = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (s) {
          o.push(s)
        },
      }
    return (
      t.then(
        function () {
          ;((i.status = 'fulfilled'), (i.value = n))
          for (var s = 0; s < o.length; s++) (0, o[s])(n)
        },
        function (s) {
          for (i.status = 'rejected', i.reason = s, s = 0; s < o.length; s++) (0, o[s])(void 0)
        }
      ),
      i
    )
  }
  var Yb = z.S
  z.S = function (t, n) {
    ;((Av = Me()),
      typeof n == 'object' && n !== null && typeof n.then == 'function' && iT(t, n),
      Yb !== null && Yb(t, n))
  }
  var bi = O(null)
  function Rm() {
    var t = bi.current
    return t !== null ? t : Vt.pooledCache
  }
  function vc(t, n) {
    n === null ? H(bi, bi.current) : H(bi, n.pool)
  }
  function $b() {
    var t = Rm()
    return t === null ? null : { parent: pn._currentValue, pool: t }
  }
  var Sa = Error(a(460)),
    Em = Error(a(474)),
    xc = Error(a(542)),
    Sc = { then: function () {} }
  function Kb(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected')
  }
  function Xb(t, n, o) {
    switch (
      ((o = t[o]), o === void 0 ? t.push(n) : o !== n && (n.then(Zr, Zr), (n = o)), n.status)
    ) {
      case 'fulfilled':
        return n.value
      case 'rejected':
        throw ((t = n.reason), Zb(t), t)
      default:
        if (typeof n.status == 'string') n.then(Zr, Zr)
        else {
          if (((t = Vt), t !== null && 100 < t.shellSuspendCounter)) throw Error(a(482))
          ;((t = n),
            (t.status = 'pending'),
            t.then(
              function (i) {
                if (n.status === 'pending') {
                  var s = n
                  ;((s.status = 'fulfilled'), (s.value = i))
                }
              },
              function (i) {
                if (n.status === 'pending') {
                  var s = n
                  ;((s.status = 'rejected'), (s.reason = i))
                }
              }
            ))
        }
        switch (n.status) {
          case 'fulfilled':
            return n.value
          case 'rejected':
            throw ((t = n.reason), Zb(t), t)
        }
        throw ((vi = n), Sa)
    }
  }
  function yi(t) {
    try {
      var n = t._init
      return n(t._payload)
    } catch (o) {
      throw o !== null && typeof o == 'object' && typeof o.then == 'function' ? ((vi = o), Sa) : o
    }
  }
  var vi = null
  function Qb() {
    if (vi === null) throw Error(a(459))
    var t = vi
    return ((vi = null), t)
  }
  function Zb(t) {
    if (t === Sa || t === xc) throw Error(a(483))
  }
  var Ra = null,
    js = 0
  function Rc(t) {
    var n = js
    return ((js += 1), Ra === null && (Ra = []), Xb(Ra, t, n))
  }
  function ks(t, n) {
    ;((n = n.props.ref), (t.ref = n !== void 0 ? n : null))
  }
  function Ec(t, n) {
    throw n.$$typeof === x
      ? Error(a(525))
      : ((t = Object.prototype.toString.call(n)),
        Error(
          a(
            31,
            t === '[object Object]' ? 'object with keys {' + Object.keys(n).join(', ') + '}' : t
          )
        ))
  }
  function Jb(t) {
    function n(G, B) {
      if (t) {
        var Z = G.deletions
        Z === null ? ((G.deletions = [B]), (G.flags |= 16)) : Z.push(B)
      }
    }
    function o(G, B) {
      if (!t) return null
      for (; B !== null; ) (n(G, B), (B = B.sibling))
      return null
    }
    function i(G) {
      for (var B = new Map(); G !== null; )
        (G.key !== null ? B.set(G.key, G) : B.set(G.index, G), (G = G.sibling))
      return B
    }
    function s(G, B) {
      return ((G = Uo(G, B)), (G.index = 0), (G.sibling = null), G)
    }
    function c(G, B, Z) {
      return (
        (G.index = Z),
        t
          ? ((Z = G.alternate),
            Z !== null
              ? ((Z = Z.index), Z < B ? ((G.flags |= 67108866), B) : Z)
              : ((G.flags |= 67108866), B))
          : ((G.flags |= 1048576), B)
      )
    }
    function b(G) {
      return (t && G.alternate === null && (G.flags |= 67108866), G)
    }
    function C(G, B, Z, me) {
      return B === null || B.tag !== 6
        ? ((B = fm(Z, G.mode, me)), (B.return = G), B)
        : ((B = s(B, Z)), (B.return = G), B)
    }
    function U(G, B, Z, me) {
      var Ge = Z.type
      return Ge === S
        ? ce(G, B, Z.props.children, me, Z.key)
        : B !== null &&
            (B.elementType === Ge ||
              (typeof Ge == 'object' && Ge !== null && Ge.$$typeof === _ && yi(Ge) === B.type))
          ? ((B = s(B, Z.props)), ks(B, Z), (B.return = G), B)
          : ((B = gc(Z.type, Z.key, Z.props, null, G.mode, me)), ks(B, Z), (B.return = G), B)
    }
    function J(G, B, Z, me) {
      return B === null ||
        B.tag !== 4 ||
        B.stateNode.containerInfo !== Z.containerInfo ||
        B.stateNode.implementation !== Z.implementation
        ? ((B = dm(Z, G.mode, me)), (B.return = G), B)
        : ((B = s(B, Z.children || [])), (B.return = G), B)
    }
    function ce(G, B, Z, me, Ge) {
      return B === null || B.tag !== 7
        ? ((B = mi(Z, G.mode, me, Ge)), (B.return = G), B)
        : ((B = s(B, Z)), (B.return = G), B)
    }
    function ge(G, B, Z) {
      if ((typeof B == 'string' && B !== '') || typeof B == 'number' || typeof B == 'bigint')
        return ((B = fm('' + B, G.mode, Z)), (B.return = G), B)
      if (typeof B == 'object' && B !== null) {
        switch (B.$$typeof) {
          case T:
            return ((Z = gc(B.type, B.key, B.props, null, G.mode, Z)), ks(Z, B), (Z.return = G), Z)
          case w:
            return ((B = dm(B, G.mode, Z)), (B.return = G), B)
          case _:
            return ((B = yi(B)), ge(G, B, Z))
        }
        if (F(B) || le(B)) return ((B = mi(B, G.mode, Z, null)), (B.return = G), B)
        if (typeof B.then == 'function') return ge(G, Rc(B), Z)
        if (B.$$typeof === I) return ge(G, yc(G, B), Z)
        Ec(G, B)
      }
      return null
    }
    function ne(G, B, Z, me) {
      var Ge = B !== null ? B.key : null
      if ((typeof Z == 'string' && Z !== '') || typeof Z == 'number' || typeof Z == 'bigint')
        return Ge !== null ? null : C(G, B, '' + Z, me)
      if (typeof Z == 'object' && Z !== null) {
        switch (Z.$$typeof) {
          case T:
            return Z.key === Ge ? U(G, B, Z, me) : null
          case w:
            return Z.key === Ge ? J(G, B, Z, me) : null
          case _:
            return ((Z = yi(Z)), ne(G, B, Z, me))
        }
        if (F(Z) || le(Z)) return Ge !== null ? null : ce(G, B, Z, me, null)
        if (typeof Z.then == 'function') return ne(G, B, Rc(Z), me)
        if (Z.$$typeof === I) return ne(G, B, yc(G, Z), me)
        Ec(G, Z)
      }
      return null
    }
    function ae(G, B, Z, me, Ge) {
      if ((typeof me == 'string' && me !== '') || typeof me == 'number' || typeof me == 'bigint')
        return ((G = G.get(Z) || null), C(B, G, '' + me, Ge))
      if (typeof me == 'object' && me !== null) {
        switch (me.$$typeof) {
          case T:
            return ((G = G.get(me.key === null ? Z : me.key) || null), U(B, G, me, Ge))
          case w:
            return ((G = G.get(me.key === null ? Z : me.key) || null), J(B, G, me, Ge))
          case _:
            return ((me = yi(me)), ae(G, B, Z, me, Ge))
        }
        if (F(me) || le(me)) return ((G = G.get(Z) || null), ce(B, G, me, Ge, null))
        if (typeof me.then == 'function') return ae(G, B, Z, Rc(me), Ge)
        if (me.$$typeof === I) return ae(G, B, Z, yc(B, me), Ge)
        Ec(B, me)
      }
      return null
    }
    function ke(G, B, Z, me) {
      for (
        var Ge = null, Tt = null, He = B, at = (B = 0), ht = null;
        He !== null && at < Z.length;
        at++
      ) {
        He.index > at ? ((ht = He), (He = null)) : (ht = He.sibling)
        var Ct = ne(G, He, Z[at], me)
        if (Ct === null) {
          He === null && (He = ht)
          break
        }
        ;(t && He && Ct.alternate === null && n(G, He),
          (B = c(Ct, B, at)),
          Tt === null ? (Ge = Ct) : (Tt.sibling = Ct),
          (Tt = Ct),
          (He = ht))
      }
      if (at === Z.length) return (o(G, He), vt && Vo(G, at), Ge)
      if (He === null) {
        for (; at < Z.length; at++)
          ((He = ge(G, Z[at], me)),
            He !== null &&
              ((B = c(He, B, at)), Tt === null ? (Ge = He) : (Tt.sibling = He), (Tt = He)))
        return (vt && Vo(G, at), Ge)
      }
      for (He = i(He); at < Z.length; at++)
        ((ht = ae(He, G, at, Z[at], me)),
          ht !== null &&
            (t && ht.alternate !== null && He.delete(ht.key === null ? at : ht.key),
            (B = c(ht, B, at)),
            Tt === null ? (Ge = ht) : (Tt.sibling = ht),
            (Tt = ht)))
      return (
        t &&
          He.forEach(function (_l) {
            return n(G, _l)
          }),
        vt && Vo(G, at),
        Ge
      )
    }
    function Ke(G, B, Z, me) {
      if (Z == null) throw Error(a(151))
      for (
        var Ge = null, Tt = null, He = B, at = (B = 0), ht = null, Ct = Z.next();
        He !== null && !Ct.done;
        at++, Ct = Z.next()
      ) {
        He.index > at ? ((ht = He), (He = null)) : (ht = He.sibling)
        var _l = ne(G, He, Ct.value, me)
        if (_l === null) {
          He === null && (He = ht)
          break
        }
        ;(t && He && _l.alternate === null && n(G, He),
          (B = c(_l, B, at)),
          Tt === null ? (Ge = _l) : (Tt.sibling = _l),
          (Tt = _l),
          (He = ht))
      }
      if (Ct.done) return (o(G, He), vt && Vo(G, at), Ge)
      if (He === null) {
        for (; !Ct.done; at++, Ct = Z.next())
          ((Ct = ge(G, Ct.value, me)),
            Ct !== null &&
              ((B = c(Ct, B, at)), Tt === null ? (Ge = Ct) : (Tt.sibling = Ct), (Tt = Ct)))
        return (vt && Vo(G, at), Ge)
      }
      for (He = i(He); !Ct.done; at++, Ct = Z.next())
        ((Ct = ae(He, G, at, Ct.value, me)),
          Ct !== null &&
            (t && Ct.alternate !== null && He.delete(Ct.key === null ? at : Ct.key),
            (B = c(Ct, B, at)),
            Tt === null ? (Ge = Ct) : (Tt.sibling = Ct),
            (Tt = Ct)))
      return (
        t &&
          He.forEach(function (y2) {
            return n(G, y2)
          }),
        vt && Vo(G, at),
        Ge
      )
    }
    function Ut(G, B, Z, me) {
      if (
        (typeof Z == 'object' &&
          Z !== null &&
          Z.type === S &&
          Z.key === null &&
          (Z = Z.props.children),
        typeof Z == 'object' && Z !== null)
      ) {
        switch (Z.$$typeof) {
          case T:
            e: {
              for (var Ge = Z.key; B !== null; ) {
                if (B.key === Ge) {
                  if (((Ge = Z.type), Ge === S)) {
                    if (B.tag === 7) {
                      ;(o(G, B.sibling), (me = s(B, Z.props.children)), (me.return = G), (G = me))
                      break e
                    }
                  } else if (
                    B.elementType === Ge ||
                    (typeof Ge == 'object' && Ge !== null && Ge.$$typeof === _ && yi(Ge) === B.type)
                  ) {
                    ;(o(G, B.sibling), (me = s(B, Z.props)), ks(me, Z), (me.return = G), (G = me))
                    break e
                  }
                  o(G, B)
                  break
                } else n(G, B)
                B = B.sibling
              }
              Z.type === S
                ? ((me = mi(Z.props.children, G.mode, me, Z.key)), (me.return = G), (G = me))
                : ((me = gc(Z.type, Z.key, Z.props, null, G.mode, me)),
                  ks(me, Z),
                  (me.return = G),
                  (G = me))
            }
            return b(G)
          case w:
            e: {
              for (Ge = Z.key; B !== null; ) {
                if (B.key === Ge)
                  if (
                    B.tag === 4 &&
                    B.stateNode.containerInfo === Z.containerInfo &&
                    B.stateNode.implementation === Z.implementation
                  ) {
                    ;(o(G, B.sibling), (me = s(B, Z.children || [])), (me.return = G), (G = me))
                    break e
                  } else {
                    o(G, B)
                    break
                  }
                else n(G, B)
                B = B.sibling
              }
              ;((me = dm(Z, G.mode, me)), (me.return = G), (G = me))
            }
            return b(G)
          case _:
            return ((Z = yi(Z)), Ut(G, B, Z, me))
        }
        if (F(Z)) return ke(G, B, Z, me)
        if (le(Z)) {
          if (((Ge = le(Z)), typeof Ge != 'function')) throw Error(a(150))
          return ((Z = Ge.call(Z)), Ke(G, B, Z, me))
        }
        if (typeof Z.then == 'function') return Ut(G, B, Rc(Z), me)
        if (Z.$$typeof === I) return Ut(G, B, yc(G, Z), me)
        Ec(G, Z)
      }
      return (typeof Z == 'string' && Z !== '') || typeof Z == 'number' || typeof Z == 'bigint'
        ? ((Z = '' + Z),
          B !== null && B.tag === 6
            ? (o(G, B.sibling), (me = s(B, Z)), (me.return = G), (G = me))
            : (o(G, B), (me = fm(Z, G.mode, me)), (me.return = G), (G = me)),
          b(G))
        : o(G, B)
    }
    return function (G, B, Z, me) {
      try {
        js = 0
        var Ge = Ut(G, B, Z, me)
        return ((Ra = null), Ge)
      } catch (He) {
        if (He === Sa || He === xc) throw He
        var Tt = yr(29, He, null, G.mode)
        return ((Tt.lanes = me), (Tt.return = G), Tt)
      }
    }
  }
  var xi = Jb(!0),
    Wb = Jb(!1),
    vl = !1
  function Tm(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    }
  }
  function Cm(t, n) {
    ;((t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }))
  }
  function xl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null }
  }
  function Sl(t, n, o) {
    var i = t.updateQueue
    if (i === null) return null
    if (((i = i.shared), (Mt & 2) !== 0)) {
      var s = i.pending
      return (
        s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
        (i.pending = n),
        (n = pc(t)),
        _b(t, null, o),
        n
      )
    }
    return (mc(t, i, n, o), pc(t))
  }
  function _s(t, n, o) {
    if (((n = n.updateQueue), n !== null && ((n = n.shared), (o & 4194048) !== 0))) {
      var i = n.lanes
      ;((i &= t.pendingLanes), (o |= i), (n.lanes = o), Pn(t, o))
    }
  }
  function wm(t, n) {
    var o = t.updateQueue,
      i = t.alternate
    if (i !== null && ((i = i.updateQueue), o === i)) {
      var s = null,
        c = null
      if (((o = o.firstBaseUpdate), o !== null)) {
        do {
          var b = { lane: o.lane, tag: o.tag, payload: o.payload, callback: null, next: null }
          ;(c === null ? (s = c = b) : (c = c.next = b), (o = o.next))
        } while (o !== null)
        c === null ? (s = c = n) : (c = c.next = n)
      } else s = c = n
      ;((o = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: c,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = o))
      return
    }
    ;((t = o.lastBaseUpdate),
      t === null ? (o.firstBaseUpdate = n) : (t.next = n),
      (o.lastBaseUpdate = n))
  }
  var Mm = !1
  function Us() {
    if (Mm) {
      var t = xa
      if (t !== null) throw t
    }
  }
  function Vs(t, n, o, i) {
    Mm = !1
    var s = t.updateQueue
    vl = !1
    var c = s.firstBaseUpdate,
      b = s.lastBaseUpdate,
      C = s.shared.pending
    if (C !== null) {
      s.shared.pending = null
      var U = C,
        J = U.next
      ;((U.next = null), b === null ? (c = J) : (b.next = J), (b = U))
      var ce = t.alternate
      ce !== null &&
        ((ce = ce.updateQueue),
        (C = ce.lastBaseUpdate),
        C !== b && (C === null ? (ce.firstBaseUpdate = J) : (C.next = J), (ce.lastBaseUpdate = U)))
    }
    if (c !== null) {
      var ge = s.baseState
      ;((b = 0), (ce = J = U = null), (C = c))
      do {
        var ne = C.lane & -536870913,
          ae = ne !== C.lane
        if (ae ? (gt & ne) === ne : (i & ne) === ne) {
          ;(ne !== 0 && ne === va && (Mm = !0),
            ce !== null &&
              (ce = ce.next =
                { lane: 0, tag: C.tag, payload: C.payload, callback: null, next: null }))
          e: {
            var ke = t,
              Ke = C
            ne = n
            var Ut = o
            switch (Ke.tag) {
              case 1:
                if (((ke = Ke.payload), typeof ke == 'function')) {
                  ge = ke.call(Ut, ge, ne)
                  break e
                }
                ge = ke
                break e
              case 3:
                ke.flags = (ke.flags & -65537) | 128
              case 0:
                if (
                  ((ke = Ke.payload),
                  (ne = typeof ke == 'function' ? ke.call(Ut, ge, ne) : ke),
                  ne == null)
                )
                  break e
                ge = y({}, ge, ne)
                break e
              case 2:
                vl = !0
            }
          }
          ;((ne = C.callback),
            ne !== null &&
              ((t.flags |= 64),
              ae && (t.flags |= 8192),
              (ae = s.callbacks),
              ae === null ? (s.callbacks = [ne]) : ae.push(ne)))
        } else
          ((ae = { lane: ne, tag: C.tag, payload: C.payload, callback: C.callback, next: null }),
            ce === null ? ((J = ce = ae), (U = ge)) : (ce = ce.next = ae),
            (b |= ne))
        if (((C = C.next), C === null)) {
          if (((C = s.shared.pending), C === null)) break
          ;((ae = C),
            (C = ae.next),
            (ae.next = null),
            (s.lastBaseUpdate = ae),
            (s.shared.pending = null))
        }
      } while (!0)
      ;(ce === null && (U = ge),
        (s.baseState = U),
        (s.firstBaseUpdate = J),
        (s.lastBaseUpdate = ce),
        c === null && (s.shared.lanes = 0),
        (wl |= b),
        (t.lanes = b),
        (t.memoizedState = ge))
    }
  }
  function ey(t, n) {
    if (typeof t != 'function') throw Error(a(191, t))
    t.call(n)
  }
  function ty(t, n) {
    var o = t.callbacks
    if (o !== null) for (t.callbacks = null, t = 0; t < o.length; t++) ey(o[t], n)
  }
  var Ea = O(null),
    Tc = O(0)
  function ny(t, n) {
    ;((t = Xo), H(Tc, t), H(Ea, n), (Xo = t | n.baseLanes))
  }
  function Om() {
    ;(H(Tc, Xo), H(Ea, Ea.current))
  }
  function Am() {
    ;((Xo = Tc.current), P(Ea), P(Tc))
  }
  var vr = O(null),
    Vr = null
  function Rl(t) {
    var n = t.alternate
    ;(H(nn, nn.current & 1),
      H(vr, t),
      Vr === null && (n === null || Ea.current !== null || n.memoizedState !== null) && (Vr = t))
  }
  function Nm(t) {
    ;(H(nn, nn.current), H(vr, t), Vr === null && (Vr = t))
  }
  function ry(t) {
    t.tag === 22 ? (H(nn, nn.current), H(vr, t), Vr === null && (Vr = t)) : El()
  }
  function El() {
    ;(H(nn, nn.current), H(vr, vr.current))
  }
  function xr(t) {
    ;(P(vr), Vr === t && (Vr = null), P(nn))
  }
  var nn = O(0)
  function Cc(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var o = n.memoizedState
        if (o !== null && ((o = o.dehydrated), o === null || _p(o) || Up(o))) return n
      } else if (
        n.tag === 19 &&
        (n.memoizedProps.revealOrder === 'forwards' ||
          n.memoizedProps.revealOrder === 'backwards' ||
          n.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          n.memoizedProps.revealOrder === 'together')
      ) {
        if ((n.flags & 128) !== 0) return n
      } else if (n.child !== null) {
        ;((n.child.return = n), (n = n.child))
        continue
      }
      if (n === t) break
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null
        n = n.return
      }
      ;((n.sibling.return = n.return), (n = n.sibling))
    }
    return null
  }
  var Bo = 0,
    lt = null,
    kt = null,
    gn = null,
    wc = !1,
    Ta = !1,
    Si = !1,
    Mc = 0,
    Ls = 0,
    Ca = null,
    sT = 0
  function Qt() {
    throw Error(a(321))
  }
  function zm(t, n) {
    if (n === null) return !1
    for (var o = 0; o < n.length && o < t.length; o++) if (!br(t[o], n[o])) return !1
    return !0
  }
  function Im(t, n, o, i, s, c) {
    return (
      (Bo = c),
      (lt = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (z.H = t === null || t.memoizedState === null ? Hy : $m),
      (Si = !1),
      (c = o(i, s)),
      (Si = !1),
      Ta && (c = ly(n, o, i, s)),
      oy(t),
      c
    )
  }
  function oy(t) {
    z.H = Fs
    var n = kt !== null && kt.next !== null
    if (((Bo = 0), (gn = kt = lt = null), (wc = !1), (Ls = 0), (Ca = null), n)) throw Error(a(300))
    t === null || hn || ((t = t.dependencies), t !== null && bc(t) && (hn = !0))
  }
  function ly(t, n, o, i) {
    lt = t
    var s = 0
    do {
      if ((Ta && (Ca = null), (Ls = 0), (Ta = !1), 25 <= s)) throw Error(a(301))
      if (((s += 1), (gn = kt = null), t.updateQueue != null)) {
        var c = t.updateQueue
        ;((c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0))
      }
      ;((z.H = By), (c = n(o, i)))
    } while (Ta)
    return c
  }
  function uT() {
    var t = z.H,
      n = t.useState()[0]
    return (
      (n = typeof n.then == 'function' ? Hs(n) : n),
      (t = t.useState()[0]),
      (kt !== null ? kt.memoizedState : null) !== t && (lt.flags |= 1024),
      n
    )
  }
  function Dm() {
    var t = Mc !== 0
    return ((Mc = 0), t)
  }
  function jm(t, n, o) {
    ;((n.updateQueue = t.updateQueue), (n.flags &= -2053), (t.lanes &= ~o))
  }
  function km(t) {
    if (wc) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue
        ;(n !== null && (n.pending = null), (t = t.next))
      }
      wc = !1
    }
    ;((Bo = 0), (gn = kt = lt = null), (Ta = !1), (Ls = Mc = 0), (Ca = null))
  }
  function Zn() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
    return (gn === null ? (lt.memoizedState = gn = t) : (gn = gn.next = t), gn)
  }
  function rn() {
    if (kt === null) {
      var t = lt.alternate
      t = t !== null ? t.memoizedState : null
    } else t = kt.next
    var n = gn === null ? lt.memoizedState : gn.next
    if (n !== null) ((gn = n), (kt = t))
    else {
      if (t === null) throw lt.alternate === null ? Error(a(467)) : Error(a(310))
      ;((kt = t),
        (t = {
          memoizedState: kt.memoizedState,
          baseState: kt.baseState,
          baseQueue: kt.baseQueue,
          queue: kt.queue,
          next: null,
        }),
        gn === null ? (lt.memoizedState = gn = t) : (gn = gn.next = t))
    }
    return gn
  }
  function Oc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null }
  }
  function Hs(t) {
    var n = Ls
    return (
      (Ls += 1),
      Ca === null && (Ca = []),
      (t = Xb(Ca, t, n)),
      (n = lt),
      (gn === null ? n.memoizedState : gn.next) === null &&
        ((n = n.alternate), (z.H = n === null || n.memoizedState === null ? Hy : $m)),
      t
    )
  }
  function Ac(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return Hs(t)
      if (t.$$typeof === I) return kn(t)
    }
    throw Error(a(438, String(t)))
  }
  function _m(t) {
    var n = null,
      o = lt.updateQueue
    if ((o !== null && (n = o.memoCache), n == null)) {
      var i = lt.alternate
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (n = {
              data: i.data.map(function (s) {
                return s.slice()
              }),
              index: 0,
            })))
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      o === null && ((o = Oc()), (lt.updateQueue = o)),
      (o.memoCache = n),
      (o = n.data[n.index]),
      o === void 0)
    )
      for (o = n.data[n.index] = Array(t), i = 0; i < t; i++) o[i] = ie
    return (n.index++, o)
  }
  function Fo(t, n) {
    return typeof n == 'function' ? n(t) : n
  }
  function Nc(t) {
    var n = rn()
    return Um(n, kt, t)
  }
  function Um(t, n, o) {
    var i = t.queue
    if (i === null) throw Error(a(311))
    i.lastRenderedReducer = o
    var s = t.baseQueue,
      c = i.pending
    if (c !== null) {
      if (s !== null) {
        var b = s.next
        ;((s.next = c.next), (c.next = b))
      }
      ;((n.baseQueue = s = c), (i.pending = null))
    }
    if (((c = t.baseState), s === null)) t.memoizedState = c
    else {
      n = s.next
      var C = (b = null),
        U = null,
        J = n,
        ce = !1
      do {
        var ge = J.lane & -536870913
        if (ge !== J.lane ? (gt & ge) === ge : (Bo & ge) === ge) {
          var ne = J.revertLane
          if (ne === 0)
            (U !== null &&
              (U = U.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: J.action,
                  hasEagerState: J.hasEagerState,
                  eagerState: J.eagerState,
                  next: null,
                }),
              ge === va && (ce = !0))
          else if ((Bo & ne) === ne) {
            ;((J = J.next), ne === va && (ce = !0))
            continue
          } else
            ((ge = {
              lane: 0,
              revertLane: J.revertLane,
              gesture: null,
              action: J.action,
              hasEagerState: J.hasEagerState,
              eagerState: J.eagerState,
              next: null,
            }),
              U === null ? ((C = U = ge), (b = c)) : (U = U.next = ge),
              (lt.lanes |= ne),
              (wl |= ne))
          ;((ge = J.action), Si && o(c, ge), (c = J.hasEagerState ? J.eagerState : o(c, ge)))
        } else
          ((ne = {
            lane: ge,
            revertLane: J.revertLane,
            gesture: J.gesture,
            action: J.action,
            hasEagerState: J.hasEagerState,
            eagerState: J.eagerState,
            next: null,
          }),
            U === null ? ((C = U = ne), (b = c)) : (U = U.next = ne),
            (lt.lanes |= ge),
            (wl |= ge))
        J = J.next
      } while (J !== null && J !== n)
      if (
        (U === null ? (b = c) : (U.next = C),
        !br(c, t.memoizedState) && ((hn = !0), ce && ((o = xa), o !== null)))
      )
        throw o
      ;((t.memoizedState = c), (t.baseState = b), (t.baseQueue = U), (i.lastRenderedState = c))
    }
    return (s === null && (i.lanes = 0), [t.memoizedState, i.dispatch])
  }
  function Vm(t) {
    var n = rn(),
      o = n.queue
    if (o === null) throw Error(a(311))
    o.lastRenderedReducer = t
    var i = o.dispatch,
      s = o.pending,
      c = n.memoizedState
    if (s !== null) {
      o.pending = null
      var b = (s = s.next)
      do ((c = t(c, b.action)), (b = b.next))
      while (b !== s)
      ;(br(c, n.memoizedState) || (hn = !0),
        (n.memoizedState = c),
        n.baseQueue === null && (n.baseState = c),
        (o.lastRenderedState = c))
    }
    return [c, i]
  }
  function iy(t, n, o) {
    var i = lt,
      s = rn(),
      c = vt
    if (c) {
      if (o === void 0) throw Error(a(407))
      o = o()
    } else o = n()
    var b = !br((kt || s).memoizedState, o)
    if (
      (b && ((s.memoizedState = o), (hn = !0)),
      (s = s.queue),
      Bm(uy.bind(null, i, s, t), [t]),
      s.getSnapshot !== n || b || (gn !== null && gn.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        wa(9, { destroy: void 0 }, sy.bind(null, i, s, o, n), null),
        Vt === null)
      )
        throw Error(a(349))
      c || (Bo & 127) !== 0 || ay(i, n, o)
    }
    return o
  }
  function ay(t, n, o) {
    ;((t.flags |= 16384),
      (t = { getSnapshot: n, value: o }),
      (n = lt.updateQueue),
      n === null
        ? ((n = Oc()), (lt.updateQueue = n), (n.stores = [t]))
        : ((o = n.stores), o === null ? (n.stores = [t]) : o.push(t)))
  }
  function sy(t, n, o, i) {
    ;((n.value = o), (n.getSnapshot = i), cy(n) && fy(t))
  }
  function uy(t, n, o) {
    return o(function () {
      cy(n) && fy(t)
    })
  }
  function cy(t) {
    var n = t.getSnapshot
    t = t.value
    try {
      var o = n()
      return !br(t, o)
    } catch {
      return !0
    }
  }
  function fy(t) {
    var n = di(t, 2)
    n !== null && lr(n, t, 2)
  }
  function Lm(t) {
    var n = Zn()
    if (typeof t == 'function') {
      var o = t
      if (((t = o()), Si)) {
        Qe(!0)
        try {
          o()
        } finally {
          Qe(!1)
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = t),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fo,
        lastRenderedState: t,
      }),
      n
    )
  }
  function dy(t, n, o, i) {
    return ((t.baseState = o), Um(t, kt, typeof i == 'function' ? i : Fo))
  }
  function cT(t, n, o, i, s) {
    if (Dc(t)) throw Error(a(485))
    if (((t = n.action), t !== null)) {
      var c = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (b) {
          c.listeners.push(b)
        },
      }
      ;(z.T !== null ? o(!0) : (c.isTransition = !1),
        i(c),
        (o = n.pending),
        o === null
          ? ((c.next = n.pending = c), my(n, c))
          : ((c.next = o.next), (n.pending = o.next = c)))
    }
  }
  function my(t, n) {
    var o = n.action,
      i = n.payload,
      s = t.state
    if (n.isTransition) {
      var c = z.T,
        b = {}
      z.T = b
      try {
        var C = o(s, i),
          U = z.S
        ;(U !== null && U(b, C), py(t, n, C))
      } catch (J) {
        Hm(t, n, J)
      } finally {
        ;(c !== null && b.types !== null && (c.types = b.types), (z.T = c))
      }
    } else
      try {
        ;((c = o(s, i)), py(t, n, c))
      } catch (J) {
        Hm(t, n, J)
      }
  }
  function py(t, n, o) {
    o !== null && typeof o == 'object' && typeof o.then == 'function'
      ? o.then(
          function (i) {
            gy(t, n, i)
          },
          function (i) {
            return Hm(t, n, i)
          }
        )
      : gy(t, n, o)
  }
  function gy(t, n, o) {
    ;((n.status = 'fulfilled'),
      (n.value = o),
      hy(n),
      (t.state = o),
      (n = t.pending),
      n !== null &&
        ((o = n.next), o === n ? (t.pending = null) : ((o = o.next), (n.next = o), my(t, o))))
  }
  function Hm(t, n, o) {
    var i = t.pending
    if (((t.pending = null), i !== null)) {
      i = i.next
      do ((n.status = 'rejected'), (n.reason = o), hy(n), (n = n.next))
      while (n !== i)
    }
    t.action = null
  }
  function hy(t) {
    t = t.listeners
    for (var n = 0; n < t.length; n++) (0, t[n])()
  }
  function by(t, n) {
    return n
  }
  function yy(t, n) {
    if (vt) {
      var o = Vt.formState
      if (o !== null) {
        e: {
          var i = lt
          if (vt) {
            if (Pt) {
              t: {
                for (var s = Pt, c = Ur; s.nodeType !== 8; ) {
                  if (!c) {
                    s = null
                    break t
                  }
                  if (((s = Lr(s.nextSibling)), s === null)) {
                    s = null
                    break t
                  }
                }
                ;((c = s.data), (s = c === 'F!' || c === 'F' ? s : null))
              }
              if (s) {
                ;((Pt = Lr(s.nextSibling)), (i = s.data === 'F!'))
                break e
              }
            }
            bl(i)
          }
          i = !1
        }
        i && (n = o[0])
      }
    }
    return (
      (o = Zn()),
      (o.memoizedState = o.baseState = n),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: by,
        lastRenderedState: n,
      }),
      (o.queue = i),
      (o = Uy.bind(null, lt, i)),
      (i.dispatch = o),
      (i = Lm(!1)),
      (c = Ym.bind(null, lt, !1, i.queue)),
      (i = Zn()),
      (s = { state: n, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (o = cT.bind(null, lt, s, c, o)),
      (s.dispatch = o),
      (i.memoizedState = t),
      [n, o, !1]
    )
  }
  function vy(t) {
    var n = rn()
    return xy(n, kt, t)
  }
  function xy(t, n, o) {
    if (
      ((n = Um(t, n, by)[0]),
      (t = Nc(Fo)[0]),
      typeof n == 'object' && n !== null && typeof n.then == 'function')
    )
      try {
        var i = Hs(n)
      } catch (b) {
        throw b === Sa ? xc : b
      }
    else i = n
    n = rn()
    var s = n.queue,
      c = s.dispatch
    return (
      o !== n.memoizedState &&
        ((lt.flags |= 2048), wa(9, { destroy: void 0 }, fT.bind(null, s, o), null)),
      [i, c, t]
    )
  }
  function fT(t, n) {
    t.action = n
  }
  function Sy(t) {
    var n = rn(),
      o = kt
    if (o !== null) return xy(n, o, t)
    ;(rn(), (n = n.memoizedState), (o = rn()))
    var i = o.queue.dispatch
    return ((o.memoizedState = t), [n, i, !1])
  }
  function wa(t, n, o, i) {
    return (
      (t = { tag: t, create: o, deps: i, inst: n, next: null }),
      (n = lt.updateQueue),
      n === null && ((n = Oc()), (lt.updateQueue = n)),
      (o = n.lastEffect),
      o === null
        ? (n.lastEffect = t.next = t)
        : ((i = o.next), (o.next = t), (t.next = i), (n.lastEffect = t)),
      t
    )
  }
  function Ry() {
    return rn().memoizedState
  }
  function zc(t, n, o, i) {
    var s = Zn()
    ;((lt.flags |= t),
      (s.memoizedState = wa(1 | n, { destroy: void 0 }, o, i === void 0 ? null : i)))
  }
  function Ic(t, n, o, i) {
    var s = rn()
    i = i === void 0 ? null : i
    var c = s.memoizedState.inst
    kt !== null && i !== null && zm(i, kt.memoizedState.deps)
      ? (s.memoizedState = wa(n, c, o, i))
      : ((lt.flags |= t), (s.memoizedState = wa(1 | n, c, o, i)))
  }
  function Ey(t, n) {
    zc(8390656, 8, t, n)
  }
  function Bm(t, n) {
    Ic(2048, 8, t, n)
  }
  function dT(t) {
    lt.flags |= 4
    var n = lt.updateQueue
    if (n === null) ((n = Oc()), (lt.updateQueue = n), (n.events = [t]))
    else {
      var o = n.events
      o === null ? (n.events = [t]) : o.push(t)
    }
  }
  function Ty(t) {
    var n = rn().memoizedState
    return (
      dT({ ref: n, nextImpl: t }),
      function () {
        if ((Mt & 2) !== 0) throw Error(a(440))
        return n.impl.apply(void 0, arguments)
      }
    )
  }
  function Cy(t, n) {
    return Ic(4, 2, t, n)
  }
  function wy(t, n) {
    return Ic(4, 4, t, n)
  }
  function My(t, n) {
    if (typeof n == 'function') {
      t = t()
      var o = n(t)
      return function () {
        typeof o == 'function' ? o() : n(null)
      }
    }
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null
        }
      )
  }
  function Oy(t, n, o) {
    ;((o = o != null ? o.concat([t]) : null), Ic(4, 4, My.bind(null, n, t), o))
  }
  function Fm() {}
  function Ay(t, n) {
    var o = rn()
    n = n === void 0 ? null : n
    var i = o.memoizedState
    return n !== null && zm(n, i[1]) ? i[0] : ((o.memoizedState = [t, n]), t)
  }
  function Ny(t, n) {
    var o = rn()
    n = n === void 0 ? null : n
    var i = o.memoizedState
    if (n !== null && zm(n, i[1])) return i[0]
    if (((i = t()), Si)) {
      Qe(!0)
      try {
        t()
      } finally {
        Qe(!1)
      }
    }
    return ((o.memoizedState = [i, n]), i)
  }
  function Pm(t, n, o) {
    return o === void 0 || ((Bo & 1073741824) !== 0 && (gt & 261930) === 0)
      ? (t.memoizedState = n)
      : ((t.memoizedState = o), (t = zv()), (lt.lanes |= t), (wl |= t), o)
  }
  function zy(t, n, o, i) {
    return br(o, n)
      ? o
      : Ea.current !== null
        ? ((t = Pm(t, o, i)), br(t, n) || (hn = !0), t)
        : (Bo & 42) === 0 || ((Bo & 1073741824) !== 0 && (gt & 261930) === 0)
          ? ((hn = !0), (t.memoizedState = o))
          : ((t = zv()), (lt.lanes |= t), (wl |= t), n)
  }
  function Iy(t, n, o, i, s) {
    var c = L.p
    L.p = c !== 0 && 8 > c ? c : 8
    var b = z.T,
      C = {}
    ;((z.T = C), Ym(t, !1, n, o))
    try {
      var U = s(),
        J = z.S
      if (
        (J !== null && J(C, U), U !== null && typeof U == 'object' && typeof U.then == 'function')
      ) {
        var ce = aT(U, i)
        Bs(t, n, ce, Er(t))
      } else Bs(t, n, i, Er(t))
    } catch (ge) {
      Bs(t, n, { then: function () {}, status: 'rejected', reason: ge }, Er())
    } finally {
      ;((L.p = c), b !== null && C.types !== null && (b.types = C.types), (z.T = b))
    }
  }
  function mT() {}
  function qm(t, n, o, i) {
    if (t.tag !== 5) throw Error(a(476))
    var s = Dy(t).queue
    Iy(
      t,
      s,
      n,
      D,
      o === null
        ? mT
        : function () {
            return (jy(t), o(i))
          }
    )
  }
  function Dy(t) {
    var n = t.memoizedState
    if (n !== null) return n
    n = {
      memoizedState: D,
      baseState: D,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fo,
        lastRenderedState: D,
      },
      next: null,
    }
    var o = {}
    return (
      (n.next = {
        memoizedState: o,
        baseState: o,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Fo,
          lastRenderedState: o,
        },
        next: null,
      }),
      (t.memoizedState = n),
      (t = t.alternate),
      t !== null && (t.memoizedState = n),
      n
    )
  }
  function jy(t) {
    var n = Dy(t)
    ;(n.next === null && (n = t.alternate.memoizedState), Bs(t, n.next.queue, {}, Er()))
  }
  function Gm() {
    return kn(ou)
  }
  function ky() {
    return rn().memoizedState
  }
  function _y() {
    return rn().memoizedState
  }
  function pT(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var o = Er()
          t = xl(o)
          var i = Sl(n, t, o)
          ;(i !== null && (lr(i, n, o), _s(i, n, o)), (n = { cache: xm() }), (t.payload = n))
          return
      }
      n = n.return
    }
  }
  function gT(t, n, o) {
    var i = Er()
    ;((o = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Dc(t) ? Vy(n, o) : ((o = um(t, n, o, i)), o !== null && (lr(o, t, i), Ly(o, n, i))))
  }
  function Uy(t, n, o) {
    var i = Er()
    Bs(t, n, o, i)
  }
  function Bs(t, n, o, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }
    if (Dc(t)) Vy(n, s)
    else {
      var c = t.alternate
      if (
        t.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = n.lastRenderedReducer), c !== null)
      )
        try {
          var b = n.lastRenderedState,
            C = c(b, o)
          if (((s.hasEagerState = !0), (s.eagerState = C), br(C, b)))
            return (mc(t, n, s, 0), Vt === null && dc(), !1)
        } catch {}
      if (((o = um(t, n, s, i)), o !== null)) return (lr(o, t, i), Ly(o, n, i), !0)
    }
    return !1
  }
  function Ym(t, n, o, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: Tp(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Dc(t))
    ) {
      if (n) throw Error(a(479))
    } else ((n = um(t, o, i, 2)), n !== null && lr(n, t, 2))
  }
  function Dc(t) {
    var n = t.alternate
    return t === lt || (n !== null && n === lt)
  }
  function Vy(t, n) {
    Ta = wc = !0
    var o = t.pending
    ;(o === null ? (n.next = n) : ((n.next = o.next), (o.next = n)), (t.pending = n))
  }
  function Ly(t, n, o) {
    if ((o & 4194048) !== 0) {
      var i = n.lanes
      ;((i &= t.pendingLanes), (o |= i), (n.lanes = o), Pn(t, o))
    }
  }
  var Fs = {
    readContext: kn,
    use: Ac,
    useCallback: Qt,
    useContext: Qt,
    useEffect: Qt,
    useImperativeHandle: Qt,
    useLayoutEffect: Qt,
    useInsertionEffect: Qt,
    useMemo: Qt,
    useReducer: Qt,
    useRef: Qt,
    useState: Qt,
    useDebugValue: Qt,
    useDeferredValue: Qt,
    useTransition: Qt,
    useSyncExternalStore: Qt,
    useId: Qt,
    useHostTransitionStatus: Qt,
    useFormState: Qt,
    useActionState: Qt,
    useOptimistic: Qt,
    useMemoCache: Qt,
    useCacheRefresh: Qt,
  }
  Fs.useEffectEvent = Qt
  var Hy = {
      readContext: kn,
      use: Ac,
      useCallback: function (t, n) {
        return ((Zn().memoizedState = [t, n === void 0 ? null : n]), t)
      },
      useContext: kn,
      useEffect: Ey,
      useImperativeHandle: function (t, n, o) {
        ;((o = o != null ? o.concat([t]) : null), zc(4194308, 4, My.bind(null, n, t), o))
      },
      useLayoutEffect: function (t, n) {
        return zc(4194308, 4, t, n)
      },
      useInsertionEffect: function (t, n) {
        zc(4, 2, t, n)
      },
      useMemo: function (t, n) {
        var o = Zn()
        n = n === void 0 ? null : n
        var i = t()
        if (Si) {
          Qe(!0)
          try {
            t()
          } finally {
            Qe(!1)
          }
        }
        return ((o.memoizedState = [i, n]), i)
      },
      useReducer: function (t, n, o) {
        var i = Zn()
        if (o !== void 0) {
          var s = o(n)
          if (Si) {
            Qe(!0)
            try {
              o(n)
            } finally {
              Qe(!1)
            }
          }
        } else s = n
        return (
          (i.memoizedState = i.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (i.queue = t),
          (t = t.dispatch = gT.bind(null, lt, t)),
          [i.memoizedState, t]
        )
      },
      useRef: function (t) {
        var n = Zn()
        return ((t = { current: t }), (n.memoizedState = t))
      },
      useState: function (t) {
        t = Lm(t)
        var n = t.queue,
          o = Uy.bind(null, lt, n)
        return ((n.dispatch = o), [t.memoizedState, o])
      },
      useDebugValue: Fm,
      useDeferredValue: function (t, n) {
        var o = Zn()
        return Pm(o, t, n)
      },
      useTransition: function () {
        var t = Lm(!1)
        return ((t = Iy.bind(null, lt, t.queue, !0, !1)), (Zn().memoizedState = t), [!1, t])
      },
      useSyncExternalStore: function (t, n, o) {
        var i = lt,
          s = Zn()
        if (vt) {
          if (o === void 0) throw Error(a(407))
          o = o()
        } else {
          if (((o = n()), Vt === null)) throw Error(a(349))
          ;(gt & 127) !== 0 || ay(i, n, o)
        }
        s.memoizedState = o
        var c = { value: o, getSnapshot: n }
        return (
          (s.queue = c),
          Ey(uy.bind(null, i, c, t), [t]),
          (i.flags |= 2048),
          wa(9, { destroy: void 0 }, sy.bind(null, i, c, o, n), null),
          o
        )
      },
      useId: function () {
        var t = Zn(),
          n = Vt.identifierPrefix
        if (vt) {
          var o = ho,
            i = go
          ;((o = (i & ~(1 << (32 - it(i) - 1))).toString(32) + o),
            (n = '_' + n + 'R_' + o),
            (o = Mc++),
            0 < o && (n += 'H' + o.toString(32)),
            (n += '_'))
        } else ((o = sT++), (n = '_' + n + 'r_' + o.toString(32) + '_'))
        return (t.memoizedState = n)
      },
      useHostTransitionStatus: Gm,
      useFormState: yy,
      useActionState: yy,
      useOptimistic: function (t) {
        var n = Zn()
        n.memoizedState = n.baseState = t
        var o = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        }
        return ((n.queue = o), (n = Ym.bind(null, lt, !0, o)), (o.dispatch = n), [t, n])
      },
      useMemoCache: _m,
      useCacheRefresh: function () {
        return (Zn().memoizedState = pT.bind(null, lt))
      },
      useEffectEvent: function (t) {
        var n = Zn(),
          o = { impl: t }
        return (
          (n.memoizedState = o),
          function () {
            if ((Mt & 2) !== 0) throw Error(a(440))
            return o.impl.apply(void 0, arguments)
          }
        )
      },
    },
    $m = {
      readContext: kn,
      use: Ac,
      useCallback: Ay,
      useContext: kn,
      useEffect: Bm,
      useImperativeHandle: Oy,
      useInsertionEffect: Cy,
      useLayoutEffect: wy,
      useMemo: Ny,
      useReducer: Nc,
      useRef: Ry,
      useState: function () {
        return Nc(Fo)
      },
      useDebugValue: Fm,
      useDeferredValue: function (t, n) {
        var o = rn()
        return zy(o, kt.memoizedState, t, n)
      },
      useTransition: function () {
        var t = Nc(Fo)[0],
          n = rn().memoizedState
        return [typeof t == 'boolean' ? t : Hs(t), n]
      },
      useSyncExternalStore: iy,
      useId: ky,
      useHostTransitionStatus: Gm,
      useFormState: vy,
      useActionState: vy,
      useOptimistic: function (t, n) {
        var o = rn()
        return dy(o, kt, t, n)
      },
      useMemoCache: _m,
      useCacheRefresh: _y,
    }
  $m.useEffectEvent = Ty
  var By = {
    readContext: kn,
    use: Ac,
    useCallback: Ay,
    useContext: kn,
    useEffect: Bm,
    useImperativeHandle: Oy,
    useInsertionEffect: Cy,
    useLayoutEffect: wy,
    useMemo: Ny,
    useReducer: Vm,
    useRef: Ry,
    useState: function () {
      return Vm(Fo)
    },
    useDebugValue: Fm,
    useDeferredValue: function (t, n) {
      var o = rn()
      return kt === null ? Pm(o, t, n) : zy(o, kt.memoizedState, t, n)
    },
    useTransition: function () {
      var t = Vm(Fo)[0],
        n = rn().memoizedState
      return [typeof t == 'boolean' ? t : Hs(t), n]
    },
    useSyncExternalStore: iy,
    useId: ky,
    useHostTransitionStatus: Gm,
    useFormState: Sy,
    useActionState: Sy,
    useOptimistic: function (t, n) {
      var o = rn()
      return kt !== null ? dy(o, kt, t, n) : ((o.baseState = t), [t, o.queue.dispatch])
    },
    useMemoCache: _m,
    useCacheRefresh: _y,
  }
  By.useEffectEvent = Ty
  function Km(t, n, o, i) {
    ;((n = t.memoizedState),
      (o = o(i, n)),
      (o = o == null ? n : y({}, n, o)),
      (t.memoizedState = o),
      t.lanes === 0 && (t.updateQueue.baseState = o))
  }
  var Xm = {
    enqueueSetState: function (t, n, o) {
      t = t._reactInternals
      var i = Er(),
        s = xl(i)
      ;((s.payload = n),
        o != null && (s.callback = o),
        (n = Sl(t, s, i)),
        n !== null && (lr(n, t, i), _s(n, t, i)))
    },
    enqueueReplaceState: function (t, n, o) {
      t = t._reactInternals
      var i = Er(),
        s = xl(i)
      ;((s.tag = 1),
        (s.payload = n),
        o != null && (s.callback = o),
        (n = Sl(t, s, i)),
        n !== null && (lr(n, t, i), _s(n, t, i)))
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals
      var o = Er(),
        i = xl(o)
      ;((i.tag = 2),
        n != null && (i.callback = n),
        (n = Sl(t, i, o)),
        n !== null && (lr(n, t, o), _s(n, t, o)))
    },
  }
  function Fy(t, n, o, i, s, c, b) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(i, c, b)
        : n.prototype && n.prototype.isPureReactComponent
          ? !Os(o, i) || !Os(s, c)
          : !0
    )
  }
  function Py(t, n, o, i) {
    ;((t = n.state),
      typeof n.componentWillReceiveProps == 'function' && n.componentWillReceiveProps(o, i),
      typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
        n.UNSAFE_componentWillReceiveProps(o, i),
      n.state !== t && Xm.enqueueReplaceState(n, n.state, null))
  }
  function Ri(t, n) {
    var o = n
    if ('ref' in n) {
      o = {}
      for (var i in n) i !== 'ref' && (o[i] = n[i])
    }
    if ((t = t.defaultProps)) {
      o === n && (o = y({}, o))
      for (var s in t) o[s] === void 0 && (o[s] = t[s])
    }
    return o
  }
  function qy(t) {
    fc(t)
  }
  function Gy(t) {
    console.error(t)
  }
  function Yy(t) {
    fc(t)
  }
  function jc(t, n) {
    try {
      var o = t.onUncaughtError
      o(n.value, { componentStack: n.stack })
    } catch (i) {
      setTimeout(function () {
        throw i
      })
    }
  }
  function $y(t, n, o) {
    try {
      var i = t.onCaughtError
      i(o.value, { componentStack: o.stack, errorBoundary: n.tag === 1 ? n.stateNode : null })
    } catch (s) {
      setTimeout(function () {
        throw s
      })
    }
  }
  function Qm(t, n, o) {
    return (
      (o = xl(o)),
      (o.tag = 3),
      (o.payload = { element: null }),
      (o.callback = function () {
        jc(t, n)
      }),
      o
    )
  }
  function Ky(t) {
    return ((t = xl(t)), (t.tag = 3), t)
  }
  function Xy(t, n, o, i) {
    var s = o.type.getDerivedStateFromError
    if (typeof s == 'function') {
      var c = i.value
      ;((t.payload = function () {
        return s(c)
      }),
        (t.callback = function () {
          $y(n, o, i)
        }))
    }
    var b = o.stateNode
    b !== null &&
      typeof b.componentDidCatch == 'function' &&
      (t.callback = function () {
        ;($y(n, o, i),
          typeof s != 'function' && (Ml === null ? (Ml = new Set([this])) : Ml.add(this)))
        var C = i.stack
        this.componentDidCatch(i.value, { componentStack: C !== null ? C : '' })
      })
  }
  function hT(t, n, o, i, s) {
    if (((o.flags |= 32768), i !== null && typeof i == 'object' && typeof i.then == 'function')) {
      if (((n = o.alternate), n !== null && ya(n, o, s, !0), (o = vr.current), o !== null)) {
        switch (o.tag) {
          case 31:
          case 13:
            return (
              Vr === null ? Yc() : o.alternate === null && Zt === 0 && (Zt = 3),
              (o.flags &= -257),
              (o.flags |= 65536),
              (o.lanes = s),
              i === Sc
                ? (o.flags |= 16384)
                : ((n = o.updateQueue),
                  n === null ? (o.updateQueue = new Set([i])) : n.add(i),
                  Sp(t, i, s)),
              !1
            )
          case 22:
            return (
              (o.flags |= 65536),
              i === Sc
                ? (o.flags |= 16384)
                : ((n = o.updateQueue),
                  n === null
                    ? ((n = { transitions: null, markerInstances: null, retryQueue: new Set([i]) }),
                      (o.updateQueue = n))
                    : ((o = n.retryQueue), o === null ? (n.retryQueue = new Set([i])) : o.add(i)),
                  Sp(t, i, s)),
              !1
            )
        }
        throw Error(a(435, o.tag))
      }
      return (Sp(t, i, s), Yc(), !1)
    }
    if (vt)
      return (
        (n = vr.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = s),
            i !== gm && ((t = Error(a(422), { cause: i })), zs(jr(t, o))))
          : (i !== gm && ((n = Error(a(423), { cause: i })), zs(jr(n, o))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = jr(i, o)),
            (s = Qm(t.stateNode, i, s)),
            wm(t, s),
            Zt !== 4 && (Zt = 2)),
        !1
      )
    var c = Error(a(520), { cause: i })
    if (((c = jr(c, o)), Qs === null ? (Qs = [c]) : Qs.push(c), Zt !== 4 && (Zt = 2), n === null))
      return !0
    ;((i = jr(i, o)), (o = n))
    do {
      switch (o.tag) {
        case 3:
          return (
            (o.flags |= 65536),
            (t = s & -s),
            (o.lanes |= t),
            (t = Qm(o.stateNode, i, t)),
            wm(o, t),
            !1
          )
        case 1:
          if (
            ((n = o.type),
            (c = o.stateNode),
            (o.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == 'function' ||
                (c !== null &&
                  typeof c.componentDidCatch == 'function' &&
                  (Ml === null || !Ml.has(c)))))
          )
            return (
              (o.flags |= 65536),
              (s &= -s),
              (o.lanes |= s),
              (s = Ky(s)),
              Xy(s, t, o, i),
              wm(o, s),
              !1
            )
      }
      o = o.return
    } while (o !== null)
    return !1
  }
  var Zm = Error(a(461)),
    hn = !1
  function _n(t, n, o, i) {
    n.child = t === null ? Wb(n, null, o, i) : xi(n, t.child, o, i)
  }
  function Qy(t, n, o, i, s) {
    o = o.render
    var c = n.ref
    if ('ref' in i) {
      var b = {}
      for (var C in i) C !== 'ref' && (b[C] = i[C])
    } else b = i
    return (
      hi(n),
      (i = Im(t, n, o, b, c, s)),
      (C = Dm()),
      t !== null && !hn
        ? (jm(t, n, s), Po(t, n, s))
        : (vt && C && mm(n), (n.flags |= 1), _n(t, n, i, s), n.child)
    )
  }
  function Zy(t, n, o, i, s) {
    if (t === null) {
      var c = o.type
      return typeof c == 'function' && !cm(c) && c.defaultProps === void 0 && o.compare === null
        ? ((n.tag = 15), (n.type = c), Jy(t, n, c, i, s))
        : ((t = gc(o.type, null, i, n, n.mode, s)), (t.ref = n.ref), (t.return = n), (n.child = t))
    }
    if (((c = t.child), !lp(t, s))) {
      var b = c.memoizedProps
      if (((o = o.compare), (o = o !== null ? o : Os), o(b, i) && t.ref === n.ref))
        return Po(t, n, s)
    }
    return ((n.flags |= 1), (t = Uo(c, i)), (t.ref = n.ref), (t.return = n), (n.child = t))
  }
  function Jy(t, n, o, i, s) {
    if (t !== null) {
      var c = t.memoizedProps
      if (Os(c, i) && t.ref === n.ref)
        if (((hn = !1), (n.pendingProps = i = c), lp(t, s))) (t.flags & 131072) !== 0 && (hn = !0)
        else return ((n.lanes = t.lanes), Po(t, n, s))
    }
    return Jm(t, n, o, i, s)
  }
  function Wy(t, n, o, i) {
    var s = i.children,
      c = t !== null ? t.memoizedState : null
    if (
      (t === null &&
        n.stateNode === null &&
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === 'hidden')
    ) {
      if ((n.flags & 128) !== 0) {
        if (((c = c !== null ? c.baseLanes | o : o), t !== null)) {
          for (i = n.child = t.child, s = 0; i !== null; )
            ((s = s | i.lanes | i.childLanes), (i = i.sibling))
          i = s & ~c
        } else ((i = 0), (n.child = null))
        return ev(t, n, c, o, i)
      }
      if ((o & 536870912) !== 0)
        ((n.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && vc(n, c !== null ? c.cachePool : null),
          c !== null ? ny(n, c) : Om(),
          ry(n))
      else return ((i = n.lanes = 536870912), ev(t, n, c !== null ? c.baseLanes | o : o, o, i))
    } else
      c !== null
        ? (vc(n, c.cachePool), ny(n, c), El(), (n.memoizedState = null))
        : (t !== null && vc(n, null), Om(), El())
    return (_n(t, n, s, o), n.child)
  }
  function Ps(t, n) {
    return (
      (t !== null && t.tag === 22) ||
        n.stateNode !== null ||
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.sibling
    )
  }
  function ev(t, n, o, i, s) {
    var c = Rm()
    return (
      (c = c === null ? null : { parent: pn._currentValue, pool: c }),
      (n.memoizedState = { baseLanes: o, cachePool: c }),
      t !== null && vc(n, null),
      Om(),
      ry(n),
      t !== null && ya(t, n, i, !0),
      (n.childLanes = s),
      null
    )
  }
  function kc(t, n) {
    return (
      (n = Uc({ mode: n.mode, children: n.children }, t.mode)),
      (n.ref = t.ref),
      (t.child = n),
      (n.return = t),
      n
    )
  }
  function tv(t, n, o) {
    return (
      xi(n, t.child, null, o),
      (t = kc(n, n.pendingProps)),
      (t.flags |= 2),
      xr(n),
      (n.memoizedState = null),
      t
    )
  }
  function bT(t, n, o) {
    var i = n.pendingProps,
      s = (n.flags & 128) !== 0
    if (((n.flags &= -129), t === null)) {
      if (vt) {
        if (i.mode === 'hidden') return ((t = kc(n, i)), (n.lanes = 536870912), Ps(null, t))
        if (
          (Nm(n),
          (t = Pt)
            ? ((t = m0(t, Ur)),
              (t = t !== null && t.data === '&' ? t : null),
              t !== null &&
                ((n.memoizedState = {
                  dehydrated: t,
                  treeContext: gl !== null ? { id: go, overflow: ho } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (o = Vb(t)),
                (o.return = n),
                (n.child = o),
                (jn = n),
                (Pt = null)))
            : (t = null),
          t === null)
        )
          throw bl(n)
        return ((n.lanes = 536870912), null)
      }
      return kc(n, i)
    }
    var c = t.memoizedState
    if (c !== null) {
      var b = c.dehydrated
      if ((Nm(n), s))
        if (n.flags & 256) ((n.flags &= -257), (n = tv(t, n, o)))
        else if (n.memoizedState !== null) ((n.child = t.child), (n.flags |= 128), (n = null))
        else throw Error(a(558))
      else if ((hn || ya(t, n, o, !1), (s = (o & t.childLanes) !== 0), hn || s)) {
        if (((i = Vt), i !== null && ((b = li(i, o)), b !== 0 && b !== c.retryLane)))
          throw ((c.retryLane = b), di(t, b), lr(i, t, b), Zm)
        ;(Yc(), (n = tv(t, n, o)))
      } else
        ((t = c.treeContext),
          (Pt = Lr(b.nextSibling)),
          (jn = n),
          (vt = !0),
          (hl = null),
          (Ur = !1),
          t !== null && Bb(n, t),
          (n = kc(n, i)),
          (n.flags |= 4096))
      return n
    }
    return (
      (t = Uo(t.child, { mode: i.mode, children: i.children })),
      (t.ref = n.ref),
      (n.child = t),
      (t.return = n),
      t
    )
  }
  function _c(t, n) {
    var o = n.ref
    if (o === null) t !== null && t.ref !== null && (n.flags |= 4194816)
    else {
      if (typeof o != 'function' && typeof o != 'object') throw Error(a(284))
      ;(t === null || t.ref !== o) && (n.flags |= 4194816)
    }
  }
  function Jm(t, n, o, i, s) {
    return (
      hi(n),
      (o = Im(t, n, o, i, void 0, s)),
      (i = Dm()),
      t !== null && !hn
        ? (jm(t, n, s), Po(t, n, s))
        : (vt && i && mm(n), (n.flags |= 1), _n(t, n, o, s), n.child)
    )
  }
  function nv(t, n, o, i, s, c) {
    return (
      hi(n),
      (n.updateQueue = null),
      (o = ly(n, i, o, s)),
      oy(t),
      (i = Dm()),
      t !== null && !hn
        ? (jm(t, n, c), Po(t, n, c))
        : (vt && i && mm(n), (n.flags |= 1), _n(t, n, o, c), n.child)
    )
  }
  function rv(t, n, o, i, s) {
    if ((hi(n), n.stateNode === null)) {
      var c = pa,
        b = o.contextType
      ;(typeof b == 'object' && b !== null && (c = kn(b)),
        (c = new o(i, c)),
        (n.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = Xm),
        (n.stateNode = c),
        (c._reactInternals = n),
        (c = n.stateNode),
        (c.props = i),
        (c.state = n.memoizedState),
        (c.refs = {}),
        Tm(n),
        (b = o.contextType),
        (c.context = typeof b == 'object' && b !== null ? kn(b) : pa),
        (c.state = n.memoizedState),
        (b = o.getDerivedStateFromProps),
        typeof b == 'function' && (Km(n, o, b, i), (c.state = n.memoizedState)),
        typeof o.getDerivedStateFromProps == 'function' ||
          typeof c.getSnapshotBeforeUpdate == 'function' ||
          (typeof c.UNSAFE_componentWillMount != 'function' &&
            typeof c.componentWillMount != 'function') ||
          ((b = c.state),
          typeof c.componentWillMount == 'function' && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == 'function' && c.UNSAFE_componentWillMount(),
          b !== c.state && Xm.enqueueReplaceState(c, c.state, null),
          Vs(n, i, c, s),
          Us(),
          (c.state = n.memoizedState)),
        typeof c.componentDidMount == 'function' && (n.flags |= 4194308),
        (i = !0))
    } else if (t === null) {
      c = n.stateNode
      var C = n.memoizedProps,
        U = Ri(o, C)
      c.props = U
      var J = c.context,
        ce = o.contextType
      ;((b = pa), typeof ce == 'object' && ce !== null && (b = kn(ce)))
      var ge = o.getDerivedStateFromProps
      ;((ce = typeof ge == 'function' || typeof c.getSnapshotBeforeUpdate == 'function'),
        (C = n.pendingProps !== C),
        ce ||
          (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof c.componentWillReceiveProps != 'function') ||
          ((C || J !== b) && Py(n, c, i, b)),
        (vl = !1))
      var ne = n.memoizedState
      ;((c.state = ne),
        Vs(n, i, c, s),
        Us(),
        (J = n.memoizedState),
        C || ne !== J || vl
          ? (typeof ge == 'function' && (Km(n, o, ge, i), (J = n.memoizedState)),
            (U = vl || Fy(n, o, U, i, ne, J, b))
              ? (ce ||
                  (typeof c.UNSAFE_componentWillMount != 'function' &&
                    typeof c.componentWillMount != 'function') ||
                  (typeof c.componentWillMount == 'function' && c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == 'function' &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == 'function' && (n.flags |= 4194308))
              : (typeof c.componentDidMount == 'function' && (n.flags |= 4194308),
                (n.memoizedProps = i),
                (n.memoizedState = J)),
            (c.props = i),
            (c.state = J),
            (c.context = b),
            (i = U))
          : (typeof c.componentDidMount == 'function' && (n.flags |= 4194308), (i = !1)))
    } else {
      ;((c = n.stateNode),
        Cm(t, n),
        (b = n.memoizedProps),
        (ce = Ri(o, b)),
        (c.props = ce),
        (ge = n.pendingProps),
        (ne = c.context),
        (J = o.contextType),
        (U = pa),
        typeof J == 'object' && J !== null && (U = kn(J)),
        (C = o.getDerivedStateFromProps),
        (J = typeof C == 'function' || typeof c.getSnapshotBeforeUpdate == 'function') ||
          (typeof c.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof c.componentWillReceiveProps != 'function') ||
          ((b !== ge || ne !== U) && Py(n, c, i, U)),
        (vl = !1),
        (ne = n.memoizedState),
        (c.state = ne),
        Vs(n, i, c, s),
        Us())
      var ae = n.memoizedState
      b !== ge || ne !== ae || vl || (t !== null && t.dependencies !== null && bc(t.dependencies))
        ? (typeof C == 'function' && (Km(n, o, C, i), (ae = n.memoizedState)),
          (ce =
            vl ||
            Fy(n, o, ce, i, ne, ae, U) ||
            (t !== null && t.dependencies !== null && bc(t.dependencies)))
            ? (J ||
                (typeof c.UNSAFE_componentWillUpdate != 'function' &&
                  typeof c.componentWillUpdate != 'function') ||
                (typeof c.componentWillUpdate == 'function' && c.componentWillUpdate(i, ae, U),
                typeof c.UNSAFE_componentWillUpdate == 'function' &&
                  c.UNSAFE_componentWillUpdate(i, ae, U)),
              typeof c.componentDidUpdate == 'function' && (n.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == 'function' && (n.flags |= 1024))
            : (typeof c.componentDidUpdate != 'function' ||
                (b === t.memoizedProps && ne === t.memoizedState) ||
                (n.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != 'function' ||
                (b === t.memoizedProps && ne === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = i),
              (n.memoizedState = ae)),
          (c.props = i),
          (c.state = ae),
          (c.context = U),
          (i = ce))
        : (typeof c.componentDidUpdate != 'function' ||
            (b === t.memoizedProps && ne === t.memoizedState) ||
            (n.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != 'function' ||
            (b === t.memoizedProps && ne === t.memoizedState) ||
            (n.flags |= 1024),
          (i = !1))
    }
    return (
      (c = i),
      _c(t, n),
      (i = (n.flags & 128) !== 0),
      c || i
        ? ((c = n.stateNode),
          (o = i && typeof o.getDerivedStateFromError != 'function' ? null : c.render()),
          (n.flags |= 1),
          t !== null && i
            ? ((n.child = xi(n, t.child, null, s)), (n.child = xi(n, null, o, s)))
            : _n(t, n, o, s),
          (n.memoizedState = c.state),
          (t = n.child))
        : (t = Po(t, n, s)),
      t
    )
  }
  function ov(t, n, o, i) {
    return (pi(), (n.flags |= 256), _n(t, n, o, i), n.child)
  }
  var Wm = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }
  function ep(t) {
    return { baseLanes: t, cachePool: $b() }
  }
  function tp(t, n, o) {
    return ((t = t !== null ? t.childLanes & ~o : 0), n && (t |= Rr), t)
  }
  function lv(t, n, o) {
    var i = n.pendingProps,
      s = !1,
      c = (n.flags & 128) !== 0,
      b
    if (
      ((b = c) || (b = t !== null && t.memoizedState === null ? !1 : (nn.current & 2) !== 0),
      b && ((s = !0), (n.flags &= -129)),
      (b = (n.flags & 32) !== 0),
      (n.flags &= -33),
      t === null)
    ) {
      if (vt) {
        if (
          (s ? Rl(n) : El(),
          (t = Pt)
            ? ((t = m0(t, Ur)),
              (t = t !== null && t.data !== '&' ? t : null),
              t !== null &&
                ((n.memoizedState = {
                  dehydrated: t,
                  treeContext: gl !== null ? { id: go, overflow: ho } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (o = Vb(t)),
                (o.return = n),
                (n.child = o),
                (jn = n),
                (Pt = null)))
            : (t = null),
          t === null)
        )
          throw bl(n)
        return (Up(t) ? (n.lanes = 32) : (n.lanes = 536870912), null)
      }
      var C = i.children
      return (
        (i = i.fallback),
        s
          ? (El(),
            (s = n.mode),
            (C = Uc({ mode: 'hidden', children: C }, s)),
            (i = mi(i, s, o, null)),
            (C.return = n),
            (i.return = n),
            (C.sibling = i),
            (n.child = C),
            (i = n.child),
            (i.memoizedState = ep(o)),
            (i.childLanes = tp(t, b, o)),
            (n.memoizedState = Wm),
            Ps(null, i))
          : (Rl(n), np(n, C))
      )
    }
    var U = t.memoizedState
    if (U !== null && ((C = U.dehydrated), C !== null)) {
      if (c)
        n.flags & 256
          ? (Rl(n), (n.flags &= -257), (n = rp(t, n, o)))
          : n.memoizedState !== null
            ? (El(), (n.child = t.child), (n.flags |= 128), (n = null))
            : (El(),
              (C = i.fallback),
              (s = n.mode),
              (i = Uc({ mode: 'visible', children: i.children }, s)),
              (C = mi(C, s, o, null)),
              (C.flags |= 2),
              (i.return = n),
              (C.return = n),
              (i.sibling = C),
              (n.child = i),
              xi(n, t.child, null, o),
              (i = n.child),
              (i.memoizedState = ep(o)),
              (i.childLanes = tp(t, b, o)),
              (n.memoizedState = Wm),
              (n = Ps(null, i)))
      else if ((Rl(n), Up(C))) {
        if (((b = C.nextSibling && C.nextSibling.dataset), b)) var J = b.dgst
        ;((b = J),
          (i = Error(a(419))),
          (i.stack = ''),
          (i.digest = b),
          zs({ value: i, source: null, stack: null }),
          (n = rp(t, n, o)))
      } else if ((hn || ya(t, n, o, !1), (b = (o & t.childLanes) !== 0), hn || b)) {
        if (((b = Vt), b !== null && ((i = li(b, o)), i !== 0 && i !== U.retryLane)))
          throw ((U.retryLane = i), di(t, i), lr(b, t, i), Zm)
        ;(_p(C) || Yc(), (n = rp(t, n, o)))
      } else
        _p(C)
          ? ((n.flags |= 192), (n.child = t.child), (n = null))
          : ((t = U.treeContext),
            (Pt = Lr(C.nextSibling)),
            (jn = n),
            (vt = !0),
            (hl = null),
            (Ur = !1),
            t !== null && Bb(n, t),
            (n = np(n, i.children)),
            (n.flags |= 4096))
      return n
    }
    return s
      ? (El(),
        (C = i.fallback),
        (s = n.mode),
        (U = t.child),
        (J = U.sibling),
        (i = Uo(U, { mode: 'hidden', children: i.children })),
        (i.subtreeFlags = U.subtreeFlags & 65011712),
        J !== null ? (C = Uo(J, C)) : ((C = mi(C, s, o, null)), (C.flags |= 2)),
        (C.return = n),
        (i.return = n),
        (i.sibling = C),
        (n.child = i),
        Ps(null, i),
        (i = n.child),
        (C = t.child.memoizedState),
        C === null
          ? (C = ep(o))
          : ((s = C.cachePool),
            s !== null
              ? ((U = pn._currentValue), (s = s.parent !== U ? { parent: U, pool: U } : s))
              : (s = $b()),
            (C = { baseLanes: C.baseLanes | o, cachePool: s })),
        (i.memoizedState = C),
        (i.childLanes = tp(t, b, o)),
        (n.memoizedState = Wm),
        Ps(t.child, i))
      : (Rl(n),
        (o = t.child),
        (t = o.sibling),
        (o = Uo(o, { mode: 'visible', children: i.children })),
        (o.return = n),
        (o.sibling = null),
        t !== null &&
          ((b = n.deletions), b === null ? ((n.deletions = [t]), (n.flags |= 16)) : b.push(t)),
        (n.child = o),
        (n.memoizedState = null),
        o)
  }
  function np(t, n) {
    return ((n = Uc({ mode: 'visible', children: n }, t.mode)), (n.return = t), (t.child = n))
  }
  function Uc(t, n) {
    return ((t = yr(22, t, null, n)), (t.lanes = 0), t)
  }
  function rp(t, n, o) {
    return (
      xi(n, t.child, null, o),
      (t = np(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    )
  }
  function iv(t, n, o) {
    t.lanes |= n
    var i = t.alternate
    ;(i !== null && (i.lanes |= n), ym(t.return, n, o))
  }
  function op(t, n, o, i, s, c) {
    var b = t.memoizedState
    b === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: o,
          tailMode: s,
          treeForkCount: c,
        })
      : ((b.isBackwards = n),
        (b.rendering = null),
        (b.renderingStartTime = 0),
        (b.last = i),
        (b.tail = o),
        (b.tailMode = s),
        (b.treeForkCount = c))
  }
  function av(t, n, o) {
    var i = n.pendingProps,
      s = i.revealOrder,
      c = i.tail
    i = i.children
    var b = nn.current,
      C = (b & 2) !== 0
    if (
      (C ? ((b = (b & 1) | 2), (n.flags |= 128)) : (b &= 1),
      H(nn, b),
      _n(t, n, i, o),
      (i = vt ? Ns : 0),
      !C && t !== null && (t.flags & 128) !== 0)
    )
      e: for (t = n.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && iv(t, o, n)
        else if (t.tag === 19) iv(t, o, n)
        else if (t.child !== null) {
          ;((t.child.return = t), (t = t.child))
          continue
        }
        if (t === n) break e
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === n) break e
          t = t.return
        }
        ;((t.sibling.return = t.return), (t = t.sibling))
      }
    switch (s) {
      case 'forwards':
        for (o = n.child, s = null; o !== null; )
          ((t = o.alternate), t !== null && Cc(t) === null && (s = o), (o = o.sibling))
        ;((o = s),
          o === null ? ((s = n.child), (n.child = null)) : ((s = o.sibling), (o.sibling = null)),
          op(n, !1, s, o, c, i))
        break
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (o = null, s = n.child, n.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && Cc(t) === null)) {
            n.child = s
            break
          }
          ;((t = s.sibling), (s.sibling = o), (o = s), (s = t))
        }
        op(n, !0, o, null, c, i)
        break
      case 'together':
        op(n, !1, null, null, void 0, i)
        break
      default:
        n.memoizedState = null
    }
    return n.child
  }
  function Po(t, n, o) {
    if (
      (t !== null && (n.dependencies = t.dependencies), (wl |= n.lanes), (o & n.childLanes) === 0)
    )
      if (t !== null) {
        if ((ya(t, n, o, !1), (o & n.childLanes) === 0)) return null
      } else return null
    if (t !== null && n.child !== t.child) throw Error(a(153))
    if (n.child !== null) {
      for (t = n.child, o = Uo(t, t.pendingProps), n.child = o, o.return = n; t.sibling !== null; )
        ((t = t.sibling), (o = o.sibling = Uo(t, t.pendingProps)), (o.return = n))
      o.sibling = null
    }
    return n.child
  }
  function lp(t, n) {
    return (t.lanes & n) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && bc(t)))
  }
  function yT(t, n, o) {
    switch (n.tag) {
      case 3:
        ;(de(n, n.stateNode.containerInfo), yl(n, pn, t.memoizedState.cache), pi())
        break
      case 27:
      case 5:
        ue(n)
        break
      case 4:
        de(n, n.stateNode.containerInfo)
        break
      case 10:
        yl(n, n.type, n.memoizedProps.value)
        break
      case 31:
        if (n.memoizedState !== null) return ((n.flags |= 128), Nm(n), null)
        break
      case 13:
        var i = n.memoizedState
        if (i !== null)
          return i.dehydrated !== null
            ? (Rl(n), (n.flags |= 128), null)
            : (o & n.child.childLanes) !== 0
              ? lv(t, n, o)
              : (Rl(n), (t = Po(t, n, o)), t !== null ? t.sibling : null)
        Rl(n)
        break
      case 19:
        var s = (t.flags & 128) !== 0
        if (
          ((i = (o & n.childLanes) !== 0),
          i || (ya(t, n, o, !1), (i = (o & n.childLanes) !== 0)),
          s)
        ) {
          if (i) return av(t, n, o)
          n.flags |= 128
        }
        if (
          ((s = n.memoizedState),
          s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          H(nn, nn.current),
          i)
        )
          break
        return null
      case 22:
        return ((n.lanes = 0), Wy(t, n, o, n.pendingProps))
      case 24:
        yl(n, pn, t.memoizedState.cache)
    }
    return Po(t, n, o)
  }
  function sv(t, n, o) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps) hn = !0
      else {
        if (!lp(t, o) && (n.flags & 128) === 0) return ((hn = !1), yT(t, n, o))
        hn = (t.flags & 131072) !== 0
      }
    else ((hn = !1), vt && (n.flags & 1048576) !== 0 && Hb(n, Ns, n.index))
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          var i = n.pendingProps
          if (((t = yi(n.elementType)), (n.type = t), typeof t == 'function'))
            cm(t)
              ? ((i = Ri(t, i)), (n.tag = 1), (n = rv(null, n, t, i, o)))
              : ((n.tag = 0), (n = Jm(null, n, t, i, o)))
          else {
            if (t != null) {
              var s = t.$$typeof
              if (s === j) {
                ;((n.tag = 11), (n = Qy(null, n, t, i, o)))
                break e
              } else if (s === k) {
                ;((n.tag = 14), (n = Zy(null, n, t, i, o)))
                break e
              }
            }
            throw ((n = Y(t) || t), Error(a(306, n, '')))
          }
        }
        return n
      case 0:
        return Jm(t, n, n.type, n.pendingProps, o)
      case 1:
        return ((i = n.type), (s = Ri(i, n.pendingProps)), rv(t, n, i, s, o))
      case 3:
        e: {
          if ((de(n, n.stateNode.containerInfo), t === null)) throw Error(a(387))
          i = n.pendingProps
          var c = n.memoizedState
          ;((s = c.element), Cm(t, n), Vs(n, i, null, o))
          var b = n.memoizedState
          if (
            ((i = b.cache),
            yl(n, pn, i),
            i !== c.cache && vm(n, [pn], o, !0),
            Us(),
            (i = b.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: i, isDehydrated: !1, cache: b.cache }),
              (n.updateQueue.baseState = c),
              (n.memoizedState = c),
              n.flags & 256)
            ) {
              n = ov(t, n, i, o)
              break e
            } else if (i !== s) {
              ;((s = jr(Error(a(424)), n)), zs(s), (n = ov(t, n, i, o)))
              break e
            } else
              for (
                t = n.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === 'HTML' ? t.ownerDocument.body : t),
                  Pt = Lr(t.firstChild),
                  jn = n,
                  vt = !0,
                  hl = null,
                  Ur = !0,
                  o = Wb(n, null, i, o),
                  n.child = o;
                o;
              )
                ((o.flags = (o.flags & -3) | 4096), (o = o.sibling))
          else {
            if ((pi(), i === s)) {
              n = Po(t, n, o)
              break e
            }
            _n(t, n, i, o)
          }
          n = n.child
        }
        return n
      case 26:
        return (
          _c(t, n),
          t === null
            ? (o = v0(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = o)
              : vt ||
                ((o = n.type),
                (t = n.pendingProps),
                (i = Wc(re.current).createElement(o)),
                (i[cn] = n),
                (i[fn] = t),
                Un(i, o, t),
                dn(i),
                (n.stateNode = i))
            : (n.memoizedState = v0(n.type, t.memoizedProps, n.pendingProps, t.memoizedState)),
          null
        )
      case 27:
        return (
          ue(n),
          t === null &&
            vt &&
            ((i = n.stateNode = h0(n.type, n.pendingProps, re.current)),
            (jn = n),
            (Ur = !0),
            (s = Pt),
            zl(n.type) ? ((Vp = s), (Pt = Lr(i.firstChild))) : (Pt = s)),
          _n(t, n, n.pendingProps.children, o),
          _c(t, n),
          t === null && (n.flags |= 4194304),
          n.child
        )
      case 5:
        return (
          t === null &&
            vt &&
            ((s = i = Pt) &&
              ((i = KT(i, n.type, n.pendingProps, Ur)),
              i !== null
                ? ((n.stateNode = i), (jn = n), (Pt = Lr(i.firstChild)), (Ur = !1), (s = !0))
                : (s = !1)),
            s || bl(n)),
          ue(n),
          (s = n.type),
          (c = n.pendingProps),
          (b = t !== null ? t.memoizedProps : null),
          (i = c.children),
          Dp(s, c) ? (i = null) : b !== null && Dp(s, b) && (n.flags |= 32),
          n.memoizedState !== null && ((s = Im(t, n, uT, null, null, o)), (ou._currentValue = s)),
          _c(t, n),
          _n(t, n, i, o),
          n.child
        )
      case 6:
        return (
          t === null &&
            vt &&
            ((t = o = Pt) &&
              ((o = XT(o, n.pendingProps, Ur)),
              o !== null ? ((n.stateNode = o), (jn = n), (Pt = null), (t = !0)) : (t = !1)),
            t || bl(n)),
          null
        )
      case 13:
        return lv(t, n, o)
      case 4:
        return (
          de(n, n.stateNode.containerInfo),
          (i = n.pendingProps),
          t === null ? (n.child = xi(n, null, i, o)) : _n(t, n, i, o),
          n.child
        )
      case 11:
        return Qy(t, n, n.type, n.pendingProps, o)
      case 7:
        return (_n(t, n, n.pendingProps, o), n.child)
      case 8:
        return (_n(t, n, n.pendingProps.children, o), n.child)
      case 12:
        return (_n(t, n, n.pendingProps.children, o), n.child)
      case 10:
        return ((i = n.pendingProps), yl(n, n.type, i.value), _n(t, n, i.children, o), n.child)
      case 9:
        return (
          (s = n.type._context),
          (i = n.pendingProps.children),
          hi(n),
          (s = kn(s)),
          (i = i(s)),
          (n.flags |= 1),
          _n(t, n, i, o),
          n.child
        )
      case 14:
        return Zy(t, n, n.type, n.pendingProps, o)
      case 15:
        return Jy(t, n, n.type, n.pendingProps, o)
      case 19:
        return av(t, n, o)
      case 31:
        return bT(t, n, o)
      case 22:
        return Wy(t, n, o, n.pendingProps)
      case 24:
        return (
          hi(n),
          (i = kn(pn)),
          t === null
            ? ((s = Rm()),
              s === null &&
                ((s = Vt),
                (c = xm()),
                (s.pooledCache = c),
                c.refCount++,
                c !== null && (s.pooledCacheLanes |= o),
                (s = c)),
              (n.memoizedState = { parent: i, cache: s }),
              Tm(n),
              yl(n, pn, s))
            : ((t.lanes & o) !== 0 && (Cm(t, n), Vs(n, null, null, o), Us()),
              (s = t.memoizedState),
              (c = n.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (n.memoizedState = s),
                  n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s),
                  yl(n, pn, i))
                : ((i = c.cache), yl(n, pn, i), i !== s.cache && vm(n, [pn], o, !0))),
          _n(t, n, n.pendingProps.children, o),
          n.child
        )
      case 29:
        throw n.pendingProps
    }
    throw Error(a(156, n.tag))
  }
  function qo(t) {
    t.flags |= 4
  }
  function ip(t, n, o, i, s) {
    if (((n = (t.mode & 32) !== 0) && (n = !1), n)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192
        else if (kv()) t.flags |= 8192
        else throw ((vi = Sc), Em)
    } else t.flags &= -16777217
  }
  function uv(t, n) {
    if (n.type !== 'stylesheet' || (n.state.loading & 4) !== 0) t.flags &= -16777217
    else if (((t.flags |= 16777216), !T0(n)))
      if (kv()) t.flags |= 8192
      else throw ((vi = Sc), Em)
  }
  function Vc(t, n) {
    ;(n !== null && (t.flags |= 4),
      t.flags & 16384 && ((n = t.tag !== 22 ? st() : 536870912), (t.lanes |= n), (Na |= n)))
  }
  function qs(t, n) {
    if (!vt)
      switch (t.tailMode) {
        case 'hidden':
          n = t.tail
          for (var o = null; n !== null; ) (n.alternate !== null && (o = n), (n = n.sibling))
          o === null ? (t.tail = null) : (o.sibling = null)
          break
        case 'collapsed':
          o = t.tail
          for (var i = null; o !== null; ) (o.alternate !== null && (i = o), (o = o.sibling))
          i === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null)
      }
  }
  function qt(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      o = 0,
      i = 0
    if (n)
      for (var s = t.child; s !== null; )
        ((o |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling))
    else
      for (s = t.child; s !== null; )
        ((o |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling))
    return ((t.subtreeFlags |= i), (t.childLanes = o), n)
  }
  function vT(t, n, o) {
    var i = n.pendingProps
    switch ((pm(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (qt(n), null)
      case 1:
        return (qt(n), null)
      case 3:
        return (
          (o = n.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          n.memoizedState.cache !== i && (n.flags |= 2048),
          Ho(pn),
          ve(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (t === null || t.child === null) &&
            (ba(n)
              ? qo(n)
              : t === null ||
                (t.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), hm())),
          qt(n),
          null
        )
      case 26:
        var s = n.type,
          c = n.memoizedState
        return (
          t === null
            ? (qo(n), c !== null ? (qt(n), uv(n, c)) : (qt(n), ip(n, s, null, i, o)))
            : c
              ? c !== t.memoizedState
                ? (qo(n), qt(n), uv(n, c))
                : (qt(n), (n.flags &= -16777217))
              : ((t = t.memoizedProps), t !== i && qo(n), qt(n), ip(n, s, t, i, o)),
          null
        )
      case 27:
        if ((K(n), (o = re.current), (s = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== i && qo(n)
        else {
          if (!i) {
            if (n.stateNode === null) throw Error(a(166))
            return (qt(n), null)
          }
          ;((t = X.current), ba(n) ? Fb(n) : ((t = h0(s, i, o)), (n.stateNode = t), qo(n)))
        }
        return (qt(n), null)
      case 5:
        if ((K(n), (s = n.type), t !== null && n.stateNode != null)) t.memoizedProps !== i && qo(n)
        else {
          if (!i) {
            if (n.stateNode === null) throw Error(a(166))
            return (qt(n), null)
          }
          if (((c = X.current), ba(n))) Fb(n)
          else {
            var b = Wc(re.current)
            switch (c) {
              case 1:
                c = b.createElementNS('http://www.w3.org/2000/svg', s)
                break
              case 2:
                c = b.createElementNS('http://www.w3.org/1998/Math/MathML', s)
                break
              default:
                switch (s) {
                  case 'svg':
                    c = b.createElementNS('http://www.w3.org/2000/svg', s)
                    break
                  case 'math':
                    c = b.createElementNS('http://www.w3.org/1998/Math/MathML', s)
                    break
                  case 'script':
                    ;((c = b.createElement('div')),
                      (c.innerHTML = '<script><\/script>'),
                      (c = c.removeChild(c.firstChild)))
                    break
                  case 'select':
                    ;((c =
                      typeof i.is == 'string'
                        ? b.createElement('select', { is: i.is })
                        : b.createElement('select')),
                      i.multiple ? (c.multiple = !0) : i.size && (c.size = i.size))
                    break
                  default:
                    c =
                      typeof i.is == 'string'
                        ? b.createElement(s, { is: i.is })
                        : b.createElement(s)
                }
            }
            ;((c[cn] = n), (c[fn] = i))
            e: for (b = n.child; b !== null; ) {
              if (b.tag === 5 || b.tag === 6) c.appendChild(b.stateNode)
              else if (b.tag !== 4 && b.tag !== 27 && b.child !== null) {
                ;((b.child.return = b), (b = b.child))
                continue
              }
              if (b === n) break e
              for (; b.sibling === null; ) {
                if (b.return === null || b.return === n) break e
                b = b.return
              }
              ;((b.sibling.return = b.return), (b = b.sibling))
            }
            n.stateNode = c
            e: switch ((Un(c, s, i), s)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                i = !!i.autoFocus
                break e
              case 'img':
                i = !0
                break e
              default:
                i = !1
            }
            i && qo(n)
          }
        }
        return (qt(n), ip(n, n.type, t === null ? null : t.memoizedProps, n.pendingProps, o), null)
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== i && qo(n)
        else {
          if (typeof i != 'string' && n.stateNode === null) throw Error(a(166))
          if (((t = re.current), ba(n))) {
            if (((t = n.stateNode), (o = n.memoizedProps), (i = null), (s = jn), s !== null))
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps
              }
            ;((t[cn] = n),
              (t = !!(
                t.nodeValue === o ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                l0(t.nodeValue, o)
              )),
              t || bl(n, !0))
          } else ((t = Wc(t).createTextNode(i)), (t[cn] = n), (n.stateNode = t))
        }
        return (qt(n), null)
      case 31:
        if (((o = n.memoizedState), t === null || t.memoizedState !== null)) {
          if (((i = ba(n)), o !== null)) {
            if (t === null) {
              if (!i) throw Error(a(318))
              if (((t = n.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
                throw Error(a(557))
              t[cn] = n
            } else (pi(), (n.flags & 128) === 0 && (n.memoizedState = null), (n.flags |= 4))
            ;(qt(n), (t = !1))
          } else
            ((o = hm()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o),
              (t = !0))
          if (!t) return n.flags & 256 ? (xr(n), n) : (xr(n), null)
          if ((n.flags & 128) !== 0) throw Error(a(558))
        }
        return (qt(n), null)
      case 13:
        if (
          ((i = n.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = ba(n)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(a(318))
              if (((s = n.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
                throw Error(a(317))
              s[cn] = n
            } else (pi(), (n.flags & 128) === 0 && (n.memoizedState = null), (n.flags |= 4))
            ;(qt(n), (s = !1))
          } else
            ((s = hm()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s),
              (s = !0))
          if (!s) return n.flags & 256 ? (xr(n), n) : (xr(n), null)
        }
        return (
          xr(n),
          (n.flags & 128) !== 0
            ? ((n.lanes = o), n)
            : ((o = i !== null),
              (t = t !== null && t.memoizedState !== null),
              o &&
                ((i = n.child),
                (s = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (s = i.alternate.memoizedState.cachePool.pool),
                (c = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (c = i.memoizedState.cachePool.pool),
                c !== s && (i.flags |= 2048)),
              o !== t && o && (n.child.flags |= 8192),
              Vc(n, n.updateQueue),
              qt(n),
              null)
        )
      case 4:
        return (ve(), t === null && Op(n.stateNode.containerInfo), qt(n), null)
      case 10:
        return (Ho(n.type), qt(n), null)
      case 19:
        if ((P(nn), (i = n.memoizedState), i === null)) return (qt(n), null)
        if (((s = (n.flags & 128) !== 0), (c = i.rendering), c === null))
          if (s) qs(i, !1)
          else {
            if (Zt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = n.child; t !== null; ) {
                if (((c = Cc(t)), c !== null)) {
                  for (
                    n.flags |= 128,
                      qs(i, !1),
                      t = c.updateQueue,
                      n.updateQueue = t,
                      Vc(n, t),
                      n.subtreeFlags = 0,
                      t = o,
                      o = n.child;
                    o !== null;
                  )
                    (Ub(o, t), (o = o.sibling))
                  return (H(nn, (nn.current & 1) | 2), vt && Vo(n, i.treeForkCount), n.child)
                }
                t = t.sibling
              }
            i.tail !== null &&
              Me() > Pc &&
              ((n.flags |= 128), (s = !0), qs(i, !1), (n.lanes = 4194304))
          }
        else {
          if (!s)
            if (((t = Cc(c)), t !== null)) {
              if (
                ((n.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (n.updateQueue = t),
                Vc(n, t),
                qs(i, !0),
                i.tail === null && i.tailMode === 'hidden' && !c.alternate && !vt)
              )
                return (qt(n), null)
            } else
              2 * Me() - i.renderingStartTime > Pc &&
                o !== 536870912 &&
                ((n.flags |= 128), (s = !0), qs(i, !1), (n.lanes = 4194304))
          i.isBackwards
            ? ((c.sibling = n.child), (n.child = c))
            : ((t = i.last), t !== null ? (t.sibling = c) : (n.child = c), (i.last = c))
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Me()),
            (t.sibling = null),
            (o = nn.current),
            H(nn, s ? (o & 1) | 2 : o & 1),
            vt && Vo(n, i.treeForkCount),
            t)
          : (qt(n), null)
      case 22:
      case 23:
        return (
          xr(n),
          Am(),
          (i = n.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (n.flags |= 8192)
            : i && (n.flags |= 8192),
          i
            ? (o & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (qt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : qt(n),
          (o = n.updateQueue),
          o !== null && Vc(n, o.retryQueue),
          (o = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (o = t.memoizedState.cachePool.pool),
          (i = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (i = n.memoizedState.cachePool.pool),
          i !== o && (n.flags |= 2048),
          t !== null && P(bi),
          null
        )
      case 24:
        return (
          (o = null),
          t !== null && (o = t.memoizedState.cache),
          n.memoizedState.cache !== o && (n.flags |= 2048),
          Ho(pn),
          qt(n),
          null
        )
      case 25:
        return null
      case 30:
        return null
    }
    throw Error(a(156, n.tag))
  }
  function xT(t, n) {
    switch ((pm(n), n.tag)) {
      case 1:
        return ((t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null)
      case 3:
        return (
          Ho(pn),
          ve(),
          (t = n.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((n.flags = (t & -65537) | 128), n) : null
        )
      case 26:
      case 27:
      case 5:
        return (K(n), null)
      case 31:
        if (n.memoizedState !== null) {
          if ((xr(n), n.alternate === null)) throw Error(a(340))
          pi()
        }
        return ((t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null)
      case 13:
        if ((xr(n), (t = n.memoizedState), t !== null && t.dehydrated !== null)) {
          if (n.alternate === null) throw Error(a(340))
          pi()
        }
        return ((t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null)
      case 19:
        return (P(nn), null)
      case 4:
        return (ve(), null)
      case 10:
        return (Ho(n.type), null)
      case 22:
      case 23:
        return (
          xr(n),
          Am(),
          t !== null && P(bi),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        )
      case 24:
        return (Ho(pn), null)
      case 25:
        return null
      default:
        return null
    }
  }
  function cv(t, n) {
    switch ((pm(n), n.tag)) {
      case 3:
        ;(Ho(pn), ve())
        break
      case 26:
      case 27:
      case 5:
        K(n)
        break
      case 4:
        ve()
        break
      case 31:
        n.memoizedState !== null && xr(n)
        break
      case 13:
        xr(n)
        break
      case 19:
        P(nn)
        break
      case 10:
        Ho(n.type)
        break
      case 22:
      case 23:
        ;(xr(n), Am(), t !== null && P(bi))
        break
      case 24:
        Ho(pn)
    }
  }
  function Gs(t, n) {
    try {
      var o = n.updateQueue,
        i = o !== null ? o.lastEffect : null
      if (i !== null) {
        var s = i.next
        o = s
        do {
          if ((o.tag & t) === t) {
            i = void 0
            var c = o.create,
              b = o.inst
            ;((i = c()), (b.destroy = i))
          }
          o = o.next
        } while (o !== s)
      }
    } catch (C) {
      Nt(n, n.return, C)
    }
  }
  function Tl(t, n, o) {
    try {
      var i = n.updateQueue,
        s = i !== null ? i.lastEffect : null
      if (s !== null) {
        var c = s.next
        i = c
        do {
          if ((i.tag & t) === t) {
            var b = i.inst,
              C = b.destroy
            if (C !== void 0) {
              ;((b.destroy = void 0), (s = n))
              var U = o,
                J = C
              try {
                J()
              } catch (ce) {
                Nt(s, U, ce)
              }
            }
          }
          i = i.next
        } while (i !== c)
      }
    } catch (ce) {
      Nt(n, n.return, ce)
    }
  }
  function fv(t) {
    var n = t.updateQueue
    if (n !== null) {
      var o = t.stateNode
      try {
        ty(n, o)
      } catch (i) {
        Nt(t, t.return, i)
      }
    }
  }
  function dv(t, n, o) {
    ;((o.props = Ri(t.type, t.memoizedProps)), (o.state = t.memoizedState))
    try {
      o.componentWillUnmount()
    } catch (i) {
      Nt(t, n, i)
    }
  }
  function Ys(t, n) {
    try {
      var o = t.ref
      if (o !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode
            break
          case 30:
            i = t.stateNode
            break
          default:
            i = t.stateNode
        }
        typeof o == 'function' ? (t.refCleanup = o(i)) : (o.current = i)
      }
    } catch (s) {
      Nt(t, n, s)
    }
  }
  function bo(t, n) {
    var o = t.ref,
      i = t.refCleanup
    if (o !== null)
      if (typeof i == 'function')
        try {
          i()
        } catch (s) {
          Nt(t, n, s)
        } finally {
          ;((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null))
        }
      else if (typeof o == 'function')
        try {
          o(null)
        } catch (s) {
          Nt(t, n, s)
        }
      else o.current = null
  }
  function mv(t) {
    var n = t.type,
      o = t.memoizedProps,
      i = t.stateNode
    try {
      e: switch (n) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          o.autoFocus && i.focus()
          break e
        case 'img':
          o.src ? (i.src = o.src) : o.srcSet && (i.srcset = o.srcSet)
      }
    } catch (s) {
      Nt(t, t.return, s)
    }
  }
  function ap(t, n, o) {
    try {
      var i = t.stateNode
      ;(FT(i, t.type, o, n), (i[fn] = n))
    } catch (s) {
      Nt(t, t.return, s)
    }
  }
  function pv(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && zl(t.type)) || t.tag === 4
  }
  function sp(t) {
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || pv(t.return)) return null
        t = t.return
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if ((t.tag === 27 && zl(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
          continue e
        ;((t.child.return = t), (t = t.child))
      }
      if (!(t.flags & 2)) return t.stateNode
    }
  }
  function up(t, n, o) {
    var i = t.tag
    if (i === 5 || i === 6)
      ((t = t.stateNode),
        n
          ? (o.nodeType === 9
              ? o.body
              : o.nodeName === 'HTML'
                ? o.ownerDocument.body
                : o
            ).insertBefore(t, n)
          : ((n = o.nodeType === 9 ? o.body : o.nodeName === 'HTML' ? o.ownerDocument.body : o),
            n.appendChild(t),
            (o = o._reactRootContainer),
            o != null || n.onclick !== null || (n.onclick = Zr)))
    else if (
      i !== 4 &&
      (i === 27 && zl(t.type) && ((o = t.stateNode), (n = null)), (t = t.child), t !== null)
    )
      for (up(t, n, o), t = t.sibling; t !== null; ) (up(t, n, o), (t = t.sibling))
  }
  function Lc(t, n, o) {
    var i = t.tag
    if (i === 5 || i === 6) ((t = t.stateNode), n ? o.insertBefore(t, n) : o.appendChild(t))
    else if (i !== 4 && (i === 27 && zl(t.type) && (o = t.stateNode), (t = t.child), t !== null))
      for (Lc(t, n, o), t = t.sibling; t !== null; ) (Lc(t, n, o), (t = t.sibling))
  }
  function gv(t) {
    var n = t.stateNode,
      o = t.memoizedProps
    try {
      for (var i = t.type, s = n.attributes; s.length; ) n.removeAttributeNode(s[0])
      ;(Un(n, i, o), (n[cn] = t), (n[fn] = o))
    } catch (c) {
      Nt(t, t.return, c)
    }
  }
  var Go = !1,
    bn = !1,
    cp = !1,
    hv = typeof WeakSet == 'function' ? WeakSet : Set,
    zn = null
  function ST(t, n) {
    if (((t = t.containerInfo), (zp = af), (t = Ob(t)), rm(t))) {
      if ('selectionStart' in t) var o = { start: t.selectionStart, end: t.selectionEnd }
      else
        e: {
          o = ((o = t.ownerDocument) && o.defaultView) || window
          var i = o.getSelection && o.getSelection()
          if (i && i.rangeCount !== 0) {
            o = i.anchorNode
            var s = i.anchorOffset,
              c = i.focusNode
            i = i.focusOffset
            try {
              ;(o.nodeType, c.nodeType)
            } catch {
              o = null
              break e
            }
            var b = 0,
              C = -1,
              U = -1,
              J = 0,
              ce = 0,
              ge = t,
              ne = null
            t: for (;;) {
              for (
                var ae;
                ge !== o || (s !== 0 && ge.nodeType !== 3) || (C = b + s),
                  ge !== c || (i !== 0 && ge.nodeType !== 3) || (U = b + i),
                  ge.nodeType === 3 && (b += ge.nodeValue.length),
                  (ae = ge.firstChild) !== null;
              )
                ((ne = ge), (ge = ae))
              for (;;) {
                if (ge === t) break t
                if (
                  (ne === o && ++J === s && (C = b),
                  ne === c && ++ce === i && (U = b),
                  (ae = ge.nextSibling) !== null)
                )
                  break
                ;((ge = ne), (ne = ge.parentNode))
              }
              ge = ae
            }
            o = C === -1 || U === -1 ? null : { start: C, end: U }
          } else o = null
        }
      o = o || { start: 0, end: 0 }
    } else o = null
    for (Ip = { focusedElem: t, selectionRange: o }, af = !1, zn = n; zn !== null; )
      if (((n = zn), (t = n.child), (n.subtreeFlags & 1028) !== 0 && t !== null))
        ((t.return = n), (zn = t))
      else
        for (; zn !== null; ) {
          switch (((n = zn), (c = n.alternate), (t = n.flags), n.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = n.updateQueue), (t = t !== null ? t.events : null), t !== null)
              )
                for (o = 0; o < t.length; o++) ((s = t[o]), (s.ref.impl = s.nextImpl))
              break
            case 11:
            case 15:
              break
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                ;((t = void 0),
                  (o = n),
                  (s = c.memoizedProps),
                  (c = c.memoizedState),
                  (i = o.stateNode))
                try {
                  var ke = Ri(o.type, s)
                  ;((t = i.getSnapshotBeforeUpdate(ke, c)),
                    (i.__reactInternalSnapshotBeforeUpdate = t))
                } catch (Ke) {
                  Nt(o, o.return, Ke)
                }
              }
              break
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = n.stateNode.containerInfo), (o = t.nodeType), o === 9)) kp(t)
                else if (o === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      kp(t)
                      break
                    default:
                      t.textContent = ''
                  }
              }
              break
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break
            default:
              if ((t & 1024) !== 0) throw Error(a(163))
          }
          if (((t = n.sibling), t !== null)) {
            ;((t.return = n.return), (zn = t))
            break
          }
          zn = n.return
        }
  }
  function bv(t, n, o) {
    var i = o.flags
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        ;($o(t, o), i & 4 && Gs(5, o))
        break
      case 1:
        if (($o(t, o), i & 4))
          if (((t = o.stateNode), n === null))
            try {
              t.componentDidMount()
            } catch (b) {
              Nt(o, o.return, b)
            }
          else {
            var s = Ri(o.type, n.memoizedProps)
            n = n.memoizedState
            try {
              t.componentDidUpdate(s, n, t.__reactInternalSnapshotBeforeUpdate)
            } catch (b) {
              Nt(o, o.return, b)
            }
          }
        ;(i & 64 && fv(o), i & 512 && Ys(o, o.return))
        break
      case 3:
        if (($o(t, o), i & 64 && ((t = o.updateQueue), t !== null))) {
          if (((n = null), o.child !== null))
            switch (o.child.tag) {
              case 27:
              case 5:
                n = o.child.stateNode
                break
              case 1:
                n = o.child.stateNode
            }
          try {
            ty(t, n)
          } catch (b) {
            Nt(o, o.return, b)
          }
        }
        break
      case 27:
        n === null && i & 4 && gv(o)
      case 26:
      case 5:
        ;($o(t, o), n === null && i & 4 && mv(o), i & 512 && Ys(o, o.return))
        break
      case 12:
        $o(t, o)
        break
      case 31:
        ;($o(t, o), i & 4 && xv(t, o))
        break
      case 13:
        ;($o(t, o),
          i & 4 && Sv(t, o),
          i & 64 &&
            ((t = o.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((o = NT.bind(null, o)), QT(t, o)))))
        break
      case 22:
        if (((i = o.memoizedState !== null || Go), !i)) {
          ;((n = (n !== null && n.memoizedState !== null) || bn), (s = Go))
          var c = bn
          ;((Go = i),
            (bn = n) && !c ? Ko(t, o, (o.subtreeFlags & 8772) !== 0) : $o(t, o),
            (Go = s),
            (bn = c))
        }
        break
      case 30:
        break
      default:
        $o(t, o)
    }
  }
  function yv(t) {
    var n = t.alternate
    ;(n !== null && ((t.alternate = null), yv(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((n = t.stateNode), n !== null && ai(n)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null))
  }
  var Gt = null,
    tr = !1
  function Yo(t, n, o) {
    for (o = o.child; o !== null; ) (vv(t, n, o), (o = o.sibling))
  }
  function vv(t, n, o) {
    if (ye && typeof ye.onCommitFiberUnmount == 'function')
      try {
        ye.onCommitFiberUnmount(rt, o)
      } catch {}
    switch (o.tag) {
      case 26:
        ;(bn || bo(o, n),
          Yo(t, n, o),
          o.memoizedState
            ? o.memoizedState.count--
            : o.stateNode && ((o = o.stateNode), o.parentNode.removeChild(o)))
        break
      case 27:
        bn || bo(o, n)
        var i = Gt,
          s = tr
        ;(zl(o.type) && ((Gt = o.stateNode), (tr = !1)),
          Yo(t, n, o),
          tu(o.stateNode),
          (Gt = i),
          (tr = s))
        break
      case 5:
        bn || bo(o, n)
      case 6:
        if (((i = Gt), (s = tr), (Gt = null), Yo(t, n, o), (Gt = i), (tr = s), Gt !== null))
          if (tr)
            try {
              ;(Gt.nodeType === 9
                ? Gt.body
                : Gt.nodeName === 'HTML'
                  ? Gt.ownerDocument.body
                  : Gt
              ).removeChild(o.stateNode)
            } catch (c) {
              Nt(o, n, c)
            }
          else
            try {
              Gt.removeChild(o.stateNode)
            } catch (c) {
              Nt(o, n, c)
            }
        break
      case 18:
        Gt !== null &&
          (tr
            ? ((t = Gt),
              f0(
                t.nodeType === 9 ? t.body : t.nodeName === 'HTML' ? t.ownerDocument.body : t,
                o.stateNode
              ),
              Va(t))
            : f0(Gt, o.stateNode))
        break
      case 4:
        ;((i = Gt),
          (s = tr),
          (Gt = o.stateNode.containerInfo),
          (tr = !0),
          Yo(t, n, o),
          (Gt = i),
          (tr = s))
        break
      case 0:
      case 11:
      case 14:
      case 15:
        ;(Tl(2, o, n), bn || Tl(4, o, n), Yo(t, n, o))
        break
      case 1:
        ;(bn ||
          (bo(o, n), (i = o.stateNode), typeof i.componentWillUnmount == 'function' && dv(o, n, i)),
          Yo(t, n, o))
        break
      case 21:
        Yo(t, n, o)
        break
      case 22:
        ;((bn = (i = bn) || o.memoizedState !== null), Yo(t, n, o), (bn = i))
        break
      default:
        Yo(t, n, o)
    }
  }
  function xv(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated
      try {
        Va(t)
      } catch (o) {
        Nt(n, n.return, o)
      }
    }
  }
  function Sv(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Va(t)
      } catch (o) {
        Nt(n, n.return, o)
      }
  }
  function RT(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var n = t.stateNode
        return (n === null && (n = t.stateNode = new hv()), n)
      case 22:
        return (
          (t = t.stateNode),
          (n = t._retryCache),
          n === null && (n = t._retryCache = new hv()),
          n
        )
      default:
        throw Error(a(435, t.tag))
    }
  }
  function Hc(t, n) {
    var o = RT(t)
    n.forEach(function (i) {
      if (!o.has(i)) {
        o.add(i)
        var s = zT.bind(null, t, i)
        i.then(s, s)
      }
    })
  }
  function nr(t, n) {
    var o = n.deletions
    if (o !== null)
      for (var i = 0; i < o.length; i++) {
        var s = o[i],
          c = t,
          b = n,
          C = b
        e: for (; C !== null; ) {
          switch (C.tag) {
            case 27:
              if (zl(C.type)) {
                ;((Gt = C.stateNode), (tr = !1))
                break e
              }
              break
            case 5:
              ;((Gt = C.stateNode), (tr = !1))
              break e
            case 3:
            case 4:
              ;((Gt = C.stateNode.containerInfo), (tr = !0))
              break e
          }
          C = C.return
        }
        if (Gt === null) throw Error(a(160))
        ;(vv(c, b, s),
          (Gt = null),
          (tr = !1),
          (c = s.alternate),
          c !== null && (c.return = null),
          (s.return = null))
      }
    if (n.subtreeFlags & 13886) for (n = n.child; n !== null; ) (Rv(n, t), (n = n.sibling))
  }
  var Wr = null
  function Rv(t, n) {
    var o = t.alternate,
      i = t.flags
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ;(nr(n, t), rr(t), i & 4 && (Tl(3, t, t.return), Gs(3, t), Tl(5, t, t.return)))
        break
      case 1:
        ;(nr(n, t),
          rr(t),
          i & 512 && (bn || o === null || bo(o, o.return)),
          i & 64 &&
            Go &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((o = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = o === null ? i : o.concat(i))))))
        break
      case 26:
        var s = Wr
        if ((nr(n, t), rr(t), i & 512 && (bn || o === null || bo(o, o.return)), i & 4)) {
          var c = o !== null ? o.memoizedState : null
          if (((i = t.memoizedState), o === null))
            if (i === null)
              if (t.stateNode === null) {
                e: {
                  ;((i = t.type), (o = t.memoizedProps), (s = s.ownerDocument || s))
                  t: switch (i) {
                    case 'title':
                      ;((c = s.getElementsByTagName('title')[0]),
                        (!c ||
                          c[ii] ||
                          c[cn] ||
                          c.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          c.hasAttribute('itemprop')) &&
                          ((c = s.createElement(i)),
                          s.head.insertBefore(c, s.querySelector('head > title'))),
                        Un(c, i, o),
                        (c[cn] = t),
                        dn(c),
                        (i = c))
                      break e
                    case 'link':
                      var b = R0('link', 'href', s).get(i + (o.href || ''))
                      if (b) {
                        for (var C = 0; C < b.length; C++)
                          if (
                            ((c = b[C]),
                            c.getAttribute('href') ===
                              (o.href == null || o.href === '' ? null : o.href) &&
                              c.getAttribute('rel') === (o.rel == null ? null : o.rel) &&
                              c.getAttribute('title') === (o.title == null ? null : o.title) &&
                              c.getAttribute('crossorigin') ===
                                (o.crossOrigin == null ? null : o.crossOrigin))
                          ) {
                            b.splice(C, 1)
                            break t
                          }
                      }
                      ;((c = s.createElement(i)), Un(c, i, o), s.head.appendChild(c))
                      break
                    case 'meta':
                      if ((b = R0('meta', 'content', s).get(i + (o.content || '')))) {
                        for (C = 0; C < b.length; C++)
                          if (
                            ((c = b[C]),
                            c.getAttribute('content') ===
                              (o.content == null ? null : '' + o.content) &&
                              c.getAttribute('name') === (o.name == null ? null : o.name) &&
                              c.getAttribute('property') ===
                                (o.property == null ? null : o.property) &&
                              c.getAttribute('http-equiv') ===
                                (o.httpEquiv == null ? null : o.httpEquiv) &&
                              c.getAttribute('charset') === (o.charSet == null ? null : o.charSet))
                          ) {
                            b.splice(C, 1)
                            break t
                          }
                      }
                      ;((c = s.createElement(i)), Un(c, i, o), s.head.appendChild(c))
                      break
                    default:
                      throw Error(a(468, i))
                  }
                  ;((c[cn] = t), dn(c), (i = c))
                }
                t.stateNode = i
              } else E0(s, t.type, t.stateNode)
            else t.stateNode = S0(s, i, t.memoizedProps)
          else
            c !== i
              ? (c === null
                  ? o.stateNode !== null && ((o = o.stateNode), o.parentNode.removeChild(o))
                  : c.count--,
                i === null ? E0(s, t.type, t.stateNode) : S0(s, i, t.memoizedProps))
              : i === null && t.stateNode !== null && ap(t, t.memoizedProps, o.memoizedProps)
        }
        break
      case 27:
        ;(nr(n, t),
          rr(t),
          i & 512 && (bn || o === null || bo(o, o.return)),
          o !== null && i & 4 && ap(t, t.memoizedProps, o.memoizedProps))
        break
      case 5:
        if ((nr(n, t), rr(t), i & 512 && (bn || o === null || bo(o, o.return)), t.flags & 32)) {
          s = t.stateNode
          try {
            Pe(s, '')
          } catch (ke) {
            Nt(t, t.return, ke)
          }
        }
        ;(i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), ap(t, s, o !== null ? o.memoizedProps : s)),
          i & 1024 && (cp = !0))
        break
      case 6:
        if ((nr(n, t), rr(t), i & 4)) {
          if (t.stateNode === null) throw Error(a(162))
          ;((i = t.memoizedProps), (o = t.stateNode))
          try {
            o.nodeValue = i
          } catch (ke) {
            Nt(t, t.return, ke)
          }
        }
        break
      case 3:
        if (
          ((nf = null),
          (s = Wr),
          (Wr = ef(n.containerInfo)),
          nr(n, t),
          (Wr = s),
          rr(t),
          i & 4 && o !== null && o.memoizedState.isDehydrated)
        )
          try {
            Va(n.containerInfo)
          } catch (ke) {
            Nt(t, t.return, ke)
          }
        cp && ((cp = !1), Ev(t))
        break
      case 4:
        ;((i = Wr), (Wr = ef(t.stateNode.containerInfo)), nr(n, t), rr(t), (Wr = i))
        break
      case 12:
        ;(nr(n, t), rr(t))
        break
      case 31:
        ;(nr(n, t),
          rr(t),
          i & 4 && ((i = t.updateQueue), i !== null && ((t.updateQueue = null), Hc(t, i))))
        break
      case 13:
        ;(nr(n, t),
          rr(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (o !== null && o.memoizedState !== null) &&
            (Fc = Me()),
          i & 4 && ((i = t.updateQueue), i !== null && ((t.updateQueue = null), Hc(t, i))))
        break
      case 22:
        s = t.memoizedState !== null
        var U = o !== null && o.memoizedState !== null,
          J = Go,
          ce = bn
        if (((Go = J || s), (bn = ce || U), nr(n, t), (bn = ce), (Go = J), rr(t), i & 8192))
          e: for (
            n = t.stateNode,
              n._visibility = s ? n._visibility & -2 : n._visibility | 1,
              s && (o === null || U || Go || bn || Ei(t)),
              o = null,
              n = t;
            ;
          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (o === null) {
                U = o = n
                try {
                  if (((c = U.stateNode), s))
                    ((b = c.style),
                      typeof b.setProperty == 'function'
                        ? b.setProperty('display', 'none', 'important')
                        : (b.display = 'none'))
                  else {
                    C = U.stateNode
                    var ge = U.memoizedProps.style,
                      ne = ge != null && ge.hasOwnProperty('display') ? ge.display : null
                    C.style.display = ne == null || typeof ne == 'boolean' ? '' : ('' + ne).trim()
                  }
                } catch (ke) {
                  Nt(U, U.return, ke)
                }
              }
            } else if (n.tag === 6) {
              if (o === null) {
                U = n
                try {
                  U.stateNode.nodeValue = s ? '' : U.memoizedProps
                } catch (ke) {
                  Nt(U, U.return, ke)
                }
              }
            } else if (n.tag === 18) {
              if (o === null) {
                U = n
                try {
                  var ae = U.stateNode
                  s ? d0(ae, !0) : d0(U.stateNode, !1)
                } catch (ke) {
                  Nt(U, U.return, ke)
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) || n.memoizedState === null || n === t) &&
              n.child !== null
            ) {
              ;((n.child.return = n), (n = n.child))
              continue
            }
            if (n === t) break e
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === t) break e
              ;(o === n && (o = null), (n = n.return))
            }
            ;(o === n && (o = null), (n.sibling.return = n.return), (n = n.sibling))
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null && ((o = i.retryQueue), o !== null && ((i.retryQueue = null), Hc(t, o))))
        break
      case 19:
        ;(nr(n, t),
          rr(t),
          i & 4 && ((i = t.updateQueue), i !== null && ((t.updateQueue = null), Hc(t, i))))
        break
      case 30:
        break
      case 21:
        break
      default:
        ;(nr(n, t), rr(t))
    }
  }
  function rr(t) {
    var n = t.flags
    if (n & 2) {
      try {
        for (var o, i = t.return; i !== null; ) {
          if (pv(i)) {
            o = i
            break
          }
          i = i.return
        }
        if (o == null) throw Error(a(160))
        switch (o.tag) {
          case 27:
            var s = o.stateNode,
              c = sp(t)
            Lc(t, c, s)
            break
          case 5:
            var b = o.stateNode
            o.flags & 32 && (Pe(b, ''), (o.flags &= -33))
            var C = sp(t)
            Lc(t, C, b)
            break
          case 3:
          case 4:
            var U = o.stateNode.containerInfo,
              J = sp(t)
            up(t, J, U)
            break
          default:
            throw Error(a(161))
        }
      } catch (ce) {
        Nt(t, t.return, ce)
      }
      t.flags &= -3
    }
    n & 4096 && (t.flags &= -4097)
  }
  function Ev(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var n = t
        ;(Ev(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), (t = t.sibling))
      }
  }
  function $o(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) (bv(t, n.alternate, n), (n = n.sibling))
  }
  function Ei(t) {
    for (t = t.child; t !== null; ) {
      var n = t
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ;(Tl(4, n, n.return), Ei(n))
          break
        case 1:
          bo(n, n.return)
          var o = n.stateNode
          ;(typeof o.componentWillUnmount == 'function' && dv(n, n.return, o), Ei(n))
          break
        case 27:
          tu(n.stateNode)
        case 26:
        case 5:
          ;(bo(n, n.return), Ei(n))
          break
        case 22:
          n.memoizedState === null && Ei(n)
          break
        case 30:
          Ei(n)
          break
        default:
          Ei(n)
      }
      t = t.sibling
    }
  }
  function Ko(t, n, o) {
    for (o = o && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var i = n.alternate,
        s = t,
        c = n,
        b = c.flags
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ;(Ko(s, c, o), Gs(4, c))
          break
        case 1:
          if ((Ko(s, c, o), (i = c), (s = i.stateNode), typeof s.componentDidMount == 'function'))
            try {
              s.componentDidMount()
            } catch (J) {
              Nt(i, i.return, J)
            }
          if (((i = c), (s = i.updateQueue), s !== null)) {
            var C = i.stateNode
            try {
              var U = s.shared.hiddenCallbacks
              if (U !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < U.length; s++) ey(U[s], C)
            } catch (J) {
              Nt(i, i.return, J)
            }
          }
          ;(o && b & 64 && fv(c), Ys(c, c.return))
          break
        case 27:
          gv(c)
        case 26:
        case 5:
          ;(Ko(s, c, o), o && i === null && b & 4 && mv(c), Ys(c, c.return))
          break
        case 12:
          Ko(s, c, o)
          break
        case 31:
          ;(Ko(s, c, o), o && b & 4 && xv(s, c))
          break
        case 13:
          ;(Ko(s, c, o), o && b & 4 && Sv(s, c))
          break
        case 22:
          ;(c.memoizedState === null && Ko(s, c, o), Ys(c, c.return))
          break
        case 30:
          break
        default:
          Ko(s, c, o)
      }
      n = n.sibling
    }
  }
  function fp(t, n) {
    var o = null
    ;(t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (o = t.memoizedState.cachePool.pool),
      (t = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (t = n.memoizedState.cachePool.pool),
      t !== o && (t != null && t.refCount++, o != null && Is(o)))
  }
  function dp(t, n) {
    ;((t = null),
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== t && (n.refCount++, t != null && Is(t)))
  }
  function eo(t, n, o, i) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) (Tv(t, n, o, i), (n = n.sibling))
  }
  function Tv(t, n, o, i) {
    var s = n.flags
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ;(eo(t, n, o, i), s & 2048 && Gs(9, n))
        break
      case 1:
        eo(t, n, o, i)
        break
      case 3:
        ;(eo(t, n, o, i),
          s & 2048 &&
            ((t = null),
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== t && (n.refCount++, t != null && Is(t))))
        break
      case 12:
        if (s & 2048) {
          ;(eo(t, n, o, i), (t = n.stateNode))
          try {
            var c = n.memoizedProps,
              b = c.id,
              C = c.onPostCommit
            typeof C == 'function' &&
              C(b, n.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0)
          } catch (U) {
            Nt(n, n.return, U)
          }
        } else eo(t, n, o, i)
        break
      case 31:
        eo(t, n, o, i)
        break
      case 13:
        eo(t, n, o, i)
        break
      case 23:
        break
      case 22:
        ;((c = n.stateNode),
          (b = n.alternate),
          n.memoizedState !== null
            ? c._visibility & 2
              ? eo(t, n, o, i)
              : $s(t, n)
            : c._visibility & 2
              ? eo(t, n, o, i)
              : ((c._visibility |= 2), Ma(t, n, o, i, (n.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && fp(b, n))
        break
      case 24:
        ;(eo(t, n, o, i), s & 2048 && dp(n.alternate, n))
        break
      default:
        eo(t, n, o, i)
    }
  }
  function Ma(t, n, o, i, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var c = t,
        b = n,
        C = o,
        U = i,
        J = b.flags
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          ;(Ma(c, b, C, U, s), Gs(8, b))
          break
        case 23:
          break
        case 22:
          var ce = b.stateNode
          ;(b.memoizedState !== null
            ? ce._visibility & 2
              ? Ma(c, b, C, U, s)
              : $s(c, b)
            : ((ce._visibility |= 2), Ma(c, b, C, U, s)),
            s && J & 2048 && fp(b.alternate, b))
          break
        case 24:
          ;(Ma(c, b, C, U, s), s && J & 2048 && dp(b.alternate, b))
          break
        default:
          Ma(c, b, C, U, s)
      }
      n = n.sibling
    }
  }
  function $s(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var o = t,
          i = n,
          s = i.flags
        switch (i.tag) {
          case 22:
            ;($s(o, i), s & 2048 && fp(i.alternate, i))
            break
          case 24:
            ;($s(o, i), s & 2048 && dp(i.alternate, i))
            break
          default:
            $s(o, i)
        }
        n = n.sibling
      }
  }
  var Ks = 8192
  function Oa(t, n, o) {
    if (t.subtreeFlags & Ks) for (t = t.child; t !== null; ) (Cv(t, n, o), (t = t.sibling))
  }
  function Cv(t, n, o) {
    switch (t.tag) {
      case 26:
        ;(Oa(t, n, o),
          t.flags & Ks && t.memoizedState !== null && s2(o, Wr, t.memoizedState, t.memoizedProps))
        break
      case 5:
        Oa(t, n, o)
        break
      case 3:
      case 4:
        var i = Wr
        ;((Wr = ef(t.stateNode.containerInfo)), Oa(t, n, o), (Wr = i))
        break
      case 22:
        t.memoizedState === null &&
          ((i = t.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = Ks), (Ks = 16777216), Oa(t, n, o), (Ks = i))
            : Oa(t, n, o))
        break
      default:
        Oa(t, n, o)
    }
  }
  function wv(t) {
    var n = t.alternate
    if (n !== null && ((t = n.child), t !== null)) {
      n.child = null
      do ((n = t.sibling), (t.sibling = null), (t = n))
      while (t !== null)
    }
  }
  function Xs(t) {
    var n = t.deletions
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var o = 0; o < n.length; o++) {
          var i = n[o]
          ;((zn = i), Ov(i, t))
        }
      wv(t)
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Mv(t), (t = t.sibling))
  }
  function Mv(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ;(Xs(t), t.flags & 2048 && Tl(9, t, t.return))
        break
      case 3:
        Xs(t)
        break
      case 12:
        Xs(t)
        break
      case 22:
        var n = t.stateNode
        t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((n._visibility &= -3), Bc(t))
          : Xs(t)
        break
      default:
        Xs(t)
    }
  }
  function Bc(t) {
    var n = t.deletions
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var o = 0; o < n.length; o++) {
          var i = n[o]
          ;((zn = i), Ov(i, t))
        }
      wv(t)
    }
    for (t = t.child; t !== null; ) {
      switch (((n = t), n.tag)) {
        case 0:
        case 11:
        case 15:
          ;(Tl(8, n, n.return), Bc(n))
          break
        case 22:
          ;((o = n.stateNode), o._visibility & 2 && ((o._visibility &= -3), Bc(n)))
          break
        default:
          Bc(n)
      }
      t = t.sibling
    }
  }
  function Ov(t, n) {
    for (; zn !== null; ) {
      var o = zn
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Tl(8, o, n)
          break
        case 23:
        case 22:
          if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
            var i = o.memoizedState.cachePool.pool
            i != null && i.refCount++
          }
          break
        case 24:
          Is(o.memoizedState.cache)
      }
      if (((i = o.child), i !== null)) ((i.return = o), (zn = i))
      else
        e: for (o = t; zn !== null; ) {
          i = zn
          var s = i.sibling,
            c = i.return
          if ((yv(i), i === o)) {
            zn = null
            break e
          }
          if (s !== null) {
            ;((s.return = c), (zn = s))
            break e
          }
          zn = c
        }
    }
  }
  var ET = {
      getCacheForType: function (t) {
        var n = kn(pn),
          o = n.data.get(t)
        return (o === void 0 && ((o = t()), n.data.set(t, o)), o)
      },
      cacheSignal: function () {
        return kn(pn).controller.signal
      },
    },
    TT = typeof WeakMap == 'function' ? WeakMap : Map,
    Mt = 0,
    Vt = null,
    mt = null,
    gt = 0,
    At = 0,
    Sr = null,
    Cl = !1,
    Aa = !1,
    mp = !1,
    Xo = 0,
    Zt = 0,
    wl = 0,
    Ti = 0,
    pp = 0,
    Rr = 0,
    Na = 0,
    Qs = null,
    or = null,
    gp = !1,
    Fc = 0,
    Av = 0,
    Pc = 1 / 0,
    qc = null,
    Ml = null,
    Cn = 0,
    Ol = null,
    za = null,
    Qo = 0,
    hp = 0,
    bp = null,
    Nv = null,
    Zs = 0,
    yp = null
  function Er() {
    return (Mt & 2) !== 0 && gt !== 0 ? gt & -gt : z.T !== null ? Tp() : Ao()
  }
  function zv() {
    if (Rr === 0)
      if ((gt & 536870912) === 0 || vt) {
        var t = tn
        ;((tn <<= 1), (tn & 3932160) === 0 && (tn = 262144), (Rr = t))
      } else Rr = 536870912
    return ((t = vr.current), t !== null && (t.flags |= 32), Rr)
  }
  function lr(t, n, o) {
    ;(((t === Vt && (At === 2 || At === 9)) || t.cancelPendingCommit !== null) &&
      (Ia(t, 0), Al(t, gt, Rr, !1)),
      Xt(t, o),
      ((Mt & 2) === 0 || t !== Vt) &&
        (t === Vt && ((Mt & 2) === 0 && (Ti |= o), Zt === 4 && Al(t, gt, Rr, !1)), yo(t)))
  }
  function Iv(t, n, o) {
    if ((Mt & 6) !== 0) throw Error(a(327))
    var i = (!o && (n & 127) === 0 && (n & t.expiredLanes) === 0) || Kn(t, n),
      s = i ? MT(t, n) : xp(t, n, !0),
      c = i
    do {
      if (s === 0) {
        Aa && !i && Al(t, n, 0, !1)
        break
      } else {
        if (((o = t.current.alternate), c && !CT(o))) {
          ;((s = xp(t, n, !1)), (c = !1))
          continue
        }
        if (s === 2) {
          if (((c = n), t.errorRecoveryDisabledLanes & c)) var b = 0
          else
            ((b = t.pendingLanes & -536870913), (b = b !== 0 ? b : b & 536870912 ? 536870912 : 0))
          if (b !== 0) {
            n = b
            e: {
              var C = t
              s = Qs
              var U = C.current.memoizedState.isDehydrated
              if ((U && (Ia(C, b).flags |= 256), (b = xp(C, b, !1)), b !== 2)) {
                if (mp && !U) {
                  ;((C.errorRecoveryDisabledLanes |= c), (Ti |= c), (s = 4))
                  break e
                }
                ;((c = or), (or = s), c !== null && (or === null ? (or = c) : or.push.apply(or, c)))
              }
              s = b
            }
            if (((c = !1), s !== 2)) continue
          }
        }
        if (s === 1) {
          ;(Ia(t, 0), Al(t, n, 0, !0))
          break
        }
        e: {
          switch (((i = t), (c = s), c)) {
            case 0:
            case 1:
              throw Error(a(345))
            case 4:
              if ((n & 4194048) !== n) break
            case 6:
              Al(i, n, Rr, !Cl)
              break e
            case 2:
              or = null
              break
            case 3:
            case 5:
              break
            default:
              throw Error(a(329))
          }
          if ((n & 62914560) === n && ((s = Fc + 300 - Me()), 10 < s)) {
            if ((Al(i, n, Rr, !Cl), Nn(i, 0, !0) !== 0)) break e
            ;((Qo = n),
              (i.timeoutHandle = u0(
                Dv.bind(null, i, o, or, qc, gp, n, Rr, Ti, Na, Cl, c, 'Throttled', -0, 0),
                s
              )))
            break e
          }
          Dv(i, o, or, qc, gp, n, Rr, Ti, Na, Cl, c, null, -0, 0)
        }
      }
      break
    } while (!0)
    yo(t)
  }
  function Dv(t, n, o, i, s, c, b, C, U, J, ce, ge, ne, ae) {
    if (
      ((t.timeoutHandle = -1), (ge = n.subtreeFlags), ge & 8192 || (ge & 16785408) === 16785408)
    ) {
      ;((ge = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Zr,
      }),
        Cv(n, c, ge))
      var ke = (c & 62914560) === c ? Fc - Me() : (c & 4194048) === c ? Av - Me() : 0
      if (((ke = u2(ge, ke)), ke !== null)) {
        ;((Qo = c),
          (t.cancelPendingCommit = ke(
            Bv.bind(null, t, n, c, o, i, s, b, C, U, ce, ge, null, ne, ae)
          )),
          Al(t, c, b, !J))
        return
      }
    }
    Bv(t, n, c, o, i, s, b, C, U)
  }
  function CT(t) {
    for (var n = t; ; ) {
      var o = n.tag
      if (
        (o === 0 || o === 11 || o === 15) &&
        n.flags & 16384 &&
        ((o = n.updateQueue), o !== null && ((o = o.stores), o !== null))
      )
        for (var i = 0; i < o.length; i++) {
          var s = o[i],
            c = s.getSnapshot
          s = s.value
          try {
            if (!br(c(), s)) return !1
          } catch {
            return !1
          }
        }
      if (((o = n.child), n.subtreeFlags & 16384 && o !== null)) ((o.return = n), (n = o))
      else {
        if (n === t) break
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0
          n = n.return
        }
        ;((n.sibling.return = n.return), (n = n.sibling))
      }
    }
    return !0
  }
  function Al(t, n, o, i) {
    ;((n &= ~pp),
      (n &= ~Ti),
      (t.suspendedLanes |= n),
      (t.pingedLanes &= ~n),
      i && (t.warmLanes |= n),
      (i = t.expirationTimes))
    for (var s = n; 0 < s; ) {
      var c = 31 - it(s),
        b = 1 << c
      ;((i[c] = -1), (s &= ~b))
    }
    o !== 0 && qe(t, o, n)
  }
  function Gc() {
    return (Mt & 6) === 0 ? (Js(0), !1) : !0
  }
  function vp() {
    if (mt !== null) {
      if (At === 0) var t = mt.return
      else ((t = mt), (Lo = gi = null), km(t), (Ra = null), (js = 0), (t = mt))
      for (; t !== null; ) (cv(t.alternate, t), (t = t.return))
      mt = null
    }
  }
  function Ia(t, n) {
    var o = t.timeoutHandle
    ;(o !== -1 && ((t.timeoutHandle = -1), GT(o)),
      (o = t.cancelPendingCommit),
      o !== null && ((t.cancelPendingCommit = null), o()),
      (Qo = 0),
      vp(),
      (Vt = t),
      (mt = o = Uo(t.current, null)),
      (gt = n),
      (At = 0),
      (Sr = null),
      (Cl = !1),
      (Aa = Kn(t, n)),
      (mp = !1),
      (Na = Rr = pp = Ti = wl = Zt = 0),
      (or = Qs = null),
      (gp = !1),
      (n & 8) !== 0 && (n |= n & 32))
    var i = t.entangledLanes
    if (i !== 0)
      for (t = t.entanglements, i &= n; 0 < i; ) {
        var s = 31 - it(i),
          c = 1 << s
        ;((n |= t[s]), (i &= ~c))
      }
    return ((Xo = n), dc(), o)
  }
  function jv(t, n) {
    ;((lt = null),
      (z.H = Fs),
      n === Sa || n === xc
        ? ((n = Qb()), (At = 3))
        : n === Em
          ? ((n = Qb()), (At = 4))
          : (At =
              n === Zm
                ? 8
                : n !== null && typeof n == 'object' && typeof n.then == 'function'
                  ? 6
                  : 1),
      (Sr = n),
      mt === null && ((Zt = 1), jc(t, jr(n, t.current))))
  }
  function kv() {
    var t = vr.current
    return t === null
      ? !0
      : (gt & 4194048) === gt
        ? Vr === null
        : (gt & 62914560) === gt || (gt & 536870912) !== 0
          ? t === Vr
          : !1
  }
  function _v() {
    var t = z.H
    return ((z.H = Fs), t === null ? Fs : t)
  }
  function Uv() {
    var t = z.A
    return ((z.A = ET), t)
  }
  function Yc() {
    ;((Zt = 4),
      Cl || ((gt & 4194048) !== gt && vr.current !== null) || (Aa = !0),
      ((wl & 134217727) === 0 && (Ti & 134217727) === 0) || Vt === null || Al(Vt, gt, Rr, !1))
  }
  function xp(t, n, o) {
    var i = Mt
    Mt |= 2
    var s = _v(),
      c = Uv()
    ;((Vt !== t || gt !== n) && ((qc = null), Ia(t, n)), (n = !1))
    var b = Zt
    e: do
      try {
        if (At !== 0 && mt !== null) {
          var C = mt,
            U = Sr
          switch (At) {
            case 8:
              ;(vp(), (b = 6))
              break e
            case 3:
            case 2:
            case 9:
            case 6:
              vr.current === null && (n = !0)
              var J = At
              if (((At = 0), (Sr = null), Da(t, C, U, J), o && Aa)) {
                b = 0
                break e
              }
              break
            default:
              ;((J = At), (At = 0), (Sr = null), Da(t, C, U, J))
          }
        }
        ;(wT(), (b = Zt))
        break
      } catch (ce) {
        jv(t, ce)
      }
    while (!0)
    return (
      n && t.shellSuspendCounter++,
      (Lo = gi = null),
      (Mt = i),
      (z.H = s),
      (z.A = c),
      mt === null && ((Vt = null), (gt = 0), dc()),
      b
    )
  }
  function wT() {
    for (; mt !== null; ) Vv(mt)
  }
  function MT(t, n) {
    var o = Mt
    Mt |= 2
    var i = _v(),
      s = Uv()
    Vt !== t || gt !== n ? ((qc = null), (Pc = Me() + 500), Ia(t, n)) : (Aa = Kn(t, n))
    e: do
      try {
        if (At !== 0 && mt !== null) {
          n = mt
          var c = Sr
          t: switch (At) {
            case 1:
              ;((At = 0), (Sr = null), Da(t, n, c, 1))
              break
            case 2:
            case 9:
              if (Kb(c)) {
                ;((At = 0), (Sr = null), Lv(n))
                break
              }
              ;((n = function () {
                ;((At !== 2 && At !== 9) || Vt !== t || (At = 7), yo(t))
              }),
                c.then(n, n))
              break e
            case 3:
              At = 7
              break e
            case 4:
              At = 5
              break e
            case 7:
              Kb(c) ? ((At = 0), (Sr = null), Lv(n)) : ((At = 0), (Sr = null), Da(t, n, c, 7))
              break
            case 5:
              var b = null
              switch (mt.tag) {
                case 26:
                  b = mt.memoizedState
                case 5:
                case 27:
                  var C = mt
                  if (b ? T0(b) : C.stateNode.complete) {
                    ;((At = 0), (Sr = null))
                    var U = C.sibling
                    if (U !== null) mt = U
                    else {
                      var J = C.return
                      J !== null ? ((mt = J), $c(J)) : (mt = null)
                    }
                    break t
                  }
              }
              ;((At = 0), (Sr = null), Da(t, n, c, 5))
              break
            case 6:
              ;((At = 0), (Sr = null), Da(t, n, c, 6))
              break
            case 8:
              ;(vp(), (Zt = 6))
              break e
            default:
              throw Error(a(462))
          }
        }
        OT()
        break
      } catch (ce) {
        jv(t, ce)
      }
    while (!0)
    return (
      (Lo = gi = null),
      (z.H = i),
      (z.A = s),
      (Mt = o),
      mt !== null ? 0 : ((Vt = null), (gt = 0), dc(), Zt)
    )
  }
  function OT() {
    for (; mt !== null && !je(); ) Vv(mt)
  }
  function Vv(t) {
    var n = sv(t.alternate, t, Xo)
    ;((t.memoizedProps = t.pendingProps), n === null ? $c(t) : (mt = n))
  }
  function Lv(t) {
    var n = t,
      o = n.alternate
    switch (n.tag) {
      case 15:
      case 0:
        n = nv(o, n, n.pendingProps, n.type, void 0, gt)
        break
      case 11:
        n = nv(o, n, n.pendingProps, n.type.render, n.ref, gt)
        break
      case 5:
        km(n)
      default:
        ;(cv(o, n), (n = mt = Ub(n, Xo)), (n = sv(o, n, Xo)))
    }
    ;((t.memoizedProps = t.pendingProps), n === null ? $c(t) : (mt = n))
  }
  function Da(t, n, o, i) {
    ;((Lo = gi = null), km(n), (Ra = null), (js = 0))
    var s = n.return
    try {
      if (hT(t, s, n, o, gt)) {
        ;((Zt = 1), jc(t, jr(o, t.current)), (mt = null))
        return
      }
    } catch (c) {
      if (s !== null) throw ((mt = s), c)
      ;((Zt = 1), jc(t, jr(o, t.current)), (mt = null))
      return
    }
    n.flags & 32768
      ? (vt || i === 1
          ? (t = !0)
          : Aa || (gt & 536870912) !== 0
            ? (t = !1)
            : ((Cl = t = !0),
              (i === 2 || i === 9 || i === 3 || i === 6) &&
                ((i = vr.current), i !== null && i.tag === 13 && (i.flags |= 16384))),
        Hv(n, t))
      : $c(n)
  }
  function $c(t) {
    var n = t
    do {
      if ((n.flags & 32768) !== 0) {
        Hv(n, Cl)
        return
      }
      t = n.return
      var o = vT(n.alternate, n, Xo)
      if (o !== null) {
        mt = o
        return
      }
      if (((n = n.sibling), n !== null)) {
        mt = n
        return
      }
      mt = n = t
    } while (n !== null)
    Zt === 0 && (Zt = 5)
  }
  function Hv(t, n) {
    do {
      var o = xT(t.alternate, t)
      if (o !== null) {
        ;((o.flags &= 32767), (mt = o))
        return
      }
      if (
        ((o = t.return),
        o !== null && ((o.flags |= 32768), (o.subtreeFlags = 0), (o.deletions = null)),
        !n && ((t = t.sibling), t !== null))
      ) {
        mt = t
        return
      }
      mt = t = o
    } while (t !== null)
    ;((Zt = 6), (mt = null))
  }
  function Bv(t, n, o, i, s, c, b, C, U) {
    t.cancelPendingCommit = null
    do Kc()
    while (Cn !== 0)
    if ((Mt & 6) !== 0) throw Error(a(327))
    if (n !== null) {
      if (n === t.current) throw Error(a(177))
      if (
        ((c = n.lanes | n.childLanes),
        (c |= sm),
        Bt(t, o, c, b, C, U),
        t === Vt && ((mt = Vt = null), (gt = 0)),
        (za = n),
        (Ol = t),
        (Qo = o),
        (hp = c),
        (bp = s),
        (Nv = i),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            IT(Be, function () {
              return (Yv(), null)
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || i)
      ) {
        ;((i = z.T), (z.T = null), (s = L.p), (L.p = 2), (b = Mt), (Mt |= 4))
        try {
          ST(t, n, o)
        } finally {
          ;((Mt = b), (L.p = s), (z.T = i))
        }
      }
      ;((Cn = 1), Fv(), Pv(), qv())
    }
  }
  function Fv() {
    if (Cn === 1) {
      Cn = 0
      var t = Ol,
        n = za,
        o = (n.flags & 13878) !== 0
      if ((n.subtreeFlags & 13878) !== 0 || o) {
        ;((o = z.T), (z.T = null))
        var i = L.p
        L.p = 2
        var s = Mt
        Mt |= 4
        try {
          Rv(n, t)
          var c = Ip,
            b = Ob(t.containerInfo),
            C = c.focusedElem,
            U = c.selectionRange
          if (b !== C && C && C.ownerDocument && Mb(C.ownerDocument.documentElement, C)) {
            if (U !== null && rm(C)) {
              var J = U.start,
                ce = U.end
              if ((ce === void 0 && (ce = J), 'selectionStart' in C))
                ((C.selectionStart = J), (C.selectionEnd = Math.min(ce, C.value.length)))
              else {
                var ge = C.ownerDocument || document,
                  ne = (ge && ge.defaultView) || window
                if (ne.getSelection) {
                  var ae = ne.getSelection(),
                    ke = C.textContent.length,
                    Ke = Math.min(U.start, ke),
                    Ut = U.end === void 0 ? Ke : Math.min(U.end, ke)
                  !ae.extend && Ke > Ut && ((b = Ut), (Ut = Ke), (Ke = b))
                  var G = wb(C, Ke),
                    B = wb(C, Ut)
                  if (
                    G &&
                    B &&
                    (ae.rangeCount !== 1 ||
                      ae.anchorNode !== G.node ||
                      ae.anchorOffset !== G.offset ||
                      ae.focusNode !== B.node ||
                      ae.focusOffset !== B.offset)
                  ) {
                    var Z = ge.createRange()
                    ;(Z.setStart(G.node, G.offset),
                      ae.removeAllRanges(),
                      Ke > Ut
                        ? (ae.addRange(Z), ae.extend(B.node, B.offset))
                        : (Z.setEnd(B.node, B.offset), ae.addRange(Z)))
                  }
                }
              }
            }
            for (ge = [], ae = C; (ae = ae.parentNode); )
              ae.nodeType === 1 && ge.push({ element: ae, left: ae.scrollLeft, top: ae.scrollTop })
            for (typeof C.focus == 'function' && C.focus(), C = 0; C < ge.length; C++) {
              var me = ge[C]
              ;((me.element.scrollLeft = me.left), (me.element.scrollTop = me.top))
            }
          }
          ;((af = !!zp), (Ip = zp = null))
        } finally {
          ;((Mt = s), (L.p = i), (z.T = o))
        }
      }
      ;((t.current = n), (Cn = 2))
    }
  }
  function Pv() {
    if (Cn === 2) {
      Cn = 0
      var t = Ol,
        n = za,
        o = (n.flags & 8772) !== 0
      if ((n.subtreeFlags & 8772) !== 0 || o) {
        ;((o = z.T), (z.T = null))
        var i = L.p
        L.p = 2
        var s = Mt
        Mt |= 4
        try {
          bv(t, n.alternate, n)
        } finally {
          ;((Mt = s), (L.p = i), (z.T = o))
        }
      }
      Cn = 3
    }
  }
  function qv() {
    if (Cn === 4 || Cn === 3) {
      ;((Cn = 0), Ce())
      var t = Ol,
        n = za,
        o = Qo,
        i = Nv
      ;(n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (Cn = 5)
        : ((Cn = 0), (za = Ol = null), Gv(t, t.pendingLanes))
      var s = t.pendingLanes
      if (
        (s === 0 && (Ml = null),
        Oo(o),
        (n = n.stateNode),
        ye && typeof ye.onCommitFiberRoot == 'function')
      )
        try {
          ye.onCommitFiberRoot(rt, n, void 0, (n.current.flags & 128) === 128)
        } catch {}
      if (i !== null) {
        ;((n = z.T), (s = L.p), (L.p = 2), (z.T = null))
        try {
          for (var c = t.onRecoverableError, b = 0; b < i.length; b++) {
            var C = i[b]
            c(C.value, { componentStack: C.stack })
          }
        } finally {
          ;((z.T = n), (L.p = s))
        }
      }
      ;((Qo & 3) !== 0 && Kc(),
        yo(t),
        (s = t.pendingLanes),
        (o & 261930) !== 0 && (s & 42) !== 0 ? (t === yp ? Zs++ : ((Zs = 0), (yp = t))) : (Zs = 0),
        Js(0))
    }
  }
  function Gv(t, n) {
    ;(t.pooledCacheLanes &= n) === 0 &&
      ((n = t.pooledCache), n != null && ((t.pooledCache = null), Is(n)))
  }
  function Kc() {
    return (Fv(), Pv(), qv(), Yv())
  }
  function Yv() {
    if (Cn !== 5) return !1
    var t = Ol,
      n = hp
    hp = 0
    var o = Oo(Qo),
      i = z.T,
      s = L.p
    try {
      ;((L.p = 32 > o ? 32 : o), (z.T = null), (o = bp), (bp = null))
      var c = Ol,
        b = Qo
      if (((Cn = 0), (za = Ol = null), (Qo = 0), (Mt & 6) !== 0)) throw Error(a(331))
      var C = Mt
      if (
        ((Mt |= 4),
        Mv(c.current),
        Tv(c, c.current, b, o),
        (Mt = C),
        Js(0, !1),
        ye && typeof ye.onPostCommitFiberRoot == 'function')
      )
        try {
          ye.onPostCommitFiberRoot(rt, c)
        } catch {}
      return !0
    } finally {
      ;((L.p = s), (z.T = i), Gv(t, n))
    }
  }
  function $v(t, n, o) {
    ;((n = jr(o, n)),
      (n = Qm(t.stateNode, n, 2)),
      (t = Sl(t, n, 2)),
      t !== null && (Xt(t, 2), yo(t)))
  }
  function Nt(t, n, o) {
    if (t.tag === 3) $v(t, t, o)
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          $v(n, t, o)
          break
        } else if (n.tag === 1) {
          var i = n.stateNode
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof i.componentDidCatch == 'function' && (Ml === null || !Ml.has(i)))
          ) {
            ;((t = jr(o, t)),
              (o = Ky(2)),
              (i = Sl(n, o, 2)),
              i !== null && (Xy(o, i, n, t), Xt(i, 2), yo(i)))
            break
          }
        }
        n = n.return
      }
  }
  function Sp(t, n, o) {
    var i = t.pingCache
    if (i === null) {
      i = t.pingCache = new TT()
      var s = new Set()
      i.set(n, s)
    } else ((s = i.get(n)), s === void 0 && ((s = new Set()), i.set(n, s)))
    s.has(o) || ((mp = !0), s.add(o), (t = AT.bind(null, t, n, o)), n.then(t, t))
  }
  function AT(t, n, o) {
    var i = t.pingCache
    ;(i !== null && i.delete(n),
      (t.pingedLanes |= t.suspendedLanes & o),
      (t.warmLanes &= ~o),
      Vt === t &&
        (gt & o) === o &&
        (Zt === 4 || (Zt === 3 && (gt & 62914560) === gt && 300 > Me() - Fc)
          ? (Mt & 2) === 0 && Ia(t, 0)
          : (pp |= o),
        Na === gt && (Na = 0)),
      yo(t))
  }
  function Kv(t, n) {
    ;(n === 0 && (n = st()), (t = di(t, n)), t !== null && (Xt(t, n), yo(t)))
  }
  function NT(t) {
    var n = t.memoizedState,
      o = 0
    ;(n !== null && (o = n.retryLane), Kv(t, o))
  }
  function zT(t, n) {
    var o = 0
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode,
          s = t.memoizedState
        s !== null && (o = s.retryLane)
        break
      case 19:
        i = t.stateNode
        break
      case 22:
        i = t.stateNode._retryCache
        break
      default:
        throw Error(a(314))
    }
    ;(i !== null && i.delete(n), Kv(t, o))
  }
  function IT(t, n) {
    return _e(t, n)
  }
  var Xc = null,
    ja = null,
    Rp = !1,
    Qc = !1,
    Ep = !1,
    Nl = 0
  function yo(t) {
    ;(t !== ja && t.next === null && (ja === null ? (Xc = ja = t) : (ja = ja.next = t)),
      (Qc = !0),
      Rp || ((Rp = !0), jT()))
  }
  function Js(t, n) {
    if (!Ep && Qc) {
      Ep = !0
      do
        for (var o = !1, i = Xc; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes
            if (s === 0) var c = 0
            else {
              var b = i.suspendedLanes,
                C = i.pingedLanes
              ;((c = (1 << (31 - it(42 | t) + 1)) - 1),
                (c &= s & ~(b & ~C)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0))
            }
            c !== 0 && ((o = !0), Jv(i, c))
          } else
            ((c = gt),
              (c = Nn(
                i,
                i === Vt ? c : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1
              )),
              (c & 3) === 0 || Kn(i, c) || ((o = !0), Jv(i, c)))
          i = i.next
        }
      while (o)
      Ep = !1
    }
  }
  function DT() {
    Xv()
  }
  function Xv() {
    Qc = Rp = !1
    var t = 0
    Nl !== 0 && qT() && (t = Nl)
    for (var n = Me(), o = null, i = Xc; i !== null; ) {
      var s = i.next,
        c = Qv(i, n)
      ;(c === 0
        ? ((i.next = null), o === null ? (Xc = s) : (o.next = s), s === null && (ja = o))
        : ((o = i), (t !== 0 || (c & 3) !== 0) && (Qc = !0)),
        (i = s))
    }
    ;((Cn !== 0 && Cn !== 5) || Js(t), Nl !== 0 && (Nl = 0))
  }
  function Qv(t, n) {
    for (
      var o = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        c = t.pendingLanes & -62914561;
      0 < c;
    ) {
      var b = 31 - it(c),
        C = 1 << b,
        U = s[b]
      ;(U === -1
        ? ((C & o) === 0 || (C & i) !== 0) && (s[b] = fr(C, n))
        : U <= n && (t.expiredLanes |= C),
        (c &= ~C))
    }
    if (
      ((n = Vt),
      (o = gt),
      (o = Nn(t, t === n ? o : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (i = t.callbackNode),
      o === 0 || (t === n && (At === 2 || At === 9)) || t.cancelPendingCommit !== null)
    )
      return (i !== null && i !== null && pe(i), (t.callbackNode = null), (t.callbackPriority = 0))
    if ((o & 3) === 0 || Kn(t, o)) {
      if (((n = o & -o), n === t.callbackPriority)) return n
      switch ((i !== null && pe(i), Oo(o))) {
        case 2:
        case 8:
          o = We
          break
        case 32:
          o = Be
          break
        case 268435456:
          o = Rt
          break
        default:
          o = Be
      }
      return (
        (i = Zv.bind(null, t)),
        (o = _e(o, i)),
        (t.callbackPriority = n),
        (t.callbackNode = o),
        n
      )
    }
    return (i !== null && i !== null && pe(i), (t.callbackPriority = 2), (t.callbackNode = null), 2)
  }
  function Zv(t, n) {
    if (Cn !== 0 && Cn !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null)
    var o = t.callbackNode
    if (Kc() && t.callbackNode !== o) return null
    var i = gt
    return (
      (i = Nn(t, t === Vt ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      i === 0
        ? null
        : (Iv(t, i, n),
          Qv(t, Me()),
          t.callbackNode != null && t.callbackNode === o ? Zv.bind(null, t) : null)
    )
  }
  function Jv(t, n) {
    if (Kc()) return null
    Iv(t, n, !0)
  }
  function jT() {
    YT(function () {
      ;(Mt & 6) !== 0 ? _e(Xe, DT) : Xv()
    })
  }
  function Tp() {
    if (Nl === 0) {
      var t = va
      ;(t === 0 && ((t = Ze), (Ze <<= 1), (Ze & 261888) === 0 && (Ze = 256)), (Nl = t))
    }
    return Nl
  }
  function Wv(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean'
      ? null
      : typeof t == 'function'
        ? t
        : ko('' + t)
  }
  function e0(t, n) {
    var o = n.ownerDocument.createElement('input')
    return (
      (o.name = n.name),
      (o.value = n.value),
      t.id && o.setAttribute('form', t.id),
      n.parentNode.insertBefore(o, n),
      (t = new FormData(t)),
      o.parentNode.removeChild(o),
      t
    )
  }
  function kT(t, n, o, i, s) {
    if (n === 'submit' && o && o.stateNode === s) {
      var c = Wv((s[fn] || null).action),
        b = i.submitter
      b &&
        ((n = (n = b[fn] || null) ? Wv(n.formAction) : b.getAttribute('formAction')),
        n !== null && ((c = n), (b = null)))
      var C = new sc('action', 'action', null, i, s)
      t.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (Nl !== 0) {
                  var U = b ? e0(s, b) : new FormData(s)
                  qm(o, { pending: !0, data: U, method: s.method, action: c }, null, U)
                }
              } else
                typeof c == 'function' &&
                  (C.preventDefault(),
                  (U = b ? e0(s, b) : new FormData(s)),
                  qm(o, { pending: !0, data: U, method: s.method, action: c }, c, U))
            },
            currentTarget: s,
          },
        ],
      })
    }
  }
  for (var Cp = 0; Cp < am.length; Cp++) {
    var wp = am[Cp],
      _T = wp.toLowerCase(),
      UT = wp[0].toUpperCase() + wp.slice(1)
    Jr(_T, 'on' + UT)
  }
  ;(Jr(zb, 'onAnimationEnd'),
    Jr(Ib, 'onAnimationIteration'),
    Jr(Db, 'onAnimationStart'),
    Jr('dblclick', 'onDoubleClick'),
    Jr('focusin', 'onFocus'),
    Jr('focusout', 'onBlur'),
    Jr(WE, 'onTransitionRun'),
    Jr(eT, 'onTransitionStart'),
    Jr(tT, 'onTransitionCancel'),
    Jr(jb, 'onTransitionEnd'),
    Qr('onMouseEnter', ['mouseout', 'mouseover']),
    Qr('onMouseLeave', ['mouseout', 'mouseover']),
    Qr('onPointerEnter', ['pointerout', 'pointerover']),
    Qr('onPointerLeave', ['pointerout', 'pointerover']),
    gr('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    gr(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    gr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    gr('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    gr(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    gr(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ))
  var Ws =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    VT = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Ws)
    )
  function t0(t, n) {
    n = (n & 4) !== 0
    for (var o = 0; o < t.length; o++) {
      var i = t[o],
        s = i.event
      i = i.listeners
      e: {
        var c = void 0
        if (n)
          for (var b = i.length - 1; 0 <= b; b--) {
            var C = i[b],
              U = C.instance,
              J = C.currentTarget
            if (((C = C.listener), U !== c && s.isPropagationStopped())) break e
            ;((c = C), (s.currentTarget = J))
            try {
              c(s)
            } catch (ce) {
              fc(ce)
            }
            ;((s.currentTarget = null), (c = U))
          }
        else
          for (b = 0; b < i.length; b++) {
            if (
              ((C = i[b]),
              (U = C.instance),
              (J = C.currentTarget),
              (C = C.listener),
              U !== c && s.isPropagationStopped())
            )
              break e
            ;((c = C), (s.currentTarget = J))
            try {
              c(s)
            } catch (ce) {
              fc(ce)
            }
            ;((s.currentTarget = null), (c = U))
          }
      }
    }
  }
  function pt(t, n) {
    var o = n[pr]
    o === void 0 && (o = n[pr] = new Set())
    var i = t + '__bubble'
    o.has(i) || (n0(n, t, 2, !1), o.add(i))
  }
  function Mp(t, n, o) {
    var i = 0
    ;(n && (i |= 4), n0(o, t, i, n))
  }
  var Zc = '_reactListening' + Math.random().toString(36).slice(2)
  function Op(t) {
    if (!t[Zc]) {
      ;((t[Zc] = !0),
        Xn.forEach(function (o) {
          o !== 'selectionchange' && (VT.has(o) || Mp(o, !1, t), Mp(o, !0, t))
        }))
      var n = t.nodeType === 9 ? t : t.ownerDocument
      n === null || n[Zc] || ((n[Zc] = !0), Mp('selectionchange', !1, n))
    }
  }
  function n0(t, n, o, i) {
    switch (z0(n)) {
      case 2:
        var s = d2
        break
      case 8:
        s = m2
        break
      default:
        s = Pp
    }
    ;((o = s.bind(null, n, o, t)),
      (s = void 0),
      !Kd || (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') || (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(n, o, { capture: !0, passive: s })
          : t.addEventListener(n, o, !0)
        : s !== void 0
          ? t.addEventListener(n, o, { passive: s })
          : t.addEventListener(n, o, !1))
  }
  function Ap(t, n, o, i, s) {
    var c = i
    if ((n & 1) === 0 && (n & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return
        var b = i.tag
        if (b === 3 || b === 4) {
          var C = i.stateNode.containerInfo
          if (C === s) break
          if (b === 4)
            for (b = i.return; b !== null; ) {
              var U = b.tag
              if ((U === 3 || U === 4) && b.stateNode.containerInfo === s) return
              b = b.return
            }
          for (; C !== null; ) {
            if (((b = zo(C)), b === null)) return
            if (((U = b.tag), U === 5 || U === 6 || U === 26 || U === 27)) {
              i = c = b
              continue e
            }
            C = C.parentNode
          }
        }
        i = i.return
      }
    ab(function () {
      var J = c,
        ce = Yd(o),
        ge = []
      e: {
        var ne = kb.get(t)
        if (ne !== void 0) {
          var ae = sc,
            ke = t
          switch (t) {
            case 'keypress':
              if (ic(o) === 0) break e
            case 'keydown':
            case 'keyup':
              ae = zE
              break
            case 'focusin':
              ;((ke = 'focus'), (ae = Jd))
              break
            case 'focusout':
              ;((ke = 'blur'), (ae = Jd))
              break
            case 'beforeblur':
            case 'afterblur':
              ae = Jd
              break
            case 'click':
              if (o.button === 2) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              ae = cb
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              ae = vE
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              ae = jE
              break
            case zb:
            case Ib:
            case Db:
              ae = RE
              break
            case jb:
              ae = _E
              break
            case 'scroll':
            case 'scrollend':
              ae = bE
              break
            case 'wheel':
              ae = VE
              break
            case 'copy':
            case 'cut':
            case 'paste':
              ae = TE
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              ae = db
              break
            case 'toggle':
            case 'beforetoggle':
              ae = HE
          }
          var Ke = (n & 4) !== 0,
            Ut = !Ke && (t === 'scroll' || t === 'scrollend'),
            G = Ke ? (ne !== null ? ne + 'Capture' : null) : ne
          Ke = []
          for (var B = J, Z; B !== null; ) {
            var me = B
            if (
              ((Z = me.stateNode),
              (me = me.tag),
              (me !== 5 && me !== 26 && me !== 27) ||
                Z === null ||
                G === null ||
                ((me = Ss(B, G)), me != null && Ke.push(eu(B, me, Z))),
              Ut)
            )
              break
            B = B.return
          }
          0 < Ke.length &&
            ((ne = new ae(ne, ke, null, o, ce)), ge.push({ event: ne, listeners: Ke }))
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((ne = t === 'mouseover' || t === 'pointerover'),
            (ae = t === 'mouseout' || t === 'pointerout'),
            ne && o !== oc && (ke = o.relatedTarget || o.fromElement) && (zo(ke) || ke[mo]))
          )
            break e
          if (
            (ae || ne) &&
            ((ne =
              ce.window === ce
                ? ce
                : (ne = ce.ownerDocument)
                  ? ne.defaultView || ne.parentWindow
                  : window),
            ae
              ? ((ke = o.relatedTarget || o.toElement),
                (ae = J),
                (ke = ke ? zo(ke) : null),
                ke !== null &&
                  ((Ut = f(ke)), (Ke = ke.tag), ke !== Ut || (Ke !== 5 && Ke !== 27 && Ke !== 6)) &&
                  (ke = null))
              : ((ae = null), (ke = J)),
            ae !== ke)
          ) {
            if (
              ((Ke = cb),
              (me = 'onMouseLeave'),
              (G = 'onMouseEnter'),
              (B = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((Ke = db), (me = 'onPointerLeave'), (G = 'onPointerEnter'), (B = 'pointer')),
              (Ut = ae == null ? ne : si(ae)),
              (Z = ke == null ? ne : si(ke)),
              (ne = new Ke(me, B + 'leave', ae, o, ce)),
              (ne.target = Ut),
              (ne.relatedTarget = Z),
              (me = null),
              zo(ce) === J &&
                ((Ke = new Ke(G, B + 'enter', ke, o, ce)),
                (Ke.target = Z),
                (Ke.relatedTarget = Ut),
                (me = Ke)),
              (Ut = me),
              ae && ke)
            )
              t: {
                for (Ke = LT, G = ae, B = ke, Z = 0, me = G; me; me = Ke(me)) Z++
                me = 0
                for (var Ge = B; Ge; Ge = Ke(Ge)) me++
                for (; 0 < Z - me; ) ((G = Ke(G)), Z--)
                for (; 0 < me - Z; ) ((B = Ke(B)), me--)
                for (; Z--; ) {
                  if (G === B || (B !== null && G === B.alternate)) {
                    Ke = G
                    break t
                  }
                  ;((G = Ke(G)), (B = Ke(B)))
                }
                Ke = null
              }
            else Ke = null
            ;(ae !== null && r0(ge, ne, ae, Ke, !1),
              ke !== null && Ut !== null && r0(ge, Ut, ke, Ke, !0))
          }
        }
        e: {
          if (
            ((ne = J ? si(J) : window),
            (ae = ne.nodeName && ne.nodeName.toLowerCase()),
            ae === 'select' || (ae === 'input' && ne.type === 'file'))
          )
            var Tt = xb
          else if (yb(ne))
            if (Sb) Tt = QE
            else {
              Tt = KE
              var He = $E
            }
          else
            ((ae = ne.nodeName),
              !ae || ae.toLowerCase() !== 'input' || (ne.type !== 'checkbox' && ne.type !== 'radio')
                ? J && mn(J.elementType) && (Tt = xb)
                : (Tt = XE))
          if (Tt && (Tt = Tt(t, J))) {
            vb(ge, Tt, o, ce)
            break e
          }
          ;(He && He(t, ne, J),
            t === 'focusout' &&
              J &&
              ne.type === 'number' &&
              J.memoizedProps.value != null &&
              xs(ne, 'number', ne.value))
        }
        switch (((He = J ? si(J) : window), t)) {
          case 'focusin':
            ;(yb(He) || He.contentEditable === 'true') && ((fa = He), (om = J), (As = null))
            break
          case 'focusout':
            As = om = fa = null
            break
          case 'mousedown':
            lm = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;((lm = !1), Ab(ge, o, ce))
            break
          case 'selectionchange':
            if (JE) break
          case 'keydown':
          case 'keyup':
            Ab(ge, o, ce)
        }
        var at
        if (em)
          e: {
            switch (t) {
              case 'compositionstart':
                var ht = 'onCompositionStart'
                break e
              case 'compositionend':
                ht = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                ht = 'onCompositionUpdate'
                break e
            }
            ht = void 0
          }
        else
          ca
            ? hb(t, o) && (ht = 'onCompositionEnd')
            : t === 'keydown' && o.keyCode === 229 && (ht = 'onCompositionStart')
        ;(ht &&
          (mb &&
            o.locale !== 'ko' &&
            (ca || ht !== 'onCompositionStart'
              ? ht === 'onCompositionEnd' && ca && (at = sb())
              : ((pl = ce), (Xd = 'value' in pl ? pl.value : pl.textContent), (ca = !0))),
          (He = Jc(J, ht)),
          0 < He.length &&
            ((ht = new fb(ht, t, null, o, ce)),
            ge.push({ event: ht, listeners: He }),
            at ? (ht.data = at) : ((at = bb(o)), at !== null && (ht.data = at)))),
          (at = FE ? PE(t, o) : qE(t, o)) &&
            ((ht = Jc(J, 'onBeforeInput')),
            0 < ht.length &&
              ((He = new fb('onBeforeInput', 'beforeinput', null, o, ce)),
              ge.push({ event: He, listeners: ht }),
              (He.data = at))),
          kT(ge, t, J, o, ce))
      }
      t0(ge, n)
    })
  }
  function eu(t, n, o) {
    return { instance: t, listener: n, currentTarget: o }
  }
  function Jc(t, n) {
    for (var o = n + 'Capture', i = []; t !== null; ) {
      var s = t,
        c = s.stateNode
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          c === null ||
          ((s = Ss(t, o)),
          s != null && i.unshift(eu(t, s, c)),
          (s = Ss(t, n)),
          s != null && i.push(eu(t, s, c))),
        t.tag === 3)
      )
        return i
      t = t.return
    }
    return []
  }
  function LT(t) {
    if (t === null) return null
    do t = t.return
    while (t && t.tag !== 5 && t.tag !== 27)
    return t || null
  }
  function r0(t, n, o, i, s) {
    for (var c = n._reactName, b = []; o !== null && o !== i; ) {
      var C = o,
        U = C.alternate,
        J = C.stateNode
      if (((C = C.tag), U !== null && U === i)) break
      ;((C !== 5 && C !== 26 && C !== 27) ||
        J === null ||
        ((U = J),
        s
          ? ((J = Ss(o, c)), J != null && b.unshift(eu(o, J, U)))
          : s || ((J = Ss(o, c)), J != null && b.push(eu(o, J, U)))),
        (o = o.return))
    }
    b.length !== 0 && t.push({ event: n, listeners: b })
  }
  var HT = /\r\n?/g,
    BT = /\u0000|\uFFFD/g
  function o0(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        HT,
        `
`
      )
      .replace(BT, '')
  }
  function l0(t, n) {
    return ((n = o0(n)), o0(t) === n)
  }
  function _t(t, n, o, i, s, c) {
    switch (o) {
      case 'children':
        typeof i == 'string'
          ? n === 'body' || (n === 'textarea' && i === '') || Pe(t, i)
          : (typeof i == 'number' || typeof i == 'bigint') && n !== 'body' && Pe(t, '' + i)
        break
      case 'className':
        fl(t, 'class', i)
        break
      case 'tabIndex':
        fl(t, 'tabindex', i)
        break
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        fl(t, o, i)
        break
      case 'style':
        $t(t, i, c)
        break
      case 'data':
        if (n !== 'object') {
          fl(t, 'data', i)
          break
        }
      case 'src':
      case 'href':
        if (i === '' && (n !== 'a' || o !== 'href')) {
          t.removeAttribute(o)
          break
        }
        if (i == null || typeof i == 'function' || typeof i == 'symbol' || typeof i == 'boolean') {
          t.removeAttribute(o)
          break
        }
        ;((i = ko('' + i)), t.setAttribute(o, i))
        break
      case 'action':
      case 'formAction':
        if (typeof i == 'function') {
          t.setAttribute(
            o,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          )
          break
        } else
          typeof c == 'function' &&
            (o === 'formAction'
              ? (n !== 'input' && _t(t, n, 'name', s.name, s, null),
                _t(t, n, 'formEncType', s.formEncType, s, null),
                _t(t, n, 'formMethod', s.formMethod, s, null),
                _t(t, n, 'formTarget', s.formTarget, s, null))
              : (_t(t, n, 'encType', s.encType, s, null),
                _t(t, n, 'method', s.method, s, null),
                _t(t, n, 'target', s.target, s, null)))
        if (i == null || typeof i == 'symbol' || typeof i == 'boolean') {
          t.removeAttribute(o)
          break
        }
        ;((i = ko('' + i)), t.setAttribute(o, i))
        break
      case 'onClick':
        i != null && (t.onclick = Zr)
        break
      case 'onScroll':
        i != null && pt('scroll', t)
        break
      case 'onScrollEnd':
        i != null && pt('scrollend', t)
        break
      case 'dangerouslySetInnerHTML':
        if (i != null) {
          if (typeof i != 'object' || !('__html' in i)) throw Error(a(61))
          if (((o = i.__html), o != null)) {
            if (s.children != null) throw Error(a(60))
            t.innerHTML = o
          }
        }
        break
      case 'multiple':
        t.multiple = i && typeof i != 'function' && typeof i != 'symbol'
        break
      case 'muted':
        t.muted = i && typeof i != 'function' && typeof i != 'symbol'
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break
      case 'autoFocus':
        break
      case 'xlinkHref':
        if (i == null || typeof i == 'function' || typeof i == 'boolean' || typeof i == 'symbol') {
          t.removeAttribute('xlink:href')
          break
        }
        ;((o = ko('' + i)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', o))
        break
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        i != null && typeof i != 'function' && typeof i != 'symbol'
          ? t.setAttribute(o, '' + i)
          : t.removeAttribute(o)
        break
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        i && typeof i != 'function' && typeof i != 'symbol'
          ? t.setAttribute(o, '')
          : t.removeAttribute(o)
        break
      case 'capture':
      case 'download':
        i === !0
          ? t.setAttribute(o, '')
          : i !== !1 && i != null && typeof i != 'function' && typeof i != 'symbol'
            ? t.setAttribute(o, i)
            : t.removeAttribute(o)
        break
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        i != null && typeof i != 'function' && typeof i != 'symbol' && !isNaN(i) && 1 <= i
          ? t.setAttribute(o, i)
          : t.removeAttribute(o)
        break
      case 'rowSpan':
      case 'start':
        i == null || typeof i == 'function' || typeof i == 'symbol' || isNaN(i)
          ? t.removeAttribute(o)
          : t.setAttribute(o, i)
        break
      case 'popover':
        ;(pt('beforetoggle', t), pt('toggle', t), Io(t, 'popover', i))
        break
      case 'xlinkActuate':
        hr(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', i)
        break
      case 'xlinkArcrole':
        hr(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', i)
        break
      case 'xlinkRole':
        hr(t, 'http://www.w3.org/1999/xlink', 'xlink:role', i)
        break
      case 'xlinkShow':
        hr(t, 'http://www.w3.org/1999/xlink', 'xlink:show', i)
        break
      case 'xlinkTitle':
        hr(t, 'http://www.w3.org/1999/xlink', 'xlink:title', i)
        break
      case 'xlinkType':
        hr(t, 'http://www.w3.org/1999/xlink', 'xlink:type', i)
        break
      case 'xmlBase':
        hr(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', i)
        break
      case 'xmlLang':
        hr(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', i)
        break
      case 'xmlSpace':
        hr(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', i)
        break
      case 'is':
        Io(t, 'is', i)
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        ;(!(2 < o.length) || (o[0] !== 'o' && o[0] !== 'O') || (o[1] !== 'n' && o[1] !== 'N')) &&
          ((o = Do.get(o) || o), Io(t, o, i))
    }
  }
  function Np(t, n, o, i, s, c) {
    switch (o) {
      case 'style':
        $t(t, i, c)
        break
      case 'dangerouslySetInnerHTML':
        if (i != null) {
          if (typeof i != 'object' || !('__html' in i)) throw Error(a(61))
          if (((o = i.__html), o != null)) {
            if (s.children != null) throw Error(a(60))
            t.innerHTML = o
          }
        }
        break
      case 'children':
        typeof i == 'string'
          ? Pe(t, i)
          : (typeof i == 'number' || typeof i == 'bigint') && Pe(t, '' + i)
        break
      case 'onScroll':
        i != null && pt('scroll', t)
        break
      case 'onScrollEnd':
        i != null && pt('scrollend', t)
        break
      case 'onClick':
        i != null && (t.onclick = Zr)
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        if (!Qn.hasOwnProperty(o))
          e: {
            if (
              o[0] === 'o' &&
              o[1] === 'n' &&
              ((s = o.endsWith('Capture')),
              (n = o.slice(2, s ? o.length - 7 : void 0)),
              (c = t[fn] || null),
              (c = c != null ? c[o] : null),
              typeof c == 'function' && t.removeEventListener(n, c, s),
              typeof i == 'function')
            ) {
              ;(typeof c != 'function' &&
                c !== null &&
                (o in t ? (t[o] = null) : t.hasAttribute(o) && t.removeAttribute(o)),
                t.addEventListener(n, i, s))
              break e
            }
            o in t ? (t[o] = i) : i === !0 ? t.setAttribute(o, '') : Io(t, o, i)
          }
    }
  }
  function Un(t, n, o) {
    switch (n) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'img':
        ;(pt('error', t), pt('load', t))
        var i = !1,
          s = !1,
          c
        for (c in o)
          if (o.hasOwnProperty(c)) {
            var b = o[c]
            if (b != null)
              switch (c) {
                case 'src':
                  i = !0
                  break
                case 'srcSet':
                  s = !0
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(a(137, n))
                default:
                  _t(t, n, c, b, o, null)
              }
          }
        ;(s && _t(t, n, 'srcSet', o.srcSet, o, null), i && _t(t, n, 'src', o.src, o, null))
        return
      case 'input':
        pt('invalid', t)
        var C = (c = b = s = null),
          U = null,
          J = null
        for (i in o)
          if (o.hasOwnProperty(i)) {
            var ce = o[i]
            if (ce != null)
              switch (i) {
                case 'name':
                  s = ce
                  break
                case 'type':
                  b = ce
                  break
                case 'checked':
                  U = ce
                  break
                case 'defaultChecked':
                  J = ce
                  break
                case 'value':
                  c = ce
                  break
                case 'defaultValue':
                  C = ce
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (ce != null) throw Error(a(137, n))
                  break
                default:
                  _t(t, n, i, ce, o, null)
              }
          }
        nc(t, c, C, U, J, b, s, !1)
        return
      case 'select':
        ;(pt('invalid', t), (i = b = c = null))
        for (s in o)
          if (o.hasOwnProperty(s) && ((C = o[s]), C != null))
            switch (s) {
              case 'value':
                c = C
                break
              case 'defaultValue':
                b = C
                break
              case 'multiple':
                i = C
              default:
                _t(t, n, s, C, o, null)
            }
        ;((n = c),
          (o = b),
          (t.multiple = !!i),
          n != null ? ml(t, !!i, n, !1) : o != null && ml(t, !!i, o, !0))
        return
      case 'textarea':
        ;(pt('invalid', t), (c = s = i = null))
        for (b in o)
          if (o.hasOwnProperty(b) && ((C = o[b]), C != null))
            switch (b) {
              case 'value':
                i = C
                break
              case 'defaultValue':
                s = C
                break
              case 'children':
                c = C
                break
              case 'dangerouslySetInnerHTML':
                if (C != null) throw Error(a(91))
                break
              default:
                _t(t, n, b, C, o, null)
            }
        ze(t, i, s, c)
        return
      case 'option':
        for (U in o)
          o.hasOwnProperty(U) &&
            ((i = o[U]), i != null) &&
            (U === 'selected'
              ? (t.selected = i && typeof i != 'function' && typeof i != 'symbol')
              : _t(t, n, U, i, o, null))
        return
      case 'dialog':
        ;(pt('beforetoggle', t), pt('toggle', t), pt('cancel', t), pt('close', t))
        break
      case 'iframe':
      case 'object':
        pt('load', t)
        break
      case 'video':
      case 'audio':
        for (i = 0; i < Ws.length; i++) pt(Ws[i], t)
        break
      case 'image':
        ;(pt('error', t), pt('load', t))
        break
      case 'details':
        pt('toggle', t)
        break
      case 'embed':
      case 'source':
      case 'link':
        ;(pt('error', t), pt('load', t))
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (J in o)
          if (o.hasOwnProperty(J) && ((i = o[J]), i != null))
            switch (J) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(a(137, n))
              default:
                _t(t, n, J, i, o, null)
            }
        return
      default:
        if (mn(n)) {
          for (ce in o)
            o.hasOwnProperty(ce) && ((i = o[ce]), i !== void 0 && Np(t, n, ce, i, o, void 0))
          return
        }
    }
    for (C in o) o.hasOwnProperty(C) && ((i = o[C]), i != null && _t(t, n, C, i, o, null))
  }
  function FT(t, n, o, i) {
    switch (n) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'input':
        var s = null,
          c = null,
          b = null,
          C = null,
          U = null,
          J = null,
          ce = null
        for (ae in o) {
          var ge = o[ae]
          if (o.hasOwnProperty(ae) && ge != null)
            switch (ae) {
              case 'checked':
                break
              case 'value':
                break
              case 'defaultValue':
                U = ge
              default:
                i.hasOwnProperty(ae) || _t(t, n, ae, null, i, ge)
            }
        }
        for (var ne in i) {
          var ae = i[ne]
          if (((ge = o[ne]), i.hasOwnProperty(ne) && (ae != null || ge != null)))
            switch (ne) {
              case 'type':
                c = ae
                break
              case 'name':
                s = ae
                break
              case 'checked':
                J = ae
                break
              case 'defaultChecked':
                ce = ae
                break
              case 'value':
                b = ae
                break
              case 'defaultValue':
                C = ae
                break
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (ae != null) throw Error(a(137, n))
                break
              default:
                ae !== ge && _t(t, n, ne, ae, i, ge)
            }
        }
        vs(t, b, C, U, J, ce, c, s)
        return
      case 'select':
        ae = b = C = ne = null
        for (c in o)
          if (((U = o[c]), o.hasOwnProperty(c) && U != null))
            switch (c) {
              case 'value':
                break
              case 'multiple':
                ae = U
              default:
                i.hasOwnProperty(c) || _t(t, n, c, null, i, U)
            }
        for (s in i)
          if (((c = i[s]), (U = o[s]), i.hasOwnProperty(s) && (c != null || U != null)))
            switch (s) {
              case 'value':
                ne = c
                break
              case 'defaultValue':
                C = c
                break
              case 'multiple':
                b = c
              default:
                c !== U && _t(t, n, s, c, i, U)
            }
        ;((n = C),
          (o = b),
          (i = ae),
          ne != null
            ? ml(t, !!o, ne, !1)
            : !!i != !!o && (n != null ? ml(t, !!o, n, !0) : ml(t, !!o, o ? [] : '', !1)))
        return
      case 'textarea':
        ae = ne = null
        for (C in o)
          if (((s = o[C]), o.hasOwnProperty(C) && s != null && !i.hasOwnProperty(C)))
            switch (C) {
              case 'value':
                break
              case 'children':
                break
              default:
                _t(t, n, C, null, i, s)
            }
        for (b in i)
          if (((s = i[b]), (c = o[b]), i.hasOwnProperty(b) && (s != null || c != null)))
            switch (b) {
              case 'value':
                ne = s
                break
              case 'defaultValue':
                ae = s
                break
              case 'children':
                break
              case 'dangerouslySetInnerHTML':
                if (s != null) throw Error(a(91))
                break
              default:
                s !== c && _t(t, n, b, s, i, c)
            }
        rc(t, ne, ae)
        return
      case 'option':
        for (var ke in o)
          ((ne = o[ke]),
            o.hasOwnProperty(ke) &&
              ne != null &&
              !i.hasOwnProperty(ke) &&
              (ke === 'selected' ? (t.selected = !1) : _t(t, n, ke, null, i, ne)))
        for (U in i)
          ((ne = i[U]),
            (ae = o[U]),
            i.hasOwnProperty(U) &&
              ne !== ae &&
              (ne != null || ae != null) &&
              (U === 'selected'
                ? (t.selected = ne && typeof ne != 'function' && typeof ne != 'symbol')
                : _t(t, n, U, ne, i, ae)))
        return
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var Ke in o)
          ((ne = o[Ke]),
            o.hasOwnProperty(Ke) &&
              ne != null &&
              !i.hasOwnProperty(Ke) &&
              _t(t, n, Ke, null, i, ne))
        for (J in i)
          if (
            ((ne = i[J]),
            (ae = o[J]),
            i.hasOwnProperty(J) && ne !== ae && (ne != null || ae != null))
          )
            switch (J) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (ne != null) throw Error(a(137, n))
                break
              default:
                _t(t, n, J, ne, i, ae)
            }
        return
      default:
        if (mn(n)) {
          for (var Ut in o)
            ((ne = o[Ut]),
              o.hasOwnProperty(Ut) &&
                ne !== void 0 &&
                !i.hasOwnProperty(Ut) &&
                Np(t, n, Ut, void 0, i, ne))
          for (ce in i)
            ((ne = i[ce]),
              (ae = o[ce]),
              !i.hasOwnProperty(ce) ||
                ne === ae ||
                (ne === void 0 && ae === void 0) ||
                Np(t, n, ce, ne, i, ae))
          return
        }
    }
    for (var G in o)
      ((ne = o[G]),
        o.hasOwnProperty(G) && ne != null && !i.hasOwnProperty(G) && _t(t, n, G, null, i, ne))
    for (ge in i)
      ((ne = i[ge]),
        (ae = o[ge]),
        !i.hasOwnProperty(ge) || ne === ae || (ne == null && ae == null) || _t(t, n, ge, ne, i, ae))
  }
  function i0(t) {
    switch (t) {
      case 'css':
      case 'script':
      case 'font':
      case 'img':
      case 'image':
      case 'input':
      case 'link':
        return !0
      default:
        return !1
    }
  }
  function PT() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var t = 0, n = 0, o = performance.getEntriesByType('resource'), i = 0;
        i < o.length;
        i++
      ) {
        var s = o[i],
          c = s.transferSize,
          b = s.initiatorType,
          C = s.duration
        if (c && C && i0(b)) {
          for (b = 0, C = s.responseEnd, i += 1; i < o.length; i++) {
            var U = o[i],
              J = U.startTime
            if (J > C) break
            var ce = U.transferSize,
              ge = U.initiatorType
            ce && i0(ge) && ((U = U.responseEnd), (b += ce * (U < C ? 1 : (C - J) / (U - J))))
          }
          if ((--i, (n += (8 * (c + b)) / (s.duration / 1e3)), t++, 10 < t)) break
        }
      }
      if (0 < t) return n / t / 1e6
    }
    return navigator.connection && ((t = navigator.connection.downlink), typeof t == 'number')
      ? t
      : 5
  }
  var zp = null,
    Ip = null
  function Wc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument
  }
  function a0(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1
      case 'http://www.w3.org/1998/Math/MathML':
        return 2
      default:
        return 0
    }
  }
  function s0(t, n) {
    if (t === 0)
      switch (n) {
        case 'svg':
          return 1
        case 'math':
          return 2
        default:
          return 0
      }
    return t === 1 && n === 'foreignObject' ? 0 : t
  }
  function Dp(t, n) {
    return (
      t === 'textarea' ||
      t === 'noscript' ||
      typeof n.children == 'string' ||
      typeof n.children == 'number' ||
      typeof n.children == 'bigint' ||
      (typeof n.dangerouslySetInnerHTML == 'object' &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    )
  }
  var jp = null
  function qT() {
    var t = window.event
    return t && t.type === 'popstate' ? (t === jp ? !1 : ((jp = t), !0)) : ((jp = null), !1)
  }
  var u0 = typeof setTimeout == 'function' ? setTimeout : void 0,
    GT = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    c0 = typeof Promise == 'function' ? Promise : void 0,
    YT =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof c0 < 'u'
          ? function (t) {
              return c0.resolve(null).then(t).catch($T)
            }
          : u0
  function $T(t) {
    setTimeout(function () {
      throw t
    })
  }
  function zl(t) {
    return t === 'head'
  }
  function f0(t, n) {
    var o = n,
      i = 0
    do {
      var s = o.nextSibling
      if ((t.removeChild(o), s && s.nodeType === 8))
        if (((o = s.data), o === '/$' || o === '/&')) {
          if (i === 0) {
            ;(t.removeChild(s), Va(n))
            return
          }
          i--
        } else if (o === '$' || o === '$?' || o === '$~' || o === '$!' || o === '&') i++
        else if (o === 'html') tu(t.ownerDocument.documentElement)
        else if (o === 'head') {
          ;((o = t.ownerDocument.head), tu(o))
          for (var c = o.firstChild; c; ) {
            var b = c.nextSibling,
              C = c.nodeName
            ;(c[ii] ||
              C === 'SCRIPT' ||
              C === 'STYLE' ||
              (C === 'LINK' && c.rel.toLowerCase() === 'stylesheet') ||
              o.removeChild(c),
              (c = b))
          }
        } else o === 'body' && tu(t.ownerDocument.body)
      o = s
    } while (o)
    Va(n)
  }
  function d0(t, n) {
    var o = t
    t = 0
    do {
      var i = o.nextSibling
      if (
        (o.nodeType === 1
          ? n
            ? ((o._stashedDisplay = o.style.display), (o.style.display = 'none'))
            : ((o.style.display = o._stashedDisplay || ''),
              o.getAttribute('style') === '' && o.removeAttribute('style'))
          : o.nodeType === 3 &&
            (n
              ? ((o._stashedText = o.nodeValue), (o.nodeValue = ''))
              : (o.nodeValue = o._stashedText || '')),
        i && i.nodeType === 8)
      )
        if (((o = i.data), o === '/$')) {
          if (t === 0) break
          t--
        } else (o !== '$' && o !== '$?' && o !== '$~' && o !== '$!') || t++
      o = i
    } while (o)
  }
  function kp(t) {
    var n = t.firstChild
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var o = n
      switch (((n = n.nextSibling), o.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          ;(kp(o), ai(o))
          continue
        case 'SCRIPT':
        case 'STYLE':
          continue
        case 'LINK':
          if (o.rel.toLowerCase() === 'stylesheet') continue
      }
      t.removeChild(o)
    }
  }
  function KT(t, n, o, i) {
    for (; t.nodeType === 1; ) {
      var s = o
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!i && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break
      } else if (i) {
        if (!t[ii])
          switch (n) {
            case 'meta':
              if (!t.hasAttribute('itemprop')) break
              return t
            case 'link':
              if (
                ((c = t.getAttribute('rel')),
                c === 'stylesheet' && t.hasAttribute('data-precedence'))
              )
                break
              if (
                c !== s.rel ||
                t.getAttribute('href') !== (s.href == null || s.href === '' ? null : s.href) ||
                t.getAttribute('crossorigin') !== (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute('title') !== (s.title == null ? null : s.title)
              )
                break
              return t
            case 'style':
              if (t.hasAttribute('data-precedence')) break
              return t
            case 'script':
              if (
                ((c = t.getAttribute('src')),
                (c !== (s.src == null ? null : s.src) ||
                  t.getAttribute('type') !== (s.type == null ? null : s.type) ||
                  t.getAttribute('crossorigin') !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  c &&
                  t.hasAttribute('async') &&
                  !t.hasAttribute('itemprop'))
              )
                break
              return t
            default:
              return t
          }
      } else if (n === 'input' && t.type === 'hidden') {
        var c = s.name == null ? null : '' + s.name
        if (s.type === 'hidden' && t.getAttribute('name') === c) return t
      } else return t
      if (((t = Lr(t.nextSibling)), t === null)) break
    }
    return null
  }
  function XT(t, n, o) {
    if (n === '') return null
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !o) ||
        ((t = Lr(t.nextSibling)), t === null)
      )
        return null
    return t
  }
  function m0(t, n) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !n) ||
        ((t = Lr(t.nextSibling)), t === null)
      )
        return null
    return t
  }
  function _p(t) {
    return t.data === '$?' || t.data === '$~'
  }
  function Up(t) {
    return t.data === '$!' || (t.data === '$?' && t.ownerDocument.readyState !== 'loading')
  }
  function QT(t, n) {
    var o = t.ownerDocument
    if (t.data === '$~') t._reactRetry = n
    else if (t.data !== '$?' || o.readyState !== 'loading') n()
    else {
      var i = function () {
        ;(n(), o.removeEventListener('DOMContentLoaded', i))
      }
      ;(o.addEventListener('DOMContentLoaded', i), (t._reactRetry = i))
    }
  }
  function Lr(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType
      if (n === 1 || n === 3) break
      if (n === 8) {
        if (
          ((n = t.data),
          n === '$' ||
            n === '$!' ||
            n === '$?' ||
            n === '$~' ||
            n === '&' ||
            n === 'F!' ||
            n === 'F')
        )
          break
        if (n === '/$' || n === '/&') return null
      }
    }
    return t
  }
  var Vp = null
  function p0(t) {
    t = t.nextSibling
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var o = t.data
        if (o === '/$' || o === '/&') {
          if (n === 0) return Lr(t.nextSibling)
          n--
        } else (o !== '$' && o !== '$!' && o !== '$?' && o !== '$~' && o !== '&') || n++
      }
      t = t.nextSibling
    }
    return null
  }
  function g0(t) {
    t = t.previousSibling
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var o = t.data
        if (o === '$' || o === '$!' || o === '$?' || o === '$~' || o === '&') {
          if (n === 0) return t
          n--
        } else (o !== '/$' && o !== '/&') || n++
      }
      t = t.previousSibling
    }
    return null
  }
  function h0(t, n, o) {
    switch (((n = Wc(o)), t)) {
      case 'html':
        if (((t = n.documentElement), !t)) throw Error(a(452))
        return t
      case 'head':
        if (((t = n.head), !t)) throw Error(a(453))
        return t
      case 'body':
        if (((t = n.body), !t)) throw Error(a(454))
        return t
      default:
        throw Error(a(451))
    }
  }
  function tu(t) {
    for (var n = t.attributes; n.length; ) t.removeAttributeNode(n[0])
    ai(t)
  }
  var Hr = new Map(),
    b0 = new Set()
  function ef(t) {
    return typeof t.getRootNode == 'function'
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument
  }
  var Zo = L.d
  L.d = { f: ZT, r: JT, D: WT, C: e2, L: t2, m: n2, X: o2, S: r2, M: l2 }
  function ZT() {
    var t = Zo.f(),
      n = Gc()
    return t || n
  }
  function JT(t) {
    var n = po(t)
    n !== null && n.tag === 5 && n.type === 'form' ? jy(n) : Zo.r(t)
  }
  var ka = typeof document > 'u' ? null : document
  function y0(t, n, o) {
    var i = ka
    if (i && typeof n == 'string' && n) {
      var s = Wn(n)
      ;((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof o == 'string' && (s += '[crossorigin="' + o + '"]'),
        b0.has(s) ||
          (b0.add(s),
          (t = { rel: t, crossOrigin: o, href: n }),
          i.querySelector(s) === null &&
            ((n = i.createElement('link')), Un(n, 'link', t), dn(n), i.head.appendChild(n))))
    }
  }
  function WT(t) {
    ;(Zo.D(t), y0('dns-prefetch', t, null))
  }
  function e2(t, n) {
    ;(Zo.C(t, n), y0('preconnect', t, n))
  }
  function t2(t, n, o) {
    Zo.L(t, n, o)
    var i = ka
    if (i && t && n) {
      var s = 'link[rel="preload"][as="' + Wn(n) + '"]'
      n === 'image' && o && o.imageSrcSet
        ? ((s += '[imagesrcset="' + Wn(o.imageSrcSet) + '"]'),
          typeof o.imageSizes == 'string' && (s += '[imagesizes="' + Wn(o.imageSizes) + '"]'))
        : (s += '[href="' + Wn(t) + '"]')
      var c = s
      switch (n) {
        case 'style':
          c = _a(t)
          break
        case 'script':
          c = Ua(t)
      }
      Hr.has(c) ||
        ((t = y(
          { rel: 'preload', href: n === 'image' && o && o.imageSrcSet ? void 0 : t, as: n },
          o
        )),
        Hr.set(c, t),
        i.querySelector(s) !== null ||
          (n === 'style' && i.querySelector(nu(c))) ||
          (n === 'script' && i.querySelector(ru(c))) ||
          ((n = i.createElement('link')), Un(n, 'link', t), dn(n), i.head.appendChild(n)))
    }
  }
  function n2(t, n) {
    Zo.m(t, n)
    var o = ka
    if (o && t) {
      var i = n && typeof n.as == 'string' ? n.as : 'script',
        s = 'link[rel="modulepreload"][as="' + Wn(i) + '"][href="' + Wn(t) + '"]',
        c = s
      switch (i) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          c = Ua(t)
      }
      if (
        !Hr.has(c) &&
        ((t = y({ rel: 'modulepreload', href: t }, n)), Hr.set(c, t), o.querySelector(s) === null)
      ) {
        switch (i) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (o.querySelector(ru(c))) return
        }
        ;((i = o.createElement('link')), Un(i, 'link', t), dn(i), o.head.appendChild(i))
      }
    }
  }
  function r2(t, n, o) {
    Zo.S(t, n, o)
    var i = ka
    if (i && t) {
      var s = Xr(i).hoistableStyles,
        c = _a(t)
      n = n || 'default'
      var b = s.get(c)
      if (!b) {
        var C = { loading: 0, preload: null }
        if ((b = i.querySelector(nu(c)))) C.loading = 5
        else {
          ;((t = y({ rel: 'stylesheet', href: t, 'data-precedence': n }, o)),
            (o = Hr.get(c)) && Lp(t, o))
          var U = (b = i.createElement('link'))
          ;(dn(U),
            Un(U, 'link', t),
            (U._p = new Promise(function (J, ce) {
              ;((U.onload = J), (U.onerror = ce))
            })),
            U.addEventListener('load', function () {
              C.loading |= 1
            }),
            U.addEventListener('error', function () {
              C.loading |= 2
            }),
            (C.loading |= 4),
            tf(b, n, i))
        }
        ;((b = { type: 'stylesheet', instance: b, count: 1, state: C }), s.set(c, b))
      }
    }
  }
  function o2(t, n) {
    Zo.X(t, n)
    var o = ka
    if (o && t) {
      var i = Xr(o).hoistableScripts,
        s = Ua(t),
        c = i.get(s)
      c ||
        ((c = o.querySelector(ru(s))),
        c ||
          ((t = y({ src: t, async: !0 }, n)),
          (n = Hr.get(s)) && Hp(t, n),
          (c = o.createElement('script')),
          dn(c),
          Un(c, 'link', t),
          o.head.appendChild(c)),
        (c = { type: 'script', instance: c, count: 1, state: null }),
        i.set(s, c))
    }
  }
  function l2(t, n) {
    Zo.M(t, n)
    var o = ka
    if (o && t) {
      var i = Xr(o).hoistableScripts,
        s = Ua(t),
        c = i.get(s)
      c ||
        ((c = o.querySelector(ru(s))),
        c ||
          ((t = y({ src: t, async: !0, type: 'module' }, n)),
          (n = Hr.get(s)) && Hp(t, n),
          (c = o.createElement('script')),
          dn(c),
          Un(c, 'link', t),
          o.head.appendChild(c)),
        (c = { type: 'script', instance: c, count: 1, state: null }),
        i.set(s, c))
    }
  }
  function v0(t, n, o, i) {
    var s = (s = re.current) ? ef(s) : null
    if (!s) throw Error(a(446))
    switch (t) {
      case 'meta':
      case 'title':
        return null
      case 'style':
        return typeof o.precedence == 'string' && typeof o.href == 'string'
          ? ((n = _a(o.href)),
            (o = Xr(s).hoistableStyles),
            (i = o.get(n)),
            i || ((i = { type: 'style', instance: null, count: 0, state: null }), o.set(n, i)),
            i)
          : { type: 'void', instance: null, count: 0, state: null }
      case 'link':
        if (
          o.rel === 'stylesheet' &&
          typeof o.href == 'string' &&
          typeof o.precedence == 'string'
        ) {
          t = _a(o.href)
          var c = Xr(s).hoistableStyles,
            b = c.get(t)
          if (
            (b ||
              ((s = s.ownerDocument || s),
              (b = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(t, b),
              (c = s.querySelector(nu(t))) && !c._p && ((b.instance = c), (b.state.loading = 5)),
              Hr.has(t) ||
                ((o = {
                  rel: 'preload',
                  as: 'style',
                  href: o.href,
                  crossOrigin: o.crossOrigin,
                  integrity: o.integrity,
                  media: o.media,
                  hrefLang: o.hrefLang,
                  referrerPolicy: o.referrerPolicy,
                }),
                Hr.set(t, o),
                c || i2(s, t, o, b.state))),
            n && i === null)
          )
            throw Error(a(528, ''))
          return b
        }
        if (n && i !== null) throw Error(a(529, ''))
        return null
      case 'script':
        return (
          (n = o.async),
          (o = o.src),
          typeof o == 'string' && n && typeof n != 'function' && typeof n != 'symbol'
            ? ((n = Ua(o)),
              (o = Xr(s).hoistableScripts),
              (i = o.get(n)),
              i || ((i = { type: 'script', instance: null, count: 0, state: null }), o.set(n, i)),
              i)
            : { type: 'void', instance: null, count: 0, state: null }
        )
      default:
        throw Error(a(444, t))
    }
  }
  function _a(t) {
    return 'href="' + Wn(t) + '"'
  }
  function nu(t) {
    return 'link[rel="stylesheet"][' + t + ']'
  }
  function x0(t) {
    return y({}, t, { 'data-precedence': t.precedence, precedence: null })
  }
  function i2(t, n, o, i) {
    t.querySelector('link[rel="preload"][as="style"][' + n + ']')
      ? (i.loading = 1)
      : ((n = t.createElement('link')),
        (i.preload = n),
        n.addEventListener('load', function () {
          return (i.loading |= 1)
        }),
        n.addEventListener('error', function () {
          return (i.loading |= 2)
        }),
        Un(n, 'link', o),
        dn(n),
        t.head.appendChild(n))
  }
  function Ua(t) {
    return '[src="' + Wn(t) + '"]'
  }
  function ru(t) {
    return 'script[async]' + t
  }
  function S0(t, n, o) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case 'style':
          var i = t.querySelector('style[data-href~="' + Wn(o.href) + '"]')
          if (i) return ((n.instance = i), dn(i), i)
          var s = y({}, o, {
            'data-href': o.href,
            'data-precedence': o.precedence,
            href: null,
            precedence: null,
          })
          return (
            (i = (t.ownerDocument || t).createElement('style')),
            dn(i),
            Un(i, 'style', s),
            tf(i, o.precedence, t),
            (n.instance = i)
          )
        case 'stylesheet':
          s = _a(o.href)
          var c = t.querySelector(nu(s))
          if (c) return ((n.state.loading |= 4), (n.instance = c), dn(c), c)
          ;((i = x0(o)),
            (s = Hr.get(s)) && Lp(i, s),
            (c = (t.ownerDocument || t).createElement('link')),
            dn(c))
          var b = c
          return (
            (b._p = new Promise(function (C, U) {
              ;((b.onload = C), (b.onerror = U))
            })),
            Un(c, 'link', i),
            (n.state.loading |= 4),
            tf(c, o.precedence, t),
            (n.instance = c)
          )
        case 'script':
          return (
            (c = Ua(o.src)),
            (s = t.querySelector(ru(c)))
              ? ((n.instance = s), dn(s), s)
              : ((i = o),
                (s = Hr.get(c)) && ((i = y({}, o)), Hp(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement('script')),
                dn(s),
                Un(s, 'link', i),
                t.head.appendChild(s),
                (n.instance = s))
          )
        case 'void':
          return null
        default:
          throw Error(a(443, n.type))
      }
    else
      n.type === 'stylesheet' &&
        (n.state.loading & 4) === 0 &&
        ((i = n.instance), (n.state.loading |= 4), tf(i, o.precedence, t))
    return n.instance
  }
  function tf(t, n, o) {
    for (
      var i = o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        s = i.length ? i[i.length - 1] : null,
        c = s,
        b = 0;
      b < i.length;
      b++
    ) {
      var C = i[b]
      if (C.dataset.precedence === n) c = C
      else if (c !== s) break
    }
    c
      ? c.parentNode.insertBefore(t, c.nextSibling)
      : ((n = o.nodeType === 9 ? o.head : o), n.insertBefore(t, n.firstChild))
  }
  function Lp(t, n) {
    ;(t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title))
  }
  function Hp(t, n) {
    ;(t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity))
  }
  var nf = null
  function R0(t, n, o) {
    if (nf === null) {
      var i = new Map(),
        s = (nf = new Map())
      s.set(o, i)
    } else ((s = nf), (i = s.get(o)), i || ((i = new Map()), s.set(o, i)))
    if (i.has(t)) return i
    for (i.set(t, null), o = o.getElementsByTagName(t), s = 0; s < o.length; s++) {
      var c = o[s]
      if (
        !(c[ii] || c[cn] || (t === 'link' && c.getAttribute('rel') === 'stylesheet')) &&
        c.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var b = c.getAttribute(n) || ''
        b = t + b
        var C = i.get(b)
        C ? C.push(c) : i.set(b, [c])
      }
    }
    return i
  }
  function E0(t, n, o) {
    ;((t = t.ownerDocument || t),
      t.head.insertBefore(o, n === 'title' ? t.querySelector('head > title') : null))
  }
  function a2(t, n, o) {
    if (o === 1 || n.itemProp != null) return !1
    switch (t) {
      case 'meta':
      case 'title':
        return !0
      case 'style':
        if (typeof n.precedence != 'string' || typeof n.href != 'string' || n.href === '') break
        return !0
      case 'link':
        if (
          typeof n.rel != 'string' ||
          typeof n.href != 'string' ||
          n.href === '' ||
          n.onLoad ||
          n.onError
        )
          break
        return n.rel === 'stylesheet'
          ? ((t = n.disabled), typeof n.precedence == 'string' && t == null)
          : !0
      case 'script':
        if (
          n.async &&
          typeof n.async != 'function' &&
          typeof n.async != 'symbol' &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == 'string'
        )
          return !0
    }
    return !1
  }
  function T0(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0)
  }
  function s2(t, n, o, i) {
    if (
      o.type === 'stylesheet' &&
      (typeof i.media != 'string' || matchMedia(i.media).matches !== !1) &&
      (o.state.loading & 4) === 0
    ) {
      if (o.instance === null) {
        var s = _a(i.href),
          c = n.querySelector(nu(s))
        if (c) {
          ;((n = c._p),
            n !== null &&
              typeof n == 'object' &&
              typeof n.then == 'function' &&
              (t.count++, (t = rf.bind(t)), n.then(t, t)),
            (o.state.loading |= 4),
            (o.instance = c),
            dn(c))
          return
        }
        ;((c = n.ownerDocument || n),
          (i = x0(i)),
          (s = Hr.get(s)) && Lp(i, s),
          (c = c.createElement('link')),
          dn(c))
        var b = c
        ;((b._p = new Promise(function (C, U) {
          ;((b.onload = C), (b.onerror = U))
        })),
          Un(c, 'link', i),
          (o.instance = c))
      }
      ;(t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(o, n),
        (n = o.state.preload) &&
          (o.state.loading & 3) === 0 &&
          (t.count++,
          (o = rf.bind(t)),
          n.addEventListener('load', o),
          n.addEventListener('error', o)))
    }
  }
  var Bp = 0
  function u2(t, n) {
    return (
      t.stylesheets && t.count === 0 && lf(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (o) {
            var i = setTimeout(function () {
              if ((t.stylesheets && lf(t, t.stylesheets), t.unsuspend)) {
                var c = t.unsuspend
                ;((t.unsuspend = null), c())
              }
            }, 6e4 + n)
            0 < t.imgBytes && Bp === 0 && (Bp = 62500 * PT())
            var s = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 && (t.stylesheets && lf(t, t.stylesheets), t.unsuspend))
                ) {
                  var c = t.unsuspend
                  ;((t.unsuspend = null), c())
                }
              },
              (t.imgBytes > Bp ? 50 : 800) + n
            )
            return (
              (t.unsuspend = o),
              function () {
                ;((t.unsuspend = null), clearTimeout(i), clearTimeout(s))
              }
            )
          }
        : null
    )
  }
  function rf() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) lf(this, this.stylesheets)
      else if (this.unsuspend) {
        var t = this.unsuspend
        ;((this.unsuspend = null), t())
      }
    }
  }
  var of = null
  function lf(t, n) {
    ;((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (of = new Map()), n.forEach(c2, t), (of = null), rf.call(t)))
  }
  function c2(t, n) {
    if (!(n.state.loading & 4)) {
      var o = of.get(t)
      if (o) var i = o.get(null)
      else {
        ;((o = new Map()), of.set(t, o))
        for (
          var s = t.querySelectorAll('link[data-precedence],style[data-precedence]'), c = 0;
          c < s.length;
          c++
        ) {
          var b = s[c]
          ;(b.nodeName === 'LINK' || b.getAttribute('media') !== 'not all') &&
            (o.set(b.dataset.precedence, b), (i = b))
        }
        i && o.set(null, i)
      }
      ;((s = n.instance),
        (b = s.getAttribute('data-precedence')),
        (c = o.get(b) || i),
        c === i && o.set(null, s),
        o.set(b, s),
        this.count++,
        (i = rf.bind(this)),
        s.addEventListener('load', i),
        s.addEventListener('error', i),
        c
          ? c.parentNode.insertBefore(s, c.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(s, t.firstChild)),
        (n.state.loading |= 4))
    }
  }
  var ou = {
    $$typeof: I,
    Provider: null,
    Consumer: null,
    _currentValue: D,
    _currentValue2: D,
    _threadCount: 0,
  }
  function f2(t, n, o, i, s, c, b, C, U) {
    ;((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Et(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Et(0)),
      (this.hiddenUpdates = Et(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = c),
      (this.onRecoverableError = b),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = U),
      (this.incompleteTransitions = new Map()))
  }
  function C0(t, n, o, i, s, c, b, C, U, J, ce, ge) {
    return (
      (t = new f2(t, n, o, b, U, J, ce, ge, C)),
      (n = 1),
      c === !0 && (n |= 24),
      (c = yr(3, null, null, n)),
      (t.current = c),
      (c.stateNode = t),
      (n = xm()),
      n.refCount++,
      (t.pooledCache = n),
      n.refCount++,
      (c.memoizedState = { element: i, isDehydrated: o, cache: n }),
      Tm(c),
      t
    )
  }
  function w0(t) {
    return t ? ((t = pa), t) : pa
  }
  function M0(t, n, o, i, s, c) {
    ;((s = w0(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = xl(n)),
      (i.payload = { element: o }),
      (c = c === void 0 ? null : c),
      c !== null && (i.callback = c),
      (o = Sl(t, i, n)),
      o !== null && (lr(o, t, n), _s(o, t, n)))
  }
  function O0(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var o = t.retryLane
      t.retryLane = o !== 0 && o < n ? o : n
    }
  }
  function Fp(t, n) {
    ;(O0(t, n), (t = t.alternate) && O0(t, n))
  }
  function A0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = di(t, 67108864)
      ;(n !== null && lr(n, t, 67108864), Fp(t, 67108864))
    }
  }
  function N0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = Er()
      n = dr(n)
      var o = di(t, n)
      ;(o !== null && lr(o, t, n), Fp(t, n))
    }
  }
  var af = !0
  function d2(t, n, o, i) {
    var s = z.T
    z.T = null
    var c = L.p
    try {
      ;((L.p = 2), Pp(t, n, o, i))
    } finally {
      ;((L.p = c), (z.T = s))
    }
  }
  function m2(t, n, o, i) {
    var s = z.T
    z.T = null
    var c = L.p
    try {
      ;((L.p = 8), Pp(t, n, o, i))
    } finally {
      ;((L.p = c), (z.T = s))
    }
  }
  function Pp(t, n, o, i) {
    if (af) {
      var s = qp(i)
      if (s === null) (Ap(t, n, i, sf, o), I0(t, i))
      else if (g2(s, t, n, o, i)) i.stopPropagation()
      else if ((I0(t, i), n & 4 && -1 < p2.indexOf(t))) {
        for (; s !== null; ) {
          var c = po(s)
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var b = ft(c.pendingLanes)
                  if (b !== 0) {
                    var C = c
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; b; ) {
                      var U = 1 << (31 - it(b))
                      ;((C.entanglements[1] |= U), (b &= ~U))
                    }
                    ;(yo(c), (Mt & 6) === 0 && ((Pc = Me() + 500), Js(0)))
                  }
                }
                break
              case 31:
              case 13:
                ;((C = di(c, 2)), C !== null && lr(C, c, 2), Gc(), Fp(c, 2))
            }
          if (((c = qp(i)), c === null && Ap(t, n, i, sf, o), c === s)) break
          s = c
        }
        s !== null && i.stopPropagation()
      } else Ap(t, n, i, null, o)
    }
  }
  function qp(t) {
    return ((t = Yd(t)), Gp(t))
  }
  var sf = null
  function Gp(t) {
    if (((sf = null), (t = zo(t)), t !== null)) {
      var n = f(t)
      if (n === null) t = null
      else {
        var o = n.tag
        if (o === 13) {
          if (((t = d(n)), t !== null)) return t
          t = null
        } else if (o === 31) {
          if (((t = m(n)), t !== null)) return t
          t = null
        } else if (o === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null
          t = null
        } else n !== t && (t = null)
      }
    }
    return ((sf = t), null)
  }
  function z0(t) {
    switch (t) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8
      case 'message':
        switch (we()) {
          case Xe:
            return 2
          case We:
            return 8
          case Be:
          case dt:
            return 32
          case Rt:
            return 268435456
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var Yp = !1,
    Il = null,
    Dl = null,
    jl = null,
    lu = new Map(),
    iu = new Map(),
    kl = [],
    p2 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      )
  function I0(t, n) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        Il = null
        break
      case 'dragenter':
      case 'dragleave':
        Dl = null
        break
      case 'mouseover':
      case 'mouseout':
        jl = null
        break
      case 'pointerover':
      case 'pointerout':
        lu.delete(n.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        iu.delete(n.pointerId)
    }
  }
  function au(t, n, o, i, s, c) {
    return t === null || t.nativeEvent !== c
      ? ((t = {
          blockedOn: n,
          domEventName: o,
          eventSystemFlags: i,
          nativeEvent: c,
          targetContainers: [s],
        }),
        n !== null && ((n = po(n)), n !== null && A0(n)),
        t)
      : ((t.eventSystemFlags |= i),
        (n = t.targetContainers),
        s !== null && n.indexOf(s) === -1 && n.push(s),
        t)
  }
  function g2(t, n, o, i, s) {
    switch (n) {
      case 'focusin':
        return ((Il = au(Il, t, n, o, i, s)), !0)
      case 'dragenter':
        return ((Dl = au(Dl, t, n, o, i, s)), !0)
      case 'mouseover':
        return ((jl = au(jl, t, n, o, i, s)), !0)
      case 'pointerover':
        var c = s.pointerId
        return (lu.set(c, au(lu.get(c) || null, t, n, o, i, s)), !0)
      case 'gotpointercapture':
        return ((c = s.pointerId), iu.set(c, au(iu.get(c) || null, t, n, o, i, s)), !0)
    }
    return !1
  }
  function D0(t) {
    var n = zo(t.target)
    if (n !== null) {
      var o = f(n)
      if (o !== null) {
        if (((n = o.tag), n === 13)) {
          if (((n = d(o)), n !== null)) {
            ;((t.blockedOn = n),
              oa(t.priority, function () {
                N0(o)
              }))
            return
          }
        } else if (n === 31) {
          if (((n = m(o)), n !== null)) {
            ;((t.blockedOn = n),
              oa(t.priority, function () {
                N0(o)
              }))
            return
          }
        } else if (n === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null
          return
        }
      }
    }
    t.blockedOn = null
  }
  function uf(t) {
    if (t.blockedOn !== null) return !1
    for (var n = t.targetContainers; 0 < n.length; ) {
      var o = qp(t.nativeEvent)
      if (o === null) {
        o = t.nativeEvent
        var i = new o.constructor(o.type, o)
        ;((oc = i), o.target.dispatchEvent(i), (oc = null))
      } else return ((n = po(o)), n !== null && A0(n), (t.blockedOn = o), !1)
      n.shift()
    }
    return !0
  }
  function j0(t, n, o) {
    uf(t) && o.delete(n)
  }
  function h2() {
    ;((Yp = !1),
      Il !== null && uf(Il) && (Il = null),
      Dl !== null && uf(Dl) && (Dl = null),
      jl !== null && uf(jl) && (jl = null),
      lu.forEach(j0),
      iu.forEach(j0))
  }
  function cf(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      Yp || ((Yp = !0), e.unstable_scheduleCallback(e.unstable_NormalPriority, h2)))
  }
  var ff = null
  function k0(t) {
    ff !== t &&
      ((ff = t),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        ff === t && (ff = null)
        for (var n = 0; n < t.length; n += 3) {
          var o = t[n],
            i = t[n + 1],
            s = t[n + 2]
          if (typeof i != 'function') {
            if (Gp(i || o) === null) continue
            break
          }
          var c = po(o)
          c !== null &&
            (t.splice(n, 3),
            (n -= 3),
            qm(c, { pending: !0, data: s, method: o.method, action: i }, i, s))
        }
      }))
  }
  function Va(t) {
    function n(U) {
      return cf(U, t)
    }
    ;(Il !== null && cf(Il, t),
      Dl !== null && cf(Dl, t),
      jl !== null && cf(jl, t),
      lu.forEach(n),
      iu.forEach(n))
    for (var o = 0; o < kl.length; o++) {
      var i = kl[o]
      i.blockedOn === t && (i.blockedOn = null)
    }
    for (; 0 < kl.length && ((o = kl[0]), o.blockedOn === null); )
      (D0(o), o.blockedOn === null && kl.shift())
    if (((o = (t.ownerDocument || t).$$reactFormReplay), o != null))
      for (i = 0; i < o.length; i += 3) {
        var s = o[i],
          c = o[i + 1],
          b = s[fn] || null
        if (typeof c == 'function') b || k0(o)
        else if (b) {
          var C = null
          if (c && c.hasAttribute('formAction')) {
            if (((s = c), (b = c[fn] || null))) C = b.formAction
            else if (Gp(s) !== null) continue
          } else C = b.action
          ;(typeof C == 'function' ? (o[i + 1] = C) : (o.splice(i, 3), (i -= 3)), k0(o))
        }
      }
  }
  function _0() {
    function t(c) {
      c.canIntercept &&
        c.info === 'react-transition' &&
        c.intercept({
          handler: function () {
            return new Promise(function (b) {
              return (s = b)
            })
          },
          focusReset: 'manual',
          scroll: 'manual',
        })
    }
    function n() {
      ;(s !== null && (s(), (s = null)), i || setTimeout(o, 20))
    }
    function o() {
      if (!i && !navigation.transition) {
        var c = navigation.currentEntry
        c &&
          c.url != null &&
          navigation.navigate(c.url, {
            state: c.getState(),
            info: 'react-transition',
            history: 'replace',
          })
      }
    }
    if (typeof navigation == 'object') {
      var i = !1,
        s = null
      return (
        navigation.addEventListener('navigate', t),
        navigation.addEventListener('navigatesuccess', n),
        navigation.addEventListener('navigateerror', n),
        setTimeout(o, 100),
        function () {
          ;((i = !0),
            navigation.removeEventListener('navigate', t),
            navigation.removeEventListener('navigatesuccess', n),
            navigation.removeEventListener('navigateerror', n),
            s !== null && (s(), (s = null)))
        }
      )
    }
  }
  function $p(t) {
    this._internalRoot = t
  }
  ;((df.prototype.render = $p.prototype.render =
    function (t) {
      var n = this._internalRoot
      if (n === null) throw Error(a(409))
      var o = n.current,
        i = Er()
      M0(o, i, t, n, null, null)
    }),
    (df.prototype.unmount = $p.prototype.unmount =
      function () {
        var t = this._internalRoot
        if (t !== null) {
          this._internalRoot = null
          var n = t.containerInfo
          ;(M0(t.current, 2, null, t, null, null), Gc(), (n[mo] = null))
        }
      }))
  function df(t) {
    this._internalRoot = t
  }
  df.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = Ao()
      t = { blockedOn: null, target: t, priority: n }
      for (var o = 0; o < kl.length && n !== 0 && n < kl[o].priority; o++);
      ;(kl.splice(o, 0, t), o === 0 && D0(t))
    }
  }
  var U0 = r.version
  if (U0 !== '19.2.3') throw Error(a(527, U0, '19.2.3'))
  L.findDOMNode = function (t) {
    var n = t._reactInternals
    if (n === void 0)
      throw typeof t.render == 'function'
        ? Error(a(188))
        : ((t = Object.keys(t).join(',')), Error(a(268, t)))
    return ((t = g(n)), (t = t !== null ? v(t) : null), (t = t === null ? null : t.stateNode), t)
  }
  var b2 = {
    bundleType: 0,
    version: '19.2.3',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: z,
    reconcilerVersion: '19.2.3',
  }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var mf = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!mf.isDisabled && mf.supportsFiber)
      try {
        ;((rt = mf.inject(b2)), (ye = mf))
      } catch {}
  }
  return (
    (uu.createRoot = function (t, n) {
      if (!u(t)) throw Error(a(299))
      var o = !1,
        i = '',
        s = qy,
        c = Gy,
        b = Yy
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (o = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (c = n.onCaughtError),
          n.onRecoverableError !== void 0 && (b = n.onRecoverableError)),
        (n = C0(t, 1, !1, null, null, o, i, null, s, c, b, _0)),
        (t[mo] = n.current),
        Op(t),
        new $p(n)
      )
    }),
    (uu.hydrateRoot = function (t, n, o) {
      if (!u(t)) throw Error(a(299))
      var i = !1,
        s = '',
        c = qy,
        b = Gy,
        C = Yy,
        U = null
      return (
        o != null &&
          (o.unstable_strictMode === !0 && (i = !0),
          o.identifierPrefix !== void 0 && (s = o.identifierPrefix),
          o.onUncaughtError !== void 0 && (c = o.onUncaughtError),
          o.onCaughtError !== void 0 && (b = o.onCaughtError),
          o.onRecoverableError !== void 0 && (C = o.onRecoverableError),
          o.formState !== void 0 && (U = o.formState)),
        (n = C0(t, 1, !0, n, o ?? null, i, s, U, c, b, C, _0)),
        (n.context = w0(null)),
        (o = n.current),
        (i = Er()),
        (i = dr(i)),
        (s = xl(i)),
        (s.callback = null),
        Sl(o, s, i),
        (o = i),
        (n.current.lanes = o),
        Xt(n, o),
        yo(n),
        (t[mo] = n.current),
        Op(t),
        new df(n)
      )
    }),
    (uu.version = '19.2.3'),
    uu
  )
}
var $0
function A2() {
  if ($0) return Qp.exports
  $0 = 1
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
      } catch (r) {
        console.error(r)
      }
  }
  return (e(), (Qp.exports = O2()), Qp.exports)
}
var N2 = A2()
function z2(e) {
  return Sn(e) && !cr(e) && !Lu(e) && Symbol.asyncIterator in e
}
function cr(e) {
  return Array.isArray(e)
}
function o1(e) {
  return typeof e == 'bigint'
}
function Vu(e) {
  return typeof e == 'boolean'
}
function Bg(e) {
  return e instanceof globalThis.Date
}
function I2(e) {
  return typeof e == 'function'
}
function D2(e) {
  return Sn(e) && !cr(e) && !Lu(e) && Symbol.iterator in e
}
function j2(e) {
  return e === null
}
function Eo(e) {
  return typeof e == 'number'
}
function Sn(e) {
  return typeof e == 'object' && e !== null
}
function l1(e) {
  return e instanceof globalThis.RegExp
}
function un(e) {
  return typeof e == 'string'
}
function k2(e) {
  return typeof e == 'symbol'
}
function Lu(e) {
  return e instanceof globalThis.Uint8Array
}
function yn(e) {
  return e === void 0
}
function _2(e) {
  return e.map((r) => kf(r))
}
function U2(e) {
  return new Date(e.getTime())
}
function V2(e) {
  return new Uint8Array(e)
}
function L2(e) {
  return new RegExp(e.source, e.flags)
}
function H2(e) {
  const r = {}
  for (const l of Object.getOwnPropertyNames(e)) r[l] = kf(e[l])
  for (const l of Object.getOwnPropertySymbols(e)) r[l] = kf(e[l])
  return r
}
function kf(e) {
  return cr(e) ? _2(e) : Bg(e) ? U2(e) : Lu(e) ? V2(e) : l1(e) ? L2(e) : Sn(e) ? H2(e) : e
}
function Mr(e) {
  return kf(e)
}
function Fg(e, r) {
  return Mr(r === void 0 ? e : { ...r, ...e })
}
function B2(e) {
  return e !== null && typeof e == 'object'
}
function F2(e) {
  return globalThis.Array.isArray(e) && !globalThis.ArrayBuffer.isView(e)
}
function P2(e) {
  return e === void 0
}
function q2(e) {
  return typeof e == 'number'
}
var vg
;(function (e) {
  ;((e.InstanceMode = 'default'),
    (e.ExactOptionalPropertyTypes = !1),
    (e.AllowArrayObject = !1),
    (e.AllowNaN = !1),
    (e.AllowNullVoid = !1))
  function r(d, m) {
    return e.ExactOptionalPropertyTypes ? m in d : d[m] !== void 0
  }
  e.IsExactOptionalProperty = r
  function l(d) {
    const m = B2(d)
    return e.AllowArrayObject ? m : m && !F2(d)
  }
  e.IsObjectLike = l
  function a(d) {
    return l(d) && !(d instanceof Date) && !(d instanceof Uint8Array)
  }
  e.IsRecordLike = a
  function u(d) {
    return e.AllowNaN ? q2(d) : Number.isFinite(d)
  }
  e.IsNumberLike = u
  function f(d) {
    const m = P2(d)
    return e.AllowNullVoid ? m || d === null : m
  }
  e.IsVoidLike = f
})(vg || (vg = {}))
function G2(e) {
  return globalThis.Object.freeze(e).map((r) => _f(r))
}
function Y2(e) {
  const r = {}
  for (const l of Object.getOwnPropertyNames(e)) r[l] = _f(e[l])
  for (const l of Object.getOwnPropertySymbols(e)) r[l] = _f(e[l])
  return globalThis.Object.freeze(r)
}
function _f(e) {
  return cr(e) ? G2(e) : Bg(e) ? e : Lu(e) ? e : l1(e) ? e : Sn(e) ? Y2(e) : e
}
function Ae(e, r) {
  const l = r !== void 0 ? { ...r, ...e } : e
  switch (vg.InstanceMode) {
    case 'freeze':
      return _f(l)
    case 'clone':
      return Mr(l)
    default:
      return l
  }
}
class Fi extends Error {
  constructor(r) {
    super(r)
  }
}
const Fr = Symbol.for('TypeBox.Transform'),
  Hu = Symbol.for('TypeBox.Readonly'),
  ll = Symbol.for('TypeBox.Optional'),
  Jf = Symbol.for('TypeBox.Hint'),
  $e = Symbol.for('TypeBox.Kind')
function Pg(e) {
  return Sn(e) && e[Hu] === 'Readonly'
}
function $l(e) {
  return Sn(e) && e[ll] === 'Optional'
}
function i1(e) {
  return bt(e, 'Any')
}
function a1(e) {
  return bt(e, 'Argument')
}
function ts(e) {
  return bt(e, 'Array')
}
function Wf(e) {
  return bt(e, 'AsyncIterator')
}
function ed(e) {
  return bt(e, 'BigInt')
}
function Bu(e) {
  return bt(e, 'Boolean')
}
function ns(e) {
  return bt(e, 'Computed')
}
function rs(e) {
  return bt(e, 'Constructor')
}
function $2(e) {
  return bt(e, 'Date')
}
function os(e) {
  return bt(e, 'Function')
}
function ls(e) {
  return bt(e, 'Integer')
}
function $r(e) {
  return bt(e, 'Intersect')
}
function td(e) {
  return bt(e, 'Iterator')
}
function bt(e, r) {
  return Sn(e) && $e in e && e[$e] === r
}
function s1(e) {
  return Vu(e) || Eo(e) || un(e)
}
function Pi(e) {
  return bt(e, 'Literal')
}
function qi(e) {
  return bt(e, 'MappedKey')
}
function zr(e) {
  return bt(e, 'MappedResult')
}
function Fu(e) {
  return bt(e, 'Never')
}
function K2(e) {
  return bt(e, 'Not')
}
function qg(e) {
  return bt(e, 'Null')
}
function is(e) {
  return bt(e, 'Number')
}
function uo(e) {
  return bt(e, 'Object')
}
function nd(e) {
  return bt(e, 'Promise')
}
function rd(e) {
  return bt(e, 'Record')
}
function sr(e) {
  return bt(e, 'Ref')
}
function u1(e) {
  return bt(e, 'RegExp')
}
function Pu(e) {
  return bt(e, 'String')
}
function Gg(e) {
  return bt(e, 'Symbol')
}
function Gi(e) {
  return bt(e, 'TemplateLiteral')
}
function X2(e) {
  return bt(e, 'This')
}
function od(e) {
  return Sn(e) && Fr in e
}
function Yi(e) {
  return bt(e, 'Tuple')
}
function Yg(e) {
  return bt(e, 'Undefined')
}
function Dn(e) {
  return bt(e, 'Union')
}
function Q2(e) {
  return bt(e, 'Uint8Array')
}
function Z2(e) {
  return bt(e, 'Unknown')
}
function J2(e) {
  return bt(e, 'Unsafe')
}
function W2(e) {
  return bt(e, 'Void')
}
function eC(e) {
  return Sn(e) && $e in e && un(e[$e])
}
function Hl(e) {
  return (
    i1(e) ||
    a1(e) ||
    ts(e) ||
    Bu(e) ||
    ed(e) ||
    Wf(e) ||
    ns(e) ||
    rs(e) ||
    $2(e) ||
    os(e) ||
    ls(e) ||
    $r(e) ||
    td(e) ||
    Pi(e) ||
    qi(e) ||
    zr(e) ||
    Fu(e) ||
    K2(e) ||
    qg(e) ||
    is(e) ||
    uo(e) ||
    nd(e) ||
    rd(e) ||
    sr(e) ||
    u1(e) ||
    Pu(e) ||
    Gg(e) ||
    Gi(e) ||
    X2(e) ||
    Yi(e) ||
    Yg(e) ||
    Dn(e) ||
    Q2(e) ||
    Z2(e) ||
    J2(e) ||
    W2(e) ||
    eC(e)
  )
}
const tC = [
  'Argument',
  'Any',
  'Array',
  'AsyncIterator',
  'BigInt',
  'Boolean',
  'Computed',
  'Constructor',
  'Date',
  'Enum',
  'Function',
  'Integer',
  'Intersect',
  'Iterator',
  'Literal',
  'MappedKey',
  'MappedResult',
  'Not',
  'Null',
  'Number',
  'Object',
  'Promise',
  'Record',
  'Ref',
  'RegExp',
  'String',
  'Symbol',
  'TemplateLiteral',
  'This',
  'Tuple',
  'Undefined',
  'Union',
  'Uint8Array',
  'Unknown',
  'Void',
]
function c1(e) {
  try {
    return (new RegExp(e), !0)
  } catch {
    return !1
  }
}
function $g(e) {
  if (!un(e)) return !1
  for (let r = 0; r < e.length; r++) {
    const l = e.charCodeAt(r)
    if ((l >= 7 && l <= 13) || l === 27 || l === 127) return !1
  }
  return !0
}
function f1(e) {
  return Kg(e) || Hn(e)
}
function cu(e) {
  return yn(e) || o1(e)
}
function Lt(e) {
  return yn(e) || Eo(e)
}
function Kg(e) {
  return yn(e) || Vu(e)
}
function It(e) {
  return yn(e) || un(e)
}
function nC(e) {
  return yn(e) || (un(e) && $g(e) && c1(e))
}
function rC(e) {
  return yn(e) || (un(e) && $g(e))
}
function d1(e) {
  return yn(e) || Hn(e)
}
function Uf(e) {
  return Sn(e) && e[ll] === 'Optional'
}
function lo(e) {
  return yt(e, 'Any') && It(e.$id)
}
function oC(e) {
  return yt(e, 'Argument') && Eo(e.index)
}
function $i(e) {
  return (
    yt(e, 'Array') &&
    e.type === 'array' &&
    It(e.$id) &&
    Hn(e.items) &&
    Lt(e.minItems) &&
    Lt(e.maxItems) &&
    Kg(e.uniqueItems) &&
    d1(e.contains) &&
    Lt(e.minContains) &&
    Lt(e.maxContains)
  )
}
function Xg(e) {
  return yt(e, 'AsyncIterator') && e.type === 'AsyncIterator' && It(e.$id) && Hn(e.items)
}
function ld(e) {
  return (
    yt(e, 'BigInt') &&
    e.type === 'bigint' &&
    It(e.$id) &&
    cu(e.exclusiveMaximum) &&
    cu(e.exclusiveMinimum) &&
    cu(e.maximum) &&
    cu(e.minimum) &&
    cu(e.multipleOf)
  )
}
function Ki(e) {
  return yt(e, 'Boolean') && e.type === 'boolean' && It(e.$id)
}
function lC(e) {
  return yt(e, 'Computed') && un(e.target) && cr(e.parameters) && e.parameters.every((r) => Hn(r))
}
function id(e) {
  return (
    yt(e, 'Constructor') &&
    e.type === 'Constructor' &&
    It(e.$id) &&
    cr(e.parameters) &&
    e.parameters.every((r) => Hn(r)) &&
    Hn(e.returns)
  )
}
function ad(e) {
  return (
    yt(e, 'Date') &&
    e.type === 'Date' &&
    It(e.$id) &&
    Lt(e.exclusiveMaximumTimestamp) &&
    Lt(e.exclusiveMinimumTimestamp) &&
    Lt(e.maximumTimestamp) &&
    Lt(e.minimumTimestamp) &&
    Lt(e.multipleOfTimestamp)
  )
}
function sd(e) {
  return (
    yt(e, 'Function') &&
    e.type === 'Function' &&
    It(e.$id) &&
    cr(e.parameters) &&
    e.parameters.every((r) => Hn(r)) &&
    Hn(e.returns)
  )
}
function il(e) {
  return (
    yt(e, 'Integer') &&
    e.type === 'integer' &&
    It(e.$id) &&
    Lt(e.exclusiveMaximum) &&
    Lt(e.exclusiveMinimum) &&
    Lt(e.maximum) &&
    Lt(e.minimum) &&
    Lt(e.multipleOf)
  )
}
function m1(e) {
  return Sn(e) && Object.entries(e).every(([r, l]) => $g(r) && Hn(l))
}
function Xi(e) {
  return (
    yt(e, 'Intersect') &&
    !(un(e.type) && e.type !== 'object') &&
    cr(e.allOf) &&
    e.allOf.every((r) => Hn(r) && !fC(r)) &&
    It(e.type) &&
    (Kg(e.unevaluatedProperties) || d1(e.unevaluatedProperties)) &&
    It(e.$id)
  )
}
function Qg(e) {
  return yt(e, 'Iterator') && e.type === 'Iterator' && It(e.$id) && Hn(e.items)
}
function yt(e, r) {
  return Sn(e) && $e in e && e[$e] === r
}
function p1(e) {
  return Kl(e) && un(e.const)
}
function g1(e) {
  return Kl(e) && Eo(e.const)
}
function h1(e) {
  return Kl(e) && Vu(e.const)
}
function Kl(e) {
  return yt(e, 'Literal') && It(e.$id) && iC(e.const)
}
function iC(e) {
  return Vu(e) || Eo(e) || un(e)
}
function aC(e) {
  return yt(e, 'MappedKey') && cr(e.keys) && e.keys.every((r) => Eo(r) || un(r))
}
function sC(e) {
  return yt(e, 'MappedResult') && m1(e.properties)
}
function Xl(e) {
  return yt(e, 'Never') && Sn(e.not) && Object.getOwnPropertyNames(e.not).length === 0
}
function Ga(e) {
  return yt(e, 'Not') && Hn(e.not)
}
function Zg(e) {
  return yt(e, 'Null') && e.type === 'null' && It(e.$id)
}
function ar(e) {
  return (
    yt(e, 'Number') &&
    e.type === 'number' &&
    It(e.$id) &&
    Lt(e.exclusiveMaximum) &&
    Lt(e.exclusiveMinimum) &&
    Lt(e.maximum) &&
    Lt(e.minimum) &&
    Lt(e.multipleOf)
  )
}
function Kt(e) {
  return (
    yt(e, 'Object') &&
    e.type === 'object' &&
    It(e.$id) &&
    m1(e.properties) &&
    f1(e.additionalProperties) &&
    Lt(e.minProperties) &&
    Lt(e.maxProperties)
  )
}
function Jg(e) {
  return yt(e, 'Promise') && e.type === 'Promise' && It(e.$id) && Hn(e.item)
}
function Ln(e) {
  return (
    yt(e, 'Record') &&
    e.type === 'object' &&
    It(e.$id) &&
    f1(e.additionalProperties) &&
    Sn(e.patternProperties) &&
    ((r) => {
      const l = Object.getOwnPropertyNames(r.patternProperties)
      return l.length === 1 && c1(l[0]) && Sn(r.patternProperties) && Hn(r.patternProperties[l[0]])
    })(e)
  )
}
function uC(e) {
  return yt(e, 'Ref') && It(e.$id) && un(e.$ref)
}
function Mu(e) {
  return (
    yt(e, 'RegExp') &&
    It(e.$id) &&
    un(e.source) &&
    un(e.flags) &&
    Lt(e.maxLength) &&
    Lt(e.minLength)
  )
}
function io(e) {
  return (
    yt(e, 'String') &&
    e.type === 'string' &&
    It(e.$id) &&
    Lt(e.minLength) &&
    Lt(e.maxLength) &&
    nC(e.pattern) &&
    rC(e.format)
  )
}
function Ou(e) {
  return yt(e, 'Symbol') && e.type === 'symbol' && It(e.$id)
}
function Au(e) {
  return (
    yt(e, 'TemplateLiteral') &&
    e.type === 'string' &&
    un(e.pattern) &&
    e.pattern[0] === '^' &&
    e.pattern[e.pattern.length - 1] === '$'
  )
}
function cC(e) {
  return yt(e, 'This') && It(e.$id) && un(e.$ref)
}
function fC(e) {
  return Sn(e) && Fr in e
}
function ud(e) {
  return (
    yt(e, 'Tuple') &&
    e.type === 'array' &&
    It(e.$id) &&
    Eo(e.minItems) &&
    Eo(e.maxItems) &&
    e.minItems === e.maxItems &&
    ((yn(e.items) && yn(e.additionalItems) && e.minItems === 0) ||
      (cr(e.items) && e.items.every((r) => Hn(r))))
  )
}
function Ui(e) {
  return yt(e, 'Undefined') && e.type === 'undefined' && It(e.$id)
}
function el(e) {
  return yt(e, 'Union') && It(e.$id) && Sn(e) && cr(e.anyOf) && e.anyOf.every((r) => Hn(r))
}
function qu(e) {
  return (
    yt(e, 'Uint8Array') &&
    e.type === 'Uint8Array' &&
    It(e.$id) &&
    Lt(e.minByteLength) &&
    Lt(e.maxByteLength)
  )
}
function ao(e) {
  return yt(e, 'Unknown') && It(e.$id)
}
function dC(e) {
  return yt(e, 'Unsafe')
}
function cd(e) {
  return yt(e, 'Void') && e.type === 'void' && It(e.$id)
}
function mC(e) {
  return Sn(e) && $e in e && un(e[$e]) && !tC.includes(e[$e])
}
function Hn(e) {
  return (
    Sn(e) &&
    (lo(e) ||
      oC(e) ||
      $i(e) ||
      Ki(e) ||
      ld(e) ||
      Xg(e) ||
      lC(e) ||
      id(e) ||
      ad(e) ||
      sd(e) ||
      il(e) ||
      Xi(e) ||
      Qg(e) ||
      Kl(e) ||
      aC(e) ||
      sC(e) ||
      Xl(e) ||
      Ga(e) ||
      Zg(e) ||
      ar(e) ||
      Kt(e) ||
      Jg(e) ||
      Ln(e) ||
      uC(e) ||
      Mu(e) ||
      io(e) ||
      Ou(e) ||
      Au(e) ||
      cC(e) ||
      ud(e) ||
      Ui(e) ||
      el(e) ||
      qu(e) ||
      ao(e) ||
      dC(e) ||
      cd(e) ||
      mC(e))
  )
}
const pC = '(true|false)',
  If = '(0|[1-9][0-9]*)',
  b1 = '(.*)',
  gC = '(?!.*)',
  Ya = `^${If}$`,
  $a = `^${b1}$`,
  hC = `^${gC}$`
function bC(e, r) {
  return e.includes(r)
}
function yC(e) {
  return [...new Set(e)]
}
function vC(e, r) {
  return e.filter((l) => r.includes(l))
}
function xC(e, r) {
  return e.reduce((l, a) => vC(l, a), r)
}
function SC(e) {
  return e.length === 1 ? e[0] : e.length > 1 ? xC(e.slice(1), e[0]) : []
}
function RC(e) {
  const r = []
  for (const l of e) r.push(...l)
  return r
}
function Nu(e) {
  return Ae({ [$e]: 'Any' }, e)
}
function Wg(e, r) {
  return Ae({ [$e]: 'Array', type: 'array', items: e }, r)
}
function EC(e) {
  return Ae({ [$e]: 'Argument', index: e })
}
function eh(e, r) {
  return Ae({ [$e]: 'AsyncIterator', type: 'AsyncIterator', items: e }, r)
}
function An(e, r, l) {
  return Ae({ [$e]: 'Computed', target: e, parameters: r }, l)
}
function TC(e, r) {
  const { [r]: l, ...a } = e
  return a
}
function Or(e, r) {
  return r.reduce((l, a) => TC(l, a), e)
}
function Rn(e) {
  return Ae({ [$e]: 'Never', not: {} }, e)
}
function Bn(e) {
  return Ae({ [$e]: 'MappedResult', properties: e })
}
function th(e, r, l) {
  return Ae({ [$e]: 'Constructor', type: 'Constructor', parameters: e, returns: r }, l)
}
function Gu(e, r, l) {
  return Ae({ [$e]: 'Function', type: 'Function', parameters: e, returns: r }, l)
}
function xg(e, r) {
  return Ae({ [$e]: 'Union', anyOf: e }, r)
}
function CC(e) {
  return e.some((r) => $l(r))
}
function K0(e) {
  return e.map((r) => ($l(r) ? wC(r) : r))
}
function wC(e) {
  return Or(e, [ll])
}
function MC(e, r) {
  return CC(e) ? Jl(xg(K0(e), r)) : xg(K0(e), r)
}
function as(e, r) {
  return e.length === 1 ? Ae(e[0], r) : e.length === 0 ? Rn(r) : MC(e, r)
}
function Fn(e, r) {
  return e.length === 0 ? Rn(r) : e.length === 1 ? Ae(e[0], r) : xg(e, r)
}
class X0 extends Fi {}
function OC(e) {
  return e
    .replace(/\\\$/g, '$')
    .replace(/\\\*/g, '*')
    .replace(/\\\^/g, '^')
    .replace(/\\\|/g, '|')
    .replace(/\\\(/g, '(')
    .replace(/\\\)/g, ')')
}
function nh(e, r, l) {
  return e[r] === l && e.charCodeAt(r - 1) !== 92
}
function Wo(e, r) {
  return nh(e, r, '(')
}
function zu(e, r) {
  return nh(e, r, ')')
}
function y1(e, r) {
  return nh(e, r, '|')
}
function AC(e) {
  if (!(Wo(e, 0) && zu(e, e.length - 1))) return !1
  let r = 0
  for (let l = 0; l < e.length; l++)
    if ((Wo(e, l) && (r += 1), zu(e, l) && (r -= 1), r === 0 && l !== e.length - 1)) return !1
  return !0
}
function NC(e) {
  return e.slice(1, e.length - 1)
}
function zC(e) {
  let r = 0
  for (let l = 0; l < e.length; l++)
    if ((Wo(e, l) && (r += 1), zu(e, l) && (r -= 1), y1(e, l) && r === 0)) return !0
  return !1
}
function IC(e) {
  for (let r = 0; r < e.length; r++) if (Wo(e, r)) return !0
  return !1
}
function DC(e) {
  let [r, l] = [0, 0]
  const a = []
  for (let f = 0; f < e.length; f++)
    if ((Wo(e, f) && (r += 1), zu(e, f) && (r -= 1), y1(e, f) && r === 0)) {
      const d = e.slice(l, f)
      ;(d.length > 0 && a.push(Ka(d)), (l = f + 1))
    }
  const u = e.slice(l)
  return (
    u.length > 0 && a.push(Ka(u)),
    a.length === 0 ? { type: 'const', const: '' } : a.length === 1 ? a[0] : { type: 'or', expr: a }
  )
}
function jC(e) {
  function r(u, f) {
    if (!Wo(u, f)) throw new X0('TemplateLiteralParser: Index must point to open parens')
    let d = 0
    for (let m = f; m < u.length; m++)
      if ((Wo(u, m) && (d += 1), zu(u, m) && (d -= 1), d === 0)) return [f, m]
    throw new X0('TemplateLiteralParser: Unclosed group parens in expression')
  }
  function l(u, f) {
    for (let d = f; d < u.length; d++) if (Wo(u, d)) return [f, d]
    return [f, u.length]
  }
  const a = []
  for (let u = 0; u < e.length; u++)
    if (Wo(e, u)) {
      const [f, d] = r(e, u),
        m = e.slice(f, d + 1)
      ;(a.push(Ka(m)), (u = d))
    } else {
      const [f, d] = l(e, u),
        m = e.slice(f, d)
      ;(m.length > 0 && a.push(Ka(m)), (u = d - 1))
    }
  return a.length === 0
    ? { type: 'const', const: '' }
    : a.length === 1
      ? a[0]
      : { type: 'and', expr: a }
}
function Ka(e) {
  return AC(e) ? Ka(NC(e)) : zC(e) ? DC(e) : IC(e) ? jC(e) : { type: 'const', const: OC(e) }
}
function rh(e) {
  return Ka(e.slice(1, e.length - 1))
}
class kC extends Fi {}
function _C(e) {
  return (
    e.type === 'or' &&
    e.expr.length === 2 &&
    e.expr[0].type === 'const' &&
    e.expr[0].const === '0' &&
    e.expr[1].type === 'const' &&
    e.expr[1].const === '[1-9][0-9]*'
  )
}
function UC(e) {
  return (
    e.type === 'or' &&
    e.expr.length === 2 &&
    e.expr[0].type === 'const' &&
    e.expr[0].const === 'true' &&
    e.expr[1].type === 'const' &&
    e.expr[1].const === 'false'
  )
}
function VC(e) {
  return e.type === 'const' && e.const === '.*'
}
function Iu(e) {
  return _C(e) || VC(e)
    ? !1
    : UC(e)
      ? !0
      : e.type === 'and'
        ? e.expr.every((r) => Iu(r))
        : e.type === 'or'
          ? e.expr.every((r) => Iu(r))
          : e.type === 'const'
            ? !0
            : (() => {
                throw new kC('Unknown expression type')
              })()
}
function LC(e) {
  const r = rh(e.pattern)
  return Iu(r)
}
class HC extends Fi {}
function* v1(e) {
  if (e.length === 1) return yield* e[0]
  for (const r of e[0]) for (const l of v1(e.slice(1))) yield `${r}${l}`
}
function* BC(e) {
  return yield* v1(e.expr.map((r) => [...fd(r)]))
}
function* FC(e) {
  for (const r of e.expr) yield* fd(r)
}
function* PC(e) {
  return yield e.const
}
function* fd(e) {
  return e.type === 'and'
    ? yield* BC(e)
    : e.type === 'or'
      ? yield* FC(e)
      : e.type === 'const'
        ? yield* PC(e)
        : (() => {
            throw new HC('Unknown expression')
          })()
}
function x1(e) {
  const r = rh(e.pattern)
  return Iu(r) ? [...fd(r)] : []
}
function vn(e, r) {
  return Ae({ [$e]: 'Literal', const: e, type: typeof e }, r)
}
function S1(e) {
  return Ae({ [$e]: 'Boolean', type: 'boolean' }, e)
}
function oh(e) {
  return Ae({ [$e]: 'BigInt', type: 'bigint' }, e)
}
function Qi(e) {
  return Ae({ [$e]: 'Number', type: 'number' }, e)
}
function Vi(e) {
  return Ae({ [$e]: 'String', type: 'string' }, e)
}
function* qC(e) {
  const r = e.trim().replace(/"|'/g, '')
  return r === 'boolean'
    ? yield S1()
    : r === 'number'
      ? yield Qi()
      : r === 'bigint'
        ? yield oh()
        : r === 'string'
          ? yield Vi()
          : yield (() => {
              const l = r.split('|').map((a) => vn(a.trim()))
              return l.length === 0 ? Rn() : l.length === 1 ? l[0] : as(l)
            })()
}
function* GC(e) {
  if (e[1] !== '{') {
    const r = vn('$'),
      l = Sg(e.slice(1))
    return yield* [r, ...l]
  }
  for (let r = 2; r < e.length; r++)
    if (e[r] === '}') {
      const l = qC(e.slice(2, r)),
        a = Sg(e.slice(r + 1))
      return yield* [...l, ...a]
    }
  yield vn(e)
}
function* Sg(e) {
  for (let r = 0; r < e.length; r++)
    if (e[r] === '$') {
      const l = vn(e.slice(0, r)),
        a = GC(e.slice(r))
      return yield* [l, ...a]
    }
  yield vn(e)
}
function YC(e) {
  return [...Sg(e)]
}
class $C extends Fi {}
function KC(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
function R1(e, r) {
  return Gi(e)
    ? e.pattern.slice(1, e.pattern.length - 1)
    : Dn(e)
      ? `(${e.anyOf.map((l) => R1(l, r)).join('|')})`
      : is(e)
        ? `${r}${If}`
        : ls(e)
          ? `${r}${If}`
          : ed(e)
            ? `${r}${If}`
            : Pu(e)
              ? `${r}${b1}`
              : Pi(e)
                ? `${r}${KC(e.const.toString())}`
                : Bu(e)
                  ? `${r}${pC}`
                  : (() => {
                      throw new $C(`Unexpected Kind '${e[$e]}'`)
                    })()
}
function Q0(e) {
  return `^${e.map((r) => R1(r, '')).join('')}$`
}
function Vf(e) {
  const l = x1(e).map((a) => vn(a))
  return as(l)
}
function E1(e, r) {
  const l = un(e) ? Q0(YC(e)) : Q0(e)
  return Ae({ [$e]: 'TemplateLiteral', type: 'string', pattern: l }, r)
}
function XC(e) {
  return x1(e).map((l) => l.toString())
}
function QC(e) {
  const r = []
  for (const l of e) r.push(...Ql(l))
  return r
}
function ZC(e) {
  return [e.toString()]
}
function Ql(e) {
  return [
    ...new Set(
      Gi(e)
        ? XC(e)
        : Dn(e)
          ? QC(e.anyOf)
          : Pi(e)
            ? ZC(e.const)
            : is(e)
              ? ['[number]']
              : ls(e)
                ? ['[number]']
                : []
    ),
  ]
}
function JC(e, r, l) {
  const a = {}
  for (const u of Object.getOwnPropertyNames(r)) a[u] = dd(e, Ql(r[u]), l)
  return a
}
function WC(e, r, l) {
  return JC(e, r.properties, l)
}
function ew(e, r, l) {
  const a = WC(e, r, l)
  return Bn(a)
}
function T1(e, r) {
  return e.map((l) => C1(l, r))
}
function tw(e) {
  return e.filter((r) => !Fu(r))
}
function nw(e, r) {
  return A1(tw(T1(e, r)))
}
function rw(e) {
  return e.some((r) => Fu(r)) ? [] : e
}
function ow(e, r) {
  return as(rw(T1(e, r)))
}
function lw(e, r) {
  return r in e ? e[r] : r === '[number]' ? as(e) : Rn()
}
function iw(e, r) {
  return r === '[number]' ? e : Rn()
}
function aw(e, r) {
  return r in e ? e[r] : Rn()
}
function C1(e, r) {
  return $r(e)
    ? nw(e.allOf, r)
    : Dn(e)
      ? ow(e.anyOf, r)
      : Yi(e)
        ? lw(e.items ?? [], r)
        : ts(e)
          ? iw(e.items, r)
          : uo(e)
            ? aw(e.properties, r)
            : Rn()
}
function w1(e, r) {
  return r.map((l) => C1(e, l))
}
function Z0(e, r) {
  return as(w1(e, r))
}
function dd(e, r, l) {
  if (sr(e) || sr(r)) {
    const a = 'Index types using Ref parameters require both Type and Key to be of TSchema'
    if (!Hl(e) || !Hl(r)) throw new Fi(a)
    return An('Index', [e, r])
  }
  return zr(r) ? ew(e, r, l) : qi(r) ? fw(e, r, l) : Ae(Hl(r) ? Z0(e, Ql(r)) : Z0(e, r), l)
}
function sw(e, r, l) {
  return { [r]: dd(e, [r], Mr(l)) }
}
function uw(e, r, l) {
  return r.reduce((a, u) => ({ ...a, ...sw(e, u, l) }), {})
}
function cw(e, r, l) {
  return uw(e, r.keys, l)
}
function fw(e, r, l) {
  const a = cw(e, r, l)
  return Bn(a)
}
function lh(e, r) {
  return Ae({ [$e]: 'Iterator', type: 'Iterator', items: e }, r)
}
function dw(e) {
  const r = []
  for (let l in e) $l(e[l]) || r.push(l)
  return r
}
function mw(e, r) {
  const l = dw(e),
    a =
      l.length > 0
        ? { [$e]: 'Object', type: 'object', properties: e, required: l }
        : { [$e]: 'Object', type: 'object', properties: e }
  return Ae(a, r)
}
var In = mw
function M1(e, r) {
  return Ae({ [$e]: 'Promise', type: 'Promise', item: e }, r)
}
function pw(e) {
  return Ae(Or(e, [Hu]))
}
function gw(e) {
  return Ae({ ...e, [Hu]: 'Readonly' })
}
function hw(e, r) {
  return r === !1 ? pw(e) : gw(e)
}
function Zl(e, r) {
  const l = r ?? !0
  return zr(e) ? vw(e, l) : hw(e, l)
}
function bw(e, r) {
  const l = {}
  for (const a of globalThis.Object.getOwnPropertyNames(e)) l[a] = Zl(e[a], r)
  return l
}
function yw(e, r) {
  return bw(e.properties, r)
}
function vw(e, r) {
  const l = yw(e, r)
  return Bn(l)
}
function ss(e, r) {
  return Ae(
    e.length > 0
      ? {
          [$e]: 'Tuple',
          type: 'array',
          items: e,
          additionalItems: !1,
          minItems: e.length,
          maxItems: e.length,
        }
      : { [$e]: 'Tuple', type: 'array', minItems: e.length, maxItems: e.length },
    r
  )
}
function O1(e, r) {
  return e in r ? Br(e, r[e]) : Bn(r)
}
function xw(e) {
  return { [e]: vn(e) }
}
function Sw(e) {
  const r = {}
  for (const l of e) r[l] = vn(l)
  return r
}
function Rw(e, r) {
  return bC(r, e) ? xw(e) : Sw(r)
}
function Ew(e, r) {
  const l = Rw(e, r)
  return O1(e, l)
}
function fu(e, r) {
  return r.map((l) => Br(e, l))
}
function Tw(e, r) {
  const l = {}
  for (const a of globalThis.Object.getOwnPropertyNames(r)) l[a] = Br(e, r[a])
  return l
}
function Br(e, r) {
  const l = { ...r }
  return $l(r)
    ? Jl(Br(e, Or(r, [ll])))
    : Pg(r)
      ? Zl(Br(e, Or(r, [Hu])))
      : zr(r)
        ? O1(e, r.properties)
        : qi(r)
          ? Ew(e, r.keys)
          : rs(r)
            ? th(fu(e, r.parameters), Br(e, r.returns), l)
            : os(r)
              ? Gu(fu(e, r.parameters), Br(e, r.returns), l)
              : Wf(r)
                ? eh(Br(e, r.items), l)
                : td(r)
                  ? lh(Br(e, r.items), l)
                  : $r(r)
                    ? Wl(fu(e, r.allOf), l)
                    : Dn(r)
                      ? Fn(fu(e, r.anyOf), l)
                      : Yi(r)
                        ? ss(fu(e, r.items ?? []), l)
                        : uo(r)
                          ? In(Tw(e, r.properties), l)
                          : ts(r)
                            ? Wg(Br(e, r.items), l)
                            : nd(r)
                              ? M1(Br(e, r.item), l)
                              : r
}
function Cw(e, r) {
  const l = {}
  for (const a of e) l[a] = Br(a, r)
  return l
}
function ww(e, r, l) {
  const a = Hl(e) ? Ql(e) : e,
    u = r({ [$e]: 'MappedKey', keys: a }),
    f = Cw(a, u)
  return In(f, l)
}
function Mw(e) {
  return Ae(Or(e, [ll]))
}
function Ow(e) {
  return Ae({ ...e, [ll]: 'Optional' })
}
function Aw(e, r) {
  return r === !1 ? Mw(e) : Ow(e)
}
function Jl(e, r) {
  const l = r ?? !0
  return zr(e) ? Iw(e, l) : Aw(e, l)
}
function Nw(e, r) {
  const l = {}
  for (const a of globalThis.Object.getOwnPropertyNames(e)) l[a] = Jl(e[a], r)
  return l
}
function zw(e, r) {
  return Nw(e.properties, r)
}
function Iw(e, r) {
  const l = zw(e, r)
  return Bn(l)
}
function Rg(e, r = {}) {
  const l = e.every((u) => uo(u)),
    a = Hl(r.unevaluatedProperties) ? { unevaluatedProperties: r.unevaluatedProperties } : {}
  return Ae(
    r.unevaluatedProperties === !1 || Hl(r.unevaluatedProperties) || l
      ? { ...a, [$e]: 'Intersect', type: 'object', allOf: e }
      : { ...a, [$e]: 'Intersect', allOf: e },
    r
  )
}
function Dw(e) {
  return e.every((r) => $l(r))
}
function jw(e) {
  return Or(e, [ll])
}
function J0(e) {
  return e.map((r) => ($l(r) ? jw(r) : r))
}
function kw(e, r) {
  return Dw(e) ? Jl(Rg(J0(e), r)) : Rg(J0(e), r)
}
function A1(e, r = {}) {
  if (e.length === 1) return Ae(e[0], r)
  if (e.length === 0) return Rn(r)
  if (e.some((l) => od(l))) throw new Error('Cannot intersect transform types')
  return kw(e, r)
}
function Wl(e, r) {
  if (e.length === 1) return Ae(e[0], r)
  if (e.length === 0) return Rn(r)
  if (e.some((l) => od(l))) throw new Error('Cannot intersect transform types')
  return Rg(e, r)
}
function Yu(...e) {
  const [r, l] = typeof e[0] == 'string' ? [e[0], e[1]] : [e[0].$id, e[1]]
  if (typeof r != 'string') throw new Fi('Ref: $ref must be a string')
  return Ae({ [$e]: 'Ref', $ref: r }, l)
}
function _w(e, r) {
  return An('Awaited', [An(e, r)])
}
function Uw(e) {
  return An('Awaited', [Yu(e)])
}
function Vw(e) {
  return Wl(N1(e))
}
function Lw(e) {
  return Fn(N1(e))
}
function Hw(e) {
  return md(e)
}
function N1(e) {
  return e.map((r) => md(r))
}
function md(e, r) {
  return Ae(
    ns(e)
      ? _w(e.target, e.parameters)
      : $r(e)
        ? Vw(e.allOf)
        : Dn(e)
          ? Lw(e.anyOf)
          : nd(e)
            ? Hw(e.item)
            : sr(e)
              ? Uw(e.$ref)
              : e,
    r
  )
}
function z1(e) {
  const r = []
  for (const l of e) r.push(ih(l))
  return r
}
function Bw(e) {
  const r = z1(e)
  return RC(r)
}
function Fw(e) {
  const r = z1(e)
  return SC(r)
}
function Pw(e) {
  return e.map((r, l) => l.toString())
}
function qw(e) {
  return ['[number]']
}
function Gw(e) {
  return globalThis.Object.getOwnPropertyNames(e)
}
function Yw(e) {
  return []
}
function ih(e) {
  return $r(e)
    ? Bw(e.allOf)
    : Dn(e)
      ? Fw(e.anyOf)
      : Yi(e)
        ? Pw(e.items ?? [])
        : ts(e)
          ? qw(e.items)
          : uo(e)
            ? Gw(e.properties)
            : rd(e)
              ? Yw(e.patternProperties)
              : []
}
function $w(e, r) {
  return An('KeyOf', [An(e, r)])
}
function Kw(e) {
  return An('KeyOf', [Yu(e)])
}
function Xw(e, r) {
  const l = ih(e),
    a = Qw(l),
    u = as(a)
  return Ae(u, r)
}
function Qw(e) {
  return e.map((r) => (r === '[number]' ? Qi() : vn(r)))
}
function ah(e, r) {
  return ns(e) ? $w(e.target, e.parameters) : sr(e) ? Kw(e.$ref) : zr(e) ? Ww(e, r) : Xw(e, r)
}
function Zw(e, r) {
  const l = {}
  for (const a of globalThis.Object.getOwnPropertyNames(e)) l[a] = ah(e[a], Mr(r))
  return l
}
function Jw(e, r) {
  return Zw(e.properties, r)
}
function Ww(e, r) {
  const l = Jw(e, r)
  return Bn(l)
}
function eM(e) {
  const r = []
  for (const l of e) r.push(...ih(l))
  return yC(r)
}
function tM(e) {
  return e.filter((r) => !Fu(r))
}
function nM(e, r) {
  const l = []
  for (const a of e) l.push(...w1(a, [r]))
  return tM(l)
}
function rM(e, r) {
  const l = {}
  for (const a of r) l[a] = A1(nM(e, a))
  return l
}
function oM(e, r) {
  const l = eM(e),
    a = rM(e, l)
  return In(a, r)
}
function I1(e) {
  return Ae({ [$e]: 'Date', type: 'Date' }, e)
}
function D1(e) {
  return Ae({ [$e]: 'Null', type: 'null' }, e)
}
function j1(e) {
  return Ae({ [$e]: 'Symbol', type: 'symbol' }, e)
}
function k1(e) {
  return Ae({ [$e]: 'Undefined', type: 'undefined' }, e)
}
function _1(e) {
  return Ae({ [$e]: 'Uint8Array', type: 'Uint8Array' }, e)
}
function pd(e) {
  return Ae({ [$e]: 'Unknown' }, e)
}
function lM(e) {
  return e.map((r) => sh(r, !1))
}
function iM(e) {
  const r = {}
  for (const l of globalThis.Object.getOwnPropertyNames(e)) r[l] = Zl(sh(e[l], !1))
  return r
}
function pf(e, r) {
  return r === !0 ? e : Zl(e)
}
function sh(e, r) {
  return z2(e) || D2(e)
    ? pf(Nu(), r)
    : cr(e)
      ? Zl(ss(lM(e)))
      : Lu(e)
        ? _1()
        : Bg(e)
          ? I1()
          : Sn(e)
            ? pf(In(iM(e)), r)
            : I2(e)
              ? pf(Gu([], pd()), r)
              : yn(e)
                ? k1()
                : j2(e)
                  ? D1()
                  : k2(e)
                    ? j1()
                    : o1(e)
                      ? oh()
                      : Eo(e) || Vu(e) || un(e)
                        ? vn(e)
                        : In({})
}
function aM(e, r) {
  return Ae(sh(e, !0), r)
}
function sM(e, r) {
  return rs(e) ? ss(e.parameters, r) : Rn(r)
}
function uM(e, r) {
  if (yn(e)) throw new Error('Enum undefined or empty')
  const l = globalThis.Object.getOwnPropertyNames(e)
      .filter((f) => isNaN(f))
      .map((f) => e[f]),
    u = [...new Set(l)].map((f) => vn(f))
  return Fn(u, { ...r, [Jf]: 'Enum' })
}
class cM extends Fi {}
var se
;(function (e) {
  ;((e[(e.Union = 0)] = 'Union'), (e[(e.True = 1)] = 'True'), (e[(e.False = 2)] = 'False'))
})(se || (se = {}))
function qr(e) {
  return e === se.False ? e : se.True
}
function us(e) {
  throw new cM(e)
}
function En(e) {
  return Xl(e) || Xi(e) || el(e) || ao(e) || lo(e)
}
function Tn(e, r) {
  return Xl(r)
    ? L1()
    : Xi(r)
      ? gd(e, r)
      : el(r)
        ? ch(e, r)
        : ao(r)
          ? P1()
          : lo(r)
            ? uh()
            : us('StructuralRight')
}
function uh(e, r) {
  return se.True
}
function fM(e, r) {
  return Xi(r)
    ? gd(e, r)
    : el(r) && r.anyOf.some((l) => lo(l) || ao(l))
      ? se.True
      : el(r)
        ? se.Union
        : ao(r) || lo(r)
          ? se.True
          : se.Union
}
function dM(e, r) {
  return ao(e) ? se.False : lo(e) ? se.Union : Xl(e) ? se.True : se.False
}
function mM(e, r) {
  return Kt(r) && hd(r) ? se.True : En(r) ? Tn(e, r) : $i(r) ? qr(zt(e.items, r.items)) : se.False
}
function pM(e, r) {
  return En(r) ? Tn(e, r) : Xg(r) ? qr(zt(e.items, r.items)) : se.False
}
function gM(e, r) {
  return En(r) ? Tn(e, r) : Kt(r) ? $n(e, r) : Ln(r) ? Kr(e, r) : ld(r) ? se.True : se.False
}
function U1(e, r) {
  return h1(e) || Ki(e) ? se.True : se.False
}
function hM(e, r) {
  return En(r) ? Tn(e, r) : Kt(r) ? $n(e, r) : Ln(r) ? Kr(e, r) : Ki(r) ? se.True : se.False
}
function bM(e, r) {
  return En(r)
    ? Tn(e, r)
    : Kt(r)
      ? $n(e, r)
      : id(r)
        ? e.parameters.length > r.parameters.length
          ? se.False
          : e.parameters.every((l, a) => qr(zt(r.parameters[a], l)) === se.True)
            ? qr(zt(e.returns, r.returns))
            : se.False
        : se.False
}
function yM(e, r) {
  return En(r) ? Tn(e, r) : Kt(r) ? $n(e, r) : Ln(r) ? Kr(e, r) : ad(r) ? se.True : se.False
}
function vM(e, r) {
  return En(r)
    ? Tn(e, r)
    : Kt(r)
      ? $n(e, r)
      : sd(r)
        ? e.parameters.length > r.parameters.length
          ? se.False
          : e.parameters.every((l, a) => qr(zt(r.parameters[a], l)) === se.True)
            ? qr(zt(e.returns, r.returns))
            : se.False
        : se.False
}
function V1(e, r) {
  return (Kl(e) && Eo(e.const)) || ar(e) || il(e) ? se.True : se.False
}
function xM(e, r) {
  return il(r) || ar(r)
    ? se.True
    : En(r)
      ? Tn(e, r)
      : Kt(r)
        ? $n(e, r)
        : Ln(r)
          ? Kr(e, r)
          : se.False
}
function gd(e, r) {
  return r.allOf.every((l) => zt(e, l) === se.True) ? se.True : se.False
}
function SM(e, r) {
  return e.allOf.some((l) => zt(l, r) === se.True) ? se.True : se.False
}
function RM(e, r) {
  return En(r) ? Tn(e, r) : Qg(r) ? qr(zt(e.items, r.items)) : se.False
}
function EM(e, r) {
  return Kl(r) && r.const === e.const
    ? se.True
    : En(r)
      ? Tn(e, r)
      : Kt(r)
        ? $n(e, r)
        : Ln(r)
          ? Kr(e, r)
          : io(r)
            ? F1(e)
            : ar(r)
              ? H1(e)
              : il(r)
                ? V1(e)
                : Ki(r)
                  ? U1(e)
                  : se.False
}
function L1(e, r) {
  return se.False
}
function TM(e, r) {
  return se.True
}
function W0(e) {
  let [r, l] = [e, 0]
  for (; Ga(r); ) ((r = r.not), (l += 1))
  return l % 2 === 0 ? r : pd()
}
function CM(e, r) {
  return Ga(e) ? zt(W0(e), r) : Ga(r) ? zt(e, W0(r)) : us('Invalid fallthrough for Not')
}
function wM(e, r) {
  return En(r) ? Tn(e, r) : Kt(r) ? $n(e, r) : Ln(r) ? Kr(e, r) : Zg(r) ? se.True : se.False
}
function H1(e, r) {
  return g1(e) || ar(e) || il(e) ? se.True : se.False
}
function MM(e, r) {
  return En(r)
    ? Tn(e, r)
    : Kt(r)
      ? $n(e, r)
      : Ln(r)
        ? Kr(e, r)
        : il(r) || ar(r)
          ? se.True
          : se.False
}
function ur(e, r) {
  return Object.getOwnPropertyNames(e.properties).length === r
}
function ex(e) {
  return hd(e)
}
function tx(e) {
  return (
    ur(e, 0) ||
    (ur(e, 1) &&
      'description' in e.properties &&
      el(e.properties.description) &&
      e.properties.description.anyOf.length === 2 &&
      ((io(e.properties.description.anyOf[0]) && Ui(e.properties.description.anyOf[1])) ||
        (io(e.properties.description.anyOf[1]) && Ui(e.properties.description.anyOf[0]))))
  )
}
function eg(e) {
  return ur(e, 0)
}
function nx(e) {
  return ur(e, 0)
}
function OM(e) {
  return ur(e, 0)
}
function AM(e) {
  return ur(e, 0)
}
function NM(e) {
  return hd(e)
}
function zM(e) {
  const r = Qi()
  return (
    ur(e, 0) || (ur(e, 1) && 'length' in e.properties && qr(zt(e.properties.length, r)) === se.True)
  )
}
function IM(e) {
  return ur(e, 0)
}
function hd(e) {
  const r = Qi()
  return (
    ur(e, 0) || (ur(e, 1) && 'length' in e.properties && qr(zt(e.properties.length, r)) === se.True)
  )
}
function DM(e) {
  const r = Gu([Nu()], Nu())
  return (
    ur(e, 0) || (ur(e, 1) && 'then' in e.properties && qr(zt(e.properties.then, r)) === se.True)
  )
}
function B1(e, r) {
  return zt(e, r) === se.False || (Uf(e) && !Uf(r)) ? se.False : se.True
}
function $n(e, r) {
  return ao(e)
    ? se.False
    : lo(e)
      ? se.Union
      : Xl(e) ||
          (p1(e) && ex(r)) ||
          (g1(e) && eg(r)) ||
          (h1(e) && nx(r)) ||
          (Ou(e) && tx(r)) ||
          (ld(e) && OM(r)) ||
          (io(e) && ex(r)) ||
          (Ou(e) && tx(r)) ||
          (ar(e) && eg(r)) ||
          (il(e) && eg(r)) ||
          (Ki(e) && nx(r)) ||
          (qu(e) && NM(r)) ||
          (ad(e) && AM(r)) ||
          (id(e) && IM(r)) ||
          (sd(e) && zM(r))
        ? se.True
        : Ln(e) && io(Eg(e))
          ? r[Jf] === 'Record'
            ? se.True
            : se.False
          : Ln(e) && ar(Eg(e)) && ur(r, 0)
            ? se.True
            : se.False
}
function jM(e, r) {
  return En(r)
    ? Tn(e, r)
    : Ln(r)
      ? Kr(e, r)
      : Kt(r)
        ? (() => {
            for (const l of Object.getOwnPropertyNames(r.properties)) {
              if (!(l in e.properties) && !Uf(r.properties[l])) return se.False
              if (Uf(r.properties[l])) return se.True
              if (B1(e.properties[l], r.properties[l]) === se.False) return se.False
            }
            return se.True
          })()
        : se.False
}
function kM(e, r) {
  return En(r) ? Tn(e, r) : Kt(r) && DM(r) ? se.True : Jg(r) ? qr(zt(e.item, r.item)) : se.False
}
function Eg(e) {
  return Ya in e.patternProperties
    ? Qi()
    : $a in e.patternProperties
      ? Vi()
      : us('Unknown record key pattern')
}
function Tg(e) {
  return Ya in e.patternProperties
    ? e.patternProperties[Ya]
    : $a in e.patternProperties
      ? e.patternProperties[$a]
      : us('Unable to get record value schema')
}
function Kr(e, r) {
  const [l, a] = [Eg(r), Tg(r)]
  return p1(e) && ar(l) && qr(zt(e, a)) === se.True
    ? se.True
    : (qu(e) && ar(l)) || (io(e) && ar(l)) || ($i(e) && ar(l))
      ? zt(e, a)
      : Kt(e)
        ? (() => {
            for (const u of Object.getOwnPropertyNames(e.properties))
              if (B1(a, e.properties[u]) === se.False) return se.False
            return se.True
          })()
        : se.False
}
function _M(e, r) {
  return En(r) ? Tn(e, r) : Kt(r) ? $n(e, r) : Ln(r) ? zt(Tg(e), Tg(r)) : se.False
}
function UM(e, r) {
  const l = Mu(e) ? Vi() : e,
    a = Mu(r) ? Vi() : r
  return zt(l, a)
}
function F1(e, r) {
  return (Kl(e) && un(e.const)) || io(e) ? se.True : se.False
}
function VM(e, r) {
  return En(r) ? Tn(e, r) : Kt(r) ? $n(e, r) : Ln(r) ? Kr(e, r) : io(r) ? se.True : se.False
}
function LM(e, r) {
  return En(r) ? Tn(e, r) : Kt(r) ? $n(e, r) : Ln(r) ? Kr(e, r) : Ou(r) ? se.True : se.False
}
function HM(e, r) {
  return Au(e) ? zt(Vf(e), r) : Au(r) ? zt(e, Vf(r)) : us('Invalid fallthrough for TemplateLiteral')
}
function BM(e, r) {
  return $i(r) && e.items !== void 0 && e.items.every((l) => zt(l, r.items) === se.True)
}
function FM(e, r) {
  return Xl(e) ? se.True : ao(e) ? se.False : lo(e) ? se.Union : se.False
}
function PM(e, r) {
  return En(r)
    ? Tn(e, r)
    : (Kt(r) && hd(r)) || ($i(r) && BM(e, r))
      ? se.True
      : ud(r)
        ? (yn(e.items) && !yn(r.items)) || (!yn(e.items) && yn(r.items))
          ? se.False
          : (yn(e.items) && !yn(r.items)) || e.items.every((l, a) => zt(l, r.items[a]) === se.True)
            ? se.True
            : se.False
        : se.False
}
function qM(e, r) {
  return En(r) ? Tn(e, r) : Kt(r) ? $n(e, r) : Ln(r) ? Kr(e, r) : qu(r) ? se.True : se.False
}
function GM(e, r) {
  return En(r)
    ? Tn(e, r)
    : Kt(r)
      ? $n(e, r)
      : Ln(r)
        ? Kr(e, r)
        : cd(r)
          ? KM(e)
          : Ui(r)
            ? se.True
            : se.False
}
function ch(e, r) {
  return r.anyOf.some((l) => zt(e, l) === se.True) ? se.True : se.False
}
function YM(e, r) {
  return e.anyOf.every((l) => zt(l, r) === se.True) ? se.True : se.False
}
function P1(e, r) {
  return se.True
}
function $M(e, r) {
  return Xl(r)
    ? L1()
    : Xi(r)
      ? gd(e, r)
      : el(r)
        ? ch(e, r)
        : lo(r)
          ? uh()
          : io(r)
            ? F1(e)
            : ar(r)
              ? H1(e)
              : il(r)
                ? V1(e)
                : Ki(r)
                  ? U1(e)
                  : $i(r)
                    ? dM(e)
                    : ud(r)
                      ? FM(e)
                      : Kt(r)
                        ? $n(e, r)
                        : ao(r)
                          ? se.True
                          : se.False
}
function KM(e, r) {
  return Ui(e) || Ui(e) ? se.True : se.False
}
function XM(e, r) {
  return Xi(r)
    ? gd(e, r)
    : el(r)
      ? ch(e, r)
      : ao(r)
        ? P1()
        : lo(r)
          ? uh()
          : Kt(r)
            ? $n(e, r)
            : cd(r)
              ? se.True
              : se.False
}
function zt(e, r) {
  return Au(e) || Au(r)
    ? HM(e, r)
    : Mu(e) || Mu(r)
      ? UM(e, r)
      : Ga(e) || Ga(r)
        ? CM(e, r)
        : lo(e)
          ? fM(e, r)
          : $i(e)
            ? mM(e, r)
            : ld(e)
              ? gM(e, r)
              : Ki(e)
                ? hM(e, r)
                : Xg(e)
                  ? pM(e, r)
                  : id(e)
                    ? bM(e, r)
                    : ad(e)
                      ? yM(e, r)
                      : sd(e)
                        ? vM(e, r)
                        : il(e)
                          ? xM(e, r)
                          : Xi(e)
                            ? SM(e, r)
                            : Qg(e)
                              ? RM(e, r)
                              : Kl(e)
                                ? EM(e, r)
                                : Xl(e)
                                  ? TM()
                                  : Zg(e)
                                    ? wM(e, r)
                                    : ar(e)
                                      ? MM(e, r)
                                      : Kt(e)
                                        ? jM(e, r)
                                        : Ln(e)
                                          ? _M(e, r)
                                          : io(e)
                                            ? VM(e, r)
                                            : Ou(e)
                                              ? LM(e, r)
                                              : ud(e)
                                                ? PM(e, r)
                                                : Jg(e)
                                                  ? kM(e, r)
                                                  : qu(e)
                                                    ? qM(e, r)
                                                    : Ui(e)
                                                      ? GM(e, r)
                                                      : el(e)
                                                        ? YM(e, r)
                                                        : ao(e)
                                                          ? $M(e, r)
                                                          : cd(e)
                                                            ? XM(e, r)
                                                            : us(
                                                                `Unknown left type operand '${e[$e]}'`
                                                              )
}
function $u(e, r) {
  return zt(e, r)
}
function QM(e, r, l, a, u) {
  const f = {}
  for (const d of globalThis.Object.getOwnPropertyNames(e)) f[d] = fh(e[d], r, l, a, Mr(u))
  return f
}
function ZM(e, r, l, a, u) {
  return QM(e.properties, r, l, a, u)
}
function JM(e, r, l, a, u) {
  const f = ZM(e, r, l, a, u)
  return Bn(f)
}
function WM(e, r, l, a) {
  const u = $u(e, r)
  return u === se.Union ? Fn([l, a]) : u === se.True ? l : a
}
function fh(e, r, l, a, u) {
  return zr(e) ? JM(e, r, l, a, u) : qi(e) ? Ae(rO(e, r, l, a, u)) : Ae(WM(e, r, l, a), u)
}
function eO(e, r, l, a, u) {
  return { [e]: fh(vn(e), r, l, a, Mr(u)) }
}
function tO(e, r, l, a, u) {
  return e.reduce((f, d) => ({ ...f, ...eO(d, r, l, a, u) }), {})
}
function nO(e, r, l, a, u) {
  return tO(e.keys, r, l, a, u)
}
function rO(e, r, l, a, u) {
  const f = nO(e, r, l, a, u)
  return Bn(f)
}
function oO(e, r) {
  return dh(Vf(e), r)
}
function lO(e, r) {
  const l = e.filter((a) => $u(a, r) === se.False)
  return l.length === 1 ? l[0] : Fn(l)
}
function dh(e, r, l = {}) {
  return Gi(e)
    ? Ae(oO(e, r), l)
    : zr(e)
      ? Ae(sO(e, r), l)
      : Ae(Dn(e) ? lO(e.anyOf, r) : $u(e, r) !== se.False ? Rn() : e, l)
}
function iO(e, r) {
  const l = {}
  for (const a of globalThis.Object.getOwnPropertyNames(e)) l[a] = dh(e[a], r)
  return l
}
function aO(e, r) {
  return iO(e.properties, r)
}
function sO(e, r) {
  const l = aO(e, r)
  return Bn(l)
}
function uO(e, r) {
  return mh(Vf(e), r)
}
function cO(e, r) {
  const l = e.filter((a) => $u(a, r) !== se.False)
  return l.length === 1 ? l[0] : Fn(l)
}
function mh(e, r, l) {
  return Gi(e)
    ? Ae(uO(e, r), l)
    : zr(e)
      ? Ae(mO(e, r), l)
      : Ae(Dn(e) ? cO(e.anyOf, r) : $u(e, r) !== se.False ? e : Rn(), l)
}
function fO(e, r) {
  const l = {}
  for (const a of globalThis.Object.getOwnPropertyNames(e)) l[a] = mh(e[a], r)
  return l
}
function dO(e, r) {
  return fO(e.properties, r)
}
function mO(e, r) {
  const l = dO(e, r)
  return Bn(l)
}
function pO(e, r) {
  return rs(e) ? Ae(e.returns, r) : Rn(r)
}
function q1(e) {
  return Zl(Jl(e))
}
function Zi(e, r, l) {
  return Ae({ [$e]: 'Record', type: 'object', patternProperties: { [e]: r } }, l)
}
function ph(e, r, l) {
  const a = {}
  for (const u of e) a[u] = r
  return In(a, { ...l, [Jf]: 'Record' })
}
function gO(e, r, l) {
  return LC(e) ? ph(Ql(e), r, l) : Zi(e.pattern, r, l)
}
function hO(e, r, l) {
  return ph(Ql(Fn(e)), r, l)
}
function bO(e, r, l) {
  return ph([e.toString()], r, l)
}
function yO(e, r, l) {
  return Zi(e.source, r, l)
}
function vO(e, r, l) {
  const a = yn(e.pattern) ? $a : e.pattern
  return Zi(a, r, l)
}
function xO(e, r, l) {
  return Zi($a, r, l)
}
function SO(e, r, l) {
  return Zi(hC, r, l)
}
function RO(e, r, l) {
  return In({ true: r, false: r }, l)
}
function EO(e, r, l) {
  return Zi(Ya, r, l)
}
function TO(e, r, l) {
  return Zi(Ya, r, l)
}
function G1(e, r, l = {}) {
  return Dn(e)
    ? hO(e.anyOf, r, l)
    : Gi(e)
      ? gO(e, r, l)
      : Pi(e)
        ? bO(e.const, r, l)
        : Bu(e)
          ? RO(e, r, l)
          : ls(e)
            ? EO(e, r, l)
            : is(e)
              ? TO(e, r, l)
              : u1(e)
                ? yO(e, r, l)
                : Pu(e)
                  ? vO(e, r, l)
                  : i1(e)
                    ? xO(e, r, l)
                    : Fu(e)
                      ? SO(e, r, l)
                      : Rn(l)
}
function gh(e) {
  return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]
}
function CO(e) {
  const r = gh(e)
  return r === $a ? Vi() : r === Ya ? Qi() : Vi({ pattern: r })
}
function Y1(e) {
  return e.patternProperties[gh(e)]
}
function wO(e, r) {
  return ((r.parameters = Ku(e, r.parameters)), (r.returns = so(e, r.returns)), r)
}
function MO(e, r) {
  return ((r.parameters = Ku(e, r.parameters)), (r.returns = so(e, r.returns)), r)
}
function OO(e, r) {
  return ((r.allOf = Ku(e, r.allOf)), r)
}
function AO(e, r) {
  return ((r.anyOf = Ku(e, r.anyOf)), r)
}
function NO(e, r) {
  return (yn(r.items) || (r.items = Ku(e, r.items)), r)
}
function zO(e, r) {
  return ((r.items = so(e, r.items)), r)
}
function IO(e, r) {
  return ((r.items = so(e, r.items)), r)
}
function DO(e, r) {
  return ((r.items = so(e, r.items)), r)
}
function jO(e, r) {
  return ((r.item = so(e, r.item)), r)
}
function kO(e, r) {
  const l = LO(e, r.properties)
  return { ...r, ...In(l) }
}
function _O(e, r) {
  const l = so(e, CO(r)),
    a = so(e, Y1(r)),
    u = G1(l, a)
  return { ...r, ...u }
}
function UO(e, r) {
  return r.index in e ? e[r.index] : pd()
}
function VO(e, r) {
  const l = Pg(r),
    a = $l(r),
    u = so(e, r)
  return l && a ? q1(u) : l && !a ? Zl(u) : !l && a ? Jl(u) : u
}
function LO(e, r) {
  return globalThis.Object.getOwnPropertyNames(r).reduce((l, a) => ({ ...l, [a]: VO(e, r[a]) }), {})
}
function Ku(e, r) {
  return r.map((l) => so(e, l))
}
function so(e, r) {
  return rs(r)
    ? wO(e, r)
    : os(r)
      ? MO(e, r)
      : $r(r)
        ? OO(e, r)
        : Dn(r)
          ? AO(e, r)
          : Yi(r)
            ? NO(e, r)
            : ts(r)
              ? zO(e, r)
              : Wf(r)
                ? IO(e, r)
                : td(r)
                  ? DO(e, r)
                  : nd(r)
                    ? jO(e, r)
                    : uo(r)
                      ? kO(e, r)
                      : rd(r)
                        ? _O(e, r)
                        : a1(r)
                          ? UO(e, r)
                          : r
}
function HO(e, r) {
  return so(r, Fg(e))
}
function BO(e) {
  return Ae({ [$e]: 'Integer', type: 'integer' }, e)
}
function FO(e, r, l) {
  return { [e]: cs(vn(e), r, Mr(l)) }
}
function PO(e, r, l) {
  return e.reduce((u, f) => ({ ...u, ...FO(f, r, l) }), {})
}
function qO(e, r, l) {
  return PO(e.keys, r, l)
}
function GO(e, r, l) {
  const a = qO(e, r, l)
  return Bn(a)
}
function YO(e) {
  const [r, l] = [e.slice(0, 1), e.slice(1)]
  return [r.toLowerCase(), l].join('')
}
function $O(e) {
  const [r, l] = [e.slice(0, 1), e.slice(1)]
  return [r.toUpperCase(), l].join('')
}
function KO(e) {
  return e.toUpperCase()
}
function XO(e) {
  return e.toLowerCase()
}
function QO(e, r, l) {
  const a = rh(e.pattern)
  if (!Iu(a)) return { ...e, pattern: $1(e.pattern, r) }
  const d = [...fd(a)].map((g) => vn(g)),
    m = K1(d, r),
    p = Fn(m)
  return E1([p], l)
}
function $1(e, r) {
  return typeof e == 'string'
    ? r === 'Uncapitalize'
      ? YO(e)
      : r === 'Capitalize'
        ? $O(e)
        : r === 'Uppercase'
          ? KO(e)
          : r === 'Lowercase'
            ? XO(e)
            : e
    : e.toString()
}
function K1(e, r) {
  return e.map((l) => cs(l, r))
}
function cs(e, r, l = {}) {
  return qi(e)
    ? GO(e, r, l)
    : Gi(e)
      ? QO(e, r, l)
      : Dn(e)
        ? Fn(K1(e.anyOf, r), l)
        : Pi(e)
          ? vn($1(e.const, r), l)
          : Ae(e, l)
}
function ZO(e, r = {}) {
  return cs(e, 'Capitalize', r)
}
function JO(e, r = {}) {
  return cs(e, 'Lowercase', r)
}
function WO(e, r = {}) {
  return cs(e, 'Uncapitalize', r)
}
function eA(e, r = {}) {
  return cs(e, 'Uppercase', r)
}
function tA(e, r, l) {
  const a = {}
  for (const u of globalThis.Object.getOwnPropertyNames(e)) a[u] = bd(e[u], r, Mr(l))
  return a
}
function nA(e, r, l) {
  return tA(e.properties, r, l)
}
function rA(e, r, l) {
  const a = nA(e, r, l)
  return Bn(a)
}
function oA(e, r) {
  return e.map((l) => hh(l, r))
}
function lA(e, r) {
  return e.map((l) => hh(l, r))
}
function iA(e, r) {
  const { [r]: l, ...a } = e
  return a
}
function aA(e, r) {
  return r.reduce((l, a) => iA(l, a), e)
}
function sA(e, r) {
  const l = Or(e, [Fr, '$id', 'required', 'properties']),
    a = aA(e.properties, r)
  return In(a, l)
}
function uA(e) {
  const r = e.reduce((l, a) => (s1(a) ? [...l, vn(a)] : l), [])
  return Fn(r)
}
function hh(e, r) {
  return $r(e) ? Wl(oA(e.allOf, r)) : Dn(e) ? Fn(lA(e.anyOf, r)) : uo(e) ? sA(e, r) : In({})
}
function bd(e, r, l) {
  const a = cr(r) ? uA(r) : r,
    u = Hl(r) ? Ql(r) : r,
    f = sr(e),
    d = sr(r)
  return zr(e)
    ? rA(e, u, l)
    : qi(r)
      ? mA(e, r, l)
      : f && d
        ? An('Omit', [e, a], l)
        : !f && d
          ? An('Omit', [e, a], l)
          : f && !d
            ? An('Omit', [e, a], l)
            : Ae({ ...hh(e, u), ...l })
}
function cA(e, r, l) {
  return { [r]: bd(e, [r], Mr(l)) }
}
function fA(e, r, l) {
  return r.reduce((a, u) => ({ ...a, ...cA(e, u, l) }), {})
}
function dA(e, r, l) {
  return fA(e, r.keys, l)
}
function mA(e, r, l) {
  const a = dA(e, r, l)
  return Bn(a)
}
function pA(e, r, l) {
  const a = {}
  for (const u of globalThis.Object.getOwnPropertyNames(e)) a[u] = yd(e[u], r, Mr(l))
  return a
}
function gA(e, r, l) {
  return pA(e.properties, r, l)
}
function hA(e, r, l) {
  const a = gA(e, r, l)
  return Bn(a)
}
function bA(e, r) {
  return e.map((l) => bh(l, r))
}
function yA(e, r) {
  return e.map((l) => bh(l, r))
}
function vA(e, r) {
  const l = {}
  for (const a of r) a in e && (l[a] = e[a])
  return l
}
function xA(e, r) {
  const l = Or(e, [Fr, '$id', 'required', 'properties']),
    a = vA(e.properties, r)
  return In(a, l)
}
function SA(e) {
  const r = e.reduce((l, a) => (s1(a) ? [...l, vn(a)] : l), [])
  return Fn(r)
}
function bh(e, r) {
  return $r(e) ? Wl(bA(e.allOf, r)) : Dn(e) ? Fn(yA(e.anyOf, r)) : uo(e) ? xA(e, r) : In({})
}
function yd(e, r, l) {
  const a = cr(r) ? SA(r) : r,
    u = Hl(r) ? Ql(r) : r,
    f = sr(e),
    d = sr(r)
  return zr(e)
    ? hA(e, u, l)
    : qi(r)
      ? CA(e, r, l)
      : f && d
        ? An('Pick', [e, a], l)
        : !f && d
          ? An('Pick', [e, a], l)
          : f && !d
            ? An('Pick', [e, a], l)
            : Ae({ ...bh(e, u), ...l })
}
function RA(e, r, l) {
  return { [r]: yd(e, [r], Mr(l)) }
}
function EA(e, r, l) {
  return r.reduce((a, u) => ({ ...a, ...RA(e, u, l) }), {})
}
function TA(e, r, l) {
  return EA(e, r.keys, l)
}
function CA(e, r, l) {
  const a = TA(e, r, l)
  return Bn(a)
}
function wA(e, r) {
  return An('Partial', [An(e, r)])
}
function MA(e) {
  return An('Partial', [Yu(e)])
}
function OA(e) {
  const r = {}
  for (const l of globalThis.Object.getOwnPropertyNames(e)) r[l] = Jl(e[l])
  return r
}
function AA(e) {
  const r = Or(e, [Fr, '$id', 'required', 'properties']),
    l = OA(e.properties)
  return In(l, r)
}
function rx(e) {
  return e.map((r) => X1(r))
}
function X1(e) {
  return ns(e)
    ? wA(e.target, e.parameters)
    : sr(e)
      ? MA(e.$ref)
      : $r(e)
        ? Wl(rx(e.allOf))
        : Dn(e)
          ? Fn(rx(e.anyOf))
          : uo(e)
            ? AA(e)
            : ed(e) || Bu(e) || ls(e) || Pi(e) || qg(e) || is(e) || Pu(e) || Gg(e) || Yg(e)
              ? e
              : In({})
}
function yh(e, r) {
  return zr(e) ? IA(e, r) : Ae({ ...X1(e), ...r })
}
function NA(e, r) {
  const l = {}
  for (const a of globalThis.Object.getOwnPropertyNames(e)) l[a] = yh(e[a], Mr(r))
  return l
}
function zA(e, r) {
  return NA(e.properties, r)
}
function IA(e, r) {
  const l = zA(e, r)
  return Bn(l)
}
function DA(e, r) {
  return An('Required', [An(e, r)])
}
function jA(e) {
  return An('Required', [Yu(e)])
}
function kA(e) {
  const r = {}
  for (const l of globalThis.Object.getOwnPropertyNames(e)) r[l] = Or(e[l], [ll])
  return r
}
function _A(e) {
  const r = Or(e, [Fr, '$id', 'required', 'properties']),
    l = kA(e.properties)
  return In(l, r)
}
function ox(e) {
  return e.map((r) => Q1(r))
}
function Q1(e) {
  return ns(e)
    ? DA(e.target, e.parameters)
    : sr(e)
      ? jA(e.$ref)
      : $r(e)
        ? Wl(ox(e.allOf))
        : Dn(e)
          ? Fn(ox(e.anyOf))
          : uo(e)
            ? _A(e)
            : ed(e) || Bu(e) || ls(e) || Pi(e) || qg(e) || is(e) || Pu(e) || Gg(e) || Yg(e)
              ? e
              : In({})
}
function vh(e, r) {
  return zr(e) ? LA(e, r) : Ae({ ...Q1(e), ...r })
}
function UA(e, r) {
  const l = {}
  for (const a of globalThis.Object.getOwnPropertyNames(e)) l[a] = vh(e[a], r)
  return l
}
function VA(e, r) {
  return UA(e.properties, r)
}
function LA(e, r) {
  const l = VA(e, r)
  return Bn(l)
}
function HA(e, r) {
  return r.map((l) => (sr(l) ? xh(e, l.$ref) : Ar(e, l)))
}
function xh(e, r) {
  return r in e ? (sr(e[r]) ? xh(e, e[r].$ref) : Ar(e, e[r])) : Rn()
}
function BA(e) {
  return md(e[0])
}
function FA(e) {
  return dd(e[0], e[1])
}
function PA(e) {
  return ah(e[0])
}
function qA(e) {
  return yh(e[0])
}
function GA(e) {
  return bd(e[0], e[1])
}
function YA(e) {
  return yd(e[0], e[1])
}
function $A(e) {
  return vh(e[0])
}
function KA(e, r, l) {
  const a = HA(e, l)
  return r === 'Awaited'
    ? BA(a)
    : r === 'Index'
      ? FA(a)
      : r === 'KeyOf'
        ? PA(a)
        : r === 'Partial'
          ? qA(a)
          : r === 'Omit'
            ? GA(a)
            : r === 'Pick'
              ? YA(a)
              : r === 'Required'
                ? $A(a)
                : Rn()
}
function XA(e, r) {
  return Wg(Ar(e, r))
}
function QA(e, r) {
  return eh(Ar(e, r))
}
function ZA(e, r, l) {
  return th(Xu(e, r), Ar(e, l))
}
function JA(e, r, l) {
  return Gu(Xu(e, r), Ar(e, l))
}
function WA(e, r) {
  return Wl(Xu(e, r))
}
function eN(e, r) {
  return lh(Ar(e, r))
}
function tN(e, r) {
  return In(globalThis.Object.keys(r).reduce((l, a) => ({ ...l, [a]: Ar(e, r[a]) }), {}))
}
function nN(e, r) {
  const [l, a] = [Ar(e, Y1(r)), gh(r)],
    u = Fg(r)
  return ((u.patternProperties[a] = l), u)
}
function rN(e, r) {
  return sr(r) ? { ...xh(e, r.$ref), [Fr]: r[Fr] } : r
}
function oN(e, r) {
  return ss(Xu(e, r))
}
function lN(e, r) {
  return Fn(Xu(e, r))
}
function Xu(e, r) {
  return r.map((l) => Ar(e, l))
}
function Ar(e, r) {
  return $l(r)
    ? Ae(Ar(e, Or(r, [ll])), r)
    : Pg(r)
      ? Ae(Ar(e, Or(r, [Hu])), r)
      : od(r)
        ? Ae(rN(e, r), r)
        : ts(r)
          ? Ae(XA(e, r.items), r)
          : Wf(r)
            ? Ae(QA(e, r.items), r)
            : ns(r)
              ? Ae(KA(e, r.target, r.parameters))
              : rs(r)
                ? Ae(ZA(e, r.parameters, r.returns), r)
                : os(r)
                  ? Ae(JA(e, r.parameters, r.returns), r)
                  : $r(r)
                    ? Ae(WA(e, r.allOf), r)
                    : td(r)
                      ? Ae(eN(e, r.items), r)
                      : uo(r)
                        ? Ae(tN(e, r.properties), r)
                        : rd(r)
                          ? Ae(nN(e, r))
                          : Yi(r)
                            ? Ae(oN(e, r.items || []), r)
                            : Dn(r)
                              ? Ae(lN(e, r.anyOf), r)
                              : r
}
function iN(e, r) {
  return r in e ? Ar(e, e[r]) : Rn()
}
function aN(e) {
  return globalThis.Object.getOwnPropertyNames(e).reduce((r, l) => ({ ...r, [l]: iN(e, l) }), {})
}
class sN {
  constructor(r) {
    const l = aN(r),
      a = this.WithIdentifiers(l)
    this.$defs = a
  }
  Import(r, l) {
    const a = { ...this.$defs, [r]: Ae(this.$defs[r], l) }
    return Ae({ [$e]: 'Import', $defs: a, $ref: r })
  }
  WithIdentifiers(r) {
    return globalThis.Object.getOwnPropertyNames(r).reduce(
      (l, a) => ({ ...l, [a]: { ...r[a], $id: a } }),
      {}
    )
  }
}
function uN(e) {
  return new sN(e)
}
function cN(e, r) {
  return Ae({ [$e]: 'Not', not: e }, r)
}
function fN(e, r) {
  return os(e) ? ss(e.parameters, r) : Rn()
}
let dN = 0
function mN(e, r = {}) {
  yn(r.$id) && (r.$id = `T${dN++}`)
  const l = Fg(e({ [$e]: 'This', $ref: `${r.$id}` }))
  return ((l.$id = r.$id), Ae({ [Jf]: 'Recursive', ...l }, r))
}
function pN(e, r) {
  const l = un(e) ? new globalThis.RegExp(e) : e
  return Ae({ [$e]: 'RegExp', type: 'RegExp', source: l.source, flags: l.flags }, r)
}
function gN(e) {
  return $r(e) ? e.allOf : Dn(e) ? e.anyOf : Yi(e) ? (e.items ?? []) : []
}
function hN(e) {
  return gN(e)
}
function bN(e, r) {
  return os(e) ? Ae(e.returns, r) : Rn(r)
}
class yN {
  constructor(r) {
    this.schema = r
  }
  Decode(r) {
    return new vN(this.schema, r)
  }
}
class vN {
  constructor(r, l) {
    ;((this.schema = r), (this.decode = l))
  }
  EncodeTransform(r, l) {
    const f = { Encode: (d) => l[Fr].Encode(r(d)), Decode: (d) => this.decode(l[Fr].Decode(d)) }
    return { ...l, [Fr]: f }
  }
  EncodeSchema(r, l) {
    const a = { Decode: this.decode, Encode: r }
    return { ...l, [Fr]: a }
  }
  Encode(r) {
    return od(this.schema)
      ? this.EncodeTransform(r, this.schema)
      : this.EncodeSchema(r, this.schema)
  }
}
function xN(e) {
  return new yN(e)
}
function SN(e = {}) {
  return Ae({ [$e]: e[$e] ?? 'Unsafe' }, e)
}
function RN(e) {
  return Ae({ [$e]: 'Void', type: 'void' }, e)
}
const EN = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Any: Nu,
        Argument: EC,
        Array: Wg,
        AsyncIterator: eh,
        Awaited: md,
        BigInt: oh,
        Boolean: S1,
        Capitalize: ZO,
        Composite: oM,
        Const: aM,
        Constructor: th,
        ConstructorParameters: sM,
        Date: I1,
        Enum: uM,
        Exclude: dh,
        Extends: fh,
        Extract: mh,
        Function: Gu,
        Index: dd,
        InstanceType: pO,
        Instantiate: HO,
        Integer: BO,
        Intersect: Wl,
        Iterator: lh,
        KeyOf: ah,
        Literal: vn,
        Lowercase: JO,
        Mapped: ww,
        Module: uN,
        Never: Rn,
        Not: cN,
        Null: D1,
        Number: Qi,
        Object: In,
        Omit: bd,
        Optional: Jl,
        Parameters: fN,
        Partial: yh,
        Pick: yd,
        Promise: M1,
        Readonly: Zl,
        ReadonlyOptional: q1,
        Record: G1,
        Recursive: mN,
        Ref: Yu,
        RegExp: pN,
        Required: vh,
        Rest: hN,
        ReturnType: bN,
        String: Vi,
        Symbol: j1,
        TemplateLiteral: E1,
        Transform: xN,
        Tuple: ss,
        Uint8Array: _1,
        Uncapitalize: WO,
        Undefined: k1,
        Union: Fn,
        Unknown: pd,
        Unsafe: SN,
        Uppercase: eA,
        Void: RN,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  lx = EN,
  TN = lx.Object({ message: lx.String() })
function Z1(e) {
  var r,
    l,
    a = ''
  if (typeof e == 'string' || typeof e == 'number') a += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var u = e.length
      for (r = 0; r < u; r++) e[r] && (l = Z1(e[r])) && (a && (a += ' '), (a += l))
    } else for (l in e) e[l] && (a && (a += ' '), (a += l))
  return a
}
function J1() {
  for (var e, r, l = 0, a = '', u = arguments.length; l < u; l++)
    (e = arguments[l]) && (r = Z1(e)) && (a && (a += ' '), (a += r))
  return a
}
const CN = (e, r) => {
    const l = new Array(e.length + r.length)
    for (let a = 0; a < e.length; a++) l[a] = e[a]
    for (let a = 0; a < r.length; a++) l[e.length + a] = r[a]
    return l
  },
  wN = (e, r) => ({ classGroupId: e, validator: r }),
  W1 = (e = new Map(), r = null, l) => ({ nextPart: e, validators: r, classGroupId: l }),
  Lf = '-',
  ix = [],
  MN = 'arbitrary..',
  ON = (e) => {
    const r = NN(e),
      { conflictingClassGroups: l, conflictingClassGroupModifiers: a } = e
    return {
      getClassGroupId: (d) => {
        if (d.startsWith('[') && d.endsWith(']')) return AN(d)
        const m = d.split(Lf),
          p = m[0] === '' && m.length > 1 ? 1 : 0
        return eS(m, p, r)
      },
      getConflictingClassGroupIds: (d, m) => {
        if (m) {
          const p = a[d],
            g = l[d]
          return p ? (g ? CN(g, p) : p) : g || ix
        }
        return l[d] || ix
      },
    }
  },
  eS = (e, r, l) => {
    if (e.length - r === 0) return l.classGroupId
    const u = e[r],
      f = l.nextPart.get(u)
    if (f) {
      const g = eS(e, r + 1, f)
      if (g) return g
    }
    const d = l.validators
    if (d === null) return
    const m = r === 0 ? e.join(Lf) : e.slice(r).join(Lf),
      p = d.length
    for (let g = 0; g < p; g++) {
      const v = d[g]
      if (v.validator(m)) return v.classGroupId
    }
  },
  AN = (e) =>
    e.slice(1, -1).indexOf(':') === -1
      ? void 0
      : (() => {
          const r = e.slice(1, -1),
            l = r.indexOf(':'),
            a = r.slice(0, l)
          return a ? MN + a : void 0
        })(),
  NN = (e) => {
    const { theme: r, classGroups: l } = e
    return zN(l, r)
  },
  zN = (e, r) => {
    const l = W1()
    for (const a in e) {
      const u = e[a]
      Sh(u, l, a, r)
    }
    return l
  },
  Sh = (e, r, l, a) => {
    const u = e.length
    for (let f = 0; f < u; f++) {
      const d = e[f]
      IN(d, r, l, a)
    }
  },
  IN = (e, r, l, a) => {
    if (typeof e == 'string') {
      DN(e, r, l)
      return
    }
    if (typeof e == 'function') {
      jN(e, r, l, a)
      return
    }
    kN(e, r, l, a)
  },
  DN = (e, r, l) => {
    const a = e === '' ? r : tS(r, e)
    a.classGroupId = l
  },
  jN = (e, r, l, a) => {
    if (_N(e)) {
      Sh(e(a), r, l, a)
      return
    }
    ;(r.validators === null && (r.validators = []), r.validators.push(wN(l, e)))
  },
  kN = (e, r, l, a) => {
    const u = Object.entries(e),
      f = u.length
    for (let d = 0; d < f; d++) {
      const [m, p] = u[d]
      Sh(p, tS(r, m), l, a)
    }
  },
  tS = (e, r) => {
    let l = e
    const a = r.split(Lf),
      u = a.length
    for (let f = 0; f < u; f++) {
      const d = a[f]
      let m = l.nextPart.get(d)
      ;(m || ((m = W1()), l.nextPart.set(d, m)), (l = m))
    }
    return l
  },
  _N = (e) => 'isThemeGetter' in e && e.isThemeGetter === !0,
  UN = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} }
    let r = 0,
      l = Object.create(null),
      a = Object.create(null)
    const u = (f, d) => {
      ;((l[f] = d), r++, r > e && ((r = 0), (a = l), (l = Object.create(null))))
    }
    return {
      get(f) {
        let d = l[f]
        if (d !== void 0) return d
        if ((d = a[f]) !== void 0) return (u(f, d), d)
      },
      set(f, d) {
        f in l ? (l[f] = d) : u(f, d)
      },
    }
  },
  Cg = '!',
  ax = ':',
  VN = [],
  sx = (e, r, l, a, u) => ({
    modifiers: e,
    hasImportantModifier: r,
    baseClassName: l,
    maybePostfixModifierPosition: a,
    isExternal: u,
  }),
  LN = (e) => {
    const { prefix: r, experimentalParseClassName: l } = e
    let a = (u) => {
      const f = []
      let d = 0,
        m = 0,
        p = 0,
        g
      const v = u.length
      for (let S = 0; S < v; S++) {
        const N = u[S]
        if (d === 0 && m === 0) {
          if (N === ax) {
            ;(f.push(u.slice(p, S)), (p = S + 1))
            continue
          }
          if (N === '/') {
            g = S
            continue
          }
        }
        N === '[' ? d++ : N === ']' ? d-- : N === '(' ? m++ : N === ')' && m--
      }
      const y = f.length === 0 ? u : u.slice(p)
      let x = y,
        T = !1
      y.endsWith(Cg)
        ? ((x = y.slice(0, -1)), (T = !0))
        : y.startsWith(Cg) && ((x = y.slice(1)), (T = !0))
      const w = g && g > p ? g - p : void 0
      return sx(f, T, x, w)
    }
    if (r) {
      const u = r + ax,
        f = a
      a = (d) => (d.startsWith(u) ? f(d.slice(u.length)) : sx(VN, !1, d, void 0, !0))
    }
    if (l) {
      const u = a
      a = (f) => l({ className: f, parseClassName: u })
    }
    return a
  },
  HN = (e) => {
    const r = new Map()
    return (
      e.orderSensitiveModifiers.forEach((l, a) => {
        r.set(l, 1e6 + a)
      }),
      (l) => {
        const a = []
        let u = []
        for (let f = 0; f < l.length; f++) {
          const d = l[f],
            m = d[0] === '[',
            p = r.has(d)
          m || p ? (u.length > 0 && (u.sort(), a.push(...u), (u = [])), a.push(d)) : u.push(d)
        }
        return (u.length > 0 && (u.sort(), a.push(...u)), a)
      }
    )
  },
  BN = (e) => ({ cache: UN(e.cacheSize), parseClassName: LN(e), sortModifiers: HN(e), ...ON(e) }),
  FN = /\s+/,
  PN = (e, r) => {
    const {
        parseClassName: l,
        getClassGroupId: a,
        getConflictingClassGroupIds: u,
        sortModifiers: f,
      } = r,
      d = [],
      m = e.trim().split(FN)
    let p = ''
    for (let g = m.length - 1; g >= 0; g -= 1) {
      const v = m[g],
        {
          isExternal: y,
          modifiers: x,
          hasImportantModifier: T,
          baseClassName: w,
          maybePostfixModifierPosition: S,
        } = l(v)
      if (y) {
        p = v + (p.length > 0 ? ' ' + p : p)
        continue
      }
      let N = !!S,
        A = a(N ? w.substring(0, S) : w)
      if (!A) {
        if (!N) {
          p = v + (p.length > 0 ? ' ' + p : p)
          continue
        }
        if (((A = a(w)), !A)) {
          p = v + (p.length > 0 ? ' ' + p : p)
          continue
        }
        N = !1
      }
      const R = x.length === 0 ? '' : x.length === 1 ? x[0] : f(x).join(':'),
        I = T ? R + Cg : R,
        j = I + A
      if (d.indexOf(j) > -1) continue
      d.push(j)
      const M = u(A, N)
      for (let V = 0; V < M.length; ++V) {
        const k = M[V]
        d.push(I + k)
      }
      p = v + (p.length > 0 ? ' ' + p : p)
    }
    return p
  },
  qN = (...e) => {
    let r = 0,
      l,
      a,
      u = ''
    for (; r < e.length; ) (l = e[r++]) && (a = nS(l)) && (u && (u += ' '), (u += a))
    return u
  },
  nS = (e) => {
    if (typeof e == 'string') return e
    let r,
      l = ''
    for (let a = 0; a < e.length; a++) e[a] && (r = nS(e[a])) && (l && (l += ' '), (l += r))
    return l
  },
  GN = (e, ...r) => {
    let l, a, u, f
    const d = (p) => {
        const g = r.reduce((v, y) => y(v), e())
        return ((l = BN(g)), (a = l.cache.get), (u = l.cache.set), (f = m), m(p))
      },
      m = (p) => {
        const g = a(p)
        if (g) return g
        const v = PN(p, l)
        return (u(p, v), v)
      }
    return ((f = d), (...p) => f(qN(...p)))
  },
  YN = [],
  wn = (e) => {
    const r = (l) => l[e] || YN
    return ((r.isThemeGetter = !0), r)
  },
  rS = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  oS = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  $N = /^\d+\/\d+$/,
  KN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  XN =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  QN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  ZN = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  JN =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  La = (e) => $N.test(e),
  ut = (e) => !!e && !Number.isNaN(Number(e)),
  Ul = (e) => !!e && Number.isInteger(Number(e)),
  tg = (e) => e.endsWith('%') && ut(e.slice(0, -1)),
  Jo = (e) => KN.test(e),
  WN = () => !0,
  ez = (e) => XN.test(e) && !QN.test(e),
  lS = () => !1,
  tz = (e) => ZN.test(e),
  nz = (e) => JN.test(e),
  rz = (e) => !Ue(e) && !Ve(e),
  oz = (e) => fs(e, sS, lS),
  Ue = (e) => rS.test(e),
  Ci = (e) => fs(e, uS, ez),
  ng = (e) => fs(e, uz, ut),
  ux = (e) => fs(e, iS, lS),
  lz = (e) => fs(e, aS, nz),
  gf = (e) => fs(e, cS, tz),
  Ve = (e) => oS.test(e),
  du = (e) => ds(e, uS),
  iz = (e) => ds(e, cz),
  cx = (e) => ds(e, iS),
  az = (e) => ds(e, sS),
  sz = (e) => ds(e, aS),
  hf = (e) => ds(e, cS, !0),
  fs = (e, r, l) => {
    const a = rS.exec(e)
    return a ? (a[1] ? r(a[1]) : l(a[2])) : !1
  },
  ds = (e, r, l = !1) => {
    const a = oS.exec(e)
    return a ? (a[1] ? r(a[1]) : l) : !1
  },
  iS = (e) => e === 'position' || e === 'percentage',
  aS = (e) => e === 'image' || e === 'url',
  sS = (e) => e === 'length' || e === 'size' || e === 'bg-size',
  uS = (e) => e === 'length',
  uz = (e) => e === 'number',
  cz = (e) => e === 'family-name',
  cS = (e) => e === 'shadow',
  fz = () => {
    const e = wn('color'),
      r = wn('font'),
      l = wn('text'),
      a = wn('font-weight'),
      u = wn('tracking'),
      f = wn('leading'),
      d = wn('breakpoint'),
      m = wn('container'),
      p = wn('spacing'),
      g = wn('radius'),
      v = wn('shadow'),
      y = wn('inset-shadow'),
      x = wn('text-shadow'),
      T = wn('drop-shadow'),
      w = wn('blur'),
      S = wn('perspective'),
      N = wn('aspect'),
      A = wn('ease'),
      R = wn('animate'),
      I = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
      j = () => [
        'center',
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'left-top',
        'top-right',
        'right-top',
        'bottom-right',
        'right-bottom',
        'bottom-left',
        'left-bottom',
      ],
      M = () => [...j(), Ve, Ue],
      V = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      k = () => ['auto', 'contain', 'none'],
      _ = () => [Ve, Ue, p],
      ee = () => [La, 'full', 'auto', ..._()],
      ie = () => [Ul, 'none', 'subgrid', Ve, Ue],
      Q = () => ['auto', { span: ['full', Ul, Ve, Ue] }, Ul, Ve, Ue],
      le = () => [Ul, 'auto', Ve, Ue],
      q = () => ['auto', 'min', 'max', 'fr', Ve, Ue],
      Y = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
        'baseline',
        'center-safe',
        'end-safe',
      ],
      F = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'],
      z = () => ['auto', ..._()],
      L = () => [
        La,
        'auto',
        'full',
        'dvw',
        'dvh',
        'lvw',
        'lvh',
        'svw',
        'svh',
        'min',
        'max',
        'fit',
        ..._(),
      ],
      D = () => [e, Ve, Ue],
      $ = () => [...j(), cx, ux, { position: [Ve, Ue] }],
      oe = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
      O = () => ['auto', 'cover', 'contain', az, oz, { size: [Ve, Ue] }],
      P = () => [tg, du, Ci],
      H = () => ['', 'none', 'full', g, Ve, Ue],
      X = () => ['', ut, du, Ci],
      te = () => ['solid', 'dashed', 'dotted', 'double'],
      re = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      W = () => [ut, tg, cx, ux],
      de = () => ['', 'none', w, Ve, Ue],
      ve = () => ['none', ut, Ve, Ue],
      ue = () => ['none', ut, Ve, Ue],
      K = () => [ut, Ve, Ue],
      xe = () => [La, 'full', ..._()]
    return {
      cacheSize: 500,
      theme: {
        animate: ['spin', 'ping', 'pulse', 'bounce'],
        aspect: ['video'],
        blur: [Jo],
        breakpoint: [Jo],
        color: [WN],
        container: [Jo],
        'drop-shadow': [Jo],
        ease: ['in', 'out', 'in-out'],
        font: [rz],
        'font-weight': [
          'thin',
          'extralight',
          'light',
          'normal',
          'medium',
          'semibold',
          'bold',
          'extrabold',
          'black',
        ],
        'inset-shadow': [Jo],
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
        perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
        radius: [Jo],
        shadow: [Jo],
        spacing: ['px', ut],
        text: [Jo],
        'text-shadow': [Jo],
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', La, Ue, Ve, N] }],
        container: ['container'],
        columns: [{ columns: [ut, Ue, Ve, m] }],
        'break-after': [{ 'break-after': I() }],
        'break-before': [{ 'break-before': I() }],
        'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        sr: ['sr-only', 'not-sr-only'],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
        'object-position': [{ object: M() }],
        overflow: [{ overflow: V() }],
        'overflow-x': [{ 'overflow-x': V() }],
        'overflow-y': [{ 'overflow-y': V() }],
        overscroll: [{ overscroll: k() }],
        'overscroll-x': [{ 'overscroll-x': k() }],
        'overscroll-y': [{ 'overscroll-y': k() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: ee() }],
        'inset-x': [{ 'inset-x': ee() }],
        'inset-y': [{ 'inset-y': ee() }],
        start: [{ start: ee() }],
        end: [{ end: ee() }],
        top: [{ top: ee() }],
        right: [{ right: ee() }],
        bottom: [{ bottom: ee() }],
        left: [{ left: ee() }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: [Ul, 'auto', Ve, Ue] }],
        basis: [{ basis: [La, 'full', 'auto', m, ..._()] }],
        'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
        'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
        flex: [{ flex: [ut, La, 'auto', 'initial', 'none', Ue] }],
        grow: [{ grow: ['', ut, Ve, Ue] }],
        shrink: [{ shrink: ['', ut, Ve, Ue] }],
        order: [{ order: [Ul, 'first', 'last', 'none', Ve, Ue] }],
        'grid-cols': [{ 'grid-cols': ie() }],
        'col-start-end': [{ col: Q() }],
        'col-start': [{ 'col-start': le() }],
        'col-end': [{ 'col-end': le() }],
        'grid-rows': [{ 'grid-rows': ie() }],
        'row-start-end': [{ row: Q() }],
        'row-start': [{ 'row-start': le() }],
        'row-end': [{ 'row-end': le() }],
        'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
        'auto-cols': [{ 'auto-cols': q() }],
        'auto-rows': [{ 'auto-rows': q() }],
        gap: [{ gap: _() }],
        'gap-x': [{ 'gap-x': _() }],
        'gap-y': [{ 'gap-y': _() }],
        'justify-content': [{ justify: [...Y(), 'normal'] }],
        'justify-items': [{ 'justify-items': [...F(), 'normal'] }],
        'justify-self': [{ 'justify-self': ['auto', ...F()] }],
        'align-content': [{ content: ['normal', ...Y()] }],
        'align-items': [{ items: [...F(), { baseline: ['', 'last'] }] }],
        'align-self': [{ self: ['auto', ...F(), { baseline: ['', 'last'] }] }],
        'place-content': [{ 'place-content': Y() }],
        'place-items': [{ 'place-items': [...F(), 'baseline'] }],
        'place-self': [{ 'place-self': ['auto', ...F()] }],
        p: [{ p: _() }],
        px: [{ px: _() }],
        py: [{ py: _() }],
        ps: [{ ps: _() }],
        pe: [{ pe: _() }],
        pt: [{ pt: _() }],
        pr: [{ pr: _() }],
        pb: [{ pb: _() }],
        pl: [{ pl: _() }],
        m: [{ m: z() }],
        mx: [{ mx: z() }],
        my: [{ my: z() }],
        ms: [{ ms: z() }],
        me: [{ me: z() }],
        mt: [{ mt: z() }],
        mr: [{ mr: z() }],
        mb: [{ mb: z() }],
        ml: [{ ml: z() }],
        'space-x': [{ 'space-x': _() }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': _() }],
        'space-y-reverse': ['space-y-reverse'],
        size: [{ size: L() }],
        w: [{ w: [m, 'screen', ...L()] }],
        'min-w': [{ 'min-w': [m, 'screen', 'none', ...L()] }],
        'max-w': [{ 'max-w': [m, 'screen', 'none', 'prose', { screen: [d] }, ...L()] }],
        h: [{ h: ['screen', 'lh', ...L()] }],
        'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...L()] }],
        'max-h': [{ 'max-h': ['screen', 'lh', ...L()] }],
        'font-size': [{ text: ['base', l, du, Ci] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [{ font: [a, Ve, ng] }],
        'font-stretch': [
          {
            'font-stretch': [
              'ultra-condensed',
              'extra-condensed',
              'condensed',
              'semi-condensed',
              'normal',
              'semi-expanded',
              'expanded',
              'extra-expanded',
              'ultra-expanded',
              tg,
              Ue,
            ],
          },
        ],
        'font-family': [{ font: [iz, Ue, r] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: [u, Ve, Ue] }],
        'line-clamp': [{ 'line-clamp': [ut, 'none', Ve, ng] }],
        leading: [{ leading: [f, ..._()] }],
        'list-image': [{ 'list-image': ['none', Ve, Ue] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'list-style-type': [{ list: ['disc', 'decimal', 'none', Ve, Ue] }],
        'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
        'placeholder-color': [{ placeholder: D() }],
        'text-color': [{ text: D() }],
        'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
        'text-decoration-style': [{ decoration: [...te(), 'wavy'] }],
        'text-decoration-thickness': [{ decoration: [ut, 'from-font', 'auto', Ve, Ci] }],
        'text-decoration-color': [{ decoration: D() }],
        'underline-offset': [{ 'underline-offset': [ut, 'auto', Ve, Ue] }],
        'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: _() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              Ve,
              Ue,
            ],
          },
        ],
        whitespace: [
          { whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', Ve, Ue] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: $() }],
        'bg-repeat': [{ bg: oe() }],
        'bg-size': [{ bg: O() }],
        'bg-image': [
          {
            bg: [
              'none',
              {
                linear: [{ to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, Ul, Ve, Ue],
                radial: ['', Ve, Ue],
                conic: [Ul, Ve, Ue],
              },
              sz,
              lz,
            ],
          },
        ],
        'bg-color': [{ bg: D() }],
        'gradient-from-pos': [{ from: P() }],
        'gradient-via-pos': [{ via: P() }],
        'gradient-to-pos': [{ to: P() }],
        'gradient-from': [{ from: D() }],
        'gradient-via': [{ via: D() }],
        'gradient-to': [{ to: D() }],
        rounded: [{ rounded: H() }],
        'rounded-s': [{ 'rounded-s': H() }],
        'rounded-e': [{ 'rounded-e': H() }],
        'rounded-t': [{ 'rounded-t': H() }],
        'rounded-r': [{ 'rounded-r': H() }],
        'rounded-b': [{ 'rounded-b': H() }],
        'rounded-l': [{ 'rounded-l': H() }],
        'rounded-ss': [{ 'rounded-ss': H() }],
        'rounded-se': [{ 'rounded-se': H() }],
        'rounded-ee': [{ 'rounded-ee': H() }],
        'rounded-es': [{ 'rounded-es': H() }],
        'rounded-tl': [{ 'rounded-tl': H() }],
        'rounded-tr': [{ 'rounded-tr': H() }],
        'rounded-br': [{ 'rounded-br': H() }],
        'rounded-bl': [{ 'rounded-bl': H() }],
        'border-w': [{ border: X() }],
        'border-w-x': [{ 'border-x': X() }],
        'border-w-y': [{ 'border-y': X() }],
        'border-w-s': [{ 'border-s': X() }],
        'border-w-e': [{ 'border-e': X() }],
        'border-w-t': [{ 'border-t': X() }],
        'border-w-r': [{ 'border-r': X() }],
        'border-w-b': [{ 'border-b': X() }],
        'border-w-l': [{ 'border-l': X() }],
        'divide-x': [{ 'divide-x': X() }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': X() }],
        'divide-y-reverse': ['divide-y-reverse'],
        'border-style': [{ border: [...te(), 'hidden', 'none'] }],
        'divide-style': [{ divide: [...te(), 'hidden', 'none'] }],
        'border-color': [{ border: D() }],
        'border-color-x': [{ 'border-x': D() }],
        'border-color-y': [{ 'border-y': D() }],
        'border-color-s': [{ 'border-s': D() }],
        'border-color-e': [{ 'border-e': D() }],
        'border-color-t': [{ 'border-t': D() }],
        'border-color-r': [{ 'border-r': D() }],
        'border-color-b': [{ 'border-b': D() }],
        'border-color-l': [{ 'border-l': D() }],
        'divide-color': [{ divide: D() }],
        'outline-style': [{ outline: [...te(), 'none', 'hidden'] }],
        'outline-offset': [{ 'outline-offset': [ut, Ve, Ue] }],
        'outline-w': [{ outline: ['', ut, du, Ci] }],
        'outline-color': [{ outline: D() }],
        shadow: [{ shadow: ['', 'none', v, hf, gf] }],
        'shadow-color': [{ shadow: D() }],
        'inset-shadow': [{ 'inset-shadow': ['none', y, hf, gf] }],
        'inset-shadow-color': [{ 'inset-shadow': D() }],
        'ring-w': [{ ring: X() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: D() }],
        'ring-offset-w': [{ 'ring-offset': [ut, Ci] }],
        'ring-offset-color': [{ 'ring-offset': D() }],
        'inset-ring-w': [{ 'inset-ring': X() }],
        'inset-ring-color': [{ 'inset-ring': D() }],
        'text-shadow': [{ 'text-shadow': ['none', x, hf, gf] }],
        'text-shadow-color': [{ 'text-shadow': D() }],
        opacity: [{ opacity: [ut, Ve, Ue] }],
        'mix-blend': [{ 'mix-blend': [...re(), 'plus-darker', 'plus-lighter'] }],
        'bg-blend': [{ 'bg-blend': re() }],
        'mask-clip': [
          { 'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] },
          'mask-no-clip',
        ],
        'mask-composite': [{ mask: ['add', 'subtract', 'intersect', 'exclude'] }],
        'mask-image-linear-pos': [{ 'mask-linear': [ut] }],
        'mask-image-linear-from-pos': [{ 'mask-linear-from': W() }],
        'mask-image-linear-to-pos': [{ 'mask-linear-to': W() }],
        'mask-image-linear-from-color': [{ 'mask-linear-from': D() }],
        'mask-image-linear-to-color': [{ 'mask-linear-to': D() }],
        'mask-image-t-from-pos': [{ 'mask-t-from': W() }],
        'mask-image-t-to-pos': [{ 'mask-t-to': W() }],
        'mask-image-t-from-color': [{ 'mask-t-from': D() }],
        'mask-image-t-to-color': [{ 'mask-t-to': D() }],
        'mask-image-r-from-pos': [{ 'mask-r-from': W() }],
        'mask-image-r-to-pos': [{ 'mask-r-to': W() }],
        'mask-image-r-from-color': [{ 'mask-r-from': D() }],
        'mask-image-r-to-color': [{ 'mask-r-to': D() }],
        'mask-image-b-from-pos': [{ 'mask-b-from': W() }],
        'mask-image-b-to-pos': [{ 'mask-b-to': W() }],
        'mask-image-b-from-color': [{ 'mask-b-from': D() }],
        'mask-image-b-to-color': [{ 'mask-b-to': D() }],
        'mask-image-l-from-pos': [{ 'mask-l-from': W() }],
        'mask-image-l-to-pos': [{ 'mask-l-to': W() }],
        'mask-image-l-from-color': [{ 'mask-l-from': D() }],
        'mask-image-l-to-color': [{ 'mask-l-to': D() }],
        'mask-image-x-from-pos': [{ 'mask-x-from': W() }],
        'mask-image-x-to-pos': [{ 'mask-x-to': W() }],
        'mask-image-x-from-color': [{ 'mask-x-from': D() }],
        'mask-image-x-to-color': [{ 'mask-x-to': D() }],
        'mask-image-y-from-pos': [{ 'mask-y-from': W() }],
        'mask-image-y-to-pos': [{ 'mask-y-to': W() }],
        'mask-image-y-from-color': [{ 'mask-y-from': D() }],
        'mask-image-y-to-color': [{ 'mask-y-to': D() }],
        'mask-image-radial': [{ 'mask-radial': [Ve, Ue] }],
        'mask-image-radial-from-pos': [{ 'mask-radial-from': W() }],
        'mask-image-radial-to-pos': [{ 'mask-radial-to': W() }],
        'mask-image-radial-from-color': [{ 'mask-radial-from': D() }],
        'mask-image-radial-to-color': [{ 'mask-radial-to': D() }],
        'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
        'mask-image-radial-size': [
          { 'mask-radial': [{ closest: ['side', 'corner'], farthest: ['side', 'corner'] }] },
        ],
        'mask-image-radial-pos': [{ 'mask-radial-at': j() }],
        'mask-image-conic-pos': [{ 'mask-conic': [ut] }],
        'mask-image-conic-from-pos': [{ 'mask-conic-from': W() }],
        'mask-image-conic-to-pos': [{ 'mask-conic-to': W() }],
        'mask-image-conic-from-color': [{ 'mask-conic-from': D() }],
        'mask-image-conic-to-color': [{ 'mask-conic-to': D() }],
        'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
        'mask-origin': [
          { 'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] },
        ],
        'mask-position': [{ mask: $() }],
        'mask-repeat': [{ mask: oe() }],
        'mask-size': [{ mask: O() }],
        'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
        'mask-image': [{ mask: ['none', Ve, Ue] }],
        filter: [{ filter: ['', 'none', Ve, Ue] }],
        blur: [{ blur: de() }],
        brightness: [{ brightness: [ut, Ve, Ue] }],
        contrast: [{ contrast: [ut, Ve, Ue] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', T, hf, gf] }],
        'drop-shadow-color': [{ 'drop-shadow': D() }],
        grayscale: [{ grayscale: ['', ut, Ve, Ue] }],
        'hue-rotate': [{ 'hue-rotate': [ut, Ve, Ue] }],
        invert: [{ invert: ['', ut, Ve, Ue] }],
        saturate: [{ saturate: [ut, Ve, Ue] }],
        sepia: [{ sepia: ['', ut, Ve, Ue] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none', Ve, Ue] }],
        'backdrop-blur': [{ 'backdrop-blur': de() }],
        'backdrop-brightness': [{ 'backdrop-brightness': [ut, Ve, Ue] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [ut, Ve, Ue] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': ['', ut, Ve, Ue] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [ut, Ve, Ue] }],
        'backdrop-invert': [{ 'backdrop-invert': ['', ut, Ve, Ue] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [ut, Ve, Ue] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [ut, Ve, Ue] }],
        'backdrop-sepia': [{ 'backdrop-sepia': ['', ut, Ve, Ue] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': _() }],
        'border-spacing-x': [{ 'border-spacing-x': _() }],
        'border-spacing-y': [{ 'border-spacing-y': _() }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          { transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', Ve, Ue] },
        ],
        'transition-behavior': [{ transition: ['normal', 'discrete'] }],
        duration: [{ duration: [ut, 'initial', Ve, Ue] }],
        ease: [{ ease: ['linear', 'initial', A, Ve, Ue] }],
        delay: [{ delay: [ut, Ve, Ue] }],
        animate: [{ animate: ['none', R, Ve, Ue] }],
        backface: [{ backface: ['hidden', 'visible'] }],
        perspective: [{ perspective: [S, Ve, Ue] }],
        'perspective-origin': [{ 'perspective-origin': M() }],
        rotate: [{ rotate: ve() }],
        'rotate-x': [{ 'rotate-x': ve() }],
        'rotate-y': [{ 'rotate-y': ve() }],
        'rotate-z': [{ 'rotate-z': ve() }],
        scale: [{ scale: ue() }],
        'scale-x': [{ 'scale-x': ue() }],
        'scale-y': [{ 'scale-y': ue() }],
        'scale-z': [{ 'scale-z': ue() }],
        'scale-3d': ['scale-3d'],
        skew: [{ skew: K() }],
        'skew-x': [{ 'skew-x': K() }],
        'skew-y': [{ 'skew-y': K() }],
        transform: [{ transform: [Ve, Ue, '', 'none', 'gpu', 'cpu'] }],
        'transform-origin': [{ origin: M() }],
        'transform-style': [{ transform: ['3d', 'flat'] }],
        translate: [{ translate: xe() }],
        'translate-x': [{ 'translate-x': xe() }],
        'translate-y': [{ 'translate-y': xe() }],
        'translate-z': [{ 'translate-z': xe() }],
        'translate-none': ['translate-none'],
        accent: [{ accent: D() }],
        appearance: [{ appearance: ['none', 'auto'] }],
        'caret-color': [{ caret: D() }],
        'color-scheme': [
          { scheme: ['normal', 'dark', 'light', 'light-dark', 'only-dark', 'only-light'] },
        ],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              Ve,
              Ue,
            ],
          },
        ],
        'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
        'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
        resize: [{ resize: ['none', '', 'y', 'x'] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': _() }],
        'scroll-mx': [{ 'scroll-mx': _() }],
        'scroll-my': [{ 'scroll-my': _() }],
        'scroll-ms': [{ 'scroll-ms': _() }],
        'scroll-me': [{ 'scroll-me': _() }],
        'scroll-mt': [{ 'scroll-mt': _() }],
        'scroll-mr': [{ 'scroll-mr': _() }],
        'scroll-mb': [{ 'scroll-mb': _() }],
        'scroll-ml': [{ 'scroll-ml': _() }],
        'scroll-p': [{ 'scroll-p': _() }],
        'scroll-px': [{ 'scroll-px': _() }],
        'scroll-py': [{ 'scroll-py': _() }],
        'scroll-ps': [{ 'scroll-ps': _() }],
        'scroll-pe': [{ 'scroll-pe': _() }],
        'scroll-pt': [{ 'scroll-pt': _() }],
        'scroll-pr': [{ 'scroll-pr': _() }],
        'scroll-pb': [{ 'scroll-pb': _() }],
        'scroll-pl': [{ 'scroll-pl': _() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', Ve, Ue] }],
        fill: [{ fill: ['none', ...D()] }],
        'stroke-w': [{ stroke: [ut, du, Ci, ng] }],
        stroke: [{ stroke: ['none', ...D()] }],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-x',
          'border-w-y',
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-x',
          'border-color-y',
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        translate: ['translate-x', 'translate-y', 'translate-none'],
        'translate-none': ['translate', 'translate-x', 'translate-y', 'translate-z'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
      orderSensitiveModifiers: [
        '*',
        '**',
        'after',
        'backdrop',
        'before',
        'details-content',
        'file',
        'first-letter',
        'first-line',
        'marker',
        'placeholder',
        'selection',
      ],
    }
  },
  dz = GN(fz)
function Ye(...e) {
  return dz(J1(e))
}
function mz({ className: e, ...r }) {
  return E.jsx('div', {
    className: 'bg-background w-full',
    children: E.jsx('div', {
      'data-slot': 'example-wrapper',
      className: Ye(
        'mx-auto grid min-h-screen w-full max-w-5xl min-w-0 content-center items-start gap-8 p-4 pt-2 sm:gap-12 sm:p-6 md:grid-cols-2 md:gap-8 lg:p-12 2xl:max-w-6xl',
        e
      ),
      ...r,
    }),
  })
}
function fS({ title: e, children: r, className: l, containerClassName: a, ...u }) {
  return E.jsxs('div', {
    'data-slot': 'example',
    className: Ye(
      'mx-auto flex w-full max-w-lg min-w-0 flex-col gap-1 self-stretch lg:max-w-none',
      a
    ),
    ...u,
    children: [
      E.jsx('div', {
        className: 'text-muted-foreground px-1.5 py-2 text-xs font-medium',
        children: e,
      }),
      E.jsx('div', {
        'data-slot': 'example-content',
        className: Ye(
          "bg-background text-foreground flex min-w-0 flex-1 flex-col items-start gap-6 border border-dashed p-4 sm:p-6 *:[div:not([class*='w-'])]:w-full",
          l
        ),
        children: r,
      }),
    ],
  })
}
const fx = {}
function Yn(e, r) {
  const l = h.useRef(fx)
  return (l.current === fx && (l.current = e(r)), l)
}
const rg = n1[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)],
  pz = rg && rg !== h.useLayoutEffect ? rg : (e) => e()
function Te(e) {
  const r = Yn(gz).current
  return ((r.next = e), pz(r.effect), r.trampoline)
}
function gz() {
  const e = {
    next: void 0,
    callback: hz,
    trampoline: (...r) => e.callback?.(...r),
    effect: () => {
      e.callback = e.next
    },
  }
  return e
}
function hz() {}
function vd() {
  return typeof window < 'u'
}
function ei(e) {
  return Rh(e) ? (e.nodeName || '').toLowerCase() : '#document'
}
function xn(e) {
  var r
  return (e == null || (r = e.ownerDocument) == null ? void 0 : r.defaultView) || window
}
function Co(e) {
  var r
  return (r = (Rh(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : r.documentElement
}
function Rh(e) {
  return vd() ? e instanceof Node || e instanceof xn(e).Node : !1
}
function Ot(e) {
  return vd() ? e instanceof Element || e instanceof xn(e).Element : !1
}
function Wt(e) {
  return vd() ? e instanceof HTMLElement || e instanceof xn(e).HTMLElement : !1
}
function wg(e) {
  return !vd() || typeof ShadowRoot > 'u'
    ? !1
    : e instanceof ShadowRoot || e instanceof xn(e).ShadowRoot
}
const bz = new Set(['inline', 'contents'])
function Ji(e) {
  const { overflow: r, overflowX: l, overflowY: a, display: u } = Nr(e)
  return /auto|scroll|overlay|hidden|clip/.test(r + a + l) && !bz.has(u)
}
const yz = new Set(['table', 'td', 'th'])
function vz(e) {
  return yz.has(ei(e))
}
const xz = [':popover-open', ':modal']
function xd(e) {
  return xz.some((r) => {
    try {
      return e.matches(r)
    } catch {
      return !1
    }
  })
}
const Sz = ['transform', 'translate', 'scale', 'rotate', 'perspective'],
  Rz = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'],
  Ez = ['paint', 'layout', 'strict', 'content']
function Eh(e) {
  const r = Sd(),
    l = Ot(e) ? Nr(e) : e
  return (
    Sz.some((a) => (l[a] ? l[a] !== 'none' : !1)) ||
    (l.containerType ? l.containerType !== 'normal' : !1) ||
    (!r && (l.backdropFilter ? l.backdropFilter !== 'none' : !1)) ||
    (!r && (l.filter ? l.filter !== 'none' : !1)) ||
    Rz.some((a) => (l.willChange || '').includes(a)) ||
    Ez.some((a) => (l.contain || '').includes(a))
  )
}
function Tz(e) {
  let r = To(e)
  for (; Wt(r) && !So(r); ) {
    if (Eh(r)) return r
    if (xd(r)) return null
    r = To(r)
  }
  return null
}
function Sd() {
  return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none')
}
const Cz = new Set(['html', 'body', '#document'])
function So(e) {
  return Cz.has(ei(e))
}
function Nr(e) {
  return xn(e).getComputedStyle(e)
}
function Rd(e) {
  return Ot(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY }
}
function To(e) {
  if (ei(e) === 'html') return e
  const r = e.assignedSlot || e.parentNode || (wg(e) && e.host) || Co(e)
  return wg(r) ? r.host : r
}
function dS(e) {
  const r = To(e)
  return So(r) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Wt(r) && Ji(r) ? r : dS(r)
}
function Bl(e, r, l) {
  var a
  ;(r === void 0 && (r = []), l === void 0 && (l = !0))
  const u = dS(e),
    f = u === ((a = e.ownerDocument) == null ? void 0 : a.body),
    d = xn(u)
  if (f) {
    const m = Mg(d)
    return r.concat(d, d.visualViewport || [], Ji(u) ? u : [], m && l ? Bl(m) : [])
  }
  return r.concat(u, Bl(u, [], l))
}
function Mg(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
const Wi = typeof navigator < 'u',
  og = Oz(),
  mS = Nz(),
  Th = Az(),
  pS = typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter:none'),
  wz =
    og.platform === 'MacIntel' && og.maxTouchPoints > 1
      ? !0
      : /iP(hone|ad|od)|iOS/.test(og.platform),
  dx = Wi && /firefox/i.test(Th),
  gS = Wi && /apple/i.test(navigator.vendor),
  Hf = (Wi && /android/i.test(mS)) || /android/i.test(Th),
  Mz = Wi && mS.toLowerCase().startsWith('mac') && !navigator.maxTouchPoints,
  hS = Th.includes('jsdom/')
function Oz() {
  if (!Wi) return { platform: '', maxTouchPoints: -1 }
  const e = navigator.userAgentData
  return e?.platform
    ? { platform: e.platform, maxTouchPoints: navigator.maxTouchPoints }
    : { platform: navigator.platform ?? '', maxTouchPoints: navigator.maxTouchPoints ?? -1 }
}
function Az() {
  if (!Wi) return ''
  const e = navigator.userAgentData
  return e && Array.isArray(e.brands)
    ? e.brands.map(({ brand: r, version: l }) => `${r}/${l}`).join(' ')
    : navigator.userAgent
}
function Nz() {
  if (!Wi) return ''
  const e = navigator.userAgentData
  return e?.platform ? e.platform : (navigator.platform ?? '')
}
function Gr(e) {
  return e?.ownerDocument || document
}
const zz = () => {},
  Ne = typeof document < 'u' ? h.useLayoutEffect : zz,
  Iz = []
function bS(e) {
  h.useEffect(e, Iz)
}
const mu = 0
class Li {
  static create() {
    return new Li()
  }
  currentId = mu
  start(r, l) {
    ;(this.clear(),
      (this.currentId = setTimeout(() => {
        ;((this.currentId = mu), l())
      }, r)))
  }
  isStarted() {
    return this.currentId !== mu
  }
  clear = () => {
    this.currentId !== mu && (clearTimeout(this.currentId), (this.currentId = mu))
  }
  disposeEffect = () => this.clear
}
function sn() {
  const e = Yn(Li.create).current
  return (bS(e.disposeEffect), e)
}
const bf = null
class Dz {
  callbacks = []
  callbacksCount = 0
  nextId = 1
  startId = 1
  isScheduled = !1
  tick = (r) => {
    this.isScheduled = !1
    const l = this.callbacks,
      a = this.callbacksCount
    if (((this.callbacks = []), (this.callbacksCount = 0), (this.startId = this.nextId), a > 0))
      for (let u = 0; u < l.length; u += 1) l[u]?.(r)
  }
  request(r) {
    const l = this.nextId
    return (
      (this.nextId += 1),
      this.callbacks.push(r),
      (this.callbacksCount += 1),
      !this.isScheduled && (requestAnimationFrame(this.tick), (this.isScheduled = !0)),
      l
    )
  }
  cancel(r) {
    const l = r - this.startId
    l < 0 || l >= this.callbacks.length || ((this.callbacks[l] = null), (this.callbacksCount -= 1))
  }
}
const yf = new Dz()
class vo {
  static create() {
    return new vo()
  }
  static request(r) {
    return yf.request(r)
  }
  static cancel(r) {
    return yf.cancel(r)
  }
  currentId = bf
  request(r) {
    ;(this.cancel(),
      (this.currentId = yf.request(() => {
        ;((this.currentId = bf), r())
      })))
  }
  cancel = () => {
    this.currentId !== bf && (yf.cancel(this.currentId), (this.currentId = bf))
  }
  disposeEffect = () => this.cancel
}
function Qu() {
  const e = Yn(vo.create).current
  return (bS(e.disposeEffect), e)
}
function Jt() {}
const ro = Object.freeze([]),
  en = Object.freeze({})
let mx = {},
  px = {},
  gx = ''
function jz(e) {
  if (typeof document > 'u') return !1
  const r = Gr(e)
  return xn(r).innerWidth - r.documentElement.clientWidth > 0
}
function kz(e) {
  const r = Gr(e),
    l = r.documentElement,
    a = r.body,
    u = Ji(l) ? l : a,
    f = u.style.overflow
  return (
    (u.style.overflow = 'hidden'),
    () => {
      u.style.overflow = f
    }
  )
}
function _z(e) {
  const r = Gr(e),
    l = r.documentElement,
    a = r.body,
    u = xn(l)
  let f = 0,
    d = 0
  const m = vo.create(),
    p = typeof CSS < 'u' && CSS.supports?.('scrollbar-gutter', 'stable')
  if (pS && (u.visualViewport?.scale ?? 1) !== 1) return () => {}
  function g() {
    const x = u.getComputedStyle(l),
      T = u.getComputedStyle(a),
      N = (x.scrollbarGutter || '').includes('both-edges') ? 'stable both-edges' : 'stable'
    ;((f = l.scrollTop),
      (d = l.scrollLeft),
      (mx = {
        scrollbarGutter: l.style.scrollbarGutter,
        overflowY: l.style.overflowY,
        overflowX: l.style.overflowX,
      }),
      (gx = l.style.scrollBehavior),
      (px = {
        position: a.style.position,
        height: a.style.height,
        width: a.style.width,
        boxSizing: a.style.boxSizing,
        overflowY: a.style.overflowY,
        overflowX: a.style.overflowX,
        scrollBehavior: a.style.scrollBehavior,
      }))
    const A = l.scrollHeight > l.clientHeight,
      R = l.scrollWidth > l.clientWidth,
      I = x.overflowY === 'scroll' || T.overflowY === 'scroll',
      j = x.overflowX === 'scroll' || T.overflowX === 'scroll',
      M = Math.max(0, u.innerWidth - l.clientWidth),
      V = Math.max(0, u.innerHeight - l.clientHeight),
      k = parseFloat(T.marginTop) + parseFloat(T.marginBottom),
      _ = parseFloat(T.marginLeft) + parseFloat(T.marginRight),
      ee = Ji(l) ? l : a
    if (p) {
      ;((l.style.scrollbarGutter = N),
        (ee.style.overflowY = 'hidden'),
        (ee.style.overflowX = 'hidden'))
      return
    }
    ;(Object.assign(l.style, { scrollbarGutter: N, overflowY: 'hidden', overflowX: 'hidden' }),
      (A || I) && (l.style.overflowY = 'scroll'),
      (R || j) && (l.style.overflowX = 'scroll'),
      Object.assign(a.style, {
        position: 'relative',
        height: k || V ? `calc(100dvh - ${k + V}px)` : '100dvh',
        width: _ || M ? `calc(100vw - ${_ + M}px)` : '100vw',
        boxSizing: 'border-box',
        overflow: 'hidden',
        scrollBehavior: 'unset',
      }),
      (a.scrollTop = f),
      (a.scrollLeft = d),
      l.setAttribute('data-base-ui-scroll-locked', ''),
      (l.style.scrollBehavior = 'unset'))
  }
  function v() {
    ;(Object.assign(l.style, mx),
      Object.assign(a.style, px),
      p ||
        ((l.scrollTop = f),
        (l.scrollLeft = d),
        l.removeAttribute('data-base-ui-scroll-locked'),
        (l.style.scrollBehavior = gx)))
  }
  function y() {
    ;(v(), m.request(g))
  }
  return (
    g(),
    u.addEventListener('resize', y),
    () => {
      ;(m.cancel(),
        v(),
        typeof u.removeEventListener == 'function' && u.removeEventListener('resize', y))
    }
  )
}
class Uz {
  lockCount = 0
  restore = null
  timeoutLock = Li.create()
  timeoutUnlock = Li.create()
  acquire(r) {
    return (
      (this.lockCount += 1),
      this.lockCount === 1 &&
        this.restore === null &&
        this.timeoutLock.start(0, () => this.lock(r)),
      this.release
    )
  }
  release = () => {
    ;((this.lockCount -= 1),
      this.lockCount === 0 && this.restore && this.timeoutUnlock.start(0, this.unlock))
  }
  unlock = () => {
    this.lockCount === 0 && this.restore && (this.restore?.(), (this.restore = null))
  }
  lock(r) {
    if (this.lockCount === 0 || this.restore !== null) return
    const a = Gr(r).documentElement,
      u = xn(a).getComputedStyle(a).overflowY
    if (u === 'hidden' || u === 'clip') {
      this.restore = Jt
      return
    }
    const f = wz || !jz(r)
    this.restore = f ? kz(r) : _z(r)
  }
}
const Vz = new Uz()
function Ed(e = !0, r = null) {
  Ne(() => {
    if (e) return Vz.acquire(r)
  }, [e, r])
}
function an(e) {
  const r = Yn(Lz, e).current
  return ((r.next = e), Ne(r.effect), r)
}
function Lz(e) {
  const r = {
    current: e,
    next: e,
    effect: () => {
      r.current = r.next
    },
  }
  return r
}
const Og = 'data-base-ui-focusable',
  yS = 'active',
  vS = 'selected',
  xS =
    "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])",
  Fl = 'ArrowLeft',
  Pl = 'ArrowRight',
  Ch = 'ArrowUp',
  Zu = 'ArrowDown'
function xo(e) {
  let r = e.activeElement
  for (; r?.shadowRoot?.activeElement != null; ) r = r.shadowRoot.activeElement
  return r
}
function tt(e, r) {
  if (!e || !r) return !1
  const l = r.getRootNode?.()
  if (e.contains(r)) return !0
  if (l && wg(l)) {
    let a = r
    for (; a; ) {
      if (e === a) return !0
      a = a.parentNode || a.host
    }
  }
  return !1
}
function On(e) {
  return 'composedPath' in e ? e.composedPath()[0] : e.target
}
function to(e, r) {
  if (r == null) return !1
  if ('composedPath' in e) return e.composedPath().includes(r)
  const l = e
  return l.target != null && r.contains(l.target)
}
function Hz(e) {
  return e.matches('html,body')
}
function on(e) {
  return e?.ownerDocument || document
}
function wh(e) {
  return Wt(e) && e.matches(xS)
}
function Ag(e) {
  return e ? e.getAttribute('role') === 'combobox' && wh(e) : !1
}
function Bz(e) {
  if (!e || hS) return !0
  try {
    return e.matches(':focus-visible')
  } catch {
    return !0
  }
}
function Du(e) {
  return e ? (e.hasAttribute(Og) ? e : e.querySelector(`[${Og}]`) || e) : null
}
function Di(e, r, l = !0) {
  return e
    .filter((u) => u.parentId === r && (!l || u.context?.open))
    .flatMap((u) => [u, ...Di(e, u.id, l)])
}
function hx(e, r) {
  let l = [],
    a = e.find((u) => u.id === r)?.parentId
  for (; a; ) {
    const u = e.find((f) => f.id === a)
    ;((a = u?.parentId), u && (l = l.concat(u)))
  }
  return l
}
function ln(e) {
  ;(e.preventDefault(), e.stopPropagation())
}
function Fz(e) {
  return 'nativeEvent' in e
}
function SS(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : Hf && e.pointerType
      ? e.type === 'click' && e.buttons === 1
      : e.detail === 0 && !e.pointerType
}
function RS(e) {
  return hS
    ? !1
    : (!Hf && e.width === 0 && e.height === 0) ||
        (Hf &&
          e.width === 1 &&
          e.height === 1 &&
          e.pressure === 0 &&
          e.detail === 0 &&
          e.pointerType === 'mouse') ||
        (e.width < 1 &&
          e.height < 1 &&
          e.pressure === 0 &&
          e.detail === 0 &&
          e.pointerType === 'touch')
}
function Xa(e, r) {
  const l = ['mouse', 'pen']
  return (r || l.push('', void 0), l.includes(e))
}
function ES(e) {
  const r = e.type
  return r === 'click' || r === 'mousedown' || r === 'keydown' || r === 'keyup'
}
function Ht(e, ...r) {
  const l = new URL(`https://base-ui.com/production-error/${e}`)
  return (
    r.forEach((a) => l.searchParams.append('args[]', a)),
    `Base UI error #${e}; visit ${l} for the full message.`
  )
}
const Pz = ['top', 'right', 'bottom', 'left'],
  Qa = Math.min,
  Tr = Math.max,
  Bf = Math.round,
  Ba = Math.floor,
  Ro = (e) => ({ x: e, y: e }),
  qz = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  Gz = { start: 'end', end: 'start' }
function Ng(e, r, l) {
  return Tr(e, Qa(r, l))
}
function tl(e, r) {
  return typeof e == 'function' ? e(r) : e
}
function wr(e) {
  return e.split('-')[0]
}
function ti(e) {
  return e.split('-')[1]
}
function Mh(e) {
  return e === 'x' ? 'y' : 'x'
}
function Oh(e) {
  return e === 'y' ? 'height' : 'width'
}
const Yz = new Set(['top', 'bottom'])
function Pr(e) {
  return Yz.has(wr(e)) ? 'y' : 'x'
}
function Ah(e) {
  return Mh(Pr(e))
}
function $z(e, r, l) {
  l === void 0 && (l = !1)
  const a = ti(e),
    u = Ah(e),
    f = Oh(u)
  let d =
    u === 'x' ? (a === (l ? 'end' : 'start') ? 'right' : 'left') : a === 'start' ? 'bottom' : 'top'
  return (r.reference[f] > r.floating[f] && (d = Ff(d)), [d, Ff(d)])
}
function Kz(e) {
  const r = Ff(e)
  return [zg(e), r, zg(r)]
}
function zg(e) {
  return e.replace(/start|end/g, (r) => Gz[r])
}
const bx = ['left', 'right'],
  yx = ['right', 'left'],
  Xz = ['top', 'bottom'],
  Qz = ['bottom', 'top']
function Zz(e, r, l) {
  switch (e) {
    case 'top':
    case 'bottom':
      return l ? (r ? yx : bx) : r ? bx : yx
    case 'left':
    case 'right':
      return r ? Xz : Qz
    default:
      return []
  }
}
function Jz(e, r, l, a) {
  const u = ti(e)
  let f = Zz(wr(e), l === 'start', a)
  return (u && ((f = f.map((d) => d + '-' + u)), r && (f = f.concat(f.map(zg)))), f)
}
function Ff(e) {
  return e.replace(/left|right|bottom|top/g, (r) => qz[r])
}
function Wz(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e }
}
function TS(e) {
  return typeof e != 'number' ? Wz(e) : { top: e, right: e, bottom: e, left: e }
}
function Pf(e) {
  const { x: r, y: l, width: a, height: u } = e
  return { width: a, height: u, top: l, left: r, right: r + a, bottom: l + u, x: r, y: l }
}
function vf(e, r, l) {
  return Math.floor(e / r) !== l
}
function Eu(e, r) {
  return r < 0 || r >= e.current.length
}
function lg(e, r) {
  return Gn(e, { disabledIndices: r })
}
function vx(e, r) {
  return Gn(e, { decrement: !0, startingIndex: e.current.length, disabledIndices: r })
}
function Gn(
  e,
  { startingIndex: r = -1, decrement: l = !1, disabledIndices: a, amount: u = 1 } = {}
) {
  let f = r
  do f += l ? -u : u
  while (f >= 0 && f <= e.current.length - 1 && Tu(e, f, a))
  return f
}
function e3(
  e,
  {
    event: r,
    orientation: l,
    loopFocus: a,
    rtl: u,
    cols: f,
    disabledIndices: d,
    minIndex: m,
    maxIndex: p,
    prevIndex: g,
    stopEvent: v = !1,
  }
) {
  let y = g
  const x = [],
    T = {}
  let w = !1
  {
    let A = null,
      R = -1
    e.current.forEach((I, j) => {
      if (I == null) return
      const M = I.closest('[role="row"]')
      ;(M && (w = !0),
        (M !== A || R === -1) && ((A = M), (R += 1), (x[R] = [])),
        x[R].push(j),
        (T[j] = R))
    })
  }
  const S = w && x.length > 0 && x.some((A) => A.length !== f)
  function N(A) {
    if (!S || g === -1) return
    const R = T[g]
    if (R == null) return
    const I = x[R].indexOf(g)
    let j = A === 'up' ? R - 1 : R + 1
    a && (j < 0 ? (j = x.length - 1) : j >= x.length && (j = 0))
    const M = new Set()
    for (; j >= 0 && j < x.length && !M.has(j); ) {
      M.add(j)
      const V = x[j]
      if (V.length === 0) {
        j = A === 'up' ? j - 1 : j + 1
        continue
      }
      const k = Math.min(I, V.length - 1)
      for (let _ = k; _ >= 0; _ -= 1) {
        const ee = V[_]
        if (!Tu(e, ee, d)) return ee
      }
      ;((j = A === 'up' ? j - 1 : j + 1),
        a && (j < 0 ? (j = x.length - 1) : j >= x.length && (j = 0)))
    }
  }
  if (r.key === Ch) {
    const A = N('up')
    if (A !== void 0) (v && ln(r), (y = A))
    else {
      if ((v && ln(r), g === -1)) y = p
      else if (
        ((y = Gn(e, { startingIndex: y, amount: f, decrement: !0, disabledIndices: d })),
        a && (g - f < m || y < 0))
      ) {
        const R = g % f,
          I = p % f,
          j = p - (I - R)
        I === R ? (y = p) : (y = I > R ? j : j - f)
      }
      Eu(e, y) && (y = g)
    }
  }
  if (r.key === Zu) {
    const A = N('down')
    A !== void 0
      ? (v && ln(r), (y = A))
      : (v && ln(r),
        g === -1
          ? (y = m)
          : ((y = Gn(e, { startingIndex: g, amount: f, disabledIndices: d })),
            a &&
              g + f > p &&
              (y = Gn(e, { startingIndex: (g % f) - f, amount: f, disabledIndices: d }))),
        Eu(e, y) && (y = g))
  }
  if (l === 'both') {
    const A = Ba(g / f)
    ;(r.key === (u ? Fl : Pl) &&
      (v && ln(r),
      g % f !== f - 1
        ? ((y = Gn(e, { startingIndex: g, disabledIndices: d })),
          a && vf(y, f, A) && (y = Gn(e, { startingIndex: g - (g % f) - 1, disabledIndices: d })))
        : a && (y = Gn(e, { startingIndex: g - (g % f) - 1, disabledIndices: d })),
      vf(y, f, A) && (y = g)),
      r.key === (u ? Pl : Fl) &&
        (v && ln(r),
        g % f !== 0
          ? ((y = Gn(e, { startingIndex: g, decrement: !0, disabledIndices: d })),
            a &&
              vf(y, f, A) &&
              (y = Gn(e, { startingIndex: g + (f - (g % f)), decrement: !0, disabledIndices: d })))
          : a &&
            (y = Gn(e, { startingIndex: g + (f - (g % f)), decrement: !0, disabledIndices: d })),
        vf(y, f, A) && (y = g)))
    const R = Ba(p / f) === A
    Eu(e, y) &&
      (a && R
        ? (y =
            r.key === (u ? Pl : Fl)
              ? p
              : Gn(e, { startingIndex: g - (g % f) - 1, disabledIndices: d }))
        : (y = g))
  }
  return y
}
function t3(e, r, l) {
  const a = []
  let u = 0
  return (
    e.forEach(({ width: f, height: d }, m) => {
      let p = !1
      for (l && (u = 0); !p; ) {
        const g = []
        for (let v = 0; v < f; v += 1) for (let y = 0; y < d; y += 1) g.push(u + v + y * r)
        ;(u % r) + f <= r && g.every((v) => a[v] == null)
          ? (g.forEach((v) => {
              a[v] = m
            }),
            (p = !0))
          : (u += 1)
      }
    }),
    [...a]
  )
}
function n3(e, r, l, a, u) {
  if (e === -1) return -1
  const f = l.indexOf(e),
    d = r[e]
  switch (u) {
    case 'tl':
      return f
    case 'tr':
      return d ? f + d.width - 1 : f
    case 'bl':
      return d ? f + (d.height - 1) * a : f
    case 'br':
      return l.lastIndexOf(e)
    default:
      return -1
  }
}
function r3(e, r) {
  return r.flatMap((l, a) => (e.includes(l) ? [a] : []))
}
function Tu(e, r, l) {
  if (typeof l == 'function') return l(r)
  if (l) return l.includes(r)
  const a = e.current[r]
  return a ? a.hasAttribute('disabled') || a.getAttribute('aria-disabled') === 'true' : !1
}
var o3 = [
    'input:not([inert])',
    'select:not([inert])',
    'textarea:not([inert])',
    'a[href]:not([inert])',
    'button:not([inert])',
    '[tabindex]:not(slot):not([inert])',
    'audio[controls]:not([inert])',
    'video[controls]:not([inert])',
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    'details>summary:first-of-type:not([inert])',
    'details:not([inert])',
  ],
  qf = o3.join(','),
  CS = typeof Element > 'u',
  Za = CS
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  Gf =
    !CS && Element.prototype.getRootNode
      ? function (e) {
          var r
          return e == null || (r = e.getRootNode) === null || r === void 0 ? void 0 : r.call(e)
        }
      : function (e) {
          return e?.ownerDocument
        },
  ju = function (r, l) {
    var a
    l === void 0 && (l = !0)
    var u =
        r == null || (a = r.getAttribute) === null || a === void 0 ? void 0 : a.call(r, 'inert'),
      f = u === '' || u === 'true',
      d = f || (l && r && ju(r.parentNode))
    return d
  },
  l3 = function (r) {
    var l,
      a =
        r == null || (l = r.getAttribute) === null || l === void 0
          ? void 0
          : l.call(r, 'contenteditable')
    return a === '' || a === 'true'
  },
  wS = function (r, l, a) {
    if (ju(r)) return []
    var u = Array.prototype.slice.apply(r.querySelectorAll(qf))
    return (l && Za.call(r, qf) && u.unshift(r), (u = u.filter(a)), u)
  },
  Yf = function (r, l, a) {
    for (var u = [], f = Array.from(r); f.length; ) {
      var d = f.shift()
      if (!ju(d, !1))
        if (d.tagName === 'SLOT') {
          var m = d.assignedElements(),
            p = m.length ? m : d.children,
            g = Yf(p, !0, a)
          a.flatten ? u.push.apply(u, g) : u.push({ scopeParent: d, candidates: g })
        } else {
          var v = Za.call(d, qf)
          v && a.filter(d) && (l || !r.includes(d)) && u.push(d)
          var y = d.shadowRoot || (typeof a.getShadowRoot == 'function' && a.getShadowRoot(d)),
            x = !ju(y, !1) && (!a.shadowRootFilter || a.shadowRootFilter(d))
          if (y && x) {
            var T = Yf(y === !0 ? d.children : y.children, !0, a)
            a.flatten ? u.push.apply(u, T) : u.push({ scopeParent: d, candidates: T })
          } else f.unshift.apply(f, d.children)
        }
    }
    return u
  },
  MS = function (r) {
    return !isNaN(parseInt(r.getAttribute('tabindex'), 10))
  },
  OS = function (r) {
    if (!r) throw new Error('No node provided')
    return r.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(r.tagName) || l3(r)) && !MS(r)
      ? 0
      : r.tabIndex
  },
  i3 = function (r, l) {
    var a = OS(r)
    return a < 0 && l && !MS(r) ? 0 : a
  },
  a3 = function (r, l) {
    return r.tabIndex === l.tabIndex ? r.documentOrder - l.documentOrder : r.tabIndex - l.tabIndex
  },
  AS = function (r) {
    return r.tagName === 'INPUT'
  },
  s3 = function (r) {
    return AS(r) && r.type === 'hidden'
  },
  u3 = function (r) {
    var l =
      r.tagName === 'DETAILS' &&
      Array.prototype.slice.apply(r.children).some(function (a) {
        return a.tagName === 'SUMMARY'
      })
    return l
  },
  c3 = function (r, l) {
    for (var a = 0; a < r.length; a++) if (r[a].checked && r[a].form === l) return r[a]
  },
  f3 = function (r) {
    if (!r.name) return !0
    var l = r.form || Gf(r),
      a = function (m) {
        return l.querySelectorAll('input[type="radio"][name="' + m + '"]')
      },
      u
    if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function')
      u = a(window.CSS.escape(r.name))
    else
      try {
        u = a(r.name)
      } catch (d) {
        return (
          console.error(
            'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
            d.message
          ),
          !1
        )
      }
    var f = c3(u, r.form)
    return !f || f === r
  },
  d3 = function (r) {
    return AS(r) && r.type === 'radio'
  },
  m3 = function (r) {
    return d3(r) && !f3(r)
  },
  p3 = function (r) {
    var l,
      a = r && Gf(r),
      u = (l = a) === null || l === void 0 ? void 0 : l.host,
      f = !1
    if (a && a !== r) {
      var d, m, p
      for (
        f = !!(
          ((d = u) !== null &&
            d !== void 0 &&
            (m = d.ownerDocument) !== null &&
            m !== void 0 &&
            m.contains(u)) ||
          (r != null && (p = r.ownerDocument) !== null && p !== void 0 && p.contains(r))
        );
        !f && u;
      ) {
        var g, v, y
        ;((a = Gf(u)),
          (u = (g = a) === null || g === void 0 ? void 0 : g.host),
          (f = !!(
            (v = u) !== null &&
            v !== void 0 &&
            (y = v.ownerDocument) !== null &&
            y !== void 0 &&
            y.contains(u)
          )))
      }
    }
    return f
  },
  xx = function (r) {
    var l = r.getBoundingClientRect(),
      a = l.width,
      u = l.height
    return a === 0 && u === 0
  },
  g3 = function (r, l) {
    var a = l.displayCheck,
      u = l.getShadowRoot
    if (a === 'full-native' && 'checkVisibility' in r) {
      var f = r.checkVisibility({
        checkOpacity: !1,
        opacityProperty: !1,
        contentVisibilityAuto: !0,
        visibilityProperty: !0,
        checkVisibilityCSS: !0,
      })
      return !f
    }
    if (getComputedStyle(r).visibility === 'hidden') return !0
    var d = Za.call(r, 'details>summary:first-of-type'),
      m = d ? r.parentElement : r
    if (Za.call(m, 'details:not([open]) *')) return !0
    if (!a || a === 'full' || a === 'full-native' || a === 'legacy-full') {
      if (typeof u == 'function') {
        for (var p = r; r; ) {
          var g = r.parentElement,
            v = Gf(r)
          if (g && !g.shadowRoot && u(g) === !0) return xx(r)
          r.assignedSlot
            ? (r = r.assignedSlot)
            : !g && v !== r.ownerDocument
              ? (r = v.host)
              : (r = g)
        }
        r = p
      }
      if (p3(r)) return !r.getClientRects().length
      if (a !== 'legacy-full') return !0
    } else if (a === 'non-zero-area') return xx(r)
    return !1
  },
  h3 = function (r) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(r.tagName))
      for (var l = r.parentElement; l; ) {
        if (l.tagName === 'FIELDSET' && l.disabled) {
          for (var a = 0; a < l.children.length; a++) {
            var u = l.children.item(a)
            if (u.tagName === 'LEGEND')
              return Za.call(l, 'fieldset[disabled] *') ? !0 : !u.contains(r)
          }
          return !0
        }
        l = l.parentElement
      }
    return !1
  },
  Ig = function (r, l) {
    return !(l.disabled || ju(l) || s3(l) || g3(l, r) || u3(l) || h3(l))
  },
  Dg = function (r, l) {
    return !(m3(l) || OS(l) < 0 || !Ig(r, l))
  },
  b3 = function (r) {
    var l = parseInt(r.getAttribute('tabindex'), 10)
    return !!(isNaN(l) || l >= 0)
  },
  NS = function (r) {
    var l = [],
      a = []
    return (
      r.forEach(function (u, f) {
        var d = !!u.scopeParent,
          m = d ? u.scopeParent : u,
          p = i3(m, d),
          g = d ? NS(u.candidates) : m
        p === 0
          ? d
            ? l.push.apply(l, g)
            : l.push(m)
          : a.push({ documentOrder: f, tabIndex: p, item: u, isScope: d, content: g })
      }),
      a
        .sort(a3)
        .reduce(function (u, f) {
          return (f.isScope ? u.push.apply(u, f.content) : u.push(f.content), u)
        }, [])
        .concat(l)
    )
  },
  Ju = function (r, l) {
    l = l || {}
    var a
    return (
      l.getShadowRoot
        ? (a = Yf([r], l.includeContainer, {
            filter: Dg.bind(null, l),
            flatten: !1,
            getShadowRoot: l.getShadowRoot,
            shadowRootFilter: b3,
          }))
        : (a = wS(r, l.includeContainer, Dg.bind(null, l))),
      NS(a)
    )
  },
  y3 = function (r, l) {
    l = l || {}
    var a
    return (
      l.getShadowRoot
        ? (a = Yf([r], l.includeContainer, {
            filter: Ig.bind(null, l),
            flatten: !0,
            getShadowRoot: l.getShadowRoot,
          }))
        : (a = wS(r, l.includeContainer, Ig.bind(null, l))),
      a
    )
  },
  zS = function (r, l) {
    if (((l = l || {}), !r)) throw new Error('No node provided')
    return Za.call(r, qf) === !1 ? !1 : Dg(l, r)
  }
const ms = () => ({
  getShadowRoot: !0,
  displayCheck:
    typeof ResizeObserver == 'function' && ResizeObserver.toString().includes('[native code]')
      ? 'full'
      : 'none',
})
function IS(e, r) {
  const l = Ju(e, ms()),
    a = l.length
  if (a === 0) return
  const u = xo(on(e)),
    f = l.indexOf(u),
    d = f === -1 ? (r === 1 ? 0 : a - 1) : f + r
  return l[d]
}
function Nh(e) {
  return IS(on(e).body, 1) || e
}
function DS(e) {
  return IS(on(e).body, -1) || e
}
function jS(e, r) {
  if (!e) return null
  const l = Ju(on(e).body, ms()),
    a = l.length
  if (a === 0) return null
  const u = l.indexOf(e)
  if (u === -1) return null
  const f = (u + r + a) % a
  return l[f]
}
function v3(e) {
  return jS(e, 1)
}
function x3(e) {
  return jS(e, -1)
}
function Fa(e, r) {
  const l = r || e.currentTarget,
    a = e.relatedTarget
  return !a || !tt(l, a)
}
function S3(e) {
  Ju(e, ms()).forEach((l) => {
    ;((l.dataset.tabindex = l.getAttribute('tabindex') || ''), l.setAttribute('tabindex', '-1'))
  })
}
function Sx(e) {
  e.querySelectorAll('[data-tabindex]').forEach((l) => {
    const a = l.dataset.tabindex
    ;(delete l.dataset.tabindex, a ? l.setAttribute('tabindex', a) : l.removeAttribute('tabindex'))
  })
}
const R3 = { ...n1 }
let Rx = 0
function E3(e, r = 'mui') {
  const [l, a] = h.useState(e),
    u = e || l
  return (
    h.useEffect(() => {
      l == null && ((Rx += 1), a(`${r}-${Rx}`))
    }, [l, r]),
    u
  )
}
const Ex = R3.useId
function ea(e, r) {
  if (Ex !== void 0) {
    const l = Ex()
    return e ?? (r ? `${r}-${l}` : l)
  }
  return E3(e, r)
}
function kS() {
  const e = new Map()
  return {
    emit(r, l) {
      e.get(r)?.forEach((a) => a(l))
    },
    on(r, l) {
      ;(e.has(r) || e.set(r, new Set()), e.get(r).add(l))
    },
    off(r, l) {
      e.get(r)?.delete(l)
    },
  }
}
class zh {
  nodesRef = { current: [] }
  events = kS()
  addNode(r) {
    this.nodesRef.current.push(r)
  }
  removeNode(r) {
    const l = this.nodesRef.current.findIndex((a) => a === r)
    l !== -1 && this.nodesRef.current.splice(l, 1)
  }
}
const _S = h.createContext(null),
  US = h.createContext(null),
  al = () => h.useContext(_S)?.id || null,
  ni = (e) => {
    const r = h.useContext(US)
    return e ?? r
  }
function VS(e) {
  const r = ea(),
    l = ni(e),
    a = al()
  return (
    Ne(() => {
      if (!r) return
      const u = { id: r, parentId: a }
      return (
        l?.addNode(u),
        () => {
          l?.removeNode(u)
        }
      )
    }, [l, r, a]),
    r
  )
}
function T3(e) {
  const { children: r, id: l } = e,
    a = al()
  return E.jsx(_S.Provider, {
    value: h.useMemo(() => ({ id: l, parentId: a }), [l, a]),
    children: r,
  })
}
function C3(e) {
  const { children: r, externalTree: l } = e,
    a = Yn(() => l ?? new zh()).current
  return E.jsx(US.Provider, { value: a, children: r })
}
const w3 = 500,
  M3 = 500,
  O3 = { style: { transition: 'none' } },
  LS = 'data-base-ui-click-trigger',
  Ih = { fallbackAxisSide: 'none' },
  A3 = { fallbackAxisSide: 'end' },
  N3 = { clipPath: 'inset(50%)', position: 'fixed', top: 0, left: 0 },
  ir = 'none',
  ji = 'trigger-press',
  Cr = 'trigger-hover',
  $f = 'trigger-focus',
  Dh = 'outside-press',
  ql = 'item-press',
  z3 = 'close-press',
  Tx = 'clear-press',
  Ni = 'input-change',
  Vl = 'input-clear',
  Hi = 'focus-out',
  Td = 'escape-key',
  Cu = 'list-navigation',
  HS = 'cancel-open',
  xu = 'sibling-open',
  BS = 'imperative-action',
  I3 = 'window-resize'
function De(e, r, l, a) {
  let u = !1,
    f = !1
  const d = en
  return {
    reason: e,
    event: r ?? new Event('base-ui'),
    cancel() {
      u = !0
    },
    allowPropagation() {
      f = !0
    },
    get isCanceled() {
      return u
    },
    get isPropagationAllowed() {
      return f
    },
    trigger: l,
    ...d,
  }
}
function pu(e, r, l) {
  const a = l ?? en
  return { reason: e, event: r ?? new Event('base-ui'), ...a }
}
function Ja(e) {
  return `data-base-ui-${e}`
}
function ig(e, r, l) {
  if (l && !Xa(l)) return 0
  if (typeof e == 'number') return e
  if (typeof e == 'function') {
    const a = e()
    return typeof a == 'number' ? a : a?.[r]
  }
  return e?.[r]
}
function nl(e, r, l, a) {
  const u = Yn(FS).current
  return (j3(u, e, r, l, a) && PS(u, [e, r, l, a]), u.callback)
}
function D3(e) {
  const r = Yn(FS).current
  return (k3(r, e) && PS(r, e), r.callback)
}
function FS() {
  return { callback: null, cleanup: null, refs: [] }
}
function j3(e, r, l, a, u) {
  return e.refs[0] !== r || e.refs[1] !== l || e.refs[2] !== a || e.refs[3] !== u
}
function k3(e, r) {
  return e.refs.length !== r.length || e.refs.some((l, a) => l !== r[a])
}
function PS(e, r) {
  if (((e.refs = r), r.every((l) => l == null))) {
    e.callback = null
    return
  }
  e.callback = (l) => {
    if ((e.cleanup && (e.cleanup(), (e.cleanup = null)), l != null)) {
      const a = Array(r.length).fill(null)
      for (let u = 0; u < r.length; u += 1) {
        const f = r[u]
        if (f != null)
          switch (typeof f) {
            case 'function': {
              const d = f(l)
              typeof d == 'function' && (a[u] = d)
              break
            }
            case 'object': {
              f.current = l
              break
            }
          }
      }
      e.cleanup = () => {
        for (let u = 0; u < r.length; u += 1) {
          const f = r[u]
          if (f != null)
            switch (typeof f) {
              case 'function': {
                const d = a[u]
                typeof d == 'function' ? d() : f(null)
                break
              }
              case 'object': {
                f.current = null
                break
              }
            }
        }
      }
    }
  }
}
const Cd = {
    clip: 'rect(0 0 0 0)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'fixed',
    top: 0,
    left: 0,
    border: 0,
    padding: 0,
    width: 1,
    height: 1,
    margin: -1,
  },
  Wa = h.forwardRef(function (r, l) {
    const [a, u] = h.useState()
    Ne(() => {
      gS && u('button')
    }, [])
    const f = { tabIndex: 0, role: a }
    return E.jsx('span', {
      ...r,
      ref: l,
      style: Cd,
      'aria-hidden': a ? void 0 : !0,
      ...f,
      'data-base-ui-focus-guard': '',
    })
  })
let Cx = 0
function Df(e, r = {}) {
  const { preventScroll: l = !1, cancelPrevious: a = !0, sync: u = !1 } = r
  a && cancelAnimationFrame(Cx)
  const f = () => e?.focus({ preventScroll: l })
  u ? f() : (Cx = requestAnimationFrame(f))
}
const Pa = { inert: new WeakMap(), 'aria-hidden': new WeakMap(), none: new WeakMap() }
function wx(e) {
  return e === 'inert' ? Pa.inert : e === 'aria-hidden' ? Pa['aria-hidden'] : Pa.none
}
let xf = new WeakSet(),
  Sf = {},
  ag = 0
const qS = (e) => e && (e.host || qS(e.parentNode)),
  _3 = (e, r) =>
    r
      .map((l) => {
        if (e.contains(l)) return l
        const a = qS(l)
        return e.contains(a) ? a : null
      })
      .filter((l) => l != null)
function U3(e, r, l, a) {
  const u = 'data-base-ui-inert',
    f = a ? 'inert' : l ? 'aria-hidden' : null,
    d = _3(r, e),
    m = new Set(),
    p = new Set(d),
    g = []
  Sf[u] || (Sf[u] = new WeakMap())
  const v = Sf[u]
  ;(d.forEach(y), x(r), m.clear())
  function y(T) {
    !T || m.has(T) || (m.add(T), T.parentNode && y(T.parentNode))
  }
  function x(T) {
    !T ||
      p.has(T) ||
      [].forEach.call(T.children, (w) => {
        if (ei(w) !== 'script')
          if (m.has(w)) x(w)
          else {
            const S = f ? w.getAttribute(f) : null,
              N = S !== null && S !== 'false',
              A = wx(f),
              R = (A.get(w) || 0) + 1,
              I = (v.get(w) || 0) + 1
            ;(A.set(w, R),
              v.set(w, I),
              g.push(w),
              R === 1 && N && xf.add(w),
              I === 1 && w.setAttribute(u, ''),
              !N && f && w.setAttribute(f, f === 'inert' ? '' : 'true'))
          }
      })
  }
  return (
    (ag += 1),
    () => {
      ;(g.forEach((T) => {
        const w = wx(f),
          N = (w.get(T) || 0) - 1,
          A = (v.get(T) || 0) - 1
        ;(w.set(T, N),
          v.set(T, A),
          N || (!xf.has(T) && f && T.removeAttribute(f), xf.delete(T)),
          A || T.removeAttribute(u))
      }),
        (ag -= 1),
        ag ||
          ((Pa.inert = new WeakMap()),
          (Pa['aria-hidden'] = new WeakMap()),
          (Pa.none = new WeakMap()),
          (xf = new WeakSet()),
          (Sf = {})))
    }
  )
}
function V3(e, r = !1, l = !1) {
  const a = on(e[0]).body
  return U3(e.concat(Array.from(a.querySelectorAll('[aria-live]'))), a, r, l)
}
var Yr = r1()
const L3 = parseInt(h.version, 10)
function jh(e) {
  return L3 >= e
}
function Mx(e) {
  if (!h.isValidElement(e)) return null
  const r = e,
    l = r.props
  return (jh(19) ? l?.ref : r.ref) ?? null
}
function jg(e, r) {
  if (e && !r) return e
  if (!e && r) return r
  if (e || r) return { ...e, ...r }
}
function H3(e, r) {
  const l = {}
  for (const a in e) {
    const u = e[a]
    if (r?.hasOwnProperty(a)) {
      const f = r[a](u)
      f != null && Object.assign(l, f)
      continue
    }
    u === !0
      ? (l[`data-${a.toLowerCase()}`] = '')
      : u && (l[`data-${a.toLowerCase()}`] = u.toString())
  }
  return l
}
function B3(e, r) {
  return typeof e == 'function' ? e(r) : e
}
function F3(e, r) {
  return typeof e == 'function' ? e(r) : e
}
const wu = {}
function Yl(e, r, l, a, u) {
  let f = { ...kg(e, wu) }
  return (r && (f = Su(f, r)), l && (f = Su(f, l)), a && (f = Su(f, a)), u && (f = Su(f, u)), f)
}
function P3(e) {
  if (e.length === 0) return wu
  if (e.length === 1) return kg(e[0], wu)
  let r = { ...kg(e[0], wu) }
  for (let l = 1; l < e.length; l += 1) r = Su(r, e[l])
  return r
}
function Su(e, r) {
  return GS(r) ? r(e) : q3(e, r)
}
function q3(e, r) {
  if (!r) return e
  for (const l in r) {
    const a = r[l]
    switch (l) {
      case 'style': {
        e[l] = jg(e.style, a)
        break
      }
      case 'className': {
        e[l] = YS(e.className, a)
        break
      }
      default:
        G3(l, a) ? (e[l] = Y3(e[l], a)) : (e[l] = a)
    }
  }
  return e
}
function G3(e, r) {
  const l = e.charCodeAt(0),
    a = e.charCodeAt(1),
    u = e.charCodeAt(2)
  return l === 111 && a === 110 && u >= 65 && u <= 90 && (typeof r == 'function' || typeof r > 'u')
}
function GS(e) {
  return typeof e == 'function'
}
function kg(e, r) {
  return GS(e) ? e(r) : (e ?? wu)
}
function Y3(e, r) {
  return r
    ? e
      ? (l) => {
          if ($3(l)) {
            const u = l
            _g(u)
            const f = r(u)
            return (u.baseUIHandlerPrevented || e?.(u), f)
          }
          const a = r(l)
          return (e?.(l), a)
        }
      : r
    : e
}
function _g(e) {
  return (
    (e.preventBaseUIHandler = () => {
      e.baseUIHandlerPrevented = !0
    }),
    e
  )
}
function YS(e, r) {
  return r ? (e ? r + ' ' + e : r) : e
}
function $3(e) {
  return e != null && typeof e == 'object' && 'nativeEvent' in e
}
function nt(e, r, l = {}) {
  const a = r.render,
    u = K3(r, l)
  if (l.enabled === !1) return null
  const f = l.state ?? en
  return X3(e, a, u, f)
}
function K3(e, r = {}) {
  const { className: l, style: a, render: u } = e,
    { state: f = en, ref: d, props: m, stateAttributesMapping: p, enabled: g = !0 } = r,
    v = g ? B3(l, f) : void 0,
    y = g ? F3(a, f) : void 0,
    x = g ? H3(f, p) : en,
    T = g ? (jg(x, Array.isArray(m) ? P3(m) : m) ?? en) : en
  return (
    typeof document < 'u' &&
      (g
        ? Array.isArray(d)
          ? (T.ref = D3([T.ref, Mx(u), ...d]))
          : (T.ref = nl(T.ref, Mx(u), d))
        : nl(null, null)),
    g
      ? (v !== void 0 && (T.className = YS(T.className, v)),
        y !== void 0 && (T.style = jg(T.style, y)),
        T)
      : en
  )
}
function X3(e, r, l, a) {
  if (r) {
    if (typeof r == 'function') return r(l, a)
    const u = Yl(l, r.props)
    return ((u.ref = l.ref), h.cloneElement(r, u))
  }
  if (e && typeof e == 'string') return Q3(e, l)
  throw new Error(Ht(8))
}
function Q3(e, r) {
  return e === 'button'
    ? h.createElement('button', { type: 'button', ...r, key: r.key })
    : e === 'img'
      ? h.createElement('img', { alt: '', ...r, key: r.key })
      : h.createElement(e, r)
}
const $S = h.createContext(null),
  KS = () => h.useContext($S),
  Z3 = Ja('portal')
function J3(e = {}) {
  const { ref: r, container: l, componentProps: a = en, elementProps: u, elementState: f } = e,
    d = ea(),
    p = KS()?.portalNode,
    [g, v] = h.useState(null),
    [y, x] = h.useState(null),
    T = h.useRef(null)
  Ne(() => {
    if (l === null) {
      T.current && ((T.current = null), x(null), v(null))
      return
    }
    if (d == null) return
    const N = (l && (Rh(l) ? l : l.current)) ?? p ?? document.body
    if (N == null) {
      T.current && ((T.current = null), x(null), v(null))
      return
    }
    T.current !== N && ((T.current = N), x(null), v(N))
  }, [l, p, d])
  const w = nt('div', a, { ref: [r, x], state: f, props: [{ id: d, [Z3]: '' }, u] })
  return { portalNode: y, portalSubtree: g && w ? Yr.createPortal(w, g) : null }
}
const wd = h.forwardRef(function (r, l) {
  const { children: a, container: u, className: f, render: d, renderGuards: m, ...p } = r,
    { portalNode: g, portalSubtree: v } = J3({
      container: u,
      ref: l,
      componentProps: r,
      elementProps: p,
    }),
    y = h.useRef(null),
    x = h.useRef(null),
    T = h.useRef(null),
    w = h.useRef(null),
    [S, N] = h.useState(null),
    A = S?.modal,
    R = S?.open,
    I = typeof m == 'boolean' ? m : !!S && !S.modal && S.open && !!g
  ;(h.useEffect(() => {
    if (!g || A) return
    function M(V) {
      g && Fa(V) && (V.type === 'focusin' ? Sx : S3)(g)
    }
    return (
      g.addEventListener('focusin', M, !0),
      g.addEventListener('focusout', M, !0),
      () => {
        ;(g.removeEventListener('focusin', M, !0), g.removeEventListener('focusout', M, !0))
      }
    )
  }, [g, A]),
    h.useEffect(() => {
      !g || R || Sx(g)
    }, [R, g]))
  const j = h.useMemo(
    () => ({
      beforeOutsideRef: y,
      afterOutsideRef: x,
      beforeInsideRef: T,
      afterInsideRef: w,
      portalNode: g,
      setFocusManagerState: N,
    }),
    [g]
  )
  return E.jsxs(h.Fragment, {
    children: [
      v,
      E.jsxs($S.Provider, {
        value: j,
        children: [
          I &&
            g &&
            E.jsx(Wa, {
              'data-type': 'outside',
              ref: y,
              onFocus: (M) => {
                if (Fa(M, g)) T.current?.focus()
                else {
                  const V = S ? S.domReference : null
                  DS(V)?.focus()
                }
              },
            }),
          I && g && E.jsx('span', { 'aria-owns': g.id, style: N3 }),
          g && Yr.createPortal(a, g),
          I &&
            g &&
            E.jsx(Wa, {
              'data-type': 'outside',
              ref: x,
              onFocus: (M) => {
                if (Fa(M, g)) w.current?.focus()
                else {
                  const V = S ? S.domReference : null
                  ;(Nh(V)?.focus(),
                    S?.closeOnFocusOut && S?.onOpenChange(!1, De(Hi, M.nativeEvent)))
                }
              },
            }),
        ],
      }),
    ],
  })
})
function Ai(e) {
  return e == null ? e : 'current' in e ? e.current : e
}
function W3(e, r) {
  const l = xn(e.target)
  return e instanceof l.KeyboardEvent
    ? 'keyboard'
    : e instanceof l.FocusEvent
      ? r || 'keyboard'
      : 'pointerType' in e
        ? e.pointerType || 'keyboard'
        : 'touches' in e
          ? 'touch'
          : e instanceof l.MouseEvent
            ? r || (e.detail === 0 ? 'keyboard' : 'mouse')
            : ''
}
const Ox = 20
let Ll = []
function kh() {
  Ll = Ll.filter((e) => e.isConnected)
}
function eI(e) {
  ;(kh(), e && ei(e) !== 'body' && (Ll.push(e), Ll.length > Ox && (Ll = Ll.slice(-Ox))))
}
function sg() {
  return (kh(), Ll[Ll.length - 1])
}
function tI(e) {
  if (!e) return null
  const r = ms()
  return zS(e, r) ? e : Ju(e, r)[0] || e
}
function nI(e) {
  return !e || !e.isConnected
    ? !1
    : typeof e.checkVisibility == 'function'
      ? e.checkVisibility()
      : Nr(e).display !== 'none'
}
function Ax(e, r) {
  if (!r.current.includes('floating') && !e.getAttribute('role')?.includes('dialog')) return
  const l = ms(),
    u = y3(e, l).filter((d) => {
      const m = d.getAttribute('data-tabindex') || ''
      return zS(d, l) || (d.hasAttribute('data-tabindex') && !m.startsWith('-'))
    }),
    f = e.getAttribute('tabindex')
  r.current.includes('floating') || u.length === 0
    ? f !== '0' && e.setAttribute('tabindex', '0')
    : (f !== '-1' ||
        (e.hasAttribute('data-tabindex') && e.getAttribute('data-tabindex') !== '-1')) &&
      (e.setAttribute('tabindex', '-1'), e.setAttribute('data-tabindex', '-1'))
}
function Md(e) {
  const {
      context: r,
      children: l,
      disabled: a = !1,
      order: u = ['content'],
      initialFocus: f = !0,
      returnFocus: d = !0,
      restoreFocus: m = !1,
      modal: p = !0,
      closeOnFocusOut: g = !0,
      openInteractionType: v = '',
      getInsideElements: y = () => [],
      nextFocusableElement: x,
      previousFocusableElement: T,
      beforeContentFocusGuardRef: w,
      externalTree: S,
    } = e,
    N = 'rootStore' in r ? r.rootStore : r,
    A = N.useState('open'),
    R = N.useState('domReferenceElement'),
    I = N.useState('floatingElement'),
    { events: j, dataRef: M } = N.context,
    V = Te(() => M.current.floatingContext?.nodeId),
    k = Te(y),
    _ = f === !1,
    ee = Ag(R) && _,
    ie = an(u),
    Q = an(f),
    le = an(d),
    q = an(v),
    Y = ni(S),
    F = KS(),
    z = h.useRef(null),
    L = h.useRef(null),
    D = h.useRef(!1),
    $ = h.useRef(!1),
    oe = h.useRef(!1),
    O = h.useRef(-1),
    P = h.useRef(''),
    H = h.useRef(''),
    X = sn(),
    te = sn(),
    re = Qu(),
    W = F != null,
    de = Du(I),
    ve = Te((be = de) => (be ? Ju(be, ms()) : [])),
    ue = Te((be) => {
      const Se = ve(be)
      return ie.current
        .map(() => Se)
        .filter(Boolean)
        .flat()
    })
  ;(h.useEffect(() => {
    if (a || !p) return
    function be(Le) {
      Le.key === 'Tab' && tt(de, xo(on(de))) && ve().length === 0 && !ee && ln(Le)
    }
    const Se = on(de)
    return (
      Se.addEventListener('keydown', be),
      () => {
        Se.removeEventListener('keydown', be)
      }
    )
  }, [a, R, de, p, ie, ee, ve, ue]),
    h.useEffect(() => {
      if (a || !I) return
      function be(Se) {
        const Le = On(Se),
          _e = ve().indexOf(Le)
        _e !== -1 && (O.current = _e)
      }
      return (
        I.addEventListener('focusin', be),
        () => {
          I.removeEventListener('focusin', be)
        }
      )
    }, [a, I, ve]),
    h.useEffect(() => {
      if (a || !A) return
      const be = on(de)
      function Se() {
        oe.current = !1
      }
      function Le(_e) {
        const pe = On(_e),
          je = tt(I, pe) || tt(R, pe) || tt(F?.portalNode, pe)
        ;((oe.current = !je), (H.current = _e.pointerType || 'keyboard'))
      }
      function Oe() {
        H.current = 'keyboard'
      }
      return (
        be.addEventListener('pointerdown', Le, !0),
        be.addEventListener('pointerup', Se, !0),
        be.addEventListener('pointercancel', Se, !0),
        be.addEventListener('keydown', Oe, !0),
        () => {
          ;(be.removeEventListener('pointerdown', Le, !0),
            be.removeEventListener('pointerup', Se, !0),
            be.removeEventListener('pointercancel', Se, !0),
            be.removeEventListener('keydown', Oe, !0))
        }
      )
    }, [a, I, R, de, A, F]),
    h.useEffect(() => {
      if (a || !g) return
      function be() {
        ;(($.current = !0),
          te.start(0, () => {
            $.current = !1
          }))
      }
      function Se(pe) {
        const je = pe.relatedTarget,
          Ce = pe.currentTarget,
          Me = On(pe)
        queueMicrotask(() => {
          const we = V(),
            Xe = N.context.triggerElements,
            We = !(
              tt(R, je) ||
              tt(I, je) ||
              tt(je, I) ||
              tt(F?.portalNode, je) ||
              (je != null && Xe.hasElement(je)) ||
              Xe.hasMatchingElement((Be) => tt(Be, je)) ||
              je?.hasAttribute(Ja('focus-guard')) ||
              (Y &&
                (Di(Y.nodesRef.current, we).find(
                  (Be) =>
                    tt(Be.context?.elements.floating, je) ||
                    tt(Be.context?.elements.domReference, je)
                ) ||
                  hx(Y.nodesRef.current, we).find(
                    (Be) =>
                      [Be.context?.elements.floating, Du(Be.context?.elements.floating)].includes(
                        je
                      ) || Be.context?.elements.domReference === je
                  )))
            )
          if (
            (Ce === R && de && Ax(de, ie), m && Ce !== R && !nI(Me) && xo(on(de)) === on(de).body)
          ) {
            if (Wt(de) && (de.focus(), m === 'popup')) {
              re.request(() => {
                de.focus()
              })
              return
            }
            const Be = O.current,
              dt = ve(),
              Rt = dt[Be] || dt[dt.length - 1] || de
            Wt(Rt) && Rt.focus()
          }
          if (M.current.insideReactTree) {
            M.current.insideReactTree = !1
            return
          }
          ;(ee || !p) &&
            je &&
            We &&
            !$.current &&
            (ee || je !== sg()) &&
            ((D.current = !0), N.setOpen(!1, De(Hi, pe)))
        })
      }
      function Le() {
        oe.current ||
          ((M.current.insideReactTree = !0),
          X.start(0, () => {
            M.current.insideReactTree = !1
          }))
      }
      const Oe = Wt(R) ? R : null,
        _e = []
      if (!(!I && !Oe))
        return (
          Oe &&
            (Oe.addEventListener('focusout', Se),
            Oe.addEventListener('pointerdown', be),
            _e.push(() => {
              ;(Oe.removeEventListener('focusout', Se), Oe.removeEventListener('pointerdown', be))
            })),
          I &&
            (I.addEventListener('focusout', Se),
            F &&
              (I.addEventListener('focusout', Le, !0),
              _e.push(() => {
                I.removeEventListener('focusout', Le, !0)
              })),
            _e.push(() => {
              I.removeEventListener('focusout', Se)
            })),
          () => {
            _e.forEach((pe) => {
              pe()
            })
          }
        )
    }, [a, R, I, de, p, Y, F, N, g, m, ve, ee, V, ie, M, X, te, re]))
  const K = h.useRef(null),
    xe = h.useRef(null),
    Ee = nl(K, w, F?.beforeInsideRef),
    Fe = nl(xe, F?.afterInsideRef)
  ;(h.useEffect(() => {
    if (a || !I || !A) return
    const be = Array.from(F?.portalNode?.querySelectorAll(`[${Ja('portal')}]`) || []),
      Le = (Y ? hx(Y.nodesRef.current, V()) : []).find((pe) =>
        Ag(pe.context?.elements.domReference || null)
      )?.context?.elements.domReference,
      Oe = [
        I,
        Le,
        ...be,
        ...k(),
        z.current,
        L.current,
        K.current,
        xe.current,
        F?.beforeOutsideRef.current,
        F?.afterOutsideRef.current,
        Ai(T),
        Ai(x),
        ee ? R : null,
      ].filter((pe) => pe != null),
      _e = V3(Oe, p || ee)
    return () => {
      _e()
    }
  }, [A, a, R, I, p, ie, F, ee, Y, V, k, x, T]),
    Ne(() => {
      if (!A || a || !Wt(de)) return
      const be = on(de),
        Se = xo(be)
      queueMicrotask(() => {
        const Le = ue(de),
          Oe = Q.current,
          _e = typeof Oe == 'function' ? Oe(q.current || '') : Oe
        if (_e === void 0 || _e === !1) return
        let pe
        ;(_e === !0 || _e === null ? (pe = Le[0] || de) : (pe = Ai(_e)),
          (pe = pe || Le[0] || de),
          !tt(de, Se) && Df(pe, { preventScroll: pe === de }))
      })
    }, [a, A, de, _, ue, Q, q]),
    Ne(() => {
      if (a || !de) return
      const be = on(de),
        Se = xo(be)
      eI(Se)
      function Le(pe) {
        if (
          (pe.open || (P.current = W3(pe.nativeEvent, H.current)),
          pe.reason === Cr && pe.nativeEvent.type === 'mouseleave' && (D.current = !0),
          pe.reason === Dh)
        )
          if (pe.nested) D.current = !1
          else if (SS(pe.nativeEvent) || RS(pe.nativeEvent)) D.current = !1
          else {
            let je = !1
            ;(document.createElement('div').focus({
              get preventScroll() {
                return ((je = !0), !1)
              },
            }),
              je ? (D.current = !1) : (D.current = !0))
          }
      }
      j.on('openchange', Le)
      const Oe = be.createElement('span')
      ;(Oe.setAttribute('tabindex', '-1'),
        Oe.setAttribute('aria-hidden', 'true'),
        Object.assign(Oe.style, Cd),
        W && R && R.insertAdjacentElement('afterend', Oe))
      function _e() {
        const pe = le.current
        let je = typeof pe == 'function' ? pe(P.current) : pe
        if (je === void 0 || je === !1) return null
        if ((je === null && (je = !0), typeof je == 'boolean')) {
          const Me = R || sg()
          return Me && Me.isConnected ? Me : Oe
        }
        const Ce = R || sg() || Oe
        return Ai(je) || Ce
      }
      return () => {
        j.off('openchange', Le)
        const pe = xo(be),
          je =
            tt(I, pe) ||
            (Y &&
              Di(Y.nodesRef.current, V(), !1).some((Me) => tt(Me.context?.elements.floating, pe))),
          Ce = _e()
        queueMicrotask(() => {
          const Me = tI(Ce),
            we = typeof le.current != 'boolean'
          ;(le.current &&
            !D.current &&
            Wt(Me) &&
            (!(!we && Me !== pe && pe !== be.body) || je) &&
            Me.focus({ preventScroll: !0 }),
            Oe.remove())
        })
      }
    }, [a, I, de, le, M, j, Y, W, R, V]),
    h.useEffect(() => {
      queueMicrotask(() => {
        D.current = !1
      })
    }, [a]),
    h.useEffect(() => {
      if (a || !A) return
      function be(Le) {
        On(Le)?.closest(`[${LS}]`) && ($.current = !0)
      }
      const Se = on(de)
      return (
        Se.addEventListener('pointerdown', be, !0),
        () => {
          Se.removeEventListener('pointerdown', be, !0)
        }
      )
    }, [a, A, de]),
    Ne(() => {
      if (!a && F)
        return (
          F.setFocusManagerState({
            modal: p,
            closeOnFocusOut: g,
            open: A,
            onOpenChange: N.setOpen,
            domReference: R,
          }),
          () => {
            F.setFocusManagerState(null)
          }
        )
    }, [a, F, p, A, N, g, R]),
    Ne(() => {
      if (!(a || !de))
        return (
          Ax(de, ie),
          () => {
            queueMicrotask(kh)
          }
        )
    }, [a, de, ie]))
  const Re = !a && (p ? !ee : !0) && (W || p)
  return E.jsxs(h.Fragment, {
    children: [
      Re &&
        E.jsx(Wa, {
          'data-type': 'inside',
          ref: Ee,
          onFocus: (be) => {
            if (p) {
              const Se = ue()
              Df(Se[Se.length - 1])
            } else
              F?.portalNode &&
                ((D.current = !1),
                Fa(be, F.portalNode) ? Nh(R)?.focus() : Ai(T ?? F.beforeOutsideRef)?.focus())
          },
        }),
      l,
      Re &&
        E.jsx(Wa, {
          'data-type': 'inside',
          ref: Fe,
          onFocus: (be) => {
            p
              ? Df(ue()[0])
              : F?.portalNode &&
                (g && (D.current = !0),
                Fa(be, F.portalNode) ? DS(R)?.focus() : Ai(x ?? F.afterOutsideRef)?.focus())
          },
        }),
    ],
  })
}
function ps(e, r = {}) {
  const l = 'rootStore' in e ? e.rootStore : e,
    a = l.context.dataRef,
    {
      enabled: u = !0,
      event: f = 'click',
      toggle: d = !0,
      ignoreMouse: m = !1,
      stickIfOpen: p = !0,
      touchOpenDelay: g = 0,
    } = r,
    v = h.useRef(void 0),
    y = Qu(),
    x = sn(),
    T = h.useMemo(
      () => ({
        onPointerDown(w) {
          v.current = w.pointerType
        },
        onMouseDown(w) {
          const S = v.current,
            N = w.nativeEvent,
            A = l.select('open')
          if (w.button !== 0 || f === 'click' || (Xa(S, !0) && m)) return
          const R = a.current.openEvent,
            I = R?.type,
            j = l.select('domReferenceElement') !== w.currentTarget,
            M = (A && j) || !(A && d && (!(R && p) || I === 'click' || I === 'mousedown'))
          if (wh(N.target)) {
            const k = De(ji, N, N.target)
            M && S === 'touch' && g > 0
              ? x.start(g, () => {
                  l.setOpen(!0, k)
                })
              : l.setOpen(M, k)
            return
          }
          const V = w.currentTarget
          y.request(() => {
            const k = De(ji, N, V)
            M && S === 'touch' && g > 0
              ? x.start(g, () => {
                  l.setOpen(!0, k)
                })
              : l.setOpen(M, k)
          })
        },
        onClick(w) {
          if (f === 'mousedown-only') return
          const S = v.current
          if (f === 'mousedown' && S) {
            v.current = void 0
            return
          }
          if (Xa(S, !0) && m) return
          const N = l.select('open'),
            A = a.current.openEvent,
            R = l.select('domReferenceElement') !== w.currentTarget,
            I = (N && R) || !(N && d && (!(A && p) || ES(A))),
            j = De(ji, w.nativeEvent, w.currentTarget)
          I && S === 'touch' && g > 0
            ? x.start(g, () => {
                l.setOpen(!0, j)
              })
            : l.setOpen(I, j)
        },
        onKeyDown() {
          v.current = void 0
        },
      }),
      [a, f, m, l, p, d, y, x, g]
    )
  return h.useMemo(() => (u ? { reference: T } : en), [u, T])
}
function Nx(e, r, l) {
  let { reference: a, floating: u } = e
  const f = Pr(r),
    d = Ah(r),
    m = Oh(d),
    p = wr(r),
    g = f === 'y',
    v = a.x + a.width / 2 - u.width / 2,
    y = a.y + a.height / 2 - u.height / 2,
    x = a[m] / 2 - u[m] / 2
  let T
  switch (p) {
    case 'top':
      T = { x: v, y: a.y - u.height }
      break
    case 'bottom':
      T = { x: v, y: a.y + a.height }
      break
    case 'right':
      T = { x: a.x + a.width, y }
      break
    case 'left':
      T = { x: a.x - u.width, y }
      break
    default:
      T = { x: a.x, y: a.y }
  }
  switch (ti(r)) {
    case 'start':
      T[d] -= x * (l && g ? -1 : 1)
      break
    case 'end':
      T[d] += x * (l && g ? -1 : 1)
      break
  }
  return T
}
const rI = async (e, r, l) => {
  const { placement: a = 'bottom', strategy: u = 'absolute', middleware: f = [], platform: d } = l,
    m = f.filter(Boolean),
    p = await (d.isRTL == null ? void 0 : d.isRTL(r))
  let g = await d.getElementRects({ reference: e, floating: r, strategy: u }),
    { x: v, y } = Nx(g, a, p),
    x = a,
    T = {},
    w = 0
  for (let S = 0; S < m.length; S++) {
    const { name: N, fn: A } = m[S],
      {
        x: R,
        y: I,
        data: j,
        reset: M,
      } = await A({
        x: v,
        y,
        initialPlacement: a,
        placement: x,
        strategy: u,
        middlewareData: T,
        rects: g,
        platform: d,
        elements: { reference: e, floating: r },
      })
    ;((v = R ?? v),
      (y = I ?? y),
      (T = { ...T, [N]: { ...T[N], ...j } }),
      M &&
        w <= 50 &&
        (w++,
        typeof M == 'object' &&
          (M.placement && (x = M.placement),
          M.rects &&
            (g =
              M.rects === !0
                ? await d.getElementRects({ reference: e, floating: r, strategy: u })
                : M.rects),
          ({ x: v, y } = Nx(g, x, p))),
        (S = -1)))
  }
  return { x: v, y, placement: x, strategy: u, middlewareData: T }
}
async function ku(e, r) {
  var l
  r === void 0 && (r = {})
  const { x: a, y: u, platform: f, rects: d, elements: m, strategy: p } = e,
    {
      boundary: g = 'clippingAncestors',
      rootBoundary: v = 'viewport',
      elementContext: y = 'floating',
      altBoundary: x = !1,
      padding: T = 0,
    } = tl(r, e),
    w = TS(T),
    N = m[x ? (y === 'floating' ? 'reference' : 'floating') : y],
    A = Pf(
      await f.getClippingRect({
        element:
          (l = await (f.isElement == null ? void 0 : f.isElement(N))) == null || l
            ? N
            : N.contextElement ||
              (await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(m.floating))),
        boundary: g,
        rootBoundary: v,
        strategy: p,
      })
    ),
    R =
      y === 'floating'
        ? { x: a, y: u, width: d.floating.width, height: d.floating.height }
        : d.reference,
    I = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m.floating)),
    j = (await (f.isElement == null ? void 0 : f.isElement(I)))
      ? (await (f.getScale == null ? void 0 : f.getScale(I))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    M = Pf(
      f.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: m,
            rect: R,
            offsetParent: I,
            strategy: p,
          })
        : R
    )
  return {
    top: (A.top - M.top + w.top) / j.y,
    bottom: (M.bottom - A.bottom + w.bottom) / j.y,
    left: (A.left - M.left + w.left) / j.x,
    right: (M.right - A.right + w.right) / j.x,
  }
}
const oI = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'flip',
      options: e,
      async fn(r) {
        var l, a
        const {
            placement: u,
            middlewareData: f,
            rects: d,
            initialPlacement: m,
            platform: p,
            elements: g,
          } = r,
          {
            mainAxis: v = !0,
            crossAxis: y = !0,
            fallbackPlacements: x,
            fallbackStrategy: T = 'bestFit',
            fallbackAxisSideDirection: w = 'none',
            flipAlignment: S = !0,
            ...N
          } = tl(e, r)
        if ((l = f.arrow) != null && l.alignmentOffset) return {}
        const A = wr(u),
          R = Pr(m),
          I = wr(m) === m,
          j = await (p.isRTL == null ? void 0 : p.isRTL(g.floating)),
          M = x || (I || !S ? [Ff(m)] : Kz(m)),
          V = w !== 'none'
        !x && V && M.push(...Jz(m, S, w, j))
        const k = [m, ...M],
          _ = await ku(r, N),
          ee = []
        let ie = ((a = f.flip) == null ? void 0 : a.overflows) || []
        if ((v && ee.push(_[A]), y)) {
          const Y = $z(u, d, j)
          ee.push(_[Y[0]], _[Y[1]])
        }
        if (((ie = [...ie, { placement: u, overflows: ee }]), !ee.every((Y) => Y <= 0))) {
          var Q, le
          const Y = (((Q = f.flip) == null ? void 0 : Q.index) || 0) + 1,
            F = k[Y]
          if (
            F &&
            (!(y === 'alignment' ? R !== Pr(F) : !1) ||
              ie.every((D) => (Pr(D.placement) === R ? D.overflows[0] > 0 : !0)))
          )
            return { data: { index: Y, overflows: ie }, reset: { placement: F } }
          let z =
            (le = ie
              .filter((L) => L.overflows[0] <= 0)
              .sort((L, D) => L.overflows[1] - D.overflows[1])[0]) == null
              ? void 0
              : le.placement
          if (!z)
            switch (T) {
              case 'bestFit': {
                var q
                const L =
                  (q = ie
                    .filter((D) => {
                      if (V) {
                        const $ = Pr(D.placement)
                        return $ === R || $ === 'y'
                      }
                      return !0
                    })
                    .map((D) => [
                      D.placement,
                      D.overflows.filter(($) => $ > 0).reduce(($, oe) => $ + oe, 0),
                    ])
                    .sort((D, $) => D[1] - $[1])[0]) == null
                    ? void 0
                    : q[0]
                L && (z = L)
                break
              }
              case 'initialPlacement':
                z = m
                break
            }
          if (u !== z) return { reset: { placement: z } }
        }
        return {}
      },
    }
  )
}
function zx(e, r) {
  return {
    top: e.top - r.height,
    right: e.right - r.width,
    bottom: e.bottom - r.height,
    left: e.left - r.width,
  }
}
function Ix(e) {
  return Pz.some((r) => e[r] >= 0)
}
const lI = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'hide',
        options: e,
        async fn(r) {
          const { rects: l } = r,
            { strategy: a = 'referenceHidden', ...u } = tl(e, r)
          switch (a) {
            case 'referenceHidden': {
              const f = await ku(r, { ...u, elementContext: 'reference' }),
                d = zx(f, l.reference)
              return { data: { referenceHiddenOffsets: d, referenceHidden: Ix(d) } }
            }
            case 'escaped': {
              const f = await ku(r, { ...u, altBoundary: !0 }),
                d = zx(f, l.floating)
              return { data: { escapedOffsets: d, escaped: Ix(d) } }
            }
            default:
              return {}
          }
        },
      }
    )
  },
  XS = new Set(['left', 'top'])
async function iI(e, r) {
  const { placement: l, platform: a, elements: u } = e,
    f = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
    d = wr(l),
    m = ti(l),
    p = Pr(l) === 'y',
    g = XS.has(d) ? -1 : 1,
    v = f && p ? -1 : 1,
    y = tl(r, e)
  let {
    mainAxis: x,
    crossAxis: T,
    alignmentAxis: w,
  } = typeof y == 'number'
    ? { mainAxis: y, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: y.mainAxis || 0, crossAxis: y.crossAxis || 0, alignmentAxis: y.alignmentAxis }
  return (
    m && typeof w == 'number' && (T = m === 'end' ? w * -1 : w),
    p ? { x: T * v, y: x * g } : { x: x * g, y: T * v }
  )
}
const aI = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(r) {
          var l, a
          const { x: u, y: f, placement: d, middlewareData: m } = r,
            p = await iI(r, e)
          return d === ((l = m.offset) == null ? void 0 : l.placement) &&
            (a = m.arrow) != null &&
            a.alignmentOffset
            ? {}
            : { x: u + p.x, y: f + p.y, data: { ...p, placement: d } }
        },
      }
    )
  },
  sI = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(r) {
          const { x: l, y: a, placement: u } = r,
            {
              mainAxis: f = !0,
              crossAxis: d = !1,
              limiter: m = {
                fn: (N) => {
                  let { x: A, y: R } = N
                  return { x: A, y: R }
                },
              },
              ...p
            } = tl(e, r),
            g = { x: l, y: a },
            v = await ku(r, p),
            y = Pr(wr(u)),
            x = Mh(y)
          let T = g[x],
            w = g[y]
          if (f) {
            const N = x === 'y' ? 'top' : 'left',
              A = x === 'y' ? 'bottom' : 'right',
              R = T + v[N],
              I = T - v[A]
            T = Ng(R, T, I)
          }
          if (d) {
            const N = y === 'y' ? 'top' : 'left',
              A = y === 'y' ? 'bottom' : 'right',
              R = w + v[N],
              I = w - v[A]
            w = Ng(R, w, I)
          }
          const S = m.fn({ ...r, [x]: T, [y]: w })
          return { ...S, data: { x: S.x - l, y: S.y - a, enabled: { [x]: f, [y]: d } } }
        },
      }
    )
  },
  uI = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(r) {
          const { x: l, y: a, placement: u, rects: f, middlewareData: d } = r,
            { offset: m = 0, mainAxis: p = !0, crossAxis: g = !0 } = tl(e, r),
            v = { x: l, y: a },
            y = Pr(u),
            x = Mh(y)
          let T = v[x],
            w = v[y]
          const S = tl(m, r),
            N =
              typeof S == 'number'
                ? { mainAxis: S, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...S }
          if (p) {
            const I = x === 'y' ? 'height' : 'width',
              j = f.reference[x] - f.floating[I] + N.mainAxis,
              M = f.reference[x] + f.reference[I] - N.mainAxis
            T < j ? (T = j) : T > M && (T = M)
          }
          if (g) {
            var A, R
            const I = x === 'y' ? 'width' : 'height',
              j = XS.has(wr(u)),
              M =
                f.reference[y] -
                f.floating[I] +
                ((j && ((A = d.offset) == null ? void 0 : A[y])) || 0) +
                (j ? 0 : N.crossAxis),
              V =
                f.reference[y] +
                f.reference[I] +
                (j ? 0 : ((R = d.offset) == null ? void 0 : R[y]) || 0) -
                (j ? N.crossAxis : 0)
            w < M ? (w = M) : w > V && (w = V)
          }
          return { [x]: T, [y]: w }
        },
      }
    )
  },
  cI = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(r) {
          var l, a
          const { placement: u, rects: f, platform: d, elements: m } = r,
            { apply: p = () => {}, ...g } = tl(e, r),
            v = await ku(r, g),
            y = wr(u),
            x = ti(u),
            T = Pr(u) === 'y',
            { width: w, height: S } = f.floating
          let N, A
          y === 'top' || y === 'bottom'
            ? ((N = y),
              (A =
                x === ((await (d.isRTL == null ? void 0 : d.isRTL(m.floating))) ? 'start' : 'end')
                  ? 'left'
                  : 'right'))
            : ((A = y), (N = x === 'end' ? 'top' : 'bottom'))
          const R = S - v.top - v.bottom,
            I = w - v.left - v.right,
            j = Qa(S - v[N], R),
            M = Qa(w - v[A], I),
            V = !r.middlewareData.shift
          let k = j,
            _ = M
          if (
            ((l = r.middlewareData.shift) != null && l.enabled.x && (_ = I),
            (a = r.middlewareData.shift) != null && a.enabled.y && (k = R),
            V && !x)
          ) {
            const ie = Tr(v.left, 0),
              Q = Tr(v.right, 0),
              le = Tr(v.top, 0),
              q = Tr(v.bottom, 0)
            T
              ? (_ = w - 2 * (ie !== 0 || Q !== 0 ? ie + Q : Tr(v.left, v.right)))
              : (k = S - 2 * (le !== 0 || q !== 0 ? le + q : Tr(v.top, v.bottom)))
          }
          await p({ ...r, availableWidth: _, availableHeight: k })
          const ee = await d.getDimensions(m.floating)
          return w !== ee.width || S !== ee.height ? { reset: { rects: !0 } } : {}
        },
      }
    )
  }
function QS(e) {
  const r = Nr(e)
  let l = parseFloat(r.width) || 0,
    a = parseFloat(r.height) || 0
  const u = Wt(e),
    f = u ? e.offsetWidth : l,
    d = u ? e.offsetHeight : a,
    m = Bf(l) !== f || Bf(a) !== d
  return (m && ((l = f), (a = d)), { width: l, height: a, $: m })
}
function _h(e) {
  return Ot(e) ? e : e.contextElement
}
function qa(e) {
  const r = _h(e)
  if (!Wt(r)) return Ro(1)
  const l = r.getBoundingClientRect(),
    { width: a, height: u, $: f } = QS(r)
  let d = (f ? Bf(l.width) : l.width) / a,
    m = (f ? Bf(l.height) : l.height) / u
  return (
    (!d || !Number.isFinite(d)) && (d = 1),
    (!m || !Number.isFinite(m)) && (m = 1),
    { x: d, y: m }
  )
}
const fI = Ro(0)
function ZS(e) {
  const r = xn(e)
  return !Sd() || !r.visualViewport
    ? fI
    : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop }
}
function dI(e, r, l) {
  return (r === void 0 && (r = !1), !l || (r && l !== xn(e)) ? !1 : r)
}
function Bi(e, r, l, a) {
  ;(r === void 0 && (r = !1), l === void 0 && (l = !1))
  const u = e.getBoundingClientRect(),
    f = _h(e)
  let d = Ro(1)
  r && (a ? Ot(a) && (d = qa(a)) : (d = qa(e)))
  const m = dI(f, l, a) ? ZS(f) : Ro(0)
  let p = (u.left + m.x) / d.x,
    g = (u.top + m.y) / d.y,
    v = u.width / d.x,
    y = u.height / d.y
  if (f) {
    const x = xn(f),
      T = a && Ot(a) ? xn(a) : a
    let w = x,
      S = Mg(w)
    for (; S && a && T !== w; ) {
      const N = qa(S),
        A = S.getBoundingClientRect(),
        R = Nr(S),
        I = A.left + (S.clientLeft + parseFloat(R.paddingLeft)) * N.x,
        j = A.top + (S.clientTop + parseFloat(R.paddingTop)) * N.y
      ;((p *= N.x),
        (g *= N.y),
        (v *= N.x),
        (y *= N.y),
        (p += I),
        (g += j),
        (w = xn(S)),
        (S = Mg(w)))
    }
  }
  return Pf({ width: v, height: y, x: p, y: g })
}
function Od(e, r) {
  const l = Rd(e).scrollLeft
  return r ? r.left + l : Bi(Co(e)).left + l
}
function JS(e, r) {
  const l = e.getBoundingClientRect(),
    a = l.left + r.scrollLeft - Od(e, l),
    u = l.top + r.scrollTop
  return { x: a, y: u }
}
function mI(e) {
  let { elements: r, rect: l, offsetParent: a, strategy: u } = e
  const f = u === 'fixed',
    d = Co(a),
    m = r ? xd(r.floating) : !1
  if (a === d || (m && f)) return l
  let p = { scrollLeft: 0, scrollTop: 0 },
    g = Ro(1)
  const v = Ro(0),
    y = Wt(a)
  if ((y || (!y && !f)) && ((ei(a) !== 'body' || Ji(d)) && (p = Rd(a)), Wt(a))) {
    const T = Bi(a)
    ;((g = qa(a)), (v.x = T.x + a.clientLeft), (v.y = T.y + a.clientTop))
  }
  const x = d && !y && !f ? JS(d, p) : Ro(0)
  return {
    width: l.width * g.x,
    height: l.height * g.y,
    x: l.x * g.x - p.scrollLeft * g.x + v.x + x.x,
    y: l.y * g.y - p.scrollTop * g.y + v.y + x.y,
  }
}
function pI(e) {
  return Array.from(e.getClientRects())
}
function gI(e) {
  const r = Co(e),
    l = Rd(e),
    a = e.ownerDocument.body,
    u = Tr(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth),
    f = Tr(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight)
  let d = -l.scrollLeft + Od(e)
  const m = -l.scrollTop
  return (
    Nr(a).direction === 'rtl' && (d += Tr(r.clientWidth, a.clientWidth) - u),
    { width: u, height: f, x: d, y: m }
  )
}
const Dx = 25
function hI(e, r) {
  const l = xn(e),
    a = Co(e),
    u = l.visualViewport
  let f = a.clientWidth,
    d = a.clientHeight,
    m = 0,
    p = 0
  if (u) {
    ;((f = u.width), (d = u.height))
    const v = Sd()
    ;(!v || (v && r === 'fixed')) && ((m = u.offsetLeft), (p = u.offsetTop))
  }
  const g = Od(a)
  if (g <= 0) {
    const v = a.ownerDocument,
      y = v.body,
      x = getComputedStyle(y),
      T =
        (v.compatMode === 'CSS1Compat' && parseFloat(x.marginLeft) + parseFloat(x.marginRight)) ||
        0,
      w = Math.abs(a.clientWidth - y.clientWidth - T)
    w <= Dx && (f -= w)
  } else g <= Dx && (f += g)
  return { width: f, height: d, x: m, y: p }
}
const bI = new Set(['absolute', 'fixed'])
function yI(e, r) {
  const l = Bi(e, !0, r === 'fixed'),
    a = l.top + e.clientTop,
    u = l.left + e.clientLeft,
    f = Wt(e) ? qa(e) : Ro(1),
    d = e.clientWidth * f.x,
    m = e.clientHeight * f.y,
    p = u * f.x,
    g = a * f.y
  return { width: d, height: m, x: p, y: g }
}
function jx(e, r, l) {
  let a
  if (r === 'viewport') a = hI(e, l)
  else if (r === 'document') a = gI(Co(e))
  else if (Ot(r)) a = yI(r, l)
  else {
    const u = ZS(e)
    a = { x: r.x - u.x, y: r.y - u.y, width: r.width, height: r.height }
  }
  return Pf(a)
}
function WS(e, r) {
  const l = To(e)
  return l === r || !Ot(l) || So(l) ? !1 : Nr(l).position === 'fixed' || WS(l, r)
}
function vI(e, r) {
  const l = r.get(e)
  if (l) return l
  let a = Bl(e, [], !1).filter((m) => Ot(m) && ei(m) !== 'body'),
    u = null
  const f = Nr(e).position === 'fixed'
  let d = f ? To(e) : e
  for (; Ot(d) && !So(d); ) {
    const m = Nr(d),
      p = Eh(d)
    ;(!p && m.position === 'fixed' && (u = null),
      (
        f
          ? !p && !u
          : (!p && m.position === 'static' && !!u && bI.has(u.position)) ||
            (Ji(d) && !p && WS(e, d))
      )
        ? (a = a.filter((v) => v !== d))
        : (u = m),
      (d = To(d)))
  }
  return (r.set(e, a), a)
}
function xI(e) {
  let { element: r, boundary: l, rootBoundary: a, strategy: u } = e
  const d = [...(l === 'clippingAncestors' ? (xd(r) ? [] : vI(r, this._c)) : [].concat(l)), a],
    m = d[0],
    p = d.reduce(
      (g, v) => {
        const y = jx(r, v, u)
        return (
          (g.top = Tr(y.top, g.top)),
          (g.right = Qa(y.right, g.right)),
          (g.bottom = Qa(y.bottom, g.bottom)),
          (g.left = Tr(y.left, g.left)),
          g
        )
      },
      jx(r, m, u)
    )
  return { width: p.right - p.left, height: p.bottom - p.top, x: p.left, y: p.top }
}
function SI(e) {
  const { width: r, height: l } = QS(e)
  return { width: r, height: l }
}
function RI(e, r, l) {
  const a = Wt(r),
    u = Co(r),
    f = l === 'fixed',
    d = Bi(e, !0, f, r)
  let m = { scrollLeft: 0, scrollTop: 0 }
  const p = Ro(0)
  function g() {
    p.x = Od(u)
  }
  if (a || (!a && !f))
    if (((ei(r) !== 'body' || Ji(u)) && (m = Rd(r)), a)) {
      const T = Bi(r, !0, f, r)
      ;((p.x = T.x + r.clientLeft), (p.y = T.y + r.clientTop))
    } else u && g()
  f && !a && u && g()
  const v = u && !a && !f ? JS(u, m) : Ro(0),
    y = d.left + m.scrollLeft - p.x - v.x,
    x = d.top + m.scrollTop - p.y - v.y
  return { x: y, y: x, width: d.width, height: d.height }
}
function ug(e) {
  return Nr(e).position === 'static'
}
function kx(e, r) {
  if (!Wt(e) || Nr(e).position === 'fixed') return null
  if (r) return r(e)
  let l = e.offsetParent
  return (Co(e) === l && (l = l.ownerDocument.body), l)
}
function eR(e, r) {
  const l = xn(e)
  if (xd(e)) return l
  if (!Wt(e)) {
    let u = To(e)
    for (; u && !So(u); ) {
      if (Ot(u) && !ug(u)) return u
      u = To(u)
    }
    return l
  }
  let a = kx(e, r)
  for (; a && vz(a) && ug(a); ) a = kx(a, r)
  return a && So(a) && ug(a) && !Eh(a) ? l : a || Tz(e) || l
}
const EI = async function (e) {
  const r = this.getOffsetParent || eR,
    l = this.getDimensions,
    a = await l(e.floating)
  return {
    reference: RI(e.reference, await r(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: a.width, height: a.height },
  }
}
function TI(e) {
  return Nr(e).direction === 'rtl'
}
const CI = {
  convertOffsetParentRelativeRectToViewportRelativeRect: mI,
  getDocumentElement: Co,
  getClippingRect: xI,
  getOffsetParent: eR,
  getElementRects: EI,
  getClientRects: pI,
  getDimensions: SI,
  getScale: qa,
  isElement: Ot,
  isRTL: TI,
}
function tR(e, r) {
  return e.x === r.x && e.y === r.y && e.width === r.width && e.height === r.height
}
function wI(e, r) {
  let l = null,
    a
  const u = Co(e)
  function f() {
    var m
    ;(clearTimeout(a), (m = l) == null || m.disconnect(), (l = null))
  }
  function d(m, p) {
    ;(m === void 0 && (m = !1), p === void 0 && (p = 1), f())
    const g = e.getBoundingClientRect(),
      { left: v, top: y, width: x, height: T } = g
    if ((m || r(), !x || !T)) return
    const w = Ba(y),
      S = Ba(u.clientWidth - (v + x)),
      N = Ba(u.clientHeight - (y + T)),
      A = Ba(v),
      I = {
        rootMargin: -w + 'px ' + -S + 'px ' + -N + 'px ' + -A + 'px',
        threshold: Tr(0, Qa(1, p)) || 1,
      }
    let j = !0
    function M(V) {
      const k = V[0].intersectionRatio
      if (k !== p) {
        if (!j) return d()
        k
          ? d(!1, k)
          : (a = setTimeout(() => {
              d(!1, 1e-7)
            }, 1e3))
      }
      ;(k === 1 && !tR(g, e.getBoundingClientRect()) && d(), (j = !1))
    }
    try {
      l = new IntersectionObserver(M, { ...I, root: u.ownerDocument })
    } catch {
      l = new IntersectionObserver(M, I)
    }
    l.observe(e)
  }
  return (d(!0), f)
}
function _x(e, r, l, a) {
  a === void 0 && (a = {})
  const {
      ancestorScroll: u = !0,
      ancestorResize: f = !0,
      elementResize: d = typeof ResizeObserver == 'function',
      layoutShift: m = typeof IntersectionObserver == 'function',
      animationFrame: p = !1,
    } = a,
    g = _h(e),
    v = u || f ? [...(g ? Bl(g) : []), ...Bl(r)] : []
  v.forEach((A) => {
    ;(u && A.addEventListener('scroll', l, { passive: !0 }), f && A.addEventListener('resize', l))
  })
  const y = g && m ? wI(g, l) : null
  let x = -1,
    T = null
  d &&
    ((T = new ResizeObserver((A) => {
      let [R] = A
      ;(R &&
        R.target === g &&
        T &&
        (T.unobserve(r),
        cancelAnimationFrame(x),
        (x = requestAnimationFrame(() => {
          var I
          ;(I = T) == null || I.observe(r)
        }))),
        l())
    })),
    g && !p && T.observe(g),
    T.observe(r))
  let w,
    S = p ? Bi(e) : null
  p && N()
  function N() {
    const A = Bi(e)
    ;(S && !tR(S, A) && l(), (S = A), (w = requestAnimationFrame(N)))
  }
  return (
    l(),
    () => {
      var A
      ;(v.forEach((R) => {
        ;(u && R.removeEventListener('scroll', l), f && R.removeEventListener('resize', l))
      }),
        y?.(),
        (A = T) == null || A.disconnect(),
        (T = null),
        p && cancelAnimationFrame(w))
    }
  )
}
const MI = aI,
  OI = sI,
  AI = oI,
  NI = cI,
  zI = lI,
  II = uI,
  DI = (e, r, l) => {
    const a = new Map(),
      u = { platform: CI, ...l },
      f = { ...u.platform, _c: a }
    return rI(e, r, { ...u, platform: f })
  }
var jI = typeof document < 'u',
  kI = function () {},
  jf = jI ? h.useLayoutEffect : kI
function Kf(e, r) {
  if (e === r) return !0
  if (typeof e != typeof r) return !1
  if (typeof e == 'function' && e.toString() === r.toString()) return !0
  let l, a, u
  if (e && r && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((l = e.length), l !== r.length)) return !1
      for (a = l; a-- !== 0; ) if (!Kf(e[a], r[a])) return !1
      return !0
    }
    if (((u = Object.keys(e)), (l = u.length), l !== Object.keys(r).length)) return !1
    for (a = l; a-- !== 0; ) if (!{}.hasOwnProperty.call(r, u[a])) return !1
    for (a = l; a-- !== 0; ) {
      const f = u[a]
      if (!(f === '_owner' && e.$$typeof) && !Kf(e[f], r[f])) return !1
    }
    return !0
  }
  return e !== e && r !== r
}
function nR(e) {
  return typeof window > 'u' ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Ux(e, r) {
  const l = nR(e)
  return Math.round(r * l) / l
}
function cg(e) {
  const r = h.useRef(e)
  return (
    jf(() => {
      r.current = e
    }),
    r
  )
}
function _I(e) {
  e === void 0 && (e = {})
  const {
      placement: r = 'bottom',
      strategy: l = 'absolute',
      middleware: a = [],
      platform: u,
      elements: { reference: f, floating: d } = {},
      transform: m = !0,
      whileElementsMounted: p,
      open: g,
    } = e,
    [v, y] = h.useState({
      x: 0,
      y: 0,
      strategy: l,
      placement: r,
      middlewareData: {},
      isPositioned: !1,
    }),
    [x, T] = h.useState(a)
  Kf(x, a) || T(a)
  const [w, S] = h.useState(null),
    [N, A] = h.useState(null),
    R = h.useCallback((D) => {
      D !== V.current && ((V.current = D), S(D))
    }, []),
    I = h.useCallback((D) => {
      D !== k.current && ((k.current = D), A(D))
    }, []),
    j = f || w,
    M = d || N,
    V = h.useRef(null),
    k = h.useRef(null),
    _ = h.useRef(v),
    ee = p != null,
    ie = cg(p),
    Q = cg(u),
    le = cg(g),
    q = h.useCallback(() => {
      if (!V.current || !k.current) return
      const D = { placement: r, strategy: l, middleware: x }
      ;(Q.current && (D.platform = Q.current),
        DI(V.current, k.current, D).then(($) => {
          const oe = { ...$, isPositioned: le.current !== !1 }
          Y.current &&
            !Kf(_.current, oe) &&
            ((_.current = oe),
            Yr.flushSync(() => {
              y(oe)
            }))
        }))
    }, [x, r, l, Q, le])
  jf(() => {
    g === !1 &&
      _.current.isPositioned &&
      ((_.current.isPositioned = !1), y((D) => ({ ...D, isPositioned: !1 })))
  }, [g])
  const Y = h.useRef(!1)
  ;(jf(
    () => (
      (Y.current = !0),
      () => {
        Y.current = !1
      }
    ),
    []
  ),
    jf(() => {
      if ((j && (V.current = j), M && (k.current = M), j && M)) {
        if (ie.current) return ie.current(j, M, q)
        q()
      }
    }, [j, M, q, ie, ee]))
  const F = h.useMemo(
      () => ({ reference: V, floating: k, setReference: R, setFloating: I }),
      [R, I]
    ),
    z = h.useMemo(() => ({ reference: j, floating: M }), [j, M]),
    L = h.useMemo(() => {
      const D = { position: l, left: 0, top: 0 }
      if (!z.floating) return D
      const $ = Ux(z.floating, v.x),
        oe = Ux(z.floating, v.y)
      return m
        ? {
            ...D,
            transform: 'translate(' + $ + 'px, ' + oe + 'px)',
            ...(nR(z.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: l, left: $, top: oe }
    }, [l, m, z.floating, v.x, v.y])
  return h.useMemo(
    () => ({ ...v, update: q, refs: F, elements: z, floatingStyles: L }),
    [v, q, F, z, L]
  )
}
const UI = (e, r) => ({ ...MI(e), options: [e, r] }),
  VI = (e, r) => ({ ...OI(e), options: [e, r] }),
  LI = (e, r) => ({ ...II(e), options: [e, r] }),
  HI = (e, r) => ({ ...AI(e), options: [e, r] }),
  BI = (e, r) => ({ ...NI(e), options: [e, r] }),
  FI = (e, r) => ({ ...zI(e), options: [e, r] }),
  PI = { intentional: 'onClick', sloppy: 'onPointerDown' }
function qI(e) {
  return {
    escapeKey: typeof e == 'boolean' ? e : (e?.escapeKey ?? !1),
    outsidePress: typeof e == 'boolean' ? e : (e?.outsidePress ?? !0),
  }
}
function Ad(e, r = {}) {
  const l = 'rootStore' in e ? e.rootStore : e,
    a = l.useState('open'),
    u = l.useState('floatingElement'),
    f = l.useState('referenceElement'),
    d = l.useState('domReferenceElement'),
    { onOpenChange: m, dataRef: p } = l.context,
    {
      enabled: g = !0,
      escapeKey: v = !0,
      outsidePress: y = !0,
      outsidePressEvent: x = 'sloppy',
      referencePress: T = !1,
      referencePressEvent: w = 'sloppy',
      ancestorScroll: S = !1,
      bubbles: N,
      externalTree: A,
    } = r,
    R = ni(A),
    I = Te(typeof y == 'function' ? y : () => !1),
    j = typeof y == 'function' ? I : y,
    M = h.useRef(!1),
    { escapeKey: V, outsidePress: k } = qI(N),
    _ = h.useRef(null),
    ee = sn(),
    ie = sn(),
    Q = Te(() => {
      ;(ie.clear(), (p.current.insideReactTree = !1))
    }),
    le = h.useRef(!1),
    q = h.useRef(''),
    Y = Te((K) => {
      q.current = K.pointerType
    }),
    F = Te(() => {
      const K = q.current,
        xe = K === 'pen' || !K ? 'mouse' : K,
        Ee = typeof x == 'function' ? x() : x
      return typeof Ee == 'string' ? Ee : Ee[xe]
    }),
    z = Te((K) => {
      if (!a || !g || !v || K.key !== 'Escape' || le.current) return
      const xe = p.current.floatingContext?.nodeId,
        Ee = R ? Di(R.nodesRef.current, xe) : []
      if (!V && Ee.length > 0) {
        let be = !0
        if (
          (Ee.forEach((Se) => {
            Se.context?.open && !Se.context.dataRef.current.__escapeKeyBubbles && (be = !1)
          }),
          !be)
        )
          return
      }
      const Fe = Fz(K) ? K.nativeEvent : K,
        Re = De(Td, Fe)
      ;(l.setOpen(!1, Re), !V && !Re.isPropagationAllowed && K.stopPropagation())
    }),
    L = Te((K) => {
      const xe = F()
      return (xe === 'intentional' && K.type !== 'click') || (xe === 'sloppy' && K.type === 'click')
    }),
    D = Te(() => {
      ;((p.current.insideReactTree = !0), ie.start(0, Q))
    }),
    $ = Te((K, xe = !1) => {
      if (L(K)) {
        Q()
        return
      }
      if (p.current.insideReactTree) {
        Q()
        return
      }
      if ((F() === 'intentional' && xe) || (typeof j == 'function' && !j(K))) return
      const Ee = On(K),
        Fe = `[${Ja('inert')}]`,
        Re = on(l.select('floatingElement')).querySelectorAll(Fe),
        be = l.context.triggerElements
      if (Ee && (be.hasElement(Ee) || be.hasMatchingElement((pe) => tt(pe, Ee)))) return
      let Se = Ot(Ee) ? Ee : null
      for (; Se && !So(Se); ) {
        const pe = To(Se)
        if (So(pe) || !Ot(pe)) break
        Se = pe
      }
      if (
        Re.length &&
        Ot(Ee) &&
        !Hz(Ee) &&
        !tt(Ee, l.select('floatingElement')) &&
        Array.from(Re).every((pe) => !tt(Se, pe))
      )
        return
      if (Wt(Ee) && !('touches' in K)) {
        const pe = So(Ee),
          je = Nr(Ee),
          Ce = /auto|scroll/,
          Me = pe || Ce.test(je.overflowX),
          we = pe || Ce.test(je.overflowY),
          Xe = Me && Ee.clientWidth > 0 && Ee.scrollWidth > Ee.clientWidth,
          We = we && Ee.clientHeight > 0 && Ee.scrollHeight > Ee.clientHeight,
          Be = je.direction === 'rtl',
          dt =
            We && (Be ? K.offsetX <= Ee.offsetWidth - Ee.clientWidth : K.offsetX > Ee.clientWidth),
          Rt = Xe && K.offsetY > Ee.clientHeight
        if (dt || Rt) return
      }
      const Le = p.current.floatingContext?.nodeId,
        Oe = R && Di(R.nodesRef.current, Le).some((pe) => to(K, pe.context?.elements.floating))
      if (to(K, l.select('floatingElement')) || to(K, l.select('domReferenceElement')) || Oe) return
      const _e = R ? Di(R.nodesRef.current, Le) : []
      if (_e.length > 0) {
        let pe = !0
        if (
          (_e.forEach((je) => {
            je.context?.open && !je.context.dataRef.current.__outsidePressBubbles && (pe = !1)
          }),
          !pe)
        )
          return
      }
      ;(l.setOpen(!1, De(Dh, K)), Q())
    }),
    oe = Te((K) => {
      F() !== 'sloppy' ||
        K.pointerType === 'touch' ||
        !l.select('open') ||
        !g ||
        to(K, l.select('floatingElement')) ||
        to(K, l.select('domReferenceElement')) ||
        $(K)
    }),
    O = Te((K) => {
      if (
        F() !== 'sloppy' ||
        !l.select('open') ||
        !g ||
        to(K, l.select('floatingElement')) ||
        to(K, l.select('domReferenceElement'))
      )
        return
      const xe = K.touches[0]
      xe &&
        ((_.current = {
          startTime: Date.now(),
          startX: xe.clientX,
          startY: xe.clientY,
          dismissOnTouchEnd: !1,
          dismissOnMouseDown: !0,
        }),
        ee.start(1e3, () => {
          _.current && ((_.current.dismissOnTouchEnd = !1), (_.current.dismissOnMouseDown = !1))
        }))
    }),
    P = Te((K) => {
      const xe = On(K)
      function Ee() {
        ;(O(K), xe?.removeEventListener(K.type, Ee))
      }
      xe?.addEventListener(K.type, Ee)
    }),
    H = Te((K) => {
      const xe = M.current
      if (
        ((M.current = !1),
        ee.clear(),
        K.type === 'mousedown' && _.current && !_.current.dismissOnMouseDown)
      )
        return
      const Ee = On(K)
      function Fe() {
        ;(K.type === 'pointerdown' ? oe(K) : $(K, xe), Ee?.removeEventListener(K.type, Fe))
      }
      Ee?.addEventListener(K.type, Fe)
    }),
    X = Te((K) => {
      if (
        F() !== 'sloppy' ||
        !_.current ||
        to(K, l.select('floatingElement')) ||
        to(K, l.select('domReferenceElement'))
      )
        return
      const xe = K.touches[0]
      if (!xe) return
      const Ee = Math.abs(xe.clientX - _.current.startX),
        Fe = Math.abs(xe.clientY - _.current.startY),
        Re = Math.sqrt(Ee * Ee + Fe * Fe)
      ;(Re > 5 && (_.current.dismissOnTouchEnd = !0),
        Re > 10 && ($(K), ee.clear(), (_.current = null)))
    }),
    te = Te((K) => {
      const xe = On(K)
      function Ee() {
        ;(X(K), xe?.removeEventListener(K.type, Ee))
      }
      xe?.addEventListener(K.type, Ee)
    }),
    re = Te((K) => {
      F() !== 'sloppy' ||
        !_.current ||
        to(K, l.select('floatingElement')) ||
        to(K, l.select('domReferenceElement')) ||
        (_.current.dismissOnTouchEnd && $(K), ee.clear(), (_.current = null))
    }),
    W = Te((K) => {
      const xe = On(K)
      function Ee() {
        ;(re(K), xe?.removeEventListener(K.type, Ee))
      }
      xe?.addEventListener(K.type, Ee)
    })
  ;(h.useEffect(() => {
    if (!a || !g) return
    ;((p.current.__escapeKeyBubbles = V), (p.current.__outsidePressBubbles = k))
    const K = new Li()
    function xe(Se) {
      l.setOpen(!1, De(ir, Se))
    }
    function Ee() {
      ;(K.clear(), (le.current = !0))
    }
    function Fe() {
      K.start(Sd() ? 5 : 0, () => {
        le.current = !1
      })
    }
    const Re = on(u)
    ;(Re.addEventListener('pointerdown', Y, !0),
      v &&
        (Re.addEventListener('keydown', z),
        Re.addEventListener('compositionstart', Ee),
        Re.addEventListener('compositionend', Fe)),
      j &&
        (Re.addEventListener('click', H, !0),
        Re.addEventListener('pointerdown', H, !0),
        Re.addEventListener('touchstart', P, !0),
        Re.addEventListener('touchmove', te, !0),
        Re.addEventListener('touchend', W, !0),
        Re.addEventListener('mousedown', H, !0)))
    let be = []
    return (
      S &&
        (Ot(d) && (be = Bl(d)),
        Ot(u) && (be = be.concat(Bl(u))),
        !Ot(f) && f && f.contextElement && (be = be.concat(Bl(f.contextElement)))),
      (be = be.filter((Se) => Se !== Re.defaultView?.visualViewport)),
      be.forEach((Se) => {
        Se.addEventListener('scroll', xe, { passive: !0 })
      }),
      () => {
        ;(Re.removeEventListener('pointerdown', Y, !0),
          v &&
            (Re.removeEventListener('keydown', z),
            Re.removeEventListener('compositionstart', Ee),
            Re.removeEventListener('compositionend', Fe)),
          j &&
            (Re.removeEventListener('click', H, !0),
            Re.removeEventListener('pointerdown', H, !0),
            Re.removeEventListener('touchstart', P, !0),
            Re.removeEventListener('touchmove', te, !0),
            Re.removeEventListener('touchend', W, !0),
            Re.removeEventListener('mousedown', H, !0)),
          be.forEach((Se) => {
            Se.removeEventListener('scroll', xe)
          }),
          K.clear())
      }
    )
  }, [p, u, f, d, v, j, a, m, S, g, V, k, z, $, H, oe, P, te, W, Y, l]),
    h.useEffect(Q, [j, Q]))
  const de = h.useMemo(
      () => ({
        onKeyDown: z,
        ...(T && {
          [PI[w]]: (K) => {
            l.setOpen(!1, De(ji, K.nativeEvent))
          },
          ...(w !== 'intentional' && {
            onClick(K) {
              l.setOpen(!1, De(ji, K.nativeEvent))
            },
          }),
        }),
      }),
      [z, l, T, w]
    ),
    ve = Te((K) => {
      const xe = On(K.nativeEvent)
      !tt(l.select('floatingElement'), xe) || K.button !== 0 || (M.current = !0)
    }),
    ue = h.useMemo(
      () => ({
        onKeyDown: z,
        onPointerDown: ve,
        onMouseDown: ve,
        onMouseUp: ve,
        onClickCapture: D,
        onMouseDownCapture: D,
        onPointerDownCapture: D,
        onMouseUpCapture: D,
        onTouchEndCapture: D,
        onTouchMoveCapture: D,
      }),
      [z, ve, D]
    )
  return h.useMemo(() => (g ? { reference: de, floating: ue, trigger: de } : {}), [g, de, ue])
}
var Xf = Symbol('NOT_FOUND')
function GI(e, r = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(r)
}
function YI(e, r = `expected an object, instead received ${typeof e}`) {
  if (typeof e != 'object') throw new TypeError(r)
}
function $I(e, r = 'expected all items to be functions, instead received the following types: ') {
  if (!e.every((l) => typeof l == 'function')) {
    const l = e
      .map((a) => (typeof a == 'function' ? `function ${a.name || 'unnamed'}()` : typeof a))
      .join(', ')
    throw new TypeError(`${r}[${l}]`)
  }
}
var Vx = (e) => (Array.isArray(e) ? e : [e])
function KI(e) {
  const r = Array.isArray(e[0]) ? e[0] : e
  return (
    $I(
      r,
      'createSelector expects all input-selectors to be functions, but received the following types: '
    ),
    r
  )
}
function XI(e, r) {
  const l = [],
    { length: a } = e
  for (let u = 0; u < a; u++) l.push(e[u].apply(null, r))
  return l
}
function QI(e) {
  let r
  return {
    get(l) {
      return r && e(r.key, l) ? r.value : Xf
    },
    put(l, a) {
      r = { key: l, value: a }
    },
    getEntries() {
      return r ? [r] : []
    },
    clear() {
      r = void 0
    },
  }
}
function ZI(e, r) {
  let l = []
  function a(m) {
    const p = l.findIndex((g) => r(m, g.key))
    if (p > -1) {
      const g = l[p]
      return (p > 0 && (l.splice(p, 1), l.unshift(g)), g.value)
    }
    return Xf
  }
  function u(m, p) {
    a(m) === Xf && (l.unshift({ key: m, value: p }), l.length > e && l.pop())
  }
  function f() {
    return l
  }
  function d() {
    l = []
  }
  return { get: a, put: u, getEntries: f, clear: d }
}
var JI = (e, r) => e === r
function WI(e) {
  return function (l, a) {
    if (l === null || a === null || l.length !== a.length) return !1
    const { length: u } = l
    for (let f = 0; f < u; f++) if (!e(l[f], a[f])) return !1
    return !0
  }
}
function eD(e, r) {
  const l = typeof r == 'object' ? r : { equalityCheck: r },
    { equalityCheck: a = JI, maxSize: u = 1, resultEqualityCheck: f } = l,
    d = WI(a)
  let m = 0
  const p = u <= 1 ? QI(d) : ZI(u, d)
  function g() {
    let v = p.get(arguments)
    if (v === Xf) {
      if (((v = e.apply(null, arguments)), m++, f)) {
        const x = p.getEntries().find((T) => f(T.value, v))
        x && ((v = x.value), m !== 0 && m--)
      }
      p.put(arguments, v)
    }
    return v
  }
  return (
    (g.clearCache = () => {
      ;(p.clear(), g.resetResultsCount())
    }),
    (g.resultsCount = () => m),
    (g.resetResultsCount = () => {
      m = 0
    }),
    g
  )
}
var tD = class {
    constructor(e) {
      this.value = e
    }
    deref() {
      return this.value
    }
  },
  nD = typeof WeakRef < 'u' ? WeakRef : tD,
  rD = 0,
  Lx = 1
function Rf() {
  return { s: rD, v: void 0, o: null, p: null }
}
function rR(e, r = {}) {
  let l = Rf()
  const { resultEqualityCheck: a } = r
  let u,
    f = 0
  function d() {
    let m = l
    const { length: p } = arguments
    for (let y = 0, x = p; y < x; y++) {
      const T = arguments[y]
      if (typeof T == 'function' || (typeof T == 'object' && T !== null)) {
        let w = m.o
        w === null && (m.o = w = new WeakMap())
        const S = w.get(T)
        S === void 0 ? ((m = Rf()), w.set(T, m)) : (m = S)
      } else {
        let w = m.p
        w === null && (m.p = w = new Map())
        const S = w.get(T)
        S === void 0 ? ((m = Rf()), w.set(T, m)) : (m = S)
      }
    }
    const g = m
    let v
    if (m.s === Lx) v = m.v
    else if (((v = e.apply(null, arguments)), f++, a)) {
      const y = u?.deref?.() ?? u
      ;(y != null && a(y, v) && ((v = y), f !== 0 && f--),
        (u = (typeof v == 'object' && v !== null) || typeof v == 'function' ? new nD(v) : v))
    }
    return ((g.s = Lx), (g.v = v), v)
  }
  return (
    (d.clearCache = () => {
      ;((l = Rf()), d.resetResultsCount())
    }),
    (d.resultsCount = () => f),
    (d.resetResultsCount = () => {
      f = 0
    }),
    d
  )
}
function oR(e, ...r) {
  const l = typeof e == 'function' ? { memoize: e, memoizeOptions: r } : e,
    a = (...u) => {
      let f = 0,
        d = 0,
        m,
        p = {},
        g = u.pop()
      ;(typeof g == 'object' && ((p = g), (g = u.pop())),
        GI(
          g,
          `createSelector expects an output function after the inputs, but received: [${typeof g}]`
        ))
      const v = { ...l, ...p },
        { memoize: y, memoizeOptions: x = [], argsMemoize: T = rR, argsMemoizeOptions: w = [] } = v,
        S = Vx(x),
        N = Vx(w),
        A = KI(u),
        R = y(
          function () {
            return (f++, g.apply(null, arguments))
          },
          ...S
        ),
        I = T(
          function () {
            d++
            const M = XI(A, arguments)
            return ((m = R.apply(null, M)), m)
          },
          ...N
        )
      return Object.assign(I, {
        resultFunc: g,
        memoizedResultFunc: R,
        dependencies: A,
        dependencyRecomputations: () => d,
        resetDependencyRecomputations: () => {
          d = 0
        },
        lastResult: () => m,
        recomputations: () => f,
        resetRecomputations: () => {
          f = 0
        },
        memoize: y,
        argsMemoize: T,
      })
    }
  return (Object.assign(a, { withTypes: () => a }), a)
}
var oD = oR(rR),
  lD = Object.assign(
    (e, r = oD) => {
      YI(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      )
      const l = Object.keys(e),
        a = l.map((f) => e[f])
      return r(a, (...f) => f.reduce((d, m, p) => ((d[l[p]] = m), d), {}))
    },
    { withTypes: () => lD }
  )
oR({ memoize: eD, memoizeOptions: { maxSize: 1, equalityCheck: Object.is } })
const fe = (e, r, l, a, u, f, ...d) => {
  if (d.length > 0) throw new Error(Ht(1))
  let m
  if (e) m = e
  else throw new Error('Missing arguments')
  return m
}
var fg = { exports: {} },
  dg = {}
var Hx
function iD() {
  if (Hx) return dg
  Hx = 1
  var e = Uu()
  function r(y, x) {
    return (y === x && (y !== 0 || 1 / y === 1 / x)) || (y !== y && x !== x)
  }
  var l = typeof Object.is == 'function' ? Object.is : r,
    a = e.useState,
    u = e.useEffect,
    f = e.useLayoutEffect,
    d = e.useDebugValue
  function m(y, x) {
    var T = x(),
      w = a({ inst: { value: T, getSnapshot: x } }),
      S = w[0].inst,
      N = w[1]
    return (
      f(
        function () {
          ;((S.value = T), (S.getSnapshot = x), p(S) && N({ inst: S }))
        },
        [y, T, x]
      ),
      u(
        function () {
          return (
            p(S) && N({ inst: S }),
            y(function () {
              p(S) && N({ inst: S })
            })
          )
        },
        [y]
      ),
      d(T),
      T
    )
  }
  function p(y) {
    var x = y.getSnapshot
    y = y.value
    try {
      var T = x()
      return !l(y, T)
    } catch {
      return !0
    }
  }
  function g(y, x) {
    return x()
  }
  var v =
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
      ? g
      : m
  return (
    (dg.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : v),
    dg
  )
}
var Bx
function lR() {
  return (Bx || ((Bx = 1), (fg.exports = iD())), fg.exports)
}
var aD = lR(),
  mg = { exports: {} },
  pg = {}
var Fx
function sD() {
  if (Fx) return pg
  Fx = 1
  var e = Uu(),
    r = lR()
  function l(g, v) {
    return (g === v && (g !== 0 || 1 / g === 1 / v)) || (g !== g && v !== v)
  }
  var a = typeof Object.is == 'function' ? Object.is : l,
    u = r.useSyncExternalStore,
    f = e.useRef,
    d = e.useEffect,
    m = e.useMemo,
    p = e.useDebugValue
  return (
    (pg.useSyncExternalStoreWithSelector = function (g, v, y, x, T) {
      var w = f(null)
      if (w.current === null) {
        var S = { hasValue: !1, value: null }
        w.current = S
      } else S = w.current
      w = m(
        function () {
          function A(V) {
            if (!R) {
              if (((R = !0), (I = V), (V = x(V)), T !== void 0 && S.hasValue)) {
                var k = S.value
                if (T(k, V)) return (j = k)
              }
              return (j = V)
            }
            if (((k = j), a(I, V))) return k
            var _ = x(V)
            return T !== void 0 && T(k, _) ? ((I = V), k) : ((I = V), (j = _))
          }
          var R = !1,
            I,
            j,
            M = y === void 0 ? null : y
          return [
            function () {
              return A(v())
            },
            M === null
              ? void 0
              : function () {
                  return A(M())
                },
          ]
        },
        [v, y, x, T]
      )
      var N = u(g, w[0], w[1])
      return (
        d(
          function () {
            ;((S.hasValue = !0), (S.value = N))
          },
          [N]
        ),
        p(N),
        N
      )
    }),
    pg
  )
}
var Px
function uD() {
  return (Px || ((Px = 1), (mg.exports = sD())), mg.exports)
}
var cD = uD()
const fD = jh(19),
  dD = fD ? mD : pD
function he(e, r, l, a, u) {
  return dD(e, r, l, a, u)
}
function mD(e, r, l, a, u) {
  const f = h.useCallback(() => r(e.getSnapshot(), l, a, u), [e, r, l, a, u])
  return aD.useSyncExternalStore(e.subscribe, f, f)
}
function pD(e, r, l, a, u) {
  return cD.useSyncExternalStoreWithSelector(e.subscribe, e.getSnapshot, e.getSnapshot, (f) =>
    r(f, l, a, u)
  )
}
class ki {
  constructor(r) {
    ;((this.state = r), (this.listeners = new Set()), (this.updateTick = 0))
  }
  subscribe = (r) => (
    this.listeners.add(r),
    () => {
      this.listeners.delete(r)
    }
  )
  getSnapshot = () => this.state
  setState(r) {
    if (this.state === r) return
    ;((this.state = r), (this.updateTick += 1))
    const l = this.updateTick
    for (const a of this.listeners) {
      if (l !== this.updateTick) return
      a(r)
    }
  }
  update(r) {
    for (const l in r)
      if (!Object.is(this.state[l], r[l])) {
        ki.prototype.setState.call(this, { ...this.state, ...r })
        return
      }
  }
  set(r, l) {
    Object.is(this.state[r], l) || ki.prototype.setState.call(this, { ...this.state, [r]: l })
  }
  notifyAll() {
    const r = { ...this.state }
    ki.prototype.setState.call(this, r)
  }
}
class Uh extends ki {
  constructor(r, l = {}, a) {
    ;(super(r), (this.context = l), (this.selectors = a))
  }
  controlledValues = new Map()
  useSyncedValue(r, l) {
    ;(h.useDebugValue(r),
      Ne(() => {
        this.state[r] !== l && this.set(r, l)
      }, [r, l]))
  }
  useSyncedValueWithCleanup(r, l) {
    Ne(
      () => (
        this.state[r] !== l && this.set(r, l),
        () => {
          this.set(r, void 0)
        }
      ),
      [r, l]
    )
  }
  useSyncedValues(r) {
    const l = Object.values(r)
    Ne(() => {
      this.update(r)
    }, l)
  }
  useControlledProp(r, l, a) {
    h.useDebugValue(r)
    const u = l !== void 0
    ;(this.controlledValues.has(r) ||
      (this.controlledValues.set(r, u),
      !u && !Object.is(this.state[r], a) && super.setState({ ...this.state, [r]: a })),
      Ne(() => {
        u && !Object.is(this.state[r], l) && super.setState({ ...this.state, [r]: l })
      }, [r, l, a, u]))
  }
  set(r, l) {
    this.controlledValues.get(r) !== !0 && super.set(r, l)
  }
  update(r) {
    const l = { ...r }
    for (const a in l)
      if (Object.hasOwn(l, a) && this.controlledValues.get(a) === !0) {
        delete l[a]
        continue
      }
    super.update(l)
  }
  setState(r) {
    const l = { ...r }
    for (const a in l)
      if (Object.hasOwn(l, a) && this.controlledValues.get(a) === !0) {
        delete l[a]
        continue
      }
    super.setState({ ...this.state, ...l })
  }
  select = (r, l, a, u) => {
    const f = this.selectors[r]
    return f(this.state, l, a, u)
  }
  useState = (r, l, a, u) => {
    h.useDebugValue(r)
    const f = this.selectors[r]
    return he(this, f, l, a, u)
  }
  useContextCallback(r, l) {
    h.useDebugValue(r)
    const a = Te(l ?? Jt)
    this.context[r] = a
  }
  useStateSetter(r) {
    const l = h.useRef(void 0)
    return (
      l.current === void 0 &&
        (l.current = (a) => {
          this.set(r, a)
        }),
      l.current
    )
  }
  observe(r, l) {
    let a
    typeof r == 'function' ? (a = r) : (a = this.selectors[r])
    let u = a(this.state)
    return (
      l(u, u, this),
      this.subscribe((f) => {
        const d = a(f)
        if (!Object.is(u, d)) {
          const m = u
          ;((u = d), l(d, m, this))
        }
      })
    )
  }
}
const gD = {
  open: fe((e) => e.open),
  domReferenceElement: fe((e) => e.domReferenceElement),
  referenceElement: fe((e) => e.positionReference ?? e.referenceElement),
  floatingElement: fe((e) => e.floatingElement),
  floatingId: fe((e) => e.floatingId),
}
class Vh extends Uh {
  constructor(r) {
    const { nested: l, noEmit: a, onOpenChange: u, triggerElements: f, ...d } = r
    super(
      { ...d, positionReference: d.referenceElement, domReferenceElement: d.referenceElement },
      {
        onOpenChange: u,
        dataRef: { current: {} },
        events: kS(),
        nested: l,
        noEmit: a,
        triggerElements: f,
      },
      gD
    )
  }
  setOpen = (r, l) => {
    if (
      ((!r || !this.state.open || ES(l.event)) &&
        (this.context.dataRef.current.openEvent = r ? l.event : void 0),
      !this.context.noEmit)
    ) {
      const a = {
        open: r,
        reason: l.reason,
        nativeEvent: l.event,
        nested: this.context.nested,
        triggerElement: l.trigger,
      }
      this.context.events.emit('openchange', a)
    }
    this.context.onOpenChange?.(r, l)
  }
}
function sl(e, r = !1, l = !1) {
  const [a, u] = h.useState(e && r ? 'idle' : void 0),
    [f, d] = h.useState(e)
  return (
    e && !f && (d(!0), u('starting')),
    !e && f && a !== 'ending' && !l && u('ending'),
    !e && !f && a === 'ending' && u(void 0),
    Ne(() => {
      if (!e && f && a !== 'ending' && l) {
        const m = vo.request(() => {
          u('ending')
        })
        return () => {
          vo.cancel(m)
        }
      }
    }, [e, f, a, l]),
    Ne(() => {
      if (!e || r) return
      const m = vo.request(() => {
        u(void 0)
      })
      return () => {
        vo.cancel(m)
      }
    }, [r, e]),
    Ne(() => {
      if (!e || !r) return
      e && f && a !== 'idle' && u('starting')
      const m = vo.request(() => {
        u('idle')
      })
      return () => {
        vo.cancel(m)
      }
    }, [r, e, f, u, a]),
    h.useMemo(() => ({ mounted: f, setMounted: d, transitionStatus: a }), [f, a])
  )
}
function hD(e, r = !1, l = !0) {
  const a = Qu()
  return Te((u, f = null) => {
    a.cancel()
    const d = Ai(e)
    d != null &&
      (typeof d.getAnimations != 'function' || globalThis.BASE_UI_ANIMATIONS_DISABLED
        ? u()
        : a.request(() => {
            function m() {
              d &&
                Promise.all(d.getAnimations().map((p) => p.finished))
                  .then(() => {
                    ;(f != null && f.aborted) || Yr.flushSync(u)
                  })
                  .catch(() => {
                    if (l) {
                      if (f != null && f.aborted) return
                      Yr.flushSync(u)
                    } else
                      d.getAnimations().length > 0 &&
                        d.getAnimations().some((p) => p.pending || p.playState !== 'finished') &&
                        m()
                  })
            }
            r ? a.request(m) : m()
          }))
  })
}
function Ir(e) {
  const { enabled: r = !0, open: l, ref: a, onComplete: u } = e,
    f = an(l),
    d = Te(u),
    m = hD(a, l)
  h.useEffect(() => {
    r &&
      m(() => {
        l === f.current && d()
      })
  }, [r, l, d, m, f])
}
function iR(e, r) {
  const l = h.useRef(null)
  return h.useCallback(
    (a) => {
      e !== void 0 &&
        (l.current !== null && (r.context.triggerElements.delete(l.current), (l.current = null)),
        a !== null && ((l.current = e), r.context.triggerElements.add(e, a)))
    },
    [r, e]
  )
}
function aR(e, r, l, a) {
  const u = l.useState('isMountedByTrigger', e),
    f = iR(e, l),
    d = Te((m) => {
      ;(f(m),
        m !== null &&
          l.select('open') &&
          l.select('activeTriggerId') == null &&
          l.update({ activeTriggerId: e, activeTriggerElement: m, ...a }))
    })
  return (
    Ne(() => {
      u && l.update({ activeTriggerElement: r.current, ...a })
    }, [u, l, r, ...Object.values(a)]),
    { registerTrigger: d, isMountedByThisTrigger: u }
  )
}
function sR(e) {
  const r = e.useState('open')
  Ne(() => {
    if (r && !e.select('activeTriggerId') && e.context.triggerElements.size === 1) {
      const l = e.context.triggerElements.entries().next()
      if (!l.done) {
        const [a, u] = l.value
        e.update({ activeTriggerId: a, activeTriggerElement: u })
      }
    }
  }, [r, e])
}
function uR(e, r, l) {
  const { mounted: a, setMounted: u, transitionStatus: f } = sl(e)
  r.useSyncedValues({ mounted: a, transitionStatus: f })
  const d = Te(() => {
      ;(u(!1),
        r.update({ activeTriggerId: null, activeTriggerElement: null, mounted: !1 }),
        l?.(),
        r.context.onOpenChangeComplete?.(!1))
    }),
    m = r.useState('preventUnmountingOnClose')
  return (
    Ir({
      enabled: !m,
      open: e,
      ref: r.context.popupRef,
      onComplete() {
        e || d()
      },
    }),
    { forceUnmount: d, transitionStatus: f }
  )
}
class Nd {
  constructor() {
    ;((this.elements = new Set()), (this.idMap = new Map()))
  }
  add(r, l) {
    const a = this.idMap.get(r)
    a !== l && (a !== void 0 && this.elements.delete(a), this.elements.add(l), this.idMap.set(r, l))
  }
  delete(r) {
    const l = this.idMap.get(r)
    l && (this.elements.delete(l), this.idMap.delete(r))
  }
  hasElement(r) {
    return this.elements.has(r)
  }
  hasMatchingElement(r) {
    for (const l of this.elements) if (r(l)) return !0
    return !1
  }
  getById(r) {
    return this.idMap.get(r)
  }
  entries() {
    return this.idMap.entries()
  }
  get size() {
    return this.idMap.size
  }
}
function bD() {
  return new Vh({
    open: !1,
    floatingElement: null,
    referenceElement: null,
    triggerElements: new Nd(),
    floatingId: '',
    nested: !1,
    noEmit: !1,
    onOpenChange: void 0,
  })
}
function cR() {
  return {
    open: !1,
    mounted: !1,
    transitionStatus: 'idle',
    floatingRootContext: bD(),
    preventUnmountingOnClose: !1,
    payload: void 0,
    activeTriggerId: null,
    activeTriggerElement: null,
    popupElement: null,
    positionerElement: null,
    activeTriggerProps: en,
    inactiveTriggerProps: en,
    popupProps: en,
  }
}
const fR = {
  open: fe((e) => e.open),
  mounted: fe((e) => e.mounted),
  transitionStatus: fe((e) => e.transitionStatus),
  floatingRootContext: fe((e) => e.floatingRootContext),
  preventUnmountingOnClose: fe((e) => e.preventUnmountingOnClose),
  payload: fe((e) => e.payload),
  activeTriggerId: fe((e) => e.activeTriggerId),
  activeTriggerElement: fe((e) => (e.mounted ? e.activeTriggerElement : null)),
  isTriggerActive: fe((e, r) => r !== void 0 && e.activeTriggerId === r),
  isOpenedByTrigger: fe((e, r) => r !== void 0 && e.activeTriggerId === r && e.open),
  isMountedByTrigger: fe((e, r) => r !== void 0 && e.activeTriggerId === r && e.mounted),
  triggerProps: fe((e, r) => (r ? e.activeTriggerProps : e.inactiveTriggerProps)),
  popupProps: fe((e) => e.popupProps),
  popupElement: fe((e) => e.popupElement),
  positionerElement: fe((e) => e.positionerElement),
}
function Lh(e) {
  const { open: r = !1, onOpenChange: l, elements: a = {} } = e,
    u = ea(),
    f = al() != null,
    d = Yn(
      () =>
        new Vh({
          open: r,
          onOpenChange: l,
          referenceElement: a.reference ?? null,
          floatingElement: a.floating ?? null,
          triggerElements: a.triggers ?? new Nd(),
          floatingId: u,
          nested: f,
          noEmit: e.noEmit || !1,
        })
    ).current
  return (
    Ne(() => {
      const m = { open: r, floatingId: u }
      ;(a.reference !== void 0 &&
        ((m.referenceElement = a.reference),
        (m.domReferenceElement = Ot(a.reference) ? a.reference : null)),
        a.floating !== void 0 && (m.floatingElement = a.floating),
        d.update(m))
    }, [r, u, a.reference, a.floating, d]),
    (d.context.onOpenChange = l),
    (d.context.nested = f),
    (d.context.noEmit = e.noEmit || !1),
    d
  )
}
function yD(e = {}) {
  const { nodeId: r, externalTree: l } = e,
    a = Lh(e),
    u = e.rootContext || a,
    f = {
      reference: u.useState('referenceElement'),
      floating: u.useState('floatingElement'),
      domReference: u.useState('domReferenceElement'),
    },
    [d, m] = h.useState(null),
    p = h.useRef(null),
    g = ni(l)
  Ne(() => {
    f.domReference && (p.current = f.domReference)
  }, [f.domReference])
  const v = _I({ ...e, elements: { ...f, ...(d && { reference: d }) } }),
    y = h.useCallback(
      (k) => {
        const _ = Ot(k)
          ? {
              getBoundingClientRect: () => k.getBoundingClientRect(),
              getClientRects: () => k.getClientRects(),
              contextElement: k,
            }
          : k
        ;(m(_), v.refs.setReference(_))
      },
      [v.refs]
    ),
    [x, T] = h.useState(null),
    [w, S] = h.useState(null)
  ;(u.useSyncedValue('referenceElement', x),
    u.useSyncedValue('domReferenceElement', Ot(x) ? x : null),
    u.useSyncedValue('floatingElement', w))
  const N = h.useCallback(
      (k) => {
        ;((Ot(k) || k === null) && ((p.current = k), T(k)),
          (Ot(v.refs.reference.current) ||
            v.refs.reference.current === null ||
            (k !== null && !Ot(k))) &&
            v.refs.setReference(k))
      },
      [v.refs, T]
    ),
    A = h.useCallback(
      (k) => {
        ;(S(k), v.refs.setFloating(k))
      },
      [v.refs]
    ),
    R = h.useMemo(
      () => ({
        ...v.refs,
        setReference: N,
        setFloating: A,
        setPositionReference: y,
        domReference: p,
      }),
      [v.refs, N, A, y]
    ),
    I = h.useMemo(
      () => ({ ...v.elements, domReference: f.domReference }),
      [v.elements, f.domReference]
    ),
    j = u.useState('open'),
    M = u.useState('floatingId'),
    V = h.useMemo(
      () => ({
        ...v,
        dataRef: u.context.dataRef,
        open: j,
        onOpenChange: u.setOpen,
        events: u.context.events,
        floatingId: M,
        refs: R,
        elements: I,
        nodeId: r,
        rootStore: u,
      }),
      [v, R, I, r, u, j, M]
    )
  return (
    Ne(() => {
      u.context.dataRef.current.floatingContext = V
      const k = g?.nodesRef.current.find((_) => _.id === r)
      k && (k.context = V)
    }),
    h.useMemo(() => ({ ...v, context: V, refs: R, elements: I, rootStore: u }), [v, R, I, V, u])
  )
}
function dR(e) {
  const { popupStore: r, noEmit: l = !1, treatPopupAsFloatingElement: a = !1, onOpenChange: u } = e,
    f = ea(),
    d = al() != null,
    m = r.useState('open'),
    p = r.useState('activeTriggerElement'),
    g = r.useState(a ? 'popupElement' : 'positionerElement'),
    v = r.context.triggerElements,
    y = Yn(
      () =>
        new Vh({
          open: m,
          referenceElement: p,
          floatingElement: g,
          triggerElements: v,
          onOpenChange: u,
          floatingId: f,
          nested: d,
          noEmit: l,
        })
    ).current
  return (
    Ne(() => {
      const x = { open: m, floatingId: f, referenceElement: p, floatingElement: g }
      ;(Ot(p) && (x.domReferenceElement = p), y.update(x))
    }, [m, f, p, g, y]),
    (y.context.onOpenChange = u),
    (y.context.nested = d),
    (y.context.noEmit = l),
    y
  )
}
const gg = Mz && gS
function vD(e, r = {}) {
  const l = 'rootStore' in e ? e.rootStore : e,
    { events: a, dataRef: u } = l.context,
    { enabled: f = !0, visibleOnly: d = !0 } = r,
    m = h.useRef(!1),
    p = sn(),
    g = h.useRef(!0)
  ;(h.useEffect(() => {
    const y = l.select('domReferenceElement')
    if (!f) return
    const x = xn(y)
    function T() {
      !l.select('open') && Wt(y) && y === xo(on(y)) && (m.current = !0)
    }
    function w() {
      g.current = !0
    }
    function S() {
      g.current = !1
    }
    return (
      x.addEventListener('blur', T),
      gg && (x.addEventListener('keydown', w, !0), x.addEventListener('pointerdown', S, !0)),
      () => {
        ;(x.removeEventListener('blur', T),
          gg &&
            (x.removeEventListener('keydown', w, !0), x.removeEventListener('pointerdown', S, !0)))
      }
    )
  }, [l, f]),
    h.useEffect(() => {
      if (!f) return
      function y(x) {
        ;(x.reason === ji || x.reason === Td) && (m.current = !0)
      }
      return (
        a.on('openchange', y),
        () => {
          a.off('openchange', y)
        }
      )
    }, [a, f]))
  const v = h.useMemo(
    () => ({
      onMouseLeave() {
        m.current = !1
      },
      onFocus(y) {
        if (m.current) return
        const x = On(y.nativeEvent)
        if (d && Ot(x)) {
          if (gg && !y.relatedTarget) {
            if (!g.current && !wh(x)) return
          } else if (!Bz(x)) return
        }
        l.setOpen(!0, De($f, y.nativeEvent, y.currentTarget))
      },
      onBlur(y) {
        m.current = !1
        const x = y.relatedTarget,
          T = y.nativeEvent,
          w =
            Ot(x) && x.hasAttribute(Ja('focus-guard')) && x.getAttribute('data-type') === 'outside'
        p.start(0, () => {
          const S = l.select('domReferenceElement'),
            N = xo(S ? S.ownerDocument : document)
          ;(!x && N === S) ||
            tt(u.current.floatingContext?.refs.floating.current, N) ||
            tt(S, N) ||
            w ||
            l.context.triggerElements.hasElement(y.relatedTarget) ||
            l.setOpen(!1, De($f, T))
        })
      },
    }),
    [u, l, d, p]
  )
  return h.useMemo(() => (f ? { reference: v, trigger: v } : {}), [f, v])
}
const Ug = Ja('safe-polygon'),
  xD = `button,a,[role="button"],select,[tabindex]:not([tabindex="-1"]),${xS}`
function SD(e) {
  return e ? !!e.closest(xD) : !1
}
function mR(e) {
  const r = h.useRef(void 0),
    l = h.useRef(!1),
    a = h.useRef(void 0),
    u = h.useRef(!0),
    f = h.useRef(!1),
    d = h.useRef(() => {}),
    m = h.useRef(!1),
    p = sn(),
    g = sn(),
    v = h.useRef(void 0)
  return h.useMemo(() => {
    const y = e.context.dataRef.current
    return (
      y.hoverInteractionState ||
        (y.hoverInteractionState = {
          pointerTypeRef: r,
          interactedInsideRef: l,
          handlerRef: a,
          blockMouseMoveRef: u,
          performedPointerEventsMutationRef: f,
          unbindMouseMoveRef: d,
          restTimeoutPendingRef: m,
          openChangeTimeout: p,
          restTimeout: g,
          handleCloseOptionsRef: v,
        }),
      y.hoverInteractionState
    )
  }, [e, r, l, a, u, f, d, m, p, g, v])
}
const RD = new Set(['click', 'mousedown'])
function ED(e, r = {}) {
  const l = 'rootStore' in e ? e.rootStore : e,
    a = l.useState('open'),
    u = l.useState('floatingElement'),
    f = l.useState('domReferenceElement'),
    { dataRef: d } = l.context,
    { enabled: m = !0, closeDelay: p = 0, externalTree: g } = r,
    {
      pointerTypeRef: v,
      interactedInsideRef: y,
      handlerRef: x,
      performedPointerEventsMutationRef: T,
      unbindMouseMoveRef: w,
      restTimeoutPendingRef: S,
      openChangeTimeout: N,
      handleCloseOptionsRef: A,
    } = mR(l),
    R = ni(g),
    I = al(),
    j = Te(() => (y.current ? !0 : d.current.openEvent ? RD.has(d.current.openEvent.type) : !1)),
    M = Te(() => {
      const ie = d.current.openEvent?.type
      return ie?.includes('mouse') && ie !== 'mousedown'
    }),
    V = h.useCallback(
      (ie, Q = !0) => {
        const le = TD(p, v.current)
        le && !x.current
          ? N.start(le, () => l.setOpen(!1, De(Cr, ie)))
          : Q && (N.clear(), l.setOpen(!1, De(Cr, ie)))
      },
      [p, x, l, v, N]
    ),
    k = Te(() => {
      ;(w.current(), (x.current = void 0))
    }),
    _ = Te(() => {
      if (T.current) {
        const ie = on(u).body
        ;((ie.style.pointerEvents = ''), ie.removeAttribute(Ug), (T.current = !1))
      }
    }),
    ee = Te((ie) => {
      const Q = On(ie)
      if (!SD(Q)) {
        y.current = !1
        return
      }
      y.current = !0
    })
  ;(Ne(() => {
    a || ((v.current = void 0), (S.current = !1), (y.current = !1), k(), _())
  }, [a, v, S, y, k, _]),
    h.useEffect(
      () => () => {
        k()
      },
      [k]
    ),
    h.useEffect(() => _, [_]),
    Ne(() => {
      if (m && a && A.current?.blockPointerEvents && M() && Ot(f) && u) {
        T.current = !0
        const ie = on(u).body
        ie.setAttribute(Ug, '')
        const Q = f,
          le = u,
          q = R?.nodesRef.current.find((Y) => Y.id === I)?.context?.elements.floating
        return (
          q && (q.style.pointerEvents = ''),
          (ie.style.pointerEvents = 'none'),
          (Q.style.pointerEvents = 'auto'),
          (le.style.pointerEvents = 'auto'),
          () => {
            ;((ie.style.pointerEvents = ''),
              (Q.style.pointerEvents = ''),
              (le.style.pointerEvents = ''))
          }
        )
      }
    }, [m, a, f, u, A, M, R, I, T]),
    h.useEffect(() => {
      if (!m) return
      function ie(Y) {
        if (j() || !d.current.floatingContext || !l.select('open')) return
        const F = l.context.triggerElements
        ;(Y.relatedTarget && F.hasElement(Y.relatedTarget)) || (_(), k(), j() || V(Y))
      }
      function Q(Y) {
        ;(N.clear(), _(), x.current?.(Y), k())
      }
      function le(Y) {
        j() || V(Y, !1)
      }
      const q = u
      return (
        q &&
          (q.addEventListener('mouseleave', ie),
          q.addEventListener('mouseenter', Q),
          q.addEventListener('mouseleave', le),
          q.addEventListener('pointerdown', ee, !0)),
        () => {
          q &&
            (q.removeEventListener('mouseleave', ie),
            q.removeEventListener('mouseenter', Q),
            q.removeEventListener('mouseleave', le),
            q.removeEventListener('pointerdown', ee, !0))
        }
      )
    }))
}
function TD(e, r) {
  return r && !Xa(r) ? 0 : typeof e == 'function' ? e() : e
}
function hg(e) {
  return typeof e == 'function' ? e() : e
}
const CD = { current: null }
function pR(e, r = {}) {
  const l = 'rootStore' in e ? e.rootStore : e,
    { dataRef: a, events: u } = l.context,
    {
      enabled: f = !0,
      delay: d = 0,
      handleClose: m = null,
      mouseOnly: p = !1,
      restMs: g = 0,
      move: v = !0,
      triggerElementRef: y = CD,
      externalTree: x,
      isActiveTrigger: T = !0,
    } = r,
    w = ni(x),
    {
      pointerTypeRef: S,
      interactedInsideRef: N,
      handlerRef: A,
      blockMouseMoveRef: R,
      performedPointerEventsMutationRef: I,
      unbindMouseMoveRef: j,
      restTimeoutPendingRef: M,
      openChangeTimeout: V,
      restTimeout: k,
      handleCloseOptionsRef: _,
    } = mR(l),
    ee = an(m),
    ie = an(d),
    Q = an(g)
  T && (_.current = ee.current?.__options)
  const le = Te(() =>
      N.current
        ? !0
        : a.current.openEvent
          ? ['click', 'mousedown'].includes(a.current.openEvent.type)
          : !1
    ),
    q = h.useCallback(
      (L, D = !0) => {
        const $ = ig(ie.current, 'close', S.current)
        $ && !A.current
          ? V.start($, () => l.setOpen(!1, De(Cr, L)))
          : D && (V.clear(), l.setOpen(!1, De(Cr, L)))
      },
      [ie, A, l, S, V]
    ),
    Y = Te(() => {
      ;(j.current(), (A.current = void 0))
    }),
    F = Te(() => {
      if (I.current) {
        const L = on(l.select('domReferenceElement')).body
        ;((L.style.pointerEvents = ''), L.removeAttribute(Ug), (I.current = !1))
      }
    })
  h.useEffect(() => {
    if (!f) return
    function L(D) {
      D.open || (V.clear(), k.clear(), (R.current = !0), (M.current = !1))
    }
    return (
      u.on('openchange', L),
      () => {
        u.off('openchange', L)
      }
    )
  }, [f, u, V, k, R, M])
  const z = Te((L) => {
    if (le() || !a.current.floatingContext) return
    const D = l.context.triggerElements
    if (L.relatedTarget && D.hasElement(L.relatedTarget)) return
    const $ = y.current
    ee.current?.({
      ...a.current.floatingContext,
      tree: w,
      x: L.clientX,
      y: L.clientY,
      onClose() {
        ;(F(), Y(), !le() && $ === l.select('domReferenceElement') && q(L))
      },
    })(L)
  })
  return (
    h.useEffect(() => {
      if (!f) return
      const L = y.current ?? (T ? l.select('domReferenceElement') : null)
      if (!Ot(L)) return
      function D(O) {
        if (
          (V.clear(),
          (R.current = !1),
          (p && !Xa(S.current)) || (hg(Q.current) > 0 && !ig(ie.current, 'open')))
        )
          return
        const P = ig(ie.current, 'open', S.current),
          H = l.select('domReferenceElement'),
          X = l.context.triggerElements,
          te =
            (X.hasElement(O.target) || X.hasMatchingElement((de) => tt(de, O.target))) &&
            (!H || !tt(H, O.target)),
          re = O.currentTarget ?? null,
          W = !l.select('open') || te
        P
          ? V.start(P, () => {
              W && l.setOpen(!0, De(Cr, O, re))
            })
          : W && l.setOpen(!0, De(Cr, O, re))
      }
      function $(O) {
        if (le()) {
          F()
          return
        }
        j.current()
        const P = l.select('domReferenceElement'),
          H = on(P)
        ;(k.clear(), (M.current = !1))
        const X = l.context.triggerElements
        if (O.relatedTarget && X.hasElement(O.relatedTarget)) return
        if (ee.current && a.current.floatingContext) {
          l.select('open') || V.clear()
          const re = y.current
          A.current = ee.current({
            ...a.current.floatingContext,
            tree: w,
            x: O.clientX,
            y: O.clientY,
            onClose() {
              ;(F(), Y(), !le() && re === l.select('domReferenceElement') && q(O, !0))
            },
          })
          const W = A.current
          ;(W(O),
            H.addEventListener('mousemove', W),
            (j.current = () => {
              H.removeEventListener('mousemove', W)
            }))
          return
        }
        ;(S.current !== 'touch' || !tt(l.select('floatingElement'), O.relatedTarget)) && q(O)
      }
      function oe(O) {
        z(O)
      }
      return (
        l.select('open') && L.addEventListener('mouseleave', oe),
        v && L.addEventListener('mousemove', D, { once: !0 }),
        L.addEventListener('mouseenter', D),
        L.addEventListener('mouseleave', $),
        () => {
          ;(L.removeEventListener('mouseleave', oe),
            v && L.removeEventListener('mousemove', D),
            L.removeEventListener('mouseenter', D),
            L.removeEventListener('mouseleave', $))
        }
      )
    }, [Y, F, R, a, ie, q, l, f, ee, z, T, le, p, v, S, Q, k, M, V, y, w, j, A]),
    h.useMemo(() => {
      function L(D) {
        S.current = D.pointerType
      }
      return {
        onPointerDown: L,
        onPointerEnter: L,
        onMouseMove(D) {
          const { nativeEvent: $ } = D,
            oe = D.currentTarget,
            O = l.select('domReferenceElement'),
            P = l.context.triggerElements,
            H = l.select('open'),
            X =
              (P.hasElement(D.target) || P.hasMatchingElement((re) => tt(re, D.target))) &&
              (!O || !tt(O, D.target))
          if (
            (p && !Xa(S.current)) ||
            (H && !X) ||
            hg(Q.current) === 0 ||
            (!X && M.current && D.movementX ** 2 + D.movementY ** 2 < 2)
          )
            return
          k.clear()
          function te() {
            !R.current && (!H || X) && l.setOpen(!0, De(Cr, $, oe))
          }
          S.current === 'touch'
            ? Yr.flushSync(() => {
                te()
              })
            : X && H
              ? te()
              : ((M.current = !0), k.start(hg(Q.current), te))
        },
      }
    }, [R, p, l, S, Q, k, M])
  )
}
function ta(e = []) {
  const r = e.map((g) => g?.reference),
    l = e.map((g) => g?.floating),
    a = e.map((g) => g?.item),
    u = e.map((g) => g?.trigger),
    f = h.useCallback((g) => Ef(g, e, 'reference'), r),
    d = h.useCallback((g) => Ef(g, e, 'floating'), l),
    m = h.useCallback((g) => Ef(g, e, 'item'), a),
    p = h.useCallback((g) => Ef(g, e, 'trigger'), u)
  return h.useMemo(
    () => ({ getReferenceProps: f, getFloatingProps: d, getItemProps: m, getTriggerProps: p }),
    [f, d, m, p]
  )
}
function Ef(e, r, l) {
  const a = new Map(),
    u = l === 'item',
    f = {}
  l === 'floating' && ((f.tabIndex = -1), (f[Og] = ''))
  for (const d in e) (u && e && (d === yS || d === vS)) || (f[d] = e[d])
  for (let d = 0; d < r.length; d += 1) {
    let m
    const p = r[d]?.[l]
    ;(typeof p == 'function' ? (m = e ? p(e) : null) : (m = p), m && qx(f, m, u, a))
  }
  return (qx(f, e, u, a), f)
}
function qx(e, r, l, a) {
  for (const u in r) {
    const f = r[u]
    ;(l && (u === yS || u === vS)) ||
      (u.startsWith('on')
        ? (a.has(u) || a.set(u, []),
          typeof f == 'function' &&
            (a.get(u)?.push(f),
            (e[u] = (...d) =>
              a
                .get(u)
                ?.map((m) => m(...d))
                .find((m) => m !== void 0))))
        : (e[u] = f))
  }
}
const wD = 'Escape'
function zd(e, r, l) {
  switch (e) {
    case 'vertical':
      return r
    case 'horizontal':
      return l
    default:
      return r || l
  }
}
function Tf(e, r) {
  return zd(r, e === Ch || e === Zu, e === Fl || e === Pl)
}
function bg(e, r, l) {
  return zd(r, e === Zu, l ? e === Fl : e === Pl) || e === 'Enter' || e === ' ' || e === ''
}
function MD(e, r, l) {
  return zd(r, l ? e === Fl : e === Pl, e === Zu)
}
function OD(e, r, l, a) {
  const u = l ? e === Pl : e === Fl,
    f = e === Ch
  return r === 'both' || (r === 'horizontal' && a && a > 1) ? e === wD : zd(r, u, f)
}
function Hh(e, r) {
  const l = 'rootStore' in e ? e.rootStore : e,
    a = l.useState('open'),
    u = l.useState('floatingElement'),
    f = l.useState('domReferenceElement'),
    d = l.context.dataRef,
    {
      listRef: m,
      activeIndex: p,
      onNavigate: g = () => {},
      enabled: v = !0,
      selectedIndex: y = null,
      allowEscape: x = !1,
      loopFocus: T = !1,
      nested: w = !1,
      rtl: S = !1,
      virtual: N = !1,
      focusItemOnOpen: A = 'auto',
      focusItemOnHover: R = !0,
      openOnArrowKeyDown: I = !0,
      disabledIndices: j = void 0,
      orientation: M = 'vertical',
      parentOrientation: V,
      cols: k = 1,
      scrollItemIntoView: _ = !0,
      itemSizes: ee,
      dense: ie = !1,
      id: Q,
      resetOnPointerLeave: le = !0,
      externalTree: q,
    } = r,
    Y = Du(u),
    F = an(Y),
    z = al(),
    L = ni(q)
  Ne(() => {
    d.current.orientation = M
  }, [d, M])
  const D = Ag(f),
    $ = h.useRef(A),
    oe = h.useRef(y ?? -1),
    O = h.useRef(null),
    P = h.useRef(!0),
    H = Te((Ce) => {
      g(oe.current === -1 ? null : oe.current, Ce)
    }),
    X = h.useRef(H),
    te = h.useRef(!!u),
    re = h.useRef(a),
    W = h.useRef(!1),
    de = h.useRef(!1),
    ve = an(j),
    ue = an(a),
    K = an(_),
    xe = an(y),
    Ee = an(le),
    Fe = Te(() => {
      function Ce(We) {
        N ? L?.events.emit('virtualfocus', We) : Df(We, { sync: W.current, preventScroll: !0 })
      }
      const Me = m.current[oe.current],
        we = de.current
      ;(Me && Ce(Me),
        (W.current ? (We) => We() : requestAnimationFrame)(() => {
          const We = m.current[oe.current] || Me
          if (!We) return
          Me || Ce(We)
          const Be = K.current
          Be &&
            be &&
            (we || !P.current) &&
            We.scrollIntoView?.(
              typeof Be == 'boolean' ? { block: 'nearest', inline: 'nearest' } : Be
            )
        }))
    })
  ;(Ne(() => {
    v &&
      (a && u
        ? ((oe.current = y ?? -1), $.current && y != null && ((de.current = !0), H()))
        : te.current && ((oe.current = -1), X.current()))
  }, [v, a, u, y, H]),
    Ne(() => {
      if (v) {
        if (!a) {
          W.current = !1
          return
        }
        if (u)
          if (p == null) {
            if (((W.current = !1), xe.current != null)) return
            if (
              (te.current && ((oe.current = -1), Fe()),
              (!re.current || !te.current) &&
                $.current &&
                (O.current != null || ($.current === !0 && O.current == null)))
            ) {
              let Ce = 0
              const Me = () => {
                m.current[0] == null
                  ? (Ce < 2 && (Ce ? requestAnimationFrame : queueMicrotask)(Me), (Ce += 1))
                  : ((oe.current = O.current == null || bg(O.current, M, S) || w ? lg(m) : vx(m)),
                    (O.current = null),
                    H())
              }
              Me()
            }
          } else Eu(m, p) || ((oe.current = p), Fe(), (de.current = !1))
      }
    }, [v, a, u, p, xe, w, m, M, S, H, Fe, ve]),
    Ne(() => {
      if (!v || u || !L || N || !te.current) return
      const Ce = L.nodesRef.current,
        Me = Ce.find((We) => We.id === z)?.context?.elements.floating,
        we = xo(on(u)),
        Xe = Ce.some((We) => We.context && tt(We.context.elements.floating, we))
      Me && !Xe && P.current && Me.focus({ preventScroll: !0 })
    }, [v, u, L, z, N]),
    Ne(() => {
      ;((X.current = H), (re.current = a), (te.current = !!u))
    }),
    Ne(() => {
      a || ((O.current = null), ($.current = A))
    }, [a, A]))
  const Re = p != null,
    be = h.useMemo(() => {
      function Ce(we) {
        if (!ue.current) return
        const Xe = m.current.indexOf(we.currentTarget)
        Xe !== -1 && oe.current !== Xe && ((oe.current = Xe), H(we))
      }
      return {
        onFocus(we) {
          ;((W.current = !0), Ce(we))
        },
        onClick: ({ currentTarget: we }) => we.focus({ preventScroll: !0 }),
        onMouseMove(we) {
          ;((W.current = !0), (de.current = !1), R && Ce(we))
        },
        onPointerLeave(we) {
          if (!ue.current || !P.current || we.pointerType === 'touch') return
          W.current = !0
          const Xe = we.relatedTarget
          !R ||
            m.current.includes(Xe) ||
            (Ee.current && ((oe.current = -1), H(we), N || F.current?.focus({ preventScroll: !0 })))
        },
      }
    }, [ue, F, R, m, H, Ee, N]),
    Se = h.useCallback(
      () =>
        V ?? L?.nodesRef.current.find((Ce) => Ce.id === z)?.context?.dataRef?.current.orientation,
      [z, L, V]
    ),
    Le = Te((Ce) => {
      if (
        ((P.current = !1),
        (W.current = !0),
        Ce.which === 229 || (!ue.current && Ce.currentTarget === F.current))
      )
        return
      if (w && OD(Ce.key, M, S, k)) {
        ;(Tf(Ce.key, Se()) || ln(Ce),
          l.setOpen(!1, De(Cu, Ce.nativeEvent)),
          Wt(f) && (N ? L?.events.emit('virtualfocus', f) : f.focus()))
        return
      }
      const Me = oe.current,
        we = lg(m, j),
        Xe = vx(m, j)
      if (
        (D ||
          (Ce.key === 'Home' && (ln(Ce), (oe.current = we), H(Ce)),
          Ce.key === 'End' && (ln(Ce), (oe.current = Xe), H(Ce))),
        k > 1)
      ) {
        const We = ee || Array.from({ length: m.current.length }, () => ({ width: 1, height: 1 })),
          Be = t3(We, k, ie),
          dt = Be.findIndex((jt) => jt != null && !Tu(m, jt, j)),
          Rt = Be.reduce((jt, rt, ye) => (rt != null && !Tu(m, rt, j) ? ye : jt), -1),
          Dt =
            Be[
              e3(
                { current: Be.map((jt) => (jt != null ? m.current[jt] : null)) },
                {
                  event: Ce,
                  orientation: M,
                  loopFocus: T,
                  rtl: S,
                  cols: k,
                  disabledIndices: r3(
                    [
                      ...((typeof j != 'function' ? j : null) ||
                        m.current.map((jt, rt) => (Tu(m, rt, j) ? rt : void 0))),
                      void 0,
                    ],
                    Be
                  ),
                  minIndex: dt,
                  maxIndex: Rt,
                  prevIndex: n3(
                    oe.current > Xe ? we : oe.current,
                    We,
                    Be,
                    k,
                    Ce.key === Zu ? 'bl' : Ce.key === (S ? Fl : Pl) ? 'tr' : 'tl'
                  ),
                  stopEvent: !0,
                }
              )
            ]
        if ((Dt != null && ((oe.current = Dt), H(Ce)), M === 'both')) return
      }
      if (Tf(Ce.key, M)) {
        if ((ln(Ce), a && !N && xo(Ce.currentTarget.ownerDocument) === Ce.currentTarget)) {
          ;((oe.current = bg(Ce.key, M, S) ? we : Xe), H(Ce))
          return
        }
        ;(bg(Ce.key, M, S)
          ? T
            ? Me >= Xe
              ? x && Me !== m.current.length
                ? (oe.current = -1)
                : ((W.current = !1), (oe.current = we))
              : (oe.current = Gn(m, { startingIndex: Me, disabledIndices: j }))
            : (oe.current = Math.min(Xe, Gn(m, { startingIndex: Me, disabledIndices: j })))
          : T
            ? Me <= we
              ? x && Me !== -1
                ? (oe.current = m.current.length)
                : ((W.current = !1), (oe.current = Xe))
              : (oe.current = Gn(m, { startingIndex: Me, decrement: !0, disabledIndices: j }))
            : (oe.current = Math.max(
                we,
                Gn(m, { startingIndex: Me, decrement: !0, disabledIndices: j })
              )),
          Eu(m, oe.current) && (oe.current = -1),
          H(Ce))
      }
    }),
    Oe = h.useMemo(
      () => N && a && Re && { 'aria-activedescendant': `${Q}-${p}` },
      [N, a, Re, Q, p]
    ),
    _e = h.useMemo(
      () => ({
        'aria-orientation': M === 'both' ? void 0 : M,
        ...(D ? {} : Oe),
        onKeyDown(Ce) {
          if (Ce.key === 'Tab' && Ce.shiftKey && a && !N) {
            const Me = On(Ce.nativeEvent)
            if (Me && !tt(F.current, Me)) return
            ;(ln(Ce), l.setOpen(!1, De(Hi, Ce.nativeEvent)), Wt(f) && f.focus())
            return
          }
          Le(Ce)
        },
        onPointerMove() {
          P.current = !0
        },
      }),
      [Oe, Le, F, M, D, l, a, N, f]
    ),
    pe = h.useMemo(() => {
      function Ce(we) {
        A === 'auto' && SS(we.nativeEvent) && ($.current = !N)
      }
      function Me(we) {
        ;(($.current = A), A === 'auto' && RS(we.nativeEvent) && ($.current = !0))
      }
      return {
        onKeyDown(we) {
          const Xe = l.select('open')
          P.current = !1
          const We = we.key.startsWith('Arrow'),
            Be = MD(we.key, Se(), S),
            dt = Tf(we.key, M),
            Rt = (w ? Be : dt) || we.key === 'Enter' || we.key.trim() === ''
          if (N && Xe) return Le(we)
          if (!(!Xe && !I && We)) {
            if (Rt) {
              const Dt = Tf(we.key, Se())
              O.current = w && Dt ? null : we.key
            }
            if (w) {
              Be &&
                (ln(we),
                Xe
                  ? ((oe.current = lg(m, ve.current)), H(we))
                  : l.setOpen(!0, De(Cu, we.nativeEvent, we.currentTarget)))
              return
            }
            dt &&
              (xe.current != null && (oe.current = xe.current),
              ln(we),
              !Xe && I ? l.setOpen(!0, De(Cu, we.nativeEvent, we.currentTarget)) : Le(we),
              Xe && H(we))
          }
        },
        onFocus(we) {
          l.select('open') && !N && ((oe.current = -1), H(we))
        },
        onPointerDown: Me,
        onPointerEnter: Me,
        onMouseDown: Ce,
        onClick: Ce,
      }
    }, [Le, ve, A, m, w, H, l, I, M, Se, S, xe, N]),
    je = h.useMemo(() => ({ ...Oe, ...pe }), [Oe, pe])
  return h.useMemo(
    () => (v ? { reference: je, floating: _e, item: be, trigger: pe } : {}),
    [v, je, _e, pe, be]
  )
}
const AD = new Map([
  ['select', 'listbox'],
  ['combobox', 'listbox'],
  ['label', !1],
])
function gR(e, r = {}) {
  const l = 'rootStore' in e ? e.rootStore : e,
    a = l.useState('open'),
    u = l.useState('floatingId'),
    f = l.useState('domReferenceElement'),
    d = l.useState('floatingElement'),
    { enabled: m = !0, role: p = 'dialog' } = r,
    g = ea(),
    v = f?.id || g,
    y = h.useMemo(() => Du(d)?.id || u, [d, u]),
    x = AD.get(p) ?? p,
    w = al() != null,
    S = h.useMemo(
      () =>
        x === 'tooltip' || p === 'label'
          ? en
          : {
              'aria-haspopup': x === 'alertdialog' ? 'dialog' : x,
              'aria-expanded': 'false',
              ...(x === 'listbox' && { role: 'combobox' }),
              ...(x === 'menu' && w && { role: 'menuitem' }),
              ...(p === 'select' && { 'aria-autocomplete': 'none' }),
              ...(p === 'combobox' && { 'aria-autocomplete': 'list' }),
            },
      [x, w, p]
    ),
    N = h.useMemo(
      () =>
        x === 'tooltip' || p === 'label'
          ? { [`aria-${p === 'label' ? 'labelledby' : 'describedby'}`]: a ? y : void 0 }
          : {
              ...S,
              'aria-expanded': a ? 'true' : 'false',
              'aria-controls': a ? y : void 0,
              ...(x === 'menu' && { id: v }),
            },
      [x, y, a, v, p, S]
    ),
    A = h.useMemo(() => {
      const I = { id: y, ...(x && { role: x }) }
      return x === 'tooltip' || p === 'label'
        ? I
        : { ...I, ...(x === 'menu' && { 'aria-labelledby': v }) }
    }, [x, y, v, p]),
    R = h.useCallback(
      ({ active: I, selected: j }) => {
        const M = { role: 'option', ...(I && { id: `${y}-fui-option` }) }
        switch (p) {
          case 'select':
          case 'combobox':
            return { ...M, 'aria-selected': j }
        }
        return {}
      },
      [y, p]
    )
  return h.useMemo(
    () => (m ? { reference: N, floating: A, item: R, trigger: S } : {}),
    [m, N, A, S, R]
  )
}
function Bh(e, r) {
  const l = 'rootStore' in e ? e.rootStore : e,
    a = l.useState('open'),
    u = l.context.dataRef,
    {
      listRef: f,
      activeIndex: d,
      onMatch: m,
      onTypingChange: p,
      enabled: g = !0,
      findMatch: v = null,
      resetMs: y = 750,
      ignoreKeys: x = ro,
      selectedIndex: T = null,
    } = r,
    w = sn(),
    S = h.useRef(''),
    N = h.useRef(T ?? d ?? -1),
    A = h.useRef(null)
  ;(Ne(() => {
    a && (w.clear(), (A.current = null), (S.current = ''))
  }, [a, w]),
    Ne(() => {
      a && S.current === '' && (N.current = T ?? d ?? -1)
    }, [a, T, d]))
  const R = Te((V) => {
      V
        ? u.current.typing || ((u.current.typing = V), p?.(V))
        : u.current.typing && ((u.current.typing = V), p?.(V))
    }),
    I = Te((V) => {
      function k(le, q, Y) {
        const F = v
          ? v(q, Y)
          : q.find((z) => z?.toLocaleLowerCase().indexOf(Y.toLocaleLowerCase()) === 0)
        return F ? le.indexOf(F) : -1
      }
      const _ = f.current
      if (
        (S.current.length > 0 &&
          S.current[0] !== ' ' &&
          (k(_, _, S.current) === -1 ? R(!1) : V.key === ' ' && ln(V)),
        _ == null || x.includes(V.key) || V.key.length !== 1 || V.ctrlKey || V.metaKey || V.altKey)
      )
        return
      ;(a && V.key !== ' ' && (ln(V), R(!0)),
        _.every((le) => (le ? le[0]?.toLocaleLowerCase() !== le[1]?.toLocaleLowerCase() : !0)) &&
          S.current === V.key &&
          ((S.current = ''), (N.current = A.current)),
        (S.current += V.key),
        w.start(y, () => {
          ;((S.current = ''), (N.current = A.current), R(!1))
        }))
      const ie = N.current,
        Q = k(_, [..._.slice((ie || 0) + 1), ..._.slice(0, (ie || 0) + 1)], S.current)
      Q !== -1 ? (m?.(Q), (A.current = Q)) : V.key !== ' ' && ((S.current = ''), R(!1))
    }),
    j = h.useMemo(() => ({ onKeyDown: I }), [I]),
    M = h.useMemo(
      () => ({
        onKeyDown: I,
        onKeyUp(V) {
          V.key === ' ' && R(!1)
        },
      }),
      [I, R]
    )
  return h.useMemo(() => (g ? { reference: j, floating: M } : {}), [g, j, M])
}
function Gx(e, r) {
  const [l, a] = e
  let u = !1
  const f = r.length
  for (let d = 0, m = f - 1; d < f; m = d++) {
    const [p, g] = r[d] || [0, 0],
      [v, y] = r[m] || [0, 0]
    g >= a != y >= a && l <= ((v - p) * (a - g)) / (y - g) + p && (u = !u)
  }
  return u
}
function ND(e, r) {
  return e[0] >= r.x && e[0] <= r.x + r.width && e[1] >= r.y && e[1] <= r.y + r.height
}
function hR(e = {}) {
  const { buffer: r = 0.5, blockPointerEvents: l = !1, requireIntent: a = !0 } = e,
    u = new Li()
  let f = !1,
    d = null,
    m = null,
    p = typeof performance < 'u' ? performance.now() : 0
  function g(y, x) {
    const T = performance.now(),
      w = T - p
    if (d === null || m === null || w === 0) return ((d = y), (m = x), (p = T), null)
    const S = y - d,
      N = x - m,
      R = Math.sqrt(S * S + N * N) / w
    return ((d = y), (m = x), (p = T), R)
  }
  const v = ({ x: y, y: x, placement: T, elements: w, onClose: S, nodeId: N, tree: A }) =>
    function (I) {
      function j() {
        ;(u.clear(), S())
      }
      if ((u.clear(), !w.domReference || !w.floating || T == null || y == null || x == null)) return
      const { clientX: M, clientY: V } = I,
        k = [M, V],
        _ = On(I),
        ee = I.type === 'mouseleave',
        ie = tt(w.floating, _),
        Q = tt(w.domReference, _),
        le = w.domReference.getBoundingClientRect(),
        q = w.floating.getBoundingClientRect(),
        Y = T.split('-')[0],
        F = y > q.right - q.width / 2,
        z = x > q.bottom - q.height / 2,
        L = ND(k, le),
        D = q.width > le.width,
        $ = q.height > le.height,
        oe = (D ? le : q).left,
        O = (D ? le : q).right,
        P = ($ ? le : q).top,
        H = ($ ? le : q).bottom
      if (ie && ((f = !0), !ee)) return
      if ((Q && (f = !1), Q && !ee)) {
        f = !0
        return
      }
      if (
        (ee && Ot(I.relatedTarget) && tt(w.floating, I.relatedTarget)) ||
        (A && Di(A.nodesRef.current, N).some(({ context: re }) => re?.open))
      )
        return
      if (
        (Y === 'top' && x >= le.bottom - 1) ||
        (Y === 'bottom' && x <= le.top + 1) ||
        (Y === 'left' && y >= le.right - 1) ||
        (Y === 'right' && y <= le.left + 1)
      )
        return j()
      let X = []
      switch (Y) {
        case 'top':
          X = [
            [oe, le.top + 1],
            [oe, q.bottom - 1],
            [O, q.bottom - 1],
            [O, le.top + 1],
          ]
          break
        case 'bottom':
          X = [
            [oe, q.top + 1],
            [oe, le.bottom - 1],
            [O, le.bottom - 1],
            [O, q.top + 1],
          ]
          break
        case 'left':
          X = [
            [q.right - 1, H],
            [q.right - 1, P],
            [le.left + 1, P],
            [le.left + 1, H],
          ]
          break
        case 'right':
          X = [
            [le.right - 1, H],
            [le.right - 1, P],
            [q.left + 1, P],
            [q.left + 1, H],
          ]
          break
      }
      function te([re, W]) {
        switch (Y) {
          case 'top': {
            const de = [D ? re + r / 2 : F ? re + r * 4 : re - r * 4, W + r + 1],
              ve = [D ? re - r / 2 : F ? re + r * 4 : re - r * 4, W + r + 1],
              ue = [
                [q.left, F || D ? q.bottom - r : q.top],
                [q.right, F ? (D ? q.bottom - r : q.top) : q.bottom - r],
              ]
            return [de, ve, ...ue]
          }
          case 'bottom': {
            const de = [D ? re + r / 2 : F ? re + r * 4 : re - r * 4, W - r],
              ve = [D ? re - r / 2 : F ? re + r * 4 : re - r * 4, W - r],
              ue = [
                [q.left, F || D ? q.top + r : q.bottom],
                [q.right, F ? (D ? q.top + r : q.bottom) : q.top + r],
              ]
            return [de, ve, ...ue]
          }
          case 'left': {
            const de = [re + r + 1, $ ? W + r / 2 : z ? W + r * 4 : W - r * 4],
              ve = [re + r + 1, $ ? W - r / 2 : z ? W + r * 4 : W - r * 4]
            return [
              ...[
                [z || $ ? q.right - r : q.left, q.top],
                [z ? ($ ? q.right - r : q.left) : q.right - r, q.bottom],
              ],
              de,
              ve,
            ]
          }
          case 'right': {
            const de = [re - r, $ ? W + r / 2 : z ? W + r * 4 : W - r * 4],
              ve = [re - r, $ ? W - r / 2 : z ? W + r * 4 : W - r * 4],
              ue = [
                [z || $ ? q.left + r : q.right, q.top],
                [z ? ($ ? q.left + r : q.right) : q.left + r, q.bottom],
              ]
            return [de, ve, ...ue]
          }
          default:
            return []
        }
      }
      if (!Gx([M, V], X)) {
        if (f && !L) return j()
        if (!ee && a) {
          const re = g(I.clientX, I.clientY)
          if (re !== null && re < 0.1) return j()
        }
        Gx([M, V], te([y, x])) ? !f && a && u.start(40, j) : j()
      }
    }
  return ((v.__options = { blockPointerEvents: l }), v)
}
function zD(e) {
  const r = h.useRef(''),
    l = h.useCallback(
      (u) => {
        u.defaultPrevented || ((r.current = u.pointerType), e(u, u.pointerType))
      },
      [e]
    )
  return {
    onClick: h.useCallback(
      (u) => {
        if (u.detail === 0) {
          e(u, 'keyboard')
          return
        }
        ;('pointerType' in u && e(u, u.pointerType), e(u, r.current), (r.current = ''))
      },
      [e]
    ),
    onPointerDown: l,
  }
}
function Id(e) {
  const [r, l] = h.useState(null),
    a = Te((m, p) => {
      e || l(p)
    }),
    u = h.useCallback(() => {
      l(null)
    }, []),
    { onClick: f, onPointerDown: d } = zD(a)
  return h.useMemo(
    () => ({ openMethod: r, reset: u, triggerProps: { onClick: f, onPointerDown: d } }),
    [r, u, f, d]
  )
}
function ID(e) {
  const { store: r, parentContext: l, actionsRef: a } = e,
    u = r.useState('open'),
    f = r.useState('disablePointerDismissal'),
    d = r.useState('modal'),
    m = r.useState('popupElement'),
    { openMethod: p, triggerProps: g, reset: v } = Id(u)
  sR(r)
  const { forceUnmount: y } = uR(u, r, () => {
      v()
    }),
    x = Te((ie) => {
      const Q = De(ie)
      return (
        (Q.preventUnmountOnClose = () => {
          r.set('preventUnmountingOnClose', !0)
        }),
        Q
      )
    }),
    T = h.useCallback(() => {
      r.setOpen(!1, x(BS))
    }, [r, x])
  h.useImperativeHandle(a, () => ({ unmount: y, close: T }), [y, T])
  const w = dR({
      popupStore: r,
      onOpenChange: r.setOpen,
      treatPopupAsFloatingElement: !0,
      noEmit: !0,
    }),
    [S, N] = h.useState(0),
    A = S === 0,
    R = gR(w),
    I = Ad(w, {
      outsidePressEvent() {
        return r.context.internalBackdropRef.current || r.context.backdropRef.current
          ? 'intentional'
          : { mouse: d === 'trap-focus' ? 'sloppy' : 'intentional', touch: 'sloppy' }
      },
      outsidePress(ie) {
        if (('button' in ie && ie.button !== 0) || ('touches' in ie && ie.touches.length !== 1))
          return !1
        const Q = On(ie)
        if (A && !f) {
          const le = Q
          return d && (r.context.internalBackdropRef.current || r.context.backdropRef.current)
            ? r.context.internalBackdropRef.current === le ||
                r.context.backdropRef.current === le ||
                (tt(le, m) && !le?.hasAttribute('data-base-ui-portal'))
            : !0
        }
        return !1
      },
      escapeKey: A,
    })
  Ed(u && d === !0, m)
  const { getReferenceProps: j, getFloatingProps: M, getTriggerProps: V } = ta([R, I])
  ;(r.useContextCallback('onNestedDialogOpen', (ie) => {
    N(ie + 1)
  }),
    r.useContextCallback('onNestedDialogClose', () => {
      N(0)
    }),
    h.useEffect(
      () => (
        l?.onNestedDialogOpen && u && l.onNestedDialogOpen(S),
        l?.onNestedDialogClose && !u && l.onNestedDialogClose(),
        () => {
          l?.onNestedDialogClose && u && l.onNestedDialogClose()
        }
      ),
      [u, l, S]
    ))
  const k = h.useMemo(() => j(g), [j, g]),
    _ = h.useMemo(() => V(g), [V, g]),
    ee = h.useMemo(() => M(), [M])
  r.useSyncedValues({
    openMethod: p,
    activeTriggerProps: k,
    inactiveTriggerProps: _,
    popupProps: ee,
    floatingRootContext: w,
    nestedOpenDialogCount: S,
  })
}
const bR = h.createContext(void 0)
function ri(e) {
  const r = h.useContext(bR)
  if (e === !1 && r === void 0) throw new Error(Ht(27))
  return r
}
const DD = {
  ...fR,
  modal: fe((e) => e.modal),
  nested: fe((e) => e.nested),
  nestedOpenDialogCount: fe((e) => e.nestedOpenDialogCount),
  disablePointerDismissal: fe((e) => e.disablePointerDismissal),
  openMethod: fe((e) => e.openMethod),
  descriptionElementId: fe((e) => e.descriptionElementId),
  titleElementId: fe((e) => e.titleElementId),
  viewportElement: fe((e) => e.viewportElement),
  role: fe((e) => e.role),
}
class jD extends Uh {
  constructor(r) {
    super(
      kD(r),
      {
        popupRef: h.createRef(),
        backdropRef: h.createRef(),
        internalBackdropRef: h.createRef(),
        triggerElements: new Nd(),
        onOpenChange: void 0,
        onOpenChangeComplete: void 0,
      },
      DD
    )
  }
  setOpen = (r, l) => {
    if (
      ((l.preventUnmountOnClose = () => {
        this.set('preventUnmountingOnClose', !0)
      }),
      !r &&
        l.trigger == null &&
        this.state.activeTriggerId != null &&
        (l.trigger = this.state.activeTriggerElement ?? void 0),
      this.context.onOpenChange?.(r, l),
      l.isCanceled)
    )
      return
    const a = { open: r, nativeEvent: l.event, reason: l.reason, nested: this.state.nested }
    this.state.floatingRootContext.context.events?.emit('openchange', a)
    const u = { open: r },
      f = l.trigger?.id ?? null
    ;((f || r) && ((u.activeTriggerId = f), (u.activeTriggerElement = l.trigger ?? null)),
      this.update(u))
  }
}
function kD(e = {}) {
  return {
    ...cR(),
    modal: !0,
    disablePointerDismissal: !1,
    popupElement: null,
    viewportElement: null,
    descriptionElementId: void 0,
    titleElementId: void 0,
    openMethod: null,
    nested: !1,
    nestedOpenDialogCount: 0,
    role: 'dialog',
    ...e,
  }
}
function _D(e) {
  const {
      children: r,
      open: l,
      defaultOpen: a = !1,
      onOpenChange: u,
      onOpenChangeComplete: f,
      actionsRef: d,
      handle: m,
      triggerId: p,
      defaultTriggerId: g = null,
    } = e,
    v = ri(),
    y = !!v,
    x = Yn(
      () =>
        m?.store ??
        new jD({
          open: l ?? a,
          activeTriggerId: p !== void 0 ? p : g,
          modal: !0,
          disablePointerDismissal: !0,
          nested: y,
          role: 'alertdialog',
        })
    ).current
  ;(x.useControlledProp('open', l, a),
    x.useControlledProp('activeTriggerId', p, g),
    x.useSyncedValue('nested', y),
    x.useContextCallback('onOpenChange', u),
    x.useContextCallback('onOpenChangeComplete', f))
  const T = x.useState('payload')
  ID({ store: x, actionsRef: d, parentContext: v?.store.context })
  const w = h.useMemo(() => ({ store: x }), [x])
  return E.jsx(bR.Provider, { value: w, children: typeof r == 'function' ? r({ payload: T }) : r })
}
let Qf = (function (e) {
  return ((e.startingStyle = 'data-starting-style'), (e.endingStyle = 'data-ending-style'), e)
})({})
const UD = { [Qf.startingStyle]: '' },
  VD = { [Qf.endingStyle]: '' },
  ul = {
    transitionStatus(e) {
      return e === 'starting' ? UD : e === 'ending' ? VD : null
    },
  }
let zi = (function (e) {
    return (
      (e.open = 'data-open'),
      (e.closed = 'data-closed'),
      (e[(e.startingStyle = Qf.startingStyle)] = 'startingStyle'),
      (e[(e.endingStyle = Qf.endingStyle)] = 'endingStyle'),
      (e.anchorHidden = 'data-anchor-hidden'),
      e
    )
  })({}),
  Vg = (function (e) {
    return ((e.popupOpen = 'data-popup-open'), (e.pressed = 'data-pressed'), e)
  })({})
const LD = { [Vg.popupOpen]: '' },
  HD = { [Vg.popupOpen]: '', [Vg.pressed]: '' },
  BD = { [zi.open]: '' },
  FD = { [zi.closed]: '' },
  PD = { [zi.anchorHidden]: '' },
  Dd = {
    open(e) {
      return e ? LD : null
    },
  },
  _u = {
    open(e) {
      return e ? HD : null
    },
  },
  oi = {
    open(e) {
      return e ? BD : FD
    },
    anchorHidden(e) {
      return e ? PD : null
    },
  },
  qD = { ...oi, ...ul },
  GD = h.forwardRef(function (r, l) {
    const { render: a, className: u, forceRender: f = !1, ...d } = r,
      { store: m } = ri(),
      p = m.useState('open'),
      g = m.useState('nested'),
      v = m.useState('mounted'),
      y = m.useState('transitionStatus'),
      x = h.useMemo(() => ({ open: p, transitionStatus: y }), [p, y])
    return nt('div', r, {
      state: x,
      ref: [m.context.backdropRef, l],
      stateAttributesMapping: qD,
      props: [
        {
          role: 'presentation',
          hidden: !v,
          style: { userSelect: 'none', WebkitUserSelect: 'none' },
        },
        d,
      ],
      enabled: f || !g,
    })
  }),
  YD = h.createContext(void 0)
function Fh(e = !1) {
  const r = h.useContext(YD)
  if (r === void 0 && !e) throw new Error(Ht(16))
  return r
}
function $D(e) {
  const {
      focusableWhenDisabled: r,
      disabled: l,
      composite: a = !1,
      tabIndex: u = 0,
      isNativeButton: f,
    } = e,
    d = a && r !== !1,
    m = a && r === !1
  return {
    props: h.useMemo(() => {
      const g = {
        onKeyDown(v) {
          l && r && v.key !== 'Tab' && v.preventDefault()
        },
      }
      return (
        a || ((g.tabIndex = u), !f && l && (g.tabIndex = r ? u : -1)),
        ((f && (r || d)) || (!f && l)) && (g['aria-disabled'] = l),
        f && (!r || m) && (g.disabled = l),
        g
      )
    }, [a, l, r, d, m, f, u]),
  }
}
function wo(e = {}) {
  const { disabled: r = !1, focusableWhenDisabled: l, tabIndex: a = 0, native: u = !0 } = e,
    f = h.useRef(null),
    d = Fh(!0) !== void 0,
    m = Te(() => {
      const x = f.current
      return !!(x?.tagName === 'A' && x?.href)
    }),
    { props: p } = $D({
      focusableWhenDisabled: l,
      disabled: r,
      composite: d,
      tabIndex: a,
      isNativeButton: u,
    }),
    g = h.useCallback(() => {
      const x = f.current
      KD(x) && d && r && p.disabled === void 0 && x.disabled && (x.disabled = !1)
    }, [r, p.disabled, d])
  Ne(g, [g])
  const v = h.useCallback(
      (x = {}) => {
        const { onClick: T, onMouseDown: w, onKeyUp: S, onKeyDown: N, onPointerDown: A, ...R } = x
        return Yl(
          {
            type: u ? 'button' : void 0,
            onClick(j) {
              if (r) {
                j.preventDefault()
                return
              }
              T?.(j)
            },
            onMouseDown(j) {
              r || w?.(j)
            },
            onKeyDown(j) {
              if ((r || (_g(j), N?.(j)), j.baseUIHandlerPrevented)) return
              const M = j.target === j.currentTarget && !u && !m() && !r,
                V = j.key === 'Enter',
                k = j.key === ' '
              M && ((k || V) && j.preventDefault(), V && T?.(j))
            },
            onKeyUp(j) {
              ;(r || (_g(j), S?.(j)),
                !j.baseUIHandlerPrevented &&
                  j.target === j.currentTarget &&
                  !u &&
                  !r &&
                  j.key === ' ' &&
                  T?.(j))
            },
            onPointerDown(j) {
              if (r) {
                j.preventDefault()
                return
              }
              A?.(j)
            },
          },
          u ? void 0 : { role: 'button' },
          p,
          R
        )
      },
      [r, p, u, m]
    ),
    y = Te((x) => {
      ;((f.current = x), g())
    })
  return { getButtonProps: v, buttonRef: y }
}
function KD(e) {
  return Wt(e) && e.tagName === 'BUTTON'
}
const XD = h.forwardRef(function (r, l) {
  const { render: a, className: u, disabled: f = !1, nativeButton: d = !0, ...m } = r,
    { store: p } = ri(),
    g = p.useState('open')
  function v(w) {
    g && p.setOpen(!1, De(z3, w.nativeEvent))
  }
  const { getButtonProps: y, buttonRef: x } = wo({ disabled: f, native: d }),
    T = h.useMemo(() => ({ disabled: f }), [f])
  return nt('button', r, { state: T, ref: [l, x], props: [{ onClick: v }, m, y] })
})
function co(e) {
  return ea(e, 'base-ui')
}
const QD = h.forwardRef(function (r, l) {
  const { render: a, className: u, id: f, ...d } = r,
    { store: m } = ri(),
    p = co(f)
  return (
    m.useSyncedValueWithCleanup('descriptionElementId', p),
    nt('p', r, { ref: l, props: [{ id: p }, d] })
  )
})
let ZD = (function (e) {
    return ((e.nestedDialogs = '--nested-dialogs'), e)
  })({}),
  JD = (function (e) {
    return (
      (e[(e.open = zi.open)] = 'open'),
      (e[(e.closed = zi.closed)] = 'closed'),
      (e[(e.startingStyle = zi.startingStyle)] = 'startingStyle'),
      (e[(e.endingStyle = zi.endingStyle)] = 'endingStyle'),
      (e.nested = 'data-nested'),
      (e.nestedDialogOpen = 'data-nested-dialog-open'),
      e
    )
  })({})
const yR = h.createContext(void 0)
function WD() {
  const e = h.useContext(yR)
  if (e === void 0) throw new Error(Ht(26))
  return e
}
const vR = 'ArrowUp',
  xR = 'ArrowDown',
  SR = 'ArrowLeft',
  RR = 'ArrowRight',
  ER = 'Home',
  TR = 'End',
  ej = new Set([SR, RR]),
  tj = new Set([vR, xR]),
  nj = new Set([...ej, ...tj])
;[...nj]
const Ph = new Set([vR, xR, SR, RR, ER, TR]),
  rj = {
    ...oi,
    ...ul,
    nestedDialogOpen(e) {
      return e ? { [JD.nestedDialogOpen]: '' } : null
    },
  },
  oj = h.forwardRef(function (r, l) {
    const { className: a, finalFocus: u, initialFocus: f, render: d, ...m } = r,
      { store: p } = ri(),
      g = p.useState('descriptionElementId'),
      v = p.useState('disablePointerDismissal'),
      y = p.useState('floatingRootContext'),
      x = p.useState('popupProps'),
      T = p.useState('modal'),
      w = p.useState('mounted'),
      S = p.useState('nested'),
      N = p.useState('nestedOpenDialogCount'),
      A = p.useState('open'),
      R = p.useState('openMethod'),
      I = p.useState('titleElementId'),
      j = p.useState('transitionStatus'),
      M = p.useState('role')
    ;(WD(),
      Ir({
        open: A,
        ref: p.context.popupRef,
        onComplete() {
          A && p.context.onOpenChangeComplete?.(!0)
        },
      }))
    function V(Q) {
      return Q === 'touch' ? p.context.popupRef.current : !0
    }
    const k = f === void 0 ? V : f,
      _ = N > 0,
      ee = h.useMemo(
        () => ({ open: A, nested: S, transitionStatus: j, nestedDialogOpen: _ }),
        [A, S, j, _]
      ),
      ie = nt('div', r, {
        state: ee,
        props: [
          x,
          {
            'aria-labelledby': I ?? void 0,
            'aria-describedby': g ?? void 0,
            role: M,
            tabIndex: -1,
            hidden: !w,
            onKeyDown(Q) {
              Ph.has(Q.key) && Q.stopPropagation()
            },
            style: { [ZD.nestedDialogs]: N },
          },
          m,
        ],
        ref: [l, p.context.popupRef, p.useStateSetter('popupElement')],
        stateAttributesMapping: rj,
      })
    return E.jsx(Md, {
      context: y,
      openInteractionType: R,
      disabled: !w,
      closeOnFocusOut: !v,
      initialFocus: k,
      returnFocus: u,
      modal: T !== !1,
      restoreFocus: 'popup',
      children: ie,
    })
  })
function jd(e) {
  return jh(19) ? e : e ? 'true' : void 0
}
const kd = h.forwardRef(function (r, l) {
    const { cutout: a, ...u } = r
    let f
    if (a) {
      const d = a?.getBoundingClientRect()
      f = `polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      ${d.left}px ${d.top}px,
      ${d.left}px ${d.bottom}px,
      ${d.right}px ${d.bottom}px,
      ${d.right}px ${d.top}px,
      ${d.left}px ${d.top}px
    )`
    }
    return E.jsx('div', {
      ref: l,
      role: 'presentation',
      'data-base-ui-inert': '',
      ...u,
      style: {
        position: 'fixed',
        inset: 0,
        userSelect: 'none',
        WebkitUserSelect: 'none',
        clipPath: f,
      },
    })
  }),
  lj = h.forwardRef(function (r, l) {
    const { keepMounted: a = !1, ...u } = r,
      { store: f } = ri(),
      d = f.useState('mounted'),
      m = f.useState('modal')
    return d || a
      ? E.jsx(yR.Provider, {
          value: a,
          children: E.jsxs(wd, {
            ref: l,
            ...u,
            children: [
              d && m === !0 && E.jsx(kd, { ref: f.context.internalBackdropRef, inert: jd(!open) }),
              r.children,
            ],
          }),
        })
      : null
  }),
  ij = h.forwardRef(function (r, l) {
    const { render: a, className: u, id: f, ...d } = r,
      { store: m } = ri(),
      p = co(f)
    return (
      m.useSyncedValueWithCleanup('titleElementId', p),
      nt('h2', r, { ref: l, props: [{ id: p }, d] })
    )
  }),
  aj = h.forwardRef(function (r, l) {
    const {
        render: a,
        className: u,
        disabled: f = !1,
        nativeButton: d = !0,
        id: m,
        payload: p,
        handle: g,
        ...v
      } = r,
      y = ri(!0),
      x = g?.store ?? y?.store
    if (!x) throw new Error(Ht(79))
    const T = co(m),
      w = x.useState('floatingRootContext'),
      S = x.useState('isOpenedByTrigger', T),
      N = h.useRef(null),
      { registerTrigger: A, isMountedByThisTrigger: R } = aR(T, N, x, { payload: p }),
      { getButtonProps: I, buttonRef: j } = wo({ disabled: f, native: d }),
      M = ps(w, { enabled: w != null }),
      V = ta([M]),
      k = h.useMemo(() => ({ disabled: f, open: S }), [f, S]),
      _ = x.useState('triggerProps', R)
    return nt('button', r, {
      state: k,
      ref: [j, l, A, N],
      props: [V.getReferenceProps(), _, { [LS]: '', id: T }, v, I],
      stateAttributesMapping: Dd,
    })
  }),
  sj = h.forwardRef(function (r, l) {
    const {
        render: a,
        className: u,
        disabled: f = !1,
        focusableWhenDisabled: d = !1,
        nativeButton: m = !0,
        ...p
      } = r,
      g = !!f,
      { getButtonProps: v, buttonRef: y } = wo({
        disabled: g,
        focusableWhenDisabled: d,
        native: m,
      }),
      x = h.useMemo(() => ({ disabled: g }), [g])
    return nt('button', r, { state: x, ref: [l, y], props: [p, v] })
  }),
  Yx = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
  $x = J1,
  Wu = (e, r) => (l) => {
    var a
    if (r?.variants == null) return $x(e, l?.class, l?.className)
    const { variants: u, defaultVariants: f } = r,
      d = Object.keys(u).map((g) => {
        const v = l?.[g],
          y = f?.[g]
        if (v === null) return null
        const x = Yx(v) || Yx(y)
        return u[g][x]
      }),
      m =
        l &&
        Object.entries(l).reduce((g, v) => {
          let [y, x] = v
          return (x === void 0 || (g[y] = x), g)
        }, {}),
      p =
        r == null || (a = r.compoundVariants) === null || a === void 0
          ? void 0
          : a.reduce((g, v) => {
              let { class: y, className: x, ...T } = v
              return Object.entries(T).every((w) => {
                let [S, N] = w
                return Array.isArray(N) ? N.includes({ ...f, ...m }[S]) : { ...f, ...m }[S] === N
              })
                ? [...g, y, x]
                : g
            }, [])
    return $x(e, d, p, l?.class, l?.className)
  },
  uj = Wu(
    "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/80',
          outline:
            'border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs',
          secondary:
            'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
          ghost:
            'hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground',
          destructive:
            'bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default:
            'h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
          xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
          sm: 'h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5',
          lg: 'h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
          icon: 'size-9',
          'icon-xs':
            "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
          'icon-sm':
            'size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md',
          'icon-lg': 'size-10',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    }
  )
function _i({ className: e, variant: r = 'default', size: l = 'default', ...a }) {
  return E.jsx(sj, {
    'data-slot': 'button',
    className: Ye(uj({ variant: r, size: l, className: e })),
    ...a,
  })
}
function cj({ ...e }) {
  return E.jsx(_D, { 'data-slot': 'alert-dialog', ...e })
}
function fj({ ...e }) {
  return E.jsx(aj, { 'data-slot': 'alert-dialog-trigger', ...e })
}
function dj({ ...e }) {
  return E.jsx(lj, { 'data-slot': 'alert-dialog-portal', ...e })
}
function mj({ className: e, ...r }) {
  return E.jsx(GD, {
    'data-slot': 'alert-dialog-overlay',
    className: Ye(
      'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50',
      e
    ),
    ...r,
  })
}
function pj({ className: e, size: r = 'default', ...l }) {
  return E.jsxs(dj, {
    children: [
      E.jsx(mj, {}),
      E.jsx(oj, {
        'data-slot': 'alert-dialog-content',
        'data-size': r,
        className: Ye(
          'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 bg-background ring-foreground/10 gap-6 rounded-xl p-6 ring-1 duration-100 data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-lg group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none',
          e
        ),
        ...l,
      }),
    ],
  })
}
function gj({ className: e, ...r }) {
  return E.jsx('div', {
    'data-slot': 'alert-dialog-header',
    className: Ye(
      'grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]',
      e
    ),
    ...r,
  })
}
function hj({ className: e, ...r }) {
  return E.jsx('div', {
    'data-slot': 'alert-dialog-footer',
    className: Ye(
      'flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end',
      e
    ),
    ...r,
  })
}
function bj({ className: e, ...r }) {
  return E.jsx('div', {
    'data-slot': 'alert-dialog-media',
    className: Ye(
      "bg-muted mb-2 inline-flex size-16 items-center justify-center rounded-md sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8",
      e
    ),
    ...r,
  })
}
function yj({ className: e, ...r }) {
  return E.jsx(ij, {
    'data-slot': 'alert-dialog-title',
    className: Ye(
      'text-lg font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2',
      e
    ),
    ...r,
  })
}
function vj({ className: e, ...r }) {
  return E.jsx(QD, {
    'data-slot': 'alert-dialog-description',
    className: Ye(
      'text-muted-foreground *:[a]:hover:text-foreground text-sm text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3',
      e
    ),
    ...r,
  })
}
function xj({ className: e, ...r }) {
  return E.jsx(_i, { 'data-slot': 'alert-dialog-action', className: Ye(e), ...r })
}
function Sj({ className: e, variant: r = 'outline', size: l = 'default', ...a }) {
  return E.jsx(XD, {
    'data-slot': 'alert-dialog-cancel',
    className: Ye(e),
    render: E.jsx(_i, { variant: r, size: l }),
    ...a,
  })
}
function Rj(e) {
  return nt(e.defaultTagName ?? 'div', e, e)
}
const Ej = Wu(
  'h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-colors overflow-hidden group/badge',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
        secondary: 'bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80',
        destructive:
          'bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20',
        outline: 'border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground',
        ghost: 'hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)
function Tj({ className: e, variant: r = 'default', render: l, ...a }) {
  return Rj({
    defaultTagName: 'span',
    props: Yl({ className: Ye(Ej({ className: e, variant: r })) }, a),
    render: l,
    state: { slot: 'badge', variant: r },
  })
}
function CR({ className: e, size: r = 'default', ...l }) {
  return E.jsx('div', {
    'data-slot': 'card',
    'data-size': r,
    className: Ye(
      'ring-foreground/10 bg-card text-card-foreground gap-6 overflow-hidden rounded-xl py-6 text-sm shadow-xs ring-1 has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col',
      e
    ),
    ...l,
  })
}
function wR({ className: e, ...r }) {
  return E.jsx('div', {
    'data-slot': 'card-header',
    className: Ye(
      'gap-1 rounded-t-xl px-6 group-data-[size=sm]/card:px-4 [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]',
      e
    ),
    ...r,
  })
}
function MR({ className: e, ...r }) {
  return E.jsx('div', {
    'data-slot': 'card-title',
    className: Ye('text-base leading-normal font-medium group-data-[size=sm]/card:text-sm', e),
    ...r,
  })
}
function OR({ className: e, ...r }) {
  return E.jsx('div', {
    'data-slot': 'card-description',
    className: Ye('text-muted-foreground text-sm', e),
    ...r,
  })
}
function Cj({ className: e, ...r }) {
  return E.jsx('div', {
    'data-slot': 'card-action',
    className: Ye('col-start-2 row-span-2 row-start-1 self-start justify-self-end', e),
    ...r,
  })
}
function wj({ className: e, ...r }) {
  return E.jsx('div', {
    'data-slot': 'card-content',
    className: Ye('px-6 group-data-[size=sm]/card:px-4', e),
    ...r,
  })
}
function Mj({ className: e, ...r }) {
  return E.jsx('div', {
    'data-slot': 'card-footer',
    className: Ye(
      'rounded-b-xl px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4 flex items-center',
      e
    ),
    ...r,
  })
}
function Gl({ controlled: e, default: r, name: l, state: a = 'value' }) {
  const { current: u } = h.useRef(e !== void 0),
    [f, d] = h.useState(r),
    m = u ? e : f,
    p = h.useCallback((g) => {
      u || d(g)
    }, [])
  return [m, p]
}
const AR = h.createContext({
  register: () => {},
  unregister: () => {},
  subscribeMapChange: () => () => {},
  elementsRef: { current: [] },
  nextIndexRef: { current: 0 },
})
function Oj() {
  return h.useContext(AR)
}
function qh(e) {
  const { children: r, elementsRef: l, labelsRef: a, onMapChange: u } = e,
    f = Te(u),
    d = h.useRef(0),
    m = Yn(Nj).current,
    p = Yn(Aj).current,
    [g, v] = h.useState(0),
    y = h.useRef(g),
    x = Te((A, R) => {
      ;(p.set(A, R ?? null), (y.current += 1), v(y.current))
    }),
    T = Te((A) => {
      ;(p.delete(A), (y.current += 1), v(y.current))
    }),
    w = h.useMemo(() => {
      const A = new Map()
      return (
        Array.from(p.keys())
          .filter((I) => I.isConnected)
          .sort(zj)
          .forEach((I, j) => {
            const M = p.get(I) ?? {}
            A.set(I, { ...M, index: j })
          }),
        A
      )
    }, [p, g])
  ;(Ne(() => {
    if (typeof MutationObserver != 'function' || w.size === 0) return
    const A = new MutationObserver((R) => {
      const I = new Set(),
        j = (M) => (I.has(M) ? I.delete(M) : I.add(M))
      ;(R.forEach((M) => {
        ;(M.removedNodes.forEach(j), M.addedNodes.forEach(j))
      }),
        I.size === 0 && ((y.current += 1), v(y.current)))
    })
    return (
      w.forEach((R, I) => {
        I.parentElement && A.observe(I.parentElement, { childList: !0 })
      }),
      () => {
        A.disconnect()
      }
    )
  }, [w]),
    Ne(() => {
      ;(y.current === g &&
        (l.current.length !== w.size && (l.current.length = w.size),
        a && a.current.length !== w.size && (a.current.length = w.size),
        (d.current = w.size)),
        f(w))
    }, [f, w, l, a, g]),
    Ne(
      () => () => {
        l.current = []
      },
      [l]
    ),
    Ne(
      () => () => {
        a && (a.current = [])
      },
      [a]
    ))
  const S = Te(
    (A) => (
      m.add(A),
      () => {
        m.delete(A)
      }
    )
  )
  Ne(() => {
    m.forEach((A) => A(w))
  }, [m, w])
  const N = h.useMemo(
    () => ({
      register: x,
      unregister: T,
      subscribeMapChange: S,
      elementsRef: l,
      labelsRef: a,
      nextIndexRef: d,
    }),
    [x, T, S, l, a, d]
  )
  return E.jsx(AR.Provider, { value: N, children: r })
}
function Aj() {
  return new Map()
}
function Nj() {
  return new Set()
}
function zj(e, r) {
  const l = e.compareDocumentPosition(r)
  return l & Node.DOCUMENT_POSITION_FOLLOWING || l & Node.DOCUMENT_POSITION_CONTAINED_BY
    ? -1
    : l & Node.DOCUMENT_POSITION_PRECEDING || l & Node.DOCUMENT_POSITION_CONTAINS
      ? 1
      : 0
}
const Ij = h.createContext(void 0)
function Gh() {
  return h.useContext(Ij)?.direction ?? 'ltr'
}
let Yh = (function (e) {
  return ((e[(e.None = 0)] = 'None'), (e[(e.GuessFromOrder = 1)] = 'GuessFromOrder'), e)
})({})
function na(e = {}) {
  const { label: r, metadata: l, textRef: a, indexGuessBehavior: u, index: f } = e,
    {
      register: d,
      unregister: m,
      subscribeMapChange: p,
      elementsRef: g,
      labelsRef: v,
      nextIndexRef: y,
    } = Oj(),
    x = h.useRef(-1),
    [T, w] = h.useState(
      f ??
        (u === Yh.GuessFromOrder
          ? () => {
              if (x.current === -1) {
                const A = y.current
                ;((y.current += 1), (x.current = A))
              }
              return x.current
            }
          : -1)
    ),
    S = h.useRef(null),
    N = h.useCallback(
      (A) => {
        if (((S.current = A), T !== -1 && A !== null && ((g.current[T] = A), v))) {
          const R = r !== void 0
          v.current[T] = R ? r : (a?.current?.textContent ?? A.textContent)
        }
      },
      [T, g, v, r, a]
    )
  return (
    Ne(() => {
      if (f != null) return
      const A = S.current
      if (A)
        return (
          d(A, l),
          () => {
            m(A)
          }
        )
    }, [f, d, m, l]),
    Ne(() => {
      if (f == null)
        return p((A) => {
          const R = S.current ? A.get(S.current)?.index : null
          R != null && w(R)
        })
    }, [f, p, w]),
    h.useMemo(() => ({ ref: N, index: T }), [T, N])
  )
}
function NR(e) {
  const r = h.useRef(!0)
  r.current && ((r.current = !1), e())
}
const zR = h.createContext(void 0),
  IR = h.createContext(void 0),
  DR = h.createContext(void 0),
  jR = h.createContext('')
function cl() {
  const e = h.useContext(zR)
  if (!e) throw new Error(Ht(22))
  return e
}
function _d() {
  const e = h.useContext(IR)
  if (!e) throw new Error(Ht(23))
  return e
}
function ra() {
  const e = h.useContext(DR)
  if (!e) throw new Error(Ht(24))
  return e
}
function $h() {
  return h.useContext(jR)
}
const kR = (e, r) => Object.is(e, r)
function rl(e, r, l) {
  return e == null || r == null ? Object.is(e, r) : l(e, r)
}
function Ii(e, r, l) {
  return !e || e.length === 0 ? !1 : e.some((a) => (a === void 0 ? !1 : rl(a, r, l)))
}
function es(e, r, l) {
  return !e || e.length === 0 ? -1 : e.findIndex((a) => (a === void 0 ? !1 : rl(a, r, l)))
}
function _R(e, r, l) {
  return e.filter((a) => !rl(a, r, l))
}
const Ie = {
  id: fe((e) => e.id),
  query: fe((e) => e.query),
  items: fe((e) => e.items),
  selectedValue: fe((e) => e.selectedValue),
  open: fe((e) => e.open),
  mounted: fe((e) => e.mounted),
  forceMounted: fe((e) => e.forceMounted),
  inline: fe((e) => e.inline),
  activeIndex: fe((e) => e.activeIndex),
  selectedIndex: fe((e) => e.selectedIndex),
  isActive: fe((e, r) => e.activeIndex === r),
  isSelected: fe((e, r) => {
    const l = e.isItemEqualToValue,
      a = e.selectedValue
    return Array.isArray(a) ? a.some((u) => rl(u, r, l)) : rl(a, r, l)
  }),
  transitionStatus: fe((e) => e.transitionStatus),
  popupProps: fe((e) => e.popupProps),
  inputProps: fe((e) => e.inputProps),
  triggerProps: fe((e) => e.triggerProps),
  getItemProps: fe((e) => e.getItemProps),
  positionerElement: fe((e) => e.positionerElement),
  listElement: fe((e) => e.listElement),
  triggerElement: fe((e) => e.triggerElement),
  inputElement: fe((e) => e.inputElement),
  popupSide: fe((e) => e.popupSide),
  openMethod: fe((e) => e.openMethod),
  inputInsidePopup: fe((e) => e.inputInsidePopup),
  selectionMode: fe((e) => e.selectionMode),
  listRef: fe((e) => e.listRef),
  labelsRef: fe((e) => e.labelsRef),
  popupRef: fe((e) => e.popupRef),
  emptyRef: fe((e) => e.emptyRef),
  inputRef: fe((e) => e.inputRef),
  keyboardActiveRef: fe((e) => e.keyboardActiveRef),
  chipsContainerRef: fe((e) => e.chipsContainerRef),
  clearRef: fe((e) => e.clearRef),
  valuesRef: fe((e) => e.valuesRef),
  allValuesRef: fe((e) => e.allValuesRef),
  name: fe((e) => e.name),
  disabled: fe((e) => e.disabled),
  readOnly: fe((e) => e.readOnly),
  required: fe((e) => e.required),
  grid: fe((e) => e.grid),
  isGrouped: fe((e) => e.isGrouped),
  virtualized: fe((e) => e.virtualized),
  onOpenChangeComplete: fe((e) => e.onOpenChangeComplete),
  openOnInputClick: fe((e) => e.openOnInputClick),
  itemToStringLabel: fe((e) => e.itemToStringLabel),
  isItemEqualToValue: fe((e) => e.isItemEqualToValue),
  modal: fe((e) => e.modal),
  autoHighlight: fe((e) => e.autoHighlight),
  submitOnItemClick: fe((e) => e.submitOnItemClick),
}
let Kx = (function (e) {
  return (
    (e.disabled = 'data-disabled'),
    (e.valid = 'data-valid'),
    (e.invalid = 'data-invalid'),
    (e.touched = 'data-touched'),
    (e.dirty = 'data-dirty'),
    (e.filled = 'data-filled'),
    (e.focused = 'data-focused'),
    e
  )
})({})
const Dj = {
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valid: null,
    valueMissing: !1,
  },
  Ud = {
    valid(e) {
      return e === null ? null : e ? { [Kx.valid]: '' } : { [Kx.invalid]: '' }
    },
  },
  jj = h.createContext({
    invalid: void 0,
    name: void 0,
    validityData: { state: Dj, errors: [], error: '', value: '', initialValue: null },
    setValidityData: Jt,
    disabled: void 0,
    touched: !1,
    setTouched: Jt,
    dirty: !1,
    setDirty: Jt,
    filled: !1,
    setFilled: Jt,
    focused: !1,
    setFocused: Jt,
    validate: () => null,
    validationMode: 'onSubmit',
    validationDebounceTime: 0,
    shouldValidateOnChange: () => !1,
    state: { disabled: !1, valid: null, touched: !1, dirty: !1, filled: !1, focused: !1 },
    markedDirtyRef: { current: !1 },
    validation: {
      getValidationProps: (e = en) => e,
      getInputValidationProps: (e = en) => e,
      inputRef: { current: null },
      commit: async () => {},
    },
  })
function ol(e = !0) {
  const r = h.useContext(jj)
  if (r.setValidityData === Jt && !e) throw new Error(Ht(28))
  return r
}
function kj(e, r) {
  return { ...e, state: { ...e.state, valid: !r && e.state.valid } }
}
const _j = h.createContext({
  formRef: { current: { fields: new Map() } },
  errors: {},
  clearErrors: Jt,
  validationMode: 'onSubmit',
  submitAttemptedRef: { current: !1 },
})
function Kh() {
  return h.useContext(_j)
}
function Xh(e) {
  const { enabled: r = !0, value: l, id: a, name: u, controlRef: f, commit: d } = e,
    { formRef: m } = Kh(),
    { invalid: p, markedDirtyRef: g, validityData: v, setValidityData: y } = ol(),
    x = Te(e.getValue)
  ;(Ne(() => {
    if (!r) return
    let T = l
    ;(T === void 0 && (T = x()),
      v.initialValue === null && T !== null && y((w) => ({ ...w, initialValue: T })))
  }, [r, y, l, v.initialValue, x]),
    Ne(() => {
      !r ||
        !a ||
        m.current.fields.set(a, {
          getValue: x,
          name: u,
          controlRef: f,
          validityData: kj(v, p),
          validate() {
            let T = l
            ;(T === void 0 && (T = x()), (g.current = !0), Yr.flushSync(() => d(T)))
          },
        })
    }, [d, f, r, m, x, a, p, g, u, v, l]),
    Ne(() => {
      const T = m.current.fields
      return () => {
        a && T.delete(a)
      }
    }, [m, a]))
}
const Uj = h.createContext({
  controlId: void 0,
  setControlId: Jt,
  labelId: void 0,
  setLabelId: Jt,
  messageIds: [],
  setMessageIds: Jt,
  getDescriptionProps: (e) => e,
})
function gs() {
  return h.useContext(Uj)
}
function Qh(e = {}) {
  const { id: r, implicit: l = !1, controlRef: a } = e,
    { controlId: u, setControlId: f } = gs(),
    d = co(r)
  return (
    Ne(() => {
      if (!((!l && !r) || f === Jt)) {
        if (l) {
          const m = a?.current
          Ot(m) && m.closest('label') != null ? f(r ?? null) : f(u ?? d)
        } else r && f(r)
        return () => {
          r && f(void 0)
        }
      }
    }, [r, a, u, f, l, d]),
    u ?? d
  )
}
function Lg(e) {
  if (e == null) return ''
  if (typeof e == 'string') return e
  try {
    return JSON.stringify(e)
  } catch {
    return String(e)
  }
}
function UR(e) {
  return e != null && e.length > 0 && typeof e[0] == 'object' && e[0] != null && 'items' in e[0]
}
function Mn(e, r) {
  if (r && e != null) return r(e) ?? ''
  if (e && typeof e == 'object') {
    if ('label' in e && e.label != null) return String(e.label)
    if ('value' in e) return String(e.value)
  }
  return Lg(e)
}
function oo(e, r) {
  return r && e != null
    ? (r(e) ?? '')
    : e && typeof e == 'object' && 'value' in e && 'label' in e
      ? Lg(e.value)
      : Lg(e)
}
function Vj(e, r, l) {
  if (l && e != null) return l(e)
  if (e && typeof e == 'object' && 'label' in e && e.label != null) return e.label
  if (r && !Array.isArray(r)) return r[e] ?? Mn(e, l)
  if (Array.isArray(r)) {
    const a = UR(r) ? r.flatMap((u) => u.items) : r
    if (e == null) {
      const u = a.find((f) => f.value == null)
      return u && u.label != null ? u.label : Mn(e, l)
    }
    if (typeof e != 'object') {
      const u = a.find((f) => f && f.value === e)
      return u && u.label != null ? u.label : Mn(e, l)
    }
    if ('value' in e) {
      const u = a.find((f) => f && f.value === e.value)
      if (u && u.label != null) return u.label
    }
  }
  return Mn(e, l)
}
function Lj(e, r) {
  return !Array.isArray(e) || e.length === 0 ? '' : e.map((l) => Mn(l, r)).join(', ')
}
function Hj(e, r) {
  return (l, a) => {
    if (l == null) return !1
    const u = Mn(l, r)
    return e.contains(u, a)
  }
}
function Bj(e, r, l) {
  return (a, u) => {
    if (a == null) return !1
    if (!u) return !0
    const f = Mn(a, r),
      d = l != null ? Mn(l, r) : ''
    return d && e.contains(d, u) && d.length === u.length ? !0 : e.contains(f, u)
  }
}
const Xx = new Map()
function VR(e) {
  return Array.isArray(e) ? e.map((r) => VR(r)).join(',') : e == null ? '' : String(e)
}
function Fj(e = {}) {
  const r = { usage: 'search', sensitivity: 'base', ignorePunctuation: !0, ...e },
    l = `${VR(e.locale)}|${JSON.stringify(r)}`,
    a = Xx.get(l)
  if (a) return a
  const u = new Intl.Collator(e.locale, r),
    f = {
      contains(d, m, p) {
        if (!m) return !0
        const g = Mn(d, p)
        for (let v = 0; v <= g.length - m.length; v += 1)
          if (u.compare(g.slice(v, v + m.length), m) === 0) return !0
        return !1
      },
      startsWith(d, m, p) {
        if (!m) return !0
        const g = Mn(d, p)
        return u.compare(g.slice(0, m.length), m) === 0
      },
      endsWith(d, m, p) {
        if (!m) return !0
        const g = Mn(d, p),
          v = m.length
        return g.length >= v && u.compare(g.slice(g.length - v), m) === 0
      },
    }
  return (Xx.set(l, f), f)
}
const Pj = Fj
function Ru(e, r) {
  const l = h.useRef(e),
    a = Te(r)
  ;(Ne(() => {
    l.current !== e && a(l.current)
  }, [e, a]),
    Ne(() => {
      l.current = e
    }, [e]))
}
const LR = Symbol('none'),
  wi = { value: LR, index: -1 }
function qj(e) {
  const {
      id: r,
      onOpenChangeComplete: l,
      defaultSelectedValue: a = null,
      selectedValue: u,
      onSelectedValueChange: f,
      defaultInputValue: d,
      inputValue: m,
      selectionMode: p = 'none',
      onItemHighlighted: g,
      name: v,
      disabled: y = !1,
      readOnly: x = !1,
      required: T = !1,
      inputRef: w,
      grid: S = !1,
      items: N,
      filteredItems: A,
      filter: R,
      openOnInputClick: I = !0,
      autoHighlight: j = !1,
      keepHighlight: M = !1,
      highlightItemOnHover: V = !0,
      itemToStringLabel: k,
      itemToStringValue: _,
      isItemEqualToValue: ee = kR,
      virtualized: ie = !1,
      inline: Q = !1,
      fillInputOnItemPress: le = !0,
      modal: q = !1,
      limit: Y = -1,
      autoComplete: F = 'list',
      locale: z,
      submitOnItemClick: L = !1,
    } = e,
    { clearErrors: D } = Kh(),
    {
      setDirty: $,
      validityData: oe,
      shouldValidateOnChange: O,
      setFilled: P,
      name: H,
      disabled: X,
      validation: te,
    } = ol(),
    re = Qh({ id: r }),
    W = Pj({ locale: z }),
    [de, ve] = h.useState(!1),
    [ue, K] = h.useState(null),
    xe = h.useRef([]),
    Ee = h.useRef([]),
    Fe = h.useRef(null),
    Re = h.useRef(null),
    be = h.useRef(null),
    Se = h.useRef(!0),
    Le = h.useRef(!1),
    Oe = h.useRef(null),
    _e = h.useRef(null),
    pe = h.useRef(null),
    je = h.useRef(wi),
    Ce = h.useRef(null),
    Me = h.useRef([]),
    we = h.useRef([]),
    Xe = X || y,
    We = H ?? v,
    Be = p === 'multiple',
    dt = p === 'single',
    Rt = m !== void 0 || d !== void 0,
    Dt = N !== void 0,
    jt = A !== void 0
  let rt
  j === 'always' ? (rt = 'always') : (rt = j ? 'input-change' : !1)
  const [ye, Qe] = Gl({
      controlled: u,
      default: Be ? (a ?? ro) : a,
      name: 'Combobox',
      state: 'selectedValue',
    }),
    it = h.useMemo(
      () => (R === null ? () => !0 : R !== void 0 ? R : dt && !de ? Bj(W, k, ye) : Hj(W, k)),
      [R, dt, ye, de, W, k]
    ),
    wt = Yn(() => (Rt ? (d ?? '') : dt ? Mn(ye, k) : '')).current,
    [ct, Yt] = Gl({ controlled: m, default: wt, name: 'Combobox', state: 'inputValue' }),
    [Ze, tn] = Gl({ controlled: e.open, default: e.defaultOpen, name: 'Combobox', state: 'open' }),
    xt = UR(N),
    ft = ue ?? (ct === '' ? '' : String(ct).trim()),
    Nn = dt ? Mn(ye, k) : '',
    Kn = dt && !de && ft !== '' && Nn !== '' && Nn.length === ft.length && W.contains(Nn, ft),
    fr = Kn ? '' : ft,
    st = Dt && jt && Kn,
    Et = h.useMemo(() => (N ? (xt ? N.flatMap((ze) => ze.items) : N) : ro), [N, xt]),
    Xt = h.useMemo(() => {
      if (A && !st) return A
      if (!N) return ro
      if (xt) {
        const Pe = N,
          ot = []
        let Ft = 0
        for (const $t of Pe) {
          if (Y > -1 && Ft >= Y) break
          const mn = fr === '' ? $t.items : $t.items.filter((ko) => it(ko, fr, k))
          if (mn.length === 0) continue
          const Do = Y > -1 ? Y - Ft : 1 / 0,
            jo = mn.slice(0, Do)
          if (jo.length > 0) {
            const ko = { ...$t, items: jo }
            ;(ot.push(ko), (Ft += jo.length))
          }
        }
        return ot
      }
      if (fr === '') return Y > -1 ? Et.slice(0, Y) : Et
      const ze = []
      for (const Pe of Et) {
        if (Y > -1 && ze.length >= Y) break
        it(Pe, fr, k) && ze.push(Pe)
      }
      return ze
    }, [A, st, N, xt, fr, Y, it, k, Et]),
    Bt = h.useMemo(() => (xt ? Xt.flatMap((Pe) => Pe.items) : Xt), [Xt, xt]),
    qe = Yn(
      () =>
        new ki({
          id: re,
          selectedValue: ye,
          open: Ze,
          filter: it,
          query: ft,
          items: N,
          selectionMode: p,
          listRef: xe,
          labelsRef: Ee,
          popupRef: Fe,
          emptyRef: be,
          inputRef: Re,
          keyboardActiveRef: Se,
          chipsContainerRef: Oe,
          clearRef: _e,
          valuesRef: Me,
          allValuesRef: we,
          selectionEventRef: pe,
          name: We,
          disabled: Xe,
          readOnly: x,
          required: T,
          grid: S,
          isGrouped: xt,
          virtualized: ie,
          openOnInputClick: I,
          itemToStringLabel: k,
          isItemEqualToValue: ee,
          modal: q,
          autoHighlight: rt,
          submitOnItemClick: L,
          hasInputValue: Rt,
          mounted: !1,
          forceMounted: !1,
          transitionStatus: 'idle',
          inline: Q,
          activeIndex: null,
          selectedIndex: null,
          popupProps: {},
          inputProps: {},
          triggerProps: {},
          positionerElement: null,
          listElement: null,
          triggerElement: null,
          inputElement: null,
          popupSide: null,
          openMethod: null,
          inputInsidePopup: !0,
          onOpenChangeComplete: l || Jt,
          setOpen: Jt,
          setInputValue: Jt,
          setSelectedValue: Jt,
          setIndices: Jt,
          onItemHighlighted: Jt,
          handleSelection: Jt,
          getItemProps: () => en,
          forceMount: Jt,
          requestSubmit: Jt,
        })
    ).current,
    Pn = p === 'none' ? ct : ye,
    li = h.useMemo(
      () => (p === 'none' ? Pn : Array.isArray(ye) ? ye.map((ze) => oo(ze, _)) : oo(ye, _)),
      [Pn, _, p, ye]
    ),
    dr = Te(g),
    Oo = Te(l),
    Ao = he(qe, Ie.activeIndex),
    oa = he(qe, Ie.selectedIndex),
    mr = he(qe, Ie.positionerElement),
    cn = he(qe, Ie.listElement),
    fn = he(qe, Ie.triggerElement),
    mo = he(qe, Ie.inputElement),
    pr = he(qe, Ie.inline),
    No = he(qe, Ie.inputInsidePopup),
    Fd = an(fn),
    { mounted: hs, setMounted: ii, transitionStatus: ai } = sl(Ze),
    { openMethod: zo, triggerProps: po, reset: si } = Id(Ze)
  Xh({
    id: re,
    name: We,
    commit: te.commit,
    value: Pn,
    controlRef: No ? Fd : Re,
    getValue: () => li,
  })
  const Xr = Te(() => {
      N ? (Ee.current = Bt.map((ze) => Mn(ze, k))) : qe.set('forceMounted', !0)
    }),
    dn = h.useRef(ye)
  Ne(() => {
    ye !== dn.current && Xr()
  }, [Xr, ye])
  const Xn = Te((ze) => {
      qe.update(ze)
      const Pe = ze.type || 'none'
      if (ze.activeIndex !== void 0)
        if (ze.activeIndex === null)
          je.current !== wi && ((je.current = wi), dr(void 0, pu(Pe, void 0, { index: -1 })))
        else {
          const ot = Me.current[ze.activeIndex]
          ;((je.current = { value: ot, index: ze.activeIndex }),
            dr(ot, pu(Pe, void 0, { index: ze.activeIndex })))
        }
    }),
    Qn = Te((ze, Pe) => {
      if (((Le.current = Pe.reason === Vl), e.onInputValueChange?.(ze, Pe), !Pe.isCanceled)) {
        if (Pe.reason === Ni) {
          const ot = ze.trim() !== ''
          ;(ot && ve(!0),
            (Ce.current = { hasQuery: ot }),
            ot && rt && qe.state.activeIndex == null && qe.set('activeIndex', 0))
        }
        Yt(ze)
      }
    }),
    gr = Te((ze, Pe) => {
      Ze !== ze &&
        (Pe.reason === 'escape-key' &&
          Dt &&
          Bt.length === 0 &&
          !qe.state.emptyRef.current &&
          Pe.allowPropagation(),
        e.onOpenChange?.(ze, Pe),
        !Pe.isCanceled &&
          (!ze &&
            de &&
            (dt
              ? (K(ft), ft === '' && ve(!1))
              : Be && (pr || No ? Xn({ activeIndex: null }) : K(ft), Qn('', De(Vl, Pe.event)))),
          tn(ze)))
    }),
    Qr = Te((ze, Pe) => {
      if ((f?.(ze, Pe), Pe.isCanceled)) return
      ;(Qe(ze),
        ((p === 'none' && Fe.current && le) || (dt && !qe.state.inputInsidePopup)) &&
          Qn(Mn(ze, k), De(Pe.reason, Pe.event)),
        dt && ze != null && Pe.reason !== Ni && de && K(ft))
    }),
    Pd = Te((ze, Pe) => {
      let ot = Pe
      if (ot === void 0) {
        if (Ao === null) return
        ot = Me.current[Ao]
      }
      const Ft = On(ze),
        $t = pe.current ?? ze
      pe.current = null
      const mn = De(ql, $t),
        Do = Ft?.closest('a')?.getAttribute('href')
      if (Do) {
        Do.startsWith('#') && gr(!1, mn)
        return
      }
      if (Be) {
        const jo = Array.isArray(ye) ? ye : [],
          Zr = Ii(jo, ot, qe.state.isItemEqualToValue)
            ? _R(jo, ot, qe.state.isItemEqualToValue)
            : [...jo, ot]
        if ((Qr(Zr, mn), !(Re.current ? Re.current.value.trim() !== '' : !1))) return
        qe.state.inputInsidePopup ? Qn('', De(Vl, mn.event)) : gr(!1, mn)
      } else (Qr(ot, mn), gr(!1, mn))
    }),
    la = Te(() => {
      if (!qe.state.submitOnItemClick) return
      const ze = qe.state.inputElement?.form
      ze && typeof ze.requestSubmit == 'function' && ze.requestSubmit()
    }),
    ia = Te(() => {
      if (
        (ii(!1),
        Oo?.(!1),
        ve(!1),
        si(),
        K(null),
        Xn(p === 'none' ? { activeIndex: null, selectedIndex: null } : { activeIndex: null }),
        Be && Re.current && Re.current.value !== '' && !Le.current && Qn('', De(Vl)),
        dt)
      )
        if (qe.state.inputInsidePopup) Re.current && Re.current.value !== '' && Qn('', De(Vl))
        else {
          const ze = Mn(ye, k)
          Re.current && Re.current.value !== ze && Qn(ze, De(ze === '' ? Vl : ir))
        }
    }),
    qd = h.useMemo(() => (pr && mr ? { current: mr.closest('[role="dialog"]') } : Fe), [pr, mr])
  ;(Ir({
    enabled: !e.actionsRef,
    open: Ze,
    ref: qd,
    onComplete() {
      Ze || ia()
    },
  }),
    h.useImperativeHandle(e.actionsRef, () => ({ unmount: ia }), [ia]),
    Ne(
      function () {
        if (Ze || p === 'none') return
        const Pe = N ? Et : we.current
        if (Be) {
          const ot = Array.isArray(ye) ? ye : [],
            Ft = ot[ot.length - 1],
            $t = es(Pe, Ft, ee)
          Xn({ selectedIndex: $t === -1 ? null : $t })
        } else {
          const ot = es(Pe, ye, ee)
          Xn({ selectedIndex: ot === -1 ? null : ot })
        }
      },
      [Ze, ye, N, p, Et, Be, ee, Xn]
    ),
    Ne(() => {
      N && ((Me.current = Bt), (xe.current.length = Bt.length))
    }, [N, Bt]),
    Ne(() => {
      const ze = Ce.current
      if (
        (ze &&
          (ze.hasQuery
            ? rt && qe.set('activeIndex', 0)
            : rt === 'always' && qe.set('activeIndex', 0),
          (Ce.current = null)),
        !Ze && !pr)
      )
        return
      const ot = Dt || jt ? Bt : Me.current,
        Ft = qe.state.activeIndex
      if (Ft == null) {
        if (rt === 'always' && ot.length > 0) {
          qe.set('activeIndex', 0)
          return
        }
        je.current !== wi &&
          ((je.current = wi), qe.state.onItemHighlighted(void 0, pu(ir, void 0, { index: -1 })))
        return
      }
      if (Ft >= ot.length) {
        ;(je.current !== wi &&
          ((je.current = wi), qe.state.onItemHighlighted(void 0, pu(ir, void 0, { index: -1 }))),
          qe.set('activeIndex', null))
        return
      }
      const $t = ot[Ft],
        mn = je.current.value,
        Do = mn !== LR && qe.state.isItemEqualToValue($t, mn)
      ;(je.current.index !== Ft || !Do) &&
        ((je.current = { value: $t, index: Ft }),
        qe.state.onItemHighlighted($t, pu(ir, void 0, { index: Ft })))
    }, [Ao, rt, jt, Dt, Bt, pr, Ze, qe]),
    Ne(() => {
      if (!N || p === 'none') return
      const ze = Et
      if (Be) {
        const Ft = Array.isArray(ye) ? ye : ro,
          $t = Ft.filter((mn) => Ii(ze, mn, qe.state.isItemEqualToValue))
        $t.length !== Ft.length && Qe($t)
        return
      }
      if (ye == null ? !0 : Ii(ze, ye, qe.state.isItemEqualToValue)) return
      let ot = null
      if (
        (a != null && Ii(ze, a, qe.state.isItemEqualToValue) && (ot = a),
        Qe(ot),
        !qe.state.inputInsidePopup)
      ) {
        const Ft = Mn(ot, k)
        Re.current && Re.current.value !== Ft && Qn(Ft, De(ir))
      }
    }, [N, Et, Be, p, ye, a, Qe, k, qe, Qn]),
    Ne(() => {
      if (p === 'none') {
        P(String(ct) !== '')
        return
      }
      P(Be ? Array.isArray(ye) && ye.length > 0 : ye != null)
    }, [P, p, ct, ye, Be]),
    h.useEffect(() => {
      Dt && rt && Bt.length === 0 && Xn({ activeIndex: null })
    }, [Dt, rt, Bt.length, Xn]),
    Ru(ft, () => {
      !Ze || ft === '' || ft === String(wt) || ve(!0)
    }),
    Ru(ye, () => {
      if (
        p !== 'none' &&
        (D(We),
        $(ye !== oe.initialValue),
        O() ? te.commit(ye) : te.commit(ye, !0),
        Be &&
          qe.state.selectedIndex !== null &&
          (!Array.isArray(ye) || ye.length === 0) &&
          Xn({ activeIndex: null, selectedIndex: null }),
        dt && !Rt && !No)
      ) {
        const ze = Mn(ye, k)
        ct !== ze && Qn(ze, De(ir))
      }
    }),
    Ru(ct, () => {
      p === 'none' && (D(We), $(ct !== oe.initialValue), O() ? te.commit(ct) : te.commit(ct, !0))
    }),
    Ru(N, () => {
      if (!dt || Rt || No || de) return
      const ze = Mn(ye, k)
      ct !== ze && Qn(ze, De(ir))
    }))
  const Io = Lh({
    open: pr ? !0 : Ze,
    onOpenChange: gr,
    elements: { reference: No ? fn : mo, floating: mr },
  })
  let fl, hr
  pr || ((fl = S ? 'grid' : 'listbox'), (hr = Ze ? 'true' : 'false'))
  const Jn = h.useMemo(() => {
      const ze = mo?.tagName === 'INPUT',
        Pe = ze || Ze,
        ot = ze
          ? { autoComplete: 'off', spellCheck: 'false', autoCorrect: 'off', autoCapitalize: 'none' }
          : {}
      return (
        Pe &&
          ((ot.role = 'combobox'),
          (ot['aria-expanded'] = hr),
          (ot['aria-haspopup'] = fl),
          (ot['aria-controls'] = Ze ? cn?.id : void 0),
          (ot['aria-autocomplete'] = F)),
        { reference: ot, floating: { role: 'presentation' } }
      )
    }, [mo, Ze, hr, fl, cn?.id, F]),
    tc = ps(Io, {
      enabled: !x && !Xe && I,
      event: 'mousedown-only',
      toggle: !1,
      touchOpenDelay: No ? 0 : 50,
    }),
    Gd = Ad(Io, {
      enabled: !x && !Xe && !pr,
      outsidePressEvent: { mouse: 'sloppy', touch: 'intentional' },
      bubbles: pr ? !0 : void 0,
      outsidePress(ze) {
        const Pe = On(ze)
        return !tt(fn, Pe) && !tt(_e.current, Pe) && !tt(Oe.current, Pe)
      },
    }),
    bs = Hh(Io, {
      enabled: !x && !Xe,
      id: re,
      listRef: xe,
      activeIndex: Ao,
      selectedIndex: oa,
      virtual: !0,
      loopFocus: !0,
      allowEscape: !rt,
      focusItemOnOpen: de || (p === 'none' && !rt) ? !1 : 'auto',
      focusItemOnHover: V,
      resetOnPointerLeave: !M,
      cols: S ? 2 : 1,
      orientation: S ? 'horizontal' : void 0,
      disabledIndices: ro,
      onNavigate(ze, Pe) {
        ;(!Pe && !Ze) ||
          ai === 'ending' ||
          Xn(
            Pe
              ? { activeIndex: ze, type: Se.current ? 'keyboard' : 'pointer' }
              : { activeIndex: ze }
          )
      },
    }),
    { getReferenceProps: aa, getFloatingProps: dl, getItemProps: ys } = ta([Jn, tc, Gd, bs])
  ;(NR(() => {
    qe.update({
      inline: Q,
      popupProps: dl(),
      inputProps: aa(),
      triggerProps: po,
      getItemProps: ys,
      setOpen: gr,
      setInputValue: Qn,
      setSelectedValue: Qr,
      setIndices: Xn,
      onItemHighlighted: dr,
      handleSelection: Pd,
      forceMount: Xr,
      requestSubmit: la,
    })
  }),
    Ne(() => {
      qe.update({
        id: re,
        selectedValue: ye,
        open: Ze,
        mounted: hs,
        transitionStatus: ai,
        items: N,
        inline: Q,
        popupProps: dl(),
        inputProps: aa(),
        triggerProps: po,
        openMethod: zo,
        getItemProps: ys,
        selectionMode: p,
        name: We,
        disabled: Xe,
        readOnly: x,
        required: T,
        grid: S,
        isGrouped: xt,
        virtualized: ie,
        onOpenChangeComplete: Oo,
        openOnInputClick: I,
        itemToStringLabel: k,
        modal: q,
        autoHighlight: rt,
        isItemEqualToValue: ee,
        submitOnItemClick: L,
        hasInputValue: Rt,
        requestSubmit: la,
      })
    }, [
      qe,
      re,
      ye,
      Ze,
      hs,
      ai,
      N,
      dl,
      aa,
      ys,
      zo,
      po,
      p,
      We,
      Xe,
      x,
      T,
      te,
      S,
      xt,
      ie,
      Oo,
      I,
      k,
      q,
      ee,
      L,
      Rt,
      Q,
      la,
      rt,
    ]))
  const Wn = nl(w, te.inputRef),
    vs = h.useMemo(() => ({ query: ft, filteredItems: Xt, flatFilteredItems: Bt }), [ft, Xt, Bt]),
    nc = h.useMemo(() => (Array.isArray(Pn) ? '' : oo(Pn, _)), [Pn, _]),
    xs = Be && Array.isArray(ye) && ye.length > 0,
    ml = h.useMemo(
      () =>
        !Be || !Array.isArray(ye) || !We
          ? null
          : ye.map((ze) => {
              const Pe = oo(ze, _)
              return E.jsx('input', { type: 'hidden', name: We, value: Pe }, Pe)
            }),
      [Be, ye, We, _]
    ),
    rc = E.jsxs(h.Fragment, {
      children: [
        e.children,
        E.jsx('input', {
          ...te.getInputValidationProps({
            onFocus() {
              if (No) {
                fn?.focus()
                return
              }
              ;(Re.current || fn)?.focus()
            },
            onChange(ze) {
              if (ze.nativeEvent.defaultPrevented) return
              const Pe = ze.target.value,
                ot = De(Ni, ze.nativeEvent)
              function Ft() {
                if (Be) return
                if (p === 'none') {
                  ;($(Pe !== oe.initialValue), Qn(Pe, ot), O() && te.commit(Pe))
                  return
                }
                const $t = Me.current.find((mn) => oo(mn, _).toLowerCase() === Pe.toLowerCase())
                $t != null && ($($t !== oe.initialValue), Qr?.($t, ot), O() && te.commit($t))
              }
              N ? Ft() : (Xr(), queueMicrotask(Ft))
            },
          }),
          id: re,
          name: Be || p === 'none' ? void 0 : We,
          disabled: Xe,
          required: T && !xs,
          readOnly: x,
          value: nc,
          ref: Wn,
          style: Cd,
          tabIndex: -1,
          'aria-hidden': !0,
        }),
        ml,
      ],
    })
  return E.jsx(zR.Provider, {
    value: qe,
    children: E.jsx(IR.Provider, {
      value: Io,
      children: E.jsx(DR.Provider, {
        value: vs,
        children: E.jsx(jR.Provider, { value: ct, children: rc }),
      }),
    }),
  })
}
function Zh(e) {
  const r = e.getBoundingClientRect(),
    l = window.getComputedStyle(e, '::before'),
    a = window.getComputedStyle(e, '::after')
  if (!(l.content !== 'none' || a.content !== 'none')) return r
  const f = parseFloat(l.width) || 0,
    d = parseFloat(l.height) || 0,
    m = parseFloat(a.width) || 0,
    p = parseFloat(a.height) || 0,
    g = Math.max(r.width, f, m),
    v = Math.max(r.height, d, p),
    y = g - r.width,
    x = v - r.height
  return {
    left: r.left - y / 2,
    right: r.right + y / 2,
    top: r.top - x / 2,
    bottom: r.bottom + x / 2,
  }
}
const Cf = 2,
  Gj = { ..._u, ...Ud },
  Yj = h.forwardRef(function (r, l) {
    const { render: a, className: u, nativeButton: f = !0, disabled: d = !1, ...m } = r,
      {
        state: p,
        disabled: g,
        setTouched: v,
        setFocused: y,
        validationMode: x,
        validation: T,
      } = ol(),
      { labelId: w } = gs(),
      S = cl(),
      N = he(S, Ie.selectionMode),
      A = he(S, Ie.disabled),
      R = he(S, Ie.readOnly),
      I = he(S, Ie.listElement),
      j = he(S, Ie.triggerProps),
      M = he(S, Ie.triggerElement),
      V = he(S, Ie.inputInsidePopup),
      k = he(S, Ie.open),
      _ = he(S, Ie.selectedValue),
      ee = he(S, Ie.activeIndex),
      ie = he(S, Ie.selectedIndex),
      Q = _d(),
      le = $h(),
      q = sn(),
      Y = g || A || d,
      F = h.useRef('')
    function z(te) {
      F.current = te.pointerType
    }
    const L = Q.select('domReferenceElement')
    h.useEffect(() => {
      V && M && M !== L && Q.set('domReferenceElement', M)
    }, [M, L, Q, V])
    const { reference: D } = Bh(Q, {
        enabled: !k && !R && !A && N === 'single',
        listRef: S.state.labelsRef,
        activeIndex: ee,
        selectedIndex: ie,
        onMatch(te) {
          const re = S.state.valuesRef.current[te]
          re !== void 0 && S.state.setSelectedValue(re, De('none'))
        },
      }),
      { reference: $ } = ps(Q, { enabled: !R && !A, event: 'mousedown' }),
      { buttonRef: oe, getButtonProps: O } = wo({ native: f, disabled: Y }),
      P = h.useMemo(() => ({ ...p, open: k, disabled: Y }), [p, k, Y]),
      H = Te((te) => {
        S.set('triggerElement', te)
      })
    return nt('button', r, {
      ref: [l, oe, H],
      state: P,
      props: [
        j,
        $,
        D,
        {
          tabIndex: V ? 0 : -1,
          disabled: Y,
          role: V ? 'combobox' : void 0,
          'aria-expanded': k ? 'true' : 'false',
          'aria-haspopup': V ? 'dialog' : 'listbox',
          'aria-controls': k ? I?.id : void 0,
          'aria-readonly': R || void 0,
          'aria-labelledby': w,
          onPointerDown: z,
          onPointerEnter: z,
          onFocus() {
            ;(y(!0), !(Y || R) && q.start(0, S.state.forceMount))
          },
          onBlur() {
            if ((v(!0), y(!1), x === 'onBlur')) {
              const te = N === 'none' ? le : _
              T.commit(te)
            }
          },
          onMouseDown(te) {
            if (
              Y ||
              R ||
              (V || Q.set('domReferenceElement', te.currentTarget),
              S.state.forceMount(),
              F.current !== 'touch' &&
                (S.state.inputRef.current?.focus(), V || te.preventDefault()),
              k)
            )
              return
            const re = Gr(te.currentTarget)
            function W(de) {
              if (!M) return
              const ve = On(de),
                ue = S.state.positionerElement,
                K = S.state.listElement
              if (tt(M, ve) || tt(ue, ve) || tt(K, ve) || ve === M) return
              const xe = Zh(M),
                Ee = de.clientX >= xe.left - Cf && de.clientX <= xe.right + Cf,
                Fe = de.clientY >= xe.top - Cf && de.clientY <= xe.bottom + Cf
              ;(Ee && Fe) || S.state.setOpen(!1, De('cancel-open', de))
            }
            V && re.addEventListener('mouseup', W, { once: !0 })
          },
          onKeyDown(te) {
            Y ||
              R ||
              ((te.key === 'ArrowDown' || te.key === 'ArrowUp') &&
                (ln(te),
                S.state.setOpen(!0, De(Cu, te.nativeEvent)),
                S.state.inputRef.current?.focus()))
          },
        },
        T ? T.getValidationProps(m) : m,
        O,
      ],
      stateAttributesMapping: Gj,
    })
  }),
  $j = h.createContext(void 0)
function Kj() {
  return h.useContext($j)
}
const HR = h.createContext(void 0)
function Jh(e) {
  const r = h.useContext(HR)
  if (r === void 0 && !e) throw new Error(Ht(21))
  return r
}
const Xj = {
    ..._u,
    ...Ud,
    popupSide: (e) => (e ? { 'data-popup-side': e } : null),
    listEmpty: (e) => (e ? { 'data-list-empty': '' } : null),
  },
  Qj = h.forwardRef(function (r, l) {
    const { render: a, className: u, disabled: f = !1, id: d, ...m } = r,
      {
        state: p,
        disabled: g,
        setTouched: v,
        setFocused: y,
        validationMode: x,
        validation: T,
      } = ol(),
      { labelId: w } = gs(),
      S = Kj(),
      A = !!Jh(!0),
      R = cl(),
      { filteredItems: I } = ra(),
      j = $h(),
      M = co(d),
      V = Gh(),
      k = he(R, Ie.disabled),
      _ = he(R, Ie.readOnly),
      ee = he(R, Ie.name),
      ie = he(R, Ie.selectionMode),
      Q = he(R, Ie.autoHighlight),
      le = he(R, Ie.inputProps),
      q = he(R, Ie.triggerProps),
      Y = he(R, Ie.open),
      F = he(R, Ie.mounted),
      z = he(R, Ie.selectedValue),
      L = he(R, Ie.popupSide),
      D = he(R, Ie.positionerElement),
      $ = !!Q,
      oe = F && D ? L : null,
      O = g || k || f,
      P = I.length === 0,
      [H, X] = h.useState(null),
      te = h.useRef(!1),
      re = Te((ue) => {
        const K = A || R.state.inline
        ;(K && !R.state.hasInputValue && R.state.setInputValue('', De(ir)),
          R.update({ inputElement: ue, inputInsidePopup: K }))
      }),
      W = h.useMemo(
        () => ({ ...p, open: Y, disabled: O, readOnly: _, popupSide: oe, listEmpty: P }),
        [p, Y, O, _, oe, P]
      )
    function de(ue) {
      if (!S) return
      let K
      const { highlightedChipIndex: xe } = S
      if (xe !== void 0) {
        if (ue.key === 'ArrowLeft') (ue.preventDefault(), xe > 0 ? (K = xe - 1) : (K = void 0))
        else if (ue.key === 'ArrowRight')
          (ue.preventDefault(), xe < z.length - 1 ? (K = xe + 1) : (K = void 0))
        else if (ue.key === 'Backspace' || ue.key === 'Delete') {
          ue.preventDefault()
          const Ee = xe >= z.length - 1 ? z.length - 2 : xe
          ;((K = Ee >= 0 ? Ee : void 0),
            R.state.setIndices({ activeIndex: null, selectedIndex: null, type: 'keyboard' }))
        }
        return K
      }
      return (
        ue.key === 'ArrowLeft' && (ue.currentTarget.selectionStart ?? 0) === 0 && z.length > 0
          ? (ue.preventDefault(), (K = Math.max(z.length - 1, 0)))
          : ue.key === 'Backspace' &&
            ue.currentTarget.value === '' &&
            z.length > 0 &&
            (R.state.setIndices({ activeIndex: null, selectedIndex: null, type: 'keyboard' }),
            ue.preventDefault()),
        K
      )
    }
    return nt('input', r, {
      state: W,
      ref: [l, R.state.inputRef, re],
      props: [
        le,
        q,
        {
          type: 'text',
          value: r.value ?? H ?? j,
          'aria-readonly': _ || void 0,
          'aria-labelledby': w,
          disabled: O,
          readOnly: _,
          ...(ie === 'none' && ee && { name: ee }),
          id: M,
          onFocus() {
            y(!0)
          },
          onBlur() {
            if ((v(!0), y(!1), x === 'onBlur')) {
              const ue = ie === 'none' ? j : z
              T.commit(ue)
            }
          },
          onCompositionStart(ue) {
            Hf || ((te.current = !0), X(ue.currentTarget.value))
          },
          onCompositionEnd(ue) {
            te.current = !1
            const K = ue.currentTarget.value
            ;(X(null), R.state.setInputValue(K, De(Ni, ue.nativeEvent)))
          },
          onChange(ue) {
            if (te.current) {
              const Fe = ue.currentTarget.value
              ;(X(Fe),
                Fe === '' &&
                  !R.state.openOnInputClick &&
                  !R.state.inputInsidePopup &&
                  R.state.setOpen(!1, De(Vl, ue.nativeEvent)))
              const Re = Fe.trim(),
                be = $ && Re !== ''
              ;(!_ &&
                !O &&
                Re !== '' &&
                (R.state.setOpen(!0, De(Ni, ue.nativeEvent)),
                $ ||
                  R.state.setIndices({
                    activeIndex: null,
                    selectedIndex: null,
                    type: R.state.keyboardActiveRef.current ? 'keyboard' : 'pointer',
                  })),
                Y &&
                  R.state.activeIndex !== null &&
                  !be &&
                  R.state.setIndices({
                    activeIndex: null,
                    selectedIndex: null,
                    type: R.state.keyboardActiveRef.current ? 'keyboard' : 'pointer',
                  }))
              return
            }
            R.state.setInputValue(ue.currentTarget.value, De(Ni, ue.nativeEvent))
            const K = ue.currentTarget.value === '',
              xe = De(Vl, ue.nativeEvent)
            K &&
              !R.state.inputInsidePopup &&
              (ie === 'single' && R.state.setSelectedValue(null, xe),
              R.state.openOnInputClick || R.state.setOpen(!1, xe))
            const Ee = ue.currentTarget.value.trim()
            ;(!_ &&
              !O &&
              Ee !== '' &&
              (R.state.setOpen(!0, De(Ni, ue.nativeEvent)),
              $ ||
                R.state.setIndices({
                  activeIndex: null,
                  selectedIndex: null,
                  type: R.state.keyboardActiveRef.current ? 'keyboard' : 'pointer',
                })),
              Y &&
                R.state.activeIndex !== null &&
                !$ &&
                R.state.setIndices({
                  activeIndex: null,
                  selectedIndex: null,
                  type: R.state.keyboardActiveRef.current ? 'keyboard' : 'pointer',
                }))
          },
          onKeyDown(ue) {
            if (O || _ || ue.ctrlKey || ue.shiftKey || ue.altKey || ue.metaKey) return
            R.state.keyboardActiveRef.current = !0
            const K = ue.currentTarget,
              xe = K.scrollWidth - K.clientWidth,
              Ee = V === 'rtl'
            if (ue.key === 'Home') {
              ln(ue)
              const Re = dx && Ee ? K.value.length : 0
              ;(K.setSelectionRange(Re, Re), (K.scrollLeft = 0))
              return
            }
            if (ue.key === 'End') {
              ln(ue)
              const Re = dx && Ee ? 0 : K.value.length
              ;(K.setSelectionRange(Re, Re), (K.scrollLeft = Ee ? -xe : xe))
              return
            }
            if (!F && ue.key === 'Escape') {
              const Re = ie === 'multiple' && Array.isArray(z) ? z.length === 0 : z === null,
                be = De(Td, ue.nativeEvent),
                Se = ie === 'multiple' ? [] : null
              ;(R.state.setInputValue('', be),
                R.state.setSelectedValue(Se, be),
                !Re && !R.state.inline && !be.isPropagationAllowed && ue.stopPropagation())
              return
            }
            if (
              S &&
              ue.key === 'Backspace' &&
              K.value === '' &&
              S.highlightedChipIndex === void 0 &&
              Array.isArray(z) &&
              z.length > 0
            ) {
              const Re = z.slice(0, -1)
              ;(R.state.setIndices({
                activeIndex: null,
                selectedIndex: null,
                type: R.state.keyboardActiveRef.current ? 'keyboard' : 'pointer',
              }),
                R.state.setSelectedValue(Re, De(ir, ue.nativeEvent)))
              return
            }
            const Fe = de(ue)
            if (
              (S?.setHighlightedChipIndex(Fe),
              Fe !== void 0 ? S?.chipsRef.current[Fe]?.focus() : R.state.inputRef.current?.focus(),
              ue.which !== 229 && ue.key === 'Enter' && Y)
            ) {
              const Re = R.state.activeIndex,
                be = ue.nativeEvent
              if (Re === null) {
                R.state.setOpen(!1, De(ir, be))
                return
              }
              ln(ue)
              const Se = R.state.listRef.current[Re]
              Se &&
                ((R.state.selectionEventRef.current = be),
                Se.click(),
                (R.state.selectionEventRef.current = null))
            }
          },
          onPointerMove() {
            R.state.keyboardActiveRef.current = !1
          },
          onPointerDown() {
            R.state.keyboardActiveRef.current = !1
          },
        },
        T ? T.getValidationProps(m) : m,
      ],
      stateAttributesMapping: Xj,
    })
  }),
  Zj = { ...ul, ...Dd },
  Jj = h.forwardRef(function (r, l) {
    const {
        render: a,
        className: u,
        disabled: f = !1,
        nativeButton: d = !0,
        keepMounted: m = !1,
        ...p
      } = r,
      { disabled: g } = ol(),
      v = cl(),
      y = he(v, Ie.selectionMode),
      x = he(v, Ie.disabled),
      T = he(v, Ie.readOnly),
      w = he(v, Ie.open),
      S = he(v, Ie.selectedValue),
      N = $h()
    let A = !1
    y === 'none'
      ? (A = N !== '')
      : y === 'single'
        ? (A = S != null)
        : (A = Array.isArray(S) && S.length > 0)
    const R = g || x || f,
      { buttonRef: I, getButtonProps: j } = wo({ native: d, disabled: R }),
      { mounted: M, transitionStatus: V, setMounted: k } = sl(A),
      _ = h.useMemo(() => ({ disabled: R, open: w, transitionStatus: V }), [R, w, V])
    Ir({
      open: A,
      ref: v.state.clearRef,
      onComplete() {
        A || k(!1)
      },
    })
    const ee = nt('button', r, {
      state: _,
      ref: [l, I, v.state.clearRef],
      props: [
        {
          tabIndex: -1,
          children: 'x',
          disabled: R,
          'aria-readonly': T || void 0,
          onMouseDown(Q) {
            Q.preventDefault()
          },
          onClick(Q) {
            if (R || T) return
            const le = v.state.keyboardActiveRef
            ;(v.state.setInputValue('', De(Tx, Q.nativeEvent)),
              y !== 'none'
                ? (v.state.setSelectedValue(Array.isArray(S) ? [] : null, De(Tx, Q.nativeEvent)),
                  v.state.setIndices({
                    activeIndex: null,
                    selectedIndex: null,
                    type: le.current ? 'keyboard' : 'pointer',
                  }))
                : v.state.setIndices({
                    activeIndex: null,
                    type: le.current ? 'keyboard' : 'pointer',
                  }),
              v.state.inputRef.current?.focus())
          },
        },
        p,
        j,
      ],
      stateAttributesMapping: Zj,
    })
    return m || M ? ee : null
  }),
  Wj = h.createContext(null)
function e4() {
  return h.useContext(Wj)
}
function t4(e) {
  const { children: r } = e,
    { filteredItems: l } = ra(),
    a = e4(),
    u = a ? a.items : l
  return u ? E.jsx(h.Fragment, { children: u.map(r) }) : null
}
const n4 = h.forwardRef(function (r, l) {
    var a
    const { render: u, className: f, children: d, ...m } = r,
      p = cl(),
      g = _d(),
      v = !!Jh(!0),
      { filteredItems: y } = ra(),
      x = he(p, Ie.items),
      T = he(p, Ie.labelsRef),
      w = he(p, Ie.listRef),
      S = he(p, Ie.selectionMode),
      N = he(p, Ie.grid),
      A = he(p, Ie.popupProps),
      R = he(p, Ie.disabled),
      I = he(p, Ie.readOnly),
      j = he(p, Ie.virtualized),
      M = S === 'multiple',
      V = y.length === 0,
      k = Te((q) => {
        p.set('positionerElement', q)
      }),
      _ = Te((q) => {
        p.set('listElement', q)
      }),
      ee = h.useMemo(
        () => (typeof d == 'function' ? a || (a = E.jsx(t4, { children: d })) : d),
        [d]
      ),
      ie = h.useMemo(() => ({ empty: V }), [V]),
      Q = g.useState('floatingId'),
      le = nt('div', r, {
        state: ie,
        ref: [l, _, v ? null : k],
        props: [
          A,
          {
            children: ee,
            tabIndex: -1,
            id: Q,
            role: N ? 'grid' : 'listbox',
            'aria-multiselectable': M ? 'true' : void 0,
            onKeyDown(q) {
              if (!(R || I) && q.key === 'Enter') {
                const Y = p.state.activeIndex
                if (Y == null) return
                ln(q)
                const F = q.nativeEvent,
                  z = p.state.listRef.current[Y]
                z &&
                  ((p.state.selectionEventRef.current = F),
                  z.click(),
                  (p.state.selectionEventRef.current = null))
              }
            },
            onKeyDownCapture() {
              p.state.keyboardActiveRef.current = !0
            },
            onPointerMoveCapture() {
              p.state.keyboardActiveRef.current = !1
            },
          },
          m,
        ],
      })
    return j ? le : E.jsx(qh, { elementsRef: w, labelsRef: x ? void 0 : T, children: le })
  }),
  BR = h.createContext(void 0)
function r4() {
  const e = h.useContext(BR)
  if (e === void 0) throw new Error(Ht(20))
  return e
}
const o4 = h.forwardRef(function (r, l) {
    const { keepMounted: a = !1, ...u } = r,
      f = cl(),
      d = he(f, Ie.mounted),
      m = he(f, Ie.forceMounted)
    return d || a || m
      ? E.jsx(BR.Provider, { value: a, children: E.jsx(wd, { ref: l, ...u }) })
      : null
  }),
  l4 = (e) => ({
    name: 'arrow',
    options: e,
    async fn(r) {
      const { x: l, y: a, placement: u, rects: f, platform: d, elements: m, middlewareData: p } = r,
        { element: g, padding: v = 0, offsetParent: y = 'real' } = tl(e, r) || {}
      if (g == null) return {}
      const x = TS(v),
        T = { x: l, y: a },
        w = Ah(u),
        S = Oh(w),
        N = await d.getDimensions(g),
        A = w === 'y',
        R = A ? 'top' : 'left',
        I = A ? 'bottom' : 'right',
        j = A ? 'clientHeight' : 'clientWidth',
        M = f.reference[S] + f.reference[w] - T[w] - f.floating[S],
        V = T[w] - f.reference[w],
        k = y === 'real' ? await d.getOffsetParent?.(g) : m.floating
      let _ = m.floating[j] || f.floating[S]
      ;(!_ || !(await d.isElement?.(k))) && (_ = m.floating[j] || f.floating[S])
      const ee = M / 2 - V / 2,
        ie = _ / 2 - N[S] / 2 - 1,
        Q = Math.min(x[R], ie),
        le = Math.min(x[I], ie),
        q = Q,
        Y = _ - N[S] - le,
        F = _ / 2 - N[S] / 2 + ee,
        z = Ng(q, F, Y),
        L =
          !p.arrow &&
          ti(u) != null &&
          F !== z &&
          f.reference[S] / 2 - (F < q ? Q : le) - N[S] / 2 < 0,
        D = L ? (F < q ? F - q : F - Y) : 0
      return {
        [w]: T[w] + D,
        data: { [w]: z, centerOffset: F - z - D, ...(L && { alignmentOffset: D }) },
        reset: L,
      }
    },
  }),
  i4 = (e, r) => ({ ...l4(e), options: [e, r] }),
  a4 = {
    name: 'hide',
    async fn(e) {
      const { width: r, height: l, x: a, y: u } = e.rects.reference,
        f = r === 0 && l === 0 && a === 0 && u === 0
      return { data: { referenceHidden: (await FI().fn(e)).data?.referenceHidden || f } }
    },
  },
  s4 = { sideX: 'left', sideY: 'top' }
function FR(e, r, l) {
  const a = e === 'inline-start' || e === 'inline-end'
  return {
    top: 'top',
    right: a ? (l ? 'inline-start' : 'inline-end') : 'right',
    bottom: 'bottom',
    left: a ? (l ? 'inline-end' : 'inline-start') : 'left',
  }[r]
}
function Qx(e, r, l) {
  const { rects: a, placement: u } = e
  return {
    side: FR(r, wr(u), l),
    align: ti(u) || 'center',
    anchor: { width: a.reference.width, height: a.reference.height },
    positioner: { width: a.floating.width, height: a.floating.height },
  }
}
function Wh(e) {
  const {
      anchor: r,
      positionMethod: l = 'absolute',
      side: a = 'bottom',
      sideOffset: u = 0,
      align: f = 'center',
      alignOffset: d = 0,
      collisionBoundary: m,
      collisionPadding: p = 5,
      sticky: g = !1,
      arrowPadding: v = 5,
      disableAnchorTracking: y = !1,
      keepMounted: x = !1,
      floatingRootContext: T,
      mounted: w,
      collisionAvoidance: S,
      shiftCrossAxis: N = !1,
      nodeId: A,
      adaptiveOrigin: R,
      lazyFlip: I = !1,
      externalTree: j,
    } = e,
    [M, V] = h.useState(null)
  !w && M !== null && V(null)
  const k = S.side || 'flip',
    _ = S.align || 'flip',
    ee = S.fallbackAxisSide || 'end',
    ie = typeof r == 'function' ? r : void 0,
    Q = Te(ie),
    le = ie ? Q : r,
    q = an(r),
    F = Gh() === 'rtl',
    z =
      M ||
      {
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left',
        'inline-end': F ? 'left' : 'right',
        'inline-start': F ? 'right' : 'left',
      }[a],
    L = f === 'center' ? z : `${z}-${f}`
  let D = p
  const $ = 1,
    oe = a === 'bottom' ? $ : 0,
    O = a === 'top' ? $ : 0,
    P = a === 'right' ? $ : 0,
    H = a === 'left' ? $ : 0
  typeof D == 'number'
    ? (D = { top: D + oe, right: D + H, bottom: D + O, left: D + P })
    : D &&
      (D = {
        top: (D.top || 0) + oe,
        right: (D.right || 0) + H,
        bottom: (D.bottom || 0) + O,
        left: (D.left || 0) + P,
      })
  const X = { boundary: m === 'clipping-ancestors' ? 'clippingAncestors' : m, padding: D },
    te = h.useRef(null),
    re = an(u),
    W = an(d),
    ue = [
      UI(
        (wt) => {
          const ct = Qx(wt, a, F),
            Yt = typeof re.current == 'function' ? re.current(ct) : re.current,
            Ze = typeof W.current == 'function' ? W.current(ct) : W.current
          return { mainAxis: Yt, crossAxis: Ze, alignmentAxis: Ze }
        },
        [typeof u != 'function' ? u : 0, typeof d != 'function' ? d : 0, F, a]
      ),
    ],
    K = _ === 'none' && k !== 'shift',
    xe = !K && (g || N || k === 'shift'),
    Ee =
      k === 'none'
        ? null
        : HI({
            ...X,
            padding: { top: D.top + $, right: D.right + $, bottom: D.bottom + $, left: D.left + $ },
            mainAxis: !N && k === 'flip',
            crossAxis: _ === 'flip' ? 'alignment' : !1,
            fallbackAxisSideDirection: ee,
          }),
    Fe = K
      ? null
      : VI(
          (wt) => {
            const ct = Gr(wt.elements.floating).documentElement
            return {
              ...X,
              rootBoundary: N
                ? { x: 0, y: 0, width: ct.clientWidth, height: ct.clientHeight }
                : void 0,
              mainAxis: _ !== 'none',
              crossAxis: xe,
              limiter:
                g || N
                  ? void 0
                  : LI((Yt) => {
                      if (!te.current) return {}
                      const { width: Ze, height: tn } = te.current.getBoundingClientRect(),
                        xt = Pr(wr(Yt.placement)),
                        ft = xt === 'y' ? Ze : tn,
                        Nn = xt === 'y' ? D.left + D.right : D.top + D.bottom
                      return { offset: ft / 2 + Nn / 2 }
                    }),
            }
          },
          [X, g, N, D, _]
        )
  ;(k === 'shift' || _ === 'shift' || f === 'center' ? ue.push(Fe, Ee) : ue.push(Ee, Fe),
    ue.push(
      BI({
        ...X,
        apply({
          elements: { floating: wt },
          rects: { reference: ct },
          availableWidth: Yt,
          availableHeight: Ze,
        }) {
          Object.entries({
            '--available-width': `${Yt}px`,
            '--available-height': `${Ze}px`,
            '--anchor-width': `${ct.width}px`,
            '--anchor-height': `${ct.height}px`,
          }).forEach(([tn, xt]) => {
            wt.style.setProperty(tn, xt)
          })
        },
      }),
      i4(
        () => ({
          element: te.current || document.createElement('div'),
          padding: v,
          offsetParent: 'floating',
        }),
        [v]
      ),
      {
        name: 'transformOrigin',
        fn(wt) {
          const { elements: ct, middlewareData: Yt, placement: Ze, rects: tn, y: xt } = wt,
            ft = wr(Ze),
            Nn = Pr(ft),
            Kn = te.current,
            fr = Yt.arrow?.x || 0,
            st = Yt.arrow?.y || 0,
            Et = Kn?.clientWidth || 0,
            Xt = Kn?.clientHeight || 0,
            Bt = fr + Et / 2,
            qe = st + Xt / 2,
            Pn = Math.abs(Yt.shift?.y || 0),
            li = tn.reference.height / 2,
            dr = typeof u == 'function' ? u(Qx(wt, a, F)) : u,
            Oo = Pn > dr,
            Ao = {
              top: `${Bt}px calc(100% + ${dr}px)`,
              bottom: `${Bt}px ${-dr}px`,
              left: `calc(100% + ${dr}px) ${qe}px`,
              right: `${-dr}px ${qe}px`,
            }[ft],
            oa = `${Bt}px ${tn.reference.y + li - xt}px`
          return (
            ct.floating.style.setProperty('--transform-origin', xe && Nn === 'y' && Oo ? oa : Ao),
            {}
          )
        },
      },
      a4,
      R
    ),
    Ne(() => {
      !w &&
        T &&
        T.update({ referenceElement: null, floatingElement: null, domReferenceElement: null })
    }, [w, T]))
  const Re = h.useMemo(
      () => ({
        elementResize: !y && typeof ResizeObserver < 'u',
        layoutShift: !y && typeof IntersectionObserver < 'u',
      }),
      [y]
    ),
    {
      refs: be,
      elements: Se,
      x: Le,
      y: Oe,
      middlewareData: _e,
      update: pe,
      placement: je,
      context: Ce,
      isPositioned: Me,
      floatingStyles: we,
    } = yD({
      rootContext: T,
      placement: L,
      middleware: ue,
      strategy: l,
      whileElementsMounted: x ? void 0 : (...wt) => _x(...wt, Re),
      nodeId: A,
      externalTree: j,
    }),
    { sideX: Xe, sideY: We } = _e.adaptiveOrigin || s4,
    Be = Me ? l : 'fixed',
    dt = h.useMemo(
      () => (R ? { position: Be, [Xe]: Le, [We]: Oe } : { position: Be, ...we }),
      [R, Be, Xe, Le, We, Oe, we]
    ),
    Rt = h.useRef(null)
  ;(Ne(() => {
    if (!w) return
    const wt = q.current,
      ct = typeof wt == 'function' ? wt() : wt,
      Ze = (Zx(ct) ? ct.current : ct) || null || null
    Ze !== Rt.current && (be.setPositionReference(Ze), (Rt.current = Ze))
  }, [w, be, le, q]),
    h.useEffect(() => {
      if (!w) return
      const wt = q.current
      typeof wt != 'function' &&
        Zx(wt) &&
        wt.current !== Rt.current &&
        (be.setPositionReference(wt.current), (Rt.current = wt.current))
    }, [w, be, le, q]),
    h.useEffect(() => {
      if (x && w && Se.domReference && Se.floating) return _x(Se.domReference, Se.floating, pe, Re)
    }, [x, w, Se, pe, Re]))
  const Dt = wr(je),
    jt = FR(a, Dt, F),
    rt = ti(je) || 'center',
    ye = !!_e.hide?.referenceHidden
  Ne(() => {
    I && w && Me && V(Dt)
  }, [I, w, Me, Dt])
  const Qe = h.useMemo(
      () => ({ position: 'absolute', top: _e.arrow?.y, left: _e.arrow?.x }),
      [_e.arrow]
    ),
    it = _e.arrow?.centerOffset !== 0
  return h.useMemo(
    () => ({
      positionerStyles: dt,
      arrowStyles: Qe,
      arrowRef: te,
      arrowUncentered: it,
      side: jt,
      align: rt,
      physicalSide: Dt,
      anchorHidden: ye,
      refs: be,
      context: Ce,
      isPositioned: Me,
      update: pe,
    }),
    [dt, Qe, te, it, jt, rt, Dt, ye, be, Ce, Me, pe]
  )
}
function Zx(e) {
  return e != null && 'current' in e
}
const u4 = h.forwardRef(function (r, l) {
  const {
      render: a,
      className: u,
      anchor: f,
      positionMethod: d = 'absolute',
      side: m = 'bottom',
      align: p = 'center',
      sideOffset: g = 0,
      alignOffset: v = 0,
      collisionBoundary: y = 'clipping-ancestors',
      collisionPadding: x = 5,
      arrowPadding: T = 5,
      sticky: w = !1,
      disableAnchorTracking: S = !1,
      collisionAvoidance: N = Ih,
      ...A
    } = r,
    R = cl(),
    { filteredItems: I } = ra(),
    j = _d(),
    M = r4(),
    V = he(R, Ie.modal),
    k = he(R, Ie.open),
    _ = he(R, Ie.mounted),
    ee = he(R, Ie.openMethod),
    ie = he(R, Ie.triggerElement),
    Q = he(R, Ie.inputElement),
    le = he(R, Ie.inputInsidePopup),
    q = I.length === 0,
    F = Wh({
      anchor: f ?? (le ? ie : Q),
      floatingRootContext: j,
      positionMethod: d,
      mounted: _,
      side: m,
      sideOffset: g,
      align: p,
      alignOffset: v,
      arrowPadding: T,
      collisionBoundary: y,
      collisionPadding: x,
      sticky: w,
      disableAnchorTracking: S,
      keepMounted: M,
      collisionAvoidance: N,
      lazyFlip: !0,
    })
  Ed(k && V && ee !== 'touch', ie)
  const z = h.useMemo(() => {
      const O = { ...F.positionerStyles }
      return (k || (O.pointerEvents = 'none'), { role: 'presentation', hidden: !_, style: O })
    }, [k, _, F.positionerStyles]),
    L = h.useMemo(
      () => ({ open: k, side: F.side, align: F.align, anchorHidden: F.anchorHidden, empty: q }),
      [k, F.side, F.align, F.anchorHidden, q]
    )
  Ne(() => {
    R.set('popupSide', F.side)
  }, [R, F.side])
  const D = h.useMemo(
      () => ({
        side: F.side,
        align: F.align,
        arrowRef: F.arrowRef,
        arrowUncentered: F.arrowUncentered,
        arrowStyles: F.arrowStyles,
        anchorHidden: F.anchorHidden,
        isPositioned: F.isPositioned,
      }),
      [
        F.side,
        F.align,
        F.arrowRef,
        F.arrowUncentered,
        F.arrowStyles,
        F.anchorHidden,
        F.isPositioned,
      ]
    ),
    $ = Te((O) => {
      R.set('positionerElement', O)
    }),
    oe = nt('div', r, { state: L, ref: [l, $], props: [z, A], stateAttributesMapping: oi })
  return E.jsxs(HR.Provider, {
    value: D,
    children: [_ && V && E.jsx(kd, { inert: jd(!k), cutout: Q ?? ie }), oe],
  })
})
function eb(e) {
  return e === 'starting' ? O3 : en
}
const c4 = { ...oi, ...ul },
  f4 = h.forwardRef(function (r, l) {
    const { render: a, className: u, initialFocus: f, finalFocus: d, ...m } = r,
      p = cl(),
      g = Jh(),
      v = _d(),
      { filteredItems: y } = ra(),
      x = he(p, Ie.mounted),
      T = he(p, Ie.open),
      w = he(p, Ie.openMethod),
      S = he(p, Ie.transitionStatus),
      N = he(p, Ie.inputInsidePopup),
      A = he(p, Ie.inputElement),
      R = y.length === 0
    Ir({
      open: T,
      ref: p.state.popupRef,
      onComplete() {
        T && p.state.onOpenChangeComplete(!0)
      },
    })
    const I = h.useMemo(
        () => ({
          open: T,
          side: g.side,
          align: g.align,
          anchorHidden: g.anchorHidden,
          transitionStatus: S,
          empty: R,
        }),
        [T, g.side, g.align, g.anchorHidden, S, R]
      ),
      j = nt('div', r, {
        state: I,
        ref: [l, p.state.popupRef],
        props: [
          {
            role: N ? 'dialog' : 'presentation',
            tabIndex: -1,
            onFocus(_) {
              const ee = On(_.nativeEvent)
              w !== 'touch' &&
                (tt(p.state.listElement, ee) || ee === _.currentTarget) &&
                p.state.inputRef.current?.focus()
            },
          },
          eb(S),
          m,
        ],
        stateAttributesMapping: c4,
      }),
      V = f === void 0 ? (N ? (_) => (_ === 'touch' ? p.state.popupRef.current : A) : !1) : f
    let k
    return (
      d != null ? (k = d) : (k = N ? void 0 : !1),
      E.jsx(Md, {
        context: v,
        disabled: !x,
        modal: !N,
        openInteractionType: w,
        initialFocus: V,
        returnFocus: k,
        children: j,
      })
    )
  }),
  PR = h.createContext(void 0)
function qR() {
  const e = h.useContext(PR)
  if (!e) throw new Error(Ht(19))
  return e
}
const d4 = h.createContext(!1)
function m4() {
  return h.useContext(d4)
}
const p4 = h.memo(
    h.forwardRef(function (r, l) {
      const {
          render: a,
          className: u,
          value: f = null,
          index: d,
          disabled: m = !1,
          nativeButton: p = !1,
          ...g
        } = r,
        v = h.useRef(!1),
        y = h.useRef(null),
        x = na({ index: d, textRef: y, indexGuessBehavior: Yh.GuessFromOrder }),
        T = cl(),
        w = m4(),
        { flatFilteredItems: S } = ra(),
        N = he(T, Ie.open),
        A = he(T, Ie.selectionMode),
        R = he(T, Ie.readOnly),
        I = he(T, Ie.virtualized),
        j = he(T, Ie.isItemEqualToValue),
        M = A !== 'none',
        V = d ?? (I ? es(S, f, j) : x.index),
        k = x.index !== -1,
        _ = he(T, Ie.id),
        ee = he(T, Ie.isActive, V),
        ie = he(T, Ie.isSelected, f),
        Q = he(T, Ie.items),
        le = he(T, Ie.getItemProps),
        q = h.useRef(null),
        Y = _ != null && k ? `${_}-${V}` : void 0,
        F = ie && M
      ;(Ne(() => {
        if (!(k && (I || d != null))) return
        const te = T.state.listRef.current
        return (
          (te[V] = q.current),
          () => {
            delete te[V]
          }
        )
      }, [k, I, V, d, T]),
        Ne(() => {
          if (!k || Q) return
          const X = T.state.valuesRef.current
          return (
            (X[V] = f),
            A !== 'none' && T.state.allValuesRef.current.push(f),
            () => {
              delete X[V]
            }
          )
        }, [k, Q, V, f, T, A]),
        Ne(() => {
          if (!N) {
            v.current = !1
            return
          }
          if (!k || Q) return
          const X = T.state.selectedValue,
            te = Array.isArray(X) ? X[X.length - 1] : X
          rl(te, f, j) && T.set('selectedIndex', V)
        }, [k, Q, N, T, V, f, j]))
      const z = h.useMemo(() => ({ disabled: m, selected: F, highlighted: ee }), [m, F, ee]),
        L = le({ active: ee, selected: F })
      ;((L.id = void 0), (L.onFocus = void 0))
      const { getButtonProps: D, buttonRef: $ } = wo({
        disabled: m,
        focusableWhenDisabled: !0,
        native: p,
      })
      function oe(X) {
        function te() {
          T.state.handleSelection(X, f)
        }
        T.state.submitOnItemClick ? (Yr.flushSync(te), T.state.requestSubmit()) : te()
      }
      const O = {
          id: Y,
          role: w ? 'gridcell' : 'option',
          'aria-disabled': m || void 0,
          'aria-selected': M ? F : void 0,
          tabIndex: void 0,
          onPointerDownCapture(X) {
            ;((v.current = !0), X.preventDefault())
          },
          onClick(X) {
            m || R || oe(X.nativeEvent)
          },
          onMouseUp(X) {
            const te = v.current
            ;((v.current = !1), !(m || R || X.button !== 0 || te || !ee) && oe(X.nativeEvent))
          },
        },
        P = nt('div', r, { ref: [$, l, x.ref, q], state: z, props: [L, O, g, D] }),
        H = h.useMemo(() => ({ selected: F, textRef: y }), [F, y])
      return E.jsx(PR.Provider, { value: H, children: P })
    })
  ),
  g4 = h.forwardRef(function (r, l) {
    const { render: a, className: u, children: f, ...d } = r,
      { filteredItems: m } = ra(),
      p = cl(),
      g = m.length === 0 ? f : null
    return nt('div', r, {
      ref: [l, p.state.emptyRef],
      props: [{ children: g, role: 'status', 'aria-live': 'polite', 'aria-atomic': !0 }, d],
    })
  }),
  h4 = h.forwardRef(function (r, l) {
    const { className: a, render: u, orientation: f = 'horizontal', ...d } = r,
      m = h.useMemo(() => ({ orientation: f }), [f])
    return nt('div', r, {
      state: m,
      ref: l,
      props: [{ role: 'separator', 'aria-orientation': f }, d],
    })
  })
function b4(e) {
  const { multiple: r = !1, defaultValue: l, value: a, onValueChange: u, ...f } = e
  return E.jsx(qj, {
    ...f,
    selectionMode: r ? 'multiple' : 'single',
    selectedValue: a,
    defaultSelectedValue: l,
    onSelectedValueChange: u,
  })
}
const y4 = h.forwardRef(function (r, l) {
    const a = r.keepMounted ?? !1,
      { selected: u } = qR()
    return a || u ? E.jsx(v4, { ...r, ref: l }) : null
  }),
  v4 = h.memo(
    h.forwardRef((e, r) => {
      const { render: l, className: a, keepMounted: u, ...f } = e,
        { selected: d } = qR(),
        m = h.useRef(null),
        { transitionStatus: p, setMounted: g } = sl(d),
        v = h.useMemo(() => ({ selected: d, transitionStatus: p }), [d, p]),
        y = nt('span', e, {
          ref: [r, m],
          state: v,
          props: [{ 'aria-hidden': !0, children: '✔️' }, f],
          stateAttributesMapping: ul,
        })
      return (
        Ir({
          open: d,
          ref: m,
          onComplete() {
            d || g(!1)
          },
        }),
        y
      )
    })
  ),
  x4 = h.createContext(void 0)
function Vd(e = !0) {
  const r = h.useContext(x4)
  if (r === void 0 && !e) throw new Error(Ht(25))
  return r
}
const GR = h.createContext(void 0)
function ec(e) {
  const r = h.useContext(GR)
  if (r === void 0 && !e) throw new Error(Ht(33))
  return r
}
const YR = h.createContext(void 0)
function fo(e) {
  const r = h.useContext(YR)
  if (r === void 0 && !e) throw new Error(Ht(36))
  return r
}
const $R = h.createContext(void 0)
function S4() {
  const e = h.useContext($R)
  if (e === void 0) throw new Error(Ht(30))
  return e
}
const tb = { type: 'regular-item' }
function Ld(e) {
  const {
      closeOnClick: r,
      disabled: l = !1,
      highlighted: a,
      id: u,
      store: f,
      nativeButton: d,
      itemMetadata: m,
      nodeId: p,
    } = e,
    g = h.useRef(null),
    v = Vd(!0),
    y = v !== void 0,
    { events: x } = f.useState('floatingTreeRoot'),
    { getButtonProps: T, buttonRef: w } = wo({ disabled: l, focusableWhenDisabled: !0, native: d }),
    S = h.useCallback(
      (A) =>
        Yl(
          {
            id: u,
            role: 'menuitem',
            tabIndex: a ? 0 : -1,
            onMouseMove(R) {
              p && x.emit('itemhover', { nodeId: p, target: R.currentTarget })
            },
            onMouseEnter() {
              m.type === 'submenu-trigger' && m.setActive()
            },
            onKeyUp(R) {
              R.key === ' ' && f.context.typingRef.current && R.preventBaseUIHandler()
            },
            onClick(R) {
              r && x.emit('close', { domEvent: R, reason: ql })
            },
            onMouseUp(R) {
              if (v) {
                const I = v.initialCursorPointRef.current
                if (
                  ((v.initialCursorPointRef.current = null),
                  y && I && Math.abs(R.clientX - I.x) <= 1 && Math.abs(R.clientY - I.y) <= 1)
                )
                  return
              }
              g.current &&
                f.context.allowMouseUpTriggerRef.current &&
                (!y || R.button === 2) &&
                m.type === 'regular-item' &&
                g.current.click()
            },
          },
          A,
          T
        ),
      [u, a, T, r, x, f, y, v, m, p]
    ),
    N = nl(g, w)
  return h.useMemo(() => ({ getItemProps: S, itemRef: N }), [S, N])
}
let Jx = (function (e) {
  return (
    (e.checked = 'data-checked'),
    (e.unchecked = 'data-unchecked'),
    (e.disabled = 'data-disabled'),
    (e.highlighted = 'data-highlighted'),
    e
  )
})({})
const Hd = {
    checked(e) {
      return e ? { [Jx.checked]: '' } : { [Jx.unchecked]: '' }
    },
    ...ul,
  },
  R4 = h.forwardRef(function (r, l) {
    const {
        render: a,
        className: u,
        id: f,
        label: d,
        nativeButton: m = !1,
        disabled: p = !1,
        closeOnClick: g = !1,
        checked: v,
        defaultChecked: y,
        onCheckedChange: x,
        ...T
      } = r,
      w = na({ label: d }),
      S = ec(!0),
      N = co(f),
      { store: A } = fo(),
      R = A.useState('isActive', w.index),
      I = A.useState('itemProps'),
      [j, M] = Gl({ controlled: v, default: y ?? !1, name: 'MenuCheckboxItem', state: 'checked' }),
      { getItemProps: V, itemRef: k } = Ld({
        closeOnClick: g,
        disabled: p,
        highlighted: R,
        id: N,
        store: A,
        nativeButton: m,
        nodeId: S?.nodeId,
        itemMetadata: tb,
      }),
      _ = h.useMemo(() => ({ disabled: p, highlighted: R, checked: j }), [p, R, j]),
      ee = Te((Q) => {
        const le = { ...De(ql, Q.nativeEvent), preventUnmountOnClose: () => {} }
        ;(x?.(!j, le), !le.isCanceled && M((q) => !q))
      }),
      ie = nt('div', r, {
        state: _,
        stateAttributesMapping: Hd,
        props: [I, { role: 'menuitemcheckbox', 'aria-checked': j, onClick: ee }, T, V],
        ref: [k, l, w.ref],
      })
    return E.jsx($R.Provider, { value: _, children: ie })
  }),
  E4 = h.forwardRef(function (r, l) {
    const { render: a, className: u, keepMounted: f = !1, ...d } = r,
      m = S4(),
      p = h.useRef(null),
      { transitionStatus: g, setMounted: v } = sl(m.checked)
    Ir({
      open: m.checked,
      ref: p,
      onComplete() {
        m.checked || v(!1)
      },
    })
    const y = h.useMemo(
      () => ({
        checked: m.checked,
        disabled: m.disabled,
        highlighted: m.highlighted,
        transitionStatus: g,
      }),
      [m.checked, m.disabled, m.highlighted, g]
    )
    return nt('span', r, {
      state: y,
      ref: [l, p],
      stateAttributesMapping: Hd,
      props: { 'aria-hidden': !0, ...d },
      enabled: f || m.checked,
    })
  }),
  KR = h.createContext(void 0)
function T4() {
  const e = h.useContext(KR)
  if (e === void 0) throw new Error(Ht(31))
  return e
}
const C4 = h.forwardRef(function (r, l) {
    const { render: a, className: u, ...f } = r,
      [d, m] = h.useState(void 0),
      p = h.useMemo(() => ({ setLabelId: m }), [m]),
      g = nt('div', r, { ref: l, props: { role: 'group', 'aria-labelledby': d, ...f } })
    return E.jsx(KR.Provider, { value: p, children: g })
  }),
  w4 = h.forwardRef(function (r, l) {
    const { className: a, render: u, id: f, ...d } = r,
      m = co(f),
      { setLabelId: p } = T4()
    return (
      Ne(
        () => (
          p(m),
          () => {
            p(void 0)
          }
        ),
        [p, m]
      ),
      nt('div', r, { ref: l, props: { id: m, role: 'presentation', ...d } })
    )
  }),
  M4 = h.forwardRef(function (r, l) {
    const {
        render: a,
        className: u,
        id: f,
        label: d,
        nativeButton: m = !1,
        disabled: p = !1,
        closeOnClick: g = !0,
        ...v
      } = r,
      y = na({ label: d }),
      x = ec(!0),
      T = co(f),
      { store: w } = fo(),
      S = w.useState('isActive', y.index),
      N = w.useState('itemProps'),
      { getItemProps: A, itemRef: R } = Ld({
        closeOnClick: g,
        disabled: p,
        highlighted: S,
        id: T,
        store: w,
        nativeButton: m,
        nodeId: x?.nodeId,
        itemMetadata: tb,
      }),
      I = h.useMemo(() => ({ disabled: p, highlighted: S }), [p, S])
    return nt('div', r, { state: I, props: [N, v, A], ref: [R, l, y.ref] })
  }),
  O4 = h.createContext(void 0)
function XR(e) {
  return h.useContext(O4)
}
const A4 = { ...oi, ...ul },
  N4 = h.forwardRef(function (r, l) {
    const { render: a, className: u, finalFocus: f, ...d } = r,
      { store: m } = fo(),
      { side: p, align: g } = ec(),
      v = XR() != null,
      y = m.useState('open'),
      x = m.useState('transitionStatus'),
      T = m.useState('popupProps'),
      w = m.useState('mounted'),
      S = m.useState('instantType'),
      N = m.useState('activeTriggerElement'),
      A = m.useState('parent'),
      R = m.useState('lastOpenChangeReason'),
      I = m.useState('rootId'),
      j = m.useState('floatingRootContext'),
      M = m.useState('floatingTreeRoot'),
      V = m.useState('closeDelay'),
      k = m.useState('activeTriggerElement')
    ;(Ir({
      open: y,
      ref: m.context.popupRef,
      onComplete() {
        y && m.context.onOpenChangeComplete?.(!0)
      },
    }),
      h.useEffect(() => {
        function q(Y) {
          m.setOpen(!1, De(Y.reason, Y.domEvent))
        }
        return (
          M.events.on('close', q),
          () => {
            M.events.off('close', q)
          }
        )
      }, [M.events, m]))
    const _ = m.useState('hoverEnabled'),
      ee = m.useState('disabled')
    ED(j, { enabled: _ && !ee && A.type !== 'context-menu' && A.type !== 'menubar', closeDelay: V })
    const ie = h.useMemo(
        () => ({
          transitionStatus: x,
          side: p,
          align: g,
          open: y,
          nested: A.type === 'menu',
          instant: S,
        }),
        [x, p, g, y, A.type, S]
      ),
      Q = nt('div', r, {
        state: ie,
        ref: [l, m.context.popupRef],
        stateAttributesMapping: A4,
        props: [
          T,
          {
            onKeyDown(q) {
              v && Ph.has(q.key) && q.stopPropagation()
            },
          },
          eb(x),
          d,
          { 'data-rootownerid': I },
        ],
      })
    let le = A.type === void 0 || A.type === 'context-menu'
    return (
      (N || (A.type === 'menubar' && R !== Dh)) && (le = !0),
      E.jsx(Md, {
        context: j,
        modal: !1,
        disabled: !w,
        returnFocus: f === void 0 ? le : f,
        initialFocus: A.type !== 'menu',
        restoreFocus: !0,
        externalTree: A.type !== 'menubar' ? M : void 0,
        previousFocusableElement: k,
        nextFocusableElement: A.type === void 0 ? m.context.triggerFocusTargetRef : void 0,
        beforeContentFocusGuardRef:
          A.type === void 0 ? m.context.beforeContentFocusGuardRef : void 0,
        children: Q,
      })
    )
  }),
  QR = h.createContext(void 0)
function z4() {
  const e = h.useContext(QR)
  if (e === void 0) throw new Error(Ht(32))
  return e
}
const ZR = h.forwardRef(function (r, l) {
    const { keepMounted: a = !1, ...u } = r,
      { store: f } = fo()
    return f.useState('mounted') || a
      ? E.jsx(QR.Provider, { value: a, children: E.jsx(wd, { ref: l, ...u }) })
      : null
  }),
  I4 = h.forwardRef(function (r, l) {
    const {
        anchor: a,
        positionMethod: u = 'absolute',
        className: f,
        render: d,
        side: m,
        align: p,
        sideOffset: g = 0,
        alignOffset: v = 0,
        collisionBoundary: y = 'clipping-ancestors',
        collisionPadding: x = 5,
        arrowPadding: T = 5,
        sticky: w = !1,
        disableAnchorTracking: S = !1,
        collisionAvoidance: N = Ih,
        ...A
      } = r,
      { store: R } = fo(),
      I = z4(),
      j = Vd(!0),
      M = R.useState('parent'),
      V = R.useState('floatingRootContext'),
      k = R.useState('floatingTreeRoot'),
      _ = R.useState('mounted'),
      ee = R.useState('open'),
      ie = R.useState('modal'),
      Q = R.useState('activeTriggerElement'),
      le = R.useState('lastOpenChangeReason'),
      q = R.useState('floatingNodeId'),
      Y = R.useState('floatingParentNodeId')
    let F = a,
      z = g,
      L = v,
      D = p,
      $ = N
    M.type === 'context-menu' &&
      ((F = a ?? M.context?.anchor),
      (D = D ?? 'start'),
      !m && D !== 'center' && ((L = r.alignOffset ?? 2), (z = r.sideOffset ?? -5)))
    let oe = m,
      O = D
    M.type === 'menu'
      ? ((oe = oe ?? 'inline-end'), (O = O ?? 'start'), ($ = r.collisionAvoidance ?? A3))
      : M.type === 'menubar' && ((oe = oe ?? 'bottom'), (O = O ?? 'start'))
    const P = M.type === 'context-menu',
      H = Wh({
        anchor: F,
        floatingRootContext: V,
        positionMethod: j ? 'fixed' : u,
        mounted: _,
        side: oe,
        sideOffset: z,
        align: O,
        alignOffset: L,
        arrowPadding: P ? 0 : T,
        collisionBoundary: y,
        collisionPadding: x,
        sticky: w,
        nodeId: q,
        keepMounted: I,
        disableAnchorTracking: S,
        collisionAvoidance: $,
        shiftCrossAxis: P,
        externalTree: k,
      }),
      X = h.useMemo(() => {
        const ue = {}
        return (
          ee || (ue.pointerEvents = 'none'),
          { role: 'presentation', hidden: !_, style: { ...H.positionerStyles, ...ue } }
        )
      }, [ee, _, H.positionerStyles])
    ;(h.useEffect(() => {
      function ue(K) {
        K.open
          ? (K.parentNodeId === q && R.set('hoverEnabled', !1),
            K.nodeId !== q &&
              K.parentNodeId === R.select('floatingParentNodeId') &&
              R.setOpen(!1, De(xu)))
          : K.parentNodeId === q && K.reason !== xu && R.set('hoverEnabled', !0)
      }
      return (
        k.events.on('menuopenchange', ue),
        () => {
          k.events.off('menuopenchange', ue)
        }
      )
    }, [R, k.events, q]),
      h.useEffect(() => {
        if (R.select('floatingParentNodeId') == null) return
        function ue(K) {
          if (K.open || K.nodeId !== R.select('floatingParentNodeId')) return
          const xe = K.reason ?? xu
          R.setOpen(!1, De(xe))
        }
        return (
          k.events.on('menuopenchange', ue),
          () => {
            k.events.off('menuopenchange', ue)
          }
        )
      }, [k.events, R]),
      h.useEffect(() => {
        function ue(K) {
          !ee ||
            K.nodeId !== R.select('floatingParentNodeId') ||
            (K.target && Q && Q !== K.target && R.setOpen(!1, De(xu)))
        }
        return (
          k.events.on('itemhover', ue),
          () => {
            k.events.off('itemhover', ue)
          }
        )
      }, [k.events, ee, Q, R]),
      h.useEffect(() => {
        const ue = {
          open: ee,
          nodeId: q,
          parentNodeId: Y,
          reason: R.select('lastOpenChangeReason'),
        }
        k.events.emit('menuopenchange', ue)
      }, [k.events, ee, R, q, Y]))
    const te = h.useMemo(
        () => ({
          open: ee,
          side: H.side,
          align: H.align,
          anchorHidden: H.anchorHidden,
          nested: M.type === 'menu',
        }),
        [ee, H.side, H.align, H.anchorHidden, M.type]
      ),
      re = h.useMemo(
        () => ({
          side: H.side,
          align: H.align,
          arrowRef: H.arrowRef,
          arrowUncentered: H.arrowUncentered,
          arrowStyles: H.arrowStyles,
          nodeId: H.context.nodeId,
        }),
        [H.side, H.align, H.arrowRef, H.arrowUncentered, H.arrowStyles, H.context.nodeId]
      ),
      W = nt('div', r, {
        state: te,
        stateAttributesMapping: oi,
        ref: [l, R.useStateSetter('positionerElement')],
        props: [X, A],
      }),
      de =
        _ &&
        M.type !== 'menu' &&
        ((M.type !== 'menubar' && ie && le !== Cr) || (M.type === 'menubar' && M.context.modal))
    let ve = null
    return (
      M.type === 'menubar' ? (ve = M.context.contentElement) : M.type === void 0 && (ve = Q),
      E.jsxs(GR.Provider, {
        value: re,
        children: [
          de &&
            E.jsx(kd, {
              ref:
                M.type === 'context-menu' || M.type === 'nested-context-menu'
                  ? M.context.internalBackdropRef
                  : null,
              inert: jd(!ee),
              cutout: ve,
            }),
          E.jsx(T3, {
            id: q,
            children: E.jsx(qh, {
              elementsRef: R.context.itemDomElements,
              labelsRef: R.context.itemLabels,
              children: W,
            }),
          }),
        ],
      })
    )
  }),
  JR = h.createContext(void 0)
function D4() {
  const e = h.useContext(JR)
  if (e === void 0) throw new Error(Ht(34))
  return e
}
const j4 = h.memo(
    h.forwardRef(function (r, l) {
      const {
          render: a,
          className: u,
          value: f,
          defaultValue: d,
          onValueChange: m,
          disabled: p = !1,
          ...g
        } = r,
        [v, y] = Gl({ controlled: f, default: d, name: 'MenuRadioGroup' }),
        x = Te(m),
        T = Te((A, R) => {
          ;(x?.(A, R), !R.isCanceled && y(A))
        }),
        w = h.useMemo(() => ({ disabled: p }), [p]),
        S = nt('div', r, {
          state: w,
          ref: l,
          props: { role: 'group', 'aria-disabled': p || void 0, ...g },
        }),
        N = h.useMemo(() => ({ value: v, setValue: T, disabled: p }), [v, T, p])
      return E.jsx(JR.Provider, { value: N, children: S })
    })
  ),
  WR = h.createContext(void 0)
function k4() {
  const e = h.useContext(WR)
  if (e === void 0) throw new Error(Ht(35))
  return e
}
const _4 = h.forwardRef(function (r, l) {
    const {
        render: a,
        className: u,
        id: f,
        label: d,
        nativeButton: m = !1,
        disabled: p = !1,
        closeOnClick: g = !1,
        value: v,
        ...y
      } = r,
      x = na({ label: d }),
      T = ec(!0),
      w = co(f),
      { store: S } = fo(),
      N = S.useState('isActive', x.index),
      A = S.useState('itemProps'),
      { value: R, setValue: I, disabled: j } = D4(),
      M = j || p,
      V = R === v,
      { getItemProps: k, itemRef: _ } = Ld({
        closeOnClick: g,
        disabled: M,
        highlighted: N,
        id: w,
        store: S,
        nativeButton: m,
        nodeId: T?.nodeId,
        itemMetadata: tb,
      }),
      ee = h.useMemo(() => ({ disabled: M, highlighted: N, checked: V }), [M, N, V]),
      ie = Te((le) => {
        const q = { ...De(ql, le.nativeEvent), preventUnmountOnClose: () => {} }
        I(v, q)
      }),
      Q = nt('div', r, {
        state: ee,
        stateAttributesMapping: Hd,
        props: [A, { role: 'menuitemradio', 'aria-checked': V, onClick: ie }, y, k],
        ref: [_, l, x.ref],
      })
    return E.jsx(WR.Provider, { value: ee, children: Q })
  }),
  U4 = h.forwardRef(function (r, l) {
    const { render: a, className: u, keepMounted: f = !1, ...d } = r,
      m = k4(),
      p = h.useRef(null),
      { transitionStatus: g, setMounted: v } = sl(m.checked)
    Ir({
      open: m.checked,
      ref: p,
      onComplete() {
        m.checked || v(!1)
      },
    })
    const y = h.useMemo(
      () => ({
        checked: m.checked,
        disabled: m.disabled,
        highlighted: m.highlighted,
        transitionStatus: g,
      }),
      [m.checked, m.disabled, m.highlighted, g]
    )
    return nt('span', r, {
      state: y,
      stateAttributesMapping: Hd,
      ref: [l, p],
      props: { 'aria-hidden': !0, ...d },
      enabled: f || m.checked,
    })
  }),
  V4 = h.createContext(null)
function eE(e) {
  return h.useContext(V4)
}
const L4 = {
  ...fR,
  disabled: fe((e) => (e.parent.type === 'menubar' && e.parent.context.disabled) || e.disabled),
  modal: fe(
    (e) => (e.parent.type === void 0 || e.parent.type === 'context-menu') && (e.modal ?? !0)
  ),
  allowMouseEnter: fe((e) =>
    e.parent.type === 'menu' ? e.parent.store.select('allowMouseEnter') : e.allowMouseEnter
  ),
  stickIfOpen: fe((e) => e.stickIfOpen),
  parent: fe((e) => e.parent),
  rootId: fe((e) =>
    e.parent.type === 'menu'
      ? e.parent.store.select('rootId')
      : e.parent.type !== void 0
        ? e.parent.context.rootId
        : e.rootId
  ),
  activeIndex: fe((e) => e.activeIndex),
  isActive: fe((e, r) => e.activeIndex === r),
  hoverEnabled: fe((e) => e.hoverEnabled),
  instantType: fe((e) => e.instantType),
  lastOpenChangeReason: fe((e) => e.openChangeReason),
  floatingTreeRoot: fe((e) =>
    e.parent.type === 'menu' ? e.parent.store.select('floatingTreeRoot') : e.floatingTreeRoot
  ),
  floatingNodeId: fe((e) => e.floatingNodeId),
  floatingParentNodeId: fe((e) => e.floatingParentNodeId),
  itemProps: fe((e) => e.itemProps),
  closeDelay: fe((e) => e.closeDelay),
  keyboardEventRelay: fe((e) => {
    if (e.keyboardEventRelay) return e.keyboardEventRelay
    if (e.parent.type === 'menu') return e.parent.store.select('keyboardEventRelay')
  }),
}
class nb extends Uh {
  constructor(r) {
    ;(super(
      { ...H4(), ...r },
      {
        positionerRef: h.createRef(),
        popupRef: h.createRef(),
        typingRef: { current: !1 },
        itemDomElements: { current: [] },
        itemLabels: { current: [] },
        allowMouseUpTriggerRef: { current: !1 },
        triggerFocusTargetRef: h.createRef(),
        beforeContentFocusGuardRef: h.createRef(),
        onOpenChangeComplete: void 0,
        triggerElements: new Nd(),
      },
      L4
    ),
      this.observe(
        fe((l) => l.allowMouseEnter),
        (l, a) => {
          this.state.parent.type === 'menu' &&
            l !== a &&
            this.state.parent.store.set('allowMouseEnter', l)
        }
      ),
      (this.unsubscribeParentListener = this.observe('parent', (l) => {
        if ((this.unsubscribeParentListener?.(), l.type === 'menu')) {
          ;((this.unsubscribeParentListener = l.store.subscribe(() => {
            this.notifyAll()
          })),
            (this.context.allowMouseUpTriggerRef = l.store.context.allowMouseUpTriggerRef))
          return
        }
        ;(l.type !== void 0 &&
          (this.context.allowMouseUpTriggerRef = l.context.allowMouseUpTriggerRef),
          (this.unsubscribeParentListener = null))
      })))
  }
  setOpen(r, l) {
    this.state.floatingRootContext.context.events.emit('setOpen', { open: r, eventDetails: l })
  }
  static useStore(r, l) {
    return Yn(() => r ?? new nb(l)).current
  }
  unsubscribeParentListener = null
}
function H4() {
  return {
    ...cR(),
    disabled: !1,
    modal: !0,
    allowMouseEnter: !0,
    stickIfOpen: !0,
    parent: { type: void 0 },
    rootId: void 0,
    activeIndex: null,
    hoverEnabled: !0,
    instantType: void 0,
    openChangeReason: null,
    floatingTreeRoot: new zh(),
    floatingNodeId: void 0,
    floatingParentNodeId: null,
    itemProps: en,
    keyboardEventRelay: void 0,
    closeDelay: 0,
  }
}
const tE = h.createContext(void 0)
function nE() {
  return h.useContext(tE)
}
function rE(e) {
  const {
      children: r,
      open: l,
      onOpenChange: a,
      onOpenChangeComplete: u,
      defaultOpen: f = !1,
      disabled: d = !1,
      modal: m,
      loopFocus: p = !0,
      orientation: g = 'vertical',
      actionsRef: v,
      closeParentOnEsc: y = !1,
      handle: x,
      triggerId: T,
      defaultTriggerId: w = null,
      highlightItemOnHover: S = !0,
    } = e,
    N = Vd(!0),
    A = fo(!0),
    R = eE(),
    I = nE(),
    j = h.useMemo(
      () =>
        I && A
          ? { type: 'menu', store: A.store }
          : R
            ? { type: 'menubar', context: R }
            : N && !A
              ? { type: 'context-menu', context: N }
              : { type: void 0 },
      [N, A, R, I]
    ),
    M = nb.useStore(x?.store, { parent: j }),
    V = M.useState('floatingTreeRoot'),
    k = VS(V),
    _ = al()
  ;(Ne(() => {
    N && !A
      ? M.update({
          parent: { type: 'context-menu', context: N },
          floatingNodeId: k,
          floatingParentNodeId: _,
        })
      : A && M.update({ floatingNodeId: k, floatingParentNodeId: _ })
  }, [N, A, k, _, M]),
    M.useControlledProp('open', l, f),
    M.useControlledProp('activeTriggerId', T, w),
    M.useContextCallback('onOpenChangeComplete', u))
  const ee = M.useState('open'),
    ie = M.useState('activeTriggerElement'),
    Q = M.useState('positionerElement'),
    le = M.useState('hoverEnabled'),
    q = M.useState('modal'),
    Y = M.useState('disabled'),
    F = M.useState('lastOpenChangeReason'),
    z = M.useState('parent'),
    L = M.useState('activeIndex'),
    D = M.useState('payload'),
    $ = M.useState('floatingParentNodeId'),
    oe = h.useRef(null),
    O = $ != null
  let P
  M.useSyncedValues({ disabled: d, modal: z.type === void 0 ? m : void 0, rootId: ea() })
  const { openMethod: H, triggerProps: X, reset: te } = Id(ee)
  sR(M)
  const { forceUnmount: re } = uR(ee, M, () => {
      ;(M.update({ allowMouseEnter: !1, stickIfOpen: !0 }), te())
    }),
    W = h.useRef(z.type !== 'context-menu'),
    de = sn()
  ;(h.useEffect(() => {
    if ((ee || (oe.current = null), z.type === 'context-menu')) {
      if (!ee) {
        ;(de.clear(), (W.current = !1))
        return
      }
      de.start(500, () => {
        W.current = !0
      })
    }
  }, [de, ee, z.type]),
    Ed(ee && q && F !== Cr && H !== 'touch', Q),
    Ne(() => {
      !ee && !le && M.set('hoverEnabled', !0)
    }, [ee, le, M]))
  const ve = h.useRef(!0),
    ue = sn(),
    K = Te((ye, Qe) => {
      const it = Qe.reason
      if (
        (ee === ye && Qe.trigger === ie) ||
        ((Qe.preventUnmountOnClose = () => {
          M.set('preventUnmountingOnClose', !0)
        }),
        !ye && Qe.trigger == null && (Qe.trigger = ie ?? void 0),
        a?.(ye, Qe),
        Qe.isCanceled)
      )
        return
      const wt = { open: ye, nativeEvent: Qe.event, reason: Qe.reason, nested: O }
      P?.emit('openchange', wt)
      const ct = Qe.event
      if (ye === !1 && ct?.type === 'click' && ct.pointerType === 'touch' && !ve.current) return
      if (!ye && L !== null) {
        const xt = M.context.itemDomElements.current[L]
        queueMicrotask(() => {
          xt?.setAttribute('tabindex', '-1')
        })
      }
      ye && it === $f
        ? ((ve.current = !1),
          ue.start(300, () => {
            ve.current = !0
          }))
        : ((ve.current = !0), ue.clear())
      const Yt = (it === ji || it === ql) && ct.detail === 0 && ct?.isTrusted,
        Ze = !ye && (it === Td || it == null)
      function tn() {
        const xt = { open: ye, openChangeReason: it }
        oe.current = Qe.event ?? null
        const ft = Qe.trigger?.id ?? null
        ;((ft || ye) && ((xt.activeTriggerId = ft), (xt.activeTriggerElement = Qe.trigger ?? null)),
          M.update(xt))
      }
      ;(it === Cr ? Yr.flushSync(tn) : tn(),
        z.type === 'menubar' && (it === $f || it === Hi || it === Cr || it === Cu || it === xu)
          ? M.set('instantType', 'group')
          : Yt || Ze
            ? M.set('instantType', Yt ? 'click' : 'dismiss')
            : M.set('instantType', void 0))
    }),
    xe = h.useCallback(
      (ye) => {
        const Qe = De(ye)
        return (
          (Qe.preventUnmountOnClose = () => {
            M.set('preventUnmountingOnClose', !0)
          }),
          Qe
        )
      },
      [M]
    ),
    Ee = h.useCallback(() => {
      M.setOpen(!1, xe(BS))
    }, [M, xe])
  h.useImperativeHandle(v, () => ({ unmount: re, close: Ee }), [re, Ee])
  let Fe
  ;(z.type === 'context-menu' && (Fe = z.context),
    h.useImperativeHandle(Fe?.positionerRef, () => Q, [Q]),
    h.useImperativeHandle(Fe?.actionsRef, () => ({ setOpen: K }), [K]))
  const Re = dR({ popupStore: M, onOpenChange: K })
  ;((P = Re.context.events),
    h.useEffect(() => {
      const ye = ({ open: Qe, eventDetails: it }) => K(Qe, it)
      return (
        P.on('setOpen', ye),
        () => {
          P?.off('setOpen', ye)
        }
      )
    }, [P, K]))
  const be = Ad(Re, {
      enabled: !Y,
      bubbles: y && z.type === 'menu',
      outsidePress() {
        return z.type !== 'context-menu' || oe.current?.type === 'contextmenu' ? !0 : W.current
      },
      externalTree: O ? V : void 0,
    }),
    Se = gR(Re, { role: 'menu' }),
    Le = Gh(),
    Oe = h.useCallback(
      (ye) => {
        M.select('activeIndex') !== ye && M.set('activeIndex', ye)
      },
      [M]
    ),
    _e = Hh(Re, {
      enabled: !Y,
      listRef: M.context.itemDomElements,
      activeIndex: L,
      nested: z.type !== void 0,
      loopFocus: p,
      orientation: g,
      parentOrientation: z.type === 'menubar' ? z.context.orientation : void 0,
      rtl: Le === 'rtl',
      disabledIndices: ro,
      onNavigate: Oe,
      openOnArrowKeyDown: z.type !== 'context-menu',
      externalTree: O ? V : void 0,
      focusItemOnHover: S,
    }),
    pe = h.useCallback(
      (ye) => {
        M.context.typingRef.current = ye
      },
      [M]
    ),
    je = Bh(Re, {
      listRef: M.context.itemLabels,
      activeIndex: L,
      resetMs: w3,
      onMatch: (ye) => {
        ee && ye !== L && M.set('activeIndex', ye)
      },
      onTypingChange: pe,
    }),
    {
      getReferenceProps: Ce,
      getFloatingProps: Me,
      getItemProps: we,
      getTriggerProps: Xe,
    } = ta([be, Se, _e, je]),
    We = h.useMemo(() => {
      const ye = Yl(
        Ce(),
        {
          onMouseEnter() {
            M.set('hoverEnabled', !0)
          },
          onMouseMove() {
            M.set('allowMouseEnter', !0)
          },
        },
        X
      )
      return (delete ye.role, ye)
    }, [Ce, M, X]),
    Be = h.useMemo(() => {
      const ye = Xe()
      if (!ye) return ye
      const Qe = Yl(ye, X)
      return (delete Qe.role, delete Qe['aria-controls'], Qe)
    }, [Xe, X]),
    dt = Qu(),
    Rt = h.useMemo(
      () =>
        Me({
          onMouseEnter() {
            z.type === 'menu' && dt.request(() => M.set('hoverEnabled', !1))
          },
          onMouseMove() {
            M.set('allowMouseEnter', !0)
          },
          onClick() {
            M.select('hoverEnabled') && M.set('hoverEnabled', !1)
          },
          onKeyDown(ye) {
            const Qe = M.select('keyboardEventRelay')
            Qe && !ye.isPropagationStopped() && Qe(ye)
          },
        }),
      [Me, z.type, dt, M]
    ),
    Dt = h.useMemo(() => we(), [we])
  M.useSyncedValues({
    floatingRootContext: Re,
    activeTriggerProps: We,
    inactiveTriggerProps: Be,
    popupProps: Rt,
    itemProps: Dt,
  })
  const jt = h.useMemo(() => ({ store: M, parent: j }), [M, j]),
    rt = E.jsx(YR.Provider, { value: jt, children: typeof r == 'function' ? r({ payload: D }) : r })
  return z.type === void 0 || z.type === 'context-menu'
    ? E.jsx(C3, { externalTree: V, children: rt })
    : rt
}
function B4(e) {
  const r = fo().store,
    l = h.useMemo(() => ({ parentMenu: r }), [r])
  return E.jsx(tE.Provider, { value: l, children: E.jsx(rE, { ...e }) })
}
function F4(e = {}) {
  const { highlightItemOnHover: r, highlightedIndex: l, onHighlightedIndexChange: a } = Fh(),
    { ref: u, index: f } = na(e),
    d = l === f,
    m = h.useRef(null),
    p = nl(u, m)
  return {
    compositeProps: h.useMemo(
      () => ({
        tabIndex: d ? 0 : -1,
        onFocus() {
          a(f)
        },
        onMouseMove() {
          const v = m.current
          if (!r || !v) return
          const y = v.hasAttribute('disabled') || v.ariaDisabled === 'true'
          !d && !y && v.focus()
        },
      }),
      [d, a, f, r]
    ),
    compositeRef: p,
    index: f,
  }
}
function P4(e) {
  const {
      render: r,
      className: l,
      state: a = en,
      props: u = ro,
      refs: f = ro,
      metadata: d,
      stateAttributesMapping: m,
      tag: p = 'div',
      ...g
    } = e,
    { compositeProps: v, compositeRef: y } = F4({ metadata: d })
  return nt(p, e, { state: a, ref: [...f, y], props: [v, ...u, g], stateAttributesMapping: m })
}
function oE(e) {
  if (Wt(e) && e.hasAttribute('data-rootownerid'))
    return e.getAttribute('data-rootownerid') ?? void 0
  if (!So(e)) return oE(To(e))
}
function q4(e) {
  const { enabled: r = !0, mouseDownAction: l, open: a } = e,
    u = h.useRef(!1)
  return h.useMemo(
    () =>
      r
        ? {
            onMouseDown: (f) => {
              ;((l === 'open' && !a) || (l === 'close' && a)) &&
                ((u.current = !0),
                Gr(f.currentTarget).addEventListener(
                  'click',
                  () => {
                    u.current = !1
                  },
                  { once: !0 }
                ))
            },
            onClick: (f) => {
              u.current && ((u.current = !1), f.preventBaseUIHandler())
            },
          }
        : en,
    [r, l, a]
  )
}
const wf = 2,
  G4 = h.forwardRef(function (r, l) {
    const {
        render: a,
        className: u,
        disabled: f = !1,
        nativeButton: d = !0,
        id: m,
        openOnHover: p,
        delay: g = 100,
        closeDelay: v = 0,
        handle: y,
        payload: x,
        ...T
      } = r,
      w = fo(!0),
      S = y?.store ?? w?.store
    if (!S) throw new Error(Ht(85))
    const N = co(m),
      A = S.useState('isTriggerActive', N),
      R = S.useState('floatingRootContext'),
      I = S.useState('isOpenedByTrigger', N),
      j = h.useRef(null),
      M = $4(),
      V = Fh(!0),
      k = ni(),
      _ = h.useMemo(() => k ?? new zh(), [k]),
      ee = VS(_),
      ie = al(),
      { registerTrigger: Q, isMountedByThisTrigger: le } = aR(N, j, S, {
        payload: x,
        closeDelay: v,
        parent: M,
        floatingTreeRoot: _,
        floatingNodeId: ee,
        floatingParentNodeId: ie,
        keyboardEventRelay: V?.relayKeyboardEvent,
      }),
      q = S.useState('disabled'),
      Y = f || q || (M.type === 'menubar' && M.context.disabled),
      { getButtonProps: F, buttonRef: z } = wo({ disabled: Y, native: d })
    h.useEffect(() => {
      !I && M.type === void 0 && (S.context.allowMouseUpTriggerRef.current = !1)
    }, [S, I, M.type])
    const L = h.useRef(null),
      D = sn(),
      $ = Te((Se) => {
        if (!L.current) return
        ;(D.clear(), (S.context.allowMouseUpTriggerRef.current = !1))
        const Le = Se.target
        if (
          tt(L.current, Le) ||
          tt(S.select('positionerElement'), Le) ||
          Le === L.current ||
          (Le != null && oE(Le) === S.select('rootId'))
        )
          return
        const Oe = Zh(L.current)
        ;(Se.clientX >= Oe.left - wf &&
          Se.clientX <= Oe.right + wf &&
          Se.clientY >= Oe.top - wf &&
          Se.clientY <= Oe.bottom + wf) ||
          _.events.emit('close', { domEvent: Se, reason: HS })
      })
    h.useEffect(() => {
      I &&
        S.select('lastOpenChangeReason') === Cr &&
        Gr(L.current).addEventListener('mouseup', $, { once: !0 })
    }, [I, $, S])
    const oe = M.type === 'menubar' && M.context.hasSubmenuOpen,
      P = pR(R, {
        enabled:
          (p ?? oe ?? !1) &&
          !Y &&
          M.type !== 'context-menu' &&
          (M.type !== 'menubar' || (oe && !le)),
        handleClose: hR({ blockPointerEvents: M.type !== 'menubar' }),
        mouseOnly: !0,
        move: !1,
        restMs: M.type === void 0 ? g : void 0,
        delay: { close: v },
        triggerElementRef: j,
        externalTree: _,
        isActiveTrigger: A,
      }),
      H = Y4(I, S.select('lastOpenChangeReason')),
      X = ps(R, {
        enabled: !Y && M.type !== 'context-menu',
        event: I && M.type === 'menubar' ? 'click' : 'mousedown',
        toggle: !0,
        ignoreMouse: !1,
        stickIfOpen: M.type === void 0 ? H : !1,
      }),
      te = vD(R, { enabled: !Y && ((M.type !== 'menubar' && I) || oe) }),
      re = q4({ open: I, enabled: M.type === 'menubar', mouseDownAction: 'open' }),
      W = ta([X, te]),
      de = M.type === 'menubar',
      ve = h.useMemo(() => ({ disabled: Y, open: I }), [Y, I]),
      ue = S.useState('triggerProps', le),
      K = [L, l, z, Q, j],
      xe = [
        W.getReferenceProps(),
        P ?? en,
        ue,
        {
          'aria-haspopup': 'menu',
          id: N,
          onMouseDown: (Se) => {
            if (S.select('open')) return
            ;(D.start(200, () => {
              S.context.allowMouseUpTriggerRef.current = !0
            }),
              Gr(Se.currentTarget).addEventListener('mouseup', $, { once: !0 }))
          },
        },
        de ? { role: 'menuitem' } : {},
        re,
        T,
        F,
      ],
      Ee = h.useRef(null),
      Fe = Te((Se) => {
        ;(Yr.flushSync(() => {
          S.setOpen(!1, De(Hi, Se.nativeEvent, Se.currentTarget))
        }),
          x3(Ee.current)?.focus())
      }),
      Re = Te((Se) => {
        const Le = S.select('positionerElement')
        if (Le && Fa(Se, Le)) S.context.beforeContentFocusGuardRef.current?.focus()
        else {
          Yr.flushSync(() => {
            S.setOpen(!1, De(Hi, Se.nativeEvent, Se.currentTarget))
          })
          let Oe = v3(j.current)
          for (; (Oe !== null && tt(Le, Oe)) || Oe?.hasAttribute('aria-hidden'); ) {
            const _e = Oe
            if (((Oe = Nh(Oe)), Oe === _e)) break
          }
          Oe?.focus()
        }
      }),
      be = nt('button', r, {
        enabled: !de,
        stateAttributesMapping: _u,
        state: ve,
        ref: K,
        props: xe,
      })
    return de
      ? E.jsx(P4, {
          tag: 'button',
          render: a,
          className: u,
          state: ve,
          refs: K,
          props: xe,
          stateAttributesMapping: _u,
        })
      : I
        ? E.jsxs(h.Fragment, {
            children: [
              E.jsx(Wa, { ref: Ee, onFocus: Fe }, `${N}-pre-focus-guard`),
              E.jsx(h.Fragment, { children: be }, N),
              E.jsx(
                Wa,
                { ref: S.context.triggerFocusTargetRef, onFocus: Re },
                `${N}-post-focus-guard`
              ),
            ],
          })
        : E.jsx(h.Fragment, { children: be }, N)
  })
function Y4(e, r) {
  const l = sn(),
    [a, u] = h.useState(!1)
  return (
    Ne(() => {
      e && r === 'trigger-hover'
        ? (u(!0),
          l.start(M3, () => {
            u(!1)
          }))
        : e || (l.clear(), u(!1))
    }, [e, r, l]),
    a
  )
}
function $4() {
  const e = Vd(!0),
    r = fo(!0),
    l = eE()
  return h.useMemo(
    () =>
      l
        ? { type: 'menubar', context: l }
        : e && !r
          ? { type: 'context-menu', context: e }
          : { type: void 0 },
    [e, r, l]
  )
}
const K4 = h.forwardRef(function (r, l) {
    const {
        render: a,
        className: u,
        label: f,
        id: d,
        nativeButton: m = !1,
        openOnHover: p = !0,
        delay: g = 100,
        closeDelay: v = 0,
        disabled: y = !1,
        ...x
      } = r,
      T = na(),
      w = ec(),
      { store: S } = fo(),
      N = co(d),
      A = S.useState('open'),
      R = S.useState('floatingRootContext'),
      I = S.useState('floatingTreeRoot'),
      j = iR(N, S),
      M = h.useCallback(
        (te) => {
          const re = j(te)
          return (
            te !== null &&
              S.select('open') &&
              S.select('activeTriggerId') == null &&
              S.update({ activeTriggerId: N, activeTriggerElement: te, closeDelay: v }),
            re
          )
        },
        [j, v, S, N]
      ),
      V = h.useRef(null),
      k = h.useCallback(
        (te) => {
          ;((V.current = te), S.set('activeTriggerElement', te))
        },
        [S]
      ),
      _ = nE()
    if (!_?.parentMenu) throw new Error(Ht(37))
    S.useSyncedValue('closeDelay', v)
    const ee = _.parentMenu,
      ie = ee.useState('itemProps'),
      Q = ee.useState('isActive', T.index),
      le = h.useMemo(
        () => ({ type: 'submenu-trigger', setActive: () => ee.set('activeIndex', T.index) }),
        [ee, T.index]
      ),
      q = S.useState('disabled'),
      Y = y || q,
      { getItemProps: F, itemRef: z } = Ld({
        closeOnClick: !1,
        disabled: Y,
        highlighted: Q,
        id: N,
        store: S,
        nativeButton: m,
        itemMetadata: le,
        nodeId: w?.nodeId,
      }),
      L = S.useState('hoverEnabled'),
      D = S.useState('allowMouseEnter'),
      $ = pR(R, {
        enabled: L && p && !Y && D,
        handleClose: hR({ blockPointerEvents: !0 }),
        mouseOnly: !0,
        move: !0,
        restMs: g,
        delay: { open: g, close: v },
        triggerElementRef: V,
        externalTree: I,
      }),
      oe = ps(R, { enabled: !Y, event: 'mousedown', toggle: !p, ignoreMouse: p, stickIfOpen: !1 }),
      O = ta([oe]),
      P = S.useState('triggerProps', !0)
    delete P.id
    const H = h.useMemo(() => ({ disabled: Y, highlighted: Q, open: A }), [Y, Q, A])
    return nt('div', r, {
      state: H,
      stateAttributesMapping: Dd,
      props: [
        O.getReferenceProps(),
        $,
        P,
        ie,
        {
          tabIndex: A || Q ? 0 : -1,
          onBlur() {
            Q && ee.set('activeIndex', null)
          },
        },
        x,
        F,
      ],
      ref: [l, T.ref, z, M, k],
    })
  }),
  X4 = h.forwardRef(function (r, l) {
    const {
        render: a,
        className: u,
        id: f,
        name: d,
        value: m,
        disabled: p = !1,
        onValueChange: g,
        defaultValue: v,
        ...y
      } = r,
      { state: x, name: T, disabled: w } = ol(),
      S = w || p,
      N = T ?? d,
      A = h.useMemo(() => ({ ...x, disabled: S }), [x, S]),
      {
        setTouched: R,
        setDirty: I,
        validityData: j,
        setFocused: M,
        setFilled: V,
        validationMode: k,
        validation: _,
      } = ol(),
      { labelId: ee } = gs(),
      ie = Qh({ id: f })
    Ne(() => {
      const z = m != null
      _.inputRef.current?.value || (z && m !== '') ? V(!0) : z && m === '' && V(!1)
    }, [_.inputRef, V, m])
    const [Q, le] = Gl({ controlled: m, default: v, name: 'FieldControl', state: 'value' }),
      q = m !== void 0,
      Y = Te((z, L) => {
        ;(g?.(z, L), !L.isCanceled && le(z))
      })
    return (
      Xh({
        id: ie,
        name: N,
        commit: _.commit,
        value: Q,
        getValue: () => _.inputRef.current?.value,
        controlRef: _.inputRef,
      }),
      nt('input', r, {
        ref: l,
        state: A,
        props: [
          {
            id: ie,
            disabled: S,
            name: N,
            ref: _.inputRef,
            'aria-labelledby': ee,
            ...(q ? { value: Q } : { defaultValue: v }),
            onChange(z) {
              const L = z.currentTarget.value
              ;(Y(L, De(ir, z.nativeEvent)), I(L !== j.initialValue), V(L !== ''))
            },
            onFocus() {
              M(!0)
            },
            onBlur(z) {
              ;(R(!0), M(!1), k === 'onBlur' && _.commit(z.currentTarget.value))
            },
            onKeyDown(z) {
              z.currentTarget.tagName === 'INPUT' &&
                z.key === 'Enter' &&
                (R(!0), _.commit(z.currentTarget.value))
            },
          },
          _.getInputValidationProps(),
          y,
        ],
        stateAttributesMapping: Ud,
      })
    )
  }),
  Q4 = h.forwardRef(function (r, l) {
    return E.jsx(X4, { ref: l, ...r })
  }),
  Mf = 'base-ui-disable-scrollbar',
  Hg = {
    className: Mf,
    element: E.jsx('style', {
      href: Mf,
      precedence: 'base-ui:low',
      children: `.${Mf}{scrollbar-width:none}.${Mf}::-webkit-scrollbar{display:none}`,
    }),
  },
  lE = h.createContext(null),
  iE = h.createContext(null)
function Mo() {
  const e = h.useContext(lE)
  if (e === null) throw new Error(Ht(60))
  return e
}
function aE() {
  const e = h.useContext(iE)
  if (e === null) throw new Error(Ht(61))
  return e
}
const Je = {
  id: fe((e) => e.id),
  modal: fe((e) => e.modal),
  multiple: fe((e) => e.multiple),
  items: fe((e) => e.items),
  itemToStringLabel: fe((e) => e.itemToStringLabel),
  itemToStringValue: fe((e) => e.itemToStringValue),
  isItemEqualToValue: fe((e) => e.isItemEqualToValue),
  value: fe((e) => e.value),
  open: fe((e) => e.open),
  mounted: fe((e) => e.mounted),
  forceMount: fe((e) => e.forceMount),
  transitionStatus: fe((e) => e.transitionStatus),
  openMethod: fe((e) => e.openMethod),
  activeIndex: fe((e) => e.activeIndex),
  selectedIndex: fe((e) => e.selectedIndex),
  isActive: fe((e, r) => e.activeIndex === r),
  isSelected: fe((e, r, l) => {
    const a = e.isItemEqualToValue,
      u = e.value
    return e.multiple
      ? Array.isArray(u) && u.some((f) => rl(f, l, a))
      : e.selectedIndex === r && e.selectedIndex !== null
        ? !0
        : rl(u, l, a)
  }),
  isSelectedByFocus: fe((e, r) => e.selectedIndex === r),
  popupProps: fe((e) => e.popupProps),
  triggerProps: fe((e) => e.triggerProps),
  triggerElement: fe((e) => e.triggerElement),
  positionerElement: fe((e) => e.positionerElement),
  listElement: fe((e) => e.listElement),
  scrollUpArrowVisible: fe((e) => e.scrollUpArrowVisible),
  scrollDownArrowVisible: fe((e) => e.scrollDownArrowVisible),
  hasScrollArrows: fe((e) => e.hasScrollArrows),
  serializedValue: fe((e) => {
    const { multiple: r, value: l, itemToStringValue: a } = e
    return r && Array.isArray(l) && l.length === 0 ? '' : oo(l, a)
  }),
}
function Z4(e) {
  const {
      id: r,
      value: l,
      defaultValue: a = null,
      onValueChange: u,
      open: f,
      defaultOpen: d = !1,
      onOpenChange: m,
      name: p,
      disabled: g = !1,
      readOnly: v = !1,
      required: y = !1,
      modal: x = !0,
      actionsRef: T,
      inputRef: w,
      onOpenChangeComplete: S,
      items: N,
      multiple: A = !1,
      itemToStringLabel: R,
      itemToStringValue: I,
      isItemEqualToValue: j = kR,
      highlightItemOnHover: M = !0,
      children: V,
    } = e,
    { clearErrors: k } = Kh(),
    {
      setDirty: _,
      shouldValidateOnChange: ee,
      validityData: ie,
      setFilled: Q,
      name: le,
      disabled: q,
      validation: Y,
    } = ol(),
    { controlId: F } = gs(),
    z = Qh({ id: r }),
    L = q || g,
    D = le ?? p,
    [$, oe] = Gl({ controlled: l, default: A ? (a ?? ro) : a, name: 'Select', state: 'value' }),
    [O, P] = Gl({ controlled: f, default: d, name: 'Select', state: 'open' }),
    H = h.useRef([]),
    X = h.useRef([]),
    te = h.useRef(null),
    re = h.useRef(null),
    W = h.useRef(0),
    de = h.useRef(null),
    ve = h.useRef([]),
    ue = h.useRef(!1),
    K = h.useRef(!1),
    xe = h.useRef(null),
    Ee = h.useRef({ allowSelectedMouseUp: !1, allowUnselectedMouseUp: !1 }),
    Fe = h.useRef(!1),
    { mounted: Re, setMounted: be, transitionStatus: Se } = sl(O),
    { openMethod: Le, triggerProps: Oe, reset: _e } = Id(O),
    pe = Yn(
      () =>
        new ki({
          id: z,
          modal: x,
          multiple: A,
          itemToStringLabel: R,
          itemToStringValue: I,
          isItemEqualToValue: j,
          value: $,
          open: O,
          mounted: Re,
          transitionStatus: Se,
          items: N,
          forceMount: !1,
          openMethod: null,
          activeIndex: null,
          selectedIndex: null,
          popupProps: {},
          triggerProps: {},
          triggerElement: null,
          positionerElement: null,
          listElement: null,
          scrollUpArrowVisible: !1,
          scrollDownArrowVisible: !1,
          hasScrollArrows: !1,
        })
    ).current,
    je = he(pe, Je.activeIndex),
    Ce = he(pe, Je.selectedIndex),
    Me = he(pe, Je.triggerElement),
    we = he(pe, Je.positionerElement),
    Xe = h.useMemo(() => (A && Array.isArray($) && $.length === 0 ? '' : oo($, I)), [A, $, I]),
    We = h.useMemo(() => (A && Array.isArray($) ? $.map((st) => oo(st, I)) : oo($, I)), [A, $, I]),
    Be = an(pe.state.triggerElement)
  Xh({ id: z, commit: Y.commit, value: $, controlRef: Be, name: D, getValue: () => We })
  const dt = h.useRef($)
  ;(Ne(() => {
    $ !== dt.current && pe.set('forceMount', !0)
  }, [pe, $]),
    Ne(() => {
      Q($ !== null)
    }, [$, Q]),
    Ne(
      function () {
        if (O) return
        const Et = ve.current
        if (A) {
          const Bt = Array.isArray($) ? $ : []
          if (Bt.length === 0) {
            pe.set('selectedIndex', null)
            return
          }
          const qe = Bt[Bt.length - 1],
            Pn = es(Et, qe, j)
          pe.set('selectedIndex', Pn === -1 ? null : Pn)
          return
        }
        const Xt = es(Et, $, j)
        pe.set('selectedIndex', Xt === -1 ? null : Xt)
      },
      [A, O, $, ve, j, pe]
    ),
    Ru($, () => {
      ;(k(D), _($ !== ie.initialValue), ee() ? Y.commit($) : Y.commit($, !0))
    }))
  const Rt = Te((st, Et) => {
      if ((m?.(st, Et), !Et.isCanceled && (P(st), !st && pe.state.activeIndex !== null))) {
        const Xt = H.current[pe.state.activeIndex]
        queueMicrotask(() => {
          Xt?.setAttribute('tabindex', '-1')
        })
      }
    }),
    Dt = Te(() => {
      ;(be(!1), pe.set('activeIndex', null), _e(), S?.(!1))
    })
  ;(Ir({
    enabled: !T,
    open: O,
    ref: te,
    onComplete() {
      O || Dt()
    },
  }),
    h.useImperativeHandle(T, () => ({ unmount: Dt }), [Dt]))
  const jt = Te((st, Et) => {
      ;(u?.(st, Et), !Et.isCanceled && oe(st))
    }),
    rt = Te(() => {
      const st = pe.state.listElement || te.current
      if (!st) return
      const Et = st.scrollTop,
        Xt = st.scrollTop + st.clientHeight,
        Bt = Et > 1,
        qe = Xt < st.scrollHeight - 1
      ;(pe.state.scrollUpArrowVisible !== Bt && pe.set('scrollUpArrowVisible', Bt),
        pe.state.scrollDownArrowVisible !== qe && pe.set('scrollDownArrowVisible', qe))
    }),
    ye = Lh({ open: O, onOpenChange: Rt, elements: { reference: Me, floating: we } }),
    Qe = ps(ye, { enabled: !v && !L, event: 'mousedown' }),
    it = Ad(ye, { bubbles: !1 }),
    wt = Hh(ye, {
      enabled: !v && !L,
      listRef: H,
      activeIndex: je,
      selectedIndex: Ce,
      disabledIndices: ro,
      onNavigate(st) {
        ;(st === null && !O) || pe.set('activeIndex', st)
      },
      focusItemOnHover: !1,
    }),
    ct = Bh(ye, {
      enabled: !v && !L && (O || !A),
      listRef: X,
      activeIndex: je,
      selectedIndex: Ce,
      onMatch(st) {
        O ? pe.set('activeIndex', st) : jt(ve.current[st], De('none'))
      },
      onTypingChange(st) {
        ue.current = st
      },
    }),
    { getReferenceProps: Yt, getFloatingProps: Ze, getItemProps: tn } = ta([Qe, it, wt, ct]),
    xt = h.useMemo(() => Yl(Yt(), Oe), [Yt, Oe])
  ;(NR(() => {
    pe.update({ popupProps: Ze(), triggerProps: xt })
  }),
    Ne(() => {
      pe.update({
        id: z,
        modal: x,
        multiple: A,
        value: $,
        open: O,
        mounted: Re,
        transitionStatus: Se,
        popupProps: Ze(),
        triggerProps: xt,
        items: N,
        itemToStringLabel: R,
        itemToStringValue: I,
        isItemEqualToValue: j,
        openMethod: Le,
      })
    }, [pe, z, x, A, $, O, Re, Se, Ze, xt, N, R, I, j, Le]))
  const ft = h.useMemo(
      () => ({
        store: pe,
        name: D,
        required: y,
        disabled: L,
        readOnly: v,
        multiple: A,
        itemToStringLabel: R,
        itemToStringValue: I,
        highlightItemOnHover: M,
        setValue: jt,
        setOpen: Rt,
        listRef: H,
        popupRef: te,
        scrollHandlerRef: re,
        handleScrollArrowVisibility: rt,
        scrollArrowsMountedCountRef: W,
        getItemProps: tn,
        events: ye.context.events,
        valueRef: de,
        valuesRef: ve,
        labelsRef: X,
        typingRef: ue,
        selectionRef: Ee,
        selectedItemTextRef: xe,
        validation: Y,
        onOpenChangeComplete: S,
        keyboardActiveRef: K,
        alignItemWithTriggerActiveRef: Fe,
        initialValueRef: dt,
      }),
      [pe, D, y, L, v, A, R, I, M, jt, Rt, tn, ye.context.events, Y, S, rt]
    ),
    Nn = nl(w, Y.inputRef),
    Kn = A && Array.isArray($) && $.length > 0,
    fr = h.useMemo(
      () =>
        !A || !Array.isArray($) || !D
          ? null
          : $.map((st) => {
              const Et = oo(st, I)
              return E.jsx('input', { type: 'hidden', name: D, value: Et }, Et)
            }),
      [A, $, D, I]
    )
  return E.jsx(lE.Provider, {
    value: ft,
    children: E.jsxs(iE.Provider, {
      value: ye,
      children: [
        V,
        E.jsx('input', {
          ...Y.getInputValidationProps({
            onFocus() {
              pe.state.triggerElement?.focus()
            },
            onChange(st) {
              if (st.nativeEvent.defaultPrevented) return
              const Et = st.target.value,
                Xt = De(ir, st.nativeEvent)
              function Bt() {
                if (A) return
                const qe = ve.current.find((Pn) => oo(Pn, I).toLowerCase() === Et.toLowerCase())
                qe != null && (_(qe !== ie.initialValue), jt(qe, Xt), ee() && Y.commit(qe))
              }
              ;(pe.set('forceMount', !0), queueMicrotask(Bt))
            },
          }),
          id: r || F || void 0,
          name: A ? void 0 : D,
          value: Xe,
          disabled: L,
          required: y && !Kn,
          readOnly: v,
          ref: Nn,
          style: Cd,
          tabIndex: -1,
          'aria-hidden': !0,
        }),
        fr,
      ],
    }),
  })
}
const Of = 2,
  J4 = { ..._u, ...Ud, value: () => null },
  W4 = h.forwardRef(function (r, l) {
    const { render: a, className: u, disabled: f = !1, nativeButton: d = !0, ...m } = r,
      { setTouched: p, setFocused: g, validationMode: v, state: y, disabled: x } = ol(),
      { labelId: T } = gs(),
      {
        store: w,
        setOpen: S,
        selectionRef: N,
        validation: A,
        readOnly: R,
        alignItemWithTriggerActiveRef: I,
        disabled: j,
        keyboardActiveRef: M,
      } = Mo(),
      V = x || j || f,
      k = he(w, Je.open),
      _ = he(w, Je.value),
      ee = he(w, Je.triggerProps),
      ie = he(w, Je.positionerElement),
      Q = he(w, Je.listElement),
      le = he(w, Je.serializedValue),
      q = an(ie),
      Y = h.useRef(null),
      F = sn(),
      z = sn(),
      { getButtonProps: L, buttonRef: D } = wo({ disabled: V, native: d }),
      $ = Te((re) => {
        w.set('triggerElement', re)
      }),
      oe = nl(l, Y, D, $),
      O = sn(),
      P = sn()
    h.useEffect(() => {
      if (k)
        return (
          P.start(200, () => {
            ;((N.current.allowUnselectedMouseUp = !0),
              O.start(200, () => {
                N.current.allowSelectedMouseUp = !0
              }))
          }),
          () => {
            ;(O.clear(), P.clear())
          }
        )
      ;((N.current = { allowSelectedMouseUp: !1, allowUnselectedMouseUp: !1 }), z.clear())
    }, [k, N, z, O, P])
    const H = h.useMemo(() => Q?.id ?? Du(ie)?.id, [Q, ie]),
      X = Yl(
        ee,
        {
          role: 'combobox',
          'aria-expanded': k ? 'true' : 'false',
          'aria-haspopup': 'listbox',
          'aria-controls': k ? H : void 0,
          'aria-labelledby': T,
          'aria-readonly': R || void 0,
          tabIndex: V ? -1 : 0,
          ref: oe,
          onFocus(re) {
            ;(g(!0),
              k && I.current && S(!1, De(Hi, re.nativeEvent)),
              F.start(0, () => {
                w.set('forceMount', !0)
              }))
          },
          onBlur() {
            ;(p(!0), g(!1), v === 'onBlur' && A.commit(_))
          },
          onPointerMove() {
            M.current = !1
          },
          onKeyDown() {
            M.current = !0
          },
          onMouseDown(re) {
            if (k) return
            const W = Gr(re.currentTarget)
            function de(ve) {
              if (!Y.current) return
              const ue = ve.target
              if (tt(Y.current, ue) || tt(q.current, ue) || ue === Y.current) return
              const K = Zh(Y.current)
              ;(ve.clientX >= K.left - Of &&
                ve.clientX <= K.right + Of &&
                ve.clientY >= K.top - Of &&
                ve.clientY <= K.bottom + Of) ||
                S(!1, De(HS, ve))
            }
            z.start(0, () => {
              W.addEventListener('mouseup', de, { once: !0 })
            })
          },
        },
        A.getValidationProps,
        m,
        L
      )
    X.role = 'combobox'
    const te = h.useMemo(
      () => ({ ...y, open: k, disabled: V, value: _, readOnly: R, placeholder: !le }),
      [y, k, V, _, R, le]
    )
    return nt('button', r, { ref: [l, Y], state: te, stateAttributesMapping: J4, props: X })
  }),
  e5 = { value: () => null },
  t5 = h.forwardRef(function (r, l) {
    const { className: a, render: u, children: f, ...d } = r,
      { store: m, valueRef: p } = Mo(),
      g = he(m, Je.value),
      v = he(m, Je.items),
      y = he(m, Je.itemToStringLabel),
      x = he(m, Je.serializedValue),
      T = h.useMemo(() => ({ value: g, placeholder: !x }), [g, x]),
      w = typeof f == 'function' ? f(g) : (f ?? (Array.isArray(g) ? Lj(g, y) : Vj(g, v, y)))
    return nt('span', r, {
      state: T,
      ref: [l, p],
      props: [{ children: w }, d],
      stateAttributesMapping: e5,
    })
  }),
  n5 = h.forwardRef(function (r, l) {
    const { className: a, render: u, ...f } = r,
      { store: d } = Mo(),
      m = he(d, Je.open),
      p = h.useMemo(() => ({ open: m }), [m])
    return nt('span', r, {
      state: p,
      ref: l,
      props: [{ 'aria-hidden': !0, children: '▼' }, f],
      stateAttributesMapping: Dd,
    })
  }),
  r5 = h.createContext(void 0),
  o5 = h.forwardRef(function (r, l) {
    const { store: a } = Mo(),
      u = he(a, Je.mounted),
      f = he(a, Je.forceMount)
    return u || f ? E.jsx(r5.Provider, { value: !0, children: E.jsx(wd, { ref: l, ...r }) }) : null
  }),
  sE = h.createContext(void 0)
function rb() {
  const e = h.useContext(sE)
  if (!e) throw new Error(Ht(59))
  return e
}
function Zf(e, r) {
  e && Object.assign(e.style, r)
}
const uE = { position: 'relative', maxHeight: '100%', overflowX: 'hidden', overflowY: 'auto' },
  l5 = { position: 'fixed' },
  i5 = h.forwardRef(function (r, l) {
    const {
        anchor: a,
        positionMethod: u = 'absolute',
        className: f,
        render: d,
        side: m = 'bottom',
        align: p = 'center',
        sideOffset: g = 0,
        alignOffset: v = 0,
        collisionBoundary: y = 'clipping-ancestors',
        collisionPadding: x,
        arrowPadding: T = 5,
        sticky: w = !1,
        disableAnchorTracking: S,
        alignItemWithTrigger: N = !0,
        collisionAvoidance: A = Ih,
        ...R
      } = r,
      {
        store: I,
        listRef: j,
        labelsRef: M,
        alignItemWithTriggerActiveRef: V,
        selectedItemTextRef: k,
        valuesRef: _,
        initialValueRef: ee,
        popupRef: ie,
        setValue: Q,
      } = Mo(),
      le = aE(),
      q = he(I, Je.open),
      Y = he(I, Je.mounted),
      F = he(I, Je.modal),
      z = he(I, Je.value),
      L = he(I, Je.openMethod),
      D = he(I, Je.positionerElement),
      $ = he(I, Je.triggerElement),
      oe = he(I, Je.isItemEqualToValue),
      O = h.useRef(null),
      P = h.useRef(null),
      [H, X] = h.useState(N),
      te = Y && H && L !== 'touch'
    ;(!Y && H !== N && X(N),
      Ne(() => {
        Y ||
          (Je.scrollUpArrowVisible(I.state) && I.set('scrollUpArrowVisible', !1),
          Je.scrollDownArrowVisible(I.state) && I.set('scrollDownArrowVisible', !1))
      }, [I, Y]),
      h.useImperativeHandle(V, () => te),
      Ed((te || F) && q && L !== 'touch', $))
    const re = Wh({
        anchor: a,
        floatingRootContext: le,
        positionMethod: u,
        mounted: Y,
        side: m,
        sideOffset: g,
        align: p,
        alignOffset: v,
        arrowPadding: T,
        collisionBoundary: y,
        collisionPadding: x,
        sticky: w,
        disableAnchorTracking: S ?? te,
        collisionAvoidance: A,
        keepMounted: !0,
      }),
      W = te ? 'none' : re.side,
      de = te ? l5 : re.positionerStyles,
      ve = h.useMemo(() => {
        const be = {}
        return (
          q || (be.pointerEvents = 'none'),
          { role: 'presentation', hidden: !Y, style: { ...de, ...be } }
        )
      }, [q, Y, de]),
      ue = h.useMemo(
        () => ({ open: q, side: W, align: re.align, anchorHidden: re.anchorHidden }),
        [q, W, re.align, re.anchorHidden]
      ),
      K = Te((be) => {
        I.set('positionerElement', be)
      }),
      xe = nt('div', r, { ref: [l, K], state: ue, stateAttributesMapping: oi, props: [ve, R] }),
      Ee = h.useRef(0),
      Fe = Te((be) => {
        if ((be.size === 0 && Ee.current === 0) || _.current.length === 0) return
        const Se = Ee.current
        if (((Ee.current = be.size), be.size === Se)) return
        const Le = De(ir)
        if (Se !== 0 && !I.state.multiple && z !== null && es(_.current, z, oe) === -1) {
          const _e = ee.current,
            je = _e != null && Ii(_.current, _e, oe) ? _e : null
          ;(Q(je, Le), je === null && (I.set('selectedIndex', null), (k.current = null)))
        }
        if (Se !== 0 && I.state.multiple && Array.isArray(z)) {
          const Oe = z.filter((_e) => Ii(_.current, _e, oe))
          ;(Oe.length !== z.length || Oe.some((_e) => !Ii(z, _e, oe))) &&
            (Q(Oe, Le), Oe.length === 0 && (I.set('selectedIndex', null), (k.current = null)))
        }
        if (q && te) {
          I.update({ scrollUpArrowVisible: !1, scrollDownArrowVisible: !1 })
          const Oe = { height: '' }
          ;(Zf(D, Oe), Zf(ie.current, Oe))
        }
      }),
      Re = h.useMemo(
        () => ({
          ...re,
          side: W,
          alignItemWithTriggerActive: te,
          setControlledAlignItemWithTrigger: X,
          scrollUpArrowRef: O,
          scrollDownArrowRef: P,
        }),
        [re, W, te, X]
      )
    return E.jsx(qh, {
      elementsRef: j,
      labelsRef: M,
      onMapChange: Fe,
      children: E.jsxs(sE.Provider, {
        value: Re,
        children: [Y && F && E.jsx(kd, { inert: jd(!q), cutout: $ }), xe],
      }),
    })
  })
function cE(e) {
  const r = e.currentTarget.getBoundingClientRect()
  return (
    r.top + 1 <= e.clientY &&
    e.clientY <= r.bottom - 1 &&
    r.left + 1 <= e.clientX &&
    e.clientX <= r.right - 1
  )
}
const a5 = { ...oi, ...ul },
  s5 = h.forwardRef(function (r, l) {
    const { render: a, className: u, ...f } = r,
      {
        store: d,
        popupRef: m,
        onOpenChangeComplete: p,
        setOpen: g,
        valueRef: v,
        selectedItemTextRef: y,
        keyboardActiveRef: x,
        multiple: T,
        handleScrollArrowVisibility: w,
        scrollHandlerRef: S,
      } = Mo(),
      {
        side: N,
        align: A,
        alignItemWithTriggerActive: R,
        setControlledAlignItemWithTrigger: I,
        scrollDownArrowRef: j,
        scrollUpArrowRef: M,
      } = rb(),
      V = XR() != null,
      k = aE(),
      _ = sn(),
      ee = he(d, Je.id),
      ie = he(d, Je.open),
      Q = he(d, Je.mounted),
      le = he(d, Je.popupProps),
      q = he(d, Je.transitionStatus),
      Y = he(d, Je.triggerElement),
      F = he(d, Je.positionerElement),
      z = he(d, Je.listElement),
      L = h.useRef(0),
      D = h.useRef(!1),
      $ = h.useRef(0),
      oe = h.useRef(!1),
      O = h.useRef({}),
      P = Qu(),
      H = Te((W) => {
        if (!F || !m.current || !oe.current) return
        if (D.current || !R) {
          w()
          return
        }
        const de = F.style.top === '0px',
          ve = F.style.bottom === '0px',
          ue = F.getBoundingClientRect().height,
          K = Gr(F),
          xe = getComputedStyle(F),
          Ee = parseFloat(xe.marginTop),
          Fe = parseFloat(xe.marginBottom),
          Re = K.documentElement.clientHeight - Ee - Fe,
          be = W.scrollTop,
          Se = W.scrollHeight,
          Le = W.clientHeight,
          Oe = Se - Le
        let _e = null,
          pe = null,
          je = !1
        if (de) {
          const Ce = Oe - be,
            Me = ue + Ce,
            we = Math.min(Me, Re)
          ;((_e = we), we !== Re ? (pe = Oe) : (je = !0))
        } else if (ve) {
          const Ce = be - 0,
            Me = ue + Ce,
            we = Math.min(Me, Re),
            Xe = Me - Re
          ;((_e = we), we !== Re ? (pe = 0) : ((je = !0), be < Oe && (pe = be - (Ce - Xe))))
        }
        ;(_e != null && (F.style.height = `${_e}px`),
          pe != null && (W.scrollTop = pe),
          je && (D.current = !0),
          w())
      })
    ;(h.useImperativeHandle(S, () => H, [H]),
      Ir({
        open: ie,
        ref: m,
        onComplete() {
          ie && p?.(!0)
        },
      }))
    const X = h.useMemo(() => ({ open: ie, transitionStatus: q, side: N, align: A }), [ie, q, N, A])
    ;(Ne(() => {
      !F ||
        !m.current ||
        Object.keys(O.current).length ||
        (O.current = {
          top: F.style.top || '0',
          left: F.style.left || '0',
          right: F.style.right,
          height: F.style.height,
          bottom: F.style.bottom,
          minHeight: F.style.minHeight,
          maxHeight: F.style.maxHeight,
          marginTop: F.style.marginTop,
          marginBottom: F.style.marginBottom,
        })
    }, [m, F]),
      Ne(() => {
        Q ||
          R ||
          ((oe.current = !1), (D.current = !1), (L.current = 0), ($.current = 0), Zf(F, O.current))
      }, [Q, R, F, m]),
      Ne(() => {
        const W = m.current
        if (!(!Q || !Y || !F || !W)) {
          if (!R) {
            ;((oe.current = !0), P.request(w))
            return
          }
          queueMicrotask(() => {
            const de = getComputedStyle(F),
              ve = getComputedStyle(W),
              ue = Gr(Y),
              K = xn(F),
              xe = Y.getBoundingClientRect(),
              Ee = F.getBoundingClientRect(),
              Fe = xe.left,
              Re = xe.height,
              be = z || W,
              Se = be.scrollHeight,
              Le = parseFloat(ve.borderBottomWidth),
              Oe = parseFloat(de.marginTop) || 10,
              _e = parseFloat(de.marginBottom) || 10,
              pe = parseFloat(de.minHeight) || 100,
              je = 5,
              Ce = 5,
              Me = 20,
              we = ue.documentElement.clientHeight - Oe - _e,
              Xe = ue.documentElement.clientWidth,
              We = we - xe.bottom + Re,
              Be = y.current,
              dt = v.current
            let Rt = 0,
              Dt = 0
            if (Be && dt) {
              const ft = dt.getBoundingClientRect(),
                Nn = Be.getBoundingClientRect(),
                Kn = ft.left - Fe,
                fr = Nn.left - Ee.left,
                st = ft.top - xe.top + ft.height / 2,
                Et = Nn.top - Ee.top + Nn.height / 2
              ;((Rt = Kn - fr), (Dt = Et - st))
            }
            const jt = We + Dt + _e + Le
            let rt = Math.min(we, jt)
            const ye = we - Oe - _e,
              Qe = jt - rt,
              it = Math.max(je, Fe + Rt),
              wt = Xe - Ce,
              ct = Math.max(0, it + Ee.width - wt)
            ;((F.style.left = `${it - ct}px`),
              (F.style.height = `${rt}px`),
              (F.style.maxHeight = 'auto'),
              (F.style.marginTop = `${Oe}px`),
              (F.style.marginBottom = `${_e}px`),
              (W.style.height = '100%'))
            const Yt = be.scrollHeight - be.clientHeight,
              Ze = Qe >= Yt
            Ze && (rt = Math.min(we, Ee.height) - (Qe - Yt))
            const tn = xe.top < Me || xe.bottom > we - Me || rt < Math.min(Se, pe),
              xt = (K.visualViewport?.scale ?? 1) !== 1 && pS
            if (tn || xt) {
              ;((oe.current = !0), Zf(F, O.current), Yr.flushSync(() => I(!1)))
              return
            }
            if (Ze) {
              const ft = Math.max(0, we - jt)
              ;((F.style.top = Ee.height >= ye ? '0' : `${ft}px`),
                (F.style.height = `${rt}px`),
                (be.scrollTop = be.scrollHeight - be.clientHeight),
                (L.current = Math.max(pe, rt)))
            } else ((F.style.bottom = '0'), (L.current = Math.max(pe, rt)), (be.scrollTop = Qe))
            ;(L.current === we && (D.current = !0),
              w(),
              setTimeout(() => {
                oe.current = !0
              }))
          })
        }
      }, [d, Q, F, Y, v, y, m, w, R, I, P, j, M, z]),
      h.useEffect(() => {
        if (!R || !F || !Q) return
        const W = xn(F)
        function de(ve) {
          g(!1, De(I3, ve))
        }
        return (
          W.addEventListener('resize', de),
          () => {
            W.removeEventListener('resize', de)
          }
        )
      }, [g, R, F, Q]))
    const te = {
        ...(z
          ? { role: 'presentation', 'aria-orientation': void 0 }
          : { role: 'listbox', 'aria-multiselectable': T || void 0, id: `${ee}-list` }),
        onKeyDown(W) {
          ;((x.current = !0), V && Ph.has(W.key) && W.stopPropagation())
        },
        onMouseMove() {
          x.current = !1
        },
        onPointerLeave(W) {
          if (cE(W) || W.pointerType === 'touch') return
          const de = W.currentTarget
          _.start(0, () => {
            ;(d.set('activeIndex', null), de.focus({ preventScroll: !0 }))
          })
        },
        onScroll(W) {
          z || S.current?.(W.currentTarget)
        },
        ...(R && { style: z ? { height: '100%' } : uE }),
      },
      re = nt('div', r, {
        ref: [l, m],
        state: X,
        stateAttributesMapping: a5,
        props: [le, te, eb(q), { className: !z && R ? Hg.className : void 0 }, f],
      })
    return E.jsxs(h.Fragment, {
      children: [
        Hg.element,
        E.jsx(Md, { context: k, modal: !1, disabled: !Q, restoreFocus: !0, children: re }),
      ],
    })
  }),
  u5 = h.forwardRef(function (r, l) {
    const { className: a, render: u, ...f } = r,
      { store: d, scrollHandlerRef: m } = Mo(),
      { alignItemWithTriggerActive: p } = rb(),
      g = he(d, Je.hasScrollArrows),
      v = he(d, Je.openMethod),
      y = he(d, Je.multiple),
      T = {
        id: `${he(d, Je.id)}-list`,
        role: 'listbox',
        'aria-multiselectable': y || void 0,
        onScroll(S) {
          m.current?.(S.currentTarget)
        },
        ...(p && { style: uE }),
        className: g && v !== 'touch' ? Hg.className : void 0,
      },
      w = Te((S) => {
        d.set('listElement', S)
      })
    return nt('div', r, { ref: [l, w], props: [T, f] })
  }),
  fE = h.createContext(void 0)
function ob() {
  const e = h.useContext(fE)
  if (!e) throw new Error(Ht(57))
  return e
}
const c5 = h.memo(
    h.forwardRef(function (r, l) {
      const {
          render: a,
          className: u,
          value: f = null,
          label: d,
          disabled: m = !1,
          nativeButton: p = !1,
          ...g
        } = r,
        v = h.useRef(null),
        y = na({ label: d, textRef: v, indexGuessBehavior: Yh.GuessFromOrder }),
        {
          store: x,
          getItemProps: T,
          setOpen: w,
          setValue: S,
          selectionRef: N,
          typingRef: A,
          valuesRef: R,
          keyboardActiveRef: I,
          multiple: j,
          highlightItemOnHover: M,
        } = Mo(),
        V = sn(),
        k = he(x, Je.isActive, y.index),
        _ = he(x, Je.isSelected, y.index, f),
        ee = he(x, Je.isSelectedByFocus, y.index),
        ie = he(x, Je.isItemEqualToValue),
        Q = y.index,
        le = Q !== -1,
        q = h.useRef(null),
        Y = an(Q)
      ;(Ne(() => {
        if (!le) return
        const re = R.current
        return (
          (re[Q] = f),
          () => {
            delete re[Q]
          }
        )
      }, [le, Q, f, R]),
        Ne(() => {
          if (!le) return
          const re = x.state.value
          let W = re
          ;(j && Array.isArray(re) && re.length > 0 && (W = re[re.length - 1]),
            W !== void 0 && rl(W, f, ie) && x.set('selectedIndex', Q))
        }, [le, Q, j, ie, x, f]))
      const F = h.useMemo(() => ({ disabled: m, selected: _, highlighted: k }), [m, _, k]),
        z = T({ active: k, selected: _ })
      ;((z.onFocus = void 0), (z.id = void 0))
      const L = h.useRef(null),
        D = h.useRef('mouse'),
        $ = h.useRef(!1),
        { getButtonProps: oe, buttonRef: O } = wo({
          disabled: m,
          focusableWhenDisabled: !0,
          native: p,
        })
      function P(re) {
        const W = x.state.value
        if (j) {
          const de = Array.isArray(W) ? W : [],
            ve = _ ? _R(de, f, ie) : [...de, f]
          S(ve, De(ql, re))
        } else (S(f, De(ql, re)), w(!1, De(ql, re)))
      }
      const H = {
          role: 'option',
          'aria-selected': _,
          'aria-disabled': m || void 0,
          tabIndex: k ? 0 : -1,
          onFocus() {
            x.set('activeIndex', Q)
          },
          onMouseEnter() {
            !I.current && x.state.selectedIndex === null && x.set('activeIndex', Q)
          },
          onMouseMove() {
            M && x.set('activeIndex', Q)
          },
          onMouseLeave(re) {
            !M ||
              I.current ||
              cE(re) ||
              V.start(0, () => {
                x.state.activeIndex === Q && x.set('activeIndex', null)
              })
          },
          onTouchStart() {
            N.current = { allowSelectedMouseUp: !1, allowUnselectedMouseUp: !1 }
          },
          onKeyDown(re) {
            ;((L.current = re.key), x.set('activeIndex', Q))
          },
          onClick(re) {
            ;(($.current = !1),
              !(re.type === 'keydown' && L.current === null) &&
                (m ||
                  (L.current === ' ' && A.current) ||
                  (D.current !== 'touch' && !k) ||
                  ((L.current = null), P(re.nativeEvent))))
          },
          onPointerEnter(re) {
            D.current = re.pointerType
          },
          onPointerDown(re) {
            ;((D.current = re.pointerType), ($.current = !0))
          },
          onMouseUp(re) {
            if (m) return
            if ($.current) {
              $.current = !1
              return
            }
            const W = !N.current.allowSelectedMouseUp && _,
              de = !N.current.allowUnselectedMouseUp && !_
            W || de || (D.current !== 'touch' && !k) || P(re.nativeEvent)
          },
        },
        X = nt('div', r, { ref: [O, l, y.ref, q], state: F, props: [z, H, g, oe] }),
        te = h.useMemo(
          () => ({ selected: _, indexRef: Y, textRef: v, selectedByFocus: ee, hasRegistered: le }),
          [_, Y, v, ee, le]
        )
      return E.jsx(fE.Provider, { value: te, children: X })
    })
  ),
  f5 = h.forwardRef(function (r, l) {
    const a = r.keepMounted ?? !1,
      { selected: u } = ob()
    return a || u ? E.jsx(d5, { ...r, ref: l }) : null
  }),
  d5 = h.memo(
    h.forwardRef((e, r) => {
      const { render: l, className: a, keepMounted: u, ...f } = e,
        { selected: d } = ob(),
        m = h.useRef(null),
        { transitionStatus: p, setMounted: g } = sl(d),
        v = h.useMemo(() => ({ selected: d, transitionStatus: p }), [d, p]),
        y = nt('span', e, {
          ref: [r, m],
          state: v,
          props: [{ 'aria-hidden': !0, children: '✔️' }, f],
          stateAttributesMapping: ul,
        })
      return (
        Ir({
          open: d,
          ref: m,
          onComplete() {
            d || g(!1)
          },
        }),
        y
      )
    })
  ),
  m5 = h.memo(
    h.forwardRef(function (r, l) {
      const { indexRef: a, textRef: u, selectedByFocus: f, hasRegistered: d } = ob(),
        { selectedItemTextRef: m } = Mo(),
        { className: p, render: g, ...v } = r,
        y = h.useCallback(
          (T) => {
            if (!T || !d) return
            const w = m.current === null || !m.current.isConnected
            ;(f || (w && a.current === 0)) && (m.current = T)
          },
          [m, a, f, d]
        )
      return nt('div', r, { ref: [y, l, u], props: v })
    })
  ),
  dE = h.forwardRef(function (r, l) {
    const { render: a, className: u, direction: f, keepMounted: d = !1, ...m } = r,
      {
        store: p,
        popupRef: g,
        listRef: v,
        handleScrollArrowVisibility: y,
        scrollArrowsMountedCountRef: x,
      } = Mo(),
      { side: T, scrollDownArrowRef: w, scrollUpArrowRef: S } = rb(),
      N = f === 'up' ? Je.scrollUpArrowVisible : Je.scrollDownArrowVisible,
      A = he(p, N),
      R = he(p, Je.openMethod),
      I = A && R !== 'touch',
      j = sn(),
      M = f === 'up' ? S : w,
      { transitionStatus: V, setMounted: k } = sl(I)
    ;(Ne(
      () => (
        (x.current += 1),
        p.state.hasScrollArrows || p.set('hasScrollArrows', !0),
        () => {
          ;((x.current = Math.max(0, x.current - 1)),
            x.current === 0 && p.state.hasScrollArrows && p.set('hasScrollArrows', !1))
        }
      ),
      [p, x]
    ),
      Ir({
        open: I,
        ref: M,
        onComplete() {
          I || k(!1)
        },
      }))
    const _ = h.useMemo(
        () => ({ direction: f, visible: I, side: T, transitionStatus: V }),
        [f, I, T, V]
      ),
      ie = nt('div', r, {
        ref: [l, M],
        state: _,
        props: [
          {
            'aria-hidden': !0,
            children: f === 'up' ? '▲' : '▼',
            style: { position: 'absolute' },
            onMouseMove(le) {
              if ((le.movementX === 0 && le.movementY === 0) || j.isStarted()) return
              p.set('activeIndex', null)
              function q() {
                const Y = p.state.listElement ?? g.current
                if (!Y) return
                ;(p.set('activeIndex', null), y())
                const F = Y.scrollTop === 0,
                  z = Math.round(Y.scrollTop + Y.clientHeight) >= Y.scrollHeight
                if (
                  (v.current.length === 0 &&
                    (f === 'up'
                      ? p.set('scrollUpArrowVisible', !F)
                      : p.set('scrollDownArrowVisible', !z)),
                  (f === 'up' && F) || (f === 'down' && z))
                ) {
                  j.clear()
                  return
                }
                if ((p.state.listElement || g.current) && v.current && v.current.length > 0) {
                  const D = v.current,
                    $ = M.current?.offsetHeight || 0
                  if (f === 'up') {
                    let oe = 0
                    const O = Y.scrollTop + $
                    for (let H = 0; H < D.length; H += 1) {
                      const X = D[H]
                      if (X && X.offsetTop >= O) {
                        oe = H
                        break
                      }
                    }
                    const P = Math.max(0, oe - 1)
                    if (P < oe) {
                      const H = D[P]
                      H && (Y.scrollTop = Math.max(0, H.offsetTop - $))
                    } else Y.scrollTop = 0
                  } else {
                    let oe = D.length - 1
                    const O = Y.scrollTop + Y.clientHeight - $
                    for (let H = 0; H < D.length; H += 1) {
                      const X = D[H]
                      if (X && X.offsetTop + X.offsetHeight > O) {
                        oe = Math.max(0, H - 1)
                        break
                      }
                    }
                    const P = Math.min(D.length - 1, oe + 1)
                    if (P > oe) {
                      const H = D[P]
                      H && (Y.scrollTop = H.offsetTop + H.offsetHeight - Y.clientHeight + $)
                    } else Y.scrollTop = Y.scrollHeight - Y.clientHeight
                  }
                }
                j.start(40, q)
              }
              j.start(40, q)
            },
            onMouseLeave() {
              j.clear()
            },
          },
          m,
        ],
      })
    return I || d ? ie : null
  }),
  p5 = h.forwardRef(function (r, l) {
    return E.jsx(dE, { ...r, ref: l, direction: 'down' })
  }),
  g5 = h.forwardRef(function (r, l) {
    return E.jsx(dE, { ...r, ref: l, direction: 'up' })
  }),
  h5 = h.createContext(void 0),
  b5 = h.forwardRef(function (r, l) {
    const { className: a, render: u, ...f } = r,
      [d, m] = h.useState(),
      p = h.useMemo(() => ({ labelId: d, setLabelId: m }), [d, m]),
      g = nt('div', r, { ref: l, props: [{ role: 'group', 'aria-labelledby': d }, f] })
    return E.jsx(h5.Provider, { value: p, children: g })
  })
function mE({ className: e, type: r, ...l }) {
  return E.jsx(Q4, {
    type: r,
    'data-slot': 'input',
    className: Ye(
      'dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
      e
    ),
    ...l,
  })
}
function y5({ className: e, ...r }) {
  return E.jsx('textarea', {
    'data-slot': 'textarea',
    className: Ye(
      'border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-[3px] aria-invalid:ring-[3px] md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50',
      e
    ),
    ...r,
  })
}
function v5({ className: e, ...r }) {
  return E.jsx('div', {
    'data-slot': 'input-group',
    role: 'group',
    className: Ye(
      'border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 h-9 rounded-md border shadow-xs transition-[color,box-shadow] has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot][aria-invalid=true]]:ring-[3px] has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 [[data-slot=combobox-content]_&]:focus-within:border-inherit [[data-slot=combobox-content]_&]:focus-within:ring-0 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto',
      e
    ),
    ...r,
  })
}
const x5 = Wu(
  "text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none",
  {
    variants: {
      align: {
        'inline-start': 'pl-2 has-[>button]:ml-[-0.25rem] has-[>kbd]:ml-[-0.15rem] order-first',
        'inline-end': 'pr-2 has-[>button]:mr-[-0.25rem] has-[>kbd]:mr-[-0.15rem] order-last',
        'block-start':
          'px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start',
        'block-end':
          'px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start',
      },
    },
    defaultVariants: { align: 'inline-start' },
  }
)
function S5({ className: e, align: r = 'inline-start', ...l }) {
  return E.jsx('div', {
    role: 'group',
    'data-slot': 'input-group-addon',
    'data-align': r,
    className: Ye(x5({ align: r }), e),
    onClick: (a) => {
      a.target.closest('button') || a.currentTarget.parentElement?.querySelector('input')?.focus()
    },
    ...l,
  })
}
const R5 = Wu('gap-2 text-sm shadow-none flex items-center', {
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
      sm: '',
      'icon-xs': 'size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0',
      'icon-sm': 'size-8 p-0 has-[>svg]:p-0',
    },
  },
  defaultVariants: { size: 'xs' },
})
function pE({ className: e, type: r = 'button', variant: l = 'ghost', size: a = 'xs', ...u }) {
  return E.jsx(_i, { type: r, 'data-size': a, variant: l, className: Ye(R5({ size: a }), e), ...u })
}
function E5({ className: e, ...r }) {
  return E.jsx(mE, {
    'data-slot': 'input-group-control',
    className: Ye(
      'rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent flex-1',
      e
    ),
    ...r,
  })
}
const T5 = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  C5 = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, l, a) => (a ? a.toUpperCase() : l.toLowerCase())),
  Wx = (e) => {
    const r = C5(e)
    return r.charAt(0).toUpperCase() + r.slice(1)
  },
  gE = (...e) =>
    e
      .filter((r, l, a) => !!r && r.trim() !== '' && a.indexOf(r) === l)
      .join(' ')
      .trim(),
  w5 = (e) => {
    for (const r in e) if (r.startsWith('aria-') || r === 'role' || r === 'title') return !0
  }
var M5 = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}
const O5 = h.forwardRef(
  (
    {
      color: e = 'currentColor',
      size: r = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: a,
      className: u = '',
      children: f,
      iconNode: d,
      ...m
    },
    p
  ) =>
    h.createElement(
      'svg',
      {
        ref: p,
        ...M5,
        width: r,
        height: r,
        stroke: e,
        strokeWidth: a ? (Number(l) * 24) / Number(r) : l,
        className: gE('lucide', u),
        ...(!f && !w5(m) && { 'aria-hidden': 'true' }),
        ...m,
      },
      [...d.map(([g, v]) => h.createElement(g, v)), ...(Array.isArray(f) ? f : [f])]
    )
)
const St = (e, r) => {
  const l = h.forwardRef(({ className: a, ...u }, f) =>
    h.createElement(O5, {
      ref: f,
      iconNode: r,
      className: gE(`lucide-${T5(Wx(e))}`, `lucide-${e}`, a),
      ...u,
    })
  )
  return ((l.displayName = Wx(e)), l)
}
const A5 = [
    ['path', { d: 'M10.268 21a2 2 0 0 0 3.464 0', key: 'vwvbt9' }],
    [
      'path',
      {
        d: 'M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326',
        key: '11g9vi',
      },
    ],
  ],
  e1 = St('bell', A5)
const N5 = [['path', { d: 'm7 7 10 10-5 5V2l5 5L7 17', key: '1q5490' }]],
  z5 = St('bluetooth', N5)
const I5 = [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]],
  Bd = St('check', I5)
const D5 = [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]],
  lb = St('chevron-down', D5)
const j5 = [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]],
  k5 = St('chevron-right', j5)
const _5 = [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]],
  U5 = St('chevron-up', _5)
const V5 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
    ['path', { d: 'M12 17h.01', key: 'p32p05' }],
  ],
  L5 = St('circle-question-mark', V5)
const H5 = [
    ['rect', { width: '20', height: '14', x: '2', y: '5', rx: '2', key: 'ynyp8z' }],
    ['line', { x1: '2', x2: '22', y1: '10', y2: '10', key: '1b3vmo' }],
  ],
  B5 = St('credit-card', H5)
const F5 = [
    ['path', { d: 'M12 15V3', key: 'm9g1x1' }],
    ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
    ['path', { d: 'm7 10 5 5 5-5', key: 'brsn70' }],
  ],
  P5 = St('download', F5)
const q5 = [
    ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
    ['circle', { cx: '12', cy: '5', r: '1', key: 'gxeob9' }],
    ['circle', { cx: '12', cy: '19', r: '1', key: 'lyex9k' }],
  ],
  G5 = St('ellipsis-vertical', q5)
const Y5 = [
    ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
    ['circle', { cx: '19', cy: '12', r: '1', key: '1wjl8i' }],
    ['circle', { cx: '5', cy: '12', r: '1', key: '1pcz8c' }],
  ],
  $5 = St('ellipsis', Y5)
const K5 = [
    [
      'path',
      {
        d: 'M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0',
        key: '1nclc0',
      },
    ],
    ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
  ],
  X5 = St('eye', K5)
const Q5 = [
    [
      'path',
      {
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
        key: '1oefj6',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    ['path', { d: 'M10 12.5 8 15l2 2.5', key: '1tg20x' }],
    ['path', { d: 'm14 12.5 2 2.5-2 2.5', key: 'yinavb' }],
  ],
  Af = St('file-code', Q5)
const Z5 = [
    [
      'path',
      {
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
        key: '1oefj6',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    ['path', { d: 'M10 9H8', key: 'b1mrlr' }],
    ['path', { d: 'M16 13H8', key: 't4e002' }],
    ['path', { d: 'M16 17H8', key: 'z1uh3a' }],
  ],
  J5 = St('file-text', Z5)
const W5 = [
    [
      'path',
      {
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
        key: '1oefj6',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
  ],
  ek = St('file', W5)
const tk = [
    [
      'path',
      {
        d: 'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
        key: 'usdka0',
      },
    ],
  ],
  nk = St('folder-open', tk)
const rk = [
    [
      'path',
      {
        d: 'M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1',
        key: '1bw5m7',
      },
    ],
    ['path', { d: 'm21 21-1.9-1.9', key: '1g2n9r' }],
    ['circle', { cx: '17', cy: '17', r: '3', key: '18b49y' }],
  ],
  ok = St('folder-search', rk)
const lk = [
    [
      'path',
      {
        d: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
        key: '1kt360',
      },
    ],
  ],
  ik = St('folder', lk)
const ak = [
    ['path', { d: 'M10 8h.01', key: '1r9ogq' }],
    ['path', { d: 'M12 12h.01', key: '1mp3jc' }],
    ['path', { d: 'M14 8h.01', key: '1primd' }],
    ['path', { d: 'M16 12h.01', key: '1l6xoz' }],
    ['path', { d: 'M18 8h.01', key: 'emo2bl' }],
    ['path', { d: 'M6 8h.01', key: 'x9i8wu' }],
    ['path', { d: 'M7 16h10', key: 'wp8him' }],
    ['path', { d: 'M8 12h.01', key: 'czm47f' }],
    ['rect', { width: '20', height: '16', x: '2', y: '4', rx: '2', key: '18n3k1' }],
  ],
  sk = St('keyboard', ak)
const uk = [
    ['path', { d: 'm5 8 6 6', key: '1wu5hv' }],
    ['path', { d: 'm4 14 6-6 2-3', key: '1k1g8d' }],
    ['path', { d: 'M2 5h12', key: 'or177f' }],
    ['path', { d: 'M7 2h1', key: '1t2jsx' }],
    ['path', { d: 'm22 22-5-10-5 10', key: 'don7ne' }],
    ['path', { d: 'M14 18h6', key: '1m8k6r' }],
  ],
  ck = St('languages', uk)
const fk = [
    ['path', { d: 'm16 17 5-5-5-5', key: '1bji2h' }],
    ['path', { d: 'M21 12H9', key: 'dn1m92' }],
    ['path', { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', key: '1uf3rs' }],
  ],
  dk = St('log-out', fk)
const mk = [
    ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7', key: '132q7q' }],
    ['rect', { x: '2', y: '4', width: '20', height: '16', rx: '2', key: 'izxlao' }],
  ],
  pk = St('mail', mk)
const gk = [
    ['rect', { width: '20', height: '14', x: '2', y: '3', rx: '2', key: '48i651' }],
    ['line', { x1: '8', x2: '16', y1: '21', y2: '21', key: '1svkeh' }],
    ['line', { x1: '12', x2: '12', y1: '17', y2: '21', key: 'vw1qmm' }],
  ],
  hk = St('monitor', gk)
const bk = [
    [
      'path',
      {
        d: 'M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401',
        key: 'kfwtm',
      },
    ],
  ],
  yk = St('moon', bk)
const vk = [
    [
      'path',
      {
        d: 'M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z',
        key: 'e79jfc',
      },
    ],
    ['circle', { cx: '13.5', cy: '6.5', r: '.5', fill: 'currentColor', key: '1okk4w' }],
    ['circle', { cx: '17.5', cy: '10.5', r: '.5', fill: 'currentColor', key: 'f64h9f' }],
    ['circle', { cx: '6.5', cy: '12.5', r: '.5', fill: 'currentColor', key: 'qy21gx' }],
    ['circle', { cx: '8.5', cy: '7.5', r: '.5', fill: 'currentColor', key: 'fotxhn' }],
  ],
  xk = St('palette', vk)
const Sk = [
    ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
    ['path', { d: 'M3 9h18', key: '1pudct' }],
    ['path', { d: 'M9 21V9', key: '1oto5p' }],
  ],
  Rk = St('panels-top-left', Sk)
const Ek = [
    ['path', { d: 'M5 12h14', key: '1ays0h' }],
    ['path', { d: 'M12 5v14', key: 's699le' }],
  ],
  Tk = St('plus', Ek)
const Ck = [
    [
      'path',
      {
        d: 'M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z',
        key: '1c8476',
      },
    ],
    ['path', { d: 'M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7', key: '1ydtos' }],
    ['path', { d: 'M7 3v4a1 1 0 0 0 1 1h7', key: 't51u73' }],
  ],
  wk = St('save', Ck)
const Mk = [
    [
      'path',
      {
        d: 'M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915',
        key: '1i5ecw',
      },
    ],
    ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
  ],
  Ok = St('settings', Mk)
const Ak = [
    [
      'path',
      {
        d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
        key: 'oel41y',
      },
    ],
  ],
  Nk = St('shield', Ak)
const zk = [
    ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
    ['path', { d: 'M12 2v2', key: 'tus03m' }],
    ['path', { d: 'M12 20v2', key: '1lh1kg' }],
    ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
    ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
    ['path', { d: 'M2 12h2', key: '1t8f8n' }],
    ['path', { d: 'M20 12h2', key: '1q8mjw' }],
    ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
    ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
  ],
  Ik = St('sun', zk)
const Dk = [
    ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }],
    ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
  ],
  jk = St('user', Dk)
const kk = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  _k = St('x', kk),
  Uk = b4
function Vk({ className: e, children: r, ...l }) {
  return E.jsxs(Yj, {
    'data-slot': 'combobox-trigger',
    className: Ye("[&_svg:not([class*='size-'])]:size-4", e),
    ...l,
    children: [r, E.jsx(lb, { className: 'text-muted-foreground size-4 pointer-events-none' })],
  })
}
function Lk({ className: e, ...r }) {
  return E.jsx(Jj, {
    'data-slot': 'combobox-clear',
    render: E.jsx(pE, { variant: 'ghost', size: 'icon-xs' }),
    className: Ye(e),
    ...r,
    children: E.jsx(_k, { className: 'pointer-events-none' }),
  })
}
function Hk({
  className: e,
  children: r,
  disabled: l = !1,
  showTrigger: a = !0,
  showClear: u = !1,
  ...f
}) {
  return E.jsxs(v5, {
    className: Ye('w-auto', e),
    children: [
      E.jsx(Qj, { render: E.jsx(E5, { disabled: l }), ...f }),
      E.jsxs(S5, {
        align: 'inline-end',
        children: [
          a &&
            E.jsx(pE, {
              size: 'icon-xs',
              variant: 'ghost',
              render: E.jsx(Vk, {}),
              'data-slot': 'input-group-button',
              className:
                'group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent',
              disabled: l,
            }),
          u && E.jsx(Lk, { disabled: l }),
        ],
      }),
      r,
    ],
  })
}
function Bk({
  className: e,
  side: r = 'bottom',
  sideOffset: l = 6,
  align: a = 'start',
  alignOffset: u = 0,
  anchor: f,
  ...d
}) {
  return E.jsx(o4, {
    children: E.jsx(u4, {
      side: r,
      sideOffset: l,
      align: a,
      alignOffset: u,
      anchor: f,
      className: 'isolate z-50',
      children: E.jsx(f4, {
        'data-slot': 'combobox-content',
        'data-chips': !!f,
        className: Ye(
          'bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:border-input/30 max-h-72 min-w-36 overflow-hidden rounded-md shadow-md ring-1 duration-100 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:shadow-none group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) data-[chips=true]:min-w-(--anchor-width)',
          e
        ),
        ...d,
      }),
    }),
  })
}
function Fk({ className: e, ...r }) {
  return E.jsx(n4, {
    'data-slot': 'combobox-list',
    className: Ye(
      'no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto p-1 data-empty:p-0 overflow-y-auto overscroll-contain',
      e
    ),
    ...r,
  })
}
function Pk({ className: e, children: r, ...l }) {
  return E.jsxs(p4, {
    'data-slot': 'combobox-item',
    className: Ye(
      "data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      e
    ),
    ...l,
    children: [
      r,
      E.jsx(y4, {
        render: E.jsx('span', {
          className: 'pointer-events-none absolute right-2 flex size-4 items-center justify-center',
        }),
        children: E.jsx(Bd, { className: 'pointer-events-none' }),
      }),
    ],
  })
}
function qk({ className: e, ...r }) {
  return E.jsx(g4, {
    'data-slot': 'combobox-empty',
    className: Ye(
      'text-muted-foreground hidden w-full justify-center py-2 text-center text-sm group-data-empty/combobox-content:flex',
      e
    ),
    ...r,
  })
}
function Gk({ ...e }) {
  return E.jsx(rE, { 'data-slot': 'dropdown-menu', ...e })
}
function gu({ ...e }) {
  return E.jsx(ZR, { 'data-slot': 'dropdown-menu-portal', ...e })
}
function Yk({ ...e }) {
  return E.jsx(G4, { 'data-slot': 'dropdown-menu-trigger', ...e })
}
function hE({
  align: e = 'start',
  alignOffset: r = 0,
  side: l = 'bottom',
  sideOffset: a = 4,
  className: u,
  ...f
}) {
  return E.jsx(ZR, {
    children: E.jsx(I4, {
      className: 'isolate z-50 outline-none',
      align: e,
      alignOffset: r,
      side: l,
      sideOffset: a,
      children: E.jsx(N4, {
        'data-slot': 'dropdown-menu-content',
        className: Ye(
          'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-md p-1 shadow-md ring-1 duration-100 z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto outline-none data-closed:overflow-hidden',
          u
        ),
        ...f,
      }),
    }),
  })
}
function no({ ...e }) {
  return E.jsx(C4, { 'data-slot': 'dropdown-menu-group', ...e })
}
function Mi({ className: e, inset: r, ...l }) {
  return E.jsx(w4, {
    'data-slot': 'dropdown-menu-label',
    'data-inset': r,
    className: Ye('text-muted-foreground px-2 py-1.5 text-xs font-medium data-[inset]:pl-8', e),
    ...l,
  })
}
function Vn({ className: e, inset: r, variant: l = 'default', ...a }) {
  return E.jsx(M4, {
    'data-slot': 'dropdown-menu-item',
    'data-inset': r,
    'data-variant': l,
    className: Ye(
      "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-sm px-2 py-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      e
    ),
    ...a,
  })
}
function hu({ ...e }) {
  return E.jsx(B4, { 'data-slot': 'dropdown-menu-sub', ...e })
}
function bu({ className: e, inset: r, children: l, ...a }) {
  return E.jsxs(K4, {
    'data-slot': 'dropdown-menu-sub-trigger',
    'data-inset': r,
    className: Ye(
      "focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-sm px-2 py-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 flex cursor-default items-center outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      e
    ),
    ...a,
    children: [l, E.jsx(k5, { className: 'ml-auto' })],
  })
}
function yu({
  align: e = 'start',
  alignOffset: r = -3,
  side: l = 'right',
  sideOffset: a = 0,
  className: u,
  ...f
}) {
  return E.jsx(hE, {
    'data-slot': 'dropdown-menu-sub-content',
    className: Ye(
      'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-[96px] rounded-md p-1 shadow-lg ring-1 duration-100 w-auto',
      u
    ),
    align: e,
    alignOffset: r,
    side: l,
    sideOffset: a,
    ...f,
  })
}
function Nf({ className: e, children: r, checked: l, ...a }) {
  return E.jsxs(R4, {
    'data-slot': 'dropdown-menu-checkbox-item',
    className: Ye(
      "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      e
    ),
    checked: l,
    ...a,
    children: [
      E.jsx('span', {
        className:
          'pointer-events-none absolute right-2 flex items-center justify-center pointer-events-none',
        'data-slot': 'dropdown-menu-checkbox-item-indicator',
        children: E.jsx(E4, { children: E.jsx(Bd, {}) }),
      }),
      r,
    ],
  })
}
function $k({ ...e }) {
  return E.jsx(j4, { 'data-slot': 'dropdown-menu-radio-group', ...e })
}
function yg({ className: e, children: r, ...l }) {
  return E.jsxs(_4, {
    'data-slot': 'dropdown-menu-radio-item',
    className: Ye(
      "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      e
    ),
    ...l,
    children: [
      E.jsx('span', {
        className:
          'pointer-events-none absolute right-2 flex items-center justify-center pointer-events-none',
        'data-slot': 'dropdown-menu-radio-item-indicator',
        children: E.jsx(U4, { children: E.jsx(Bd, {}) }),
      }),
      r,
    ],
  })
}
function Oi({ className: e, ...r }) {
  return E.jsx(h4, {
    'data-slot': 'dropdown-menu-separator',
    className: Ye('bg-border -mx-1 my-1 h-px', e),
    ...r,
  })
}
function Ha({ className: e, ...r }) {
  return E.jsx('span', {
    'data-slot': 'dropdown-menu-shortcut',
    className: Ye(
      'text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground ml-auto text-xs tracking-widest',
      e
    ),
    ...r,
  })
}
function Kk({ className: e, ...r }) {
  return E.jsx('label', {
    'data-slot': 'label',
    className: Ye(
      'gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed',
      e
    ),
    ...r,
  })
}
function Xk({ className: e, ...r }) {
  return E.jsx('div', {
    'data-slot': 'field-group',
    className: Ye(
      'gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4 group/field-group @container/field-group flex w-full flex-col',
      e
    ),
    ...r,
  })
}
const Qk = Wu('data-[invalid=true]:text-destructive gap-3 group/field flex w-full', {
  variants: {
    orientation: {
      vertical: 'flex-col [&>*]:w-full [&>.sr-only]:w-auto',
      horizontal:
        'flex-row items-center [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
      responsive:
        'flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
    },
  },
  defaultVariants: { orientation: 'vertical' },
})
function vu({ className: e, orientation: r = 'vertical', ...l }) {
  return E.jsx('div', {
    role: 'group',
    'data-slot': 'field',
    'data-orientation': r,
    className: Ye(Qk({ orientation: r }), e),
    ...l,
  })
}
function zf({ className: e, ...r }) {
  return E.jsx(Kk, {
    'data-slot': 'field-label',
    className: Ye(
      'has-data-checked:bg-primary/5 has-data-checked:border-primary dark:has-data-checked:bg-primary/10 gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-3 group/field-label peer/field-label flex w-fit leading-snug',
      'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col',
      e
    ),
    ...r,
  })
}
const Zk = Z4
function Jk({ className: e, ...r }) {
  return E.jsx(b5, { 'data-slot': 'select-group', className: Ye('scroll-my-1 p-1', e), ...r })
}
function Wk({ className: e, ...r }) {
  return E.jsx(t5, { 'data-slot': 'select-value', className: Ye('flex flex-1 text-left', e), ...r })
}
function e_({ className: e, size: r = 'default', children: l, ...a }) {
  return E.jsxs(W4, {
    'data-slot': 'select-trigger',
    'data-size': r,
    className: Ye(
      "border-input data-[placeholder]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-md border bg-transparent py-2 pr-2 pl-2.5 text-sm shadow-xs transition-[color,box-shadow] focus-visible:ring-[3px] aria-invalid:ring-[3px] data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:flex *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
      e
    ),
    ...a,
    children: [
      l,
      E.jsx(n5, {
        render: E.jsx(lb, { className: 'text-muted-foreground size-4 pointer-events-none' }),
      }),
    ],
  })
}
function t_({
  className: e,
  children: r,
  side: l = 'bottom',
  sideOffset: a = 4,
  align: u = 'center',
  alignOffset: f = 0,
  alignItemWithTrigger: d = !0,
  ...m
}) {
  return E.jsx(o5, {
    children: E.jsx(i5, {
      side: l,
      sideOffset: a,
      align: u,
      alignOffset: f,
      alignItemWithTrigger: d,
      className: 'isolate z-50',
      children: E.jsxs(s5, {
        'data-slot': 'select-content',
        className: Ye(
          'bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-md shadow-md ring-1 duration-100 relative isolate z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto',
          e
        ),
        ...m,
        children: [E.jsx(r_, {}), E.jsx(u5, { children: r }), E.jsx(o_, {})],
      }),
    }),
  })
}
function n_({ className: e, children: r, ...l }) {
  return E.jsxs(c5, {
    'data-slot': 'select-item',
    className: Ye(
      "focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      e
    ),
    ...l,
    children: [
      E.jsx(m5, { className: 'flex flex-1 gap-2 shrink-0 whitespace-nowrap', children: r }),
      E.jsx(f5, {
        render: E.jsx('span', {
          className: 'pointer-events-none absolute right-2 flex size-4 items-center justify-center',
        }),
        children: E.jsx(Bd, { className: 'pointer-events-none' }),
      }),
    ],
  })
}
function r_({ className: e, ...r }) {
  return E.jsx(g5, {
    'data-slot': 'select-scroll-up-button',
    className: Ye(
      "bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4 top-0 w-full",
      e
    ),
    ...r,
    children: E.jsx(U5, {}),
  })
}
function o_({ className: e, ...r }) {
  return E.jsx(p5, {
    'data-slot': 'select-scroll-down-button',
    className: Ye(
      "bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4 bottom-0 w-full",
      e
    ),
    ...r,
    children: E.jsx(lb, {}),
  })
}
function l_() {
  return E.jsxs(mz, { children: [E.jsx(i_, {}), E.jsx(s_, {})] })
}
function i_() {
  return E.jsx(fS, {
    title: 'Card',
    className: 'items-center justify-center',
    children: E.jsxs(CR, {
      className: 'relative w-full max-w-sm overflow-hidden pt-0',
      children: [
        E.jsx('div', {
          className: 'bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color',
        }),
        E.jsx('img', {
          src: 'https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Photo by mymind on Unsplash',
          title: 'Photo by mymind on Unsplash',
          className: 'relative z-20 aspect-video w-full object-cover brightness-60 grayscale',
        }),
        E.jsxs(wR, {
          children: [
            E.jsx(MR, { children: 'Observability Plus is replacing Monitoring' }),
            E.jsx(OR, {
              children:
                'Switch to the improved way to explore your data, with natural language. Monitoring will no longer be available on the Pro plan in November, 2025',
            }),
          ],
        }),
        E.jsxs(Mj, {
          children: [
            E.jsxs(cj, {
              children: [
                E.jsxs(fj, {
                  render: E.jsx(_i, {}),
                  children: [E.jsx(Tk, { 'data-icon': 'inline-start' }), 'Show Dialog'],
                }),
                E.jsxs(pj, {
                  size: 'sm',
                  children: [
                    E.jsxs(gj, {
                      children: [
                        E.jsx(bj, { children: E.jsx(z5, {}) }),
                        E.jsx(yj, { children: 'Allow accessory to connect?' }),
                        E.jsx(vj, {
                          children:
                            'Do you want to allow the USB accessory to connect to this device?',
                        }),
                      ],
                    }),
                    E.jsxs(hj, {
                      children: [
                        E.jsx(Sj, { children: "Don't allow" }),
                        E.jsx(xj, { children: 'Allow' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            E.jsx(Tj, { variant: 'secondary', className: 'ml-auto', children: 'Warning' }),
          ],
        }),
      ],
    }),
  })
}
const a_ = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'],
  t1 = [
    { label: 'Developer', value: 'developer' },
    { label: 'Designer', value: 'designer' },
    { label: 'Manager', value: 'manager' },
    { label: 'Other', value: 'other' },
  ]
function s_() {
  const [e, r] = h.useState({ email: !0, sms: !1, push: !0 }),
    [l, a] = h.useState('light')
  return E.jsx(fS, {
    title: 'Form',
    children: E.jsxs(CR, {
      className: 'w-full max-w-md',
      children: [
        E.jsxs(wR, {
          children: [
            E.jsx(MR, { children: 'User Information' }),
            E.jsx(OR, { children: 'Please fill in your details below' }),
            E.jsx(Cj, {
              children: E.jsxs(Gk, {
                children: [
                  E.jsxs(Yk, {
                    render: E.jsx(_i, { variant: 'ghost', size: 'icon' }),
                    children: [
                      E.jsx(G5, {}),
                      E.jsx('span', { className: 'sr-only', children: 'More options' }),
                    ],
                  }),
                  E.jsxs(hE, {
                    align: 'end',
                    className: 'w-56',
                    children: [
                      E.jsxs(no, {
                        children: [
                          E.jsx(Mi, { children: 'File' }),
                          E.jsxs(Vn, {
                            children: [E.jsx(ek, {}), 'New File', E.jsx(Ha, { children: '⌘N' })],
                          }),
                          E.jsxs(Vn, {
                            children: [E.jsx(ik, {}), 'New Folder', E.jsx(Ha, { children: '⇧⌘N' })],
                          }),
                          E.jsxs(hu, {
                            children: [
                              E.jsxs(bu, { children: [E.jsx(nk, {}), 'Open Recent'] }),
                              E.jsx(gu, {
                                children: E.jsxs(yu, {
                                  children: [
                                    E.jsxs(no, {
                                      children: [
                                        E.jsx(Mi, { children: 'Recent Projects' }),
                                        E.jsxs(Vn, { children: [E.jsx(Af, {}), 'Project Alpha'] }),
                                        E.jsxs(Vn, { children: [E.jsx(Af, {}), 'Project Beta'] }),
                                        E.jsxs(hu, {
                                          children: [
                                            E.jsxs(bu, {
                                              children: [E.jsx($5, {}), 'More Projects'],
                                            }),
                                            E.jsx(gu, {
                                              children: E.jsxs(yu, {
                                                children: [
                                                  E.jsxs(Vn, {
                                                    children: [E.jsx(Af, {}), 'Project Gamma'],
                                                  }),
                                                  E.jsxs(Vn, {
                                                    children: [E.jsx(Af, {}), 'Project Delta'],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    E.jsx(Oi, {}),
                                    E.jsx(no, {
                                      children: E.jsxs(Vn, {
                                        children: [E.jsx(ok, {}), 'Browse...'],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          E.jsx(Oi, {}),
                          E.jsxs(Vn, {
                            children: [E.jsx(wk, {}), 'Save', E.jsx(Ha, { children: '⌘S' })],
                          }),
                          E.jsxs(Vn, {
                            children: [E.jsx(P5, {}), 'Export', E.jsx(Ha, { children: '⇧⌘E' })],
                          }),
                        ],
                      }),
                      E.jsx(Oi, {}),
                      E.jsxs(no, {
                        children: [
                          E.jsx(Mi, { children: 'View' }),
                          E.jsxs(Nf, {
                            checked: e.email,
                            onCheckedChange: (u) => r({ ...e, email: u === !0 }),
                            children: [E.jsx(X5, {}), 'Show Sidebar'],
                          }),
                          E.jsxs(Nf, {
                            checked: e.sms,
                            onCheckedChange: (u) => r({ ...e, sms: u === !0 }),
                            children: [E.jsx(Rk, {}), 'Show Status Bar'],
                          }),
                          E.jsxs(hu, {
                            children: [
                              E.jsxs(bu, { children: [E.jsx(xk, {}), 'Theme'] }),
                              E.jsx(gu, {
                                children: E.jsx(yu, {
                                  children: E.jsxs(no, {
                                    children: [
                                      E.jsx(Mi, { children: 'Appearance' }),
                                      E.jsxs($k, {
                                        value: l,
                                        onValueChange: a,
                                        children: [
                                          E.jsxs(yg, {
                                            value: 'light',
                                            children: [E.jsx(Ik, {}), 'Light'],
                                          }),
                                          E.jsxs(yg, {
                                            value: 'dark',
                                            children: [E.jsx(yk, {}), 'Dark'],
                                          }),
                                          E.jsxs(yg, {
                                            value: 'system',
                                            children: [E.jsx(hk, {}), 'System'],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      E.jsx(Oi, {}),
                      E.jsxs(no, {
                        children: [
                          E.jsx(Mi, { children: 'Account' }),
                          E.jsxs(Vn, {
                            children: [E.jsx(jk, {}), 'Profile', E.jsx(Ha, { children: '⇧⌘P' })],
                          }),
                          E.jsxs(Vn, { children: [E.jsx(B5, {}), 'Billing'] }),
                          E.jsxs(hu, {
                            children: [
                              E.jsxs(bu, { children: [E.jsx(Ok, {}), 'Settings'] }),
                              E.jsx(gu, {
                                children: E.jsxs(yu, {
                                  children: [
                                    E.jsxs(no, {
                                      children: [
                                        E.jsx(Mi, { children: 'Preferences' }),
                                        E.jsxs(Vn, {
                                          children: [E.jsx(sk, {}), 'Keyboard Shortcuts'],
                                        }),
                                        E.jsxs(Vn, { children: [E.jsx(ck, {}), 'Language'] }),
                                        E.jsxs(hu, {
                                          children: [
                                            E.jsxs(bu, {
                                              children: [E.jsx(e1, {}), 'Notifications'],
                                            }),
                                            E.jsx(gu, {
                                              children: E.jsx(yu, {
                                                children: E.jsxs(no, {
                                                  children: [
                                                    E.jsx(Mi, { children: 'Notification Types' }),
                                                    E.jsxs(Nf, {
                                                      checked: e.push,
                                                      onCheckedChange: (u) =>
                                                        r({ ...e, push: u === !0 }),
                                                      children: [
                                                        E.jsx(e1, {}),
                                                        'Push Notifications',
                                                      ],
                                                    }),
                                                    E.jsxs(Nf, {
                                                      checked: e.email,
                                                      onCheckedChange: (u) =>
                                                        r({ ...e, email: u === !0 }),
                                                      children: [
                                                        E.jsx(pk, {}),
                                                        'Email Notifications',
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    E.jsx(Oi, {}),
                                    E.jsx(no, {
                                      children: E.jsxs(Vn, {
                                        children: [E.jsx(Nk, {}), 'Privacy & Security'],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      E.jsx(Oi, {}),
                      E.jsxs(no, {
                        children: [
                          E.jsxs(Vn, { children: [E.jsx(L5, {}), 'Help & Support'] }),
                          E.jsxs(Vn, { children: [E.jsx(J5, {}), 'Documentation'] }),
                        ],
                      }),
                      E.jsx(Oi, {}),
                      E.jsx(no, {
                        children: E.jsxs(Vn, {
                          variant: 'destructive',
                          children: [E.jsx(dk, {}), 'Sign Out', E.jsx(Ha, { children: '⇧⌘Q' })],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        E.jsx(wj, {
          children: E.jsx('form', {
            children: E.jsxs(Xk, {
              children: [
                E.jsxs('div', {
                  className: 'grid grid-cols-2 gap-4',
                  children: [
                    E.jsxs(vu, {
                      children: [
                        E.jsx(zf, { htmlFor: 'small-form-name', children: 'Name' }),
                        E.jsx(mE, {
                          id: 'small-form-name',
                          placeholder: 'Enter your name',
                          required: !0,
                        }),
                      ],
                    }),
                    E.jsxs(vu, {
                      children: [
                        E.jsx(zf, { htmlFor: 'small-form-role', children: 'Role' }),
                        E.jsxs(Zk, {
                          items: t1,
                          defaultValue: null,
                          children: [
                            E.jsx(e_, { id: 'small-form-role', children: E.jsx(Wk, {}) }),
                            E.jsx(t_, {
                              children: E.jsx(Jk, {
                                children: t1.map((u) =>
                                  E.jsx(n_, { value: u.value, children: u.label }, u.value)
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                E.jsxs(vu, {
                  children: [
                    E.jsx(zf, { htmlFor: 'small-form-framework', children: 'Framework' }),
                    E.jsxs(Uk, {
                      items: a_,
                      children: [
                        E.jsx(Hk, {
                          id: 'small-form-framework',
                          placeholder: 'Select a framework',
                          required: !0,
                        }),
                        E.jsxs(Bk, {
                          children: [
                            E.jsx(qk, { children: 'No frameworks found.' }),
                            E.jsx(Fk, { children: (u) => E.jsx(Pk, { value: u, children: u }, u) }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                E.jsxs(vu, {
                  children: [
                    E.jsx(zf, { htmlFor: 'small-form-comments', children: 'Comments' }),
                    E.jsx(y5, {
                      id: 'small-form-comments',
                      placeholder: 'Add any additional comments',
                    }),
                  ],
                }),
                E.jsxs(vu, {
                  orientation: 'horizontal',
                  children: [
                    E.jsx(_i, { type: 'submit', children: 'Submit' }),
                    E.jsx(_i, { variant: 'outline', type: 'button', children: 'Cancel' }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  })
}
console.log(TN)
function u_() {
  return E.jsx(l_, {})
}
N2.createRoot(document.getElementById('root')).render(
  E.jsx(h.StrictMode, { children: E.jsx(u_, {}) })
)
