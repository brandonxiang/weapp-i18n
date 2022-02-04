let T = {}
T.locale = null
T.locales = {}

T.registerLocale = function (locales) {
    T.locales = locales;
}

T.setLocale = function (code) {
    T.locale = code
}

T._ = function (line) {
  return T.parsePath( line );
};

T.parsePath = function (line: string) {
  const parts = line.split( '.' );
  let locales = T.locales[T.locale];
  for (const idx in parts) {
    const part = parts[idx];
    if (locales[part] != null) {
      locales = locales[part];
      if (typeof locales === 'string') {
        return locales;
      }
    }
  }
  return line;
};

export default T
