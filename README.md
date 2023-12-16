# Calculator for elementary functions (and other stuff)
#### Video Demo:  <https://youtu.be/6SZ5ypZaHSM>
#### Description:
Elementary functions are foundational building blocks of technical STEM fields, including mathematics, physics, computer science and especially engineering.

This project runs on Javascript and aims to use mathematical tools that I've studied - primarily calculus - to approximate these functions, hence, I will be limiting usage of libraries and frameworks to only Bootstrap, a framework solely for making the site prettier.

In the middle of the site is a text box that takes inputs from the user and, if consistent with the provided syntax and list of supported functions, outputs the value of the function evaluated at the inputted argument(s). Functions that take complex arguments are indicated with z, real arguments with x/r/a/b and integer arguments with n/k.

More technically, here are the list of the implemented functions and the miscellaneous functions and/or mathematical tools used to evaluate them.
- Operations on complex numbers: Self-explanatory.

- Factorial, falling factorial: Self-explanatory.
- r Choose k: The falling factorial of r with k factors divided by k factorial.
- Exponential: Taylor series of e^z.
- Logarithmic: Express the natural logarithm in terms of a limit, then input arbitrarily low values to approximate that limit. The logarithm of other bases are computed using the identity log(a, b) = ln(b)/ln(a).

- Trigonometric: Taylor series.
- Inverse trigonometric: Express the function as an integral, expand the integrand as a series with the Generalized Binomial Theorem - which utilizes the rCk(r, k) function - and integrate that series.
- Hyperbolic trigonometric: Exponential.

Finally, here is a slightly more indepth look at how the program runs. Everytime a key press is released in the text box, it triggers the main() function, performing the following steps:
1. Read the text in the box.
2. Store the function name, input and, optionally, another input.
3. Read the input(s) and convert them into a complex number, which stores its real part, imaginary part, magnitude and its representation as a string.
4. Perform the evaluation based on the function and value(s), returning a complex number.
5. Print the output's representation as a string onscreen.
