1. Adding Base Styles. Make body background gray and all h1's font-size 1.5 rem, h2's font-size 1.25 rem. Add container with margin left and right 2rem. Add centered h1 - Couriers page and h2 - Couriers list.

2. Add Proxima Nova font to project(https://en.bestfonts.pro/font/proxima-nova). Apply Proxima Nova regular to whole project and semibold to h1. You can check font using Chrome extension WhatFont. Need to rerun yarn start after modifying tailwind.css or tailwind.config.js file.

3. Add headings to the list:
   Id
   Firstname
   Lastname
   Vehicle
   Service centre
   Circuit
   Status.
   Add some couriers data :
   const couriers = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    serviceCentre: "ABERDEEN",
    vehicle: "Bike",
    status: "busy",
    circuit: "On circuit",
  },
  {
    id: "2",
    firstName: "John",
    lastName: "Doe",
    serviceCentre: "ABERDEEN",
    vehicle: "Bike",
    status: "busy",
    circuit: "On circuit",
  },
  {
    id: "3",
    firstName: "John",
    lastName: "Doe",
    serviceCentre: "ABERDEEN",
    vehicle: "Bike",
    status: "busy",
    circuit: "On circuit",
  },
]
   Make each cell width w-1/7. 
   
   As tailwind does not have this class, add it to tailwind config.
   If the className becomes too long or we want to reuse it we can:

   - move it to a css class to tailwind.css file - make listHeader class in tailwind.css and apply some styles like flex flex-row bg-gray-400
   - move it to constant above - make .headerCell const with some styles like py-2 px-5 w-1/7 font-bold
   - make a component - make a Cell component which render h3 with some classes like py-2 px-5 w-1/7. When we make component, we have to pass className prop to component, that additional classes would work on it.
   - ...
   - ...
     What are you using?

4. Make
