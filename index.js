// < -------------------------------  TIMMY -------------------------------- >
// your first assignment is to
// create the logic for their checkout system that
// *** returns the total cost of all refills including if the customer has a subscription and/or a coupon.

// The customer has a coupon,
// The customer will receive a $10 discount after the subscription discount has been calculated.

// const timmy = {
//     prescription: "acetaminophen",
//     pricePerRefill: 25,
//     refills: 3,
//     subscription: false,
//     coupon: true,
// };

// Timmy => "Your grand total is $65"

// < -------------------------------  SARAH -------------------------------- >
// your first assignment is to
// create the logic for their checkout system that
// *** returns the total cost of all refills including if the customer has a subscription and/or a coupon.
// The customer has a subscription,
// The customer will receive a 25% discount after the refill total has been calculated.
//Total cost will be 50x1 refills (50), then minus the 25% subscription discount (50 x .25 = 12.50 Then, 50 - 12.5 = 37.5)
//define the given variables
//Define a function that returns the sum of the price per refill * refills before discounts
// Invoke the sumOfrefills function with the pricePerRefill and refills variables.
//Store the return of this function in a new variable labeled totalBeforeDiscounts.
// Define a function that returns the cost of the totalBeforeDiscounts minus the discount (25 percent).
// Invoke the addDiscount function by passing in the totalBeforeDiscounts variable. Store the return of this function in a new variable labeled totalWithDiscounts.
// Sarah => "Your grand total is $37.5."

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

function sumOfrefills(pricePerRefill, refills) {
  return pricePerRefill * refills;
}

const totalBeforeDiscounts = sumOfrefills(pricePerRefill * refills);

function addDiscount(refillsDiscountTotal) {
  return totalBeforeDiscounts - totalBeforeDiscounts * 0.25;
}

const totalWithDiscounts = addDiscount(refillsDiscountTotal);

console.log(sarah[", your grand total is"] + totalWithDiscounts);

displayTotalWithDiscounts = Math.round(totalWithDiscounts);

console.log(displayTotalWithDiscounts);

// < -------------------------------  ROCKY -------------------------------- >
// your first assignment is to
// create the logic for their checkout system that
// *** returns the total cost of all refills including if the customer has a subscription and/or a coupon.

// The customer has a subscription,
// The customer will receive a 25% discount after the refill total has been calculated.

// The customer has a coupon,
// The customer will receive a $10 discount after the subscription discount has been calculated.

// const rocky = {
//     prescription: "phenylephrine",
//     pricePerRefill: 30,
//     refills: 5,
//     subscription: true,
//     coupon: true,
// }

// Rocky => "Your grand total is $102.5"