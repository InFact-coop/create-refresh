import isValidFileType from "./isValidFileType"
import fileNameFormatter from "./fileNameFormat"

const testpngfile = {
  type: "image/png",
}
const testjpgfile = {
  type: "image/jpeg",
}
const invalidfile = {
  name: "doc/xlsx",
}

describe("fileNameFormatter", () => {
  test("hello world!.jpg", () => {
    expect(fileNameFormatter("hello world!.jpg")).toBe("hello_world_.jpg")
  })
  test("$hg:/60.png", () => {
    expect(fileNameFormatter("$hg:/60.png")).toBe("_hg__60.png")
  })
})

describe("isValidFileType", () => {
  test("test png", () => {
    expect(isValidFileType(testpngfile)).toBe(true)
  })
  test("test jpg", () => {
    expect(isValidFileType(testjpgfile)).toBe(true)
  })
  test("test invalid file", () => {
    expect(isValidFileType(invalidfile)).toBe(false)
  })
})
