const fileNameFormatter = name => {
  return name.replace(/[^a-z0-9_\.]/gi, "_")
}

export default fileNameFormatter
