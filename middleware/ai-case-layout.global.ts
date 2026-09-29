// Case studies are shared by both versions of the site. When a visitor arrives
// from an AI answer (?from=ai), use the navigation-free layout.
export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/case/') && to.query.from === 'ai') {
    setPageLayout('ai-case')
  }
})
