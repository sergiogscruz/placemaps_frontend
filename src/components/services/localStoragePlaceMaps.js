export default function localStoragePlaceMaps() {
  return JSON.parse(localStorage.getItem('session'))
}