1. Adding Base Styles. Make body background gray and all h1's font-size 1.5 rem, h2's font-size 1.25 rem. Add centered container with margin left and right 2rem. Add h1 - Couriers page and h2 - Couriers list.
//---
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
}
//---

2. Add Proxima Nova font to project(https://en.bestfonts.pro/font/proxima-nova). Apply Proxima Nova regular to whole project and semibold to h1. You can check font using Chrome extension WhatFont. Need to rerun yarn start after modifying tailwind.css or tailwind.config.js file.

//---
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  @font-face {
    font-family: Proxima Nova;
    font-weight: 400;
    src: url("./fonts/ProximaNova-Regular.woff") format("woff");
  }
  @font-face {
    font-family: Proxima Nova;
    font-weight: 600;
    src: url("./fonts/ProximaNova-Semibold.woff") format("woff");
  }
  h1 {
    @apply text-2xl font-semibold;
  }
  h2 {
    @apply text-xl;
  }
}
//---
<body class="bg-gray-300 font-proxima font-regular">
//---
