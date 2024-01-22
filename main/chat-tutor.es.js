var Ut = Object.defineProperty;
var Ft = (r, e, n) => e in r ? Ut(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var U = (r, e, n) => (Ft(r, typeof e != "symbol" ? e + "" : e, n), n), Ht = (r, e, n) => {
  if (!e.has(r))
    throw TypeError("Cannot " + n);
};
var De = (r, e, n) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, n);
};
var Se = (r, e, n) => (Ht(r, e, "access private method"), n);
function L() {
}
const Qt = (r) => r;
function ie(r, e) {
  for (const n in e)
    r[n] = e[n];
  return (
    /** @type {T & S} */
    r
  );
}
function zt(r) {
  return r();
}
function Ke() {
  return /* @__PURE__ */ Object.create(null);
}
function he(r) {
  r.forEach(zt);
}
function He(r) {
  return typeof r == "function";
}
function I(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
let Re;
function et(r, e) {
  return r === e ? !0 : (Re || (Re = document.createElement("a")), Re.href = e, r === Re.href);
}
function Wt(r) {
  return Object.keys(r).length === 0;
}
function q(r, e, n, s) {
  if (r) {
    const t = Tt(r, e, n, s);
    return r[0](t);
  }
}
function Tt(r, e, n, s) {
  return r[1] && s ? ie(n.ctx.slice(), r[1](s(e))) : n.ctx;
}
function D(r, e, n, s) {
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
function j(r, e, n, s, t, i) {
  if (t) {
    const l = Tt(e, n, s, i);
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
function Gt(r) {
  const e = {};
  for (const n in r)
    n[0] !== "$" && (e[n] = r[n]);
  return e;
}
function tt(r, e) {
  const n = {};
  e = new Set(e);
  for (const s in r)
    !e.has(s) && s[0] !== "$" && (n[s] = r[s]);
  return n;
}
const St = typeof window < "u";
let Jt = St ? () => window.performance.now() : () => Date.now(), Qe = St ? (r) => requestAnimationFrame(r) : L;
const ke = /* @__PURE__ */ new Set();
function Rt(r) {
  ke.forEach((e) => {
    e.c(r) || (ke.delete(e), e.f());
  }), ke.size !== 0 && Qe(Rt);
}
function Xt(r) {
  let e;
  return ke.size === 0 && Qe(Rt), {
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
  const s = We(r);
  if (!s.getElementById(e)) {
    const t = w("style");
    t.id = e, t.textContent = n, It(s, t);
  }
}
function We(r) {
  if (!r)
    return document;
  const e = r.getRootNode ? r.getRootNode() : r.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : r.ownerDocument;
}
function Yt(r) {
  const e = w("style");
  return e.textContent = "/* empty */", It(We(r), e), e.sheet;
}
function It(r, e) {
  return R(
    /** @type {Document} */
    r.head || r,
    e
  ), e.sheet;
}
function k(r, e, n) {
  r.insertBefore(e, n || null);
}
function m(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function de(r, e) {
  for (let n = 0; n < r.length; n += 1)
    r[n] && r[n].d(e);
}
function w(r) {
  return document.createElement(r);
}
function Vt(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function re(r) {
  return document.createTextNode(r);
}
function W() {
  return re(" ");
}
function B() {
  return re("");
}
function ae(r, e, n, s) {
  return r.addEventListener(e, n, s), () => r.removeEventListener(e, n, s);
}
function $(r, e, n) {
  n == null ? r.removeAttribute(e) : r.getAttribute(e) !== n && r.setAttribute(e, n);
}
function Kt(r) {
  return Array.from(r.childNodes);
}
function $e(r, e) {
  e = "" + e, r.data !== e && (r.data = /** @type {string} */
  e);
}
function ne(r, e, n, s) {
  n == null ? r.style.removeProperty(e) : r.style.setProperty(e, n, s ? "important" : "");
}
function At(r, e, { bubbles: n = !1, cancelable: s = !1 } = {}) {
  return new CustomEvent(r, { detail: e, bubbles: n, cancelable: s });
}
class en {
  constructor(e = !1) {
    /**
     * @private
     * @default false
     */
    U(this, "is_svg", !1);
    /** parent for creating node */
    U(this, "e");
    /** html tag nodes */
    U(this, "n");
    /** target */
    U(this, "t");
    /** anchor */
    U(this, "a");
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
    this.e || (this.is_svg ? this.e = Vt(
      /** @type {keyof SVGElementTagNameMap} */
      n.nodeName
    ) : this.e = w(
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
      k(this.t, this.n[n], e);
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
function O(r, e) {
  return new r(e);
}
const Ce = /* @__PURE__ */ new Map();
let Ee = 0;
function tn(r) {
  let e = 5381, n = r.length;
  for (; n--; )
    e = (e << 5) - e ^ r.charCodeAt(n);
  return e >>> 0;
}
function nn(r, e) {
  const n = { stylesheet: Yt(e), rules: {} };
  return Ce.set(r, n), n;
}
function sn(r, e, n, s, t, i, l, a = 0) {
  const o = 16.666 / s;
  let f = `{
`;
  for (let F = 0; F <= 1; F += o) {
    const x = e + (n - e) * i(F);
    f += F * 100 + `%{${l(x, 1 - x)}}
`;
  }
  const c = f + `100% {${l(n, 1 - n)}}
}`, u = `__svelte_${tn(c)}_${a}`, h = We(r), { stylesheet: d, rules: b } = Ce.get(h) || nn(h, r);
  b[u] || (b[u] = !0, d.insertRule(`@keyframes ${u} ${c}`, d.cssRules.length));
  const v = r.style.animation || "";
  return r.style.animation = `${v ? `${v}, ` : ""}${u} ${s}ms linear ${t}ms 1 both`, Ee += 1, u;
}
function nt(r, e) {
  const n = (r.style.animation || "").split(", "), s = n.filter(
    e ? (i) => i.indexOf(e) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), t = n.length - s.length;
  t && (r.style.animation = s.join(", "), Ee -= t, Ee || rn());
}
function rn() {
  Qe(() => {
    Ee || (Ce.forEach((r) => {
      const { ownerNode: e } = r.stylesheet;
      e && m(e);
    }), Ce.clear());
  });
}
let ze;
function ve(r) {
  ze = r;
}
function Oe() {
  if (!ze)
    throw new Error("Function called outside component initialization");
  return ze;
}
function Ge(r) {
  Oe().$$.on_mount.push(r);
}
function Je() {
  const r = Oe();
  return (e, n, { cancelable: s = !1 } = {}) => {
    const t = r.$$.callbacks[e];
    if (t) {
      const i = At(
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
function ln(r, e) {
  return Oe().$$.context.set(r, e), e;
}
function on(r) {
  return Oe().$$.context.get(r);
}
function Mt(r, e) {
  const n = r.$$.callbacks[e.type];
  n && n.slice().forEach((s) => s.call(this, e));
}
const _e = [], fe = [];
let be = [];
const st = [], an = /* @__PURE__ */ Promise.resolve();
let Ze = !1;
function fn() {
  Ze || (Ze = !0, an.then(Ct));
}
function ce(r) {
  be.push(r);
}
const je = /* @__PURE__ */ new Set();
let me = 0;
function Ct() {
  if (me !== 0)
    return;
  const r = ze;
  do {
    try {
      for (; me < _e.length; ) {
        const e = _e[me];
        me++, ve(e), cn(e.$$);
      }
    } catch (e) {
      throw _e.length = 0, me = 0, e;
    }
    for (ve(null), _e.length = 0, me = 0; fe.length; )
      fe.pop()();
    for (let e = 0; e < be.length; e += 1) {
      const n = be[e];
      je.has(n) || (je.add(n), n());
    }
    be.length = 0;
  } while (_e.length);
  for (; st.length; )
    st.pop()();
  Ze = !1, je.clear(), ve(r);
}
function cn(r) {
  if (r.fragment !== null) {
    r.update(), he(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(ce);
  }
}
function un(r) {
  const e = [], n = [];
  be.forEach((s) => r.indexOf(s) === -1 ? e.push(s) : n.push(s)), n.forEach((s) => s()), be = e;
}
let ye;
function hn() {
  return ye || (ye = Promise.resolve(), ye.then(() => {
    ye = null;
  })), ye;
}
function it(r, e, n) {
  r.dispatchEvent(At(`${e ? "intro" : "outro"}${n}`));
}
const Ae = /* @__PURE__ */ new Set();
let oe;
function N() {
  oe = {
    r: 0,
    c: [],
    p: oe
    // parent group
  };
}
function P() {
  oe.r || he(oe.c), oe = oe.p;
}
function p(r, e) {
  r && r.i && (Ae.delete(r), r.i(e));
}
function g(r, e, n, s) {
  if (r && r.o) {
    if (Ae.has(r))
      return;
    Ae.add(r), oe.c.push(() => {
      Ae.delete(r), s && (n && r.d(1), s());
    }), r.o(e);
  } else
    s && s();
}
const pn = { duration: 0 };
function Et(r, e, n) {
  const s = { direction: "in" };
  let t = e(r, n, s), i = !1, l, a, o = 0;
  function f() {
    l && nt(r, l);
  }
  function c() {
    const {
      delay: h = 0,
      duration: d = 300,
      easing: b = Qt,
      tick: v = L,
      css: F
    } = t || pn;
    F && (l = sn(r, 0, 1, d, h, b, F, o++)), v(0, 1);
    const x = Jt() + h, H = x + d;
    a && a.abort(), i = !0, ce(() => it(r, !0, "start")), a = Xt((K) => {
      if (i) {
        if (K >= H)
          return v(1, 0), it(r, !0, "end"), f(), i = !1;
        if (K >= x) {
          const J = b((K - x) / d);
          v(J, 1 - J);
        }
      }
      return i;
    });
  }
  let u = !1;
  return {
    start() {
      u || (u = !0, nt(r), He(t) ? (t = t(s), hn().then(c)) : c());
    },
    invalidate() {
      u = !1;
    },
    end() {
      i && (f(), i = !1);
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
function V(r) {
  return typeof r == "object" && r !== null ? r : {};
}
function S(r) {
  r && r.c();
}
function z(r, e, n) {
  const { fragment: s, after_update: t } = r.$$;
  s && s.m(e, n), ce(() => {
    const i = r.$$.on_mount.map(zt).filter(He);
    r.$$.on_destroy ? r.$$.on_destroy.push(...i) : he(i), r.$$.on_mount = [];
  }), t.forEach(ce);
}
function T(r, e) {
  const n = r.$$;
  n.fragment !== null && (un(n.after_update), he(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function dn(r, e) {
  r.$$.dirty[0] === -1 && (_e.push(r), fn(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function A(r, e, n, s, t, i, l = null, a = [-1]) {
  const o = ze;
  ve(r);
  const f = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: L,
    not_equal: t,
    bound: Ke(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Ke(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  l && l(f.root);
  let c = !1;
  if (f.ctx = n ? n(r, e.props || {}, (u, h, ...d) => {
    const b = d.length ? d[0] : h;
    return f.ctx && t(f.ctx[u], f.ctx[u] = b) && (!f.skip_bound && f.bound[u] && f.bound[u](b), c && dn(r, u)), h;
  }) : [], f.update(), c = !0, he(f.before_update), f.fragment = s ? s(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = Kt(e.target);
      f.fragment && f.fragment.l(u), u.forEach(m);
    } else
      f.fragment && f.fragment.c();
    e.intro && p(r.$$.fragment), z(r, e.target, e.anchor), Ct();
  }
  ve(o);
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
    U(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    U(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    T(this, 1), this.$destroy = L;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!He(n))
      return L;
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
    this.$$set && !Wt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const gn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(gn);
function mn(r) {
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
function _n(r) {
  let e, n, s, t, i;
  return {
    c() {
      e = w("link"), n = W(), s = w("button"), s.textContent = "ChatTutor", $(e, "rel", "stylesheet"), $(e, "href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"), $(s, "class", "svelte-20kqwa");
    },
    m(l, a) {
      R(document.head, e), k(l, n, a), k(l, s, a), t || (i = ae(
        s,
        "click",
        /*click_handler*/
        r[0]
      ), t = !0);
    },
    p: L,
    i: L,
    o: L,
    d(l) {
      l && (m(n), m(s)), m(e), t = !1, i();
    }
  };
}
function kn(r) {
  function e(n) {
    Mt.call(this, r, n);
  }
  return [e];
}
class bn extends M {
  constructor(e) {
    super(), A(this, e, kn, _n, I, {}, mn);
  }
}
function $n(r) {
  pe(r, "svelte-163f25f", '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");.container.svelte-163f25f.svelte-163f25f{font-family:"Rethink Sans", sans-serif;display:flex;padding:10px}span.svelte-163f25f.svelte-163f25f{font-size:15px !important;padding:0 !important;margin:0 !important;vertical-align:middle}.container.svelte-163f25f .svelte-163f25f{padding:10px;border:none;font-size:1em;border-radius:10px}.input.svelte-163f25f.svelte-163f25f{flex:1;background:#ddd;color:"black"}.send.svelte-163f25f.svelte-163f25f{margin-left:10px;background:rgb(140, 0, 255);color:#fff;font-weight:bold;cursor:pointer;transition:filter 0.23s;padding:10px;display:flex;flex-direction:row;justify-content:center;align-items:center;width:40px;height:40px;transition:background-color 0.23s}.send.svelte-163f25f.svelte-163f25f:hover{filter:saturate(180%)}.send.svelte-163f25f.svelte-163f25f:disabled{cursor:not-allowed;opacity:0.5}.clear.svelte-163f25f.svelte-163f25f{border:none;margin-left:10px;background:#ddd;color:black;font-weight:bold;cursor:pointer;transition:background-color 0.23s;display:flex;flex-direction:row;justify-content:center;align-items:center;width:40px;height:40px}.clear.svelte-163f25f.svelte-163f25f:hover{background-color:black;color:#ddd}.clear.svelte-163f25f.svelte-163f25f:disabled{cursor:not-allowed;opacity:0.5}');
}
function wn(r) {
  let e, n, s, t, i, l, a, o, f, c, u, h;
  return {
    c() {
      e = w("link"), n = W(), s = w("div"), t = w("div"), i = W(), l = w("button"), a = w("span"), a.textContent = "send", f = W(), c = w("button"), c.innerHTML = '<span class="material-symbols-outlined svelte-163f25f">delete_forever</span>', $(e, "rel", "stylesheet"), $(e, "href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"), $(t, "contenteditable", "true"), $(t, "class", "input svelte-163f25f"), /*innerText*/
      r[0] === void 0 && ce(() => (
        /*div0_input_handler*/
        r[4].call(t)
      )), $(a, "class", "material-symbols-outlined svelte-163f25f"), $(l, "class", "send svelte-163f25f"), l.disabled = o = !/*canSend*/
      r[1], $(c, "class", "clear svelte-163f25f"), $(s, "class", "container svelte-163f25f");
    },
    m(d, b) {
      R(document.head, e), k(d, n, b), k(d, s, b), R(s, t), /*innerText*/
      r[0] !== void 0 && (t.innerText = /*innerText*/
      r[0]), R(s, i), R(s, l), R(l, a), R(s, f), R(s, c), u || (h = [
        ae(
          t,
          "input",
          /*div0_input_handler*/
          r[4]
        ),
        ae(
          l,
          "click",
          /*send*/
          r[2]
        )
      ], u = !0);
    },
    p(d, [b]) {
      b & /*innerText*/
      1 && /*innerText*/
      d[0] !== t.innerText && (t.innerText = /*innerText*/
      d[0]), b & /*canSend*/
      2 && o !== (o = !/*canSend*/
      d[1]) && (l.disabled = o);
    },
    i: L,
    o: L,
    d(d) {
      d && (m(n), m(s)), m(e), u = !1, he(h);
    }
  };
}
function yn(r, e, n) {
  const s = Je();
  let t = "", i = !0;
  const l = () => {
    s("send", {
      message: t,
      onResponse: () => n(3, i = !0)
    }), n(0, t = ""), n(3, i = !1);
  };
  let a = !1;
  function o() {
    t = this.innerText, n(0, t);
  }
  return r.$$.update = () => {
    r.$$.dirty & /*innerText, messageReceived*/
    9 && n(1, a = !!t && t.length > 0 && i);
  }, [t, a, l, i, o];
}
class vn extends M {
  constructor(e) {
    super(), A(this, e, yn, wn, I, {}, $n);
  }
}
function xn(r) {
  pe(r, "svelte-191tpfn", '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");.container.svelte-191tpfn{font-family:"Rethink Sans", sans-serif;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;font-size:1.5rem;padding:0.5rem 1rem;border-bottom:2px solid lightgray}button.svelte-191tpfn{float:right;align-self:self-end;border-radius:10%}button.svelte-191tpfn:hover{background-color:lightgray}');
}
function zn(r) {
  let e, n, s, t, i, l, a, o, f, c;
  return {
    c() {
      e = w("link"), n = W(), s = w("div"), t = w("div"), t.textContent = "Chat Tutor", i = W(), l = w("div"), a = w("button"), o = w("span"), o.textContent = "close", $(e, "rel", "stylesheet"), $(e, "href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"), $(t, "class", "title"), $(o, "class", "material-symbols-outlined"), ne(o, "color", "red"), $(a, "class", "svelte-191tpfn"), ne(a, "border", "1px solid red"), $(l, "class", "close"), $(s, "class", "container svelte-191tpfn");
    },
    m(u, h) {
      R(document.head, e), k(u, n, h), k(u, s, h), R(s, t), R(s, i), R(s, l), R(l, a), R(a, o), f || (c = ae(
        a,
        "click",
        /*click_handler*/
        r[0]
      ), f = !0);
    },
    p: L,
    i: L,
    o: L,
    d(u) {
      u && (m(n), m(s)), m(e), f = !1, c();
    }
  };
}
function Tn(r) {
  function e(n) {
    Mt.call(this, r, n);
  }
  return [e];
}
class Sn extends M {
  constructor(e) {
    super(), A(this, e, Tn, zn, I, {}, xn);
  }
}
function Rn() {
  const r = console.warn;
  console.warn = (e) => {
    e.includes("unknown prop") || e.includes("unexpected slot") || r(e);
  }, Ge(() => {
    console.warn = r;
  });
}
function rt(r, e, n) {
  const s = r.slice();
  return s[18] = e[n], s;
}
function lt(r, e, n) {
  const s = r.slice();
  return s[18] = e[n], s;
}
function ot(r, e, n) {
  const s = r.slice();
  return s[10] = e[n], s;
}
function at(r, e, n) {
  const s = r.slice();
  return s[13] = e[n], s[15] = n, s;
}
function ft(r, e, n) {
  const s = r.slice();
  return s[16] = e[n], s[15] = n, s;
}
function ct(r, e, n) {
  const s = r.slice();
  return s[7] = e[n], s;
}
function In(r) {
  let e, n, s, t;
  const i = [En, Cn, Mn], l = [];
  function a(o, f) {
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
      n.c(), s = B();
    },
    m(o, f) {
      l[e].m(o, f), k(o, s, f), t = !0;
    },
    p(o, f) {
      let c = e;
      e = a(o), e === c ? l[e].p(o, f) : (N(), g(l[c], 1, 1, () => {
        l[c] = null;
      }), P(), n = l[e], n ? n.p(o, f) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
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
function An(r) {
  let e, n, s = G(
    /*tokens*/
    r[1]
  ), t = [];
  for (let l = 0; l < s.length; l += 1)
    t[l] = mt(ct(r, s, l));
  const i = (l) => g(t[l], 1, 1, () => {
    t[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      e = B();
    },
    m(l, a) {
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(l, a);
      k(l, e, a), n = !0;
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
          const f = ct(l, s, o);
          t[o] ? (t[o].p(f, a), p(t[o], 1)) : (t[o] = mt(f), t[o].c(), p(t[o], 1), t[o].m(e.parentNode, e));
        }
        for (N(), o = s.length; o < t.length; o += 1)
          i(o);
        P();
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
function Mn(r) {
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
    let f = {
      $$slots: { default: [Pn] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*$$restProps*/
    64)
      f = Y(t, [V(
        /*$$restProps*/
        a[6]
      )]);
    else
      for (let c = 0; c < t.length; c += 1)
        f = ie(f, t[c]);
    return { props: f };
  }
  return i && (e = O(i, l(r))), {
    c() {
      e && S(e.$$.fragment), n = B();
    },
    m(a, o) {
      e && z(e, a, o), k(a, n, o), s = !0;
    },
    p(a, o) {
      if (o & /*renderers, type*/
      33 && i !== (i = /*renderers*/
      a[5][
        /*type*/
        a[0]
      ])) {
        if (e) {
          N();
          const f = e;
          g(f.$$.fragment, 1, 0, () => {
            T(f, 1);
          }), P();
        }
        i ? (e = O(i, l(a, o)), S(e.$$.fragment), p(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (i) {
        const f = o & /*$$restProps*/
        64 ? Y(t, [V(
          /*$$restProps*/
          a[6]
        )]) : {};
        o & /*$$scope, tokens, renderers, $$restProps*/
        8388706 && (f.$$scope = { dirty: o, ctx: a }), e.$set(f);
      }
    },
    i(a) {
      s || (e && p(e.$$.fragment, a), s = !0);
    },
    o(a) {
      e && g(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && m(n), e && T(e, a);
    }
  };
}
function Cn(r) {
  let e, n, s, t;
  const i = [On, Bn], l = [];
  function a(o, f) {
    return (
      /*ordered*/
      o[4] ? 0 : 1
    );
  }
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = B();
    },
    m(o, f) {
      l[e].m(o, f), k(o, s, f), t = !0;
    },
    p(o, f) {
      let c = e;
      e = a(o), e === c ? l[e].p(o, f) : (N(), g(l[c], 1, 1, () => {
        l[c] = null;
      }), P(), n = l[e], n ? n.p(o, f) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
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
function En(r) {
  let e, n, s;
  var t = (
    /*renderers*/
    r[5].table
  );
  function i(l, a) {
    return {
      props: {
        $$slots: { default: [Jn] },
        $$scope: { ctx: l }
      }
    };
  }
  return t && (e = O(t, i(r))), {
    c() {
      e && S(e.$$.fragment), n = B();
    },
    m(l, a) {
      e && z(e, l, a), k(l, n, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && t !== (t = /*renderers*/
      l[5].table)) {
        if (e) {
          N();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            T(o, 1);
          }), P();
        }
        t ? (e = O(t, i(l)), S(e.$$.fragment), p(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
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
      l && m(n), e && T(e, l);
    }
  };
}
function Ln(r) {
  let e = (
    /*$$restProps*/
    r[6].raw + ""
  ), n;
  return {
    c() {
      n = re(e);
    },
    m(s, t) {
      k(s, n, t);
    },
    p(s, t) {
      t & /*$$restProps*/
      64 && e !== (e = /*$$restProps*/
      s[6].raw + "") && $e(n, e);
    },
    i: L,
    o: L,
    d(s) {
      s && m(n);
    }
  };
}
function Nn(r) {
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
      S(e.$$.fragment);
    },
    m(s, t) {
      z(e, s, t), n = !0;
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
      T(e, s);
    }
  };
}
function Pn(r) {
  let e, n, s, t;
  const i = [Nn, Ln], l = [];
  function a(o, f) {
    return (
      /*tokens*/
      o[1] ? 0 : 1
    );
  }
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = B();
    },
    m(o, f) {
      l[e].m(o, f), k(o, s, f), t = !0;
    },
    p(o, f) {
      let c = e;
      e = a(o), e === c ? l[e].p(o, f) : (N(), g(l[c], 1, 1, () => {
        l[c] = null;
      }), P(), n = l[e], n ? n.p(o, f) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
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
function Bn(r) {
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
    let f = {
      $$slots: { default: [Dn] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*ordered, $$restProps*/
    80)
      f = Y(t, [
        o & /*ordered*/
        16 && { ordered: (
          /*ordered*/
          a[4]
        ) },
        o & /*$$restProps*/
        64 && V(
          /*$$restProps*/
          a[6]
        )
      ]);
    else
      for (let c = 0; c < t.length; c += 1)
        f = ie(f, t[c]);
    return { props: f };
  }
  return i && (e = O(i, l(r))), {
    c() {
      e && S(e.$$.fragment), n = B();
    },
    m(a, o) {
      e && z(e, a, o), k(a, n, o), s = !0;
    },
    p(a, o) {
      if (o & /*renderers*/
      32 && i !== (i = /*renderers*/
      a[5].list)) {
        if (e) {
          N();
          const f = e;
          g(f.$$.fragment, 1, 0, () => {
            T(f, 1);
          }), P();
        }
        i ? (e = O(i, l(a, o)), S(e.$$.fragment), p(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (i) {
        const f = o & /*ordered, $$restProps*/
        80 ? Y(t, [
          o & /*ordered*/
          16 && { ordered: (
            /*ordered*/
            a[4]
          ) },
          o & /*$$restProps*/
          64 && V(
            /*$$restProps*/
            a[6]
          )
        ]) : {};
        o & /*$$scope, $$restProps, renderers*/
        8388704 && (f.$$scope = { dirty: o, ctx: a }), e.$set(f);
      }
    },
    i(a) {
      s || (e && p(e.$$.fragment, a), s = !0);
    },
    o(a) {
      e && g(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && m(n), e && T(e, a);
    }
  };
}
function On(r) {
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
    let f = {
      $$slots: { default: [Zn] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*ordered, $$restProps*/
    80)
      f = Y(t, [
        o & /*ordered*/
        16 && { ordered: (
          /*ordered*/
          a[4]
        ) },
        o & /*$$restProps*/
        64 && V(
          /*$$restProps*/
          a[6]
        )
      ]);
    else
      for (let c = 0; c < t.length; c += 1)
        f = ie(f, t[c]);
    return { props: f };
  }
  return i && (e = O(i, l(r))), {
    c() {
      e && S(e.$$.fragment), n = B();
    },
    m(a, o) {
      e && z(e, a, o), k(a, n, o), s = !0;
    },
    p(a, o) {
      if (o & /*renderers*/
      32 && i !== (i = /*renderers*/
      a[5].list)) {
        if (e) {
          N();
          const f = e;
          g(f.$$.fragment, 1, 0, () => {
            T(f, 1);
          }), P();
        }
        i ? (e = O(i, l(a, o)), S(e.$$.fragment), p(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (i) {
        const f = o & /*ordered, $$restProps*/
        80 ? Y(t, [
          o & /*ordered*/
          16 && { ordered: (
            /*ordered*/
            a[4]
          ) },
          o & /*$$restProps*/
          64 && V(
            /*$$restProps*/
            a[6]
          )
        ]) : {};
        o & /*$$scope, $$restProps, renderers*/
        8388704 && (f.$$scope = { dirty: o, ctx: a }), e.$set(f);
      }
    },
    i(a) {
      s || (e && p(e.$$.fragment, a), s = !0);
    },
    o(a) {
      e && g(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && m(n), e && T(e, a);
    }
  };
}
function qn(r) {
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
      S(e.$$.fragment), n = W();
    },
    m(t, i) {
      z(e, t, i), k(t, n, i), s = !0;
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
      t && m(n), T(e, t);
    }
  };
}
function ut(r) {
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
    let f = {
      $$slots: { default: [qn] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*$$restProps*/
    64)
      f = Y(t, [V(
        /*item*/
        a[18]
      )]);
    else
      for (let c = 0; c < t.length; c += 1)
        f = ie(f, t[c]);
    return { props: f };
  }
  return i && (e = O(i, l(r))), {
    c() {
      e && S(e.$$.fragment), n = B();
    },
    m(a, o) {
      e && z(e, a, o), k(a, n, o), s = !0;
    },
    p(a, o) {
      if (o & /*renderers*/
      32 && i !== (i = /*renderers*/
      a[5].unorderedlistitem || /*renderers*/
      a[5].listitem)) {
        if (e) {
          N();
          const f = e;
          g(f.$$.fragment, 1, 0, () => {
            T(f, 1);
          }), P();
        }
        i ? (e = O(i, l(a, o)), S(e.$$.fragment), p(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (i) {
        const f = o & /*$$restProps*/
        64 ? Y(t, [V(
          /*item*/
          a[18]
        )]) : {};
        o & /*$$scope, $$restProps, renderers*/
        8388704 && (f.$$scope = { dirty: o, ctx: a }), e.$set(f);
      }
    },
    i(a) {
      s || (e && p(e.$$.fragment, a), s = !0);
    },
    o(a) {
      e && g(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && m(n), e && T(e, a);
    }
  };
}
function Dn(r) {
  let e, n, s = G(
    /*$$restProps*/
    r[6].items
  ), t = [];
  for (let l = 0; l < s.length; l += 1)
    t[l] = ut(rt(r, s, l));
  const i = (l) => g(t[l], 1, 1, () => {
    t[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      e = B();
    },
    m(l, a) {
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(l, a);
      k(l, e, a), n = !0;
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
          const f = rt(l, s, o);
          t[o] ? (t[o].p(f, a), p(t[o], 1)) : (t[o] = ut(f), t[o].c(), p(t[o], 1), t[o].m(e.parentNode, e));
        }
        for (N(), o = s.length; o < t.length; o += 1)
          i(o);
        P();
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
function jn(r) {
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
      S(e.$$.fragment), n = W();
    },
    m(t, i) {
      z(e, t, i), k(t, n, i), s = !0;
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
      t && m(n), T(e, t);
    }
  };
}
function ht(r) {
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
    let f = {
      $$slots: { default: [jn] },
      $$scope: { ctx: a }
    };
    if (o !== void 0 && o & /*$$restProps*/
    64)
      f = Y(t, [V(
        /*item*/
        a[18]
      )]);
    else
      for (let c = 0; c < t.length; c += 1)
        f = ie(f, t[c]);
    return { props: f };
  }
  return i && (e = O(i, l(r))), {
    c() {
      e && S(e.$$.fragment), n = B();
    },
    m(a, o) {
      e && z(e, a, o), k(a, n, o), s = !0;
    },
    p(a, o) {
      if (o & /*renderers*/
      32 && i !== (i = /*renderers*/
      a[5].orderedlistitem || /*renderers*/
      a[5].listitem)) {
        if (e) {
          N();
          const f = e;
          g(f.$$.fragment, 1, 0, () => {
            T(f, 1);
          }), P();
        }
        i ? (e = O(i, l(a, o)), S(e.$$.fragment), p(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (i) {
        const f = o & /*$$restProps*/
        64 ? Y(t, [V(
          /*item*/
          a[18]
        )]) : {};
        o & /*$$scope, $$restProps, renderers*/
        8388704 && (f.$$scope = { dirty: o, ctx: a }), e.$set(f);
      }
    },
    i(a) {
      s || (e && p(e.$$.fragment, a), s = !0);
    },
    o(a) {
      e && g(e.$$.fragment, a), s = !1;
    },
    d(a) {
      a && m(n), e && T(e, a);
    }
  };
}
function Zn(r) {
  let e, n, s = G(
    /*$$restProps*/
    r[6].items
  ), t = [];
  for (let l = 0; l < s.length; l += 1)
    t[l] = ht(lt(r, s, l));
  const i = (l) => g(t[l], 1, 1, () => {
    t[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      e = B();
    },
    m(l, a) {
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(l, a);
      k(l, e, a), n = !0;
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
          const f = lt(l, s, o);
          t[o] ? (t[o].p(f, a), p(t[o], 1)) : (t[o] = ht(f), t[o].c(), p(t[o], 1), t[o].m(e.parentNode, e));
        }
        for (N(), o = s.length; o < t.length; o += 1)
          i(o);
        P();
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
function Un(r) {
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
      S(e.$$.fragment), n = W();
    },
    m(t, i) {
      z(e, t, i), k(t, n, i), s = !0;
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
      t && m(n), T(e, t);
    }
  };
}
function pt(r) {
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
        $$slots: { default: [Un] },
        $$scope: { ctx: l }
      }
    };
  }
  return t && (e = O(t, i(r))), {
    c() {
      e && S(e.$$.fragment), n = B();
    },
    m(l, a) {
      e && z(e, l, a), k(l, n, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && t !== (t = /*renderers*/
      l[5].tablecell)) {
        if (e) {
          N();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            T(o, 1);
          }), P();
        }
        t ? (e = O(t, i(l)), S(e.$$.fragment), p(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
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
      l && m(n), e && T(e, l);
    }
  };
}
function Fn(r) {
  let e, n, s = G(
    /*header*/
    r[2]
  ), t = [];
  for (let l = 0; l < s.length; l += 1)
    t[l] = pt(ft(r, s, l));
  const i = (l) => g(t[l], 1, 1, () => {
    t[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      e = B();
    },
    m(l, a) {
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(l, a);
      k(l, e, a), n = !0;
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
          const f = ft(l, s, o);
          t[o] ? (t[o].p(f, a), p(t[o], 1)) : (t[o] = pt(f), t[o].c(), p(t[o], 1), t[o].m(e.parentNode, e));
        }
        for (N(), o = s.length; o < t.length; o += 1)
          i(o);
        P();
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
function Hn(r) {
  let e, n, s;
  var t = (
    /*renderers*/
    r[5].tablerow
  );
  function i(l, a) {
    return {
      props: {
        $$slots: { default: [Fn] },
        $$scope: { ctx: l }
      }
    };
  }
  return t && (e = O(t, i(r))), {
    c() {
      e && S(e.$$.fragment), n = B();
    },
    m(l, a) {
      e && z(e, l, a), k(l, n, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && t !== (t = /*renderers*/
      l[5].tablerow)) {
        if (e) {
          N();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            T(o, 1);
          }), P();
        }
        t ? (e = O(t, i(l)), S(e.$$.fragment), p(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
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
      l && m(n), e && T(e, l);
    }
  };
}
function Qn(r) {
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
      S(e.$$.fragment);
    },
    m(s, t) {
      z(e, s, t), n = !0;
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
      T(e, s);
    }
  };
}
function dt(r) {
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
        $$slots: { default: [Qn] },
        $$scope: { ctx: l }
      }
    };
  }
  return t && (e = O(t, i(r))), {
    c() {
      e && S(e.$$.fragment), n = B();
    },
    m(l, a) {
      e && z(e, l, a), k(l, n, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && t !== (t = /*renderers*/
      l[5].tablecell)) {
        if (e) {
          N();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            T(o, 1);
          }), P();
        }
        t ? (e = O(t, i(l)), S(e.$$.fragment), p(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
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
      l && m(n), e && T(e, l);
    }
  };
}
function Wn(r) {
  let e, n, s = G(
    /*row*/
    r[10]
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
      e = W();
    },
    m(l, a) {
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(l, a);
      k(l, e, a), n = !0;
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
          const f = at(l, s, o);
          t[o] ? (t[o].p(f, a), p(t[o], 1)) : (t[o] = dt(f), t[o].c(), p(t[o], 1), t[o].m(e.parentNode, e));
        }
        for (N(), o = s.length; o < t.length; o += 1)
          i(o);
        P();
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
function gt(r) {
  let e, n, s;
  var t = (
    /*renderers*/
    r[5].tablerow
  );
  function i(l, a) {
    return {
      props: {
        $$slots: { default: [Wn] },
        $$scope: { ctx: l }
      }
    };
  }
  return t && (e = O(t, i(r))), {
    c() {
      e && S(e.$$.fragment), n = B();
    },
    m(l, a) {
      e && z(e, l, a), k(l, n, a), s = !0;
    },
    p(l, a) {
      if (a & /*renderers*/
      32 && t !== (t = /*renderers*/
      l[5].tablerow)) {
        if (e) {
          N();
          const o = e;
          g(o.$$.fragment, 1, 0, () => {
            T(o, 1);
          }), P();
        }
        t ? (e = O(t, i(l)), S(e.$$.fragment), p(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
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
      l && m(n), e && T(e, l);
    }
  };
}
function Gn(r) {
  let e, n, s = G(
    /*rows*/
    r[3]
  ), t = [];
  for (let l = 0; l < s.length; l += 1)
    t[l] = gt(ot(r, s, l));
  const i = (l) => g(t[l], 1, 1, () => {
    t[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      e = B();
    },
    m(l, a) {
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(l, a);
      k(l, e, a), n = !0;
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
          const f = ot(l, s, o);
          t[o] ? (t[o].p(f, a), p(t[o], 1)) : (t[o] = gt(f), t[o].c(), p(t[o], 1), t[o].m(e.parentNode, e));
        }
        for (N(), o = s.length; o < t.length; o += 1)
          i(o);
        P();
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
function Jn(r) {
  let e, n, s, t, i;
  var l = (
    /*renderers*/
    r[5].tablehead
  );
  function a(c, u) {
    return {
      props: {
        $$slots: { default: [Hn] },
        $$scope: { ctx: c }
      }
    };
  }
  l && (e = O(l, a(r)));
  var o = (
    /*renderers*/
    r[5].tablebody
  );
  function f(c, u) {
    return {
      props: {
        $$slots: { default: [Gn] },
        $$scope: { ctx: c }
      }
    };
  }
  return o && (s = O(o, f(r))), {
    c() {
      e && S(e.$$.fragment), n = W(), s && S(s.$$.fragment), t = B();
    },
    m(c, u) {
      e && z(e, c, u), k(c, n, u), s && z(s, c, u), k(c, t, u), i = !0;
    },
    p(c, u) {
      if (u & /*renderers*/
      32 && l !== (l = /*renderers*/
      c[5].tablehead)) {
        if (e) {
          N();
          const h = e;
          g(h.$$.fragment, 1, 0, () => {
            T(h, 1);
          }), P();
        }
        l ? (e = O(l, a(c)), S(e.$$.fragment), p(e.$$.fragment, 1), z(e, n.parentNode, n)) : e = null;
      } else if (l) {
        const h = {};
        u & /*$$scope, renderers, header, $$restProps*/
        8388708 && (h.$$scope = { dirty: u, ctx: c }), e.$set(h);
      }
      if (u & /*renderers*/
      32 && o !== (o = /*renderers*/
      c[5].tablebody)) {
        if (s) {
          N();
          const h = s;
          g(h.$$.fragment, 1, 0, () => {
            T(h, 1);
          }), P();
        }
        o ? (s = O(o, f(c)), S(s.$$.fragment), p(s.$$.fragment, 1), z(s, t.parentNode, t)) : s = null;
      } else if (o) {
        const h = {};
        u & /*$$scope, rows, renderers, $$restProps*/
        8388712 && (h.$$scope = { dirty: u, ctx: c }), s.$set(h);
      }
    },
    i(c) {
      i || (e && p(e.$$.fragment, c), s && p(s.$$.fragment, c), i = !0);
    },
    o(c) {
      e && g(e.$$.fragment, c), s && g(s.$$.fragment, c), i = !1;
    },
    d(c) {
      c && (m(n), m(t)), e && T(e, c), s && T(s, c);
    }
  };
}
function mt(r) {
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
    t = ie(t, s[i]);
  return e = new ge({ props: t }), {
    c() {
      S(e.$$.fragment);
    },
    m(i, l) {
      z(e, i, l), n = !0;
    },
    p(i, l) {
      const a = l & /*tokens, renderers*/
      34 ? Y(s, [
        l & /*tokens*/
        2 && V(
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
      T(e, i);
    }
  };
}
function Xn(r) {
  let e, n, s, t;
  const i = [An, In], l = [];
  function a(o, f) {
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
      n && n.c(), s = B();
    },
    m(o, f) {
      ~e && l[e].m(o, f), k(o, s, f), t = !0;
    },
    p(o, [f]) {
      let c = e;
      e = a(o), e === c ? ~e && l[e].p(o, f) : (n && (N(), g(l[c], 1, 1, () => {
        l[c] = null;
      }), P()), ~e ? (n = l[e], n ? n.p(o, f) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s)) : n = null);
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
function Yn(r, e, n) {
  const s = ["type", "tokens", "header", "rows", "ordered", "renderers"];
  let t = tt(e, s), { type: i = void 0 } = e, { tokens: l = void 0 } = e, { header: a = void 0 } = e, { rows: o = void 0 } = e, { ordered: f = !1 } = e, { renderers: c } = e;
  return Rn(), r.$$set = (u) => {
    e = ie(ie({}, e), Gt(u)), n(6, t = tt(e, s)), "type" in u && n(0, i = u.type), "tokens" in u && n(1, l = u.tokens), "header" in u && n(2, a = u.header), "rows" in u && n(3, o = u.rows), "ordered" in u && n(4, f = u.ordered), "renderers" in u && n(5, c = u.renderers);
  }, [i, l, a, o, f, c, t];
}
let ge = class extends M {
  constructor(e) {
    super(), A(this, e, Yn, Xn, I, {
      type: 0,
      tokens: 1,
      header: 2,
      rows: 3,
      ordered: 4,
      renderers: 5
    });
  }
};
function Xe() {
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
let le = Xe();
function Lt(r) {
  le = r;
}
const Nt = /[&<>"']/, Vn = new RegExp(Nt.source, "g"), Pt = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Kn = new RegExp(Pt.source, "g"), es = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, _t = (r) => es[r];
function Q(r, e) {
  if (e) {
    if (Nt.test(r))
      return r.replace(Vn, _t);
  } else if (Pt.test(r))
    return r.replace(Kn, _t);
  return r;
}
const ts = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Bt(r) {
  return r.replace(ts, (e, n) => (n = n.toLowerCase(), n === "colon" ? ":" : n.charAt(0) === "#" ? n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1)) : ""));
}
const ns = /(^|[^\[])\^/g;
function C(r, e) {
  r = typeof r == "string" ? r : r.source, e = e || "";
  const n = {
    replace: (s, t) => (t = t.source || t, t = t.replace(ns, "$1"), r = r.replace(s, t), n),
    getRegex: () => new RegExp(r, e)
  };
  return n;
}
const ss = /[^\w:]/g, is = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function kt(r, e, n) {
  if (r) {
    let s;
    try {
      s = decodeURIComponent(Bt(n)).replace(ss, "").toLowerCase();
    } catch {
      return null;
    }
    if (s.indexOf("javascript:") === 0 || s.indexOf("vbscript:") === 0 || s.indexOf("data:") === 0)
      return null;
  }
  e && !is.test(n) && (n = as(e, n));
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const Ie = {}, rs = /^[^:]+:\/*[^/]*$/, ls = /^([^:]+:)[\s\S]*$/, os = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function as(r, e) {
  Ie[" " + r] || (rs.test(r) ? Ie[" " + r] = r + "/" : Ie[" " + r] = Me(r, "/", !0)), r = Ie[" " + r];
  const n = r.indexOf(":") === -1;
  return e.substring(0, 2) === "//" ? n ? e : r.replace(ls, "$1") + e : e.charAt(0) === "/" ? n ? e : r.replace(os, "$1") + e : r + e;
}
const Le = { exec: function() {
} };
function bt(r, e) {
  const n = r.replace(/\|/g, (i, l, a) => {
    let o = !1, f = l;
    for (; --f >= 0 && a[f] === "\\"; )
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
function Me(r, e, n) {
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
function fs(r, e) {
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
function cs(r, e) {
  !r || r.silent || (e && console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"), (r.sanitize || r.sanitizer) && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"), (r.highlight || r.langPrefix !== "language-") && console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."), r.mangle && console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."), r.baseUrl && console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."), r.smartypants && console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."), r.xhtml && console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."), (r.headerIds || r.headerPrefix) && console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."));
}
function $t(r, e, n, s) {
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
function us(r, e) {
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
class Ne {
  constructor(e) {
    this.options = e || le;
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
        text: this.options.pedantic ? s : Me(s, `
`)
      };
    }
  }
  fences(e) {
    const n = this.rules.block.fences.exec(e);
    if (n) {
      const s = n[0], t = us(s, n[3] || "");
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
        const t = Me(s, "#");
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
      let s, t, i, l, a, o, f, c, u, h, d, b, v = n[1].trim();
      const F = v.length > 1, x = {
        type: "list",
        raw: "",
        ordered: F,
        start: F ? +v.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      v = F ? `\\d{1,9}\\${v.slice(-1)}` : `\\${v}`, this.options.pedantic && (v = F ? v : "[*+-]");
      const H = new RegExp(`^( {0,3}${v})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      for (; e && (b = !1, !(!(n = H.exec(e)) || this.rules.block.hr.test(e))); ) {
        if (s = n[0], e = e.substring(s.length), c = n[2].split(`
`, 1)[0].replace(/^\t+/, (J) => " ".repeat(3 * J.length)), u = e.split(`
`, 1)[0], this.options.pedantic ? (l = 2, d = c.trimLeft()) : (l = n[2].search(/[^ ]/), l = l > 4 ? 1 : l, d = c.slice(l), l += n[1].length), o = !1, !c && /^ *$/.test(u) && (s += u + `
`, e = e.substring(u.length + 1), b = !0), !b) {
          const J = new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), ee = new RegExp(`^ {0,${Math.min(3, l - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), te = new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:\`\`\`|~~~)`), we = new RegExp(`^ {0,${Math.min(3, l - 1)}}#`);
          for (; e && (h = e.split(`
`, 1)[0], u = h, this.options.pedantic && (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !(te.test(u) || we.test(u) || J.test(u) || ee.test(e))); ) {
            if (u.search(/[^ ]/) >= l || !u.trim())
              d += `
` + u.slice(l);
            else {
              if (o || c.search(/[^ ]/) >= 4 || te.test(c) || we.test(c) || ee.test(c))
                break;
              d += `
` + u;
            }
            !o && !u.trim() && (o = !0), s += h + `
`, e = e.substring(h.length + 1), c = u.slice(l);
          }
        }
        x.loose || (f ? x.loose = !0 : /\n *\n *$/.test(s) && (f = !0)), this.options.gfm && (t = /^\[[ xX]\] /.exec(d), t && (i = t[0] !== "[ ] ", d = d.replace(/^\[[ xX]\] +/, ""))), x.items.push({
          type: "list_item",
          raw: s,
          task: !!t,
          checked: i,
          loose: !1,
          text: d
        }), x.raw += s;
      }
      x.items[x.items.length - 1].raw = s.trimRight(), x.items[x.items.length - 1].text = d.trimRight(), x.raw = x.raw.trimRight();
      const K = x.items.length;
      for (a = 0; a < K; a++)
        if (this.lexer.state.top = !1, x.items[a].tokens = this.lexer.blockTokens(x.items[a].text, []), !x.loose) {
          const J = x.items[a].tokens.filter((te) => te.type === "space"), ee = J.length > 0 && J.some((te) => /\n.*\n/.test(te.raw));
          x.loose = ee;
        }
      if (x.loose)
        for (a = 0; a < K; a++)
          x.items[a].loose = !0;
      return x;
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
        header: bt(n[1]).map((t) => ({ text: t })),
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
          s.rows[i] = bt(s.rows[i], s.header.length).map((f) => ({ text: f }));
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
        const l = Me(s.slice(0, -1), "\\");
        if ((s.length - l.length) % 2 === 0)
          return;
      } else {
        const l = fs(n[2], "()");
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
      return t = t.trim(), /^</.test(t) && (this.options.pedantic && !/>$/.test(s) ? t = t.slice(1) : t = t.slice(1, -1)), $t(n, {
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
      return $t(s, t, s[0], this.lexer);
    }
  }
  emStrong(e, n, s = "") {
    let t = this.rules.inline.emStrong.lDelim.exec(e);
    if (!t || t[3] && s.match(/[\p{L}\p{N}]/u))
      return;
    if (!(t[1] || t[2] || "") || !s || this.rules.inline.punctuation.exec(s)) {
      const l = t[0].length - 1;
      let a, o, f = l, c = 0;
      const u = t[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (u.lastIndex = 0, n = n.slice(-1 * e.length + l); (t = u.exec(n)) != null; ) {
        if (a = t[1] || t[2] || t[3] || t[4] || t[5] || t[6], !a)
          continue;
        if (o = a.length, t[3] || t[4]) {
          f += o;
          continue;
        } else if ((t[5] || t[6]) && l % 3 && !((l + o) % 3)) {
          c += o;
          continue;
        }
        if (f -= o, f > 0)
          continue;
        o = Math.min(o, o + f + c);
        const h = e.slice(0, l + t.index + o + 1);
        if (Math.min(l, o) % 2) {
          const b = h.slice(1, -1);
          return {
            type: "em",
            raw: h,
            text: b,
            tokens: this.lexer.inlineTokens(b)
          };
        }
        const d = h.slice(2, -2);
        return {
          type: "strong",
          raw: h,
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
const y = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: Le,
  lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
y._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
y._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
y.def = C(y.def).replace("label", y._label).replace("title", y._title).getRegex();
y.bullet = /(?:[*+-]|\d{1,9}[.)])/;
y.listItemStart = C(/^( *)(bull) */).replace("bull", y.bullet).getRegex();
y.list = C(y.list).replace(/bull/g, y.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + y.def.source + ")").getRegex();
y._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
y._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
y.html = C(y.html, "i").replace("comment", y._comment).replace("tag", y._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
y.lheading = C(y.lheading).replace(/bull/g, y.bullet).getRegex();
y.paragraph = C(y._paragraph).replace("hr", y.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", y._tag).getRegex();
y.blockquote = C(y.blockquote).replace("paragraph", y.paragraph).getRegex();
y.normal = { ...y };
y.gfm = {
  ...y.normal,
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  // Cells
};
y.gfm.table = C(y.gfm.table).replace("hr", y.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", y._tag).getRegex();
y.gfm.paragraph = C(y._paragraph).replace("hr", y.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", y.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", y._tag).getRegex();
y.pedantic = {
  ...y.normal,
  html: C(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", y._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Le,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: C(y.normal._paragraph).replace("hr", y.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", y.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
};
const _ = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: Le,
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
  del: Le,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^((?![*_])[\spunctuation])/
};
_._punctuation = "\\p{P}$+<=>`^|~";
_.punctuation = C(_.punctuation, "u").replace(/punctuation/g, _._punctuation).getRegex();
_.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
_.anyPunctuation = /\\[punct]/g;
_._escapes = /\\([punct])/g;
_._comment = C(y._comment).replace("(?:-->|$)", "-->").getRegex();
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
_.reflink = C(_.reflink).replace("label", _._label).replace("ref", y._label).getRegex();
_.nolink = C(_.nolink).replace("ref", y._label).getRegex();
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
function hs(r) {
  return r.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function wt(r) {
  let e = "", n, s;
  const t = r.length;
  for (n = 0; n < t; n++)
    s = r.charCodeAt(n), Math.random() > 0.5 && (s = "x" + s.toString(16)), e += "&#" + s + ";";
  return e;
}
class X {
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || le, this.options.tokenizer = this.options.tokenizer || new Ne(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      block: y.normal,
      inline: _.normal
    };
    this.options.pedantic ? (n.block = y.pedantic, n.inline = _.pedantic) : this.options.gfm && (n.block = y.gfm, this.options.breaks ? n.inline = _.breaks : n.inline = _.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: y,
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
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (a, o, f) => o + "    ".repeat(f.length));
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
          let f;
          this.options.extensions.startBlock.forEach(function(c) {
            f = c.call({ lexer: this }, o), typeof f == "number" && f >= 0 && (a = Math.min(a, f));
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
    let s, t, i, l = e, a, o, f;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null; )
          c.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l = l.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(l)) != null; )
      l = l.slice(0, a.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (o || (f = ""), o = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((c) => (s = c.call({ lexer: this }, e, n)) ? (e = e.substring(s.raw.length), n.push(s), !0) : !1))) {
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
        if (s = this.tokenizer.emStrong(e, l, f)) {
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
        if (s = this.tokenizer.autolink(e, wt)) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (!this.state.inLink && (s = this.tokenizer.url(e, wt))) {
          e = e.substring(s.raw.length), n.push(s);
          continue;
        }
        if (i = e, this.options.extensions && this.options.extensions.startInline) {
          let c = 1 / 0;
          const u = e.slice(1);
          let h;
          this.options.extensions.startInline.forEach(function(d) {
            h = d.call({ lexer: this }, u), typeof h == "number" && h >= 0 && (c = Math.min(c, h));
          }), c < 1 / 0 && c >= 0 && (i = e.substring(0, c + 1));
        }
        if (s = this.tokenizer.inlineText(i, hs)) {
          e = e.substring(s.raw.length), s.raw.slice(-1) !== "_" && (f = s.raw.slice(-1)), o = !0, t = n[n.length - 1], t && t.type === "text" ? (t.raw += s.raw, t.text += s.text) : n.push(s);
          continue;
        }
        if (e) {
          const c = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(c);
            break;
          } else
            throw new Error(c);
        }
      }
    return n;
  }
}
class Pe {
  constructor(e) {
    this.options = e || le;
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
    if (e = kt(this.options.sanitize, this.options.baseUrl, e), e === null)
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
    if (e = kt(this.options.sanitize, this.options.baseUrl, e), e === null)
      return s;
    let t = `<img src="${e}" alt="${s}"`;
    return n && (t += ` title="${n}"`), t += this.options.xhtml ? "/>" : ">", t;
  }
  text(e) {
    return e;
  }
}
class Ye {
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
class qe {
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
    this.options = e || le, this.options.renderer = this.options.renderer || new Pe(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Ye(), this.slugger = new qe();
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
    let s = "", t, i, l, a, o, f, c, u, h, d, b, v, F, x, H, K, J, ee, te;
    const we = e.length;
    for (t = 0; t < we; t++) {
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
            Bt(this.parseInline(d.tokens, this.textRenderer)),
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
          for (u = "", c = "", a = d.header.length, i = 0; i < a; i++)
            c += this.renderer.tablecell(
              this.parseInline(d.header[i].tokens),
              { header: !0, align: d.align[i] }
            );
          for (u += this.renderer.tablerow(c), h = "", a = d.rows.length, i = 0; i < a; i++) {
            for (f = d.rows[i], c = "", o = f.length, l = 0; l < o; l++)
              c += this.renderer.tablecell(
                this.parseInline(f[l].tokens),
                { header: !1, align: d.align[l] }
              );
            h += this.renderer.tablerow(c);
          }
          s += this.renderer.table(u, h);
          continue;
        }
        case "blockquote": {
          h = this.parse(d.tokens), s += this.renderer.blockquote(h);
          continue;
        }
        case "list": {
          for (b = d.ordered, v = d.start, F = d.loose, a = d.items.length, h = "", i = 0; i < a; i++)
            H = d.items[i], K = H.checked, J = H.task, x = "", H.task && (ee = this.renderer.checkbox(K), F ? H.tokens.length > 0 && H.tokens[0].type === "paragraph" ? (H.tokens[0].text = ee + " " + H.tokens[0].text, H.tokens[0].tokens && H.tokens[0].tokens.length > 0 && H.tokens[0].tokens[0].type === "text" && (H.tokens[0].tokens[0].text = ee + " " + H.tokens[0].tokens[0].text)) : H.tokens.unshift({
              type: "text",
              text: ee
            }) : x += ee), x += this.parse(H.tokens, F), h += this.renderer.listitem(x, J, K);
          s += this.renderer.list(h, b, v);
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
          for (h = d.tokens ? this.parseInline(d.tokens) : d.text; t + 1 < we && e[t + 1].type === "text"; )
            d = e[++t], h += `
` + (d.tokens ? this.parseInline(d.tokens) : d.text);
          s += n ? this.renderer.paragraph(h) : h;
          continue;
        }
        default: {
          const Ve = 'Token with "' + d.type + '" type was not found.';
          if (this.options.silent) {
            console.error(Ve);
            return;
          } else
            throw new Error(Ve);
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
class xe {
  constructor(e) {
    this.options = e || le;
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
U(xe, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess"
]));
var Te, Ue, Be, Ot;
class ps {
  constructor(...e) {
    De(this, Te);
    De(this, Be);
    U(this, "defaults", Xe());
    U(this, "options", this.setOptions);
    U(this, "parse", Se(this, Te, Ue).call(this, X.lex, se.parse));
    U(this, "parseInline", Se(this, Te, Ue).call(this, X.lexInline, se.parseInline));
    U(this, "Parser", se);
    U(this, "parser", se.parse);
    U(this, "Renderer", Pe);
    U(this, "TextRenderer", Ye);
    U(this, "Lexer", X);
    U(this, "lexer", X.lex);
    U(this, "Tokenizer", Ne);
    U(this, "Slugger", qe);
    U(this, "Hooks", xe);
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
        const i = this.defaults.renderer || new Pe(this.defaults);
        for (const l in s.renderer) {
          const a = i[l];
          i[l] = (...o) => {
            let f = s.renderer[l].apply(i, o);
            return f === !1 && (f = a.apply(i, o)), f;
          };
        }
        t.renderer = i;
      }
      if (s.tokenizer) {
        const i = this.defaults.tokenizer || new Ne(this.defaults);
        for (const l in s.tokenizer) {
          const a = i[l];
          i[l] = (...o) => {
            let f = s.tokenizer[l].apply(i, o);
            return f === !1 && (f = a.apply(i, o)), f;
          };
        }
        t.tokenizer = i;
      }
      if (s.hooks) {
        const i = this.defaults.hooks || new xe();
        for (const l in s.hooks) {
          const a = i[l];
          xe.passThroughHooks.has(l) ? i[l] = (o) => {
            if (this.defaults.async)
              return Promise.resolve(s.hooks[l].call(i, o)).then((c) => a.call(i, c));
            const f = s.hooks[l].call(i, o);
            return a.call(i, f);
          } : i[l] = (...o) => {
            let f = s.hooks[l].apply(i, o);
            return f === !1 && (f = a.apply(i, o)), f;
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
Te = new WeakSet(), Ue = function(e, n) {
  return (s, t, i) => {
    typeof t == "function" && (i = t, t = null);
    const l = { ...t };
    t = { ...this.defaults, ...l };
    const a = Se(this, Be, Ot).call(this, t.silent, t.async, i);
    if (typeof s > "u" || s === null)
      return a(new Error("marked(): input parameter is undefined or null"));
    if (typeof s != "string")
      return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
    if (cs(t, i), t.hooks && (t.hooks.options = t), i) {
      const o = t.highlight;
      let f;
      try {
        t.hooks && (s = t.hooks.preprocess(s)), f = e(s, t);
      } catch (h) {
        return a(h);
      }
      const c = (h) => {
        let d;
        if (!h)
          try {
            t.walkTokens && this.walkTokens(f, t.walkTokens), d = n(f, t), t.hooks && (d = t.hooks.postprocess(d));
          } catch (b) {
            h = b;
          }
        return t.highlight = o, h ? a(h) : i(null, d);
      };
      if (!o || o.length < 3 || (delete t.highlight, !f.length))
        return c();
      let u = 0;
      this.walkTokens(f, (h) => {
        h.type === "code" && (u++, setTimeout(() => {
          o(h.text, h.lang, (d, b) => {
            if (d)
              return c(d);
            b != null && b !== h.text && (h.text = b, h.escaped = !0), u--, u === 0 && c();
          });
        }, 0));
      }), u === 0 && c();
      return;
    }
    if (t.async)
      return Promise.resolve(t.hooks ? t.hooks.preprocess(s) : s).then((o) => e(o, t)).then((o) => t.walkTokens ? Promise.all(this.walkTokens(o, t.walkTokens)).then(() => o) : o).then((o) => n(o, t)).then((o) => t.hooks ? t.hooks.postprocess(o) : o).catch(a);
    try {
      t.hooks && (s = t.hooks.preprocess(s));
      const o = e(s, t);
      t.walkTokens && this.walkTokens(o, t.walkTokens);
      let f = n(o, t);
      return t.hooks && (f = t.hooks.postprocess(f)), f;
    } catch (o) {
      return a(o);
    }
  };
}, Be = new WeakSet(), Ot = function(e, n, s) {
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
const ue = new ps(le);
function E(r, e, n) {
  return ue.parse(r, e, n);
}
E.options = E.setOptions = function(r) {
  return ue.setOptions(r), E.defaults = ue.defaults, Lt(E.defaults), E;
};
E.getDefaults = Xe;
E.defaults = le;
E.use = function(...r) {
  return ue.use(...r), E.defaults = ue.defaults, Lt(E.defaults), E;
};
E.walkTokens = function(r, e) {
  return ue.walkTokens(r, e);
};
E.parseInline = ue.parseInline;
E.Parser = se;
E.parser = se.parse;
E.Renderer = Pe;
E.TextRenderer = Ye;
E.Lexer = X;
E.lexer = X.lex;
E.Tokenizer = Ne;
E.Slugger = qe;
E.Hooks = xe;
E.parse = E;
E.options;
E.setOptions;
E.use;
E.walkTokens;
E.parseInline;
se.parse;
X.lex;
const qt = {};
function ds(r) {
  let e;
  return {
    c() {
      e = re(
        /*raw*/
        r[1]
      );
    },
    m(n, s) {
      k(n, e, s);
    },
    p(n, s) {
      s & /*raw*/
      2 && $e(
        e,
        /*raw*/
        n[1]
      );
    },
    i: L,
    o: L,
    d(n) {
      n && m(e);
    }
  };
}
function gs(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[5].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = w("h6"), t && t.c(), $(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      16) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[4],
        n ? D(
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
      4) && $(
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
function ms(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[5].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = w("h5"), t && t.c(), $(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      16) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[4],
        n ? D(
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
      4) && $(
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
function _s(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[5].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = w("h4"), t && t.c(), $(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      16) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[4],
        n ? D(
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
      4) && $(
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
function ks(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[5].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = w("h3"), t && t.c(), $(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      16) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[4],
        n ? D(
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
      4) && $(
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
function bs(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[5].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = w("h2"), t && t.c(), $(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      16) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[4],
        n ? D(
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
      4) && $(
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
function $s(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[5].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[4],
    null
  );
  return {
    c() {
      e = w("h1"), t && t.c(), $(
        e,
        "id",
        /*id*/
        r[2]
      );
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      16) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[4],
        n ? D(
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
      4) && $(
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
function ws(r) {
  let e, n, s, t;
  const i = [
    $s,
    bs,
    ks,
    _s,
    ms,
    gs,
    ds
  ], l = [];
  function a(o, f) {
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
      n.c(), s = B();
    },
    m(o, f) {
      l[e].m(o, f), k(o, s, f), t = !0;
    },
    p(o, [f]) {
      let c = e;
      e = a(o), e === c ? l[e].p(o, f) : (N(), g(l[c], 1, 1, () => {
        l[c] = null;
      }), P(), n = l[e], n ? n.p(o, f) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
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
function ys(r, e, n) {
  let s, { $$slots: t = {}, $$scope: i } = e, { depth: l } = e, { raw: a } = e, { text: o } = e;
  const { slug: f, getOptions: c } = on(qt), u = c();
  return r.$$set = (h) => {
    "depth" in h && n(0, l = h.depth), "raw" in h && n(1, a = h.raw), "text" in h && n(3, o = h.text), "$$scope" in h && n(4, i = h.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty & /*text*/
    8 && n(2, s = u.headerIds ? u.headerPrefix + f(o) : void 0);
  }, [l, a, s, o, i, t];
}
class vs extends M {
  constructor(e) {
    super(), A(this, e, ys, ws, I, { depth: 0, raw: 1, text: 3 });
  }
}
function xs(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = w("p"), t && t.c();
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? D(
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
function zs(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class Ts extends M {
  constructor(e) {
    super(), A(this, e, zs, xs, I, {});
  }
}
function Ss(r) {
  let e;
  const n = (
    /*#slots*/
    r[3].default
  ), s = q(
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
      4) && j(
        s,
        n,
        t,
        /*$$scope*/
        t[2],
        e ? D(
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
function Rs(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e, { text: i } = e, { raw: l } = e;
  return r.$$set = (a) => {
    "text" in a && n(0, i = a.text), "raw" in a && n(1, l = a.raw), "$$scope" in a && n(2, t = a.$$scope);
  }, [i, l, t, s];
}
class Is extends M {
  constructor(e) {
    super(), A(this, e, Rs, Ss, I, { text: 0, raw: 1 });
  }
}
function As(r) {
  let e, n;
  return {
    c() {
      e = w("img"), et(e.src, n = /*href*/
      r[0]) || $(e, "src", n), $(
        e,
        "title",
        /*title*/
        r[1]
      ), $(
        e,
        "alt",
        /*text*/
        r[2]
      );
    },
    m(s, t) {
      k(s, e, t);
    },
    p(s, [t]) {
      t & /*href*/
      1 && !et(e.src, n = /*href*/
      s[0]) && $(e, "src", n), t & /*title*/
      2 && $(
        e,
        "title",
        /*title*/
        s[1]
      ), t & /*text*/
      4 && $(
        e,
        "alt",
        /*text*/
        s[2]
      );
    },
    i: L,
    o: L,
    d(s) {
      s && m(e);
    }
  };
}
function Ms(r, e, n) {
  let { href: s = "" } = e, { title: t = void 0 } = e, { text: i = "" } = e;
  return r.$$set = (l) => {
    "href" in l && n(0, s = l.href), "title" in l && n(1, t = l.title), "text" in l && n(2, i = l.text);
  }, [s, t, i];
}
class Cs extends M {
  constructor(e) {
    super(), A(this, e, Ms, As, I, { href: 0, title: 1, text: 2 });
  }
}
function Es(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[3].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = w("a"), t && t.c(), $(
        e,
        "href",
        /*href*/
        r[0]
      ), $(
        e,
        "title",
        /*title*/
        r[1]
      );
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      4) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[2],
        n ? D(
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
      1) && $(
        e,
        "href",
        /*href*/
        i[0]
      ), (!n || l & /*title*/
      2) && $(
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
function Ls(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e, { href: i = "" } = e, { title: l = void 0 } = e;
  return r.$$set = (a) => {
    "href" in a && n(0, i = a.href), "title" in a && n(1, l = a.title), "$$scope" in a && n(2, t = a.$$scope);
  }, [i, l, t, s];
}
class Ns extends M {
  constructor(e) {
    super(), A(this, e, Ls, Es, I, { href: 0, title: 1 });
  }
}
function Ps(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = w("em"), t && t.c();
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? D(
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
function Bs(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class Os extends M {
  constructor(e) {
    super(), A(this, e, Bs, Ps, I, {});
  }
}
function qs(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = w("del"), t && t.c();
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? D(
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
function Ds(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class js extends M {
  constructor(e) {
    super(), A(this, e, Ds, qs, I, {});
  }
}
function Zs(r) {
  let e, n = (
    /*raw*/
    r[0].replace(/`/g, "") + ""
  ), s;
  return {
    c() {
      e = w("code"), s = re(n);
    },
    m(t, i) {
      k(t, e, i), R(e, s);
    },
    p(t, [i]) {
      i & /*raw*/
      1 && n !== (n = /*raw*/
      t[0].replace(/`/g, "") + "") && $e(s, n);
    },
    i: L,
    o: L,
    d(t) {
      t && m(e);
    }
  };
}
function Us(r, e, n) {
  let { raw: s } = e;
  return r.$$set = (t) => {
    "raw" in t && n(0, s = t.raw);
  }, [s];
}
class Fs extends M {
  constructor(e) {
    super(), A(this, e, Us, Zs, I, { raw: 0 });
  }
}
function Hs(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = w("strong"), t && t.c();
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? D(
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
function Qs(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class Ws extends M {
  constructor(e) {
    super(), A(this, e, Qs, Hs, I, {});
  }
}
function Gs(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = w("table"), t && t.c();
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? D(
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
function Js(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class Xs extends M {
  constructor(e) {
    super(), A(this, e, Js, Gs, I, {});
  }
}
function Ys(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = w("thead"), t && t.c();
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? D(
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
class Ks extends M {
  constructor(e) {
    super(), A(this, e, Vs, Ys, I, {});
  }
}
function ei(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = w("tbody"), t && t.c();
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? D(
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
function ti(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class ni extends M {
  constructor(e) {
    super(), A(this, e, ti, ei, I, {});
  }
}
function si(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = w("tr"), t && t.c();
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? D(
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
function ii(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class ri extends M {
  constructor(e) {
    super(), A(this, e, ii, si, I, {});
  }
}
function li(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[3].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = w("td"), t && t.c(), $(
        e,
        "align",
        /*align*/
        r[1]
      );
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      4) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[2],
        n ? D(
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
      2) && $(
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
function oi(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[3].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = w("th"), t && t.c(), $(
        e,
        "align",
        /*align*/
        r[1]
      );
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      4) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[2],
        n ? D(
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
      2) && $(
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
function ai(r) {
  let e, n, s, t;
  const i = [oi, li], l = [];
  function a(o, f) {
    return (
      /*header*/
      o[0] ? 0 : 1
    );
  }
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = B();
    },
    m(o, f) {
      l[e].m(o, f), k(o, s, f), t = !0;
    },
    p(o, [f]) {
      let c = e;
      e = a(o), e === c ? l[e].p(o, f) : (N(), g(l[c], 1, 1, () => {
        l[c] = null;
      }), P(), n = l[e], n ? n.p(o, f) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
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
function fi(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e, { header: i } = e, { align: l } = e;
  return r.$$set = (a) => {
    "header" in a && n(0, i = a.header), "align" in a && n(1, l = a.align), "$$scope" in a && n(2, t = a.$$scope);
  }, [i, l, t, s];
}
class ci extends M {
  constructor(e) {
    super(), A(this, e, fi, ai, I, { header: 0, align: 1 });
  }
}
function ui(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[3].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = w("ul"), t && t.c();
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      4) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[2],
        n ? D(
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
function hi(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[3].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[2],
    null
  );
  return {
    c() {
      e = w("ol"), t && t.c(), $(
        e,
        "start",
        /*start*/
        r[1]
      );
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, l) {
      t && t.p && (!n || l & /*$$scope*/
      4) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[2],
        n ? D(
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
      2) && $(
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
function pi(r) {
  let e, n, s, t;
  const i = [hi, ui], l = [];
  function a(o, f) {
    return (
      /*ordered*/
      o[0] ? 0 : 1
    );
  }
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = B();
    },
    m(o, f) {
      l[e].m(o, f), k(o, s, f), t = !0;
    },
    p(o, [f]) {
      let c = e;
      e = a(o), e === c ? l[e].p(o, f) : (N(), g(l[c], 1, 1, () => {
        l[c] = null;
      }), P(), n = l[e], n ? n.p(o, f) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
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
function di(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e, { ordered: i } = e, { start: l } = e;
  return r.$$set = (a) => {
    "ordered" in a && n(0, i = a.ordered), "start" in a && n(1, l = a.start), "$$scope" in a && n(2, t = a.$$scope);
  }, [i, l, t, s];
}
class gi extends M {
  constructor(e) {
    super(), A(this, e, di, pi, I, { ordered: 0, start: 1 });
  }
}
function mi(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = w("li"), t && t.c();
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? D(
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
class ki extends M {
  constructor(e) {
    super(), A(this, e, _i, mi, I, {});
  }
}
function bi(r) {
  let e;
  return {
    c() {
      e = w("hr");
    },
    m(n, s) {
      k(n, e, s);
    },
    p: L,
    i: L,
    o: L,
    d(n) {
      n && m(e);
    }
  };
}
class $i extends M {
  constructor(e) {
    super(), A(this, e, null, bi, I, {});
  }
}
function wi(r) {
  let e, n;
  return {
    c() {
      e = new en(!1), n = B(), e.a = n;
    },
    m(s, t) {
      e.m(
        /*text*/
        r[0],
        s,
        t
      ), k(s, n, t);
    },
    p(s, [t]) {
      t & /*text*/
      1 && e.p(
        /*text*/
        s[0]
      );
    },
    i: L,
    o: L,
    d(s) {
      s && (m(n), e.d());
    }
  };
}
function yi(r, e, n) {
  let { text: s } = e;
  return r.$$set = (t) => {
    "text" in t && n(0, s = t.text);
  }, [s];
}
class vi extends M {
  constructor(e) {
    super(), A(this, e, yi, wi, I, { text: 0 });
  }
}
function xi(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = w("blockquote"), t && t.c();
    },
    m(i, l) {
      k(i, e, l), t && t.m(e, null), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? D(
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
function zi(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class Ti extends M {
  constructor(e) {
    super(), A(this, e, zi, xi, I, {});
  }
}
function Si(r) {
  let e, n, s;
  return {
    c() {
      e = w("pre"), n = w("code"), s = re(
        /*text*/
        r[1]
      ), $(
        e,
        "class",
        /*lang*/
        r[0]
      );
    },
    m(t, i) {
      k(t, e, i), R(e, n), R(n, s);
    },
    p(t, [i]) {
      i & /*text*/
      2 && $e(
        s,
        /*text*/
        t[1]
      ), i & /*lang*/
      1 && $(
        e,
        "class",
        /*lang*/
        t[0]
      );
    },
    i: L,
    o: L,
    d(t) {
      t && m(e);
    }
  };
}
function Ri(r, e, n) {
  let { lang: s } = e, { text: t } = e;
  return r.$$set = (i) => {
    "lang" in i && n(0, s = i.lang), "text" in i && n(1, t = i.text);
  }, [s, t];
}
class Ii extends M {
  constructor(e) {
    super(), A(this, e, Ri, Si, I, { lang: 0, text: 1 });
  }
}
function Ai(r) {
  let e, n;
  const s = (
    /*#slots*/
    r[1].default
  ), t = q(
    s,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = w("br"), t && t.c();
    },
    m(i, l) {
      k(i, e, l), t && t.m(i, l), n = !0;
    },
    p(i, [l]) {
      t && t.p && (!n || l & /*$$scope*/
      1) && j(
        t,
        s,
        i,
        /*$$scope*/
        i[0],
        n ? D(
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
function Mi(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e;
  return r.$$set = (i) => {
    "$$scope" in i && n(0, t = i.$$scope);
  }, [t, s];
}
class Ci extends M {
  constructor(e) {
    super(), A(this, e, Mi, Ai, I, {});
  }
}
const Ei = {
  heading: vs,
  paragraph: Ts,
  text: Is,
  image: Cs,
  link: Ns,
  em: Os,
  strong: Ws,
  codespan: Fs,
  del: js,
  table: Xs,
  tablehead: Ks,
  tablebody: ni,
  tablerow: ri,
  tablecell: ci,
  list: gi,
  orderedlistitem: null,
  unorderedlistitem: null,
  listitem: ki,
  hr: $i,
  html: vi,
  blockquote: Ti,
  code: Ii,
  br: Ci
}, Li = {
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
function Ni(r) {
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
      S(e.$$.fragment);
    },
    m(s, t) {
      z(e, s, t), n = !0;
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
      T(e, s);
    }
  };
}
function Pi(r, e, n) {
  let s, t, i, l, { source: a = [] } = e, { renderers: o = {} } = e, { options: f = {} } = e, { isInline: c = !1 } = e;
  const u = Je();
  let h, d, b;
  return ln(qt, {
    slug: (v) => t ? t.slug(v) : "",
    getOptions: () => i
  }), Ge(() => {
    n(7, b = !0);
  }), r.$$set = (v) => {
    "source" in v && n(2, a = v.source), "renderers" in v && n(3, o = v.renderers), "options" in v && n(4, f = v.options), "isInline" in v && n(5, c = v.isInline);
  }, r.$$.update = () => {
    r.$$.dirty & /*source*/
    4 && n(8, s = Array.isArray(a)), r.$$.dirty & /*source*/
    4 && (t = a ? new qe() : void 0), r.$$.dirty & /*options*/
    16 && n(9, i = { ...Li, ...f }), r.$$.dirty & /*preprocessed, source, combinedOptions, isInline, lexer, tokens*/
    869 && (s ? n(0, h = a) : (n(6, d = new X(i)), n(0, h = c ? d.inlineTokens(a) : d.lex(a)), u("parsed", { tokens: h }))), r.$$.dirty & /*renderers*/
    8 && n(1, l = { ...Ei, ...o }), r.$$.dirty & /*mounted, preprocessed, tokens*/
    385 && b && !s && u("parsed", { tokens: h });
  }, [
    h,
    l,
    a,
    o,
    f,
    c,
    d,
    b,
    s,
    i
  ];
}
class Bi extends M {
  constructor(e) {
    super(), A(this, e, Pi, Ni, I, {
      source: 2,
      renderers: 3,
      options: 4,
      isInline: 5
    });
  }
}
function Dt(r) {
  const e = r - 1;
  return e * e * e + 1;
}
function Oi(r, { delay: e = 0, duration: n = 400, easing: s = Dt, axis: t = "y" } = {}) {
  const i = getComputedStyle(r), l = +i.opacity, a = t === "y" ? "height" : "width", o = parseFloat(i[a]), f = t === "y" ? ["top", "bottom"] : ["left", "right"], c = f.map(
    (x) => `${x[0].toUpperCase()}${x.slice(1)}`
  ), u = parseFloat(i[`padding${c[0]}`]), h = parseFloat(i[`padding${c[1]}`]), d = parseFloat(i[`margin${c[0]}`]), b = parseFloat(i[`margin${c[1]}`]), v = parseFloat(
    i[`border${c[0]}Width`]
  ), F = parseFloat(
    i[`border${c[1]}Width`]
  );
  return {
    delay: e,
    duration: n,
    easing: s,
    css: (x) => `overflow: hidden;opacity: ${Math.min(x * 20, 1) * l};${a}: ${x * o}px;padding-${f[0]}: ${x * u}px;padding-${f[1]}: ${x * h}px;margin-${f[0]}: ${x * d}px;margin-${f[1]}: ${x * b}px;border-${f[0]}-width: ${x * v}px;border-${f[1]}-width: ${x * F}px;`
  };
}
function qi(r, { delay: e = 0, duration: n = 400, easing: s = Dt, start: t = 0, opacity: i = 0 } = {}) {
  const l = getComputedStyle(r), a = +l.opacity, o = l.transform === "none" ? "" : l.transform, f = 1 - t, c = a * (1 - i);
  return {
    delay: e,
    duration: n,
    easing: s,
    css: (u, h) => `
			transform: ${o} scale(${1 - f * h});
			opacity: ${a - c * h}
		`
  };
}
function Di(r) {
  pe(r, "svelte-7w7epi", '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");.container.svelte-7w7epi{font-family:"Rethink Sans", sans-serif;display:grid;grid-template-rows:1rem [title-start] 1rem [title-end] 0.5rem [content-start] auto [content-end] 0.5rem;grid-template-columns:2rem [title-start content-start] 1fr [content-end title-end] 2rem;align-items:start;justify-items:left;background-color:lightgray}.title.svelte-7w7epi{grid-area:title;width:100%;font-size:1.1rem;font-weight:bold;display:grid;align-items:center;justify-items:stretch}.content.svelte-7w7epi{grid-area:content;font-size:1rem}.stamp.svelte-7w7epi{font-size:0.75rem;text-align:right}');
}
function yt(r) {
  let e, n;
  return {
    c() {
      e = w("div"), n = re(
        /*timestamp*/
        r[2]
      ), $(e, "class", "stamp svelte-7w7epi"), ne(e, "grid-row", 1);
    },
    m(s, t) {
      k(s, e, t), R(e, n);
    },
    p(s, t) {
      t & /*timestamp*/
      4 && $e(
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
function ji(r) {
  let e, n, s, t, i, l, a, o, f, c, u = (
    /*timestamp*/
    r[2] && yt(r)
  );
  return o = new Bi({ props: { source: (
    /*content*/
    r[0]
  ) } }), {
    c() {
      e = w("div"), n = w("div"), s = w("div"), t = re(
        /*name*/
        r[4]
      ), i = W(), u && u.c(), l = W(), a = w("div"), S(o.$$.fragment), ne(s, "grid-row", 1), $(n, "class", "title svelte-7w7epi"), $(a, "class", "content svelte-7w7epi"), $(e, "class", "container svelte-7w7epi"), ne(
        e,
        "background-color",
        /*role*/
        r[1] === "assistant" ? "Gainsboro" : "white"
      );
    },
    m(h, d) {
      k(h, e, d), R(e, n), R(n, s), R(s, t), R(n, i), u && u.m(n, null), R(e, l), R(e, a), z(o, a, null), r[7](e), c = !0;
    },
    p(h, [d]) {
      (!c || d & /*name*/
      16) && $e(
        t,
        /*name*/
        h[4]
      ), /*timestamp*/
      h[2] ? u ? u.p(h, d) : (u = yt(h), u.c(), u.m(n, null)) : u && (u.d(1), u = null);
      const b = {};
      d & /*content*/
      1 && (b.source = /*content*/
      h[0]), o.$set(b), d & /*role*/
      2 && ne(
        e,
        "background-color",
        /*role*/
        h[1] === "assistant" ? "Gainsboro" : "white"
      );
    },
    i(h) {
      c || (p(o.$$.fragment, h), h && (f || ce(() => {
        f = Et(e, Oi, { duration: 300 }), f.start();
      })), c = !0);
    },
    o(h) {
      g(o.$$.fragment, h), c = !1;
    },
    d(h) {
      h && m(e), u && u.d(), T(o), r[7](null);
    }
  };
}
function Zi(r, e, n) {
  let s, t, { role: i } = e, { content: l } = e, { timestamp: a = void 0 } = e;
  const o = (u) => n(0, l = u), f = (u) => n(0, l += u);
  function c(u) {
    fe[u ? "unshift" : "push"](() => {
      t = u, n(3, t);
    });
  }
  return r.$$set = (u) => {
    "role" in u && n(1, i = u.role), "content" in u && n(0, l = u.content), "timestamp" in u && n(2, a = u.timestamp);
  }, r.$$.update = () => {
    r.$$.dirty & /*role*/
    2 && n(4, s = i === "assistant" ? "Assistant" : "You");
  }, [l, i, a, t, s, o, f, c];
}
class jt extends M {
  constructor(e) {
    super(), A(
      this,
      e,
      Zi,
      ji,
      I,
      {
        role: 1,
        content: 0,
        timestamp: 2,
        update: 5,
        append: 6
      },
      Di
    );
  }
  get update() {
    return this.$$.ctx[5];
  }
  get append() {
    return this.$$.ctx[6];
  }
}
function Ui(r) {
  pe(r, "svelte-40iad3", "div.svelte-40iad3{max-height:100%;overflow-y:scroll}");
}
function vt(r, e, n) {
  const s = r.slice();
  return s[12] = e[n].role, s[13] = e[n].content, s[14] = e[n].timestamp, s[16] = n, s;
}
function Fi(r) {
  let e, n;
  return e = new jt({
    props: {
      role: (
        /*role*/
        r[12]
      ),
      content: (
        /*content*/
        r[13]
      ),
      timestamp: (
        /*timestamp*/
        r[14]
      )
    }
  }), {
    c() {
      S(e.$$.fragment);
    },
    m(s, t) {
      z(e, s, t), n = !0;
    },
    p(s, t) {
      const i = {};
      t & /*messages*/
      1 && (i.role = /*role*/
      s[12]), t & /*messages*/
      1 && (i.content = /*content*/
      s[13]), t & /*messages*/
      1 && (i.timestamp = /*timestamp*/
      s[14]), e.$set(i);
    },
    i(s) {
      n || (p(e.$$.fragment, s), n = !0);
    },
    o(s) {
      g(e.$$.fragment, s), n = !1;
    },
    d(s) {
      T(e, s);
    }
  };
}
function Hi(r) {
  let e, n, s = {
    role: (
      /*role*/
      r[12]
    ),
    content: (
      /*content*/
      r[13]
    ),
    timestamp: (
      /*timestamp*/
      r[14]
    )
  };
  return e = new jt({ props: s }), r[9](e), {
    c() {
      S(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), n = !0;
    },
    p(t, i) {
      const l = {};
      i & /*messages*/
      1 && (l.role = /*role*/
      t[12]), i & /*messages*/
      1 && (l.content = /*content*/
      t[13]), i & /*messages*/
      1 && (l.timestamp = /*timestamp*/
      t[14]), e.$set(l);
    },
    i(t) {
      n || (p(e.$$.fragment, t), n = !0);
    },
    o(t) {
      g(e.$$.fragment, t), n = !1;
    },
    d(t) {
      r[9](null), T(e, t);
    }
  };
}
function xt(r) {
  let e, n, s, t;
  const i = [Hi, Fi], l = [];
  function a(o, f) {
    return (
      /*index*/
      o[16] === /*messages*/
      o[0].length - 1 ? 0 : 1
    );
  }
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = B();
    },
    m(o, f) {
      l[e].m(o, f), k(o, s, f), t = !0;
    },
    p(o, f) {
      let c = e;
      e = a(o), e === c ? l[e].p(o, f) : (N(), g(l[c], 1, 1, () => {
        l[c] = null;
      }), P(), n = l[e], n ? n.p(o, f) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
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
function Qi(r) {
  let e, n, s, t, i = G(
    /*messages*/
    r[0]
  ), l = [];
  for (let o = 0; o < i.length; o += 1)
    l[o] = xt(vt(r, i, o));
  const a = (o) => g(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      e = w("div");
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      n = W(), s = w("div"), $(s, "class", "svelte-40iad3"), $(e, "class", "svelte-40iad3");
    },
    m(o, f) {
      k(o, e, f);
      for (let c = 0; c < l.length; c += 1)
        l[c] && l[c].m(e, null);
      R(e, n), R(e, s), r[10](s), t = !0;
    },
    p(o, [f]) {
      if (f & /*messages, lastMessage*/
      3) {
        i = G(
          /*messages*/
          o[0]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const u = vt(o, i, c);
          l[c] ? (l[c].p(u, f), p(l[c], 1)) : (l[c] = xt(u), l[c].c(), p(l[c], 1), l[c].m(e, n));
        }
        for (N(), c = i.length; c < l.length; c += 1)
          a(c);
        P();
      }
    },
    i(o) {
      if (!t) {
        for (let f = 0; f < i.length; f += 1)
          p(l[f]);
        t = !0;
      }
    },
    o(o) {
      l = l.filter(Boolean);
      for (let f = 0; f < l.length; f += 1)
        g(l[f]);
      t = !1;
    },
    d(o) {
      o && m(e), de(l, o), r[10](null);
    }
  };
}
function Wi(r, e, n) {
  let { messages: s = [] } = e, t, i;
  const l = () => i.scrollIntoView(), a = () => s, o = () => s[s.length - 1], f = (v) => (s.push(v), n(0, s), l(), v), c = (v) => {
    n(0, s[s.length - 1].content = v, s), t == null || t.update(v), l();
  }, u = (v) => {
    o().content += v, t == null || t.append(v), l();
  }, h = () => {
    n(0, s = []), l();
  };
  function d(v) {
    fe[v ? "unshift" : "push"](() => {
      t = v, n(1, t);
    });
  }
  function b(v) {
    fe[v ? "unshift" : "push"](() => {
      i = v, n(2, i);
    });
  }
  return r.$$set = (v) => {
    "messages" in v && n(0, s = v.messages);
  }, [
    s,
    t,
    i,
    a,
    o,
    f,
    c,
    u,
    h,
    d,
    b
  ];
}
class Gi extends M {
  constructor(e) {
    super(), A(
      this,
      e,
      Wi,
      Qi,
      I,
      {
        messages: 0,
        getAll: 3,
        getLast: 4,
        addMessage: 5,
        updateLastMessageContent: 6,
        appendLastMessageContent: 7,
        clearMessages: 8
      },
      Ui
    );
  }
  get getAll() {
    return this.$$.ctx[3];
  }
  get getLast() {
    return this.$$.ctx[4];
  }
  get addMessage() {
    return this.$$.ctx[5];
  }
  get updateLastMessageContent() {
    return this.$$.ctx[6];
  }
  get appendLastMessageContent() {
    return this.$$.ctx[7];
  }
  get clearMessages() {
    return this.$$.ctx[8];
  }
}
const Fe = () => (/* @__PURE__ */ new Date()).toLocaleTimeString(navigator.language, {
  hour: "2-digit",
  minute: "2-digit"
}), Zt = (r, { addEndpoint: e }) => (r.time_created = r.timestamp, r.chat_k = "To set chat id", r.clear_number = "0", fetch(e, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(r)
})), Ji = async (r, { model: e, collections: n, askEndpoint: s }) => fetch(s, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    conversation: r,
    selectedModel: e,
    multiple: !0,
    credential_token: "none",
    collection: n
  })
}), Xi = (r) => r.split(`

`).filter(Boolean).map((e) => {
  try {
    return JSON.parse(e.split("data: ")[1]);
  } catch (n) {
    return console.error(n), null;
  }
}), Yi = async (r, e, n, s) => {
  const t = await Ji(r, e);
  let i;
  const l = t.body.getReader();
  let a;
  async function o() {
    const f = await l.read();
    if (f.done)
      return;
    const c = new TextDecoder().decode(f.value), u = Xi(c);
    for (const h of u) {
      if (h === null)
        continue;
      const { message: { valid_docs: d, content: b } } = h;
      a ? s(b ?? "") : a = n({
        sender: "Assistant",
        timestamp: Fe(),
        role: "assistant",
        content: b ?? "",
        valid_docs: i
      });
    }
    await o();
  }
  await o(), a ? Zt(a, e) : console.error("No message received from ChatTutor");
};
function Vi(r) {
  pe(r, "svelte-lrimgy", `.container.svelte-lrimgy{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;max-height:99vh}.row.svelte-lrimgy{border:1px solid #ddd;border-radius:10px;box-shadow:rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #ddd 0 -3px 0 inset}`);
}
function Ki(r) {
  let e, n, s, t, i, l, a, o, f, c, u, h;
  t = new Sn({}), t.$on(
    "click",
    /*click_handler*/
    r[5]
  );
  let d = {};
  return a = new Gi({ props: d }), r[6](a), c = new vn({}), c.$on(
    "send",
    /*send*/
    r[2]
  ), {
    c() {
      e = w("div"), n = w("div"), s = w("div"), S(t.$$.fragment), i = W(), l = w("div"), S(a.$$.fragment), o = W(), f = w("div"), S(c.$$.fragment), $(n, "class", "row svelte-lrimgy"), $(f, "class", "row svelte-lrimgy"), $(e, "class", "container svelte-lrimgy");
    },
    m(b, v) {
      k(b, e, v), R(e, n), R(n, s), z(t, s, null), R(n, i), R(n, l), z(a, l, null), R(e, o), R(e, f), z(c, f, null), h = !0;
    },
    p(b, [v]) {
      const F = {};
      a.$set(F);
    },
    i(b) {
      h || (p(t.$$.fragment, b), p(a.$$.fragment, b), p(c.$$.fragment, b), b && (u || ce(() => {
        u = Et(e, qi, { duration: 100 }), u.start();
      })), h = !0);
    },
    o(b) {
      g(t.$$.fragment, b), g(a.$$.fragment, b), g(c.$$.fragment, b), h = !1;
    },
    d(b) {
      b && m(e), T(t), r[6](null), T(a), T(c);
    }
  };
}
function er(r, e, n) {
  let { initialMessage: s } = e, { configuration: t } = e;
  const i = Je();
  let l;
  const a = async (c) => {
    const u = l.addMessage({
      sender: "Student",
      role: "user",
      content: c.detail.message,
      timestamp: Fe()
    });
    await Zt(u, t), await Yi(l.getAll(), t, (h) => l.addMessage(h), (h) => l.appendLastMessageContent(h)), c.detail.onResponse();
  };
  Ge(() => {
    s && l.addMessage({
      sender: "Assistant",
      role: "assistant",
      content: s,
      timestamp: Fe()
    });
  });
  const o = () => i("close");
  function f(c) {
    fe[c ? "unshift" : "push"](() => {
      l = c, n(0, l);
    });
  }
  return r.$$set = (c) => {
    "initialMessage" in c && n(3, s = c.initialMessage), "configuration" in c && n(4, t = c.configuration);
  }, [
    l,
    i,
    a,
    s,
    t,
    o,
    f
  ];
}
class tr extends M {
  constructor(e) {
    super(), A(this, e, er, Ki, I, { initialMessage: 3, configuration: 4 }, Vi);
  }
}
function nr(r) {
  pe(r, "svelte-u13g2i", "section.svelte-u13g2i{user-select:none;cursor:move;position:absolute}section.svelte-u13g2i:focus{outline:none}");
}
function sr(r) {
  let e, n, s, t;
  const i = (
    /*#slots*/
    r[8].default
  ), l = q(
    i,
    r,
    /*$$scope*/
    r[7],
    null
  );
  return {
    c() {
      e = w("section"), l && l.c(), ne(
        e,
        "right",
        /*right*/
        r[0] + "px"
      ), ne(
        e,
        "bottom",
        /*bottom*/
        r[1] + "px"
      ), $(e, "role", "button"), $(e, "tabindex", "0"), $(e, "class", "svelte-u13g2i");
    },
    m(a, o) {
      k(a, e, o), l && l.m(e, null), n = !0, s || (t = [
        ae(
          window,
          "mouseup",
          /*onMouseUp*/
          r[4]
        ),
        ae(
          window,
          "mousemove",
          /*onMouseMove*/
          r[3]
        ),
        ae(
          e,
          "mousedown",
          /*onMouseDown*/
          r[2]
        )
      ], s = !0);
    },
    p(a, [o]) {
      l && l.p && (!n || o & /*$$scope*/
      128) && j(
        l,
        i,
        a,
        /*$$scope*/
        a[7],
        n ? D(
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
const ir = 2;
function rr(r, e, n) {
  let { $$slots: s = {}, $$scope: t } = e, { right: i = 100 } = e, { bottom: l = 100 } = e, a = !1, o;
  const f = () => Math.sqrt(Math.pow(i - o.left, 2) + Math.pow(l - o.bottom, 2)), c = () => f() >= ir;
  function u() {
    a = !0, o = { left: i, bottom: l };
  }
  function h(b) {
    a && (n(0, i -= b.movementX), n(1, l -= b.movementY));
  }
  function d() {
    a = !1;
  }
  return r.$$set = (b) => {
    "right" in b && n(0, i = b.right), "bottom" in b && n(1, l = b.bottom), "$$scope" in b && n(7, t = b.$$scope);
  }, r.$$.update = () => {
    r.$$.dirty & /*bottom*/
    2 && n(1, l = Math.max(0, l)), r.$$.dirty & /*right*/
    1 && n(0, i = Math.max(0, i));
  }, [
    i,
    l,
    u,
    h,
    d,
    f,
    c,
    t,
    s
  ];
}
class lr extends M {
  constructor(e) {
    super(), A(
      this,
      e,
      rr,
      sr,
      I,
      {
        right: 0,
        bottom: 1,
        distance: 5,
        moved: 6
      },
      nr
    );
  }
  get distance() {
    return this.$$.ctx[5];
  }
  get moved() {
    return this.$$.ctx[6];
  }
}
function or(r) {
  let e, n;
  return e = new bn({}), e.$on(
    "click",
    /*tryToggle*/
    r[3]
  ), {
    c() {
      S(e.$$.fragment);
    },
    m(s, t) {
      z(e, s, t), n = !0;
    },
    p: L,
    i(s) {
      n || (p(e.$$.fragment, s), n = !0);
    },
    o(s) {
      g(e.$$.fragment, s), n = !1;
    },
    d(s) {
      T(e, s);
    }
  };
}
function ar(r) {
  let e, n;
  return e = new tr({
    props: {
      initialMessage: "Welcome",
      configuration: (
        /*configuration*/
        r[0]
      )
    }
  }), e.$on(
    "close",
    /*tryToggle*/
    r[3]
  ), {
    c() {
      S(e.$$.fragment);
    },
    m(s, t) {
      z(e, s, t), n = !0;
    },
    p(s, t) {
      const i = {};
      t & /*configuration*/
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
      T(e, s);
    }
  };
}
function fr(r) {
  let e, n, s, t;
  const i = [ar, or], l = [];
  function a(o, f) {
    return (
      /*opened*/
      o[1] ? 0 : 1
    );
  }
  return e = a(r), n = l[e] = i[e](r), {
    c() {
      n.c(), s = B();
    },
    m(o, f) {
      l[e].m(o, f), k(o, s, f), t = !0;
    },
    p(o, f) {
      let c = e;
      e = a(o), e === c ? l[e].p(o, f) : (N(), g(l[c], 1, 1, () => {
        l[c] = null;
      }), P(), n = l[e], n ? n.p(o, f) : (n = l[e] = i[e](o), n.c()), p(n, 1), n.m(s.parentNode, s));
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
function cr(r) {
  let e, n, s = {
    $$slots: { default: [fr] },
    $$scope: { ctx: r }
  };
  return e = new lr({ props: s }), r[4](e), {
    c() {
      S(e.$$.fragment);
    },
    m(t, i) {
      z(e, t, i), n = !0;
    },
    p(t, [i]) {
      const l = {};
      i & /*$$scope, configuration, opened*/
      35 && (l.$$scope = { dirty: i, ctx: t }), e.$set(l);
    },
    i(t) {
      n || (p(e.$$.fragment, t), n = !0);
    },
    o(t) {
      g(e.$$.fragment, t), n = !1;
    },
    d(t) {
      r[4](null), T(e, t);
    }
  };
}
function ur(r, e, n) {
  let { configuration: s } = e, t = !1, i;
  const l = async () => {
    i.moved() || n(1, t = !t);
  };
  function a(o) {
    fe[o ? "unshift" : "push"](() => {
      i = o, n(2, i);
    });
  }
  return r.$$set = (o) => {
    "configuration" in o && n(0, s = o.configuration);
  }, [s, t, i, l, a];
}
class dr extends M {
  constructor(e) {
    super(), A(this, e, ur, cr, I, { configuration: 0 });
  }
}
export {
  dr as default
};
