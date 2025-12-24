const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/ConnectDrivePage-BC6I3b8s.js",
      "assets/VSelect-Dj0MS3ta.js",
      "assets/VSelect-DVgBUt9C.css",
      "assets/ConnectDrivePage-CjqYi9E6.css",
      "assets/DeviceSettingPage-BmCN6lE0.js",
      "assets/DeviceSettingPage-vcjzwt-b.css",
    ]),
) => i.map((i) => d[i]);
var qc = Object.defineProperty;
var Yc = (e, t, r) =>
  t in e
    ? qc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var A2 = (e, t, r) => Yc(e, typeof t != "symbol" ? t + "" : t, r);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && a(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = r(n);
    fetch(n.href, o);
  }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Wn(e) {
  const t = Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Pe = {},
  Nr = [],
  St = () => {},
  Qc = () => !1,
  v0 = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Gn = (e) => e.startsWith("onUpdate:"),
  qe = Object.assign,
  qn = (e, t) => {
    const r = e.indexOf(t);
    r > -1 && e.splice(r, 1);
  },
  Xc = Object.prototype.hasOwnProperty,
  Se = (e, t) => Xc.call(e, t),
  ce = Array.isArray,
  zr = (e) => Da(e) === "[object Map]",
  m0 = (e) => Da(e) === "[object Set]",
  D2 = (e) => Da(e) === "[object Date]",
  he = (e) => typeof e == "function",
  Ne = (e) => typeof e == "string",
  At = (e) => typeof e == "symbol",
  De = (e) => e !== null && typeof e == "object",
  zs = (e) => (De(e) || he(e)) && he(e.then) && he(e.catch),
  Us = Object.prototype.toString,
  Da = (e) => Us.call(e),
  Jc = (e) => Da(e).slice(8, -1),
  $s = (e) => Da(e) === "[object Object]",
  Yn = (e) =>
    Ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  fa = Wn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  x0 = (e) => {
    const t = Object.create(null);
    return (r) => t[r] || (t[r] = e(r));
  },
  Zc = /-(\w)/g,
  Tt = x0((e) => e.replace(Zc, (t, r) => (r ? r.toUpperCase() : ""))),
  ei = /\B([A-Z])/g,
  fr = x0((e) => e.replace(ei, "-$1").toLowerCase()),
  Pa = x0((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  $0 = x0((e) => (e ? `on${Pa(e)}` : "")),
  cr = (e, t) => !Object.is(e, t),
  qa = (e, ...t) => {
    for (let r = 0; r < e.length; r++) e[r](...t);
  },
  js = (e, t, r, a = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: a,
      value: r,
    });
  },
  ti = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  ri = (e) => {
    const t = Ne(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let P2;
const y0 = () =>
  P2 ||
  (P2 =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function Qn(e) {
  if (ce(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const a = e[r],
        n = Ne(a) ? si(a) : Qn(a);
      if (n) for (const o in n) t[o] = n[o];
    }
    return t;
  } else if (Ne(e) || De(e)) return e;
}
const ai = /;(?![^(]*\))/g,
  ni = /:([^]+)/,
  oi = /\/\*[^]*?\*\//g;
function si(e) {
  const t = {};
  return (
    e
      .replace(oi, "")
      .split(ai)
      .forEach((r) => {
        if (r) {
          const a = r.split(ni);
          a.length > 1 && (t[a[0].trim()] = a[1].trim());
        }
      }),
    t
  );
}
function Xn(e) {
  let t = "";
  if (Ne(e)) t = e;
  else if (ce(e))
    for (let r = 0; r < e.length; r++) {
      const a = Xn(e[r]);
      a && (t += a + " ");
    }
  else if (De(e)) for (const r in e) e[r] && (t += r + " ");
  return t.trim();
}
const li =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ci = Wn(li);
function Ws(e) {
  return !!e || e === "";
}
function ii(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let a = 0; r && a < e.length; a++) r = w0(e[a], t[a]);
  return r;
}
function w0(e, t) {
  if (e === t) return !0;
  let r = D2(e),
    a = D2(t);
  if (r || a) return r && a ? e.getTime() === t.getTime() : !1;
  if (((r = At(e)), (a = At(t)), r || a)) return e === t;
  if (((r = ce(e)), (a = ce(t)), r || a)) return r && a ? ii(e, t) : !1;
  if (((r = De(e)), (a = De(t)), r || a)) {
    if (!r || !a) return !1;
    const n = Object.keys(e).length,
      o = Object.keys(t).length;
    if (n !== o) return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s),
        c = t.hasOwnProperty(s);
      if ((l && !c) || (!l && c) || !w0(e[s], t[s])) return !1;
    }
  }
  return String(e) === String(t);
}
function Gs(e, t) {
  return e.findIndex((r) => w0(r, t));
}
const qs = (e) => !!(e && e.__v_isRef === !0),
  ui = (e) =>
    Ne(e)
      ? e
      : e == null
        ? ""
        : ce(e) || (De(e) && (e.toString === Us || !he(e.toString)))
          ? qs(e)
            ? ui(e.value)
            : JSON.stringify(e, Ys, 2)
          : String(e),
  Ys = (e, t) =>
    qs(t)
      ? Ys(e, t.value)
      : zr(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (r, [a, n], o) => ((r[j0(a, o) + " =>"] = n), r),
              {},
            ),
          }
        : m0(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((r) => j0(r)) }
          : At(t)
            ? j0(t)
            : De(t) && !ce(t) && !$s(t)
              ? String(t)
              : t,
  j0 = (e, t = "") => {
    var r;
    return At(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ft;
class Qs {
  constructor(t = !1) {
    ((this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = ft),
      !t &&
        ft &&
        (this.index = (ft.scopes || (ft.scopes = [])).push(this) - 1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = ft;
      try {
        return ((ft = this), t());
      } finally {
        ft = r;
      }
    }
  }
  on() {
    ft = this;
  }
  off() {
    ft = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, a;
      for (r = 0, a = this.effects.length; r < a; r++) this.effects[r].stop();
      for (this.effects.length = 0, r = 0, a = this.cleanups.length; r < a; r++)
        this.cleanups[r]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (r = 0, a = this.scopes.length; r < a; r++) this.scopes[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const n = this.parent.scopes.pop();
        n &&
          n !== this &&
          ((this.parent.scopes[this.index] = n), (n.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function C0(e) {
  return new Qs(e);
}
function Xs() {
  return ft;
}
function Js(e, t = !1) {
  ft && ft.cleanups.push(e);
}
let ke;
const W0 = new WeakSet();
class Zs {
  constructor(t) {
    ((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      ft && ft.active && ft.effects.push(this));
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), W0.has(this) && (W0.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || tl(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    ((this.flags |= 2), k2(this), rl(this));
    const t = ke,
      r = Lt;
    ((ke = this), (Lt = !0));
    try {
      return this.fn();
    } finally {
      (al(this), (ke = t), (Lt = r), (this.flags &= -3));
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) e2(t);
      ((this.deps = this.depsTail = void 0),
        k2(this),
        this.onStop && this.onStop(),
        (this.flags &= -2));
    }
  }
  trigger() {
    this.flags & 64
      ? W0.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    pn(this) && this.run();
  }
  get dirty() {
    return pn(this);
  }
}
let el = 0,
  da,
  _a;
function tl(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ((e.next = _a), (_a = e));
    return;
  }
  ((e.next = da), (da = e));
}
function Jn() {
  el++;
}
function Zn() {
  if (--el > 0) return;
  if (_a) {
    let t = _a;
    for (_a = void 0; t; ) {
      const r = t.next;
      ((t.next = void 0), (t.flags &= -9), (t = r));
    }
  }
  let e;
  for (; da; ) {
    let t = da;
    for (da = void 0; t; ) {
      const r = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (a) {
          e || (e = a);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function rl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t));
}
function al(e) {
  let t,
    r = e.depsTail,
    a = r;
  for (; a; ) {
    const n = a.prevDep;
    (a.version === -1 ? (a === r && (r = n), e2(a), fi(a)) : (t = a),
      (a.dep.activeLink = a.prevActiveLink),
      (a.prevActiveLink = void 0),
      (a = n));
  }
  ((e.deps = t), (e.depsTail = r));
}
function pn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (nl(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function nl(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === ya)
  )
    return;
  e.globalVersion = ya;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !pn(e))) {
    e.flags &= -3;
    return;
  }
  const r = ke,
    a = Lt;
  ((ke = e), (Lt = !0));
  try {
    rl(e);
    const n = e.fn(e._value);
    (t.version === 0 || cr(n, e._value)) && ((e._value = n), t.version++);
  } catch (n) {
    throw (t.version++, n);
  } finally {
    ((ke = r), (Lt = a), al(e), (e.flags &= -3));
  }
}
function e2(e, t = !1) {
  const { dep: r, prevSub: a, nextSub: n } = e;
  if (
    (a && ((a.nextSub = n), (e.prevSub = void 0)),
    n && ((n.prevSub = a), (e.nextSub = void 0)),
    r.subs === e && ((r.subs = a), !a && r.computed))
  ) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep) e2(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function fi(e) {
  const { prevDep: t, nextDep: r } = e;
  (t && ((t.nextDep = r), (e.prevDep = void 0)),
    r && ((r.prevDep = t), (e.nextDep = void 0)));
}
let Lt = !0;
const ol = [];
function dr() {
  (ol.push(Lt), (Lt = !1));
}
function _r() {
  const e = ol.pop();
  Lt = e === void 0 ? !0 : e;
}
function k2(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const r = ke;
    ke = void 0;
    try {
      t();
    } finally {
      ke = r;
    }
  }
}
let ya = 0;
class di {
  constructor(t, r) {
    ((this.sub = t),
      (this.dep = r),
      (this.version = r.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0));
  }
}
class t2 {
  constructor(t) {
    ((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0));
  }
  track(t) {
    if (!ke || !Lt || ke === this.computed) return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== ke)
      ((r = this.activeLink = new di(ke, this)),
        ke.deps
          ? ((r.prevDep = ke.depsTail),
            (ke.depsTail.nextDep = r),
            (ke.depsTail = r))
          : (ke.deps = ke.depsTail = r),
        sl(r));
    else if (r.version === -1 && ((r.version = this.version), r.nextDep)) {
      const a = r.nextDep;
      ((a.prevDep = r.prevDep),
        r.prevDep && (r.prevDep.nextDep = a),
        (r.prevDep = ke.depsTail),
        (r.nextDep = void 0),
        (ke.depsTail.nextDep = r),
        (ke.depsTail = r),
        ke.deps === r && (ke.deps = a));
    }
    return r;
  }
  trigger(t) {
    (this.version++, ya++, this.notify(t));
  }
  notify(t) {
    Jn();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Zn();
    }
  }
}
function sl(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep) sl(a);
    }
    const r = e.dep.subs;
    (r !== e && ((e.prevSub = r), r && (r.nextSub = e)), (e.dep.subs = e));
  }
}
const e0 = new WeakMap(),
  Tr = Symbol(""),
  hn = Symbol(""),
  wa = Symbol("");
function rt(e, t, r) {
  if (Lt && ke) {
    let a = e0.get(e);
    a || e0.set(e, (a = new Map()));
    let n = a.get(r);
    (n || (a.set(r, (n = new t2())), (n.map = a), (n.key = r)), n.track());
  }
}
function jt(e, t, r, a, n, o) {
  const s = e0.get(e);
  if (!s) {
    ya++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if ((Jn(), t === "clear")) s.forEach(l);
  else {
    const c = ce(e),
      u = c && Yn(r);
    if (c && r === "length") {
      const i = Number(a);
      s.forEach((f, d) => {
        (d === "length" || d === wa || (!At(d) && d >= i)) && l(f);
      });
    } else
      switch (
        ((r !== void 0 || s.has(void 0)) && l(s.get(r)), u && l(s.get(wa)), t)
      ) {
        case "add":
          c ? u && l(s.get("length")) : (l(s.get(Tr)), zr(e) && l(s.get(hn)));
          break;
        case "delete":
          c || (l(s.get(Tr)), zr(e) && l(s.get(hn)));
          break;
        case "set":
          zr(e) && l(s.get(Tr));
          break;
      }
  }
  Zn();
}
function _i(e, t) {
  const r = e0.get(e);
  return r && r.get(t);
}
function kr(e) {
  const t = Ce(e);
  return t === e ? t : (rt(t, "iterate", wa), bt(e) ? t : t.map(at));
}
function b0(e) {
  return (rt((e = Ce(e)), "iterate", wa), e);
}
const pi = {
  __proto__: null,
  [Symbol.iterator]() {
    return G0(this, Symbol.iterator, at);
  },
  concat(...e) {
    return kr(this).concat(...e.map((t) => (ce(t) ? kr(t) : t)));
  },
  entries() {
    return G0(this, "entries", (e) => ((e[1] = at(e[1])), e));
  },
  every(e, t) {
    return Ft(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ft(this, "filter", e, t, (r) => r.map(at), arguments);
  },
  find(e, t) {
    return Ft(this, "find", e, t, at, arguments);
  },
  findIndex(e, t) {
    return Ft(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ft(this, "findLast", e, t, at, arguments);
  },
  findLastIndex(e, t) {
    return Ft(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Ft(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return q0(this, "includes", e);
  },
  indexOf(...e) {
    return q0(this, "indexOf", e);
  },
  join(e) {
    return kr(this).join(e);
  },
  lastIndexOf(...e) {
    return q0(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ft(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return aa(this, "pop");
  },
  push(...e) {
    return aa(this, "push", e);
  },
  reduce(e, ...t) {
    return E2(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return E2(this, "reduceRight", e, t);
  },
  shift() {
    return aa(this, "shift");
  },
  some(e, t) {
    return Ft(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return aa(this, "splice", e);
  },
  toReversed() {
    return kr(this).toReversed();
  },
  toSorted(e) {
    return kr(this).toSorted(e);
  },
  toSpliced(...e) {
    return kr(this).toSpliced(...e);
  },
  unshift(...e) {
    return aa(this, "unshift", e);
  },
  values() {
    return G0(this, "values", at);
  },
};
function G0(e, t, r) {
  const a = b0(e),
    n = a[t]();
  return (
    a !== e &&
      !bt(e) &&
      ((n._next = n.next),
      (n.next = () => {
        const o = n._next();
        return (o.value && (o.value = r(o.value)), o);
      })),
    n
  );
}
const hi = Array.prototype;
function Ft(e, t, r, a, n, o) {
  const s = b0(e),
    l = s !== e && !bt(e),
    c = s[t];
  if (c !== hi[t]) {
    const f = c.apply(e, o);
    return l ? at(f) : f;
  }
  let u = r;
  s !== e &&
    (l
      ? (u = function (f, d) {
          return r.call(this, at(f), d, e);
        })
      : r.length > 2 &&
        (u = function (f, d) {
          return r.call(this, f, d, e);
        }));
  const i = c.call(s, u, a);
  return l && n ? n(i) : i;
}
function E2(e, t, r, a) {
  const n = b0(e);
  let o = r;
  return (
    n !== e &&
      (bt(e)
        ? r.length > 3 &&
          (o = function (s, l, c) {
            return r.call(this, s, l, c, e);
          })
        : (o = function (s, l, c) {
            return r.call(this, s, at(l), c, e);
          })),
    n[t](o, ...a)
  );
}
function q0(e, t, r) {
  const a = Ce(e);
  rt(a, "iterate", wa);
  const n = a[t](...r);
  return (n === -1 || n === !1) && n2(r[0])
    ? ((r[0] = Ce(r[0])), a[t](...r))
    : n;
}
function aa(e, t, r = []) {
  (dr(), Jn());
  const a = Ce(e)[t].apply(e, r);
  return (Zn(), _r(), a);
}
const gi = Wn("__proto__,__v_isRef,__isVue"),
  ll = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(At),
  );
function vi(e) {
  At(e) || (e = String(e));
  const t = Ce(this);
  return (rt(t, "has", e), t.hasOwnProperty(e));
}
class cl {
  constructor(t = !1, r = !1) {
    ((this._isReadonly = t), (this._isShallow = r));
  }
  get(t, r, a) {
    if (r === "__v_skip") return t.__v_skip;
    const n = this._isReadonly,
      o = this._isShallow;
    if (r === "__v_isReactive") return !n;
    if (r === "__v_isReadonly") return n;
    if (r === "__v_isShallow") return o;
    if (r === "__v_raw")
      return a === (n ? (o ? Si : dl) : o ? fl : ul).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(a)
        ? t
        : void 0;
    const s = ce(t);
    if (!n) {
      let c;
      if (s && (c = pi[r])) return c;
      if (r === "hasOwnProperty") return vi;
    }
    const l = Reflect.get(t, r, He(t) ? t : a);
    return (At(r) ? ll.has(r) : gi(r)) || (n || rt(t, "get", r), o)
      ? l
      : He(l)
        ? s && Yn(r)
          ? l
          : l.value
        : De(l)
          ? n
            ? pl(l)
            : Kt(l)
          : l;
  }
}
class il extends cl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, a, n) {
    let o = t[r];
    if (!this._isShallow) {
      const c = Lr(o);
      if (
        (!bt(a) && !Lr(a) && ((o = Ce(o)), (a = Ce(a))),
        !ce(t) && He(o) && !He(a))
      )
        return c ? !1 : ((o.value = a), !0);
    }
    const s = ce(t) && Yn(r) ? Number(r) < t.length : Se(t, r),
      l = Reflect.set(t, r, a, He(t) ? t : n);
    return (
      t === Ce(n) && (s ? cr(a, o) && jt(t, "set", r, a) : jt(t, "add", r, a)),
      l
    );
  }
  deleteProperty(t, r) {
    const a = Se(t, r);
    t[r];
    const n = Reflect.deleteProperty(t, r);
    return (n && a && jt(t, "delete", r, void 0), n);
  }
  has(t, r) {
    const a = Reflect.has(t, r);
    return ((!At(r) || !ll.has(r)) && rt(t, "has", r), a);
  }
  ownKeys(t) {
    return (rt(t, "iterate", ce(t) ? "length" : Tr), Reflect.ownKeys(t));
  }
}
class mi extends cl {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const xi = new il(),
  yi = new mi(),
  wi = new il(!0);
const gn = (e) => e,
  Ba = (e) => Reflect.getPrototypeOf(e);
function Ci(e, t, r) {
  return function (...a) {
    const n = this.__v_raw,
      o = Ce(n),
      s = zr(o),
      l = e === "entries" || (e === Symbol.iterator && s),
      c = e === "keys" && s,
      u = n[e](...a),
      i = r ? gn : t ? vn : at;
    return (
      !t && rt(o, "iterate", c ? hn : Tr),
      {
        next() {
          const { value: f, done: d } = u.next();
          return d
            ? { value: f, done: d }
            : { value: l ? [i(f[0]), i(f[1])] : i(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ka(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function bi(e, t) {
  const r = {
    get(n) {
      const o = this.__v_raw,
        s = Ce(o),
        l = Ce(n);
      e || (cr(n, l) && rt(s, "get", n), rt(s, "get", l));
      const { has: c } = Ba(s),
        u = t ? gn : e ? vn : at;
      if (c.call(s, n)) return u(o.get(n));
      if (c.call(s, l)) return u(o.get(l));
      o !== s && o.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return (!e && rt(Ce(n), "iterate", Tr), Reflect.get(n, "size", n));
    },
    has(n) {
      const o = this.__v_raw,
        s = Ce(o),
        l = Ce(n);
      return (
        e || (cr(n, l) && rt(s, "has", n), rt(s, "has", l)),
        n === l ? o.has(n) : o.has(n) || o.has(l)
      );
    },
    forEach(n, o) {
      const s = this,
        l = s.__v_raw,
        c = Ce(l),
        u = t ? gn : e ? vn : at;
      return (
        !e && rt(c, "iterate", Tr),
        l.forEach((i, f) => n.call(o, u(i), u(f), s))
      );
    },
  };
  return (
    qe(
      r,
      e
        ? {
            add: Ka("add"),
            set: Ka("set"),
            delete: Ka("delete"),
            clear: Ka("clear"),
          }
        : {
            add(n) {
              !t && !bt(n) && !Lr(n) && (n = Ce(n));
              const o = Ce(this);
              return (
                Ba(o).has.call(o, n) || (o.add(n), jt(o, "add", n, n)),
                this
              );
            },
            set(n, o) {
              !t && !bt(o) && !Lr(o) && (o = Ce(o));
              const s = Ce(this),
                { has: l, get: c } = Ba(s);
              let u = l.call(s, n);
              u || ((n = Ce(n)), (u = l.call(s, n)));
              const i = c.call(s, n);
              return (
                s.set(n, o),
                u ? cr(o, i) && jt(s, "set", n, o) : jt(s, "add", n, o),
                this
              );
            },
            delete(n) {
              const o = Ce(this),
                { has: s, get: l } = Ba(o);
              let c = s.call(o, n);
              (c || ((n = Ce(n)), (c = s.call(o, n))), l && l.call(o, n));
              const u = o.delete(n);
              return (c && jt(o, "delete", n, void 0), u);
            },
            clear() {
              const n = Ce(this),
                o = n.size !== 0,
                s = n.clear();
              return (o && jt(n, "clear", void 0, void 0), s);
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((n) => {
      r[n] = Ci(n, e, t);
    }),
    r
  );
}
function r2(e, t) {
  const r = bi(e, t);
  return (a, n, o) =>
    n === "__v_isReactive"
      ? !e
      : n === "__v_isReadonly"
        ? e
        : n === "__v_raw"
          ? a
          : Reflect.get(Se(r, n) && n in a ? r : a, n, o);
}
const Ti = { get: r2(!1, !1) },
  Mi = { get: r2(!1, !0) },
  Ii = { get: r2(!0, !1) };
const ul = new WeakMap(),
  fl = new WeakMap(),
  dl = new WeakMap(),
  Si = new WeakMap();
function Li(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ai(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Li(Jc(e));
}
function Kt(e) {
  return Lr(e) ? e : a2(e, !1, xi, Ti, ul);
}
function _l(e) {
  return a2(e, !1, wi, Mi, fl);
}
function pl(e) {
  return a2(e, !0, yi, Ii, dl);
}
function a2(e, t, r, a, n) {
  if (!De(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = n.get(e);
  if (o) return o;
  const s = Ai(e);
  if (s === 0) return e;
  const l = new Proxy(e, s === 2 ? a : r);
  return (n.set(e, l), l);
}
function Yt(e) {
  return Lr(e) ? Yt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Lr(e) {
  return !!(e && e.__v_isReadonly);
}
function bt(e) {
  return !!(e && e.__v_isShallow);
}
function n2(e) {
  return e ? !!e.__v_raw : !1;
}
function Ce(e) {
  const t = e && e.__v_raw;
  return t ? Ce(t) : e;
}
function o2(e) {
  return (
    !Se(e, "__v_skip") && Object.isExtensible(e) && js(e, "__v_skip", !0),
    e
  );
}
const at = (e) => (De(e) ? Kt(e) : e),
  vn = (e) => (De(e) ? pl(e) : e);
function He(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function le(e) {
  return hl(e, !1);
}
function Bt(e) {
  return hl(e, !0);
}
function hl(e, t) {
  return He(e) ? e : new Di(e, t);
}
class Di {
  constructor(t, r) {
    ((this.dep = new t2()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = r ? t : Ce(t)),
      (this._value = r ? t : at(t)),
      (this.__v_isShallow = r));
  }
  get value() {
    return (this.dep.track(), this._value);
  }
  set value(t) {
    const r = this._rawValue,
      a = this.__v_isShallow || bt(t) || Lr(t);
    ((t = a ? t : Ce(t)),
      cr(t, r) &&
        ((this._rawValue = t),
        (this._value = a ? t : at(t)),
        this.dep.trigger()));
  }
}
function Ct(e) {
  return He(e) ? e.value : e;
}
const Pi = {
  get: (e, t, r) => (t === "__v_raw" ? e : Ct(Reflect.get(e, t, r))),
  set: (e, t, r, a) => {
    const n = e[t];
    return He(n) && !He(r) ? ((n.value = r), !0) : Reflect.set(e, t, r, a);
  },
};
function gl(e) {
  return Yt(e) ? e : new Proxy(e, Pi);
}
function s2(e) {
  const t = ce(e) ? new Array(e.length) : {};
  for (const r in e) t[r] = vl(e, r);
  return t;
}
class ki {
  constructor(t, r, a) {
    ((this._object = t),
      (this._key = r),
      (this._defaultValue = a),
      (this.__v_isRef = !0),
      (this._value = void 0));
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return _i(Ce(this._object), this._key);
  }
}
class Ei {
  constructor(t) {
    ((this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0));
  }
  get value() {
    return (this._value = this._getter());
  }
}
function Ri(e, t, r) {
  return He(e)
    ? e
    : he(e)
      ? new Ei(e)
      : De(e) && arguments.length > 1
        ? vl(e, t, r)
        : le(e);
}
function vl(e, t, r) {
  const a = e[t];
  return He(a) ? a : new ki(e, t, r);
}
class Oi {
  constructor(t, r, a) {
    ((this.fn = t),
      (this.setter = r),
      (this._value = void 0),
      (this.dep = new t2(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = ya - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !r),
      (this.isSSR = a));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && ke !== this))
      return (tl(this, !0), !0);
  }
  get value() {
    const t = this.dep.track();
    return (nl(this), t && (t.version = this.dep.version), this._value);
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Vi(e, t, r = !1) {
  let a, n;
  return (he(e) ? (a = e) : ((a = e.get), (n = e.set)), new Oi(a, n, r));
}
const Ha = {},
  t0 = new WeakMap();
let Cr;
function Bi(e, t = !1, r = Cr) {
  if (r) {
    let a = t0.get(r);
    (a || t0.set(r, (a = [])), a.push(e));
  }
}
function Ki(e, t, r = Pe) {
  const {
      immediate: a,
      deep: n,
      once: o,
      scheduler: s,
      augmentJob: l,
      call: c,
    } = r,
    u = (A) => (n ? A : bt(A) || n === !1 || n === 0 ? Wt(A, 1) : Wt(A));
  let i,
    f,
    d,
    p,
    y = !1,
    I = !1;
  if (
    (He(e)
      ? ((f = () => e.value), (y = bt(e)))
      : Yt(e)
        ? ((f = () => u(e)), (y = !0))
        : ce(e)
          ? ((I = !0),
            (y = e.some((A) => Yt(A) || bt(A))),
            (f = () =>
              e.map((A) => {
                if (He(A)) return A.value;
                if (Yt(A)) return u(A);
                if (he(A)) return c ? c(A, 2) : A();
              })))
          : he(e)
            ? t
              ? (f = c ? () => c(e, 2) : e)
              : (f = () => {
                  if (d) {
                    dr();
                    try {
                      d();
                    } finally {
                      _r();
                    }
                  }
                  const A = Cr;
                  Cr = i;
                  try {
                    return c ? c(e, 3, [p]) : e(p);
                  } finally {
                    Cr = A;
                  }
                })
            : (f = St),
    t && n)
  ) {
    const A = f,
      B = n === !0 ? 1 / 0 : n;
    f = () => Wt(A(), B);
  }
  const R = Xs(),
    O = () => {
      (i.stop(), R && R.active && qn(R.effects, i));
    };
  if (o && t) {
    const A = t;
    t = (...B) => {
      (A(...B), O());
    };
  }
  let F = I ? new Array(e.length).fill(Ha) : Ha;
  const L = (A) => {
    if (!(!(i.flags & 1) || (!i.dirty && !A)))
      if (t) {
        const B = i.run();
        if (n || y || (I ? B.some((K, z) => cr(K, F[z])) : cr(B, F))) {
          d && d();
          const K = Cr;
          Cr = i;
          try {
            const z = [B, F === Ha ? void 0 : I && F[0] === Ha ? [] : F, p];
            (c ? c(t, 3, z) : t(...z), (F = B));
          } finally {
            Cr = K;
          }
        }
      } else i.run();
  };
  return (
    l && l(L),
    (i = new Zs(f)),
    (i.scheduler = s ? () => s(L, !1) : L),
    (p = (A) => Bi(A, !1, i)),
    (d = i.onStop =
      () => {
        const A = t0.get(i);
        if (A) {
          if (c) c(A, 4);
          else for (const B of A) B();
          t0.delete(i);
        }
      }),
    t ? (a ? L(!0) : (F = i.run())) : s ? s(L.bind(null, !0), !0) : i.run(),
    (O.pause = i.pause.bind(i)),
    (O.resume = i.resume.bind(i)),
    (O.stop = O),
    O
  );
}
function Wt(e, t = 1 / 0, r) {
  if (t <= 0 || !De(e) || e.__v_skip || ((r = r || new Set()), r.has(e)))
    return e;
  if ((r.add(e), t--, He(e))) Wt(e.value, t, r);
  else if (ce(e)) for (let a = 0; a < e.length; a++) Wt(e[a], t, r);
  else if (m0(e) || zr(e))
    e.forEach((a) => {
      Wt(a, t, r);
    });
  else if ($s(e)) {
    for (const a in e) Wt(e[a], t, r);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Wt(e[a], t, r);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ka(e, t, r, a) {
  try {
    return a ? e(...a) : e();
  } catch (n) {
    T0(n, t, r);
  }
}
function Dt(e, t, r, a) {
  if (he(e)) {
    const n = ka(e, t, r, a);
    return (
      n &&
        zs(n) &&
        n.catch((o) => {
          T0(o, t, r);
        }),
      n
    );
  }
  if (ce(e)) {
    const n = [];
    for (let o = 0; o < e.length; o++) n.push(Dt(e[o], t, r, a));
    return n;
  }
}
function T0(e, t, r, a = !0) {
  const n = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: s } =
      (t && t.appContext.config) || Pe;
  if (t) {
    let l = t.parent;
    const c = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; l; ) {
      const i = l.ec;
      if (i) {
        for (let f = 0; f < i.length; f++) if (i[f](e, c, u) === !1) return;
      }
      l = l.parent;
    }
    if (o) {
      (dr(), ka(o, null, 10, [e, c, u]), _r());
      return;
    }
  }
  Hi(e, r, n, a, s);
}
function Hi(e, t, r, a = !0, n = !1) {
  if (n) throw e;
  console.error(e);
}
const dt = [];
let Rt = -1;
const Ur = [];
let nr = null,
  Vr = 0;
const ml = Promise.resolve();
let r0 = null;
function M0(e) {
  const t = r0 || ml;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fi(e) {
  let t = Rt + 1,
    r = dt.length;
  for (; t < r; ) {
    const a = (t + r) >>> 1,
      n = dt[a],
      o = Ca(n);
    o < e || (o === e && n.flags & 2) ? (t = a + 1) : (r = a);
  }
  return t;
}
function l2(e) {
  if (!(e.flags & 1)) {
    const t = Ca(e),
      r = dt[dt.length - 1];
    (!r || (!(e.flags & 2) && t >= Ca(r)) ? dt.push(e) : dt.splice(Fi(t), 0, e),
      (e.flags |= 1),
      xl());
  }
}
function xl() {
  r0 || (r0 = ml.then(wl));
}
function Ni(e) {
  (ce(e)
    ? Ur.push(...e)
    : nr && e.id === -1
      ? nr.splice(Vr + 1, 0, e)
      : e.flags & 1 || (Ur.push(e), (e.flags |= 1)),
    xl());
}
function R2(e, t, r = Rt + 1) {
  for (; r < dt.length; r++) {
    const a = dt[r];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid) continue;
      (dt.splice(r, 1),
        r--,
        a.flags & 4 && (a.flags &= -2),
        a(),
        a.flags & 4 || (a.flags &= -2));
    }
  }
}
function yl(e) {
  if (Ur.length) {
    const t = [...new Set(Ur)].sort((r, a) => Ca(r) - Ca(a));
    if (((Ur.length = 0), nr)) {
      nr.push(...t);
      return;
    }
    for (nr = t, Vr = 0; Vr < nr.length; Vr++) {
      const r = nr[Vr];
      (r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), (r.flags &= -2));
    }
    ((nr = null), (Vr = 0));
  }
}
const Ca = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function wl(e) {
  try {
    for (Rt = 0; Rt < dt.length; Rt++) {
      const t = dt[Rt];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        ka(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Rt < dt.length; Rt++) {
      const t = dt[Rt];
      t && (t.flags &= -2);
    }
    ((Rt = -1),
      (dt.length = 0),
      yl(),
      (r0 = null),
      (dt.length || Ur.length) && wl());
  }
}
let je = null,
  Cl = null;
function a0(e) {
  const t = je;
  return ((je = e), (Cl = (e && e.type.__scopeId) || null), t);
}
function zi(e, t = je, r) {
  if (!t || e._n) return e;
  const a = (...n) => {
    a._d && q2(-1);
    const o = a0(t);
    let s;
    try {
      s = e(...n);
    } finally {
      (a0(o), a._d && q2(1));
    }
    return s;
  };
  return ((a._n = !0), (a._c = !0), (a._d = !0), a);
}
function Ky(e, t) {
  if (je === null) return e;
  const r = D0(je),
    a = e.dirs || (e.dirs = []);
  for (let n = 0; n < t.length; n++) {
    let [o, s, l, c = Pe] = t[n];
    o &&
      (he(o) && (o = { mounted: o, updated: o }),
      o.deep && Wt(s),
      a.push({
        dir: o,
        instance: r,
        value: s,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return e;
}
function gr(e, t, r, a) {
  const n = e.dirs,
    o = t && t.dirs;
  for (let s = 0; s < n.length; s++) {
    const l = n[s];
    o && (l.oldValue = o[s].value);
    let c = l.dir[a];
    c && (dr(), Dt(c, r, 8, [e.el, l, e, t]), _r());
  }
}
const bl = Symbol("_vte"),
  Tl = (e) => e.__isTeleport,
  pa = (e) => e && (e.disabled || e.disabled === ""),
  O2 = (e) => e && (e.defer || e.defer === ""),
  V2 = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  B2 = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  mn = (e, t) => {
    const r = e && e.to;
    return Ne(r) ? (t ? t(r) : null) : r;
  },
  Ml = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, r, a, n, o, s, l, c, u) {
      const {
          mc: i,
          pc: f,
          pbc: d,
          o: { insert: p, querySelector: y, createText: I, createComment: R },
        } = u,
        O = pa(t.props);
      let { shapeFlag: F, children: L, dynamicChildren: A } = t;
      if (e == null) {
        const B = (t.el = I("")),
          K = (t.anchor = I(""));
        (p(B, r, a), p(K, r, a));
        const z = (k, te) => {
            F & 16 &&
              (n && n.isCE && (n.ce._teleportTarget = k),
              i(L, k, te, n, o, s, l, c));
          },
          j = () => {
            const k = (t.target = mn(t.props, y)),
              te = Il(k, t, I, p);
            k &&
              (s !== "svg" && V2(k)
                ? (s = "svg")
                : s !== "mathml" && B2(k) && (s = "mathml"),
              O || (z(k, te), Ya(t, !1)));
          };
        (O && (z(r, K), Ya(t, !0)),
          O2(t.props)
            ? ut(() => {
                (j(), (t.el.__isMounted = !0));
              }, o)
            : j());
      } else {
        if (O2(t.props) && !e.el.__isMounted) {
          ut(() => {
            (Ml.process(e, t, r, a, n, o, s, l, c, u), delete e.el.__isMounted);
          }, o);
          return;
        }
        ((t.el = e.el), (t.targetStart = e.targetStart));
        const B = (t.anchor = e.anchor),
          K = (t.target = e.target),
          z = (t.targetAnchor = e.targetAnchor),
          j = pa(e.props),
          k = j ? r : K,
          te = j ? B : z;
        if (
          (s === "svg" || V2(K)
            ? (s = "svg")
            : (s === "mathml" || B2(K)) && (s = "mathml"),
          A
            ? (d(e.dynamicChildren, A, k, n, o, s, l), p2(e, t, !0))
            : c || f(e, t, k, te, n, o, s, l, !1),
          O)
        )
          j
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : Fa(t, r, B, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const ue = (t.target = mn(t.props, y));
          ue && Fa(t, ue, null, u, 0);
        } else j && Fa(t, K, z, u, 1);
        Ya(t, O);
      }
    },
    remove(e, t, r, { um: a, o: { remove: n } }, o) {
      const {
        shapeFlag: s,
        children: l,
        anchor: c,
        targetStart: u,
        targetAnchor: i,
        target: f,
        props: d,
      } = e;
      if ((f && (n(u), n(i)), o && n(c), s & 16)) {
        const p = o || !pa(d);
        for (let y = 0; y < l.length; y++) {
          const I = l[y];
          a(I, t, r, p, !!I.dynamicChildren);
        }
      }
    },
    move: Fa,
    hydrate: Ui,
  };
function Fa(e, t, r, { o: { insert: a }, m: n }, o = 2) {
  o === 0 && a(e.targetAnchor, t, r);
  const { el: s, anchor: l, shapeFlag: c, children: u, props: i } = e,
    f = o === 2;
  if ((f && a(s, t, r), (!f || pa(i)) && c & 16))
    for (let d = 0; d < u.length; d++) n(u[d], t, r, 2);
  f && a(l, t, r);
}
function Ui(
  e,
  t,
  r,
  a,
  n,
  o,
  {
    o: {
      nextSibling: s,
      parentNode: l,
      querySelector: c,
      insert: u,
      createText: i,
    },
  },
  f,
) {
  const d = (t.target = mn(t.props, c));
  if (d) {
    const p = pa(t.props),
      y = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (p)
        ((t.anchor = f(s(e), t, l(e), r, a, n, o)),
          (t.targetStart = y),
          (t.targetAnchor = y && s(y)));
      else {
        t.anchor = s(e);
        let I = y;
        for (; I; ) {
          if (I && I.nodeType === 8) {
            if (I.data === "teleport start anchor") t.targetStart = I;
            else if (I.data === "teleport anchor") {
              ((t.targetAnchor = I),
                (d._lpa = t.targetAnchor && s(t.targetAnchor)));
              break;
            }
          }
          I = s(I);
        }
        (t.targetAnchor || Il(d, t, i, u), f(y && s(y), t, d, r, a, n, o));
      }
    Ya(t, p);
  }
  return t.anchor && s(t.anchor);
}
const Hy = Ml;
function Ya(e, t) {
  const r = e.ctx;
  if (r && r.ut) {
    let a, n;
    for (
      t
        ? ((a = e.el), (n = e.anchor))
        : ((a = e.targetStart), (n = e.targetAnchor));
      a && a !== n;
    )
      (a.nodeType === 1 && a.setAttribute("data-v-owner", r.uid),
        (a = a.nextSibling));
    r.ut();
  }
}
function Il(e, t, r, a) {
  const n = (t.targetStart = r("")),
    o = (t.targetAnchor = r(""));
  return ((n[bl] = o), e && (a(n, e), a(o, e)), o);
}
const or = Symbol("_leaveCb"),
  Na = Symbol("_enterCb");
function Sl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    i2(() => {
      e.isMounted = !0;
    }),
    Vl(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const yt = [Function, Array],
  Ll = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: yt,
    onEnter: yt,
    onAfterEnter: yt,
    onEnterCancelled: yt,
    onBeforeLeave: yt,
    onLeave: yt,
    onAfterLeave: yt,
    onLeaveCancelled: yt,
    onBeforeAppear: yt,
    onAppear: yt,
    onAfterAppear: yt,
    onAppearCancelled: yt,
  },
  Al = (e) => {
    const t = e.subTree;
    return t.component ? Al(t.component) : t;
  },
  $i = {
    name: "BaseTransition",
    props: Ll,
    setup(e, { slots: t }) {
      const r = Qt(),
        a = Sl();
      return () => {
        const n = t.default && c2(t.default(), !0);
        if (!n || !n.length) return;
        const o = Dl(n),
          s = Ce(e),
          { mode: l } = s;
        if (a.isLeaving) return Y0(o);
        const c = K2(o);
        if (!c) return Y0(o);
        let u = ba(c, s, a, r, (f) => (u = f));
        c.type !== nt && Ar(c, u);
        let i = r.subTree && K2(r.subTree);
        if (i && i.type !== nt && !br(c, i) && Al(r).type !== nt) {
          let f = ba(i, s, a, r);
          if ((Ar(i, f), l === "out-in" && c.type !== nt))
            return (
              (a.isLeaving = !0),
              (f.afterLeave = () => {
                ((a.isLeaving = !1),
                  r.job.flags & 8 || r.update(),
                  delete f.afterLeave,
                  (i = void 0));
              }),
              Y0(o)
            );
          l === "in-out" && c.type !== nt
            ? (f.delayLeave = (d, p, y) => {
                const I = Pl(a, i);
                ((I[String(i.key)] = i),
                  (d[or] = () => {
                    (p(),
                      (d[or] = void 0),
                      delete u.delayedLeave,
                      (i = void 0));
                  }),
                  (u.delayedLeave = () => {
                    (y(), delete u.delayedLeave, (i = void 0));
                  }));
              })
            : (i = void 0);
        } else i && (i = void 0);
        return o;
      };
    },
  };
function Dl(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== nt) {
        t = r;
        break;
      }
  }
  return t;
}
const ji = $i;
function Pl(e, t) {
  const { leavingVNodes: r } = e;
  let a = r.get(t.type);
  return (a || ((a = Object.create(null)), r.set(t.type, a)), a);
}
function ba(e, t, r, a, n) {
  const {
      appear: o,
      mode: s,
      persisted: l = !1,
      onBeforeEnter: c,
      onEnter: u,
      onAfterEnter: i,
      onEnterCancelled: f,
      onBeforeLeave: d,
      onLeave: p,
      onAfterLeave: y,
      onLeaveCancelled: I,
      onBeforeAppear: R,
      onAppear: O,
      onAfterAppear: F,
      onAppearCancelled: L,
    } = t,
    A = String(e.key),
    B = Pl(r, e),
    K = (k, te) => {
      k && Dt(k, a, 9, te);
    },
    z = (k, te) => {
      const ue = te[1];
      (K(k, te),
        ce(k) ? k.every((q) => q.length <= 1) && ue() : k.length <= 1 && ue());
    },
    j = {
      mode: s,
      persisted: l,
      beforeEnter(k) {
        let te = c;
        if (!r.isMounted)
          if (o) te = R || c;
          else return;
        k[or] && k[or](!0);
        const ue = B[A];
        (ue && br(e, ue) && ue.el[or] && ue.el[or](), K(te, [k]));
      },
      enter(k) {
        let te = u,
          ue = i,
          q = f;
        if (!r.isMounted)
          if (o) ((te = O || u), (ue = F || i), (q = L || f));
          else return;
        let ie = !1;
        const Ae = (k[Na] = (Fe) => {
          ie ||
            ((ie = !0),
            Fe ? K(q, [k]) : K(ue, [k]),
            j.delayedLeave && j.delayedLeave(),
            (k[Na] = void 0));
        });
        te ? z(te, [k, Ae]) : Ae();
      },
      leave(k, te) {
        const ue = String(e.key);
        if ((k[Na] && k[Na](!0), r.isUnmounting)) return te();
        K(d, [k]);
        let q = !1;
        const ie = (k[or] = (Ae) => {
          q ||
            ((q = !0),
            te(),
            Ae ? K(I, [k]) : K(y, [k]),
            (k[or] = void 0),
            B[ue] === e && delete B[ue]);
        });
        ((B[ue] = e), p ? z(p, [k, ie]) : ie());
      },
      clone(k) {
        const te = ba(k, t, r, a, n);
        return (n && n(te), te);
      },
    };
  return j;
}
function Y0(e) {
  if (I0(e)) return ((e = ir(e)), (e.children = null), e);
}
function K2(e) {
  if (!I0(e)) return Tl(e.type) && e.children ? Dl(e.children) : e;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16) return r[0];
    if (t & 32 && he(r.default)) return r.default();
  }
}
function Ar(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Ar(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function c2(e, t = !1, r) {
  let a = [],
    n = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    const l = r == null ? s.key : String(r) + String(s.key != null ? s.key : o);
    s.type === Ye
      ? (s.patchFlag & 128 && n++, (a = a.concat(c2(s.children, t, l))))
      : (t || s.type !== nt) && a.push(l != null ? ir(s, { key: l }) : s);
  }
  if (n > 1) for (let o = 0; o < a.length; o++) a[o].patchFlag = -2;
  return a;
}
/*! #__NO_SIDE_EFFECTS__ */ function g(e, t) {
  return he(e) ? qe({ name: e.name }, t, { setup: e }) : e;
}
function kl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function n0(e, t, r, a, n = !1) {
  if (ce(e)) {
    e.forEach((y, I) => n0(y, t && (ce(t) ? t[I] : t), r, a, n));
    return;
  }
  if ($r(a) && !n) {
    a.shapeFlag & 512 &&
      a.type.__asyncResolved &&
      a.component.subTree.component &&
      n0(e, t, r, a.component.subTree);
    return;
  }
  const o = a.shapeFlag & 4 ? D0(a.component) : a.el,
    s = n ? null : o,
    { i: l, r: c } = e,
    u = t && t.r,
    i = l.refs === Pe ? (l.refs = {}) : l.refs,
    f = l.setupState,
    d = Ce(f),
    p = f === Pe ? () => !1 : (y) => Se(d, y);
  if (
    (u != null &&
      u !== c &&
      (Ne(u)
        ? ((i[u] = null), p(u) && (f[u] = null))
        : He(u) && (u.value = null)),
    he(c))
  )
    ka(c, l, 12, [s, i]);
  else {
    const y = Ne(c),
      I = He(c);
    if (y || I) {
      const R = () => {
        if (e.f) {
          const O = y ? (p(c) ? f[c] : i[c]) : c.value;
          n
            ? ce(O) && qn(O, o)
            : ce(O)
              ? O.includes(o) || O.push(o)
              : y
                ? ((i[c] = [o]), p(c) && (f[c] = i[c]))
                : ((c.value = [o]), e.k && (i[e.k] = c.value));
        } else
          y
            ? ((i[c] = s), p(c) && (f[c] = s))
            : I && ((c.value = s), e.k && (i[e.k] = s));
      };
      s ? ((R.id = -1), ut(R, r)) : R();
    }
  }
}
y0().requestIdleCallback;
y0().cancelIdleCallback;
const $r = (e) => !!e.type.__asyncLoader,
  I0 = (e) => e.type.__isKeepAlive;
function Wi(e, t) {
  El(e, "a", t);
}
function Gi(e, t) {
  El(e, "da", t);
}
function El(e, t, r = Qe) {
  const a =
    e.__wdc ||
    (e.__wdc = () => {
      let n = r;
      for (; n; ) {
        if (n.isDeactivated) return;
        n = n.parent;
      }
      return e();
    });
  if ((S0(t, a, r), r)) {
    let n = r.parent;
    for (; n && n.parent; )
      (I0(n.parent.vnode) && qi(a, t, r, n), (n = n.parent));
  }
}
function qi(e, t, r, a) {
  const n = S0(t, e, a, !0);
  u2(() => {
    qn(a[t], n);
  }, r);
}
function S0(e, t, r = Qe, a = !1) {
  if (r) {
    const n = r[e] || (r[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...s) => {
          dr();
          const l = Ra(r),
            c = Dt(t, r, e, s);
          return (l(), _r(), c);
        });
    return (a ? n.unshift(o) : n.push(o), o);
  }
}
const Xt =
    (e) =>
    (t, r = Qe) => {
      (!Ma || e === "sp") && S0(e, (...a) => t(...a), r);
    },
  Rl = Xt("bm"),
  i2 = Xt("m"),
  Yi = Xt("bu"),
  Ol = Xt("u"),
  Vl = Xt("bum"),
  u2 = Xt("um"),
  Qi = Xt("sp"),
  Xi = Xt("rtg"),
  Ji = Xt("rtc");
function Zi(e, t = Qe) {
  S0("ec", e, t);
}
const f2 = "components",
  eu = "directives";
function tu(e, t) {
  return d2(f2, e, !0, t) || e;
}
const Bl = Symbol.for("v-ndc");
function Fy(e) {
  return Ne(e) ? d2(f2, e, !1) || e : e || Bl;
}
function Ny(e) {
  return d2(eu, e);
}
function d2(e, t, r = !0, a = !1) {
  const n = je || Qe;
  if (n) {
    const o = n.type;
    if (e === f2) {
      const l = Nu(o, !1);
      if (l && (l === t || l === Tt(t) || l === Pa(Tt(t)))) return o;
    }
    const s = H2(n[e] || o[e], t) || H2(n.appContext[e], t);
    return !s && a ? o : s;
  }
}
function H2(e, t) {
  return e && (e[t] || e[Tt(t)] || e[Pa(Tt(t))]);
}
function zy(e, t, r, a) {
  let n;
  const o = r,
    s = ce(e);
  if (s || Ne(e)) {
    const l = s && Yt(e);
    let c = !1;
    (l && ((c = !bt(e)), (e = b0(e))), (n = new Array(e.length)));
    for (let u = 0, i = e.length; u < i; u++)
      n[u] = t(c ? at(e[u]) : e[u], u, void 0, o);
  } else if (typeof e == "number") {
    n = new Array(e);
    for (let l = 0; l < e; l++) n[l] = t(l + 1, l, void 0, o);
  } else if (De(e))
    if (e[Symbol.iterator]) n = Array.from(e, (l, c) => t(l, c, void 0, o));
    else {
      const l = Object.keys(e);
      n = new Array(l.length);
      for (let c = 0, u = l.length; c < u; c++) {
        const i = l[c];
        n[c] = t(e[i], i, c, o);
      }
    }
  else n = [];
  return n;
}
function Uy(e, t) {
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    if (ce(a)) for (let n = 0; n < a.length; n++) e[a[n].name] = a[n].fn;
    else
      a &&
        (e[a.name] = a.key
          ? (...n) => {
              const o = a.fn(...n);
              return (o && (o.key = a.key), o);
            }
          : a.fn);
  }
  return e;
}
function $y(e, t, r = {}, a, n) {
  if (je.ce || (je.parent && $r(je.parent) && je.parent.ce))
    return (
      t !== "default" && (r.name = t),
      v(),
      s0(Ye, null, [Oe("slot", r, a && a())], 64)
    );
  let o = e[t];
  (o && o._c && (o._d = !1), v());
  const s = o && Kl(o(r)),
    l = r.key || (s && s.key),
    c = s0(
      Ye,
      { key: (l && !At(l) ? l : `_${t}`) + (!s && a ? "_fb" : "") },
      s || (a ? a() : []),
      s && e._ === 1 ? 64 : -2,
    );
  return (
    !n && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    c
  );
}
function Kl(e) {
  return e.some((t) =>
    jr(t) ? !(t.type === nt || (t.type === Ye && !Kl(t.children))) : !0,
  )
    ? e
    : null;
}
const xn = (e) => (e ? (o1(e) ? D0(e) : xn(e.parent)) : null),
  ha = qe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => xn(e.parent),
    $root: (e) => xn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Nl(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        l2(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = M0.bind(e.proxy)),
    $watch: (e) => bu.bind(e),
  }),
  Q0 = (e, t) => e !== Pe && !e.__isScriptSetup && Se(e, t),
  ru = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: r,
        setupState: a,
        data: n,
        props: o,
        accessCache: s,
        type: l,
        appContext: c,
      } = e;
      let u;
      if (t[0] !== "$") {
        const p = s[t];
        if (p !== void 0)
          switch (p) {
            case 1:
              return a[t];
            case 2:
              return n[t];
            case 4:
              return r[t];
            case 3:
              return o[t];
          }
        else {
          if (Q0(a, t)) return ((s[t] = 1), a[t]);
          if (n !== Pe && Se(n, t)) return ((s[t] = 2), n[t]);
          if ((u = e.propsOptions[0]) && Se(u, t)) return ((s[t] = 3), o[t]);
          if (r !== Pe && Se(r, t)) return ((s[t] = 4), r[t]);
          yn && (s[t] = 0);
        }
      }
      const i = ha[t];
      let f, d;
      if (i) return (t === "$attrs" && rt(e.attrs, "get", ""), i(e));
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (r !== Pe && Se(r, t)) return ((s[t] = 4), r[t]);
      if (((d = c.config.globalProperties), Se(d, t))) return d[t];
    },
    set({ _: e }, t, r) {
      const { data: a, setupState: n, ctx: o } = e;
      return Q0(n, t)
        ? ((n[t] = r), !0)
        : a !== Pe && Se(a, t)
          ? ((a[t] = r), !0)
          : Se(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((o[t] = r), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: r,
          ctx: a,
          appContext: n,
          propsOptions: o,
        },
      },
      s,
    ) {
      let l;
      return (
        !!r[s] ||
        (e !== Pe && Se(e, s)) ||
        Q0(t, s) ||
        ((l = o[0]) && Se(l, s)) ||
        Se(a, s) ||
        Se(ha, s) ||
        Se(n.config.globalProperties, s)
      );
    },
    defineProperty(e, t, r) {
      return (
        r.get != null
          ? (e._.accessCache[t] = 0)
          : Se(r, "value") && this.set(e, t, r.value, null),
        Reflect.defineProperty(e, t, r)
      );
    },
  };
function jy() {
  return Hl().slots;
}
function Wy() {
  return Hl().attrs;
}
function Hl() {
  const e = Qt();
  return e.setupContext || (e.setupContext = l1(e));
}
function F2(e) {
  return ce(e) ? e.reduce((t, r) => ((t[r] = null), t), {}) : e;
}
let yn = !0;
function au(e) {
  const t = Nl(e),
    r = e.proxy,
    a = e.ctx;
  ((yn = !1), t.beforeCreate && N2(t.beforeCreate, e, "bc"));
  const {
    data: n,
    computed: o,
    methods: s,
    watch: l,
    provide: c,
    inject: u,
    created: i,
    beforeMount: f,
    mounted: d,
    beforeUpdate: p,
    updated: y,
    activated: I,
    deactivated: R,
    beforeDestroy: O,
    beforeUnmount: F,
    destroyed: L,
    unmounted: A,
    render: B,
    renderTracked: K,
    renderTriggered: z,
    errorCaptured: j,
    serverPrefetch: k,
    expose: te,
    inheritAttrs: ue,
    components: q,
    directives: ie,
    filters: Ae,
  } = t;
  if ((u && nu(u, a, null), s))
    for (const _e in s) {
      const xe = s[_e];
      he(xe) && (a[_e] = xe.bind(r));
    }
  if (n) {
    const _e = n.call(r, r);
    De(_e) && (e.data = Kt(_e));
  }
  if (((yn = !0), o))
    for (const _e in o) {
      const xe = o[_e],
        Je = he(xe) ? xe.bind(r, r) : he(xe.get) ? xe.get.bind(r, r) : St,
        tt = !he(xe) && he(xe.set) ? xe.set.bind(r) : St,
        Be = me({ get: Je, set: tt });
      Object.defineProperty(a, _e, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (Ke) => (Be.value = Ke),
      });
    }
  if (l) for (const _e in l) Fl(l[_e], a, r, _e);
  if (c) {
    const _e = he(c) ? c.call(r) : c;
    Reflect.ownKeys(_e).forEach((xe) => {
      Ir(xe, _e[xe]);
    });
  }
  i && N2(i, e, "c");
  function S(_e, xe) {
    ce(xe) ? xe.forEach((Je) => _e(Je.bind(r))) : xe && _e(xe.bind(r));
  }
  if (
    (S(Rl, f),
    S(i2, d),
    S(Yi, p),
    S(Ol, y),
    S(Wi, I),
    S(Gi, R),
    S(Zi, j),
    S(Ji, K),
    S(Xi, z),
    S(Vl, F),
    S(u2, A),
    S(Qi, k),
    ce(te))
  )
    if (te.length) {
      const _e = e.exposed || (e.exposed = {});
      te.forEach((xe) => {
        Object.defineProperty(_e, xe, {
          get: () => r[xe],
          set: (Je) => (r[xe] = Je),
        });
      });
    } else e.exposed || (e.exposed = {});
  (B && e.render === St && (e.render = B),
    ue != null && (e.inheritAttrs = ue),
    q && (e.components = q),
    ie && (e.directives = ie),
    k && kl(e));
}
function nu(e, t, r = St) {
  ce(e) && (e = wn(e));
  for (const a in e) {
    const n = e[a];
    let o;
    (De(n)
      ? "default" in n
        ? (o = We(n.from || a, n.default, !0))
        : (o = We(n.from || a))
      : (o = We(n)),
      He(o)
        ? Object.defineProperty(t, a, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (s) => (o.value = s),
          })
        : (t[a] = o));
  }
}
function N2(e, t, r) {
  Dt(ce(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function Fl(e, t, r, a) {
  let n = a.includes(".") ? Zl(r, a) : () => r[a];
  if (Ne(e)) {
    const o = t[e];
    he(o) && gt(n, o);
  } else if (he(e)) gt(n, e.bind(r));
  else if (De(e))
    if (ce(e)) e.forEach((o) => Fl(o, t, r, a));
    else {
      const o = he(e.handler) ? e.handler.bind(r) : t[e.handler];
      he(o) && gt(n, o, e);
    }
}
function Nl(e) {
  const t = e.type,
    { mixins: r, extends: a } = t,
    {
      mixins: n,
      optionsCache: o,
      config: { optionMergeStrategies: s },
    } = e.appContext,
    l = o.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !n.length && !r && !a
        ? (c = t)
        : ((c = {}),
          n.length && n.forEach((u) => o0(c, u, s, !0)),
          o0(c, t, s)),
    De(t) && o.set(t, c),
    c
  );
}
function o0(e, t, r, a = !1) {
  const { mixins: n, extends: o } = t;
  (o && o0(e, o, r, !0), n && n.forEach((s) => o0(e, s, r, !0)));
  for (const s in t)
    if (!(a && s === "expose")) {
      const l = ou[s] || (r && r[s]);
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const ou = {
  data: z2,
  props: U2,
  emits: U2,
  methods: ia,
  computed: ia,
  beforeCreate: ct,
  created: ct,
  beforeMount: ct,
  mounted: ct,
  beforeUpdate: ct,
  updated: ct,
  beforeDestroy: ct,
  beforeUnmount: ct,
  destroyed: ct,
  unmounted: ct,
  activated: ct,
  deactivated: ct,
  errorCaptured: ct,
  serverPrefetch: ct,
  components: ia,
  directives: ia,
  watch: lu,
  provide: z2,
  inject: su,
};
function z2(e, t) {
  return t
    ? e
      ? function () {
          return qe(
            he(e) ? e.call(this, this) : e,
            he(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function su(e, t) {
  return ia(wn(e), wn(t));
}
function wn(e) {
  if (ce(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
    return t;
  }
  return e;
}
function ct(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ia(e, t) {
  return e ? qe(Object.create(null), e, t) : t;
}
function U2(e, t) {
  return e
    ? ce(e) && ce(t)
      ? [...new Set([...e, ...t])]
      : qe(Object.create(null), F2(e), F2(t ?? {}))
    : t;
}
function lu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = qe(Object.create(null), e);
  for (const a in t) r[a] = ct(e[a], t[a]);
  return r;
}
function zl() {
  return {
    app: null,
    config: {
      isNativeTag: Qc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let cu = 0;
function iu(e, t) {
  return function (a, n = null) {
    (he(a) || (a = qe({}, a)), n != null && !De(n) && (n = null));
    const o = zl(),
      s = new WeakSet(),
      l = [];
    let c = !1;
    const u = (o.app = {
      _uid: cu++,
      _component: a,
      _props: n,
      _container: null,
      _context: o,
      _instance: null,
      version: Uu,
      get config() {
        return o.config;
      },
      set config(i) {},
      use(i, ...f) {
        return (
          s.has(i) ||
            (i && he(i.install)
              ? (s.add(i), i.install(u, ...f))
              : he(i) && (s.add(i), i(u, ...f))),
          u
        );
      },
      mixin(i) {
        return (o.mixins.includes(i) || o.mixins.push(i), u);
      },
      component(i, f) {
        return f ? ((o.components[i] = f), u) : o.components[i];
      },
      directive(i, f) {
        return f ? ((o.directives[i] = f), u) : o.directives[i];
      },
      mount(i, f, d) {
        if (!c) {
          const p = u._ceVNode || Oe(a, n);
          return (
            (p.appContext = o),
            d === !0 ? (d = "svg") : d === !1 && (d = void 0),
            e(p, i, d),
            (c = !0),
            (u._container = i),
            (i.__vue_app__ = u),
            D0(p.component)
          );
        }
      },
      onUnmount(i) {
        l.push(i);
      },
      unmount() {
        c &&
          (Dt(l, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(i, f) {
        return ((o.provides[i] = f), u);
      },
      runWithContext(i) {
        const f = Mr;
        Mr = u;
        try {
          return i();
        } finally {
          Mr = f;
        }
      },
    });
    return u;
  };
}
let Mr = null;
function Ir(e, t) {
  if (Qe) {
    let r = Qe.provides;
    const a = Qe.parent && Qe.parent.provides;
    (a === r && (r = Qe.provides = Object.create(a)), (r[e] = t));
  }
}
function We(e, t, r = !1) {
  const a = Qe || je;
  if (a || Mr) {
    const n = Mr
      ? Mr._context.provides
      : a
        ? a.parent == null
          ? a.vnode.appContext && a.vnode.appContext.provides
          : a.parent.provides
        : void 0;
    if (n && e in n) return n[e];
    if (arguments.length > 1) return r && he(t) ? t.call(a && a.proxy) : t;
  }
}
function uu() {
  return !!(Qe || je || Mr);
}
const Ul = {},
  $l = () => Object.create(Ul),
  jl = (e) => Object.getPrototypeOf(e) === Ul;
function fu(e, t, r, a = !1) {
  const n = {},
    o = $l();
  ((e.propsDefaults = Object.create(null)), Wl(e, t, n, o));
  for (const s in e.propsOptions[0]) s in n || (n[s] = void 0);
  (r ? (e.props = a ? n : _l(n)) : e.type.props ? (e.props = n) : (e.props = o),
    (e.attrs = o));
}
function du(e, t, r, a) {
  const {
      props: n,
      attrs: o,
      vnode: { patchFlag: s },
    } = e,
    l = Ce(n),
    [c] = e.propsOptions;
  let u = !1;
  if ((a || s > 0) && !(s & 16)) {
    if (s & 8) {
      const i = e.vnode.dynamicProps;
      for (let f = 0; f < i.length; f++) {
        let d = i[f];
        if (A0(e.emitsOptions, d)) continue;
        const p = t[d];
        if (c)
          if (Se(o, d)) p !== o[d] && ((o[d] = p), (u = !0));
          else {
            const y = Tt(d);
            n[y] = Cn(c, l, y, p, e, !1);
          }
        else p !== o[d] && ((o[d] = p), (u = !0));
      }
    }
  } else {
    Wl(e, t, n, o) && (u = !0);
    let i;
    for (const f in l)
      (!t || (!Se(t, f) && ((i = fr(f)) === f || !Se(t, i)))) &&
        (c
          ? r &&
            (r[f] !== void 0 || r[i] !== void 0) &&
            (n[f] = Cn(c, l, f, void 0, e, !0))
          : delete n[f]);
    if (o !== l)
      for (const f in o) (!t || !Se(t, f)) && (delete o[f], (u = !0));
  }
  u && jt(e.attrs, "set", "");
}
function Wl(e, t, r, a) {
  const [n, o] = e.propsOptions;
  let s = !1,
    l;
  if (t)
    for (let c in t) {
      if (fa(c)) continue;
      const u = t[c];
      let i;
      n && Se(n, (i = Tt(c)))
        ? !o || !o.includes(i)
          ? (r[i] = u)
          : ((l || (l = {}))[i] = u)
        : A0(e.emitsOptions, c) ||
          ((!(c in a) || u !== a[c]) && ((a[c] = u), (s = !0)));
    }
  if (o) {
    const c = Ce(r),
      u = l || Pe;
    for (let i = 0; i < o.length; i++) {
      const f = o[i];
      r[f] = Cn(n, c, f, u[f], e, !Se(u, f));
    }
  }
  return s;
}
function Cn(e, t, r, a, n, o) {
  const s = e[r];
  if (s != null) {
    const l = Se(s, "default");
    if (l && a === void 0) {
      const c = s.default;
      if (s.type !== Function && !s.skipFactory && he(c)) {
        const { propsDefaults: u } = n;
        if (r in u) a = u[r];
        else {
          const i = Ra(n);
          ((a = u[r] = c.call(null, t)), i());
        }
      } else a = c;
      n.ce && n.ce._setProp(r, a);
    }
    s[0] &&
      (o && !l ? (a = !1) : s[1] && (a === "" || a === fr(r)) && (a = !0));
  }
  return a;
}
const _u = new WeakMap();
function Gl(e, t, r = !1) {
  const a = r ? _u : t.propsCache,
    n = a.get(e);
  if (n) return n;
  const o = e.props,
    s = {},
    l = [];
  let c = !1;
  if (!he(e)) {
    const i = (f) => {
      c = !0;
      const [d, p] = Gl(f, t, !0);
      (qe(s, d), p && l.push(...p));
    };
    (!r && t.mixins.length && t.mixins.forEach(i),
      e.extends && i(e.extends),
      e.mixins && e.mixins.forEach(i));
  }
  if (!o && !c) return (De(e) && a.set(e, Nr), Nr);
  if (ce(o))
    for (let i = 0; i < o.length; i++) {
      const f = Tt(o[i]);
      $2(f) && (s[f] = Pe);
    }
  else if (o)
    for (const i in o) {
      const f = Tt(i);
      if ($2(f)) {
        const d = o[i],
          p = (s[f] = ce(d) || he(d) ? { type: d } : qe({}, d)),
          y = p.type;
        let I = !1,
          R = !0;
        if (ce(y))
          for (let O = 0; O < y.length; ++O) {
            const F = y[O],
              L = he(F) && F.name;
            if (L === "Boolean") {
              I = !0;
              break;
            } else L === "String" && (R = !1);
          }
        else I = he(y) && y.name === "Boolean";
        ((p[0] = I), (p[1] = R), (I || Se(p, "default")) && l.push(f));
      }
    }
  const u = [s, l];
  return (De(e) && a.set(e, u), u);
}
function $2(e) {
  return e[0] !== "$" && !fa(e);
}
const ql = (e) => e[0] === "_" || e === "$stable",
  _2 = (e) => (ce(e) ? e.map(Ot) : [Ot(e)]),
  pu = (e, t, r) => {
    if (t._n) return t;
    const a = zi((...n) => _2(t(...n)), r);
    return ((a._c = !1), a);
  },
  Yl = (e, t, r) => {
    const a = e._ctx;
    for (const n in e) {
      if (ql(n)) continue;
      const o = e[n];
      if (he(o)) t[n] = pu(n, o, a);
      else if (o != null) {
        const s = _2(o);
        t[n] = () => s;
      }
    }
  },
  Ql = (e, t) => {
    const r = _2(t);
    e.slots.default = () => r;
  },
  Xl = (e, t, r) => {
    for (const a in t) (r || a !== "_") && (e[a] = t[a]);
  },
  hu = (e, t, r) => {
    const a = (e.slots = $l());
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? (Xl(a, t, r), r && js(a, "_", n, !0)) : Yl(t, a);
    } else t && Ql(e, t);
  },
  gu = (e, t, r) => {
    const { vnode: a, slots: n } = e;
    let o = !0,
      s = Pe;
    if (a.shapeFlag & 32) {
      const l = t._;
      (l
        ? r && l === 1
          ? (o = !1)
          : Xl(n, t, r)
        : ((o = !t.$stable), Yl(t, n)),
        (s = t));
    } else t && (Ql(e, t), (s = { default: 1 }));
    if (o) for (const l in n) !ql(l) && s[l] == null && delete n[l];
  },
  ut = Du;
function vu(e) {
  return mu(e);
}
function mu(e, t) {
  const r = y0();
  r.__VUE__ = !0;
  const {
      insert: a,
      remove: n,
      patchProp: o,
      createElement: s,
      createText: l,
      createComment: c,
      setText: u,
      setElementText: i,
      parentNode: f,
      nextSibling: d,
      setScopeId: p = St,
      insertStaticContent: y,
    } = e,
    I = (
      C,
      T,
      w,
      V = null,
      W = null,
      $ = null,
      Z = void 0,
      X = null,
      h = !!T.dynamicChildren,
    ) => {
      if (C === T) return;
      (C && !br(C, T) && ((V = U(C)), Ke(C, W, $, !0), (C = null)),
        T.patchFlag === -2 && ((h = !1), (T.dynamicChildren = null)));
      const { type: x, ref: E, shapeFlag: H } = T;
      switch (x) {
        case Ea:
          R(C, T, w, V);
          break;
        case nt:
          O(C, T, w, V);
          break;
        case J0:
          C == null && F(T, w, V, Z);
          break;
        case Ye:
          q(C, T, w, V, W, $, Z, X, h);
          break;
        default:
          H & 1
            ? B(C, T, w, V, W, $, Z, X, h)
            : H & 6
              ? ie(C, T, w, V, W, $, Z, X, h)
              : (H & 64 || H & 128) && x.process(C, T, w, V, W, $, Z, X, h, oe);
      }
      E != null && W && n0(E, C && C.ref, $, T || C, !T);
    },
    R = (C, T, w, V) => {
      if (C == null) a((T.el = l(T.children)), w, V);
      else {
        const W = (T.el = C.el);
        T.children !== C.children && u(W, T.children);
      }
    },
    O = (C, T, w, V) => {
      C == null ? a((T.el = c(T.children || "")), w, V) : (T.el = C.el);
    },
    F = (C, T, w, V) => {
      [C.el, C.anchor] = y(C.children, T, w, V, C.el, C.anchor);
    },
    L = ({ el: C, anchor: T }, w, V) => {
      let W;
      for (; C && C !== T; ) ((W = d(C)), a(C, w, V), (C = W));
      a(T, w, V);
    },
    A = ({ el: C, anchor: T }) => {
      let w;
      for (; C && C !== T; ) ((w = d(C)), n(C), (C = w));
      n(T);
    },
    B = (C, T, w, V, W, $, Z, X, h) => {
      (T.type === "svg" ? (Z = "svg") : T.type === "math" && (Z = "mathml"),
        C == null ? K(T, w, V, W, $, Z, X, h) : k(C, T, W, $, Z, X, h));
    },
    K = (C, T, w, V, W, $, Z, X) => {
      let h, x;
      const { props: E, shapeFlag: H, transition: re, dirs: Y } = C;
      if (
        ((h = C.el = s(C.type, $, E && E.is, E)),
        H & 8
          ? i(h, C.children)
          : H & 16 && j(C.children, h, null, V, W, X0(C, $), Z, X),
        Y && gr(C, null, V, "created"),
        z(h, C, C.scopeId, Z, V),
        E)
      ) {
        for (const N in E) N !== "value" && !fa(N) && o(h, N, null, E[N], $, V);
        ("value" in E && o(h, "value", null, E.value, $),
          (x = E.onVnodeBeforeMount) && kt(x, V, C));
      }
      Y && gr(C, null, V, "beforeMount");
      const P = xu(W, re);
      (P && re.beforeEnter(h),
        a(h, T, w),
        ((x = E && E.onVnodeMounted) || P || Y) &&
          ut(() => {
            (x && kt(x, V, C),
              P && re.enter(h),
              Y && gr(C, null, V, "mounted"));
          }, W));
    },
    z = (C, T, w, V, W) => {
      if ((w && p(C, w), V)) for (let $ = 0; $ < V.length; $++) p(C, V[$]);
      if (W) {
        let $ = W.subTree;
        if (
          T === $ ||
          (t1($.type) && ($.ssContent === T || $.ssFallback === T))
        ) {
          const Z = W.vnode;
          z(C, Z, Z.scopeId, Z.slotScopeIds, W.parent);
        }
      }
    },
    j = (C, T, w, V, W, $, Z, X, h = 0) => {
      for (let x = h; x < C.length; x++) {
        const E = (C[x] = X ? sr(C[x]) : Ot(C[x]));
        I(null, E, T, w, V, W, $, Z, X);
      }
    },
    k = (C, T, w, V, W, $, Z) => {
      const X = (T.el = C.el);
      let { patchFlag: h, dynamicChildren: x, dirs: E } = T;
      h |= C.patchFlag & 16;
      const H = C.props || Pe,
        re = T.props || Pe;
      let Y;
      if (
        (w && vr(w, !1),
        (Y = re.onVnodeBeforeUpdate) && kt(Y, w, T, C),
        E && gr(T, C, w, "beforeUpdate"),
        w && vr(w, !0),
        ((H.innerHTML && re.innerHTML == null) ||
          (H.textContent && re.textContent == null)) &&
          i(X, ""),
        x
          ? te(C.dynamicChildren, x, X, w, V, X0(T, W), $)
          : Z || xe(C, T, X, null, w, V, X0(T, W), $, !1),
        h > 0)
      ) {
        if (h & 16) ue(X, H, re, w, W);
        else if (
          (h & 2 && H.class !== re.class && o(X, "class", null, re.class, W),
          h & 4 && o(X, "style", H.style, re.style, W),
          h & 8)
        ) {
          const P = T.dynamicProps;
          for (let N = 0; N < P.length; N++) {
            const se = P[N],
              we = H[se],
              Re = re[se];
            (Re !== we || se === "value") && o(X, se, we, Re, W, w);
          }
        }
        h & 1 && C.children !== T.children && i(X, T.children);
      } else !Z && x == null && ue(X, H, re, w, W);
      ((Y = re.onVnodeUpdated) || E) &&
        ut(() => {
          (Y && kt(Y, w, T, C), E && gr(T, C, w, "updated"));
        }, V);
    },
    te = (C, T, w, V, W, $, Z) => {
      for (let X = 0; X < T.length; X++) {
        const h = C[X],
          x = T[X],
          E =
            h.el && (h.type === Ye || !br(h, x) || h.shapeFlag & 70)
              ? f(h.el)
              : w;
        I(h, x, E, null, V, W, $, Z, !0);
      }
    },
    ue = (C, T, w, V, W) => {
      if (T !== w) {
        if (T !== Pe)
          for (const $ in T) !fa($) && !($ in w) && o(C, $, T[$], null, W, V);
        for (const $ in w) {
          if (fa($)) continue;
          const Z = w[$],
            X = T[$];
          Z !== X && $ !== "value" && o(C, $, X, Z, W, V);
        }
        "value" in w && o(C, "value", T.value, w.value, W);
      }
    },
    q = (C, T, w, V, W, $, Z, X, h) => {
      const x = (T.el = C ? C.el : l("")),
        E = (T.anchor = C ? C.anchor : l(""));
      let { patchFlag: H, dynamicChildren: re, slotScopeIds: Y } = T;
      (Y && (X = X ? X.concat(Y) : Y),
        C == null
          ? (a(x, w, V), a(E, w, V), j(T.children || [], w, E, W, $, Z, X, h))
          : H > 0 && H & 64 && re && C.dynamicChildren
            ? (te(C.dynamicChildren, re, w, W, $, Z, X),
              (T.key != null || (W && T === W.subTree)) && p2(C, T, !0))
            : xe(C, T, w, E, W, $, Z, X, h));
    },
    ie = (C, T, w, V, W, $, Z, X, h) => {
      ((T.slotScopeIds = X),
        C == null
          ? T.shapeFlag & 512
            ? W.ctx.activate(T, w, V, Z, h)
            : Ae(T, w, V, W, $, Z, h)
          : Fe(C, T, h));
    },
    Ae = (C, T, w, V, W, $, Z) => {
      const X = (C.component = Bu(C, V, W));
      if ((I0(C) && (X.ctx.renderer = oe), Ku(X, !1, Z), X.asyncDep)) {
        if ((W && W.registerDep(X, S, Z), !C.el)) {
          const h = (X.subTree = Oe(nt));
          O(null, h, T, w);
        }
      } else S(X, C, T, w, W, $, Z);
    },
    Fe = (C, T, w) => {
      const V = (T.component = C.component);
      if (Lu(C, T, w))
        if (V.asyncDep && !V.asyncResolved) {
          _e(V, T, w);
          return;
        } else ((V.next = T), V.update());
      else ((T.el = C.el), (V.vnode = T));
    },
    S = (C, T, w, V, W, $, Z) => {
      const X = () => {
        if (C.isMounted) {
          let { next: H, bu: re, u: Y, parent: P, vnode: N } = C;
          {
            const Ue = Jl(C);
            if (Ue) {
              (H && ((H.el = N.el), _e(C, H, Z)),
                Ue.asyncDep.then(() => {
                  C.isUnmounted || X();
                }));
              return;
            }
          }
          let se = H,
            we;
          (vr(C, !1),
            H ? ((H.el = N.el), _e(C, H, Z)) : (H = N),
            re && qa(re),
            (we = H.props && H.props.onVnodeBeforeUpdate) && kt(we, P, H, N),
            vr(C, !0));
          const Re = W2(C),
            Ze = C.subTree;
          ((C.subTree = Re),
            I(Ze, Re, f(Ze.el), U(Ze), C, W, $),
            (H.el = Re.el),
            se === null && Au(C, Re.el),
            Y && ut(Y, W),
            (we = H.props && H.props.onVnodeUpdated) &&
              ut(() => kt(we, P, H, N), W));
        } else {
          let H;
          const { el: re, props: Y } = T,
            { bm: P, m: N, parent: se, root: we, type: Re } = C,
            Ze = $r(T);
          (vr(C, !1),
            P && qa(P),
            !Ze && (H = Y && Y.onVnodeBeforeMount) && kt(H, se, T),
            vr(C, !0));
          {
            we.ce && we.ce._injectChildStyle(Re);
            const Ue = (C.subTree = W2(C));
            (I(null, Ue, w, V, C, W, $), (T.el = Ue.el));
          }
          if ((N && ut(N, W), !Ze && (H = Y && Y.onVnodeMounted))) {
            const Ue = T;
            ut(() => kt(H, se, Ue), W);
          }
          ((T.shapeFlag & 256 ||
            (se && $r(se.vnode) && se.vnode.shapeFlag & 256)) &&
            C.a &&
            ut(C.a, W),
            (C.isMounted = !0),
            (T = w = V = null));
        }
      };
      C.scope.on();
      const h = (C.effect = new Zs(X));
      C.scope.off();
      const x = (C.update = h.run.bind(h)),
        E = (C.job = h.runIfDirty.bind(h));
      ((E.i = C), (E.id = C.uid), (h.scheduler = () => l2(E)), vr(C, !0), x());
    },
    _e = (C, T, w) => {
      T.component = C;
      const V = C.vnode.props;
      ((C.vnode = T),
        (C.next = null),
        du(C, T.props, V, w),
        gu(C, T.children, w),
        dr(),
        R2(C),
        _r());
    },
    xe = (C, T, w, V, W, $, Z, X, h = !1) => {
      const x = C && C.children,
        E = C ? C.shapeFlag : 0,
        H = T.children,
        { patchFlag: re, shapeFlag: Y } = T;
      if (re > 0) {
        if (re & 128) {
          tt(x, H, w, V, W, $, Z, X, h);
          return;
        } else if (re & 256) {
          Je(x, H, w, V, W, $, Z, X, h);
          return;
        }
      }
      Y & 8
        ? (E & 16 && ze(x, W, $), H !== x && i(w, H))
        : E & 16
          ? Y & 16
            ? tt(x, H, w, V, W, $, Z, X, h)
            : ze(x, W, $, !0)
          : (E & 8 && i(w, ""), Y & 16 && j(H, w, V, W, $, Z, X, h));
    },
    Je = (C, T, w, V, W, $, Z, X, h) => {
      ((C = C || Nr), (T = T || Nr));
      const x = C.length,
        E = T.length,
        H = Math.min(x, E);
      let re;
      for (re = 0; re < H; re++) {
        const Y = (T[re] = h ? sr(T[re]) : Ot(T[re]));
        I(C[re], Y, w, null, W, $, Z, X, h);
      }
      x > E ? ze(C, W, $, !0, !1, H) : j(T, w, V, W, $, Z, X, h, H);
    },
    tt = (C, T, w, V, W, $, Z, X, h) => {
      let x = 0;
      const E = T.length;
      let H = C.length - 1,
        re = E - 1;
      for (; x <= H && x <= re; ) {
        const Y = C[x],
          P = (T[x] = h ? sr(T[x]) : Ot(T[x]));
        if (br(Y, P)) I(Y, P, w, null, W, $, Z, X, h);
        else break;
        x++;
      }
      for (; x <= H && x <= re; ) {
        const Y = C[H],
          P = (T[re] = h ? sr(T[re]) : Ot(T[re]));
        if (br(Y, P)) I(Y, P, w, null, W, $, Z, X, h);
        else break;
        (H--, re--);
      }
      if (x > H) {
        if (x <= re) {
          const Y = re + 1,
            P = Y < E ? T[Y].el : V;
          for (; x <= re; )
            (I(null, (T[x] = h ? sr(T[x]) : Ot(T[x])), w, P, W, $, Z, X, h),
              x++);
        }
      } else if (x > re) for (; x <= H; ) (Ke(C[x], W, $, !0), x++);
      else {
        const Y = x,
          P = x,
          N = new Map();
        for (x = P; x <= re; x++) {
          const lt = (T[x] = h ? sr(T[x]) : Ot(T[x]));
          lt.key != null && N.set(lt.key, x);
        }
        let se,
          we = 0;
        const Re = re - P + 1;
        let Ze = !1,
          Ue = 0;
        const Ht = new Array(Re);
        for (x = 0; x < Re; x++) Ht[x] = 0;
        for (x = Y; x <= H; x++) {
          const lt = C[x];
          if (we >= Re) {
            Ke(lt, W, $, !0);
            continue;
          }
          let xt;
          if (lt.key != null) xt = N.get(lt.key);
          else
            for (se = P; se <= re; se++)
              if (Ht[se - P] === 0 && br(lt, T[se])) {
                xt = se;
                break;
              }
          xt === void 0
            ? Ke(lt, W, $, !0)
            : ((Ht[xt - P] = x + 1),
              xt >= Ue ? (Ue = xt) : (Ze = !0),
              I(lt, T[xt], w, null, W, $, Z, X, h),
              we++);
        }
        const ra = Ze ? yu(Ht) : Nr;
        for (se = ra.length - 1, x = Re - 1; x >= 0; x--) {
          const lt = P + x,
            xt = T[lt],
            Va = lt + 1 < E ? T[lt + 1].el : V;
          Ht[x] === 0
            ? I(null, xt, w, Va, W, $, Z, X, h)
            : Ze && (se < 0 || x !== ra[se] ? Be(xt, w, Va, 2) : se--);
        }
      }
    },
    Be = (C, T, w, V, W = null) => {
      const { el: $, type: Z, transition: X, children: h, shapeFlag: x } = C;
      if (x & 6) {
        Be(C.component.subTree, T, w, V);
        return;
      }
      if (x & 128) {
        C.suspense.move(T, w, V);
        return;
      }
      if (x & 64) {
        Z.move(C, T, w, oe);
        return;
      }
      if (Z === Ye) {
        a($, T, w);
        for (let H = 0; H < h.length; H++) Be(h[H], T, w, V);
        a(C.anchor, T, w);
        return;
      }
      if (Z === J0) {
        L(C, T, w);
        return;
      }
      if (V !== 2 && x & 1 && X)
        if (V === 0) (X.beforeEnter($), a($, T, w), ut(() => X.enter($), W));
        else {
          const { leave: H, delayLeave: re, afterLeave: Y } = X,
            P = () => a($, T, w),
            N = () => {
              H($, () => {
                (P(), Y && Y());
              });
            };
          re ? re($, P, N) : N();
        }
      else a($, T, w);
    },
    Ke = (C, T, w, V = !1, W = !1) => {
      const {
        type: $,
        props: Z,
        ref: X,
        children: h,
        dynamicChildren: x,
        shapeFlag: E,
        patchFlag: H,
        dirs: re,
        cacheIndex: Y,
      } = C;
      if (
        (H === -2 && (W = !1),
        X != null && n0(X, null, w, C, !0),
        Y != null && (T.renderCache[Y] = void 0),
        E & 256)
      ) {
        T.ctx.deactivate(C);
        return;
      }
      const P = E & 1 && re,
        N = !$r(C);
      let se;
      if ((N && (se = Z && Z.onVnodeBeforeUnmount) && kt(se, T, C), E & 6))
        mt(C.component, w, V);
      else {
        if (E & 128) {
          C.suspense.unmount(w, V);
          return;
        }
        (P && gr(C, null, T, "beforeUnmount"),
          E & 64
            ? C.type.remove(C, T, w, oe, V)
            : x && !x.hasOnce && ($ !== Ye || (H > 0 && H & 64))
              ? ze(x, T, w, !1, !0)
              : (($ === Ye && H & 384) || (!W && E & 16)) && ze(h, T, w),
          V && _t(C));
      }
      ((N && (se = Z && Z.onVnodeUnmounted)) || P) &&
        ut(() => {
          (se && kt(se, T, C), P && gr(C, null, T, "unmounted"));
        }, w);
    },
    _t = (C) => {
      const { type: T, el: w, anchor: V, transition: W } = C;
      if (T === Ye) {
        st(w, V);
        return;
      }
      if (T === J0) {
        A(C);
        return;
      }
      const $ = () => {
        (n(w), W && !W.persisted && W.afterLeave && W.afterLeave());
      };
      if (C.shapeFlag & 1 && W && !W.persisted) {
        const { leave: Z, delayLeave: X } = W,
          h = () => Z(w, $);
        X ? X(C.el, $, h) : h();
      } else $();
    },
    st = (C, T) => {
      let w;
      for (; C !== T; ) ((w = d(C)), n(C), (C = w));
      n(T);
    },
    mt = (C, T, w) => {
      const { bum: V, scope: W, job: $, subTree: Z, um: X, m: h, a: x } = C;
      (j2(h),
        j2(x),
        V && qa(V),
        W.stop(),
        $ && (($.flags |= 8), Ke(Z, C, T, w)),
        X && ut(X, T),
        ut(() => {
          C.isUnmounted = !0;
        }, T),
        T &&
          T.pendingBranch &&
          !T.isUnmounted &&
          C.asyncDep &&
          !C.asyncResolved &&
          C.suspenseId === T.pendingId &&
          (T.deps--, T.deps === 0 && T.resolve()));
    },
    ze = (C, T, w, V = !1, W = !1, $ = 0) => {
      for (let Z = $; Z < C.length; Z++) Ke(C[Z], T, w, V, W);
    },
    U = (C) => {
      if (C.shapeFlag & 6) return U(C.component.subTree);
      if (C.shapeFlag & 128) return C.suspense.next();
      const T = d(C.anchor || C.el),
        w = T && T[bl];
      return w ? d(w) : T;
    };
  let ae = !1;
  const ee = (C, T, w) => {
      (C == null
        ? T._vnode && Ke(T._vnode, null, null, !0)
        : I(T._vnode || null, C, T, null, null, null, w),
        (T._vnode = C),
        ae || ((ae = !0), R2(), yl(), (ae = !1)));
    },
    oe = {
      p: I,
      um: Ke,
      m: Be,
      r: _t,
      mt: Ae,
      mc: j,
      pc: xe,
      pbc: te,
      n: U,
      o: e,
    };
  return { render: ee, hydrate: void 0, createApp: iu(ee) };
}
function X0({ type: e, props: t }, r) {
  return (r === "svg" && e === "foreignObject") ||
    (r === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : r;
}
function vr({ effect: e, job: t }, r) {
  r ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function xu(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function p2(e, t, r = !1) {
  const a = e.children,
    n = t.children;
  if (ce(a) && ce(n))
    for (let o = 0; o < a.length; o++) {
      const s = a[o];
      let l = n[o];
      (l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = n[o] = sr(n[o])), (l.el = s.el)),
        !r && l.patchFlag !== -2 && p2(s, l)),
        l.type === Ea && (l.el = s.el));
    }
}
function yu(e) {
  const t = e.slice(),
    r = [0];
  let a, n, o, s, l;
  const c = e.length;
  for (a = 0; a < c; a++) {
    const u = e[a];
    if (u !== 0) {
      if (((n = r[r.length - 1]), e[n] < u)) {
        ((t[a] = n), r.push(a));
        continue;
      }
      for (o = 0, s = r.length - 1; o < s; )
        ((l = (o + s) >> 1), e[r[l]] < u ? (o = l + 1) : (s = l));
      u < e[r[o]] && (o > 0 && (t[a] = r[o - 1]), (r[o] = a));
    }
  }
  for (o = r.length, s = r[o - 1]; o-- > 0; ) ((r[o] = s), (s = t[s]));
  return r;
}
function Jl(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Jl(t);
}
function j2(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const wu = Symbol.for("v-scx"),
  Cu = () => We(wu);
function L0(e, t) {
  return h2(e, null, t);
}
function gt(e, t, r) {
  return h2(e, t, r);
}
function h2(e, t, r = Pe) {
  const { immediate: a, deep: n, flush: o, once: s } = r,
    l = qe({}, r),
    c = (t && a) || (!t && o !== "post");
  let u;
  if (Ma) {
    if (o === "sync") {
      const p = Cu();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!c) {
      const p = () => {};
      return ((p.stop = St), (p.resume = St), (p.pause = St), p);
    }
  }
  const i = Qe;
  l.call = (p, y, I) => Dt(p, i, y, I);
  let f = !1;
  (o === "post"
    ? (l.scheduler = (p) => {
        ut(p, i && i.suspense);
      })
    : o !== "sync" &&
      ((f = !0),
      (l.scheduler = (p, y) => {
        y ? p() : l2(p);
      })),
    (l.augmentJob = (p) => {
      (t && (p.flags |= 4),
        f && ((p.flags |= 2), i && ((p.id = i.uid), (p.i = i))));
    }));
  const d = Ki(e, t, l);
  return (Ma && (u ? u.push(d) : c && d()), d);
}
function bu(e, t, r) {
  const a = this.proxy,
    n = Ne(e) ? (e.includes(".") ? Zl(a, e) : () => a[e]) : e.bind(a, a);
  let o;
  he(t) ? (o = t) : ((o = t.handler), (r = t));
  const s = Ra(this),
    l = h2(n, o.bind(a), r);
  return (s(), l);
}
function Zl(e, t) {
  const r = t.split(".");
  return () => {
    let a = e;
    for (let n = 0; n < r.length && a; n++) a = a[r[n]];
    return a;
  };
}
const Tu = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Tt(t)}Modifiers`] || e[`${fr(t)}Modifiers`];
function Mu(e, t, ...r) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || Pe;
  let n = r;
  const o = t.startsWith("update:"),
    s = o && Tu(a, t.slice(7));
  s &&
    (s.trim && (n = r.map((i) => (Ne(i) ? i.trim() : i))),
    s.number && (n = r.map(ti)));
  let l,
    c = a[(l = $0(t))] || a[(l = $0(Tt(t)))];
  (!c && o && (c = a[(l = $0(fr(t)))]), c && Dt(c, e, 6, n));
  const u = a[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    ((e.emitted[l] = !0), Dt(u, e, 6, n));
  }
}
function e1(e, t, r = !1) {
  const a = t.emitsCache,
    n = a.get(e);
  if (n !== void 0) return n;
  const o = e.emits;
  let s = {},
    l = !1;
  if (!he(e)) {
    const c = (u) => {
      const i = e1(u, t, !0);
      i && ((l = !0), qe(s, i));
    };
    (!r && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c));
  }
  return !o && !l
    ? (De(e) && a.set(e, null), null)
    : (ce(o) ? o.forEach((c) => (s[c] = null)) : qe(s, o),
      De(e) && a.set(e, s),
      s);
}
function A0(e, t) {
  return !e || !v0(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, fr(t)) || Se(e, t));
}
function W2(e) {
  const {
      type: t,
      vnode: r,
      proxy: a,
      withProxy: n,
      propsOptions: [o],
      slots: s,
      attrs: l,
      emit: c,
      render: u,
      renderCache: i,
      props: f,
      data: d,
      setupState: p,
      ctx: y,
      inheritAttrs: I,
    } = e,
    R = a0(e);
  let O, F;
  try {
    if (r.shapeFlag & 4) {
      const A = n || a,
        B = A;
      ((O = Ot(u.call(B, A, i, f, p, d, y))), (F = l));
    } else {
      const A = t;
      ((O = Ot(
        A.length > 1 ? A(f, { attrs: l, slots: s, emit: c }) : A(f, null),
      )),
        (F = t.props ? l : Iu(l)));
    }
  } catch (A) {
    ((ga.length = 0), T0(A, e, 1), (O = Oe(nt)));
  }
  let L = O;
  if (F && I !== !1) {
    const A = Object.keys(F),
      { shapeFlag: B } = L;
    A.length &&
      B & 7 &&
      (o && A.some(Gn) && (F = Su(F, o)), (L = ir(L, F, !1, !0)));
  }
  return (
    r.dirs &&
      ((L = ir(L, null, !1, !0)),
      (L.dirs = L.dirs ? L.dirs.concat(r.dirs) : r.dirs)),
    r.transition && Ar(L, r.transition),
    (O = L),
    a0(R),
    O
  );
}
const Iu = (e) => {
    let t;
    for (const r in e)
      (r === "class" || r === "style" || v0(r)) && ((t || (t = {}))[r] = e[r]);
    return t;
  },
  Su = (e, t) => {
    const r = {};
    for (const a in e) (!Gn(a) || !(a.slice(9) in t)) && (r[a] = e[a]);
    return r;
  };
function Lu(e, t, r) {
  const { props: a, children: n, component: o } = e,
    { props: s, children: l, patchFlag: c } = t,
    u = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (r && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return a ? G2(a, s, u) : !!s;
    if (c & 8) {
      const i = t.dynamicProps;
      for (let f = 0; f < i.length; f++) {
        const d = i[f];
        if (s[d] !== a[d] && !A0(u, d)) return !0;
      }
    }
  } else
    return (n || l) && (!l || !l.$stable)
      ? !0
      : a === s
        ? !1
        : a
          ? s
            ? G2(a, s, u)
            : !0
          : !!s;
  return !1;
}
function G2(e, t, r) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length) return !0;
  for (let n = 0; n < a.length; n++) {
    const o = a[n];
    if (t[o] !== e[o] && !A0(r, o)) return !0;
  }
  return !1;
}
function Au({ vnode: e, parent: t }, r) {
  for (; t; ) {
    const a = t.subTree;
    if ((a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e))
      (((e = t.vnode).el = r), (t = t.parent));
    else break;
  }
}
const t1 = (e) => e.__isSuspense;
function Du(e, t) {
  t && t.pendingBranch
    ? ce(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ni(e);
}
const Ye = Symbol.for("v-fgt"),
  Ea = Symbol.for("v-txt"),
  nt = Symbol.for("v-cmt"),
  J0 = Symbol.for("v-stc"),
  ga = [];
let vt = null;
function v(e = !1) {
  ga.push((vt = e ? null : []));
}
function Pu() {
  (ga.pop(), (vt = ga[ga.length - 1] || null));
}
let Ta = 1;
function q2(e, t = !1) {
  ((Ta += e), e < 0 && vt && t && (vt.hasOnce = !0));
}
function r1(e) {
  return (
    (e.dynamicChildren = Ta > 0 ? vt || Nr : null),
    Pu(),
    Ta > 0 && vt && vt.push(e),
    e
  );
}
function m(e, t, r, a, n, o) {
  return r1(_(e, t, r, a, n, o, !0));
}
function s0(e, t, r, a, n) {
  return r1(Oe(e, t, r, a, n, !0));
}
function jr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function br(e, t) {
  return e.type === t.type && e.key === t.key;
}
const a1 = ({ key: e }) => e ?? null,
  Qa = ({ ref: e, ref_key: t, ref_for: r }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Ne(e) || He(e) || he(e)
        ? { i: je, r: e, k: t, f: !!r }
        : e
      : null
  );
function _(
  e,
  t = null,
  r = null,
  a = 0,
  n = null,
  o = e === Ye ? 0 : 1,
  s = !1,
  l = !1,
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && a1(t),
    ref: t && Qa(t),
    scopeId: Cl,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: a,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: je,
  };
  return (
    l
      ? (g2(c, r), o & 128 && e.normalize(c))
      : r && (c.shapeFlag |= Ne(r) ? 8 : 16),
    Ta > 0 &&
      !s &&
      vt &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      vt.push(c),
    c
  );
}
const Oe = ku;
function ku(e, t = null, r = null, a = 0, n = null, o = !1) {
  if (((!e || e === Bl) && (e = nt), jr(e))) {
    const l = ir(e, t, !0);
    return (
      r && g2(l, r),
      Ta > 0 &&
        !o &&
        vt &&
        (l.shapeFlag & 6 ? (vt[vt.indexOf(e)] = l) : vt.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((zu(e) && (e = e.__vccOpts), t)) {
    t = Eu(t);
    let { class: l, style: c } = t;
    (l && !Ne(l) && (t.class = Xn(l)),
      De(c) && (n2(c) && !ce(c) && (c = qe({}, c)), (t.style = Qn(c))));
  }
  const s = Ne(e) ? 1 : t1(e) ? 128 : Tl(e) ? 64 : De(e) ? 4 : he(e) ? 2 : 0;
  return _(e, t, r, a, n, s, o, !0);
}
function Eu(e) {
  return e ? (n2(e) || jl(e) ? qe({}, e) : e) : null;
}
function ir(e, t, r = !1, a = !1) {
  const { props: n, ref: o, patchFlag: s, children: l, transition: c } = e,
    u = t ? n1(n || {}, t) : n,
    i = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && a1(u),
      ref:
        t && t.ref
          ? r && o
            ? ce(o)
              ? o.concat(Qa(t))
              : [o, Qa(t)]
            : Qa(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ye ? (s === -1 ? 16 : s | 16) : s,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && ir(e.ssContent),
      ssFallback: e.ssFallback && ir(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return (c && a && Ar(i, c.clone(i)), i);
}
function Ru(e = " ", t = 0) {
  return Oe(Ea, null, e, t);
}
function Gy(e = "", t = !1) {
  return t ? (v(), s0(nt, null, e)) : Oe(nt, null, e);
}
function Ot(e) {
  return e == null || typeof e == "boolean"
    ? Oe(nt)
    : ce(e)
      ? Oe(Ye, null, e.slice())
      : jr(e)
        ? sr(e)
        : Oe(Ea, null, String(e));
}
function sr(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : ir(e);
}
function g2(e, t) {
  let r = 0;
  const { shapeFlag: a } = e;
  if (t == null) t = null;
  else if (ce(t)) r = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), g2(e, n()), n._c && (n._d = !0));
      return;
    } else {
      r = 32;
      const n = t._;
      !n && !jl(t)
        ? (t._ctx = je)
        : n === 3 &&
          je &&
          (je.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    he(t)
      ? ((t = { default: t, _ctx: je }), (r = 32))
      : ((t = String(t)), a & 64 ? ((r = 16), (t = [Ru(t)])) : (r = 8));
  ((e.children = t), (e.shapeFlag |= r));
}
function n1(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    for (const n in a)
      if (n === "class")
        t.class !== a.class && (t.class = Xn([t.class, a.class]));
      else if (n === "style") t.style = Qn([t.style, a.style]);
      else if (v0(n)) {
        const o = t[n],
          s = a[n];
        s &&
          o !== s &&
          !(ce(o) && o.includes(s)) &&
          (t[n] = o ? [].concat(o, s) : s);
      } else n !== "" && (t[n] = a[n]);
  }
  return t;
}
function kt(e, t, r, a = null) {
  Dt(e, t, 7, [r, a]);
}
const Ou = zl();
let Vu = 0;
function Bu(e, t, r) {
  const a = e.type,
    n = (t ? t.appContext : e.appContext) || Ou,
    o = {
      uid: Vu++,
      vnode: e,
      type: a,
      parent: t,
      appContext: n,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Qs(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(n.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Gl(a, n),
      emitsOptions: e1(a, n),
      emit: null,
      emitted: null,
      propsDefaults: Pe,
      inheritAttrs: a.inheritAttrs,
      ctx: Pe,
      data: Pe,
      props: Pe,
      attrs: Pe,
      slots: Pe,
      refs: Pe,
      setupState: Pe,
      setupContext: null,
      suspense: r,
      suspenseId: r ? r.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Mu.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let Qe = null;
const Qt = () => Qe || je;
let l0, bn;
{
  const e = y0(),
    t = (r, a) => {
      let n;
      return (
        (n = e[r]) || (n = e[r] = []),
        n.push(a),
        (o) => {
          n.length > 1 ? n.forEach((s) => s(o)) : n[0](o);
        }
      );
    };
  ((l0 = t("__VUE_INSTANCE_SETTERS__", (r) => (Qe = r))),
    (bn = t("__VUE_SSR_SETTERS__", (r) => (Ma = r))));
}
const Ra = (e) => {
    const t = Qe;
    return (
      l0(e),
      e.scope.on(),
      () => {
        (e.scope.off(), l0(t));
      }
    );
  },
  Y2 = () => {
    (Qe && Qe.scope.off(), l0(null));
  };
function o1(e) {
  return e.vnode.shapeFlag & 4;
}
let Ma = !1;
function Ku(e, t = !1, r = !1) {
  t && bn(t);
  const { props: a, children: n } = e.vnode,
    o = o1(e);
  (fu(e, a, o, t), hu(e, n, r));
  const s = o ? Hu(e, t) : void 0;
  return (t && bn(!1), s);
}
function Hu(e, t) {
  const r = e.type;
  ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, ru)));
  const { setup: a } = r;
  if (a) {
    dr();
    const n = (e.setupContext = a.length > 1 ? l1(e) : null),
      o = Ra(e),
      s = ka(a, e, 0, [e.props, n]),
      l = zs(s);
    if ((_r(), o(), (l || e.sp) && !$r(e) && kl(e), l)) {
      if ((s.then(Y2, Y2), t))
        return s
          .then((c) => {
            Q2(e, c);
          })
          .catch((c) => {
            T0(c, e, 0);
          });
      e.asyncDep = s;
    } else Q2(e, s);
  } else s1(e);
}
function Q2(e, t, r) {
  (he(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : De(t) && (e.setupState = gl(t)),
    s1(e));
}
function s1(e, t, r) {
  const a = e.type;
  e.render || (e.render = a.render || St);
  {
    const n = Ra(e);
    dr();
    try {
      au(e);
    } finally {
      (_r(), n());
    }
  }
}
const Fu = {
  get(e, t) {
    return (rt(e, "get", ""), e[t]);
  },
};
function l1(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Fu),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function D0(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(gl(o2(e.exposed)), {
          get(t, r) {
            if (r in t) return t[r];
            if (r in ha) return ha[r](e);
          },
          has(t, r) {
            return r in t || r in ha;
          },
        }))
    : e.proxy;
}
function Nu(e, t = !0) {
  return he(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function zu(e) {
  return he(e) && "__vccOpts" in e;
}
const me = (e, t) => Vi(e, t, Ma);
function Zr(e, t, r) {
  const a = arguments.length;
  return a === 2
    ? De(t) && !ce(t)
      ? jr(t)
        ? Oe(e, null, [t])
        : Oe(e, t)
      : Oe(e, null, t)
    : (a > 3
        ? (r = Array.prototype.slice.call(arguments, 2))
        : a === 3 && jr(r) && (r = [r]),
      Oe(e, t, r));
}
const Uu = "3.5.13",
  qy = St;
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Tn;
const X2 = typeof window < "u" && window.trustedTypes;
if (X2)
  try {
    Tn = X2.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const c1 = Tn ? (e) => Tn.createHTML(e) : (e) => e,
  $u = "http://www.w3.org/2000/svg",
  ju = "http://www.w3.org/1998/Math/MathML",
  $t = typeof document < "u" ? document : null,
  J2 = $t && $t.createElement("template"),
  Wu = {
    insert: (e, t, r) => {
      t.insertBefore(e, r || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, r, a) => {
      const n =
        t === "svg"
          ? $t.createElementNS($u, e)
          : t === "mathml"
            ? $t.createElementNS(ju, e)
            : r
              ? $t.createElement(e, { is: r })
              : $t.createElement(e);
      return (
        e === "select" &&
          a &&
          a.multiple != null &&
          n.setAttribute("multiple", a.multiple),
        n
      );
    },
    createText: (e) => $t.createTextNode(e),
    createComment: (e) => $t.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => $t.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, r, a, n, o) {
      const s = r ? r.previousSibling : t.lastChild;
      if (n && (n === o || n.nextSibling))
        for (
          ;
          t.insertBefore(n.cloneNode(!0), r),
            !(n === o || !(n = n.nextSibling));
        );
      else {
        J2.innerHTML = c1(
          a === "svg"
            ? `<svg>${e}</svg>`
            : a === "mathml"
              ? `<math>${e}</math>`
              : e,
        );
        const l = J2.content;
        if (a === "svg" || a === "mathml") {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, r);
      }
      return [
        s ? s.nextSibling : t.firstChild,
        r ? r.previousSibling : t.lastChild,
      ];
    },
  },
  Zt = "transition",
  na = "animation",
  Wr = Symbol("_vtc"),
  i1 = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  u1 = qe({}, Ll, i1),
  Gu = (e) => ((e.displayName = "Transition"), (e.props = u1), e),
  Yy = Gu((e, { slots: t }) => Zr(ji, f1(e), t)),
  mr = (e, t = []) => {
    ce(e) ? e.forEach((r) => r(...t)) : e && e(...t);
  },
  Z2 = (e) => (e ? (ce(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function f1(e) {
  const t = {};
  for (const q in e) q in i1 || (t[q] = e[q]);
  if (e.css === !1) return t;
  const {
      name: r = "v",
      type: a,
      duration: n,
      enterFromClass: o = `${r}-enter-from`,
      enterActiveClass: s = `${r}-enter-active`,
      enterToClass: l = `${r}-enter-to`,
      appearFromClass: c = o,
      appearActiveClass: u = s,
      appearToClass: i = l,
      leaveFromClass: f = `${r}-leave-from`,
      leaveActiveClass: d = `${r}-leave-active`,
      leaveToClass: p = `${r}-leave-to`,
    } = e,
    y = qu(n),
    I = y && y[0],
    R = y && y[1],
    {
      onBeforeEnter: O,
      onEnter: F,
      onEnterCancelled: L,
      onLeave: A,
      onLeaveCancelled: B,
      onBeforeAppear: K = O,
      onAppear: z = F,
      onAppearCancelled: j = L,
    } = t,
    k = (q, ie, Ae, Fe) => {
      ((q._enterCancelled = Fe),
        rr(q, ie ? i : l),
        rr(q, ie ? u : s),
        Ae && Ae());
    },
    te = (q, ie) => {
      ((q._isLeaving = !1), rr(q, f), rr(q, p), rr(q, d), ie && ie());
    },
    ue = (q) => (ie, Ae) => {
      const Fe = q ? z : F,
        S = () => k(ie, q, Ae);
      (mr(Fe, [ie, S]),
        eo(() => {
          (rr(ie, q ? c : o), Et(ie, q ? i : l), Z2(Fe) || to(ie, a, I, S));
        }));
    };
  return qe(t, {
    onBeforeEnter(q) {
      (mr(O, [q]), Et(q, o), Et(q, s));
    },
    onBeforeAppear(q) {
      (mr(K, [q]), Et(q, c), Et(q, u));
    },
    onEnter: ue(!1),
    onAppear: ue(!0),
    onLeave(q, ie) {
      q._isLeaving = !0;
      const Ae = () => te(q, ie);
      (Et(q, f),
        q._enterCancelled ? (Et(q, d), Mn()) : (Mn(), Et(q, d)),
        eo(() => {
          q._isLeaving && (rr(q, f), Et(q, p), Z2(A) || to(q, a, R, Ae));
        }),
        mr(A, [q, Ae]));
    },
    onEnterCancelled(q) {
      (k(q, !1, void 0, !0), mr(L, [q]));
    },
    onAppearCancelled(q) {
      (k(q, !0, void 0, !0), mr(j, [q]));
    },
    onLeaveCancelled(q) {
      (te(q), mr(B, [q]));
    },
  });
}
function qu(e) {
  if (e == null) return null;
  if (De(e)) return [Z0(e.enter), Z0(e.leave)];
  {
    const t = Z0(e);
    return [t, t];
  }
}
function Z0(e) {
  return ri(e);
}
function Et(e, t) {
  (t.split(/\s+/).forEach((r) => r && e.classList.add(r)),
    (e[Wr] || (e[Wr] = new Set())).add(t));
}
function rr(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const r = e[Wr];
  r && (r.delete(t), r.size || (e[Wr] = void 0));
}
function eo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Yu = 0;
function to(e, t, r, a) {
  const n = (e._endId = ++Yu),
    o = () => {
      n === e._endId && a();
    };
  if (r != null) return setTimeout(o, r);
  const { type: s, timeout: l, propCount: c } = d1(e, t);
  if (!s) return a();
  const u = s + "end";
  let i = 0;
  const f = () => {
      (e.removeEventListener(u, d), o());
    },
    d = (p) => {
      p.target === e && ++i >= c && f();
    };
  (setTimeout(() => {
    i < c && f();
  }, l + 1),
    e.addEventListener(u, d));
}
function d1(e, t) {
  const r = window.getComputedStyle(e),
    a = (y) => (r[y] || "").split(", "),
    n = a(`${Zt}Delay`),
    o = a(`${Zt}Duration`),
    s = ro(n, o),
    l = a(`${na}Delay`),
    c = a(`${na}Duration`),
    u = ro(l, c);
  let i = null,
    f = 0,
    d = 0;
  t === Zt
    ? s > 0 && ((i = Zt), (f = s), (d = o.length))
    : t === na
      ? u > 0 && ((i = na), (f = u), (d = c.length))
      : ((f = Math.max(s, u)),
        (i = f > 0 ? (s > u ? Zt : na) : null),
        (d = i ? (i === Zt ? o.length : c.length) : 0));
  const p =
    i === Zt && /\b(transform|all)(,|$)/.test(a(`${Zt}Property`).toString());
  return { type: i, timeout: f, propCount: d, hasTransform: p };
}
function ro(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((r, a) => ao(r) + ao(e[a])));
}
function ao(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Mn() {
  return document.body.offsetHeight;
}
function Qu(e, t, r) {
  const a = e[Wr];
  (a && (t = (t ? [t, ...a] : [...a]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : r
        ? e.setAttribute("class", t)
        : (e.className = t));
}
const c0 = Symbol("_vod"),
  _1 = Symbol("_vsh"),
  Qy = {
    beforeMount(e, { value: t }, { transition: r }) {
      ((e[c0] = e.style.display === "none" ? "" : e.style.display),
        r && t ? r.beforeEnter(e) : oa(e, t));
    },
    mounted(e, { value: t }, { transition: r }) {
      r && t && r.enter(e);
    },
    updated(e, { value: t, oldValue: r }, { transition: a }) {
      !t != !r &&
        (a
          ? t
            ? (a.beforeEnter(e), oa(e, !0), a.enter(e))
            : a.leave(e, () => {
                oa(e, !1);
              })
          : oa(e, t));
    },
    beforeUnmount(e, { value: t }) {
      oa(e, t);
    },
  };
function oa(e, t) {
  ((e.style.display = t ? e[c0] : "none"), (e[_1] = !t));
}
const Xu = Symbol(""),
  Ju = /(^|;)\s*display\s*:/;
function Zu(e, t, r) {
  const a = e.style,
    n = Ne(r);
  let o = !1;
  if (r && !n) {
    if (t)
      if (Ne(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          r[l] == null && Xa(a, l, "");
        }
      else for (const s in t) r[s] == null && Xa(a, s, "");
    for (const s in r) (s === "display" && (o = !0), Xa(a, s, r[s]));
  } else if (n) {
    if (t !== r) {
      const s = a[Xu];
      (s && (r += ";" + s), (a.cssText = r), (o = Ju.test(r)));
    }
  } else t && e.removeAttribute("style");
  c0 in e && ((e[c0] = o ? a.display : ""), e[_1] && (a.display = "none"));
}
const no = /\s*!important$/;
function Xa(e, t, r) {
  if (ce(r)) r.forEach((a) => Xa(e, t, a));
  else if ((r == null && (r = ""), t.startsWith("--"))) e.setProperty(t, r);
  else {
    const a = e4(e, t);
    no.test(r)
      ? e.setProperty(fr(a), r.replace(no, ""), "important")
      : (e[a] = r);
  }
}
const oo = ["Webkit", "Moz", "ms"],
  en = {};
function e4(e, t) {
  const r = en[t];
  if (r) return r;
  let a = Tt(t);
  if (a !== "filter" && a in e) return (en[t] = a);
  a = Pa(a);
  for (let n = 0; n < oo.length; n++) {
    const o = oo[n] + a;
    if (o in e) return (en[t] = o);
  }
  return t;
}
const so = "http://www.w3.org/1999/xlink";
function lo(e, t, r, a, n, o = ci(t)) {
  a && t.startsWith("xlink:")
    ? r == null
      ? e.removeAttributeNS(so, t.slice(6, t.length))
      : e.setAttributeNS(so, t, r)
    : r == null || (o && !Ws(r))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : At(r) ? String(r) : r);
}
function co(e, t, r, a, n) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? c1(r) : r);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
      c = r == null ? (e.type === "checkbox" ? "on" : "") : String(r);
    ((l !== c || !("_value" in e)) && (e.value = c),
      r == null && e.removeAttribute(t),
      (e._value = r));
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (r = Ws(r))
      : r == null && l === "string"
        ? ((r = ""), (s = !0))
        : l === "number" && ((r = 0), (s = !0));
  }
  try {
    e[t] = r;
  } catch {}
  s && e.removeAttribute(n || t);
}
function p1(e, t, r, a) {
  e.addEventListener(t, r, a);
}
function t4(e, t, r, a) {
  e.removeEventListener(t, r, a);
}
const io = Symbol("_vei");
function r4(e, t, r, a, n = null) {
  const o = e[io] || (e[io] = {}),
    s = o[t];
  if (a && s) s.value = a;
  else {
    const [l, c] = a4(t);
    if (a) {
      const u = (o[t] = s4(a, n));
      p1(e, l, u, c);
    } else s && (t4(e, l, s, c), (o[t] = void 0));
  }
}
const uo = /(?:Once|Passive|Capture)$/;
function a4(e) {
  let t;
  if (uo.test(e)) {
    t = {};
    let a;
    for (; (a = e.match(uo)); )
      ((e = e.slice(0, e.length - a[0].length)), (t[a[0].toLowerCase()] = !0));
  }
  return [e[2] === ":" ? e.slice(3) : fr(e.slice(2)), t];
}
let tn = 0;
const n4 = Promise.resolve(),
  o4 = () => tn || (n4.then(() => (tn = 0)), (tn = Date.now()));
function s4(e, t) {
  const r = (a) => {
    if (!a._vts) a._vts = Date.now();
    else if (a._vts <= r.attached) return;
    Dt(l4(a, r.value), t, 5, [a]);
  };
  return ((r.value = e), (r.attached = o4()), r);
}
function l4(e, t) {
  if (ce(t)) {
    const r = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        (r.call(e), (e._stopped = !0));
      }),
      t.map((a) => (n) => !n._stopped && a && a(n))
    );
  } else return t;
}
const fo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  c4 = (e, t, r, a, n, o) => {
    const s = n === "svg";
    t === "class"
      ? Qu(e, a, s)
      : t === "style"
        ? Zu(e, r, a)
        : v0(t)
          ? Gn(t) || r4(e, t, r, a, o)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : i4(e, t, a, s)
              )
            ? (co(e, t, a),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                lo(e, t, a, s, o, t !== "value"))
            : e._isVueCE && (/[A-Z]/.test(t) || !Ne(a))
              ? co(e, Tt(t), a, o, t)
              : (t === "true-value"
                  ? (e._trueValue = a)
                  : t === "false-value" && (e._falseValue = a),
                lo(e, t, a, s));
  };
function i4(e, t, r, a) {
  if (a)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && fo(t) && he(r))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return fo(t) && Ne(r) ? !1 : t in e;
}
const h1 = new WeakMap(),
  g1 = new WeakMap(),
  i0 = Symbol("_moveCb"),
  _o = Symbol("_enterCb"),
  u4 = (e) => (delete e.props.mode, e),
  f4 = u4({
    name: "TransitionGroup",
    props: qe({}, u1, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const r = Qt(),
        a = Sl();
      let n, o;
      return (
        Ol(() => {
          if (!n.length) return;
          const s = e.moveClass || `${e.name || "v"}-move`;
          if (!h4(n[0].el, r.vnode.el, s)) return;
          (n.forEach(d4), n.forEach(_4));
          const l = n.filter(p4);
          (Mn(),
            l.forEach((c) => {
              const u = c.el,
                i = u.style;
              (Et(u, s),
                (i.transform = i.webkitTransform = i.transitionDuration = ""));
              const f = (u[i0] = (d) => {
                (d && d.target !== u) ||
                  ((!d || /transform$/.test(d.propertyName)) &&
                    (u.removeEventListener("transitionend", f),
                    (u[i0] = null),
                    rr(u, s)));
              });
              u.addEventListener("transitionend", f);
            }));
        }),
        () => {
          const s = Ce(e),
            l = f1(s);
          let c = s.tag || Ye;
          if (((n = []), o))
            for (let u = 0; u < o.length; u++) {
              const i = o[u];
              i.el &&
                i.el instanceof Element &&
                (n.push(i),
                Ar(i, ba(i, l, a, r)),
                h1.set(i, i.el.getBoundingClientRect()));
            }
          o = t.default ? c2(t.default()) : [];
          for (let u = 0; u < o.length; u++) {
            const i = o[u];
            i.key != null && Ar(i, ba(i, l, a, r));
          }
          return Oe(c, null, o);
        }
      );
    },
  }),
  Xy = f4;
function d4(e) {
  const t = e.el;
  (t[i0] && t[i0](), t[_o] && t[_o]());
}
function _4(e) {
  g1.set(e, e.el.getBoundingClientRect());
}
function p4(e) {
  const t = h1.get(e),
    r = g1.get(e),
    a = t.left - r.left,
    n = t.top - r.top;
  if (a || n) {
    const o = e.el.style;
    return (
      (o.transform = o.webkitTransform = `translate(${a}px,${n}px)`),
      (o.transitionDuration = "0s"),
      e
    );
  }
}
function h4(e, t, r) {
  const a = e.cloneNode(),
    n = e[Wr];
  (n &&
    n.forEach((l) => {
      l.split(/\s+/).forEach((c) => c && a.classList.remove(c));
    }),
    r.split(/\s+/).forEach((l) => l && a.classList.add(l)),
    (a.style.display = "none"));
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(a);
  const { hasTransform: s } = d1(a);
  return (o.removeChild(a), s);
}
const po = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return ce(t) ? (r) => qa(t, r) : t;
  },
  rn = Symbol("_assign"),
  Jy = {
    deep: !0,
    created(e, t, r) {
      ((e[rn] = po(r)),
        p1(e, "change", () => {
          const a = e._modelValue,
            n = g4(e),
            o = e.checked,
            s = e[rn];
          if (ce(a)) {
            const l = Gs(a, n),
              c = l !== -1;
            if (o && !c) s(a.concat(n));
            else if (!o && c) {
              const u = [...a];
              (u.splice(l, 1), s(u));
            }
          } else if (m0(a)) {
            const l = new Set(a);
            (o ? l.add(n) : l.delete(n), s(l));
          } else s(v1(e, o));
        }));
    },
    mounted: ho,
    beforeUpdate(e, t, r) {
      ((e[rn] = po(r)), ho(e, t, r));
    },
  };
function ho(e, { value: t, oldValue: r }, a) {
  e._modelValue = t;
  let n;
  if (ce(t)) n = Gs(t, a.props.value) > -1;
  else if (m0(t)) n = t.has(a.props.value);
  else {
    if (t === r) return;
    n = w0(t, v1(e, !0));
  }
  e.checked !== n && (e.checked = n);
}
function g4(e) {
  return "_value" in e ? e._value : e.value;
}
function v1(e, t) {
  const r = t ? "_trueValue" : "_falseValue";
  return r in e ? e[r] : t;
}
const v4 = ["ctrl", "shift", "alt", "meta"],
  m4 = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => v4.some((r) => e[`${r}Key`] && !t.includes(r)),
  },
  Zy = (e, t) => {
    const r = e._withMods || (e._withMods = {}),
      a = t.join(".");
    return (
      r[a] ||
      (r[a] = (n, ...o) => {
        for (let s = 0; s < t.length; s++) {
          const l = m4[t[s]];
          if (l && l(n, t)) return;
        }
        return e(n, ...o);
      })
    );
  },
  x4 = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  ew = (e, t) => {
    const r = e._withKeys || (e._withKeys = {}),
      a = t.join(".");
    return (
      r[a] ||
      (r[a] = (n) => {
        if (!("key" in n)) return;
        const o = fr(n.key);
        if (t.some((s) => s === o || x4[s] === o)) return e(n);
      })
    );
  },
  y4 = qe({ patchProp: c4 }, Wu);
let go;
function m1() {
  return go || (go = vu(y4));
}
const tw = (...e) => {
    m1().render(...e);
  },
  w4 = (...e) => {
    const t = m1().createApp(...e),
      { mount: r } = t;
    return (
      (t.mount = (a) => {
        const n = b4(a);
        if (!n) return;
        const o = t._component;
        (!he(o) && !o.render && !o.template && (o.template = n.innerHTML),
          n.nodeType === 1 && (n.textContent = ""));
        const s = r(n, !1, C4(n));
        return (
          n instanceof Element &&
            (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")),
          s
        );
      }),
      t
    );
  };
function C4(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function b4(e) {
  return Ne(e) ? document.querySelector(e) : e;
}
/*! Element Plus Icons Vue v2.3.1 */ var T4 = g({
    name: "AddLocation",
    __name: "add-location",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544",
            }),
            _("path", {
              fill: "currentColor",
              d: "M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0z",
            }),
          ],
        )
      );
    },
  }),
  M4 = T4,
  I4 = g({
    name: "Aim",
    __name: "aim",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32m0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32M96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32m576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32",
            }),
          ],
        )
      );
    },
  }),
  S4 = I4,
  L4 = g({
    name: "AlarmClock",
    __name: "alarm-clock",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768",
            }),
            _("path", {
              fill: "currentColor",
              d: "m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128z",
            }),
          ],
        )
      );
    },
  }),
  A4 = L4,
  D4 = g({
    name: "Apple",
    __name: "apple",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z",
            }),
          ],
        )
      );
    },
  }),
  P4 = D4,
  k4 = g({
    name: "ArrowDownBold",
    __name: "arrow-down-bold",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z",
            }),
          ],
        )
      );
    },
  }),
  E4 = k4,
  R4 = g({
    name: "ArrowDown",
    __name: "arrow-down",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z",
            }),
          ],
        )
      );
    },
  }),
  O4 = R4,
  V4 = g({
    name: "ArrowLeftBold",
    __name: "arrow-left-bold",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z",
            }),
          ],
        )
      );
    },
  }),
  B4 = V4,
  K4 = g({
    name: "ArrowLeft",
    __name: "arrow-left",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z",
            }),
          ],
        )
      );
    },
  }),
  H4 = K4,
  F4 = g({
    name: "ArrowRightBold",
    __name: "arrow-right-bold",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z",
            }),
          ],
        )
      );
    },
  }),
  N4 = F4,
  z4 = g({
    name: "ArrowRight",
    __name: "arrow-right",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z",
            }),
          ],
        )
      );
    },
  }),
  U4 = z4,
  $4 = g({
    name: "ArrowUpBold",
    __name: "arrow-up-bold",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z",
            }),
          ],
        )
      );
    },
  }),
  j4 = $4,
  W4 = g({
    name: "ArrowUp",
    __name: "arrow-up",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0",
            }),
          ],
        )
      );
    },
  }),
  G4 = W4,
  q4 = g({
    name: "Avatar",
    __name: "avatar",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0",
            }),
          ],
        )
      );
    },
  }),
  Y4 = q4,
  Q4 = g({
    name: "Back",
    __name: "back",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64",
            }),
            _("path", {
              fill: "currentColor",
              d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z",
            }),
          ],
        )
      );
    },
  }),
  X4 = Q4,
  J4 = g({
    name: "Baseball",
    __name: "baseball",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104",
            }),
            _("path", {
              fill: "currentColor",
              d: "M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z",
            }),
          ],
        )
      );
    },
  }),
  Z4 = J4,
  e6 = g({
    name: "Basketball",
    __name: "basketball",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336m-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8m106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6",
            }),
          ],
        )
      );
    },
  }),
  t6 = e6,
  r6 = g({
    name: "BellFilled",
    __name: "bell-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M640 832a128 128 0 0 1-256 0zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8z",
            }),
          ],
        )
      );
    },
  }),
  a6 = r6,
  n6 = g({
    name: "Bell",
    __name: "bell",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64",
            }),
            _("path", {
              fill: "currentColor",
              d: "M256 768h512V448a256 256 0 1 0-512 0zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320",
            }),
            _("path", {
              fill: "currentColor",
              d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32m352 128h128a64 64 0 0 1-128 0",
            }),
          ],
        )
      );
    },
  }),
  o6 = n6,
  s6 = g({
    name: "Bicycle",
    __name: "bicycle",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384",
            }),
            _("path", {
              fill: "currentColor",
              d: "M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384",
            }),
            _("path", {
              fill: "currentColor",
              d: "M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384z",
            }),
            _("path", {
              fill: "currentColor",
              d: "m373.376 599.808-42.752-47.616 320-288 42.752 47.616z",
            }),
          ],
        )
      );
    },
  }),
  l6 = s6,
  c6 = g({
    name: "BottomLeft",
    __name: "bottom-left",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z",
            }),
          ],
        )
      );
    },
  }),
  i6 = c6,
  u6 = g({
    name: "BottomRight",
    __name: "bottom-right",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312z",
            }),
          ],
        )
      );
    },
  }),
  f6 = u6,
  d6 = g({
    name: "Bottom",
    __name: "bottom",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z",
            }),
          ],
        )
      );
    },
  }),
  _6 = d6,
  p6 = g({
    name: "Bowl",
    __name: "bowl",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424zM352 768v64h320v-64z",
            }),
          ],
        )
      );
    },
  }),
  h6 = p6,
  g6 = g({
    name: "Box",
    __name: "box",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M317.056 128 128 344.064V896h768V344.064L706.944 128zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z",
            }),
            _("path", { fill: "currentColor", d: "M64 320h896v64H64z" }),
            _("path", {
              fill: "currentColor",
              d: "M448 327.872V640h128V327.872L526.08 128h-28.16zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320z",
            }),
          ],
        )
      );
    },
  }),
  v6 = g6,
  m6 = g({
    name: "Briefcase",
    __name: "briefcase",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M320 320V128h384v192h192v192H128V320zM128 576h768v320H128zm256-256h256.064V192H384z",
            }),
          ],
        )
      );
    },
  }),
  x6 = m6,
  y6 = g({
    name: "BrushFilled",
    __name: "brush-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128zM192 512V128.064h640V512z",
            }),
          ],
        )
      );
    },
  }),
  w6 = y6,
  C6 = g({
    name: "Brush",
    __name: "brush",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z",
            }),
          ],
        )
      );
    },
  }),
  b6 = C6,
  T6 = g({
    name: "Burger",
    __name: "burger",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44M832 448a320 320 0 0 0-640 0zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704z",
            }),
          ],
        )
      );
    },
  }),
  M6 = T6,
  I6 = g({
    name: "Calendar",
    __name: "calendar",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64",
            }),
          ],
        )
      );
    },
  }),
  S6 = I6,
  L6 = g({
    name: "CameraFilled",
    __name: "camera-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4m0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512",
            }),
          ],
        )
      );
    },
  }),
  A6 = L6,
  D6 = g({
    name: "Camera",
    __name: "camera",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M896 256H128v576h768zm-199.424-64-32.064-64h-304.96l-32 64zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32m416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320m0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448",
            }),
          ],
        )
      );
    },
  }),
  P6 = D6,
  k6 = g({
    name: "CaretBottom",
    __name: "caret-bottom",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [_("path", { fill: "currentColor", d: "m192 384 320 384 320-384z" })],
        )
      );
    },
  }),
  E6 = k6,
  R6 = g({
    name: "CaretLeft",
    __name: "caret-left",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M672 192 288 511.936 672 832z",
            }),
          ],
        )
      );
    },
  }),
  O6 = R6,
  V6 = g({
    name: "CaretRight",
    __name: "caret-right",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [_("path", { fill: "currentColor", d: "M384 192v640l384-320.064z" })],
        )
      );
    },
  }),
  B6 = V6,
  K6 = g({
    name: "CaretTop",
    __name: "caret-top",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [_("path", { fill: "currentColor", d: "M512 320 192 704h639.936z" })],
        )
      );
    },
  }),
  H6 = K6,
  F6 = g({
    name: "Cellphone",
    __name: "cellphone",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64m128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64m128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128",
            }),
          ],
        )
      );
    },
  }),
  N6 = F6,
  z6 = g({
    name: "ChatDotRound",
    __name: "chat-dot-round",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4m-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4",
            }),
          ],
        )
      );
    },
  }),
  U6 = z6,
  $6 = g({
    name: "ChatDotSquare",
    __name: "chat-dot-square",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z",
            }),
          ],
        )
      );
    },
  }),
  j6 = $6,
  W6 = g({
    name: "ChatLineRound",
    __name: "chat-line-round",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32m32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32",
            }),
          ],
        )
      );
    },
  }),
  G6 = W6,
  q6 = g({
    name: "ChatLineSquare",
    __name: "chat-line-square",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32m0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32",
            }),
          ],
        )
      );
    },
  }),
  Y6 = q6,
  Q6 = g({
    name: "ChatRound",
    __name: "chat-round",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z",
            }),
          ],
        )
      );
    },
  }),
  X6 = Q6,
  J6 = g({
    name: "ChatSquare",
    __name: "chat-square",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128z",
            }),
          ],
        )
      );
    },
  }),
  Z6 = J6,
  e3 = g({
    name: "Check",
    __name: "check",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z",
            }),
          ],
        )
      );
    },
  }),
  t3 = e3,
  r3 = g({
    name: "Checked",
    __name: "checked",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M704 192h160v736H160V192h160.064v64H704zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024zM384 192V96h256v96z",
            }),
          ],
        )
      );
    },
  }),
  a3 = r3,
  n3 = g({
    name: "Cherry",
    __name: "cherry",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320m448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320",
            }),
          ],
        )
      );
    },
  }),
  o3 = n3,
  s3 = g({
    name: "Chicken",
    __name: "chicken",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84M244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z",
            }),
          ],
        )
      );
    },
  }),
  l3 = s3,
  c3 = g({
    name: "ChromeFilled",
    __name: "chrome-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            "xml:space": "preserve",
            style: { "enable-background": "new 0 0 1024 1024" },
            viewBox: "0 0 1024 1024",
          },
          [
            _("path", {
              fill: "currentColor",
              d: "M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91",
            }),
            _("path", {
              fill: "currentColor",
              d: "M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21m117.56 604.72H512zm-97.25-236.73a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z",
            }),
          ],
        )
      );
    },
  }),
  i3 = c3,
  u3 = g({
    name: "CircleCheckFilled",
    __name: "circle-check-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z",
            }),
          ],
        )
      );
    },
  }),
  f3 = u3,
  d3 = g({
    name: "CircleCheck",
    __name: "circle-check",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896",
            }),
            _("path", {
              fill: "currentColor",
              d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z",
            }),
          ],
        )
      );
    },
  }),
  _3 = d3,
  p3 = g({
    name: "CircleCloseFilled",
    __name: "circle-close-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z",
            }),
          ],
        )
      );
    },
  }),
  h3 = p3,
  g3 = g({
    name: "CircleClose",
    __name: "circle-close",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896",
            }),
          ],
        )
      );
    },
  }),
  v3 = g3,
  m3 = g({
    name: "CirclePlusFilled",
    __name: "circle-plus-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z",
            }),
          ],
        )
      );
    },
  }),
  x3 = m3,
  y3 = g({
    name: "CirclePlus",
    __name: "circle-plus",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64",
            }),
            _("path", {
              fill: "currentColor",
              d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896",
            }),
          ],
        )
      );
    },
  }),
  w3 = y3,
  C3 = g({
    name: "Clock",
    __name: "clock",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896",
            }),
            _("path", {
              fill: "currentColor",
              d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32",
            }),
          ],
        )
      );
    },
  }),
  b3 = C3,
  T3 = g({
    name: "CloseBold",
    __name: "close-bold",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z",
            }),
          ],
        )
      );
    },
  }),
  M3 = T3,
  I3 = g({
    name: "Close",
    __name: "close",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z",
            }),
          ],
        )
      );
    },
  }),
  S3 = I3,
  L3 = g({
    name: "Cloudy",
    __name: "cloudy",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872m-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z",
            }),
          ],
        )
      );
    },
  }),
  A3 = L3,
  D3 = g({
    name: "CoffeeCup",
    __name: "coffee-cup",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zm0 64v256a128 128 0 1 0 0-256M96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64m32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192z",
            }),
          ],
        )
      );
    },
  }),
  P3 = D3,
  k3 = g({
    name: "Coffee",
    __name: "coffee",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304zm-64.128 0 4.544-64H260.736l4.544 64h493.184m-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784m68.736 64 36.544 512H708.16l36.544-512z",
            }),
          ],
        )
      );
    },
  }),
  E3 = k3,
  R3 = g({
    name: "Coin",
    __name: "coin",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z",
            }),
            _("path", {
              fill: "currentColor",
              d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224m0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160",
            }),
          ],
        )
      );
    },
  }),
  O3 = R3,
  V3 = g({
    name: "ColdDrink",
    __name: "cold-drink",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64M656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928z",
            }),
          ],
        )
      );
    },
  }),
  B3 = V3,
  K3 = g({
    name: "CollectionTag",
    __name: "collection-tag",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32",
            }),
          ],
        )
      );
    },
  }),
  H3 = K3,
  F3 = g({
    name: "Collection",
    __name: "collection",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M192 736h640V128H256a64 64 0 0 0-64 64zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64",
            }),
            _("path", {
              fill: "currentColor",
              d: "M240 800a48 48 0 1 0 0 96h592v-96zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224m144-608v250.88l96-76.8 96 76.8V128zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44z",
            }),
          ],
        )
      );
    },
  }),
  N3 = F3,
  z3 = g({
    name: "Comment",
    __name: "comment",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112M128 128v640h192v160l224-160h352V128z",
            }),
          ],
        )
      );
    },
  }),
  U3 = z3,
  $3 = g({
    name: "Compass",
    __name: "compass",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896",
            }),
            _("path", {
              fill: "currentColor",
              d: "M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832",
            }),
          ],
        )
      );
    },
  }),
  j3 = $3,
  W3 = g({
    name: "Connection",
    __name: "connection",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192z",
            }),
          ],
        )
      );
    },
  }),
  G3 = W3,
  q3 = g({
    name: "Coordinate",
    __name: "coordinate",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", { fill: "currentColor", d: "M480 512h64v320h-64z" }),
            _("path", {
              fill: "currentColor",
              d: "M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64m64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128m256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512",
            }),
          ],
        )
      );
    },
  }),
  Y3 = q3,
  Q3 = g({
    name: "CopyDocument",
    __name: "copy-document",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64",
            }),
          ],
        )
      );
    },
  }),
  X3 = Q3,
  J3 = g({
    name: "Cpu",
    __name: "cpu",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32m160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32m-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32m160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32m160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32m-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32M64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32m0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32m0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32m896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32m0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32m0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32",
            }),
          ],
        )
      );
    },
  }),
  Z3 = J3,
  ef = g({
    name: "CreditCard",
    __name: "credit-card",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M64 320h896v64H64zm0 128h896v64H64zm128 192h256v64H192z",
            }),
          ],
        )
      );
    },
  }),
  tf = ef,
  rf = g({
    name: "Crop",
    __name: "crop",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32",
            }),
          ],
        )
      );
    },
  }),
  af = rf,
  nf = g({
    name: "DArrowLeft",
    __name: "d-arrow-left",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z",
            }),
          ],
        )
      );
    },
  }),
  of = nf,
  sf = g({
    name: "DArrowRight",
    __name: "d-arrow-right",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z",
            }),
          ],
        )
      );
    },
  }),
  lf = sf,
  cf = g({
    name: "DCaret",
    __name: "d-caret",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m512 128 288 320H224zM224 576h576L512 896z",
            }),
          ],
        )
      );
    },
  }),
  uf = cf,
  ff = g({
    name: "DataAnalysis",
    __name: "data-analysis",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32zM832 192H192v512h640zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32m160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32m160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32",
            }),
          ],
        )
      );
    },
  }),
  df = ff,
  _f = g({
    name: "DataBoard",
    __name: "data-board",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", { fill: "currentColor", d: "M32 128h960v64H32z" }),
            _("path", {
              fill: "currentColor",
              d: "M192 192v512h640V192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M322.176 960H248.32l144.64-250.56 55.424 32zm453.888 0h-73.856L576 741.44l55.424-32z",
            }),
          ],
        )
      );
    },
  }),
  pf = _f,
  hf = g({
    name: "DataLine",
    __name: "data-line",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32zM832 192H192v512h640zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z",
            }),
          ],
        )
      );
    },
  }),
  gf = hf,
  vf = g({
    name: "DeleteFilled",
    __name: "delete-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64zm64 0h192v-64H416zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32m192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32",
            }),
          ],
        )
      );
    },
  }),
  mf = vf,
  xf = g({
    name: "DeleteLocation",
    __name: "delete-location",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544",
            }),
            _("path", {
              fill: "currentColor",
              d: "M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32",
            }),
          ],
        )
      );
    },
  }),
  yf = xf,
  wf = g({
    name: "Delete",
    __name: "delete",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32",
            }),
          ],
        )
      );
    },
  }),
  Cf = wf,
  bf = g({
    name: "Dessert",
    __name: "dessert",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416m287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48m339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736M384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64",
            }),
          ],
        )
      );
    },
  }),
  Tf = bf,
  Mf = g({
    name: "Discount",
    __name: "discount",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zm0 64v128h576V768zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256",
            }),
          ],
        )
      );
    },
  }),
  If = Mf,
  Sf = g({
    name: "DishDot",
    __name: "dish-dot",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64m32-128h768a384 384 0 1 0-768 0m447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256z",
            }),
          ],
        )
      );
    },
  }),
  Lf = Sf,
  Af = g({
    name: "Dish",
    __name: "dish",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152M128 704h768a384 384 0 1 0-768 0M96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64",
            }),
          ],
        )
      );
    },
  }),
  Df = Af,
  Pf = g({
    name: "DocumentAdd",
    __name: "document-add",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m320 512V448h64v128h128v64H544v128h-64V640H352v-64z",
            }),
          ],
        )
      );
    },
  }),
  kf = Pf,
  Ef = g({
    name: "DocumentChecked",
    __name: "document-checked",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M805.504 320 640 154.496V320zM832 384H576V128H192v768h640zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312z",
            }),
          ],
        )
      );
    },
  }),
  Rf = Ef,
  Of = g({
    name: "DocumentCopy",
    __name: "document-copy",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 320v576h576V320zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32M960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32M256 672h320v64H256zm0-192h320v64H256z",
            }),
          ],
        )
      );
    },
  }),
  Vf = Of,
  Bf = g({
    name: "DocumentDelete",
    __name: "document-delete",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M805.504 320 640 154.496V320zM832 384H576V128H192v768h640zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z",
            }),
          ],
        )
      );
    },
  }),
  Kf = Bf,
  Hf = g({
    name: "DocumentRemove",
    __name: "document-remove",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M805.504 320 640 154.496V320zM832 384H576V128H192v768h640zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m192 512h320v64H352z",
            }),
          ],
        )
      );
    },
  }),
  Ff = Hf,
  Nf = g({
    name: "Document",
    __name: "document",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z",
            }),
          ],
        )
      );
    },
  }),
  zf = Nf,
  Uf = g({
    name: "Download",
    __name: "download",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z",
            }),
          ],
        )
      );
    },
  }),
  $f = Uf,
  jf = g({
    name: "Drizzling",
    __name: "drizzling",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480M288 800h64v64h-64zm192 0h64v64h-64zm-96 96h64v64h-64zm192 0h64v64h-64zm96-96h64v64h-64z",
            }),
          ],
        )
      );
    },
  }),
  Wf = jf,
  Gf = g({
    name: "EditPen",
    __name: "edit-pen",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336zm384 254.272v-64h448v64h-448z",
            }),
          ],
        )
      );
    },
  }),
  qf = Gf,
  Yf = g({
    name: "Edit",
    __name: "edit",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z",
            }),
            _("path", {
              fill: "currentColor",
              d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z",
            }),
          ],
        )
      );
    },
  }),
  Qf = Yf,
  Xf = g({
    name: "ElemeFilled",
    __name: "eleme-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112m150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z",
            }),
          ],
        )
      );
    },
  }),
  Jf = Xf,
  Zf = g({
    name: "Eleme",
    __name: "eleme",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z",
            }),
          ],
        )
      );
    },
  }),
  e8 = Zf,
  t8 = g({
    name: "ElementPlus",
    __name: "element-plus",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8M714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z",
            }),
          ],
        )
      );
    },
  }),
  r8 = t8,
  a8 = g({
    name: "Expand",
    __name: "expand",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 192h768v128H128zm0 256h512v128H128zm0 256h768v128H128zm576-352 192 160-192 128z",
            }),
          ],
        )
      );
    },
  }),
  n8 = a8,
  o8 = g({
    name: "Failed",
    __name: "failed",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384zm-320 0V96h256v96z",
            }),
          ],
        )
      );
    },
  }),
  s8 = o8,
  l8 = g({
    name: "Female",
    __name: "female",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512m0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32",
            }),
          ],
        )
      );
    },
  }),
  c8 = l8,
  i8 = g({
    name: "Files",
    __name: "files",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 384v448h768V384zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32m64-128h704v64H160zm96-128h512v64H256z",
            }),
          ],
        )
      );
    },
  }),
  u8 = i8,
  f8 = g({
    name: "Film",
    __name: "film",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M160 160v704h704V160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64z",
            }),
          ],
        )
      );
    },
  }),
  d8 = f8,
  _8 = g({
    name: "Filter",
    __name: "filter",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288z",
            }),
          ],
        )
      );
    },
  }),
  p8 = _8,
  h8 = g({
    name: "Finished",
    __name: "finished",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64z",
            }),
          ],
        )
      );
    },
  }),
  g8 = h8,
  v8 = g({
    name: "FirstAidKit",
    __name: "first-aid-kit",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128",
            }),
            _("path", {
              fill: "currentColor",
              d: "M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0zM352 128v64h320v-64zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32",
            }),
          ],
        )
      );
    },
  }),
  m8 = v8,
  x8 = g({
    name: "Flag",
    __name: "flag",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M288 128h608L736 384l160 256H288v320h-96V64h96z",
            }),
          ],
        )
      );
    },
  }),
  y8 = x8,
  w8 = g({
    name: "Fold",
    __name: "fold",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M896 192H128v128h768zm0 256H384v128h512zm0 256H128v128h768zM320 384 128 512l192 128z",
            }),
          ],
        )
      );
    },
  }),
  C8 = w8,
  b8 = g({
    name: "FolderAdd",
    __name: "folder-add",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32m384 416V416h64v128h128v64H544v128h-64V608H352v-64z",
            }),
          ],
        )
      );
    },
  }),
  T8 = b8,
  M8 = g({
    name: "FolderChecked",
    __name: "folder-checked",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32m414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312z",
            }),
          ],
        )
      );
    },
  }),
  I8 = M8,
  S8 = g({
    name: "FolderDelete",
    __name: "folder-delete",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32m370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248z",
            }),
          ],
        )
      );
    },
  }),
  L8 = S8,
  A8 = g({
    name: "FolderOpened",
    __name: "folder-opened",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896",
            }),
          ],
        )
      );
    },
  }),
  D8 = A8,
  P8 = g({
    name: "FolderRemove",
    __name: "folder-remove",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32m256 416h320v64H352z",
            }),
          ],
        )
      );
    },
  }),
  k8 = P8,
  E8 = g({
    name: "Folder",
    __name: "folder",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32",
            }),
          ],
        )
      );
    },
  }),
  R8 = E8,
  O8 = g({
    name: "Food",
    __name: "food",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0m128 0h192a96 96 0 0 0-192 0m439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352M672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288",
            }),
          ],
        )
      );
    },
  }),
  V8 = O8,
  B8 = g({
    name: "Football",
    __name: "football",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896m0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768",
            }),
            _("path", {
              fill: "currentColor",
              d: "M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0m-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z",
            }),
          ],
        )
      );
    },
  }),
  K8 = B8,
  H8 = g({
    name: "ForkSpoon",
    __name: "fork-spoon",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192",
            }),
          ],
        )
      );
    },
  }),
  F8 = H8,
  N8 = g({
    name: "Fries",
    __name: "fries",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480zm-128 96V224a32 32 0 0 0-64 0v160zh-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704z",
            }),
          ],
        )
      );
    },
  }),
  z8 = N8,
  U8 = g({
    name: "FullScreen",
    __name: "full-screen",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z",
            }),
          ],
        )
      );
    },
  }),
  $8 = U8,
  j8 = g({
    name: "GobletFull",
    __name: "goblet-full",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320m503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4",
            }),
          ],
        )
      );
    },
  }),
  W8 = j8,
  G8 = g({
    name: "GobletSquareFull",
    __name: "goblet-square-full",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96z",
            }),
          ],
        )
      );
    },
  }),
  q8 = G8,
  Y8 = g({
    name: "GobletSquare",
    __name: "goblet-square",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912M256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256z",
            }),
          ],
        )
      );
    },
  }),
  Q8 = Y8,
  X8 = g({
    name: "Goblet",
    __name: "goblet",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4M256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320",
            }),
          ],
        )
      );
    },
  }),
  J8 = X8,
  Z8 = g({
    name: "GoldMedal",
    __name: "gold-medal",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            "xml:space": "preserve",
            style: { "enable-background": "new 0 0 1024 1024" },
            viewBox: "0 0 1024 1024",
          },
          [
            _("path", {
              fill: "currentColor",
              d: "m772.13 452.84 53.86-351.81c1.32-10.01-1.17-18.68-7.49-26.02S804.35 64 795.01 64H228.99v-.01h-.06c-9.33 0-17.15 3.67-23.49 11.01s-8.83 16.01-7.49 26.02l53.87 351.89C213.54 505.73 193.59 568.09 192 640c2 90.67 33.17 166.17 93.5 226.5S421.33 957.99 512 960c90.67-2 166.17-33.17 226.5-93.5 60.33-60.34 91.49-135.83 93.5-226.5-1.59-71.94-21.56-134.32-59.87-187.16zM640.01 128h117.02l-39.01 254.02c-20.75-10.64-40.74-19.73-59.94-27.28-5.92-3-11.95-5.8-18.08-8.41V128h.01zM576 128v198.76c-13.18-2.58-26.74-4.43-40.67-5.55-8.07-.8-15.85-1.2-23.33-1.2-10.54 0-21.09.66-31.64 1.96a359.844 359.844 0 0 0-32.36 4.79V128zm-192 0h.04v218.3c-6.22 2.66-12.34 5.5-18.36 8.56-19.13 7.54-39.02 16.6-59.66 27.16L267.01 128zm308.99 692.99c-48 48-108.33 73-180.99 75.01-72.66-2.01-132.99-27.01-180.99-75.01S258.01 712.66 256 640c2.01-72.66 27.01-132.99 75.01-180.99 19.67-19.67 41.41-35.47 65.22-47.41 38.33-15.04 71.15-23.92 98.44-26.65 5.07-.41 10.2-.7 15.39-.88.63-.01 1.28-.03 1.91-.03.66 0 1.35.03 2.02.04 5.11.17 10.15.46 15.13.86 27.4 2.71 60.37 11.65 98.91 26.79 23.71 11.93 45.36 27.69 64.96 47.29 48 48 73 108.33 75.01 180.99-2.01 72.65-27.01 132.98-75.01 180.98z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M544 480H416v64h64v192h-64v64h192v-64h-64z",
            }),
          ],
        )
      );
    },
  }),
  ed = Z8,
  td = g({
    name: "GoodsFilled",
    __name: "goods-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M192 352h640l64 544H128zm128 224h64V448h-64zm320 0h64V448h-64zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0",
            }),
          ],
        )
      );
    },
  }),
  rd = td,
  ad = g({
    name: "Goods",
    __name: "goods",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0z",
            }),
          ],
        )
      );
    },
  }),
  nd = ad,
  od = g({
    name: "Grape",
    __name: "grape",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192m-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192m128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192m128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192m128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192m128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192",
            }),
          ],
        )
      );
    },
  }),
  sd = od,
  ld = g({
    name: "Grid",
    __name: "grid",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M640 384v256H384V384zm64 0h192v256H704zm-64 512H384V704h256zm64 0V704h192v192zm-64-768v192H384V128zm64 0h192v192H704zM320 384v256H128V384zm0 512H128V704h192zm0-768v192H128V128z",
            }),
          ],
        )
      );
    },
  }),
  cd = ld,
  id = g({
    name: "Guide",
    __name: "guide",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M640 608h-64V416h64zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768zM384 608V416h64v192zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32z",
            }),
            _("path", {
              fill: "currentColor",
              d: "m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192m678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z",
            }),
          ],
        )
      );
    },
  }),
  ud = id,
  fd = g({
    name: "Handbag",
    __name: "handbag",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            "xml:space": "preserve",
            style: { "enable-background": "new 0 0 1024 1024" },
            viewBox: "0 0 1024 1024",
          },
          [
            _("path", {
              fill: "currentColor",
              d: "M887.01 264.99c-6-5.99-13.67-8.99-23.01-8.99H704c-1.34-54.68-20.01-100.01-56-136s-81.32-54.66-136-56c-54.68 1.34-100.01 20.01-136 56s-54.66 81.32-56 136H160c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.67-8.99 23.01v640c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V288c0-9.35-2.99-17.02-8.99-23.01M421.5 165.5c24.32-24.34 54.49-36.84 90.5-37.5 35.99.68 66.16 13.18 90.5 37.5s36.84 54.49 37.5 90.5H384c.68-35.99 13.18-66.16 37.5-90.5M832 896H192V320h128v128h64V320h256v128h64V320h128z",
            }),
          ],
        )
      );
    },
  }),
  dd = fd,
  _d = g({
    name: "Headset",
    __name: "headset",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848M896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0",
            }),
          ],
        )
      );
    },
  }),
  pd = _d,
  hd = g({
    name: "HelpFilled",
    __name: "help-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480m0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z",
            }),
          ],
        )
      );
    },
  }),
  gd = hd,
  vd = g({
    name: "Help",
    __name: "help",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752m45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896",
            }),
          ],
        )
      );
    },
  }),
  md = vd,
  xd = g({
    name: "Hide",
    __name: "hide",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
            }),
          ],
        )
      );
    },
  }),
  yd = xd,
  wd = g({
    name: "Histogram",
    __name: "histogram",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M416 896V128h192v768zm-288 0V448h192v448zm576 0V320h192v576z",
            }),
          ],
        )
      );
    },
  }),
  Cd = wd,
  bd = g({
    name: "HomeFilled",
    __name: "home-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z",
            }),
          ],
        )
      );
    },
  }),
  Td = bd,
  Md = g({
    name: "HotWater",
    __name: "hot-water",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M273.067 477.867h477.866V409.6H273.067zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133m273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133M170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z",
            }),
          ],
        )
      );
    },
  }),
  Id = Md,
  Sd = g({
    name: "House",
    __name: "house",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576",
            }),
          ],
        )
      );
    },
  }),
  Ld = Sd,
  Ad = g({
    name: "IceCreamRound",
    __name: "ice-cream-round",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z",
            }),
          ],
        )
      );
    },
  }),
  Dd = Ad,
  Pd = g({
    name: "IceCreamSquare",
    __name: "ice-cream-square",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96zm-64 0h-64v160a32 32 0 1 0 64 0z",
            }),
          ],
        )
      );
    },
  }),
  kd = Pd,
  Ed = g({
    name: "IceCream",
    __name: "ice-cream",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56",
            }),
          ],
        )
      );
    },
  }),
  Rd = Ed,
  Od = g({
    name: "IceDrink",
    __name: "ice-drink",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 448v128h239.68l16.064-128zm-64 0H256.256l16.064 128H448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64m-64 8.064A256.448 256.448 0 0 0 264.256 384H448zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32zM743.68 640H280.32l32.128 256h399.104z",
            }),
          ],
        )
      );
    },
  }),
  Vd = Od,
  Bd = g({
    name: "IceTea",
    __name: "ice-tea",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352M264.064 256h495.872a256.128 256.128 0 0 0-495.872 0m495.424 256H264.512l48 384h398.976zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32m160 192h64v64h-64zm192 64h64v64h-64zm-128 64h64v64h-64zm64-192h64v64h-64z",
            }),
          ],
        )
      );
    },
  }),
  Kd = Bd,
  Hd = g({
    name: "InfoFilled",
    __name: "info-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z",
            }),
          ],
        )
      );
    },
  }),
  Fd = Hd,
  Nd = g({
    name: "Iphone",
    __name: "iphone",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0",
            }),
          ],
        )
      );
    },
  }),
  zd = Nd,
  Ud = g({
    name: "Key",
    __name: "key",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064M512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384",
            }),
          ],
        )
      );
    },
  }),
  $d = Ud,
  jd = g({
    name: "KnifeFork",
    __name: "knife-fork",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56m384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288z",
            }),
          ],
        )
      );
    },
  }),
  Wd = jd,
  Gd = g({
    name: "Lightning",
    __name: "lightning",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736z",
            }),
          ],
        )
      );
    },
  }),
  qd = Gd,
  Yd = g({
    name: "Link",
    __name: "link",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152z",
            }),
          ],
        )
      );
    },
  }),
  Qd = Yd,
  Xd = g({
    name: "List",
    __name: "list",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M704 192h160v736H160V192h160v64h384zM288 512h448v-64H288zm0 256h448v-64H288zm96-576V96h256v96z",
            }),
          ],
        )
      );
    },
  }),
  Jd = Xd,
  Zd = g({
    name: "Loading",
    __name: "loading",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z",
            }),
          ],
        )
      );
    },
  }),
  e_ = Zd,
  t_ = g({
    name: "LocationFilled",
    __name: "location-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928m0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6",
            }),
          ],
        )
      );
    },
  }),
  r_ = t_,
  a_ = g({
    name: "LocationInformation",
    __name: "location-information",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320",
            }),
          ],
        )
      );
    },
  }),
  n_ = a_,
  o_ = g({
    name: "Location",
    __name: "location",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320",
            }),
          ],
        )
      );
    },
  }),
  s_ = o_,
  l_ = g({
    name: "Lock",
    __name: "lock",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64",
            }),
          ],
        )
      );
    },
  }),
  c_ = l_,
  i_ = g({
    name: "Lollipop",
    __name: "lollipop",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696m105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z",
            }),
          ],
        )
      );
    },
  }),
  u_ = i_,
  f_ = g({
    name: "MagicStick",
    __name: "magic-stick",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64h64v192h-64zm0 576h64v192h-64zM160 480v-64h192v64zm576 0v-64h192v64zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248z",
            }),
          ],
        )
      );
    },
  }),
  d_ = f_,
  __ = g({
    name: "Magnet",
    __name: "magnet",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0",
            }),
          ],
        )
      );
    },
  }),
  p_ = __,
  h_ = g({
    name: "Male",
    __name: "male",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450m0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5m253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125",
            }),
            _("path", {
              fill: "currentColor",
              d: "M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125",
            }),
            _("path", {
              fill: "currentColor",
              d: "M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z",
            }),
          ],
        )
      );
    },
  }),
  g_ = h_,
  v_ = g({
    name: "Management",
    __name: "management",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M576 128v288l96-96 96 96V128h128v768H320V128zm-448 0h128v768H128z",
            }),
          ],
        )
      );
    },
  }),
  m_ = v_,
  x_ = g({
    name: "MapLocation",
    __name: "map-location",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256m345.6 192L960 960H672v-64H352v64H64l102.4-256zm-68.928 0H235.328l-76.8 192h706.944z",
            }),
          ],
        )
      );
    },
  }),
  y_ = x_,
  w_ = g({
    name: "Medal",
    __name: "medal",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512m0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640",
            }),
            _("path", {
              fill: "currentColor",
              d: "M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64",
            }),
          ],
        )
      );
    },
  }),
  C_ = w_,
  b_ = g({
    name: "Memo",
    __name: "memo",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            "xml:space": "preserve",
            style: { "enable-background": "new 0 0 1024 1024" },
            viewBox: "0 0 1024 1024",
          },
          [
            _("path", {
              fill: "currentColor",
              d: "M480 320h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M887.01 72.99C881.01 67 873.34 64 864 64H160c-9.35 0-17.02 3-23.01 8.99C131 78.99 128 86.66 128 96v832c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V96c0-9.35-3-17.02-8.99-23.01M192 896V128h96v768zm640 0H352V128h480z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M480 512h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32m0 192h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32",
            }),
          ],
        )
      );
    },
  }),
  T_ = b_,
  M_ = g({
    name: "Menu",
    __name: "menu",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z",
            }),
          ],
        )
      );
    },
  }),
  I_ = M_,
  S_ = g({
    name: "MessageBox",
    __name: "message-box",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M288 384h448v64H288zm96-128h256v64H384zM131.456 512H384v128h256V512h252.544L721.856 192H302.144zM896 576H704v128H320V576H128v256h768zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z",
            }),
          ],
        )
      );
    },
  }),
  L_ = S_,
  A_ = g({
    name: "Message",
    __name: "message",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64",
            }),
            _("path", {
              fill: "currentColor",
              d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056",
            }),
          ],
        )
      );
    },
  }),
  D_ = A_,
  P_ = g({
    name: "Mic",
    __name: "mic",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128z",
            }),
          ],
        )
      );
    },
  }),
  k_ = P_,
  E_ = g({
    name: "Microphone",
    __name: "microphone",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128m0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64m-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64z",
            }),
          ],
        )
      );
    },
  }),
  R_ = E_,
  O_ = g({
    name: "MilkTea",
    __name: "milk-tea",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64m493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12",
            }),
          ],
        )
      );
    },
  }),
  V_ = O_,
  B_ = g({
    name: "Minus",
    __name: "minus",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64",
            }),
          ],
        )
      );
    },
  }),
  K_ = B_,
  H_ = g({
    name: "Money",
    __name: "money",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M768 192H128v448h640zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320m0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192",
            }),
          ],
        )
      );
    },
  }),
  F_ = H_,
  N_ = g({
    name: "Monitor",
    __name: "monitor",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64z",
            }),
          ],
        )
      );
    },
  }),
  z_ = N_,
  U_ = g({
    name: "MoonNight",
    __name: "moon-night",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512M171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32m128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z",
            }),
          ],
        )
      );
    },
  }),
  $_ = U_,
  j_ = g({
    name: "Moon",
    __name: "moon",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696",
            }),
          ],
        )
      );
    },
  }),
  W_ = j_,
  G_ = g({
    name: "MoreFilled",
    __name: "more-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224",
            }),
          ],
        )
      );
    },
  }),
  q_ = G_,
  Y_ = g({
    name: "More",
    __name: "more",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96",
            }),
          ],
        )
      );
    },
  }),
  Q_ = Y_,
  X_ = g({
    name: "MostlyCloudy",
    __name: "mostly-cloudy",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048m15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72",
            }),
          ],
        )
      );
    },
  }),
  J_ = X_,
  Z_ = g({
    name: "Mouse",
    __name: "mouse",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32m32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96z",
            }),
          ],
        )
      );
    },
  }),
  ep = Z_,
  tp = g({
    name: "Mug",
    __name: "mug",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64m64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32z",
            }),
          ],
        )
      );
    },
  }),
  rp = tp,
  ap = g({
    name: "MuteNotification",
    __name: "mute-notification",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0",
            }),
            _("path", {
              fill: "currentColor",
              d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z",
            }),
          ],
        )
      );
    },
  }),
  np = ap,
  op = g({
    name: "Mute",
    __name: "mute",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128m51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032M266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z",
            }),
          ],
        )
      );
    },
  }),
  sp = op,
  lp = g({
    name: "NoSmoking",
    __name: "no-smoking",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744zM768 576v128h128V576zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z",
            }),
          ],
        )
      );
    },
  }),
  cp = lp,
  ip = g({
    name: "Notebook",
    __name: "notebook",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M192 128v768h640V128zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32m0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32m0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32m0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32",
            }),
          ],
        )
      );
    },
  }),
  up = ip,
  fp = g({
    name: "Notification",
    __name: "notification",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384",
            }),
          ],
        )
      );
    },
  }),
  dp = fp,
  _p = g({
    name: "Odometer",
    __name: "odometer",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896",
            }),
            _("path", {
              fill: "currentColor",
              d: "M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0",
            }),
            _("path", {
              fill: "currentColor",
              d: "M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928",
            }),
          ],
        )
      );
    },
  }),
  pp = _p,
  hp = g({
    name: "OfficeBuilding",
    __name: "office-building",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M192 128v704h384V128zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M256 256h256v64H256zm0 192h256v64H256zm0 192h256v64H256zm384-128h128v64H640zm0 128h128v64H640zM64 832h896v64H64z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M640 384v448h192V384zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32",
            }),
          ],
        )
      );
    },
  }),
  gp = hp,
  vp = g({
    name: "Open",
    __name: "open",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088",
            }),
          ],
        )
      );
    },
  }),
  mp = vp,
  xp = g({
    name: "Operation",
    __name: "operation",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z",
            }),
          ],
        )
      );
    },
  }),
  yp = xp,
  wp = g({
    name: "Opportunity",
    __name: "opportunity",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M384 960v-64h192.064v64zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416m-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288z",
            }),
          ],
        )
      );
    },
  }),
  Cp = wp,
  bp = g({
    name: "Orange",
    __name: "orange",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896m0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128",
            }),
          ],
        )
      );
    },
  }),
  Tp = bp,
  Mp = g({
    name: "Paperclip",
    __name: "paperclip",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z",
            }),
          ],
        )
      );
    },
  }),
  Ip = Mp,
  Sp = g({
    name: "PartlyCloudy",
    __name: "partly-cloudy",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872m-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z",
            }),
          ],
        )
      );
    },
  }),
  Lp = Sp,
  Ap = g({
    name: "Pear",
    __name: "pear",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z",
            }),
          ],
        )
      );
    },
  }),
  Dp = Ap,
  Pp = g({
    name: "PhoneFilled",
    __name: "phone-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z",
            }),
          ],
        )
      );
    },
  }),
  kp = Pp,
  Ep = g({
    name: "Phone",
    __name: "phone",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192m0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384",
            }),
          ],
        )
      );
    },
  }),
  Rp = Ep,
  Op = g({
    name: "PictureFilled",
    __name: "picture-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384",
            }),
          ],
        )
      );
    },
  }),
  Vp = Op,
  Bp = g({
    name: "PictureRounded",
    __name: "picture-rounded",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768m0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896",
            }),
            _("path", {
              fill: "currentColor",
              d: "M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64M214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z",
            }),
          ],
        )
      );
    },
  }),
  Kp = Bp,
  Hp = g({
    name: "Picture",
    __name: "picture",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M160 160v704h704V160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64M185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952z",
            }),
          ],
        )
      );
    },
  }),
  Fp = Hp,
  Np = g({
    name: "PieChart",
    __name: "pie-chart",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512z",
            }),
          ],
        )
      );
    },
  }),
  zp = Np,
  Up = g({
    name: "Place",
    __name: "place",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912",
            }),
          ],
        )
      );
    },
  }),
  $p = Up,
  jp = g({
    name: "Platform",
    __name: "platform",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M448 832v-64h128v64h192v64H256v-64zM128 704V128h768v576z",
            }),
          ],
        )
      );
    },
  }),
  Wp = jp,
  Gp = g({
    name: "Plus",
    __name: "plus",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z",
            }),
          ],
        )
      );
    },
  }),
  qp = Gp,
  Yp = g({
    name: "Pointer",
    __name: "pointer",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128M359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32z",
            }),
          ],
        )
      );
    },
  }),
  Qp = Yp,
  Xp = g({
    name: "Position",
    __name: "position",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z",
            }),
          ],
        )
      );
    },
  }),
  Jp = Xp,
  Zp = g({
    name: "Postcard",
    __name: "postcard",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96",
            }),
            _("path", {
              fill: "currentColor",
              d: "M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128M288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32m0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32",
            }),
          ],
        )
      );
    },
  }),
  eh = Zp,
  th = g({
    name: "Pouring",
    __name: "pouring",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480M224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32m192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32m192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32m192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32",
            }),
          ],
        )
      );
    },
  }),
  rh = th,
  ah = g({
    name: "Present",
    __name: "present",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M480 896V640H192v-64h288V320H192v576zm64 0h288V320H544v256h288v64H544zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256",
            }),
            _("path", {
              fill: "currentColor",
              d: "M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256",
            }),
          ],
        )
      );
    },
  }),
  nh = ah,
  oh = g({
    name: "PriceTag",
    __name: "price-tag",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256",
            }),
          ],
        )
      );
    },
  }),
  sh = oh,
  lh = g({
    name: "Printer",
    __name: "printer",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256zm64-192v320h384V576zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704zm64-448h384V128H320zm-64 128h64v64h-64zm128 0h64v64h-64z",
            }),
          ],
        )
      );
    },
  }),
  ch = lh,
  ih = g({
    name: "Promotion",
    __name: "promotion",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472zm256 512V657.024L512 768z",
            }),
          ],
        )
      );
    },
  }),
  uh = ih,
  fh = g({
    name: "QuartzWatch",
    __name: "quartz-watch",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            "xml:space": "preserve",
            style: { "enable-background": "new 0 0 1024 1024" },
            viewBox: "0 0 1024 1024",
          },
          [
            _("path", {
              fill: "currentColor",
              d: "M422.02 602.01v-.03c-6.68-5.99-14.35-8.83-23.01-8.51-8.67.32-16.17 3.66-22.5 10.02-6.33 6.36-9.5 13.7-9.5 22.02s3 15.82 8.99 22.5c8.68 8.68 19.02 11.35 31.01 8s19.49-10.85 22.5-22.5c3.01-11.65.51-22.15-7.49-31.49zM384 512c0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.67 8.99-23.01m6.53-82.49c11.65 3.01 22.15.51 31.49-7.49h.04c5.99-6.68 8.83-14.34 8.51-23.01-.32-8.67-3.66-16.16-10.02-22.5-6.36-6.33-13.7-9.5-22.02-9.5s-15.82 3-22.5 8.99c-8.68 8.69-11.35 19.02-8 31.01 3.35 11.99 10.85 19.49 22.5 22.5zm242.94 0c11.67-3.03 19.01-10.37 22.02-22.02 3.01-11.65.51-22.15-7.49-31.49h.01c-6.68-5.99-14.18-8.99-22.5-8.99s-15.66 3.16-22.02 9.5c-6.36 6.34-9.7 13.84-10.02 22.5-.32 8.66 2.52 16.33 8.51 23.01 9.32 8.02 19.82 10.52 31.49 7.49M512 640c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01s-3-17.02-8.99-23.01c-6-5.99-13.66-8.99-23.01-8.99m183.01-151.01c-6-5.99-13.66-8.99-23.01-8.99s-17.02 3-23.01 8.99c-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99s17.02-3 23.01-8.99c5.99-6 8.99-13.67 8.99-23.01 0-9.35-3-17.02-8.99-23.01",
            }),
            _("path", {
              fill: "currentColor",
              d: "M832 512c-2-90.67-33.17-166.17-93.5-226.5-20.43-20.42-42.6-37.49-66.5-51.23V64H352v170.26c-23.9 13.74-46.07 30.81-66.5 51.24-60.33 60.33-91.49 135.83-93.5 226.5 2 90.67 33.17 166.17 93.5 226.5 20.43 20.43 42.6 37.5 66.5 51.24V960h320V789.74c23.9-13.74 46.07-30.81 66.5-51.24 60.33-60.34 91.49-135.83 93.5-226.5M416 128h192v78.69c-29.85-9.03-61.85-13.93-96-14.69-34.15.75-66.15 5.65-96 14.68zm192 768H416v-78.68c29.85 9.03 61.85 13.93 96 14.68 34.15-.75 66.15-5.65 96-14.68zm-96-128c-72.66-2.01-132.99-27.01-180.99-75.01S258.01 584.66 256 512c2.01-72.66 27.01-132.99 75.01-180.99S439.34 258.01 512 256c72.66 2.01 132.99 27.01 180.99 75.01S765.99 439.34 768 512c-2.01 72.66-27.01 132.99-75.01 180.99S584.66 765.99 512 768",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 320c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01 0 9.35 3 17.02 8.99 23.01 6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01 0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99m112.99 273.5c-8.66-.32-16.33 2.52-23.01 8.51-7.98 9.32-10.48 19.82-7.49 31.49s10.49 19.17 22.5 22.5 22.35.66 31.01-8v.04c5.99-6.68 8.99-14.18 8.99-22.5s-3.16-15.66-9.5-22.02-13.84-9.7-22.5-10.02",
            }),
          ],
        )
      );
    },
  }),
  dh = fh,
  _h = g({
    name: "QuestionFilled",
    __name: "question-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z",
            }),
          ],
        )
      );
    },
  }),
  ph = _h,
  hh = g({
    name: "Rank",
    __name: "rank",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z",
            }),
          ],
        )
      );
    },
  }),
  gh = hh,
  vh = g({
    name: "ReadingLamp",
    __name: "reading-lamp",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32m-44.672-768-99.52 448h608.384l-99.52-448zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32m-192-.064h64V960h-64z",
            }),
          ],
        )
      );
    },
  }),
  mh = vh,
  xh = g({
    name: "Reading",
    __name: "reading",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z",
            }),
            _("path", { fill: "currentColor", d: "M480 192h64v704h-64z" }),
          ],
        )
      );
    },
  }),
  yh = xh,
  wh = g({
    name: "RefreshLeft",
    __name: "refresh-left",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z",
            }),
          ],
        )
      );
    },
  }),
  Ch = wh,
  bh = g({
    name: "RefreshRight",
    __name: "refresh-right",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z",
            }),
          ],
        )
      );
    },
  }),
  Th = bh,
  Mh = g({
    name: "Refresh",
    __name: "refresh",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z",
            }),
          ],
        )
      );
    },
  }),
  Ih = Mh,
  Sh = g({
    name: "Refrigerator",
    __name: "refrigerator",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96m32 224h64v96h-64zm0 288h64v96h-64z",
            }),
          ],
        )
      );
    },
  }),
  Lh = Sh,
  Ah = g({
    name: "RemoveFilled",
    __name: "remove-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896M288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512",
            }),
          ],
        )
      );
    },
  }),
  Dh = Ah,
  Ph = g({
    name: "Remove",
    __name: "remove",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896",
            }),
          ],
        )
      );
    },
  }),
  kh = Ph,
  Eh = g({
    name: "Right",
    __name: "right",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z",
            }),
          ],
        )
      );
    },
  }),
  Rh = Eh,
  Oh = g({
    name: "ScaleToOriginal",
    __name: "scale-to-original",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118M512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412M512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512",
            }),
          ],
        )
      );
    },
  }),
  Vh = Oh,
  Bh = g({
    name: "School",
    __name: "school",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M224 128v704h576V128zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M64 832h896v64H64zm256-640h128v96H320z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M384 832h256v-64a128 128 0 1 0-256 0zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192M320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z",
            }),
          ],
        )
      );
    },
  }),
  Kh = Bh,
  Hh = g({
    name: "Scissor",
    __name: "scissor",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248",
            }),
          ],
        )
      );
    },
  }),
  Fh = Hh,
  Nh = g({
    name: "Search",
    __name: "search",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704",
            }),
          ],
        )
      );
    },
  }),
  zh = Nh,
  Uh = g({
    name: "Select",
    __name: "select",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z",
            }),
          ],
        )
      );
    },
  }),
  $h = Uh,
  jh = g({
    name: "Sell",
    __name: "sell",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z",
            }),
          ],
        )
      );
    },
  }),
  Wh = jh,
  Gh = g({
    name: "SemiSelect",
    __name: "semi-select",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64",
            }),
          ],
        )
      );
    },
  }),
  qh = Gh,
  Yh = g({
    name: "Service",
    __name: "service",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0M256 448a128 128 0 1 0 0 256zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128",
            }),
          ],
        )
      );
    },
  }),
  Qh = Yh,
  Xh = g({
    name: "SetUp",
    __name: "set-up",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96",
            }),
            _("path", {
              fill: "currentColor",
              d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256",
            }),
            _("path", {
              fill: "currentColor",
              d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32m160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256",
            }),
            _("path", {
              fill: "currentColor",
              d: "M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32",
            }),
          ],
        )
      );
    },
  }),
  Jh = Xh,
  Zh = g({
    name: "Setting",
    __name: "setting",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256",
            }),
          ],
        )
      );
    },
  }),
  e5 = Zh,
  t5 = g({
    name: "Share",
    __name: "share",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z",
            }),
          ],
        )
      );
    },
  }),
  r5 = t5,
  a5 = g({
    name: "Ship",
    __name: "ship",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216zm0-70.272 144.768-65.792L512 171.84zM512 512H148.864l18.24 64H856.96l18.24-64zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408",
            }),
          ],
        )
      );
    },
  }),
  n5 = a5,
  o5 = g({
    name: "Shop",
    __name: "shop",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M704 704h64v192H256V704h64v64h384zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640z",
            }),
          ],
        )
      );
    },
  }),
  s5 = o5,
  l5 = g({
    name: "ShoppingBag",
    __name: "shopping-bag",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zm64 0h256a128 128 0 1 0-256 0",
            }),
            _("path", { fill: "currentColor", d: "M192 704h640v64H192z" }),
          ],
        )
      );
    },
  }),
  c5 = l5,
  i5 = g({
    name: "ShoppingCartFull",
    __name: "shopping-cart-full",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96m320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96M96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128zm314.24 576h395.904l82.304-384H333.44l76.8 384z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04",
            }),
          ],
        )
      );
    },
  }),
  u5 = i5,
  f5 = g({
    name: "ShoppingCart",
    __name: "shopping-cart",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96m320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96M96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128zm314.24 576h395.904l82.304-384H333.44l76.8 384z",
            }),
          ],
        )
      );
    },
  }),
  d5 = f5,
  _5 = g({
    name: "ShoppingTrolley",
    __name: "shopping-trolley",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            "xml:space": "preserve",
            style: { "enable-background": "new 0 0 1024 1024" },
            viewBox: "0 0 1024 1024",
          },
          [
            _("path", {
              fill: "currentColor",
              d: "M368 833c-13.3 0-24.5 4.5-33.5 13.5S321 866.7 321 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S415 893.3 415 880s-4.5-24.5-13.5-33.5S381.3 833 368 833m439-193c7.4 0 13.8-2.2 19.5-6.5S836 623.3 838 616l112-448c2-10-.2-19.2-6.5-27.5S929 128 919 128H96c-9.3 0-17 3-23 9s-9 13.7-9 23 3 17 9 23 13.7 9 23 9h96v576h672c9.3 0 17-3 23-9s9-13.7 9-23-3-17-9-23-13.7-9-23-9H256v-64zM256 192h622l-96 384H256zm432 641c-13.3 0-24.5 4.5-33.5 13.5S641 866.7 641 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S735 893.3 735 880s-4.5-24.5-13.5-33.5S701.3 833 688 833",
            }),
          ],
        )
      );
    },
  }),
  p5 = _5,
  h5 = g({
    name: "Smoking",
    __name: "smoking",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 576v128h640V576zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z",
            }),
          ],
        )
      );
    },
  }),
  g5 = h5,
  v5 = g({
    name: "Soccer",
    __name: "soccer",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24m72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152m452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z",
            }),
          ],
        )
      );
    },
  }),
  m5 = v5,
  x5 = g({
    name: "SoldOut",
    __name: "sold-out",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z",
            }),
          ],
        )
      );
    },
  }),
  y5 = x5,
  w5 = g({
    name: "SortDown",
    __name: "sort-down",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0",
            }),
          ],
        )
      );
    },
  }),
  C5 = w5,
  b5 = g({
    name: "SortUp",
    __name: "sort-up",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248",
            }),
          ],
        )
      );
    },
  }),
  T5 = b5,
  M5 = g({
    name: "Sort",
    __name: "sort",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z",
            }),
          ],
        )
      );
    },
  }),
  I5 = M5,
  S5 = g({
    name: "Stamp",
    __name: "stamp",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0M128 896v-64h768v64z",
            }),
          ],
        )
      );
    },
  }),
  L5 = S5,
  A5 = g({
    name: "StarFilled",
    __name: "star-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z",
            }),
          ],
        )
      );
    },
  }),
  D5 = A5,
  P5 = g({
    name: "Star",
    __name: "star",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z",
            }),
          ],
        )
      );
    },
  }),
  k5 = P5,
  E5 = g({
    name: "Stopwatch",
    __name: "stopwatch",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896",
            }),
            _("path", {
              fill: "currentColor",
              d: "M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z",
            }),
          ],
        )
      );
    },
  }),
  R5 = E5,
  O5 = g({
    name: "SuccessFilled",
    __name: "success-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z",
            }),
          ],
        )
      );
    },
  }),
  V5 = O5,
  B5 = g({
    name: "Sugar",
    __name: "sugar",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z",
            }),
          ],
        )
      );
    },
  }),
  K5 = B5,
  H5 = g({
    name: "SuitcaseLine",
    __name: "suitcase-line",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            "xml:space": "preserve",
            style: { "enable-background": "new 0 0 1024 1024" },
            viewBox: "0 0 1024 1024",
          },
          [
            _("path", {
              fill: "currentColor",
              d: "M922.5 229.5c-24.32-24.34-54.49-36.84-90.5-37.5H704v-64c-.68-17.98-7.02-32.98-19.01-44.99S658.01 64.66 640 64H384c-17.98.68-32.98 7.02-44.99 19.01S320.66 110 320 128v64H192c-35.99.68-66.16 13.18-90.5 37.5C77.16 253.82 64.66 283.99 64 320v448c.68 35.99 13.18 66.16 37.5 90.5s54.49 36.84 90.5 37.5h640c35.99-.68 66.16-13.18 90.5-37.5s36.84-54.49 37.5-90.5V320c-.68-35.99-13.18-66.16-37.5-90.5M384 128h256v64H384zM256 832h-64c-17.98-.68-32.98-7.02-44.99-19.01S128.66 786.01 128 768V448h128zm448 0H320V448h384zm192-64c-.68 17.98-7.02 32.98-19.01 44.99S850.01 831.34 832 832h-64V448h128zm0-384H128v-64c.69-17.98 7.02-32.98 19.01-44.99S173.99 256.66 192 256h640c17.98.69 32.98 7.02 44.99 19.01S895.34 301.99 896 320z",
            }),
          ],
        )
      );
    },
  }),
  F5 = H5,
  N5 = g({
    name: "Suitcase",
    __name: "suitcase",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128",
            }),
            _("path", {
              fill: "currentColor",
              d: "M384 128v64h256v-64zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64",
            }),
          ],
        )
      );
    },
  }),
  z5 = N5,
  U5 = g({
    name: "Sunny",
    __name: "sunny",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32M195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248M64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32m768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32M195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0",
            }),
          ],
        )
      );
    },
  }),
  $5 = U5,
  j5 = g({
    name: "Sunrise",
    __name: "sunrise",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64m129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32m407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248",
            }),
          ],
        )
      );
    },
  }),
  W5 = j5,
  G5 = g({
    name: "Sunset",
    __name: "sunset",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32m256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32",
            }),
          ],
        )
      );
    },
  }),
  q5 = G5,
  Y5 = g({
    name: "SwitchButton",
    __name: "switch-button",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32",
            }),
          ],
        )
      );
    },
  }),
  Q5 = Y5,
  X5 = g({
    name: "SwitchFilled",
    __name: "switch-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            "xml:space": "preserve",
            style: { "enable-background": "new 0 0 1024 1024" },
            viewBox: "0 0 1024 1024",
          },
          [
            _("path", {
              fill: "currentColor",
              d: "M247.47 358.4v.04c.07 19.17 7.72 37.53 21.27 51.09s31.92 21.2 51.09 21.27c39.86 0 72.41-32.6 72.41-72.4s-32.6-72.36-72.41-72.36-72.36 32.55-72.36 72.36z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M492.38 128H324.7c-52.16 0-102.19 20.73-139.08 57.61a196.655 196.655 0 0 0-57.61 139.08V698.7c-.01 25.84 5.08 51.42 14.96 75.29s24.36 45.56 42.63 63.83 39.95 32.76 63.82 42.65a196.67 196.67 0 0 0 75.28 14.98h167.68c3.03 0 5.46-2.43 5.46-5.42V133.42c.6-2.99-1.83-5.42-5.46-5.42zm-56.11 705.88H324.7c-17.76.13-35.36-3.33-51.75-10.18s-31.22-16.94-43.61-29.67c-25.3-25.35-39.81-59.1-39.81-95.32V324.69c-.13-17.75 3.33-35.35 10.17-51.74a131.695 131.695 0 0 1 29.64-43.62c25.39-25.3 59.14-39.81 95.36-39.81h111.57zm402.12-647.67a196.655 196.655 0 0 0-139.08-57.61H580.48c-3.03 0-4.82 2.43-4.82 4.82v757.16c-.6 2.99 1.79 5.42 5.42 5.42h118.23a196.69 196.69 0 0 0 139.08-57.61A196.655 196.655 0 0 0 896 699.31V325.29a196.69 196.69 0 0 0-57.61-139.08zm-111.3 441.92c-42.83 0-77.82-34.99-77.82-77.82s34.98-77.82 77.82-77.82c42.83 0 77.82 34.99 77.82 77.82s-34.99 77.82-77.82 77.82z",
            }),
          ],
        )
      );
    },
  }),
  J5 = X5,
  Z5 = g({
    name: "Switch",
    __name: "switch",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32",
            }),
          ],
        )
      );
    },
  }),
  eg = Z5,
  tg = g({
    name: "TakeawayBox",
    __name: "takeaway-box",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M832 384H192v448h640zM96 320h832V128H96zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64",
            }),
          ],
        )
      );
    },
  }),
  rg = tg,
  ag = g({
    name: "Ticket",
    __name: "ticket",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64zm0-416v192h64V416z",
            }),
          ],
        )
      );
    },
  }),
  ng = ag,
  og = g({
    name: "Tickets",
    __name: "tickets",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M192 128v768h640V128zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h192v64H320zm0 384h384v64H320z",
            }),
          ],
        )
      );
    },
  }),
  sg = og,
  lg = g({
    name: "Timer",
    __name: "timer",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0m96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64z",
            }),
          ],
        )
      );
    },
  }),
  cg = lg,
  ig = g({
    name: "ToiletPaper",
    __name: "toilet-paper",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224M736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224",
            }),
            _("path", {
              fill: "currentColor",
              d: "M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96",
            }),
          ],
        )
      );
    },
  }),
  ug = ig,
  fg = g({
    name: "Tools",
    __name: "tools",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0",
            }),
          ],
        )
      );
    },
  }),
  dg = fg,
  _g = g({
    name: "TopLeft",
    __name: "top-left",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z",
            }),
          ],
        )
      );
    },
  }),
  pg = _g,
  hg = g({
    name: "TopRight",
    __name: "top-right",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z",
            }),
          ],
        )
      );
    },
  }),
  gg = hg,
  vg = g({
    name: "Top",
    __name: "top",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z",
            }),
          ],
        )
      );
    },
  }),
  mg = vg,
  xg = g({
    name: "TrendCharts",
    __name: "trend-charts",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128 896V128h768v768zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0",
            }),
          ],
        )
      );
    },
  }),
  yg = xg,
  wg = g({
    name: "TrophyBase",
    __name: "trophy-base",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            "xml:space": "preserve",
            style: { "enable-background": "new 0 0 1024 1024" },
            viewBox: "0 0 1024 1024",
          },
          [
            _("path", {
              fill: "currentColor",
              d: "M918.4 201.6c-6.4-6.4-12.8-9.6-22.4-9.6H768V96c0-9.6-3.2-16-9.6-22.4C752 67.2 745.6 64 736 64H288c-9.6 0-16 3.2-22.4 9.6C259.2 80 256 86.4 256 96v96H128c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 16-9.6 22.4 3.2 108.8 25.6 185.6 64 224 34.4 34.4 77.56 55.65 127.65 61.99 10.91 20.44 24.78 39.25 41.95 56.41 40.86 40.86 91 65.47 150.4 71.9V768h-96c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h256c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6h-96V637.26c59.4-7.71 109.54-30.01 150.4-70.86 17.2-17.2 31.51-36.06 42.81-56.55 48.93-6.51 90.02-27.7 126.79-61.85 38.4-38.4 60.8-112 64-224 0-6.4-3.2-16-9.6-22.4zM256 438.4c-19.2-6.4-35.2-19.2-51.2-35.2-22.4-22.4-35.2-70.4-41.6-147.2H256zm390.4 80C608 553.6 566.4 576 512 576s-99.2-19.2-134.4-57.6C342.4 480 320 438.4 320 384V128h384v256c0 54.4-19.2 99.2-57.6 134.4m172.8-115.2c-16 16-32 25.6-51.2 35.2V256h92.8c-6.4 76.8-19.2 124.8-41.6 147.2zM768 896H256c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h512c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6",
            }),
          ],
        )
      );
    },
  }),
  Cg = wg,
  bg = g({
    name: "Trophy",
    __name: "trophy",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64zm224-448V128H320v320a192 192 0 1 0 384 0m64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448z",
            }),
          ],
        )
      );
    },
  }),
  Tg = bg,
  Mg = g({
    name: "TurnOff",
    __name: "turn-off",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088",
            }),
          ],
        )
      );
    },
  }),
  Ig = Mg,
  Sg = g({
    name: "Umbrella",
    __name: "umbrella",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0m570.688-320a384.128 384.128 0 0 0-757.376 0z",
            }),
          ],
        )
      );
    },
  }),
  Lg = Sg,
  Ag = g({
    name: "Unlock",
    __name: "unlock",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96",
            }),
            _("path", {
              fill: "currentColor",
              d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104z",
            }),
          ],
        )
      );
    },
  }),
  Dg = Ag,
  Pg = g({
    name: "UploadFilled",
    __name: "upload-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6z",
            }),
          ],
        )
      );
    },
  }),
  kg = Pg,
  Eg = g({
    name: "Upload",
    __name: "upload",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z",
            }),
          ],
        )
      );
    },
  }),
  Rg = Eg,
  Og = g({
    name: "UserFilled",
    __name: "user-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z",
            }),
          ],
        )
      );
    },
  }),
  Vg = Og,
  Bg = g({
    name: "User",
    __name: "user",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0",
            }),
          ],
        )
      );
    },
  }),
  Kg = Bg,
  Hg = g({
    name: "Van",
    __name: "van",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672m48.128-192-14.72-96H704v96h151.872M688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160m-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160",
            }),
          ],
        )
      );
    },
  }),
  Fg = Hg,
  Ng = g({
    name: "VideoCameraFilled",
    __name: "video-camera-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zM192 768v64h384v-64zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0m64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288m-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320m64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0",
            }),
          ],
        )
      );
    },
  }),
  zg = Ng,
  Ug = g({
    name: "VideoCamera",
    __name: "video-camera",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M704 768V256H128v512zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zm0 71.552v176.896l128 64V359.552zM192 320h192v64H192z",
            }),
          ],
        )
      );
    },
  }),
  $g = Ug,
  jg = g({
    name: "VideoPause",
    __name: "video-pause",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32m192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32",
            }),
          ],
        )
      );
    },
  }),
  Wg = jg,
  Gg = g({
    name: "VideoPlay",
    __name: "video-play",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m-48-247.616L668.608 512 464 375.616zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z",
            }),
          ],
        )
      );
    },
  }),
  qg = Gg,
  Yg = g({
    name: "View",
    __name: "view",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160",
            }),
          ],
        )
      );
    },
  }),
  Qg = Yg,
  Xg = g({
    name: "WalletFilled",
    __name: "wallet-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96m-80-544 128 160H384z",
            }),
          ],
        )
      );
    },
  }),
  Jg = Xg,
  Zg = g({
    name: "Wallet",
    __name: "wallet",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32z",
            }),
            _("path", {
              fill: "currentColor",
              d: "M128 320v512h768V320zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128",
            }),
          ],
        )
      );
    },
  }),
  ev = Zg,
  tv = g({
    name: "WarnTriangleFilled",
    __name: "warn-triangle-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            "xml:space": "preserve",
            style: { "enable-background": "new 0 0 1024 1024" },
            viewBox: "0 0 1024 1024",
          },
          [
            _("path", {
              fill: "currentColor",
              d: "M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03M554.67 768h-85.33v-85.33h85.33zm0-426.67v298.66h-85.33V341.32z",
            }),
          ],
        )
      );
    },
  }),
  rv = tv,
  av = g({
    name: "WarningFilled",
    __name: "warning-filled",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4",
            }),
          ],
        )
      );
    },
  }),
  nv = av,
  ov = g({
    name: "Warning",
    __name: "warning",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32",
            }),
          ],
        )
      );
    },
  }),
  sv = ov,
  lv = g({
    name: "Watch",
    __name: "watch",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512m0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640",
            }),
            _("path", {
              fill: "currentColor",
              d: "M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32",
            }),
            _("path", {
              fill: "currentColor",
              d: "M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32m128-256V128H416v128h-64V64h320v192zM416 768v128h192V768h64v192H352V768z",
            }),
          ],
        )
      );
    },
  }),
  cv = lv,
  iv = g({
    name: "Watermelon",
    __name: "watermelon",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248zm231.552 141.056a448 448 0 1 1-632-632l632 632",
            }),
          ],
        )
      );
    },
  }),
  uv = iv,
  fv = g({
    name: "WindPower",
    __name: "wind-power",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32m416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96z",
            }),
          ],
        )
      );
    },
  }),
  dv = fv,
  _v = g({
    name: "ZoomIn",
    __name: "zoom-in",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z",
            }),
          ],
        )
      );
    },
  }),
  pv = _v,
  hv = g({
    name: "ZoomOut",
    __name: "zoom-out",
    setup(e) {
      return (t, r) => (
        v(),
        m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
          [
            _("path", {
              fill: "currentColor",
              d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704M352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64",
            }),
          ],
        )
      );
    },
  }),
  gv = hv;
const vv = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      AddLocation: M4,
      Aim: S4,
      AlarmClock: A4,
      Apple: P4,
      ArrowDown: O4,
      ArrowDownBold: E4,
      ArrowLeft: H4,
      ArrowLeftBold: B4,
      ArrowRight: U4,
      ArrowRightBold: N4,
      ArrowUp: G4,
      ArrowUpBold: j4,
      Avatar: Y4,
      Back: X4,
      Baseball: Z4,
      Basketball: t6,
      Bell: o6,
      BellFilled: a6,
      Bicycle: l6,
      Bottom: _6,
      BottomLeft: i6,
      BottomRight: f6,
      Bowl: h6,
      Box: v6,
      Briefcase: x6,
      Brush: b6,
      BrushFilled: w6,
      Burger: M6,
      Calendar: S6,
      Camera: P6,
      CameraFilled: A6,
      CaretBottom: E6,
      CaretLeft: O6,
      CaretRight: B6,
      CaretTop: H6,
      Cellphone: N6,
      ChatDotRound: U6,
      ChatDotSquare: j6,
      ChatLineRound: G6,
      ChatLineSquare: Y6,
      ChatRound: X6,
      ChatSquare: Z6,
      Check: t3,
      Checked: a3,
      Cherry: o3,
      Chicken: l3,
      ChromeFilled: i3,
      CircleCheck: _3,
      CircleCheckFilled: f3,
      CircleClose: v3,
      CircleCloseFilled: h3,
      CirclePlus: w3,
      CirclePlusFilled: x3,
      Clock: b3,
      Close: S3,
      CloseBold: M3,
      Cloudy: A3,
      Coffee: E3,
      CoffeeCup: P3,
      Coin: O3,
      ColdDrink: B3,
      Collection: N3,
      CollectionTag: H3,
      Comment: U3,
      Compass: j3,
      Connection: G3,
      Coordinate: Y3,
      CopyDocument: X3,
      Cpu: Z3,
      CreditCard: tf,
      Crop: af,
      DArrowLeft: of,
      DArrowRight: lf,
      DCaret: uf,
      DataAnalysis: df,
      DataBoard: pf,
      DataLine: gf,
      Delete: Cf,
      DeleteFilled: mf,
      DeleteLocation: yf,
      Dessert: Tf,
      Discount: If,
      Dish: Df,
      DishDot: Lf,
      Document: zf,
      DocumentAdd: kf,
      DocumentChecked: Rf,
      DocumentCopy: Vf,
      DocumentDelete: Kf,
      DocumentRemove: Ff,
      Download: $f,
      Drizzling: Wf,
      Edit: Qf,
      EditPen: qf,
      Eleme: e8,
      ElemeFilled: Jf,
      ElementPlus: r8,
      Expand: n8,
      Failed: s8,
      Female: c8,
      Files: u8,
      Film: d8,
      Filter: p8,
      Finished: g8,
      FirstAidKit: m8,
      Flag: y8,
      Fold: C8,
      Folder: R8,
      FolderAdd: T8,
      FolderChecked: I8,
      FolderDelete: L8,
      FolderOpened: D8,
      FolderRemove: k8,
      Food: V8,
      Football: K8,
      ForkSpoon: F8,
      Fries: z8,
      FullScreen: $8,
      Goblet: J8,
      GobletFull: W8,
      GobletSquare: Q8,
      GobletSquareFull: q8,
      GoldMedal: ed,
      Goods: nd,
      GoodsFilled: rd,
      Grape: sd,
      Grid: cd,
      Guide: ud,
      Handbag: dd,
      Headset: pd,
      Help: md,
      HelpFilled: gd,
      Hide: yd,
      Histogram: Cd,
      HomeFilled: Td,
      HotWater: Id,
      House: Ld,
      IceCream: Rd,
      IceCreamRound: Dd,
      IceCreamSquare: kd,
      IceDrink: Vd,
      IceTea: Kd,
      InfoFilled: Fd,
      Iphone: zd,
      Key: $d,
      KnifeFork: Wd,
      Lightning: qd,
      Link: Qd,
      List: Jd,
      Loading: e_,
      Location: s_,
      LocationFilled: r_,
      LocationInformation: n_,
      Lock: c_,
      Lollipop: u_,
      MagicStick: d_,
      Magnet: p_,
      Male: g_,
      Management: m_,
      MapLocation: y_,
      Medal: C_,
      Memo: T_,
      Menu: I_,
      Message: D_,
      MessageBox: L_,
      Mic: k_,
      Microphone: R_,
      MilkTea: V_,
      Minus: K_,
      Money: F_,
      Monitor: z_,
      Moon: W_,
      MoonNight: $_,
      More: Q_,
      MoreFilled: q_,
      MostlyCloudy: J_,
      Mouse: ep,
      Mug: rp,
      Mute: sp,
      MuteNotification: np,
      NoSmoking: cp,
      Notebook: up,
      Notification: dp,
      Odometer: pp,
      OfficeBuilding: gp,
      Open: mp,
      Operation: yp,
      Opportunity: Cp,
      Orange: Tp,
      Paperclip: Ip,
      PartlyCloudy: Lp,
      Pear: Dp,
      Phone: Rp,
      PhoneFilled: kp,
      Picture: Fp,
      PictureFilled: Vp,
      PictureRounded: Kp,
      PieChart: zp,
      Place: $p,
      Platform: Wp,
      Plus: qp,
      Pointer: Qp,
      Position: Jp,
      Postcard: eh,
      Pouring: rh,
      Present: nh,
      PriceTag: sh,
      Printer: ch,
      Promotion: uh,
      QuartzWatch: dh,
      QuestionFilled: ph,
      Rank: gh,
      Reading: yh,
      ReadingLamp: mh,
      Refresh: Ih,
      RefreshLeft: Ch,
      RefreshRight: Th,
      Refrigerator: Lh,
      Remove: kh,
      RemoveFilled: Dh,
      Right: Rh,
      ScaleToOriginal: Vh,
      School: Kh,
      Scissor: Fh,
      Search: zh,
      Select: $h,
      Sell: Wh,
      SemiSelect: qh,
      Service: Qh,
      SetUp: Jh,
      Setting: e5,
      Share: r5,
      Ship: n5,
      Shop: s5,
      ShoppingBag: c5,
      ShoppingCart: d5,
      ShoppingCartFull: u5,
      ShoppingTrolley: p5,
      Smoking: g5,
      Soccer: m5,
      SoldOut: y5,
      Sort: I5,
      SortDown: C5,
      SortUp: T5,
      Stamp: L5,
      Star: k5,
      StarFilled: D5,
      Stopwatch: R5,
      SuccessFilled: V5,
      Sugar: K5,
      Suitcase: z5,
      SuitcaseLine: F5,
      Sunny: $5,
      Sunrise: W5,
      Sunset: q5,
      Switch: eg,
      SwitchButton: Q5,
      SwitchFilled: J5,
      TakeawayBox: rg,
      Ticket: ng,
      Tickets: sg,
      Timer: cg,
      ToiletPaper: ug,
      Tools: dg,
      Top: mg,
      TopLeft: pg,
      TopRight: gg,
      TrendCharts: yg,
      Trophy: Tg,
      TrophyBase: Cg,
      TurnOff: Ig,
      Umbrella: Lg,
      Unlock: Dg,
      Upload: Rg,
      UploadFilled: kg,
      User: Kg,
      UserFilled: Vg,
      Van: Fg,
      VideoCamera: $g,
      VideoCameraFilled: zg,
      VideoPause: Wg,
      VideoPlay: qg,
      View: Qg,
      Wallet: ev,
      WalletFilled: Jg,
      WarnTriangleFilled: rv,
      Warning: sv,
      WarningFilled: nv,
      Watch: cv,
      Watermelon: uv,
      WindPower: dv,
      ZoomIn: pv,
      ZoomOut: gv,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ let x1;
const P0 = (e) => (x1 = e),
  y1 = Symbol();
function In(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var va;
(function (e) {
  ((e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function"));
})(va || (va = {}));
function w1() {
  const e = C0(!0),
    t = e.run(() => le({}));
  let r = [],
    a = [];
  const n = o2({
    install(o) {
      (P0(n),
        (n._a = o),
        o.provide(y1, n),
        (o.config.globalProperties.$pinia = n),
        a.forEach((s) => r.push(s)),
        (a = []));
    },
    use(o) {
      return (this._a ? r.push(o) : a.push(o), this);
    },
    _p: r,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return n;
}
const C1 = () => {};
function vo(e, t, r, a = C1) {
  e.push(t);
  const n = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), a());
  };
  return (!r && Xs() && Js(n), n);
}
function Er(e, ...t) {
  e.slice().forEach((r) => {
    r(...t);
  });
}
const mv = (e) => e(),
  mo = Symbol(),
  an = Symbol();
function Sn(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((r, a) => e.set(a, r))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const r in t) {
    if (!t.hasOwnProperty(r)) continue;
    const a = t[r],
      n = e[r];
    In(n) && In(a) && e.hasOwnProperty(r) && !He(a) && !Yt(a)
      ? (e[r] = Sn(n, a))
      : (e[r] = a);
  }
  return e;
}
const xv = Symbol();
function yv(e) {
  return !In(e) || !e.hasOwnProperty(xv);
}
const { assign: ar } = Object;
function wv(e) {
  return !!(He(e) && e.effect);
}
function Cv(e, t, r, a) {
  const { state: n, actions: o, getters: s } = t,
    l = r.state.value[e];
  let c;
  function u() {
    l || (r.state.value[e] = n ? n() : {});
    const i = s2(r.state.value[e]);
    return ar(
      i,
      o,
      Object.keys(s || {}).reduce(
        (f, d) => (
          (f[d] = o2(
            me(() => {
              P0(r);
              const p = r._s.get(e);
              return s[d].call(p, p);
            }),
          )),
          f
        ),
        {},
      ),
    );
  }
  return ((c = b1(e, u, t, r, a, !0)), c);
}
function b1(e, t, r = {}, a, n, o) {
  let s;
  const l = ar({ actions: {} }, r),
    c = { deep: !0 };
  let u,
    i,
    f = [],
    d = [],
    p;
  const y = a.state.value[e];
  (!o && !y && (a.state.value[e] = {}), le({}));
  let I;
  function R(j) {
    let k;
    ((u = i = !1),
      typeof j == "function"
        ? (j(a.state.value[e]),
          (k = { type: va.patchFunction, storeId: e, events: p }))
        : (Sn(a.state.value[e], j),
          (k = { type: va.patchObject, payload: j, storeId: e, events: p })));
    const te = (I = Symbol());
    (M0().then(() => {
      I === te && (u = !0);
    }),
      (i = !0),
      Er(f, k, a.state.value[e]));
  }
  const O = o
    ? function () {
        const { state: k } = r,
          te = k ? k() : {};
        this.$patch((ue) => {
          ar(ue, te);
        });
      }
    : C1;
  function F() {
    (s.stop(), (f = []), (d = []), a._s.delete(e));
  }
  const L = (j, k = "") => {
      if (mo in j) return ((j[an] = k), j);
      const te = function () {
        P0(a);
        const ue = Array.from(arguments),
          q = [],
          ie = [];
        function Ae(_e) {
          q.push(_e);
        }
        function Fe(_e) {
          ie.push(_e);
        }
        Er(d, { args: ue, name: te[an], store: B, after: Ae, onError: Fe });
        let S;
        try {
          S = j.apply(this && this.$id === e ? this : B, ue);
        } catch (_e) {
          throw (Er(ie, _e), _e);
        }
        return S instanceof Promise
          ? S.then((_e) => (Er(q, _e), _e)).catch(
              (_e) => (Er(ie, _e), Promise.reject(_e)),
            )
          : (Er(q, S), S);
      };
      return ((te[mo] = !0), (te[an] = k), te);
    },
    A = {
      _p: a,
      $id: e,
      $onAction: vo.bind(null, d),
      $patch: R,
      $reset: O,
      $subscribe(j, k = {}) {
        const te = vo(f, j, k.detached, () => ue()),
          ue = s.run(() =>
            gt(
              () => a.state.value[e],
              (q) => {
                (k.flush === "sync" ? i : u) &&
                  j({ storeId: e, type: va.direct, events: p }, q);
              },
              ar({}, c, k),
            ),
          );
        return te;
      },
      $dispose: F,
    },
    B = Kt(A);
  a._s.set(e, B);
  const z = ((a._a && a._a.runWithContext) || mv)(() =>
    a._e.run(() => (s = C0()).run(() => t({ action: L }))),
  );
  for (const j in z) {
    const k = z[j];
    if ((He(k) && !wv(k)) || Yt(k))
      o ||
        (y && yv(k) && (He(k) ? (k.value = y[j]) : Sn(k, y[j])),
        (a.state.value[e][j] = k));
    else if (typeof k == "function") {
      const te = L(k, j);
      ((z[j] = te), (l.actions[j] = k));
    }
  }
  return (
    ar(B, z),
    ar(Ce(B), z),
    Object.defineProperty(B, "$state", {
      get: () => a.state.value[e],
      set: (j) => {
        R((k) => {
          ar(k, j);
        });
      },
    }),
    a._p.forEach((j) => {
      ar(
        B,
        s.run(() => j({ store: B, app: a._a, pinia: a, options: l })),
      );
    }),
    y && o && r.hydrate && r.hydrate(B.$state, y),
    (u = !0),
    (i = !0),
    B
  );
}
/*! #__NO_SIDE_EFFECTS__ */ function Pr(e, t, r) {
  let a;
  const n = typeof t == "function";
  a = n ? r : t;
  function o(s, l) {
    const c = uu();
    return (
      (s = s || (c ? We(y1, null) : null)),
      s && P0(s),
      (s = x1),
      s._s.has(e) || (n ? b1(e, t, a, s) : Cv(e, a, s)),
      s._s.get(e)
    );
  }
  return ((o.$id = e), o);
}
function Te(e) {
  const t = Ce(e),
    r = {};
  for (const a in t) {
    const n = t[a];
    n.effect
      ? (r[a] = me({
          get: () => e[a],
          set(o) {
            e[a] = o;
          },
        }))
      : (He(n) || Yt(n)) && (r[a] = Ri(e, a));
  }
  return r;
}
function bv(e, t) {
  let r;
  function a() {
    ((r = C0()),
      r.run(() =>
        t.length
          ? t(() => {
              (r == null || r.stop(), a());
            })
          : t(),
      ));
  }
  (gt(
    e,
    (n) => {
      n && !r ? a() : n || (r == null || r.stop(), (r = void 0));
    },
    { immediate: !0 },
  ),
    Js(() => {
      r == null || r.stop();
    }));
}
const ht = typeof window < "u",
  rw = ht && "IntersectionObserver" in window,
  Tv = ht && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0),
  aw = ht && "EyeDropper" in window;
function T1(e, t, r) {
  const a = t.length - 1;
  if (a < 0) return e === void 0 ? r : e;
  for (let n = 0; n < a; n++) {
    if (e == null) return r;
    e = e[t[n]];
  }
  return e == null || e[t[a]] === void 0 ? r : e[t[a]];
}
function Mv(e, t) {
  if (e === t) return !0;
  if (
    (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime()) ||
    e !== Object(e) ||
    t !== Object(t)
  )
    return !1;
  const r = Object.keys(e);
  return r.length !== Object.keys(t).length
    ? !1
    : r.every((a) => Mv(e[a], t[a]));
}
function Ln(e, t, r) {
  return e == null || !t || typeof t != "string"
    ? r
    : e[t] !== void 0
      ? e[t]
      : ((t = t.replace(/\[(\w+)\]/g, ".$1")),
        (t = t.replace(/^\./, "")),
        T1(e, t.split("."), r));
}
function nw(e, t, r) {
  if (t === !0) return e === void 0 ? r : e;
  if (t == null || typeof t == "boolean") return r;
  if (e !== Object(e)) {
    if (typeof t != "function") return r;
    const n = t(e, r);
    return typeof n > "u" ? r : n;
  }
  if (typeof t == "string") return Ln(e, t, r);
  if (Array.isArray(t)) return T1(e, t, r);
  if (typeof t != "function") return r;
  const a = t(e, r);
  return typeof a > "u" ? r : a;
}
function M1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({ length: e }, (r, a) => t + a);
}
function ow(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function xo(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function I1(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE
      ? t.nextElementSibling
      : t;
  }
  return e;
}
const sw = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34,
    shift: 16,
  }),
  lw = Object.freeze({
    enter: "Enter",
    tab: "Tab",
    delete: "Delete",
    esc: "Escape",
    space: "Space",
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
    end: "End",
    home: "Home",
    del: "Delete",
    backspace: "Backspace",
    insert: "Insert",
    pageup: "PageUp",
    pagedown: "PageDown",
    shift: "Shift",
  });
function cw(e) {
  return Object.keys(e);
}
function nn(e, t) {
  return t.every((r) => e.hasOwnProperty(r));
}
function Iv(e, t) {
  const r = {},
    a = new Set(Object.keys(e));
  for (const n of t) a.has(n) && (r[n] = e[n]);
  return r;
}
function yo(e, t, r) {
  const a = Object.create(null),
    n = Object.create(null);
  for (const o in e)
    t.some((s) => (s instanceof RegExp ? s.test(o) : s === o))
      ? (a[o] = e[o])
      : (n[o] = e[o]);
  return [a, n];
}
function Sv(e, t) {
  const r = { ...e };
  return (t.forEach((a) => delete r[a]), r);
}
function iw(e, t) {
  const r = {};
  return (t.forEach((a) => (r[a] = e[a])), r);
}
const S1 = /^on[^a-z]/,
  uw = (e) => S1.test(e),
  Lv = [
    "onAfterscriptexecute",
    "onAnimationcancel",
    "onAnimationend",
    "onAnimationiteration",
    "onAnimationstart",
    "onAuxclick",
    "onBeforeinput",
    "onBeforescriptexecute",
    "onChange",
    "onClick",
    "onCompositionend",
    "onCompositionstart",
    "onCompositionupdate",
    "onContextmenu",
    "onCopy",
    "onCut",
    "onDblclick",
    "onFocusin",
    "onFocusout",
    "onFullscreenchange",
    "onFullscreenerror",
    "onGesturechange",
    "onGestureend",
    "onGesturestart",
    "onGotpointercapture",
    "onInput",
    "onKeydown",
    "onKeypress",
    "onKeyup",
    "onLostpointercapture",
    "onMousedown",
    "onMousemove",
    "onMouseout",
    "onMouseover",
    "onMouseup",
    "onMousewheel",
    "onPaste",
    "onPointercancel",
    "onPointerdown",
    "onPointerenter",
    "onPointerleave",
    "onPointermove",
    "onPointerout",
    "onPointerover",
    "onPointerup",
    "onReset",
    "onSelect",
    "onSubmit",
    "onTouchcancel",
    "onTouchend",
    "onTouchmove",
    "onTouchstart",
    "onTransitioncancel",
    "onTransitionend",
    "onTransitionrun",
    "onTransitionstart",
    "onWheel",
  ];
function fw(e) {
  const [t, r] = yo(e, [S1]),
    a = Sv(t, Lv),
    [n, o] = yo(r, ["class", "style", "id", /^data-/]);
  return (Object.assign(n, t), Object.assign(o, a), [n, o]);
}
function dw(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function _w(e, t) {
  let r = 0;
  const a = function () {
    for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
      o[s] = arguments[s];
    (clearTimeout(r), (r = setTimeout(() => e(...o), Ct(t))));
  };
  return (
    (a.clear = () => {
      clearTimeout(r);
    }),
    (a.immediate = e),
    a
  );
}
function L1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(r, e));
}
function pw(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function wo(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + r.repeat(Math.max(0, t - e.length));
}
function Co(e, t) {
  return (
    (arguments.length > 2 && arguments[2] !== void 0
      ? arguments[2]
      : "0"
    ).repeat(Math.max(0, t - e.length)) + e
  );
}
function Av(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const r = [];
  let a = 0;
  for (; a < e.length; ) (r.push(e.substr(a, t)), (a += t));
  return r;
}
function ot() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const n in e) a[n] = e[n];
  for (const n in t) {
    const o = e[n],
      s = t[n];
    if (xo(o) && xo(s)) {
      a[n] = ot(o, s, r);
      continue;
    }
    if (Array.isArray(o) && Array.isArray(s) && r) {
      a[n] = r(o, s);
      continue;
    }
    a[n] = s;
  }
  return a;
}
function Dv(e) {
  return e.map((t) => (t.type === Ye ? Dv(t.children) : t)).flat();
}
function Sr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Sr.cache.has(e)) return Sr.cache.get(e);
  const t = e
    .replace(/[^a-z]/gi, "-")
    .replace(/\B([A-Z])/g, "-$1")
    .toLowerCase();
  return (Sr.cache.set(e, t), t);
}
Sr.cache = new Map();
function za(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t)) return t.map((r) => za(e, r)).flat(1);
  if (t.suspense) return za(e, t.ssContent);
  if (Array.isArray(t.children)) return t.children.map((r) => za(e, r)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree) return za(e, t.component.subTree).flat(1);
  }
  return [];
}
function hw(e) {
  return "touches" in e
    ? { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }
    : { clientX: e.clientX, clientY: e.clientY };
}
function gw(e) {
  const t = Kt({}),
    r = me(e);
  return (
    L0(
      () => {
        for (const a in r.value) t[a] = r.value[a];
      },
      { flush: "sync" },
    ),
    s2(t)
  );
}
function vw(e, t) {
  return e.includes(t);
}
function mw(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const xw = () => [Function, Array];
function yw(e, t) {
  return (
    (t = "on" + Pa(t)),
    !!(
      e[t] ||
      e[`${t}Once`] ||
      e[`${t}Capture`] ||
      e[`${t}OnceCapture`] ||
      e[`${t}CaptureOnce`]
    )
  );
}
function ww(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
    a < t;
    a++
  )
    r[a - 1] = arguments[a];
  if (Array.isArray(e)) for (const n of e) n(...r);
  else typeof e == "function" && e(...r);
}
function Pv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const r = [
    "button",
    "[href]",
    'input:not([type="hidden"])',
    "select",
    "textarea",
    "[tabindex]",
  ]
    .map((a) => `${a}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`)
    .join(", ");
  return [...e.querySelectorAll(r)];
}
function kv(e, t, r) {
  let a,
    n = e.indexOf(document.activeElement);
  const o = t === "next" ? 1 : -1;
  do ((n += o), (a = e[n]));
  while (
    (!a || a.offsetParent == null || !((r == null ? void 0 : r(a)) ?? !0)) &&
    n < e.length &&
    n >= 0
  );
  return a;
}
function Ev(e, t) {
  var a, n, o, s;
  const r = Pv(e);
  if (!t)
    (e === document.activeElement || !e.contains(document.activeElement)) &&
      ((a = r[0]) == null || a.focus());
  else if (t === "first") (n = r[0]) == null || n.focus();
  else if (t === "last") (o = r.at(-1)) == null || o.focus();
  else if (typeof t == "number") (s = r[t]) == null || s.focus();
  else {
    const l = kv(r, t);
    l ? l.focus() : Ev(e, t === "next" ? "first" : "last");
  }
}
function Cw(e) {
  return e == null || (typeof e == "string" && e.trim() === "");
}
function bw() {}
function Tw(e, t) {
  if (
    !(
      ht &&
      typeof CSS < "u" &&
      typeof CSS.supports < "u" &&
      CSS.supports(`selector(${t})`)
    )
  )
    return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Rv(e) {
  return e.some((t) =>
    jr(t) ? (t.type === nt ? !1 : t.type !== Ye || Rv(t.children)) : !0,
  )
    ? e
    : null;
}
function Mw(e, t) {
  if (!ht || e === 0) return (t(), () => {});
  const r = window.setTimeout(t, e);
  return () => window.clearTimeout(r);
}
function Iw(e, t) {
  const r = e.clientX,
    a = e.clientY,
    n = t.getBoundingClientRect(),
    o = n.left,
    s = n.top,
    l = n.right,
    c = n.bottom;
  return r >= o && r <= l && a >= s && a <= c;
}
function Sw() {
  const e = Bt(),
    t = (r) => {
      e.value = r;
    };
  return (
    Object.defineProperty(t, "value", {
      enumerable: !0,
      get: () => e.value,
      set: (r) => (e.value = r),
    }),
    Object.defineProperty(t, "el", { enumerable: !0, get: () => I1(e.value) }),
    t
  );
}
const Rr = 2.4,
  bo = 0.2126729,
  To = 0.7151522,
  Mo = 0.072175,
  Ov = 0.55,
  Vv = 0.58,
  Bv = 0.57,
  Kv = 0.62,
  Ua = 0.03,
  Io = 1.45,
  Hv = 5e-4,
  Fv = 1.25,
  Nv = 1.25,
  zv = 0.078,
  So = 12.82051282051282,
  $a = 0.06,
  Uv = 0.001;
function Lo(e, t) {
  const r = (e.r / 255) ** Rr,
    a = (e.g / 255) ** Rr,
    n = (e.b / 255) ** Rr,
    o = (t.r / 255) ** Rr,
    s = (t.g / 255) ** Rr,
    l = (t.b / 255) ** Rr;
  let c = r * bo + a * To + n * Mo,
    u = o * bo + s * To + l * Mo;
  if (
    (c <= Ua && (c += (Ua - c) ** Io),
    u <= Ua && (u += (Ua - u) ** Io),
    Math.abs(u - c) < Hv)
  )
    return 0;
  let i;
  if (u > c) {
    const f = (u ** Ov - c ** Vv) * Fv;
    i = f < Uv ? 0 : f < zv ? f - f * So * $a : f - $a;
  } else {
    const f = (u ** Kv - c ** Bv) * Nv;
    i = f > -0.001 ? 0 : f > -0.078 ? f - f * So * $a : f + $a;
  }
  return i * 100;
}
function Lw(e) {}
function Aw(e, t) {
  t = Array.isArray(t)
    ? t
        .slice(0, -1)
        .map((r) => `'${r}'`)
        .join(", ") + ` or '${t.at(-1)}'`
    : `'${t}'`;
}
const u0 = 0.20689655172413793,
  $v = (e) => (e > u0 ** 3 ? Math.cbrt(e) : e / (3 * u0 ** 2) + 4 / 29),
  jv = (e) => (e > u0 ? e ** 3 : 3 * u0 ** 2 * (e - 4 / 29));
function A1(e) {
  const t = $v,
    r = t(e[1]);
  return [
    116 * r - 16,
    500 * (t(e[0] / 0.95047) - r),
    200 * (r - t(e[2] / 1.08883)),
  ];
}
function D1(e) {
  const t = jv,
    r = (e[0] + 16) / 116;
  return [t(r + e[1] / 500) * 0.95047, t(r), t(r - e[2] / 200) * 1.08883];
}
const Wv = [
    [3.2406, -1.5372, -0.4986],
    [-0.9689, 1.8758, 0.0415],
    [0.0557, -0.204, 1.057],
  ],
  Gv = (e) => (e <= 0.0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055),
  qv = [
    [0.4124, 0.3576, 0.1805],
    [0.2126, 0.7152, 0.0722],
    [0.0193, 0.1192, 0.9505],
  ],
  Yv = (e) => (e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4);
function P1(e) {
  const t = Array(3),
    r = Gv,
    a = Wv;
  for (let n = 0; n < 3; ++n)
    t[n] = Math.round(
      L1(r(a[n][0] * e[0] + a[n][1] * e[1] + a[n][2] * e[2])) * 255,
    );
  return { r: t[0], g: t[1], b: t[2] };
}
function v2(e) {
  let { r: t, g: r, b: a } = e;
  const n = [0, 0, 0],
    o = Yv,
    s = qv;
  ((t = o(t / 255)), (r = o(r / 255)), (a = o(a / 255)));
  for (let l = 0; l < 3; ++l) n[l] = s[l][0] * t + s[l][1] * r + s[l][2] * a;
  return n;
}
function Qv(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Dw(e) {
  return Qv(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Ao = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,
  Xv = {
    rgb: (e, t, r, a) => ({ r: e, g: t, b: r, a }),
    rgba: (e, t, r, a) => ({ r: e, g: t, b: r, a }),
    hsl: (e, t, r, a) => Do({ h: e, s: t, l: r, a }),
    hsla: (e, t, r, a) => Do({ h: e, s: t, l: r, a }),
    hsv: (e, t, r, a) => Dr({ h: e, s: t, v: r, a }),
    hsva: (e, t, r, a) => Dr({ h: e, s: t, v: r, a }),
  };
function qt(e) {
  if (typeof e == "number")
    return { r: (e & 16711680) >> 16, g: (e & 65280) >> 8, b: e & 255 };
  if (typeof e == "string" && Ao.test(e)) {
    const { groups: t } = e.match(Ao),
      { fn: r, values: a } = t,
      n = a
        .split(/,\s*/)
        .map((o) =>
          o.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(r)
            ? parseFloat(o) / 100
            : parseFloat(o),
        );
    return Xv[r](...n);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return (
      [3, 4].includes(t.length)
        ? (t = t
            .split("")
            .map((r) => r + r)
            .join(""))
        : [6, 8].includes(t.length),
      R1(t)
    );
  } else if (typeof e == "object") {
    if (nn(e, ["r", "g", "b"])) return e;
    if (nn(e, ["h", "s", "l"])) return Dr(k1(e));
    if (nn(e, ["h", "s", "v"])) return Dr(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Dr(e) {
  const { h: t, s: r, v: a, a: n } = e,
    o = (l) => {
      const c = (l + t / 60) % 6;
      return a - a * r * Math.max(Math.min(c, 4 - c, 1), 0);
    },
    s = [o(5), o(3), o(1)].map((l) => Math.round(l * 255));
  return { r: s[0], g: s[1], b: s[2], a: n };
}
function Do(e) {
  return Dr(k1(e));
}
function Jv(e) {
  if (!e) return { h: 0, s: 1, v: 1, a: 1 };
  const t = e.r / 255,
    r = e.g / 255,
    a = e.b / 255,
    n = Math.max(t, r, a),
    o = Math.min(t, r, a);
  let s = 0;
  (n !== o &&
    (n === t
      ? (s = 60 * (0 + (r - a) / (n - o)))
      : n === r
        ? (s = 60 * (2 + (a - t) / (n - o)))
        : n === a && (s = 60 * (4 + (t - r) / (n - o)))),
    s < 0 && (s = s + 360));
  const l = n === 0 ? 0 : (n - o) / n,
    c = [s, l, n];
  return { h: c[0], s: c[1], v: c[2], a: e.a };
}
function Pw(e) {
  const { h: t, s: r, v: a, a: n } = e,
    o = a - (a * r) / 2,
    s = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return { h: t, s, l: o, a: n };
}
function k1(e) {
  const { h: t, s: r, l: a, a: n } = e,
    o = a + r * Math.min(a, 1 - a),
    s = o === 0 ? 0 : 2 - (2 * a) / o;
  return { h: t, s, v: o, a: n };
}
function Zv(e) {
  let { r: t, g: r, b: a, a: n } = e;
  return n === void 0
    ? `rgb(${t}, ${r}, ${a})`
    : `rgba(${t}, ${r}, ${a}, ${n})`;
}
function kw(e) {
  return Zv(Dr(e));
}
function ja(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function E1(e) {
  let { r: t, g: r, b: a, a: n } = e;
  return `#${[ja(t), ja(r), ja(a), n !== void 0 ? ja(Math.round(n * 255)) : ""].join("")}`;
}
function R1(e) {
  e = em(e);
  let [t, r, a, n] = Av(e, 2).map((o) => parseInt(o, 16));
  return ((n = n === void 0 ? n : n / 255), { r: t, g: r, b: a, a: n });
}
function Ew(e) {
  const t = R1(e);
  return Jv(t);
}
function Rw(e) {
  return E1(Dr(e));
}
function em(e) {
  return (
    e.startsWith("#") && (e = e.slice(1)),
    (e = e.replace(/([^0-9a-f])/gi, "F")),
    (e.length === 3 || e.length === 4) &&
      (e = e
        .split("")
        .map((t) => t + t)
        .join("")),
    e.length !== 6 && (e = wo(wo(e, 6), 8, "F")),
    e
  );
}
function tm(e, t) {
  const r = A1(v2(e));
  return ((r[0] = r[0] + t * 10), P1(D1(r)));
}
function rm(e, t) {
  const r = A1(v2(e));
  return ((r[0] = r[0] - t * 10), P1(D1(r)));
}
function An(e) {
  const t = qt(e);
  return v2(t)[1];
}
function Ow(e, t) {
  const r = An(e),
    a = An(t),
    n = Math.max(r, a),
    o = Math.min(r, a);
  return (n + 0.05) / (o + 0.05);
}
function am(e) {
  const t = Math.abs(Lo(qt(0), qt(e)));
  return Math.abs(Lo(qt(16777215), qt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function k0(e, t) {
  return (r) =>
    Object.keys(e).reduce((a, n) => {
      const s =
        typeof e[n] == "object" && e[n] != null && !Array.isArray(e[n])
          ? e[n]
          : { type: e[n] };
      return (
        r && n in r ? (a[n] = { ...s, default: r[n] }) : (a[n] = s),
        t && !a[n].source && (a[n].source = t),
        a
      );
    }, {});
}
function ea(e, t) {
  const r = Qt();
  if (!r)
    throw new Error(
      `[Vuetify] ${e} must be called from inside a setup function`,
    );
  return r;
}
function nm() {
  let e =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : "composables";
  const t = ea(e).type;
  return Sr(
    (t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name),
  );
}
let O1 = 0,
  Ja = new WeakMap();
function V1() {
  const e = ea("getUid");
  if (Ja.has(e)) return Ja.get(e);
  {
    const t = O1++;
    return (Ja.set(e, t), t);
  }
}
V1.reset = () => {
  ((O1 = 0), (Ja = new WeakMap()));
};
function om(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : ea("injectSelf");
  const { provides: r } = t;
  if (r && e in r) return r[e];
}
const Gr = Symbol.for("vuetify:defaults");
function sm(e) {
  return le(e);
}
function m2() {
  const e = We(Gr);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Vw(e, t) {
  const r = m2(),
    a = le(e),
    n = me(() => {
      if (Ct(t == null ? void 0 : t.disabled)) return r.value;
      const s = Ct(t == null ? void 0 : t.scoped),
        l = Ct(t == null ? void 0 : t.reset),
        c = Ct(t == null ? void 0 : t.root);
      if (a.value == null && !(s || l || c)) return r.value;
      let u = ot(a.value, { prev: r.value });
      if (s) return u;
      if (l || c) {
        const i = Number(l || 1 / 0);
        for (let f = 0; f <= i && !(!u || !("prev" in u)); f++) u = u.prev;
        return (
          u &&
            typeof c == "string" &&
            c in u &&
            (u = ot(ot(u, { prev: u }), u[c])),
          u
        );
      }
      return u.prev ? ot(u.prev, u) : u;
    });
  return (Ir(Gr, n), n);
}
function lm(e, t) {
  var r, a;
  return (
    typeof ((r = e.props) == null ? void 0 : r[t]) < "u" ||
    typeof ((a = e.props) == null ? void 0 : a[Sr(t)]) < "u"
  );
}
function cm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 ? arguments[1] : void 0,
    r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : m2();
  const a = ea("useDefaults");
  if (((t = t ?? a.type.name ?? a.type.__name), !t))
    throw new Error("[Vuetify] Could not determine component name");
  const n = me(() => {
      var c;
      return (c = r.value) == null ? void 0 : c[e._as ?? t];
    }),
    o = new Proxy(e, {
      get(c, u) {
        var f, d, p, y, I, R, O;
        const i = Reflect.get(c, u);
        return u === "class" || u === "style"
          ? [(f = n.value) == null ? void 0 : f[u], i].filter((F) => F != null)
          : typeof u == "string" && !lm(a.vnode, u)
            ? ((d = n.value) == null ? void 0 : d[u]) !== void 0
              ? (p = n.value) == null
                ? void 0
                : p[u]
              : ((I = (y = r.value) == null ? void 0 : y.global) == null
                    ? void 0
                    : I[u]) !== void 0
                ? (O = (R = r.value) == null ? void 0 : R.global) == null
                  ? void 0
                  : O[u]
                : i
            : i;
      },
    }),
    s = Bt();
  L0(() => {
    if (n.value) {
      const c = Object.entries(n.value).filter((u) => {
        let [i] = u;
        return i.startsWith(i[0].toUpperCase());
      });
      s.value = c.length ? Object.fromEntries(c) : void 0;
    } else s.value = void 0;
  });
  function l() {
    const c = om(Gr, a);
    Ir(
      Gr,
      me(() =>
        s.value
          ? ot((c == null ? void 0 : c.value) ?? {}, s.value)
          : c == null
            ? void 0
            : c.value,
      ),
    );
  }
  return { props: o, provideSubDefaults: l };
}
function Oa(e) {
  if (((e._setup = e._setup ?? e.setup), !e.name)) return e;
  if (e._setup) {
    e.props = k0(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter(
      (r) => r !== "class" && r !== "style",
    );
    ((e.filterProps = function (a) {
      return Iv(a, t);
    }),
      (e.props._as = String),
      (e.setup = function (a, n) {
        const o = m2();
        if (!o.value) return e._setup(a, n);
        const { props: s, provideSubDefaults: l } = cm(a, a._as ?? e.name, o),
          c = e._setup(s, n);
        return (l(), c);
      }));
  }
  return e;
}
function im() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? Oa : g)(t);
}
function Bw(e, t) {
  return ((t.props = e), t);
}
function um(e, t, r) {
  let a =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f,
    n =
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const o = ea("useProxiedModel"),
    s = le(e[t] !== void 0 ? e[t] : r),
    l = Sr(t),
    u = me(
      l !== t
        ? () => {
            var f, d, p, y;
            return (
              e[t],
              !!(
                (((f = o.vnode.props) != null && f.hasOwnProperty(t)) ||
                  ((d = o.vnode.props) != null && d.hasOwnProperty(l))) &&
                (((p = o.vnode.props) != null &&
                  p.hasOwnProperty(`onUpdate:${t}`)) ||
                  ((y = o.vnode.props) != null &&
                    y.hasOwnProperty(`onUpdate:${l}`)))
              )
            );
          }
        : () => {
            var f, d;
            return (
              e[t],
              !!(
                (f = o.vnode.props) != null &&
                f.hasOwnProperty(t) &&
                (d = o.vnode.props) != null &&
                d.hasOwnProperty(`onUpdate:${t}`)
              )
            );
          },
    );
  bv(
    () => !u.value,
    () => {
      gt(
        () => e[t],
        (f) => {
          s.value = f;
        },
      );
    },
  );
  const i = me({
    get() {
      const f = e[t];
      return a(u.value ? f : s.value);
    },
    set(f) {
      const d = n(f),
        p = Ce(u.value ? e[t] : s.value);
      p === d ||
        a(p) === f ||
        ((s.value = d), o == null || o.emit(`update:${t}`, d));
    },
  });
  return (
    Object.defineProperty(i, "externalValue", {
      get: () => (u.value ? e[t] : s.value),
    }),
    i
  );
}
const fm = {
    badge: "Badge",
    open: "Open",
    close: "Close",
    dismiss: "Dismiss",
    confirmEdit: { ok: "OK", cancel: "Cancel" },
    dataIterator: {
      noResultsText: "No matching records found",
      loadingText: "Loading items...",
    },
    dataTable: {
      itemsPerPageText: "Rows per page:",
      ariaLabel: {
        sortDescending: "Sorted descending.",
        sortAscending: "Sorted ascending.",
        sortNone: "Not sorted.",
        activateNone: "Activate to remove sorting.",
        activateDescending: "Activate to sort descending.",
        activateAscending: "Activate to sort ascending.",
      },
      sortBy: "Sort by",
    },
    dataFooter: {
      itemsPerPageText: "Items per page:",
      itemsPerPageAll: "All",
      nextPage: "Next page",
      prevPage: "Previous page",
      firstPage: "First page",
      lastPage: "Last page",
      pageText: "{0}-{1} of {2}",
    },
    dateRangeInput: { divider: "to" },
    datePicker: {
      itemsSelected: "{0} selected",
      range: { title: "Select dates", header: "Enter dates" },
      title: "Select date",
      header: "Enter date",
      input: { placeholder: "Enter date" },
    },
    noDataText: "No data available",
    carousel: {
      prev: "Previous visual",
      next: "Next visual",
      ariaLabel: { delimiter: "Carousel slide {0} of {1}" },
    },
    calendar: { moreEvents: "{0} more", today: "Today" },
    input: {
      clear: "Clear {0}",
      prependAction: "{0} prepended action",
      appendAction: "{0} appended action",
      otp: "Please enter OTP character {0}",
    },
    fileInput: {
      counter: "{0} files",
      counterSize: "{0} files ({1} in total)",
    },
    timePicker: { am: "AM", pm: "PM", title: "Select Time" },
    pagination: {
      ariaLabel: {
        root: "Pagination Navigation",
        next: "Next page",
        previous: "Previous page",
        page: "Go to page {0}",
        currentPage: "Page {0}, Current page",
        first: "First page",
        last: "Last page",
      },
    },
    stepper: { next: "Next", prev: "Previous" },
    rating: { ariaLabel: { item: "Rating {0} of {1}" } },
    loading: "Loading...",
    infiniteScroll: { loadMore: "Load more", empty: "No more" },
  },
  Po = "$vuetify.",
  ko = (e, t) => e.replace(/\{(\d+)\}/g, (r, a) => String(t[+a])),
  B1 = (e, t, r) =>
    function (a) {
      for (
        var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1;
        s < n;
        s++
      )
        o[s - 1] = arguments[s];
      if (!a.startsWith(Po)) return ko(a, o);
      const l = a.replace(Po, ""),
        c = e.value && r.value[e.value],
        u = t.value && r.value[t.value];
      let i = Ln(c, l, null);
      return (
        i || (`${a}${e.value}`, (i = Ln(u, l, null))),
        i || (i = a),
        typeof i != "string" && (i = a),
        ko(i, o)
      );
    };
function K1(e, t) {
  return (r, a) => new Intl.NumberFormat([e.value, t.value], a).format(r);
}
function on(e, t, r) {
  const a = um(e, t, e[t] ?? r.value);
  return (
    (a.value = e[t] ?? r.value),
    gt(r, (n) => {
      e[t] == null && (a.value = r.value);
    }),
    a
  );
}
function H1(e) {
  return (t) => {
    const r = on(t, "locale", e.current),
      a = on(t, "fallback", e.fallback),
      n = on(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: r,
      fallback: a,
      messages: n,
      t: B1(r, a, n),
      n: K1(r, a),
      provide: H1({ current: r, fallback: a, messages: n }),
    };
  };
}
function dm(e) {
  const t = Bt((e == null ? void 0 : e.locale) ?? "en"),
    r = Bt((e == null ? void 0 : e.fallback) ?? "en"),
    a = le({ en: fm, ...(e == null ? void 0 : e.messages) });
  return {
    name: "vuetify",
    current: t,
    fallback: r,
    messages: a,
    t: B1(t, r, a),
    n: K1(t, r),
    provide: H1({ current: t, fallback: r, messages: a }),
  };
}
const f0 = Symbol.for("vuetify:locale");
function _m(e) {
  return e.name != null;
}
function pm(e) {
  const t =
      e != null && e.adapter && _m(e == null ? void 0 : e.adapter)
        ? e == null
          ? void 0
          : e.adapter
        : dm(e),
    r = gm(t, e);
  return { ...t, ...r };
}
function Kw() {
  const e = We(f0);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function hm() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1,
  };
}
function gm(e, t) {
  const r = le((t == null ? void 0 : t.rtl) ?? hm()),
    a = me(() => r.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: r,
    rtlClasses: me(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`),
  };
}
function vm() {
  const e = We(f0);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const E0 = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  "GB-alt-variant": 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0,
};
function mm(e, t, r) {
  const a = [];
  let n = [];
  const o = F1(e),
    s = N1(e),
    l = r ?? E0[t.slice(-2).toUpperCase()] ?? 0,
    c = (o.getDay() - l + 7) % 7,
    u = (s.getDay() - l + 7) % 7;
  for (let i = 0; i < c; i++) {
    const f = new Date(o);
    (f.setDate(f.getDate() - (c - i)), n.push(f));
  }
  for (let i = 1; i <= s.getDate(); i++) {
    const f = new Date(e.getFullYear(), e.getMonth(), i);
    (n.push(f), n.length === 7 && (a.push(n), (n = [])));
  }
  for (let i = 1; i < 7 - u; i++) {
    const f = new Date(s);
    (f.setDate(f.getDate() + i), n.push(f));
  }
  return (n.length > 0 && a.push(n), a);
}
function xm(e, t, r) {
  const a = r ?? E0[t.slice(-2).toUpperCase()] ?? 0,
    n = new Date(e);
  for (; n.getDay() !== a; ) n.setDate(n.getDate() - 1);
  return n;
}
function ym(e, t) {
  const r = new Date(e),
    a = ((E0[t.slice(-2).toUpperCase()] ?? 0) + 6) % 7;
  for (; r.getDay() !== a; ) r.setDate(r.getDate() + 1);
  return r;
}
function F1(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function N1(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function wm(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const Cm = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function z1(e) {
  if (e == null) return new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (Cm.test(e)) return wm(e);
    if (((t = Date.parse(e)), !isNaN(t))) return new Date(t);
  }
  return null;
}
const Eo = new Date(2e3, 0, 2);
function bm(e, t) {
  const r = t ?? E0[e.slice(-2).toUpperCase()] ?? 0;
  return M1(7).map((a) => {
    const n = new Date(Eo);
    return (
      n.setDate(Eo.getDate() + r + a),
      new Intl.DateTimeFormat(e, { weekday: "narrow" }).format(n)
    );
  });
}
function Tm(e, t, r, a) {
  const n = z1(e) ?? new Date(),
    o = a == null ? void 0 : a[t];
  if (typeof o == "function") return o(n, t, r);
  let s = {};
  switch (t) {
    case "fullDate":
      s = { year: "numeric", month: "long", day: "numeric" };
      break;
    case "fullDateWithWeekday":
      s = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      break;
    case "normalDate":
      const l = n.getDate(),
        c = new Intl.DateTimeFormat(r, { month: "long" }).format(n);
      return `${l} ${c}`;
    case "normalDateWithWeekday":
      s = { weekday: "short", day: "numeric", month: "short" };
      break;
    case "shortDate":
      s = { month: "short", day: "numeric" };
      break;
    case "year":
      s = { year: "numeric" };
      break;
    case "month":
      s = { month: "long" };
      break;
    case "monthShort":
      s = { month: "short" };
      break;
    case "monthAndYear":
      s = { month: "long", year: "numeric" };
      break;
    case "monthAndDate":
      s = { month: "long", day: "numeric" };
      break;
    case "weekday":
      s = { weekday: "long" };
      break;
    case "weekdayShort":
      s = { weekday: "short" };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(r).format(n.getDate());
    case "hours12h":
      s = { hour: "numeric", hour12: !0 };
      break;
    case "hours24h":
      s = { hour: "numeric", hour12: !1 };
      break;
    case "minutes":
      s = { minute: "numeric" };
      break;
    case "seconds":
      s = { second: "numeric" };
      break;
    case "fullTime":
      s = { hour: "numeric", minute: "numeric", second: "numeric", hour12: !0 };
      break;
    case "fullTime12h":
      s = { hour: "numeric", minute: "numeric", second: "numeric", hour12: !0 };
      break;
    case "fullTime24h":
      s = { hour: "numeric", minute: "numeric", second: "numeric", hour12: !1 };
      break;
    case "fullDateTime":
      s = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0,
      };
      break;
    case "fullDateTime12h":
      s = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0,
      };
      break;
    case "fullDateTime24h":
      s = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1,
      };
      break;
    case "keyboardDate":
      s = { year: "numeric", month: "2-digit", day: "2-digit" };
      break;
    case "keyboardDateTime":
      s = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1,
      };
      break;
    case "keyboardDateTime12h":
      s = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0,
      };
      break;
    case "keyboardDateTime24h":
      s = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1,
      };
      break;
    default:
      s = o ?? { timeZone: "UTC", timeZoneName: "short" };
  }
  return new Intl.DateTimeFormat(r, s).format(n);
}
function Mm(e, t) {
  const r = e.toJsDate(t),
    a = r.getFullYear(),
    n = Co(String(r.getMonth() + 1), 2, "0"),
    o = Co(String(r.getDate()), 2, "0");
  return `${a}-${n}-${o}`;
}
function Im(e) {
  const [t, r, a] = e.split("-").map(Number);
  return new Date(t, r - 1, a);
}
function Sm(e, t) {
  const r = new Date(e);
  return (r.setMinutes(r.getMinutes() + t), r);
}
function Lm(e, t) {
  const r = new Date(e);
  return (r.setHours(r.getHours() + t), r);
}
function Am(e, t) {
  const r = new Date(e);
  return (r.setDate(r.getDate() + t), r);
}
function Dm(e, t) {
  const r = new Date(e);
  return (r.setDate(r.getDate() + t * 7), r);
}
function Pm(e, t) {
  const r = new Date(e);
  return (r.setDate(1), r.setMonth(r.getMonth() + t), r);
}
function km(e) {
  return e.getFullYear();
}
function Em(e) {
  return e.getMonth();
}
function Rm(e) {
  return e.getDate();
}
function Om(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function Vm(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function Bm(e) {
  return e.getHours();
}
function Km(e) {
  return e.getMinutes();
}
function Hm(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function Fm(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Nm(e, t) {
  return d0(e, t[0]) && $m(e, t[1]);
}
function zm(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function d0(e, t) {
  return e.getTime() > t.getTime();
}
function Um(e, t) {
  return d0(Dn(e), Dn(t));
}
function $m(e, t) {
  return e.getTime() < t.getTime();
}
function Ro(e, t) {
  return e.getTime() === t.getTime();
}
function jm(e, t) {
  return (
    e.getDate() === t.getDate() &&
    e.getMonth() === t.getMonth() &&
    e.getFullYear() === t.getFullYear()
  );
}
function Wm(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function Gm(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function qm(e, t, r) {
  const a = new Date(e),
    n = new Date(t);
  switch (r) {
    case "years":
      return a.getFullYear() - n.getFullYear();
    case "quarters":
      return Math.floor(
        (a.getMonth() -
          n.getMonth() +
          (a.getFullYear() - n.getFullYear()) * 12) /
          4,
      );
    case "months":
      return (
        a.getMonth() - n.getMonth() + (a.getFullYear() - n.getFullYear()) * 12
      );
    case "weeks":
      return Math.floor((a.getTime() - n.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((a.getTime() - n.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((a.getTime() - n.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((a.getTime() - n.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((a.getTime() - n.getTime()) / 1e3);
    default:
      return a.getTime() - n.getTime();
  }
}
function Ym(e, t) {
  const r = new Date(e);
  return (r.setHours(t), r);
}
function Qm(e, t) {
  const r = new Date(e);
  return (r.setMinutes(t), r);
}
function Xm(e, t) {
  const r = new Date(e);
  return (r.setMonth(t), r);
}
function Jm(e, t) {
  const r = new Date(e);
  return (r.setDate(t), r);
}
function Zm(e, t) {
  const r = new Date(e);
  return (r.setFullYear(t), r);
}
function Dn(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function e9(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class t9 {
  constructor(t) {
    ((this.locale = t.locale), (this.formats = t.formats));
  }
  date(t) {
    return z1(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return Mm(this, t);
  }
  parseISO(t) {
    return Im(t);
  }
  addMinutes(t, r) {
    return Sm(t, r);
  }
  addHours(t, r) {
    return Lm(t, r);
  }
  addDays(t, r) {
    return Am(t, r);
  }
  addWeeks(t, r) {
    return Dm(t, r);
  }
  addMonths(t, r) {
    return Pm(t, r);
  }
  getWeekArray(t, r) {
    return mm(t, this.locale, r ? Number(r) : void 0);
  }
  startOfWeek(t, r) {
    return xm(t, this.locale, r ? Number(r) : void 0);
  }
  endOfWeek(t) {
    return ym(t, this.locale);
  }
  startOfMonth(t) {
    return F1(t);
  }
  endOfMonth(t) {
    return N1(t);
  }
  format(t, r) {
    return Tm(t, r, this.locale, this.formats);
  }
  isEqual(t, r) {
    return Ro(t, r);
  }
  isValid(t) {
    return zm(t);
  }
  isWithinRange(t, r) {
    return Nm(t, r);
  }
  isAfter(t, r) {
    return d0(t, r);
  }
  isAfterDay(t, r) {
    return Um(t, r);
  }
  isBefore(t, r) {
    return !d0(t, r) && !Ro(t, r);
  }
  isSameDay(t, r) {
    return jm(t, r);
  }
  isSameMonth(t, r) {
    return Wm(t, r);
  }
  isSameYear(t, r) {
    return Gm(t, r);
  }
  setMinutes(t, r) {
    return Qm(t, r);
  }
  setHours(t, r) {
    return Ym(t, r);
  }
  setMonth(t, r) {
    return Xm(t, r);
  }
  setDate(t, r) {
    return Jm(t, r);
  }
  setYear(t, r) {
    return Zm(t, r);
  }
  getDiff(t, r, a) {
    return qm(t, r, a);
  }
  getWeekdays(t) {
    return bm(this.locale, t ? Number(t) : void 0);
  }
  getYear(t) {
    return km(t);
  }
  getMonth(t) {
    return Em(t);
  }
  getDate(t) {
    return Rm(t);
  }
  getNextMonth(t) {
    return Om(t);
  }
  getPreviousMonth(t) {
    return Vm(t);
  }
  getHours(t) {
    return Bm(t);
  }
  getMinutes(t) {
    return Km(t);
  }
  startOfDay(t) {
    return Dn(t);
  }
  endOfDay(t) {
    return e9(t);
  }
  startOfYear(t) {
    return Hm(t);
  }
  endOfYear(t) {
    return Fm(t);
  }
}
const r9 = Symbol.for("vuetify:date-options"),
  Oo = Symbol.for("vuetify:date-adapter");
function a9(e, t) {
  const r = ot(
    {
      adapter: t9,
      locale: {
        af: "af-ZA",
        bg: "bg-BG",
        ca: "ca-ES",
        ckb: "",
        cs: "cs-CZ",
        de: "de-DE",
        el: "el-GR",
        en: "en-US",
        et: "et-EE",
        fa: "fa-IR",
        fi: "fi-FI",
        hr: "hr-HR",
        hu: "hu-HU",
        he: "he-IL",
        id: "id-ID",
        it: "it-IT",
        ja: "ja-JP",
        ko: "ko-KR",
        lv: "lv-LV",
        lt: "lt-LT",
        nl: "nl-NL",
        no: "no-NO",
        pl: "pl-PL",
        pt: "pt-PT",
        ro: "ro-RO",
        ru: "ru-RU",
        sk: "sk-SK",
        sl: "sl-SI",
        srCyrl: "sr-SP",
        srLatn: "sr-SP",
        sv: "sv-SE",
        th: "th-TH",
        tr: "tr-TR",
        az: "az-AZ",
        uk: "uk-UA",
        vi: "vi-VN",
        zhHans: "zh-CN",
        zhHant: "zh-TW",
      },
    },
    e,
  );
  return { options: r, instance: n9(r, t) };
}
function n9(e, t) {
  const r = Kt(
    typeof e.adapter == "function"
      ? new e.adapter({
          locale: e.locale[t.current.value] ?? t.current.value,
          formats: e.formats,
        })
      : e.adapter,
  );
  return (
    gt(t.current, (a) => {
      r.locale = e.locale[a] ?? a ?? r.locale;
    }),
    r
  );
}
const Pn = Symbol.for("vuetify:display"),
  Vo = {
    mobileBreakpoint: "lg",
    thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 },
  },
  o9 = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vo;
    return ot(Vo, e);
  };
function Bo(e) {
  return ht && !e
    ? window.innerWidth
    : (typeof e == "object" && e.clientWidth) || 0;
}
function Ko(e) {
  return ht && !e
    ? window.innerHeight
    : (typeof e == "object" && e.clientHeight) || 0;
}
function Ho(e) {
  const t = ht && !e ? window.navigator.userAgent : "ssr";
  function r(y) {
    return !!t.match(y);
  }
  const a = r(/android/i),
    n = r(/iphone|ipad|ipod/i),
    o = r(/cordova/i),
    s = r(/electron/i),
    l = r(/chrome/i),
    c = r(/edge/i),
    u = r(/firefox/i),
    i = r(/opera/i),
    f = r(/win/i),
    d = r(/mac/i),
    p = r(/linux/i);
  return {
    android: a,
    ios: n,
    cordova: o,
    electron: s,
    chrome: l,
    edge: c,
    firefox: u,
    opera: i,
    win: f,
    mac: d,
    linux: p,
    touch: Tv,
    ssr: t === "ssr",
  };
}
function s9(e, t) {
  const { thresholds: r, mobileBreakpoint: a } = o9(e),
    n = Bt(Ko(t)),
    o = Bt(Ho(t)),
    s = Kt({}),
    l = Bt(Bo(t));
  function c() {
    ((n.value = Ko()), (l.value = Bo()));
  }
  function u() {
    (c(), (o.value = Ho()));
  }
  return (
    L0(() => {
      const i = l.value < r.sm,
        f = l.value < r.md && !i,
        d = l.value < r.lg && !(f || i),
        p = l.value < r.xl && !(d || f || i),
        y = l.value < r.xxl && !(p || d || f || i),
        I = l.value >= r.xxl,
        R = i ? "xs" : f ? "sm" : d ? "md" : p ? "lg" : y ? "xl" : "xxl",
        O = typeof a == "number" ? a : r[a],
        F = l.value < O;
      ((s.xs = i),
        (s.sm = f),
        (s.md = d),
        (s.lg = p),
        (s.xl = y),
        (s.xxl = I),
        (s.smAndUp = !i),
        (s.mdAndUp = !(i || f)),
        (s.lgAndUp = !(i || f || d)),
        (s.xlAndUp = !(i || f || d || p)),
        (s.smAndDown = !(d || p || y || I)),
        (s.mdAndDown = !(p || y || I)),
        (s.lgAndDown = !(y || I)),
        (s.xlAndDown = !I),
        (s.name = R),
        (s.height = n.value),
        (s.width = l.value),
        (s.mobile = F),
        (s.mobileBreakpoint = a),
        (s.platform = o.value),
        (s.thresholds = r));
    }),
    ht && window.addEventListener("resize", c, { passive: !0 }),
    { ...s2(s), update: u, ssr: !!t }
  );
}
const Hw = k0(
  {
    mobile: { type: Boolean, default: !1 },
    mobileBreakpoint: [Number, String],
  },
  "display",
);
function Fw() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nm();
  const r = We(Pn);
  if (!r) throw new Error("Could not find Vuetify display injection");
  const a = me(() => {
      if (e.mobile != null) return e.mobile;
      if (!e.mobileBreakpoint) return r.mobile.value;
      const o =
        typeof e.mobileBreakpoint == "number"
          ? e.mobileBreakpoint
          : r.thresholds.value[e.mobileBreakpoint];
      return r.width.value < o;
    }),
    n = me(() => (t ? { [`${t}--mobile`]: a.value } : {}));
  return { ...r, displayClasses: n, mobile: a };
}
const U1 = Symbol.for("vuetify:goto");
function $1() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => (e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e),
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => (--e) ** 3 + 1,
      easeInOutCubic: (e) =>
        e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - (--e) ** 4,
      easeInOutQuart: (e) => (e < 0.5 ? 8 * e ** 4 : 1 - 8 * (--e) ** 4),
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + (--e) ** 5,
      easeInOutQuint: (e) => (e < 0.5 ? 16 * e ** 5 : 1 + 16 * (--e) ** 5),
    },
  };
}
function l9(e) {
  return x2(e) ?? (document.scrollingElement || document.body);
}
function x2(e) {
  return typeof e == "string" ? document.querySelector(e) : I1(e);
}
function sn(e, t, r) {
  if (typeof e == "number") return t && r ? -e : e;
  let a = x2(e),
    n = 0;
  for (; a; ) ((n += t ? a.offsetLeft : a.offsetTop), (a = a.offsetParent));
  return n;
}
function c9(e, t) {
  return { rtl: t.isRtl, options: ot($1(), e) };
}
async function Fo(e, t, r, a) {
  const n = r ? "scrollLeft" : "scrollTop",
    o = ot((a == null ? void 0 : a.options) ?? $1(), t),
    s = a == null ? void 0 : a.rtl.value,
    l = (typeof e == "number" ? e : x2(e)) ?? 0,
    c =
      o.container === "parent" && l instanceof HTMLElement
        ? l.parentElement
        : l9(o.container),
    u = typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!u) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let i;
  if (typeof l == "number") i = sn(l, r, s);
  else if (((i = sn(l, r, s) - sn(c, r, s)), o.layout)) {
    const y = window.getComputedStyle(l).getPropertyValue("--v-layout-top");
    y && (i -= parseInt(y, 10));
  }
  ((i += o.offset), (i = i9(c, i, !!s, !!r)));
  const f = c[n] ?? 0;
  if (i === f) return Promise.resolve(i);
  const d = performance.now();
  return new Promise((p) =>
    requestAnimationFrame(function y(I) {
      const O = (I - d) / o.duration,
        F = Math.floor(f + (i - f) * u(L1(O, 0, 1)));
      if (((c[n] = F), O >= 1 && Math.abs(F - c[n]) < 10)) return p(i);
      if (O > 2) return p(c[n]);
      requestAnimationFrame(y);
    }),
  );
}
function Nw() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = We(U1),
    { isRtl: r } = vm();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = { ...t, rtl: me(() => t.rtl.value || r.value) };
  async function n(o, s) {
    return Fo(o, ot(e, s), !1, a);
  }
  return ((n.horizontal = async (o, s) => Fo(o, ot(e, s), !0, a)), n);
}
function i9(e, t, r, a) {
  const { scrollWidth: n, scrollHeight: o } = e,
    [s, l] =
      e === document.scrollingElement
        ? [window.innerWidth, window.innerHeight]
        : [e.offsetWidth, e.offsetHeight];
  let c, u;
  return (
    a
      ? r
        ? ((c = -(n - s)), (u = 0))
        : ((c = 0), (u = n - s))
      : ((c = 0), (u = o + -l)),
    Math.max(Math.min(t, u), c)
  );
}
const j1 = {
    collapse: "mdi-chevron-up",
    complete: "mdi-check",
    cancel: "mdi-close-circle",
    close: "mdi-close",
    delete: "mdi-close-circle",
    clear: "mdi-close-circle",
    success: "mdi-check-circle",
    info: "mdi-information",
    warning: "mdi-alert-circle",
    error: "mdi-close-circle",
    prev: "mdi-chevron-left",
    next: "mdi-chevron-right",
    checkboxOn: "mdi-checkbox-marked",
    checkboxOff: "mdi-checkbox-blank-outline",
    checkboxIndeterminate: "mdi-minus-box",
    delimiter: "mdi-circle",
    sortAsc: "mdi-arrow-up",
    sortDesc: "mdi-arrow-down",
    expand: "mdi-chevron-down",
    menu: "mdi-menu",
    subgroup: "mdi-menu-down",
    dropdown: "mdi-menu-down",
    radioOn: "mdi-radiobox-marked",
    radioOff: "mdi-radiobox-blank",
    edit: "mdi-pencil",
    ratingEmpty: "mdi-star-outline",
    ratingFull: "mdi-star",
    ratingHalf: "mdi-star-half-full",
    loading: "mdi-cached",
    first: "mdi-page-first",
    last: "mdi-page-last",
    unfold: "mdi-unfold-more-horizontal",
    file: "mdi-paperclip",
    plus: "mdi-plus",
    minus: "mdi-minus",
    calendar: "mdi-calendar",
    treeviewCollapse: "mdi-menu-down",
    treeviewExpand: "mdi-menu-right",
    eyeDropper: "mdi-eyedropper",
  },
  W1 = { component: (e) => Zr(q1, { ...e, class: "mdi" }) },
  u9 = [String, Function, Object, Array],
  kn = Symbol.for("vuetify:icons"),
  R0 = k0({ icon: { type: u9 }, tag: { type: String, required: !0 } }, "icon"),
  No = im()({
    name: "VComponentIcon",
    props: R0(),
    setup(e, t) {
      let { slots: r } = t;
      return () => {
        const a = e.icon;
        return Oe(e.tag, null, {
          default: () => {
            var n;
            return [
              e.icon
                ? Oe(a, null, null)
                : (n = r.default) == null
                  ? void 0
                  : n.call(r),
            ];
          },
        });
      };
    },
  }),
  G1 = Oa({
    name: "VSvgIcon",
    inheritAttrs: !1,
    props: R0(),
    setup(e, t) {
      let { attrs: r } = t;
      return () =>
        Oe(e.tag, n1(r, { style: null }), {
          default: () => [
            Oe(
              "svg",
              {
                class: "v-icon__svg",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                role: "img",
                "aria-hidden": "true",
              },
              [
                Array.isArray(e.icon)
                  ? e.icon.map((a) =>
                      Array.isArray(a)
                        ? Oe("path", { d: a[0], "fill-opacity": a[1] }, null)
                        : Oe("path", { d: a }, null),
                    )
                  : Oe("path", { d: e.icon }, null),
              ],
            ),
          ],
        });
    },
  });
Oa({
  name: "VLigatureIcon",
  props: R0(),
  setup(e) {
    return () => Oe(e.tag, null, { default: () => [e.icon] });
  },
});
const q1 = Oa({
  name: "VClassIcon",
  props: R0(),
  setup(e) {
    return () => Oe(e.tag, { class: e.icon }, null);
  },
});
function f9() {
  return { svg: { component: G1 }, class: { component: q1 } };
}
function d9(e) {
  const t = f9(),
    r = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return (
    r === "mdi" && !t.mdi && (t.mdi = W1),
    ot(
      {
        defaultSet: r,
        sets: t,
        aliases: {
          ...j1,
          vuetify: [
            "M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",
            [
              "M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",
              0.6,
            ],
          ],
          "vuetify-outline":
            "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
          "vuetify-play": [
            "m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",
            [
              "M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",
              0.6,
            ],
          ],
        },
      },
      e,
    )
  );
}
const zw = (e) => {
    const t = We(kn);
    if (!t) throw new Error("Missing Vuetify Icons provide!");
    return {
      iconData: me(() => {
        var c;
        const a = Ct(e);
        if (!a) return { component: No };
        let n = a;
        if (
          (typeof n == "string" &&
            ((n = n.trim()),
            n.startsWith("$") &&
              (n = (c = t.aliases) == null ? void 0 : c[n.slice(1)])),
          Array.isArray(n))
        )
          return { component: G1, icon: n };
        if (typeof n != "string") return { component: No, icon: n };
        const o = Object.keys(t.sets).find(
            (u) => typeof n == "string" && n.startsWith(`${u}:`),
          ),
          s = o ? n.slice(o.length + 1) : n;
        return { component: t.sets[o ?? t.defaultSet].component, icon: s };
      }),
    };
  },
  _0 = Symbol.for("vuetify:theme"),
  Uw = k0({ theme: String }, "theme");
function zo() {
  return {
    defaultTheme: "light",
    variations: { colors: [], lighten: 0, darken: 0 },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000",
        },
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#a3a3a3",
          "on-surface-variant": "#424242",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC",
        },
      },
    },
  };
}
function _9() {
  var a, n;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zo();
  const t = zo();
  if (!e) return { ...t, isDisabled: !0 };
  const r = {};
  for (const [o, s] of Object.entries(e.themes ?? {})) {
    const l =
      s.dark || o === "dark"
        ? (a = t.themes) == null
          ? void 0
          : a.dark
        : (n = t.themes) == null
          ? void 0
          : n.light;
    r[o] = ot(l, s);
  }
  return ot(t, { ...e, themes: r });
}
function p9(e) {
  const t = _9(e),
    r = le(t.defaultTheme),
    a = le(t.themes),
    n = me(() => {
      const i = {};
      for (const [f, d] of Object.entries(a.value)) {
        const p = (i[f] = { ...d, colors: { ...d.colors } });
        if (t.variations)
          for (const y of t.variations.colors) {
            const I = p.colors[y];
            if (I)
              for (const R of ["lighten", "darken"]) {
                const O = R === "lighten" ? tm : rm;
                for (const F of M1(t.variations[R], 1))
                  p.colors[`${y}-${R}-${F}`] = E1(O(qt(I), F));
              }
          }
        for (const y of Object.keys(p.colors)) {
          if (/^on-[a-z]/.test(y) || p.colors[`on-${y}`]) continue;
          const I = `on-${y}`,
            R = qt(p.colors[y]);
          p.colors[I] = am(R);
        }
      }
      return i;
    }),
    o = me(() => n.value[r.value]),
    s = me(() => {
      var y;
      const i = [];
      ((y = o.value) != null &&
        y.dark &&
        xr(i, ":root", ["color-scheme: dark"]),
        xr(i, ":root", Uo(o.value)));
      for (const [I, R] of Object.entries(n.value))
        xr(i, `.v-theme--${I}`, [
          `color-scheme: ${R.dark ? "dark" : "normal"}`,
          ...Uo(R),
        ]);
      const f = [],
        d = [],
        p = new Set(
          Object.values(n.value).flatMap((I) => Object.keys(I.colors)),
        );
      for (const I of p)
        /^on-[a-z]/.test(I)
          ? xr(d, `.${I}`, [`color: rgb(var(--v-theme-${I})) !important`])
          : (xr(f, `.bg-${I}`, [
              `--v-theme-overlay-multiplier: var(--v-theme-${I}-overlay-multiplier)`,
              `background-color: rgb(var(--v-theme-${I})) !important`,
              `color: rgb(var(--v-theme-on-${I})) !important`,
            ]),
            xr(d, `.text-${I}`, [`color: rgb(var(--v-theme-${I})) !important`]),
            xr(d, `.border-${I}`, [`--v-border-color: var(--v-theme-${I})`]));
      return (
        i.push(...f, ...d),
        i.map((I, R) => (R === 0 ? I : `    ${I}`)).join("")
      );
    });
  function l() {
    return {
      style: [
        {
          children: s.value,
          id: "vuetify-theme-stylesheet",
          nonce: t.cspNonce || !1,
        },
      ],
    };
  }
  function c(i) {
    if (t.isDisabled) return;
    const f = i._context.provides.usehead;
    if (f)
      if (f.push) {
        const d = f.push(l);
        ht &&
          gt(s, () => {
            d.patch(l);
          });
      } else
        ht
          ? (f.addHeadObjs(me(l)), L0(() => f.updateDOM()))
          : f.addHeadObjs(l());
    else {
      let p = function () {
          if (typeof document < "u" && !d) {
            const y = document.createElement("style");
            ((y.type = "text/css"),
              (y.id = "vuetify-theme-stylesheet"),
              t.cspNonce && y.setAttribute("nonce", t.cspNonce),
              (d = y),
              document.head.appendChild(d));
          }
          d && (d.innerHTML = s.value);
        },
        d = ht ? document.getElementById("vuetify-theme-stylesheet") : null;
      ht ? gt(s, p, { immediate: !0 }) : p();
    }
  }
  const u = me(() => (t.isDisabled ? void 0 : `v-theme--${r.value}`));
  return {
    install: c,
    isDisabled: t.isDisabled,
    name: r,
    themes: a,
    current: o,
    computedThemes: n,
    themeClasses: u,
    styles: s,
    global: { name: r, current: o },
  };
}
function $w(e) {
  ea("provideTheme");
  const t = We(_0, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const r = me(() => e.theme ?? t.name.value),
    a = me(() => t.themes.value[r.value]),
    n = me(() => (t.isDisabled ? void 0 : `v-theme--${r.value}`)),
    o = { ...t, name: r, current: a, themeClasses: n };
  return (Ir(_0, o), o);
}
function xr(e, t, r) {
  e.push(
    `${t} {
`,
    ...r.map(
      (a) => `  ${a};
`,
    ),
    `}
`,
  );
}
function Uo(e) {
  const t = e.dark ? 2 : 1,
    r = e.dark ? 1 : 2,
    a = [];
  for (const [n, o] of Object.entries(e.colors)) {
    const s = qt(o);
    (a.push(`--v-theme-${n}: ${s.r},${s.g},${s.b}`),
      n.startsWith("on-") ||
        a.push(`--v-theme-${n}-overlay-multiplier: ${An(o) > 0.18 ? t : r}`));
  }
  for (const [n, o] of Object.entries(e.variables)) {
    const s = typeof o == "string" && o.startsWith("#") ? qt(o) : void 0,
      l = s ? `${s.r}, ${s.g}, ${s.b}` : void 0;
    a.push(`--v-${n}: ${l ?? o}`);
  }
  return a;
}
function Y1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const { blueprint: t, ...r } = e,
    a = ot(t, r),
    { aliases: n = {}, components: o = {}, directives: s = {} } = a,
    l = sm(a.defaults),
    c = s9(a.display, a.ssr),
    u = p9(a.theme),
    i = d9(a.icons),
    f = pm(a.locale),
    d = a9(a.date, f),
    p = c9(a.goTo, f);
  return {
    install: (I) => {
      for (const R in s) I.directive(R, s[R]);
      for (const R in o) I.component(R, o[R]);
      for (const R in n)
        I.component(R, Oa({ ...n[R], name: R, aliasName: n[R].name }));
      if (
        (u.install(I),
        I.provide(Gr, l),
        I.provide(Pn, c),
        I.provide(_0, u),
        I.provide(kn, i),
        I.provide(f0, f),
        I.provide(r9, d.options),
        I.provide(Oo, d.instance),
        I.provide(U1, p),
        ht && a.ssr)
      )
        if (I.$nuxt)
          I.$nuxt.hook("app:suspense:resolve", () => {
            c.update();
          });
        else {
          const { mount: R } = I;
          I.mount = function () {
            const O = R(...arguments);
            return (M0(() => c.update()), (I.mount = R), O);
          };
        }
      (V1.reset(),
        I.mixin({
          computed: {
            $vuetify() {
              return Kt({
                defaults: Or.call(this, Gr),
                display: Or.call(this, Pn),
                theme: Or.call(this, _0),
                icons: Or.call(this, kn),
                locale: Or.call(this, f0),
                date: Or.call(this, Oo),
              });
            },
          },
        }));
    },
    defaults: l,
    display: c,
    theme: u,
    icons: i,
    locale: f,
    date: d,
    goTo: p,
  };
}
const h9 = "3.6.13";
Y1.version = h9;
function Or(e) {
  var a, n;
  const t = this.$,
    r =
      ((a = t.parent) == null ? void 0 : a.provides) ??
      ((n = t.vnode.appContext) == null ? void 0 : n.provides);
  if (r && e in r) return r[e];
}
const g9 = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [a, n] of t) r[a] = n;
    return r;
  },
  v9 = Object.assign(
    { name: "App" },
    {
      __name: "App",
      setup(e) {
        return (t, r) => {
          const a = tu("router-view");
          return (v(), s0(a));
        };
      },
    },
  ),
  m9 = g9(v9, [["__scopeId", "data-v-ef4b4458"]]);
/*!
 * shared v9.14.0
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */ const p0 = typeof window < "u",
  pr = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  x9 = (e, t, r) => y9({ l: e, k: t, s: r }),
  y9 = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029")
      .replace(/\u0027/g, "\\u0027"),
  $e = (e) => typeof e == "number" && isFinite(e),
  w9 = (e) => X1(e) === "[object Date]",
  ur = (e) => X1(e) === "[object RegExp]",
  O0 = (e) => ge(e) && Object.keys(e).length === 0,
  et = Object.assign;
let $o;
const Gt = () =>
  $o ||
  ($o =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function jo(e) {
  return e
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
const C9 = Object.prototype.hasOwnProperty;
function h0(e, t) {
  return C9.call(e, t);
}
const Ve = Array.isArray,
  Ee = (e) => typeof e == "function",
  ne = (e) => typeof e == "string",
  ye = (e) => typeof e == "boolean",
  Le = (e) => e !== null && typeof e == "object",
  b9 = (e) => Le(e) && Ee(e.then) && Ee(e.catch),
  Q1 = Object.prototype.toString,
  X1 = (e) => Q1.call(e),
  ge = (e) => {
    if (!Le(e)) return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object;
  },
  T9 = (e) =>
    e == null
      ? ""
      : Ve(e) || (ge(e) && e.toString === Q1)
        ? JSON.stringify(e, null, 2)
        : String(e);
function M9(e, t = "") {
  return e.reduce((r, a, n) => (n === 0 ? r + a : r + t + a), "");
}
function V0(e) {
  let t = e;
  return () => ++t;
}
function I9(e, t) {
  typeof console < "u" &&
    (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Wa = (e) => !Le(e) || Ve(e);
function Za(e, t) {
  if (Wa(e) || Wa(t)) throw new Error("Invalid value");
  const r = [{ src: e, des: t }];
  for (; r.length; ) {
    const { src: a, des: n } = r.pop();
    Object.keys(a).forEach((o) => {
      Wa(a[o]) || Wa(n[o]) ? (n[o] = a[o]) : r.push({ src: a[o], des: n[o] });
    });
  }
}
/*!
 * message-compiler v9.14.0
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */ function S9(e, t, r) {
  return { line: e, column: t, offset: r };
}
function g0(e, t, r) {
  return { start: e, end: t };
}
const L9 = /\{([0-9a-zA-Z]+)\}/g;
function J1(e, ...t) {
  return (
    t.length === 1 && A9(t[0]) && (t = t[0]),
    (!t || !t.hasOwnProperty) && (t = {}),
    e.replace(L9, (r, a) => (t.hasOwnProperty(a) ? t[a] : ""))
  );
}
const Z1 = Object.assign,
  Wo = (e) => typeof e == "string",
  A9 = (e) => e !== null && typeof e == "object";
function ec(e, t = "") {
  return e.reduce((r, a, n) => (n === 0 ? r + a : r + t + a), "");
}
const y2 = { USE_MODULO_SYNTAX: 1, __EXTEND_POINT__: 2 },
  D9 = { [y2.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'." };
function P9(e, t, ...r) {
  const a = J1(D9[e], ...(r || [])),
    n = { message: String(a), code: e };
  return (t && (n.location = t), n);
}
const pe = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17,
  },
  k9 = {
    [pe.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [pe.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [pe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:
      "Unterminated single quote in placeholder",
    [pe.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [pe.INVALID_UNICODE_ESCAPE_SEQUENCE]:
      "Invalid unicode escape sequence: {0}",
    [pe.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [pe.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [pe.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [pe.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [pe.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [pe.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [pe.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [pe.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [pe.UNEXPECTED_LEXICAL_ANALYSIS]:
      "Unexpected lexical analysis in token: '{0}'",
    [pe.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
    [pe.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'",
  };
function ta(e, t, r = {}) {
  const { domain: a, messages: n, args: o } = r,
    s = J1((n || k9)[e] || "", ...(o || [])),
    l = new SyntaxError(String(s));
  return ((l.code = e), t && (l.location = t), (l.domain = a), l);
}
function E9(e) {
  throw e;
}
const Nt = " ",
  R9 = "\r",
  it = `
`,
  O9 = "\u2028",
  V9 = "\u2029";
function B9(e) {
  const t = e;
  let r = 0,
    a = 1,
    n = 1,
    o = 0;
  const s = (z) => t[z] === R9 && t[z + 1] === it,
    l = (z) => t[z] === it,
    c = (z) => t[z] === V9,
    u = (z) => t[z] === O9,
    i = (z) => s(z) || l(z) || c(z) || u(z),
    f = () => r,
    d = () => a,
    p = () => n,
    y = () => o,
    I = (z) => (s(z) || c(z) || u(z) ? it : t[z]),
    R = () => I(r),
    O = () => I(r + o);
  function F() {
    return ((o = 0), i(r) && (a++, (n = 0)), s(r) && r++, r++, n++, t[r]);
  }
  function L() {
    return (s(r + o) && o++, o++, t[r + o]);
  }
  function A() {
    ((r = 0), (a = 1), (n = 1), (o = 0));
  }
  function B(z = 0) {
    o = z;
  }
  function K() {
    const z = r + o;
    for (; z !== r; ) F();
    o = 0;
  }
  return {
    index: f,
    line: d,
    column: p,
    peekOffset: y,
    charAt: I,
    currentChar: R,
    currentPeek: O,
    next: F,
    peek: L,
    reset: A,
    resetPeek: B,
    skipToPeek: K,
  };
}
const er = void 0,
  K9 = ".",
  Go = "'",
  H9 = "tokenizer";
function F9(e, t = {}) {
  const r = t.location !== !1,
    a = B9(e),
    n = () => a.index(),
    o = () => S9(a.line(), a.column(), a.index()),
    s = o(),
    l = n(),
    c = {
      currentType: 14,
      offset: l,
      startLoc: s,
      endLoc: s,
      lastType: 14,
      lastOffset: l,
      lastStartLoc: s,
      lastEndLoc: s,
      braceNest: 0,
      inLinked: !1,
      text: "",
    },
    u = () => c,
    { onError: i } = t;
  function f(h, x, E, ...H) {
    const re = u();
    if (((x.column += E), (x.offset += E), i)) {
      const Y = r ? g0(re.startLoc, x) : null,
        P = ta(h, Y, { domain: H9, args: H });
      i(P);
    }
  }
  function d(h, x, E) {
    ((h.endLoc = o()), (h.currentType = x));
    const H = { type: x };
    return (
      r && (H.loc = g0(h.startLoc, h.endLoc)),
      E != null && (H.value = E),
      H
    );
  }
  const p = (h) => d(h, 14);
  function y(h, x) {
    return h.currentChar() === x
      ? (h.next(), x)
      : (f(pe.EXPECTED_TOKEN, o(), 0, x), "");
  }
  function I(h) {
    let x = "";
    for (; h.currentPeek() === Nt || h.currentPeek() === it; )
      ((x += h.currentPeek()), h.peek());
    return x;
  }
  function R(h) {
    const x = I(h);
    return (h.skipToPeek(), x);
  }
  function O(h) {
    if (h === er) return !1;
    const x = h.charCodeAt(0);
    return (x >= 97 && x <= 122) || (x >= 65 && x <= 90) || x === 95;
  }
  function F(h) {
    if (h === er) return !1;
    const x = h.charCodeAt(0);
    return x >= 48 && x <= 57;
  }
  function L(h, x) {
    const { currentType: E } = x;
    if (E !== 2) return !1;
    I(h);
    const H = O(h.currentPeek());
    return (h.resetPeek(), H);
  }
  function A(h, x) {
    const { currentType: E } = x;
    if (E !== 2) return !1;
    I(h);
    const H = h.currentPeek() === "-" ? h.peek() : h.currentPeek(),
      re = F(H);
    return (h.resetPeek(), re);
  }
  function B(h, x) {
    const { currentType: E } = x;
    if (E !== 2) return !1;
    I(h);
    const H = h.currentPeek() === Go;
    return (h.resetPeek(), H);
  }
  function K(h, x) {
    const { currentType: E } = x;
    if (E !== 8) return !1;
    I(h);
    const H = h.currentPeek() === ".";
    return (h.resetPeek(), H);
  }
  function z(h, x) {
    const { currentType: E } = x;
    if (E !== 9) return !1;
    I(h);
    const H = O(h.currentPeek());
    return (h.resetPeek(), H);
  }
  function j(h, x) {
    const { currentType: E } = x;
    if (!(E === 8 || E === 12)) return !1;
    I(h);
    const H = h.currentPeek() === ":";
    return (h.resetPeek(), H);
  }
  function k(h, x) {
    const { currentType: E } = x;
    if (E !== 10) return !1;
    const H = () => {
        const Y = h.currentPeek();
        return Y === "{"
          ? O(h.peek())
          : Y === "@" ||
              Y === "%" ||
              Y === "|" ||
              Y === ":" ||
              Y === "." ||
              Y === Nt ||
              !Y
            ? !1
            : Y === it
              ? (h.peek(), H())
              : q(h, !1);
      },
      re = H();
    return (h.resetPeek(), re);
  }
  function te(h) {
    I(h);
    const x = h.currentPeek() === "|";
    return (h.resetPeek(), x);
  }
  function ue(h) {
    const x = I(h),
      E = h.currentPeek() === "%" && h.peek() === "{";
    return (h.resetPeek(), { isModulo: E, hasSpace: x.length > 0 });
  }
  function q(h, x = !0) {
    const E = (re = !1, Y = "", P = !1) => {
        const N = h.currentPeek();
        return N === "{"
          ? Y === "%"
            ? !1
            : re
          : N === "@" || !N
            ? Y === "%"
              ? !0
              : re
            : N === "%"
              ? (h.peek(), E(re, "%", !0))
              : N === "|"
                ? Y === "%" || P
                  ? !0
                  : !(Y === Nt || Y === it)
                : N === Nt
                  ? (h.peek(), E(!0, Nt, P))
                  : N === it
                    ? (h.peek(), E(!0, it, P))
                    : !0;
      },
      H = E();
    return (x && h.resetPeek(), H);
  }
  function ie(h, x) {
    const E = h.currentChar();
    return E === er ? er : x(E) ? (h.next(), E) : null;
  }
  function Ae(h) {
    const x = h.charCodeAt(0);
    return (
      (x >= 97 && x <= 122) ||
      (x >= 65 && x <= 90) ||
      (x >= 48 && x <= 57) ||
      x === 95 ||
      x === 36
    );
  }
  function Fe(h) {
    return ie(h, Ae);
  }
  function S(h) {
    const x = h.charCodeAt(0);
    return (
      (x >= 97 && x <= 122) ||
      (x >= 65 && x <= 90) ||
      (x >= 48 && x <= 57) ||
      x === 95 ||
      x === 36 ||
      x === 45
    );
  }
  function _e(h) {
    return ie(h, S);
  }
  function xe(h) {
    const x = h.charCodeAt(0);
    return x >= 48 && x <= 57;
  }
  function Je(h) {
    return ie(h, xe);
  }
  function tt(h) {
    const x = h.charCodeAt(0);
    return (
      (x >= 48 && x <= 57) || (x >= 65 && x <= 70) || (x >= 97 && x <= 102)
    );
  }
  function Be(h) {
    return ie(h, tt);
  }
  function Ke(h) {
    let x = "",
      E = "";
    for (; (x = Je(h)); ) E += x;
    return E;
  }
  function _t(h) {
    R(h);
    const x = h.currentChar();
    return (x !== "%" && f(pe.EXPECTED_TOKEN, o(), 0, x), h.next(), "%");
  }
  function st(h) {
    let x = "";
    for (;;) {
      const E = h.currentChar();
      if (E === "{" || E === "}" || E === "@" || E === "|" || !E) break;
      if (E === "%")
        if (q(h)) ((x += E), h.next());
        else break;
      else if (E === Nt || E === it)
        if (q(h)) ((x += E), h.next());
        else {
          if (te(h)) break;
          ((x += E), h.next());
        }
      else ((x += E), h.next());
    }
    return x;
  }
  function mt(h) {
    R(h);
    let x = "",
      E = "";
    for (; (x = _e(h)); ) E += x;
    return (
      h.currentChar() === er && f(pe.UNTERMINATED_CLOSING_BRACE, o(), 0),
      E
    );
  }
  function ze(h) {
    R(h);
    let x = "";
    return (
      h.currentChar() === "-" ? (h.next(), (x += `-${Ke(h)}`)) : (x += Ke(h)),
      h.currentChar() === er && f(pe.UNTERMINATED_CLOSING_BRACE, o(), 0),
      x
    );
  }
  function U(h) {
    return h !== Go && h !== it;
  }
  function ae(h) {
    (R(h), y(h, "'"));
    let x = "",
      E = "";
    for (; (x = ie(h, U)); ) x === "\\" ? (E += ee(h)) : (E += x);
    const H = h.currentChar();
    return H === it || H === er
      ? (f(pe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        H === it && (h.next(), y(h, "'")),
        E)
      : (y(h, "'"), E);
  }
  function ee(h) {
    const x = h.currentChar();
    switch (x) {
      case "\\":
      case "'":
        return (h.next(), `\\${x}`);
      case "u":
        return oe(h, x, 4);
      case "U":
        return oe(h, x, 6);
      default:
        return (f(pe.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, x), "");
    }
  }
  function oe(h, x, E) {
    y(h, x);
    let H = "";
    for (let re = 0; re < E; re++) {
      const Y = Be(h);
      if (!Y) {
        f(
          pe.INVALID_UNICODE_ESCAPE_SEQUENCE,
          o(),
          0,
          `\\${x}${H}${h.currentChar()}`,
        );
        break;
      }
      H += Y;
    }
    return `\\${x}${H}`;
  }
  function be(h) {
    return h !== "{" && h !== "}" && h !== Nt && h !== it;
  }
  function C(h) {
    R(h);
    let x = "",
      E = "";
    for (; (x = ie(h, be)); ) E += x;
    return E;
  }
  function T(h) {
    let x = "",
      E = "";
    for (; (x = Fe(h)); ) E += x;
    return E;
  }
  function w(h) {
    const x = (E) => {
      const H = h.currentChar();
      return H === "{" ||
        H === "%" ||
        H === "@" ||
        H === "|" ||
        H === "(" ||
        H === ")" ||
        !H ||
        H === Nt
        ? E
        : ((E += H), h.next(), x(E));
    };
    return x("");
  }
  function V(h) {
    R(h);
    const x = y(h, "|");
    return (R(h), x);
  }
  function W(h, x) {
    let E = null;
    switch (h.currentChar()) {
      case "{":
        return (
          x.braceNest >= 1 && f(pe.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
          h.next(),
          (E = d(x, 2, "{")),
          R(h),
          x.braceNest++,
          E
        );
      case "}":
        return (
          x.braceNest > 0 &&
            x.currentType === 2 &&
            f(pe.EMPTY_PLACEHOLDER, o(), 0),
          h.next(),
          (E = d(x, 3, "}")),
          x.braceNest--,
          x.braceNest > 0 && R(h),
          x.inLinked && x.braceNest === 0 && (x.inLinked = !1),
          E
        );
      case "@":
        return (
          x.braceNest > 0 && f(pe.UNTERMINATED_CLOSING_BRACE, o(), 0),
          (E = $(h, x) || p(x)),
          (x.braceNest = 0),
          E
        );
      default: {
        let re = !0,
          Y = !0,
          P = !0;
        if (te(h))
          return (
            x.braceNest > 0 && f(pe.UNTERMINATED_CLOSING_BRACE, o(), 0),
            (E = d(x, 1, V(h))),
            (x.braceNest = 0),
            (x.inLinked = !1),
            E
          );
        if (
          x.braceNest > 0 &&
          (x.currentType === 5 || x.currentType === 6 || x.currentType === 7)
        )
          return (
            f(pe.UNTERMINATED_CLOSING_BRACE, o(), 0),
            (x.braceNest = 0),
            Z(h, x)
          );
        if ((re = L(h, x))) return ((E = d(x, 5, mt(h))), R(h), E);
        if ((Y = A(h, x))) return ((E = d(x, 6, ze(h))), R(h), E);
        if ((P = B(h, x))) return ((E = d(x, 7, ae(h))), R(h), E);
        if (!re && !Y && !P)
          return (
            (E = d(x, 13, C(h))),
            f(pe.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, E.value),
            R(h),
            E
          );
        break;
      }
    }
    return E;
  }
  function $(h, x) {
    const { currentType: E } = x;
    let H = null;
    const re = h.currentChar();
    switch (
      ((E === 8 || E === 9 || E === 12 || E === 10) &&
        (re === it || re === Nt) &&
        f(pe.INVALID_LINKED_FORMAT, o(), 0),
      re)
    ) {
      case "@":
        return (h.next(), (H = d(x, 8, "@")), (x.inLinked = !0), H);
      case ".":
        return (R(h), h.next(), d(x, 9, "."));
      case ":":
        return (R(h), h.next(), d(x, 10, ":"));
      default:
        return te(h)
          ? ((H = d(x, 1, V(h))), (x.braceNest = 0), (x.inLinked = !1), H)
          : K(h, x) || j(h, x)
            ? (R(h), $(h, x))
            : z(h, x)
              ? (R(h), d(x, 12, T(h)))
              : k(h, x)
                ? (R(h), re === "{" ? W(h, x) || H : d(x, 11, w(h)))
                : (E === 8 && f(pe.INVALID_LINKED_FORMAT, o(), 0),
                  (x.braceNest = 0),
                  (x.inLinked = !1),
                  Z(h, x));
    }
  }
  function Z(h, x) {
    let E = { type: 14 };
    if (x.braceNest > 0) return W(h, x) || p(x);
    if (x.inLinked) return $(h, x) || p(x);
    switch (h.currentChar()) {
      case "{":
        return W(h, x) || p(x);
      case "}":
        return (f(pe.UNBALANCED_CLOSING_BRACE, o(), 0), h.next(), d(x, 3, "}"));
      case "@":
        return $(h, x) || p(x);
      default: {
        if (te(h))
          return ((E = d(x, 1, V(h))), (x.braceNest = 0), (x.inLinked = !1), E);
        const { isModulo: re, hasSpace: Y } = ue(h);
        if (re) return Y ? d(x, 0, st(h)) : d(x, 4, _t(h));
        if (q(h)) return d(x, 0, st(h));
        break;
      }
    }
    return E;
  }
  function X() {
    const { currentType: h, offset: x, startLoc: E, endLoc: H } = c;
    return (
      (c.lastType = h),
      (c.lastOffset = x),
      (c.lastStartLoc = E),
      (c.lastEndLoc = H),
      (c.offset = n()),
      (c.startLoc = o()),
      a.currentChar() === er ? d(c, 14) : Z(a, c)
    );
  }
  return { nextToken: X, currentOffset: n, currentPosition: o, context: u };
}
const N9 = "parser",
  z9 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function U9(e, t, r) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const a = parseInt(t || r, 16);
      return a <= 55295 || a >= 57344 ? String.fromCodePoint(a) : "�";
    }
  }
}
function $9(e = {}) {
  const t = e.location !== !1,
    { onError: r, onWarn: a } = e;
  function n(L, A, B, K, ...z) {
    const j = L.currentPosition();
    if (((j.offset += K), (j.column += K), r)) {
      const k = t ? g0(B, j) : null,
        te = ta(A, k, { domain: N9, args: z });
      r(te);
    }
  }
  function o(L, A, B, K, ...z) {
    const j = L.currentPosition();
    if (((j.offset += K), (j.column += K), a)) {
      const k = t ? g0(B, j) : null;
      a(P9(A, k, z));
    }
  }
  function s(L, A, B) {
    const K = { type: L };
    return (
      t && ((K.start = A), (K.end = A), (K.loc = { start: B, end: B })),
      K
    );
  }
  function l(L, A, B, K) {
    t && ((L.end = A), L.loc && (L.loc.end = B));
  }
  function c(L, A) {
    const B = L.context(),
      K = s(3, B.offset, B.startLoc);
    return ((K.value = A), l(K, L.currentOffset(), L.currentPosition()), K);
  }
  function u(L, A) {
    const B = L.context(),
      { lastOffset: K, lastStartLoc: z } = B,
      j = s(5, K, z);
    return (
      (j.index = parseInt(A, 10)),
      L.nextToken(),
      l(j, L.currentOffset(), L.currentPosition()),
      j
    );
  }
  function i(L, A, B) {
    const K = L.context(),
      { lastOffset: z, lastStartLoc: j } = K,
      k = s(4, z, j);
    return (
      (k.key = A),
      B === !0 && (k.modulo = !0),
      L.nextToken(),
      l(k, L.currentOffset(), L.currentPosition()),
      k
    );
  }
  function f(L, A) {
    const B = L.context(),
      { lastOffset: K, lastStartLoc: z } = B,
      j = s(9, K, z);
    return (
      (j.value = A.replace(z9, U9)),
      L.nextToken(),
      l(j, L.currentOffset(), L.currentPosition()),
      j
    );
  }
  function d(L) {
    const A = L.nextToken(),
      B = L.context(),
      { lastOffset: K, lastStartLoc: z } = B,
      j = s(8, K, z);
    return A.type !== 12
      ? (n(L, pe.UNEXPECTED_EMPTY_LINKED_MODIFIER, B.lastStartLoc, 0),
        (j.value = ""),
        l(j, K, z),
        { nextConsumeToken: A, node: j })
      : (A.value == null &&
          n(L, pe.UNEXPECTED_LEXICAL_ANALYSIS, B.lastStartLoc, 0, Mt(A)),
        (j.value = A.value || ""),
        l(j, L.currentOffset(), L.currentPosition()),
        { node: j });
  }
  function p(L, A) {
    const B = L.context(),
      K = s(7, B.offset, B.startLoc);
    return ((K.value = A), l(K, L.currentOffset(), L.currentPosition()), K);
  }
  function y(L) {
    const A = L.context(),
      B = s(6, A.offset, A.startLoc);
    let K = L.nextToken();
    if (K.type === 9) {
      const z = d(L);
      ((B.modifier = z.node), (K = z.nextConsumeToken || L.nextToken()));
    }
    switch (
      (K.type !== 10 &&
        n(L, pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Mt(K)),
      (K = L.nextToken()),
      K.type === 2 && (K = L.nextToken()),
      K.type)
    ) {
      case 11:
        (K.value == null &&
          n(L, pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Mt(K)),
          (B.key = p(L, K.value || "")));
        break;
      case 5:
        (K.value == null &&
          n(L, pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Mt(K)),
          (B.key = i(L, K.value || "")));
        break;
      case 6:
        (K.value == null &&
          n(L, pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Mt(K)),
          (B.key = u(L, K.value || "")));
        break;
      case 7:
        (K.value == null &&
          n(L, pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Mt(K)),
          (B.key = f(L, K.value || "")));
        break;
      default: {
        n(L, pe.UNEXPECTED_EMPTY_LINKED_KEY, A.lastStartLoc, 0);
        const z = L.context(),
          j = s(7, z.offset, z.startLoc);
        return (
          (j.value = ""),
          l(j, z.offset, z.startLoc),
          (B.key = j),
          l(B, z.offset, z.startLoc),
          { nextConsumeToken: K, node: B }
        );
      }
    }
    return (l(B, L.currentOffset(), L.currentPosition()), { node: B });
  }
  function I(L) {
    const A = L.context(),
      B = A.currentType === 1 ? L.currentOffset() : A.offset,
      K = A.currentType === 1 ? A.endLoc : A.startLoc,
      z = s(2, B, K);
    z.items = [];
    let j = null,
      k = null;
    do {
      const q = j || L.nextToken();
      switch (((j = null), q.type)) {
        case 0:
          (q.value == null &&
            n(L, pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Mt(q)),
            z.items.push(c(L, q.value || "")));
          break;
        case 6:
          (q.value == null &&
            n(L, pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Mt(q)),
            z.items.push(u(L, q.value || "")));
          break;
        case 4:
          k = !0;
          break;
        case 5:
          (q.value == null &&
            n(L, pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Mt(q)),
            z.items.push(i(L, q.value || "", !!k)),
            k &&
              (o(L, y2.USE_MODULO_SYNTAX, A.lastStartLoc, 0, Mt(q)),
              (k = null)));
          break;
        case 7:
          (q.value == null &&
            n(L, pe.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, Mt(q)),
            z.items.push(f(L, q.value || "")));
          break;
        case 8: {
          const ie = y(L);
          (z.items.push(ie.node), (j = ie.nextConsumeToken || null));
          break;
        }
      }
    } while (A.currentType !== 14 && A.currentType !== 1);
    const te = A.currentType === 1 ? A.lastOffset : L.currentOffset(),
      ue = A.currentType === 1 ? A.lastEndLoc : L.currentPosition();
    return (l(z, te, ue), z);
  }
  function R(L, A, B, K) {
    const z = L.context();
    let j = K.items.length === 0;
    const k = s(1, A, B);
    ((k.cases = []), k.cases.push(K));
    do {
      const te = I(L);
      (j || (j = te.items.length === 0), k.cases.push(te));
    } while (z.currentType !== 14);
    return (
      j && n(L, pe.MUST_HAVE_MESSAGES_IN_PLURAL, B, 0),
      l(k, L.currentOffset(), L.currentPosition()),
      k
    );
  }
  function O(L) {
    const A = L.context(),
      { offset: B, startLoc: K } = A,
      z = I(L);
    return A.currentType === 14 ? z : R(L, B, K, z);
  }
  function F(L) {
    const A = F9(L, Z1({}, e)),
      B = A.context(),
      K = s(0, B.offset, B.startLoc);
    return (
      t && K.loc && (K.loc.source = L),
      (K.body = O(A)),
      e.onCacheKey && (K.cacheKey = e.onCacheKey(L)),
      B.currentType !== 14 &&
        n(
          A,
          pe.UNEXPECTED_LEXICAL_ANALYSIS,
          B.lastStartLoc,
          0,
          L[B.offset] || "",
        ),
      l(K, A.currentOffset(), A.currentPosition()),
      K
    );
  }
  return { parse: F };
}
function Mt(e) {
  if (e.type === 14) return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function j9(e, t = {}) {
  const r = { ast: e, helpers: new Set() };
  return { context: () => r, helper: (o) => (r.helpers.add(o), o) };
}
function qo(e, t) {
  for (let r = 0; r < e.length; r++) w2(e[r], t);
}
function w2(e, t) {
  switch (e.type) {
    case 1:
      (qo(e.cases, t), t.helper("plural"));
      break;
    case 2:
      qo(e.items, t);
      break;
    case 6: {
      (w2(e.key, t), t.helper("linked"), t.helper("type"));
      break;
    }
    case 5:
      (t.helper("interpolate"), t.helper("list"));
      break;
    case 4:
      (t.helper("interpolate"), t.helper("named"));
      break;
  }
}
function W9(e, t = {}) {
  const r = j9(e);
  (r.helper("normalize"), e.body && w2(e.body, r));
  const a = r.context();
  e.helpers = Array.from(a.helpers);
}
function G9(e) {
  const t = e.body;
  return (t.type === 2 ? Yo(t) : t.cases.forEach((r) => Yo(r)), e);
}
function Yo(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && ((e.static = t.value), delete t.value);
  } else {
    const t = [];
    for (let r = 0; r < e.items.length; r++) {
      const a = e.items[r];
      if (!(a.type === 3 || a.type === 9) || a.value == null) break;
      t.push(a.value);
    }
    if (t.length === e.items.length) {
      e.static = ec(t);
      for (let r = 0; r < e.items.length; r++) {
        const a = e.items[r];
        (a.type === 3 || a.type === 9) && delete a.value;
      }
    }
  }
}
const q9 = "minifier";
function Br(e) {
  switch (((e.t = e.type), e.type)) {
    case 0: {
      const t = e;
      (Br(t.body), (t.b = t.body), delete t.body);
      break;
    }
    case 1: {
      const t = e,
        r = t.cases;
      for (let a = 0; a < r.length; a++) Br(r[a]);
      ((t.c = r), delete t.cases);
      break;
    }
    case 2: {
      const t = e,
        r = t.items;
      for (let a = 0; a < r.length; a++) Br(r[a]);
      ((t.i = r),
        delete t.items,
        t.static && ((t.s = t.static), delete t.static));
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && ((t.v = t.value), delete t.value);
      break;
    }
    case 6: {
      const t = e;
      (Br(t.key),
        (t.k = t.key),
        delete t.key,
        t.modifier && (Br(t.modifier), (t.m = t.modifier), delete t.modifier));
      break;
    }
    case 5: {
      const t = e;
      ((t.i = t.index), delete t.index);
      break;
    }
    case 4: {
      const t = e;
      ((t.k = t.key), delete t.key);
      break;
    }
    default:
      throw ta(pe.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: q9,
        args: [e.type],
      });
  }
  delete e.type;
}
const Y9 = "parser";
function Q9(e, t) {
  const { filename: r, breakLineCode: a, needIndent: n } = t,
    o = t.location !== !1,
    s = {
      filename: r,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: a,
      needIndent: n,
      indentLevel: 0,
    };
  o && e.loc && (s.source = e.loc.source);
  const l = () => s;
  function c(I, R) {
    s.code += I;
  }
  function u(I, R = !0) {
    const O = R ? a : "";
    c(n ? O + "  ".repeat(I) : O);
  }
  function i(I = !0) {
    const R = ++s.indentLevel;
    I && u(R);
  }
  function f(I = !0) {
    const R = --s.indentLevel;
    I && u(R);
  }
  function d() {
    u(s.indentLevel);
  }
  return {
    context: l,
    push: c,
    indent: i,
    deindent: f,
    newline: d,
    helper: (I) => `_${I}`,
    needIndent: () => s.needIndent,
  };
}
function X9(e, t) {
  const { helper: r } = e;
  (e.push(`${r("linked")}(`),
    qr(e, t.key),
    t.modifier
      ? (e.push(", "), qr(e, t.modifier), e.push(", _type"))
      : e.push(", undefined, _type"),
    e.push(")"));
}
function J9(e, t) {
  const { helper: r, needIndent: a } = e;
  (e.push(`${r("normalize")}([`), e.indent(a()));
  const n = t.items.length;
  for (let o = 0; o < n && (qr(e, t.items[o]), o !== n - 1); o++) e.push(", ");
  (e.deindent(a()), e.push("])"));
}
function Z9(e, t) {
  const { helper: r, needIndent: a } = e;
  if (t.cases.length > 1) {
    (e.push(`${r("plural")}([`), e.indent(a()));
    const n = t.cases.length;
    for (let o = 0; o < n && (qr(e, t.cases[o]), o !== n - 1); o++)
      e.push(", ");
    (e.deindent(a()), e.push("])"));
  }
}
function e7(e, t) {
  t.body ? qr(e, t.body) : e.push("null");
}
function qr(e, t) {
  const { helper: r } = e;
  switch (t.type) {
    case 0:
      e7(e, t);
      break;
    case 1:
      Z9(e, t);
      break;
    case 2:
      J9(e, t);
      break;
    case 6:
      X9(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${r("interpolate")}(${r("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${r("interpolate")}(${r("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      throw ta(pe.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Y9,
        args: [t.type],
      });
  }
}
const t7 = (e, t = {}) => {
  const r = Wo(t.mode) ? t.mode : "normal",
    a = Wo(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const n =
      t.breakLineCode != null
        ? t.breakLineCode
        : r === "arrow"
          ? ";"
          : `
`,
    o = t.needIndent ? t.needIndent : r !== "arrow",
    s = e.helpers || [],
    l = Q9(e, { filename: a, breakLineCode: n, needIndent: o });
  (l.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(o),
    s.length > 0 &&
      (l.push(
        `const { ${ec(
          s.map((i) => `${i}: _${i}`),
          ", ",
        )} } = ctx`,
      ),
      l.newline()),
    l.push("return "),
    qr(l, e),
    l.deindent(o),
    l.push("}"),
    delete e.helpers);
  const { code: c, map: u } = l.context();
  return { ast: e, code: c, map: u ? u.toJSON() : void 0 };
};
function r7(e, t = {}) {
  const r = Z1({}, t),
    a = !!r.jit,
    n = !!r.minify,
    o = r.optimize == null ? !0 : r.optimize,
    l = $9(r).parse(e);
  return a
    ? (o && G9(l), n && Br(l), { ast: l, code: "" })
    : (W9(l, r), t7(l, r));
}
/*!
 * core-base v9.14.0
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */ function a7() {
  (typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
    (Gt().__INTLIFY_PROD_DEVTOOLS__ = !1),
    typeof __INTLIFY_JIT_COMPILATION__ != "boolean" &&
      (Gt().__INTLIFY_JIT_COMPILATION__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" &&
      (Gt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1));
}
const hr = [];
hr[0] = { w: [0], i: [3, 0], "[": [4], o: [7] };
hr[1] = { w: [1], ".": [2], "[": [4], o: [7] };
hr[2] = { w: [2], i: [3, 0], 0: [3, 0] };
hr[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1],
};
hr[4] = { "'": [5, 0], '"': [6, 0], "[": [4, 2], "]": [1, 3], o: 8, l: [4, 0] };
hr[5] = { "'": [4, 0], o: 8, l: [5, 0] };
hr[6] = { '"': [4, 0], o: 8, l: [6, 0] };
const n7 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function o7(e) {
  return n7.test(e);
}
function s7(e) {
  const t = e.charCodeAt(0),
    r = e.charCodeAt(e.length - 1);
  return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function l7(e) {
  if (e == null) return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function c7(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e))
    ? !1
    : o7(t)
      ? s7(t)
      : "*" + t;
}
function i7(e) {
  const t = [];
  let r = -1,
    a = 0,
    n = 0,
    o,
    s,
    l,
    c,
    u,
    i,
    f;
  const d = [];
  ((d[0] = () => {
    s === void 0 ? (s = l) : (s += l);
  }),
    (d[1] = () => {
      s !== void 0 && (t.push(s), (s = void 0));
    }),
    (d[2] = () => {
      (d[0](), n++);
    }),
    (d[3] = () => {
      if (n > 0) (n--, (a = 4), d[0]());
      else {
        if (((n = 0), s === void 0 || ((s = c7(s)), s === !1))) return !1;
        d[1]();
      }
    }));
  function p() {
    const y = e[r + 1];
    if ((a === 5 && y === "'") || (a === 6 && y === '"'))
      return (r++, (l = "\\" + y), d[0](), !0);
  }
  for (; a !== null; )
    if ((r++, (o = e[r]), !(o === "\\" && p()))) {
      if (
        ((c = l7(o)),
        (f = hr[a]),
        (u = f[c] || f.l || 8),
        u === 8 ||
          ((a = u[0]),
          u[1] !== void 0 && ((i = d[u[1]]), i && ((l = o), i() === !1))))
      )
        return;
      if (a === 7) return t;
    }
}
const Qo = new Map();
function u7(e, t) {
  return Le(e) ? e[t] : null;
}
function f7(e, t) {
  if (!Le(e)) return null;
  let r = Qo.get(t);
  if ((r || ((r = i7(t)), r && Qo.set(t, r)), !r)) return null;
  const a = r.length;
  let n = e,
    o = 0;
  for (; o < a; ) {
    const s = n[r[o]];
    if (s === void 0 || Ee(n)) return null;
    ((n = s), o++);
  }
  return n;
}
const d7 = (e) => e,
  _7 = (e) => "",
  p7 = "text",
  h7 = (e) => (e.length === 0 ? "" : M9(e)),
  g7 = T9;
function Xo(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function v7(e) {
  const t = $e(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && ($e(e.named.count) || $e(e.named.n))
    ? $e(e.named.count)
      ? e.named.count
      : $e(e.named.n)
        ? e.named.n
        : t
    : t;
}
function m7(e, t) {
  (t.count || (t.count = e), t.n || (t.n = e));
}
function x7(e = {}) {
  const t = e.locale,
    r = v7(e),
    a =
      Le(e.pluralRules) && ne(t) && Ee(e.pluralRules[t])
        ? e.pluralRules[t]
        : Xo,
    n = Le(e.pluralRules) && ne(t) && Ee(e.pluralRules[t]) ? Xo : void 0,
    o = (O) => O[a(r, O.length, n)],
    s = e.list || [],
    l = (O) => s[O],
    c = e.named || {};
  $e(e.pluralIndex) && m7(r, c);
  const u = (O) => c[O];
  function i(O) {
    const F = Ee(e.messages)
      ? e.messages(O)
      : Le(e.messages)
        ? e.messages[O]
        : !1;
    return F || (e.parent ? e.parent.message(O) : _7);
  }
  const f = (O) => (e.modifiers ? e.modifiers[O] : d7),
    d =
      ge(e.processor) && Ee(e.processor.normalize) ? e.processor.normalize : h7,
    p =
      ge(e.processor) && Ee(e.processor.interpolate)
        ? e.processor.interpolate
        : g7,
    y = ge(e.processor) && ne(e.processor.type) ? e.processor.type : p7,
    R = {
      list: l,
      named: u,
      plural: o,
      linked: (O, ...F) => {
        const [L, A] = F;
        let B = "text",
          K = "";
        F.length === 1
          ? Le(L)
            ? ((K = L.modifier || K), (B = L.type || B))
            : ne(L) && (K = L || K)
          : F.length === 2 && (ne(L) && (K = L || K), ne(A) && (B = A || B));
        const z = i(O)(R),
          j = B === "vnode" && Ve(z) && K ? z[0] : z;
        return K ? f(K)(j, B) : j;
      },
      message: i,
      type: y,
      interpolate: p,
      normalize: d,
      values: et({}, s, c),
    };
  return R;
}
let Ia = null;
function y7(e) {
  Ia = e;
}
function w7(e, t, r) {
  Ia &&
    Ia.emit("i18n:init", {
      timestamp: Date.now(),
      i18n: e,
      version: t,
      meta: r,
    });
}
const C7 = b7("function:translate");
function b7(e) {
  return (t) => Ia && Ia.emit(e, t);
}
const T7 = y2.__EXTEND_POINT__,
  yr = V0(T7),
  M7 = {
    FALLBACK_TO_TRANSLATE: yr(),
    CANNOT_FORMAT_NUMBER: yr(),
    FALLBACK_TO_NUMBER_FORMAT: yr(),
    CANNOT_FORMAT_DATE: yr(),
    FALLBACK_TO_DATE_FORMAT: yr(),
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: yr(),
    __EXTEND_POINT__: yr(),
  },
  tc = pe.__EXTEND_POINT__,
  wr = V0(tc),
  It = {
    INVALID_ARGUMENT: tc,
    INVALID_DATE_ARGUMENT: wr(),
    INVALID_ISO_DATE_ARGUMENT: wr(),
    NOT_SUPPORT_NON_STRING_MESSAGE: wr(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: wr(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: wr(),
    NOT_SUPPORT_LOCALE_TYPE: wr(),
    __EXTEND_POINT__: wr(),
  };
function Vt(e) {
  return ta(e, null, void 0);
}
function C2(e, t) {
  return t.locale != null ? Jo(t.locale) : Jo(e.locale);
}
let ln;
function Jo(e) {
  if (ne(e)) return e;
  if (Ee(e)) {
    if (e.resolvedOnce && ln != null) return ln;
    if (e.constructor.name === "Function") {
      const t = e();
      if (b9(t)) throw Vt(It.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return (ln = t);
    } else throw Vt(It.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw Vt(It.NOT_SUPPORT_LOCALE_TYPE);
}
function I7(e, t, r) {
  return [
    ...new Set([
      r,
      ...(Ve(t) ? t : Le(t) ? Object.keys(t) : ne(t) ? [t] : [r]),
    ]),
  ];
}
function rc(e, t, r) {
  const a = ne(r) ? r : Yr,
    n = e;
  n.__localeChainCache || (n.__localeChainCache = new Map());
  let o = n.__localeChainCache.get(a);
  if (!o) {
    o = [];
    let s = [r];
    for (; Ve(s); ) s = Zo(o, s, t);
    const l = Ve(t) || !ge(t) ? t : t.default ? t.default : null;
    ((s = ne(l) ? [l] : l),
      Ve(s) && Zo(o, s, !1),
      n.__localeChainCache.set(a, o));
  }
  return o;
}
function Zo(e, t, r) {
  let a = !0;
  for (let n = 0; n < t.length && ye(a); n++) {
    const o = t[n];
    ne(o) && (a = S7(e, t[n], r));
  }
  return a;
}
function S7(e, t, r) {
  let a;
  const n = t.split("-");
  do {
    const o = n.join("-");
    ((a = L7(e, o, r)), n.splice(-1, 1));
  } while (n.length && a === !0);
  return a;
}
function L7(e, t, r) {
  let a = !1;
  if (!e.includes(t) && ((a = !0), t)) {
    a = t[t.length - 1] !== "!";
    const n = t.replace(/!/g, "");
    (e.push(n), (Ve(r) || ge(r)) && r[n] && (a = r[n]));
  }
  return a;
}
const A7 = "9.14.0",
  B0 = -1,
  Yr = "en-US",
  es = "",
  ts = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function D7() {
  return {
    upper: (e, t) =>
      t === "text" && ne(e)
        ? e.toUpperCase()
        : t === "vnode" && Le(e) && "__v_isVNode" in e
          ? e.children.toUpperCase()
          : e,
    lower: (e, t) =>
      t === "text" && ne(e)
        ? e.toLowerCase()
        : t === "vnode" && Le(e) && "__v_isVNode" in e
          ? e.children.toLowerCase()
          : e,
    capitalize: (e, t) =>
      t === "text" && ne(e)
        ? ts(e)
        : t === "vnode" && Le(e) && "__v_isVNode" in e
          ? ts(e.children)
          : e,
  };
}
let ac;
function rs(e) {
  ac = e;
}
let nc;
function P7(e) {
  nc = e;
}
let oc;
function k7(e) {
  oc = e;
}
let sc = null;
const E7 = (e) => {
    sc = e;
  },
  R7 = () => sc;
let lc = null;
const as = (e) => {
    lc = e;
  },
  O7 = () => lc;
let ns = 0;
function V7(e = {}) {
  const t = Ee(e.onWarn) ? e.onWarn : I9,
    r = ne(e.version) ? e.version : A7,
    a = ne(e.locale) || Ee(e.locale) ? e.locale : Yr,
    n = Ee(a) ? Yr : a,
    o =
      Ve(e.fallbackLocale) ||
      ge(e.fallbackLocale) ||
      ne(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : n,
    s = ge(e.messages) ? e.messages : { [n]: {} },
    l = ge(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} },
    c = ge(e.numberFormats) ? e.numberFormats : { [n]: {} },
    u = et({}, e.modifiers || {}, D7()),
    i = e.pluralRules || {},
    f = Ee(e.missing) ? e.missing : null,
    d = ye(e.missingWarn) || ur(e.missingWarn) ? e.missingWarn : !0,
    p = ye(e.fallbackWarn) || ur(e.fallbackWarn) ? e.fallbackWarn : !0,
    y = !!e.fallbackFormat,
    I = !!e.unresolving,
    R = Ee(e.postTranslation) ? e.postTranslation : null,
    O = ge(e.processor) ? e.processor : null,
    F = ye(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    L = !!e.escapeParameter,
    A = Ee(e.messageCompiler) ? e.messageCompiler : ac,
    B = Ee(e.messageResolver) ? e.messageResolver : nc || u7,
    K = Ee(e.localeFallbacker) ? e.localeFallbacker : oc || I7,
    z = Le(e.fallbackContext) ? e.fallbackContext : void 0,
    j = e,
    k = Le(j.__datetimeFormatters) ? j.__datetimeFormatters : new Map(),
    te = Le(j.__numberFormatters) ? j.__numberFormatters : new Map(),
    ue = Le(j.__meta) ? j.__meta : {};
  ns++;
  const q = {
    version: r,
    cid: ns,
    locale: a,
    fallbackLocale: o,
    messages: s,
    modifiers: u,
    pluralRules: i,
    missing: f,
    missingWarn: d,
    fallbackWarn: p,
    fallbackFormat: y,
    unresolving: I,
    postTranslation: R,
    processor: O,
    warnHtmlMessage: F,
    escapeParameter: L,
    messageCompiler: A,
    messageResolver: B,
    localeFallbacker: K,
    fallbackContext: z,
    onWarn: t,
    __meta: ue,
  };
  return (
    (q.datetimeFormats = l),
    (q.numberFormats = c),
    (q.__datetimeFormatters = k),
    (q.__numberFormatters = te),
    __INTLIFY_PROD_DEVTOOLS__ && w7(q, r, ue),
    q
  );
}
function b2(e, t, r, a, n) {
  const { missing: o, onWarn: s } = e;
  if (o !== null) {
    const l = o(e, r, t, n);
    return ne(l) ? l : t;
  } else return t;
}
function sa(e, t, r) {
  const a = e;
  ((a.__localeChainCache = new Map()), e.localeFallbacker(e, r, t));
}
function B7(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function K7(e, t) {
  const r = t.indexOf(e);
  if (r === -1) return !1;
  for (let a = r + 1; a < t.length; a++) if (B7(e, t[a])) return !0;
  return !1;
}
function cn(e) {
  return (r) => H7(r, e);
}
function H7(e, t) {
  const r = t.b || t.body;
  if ((r.t || r.type) === 1) {
    const a = r,
      n = a.c || a.cases;
    return e.plural(n.reduce((o, s) => [...o, os(e, s)], []));
  } else return os(e, r);
}
function os(e, t) {
  const r = t.s || t.static;
  if (r) return e.type === "text" ? r : e.normalize([r]);
  {
    const a = (t.i || t.items).reduce((n, o) => [...n, En(e, o)], []);
    return e.normalize(a);
  }
}
function En(e, t) {
  const r = t.t || t.type;
  switch (r) {
    case 3: {
      const a = t;
      return a.v || a.value;
    }
    case 9: {
      const a = t;
      return a.v || a.value;
    }
    case 4: {
      const a = t;
      return e.interpolate(e.named(a.k || a.key));
    }
    case 5: {
      const a = t;
      return e.interpolate(e.list(a.i != null ? a.i : a.index));
    }
    case 6: {
      const a = t,
        n = a.m || a.modifier;
      return e.linked(En(e, a.k || a.key), n ? En(e, n) : void 0, e.type);
    }
    case 7: {
      const a = t;
      return a.v || a.value;
    }
    case 8: {
      const a = t;
      return a.v || a.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${r}`);
  }
}
const cc = (e) => e;
let Hr = Object.create(null);
const Qr = (e) =>
  Le(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function ic(e, t = {}) {
  let r = !1;
  const a = t.onError || E9;
  return (
    (t.onError = (n) => {
      ((r = !0), a(n));
    }),
    { ...r7(e, t), detectError: r }
  );
}
const F7 = (e, t) => {
  if (!ne(e)) throw Vt(It.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    ye(t.warnHtmlMessage) && t.warnHtmlMessage;
    const a = (t.onCacheKey || cc)(e),
      n = Hr[a];
    if (n) return n;
    const { code: o, detectError: s } = ic(e, t),
      l = new Function(`return ${o}`)();
    return s ? l : (Hr[a] = l);
  }
};
function N7(e, t) {
  if (
    __INTLIFY_JIT_COMPILATION__ &&
    !__INTLIFY_DROP_MESSAGE_COMPILER__ &&
    ne(e)
  ) {
    ye(t.warnHtmlMessage) && t.warnHtmlMessage;
    const a = (t.onCacheKey || cc)(e),
      n = Hr[a];
    if (n) return n;
    const { ast: o, detectError: s } = ic(e, { ...t, location: !1, jit: !0 }),
      l = cn(o);
    return s ? l : (Hr[a] = l);
  } else {
    const r = e.cacheKey;
    if (r) {
      const a = Hr[r];
      return a || (Hr[r] = cn(e));
    } else return cn(e);
  }
}
const ss = () => "",
  wt = (e) => Ee(e);
function ls(e, ...t) {
  const {
      fallbackFormat: r,
      postTranslation: a,
      unresolving: n,
      messageCompiler: o,
      fallbackLocale: s,
      messages: l,
    } = e,
    [c, u] = Rn(...t),
    i = ye(u.missingWarn) ? u.missingWarn : e.missingWarn,
    f = ye(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn,
    d = ye(u.escapeParameter) ? u.escapeParameter : e.escapeParameter,
    p = !!u.resolvedMessage,
    y =
      ne(u.default) || ye(u.default)
        ? ye(u.default)
          ? o
            ? c
            : () => c
          : u.default
        : r
          ? o
            ? c
            : () => c
          : "",
    I = r || y !== "",
    R = C2(e, u);
  d && z7(u);
  let [O, F, L] = p ? [c, R, l[R] || {}] : uc(e, c, R, s, f, i),
    A = O,
    B = c;
  if (
    (!p && !(ne(A) || Qr(A) || wt(A)) && I && ((A = y), (B = A)),
    !p && (!(ne(A) || Qr(A) || wt(A)) || !ne(F)))
  )
    return n ? B0 : c;
  let K = !1;
  const z = () => {
      K = !0;
    },
    j = wt(A) ? A : fc(e, c, F, A, B, z);
  if (K) return A;
  const k = j7(e, F, L, u),
    te = x7(k),
    ue = U7(e, j, te),
    q = a ? a(ue, c) : ue;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const ie = {
      timestamp: Date.now(),
      key: ne(c) ? c : wt(A) ? A.key : "",
      locale: F || (wt(A) ? A.locale : ""),
      format: ne(A) ? A : wt(A) ? A.source : "",
      message: q,
    };
    ((ie.meta = et({}, e.__meta, R7() || {})), C7(ie));
  }
  return q;
}
function z7(e) {
  Ve(e.list)
    ? (e.list = e.list.map((t) => (ne(t) ? jo(t) : t)))
    : Le(e.named) &&
      Object.keys(e.named).forEach((t) => {
        ne(e.named[t]) && (e.named[t] = jo(e.named[t]));
      });
}
function uc(e, t, r, a, n, o) {
  const { messages: s, onWarn: l, messageResolver: c, localeFallbacker: u } = e,
    i = u(e, a, r);
  let f = {},
    d,
    p = null;
  const y = "translate";
  for (
    let I = 0;
    I < i.length &&
    ((d = i[I]),
    (f = s[d] || {}),
    (p = c(f, t)) === null && (p = f[t]),
    !(ne(p) || Qr(p) || wt(p)));
    I++
  )
    if (!K7(d, i)) {
      const R = b2(e, t, d, o, y);
      R !== t && (p = R);
    }
  return [p, d, f];
}
function fc(e, t, r, a, n, o) {
  const { messageCompiler: s, warnHtmlMessage: l } = e;
  if (wt(a)) {
    const u = a;
    return ((u.locale = u.locale || r), (u.key = u.key || t), u);
  }
  if (s == null) {
    const u = () => a;
    return ((u.locale = r), (u.key = t), u);
  }
  const c = s(a, $7(e, r, n, a, l, o));
  return ((c.locale = r), (c.key = t), (c.source = a), c);
}
function U7(e, t, r) {
  return t(r);
}
function Rn(...e) {
  const [t, r, a] = e,
    n = {};
  if (!ne(t) && !$e(t) && !wt(t) && !Qr(t)) throw Vt(It.INVALID_ARGUMENT);
  const o = $e(t) ? String(t) : (wt(t), t);
  return (
    $e(r)
      ? (n.plural = r)
      : ne(r)
        ? (n.default = r)
        : ge(r) && !O0(r)
          ? (n.named = r)
          : Ve(r) && (n.list = r),
    $e(a) ? (n.plural = a) : ne(a) ? (n.default = a) : ge(a) && et(n, a),
    [o, n]
  );
}
function $7(e, t, r, a, n, o) {
  return {
    locale: t,
    key: r,
    warnHtmlMessage: n,
    onError: (s) => {
      throw (o && o(s), s);
    },
    onCacheKey: (s) => x9(t, r, s),
  };
}
function j7(e, t, r, a) {
  const {
      modifiers: n,
      pluralRules: o,
      messageResolver: s,
      fallbackLocale: l,
      fallbackWarn: c,
      missingWarn: u,
      fallbackContext: i,
    } = e,
    d = {
      locale: t,
      modifiers: n,
      pluralRules: o,
      messages: (p) => {
        let y = s(r, p);
        if (y == null && i) {
          const [, , I] = uc(i, p, t, l, c, u);
          y = s(I, p);
        }
        if (ne(y) || Qr(y)) {
          let I = !1;
          const O = fc(e, p, t, y, p, () => {
            I = !0;
          });
          return I ? ss : O;
        } else return wt(y) ? y : ss;
      },
    };
  return (
    e.processor && (d.processor = e.processor),
    a.list && (d.list = a.list),
    a.named && (d.named = a.named),
    $e(a.plural) && (d.pluralIndex = a.plural),
    d
  );
}
function cs(e, ...t) {
  const {
      datetimeFormats: r,
      unresolving: a,
      fallbackLocale: n,
      onWarn: o,
      localeFallbacker: s,
    } = e,
    { __datetimeFormatters: l } = e,
    [c, u, i, f] = On(...t),
    d = ye(i.missingWarn) ? i.missingWarn : e.missingWarn;
  ye(i.fallbackWarn) ? i.fallbackWarn : e.fallbackWarn;
  const p = !!i.part,
    y = C2(e, i),
    I = s(e, n, y);
  if (!ne(c) || c === "") return new Intl.DateTimeFormat(y, f).format(u);
  let R = {},
    O,
    F = null;
  const L = "datetime format";
  for (
    let K = 0;
    K < I.length && ((O = I[K]), (R = r[O] || {}), (F = R[c]), !ge(F));
    K++
  )
    b2(e, c, O, d, L);
  if (!ge(F) || !ne(O)) return a ? B0 : c;
  let A = `${O}__${c}`;
  O0(f) || (A = `${A}__${JSON.stringify(f)}`);
  let B = l.get(A);
  return (
    B || ((B = new Intl.DateTimeFormat(O, et({}, F, f))), l.set(A, B)),
    p ? B.formatToParts(u) : B.format(u)
  );
}
const dc = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits",
];
function On(...e) {
  const [t, r, a, n] = e,
    o = {};
  let s = {},
    l;
  if (ne(t)) {
    const c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!c) throw Vt(It.INVALID_ISO_DATE_ARGUMENT);
    const u = c[3]
      ? c[3].trim().startsWith("T")
        ? `${c[1].trim()}${c[3].trim()}`
        : `${c[1].trim()}T${c[3].trim()}`
      : c[1].trim();
    l = new Date(u);
    try {
      l.toISOString();
    } catch {
      throw Vt(It.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (w9(t)) {
    if (isNaN(t.getTime())) throw Vt(It.INVALID_DATE_ARGUMENT);
    l = t;
  } else if ($e(t)) l = t;
  else throw Vt(It.INVALID_ARGUMENT);
  return (
    ne(r)
      ? (o.key = r)
      : ge(r) &&
        Object.keys(r).forEach((c) => {
          dc.includes(c) ? (s[c] = r[c]) : (o[c] = r[c]);
        }),
    ne(a) ? (o.locale = a) : ge(a) && (s = a),
    ge(n) && (s = n),
    [o.key || "", l, o, s]
  );
}
function is(e, t, r) {
  const a = e;
  for (const n in r) {
    const o = `${t}__${n}`;
    a.__datetimeFormatters.has(o) && a.__datetimeFormatters.delete(o);
  }
}
function us(e, ...t) {
  const {
      numberFormats: r,
      unresolving: a,
      fallbackLocale: n,
      onWarn: o,
      localeFallbacker: s,
    } = e,
    { __numberFormatters: l } = e,
    [c, u, i, f] = Vn(...t),
    d = ye(i.missingWarn) ? i.missingWarn : e.missingWarn;
  ye(i.fallbackWarn) ? i.fallbackWarn : e.fallbackWarn;
  const p = !!i.part,
    y = C2(e, i),
    I = s(e, n, y);
  if (!ne(c) || c === "") return new Intl.NumberFormat(y, f).format(u);
  let R = {},
    O,
    F = null;
  const L = "number format";
  for (
    let K = 0;
    K < I.length && ((O = I[K]), (R = r[O] || {}), (F = R[c]), !ge(F));
    K++
  )
    b2(e, c, O, d, L);
  if (!ge(F) || !ne(O)) return a ? B0 : c;
  let A = `${O}__${c}`;
  O0(f) || (A = `${A}__${JSON.stringify(f)}`);
  let B = l.get(A);
  return (
    B || ((B = new Intl.NumberFormat(O, et({}, F, f))), l.set(A, B)),
    p ? B.formatToParts(u) : B.format(u)
  );
}
const _c = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay",
];
function Vn(...e) {
  const [t, r, a, n] = e,
    o = {};
  let s = {};
  if (!$e(t)) throw Vt(It.INVALID_ARGUMENT);
  const l = t;
  return (
    ne(r)
      ? (o.key = r)
      : ge(r) &&
        Object.keys(r).forEach((c) => {
          _c.includes(c) ? (s[c] = r[c]) : (o[c] = r[c]);
        }),
    ne(a) ? (o.locale = a) : ge(a) && (s = a),
    ge(n) && (s = n),
    [o.key || "", l, o, s]
  );
}
function fs(e, t, r) {
  const a = e;
  for (const n in r) {
    const o = `${t}__${n}`;
    a.__numberFormatters.has(o) && a.__numberFormatters.delete(o);
  }
}
a7();
/*!
 * vue-i18n v9.14.0
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */ const W7 = "9.14.0";
function G7() {
  (typeof __VUE_I18N_FULL_INSTALL__ != "boolean" &&
    (Gt().__VUE_I18N_FULL_INSTALL__ = !0),
    typeof __VUE_I18N_LEGACY_API__ != "boolean" &&
      (Gt().__VUE_I18N_LEGACY_API__ = !0),
    typeof __INTLIFY_JIT_COMPILATION__ != "boolean" &&
      (Gt().__INTLIFY_JIT_COMPILATION__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" &&
      (Gt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" &&
      (Gt().__INTLIFY_PROD_DEVTOOLS__ = !1));
}
const q7 = M7.__EXTEND_POINT__,
  zt = V0(q7);
(zt(), zt(), zt(), zt(), zt(), zt(), zt(), zt(), zt());
const pc = It.__EXTEND_POINT__,
  pt = V0(pc),
  Ge = {
    UNEXPECTED_RETURN_TYPE: pc,
    INVALID_ARGUMENT: pt(),
    MUST_BE_CALL_SETUP_TOP: pt(),
    NOT_INSTALLED: pt(),
    NOT_AVAILABLE_IN_LEGACY_MODE: pt(),
    REQUIRED_VALUE: pt(),
    INVALID_VALUE: pt(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: pt(),
    NOT_INSTALLED_WITH_PROVIDE: pt(),
    UNEXPECTED_ERROR: pt(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: pt(),
    BRIDGE_SUPPORT_VUE_2_ONLY: pt(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: pt(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: pt(),
    __EXTEND_POINT__: pt(),
  };
function Xe(e, ...t) {
  return ta(e, null, void 0);
}
const Bn = pr("__translateVNode"),
  Kn = pr("__datetimeParts"),
  Hn = pr("__numberParts"),
  hc = pr("__setPluralRules"),
  gc = pr("__injectWithOption"),
  Fn = pr("__dispose");
function Sa(e) {
  if (!Le(e)) return e;
  for (const t in e)
    if (h0(e, t))
      if (!t.includes(".")) Le(e[t]) && Sa(e[t]);
      else {
        const r = t.split("."),
          a = r.length - 1;
        let n = e,
          o = !1;
        for (let s = 0; s < a; s++) {
          if ((r[s] in n || (n[r[s]] = {}), !Le(n[r[s]]))) {
            o = !0;
            break;
          }
          n = n[r[s]];
        }
        (o || ((n[r[a]] = e[t]), delete e[t]), Le(n[r[a]]) && Sa(n[r[a]]));
      }
  return e;
}
function K0(e, t) {
  const { messages: r, __i18n: a, messageResolver: n, flatJson: o } = t,
    s = ge(r) ? r : Ve(a) ? {} : { [e]: {} };
  if (
    (Ve(a) &&
      a.forEach((l) => {
        if ("locale" in l && "resource" in l) {
          const { locale: c, resource: u } = l;
          c ? ((s[c] = s[c] || {}), Za(u, s[c])) : Za(u, s);
        } else ne(l) && Za(JSON.parse(l), s);
      }),
    n == null && o)
  )
    for (const l in s) h0(s, l) && Sa(s[l]);
  return s;
}
function vc(e) {
  return e.type;
}
function mc(e, t, r) {
  let a = Le(t.messages) ? t.messages : {};
  "__i18nGlobal" in r &&
    (a = K0(e.locale.value, { messages: a, __i18n: r.__i18nGlobal }));
  const n = Object.keys(a);
  n.length &&
    n.forEach((o) => {
      e.mergeLocaleMessage(o, a[o]);
    });
  {
    if (Le(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length &&
        o.forEach((s) => {
          e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
        });
    }
    if (Le(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length &&
        o.forEach((s) => {
          e.mergeNumberFormat(s, t.numberFormats[s]);
        });
    }
  }
}
function ds(e) {
  return Oe(Ea, null, e, 0);
}
const _s = "__INTLIFY_META__",
  ps = () => [],
  Y7 = () => !1;
let hs = 0;
function gs(e) {
  return (t, r, a, n) => e(r, a, Qt() || void 0, n);
}
const Q7 = () => {
  const e = Qt();
  let t = null;
  return e && (t = vc(e)[_s]) ? { [_s]: t } : null;
};
function T2(e = {}, t) {
  const { __root: r, __injectWithOption: a } = e,
    n = r === void 0,
    o = e.flatJson,
    s = p0 ? le : Bt,
    l = !!e.translateExistCompatible;
  let c = ye(e.inheritLocale) ? e.inheritLocale : !0;
  const u = s(r && c ? r.locale.value : ne(e.locale) ? e.locale : Yr),
    i = s(
      r && c
        ? r.fallbackLocale.value
        : ne(e.fallbackLocale) ||
            Ve(e.fallbackLocale) ||
            ge(e.fallbackLocale) ||
            e.fallbackLocale === !1
          ? e.fallbackLocale
          : u.value,
    ),
    f = s(K0(u.value, e)),
    d = s(ge(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }),
    p = s(ge(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let y = r
      ? r.missingWarn
      : ye(e.missingWarn) || ur(e.missingWarn)
        ? e.missingWarn
        : !0,
    I = r
      ? r.fallbackWarn
      : ye(e.fallbackWarn) || ur(e.fallbackWarn)
        ? e.fallbackWarn
        : !0,
    R = r ? r.fallbackRoot : ye(e.fallbackRoot) ? e.fallbackRoot : !0,
    O = !!e.fallbackFormat,
    F = Ee(e.missing) ? e.missing : null,
    L = Ee(e.missing) ? gs(e.missing) : null,
    A = Ee(e.postTranslation) ? e.postTranslation : null,
    B = r ? r.warnHtmlMessage : ye(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    K = !!e.escapeParameter;
  const z = r ? r.modifiers : ge(e.modifiers) ? e.modifiers : {};
  let j = e.pluralRules || (r && r.pluralRules),
    k;
  ((k = (() => {
    n && as(null);
    const P = {
      version: W7,
      locale: u.value,
      fallbackLocale: i.value,
      messages: f.value,
      modifiers: z,
      pluralRules: j,
      missing: L === null ? void 0 : L,
      missingWarn: y,
      fallbackWarn: I,
      fallbackFormat: O,
      unresolving: !0,
      postTranslation: A === null ? void 0 : A,
      warnHtmlMessage: B,
      escapeParameter: K,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" },
    };
    ((P.datetimeFormats = d.value),
      (P.numberFormats = p.value),
      (P.__datetimeFormatters = ge(k) ? k.__datetimeFormatters : void 0),
      (P.__numberFormatters = ge(k) ? k.__numberFormatters : void 0));
    const N = V7(P);
    return (n && as(N), N);
  })()),
    sa(k, u.value, i.value));
  function ue() {
    return [u.value, i.value, f.value, d.value, p.value];
  }
  const q = me({
      get: () => u.value,
      set: (P) => {
        ((u.value = P), (k.locale = u.value));
      },
    }),
    ie = me({
      get: () => i.value,
      set: (P) => {
        ((i.value = P), (k.fallbackLocale = i.value), sa(k, u.value, P));
      },
    }),
    Ae = me(() => f.value),
    Fe = me(() => d.value),
    S = me(() => p.value);
  function _e() {
    return Ee(A) ? A : null;
  }
  function xe(P) {
    ((A = P), (k.postTranslation = P));
  }
  function Je() {
    return F;
  }
  function tt(P) {
    (P !== null && (L = gs(P)), (F = P), (k.missing = L));
  }
  const Be = (P, N, se, we, Re, Ze) => {
    ue();
    let Ue;
    try {
      (__INTLIFY_PROD_DEVTOOLS__,
        n || (k.fallbackContext = r ? O7() : void 0),
        (Ue = P(k)));
    } finally {
      (__INTLIFY_PROD_DEVTOOLS__, n || (k.fallbackContext = void 0));
    }
    if (
      (se !== "translate exists" && $e(Ue) && Ue === B0) ||
      (se === "translate exists" && !Ue)
    ) {
      const [Ht, ra] = N();
      return r && R ? we(r) : Re(Ht);
    } else {
      if (Ze(Ue)) return Ue;
      throw Xe(Ge.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ke(...P) {
    return Be(
      (N) => Reflect.apply(ls, null, [N, ...P]),
      () => Rn(...P),
      "translate",
      (N) => Reflect.apply(N.t, N, [...P]),
      (N) => N,
      (N) => ne(N),
    );
  }
  function _t(...P) {
    const [N, se, we] = P;
    if (we && !Le(we)) throw Xe(Ge.INVALID_ARGUMENT);
    return Ke(N, se, et({ resolvedMessage: !0 }, we || {}));
  }
  function st(...P) {
    return Be(
      (N) => Reflect.apply(cs, null, [N, ...P]),
      () => On(...P),
      "datetime format",
      (N) => Reflect.apply(N.d, N, [...P]),
      () => es,
      (N) => ne(N),
    );
  }
  function mt(...P) {
    return Be(
      (N) => Reflect.apply(us, null, [N, ...P]),
      () => Vn(...P),
      "number format",
      (N) => Reflect.apply(N.n, N, [...P]),
      () => es,
      (N) => ne(N),
    );
  }
  function ze(P) {
    return P.map((N) => (ne(N) || $e(N) || ye(N) ? ds(String(N)) : N));
  }
  const ae = { normalize: ze, interpolate: (P) => P, type: "vnode" };
  function ee(...P) {
    return Be(
      (N) => {
        let se;
        const we = N;
        try {
          ((we.processor = ae), (se = Reflect.apply(ls, null, [we, ...P])));
        } finally {
          we.processor = null;
        }
        return se;
      },
      () => Rn(...P),
      "translate",
      (N) => N[Bn](...P),
      (N) => [ds(N)],
      (N) => Ve(N),
    );
  }
  function oe(...P) {
    return Be(
      (N) => Reflect.apply(us, null, [N, ...P]),
      () => Vn(...P),
      "number format",
      (N) => N[Hn](...P),
      ps,
      (N) => ne(N) || Ve(N),
    );
  }
  function be(...P) {
    return Be(
      (N) => Reflect.apply(cs, null, [N, ...P]),
      () => On(...P),
      "datetime format",
      (N) => N[Kn](...P),
      ps,
      (N) => ne(N) || Ve(N),
    );
  }
  function C(P) {
    ((j = P), (k.pluralRules = j));
  }
  function T(P, N) {
    return Be(
      () => {
        if (!P) return !1;
        const se = ne(N) ? N : u.value,
          we = W(se),
          Re = k.messageResolver(we, P);
        return l ? Re != null : Qr(Re) || wt(Re) || ne(Re);
      },
      () => [P],
      "translate exists",
      (se) => Reflect.apply(se.te, se, [P, N]),
      Y7,
      (se) => ye(se),
    );
  }
  function w(P) {
    let N = null;
    const se = rc(k, i.value, u.value);
    for (let we = 0; we < se.length; we++) {
      const Re = f.value[se[we]] || {},
        Ze = k.messageResolver(Re, P);
      if (Ze != null) {
        N = Ze;
        break;
      }
    }
    return N;
  }
  function V(P) {
    const N = w(P);
    return N ?? (r ? r.tm(P) || {} : {});
  }
  function W(P) {
    return f.value[P] || {};
  }
  function $(P, N) {
    if (o) {
      const se = { [P]: N };
      for (const we in se) h0(se, we) && Sa(se[we]);
      N = se[P];
    }
    ((f.value[P] = N), (k.messages = f.value));
  }
  function Z(P, N) {
    f.value[P] = f.value[P] || {};
    const se = { [P]: N };
    if (o) for (const we in se) h0(se, we) && Sa(se[we]);
    ((N = se[P]), Za(N, f.value[P]), (k.messages = f.value));
  }
  function X(P) {
    return d.value[P] || {};
  }
  function h(P, N) {
    ((d.value[P] = N), (k.datetimeFormats = d.value), is(k, P, N));
  }
  function x(P, N) {
    ((d.value[P] = et(d.value[P] || {}, N)),
      (k.datetimeFormats = d.value),
      is(k, P, N));
  }
  function E(P) {
    return p.value[P] || {};
  }
  function H(P, N) {
    ((p.value[P] = N), (k.numberFormats = p.value), fs(k, P, N));
  }
  function re(P, N) {
    ((p.value[P] = et(p.value[P] || {}, N)),
      (k.numberFormats = p.value),
      fs(k, P, N));
  }
  (hs++,
    r &&
      p0 &&
      (gt(r.locale, (P) => {
        c && ((u.value = P), (k.locale = P), sa(k, u.value, i.value));
      }),
      gt(r.fallbackLocale, (P) => {
        c && ((i.value = P), (k.fallbackLocale = P), sa(k, u.value, i.value));
      })));
  const Y = {
    id: hs,
    locale: q,
    fallbackLocale: ie,
    get inheritLocale() {
      return c;
    },
    set inheritLocale(P) {
      ((c = P),
        P &&
          r &&
          ((u.value = r.locale.value),
          (i.value = r.fallbackLocale.value),
          sa(k, u.value, i.value)));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: Ae,
    get modifiers() {
      return z;
    },
    get pluralRules() {
      return j || {};
    },
    get isGlobal() {
      return n;
    },
    get missingWarn() {
      return y;
    },
    set missingWarn(P) {
      ((y = P), (k.missingWarn = y));
    },
    get fallbackWarn() {
      return I;
    },
    set fallbackWarn(P) {
      ((I = P), (k.fallbackWarn = I));
    },
    get fallbackRoot() {
      return R;
    },
    set fallbackRoot(P) {
      R = P;
    },
    get fallbackFormat() {
      return O;
    },
    set fallbackFormat(P) {
      ((O = P), (k.fallbackFormat = O));
    },
    get warnHtmlMessage() {
      return B;
    },
    set warnHtmlMessage(P) {
      ((B = P), (k.warnHtmlMessage = P));
    },
    get escapeParameter() {
      return K;
    },
    set escapeParameter(P) {
      ((K = P), (k.escapeParameter = P));
    },
    t: Ke,
    getLocaleMessage: W,
    setLocaleMessage: $,
    mergeLocaleMessage: Z,
    getPostTranslationHandler: _e,
    setPostTranslationHandler: xe,
    getMissingHandler: Je,
    setMissingHandler: tt,
    [hc]: C,
  };
  return (
    (Y.datetimeFormats = Fe),
    (Y.numberFormats = S),
    (Y.rt = _t),
    (Y.te = T),
    (Y.tm = V),
    (Y.d = st),
    (Y.n = mt),
    (Y.getDateTimeFormat = X),
    (Y.setDateTimeFormat = h),
    (Y.mergeDateTimeFormat = x),
    (Y.getNumberFormat = E),
    (Y.setNumberFormat = H),
    (Y.mergeNumberFormat = re),
    (Y[gc] = a),
    (Y[Bn] = ee),
    (Y[Kn] = be),
    (Y[Hn] = oe),
    Y
  );
}
function X7(e) {
  const t = ne(e.locale) ? e.locale : Yr,
    r =
      ne(e.fallbackLocale) ||
      Ve(e.fallbackLocale) ||
      ge(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : t,
    a = Ee(e.missing) ? e.missing : void 0,
    n =
      ye(e.silentTranslationWarn) || ur(e.silentTranslationWarn)
        ? !e.silentTranslationWarn
        : !0,
    o =
      ye(e.silentFallbackWarn) || ur(e.silentFallbackWarn)
        ? !e.silentFallbackWarn
        : !0,
    s = ye(e.fallbackRoot) ? e.fallbackRoot : !0,
    l = !!e.formatFallbackMessages,
    c = ge(e.modifiers) ? e.modifiers : {},
    u = e.pluralizationRules,
    i = Ee(e.postTranslation) ? e.postTranslation : void 0,
    f = ne(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
    d = !!e.escapeParameterHtml,
    p = ye(e.sync) ? e.sync : !0;
  let y = e.messages;
  if (ge(e.sharedMessages)) {
    const K = e.sharedMessages;
    y = Object.keys(K).reduce((j, k) => {
      const te = j[k] || (j[k] = {});
      return (et(te, K[k]), j);
    }, y || {});
  }
  const { __i18n: I, __root: R, __injectWithOption: O } = e,
    F = e.datetimeFormats,
    L = e.numberFormats,
    A = e.flatJson,
    B = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: r,
    messages: y,
    flatJson: A,
    datetimeFormats: F,
    numberFormats: L,
    missing: a,
    missingWarn: n,
    fallbackWarn: o,
    fallbackRoot: s,
    fallbackFormat: l,
    modifiers: c,
    pluralRules: u,
    postTranslation: i,
    warnHtmlMessage: f,
    escapeParameter: d,
    messageResolver: e.messageResolver,
    inheritLocale: p,
    translateExistCompatible: B,
    __i18n: I,
    __root: R,
    __injectWithOption: O,
  };
}
function Nn(e = {}, t) {
  {
    const r = T2(X7(e)),
      { __extender: a } = e,
      n = {
        id: r.id,
        get locale() {
          return r.locale.value;
        },
        set locale(o) {
          r.locale.value = o;
        },
        get fallbackLocale() {
          return r.fallbackLocale.value;
        },
        set fallbackLocale(o) {
          r.fallbackLocale.value = o;
        },
        get messages() {
          return r.messages.value;
        },
        get datetimeFormats() {
          return r.datetimeFormats.value;
        },
        get numberFormats() {
          return r.numberFormats.value;
        },
        get availableLocales() {
          return r.availableLocales;
        },
        get formatter() {
          return {
            interpolate() {
              return [];
            },
          };
        },
        set formatter(o) {},
        get missing() {
          return r.getMissingHandler();
        },
        set missing(o) {
          r.setMissingHandler(o);
        },
        get silentTranslationWarn() {
          return ye(r.missingWarn) ? !r.missingWarn : r.missingWarn;
        },
        set silentTranslationWarn(o) {
          r.missingWarn = ye(o) ? !o : o;
        },
        get silentFallbackWarn() {
          return ye(r.fallbackWarn) ? !r.fallbackWarn : r.fallbackWarn;
        },
        set silentFallbackWarn(o) {
          r.fallbackWarn = ye(o) ? !o : o;
        },
        get modifiers() {
          return r.modifiers;
        },
        get formatFallbackMessages() {
          return r.fallbackFormat;
        },
        set formatFallbackMessages(o) {
          r.fallbackFormat = o;
        },
        get postTranslation() {
          return r.getPostTranslationHandler();
        },
        set postTranslation(o) {
          r.setPostTranslationHandler(o);
        },
        get sync() {
          return r.inheritLocale;
        },
        set sync(o) {
          r.inheritLocale = o;
        },
        get warnHtmlInMessage() {
          return r.warnHtmlMessage ? "warn" : "off";
        },
        set warnHtmlInMessage(o) {
          r.warnHtmlMessage = o !== "off";
        },
        get escapeParameterHtml() {
          return r.escapeParameter;
        },
        set escapeParameterHtml(o) {
          r.escapeParameter = o;
        },
        get preserveDirectiveContent() {
          return !0;
        },
        set preserveDirectiveContent(o) {},
        get pluralizationRules() {
          return r.pluralRules || {};
        },
        __composer: r,
        t(...o) {
          const [s, l, c] = o,
            u = {};
          let i = null,
            f = null;
          if (!ne(s)) throw Xe(Ge.INVALID_ARGUMENT);
          const d = s;
          return (
            ne(l) ? (u.locale = l) : Ve(l) ? (i = l) : ge(l) && (f = l),
            Ve(c) ? (i = c) : ge(c) && (f = c),
            Reflect.apply(r.t, r, [d, i || f || {}, u])
          );
        },
        rt(...o) {
          return Reflect.apply(r.rt, r, [...o]);
        },
        tc(...o) {
          const [s, l, c] = o,
            u = { plural: 1 };
          let i = null,
            f = null;
          if (!ne(s)) throw Xe(Ge.INVALID_ARGUMENT);
          const d = s;
          return (
            ne(l)
              ? (u.locale = l)
              : $e(l)
                ? (u.plural = l)
                : Ve(l)
                  ? (i = l)
                  : ge(l) && (f = l),
            ne(c) ? (u.locale = c) : Ve(c) ? (i = c) : ge(c) && (f = c),
            Reflect.apply(r.t, r, [d, i || f || {}, u])
          );
        },
        te(o, s) {
          return r.te(o, s);
        },
        tm(o) {
          return r.tm(o);
        },
        getLocaleMessage(o) {
          return r.getLocaleMessage(o);
        },
        setLocaleMessage(o, s) {
          r.setLocaleMessage(o, s);
        },
        mergeLocaleMessage(o, s) {
          r.mergeLocaleMessage(o, s);
        },
        d(...o) {
          return Reflect.apply(r.d, r, [...o]);
        },
        getDateTimeFormat(o) {
          return r.getDateTimeFormat(o);
        },
        setDateTimeFormat(o, s) {
          r.setDateTimeFormat(o, s);
        },
        mergeDateTimeFormat(o, s) {
          r.mergeDateTimeFormat(o, s);
        },
        n(...o) {
          return Reflect.apply(r.n, r, [...o]);
        },
        getNumberFormat(o) {
          return r.getNumberFormat(o);
        },
        setNumberFormat(o, s) {
          r.setNumberFormat(o, s);
        },
        mergeNumberFormat(o, s) {
          r.mergeNumberFormat(o, s);
        },
        getChoiceIndex(o, s) {
          return -1;
        },
      };
    return ((n.__extender = a), n);
  }
}
const M2 = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent",
  },
  i18n: { type: Object },
};
function J7({ slots: e }, t) {
  return t.length === 1 && t[0] === "default"
    ? (e.default ? e.default() : []).reduce(
        (a, n) => [...a, ...(n.type === Ye ? n.children : [n])],
        [],
      )
    : t.reduce((r, a) => {
        const n = e[a];
        return (n && (r[a] = n()), r);
      }, {});
}
function xc(e) {
  return Ye;
}
const Z7 = g({
    name: "i18n-t",
    props: et(
      {
        keypath: { type: String, required: !0 },
        plural: {
          type: [Number, String],
          validator: (e) => $e(e) || !isNaN(e),
        },
      },
      M2,
    ),
    setup(e, t) {
      const { slots: r, attrs: a } = t,
        n = e.i18n || I2({ useScope: e.scope, __useComponent: !0 });
      return () => {
        const o = Object.keys(r).filter((f) => f !== "_"),
          s = {};
        (e.locale && (s.locale = e.locale),
          e.plural !== void 0 &&
            (s.plural = ne(e.plural) ? +e.plural : e.plural));
        const l = J7(t, o),
          c = n[Bn](e.keypath, l, s),
          u = et({}, a),
          i = ne(e.tag) || Le(e.tag) ? e.tag : xc();
        return Zr(i, u, c);
      };
    },
  }),
  vs = Z7;
function ex(e) {
  return Ve(e) && !ne(e[0]);
}
function yc(e, t, r, a) {
  const { slots: n, attrs: o } = t;
  return () => {
    const s = { part: !0 };
    let l = {};
    (e.locale && (s.locale = e.locale),
      ne(e.format)
        ? (s.key = e.format)
        : Le(e.format) &&
          (ne(e.format.key) && (s.key = e.format.key),
          (l = Object.keys(e.format).reduce(
            (d, p) => (r.includes(p) ? et({}, d, { [p]: e.format[p] }) : d),
            {},
          ))));
    const c = a(e.value, s, l);
    let u = [s.key];
    Ve(c)
      ? (u = c.map((d, p) => {
          const y = n[d.type],
            I = y ? y({ [d.type]: d.value, index: p, parts: c }) : [d.value];
          return (ex(I) && (I[0].key = `${d.type}-${p}`), I);
        }))
      : ne(c) && (u = [c]);
    const i = et({}, o),
      f = ne(e.tag) || Le(e.tag) ? e.tag : xc();
    return Zr(f, i, u);
  };
}
const tx = g({
    name: "i18n-n",
    props: et(
      {
        value: { type: Number, required: !0 },
        format: { type: [String, Object] },
      },
      M2,
    ),
    setup(e, t) {
      const r = e.i18n || I2({ useScope: e.scope, __useComponent: !0 });
      return yc(e, t, _c, (...a) => r[Hn](...a));
    },
  }),
  ms = tx,
  rx = g({
    name: "i18n-d",
    props: et(
      {
        value: { type: [Number, Date], required: !0 },
        format: { type: [String, Object] },
      },
      M2,
    ),
    setup(e, t) {
      const r = e.i18n || I2({ useScope: e.scope, __useComponent: !0 });
      return yc(e, t, dc, (...a) => r[Kn](...a));
    },
  }),
  xs = rx;
function ax(e, t) {
  const r = e;
  if (e.mode === "composition") return r.__getInstance(t) || e.global;
  {
    const a = r.__getInstance(t);
    return a != null ? a.__composer : e.global.__composer;
  }
}
function nx(e) {
  const t = (s) => {
    const { instance: l, modifiers: c, value: u } = s;
    if (!l || !l.$) throw Xe(Ge.UNEXPECTED_ERROR);
    const i = ax(e, l.$),
      f = ys(u);
    return [Reflect.apply(i.t, i, [...ws(f)]), i];
  };
  return {
    created: (s, l) => {
      const [c, u] = t(l);
      (p0 &&
        e.global === u &&
        (s.__i18nWatcher = gt(u.locale, () => {
          l.instance && l.instance.$forceUpdate();
        })),
        (s.__composer = u),
        (s.textContent = c));
    },
    unmounted: (s) => {
      (p0 &&
        s.__i18nWatcher &&
        (s.__i18nWatcher(), (s.__i18nWatcher = void 0), delete s.__i18nWatcher),
        s.__composer && ((s.__composer = void 0), delete s.__composer));
    },
    beforeUpdate: (s, { value: l }) => {
      if (s.__composer) {
        const c = s.__composer,
          u = ys(l);
        s.textContent = Reflect.apply(c.t, c, [...ws(u)]);
      }
    },
    getSSRProps: (s) => {
      const [l] = t(s);
      return { textContent: l };
    },
  };
}
function ys(e) {
  if (ne(e)) return { path: e };
  if (ge(e)) {
    if (!("path" in e)) throw Xe(Ge.REQUIRED_VALUE, "path");
    return e;
  } else throw Xe(Ge.INVALID_VALUE);
}
function ws(e) {
  const { path: t, locale: r, args: a, choice: n, plural: o } = e,
    s = {},
    l = a || {};
  return (
    ne(r) && (s.locale = r),
    $e(n) && (s.plural = n),
    $e(o) && (s.plural = o),
    [t, l, s]
  );
}
function ox(e, t, ...r) {
  const a = ge(r[0]) ? r[0] : {},
    n = !!a.useI18nComponentName;
  ((ye(a.globalInstall) ? a.globalInstall : !0) &&
    ([n ? "i18n" : vs.name, "I18nT"].forEach((s) => e.component(s, vs)),
    [ms.name, "I18nN"].forEach((s) => e.component(s, ms)),
    [xs.name, "I18nD"].forEach((s) => e.component(s, xs))),
    e.directive("t", nx(t)));
}
function sx(e, t, r) {
  return {
    beforeCreate() {
      const a = Qt();
      if (!a) throw Xe(Ge.UNEXPECTED_ERROR);
      const n = this.$options;
      if (n.i18n) {
        const o = n.i18n;
        if (
          (n.__i18n && (o.__i18n = n.__i18n),
          (o.__root = t),
          this === this.$root)
        )
          this.$i18n = Cs(e, o);
        else {
          ((o.__injectWithOption = !0),
            (o.__extender = r.__vueI18nExtend),
            (this.$i18n = Nn(o)));
          const s = this.$i18n;
          s.__extender && (s.__disposer = s.__extender(this.$i18n));
        }
      } else if (n.__i18n)
        if (this === this.$root) this.$i18n = Cs(e, n);
        else {
          this.$i18n = Nn({
            __i18n: n.__i18n,
            __injectWithOption: !0,
            __extender: r.__vueI18nExtend,
            __root: t,
          });
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      else this.$i18n = e;
      (n.__i18nGlobal && mc(t, n, n),
        (this.$t = (...o) => this.$i18n.t(...o)),
        (this.$rt = (...o) => this.$i18n.rt(...o)),
        (this.$tc = (...o) => this.$i18n.tc(...o)),
        (this.$te = (o, s) => this.$i18n.te(o, s)),
        (this.$d = (...o) => this.$i18n.d(...o)),
        (this.$n = (...o) => this.$i18n.n(...o)),
        (this.$tm = (o) => this.$i18n.tm(o)),
        r.__setInstance(a, this.$i18n));
    },
    mounted() {},
    unmounted() {
      const a = Qt();
      if (!a) throw Xe(Ge.UNEXPECTED_ERROR);
      const n = this.$i18n;
      (delete this.$t,
        delete this.$rt,
        delete this.$tc,
        delete this.$te,
        delete this.$d,
        delete this.$n,
        delete this.$tm,
        n.__disposer &&
          (n.__disposer(), delete n.__disposer, delete n.__extender),
        r.__deleteInstance(a),
        delete this.$i18n);
    },
  };
}
function Cs(e, t) {
  ((e.locale = t.locale || e.locale),
    (e.fallbackLocale = t.fallbackLocale || e.fallbackLocale),
    (e.missing = t.missing || e.missing),
    (e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn),
    (e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn),
    (e.formatFallbackMessages =
      t.formatFallbackMessages || e.formatFallbackMessages),
    (e.postTranslation = t.postTranslation || e.postTranslation),
    (e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage),
    (e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml),
    (e.sync = t.sync || e.sync),
    e.__composer[hc](t.pluralizationRules || e.pluralizationRules));
  const r = K0(e.locale, { messages: t.messages, __i18n: t.__i18n });
  return (
    Object.keys(r).forEach((a) => e.mergeLocaleMessage(a, r[a])),
    t.datetimeFormats &&
      Object.keys(t.datetimeFormats).forEach((a) =>
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]),
      ),
    t.numberFormats &&
      Object.keys(t.numberFormats).forEach((a) =>
        e.mergeNumberFormat(a, t.numberFormats[a]),
      ),
    e
  );
}
const lx = pr("global-vue-i18n");
function cx(e = {}, t) {
  const r =
      __VUE_I18N_LEGACY_API__ && ye(e.legacy)
        ? e.legacy
        : __VUE_I18N_LEGACY_API__,
    a = ye(e.globalInjection) ? e.globalInjection : !0,
    n = __VUE_I18N_LEGACY_API__ && r ? !!e.allowComposition : !0,
    o = new Map(),
    [s, l] = ix(e, r),
    c = pr("");
  function u(d) {
    return o.get(d) || null;
  }
  function i(d, p) {
    o.set(d, p);
  }
  function f(d) {
    o.delete(d);
  }
  {
    const d = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && r ? "legacy" : "composition";
      },
      get allowComposition() {
        return n;
      },
      async install(p, ...y) {
        if (
          ((p.__VUE_I18N_SYMBOL__ = c),
          p.provide(p.__VUE_I18N_SYMBOL__, d),
          ge(y[0]))
        ) {
          const O = y[0];
          ((d.__composerExtend = O.__composerExtend),
            (d.__vueI18nExtend = O.__vueI18nExtend));
        }
        let I = null;
        (!r && a && (I = mx(p, d.global)),
          __VUE_I18N_FULL_INSTALL__ && ox(p, d, ...y),
          __VUE_I18N_LEGACY_API__ && r && p.mixin(sx(l, l.__composer, d)));
        const R = p.unmount;
        p.unmount = () => {
          (I && I(), d.dispose(), R());
        };
      },
      get global() {
        return l;
      },
      dispose() {
        s.stop();
      },
      __instances: o,
      __getInstance: u,
      __setInstance: i,
      __deleteInstance: f,
    };
    return d;
  }
}
function I2(e = {}) {
  const t = Qt();
  if (t == null) throw Xe(Ge.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw Xe(Ge.NOT_INSTALLED);
  const r = ux(t),
    a = dx(r),
    n = vc(t),
    o = fx(e, n);
  if (__VUE_I18N_LEGACY_API__ && r.mode === "legacy" && !e.__useComponent) {
    if (!r.allowComposition) throw Xe(Ge.NOT_AVAILABLE_IN_LEGACY_MODE);
    return gx(t, o, a, e);
  }
  if (o === "global") return (mc(a, e, n), a);
  if (o === "parent") {
    let c = _x(r, t, e.__useComponent);
    return (c == null && (c = a), c);
  }
  const s = r;
  let l = s.__getInstance(t);
  if (l == null) {
    const c = et({}, e);
    ("__i18n" in n && (c.__i18n = n.__i18n),
      a && (c.__root = a),
      (l = T2(c)),
      s.__composerExtend && (l[Fn] = s.__composerExtend(l)),
      hx(s, t, l),
      s.__setInstance(t, l));
  }
  return l;
}
function ix(e, t, r) {
  const a = C0();
  {
    const n =
      __VUE_I18N_LEGACY_API__ && t ? a.run(() => Nn(e)) : a.run(() => T2(e));
    if (n == null) throw Xe(Ge.UNEXPECTED_ERROR);
    return [a, n];
  }
}
function ux(e) {
  {
    const t = We(e.isCE ? lx : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Xe(e.isCE ? Ge.NOT_INSTALLED_WITH_PROVIDE : Ge.UNEXPECTED_ERROR);
    return t;
  }
}
function fx(e, t) {
  return O0(e)
    ? "__i18n" in t
      ? "local"
      : "global"
    : e.useScope
      ? e.useScope
      : "local";
}
function dx(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function _x(e, t, r = !1) {
  let a = null;
  const n = t.root;
  let o = px(t, r);
  for (; o != null; ) {
    const s = e;
    if (e.mode === "composition") a = s.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = s.__getInstance(o);
      l != null && ((a = l.__composer), r && a && !a[gc] && (a = null));
    }
    if (a != null || n === o) break;
    o = o.parent;
  }
  return a;
}
function px(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent;
}
function hx(e, t, r) {
  (i2(() => {}, t),
    u2(() => {
      const a = r;
      e.__deleteInstance(t);
      const n = a[Fn];
      n && (n(), delete a[Fn]);
    }, t));
}
function gx(e, t, r, a = {}) {
  const n = t === "local",
    o = Bt(null);
  if (n && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Xe(Ge.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const s = ye(a.inheritLocale) ? a.inheritLocale : !ne(a.locale),
    l = le(!n || s ? r.locale.value : ne(a.locale) ? a.locale : Yr),
    c = le(
      !n || s
        ? r.fallbackLocale.value
        : ne(a.fallbackLocale) ||
            Ve(a.fallbackLocale) ||
            ge(a.fallbackLocale) ||
            a.fallbackLocale === !1
          ? a.fallbackLocale
          : l.value,
    ),
    u = le(K0(l.value, a)),
    i = le(ge(a.datetimeFormats) ? a.datetimeFormats : { [l.value]: {} }),
    f = le(ge(a.numberFormats) ? a.numberFormats : { [l.value]: {} }),
    d = n
      ? r.missingWarn
      : ye(a.missingWarn) || ur(a.missingWarn)
        ? a.missingWarn
        : !0,
    p = n
      ? r.fallbackWarn
      : ye(a.fallbackWarn) || ur(a.fallbackWarn)
        ? a.fallbackWarn
        : !0,
    y = n ? r.fallbackRoot : ye(a.fallbackRoot) ? a.fallbackRoot : !0,
    I = !!a.fallbackFormat,
    R = Ee(a.missing) ? a.missing : null,
    O = Ee(a.postTranslation) ? a.postTranslation : null,
    F = n ? r.warnHtmlMessage : ye(a.warnHtmlMessage) ? a.warnHtmlMessage : !0,
    L = !!a.escapeParameter,
    A = n ? r.modifiers : ge(a.modifiers) ? a.modifiers : {},
    B = a.pluralRules || (n && r.pluralRules);
  function K() {
    return [l.value, c.value, u.value, i.value, f.value];
  }
  const z = me({
      get: () => (o.value ? o.value.locale.value : l.value),
      set: (w) => {
        (o.value && (o.value.locale.value = w), (l.value = w));
      },
    }),
    j = me({
      get: () => (o.value ? o.value.fallbackLocale.value : c.value),
      set: (w) => {
        (o.value && (o.value.fallbackLocale.value = w), (c.value = w));
      },
    }),
    k = me(() => (o.value ? o.value.messages.value : u.value)),
    te = me(() => i.value),
    ue = me(() => f.value);
  function q() {
    return o.value ? o.value.getPostTranslationHandler() : O;
  }
  function ie(w) {
    o.value && o.value.setPostTranslationHandler(w);
  }
  function Ae() {
    return o.value ? o.value.getMissingHandler() : R;
  }
  function Fe(w) {
    o.value && o.value.setMissingHandler(w);
  }
  function S(w) {
    return (K(), w());
  }
  function _e(...w) {
    return o.value
      ? S(() => Reflect.apply(o.value.t, null, [...w]))
      : S(() => "");
  }
  function xe(...w) {
    return o.value ? Reflect.apply(o.value.rt, null, [...w]) : "";
  }
  function Je(...w) {
    return o.value
      ? S(() => Reflect.apply(o.value.d, null, [...w]))
      : S(() => "");
  }
  function tt(...w) {
    return o.value
      ? S(() => Reflect.apply(o.value.n, null, [...w]))
      : S(() => "");
  }
  function Be(w) {
    return o.value ? o.value.tm(w) : {};
  }
  function Ke(w, V) {
    return o.value ? o.value.te(w, V) : !1;
  }
  function _t(w) {
    return o.value ? o.value.getLocaleMessage(w) : {};
  }
  function st(w, V) {
    o.value && (o.value.setLocaleMessage(w, V), (u.value[w] = V));
  }
  function mt(w, V) {
    o.value && o.value.mergeLocaleMessage(w, V);
  }
  function ze(w) {
    return o.value ? o.value.getDateTimeFormat(w) : {};
  }
  function U(w, V) {
    o.value && (o.value.setDateTimeFormat(w, V), (i.value[w] = V));
  }
  function ae(w, V) {
    o.value && o.value.mergeDateTimeFormat(w, V);
  }
  function ee(w) {
    return o.value ? o.value.getNumberFormat(w) : {};
  }
  function oe(w, V) {
    o.value && (o.value.setNumberFormat(w, V), (f.value[w] = V));
  }
  function be(w, V) {
    o.value && o.value.mergeNumberFormat(w, V);
  }
  const C = {
    get id() {
      return o.value ? o.value.id : -1;
    },
    locale: z,
    fallbackLocale: j,
    messages: k,
    datetimeFormats: te,
    numberFormats: ue,
    get inheritLocale() {
      return o.value ? o.value.inheritLocale : s;
    },
    set inheritLocale(w) {
      o.value && (o.value.inheritLocale = w);
    },
    get availableLocales() {
      return o.value ? o.value.availableLocales : Object.keys(u.value);
    },
    get modifiers() {
      return o.value ? o.value.modifiers : A;
    },
    get pluralRules() {
      return o.value ? o.value.pluralRules : B;
    },
    get isGlobal() {
      return o.value ? o.value.isGlobal : !1;
    },
    get missingWarn() {
      return o.value ? o.value.missingWarn : d;
    },
    set missingWarn(w) {
      o.value && (o.value.missingWarn = w);
    },
    get fallbackWarn() {
      return o.value ? o.value.fallbackWarn : p;
    },
    set fallbackWarn(w) {
      o.value && (o.value.missingWarn = w);
    },
    get fallbackRoot() {
      return o.value ? o.value.fallbackRoot : y;
    },
    set fallbackRoot(w) {
      o.value && (o.value.fallbackRoot = w);
    },
    get fallbackFormat() {
      return o.value ? o.value.fallbackFormat : I;
    },
    set fallbackFormat(w) {
      o.value && (o.value.fallbackFormat = w);
    },
    get warnHtmlMessage() {
      return o.value ? o.value.warnHtmlMessage : F;
    },
    set warnHtmlMessage(w) {
      o.value && (o.value.warnHtmlMessage = w);
    },
    get escapeParameter() {
      return o.value ? o.value.escapeParameter : L;
    },
    set escapeParameter(w) {
      o.value && (o.value.escapeParameter = w);
    },
    t: _e,
    getPostTranslationHandler: q,
    setPostTranslationHandler: ie,
    getMissingHandler: Ae,
    setMissingHandler: Fe,
    rt: xe,
    d: Je,
    n: tt,
    tm: Be,
    te: Ke,
    getLocaleMessage: _t,
    setLocaleMessage: st,
    mergeLocaleMessage: mt,
    getDateTimeFormat: ze,
    setDateTimeFormat: U,
    mergeDateTimeFormat: ae,
    getNumberFormat: ee,
    setNumberFormat: oe,
    mergeNumberFormat: be,
  };
  function T(w) {
    ((w.locale.value = l.value),
      (w.fallbackLocale.value = c.value),
      Object.keys(u.value).forEach((V) => {
        w.mergeLocaleMessage(V, u.value[V]);
      }),
      Object.keys(i.value).forEach((V) => {
        w.mergeDateTimeFormat(V, i.value[V]);
      }),
      Object.keys(f.value).forEach((V) => {
        w.mergeNumberFormat(V, f.value[V]);
      }),
      (w.escapeParameter = L),
      (w.fallbackFormat = I),
      (w.fallbackRoot = y),
      (w.fallbackWarn = p),
      (w.missingWarn = d),
      (w.warnHtmlMessage = F));
  }
  return (
    Rl(() => {
      if (e.proxy == null || e.proxy.$i18n == null)
        throw Xe(Ge.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
      const w = (o.value = e.proxy.$i18n.__composer);
      t === "global"
        ? ((l.value = w.locale.value),
          (c.value = w.fallbackLocale.value),
          (u.value = w.messages.value),
          (i.value = w.datetimeFormats.value),
          (f.value = w.numberFormats.value))
        : n && T(w);
    }),
    C
  );
}
const vx = ["locale", "fallbackLocale", "availableLocales"],
  bs = ["t", "rt", "d", "n", "tm", "te"];
function mx(e, t) {
  const r = Object.create(null);
  return (
    vx.forEach((n) => {
      const o = Object.getOwnPropertyDescriptor(t, n);
      if (!o) throw Xe(Ge.UNEXPECTED_ERROR);
      const s = He(o.value)
        ? {
            get() {
              return o.value.value;
            },
            set(l) {
              o.value.value = l;
            },
          }
        : {
            get() {
              return o.get && o.get();
            },
          };
      Object.defineProperty(r, n, s);
    }),
    (e.config.globalProperties.$i18n = r),
    bs.forEach((n) => {
      const o = Object.getOwnPropertyDescriptor(t, n);
      if (!o || !o.value) throw Xe(Ge.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${n}`, o);
    }),
    () => {
      (delete e.config.globalProperties.$i18n,
        bs.forEach((n) => {
          delete e.config.globalProperties[`$${n}`];
        }));
    }
  );
}
G7();
__INTLIFY_JIT_COMPILATION__ ? rs(N7) : rs(F7);
P7(f7);
k7(rc);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = Gt();
  ((e.__INTLIFY__ = !0), y7(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__));
}
const xx = {
    messages: {
      lightSetting: "Light Setting",
      performanceSetting: "Performance Setting",
      customKey: "Custom Key",
      advancedKey: "Advanced Key",
      macroManagement: "Macro Management",
      update: "Update",
      about: "About",
      screenSetting: "Screen Setting",
      configExport: "Config Export",
      driveVersion: "Drive Version",
      connected: "Connected",
      notConnect: "Not Connect",
      warning: "Warning",
      warning2: "Warning！",
      confirm: "Confirm",
      cancel: "Cancel",
      tip: "Tip",
      success: "Success",
      reConnect: "Reconnect keyboard",
      connect: "connect",
      yesIKnow: "YES!TO UPDATE!",
      save: "save",
      notifyInputText:
        "After the input is completed, [Press Enter] or [Click blank area] will take effect",
      notifyGlobalTouchTravelText: "Global travel has been set to",
      notifySingleTouchTravelText:
        "The trigger travel of the selected button has been set to",
      notifyQuickTouchTravelText1:
        "The RT trigger (press down) trip of the selected key has been set to",
      notifyQuickTouchTravelText2:
        "The RT reset (lift) trip of the selected button has been set to",
      notifyQuickTouchTravelText3:
        "The first trigger trip of the selected button has been set to",
      notifyDeadBandText1: "The press (trigger) dead zone is set to",
      notifyDeadBandText2: "The lift (release) dead zone is set to",
      waitConnect:
        "Waiting for keyboard connection, if the keyboard does not automatically connect, please click the Connect button, and then select Keyboard Connection in the popup window in the upper left corner of the interface.",
      toUpdatePage:
        "The keyboard is currently in upgrade mode, and functions such as input and lighting cannot be used. Please go to upgrade page to upgrade firmware.",
      connectYour: "Connect your",
      axisKeyboard: "Keyboard",
      connectKeyboard: "Connect Keyboard",
      changeConfig: "Config List",
      config1: "profile 1",
      config2: "profile 2",
      config3: "profile 3",
      config4: "profile 4",
      configDialogText:
        "The keyboard needs to be reconnected after the configuration switchover. Do you want to confirm the configuration switchover?",
      mainLightSetting: "Keyboard Light Setting",
      mainLight: "Main Light",
      ambientLight: "Ambient Light",
      lightAdvancedSetting: "Light Advanced Setting",
      mainLightMode: "Mode",
      close: "close",
      static: "static",
      dynamic: "dynamic",
      custom: "custom",
      color: "color",
      staticColor1: "color 1",
      staticColor2: "color 2",
      staticColor3: "color 3",
      staticColor4: "color 4",
      staticColor5: "color 5",
      staticColor6: "color 6",
      staticColor7: "color 7",
      colorfur: "colorful",
      staticLampEffect: "Static Lamp Effect",
      dynamicLampEffect: "Dynamic Lamp Effect",
      luminance: "Luminance",
      speed: "Speed",
      sleepTime: "Sleep Time",
      reverse: "Reverse",
      never: "Never",
      colorSetting: "Color Setting",
      normalTravelSetting: "Normal Travel Setting",
      rapidTriggerSetting: "Rapid Trigger Setting",
      travelSetting: "Travel Setting",
      deadBandSetting: "Dead Band Setting",
      advancedSetting: "Advanced Setting",
      keyboardAdjusting: "Keyboard Adjusting",
      switchAxis: "Switch Axis",
      travelMode: "Trigger mode",
      touchTravel: "Trigger travel",
      pressTravel: "Press stroke",
      releaseTravel: "Lift stroke",
      globalTravel: "Global Travel",
      globalTravelText:
        "Set the global trigger travel, non-single key trigger and RT trigger keys take effect, the travel will not be displayed on the key.",
      singleKeyTravel: "Single Key Travel",
      singleKeyTravelText:
        "Set the single-key trigger stroke, the green stroke value displayed in the upper left corner of the key is set.",
      singleKeyTravelText2:
        "Set the first trigger travel, the green travel value is displayed as set in the upper left corner of the button.",
      checkKey: "Check Key",
      travelTest: "Travel Test",
      rapidTrigger: "Rapid Trigger",
      dynamicResetTravel: "Dynamic Reset Travel(Reset)",
      dynamicResetTravelText:
        "Set RT reset trip, the lower right corner of the button displays the orange-red trip value as set.",
      dynamicTriggerTravel: "Dynamic Trigger Travel(Press)",
      dynamicTriggerTravelText:
        "Set RT trigger travel, the blue travel value displayed in the lower left corner of the button is set.",
      firstTravel: "First trigger stroke (selected button takes effect)",
      selectAll: "Select All",
      numberKey: "Number Key",
      letterKey: "Letter Key",
      unCheck: "unCheck",
      resetTrvel: "Reset Trvel",
      triggerOptimization: "Trigger Optimization",
      triggerOptimizationDescription1:
        "The total stroke of some shafts will have a tolerance of ±0.2mm, and setting 0 dead zone may cause false triggering or broken contact.",
      triggerOptimizationDescription2:
        "When the trigger/bottom touch optimization is turned on, the dead zone is limited to >=0.2mm to avoid false contact and bottom break contact.",
      bottomOptimization: "Bottom Optimization",
      deadpress: "Press",
      trigger: "Trigger",
      release: "Release",
      reset: "Reset",
      deadBandSettingText:
        "The deadzone is a global setting. To prevent miscontact or broken contact, you are advised to set the deadzone to",
      pollingRate: "Polling Rate",
      pollingRateDialogText:
        "Switching return will restart the keyboard and reconnect. Do you want to confirm switching return?",
      superResponse: "Super Response",
      superResponseDescription1:
        "Super Response mode will increase the response speed of the keyboard as much as possible, and bring you the ultimate input experience.",
      superResponseDescription2:
        "However, after the super response mode is enabled, the trigger accuracy will be slightly reduced.",
      axisSetting: "Axis Setting",
      topDeadSwitch: "Top dead zone switch",
      adjustingInstruction: "Adjusting Instruction",
      adjustingInstruction1: "Calibrate for a better user experience",
      adjustingInstruction2:
        "When calibrating, press the button completely and hold it for 1 to 2 seconds, while slightly shaking the button up and down. Note: Pressing and lifting the key quickly can result in inaccurate calibration results.",
      startAdjusting: "Start Adjusting",
      saveAdjusting: "Save Adjusting",
      savingAdjusting: "Saving Adjusting...",
      realTimeTravel: "Real-Time Travel",
      customAxis: "Custom Axis",
      axisInfo: "Axis Info",
      axisName: "Axis Name",
      rangeOfTravel: "Range Of Travel",
      letter: "letter",
      numberKey: "Number Key",
      symbolicKey: "Symbolic Key",
      basicKey: "Basic Key",
      functionKey: "Function Key",
      keyboardControl: "Keyboard Control",
      mouse: "mouse",
      noAdvancedKey: "The advanced key has not been set.",
      keyTest: "Key Test",
      hold: "hold",
      click: "click",
      LongPressTriggerDelay: "Long press trigger delay (unit: ms)",
      socdMode1:
        "Back cover (the button pressed back overwrites the previous one)",
      socdMode2: "Keys in the red box take precedence",
      socdMode3: "Keys in the blue box take precedence",
      socdMode4: "Neutral (does not work when both keys are pressed)",
      bindMacro: "Bind Macro",
      macro1: "Click to execute",
      macro2: "Click Repeat (click Stop again)",
      macro3: "Press Repeat execution (pop-up stops immediately)",
      macro4: "Press Repeat (stop after popping to complete this macro)",
      macro5: "Number of repetitions:",
      macro6: "Repeat interval:",
      edit: "Edit",
      delete: "Delete",
      recording: "recording",
      startRecording: "Start Recording",
      saveRecording: "Save Recording",
      deleteMacro: "Delete Macro",
      copyMacro: "Copy Macro",
      currentKey: "Current Key",
      updateMacro: "update",
      setMacroName: "Set Macro Name",
      key: "Key",
      status: "Status",
      delay: "Delay",
      units: "Units",
      putUp: "Put Up",
      press: "Press",
      add: "Add",
      addPos: "Insertion position",
      front: "overinsert",
      behind: "Insert below",
      macroName: "Macro Name",
      dateCreated: "Date Created",
      operationLength: "Operation Length",
      operation: "Operation",
      toBootMode: "Enter upgrade mode",
      toBootModeDescription1:
        "Click to enter the upgrade mode button, reconnect the keyboard to upgrade",
      toBootModeDescription2: "Please reconnect the keyboard！",
      toBootModeDescription3:
        "Currently in upgrade mode, the keyboard can only be used normally after upgrading the firmware!",
      toBootModeDescription4:
        "The system is in upgrade mode and being upgraded!",
      onlineUpdate: "Online Update",
      onlineUpdateDescription:
        "Keep up to date with the latest firmware for the best keyboard experience!",
      firmwareVersion: "Firmware Version",
      latestVersion: "Latest Version",
      localUpdate: "Local Update",
      localUpdateDescription:
        "Manually select the bin file on the local computer to upgrade!",
      selectFirmware: "Select Firmware",
      update: "Update",
      updateDescription: "Select a bin file and click the Upgrade button.",
      factoryDataReset: "Factory Data Reset",
      factoryDataResetDescription:
        "Restore the keyboard parameters to their original state!",
      toBootDialogText1: "Entering upgrade mode ",
      toBootDialogText2: "will erase the firmware of the current keyboard ",
      toBootDialogText3:
        "and reconnect the keyboard. Do you want to enter upgrade mode?",
      toBootDialogText4:
        "The keyboard program will be cleared after this operation! It cannot be used without upgrading the firmware! Do you want to continue erasing?",
      keyboardInfo: "Keyboard information",
      keyboardName: "Keyboard name",
      keyboardSN: "Keyboard SN",
      FWVersion: "Firmware version",
      keyboardRunMode: "Keyboard running mode",
      appMode: "app Mode",
      bootMode: "boot Mode",
      upgradeDescription: "Upgrade Description",
      upgradeDescriptionText1: "Please read carefully before upgrading!!!",
      upgradeDescriptionText2: "Click the button to enter Upgrade mode",
      upgradeDescriptionText3:
        "Note: This operation will erase the firmware of the keyboard, and the keyboard will not work properly if you do not complete the upgrade after clicking! The driver will jump to the connection page, if not automatically jump back to the upgrade page, please manually connect the keyboard back to the upgrade page!",
      upgradeDescriptionText4:
        "Click the Update button for online or local updates",
      upgradeDescriptionText5:
        "Note: These two buttons will not appear when the keyboard is not in upgrade mode! Local updates require manually selecting the firmware that has been downloaded locally!",
      upgradeDescriptionText6: "Wait for the upgrade to complete",
      upgradeDescriptionText7:
        "Note: Do not plug or unplug the keyboard during the upgrade process. If the upgrade is stuck or fails, shut down the driver completely and open the driver again to upgrade again!",
      upgradeDescriptionText8: "Upgrade completed",
      alreadyLatestVersion: "This is the latest version. No update is required",
      notInUpgradeMode: "Not in upgrade mode",
      updating: "Updating",
      macroBreak: "Macro Break",
      advancedKey1: "Select the advanced key type to bind the key to:",
      advancedKey2:
        "A single key achieves four functions: you can bind one to four functions depending on the four different press levels.",
      advancedKey3:
        "A single key triggers three different keys at three different depths.",
      advancedKey4: "Press and hold keys to achieve different functions.",
      advancedKey5:
        "Click the button to enable continuous triggering, and press and hold the button to trigger normally.",
      advancedKey6: "A single key can send another key when released.",
      advancedKey7:
        "Bind two keys and press the last key to release the last key. Only one key is triggered at a time.",
      advancedKey8:
        "Set a string of instructions to the key to achieve the sending of multiple keys.",
      advancedKey9: "Bind two buttons, and the deeper one will trigger.",
      mode: "mode",
      socdStr1:
        "Binding position (two keys in the specified position of the keyboard are bound to each other)",
      socdStr2: "Binding key values (two key values bound to each other)",
      selectPic: "选择图片",
      updatePic: "更新图片",
      updatePictureDescription: "更新图片描述",
      selectScreenFw: "选择固件",
      updateScreenFw: "升级",
      updateScreenFwDescription: "请选择屏幕固件文件（.bin）",
      morenUpdateTip:
        "V1.0.4 firmware issue detected, recommended upgrade to the latest V1.0.5 version!",
      startTest: "Start Test",
      stopTest: "Stop Test",
      keyTriggered: "Key Triggered",
      keyReleased: "Key Released",
      configText: "Config",
      currentConfig: "Current Config",
      notice1: "The keyboard supports a maximum of 8 macro keys",
      notice2:
        "This is not the firmware for Edge60 PlayerEdition, please select the correct firmware!",
      notice3:
        "This is not the firmware for Edge60 Discovery Edition, please select the correct firmware!",
      notice4: "Firmware upgrade complete! Reconnecting the keyboard!",
      notice5: "Firmware upgrade failed!",
      notice6: "Each macro can store up to 64 actions!",
      notice7: "Please select a macro to copy!",
      notice8: "Please select a macro to delete!",
      notice9: "The macro name cannot be empty!",
      notice10: "The macro names are duplicated!",
    },
  },
  yx = {
    messages: {
      lightSetting: "灯光设置",
      performanceSetting: "性能设置",
      customKey: "自定义按键",
      advancedKey: "高级键",
      macroManagement: "宏管理",
      update: "更新",
      about: "关于",
      screenSetting: "屏幕设置",
      configExport: "配置导出",
      driveVersion: "驱动版本",
      connected: "已连接",
      notConnect: "未连接",
      warning: "警告",
      warning2: "再次警告！",
      confirm: "确认",
      cancel: "取消",
      tip: "提示",
      success: "成功",
      reConnect: "重新连接",
      connect: "连接",
      yesIKnow: "我知道了，去升级！",
      save: "保存",
      notifyInputText: "输入完毕后【回车】或【点击空白区域】生效",
      notifyGlobalTouchTravelText: "已将全局行程设置为",
      notifySingleTouchTravelText: "已将选中按键的触发行程设置为",
      notifyQuickTouchTravelText1: "已将选中按键的RT触发(按下)行程设置为",
      notifyQuickTouchTravelText2: "已将选中按键的RT重置(抬起)行程设置为",
      notifyQuickTouchTravelText3: "已将选中按键的首次触发行程设置为",
      notifyDeadBandText1: "已将按下(触发)死区设置为",
      notifyDeadBandText2: "已将抬起(释放)死区设置为",
      waitConnect:
        "正在等待键盘连接，若键盘没有自动连接，请点击连接按钮，然后在界面左上角的弹出窗口中选择键盘连接。",
      toUpdatePage:
        "当前键盘正处于升级模式，无法使用输入及灯光等功能，请到升级页面升级固件。",
      connectYour: "连接您的",
      axisKeyboard: "磁轴键盘",
      connectKeyboard: "连接键盘",
      changeConfig: "配置切换",
      config1: "配置1",
      config2: "配置2",
      config3: "配置3",
      config4: "配置4",
      configDialogText: "切换配置后键盘需要重新连接，是否确认切换配置？",
      mainLightSetting: "主面板灯光设置",
      mainLight: "主面板灯效",
      ambientLight: "氛围灯效",
      lightAdvancedSetting: "灯光高级设置",
      mainLightMode: "主面板灯光模式",
      close: "关闭",
      static: "静态",
      dynamic: "动态",
      custom: "自定义",
      color: "颜色",
      staticColor1: "颜色1",
      staticColor2: "颜色2",
      staticColor3: "颜色3",
      staticColor4: "颜色4",
      staticColor5: "颜色5",
      staticColor6: "颜色6",
      staticColor7: "颜色7",
      colorfur: "彩色",
      staticLampEffect: "静态灯效",
      dynamicLampEffect: "动态灯效",
      luminance: "亮度",
      speed: "速度",
      sleepTime: "休眠时间",
      reverse: "反向",
      never: "永不",
      colorSetting: "颜色设置",
      normalTravelSetting: "普通模式",
      rapidTriggerSetting: "RT模式",
      travelSetting: "行程设置",
      deadBandSetting: "死区设置",
      advancedSetting: "高级设置",
      keyboardAdjusting: "键盘校准",
      switchAxis: "选轴",
      travelMode: "触发模式",
      touchTravel: "触发行程",
      pressTravel: "按压行程",
      releaseTravel: "抬起行程",
      globalTravel: "全局触发",
      globalTravelText:
        "设置全局触发行程，非单键触发和RT触发的按键生效，行程不会在按键上显示。",
      singleKeyTravel: "单键触发",
      singleKeyTravelText:
        "设置单键触发行程，按键左上角显示绿色行程值为已设置。",
      singleKeyTravelText2:
        "设置首次触发行程，按键左上角显示绿色行程值为已设置。",
      singleKeyRelease: "单键释放",
      singleKeyReleaseText:
        "设置单键释放行程，按键右上角显示棕色行程值为已设置。",
      checkKey: "选中按键",
      travelTest: "行程测试",
      rapidTrigger: "快速触发",
      dynamicResetTravel: "动态重置行程(抬起)",
      dynamicResetTravelText:
        "设置RT重置行程，按键右下角显示橙红色行程值为已设置。",
      dynamicTriggerTravel: "动态触发行程(按下)",
      dynamicTriggerTravelText:
        "设置RT触发行程，按键左下角显示蓝色行程值为已设置。",
      firstTravel: "首次触发行程（选中的按键生效）",
      selectAll: "全选",
      numberKey: "数字键",
      letterKey: "字母键",
      unCheck: "取消选中",
      resetTrvel: "重置行程",
      triggerOptimization: "触发优化",
      triggerOptimizationDescription1:
        "部分轴体的总行程会有±0.2mm的公差，设置0死区可能会存在误触发或断触现象。",
      triggerOptimizationDescription2:
        "开启触发/触底优化后，会限制死区>=0.2mm，避免误触和底部断触。",
      bottomOptimization: "触底优化",
      deadpress: "顶部按下",
      trigger: "触发",
      release: "底部抬起",
      reset: "重置",
      deadBandSettingText:
        "死区设置为全局设置，为防止误触或断触，推荐将死区设置为",
      pollingRate: "回报率",
      pollingRateDialogText:
        "切换回报率将会重启键盘并重新连接，是否确认切换回报率？",
      superResponse: "超级响应模式",
      superResponseDescription1:
        "超级响应模式会尽可能提升键盘的响应速度，为您带来极致的输入体验。",
      superResponseDescription2: "但开启超级响应模式后，触发精度会略微下降。",
      axisSetting: "轴体设置",
      topDeadSwitch: "顶部死区开关",
      adjustingInstruction: "校准说明",
      adjustingInstruction1: "校准以获得更好的使用体验",
      adjustingInstruction2:
        "校准时请用正常力度按下按键。注意：快速的按下并抬起按键会导致校准的结果不准确。",
      startAdjusting: "开始校准",
      saveAdjusting: "保存校准",
      savingAdjusting: "正在保存校准...",
      realTimeTravel: "实时行程",
      customAxis: "自定义轴体",
      axisInfo: "轴体信息",
      axisName: "轴体名称",
      rangeOfTravel: "行程范围",
      letter: "字母",
      numberKey: "数字键",
      symbolicKey: "符号键",
      basicKey: "基础键",
      functionKey: "功能键",
      keyboardControl: "键盘控制",
      mouse: "鼠标键",
      noAdvancedKey: "还未设置高级键",
      keyTest: "按键测试",
      hold: "按住",
      click: "单击",
      LongPressTriggerDelay: "长按触发延时（单位：ms）",
      socdMode1: "后覆盖（后按下的按键会覆盖前一个）",
      socdMode2: "红框中的按键优先",
      socdMode3: "蓝框中的按键优先",
      socdMode4: "中性（两个按键都按下都不生效）",
      bindMacro: "绑定宏",
      macro1: "单击执行",
      macro2: "点击重复执行，再次点击停止",
      macro3: "按下重复执行，弹起立刻停止",
      macro4: "按下重复执行，弹起后完成此次宏后停止",
      macro5: "重复次数：",
      macro6: "重复间隔：",
      edit: "编辑",
      delete: "删除",
      recording: "正在录制",
      startRecording: "开始录制",
      saveRecording: "保存录制",
      deleteMacro: "删除宏",
      copyMacro: "复制宏",
      key: "按键",
      status: "状态",
      delay: "延时",
      units: "单位",
      putUp: "抬起",
      press: "按下",
      add: "增加",
      addPos: "插入位置",
      front: "在上方插入",
      behind: "在下方插入",
      currentKey: "当前按键",
      updateMacro: "更新",
      setMacroName: "设置宏的名字",
      macroName: "宏名称",
      dateCreated: "创建日期",
      operationLength: "操作长度",
      operation: "操作",
      toBootMode: "进入升级模式",
      toBootModeDescription1: "点击进入升级模式按钮后，重新连接键盘即可升级",
      toBootModeDescription2: "请重新连接键盘！",
      toBootModeDescription3:
        "当前已处于升级模式，升级固件后键盘才能正常使用！",
      toBootModeDescription4: "当前已处于升级模式，正在升级！",
      onlineUpdate: "在线更新",
      onlineUpdateDescription: "时刻保持最新版本固件以获得键盘最佳的使用体验！",
      firmwareVersion: "固件版本",
      latestVersion: "最新版本",
      localUpdate: "本地更新",
      localUpdateDescription: "手动选择本地电脑中的bin文件进行升级！",
      selectFirmware: "选择固件",
      update: "更新",
      updateDescription: "选择一个bin文件并点击升级按钮",
      factoryDataReset: "恢复出厂设置",
      factoryDataResetDescription: "将键盘的参数恢复到最初的状态！",
      toBootDialogText1: "进入升级模式",
      toBootDialogText2: "将会擦除当前键盘的固件",
      toBootDialogText3: "并重新连接键盘，是否确认进入升级模式？",
      toBootDialogText4:
        "此操作执行后键盘程序将被清除！不升级固件将无法使用！是否确认继续擦除？",
      keyboardInfo: "键盘信息",
      keyboardName: "键盘名称",
      keyboardSN: "键盘SN",
      FWVersion: "固件版本",
      keyboardRunMode: "键盘运行模式",
      appMode: "app模式",
      bootMode: "升级模式",
      upgradeDescription: "升级说明",
      upgradeDescriptionText1: "请仔细阅读后再进行升级操作！！！",
      upgradeDescriptionText2: "点击进入升级模式的按钮",
      upgradeDescriptionText3:
        "注意：此操作会擦除键盘的固件，点击后不完成升级键盘将无法正常工作！驱动会跳转到连接页面，若不能自动跳转回升级页面，请手动连接键盘回到升级页面！",
      upgradeDescriptionText4: "点击在线或本地更新的更新按钮",
      upgradeDescriptionText5:
        "注意：键盘不处于升级模式这两个按钮将不会显示！本地更新需要手动选择已经下载到本地的固件！",
      upgradeDescriptionText6: "等待升级完成",
      upgradeDescriptionText7:
        "注意：升级过程中请不要拔插键盘，若升级卡住或升级失败，完全关闭驱动再重新打开驱动重新升级即可！",
      upgradeDescriptionText8: "升级完成",
      alreadyLatestVersion: "已是最新版本，无需更新",
      notInUpgradeMode: "未处于升级模式",
      updating: "升级中",
      macroBreak: "宏中断",
      advancedKey1: "选择按键要绑定的高级键类型：",
      advancedKey2:
        "单个按键实现四种功能：您可以根据4种不同的按压程度绑定1至4种功能。",
      advancedKey3: "单个按键可在三个不同的深度触发三个不同的按键。",
      advancedKey4: "按住和单击按键实现不同功能。",
      advancedKey5: "单击按键开启持续触发，按住按键为正常触发。",
      advancedKey6: "单个按键可在松开时发送另一个按键。",
      advancedKey7:
        "绑定两个按键，后按下的按键会强制释放前一个按键，同一时刻只会触发一个按键。",
      advancedKey8: "给按键设置一串指令，实现发送多个按键。",
      advancedKey9: "绑定两个按键，按压程度更深的会触发。",
      mode: "模式",
      socdStr1: "绑定位置（键盘指定位置的两个按键互相绑定）",
      socdStr2: "绑定键值（两个键值互相绑定）",
      selectPic: "选择图片",
      updatePic: "更新图片",
      updatePictureDescription: "请选择图片bin文件",
      selectScreenFw: "选择固件",
      updateScreenFw: "升级",
      updateScreenFwDescription: "请选择屏幕固件文件（.bin）",
      morenUpdateTip:
        "检测到V1.0.4版本固件存在问题，建议升级到最新的V1.0.5版本！",
      startTest: "开始测试",
      stopTest: "停止测试",
      keyTriggered: "按键已触发",
      keyReleased: "按键未触发",
      axisChangeSuccess: "已将选中按键的轴体设置为：{axis}",
      operationFailed: "操作失败，请重试",
      configText: "配置",
      currentConfig: "当前配置",
      notice1: "键盘最大支持绑定8个宏按键",
      notice2: "这不是Edge60 PlayerEdition的固件,请选择正确的固件！",
      notice3: "这不是Edge60 探索版的固件,请选择正确的固件！",
      notice4: "固件升级完成！正在重新连接键盘！",
      notice5: "固件升级失败！",
      notice6: "每个宏最多储存64个动作！",
      notice7: "请选择一个宏进行复制！",
      notice8: "请选择一个宏进行删除！",
      notice9: "宏名称不能为空！",
      notice10: "宏名称重复！",
    },
  },
  wx = { zh: yx, en: xx },
  Cx = cx({
    globalInjection: !0,
    legacy: !1,
    locale: localStorage.getItem("lang") || "zh",
    messages: wx,
  }),
  bx = "modulepreload",
  Tx = function (e) {
    return "/" + e;
  },
  Ts = {},
  wc = function (t, r, a) {
    let n = Promise.resolve();
    if (r && r.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        s =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      n = Promise.all(
        r.map((l) => {
          if (((l = Tx(l)), l in Ts)) return;
          Ts[l] = !0;
          const c = l.endsWith(".css"),
            u = c ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${u}`)) return;
          const i = document.createElement("link");
          if (
            ((i.rel = c ? "stylesheet" : bx),
            c || ((i.as = "script"), (i.crossOrigin = "")),
            (i.href = l),
            s && i.setAttribute("nonce", s),
            document.head.appendChild(i),
            c)
          )
            return new Promise((f, d) => {
              (i.addEventListener("load", f),
                i.addEventListener("error", () =>
                  d(new Error(`Unable to preload CSS for ${l}`)),
                ));
            });
        }),
      );
    }
    return n
      .then(() => t())
      .catch((o) => {
        const s = new Event("vite:preloadError", { cancelable: !0 });
        if (((s.payload = o), window.dispatchEvent(s), !s.defaultPrevented))
          throw o;
      });
  };
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Kr = typeof document < "u";
function Cc(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Mx(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && Cc(e.default))
  );
}
const Ie = Object.assign;
function un(e, t) {
  const r = {};
  for (const a in t) {
    const n = t[a];
    r[a] = Pt(n) ? n.map(e) : e(n);
  }
  return r;
}
const ma = () => {},
  Pt = Array.isArray,
  bc = /#/g,
  Ix = /&/g,
  Sx = /\//g,
  Lx = /=/g,
  Ax = /\?/g,
  Tc = /\+/g,
  Dx = /%5B/g,
  Px = /%5D/g,
  Mc = /%5E/g,
  kx = /%60/g,
  Ic = /%7B/g,
  Ex = /%7C/g,
  Sc = /%7D/g,
  Rx = /%20/g;
function S2(e) {
  return encodeURI("" + e)
    .replace(Ex, "|")
    .replace(Dx, "[")
    .replace(Px, "]");
}
function Ox(e) {
  return S2(e).replace(Ic, "{").replace(Sc, "}").replace(Mc, "^");
}
function zn(e) {
  return S2(e)
    .replace(Tc, "%2B")
    .replace(Rx, "+")
    .replace(bc, "%23")
    .replace(Ix, "%26")
    .replace(kx, "`")
    .replace(Ic, "{")
    .replace(Sc, "}")
    .replace(Mc, "^");
}
function Vx(e) {
  return zn(e).replace(Lx, "%3D");
}
function Bx(e) {
  return S2(e).replace(bc, "%23").replace(Ax, "%3F");
}
function Kx(e) {
  return e == null ? "" : Bx(e).replace(Sx, "%2F");
}
function La(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const Hx = /\/$/,
  Fx = (e) => e.replace(Hx, "");
function fn(e, t, r = "/") {
  let a,
    n = {},
    o = "",
    s = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return (
    l < c && l >= 0 && (c = -1),
    c > -1 &&
      ((a = t.slice(0, c)),
      (o = t.slice(c + 1, l > -1 ? l : t.length)),
      (n = e(o))),
    l > -1 && ((a = a || t.slice(0, l)), (s = t.slice(l, t.length))),
    (a = $x(a ?? t, r)),
    { fullPath: a + (o && "?") + o + s, path: a, query: n, hash: La(s) }
  );
}
function Nx(e, t) {
  const r = t.query ? e(t.query) : "";
  return t.path + (r && "?") + r + (t.hash || "");
}
function Ms(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function zx(e, t, r) {
  const a = t.matched.length - 1,
    n = r.matched.length - 1;
  return (
    a > -1 &&
    a === n &&
    Xr(t.matched[a], r.matched[n]) &&
    Lc(t.params, r.params) &&
    e(t.query) === e(r.query) &&
    t.hash === r.hash
  );
}
function Xr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Lc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r in e) if (!Ux(e[r], t[r])) return !1;
  return !0;
}
function Ux(e, t) {
  return Pt(e) ? Is(e, t) : Pt(t) ? Is(t, e) : e === t;
}
function Is(e, t) {
  return Pt(t)
    ? e.length === t.length && e.every((r, a) => r === t[a])
    : e.length === 1 && e[0] === t;
}
function $x(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const r = t.split("/"),
    a = e.split("/"),
    n = a[a.length - 1];
  (n === ".." || n === ".") && a.push("");
  let o = r.length - 1,
    s,
    l;
  for (s = 0; s < a.length; s++)
    if (((l = a[s]), l !== "."))
      if (l === "..") o > 1 && o--;
      else break;
  return r.slice(0, o).join("/") + "/" + a.slice(s).join("/");
}
const tr = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var Aa;
(function (e) {
  ((e.pop = "pop"), (e.push = "push"));
})(Aa || (Aa = {}));
var xa;
(function (e) {
  ((e.back = "back"), (e.forward = "forward"), (e.unknown = ""));
})(xa || (xa = {}));
function jx(e) {
  if (!e)
    if (Kr) {
      const t = document.querySelector("base");
      ((e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, "")));
    } else e = "/";
  return (e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Fx(e));
}
const Wx = /^[^#]+#/;
function Gx(e, t) {
  return e.replace(Wx, "#") + t;
}
function qx(e, t) {
  const r = document.documentElement.getBoundingClientRect(),
    a = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: a.left - r.left - (t.left || 0),
    top: a.top - r.top - (t.top || 0),
  };
}
const H0 = () => ({ left: window.scrollX, top: window.scrollY });
function Yx(e) {
  let t;
  if ("el" in e) {
    const r = e.el,
      a = typeof r == "string" && r.startsWith("#"),
      n =
        typeof r == "string"
          ? a
            ? document.getElementById(r.slice(1))
            : document.querySelector(r)
          : r;
    if (!n) return;
    t = qx(n, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function Ss(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Un = new Map();
function Qx(e, t) {
  Un.set(e, t);
}
function Xx(e) {
  const t = Un.get(e);
  return (Un.delete(e), t);
}
let Jx = () => location.protocol + "//" + location.host;
function Ac(e, t) {
  const { pathname: r, search: a, hash: n } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let l = n.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = n.slice(l);
    return (c[0] !== "/" && (c = "/" + c), Ms(c, ""));
  }
  return Ms(r, e) + a + n;
}
function Zx(e, t, r, a) {
  let n = [],
    o = [],
    s = null;
  const l = ({ state: d }) => {
    const p = Ac(e, location),
      y = r.value,
      I = t.value;
    let R = 0;
    if (d) {
      if (((r.value = p), (t.value = d), s && s === y)) {
        s = null;
        return;
      }
      R = I ? d.position - I.position : 0;
    } else a(p);
    n.forEach((O) => {
      O(r.value, y, {
        delta: R,
        type: Aa.pop,
        direction: R ? (R > 0 ? xa.forward : xa.back) : xa.unknown,
      });
    });
  };
  function c() {
    s = r.value;
  }
  function u(d) {
    n.push(d);
    const p = () => {
      const y = n.indexOf(d);
      y > -1 && n.splice(y, 1);
    };
    return (o.push(p), p);
  }
  function i() {
    const { history: d } = window;
    d.state && d.replaceState(Ie({}, d.state, { scroll: H0() }), "");
  }
  function f() {
    for (const d of o) d();
    ((o = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", i));
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", i, { passive: !0 }),
    { pauseListeners: c, listen: u, destroy: f }
  );
}
function Ls(e, t, r, a = !1, n = !1) {
  return {
    back: e,
    current: t,
    forward: r,
    replaced: a,
    position: window.history.length,
    scroll: n ? H0() : null,
  };
}
function ey(e) {
  const { history: t, location: r } = window,
    a = { value: Ac(e, r) },
    n = { value: t.state };
  n.value ||
    o(
      a.value,
      {
        back: null,
        current: a.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function o(c, u, i) {
    const f = e.indexOf("#"),
      d =
        f > -1
          ? (r.host && document.querySelector("base") ? e : e.slice(f)) + c
          : Jx() + e + c;
    try {
      (t[i ? "replaceState" : "pushState"](u, "", d), (n.value = u));
    } catch (p) {
      (console.error(p), r[i ? "replace" : "assign"](d));
    }
  }
  function s(c, u) {
    const i = Ie({}, t.state, Ls(n.value.back, c, n.value.forward, !0), u, {
      position: n.value.position,
    });
    (o(c, i, !0), (a.value = c));
  }
  function l(c, u) {
    const i = Ie({}, n.value, t.state, { forward: c, scroll: H0() });
    o(i.current, i, !0);
    const f = Ie({}, Ls(a.value, c, null), { position: i.position + 1 }, u);
    (o(c, f, !1), (a.value = c));
  }
  return { location: a, state: n, push: l, replace: s };
}
function ty(e) {
  e = jx(e);
  const t = ey(e),
    r = Zx(e, t.state, t.location, t.replace);
  function a(o, s = !0) {
    (s || r.pauseListeners(), history.go(o));
  }
  const n = Ie(
    { location: "", base: e, go: a, createHref: Gx.bind(null, e) },
    t,
    r,
  );
  return (
    Object.defineProperty(n, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(n, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    n
  );
}
function ry(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Dc(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Pc = Symbol("");
var As;
(function (e) {
  ((e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated"));
})(As || (As = {}));
function Jr(e, t) {
  return Ie(new Error(), { type: e, [Pc]: !0 }, t);
}
function Ut(e, t) {
  return e instanceof Error && Pc in e && (t == null || !!(e.type & t));
}
const Ds = "[^/]+?",
  ay = { sensitive: !1, strict: !1, start: !0, end: !0 },
  ny = /[.+*?^${}()[\]/\\]/g;
function oy(e, t) {
  const r = Ie({}, ay, t),
    a = [];
  let n = r.start ? "^" : "";
  const o = [];
  for (const u of e) {
    const i = u.length ? [] : [90];
    r.strict && !u.length && (n += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let p = 40 + (r.sensitive ? 0.25 : 0);
      if (d.type === 0)
        (f || (n += "/"), (n += d.value.replace(ny, "\\$&")), (p += 40));
      else if (d.type === 1) {
        const { value: y, repeatable: I, optional: R, regexp: O } = d;
        o.push({ name: y, repeatable: I, optional: R });
        const F = O || Ds;
        if (F !== Ds) {
          p += 10;
          try {
            new RegExp(`(${F})`);
          } catch (A) {
            throw new Error(
              `Invalid custom RegExp for param "${y}" (${F}): ` + A.message,
            );
          }
        }
        let L = I ? `((?:${F})(?:/(?:${F}))*)` : `(${F})`;
        (f || (L = R && u.length < 2 ? `(?:/${L})` : "/" + L),
          R && (L += "?"),
          (n += L),
          (p += 20),
          R && (p += -8),
          I && (p += -20),
          F === ".*" && (p += -50));
      }
      i.push(p);
    }
    a.push(i);
  }
  if (r.strict && r.end) {
    const u = a.length - 1;
    a[u][a[u].length - 1] += 0.7000000000000001;
  }
  (r.strict || (n += "/?"),
    r.end ? (n += "$") : r.strict && !n.endsWith("/") && (n += "(?:/|$)"));
  const s = new RegExp(n, r.sensitive ? "" : "i");
  function l(u) {
    const i = u.match(s),
      f = {};
    if (!i) return null;
    for (let d = 1; d < i.length; d++) {
      const p = i[d] || "",
        y = o[d - 1];
      f[y.name] = p && y.repeatable ? p.split("/") : p;
    }
    return f;
  }
  function c(u) {
    let i = "",
      f = !1;
    for (const d of e) {
      ((!f || !i.endsWith("/")) && (i += "/"), (f = !1));
      for (const p of d)
        if (p.type === 0) i += p.value;
        else if (p.type === 1) {
          const { value: y, repeatable: I, optional: R } = p,
            O = y in u ? u[y] : "";
          if (Pt(O) && !I)
            throw new Error(
              `Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const F = Pt(O) ? O.join("/") : O;
          if (!F)
            if (R)
              d.length < 2 &&
                (i.endsWith("/") ? (i = i.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${y}"`);
          i += F;
        }
    }
    return i || "/";
  }
  return { re: s, score: a, keys: o, parse: l, stringify: c };
}
function sy(e, t) {
  let r = 0;
  for (; r < e.length && r < t.length; ) {
    const a = t[r] - e[r];
    if (a) return a;
    r++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0;
}
function kc(e, t) {
  let r = 0;
  const a = e.score,
    n = t.score;
  for (; r < a.length && r < n.length; ) {
    const o = sy(a[r], n[r]);
    if (o) return o;
    r++;
  }
  if (Math.abs(n.length - a.length) === 1) {
    if (Ps(a)) return 1;
    if (Ps(n)) return -1;
  }
  return n.length - a.length;
}
function Ps(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const ly = { type: 0, value: "" },
  cy = /[a-zA-Z0-9_]/;
function iy(e) {
  if (!e) return [[]];
  if (e === "/") return [[ly]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${r})/"${u}": ${p}`);
  }
  let r = 0,
    a = r;
  const n = [];
  let o;
  function s() {
    (o && n.push(o), (o = []));
  }
  let l = 0,
    c,
    u = "",
    i = "";
  function f() {
    u &&
      (r === 0
        ? o.push({ type: 0, value: u })
        : r === 1 || r === 2 || r === 3
          ? (o.length > 1 &&
              (c === "*" || c === "+") &&
              t(
                `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`,
              ),
            o.push({
              type: 1,
              value: u,
              regexp: i,
              repeatable: c === "*" || c === "+",
              optional: c === "*" || c === "?",
            }))
          : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function d() {
    u += c;
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === "\\" && r !== 2)) {
      ((a = r), (r = 4));
      continue;
    }
    switch (r) {
      case 0:
        c === "/" ? (u && f(), s()) : c === ":" ? (f(), (r = 1)) : d();
        break;
      case 4:
        (d(), (r = a));
        break;
      case 1:
        c === "("
          ? (r = 2)
          : cy.test(c)
            ? d()
            : (f(), (r = 0), c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")"
          ? i[i.length - 1] == "\\"
            ? (i = i.slice(0, -1) + c)
            : (r = 3)
          : (i += c);
        break;
      case 3:
        (f(), (r = 0), c !== "*" && c !== "?" && c !== "+" && l--, (i = ""));
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return (
    r === 2 && t(`Unfinished custom RegExp for param "${u}"`),
    f(),
    s(),
    n
  );
}
function uy(e, t, r) {
  const a = oy(iy(e.path), r),
    n = Ie(a, { record: e, parent: t, children: [], alias: [] });
  return (t && !n.record.aliasOf == !t.record.aliasOf && t.children.push(n), n);
}
function fy(e, t) {
  const r = [],
    a = new Map();
  t = Os({ strict: !1, end: !0, sensitive: !1 }, t);
  function n(f) {
    return a.get(f);
  }
  function o(f, d, p) {
    const y = !p,
      I = Es(f);
    I.aliasOf = p && p.record;
    const R = Os(t, f),
      O = [I];
    if ("alias" in f) {
      const A = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const B of A)
        O.push(
          Es(
            Ie({}, I, {
              components: p ? p.record.components : I.components,
              path: B,
              aliasOf: p ? p.record : I,
            }),
          ),
        );
    }
    let F, L;
    for (const A of O) {
      const { path: B } = A;
      if (d && B[0] !== "/") {
        const K = d.record.path,
          z = K[K.length - 1] === "/" ? "" : "/";
        A.path = d.record.path + (B && z + B);
      }
      if (
        ((F = uy(A, d, R)),
        p
          ? p.alias.push(F)
          : ((L = L || F),
            L !== F && L.alias.push(F),
            y && f.name && !Rs(F) && s(f.name)),
        Ec(F) && c(F),
        I.children)
      ) {
        const K = I.children;
        for (let z = 0; z < K.length; z++) o(K[z], F, p && p.children[z]);
      }
      p = p || F;
    }
    return L
      ? () => {
          s(L);
        }
      : ma;
  }
  function s(f) {
    if (Dc(f)) {
      const d = a.get(f);
      d &&
        (a.delete(f),
        r.splice(r.indexOf(d), 1),
        d.children.forEach(s),
        d.alias.forEach(s));
    } else {
      const d = r.indexOf(f);
      d > -1 &&
        (r.splice(d, 1),
        f.record.name && a.delete(f.record.name),
        f.children.forEach(s),
        f.alias.forEach(s));
    }
  }
  function l() {
    return r;
  }
  function c(f) {
    const d = py(f, r);
    (r.splice(d, 0, f), f.record.name && !Rs(f) && a.set(f.record.name, f));
  }
  function u(f, d) {
    let p,
      y = {},
      I,
      R;
    if ("name" in f && f.name) {
      if (((p = a.get(f.name)), !p)) throw Jr(1, { location: f });
      ((R = p.record.name),
        (y = Ie(
          ks(
            d.params,
            p.keys
              .filter((L) => !L.optional)
              .concat(p.parent ? p.parent.keys.filter((L) => L.optional) : [])
              .map((L) => L.name),
          ),
          f.params &&
            ks(
              f.params,
              p.keys.map((L) => L.name),
            ),
        )),
        (I = p.stringify(y)));
    } else if (f.path != null)
      ((I = f.path),
        (p = r.find((L) => L.re.test(I))),
        p && ((y = p.parse(I)), (R = p.record.name)));
    else {
      if (((p = d.name ? a.get(d.name) : r.find((L) => L.re.test(d.path))), !p))
        throw Jr(1, { location: f, currentLocation: d });
      ((R = p.record.name),
        (y = Ie({}, d.params, f.params)),
        (I = p.stringify(y)));
    }
    const O = [];
    let F = p;
    for (; F; ) (O.unshift(F.record), (F = F.parent));
    return { name: R, path: I, params: y, matched: O, meta: _y(O) };
  }
  e.forEach((f) => o(f));
  function i() {
    ((r.length = 0), a.clear());
  }
  return {
    addRoute: o,
    resolve: u,
    removeRoute: s,
    clearRoutes: i,
    getRoutes: l,
    getRecordMatcher: n,
  };
}
function ks(e, t) {
  const r = {};
  for (const a of t) a in e && (r[a] = e[a]);
  return r;
}
function Es(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: dy(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return (Object.defineProperty(t, "mods", { value: {} }), t);
}
function dy(e) {
  const t = {},
    r = e.props || !1;
  if ("component" in e) t.default = r;
  else for (const a in e.components) t[a] = typeof r == "object" ? r[a] : r;
  return t;
}
function Rs(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function _y(e) {
  return e.reduce((t, r) => Ie(t, r.meta), {});
}
function Os(e, t) {
  const r = {};
  for (const a in e) r[a] = a in t ? t[a] : e[a];
  return r;
}
function py(e, t) {
  let r = 0,
    a = t.length;
  for (; r !== a; ) {
    const o = (r + a) >> 1;
    kc(e, t[o]) < 0 ? (a = o) : (r = o + 1);
  }
  const n = hy(e);
  return (n && (a = t.lastIndexOf(n, a - 1)), a);
}
function hy(e) {
  let t = e;
  for (; (t = t.parent); ) if (Ec(t) && kc(e, t) === 0) return t;
}
function Ec({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function gy(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const a = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let n = 0; n < a.length; ++n) {
    const o = a[n].replace(Tc, " "),
      s = o.indexOf("="),
      l = La(s < 0 ? o : o.slice(0, s)),
      c = s < 0 ? null : La(o.slice(s + 1));
    if (l in t) {
      let u = t[l];
      (Pt(u) || (u = t[l] = [u]), u.push(c));
    } else t[l] = c;
  }
  return t;
}
function Vs(e) {
  let t = "";
  for (let r in e) {
    const a = e[r];
    if (((r = Vx(r)), a == null)) {
      a !== void 0 && (t += (t.length ? "&" : "") + r);
      continue;
    }
    (Pt(a) ? a.map((o) => o && zn(o)) : [a && zn(a)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + r), o != null && (t += "=" + o));
    });
  }
  return t;
}
function vy(e) {
  const t = {};
  for (const r in e) {
    const a = e[r];
    a !== void 0 &&
      (t[r] = Pt(a)
        ? a.map((n) => (n == null ? null : "" + n))
        : a == null
          ? a
          : "" + a);
  }
  return t;
}
const my = Symbol(""),
  Bs = Symbol(""),
  F0 = Symbol(""),
  Rc = Symbol(""),
  $n = Symbol("");
function la() {
  let e = [];
  function t(a) {
    return (
      e.push(a),
      () => {
        const n = e.indexOf(a);
        n > -1 && e.splice(n, 1);
      }
    );
  }
  function r() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: r };
}
function lr(e, t, r, a, n, o = (s) => s()) {
  const s = a && (a.enterCallbacks[n] = a.enterCallbacks[n] || []);
  return () =>
    new Promise((l, c) => {
      const u = (d) => {
          d === !1
            ? c(Jr(4, { from: r, to: t }))
            : d instanceof Error
              ? c(d)
              : ry(d)
                ? c(Jr(2, { from: t, to: d }))
                : (s &&
                    a.enterCallbacks[n] === s &&
                    typeof d == "function" &&
                    s.push(d),
                  l());
        },
        i = o(() => e.call(a && a.instances[n], t, r, u));
      let f = Promise.resolve(i);
      (e.length < 3 && (f = f.then(u)), f.catch((d) => c(d)));
    });
}
function dn(e, t, r, a, n = (o) => o()) {
  const o = [];
  for (const s of e)
    for (const l in s.components) {
      let c = s.components[l];
      if (!(t !== "beforeRouteEnter" && !s.instances[l]))
        if (Cc(c)) {
          const i = (c.__vccOpts || c)[t];
          i && o.push(lr(i, r, a, s, l, n));
        } else {
          let u = c();
          o.push(() =>
            u.then((i) => {
              if (!i)
                throw new Error(
                  `Couldn't resolve component "${l}" at "${s.path}"`,
                );
              const f = Mx(i) ? i.default : i;
              ((s.mods[l] = i), (s.components[l] = f));
              const p = (f.__vccOpts || f)[t];
              return p && lr(p, r, a, s, l, n)();
            }),
          );
        }
    }
  return o;
}
function Ks(e) {
  const t = We(F0),
    r = We(Rc),
    a = me(() => {
      const c = Ct(e.to);
      return t.resolve(c);
    }),
    n = me(() => {
      const { matched: c } = a.value,
        { length: u } = c,
        i = c[u - 1],
        f = r.matched;
      if (!i || !f.length) return -1;
      const d = f.findIndex(Xr.bind(null, i));
      if (d > -1) return d;
      const p = Hs(c[u - 2]);
      return u > 1 && Hs(i) === p && f[f.length - 1].path !== p
        ? f.findIndex(Xr.bind(null, c[u - 2]))
        : d;
    }),
    o = me(() => n.value > -1 && by(r.params, a.value.params)),
    s = me(
      () =>
        n.value > -1 &&
        n.value === r.matched.length - 1 &&
        Lc(r.params, a.value.params),
    );
  function l(c = {}) {
    if (Cy(c)) {
      const u = t[Ct(e.replace) ? "replace" : "push"](Ct(e.to)).catch(ma);
      return (
        e.viewTransition &&
          typeof document < "u" &&
          "startViewTransition" in document &&
          document.startViewTransition(() => u),
        u
      );
    }
    return Promise.resolve();
  }
  return {
    route: a,
    href: me(() => a.value.href),
    isActive: o,
    isExactActive: s,
    navigate: l,
  };
}
function xy(e) {
  return e.length === 1 ? e[0] : e;
}
const yy = g({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Ks,
    setup(e, { slots: t }) {
      const r = Kt(Ks(e)),
        { options: a } = We(F0),
        n = me(() => ({
          [Fs(e.activeClass, a.linkActiveClass, "router-link-active")]:
            r.isActive,
          [Fs(
            e.exactActiveClass,
            a.linkExactActiveClass,
            "router-link-exact-active",
          )]: r.isExactActive,
        }));
      return () => {
        const o = t.default && xy(t.default(r));
        return e.custom
          ? o
          : Zr(
              "a",
              {
                "aria-current": r.isExactActive ? e.ariaCurrentValue : null,
                href: r.href,
                onClick: r.navigate,
                class: n.value,
              },
              o,
            );
      };
    },
  }),
  wy = yy;
function Cy(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return (e.preventDefault && e.preventDefault(), !0);
  }
}
function by(e, t) {
  for (const r in t) {
    const a = t[r],
      n = e[r];
    if (typeof a == "string") {
      if (a !== n) return !1;
    } else if (!Pt(n) || n.length !== a.length || a.some((o, s) => o !== n[s]))
      return !1;
  }
  return !0;
}
function Hs(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Fs = (e, t, r) => e ?? t ?? r,
  Ty = g({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: r }) {
      const a = We($n),
        n = me(() => e.route || a.value),
        o = We(Bs, 0),
        s = me(() => {
          let u = Ct(o);
          const { matched: i } = n.value;
          let f;
          for (; (f = i[u]) && !f.components; ) u++;
          return u;
        }),
        l = me(() => n.value.matched[s.value]);
      (Ir(
        Bs,
        me(() => s.value + 1),
      ),
        Ir(my, l),
        Ir($n, n));
      const c = le();
      return (
        gt(
          () => [c.value, l.value, e.name],
          ([u, i, f], [d, p, y]) => {
            (i &&
              ((i.instances[f] = u),
              p &&
                p !== i &&
                u &&
                u === d &&
                (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards),
                i.updateGuards.size || (i.updateGuards = p.updateGuards))),
              u &&
                i &&
                (!p || !Xr(i, p) || !d) &&
                (i.enterCallbacks[f] || []).forEach((I) => I(u)));
          },
          { flush: "post" },
        ),
        () => {
          const u = n.value,
            i = e.name,
            f = l.value,
            d = f && f.components[i];
          if (!d) return Ns(r.default, { Component: d, route: u });
          const p = f.props[i],
            y = p
              ? p === !0
                ? u.params
                : typeof p == "function"
                  ? p(u)
                  : p
              : null,
            R = Zr(
              d,
              Ie({}, y, t, {
                onVnodeUnmounted: (O) => {
                  O.component.isUnmounted && (f.instances[i] = null);
                },
                ref: c,
              }),
            );
          return Ns(r.default, { Component: R, route: u }) || R;
        }
      );
    },
  });
function Ns(e, t) {
  if (!e) return null;
  const r = e(t);
  return r.length === 1 ? r[0] : r;
}
const My = Ty;
function Iy(e) {
  const t = fy(e.routes, e),
    r = e.parseQuery || gy,
    a = e.stringifyQuery || Vs,
    n = e.history,
    o = la(),
    s = la(),
    l = la(),
    c = Bt(tr);
  let u = tr;
  Kr &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const i = un.bind(null, (U) => "" + U),
    f = un.bind(null, Kx),
    d = un.bind(null, La);
  function p(U, ae) {
    let ee, oe;
    return (
      Dc(U) ? ((ee = t.getRecordMatcher(U)), (oe = ae)) : (oe = U),
      t.addRoute(oe, ee)
    );
  }
  function y(U) {
    const ae = t.getRecordMatcher(U);
    ae && t.removeRoute(ae);
  }
  function I() {
    return t.getRoutes().map((U) => U.record);
  }
  function R(U) {
    return !!t.getRecordMatcher(U);
  }
  function O(U, ae) {
    if (((ae = Ie({}, ae || c.value)), typeof U == "string")) {
      const w = fn(r, U, ae.path),
        V = t.resolve({ path: w.path }, ae),
        W = n.createHref(w.fullPath);
      return Ie(w, V, {
        params: d(V.params),
        hash: La(w.hash),
        redirectedFrom: void 0,
        href: W,
      });
    }
    let ee;
    if (U.path != null) ee = Ie({}, U, { path: fn(r, U.path, ae.path).path });
    else {
      const w = Ie({}, U.params);
      for (const V in w) w[V] == null && delete w[V];
      ((ee = Ie({}, U, { params: f(w) })), (ae.params = f(ae.params)));
    }
    const oe = t.resolve(ee, ae),
      be = U.hash || "";
    oe.params = i(d(oe.params));
    const C = Nx(a, Ie({}, U, { hash: Ox(be), path: oe.path })),
      T = n.createHref(C);
    return Ie(
      { fullPath: C, hash: be, query: a === Vs ? vy(U.query) : U.query || {} },
      oe,
      { redirectedFrom: void 0, href: T },
    );
  }
  function F(U) {
    return typeof U == "string" ? fn(r, U, c.value.path) : Ie({}, U);
  }
  function L(U, ae) {
    if (u !== U) return Jr(8, { from: ae, to: U });
  }
  function A(U) {
    return z(U);
  }
  function B(U) {
    return A(Ie(F(U), { replace: !0 }));
  }
  function K(U) {
    const ae = U.matched[U.matched.length - 1];
    if (ae && ae.redirect) {
      const { redirect: ee } = ae;
      let oe = typeof ee == "function" ? ee(U) : ee;
      return (
        typeof oe == "string" &&
          ((oe =
            oe.includes("?") || oe.includes("#") ? (oe = F(oe)) : { path: oe }),
          (oe.params = {})),
        Ie(
          {
            query: U.query,
            hash: U.hash,
            params: oe.path != null ? {} : U.params,
          },
          oe,
        )
      );
    }
  }
  function z(U, ae) {
    const ee = (u = O(U)),
      oe = c.value,
      be = U.state,
      C = U.force,
      T = U.replace === !0,
      w = K(ee);
    if (w)
      return z(
        Ie(F(w), {
          state: typeof w == "object" ? Ie({}, be, w.state) : be,
          force: C,
          replace: T,
        }),
        ae || ee,
      );
    const V = ee;
    V.redirectedFrom = ae;
    let W;
    return (
      !C &&
        zx(a, oe, ee) &&
        ((W = Jr(16, { to: V, from: oe })), Be(oe, oe, !0, !1)),
      (W ? Promise.resolve(W) : te(V, oe))
        .catch(($) => (Ut($) ? (Ut($, 2) ? $ : tt($)) : xe($, V, oe)))
        .then(($) => {
          if ($) {
            if (Ut($, 2))
              return z(
                Ie({ replace: T }, F($.to), {
                  state: typeof $.to == "object" ? Ie({}, be, $.to.state) : be,
                  force: C,
                }),
                ae || V,
              );
          } else $ = q(V, oe, !0, T, be);
          return (ue(V, oe, $), $);
        })
    );
  }
  function j(U, ae) {
    const ee = L(U, ae);
    return ee ? Promise.reject(ee) : Promise.resolve();
  }
  function k(U) {
    const ae = st.values().next().value;
    return ae && typeof ae.runWithContext == "function"
      ? ae.runWithContext(U)
      : U();
  }
  function te(U, ae) {
    let ee;
    const [oe, be, C] = Sy(U, ae);
    ee = dn(oe.reverse(), "beforeRouteLeave", U, ae);
    for (const w of oe)
      w.leaveGuards.forEach((V) => {
        ee.push(lr(V, U, ae));
      });
    const T = j.bind(null, U, ae);
    return (
      ee.push(T),
      ze(ee)
        .then(() => {
          ee = [];
          for (const w of o.list()) ee.push(lr(w, U, ae));
          return (ee.push(T), ze(ee));
        })
        .then(() => {
          ee = dn(be, "beforeRouteUpdate", U, ae);
          for (const w of be)
            w.updateGuards.forEach((V) => {
              ee.push(lr(V, U, ae));
            });
          return (ee.push(T), ze(ee));
        })
        .then(() => {
          ee = [];
          for (const w of C)
            if (w.beforeEnter)
              if (Pt(w.beforeEnter))
                for (const V of w.beforeEnter) ee.push(lr(V, U, ae));
              else ee.push(lr(w.beforeEnter, U, ae));
          return (ee.push(T), ze(ee));
        })
        .then(
          () => (
            U.matched.forEach((w) => (w.enterCallbacks = {})),
            (ee = dn(C, "beforeRouteEnter", U, ae, k)),
            ee.push(T),
            ze(ee)
          ),
        )
        .then(() => {
          ee = [];
          for (const w of s.list()) ee.push(lr(w, U, ae));
          return (ee.push(T), ze(ee));
        })
        .catch((w) => (Ut(w, 8) ? w : Promise.reject(w)))
    );
  }
  function ue(U, ae, ee) {
    l.list().forEach((oe) => k(() => oe(U, ae, ee)));
  }
  function q(U, ae, ee, oe, be) {
    const C = L(U, ae);
    if (C) return C;
    const T = ae === tr,
      w = Kr ? history.state : {};
    (ee &&
      (oe || T
        ? n.replace(U.fullPath, Ie({ scroll: T && w && w.scroll }, be))
        : n.push(U.fullPath, be)),
      (c.value = U),
      Be(U, ae, ee, T),
      tt());
  }
  let ie;
  function Ae() {
    ie ||
      (ie = n.listen((U, ae, ee) => {
        if (!mt.listening) return;
        const oe = O(U),
          be = K(oe);
        if (be) {
          z(Ie(be, { replace: !0, force: !0 }), oe).catch(ma);
          return;
        }
        u = oe;
        const C = c.value;
        (Kr && Qx(Ss(C.fullPath, ee.delta), H0()),
          te(oe, C)
            .catch((T) =>
              Ut(T, 12)
                ? T
                : Ut(T, 2)
                  ? (z(Ie(F(T.to), { force: !0 }), oe)
                      .then((w) => {
                        Ut(w, 20) &&
                          !ee.delta &&
                          ee.type === Aa.pop &&
                          n.go(-1, !1);
                      })
                      .catch(ma),
                    Promise.reject())
                  : (ee.delta && n.go(-ee.delta, !1), xe(T, oe, C)),
            )
            .then((T) => {
              ((T = T || q(oe, C, !1)),
                T &&
                  (ee.delta && !Ut(T, 8)
                    ? n.go(-ee.delta, !1)
                    : ee.type === Aa.pop && Ut(T, 20) && n.go(-1, !1)),
                ue(oe, C, T));
            })
            .catch(ma));
      }));
  }
  let Fe = la(),
    S = la(),
    _e;
  function xe(U, ae, ee) {
    tt(U);
    const oe = S.list();
    return (
      oe.length ? oe.forEach((be) => be(U, ae, ee)) : console.error(U),
      Promise.reject(U)
    );
  }
  function Je() {
    return _e && c.value !== tr
      ? Promise.resolve()
      : new Promise((U, ae) => {
          Fe.add([U, ae]);
        });
  }
  function tt(U) {
    return (
      _e ||
        ((_e = !U),
        Ae(),
        Fe.list().forEach(([ae, ee]) => (U ? ee(U) : ae())),
        Fe.reset()),
      U
    );
  }
  function Be(U, ae, ee, oe) {
    const { scrollBehavior: be } = e;
    if (!Kr || !be) return Promise.resolve();
    const C =
      (!ee && Xx(Ss(U.fullPath, 0))) ||
      ((oe || !ee) && history.state && history.state.scroll) ||
      null;
    return M0()
      .then(() => be(U, ae, C))
      .then((T) => T && Yx(T))
      .catch((T) => xe(T, U, ae));
  }
  const Ke = (U) => n.go(U);
  let _t;
  const st = new Set(),
    mt = {
      currentRoute: c,
      listening: !0,
      addRoute: p,
      removeRoute: y,
      clearRoutes: t.clearRoutes,
      hasRoute: R,
      getRoutes: I,
      resolve: O,
      options: e,
      push: A,
      replace: B,
      go: Ke,
      back: () => Ke(-1),
      forward: () => Ke(1),
      beforeEach: o.add,
      beforeResolve: s.add,
      afterEach: l.add,
      onError: S.add,
      isReady: Je,
      install(U) {
        const ae = this;
        (U.component("RouterLink", wy),
          U.component("RouterView", My),
          (U.config.globalProperties.$router = ae),
          Object.defineProperty(U.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Ct(c),
          }),
          Kr &&
            !_t &&
            c.value === tr &&
            ((_t = !0), A(n.location).catch((be) => {})));
        const ee = {};
        for (const be in tr)
          Object.defineProperty(ee, be, {
            get: () => c.value[be],
            enumerable: !0,
          });
        (U.provide(F0, ae), U.provide(Rc, _l(ee)), U.provide($n, c));
        const oe = U.unmount;
        (st.add(U),
          (U.unmount = function () {
            (st.delete(U),
              st.size < 1 &&
                ((u = tr),
                ie && ie(),
                (ie = null),
                (c.value = tr),
                (_t = !1),
                (_e = !1)),
              oe());
          }));
      },
    };
  function ze(U) {
    return U.reduce((ae, ee) => ae.then(() => k(ee)), Promise.resolve());
  }
  return mt;
}
function Sy(e, t) {
  const r = [],
    a = [],
    n = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < o; s++) {
    const l = t.matched[s];
    l && (e.matched.find((u) => Xr(u, l)) ? a.push(l) : r.push(l));
    const c = e.matched[s];
    c && (t.matched.find((u) => Xr(u, c)) || n.push(c));
  }
  return [r, a, n];
}
function jw() {
  return We(F0);
}
const de = Pr("KeyboardData", () => {
    const e = ua(),
      t = le(!1),
      r = le([0, 0, 0]),
      a = le(1),
      n = le(!0),
      o = le(!1),
      s = le(0),
      l = le(0),
      c = le("---"),
      u = le("磁轴·单模·RGB"),
      i = le([]),
      f = le(0),
      d = le(0),
      p = le(2),
      y = le(0),
      I = le(0),
      R = le(0),
      O = le("0.0.1"),
      F = le(0),
      L = le("App 0.0.0"),
      A = le(""),
      B = le(0),
      K = le(0),
      z = le(!1),
      j = le(0),
      k = le([!0, !1, !1, !1]),
      te = le([]),
      ue = le("轴1"),
      q = le("mode1"),
      ie = le(1),
      Ae = le(1),
      Fe = le(0),
      S = Kt(
        Array.from({ length: 6 }, () => Array.from({ length: 21 }, () => null)),
      );
    function _e(G, D, b) {
      this.KeyInfoArray[G][D] = b;
    }
    function xe(G, D) {
      return this.KeyInfoArray[G][D];
    }
    function Je() {
      for (let G = 0; G < 6; G++) for (let D = 0; D < 21; D++) S[G][D] == null;
    }
    function tt(G) {
      for (let D = 0; D < 6; D++)
        for (let b = 0; b < 21; b++)
          if (S[D][b] != null && S[D][b].keyValue === G) return S[D][b];
    }
    function Be() {
      const G = [];
      for (let D = 0; D < 6; D++)
        for (let b = 0; b < 21; b++)
          S[D][b] != null && G.push(S[D][b].keyValue);
      return G;
    }
    function Ke(G, D, b) {
      for (let M = 0; M < 6; M++)
        for (let fe = 0; fe < 21; fe++)
          S[M][fe] != null &&
            S[M][fe].keyValue === G &&
            (D === 0
              ? (S[M][fe].fn0_keyValue = b)
              : D === 1
                ? (S[M][fe].fn1_keyValue = b)
                : D === 2
                  ? (S[M][fe].fn2_keyValue = b)
                  : D === 3 && (S[M][fe].fn3_keyValue = b));
    }
    function _t(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          S[b][M] != null &&
            S[b][M].keyValue === G &&
            (S[b][M].touchTravel = D);
    }
    function st(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          S[b][M] != null &&
            S[b][M].keyValue === G &&
            (S[b][M].quickTouchPress = D);
    }
    function mt(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          S[b][M] != null &&
            S[b][M].keyValue === G &&
            (S[b][M].quickTouchRelease = D);
    }
    function ze(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          S[b][M] != null && S[b][M].keyValue === G && (S[b][M].deadPress = D);
    }
    function U(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          S[b][M] != null &&
            S[b][M].keyValue === G &&
            (S[b][M].deadRelease = D);
    }
    function ae(G, D) {
      const { globalTouchTravel: b } = Te(e);
      for (let M = 0; M < 6; M++)
        for (let fe = 0; fe < 21; fe++)
          S[M][fe] != null &&
            S[M][fe].keyValue === G &&
            (D === Q.KeyTouchMode.GlobalMode
              ? ((S[M][fe].touchTravel = b.value),
                (S[M][fe].isSingleTouch = !1),
                (S[M][fe].isQuickTouch = !1))
              : D === Q.KeyTouchMode.SingleMode
                ? ((S[M][fe].isSingleTouch = !0), (S[M][fe].isQuickTouch = !1))
                : D === Q.KeyTouchMode.QuickMode &&
                  ((S[M][fe].isSingleTouch = !0),
                  (S[M][fe].isQuickTouch = !0)));
    }
    function ee(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          S[b][M] != null &&
            S[b][M].keyValue === G &&
            ((S[b][M].advanceKeyType = D),
            D > 0
              ? (S[b][M].isAdvancedKey = !0)
              : (S[b][M].isAdvancedKey = !1));
    }
    function oe(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          if (S[b][M] != null && S[b][M].keyValue === G) {
            S[b][M].advanceKeyType === 1
              ? (S[b][M].DKSInfo.DB = D)
              : S[b][M].advanceKeyType === 2 && (S[b][M].MPTInfo.DB[0] = D);
            return;
          }
    }
    function be(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          if (S[b][M] != null && S[b][M].keyValue === G) {
            S[b][M].advanceKeyType === 2 && (S[b][M].MPTInfo.DB[1] = D);
            return;
          }
    }
    function C(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          if (S[b][M] != null && S[b][M].keyValue === G) {
            S[b][M].advanceKeyType === 2
              ? (S[b][M].MPTInfo.DB[2] = D)
              : S[b][M].advanceKeyType === 1 && (S[b][M].DKSInfo.DB2 = D);
            return;
          }
    }
    function T(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          if (S[b][M] != null && S[b][M].keyValue === G) {
            if (S[b][M].advanceKeyType === 1) S[b][M].DKSInfo.DKS[0] = D;
            else if (S[b][M].advanceKeyType === 2) S[b][M].MPTInfo.DKS[0] = D;
            else if (S[b][M].advanceKeyType === 3) S[b][M].MTInfo.DKS[0] = D;
            else if (S[b][M].advanceKeyType === 4) S[b][M].TGLInfo.DKS = D;
            else if (S[b][M].advanceKeyType === 5) S[b][M].ENDInfo.DKS = D;
            else if (S[b][M].advanceKeyType === 8)
              if (
                J.isFeatureSupported("socdV3") ||
                J.isFeatureSupported("SOCDDynamicDelay")
              ) {
                const fe = (D >> 8) & 255,
                  ve = D & 255;
                console.log(fe, ve);
                const Me = (fe >> 5) & 7,
                  Jt = fe & 31,
                  z0 = (ve >> 5) & 7,
                  U0 = ve & 31;
                ((S[b][M].SOCDInfo.DKS[0] = N0(Me, Jt)),
                  (S[b][M].SOCDInfo.DKS[1] = N0(z0, U0)));
              } else
                ((S[b][M].SOCDInfo.DKS[0] = G), (S[b][M].SOCDInfo.DKS[1] = D));
            else
              S[b][M].advanceKeyType === 9 &&
                ((S[b][M].RSInfo.DKS[0] = G), (S[b][M].RSInfo.DKS[1] = D));
            return;
          }
    }
    function w(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          if (S[b][M] != null && S[b][M].keyValue === G) {
            S[b][M].advanceKeyType === 1
              ? (S[b][M].DKSInfo.DKS[1] = D)
              : S[b][M].advanceKeyType === 2
                ? (S[b][M].MPTInfo.DKS[1] = D)
                : S[b][M].advanceKeyType === 3
                  ? (S[b][M].MTInfo.DKS[1] = D)
                  : S[b][M].advanceKeyType === 8 &&
                    (J.isFeatureSupported("socdV3") ||
                    J.isFeatureSupported("SOCDDynamicDelay")
                      ? (S[b][M].SOCDInfo.DKSV[0] = D)
                      : (S[b][M].SOCDInfo.mode = D & 255));
            return;
          }
    }
    function V(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          if (S[b][M] != null && S[b][M].keyValue === G) {
            S[b][M].advanceKeyType === 1
              ? (S[b][M].DKSInfo.DKS[2] = D)
              : S[b][M].advanceKeyType === 2
                ? (S[b][M].MPTInfo.DKS[2] = D)
                : S[b][M].advanceKeyType === 8 &&
                  (J.isFeatureSupported("socdV3") ||
                    J.isFeatureSupported("SOCDDynamicDelay")) &&
                  (S[b][M].SOCDInfo.DKSV[1] = D);
            return;
          }
    }
    function W(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          if (S[b][M] != null && S[b][M].keyValue === G) {
            if (S[b][M].advanceKeyType === 1) S[b][M].DKSInfo.DKS[3] = D;
            else if (
              S[b][M].advanceKeyType === 8 &&
              (J.isFeatureSupported("socdV3") ||
                J.isFeatureSupported("SOCDDynamicDelay"))
            ) {
              const fe = D & 255,
                ve = (D >> 8) & 255;
              ((S[b][M].SOCDInfo.type = ve),
                (S[b][M].SOCDInfo.mode = fe),
                console.log("type", ve, "mode", fe));
            }
            return;
          }
    }
    function $(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          if (S[b][M] != null && S[b][M].keyValue === G) {
            S[b][M].advanceKeyType === 1 && (S[b][M].DKSInfo.TRPS[0] = D);
            return;
          }
    }
    function Z(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          if (S[b][M] != null && S[b][M].keyValue === G) {
            S[b][M].advanceKeyType === 1 && (S[b][M].DKSInfo.TRPS[1] = D);
            return;
          }
    }
    function X(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          if (S[b][M] != null && S[b][M].keyValue === G) {
            S[b][M].advanceKeyType === 1 && (S[b][M].DKSInfo.TRPS[2] = D);
            return;
          }
    }
    function h(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          if (S[b][M] != null && S[b][M].keyValue === G) {
            S[b][M].advanceKeyType === 1 && (S[b][M].DKSInfo.TRPS[3] = D);
            return;
          }
    }
    function x(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          if (S[b][M] != null && S[b][M].keyValue === G) {
            S[b][M].advanceKeyType === 3
              ? (S[b][M].MTInfo.Delay = D)
              : S[b][M].advanceKeyType === 4 && (S[b][M].TGLInfo.Delay = D);
            return;
          }
    }
    function E(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          S[b][M] != null && S[b][M].keyValue === G && (S[b][M].pressDead = D);
    }
    function H(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          S[b][M] != null &&
            S[b][M].keyValue === G &&
            (S[b][M].releaseDead = D);
    }
    function re(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          S[b][M] != null &&
            S[b][M].keyValue === G &&
            (S[b][M].releaseTravel = D);
    }
    function Y(G, D) {
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          S[b][M] != null && S[b][M].keyValue === G && (S[b][M].axisID = D);
    }
    function P(G, D, b, M) {
      for (let fe = 0; fe < 6; fe++)
        for (let ve = 0; ve < 21; ve++)
          S[fe][ve] != null &&
            S[fe][ve].keyValue === G &&
            ((S[fe][ve].color[0] = D),
            (S[fe][ve].color[1] = b),
            (S[fe][ve].color[2] = M));
    }
    function N(G, D, b) {
      ((S[G][D].adjustingMM = b),
        b >= $c(S[G][D].axisID) - 0.01 && (S[G][D].adjustingSuccess = !0));
    }
    function se(G, D, b) {
      S[G][D].adjustingADC = b;
    }
    function we(G, D, b) {
      S[G][D].adjustingPress = b;
    }
    function Re(G, D) {
      const { adjustingADC: b, adjustingMM: M, adjustingSuccess: fe } = S[G][D];
      return { adjustingADC: b, adjustingMM: M, adjustingSuccess: fe };
    }
    function Ze(G) {
      let D = 0;
      const b = new Array([]),
        M = new Array([]),
        fe = new Uint16Array(312);
      for (let ve = 0; ve < 6; ve++)
        for (let Me = 0; Me < 21; Me++)
          if (S[ve][Me] != null && S[ve][Me].isCheck === !0) {
            ((S[ve][Me].touchRelease = G), (S[ve][Me].isSingleTouch = !0));
            const Jt = Q.KeyTouchMode.SingleMode;
            ((b[D] = S[ve][Me].keyValue),
              (M[D] = Q.KeyLayout.Layout_Mode),
              (fe[D] = (Jt << 4) | S[ve][Me].advanceKeyType),
              D++,
              (b[D] = S[ve][Me].keyValue),
              (M[D] = Q.KeyLayout.Layout_KR),
              (fe[D] = S[ve][Me].touchRelease * 1e3),
              D++);
          }
      return { keyValues: b, layouts: M, values: fe };
    }
    function Ue(G) {
      let D = 0;
      const b = new Array([]),
        M = new Array([]),
        fe = new Uint16Array(312);
      for (let ve = 0; ve < 6; ve++)
        for (let Me = 0; Me < 21; Me++)
          if (S[ve][Me] != null && S[ve][Me].isCheck)
            if (((S[ve][Me].isQuickTouch = G), G))
              ((b[D] = S[ve][Me].keyValue),
                (M[D] = Q.KeyLayout.Layout_Mode),
                (fe[D] =
                  (Q.KeyTouchMode.QuickMode << 4) | S[ve][Me].advanceKeyType),
                D++,
                (b[D] = S[ve][Me].keyValue),
                (M[D] = Q.KeyLayout.Layout_RTP),
                (fe[D] = S[ve][Me].quickTouchPress * 1e3),
                D++,
                (b[D] = S[ve][Me].keyValue),
                (M[D] = Q.KeyLayout.Layout_RTR),
                (fe[D] = S[ve][Me].quickTouchRelease * 1e3),
                D++);
            else {
              let Jt = Q.KeyTouchMode.GlobalMode;
              (S[ve][Me].isSingleTouch && (Jt = Q.KeyTouchMode.SingleMode),
                (b[D] = S[ve][Me].keyValue),
                (M[D] = Q.KeyLayout.Layout_Mode),
                (fe[D] = (Jt << 4) | S[ve][Me].advanceKeyType),
                D++);
            }
      return { keyValues: b, layouts: M, values: fe };
    }
    const Ht = le(0),
      ra = le(0),
      lt = le(0),
      xt = le(0);
    function Va() {
      let G = 0,
        D = 0;
      for (let b = 0; b < 6; b++)
        for (let M = 0; M < 21; M++)
          S[b][M] != null &&
            S[b][M].isCheck &&
            (G++, S[b][M].isQuickTouch && D++);
      (G > 0
        ? e.updateQuickTouchSwiDisable(!1)
        : (e.updateQuickTouchSwiDisable(!0), e.updateQuickTouchSwi(!1)),
        G - D > 0
          ? e.updateQuickTouchSwi(!1)
          : G - D === 0 && D > 0
            ? e.updateQuickTouchSwi(!0)
            : G - D === 0 && D === 0
              ? e.updateQuickTouchSwi(!1)
              : e.updateQuickTouchSwi(!0));
    }
    function Vc() {
      let G = 0;
      for (let D = 0; D < 6; D++)
        for (let b = 0; b < 21; b++)
          S[D][b] != null && S[D][b].advanceKeyType === 6 && G++;
      return G;
    }
    const Bc = le(!1);
    function Kc(G, D) {
      const {
        fn0_keyValue: b,
        fn1_keyValue: M,
        fn2_keyValue: fe,
        fn3_keyValue: ve,
      } = S[G][D];
      return [b, M, fe, ve];
    }
    function Hc(G, D) {
      if (S[G][D] != null) {
        const {
          touchTravel: b,
          touchRelease: M,
          singleTouchRelease: fe,
          quickTouchPress: ve,
          quickTouchRelease: Me,
          isSingleTouch: Jt,
          isQuickTouch: z0,
          isAdvancedKey: U0,
          deadPress: Wc,
          deadRelease: Gc,
        } = S[G][D];
        return {
          touchTravel: b,
          touchRelease: M,
          singleTouchRelease: fe,
          quickTouchPress: ve,
          quickTouchRelease: Me,
          isSingleTouch: Jt,
          isQuickTouch: z0,
          isAdvancedKey: U0,
          deadPress: Wc,
          deadRelease: Gc,
        };
      }
    }
    function Fc(G, D) {
      const { axisID: b } = S[G][D];
      return te.value[b].name;
    }
    function Nc(G, D) {
      const { axisID: b } = S[G][D];
      return te.value[b].color;
    }
    function zc(G, D) {
      const { isCheck: b } = S[G][D];
      return { isCheck: b };
    }
    function Uc(G, D, b) {
      S[G][D].isCheck = b;
    }
    function $c(G) {
      const { maxTouchTravel: D } = Te(e);
      return te.value.length !== 0 && J.isFeatureSupported("signalSwitch")
        ? te.value[G].maxTravel / 1e3
        : D.value;
    }
    function N0(G, D) {
      return (
        console.log("getKeyDefValue", G, D),
        S[G][D] != null
          ? (console.log("row:", G, "col", D, S[G][D].keyValue),
            S[G][D].keyValue)
          : null
      );
    }
    const jc = le(!1);
    return {
      dev: t,
      ForbidConnectBoardID: r,
      getLayoutDelay: a,
      showFourConfig: n,
      showMorkbladeDialog: o,
      KeyboardConnectStatus: s,
      KeyboardRunMode: l,
      KeyboardName: c,
      KeyboardDescription: u,
      KeyboardSN: i,
      BoardID: f,
      KeyboardLayout: d,
      KeyType: p,
      PID: I,
      VID: y,
      usagePage: R,
      ProtocolVersion: O,
      firewareSpaceSize: F,
      appVersion: L,
      appBuildDate: A,
      CustomerID: B,
      ProductionId: K,
      hasFourConfig: z,
      configID: j,
      configChecked: k,
      axisList: te,
      currentAxisName: ue,
      KeyInfoArray: S,
      updateKeyInfo: _e,
      getKeyInfo: xe,
      resetAllKeyInfo: Je,
      getKeyInfoByKeyValue: tt,
      getAllKeyValue: Be,
      updateKeyInfoFnKeyValue: Ke,
      updateKeyInfoTouchTravel: _t,
      updateKeyInfoQuickTouchPTravel: st,
      updateKeyInfoQuickTouchRTravel: mt,
      updateKeyInfoDeadPress: ze,
      updateKeyInfoDeadRelease: U,
      updateTouchMode: ae,
      updateAdvancedKeyMode: ee,
      updateAdvancedKeyDB1: oe,
      updateAdvancedKeyDB2: be,
      updateAdvancedKeyDB3: C,
      updateAdvancedKeyDKS1: T,
      updateAdvancedKeyDKS2: w,
      updateAdvancedKeyDKS3: V,
      updateAdvancedKeyDKS4: W,
      updateAdvancedKeyTRPS1: $,
      updateAdvancedKeyTRPS2: Z,
      updateAdvancedKeyTRPS3: X,
      updateAdvancedKeyTRPS4: h,
      updateAdvancedKeyDelay: x,
      updatePressDead: E,
      updateReleaseDead: H,
      updateReleaseTravel: re,
      updateAxisID: Y,
      updateKeyColor: P,
      updateAdjustingMM: N,
      updateAdjustingADC: se,
      updateAdjustingPress: we,
      getAdjustingADC: Re,
      updateKeyInfoSingleTouchRelease: Ze,
      updateKeyQuickTouchStatus: Ue,
      routerPage: Ht,
      driveCurrentPage: ra,
      currentFn: lt,
      updateKeyTextShow: xt,
      updateQuickTouchSwitch: Va,
      getMacroCount: Vc,
      isMouseDown: Bc,
      getFnKeyValues: Kc,
      getKeyTravels: Hc,
      getKeyAxis: Fc,
      getKeyAxisColor: Nc,
      getKeyChecked: zc,
      setKeyChecked: Uc,
      getKeyDefValue: N0,
      macroMode: q,
      repeatCount: ie,
      repeatDelay: Ae,
      bandMacroID: Fe,
      JKMacroShow: jc,
    };
  }),
  J = {
    ComputeCheckSum(e) {
      let t = 53;
      const r = e[1];
      return (
        (t += e[0]),
        (t += r),
        (t += e[2]),
        r > 0 && r <= 63 * 4 && (t += e[r + 4 - 1]),
        t
      );
    },
    method2(e) {
      return `Hello, ${e}`;
    },
    getLightBitmap(e, t, r) {
      let a = 0;
      return (e && (a |= 1), t && (a |= 2), r && (a |= 16), a);
    },
    blSignatureKey: [1732584193, 4023233417, 2562383102, 271733878],
    blSignatureParams: [1696822273, 1930445398, 4020996557, 3130580222],
    blSignatureUnlock: [2935863497, 3701014202, 1668556033, 660689923],
    shift(e, t) {
      return ((e << t) | (e >>> (32 - t))) >>> 0;
    },
    FF(e, t, r) {
      return ((e & t) | (~e & r)) >>> 0;
    },
    GG(e, t, r) {
      return ((e & r) | (t & ~r)) >>> 0;
    },
    HH(e, t, r) {
      return (e ^ t ^ r) >>> 0;
    },
    II(e, t, r) {
      return (t ^ (e | ~r)) >>> 0;
    },
    byteConvert32Bit(e) {
      return (e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24)) >>> 0;
    },
    convertByte(e) {
      return [e & 255, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    },
    signatureIteration(e, t) {
      let r = e[0],
        a = e[1],
        n = 0;
      const o = 2654435769;
      for (let s = 0; s < 16; s++)
        ((n = (n + o) >>> 0),
          (r = (r + (((a << 4) + t[0]) ^ (a + n) ^ ((a >>> 5) + t[1]))) >>> 0),
          (a = (a + (((r << 4) + t[2]) ^ (r + n) ^ ((r >>> 5) + t[3]))) >>> 0));
      return ((e[0] = r), (e[1] = a), e);
    },
    blSignature(e, t, r, a) {
      const n = [],
        o = t.slice();
      for (let c = 0; c < 4; c++)
        n[c] = this.byteConvert32Bit(e.slice(c * 4, (c + 1) * 4));
      let s = [];
      ((s = this.signatureIteration(n.slice(0, 2), o)),
        (n[0] = s[0]),
        (n[1] = s[1]),
        (s = this.signatureIteration(n.slice(1, 3), o)),
        (n[1] = s[0]),
        (n[2] = s[1]),
        (s = this.signatureIteration(n.slice(2, 4), o)),
        (n[2] = s[0]),
        (n[3] = s[1]),
        (n[4] = n[0]),
        (s = this.signatureIteration(n.slice(3, 5), o)),
        (n[3] = s[0]),
        (n[4] = s[1]),
        (n[0] = n[4]),
        (o[0] = this.FF(o[0], n[0], r[0]) + a),
        (o[1] = this.GG(o[1], n[1], r[1]) + a),
        (o[2] = this.HH(o[2], n[2], r[2]) + a),
        (o[3] = this.II(o[3], n[3], r[3]) + a),
        (s = this.signatureIteration(n.slice(0, 2), o)),
        (n[0] = s[0]),
        (n[1] = s[1]),
        (s = this.signatureIteration(n.slice(1, 3), o)),
        (n[1] = s[0]),
        (n[2] = s[1]),
        (s = this.signatureIteration(n.slice(2, 4), o)),
        (n[2] = s[0]),
        (n[3] = s[1]),
        (n[4] = n[0]),
        (s = this.signatureIteration(n.slice(3, 5), o)),
        (n[3] = s[0]),
        (n[4] = s[1]),
        (n[0] = n[4]));
      let l = [];
      return (
        (l = l.concat(this.convertByte(n[0]))),
        (l = l.concat(this.convertByte(n[1]))),
        (l = l.concat(this.convertByte(n[2]))),
        (l = l.concat(this.convertByte(n[3]))),
        l
      );
    },
    log(e, t) {
      const r = new Date(),
        a = r.getFullYear(),
        n = String(r.getMonth() + 1).padStart(2, "0"),
        o = String(r.getDate()).padStart(2, "0"),
        s = String(r.getHours()).padStart(2, "0"),
        l = String(r.getMinutes()).padStart(2, "0"),
        c = String(r.getSeconds()).padStart(2, "0"),
        u = String(r.getMilliseconds()).padStart(3, "0"),
        i = `[${a}-${n}-${o} ${s}:${l}:${c} ${u}]`;
      let f = "",
        d = "";
      switch (e) {
        case 0:
          ((f = "INFO"), (d = "color: blue;"));
          break;
        case 1:
          ((f = "SUCCESS"), (d = "color: green;"));
          break;
        case 2:
          ((f = "WARNING"), (d = "color: orange;"));
          break;
        case 3:
          ((f = "ERROR"), (d = "color: red; font-weight: bold;"));
          break;
        default:
          ((f = "LOG"), (d = ""));
          break;
      }
      console.log(`%c${i} [${f}] ${t}`, d);
    },
    crc16(e) {
      const t = new Uint8Array(512);
      let r = 0;
      const a = e.length,
        n = 512;
      console.log(`CRC fw_size: ${a} ${Math.floor(a / 1024)}KB`);
      for (let o = 0; o < a; o += n) {
        let s = a - o;
        (s > n && (s = n),
          t.set(e.slice(o, o + s)),
          (r = this.crc16CCITTIteration(r, t, s)));
      }
      return r;
    },
    crc16CCITTIteration(e, t, r) {
      for (let n = 0; n < r; n++) {
        e ^= t[n];
        for (let o = 0; o < 8; o++) e & 1 ? (e = (e >> 1) ^ 33800) : (e >>= 1);
      }
      return e;
    },
    padFirmwareDataTo512(e) {
      const r = e.length,
        a = r % 512,
        n = a === 0 ? 0 : 512 - a;
      if (n === 0) return e;
      const o = new Uint8Array(r + n);
      o.set(e);
      for (let s = r; s < o.length; s++) o[s] = 255;
      return o;
    },
    compareVersion(e, t) {
      if (e.startsWith("Boot")) return 2;
      if (e.startsWith("App")) {
        const r = e.split(" ")[1].replace("V", "").slice(0, -1);
        console.log(r);
        const a = r.split(".").map(Number),
          n = t.split(".").map(Number);
        console.log(a, n);
        for (let o = 0; o < 3; o++) {
          if (a[o] > n[o]) return 0;
          if (a[o] < n[o]) return 1;
        }
        return 0;
      }
      return 0;
    },
    compareVersions(e, t) {
      const r = e.split(".").map(Number),
        a = t.split(".").map(Number);
      for (let n = 0; n < 3; n++) {
        if (r[n] > a[n]) return 1;
        if (r[n] < a[n]) return -1;
      }
      return 0;
    },
    isFeatureSupported(e) {
      const t = {
          socdV2: [{ since: "1.0.0", until: "1.0.4" }, { since: "1.2.0" }],
          rs: [{ since: "1.0.0", until: "1.2.5" }, { since: "1.3.0" }],
          signalDead: [{ since: "1.0.1" }],
          signalSwitch: [{ since: "1.0.2" }],
          advancedKeyV2: [{ since: "1.0.3" }],
          macroV2: [{ since: "1.0.4" }],
          socdV3: [{ since: "1.0.5", until: "1.0.6" }],
          topDeadSwitch: [{ since: "1.0.6" }],
          SOCDDynamicDelay: [{ since: "1.0.7" }],
          lightFix: [{ since: "1.0.8" }],
          DynamicLightColor: [{ since: "1.0.9" }],
        },
        r = de(),
        { ProtocolVersion: a } = Te(r),
        n = a.value || "0.0.0",
        o = t[e] || [];
      for (const s of o) {
        const { since: l } = s,
          c = s.until || "999.999.999";
        if (this.compareVersions(n, l) >= 0 && this.compareVersions(n, c) <= 0)
          return !0;
      }
      return !1;
    },
  },
  Q = {
    ProtocolCMD: {
      KB2_CMD: 0,
      KB2_CMD_SYNC: 1,
      KB2_CMD_KEY: 35,
      KB2_CMD_DB: 41,
      KB2_CMD_DEFKEY: 43,
      KB2_CMD_RM6X21: 18,
      KB2_CMD_MT: 36,
      KB2_CMD_TGL: 37,
      KB2_CMD_TDKS: 38,
      KB2_CMD_DDKS: 39,
      KB2_CMD_END: 40,
      KB2_CMD_MACRO: 32,
      KB2_CMD_MACROMODE: 33,
      KB2_CMD_SOCD: 44,
      KB2_CMD_RS: 45,
      KB2_CMD_PRGB: 24,
      KB2_CMD_LOGORGB: 25,
      KB2_CMD_KRGB: 42,
      KB2_BL_SIGN: 8,
      KB2_BL_ERASE: 9,
      KB2_BL_REBOOT: 10,
      KB2_BL_TOAPP: 11,
      KB2_BL_WRITE: 12,
      KB2_BL_READ: 13,
      KB2_BL_RCRC: 14,
      KB2_CMD_PIC: 48,
      KB2_CMD_PIC_WRITE: 49,
      KB2_BL_ERASE_SCREEN: 50,
      KB2_BL_WRITE_SCREEN: 51,
      KB2_BL_TOBOOT_SCREEN: 52,
      KB2_CMD_FAIL: 255,
    },
    CMDOrder: {
      KB2_CMDODER_PROTOCOL_VERSION: 1,
      KB2_CMDODER_START_ADJUSTING: 12,
      KB2_CMDODER_SAVE_ADJUSTING: 13,
      KB2_CMDODER_FACTORY_DATA_RESET: 12,
      KB2_CMDODER_QUERY_PRECISION: 37,
      KB2_CMDODER_QUERY_KEYBOARD_NAME: 38,
      KB2_CMDODER_QUERY_SYS_WIN: 33,
      KB2_CMDODER_QUERY_SYS_MAC: 34,
      KB2_CMDODER_CHANGE_SYS_WIN: 48,
      KB2_CMDODER_CHANGE_SYS_MAC: 49,
      KB2_CMDODER_TOP_DEAD_SWITCH: 52,
      KB2_CMDODER_QUERY_LIGHT_FIX_RGB: 68,
      KB2_CMDODER_RATEOFRETURN: 80,
      KB2_CMDODER_CONFIGID: 112,
      KB2_CMDODER_AXISLIST: 118,
    },
    KeyLayout: {
      Layout_Fn0: 0,
      Layout_Fn1: 1,
      Layout_Fn2: 2,
      Layout_Fn3: 3,
      Layout_DB0: 4,
      Layout_DB1: 5,
      Layout_DB2: 6,
      Layout_DB3: 7,
      Layout_Mode: 8,
      Layout_DKS1: 9,
      Layout_DKS2: 10,
      Layout_DKS3: 11,
      Layout_DKS4: 12,
      Layout_TRPS1: 13,
      Layout_TRPS2: 14,
      Layout_TRPS3: 15,
      Layout_TRPS4: 16,
      Layout_MacroAddr: 17,
      Layout_MacroSize: 18,
      Layout_MTDelay: 19,
      Layout_RTP: 20,
      Layout_RTR: 21,
      Layout_DP: 22,
      Layout_DR: 23,
      Layout_KR: 24,
      Layout_AXIS: 25,
      Layout_MacroBreak: 26,
    },
    KeyTouchMode: { GlobalMode: 0, SingleMode: 1, QuickMode: 2 },
    BL_Controls: {
      BL_NONE: 0,
      BL_SIGN: 2,
      BL_ERASE: 3,
      BL_REBOOT: 4,
      BL_TOBOOT: 5,
      BL_WRITE: 6,
    },
    head: 92,
    CMDPack(e, t) {
      const r = new Uint8Array(64);
      let a = 4;
      return (
        (r[0] = this.head),
        (r[1] = 0),
        (r[2] = this.ProtocolCMD.KB2_CMD),
        (r[a++] = e),
        t != null && (r[a++] = t),
        (r[a++] = 255),
        (r[a++] = 255),
        (r[1] = a - 4),
        (r[3] = J.ComputeCheckSum(r)),
        r
      );
    },
    CMDArray16Pack(e, t) {
      const r = new Uint8Array(64);
      let a = 4;
      return (
        (r[0] = this.head),
        (r[1] = 0),
        (r[2] = this.ProtocolCMD.KB2_CMD),
        (r[a++] = e),
        (r[a++] = t & 255),
        (r[a++] = (t >> 8) & 255),
        (r[a++] = 255),
        (r[a++] = 255),
        (r[1] = a - 4),
        (r[3] = J.ComputeCheckSum(r)),
        r
      );
    },
    CMDArrayPack(e, t) {
      const r = new Uint8Array(64);
      let a = 4;
      ((r[0] = this.head),
        (r[1] = 0),
        (r[2] = this.ProtocolCMD.KB2_CMD),
        (r[a++] = e));
      for (let n = 0; n < t.length; n++) r[a++] = t[n];
      return (
        (r[a++] = 255),
        (r[a++] = 255),
        (r[1] = a - 4),
        (r[3] = J.ComputeCheckSum(r)),
        r
      );
    },
    SYNCPack() {
      const e = new Uint8Array(64);
      let t = 4;
      return (
        (e[0] = this.head),
        (e[1] = 0),
        (e[2] = this.ProtocolCMD.KB2_CMD_SYNC),
        (e[t++] = 1),
        (e[t++] = 2),
        (e[t++] = 3),
        (e[t++] = 4),
        (e[t++] = 255),
        (e[t++] = 255),
        (e[1] = t - 4),
        (e[3] = J.ComputeCheckSum(e)),
        e
      );
    },
    DEFKEYPack(e, t) {
      const r = new Uint8Array(64);
      let a = 4;
      return (
        (r[0] = this.head),
        (r[1] = 0),
        (r[2] = this.ProtocolCMD.KB2_CMD_DEFKEY),
        (r[a++] = 0),
        (r[a++] = e),
        (r[a++] = t),
        (r[1] = a - 4),
        (r[3] = J.ComputeCheckSum(r)),
        r
      );
    },
    LayoutDataPack(e, t, r, a) {
      const n = new Uint8Array(64);
      let o = 4;
      ((n[0] = this.head),
        (n[1] = 0),
        (n[2] = this.ProtocolCMD.KB2_CMD_KEY),
        (n[o++] = e));
      for (let s = 0; s < r.length; s++)
        ((n[o++] = r[s]),
          (n[o++] = t[s]),
          (n[o++] = a[s] & 255),
          (n[o++] = (a[s] >> 8) & 255));
      return ((n[1] = o - 4), (n[3] = J.ComputeCheckSum(n)), n);
    },
    DBPack(e, t, r, a) {
      const n = new Uint8Array(64);
      let o = 4;
      return (
        (n[0] = this.head),
        (n[1] = 0),
        (n[2] = this.ProtocolCMD.KB2_CMD_DB),
        (n[o++] = e),
        (n[o++] = 0),
        (n[o++] = 0),
        (n[o++] = t & 255),
        (n[o++] = (t >> 8) & 255),
        (n[o++] = r & 255),
        (n[o++] = (r >> 8) & 255),
        (n[o++] = a & 255),
        (n[o++] = (a >> 8) & 255),
        (n[o++] = 0),
        (n[o++] = 0),
        (n[o++] = 0),
        (n[o++] = 0),
        (n[o++] = 0),
        (n[o++] = 0),
        (n[1] = o - 4),
        (n[3] = J.ComputeCheckSum(n)),
        n
      );
    },
    PRGBPack(e, t, r, a, n, o, s, l, c, u) {
      const i = new Uint8Array(64);
      let f = 4;
      ((i[0] = this.head),
        (i[1] = 0),
        (i[2] = this.ProtocolCMD.KB2_CMD_PRGB),
        (i[f++] = e),
        (i[f++] = 0),
        (i[f++] = 0),
        (i[f++] = 0),
        (i[f++] = 0));
      let d = 0;
      for (let p = 0; p < 7; p++) {
        const y = t[d];
        ((i[f++] = parseInt(y.substring(5, 7), 16)),
          (i[f++] = parseInt(y.substring(3, 5), 16)),
          (i[f++] = parseInt(y.substring(1, 3), 16)),
          (i[f++] = 255),
          d++);
      }
      return (
        (i[f++] = 0),
        (i[f++] = 0),
        (i[f++] = 0),
        (i[f++] = 0),
        (i[f++] = J.getLightBitmap(r, a, n)),
        (i[f++] = o),
        (i[f++] = s),
        (i[f++] = l),
        (i[f++] = c),
        console.log(u),
        (i[f++] = u),
        (i[1] = f - 4),
        (i[3] = J.ComputeCheckSum(i)),
        i
      );
    },
    PRGBPackV2(e, t, r, a, n, o, s, l, c, u, i) {
      const f = new Uint8Array(64);
      let d = 4;
      ((f[0] = this.head),
        (f[1] = 0),
        (f[2] = this.ProtocolCMD.KB2_CMD_PRGB),
        (f[d++] = e),
        (f[d++] = 0),
        (f[d++] = 0),
        (f[d++] = 0),
        (f[d++] = 0));
      let p = 0;
      for (let y = 0; y < 7; y++) {
        const I = t[p];
        ((f[d++] = parseInt(I.substring(5, 7), 16)),
          (f[d++] = parseInt(I.substring(3, 5), 16)),
          (f[d++] = parseInt(I.substring(1, 3), 16)),
          (f[d++] = 255),
          p++);
      }
      return (
        (f[d++] = 0),
        (f[d++] = 0),
        (f[d++] = 0),
        (f[d++] = 0),
        (f[d++] = J.getLightBitmap(r, a, n)),
        (f[d++] = o),
        (f[d++] = s),
        (f[d++] = l),
        (f[d++] = c),
        console.log(u),
        (f[d++] = u),
        (f[d++] = i),
        (f[1] = d - 4),
        (f[3] = J.ComputeCheckSum(f)),
        f
      );
    },
    LOGORGBPack(e, t, r, a, n, o, s, l, c, u) {
      const i = new Uint8Array(64);
      let f = 4;
      ((i[0] = this.head),
        (i[1] = 0),
        (i[2] = this.ProtocolCMD.KB2_CMD_LOGORGB),
        (i[f++] = e),
        (i[f++] = 0),
        (i[f++] = 0),
        (i[f++] = 0),
        (i[f++] = 0));
      let d = 0;
      for (let p = 0; p < 7; p++) {
        const y = t[d];
        ((i[f++] = parseInt(y.substring(5, 7), 16)),
          (i[f++] = parseInt(y.substring(3, 5), 16)),
          (i[f++] = parseInt(y.substring(1, 3), 16)),
          (i[f++] = 255),
          d++);
      }
      return (
        (i[f++] = 0),
        (i[f++] = 0),
        (i[f++] = 0),
        (i[f++] = 0),
        (i[f++] = J.getLightBitmap(r, a, n)),
        (i[f++] = o),
        (i[f++] = s),
        (i[f++] = l),
        (i[f++] = c),
        (i[f++] = u),
        (i[1] = f - 4),
        (i[3] = J.ComputeCheckSum(i)),
        i
      );
    },
    KRGBPack(e, t, r, a, n) {
      const o = new Uint8Array(64);
      for (let l = 0; l < 64; l++) o[l] = 255;
      let s = 4;
      ((o[0] = this.head),
        (o[1] = 0),
        (o[2] = this.ProtocolCMD.KB2_CMD_KRGB),
        (o[s++] = e));
      for (let l = 0; l < t.length; l++)
        ((o[s++] = t[l]), (o[s++] = r[l]), (o[s++] = a[l]), (o[s++] = n[l]));
      return ((o[1] = s - 4), (o[3] = J.ComputeCheckSum(o)), o);
    },
    DKSPack(e, t, r, a, n, o, s, l, c, u, i, f) {
      const d = new Uint8Array(64);
      let p = 4;
      if (
        ((d[0] = this.head),
        (d[1] = 0),
        (d[2] = this.ProtocolCMD.KB2_CMD_TDKS),
        (d[p++] = e),
        J.isFeatureSupported("advancedKeyV2"))
      )
        for (let y = 0; y < t.length; y++)
          ((d[p++] = t[y]),
            (d[p++] = r[y] & 255),
            (d[p++] = (r[y] >> 8) & 255),
            (d[p++] = a[y] & 255),
            (d[p++] = (a[y] >> 8) & 255),
            (d[p++] = n[y] & 255),
            (d[p++] = (n[y] >> 8) & 255),
            (d[p++] = o[y] & 255),
            (d[p++] = (o[y] >> 8) & 255),
            (d[p++] = s[y]),
            (d[p++] = l[y]),
            (d[p++] = c[y]),
            (d[p++] = u[y]),
            (d[p++] = i[y] & 255),
            (d[p++] = (i[y] >> 8) & 255),
            (d[p++] = f[y] & 255),
            (d[p++] = (f[y] >> 8) & 255));
      else
        for (let y = 0; y < t.length; y++)
          ((d[p++] = t[y]),
            (d[p++] = r[y]),
            (d[p++] = a[y]),
            (d[p++] = n[y]),
            (d[p++] = o[y]),
            (d[p++] = s[y]),
            (d[p++] = l[y]),
            (d[p++] = c[y]),
            (d[p++] = u[y]),
            (d[p++] = i[y] & 255),
            (d[p++] = (i[y] >> 8) & 255),
            (d[p++] = f[y] & 255),
            (d[p++] = (f[y] >> 8) & 255));
      return ((d[1] = p - 4), (d[3] = J.ComputeCheckSum(d)), d);
    },
    MPTPack(e, t, r, a, n, o, s, l) {
      const c = new Uint8Array(64);
      let u = 4;
      if (
        ((c[0] = this.head),
        (c[1] = 0),
        (c[2] = this.ProtocolCMD.KB2_CMD_DDKS),
        (c[u++] = e),
        J.isFeatureSupported("advancedKeyV2"))
      )
        for (let i = 0; i < t.length; i++)
          ((c[u++] = t[i]),
            (c[u++] = r[i] & 255),
            (c[u++] = (r[i] >> 8) & 255),
            (c[u++] = a[i] & 255),
            (c[u++] = (a[i] >> 8) & 255),
            (c[u++] = n[i] & 255),
            (c[u++] = (n[i] >> 8) & 255),
            (c[u++] = o[i] & 255),
            (c[u++] = (o[i] >> 8) & 255),
            (c[u++] = s[i] & 255),
            (c[u++] = (s[i] >> 8) & 255),
            (c[u++] = l[i] & 255),
            (c[u++] = (l[i] >> 8) & 255));
      else
        for (let i = 0; i < t.length; i++)
          ((c[u++] = t[i]),
            (c[u++] = r[i]),
            (c[u++] = a[i]),
            (c[u++] = n[i]),
            (c[u++] = o[i] & 255),
            (c[u++] = (o[i] >> 8) & 255),
            (c[u++] = s[i] & 255),
            (c[u++] = (s[i] >> 8) & 255),
            (c[u++] = l[i] & 255),
            (c[u++] = (l[i] >> 8) & 255));
      return ((c[1] = u - 4), (c[3] = J.ComputeCheckSum(c)), c);
    },
    MTPack(e, t, r, a, n) {
      const o = new Uint8Array(64);
      let s = 4;
      if (
        ((o[0] = this.head),
        (o[1] = 0),
        (o[2] = this.ProtocolCMD.KB2_CMD_MT),
        (o[s++] = e),
        J.isFeatureSupported("advancedKeyV2"))
      )
        for (let l = 0; l < t.length; l++)
          ((o[s++] = t[l]),
            (o[s++] = r[l] & 255),
            (o[s++] = (r[l] >> 8) & 255),
            (o[s++] = a[l] & 255),
            (o[s++] = (a[l] >> 8) & 255),
            (o[s++] = n[l]));
      else
        for (let l = 0; l < t.length; l++)
          ((o[s++] = t[l]), (o[s++] = r[l]), (o[s++] = a[l]), (o[s++] = n[l]));
      return ((o[1] = s - 4), (o[3] = J.ComputeCheckSum(o)), o);
    },
    TGLPack(e, t, r, a) {
      const n = new Uint8Array(64);
      let o = 4;
      if (
        ((n[0] = this.head),
        (n[1] = 0),
        (n[2] = this.ProtocolCMD.KB2_CMD_TGL),
        (n[o++] = e),
        J.isFeatureSupported("advancedKeyV2"))
      )
        for (let s = 0; s < t.length; s++)
          ((n[o++] = t[s]),
            (n[o++] = r[s] & 255),
            (n[o++] = (r[s] >> 8) & 255),
            (n[o++] = a[s]));
      else
        for (let s = 0; s < t.length; s++)
          ((n[o++] = t[s]), (n[o++] = r[s]), (n[o++] = a[s]));
      return ((n[1] = o - 4), (n[3] = J.ComputeCheckSum(n)), n);
    },
    ENDPack(e, t, r, a = null) {
      const n = new Uint8Array(64);
      let o = 4;
      if (
        ((n[0] = this.head),
        (n[1] = 0),
        (n[2] = this.ProtocolCMD.KB2_CMD_END),
        (n[o++] = e),
        J.isFeatureSupported("advancedKeyV2"))
      ) {
        for (let s = 0; s < t.length; s++)
          ((n[o++] = t[s]),
            (n[o++] = r[s] & 255),
            (n[o++] = (r[s] >> 8) & 255));
        J.isFeatureSupported("SOCDDynamicDelay") &&
          ((n[o++] = a & 255), (n[o++] = (a >> 8) & 255));
      } else if (J.isFeatureSupported("SOCDDynamicDelay")) {
        for (let s = 0; s < t.length; s++)
          ((n[o++] = t[s]),
            (n[o++] = r[s] & 255),
            (n[o++] = (r[s] >> 8) & 255));
        ((n[o++] = a & 255), (n[o++] = (a >> 8) & 255));
      } else
        for (let s = 0; s < t.length; s++) ((n[o++] = t[s]), (n[o++] = r[s]));
      return ((n[1] = o - 4), (n[3] = J.ComputeCheckSum(n)), n);
    },
    MacroPack(e, t, r, a, n, o) {
      const s = new Uint8Array(64);
      let l = 4;
      ((s[0] = this.head),
        (s[1] = 0),
        (s[2] = this.ProtocolCMD.KB2_CMD_MACRO),
        (s[l++] = e),
        (s[l++] = t & 255),
        (s[l++] = (t >> 8) & 255),
        (s[l++] = r));
      for (let c = 0; c < a.length; c++) {
        ((s[l++] = a[c] & 255), (s[l++] = (a[c] >> 8) & 255));
        let u = 0,
          i = 1;
        (n[c] === 0 && (i = 8),
          (u |= i << 12),
          (u |= o[c] & 4095),
          (s[l++] = u & 255),
          (s[l++] = (u >> 8) & 255));
      }
      return ((s[1] = l - 4), (s[3] = J.ComputeCheckSum(s)), s);
    },
    MacroV2Pack(e, t, r, a, n, o) {
      const s = new Uint8Array(64);
      let l = 4;
      ((s[0] = this.head),
        (s[1] = 0),
        (s[2] = this.ProtocolCMD.KB2_CMD_MACRO),
        (s[l++] = e),
        (s[l++] = t & 255),
        (s[l++] = (t >> 8) & 255),
        (s[l++] = r));
      for (let c = 0; c < a.length; c++) {
        ((s[l++] = a[c] & 255), (s[l++] = (a[c] >> 8) & 255));
        let u = 0,
          i = 1;
        (n[c] === 0 && (i = 8),
          (u |= i << 24),
          (u |= o[c] & 16777215),
          (s[l++] = u & 255),
          (s[l++] = (u >> 8) & 255),
          (s[l++] = (u >> 16) & 255),
          (s[l++] = (u >> 24) & 255));
      }
      return ((s[1] = l - 4), (s[3] = J.ComputeCheckSum(s)), s);
    },
    MacroModePack(e, t, r, a, n, o, s) {
      const l = new Uint8Array(64);
      let c = 4;
      return (
        (l[0] = this.head),
        (l[1] = 0),
        (l[2] = this.ProtocolCMD.KB2_CMD_MACROMODE),
        (l[c++] = e),
        (l[c++] = t),
        (l[c++] = r & 255),
        (l[c++] = (r >> 8) & 255),
        (l[c++] = a),
        (l[c++] = n),
        (l[c++] = o & 255),
        (l[c++] = (o >> 8) & 255),
        (l[c++] = s & 255),
        (l[c++] = (s >> 8) & 255),
        (l[c++] = (s >> 16) & 255),
        (l[1] = c - 4),
        (l[3] = J.ComputeCheckSum(l)),
        l
      );
    },
    JK_MacroPack(e, t, r, a, n, o) {
      const s = new Uint8Array(64);
      let l = 4;
      ((s[0] = this.head),
        (s[1] = 0),
        (s[2] = this.ProtocolCMD.KB2_CMD_MACRO),
        (s[l++] = e),
        (s[l++] = t & 255),
        (s[l++] = (t >> 8) & 255),
        (s[l++] = r));
      for (let c = 0; c < a.length; c++) {
        ((s[l++] = a[c] & 255), (s[l++] = (a[c] >> 8) & 255));
        let u = 0,
          i = 1;
        (n[c] === 0 && (i = 8),
          (u |= i << 24),
          (u |= o[c] & 16777215),
          (s[l++] = u & 255),
          (s[l++] = (u >> 8) & 255),
          (s[l++] = (u >> 16) & 255),
          (s[l++] = (u >> 24) & 255));
      }
      return ((s[1] = l - 4), (s[3] = J.ComputeCheckSum(s)), s);
    },
    SOCDPack(e, t, r) {
      const a = new Uint8Array(64);
      let n = 4;
      ((a[0] = this.head),
        (a[1] = 0),
        (a[2] = this.ProtocolCMD.KB2_CMD_SOCD),
        (a[n++] = e));
      for (let o = 0; o < t.length; o++) ((a[n++] = t[o]), (a[n++] = r[o]));
      return ((a[1] = n - 4), (a[3] = J.ComputeCheckSum(a)), a);
    },
    SOCDV2Pack(e, t, r, a) {
      const n = new Uint8Array(64);
      let o = 4;
      ((n[0] = this.head),
        (n[1] = 0),
        (n[2] = this.ProtocolCMD.KB2_CMD_SOCD),
        (n[o++] = e));
      const s = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
      ];
      for (let l = 0; l < t.length; l++)
        ((n[o++] = t[l]), (n[o++] = r[l]), (n[o++] = s[a][l]));
      return ((n[1] = o - 4), (n[3] = J.ComputeCheckSum(n)), n);
    },
    SOCDV3Pack(e, t, r, a, n, o, s) {
      const l = new Uint8Array(64);
      let c = 4;
      return (
        (l[0] = this.head),
        (l[1] = 0),
        (l[2] = this.ProtocolCMD.KB2_CMD_SOCD),
        (l[c++] = e),
        (l[c++] = t),
        (l[c++] = r),
        (l[c++] = a & 255),
        (l[c++] = (a >> 8) & 255),
        (l[c++] = n & 255),
        (l[c++] = (n >> 8) & 255),
        (l[c++] = o),
        (l[c++] = s),
        (l[1] = c - 4),
        (l[3] = J.ComputeCheckSum(l)),
        l
      );
    },
    SOCDV4Pack(e, t, r, a, n, o, s, l) {
      const c = new Uint8Array(64);
      let u = 4;
      return (
        (c[0] = this.head),
        (c[1] = 0),
        (c[2] = this.ProtocolCMD.KB2_CMD_SOCD),
        (c[u++] = e),
        (c[u++] = t),
        (c[u++] = r),
        (c[u++] = a & 255),
        (c[u++] = (a >> 8) & 255),
        (c[u++] = n & 255),
        (c[u++] = (n >> 8) & 255),
        (c[u++] = o),
        (c[u++] = s),
        (c[u++] = l & 255),
        (c[u++] = (l >> 8) & 255),
        (c[1] = u - 4),
        (c[3] = J.ComputeCheckSum(c)),
        c
      );
    },
    RSPack(e, t, r) {
      const a = new Uint8Array(64);
      let n = 4;
      ((a[0] = this.head),
        (a[1] = 0),
        (a[2] = this.ProtocolCMD.KB2_CMD_RS),
        (a[n++] = e));
      for (let o = 0; o < t.length; o++) ((a[n++] = t[o]), (a[n++] = r[o]));
      return ((a[1] = n - 4), (a[3] = J.ComputeCheckSum(a)), a);
    },
    RM6X21Pack(e, t) {
      const r = new Uint8Array(64);
      let a = 4;
      return (
        (r[0] = this.head),
        (r[1] = 0),
        (r[2] = this.ProtocolCMD.KB2_CMD_RM6X21),
        (r[a++] = e),
        (r[a++] = t),
        (r[a++] = 255),
        (r[a++] = 255),
        (r[1] = a - 4),
        (r[3] = J.ComputeCheckSum(r)),
        r
      );
    },
    SIGNPack(e, t, r) {
      const a = new Uint8Array(64);
      let n = 4;
      ((a[0] = this.head),
        (a[1] = 0),
        (a[2] = this.ProtocolCMD.KB2_BL_SIGN),
        (a[n++] = e),
        (a[n++] = 16));
      for (let o = 0; o < 16; o++) a[n++] = r[o];
      a[n++] = 16;
      for (let o = 0; o < 16; o++) a[n++] = t[o];
      return (
        (a[n++] = 255),
        (a[n++] = 255),
        (a[n++] = 255),
        (a[n++] = 255),
        (a[1] = n - 4),
        (a[3] = J.ComputeCheckSum(a)),
        a
      );
    },
    ERASEPack(e) {
      const t = new Uint8Array(64);
      let r = 4;
      return (
        (t[0] = this.head),
        (t[1] = 0),
        (t[2] = this.ProtocolCMD.KB2_BL_ERASE),
        (t[r++] = 0),
        (t[r++] = 0),
        (t[r++] = 0),
        (t[r++] = 0),
        (t[r++] = e & 255),
        (t[r++] = (e >> 8) & 255),
        (t[r++] = (e >> 16) & 255),
        (t[r++] = (e >> 24) & 255),
        (t[r++] = 255),
        (t[1] = r - 4),
        (t[3] = J.ComputeCheckSum(t)),
        t
      );
    },
    REBOOTPack() {
      const e = new Uint8Array(64);
      let t = 4;
      return (
        (e[0] = this.head),
        (e[1] = 0),
        (e[2] = this.ProtocolCMD.KB2_BL_REBOOT),
        (e[t++] = 255),
        (e[t++] = 255),
        (e[1] = t - 4),
        (e[3] = J.ComputeCheckSum(e)),
        e
      );
    },
    TOAPPPack(e, t, r) {
      const a = new Uint8Array(64);
      let n = 4;
      return (
        (a[0] = this.head),
        (a[1] = 0),
        (a[2] = this.ProtocolCMD.KB2_BL_TOAPP),
        (a[n++] = 0),
        (a[n++] = 0),
        (a[n++] = 0),
        (a[n++] = 0),
        (a[n++] = t & 255),
        (a[n++] = (t >> 8) & 255),
        (a[n++] = (t >> 16) & 255),
        (a[n++] = (t >> 24) & 255),
        (a[n++] = r & 255),
        (a[n++] = (r >> 8) & 255),
        (a[1] = n - 4),
        (a[3] = J.ComputeCheckSum(a)),
        a
      );
    },
    WRITEPack(e, t, r) {
      const a = new Uint8Array(256);
      let n = 4;
      ((a[0] = this.head),
        (a[1] = 0),
        (a[2] = this.ProtocolCMD.KB2_BL_WRITE),
        (a[n++] = e & 255),
        (a[n++] = (e >> 8) & 255),
        (a[n++] = (e >> 16) & 255),
        (a[n++] = (e >> 24) & 255),
        (a[n++] = t & 255),
        (a[n++] = (t >> 8) & 255));
      for (let o = 0; o < 244; o++) a[n++] = r[o];
      return ((a[1] = n - 4), (a[3] = J.ComputeCheckSum(a)), a);
    },
    RCRCPack(e) {
      const t = new Uint8Array(64);
      let r = 4;
      return (
        (t[0] = this.head),
        (t[1] = 0),
        (t[2] = this.ProtocolCMD.KB2_BL_RCRC),
        (t[r++] = 0),
        (t[r++] = 0),
        (t[r++] = 0),
        (t[r++] = 0),
        (t[r++] = e & 255),
        (t[r++] = (e >> 8) & 255),
        (t[r++] = (e >> 16) & 255),
        (t[r++] = (e >> 24) & 255),
        (t[r++] = 255),
        (t[r++] = 255),
        (t[1] = r - 4),
        (t[3] = J.ComputeCheckSum(t)),
        t
      );
    },
    picStartPack(e, t) {
      const r = new Uint8Array(64);
      let a = 4;
      return (
        (r[0] = this.head),
        (r[1] = 0),
        (r[2] = this.ProtocolCMD.KB2_CMD_PIC),
        (r[a++] = e & 255),
        (r[a++] = (e >> 8) & 255),
        (r[a++] = (e >> 16) & 255),
        (r[a++] = (e >> 24) & 255),
        (r[a++] = t),
        (r[a++] = 255),
        (r[a++] = 255),
        (r[1] = a - 4),
        (r[3] = J.ComputeCheckSum(r)),
        console.log(r),
        r
      );
    },
    picWritePack(e, t, r) {
      const a = new Uint8Array(256);
      let n = 4;
      ((a[0] = this.head),
        (a[1] = 0),
        (a[2] = this.ProtocolCMD.KB2_CMD_PIC_WRITE),
        (a[n++] = e & 255),
        (a[n++] = (e >> 8) & 255),
        (a[n++] = (e >> 16) & 255),
        (a[n++] = (e >> 24) & 255),
        (a[n++] = t & 255),
        (a[n++] = (t >> 8) & 255));
      for (let o = 0; o < 244; o++) a[n++] = r[o];
      return ((a[1] = n - 4), (a[3] = J.ComputeCheckSum(a)), a);
    },
    ScreenToBoot() {
      const e = new Uint8Array(64);
      let t = 4;
      return (
        (e[0] = this.head),
        (e[1] = 0),
        (e[2] = this.ProtocolCMD.KB2_BL_TOBOOT_SCREEN),
        (e[t++] = 255),
        (e[t++] = 255),
        (e[1] = t - 4),
        (e[3] = J.ComputeCheckSum(e)),
        e
      );
    },
    eraseScreenFwPack(e) {
      const t = new Uint8Array(64);
      let r = 4;
      return (
        (t[0] = this.head),
        (t[1] = 0),
        (t[2] = this.ProtocolCMD.KB2_BL_ERASE_SCREEN),
        (t[r++] = 0),
        (t[r++] = 0),
        (t[r++] = 0),
        (t[r++] = 0),
        (t[r++] = e & 255),
        (t[r++] = (e >> 8) & 255),
        (t[r++] = (e >> 16) & 255),
        (t[r++] = (e >> 24) & 255),
        (t[r++] = 255),
        (t[1] = r - 4),
        (t[3] = J.ComputeCheckSum(t)),
        t
      );
    },
    WRITEScreenFwPack(e, t, r) {
      const a = new Uint8Array(256);
      let n = 4;
      ((a[0] = this.head),
        (a[1] = 0),
        (a[2] = this.ProtocolCMD.KB2_BL_WRITE_SCREEN),
        (a[n++] = e & 255),
        (a[n++] = (e >> 8) & 255),
        (a[n++] = (e >> 16) & 255),
        (a[n++] = (e >> 24) & 255),
        (a[n++] = t & 255),
        (a[n++] = (t >> 8) & 255));
      for (let o = 0; o < 244; o++) a[n++] = r[o];
      return ((a[1] = n - 4), (a[3] = J.ComputeCheckSum(a)), a);
    },
  },
  Ly = Pr("advanced", {
    state: () => ({
      currentConfigAdvanceKey: 0,
      advancedKeyConfigDialog: !1,
      advancedKeyConfigDialogPage: 0,
      updateFlag: 0,
      socdV3Buff: { DKS: [0, 0], DKSV: [0, 0], type: 0, mode: 0 },
      macroMode: "mode1",
      repeatCount: 1,
      repeatDelay: 1,
    }),
    getters: {
      getSOCDV3Buff(e) {
        return e.socdV3Buff;
      },
      isMacro: () => (e) => {
        var r;
        const t = de();
        for (let a = 0; a < 6; a++)
          for (let n = 0; n < 21; n++)
            if (
              ((r = t.KeyInfoArray[a]) == null ? void 0 : r[n]) != null &&
              t.KeyInfoArray[a][n].keyValue === e
            )
              return (
                console.log(e, t.KeyInfoArray[a][n].advanceKeyType),
                t.KeyInfoArray[a][n].advanceKeyType,
                !0
              );
        return !1;
      },
    },
    actions: {
      recCurConfigAdvanceKey(e) {
        this.currentConfigAdvanceKey = e;
      },
      setAdConfigDialog(e) {
        this.advancedKeyConfigDialog = e;
      },
      setAdConfigDialogPage(e) {
        this.advancedKeyConfigDialogPage = e;
      },
      changeUpdateFlag(e) {
        this.updateFlag += e;
      },
      updateAdvancedKeyDKS(e, t) {
        const r = de();
        for (let a = 0; a < 6; a++)
          for (let n = 0; n < 21; n++)
            if (
              r.KeyInfoArray[a][n] != null &&
              r.KeyInfoArray[a][n].keyValue === e
            ) {
              (r.updateKeyInfo(a, n, {
                ...r.KeyInfoArray[a][n],
                advanceKeyType: 1,
                DKSInfo: t,
              }),
                this.updateFlag++);
              return;
            }
      },
      updateAdvancedKeyMPT(e, t) {
        const r = de();
        for (let a = 0; a < 6; a++)
          for (let n = 0; n < 21; n++)
            if (
              r.KeyInfoArray[a][n] != null &&
              r.KeyInfoArray[a][n].keyValue === e
            ) {
              (r.updateKeyInfo(a, n, {
                ...r.KeyInfoArray[a][n],
                advanceKeyType: 2,
                MPTInfo: t,
              }),
                this.updateFlag++);
              return;
            }
      },
      updateAdvancedKeyMT(e, t) {
        const r = de();
        for (let a = 0; a < 6; a++)
          for (let n = 0; n < 21; n++)
            if (
              r.KeyInfoArray[a][n] != null &&
              r.KeyInfoArray[a][n].keyValue === e
            ) {
              (console.log("updateAdvancedKeyMT log"),
                r.updateKeyInfo(a, n, {
                  ...r.KeyInfoArray[a][n],
                  advanceKeyType: 3,
                  MTInfo: t,
                }),
                this.updateFlag++);
              return;
            }
      },
      updateAdvancedKeyTGL(e, t) {
        const r = de();
        for (let a = 0; a < 6; a++)
          for (let n = 0; n < 21; n++)
            if (
              r.KeyInfoArray[a][n] != null &&
              r.KeyInfoArray[a][n].keyValue === e
            ) {
              (r.updateKeyInfo(a, n, {
                ...r.KeyInfoArray[a][n],
                advanceKeyType: 4,
                TGLInfo: t,
              }),
                this.updateFlag++);
              return;
            }
      },
      updateAdvancedKeyEND(e, t) {
        const r = de();
        for (let a = 0; a < 6; a++)
          for (let n = 0; n < 21; n++)
            if (
              r.KeyInfoArray[a][n] != null &&
              r.KeyInfoArray[a][n].keyValue === e
            ) {
              (r.updateKeyInfo(a, n, {
                ...r.KeyInfoArray[a][n],
                advanceKeyType: 5,
                ENDInfo: t,
              }),
                this.updateFlag++);
              return;
            }
      },
      updateAdvancedKeySOCD(e, t) {
        const r = de();
        for (let a = 0; a < 6; a++)
          for (let n = 0; n < 21; n++)
            if (
              r.KeyInfoArray[a][n] != null &&
              r.KeyInfoArray[a][n].keyValue === e
            ) {
              (r.updateKeyInfo(a, n, {
                ...r.KeyInfoArray[a][n],
                advanceKeyType: 8,
                SOCDInfo: t,
              }),
                this.updateFlag++);
              return;
            }
      },
      updateAdvancedKeyRS(e, t) {
        const r = de();
        for (let a = 0; a < 6; a++)
          for (let n = 0; n < 21; n++)
            if (
              r.KeyInfoArray[a][n] != null &&
              r.KeyInfoArray[a][n].keyValue === e
            ) {
              (r.updateKeyInfo(a, n, {
                ...r.KeyInfoArray[a][n],
                advanceKeyType: 9,
                RSInfo: t,
              }),
                this.updateFlag++);
              return;
            }
      },
      updateAdvancedKeyMacro(e) {
        const t = de();
        for (let r = 0; r < 6; r++)
          for (let a = 0; a < 21; a++)
            if (
              t.KeyInfoArray[r][a] != null &&
              t.KeyInfoArray[r][a].keyValue === e
            ) {
              ((t.KeyInfoArray[r][a].advanceKeyType = 6),
                t.updateKeyInfo(r, a, {
                  ...t.KeyInfoArray[r][a],
                  advanceKeyType: 9,
                }),
                this.updateFlag++);
              return;
            }
      },
      getAdvancedKeyInfo(e) {
        const t = de();
        for (let r = 0; r < 6; r++)
          for (let a = 0; a < 21; a++)
            if (
              t.KeyInfoArray[r][a] != null &&
              t.KeyInfoArray[r][a].keyValue === e
            )
              return {
                advancedKeyType: t.KeyInfoArray[r][a].advanceKeyType,
                DKSInfo: t.KeyInfoArray[r][a].DKSInfo,
                MPTInfo: t.KeyInfoArray[r][a].MPTInfo,
                MTInfo: t.KeyInfoArray[r][a].MTInfo,
                TGLInfo: t.KeyInfoArray[r][a].TGLInfo,
                ENDInfo: t.KeyInfoArray[r][a].ENDInfo,
                SOCDInfo: t.KeyInfoArray[r][a].SOCDInfo,
                RSInfo: t.KeyInfoArray[r][a].RSInfo,
              };
        return null;
      },
      getAllAdvancedKeyInfo() {
        const e = de(),
          t = [];
        for (let r = 0; r < 6; r++)
          for (let a = 0; a < 21; a++)
            e.KeyInfoArray[r][a] != null &&
              e.KeyInfoArray[r][a].advanceKeyType > 0 &&
              (t[t.length] = e.KeyInfoArray[r][a]);
        return t;
      },
      deleteAdvancedKey(e) {
        const t = de();
        let r = 0;
        const a = new Array([]),
          n = new Array([]),
          o = new Uint16Array(312);
        let s = Q.KeyTouchMode.GlobalMode,
          l = !1,
          c = 0;
        for (let u = 0; u < 6; u++)
          for (let i = 0; i < 21; i++)
            t.KeyInfoArray[u][i] != null &&
              t.KeyInfoArray[u][i].keyValue === e &&
              (t.KeyInfoArray[u][i].advanceKeyType === 8 &&
                ((l = !0), (c = t.KeyInfoArray[u][i].SOCDInfo.DKS[1])),
              t.KeyInfoArray[u][i].advanceKeyType === 9 &&
                ((l = !0), (c = t.KeyInfoArray[u][i].RSInfo.DKS[1])),
              (t.KeyInfoArray[u][i].advanceKeyType = 0),
              (t.KeyInfoArray[u][i].isAdvancedKey = !1),
              t.KeyInfoArray[u][i].isQuickTouch === !0
                ? (s = Q.KeyTouchMode.QuickMode)
                : t.KeyInfoArray[u][i].isQuickTouch === !1 &&
                  t.KeyInfoArray[u][i].isSingleTouch === !0 &&
                  (s = Q.KeyTouchMode.SingleMode),
              (a[r] = t.KeyInfoArray[u][i].keyValue),
              (n[r] = Q.KeyLayout.Layout_Mode),
              (o[r] = (s << 4) | t.KeyInfoArray[u][i].advanceKeyType),
              r++);
        if (l === !0)
          for (let u = 0; u < 6; u++)
            for (let i = 0; i < 21; i++)
              t.KeyInfoArray[u][i] != null &&
                t.KeyInfoArray[u][i].keyValue === c &&
                ((t.KeyInfoArray[u][i].advanceKeyType = 0),
                (t.KeyInfoArray[u][i].isAdvancedKey = !1),
                t.KeyInfoArray[u][i].isQuickTouch === !0
                  ? (s = Q.KeyTouchMode.QuickMode)
                  : t.KeyInfoArray[u][i].isQuickTouch === !1 &&
                    t.KeyInfoArray[u][i].isSingleTouch === !0 &&
                    (s = Q.KeyTouchMode.SingleMode),
                (a[r] = t.KeyInfoArray[u][i].keyValue),
                (n[r] = Q.KeyLayout.Layout_Mode),
                (o[r] = (s << 4) | t.KeyInfoArray[u][i].advanceKeyType),
                r++);
        return (this.updateFlag++, { keyValues: a, layouts: n, values: o });
      },
      setSOCDV3Buff(e, t, r, a, n, o, s) {
        ((this.socdV3Buff.DKS[0] = e),
          (this.socdV3Buff.DKS[1] = t),
          (this.socdV3Buff.DKSV[0] = r),
          (this.socdV3Buff.DKSV[1] = a),
          (this.socdV3Buff.type = n),
          (this.socdV3Buff.mode = o),
          (this.socdV3Buff.delay = s));
      },
      getKeySocdMode(e) {
        const t = de();
        for (let r = 0; r < 6; r++)
          for (let a = 0; a < 21; a++)
            if (
              t.KeyInfoArray[r][a] != null &&
              t.KeyInfoArray[r][a].fn0_keyValue === e
            )
              return t.KeyInfoArray[r][a].SOCDInfo.mode;
        return 0;
      },
    },
  }),
  Ay = Pr("custom", {
    state: () => ({
      customKeyBuff: 0,
      keyboardSys: 0,
      hasWinMode: !0,
      hasMacMode: !0,
    }),
    actions: {
      editCustomKeyBuff(e) {
        this.customKeyBuff = e;
      },
      setKeyboardSys(e) {
        this.keyboardSys = e;
      },
      checkHasWinMode(e) {
        this.hasWinMode = e;
      },
      checkHasMacMode(e) {
        this.hasMacMode = e;
      },
    },
  }),
  _n = Pr("lightSetting", {
    state: () => ({
      currentColor: "#FF0000",
      LightBigMode: 0,
      LightSwitch: !1,
      LightMode: 0,
      LightLuminance: 3,
      LightSpeed: 3,
      LightSleepDelay: -1,
      LightDirection: !0,
      superResponseMode: !1,
      StaticLightMode: 0,
      DynamicLightColorID: 0,
      staticLightColorChecked: [!1, !1, !1, !1, !1, !1, !1, !1],
      staticLightColorList: [
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
      ],
      dynamicLightColorChecked: [!1, !1, !1, !1, !1, !1, !1, !1],
      dynamicLightBtnChecked: [
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
        !1,
      ],
      hasLogoLight: !1,
      LogoRGBBigMode: 0,
      LogoRGBSwitch: !1,
      LogoRGBMode: 0,
      LogoRGBLuminance: 3,
      LogoRGBSpeed: 3,
      LogoRGBDirection: !0,
      LogoRGBStaticLightMode: 0,
      LogoStaticLightColorChecked: [!1, !1, !1, !1, !1, !1, !1, !1],
      LogoRGBStaticLightColorList: [
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
      ],
      LogoDynamicLightBtnChecked: [!1, !1, !1, !1],
      lightFixRGB: { r: 0, g: 0, b: 0 },
    }),
    actions: {
      updateCurrentColor(e) {
        this.currentColor = e;
      },
      updateLightBigMode(e) {
        this.LightBigMode = e;
      },
      updateLightSwitch(e) {
        this.LightSwitch = e;
      },
      updateLightMode(e) {
        this.LightMode = e;
      },
      updateLightLuminance(e) {
        this.LightLuminance = e;
      },
      updateLightSpeed(e) {
        this.LightSpeed = e;
      },
      updateLightSleepDelay(e) {
        this.LightSleepDelay = e;
      },
      updateLightDirection(e) {
        this.LightDirection = e;
      },
      updateSuperResponseMode(e) {
        this.superResponseMode = e;
      },
      updateStaticLightMode(e) {
        this.StaticLightMode = e;
      },
      updateStaticLightColorChecked(e, t) {
        this.staticLightColorChecked[e] = t;
      },
      updateStaticLightColorList(e, t) {
        this.staticLightColorList[e] = t;
      },
      updateDynamicLightBtnChecked(e, t) {
        this.dynamicLightBtnChecked[e] = t;
      },
      updateHasLogoLight(e) {
        this.hasLogoLight = e;
      },
      updateLogoRGBBigMode(e) {
        this.LogoRGBBigMode = e;
      },
      updateLogoRGBSwitch(e) {
        this.LogoRGBSwitch = e;
      },
      updateLogoRGBMode(e) {
        this.LogoRGBMode = e;
      },
      updateLogoRGBLuminance(e) {
        this.LogoRGBLuminance = e;
      },
      updateLogoRGBSpeed(e) {
        this.LogoRGBSpeed = e;
      },
      updateLogoRGBDirection(e) {
        this.LogoRGBDirection = e;
      },
      updateLogoRGBStaticLightMode(e) {
        this.LogoRGBStaticLightMode = e;
      },
      updateLogoStaticLightColorChecked(e, t) {
        this.LogoStaticLightColorChecked[e] = t;
      },
      updateLogoRGBStaticLightColorList(e, t) {
        this.LogoRGBStaticLightColorList[e] = t;
      },
      updateLogoDynamicLightBtnChecked(e, t) {
        this.LogoDynamicLightBtnChecked[e] = t;
      },
      updateLightFixRGB(e) {
        this.lightFixRGB = e;
      },
      updateDynamicLightColorID(e) {
        (console.log("updateDynamicLightColorID:", e),
          (this.DynamicLightColorID = e));
      },
      updateDynamicLightColorChecked(e, t) {
        this.dynamicLightColorChecked[e] = t;
      },
    },
  }),
  ua = Pr("performance", {
    state: () => ({
      PerformancePage: 0,
      precision: 0.1,
      decimalPlace: 2,
      minTouchTravel: 0.1,
      maxTouchTravel: 4,
      globalTouchTravel: 1.5,
      singleTouchTravel: 1.5,
      singleTouchRelease: 1.5,
      pressDead: 0.2,
      releaseDead: 0.2,
      topDeadSwitch: !1,
      pressDeadOptimizeSwitch: !1,
      releaseDesdOptimizeSwitch: !1,
      rateOfReturn: -1,
      quickTouchPress: 0.3,
      quickTouchRelease: 0.3,
      quickTouchSwitchDisable: !0,
      quickTouchSwitch: !1,
      isAdjusting: !1,
      adjustingCount: 1,
      travelTestOn: !1,
      keyPressTestCount: 1,
      hasAxisSetting: !1,
    }),
    getters: {
      getMinTravel(e) {
        return e.minTouchTravel;
      },
      getMaxTravel(e) {
        const t = de();
        if (J.isFeatureSupported("signalSwitch")) {
          let r = 0;
          for (let a = 0; a < 6; a++)
            for (let n = 0; n < 21; n++)
              if (
                t.KeyInfoArray[a][n] != null &&
                t.KeyInfoArray[a][n].isCheck === !0
              ) {
                const o = this.getSwitchMaxTravel(t.KeyInfoArray[a][n].axisID);
                r < o && (r = o);
              }
          return r === 0 ? e.maxTouchTravel : r;
        }
        return e.maxTouchTravel;
      },
      getSwitchMaxTravel(e) {
        return (t) => {
          const r = de();
          if (r.axisList.length !== 0 && J.isFeatureSupported("signalSwitch")) {
            const a = r.axisList[t];
            return a ? a.maxTravel / 1e3 : e.maxTouchTravel;
          }
          return e.maxTouchTravel;
        };
      },
    },
    actions: {
      updatePrecision(e) {
        this.precision = e;
      },
      updateDecimalPlace(e) {
        this.decimalPlace = e;
      },
      updateMinTouchTravel(e) {
        this.minTouchTravel = e;
      },
      updateMaxTouchTravel(e) {
        this.maxTouchTravel = e;
      },
      updateGlobalTouchTravel(e) {
        this.globalTouchTravel = e;
      },
      updateSingleTouchTravel(e) {
        this.singleTouchTravel = e;
      },
      updateSingleTouchRelease(e) {
        this.singleTouchRelease = e;
      },
      changePressDead(e) {
        this.pressDead = e;
      },
      changeReleaseDead(e) {
        this.releaseDead = e;
      },
      updateTopDeadSwitch(e) {
        this.topDeadSwitch = e;
      },
      updateRateOfReturn(e) {
        this.rateOfReturn = e;
      },
      updateQuickTouchPress(e) {
        this.quickTouchPress = e;
      },
      updateQuickTouchRelease(e) {
        this.quickTouchRelease = e;
      },
      updateQuickTouchSwiDisable(e) {
        this.quickTouchSwitchDisable = e;
      },
      updateQuickTouchSwi(e) {
        this.quickTouchSwitch = e;
      },
      updateIsAdjusting(e) {
        this.isAdjusting = e;
      },
      updateAdjustingCount(e) {
        this.adjustingCount = e;
      },
      updateTravelTestOn(e) {
        this.travelTestOn = e;
      },
      updateKeyPressTestCount(e) {
        this.keyPressTestCount = e;
      },
      updateKeyInfoGlobalTouchTravel(e) {
        const t = de();
        for (let r = 0; r < 6; r++)
          for (let a = 0; a < 21; a++)
            t.KeyInfoArray[r][a] != null &&
              t.KeyInfoArray[r][a].isSingleTouch !== !0 &&
              (t.KeyInfoArray[r][a].touchTravel = e);
      },
      updateKeyInfoSingleTouchTravel(e) {
        let t = 0;
        const r = new Array([]),
          a = new Array([]),
          n = new Uint16Array(312),
          o = de();
        for (let s = 0; s < 6; s++)
          for (let l = 0; l < 21; l++)
            if (
              o.KeyInfoArray[s][l] != null &&
              o.KeyInfoArray[s][l].isCheck === !0
            ) {
              ((o.KeyInfoArray[s][l].touchTravel = e),
                (o.KeyInfoArray[s][l].isSingleTouch = !0));
              const c = Q.KeyTouchMode.SingleMode;
              ((r[t] = o.KeyInfoArray[s][l].keyValue),
                (a[t] = Q.KeyLayout.Layout_Mode),
                (n[t] = (c << 4) | o.KeyInfoArray[s][l].advanceKeyType),
                t++,
                (r[t] = o.KeyInfoArray[s][l].keyValue),
                (a[t] = Q.KeyLayout.Layout_DB0),
                (n[t] = o.KeyInfoArray[s][l].touchTravel * 1e3),
                t++);
            }
        return { keyValues: r, layouts: a, values: n };
      },
      getKeyCheckedCount() {
        let e = 0;
        const t = de();
        for (let r = 0; r < 6; r++)
          for (let a = 0; a < 21; a++)
            t.KeyInfoArray[r][a] != null && t.KeyInfoArray[r][a].isCheck && e++;
        return e;
      },
      updateKeyCheckedAxisID(e) {
        let t = 0;
        const r = new Array([]),
          a = new Array([]),
          n = new Uint16Array(312),
          o = de();
        for (let s = 0; s < 6; s++)
          for (let l = 0; l < 21; l++)
            o.KeyInfoArray[s][l] != null &&
              o.KeyInfoArray[s][l].isCheck &&
              ((o.KeyInfoArray[s][l].axisID = e),
              (r[t] = o.KeyInfoArray[s][l].keyValue),
              (a[t] = Q.KeyLayout.Layout_AXIS),
              (n[t] = o.KeyInfoArray[s][l].axisID),
              t++);
        return { keyValues: r, layouts: a, values: n };
      },
      updateKeyCheckedDeadPress(e) {
        let t = 0;
        const r = new Array([]),
          a = new Array([]),
          n = new Uint16Array(312),
          o = de();
        for (let s = 0; s < 6; s++)
          for (let l = 0; l < 21; l++)
            o.KeyInfoArray[s][l] != null &&
              o.KeyInfoArray[s][l].isCheck &&
              ((o.KeyInfoArray[s][l].deadPress = e),
              (r[t] = o.KeyInfoArray[s][l].keyValue),
              (a[t] = Q.KeyLayout.Layout_DP),
              (n[t] = o.KeyInfoArray[s][l].deadPress * 1e3),
              t++);
        return { keyValues: r, layouts: a, values: n };
      },
      updateKeyCheckedDeadRelease(e) {
        let t = 0;
        const r = new Array([]),
          a = new Array([]),
          n = new Uint16Array(312),
          o = de();
        for (let s = 0; s < 6; s++)
          for (let l = 0; l < 21; l++)
            o.KeyInfoArray[s][l] != null &&
              o.KeyInfoArray[s][l].isCheck &&
              ((o.KeyInfoArray[s][l].deadRelease = e),
              (r[t] = o.KeyInfoArray[s][l].keyValue),
              (a[t] = Q.KeyLayout.Layout_DR),
              (n[t] = o.KeyInfoArray[s][l].deadRelease * 1e3),
              t++);
        return { keyValues: r, layouts: a, values: n };
      },
      updateKeyInfoRTFirstTouchTravel(e) {
        let t = 0;
        const r = new Array([]),
          a = new Array([]),
          n = new Uint16Array(312),
          o = de();
        for (let s = 0; s < 6; s++)
          for (let l = 0; l < 21; l++)
            if (
              o.KeyInfoArray[s][l] != null &&
              o.KeyInfoArray[s][l].isCheck === !0
            ) {
              ((o.KeyInfoArray[s][l].touchTravel = e),
                (o.KeyInfoArray[s][l].isSingleTouch = !0));
              const c = Q.KeyTouchMode.QuickMode;
              ((r[t] = o.KeyInfoArray[s][l].keyValue),
                (a[t] = Q.KeyLayout.Layout_Mode),
                (n[t] = (c << 4) | o.KeyInfoArray[s][l].advanceKeyType),
                t++,
                (r[t] = o.KeyInfoArray[s][l].keyValue),
                (a[t] = Q.KeyLayout.Layout_DB0),
                (n[t] = o.KeyInfoArray[s][l].touchTravel * 1e3),
                t++);
            }
        return { keyValues: r, layouts: a, values: n };
      },
      updateKeyCheckedQuickTouchPressTravel(e) {
        let t = 0;
        const r = new Array([]),
          a = new Array([]),
          n = new Uint16Array(312),
          o = de();
        for (let s = 0; s < 6; s++)
          for (let l = 0; l < 21; l++)
            o.KeyInfoArray[s][l] != null &&
              o.KeyInfoArray[s][l].isCheck &&
              ((o.KeyInfoArray[s][l].isQuickTouch = !0),
              (o.KeyInfoArray[s][l].quickTouchPress = e),
              (r[t] = o.KeyInfoArray[s][l].keyValue),
              (a[t] = Q.KeyLayout.Layout_Mode),
              (n[t] =
                (Q.KeyTouchMode.QuickMode << 4) |
                o.KeyInfoArray[s][l].advanceKeyType),
              t++,
              (r[t] = o.KeyInfoArray[s][l].keyValue),
              (a[t] = Q.KeyLayout.Layout_RTP),
              (n[t] = o.KeyInfoArray[s][l].quickTouchPress * 1e3),
              t++,
              (r[t] = o.KeyInfoArray[s][l].keyValue),
              (a[t] = Q.KeyLayout.Layout_RTR),
              (n[t] = o.KeyInfoArray[s][l].quickTouchRelease * 1e3),
              t++);
        return { keyValues: r, layouts: a, values: n };
      },
      updateKeyCheckedQuickTouchReleaseTravel(e) {
        let t = 0;
        const r = new Array([]),
          a = new Array([]),
          n = new Uint16Array(312),
          o = de();
        for (let s = 0; s < 6; s++)
          for (let l = 0; l < 21; l++)
            o.KeyInfoArray[s][l] != null &&
              o.KeyInfoArray[s][l].isCheck &&
              ((o.KeyInfoArray[s][l].isQuickTouch = !0),
              (o.KeyInfoArray[s][l].quickTouchRelease = e),
              (r[t] = o.KeyInfoArray[s][l].keyValue),
              (a[t] = Q.KeyLayout.Layout_Mode),
              (n[t] =
                (Q.KeyTouchMode.QuickMode << 4) |
                o.KeyInfoArray[s][l].advanceKeyType),
              t++,
              (r[t] = o.KeyInfoArray[s][l].keyValue),
              (a[t] = Q.KeyLayout.Layout_RTP),
              (n[t] = o.KeyInfoArray[s][l].quickTouchPress * 1e3),
              t++,
              (r[t] = o.KeyInfoArray[s][l].keyValue),
              (a[t] = Q.KeyLayout.Layout_RTR),
              (n[t] = o.KeyInfoArray[s][l].quickTouchRelease * 1e3),
              t++);
        return { keyValues: r, layouts: a, values: n };
      },
      clearAdjustingSuccessData() {
        const e = de();
        for (let t = 0; t < 6; t++)
          for (let r = 0; r < 21; r++)
            e.KeyInfoArray[t][r] != null &&
              (e.KeyInfoArray[t][r].adjustingSuccess = !1);
      },
      getMaxPressTravel() {
        let e = 0,
          t = 0;
        const r = de();
        for (let a = 0; a < 6; a++)
          for (let n = 0; n < 21; n++)
            r.KeyInfoArray[a][n] != null &&
              e < r.KeyInfoArray[a][n].adjustingMM &&
              ((e = r.KeyInfoArray[a][n].adjustingMM),
              (t = r.KeyInfoArray[a][n].adjustingPress));
        return [e, t];
      },
      selectAllBtn() {
        const e = de();
        for (let t = 0; t < 6; t++)
          for (let r = 0; r < 21; r++)
            e.KeyInfoArray[t][r] != null &&
              e.KeyInfoArray[t][r].isCheck === !1 &&
              (e.KeyInfoArray[t][r].isCheck = !0);
        e.updateQuickTouchSwitch();
      },
      selectWASDBtn() {
        const e = de();
        for (let t = 0; t < 6; t++)
          for (let r = 0; r < 21; r++)
            e.KeyInfoArray[t][r] != null &&
              (e.KeyInfoArray[t][r].keyValue === 4 ||
                e.KeyInfoArray[t][r].keyValue === 22 ||
                e.KeyInfoArray[t][r].keyValue === 26 ||
                e.KeyInfoArray[t][r].keyValue === 7) &&
              (e.KeyInfoArray[t][r].isCheck = !0);
        e.updateQuickTouchSwitch();
      },
      selectNumBtn() {
        const e = de();
        for (let t = 0; t < 6; t++)
          for (let r = 0; r < 21; r++)
            e.KeyInfoArray[t][r] != null &&
              e.KeyInfoArray[t][r].keyValue >= 30 &&
              e.KeyInfoArray[t][r].keyValue <= 39 &&
              (e.KeyInfoArray[t][r].isCheck = !0);
        e.updateQuickTouchSwitch();
      },
      selectLetterBtn() {
        const e = de();
        for (let t = 0; t < 6; t++)
          for (let r = 0; r < 21; r++)
            e.KeyInfoArray[t][r] != null &&
              e.KeyInfoArray[t][r].keyValue >= 4 &&
              e.KeyInfoArray[t][r].keyValue <= 29 &&
              (e.KeyInfoArray[t][r].isCheck = !0);
        e.updateQuickTouchSwitch();
      },
      cancelSelect() {
        const e = de();
        for (let t = 0; t < 6; t++)
          for (let r = 0; r < 21; r++)
            e.KeyInfoArray[t][r] != null &&
              e.KeyInfoArray[t][r].isCheck === !0 &&
              (e.KeyInfoArray[t][r].isCheck = !1);
        e.updateQuickTouchSwitch();
      },
      resetTravel() {
        let e = 0;
        const t = new Array([]),
          r = new Array([]),
          a = new Uint16Array(312),
          n = de();
        for (let o = 0; o < 6; o++)
          for (let s = 0; s < 21; s++)
            if (
              n.KeyInfoArray[o][s] != null &&
              n.KeyInfoArray[o][s].isCheck === !0
            ) {
              ((n.KeyInfoArray[o][s].touchTravel = this.globalTouchTravel),
                (n.KeyInfoArray[o][s].isSingleTouch = !1),
                (n.KeyInfoArray[o][s].isQuickTouch = !1));
              const l = 0;
              ((t[e] = n.KeyInfoArray[o][s].keyValue),
                (r[e] = Q.KeyLayout.Layout_Mode),
                (a[e] = (l << 4) | n.KeyInfoArray[o][s].advanceKeyType),
                e++,
                (t[e] = n.KeyInfoArray[o][s].keyValue),
                (r[e] = Q.KeyLayout.Layout_DB0),
                (a[e] = n.KeyInfoArray[o][s].touchTravel * 1e3),
                e++);
            }
        return { keyValues: t, layouts: r, values: a };
      },
    },
  }),
  Ga = [
    { id: 0, name: "0", maxTravel: 0, minTravel: 0, color: "rgb(247, 101, 0)" },
    {
      id: 1,
      name: "磁玉pro",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(133, 113, 61)",
    },
    {
      id: 2,
      name: "万磁王RGB",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(64, 158, 10)",
    },
    {
      id: 3,
      name: "万磁王",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(76, 128, 116)",
    },
    {
      id: 4,
      name: "磁玉gaming",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(0, 156, 247)",
    },
    {
      id: 5,
      name: "天王磁轴标准版",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(214, 0, 247)",
    },
    {
      id: 6,
      name: "天王磁轴电竞版",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(247, 0, 132)",
    },
    {
      id: 7,
      name: "万磁王pom",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(0, 156, 8)",
    },
    {
      id: 8,
      name: "双轨磁白轴",
      maxTravel: 3800,
      minTravel: 10,
      color: "rgb(161, 126, 101)",
    },
    {
      id: 9,
      name: "海木磁轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(63, 131, 176)",
    },
    {
      id: 10,
      name: "磁墨轴",
      maxTravel: 3600,
      minTravel: 10,
      color: "rgb(247, 101, 0)",
    },
    {
      id: 11,
      name: "咏春轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(64, 158, 10)",
    },
    {
      id: 12,
      name: "IPI雷电轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(0, 247, 194)",
    },
    {
      id: 13,
      name: "利维坦轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(214, 0, 247)",
    },
    {
      id: 14,
      name: "黑皇轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(247, 0, 132)",
    },
    {
      id: 15,
      name: "形意轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(253, 153, 206)",
    },
    {
      id: 16,
      name: "磁轴16",
      maxTravel: 3700,
      minTravel: 10,
      color: "rgba(255, 208, 0, 0.6)",
    },
    {
      id: 17,
      name: "心悦粉磁轴",
      maxTravel: 3800,
      minTravel: 10,
      color: "rgb(107, 0, 247)",
    },
    {
      id: 18,
      name: "磁玉轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(0, 86, 107)",
    },
    {
      id: 19,
      name: "默认轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(109, 0, 109)",
    },
    {
      id: 20,
      name: "默认轴 ",
      maxTravel: 3600,
      minTravel: 10,
      color: "rgb(82, 82, 82)",
    },
    {
      id: 21,
      name: "合金轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(238, 172, 172)",
    },
    {
      id: 22,
      name: "默认轴  ",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(253, 88, 88)",
    },
    {
      id: 23,
      name: "紫星轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(138, 138, 138)",
    },
    {
      id: 24,
      name: "天际线轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(185, 255, 106)",
    },
    {
      id: 25,
      name: "冰磁轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(103, 156, 255)",
    },
    {
      id: 26,
      name: "泰山磁轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(91, 162, 221)",
    },
    {
      id: 27,
      name: "黑皇轴 ",
      maxTravel: 3360,
      minTravel: 10,
      color: "rgb(70, 70, 70)",
    },
    {
      id: 28,
      name: "海皇轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(0, 119, 255)",
    },
    {
      id: 29,
      name: "玉皇轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(206, 255, 193)",
    },
    {
      id: 30,
      name: "爱心万磁王",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(255, 129, 129)",
    },
    {
      id: 31,
      name: "天空轴",
      maxTravel: 3900,
      minTravel: 10,
      color: "rgb(100, 245, 255)",
    },
    {
      id: 32,
      name: "磁玉MAX",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(185, 164, 142)",
    },
    {
      id: 33,
      name: "万磁Pro",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(218, 85, 131)",
    },
    {
      id: 34,
      name: "红莲轴",
      maxTravel: 3200,
      minTravel: 10,
      color: "rgb(141, 211, 95)",
    },
    {
      id: 35,
      name: "八宝轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(127, 67, 74)",
    },
    {
      id: 36,
      name: "禾金轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(221, 199, 0)",
    },
    {
      id: 37,
      name: "佳达隆轴",
      maxTravel: 3700,
      minTravel: 10,
      color: "rgb(26, 118, 255)",
    },
    {
      id: 38,
      name: "磁白轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(243, 59, 234)",
    },
    {
      id: 39,
      name: "幻晶轴",
      maxTravel: 3600,
      minTravel: 10,
      color: "rgb(255, 95, 188)",
    },
    {
      id: 40,
      name: "蓝冰轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(247, 145, 30)",
    },
    {
      id: 41,
      name: "粉皇轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(173, 0, 165)",
    },
    {
      id: 42,
      name: "磁力MAX",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(127, 125, 74)",
    },
    {
      id: 43,
      name: "磁神轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(134, 85, 214)",
    },
    {
      id: 44,
      name: "二代磁白轴",
      maxTravel: 3800,
      minTravel: 10,
      color: "rgb(148, 129, 31)",
    },
    {
      id: 45,
      name: "曜夜轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(127, 129, 31)",
    },
    {
      id: 46,
      name: "曜影轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(30, 129, 31)",
    },
    {
      id: 47,
      name: "万磁gaming围墙轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(190, 129, 31)",
    },
    {
      id: 48,
      name: "佳达隆低配轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(148, 50, 31)",
    },
    {
      id: 49,
      name: "蝠星轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(148, 129, 60)",
    },
    {
      id: 50,
      name: "瑞翼鲨",
      maxTravel: 4e3,
      minTravel: 10,
      color: "rgb(148, 100, 31)",
    },
    {
      id: 51,
      name: "owlab ti",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(90, 100, 31)",
    },
    {
      id: 52,
      name: "赤宵磁轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(120, 100, 31)",
    },
    {
      id: 53,
      name: "桃晶轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(120, 30, 31)",
    },
    {
      id: 54,
      name: "悟空轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(50, 100, 31)",
    },
    {
      id: 55,
      name: "RGB万磁王",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(255, 238, 173)",
    },
    {
      id: 56,
      name: "绿龙轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(152, 215, 182)",
    },
    {
      id: 57,
      name: "冰磁轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(153, 221, 255)",
    },
    {
      id: 58,
      name: "磁玉pro",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(57, 117, 198)",
    },
    {
      id: 59,
      name: "佳达隆 磁珀",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(190, 190, 190)",
    },
    {
      id: 60,
      name: "佳达隆 万磁 Gaming",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(255, 217, 127)",
    },
    {
      id: 61,
      name: "凯华磁神",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(124, 220, 240)",
    },
    {
      id: 62,
      name: "星磁轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(110, 153, 118)",
    },
    {
      id: 63,
      name: "天青轴",
      maxTravel: 3600,
      minTravel: 10,
      color: "rgb(54, 182, 242)",
    },
    {
      id: 64,
      name: "闪雷轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(169, 72, 55)",
    },
    {
      id: 65,
      name: "蝶翼磁轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(171, 203, 242)",
    },
    {
      id: 66,
      name: "佳达隆万磁轴 Gaming",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(223, 118, 239)",
    },
    {
      id: 67,
      name: "青蛇rgb",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(154, 255, 86)",
    },
    {
      id: 68,
      name: "科泰轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(77, 153, 252)",
    },
    {
      id: 69,
      name: "TTC万磁王",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(197, 255, 110)",
    },
    {
      id: 70,
      name: "ti轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(12, 249, 233)",
    },
    {
      id: 71,
      name: "磁玉pom",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(241, 241, 85)",
    },
    {
      id: 72,
      name: "如意轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(113, 247, 215)",
    },
    {
      id: 73,
      name: "浅粉轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(129, 249, 92)",
    },
    {
      id: 74,
      name: "冰玉轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(239, 76, 76)",
    },
    {
      id: 75,
      name: "太阳神轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(255, 235, 109)",
    },
    {
      id: 76,
      name: "雨露gaming",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(254, 94, 94)",
    },
    {
      id: 77,
      name: "雷电轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(255, 166, 32)",
    },
    {
      id: 78,
      name: "磁玉max ",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(239, 235, 235)",
    },
    {
      id: 79,
      name: "八宝轴 ",
      maxTravel: 3600,
      minTravel: 10,
      color: "rgb(255, 22, 22)",
    },
    {
      id: 80,
      name: "锦鲤轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(255, 137, 137)",
    },
    {
      id: 81,
      name: "沐风轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(158, 243, 249)",
    },
    {
      id: 82,
      name: "精灵王轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(33, 214, 13)",
    },
    {
      id: 83,
      name: "青花轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(19, 238, 194)",
    },
    {
      id: 84,
      name: "蝠星轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(255, 87, 34)",
    },
    {
      id: 85,
      name: "冰皇轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(221, 224, 220)",
    },
    {
      id: 86,
      name: "星磁轴 ",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(58, 111, 255)",
    },
    {
      id: 87,
      name: "登神MAX",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(132, 53, 53)",
    },
    {
      id: 88,
      name: "粉皇mini",
      maxTravel: 3100,
      minTravel: 10,
      color: "rgb(247, 187, 241)",
    },
    {
      id: 89,
      name: "登神轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(200, 145, 145)",
    },
    {
      id: 90,
      name: "登神pro",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(247, 105, 105)",
    },
    {
      id: 91,
      name: "磁极轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 92,
      name: "灭霸轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 93,
      name: "磁玉air",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 94,
      name: "万磁gaming轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 95,
      name: "磁玉定制",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 96,
      name: "兵王轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 97,
      name: "高特轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 98,
      name: "欧米伽磁轴",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 99,
      name: "蜜雪磁轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 100,
      name: "超神磁轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 101,
      name: "冰心轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 102,
      name: "玉京子轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 103,
      name: "天空轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 104,
      name: "糯米磁轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 105,
      name: "磁玉gaming ",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 106,
      name: "绿龙轴 ",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 107,
      name: "磁玉Pom ",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 108,
      name: "磁玉Max  ",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 109,
      name: "磁玉Air ",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 110,
      name: "TTC万磁王 ",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 111,
      name: "RGB万磁王 ",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 112,
      name: "青蛇轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 113,
      name: "爱心万磁王轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 114,
      name: "Pom万磁王轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 115,
      name: "白蛇轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 116,
      name: "天王轴电竞",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 117,
      name: "Ti轴 ",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 118,
      name: "登神Pro ",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 119,
      name: "泰山轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 120,
      name: "八宝轴γ",
      maxTravel: 3500,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 121,
      name: "悟空轴 ",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 122,
      name: "冰皇轴 ",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 123,
      name: "极磁Pro",
      maxTravel: 3600,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 124,
      name: "星界轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 125,
      name: "蓝玉轴（RK）",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 126,
      name: "冰魂轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 127,
      name: "冰神轴",
      maxTravel: 3400,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 128,
      name: "花火磁轴",
      maxTravel: 3200,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 129,
      name: "雷电轴",
      maxTravel: 3200,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
    {
      id: 130,
      name: "磁音轴",
      maxTravel: 3300,
      minTravel: 10,
      color: "rgb(106, 106, 106)",
    },
  ],
  Dy = Pr("RecData", () => {
    const e = le([]),
      t = Ay();
    async function r() {
      const a = ua(),
        n = e.value[2],
        o = e.value.slice(4);
      if (n === Q.ProtocolCMD.KB2_CMD + 128) {
        const s = o[1];
        if (s === Q.CMDOrder.KB2_CMDODER_QUERY_KEYBOARD_NAME) {
          const l = de(),
            {
              KeyboardName: c,
              showFourConfig: u,
              showMorkbladeDialog: i,
              appVersion: f,
            } = Te(l),
            d = new TextDecoder("utf-8"),
            p = o.slice(2, 34).filter((y) => y !== 0);
          ((c.value = d.decode(new Uint8Array(p))),
            c.value === "MorkBlade Bold TKL" &&
              f.value === "App V1.0.4" &&
              ((u.value = !1), (i.value = !0)),
            J.log(
              1,
              `
键盘名称：${c.value}`,
            ));
        } else if (s === Q.CMDOrder.KB2_CMDODER_PROTOCOL_VERSION) {
          const l = de(),
            {
              ProtocolVersion: c,
              appVersion: u,
              BoardID: i,
              JKMacroShow: f,
            } = Te(l),
            d = o[3] & 15,
            p = (o[2] >> 4) & 15,
            y = o[2] & 15;
          ((c.value = `${d}.${p}.${y}`),
            console.log(u.value, i.value, c.value),
            u.value === "App V2.0.0" &&
              i.value === 100794629 &&
              c.value === "1.0.4" &&
              (f.value = !0),
            J.log(
              1,
              `
协议版本：${c.value}`,
            ));
        } else if (s === Q.CMDOrder.KB2_CMDODER_QUERY_PRECISION) {
          const l = de(),
            { VID: c, PID: u } = Te(l),
            {
              precision: i,
              decimalPlace: f,
              minTouchTravel: d,
              maxTouchTravel: p,
            } = Te(a);
          a.updatePrecision(o[2] / 1e3);
          const y = (o[4] << 8) | o[3];
          a.updateMinTouchTravel(y / 1e3);
          const I = (o[6] << 8) | o[5];
          a.updateMaxTouchTravel(I / 1e3);
          const O = i.value.toString().split(".")[1];
          (console.log(O),
            a.updateDecimalPlace(O.length),
            ((c.value === 14139 && u.value === 4276) ||
              (c.value === 14139 && u.value === 8282)) &&
              (a.updatePrecision(0.01), a.updateDecimalPlace(2)),
            J.log(
              1,
              `
键盘精度：${i.value.toFixed(3)}
精度小数位：${f.value}
最小行程：${d.value.toFixed(2)}
最大行程：${p.value.toFixed(2)}`,
            ));
        } else if (s === Q.CMDOrder.KB2_CMDODER_RATEOFRETURN) {
          const l = ua(),
            { rateOfReturn: c } = Te(l);
          (l.updateRateOfReturn(o[2]),
            console.log(o),
            J.log(
              1,
              `
键盘回报率：${c.value}`,
            ));
        } else if (s === Q.CMDOrder.KB2_CMDODER_CONFIGID) {
          const l = de(),
            { hasFourConfig: c, configID: u } = Te(l),
            i = o[2];
          ((u.value = i),
            (c.value = !0),
            J.log(
              1,
              `
键盘配置文件id：${u.value}`,
            ));
        } else if (s === Q.CMDOrder.KB2_CMDODER_TOP_DEAD_SWITCH) {
          const l = ua(),
            { topDeadSwitch: c } = Te(l);
          (o[2] === 0 ? l.updateTopDeadSwitch(!1) : l.updateTopDeadSwitch(!0),
            J.log(
              1,
              `
顶部死区开关：${c.value}`,
            ));
        } else if (s === Q.CMDOrder.KB2_CMDODER_AXISLIST) {
          const l = de(),
            { axisList: c } = Te(l);
          c.value = [];
          for (let u = 0; u < 32; u++) {
            const i = (o[(u + 1) * 2] << 8) | o[(u + 1) * 2 + 1];
            if (i === 65535 || i === 0) break;
            {
              const f = {
                id: i,
                name: Ga[i].name,
                minTravel: Ga[i].minTravel,
                maxTravel: Ga[i].maxTravel,
                color: Ga[i].color,
              };
              c.value.push(f);
            }
          }
          (console.log(c.value),
            J.log(
              1,
              `
键盘支持的轴体id：${c.value[0].id}`,
            ));
        } else
          s === Q.CMDOrder.KB2_CMDODER_CHANGE_SYS_WIN
            ? o[2] === 1 &&
              (t.setKeyboardSys(0),
              J.log(
                1,
                `
切换win模式成功`,
              ))
            : s === Q.CMDOrder.KB2_CMDODER_CHANGE_SYS_MAC
              ? o[2] === 1 &&
                (t.setKeyboardSys(1),
                J.log(
                  1,
                  `
切换mac模式成功`,
                ))
              : s === Q.CMDOrder.KB2_CMDODER_QUERY_SYS_WIN
                ? (J.log(
                    1,
                    `
查询win模式：${o[2]}`,
                  ),
                  o[2] === 1
                    ? (t.setKeyboardSys(0),
                      t.checkHasWinMode(!0),
                      J.log(
                        1,
                        `
当前为win模式`,
                      ))
                    : o[2] === 0
                      ? (t.setKeyboardSys(1), t.checkHasWinMode(!0))
                      : o[2] === 255 && t.checkHasWinMode(!1))
                : s === Q.CMDOrder.KB2_CMDODER_QUERY_SYS_MAC
                  ? (J.log(
                      1,
                      `
查询mac模式：${o[2]}`,
                    ),
                    o[2] === 1
                      ? (t.setKeyboardSys(1),
                        t.checkHasMacMode(!0),
                        J.log(
                          1,
                          `
当前为mac模式`,
                        ))
                      : o[2] === 0
                        ? (t.setKeyboardSys(0), t.checkHasMacMode(!0))
                        : o[2] === 255 && t.checkHasMacMode(!1))
                  : s === Q.CMDOrder.KB2_CMDODER_QUERY_LIGHT_FIX_RGB &&
                    (J.log(
                      1,
                      `
查询灯光偏色设置：${o[2]},${o[3]},${o[4]}`,
                    ),
                    _n().updateLightFixRGB({ r: o[2], g: o[3], b: o[4] }));
      } else if (n === Q.ProtocolCMD.KB2_CMD_SYNC + 128) {
        const s = de(),
          { BoardID: l, KeyboardLayout: c, KeyType: u } = Te(s),
          i = o.slice(1, 5),
          f = new DataView(i.buffer);
        l.value = f.getUint32(0, !0);
        const d = o[4];
        c.value = d;
        const p = o[3];
        ((u.value = p),
          J.log(
            1,
            `
主板ID：${l.value}
键盘布局ID：${c.value}
键盘轴体ID：${u.value}`,
          ));
        const { KeyboardRunMode: y, KeyboardSN: I } = Te(s),
          R = o[7];
        y.value = R;
        const O = new TextDecoder("utf-8");
        ((I.value = O.decode(o.slice(9, 25))),
          J.log(
            1,
            `
键盘当前运行模式：${y.value}
键盘SN：${I.value}`,
          ));
        const { firewareSpaceSize: F, appVersion: L, appBuildDate: A } = Te(s),
          B = (o[6] << 8) | o[5];
        let K = "";
        if (B < 1e3) {
          const j = Math.floor(B / 100),
            k = Math.floor((B % 100) / 10),
            te = B % 10;
          K = `V${j}.${k}.${te}`;
        } else F.value = B * 256;
        (O.decode(o.slice(26, 30)).startsWith("Boot")
          ? (L.value = O.decode(o.slice(26, 37)))
          : (L.value = O.decode(o.slice(26, 36))),
          (A.value = O.decode(o.slice(43, 54))),
          J.log(
            1,
            `
固件空间大小：${F.value}
硬件版本：${K}
当前固件版本：${L.value}
固件编译日期:${A.value}`,
          ));
      } else if (n === Q.ProtocolCMD.KB2_CMD_DEFKEY + 128) {
        const s = de();
        let l = o[1];
        l === 0 && s.resetAllKeyInfo();
        for (let u = 0; u < 21; u++)
          if ((console.log(o[u + 2]), o[u + 2] === 0))
            s.updateKeyInfo(l, u, null);
          else {
            const i = {
              keyValue: 0,
              row: 0,
              col: 0,
              color: [0, 255, 255],
              touchTravel: 1.5,
              touchRelease: 0.3,
              quickTouchPress: 0.3,
              quickTouchRelease: 0.3,
              deadPress: 0.2,
              deadRelease: 0.2,
              isCheck: !1,
              isSingleTouch: !1,
              isQuickTouch: !1,
              isAdvancedKey: !1,
              advanceKeyType: 0,
              macroBreak: !1,
              fn0_keyValue: 0,
              fn1_keyValue: 0,
              fn2_keyValue: 0,
              fn3_keyValue: 0,
              fn_keyValue: [0, 0, 0, 0],
              DKSInfo: {
                DKS: [0, 0, 0, 0],
                TRPS: [0, 0, 0, 0],
                DB: 1.4,
                DB2: 3,
              },
              MPTInfo: { DKS: [0, 0, 0], DB: [0.5, 1, 1.5] },
              MTInfo: { DKS: [0, 0], Delay: 200 },
              TGLInfo: { DKS: 0, Delay: 200 },
              ENDInfo: { DKS: 0 },
              SOCDInfo: { DKS: [0, 0], DKSV: [0, 0], type: 0, mode: 0 },
              RSInfo: { DKS: [0, 0] },
              axisID: 0,
              adjustingMM: 0,
              adjustingADC: 0,
              adjustingPress: 0,
              adjustingSuccess: !1,
            };
            ((i.keyValue = o[u + 2]),
              (i.row = l),
              (i.col = u),
              s.updateKeyInfo(l, u, i));
          }
        l = o[23];
        for (let u = 0; u < 21; u++)
          if (o[u + 24] === 0) s.updateKeyInfo(l, u, null);
          else {
            const i = {
              keyValue: 0,
              row: 0,
              col: 0,
              color: [0, 255, 255],
              touchTravel: 1.5,
              touchRelease: 0.3,
              quickTouchPress: 0.3,
              quickTouchRelease: 0.3,
              deadPress: 0.2,
              deadRelease: 0.2,
              isCheck: !1,
              isSingleTouch: !1,
              isQuickTouch: !1,
              isAdvancedKey: !1,
              advanceKeyType: 0,
              macroBreak: !1,
              fn0_keyValue: 0,
              fn1_keyValue: 0,
              fn2_keyValue: 0,
              fn3_keyValue: 0,
              fn_keyValue: [0, 0, 0, 0],
              DKSInfo: {
                DKS: [0, 0, 0, 0],
                TRPS: [0, 0, 0, 0],
                DB: 1.4,
                DB2: 3,
              },
              MPTInfo: { DKS: [0, 0, 0], DB: [0.5, 1, 1.5] },
              MTInfo: { DKS: [0, 0], Delay: 200 },
              TGLInfo: { DKS: 0, Delay: 200 },
              ENDInfo: { DKS: 0 },
              SOCDInfo: { DKS: [0, 0], DKSV: [0, 0], type: 0, mode: 0 },
              RSInfo: { DKS: [0, 0] },
              axisID: 0,
              adjustingMM: 0,
              adjustingADC: 0,
              adjustingPress: 0,
              adjustingSuccess: !1,
            };
            ((i.keyValue = o[u + 24]),
              (i.row = l),
              (i.col = u),
              s.updateKeyInfo(l, u, i));
          }
      } else if (n === Q.ProtocolCMD.KB2_CMD_KEY + 128) {
        const s = de();
        let l = 1;
        for (let c = 0; c < 14; c++) {
          const u = o[l++],
            i = o[l++],
            f = (o[l + 1] << 8) | o[l];
          if (((l += 2), u !== 0))
            if (i <= Q.KeyLayout.Layout_Fn3) s.updateKeyInfoFnKeyValue(u, i, f);
            else if (i === Q.KeyLayout.Layout_DB0) {
              const d = de(),
                { decimalPlace: p } = Te(a),
                y = f / 1e3;
              d.updateKeyInfoTouchTravel(u, y.toFixed(p.value));
            } else if (i === Q.KeyLayout.Layout_Mode) {
              const d = f & 255,
                p = (d >> 4) & 15,
                y = d & 15;
              (s.updateTouchMode(u, p), s.updateAdvancedKeyMode(u, y));
            } else
              i === Q.KeyLayout.Layout_RTP
                ? s.updateKeyInfoQuickTouchPTravel(u, f / 1e3)
                : i === Q.KeyLayout.Layout_RTR
                  ? s.updateKeyInfoQuickTouchRTravel(u, f / 1e3)
                  : i === Q.KeyLayout.Layout_DB1
                    ? s.updateAdvancedKeyDB1(u, f / 1e3)
                    : i === Q.KeyLayout.Layout_DB2
                      ? s.updateAdvancedKeyDB2(u, f / 1e3)
                      : i === Q.KeyLayout.Layout_DB3
                        ? s.updateAdvancedKeyDB3(u, f / 1e3)
                        : i === Q.KeyLayout.Layout_DKS1
                          ? s.updateAdvancedKeyDKS1(u, f)
                          : i === Q.KeyLayout.Layout_DKS2
                            ? s.updateAdvancedKeyDKS2(u, f)
                            : i === Q.KeyLayout.Layout_DKS3
                              ? s.updateAdvancedKeyDKS3(u, f)
                              : i === Q.KeyLayout.Layout_DKS4
                                ? s.updateAdvancedKeyDKS4(u, f)
                                : i === Q.KeyLayout.Layout_TRPS1
                                  ? s.updateAdvancedKeyTRPS1(u, f)
                                  : i === Q.KeyLayout.Layout_TRPS2
                                    ? s.updateAdvancedKeyTRPS2(u, f)
                                    : i === Q.KeyLayout.Layout_TRPS3
                                      ? s.updateAdvancedKeyTRPS3(u, f)
                                      : i === Q.KeyLayout.Layout_TRPS4
                                        ? s.updateAdvancedKeyTRPS4(u, f)
                                        : i === Q.KeyLayout.Layout_MTDelay
                                          ? s.updateAdvancedKeyDelay(u, f * 10)
                                          : i === Q.KeyLayout.Layout_DP
                                            ? s.updateKeyInfoDeadPress(
                                                u,
                                                f / 1e3,
                                              )
                                            : i === Q.KeyLayout.Layout_DR
                                              ? s.updateKeyInfoDeadRelease(
                                                  u,
                                                  f / 1e3,
                                                )
                                              : i === Q.KeyLayout.Layout_KR
                                                ? s.updateKeyInfoSingleTouchRelease(
                                                    u,
                                                    f / 1e3,
                                                  )
                                                : i ===
                                                    Q.KeyLayout.Layout_AXIS &&
                                                  s.updateAxisID(u, f);
          else break;
        }
      } else if (n === Q.ProtocolCMD.KB2_CMD_DB + 128) {
        const s = ua(),
          { globalTouchTravel: l, pressDead: c, releaseDead: u } = Te(s);
        (s.updateGlobalTouchTravel(((o[4] << 8) | o[3]) / 1e3),
          s.changePressDead(((o[6] << 8) | o[5]) / 1e3),
          s.changeReleaseDead(((o[8] << 8) | o[7]) / 1e3),
          J.log(
            1,
            `
全局触发行程：${l.value.toFixed(2)}
按压死区：${c.value.toFixed(2)}
抬起死区：${u.value.toFixed(2)}`,
          ));
      } else if (n === Q.ProtocolCMD.KB2_CMD_PRGB + 128) {
        const s = _n(),
          {
            LightSwitch: l,
            LightMode: c,
            LightLuminance: u,
            LightSpeed: i,
            LightSleepDelay: f,
            LightDirection: d,
            superResponseMode: p,
            StaticLightMode: y,
            DynamicLightColorID: I,
          } = Te(s);
        let R = 5;
        for (let F = 0; F < 7; F++) {
          const L = o[R++],
            A = o[R++],
            B = o[R++];
          (R++,
            s.updateStaticLightColorList(
              F,
              `#${B.toString(16).padStart(2, "0")}${A.toString(16).padStart(2, "0")}${L.toString(16).padStart(2, "0")}`,
            ));
        }
        const O = o[37];
        (s.updateLightSwitch((O & 1) !== 0),
          s.updateLightDirection((O & 2) !== 0),
          s.updateSuperResponseMode((O & 16) !== 0),
          s.updateLightLuminance(o[38]),
          s.updateLightSpeed(o[40]),
          s.updateLightMode(o[39]),
          c.value === 0
            ? s.updateLightBigMode(1)
            : c.value > 0 && c.value <= 20
              ? s.updateLightBigMode(2)
              : s.updateLightBigMode(3),
          l.value !== !0 && s.updateLightBigMode(0),
          s.updateLightSleepDelay(o[41]),
          s.updateStaticLightMode(o[42]),
          s.updateDynamicLightColorID(o[43]),
          J.log(
            1,
            `
灯光模式：${c.value}
开关：${l.value}
方向：${d.value}
亮度：${u.value}
速度：${i.value}
睡眠时间：${f.value}
超级响应模式：${p.value}
静态灯效模式：${y.value}`,
          ));
      } else if (n === Q.ProtocolCMD.KB2_CMD_LOGORGB + 128) {
        const s = _n(),
          {
            LogoRGBSwitch: l,
            LogoRGBMode: c,
            LogoRGBLuminance: u,
            LogoRGBSpeed: i,
            LogoRGBDirection: f,
            LogoRGBStaticLightMode: d,
          } = Te(s);
        s.updateHasLogoLight(!0);
        let p = 5;
        for (let I = 0; I < 7; I++) {
          const R = o[p++],
            O = o[p++],
            F = o[p++];
          (p++,
            s.updateLogoRGBStaticLightColorList(
              I,
              `#${F.toString(16).padStart(2, "0")}${O.toString(16).padStart(2, "0")}${R.toString(16).padStart(2, "0")}`,
            ));
        }
        const y = o[37];
        (s.updateLogoRGBSwitch((y & 1) !== 0),
          s.updateLogoRGBDirection((y & 2) !== 0),
          s.updateLogoRGBLuminance(o[38]),
          s.updateLogoRGBSpeed(o[40]),
          s.updateLogoRGBMode(o[39]),
          c.value === 0
            ? s.updateLogoRGBBigMode(1)
            : c.value > 0 && c.value <= 2 && s.updateLogoRGBBigMode(2),
          l.value !== !0 && s.updateLogoRGBBigMode(0),
          s.updateLogoRGBStaticLightMode(o[42]),
          J.log(
            1,
            `
logo灯光模式：${c.value}
logo开关：${l.value}
logo方向：${f.value}
logo亮度：${u.value}
logo速度：${i.value}
logo静态灯效模式：${d.value}`,
          ));
      } else if (n === Q.ProtocolCMD.KB2_CMD_KRGB + 128) {
        const s = de();
        let l = 1;
        for (let c = 0; c < 14; c++) {
          const u = o[l++],
            i = o[l++],
            f = o[l++],
            d = o[l++];
          u !== 0 && s.updateKeyColor(u, i, f, d);
        }
      } else if (n === Q.ProtocolCMD.KB2_BL_SIGN + 128) {
        const s = ca(),
          { signSuccess: l, signature: c } = Te(s);
        if (o[0] === 0) {
          l.value = !0;
          for (let u = 0; u < 16; u++) c.value[u] = o[u + 3];
        }
      } else if (n === Q.ProtocolCMD.KB2_BL_WRITE + 128) {
        const s = ca(),
          { currentUpdateAddress: l, isUpdate: c } = Te(s);
        if (o[0] === 0 && c.value > 0) {
          const u = (o[4] << 24) | (o[3] << 16) | (o[2] << 8) | o[1],
            i = (o[6] << 8) | o[5];
          ((l.value = u + i), console.log(`升级返回的地址：${l.value}`));
        }
      } else if (n === Q.ProtocolCMD.KB2_BL_RCRC + 128) {
        const s = ca(),
          { crc: l } = Te(s);
        ((l.value = (o[10] << 8) | o[9]),
          console.log("获取到的键盘crc：", l.value));
      } else if (n === Q.ProtocolCMD.KB2_CMD_RM6X21 + 128) {
        const s = de(),
          { isAdjusting: l, adjustingCount: c, keyPressTestCount: u } = Te(a);
        let i = 0;
        l.value ? (i = (c.value % 2) + 1) : (i = (u.value % 2) + 1);
        let f = 2,
          d = 0,
          p = 0,
          y = 0;
        if (o[1] === 2) {
          if (i === 1)
            for (p = 0; p < 3; p++)
              for (y = 0; y < 21; y++)
                ((d = (o[f + 1] << 8) | o[f]),
                  s.getKeyInfo(p, y) !== null &&
                    s.updateAdjustingMM(p, y, d / 1e3),
                  (f += 2));
          else if (i === 2)
            for (p = 3; p < 6; p++)
              for (y = 0; y < 21; y++)
                ((d = (o[f + 1] << 8) | o[f]),
                  s.getKeyInfo(p, y) !== null &&
                    s.updateAdjustingMM(p, y, d / 1e3),
                  (f += 2));
          a.updateKeyPressTestCount(u.value + 1);
        } else if (o[1] === 3)
          for (p = 0; p < 6; p++)
            for (y = 0; y < 21; y++)
              ((d = o[f]),
                s.getKeyInfo(p, y) !== null && s.updateAdjustingPress(p, y, d),
                (f += 1));
        else if (o[1] === 6) {
          if (i === 1)
            for (p = 0; p < 3; p++)
              for (y = 0; y < 21; y++)
                ((d = (o[f + 1] << 8) | o[f]),
                  s.getKeyInfo(p, y) !== null && s.updateAdjustingADC(p, y, d),
                  (f += 2));
          else if (i === 2)
            for (p = 3; p < 6; p++)
              for (y = 0; y < 21; y++)
                ((d = (o[f + 1] << 8) | o[f]),
                  s.getKeyInfo(p, y) !== null && s.updateAdjustingADC(p, y, d),
                  (f += 2));
          a.updateAdjustingCount(c.value + 1);
        }
      } else if (n === Q.ProtocolCMD.KB2_CMD_MACROMODE + 128) {
        const s = de(),
          {
            macroMode: l,
            repeatCount: c,
            repeatDelay: u,
            bandMacroID: i,
          } = Te(s);
        i.value = (o[3] << 8) | o[2];
        const f = o[5];
        (f === 0
          ? (l.value = "mode1")
          : f === 1
            ? (l.value = "mode2")
            : f === 2
              ? (l.value = "mode3")
              : f === 3 && (l.value = "mode4"),
          (c.value = (o[7] << 8) | o[6]),
          (u.value = (o[10] << 16) | (o[9] << 8) | o[8]));
      } else if (n === Q.ProtocolCMD.KB2_CMD_SOCD + 128) {
        const s = Ly();
        if (
          J.isFeatureSupported("socdV3") ||
          J.isFeatureSupported("SOCDDynamicDelay")
        ) {
          const l = (o[4] << 8) | o[3],
            c = (o[6] << 8) | o[5],
            u = (o[10] << 8) | o[9];
          s.setSOCDV3Buff(o[1], o[2], l, c, o[7], o[8], u);
        }
      } else if (n === Q.ProtocolCMD.KB2_CMD_PIC_WRITE + 128) {
        const s = ca(),
          { currentPicUpdateAddress: l } = Te(s);
        if (o[0] === 0) {
          const c = (o[4] << 24) | (o[3] << 16) | (o[2] << 8) | o[1],
            u = (o[6] << 8) | o[5];
          ((l.value = c + u), console.log(`升级返回的地址：${l.value}`));
        }
      } else if (n === Q.ProtocolCMD.KB2_BL_WRITE_SCREEN + 128) {
        const s = ca(),
          { currentScreenFwUpdateAddress: l } = Te(s);
        if (o[0] === 0) {
          const c = (o[4] << 24) | (o[3] << 16) | (o[2] << 8) | o[1],
            u = (o[6] << 8) | o[5];
          ((l.value = c + u), console.log(`升级返回的地址：${l.value}`));
        }
      }
    }
    return { recData: e, ProcessingReceivedData: r };
  }),
  ca = Pr("Update", {
    state: () => ({
      currentUpdateAddress: 0,
      crc: 0,
      signature: [],
      isUpdate: 0,
      signSuccess: !1,
      updateCount: 0,
      updateFWBuff: [],
      currentPicUpdateAddress: 0,
      updatePicCount: 0,
      updatePicBuff: 0,
      currentScreenFwUpdateAddress: 0,
      updateScreenFwCount: 0,
      updateScreenFwBuff: 0,
    }),
  });
w1();
const Py = () =>
    wc(
      () => import("./ConnectDrivePage-BC6I3b8s.js"),
      __vite__mapDeps([0, 1, 2, 3]),
    ),
  ky = () =>
    wc(
      () => import("./DeviceSettingPage-BmCN6lE0.js"),
      __vite__mapDeps([4, 1, 2, 5]),
    ),
  Ey = [
    { path: "/", redirect: "/connect" },
    { path: "/connect", component: Py, meta: { routerPage: 0 } },
    { path: "/device", component: ky, meta: { routerPage: 1 } },
  ],
  Oc = Iy({ history: ty(), routes: Ey });
Oc.beforeEach((e, t) => {
  const r = de(),
    { routerPage: a } = Te(r);
  e.meta.routerPage !== void 0 && (a.value = e.meta.routerPage);
});
const Ry = [
    { vendorId: 7247, productId: 61064, usagePage: 65440, usage: 1 },
    { vendorId: 14139, productId: 4233, usagePage: 65440, usage: 1 },
    { vendorId: 14139, productId: 4234, usagePage: 65440, usage: 1 },
    { vendorId: 14139, productId: 8249, usagePage: 65440, usage: 1 },
    { vendorId: 14139, productId: 4276, usagePage: 65440, usage: 1 },
    { vendorId: 14139, productId: 8282, usagePage: 65440, usage: 1 },
    { vendorId: 7337, productId: 58625, usagePage: 65440, usage: 1 },
    { vendorId: 14139, productId: 4255, usagePage: 65440, usage: 1 },
    { vendorId: 14139, productId: 4256, usagePage: 65440, usage: 1 },
    { vendorId: 14139, productId: 4257, usagePage: 65440, usage: 1 },
    { vendorId: 9642, productId: 4097, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 2, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 132, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 257, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 258, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 259, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 260, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 261, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 262, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 263, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 264, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 513, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 769, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 770, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 771, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 772, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 773, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 774, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 775, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1025, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1026, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1027, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1028, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1029, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1030, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1031, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1032, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1033, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1034, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1035, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1281, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1282, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1537, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1538, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1793, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1794, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1795, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1796, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1797, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 1798, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 2305, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 2561, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 2562, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 2817, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 3073, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 3074, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 3329, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 3585, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 3841, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 3842, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 3843, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 4097, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 4353, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 4354, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 4355, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 4356, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 4609, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 4865, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5121, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5377, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5633, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5634, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5635, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5636, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5637, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5638, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5639, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5640, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5641, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5642, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5643, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5644, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5645, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5646, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5647, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5648, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5649, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5650, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5651, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 5889, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6145, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6401, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6402, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6403, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6404, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6405, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6406, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6407, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6408, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6409, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6410, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6411, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6657, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6658, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6913, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 6914, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 7169, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 7425, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 7426, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 7681, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 7937, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 7938, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 8193, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 8449, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 8450, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 8705, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 8961, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 9217, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 9218, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 9219, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 9473, usagePage: 65440, usage: 1 },
    { vendorId: 7330, productId: 9729, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 1, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 257, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 513, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 514, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 515, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 516, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 517, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 518, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 769, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 770, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 1025, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 1026, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 1281, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 1537, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 1793, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 1794, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 1795, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 2049, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 2305, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 2561, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 2817, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 3073, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 3329, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 3585, usagePage: 65440, usage: 1 },
    { vendorId: 7331, productId: 3586, usagePage: 65440, usage: 1 },
    { vendorId: 7332, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 257, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 258, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 259, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 513, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 514, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 769, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1025, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1026, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1027, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1028, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1029, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1030, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1031, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1032, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1033, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1034, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1035, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1036, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1037, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1038, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1039, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1040, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1281, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1793, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 1794, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2049, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2050, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2051, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2052, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2054, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2055, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2056, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2057, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2305, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2306, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2561, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2562, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 2817, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 3073, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 3329, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 3585, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 3841, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 3842, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 4097, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 4356, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 4609, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 4610, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 4611, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 4865, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 4353, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 4357, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 5121, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 5122, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 5633, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 5890, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 5891, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 5892, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 5893, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 8705, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 8706, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 8961, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 9217, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 9473, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 9729, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 9985, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 10497, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 11009, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 11265, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 11521, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 11777, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 11778, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 12033, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 12289, usagePage: 65440, usage: 1 },
    { vendorId: 7333, productId: 12290, usagePage: 65440, usage: 1 },
    { vendorId: 7334, usagePage: 65440, usage: 1 },
    { vendorId: 7335, usagePage: 65440, usage: 1 },
    { vendorId: 7336, usagePage: 65440, usage: 1 },
    { vendorId: 7337, usagePage: 65440, usage: 1 },
    { vendorId: 34816, productId: 3141, usagePage: 65440, usage: 1 },
    { vendorId: 6790, productId: 33536, usagePage: 65408, usage: 1 },
  ],
  Fr = class Fr {
    constructor() {
      if (Fr.instance) return Fr.instance;
      ((Fr.instance = this), (this.device = null));
    }
    async requestDevice() {
      try {
        const t = "production",
          r = t === "test" ? [{ usagePage: 65440, usage: 1 }] : Ry,
          n = (await navigator.hid.requestDevice({ filters: r }))[0];
        return (
          (this.device = n),
          t === "production" &&
          (this.device.productName === "Gaming Keyboard Pro" ||
            this.device.productName === "Epomaker MagForce 68" ||
            this.device.productName === "Epomaker MagForce 75" ||
            this.device.productName === "Epomaker MagForce 33" ||
            this.device.productName === "GATERON GT60" ||
            this.device.productName === "GATERON GT60 Pro" ||
            this.device.productName === "Zynoo75")
            ? ((this.device = null), null)
            : this.device
        );
      } catch (t) {
        throw (J.log(3, `Failed to request device:${t}`), t);
      }
    }
    async openDevice() {
      if (!this.device) throw new Error("No device to open");
      try {
        (this.device.opened && (await this.device.close()),
          await this.device.open());
        const t = de(),
          { VID: r, PID: a, usagePage: n, getLayoutDelay: o } = Te(t);
        ((r.value = this.device.vendorId),
          (a.value = this.device.productId),
          (n.value = this.device.collections[0].usagePage),
          r.value === 7331 ? (o.value = 5) : (o.value = 1),
          n.value === 65408 && (o.value = 20),
          J.log(1, "设备已连接！"));
        const s = { VID: 7247, PID: 61064, usagePage: 65440, usage: 1 };
        localStorage.setItem("keyboardInfo", JSON.stringify(s));
      } catch (t) {
        throw (console.error("Failed to open device:", t), t);
      }
      this.device.oninputreport = (t) => {
        const r = Dy(),
          { recData: a } = Te(r),
          n = new Uint8Array(t.data.buffer),
          o = new Uint8Array(a.value.length + n.length);
        if (
          (o.set(a.value, 0),
          o.set(n, a.value.length),
          (a.value = o),
          a.value[2] === 146 && (a.value[1] = 192),
          a.value[1] <= a.value.length)
        ) {
          r.ProcessingReceivedData();
          const s = new Uint8Array(0);
          a.value = s;
        }
      };
    }
    async closeDevice() {
      if (!this.device) throw new Error("No device to close");
      try {
        (await this.device.close(), console.log("Device disconnected"));
      } catch (t) {
        throw (console.error("Failed to close device:", t), t);
      }
    }
    async writeData(t) {
      if (!this.device) throw new Error("No device to write to");
      const r = 64;
      if (t.length === 0) {
        console.warn("No data to send");
        return;
      }
      for (let a = 0; a < t.length; a += r) {
        const n = t.slice(a, a + r);
        try {
          await this.device.sendReport(0, n);
        } catch (o) {
          throw (console.error("Failed to send data chunk", o), o);
        }
      }
    }
    async startEventListen() {
      ((navigator.hid.onconnect = async (t) => {
        console.log("有设备插入");
        const r = localStorage.getItem("keyboardInfo"),
          a = r ? JSON.parse(r) : null;
        a && console.log(a.VID, a.PID, a.usagePage, a.usage);
        try {
          const n = t.device;
          for (let o = 0; o < n.collections.length; o++)
            if (
              n.collections[o].usage === 1 &&
              n.collections[o].usagePage === 65440
            ) {
              ((this.device = n), await this.openDevice());
              const s = de(),
                { KeyboardConnectStatus: l } = Te(s);
              l.value = 1;
            }
        } catch (n) {
          throw (console.error("Failed to request device:", n), n);
        }
      }),
        (navigator.hid.ondisconnect = async (t) => {
          console.log("有设备拔出");
          const r = t.device;
          for (let a = 0; a < r.collections.length; a++)
            if (
              r.collections[a].usage === 1 &&
              r.collections[a].usagePage === 65440
            ) {
              (await this.device.close(), console.log("有设备拔出2"));
              const n = de(),
                { KeyboardConnectStatus: o } = Te(n);
              ((o.value = 0), console.log("有设备拔出3"));
            }
        }));
    }
    async reConnect() {
      const t = localStorage.getItem("keyboardInfo"),
        r = t ? JSON.parse(t) : null;
      r && console.log(r.VID, r.PID, r.usagePage, r.usage);
      try {
        const a = await navigator.hid.getDevices();
        console.log(a);
        for (let n = 0; n < a.length; n++)
          for (let o = 0; o < a[n].collections.length; o++)
            if (
              a[n].collections[o].usage === 1 &&
              a[n].collections[o].usagePage === 65440
            ) {
              ((this.device = a[n]), await this.openDevice());
              const s = de(),
                { KeyboardConnectStatus: l } = Te(s);
              l.value = 1;
            }
      } catch (a) {
        throw (console.error("Failed to request device:", a), a);
      }
    }
  };
A2(Fr, "instance", null);
let jn = Fr;
const Oy = new jn(),
  Vy = Y1({ icons: { defaultSet: "mdi", aliases: j1, sets: { mdi: W1 } } }),
  L2 = w4(m9);
L2.provide("WebHIDService", Oy);
for (const [e, t] of Object.entries(vv)) L2.component(e, t);
L2.use(Oc).use(w1()).use(Vy).use(Cx).mount("#app");
export {
  $y as $,
  pl as A,
  Ct as B,
  Ne as C,
  Tt as D,
  De as E,
  Ye as F,
  Se as G,
  Q as H,
  qy as I,
  v3 as J,
  _3 as K,
  e_ as L,
  Fd as M,
  h3 as N,
  nv as O,
  V5 as P,
  S3 as Q,
  St as R,
  he as S,
  L0 as T,
  Vl as U,
  He as V,
  Bt as W,
  Rl as X,
  Ir as Y,
  g as Z,
  g9 as _,
  de as a,
  pw as a$,
  n1 as a0,
  Ri as a1,
  u2 as a2,
  ce as a3,
  Kt as a4,
  s2 as a5,
  Ol as a6,
  jy as a7,
  s0 as a8,
  Fy as a9,
  pv as aA,
  Cf as aB,
  $s as aC,
  _l as aD,
  jr as aE,
  tw as aF,
  im as aG,
  k0 as aH,
  um as aI,
  V1 as aJ,
  fw as aK,
  Sv as aL,
  Vw as aM,
  u9 as aN,
  $w as aO,
  Uw as aP,
  Ny as aQ,
  Oy as aR,
  ua as aS,
  Ay as aT,
  cw as aU,
  vm as aV,
  Kw as aW,
  ow as aX,
  xo as aY,
  ht as aZ,
  Pv as a_,
  Qn as aa,
  Xy as ab,
  Wy as ac,
  Qg as ad,
  yd as ae,
  Zy as af,
  Ky as ag,
  Qy as ah,
  Yy as ai,
  Wi as aj,
  ir as ak,
  Ea as al,
  nt as am,
  Hy as an,
  Gi as ao,
  Ce as ap,
  Jy as aq,
  O4 as ar,
  ew as as,
  Zr as at,
  Uy as au,
  K_ as av,
  G4 as aw,
  qp as ax,
  t3 as ay,
  zf as az,
  _n as b,
  M1 as b0,
  L1 as b1,
  lw as b2,
  Ly as b3,
  dw as b4,
  nw as b5,
  Tw as b6,
  bw as b7,
  Rv as b8,
  Fw as b9,
  vw as bA,
  mw as bB,
  Sw as bC,
  nm as bD,
  gw as bE,
  Qv as bF,
  Dw as bG,
  am as bH,
  za as bI,
  zw as bJ,
  Dv as bK,
  rw as bL,
  yw as bM,
  sw as bN,
  bv as bO,
  iw as bP,
  Nw as bQ,
  Aw as bR,
  Ev as bS,
  C0 as bT,
  Mw as bU,
  kv as bV,
  Iw as bW,
  Iv as bX,
  ww as bY,
  _w as bZ,
  kg as ba,
  Oa as bb,
  hw as bc,
  Ew as bd,
  Rw as be,
  k1 as bf,
  Pw as bg,
  Jv as bh,
  Dr as bi,
  nn as bj,
  aw as bk,
  kw as bl,
  qt as bm,
  Zv as bn,
  Mv as bo,
  Ow as bp,
  Yi as bq,
  ea as br,
  Bw as bs,
  Pa as bt,
  Lw as bu,
  Ln as bv,
  Cw as bw,
  Hw as bx,
  xw as by,
  ca as bz,
  me as c,
  m as d,
  v as e,
  _ as f,
  Gy as g,
  Oe as h,
  zi as i,
  Ru as j,
  zy as k,
  We as l,
  jw as m,
  Xn as n,
  i2 as o,
  J as p,
  uw as q,
  le as r,
  Te as s,
  ui as t,
  I2 as u,
  Xs as v,
  gt as w,
  Js as x,
  Qt as y,
  M0 as z,
};
