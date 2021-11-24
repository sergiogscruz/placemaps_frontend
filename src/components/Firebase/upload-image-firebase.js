import { storage } from "./firebase";

export const UploadImageFirabase = {
  upload: function (type, image) {
    const hashCode = this.generateHash()
    storage.ref(`imagens/${type}/${hashCode}`).put(image);
    return `https://firebasestorage.googleapis.com/v0/b/place-maps-331023.appspot.com/o/imagens%2Fperfil%2F${hashCode}?alt=media`
  },
  generateHash: function () {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return (s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4()).toUpperCase()
  }
}
