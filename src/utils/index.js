export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function getLocalItem(key) {
  if (localStorage && localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
}

export function setLocalItem(key, value) {
  if (localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function clearLocalItem(key) {
  if (localStorage) {
    localStorage.removeItem(key);
  }
}
