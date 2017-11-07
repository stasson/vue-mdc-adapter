export const capitalize = (str) => {
  return str
    .replace(/[_.-]/g,' ')
    .replace(/\b(\w)/g, function (_,x) {
          return x.toUpperCase();
  });
}

export const camelize = (str) => {
  return str.replace(/[_.-](\w|$)/g, function (_,x) {
          return x.toUpperCase();
  });
}