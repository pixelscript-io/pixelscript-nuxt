<template>
  <div>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  .skip-link {
    @apply sr-only;
    @apply focus:not-sr-only focus:fixed focus:top-0 focus:left-0;
    @apply focus:z-[100] focus:p-4 focus:m-3;
    @apply focus:bg-zinc-900 focus:text-ps-blue-50;
    @apply focus:outline-none focus:ring-2 focus:ring-ps-blue-100;
    @apply focus:rounded-sm;
  }

  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.2s ease;
    will-change: opacity;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    /* filter: blur(4px); */
  }
</style>