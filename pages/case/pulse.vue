<template>
    <div id="page">
          <div id="page-content">
              <div id="subpage-bg"></div>
  
              <div id="page-content-container">
                  <CaseStudyBack />
                  <h1>Case Study - Pulse</h1>
                  <p class="lead">Web Application Design</p>
                  <hr class="page-divider-short" />
  
                  <p>Pulse is a web application for managing and tracking projects and tasks.</p>
  
                  <ProjectModal image="/img/preview_ui1.png" fullImage="/img/full_ui1.png" />
                  <ProjectModal image="/img/preview_ui2.png" fullImage="/img/full_ui2.png" />
                  <ProjectModal image="/img/preview_ui3.png" fullImage="/img/full_ui3.png" />
                  <ProjectModal image="/img/preview_ui4.png" fullImage="/img/full_ui4.png" />
              </div>
          </div>
    </div>
  </template>
  
  <script setup>
      useSeoMeta({
          title: 'PixelScript - Pulse',
          ogTitle: 'PixelScript - Pulse',
          description: 'A web application for managing and tracking projects and tasks.',
          ogDescription: 'A web application for managing and tracking projects and tasks.',
      })
  </script>
  
  <style>
      .case-image {
          @apply w-full mt-6 rounded-md;
      }
  </style>