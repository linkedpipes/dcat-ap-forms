import { email, url } from "./validators";

describe("email", () => {

  it("Accepts empty value.", () => {
    expect(email(undefined)).toBe(true);
    expect(email("")).toBe(true);
  });

  it("Accepts a valid email address.", () => {
    expect(email("user@example.com")).toBe(true);
  });

  it("Rejects an email address containing a space.", () => {
    expect(email("user @example.com")).toBe(false);
  });
});

describe("url", () => {

  it("Accepts empty value.", () => {
    expect(url(undefined)).toBe(true);
    expect(url("")).toBe(true);
  });

  it("Accepts a valid https URL.", () => {
    expect(url("https://example.com/path")).toBe(true);
  });

  it("Rejects a URL containing a space.", () => {
    expect(url("https://example.com/pa th")).toBe(false);
  });

  it("Rejects a URL containing square brackets.", () => {
    expect(url("https://example.com/path[1]")).toBe(false);
    expect(url("https://example.com/[path]")).toBe(false);
  });

});
