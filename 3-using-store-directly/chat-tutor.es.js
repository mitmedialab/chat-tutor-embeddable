var Wt = Object.defineProperty;
var Gt = (r, e, t) => e in r ? Wt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var F = (r, e, t) => (Gt(r, typeof e != "symbol" ? e + "" : e, t), t), Jt = (r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
};
var Ue = (r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
};
var Ae = (r, e, t) => (Jt(r, e, "access private method"), t);
function A() {
}
const Xt = (r) => r;
function re(r, e) {
  for (const t in e)
    r[t] = e[t];
  return (
    /** @type {T & S} */
    r
  );
}
function Rt(r) {
  return r();
}
function tt() {
  return /* @__PURE__ */ Object.create(null);
}
function he(r) {
  r.forEach(Rt);
}
function We(r) {
  return typeof r == "function";
}
function I(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
let Ie;
function nt(r, e) {
  return r === e ? !0 : (Ie || (Ie = document.createElement("a")), Ie.href = e, r === Ie.href);
}
function Yt(r) {
  return Object.keys(r).length === 0;
}
function Kt(r, ...e) {
  if (r == null) {
    for (const s of e)
      s(void 0);
    return A;
  }
  const t = r.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Vt(r, e, t) {
  r.$$.on_destroy.push(Kt(e, t));
}
function B(r, e, t, s) {
  if (r) {
    const n = At(r, e, t, s);
    return r[0](n);
  }
}
function At(r, e, t, s) {
  return r[1] && s ? re(t.ctx.slice(), r[1](s(e))) : t.ctx;
}
function O(r, e, t, s) {
  if (r[2] && s) {
    const n = r[2](s(t));
    if (e.dirty === void 0)
      return n;
    if (typeof n == "object") {
      const i = [], l = Math.max(e.dirty.length, n.length);
      for (let a = 0; a < l; a += 1)
        i[a] = e.dirty[a] | n[a];
      return i;
    }
    return e.dirty | n;
  }
  return e.dirty;
}
function D(r, e, t, s, n, i) {
  if (n) {
    const l = At(e, t, s, i);
    r.p(l, n);
  }
}
function Z(r) {
  if (r.ctx.length > 32) {
    const e = [], t = r.ctx.length / 32;
    for (let s = 0; s < t; s++)
      e[s] = -1;
    return e;
  }
  return -1;
}
function en(r) {
  const e = {};
  for (const t in r)
    t[0] !== "$" && (e[t] = r[t]);
  return e;
}
function st(r, e) {
  const t = {};
  e = new Set(e);
  for (const s in r)
    !e.has(s) && s[0] !== "$" && (t[s] = r[s]);
  return t;
}
const It = typeof window < "u";
let tn = It ? () => window.performance.now() : () => Date.now(), Ge = It ? (r) => requestAnimationFrame(r) : A;
const ke = /* @__PURE__ */ new Set();
function qt(r) {
  ke.forEach((e) => {
    e.c(r) || (ke.delete(e), e.f());
  }), ke.size !== 0 && Ge(qt);
}
function nn(r) {
  let e;
  return ke.size === 0 && Ge(qt), {
    promise: new Promise((t) => {
      ke.add(e = { c: r, f: t });
    }),
    abort() {
      ke.delete(e);
    }
  };
}
function R(r, e) {
  r.appendChild(e);
}
function pe(r, e, t) {
  const s = Je(r);
  if (!s.getElementById(e)) {
    const n = y("style");
    n.id = e, n.textContent = t, Mt(s, n);
  }
}
function Je(r) {
  if (!r)
    return document;
  const e = r.getRootNode ? r.getRootNode() : r.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : r.ownerDocument;
}
function sn(r) {
  const e = y("style");
  return e.textContent = "/* empty */", Mt(Je(r), e), e.sheet;
}
function Mt(r, e) {
  return R(
    /** @type {Document} */
    r.head || r,
    e
  ), e.sheet;
}
function b(r, e, t) {
  r.insertBefore(e, t || null);
}
function m(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function de(r, e) {
  for (let t = 0; t < r.length; t += 1)
    r[t] && r[t].d(e);
}
function y(r) {
  return document.createElement(r);
}
function rn(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function oe(r) {
  return document.createTextNode(r);
}
function W() {
  return oe(" ");
}
function P() {
  return oe("");
}
function ie(r, e, t, s) {
  return r.addEventListener(e, t, s), () => r.removeEventListener(e, t, s);
}
function w(r, e, t) {
  t == null ? r.removeAttribute(e) : r.getAttribute(e) !== t && r.setAttribute(e, t);
}
function ln(r) {
  return Array.from(r.childNodes);
}
function we(r, e) {
  e = "" + e, r.data !== e && (r.data = /** @type {string} */
  e);
}
function ne(r, e, t, s) {
  t == null ? r.style.removeProperty(e) : r.style.setProperty(e, t, s ? "important" : "");
}
function it(r, e, t) {
  r.classList.toggle(e, !!t);
}
function Ct(r, e, { bubbles: t = !1, cancelable: s = !1 } = {}) {
  return new CustomEvent(r, { detail: e, bubbles: t, cancelable: s });
}
class on {
  constructor(e = !1) {
    /**
     * @private
     * @default false
     */
    F(this, "is_svg", !1);
    /** parent for creating node */
    F(this, "e");
    /** html tag nodes */
    F(this, "n");
    /** target */
    F(this, "t");
    /** anchor */
    F(this, "a");
    this.is_svg = e, this.e = this.n = null;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(e) {
    this.h(e);
  }
  /**
   * @param {string} html
   * @param {HTMLElement | SVGElement} target
   * @param {HTMLElement | SVGElement} anchor
   * @returns {void}
   */
  m(e, t, s = null) {
    this.e || (this.is_svg ? this.e = rn(
      /** @type {keyof SVGElementTagNameMap} */
      t.nodeName
    ) : this.e = y(
      /** @type {keyof HTMLElementTagNameMap} */
      t.nodeType === 11 ? "TEMPLATE" : t.nodeName
    ), this.t = t.tagName !== "TEMPLATE" ? t : (
      /** @type {HTMLTemplateElement} */
      t.content
    ), this.c(e)), this.i(s);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(
      this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes
    );
  }
  /**
   * @returns {void} */
  i(e) {
    for (let t = 0; t < this.n.length; t += 1)
      b(this.t, this.n[t], e);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  /**
   * @returns {void} */
  d() {
    this.n.forEach(m);
  }
}
function j(r, e) {
  return new r(e);
}
const Le = /* @__PURE__ */ new Map();
let Ee = 0;
function an(r) {
  let e = 5381, t = r.length;
  for (; t--; )
    e = (e << 5) - e ^ r.charCodeAt(t);
  return e >>> 0;
}
function cn(r, e) {
  const t = { stylesheet: sn(e), rules: {} };
  return Le.set(r, t), t;
}
function un(r, e, t, s, n, i, l, a = 0) {
  const o = 16.666 / s;
  let c = `{
`;
  for (let U = 0; U <= 1; U += o) {
    const $ = e + (t - e) * i(U);
    c += U * 100 + `%{${l($, 1 - $)}}
`;
  }
  const u = c + `100% {${l(t, 1 - t)}}
}`, h = `__svelte_${an(u)}_${a}`, f = Je(r), { stylesheet: d, rules: k } = Le.get(f) || cn(f, r);
  k[h] || (k[h] = !0, d.insertRule(`@keyframes ${h} ${u}`, d.cssRules.length));
  const S = r.style.animation || "";
  return r.style.animation = `${S ? `${S}, ` : ""}${h} ${s}ms linear ${n}ms 1 both`, Ee += 1, h;
}
function rt(r, e) {
  const t = (r.style.animation || "").split(", "), s = t.filter(
    e ? (i) => i.indexOf(e) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), n = t.length - s.length;
  n && (r.style.animation = s.join(", "), Ee -= n, Ee || fn());
}
function fn() {
  Ge(() => {
    Ee || (Le.forEach((r) => {
      const { ownerNode: e } = r.stylesheet;
      e && m(e);
    }), Le.clear());
  });
}
let Te;
function xe(r) {
  Te = r;
}
function De() {
  if (!Te)
    throw new Error("Function called outside component initialization");
  return Te;
}
function Xe(r) {
  De().$$.on_mount.push(r);
}
function Ye() {
  const r = De();
  return (e, t, { cancelable: s = !1 } = {}) => {
    const n = r.$$.callbacks[e];
    if (n) {
      const i = Ct(
        /** @type {string} */
        e,
        t,
        { cancelable: s }
      );
      return n.slice().forEach((l) => {
        l.call(r, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function hn(r, e) {
  return De().$$.context.set(r, e), e;
}
function pn(r) {
  return De().$$.context.get(r);
}
function Lt(r, e) {
  const t = r.$$.callbacks[e.type];
  t && t.slice().forEach((s) => s.call(this, e));
}
const be = [], le = [];
let $e = [];
const lt = [], dn = /* @__PURE__ */ Promise.resolve();
let He = !1;
function gn() {
  He || (He = !0, dn.then(Et));
}
function ue(r) {
  $e.push(r);
}
const Fe = /* @__PURE__ */ new Set();
let me = 0;
function Et() {
  if (me !== 0)
    return;
  const r = Te;
  do {
    try {
      for (; me < be.length; ) {
        const e = be[me];
        me++, xe(e), mn(e.$$);
      }
    } catch (e) {
      throw be.length = 0, me = 0, e;
    }
    for (xe(null), be.length = 0, me = 0; le.length; )
      le.pop()();
    for (let e = 0; e < $e.length; e += 1) {
      const t = $e[e];
      Fe.has(t) || (Fe.add(t), t());
    }
    $e.length = 0;
  } while (be.length);
  for (; lt.length; )
    lt.pop()();
  He = !1, Fe.clear(), xe(r);
}
function mn(r) {
  if (r.fragment !== null) {
    r.update(), he(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(ue);
  }
}
function _n(r) {
  const e = [], t = [];
  $e.forEach((s) => r.indexOf(s) === -1 ? e.push(s) : t.push(s)), t.forEach((s) => s()), $e = e;
}
let ve;
function bn() {
  return ve || (ve = Promise.resolve(), ve.then(() => {
    ve = null;
  })), ve;
}
function ot(r, e, t) {
  r.dispatchEvent(Ct(`${e ? "intro" : "outro"}${t}`));
}
const Me = /* @__PURE__ */ new Set();
let ce;
function E() {
  ce = {
    r: 0,
    c: [],
    p: ce
    // parent group
  };
}
function N() {
  ce.r || he(ce.c), ce = ce.p;
}
function p(r, e) {
  r && r.i && (Me.delete(r), r.i(e));
}
function g(r, e, t, s) {
  if (r && r.o) {
    if (Me.has(r))
      return;
    Me.add(r), ce.c.push(() => {
      Me.delete(r), s && (t && r.d(1), s());
    }), r.o(e);
  } else
    s && s();
}
const kn = { duration: 0 };
function Nt(r, e, t) {
  const s = { direction: "in" };
  let n = e(r, t, s), i = !1, l, a, o = 0;
  function c() {
    l && rt(r, l);
  }
  function u() {
    const {
      delay: f = 0,
      duration: d = 300,
      easing: k = Xt,
      tick: S = A,
      css: U
    } = n || kn;
    U && (l = un(r, 0, 1, d, f, k, U, o++)), S(0, 1);
    const $ = tn() + f, H = $ + d;
    a && a.abort(), i = !0, ue(() => ot(r, !0, "start")), a = nn((V) => {
      if (i) {
        if (V >= H)
          return S(1, 0), ot(r, !0, "end"), c(), i = !1;
        if (V >= $) {
          const J = k((V - $) / d);
          S(J, 1 - J);
        }
      }
      return i;
    });
  }
  let h = !1;
  return {
    start() {
      h || (h = !0, rt(r), We(n) ? (n = n(s), bn().then(u)) : u());
    },
    invalidate() {
      h = !1;
    },
    end() {
      i && (c(), i = !1);
    }
  };
}
function G(r) {
  return (r == null ? void 0 : r.length) !== void 0 ? r : Array.from(r);
}
function Y(r, e) {
  const t = {}, s = {}, n = { $$scope: 1 };
  let i = r.length;
  for (; i--; ) {
    const l = r[i], a = e[i];
    if (a) {
      for (const o in l)
        o in a || (s[o] = 1);
      for (const o in a)
        n[o] || (t[o] = a[o], n[o] = 1);
      r[i] = a;
    } else
      for (const o in l)
        n[o] = 1;
  }
  for (const l in s)
    l in t || (t[l] = void 0);
  return t;
}
function K(r) {
  return typeof r == "object" && r !== null ? r : {};
}
function T(r) {
  r && r.c();
}
function x(r, e, t) {
  const { fragment: s, after_update: n } = r.$$;
  s && s.m(e, t), ue(() => {
    const i = r.$$.on_mount.map(Rt).filter(We);
    r.$$.on_destroy ? r.$$.on_destroy.push(...i) : he(i), r.$$.on_mount = [];
  }), n.forEach(ue);
}
function z(r, e) {
  const t = r.$$;
  t.fragment !== null && (_n(t.after_update), he(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function $n(r, e) {
  r.$$.dirty[0] === -1 && (be.push(r), gn(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function q(r, e, t, s, n, i, l = null, a = [-1]) {
  const o = Te;
  xe(r);
  const c = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: A,
    not_equal: n,
    bound: tt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: tt(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  l && l(c.root);
  let u = !1;
  if (c.ctx = t ? t(r, e.props || {}, (h, f, ...d) => {
    const k = d.length ? d[0] : f;
    return c.ctx && n(c.ctx[h], c.ctx[h] = k) && (!c.skip_bound && c.bound[h] && c.bound[h](k), u && $n(r, h)), f;
  }) : [], c.update(), u = !0, he(c.before_update), c.fragment = s ? s(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = ln(e.target);
      c.fragment && c.fragment.l(h), h.forEach(m);
    } else
      c.fragment && c.fragment.c();
    e.intro && p(r.$$.fragment), x(r, e.target, e.anchor), Et();
  }
  xe(o);
}
class M {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    F(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    F(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    z(this, 1), this.$destroy = A;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!We(t))
      return A;
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return s.push(t), () => {
      const n = s.indexOf(t);
      n !== -1 && s.splice(n, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Yt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const wn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(wn);
function yn(r) {
  pe(r, "svelte-20kqwa", `button.svelte-20kqwa{align-items:center;appearance:none;background-color:#fcfcfd;border-radius:10px;border-width:0;box-shadow:rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset;box-sizing:border-box;color:#36395a;cursor:pointer;display:inline-flex;font-family:"JetBrains Mono", monospace;height:48px;justify-content:center;line-height:1;list-style:none;overflow:hidden;padding-left:16px;padding-right:16px;position:relative;text-align:left;text-decoration:none;transition:box-shadow 0.15s,
            transform 0.15s,
            opacity 0.15s;user-select:none;-webkit-user-select:none;touch-action:manipulation;white-space:nowrap;will-change:box-shadow, transform;font-size:18px}button.svelte-20kqwa:focus{box-shadow:#d6d6e7 0 0 0 1.5px inset,
            rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset}button.svelte-20kqwa:hover{box-shadow:rgba(45, 35, 66, 0.4) 0 4px 8px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset;transform:translateY(-2px)}button.svelte-20kqwa:active{box-shadow:#d6d6e7 0 3px 7px inset;transform:translateY(2px)}`);
}
function vn(r) {
  let e, t, s, n, i;
  return {
    c() {
      e = y("link"), t = W(), s = y("button"), s.textContent = "ChatTutor", w(e, "rel", "stylesheet"), w(e, "href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"), w(s, "class", "svelte-20kqwa");
    },
    m(l, a) {
      R(document.head, e), b(l, t, a), b(l, s, a), n || (i = ie(
        s,
        "click",
        /*click_handler*/
        r[0]
      ), n = !0);
    },
    p: A,
    i: A,
    o: A,
    d(l) {
      l && (m(t), m(s)), m(e), n = !1, i();
    }
  };
}
function xn(r) {
  function e(t) {
    Lt.call(this, r, t);
  }
  return [e];
}
class zn extends M {
  constructor(e) {
    super(), q(this, e, xn, vn, I, {}, yn);
  }
}
const _e = [];
function Tn(r, e = A) {
  let t;
  const s = /* @__PURE__ */ new Set();
  function n(a) {
    if (I(r, a) && (r = a, t)) {
      const o = !_e.length;
      for (const c of s)
        c[1](), _e.push(c, r);
      if (o) {
        for (let c = 0; c < _e.length; c += 2)
          _e[c][0](_e[c + 1]);
        _e.length = 0;
      }
    }
  }
  function i(a) {
    n(a(r));
  }
  function l(a, o = A) {
    const c = [a, o];
    return s.add(c), s.size === 1 && (t = e(n, i) || A), a(r), () => {
      s.delete(c), s.size === 0 && t && (t(), t = null);
    };
  }
  return { set: n, update: i, subscribe: l };
}
const Ne = () => (/* @__PURE__ */ new Date()).toLocaleTimeString(navigator.language, {
  hour: "2-digit",
  minute: "2-digit"
}), Pt = (r, { addEndpoint: e }) => (r.time_created = r.timestamp, r.chat_k = "To set chat id", r.clear_number = "0", fetch(e, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(r)
})), Sn = async (r, { model: e, collections: t, askEndpoint: s }) => fetch(s, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    conversation: r,
    selectedModel: e,
    multiple: !0,
    credential_token: "none",
    collection: t
  })
}), Rn = (r) => r.split(`

`).filter(Boolean).map((e) => {
  try {
    return JSON.parse(e.split("data: ")[1]);
  } catch (t) {
    return console.error(t), null;
  }
}), An = async (r, e, t, s) => {
  const n = await Sn(r, e);
  let i;
  const l = n.body.getReader();
  let a;
  async function o() {
    const c = await l.read();
    if (c.done)
      return;
    const u = new TextDecoder().decode(c.value), h = Rn(u);
    for (const f of h) {
      if (f === null)
        continue;
      const { message: { valid_docs: d, content: k } } = f;
      a ? s(k ?? "") : a = t({
        sender: "Assistant",
        timestamp: Ne(),
        role: "assistant",
        content: k ?? "",
        valid_docs: i
      });
    }
    await o();
  }
  await o(), a ? Pt(a, e) : console.error("No message received from ChatTutor");
}, In = "Welcome", qn = {
  sender: "Assistant",
  role: "assistant",
  content: In,
  timestamp: Ne()
}, Re = Tn([]), Mn = (r) => {
  Re.update((e) => [...e, r]);
}, Cn = (r) => {
  Re.update((e) => (e[e.length - 1].content = r, e));
}, Ln = (r) => {
  Re.update((e) => (e[e.length - 1].content += r, e));
}, jt = () => {
  Re.set([qn]);
};
function En(r) {
  pe(r, "svelte-1qc1bbp", '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");.container.svelte-1qc1bbp.svelte-1qc1bbp{color:black;font-family:"Rethink Sans", sans-serif;display:flex;padding:10px;background-color:white;border-radius:10px}span.svelte-1qc1bbp.svelte-1qc1bbp{font-size:15px !important;padding:0 !important;margin:0 !important;vertical-align:middle}.container.svelte-1qc1bbp .svelte-1qc1bbp{padding:10px;border:none;font-size:1em;border-radius:10px}.input.svelte-1qc1bbp.svelte-1qc1bbp{flex:1;background:#ddd;color:"black"}.send.svelte-1qc1bbp.svelte-1qc1bbp{margin-left:10px;background:rgb(140, 0, 255);color:#fff;font-weight:bold;cursor:pointer;transition:filter 0.23s;padding:10px;display:flex;flex-direction:row;justify-content:center;align-items:center;width:40px;height:40px;transition:background-color 0.23s}.send.svelte-1qc1bbp.svelte-1qc1bbp:hover{filter:saturate(180%)}.send.svelte-1qc1bbp.svelte-1qc1bbp:disabled{cursor:not-allowed;opacity:0.5}.clear.svelte-1qc1bbp.svelte-1qc1bbp{border:none;margin-left:10px;background:#ddd;color:black;font-weight:bold;cursor:pointer;transition:background-color 0.23s;display:flex;flex-direction:row;justify-content:center;align-items:center;width:40px;height:40px}.clear.svelte-1qc1bbp.svelte-1qc1bbp:hover{background-color:black;color:#ddd}.clear.svelte-1qc1bbp.svelte-1qc1bbp:disabled{cursor:not-allowed;opacity:0.5}');
}
function Nn(r) {
  let e, t, s, n, i, l, a, o, c, u, h, f;
  return {
    c() {
      e = y("link"), t = W(), s = y("div"), n = y("div"), i = W(), l = y("button"), a = y("span"), a.textContent = "send", c = W(), u = y("button"), u.innerHTML = '<span class="material-symbols-outlined svelte-1qc1bbp">delete_forever</span>', w(e, "rel", "stylesheet"), w(e, "href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"), w(n, "contenteditable", "true"), w(n, "class", "input svelte-1qc1bbp"), /*innerText*/
      r[0] === void 0 && ue(() => (
        /*div0_input_handler*/
        r[5].call(n)
      )), w(a, "class", "material-symbols-outlined svelte-1qc1bbp"), w(l, "class", "send svelte-1qc1bbp"), l.disabled = o = !/*canSend*/
      r[1], w(u, "class", "clear svelte-1qc1bbp"), w(s, "class", "container svelte-1qc1bbp");
    },
    m(d, k) {
      R(document.head, e), b(d, t, k), b(d, s, k), R(s, n), /*innerText*/
      r[0] !== void 0 && (n.innerText = /*innerText*/
      r[0]), R(s, i), R(s, l), R(l, a), R(s, c), R(s, u), h || (f = [
        ie(
          n,
          "input",
          /*div0_input_handler*/
          r[5]
        ),
        ie(
          n,
          "keydown",
          /*handleKeyDown*/
          r[3]
        ),
        ie(
          l,
          "click",
          /*send*/
          r[2]
        ),
        ie(u, "click", jt)
      ], h = !0);
    },
    p(d, [k]) {
      k & /*innerText*/
      1 && /*innerText*/
      d[0] !== n.innerText && (n.innerText = /*innerText*/
      d[0]), k & /*canSend*/
      2 && o !== (o = !/*canSend*/
      d[1]) && (l.disabled = o);
    },
    i: A,
    o: A,
    d(d) {
      d && (m(t), m(s)), m(e), h = !1, he(f);
    }
  };
}
function Pn(r, e, t) {
  const s = Ye();
  let n = "", i = !0;
  const l = () => {
    t(0, n = n.trim());
  }, a = () => {
    l(), s("send", {
      message: n,
      onResponse: () => t(4, i = !0)
    }), t(0, n = ""), t(4, i = !1);
  }, o = () => n.match(/[a-z]/i) !== null;
  let c = !1;
  const u = (f) => {
    let d = f.key === "Enter", k = f.shiftKey;
    if (d) {
      if (k)
        return;
      c && a(), f.preventDefault();
    }
  };
  function h() {
    n = this.innerText, t(0, n);
  }
  return r.$$.update = () => {
    r.$$.dirty & /*innerText, messageReceived*/
    17 && t(1, c = !!n && n.length > 0 && i && o());
  }, [n, c, a, u, i, h];
}
class jn extends M {
  constructor(e) {
    super(), q(this, e, Pn, Nn, I, {}, En);
  }
}
function Bn(r) {
  pe(r, "svelte-zksmvm", '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");.container.svelte-zksmvm{color:black;font-family:"Rethink Sans", sans-serif;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;font-size:1.5rem;padding:0.5rem 1rem;border-bottom:2px solid lightgray;background-color:white}button.svelte-zksmvm{float:right;align-self:self-end;border-radius:10%}button.svelte-zksmvm:hover{background-color:lightgray}');
}
function On(r) {
  let e, t, s, n, i, l, a, o, c, u;
  return {
    c() {
      e = y("link"), t = W(), s = y("div"), n = y("div"), n.textContent = "Chat Tutor", i = W(), l = y("div"), a = y("button"), o = y("span"), o.textContent = "close", w(e, "rel", "stylesheet"), w(e, "href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"), w(n, "class", "title"), w(o, "class", "material-symbols-outlined"), ne(o, "color", "red"), w(a, "class", "svelte-zksmvm"), ne(a, "border", "1px solid red"), w(l, "class", "close"), w(s, "class", "container svelte-zksmvm");
    },
    m(h, f) {
      R(document.head, e), b(h, t, f), b(h, s, f), R(s, n), R(s, i), R(s, l), R(l, a), R(a, o), c || (u = ie(
        a,
        "click",
        /*click_handler*/
        r[0]
      ), c = !0);
    },
    p: A,
    i: A,
    o: A,
    d(h) {
      h && (m(t), m(s)), m(e), c = !1, u();
    }
  };
}
function Dn(r) {
  function e(t) {
    Lt.call(this, r, t);
  }
  return [e];
}
class Zn extends M {
  constructor(e) {
    super(), q(this, e, Dn, On, I, {}, Bn);
  }
}
function Un() {
  const r = console.warn;
  console.warn = (e) => {
    e.includes("unknown prop") || e.includes("unexpected slot") || r(e);
  }, Xe(() => {
    console.warn = r;
  });
}
function at(r, e, t) {
  const s = r.slice();
  return s[18] = e[t], s;
}
function ct(r, e, t) {
  const s = r.slice();
  return s[18] = e[t], s;
}
function ut(r, e, t) {
  const s = r.slice();
  return s[10] = e[t], s;
}
function ft(r, e, t) {
  const s = r.slice();
  return s[13] = e[t], s[15] = t, s;
}
function ht(r, e, t) {
  const s = r.slice();
  return s[16] = e[t], s[15] = t, s;
}
function pt(r, e, t) {
  const s = r.slice();
  return s[7] = e[t], s;
}
function Fn(r) {
  let e, t, s, n;
  const i = [Gn, Wn, Qn], l = [];
  function a(o, c) {
    return (
      /*type*/
      o[0] === "table" ? 0 : (
        /*type*/
        o[0] === "list" ? 1 : 2
      )
    );
  }
  return e = a(r), t = l[e] = i[e](r), {
    c() {
      t.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), n = !0;
    },
    p(o, c) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), t = l[e], t ? t.p(o, c) : (t = l[e] = i[e](o), t.c()), p(t, 1), t.m(s.parentNode, s));
    },
    i(o) {
      n || (p(t), n = !0);
    },
    o(o) {
      g(t), n = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function Hn(r) {
  let e, t, s = G(
    /*tokens*/
    r[1]
  ), n = [];
  for (let l = 0; l < s.length; l += 1)
    n[l] = kt(pt(r, s, l));
  const i = (l) => g(n[l], 1, 1, () => {
    n[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = P();
    },
    m(l, a) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, a);
      b(l, e, a), t = !0;
    },
    p(l, a) {
      if (a & /*tokens, renderers*/
      34) {
        s = G(
          /*tokens*/
          l[1]
        );
        let o;
        for (o = 0; o < s.length; o += 1) {
          const c = pt(l, s, o);
          n[o] ? (n[o].p(c, a), p(n[o], 1)) : (n[o] = kt(c), n[o].c(), p(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (E(), o = s.length; o < n.length; o += 1)
          i(o);
        N();
      }
    },
    i(l) {
      if (!t) {
        for (let a = 0; a < s.length; a += 1)
          p(n[a]);
        t = !0;
      }
    },
    o(l) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1)
        g(n[a]);
      t = !1;
    },
    d(l) {
      l && m(e), de(n, l);
    }
  };
}
function Qn(r) {
  let e, t, s;
  const n = [
    /*$$restProps*/
    r[6]
  ];
  var i = (
    /*renderers*/
    r[5][
      /*type*/
      r[0]
    ]
  );
  function l(a, o) {
    let c = {
      $$slots: { default: [Yn] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*$$restProps*/
    64)
      c = Y(n, [K(
        /*$$restProps*/
        a[6]
      )]);
    else
      for (let u = 0; u < n.length; u += 1)
        c = re(c, n[u]);
    return { props: c };
  }
  return i && (e = j(i, l(r))), {
    c() {
      e && T(e.$$.fragment), t = P();
    },
    m(a, o) {
      e && x(e, a, o), b(a, t, o), s = !0;
    },
    p(a, o) {
      if (o & /*renderers, type*/
      33 && i !== (i = /*renderers*/
      a[5][
        /*type*/
        a[0]
      ])) {
        if (e) {
          E();
          const c = e;
          g(c.$$.fragment, 1, 0, () => {
            z(c, 1);
          }), N();
        }
        i ? (e = j(i, l(a, o)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const c = o & /*$$restProps*/
        64 ? Y(n, [K(
          /*$$restProps*/
          a[6]
        )]) : {};
        o & /*$$scope, tokens, renderers, $$restProps*/
        8388706 && (c.$$scope = { dirty: o, ctx: a }), e.$set(c);
      }
    },
    i(a) {
      s || (e && p(e.$$.fragment, a), s = !0);
    },
    o(a) {
      e && g(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && m(t), e && z(e, a);
    }
  };
}
function Wn(r) {
  let e, t, s, n;
  const i = [Vn, Kn], l = [];
  function a(o, c) {
    return (
      /*ordered*/
      o[4] ? 0 : 1
    );
  }
  return e = a(r), t = l[e] = i[e](r), {
    c() {
      t.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), n = !0;
    },
    p(o, c) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), t = l[e], t ? t.p(o, c) : (t = l[e] = i[e](o), t.c()), p(t, 1), t.m(s.parentNode, s));
    },
    i(o) {
      n || (p(t), n = !0);
    },
    o(o) {
      g(t), n = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function Gn(r) {
  let e, t, s;
  var n = (
    /*renderers*/
    r[5].table
  );
  function i(l, a) {
    return {
      props: {
        $$slots: { default: [us] },
        $$scope: { ctx: l }
      }
    };
  }
  return n && (e = j(n, i(r))), {
    c() {
      e && T(e.$$.fragment), t = P();
    },
    m(l, a) {
      e && x(e, l, a), b(l, t, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && n !== (n = /*renderers*/
      l[5].table)) {
        if (e) {
          E();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            z(o, 1);
          }), N();
        }
        n ? (e = j(n, i(l)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (n) {
        const o = {};
        a & /*$$scope, renderers, rows, $$restProps, header*/
        8388716 && (o.$$scope = { dirty: a, ctx: l }), e.$set(o);
      }
    },
    i(l) {
      s || (e && p(e.$$.fragment, l), s = !0);
    },
    o(l) {
      e && g(e.$$.fragment, l), s = !1;
    },
    d(l) {
      l && m(t), e && z(e, l);
    }
  };
}
function Jn(r) {
  let e = (
    /*$$restProps*/
    r[6].raw + ""
  ), t;
  return {
    c() {
      t = oe(e);
    },
    m(s, n) {
      b(s, t, n);
    },
    p(s, n) {
      n & /*$$restProps*/
      64 && e !== (e = /*$$restProps*/
      s[6].raw + "") && we(t, e);
    },
    i: A,
    o: A,
    d(s) {
      s && m(t);
    }
  };
}
function Xn(r) {
  let e, t;
  return e = new ge({
    props: {
      tokens: (
        /*tokens*/
        r[1]
      ),
      renderers: (
        /*renderers*/
        r[5]
      )
    }
  }), {
    c() {
      T(e.$$.fragment);
    },
    m(s, n) {
      x(e, s, n), t = !0;
    },
    p(s, n) {
      const i = {};
      n & /*tokens*/
      2 && (i.tokens = /*tokens*/
      s[1]), n & /*renderers*/
      32 && (i.renderers = /*renderers*/
      s[5]), e.$set(i);
    },
    i(s) {
      t || (p(e.$$.fragment, s), t = !0);
    },
    o(s) {
      g(e.$$.fragment, s), t = !1;
    },
    d(s) {
      z(e, s);
    }
  };
}
function Yn(r) {
  let e, t, s, n;
  const i = [Xn, Jn], l = [];
  function a(o, c) {
    return (
      /*tokens*/
      o[1] ? 0 : 1
    );
  }
  return e = a(r), t = l[e] = i[e](r), {
    c() {
      t.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), n = !0;
    },
    p(o, c) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), t = l[e], t ? t.p(o, c) : (t = l[e] = i[e](o), t.c()), p(t, 1), t.m(s.parentNode, s));
    },
    i(o) {
      n || (p(t), n = !0);
    },
    o(o) {
      g(t), n = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function Kn(r) {
  let e, t, s;
  const n = [
    { ordered: (
      /*ordered*/
      r[4]
    ) },
    /*$$restProps*/
    r[6]
  ];
  var i = (
    /*renderers*/
    r[5].list
  );
  function l(a, o) {
    let c = {
      $$slots: { default: [ts] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*ordered, $$restProps*/
    80)
      c = Y(n, [
        o & /*ordered*/
        16 && { ordered: (
          /*ordered*/
          a[4]
        ) },
        o & /*$$restProps*/
        64 && K(
          /*$$restProps*/
          a[6]
        )
      ]);
    else
      for (let u = 0; u < n.length; u += 1)
        c = re(c, n[u]);
    return { props: c };
  }
  return i && (e = j(i, l(r))), {
    c() {
      e && T(e.$$.fragment), t = P();
    },
    m(a, o) {
      e && x(e, a, o), b(a, t, o), s = !0;
    },
    p(a, o) {
      if (o & /*renderers*/
      32 && i !== (i = /*renderers*/
      a[5].list)) {
        if (e) {
          E();
          const c = e;
          g(c.$$.fragment, 1, 0, () => {
            z(c, 1);
          }), N();
        }
        i ? (e = j(i, l(a, o)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const c = o & /*ordered, $$restProps*/
        80 ? Y(n, [
          o & /*ordered*/
          16 && { ordered: (
            /*ordered*/
            a[4]
          ) },
          o & /*$$restProps*/
          64 && K(
            /*$$restProps*/
            a[6]
          )
        ]) : {};
        o & /*$$scope, $$restProps, renderers*/
        8388704 && (c.$$scope = { dirty: o, ctx: a }), e.$set(c);
      }
    },
    i(a) {
      s || (e && p(e.$$.fragment, a), s = !0);
    },
    o(a) {
      e && g(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && m(t), e && z(e, a);
    }
  };
}
function Vn(r) {
  let e, t, s;
  const n = [
    { ordered: (
      /*ordered*/
      r[4]
    ) },
    /*$$restProps*/
    r[6]
  ];
  var i = (
    /*renderers*/
    r[5].list
  );
  function l(a, o) {
    let c = {
      $$slots: { default: [ss] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*ordered, $$restProps*/
    80)
      c = Y(n, [
        o & /*ordered*/
        16 && { ordered: (
          /*ordered*/
          a[4]
        ) },
        o & /*$$restProps*/
        64 && K(
          /*$$restProps*/
          a[6]
        )
      ]);
    else
      for (let u = 0; u < n.length; u += 1)
        c = re(c, n[u]);
    return { props: c };
  }
  return i && (e = j(i, l(r))), {
    c() {
      e && T(e.$$.fragment), t = P();
    },
    m(a, o) {
      e && x(e, a, o), b(a, t, o), s = !0;
    },
    p(a, o) {
      if (o & /*renderers*/
      32 && i !== (i = /*renderers*/
      a[5].list)) {
        if (e) {
          E();
          const c = e;
          g(c.$$.fragment, 1, 0, () => {
            z(c, 1);
          }), N();
        }
        i ? (e = j(i, l(a, o)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const c = o & /*ordered, $$restProps*/
        80 ? Y(n, [
          o & /*ordered*/
          16 && { ordered: (
            /*ordered*/
            a[4]
          ) },
          o & /*$$restProps*/
          64 && K(
            /*$$restProps*/
            a[6]
          )
        ]) : {};
        o & /*$$scope, $$restProps, renderers*/
        8388704 && (c.$$scope = { dirty: o, ctx: a }), e.$set(c);
      }
    },
    i(a) {
      s || (e && p(e.$$.fragment, a), s = !0);
    },
    o(a) {
      e && g(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && m(t), e && z(e, a);
    }
  };
}
function es(r) {
  let e, t, s;
  return e = new ge({
    props: {
      tokens: (
        /*item*/
        r[18].tokens
      ),
      renderers: (
        /*renderers*/
        r[5]
      )
    }
  }), {
    c() {
      T(e.$$.fragment), t = W();
    },
    m(n, i) {
      x(e, n, i), b(n, t, i), s = !0;
    },
    p(n, i) {
      const l = {};
      i & /*$$restProps*/
      64 && (l.tokens = /*item*/
      n[18].tokens), i & /*renderers*/
      32 && (l.renderers = /*renderers*/
      n[5]), e.$set(l);
    },
    i(n) {
      s || (p(e.$$.fragment, n), s = !0);
    },
    o(n) {
      g(e.$$.fragment, n), s = !1;
    },
    d(n) {
      n && m(t), z(e, n);
    }
  };
}
function dt(r) {
  let e, t, s;
  const n = [
    /*item*/
    r[18]
  ];
  var i = (
    /*renderers*/
    r[5].unorderedlistitem || /*renderers*/
    r[5].listitem
  );
  function l(a, o) {
    let c = {
      $$slots: { default: [es] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*$$restProps*/
    64)
      c = Y(n, [K(
        /*item*/
        a[18]
      )]);
    else
      for (let u = 0; u < n.length; u += 1)
        c = re(c, n[u]);
    return { props: c };
  }
  return i && (e = j(i, l(r))), {
    c() {
      e && T(e.$$.fragment), t = P();
    },
    m(a, o) {
      e && x(e, a, o), b(a, t, o), s = !0;
    },
    p(a, o) {
      if (o & /*renderers*/
      32 && i !== (i = /*renderers*/
      a[5].unorderedlistitem || /*renderers*/
      a[5].listitem)) {
        if (e) {
          E();
          const c = e;
          g(c.$$.fragment, 1, 0, () => {
            z(c, 1);
          }), N();
        }
        i ? (e = j(i, l(a, o)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const c = o & /*$$restProps*/
        64 ? Y(n, [K(
          /*item*/
          a[18]
        )]) : {};
        o & /*$$scope, $$restProps, renderers*/
        8388704 && (c.$$scope = { dirty: o, ctx: a }), e.$set(c);
      }
    },
    i(a) {
      s || (e && p(e.$$.fragment, a), s = !0);
    },
    o(a) {
      e && g(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && m(t), e && z(e, a);
    }
  };
}
function ts(r) {
  let e, t, s = G(
    /*$$restProps*/
    r[6].items
  ), n = [];
  for (let l = 0; l < s.length; l += 1)
    n[l] = dt(at(r, s, l));
  const i = (l) => g(n[l], 1, 1, () => {
    n[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = P();
    },
    m(l, a) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, a);
      b(l, e, a), t = !0;
    },
    p(l, a) {
      if (a & /*renderers, $$restProps*/
      96) {
        s = G(
          /*$$restProps*/
          l[6].items
        );
        let o;
        for (o = 0; o < s.length; o += 1) {
          const c = at(l, s, o);
          n[o] ? (n[o].p(c, a), p(n[o], 1)) : (n[o] = dt(c), n[o].c(), p(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (E(), o = s.length; o < n.length; o += 1)
          i(o);
        N();
      }
    },
    i(l) {
      if (!t) {
        for (let a = 0; a < s.length; a += 1)
          p(n[a]);
        t = !0;
      }
    },
    o(l) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1)
        g(n[a]);
      t = !1;
    },
    d(l) {
      l && m(e), de(n, l);
    }
  };
}
function ns(r) {
  let e, t, s;
  return e = new ge({
    props: {
      tokens: (
        /*item*/
        r[18].tokens
      ),
      renderers: (
        /*renderers*/
        r[5]
      )
    }
  }), {
    c() {
      T(e.$$.fragment), t = W();
    },
    m(n, i) {
      x(e, n, i), b(n, t, i), s = !0;
    },
    p(n, i) {
      const l = {};
      i & /*$$restProps*/
      64 && (l.tokens = /*item*/
      n[18].tokens), i & /*renderers*/
      32 && (l.renderers = /*renderers*/
      n[5]), e.$set(l);
    },
    i(n) {
      s || (p(e.$$.fragment, n), s = !0);
    },
    o(n) {
      g(e.$$.fragment, n), s = !1;
    },
    d(n) {
      n && m(t), z(e, n);
    }
  };
}
function gt(r) {
  let e, t, s;
  const n = [
    /*item*/
    r[18]
  ];
  var i = (
    /*renderers*/
    r[5].orderedlistitem || /*renderers*/
    r[5].listitem
  );
  function l(a, o) {
    let c = {
      $$slots: { default: [ns] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*$$restProps*/
    64)
      c = Y(n, [K(
        /*item*/
        a[18]
      )]);
    else
      for (let u = 0; u < n.length; u += 1)
        c = re(c, n[u]);
    return { props: c };
  }
  return i && (e = j(i, l(r))), {
    c() {
      e && T(e.$$.fragment), t = P();
    },
    m(a, o) {
      e && x(e, a, o), b(a, t, o), s = !0;
    },
    p(a, o) {
      if (o & /*renderers*/
      32 && i !== (i = /*renderers*/
      a[5].orderedlistitem || /*renderers*/
      a[5].listitem)) {
        if (e) {
          E();
          const c = e;
          g(c.$$.fragment, 1, 0, () => {
            z(c, 1);
          }), N();
        }
        i ? (e = j(i, l(a, o)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const c = o & /*$$restProps*/
        64 ? Y(n, [K(
          /*item*/
          a[18]
        )]) : {};
        o & /*$$scope, $$restProps, renderers*/
        8388704 && (c.$$scope = { dirty: o, ctx: a }), e.$set(c);
      }
    },
    i(a) {
      s || (e && p(e.$$.fragment, a), s = !0);
    },
    o(a) {
      e && g(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && m(t), e && z(e, a);
    }
  };
}
function ss(r) {
  let e, t, s = G(
    /*$$restProps*/
    r[6].items
  ), n = [];
  for (let l = 0; l < s.length; l += 1)
    n[l] = gt(ct(r, s, l));
  const i = (l) => g(n[l], 1, 1, () => {
    n[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = P();
    },
    m(l, a) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, a);
      b(l, e, a), t = !0;
    },
    p(l, a) {
      if (a & /*renderers, $$restProps*/
      96) {
        s = G(
          /*$$restProps*/
          l[6].items
        );
        let o;
        for (o = 0; o < s.length; o += 1) {
          const c = ct(l, s, o);
          n[o] ? (n[o].p(c, a), p(n[o], 1)) : (n[o] = gt(c), n[o].c(), p(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (E(), o = s.length; o < n.length; o += 1)
          i(o);
        N();
      }
    },
    i(l) {
      if (!t) {
        for (let a = 0; a < s.length; a += 1)
          p(n[a]);
        t = !0;
      }
    },
    o(l) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1)
        g(n[a]);
      t = !1;
    },
    d(l) {
      l && m(e), de(n, l);
    }
  };
}
function is(r) {
  let e, t, s;
  return e = new ge({
    props: {
      tokens: (
        /*headerItem*/
        r[16].tokens
      ),
      renderers: (
        /*renderers*/
        r[5]
      )
    }
  }), {
    c() {
      T(e.$$.fragment), t = W();
    },
    m(n, i) {
      x(e, n, i), b(n, t, i), s = !0;
    },
    p(n, i) {
      const l = {};
      i & /*header*/
      4 && (l.tokens = /*headerItem*/
      n[16].tokens), i & /*renderers*/
      32 && (l.renderers = /*renderers*/
      n[5]), e.$set(l);
    },
    i(n) {
      s || (p(e.$$.fragment, n), s = !0);
    },
    o(n) {
      g(e.$$.fragment, n), s = !1;
    },
    d(n) {
      n && m(t), z(e, n);
    }
  };
}
function mt(r) {
  let e, t, s;
  var n = (
    /*renderers*/
    r[5].tablecell
  );
  function i(l, a) {
    return {
      props: {
        header: !0,
        align: (
          /*$$restProps*/
          l[6].align[
            /*i*/
            l[15]
          ] || "center"
        ),
        $$slots: { default: [is] },
        $$scope: { ctx: l }
      }
    };
  }
  return n && (e = j(n, i(r))), {
    c() {
      e && T(e.$$.fragment), t = P();
    },
    m(l, a) {
      e && x(e, l, a), b(l, t, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && n !== (n = /*renderers*/
      l[5].tablecell)) {
        if (e) {
          E();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            z(o, 1);
          }), N();
        }
        n ? (e = j(n, i(l)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (n) {
        const o = {};
        a & /*$$restProps*/
        64 && (o.align = /*$$restProps*/
        l[6].align[
          /*i*/
          l[15]
        ] || "center"), a & /*$$scope, header, renderers*/
        8388644 && (o.$$scope = { dirty: a, ctx: l }), e.$set(o);
      }
    },
    i(l) {
      s || (e && p(e.$$.fragment, l), s = !0);
    },
    o(l) {
      e && g(e.$$.fragment, l), s = !1;
    },
    d(l) {
      l && m(t), e && z(e, l);
    }
  };
}
function rs(r) {
  let e, t, s = G(
    /*header*/
    r[2]
  ), n = [];
  for (let l = 0; l < s.length; l += 1)
    n[l] = mt(ht(r, s, l));
  const i = (l) => g(n[l], 1, 1, () => {
    n[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = P();
    },
    m(l, a) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, a);
      b(l, e, a), t = !0;
    },
    p(l, a) {
      if (a & /*renderers, $$restProps, header*/
      100) {
        s = G(
          /*header*/
          l[2]
        );
        let o;
        for (o = 0; o < s.length; o += 1) {
          const c = ht(l, s, o);
          n[o] ? (n[o].p(c, a), p(n[o], 1)) : (n[o] = mt(c), n[o].c(), p(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (E(), o = s.length; o < n.length; o += 1)
          i(o);
        N();
      }
    },
    i(l) {
      if (!t) {
        for (let a = 0; a < s.length; a += 1)
          p(n[a]);
        t = !0;
      }
    },
    o(l) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1)
        g(n[a]);
      t = !1;
    },
    d(l) {
      l && m(e), de(n, l);
    }
  };
}
function ls(r) {
  let e, t, s;
  var n = (
    /*renderers*/
    r[5].tablerow
  );
  function i(l, a) {
    return {
      props: {
        $$slots: { default: [rs] },
        $$scope: { ctx: l }
      }
    };
  }
  return n && (e = j(n, i(r))), {
    c() {
      e && T(e.$$.fragment), t = P();
    },
    m(l, a) {
      e && x(e, l, a), b(l, t, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && n !== (n = /*renderers*/
      l[5].tablerow)) {
        if (e) {
          E();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            z(o, 1);
          }), N();
        }
        n ? (e = j(n, i(l)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (n) {
        const o = {};
        a & /*$$scope, header, renderers, $$restProps*/
        8388708 && (o.$$scope = { dirty: a, ctx: l }), e.$set(o);
      }
    },
    i(l) {
      s || (e && p(e.$$.fragment, l), s = !0);
    },
    o(l) {
      e && g(e.$$.fragment, l), s = !1;
    },
    d(l) {
      l && m(t), e && z(e, l);
    }
  };
}
function os(r) {
  let e, t;
  return e = new ge({
    props: {
      tokens: (
        /*cells*/
        r[13].tokens
      ),
      renderers: (
        /*renderers*/
        r[5]
      )
    }
  }), {
    c() {
      T(e.$$.fragment);
    },
    m(s, n) {
      x(e, s, n), t = !0;
    },
    p(s, n) {
      const i = {};
      n & /*rows*/
      8 && (i.tokens = /*cells*/
      s[13].tokens), n & /*renderers*/
      32 && (i.renderers = /*renderers*/
      s[5]), e.$set(i);
    },
    i(s) {
      t || (p(e.$$.fragment, s), t = !0);
    },
    o(s) {
      g(e.$$.fragment, s), t = !1;
    },
    d(s) {
      z(e, s);
    }
  };
}
function _t(r) {
  let e, t, s;
  var n = (
    /*renderers*/
    r[5].tablecell
  );
  function i(l, a) {
    return {
      props: {
        header: !1,
        align: (
          /*$$restProps*/
          l[6].align[
            /*i*/
            l[15]
          ] || "center"
        ),
        $$slots: { default: [os] },
        $$scope: { ctx: l }
      }
    };
  }
  return n && (e = j(n, i(r))), {
    c() {
      e && T(e.$$.fragment), t = P();
    },
    m(l, a) {
      e && x(e, l, a), b(l, t, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && n !== (n = /*renderers*/
      l[5].tablecell)) {
        if (e) {
          E();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            z(o, 1);
          }), N();
        }
        n ? (e = j(n, i(l)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (n) {
        const o = {};
        a & /*$$restProps*/
        64 && (o.align = /*$$restProps*/
        l[6].align[
          /*i*/
          l[15]
        ] || "center"), a & /*$$scope, rows, renderers*/
        8388648 && (o.$$scope = { dirty: a, ctx: l }), e.$set(o);
      }
    },
    i(l) {
      s || (e && p(e.$$.fragment, l), s = !0);
    },
    o(l) {
      e && g(e.$$.fragment, l), s = !1;
    },
    d(l) {
      l && m(t), e && z(e, l);
    }
  };
}
function as(r) {
  let e, t, s = G(
    /*row*/
    r[10]
  ), n = [];
  for (let l = 0; l < s.length; l += 1)
    n[l] = _t(ft(r, s, l));
  const i = (l) => g(n[l], 1, 1, () => {
    n[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = W();
    },
    m(l, a) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, a);
      b(l, e, a), t = !0;
    },
    p(l, a) {
      if (a & /*renderers, $$restProps, rows*/
      104) {
        s = G(
          /*row*/
          l[10]
        );
        let o;
        for (o = 0; o < s.length; o += 1) {
          const c = ft(l, s, o);
          n[o] ? (n[o].p(c, a), p(n[o], 1)) : (n[o] = _t(c), n[o].c(), p(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (E(), o = s.length; o < n.length; o += 1)
          i(o);
        N();
      }
    },
    i(l) {
      if (!t) {
        for (let a = 0; a < s.length; a += 1)
          p(n[a]);
        t = !0;
      }
    },
    o(l) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1)
        g(n[a]);
      t = !1;
    },
    d(l) {
      l && m(e), de(n, l);
    }
  };
}
function bt(r) {
  let e, t, s;
  var n = (
    /*renderers*/
    r[5].tablerow
  );
  function i(l, a) {
    return {
      props: {
        $$slots: { default: [as] },
        $$scope: { ctx: l }
      }
    };
  }
  return n && (e = j(n, i(r))), {
    c() {
      e && T(e.$$.fragment), t = P();
    },
    m(l, a) {
      e && x(e, l, a), b(l, t, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && n !== (n = /*renderers*/
      l[5].tablerow)) {
        if (e) {
          E();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            z(o, 1);
          }), N();
        }
        n ? (e = j(n, i(l)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (n) {
        const o = {};
        a & /*$$scope, rows, renderers, $$restProps*/
        8388712 && (o.$$scope = { dirty: a, ctx: l }), e.$set(o);
      }
    },
    i(l) {
      s || (e && p(e.$$.fragment, l), s = !0);
    },
    o(l) {
      e && g(e.$$.fragment, l), s = !1;
    },
    d(l) {
      l && m(t), e && z(e, l);
    }
  };
}
function cs(r) {
  let e, t, s = G(
    /*rows*/
    r[3]
  ), n = [];
  for (let l = 0; l < s.length; l += 1)
    n[l] = bt(ut(r, s, l));
  const i = (l) => g(n[l], 1, 1, () => {
    n[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = P();
    },
    m(l, a) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, a);
      b(l, e, a), t = !0;
    },
    p(l, a) {
      if (a & /*renderers, rows, $$restProps*/
      104) {
        s = G(
          /*rows*/
          l[3]
        );
        let o;
        for (o = 0; o < s.length; o += 1) {
          const c = ut(l, s, o);
          n[o] ? (n[o].p(c, a), p(n[o], 1)) : (n[o] = bt(c), n[o].c(), p(n[o], 1), n[o].m(e.parentNode, e));
        }
        for (E(), o = s.length; o < n.length; o += 1)
          i(o);
        N();
      }
    },
    i(l) {
      if (!t) {
        for (let a = 0; a < s.length; a += 1)
          p(n[a]);
        t = !0;
      }
    },
    o(l) {
      n = n.filter(Boolean);
      for (let a = 0; a < n.length; a += 1)
        g(n[a]);
      t = !1;
    },
    d(l) {
      l && m(e), de(n, l);
    }
  };
}
function us(r) {
  let e, t, s, n, i;
  var l = (
    /*renderers*/
    r[5].tablehead
  );
  function a(u, h) {
    return {
      props: {
        $$slots: { default: [ls] },
        $$scope: { ctx: u }
      }
    };
  }
  l && (e = j(l, a(r)));
  var o = (
    /*renderers*/
    r[5].tablebody
  );
  function c(u, h) {
    return {
      props: {
        $$slots: { default: [cs] },
        $$scope: { ctx: u }
      }
    };
  }
  return o && (s = j(o, c(r))), {
    c() {
      e && T(e.$$.fragment), t = W(), s && T(s.$$.fragment), n = P();
    },
    m(u, h) {
      e && x(e, u, h), b(u, t, h), s && x(s, u, h), b(u, n, h), i = !0;
    },
    p(u, h) {
      if (h & /*renderers*/
      32 && l !== (l = /*renderers*/
      u[5].tablehead)) {
        if (e) {
          E();
          const f = e;
          g(f.$$.fragment, 1, 0, () => {
            z(f, 1);
          }), N();
        }
        l ? (e = j(l, a(u)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const f = {};
        h & /*$$scope, renderers, header, $$restProps*/
        8388708 && (f.$$scope = { dirty: h, ctx: u }), e.$set(f);
      }
      if (h & /*renderers*/
      32 && o !== (o = /*renderers*/
      u[5].tablebody)) {
        if (s) {
          E();
          const f = s;
          g(f.$$.fragment, 1, 0, () => {
            z(f, 1);
          }), N();
        }
        o ? (s = j(o, c(u)), T(s.$$.fragment), p(s.$$.fragment, 1), x(s, n.parentNode, n)) : s = null;
      } else if (o) {
        const f = {};
        h & /*$$scope, rows, renderers, $$restProps*/
        8388712 && (f.$$scope = { dirty: h, ctx: u }), s.$set(f);
      }
    },
    i(u) {
      i || (e && p(e.$$.fragment, u), s && p(s.$$.fragment, u), i = !0);
    },
    o(u) {
      e && g(e.$$.fragment, u), s && g(s.$$.fragment, u), i = !1;
    },
    d(u) {
      u && (m(t), m(n)), e && z(e, u), s && z(s, u);
    }
  };
}
function kt(r) {
  let e, t;
  const s = [
    /*token*/
    r[7],
    { renderers: (
      /*renderers*/
      r[5]
    ) }
  ];
  let n = {};
  for (let i = 0; i < s.length; i += 1)
    n = re(n, s[i]);
  return e = new ge({ props: n }), {
    c() {
      T(e.$$.fragment);
    },
    m(i, l) {
      x(e, i, l), t = !0;
    },
    p(i, l) {
      const a = l & /*tokens, renderers*/
      34 ? Y(s, [
        l & /*tokens*/
        2 && K(
          /*token*/
          i[7]
        ),
        l & /*renderers*/
        32 && { renderers: (
          /*renderers*/
          i[5]
        ) }
      ]) : {};
      e.$set(a);
    },
    i(i) {
      t || (p(e.$$.fragment, i), t = !0);
    },
    o(i) {
      g(e.$$.fragment, i), t = !1;
    },
    d(i) {
      z(e, i);
    }
  };
}
function fs(r) {
  let e, t, s, n;
  const i = [Hn, Fn], l = [];
  function a(o, c) {
    return (
      /*type*/
      o[0] ? (
        /*renderers*/
        o[5][
          /*type*/
          o[0]
        ] ? 1 : -1
      ) : 0
    );
  }
  return ~(e = a(r)) && (t = l[e] = i[e](r)), {
    c() {
      t && t.c(), s = P();
    },
    m(o, c) {
      ~e && l[e].m(o, c), b(o, s, c), n = !0;
    },
    p(o, [c]) {
      let u = e;
      e = a(o), e === u ? ~e && l[e].p(o, c) : (t && (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N()), ~e ? (t = l[e], t ? t.p(o, c) : (t = l[e] = i[e](o), t.c()), p(t, 1), t.m(s.parentNode, s)) : t = null);
    },
    i(o) {
      n || (p(t), n = !0);
    },
    o(o) {
      g(t), n = !1;
    },
    d(o) {
      o && m(s), ~e && l[e].d(o);
    }
  };
}
function hs(r, e, t) {
  const s = ["type", "tokens", "header", "rows", "ordered", "renderers"];
  let n = st(e, s), { type: i = void 0 } = e, { tokens: l = void 0 } = e, { header: a = void 0 } = e, { rows: o = void 0 } = e, { ordered: c = !1 } = e, { renderers: u } = e;
  return Un(), r.$$set = (h) => {
    e = re(re({}, e), en(h)), t(6, n = st(e, s)), "type" in h && t(0, i = h.type), "tokens" in h && t(1, l = h.tokens), "header" in h && t(2, a = h.header), "rows" in h && t(3, o = h.rows), "ordered" in h && t(4, c = h.ordered), "renderers" in h && t(5, u = h.renderers);
  }, [i, l, a, o, c, u, n];
}
let ge = class extends M {
  constructor(e) {
    super(), q(this, e, hs, fs, I, {
      type: 0,
      tokens: 1,
      header: 2,
      rows: 3,
      ordered: 4,
      renderers: 5
    });
  }
};
function Ke() {
  return {
    async: !1,
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    hooks: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1
  };
}
let ae = Ke();
function Bt(r) {
  ae = r;
}
const Ot = /[&<>"']/, ps = new RegExp(Ot.source, "g"), Dt = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, ds = new RegExp(Dt.source, "g"), gs = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, $t = (r) => gs[r];
function Q(r, e) {
  if (e) {
    if (Ot.test(r))
      return r.replace(ps, $t);
  } else if (Dt.test(r))
    return r.replace(ds, $t);
  return r;
}
const ms = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Zt(r) {
  return r.replace(ms, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const _s = /(^|[^\[])\^/g;
function C(r, e) {
  r = typeof r == "string" ? r : r.source, e = e || "";
  const t = {
    replace: (s, n) => (n = n.source || n, n = n.replace(_s, "$1"), r = r.replace(s, n), t),
    getRegex: () => new RegExp(r, e)
  };
  return t;
}
const bs = /[^\w:]/g, ks = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function wt(r, e, t) {
  if (r) {
    let s;
    try {
      s = decodeURIComponent(Zt(t)).replace(bs, "").toLowerCase();
    } catch {
      return null;
    }
    if (s.indexOf("javascript:") === 0 || s.indexOf("vbscript:") === 0 || s.indexOf("data:") === 0)
      return null;
  }
  e && !ks.test(t) && (t = vs(e, t));
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
const qe = {}, $s = /^[^:]+:\/*[^/]*$/, ws = /^([^:]+:)[\s\S]*$/, ys = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function vs(r, e) {
  qe[" " + r] || ($s.test(r) ? qe[" " + r] = r + "/" : qe[" " + r] = Ce(r, "/", !0)), r = qe[" " + r];
  const t = r.indexOf(":") === -1;
  return e.substring(0, 2) === "//" ? t ? e : r.replace(ws, "$1") + e : e.charAt(0) === "/" ? t ? e : r.replace(ys, "$1") + e : r + e;
}
const Pe = { exec: function() {
} };
function yt(r, e) {
  const t = r.replace(/\|/g, (i, l, a) => {
    let o = !1, c = l;
    for (; --c >= 0 && a[c] === "\\"; )
      o = !o;
    return o ? "|" : " |";
  }), s = t.split(/ \|/);
  let n = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !s[s.length - 1].trim() && s.pop(), s.length > e)
    s.splice(e);
  else
    for (; s.length < e; )
      s.push("");
  for (; n < s.length; n++)
    s[n] = s[n].trim().replace(/\\\|/g, "|");
  return s;
}
function Ce(r, e, t) {
  const s = r.length;
  if (s === 0)
    return "";
  let n = 0;
  for (; n < s; ) {
    const i = r.charAt(s - n - 1);
    if (i === e && !t)
      n++;
    else if (i !== e && t)
      n++;
    else
      break;
  }
  return r.slice(0, s - n);
}
function xs(r, e) {
  if (r.indexOf(e[1]) === -1)
    return -1;
  const t = r.length;
  let s = 0, n = 0;
  for (; n < t; n++)
    if (r[n] === "\\")
      n++;
    else if (r[n] === e[0])
      s++;
    else if (r[n] === e[1] && (s--, s < 0))
      return n;
  return -1;
}
function zs(r, e) {
  !r || r.silent || (e && console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"), (r.sanitize || r.sanitizer) && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"), (r.highlight || r.langPrefix !== "language-") && console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."), r.mangle && console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."), r.baseUrl && console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."), r.smartypants && console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."), r.xhtml && console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."), (r.headerIds || r.headerPrefix) && console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."));
}
function vt(r, e, t, s) {
  const n = e.href, i = e.title ? Q(e.title) : null, l = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    s.state.inLink = !0;
    const a = {
      type: "link",
      raw: t,
      href: n,
      title: i,
      text: l,
      tokens: s.inlineTokens(l)
    };
    return s.state.inLink = !1, a;
  }
  return {
    type: "image",
    raw: t,
    href: n,
    title: i,
    text: Q(l)
  };
}
function Ts(r, e) {
  const t = r.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const s = t[1];
  return e.split(`
`).map((n) => {
    const i = n.match(/^\s+/);
    if (i === null)
      return n;
    const [l] = i;
    return l.length >= s.length ? n.slice(s.length) : n;
  }).join(`
`);
}
class je {
  constructor(e) {
    this.options = e || ae;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const s = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? s : Ce(s, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const s = t[0], n = Ts(s, t[3] || "");
      return {
        type: "code",
        raw: s,
        lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2],
        text: n
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let s = t[2].trim();
      if (/#$/.test(s)) {
        const n = Ce(s, "#");
        (this.options.pedantic || !n || / $/.test(n)) && (s = n.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: s,
        tokens: this.lexer.inline(s)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      const s = t[0].replace(/^ *>[ \t]?/gm, ""), n = this.lexer.state.top;
      this.lexer.state.top = !0;
      const i = this.lexer.blockTokens(s);
      return this.lexer.state.top = n, {
        type: "blockquote",
        raw: t[0],
        tokens: i,
        text: s
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let s, n, i, l, a, o, c, u, h, f, d, k, S = t[1].trim();
      const U = S.length > 1, $ = {
        type: "list",
        raw: "",
        ordered: U,
        start: U ? +S.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      S = U ? `\\d{1,9}\\${S.slice(-1)}` : `\\${S}`, this.options.pedantic && (S = U ? S : "[*+-]");
      const H = new RegExp(`^( {0,3}${S})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (; e && (k = !1, !(!(t = H.exec(e)) || this.rules.block.hr.test(e))); ) {
        if (s = t[0], e = e.substring(s.length), u = t[2].split(`
`, 1)[0].replace(/^\t+/, (J) => " ".repeat(3 * J.length)), h = e.split(`
`, 1)[0], this.options.pedantic ? (l = 2, d = u.trimLeft()) : (l = t[2].search(/[^ ]/), l = l > 4 ? 1 : l, d = u.slice(l), l += t[1].length), o = !1, !u && /^ *$/.test(h) && (s += h + `
`, e = e.substring(h.length + 1), k = !0), !k) {
          const J = new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), ee = new RegExp(`^ {0,${Math.min(3, l - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), te = new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:\`\`\`|~~~)`), ye = new RegExp(`^ {0,${Math.min(3, l - 1)}}#`);
          for (; e && (f = e.split(`
`, 1)[0], h = f, this.options.pedantic && (h = h.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !(te.test(h) || ye.test(h) || J.test(h) || ee.test(e))); ) {
            if (h.search(/[^ ]/) >= l || !h.trim())
              d += `
` + h.slice(l);
            else {
              if (o || u.search(/[^ ]/) >= 4 || te.test(u) || ye.test(u) || ee.test(u))
                break;
              d += `
` + h;
            }
            !o && !h.trim() && (o = !0), s += f + `
`, e = e.substring(f.length + 1), u = h.slice(l);
          }
        }
        $.loose || (c ? $.loose = !0 : /\n *\n *$/.test(s) && (c = !0)), this.options.gfm && (n = /^\[[ xX]\] /.exec(d), n && (i = n[0] !== "[ ] ", d = d.replace(/^\[[ xX]\] +/, ""))), $.items.push({
          type: "list_item",
          raw: s,
          task: !!n,
          checked: i,
          loose: !1,
          text: d
        }), $.raw += s;
      }
      $.items[$.items.length - 1].raw = s.trimRight(), $.items[$.items.length - 1].text = d.trimRight(), $.raw = $.raw.trimRight();
      const V = $.items.length;
      for (a = 0; a < V; a++)
        if (this.lexer.state.top = !1, $.items[a].tokens = this.lexer.blockTokens($.items[a].text, []), !$.loose) {
          const J = $.items[a].tokens.filter((te) => te.type === "space"), ee = J.length > 0 && J.some((te) => /\n.*\n/.test(te.raw));
          $.loose = ee;
        }
      if ($.loose)
        for (a = 0; a < V; a++)
          $.items[a].loose = !0;
      return $;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t) {
      const s = {
        type: "html",
        block: !0,
        raw: t[0],
        pre: !this.options.sanitizer && (t[1] === "pre" || t[1] === "script" || t[1] === "style"),
        text: t[0]
      };
      if (this.options.sanitize) {
        const n = this.options.sanitizer ? this.options.sanitizer(t[0]) : Q(t[0]);
        s.type = "paragraph", s.text = n, s.tokens = this.lexer.inline(n);
      }
      return s;
    }
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const s = t[1].toLowerCase().replace(/\s+/g, " "), n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
      return {
        type: "def",
        tag: s,
        raw: t[0],
        href: n,
        title: i
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (t) {
      const s = {
        type: "table",
        header: yt(t[1]).map((n) => ({ text: n })),
        align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : []
      };
      if (s.header.length === s.align.length) {
        s.raw = t[0];
        let n = s.align.length, i, l, a, o;
        for (i = 0; i < n; i++)
          /^ *-+: *$/.test(s.align[i]) ? s.align[i] = "right" : /^ *:-+: *$/.test(s.align[i]) ? s.align[i] = "center" : /^ *:-+ *$/.test(s.align[i]) ? s.align[i] = "left" : s.align[i] = null;
        for (n = s.rows.length, i = 0; i < n; i++)
          s.rows[i] = yt(s.rows[i], s.header.length).map((c) => ({ text: c }));
        for (n = s.header.length, l = 0; l < n; l++)
          s.header[l].tokens = this.lexer.inline(s.header[l].text);
        for (n = s.rows.length, l = 0; l < n; l++)
          for (o = s.rows[l], a = 0; a < o.length; a++)
            o[a].tokens = this.lexer.inline(o[a].text);
        return s;
      }
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const s = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: s,
        tokens: this.lexer.inline(s)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: Q(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: this.options.sanitize ? "text" : "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : Q(t[0]) : t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const s = t[2].trim();
      if (!this.options.pedantic && /^</.test(s)) {
        if (!/>$/.test(s))
          return;
        const l = Ce(s.slice(0, -1), "\\");
        if ((s.length - l.length) % 2 === 0)
          return;
      } else {
        const l = xs(t[2], "()");
        if (l > -1) {
          const o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + l;
          t[2] = t[2].substring(0, l), t[0] = t[0].substring(0, o).trim(), t[3] = "";
        }
      }
      let n = t[2], i = "";
      if (this.options.pedantic) {
        const l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
        l && (n = l[1], i = l[3]);
      } else
        i = t[3] ? t[3].slice(1, -1) : "";
      return n = n.trim(), /^</.test(n) && (this.options.pedantic && !/>$/.test(s) ? n = n.slice(1) : n = n.slice(1, -1)), vt(t, {
        href: n && n.replace(this.rules.inline._escapes, "$1"),
        title: i && i.replace(this.rules.inline._escapes, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let s;
    if ((s = this.rules.inline.reflink.exec(e)) || (s = this.rules.inline.nolink.exec(e))) {
      let n = (s[2] || s[1]).replace(/\s+/g, " ");
      if (n = t[n.toLowerCase()], !n) {
        const i = s[0].charAt(0);
        return {
          type: "text",
          raw: i,
          text: i
        };
      }
      return vt(s, n, s[0], this.lexer);
    }
  }
  emStrong(e, t, s = "") {
    let n = this.rules.inline.emStrong.lDelim.exec(e);
    if (!n || n[3] && s.match(/[\p{L}\p{N}]/u))
      return;
    if (!(n[1] || n[2] || "") || !s || this.rules.inline.punctuation.exec(s)) {
      const l = n[0].length - 1;
      let a, o, c = l, u = 0;
      const h = n[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (h.lastIndex = 0, t = t.slice(-1 * e.length + l); (n = h.exec(t)) != null; ) {
        if (a = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !a)
          continue;
        if (o = a.length, n[3] || n[4]) {
          c += o;
          continue;
        } else if ((n[5] || n[6]) && l % 3 && !((l + o) % 3)) {
          u += o;
          continue;
        }
        if (c -= o, c > 0)
          continue;
        o = Math.min(o, o + c + u);
        const f = e.slice(0, l + n.index + o + 1);
        if (Math.min(l, o) % 2) {
          const k = f.slice(1, -1);
          return {
            type: "em",
            raw: f,
            text: k,
            tokens: this.lexer.inlineTokens(k)
          };
        }
        const d = f.slice(2, -2);
        return {
          type: "strong",
          raw: f,
          text: d,
          tokens: this.lexer.inlineTokens(d)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let s = t[2].replace(/\n/g, " ");
      const n = /[^ ]/.test(s), i = /^ /.test(s) && / $/.test(s);
      return n && i && (s = s.substring(1, s.length - 1)), s = Q(s, !0), {
        type: "codespan",
        raw: t[0],
        text: s
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e, t) {
    const s = this.rules.inline.autolink.exec(e);
    if (s) {
      let n, i;
      return s[2] === "@" ? (n = Q(this.options.mangle ? t(s[1]) : s[1]), i = "mailto:" + n) : (n = Q(s[1]), i = n), {
        type: "link",
        raw: s[0],
        text: n,
        href: i,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  url(e, t) {
    let s;
    if (s = this.rules.inline.url.exec(e)) {
      let n, i;
      if (s[2] === "@")
        n = Q(this.options.mangle ? t(s[0]) : s[0]), i = "mailto:" + n;
      else {
        let l;
        do
          l = s[0], s[0] = this.rules.inline._backpedal.exec(s[0])[0];
        while (l !== s[0]);
        n = Q(s[0]), s[1] === "www." ? i = "http://" + s[0] : i = s[0];
      }
      return {
        type: "link",
        raw: s[0],
        text: n,
        href: i,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  inlineText(e, t) {
    const s = this.rules.inline.text.exec(e);
    if (s) {
      let n;
      return this.lexer.state.inRawBlock ? n = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(s[0]) : Q(s[0]) : s[0] : n = Q(this.options.smartypants ? t(s[0]) : s[0]), {
        type: "text",
        raw: s[0],
        text: n
      };
    }
  }
}
const v = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: Pe,
  lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
v._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
v._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
v.def = C(v.def).replace("label", v._label).replace("title", v._title).getRegex();
v.bullet = /(?:[*+-]|\d{1,9}[.)])/;
v.listItemStart = C(/^( *)(bull) */).replace("bull", v.bullet).getRegex();
v.list = C(v.list).replace(/bull/g, v.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + v.def.source + ")").getRegex();
v._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
v._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
v.html = C(v.html, "i").replace("comment", v._comment).replace("tag", v._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
v.lheading = C(v.lheading).replace(/bull/g, v.bullet).getRegex();
v.paragraph = C(v._paragraph).replace("hr", v.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v._tag).getRegex();
v.blockquote = C(v.blockquote).replace("paragraph", v.paragraph).getRegex();
v.normal = { ...v };
v.gfm = {
  ...v.normal,
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  // Cells
};
v.gfm.table = C(v.gfm.table).replace("hr", v.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v._tag).getRegex();
v.gfm.paragraph = C(v._paragraph).replace("hr", v.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", v.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v._tag).getRegex();
v.pedantic = {
  ...v.normal,
  html: C(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", v._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Pe,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: C(v.normal._paragraph).replace("hr", v.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", v.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
};
const _ = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: Pe,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
    //         (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //         | Skip orphan inside strong      | Consume to delim | (1) #***              | (2) a***#, a***                    | (3) #***a, ***a                  | (4) ***#                 | (5) #***#                         | (6) a***a
    rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
    // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: Pe,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^((?![*_])[\spunctuation])/
};
_._punctuation = "\\p{P}$+<=>`^|~";
_.punctuation = C(_.punctuation, "u").replace(/punctuation/g, _._punctuation).getRegex();
_.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
_.anyPunctuation = /\\[punct]/g;
_._escapes = /\\([punct])/g;
_._comment = C(v._comment).replace("(?:-->|$)", "-->").getRegex();
_.emStrong.lDelim = C(_.emStrong.lDelim, "u").replace(/punct/g, _._punctuation).getRegex();
_.emStrong.rDelimAst = C(_.emStrong.rDelimAst, "gu").replace(/punct/g, _._punctuation).getRegex();
_.emStrong.rDelimUnd = C(_.emStrong.rDelimUnd, "gu").replace(/punct/g, _._punctuation).getRegex();
_.anyPunctuation = C(_.anyPunctuation, "gu").replace(/punct/g, _._punctuation).getRegex();
_._escapes = C(_._escapes, "gu").replace(/punct/g, _._punctuation).getRegex();
_._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
_._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
_.autolink = C(_.autolink).replace("scheme", _._scheme).replace("email", _._email).getRegex();
_._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
_.tag = C(_.tag).replace("comment", _._comment).replace("attribute", _._attribute).getRegex();
_._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
_._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
_._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
_.link = C(_.link).replace("label", _._label).replace("href", _._href).replace("title", _._title).getRegex();
_.reflink = C(_.reflink).replace("label", _._label).replace("ref", v._label).getRegex();
_.nolink = C(_.nolink).replace("ref", v._label).getRegex();
_.reflinkSearch = C(_.reflinkSearch, "g").replace("reflink", _.reflink).replace("nolink", _.nolink).getRegex();
_.normal = { ..._ };
_.pedantic = {
  ..._.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: C(/^!?\[(label)\]\((.*?)\)/).replace("label", _._label).getRegex(),
  reflink: C(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _._label).getRegex()
};
_.gfm = {
  ..._.normal,
  escape: C(_.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
_.gfm.url = C(_.gfm.url, "i").replace("email", _.gfm._extended_email).getRegex();
_.breaks = {
  ..._.gfm,
  br: C(_.br).replace("{2,}", "*").getRegex(),
  text: C(_.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
function Ss(r) {
  return r.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function xt(r) {
  let e = "", t, s;
  const n = r.length;
  for (t = 0; t < n; t++)
    s = r.charCodeAt(t), Math.random() > 0.5 && (s = "x" + s.toString(16)), e += "&#" + s + ";";
  return e;
}
class X {
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || ae, this.options.tokenizer = this.options.tokenizer || new je(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: v.normal,
      inline: _.normal
    };
    this.options.pedantic ? (t.block = v.pedantic, t.inline = _.pedantic) : this.options.gfm && (t.block = v.gfm, this.options.breaks ? t.inline = _.breaks : t.inline = _.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: v,
      inline: _
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new X(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new X(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    let t;
    for (; t = this.inlineQueue.shift(); )
      this.inlineTokens(t.src, t.tokens);
    return this.tokens;
  }
  /**
   * Lexing
   */
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (a, o, c) => o + "    ".repeat(c.length));
    let s, n, i, l;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => (s = a.call({ lexer: this }, e, t)) ? (e = e.substring(s.raw.length), t.push(s), !0) : !1))) {
        if (s = this.tokenizer.space(e)) {
          e = e.substring(s.raw.length), s.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(s);
          continue;
        }
        if (s = this.tokenizer.code(e)) {
          e = e.substring(s.raw.length), n = t[t.length - 1], n && (n.type === "paragraph" || n.type === "text") ? (n.raw += `
` + s.raw, n.text += `
` + s.text, this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : t.push(s);
          continue;
        }
        if (s = this.tokenizer.fences(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (s = this.tokenizer.heading(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (s = this.tokenizer.hr(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (s = this.tokenizer.blockquote(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (s = this.tokenizer.list(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (s = this.tokenizer.html(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (s = this.tokenizer.def(e)) {
          e = e.substring(s.raw.length), n = t[t.length - 1], n && (n.type === "paragraph" || n.type === "text") ? (n.raw += `
` + s.raw, n.text += `
` + s.raw, this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = {
            href: s.href,
            title: s.title
          });
          continue;
        }
        if (s = this.tokenizer.table(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (s = this.tokenizer.lheading(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startBlock) {
          let a = 1 / 0;
          const o = e.slice(1);
          let c;
          this.options.extensions.startBlock.forEach(function(u) {
            c = u.call({ lexer: this }, o), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
          }), a < 1 / 0 && a >= 0 && (i = e.substring(0, a + 1));
        }
        if (this.state.top && (s = this.tokenizer.paragraph(i))) {
          n = t[t.length - 1], l && n.type === "paragraph" ? (n.raw += `
` + s.raw, n.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : t.push(s), l = i.length !== e.length, e = e.substring(s.raw.length);
          continue;
        }
        if (s = this.tokenizer.text(e)) {
          e = e.substring(s.raw.length), n = t[t.length - 1], n && n.type === "text" ? (n.raw += `
` + s.raw, n.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n.text) : t.push(s);
          continue;
        }
        if (e) {
          const a = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(a);
            break;
          } else
            throw new Error(a);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let s, n, i, l = e, a, o, c;
    if (this.tokens.links) {
      const u = Object.keys(this.tokens.links);
      if (u.length > 0)
        for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; )
          u.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l = l.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(l)) != null; )
      l = l.slice(0, a.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (o || (c = ""), o = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((u) => (s = u.call({ lexer: this }, e, t)) ? (e = e.substring(s.raw.length), t.push(s), !0) : !1))) {
        if (s = this.tokenizer.escape(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (s = this.tokenizer.tag(e)) {
          e = e.substring(s.raw.length), n = t[t.length - 1], n && s.type === "text" && n.type === "text" ? (n.raw += s.raw, n.text += s.text) : t.push(s);
          continue;
        }
        if (s = this.tokenizer.link(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (s = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(s.raw.length), n = t[t.length - 1], n && s.type === "text" && n.type === "text" ? (n.raw += s.raw, n.text += s.text) : t.push(s);
          continue;
        }
        if (s = this.tokenizer.emStrong(e, l, c)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (s = this.tokenizer.codespan(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (s = this.tokenizer.br(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (s = this.tokenizer.del(e)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (s = this.tokenizer.autolink(e, xt)) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (!this.state.inLink && (s = this.tokenizer.url(e, xt))) {
          e = e.substring(s.raw.length), t.push(s);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startInline) {
          let u = 1 / 0;
          const h = e.slice(1);
          let f;
          this.options.extensions.startInline.forEach(function(d) {
            f = d.call({ lexer: this }, h), typeof f == "number" && f >= 0 && (u = Math.min(u, f));
          }), u < 1 / 0 && u >= 0 && (i = e.substring(0, u + 1));
        }
        if (s = this.tokenizer.inlineText(i, Ss)) {
          e = e.substring(s.raw.length), s.raw.slice(-1) !== "_" && (c = s.raw.slice(-1)), o = !0, n = t[t.length - 1], n && n.type === "text" ? (n.raw += s.raw, n.text += s.text) : t.push(s);
          continue;
        }
        if (e) {
          const u = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(u);
            break;
          } else
            throw new Error(u);
        }
      }
    return t;
  }
}
class Be {
  constructor(e) {
    this.options = e || ae;
  }
  code(e, t, s) {
    const n = (t || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const i = this.options.highlight(e, n);
      i != null && i !== e && (s = !0, e = i);
    }
    return e = e.replace(/\n$/, "") + `
`, n ? '<pre><code class="' + this.options.langPrefix + Q(n) + '">' + (s ? e : Q(e, !0)) + `</code></pre>
` : "<pre><code>" + (s ? e : Q(e, !0)) + `</code></pre>
`;
  }
  /**
   * @param {string} quote
   */
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(e, t, s, n) {
    if (this.options.headerIds) {
      const i = this.options.headerPrefix + n.slug(s);
      return `<h${t} id="${i}">${e}</h${t}>
`;
    }
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return this.options.xhtml ? `<hr/>
` : `<hr>
`;
  }
  list(e, t, s) {
    const n = t ? "ol" : "ul", i = t && s !== 1 ? ' start="' + s + '"' : "";
    return "<" + n + i + `>
` + e + "</" + n + `>
`;
  }
  /**
   * @param {string} text
   */
  listitem(e) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  /**
   * @param {string} text
   */
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  /**
   * @param {string} header
   * @param {string} body
   */
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  /**
   * @param {string} content
   */
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const s = t.header ? "th" : "td";
    return (t.align ? `<${s} align="${t.align}">` : `<${s}>`) + e + `</${s}>
`;
  }
  /**
   * span level renderer
   * @param {string} text
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  /**
   * @param {string} text
   */
  em(e) {
    return `<em>${e}</em>`;
  }
  /**
   * @param {string} text
   */
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  /**
   * @param {string} text
   */
  del(e) {
    return `<del>${e}</del>`;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(e, t, s) {
    if (e = wt(this.options.sanitize, this.options.baseUrl, e), e === null)
      return s;
    let n = '<a href="' + e + '"';
    return t && (n += ' title="' + t + '"'), n += ">" + s + "</a>", n;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(e, t, s) {
    if (e = wt(this.options.sanitize, this.options.baseUrl, e), e === null)
      return s;
    let n = `<img src="${e}" alt="${s}"`;
    return t && (n += ` title="${t}"`), n += this.options.xhtml ? "/>" : ">", n;
  }
  text(e) {
    return e;
  }
}
class Ve {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, s) {
    return "" + s;
  }
  image(e, t, s) {
    return "" + s;
  }
  br() {
    return "";
  }
}
class Ze {
  constructor() {
    this.seen = {};
  }
  /**
   * @param {string} value
   */
  serialize(e) {
    return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(e, t) {
    let s = e, n = 0;
    if (this.seen.hasOwnProperty(s)) {
      n = this.seen[e];
      do
        n++, s = e + "-" + n;
      while (this.seen.hasOwnProperty(s));
    }
    return t || (this.seen[e] = n, this.seen[s] = 0), s;
  }
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(e, t = {}) {
    const s = this.serialize(e);
    return this.getNextSafeSlug(s, t.dryrun);
  }
}
class se {
  constructor(e) {
    this.options = e || ae, this.options.renderer = this.options.renderer || new Be(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Ve(), this.slugger = new Ze();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new se(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new se(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let s = "", n, i, l, a, o, c, u, h, f, d, k, S, U, $, H, V, J, ee, te;
    const ye = e.length;
    for (n = 0; n < ye; n++) {
      if (d = e[n], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[d.type] && (te = this.options.extensions.renderers[d.type].call({ parser: this }, d), te !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(d.type))) {
        s += te || "";
        continue;
      }
      switch (d.type) {
        case "space":
          continue;
        case "hr": {
          s += this.renderer.hr();
          continue;
        }
        case "heading": {
          s += this.renderer.heading(
            this.parseInline(d.tokens),
            d.depth,
            Zt(this.parseInline(d.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          s += this.renderer.code(
            d.text,
            d.lang,
            d.escaped
          );
          continue;
        }
        case "table": {
          for (h = "", u = "", a = d.header.length, i = 0; i < a; i++)
            u += this.renderer.tablecell(
              this.parseInline(d.header[i].tokens),
              { header: !0, align: d.align[i] }
            );
          for (h += this.renderer.tablerow(u), f = "", a = d.rows.length, i = 0; i < a; i++) {
            for (c = d.rows[i], u = "", o = c.length, l = 0; l < o; l++)
              u += this.renderer.tablecell(
                this.parseInline(c[l].tokens),
                { header: !1, align: d.align[l] }
              );
            f += this.renderer.tablerow(u);
          }
          s += this.renderer.table(h, f);
          continue;
        }
        case "blockquote": {
          f = this.parse(d.tokens), s += this.renderer.blockquote(f);
          continue;
        }
        case "list": {
          for (k = d.ordered, S = d.start, U = d.loose, a = d.items.length, f = "", i = 0; i < a; i++)
            H = d.items[i], V = H.checked, J = H.task, $ = "", H.task && (ee = this.renderer.checkbox(V), U ? H.tokens.length > 0 && H.tokens[0].type === "paragraph" ? (H.tokens[0].text = ee + " " + H.tokens[0].text, H.tokens[0].tokens && H.tokens[0].tokens.length > 0 && H.tokens[0].tokens[0].type === "text" && (H.tokens[0].tokens[0].text = ee + " " + H.tokens[0].tokens[0].text)) : H.tokens.unshift({
              type: "text",
              text: ee
            }) : $ += ee), $ += this.parse(H.tokens, U), f += this.renderer.listitem($, J, V);
          s += this.renderer.list(f, k, S);
          continue;
        }
        case "html": {
          s += this.renderer.html(d.text, d.block);
          continue;
        }
        case "paragraph": {
          s += this.renderer.paragraph(this.parseInline(d.tokens));
          continue;
        }
        case "text": {
          for (f = d.tokens ? this.parseInline(d.tokens) : d.text; n + 1 < ye && e[n + 1].type === "text"; )
            d = e[++n], f += `
` + (d.tokens ? this.parseInline(d.tokens) : d.text);
          s += t ? this.renderer.paragraph(f) : f;
          continue;
        }
        default: {
          const et = 'Token with "' + d.type + '" type was not found.';
          if (this.options.silent) {
            console.error(et);
            return;
          } else
            throw new Error(et);
        }
      }
    }
    return s;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let s = "", n, i, l;
    const a = e.length;
    for (n = 0; n < a; n++) {
      if (i = e[n], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type] && (l = this.options.extensions.renderers[i.type].call({ parser: this }, i), l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type))) {
        s += l || "";
        continue;
      }
      switch (i.type) {
        case "escape": {
          s += t.text(i.text);
          break;
        }
        case "html": {
          s += t.html(i.text);
          break;
        }
        case "link": {
          s += t.link(i.href, i.title, this.parseInline(i.tokens, t));
          break;
        }
        case "image": {
          s += t.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          s += t.strong(this.parseInline(i.tokens, t));
          break;
        }
        case "em": {
          s += t.em(this.parseInline(i.tokens, t));
          break;
        }
        case "codespan": {
          s += t.codespan(i.text);
          break;
        }
        case "br": {
          s += t.br();
          break;
        }
        case "del": {
          s += t.del(this.parseInline(i.tokens, t));
          break;
        }
        case "text": {
          s += t.text(i.text);
          break;
        }
        default: {
          const o = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) {
            console.error(o);
            return;
          } else
            throw new Error(o);
        }
      }
    }
    return s;
  }
}
class ze {
  constructor(e) {
    this.options = e || ae;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
}
F(ze, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess"
]));
var Se, Qe, Oe, Ut;
class Rs {
  constructor(...e) {
    Ue(this, Se);
    Ue(this, Oe);
    F(this, "defaults", Ke());
    F(this, "options", this.setOptions);
    F(this, "parse", Ae(this, Se, Qe).call(this, X.lex, se.parse));
    F(this, "parseInline", Ae(this, Se, Qe).call(this, X.lexInline, se.parseInline));
    F(this, "Parser", se);
    F(this, "parser", se.parse);
    F(this, "Renderer", Be);
    F(this, "TextRenderer", Ve);
    F(this, "Lexer", X);
    F(this, "lexer", X.lex);
    F(this, "Tokenizer", je);
    F(this, "Slugger", Ze);
    F(this, "Hooks", ze);
    this.use(...e);
  }
  walkTokens(e, t) {
    let s = [];
    for (const n of e)
      switch (s = s.concat(t.call(this, n)), n.type) {
        case "table": {
          for (const i of n.header)
            s = s.concat(this.walkTokens(i.tokens, t));
          for (const i of n.rows)
            for (const l of i)
              s = s.concat(this.walkTokens(l.tokens, t));
          break;
        }
        case "list": {
          s = s.concat(this.walkTokens(n.items, t));
          break;
        }
        default:
          this.defaults.extensions && this.defaults.extensions.childTokens && this.defaults.extensions.childTokens[n.type] ? this.defaults.extensions.childTokens[n.type].forEach((i) => {
            s = s.concat(this.walkTokens(n[i], t));
          }) : n.tokens && (s = s.concat(this.walkTokens(n.tokens, t)));
      }
    return s;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((s) => {
      const n = { ...s };
      if (n.async = this.defaults.async || n.async || !1, s.extensions && (s.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if (i.renderer) {
          const l = t.renderers[i.name];
          l ? t.renderers[i.name] = function(...a) {
            let o = i.renderer.apply(this, a);
            return o === !1 && (o = l.apply(this, a)), o;
          } : t.renderers[i.name] = i.renderer;
        }
        if (i.tokenizer) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          t[i.level] ? t[i.level].unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), n.extensions = t), s.renderer) {
        const i = this.defaults.renderer || new Be(this.defaults);
        for (const l in s.renderer) {
          const a = i[l];
          i[l] = (...o) => {
            let c = s.renderer[l].apply(i, o);
            return c === !1 && (c = a.apply(i, o)), c;
          };
        }
        n.renderer = i;
      }
      if (s.tokenizer) {
        const i = this.defaults.tokenizer || new je(this.defaults);
        for (const l in s.tokenizer) {
          const a = i[l];
          i[l] = (...o) => {
            let c = s.tokenizer[l].apply(i, o);
            return c === !1 && (c = a.apply(i, o)), c;
          };
        }
        n.tokenizer = i;
      }
      if (s.hooks) {
        const i = this.defaults.hooks || new ze();
        for (const l in s.hooks) {
          const a = i[l];
          ze.passThroughHooks.has(l) ? i[l] = (o) => {
            if (this.defaults.async)
              return Promise.resolve(s.hooks[l].call(i, o)).then((u) => a.call(i, u));
            const c = s.hooks[l].call(i, o);
            return a.call(i, c);
          } : i[l] = (...o) => {
            let c = s.hooks[l].apply(i, o);
            return c === !1 && (c = a.apply(i, o)), c;
          };
        }
        n.hooks = i;
      }
      if (s.walkTokens) {
        const i = this.defaults.walkTokens;
        n.walkTokens = function(l) {
          let a = [];
          return a.push(s.walkTokens.call(this, l)), i && (a = a.concat(i.call(this, l))), a;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
}
Se = new WeakSet(), Qe = function(e, t) {
  return (s, n, i) => {
    typeof n == "function" && (i = n, n = null);
    const l = { ...n };
    n = { ...this.defaults, ...l };
    const a = Ae(this, Oe, Ut).call(this, n.silent, n.async, i);
    if (typeof s > "u" || s === null)
      return a(new Error("marked(): input parameter is undefined or null"));
    if (typeof s != "string")
      return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
    if (zs(n, i), n.hooks && (n.hooks.options = n), i) {
      const o = n.highlight;
      let c;
      try {
        n.hooks && (s = n.hooks.preprocess(s)), c = e(s, n);
      } catch (f) {
        return a(f);
      }
      const u = (f) => {
        let d;
        if (!f)
          try {
            n.walkTokens && this.walkTokens(c, n.walkTokens), d = t(c, n), n.hooks && (d = n.hooks.postprocess(d));
          } catch (k) {
            f = k;
          }
        return n.highlight = o, f ? a(f) : i(null, d);
      };
      if (!o || o.length < 3 || (delete n.highlight, !c.length))
        return u();
      let h = 0;
      this.walkTokens(c, (f) => {
        f.type === "code" && (h++, setTimeout(() => {
          o(f.text, f.lang, (d, k) => {
            if (d)
              return u(d);
            k != null && k !== f.text && (f.text = k, f.escaped = !0), h--, h === 0 && u();
          });
        }, 0));
      }), h === 0 && u();
      return;
    }
    if (n.async)
      return Promise.resolve(n.hooks ? n.hooks.preprocess(s) : s).then((o) => e(o, n)).then((o) => n.walkTokens ? Promise.all(this.walkTokens(o, n.walkTokens)).then(() => o) : o).then((o) => t(o, n)).then((o) => n.hooks ? n.hooks.postprocess(o) : o).catch(a);
    try {
      n.hooks && (s = n.hooks.preprocess(s));
      const o = e(s, n);
      n.walkTokens && this.walkTokens(o, n.walkTokens);
      let c = t(o, n);
      return n.hooks && (c = n.hooks.postprocess(c)), c;
    } catch (o) {
      return a(o);
    }
  };
}, Oe = new WeakSet(), Ut = function(e, t, s) {
  return (n) => {
    if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const i = "<p>An error occurred:</p><pre>" + Q(n.message + "", !0) + "</pre>";
      if (t)
        return Promise.resolve(i);
      if (s) {
        s(null, i);
        return;
      }
      return i;
    }
    if (t)
      return Promise.reject(n);
    if (s) {
      s(n);
      return;
    }
    throw n;
  };
};
const fe = new Rs(ae);
function L(r, e, t) {
  return fe.parse(r, e, t);
}
L.options = L.setOptions = function(r) {
  return fe.setOptions(r), L.defaults = fe.defaults, Bt(L.defaults), L;
};
L.getDefaults = Ke;
L.defaults = ae;
L.use = function(...r) {
  return fe.use(...r), L.defaults = fe.defaults, Bt(L.defaults), L;
};
L.walkTokens = function(r, e) {
  return fe.walkTokens(r, e);
};
L.parseInline = fe.parseInline;
L.Parser = se;
L.parser = se.parse;
L.Renderer = Be;
L.TextRenderer = Ve;
L.Lexer = X;
L.lexer = X.lex;
L.Tokenizer = je;
L.Slugger = Ze;
L.Hooks = ze;
L.parse = L;
L.options;
L.setOptions;
L.use;
L.walkTokens;
L.parseInline;
se.parse;
X.lex;
const Ft = {};
function As(r) {
  let e;
  return {
    c() {
      e = oe(
        /*raw*/
        r[1]
      );
    },
    m(t, s) {
      b(t, e, s);
    },
    p(t, s) {
      s & /*raw*/
      2 && we(
        e,
        /*raw*/
        t[1]
      );
    },
    i: A,
    o: A,
    d(t) {
      t && m(e);
    }
  };
}
function Is(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[5].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = y("h6"), n && n.c(), w(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, l) {
      n && n.p && (!t || l & /*$$scope*/
      16) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[4],
        t ? O(
          s,
          /*$$scope*/
          i[4],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[4]
        ),
        null
      ), (!t || l & /*id*/
      4) && w(
        e,
        "id",
        /*id*/
        i[2]
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function qs(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[5].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = y("h5"), n && n.c(), w(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, l) {
      n && n.p && (!t || l & /*$$scope*/
      16) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[4],
        t ? O(
          s,
          /*$$scope*/
          i[4],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[4]
        ),
        null
      ), (!t || l & /*id*/
      4) && w(
        e,
        "id",
        /*id*/
        i[2]
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function Ms(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[5].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = y("h4"), n && n.c(), w(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, l) {
      n && n.p && (!t || l & /*$$scope*/
      16) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[4],
        t ? O(
          s,
          /*$$scope*/
          i[4],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[4]
        ),
        null
      ), (!t || l & /*id*/
      4) && w(
        e,
        "id",
        /*id*/
        i[2]
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function Cs(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[5].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = y("h3"), n && n.c(), w(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, l) {
      n && n.p && (!t || l & /*$$scope*/
      16) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[4],
        t ? O(
          s,
          /*$$scope*/
          i[4],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[4]
        ),
        null
      ), (!t || l & /*id*/
      4) && w(
        e,
        "id",
        /*id*/
        i[2]
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function Ls(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[5].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = y("h2"), n && n.c(), w(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, l) {
      n && n.p && (!t || l & /*$$scope*/
      16) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[4],
        t ? O(
          s,
          /*$$scope*/
          i[4],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[4]
        ),
        null
      ), (!t || l & /*id*/
      4) && w(
        e,
        "id",
        /*id*/
        i[2]
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function Es(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[5].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = y("h1"), n && n.c(), w(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, l) {
      n && n.p && (!t || l & /*$$scope*/
      16) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[4],
        t ? O(
          s,
          /*$$scope*/
          i[4],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[4]
        ),
        null
      ), (!t || l & /*id*/
      4) && w(
        e,
        "id",
        /*id*/
        i[2]
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function Ns(r) {
  let e, t, s, n;
  const i = [
    Es,
    Ls,
    Cs,
    Ms,
    qs,
    Is,
    As
  ], l = [];
  function a(o, c) {
    return (
      /*depth*/
      o[0] === 1 ? 0 : (
        /*depth*/
        o[0] === 2 ? 1 : (
          /*depth*/
          o[0] === 3 ? 2 : (
            /*depth*/
            o[0] === 4 ? 3 : (
              /*depth*/
              o[0] === 5 ? 4 : (
                /*depth*/
                o[0] === 6 ? 5 : 6
              )
            )
          )
        )
      )
    );
  }
  return e = a(r), t = l[e] = i[e](r), {
    c() {
      t.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), n = !0;
    },
    p(o, [c]) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), t = l[e], t ? t.p(o, c) : (t = l[e] = i[e](o), t.c()), p(t, 1), t.m(s.parentNode, s));
    },
    i(o) {
      n || (p(t), n = !0);
    },
    o(o) {
      g(t), n = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function Ps(r, e, t) {
  let s, { $$slots: n = {}, $$scope: i } = e, { depth: l } = e, { raw: a } = e, { text: o } = e;
  const { slug: c, getOptions: u } = pn(Ft), h = u();
  return r.$$set = (f) => {
    "depth" in f && t(0, l = f.depth), "raw" in f && t(1, a = f.raw), "text" in f && t(3, o = f.text), "$$scope" in f && t(4, i = f.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty & /*text*/
    8 && t(2, s = h.headerIds ? h.headerPrefix + c(o) : void 0);
  }, [l, a, s, o, i, n];
}
class js extends M {
  constructor(e) {
    super(), q(this, e, Ps, Ns, I, { depth: 0, raw: 1, text: 3 });
  }
}
function Bs(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[1].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("p"), n && n.c();
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, [l]) {
      n && n.p && (!t || l & /*$$scope*/
      1) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[0],
        t ? O(
          s,
          /*$$scope*/
          i[0],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[0]
        ),
        null
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function Os(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return r.$$set = (i) => {
    "$$scope" in i && t(0, n = i.$$scope);
  }, [n, s];
}
class Ds extends M {
  constructor(e) {
    super(), q(this, e, Os, Bs, I, {});
  }
}
function Zs(r) {
  let e;
  const t = (
    /*#slots*/
    r[3].default
  ), s = B(
    t,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(n, i) {
      s && s.m(n, i), e = !0;
    },
    p(n, [i]) {
      s && s.p && (!e || i & /*$$scope*/
      4) && D(
        s,
        t,
        n,
        /*$$scope*/
        n[2],
        e ? O(
          t,
          /*$$scope*/
          n[2],
          i,
          null
        ) : Z(
          /*$$scope*/
          n[2]
        ),
        null
      );
    },
    i(n) {
      e || (p(s, n), e = !0);
    },
    o(n) {
      g(s, n), e = !1;
    },
    d(n) {
      s && s.d(n);
    }
  };
}
function Us(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e, { text: i } = e, { raw: l } = e;
  return r.$$set = (a) => {
    "text" in a && t(0, i = a.text), "raw" in a && t(1, l = a.raw), "$$scope" in a && t(2, n = a.$$scope);
  }, [i, l, n, s];
}
class Fs extends M {
  constructor(e) {
    super(), q(this, e, Us, Zs, I, { text: 0, raw: 1 });
  }
}
function Hs(r) {
  let e, t;
  return {
    c() {
      e = y("img"), nt(e.src, t = /*href*/
      r[0]) || w(e, "src", t), w(
        e,
        "title",
        /*title*/
        r[1]
      ), w(
        e,
        "alt",
        /*text*/
        r[2]
      );
    },
    m(s, n) {
      b(s, e, n);
    },
    p(s, [n]) {
      n & /*href*/
      1 && !nt(e.src, t = /*href*/
      s[0]) && w(e, "src", t), n & /*title*/
      2 && w(
        e,
        "title",
        /*title*/
        s[1]
      ), n & /*text*/
      4 && w(
        e,
        "alt",
        /*text*/
        s[2]
      );
    },
    i: A,
    o: A,
    d(s) {
      s && m(e);
    }
  };
}
function Qs(r, e, t) {
  let { href: s = "" } = e, { title: n = void 0 } = e, { text: i = "" } = e;
  return r.$$set = (l) => {
    "href" in l && t(0, s = l.href), "title" in l && t(1, n = l.title), "text" in l && t(2, i = l.text);
  }, [s, n, i];
}
class Ws extends M {
  constructor(e) {
    super(), q(this, e, Qs, Hs, I, { href: 0, title: 1, text: 2 });
  }
}
function Gs(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[3].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = y("a"), n && n.c(), w(
        e,
        "href",
        /*href*/
        r[0]
      ), w(
        e,
        "title",
        /*title*/
        r[1]
      );
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, [l]) {
      n && n.p && (!t || l & /*$$scope*/
      4) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[2],
        t ? O(
          s,
          /*$$scope*/
          i[2],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[2]
        ),
        null
      ), (!t || l & /*href*/
      1) && w(
        e,
        "href",
        /*href*/
        i[0]
      ), (!t || l & /*title*/
      2) && w(
        e,
        "title",
        /*title*/
        i[1]
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function Js(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e, { href: i = "" } = e, { title: l = void 0 } = e;
  return r.$$set = (a) => {
    "href" in a && t(0, i = a.href), "title" in a && t(1, l = a.title), "$$scope" in a && t(2, n = a.$$scope);
  }, [i, l, n, s];
}
class Xs extends M {
  constructor(e) {
    super(), q(this, e, Js, Gs, I, { href: 0, title: 1 });
  }
}
function Ys(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[1].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("em"), n && n.c();
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, [l]) {
      n && n.p && (!t || l & /*$$scope*/
      1) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[0],
        t ? O(
          s,
          /*$$scope*/
          i[0],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[0]
        ),
        null
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function Ks(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return r.$$set = (i) => {
    "$$scope" in i && t(0, n = i.$$scope);
  }, [n, s];
}
class Vs extends M {
  constructor(e) {
    super(), q(this, e, Ks, Ys, I, {});
  }
}
function ei(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[1].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("del"), n && n.c();
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, [l]) {
      n && n.p && (!t || l & /*$$scope*/
      1) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[0],
        t ? O(
          s,
          /*$$scope*/
          i[0],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[0]
        ),
        null
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function ti(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return r.$$set = (i) => {
    "$$scope" in i && t(0, n = i.$$scope);
  }, [n, s];
}
class ni extends M {
  constructor(e) {
    super(), q(this, e, ti, ei, I, {});
  }
}
function si(r) {
  let e, t = (
    /*raw*/
    r[0].replace(/`/g, "") + ""
  ), s;
  return {
    c() {
      e = y("code"), s = oe(t);
    },
    m(n, i) {
      b(n, e, i), R(e, s);
    },
    p(n, [i]) {
      i & /*raw*/
      1 && t !== (t = /*raw*/
      n[0].replace(/`/g, "") + "") && we(s, t);
    },
    i: A,
    o: A,
    d(n) {
      n && m(e);
    }
  };
}
function ii(r, e, t) {
  let { raw: s } = e;
  return r.$$set = (n) => {
    "raw" in n && t(0, s = n.raw);
  }, [s];
}
class ri extends M {
  constructor(e) {
    super(), q(this, e, ii, si, I, { raw: 0 });
  }
}
function li(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[1].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("strong"), n && n.c();
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, [l]) {
      n && n.p && (!t || l & /*$$scope*/
      1) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[0],
        t ? O(
          s,
          /*$$scope*/
          i[0],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[0]
        ),
        null
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function oi(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return r.$$set = (i) => {
    "$$scope" in i && t(0, n = i.$$scope);
  }, [n, s];
}
class ai extends M {
  constructor(e) {
    super(), q(this, e, oi, li, I, {});
  }
}
function ci(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[1].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("table"), n && n.c();
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, [l]) {
      n && n.p && (!t || l & /*$$scope*/
      1) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[0],
        t ? O(
          s,
          /*$$scope*/
          i[0],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[0]
        ),
        null
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function ui(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return r.$$set = (i) => {
    "$$scope" in i && t(0, n = i.$$scope);
  }, [n, s];
}
class fi extends M {
  constructor(e) {
    super(), q(this, e, ui, ci, I, {});
  }
}
function hi(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[1].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("thead"), n && n.c();
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, [l]) {
      n && n.p && (!t || l & /*$$scope*/
      1) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[0],
        t ? O(
          s,
          /*$$scope*/
          i[0],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[0]
        ),
        null
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function pi(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return r.$$set = (i) => {
    "$$scope" in i && t(0, n = i.$$scope);
  }, [n, s];
}
class di extends M {
  constructor(e) {
    super(), q(this, e, pi, hi, I, {});
  }
}
function gi(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[1].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("tbody"), n && n.c();
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, [l]) {
      n && n.p && (!t || l & /*$$scope*/
      1) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[0],
        t ? O(
          s,
          /*$$scope*/
          i[0],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[0]
        ),
        null
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function mi(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return r.$$set = (i) => {
    "$$scope" in i && t(0, n = i.$$scope);
  }, [n, s];
}
class _i extends M {
  constructor(e) {
    super(), q(this, e, mi, gi, I, {});
  }
}
function bi(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[1].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("tr"), n && n.c();
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, [l]) {
      n && n.p && (!t || l & /*$$scope*/
      1) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[0],
        t ? O(
          s,
          /*$$scope*/
          i[0],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[0]
        ),
        null
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function ki(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return r.$$set = (i) => {
    "$$scope" in i && t(0, n = i.$$scope);
  }, [n, s];
}
class $i extends M {
  constructor(e) {
    super(), q(this, e, ki, bi, I, {});
  }
}
function wi(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[3].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = y("td"), n && n.c(), w(
        e,
        "align",
        /*align*/
        r[1]
      );
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, l) {
      n && n.p && (!t || l & /*$$scope*/
      4) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[2],
        t ? O(
          s,
          /*$$scope*/
          i[2],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[2]
        ),
        null
      ), (!t || l & /*align*/
      2) && w(
        e,
        "align",
        /*align*/
        i[1]
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function yi(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[3].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = y("th"), n && n.c(), w(
        e,
        "align",
        /*align*/
        r[1]
      );
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, l) {
      n && n.p && (!t || l & /*$$scope*/
      4) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[2],
        t ? O(
          s,
          /*$$scope*/
          i[2],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[2]
        ),
        null
      ), (!t || l & /*align*/
      2) && w(
        e,
        "align",
        /*align*/
        i[1]
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function vi(r) {
  let e, t, s, n;
  const i = [yi, wi], l = [];
  function a(o, c) {
    return (
      /*header*/
      o[0] ? 0 : 1
    );
  }
  return e = a(r), t = l[e] = i[e](r), {
    c() {
      t.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), n = !0;
    },
    p(o, [c]) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), t = l[e], t ? t.p(o, c) : (t = l[e] = i[e](o), t.c()), p(t, 1), t.m(s.parentNode, s));
    },
    i(o) {
      n || (p(t), n = !0);
    },
    o(o) {
      g(t), n = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function xi(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e, { header: i } = e, { align: l } = e;
  return r.$$set = (a) => {
    "header" in a && t(0, i = a.header), "align" in a && t(1, l = a.align), "$$scope" in a && t(2, n = a.$$scope);
  }, [i, l, n, s];
}
class zi extends M {
  constructor(e) {
    super(), q(this, e, xi, vi, I, { header: 0, align: 1 });
  }
}
function Ti(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[3].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = y("ul"), n && n.c();
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, l) {
      n && n.p && (!t || l & /*$$scope*/
      4) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[2],
        t ? O(
          s,
          /*$$scope*/
          i[2],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[2]
        ),
        null
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function Si(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[3].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = y("ol"), n && n.c(), w(
        e,
        "start",
        /*start*/
        r[1]
      );
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, l) {
      n && n.p && (!t || l & /*$$scope*/
      4) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[2],
        t ? O(
          s,
          /*$$scope*/
          i[2],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[2]
        ),
        null
      ), (!t || l & /*start*/
      2) && w(
        e,
        "start",
        /*start*/
        i[1]
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function Ri(r) {
  let e, t, s, n;
  const i = [Si, Ti], l = [];
  function a(o, c) {
    return (
      /*ordered*/
      o[0] ? 0 : 1
    );
  }
  return e = a(r), t = l[e] = i[e](r), {
    c() {
      t.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), n = !0;
    },
    p(o, [c]) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), t = l[e], t ? t.p(o, c) : (t = l[e] = i[e](o), t.c()), p(t, 1), t.m(s.parentNode, s));
    },
    i(o) {
      n || (p(t), n = !0);
    },
    o(o) {
      g(t), n = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function Ai(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e, { ordered: i } = e, { start: l } = e;
  return r.$$set = (a) => {
    "ordered" in a && t(0, i = a.ordered), "start" in a && t(1, l = a.start), "$$scope" in a && t(2, n = a.$$scope);
  }, [i, l, n, s];
}
class Ii extends M {
  constructor(e) {
    super(), q(this, e, Ai, Ri, I, { ordered: 0, start: 1 });
  }
}
function qi(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[1].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("li"), n && n.c();
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, [l]) {
      n && n.p && (!t || l & /*$$scope*/
      1) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[0],
        t ? O(
          s,
          /*$$scope*/
          i[0],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[0]
        ),
        null
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function Mi(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return r.$$set = (i) => {
    "$$scope" in i && t(0, n = i.$$scope);
  }, [n, s];
}
class Ci extends M {
  constructor(e) {
    super(), q(this, e, Mi, qi, I, {});
  }
}
function Li(r) {
  let e;
  return {
    c() {
      e = y("hr");
    },
    m(t, s) {
      b(t, e, s);
    },
    p: A,
    i: A,
    o: A,
    d(t) {
      t && m(e);
    }
  };
}
class Ei extends M {
  constructor(e) {
    super(), q(this, e, null, Li, I, {});
  }
}
function Ni(r) {
  let e, t;
  return {
    c() {
      e = new on(!1), t = P(), e.a = t;
    },
    m(s, n) {
      e.m(
        /*text*/
        r[0],
        s,
        n
      ), b(s, t, n);
    },
    p(s, [n]) {
      n & /*text*/
      1 && e.p(
        /*text*/
        s[0]
      );
    },
    i: A,
    o: A,
    d(s) {
      s && (m(t), e.d());
    }
  };
}
function Pi(r, e, t) {
  let { text: s } = e;
  return r.$$set = (n) => {
    "text" in n && t(0, s = n.text);
  }, [s];
}
class ji extends M {
  constructor(e) {
    super(), q(this, e, Pi, Ni, I, { text: 0 });
  }
}
function Bi(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[1].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("blockquote"), n && n.c();
    },
    m(i, l) {
      b(i, e, l), n && n.m(e, null), t = !0;
    },
    p(i, [l]) {
      n && n.p && (!t || l & /*$$scope*/
      1) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[0],
        t ? O(
          s,
          /*$$scope*/
          i[0],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[0]
        ),
        null
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function Oi(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return r.$$set = (i) => {
    "$$scope" in i && t(0, n = i.$$scope);
  }, [n, s];
}
class Di extends M {
  constructor(e) {
    super(), q(this, e, Oi, Bi, I, {});
  }
}
function Zi(r) {
  let e, t, s;
  return {
    c() {
      e = y("pre"), t = y("code"), s = oe(
        /*text*/
        r[1]
      ), w(
        e,
        "class",
        /*lang*/
        r[0]
      );
    },
    m(n, i) {
      b(n, e, i), R(e, t), R(t, s);
    },
    p(n, [i]) {
      i & /*text*/
      2 && we(
        s,
        /*text*/
        n[1]
      ), i & /*lang*/
      1 && w(
        e,
        "class",
        /*lang*/
        n[0]
      );
    },
    i: A,
    o: A,
    d(n) {
      n && m(e);
    }
  };
}
function Ui(r, e, t) {
  let { lang: s } = e, { text: n } = e;
  return r.$$set = (i) => {
    "lang" in i && t(0, s = i.lang), "text" in i && t(1, n = i.text);
  }, [s, n];
}
class Fi extends M {
  constructor(e) {
    super(), q(this, e, Ui, Zi, I, { lang: 0, text: 1 });
  }
}
function Hi(r) {
  let e, t;
  const s = (
    /*#slots*/
    r[1].default
  ), n = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("br"), n && n.c();
    },
    m(i, l) {
      b(i, e, l), n && n.m(i, l), t = !0;
    },
    p(i, [l]) {
      n && n.p && (!t || l & /*$$scope*/
      1) && D(
        n,
        s,
        i,
        /*$$scope*/
        i[0],
        t ? O(
          s,
          /*$$scope*/
          i[0],
          l,
          null
        ) : Z(
          /*$$scope*/
          i[0]
        ),
        null
      );
    },
    i(i) {
      t || (p(n, i), t = !0);
    },
    o(i) {
      g(n, i), t = !1;
    },
    d(i) {
      i && m(e), n && n.d(i);
    }
  };
}
function Qi(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e;
  return r.$$set = (i) => {
    "$$scope" in i && t(0, n = i.$$scope);
  }, [n, s];
}
class Wi extends M {
  constructor(e) {
    super(), q(this, e, Qi, Hi, I, {});
  }
}
const Gi = {
  heading: js,
  paragraph: Ds,
  text: Fs,
  image: Ws,
  link: Xs,
  em: Vs,
  strong: ai,
  codespan: ri,
  del: ni,
  table: fi,
  tablehead: di,
  tablebody: _i,
  tablerow: $i,
  tablecell: zi,
  list: Ii,
  orderedlistitem: null,
  unorderedlistitem: null,
  listitem: Ci,
  hr: Ei,
  html: ji,
  blockquote: Di,
  code: Fi,
  br: Wi
}, Ji = {
  baseUrl: null,
  breaks: !1,
  gfm: !0,
  headerIds: !0,
  headerPrefix: "",
  highlight: null,
  langPrefix: "language-",
  mangle: !0,
  pedantic: !1,
  renderer: null,
  sanitize: !1,
  sanitizer: null,
  silent: !1,
  smartLists: !1,
  smartypants: !1,
  tokenizer: null,
  xhtml: !1
};
function Xi(r) {
  let e, t;
  return e = new ge({
    props: {
      tokens: (
        /*tokens*/
        r[0]
      ),
      renderers: (
        /*combinedRenderers*/
        r[1]
      )
    }
  }), {
    c() {
      T(e.$$.fragment);
    },
    m(s, n) {
      x(e, s, n), t = !0;
    },
    p(s, [n]) {
      const i = {};
      n & /*tokens*/
      1 && (i.tokens = /*tokens*/
      s[0]), n & /*combinedRenderers*/
      2 && (i.renderers = /*combinedRenderers*/
      s[1]), e.$set(i);
    },
    i(s) {
      t || (p(e.$$.fragment, s), t = !0);
    },
    o(s) {
      g(e.$$.fragment, s), t = !1;
    },
    d(s) {
      z(e, s);
    }
  };
}
function Yi(r, e, t) {
  let s, n, i, l, { source: a = [] } = e, { renderers: o = {} } = e, { options: c = {} } = e, { isInline: u = !1 } = e;
  const h = Ye();
  let f, d, k;
  return hn(Ft, {
    slug: (S) => n ? n.slug(S) : "",
    getOptions: () => i
  }), Xe(() => {
    t(7, k = !0);
  }), r.$$set = (S) => {
    "source" in S && t(2, a = S.source), "renderers" in S && t(3, o = S.renderers), "options" in S && t(4, c = S.options), "isInline" in S && t(5, u = S.isInline);
  }, r.$$.update = () => {
    r.$$.dirty & /*source*/
    4 && t(8, s = Array.isArray(a)), r.$$.dirty & /*source*/
    4 && (n = a ? new Ze() : void 0), r.$$.dirty & /*options*/
    16 && t(9, i = { ...Ji, ...c }), r.$$.dirty & /*preprocessed, source, combinedOptions, isInline, lexer, tokens*/
    869 && (s ? t(0, f = a) : (t(6, d = new X(i)), t(0, f = u ? d.inlineTokens(a) : d.lex(a)), h("parsed", { tokens: f }))), r.$$.dirty & /*renderers*/
    8 && t(1, l = { ...Gi, ...o }), r.$$.dirty & /*mounted, preprocessed, tokens*/
    385 && k && !s && h("parsed", { tokens: f });
  }, [
    f,
    l,
    a,
    o,
    c,
    u,
    d,
    k,
    s,
    i
  ];
}
class Ki extends M {
  constructor(e) {
    super(), q(this, e, Yi, Xi, I, {
      source: 2,
      renderers: 3,
      options: 4,
      isInline: 5
    });
  }
}
function Ht(r) {
  const e = r - 1;
  return e * e * e + 1;
}
function Vi(r, { delay: e = 0, duration: t = 400, easing: s = Ht, axis: n = "y" } = {}) {
  const i = getComputedStyle(r), l = +i.opacity, a = n === "y" ? "height" : "width", o = parseFloat(i[a]), c = n === "y" ? ["top", "bottom"] : ["left", "right"], u = c.map(
    ($) => `${$[0].toUpperCase()}${$.slice(1)}`
  ), h = parseFloat(i[`padding${u[0]}`]), f = parseFloat(i[`padding${u[1]}`]), d = parseFloat(i[`margin${u[0]}`]), k = parseFloat(i[`margin${u[1]}`]), S = parseFloat(
    i[`border${u[0]}Width`]
  ), U = parseFloat(
    i[`border${u[1]}Width`]
  );
  return {
    delay: e,
    duration: t,
    easing: s,
    css: ($) => `overflow: hidden;opacity: ${Math.min($ * 20, 1) * l};${a}: ${$ * o}px;padding-${c[0]}: ${$ * h}px;padding-${c[1]}: ${$ * f}px;margin-${c[0]}: ${$ * d}px;margin-${c[1]}: ${$ * k}px;border-${c[0]}-width: ${$ * S}px;border-${c[1]}-width: ${$ * U}px;`
  };
}
function er(r, { delay: e = 0, duration: t = 400, easing: s = Ht, start: n = 0, opacity: i = 0 } = {}) {
  const l = getComputedStyle(r), a = +l.opacity, o = l.transform === "none" ? "" : l.transform, c = 1 - n, u = a * (1 - i);
  return {
    delay: e,
    duration: t,
    easing: s,
    css: (h, f) => `
			transform: ${o} scale(${1 - c * f});
			opacity: ${a - u * f}
		`
  };
}
function tr(r) {
  pe(r, "svelte-dttnzg", '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");.container.svelte-dttnzg{color:black;font-family:"Rethink Sans", sans-serif;display:grid;grid-template-rows:1rem [title-start] 1rem [title-end] 0.5rem [content-start] auto [content-end] 0.5rem;grid-template-columns:2rem [title-start content-start] 1fr [content-end title-end] 2rem;align-items:start;justify-items:left;background-color:lightgray}.round-bottom.svelte-dttnzg{border-bottom-left-radius:10px;border-bottom-right-radius:10px}.title.svelte-dttnzg{grid-area:title;width:100%;font-size:1.1rem;font-weight:bold;display:grid;align-items:center;justify-items:stretch}.content.svelte-dttnzg{grid-area:content;font-size:1rem}.stamp.svelte-dttnzg{font-size:0.75rem;text-align:right}');
}
function zt(r) {
  let e, t;
  return {
    c() {
      e = y("div"), t = oe(
        /*timestamp*/
        r[2]
      ), w(e, "class", "stamp svelte-dttnzg"), ne(e, "grid-row", 1);
    },
    m(s, n) {
      b(s, e, n), R(e, t);
    },
    p(s, n) {
      n & /*timestamp*/
      4 && we(
        t,
        /*timestamp*/
        s[2]
      );
    },
    d(s) {
      s && m(e);
    }
  };
}
function nr(r) {
  let e, t, s, n, i, l, a, o, c, u, h = (
    /*timestamp*/
    r[2] && zt(r)
  );
  return o = new Ki({ props: { source: (
    /*content*/
    r[0]
  ) } }), {
    c() {
      e = y("div"), t = y("div"), s = y("div"), n = oe(
        /*name*/
        r[5]
      ), i = W(), h && h.c(), l = W(), a = y("div"), T(o.$$.fragment), ne(s, "grid-row", 1), w(t, "class", "title svelte-dttnzg"), w(a, "class", "content svelte-dttnzg"), w(e, "class", "container svelte-dttnzg"), it(
        e,
        "round-bottom",
        /*isLast*/
        r[3]
      ), ne(
        e,
        "background-color",
        /*role*/
        r[1] === "assistant" ? "Gainsboro" : "white"
      );
    },
    m(f, d) {
      b(f, e, d), R(e, t), R(t, s), R(s, n), R(t, i), h && h.m(t, null), R(e, l), R(e, a), x(o, a, null), r[8](e), u = !0;
    },
    p(f, [d]) {
      (!u || d & /*name*/
      32) && we(
        n,
        /*name*/
        f[5]
      ), /*timestamp*/
      f[2] ? h ? h.p(f, d) : (h = zt(f), h.c(), h.m(t, null)) : h && (h.d(1), h = null);
      const k = {};
      d & /*content*/
      1 && (k.source = /*content*/
      f[0]), o.$set(k), (!u || d & /*isLast*/
      8) && it(
        e,
        "round-bottom",
        /*isLast*/
        f[3]
      ), d & /*role*/
      2 && ne(
        e,
        "background-color",
        /*role*/
        f[1] === "assistant" ? "Gainsboro" : "white"
      );
    },
    i(f) {
      u || (p(o.$$.fragment, f), f && (c || ue(() => {
        c = Nt(e, Vi, { duration: 300 }), c.start();
      })), u = !0);
    },
    o(f) {
      g(o.$$.fragment, f), u = !1;
    },
    d(f) {
      f && m(e), h && h.d(), z(o), r[8](null);
    }
  };
}
function sr(r, e, t) {
  let s, n, { role: i } = e, { content: l } = e, { timestamp: a = void 0 } = e, { isLast: o = !1 } = e;
  const c = (f) => t(0, l = f), u = (f) => t(0, l += f);
  function h(f) {
    le[f ? "unshift" : "push"](() => {
      n = f, t(4, n);
    });
  }
  return r.$$set = (f) => {
    "role" in f && t(1, i = f.role), "content" in f && t(0, l = f.content), "timestamp" in f && t(2, a = f.timestamp), "isLast" in f && t(3, o = f.isLast);
  }, r.$$.update = () => {
    r.$$.dirty & /*role*/
    2 && t(5, s = i === "assistant" ? "Assistant" : "You");
  }, [
    l,
    i,
    a,
    o,
    n,
    s,
    c,
    u,
    h
  ];
}
class Qt extends M {
  constructor(e) {
    super(), q(
      this,
      e,
      sr,
      nr,
      I,
      {
        role: 1,
        content: 0,
        timestamp: 2,
        isLast: 3,
        update: 6,
        append: 7
      },
      tr
    );
  }
  get update() {
    return this.$$.ctx[6];
  }
  get append() {
    return this.$$.ctx[7];
  }
}
function ir(r) {
  pe(r, "svelte-1dj2ob3", ".container.svelte-1dj2ob3{max-height:100%;overflow-y:scroll}");
}
function Tt(r, e, t) {
  const s = r.slice();
  return s[14] = e[t].role, s[15] = e[t].content, s[16] = e[t].timestamp, s[18] = t, s;
}
function rr(r) {
  let e, t;
  return e = new Qt({
    props: {
      role: (
        /*role*/
        r[14]
      ),
      content: (
        /*content*/
        r[15]
      ),
      timestamp: (
        /*timestamp*/
        r[16]
      )
    }
  }), {
    c() {
      T(e.$$.fragment);
    },
    m(s, n) {
      x(e, s, n), t = !0;
    },
    p(s, n) {
      const i = {};
      n & /*$messageStore*/
      8 && (i.role = /*role*/
      s[14]), n & /*$messageStore*/
      8 && (i.content = /*content*/
      s[15]), n & /*$messageStore*/
      8 && (i.timestamp = /*timestamp*/
      s[16]), e.$set(i);
    },
    i(s) {
      t || (p(e.$$.fragment, s), t = !0);
    },
    o(s) {
      g(e.$$.fragment, s), t = !1;
    },
    d(s) {
      z(e, s);
    }
  };
}
function lr(r) {
  let e, t, s = {
    role: (
      /*role*/
      r[14]
    ),
    content: (
      /*content*/
      r[15]
    ),
    timestamp: (
      /*timestamp*/
      r[16]
    ),
    isLast: !0
  };
  return e = new Qt({ props: s }), r[10](e), {
    c() {
      T(e.$$.fragment);
    },
    m(n, i) {
      x(e, n, i), t = !0;
    },
    p(n, i) {
      const l = {};
      i & /*$messageStore*/
      8 && (l.role = /*role*/
      n[14]), i & /*$messageStore*/
      8 && (l.content = /*content*/
      n[15]), i & /*$messageStore*/
      8 && (l.timestamp = /*timestamp*/
      n[16]), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      g(e.$$.fragment, n), t = !1;
    },
    d(n) {
      r[10](null), z(e, n);
    }
  };
}
function St(r) {
  let e, t, s, n;
  const i = [lr, rr], l = [];
  function a(o, c) {
    return (
      /*index*/
      o[18] === /*$messageStore*/
      o[3].length - 1 ? 0 : 1
    );
  }
  return e = a(r), t = l[e] = i[e](r), {
    c() {
      t.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), n = !0;
    },
    p(o, c) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), t = l[e], t ? t.p(o, c) : (t = l[e] = i[e](o), t.c()), p(t, 1), t.m(s.parentNode, s));
    },
    i(o) {
      n || (p(t), n = !0);
    },
    o(o) {
      g(t), n = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function or(r) {
  let e, t, s, n, i = G(
    /*$messageStore*/
    r[3]
  ), l = [];
  for (let o = 0; o < i.length; o += 1)
    l[o] = St(Tt(r, i, o));
  const a = (o) => g(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      e = y("div");
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      t = W(), s = y("div"), w(e, "class", "container svelte-1dj2ob3");
    },
    m(o, c) {
      b(o, e, c);
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(e, null);
      R(e, t), R(e, s), r[11](s), r[12](e), n = !0;
    },
    p(o, [c]) {
      if (c & /*$messageStore, lastMessage*/
      9) {
        i = G(
          /*$messageStore*/
          o[3]
        );
        let u;
        for (u = 0; u < i.length; u += 1) {
          const h = Tt(o, i, u);
          l[u] ? (l[u].p(h, c), p(l[u], 1)) : (l[u] = St(h), l[u].c(), p(l[u], 1), l[u].m(e, t));
        }
        for (E(), u = i.length; u < l.length; u += 1)
          a(u);
        N();
      }
    },
    i(o) {
      if (!n) {
        for (let c = 0; c < i.length; c += 1)
          p(l[c]);
        n = !0;
      }
    },
    o(o) {
      l = l.filter(Boolean);
      for (let c = 0; c < l.length; c += 1)
        g(l[c]);
      n = !1;
    },
    d(o) {
      o && m(e), de(l, o), r[11](null), r[12](null);
    }
  };
}
function ar(r, e, t) {
  let s;
  Vt(r, Re, ($) => t(3, s = $));
  let n, i, l;
  const a = () => i.scrollTo(0, l.offsetTop), o = () => s, c = () => s[s.length - 1], u = ($) => (Mn($), a(), $), h = ($) => {
    Cn($), a();
  }, f = ($) => {
    Ln($), a();
  }, d = () => {
    jt(), a();
  };
  function k($) {
    le[$ ? "unshift" : "push"](() => {
      n = $, t(0, n);
    });
  }
  function S($) {
    le[$ ? "unshift" : "push"](() => {
      l = $, t(2, l);
    });
  }
  function U($) {
    le[$ ? "unshift" : "push"](() => {
      i = $, t(1, i);
    });
  }
  return [
    n,
    i,
    l,
    s,
    o,
    c,
    u,
    h,
    f,
    d,
    k,
    S,
    U
  ];
}
class cr extends M {
  constructor(e) {
    super(), q(
      this,
      e,
      ar,
      or,
      I,
      {
        getAll: 4,
        getLast: 5,
        addMessage: 6,
        updateLastMessageContent: 7,
        appendLastMessageContent: 8,
        clearMessages: 9
      },
      ir
    );
  }
  get getAll() {
    return this.$$.ctx[4];
  }
  get getLast() {
    return this.$$.ctx[5];
  }
  get addMessage() {
    return this.$$.ctx[6];
  }
  get updateLastMessageContent() {
    return this.$$.ctx[7];
  }
  get appendLastMessageContent() {
    return this.$$.ctx[8];
  }
  get clearMessages() {
    return this.$$.ctx[9];
  }
}
function ur(r) {
  pe(r, "svelte-ql0rni", `.container.svelte-ql0rni{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;width:400px;max-height:95vh;row-gap:10px;z-index:2000}.row.svelte-ql0rni{border:1px solid #ddd;border-radius:10px;box-shadow:rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #ddd 0 -3px 0 inset}`);
}
function fr(r) {
  let e, t, s, n, i, l, a, o, c, u, h, f;
  n = new Zn({}), n.$on(
    "click",
    /*click_handler*/
    r[5]
  );
  let d = {};
  return a = new cr({ props: d }), r[6](a), u = new jn({}), u.$on(
    "send",
    /*send*/
    r[2]
  ), {
    c() {
      e = y("div"), t = y("div"), s = y("div"), T(n.$$.fragment), i = W(), l = y("div"), T(a.$$.fragment), o = W(), c = y("div"), T(u.$$.fragment), w(t, "class", "row svelte-ql0rni"), w(c, "class", "row svelte-ql0rni"), w(e, "class", "container svelte-ql0rni");
    },
    m(k, S) {
      b(k, e, S), R(e, t), R(t, s), x(n, s, null), R(t, i), R(t, l), x(a, l, null), R(e, o), R(e, c), x(u, c, null), f = !0;
    },
    p(k, [S]) {
      const U = {};
      a.$set(U);
    },
    i(k) {
      f || (p(n.$$.fragment, k), p(a.$$.fragment, k), p(u.$$.fragment, k), k && (h || ue(() => {
        h = Nt(e, er, { duration: 100 }), h.start();
      })), f = !0);
    },
    o(k) {
      g(n.$$.fragment, k), g(a.$$.fragment, k), g(u.$$.fragment, k), f = !1;
    },
    d(k) {
      k && m(e), z(n), r[6](null), z(a), z(u);
    }
  };
}
function hr(r, e, t) {
  let { initialMessage: s } = e, { configuration: n } = e;
  const i = Ye();
  let l;
  const a = async (u) => {
    const h = l.addMessage({
      sender: "Student",
      role: "user",
      content: u.detail.message,
      timestamp: Ne()
    });
    await Pt(h, n), await An(l.getAll(), n, (f) => l.addMessage(f), (f) => l.appendLastMessageContent(f)), u.detail.onResponse();
  };
  Xe(() => {
    s && l.addMessage({
      sender: "Assistant",
      role: "assistant",
      content: s,
      timestamp: Ne()
    });
  });
  const o = () => i("close");
  function c(u) {
    le[u ? "unshift" : "push"](() => {
      l = u, t(0, l);
    });
  }
  return r.$$set = (u) => {
    "initialMessage" in u && t(3, s = u.initialMessage), "configuration" in u && t(4, n = u.configuration);
  }, [
    l,
    i,
    a,
    s,
    n,
    o,
    c
  ];
}
class pr extends M {
  constructor(e) {
    super(), q(this, e, hr, fr, I, { initialMessage: 3, configuration: 4 }, ur);
  }
}
function dr(r) {
  pe(r, "svelte-6ny3hj", "section.svelte-6ny3hj{user-select:none;cursor:move;position:fixed}section.svelte-6ny3hj:focus{outline:none}");
}
function gr(r) {
  let e, t, s, n;
  const i = (
    /*#slots*/
    r[8].default
  ), l = B(
    i,
    r,
    /*$$scope*/
    r[7],
    null
  );
  return {
    c() {
      e = y("section"), l && l.c(), ne(
        e,
        "right",
        /*right*/
        r[0] + "px"
      ), ne(
        e,
        "bottom",
        /*bottom*/
        r[1] + "px"
      ), w(e, "role", "button"), w(e, "tabindex", "0"), w(e, "class", "svelte-6ny3hj");
    },
    m(a, o) {
      b(a, e, o), l && l.m(e, null), t = !0, s || (n = [
        ie(
          window,
          "mouseup",
          /*onMouseUp*/
          r[4]
        ),
        ie(
          window,
          "mousemove",
          /*onMouseMove*/
          r[3]
        ),
        ie(
          e,
          "mousedown",
          /*onMouseDown*/
          r[2]
        )
      ], s = !0);
    },
    p(a, [o]) {
      l && l.p && (!t || o & /*$$scope*/
      128) && D(
        l,
        i,
        a,
        /*$$scope*/
        a[7],
        t ? O(
          i,
          /*$$scope*/
          a[7],
          o,
          null
        ) : Z(
          /*$$scope*/
          a[7]
        ),
        null
      ), (!t || o & /*right*/
      1) && ne(
        e,
        "right",
        /*right*/
        a[0] + "px"
      ), (!t || o & /*bottom*/
      2) && ne(
        e,
        "bottom",
        /*bottom*/
        a[1] + "px"
      );
    },
    i(a) {
      t || (p(l, a), t = !0);
    },
    o(a) {
      g(l, a), t = !1;
    },
    d(a) {
      a && m(e), l && l.d(a), s = !1, he(n);
    }
  };
}
const mr = 2;
function _r(r, e, t) {
  let { $$slots: s = {}, $$scope: n } = e, { right: i = 100 } = e, { bottom: l = 100 } = e, a = !1, o;
  const c = () => Math.sqrt(Math.pow(i - o.left, 2) + Math.pow(l - o.bottom, 2)), u = () => c() >= mr;
  function h() {
    a = !0, o = { left: i, bottom: l };
  }
  function f(k) {
    a && (t(0, i -= k.movementX), t(1, l -= k.movementY));
  }
  function d() {
    a = !1;
  }
  return r.$$set = (k) => {
    "right" in k && t(0, i = k.right), "bottom" in k && t(1, l = k.bottom), "$$scope" in k && t(7, n = k.$$scope);
  }, [
    i,
    l,
    h,
    f,
    d,
    c,
    u,
    n,
    s
  ];
}
class br extends M {
  constructor(e) {
    super(), q(
      this,
      e,
      _r,
      gr,
      I,
      {
        right: 0,
        bottom: 1,
        distance: 5,
        moved: 6
      },
      dr
    );
  }
  get distance() {
    return this.$$.ctx[5];
  }
  get moved() {
    return this.$$.ctx[6];
  }
}
function kr(r) {
  let e, t;
  return e = new zn({}), e.$on(
    "click",
    /*openWindow*/
    r[4]
  ), {
    c() {
      T(e.$$.fragment);
    },
    m(s, n) {
      x(e, s, n), t = !0;
    },
    p: A,
    i(s) {
      t || (p(e.$$.fragment, s), t = !0);
    },
    o(s) {
      g(e.$$.fragment, s), t = !1;
    },
    d(s) {
      z(e, s);
    }
  };
}
function $r(r) {
  let e, t;
  return e = new pr({
    props: {
      initialMessage: (
        /*messageToUser*/
        r[3]
      ),
      configuration: (
        /*configuration*/
        r[0]
      )
    }
  }), e.$on(
    "close",
    /*closeWindow*/
    r[5]
  ), {
    c() {
      T(e.$$.fragment);
    },
    m(s, n) {
      x(e, s, n), t = !0;
    },
    p(s, n) {
      const i = {};
      n & /*messageToUser*/
      8 && (i.initialMessage = /*messageToUser*/
      s[3]), n & /*configuration*/
      1 && (i.configuration = /*configuration*/
      s[0]), e.$set(i);
    },
    i(s) {
      t || (p(e.$$.fragment, s), t = !0);
    },
    o(s) {
      g(e.$$.fragment, s), t = !1;
    },
    d(s) {
      z(e, s);
    }
  };
}
function wr(r) {
  let e, t, s, n;
  const i = [$r, kr], l = [];
  function a(o, c) {
    return (
      /*opened*/
      o[1] ? 0 : 1
    );
  }
  return e = a(r), t = l[e] = i[e](r), {
    c() {
      t.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), n = !0;
    },
    p(o, c) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), t = l[e], t ? t.p(o, c) : (t = l[e] = i[e](o), t.c()), p(t, 1), t.m(s.parentNode, s));
    },
    i(o) {
      n || (p(t), n = !0);
    },
    o(o) {
      g(t), n = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function yr(r) {
  let e, t, s = {
    $$slots: { default: [wr] },
    $$scope: { ctx: r }
  };
  return e = new br({ props: s }), r[6](e), {
    c() {
      T(e.$$.fragment);
    },
    m(n, i) {
      x(e, n, i), t = !0;
    },
    p(n, [i]) {
      const l = {};
      i & /*$$scope, messageToUser, configuration, opened*/
      267 && (l.$$scope = { dirty: i, ctx: n }), e.$set(l);
    },
    i(n) {
      t || (p(e.$$.fragment, n), t = !0);
    },
    o(n) {
      g(e.$$.fragment, n), t = !1;
    },
    d(n) {
      r[6](null), z(e, n);
    }
  };
}
function vr(r, e, t) {
  let { configuration: s } = e, n = !1, i, l = "Welcome";
  const a = async () => {
    i.moved() || t(1, n = !0);
  }, o = async () => {
    i.moved() || (t(1, n = !1), t(3, l = ""));
  };
  function c(u) {
    le[u ? "unshift" : "push"](() => {
      i = u, t(2, i);
    });
  }
  return r.$$set = (u) => {
    "configuration" in u && t(0, s = u.configuration);
  }, [
    s,
    n,
    i,
    l,
    a,
    o,
    c
  ];
}
class Tr extends M {
  constructor(e) {
    super(), q(this, e, vr, yr, I, { configuration: 0 });
  }
}
export {
  Tr as default
};
