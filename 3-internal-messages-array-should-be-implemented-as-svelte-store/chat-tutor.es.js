var Wt = Object.defineProperty;
var Gt = (r, e, n) => e in r ? Wt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var F = (r, e, n) => (Gt(r, typeof e != "symbol" ? e + "" : e, n), n), Jt = (r, e, n) => {
  if (!e.has(r))
    throw TypeError("Cannot " + n);
};
var Fe = (r, e, n) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, n);
};
var Ae = (r, e, n) => (Jt(r, e, "access private method"), n);
function A() {
}
const Xt = (r) => r;
function re(r, e) {
  for (const n in e)
    r[n] = e[n];
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
function Ge(r) {
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
function B(r, e, n, s) {
  if (r) {
    const t = At(r, e, n, s);
    return r[0](t);
  }
}
function At(r, e, n, s) {
  return r[1] && s ? re(n.ctx.slice(), r[1](s(e))) : n.ctx;
}
function O(r, e, n, s) {
  if (r[2] && s) {
    const t = r[2](s(n));
    if (e.dirty === void 0)
      return t;
    if (typeof t == "object") {
      const i = [], l = Math.max(e.dirty.length, t.length);
      for (let a = 0; a < l; a += 1)
        i[a] = e.dirty[a] | t[a];
      return i;
    }
    return e.dirty | t;
  }
  return e.dirty;
}
function D(r, e, n, s, t, i) {
  if (t) {
    const l = At(e, n, s, i);
    r.p(l, t);
  }
}
function Z(r) {
  if (r.ctx.length > 32) {
    const e = [], n = r.ctx.length / 32;
    for (let s = 0; s < n; s++)
      e[s] = -1;
    return e;
  }
  return -1;
}
function Kt(r) {
  const e = {};
  for (const n in r)
    n[0] !== "$" && (e[n] = r[n]);
  return e;
}
function st(r, e) {
  const n = {};
  e = new Set(e);
  for (const s in r)
    !e.has(s) && s[0] !== "$" && (n[s] = r[s]);
  return n;
}
const It = typeof window < "u";
let Vt = It ? () => window.performance.now() : () => Date.now(), Je = It ? (r) => requestAnimationFrame(r) : A;
const ke = /* @__PURE__ */ new Set();
function qt(r) {
  ke.forEach((e) => {
    e.c(r) || (ke.delete(e), e.f());
  }), ke.size !== 0 && Je(qt);
}
function en(r) {
  let e;
  return ke.size === 0 && Je(qt), {
    promise: new Promise((n) => {
      ke.add(e = { c: r, f: n });
    }),
    abort() {
      ke.delete(e);
    }
  };
}
function R(r, e) {
  r.appendChild(e);
}
function pe(r, e, n) {
  const s = Xe(r);
  if (!s.getElementById(e)) {
    const t = y("style");
    t.id = e, t.textContent = n, Mt(s, t);
  }
}
function Xe(r) {
  if (!r)
    return document;
  const e = r.getRootNode ? r.getRootNode() : r.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : r.ownerDocument;
}
function tn(r) {
  const e = y("style");
  return e.textContent = "/* empty */", Mt(Xe(r), e), e.sheet;
}
function Mt(r, e) {
  return R(
    /** @type {Document} */
    r.head || r,
    e
  ), e.sheet;
}
function b(r, e, n) {
  r.insertBefore(e, n || null);
}
function m(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function de(r, e) {
  for (let n = 0; n < r.length; n += 1)
    r[n] && r[n].d(e);
}
function y(r) {
  return document.createElement(r);
}
function nn(r) {
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
function ie(r, e, n, s) {
  return r.addEventListener(e, n, s), () => r.removeEventListener(e, n, s);
}
function w(r, e, n) {
  n == null ? r.removeAttribute(e) : r.getAttribute(e) !== n && r.setAttribute(e, n);
}
function sn(r) {
  return Array.from(r.childNodes);
}
function we(r, e) {
  e = "" + e, r.data !== e && (r.data = /** @type {string} */
  e);
}
function ne(r, e, n, s) {
  n == null ? r.style.removeProperty(e) : r.style.setProperty(e, n, s ? "important" : "");
}
function it(r, e, n) {
  r.classList.toggle(e, !!n);
}
function Ct(r, e, { bubbles: n = !1, cancelable: s = !1 } = {}) {
  return new CustomEvent(r, { detail: e, bubbles: n, cancelable: s });
}
class rn {
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
  m(e, n, s = null) {
    this.e || (this.is_svg ? this.e = nn(
      /** @type {keyof SVGElementTagNameMap} */
      n.nodeName
    ) : this.e = y(
      /** @type {keyof HTMLElementTagNameMap} */
      n.nodeType === 11 ? "TEMPLATE" : n.nodeName
    ), this.t = n.tagName !== "TEMPLATE" ? n : (
      /** @type {HTMLTemplateElement} */
      n.content
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
    for (let n = 0; n < this.n.length; n += 1)
      b(this.t, this.n[n], e);
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
function ln(r) {
  let e = 5381, n = r.length;
  for (; n--; )
    e = (e << 5) - e ^ r.charCodeAt(n);
  return e >>> 0;
}
function on(r, e) {
  const n = { stylesheet: tn(e), rules: {} };
  return Le.set(r, n), n;
}
function an(r, e, n, s, t, i, l, a = 0) {
  const o = 16.666 / s;
  let c = `{
`;
  for (let U = 0; U <= 1; U += o) {
    const $ = e + (n - e) * i(U);
    c += U * 100 + `%{${l($, 1 - $)}}
`;
  }
  const u = c + `100% {${l(n, 1 - n)}}
}`, h = `__svelte_${ln(u)}_${a}`, f = Xe(r), { stylesheet: d, rules: k } = Le.get(f) || on(f, r);
  k[h] || (k[h] = !0, d.insertRule(`@keyframes ${h} ${u}`, d.cssRules.length));
  const S = r.style.animation || "";
  return r.style.animation = `${S ? `${S}, ` : ""}${h} ${s}ms linear ${t}ms 1 both`, Ee += 1, h;
}
function rt(r, e) {
  const n = (r.style.animation || "").split(", "), s = n.filter(
    e ? (i) => i.indexOf(e) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), t = n.length - s.length;
  t && (r.style.animation = s.join(", "), Ee -= t, Ee || cn());
}
function cn() {
  Je(() => {
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
function Ze(r) {
  De().$$.on_mount.push(r);
}
function Ye() {
  const r = De();
  return (e, n, { cancelable: s = !1 } = {}) => {
    const t = r.$$.callbacks[e];
    if (t) {
      const i = Ct(
        /** @type {string} */
        e,
        n,
        { cancelable: s }
      );
      return t.slice().forEach((l) => {
        l.call(r, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function un(r, e) {
  return De().$$.context.set(r, e), e;
}
function fn(r) {
  return De().$$.context.get(r);
}
function Lt(r, e) {
  const n = r.$$.callbacks[e.type];
  n && n.slice().forEach((s) => s.call(this, e));
}
const be = [], le = [];
let $e = [];
const lt = [], hn = /* @__PURE__ */ Promise.resolve();
let Qe = !1;
function pn() {
  Qe || (Qe = !0, hn.then(Et));
}
function ue(r) {
  $e.push(r);
}
const He = /* @__PURE__ */ new Set();
let me = 0;
function Et() {
  if (me !== 0)
    return;
  const r = Te;
  do {
    try {
      for (; me < be.length; ) {
        const e = be[me];
        me++, xe(e), dn(e.$$);
      }
    } catch (e) {
      throw be.length = 0, me = 0, e;
    }
    for (xe(null), be.length = 0, me = 0; le.length; )
      le.pop()();
    for (let e = 0; e < $e.length; e += 1) {
      const n = $e[e];
      He.has(n) || (He.add(n), n());
    }
    $e.length = 0;
  } while (be.length);
  for (; lt.length; )
    lt.pop()();
  Qe = !1, He.clear(), xe(r);
}
function dn(r) {
  if (r.fragment !== null) {
    r.update(), he(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(ue);
  }
}
function gn(r) {
  const e = [], n = [];
  $e.forEach((s) => r.indexOf(s) === -1 ? e.push(s) : n.push(s)), n.forEach((s) => s()), $e = e;
}
let ve;
function mn() {
  return ve || (ve = Promise.resolve(), ve.then(() => {
    ve = null;
  })), ve;
}
function ot(r, e, n) {
  r.dispatchEvent(Ct(`${e ? "intro" : "outro"}${n}`));
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
function g(r, e, n, s) {
  if (r && r.o) {
    if (Me.has(r))
      return;
    Me.add(r), ce.c.push(() => {
      Me.delete(r), s && (n && r.d(1), s());
    }), r.o(e);
  } else
    s && s();
}
const _n = { duration: 0 };
function Nt(r, e, n) {
  const s = { direction: "in" };
  let t = e(r, n, s), i = !1, l, a, o = 0;
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
    } = t || _n;
    U && (l = an(r, 0, 1, d, f, k, U, o++)), S(0, 1);
    const $ = Vt() + f, H = $ + d;
    a && a.abort(), i = !0, ue(() => ot(r, !0, "start")), a = en((V) => {
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
      h || (h = !0, rt(r), Ge(t) ? (t = t(s), mn().then(u)) : u());
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
  const n = {}, s = {}, t = { $$scope: 1 };
  let i = r.length;
  for (; i--; ) {
    const l = r[i], a = e[i];
    if (a) {
      for (const o in l)
        o in a || (s[o] = 1);
      for (const o in a)
        t[o] || (n[o] = a[o], t[o] = 1);
      r[i] = a;
    } else
      for (const o in l)
        t[o] = 1;
  }
  for (const l in s)
    l in n || (n[l] = void 0);
  return n;
}
function K(r) {
  return typeof r == "object" && r !== null ? r : {};
}
function T(r) {
  r && r.c();
}
function x(r, e, n) {
  const { fragment: s, after_update: t } = r.$$;
  s && s.m(e, n), ue(() => {
    const i = r.$$.on_mount.map(Rt).filter(Ge);
    r.$$.on_destroy ? r.$$.on_destroy.push(...i) : he(i), r.$$.on_mount = [];
  }), t.forEach(ue);
}
function z(r, e) {
  const n = r.$$;
  n.fragment !== null && (gn(n.after_update), he(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function bn(r, e) {
  r.$$.dirty[0] === -1 && (be.push(r), pn(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function q(r, e, n, s, t, i, l = null, a = [-1]) {
  const o = Te;
  xe(r);
  const c = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: A,
    not_equal: t,
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
  if (c.ctx = n ? n(r, e.props || {}, (h, f, ...d) => {
    const k = d.length ? d[0] : f;
    return c.ctx && t(c.ctx[h], c.ctx[h] = k) && (!c.skip_bound && c.bound[h] && c.bound[h](k), u && bn(r, h)), f;
  }) : [], c.update(), u = !0, he(c.before_update), c.fragment = s ? s(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = sn(e.target);
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
  $on(e, n) {
    if (!Ge(n))
      return A;
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return s.push(n), () => {
      const t = s.indexOf(n);
      t !== -1 && s.splice(t, 1);
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
const kn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(kn);
function $n(r) {
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
function wn(r) {
  let e, n, s, t, i;
  return {
    c() {
      e = y("link"), n = W(), s = y("button"), s.textContent = "ChatTutor", w(e, "rel", "stylesheet"), w(e, "href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"), w(s, "class", "svelte-20kqwa");
    },
    m(l, a) {
      R(document.head, e), b(l, n, a), b(l, s, a), t || (i = ie(
        s,
        "click",
        /*click_handler*/
        r[0]
      ), t = !0);
    },
    p: A,
    i: A,
    o: A,
    d(l) {
      l && (m(n), m(s)), m(e), t = !1, i();
    }
  };
}
function yn(r) {
  function e(n) {
    Lt.call(this, r, n);
  }
  return [e];
}
class vn extends M {
  constructor(e) {
    super(), q(this, e, yn, wn, I, {}, $n);
  }
}
const _e = [];
function xn(r, e = A) {
  let n;
  const s = /* @__PURE__ */ new Set();
  function t(a) {
    if (I(r, a) && (r = a, n)) {
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
    t(a(r));
  }
  function l(a, o = A) {
    const c = [a, o];
    return s.add(c), s.size === 1 && (n = e(t, i) || A), a(r), () => {
      s.delete(c), s.size === 0 && n && (n(), n = null);
    };
  }
  return { set: t, update: i, subscribe: l };
}
const Ne = () => (/* @__PURE__ */ new Date()).toLocaleTimeString(navigator.language, {
  hour: "2-digit",
  minute: "2-digit"
}), Pt = (r, { addEndpoint: e }) => (r.time_created = r.timestamp, r.chat_k = "To set chat id", r.clear_number = "0", fetch(e, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(r)
})), zn = async (r, { model: e, collections: n, askEndpoint: s }) => fetch(s, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    conversation: r,
    selectedModel: e,
    multiple: !0,
    credential_token: "none",
    collection: n
  })
}), Tn = (r) => r.split(`

`).filter(Boolean).map((e) => {
  try {
    return JSON.parse(e.split("data: ")[1]);
  } catch (n) {
    return console.error(n), null;
  }
}), Sn = async (r, e, n, s) => {
  const t = await zn(r, e);
  let i;
  const l = t.body.getReader();
  let a;
  async function o() {
    const c = await l.read();
    if (c.done)
      return;
    const u = new TextDecoder().decode(c.value), h = Tn(u);
    for (const f of h) {
      if (f === null)
        continue;
      const { message: { valid_docs: d, content: k } } = f;
      a ? s(k ?? "") : a = n({
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
}, Rn = "Welcome", An = {
  sender: "Assistant",
  role: "assistant",
  content: Rn,
  timestamp: Ne()
}, Re = xn([]), In = (r) => {
  Re.update((e) => [...e, r]);
}, qn = (r) => {
  Re.update((e) => (e[e.length - 1].content = r, e));
}, Mn = (r) => {
  Re.update((e) => (e[e.length - 1].content += r, e));
}, jt = () => {
  Re.set([An]);
};
function Cn(r) {
  pe(r, "svelte-1qc1bbp", '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");.container.svelte-1qc1bbp.svelte-1qc1bbp{color:black;font-family:"Rethink Sans", sans-serif;display:flex;padding:10px;background-color:white;border-radius:10px}span.svelte-1qc1bbp.svelte-1qc1bbp{font-size:15px !important;padding:0 !important;margin:0 !important;vertical-align:middle}.container.svelte-1qc1bbp .svelte-1qc1bbp{padding:10px;border:none;font-size:1em;border-radius:10px}.input.svelte-1qc1bbp.svelte-1qc1bbp{flex:1;background:#ddd;color:"black"}.send.svelte-1qc1bbp.svelte-1qc1bbp{margin-left:10px;background:rgb(140, 0, 255);color:#fff;font-weight:bold;cursor:pointer;transition:filter 0.23s;padding:10px;display:flex;flex-direction:row;justify-content:center;align-items:center;width:40px;height:40px;transition:background-color 0.23s}.send.svelte-1qc1bbp.svelte-1qc1bbp:hover{filter:saturate(180%)}.send.svelte-1qc1bbp.svelte-1qc1bbp:disabled{cursor:not-allowed;opacity:0.5}.clear.svelte-1qc1bbp.svelte-1qc1bbp{border:none;margin-left:10px;background:#ddd;color:black;font-weight:bold;cursor:pointer;transition:background-color 0.23s;display:flex;flex-direction:row;justify-content:center;align-items:center;width:40px;height:40px}.clear.svelte-1qc1bbp.svelte-1qc1bbp:hover{background-color:black;color:#ddd}.clear.svelte-1qc1bbp.svelte-1qc1bbp:disabled{cursor:not-allowed;opacity:0.5}');
}
function Ln(r) {
  let e, n, s, t, i, l, a, o, c, u, h, f;
  return {
    c() {
      e = y("link"), n = W(), s = y("div"), t = y("div"), i = W(), l = y("button"), a = y("span"), a.textContent = "send", c = W(), u = y("button"), u.innerHTML = '<span class="material-symbols-outlined svelte-1qc1bbp">delete_forever</span>', w(e, "rel", "stylesheet"), w(e, "href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"), w(t, "contenteditable", "true"), w(t, "class", "input svelte-1qc1bbp"), /*innerText*/
      r[0] === void 0 && ue(() => (
        /*div0_input_handler*/
        r[5].call(t)
      )), w(a, "class", "material-symbols-outlined svelte-1qc1bbp"), w(l, "class", "send svelte-1qc1bbp"), l.disabled = o = !/*canSend*/
      r[1], w(u, "class", "clear svelte-1qc1bbp"), w(s, "class", "container svelte-1qc1bbp");
    },
    m(d, k) {
      R(document.head, e), b(d, n, k), b(d, s, k), R(s, t), /*innerText*/
      r[0] !== void 0 && (t.innerText = /*innerText*/
      r[0]), R(s, i), R(s, l), R(l, a), R(s, c), R(s, u), h || (f = [
        ie(
          t,
          "input",
          /*div0_input_handler*/
          r[5]
        ),
        ie(
          t,
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
      d[0] !== t.innerText && (t.innerText = /*innerText*/
      d[0]), k & /*canSend*/
      2 && o !== (o = !/*canSend*/
      d[1]) && (l.disabled = o);
    },
    i: A,
    o: A,
    d(d) {
      d && (m(n), m(s)), m(e), h = !1, he(f);
    }
  };
}
function En(r, e, n) {
  const s = Ye();
  let t = "", i = !0;
  const l = () => {
    n(0, t = t.trim());
  }, a = () => {
    l(), s("send", {
      message: t,
      onResponse: () => n(4, i = !0)
    }), n(0, t = ""), n(4, i = !1);
  }, o = () => t.match(/[a-z]/i) !== null;
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
    t = this.innerText, n(0, t);
  }
  return r.$$.update = () => {
    r.$$.dirty & /*innerText, messageReceived*/
    17 && n(1, c = !!t && t.length > 0 && i && o());
  }, [t, c, a, u, i, h];
}
class Nn extends M {
  constructor(e) {
    super(), q(this, e, En, Ln, I, {}, Cn);
  }
}
function Pn(r) {
  pe(r, "svelte-zksmvm", '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");.container.svelte-zksmvm{color:black;font-family:"Rethink Sans", sans-serif;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;font-size:1.5rem;padding:0.5rem 1rem;border-bottom:2px solid lightgray;background-color:white}button.svelte-zksmvm{float:right;align-self:self-end;border-radius:10%}button.svelte-zksmvm:hover{background-color:lightgray}');
}
function jn(r) {
  let e, n, s, t, i, l, a, o, c, u;
  return {
    c() {
      e = y("link"), n = W(), s = y("div"), t = y("div"), t.textContent = "Chat Tutor", i = W(), l = y("div"), a = y("button"), o = y("span"), o.textContent = "close", w(e, "rel", "stylesheet"), w(e, "href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"), w(t, "class", "title"), w(o, "class", "material-symbols-outlined"), ne(o, "color", "red"), w(a, "class", "svelte-zksmvm"), ne(a, "border", "1px solid red"), w(l, "class", "close"), w(s, "class", "container svelte-zksmvm");
    },
    m(h, f) {
      R(document.head, e), b(h, n, f), b(h, s, f), R(s, t), R(s, i), R(s, l), R(l, a), R(a, o), c || (u = ie(
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
      h && (m(n), m(s)), m(e), c = !1, u();
    }
  };
}
function Bn(r) {
  function e(n) {
    Lt.call(this, r, n);
  }
  return [e];
}
class On extends M {
  constructor(e) {
    super(), q(this, e, Bn, jn, I, {}, Pn);
  }
}
function Dn() {
  const r = console.warn;
  console.warn = (e) => {
    e.includes("unknown prop") || e.includes("unexpected slot") || r(e);
  }, Ze(() => {
    console.warn = r;
  });
}
function at(r, e, n) {
  const s = r.slice();
  return s[18] = e[n], s;
}
function ct(r, e, n) {
  const s = r.slice();
  return s[18] = e[n], s;
}
function ut(r, e, n) {
  const s = r.slice();
  return s[10] = e[n], s;
}
function ft(r, e, n) {
  const s = r.slice();
  return s[13] = e[n], s[15] = n, s;
}
function ht(r, e, n) {
  const s = r.slice();
  return s[16] = e[n], s[15] = n, s;
}
function pt(r, e, n) {
  const s = r.slice();
  return s[7] = e[n], s;
}
function Zn(r) {
  let e, n, s, t;
  const i = [Qn, Hn, Fn], l = [];
  function a(o, c) {
    return (
      /*type*/
      o[0] === "table" ? 0 : (
        /*type*/
        o[0] === "list" ? 1 : 2
      )
    );
  }
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), t = !0;
    },
    p(o, c) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), n = l[e], n ? n.p(o, c) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
    },
    i(o) {
      t || (p(n), t = !0);
    },
    o(o) {
      g(n), t = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function Un(r) {
  let e, n, s = G(
    /*tokens*/
    r[1]
  ), t = [];
  for (let l = 0; l < s.length; l += 1)
    t[l] = kt(pt(r, s, l));
  const i = (l) => g(t[l], 1, 1, () => {
    t[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      e = P();
    },
    m(l, a) {
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(l, a);
      b(l, e, a), n = !0;
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
          t[o] ? (t[o].p(c, a), p(t[o], 1)) : (t[o] = kt(c), t[o].c(), p(t[o], 1), t[o].m(e.parentNode, e));
        }
        for (E(), o = s.length; o < t.length; o += 1)
          i(o);
        N();
      }
    },
    i(l) {
      if (!n) {
        for (let a = 0; a < s.length; a += 1)
          p(t[a]);
        n = !0;
      }
    },
    o(l) {
      t = t.filter(Boolean);
      for (let a = 0; a < t.length; a += 1)
        g(t[a]);
      n = !1;
    },
    d(l) {
      l && m(e), de(t, l);
    }
  };
}
function Fn(r) {
  let e, n, s;
  const t = [
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
      $$slots: { default: [Jn] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*$$restProps*/
    64)
      c = Y(t, [K(
        /*$$restProps*/
        a[6]
      )]);
    else
      for (let u = 0; u < t.length; u += 1)
        c = re(c, t[u]);
    return { props: c };
  }
  return i && (e = j(i, l(r))), {
    c() {
      e && T(e.$$.fragment), n = P();
    },
    m(a, o) {
      e && x(e, a, o), b(a, n, o), s = !0;
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
        i ? (e = j(i, l(a, o)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (i) {
        const c = o & /*$$restProps*/
        64 ? Y(t, [K(
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
      a && m(n), e && z(e, a);
    }
  };
}
function Hn(r) {
  let e, n, s, t;
  const i = [Yn, Xn], l = [];
  function a(o, c) {
    return (
      /*ordered*/
      o[4] ? 0 : 1
    );
  }
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), t = !0;
    },
    p(o, c) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), n = l[e], n ? n.p(o, c) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
    },
    i(o) {
      t || (p(n), t = !0);
    },
    o(o) {
      g(n), t = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function Qn(r) {
  let e, n, s;
  var t = (
    /*renderers*/
    r[5].table
  );
  function i(l, a) {
    return {
      props: {
        $$slots: { default: [as] },
        $$scope: { ctx: l }
      }
    };
  }
  return t && (e = j(t, i(r))), {
    c() {
      e && T(e.$$.fragment), n = P();
    },
    m(l, a) {
      e && x(e, l, a), b(l, n, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && t !== (t = /*renderers*/
      l[5].table)) {
        if (e) {
          E();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            z(o, 1);
          }), N();
        }
        t ? (e = j(t, i(l)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (t) {
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
      l && m(n), e && z(e, l);
    }
  };
}
function Wn(r) {
  let e = (
    /*$$restProps*/
    r[6].raw + ""
  ), n;
  return {
    c() {
      n = oe(e);
    },
    m(s, t) {
      b(s, n, t);
    },
    p(s, t) {
      t & /*$$restProps*/
      64 && e !== (e = /*$$restProps*/
      s[6].raw + "") && we(n, e);
    },
    i: A,
    o: A,
    d(s) {
      s && m(n);
    }
  };
}
function Gn(r) {
  let e, n;
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
    m(s, t) {
      x(e, s, t), n = !0;
    },
    p(s, t) {
      const i = {};
      t & /*tokens*/
      2 && (i.tokens = /*tokens*/
      s[1]), t & /*renderers*/
      32 && (i.renderers = /*renderers*/
      s[5]), e.$set(i);
    },
    i(s) {
      n || (p(e.$$.fragment, s), n = !0);
    },
    o(s) {
      g(e.$$.fragment, s), n = !1;
    },
    d(s) {
      z(e, s);
    }
  };
}
function Jn(r) {
  let e, n, s, t;
  const i = [Gn, Wn], l = [];
  function a(o, c) {
    return (
      /*tokens*/
      o[1] ? 0 : 1
    );
  }
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), t = !0;
    },
    p(o, c) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), n = l[e], n ? n.p(o, c) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
    },
    i(o) {
      t || (p(n), t = !0);
    },
    o(o) {
      g(n), t = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function Xn(r) {
  let e, n, s;
  const t = [
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
      $$slots: { default: [Vn] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*ordered, $$restProps*/
    80)
      c = Y(t, [
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
      for (let u = 0; u < t.length; u += 1)
        c = re(c, t[u]);
    return { props: c };
  }
  return i && (e = j(i, l(r))), {
    c() {
      e && T(e.$$.fragment), n = P();
    },
    m(a, o) {
      e && x(e, a, o), b(a, n, o), s = !0;
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
        i ? (e = j(i, l(a, o)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (i) {
        const c = o & /*ordered, $$restProps*/
        80 ? Y(t, [
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
      a && m(n), e && z(e, a);
    }
  };
}
function Yn(r) {
  let e, n, s;
  const t = [
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
      c = Y(t, [
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
      for (let u = 0; u < t.length; u += 1)
        c = re(c, t[u]);
    return { props: c };
  }
  return i && (e = j(i, l(r))), {
    c() {
      e && T(e.$$.fragment), n = P();
    },
    m(a, o) {
      e && x(e, a, o), b(a, n, o), s = !0;
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
        i ? (e = j(i, l(a, o)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (i) {
        const c = o & /*ordered, $$restProps*/
        80 ? Y(t, [
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
      a && m(n), e && z(e, a);
    }
  };
}
function Kn(r) {
  let e, n, s;
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
      T(e.$$.fragment), n = W();
    },
    m(t, i) {
      x(e, t, i), b(t, n, i), s = !0;
    },
    p(t, i) {
      const l = {};
      i & /*$$restProps*/
      64 && (l.tokens = /*item*/
      t[18].tokens), i & /*renderers*/
      32 && (l.renderers = /*renderers*/
      t[5]), e.$set(l);
    },
    i(t) {
      s || (p(e.$$.fragment, t), s = !0);
    },
    o(t) {
      g(e.$$.fragment, t), s = !1;
    },
    d(t) {
      t && m(n), z(e, t);
    }
  };
}
function dt(r) {
  let e, n, s;
  const t = [
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
      $$slots: { default: [Kn] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*$$restProps*/
    64)
      c = Y(t, [K(
        /*item*/
        a[18]
      )]);
    else
      for (let u = 0; u < t.length; u += 1)
        c = re(c, t[u]);
    return { props: c };
  }
  return i && (e = j(i, l(r))), {
    c() {
      e && T(e.$$.fragment), n = P();
    },
    m(a, o) {
      e && x(e, a, o), b(a, n, o), s = !0;
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
        i ? (e = j(i, l(a, o)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (i) {
        const c = o & /*$$restProps*/
        64 ? Y(t, [K(
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
      a && m(n), e && z(e, a);
    }
  };
}
function Vn(r) {
  let e, n, s = G(
    /*$$restProps*/
    r[6].items
  ), t = [];
  for (let l = 0; l < s.length; l += 1)
    t[l] = dt(at(r, s, l));
  const i = (l) => g(t[l], 1, 1, () => {
    t[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      e = P();
    },
    m(l, a) {
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(l, a);
      b(l, e, a), n = !0;
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
          t[o] ? (t[o].p(c, a), p(t[o], 1)) : (t[o] = dt(c), t[o].c(), p(t[o], 1), t[o].m(e.parentNode, e));
        }
        for (E(), o = s.length; o < t.length; o += 1)
          i(o);
        N();
      }
    },
    i(l) {
      if (!n) {
        for (let a = 0; a < s.length; a += 1)
          p(t[a]);
        n = !0;
      }
    },
    o(l) {
      t = t.filter(Boolean);
      for (let a = 0; a < t.length; a += 1)
        g(t[a]);
      n = !1;
    },
    d(l) {
      l && m(e), de(t, l);
    }
  };
}
function es(r) {
  let e, n, s;
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
      T(e.$$.fragment), n = W();
    },
    m(t, i) {
      x(e, t, i), b(t, n, i), s = !0;
    },
    p(t, i) {
      const l = {};
      i & /*$$restProps*/
      64 && (l.tokens = /*item*/
      t[18].tokens), i & /*renderers*/
      32 && (l.renderers = /*renderers*/
      t[5]), e.$set(l);
    },
    i(t) {
      s || (p(e.$$.fragment, t), s = !0);
    },
    o(t) {
      g(e.$$.fragment, t), s = !1;
    },
    d(t) {
      t && m(n), z(e, t);
    }
  };
}
function gt(r) {
  let e, n, s;
  const t = [
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
      $$slots: { default: [es] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*$$restProps*/
    64)
      c = Y(t, [K(
        /*item*/
        a[18]
      )]);
    else
      for (let u = 0; u < t.length; u += 1)
        c = re(c, t[u]);
    return { props: c };
  }
  return i && (e = j(i, l(r))), {
    c() {
      e && T(e.$$.fragment), n = P();
    },
    m(a, o) {
      e && x(e, a, o), b(a, n, o), s = !0;
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
        i ? (e = j(i, l(a, o)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (i) {
        const c = o & /*$$restProps*/
        64 ? Y(t, [K(
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
      a && m(n), e && z(e, a);
    }
  };
}
function ts(r) {
  let e, n, s = G(
    /*$$restProps*/
    r[6].items
  ), t = [];
  for (let l = 0; l < s.length; l += 1)
    t[l] = gt(ct(r, s, l));
  const i = (l) => g(t[l], 1, 1, () => {
    t[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      e = P();
    },
    m(l, a) {
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(l, a);
      b(l, e, a), n = !0;
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
          t[o] ? (t[o].p(c, a), p(t[o], 1)) : (t[o] = gt(c), t[o].c(), p(t[o], 1), t[o].m(e.parentNode, e));
        }
        for (E(), o = s.length; o < t.length; o += 1)
          i(o);
        N();
      }
    },
    i(l) {
      if (!n) {
        for (let a = 0; a < s.length; a += 1)
          p(t[a]);
        n = !0;
      }
    },
    o(l) {
      t = t.filter(Boolean);
      for (let a = 0; a < t.length; a += 1)
        g(t[a]);
      n = !1;
    },
    d(l) {
      l && m(e), de(t, l);
    }
  };
}
function ns(r) {
  let e, n, s;
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
      T(e.$$.fragment), n = W();
    },
    m(t, i) {
      x(e, t, i), b(t, n, i), s = !0;
    },
    p(t, i) {
      const l = {};
      i & /*header*/
      4 && (l.tokens = /*headerItem*/
      t[16].tokens), i & /*renderers*/
      32 && (l.renderers = /*renderers*/
      t[5]), e.$set(l);
    },
    i(t) {
      s || (p(e.$$.fragment, t), s = !0);
    },
    o(t) {
      g(e.$$.fragment, t), s = !1;
    },
    d(t) {
      t && m(n), z(e, t);
    }
  };
}
function mt(r) {
  let e, n, s;
  var t = (
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
        $$slots: { default: [ns] },
        $$scope: { ctx: l }
      }
    };
  }
  return t && (e = j(t, i(r))), {
    c() {
      e && T(e.$$.fragment), n = P();
    },
    m(l, a) {
      e && x(e, l, a), b(l, n, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && t !== (t = /*renderers*/
      l[5].tablecell)) {
        if (e) {
          E();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            z(o, 1);
          }), N();
        }
        t ? (e = j(t, i(l)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (t) {
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
      l && m(n), e && z(e, l);
    }
  };
}
function ss(r) {
  let e, n, s = G(
    /*header*/
    r[2]
  ), t = [];
  for (let l = 0; l < s.length; l += 1)
    t[l] = mt(ht(r, s, l));
  const i = (l) => g(t[l], 1, 1, () => {
    t[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      e = P();
    },
    m(l, a) {
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(l, a);
      b(l, e, a), n = !0;
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
          t[o] ? (t[o].p(c, a), p(t[o], 1)) : (t[o] = mt(c), t[o].c(), p(t[o], 1), t[o].m(e.parentNode, e));
        }
        for (E(), o = s.length; o < t.length; o += 1)
          i(o);
        N();
      }
    },
    i(l) {
      if (!n) {
        for (let a = 0; a < s.length; a += 1)
          p(t[a]);
        n = !0;
      }
    },
    o(l) {
      t = t.filter(Boolean);
      for (let a = 0; a < t.length; a += 1)
        g(t[a]);
      n = !1;
    },
    d(l) {
      l && m(e), de(t, l);
    }
  };
}
function is(r) {
  let e, n, s;
  var t = (
    /*renderers*/
    r[5].tablerow
  );
  function i(l, a) {
    return {
      props: {
        $$slots: { default: [ss] },
        $$scope: { ctx: l }
      }
    };
  }
  return t && (e = j(t, i(r))), {
    c() {
      e && T(e.$$.fragment), n = P();
    },
    m(l, a) {
      e && x(e, l, a), b(l, n, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && t !== (t = /*renderers*/
      l[5].tablerow)) {
        if (e) {
          E();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            z(o, 1);
          }), N();
        }
        t ? (e = j(t, i(l)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (t) {
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
      l && m(n), e && z(e, l);
    }
  };
}
function rs(r) {
  let e, n;
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
    m(s, t) {
      x(e, s, t), n = !0;
    },
    p(s, t) {
      const i = {};
      t & /*rows*/
      8 && (i.tokens = /*cells*/
      s[13].tokens), t & /*renderers*/
      32 && (i.renderers = /*renderers*/
      s[5]), e.$set(i);
    },
    i(s) {
      n || (p(e.$$.fragment, s), n = !0);
    },
    o(s) {
      g(e.$$.fragment, s), n = !1;
    },
    d(s) {
      z(e, s);
    }
  };
}
function _t(r) {
  let e, n, s;
  var t = (
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
        $$slots: { default: [rs] },
        $$scope: { ctx: l }
      }
    };
  }
  return t && (e = j(t, i(r))), {
    c() {
      e && T(e.$$.fragment), n = P();
    },
    m(l, a) {
      e && x(e, l, a), b(l, n, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && t !== (t = /*renderers*/
      l[5].tablecell)) {
        if (e) {
          E();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            z(o, 1);
          }), N();
        }
        t ? (e = j(t, i(l)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (t) {
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
      l && m(n), e && z(e, l);
    }
  };
}
function ls(r) {
  let e, n, s = G(
    /*row*/
    r[10]
  ), t = [];
  for (let l = 0; l < s.length; l += 1)
    t[l] = _t(ft(r, s, l));
  const i = (l) => g(t[l], 1, 1, () => {
    t[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      e = W();
    },
    m(l, a) {
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(l, a);
      b(l, e, a), n = !0;
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
          t[o] ? (t[o].p(c, a), p(t[o], 1)) : (t[o] = _t(c), t[o].c(), p(t[o], 1), t[o].m(e.parentNode, e));
        }
        for (E(), o = s.length; o < t.length; o += 1)
          i(o);
        N();
      }
    },
    i(l) {
      if (!n) {
        for (let a = 0; a < s.length; a += 1)
          p(t[a]);
        n = !0;
      }
    },
    o(l) {
      t = t.filter(Boolean);
      for (let a = 0; a < t.length; a += 1)
        g(t[a]);
      n = !1;
    },
    d(l) {
      l && m(e), de(t, l);
    }
  };
}
function bt(r) {
  let e, n, s;
  var t = (
    /*renderers*/
    r[5].tablerow
  );
  function i(l, a) {
    return {
      props: {
        $$slots: { default: [ls] },
        $$scope: { ctx: l }
      }
    };
  }
  return t && (e = j(t, i(r))), {
    c() {
      e && T(e.$$.fragment), n = P();
    },
    m(l, a) {
      e && x(e, l, a), b(l, n, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && t !== (t = /*renderers*/
      l[5].tablerow)) {
        if (e) {
          E();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            z(o, 1);
          }), N();
        }
        t ? (e = j(t, i(l)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
      } else if (t) {
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
      l && m(n), e && z(e, l);
    }
  };
}
function os(r) {
  let e, n, s = G(
    /*rows*/
    r[3]
  ), t = [];
  for (let l = 0; l < s.length; l += 1)
    t[l] = bt(ut(r, s, l));
  const i = (l) => g(t[l], 1, 1, () => {
    t[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      e = P();
    },
    m(l, a) {
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(l, a);
      b(l, e, a), n = !0;
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
          t[o] ? (t[o].p(c, a), p(t[o], 1)) : (t[o] = bt(c), t[o].c(), p(t[o], 1), t[o].m(e.parentNode, e));
        }
        for (E(), o = s.length; o < t.length; o += 1)
          i(o);
        N();
      }
    },
    i(l) {
      if (!n) {
        for (let a = 0; a < s.length; a += 1)
          p(t[a]);
        n = !0;
      }
    },
    o(l) {
      t = t.filter(Boolean);
      for (let a = 0; a < t.length; a += 1)
        g(t[a]);
      n = !1;
    },
    d(l) {
      l && m(e), de(t, l);
    }
  };
}
function as(r) {
  let e, n, s, t, i;
  var l = (
    /*renderers*/
    r[5].tablehead
  );
  function a(u, h) {
    return {
      props: {
        $$slots: { default: [is] },
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
        $$slots: { default: [os] },
        $$scope: { ctx: u }
      }
    };
  }
  return o && (s = j(o, c(r))), {
    c() {
      e && T(e.$$.fragment), n = W(), s && T(s.$$.fragment), t = P();
    },
    m(u, h) {
      e && x(e, u, h), b(u, n, h), s && x(s, u, h), b(u, t, h), i = !0;
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
        l ? (e = j(l, a(u)), T(e.$$.fragment), p(e.$$.fragment, 1), x(e, n.parentNode, n)) : e = null;
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
        o ? (s = j(o, c(u)), T(s.$$.fragment), p(s.$$.fragment, 1), x(s, t.parentNode, t)) : s = null;
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
      u && (m(n), m(t)), e && z(e, u), s && z(s, u);
    }
  };
}
function kt(r) {
  let e, n;
  const s = [
    /*token*/
    r[7],
    { renderers: (
      /*renderers*/
      r[5]
    ) }
  ];
  let t = {};
  for (let i = 0; i < s.length; i += 1)
    t = re(t, s[i]);
  return e = new ge({ props: t }), {
    c() {
      T(e.$$.fragment);
    },
    m(i, l) {
      x(e, i, l), n = !0;
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
      n || (p(e.$$.fragment, i), n = !0);
    },
    o(i) {
      g(e.$$.fragment, i), n = !1;
    },
    d(i) {
      z(e, i);
    }
  };
}
function cs(r) {
  let e, n, s, t;
  const i = [Un, Zn], l = [];
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
  return ~(e = a(r)) && (n = l[e] = i[e](r)), {
    c() {
      n && n.c(), s = P();
    },
    m(o, c) {
      ~e && l[e].m(o, c), b(o, s, c), t = !0;
    },
    p(o, [c]) {
      let u = e;
      e = a(o), e === u ? ~e && l[e].p(o, c) : (n && (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N()), ~e ? (n = l[e], n ? n.p(o, c) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s)) : n = null);
    },
    i(o) {
      t || (p(n), t = !0);
    },
    o(o) {
      g(n), t = !1;
    },
    d(o) {
      o && m(s), ~e && l[e].d(o);
    }
  };
}
function us(r, e, n) {
  const s = ["type", "tokens", "header", "rows", "ordered", "renderers"];
  let t = st(e, s), { type: i = void 0 } = e, { tokens: l = void 0 } = e, { header: a = void 0 } = e, { rows: o = void 0 } = e, { ordered: c = !1 } = e, { renderers: u } = e;
  return Dn(), r.$$set = (h) => {
    e = re(re({}, e), Kt(h)), n(6, t = st(e, s)), "type" in h && n(0, i = h.type), "tokens" in h && n(1, l = h.tokens), "header" in h && n(2, a = h.header), "rows" in h && n(3, o = h.rows), "ordered" in h && n(4, c = h.ordered), "renderers" in h && n(5, u = h.renderers);
  }, [i, l, a, o, c, u, t];
}
let ge = class extends M {
  constructor(e) {
    super(), q(this, e, us, cs, I, {
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
const Ot = /[&<>"']/, fs = new RegExp(Ot.source, "g"), Dt = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, hs = new RegExp(Dt.source, "g"), ps = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, $t = (r) => ps[r];
function Q(r, e) {
  if (e) {
    if (Ot.test(r))
      return r.replace(fs, $t);
  } else if (Dt.test(r))
    return r.replace(hs, $t);
  return r;
}
const ds = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Zt(r) {
  return r.replace(ds, (e, n) => (n = n.toLowerCase(), n === "colon" ? ":" : n.charAt(0) === "#" ? n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1)) : ""));
}
const gs = /(^|[^\[])\^/g;
function C(r, e) {
  r = typeof r == "string" ? r : r.source, e = e || "";
  const n = {
    replace: (s, t) => (t = t.source || t, t = t.replace(gs, "$1"), r = r.replace(s, t), n),
    getRegex: () => new RegExp(r, e)
  };
  return n;
}
const ms = /[^\w:]/g, _s = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function wt(r, e, n) {
  if (r) {
    let s;
    try {
      s = decodeURIComponent(Zt(n)).replace(ms, "").toLowerCase();
    } catch {
      return null;
    }
    if (s.indexOf("javascript:") === 0 || s.indexOf("vbscript:") === 0 || s.indexOf("data:") === 0)
      return null;
  }
  e && !_s.test(n) && (n = ws(e, n));
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const qe = {}, bs = /^[^:]+:\/*[^/]*$/, ks = /^([^:]+:)[\s\S]*$/, $s = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function ws(r, e) {
  qe[" " + r] || (bs.test(r) ? qe[" " + r] = r + "/" : qe[" " + r] = Ce(r, "/", !0)), r = qe[" " + r];
  const n = r.indexOf(":") === -1;
  return e.substring(0, 2) === "//" ? n ? e : r.replace(ks, "$1") + e : e.charAt(0) === "/" ? n ? e : r.replace($s, "$1") + e : r + e;
}
const Pe = { exec: function() {
} };
function yt(r, e) {
  const n = r.replace(/\|/g, (i, l, a) => {
    let o = !1, c = l;
    for (; --c >= 0 && a[c] === "\\"; )
      o = !o;
    return o ? "|" : " |";
  }), s = n.split(/ \|/);
  let t = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !s[s.length - 1].trim() && s.pop(), s.length > e)
    s.splice(e);
  else
    for (; s.length < e; )
      s.push("");
  for (; t < s.length; t++)
    s[t] = s[t].trim().replace(/\\\|/g, "|");
  return s;
}
function Ce(r, e, n) {
  const s = r.length;
  if (s === 0)
    return "";
  let t = 0;
  for (; t < s; ) {
    const i = r.charAt(s - t - 1);
    if (i === e && !n)
      t++;
    else if (i !== e && n)
      t++;
    else
      break;
  }
  return r.slice(0, s - t);
}
function ys(r, e) {
  if (r.indexOf(e[1]) === -1)
    return -1;
  const n = r.length;
  let s = 0, t = 0;
  for (; t < n; t++)
    if (r[t] === "\\")
      t++;
    else if (r[t] === e[0])
      s++;
    else if (r[t] === e[1] && (s--, s < 0))
      return t;
  return -1;
}
function vs(r, e) {
  !r || r.silent || (e && console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"), (r.sanitize || r.sanitizer) && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"), (r.highlight || r.langPrefix !== "language-") && console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."), r.mangle && console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."), r.baseUrl && console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."), r.smartypants && console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."), r.xhtml && console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."), (r.headerIds || r.headerPrefix) && console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."));
}
function vt(r, e, n, s) {
  const t = e.href, i = e.title ? Q(e.title) : null, l = r[1].replace(/\\([\[\]])/g, "$1");
  if (r[0].charAt(0) !== "!") {
    s.state.inLink = !0;
    const a = {
      type: "link",
      raw: n,
      href: t,
      title: i,
      text: l,
      tokens: s.inlineTokens(l)
    };
    return s.state.inLink = !1, a;
  }
  return {
    type: "image",
    raw: n,
    href: t,
    title: i,
    text: Q(l)
  };
}
function xs(r, e) {
  const n = r.match(/^(\s+)(?:```)/);
  if (n === null)
    return e;
  const s = n[1];
  return e.split(`
`).map((t) => {
    const i = t.match(/^\s+/);
    if (i === null)
      return t;
    const [l] = i;
    return l.length >= s.length ? t.slice(s.length) : t;
  }).join(`
`);
}
class je {
  constructor(e) {
    this.options = e || ae;
  }
  space(e) {
    const n = this.rules.block.newline.exec(e);
    if (n && n[0].length > 0)
      return {
        type: "space",
        raw: n[0]
      };
  }
  code(e) {
    const n = this.rules.block.code.exec(e);
    if (n) {
      const s = n[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: n[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? s : Ce(s, `
`)
      };
    }
  }
  fences(e) {
    const n = this.rules.block.fences.exec(e);
    if (n) {
      const s = n[0], t = xs(s, n[3] || "");
      return {
        type: "code",
        raw: s,
        lang: n[2] ? n[2].trim().replace(this.rules.inline._escapes, "$1") : n[2],
        text: t
      };
    }
  }
  heading(e) {
    const n = this.rules.block.heading.exec(e);
    if (n) {
      let s = n[2].trim();
      if (/#$/.test(s)) {
        const t = Ce(s, "#");
        (this.options.pedantic || !t || / $/.test(t)) && (s = t.trim());
      }
      return {
        type: "heading",
        raw: n[0],
        depth: n[1].length,
        text: s,
        tokens: this.lexer.inline(s)
      };
    }
  }
  hr(e) {
    const n = this.rules.block.hr.exec(e);
    if (n)
      return {
        type: "hr",
        raw: n[0]
      };
  }
  blockquote(e) {
    const n = this.rules.block.blockquote.exec(e);
    if (n) {
      const s = n[0].replace(/^ *>[ \t]?/gm, ""), t = this.lexer.state.top;
      this.lexer.state.top = !0;
      const i = this.lexer.blockTokens(s);
      return this.lexer.state.top = t, {
        type: "blockquote",
        raw: n[0],
        tokens: i,
        text: s
      };
    }
  }
  list(e) {
    let n = this.rules.block.list.exec(e);
    if (n) {
      let s, t, i, l, a, o, c, u, h, f, d, k, S = n[1].trim();
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
      for (; e && (k = !1, !(!(n = H.exec(e)) || this.rules.block.hr.test(e))); ) {
        if (s = n[0], e = e.substring(s.length), u = n[2].split(`
`, 1)[0].replace(/^\t+/, (J) => " ".repeat(3 * J.length)), h = e.split(`
`, 1)[0], this.options.pedantic ? (l = 2, d = u.trimLeft()) : (l = n[2].search(/[^ ]/), l = l > 4 ? 1 : l, d = u.slice(l), l += n[1].length), o = !1, !u && /^ *$/.test(h) && (s += h + `
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
        $.loose || (c ? $.loose = !0 : /\n *\n *$/.test(s) && (c = !0)), this.options.gfm && (t = /^\[[ xX]\] /.exec(d), t && (i = t[0] !== "[ ] ", d = d.replace(/^\[[ xX]\] +/, ""))), $.items.push({
          type: "list_item",
          raw: s,
          task: !!t,
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
    const n = this.rules.block.html.exec(e);
    if (n) {
      const s = {
        type: "html",
        block: !0,
        raw: n[0],
        pre: !this.options.sanitizer && (n[1] === "pre" || n[1] === "script" || n[1] === "style"),
        text: n[0]
      };
      if (this.options.sanitize) {
        const t = this.options.sanitizer ? this.options.sanitizer(n[0]) : Q(n[0]);
        s.type = "paragraph", s.text = t, s.tokens = this.lexer.inline(t);
      }
      return s;
    }
  }
  def(e) {
    const n = this.rules.block.def.exec(e);
    if (n) {
      const s = n[1].toLowerCase().replace(/\s+/g, " "), t = n[2] ? n[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", i = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline._escapes, "$1") : n[3];
      return {
        type: "def",
        tag: s,
        raw: n[0],
        href: t,
        title: i
      };
    }
  }
  table(e) {
    const n = this.rules.block.table.exec(e);
    if (n) {
      const s = {
        type: "table",
        header: yt(n[1]).map((t) => ({ text: t })),
        align: n[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: n[3] && n[3].trim() ? n[3].replace(/\n[ \t]*$/, "").split(`
`) : []
      };
      if (s.header.length === s.align.length) {
        s.raw = n[0];
        let t = s.align.length, i, l, a, o;
        for (i = 0; i < t; i++)
          /^ *-+: *$/.test(s.align[i]) ? s.align[i] = "right" : /^ *:-+: *$/.test(s.align[i]) ? s.align[i] = "center" : /^ *:-+ *$/.test(s.align[i]) ? s.align[i] = "left" : s.align[i] = null;
        for (t = s.rows.length, i = 0; i < t; i++)
          s.rows[i] = yt(s.rows[i], s.header.length).map((c) => ({ text: c }));
        for (t = s.header.length, l = 0; l < t; l++)
          s.header[l].tokens = this.lexer.inline(s.header[l].text);
        for (t = s.rows.length, l = 0; l < t; l++)
          for (o = s.rows[l], a = 0; a < o.length; a++)
            o[a].tokens = this.lexer.inline(o[a].text);
        return s;
      }
    }
  }
  lheading(e) {
    const n = this.rules.block.lheading.exec(e);
    if (n)
      return {
        type: "heading",
        raw: n[0],
        depth: n[2].charAt(0) === "=" ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1])
      };
  }
  paragraph(e) {
    const n = this.rules.block.paragraph.exec(e);
    if (n) {
      const s = n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1];
      return {
        type: "paragraph",
        raw: n[0],
        text: s,
        tokens: this.lexer.inline(s)
      };
    }
  }
  text(e) {
    const n = this.rules.block.text.exec(e);
    if (n)
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        tokens: this.lexer.inline(n[0])
      };
  }
  escape(e) {
    const n = this.rules.inline.escape.exec(e);
    if (n)
      return {
        type: "escape",
        raw: n[0],
        text: Q(n[1])
      };
  }
  tag(e) {
    const n = this.rules.inline.tag.exec(e);
    if (n)
      return !this.lexer.state.inLink && /^<a /i.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(n[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) && (this.lexer.state.inRawBlock = !1), {
        type: this.options.sanitize ? "text" : "html",
        raw: n[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : Q(n[0]) : n[0]
      };
  }
  link(e) {
    const n = this.rules.inline.link.exec(e);
    if (n) {
      const s = n[2].trim();
      if (!this.options.pedantic && /^</.test(s)) {
        if (!/>$/.test(s))
          return;
        const l = Ce(s.slice(0, -1), "\\");
        if ((s.length - l.length) % 2 === 0)
          return;
      } else {
        const l = ys(n[2], "()");
        if (l > -1) {
          const o = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + l;
          n[2] = n[2].substring(0, l), n[0] = n[0].substring(0, o).trim(), n[3] = "";
        }
      }
      let t = n[2], i = "";
      if (this.options.pedantic) {
        const l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(t);
        l && (t = l[1], i = l[3]);
      } else
        i = n[3] ? n[3].slice(1, -1) : "";
      return t = t.trim(), /^</.test(t) && (this.options.pedantic && !/>$/.test(s) ? t = t.slice(1) : t = t.slice(1, -1)), vt(n, {
        href: t && t.replace(this.rules.inline._escapes, "$1"),
        title: i && i.replace(this.rules.inline._escapes, "$1")
      }, n[0], this.lexer);
    }
  }
  reflink(e, n) {
    let s;
    if ((s = this.rules.inline.reflink.exec(e)) || (s = this.rules.inline.nolink.exec(e))) {
      let t = (s[2] || s[1]).replace(/\s+/g, " ");
      if (t = n[t.toLowerCase()], !t) {
        const i = s[0].charAt(0);
        return {
          type: "text",
          raw: i,
          text: i
        };
      }
      return vt(s, t, s[0], this.lexer);
    }
  }
  emStrong(e, n, s = "") {
    let t = this.rules.inline.emStrong.lDelim.exec(e);
    if (!t || t[3] && s.match(/[\p{L}\p{N}]/u))
      return;
    if (!(t[1] || t[2] || "") || !s || this.rules.inline.punctuation.exec(s)) {
      const l = t[0].length - 1;
      let a, o, c = l, u = 0;
      const h = t[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (h.lastIndex = 0, n = n.slice(-1 * e.length + l); (t = h.exec(n)) != null; ) {
        if (a = t[1] || t[2] || t[3] || t[4] || t[5] || t[6], !a)
          continue;
        if (o = a.length, t[3] || t[4]) {
          c += o;
          continue;
        } else if ((t[5] || t[6]) && l % 3 && !((l + o) % 3)) {
          u += o;
          continue;
        }
        if (c -= o, c > 0)
          continue;
        o = Math.min(o, o + c + u);
        const f = e.slice(0, l + t.index + o + 1);
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
    const n = this.rules.inline.code.exec(e);
    if (n) {
      let s = n[2].replace(/\n/g, " ");
      const t = /[^ ]/.test(s), i = /^ /.test(s) && / $/.test(s);
      return t && i && (s = s.substring(1, s.length - 1)), s = Q(s, !0), {
        type: "codespan",
        raw: n[0],
        text: s
      };
    }
  }
  br(e) {
    const n = this.rules.inline.br.exec(e);
    if (n)
      return {
        type: "br",
        raw: n[0]
      };
  }
  del(e) {
    const n = this.rules.inline.del.exec(e);
    if (n)
      return {
        type: "del",
        raw: n[0],
        text: n[2],
        tokens: this.lexer.inlineTokens(n[2])
      };
  }
  autolink(e, n) {
    const s = this.rules.inline.autolink.exec(e);
    if (s) {
      let t, i;
      return s[2] === "@" ? (t = Q(this.options.mangle ? n(s[1]) : s[1]), i = "mailto:" + t) : (t = Q(s[1]), i = t), {
        type: "link",
        raw: s[0],
        text: t,
        href: i,
        tokens: [
          {
            type: "text",
            raw: t,
            text: t
          }
        ]
      };
    }
  }
  url(e, n) {
    let s;
    if (s = this.rules.inline.url.exec(e)) {
      let t, i;
      if (s[2] === "@")
        t = Q(this.options.mangle ? n(s[0]) : s[0]), i = "mailto:" + t;
      else {
        let l;
        do
          l = s[0], s[0] = this.rules.inline._backpedal.exec(s[0])[0];
        while (l !== s[0]);
        t = Q(s[0]), s[1] === "www." ? i = "http://" + s[0] : i = s[0];
      }
      return {
        type: "link",
        raw: s[0],
        text: t,
        href: i,
        tokens: [
          {
            type: "text",
            raw: t,
            text: t
          }
        ]
      };
    }
  }
  inlineText(e, n) {
    const s = this.rules.inline.text.exec(e);
    if (s) {
      let t;
      return this.lexer.state.inRawBlock ? t = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(s[0]) : Q(s[0]) : s[0] : t = Q(this.options.smartypants ? n(s[0]) : s[0]), {
        type: "text",
        raw: s[0],
        text: t
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
function zs(r) {
  return r.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function xt(r) {
  let e = "", n, s;
  const t = r.length;
  for (n = 0; n < t; n++)
    s = r.charCodeAt(n), Math.random() > 0.5 && (s = "x" + s.toString(16)), e += "&#" + s + ";";
  return e;
}
class X {
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || ae, this.options.tokenizer = this.options.tokenizer || new je(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      block: v.normal,
      inline: _.normal
    };
    this.options.pedantic ? (n.block = v.pedantic, n.inline = _.pedantic) : this.options.gfm && (n.block = v.gfm, this.options.breaks ? n.inline = _.breaks : n.inline = _.gfm), this.tokenizer.rules = n;
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
  static lex(e, n) {
    return new X(n).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, n) {
    return new X(n).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    let n;
    for (; n = this.inlineQueue.shift(); )
      this.inlineTokens(n.src, n.tokens);
    return this.tokens;
  }
  /**
   * Lexing
   */
  blockTokens(e, n = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (a, o, c) => o + "    ".repeat(c.length));
    let s, t, i, l;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => (s = a.call({ lexer: this }, e, n)) ? (e = e.substring(s.raw.length), n.push(s), !0) : !1))) {
        if (s = this.tokenizer.space(e)) {
          e = e.substring(s.raw.length), s.raw.length === 1 && n.length > 0 ? n[n.length - 1].raw += `
` : n.push(s);
          continue;
        }
        if (s = this.tokenizer.code(e)) {
          e = e.substring(s.raw.length), t = n[n.length - 1], t && (t.type === "paragraph" || t.type === "text") ? (t.raw += `
` + s.raw, t.text += `
` + s.text, this.inlineQueue[this.inlineQueue.length - 1].src = t.text) : n.push(s);
          continue;
        }
        if (s = this.tokenizer.fences(e)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (s = this.tokenizer.heading(e)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (s = this.tokenizer.hr(e)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (s = this.tokenizer.blockquote(e)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (s = this.tokenizer.list(e)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (s = this.tokenizer.html(e)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (s = this.tokenizer.def(e)) {
          e = e.substring(s.raw.length), t = n[n.length - 1], t && (t.type === "paragraph" || t.type === "text") ? (t.raw += `
` + s.raw, t.text += `
` + s.raw, this.inlineQueue[this.inlineQueue.length - 1].src = t.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = {
            href: s.href,
            title: s.title
          });
          continue;
        }
        if (s = this.tokenizer.table(e)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (s = this.tokenizer.lheading(e)) {
          e = e.substring(s.raw.length), n.push(s);
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
          t = n[n.length - 1], l && t.type === "paragraph" ? (t.raw += `
` + s.raw, t.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = t.text) : n.push(s), l = i.length !== e.length, e = e.substring(s.raw.length);
          continue;
        }
        if (s = this.tokenizer.text(e)) {
          e = e.substring(s.raw.length), t = n[n.length - 1], t && t.type === "text" ? (t.raw += `
` + s.raw, t.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = t.text) : n.push(s);
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
    return this.state.top = !0, n;
  }
  inline(e, n = []) {
    return this.inlineQueue.push({ src: e, tokens: n }), n;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, n = []) {
    let s, t, i, l = e, a, o, c;
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
      if (o || (c = ""), o = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((u) => (s = u.call({ lexer: this }, e, n)) ? (e = e.substring(s.raw.length), n.push(s), !0) : !1))) {
        if (s = this.tokenizer.escape(e)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (s = this.tokenizer.tag(e)) {
          e = e.substring(s.raw.length), t = n[n.length - 1], t && s.type === "text" && t.type === "text" ? (t.raw += s.raw, t.text += s.text) : n.push(s);
          continue;
        }
        if (s = this.tokenizer.link(e)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (s = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(s.raw.length), t = n[n.length - 1], t && s.type === "text" && t.type === "text" ? (t.raw += s.raw, t.text += s.text) : n.push(s);
          continue;
        }
        if (s = this.tokenizer.emStrong(e, l, c)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (s = this.tokenizer.codespan(e)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (s = this.tokenizer.br(e)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (s = this.tokenizer.del(e)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (s = this.tokenizer.autolink(e, xt)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (!this.state.inLink && (s = this.tokenizer.url(e, xt))) {
          e = e.substring(s.raw.length), n.push(s);
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
        if (s = this.tokenizer.inlineText(i, zs)) {
          e = e.substring(s.raw.length), s.raw.slice(-1) !== "_" && (c = s.raw.slice(-1)), o = !0, t = n[n.length - 1], t && t.type === "text" ? (t.raw += s.raw, t.text += s.text) : n.push(s);
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
    return n;
  }
}
class Be {
  constructor(e) {
    this.options = e || ae;
  }
  code(e, n, s) {
    const t = (n || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const i = this.options.highlight(e, t);
      i != null && i !== e && (s = !0, e = i);
    }
    return e = e.replace(/\n$/, "") + `
`, t ? '<pre><code class="' + this.options.langPrefix + Q(t) + '">' + (s ? e : Q(e, !0)) + `</code></pre>
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
  html(e, n) {
    return e;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(e, n, s, t) {
    if (this.options.headerIds) {
      const i = this.options.headerPrefix + t.slug(s);
      return `<h${n} id="${i}">${e}</h${n}>
`;
    }
    return `<h${n}>${e}</h${n}>
`;
  }
  hr() {
    return this.options.xhtml ? `<hr/>
` : `<hr>
`;
  }
  list(e, n, s) {
    const t = n ? "ol" : "ul", i = n && s !== 1 ? ' start="' + s + '"' : "";
    return "<" + t + i + `>
` + e + "</" + t + `>
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
  table(e, n) {
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + n + `</table>
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
  tablecell(e, n) {
    const s = n.header ? "th" : "td";
    return (n.align ? `<${s} align="${n.align}">` : `<${s}>`) + e + `</${s}>
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
  link(e, n, s) {
    if (e = wt(this.options.sanitize, this.options.baseUrl, e), e === null)
      return s;
    let t = '<a href="' + e + '"';
    return n && (t += ' title="' + n + '"'), t += ">" + s + "</a>", t;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(e, n, s) {
    if (e = wt(this.options.sanitize, this.options.baseUrl, e), e === null)
      return s;
    let t = `<img src="${e}" alt="${s}"`;
    return n && (t += ` title="${n}"`), t += this.options.xhtml ? "/>" : ">", t;
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
  link(e, n, s) {
    return "" + s;
  }
  image(e, n, s) {
    return "" + s;
  }
  br() {
    return "";
  }
}
class Ue {
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
  getNextSafeSlug(e, n) {
    let s = e, t = 0;
    if (this.seen.hasOwnProperty(s)) {
      t = this.seen[e];
      do
        t++, s = e + "-" + t;
      while (this.seen.hasOwnProperty(s));
    }
    return n || (this.seen[e] = t, this.seen[s] = 0), s;
  }
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(e, n = {}) {
    const s = this.serialize(e);
    return this.getNextSafeSlug(s, n.dryrun);
  }
}
class se {
  constructor(e) {
    this.options = e || ae, this.options.renderer = this.options.renderer || new Be(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Ve(), this.slugger = new Ue();
  }
  /**
   * Static Parse Method
   */
  static parse(e, n) {
    return new se(n).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, n) {
    return new se(n).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, n = !0) {
    let s = "", t, i, l, a, o, c, u, h, f, d, k, S, U, $, H, V, J, ee, te;
    const ye = e.length;
    for (t = 0; t < ye; t++) {
      if (d = e[t], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[d.type] && (te = this.options.extensions.renderers[d.type].call({ parser: this }, d), te !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(d.type))) {
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
          for (f = d.tokens ? this.parseInline(d.tokens) : d.text; t + 1 < ye && e[t + 1].type === "text"; )
            d = e[++t], f += `
` + (d.tokens ? this.parseInline(d.tokens) : d.text);
          s += n ? this.renderer.paragraph(f) : f;
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
  parseInline(e, n) {
    n = n || this.renderer;
    let s = "", t, i, l;
    const a = e.length;
    for (t = 0; t < a; t++) {
      if (i = e[t], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type] && (l = this.options.extensions.renderers[i.type].call({ parser: this }, i), l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type))) {
        s += l || "";
        continue;
      }
      switch (i.type) {
        case "escape": {
          s += n.text(i.text);
          break;
        }
        case "html": {
          s += n.html(i.text);
          break;
        }
        case "link": {
          s += n.link(i.href, i.title, this.parseInline(i.tokens, n));
          break;
        }
        case "image": {
          s += n.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          s += n.strong(this.parseInline(i.tokens, n));
          break;
        }
        case "em": {
          s += n.em(this.parseInline(i.tokens, n));
          break;
        }
        case "codespan": {
          s += n.codespan(i.text);
          break;
        }
        case "br": {
          s += n.br();
          break;
        }
        case "del": {
          s += n.del(this.parseInline(i.tokens, n));
          break;
        }
        case "text": {
          s += n.text(i.text);
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
var Se, We, Oe, Ut;
class Ts {
  constructor(...e) {
    Fe(this, Se);
    Fe(this, Oe);
    F(this, "defaults", Ke());
    F(this, "options", this.setOptions);
    F(this, "parse", Ae(this, Se, We).call(this, X.lex, se.parse));
    F(this, "parseInline", Ae(this, Se, We).call(this, X.lexInline, se.parseInline));
    F(this, "Parser", se);
    F(this, "parser", se.parse);
    F(this, "Renderer", Be);
    F(this, "TextRenderer", Ve);
    F(this, "Lexer", X);
    F(this, "lexer", X.lex);
    F(this, "Tokenizer", je);
    F(this, "Slugger", Ue);
    F(this, "Hooks", ze);
    this.use(...e);
  }
  walkTokens(e, n) {
    let s = [];
    for (const t of e)
      switch (s = s.concat(n.call(this, t)), t.type) {
        case "table": {
          for (const i of t.header)
            s = s.concat(this.walkTokens(i.tokens, n));
          for (const i of t.rows)
            for (const l of i)
              s = s.concat(this.walkTokens(l.tokens, n));
          break;
        }
        case "list": {
          s = s.concat(this.walkTokens(t.items, n));
          break;
        }
        default:
          this.defaults.extensions && this.defaults.extensions.childTokens && this.defaults.extensions.childTokens[t.type] ? this.defaults.extensions.childTokens[t.type].forEach((i) => {
            s = s.concat(this.walkTokens(t[i], n));
          }) : t.tokens && (s = s.concat(this.walkTokens(t.tokens, n)));
      }
    return s;
  }
  use(...e) {
    const n = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((s) => {
      const t = { ...s };
      if (t.async = this.defaults.async || t.async || !1, s.extensions && (s.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if (i.renderer) {
          const l = n.renderers[i.name];
          l ? n.renderers[i.name] = function(...a) {
            let o = i.renderer.apply(this, a);
            return o === !1 && (o = l.apply(this, a)), o;
          } : n.renderers[i.name] = i.renderer;
        }
        if (i.tokenizer) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          n[i.level] ? n[i.level].unshift(i.tokenizer) : n[i.level] = [i.tokenizer], i.start && (i.level === "block" ? n.startBlock ? n.startBlock.push(i.start) : n.startBlock = [i.start] : i.level === "inline" && (n.startInline ? n.startInline.push(i.start) : n.startInline = [i.start]));
        }
        i.childTokens && (n.childTokens[i.name] = i.childTokens);
      }), t.extensions = n), s.renderer) {
        const i = this.defaults.renderer || new Be(this.defaults);
        for (const l in s.renderer) {
          const a = i[l];
          i[l] = (...o) => {
            let c = s.renderer[l].apply(i, o);
            return c === !1 && (c = a.apply(i, o)), c;
          };
        }
        t.renderer = i;
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
        t.tokenizer = i;
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
        t.hooks = i;
      }
      if (s.walkTokens) {
        const i = this.defaults.walkTokens;
        t.walkTokens = function(l) {
          let a = [];
          return a.push(s.walkTokens.call(this, l)), i && (a = a.concat(i.call(this, l))), a;
        };
      }
      this.defaults = { ...this.defaults, ...t };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
}
Se = new WeakSet(), We = function(e, n) {
  return (s, t, i) => {
    typeof t == "function" && (i = t, t = null);
    const l = { ...t };
    t = { ...this.defaults, ...l };
    const a = Ae(this, Oe, Ut).call(this, t.silent, t.async, i);
    if (typeof s > "u" || s === null)
      return a(new Error("marked(): input parameter is undefined or null"));
    if (typeof s != "string")
      return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
    if (vs(t, i), t.hooks && (t.hooks.options = t), i) {
      const o = t.highlight;
      let c;
      try {
        t.hooks && (s = t.hooks.preprocess(s)), c = e(s, t);
      } catch (f) {
        return a(f);
      }
      const u = (f) => {
        let d;
        if (!f)
          try {
            t.walkTokens && this.walkTokens(c, t.walkTokens), d = n(c, t), t.hooks && (d = t.hooks.postprocess(d));
          } catch (k) {
            f = k;
          }
        return t.highlight = o, f ? a(f) : i(null, d);
      };
      if (!o || o.length < 3 || (delete t.highlight, !c.length))
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
    if (t.async)
      return Promise.resolve(t.hooks ? t.hooks.preprocess(s) : s).then((o) => e(o, t)).then((o) => t.walkTokens ? Promise.all(this.walkTokens(o, t.walkTokens)).then(() => o) : o).then((o) => n(o, t)).then((o) => t.hooks ? t.hooks.postprocess(o) : o).catch(a);
    try {
      t.hooks && (s = t.hooks.preprocess(s));
      const o = e(s, t);
      t.walkTokens && this.walkTokens(o, t.walkTokens);
      let c = n(o, t);
      return t.hooks && (c = t.hooks.postprocess(c)), c;
    } catch (o) {
      return a(o);
    }
  };
}, Oe = new WeakSet(), Ut = function(e, n, s) {
  return (t) => {
    if (t.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const i = "<p>An error occurred:</p><pre>" + Q(t.message + "", !0) + "</pre>";
      if (n)
        return Promise.resolve(i);
      if (s) {
        s(null, i);
        return;
      }
      return i;
    }
    if (n)
      return Promise.reject(t);
    if (s) {
      s(t);
      return;
    }
    throw t;
  };
};
const fe = new Ts(ae);
function L(r, e, n) {
  return fe.parse(r, e, n);
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
L.Slugger = Ue;
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
function Ss(r) {
  let e;
  return {
    c() {
      e = oe(
        /*raw*/
        r[1]
      );
    },
    m(n, s) {
      b(n, e, s);
    },
    p(n, s) {
      s & /*raw*/
      2 && we(
        e,
        /*raw*/
        n[1]
      );
    },
    i: A,
    o: A,
    d(n) {
      n && m(e);
    }
  };
}
function Rs(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[5].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = y("h6"), t && t.c(), w(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      16) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[4],
        n ? O(
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
      ), (!n || l & /*id*/
      4) && w(
        e,
        "id",
        /*id*/
        i[2]
      );
    },
    i(i) {
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function As(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[5].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = y("h5"), t && t.c(), w(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      16) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[4],
        n ? O(
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
      ), (!n || l & /*id*/
      4) && w(
        e,
        "id",
        /*id*/
        i[2]
      );
    },
    i(i) {
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function Is(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[5].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = y("h4"), t && t.c(), w(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      16) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[4],
        n ? O(
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
      ), (!n || l & /*id*/
      4) && w(
        e,
        "id",
        /*id*/
        i[2]
      );
    },
    i(i) {
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function qs(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[5].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = y("h3"), t && t.c(), w(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      16) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[4],
        n ? O(
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
      ), (!n || l & /*id*/
      4) && w(
        e,
        "id",
        /*id*/
        i[2]
      );
    },
    i(i) {
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function Ms(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[5].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = y("h2"), t && t.c(), w(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      16) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[4],
        n ? O(
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
      ), (!n || l & /*id*/
      4) && w(
        e,
        "id",
        /*id*/
        i[2]
      );
    },
    i(i) {
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function Cs(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[5].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = y("h1"), t && t.c(), w(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      16) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[4],
        n ? O(
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
      ), (!n || l & /*id*/
      4) && w(
        e,
        "id",
        /*id*/
        i[2]
      );
    },
    i(i) {
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function Ls(r) {
  let e, n, s, t;
  const i = [
    Cs,
    Ms,
    qs,
    Is,
    As,
    Rs,
    Ss
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
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), t = !0;
    },
    p(o, [c]) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), n = l[e], n ? n.p(o, c) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
    },
    i(o) {
      t || (p(n), t = !0);
    },
    o(o) {
      g(n), t = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function Es(r, e, n) {
  let s, { $$slots: t = {}, $$scope: i } = e, { depth: l } = e, { raw: a } = e, { text: o } = e;
  const { slug: c, getOptions: u } = fn(Ft), h = u();
  return r.$$set = (f) => {
    "depth" in f && n(0, l = f.depth), "raw" in f && n(1, a = f.raw), "text" in f && n(3, o = f.text), "$$scope" in f && n(4, i = f.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty & /*text*/
    8 && n(2, s = h.headerIds ? h.headerPrefix + c(o) : void 0);
  }, [l, a, s, o, i, t];
}
class Ns extends M {
  constructor(e) {
    super(), q(this, e, Es, Ls, I, { depth: 0, raw: 1, text: 3 });
  }
}
function Ps(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("p"), t && t.c();
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? O(
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
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function js(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class Bs extends M {
  constructor(e) {
    super(), q(this, e, js, Ps, I, {});
  }
}
function Os(r) {
  let e;
  const n = (
    /*#slots*/
    r[3].default
  ), s = B(
    n,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(t, i) {
      s && s.m(t, i), e = !0;
    },
    p(t, [i]) {
      s && s.p && (!e || i & /*$$scope*/
      4) && D(
        s,
        n,
        t,
        /*$$scope*/
        t[2],
        e ? O(
          n,
          /*$$scope*/
          t[2],
          i,
          null
        ) : Z(
          /*$$scope*/
          t[2]
        ),
        null
      );
    },
    i(t) {
      e || (p(s, t), e = !0);
    },
    o(t) {
      g(s, t), e = !1;
    },
    d(t) {
      s && s.d(t);
    }
  };
}
function Ds(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e, { text: i } = e, { raw: l } = e;
  return r.$$set = (a) => {
    "text" in a && n(0, i = a.text), "raw" in a && n(1, l = a.raw), "$$scope" in a && n(2, t = a.$$scope);
  }, [i, l, t, s];
}
class Zs extends M {
  constructor(e) {
    super(), q(this, e, Ds, Os, I, { text: 0, raw: 1 });
  }
}
function Us(r) {
  let e, n;
  return {
    c() {
      e = y("img"), nt(e.src, n = /*href*/
      r[0]) || w(e, "src", n), w(
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
    m(s, t) {
      b(s, e, t);
    },
    p(s, [t]) {
      t & /*href*/
      1 && !nt(e.src, n = /*href*/
      s[0]) && w(e, "src", n), t & /*title*/
      2 && w(
        e,
        "title",
        /*title*/
        s[1]
      ), t & /*text*/
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
function Fs(r, e, n) {
  let { href: s = "" } = e, { title: t = void 0 } = e, { text: i = "" } = e;
  return r.$$set = (l) => {
    "href" in l && n(0, s = l.href), "title" in l && n(1, t = l.title), "text" in l && n(2, i = l.text);
  }, [s, t, i];
}
class Hs extends M {
  constructor(e) {
    super(), q(this, e, Fs, Us, I, { href: 0, title: 1, text: 2 });
  }
}
function Qs(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[3].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = y("a"), t && t.c(), w(
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
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      4) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[2],
        n ? O(
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
      ), (!n || l & /*href*/
      1) && w(
        e,
        "href",
        /*href*/
        i[0]
      ), (!n || l & /*title*/
      2) && w(
        e,
        "title",
        /*title*/
        i[1]
      );
    },
    i(i) {
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function Ws(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e, { href: i = "" } = e, { title: l = void 0 } = e;
  return r.$$set = (a) => {
    "href" in a && n(0, i = a.href), "title" in a && n(1, l = a.title), "$$scope" in a && n(2, t = a.$$scope);
  }, [i, l, t, s];
}
class Gs extends M {
  constructor(e) {
    super(), q(this, e, Ws, Qs, I, { href: 0, title: 1 });
  }
}
function Js(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("em"), t && t.c();
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? O(
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
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function Xs(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class Ys extends M {
  constructor(e) {
    super(), q(this, e, Xs, Js, I, {});
  }
}
function Ks(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("del"), t && t.c();
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? O(
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
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function Vs(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class ei extends M {
  constructor(e) {
    super(), q(this, e, Vs, Ks, I, {});
  }
}
function ti(r) {
  let e, n = (
    /*raw*/
    r[0].replace(/`/g, "") + ""
  ), s;
  return {
    c() {
      e = y("code"), s = oe(n);
    },
    m(t, i) {
      b(t, e, i), R(e, s);
    },
    p(t, [i]) {
      i & /*raw*/
      1 && n !== (n = /*raw*/
      t[0].replace(/`/g, "") + "") && we(s, n);
    },
    i: A,
    o: A,
    d(t) {
      t && m(e);
    }
  };
}
function ni(r, e, n) {
  let { raw: s } = e;
  return r.$$set = (t) => {
    "raw" in t && n(0, s = t.raw);
  }, [s];
}
class si extends M {
  constructor(e) {
    super(), q(this, e, ni, ti, I, { raw: 0 });
  }
}
function ii(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("strong"), t && t.c();
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? O(
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
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function ri(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class li extends M {
  constructor(e) {
    super(), q(this, e, ri, ii, I, {});
  }
}
function oi(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("table"), t && t.c();
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? O(
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
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function ai(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class ci extends M {
  constructor(e) {
    super(), q(this, e, ai, oi, I, {});
  }
}
function ui(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("thead"), t && t.c();
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? O(
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
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function fi(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class hi extends M {
  constructor(e) {
    super(), q(this, e, fi, ui, I, {});
  }
}
function pi(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("tbody"), t && t.c();
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? O(
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
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function di(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class gi extends M {
  constructor(e) {
    super(), q(this, e, di, pi, I, {});
  }
}
function mi(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("tr"), t && t.c();
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? O(
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
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function _i(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class bi extends M {
  constructor(e) {
    super(), q(this, e, _i, mi, I, {});
  }
}
function ki(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[3].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = y("td"), t && t.c(), w(
        e,
        "align",
        /*align*/
        r[1]
      );
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      4) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[2],
        n ? O(
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
      ), (!n || l & /*align*/
      2) && w(
        e,
        "align",
        /*align*/
        i[1]
      );
    },
    i(i) {
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function $i(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[3].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = y("th"), t && t.c(), w(
        e,
        "align",
        /*align*/
        r[1]
      );
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      4) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[2],
        n ? O(
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
      ), (!n || l & /*align*/
      2) && w(
        e,
        "align",
        /*align*/
        i[1]
      );
    },
    i(i) {
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function wi(r) {
  let e, n, s, t;
  const i = [$i, ki], l = [];
  function a(o, c) {
    return (
      /*header*/
      o[0] ? 0 : 1
    );
  }
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), t = !0;
    },
    p(o, [c]) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), n = l[e], n ? n.p(o, c) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
    },
    i(o) {
      t || (p(n), t = !0);
    },
    o(o) {
      g(n), t = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function yi(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e, { header: i } = e, { align: l } = e;
  return r.$$set = (a) => {
    "header" in a && n(0, i = a.header), "align" in a && n(1, l = a.align), "$$scope" in a && n(2, t = a.$$scope);
  }, [i, l, t, s];
}
class vi extends M {
  constructor(e) {
    super(), q(this, e, yi, wi, I, { header: 0, align: 1 });
  }
}
function xi(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[3].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = y("ul"), t && t.c();
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      4) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[2],
        n ? O(
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
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function zi(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[3].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = y("ol"), t && t.c(), w(
        e,
        "start",
        /*start*/
        r[1]
      );
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      4) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[2],
        n ? O(
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
      ), (!n || l & /*start*/
      2) && w(
        e,
        "start",
        /*start*/
        i[1]
      );
    },
    i(i) {
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function Ti(r) {
  let e, n, s, t;
  const i = [zi, xi], l = [];
  function a(o, c) {
    return (
      /*ordered*/
      o[0] ? 0 : 1
    );
  }
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), t = !0;
    },
    p(o, [c]) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), n = l[e], n ? n.p(o, c) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
    },
    i(o) {
      t || (p(n), t = !0);
    },
    o(o) {
      g(n), t = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function Si(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e, { ordered: i } = e, { start: l } = e;
  return r.$$set = (a) => {
    "ordered" in a && n(0, i = a.ordered), "start" in a && n(1, l = a.start), "$$scope" in a && n(2, t = a.$$scope);
  }, [i, l, t, s];
}
class Ri extends M {
  constructor(e) {
    super(), q(this, e, Si, Ti, I, { ordered: 0, start: 1 });
  }
}
function Ai(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("li"), t && t.c();
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? O(
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
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function Ii(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class qi extends M {
  constructor(e) {
    super(), q(this, e, Ii, Ai, I, {});
  }
}
function Mi(r) {
  let e;
  return {
    c() {
      e = y("hr");
    },
    m(n, s) {
      b(n, e, s);
    },
    p: A,
    i: A,
    o: A,
    d(n) {
      n && m(e);
    }
  };
}
class Ci extends M {
  constructor(e) {
    super(), q(this, e, null, Mi, I, {});
  }
}
function Li(r) {
  let e, n;
  return {
    c() {
      e = new rn(!1), n = P(), e.a = n;
    },
    m(s, t) {
      e.m(
        /*text*/
        r[0],
        s,
        t
      ), b(s, n, t);
    },
    p(s, [t]) {
      t & /*text*/
      1 && e.p(
        /*text*/
        s[0]
      );
    },
    i: A,
    o: A,
    d(s) {
      s && (m(n), e.d());
    }
  };
}
function Ei(r, e, n) {
  let { text: s } = e;
  return r.$$set = (t) => {
    "text" in t && n(0, s = t.text);
  }, [s];
}
class Ni extends M {
  constructor(e) {
    super(), q(this, e, Ei, Li, I, { text: 0 });
  }
}
function Pi(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("blockquote"), t && t.c();
    },
    m(i, l) {
      b(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? O(
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
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function ji(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class Bi extends M {
  constructor(e) {
    super(), q(this, e, ji, Pi, I, {});
  }
}
function Oi(r) {
  let e, n, s;
  return {
    c() {
      e = y("pre"), n = y("code"), s = oe(
        /*text*/
        r[1]
      ), w(
        e,
        "class",
        /*lang*/
        r[0]
      );
    },
    m(t, i) {
      b(t, e, i), R(e, n), R(n, s);
    },
    p(t, [i]) {
      i & /*text*/
      2 && we(
        s,
        /*text*/
        t[1]
      ), i & /*lang*/
      1 && w(
        e,
        "class",
        /*lang*/
        t[0]
      );
    },
    i: A,
    o: A,
    d(t) {
      t && m(e);
    }
  };
}
function Di(r, e, n) {
  let { lang: s } = e, { text: t } = e;
  return r.$$set = (i) => {
    "lang" in i && n(0, s = i.lang), "text" in i && n(1, t = i.text);
  }, [s, t];
}
class Zi extends M {
  constructor(e) {
    super(), q(this, e, Di, Oi, I, { lang: 0, text: 1 });
  }
}
function Ui(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = B(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = y("br"), t && t.c();
    },
    m(i, l) {
      b(i, e, l), t && t.m(i, l), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && D(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? O(
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
      n || (p(t, i), n = !0);
    },
    o(i) {
      g(t, i), n = !1;
    },
    d(i) {
      i && m(e), t && t.d(i);
    }
  };
}
function Fi(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class Hi extends M {
  constructor(e) {
    super(), q(this, e, Fi, Ui, I, {});
  }
}
const Qi = {
  heading: Ns,
  paragraph: Bs,
  text: Zs,
  image: Hs,
  link: Gs,
  em: Ys,
  strong: li,
  codespan: si,
  del: ei,
  table: ci,
  tablehead: hi,
  tablebody: gi,
  tablerow: bi,
  tablecell: vi,
  list: Ri,
  orderedlistitem: null,
  unorderedlistitem: null,
  listitem: qi,
  hr: Ci,
  html: Ni,
  blockquote: Bi,
  code: Zi,
  br: Hi
}, Wi = {
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
function Gi(r) {
  let e, n;
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
    m(s, t) {
      x(e, s, t), n = !0;
    },
    p(s, [t]) {
      const i = {};
      t & /*tokens*/
      1 && (i.tokens = /*tokens*/
      s[0]), t & /*combinedRenderers*/
      2 && (i.renderers = /*combinedRenderers*/
      s[1]), e.$set(i);
    },
    i(s) {
      n || (p(e.$$.fragment, s), n = !0);
    },
    o(s) {
      g(e.$$.fragment, s), n = !1;
    },
    d(s) {
      z(e, s);
    }
  };
}
function Ji(r, e, n) {
  let s, t, i, l, { source: a = [] } = e, { renderers: o = {} } = e, { options: c = {} } = e, { isInline: u = !1 } = e;
  const h = Ye();
  let f, d, k;
  return un(Ft, {
    slug: (S) => t ? t.slug(S) : "",
    getOptions: () => i
  }), Ze(() => {
    n(7, k = !0);
  }), r.$$set = (S) => {
    "source" in S && n(2, a = S.source), "renderers" in S && n(3, o = S.renderers), "options" in S && n(4, c = S.options), "isInline" in S && n(5, u = S.isInline);
  }, r.$$.update = () => {
    r.$$.dirty & /*source*/
    4 && n(8, s = Array.isArray(a)), r.$$.dirty & /*source*/
    4 && (t = a ? new Ue() : void 0), r.$$.dirty & /*options*/
    16 && n(9, i = { ...Wi, ...c }), r.$$.dirty & /*preprocessed, source, combinedOptions, isInline, lexer, tokens*/
    869 && (s ? n(0, f = a) : (n(6, d = new X(i)), n(0, f = u ? d.inlineTokens(a) : d.lex(a)), h("parsed", { tokens: f }))), r.$$.dirty & /*renderers*/
    8 && n(1, l = { ...Qi, ...o }), r.$$.dirty & /*mounted, preprocessed, tokens*/
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
class Xi extends M {
  constructor(e) {
    super(), q(this, e, Ji, Gi, I, {
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
function Yi(r, { delay: e = 0, duration: n = 400, easing: s = Ht, axis: t = "y" } = {}) {
  const i = getComputedStyle(r), l = +i.opacity, a = t === "y" ? "height" : "width", o = parseFloat(i[a]), c = t === "y" ? ["top", "bottom"] : ["left", "right"], u = c.map(
    ($) => `${$[0].toUpperCase()}${$.slice(1)}`
  ), h = parseFloat(i[`padding${u[0]}`]), f = parseFloat(i[`padding${u[1]}`]), d = parseFloat(i[`margin${u[0]}`]), k = parseFloat(i[`margin${u[1]}`]), S = parseFloat(
    i[`border${u[0]}Width`]
  ), U = parseFloat(
    i[`border${u[1]}Width`]
  );
  return {
    delay: e,
    duration: n,
    easing: s,
    css: ($) => `overflow: hidden;opacity: ${Math.min($ * 20, 1) * l};${a}: ${$ * o}px;padding-${c[0]}: ${$ * h}px;padding-${c[1]}: ${$ * f}px;margin-${c[0]}: ${$ * d}px;margin-${c[1]}: ${$ * k}px;border-${c[0]}-width: ${$ * S}px;border-${c[1]}-width: ${$ * U}px;`
  };
}
function Ki(r, { delay: e = 0, duration: n = 400, easing: s = Ht, start: t = 0, opacity: i = 0 } = {}) {
  const l = getComputedStyle(r), a = +l.opacity, o = l.transform === "none" ? "" : l.transform, c = 1 - t, u = a * (1 - i);
  return {
    delay: e,
    duration: n,
    easing: s,
    css: (h, f) => `
			transform: ${o} scale(${1 - c * f});
			opacity: ${a - u * f}
		`
  };
}
function Vi(r) {
  pe(r, "svelte-dttnzg", '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");.container.svelte-dttnzg{color:black;font-family:"Rethink Sans", sans-serif;display:grid;grid-template-rows:1rem [title-start] 1rem [title-end] 0.5rem [content-start] auto [content-end] 0.5rem;grid-template-columns:2rem [title-start content-start] 1fr [content-end title-end] 2rem;align-items:start;justify-items:left;background-color:lightgray}.round-bottom.svelte-dttnzg{border-bottom-left-radius:10px;border-bottom-right-radius:10px}.title.svelte-dttnzg{grid-area:title;width:100%;font-size:1.1rem;font-weight:bold;display:grid;align-items:center;justify-items:stretch}.content.svelte-dttnzg{grid-area:content;font-size:1rem}.stamp.svelte-dttnzg{font-size:0.75rem;text-align:right}');
}
function zt(r) {
  let e, n;
  return {
    c() {
      e = y("div"), n = oe(
        /*timestamp*/
        r[2]
      ), w(e, "class", "stamp svelte-dttnzg"), ne(e, "grid-row", 1);
    },
    m(s, t) {
      b(s, e, t), R(e, n);
    },
    p(s, t) {
      t & /*timestamp*/
      4 && we(
        n,
        /*timestamp*/
        s[2]
      );
    },
    d(s) {
      s && m(e);
    }
  };
}
function er(r) {
  let e, n, s, t, i, l, a, o, c, u, h = (
    /*timestamp*/
    r[2] && zt(r)
  );
  return o = new Xi({ props: { source: (
    /*content*/
    r[0]
  ) } }), {
    c() {
      e = y("div"), n = y("div"), s = y("div"), t = oe(
        /*name*/
        r[5]
      ), i = W(), h && h.c(), l = W(), a = y("div"), T(o.$$.fragment), ne(s, "grid-row", 1), w(n, "class", "title svelte-dttnzg"), w(a, "class", "content svelte-dttnzg"), w(e, "class", "container svelte-dttnzg"), it(
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
      b(f, e, d), R(e, n), R(n, s), R(s, t), R(n, i), h && h.m(n, null), R(e, l), R(e, a), x(o, a, null), r[8](e), u = !0;
    },
    p(f, [d]) {
      (!u || d & /*name*/
      32) && we(
        t,
        /*name*/
        f[5]
      ), /*timestamp*/
      f[2] ? h ? h.p(f, d) : (h = zt(f), h.c(), h.m(n, null)) : h && (h.d(1), h = null);
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
        c = Nt(e, Yi, { duration: 300 }), c.start();
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
function tr(r, e, n) {
  let s, t, { role: i } = e, { content: l } = e, { timestamp: a = void 0 } = e, { isLast: o = !1 } = e;
  const c = (f) => n(0, l = f), u = (f) => n(0, l += f);
  function h(f) {
    le[f ? "unshift" : "push"](() => {
      t = f, n(4, t);
    });
  }
  return r.$$set = (f) => {
    "role" in f && n(1, i = f.role), "content" in f && n(0, l = f.content), "timestamp" in f && n(2, a = f.timestamp), "isLast" in f && n(3, o = f.isLast);
  }, r.$$.update = () => {
    r.$$.dirty & /*role*/
    2 && n(5, s = i === "assistant" ? "Assistant" : "You");
  }, [
    l,
    i,
    a,
    o,
    t,
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
      tr,
      er,
      I,
      {
        role: 1,
        content: 0,
        timestamp: 2,
        isLast: 3,
        update: 6,
        append: 7
      },
      Vi
    );
  }
  get update() {
    return this.$$.ctx[6];
  }
  get append() {
    return this.$$.ctx[7];
  }
}
function nr(r) {
  pe(r, "svelte-1dj2ob3", ".container.svelte-1dj2ob3{max-height:100%;overflow-y:scroll}");
}
function Tt(r, e, n) {
  const s = r.slice();
  return s[14] = e[n].role, s[15] = e[n].content, s[16] = e[n].timestamp, s[18] = n, s;
}
function sr(r) {
  let e, n;
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
    m(s, t) {
      x(e, s, t), n = !0;
    },
    p(s, t) {
      const i = {};
      t & /*messages*/
      1 && (i.role = /*role*/
      s[14]), t & /*messages*/
      1 && (i.content = /*content*/
      s[15]), t & /*messages*/
      1 && (i.timestamp = /*timestamp*/
      s[16]), e.$set(i);
    },
    i(s) {
      n || (p(e.$$.fragment, s), n = !0);
    },
    o(s) {
      g(e.$$.fragment, s), n = !1;
    },
    d(s) {
      z(e, s);
    }
  };
}
function ir(r) {
  let e, n, s = {
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
    m(t, i) {
      x(e, t, i), n = !0;
    },
    p(t, i) {
      const l = {};
      i & /*messages*/
      1 && (l.role = /*role*/
      t[14]), i & /*messages*/
      1 && (l.content = /*content*/
      t[15]), i & /*messages*/
      1 && (l.timestamp = /*timestamp*/
      t[16]), e.$set(l);
    },
    i(t) {
      n || (p(e.$$.fragment, t), n = !0);
    },
    o(t) {
      g(e.$$.fragment, t), n = !1;
    },
    d(t) {
      r[10](null), z(e, t);
    }
  };
}
function St(r) {
  let e, n, s, t;
  const i = [ir, sr], l = [];
  function a(o, c) {
    return (
      /*index*/
      o[18] === /*messages*/
      o[0].length - 1 ? 0 : 1
    );
  }
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), t = !0;
    },
    p(o, c) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), n = l[e], n ? n.p(o, c) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
    },
    i(o) {
      t || (p(n), t = !0);
    },
    o(o) {
      g(n), t = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function rr(r) {
  let e, n, s, t, i = G(
    /*messages*/
    r[0]
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
      n = W(), s = y("div"), w(e, "class", "container svelte-1dj2ob3");
    },
    m(o, c) {
      b(o, e, c);
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(e, null);
      R(e, n), R(e, s), r[11](s), r[12](e), t = !0;
    },
    p(o, [c]) {
      if (c & /*messages, lastMessage*/
      3) {
        i = G(
          /*messages*/
          o[0]
        );
        let u;
        for (u = 0; u < i.length; u += 1) {
          const h = Tt(o, i, u);
          l[u] ? (l[u].p(h, c), p(l[u], 1)) : (l[u] = St(h), l[u].c(), p(l[u], 1), l[u].m(e, n));
        }
        for (E(), u = i.length; u < l.length; u += 1)
          a(u);
        N();
      }
    },
    i(o) {
      if (!t) {
        for (let c = 0; c < i.length; c += 1)
          p(l[c]);
        t = !0;
      }
    },
    o(o) {
      l = l.filter(Boolean);
      for (let c = 0; c < l.length; c += 1)
        g(l[c]);
      t = !1;
    },
    d(o) {
      o && m(e), de(l, o), r[11](null), r[12](null);
    }
  };
}
function lr(r, e, n) {
  let { messages: s = [] } = e, t, i, l;
  const a = () => i.scrollTo(0, l.offsetTop), o = () => s, c = () => s[s.length - 1], u = ($) => (In($), a(), $), h = ($) => {
    qn($), a();
  }, f = ($) => {
    Mn($), a();
  }, d = () => {
    jt(), a();
  };
  Ze(() => {
    const $ = Re.subscribe((H) => {
      n(0, s = H);
    });
    return () => $();
  });
  function k($) {
    le[$ ? "unshift" : "push"](() => {
      t = $, n(1, t);
    });
  }
  function S($) {
    le[$ ? "unshift" : "push"](() => {
      l = $, n(3, l);
    });
  }
  function U($) {
    le[$ ? "unshift" : "push"](() => {
      i = $, n(2, i);
    });
  }
  return r.$$set = ($) => {
    "messages" in $ && n(0, s = $.messages);
  }, [
    s,
    t,
    i,
    l,
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
class or extends M {
  constructor(e) {
    super(), q(
      this,
      e,
      lr,
      rr,
      I,
      {
        messages: 0,
        getAll: 4,
        getLast: 5,
        addMessage: 6,
        updateLastMessageContent: 7,
        appendLastMessageContent: 8,
        clearMessages: 9
      },
      nr
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
function ar(r) {
  pe(r, "svelte-ql0rni", `.container.svelte-ql0rni{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;width:400px;max-height:95vh;row-gap:10px;z-index:2000}.row.svelte-ql0rni{border:1px solid #ddd;border-radius:10px;box-shadow:rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #ddd 0 -3px 0 inset}`);
}
function cr(r) {
  let e, n, s, t, i, l, a, o, c, u, h, f;
  t = new On({}), t.$on(
    "click",
    /*click_handler*/
    r[5]
  );
  let d = {};
  return a = new or({ props: d }), r[6](a), u = new Nn({}), u.$on(
    "send",
    /*send*/
    r[2]
  ), {
    c() {
      e = y("div"), n = y("div"), s = y("div"), T(t.$$.fragment), i = W(), l = y("div"), T(a.$$.fragment), o = W(), c = y("div"), T(u.$$.fragment), w(n, "class", "row svelte-ql0rni"), w(c, "class", "row svelte-ql0rni"), w(e, "class", "container svelte-ql0rni");
    },
    m(k, S) {
      b(k, e, S), R(e, n), R(n, s), x(t, s, null), R(n, i), R(n, l), x(a, l, null), R(e, o), R(e, c), x(u, c, null), f = !0;
    },
    p(k, [S]) {
      const U = {};
      a.$set(U);
    },
    i(k) {
      f || (p(t.$$.fragment, k), p(a.$$.fragment, k), p(u.$$.fragment, k), k && (h || ue(() => {
        h = Nt(e, Ki, { duration: 100 }), h.start();
      })), f = !0);
    },
    o(k) {
      g(t.$$.fragment, k), g(a.$$.fragment, k), g(u.$$.fragment, k), f = !1;
    },
    d(k) {
      k && m(e), z(t), r[6](null), z(a), z(u);
    }
  };
}
function ur(r, e, n) {
  let { initialMessage: s } = e, { configuration: t } = e;
  const i = Ye();
  let l;
  const a = async (u) => {
    const h = l.addMessage({
      sender: "Student",
      role: "user",
      content: u.detail.message,
      timestamp: Ne()
    });
    await Pt(h, t), await Sn(l.getAll(), t, (f) => l.addMessage(f), (f) => l.appendLastMessageContent(f)), u.detail.onResponse();
  };
  Ze(() => {
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
      l = u, n(0, l);
    });
  }
  return r.$$set = (u) => {
    "initialMessage" in u && n(3, s = u.initialMessage), "configuration" in u && n(4, t = u.configuration);
  }, [
    l,
    i,
    a,
    s,
    t,
    o,
    c
  ];
}
class fr extends M {
  constructor(e) {
    super(), q(this, e, ur, cr, I, { initialMessage: 3, configuration: 4 }, ar);
  }
}
function hr(r) {
  pe(r, "svelte-6ny3hj", "section.svelte-6ny3hj{user-select:none;cursor:move;position:fixed}section.svelte-6ny3hj:focus{outline:none}");
}
function pr(r) {
  let e, n, s, t;
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
      b(a, e, o), l && l.m(e, null), n = !0, s || (t = [
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
      l && l.p && (!n || o & /*$$scope*/
      128) && D(
        l,
        i,
        a,
        /*$$scope*/
        a[7],
        n ? O(
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
      ), (!n || o & /*right*/
      1) && ne(
        e,
        "right",
        /*right*/
        a[0] + "px"
      ), (!n || o & /*bottom*/
      2) && ne(
        e,
        "bottom",
        /*bottom*/
        a[1] + "px"
      );
    },
    i(a) {
      n || (p(l, a), n = !0);
    },
    o(a) {
      g(l, a), n = !1;
    },
    d(a) {
      a && m(e), l && l.d(a), s = !1, he(t);
    }
  };
}
const dr = 2;
function gr(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e, { right: i = 100 } = e, { bottom: l = 100 } = e, a = !1, o;
  const c = () => Math.sqrt(Math.pow(i - o.left, 2) + Math.pow(l - o.bottom, 2)), u = () => c() >= dr;
  function h() {
    a = !0, o = { left: i, bottom: l };
  }
  function f(k) {
    a && (n(0, i -= k.movementX), n(1, l -= k.movementY));
  }
  function d() {
    a = !1;
  }
  return r.$$set = (k) => {
    "right" in k && n(0, i = k.right), "bottom" in k && n(1, l = k.bottom), "$$scope" in k && n(7, t = k.$$scope);
  }, [
    i,
    l,
    h,
    f,
    d,
    c,
    u,
    t,
    s
  ];
}
class mr extends M {
  constructor(e) {
    super(), q(
      this,
      e,
      gr,
      pr,
      I,
      {
        right: 0,
        bottom: 1,
        distance: 5,
        moved: 6
      },
      hr
    );
  }
  get distance() {
    return this.$$.ctx[5];
  }
  get moved() {
    return this.$$.ctx[6];
  }
}
function _r(r) {
  let e, n;
  return e = new vn({}), e.$on(
    "click",
    /*openWindow*/
    r[4]
  ), {
    c() {
      T(e.$$.fragment);
    },
    m(s, t) {
      x(e, s, t), n = !0;
    },
    p: A,
    i(s) {
      n || (p(e.$$.fragment, s), n = !0);
    },
    o(s) {
      g(e.$$.fragment, s), n = !1;
    },
    d(s) {
      z(e, s);
    }
  };
}
function br(r) {
  let e, n;
  return e = new fr({
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
    m(s, t) {
      x(e, s, t), n = !0;
    },
    p(s, t) {
      const i = {};
      t & /*messageToUser*/
      8 && (i.initialMessage = /*messageToUser*/
      s[3]), t & /*configuration*/
      1 && (i.configuration = /*configuration*/
      s[0]), e.$set(i);
    },
    i(s) {
      n || (p(e.$$.fragment, s), n = !0);
    },
    o(s) {
      g(e.$$.fragment, s), n = !1;
    },
    d(s) {
      z(e, s);
    }
  };
}
function kr(r) {
  let e, n, s, t;
  const i = [br, _r], l = [];
  function a(o, c) {
    return (
      /*opened*/
      o[1] ? 0 : 1
    );
  }
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = P();
    },
    m(o, c) {
      l[e].m(o, c), b(o, s, c), t = !0;
    },
    p(o, c) {
      let u = e;
      e = a(o), e === u ? l[e].p(o, c) : (E(), g(l[u], 1, 1, () => {
        l[u] = null;
      }), N(), n = l[e], n ? n.p(o, c) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
    },
    i(o) {
      t || (p(n), t = !0);
    },
    o(o) {
      g(n), t = !1;
    },
    d(o) {
      o && m(s), l[e].d(o);
    }
  };
}
function $r(r) {
  let e, n, s = {
    $$slots: { default: [kr] },
    $$scope: { ctx: r }
  };
  return e = new mr({ props: s }), r[6](e), {
    c() {
      T(e.$$.fragment);
    },
    m(t, i) {
      x(e, t, i), n = !0;
    },
    p(t, [i]) {
      const l = {};
      i & /*$$scope, messageToUser, configuration, opened*/
      267 && (l.$$scope = { dirty: i, ctx: t }), e.$set(l);
    },
    i(t) {
      n || (p(e.$$.fragment, t), n = !0);
    },
    o(t) {
      g(e.$$.fragment, t), n = !1;
    },
    d(t) {
      r[6](null), z(e, t);
    }
  };
}
function wr(r, e, n) {
  let { configuration: s } = e, t = !1, i, l = "Welcome";
  const a = async () => {
    i.moved() || n(1, t = !0);
  }, o = async () => {
    i.moved() || (n(1, t = !1), n(3, l = ""));
  };
  function c(u) {
    le[u ? "unshift" : "push"](() => {
      i = u, n(2, i);
    });
  }
  return r.$$set = (u) => {
    "configuration" in u && n(0, s = u.configuration);
  }, [
    s,
    t,
    i,
    l,
    a,
    o,
    c
  ];
}
class xr extends M {
  constructor(e) {
    super(), q(this, e, wr, $r, I, { configuration: 0 });
  }
}
export {
  xr as default
};
