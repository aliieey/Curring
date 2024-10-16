// Curring in js

function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(curriedAdd(2)(3)(4)); // 9
