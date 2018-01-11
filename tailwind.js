let config = require('tailwindcss/defaultConfig')()

config.colors = {
  'bg-primary': 'var(--color-bg-primary)',
  'bg-secondary': 'var(--color-bg-secondary)',
  'bg-default': 'var(--color-bg-default)',
  'bg-inverse': 'var(--color-bg-inverse)',


  'text-primary': 'var(--color-text-primary)',
  'text-secondary': 'var(--color-text-secondary)',
  'text-default': 'var(--color-text-default)',
  'text-default-soft': 'var(--color-text-default-soft)',
  'text-inverse': 'var(--color-text-inverse)',
  'text-inverse-soft': 'var(--color-text-inverse-soft)',
}

config.textColors = {
  'primary': config.colors['text-primary'],
  'secondary': config.colors['text-secondary'],
  'default': config.colors['text-default'],
  'default-soft': config.colors['text-default-soft'],
  'inverse': config.colors['text-inverse'],
  'inverse-soft': config.colors['text-inverse-soft'],
}

config.backgroundColors = {
  'primary': config.colors['bg-primary'],
  'secondary': config.colors['bg-secondary'],
  'default': config.colors['bg-default'],
  'inverse': config.colors['bg-inverse'],
}

config.fonts = {
  'display': 'var(--font-display)',
  'body': 'var(--font-body)',
}

config.fontWeights = {
  'normal': 'var(--font-weight-normal)',
  'display': 'var(--font-weight-display)',
  'btn': 'var(--font-weight-btn)',
}

config.borderRadius = {
  'none': '0',
  'btn': 'var(--rounded-btn)',
}

config.padding = Object.assign({}, config.padding, {
  '16': '4rem',
})

module.exports = config
