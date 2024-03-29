var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// ../../node_modules/@stitches/react/dist/index.mjs
import Z from "react";
var e = "colors";
var t = "sizes";
var r = "space";
var n = { gap: r, gridGap: r, columnGap: r, gridColumnGap: r, rowGap: r, gridRowGap: r, inset: r, insetBlock: r, insetBlockEnd: r, insetBlockStart: r, insetInline: r, insetInlineEnd: r, insetInlineStart: r, margin: r, marginTop: r, marginRight: r, marginBottom: r, marginLeft: r, marginBlock: r, marginBlockEnd: r, marginBlockStart: r, marginInline: r, marginInlineEnd: r, marginInlineStart: r, padding: r, paddingTop: r, paddingRight: r, paddingBottom: r, paddingLeft: r, paddingBlock: r, paddingBlockEnd: r, paddingBlockStart: r, paddingInline: r, paddingInlineEnd: r, paddingInlineStart: r, top: r, right: r, bottom: r, left: r, scrollMargin: r, scrollMarginTop: r, scrollMarginRight: r, scrollMarginBottom: r, scrollMarginLeft: r, scrollMarginX: r, scrollMarginY: r, scrollMarginBlock: r, scrollMarginBlockEnd: r, scrollMarginBlockStart: r, scrollMarginInline: r, scrollMarginInlineEnd: r, scrollMarginInlineStart: r, scrollPadding: r, scrollPaddingTop: r, scrollPaddingRight: r, scrollPaddingBottom: r, scrollPaddingLeft: r, scrollPaddingX: r, scrollPaddingY: r, scrollPaddingBlock: r, scrollPaddingBlockEnd: r, scrollPaddingBlockStart: r, scrollPaddingInline: r, scrollPaddingInlineEnd: r, scrollPaddingInlineStart: r, fontSize: "fontSizes", background: e, backgroundColor: e, backgroundImage: e, borderImage: e, border: e, borderBlock: e, borderBlockEnd: e, borderBlockStart: e, borderBottom: e, borderBottomColor: e, borderColor: e, borderInline: e, borderInlineEnd: e, borderInlineStart: e, borderLeft: e, borderLeftColor: e, borderRight: e, borderRightColor: e, borderTop: e, borderTopColor: e, caretColor: e, color: e, columnRuleColor: e, fill: e, outline: e, outlineColor: e, stroke: e, textDecorationColor: e, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: t, minBlockSize: t, maxBlockSize: t, inlineSize: t, minInlineSize: t, maxInlineSize: t, width: t, minWidth: t, maxWidth: t, height: t, minHeight: t, maxHeight: t, flexBasis: t, gridTemplateColumns: t, gridTemplateRows: t, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" };
var i = (e2, t2) => "function" == typeof t2 ? { "()": Function.prototype.toString.call(t2) } : t2;
var o = () => {
  const e2 = /* @__PURE__ */ Object.create(null);
  return (t2, r2, ...n2) => {
    const o2 = ((e3) => JSON.stringify(e3, i))(t2);
    return o2 in e2 ? e2[o2] : e2[o2] = r2(t2, ...n2);
  };
};
var l = Symbol.for("sxs.internal");
var s = (e2, t2) => Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2));
var a = (e2) => {
  for (const t2 in e2)
    return true;
  return false;
};
var { hasOwnProperty: c } = Object.prototype;
var d = (e2) => e2.includes("-") ? e2 : e2.replace(/[A-Z]/g, (e3) => "-" + e3.toLowerCase());
var g = /\s+(?![^()]*\))/;
var p = (e2) => (t2) => e2(..."string" == typeof t2 ? String(t2).split(g) : [t2]);
var u = { appearance: (e2) => ({ WebkitAppearance: e2, appearance: e2 }), backfaceVisibility: (e2) => ({ WebkitBackfaceVisibility: e2, backfaceVisibility: e2 }), backdropFilter: (e2) => ({ WebkitBackdropFilter: e2, backdropFilter: e2 }), backgroundClip: (e2) => ({ WebkitBackgroundClip: e2, backgroundClip: e2 }), boxDecorationBreak: (e2) => ({ WebkitBoxDecorationBreak: e2, boxDecorationBreak: e2 }), clipPath: (e2) => ({ WebkitClipPath: e2, clipPath: e2 }), content: (e2) => ({ content: e2.includes('"') || e2.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e2) ? e2 : `"${e2}"` }), hyphens: (e2) => ({ WebkitHyphens: e2, hyphens: e2 }), maskImage: (e2) => ({ WebkitMaskImage: e2, maskImage: e2 }), maskSize: (e2) => ({ WebkitMaskSize: e2, maskSize: e2 }), tabSize: (e2) => ({ MozTabSize: e2, tabSize: e2 }), textSizeAdjust: (e2) => ({ WebkitTextSizeAdjust: e2, textSizeAdjust: e2 }), userSelect: (e2) => ({ WebkitUserSelect: e2, userSelect: e2 }), marginBlock: p((e2, t2) => ({ marginBlockStart: e2, marginBlockEnd: t2 || e2 })), marginInline: p((e2, t2) => ({ marginInlineStart: e2, marginInlineEnd: t2 || e2 })), maxSize: p((e2, t2) => ({ maxBlockSize: e2, maxInlineSize: t2 || e2 })), minSize: p((e2, t2) => ({ minBlockSize: e2, minInlineSize: t2 || e2 })), paddingBlock: p((e2, t2) => ({ paddingBlockStart: e2, paddingBlockEnd: t2 || e2 })), paddingInline: p((e2, t2) => ({ paddingInlineStart: e2, paddingInlineEnd: t2 || e2 })) };
var h = /([\d.]+)([^]*)/;
var f = (e2, t2) => e2.length ? e2.reduce((e3, r2) => (e3.push(...t2.map((e4) => e4.includes("&") ? e4.replace(/&/g, /[ +>|~]/.test(r2) && /&.*&/.test(e4) ? `:is(${r2})` : r2) : r2 + " " + e4)), e3), []) : t2;
var m = (e2, t2) => e2 in b && "string" == typeof t2 ? t2.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t3, r2, n2, i2) => r2 + ("stretch" === n2 ? `-moz-available${i2};${d(e2)}:${r2}-webkit-fill-available` : `-moz-fit-content${i2};${d(e2)}:${r2}fit-content`) + i2) : String(t2);
var b = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 };
var S = (e2) => e2 ? e2 + "-" : "";
var k = (e2, t2, r2) => e2.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e3, n2, i2, o2, l2) => "$" == o2 == !!i2 ? e3 : (n2 || "--" == o2 ? "calc(" : "") + "var(--" + ("$" === o2 ? S(t2) + (l2.includes("$") ? "" : S(r2)) + l2.replace(/\$/g, "-") : l2) + ")" + (n2 || "--" == o2 ? "*" + (n2 || "") + (i2 || "1") + ")" : ""));
var y = /\s*,\s*(?![^()]*\))/;
var B = Object.prototype.toString;
var $ = (e2, t2, r2, n2, i2) => {
  let o2, l2, s2;
  const a2 = (e3, t3, r3) => {
    let c2, g2;
    const p2 = (e4) => {
      for (c2 in e4) {
        const R2 = 64 === c2.charCodeAt(0), z2 = R2 && Array.isArray(e4[c2]) ? e4[c2] : [e4[c2]];
        for (g2 of z2) {
          const e5 = /[A-Z]/.test($2 = c2) ? $2 : $2.replace(/-[^]/g, (e6) => e6[1].toUpperCase()), z3 = "object" == typeof g2 && g2 && g2.toString === B && (!n2.utils[e5] || !t3.length);
          if (e5 in n2.utils && !z3) {
            const t4 = n2.utils[e5];
            if (t4 !== l2) {
              l2 = t4, p2(t4(g2)), l2 = null;
              continue;
            }
          } else if (e5 in u) {
            const t4 = u[e5];
            if (t4 !== s2) {
              s2 = t4, p2(t4(g2)), s2 = null;
              continue;
            }
          }
          if (R2 && (b2 = c2.slice(1) in n2.media ? "@media " + n2.media[c2.slice(1)] : c2, c2 = b2.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e6, t4, r4, n3, i3, o3) => {
            const l3 = h.test(t4), s3 = 0.0625 * (l3 ? -1 : 1), [a3, c3] = l3 ? [n3, t4] : [t4, n3];
            return "(" + ("=" === r4[0] ? "" : ">" === r4[0] === l3 ? "max-" : "min-") + a3 + ":" + ("=" !== r4[0] && 1 === r4.length ? c3.replace(h, (e7, t5, n4) => Number(t5) + s3 * (">" === r4 ? 1 : -1) + n4) : c3) + (i3 ? ") and (" + (">" === i3[0] ? "min-" : "max-") + a3 + ":" + (1 === i3.length ? o3.replace(h, (e7, t5, r5) => Number(t5) + s3 * (">" === i3 ? -1 : 1) + r5) : o3) : "") + ")";
          })), z3) {
            const e6 = R2 ? r3.concat(c2) : [...r3], n3 = R2 ? [...t3] : f(t3, c2.split(y));
            void 0 !== o2 && i2(x(...o2)), o2 = void 0, a2(g2, n3, e6);
          } else
            void 0 === o2 && (o2 = [[], t3, r3]), c2 = R2 || 36 !== c2.charCodeAt(0) ? c2 : `--${S(n2.prefix)}${c2.slice(1).replace(/\$/g, "-")}`, g2 = z3 ? g2 : "number" == typeof g2 ? g2 && e5 in I ? String(g2) + "px" : String(g2) : k(m(e5, null == g2 ? "" : g2), n2.prefix, n2.themeMap[e5]), o2[0].push(`${R2 ? `${c2} ` : `${d(c2)}:`}${g2}`);
        }
      }
      var b2, $2;
    };
    p2(e3), void 0 !== o2 && i2(x(...o2)), o2 = void 0;
  };
  a2(e2, t2, r2);
};
var x = (e2, t2, r2) => `${r2.map((e3) => `${e3}{`).join("")}${t2.length ? `${t2.join(",")}{` : ""}${e2.join(";")}${t2.length ? "}" : ""}${Array(r2.length ? r2.length + 1 : 0).join("}")}`;
var I = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 };
var R = (e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
var z = (e2) => ((e3) => {
  let t2, r2 = "";
  for (t2 = Math.abs(e3); t2 > 52; t2 = t2 / 52 | 0)
    r2 = R(t2 % 52) + r2;
  return R(t2 % 52) + r2;
})(((e3, t2) => {
  let r2 = t2.length;
  for (; r2; )
    e3 = 33 * e3 ^ t2.charCodeAt(--r2);
  return e3;
})(5381, JSON.stringify(e2)) >>> 0);
var W = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"];
var j = (e2) => {
  if (e2.href && !e2.href.startsWith(location.origin))
    return false;
  try {
    return !!e2.cssRules;
  } catch (e3) {
    return false;
  }
};
var E = (e2) => {
  let t2;
  const r2 = () => {
    const { cssRules: e3 } = t2.sheet;
    return [].map.call(e3, (r3, n3) => {
      const { cssText: i2 } = r3;
      let o2 = "";
      if (i2.startsWith("--sxs"))
        return "";
      if (e3[n3 - 1] && (o2 = e3[n3 - 1].cssText).startsWith("--sxs")) {
        if (!r3.cssRules.length)
          return "";
        for (const e4 in t2.rules)
          if (t2.rules[e4].group === r3)
            return `--sxs{--sxs:${[...t2.rules[e4].cache].join(" ")}}${i2}`;
        return r3.cssRules.length ? `${o2}${i2}` : "";
      }
      return i2;
    }).join("");
  }, n2 = () => {
    if (t2) {
      const { rules: e3, sheet: r3 } = t2;
      if (!r3.deleteRule) {
        for (; 3 === Object(Object(r3.cssRules)[0]).type; )
          r3.cssRules.splice(0, 1);
        r3.cssRules = [];
      }
      for (const t3 in e3)
        delete e3[t3];
    }
    const i2 = Object(e2).styleSheets || [];
    for (const e3 of i2)
      if (j(e3)) {
        for (let i3 = 0, o3 = e3.cssRules; o3[i3]; ++i3) {
          const l3 = Object(o3[i3]);
          if (1 !== l3.type)
            continue;
          const s2 = Object(o3[i3 + 1]);
          if (4 !== s2.type)
            continue;
          ++i3;
          const { cssText: a2 } = l3;
          if (!a2.startsWith("--sxs"))
            continue;
          const c2 = a2.slice(14, -3).trim().split(/\s+/), d2 = W[c2[0]];
          d2 && (t2 || (t2 = { sheet: e3, reset: n2, rules: {}, toString: r2 }), t2.rules[d2] = { group: s2, index: i3, cache: new Set(c2) });
        }
        if (t2)
          break;
      }
    if (!t2) {
      const i3 = (e3, t3) => ({ type: t3, cssRules: [], insertRule(e4, t4) {
        this.cssRules.splice(t4, 0, i3(e4, { import: 3, undefined: 1 }[(e4.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return "@media{}" === e3 ? `@media{${[].map.call(this.cssRules, (e4) => e4.cssText).join("")}}` : e3;
      } });
      t2 = { sheet: e2 ? (e2.head || e2).appendChild(document.createElement("style")).sheet : i3("", "text/css"), rules: {}, reset: n2, toString: r2 };
    }
    const { sheet: o2, rules: l2 } = t2;
    for (let e3 = W.length - 1; e3 >= 0; --e3) {
      const t3 = W[e3];
      if (!l2[t3]) {
        const r3 = W[e3 + 1], n3 = l2[r3] ? l2[r3].index : o2.cssRules.length;
        o2.insertRule("@media{}", n3), o2.insertRule(`--sxs{--sxs:${e3}}`, n3), l2[t3] = { group: o2.cssRules[n3 + 1], index: n3, cache: /* @__PURE__ */ new Set([e3]) };
      }
      v(l2[t3]);
    }
  };
  return n2(), t2;
};
var v = (e2) => {
  const t2 = e2.group;
  let r2 = t2.cssRules.length;
  e2.apply = (e3) => {
    try {
      t2.insertRule(e3, r2), ++r2;
    } catch (e4) {
    }
  };
};
var T = Symbol();
var w = o();
var M = (e2, t2) => w(e2, () => (...r2) => {
  let n2 = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const t3 of r2)
    if (null != t3)
      if (t3[l]) {
        null == n2.type && (n2.type = t3[l].type);
        for (const e3 of t3[l].composers)
          n2.composers.add(e3);
      } else
        t3.constructor !== Object || t3.$$typeof ? null == n2.type && (n2.type = t3) : n2.composers.add(C(t3, e2));
  return null == n2.type && (n2.type = "span"), n2.composers.size || n2.composers.add(["PJLV", {}, [], [], {}, []]), P(e2, n2, t2);
});
var C = (_a, i2) => {
  var _b = _a, { variants: e2, compoundVariants: t2, defaultVariants: r2 } = _b, n2 = __objRest(_b, ["variants", "compoundVariants", "defaultVariants"]);
  const o2 = `${S(i2.prefix)}c-${z(n2)}`, l2 = [], s2 = [], d2 = /* @__PURE__ */ Object.create(null), g2 = [];
  for (const e3 in r2)
    d2[e3] = String(r2[e3]);
  if ("object" == typeof e2 && e2)
    for (const t3 in e2) {
      p2 = d2, u2 = t3, c.call(p2, u2) || (d2[t3] = "undefined");
      const r3 = e2[t3];
      for (const e3 in r3) {
        const n3 = { [t3]: String(e3) };
        "undefined" === String(e3) && g2.push(t3);
        const i3 = r3[e3], o3 = [n3, i3, !a(i3)];
        l2.push(o3);
      }
    }
  var p2, u2;
  if ("object" == typeof t2 && t2)
    for (const e3 of t2) {
      let _a2 = e3, { css: t3 } = _a2, r3 = __objRest(_a2, ["css"]);
      t3 = "object" == typeof t3 && t3 || {};
      for (const e4 in r3)
        r3[e4] = String(r3[e4]);
      const n3 = [r3, t3, !a(t3)];
      s2.push(n3);
    }
  return [o2, n2, l2, s2, d2, g2];
};
var P = (e2, t2, r2) => {
  const [n2, i2, o2, a2] = L(t2.composers), c2 = "function" == typeof t2.type || t2.type.$$typeof ? ((e3) => {
    function t3() {
      for (let r3 = 0; r3 < t3[T].length; r3++) {
        const [n3, i3] = t3[T][r3];
        e3.rules[n3].apply(i3);
      }
      return t3[T] = [], null;
    }
    return t3[T] = [], t3.rules = {}, W.forEach((e4) => t3.rules[e4] = { apply: (r3) => t3[T].push([e4, r3]) }), t3;
  })(r2) : null, d2 = (c2 || r2).rules, g2 = `.${n2}${i2.length > 1 ? `:where(.${i2.slice(1).join(".")})` : ""}`, p2 = (l2) => {
    l2 = "object" == typeof l2 && l2 || A;
    const _a = l2, { css: s2 } = _a, p3 = __objRest(_a, ["css"]), u2 = {};
    for (const e3 in o2)
      if (delete p3[e3], e3 in l2) {
        let t3 = l2[e3];
        "object" == typeof t3 && t3 ? u2[e3] = __spreadValues({ "@initial": o2[e3] }, t3) : (t3 = String(t3), u2[e3] = "undefined" !== t3 || a2.has(e3) ? t3 : o2[e3]);
      } else
        u2[e3] = o2[e3];
    const h2 = /* @__PURE__ */ new Set([...i2]);
    for (const [n3, i3, o3, l3] of t2.composers) {
      r2.rules.styled.cache.has(n3) || (r2.rules.styled.cache.add(n3), $(i3, [`.${n3}`], [], e2, (e3) => {
        d2.styled.apply(e3);
      }));
      const t3 = O(o3, u2, e2.media), s3 = O(l3, u2, e2.media, true);
      for (const i4 of t3)
        if (void 0 !== i4)
          for (const [t4, o4, l4] of i4) {
            const i5 = `${n3}-${z(o4)}-${t4}`;
            h2.add(i5);
            const s4 = (l4 ? r2.rules.resonevar : r2.rules.onevar).cache, a3 = l4 ? d2.resonevar : d2.onevar;
            s4.has(i5) || (s4.add(i5), $(o4, [`.${i5}`], [], e2, (e3) => {
              a3.apply(e3);
            }));
          }
      for (const t4 of s3)
        if (void 0 !== t4)
          for (const [i4, o4] of t4) {
            const t5 = `${n3}-${z(o4)}-${i4}`;
            h2.add(t5), r2.rules.allvar.cache.has(t5) || (r2.rules.allvar.cache.add(t5), $(o4, [`.${t5}`], [], e2, (e3) => {
              d2.allvar.apply(e3);
            }));
          }
    }
    if ("object" == typeof s2 && s2) {
      const t3 = `${n2}-i${z(s2)}-css`;
      h2.add(t3), r2.rules.inline.cache.has(t3) || (r2.rules.inline.cache.add(t3), $(s2, [`.${t3}`], [], e2, (e3) => {
        d2.inline.apply(e3);
      }));
    }
    for (const e3 of String(l2.className || "").trim().split(/\s+/))
      e3 && h2.add(e3);
    const f2 = p3.className = [...h2].join(" ");
    return { type: t2.type, className: f2, selector: g2, props: p3, toString: () => f2, deferredInjector: c2 };
  };
  return s(p2, { className: n2, selector: g2, [l]: t2, toString: () => (r2.rules.styled.cache.has(n2) || p2(), n2) });
};
var L = (e2) => {
  let t2 = "";
  const r2 = [], n2 = {}, i2 = [];
  for (const [o2, , , , l2, s2] of e2) {
    "" === t2 && (t2 = o2), r2.push(o2), i2.push(...s2);
    for (const e3 in l2) {
      const t3 = l2[e3];
      (void 0 === n2[e3] || "undefined" !== t3 || s2.includes(t3)) && (n2[e3] = t3);
    }
  }
  return [t2, r2, n2, new Set(i2)];
};
var O = (e2, t2, r2, n2) => {
  const i2 = [];
  e:
    for (let [o2, l2, s2] of e2) {
      if (s2)
        continue;
      let e3, a2 = 0, c2 = false;
      for (e3 in o2) {
        const n3 = o2[e3];
        let i3 = t2[e3];
        if (i3 !== n3) {
          if ("object" != typeof i3 || !i3)
            continue e;
          {
            let e4, t3, o3 = 0;
            for (const l3 in i3) {
              if (n3 === String(i3[l3])) {
                if ("@initial" !== l3) {
                  const e5 = l3.slice(1);
                  (t3 = t3 || []).push(e5 in r2 ? r2[e5] : l3.replace(/^@media ?/, "")), c2 = true;
                }
                a2 += o3, e4 = true;
              }
              ++o3;
            }
            if (t3 && t3.length && (l2 = { ["@media " + t3.join(", ")]: l2 }), !e4)
              continue e;
          }
        }
      }
      (i2[a2] = i2[a2] || []).push([n2 ? "cv" : `${e3}-${o2[e3]}`, l2, c2]);
    }
  return i2;
};
var A = {};
var N = o();
var D = (e2, t2) => N(e2, () => (...r2) => {
  const n2 = () => {
    for (let n3 of r2) {
      n3 = "object" == typeof n3 && n3 || {};
      let r3 = z(n3);
      if (!t2.rules.global.cache.has(r3)) {
        if (t2.rules.global.cache.add(r3), "@import" in n3) {
          let e3 = [].indexOf.call(t2.sheet.cssRules, t2.rules.themed.group) - 1;
          for (let r4 of [].concat(n3["@import"]))
            r4 = r4.includes('"') || r4.includes("'") ? r4 : `"${r4}"`, t2.sheet.insertRule(`@import ${r4};`, e3++);
          delete n3["@import"];
        }
        $(n3, [], [], e2, (e3) => {
          t2.rules.global.apply(e3);
        });
      }
    }
    return "";
  };
  return s(n2, { toString: n2 });
});
var H = o();
var V = (e2, t2) => H(e2, () => (r2) => {
  const n2 = `${S(e2.prefix)}k-${z(r2)}`, i2 = () => {
    if (!t2.rules.global.cache.has(n2)) {
      t2.rules.global.cache.add(n2);
      const i3 = [];
      $(r2, [], [], e2, (e3) => i3.push(e3));
      const o2 = `@keyframes ${n2}{${i3.join("")}}`;
      t2.rules.global.apply(o2);
    }
    return n2;
  };
  return s(i2, { get name() {
    return i2();
  }, toString: i2 });
});
var G = class {
  constructor(e2, t2, r2, n2) {
    this.token = null == e2 ? "" : String(e2), this.value = null == t2 ? "" : String(t2), this.scale = null == r2 ? "" : String(r2), this.prefix = null == n2 ? "" : String(n2);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + S(this.prefix) + S(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
};
var F = o();
var J = (e2, t2) => F(e2, () => (r2, n2) => {
  n2 = "object" == typeof r2 && r2 || Object(n2);
  const i2 = `.${r2 = (r2 = "string" == typeof r2 ? r2 : "") || `${S(e2.prefix)}t-${z(n2)}`}`, o2 = {}, l2 = [];
  for (const t3 in n2) {
    o2[t3] = {};
    for (const r3 in n2[t3]) {
      const i3 = `--${S(e2.prefix)}${t3}-${r3}`, s3 = k(String(n2[t3][r3]), e2.prefix, t3);
      o2[t3][r3] = new G(r3, s3, t3, e2.prefix), l2.push(`${i3}:${s3}`);
    }
  }
  const s2 = () => {
    if (l2.length && !t2.rules.themed.cache.has(r2)) {
      t2.rules.themed.cache.add(r2);
      const i3 = `${n2 === e2.theme ? ":root," : ""}.${r2}{${l2.join(";")}}`;
      t2.rules.themed.apply(i3);
    }
    return r2;
  };
  return __spreadProps(__spreadValues({}, o2), { get className() {
    return s2();
  }, selector: i2, toString: s2 });
});
var U = o();
var X;
var Y = o();
var q = (e2) => {
  const t2 = ((e3) => {
    let t3 = false;
    const r2 = U(e3, (e4) => {
      t3 = true;
      const r3 = "prefix" in (e4 = "object" == typeof e4 && e4 || {}) ? String(e4.prefix) : "", i2 = "object" == typeof e4.media && e4.media || {}, o2 = "object" == typeof e4.root ? e4.root || null : globalThis.document || null, l2 = "object" == typeof e4.theme && e4.theme || {}, s2 = { prefix: r3, media: i2, theme: l2, themeMap: "object" == typeof e4.themeMap && e4.themeMap || __spreadValues({}, n), utils: "object" == typeof e4.utils && e4.utils || {} }, a2 = E(o2), c2 = { css: M(s2, a2), globalCss: D(s2, a2), keyframes: V(s2, a2), createTheme: J(s2, a2), reset() {
        a2.reset(), c2.theme.toString();
      }, theme: {}, sheet: a2, config: s2, prefix: r3, getCssText: a2.toString, toString: a2.toString };
      return String(c2.theme = c2.createTheme(l2)), c2;
    });
    return t3 || r2.reset(), r2;
  })(e2);
  return t2.styled = (({ config: e3, sheet: t3 }) => Y(e3, () => {
    const r2 = M(e3, t3);
    return (...e4) => {
      const t4 = r2(...e4), n2 = t4[l].type, i2 = Z.forwardRef((e5, r3) => {
        const i3 = e5 && e5.as || n2, { props: o2, deferredInjector: l2 } = t4(e5);
        return delete o2.as, o2.ref = r3, l2 ? Z.createElement(Z.Fragment, null, Z.createElement(i3, o2), Z.createElement(l2, null)) : Z.createElement(i3, o2);
      });
      return i2.className = t4.className, i2.displayName = `Styled.${n2.displayName || n2.name || n2}`, i2.selector = t4.selector, i2.toString = () => t4.selector, i2[l] = t4[l], i2;
    };
  }))(t2), t2;
};
var K = () => X || (X = q());
var re = (...e2) => K().styled(...e2);

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D",
  test: "#FFF"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.tsx
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = q({
  themeMap: __spreadProps(__spreadValues({}, n), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$6",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});
Box.displayName = "Box";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeights: "$shorter",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// ../../node_modules/phosphor-react/dist/lib/index.esm.js
import { createContext } from "react";
var IconContext = /* @__PURE__ */ createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});
var renderPathForWeight = function renderPathForWeight2(weight, color, pathsByWeight3) {
  var path = pathsByWeight3.get(weight);
  if (!!path)
    return path(color);
  console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
  return null;
};

// ../../node_modules/phosphor-react/dist/lib/IconBase.esm.js
import React, { forwardRef, useContext } from "react";

// ../../node_modules/phosphor-react/dist/_virtual/_rollupPluginBabelHelpers.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// ../../node_modules/phosphor-react/dist/lib/IconBase.esm.js
var IconBase = /* @__PURE__ */ forwardRef(function(props, ref) {
  var alt = props.alt, color = props.color, size = props.size, weight = props.weight, mirrored = props.mirrored, children = props.children, renderPath5 = props.renderPath, restProps = _objectWithoutPropertiesLoose(props, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]);
  var _useContext = useContext(IconContext), _useContext$color = _useContext.color, contextColor = _useContext$color === void 0 ? "currentColor" : _useContext$color, contextSize = _useContext.size, _useContext$weight = _useContext.weight, contextWeight = _useContext$weight === void 0 ? "regular" : _useContext$weight, _useContext$mirrored = _useContext.mirrored, contextMirrored = _useContext$mirrored === void 0 ? false : _useContext$mirrored, restContext = _objectWithoutPropertiesLoose(_useContext, ["color", "size", "weight", "mirrored"]);
  return React.createElement("svg", Object.assign({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size != null ? size : contextSize,
    height: size != null ? size : contextSize,
    fill: color != null ? color : contextColor,
    viewBox: "0 0 256 256",
    transform: mirrored || contextMirrored ? "scale(-1, 1)" : void 0
  }, restContext, restProps), !!alt && React.createElement("title", null, alt), children, React.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), renderPath5(weight != null ? weight : contextWeight, color != null ? color : contextColor));
});
IconBase.displayName = "IconBase";
var IconBase_esm_default = IconBase;

// ../../node_modules/phosphor-react/dist/icons/Check.esm.js
import React2, { forwardRef as forwardRef2 } from "react";
var pathsByWeight = /* @__PURE__ */ new Map();
pathsByWeight.set("bold", function(color) {
  return React2.createElement(React2.Fragment, null, React2.createElement("polyline", {
    points: "216 72 104 184 48 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function(color) {
  return React2.createElement(React2.Fragment, null, React2.createElement("polyline", {
    points: "216 72 104 184 48 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function() {
  return React2.createElement(React2.Fragment, null, React2.createElement("path", {
    d: "M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"
  }));
});
pathsByWeight.set("light", function(color) {
  return React2.createElement(React2.Fragment, null, React2.createElement("polyline", {
    points: "216 72 104 184 48 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function(color) {
  return React2.createElement(React2.Fragment, null, React2.createElement("polyline", {
    points: "216 72 104 184 48 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function(color) {
  return React2.createElement(React2.Fragment, null, React2.createElement("polyline", {
    points: "216 72 104 184 48 128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath = function renderPath2(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};
var Check = /* @__PURE__ */ forwardRef2(function(props, ref) {
  return React2.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath
  }));
});
Check.displayName = "Check";
var Check_esm_default = Check;

// ../../node_modules/phosphor-react/dist/icons/User.esm.js
import React3, { forwardRef as forwardRef3 } from "react";
var pathsByWeight2 = /* @__PURE__ */ new Map();
pathsByWeight2.set("bold", function(color) {
  return React3.createElement(React3.Fragment, null, React3.createElement("circle", {
    cx: "128",
    cy: "96",
    r: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), React3.createElement("path", {
    d: "M31,216a112,112,0,0,1,194,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight2.set("duotone", function(color) {
  return React3.createElement(React3.Fragment, null, React3.createElement("circle", {
    cx: "128",
    cy: "96",
    r: "64",
    opacity: "0.2"
  }), React3.createElement("circle", {
    cx: "128",
    cy: "96",
    r: "64",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), React3.createElement("path", {
    d: "M31,216a112,112,0,0,1,194,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight2.set("fill", function() {
  return React3.createElement(React3.Fragment, null, React3.createElement("path", {
    d: "M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"
  }));
});
pathsByWeight2.set("light", function(color) {
  return React3.createElement(React3.Fragment, null, React3.createElement("circle", {
    cx: "128",
    cy: "96",
    r: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), React3.createElement("path", {
    d: "M31,216a112,112,0,0,1,194,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight2.set("thin", function(color) {
  return React3.createElement(React3.Fragment, null, React3.createElement("circle", {
    cx: "128",
    cy: "96",
    r: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), React3.createElement("path", {
    d: "M31,216a112,112,0,0,1,194,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight2.set("regular", function(color) {
  return React3.createElement(React3.Fragment, null, React3.createElement("circle", {
    cx: "128",
    cy: "96",
    r: "64",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), React3.createElement("path", {
    d: "M31,216a112,112,0,0,1,194,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath3 = function renderPath4(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight2);
};
var User = /* @__PURE__ */ forwardRef3(function(props, ref) {
  return React3.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath: renderPath3
  }));
});
User.displayName = "User";
var User_esm_default = User;

// src/components/Avatar/styles.ts
import * as Avatar from "@radix-ui/react-avatar";
var AvatarContainer = re(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$16",
  height: "$16",
  overflow: "hidden"
});
var AvatarImage = re(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = re(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Avatar2(props) {
  return /* @__PURE__ */ jsxs(AvatarContainer, {
    children: [
      /* @__PURE__ */ jsx(AvatarImage, __spreadValues({}, props)),
      /* @__PURE__ */ jsx(AvatarFallback, {
        delayMs: 600,
        children: /* @__PURE__ */ jsx(User_esm_default, {})
      })
    ]
  });
}
Avatar2.displayName = "Avatar";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:focus": {
    boxShadow: "0 0 0 2px $colors$gray100"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$ignite500",
        "&:not(:disabled):hover": {
          background: "$ignite300"
        },
        "&:disabled": {
          background: "$gray200"
        }
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",
        "&:not(:disabled):hover": {
          background: "$ignite500",
          color: "$white"
        },
        "&:disabled": {
          borderColor: "$gray200",
          color: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      }
    },
    size: {
      sm: {
        height: 36
      },
      md: {
        padding: "0 $4",
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/TextInput/index.tsx
import { forwardRef as forwardRef4 } from "react";

// src/components/TextInput/styles.ts
var TextInputContainer = re("div", {
  background: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "center",
  variants: {
    size: {
      sm: {
        padding: "$2 $4"
      },
      md: {
        padding: "$3 $4"
      }
    }
  },
  "&:has(input:focus)": {
    borderColor: "$ignite300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
});
var Prefix = re("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "regular",
  color: "$gray400"
});
var Input = re("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "regular",
  backgroundColor: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&::placeholder": {
    color: "$gray400"
  }
});

// src/components/TextInput/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var TextInput = forwardRef4(
  (_a, ref) => {
    var _b = _a, { prefix } = _b, props = __objRest(_b, ["prefix"]);
    return /* @__PURE__ */ jsxs2(TextInputContainer, {
      children: [
        !!prefix && /* @__PURE__ */ jsx2(Prefix, {
          children: prefix
        }),
        /* @__PURE__ */ jsx2(Input, __spreadProps(__spreadValues({}, props), {
          ref
        }))
      ]
    });
  }
);
TextInput.displayName = "TextInput";

// src/components/TextArea.tsx
var TextArea = styled("textarea", {
  background: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontweight: "$regular",
  resize: "vertical",
  minHeight: 80,
  display: "flex",
  alignItems: "baseline",
  "&:focus": {
    outline: 0,
    borderColor: "$ignite300"
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "Textarea";

// src/components/Checkbox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid $gray900",
  '&[data-state="checked"]': {
    backgroundColor: "$ignite300"
  },
  '&:focus, &[data-state="checked"]': {
    border: "2px solid $gray300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Checkbox2(props) {
  return /* @__PURE__ */ jsx3(CheckboxContainer, __spreadProps(__spreadValues({}, props), {
    children: /* @__PURE__ */ jsx3(CheckboxIndicator, {
      asChild: true,
      children: /* @__PURE__ */ jsx3(Check_esm_default, {
        weight: "bold"
      })
    })
  }));
}
Checkbox2.displayName = "Checkbox";

// src/components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  gap: "$2",
  marginTop: "$1"
});
var Step = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/MultiStep/index.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ jsxs3(MultiStepContainer, {
    children: [
      /* @__PURE__ */ jsxs3(Label, {
        children: [
          currentStep,
          " of ",
          size
        ]
      }),
      /* @__PURE__ */ jsx4(Steps, {
        css: { "--steps-size": size },
        children: Array.from({ length: size }, (_, i2) => i2 + 1).map((step) => {
          return /* @__PURE__ */ jsx4(Step, {
            active: currentStep >= step
          }, step);
        })
      })
    ]
  });
}
MultiStep.displayName = "MultiStep";
export {
  Avatar2 as Avatar,
  Box,
  Button,
  Checkbox2 as Checkbox,
  Heading,
  MultiStep,
  Text,
  TextArea,
  TextInput,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
};
