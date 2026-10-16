document.addEventListener("nav", () => {
  document.body.classList.add("animation-ready")
})

document.addEventListener("themechange", (e: CustomEvent<{ theme: "light" | "dark" }>) => {
  const isDark = e.detail.theme === "dark"
  if (isDark) {
    document.body.classList.add("dark")
  } else {
    document.body.classList.remove("dark")
  }
  document.body.classList.add("animation-ready")
})

// Run once on load to sync initial state
const isDark = document.documentElement.getAttribute("saved-theme") === "dark"
if (isDark) {
  document.body.classList.add("dark")
}
document.body.classList.add("animation-ready")
