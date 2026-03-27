let path = "/.../a/../b/c/../d/./";

let parts = path.split("/");

let stack = [];

for (let i = 0; i < parts.length; i++) {
    let part = parts[i];

    if (part === "" || part === ".") {
        continue;
    } else if (part === "..") {
        if (stack.length > 0) {
            stack.pop();
        }
    } else {
        stack.push(part);
    }
}

let simplifiedPath = "/" + stack.join("/");

console.log(simplifiedPath);
