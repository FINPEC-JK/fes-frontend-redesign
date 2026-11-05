/* @ds-bundle: {"format":4,"namespace":"FINPECDesignSystem_f2149b","components":[{"name":"LoginScreen","sourcePath":"components/auth/LoginScreen.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"KpiCard","sourcePath":"components/data/KpiCard.jsx"},{"name":"Pager","sourcePath":"components/data/Pager.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"MoneyInput","sourcePath":"components/forms/MoneyInput.jsx"},{"name":"RadioCard","sourcePath":"components/forms/RadioCard.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"ImageThumb","sourcePath":"components/media/ImageThumb.jsx"},{"name":"ImageThumbGrid","sourcePath":"components/media/ImageThumb.jsx"},{"name":"ImageViewer","sourcePath":"components/media/ImageViewer.jsx"},{"name":"Lightbox","sourcePath":"components/media/Lightbox.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Topbar","sourcePath":"components/navigation/Topbar.jsx"}],"sourceHashes":{"components/auth/LoginScreen.jsx":"034fa29b1006","components/core/Avatar.jsx":"37e32c6408f3","components/core/Button.jsx":"e18bb32d0816","components/core/Card.jsx":"4e8c06227cc4","components/core/IconButton.jsx":"c7431158e454","components/core/Pill.jsx":"c33bf4572ec4","components/core/Tag.jsx":"e52911dcf5a3","components/data/BarChart.jsx":"a8623b2b821d","components/data/DataTable.jsx":"84fbfeb08f9d","components/data/KpiCard.jsx":"0602ed27fdcb","components/data/Pager.jsx":"abf8ca799c6c","components/feedback/EmptyState.jsx":"8b4068fd2f5a","components/feedback/Toast.jsx":"f945769da87f","components/forms/Checkbox.jsx":"c50358627dc6","components/forms/Field.jsx":"dcc77703c052","components/forms/Input.jsx":"1c43b63b3a19","components/forms/MoneyInput.jsx":"cfd8c0a75f72","components/forms/RadioCard.jsx":"4a5143f7b283","components/forms/Select.jsx":"190fb3a0c176","components/media/ImageThumb.jsx":"0558ae76d3ff","components/media/ImageViewer.jsx":"3ce4d08956dd","components/media/Lightbox.jsx":"f8d143778682","components/navigation/Sidebar.jsx":"2b10732d8ace","components/navigation/Topbar.jsx":"3c1edf46da7c","ui_kits/foxe/foxe-screens.jsx":"6d5a3afab981","ui_kits/foxe/foxe-shared.jsx":"4393e48f6ff3","ui_kits/foxe/foxe-theme.js":"515853121052","ui_kits/painel/painel-screens.jsx":"aeb98f4f0db5","ui_kits/painel/painel-shared.jsx":"1e027caba876"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FINPECDesignSystem_f2149b = window.FINPECDesignSystem_f2149b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/auth/LoginScreen.jsx
try { (() => {
const DEFAULT_NOTES = [{
  title: "Correções de validação",
  items: []
}, {
  title: "Evolução da plataforma",
  items: []
}, {
  title: "Requisitos funcionais",
  items: []
}, {
  title: "Requisitos não funcionais",
  items: []
}];
function MsLogo() {
  const sq = bg => /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      background: bg,
      display: "block"
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "grid",
      gridTemplateColumns: "12px 12px",
      gap: 2
    }
  }, sq("#F25022"), sq("#7FBA00"), sq("#00A4EF"), sq("#FFB900"));
}
function Chevron({
  open
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: open ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"
  }));
}

/**
 * Standard FINPEC login screen (all systems): dark left panel with brand
 * lockup, title, description and the access block (SSO, user+password or
 * both) + full-bleed product image on the right with an expandable vertical
 * "Release notes" tab.
 */
function LoginScreen({
  logoSrc = "",
  systemName = "",
  systemTagline = "",
  title = "",
  description = "",
  heading = "Acesse sua conta",
  subheading = null,
  methods = "sso",
  ssoLabel = "Entrar com Microsoft",
  onSso,
  onSubmit,
  forgotLabel = "Esqueci a senha",
  onForgot,
  footnote = null,
  imageSrc = "",
  release = null,
  releaseNotes = DEFAULT_NOTES,
  defaultReleaseOpen = false,
  className = ""
}) {
  const [open, setOpen] = React.useState(defaultReleaseOpen);
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  const showSso = methods === "sso" || methods === "both";
  const showPwd = methods === "password" || methods === "both";
  const sub = subheading != null ? subheading : methods === "sso" ? "Use sua conta corporativa Microsoft para acessar a plataforma." : methods === "password" ? "Informe seu usuário e senha para acessar a plataforma." : "Use sua conta corporativa Microsoft ou seu usuário e senha.";
  const note = footnote != null ? footnote : methods === "sso" ? "O reset de senha é feito pelo botão acima" : null;
  const inputS = {
    width: "100%",
    boxSizing: "border-box",
    height: 48,
    padding: "0 14px",
    background: "#1A1917",
    border: "1px solid #34322D",
    borderRadius: 6,
    color: "#F2EFE9",
    font: "400 15px/1 var(--font-ui)",
    outline: "none"
  };
  const labelS = {
    display: "block",
    font: "500 13px/1 var(--font-ui)",
    color: "#BDB8AE",
    marginBottom: 8
  };
  const bg = imageSrc ? "#3a3128 url(\"" + imageSrc + "\") center/cover no-repeat" : "#3a3128";
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "grid",
      gridTemplateColumns: "500px minmax(0,1fr)",
      height: "100%",
      minHeight: 640,
      background: "#0F0F0E"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0F0F0E",
      color: "#fff",
      padding: "112px 40px 48px",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 22
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "FINPEC",
    style: {
      width: 104,
      height: "auto",
      flex: "none"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) 20px/1 var(--font-display)",
      letterSpacing: "var(--ls-brand)"
    }
  }, "FINPEC"), (systemName || systemTagline) && /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, systemName && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 26px/1.1 var(--font-display)",
      color: "#fff"
    }
  }, systemName), systemTagline && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/1.3 var(--font-ui)",
      color: "#C9C5BD",
      textTransform: "uppercase",
      marginTop: 12
    }
  }, systemTagline))), title && /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "400 38px/1.2 var(--font-display)",
      letterSpacing: "-0.01em",
      color: "#fff",
      margin: "56px 0 0",
      textWrap: "pretty"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 16px/1.5 var(--font-ui)",
      color: "#C9C5BD",
      margin: "52px 0 0",
      textWrap: "pretty"
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 64
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "400 26px/1.2 var(--font-display)",
      color: "#fff",
      margin: 0
    }
  }, heading), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 13px/1.45 var(--font-ui)",
      color: "#C9C5BD",
      margin: "14px 0 26px"
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, showSso && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSso,
    style: {
      height: 68,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      background: "#fff",
      color: "#1B1A17",
      border: "1px solid #D9D6CF",
      borderRadius: 4,
      font: "500 15px/1 var(--font-ui)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(MsLogo, null), ssoLabel), methods === "both" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      color: "#8C877D",
      font: "500 12px/1 var(--font-ui)",
      textTransform: "uppercase",
      letterSpacing: ".08em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "#2E2C28"
    }
  }), "ou", /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "#2E2C28"
    }
  })), showPwd && /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (onSubmit) onSubmit({
        user: user,
        password: pass
      });
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    style: labelS
  }, "Usu\xE1rio"), /*#__PURE__*/React.createElement("input", {
    style: inputS,
    value: user,
    onChange: e => setUser(e.target.value),
    autoComplete: "username"
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    style: labelS
  }, "Senha"), /*#__PURE__*/React.createElement("input", {
    style: inputS,
    type: "password",
    value: pass,
    onChange: e => setPass(e.target.value),
    autoComplete: "current-password"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (onForgot) onForgot();
    },
    style: {
      color: "#9DB8EC",
      font: "500 13px/1 var(--font-ui)",
      textDecoration: "none"
    }
  }, forgotLabel)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      height: 52,
      width: "100%",
      background: "var(--primary)",
      color: "#fff",
      border: 0,
      borderRadius: 4,
      font: "600 15px/1 var(--font-ui)",
      cursor: "pointer"
    }
  }, "Entrar"))), note && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 12px/1.4 var(--font-ui)",
      color: "#C9C5BD",
      margin: "72px 0 0"
    }
  }, note))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: "25%",
      display: "flex",
      alignItems: "flex-start"
    }
  }, open && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      height: 400,
      boxSizing: "border-box",
      background: "#fff",
      borderRadius: "0 0 12px 0",
      padding: "24px 22px",
      color: "#1B1A17",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 17px/1.2 var(--font-ui)",
      marginBottom: 14
    }
  }, "Release notes", release ? " — Build " + release : ""), releaseNotes.map((s, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    style: {
      borderLeft: "2px solid #E6E8EE",
      padding: "4px 8px",
      font: "400 14px/1.5 var(--font-ui)"
    }
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      cursor: "pointer"
    }
  }, s.title), s.items && s.items.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "6px 0 4px",
      paddingLeft: 20,
      color: "#4A4740"
    }
  }, s.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, it)))))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(!open),
    "aria-expanded": open,
    "aria-label": "Release notes",
    style: {
      width: 40,
      height: 400,
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
      padding: "74px 0 0",
      background: "#fff",
      border: open ? 0 : "2px solid var(--primary)",
      borderLeft: 0,
      borderRadius: "0 10px 10px 0",
      color: "var(--primary)",
      cursor: "pointer",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Chevron, {
    open: open
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      font: "400 17px/1 var(--font-ui)",
      whiteSpace: "nowrap"
    }
  }, release ? release + " " : "", "Release notes")))));
}
Object.assign(__ds_scope, { LoginScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/auth/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — gradient initials chip. Pass `src` for a photo, otherwise
 * `name` initials render on the brand gradient. `size` in px.
 */
function Avatar({
  name = "",
  src = null,
  size = 36,
  className = "",
  ...rest
}) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const style = {
    width: size,
    height: size,
    fontSize: Math.round(size * 0.36)
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["fp-avatar", className].filter(Boolean).join(" "),
    style: style
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FINPEC primary button. Renders the .fp-btn class layer from the
 * design system stylesheet. Use `variant` for intent and `size`
 * for density; pass an SVG via `icon` to lead with a glyph.
 */
function Button({
  variant = "primary",
  size = "md",
  icon = null,
  iconRight = null,
  block = false,
  type = "button",
  className = "",
  children,
  ...rest
}) {
  const cls = ["fp-btn", `fp-btn-${variant}`, size === "sm" ? "fp-btn-sm" : size === "lg" ? "fp-btn-lg" : "", !children ? "fp-btn-icon" : "", block ? "fp-btn-block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card surface. Compose with `title` (+ optional `count`, `actions`)
 * to render the bordered header, or pass only `children` for a bare
 * surface. `bodyless` skips the inner padding wrapper (e.g. for tables).
 */
function Card({
  title = null,
  count = null,
  actions = null,
  bodyless = false,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["fp-card", className].filter(Boolean).join(" ")
  }, rest), (title || actions) && /*#__PURE__*/React.createElement("div", {
    className: "fp-card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-card-title"
  }, title, count != null && /*#__PURE__*/React.createElement("span", {
    className: "fp-count-pill"
  }, count)), actions), bodyless ? children : /*#__PURE__*/React.createElement("div", {
    className: "fp-card-body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Chrome icon button — transparent, used in topbars and toolbars. */
function IconButton({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: ["fp-icon-btn", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Status pill. Solid-soft tinted chip for state labels (status,
 * category, count). Set `dot` to show a leading status dot.
 */
function Pill({
  tone = "neutral",
  dot = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["fp-pill", `fp-pill-${tone}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Compact metadata tag with an outlined paper look. Optional leading icon. */
function Tag({
  icon = null,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["fp-tag", className].filter(Boolean).join(" ")
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
/**
 * Sober bar chart. Pass `data` as [{ label, value }]; bars scale to the
 * max value. Deliberately flat — soft accent track, solid accent fill,
 * tooltip on hover via the native title.
 */
function BarChart({
  data = [],
  height = 120,
  className = ""
}) {
  const max = Math.max(1, ...data.map(d => d.value));
  return /*#__PURE__*/React.createElement("div", {
    className: ["fp-bars", className].filter(Boolean).join(" "),
    style: {
      height
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "fp-bar",
    style: {
      height: "100%"
    },
    title: `${d.label}: ${d.value}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "fill",
    style: {
      height: `${d.value / max * 100}%`
    }
  }))));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/**
 * Data table. Column-driven: each column is { key, label, num?, render? }.
 * `num` right-aligns and tabular-aligns the column; `render(row)` lets a
 * cell return custom content (pills, money, actions). Wrap in a Card with
 * `bodyless` for the full panel look.
 */
function DataTable({
  columns = [],
  rows = [],
  dense = false,
  rowKey = "id",
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-table-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: ["fp-grid", dense ? "dense" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: c.num ? "num" : "",
    style: c.width ? {
      width: c.width
    } : undefined
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row[rowKey] ?? i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: c.num ? "num" : ""
  }, c.render ? c.render(row) : row[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiCard.jsx
try { (() => {
const ToneMap = {
  primary: ["var(--primary-soft)", "var(--primary)"],
  accent: ["var(--accent-soft)", "var(--accent)"],
  info: ["var(--info-soft)", "var(--info)"],
  ok: ["var(--ok-soft)", "var(--ok)"],
  warn: ["var(--warn-soft)", "var(--warn)"],
  danger: ["var(--danger-soft)", "var(--danger)"],
  neutral: ["var(--neutral-soft)", "var(--neutral-ink)"]
};

/**
 * KPI stat card — label + optional icon, a large display-font value
 * with optional currency prefix and unit, and a footer trend. The
 * headline metric pattern across FINPEC dashboards.
 *
 * For monetary read-only values, pass prefix="R$" (rendered tight before
 * the value) and unit="bi" / "mi" (rendered with breathing room after):
 * → R$1,84 bi
 */
function KpiCard({
  label,
  value,
  prefix = null,
  unit = null,
  icon = null,
  tone = "primary",
  trend = null,
  foot = null,
  className = ""
}) {
  const [bg, fg] = ToneMap[tone] || ToneMap.primary;
  return /*#__PURE__*/React.createElement("div", {
    className: ["fp-kpi", "fp-fade-in", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-kpi-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fp-kpi-label"
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    className: "fp-kpi-ic",
    style: {
      background: bg,
      color: fg
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    className: "fp-kpi-value"
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "prefix"
  }, prefix), value, unit && /*#__PURE__*/React.createElement("span", {
    className: "unit"
  }, unit)), (trend || foot) && /*#__PURE__*/React.createElement("div", {
    className: "fp-kpi-foot"
  }, trend && /*#__PURE__*/React.createElement("span", {
    className: `fp-trend ${trend.dir}`
  }, trend.dir === "up" ? "▲" : trend.dir === "down" ? "▼" : "", " ", trend.label), foot && /*#__PURE__*/React.createElement("span", null, "\xB7 ", foot)));
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Pager.jsx
try { (() => {
/** Pagination control. Controlled via `page` (1-based) + `onChange`. */
function Pager({
  page = 1,
  totalPages = 1,
  label = null,
  onChange,
  className = ""
}) {
  const go = p => onChange && p >= 1 && p <= totalPages && p !== page && onChange(p);
  const pages = [];
  const push = p => pages.push(p);
  push(1);
  let lo = Math.max(2, page - 1),
    hi = Math.min(totalPages - 1, page + 1);
  if (lo > 2) pages.push("…");
  for (let p = lo; p <= hi; p++) push(p);
  if (hi < totalPages - 1) pages.push("…");
  if (totalPages > 1) push(totalPages);
  return /*#__PURE__*/React.createElement("div", {
    className: ["fp-pager", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("span", null, label || `Página ${page} de ${totalPages}`), /*#__PURE__*/React.createElement("div", {
    className: "fp-pager-pages"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fp-pg",
    onClick: () => go(page - 1),
    disabled: page <= 1,
    "aria-label": "Anterior"
  }, "\u2039"), pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `g${i}`,
    className: "fp-pg gap"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    className: ["fp-pg", p === page ? "on" : ""].join(" "),
    onClick: () => go(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    className: "fp-pg",
    onClick: () => go(page + 1),
    disabled: page >= totalPages,
    "aria-label": "Pr\xF3xima"
  }, "\u203A")));
}
Object.assign(__ds_scope, { Pager });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pager.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/** Empty / zero-data state — icon, title, message and optional action. */
function EmptyState({
  icon = null,
  title,
  message = null,
  action = null,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["fp-empty", className].filter(Boolean).join(" ")
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, icon), title && /*#__PURE__*/React.createElement("div", {
    className: "et"
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 360
    }
  }, message), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline toast / notification chip on dark ink. Use `tone` for the icon color. */
function Toast({
  tone = "default",
  icon = null,
  className = "",
  children,
  ...rest
}) {
  const cls = ["fp-toast", tone !== "default" ? tone : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "status"
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, icon), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Check = () => /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));

/** Checkbox with the FINPEC accent fill. Controlled via `checked` + `onChange`. */
function Checkbox({
  checked = false,
  onChange,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    className: ["fp-checkbox", checked ? "on" : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "box"
  }, checked && /*#__PURE__*/React.createElement(Check, null)), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/**
 * Field wrapper — label (+ optional required mark and hint) above any
 * control. Compose with Input / Select / Textarea or custom controls.
 */
function Field({
  label,
  required = false,
  hint = null,
  htmlFor,
  className = "",
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["fp-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, " *")), children, hint && /*#__PURE__*/React.createElement("span", {
    className: "hint"
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input. Pass `as="textarea"` for a multiline field. */
function Input({
  as = "input",
  className = "",
  ...rest
}) {
  const cls = ["fp-input", className].filter(Boolean).join(" ");
  if (as === "textarea") return /*#__PURE__*/React.createElement("textarea", _extends({
    className: cls
  }, rest));
  return /*#__PURE__*/React.createElement("input", _extends({
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/MoneyInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ---- Masking helpers (right-to-left, decimal-safe) ---- */
function fmtDigits(digits, decimals) {
  const clean = (digits || "").replace(/\D/g, "");
  const padded = clean.padStart(decimals + 1, "0");
  const cut = padded.length - decimals;
  let intPart = padded.slice(0, cut).replace(/^0+(?=\d)/, "");
  const decPart = decimals > 0 ? padded.slice(cut) : "";
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return decimals > 0 ? intPart + "," + decPart : intPart;
}
function render(digits, mask, decimals) {
  const n = fmtDigits(digits, decimals);
  return mask === "percent" ? n + "%" : "R$" + n;
}
function digitsFromNumber(num, decimals) {
  if (num == null || num === "") return "";
  return String(Math.round(Number(num) * Math.pow(10, decimals)));
}

/**
 * Masked numeric input — currency (R$0,00) or percent (0,00%). Digits fill
 * from the RIGHT, always respecting the decimal places: typing 1 → 8 → 4
 * yields R$0,01 → R$0,18 → R$1,84. The mask is shown even when empty.
 * `onValueChange(number)` reports the parsed numeric value.
 */
function MoneyInput({
  mask = "currency",
  decimals = 2,
  defaultValue = null,
  value,
  onValueChange,
  className = "",
  ...rest
}) {
  const controlled = value !== undefined;
  const [digits, setDigits] = React.useState(() => digitsFromNumber(defaultValue, decimals));
  const current = controlled ? digitsFromNumber(value, decimals) : digits;
  const handle = e => {
    const d = e.target.value.replace(/\D/g, "").replace(/^0+/, "");
    if (!controlled) setDigits(d);
    if (onValueChange) onValueChange(d ? parseInt(d, 10) / Math.pow(10, decimals) : 0);
  };
  return /*#__PURE__*/React.createElement("input", _extends({
    inputMode: "numeric",
    className: ["fp-input", "fp-input-num", className].filter(Boolean).join(" "),
    value: render(current, mask, decimals),
    onChange: handle
  }, rest));
}
Object.assign(__ds_scope, { MoneyInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/MoneyInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selectable radio card — title + description with a radio dot. Use a
 * group of these for mutually-exclusive, explained choices.
 */
function RadioCard({
  title,
  desc = null,
  selected = false,
  onSelect,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["fp-radio-card", selected ? "sel" : "", className].filter(Boolean).join(" "),
    onClick: onSelect,
    role: "radio",
    "aria-checked": selected
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "fp-radio-dot"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "fp-rc-title"
  }, title), desc && /*#__PURE__*/React.createElement("div", {
    className: "fp-rc-desc"
  }, desc)));
}
Object.assign(__ds_scope, { RadioCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled with the FINPEC chevron. Pass `<option>`s as children. */
function Select({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: ["fp-select", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/media/ImageThumb.jsx
try { (() => {
/**
 * Image thumbnail — fixed aspect-ratio crop with hover caption overlay,
 * a status pill in the corner, an optional zoom-in affordance, and a
 * loading skeleton shimmer. Click opens the parent's viewer/lightbox.
 */
function ImageThumb({
  src,
  alt = "",
  caption = null,
  sub = null,
  badge = null,
  badgeTone = "neutral",
  loading = false,
  onClick,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["fp-img-thumb", loading ? "skeleton" : ""].filter(Boolean).join(" ") + (className ? " " + className : ""),
    onClick: onClick,
    style: style,
    role: onClick ? "button" : undefined
  }, !loading && src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy"
  }), !loading && onClick && /*#__PURE__*/React.createElement("span", {
    className: "zoom-hint"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 8v6M8 11h6"
  }))), badge && /*#__PURE__*/React.createElement("span", {
    className: "badge-corner"
  }, /*#__PURE__*/React.createElement("span", {
    className: `fp-pill fp-pill-${badgeTone}`
  }, badge)), (caption || sub) && /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cap"
  }, caption, sub && /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, sub))));
}

/** Responsive grid of ImageThumb cards — auto-fills, min 150px per cell. */
function ImageThumbGrid({
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["fp-thumb-grid", className].filter(Boolean).join(" ")
  }, children);
}
Object.assign(__ds_scope, { ImageThumb, ImageThumbGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ImageThumb.jsx", error: String((e && e.message) || e) }); }

// components/media/ImageViewer.jsx
try { (() => {
/**
 * Pan/zoom image viewer — wheel to zoom, drag to pan, toolbar with
 * +/- / reset / fit. Optional `boxes` overlay draws bounding boxes
 * (percent-based coords) for annotation/audit review, e.g. FOXE
 * cattle-count results.
 */
function ImageViewer({
  src,
  alt = "",
  boxes = [],
  badge = null,
  badgeTone = "info",
  height = 420,
  minZoom = 1,
  maxZoom = 6,
  onClose = null,
  className = ""
}) {
  const stageRef = React.useRef(null);
  const [zoom, setZoom] = React.useState(1);
  const [pos, setPos] = React.useState({
    x: 0,
    y: 0
  });
  const drag = React.useRef(null);
  const clamp = z => Math.min(maxZoom, Math.max(minZoom, z));
  const zoomTo = z => setZoom(clamp(z));
  const reset = () => {
    setZoom(1);
    setPos({
      x: 0,
      y: 0
    });
  };
  const onWheel = e => {
    e.preventDefault();
    const delta = -e.deltaY * 0.0016;
    zoomTo(zoom + zoom * delta);
  };
  const onPointerDown = e => {
    drag.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: pos.x,
      origY: pos.y
    };
    stageRef.current && stageRef.current.setPointerCapture(e.pointerId);
  };
  const onPointerMove = e => {
    if (!drag.current) return;
    setPos({
      x: drag.current.origX + (e.clientX - drag.current.startX),
      y: drag.current.origY + (e.clientY - drag.current.startY)
    });
  };
  const onPointerUp = () => {
    drag.current = null;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ["fp-viewer", className].filter(Boolean).join(" "),
    style: {
      height
    }
  }, badge && /*#__PURE__*/React.createElement("span", {
    className: "fp-viewer-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: `fp-pill fp-pill-${badgeTone}`
  }, badge)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "fp-viewer-close",
    onClick: onClose,
    "aria-label": "Fechar"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))), /*#__PURE__*/React.createElement("div", {
    ref: stageRef,
    className: "fp-viewer-stage" + (drag.current ? " grabbing" : ""),
    onWheel: onWheel,
    onPointerDown: onPointerDown,
    onPointerMove: onPointerMove,
    onPointerUp: onPointerUp,
    onPointerLeave: onPointerUp
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-viewer-canvas",
    style: {
      transform: `translate(-50%,-50%) translate(${pos.x}px,${pos.y}px) scale(${zoom})`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    draggable: false
  }), boxes.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "fp-viewer-box",
    style: {
      left: b.x + "%",
      top: b.y + "%",
      width: b.w + "%",
      height: b.h + "%"
    }
  }, b.label && /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, b.label))))), /*#__PURE__*/React.createElement("div", {
    className: "fp-viewer-toolbar"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => zoomTo(zoom - 0.4),
    "aria-label": "Diminuir zoom"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3M8 11h6"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "pct"
  }, Math.round(zoom * 100), "%"), /*#__PURE__*/React.createElement("button", {
    onClick: () => zoomTo(zoom + 0.4),
    "aria-label": "Aumentar zoom"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3M11 8v6M8 11h6"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "div"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: reset,
    "aria-label": "Redefinir zoom"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 1 0 2.6-6.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 4v5h5"
  })))));
}
Object.assign(__ds_scope, { ImageViewer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ImageViewer.jsx", error: String((e && e.message) || e) }); }

// components/media/Lightbox.jsx
try { (() => {
/**
 * Fullscreen image lightbox — wraps ImageViewer with a dark scrim,
 * title/subtitle header, and prev/next navigation across a set.
 * Closes on scrim click, the close button, or Escape.
 */
function Lightbox({
  src,
  title = null,
  sub = null,
  boxes = [],
  badge = null,
  badgeTone = "info",
  onClose,
  onPrev = null,
  onNext = null
}) {
  const ImageViewer = typeof window !== "undefined" && window.FINPECDesignSystem_f2149b && window.FINPECDesignSystem_f2149b.ImageViewer || (() => null);
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose && onClose();
      if (e.key === "ArrowLeft") onPrev && onPrev();
      if (e.key === "ArrowRight") onNext && onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-lightbox",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-lightbox-head",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-lightbox-title"
  }, title, sub && /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, sub)), /*#__PURE__*/React.createElement("button", {
    className: "fp-viewer-close",
    style: {
      position: "static"
    },
    onClick: onClose,
    "aria-label": "Fechar"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "fp-lightbox-body",
    onClick: e => e.stopPropagation(),
    style: {
      position: "relative"
    }
  }, onPrev && /*#__PURE__*/React.createElement("button", {
    className: "fp-lightbox-nav prev",
    onClick: onPrev,
    "aria-label": "Anterior"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  }))), /*#__PURE__*/React.createElement(ImageViewer, {
    src: src,
    boxes: boxes,
    badge: badge,
    badgeTone: badgeTone,
    height: "100%",
    className: "fp-lightbox-viewer"
  }), onNext && /*#__PURE__*/React.createElement("button", {
    className: "fp-lightbox-nav next",
    onClick: onNext,
    "aria-label": "Pr\xF3xima"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  })))));
}
Object.assign(__ds_scope, { Lightbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Lightbox.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
/**
 * Application sidebar — dark warm-near-black chrome with brand lockup,
 * grouped nav, and a user footer. `groups` is [{ label, items:[{ id,
 * label, icon?, badge?, hot?, children? }] }]; items with `children` are
 * expandable/collapsible parents (e.g. "Configurações" → Cadastros, Acessos).
 */
function Sidebar({
  brandWord = "FINPEC",
  logoSrc = "",
  groups = [],
  activeId = null,
  onNavigate,
  user = null,
  collapsed = false,
  onToggleCollapse,
  variant = "dark",
  theme = null,
  onToggleTheme,
  onLogout,
  showClock = true,
  release = null,
  className = ""
}) {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    if (!showClock) return;
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, [showClock]);
  const months = ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."];
  const dateStr = now.getDate() + " de " + months[now.getMonth()] + " de " + now.getFullYear();
  const timeStr = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
  const isDark = theme === "dark";
  const ico = d => /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    dangerouslySetInnerHTML: {
      __html: d
    }
  });
  const sun = ico('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>');
  const moon = ico('<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>');
  const logout = ico('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>');
  const hasFoot = user || onToggleTheme || showClock || release || onLogout;
  const containsActive = it => !!(it.children && it.children.some(c => c.id === activeId || containsActive(c)));
  const [expanded, setExpanded] = React.useState(() => {
    const s = {};
    const walk = list => list.forEach(it => {
      if (it.children) {
        if (it.defaultExpanded || containsActive(it)) s[it.id] = true;
        walk(it.children);
      }
    });
    groups.forEach(g => walk(g.items || []));
    return s;
  });
  React.useEffect(() => {
    const add = {};
    const walk = list => list.forEach(it => {
      if (it.children) {
        if (containsActive(it)) add[it.id] = true;
        walk(it.children);
      }
    });
    groups.forEach(g => walk(g.items || []));
    if (Object.keys(add).length) setExpanded(s => Object.assign({}, s, add));
  }, [activeId]);
  const chev = open => /*#__PURE__*/React.createElement("svg", {
    className: "ni-chev",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: open ? "rotate(90deg)" : "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 6 6 6-6 6"
  }));
  const renderItem = (it, depth) => {
    const hasKids = !!(it.children && it.children.length);
    const open = !!expanded[it.id];
    const tone = it.tone || (it.hot ? "hot" : "");
    const parentActive = hasKids && containsActive(it);
    const row = /*#__PURE__*/React.createElement("button", {
      key: it.id,
      className: ["fp-nav-item", depth > 0 ? "sub" : "", it.id === activeId ? "active" : "", parentActive ? "has-active" : ""].filter(Boolean).join(" "),
      style: depth > 1 ? {
        paddingLeft: 12 + 32 + (depth - 1) * 14
      } : undefined,
      onClick: () => {
        if (hasKids) {
          if (collapsed && onToggleCollapse) {
            onToggleCollapse();
            setExpanded(s => Object.assign({}, s, {
              [it.id]: true
            }));
          } else setExpanded(s => Object.assign({}, s, {
            [it.id]: !open
          }));
        } else if (onNavigate) onNavigate(it.id);
      },
      "aria-expanded": hasKids ? open : undefined,
      title: collapsed ? typeof it.label === "string" ? it.label : undefined : undefined
    }, depth === 0 && it.icon && /*#__PURE__*/React.createElement("span", {
      className: "ni-icon"
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      className: "ni-label"
    }, it.label), it.badge != null && /*#__PURE__*/React.createElement("span", {
      className: ["fp-nav-badge", tone].filter(Boolean).join(" ")
    }, it.badge), (it.badge != null || it.dot || it.hot || parentActive) && depth === 0 && /*#__PURE__*/React.createElement("span", {
      className: ["fp-nav-cdot", tone || (parentActive ? "info" : "")].filter(Boolean).join(" ")
    }), it.badge == null && (it.dot || it.hot) && /*#__PURE__*/React.createElement("span", {
      className: ["fp-nav-dot", tone].filter(Boolean).join(" ")
    }), hasKids && chev(open));
    if (!hasKids) return row;
    return /*#__PURE__*/React.createElement("div", {
      className: "fp-nav-tree",
      key: it.id
    }, row, open && !collapsed && /*#__PURE__*/React.createElement("div", {
      className: "fp-nav-sub"
    }, it.children.map(c => renderItem(c, depth + 1))));
  };
  return /*#__PURE__*/React.createElement("aside", {
    className: ["fp-sidebar", collapsed ? "collapsed" : "", variant === "light" ? "light" : variant === "white" ? "white" : "", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-side-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-side-lockup"
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    style: {
      height: 30,
      width: "auto"
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "fp-brand-word"
  }, brandWord)), onToggleCollapse && /*#__PURE__*/React.createElement("button", {
    className: "fp-side-toggle",
    onClick: onToggleCollapse,
    "aria-label": collapsed ? "Expandir menu" : "Recolher menu",
    "aria-expanded": !collapsed,
    title: collapsed ? "Expandir menu" : "Recolher menu"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  })))), /*#__PURE__*/React.createElement("nav", {
    className: "fp-side-scroll"
  }, groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    className: "fp-nav-group",
    key: gi
  }, g.label && /*#__PURE__*/React.createElement("div", {
    className: "fp-nav-group-label"
  }, g.label), g.items.map(it => renderItem(it, 0))))), hasFoot && /*#__PURE__*/React.createElement("div", {
    className: "fp-side-foot"
  }, (onToggleTheme || showClock) && /*#__PURE__*/React.createElement("div", {
    className: "fp-sf-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-sf-actions"
  }, onToggleTheme && /*#__PURE__*/React.createElement("button", {
    className: "fp-sf-btn",
    onClick: onToggleTheme,
    "aria-label": isDark ? "Mudar para modo claro" : "Mudar para modo escuro",
    title: isDark ? "Modo claro" : "Modo escuro"
  }, isDark ? moon : sun)), showClock && /*#__PURE__*/React.createElement("div", {
    className: "fp-sf-clock",
    title: dateStr + " · " + timeStr
  }, /*#__PURE__*/React.createElement("span", null, dateStr), /*#__PURE__*/React.createElement("span", {
    className: "fp-sf-time"
  }, timeStr))), user && /*#__PURE__*/React.createElement("div", {
    className: "fp-side-user"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fp-avatar fp-sf-avatar"
  }, user.initials), /*#__PURE__*/React.createElement("div", {
    className: "fp-su-meta",
    style: {
      overflow: "hidden",
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-su-name"
  }, user.name), /*#__PURE__*/React.createElement("div", {
    className: "fp-su-role"
  }, user.role)), onLogout && /*#__PURE__*/React.createElement("button", {
    className: "fp-sf-btn fp-sf-logout",
    onClick: onLogout,
    "aria-label": "Sair",
    title: "Sair"
  }, logout)), release && /*#__PURE__*/React.createElement("div", {
    className: "fp-sf-release"
  }, release)));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Topbar.jsx
try { (() => {
/**
 * Application topbar — left menu/breadcrumb, right search + actions.
 * `crumbs` is an array of strings; the last renders as the current page.
 */
function Topbar({
  crumbs = [],
  search = true,
  searchPlaceholder = "Buscar…",
  actions = null,
  leading = null,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: ["fp-topbar", className].filter(Boolean).join(" ")
  }, leading, /*#__PURE__*/React.createElement("div", {
    className: "fp-crumb"
  }, crumbs.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: i === crumbs.length - 1 ? "cur" : ""
  }, c)))), search && /*#__PURE__*/React.createElement("div", {
    className: "fp-topsearch"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: searchPlaceholder
  }), /*#__PURE__*/React.createElement("span", {
    className: "kbd"
  }, "\u2318K")), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginLeft: search ? 0 : "auto"
    }
  }, actions));
}
Object.assign(__ds_scope, { Topbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/foxe/foxe-screens.jsx
try { (() => {
// FOXE UI kit — chrome + screens. Faithful recreation of the FOXE redesign,
// using its own theme-var system (FOXE has a distinct dark-capable, mono-heavy
// language separate from the Painel's burnt-orange).

const MONO = "'IBM Plex Mono',monospace";
const UI = "'Hanken Grotesk',sans-serif";

/* ---------------- Sidebar ---------------- */
function FoxeSidebar({
  screen,
  onNav,
  theme,
  accent,
  onTheme,
  onAccent
}) {
  const [prefs, setPrefs] = React.useState(false);
  const navBtn = (id, n, name) => {
    const active = screen === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onNav(id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "9px 12px 9px 14px",
        borderRadius: 9,
        cursor: "pointer",
        border: "none",
        width: "100%",
        textAlign: "left",
        fontFamily: UI,
        fontSize: 13.5,
        fontWeight: active ? 600 : 500,
        color: active ? "var(--accent-ink)" : "var(--text-2)",
        background: active ? "var(--nav-active)" : "transparent",
        position: "relative"
      }
    }, active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: 7,
        bottom: 7,
        width: 3,
        borderRadius: 2,
        background: "var(--accent)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: MONO,
        fontSize: 10,
        fontWeight: 600,
        color: active ? "var(--accent)" : "var(--muted)",
        minWidth: 16
      }
    }, n), /*#__PURE__*/React.createElement("span", null, name));
  };
  const accentList = [["azul", "#2860c6", "#6ba6e8"], ["verde", "#2f7d4f", "#5cc185"], ["ambar", "#c0791f", "#e3a44f"], ["terra", "#b35535", "#e0875f"], ["finpec", "#DC4E25", "#f0744d"]];
  const seg = on => ({
    fontFamily: UI,
    fontWeight: 600,
    fontSize: 12,
    padding: "6px 11px",
    borderRadius: 7,
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 5,
    background: on ? "var(--card)" : "transparent",
    color: on ? "var(--text)" : "var(--muted)",
    boxShadow: on ? "0 1px 2px rgba(0,0,0,.14)" : "none"
  });
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 252,
      flex: "none",
      background: "var(--card)",
      borderRight: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      position: "sticky",
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 18px 16px",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/finpec-mark.png",
    alt: "",
    style: {
      height: 30,
      width: "auto",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 16,
      letterSpacing: ".02em",
      lineHeight: 1,
      color: "var(--text)"
    }
  }, "FOXEN-AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 9.5px/1.35 " + MONO,
      color: "var(--muted)",
      letterSpacing: ".04em",
      marginTop: 4,
      textTransform: "uppercase"
    }
  }, "Visual Computacional para Contagem de Gado")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 12px",
      overflowY: "auto",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, navBtn("inicio", "★", "Início"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 10px 6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10px/1 " + MONO,
      letterSpacing: ".12em",
      color: "var(--muted)",
      marginBottom: 7
    }
  }, "CONTEXTO"), /*#__PURE__*/React.createElement("select", {
    style: {
      width: "100%",
      border: "1px solid var(--border)",
      background: "var(--input)",
      borderRadius: 8,
      padding: "8px 10px",
      font: "600 12px/1 " + UI,
      color: "var(--text-2)",
      marginBottom: 7,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("option", null, "Opera\xE7\xE3o \xB7 Cara Preta")), /*#__PURE__*/React.createElement("select", {
    style: {
      width: "100%",
      border: "1px solid var(--border)",
      background: "var(--input)",
      borderRadius: 8,
      padding: "8px 10px",
      font: "600 12px/1 " + UI,
      color: "var(--text-2)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("option", null, "Todas as fazendas"))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10px/1 " + MONO,
      letterSpacing: ".12em",
      color: "var(--muted)",
      padding: "10px 10px 6px"
    }
  }, "DRONES"), FOXE_NAV.drones.map(d => navBtn(d.id, d.n, d.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10px/1 " + MONO,
      letterSpacing: ".12em",
      color: "var(--muted)",
      padding: "14px 10px 6px"
    }
  }, "FOXEN-AI"), FOXE_NAV.foxe.map(d => navBtn(d.id, d.n, d.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-soft)",
      padding: "10px 12px",
      position: "relative"
    }
  }, prefs && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 12,
      padding: 14,
      marginBottom: 8,
      boxShadow: "0 -6px 24px rgba(0,0,0,.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10px/1 " + MONO,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--muted)",
      marginBottom: 9
    }
  }, "Apar\xEAncia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 3,
      background: "var(--mute-tint)",
      border: "1px solid var(--border)",
      borderRadius: 9,
      padding: 3
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onTheme("light"),
    style: seg(theme !== "dark")
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "\u2600"), "Claro"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onTheme("dark"),
    style: seg(theme === "dark")
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "\u263E"), "Escuro")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10px/1 " + MONO,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--muted)",
      margin: "14px 0 9px"
    }
  }, "Cor da marca"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, accentList.map(p => /*#__PURE__*/React.createElement("button", {
    key: p[0],
    onClick: () => onAccent(p[0]),
    style: {
      width: 19,
      height: 19,
      borderRadius: "50%",
      cursor: "pointer",
      background: theme === "dark" ? p[2] : p[1],
      border: accent === p[0] ? "2px solid var(--text)" : "2px solid var(--border)",
      padding: 0,
      flex: "none"
    }
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPrefs(!prefs),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      background: prefs ? "var(--mute-tint)" : "transparent",
      border: "1px solid " + (prefs ? "var(--border)" : "transparent"),
      borderRadius: 10,
      padding: "7px 9px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "var(--accent)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 700,
      flex: "none"
    }
  }, "JK"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text)"
    }
  }, "Joao Kraemer"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)"
    }
  }, "Administrador")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--muted)",
      flex: "none",
      transform: prefs ? "rotate(0deg)" : "rotate(180deg)"
    }
  }, "\u2303"))));
}

/* ---------------- Topbar ---------------- */
function FoxeTopbar({
  crumb,
  title,
  onNew
}) {
  const btn = (bg, color, border) => ({
    border: border || "none",
    background: bg,
    color,
    font: "600 13px/1 " + UI,
    padding: border ? "9px 15px" : "10px 17px",
    borderRadius: 8,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 7
  });
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 66,
      flex: "none",
      background: "var(--card)",
      borderBottom: "1px solid var(--border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 30px",
      position: "sticky",
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px/1 " + MONO,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, crumb), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "6px 0 0",
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: "-.01em",
      color: "var(--text)"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn("var(--card)", "var(--text-2)", "1px solid var(--border)")
  }, "Atualizar"), /*#__PURE__*/React.createElement("button", {
    onClick: onNew,
    style: btn("var(--accent)", "#fff")
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      lineHeight: 1
    }
  }, "+"), "Nova capta\xE7\xE3o")));
}

/* ---------------- Card shell ---------------- */
function FCard({
  eyebrow,
  eyebrowColor,
  title,
  children,
  pad,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      overflow: "hidden"
    }
  }, (eyebrow || title) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px",
      borderBottom: "1px solid var(--border-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && FX_eyebrow(eyebrow, eyebrowColor), title && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text)"
    }
  }, title)), right), /*#__PURE__*/React.createElement("div", {
    style: pad === false ? undefined : {
      padding: 22
    }
  }, children));
}

/* ---------------- Stepper ---------------- */
function Stepper({
  screen
}) {
  const active = FOXE_STEP_MAP[screen] || 0;
  if (!active) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      padding: "20px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, FX_eyebrow("FOXEN-AI · Governança"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      marginTop: 5,
      color: "var(--text)"
    }
  }, "Fluxo de capacita\xE7\xE3o do modelo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 10
    }
  }, FOXE_STEPS.map(d => {
    const on = +d[0] === active;
    return /*#__PURE__*/React.createElement("div", {
      key: d[0],
      style: {
        border: on ? "1px solid var(--accent)" : "1px solid var(--border-soft)",
        background: on ? "var(--accent-tint)" : "var(--step-bg)",
        borderRadius: 11,
        padding: "13px 14px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: MONO,
        fontSize: 11,
        fontWeight: 700,
        color: "#fff",
        background: on ? "var(--accent)" : "var(--dot-mute)",
        borderRadius: 6,
        padding: "3px 6px",
        lineHeight: 1
      }
    }, d[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "var(--text)"
      }
    }, d[1])), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        lineHeight: 1.4,
        color: "var(--muted)"
      }
    }, d[2]));
  })));
}
const infoBanner = /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    background: "var(--accent-tint)",
    border: "1px solid var(--accent-line)",
    borderRadius: 10,
    padding: "13px 16px"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "var(--accent)",
    color: "#fff",
    fontSize: 12,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "none",
    marginTop: 1
  }
}, "i"), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 13,
    lineHeight: 1.5,
    color: "var(--text-2)"
  }
}, "A infer\xEAncia autom\xE1tica conta fotos novas em ", /*#__PURE__*/React.createElement("strong", null, "raw"), ". Corre\xE7\xE3o humana, promo\xE7\xE3o de dataset, treino e publica\xE7\xE3o de modelo ", /*#__PURE__*/React.createElement("strong", null, "exigem a\xE7\xE3o humana"), "."));

/* ---------------- Screens ---------------- */
function FoxeInicio({
  onNav
}) {
  const dotColor = {
    go: "var(--accent)",
    warn: "var(--warn)",
    crit: "var(--crit)",
    mute: "var(--dot-mute)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 18
    }
  }, FOXE_DATA.kpis.map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      padding: "18px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 10px/1 " + MONO,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, k.label), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: dotColor[k.tone],
      display: "inline-block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 34,
      fontWeight: 800,
      fontFamily: MONO,
      lineHeight: 1,
      color: "var(--text)"
    }
  }, k.value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7,
      fontSize: 12,
      color: "var(--muted)"
    }
  }, k.note)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 360px",
      gap: 22,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, FX_eyebrow("Missões processadas"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text)"
    }
  }, "Resumo por miss\xE3o")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 90px 90px 110px",
      gap: 12,
      padding: "11px 22px",
      font: "600 10px/1 " + MONO,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--muted)",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Miss\xE3o"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "Process."), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "Pendentes"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "Status")), FOXE_DATA.inicioMissions.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 90px 90px 110px",
      gap: 12,
      padding: "14px 22px",
      borderBottom: "1px solid var(--border-soft)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "var(--text)"
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 11px/1 " + MONO,
      color: "var(--muted)",
      marginTop: 4
    }
  }, m.curral)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontFamily: MONO,
      fontWeight: 600,
      fontSize: 13,
      color: "var(--text)"
    }
  }, m.proc), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontFamily: MONO,
      fontWeight: 600,
      fontSize: 13,
      color: "var(--warn-ink)"
    }
  }, m.pend), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, FX_pill(m.pill[0], m.pill[1]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      padding: "18px 20px"
    }
  }, FX_eyebrow("Requer atenção", "var(--warn-ink)"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 16,
      fontWeight: 700,
      marginBottom: 14,
      color: "var(--text)"
    }
  }, "Pr\xF3ximas a\xE7\xF5es"), FOXE_DATA.attention.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      padding: "12px 0",
      borderTop: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--warn)",
      marginTop: 5,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text)"
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted)",
      marginTop: 3,
      lineHeight: 1.4
    }
  }, a.desc)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav("revisao"),
    style: {
      marginTop: 14,
      width: "100%",
      border: "none",
      background: "var(--warn-tint)",
      color: "var(--warn-ink)",
      font: "600 13px/1 " + UI,
      padding: 11,
      borderRadius: 9,
      cursor: "pointer"
    }
  }, "Abrir fila de revis\xE3o \u2192"))));
}
function FoxeContagens() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 396px",
      gap: 22,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(FCard, {
    eyebrow: "Capta\xE7\xF5es na fila",
    title: "Arquivos aguardando contagem",
    pad: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: "var(--border-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16
    }
  }, "\uD83D\uDEF0\uFE0F"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 13px/1 " + MONO,
      color: "var(--text)"
    }
  }, "0008_CP_FSTAMON_C_FABRICA_POR-A"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted)",
      marginTop: 4
    }
  }, "5 arquivos \xB7 5 currais"))), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--warn-tint)",
      color: "var(--warn-ink)",
      fontWeight: 700,
      fontSize: 13,
      borderRadius: 20,
      padding: "7px 14px",
      fontFamily: MONO
    }
  }, "5 pendentes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, FX_eyebrow("Auditoria operacional"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text)"
    }
  }, "Job, foto e resultado")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 80px 90px 70px",
      gap: 12,
      padding: "11px 22px",
      font: "600 10px/1 " + MONO,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--muted)",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Foto \xB7 Curral"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "IA"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "Status"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "Job")), FOXE_DATA.contagensAudit.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 80px 90px 70px",
      gap: 12,
      padding: "13px 22px",
      borderBottom: "1px solid var(--border-soft)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 12px/1.3 " + MONO,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "var(--text)"
    }
  }, r.foto), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--muted)",
      marginTop: 3
    }
  }, r.curral)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontFamily: MONO,
      fontWeight: 700,
      fontSize: 14,
      color: r.ia === "—" ? "var(--muted)" : "var(--text)"
    }
  }, r.ia), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, FX_pill(r.pill[0], r.pill[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontFamily: MONO,
      fontSize: 12,
      color: "var(--muted)"
    }
  }, r.job))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 12
    }
  }, FOXE_DATA.contagensStats.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 12,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10px/1 " + MONO,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 24,
      fontWeight: 800,
      fontFamily: MONO,
      color: c.color
    }
  }, c.value)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px 18px",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, FX_eyebrow("Job concluído"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      font: "600 11px/1 " + UI,
      color: "var(--ok-ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--accent)"
    }
  }), "Conclu\xEDdo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/3",
      background: "repeating-linear-gradient(118deg,#2a322b 0 14px,#313a31 14px 28px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "500 11px/1 " + MONO,
      color: "rgba(255,255,255,.3)",
      letterSpacing: ".08em"
    }
  }, "\u25A2 FOTO DO DRONE \xB7 CF-028"), [[20, 12, 14, 22, "0.98"], [44, 38, 12, 20, null], [30, 62, 13, 19, "0.97"], [58, 22, 11, 17, null], [52, 72, 12, 19, null]].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      top: b[0] + "%",
      left: b[1] + "%",
      width: b[2] + "%",
      height: b[3] + "%",
      border: "2px solid #4cd07d",
      borderRadius: 2
    }
  }, b[4] && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -15,
      left: -2,
      background: "#4cd07d",
      color: "#0c2417",
      font: "600 8px/1 " + MONO,
      padding: "2px 4px",
      borderRadius: 2
    }
  }, b[4]))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      bottom: 14,
      background: "rgba(12,18,13,.8)",
      backdropFilter: "blur(6px)",
      borderRadius: 9,
      padding: "11px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 10px/1 " + MONO,
      color: "#8fe0ad",
      letterSpacing: ".1em",
      textTransform: "uppercase"
    }
  }, "Resultado IA"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 30,
      fontWeight: 800,
      color: "#fff",
      lineHeight: 1,
      fontFamily: MONO
    }
  }, "132"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 13,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 9px/1 " + MONO,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "Engine"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontWeight: 600,
      fontFamily: MONO,
      fontSize: 11,
      color: "var(--text)"
    }
  }, "prototype-local-deterministic")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 9px/1 " + MONO,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "Status revis\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5
    }
  }, FX_pill("needs_review", "warn")))), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 15,
      width: "100%",
      border: "1px solid var(--border)",
      background: "var(--card)",
      color: "var(--text-2)",
      font: "600 13px/1 " + UI,
      padding: 11,
      borderRadius: 9,
      cursor: "pointer"
    }
  }, "Reprocessar explicitamente")))));
}
function FoxeRevisao({
  onCorrect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 396px",
      gap: 22,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(FCard, {
    eyebrow: "Capta\xE7\xF5es na fila",
    title: "Arquivos aguardando corre\xE7\xE3o",
    pad: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: "var(--border-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16
    }
  }, "\uD83D\uDEF0\uFE0F"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 13px/1 " + MONO,
      color: "var(--text)"
    }
  }, "0008_CP_FSTAMON_C_FABRICA_POR-A"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted)",
      marginTop: 4
    }
  }, "6 arquivos \xB7 6 currais"))), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--warn-tint)",
      color: "var(--warn-ink)",
      fontWeight: 700,
      fontSize: 13,
      borderRadius: 20,
      padding: "7px 14px",
      fontFamily: MONO
    }
  }, "6 pendentes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px 18px",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", null, FX_eyebrow("Imagem auditada"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 16,
      fontWeight: 700,
      fontFamily: MONO,
      color: "var(--text)"
    }
  }, "CF-033")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      border: "1px solid var(--ok-border)",
      background: "var(--ok-tint)",
      color: "var(--ok-ink)",
      font: "600 12px/1 " + UI,
      padding: "8px 13px",
      borderRadius: 8,
      cursor: "pointer"
    }
  }, "Aprovar"), /*#__PURE__*/React.createElement("button", {
    onClick: onCorrect,
    style: {
      border: "none",
      background: "var(--accent)",
      color: "#fff",
      font: "600 12px/1 " + UI,
      padding: "8px 13px",
      borderRadius: 8,
      cursor: "pointer"
    }
  }, "Corrigir"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/3",
      background: "repeating-linear-gradient(118deg,#5a4636 0 16px,#63503e 16px 32px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "500 11px/1 " + MONO,
      color: "rgba(255,255,255,.35)"
    }
  }, "\u25A2 FOTO A\xC9REA \xB7 CURRAL CF-033")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 18px",
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 12,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 9px/1 " + MONO,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "Resultado IA"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 18,
      fontWeight: 700,
      fontFamily: MONO,
      color: "var(--text)"
    }
  }, "119")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 9px/1 " + MONO,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--muted)"
    }
  }, "Status"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7
    }
  }, FX_pill("needs_review", "warn")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 22px",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", null, FX_eyebrow("Fila de revisão"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text)"
    }
  }, "Fotos contadas para aprovar ou corrigir")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      background: "var(--border-soft)",
      padding: 4,
      borderRadius: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--card)",
      color: "var(--text)",
      font: "600 12px/1 " + UI,
      padding: "7px 13px",
      borderRadius: 6,
      boxShadow: "0 1px 2px rgba(0,0,0,.06)"
    }
  }, "Pendentes"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      font: "600 12px/1 " + UI,
      padding: "7px 13px"
    }
  }, "Diverg\xEAncias"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      font: "600 12px/1 " + UI,
      padding: "7px 13px"
    }
  }, "Conferidas"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 90px 80px 80px 80px 120px",
      gap: 12,
      padding: "11px 22px",
      font: "600 10px/1 " + MONO,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--muted)",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Foto"), /*#__PURE__*/React.createElement("span", null, "Curral"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "IA"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "Monit."), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "Dif."), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "Status")), FOXE_DATA.revRows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 90px 80px 80px 80px 120px",
      gap: 12,
      padding: "13px 22px",
      borderBottom: "1px solid var(--border-soft)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 12px/1 " + MONO,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "var(--text)"
    }
  }, r.foto), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px/1 " + MONO,
      color: "var(--text-2)"
    }
  }, r.curral), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontFamily: MONO,
      fontWeight: 700,
      fontSize: 13,
      color: "var(--text)"
    }
  }, r.ia), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontFamily: MONO,
      fontSize: 13,
      color: "var(--text-2)"
    }
  }, r.monit), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontFamily: MONO,
      fontWeight: 700,
      fontSize: 13,
      color: "var(--warn-ink)"
    }
  }, r.dif), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, FX_pill(r.pill[0], r.pill[1]))))));
}
function FoxeUsuarios() {
  const inputS = {
    display: "block",
    width: "100%",
    marginTop: 7,
    border: "1px solid var(--border)",
    background: "var(--input)",
    borderRadius: 9,
    padding: "11px 13px",
    font: "500 13px/1 " + UI,
    color: "var(--text)"
  };
  const lbl = {
    font: "600 10px/1 " + MONO,
    letterSpacing: ".06em",
    textTransform: "uppercase",
    color: "var(--muted)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 360px",
      gap: 22,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(FCard, {
    eyebrow: "Controle de acesso",
    title: "Criar usu\xE1rio"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Nome"), /*#__PURE__*/React.createElement("input", {
    style: inputS,
    placeholder: "Nome completo"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "E-mail"), /*#__PURE__*/React.createElement("input", {
    style: inputS,
    placeholder: "email@finpec.com"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Status"), /*#__PURE__*/React.createElement("select", {
    style: inputS
  }, /*#__PURE__*/React.createElement("option", null, "Ativo"), /*#__PURE__*/React.createElement("option", null, "Inativo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: 9,
      border: "1px solid var(--border)",
      borderRadius: 9,
      padding: "12px 14px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text)"
    }
  }, "Administrador")), /*#__PURE__*/React.createElement("label", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: 9,
      border: "1px solid var(--ok-border)",
      background: "var(--accent-tint)",
      borderRadius: 9,
      padding: "12px 14px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text)"
    }
  }, "Analista"))), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 20,
      border: "none",
      background: "var(--accent)",
      color: "#fff",
      font: "600 13px/1 " + UI,
      padding: "12px 22px",
      borderRadius: 9,
      cursor: "pointer"
    }
  }, "Criar usu\xE1rio")), /*#__PURE__*/React.createElement(FCard, {
    eyebrow: "Seguran\xE7a de login",
    eyebrowColor: "var(--warn-ink)",
    title: "Bloqueio por senha errada"
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Tentativas antes do bloqueio"), /*#__PURE__*/React.createElement("input", {
    style: {
      ...inputS,
      font: "600 14px/1 " + MONO
    },
    defaultValue: "10"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--muted)",
      marginTop: 10
    }
  }, "Valor atual: 10"), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 16,
      width: "100%",
      border: "none",
      background: "var(--accent)",
      color: "#fff",
      font: "600 13px/1 " + UI,
      padding: 11,
      borderRadius: 9,
      cursor: "pointer"
    }
  }, "Salvar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 22px",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", null, FX_eyebrow("Usuários cadastrados"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text)"
    }
  }, "Gest\xE3o administrativa")), /*#__PURE__*/React.createElement("input", {
    style: {
      border: "1px solid var(--border)",
      background: "var(--input)",
      borderRadius: 9,
      padding: "9px 13px",
      font: "500 13px/1 " + UI,
      width: 220,
      color: "var(--text)"
    },
    placeholder: "Filtrar por e-mail"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr 90px 120px 150px 200px",
      gap: 12,
      padding: "11px 22px",
      font: "600 10px/1 " + MONO,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--muted)",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Nome"), /*#__PURE__*/React.createElement("span", null, "E-mail"), /*#__PURE__*/React.createElement("span", null, "Status"), /*#__PURE__*/React.createElement("span", null, "Perfil"), /*#__PURE__*/React.createElement("span", null, "\xDAltimo login"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "A\xE7\xF5es")), FOXE_DATA.usuarios.map((u, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr 90px 120px 150px 200px",
      gap: 12,
      padding: "14px 22px",
      borderBottom: "1px solid var(--border-soft)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text)"
    }
  }, u.nome), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px/1 " + MONO,
      color: "var(--text-2)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, u.email), /*#__PURE__*/React.createElement("div", null, FX_pill(u.pill[0], u.pill[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-2)"
    }
  }, u.perfil), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px/1 " + MONO,
      color: "var(--muted)"
    }
  }, u.login), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      border: "1px solid var(--border)",
      background: "var(--card)",
      color: "var(--text-2)",
      font: "600 11px/1 " + UI,
      padding: "7px 11px",
      borderRadius: 7,
      cursor: "pointer"
    }
  }, "Editar"), /*#__PURE__*/React.createElement("button", {
    style: {
      border: "1px solid var(--crit-border)",
      background: "var(--card)",
      color: "var(--crit-ink)",
      font: "600 11px/1 " + UI,
      padding: "7px 11px",
      borderRadius: 7,
      cursor: "pointer"
    }
  }, "Deletar"))))));
}
function FoxeModal({
  onClose
}) {
  const lbl = c => ({
    font: "600 10px/1 " + MONO,
    letterSpacing: ".06em",
    textTransform: "uppercase",
    color: c || "var(--muted)"
  });
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(20,28,22,.45)",
      backdropFilter: "blur(2px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
      fontFamily: UI
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--card)",
      borderRadius: 16,
      width: 480,
      maxWidth: "92vw",
      boxShadow: "0 24px 60px rgba(0,0,0,.25)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: "22px 24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", null, FX_eyebrow("Correção humana"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 22,
      fontWeight: 800,
      fontFamily: MONO,
      color: "var(--text)"
    }
  }, "CF-006")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: "1px solid var(--border)",
      background: "var(--card)",
      color: "var(--muted)",
      width: 32,
      height: 32,
      borderRadius: 8,
      cursor: "pointer",
      fontSize: 16
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl()
  }, "Contagem IA"), /*#__PURE__*/React.createElement("input", {
    disabled: true,
    style: {
      display: "block",
      width: "100%",
      marginTop: 7,
      border: "1px solid var(--border)",
      background: "var(--border-soft)",
      borderRadius: 9,
      padding: "11px 13px",
      font: "700 15px/1 " + MONO,
      color: "var(--text-2)"
    },
    value: "160",
    readOnly: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl("var(--accent)")
  }, "Contagem corrigida"), /*#__PURE__*/React.createElement("input", {
    style: {
      display: "block",
      width: "100%",
      marginTop: 7,
      border: "1px solid var(--accent)",
      background: "var(--accent-tint)",
      borderRadius: 9,
      padding: "11px 13px",
      font: "700 15px/1 " + MONO,
      color: "var(--accent-ink)"
    },
    defaultValue: "164"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl()
  }, "Observa\xE7\xE3o"), /*#__PURE__*/React.createElement("textarea", {
    style: {
      display: "block",
      width: "100%",
      marginTop: 7,
      border: "1px solid var(--border)",
      background: "var(--input)",
      borderRadius: 9,
      padding: "11px 13px",
      font: "500 13px/1.4 " + UI,
      color: "var(--text)",
      minHeight: 84,
      resize: "vertical"
    },
    defaultValue: "Faltaram 4 bois"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      padding: "0 24px 22px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: "1px solid var(--border)",
      background: "var(--card)",
      color: "var(--text-2)",
      font: "600 13px/1 " + UI,
      padding: "11px 18px",
      borderRadius: 9,
      cursor: "pointer"
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: "none",
      background: "var(--accent)",
      color: "#fff",
      font: "600 13px/1 " + UI,
      padding: "11px 18px",
      borderRadius: 9,
      cursor: "pointer"
    }
  }, "Salvar corre\xE7\xE3o"))));
}
function FoxePlaceholder({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      padding: "56px 24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--muted)",
      marginTop: 8,
      maxWidth: 380,
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: 1.5
    }
  }, "Esta \xE1rea comp\xF5e a mesma linguagem do FOXEN-AI \u2014 superf\xEDcies s\xF3brias, tipografia monoespa\xE7ada e governan\xE7a humana no loop."));
}
Object.assign(window, {
  FoxeSidebar,
  FoxeTopbar,
  Stepper,
  FoxeInicio,
  FoxeContagens,
  FoxeRevisao,
  FoxeUsuarios,
  FoxeModal,
  FoxePlaceholder,
  infoBanner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/foxe/foxe-screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/foxe/foxe-shared.jsx
try { (() => {
// FOXE UI kit — shared helpers, pill factory, nav model and mock data.
// Recreates the data shape of the FOXE redesign. Exposed on window.

function FX_pill(text, tone) {
  const map = {
    go: ["var(--ok-ink)", "var(--ok-tint)"],
    warn: ["var(--warn-ink)", "var(--warn-tint)"],
    info: ["var(--info-ink)", "var(--info-tint)"],
    mute: ["var(--text-2)", "var(--mute-tint)"],
    crit: ["var(--crit-ink)", "var(--crit-tint)"]
  };
  const c = map[tone] || map.mute;
  return React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "3px 9px",
      borderRadius: "20px",
      fontSize: "11px",
      fontWeight: 600,
      color: c[0],
      background: c[1],
      whiteSpace: "nowrap"
    }
  }, text);
}

// Mono section label
function FX_eyebrow(text, color) {
  return React.createElement("div", {
    style: {
      font: "600 10px/1 'IBM Plex Mono',monospace",
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: color || "var(--accent)"
    }
  }, text);
}
const FOXE_NAV = {
  drones: [{
    id: "upload",
    n: "01",
    name: "Upload Drone"
  }, {
    id: "contagens",
    n: "02",
    name: "Contagens IA"
  }, {
    id: "revisao",
    n: "03",
    name: "Correções de Contagem"
  }, {
    id: "resultados",
    n: "04",
    name: "Resultados por Missão"
  }, {
    id: "divergencias",
    n: "05",
    name: "Divergências CDZ"
  }, {
    id: "fotos",
    n: "06",
    name: "Gestão de Fotos do Drone"
  }],
  foxe: [{
    id: "usuarios",
    n: "17",
    name: "Usuários e Perfis"
  }]
};
const FOXE_META = {
  inicio: ["Visão geral", "Painel operacional"],
  upload: ["Drones / Upload", "Upload Drone"],
  contagens: ["Drones / Contagens", "Contagens IA"],
  revisao: ["FOXEN-AI / Operacional", "Fila de Revisão de Contagens"],
  resultados: ["Drones / Resultados", "Resultados por Missão"],
  divergencias: ["Drones / Divergências", "Divergências CDZ"],
  fotos: ["Drones / Arquivos", "Gestão de Fotos do Drone"],
  usuarios: ["FOXEN-AI / Acesso", "Usuários e Perfis"]
};
const FOXE_STEPS = [["01", "Captação", "Recebe fotos raw e cria lotes rastreáveis."], ["02", "Anotação", "Marca área e gado sem promover dados."], ["03", "Revisão", "Valida contagens corrigidas e anotações."], ["04", "Datasets", "Fecha versões imutáveis para treino."], ["05", "Treinos", "Executa quando um usuário inicia a rodada."], ["06", "Avaliações", "Compara métricas e exige decisão humana."], ["07", "Registry", "Publica modelo aprovado por tipo."]];
const FOXE_STEP_MAP = {
  upload: 1,
  fotos: 1,
  contagens: 2,
  revisao: 3,
  resultados: 3,
  divergencias: 3
};
const FOXE_DATA = {
  kpis: [{
    label: "Fotos em raw",
    value: "472",
    note: "Base monitoramento local",
    tone: "mute"
  }, {
    label: "Pendentes",
    value: "8",
    note: "Fila operacional atual",
    tone: "warn"
  }, {
    label: "Divergências",
    value: "1",
    note: "Com diferença entre fontes",
    tone: "crit"
  }, {
    label: "Conferidas",
    value: "6",
    note: "Resultados já revisados",
    tone: "go"
  }],
  inicioMissions: [{
    name: "0008_CP_FSTAMON_C_FABRICA_POR-A",
    curral: "Curral CF-005 → CF-037",
    proc: "13/16",
    pend: "11",
    pill: ["Em revisão", "warn"]
  }, {
    name: "0007_CP_FSTAMON_C_PASTO_SUL",
    curral: "Curral PS-001 → PS-020",
    proc: "20/20",
    pend: "0",
    pill: ["Concluída", "go"]
  }, {
    name: "0006_CP_FSTALES_C_NORTE",
    curral: "Curral CN-001 → CN-014",
    proc: "14/14",
    pend: "0",
    pill: ["Concluída", "go"]
  }, {
    name: "0009_CP_FSTAMON_C_LESTE",
    curral: "Curral CL-001 → CL-009",
    proc: "4/9",
    pend: "5",
    pill: ["Processando", "info"]
  }],
  attention: [{
    title: "12 fotos sem contexto CDZ",
    desc: "Divergências CDZ não conseguem cruzar fonte obrigatória."
  }, {
    title: "CF-006 com diferença +71",
    desc: "Contagem IA 160 vs monitoramento 89 — revisar."
  }, {
    title: "11 contagens pendentes",
    desc: "Missão 0008 aguardando aprovação humana."
  }],
  contagensStats: [{
    label: "Na fila",
    value: "5",
    color: "var(--text)"
  }, {
    label: "Executando",
    value: "0",
    color: "var(--muted)"
  }, {
    label: "Concluído",
    value: "11",
    color: "var(--accent)"
  }, {
    label: "Falhou",
    value: "0",
    color: "var(--muted)"
  }],
  contagensAudit: [{
    foto: "CF-028 · DJI_...0029",
    curral: "Curral CF-028",
    ia: "132",
    job: "#25",
    pill: ["Concluído", "go"]
  }, {
    foto: "CF-029 · DJI_...0030",
    curral: "Curral CF-029",
    ia: "129",
    job: "#26",
    pill: ["Concluído", "go"]
  }, {
    foto: "CF-031 · DJI_...0031",
    curral: "Curral CF-031",
    ia: "69",
    job: "#27",
    pill: ["Concluído", "go"]
  }, {
    foto: "CF-033 · DJI_...0034",
    curral: "Curral CF-033",
    ia: "119",
    job: "#29",
    pill: ["Concluído", "go"]
  }, {
    foto: "CF-034 · DJI_...0035",
    curral: "Curral CF-034",
    ia: "—",
    job: "—",
    pill: ["Na fila", "mute"]
  }, {
    foto: "CF-037 · DJI_...0024",
    curral: "Curral CF-037",
    ia: "169",
    job: "#24",
    pill: ["Concluído", "go"]
  }],
  revRows: [{
    foto: "CF-006 · DJI_...0007",
    curral: "CF-006",
    ia: "160",
    monit: "89",
    dif: "+71",
    pill: ["reviewed", "info"]
  }, {
    foto: "CF-033 · DJI_...0034",
    curral: "CF-033",
    ia: "119",
    monit: "—",
    dif: "—",
    pill: ["needs_review", "warn"]
  }, {
    foto: "CF-032 · DJI_...0033",
    curral: "CF-032",
    ia: "123",
    monit: "—",
    dif: "—",
    pill: ["needs_review", "warn"]
  }, {
    foto: "CF-031 · DJI_...0032",
    curral: "CF-031",
    ia: "69",
    monit: "—",
    dif: "—",
    pill: ["needs_review", "warn"]
  }, {
    foto: "CF-029 · DJI_...0030",
    curral: "CF-029",
    ia: "129",
    monit: "—",
    dif: "—",
    pill: ["needs_review", "warn"]
  }],
  usuarios: [{
    nome: "Lockout Test",
    email: "codex.lockout@finpec.local",
    perfil: "Analista",
    login: "—",
    pill: ["Ativo", "go"]
  }, {
    nome: "Joao Kraemer",
    email: "joao.kraemer@finpec.com",
    perfil: "Administrador",
    login: "22/06/2026 12:53",
    pill: ["Ativo", "go"]
  }, {
    nome: "Marina Alves",
    email: "marina.alves@finpec.com",
    perfil: "Analista",
    login: "21/06/2026 18:04",
    pill: ["Ativo", "go"]
  }, {
    nome: "Carlos Dias",
    email: "carlos.dias@finpec.com",
    perfil: "Analista",
    login: "—",
    pill: ["Inativo", "mute"]
  }]
};
Object.assign(window, {
  FX_pill,
  FX_eyebrow,
  FOXE_NAV,
  FOXE_META,
  FOXE_STEPS,
  FOXE_STEP_MAP,
  FOXE_DATA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/foxe/foxe-shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/foxe/foxe-theme.js
try { (() => {
// FOXE theme generator — ported from the FOXE redesign. Warm green-tinted
// surfaces, IBM Plex Mono-heavy. Supports light/dark and 4 accent options.
// Exposes window.foxeTheme(theme, accent) -> CSS-var object.

function foxeHexToRgba(hex, a) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map(x => x + x).join("") : h, 16);
  return "rgba(" + (n >> 16 & 255) + "," + (n >> 8 & 255) + "," + (n & 255) + "," + a + ")";
}
const FOXE_ACCENTS = {
  finpec: {
    light: {
      a: "#DC4E25",
      ink: "#8f3214"
    },
    dark: {
      a: "#f0744d",
      ink: "#f6b69f"
    }
  },
  verde: {
    light: {
      a: "#2f7d4f",
      ink: "#1b6e41"
    },
    dark: {
      a: "#5cc185",
      ink: "#bfe9cf"
    }
  },
  ambar: {
    light: {
      a: "#c0791f",
      ink: "#8f5512"
    },
    dark: {
      a: "#e3a44f",
      ink: "#f2cf95"
    }
  },
  azul: {
    light: {
      a: "#2860c6",
      ink: "#1b4c92"
    },
    dark: {
      a: "#6ba6e8",
      ink: "#bcd9f2"
    }
  },
  terra: {
    light: {
      a: "#b35535",
      ink: "#8a3f27"
    },
    dark: {
      a: "#e0875f",
      ink: "#f2c2ac"
    }
  }
};
function foxeTheme(theme, accent) {
  const isDark = theme === "dark";
  const ac = (FOXE_ACCENTS[accent] || FOXE_ACCENTS.azul)[isDark ? "dark" : "light"];
  const base = isDark ? {
    "--bg": "#14110d",
    "--card": "#1d1814",
    "--border": "#2e2820",
    "--border-soft": "#27221b",
    "--input": "#211c16",
    "--text": "#f1ede6",
    "--text-2": "#b4ad9f",
    "--muted": "#837d71",
    "--step-bg": "#1a1610",
    "--dot-mute": "#433c30",
    "--mute-tint": "#27221b",
    "--ok": "#52b97e",
    "--ok-ink": "#86d6a4",
    "--ok-tint": foxeHexToRgba("#52b97e", 0.16),
    "--ok-border": foxeHexToRgba("#52b97e", 0.32),
    "--warn": "#e0954a",
    "--warn-ink": "#eab676",
    "--warn-tint": foxeHexToRgba("#e0954a", 0.16),
    "--info-ink": "#7fb0e0",
    "--info-tint": foxeHexToRgba("#7fb0e0", 0.16),
    "--crit": "#e06a55",
    "--crit-ink": "#f0a293",
    "--crit-tint": foxeHexToRgba("#e06a55", 0.16),
    "--crit-border": foxeHexToRgba("#e06a55", 0.32)
  } : {
    "--bg": "#f4f2ee",
    "--card": "#ffffff",
    "--border": "#e7e3db",
    "--border-soft": "#efece5",
    "--input": "#faf9f6",
    "--text": "#1b1915",
    "--text-2": "#4a453d",
    "--muted": "#9a9388",
    "--step-bg": "#fbfaf7",
    "--dot-mute": "#cac3b7",
    "--mute-tint": "#efede7",
    "--ok": "#2f7d4f",
    "--ok-ink": "#1d6b41",
    "--ok-tint": "#e6f3ec",
    "--ok-border": "#cfe4d6",
    "--warn": "#d97a2b",
    "--warn-ink": "#9a5a12",
    "--warn-tint": "#fbeede",
    "--info-ink": "#2a5d8f",
    "--info-tint": "#e7eef8",
    "--crit": "#c0392b",
    "--crit-ink": "#a23b2a",
    "--crit-tint": "#fbe7e2",
    "--crit-border": "#f0d8d2"
  };
  base["--accent"] = ac.a;
  base["--accent-ink"] = ac.ink;
  base["--accent-tint"] = foxeHexToRgba(ac.a, isDark ? 0.17 : 0.12);
  base["--nav-active"] = foxeHexToRgba(ac.a, isDark ? 0.2 : 0.14);
  base["--accent-line"] = foxeHexToRgba(ac.a, isDark ? 0.32 : 0.3);
  return base;
}
window.foxeTheme = foxeTheme;
window.FOXE_ACCENTS = FOXE_ACCENTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/foxe/foxe-theme.js", error: String((e && e.message) || e) }); }

// ui_kits/painel/painel-screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// FINPEC Painel — product screens. Recreations of the real investor/admin
// views, composed from the design-system components on the global namespace.

const DS = window.FINPECDesignSystem_f2149b;
const {
  Button,
  IconButton,
  Card,
  Pill,
  Tag,
  Avatar,
  KpiCard,
  DataTable,
  BarChart,
  Pager,
  Field,
  Input,
  Select,
  Checkbox,
  RadioCard,
  EmptyState,
  MoneyInput
} = DS;

/* ---------------- Login ---------------- */
function Login({
  onEnter
}) {
  return /*#__PURE__*/React.createElement(DS.LoginScreen, {
    methods: "both",
    logoSrc: "../../assets/finpec-logo-branco.png",
    systemName: "Painel",
    systemTagline: "Investidor \xB7 Administrativo",
    title: "Cr\xE9dito rural com lastro em CPR",
    description: "Emiss\xE3o e gest\xE3o de CPRFs, integra\xE7\xE3o com a B3 e acompanhamento dos indicadores do agroneg\xF3cio.",
    imageSrc: "../../assets/finpec-jornada-credito.jpg",
    release: "0.2.0022",
    onSso: onEnter,
    onSubmit: onEnter
  });
}

/* ---------------- Page head ---------------- */
function PageHead({
  title,
  sub,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "fp-page-title"
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    className: "fp-page-sub"
  }, sub)), actions && /*#__PURE__*/React.createElement("div", {
    className: "fp-page-actions"
  }, actions));
}

/* ---------------- Dashboard ---------------- */
function Dashboard({
  toast
}) {
  const toneDot = {
    danger: "var(--danger)",
    warn: "var(--warn)",
    info: "var(--info)",
    ok: "var(--ok)"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-fade-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Bem-vindo, Jo\xE3o",
    sub: "Panorama da opera\xE7\xE3o \xB7 ter\xE7a-feira, 09 jun 2026",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: Icons.download()
    }, "Exportar"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: Icons.plus(),
      onClick: () => toast("Nova CPRF iniciada")
    }, "Nova CPRF"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "fp-kpi-grid"
  }, PAINEL.kpis.map((k, i) => /*#__PURE__*/React.createElement(KpiCard, _extends({
    key: i
  }, k)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Capta\xE7\xE3o por m\xEAs",
    actions: /*#__PURE__*/React.createElement("div", {
      className: "fp-seg"
    }, /*#__PURE__*/React.createElement("button", {
      className: "on"
    }, "12 meses"), /*#__PURE__*/React.createElement("button", null, "YTD"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) 28px/1 var(--font-display)",
      letterSpacing: "-0.02em",
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      color: "var(--muted)",
      fontWeight: 700
    }
  }, "R$"), "214,7", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--muted)",
      fontWeight: 600,
      marginLeft: 7
    }
  }, "mi")), /*#__PURE__*/React.createElement("span", {
    className: "fp-trend up",
    style: {
      fontSize: 13
    }
  }, Icons.arrowUp({
    size: 13
  }), " +12,4% no trimestre")), /*#__PURE__*/React.createElement(BarChart, {
    data: PAINEL.captacao
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Precisa da sua aten\xE7\xE3o"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, PAINEL.atencao.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      padding: "12px 0",
      borderTop: i ? "1px solid var(--border)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: toneDot[a.tone],
      marginTop: 5,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-semibold) 13.5px/1.3 var(--font-ui)",
      color: "var(--ink)"
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--muted)",
      marginTop: 3,
      lineHeight: 1.4
    }
  }, a.desc))))))));
}

/* ---------------- CPRF list ---------------- */
function CprfList({
  toast
}) {
  const [page, setPage] = React.useState(1);
  const [q, setQ] = React.useState("");
  const rows = PAINEL.cprfs.filter(r => r.produtor.toLowerCase().includes(q.toLowerCase()) || r.id.includes(q));
  const cols = [{
    key: "id",
    label: "CPRF",
    render: r => /*#__PURE__*/React.createElement("span", {
      className: "fp-cell-id"
    }, r.id)
  }, {
    key: "produtor",
    label: "Produtor",
    render: r => /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "fp-cell-strong"
    }, r.produtor), /*#__PURE__*/React.createElement("span", {
      className: "fp-cell-sub"
    }, "Filial ", r.filial))
  }, {
    key: "valor",
    label: "Valor",
    num: true,
    render: r => /*#__PURE__*/React.createElement("span", {
      className: "fp-cell-money"
    }, r.valor)
  }, {
    key: "taxa",
    label: "Taxa",
    render: r => /*#__PURE__*/React.createElement(Tag, null, r.taxa)
  }, {
    key: "venc",
    label: "Vencimento",
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12.5,
        color: "var(--ink-2)"
      }
    }, r.venc)
  }, {
    key: "status",
    label: "Status",
    render: r => /*#__PURE__*/React.createElement(Pill, {
      tone: r.tone,
      dot: true
    }, r.status)
  }, {
    key: "act",
    label: "",
    render: () => /*#__PURE__*/React.createElement("div", {
      className: "fp-row-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "fp-row-act",
      title: "Abrir"
    }, Icons.file({
      size: 15
    })))
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-fade-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "CPRFs Ativas",
    sub: "1.318 c\xE9dulas em carteira \xB7 R$ 1,84 bi sob gest\xE3o",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: Icons.download()
    }, "Exportar"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: Icons.plus(),
      onClick: () => toast("Nova CPRF iniciada")
    }, "Nova CPRF"))
  }), /*#__PURE__*/React.createElement(Card, {
    bodyless: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-table-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-search-field"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Filtrar por produtor ou n\xFAmero\u2026",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "fp-seg"
  }, /*#__PURE__*/React.createElement("button", {
    className: "on"
  }, "Todas"), /*#__PURE__*/React.createElement("button", null, "Ativas"), /*#__PURE__*/React.createElement("button", null, "Pendentes")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Filtros")), rows.length ? /*#__PURE__*/React.createElement(DataTable, {
    columns: cols,
    rows: rows
  }) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: Icons.file({
      size: 24
    }),
    title: "Nenhuma CPRF encontrada",
    message: "Ajuste os filtros ou o termo de busca."
  }), /*#__PURE__*/React.createElement(Pager, {
    page: page,
    totalPages: 28,
    label: `${rows.length} de 1.318 cédulas`,
    onChange: setPage
  })));
}

/* ---------------- New CPRF form ---------------- */
function NewCprf({
  toast
}) {
  const [indexador, setIndexador] = React.useState("cdi");
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-fade-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Nova CPRF",
    sub: "Emiss\xE3o de c\xE9dula de produto rural financeira"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 340px",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Dados da emiss\xE3o"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Produtor",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Raz\xE3o social ou nome"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "CPF / CNPJ",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "000.000.000-00"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Filial"
  }, /*#__PURE__*/React.createElement(Select, null, /*#__PURE__*/React.createElement("option", null, "Cara Preta"), /*#__PURE__*/React.createElement("option", null, "Sul"), /*#__PURE__*/React.createElement("option", null, "Norte"), /*#__PURE__*/React.createElement("option", null, "Leste"))), /*#__PURE__*/React.createElement(Field, {
    label: "Valor (R$)",
    required: true
  }, /*#__PURE__*/React.createElement(MoneyInput, {
    mask: "currency"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Vencimento",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    type: "date"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Garantia"
  }, /*#__PURE__*/React.createElement(Select, null, /*#__PURE__*/React.createElement("option", null, "Penhor de safra"), /*#__PURE__*/React.createElement("option", null, "Aliena\xE7\xE3o de gado"), /*#__PURE__*/React.createElement("option", null, "Aval")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fp-section-label",
    style: {
      marginBottom: 12
    }
  }, "Indexador"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(RadioCard, {
    title: "CDI",
    desc: "P\xF3s-fixado, taxa + spread.",
    selected: indexador === "cdi",
    onSelect: () => setIndexador("cdi")
  }), /*#__PURE__*/React.createElement(RadioCard, {
    title: "IPCA",
    desc: "Indexado \xE0 infla\xE7\xE3o.",
    selected: indexador === "ipca",
    onSelect: () => setIndexador("ipca")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => toast("CPRF criada e enviada para assinatura")
  }, "Emitir CPRF"))), /*#__PURE__*/React.createElement(Card, {
    title: "Resumo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, [["Valor", "R$ 0,00"], ["Indexador", indexador.toUpperCase()], ["Spread sugerido", indexador === "cdi" ? "+4,2%" : "+6,8%"], ["Prazo", "—"], ["Registro B3", "Pendente"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)",
      fontWeight: 600
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, Icons.alert({
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--muted)",
      lineHeight: 1.45
    }
  }, "A c\xE9dula segue para assinatura digital antes do registro na B3."))))));
}

/* ---------------- Generic placeholder ---------------- */
function Placeholder({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fp-fade-in"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: title,
    sub: "Vis\xE3o demonstrativa do design system"
  }), /*#__PURE__*/React.createElement(Card, {
    bodyless: true
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: Icons.chart({
      size: 24
    }),
    title: `${title} em construção`,
    message: "Esta \xE1rea comp\xF5e os mesmos componentes do design system FINPEC."
  })));
}
Object.assign(window, {
  Login,
  Dashboard,
  CprfList,
  NewCprf,
  Placeholder,
  PageHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/painel/painel-screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/painel/painel-shared.jsx
try { (() => {
// Shared icons (Lucide-style) + mock data for the FINPEC Painel UI kit.
// Exposed on window so the screen files and index.html can share them.

const icon = (paths, sw = 1.9) => (props = {}) => React.createElement("svg", {
  width: props.size || 18,
  height: props.size || 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  dangerouslySetInnerHTML: {
    __html: paths
  }
});
const Icons = {
  home: icon('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>'),
  file: icon('<path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path d="M14 4v5h5"/><path d="M8 13h7M8 17h5"/>'),
  pen: icon('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>'),
  trend: icon('<path d="M3 17l6-6 4 4 8-8"/><path d="M21 7v6h-6"/>'),
  bank: icon('<path d="m3 9 9-5 9 5"/><path d="M4 10v8M9 10v8M15 10v8M20 10v8"/><path d="M2 21h20"/>'),
  wallet: icon('<path d="M3 7a2 2 0 0 1 2-2h13v4M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M3 7h16"/><circle cx="17" cy="13" r="1.4"/>'),
  bell: icon('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>'),
  plus: icon('<path d="M12 5v14M5 12h14"/>', 2),
  download: icon('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>', 2),
  users: icon('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'),
  chart: icon('<path d="M3 3v18h18"/><path d="M7 16v-5M12 16V8M17 16v-9"/>'),
  building: icon('<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>'),
  bell2: icon('<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M3.26 17a13 13 0 0 0 17.48 0"/><path d="M18 8a6 6 0 0 0-12 0c0 5-2 6-2 6h16s-2-1-2-6"/>'),
  doc: icon('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/>'),
  cow: icon('<path d="M3 6c0 2 2 3 2 3M21 6c0 2-2 3-2 3"/><path d="M7 9a5 5 0 0 0 10 0"/><circle cx="9.5" cy="13.5" r=".6"/><circle cx="14.5" cy="13.5" r=".6"/><path d="M9 17c1 1 5 1 6 0"/>'),
  alert: icon('<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>'),
  check: icon('<path d="M20 6 9 17l-5-5"/>', 2.4),
  clock: icon('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  arrowUp: icon('<path d="M12 19V5M5 12l7-7 7 7"/>', 2.4),
  arrowDown: icon('<path d="M12 5v14M5 12l7 7 7-7"/>', 2.4)
};
const PAINEL = {
  user: {
    name: "João Kraemer",
    role: "Administrador",
    initials: "JK"
  },
  nav: [{
    label: "Geral",
    items: [{
      id: "dashboard",
      label: "Visão Geral",
      icon: Icons.home()
    }]
  }, {
    label: "CPRFs",
    items: [{
      id: "ativas",
      label: "Ativas",
      icon: Icons.file(),
      badge: "1.318",
      tone: "info"
    }, {
      id: "assinatura",
      label: "Pendentes de assinatura",
      icon: Icons.pen(),
      badge: "14",
      hot: true
    }, {
      id: "nova",
      label: "Nova CPRF",
      icon: Icons.plus()
    }]
  }, {
    label: "B3 & Indicadores",
    items: [{
      id: "b3",
      label: "Acompanhamento B3",
      icon: Icons.bank(),
      badge: "71",
      tone: "info"
    }, {
      id: "boi",
      label: "Boi Gordo",
      icon: Icons.cow(),
      dot: true,
      tone: "ok"
    }]
  }, {
    label: "Gestão",
    items: [{
      id: "clientes",
      label: "Clientes",
      icon: Icons.users()
    }, {
      id: "filiais",
      label: "Filiais",
      icon: Icons.building()
    }, {
      id: "documentos",
      label: "Documentos",
      icon: Icons.doc(),
      dot: true,
      tone: "hot"
    }]
  }],
  kpis: [{
    label: "Capital sob gestão",
    value: "1,84",
    prefix: "R$",
    unit: "bi",
    tone: "primary",
    icon: Icons.wallet(),
    trend: {
      dir: "up",
      label: "+8,2%"
    },
    foot: "vs. mês anterior"
  }, {
    label: "CPRFs ativas",
    value: "1.318",
    tone: "info",
    icon: Icons.file(),
    trend: {
      dir: "up",
      label: "+42"
    },
    foot: "novas este mês"
  }, {
    label: "Pendentes de assinatura",
    value: "14",
    tone: "warn",
    icon: Icons.pen(),
    trend: {
      dir: "down",
      label: "5 em alerta"
    },
    foot: "prazo crítico"
  }, {
    label: "Aguardando registro B3",
    value: "71",
    tone: "neutral",
    icon: Icons.bank(),
    trend: {
      dir: "up",
      label: "+71"
    },
    foot: "a registrar"
  }],
  captacao: [{
    label: "Jul",
    value: 62
  }, {
    label: "Ago",
    value: 48
  }, {
    label: "Set",
    value: 74
  }, {
    label: "Out",
    value: 58
  }, {
    label: "Nov",
    value: 83
  }, {
    label: "Dez",
    value: 69
  }, {
    label: "Jan",
    value: 91
  }, {
    label: "Fev",
    value: 77
  }, {
    label: "Mar",
    value: 64
  }, {
    label: "Abr",
    value: 88
  }, {
    label: "Mai",
    value: 95
  }, {
    label: "Jun",
    value: 72
  }],
  atencao: [{
    tone: "danger",
    title: "5 CPRFs com prazo crítico",
    desc: "Assinatura vence em menos de 48h."
  }, {
    tone: "warn",
    title: "71 contratos a registrar na B3",
    desc: "Lote pronto para envio ao registro."
  }, {
    tone: "info",
    title: "Renovação pendente · Pasto Sul",
    desc: "Cliente aguardando proposta de renovação."
  }],
  cprfs: [{
    id: "#2740",
    produtor: "Fazenda Santa Mônica",
    filial: "Cara Preta",
    valor: "R$ 1.240.000",
    taxa: "CDI + 4,2%",
    venc: "12/08/2026",
    status: "Ativa",
    tone: "ok"
  }, {
    id: "#2739",
    produtor: "Agropecuária Cara Preta",
    filial: "Cara Preta",
    valor: "R$ 880.500",
    taxa: "CDI + 5,0%",
    venc: "03/09/2026",
    status: "Em revisão",
    tone: "warn"
  }, {
    id: "#2738",
    produtor: "Pasto Sul Ltda.",
    filial: "Sul",
    valor: "R$ 2.105.000",
    taxa: "IPCA + 7,1%",
    venc: "21/07/2026",
    status: "Antecipação",
    tone: "info"
  }, {
    id: "#2736",
    produtor: "Fazenda Santa Helena",
    filial: "Norte",
    valor: "R$ 540.000",
    taxa: "CDI + 3,8%",
    venc: "30/06/2026",
    status: "Pendente assinatura",
    tone: "danger"
  }, {
    id: "#2733",
    produtor: "Confinamento Fábrica",
    filial: "Cara Preta",
    valor: "R$ 1.690.000",
    taxa: "CDI + 4,5%",
    venc: "15/10/2026",
    status: "Ativa",
    tone: "ok"
  }, {
    id: "#2731",
    produtor: "Agro Leste S.A.",
    filial: "Leste",
    valor: "R$ 720.000",
    taxa: "IPCA + 6,4%",
    venc: "08/11/2026",
    status: "Ativa",
    tone: "ok"
  }, {
    id: "#2728",
    produtor: "Fazenda Boa Vista",
    filial: "Norte",
    valor: "R$ 310.000",
    taxa: "CDI + 4,0%",
    venc: "19/09/2026",
    status: "Resgate confirmado",
    tone: "neutral"
  }]
};
Object.assign(window, {
  Icons,
  PAINEL
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/painel/painel-shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.LoginScreen = __ds_scope.LoginScreen;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.Pager = __ds_scope.Pager;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.MoneyInput = __ds_scope.MoneyInput;

__ds_ns.RadioCard = __ds_scope.RadioCard;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.ImageThumb = __ds_scope.ImageThumb;

__ds_ns.ImageThumbGrid = __ds_scope.ImageThumbGrid;

__ds_ns.ImageViewer = __ds_scope.ImageViewer;

__ds_ns.Lightbox = __ds_scope.Lightbox;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Topbar = __ds_scope.Topbar;

})();
