# Using Tailwind CSS for Themeable Interfaces

![Screenshot](screenshot.png)

This is really basic demo showing how you might approach configuring [Tailwind CSS](https://tailwindcss.com) if you needed an interface to support multiple themes.

The basic premise is to define your styles in your config file using [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*), and use a more functional/"semantic" naming scheme for your classes.

For example, here's how the text colors are defined in this demo:

```js
textColor: {
    primary: "var(--color-text-primary)",
    secondary: "var(--color-text-secondary)",
    default: "var(--color-text-default)",
    "default-soft": "var(--color-text-default-soft)",
    inverse: "var(--color-text-inverse)",
    "inverse-soft": "var(--color-text-inverse-soft)"
},
```

Each theme then defines these custom properties inside of their own theme class:

```css
.theme-startup {
  --color-text-primary: #fff;
  --color-text-secondary: #44467b;
  --color-text-default: #373737;
  --color-text-default-soft: #6a6a6a;
  --color-text-inverse: #fff;
  --color-text-inverse-soft: rgba(255, 255, 255, 0.7);
}

.theme-boring {
  --color-text-primary: #fff;
  --color-text-secondary: #755f17;
  --color-text-default: #444;
  --color-text-default-soft: #999;
  --color-text-inverse: #444;
  --color-text-inverse-soft: #999;
}

.theme-elegant {
  --color-text-primary: #fff;
  --color-text-secondary: #927e7e;
  --color-text-default: #373737;
  --color-text-default-soft: #6a6a6a;
  --color-text-inverse: #fff;
  --color-text-inverse-soft: #bbb;
}
```


## SCSS Variation
[Example](https://codepen.io/phreaknation/pen/3f0aeb9aeec18d0b3fbeecda0fcf2e0b?editors=1100)

**Initial setup:**
```scss
@tailwind base;
@tailwind components;
@tailwind utilities;

// Generates a theme based on supplied input
@import "gen-theme.scss";

// Helper function that wraps `--my-css-variable` into `v(my-css-variable)`
@function v($var) {
  @return var(--#{$var});
}

// Add custom components
@import "components/hero.scss";
@import "components/button.scss";

// Base styles
$color-white: #fff;
$color-gray-dark: #373737;
$color-gray: #6a6a6a;
```

**Theme setup:**
```scss
.theme-startup {
  $color-bg-primary: #ff73b3;
  $color-bg-secondary: #6f72b9;
  $color-bg-inverse: #5255ac;
  $color-text-secondary: #44467b;
  $font-display: Futura, Trebuchet MS, Arial, sans-serif;
  $font-body: $font-display;

  @include gen-theme(
    $color-bg-primary, $color-bg-secondary, $color-white, $color-bg-inverse, $color-white, $color-text-secondary, $color-gray-dark, $color-gray, $color-white, rgba($color-white, 0.7),
    $font-display,
    $font-body,
    400, 600, 600,
    9999px
  );

  @include hero();
  @include button();
}

.theme-boring {
  $color-bg-primary: #0252cc;
  $color-bg-secondary: #ffc402;
  $color-text-secondary: #755f17;
  $color-text-base: #444;
  $color-text-soft: #999;
  $font-display: Futura, Trebuchet MS, Arial, sans-serif;
  $font-body: $font-display;

  @include gen-theme(
    $color-bg-primary, $color-bg-secondary, $color-white, $color-white, $color-white, $color-text-secondary, $color-text-base, $color-text-soft, $color-text-base, $color-text-soft,
    $font-display,
    $font-body,
    400, 400, 600,
    0.25rem
  );

  @include hero();
  @include button();
}

.theme-elegant {
  $color-bg-primary: #c0b283;
  $color-bg-secondary: #dcd0c0;
  $color-bg-default: #f4f4f4;
  $color-text-secondary: #927e7e;
  $text-inverse-soft: #bbb;
  $font-display: Georgia, Times, "Times New Roman", serif;
  $font-body: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;

  @include gen-theme(
    $color-bg-primary, $color-bg-secondary, $color-bg-default, $color-gray-dark, $color-white, $color-text-secondary, $color-gray-dark, $color-gray, $color-white, $text-inverse-soft,
    $font-display,
    $font-body,
    400, 400, 600,
    0
  );

  @include hero();
  @include button();
}
```
