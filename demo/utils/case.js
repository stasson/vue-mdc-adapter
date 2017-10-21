export const capitalize = (str) => {
  str = str.trim().replace('-','')
  return str.charAt(0).toUpperCase() + str.slice(1);  
}