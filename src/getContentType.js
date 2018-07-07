function getContentType(fileNameWithExt) {
  const tempArray = fileNameWithExt.split(/[.]/gi)
  const fileExtenstion = tempArray[tempArray.length - 1]
  let type = ""
  switch (fileExtenstion) {
    case "css":
      type = "text/css"
      break
    case "js":
      type = "text/js"
      break
    case "xml":
      type = "text/xml"
      break
    case "jpeg":
    case "jpg":
      type = "image/jpeg"
      break
    case "ico":
      type = "image/x-icon"
      break
    case "png":
      type = "image/png"
      break
    case "json":
      type = "application/json"
      break
    case "html":
      type = "text/html"
      break
    case "woff2":
      type = "application/font-woff2"
      break
    case "ttf":
      type = "application/x-font-ttf"
      break
    case "svg":
      type = "image/svg+xml"
      break
    case "txt":
      type = "text/plain"
      break 
    default:
      type = ""
      break
  }
  return type
}

module.exports = getContentType