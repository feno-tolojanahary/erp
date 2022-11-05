const photoUpload = require("../assets/images/photo.png");
const SERVER_IMG_URL = "http://localhost:8000/images/"

export function stopPropagate(callback: () => void) {
    return (e: {stopPropagation: () => void, preventDefault: () => void}) => {
      e.preventDefault();
      e.stopPropagation()
      callback()
    }
}

export function mapForListboxSimple(array: any[], nameAttr = "name") {
  return array.map(item => {
    return {
      id: item["id"],
      name: item[nameAttr]
    }
  })
}

export const getImageUrl = (imageName: string | null | undefined): string => {
  return imageName ? SERVER_IMG_URL + imageName : photoUpload;
}