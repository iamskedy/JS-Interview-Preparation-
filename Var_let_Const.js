//  var, let and const are used to declare a variable

// The difference lies in Scope , Hoisting,Re-declaration and Mutability



// | Keyword | Scope           | Hoisted                          | Re-declaration | Re-assignment               |
// | ------- | --------------- | -------------------------------- | -------------- | --------------------------- |
// | `var`   | Function-scoped | Yes (initialized as `undefined`) | Allowed        | Allowed                     |
// | `let`   | Block-scoped    | Yes (in Temporal Dead Zone)      | ❌ Not Allowed  | ✅ Allowed                   |
// | `const` | Block-scoped    | Yes (in Temporal Dead Zone)      | ❌ Not Allowed  | ❌ Not Allowed (value fixed) |
