const isValidFileType = file => {
  const { type } = file
  const accepted = ["image/jpeg", "image/png"]
  let isValid = false
  accepted.forEach(filetype => {
    if (filetype === type) {
      isValid = true
    }
  })
  return isValid
}

export default isValidFileType
