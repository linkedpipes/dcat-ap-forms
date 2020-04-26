let matchMedia = null;

export function initializeTheme() {
  let dark = false;
  if (window.matchMedia) {
    matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    dark = matchMedia.matches;
  }
  return dark;
}

export function registerListener(vuetify) {
  if (matchMedia != null) {
    matchMedia.addEventListener("change", (event) => {
      vuetify.framework.theme.dark = event.matches;
    });
  }
}
