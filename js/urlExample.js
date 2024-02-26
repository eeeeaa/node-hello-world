//documentation: https://nodejs.org/api/url.html#url

//absolute path -> new URL(url)
const pathname = "/a/b/c";
const search = "?d=e";
const hash = "#fgh";
const myAbsURL = new URL(`https://example.org${pathname}${search}${hash}`);

//relative path -> new URL(input, base)
// https://example.org/foo
const myRelURL = new URL("/foo", "https://example.org/");
