"use strict";const e=window.document.body.classList,t=window.document.getElementById("checkbox");window.matchMedia("(prefers-color-scheme: dark)").matches&&t.setAttribute("checked",!0),t.addEventListener("change",(function(){this.checked?(e.remove("light-theme"),e.add("dark-theme")):(e.remove("dark-theme"),e.add("light-theme"))}));