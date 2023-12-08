[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11755841&assignment_repo_type=AssignmentRepo)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

To begin, let's define our base case as a place to launch from:
T(n) = 3T(n/3)+1 if n > 2 or T(n) = 1 if n <= 2. (there's nothing to split into sub-arrays)

Assuming an array of sufficient size, we are making three recursive calls (3T) and dividing the problem space into one third of it's origianl size (n/3). The +1 accounts for the check to see if the base case has been reached.

Now, let's substitue and reduce where appropriate:

T(n) = 3T(n/3)+1  
     = 3(3T(n/9))+2  
     = 9T(n/9)+2  
     = 9(3T(n/27))+3  
     = 27T(n/27)+3  

A general pattern emerges which may be generalized as follows:

T(n) = $3^iT(n/3^i)+i$

Recognizing that $log_3(n)$ gives us the base case for T we get this:

T(n) = $3^{log_3(n)}T(n/3^{log_3(n)})+log_3(n)$  
     = $nT(1)+log_3(n)$  
     = $n+log_3(n) \in \theta(n)$  

Giving us a final time complexity of $\theta(n+log_3(n))$.
