# Curring
Curring Concept Details

Currying in JavaScript is a concept where a function doesn't take all of its arguments at once but instead takes them one at a time, returning a new function for each argument. It's like breaking down a function with multiple arguments into a series of functions, each taking a single argument.

Real-World Example:
Samjho tumhare paas ek web application hai jahan tumhe user roles ke hisaab se different actions ko allow karna hai (jaise read, write, delete). Tum isko curry karke aise likh sakte ho:

function checkPermission(role) {
    return function(operation) {
        return function(resource) {
            return `${role} can ${operation} the ${resource}`;
        }
    }
}

const adminPermission = checkPermission('Admin');
console.log(adminPermission('delete')('files')); // Admin can delete the files

const userPermission = checkPermission('User');
console.log(userPermission('read')('documents')); // User can read the documents


Yahan pe tum alag-alag roles aur actions ko easily manage kar sakte ho without duplicating code.


Use Case : 

