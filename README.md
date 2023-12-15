# Calculator for elementary functions (and other stuff)
#### Video Demo:  <URL HERE>
#### Description:
Elementary functions are foundational building blocks of mathematics, physics, engineering, CS and other STEM fields.

This project runs on Javascript and aims to use mathematical tools that I've studied - primarily calculus - to approximate these functions, hence, I will be limiting usage of libraries and frameworks to only Bootstrap, a framework solely for making the site prettier.

In the middle of the site is a text box that takes inputs from the user and, if consistent with the syntax provided along with the list of supported functions, outputs the value of the function evaluated at the inputted argument. Functions that take complex arguments are indicated with z, real arguments with x/r/a/b and integer arguments with n/k.

More technically, here are the list of the implemented functions and the miscellaneous functions and/or mathematical tools used to evaluate them.
- Operations on complex numbers: Self-explanatory.

- Factorial: Self-explanatory.
- r Choose k: The falling factorial of r with k factors divided by k!.
- Exponential: Taylor series of e^z.
- Logarithmic: Express the natural logarithm in terms of a limit, then input arbitrarily low values to approximate that limit. The logarithm of other bases are computed using the identity log(a, b) = ln(b)/ln(a).

- Trigonometric ones: Taylor series.
- Inverse trigonometric: Express the function as an integral, expand the integrand as a series with the Generalized Binomial Theorem - which utilizes the rCk(r, k) function - and integrate that series.
- Hyperbolic trigonometric: Exponential.
