---
id: methodology
title: Methodology

---
Truly modular components should conform and adapt to whatever size box you give them. To achieve this, top-level elements in components should have a fluid width and height. Components should strive to fill 100% of the space they are given, and leave the burden of constraining them to the parent.

Take, for example, the Schedule component above: It is rendered in a div that has a fixed height and width. The scheduler fills up the available space. Similarly, if you were to render that scheduler in an empty body, it would fill the entire page. 
