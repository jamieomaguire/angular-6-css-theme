# Angular 6 CSS Theme

This is a proof of concept project to demonstrate how CSS custom properties (variables) could be used in combination with a
polyfill and SCSS to deliver data-driven multi-tenanted theming to DSI.

This approach would theoretically remove the need for tenant-specific theme stylesheets and allow dynamic changes to be 
applied to a tenant's theme in the browser at runtime without the need for SCSS to be recompiled.