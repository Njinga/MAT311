<template>
    <div class="unit7">
        <section class="py-3 px-3 mx-4 grey-text" style="background-color:#fff3e0">
            <h3 class=" h3-responsive font-weight-bold"> 7. Iterative techniques for solving <span v-katex="'\\textbf{A}\\textbf{x}=\\textbf{b}'"></span></h3>
        </section>


        <section class="dark-grey-text mb-4 pt-3 px-3 mx-4">

            Consider solving linear systems of them form:
            <span v-katex="'\\textbf{A}\\textbf{x}=\\textbf{b}'"></span> where
            <span v-katex="'\\textbf{A}=\\left[ a_{ij}\\right] _{n\\times n},\\; \\textbf{x}=\\left[ x_{i}\\right] _{n\\times 1},\\;\\textbf{b}= \\left[ b_{i}\\right] _{n\\times 1}.'"></span> Assume that the system has a unique
            solution. Let <span v-katex="'\\textbf{x}^{\\ast }'"></span> be the solution. Then <span v-katex="'\\textbf{x}^{\\ast }=\\textbf{A}^{-1}\\textbf{b}.'"></span>


            <br />

            To solve <span v-katex="'\\textbf{A}\\textbf{x}=\\textbf{b}'"></span> by iteration one starts with an
            <i>initial approximation</i> <span v-katex="'{\\bf x^{(0)}}'"></span> to the solution <span v-katex="'{\\bf x}'"></span>
            and then generates a sequence <span v-katex="'{\\bf x}^{(k)}\\}_{k=1}^{\\infty}'"></span>
            converging to <span v-katex="'{\\bf x}'"></span>. The key is to transform the original system
            <span v-katex="'A {\\bf x} = {\\bf b}'"></span> into a form <span v-katex="'{\\bf x} = T {\\bf x} + {\\bf c}'"></span> and
            produce the sequence of iterates from the rule

            <div v-katex:display="'{\\bf x^{(k)}} = T {\\bf x^{(k-1)}} + {\\bf c}.'"></div>

            Just like in fixed point iteration. Iterations stop when the relative
            difference between two subsequent iterates

            <!--Equation 7.1-->
            <div class="table-responsive" style="width:100%;">

                <table class="table">
                    <thead>
                        <tr>

                            <th>
                                <div v-katex:display="'\\frac{ \\|{\\bf x^{(k+1)}} - {\\bf x^{(k)}}\\|_{\\infty}} {\\|{\\bf x^{(k+1)}}\\|_{\\infty}} \\leq TOL'"></div>
                            </th>
                            <th>
                                <div v-katex:display="'(7.1)'"></div>
                            </th>


                        </tr>
                    </thead>

                </table>
            </div>
            <!--./Equation 7.1-->
            where <span v-katex="'TOL'"></span> is pre-set tolerance level. Examples of iterative methods includes the Jacobi, Gauss-Seidel, Conjugate Gradient and many others.

            <!--Section 7.1-->
            <div class="my-3 py-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    7.1 Jacobi Method
                </h4>
                <hr class="blue mb-4 mt-0 ">

                In this section we look at two iterative techniques for solving the system

                <span v-katex="'\\textbf{A}\\textbf{x} = \\textbf{b}'"></span> which is a system of <span v-katex="'n'"></span> linear equations in <span v-katex="'n'"></span> variables given as


                <div v-katex:display="'\\begin{aligned} a_{11}x_1 + a_{12}x_2 + \\ldots + a_{1n}x_n \&= b_1\\\\ a_{21}x_1 + a_{22}x_2 + \\ldots + a_{2n}x_n \&= b_2\\\\ \\;\\;\\;\\;\\;\\;\\; \\vdots                      \&\\vdots   \\\\ a_{n1}x_1 + a_{n2}x_2 + \\ldots + a_{nn}x_n \&= b_n \\end{aligned}'"></div>

                We assume that the above system has a unique solution and that the coefficient matrix <span v-katex="'\\textbf{A}'"></span> has no zeros on its main diagonal. If any of the diagonal entries <span v-katex="'a_{11},a_{22},\\ldots,a_{nn}'"></span> are zero, then rows or columns must be interchanged to obtain a coefficient matrix that has nonzero entries on the main diagonal.

                <br />
                The Jacobi iteration method is defined below

                <!--Definition 7.1-->
                <div class="note note-definition my-3">
                    <span class="text-success"> Definition 7.1</span><br>
                    The <i>Jacobi iterative method</i> is obtained by solving the <span v-katex="'i'"></span>th equation <span v-katex="'\\textbf{A}\\textbf{x} = \\textbf{b}'"></span> for <span v-katex="'x_i'"></span> to obtain (provided <span v-katex="'a_{ii} \\neq 0'"></span>)

                    <div v-katex:display="'x_i = \\sum_{\\stackrel{j = 1}{j \\neq i}}^n \\left(-\\frac{a_{ij}x_j}{a_{ii}}\\right) + \\frac{b_i}{a_{ii}},\\;\\;\\;\\; \\text{for }\\;\\;\\; i = 1,2,\\ldots, n'"></div>

                    For each <span v-katex="'k \\geq 1'"></span>, generate the components <span v-katex="'x_i^{(k)}'"></span> of <span v-katex="'\\textbf{x}^{(k)}'"></span> from the components of <span v-katex="'\\textbf{x}^{(k-1)}'"></span> by



                    <div v-katex:display="'x_i^{(k)} = \\frac{1}{a_{ii}}\\left[\\sum_{\\stackrel{j = 1}{j \\neq i}}^n \\left(- a_{ij}x_j^{(k-1)}\\right) + b_i\\right],\\;\\;\\;\\; \\text{for }\\;\\;\\; i = 1,2,\\ldots, n'"></div>




                </div>
                <!--./Definition 7.1-->
                The procedure for the Jabobi method is as follows;

                <ol>
                    <li>
                        First solve the first equation for <span v-katex="'x_1'"></span>, second equation for <span v-katex="'x_2'"></span> and so on as follows:

                        <div v-katex:display="'\\begin{aligned}x_1  \&= \\frac{1}{a_{11}}(b_1 - a_{12}x_2 - a_{13}x_3 - \\cdots - a_{1n}x_n)\\\\ x_2  \&= \\frac{1}{a_{22}}(b_2 - a_{21}x_1 - a_{23}x_3 - \\cdots - a_{2n}x_n)\\\\      \& \\vdots \\\\ x_n  \&= \\frac{1}{a_{nn}}(b_n - a_{n1}x_1 - a_{n2}x_2 - \\cdots - a_{n,n-1}x_{n-1}) \\end{aligned} '"></div>

                    </li>
                    <li>
                        Given an initial guess, denoted by <span v-katex="'x_1^{(0)}, x_2^{(0)},\\ldots,x_n^{(0)}'"></span>, develop the Jacobi iteration scheme for <span v-katex="'k = 1,2,\\ldots,'"></span> as  follows:

                        <div v-katex:display="'\\begin{aligned} _1^{(k)}  \&= \\frac{1}{a_{11}}\\left(b_1 - a_{12}x_2^{(k-1)} - a_{13}x_3^{(k-1)} - \\cdots - a_{1n}x_n^{(k-1)}\\right)\\\\ _2^{(k)}  \&= \\frac{1}{a_{22}}\\left(b_2 - a_{21}x_1^{(k-1)} - a_{23}x_3^{(k-1)} - \\cdots - a_{2n}x_n^{(k-1)}\\right)\\\\      \& \\vdots \\\\ x_n^{(k)}  \&= \\frac{1}{a_{nn}}\\left(b_n - a_{n1}x_1^{(k-1)} - a_{n2}x_2^{(k-1)} - \\cdots - a_{n,n-1}x_{n-1}^{(k-1)}\\right) \\end{aligned}'"></div>
                    </li>
                    <li>
                        The <i>first approximation (iteration)</i> of the solution, <span v-katex="'(x_1^{(1)},x_2^{(1)},\\ldots,x_n^{(1)})'"></span> is obtained by  substituting the initial guess <span v-katex="'(x_1^{(0)},x_2^{(0)},\\ldots,x_n^{(0)})'"></span> into the right hand side of the re-written equations. After this procedure has been completed, we say that one iteration has been performed.
                    </li>
                    <li>
                        In the same way, the second approximation is formed by substituting  the first approximation's <span v-katex="'x'"></span>-values into the right hand side of the re-written equations. By repeated iterations, you will form a sequence of approximations that often converges to the actual solution.
                    </li>
                </ol>

                <!--Example 7.1-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    Example 7.1   <span class="font-weight-bold"> Applying the Jacobi Method</span>

                    Use the Jacobi Method to approximate the solution of the following system of linear equations

                    <div v-katex:display="'\\begin{aligned} 5x_1 - 2x_2 + 3x_3 \&= -1\\\\ -3x_1 + 9x_2 + x_3 \&= 2\\\\ 2x_1  - x_2 - 7x_3 \&= 3 \\end{aligned}'"></div>


                    Compute the iterations until two successive approximations are identical when rounded to three significant digits. <i>This is called the stopping criteria.</i> <br />

                    We begin by writing the system in the form

                    <div v-katex:display="'\\begin{aligned} x_1\& = -\\frac{1}{5} + \\frac{2}{5}x_2 - \\frac{3}{5}x_3\\\\ x_2\&= \\frac{2}{9} + \\frac{3}{9}x_1  - \\frac{1}{9}x_3\\\\ x_3\&=-\\frac{3}{7} + \\frac{2}{7}x_1 - \\frac{1}{7}x_2 \\end{aligned}'"></div>

                    Thus, the Jacobi iteration scheme is


                    <div v-katex:display="'\\begin{aligned} x_1^{(1)}\& = -\\frac{1}{5} + \\frac{2}{5}x_2^{(0)} - \\frac{3}{5}x_3^{(0)}\\\\ x_2^{(1)}\&= \\frac{2}{9} + \\frac{3}{9}x_1^{(0)}  - \\frac{1}{9}x_3^{(0)}\\\\ x_3^{(1)}\&=-\\frac{3}{7} + \\frac{2}{7}x_1^{(0)} - \\frac{1}{7}x_2^{(0)} \\end{aligned}'"></div>

                    If the initial approximation is not given, use

                    <div v-katex:display="'x_1^{(0)} = 0,\\;\\;\\;\\; x_2^{(0)} = 0,\\;\\;\\;\\;\\;x_3^{(0)} = 0 '"></div>

                    as a convenient initial approximation. So the first approximation is

                    <div v-katex:display="'\\begin{aligned} x_1^{(1)}\& = -\\frac{1}{5} + \\frac{2}{5}(0) - \\frac{3}{5}(0) \\approx -0.200\\\\ x_2^{(1)}\&= \\frac{2}{9} + \\frac{3}{9}(0)  - \\frac{1}{9}(0) \\approx 0.222\\\\ x_3^{(0)}\&=-\\frac{3}{7} + \\frac{2}{7}(0) - \\frac{1}{7}(0) \\approx -0.429 \\end{aligned}'"></div>

                    Continuing this procedure, you obtain the sequence of approximations shown in Table 7.1

                    <div v-katex:display="'\\begin{array}{|c|c|c|c|}\\hline n \&     x_1 \&       x_2   \&      x_3 \\\\ \\hline          0&	      0.000	&      0.000	&      0.000\\\\         1\&	     -0.200	\&      0.222	\&     -0.429\\\\         2\&	      0.146	\&      0.203	\&     -0.517\\\\         3\&	      0.192	\&      0.328	\&     -0.416\\\\         4\&	      0.181	\&      0.332	\&     -0.421\\\\         5\&	      0.185	\&      0.329	\&     -0.424\\\\         6\&	      0.186	\&      0.331	\&     -0.423\\\\         7\&	      0.186	\&      0.331	\&     -0.423 \\\\ \\hline  \\end{array}'"></div>

                    <div class="mt-0">
                        <div class="mt-0" v-katex:display="'\\textrm{ Table 7.1}'"></div>
                    </div>

                    Because the last two columns in Table 7.1 are identical, you can conclude that to three significant
                    digits the solution is

                    <div v-katex:display="'x_1 = 0.186,\\;\\;\\;\\;\\;\\; x_2 = 0.331,\\;\\;\\;\\;\\;\\;x_3 = -0.423'"></div>


                </div>
                <!--.Example/ 7.1-->
                The following MATLAB code can be used to generate the results displayed in Table 7.1.
                <div class="font-italic my-3">
                    clear all<br />
                    clc <br />
                    % MATLAB code for Jacobi method solution of the system <br />
                    %     5*x1 - 2*x2 + 3*x3 =  -1; <br />
                    %    -3*x1 + 9*x2 +   x3 =   2; <br />
                    %     2*x1 -  x2  - 7*x3 =   3;<br />
                    %Put inititial conditions<br />
                    x1(1) = 0; x2(1) = 0; x3(1) = 0;<br />
                    N = 100;  % N is the maximum number of iterations<br />
                    n = 1;  % n is a counte to keep track of iterations<br />
                    TOL = 0.0001; %Tolerance level (required accuracy)<br />
                    while n &lt; N

                    <div class="ml-4">
                        x1(n+1) = -1/5 + (2/5)*x2(n) - (3/5)*x3(n);<br />
                        x2(n+1) =  2/9 + (3/9)*x1(n) - (1/9)*x3(n);<br />
                        x3(n+1) = -3/7 + (2/7)*x1(n) - (1/7)*x2(n);
                    </div>

                    %Add stopping criteria<br />
                    dx1 = abs(x1(n+1)-x1(n)); %difference between two successive solns of x1<br />
                    dx2 = abs(x2(n+1)-x2(n)); %difference between two successive solns of x2<br />
                    dx3 = abs(x3(n+1)-x3(n)); %difference between two successive solns of x3<br /><br />

                    <div class="ml-2">
                        if  (dx1  &lt; TOL) & (dx2  &lt; TOL) & (dx3 &lt; TOL)
                        <div class="ml-3">

                            break
                        </div>
                        end<br />
                        n = n + 1; %update the iteration counter
                    </div>

                    end <br />
                    %Print the results of the first 8 iterations <br />
                    for i = 1:8 <br />
                    fprintf('%10.0f\t %10.3f\t %10.3f\t %10.3f\n',i-1,x1(i),x2(i),x3(i)); <br />
                    end
                </div>
            </div>
            <!--Section 7.1-->
            <!--Section 7.2-->
            <div class="mb-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    7.2 The Gauss-Seidel Method
                </h4>
                <hr class="blue mb-4 mt-0 ">

                In this section we discuss a modification of the Jacobi method called the
                <deep>Gauss-Seidel method</deep>. This modification requires fewer iterations
                to reach the same accuracy as the Jacobi method. With the Jacobi method, the
                values of <span v-katex="'x_i'"></span> obtained  in the <span v-katex="'n'"></span>th approximation remain unchanged until
                the entire <span v-katex="'(n+1)'"></span>th approximation has been calculated. With the Gauss-Seidel
                method, on the other hand, the new values of <span v-katex="'x_i'"></span> are used immediately as
                soon as they are known. That is, once you have determined <span v-katex="'x_1'"></span> from
                the first equation, it's value is then used in the second equation to obtain the new <span v-katex="'x_2'"></span>. Similarly,
                the new <span v-katex="'x_1'"></span> and <span v-katex="'x_2'"></span> are used in the third equation to obtain the new <span v-katex="'x_3'"></span>, as so on.


                <!--Example 7.2-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    Example 7.2  <span class="font-weight-bold"> Applying the Gauss-Seidel Method</span>

                    Use the Gauss-Seidel Method to approximate the solution of the following system of linear equations


                    <div v-katex:display="'\\begin{aligned} 5x_1 - 2x_2 + 3x_3 \&= -1\\\\ -3x_1 + 9x_2 + x_3 \&= 2\\\\ 2x_1  - x_2 - 7x_3 \&= 3 \\end{aligned}'"></div>

                    Compute the iterations until two successive approximations are identical when rounded to three significant digits. <br />

                    We begin by writing the system in the form

                    <div v-katex:display="'\\begin{aligned}x_1\& =  \\frac{2}{5}x_2 - \\frac{3}{5}x_3 -\\frac{1}{5} \\\\ x_2\&= \\frac{3}{9}x_1  - \\frac{1}{9}x_3 + \\frac{2}{9} \\\\ x_3\&=\\frac{2}{7}x_1 - \\frac{1}{7}x_2 -\\frac{3}{7} \\end{aligned}'"></div>

                    Thus for the Gauss-Seidel method we write the system, for each <span v-katex="'k = 1,2,\\ldots'"></span> as

                    <div v-katex:display="'\\begin{aligned} x_1^{(k)}\& =  \\frac{2}{5}x_2^{(k-1)} - \\frac{3}{5}x_3^{(k-1)} -\\frac{1}{5} \\\\ x_2^{(k)}\&= \\frac{3}{9}x_1^{(k)}  - \\frac{1}{9}x_3^{(k-1)} + \\frac{2}{9} \\\\ x_3^{(k)}\&=\\frac{2}{7}x_1^{(k)} - \\frac{1}{7}x_2^{(k)} -\\frac{3}{7} \\end{aligned}'"></div>

                    We use <span v-katex="'x_1 = 0,\\;\\;\\;\\; x_2 = 0,\\;\\;\\;\\;\\;x_3 = 0 '"></span> as initial approximation.
                    So the first approximation is

                    <div v-katex:display="'\\begin{aligned} x_1\& =\\frac{2}{5}(0) - \\frac{3}{5}(0)  -\\frac{1}{5}  \\approx -0.200\\\\ x_2\&=  \\frac{3}{9}(-0.200)  - \\frac{1}{9}(0) + \\frac{2}{9} \\approx 0.156\\\\ x_3\&= \\frac{2}{7}(-0.200) - \\frac{1}{7}(0.156)   -\\frac{3}{7} \\approx -0.508 \\end{aligned}'"></div>
                    Continuing this procedure, you obtain the sequence of approximations shown in Table 7.2


                    <div v-katex:display="'\\begin{array}{|c|c|c|c|}\\hline        n\&     x_1 \&       x_2   \&      x_3 \\\\ \\hline         0	\&      0.000 \&	      0.000	\&      0.000 \\\\         1	\&     -0.200 \&	      0.156	\&     -0.508 \\\\         2	\&      0.167 \&	      0.334	\&     -0.429 \\\\         3	\&      0.191 \&	      0.333	\&     -0.422 \\\\         4	\&      0.186 \&	      0.331	\&     -0.423 \\\\         5	\&      0.186 \&	      0.331	\&     -0.423\\\\ \\hline \\end{array}'"></div>

                    <div class="mt-0">
                        <div class="mt-0" v-katex:display="'\\textrm{ Table 7.2}'"></div>


                    </div>

                    We note that the solution that was reached using 7 iterations when the Jacobi Method was used is obtained using
                    5 iterations of the Gauss-Seidel method.

                    <br /><br />

                    The following MATLAB code can be used to generate the results displayed in Table 7.2

                    <div class="font-italic my-3">
                        clear all<br />
                        clc <br />
                        % MATLAB code for Gauss-Seidel method solution of the system <br />
                        %     5*x1 - 2*x2 + 3*x3 =  -1; <br />
                        %    -3*x1 + 9*x2 +   x3 =   2; <br />
                        %     2*x1 -  x2  - 7*x3 =   3;<br />
                        %Put inititial conditions<br />
                        x1(1) = 0; x2(1) = 0; x3(1) = 0;<br />
                        N = 100;  % N is the maximum number of iterations<br />
                        n = 1;  % n is a counte to keep track of iterations<br />
                        TOL = 0.0001; %Tolerance level (required accuracy)<br />
                        while n &lt; N

                        <div class="ml-4">
                            x1(n+1) = -1/5 + (2/5)*x2(n) - (3/5)*x3(n);<br />
                            x2(n+1) =  2/9 + (3/9)*x1(n+1) - (1/9)*x3(n);<br />
                            x3(n+1) = -3/7 + (2/7)*x1(n+1) - (1/7)*x2(n+1)
                        </div>


                        %Add stopping criteria<br />
                        dx1 = abs(x1(n+1)-x1(n)); %difference between two successive solns of x1<br />
                        dx2 = abs(x2(n+1)-x2(n)); %difference between two successive solns of x2<br />
                        dx3 = abs(x3(n+1)-x3(n)); %difference between two successive solns of x3<br /><br />

                        <div class="ml-2">

                            if  ((dx1  &lt; TOL) & (dx2  &lt; TOL)) & (dx3 &lt; TOL)

                            <div class="ml-3">

                                break
                            </div>
                            end<br />
                            n = n + 1; %update the iteration counter
                        </div>

                        end <br />
                        %Print the results of the first 8 iterations <br />
                        for i = 1:n <br />
                        fprintf('%10.0f\t %10.3f\t %10.3f\t %10.3f\n',i-1,x1(i),x2(i),x3(i)); <br />
                        end
                    </div>

                </div>
                <!--./example 7.2-->
                The following is a formal definition of the Gauss-Seidel Method.

                <!--Definition 7.2-->
                <div class="note note-definition">
                    <span class="text-success"> Definition 7.2</span><br>
                    <span class="font-weight-bold">Gauss-Seidel method</span>

                    The Gauss-Seidel iterative method uses components of the vector iterates as soon as they are computed, i.e the components <span v-katex="'\\textbf{x}^{(k-1)}'"></span> are used to compute all the components <span v-katex="'x_i{(k)}'"></span> of <span v-katex="'\\textbf{x}^{(k)}'"></span>


                    <!--Equation 7.2-->
                    <div class="table-responsive" style="width:100%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <div v-katex:display="'x_{i}^{(k)} = \\frac{1}{a_{ii}}\\left[ - \\sum_{j=1}^{i-1} (a_{ij} x_{j}^{(k)}) -         \\sum_{j=i+1}^{n} (a_{ij} x_{j}^{(k-1)}) + b_{i} \\right]'"></div>
                                    </th>
                                    <th>
                                        <div v-katex:display="'(7.2)'"></div>
                                    </th>


                                </tr>
                            </thead>

                        </table>
                    </div>
                    <!--./Equation 7.2-->
                    for each <span v-katex="'i = 1,2,\\ldots,n'"></span>.

                </div>
                <!--./Definition 7.2-->
            </div>
            <!--./Section 7.2-->
            <!--Section 7.3-->
            <div class="mb-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    7.3 Divergence and conditions for convergence
                </h4>
                <hr class="blue mb-4 mt-0 ">

                The iterative methods presented in this section do not always converge.
                That is, it is possible to apply the Jacobi method or the Gauss-Seidel
                method to a system of linear equations and obtain a divergent sequence
                of approximations. In such cases, it is said that the method <span class="font-weight-bold">diverges.</span>


                <!--Example 7.3-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    Example 7.3  <span class="font-weight-bold"> An example of divergence</span>

                    Use five (5) iterations of both the Jacobi and Gauss-Seidel method to solve the system

                    <div v-katex:display="'\\begin{aligned}x_1 - 5x_2 \&= -4\\\\ 7x_1 - x_2 \&= 6 \\end{aligned}'"></div>

                    using the initial approximation <span v-katex="'(x_1,x_2) = (0,0)'"></span>, and show that both methods diverge.<br />

                    The Jabobi iteration scheme is given by

                    <div v-katex:display="'\\begin{aligned}  x_1^{(k)}  \&= 5x_2^{(k-1)} - 4 \\\\  x_2^{(k)}  \&= 7x_1^{(k-1)} - 6 \\end{aligned}'"></div>

                    The Gauss-Seidel iteration scheme is given by

                    <div v-katex:display="'\\begin{aligned} x_1^{(k)}  \&= 5x_2^{(k-1)} - 4 \\\\  x_2^{(k)}  \&= 7x_1^{(k)} - 6 \\end{aligned}'"></div>


                    Running the above iterations  schemes over 5 iterations gives the following results

                    <div class="container">

                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'\\begin{array}{|c|c|c|}    \\hline    n\&     x_1 \&       x_2    \\\\ \\hline        0\&	          0\&	          0\\\\        1\&	         -4\&	         -6\\\\        2\&	        -34\&	        -34\\\\        3\&	       -174\&	       -244\\\\        4\&	      -1224\&	      -1224\\\\        5\&	      -6124\&	      -8574\\\\ \\hline  \\end{array}'"></div>

                                <div class="mt-0">
                                    <div class="mt-0" v-katex:display="'\\textrm{ Table 7.3: Jacobi iteration solution}'"></div>


                                </div>

                            </div>

                            <div class="col">
                                <div v-katex:display="'\\begin{array}{|c|c|c|} \\hline          n\&     x_1 \&       x_2    \\\\ \\hline         0\&	          0\&	          0\\\\        1\&	         -4\&	        -34\\\\         2\&	       -174\&	      -1224\\\\         3\&	      -6124\&	     -42874\\\\        4\&	    -214374\&	   -1500624\\\\        5\&	   -7503124\&	  -52521874\\\\  \\hline \\end{array}'"></div>

                                <div class="mt-0">
                                    <div class="mt-0" v-katex:display="'\\textrm{ Table 7.4: Gauss-Seidel solution}'"></div>


                                </div>

                            </div>
                        </div>

                    </div>

                    The true solution for the system is <span v-katex="'x_1 = 1'"></span> and <span v-katex="'x_2 = 1'"></span>. But from  Tables (7.3) and (7.4) we see that both  methods give solutions which become progressively worse with an increase
                    in the number of iterations (i.e the solution diverges). For this particular example, using the Gauss-Seidel
                    doesn't improve the speed of convergence. Instead, the Gauss-Seidel diverges more rapidly. We conclude that with
                    the initial approximation <span v-katex="'x_1=0'"></span> and <span v-katex="'x_2=0'"></span>, neither the Jacobi not the Gauss-Seidel method converges to the solution.<br /><br>


                    The MATLAB codes used to generate the results in Tables   (7.3) and (7.4) are given below


                    <div class="font-italic my-3">
                        clear all<br />

                        clc<br />
                        % MATLAB code for Jacobi method solution of diverging system<br />
                        %      x1 - 5*x2 =  -4;<br />
                        %    7*x1 - x2   =   6;<br />
                        %Put inititial conditions<br />
                        x1(1) = 0; x2(1) = 0;<br />
                        for n = 1:5  % 5 iterations

                        <div class="ml-4">
                            x1(n+1) =   5*x2(n) - 4;<br />
                            x2(n+1) =  7*x1(n) - 6;
                        </div>


                        end <br />
                        %Print the results of the first 8 iterations<br />
                        for i = 1:n+1<br />
                        fprintf('%10.0f\t %10.0f\t %10.0f\n',i-1,x1(i),x2(i));<br />
                        end



                    </div>


                    <div class="font-italic my-3">
                        clear all<br />
                        clc <br />
                        % MATLAB code for Gauss-Seidel method solution of diverging system <br />
                        %      x1 - 5*x2 =  -4; <br />
                        %    7*x1 - x2   =   6; <br />
                        %Put inititial conditions<br />
                        x1(1) = 0; x2(1) = 0; <br />
                        for n = 1:5  % 5 iterations

                        <div class="ml-4">
                            x1(n+1) =   5*x2(n) - 4; <br />
                            x2(n+1) =  7*x1(n+1) - 6;
                        </div>


                        end
                        %Print the results of the first 8 iterations <br />
                        for i = 1:n+1 <br />
                        fprintf('%10.0f\t %10.0f\t %10.0f\n',i-1,x1(i),x2(i)); <br />
                        end


                    </div>

                </div>
                <!--./Example 7.3-->
                In the remaining part of this section we will discuss manipulation
                techniques that we can use on the coefficient matrix <span v-katex="'A'"></span> to guarantee
                convergence of the iterations schemes. We begin by defining a special
                type of coefficient matrix  <span v-katex="'A'"></span>, called a <span class="font-weight-bold">strictly diagonally dominant matrix</span>,
                for which it is guaranteed that both methods will converge.

                <!--Defition 7.3-->
                <div class="note note-definition my-3">
                    <span class="text-success"> Definition 7.3</span><br>
                    A  <span v-katex="'n \\times n'"></span> matrix  <span v-katex="'A'"></span> is <span class="font-weight-bold">strictly diagonally dominant</span> if
                    the absolute value of each entry on the main diagonal is greater than
                    the sum of the absolute values of the other entries in the same row.
                    That is,

                    <div v-katex:display="'\\begin{aligned}|a_{11}| \&\> |a_{12}|  + |a_{13}|  + \\cdots + |a_{1n}| \\\\ |a_{22}| \&\> |a_{21}|  + |a_{23}|  + \\cdots + |a_{2n}| \\\\         \& \\vdots \&\\\\|a_{nn}| \&\> |a_{n1}|  + |a_{n2}|  + \\cdots + |a_{n,n-1}| \\\\ \\end{aligned}'"></div>



                </div>

                <!--./Definition 7.3-->
                <!--Theorem 7.1-->
                <div class="theorem my-3 p-3 ">
                    <theorem-color>Theorem 7.1</theorem-color> <i>Convergence of the Jacobi and Gauss-Seidel Methods.</i>


                    If <span v-katex="'A'"></span> is strictly diagonally dominant, then the system of linear equations given
                    by <span v-katex="'A\\textbf{x}=\\textbf{b}'"></span> has a unique solution to which the Jacobi method and
                    the Gauss-Seidel method will converge for any initial approximation.

                </div>
                <!--./Theorem 7.1-->
                A matrix can be converted to a strictly diagonal form by <span class="font-weight-bold">interchanging rows</span> to obtain convergence.

                <!--Example 7.4-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    Example 7.4  <span class="font-weight-bold"> Improving convergence by interchanging rows</span>

                    Interchange the rows of the following system

                    <div v-katex:display="'\\begin{aligned} x_1 - 5x_2 \&= -4\\\\ 7x_1 - x_2 \&= 6 \\end{aligned}'"></div>

                    to obtain one with a strictly diagonal dominant matrix then use seven (7) iterations of both the Jacobi and Gauss-Seidel method to solve the system using the initial approximation <span v-katex="'(x_1,x_2) = (0,0)'"></span>.<br />
                    By interchanging the rows of the given system we obtain


                    <div v-katex:display="'\\begin{aligned} 7x_1 - x_2 \&= 6 \\\\  x_1 - 5x_2 \&= -4 \\end{aligned}'"></div>

                    Note that the coefficient matrix of the resulting system is strictly diagonally dominant.
                    The Jacobi iteration scheme becomes


                    <div v-katex:display="'\\begin{aligned}  x_1^{(k)}  \&= \\frac{1}{7}x_2^{(k-1)} + \\frac{6}{7} \\\\  x_2^{(k)}  \&= \\frac{1}{5}x_1^{(k-1)} + \\frac{4}{5} \\end{aligned}'"></div>

                    The Gauss-Seidel iteration scheme is given by

                    <div v-katex:display="'\\begin{aligned}  x_1^{(k)}  \&= \\frac{1}{7}x_2^{(k-1)} + \\frac{6}{7} \\\\  x_2^{(k)}  \&= \\frac{1}{5}x_1^{(k)} + \\frac{4}{5} \\end{aligned}'"></div>


                    Running the above iterations  schemes over 7 iterations gives the following results

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'\\begin{array}{|c|c|c|}\\hline         n\&     x_1\&       x_2    \\\\ \\hline         0\&	     0.0000	\&     0.0000 \\\\         1\&	     0.8571	\&     0.8000 \\\\         2\&	     0.9714	\&     0.9714\\\\         3\&	     0.9959	\&     0.9943\\\\         4\&	     0.9992	\&     0.9992\\\\         5\&	     0.9999	\&     0.9998\\\\         6\&	     1.0000	\&     1.0000\\\\        7\&	     1.0000	\&     1.0000\\\\ \\hline \\end{array}'"></div>

                                <div class="mt-0">
                                    <div class="mt-0" v-katex:display="'\\textrm{ Table 7.5: Jacobi iteration solution}'"></div>


                                </div>

                            </div>
                            <div class="col">
                                <div v-katex:display="'\\begin{array}{|c|c|c|}    \\hline    n \&     x_1 \&       x_2    \\\\ \\hline         0	\&     0.0000	\&     0.0000\\\\        1	\&     0.8571	\&     0.9714\\\\        2	\&     0.9959	\&     0.9992\\\\        3	\&     0.9999	\&     1.0000\\\\         4	\&     1.0000	\&     1.0000\\\\         5	\&     1.0000	\&     1.0000\\\\         6	\&     1.0000	\&     1.0000\\\\         7	\&     1.0000	\&     1.0000\\\\     \\hline \\end{array}'"></div>


                                <div class="mt-0">
                                    <div class="mt-0" v-katex:display="'\\textrm{ Table 7.6: Gauss-Seidel solution}'"></div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!--./Example 7.4-->
                <!--Example 7.5-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 7.5</span>

                    Derive the Jacobi iteration scheme for the following linear system
                    and use ten (10) iterations to approximate the solution

                    <div v-katex:display="'\\begin{array}{ccccccc} x_1 \&+\& 6 x_2 \&-\& 3 x_3 \&=\& -16\\\\ 7 x_1 \&+\& x_2 \&-\& x_3 \&=\& 10\\\\ - 3 x_1 \&+\& 2 x_2 \&-\& 10 x_3 \&=\& -30 \\end{array}'"></div>

                    <span class="font-weight-bold">Solution</span>
                    We observe that the linear system is <span class="font-weight-bold">
                        not
                    </span> diagonally dominant. Thus, before applying the iteration method, we rearrange the
                    equations as follows

                    <div v-katex:display="'\\begin{array}{ccccccc} 7 x_1 \&+\& x_2 \&-\& x_3 \&=\& 10\\\\ x_1 \&+\& 6 x_2 \&-\& 3 x_3 \&=\& -16\\\\ - 3 x_1 \&+\& 2 x_2 \&-\& 10 x_3 \&=\& -30 \\end{array}'"></div>

                    Making <span v-katex="'x_1'"></span> , <span v-katex="'x_2'"></span> and <span v-katex="'x_3'"></span>, in turn, the subject in each equation gives

                    <div v-katex:display="'\\begin{aligned} x_1 \&= \\frac{10}{7} - \\frac{x_2}{7} + \\frac{x_3}{7}\\\\ x_2 \&= - \\frac{8}{3}- \\frac{x_1}{6} + \\frac{x_3}{2}\\\\ x_3 \&= 3 - \\frac{3x_1}{10} + \\frac{x_2}{5} \\end{aligned}'"></div>

                    Thus, the Jacobi iteration scheme is given by

                    <div v-katex:display="'\\begin{aligned} x_1^{(k)} \&= \\frac{10}{7} - \\frac{1}{7}x_{2}^{(k-1)} + \\frac{1}{7}x_3^{(k-1)}\\\\ x_2^{(k)} \&= - \\frac{8}{3}- \\frac{1}{6}x_1^{(k-1)} + \\frac{1}{2}x_3^{(k-1)}\\\\ x_3^{(k)} \&= 3 - \\frac{3}{10}x_1^{(k-1)} + \\frac{1}{5}x_2^{(k-1)} \\end{aligned}'"></div>

                    The results for the first ten iterations are given in the table below


                    <div class="col">
                        <div v-katex:display="'\\begin{array}{|c|c|c|c|}    \\hline    iter.\& x_1 \& x_2 \& x_3\\\\ \\hline0 \& 0 \& 0 \& 0 \\\\ 1 \& 1.4286\& -2.6667\& 3.0000\\\\  2 \& 2.2381\& -1.4048\& 2.0381\\\\ 3 \& 1.9204\& -2.0206\& 2.0476\\\\ 4 \& 2.0098\& -1.9629\& 2.0198\\\\ 5 \& 1.9975\& -1.9917\& 2.0045\\\\ 6 \& 1.9995\& -1.9973\& 2.0024\\\\ 7 \& 2.0000\& -1.9987\& 2.0007\\\\ 8 \& 1.9999\& -1.9996\& 2.0003\\\\ 9 \& 2.0000\& -1.9999\& 2.0001\\\\ 10\& 2.0000\& -2.0000\& 2.0000\\\\  \\hline \\end{array}'"></div>


                        <div class="mt-0">
                            <div class="mt-0" v-katex:display="'\\textrm{ Table 7.7: Jacobi iteration for Example 7.5}'"></div>


                        </div>
                    </div>


                </div>
                <!--./Example 7.5-->
                <!--Example 7.6-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 7.6</span>

                    Derive the Gauss-Siedel iteration scheme for the following linear system and use ten (10) iterations to approximate the solution

                    <div v-katex:display="'\\begin{array}{ccccccc} x_1 \&+\& 6 x_2 \&-\& 3 x_3 \&=\& -16\\\\ 7 x_1 \&+\& x_2 \&-\& x_3 \&=\& 10\\\\ - 3 x_1 \&+\& 2 x_2 \&-\& 10 x_3 \&=\& -30 \\end{array}'"></div>

                    <span class="font-weight-bold">Solution</span>
                    We observe that the linear system is <span class="font-weight-bold">
                        not
                    </span> diagonally dominant. Thus, before applying the iteration method, we rearrange the
                    equations as follows

                    <div v-katex:display="'\\begin{array}{ccccccc} 7 x_1 \&+\& x_2 \&-\& x_3 \&=\& 10\\\\ x_1 \&+\& 6 x_2 \&-\& 3 x_3 \&=\& -16\\\\ - 3 x_1 \&+\& 2 x_2 \&-\& 10 x_3 \&=\& -30 \\end{array}'"></div>


                    Making <span v-katex="'x_1'"></span> , <span v-katex="'x_2'"></span> and <span v-katex="'x_3'"></span>, in turn, the subject in each equation gives

                    <div v-katex:display="'\\begin{aligned}x_1 \&= \\frac{10}{7} - \\frac{x_2}{7} + \\frac{x_3}{7}\\\\ x_2 \&= - \\frac{8}{3}- \\frac{x_1}{6} + \\frac{x_3}{2}\\\\ x_3 \&= 3 - \\frac{3x_1}{10} + \\frac{x_2}{5} \\end{aligned}'"></div>

                    Thus, the Jacobi iteration scheme is given by

                    <div v-katex:display="'\\begin{aligned} x_1^{(k)} \&= \\frac{10}{7} - \\frac{1}{7}x_{2}^{(k-1)} + \\frac{1}{7}x_3^{(k-1)}\\\\ x_2^{(k)} \&= - \\frac{8}{3}- \\frac{1}{6}x_1^{(k)} + \\frac{1}{2}x_3^{(k-1)}\\\\ x_3^{(k)} \&= 3 - \\frac{3}{10}x_1^{(k)} + \\frac{1}{5}x_2^{(k)} \\end{aligned}'"></div>

                    The results for the first ten iterations are given in the table below
                    <div class="col">
                        <div v-katex:display="'\\begin{array}{|c|c|c|c|}    \\hline  iter.\& x_1 \& x_2 \& x_3\\\\ \\hline 0 \& 0 \& 0 & 0 \\\\ 1 \&1.4286\& -2.9048\& 1.9905\\\\ 2 \&2.1279\& -2.0261\& 1.9564\\\\ 3 \&1.9975\& -2.0214\& 1.9965\\\\ 4 \&2.0025\& -2.0022\& 1.9988\\\\ 5 \&2.0001\& -2.0006\& 1.9998\\\\ 6 \&2.0001\& -2.0001\& 2.0000\\\\ 7 \&2.0000\& -2.0000\& 2.0000\\\\ 8 \&2.0000\& -2.0000\& 2.0000\\\\ 9 \&2.0000\& -2.0000\& 2.0000\\\\ 10\&2.0000\& -2.0000\& 2.0000\\\\   \\hline \\end{array}'"></div>


                        <div class="mt-0">
                            <div class="mt-0" v-katex:display="'\\textrm{ Table 7.8: Gauss-Siedel iteration for Example 7.6}'"></div>


                        </div>
                    </div>
                    We observe that the Gauss-Siedel converges much faster than the Jacobi method for the solution of this example.


                </div>
                <!--./Example 7.6-->
                <!--Exercise 7.1-->
                <div class="my-4 p-3" style="background-color:#fff3e0">
                    <h6 class="h4-responsive">
                        Exercise 7.1  <deep>Jacobi and Gauss-Siedel iteration</deep>
                    </h6>

                    <ol>
                        <li>
                            Derive the Jacobi iteration scheme for the following linear system
                            and use ten iterations to approximate the solutions
                            <div v-katex:display="'\\begin{array}{ccccccc} - 9 x_1 \&-\& 3 x_2 \&+\& 3 x_3 \&=\& 12\\\\ 7 x_1 \&-\& 10 x_2 \&-\& x_3 \&=\& -38\\\\ - 4 x_1 \&-\& x_2 \&+\& 6 x_3 \&=\& -8\\\\ \\end{array}'"></div>
                            
                        </li>


                        <li>

                            Derive the Gauss-Siedel iteration scheme for the following linear system
                            and use eight (6) iterations to approximate the solution

                            <div v-katex:display="'\\begin{array}{ccccccc} - 8 x_1 \&-\& 3 x_2 \&+\& x_3 \&=\& -24\\\\ x_1 \&+\& 3 x_2 \&+\& 10 x_3 \&=\& -12\\\\ 2 x_1 \&+\& 9 x_2 \&-\& 3 x_3 \&=\& 28\\\\ \\end{array}'"></div>
                            
                            <ol style="list-style:lower-latin">
                                <li>
                                    Would the Jacobi method converge in applied directly to solve the following linear system?
                                   
                                    <div v-katex:display="'\\begin{aligned} 4x_1 - x_2 + 2x_3 \&= -1\\\\ 6x_1 + 4x_2 + 3x_3 \&= 2\\\\ x_1 + x_2 - 3x_3 \&= 5 \\end{aligned}'"></div>
                                </li> 

                                <li>
                                    How can the system be rearranged to a form that would converge when solved using the Jacobi or Gauss Siedel method?
                                </li>
                            </ol>
                         
                        </li>
                        <li>

                            The linear system


                            <div v-katex:display="'\\begin{aligned} 10x_1 + x_2 + x_3 = 12, x_1 + 10x_2 + x_3 = 12, x_1 + x_2 + 10x_3 = 12 \\end{aligned}'"></div>

                            has the unique solution <span v-katex="'x_1 = x_2 = x_3 = 1'"></span>.<br />


                            Starting from the initial guess  <span v-katex="'x_1^{(0)} = x_2^{(0)} = x_3^{(0)} = 0'"></span>

<ol style="list-style:lower-latin">
    <li> Perform three iterations of the Jacobi Method and compute the error at each iteration level.</li>
    <li> Perform three iterations of the Jacobi Method and compute the error at each iteration level.</li>
</ol>
                        </li>


                        <li>

                            Let
                            <div v-katex:display="'A = \\begin{bmatrix} 3\&1\&1\\\\ 2\&4\& -1\\\\ -1\&1\&3 \\end{bmatrix}\\;\\;\\; \\textrm{ and } \\;\\;\\;  b = \\begin{bmatrix} 2\\\\-2\\\\-5 \\end{bmatrix}'"></div>
                            <ol style="list-style:lower-latin">
                                <li>
                                    Will both Jacobi and Gauss-Seidel iterations converge for the problem <span v-katex="'Ax = b'"></span>
                                </li>
                                <li>
                                    Solve <span v-katex="'Ax = b'"></span> by Jacobi iteration up to three digits (i.e. you can stop the iteration as soon as the first three digits get stabilized in each <span v-katex="'x_1, x_2, x_3'"></span>.)
      (iv) Solve <span v-katex="'Ax=b'"></span> by Gauss-Seidel iteration up to three digits.
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>
                <!--./Exercise 7.1 -->
            </div>
            <!--./Section 7.3-->
        </section>
    </div>
</template>
<script>
    export default {
        name: 'unit7'
    }
</script>
