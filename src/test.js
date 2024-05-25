const data = [];
data.push(1);

const foo = require("foo");
const original = ["foo", "bar", "baz"];
const sorted = [...original].sort((a, b) => a.localeCompare(b)); // This is OK with ignoreImmediateMutation.

window.alert("Hello, world!");
