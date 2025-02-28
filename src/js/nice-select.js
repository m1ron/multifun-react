!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.NiceSelect = t() : e.NiceSelect = t()
}(self, (() => (() => {
  "use strict";
  var e = {
    d: (t, i) => {
      for (var s in i) e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, { enumerable: !0, get: i[s] })
    }, o: (e, t) => Object.prototype.hasOwnProperty.call(e, t), r: e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
    }
  }, t = {};

  function i(e) {
    var t = document.createEvent("MouseEvents");
    t.initEvent("click", !0, !1), e.dispatchEvent(t)
  }

  function s(e) {
    var t = document.createEvent("HTMLEvents");
    t.initEvent("change", !0, !1), e.dispatchEvent(t)
  }

  function o(e) {
    var t = document.createEvent("FocusEvent");
    t.initEvent("focusin", !0, !1), e.dispatchEvent(t)
  }

  function n(e) {
    var t = document.createEvent("FocusEvent");
    t.initEvent("focusout", !0, !1), e.dispatchEvent(t)
  }

  function d(e) {
    var t = document.createEvent("UIEvent");
    t.initEvent("modalclose", !0, !1), e.dispatchEvent(t)
  }

  function l(e, t) {
    "invalid" == t ? (c(this.dropdown, "invalid"), h(this.dropdown, "valid")) : (c(this.dropdown, "valid"), h(this.dropdown, "invalid"))
  }

  function r(e, t) {
    return null != e[t] ? e[t] : e.getAttribute(t)
  }

  function a(e, t) {
    return !!e && e.classList.contains(t)
  }

  function c(e, t) {
    if (e) return e.classList.add(t)
  }

  function h(e, t) {
    if (e) return e.classList.remove(t)
  }

  e.r(t), e.d(t, { bind: () => f, default: () => u });
  var p = { data: null, searchable: !1, showSelectedItems: !1 };

  function u(e, t) {
    this.el = e, this.config = Object.assign({}, p, t || {}), this.data = this.config.data, this.selectedOptions = [], this.placeholder = r(this.el, "placeholder") || this.config.placeholder || "Select an option", this.searchtext = r(this.el, "searchtext") || this.config.searchtext || "Search", this.selectedtext = r(this.el, "selectedtext") || this.config.selectedtext || "selected", this.dropdown = null, this.multiple = r(this.el, "multiple"), this.disabled = r(this.el, "disabled"), this.create()
  }

  function f(e, t) {
    return new u(e, t)
  }

  return u.prototype.create = function () {
    this.el.style.opacity = "0", this.el.style.width = "0", this.el.style.padding = "0", this.el.style.height = "0", this.data ? this.processData(this.data) : this.extractData(), this.renderDropdown(), this.bindEvent()
  }, u.prototype.processData = function (e) {
    var t = [];
    e.forEach((e => {
      t.push({ data: e, attributes: { selected: !!e.selected, disabled: !!e.disabled, optgroup: "optgroup" == e.value } })
    })), this.options = t
  }, u.prototype.extractData = function () {
    var e = this.el.querySelectorAll("option,optgroup"), t = [], i = [], s = [];
    e.forEach((e => {
      if ("OPTGROUP" == e.tagName) var s = { text: e.label, value: "optgroup" }; else {
        let t = e.innerText;
        null != e.dataset.display && (t = e.dataset.display), s = { text: t, value: e.value, extra: e.dataset.extra, selected: null != e.getAttribute("selected"), disabled: null != e.getAttribute("disabled") }
      }
      var o = { selected: null != e.getAttribute("selected"), disabled: null != e.getAttribute("disabled"), optgroup: "OPTGROUP" == e.tagName, class: e.className };
      t.push(s), i.push({ data: s, attributes: o })
      console.log(e.className);
    })), this.data = t, this.options = i, this.options.forEach((e => {
      e.attributes.selected && s.push(e)
    })), this.selectedOptions = s
  }, u.prototype.renderDropdown = function () {
    var e = ["nice-select", r(this.el, "class") || "", this.disabled ? "disabled" : "", this.multiple ? "has-multiple" : ""];
    let t = '<div class="nice-select-search-box">';
    t += `<input type="text" class="nice-select-search" placeholder="${this.searchtext}..." title="search"/>`, t += "</div>";
    var i = `<div class="${e.join(" ")}" tabindex="${this.disabled ? null : 0}">`;
    i += `<span class="${this.multiple ? "multiple-options" : "current"}"></span>`, i += '<div class="nice-select-dropdown">', i += `${this.config.searchable ? t : ""}`, i += '<ul class="list"></ul>', i += "</div>", i += "</div>", this.el.insertAdjacentHTML("afterend", i), this.dropdown = this.el.nextElementSibling, this._renderSelectedItems(), this._renderItems()
  }, u.prototype._renderSelectedItems = function () {
    if (this.multiple) {
      var e = "";
      this.config.showSelectedItems || this.config.showSelectedItems || "auto" == window.getComputedStyle(this.dropdown).width || this.selectedOptions.length < 2 ? (this.selectedOptions.forEach((function (t) {
        e += `<span class="current">${t.data.text}</span>`
      })), e = "" == e ? this.placeholder : e) : e = this.selectedOptions.length + " " + this.selectedtext, this.dropdown.querySelector(".multiple-options").innerHTML = e
    } else {
      var t = this.selectedOptions.length > 0 ? this.selectedOptions[0].data.text : this.placeholder;
      var c = this.selectedOptions.length > 0 ? this.selectedOptions[0].attributes.class : null;
      var current = this.dropdown.querySelector(".current");
      current.innerHTML = t;
      if (c) {
        current.className = 'current ' + c;
      } else {
        current.className = 'current';
      }
    }
  }, u.prototype._renderItems = function () {
    var e = this.dropdown.querySelector("ul");
    this.options.forEach((t => {
      e.appendChild(this._renderItem(t))
    }))
  }, u.prototype._renderItem = function (e) {
    var t = document.createElement("li");
    if (t.innerHTML = e.data.text, null != e.data.extra && t.appendChild(this._renderItemExtra(e.data.extra)), e.attributes.optgroup) c(t, "optgroup"); else {
      t.setAttribute("data-value", e.data.value);
      if (e.attributes.class) {
        t.className = 'option ' + e.attributes.class;
      }
      var i = ["option", e.attributes.selected ? "selected" : null, e.attributes.disabled ? "disabled" : null];
      t.addEventListener("click", this._onItemClicked.bind(this, e)), t.classList.add(...i)
    }
    return e.element = t, t
  }, u.prototype._renderItemExtra = function (e) {
    var t = document.createElement("span");
    return t.innerHTML = e, c(t, "extra"), t
  }, u.prototype.update = function () {
    if (this.extractData(), this.dropdown) {
      var e = a(this.dropdown, "open");
      this.dropdown.parentNode.removeChild(this.dropdown), this.create(), e && i(this.dropdown)
    }
    r(this.el, "disabled") ? this.disable() : this.enable()
  }, u.prototype.disable = function () {
    this.disabled || (this.disabled = !0, c(this.dropdown, "disabled"))
  }, u.prototype.enable = function () {
    this.disabled && (this.disabled = !1, h(this.dropdown, "disabled"))
  }, u.prototype.clear = function () {
    this.resetSelectValue(), this.selectedOptions = [], this._renderSelectedItems(), this.update(), s(this.el)
  }, u.prototype.destroy = function () {
    this.dropdown && (this.dropdown.parentNode.removeChild(this.dropdown), this.el.style.display = "")
  }, u.prototype.bindEvent = function () {
    this.dropdown.addEventListener("click", this._onClicked.bind(this)), this.dropdown.addEventListener("keydown", this._onKeyPressed.bind(this)), this.dropdown.addEventListener("focusin", o.bind(this, this.el)), this.dropdown.addEventListener("focusout", n.bind(this, this.el)), this.el.addEventListener("invalid", l.bind(this, this.el, "invalid")), window.addEventListener("click", this._onClickedOutside.bind(this)), this.config.searchable && this._bindSearchEvent()
  }, u.prototype._bindSearchEvent = function () {
    var e = this.dropdown.querySelector(".nice-select-search");
    e && e.addEventListener("click", (function (e) {
      return e.stopPropagation(), !1
    })), e.addEventListener("input", this._onSearchChanged.bind(this))
  }, u.prototype._onClicked = function (e) {
    var t, i;
    if (e.preventDefault(), a(this.dropdown, "open") ? this.multiple ? e.target == this.dropdown.querySelector(".multiple-options") && (h(this.dropdown, "open"), d(this.el)) : (h(this.dropdown, "open"), d(this.el)) : (c(this.dropdown, "open"), t = this.el, (i = document.createEvent("UIEvent")).initEvent("modalopen", !0, !1), t.dispatchEvent(i)), a(this.dropdown, "open")) {
      var s = this.dropdown.querySelector(".nice-select-search");
      s && (s.value = "", s.focus());
      var o = this.dropdown.querySelector(".focus");
      h(o, "focus"), c(o = this.dropdown.querySelector(".selected"), "focus"), this.dropdown.querySelectorAll("ul li").forEach((function (e) {
        e.style.display = ""
      }))
    } else this.dropdown.focus()
  }, u.prototype._onItemClicked = function (e, t) {
    var i = t.target;
    a(i, "disabled") || (this.multiple ? a(i, "selected") ? (h(i, "selected"), this.selectedOptions.splice(this.selectedOptions.indexOf(e), 1), this.el.querySelector(`option[value="${i.dataset.value}"]`).removeAttribute("selected")) : (c(i, "selected"), this.selectedOptions.push(e)) : (this.options.forEach((function (e) {
      h(e.element, "selected")
    })), this.selectedOptions.forEach((function (e) {
      h(e.element, "selected")
    })), c(i, "selected"), this.selectedOptions = [e]), this._renderSelectedItems(), this.updateSelectValue())
  }, u.prototype.updateSelectValue = function () {
    if (this.multiple) {
      var e = this.el;
      this.selectedOptions.forEach((function (t) {
        var i = e.querySelector(`option[value="${t.data.value}"]`);
        i && i.setAttribute("selected", !0)
      }))
    } else this.selectedOptions.length > 0 && (this.el.value = this.selectedOptions[0].data.value);
    s(this.el)
  }, u.prototype.resetSelectValue = function () {
    if (this.multiple) {
      var e = this.el;
      this.selectedOptions.forEach((function (t) {
        var i = e.querySelector(`option[value="${t.data.value}"]`);
        i && i.removeAttribute("selected")
      }))
    } else this.selectedOptions.length > 0 && (this.el.selectedIndex = -1);
    s(this.el)
  }, u.prototype._onClickedOutside = function (e) {
    this.dropdown.contains(e.target) || (h(this.dropdown, "open"), d(this.el))
  }, u.prototype._onKeyPressed = function (e) {
    var t = this.dropdown.querySelector(".focus"), s = a(this.dropdown, "open");
    if (13 == e.keyCode) i(s ? t : this.dropdown); else if (40 == e.keyCode) {
      if (s) {
        var o = this._findNext(t);
        o && (h(this.dropdown.querySelector(".focus"), "focus"), c(o, "focus"))
      } else i(this.dropdown);
      e.preventDefault()
    } else if (38 == e.keyCode) {
      if (s) {
        var n = this._findPrev(t);
        n && (h(this.dropdown.querySelector(".focus"), "focus"), c(n, "focus"))
      } else i(this.dropdown);
      e.preventDefault()
    } else if (27 == e.keyCode && s) i(this.dropdown); else if (32 === e.keyCode && s) return !1;
    return !1
  }, u.prototype._findNext = function (e) {
    for (e = e ? e.nextElementSibling : this.dropdown.querySelector(".list .option"); e;) {
      if (!a(e, "disabled") && "none" != e.style.display) return e;
      e = e.nextElementSibling
    }
    return null
  }, u.prototype._findPrev = function (e) {
    for (e = e ? e.previousElementSibling : this.dropdown.querySelector(".list .option:last-child"); e;) {
      if (!a(e, "disabled") && "none" != e.style.display) return e;
      e = e.previousElementSibling
    }
    return null
  }, u.prototype._onSearchChanged = function (e) {
    var t = a(this.dropdown, "open"), i = e.target.value;
    if ("" == (i = i.toLowerCase())) this.options.forEach((function (e) {
      e.element.style.display = ""
    })); else if (t) {
      var s = new RegExp(i);
      this.options.forEach((function (e) {
        var t = e.data.text.toLowerCase(), i = s.test(t);
        e.element.style.display = i ? "" : "none"
      }))
    }
    this.dropdown.querySelectorAll(".focus").forEach((function (e) {
      h(e, "focus")
    })), c(this._findNext(null), "focus")
  }, t
})()));