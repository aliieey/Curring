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
1. Event Handlers mein Customization
Currying ko tum event listeners aur handlers ke sath customize karne ke liye use kar sakte ho.

Use Case: Tumhare paas ek website hai jahan tum different buttons ko click karne pe different colors apply karwana chahte ho. Har button ke liye alag event handler likhna inefficient ho sakta hai. Tum currying se general handler bana sakte ho jo specific colors ko apply kare.

function changeColor(color) {
    return function(event) {
        event.target.style.backgroundColor = color;
    };
}

// Specific handlers created by currying
const redButtonHandler = changeColor('red');
const blueButtonHandler = changeColor('blue');

// Assigning event handlers
document.getElementById('redButton').addEventListener('click', redButtonHandler);
document.getElementById('blueButton').addEventListener('click', blueButtonHandler);


2. Partial Application (API Calls Example)
Partial application ka matlab hai tum ek function ko kuch arguments ke sath pehle hi bind kar sakte ho aur baad mein specific arguments pass kar sakte ho. Isko tum API calls ke sath use kar sakte ho.

Use Case: Suppose tumhe ek API hai jo different endpoints ke liye same base URL use karti hai. Tum fetch calls ko curry kar ke ek base URL bind kar sakte ho.

const makeApiCall = (baseUrl) => (endpoint) => (params) => {
    return fetch(`${baseUrl}/${endpoint}?${new URLSearchParams(params)}`)
        .then(response => response.json());
};

const apiCallWithBase = makeApiCall('https://api.example.com');

// Different API calls with the same base URL
apiCallWithBase('users')({ id: 1 }).then(data => console.log(data));
apiCallWithBase('posts')({ userId: 1 }).then(data => console.log(data));




