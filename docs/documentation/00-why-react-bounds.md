---
id: why-react-bounds
title: Why React Bounds?

---
Media Queries are a hack. Truly modular components need to respond to the size of their containers.

## Define "Bounds" Similar to Media Queries

Define a set a min-max bounds on any component. React Bounds uses keywords similar to ones you use in media queries.

## Use Bounds in the Component

Active bound information is passed down to components that have them declared. Get an array of all active bounds, or check to see if a specific bound is active. Lastly, you can also get raw width and height information.

## Use Bounds in CSS

If you are not using inline-styles, React Bounds also exposes the active bounds as class names on the wrapper div. Use these class names to style your component in CSS. 
