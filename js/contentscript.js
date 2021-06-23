window.addEventListener("load", () => {

  function addScript(scriptFileName) {
    let script = document.createElement("script");
    script.src = chrome.runtime.getURL(scriptFileName);
    return document.head.appendChild(script);
  }

  function addCss(cssFyleName) {
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = chrome.runtime.getURL(cssFyleName);
    return document.head.appendChild(css);
  }

  const QuickAccessMenuCss = ['css/dummy.css']

  const QuickAccessMenuUtilities = ["js/QuickAccessMenuUtilities/QuickAccessMenuGlobal.js", "js/QuickAccessMenuUtilities/QuickAccessMenuEngine.js", "js/QuickAccessMenuUtilities/QuickAccessMenuSettings.js"];

  const QuickAccessMenuCommands = [
    "js/QuickAccessMenuCommands/demo.js",
    "js/QuickAccessMenuCommands/next.js",
    "js/QuickAccessMenuCommands/back.js",
    "js/QuickAccessMenuCommands/giveeverything.js",
    "js/QuickAccessMenuCommands/action.js",
    "js/QuickAccessMenuCommands/whisper.js",
    "js/QuickAccessMenuCommands/commands.js",
    "js/QuickAccessMenuCommands/erase.js",
    "js/QuickAccessMenuCommands/boost.js",
    "js/QuickAccessMenuCommands/wardrobe.js",
    "js/QuickAccessMenuCommands/unrestrict.js",
    "js/QuickAccessMenuCommands/store.js",
    "js/QuickAccessMenuCommands/safewordspecific.js"
  ]

  QuickAccessMenuUtilities.forEach(addScript);
  QuickAccessMenuCommands.forEach(addScript);
  QuickAccessMenuCss.forEach(addCss);
});
