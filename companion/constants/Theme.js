// Light Theme
const LIGHT_THEME = {
  COLORS: {
    BG: '#FFFFFF',
    ACCENT: '#F4F4F4',
    ALWAYS_LIGHT: '#F4F4F4',
    ALWAYS_DARK: '#060606',
    MAIN: '#2476FF',
    TITLE: '#060606',
    PLACEHOLDER: '#5C5C5C',
    TEXT: '#595959',
    DANGER: '#9E2727',
    WARNING: '#FF9A00',
    SUCCESS: '#7ED321',
    INFO: '#2E98CC'
  }
}

// Dark Theme
const DARK_THEME = {
  COLORS: {
    BG: '#000000',
    ACCENT: '#2D2D2D',
    ALWAYS_LIGHT: '#F4F4F4',
    ALWAYS_DARK: '#060606',
    MAIN: '#2476FF',
    TITLE: '#F6F6F6',
    PLACEHOLDER: '#a3a3a3',
    TEXT: '#a6a6a6',
    DANGER: '#9E2727',
    WARNING: '#FF9A00',
    SUCCESS: '#7ED321',
    INFO: '#2E98CC'
  }
}

const now = new Date()

export default (now.getHours() > 8 && now.getHours() < 21
  ? LIGHT_THEME
  : DARK_THEME)
