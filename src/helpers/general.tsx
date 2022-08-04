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