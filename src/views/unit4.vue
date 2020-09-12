<template>
    <div class="unit4">
        <section class="py-3 px-3 mx-4" style="background-color:#fff3e0">
            <h3 class=" h3-responsive font-weight-bold"> 4.Interpolation</h3>
        </section>
        <section class="dark-grey-text mb-4 p-3 mx-4">

            <!--Section 4.1-->
            <div class="mb-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    4.1 Polynomial Interpolation
                </h4>
                <hr class="blue mb-4 mt-0 ">
                The viscosity of water has been experimentally
                determined at different temperatures, as indicated
                in the following table.



                <!--Table-->
                <div class="table-responsive table-stripped" style="width:50%;">

                    <table class="table">
                        <thead>
                            <tr>
                                <th class="">
                                    Temperature
                                </th>
                                <th>
                                    <span v-katex="'0^o'"></span>
                                </th>
                                <th>
                                    <span v-katex="'5^o'"></span>
                                </th>
                                <th>
                                    <span v-katex="'10^o'"></span>
                                </th>
                                <th>
                                    <span v-katex="'14^o'"></span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    viscosity
                                </td>
                                <td>
                                    <span v-katex="'1.792'"></span>
                                </td>
                                <td>
                                    <span v-katex="' 1.519'"></span>
                                </td>
                                <td>
                                    <span v-katex="'1.308'"></span>
                                </td>
                                <td>
                                    <span v-katex="'1.140'"></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!--./Table-->
                From this table, how can we estimate a reasonable value for the viscosity at a temperature of <span v-katex="'8^o'"></span> ?
                The method of <deep>Polynomial Interpolation</deep> is used to find polynomial that passes assumes the values
                in the table. This polynomial should provide acceptable intermediate values for temperatures not tabulated.<br />

                <deep>Interpolation Problem Statement</deep><br />
                Given <span v-katex="'(n+1)'"></span> distinct points as shown in the table below


                <div class="table-responsive table-stripped" style="width:50%;">

                    <table class="table">
                        <thead>
                            <tr>
                                <th class="">
                                    <span v-katex="'x'"></span>
                                </th>
                                <th>
                                    <span v-katex="'x_1'"></span>
                                </th>
                                <th>
                                    <span v-katex="'x_2'"></span>
                                </th>
                                <th>
                                    <span v-katex="'\\dots'"></span>
                                </th>
                                <th>
                                    <span v-katex="'x_n'"></span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span v-katex="'y'"></span>
                                </td>
                                <td>
                                    <span v-katex="'y_1'"></span>
                                </td>
                                <td>
                                    <span v-katex="'y_2'"></span>
                                </td>
                                <td>
                                    <span v-katex="'\\dots'"></span>
                                </td>
                                <td>
                                    <span v-katex="'y_n'"></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                we want to find a polynomial that is defined
                for all  <span v-katex="'x'"></span>, and takes on the corresponding value
                of  <span v-katex="'y_i'"></span> for each of the  <span v-katex="'n+1'"></span> distinct  <span v-katex="'x_i'"></span>'s in the
                table. A polynomial  <span v-katex="'P'"></span> for which


                <div v-katex:display="'P(x_i) = y_i ~~~~~~~\\text{ when } 0 \\leq i \\leq n'"></div>

                is said to <deep>interpolate</deep> the table. The points  <span v-katex="'x_i'"></span> are called <deep>nodes</deep>. Generally, degree of the polynomial depends on the number of nodes.



                <!--Theorem 4.1-->
                <div class="theorem my-3 p-3 ">
                    <theorem-color>Theorem 4.1</theorem-color> <deep>Weierstrass Approximation Theorem</deep><br>

                    If  <span v-katex="'f'"></span> is defined
                    and continuous on  <span v-katex="'[a,b]'"></span> and  <span v-katex="'\\epsilon > 0'"></span> is given, then there
                    exists a polynomial  <span v-katex="'P'"></span>, defined on  <span v-katex="'[a,b]'"></span>, with the property that

                    <div v-katex:display="'|f(x) - P(x)| < \\epsilon, \\quad \\forall x \\in [a,b].'"></div>

                </div>
                <!--./Theorem 4.1-->


                <p>
                    Thus a given function can be approximated `closely' by a polynomial
                    which passes through the points <span v-katex="'(x_0,f(x_0)),\\;(x_1,f(x_1)),\\ldots,\\; (x_n,f(x_n))'"></span>.
                </p>

                <p>
                    Knowing that <span v-katex="'f(x_k)'"></span> (written compactly as <span v-katex="'f_k'"></span>), <span v-katex="'k = 0,1,\\ldots,n'"></span> are the values of a certain
                    function <span v-katex="'y=f(x)'"></span> at <span v-katex="'x_k'"></span>, the most obvious thing then to do is to construct a polynomial
                    <span v-katex="'p_n(x)'"></span> of degree at most <span v-katex="'n'"></span> that passes through the <span v-katex="'(n+1)'"></span> points:

                </p>

                <div v-katex:display="'(x_0,f_0),~(x_1,f_1),~\\cdots, (x_n,f_n)'"></div>

                If the nodes <span v-katex="'x_0, x_1, \\ldots, x_n'"></span> are assumed to be distinct, the
                such a polynomial always does exist and is unique, as can be seen
                from the following result.<br />

                Let <span v-katex="'P_n(x) = a_0 + a_1 x + a_2x^2 + \\ldots + a_nx_n'"></span> be
                a polynomial of
                degree <span v-katex="'n'"></span>. If <span v-katex="'P_n(x)'"></span> interpolates <span v-katex="'f(x)'"></span> at <span v-katex="'x_0, x_1,\\ldots, x_n'"></span>,
                we must have, by definition

                <!--Equation 4.1-->
                <div class="container">
                    <div class=" row">
                        <div class="col">
                            <div v-katex:display="'P_n(x_0) = f_0 = a_0 + a_1 x_0 + a_2x_0^2 + \\ldots + a_nx_0^n'"></div>
                            <div v-katex:display="'P_n(x_1) = f_1 = a_0 + a_1 x_1 + a_2x_1^2 + \\ldots + a_nx_1^n'"></div>
                            <div v-katex="'~~~~~~~~~~~~~~~~~\\vdots~~~~~~~~~~~~~~~~~  \\vdots \\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;  \\vdots'"></div>
                            <div v-katex:display="'P_n(x_n) = f_n = a_0 + a_1 x_n + a_2x_n^2 + \\ldots + a_nx_n^n '"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'~~~~'"></div>
                            <div v-katex:display="'~~~~'"></div>
                            <div v-katex:display="'(4.1)'"></div>
                        </div>
                    </div>
                </div>
                <!--./Equation 4.1-->
                These equations can be written in matrix form as


                <!--Equation 4.2-->
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div v-katex:display="'\\left(\\begin{matrix}  1 \& x_0 \& x_0^2 \& \\cdots \& x_0^n\\\\  1 \& x_1 \& x_1^2 \& \\cdots \& x_1^n \\\\ \\vdots  \& \\vdots \& \\vdots \& \\cdots & \\vdots \\\\  1 \& x_n \& x_n^2 \& \\cdots \& x_n^n \\\\ \\end{matrix}\\right)   \\left(\\begin{matrix}  a_0\\\\a_1\\\\ \\vdots\\\\a_n \\end{matrix} \\right) =  \\left(\\begin{matrix} f_0 \\\\ f_1 \\\\ \\vdots \\\\ f_n \\end{matrix} \\right)'"></div>
                        </div>
                        <div class="col">

                            <div v-katex:display="'~~~~~'"></div>

                            <div v-katex:display="'(4.2)'"></div>
                        </div>
                    </div>
                </div>
                <!--./Equation 4.2-->
                The coefficient matrix in (4.2) is called the <deep>Vandermonde matrix.</deep><br />

                Because <span v-katex="'x_0, x_1, \\ldots, x_n'"></span> are distinct, it can be shown that the above matrix system is  nonsingular. Thus the linear system for the unknowns <span v-katex="'a_0, a_1, \\ldots, a_n'"></span> has a unique solution.
                This means that <span v-katex="'P_n(x)'"></span> exists and is unique. This leads to the following theorem.



                <!--Theorem 4.2-->
                <div class="theorem my-3 p-3 ">
                    <theorem-color>Theorem 4.1</theorem-color> <deep>Existence and Uniqueness Theorem for Polynomial Interpolation</deep><br>

                    Given <span v-katex="'(n+1)'"></span> distinct points <span v-katex="'x_0, x_1, \\ldots, x_n'"></span> and the associated values
                    <span v-katex="'f_0, f_1, \\ldots, f_n'"></span> of a function <span v-katex="'f(x)'"></span> at these points (i.e if <span v-katex="'f(x)=f_i'"></span>)
                    there is a unique polynomial <span v-katex="'p_n(x)'"></span> of degree at most <span v-katex="'n'"></span> such that

                    <div v-katex:display="'P_n(x)= f_i~,~~~~~~\\text{ for }~~i = 0,1,\\ldots,n'"></div>

                </div>
                <!--./Theorem 4.2-->
                <!--Example 4.1-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 4.1</span>
                    Find a cubic
                    polynomial <span v-katex="'P_3(x) = a_0 + a_1x + a_2x^2 + a_3x^3'"></span> that
                    interpolates the data <span v-katex="'(-2, 10)'"></span>, <span v-katex="'(-1, 4)'"></span>,
                    <span v-katex="'(1, 6)'"></span> and <span v-katex="'(2, 3)'"></span><br />
                    <deep>Solution:</deep><br />

                    <div v-katex:display="'\\begin{aligned} P_3(-2) = 10 \&\\Longrightarrow a_0 -2a_1  + 4a_2 - 8a_3 = 10 \\\\  P_3(-1) = 4  \&\\Longrightarrow a_0 -a_1   +  a_2 -  a_3 = 4 \\\\ P_3(1) = 6  \&\\Longrightarrow a_0 +a_1   +  a_2 +  a_3 = 6 \\\\ P_3(2) = 3  \&\\Longrightarrow a_0 +2a_1  + 4a_2 + 8a_3 = 3 \\\\ \\end{aligned}'"></div>

                    Expressing the above equations in Matrix-Vector form gives;

                    <div v-katex:display="'\\left[ \\begin{array}{llll} 1 \&-2\& 4\&-8 \\\\ 1 \&-1\& 1\&-1 \\\\ 1 \&1 \& 1\& 1 \\\\ 1 \&2 \& 4\& 8 \\\\ \\end{array} \\right] \\left[  \\begin{array}{c} a_0\\\\ a_1\\\\ a_2\\\\ a_3\\\\ \\end{array} \\right] =  \\left[  \\begin{array}{c} 10\\\\ 4\\\\ 6\\\\ 3\\\\ \\end{array} \\right]'"></div>

                    The solution of the above matrix system is

                    <div v-katex:display="' a_0 = 4.5000,\\;\\; a_1= 1.9167,\\;\\; a_2 =  0.5000,\\;\\; a_3 = -0.9167'"></div>

                    Thus, the cubic interpolating polynomial is

                    <div v-katex:display="'P_3(x) =  4.5 + 1.9167x + 0.5x^2 - 0.9167x^3'"></div>



                </div>
                <!--./Example 4.1-->
                This approach is known as the <deep>Vandemonde Interpolation approach</deep> and
                is summarised below as follows:<br />
                The Vandemonde Interpolation approach seeks to determine the interpolation polynomial
                <div v-katex:display="'P_n(x) = a_0 + a_1 x + a_2 x^2 + \\ldots + a_n x^n'"></div>

                for the <span v-katex="'(n+1)'"></span> points <span v-katex="'(x_i,y_i)'"></span>, <span v-katex="'i = 0,1,\\ldots,n'"></span> by forming the equation

                <div v-katex:display="' y_i = a_0 + a_1 x_i + a_2 x_i^2 + \\ldots + a_n x_i^n,\\;\\; \\text{ for }\\;\\; i = 0,1,\\ldots,n'"></div>
                and solving for the unknown coefficients <span v-katex="'a_0,a_1,\\ldots,a_n'"></span>. The system can be written by using the matrices <span v-katex="'XA = Y'"></span>, where <span v-katex="'X'"></span> is the Vandemonde matrix.

                <!--Section 4.1.1-->
                <div class="my-3">
                    <h5 class="h5-responsive font-weight-bold">4.1.1 Linear Interpolation</h5>

                    The simplest form of interpolation is probably the
                    straight line, connecting two points by a straight line.
                    Let two data points (<span v-katex="'x_0, y_0)'"></span> and <span v-katex="'(x_1, y_1)'"></span> be given.
                    There is a unique straight line passing through these
                    points. The equation for a straight line passing through
                    (<span v-katex="'x_0, y_0)'"></span> and <span v-katex="'(x_1, y_1)'"></span> is

                    <div v-katex:display="' \\frac{y - y_0}{x - x_0} = \\frac{y_1 - y_0}{x_1 - x_0}'"></div>

                    or
                    <!--Equation 4.3-->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="' y  =  y_0  + \\left(\\frac{y_1 - y_0}{x_1 - x_0}\\right)(x - x_0)  = P_1(x) '"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(4.3)'"></div>
                            </div>
                        </div>
                    </div>
                    <!--./Equation 4.3-->
                    which can be rearranged to give
                    <!--Equation 4.4-->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="' P_1(x) =\\left( \\frac{x - x_1}{x_0 - x_1}\\right)y_0 + \\left(\\frac{x - x_0}{x_1 - x_0}\\right)y_1'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(4.4)'"></div>
                            </div>
                        </div>
                    </div>
                    <!--./Equation 4.4-->
                    Equations 4.3 and 4.4 are both linear in <span v-katex="'x'"></span> (hence the term <i>linear interpolation</i>) and can be written as

                    <div v-katex:display="'P_1(x) = a_0 + a_1x'"></div>

                    The requirement that the straight line passes through <span v-katex="'(x_0, y_0)'"></span>
                    and <span v-katex="'(x_1, y_1)'"></span> yields the equations

                    <div v-katex:display="'\\begin{aligned} P_1(x_0) \& = \& a_1x_0 + a_0 = y_0 \\\\ P_1(x_1) \& = \& a_1x_1 + a_0 = y_1 \\end{aligned}'"></div>
                    which can be solved for the coefficients <span v-katex="'a_0'"></span> and <span v-katex="'a_1'"></span> by solving the linear system

                    <div v-katex:display="'\\left(\\begin{array}{cc}1 \& x_0\\\\1 \&x_1\\end{array}\\right) \\left(\\begin{array}{c}a_0 \\\\ a_1\\end{array}\\right)  = \\left(\\begin{array}{c}y_0 \\\\ y_1\\end{array}\\right) '"></div>

                    <!--Example 4.2-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 4.2</span>
                        Find the polynomial of least degree that interpolates the data in the following table.
                        <div class="text-center">



                            <!--Table-->
                            <div class="table-responsive table-stripped" style="width:40%;">

                                <table class="table">
                                    <thead>
                                        <tr>

                                            <th>
                                                <span v-katex="'x'"></span>
                                            </th>
                                            <th>
                                                <span v-katex="'1.4'"></span>
                                            </th>
                                            <th>
                                                <span v-katex="'1.25'"></span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td>
                                                <span v-katex="' y'"></span>
                                            </td>
                                            <td>
                                                <span v-katex="'3.7'"></span>
                                            </td>
                                            <td>
                                                <span v-katex="'3.9'"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!--./Table-->
                        </div>

                        <deep>Solution.</deep>
                        We set <span v-katex="'x_0 = 1.4'"></span>, <span v-katex="'y_0 = 3.7'"></span> and <span v-katex="'x_1 = 1.25'"></span>, <span v-katex="'y_1 = 3.9'"></span>.
                        By the equation for linear interpolation, the polynomial that is sought is


                        <div v-katex:display="'\\begin{aligned} P_1(x) \& =  3.7 + \\left(\\frac{3.9 - 3.7}{1.25 - 1.4}\\right)(x - 1.4)\\\\ \& =  3.7 - \\frac{4}{3}(x - 1.4) \\end{aligned}'"></div>

                    </div>
                    <!--./Example 4.2-->
                    <!--Example 4.3-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">

                        <span class="font-weight-bold">Example 4.3</span>

                        The following table gives values for <span v-katex="'f(x) = \\tan x'"></span> for a few values of <span v-katex="'x'"></span>.

                        <div class="text-center">



                            <!--Table-->
                            <div class="table-responsive table-stripped" style="width:50%;">

                                <table class="table">
                                    <thead>
                                        <tr>

                                            <th>
                                                <span v-katex="'x'"></span>
                                            </th>
                                            <th>
                                                <span v-katex="'1'"></span>
                                            </th>
                                            <th>
                                                <span v-katex="'1.1'"></span>
                                            </th>
                                            <th>
                                                <span v-katex="'1.2'"></span>
                                            </th>
                                            <th>
                                                <span v-katex="'1.3'"></span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span v-katex="'\\tan x'"></span>
                                            </td>
                                            <td>
                                                <span v-katex="'1.5574'"></span>
                                            </td>
                                            <td>
                                                <span v-katex="'1.9648 '"></span>
                                            </td>
                                            <td>
                                                <span v-katex="'2.5722'"></span>
                                            </td>
                                            <td>
                                                <span v-katex="'3.6021'"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!--./Table-->
                        </div>
                        Use linear interpolation to estimate <span v-katex="'\\tan(1.15)'"></span>.<br />
                        <deep>Solution.</deep>
                        Since 1.15 is between <span v-katex="'1.1'"></span> and 1.2 we set


                        <div v-katex:display="'x_0 = 1.1,~~~~~~ x_1 = 1.2,~~~~~~y_0 = 1.9648,~~~~~~y_1=2.5722'"></div>

                        with <span v-katex="'x = 1.15'"></span>. Then



                        <div v-katex:display="'\\begin{aligned} P_1(x) \&= y_0  + \\left(\\frac{y_1 - y_0}{x_1 - x_0}\\right)(x - x_0)\\\\ \\tan 1.15 \& \\approx  1.9648 + \\frac{2.5722 - 1.9648}{1.2 - 1.1}(1.15 - 1.1)\\\\  \&= 2.2685 \\end{aligned}'"></div>

                        The true value is <span v-katex="'\\tan 1.15 = 2.2345'"></span> so our interpolation has a percentage error of <span v-katex="'1.152\\%'"></span>

                    </div>
                    <!--./Example 4.2-->
                </div>
                <!--./Section 4.1.1-->

            </div>


            <!--./Section 4.1-->
            <!--Section 4.2-->
            <div class=" my-4 p-3 ">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    4.2 The Lagrange Interpolation
                </h4>
                <hr class="blue mb-4 mt-0 ">
                Once we know that the interpolating polynomial exists and is unique, the problem then becomes how to
                construct an interpolating polynomial; that is, how to construct a polynomial <span v-katex="'P_n(x)'"></span> of degree at most <span v-katex="'n'"></span>, such that


                <div v-katex:display="'P_n(x_i) = f_i,~~~~~~~~~~~~i = 0,1,\\ldots,n'"></div>

                It is natural to obtain the polynomial by solving the linear system (4.4) in the
                previous section. Unfortunately,the matrix of this linear system, known as the
                <deep>Vandermonde Matrix</deep>, is usually highly <i>ill-conditioned</i>, and the solution
                of such an ill-conditioned system, even by the use of a stable method, may not be accurate.
                There are, however, several other ways to construct such a polynomial, that do not require
                solution of a Vandermonde system. We describe one such in the following:<br />

                Suppose <span v-katex="'n = 1'"></span>, that is, suppose that we have only two points <span v-katex="'(x_0, f_0)$, $(x_1, f_1)'"></span>,
                then it is easy to see that the linear polynomial

                <div v-katex:display="'P_1(x) = \\frac{x - x_1}{x_0 - x_1}f_0 + \\frac{x - x_0}{x_1 - x_0}f_1'"></div>
                is an interpolating polynomial, because
                <div v-katex:display="'P_1(x_0) = f_0~,~~~~P_1(x_1) = f_1'"></div>
                For convenience, we shall write the polynomial <span v-katex="'P_1(x)'"></span> in the form
                <div v-katex:display="'P_1(x) = L_0(x)f_0 + L_1(x)f_1'"></div>
                where
                <div v-katex:display="'L_0(x) = \\frac{x - x_1}{x_0 - x_1}~~~\\text{and }~~~L_1(x)=\\frac{x - x_0}{x_1 - x_0}'"></div>

                Note that both the polynomials <span v-katex="'L_0(x)'"></span> and <span v-katex="'L_1(x)'"></span> are polynomials of degree 1. So, <span v-katex="'P_1'"></span> is the unique
                linear function that passes through <span v-katex="'(x_0,f_0)'"></span> and <span v-katex="'(x_1,f_1)'"></span> (See the Fig. below)

                <!--Space for Figure-->
                <div class="my-3 red-text text-center p-4" style="border:2px solid blue">
                    Space for figure
                </div>
                <!--./Space for Figure-->
                The concept can be generalized easily for polynomials of higher degrees.
                To generate polynomials of higher degrees, let's define the set of polynomials <span v-katex="'\\{L_k(x)\\}'"></span> recursively,
                as follows:

                <!--Equation 4.5-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'L_k(x) = \\frac{(x-x_0)(x-x_1)\\cdots(x-x_{k-1})(x-x_{k+1})\\cdots(x-x_n)}{(x_k-x_0)(x_k-x_1)\\cdots(x_k-x_{k-1})(x_k-x_{k+1})\\cdots(x_k-x_n)}~,~~~k=0,1,2,\\ldots,n'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(4.5)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 4.5-->
                The interpolating polynomial  <span v-katex="'P_n(x)'"></span> is defined as follows


                <!--Equation 4.6-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'P_n(x) = L_0(x)f_0 + L_1(x)f_1 + \\ldots + L_n(x)f_n = \\sum_{k=0}^n  L_k(x)f(x_k)'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(4.6)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 4.6-->
                To see that  <span v-katex="'P_n(x)'"></span> defined in equation (4.6) is an interpolating polynomial we note that

                <div v-katex:display="'\\begin{aligned} L_0(x) \&=\& \\frac{(x-x_1)(x - x_2)\\cdots(x - x_n)}{(x_0-x_1)(x_0 - x_2)\\cdots(x_0 - x_n)}\\\\  L_1(x)\&=\& \\frac{(x-x_0)(x - x_2)\\cdots(x - x_n)}{(x_1-x_0)(x_1 - x_2)\\cdots(x_1 - x_n)}\\\\ \\vdots \&\&~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\vdots \\\\ L_n(x) \&=\& \\frac{(x-x_0)(x - x_1)\\cdots(x - x_{n-1})}{(x_n-x_0)(x_n - x_1)\\cdots(x_n - x_{n-1})} \\end{aligned}'"></div>
                Also, note that

                <div v-katex:display="'\\begin{aligned} L_0(x_0)\&=\&1,~L_0(x_1) = L_0(x_2) = \\cdots = L_0(x_n) = 0\\\\L_1(x_1)\&=\&1,~L_1(x_0) = L_1(x_2) = \\cdots = L_1(x_n) = 0\\\\ \\end{aligned}'"></div>

                In general,
                <div v-katex:display="'L_k(x_k) = 1~~~~~~~\\text{and }~~~~~L_k(x_i) = 0~,~~~ i \\neq k. '"></div>

                The polynomial <span v-katex="'L_k'"></span> are know as <deep>cardinal polynomials</deep> and have the property

                <div v-katex:display="'L_i(x_j) = \\left\\{\\begin{array}{cc}0 \& \\text{if } i \\neq j \\\\1 & \\text{if } i = j \\end{array} \\right.'"></div>

                Thus
                <div v-katex:display="'\\begin{aligned}P_n(x_0) \&=\& L_0(x_0)f_0 + L_1(x_0)f_1 + \\cdots + L_n(x_0)f_n = f_0 + 0 + \\ldots + 0 = f_0\\\\ P_n(x_1) \&=\& L_0(x_1)f_0 + L_1(x_1)f_1 + \\cdots + L_n(x_1)f_n =  0  + f_1 \\ldots + 0 = f_1 \\\\ \\vdots   \& \& \\\\  P_n(x_n) \&=\& L_0(x_n)f_0 + L_1(x_n)f_1 + \\cdots + L_n(x_n)f_n =  0  + 0 \\ldots + f_n = f_n \\\\ \\end{aligned}'"></div>

                That is, the polynomial <span v-katex="'P_n(x)'"></span> has the property that <span v-katex="'P_n(x_k) = f_k'"></span> for <span v-katex="'k = 0,1,\\ldots,n'"></span>
                The polynomial <span v-katex="'P_n(x)'"></span> defined by equation (4.6) is known as the <deep>Lagrange Interpolating Polynomial </deep>.
                An example of a Lagrange interpolating polynomial passing through <span v-katex="'n + 1'"></span> points in shown in the Fig. below;


                <!--Space for Figure-->
                <div class="my-3 red-text text-center p-4" style="border:2px solid blue">
                    Space for figure with caption
                </div>
                <!--./Space for Figure-->
                <!--Example 4.4-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 4.4</span>

                    Use the Lagrange Interpolation polynomial to interpolate <span v-katex="'f(x)'"></span> from the following table:



                    <!--Table-->
                    <div class="table-responsive table-stripped" style="width:50%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <span v-katex="'x'"></span>
                                    </th>
                                    <th>
                                        <span v-katex="'0'"></span>
                                    </th>
                                    <th>
                                        <span v-katex="'1'"></span>
                                    </th>
                                    <th>
                                        <span v-katex="'2'"></span>
                                    </th>
                                    <th>
                                        <span v-katex="'4'"></span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span v-katex="' f(x)'"></span>
                                    </td>
                                    <td>
                                        <span v-katex="'7'"></span>
                                    </td>
                                    <td>
                                        <span v-katex="'13 '"></span>
                                    </td>
                                    <td>
                                        <span v-katex="'21'"></span>
                                    </td>
                                    <td>
                                        <span v-katex="'43'"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--./Table-->
                    and find an approximation to <span v-katex="'f(3)'"></span> <br />

                    <deep>Solution</deep>. We note that <span v-katex="'n = 3'"></span>, hence we look for an interpolating polynomial of the form

                    <div v-katex:display="'P_3(x) = L_0(x)f_0 + L_1(x)f_1 + L_2(x)f_2 + L_3(x)f_3'"></div>

                    where

                    <div v-katex:display="'\\begin{aligned} L_0(x) \&=\& \\frac{(x-x_1)(x-x_2)(x-x_3)}{(x_0-x_1)(x_0-x_2)(x_0-x_3)} =\\frac{(x-1)(x-2)(x-4)}{(-1)(-2)(-4)}\\\\ L_1(x) \&=\& \\frac{(x-x_0)(x-x_2)(x-x_3)}{(x_1-x_0)(x_1-x_2)(x_1-x_3)} =\\frac{(x-0)(x-2)(x-4)}{(1)(-1)(-3)}\\\\ L_2(x) \&=\& \\frac{(x-x_0)(x-x_1)(x-x_3)}{(x_2-x_0)(x_2-x_1)(x_2-x_3)} =\\frac{(x-0)(x-1)(x-4)}{(2)(1)(-2)}\\\\ L_3(x) \&=\& \\frac{(x-x_0)(x-x_1)(x-x_2)}{(x_3-x_0)(x_3-x_1)(x_3-x_2)} =\\frac{(x-0)(x-1)(x-2)}{(4)(3)(2)}\\\\ \\end{aligned}'"></div>
                    Thus

                    <div v-katex:display="'\\begin{aligned} f(x) \&\\approx\& P_3(x) = 7L_0(x)+ 13L_1(x) + 21L_2(x) + 43L_3(x)\\\\ f(3) \&\\approx\& P_3(3) = 7L_0(3)+ 13L_1(3) + 21L_2(3) + 43L_3(3) \\end{aligned}'"></div>

                    Now <span v-katex="'\\displaystyle L_0(3) = \\frac{1}{4}, L_1(3) = -1,~L_2(3) = \\frac{3}{2},~L_3(3) = \\frac{1}{4}'"></span>. So

                    <div v-katex:display="'f(3) \\approx  P_3(3) = 7\\left(\\frac{1}{4}\\right)+ 13(-1) + 21\\left(\\frac{3}{2}\\right) + 43\\left(\\frac{1}{4}\\right) = 31'"></div>
                </div>
                <!--Example 4.4-->
            </div>
            <!--./Section 4.2-->
            <!--Section 4.3-->



            <div class="mb-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    4.3 Divided Differences and the Newton-Interpolation Formula
                </h4>
                <hr class="blue mb-4 mt-0 ">

                A major difficulty with the Lagrange Interpolation is that one is
                not sure about the degree of interpolating polynomial needed to achieve
                a certain accuracy. Thus, if the accuracy is not good enough with polynomial
                of a certain degree, one needs to increase the degree of polynomial, and computations
                need to be started all over again.<br />


                Furthermore, computing various Lagrangian polynomials is an expensive procedure.
                It is, indeed, desirable to have a formula which makes
                use of <span v-katex="'P_{k-1}(x)'"></span> in computing <span v-katex="'P_k(x)'"></span>.<br />

                The following form of interpolation, known as <deep>Newton's interpolation</deep> allows us to do so.
                The idea is to obtain the interpolating polynomial <span v-katex="'P_n(x)'"></span> in the following form:

                <!--Equation 4.7-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'P_n(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + \\cdots + a_n(x - x_0)(x - x_1)\\cdots(x - x_{n-1}) '"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(4.7)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 4.7-->
                The Newton interpolating polynomial can be written succinctly as

                <!--Equation 4.8-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="' P_n(x) = \\sum_{i=0}^{n}a_i \\prod_{j=0}^{i-1}(x-x_i)'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(4.8)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 4.8-->
                Consider, as an example, the problem of interpolating the four
                points <span v-katex="'(x_0,y_0)'"></span>, <span v-katex="'(x_1,y_1)'"></span>, <span v-katex="'(x_2,y_2)'"></span>, <span v-katex="'(x_3,y_3)'"></span> with
                a cubic polynomial <span v-katex="'P_3(x)'"></span>.<br />

                However, instead of expressing the interpolant in terms of the canonical basis
                <span v-katex="'\\{1, x, x^2, x^3\\}'"></span> (as in the Vandemonde approach), we use the basis


                <div v-katex:display="'\\{1, (x - x_0), (x-x_0)(x-x_1), (x-x_0)(x-x_1)(x-x_2)\\}'"></div>

                and look for the coefficients <span v-katex="'a_0, a_1, a_2, a_3'"></span> so that if


                <!--Equation 4.9-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'P_3(x) = a_0 + a_1(x - x_0) + a_2(x-x_0)(x-x_1) + a_3(x-x_0)(x-x_1)(x-x_2)'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(4.9)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 4.9-->
                then  <span v-katex="'P_3(x_i) = y_i'"></span> for <span v-katex="'i = 0,1,2,3'"></span>.
                This expression is called the Newton representation
                of the interpolating polynomial. In expanded form,
                equation (4.9) can be written as

                <div v-katex:display="'\\begin{aligned} y_0 \& = a_0 \\\\ y_1 \& = a_0 + a_1(x_1 - x_0)\\\\ y_2 \& = a_0 + a_1(x_2 - x_0) + a_2(x_2-x_0)(x_2-x_1)\\\\ y_3 \& = a_0 + a_1(x_3 - x_0) + a_2(x_3-x_0)(x_3-x_1) + a_3(x_3-x_0)(x_3-x_1)(x_3-x_2) \\end{aligned}'"></div>


                and can be expressed these equations in matrix-vector form as


                <div v-katex:display="'\\left[\\begin{array}{rrrr} 1 \& 0 \& 0 \& 0 \\\\ 1 \& x_1 - x_0 \& 0 \& 0 \\\\ 1 \& x_2 - x_0 \&(x_2-x_0)(x_2-x_1) \& 0 \\\\ 1 \& x_3 - x_0 \&(x_3-x_0)(x_3-x_1) \& (x_3-x_0)(x_3-x_1)(x_3-x_2)  \\end{array} \\right] \\left[ \\begin{array}{c} a_0\\\\ a_1\\\\ a_2\\\\ a_3 \\end{array} \\right] =  \\left[ \\begin{array}{c} y_0 \\\\ y_1 \\\\ y_2\\\\ y_3 \\end{array} \\right]'"></div>

                This linear system can be reduced to 3-by-3 system and solved by Gaussian Elimination<br />

                A crucial observation about <span v-katex="'P_n'"></span> is that the
                coefficients <span v-katex="'a_0, a_1, \\ldots '"></span> do not depend
                on <span v-katex="'n'"></span>. In other words, <span v-katex="'P_n'"></span> is obtained
                from <span v-katex="'P_{n-1}'"></span> by adding one more term, without
                altering the coefficients already present in <span v-katex="'P_{n-1}'"></span> itself.
                This is because we began with the hope that <span v-katex="'P_n'"></span> could be
                expressed in the form

                <!--Equation 4.10-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'P_n(x) = P_{n-1}(x) + a_n(x - x_0)(x - x_1)\\cdots(x - x_{n-1}) '"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(4.10)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 4.10-->
                A way of systematically determining the unknown
                coefficients <span v-katex="'a_0, a_1, \\ldots, a_n'"></span> is to set <span v-katex="'x'"></span> equal in turn to <span v-katex="'x_0, x_1, \\ldots, x_n'"></span> in
                equation (4.7) and write down the resulting equations as follows:

                <div v-katex:display="'\\begin{aligned}\\text{For } x = x_0,~~~P_n(x_0) \&= a_0 = f(x_0)\\\\ \\text{For } x = x_1,~~~P_n(x_1)\&= a_0  + a_1(x_1 - x_0) = f(x_1)\\\\ \\text{For  } x = x_2,~~~P_n(x_2)\&= a_0  + a_1(x_2 - x_0) + a_2(x_2 - x_0)(x_2-x_1) = f(x_2)\\\\ \\text{etc.}\&\& \\end{aligned}'"></div>

                which gives

                <div v-katex:display="'\\begin{aligned} a_0 \&= f(x_0)\\\\ a_1\&= \\frac{f(x_1)-a_0}{x_1 - x_0} = \\frac{f(x_1)-f(x_0)}{x_1 - x_0}\\\\ a_2\&= \\frac{ f(x_2) - a_0 - a_1(x_2 - x_0)}{(x_2 - x_0)(x_2 - x_1)} = \\frac{\\displaystyle \\frac{f(x_2)-f(x_1)}{x_2 - x_1} - \\frac{f(x_1)-f(x_0)}{x_1 - x_0}}{x_2 - x_0}\\end{aligned}'"></div>


                The other numbers <span v-katex="'a_i'"></span> for  <span v-katex="'i = 3,4, \\ldots'"></span> can
                similarly be obtained. We see
                that <span v-katex="'a_0'"></span> depends of <span v-katex="'f(x_0)'"></span>, and <span v-katex="'a_1'"></span> depends
                on <span v-katex="'f(x_0)'"></span>, and <span v-katex="'f(x_1)'"></span>, and so on. In
                general, <span v-katex="'a_k'"></span> depends on
                <span v-katex="'f(x_0), f(x_1),\\ldots,f(x_k)'"></span>. In
                other words <span v-katex="'a_k'"></span> depends on the
                values of <span v-katex="'f'"></span> at the nodes <span v-katex="'x_0, x_1,\\ldots,x_k'"></span>. The
                tradional notation used for the coefficients <span v-katex="'a_k'"></span> is

                <div v-katex:display="'a_k = f[x_0,x_1,\\ldots,x_k]'"></div>


                The quantity <span v-katex="'f[x_0,x_1,\\ldots,x_k]'"></span> is
                called the <deep>divided difference of order</deep> <span v-katex="'k'"></span> for <span v-katex="'f'"></span>.
                The divided differences for a function <span v-katex="'f(x)'"></span> are
                defined as follows:<br />

                The first divided difference relative to <span v-katex="'x_i'"></span> and <span v-katex="'x_{i+1}'"></span> is


                <div v-katex:display="'f[x_i,x_{i+1}] = \\frac{f[x_{i+1}] - f[x_i]}{x_{i+1} - x_i}'"></div>
                The second divided difference is given by

                <div v-katex:display="'f[x_i,x_{i+1},x_{i+2}] = \\frac{f[x_{i+1},x_{i+2}] - f[x_i,x_{i+1}]}{x_{i+2} - x_i} '"></div>

                After the <span v-katex="'(k-1)'"></span>st divided differences,

                <div v-katex:display="'f[x_i,x_{i+1},x_{i+2},\\ldots,x_{i+k-1}]~~~\\text{and }~~~f[x_{i+1},x_{i+2},\\ldots,x_{i+k-1},x_{i+k}]'"></div>

                have been determined, the <span v-katex="'k'"></span>th divided difference is defined by


                <div v-katex:display="'f[x_i,x_{i+1},x_{i+2},\\ldots,x_{i+k-1},x_{i+k}] = \\frac{f[x_{i+1},x_{i+2},\\ldots,x_{i+k-1},x_{i+k}] - f[x_i,x_{i+1},x_{i+2},\\ldots,x_{i+k-1}]}{x_{i+k} - x_i}'"></div>

                The process ends with the single  <span v-katex="'n'"></span>th divided difference

                <!--Equation 4.11-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'f[x_0,x_1,\\ldots,x_n] = \\frac{f[x_1,x_2,\ldots,x_n] - f[x_0,x_1,\\ldots,x_{n-1}]}{x_n - x_0}'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(4.11)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 4.11-->
                With this notation, it can be shown that the <span v-katex="'n'"></span>th Lagrange interpolation polynomial (4.7) for <span v-katex="'f'"></span> with respect to  <span v-katex="'x_0,x_1,\\ldots,x_n'"></span> can be expressed as

                <!--Equation 4.12-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'\\begin{aligned} P_n(x) \&= f[x_0] + f[x_0,x_1](x - x_0) +f[x_0,x_1,x_2](x-x_0)(x-x_1)\\\\  \&  + \\ldots + f[x_0,x_1,\\ldots,x_n](x-x_0)(x-x_1)\\cdots(x-x_{n-1}) \\end{aligned}'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(4.12)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 4.12-->
                Equation (4.12) is called the <deep>Newton's divided difference formula</deep> and can be written in compressed form as

                <!--Equation 4.13-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'P_n(x) = f[x_0] + \\sum_{k=1}^{n}f[x_0,x_1,\\ldots,x_k](x-x_0)(x-x_1)\\cdots(x-x_{k-1})'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(4.13)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 4.13-->
                <deep>Note.</deep>
                <ol>
                    <li style="margin-bottom:10px">
                        Note that each divided difference can be obtained from two previous ones of lower orders.
                        For example, <span v-katex="'f[x_0, x_1, x_2]'"></span> can be
                        computed from <span v-katex="'f[x_0, x_1]'"></span>, and <span v-katex="'f[x_1, x_2]'"></span>, and
                        so on. Indeed, they can be arranged in form of a table as shown below for <span v-katex="'n = 5'"></span>:
                        <!--Space for Figure-->
                        <div class="my-3 red-text text-center p-4" style="border:2px solid blue">
                            Space for figure
                        </div>
                        <!--./Space for Figure-->
                        For <span v-katex="'n = 3'"></span> we get the following diagram.

                        <div v-katex:display="'\\begin{array}{c|c|c|c|c} x \& f[~~] \&f[~~,~~]\&f[~~,~~,~~]\&f[~~,~~,~~,~~]\\\\ \\hline x_0\&f[x_0]\&\&\& \\\\  \&  \& f[x_0,x_1]\&\& \\\\ x_1 \&f[x_1]\& \& f[x_0,x_1,x_2]\\\\ \& \& f[x_1,x_2]& & f[x_0,x_1,x_2,x_3]\\\\ x_2 \& f[x_2]\& \& f[x_1,x_2,x_3]\\\\ \& \&f[x_2,x_3]\\\\ x_3 \&f[x_3] \\end{array}'"></div>


                        where <span v-katex="'f[~~,~~]'"></span>, <span v-katex="'f[~~,~~,~~]'"></span>, <span v-katex="'f[~~,~~,~~,~~]'"></span> denote first, second and third order differences respectively.

                    </li>
                    <li style="margin-bottom:10px">
                        Note that in computing <span v-katex="'P_n(x)'"></span> we
                        need only the diagonal entries of the
                        above table; that is, we need
                        only <span v-katex="'f[x_0], f[x_0, x_1], \\ldots, f[x_0, x_1,\\ldots, x_n]'"></span>.
                    </li>
                    <li>
                        Since the divided differences are generated recursively, the interpolating polynomials of successively higher degrees can also be generated recursively. Thus the work done previously can be used
                        gainfully.<br />
                        For example,

                        <div v-katex:display="'\\begin{aligned} P_1(x) \&= f[x_0] + f[x_1, x_0](x - x_0)\\\\ P_2(x) \&= f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1; x_2](x - x_0)(x - x_1)\\\\  \&= P_1(x) + f[x_0, x_1, x_2](x - x_0)(x - x_1)\\\\ \\text{Similarly }~~~ P_3(x) \&= P_2(x) + f[x_0, x_1, x_2, x_3](x - x_0)(x - x_1)(x - x_2)\\\\ P_4(x) \&= P_3(x) + f[x_0, x_1, x_2, x_3, x_4](x - x_0)(x - x_1)(x - x_2)(x - x_3)\\\\ \\text{and so on }\&\& \\end{aligned}'"></div>

                    </li>
                </ol>
                Thus, in computing <span v-katex="'P_2(x)'"></span>, <span v-katex="'P_1(x)'"></span> has been gainfully used; in computing <span v-katex="'P_3(x), P_2(x)'"></span> has been gainfully used, etc.



                <!--Example 4.5-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 4.5</span>





                    Construct a divided difference table for the function <span v-katex="'f'"></span> given in the following table, and write out Newton's interpolating polynomial.


                    <div v-katex:display="'\\begin{array}{c|c|c|c|c} x~~~ \&~~ 0~~ \&~~ 2~~ \&~~ 3~~ \&~~5~~ \\\\ \\hline f(x)\& 1 \& 3 \& 2 \& 5 \\end{array}'"></div>

                    <deep>Solution.</deep>

                    <div v-katex:display="'\\begin{array}{c|c|c|c|c} x \& f[~~] \&f[~~,~~]\&f[~~,~~,~~]\&f[~~,~~,~~,~~]\\\\ \\hline 0\& 1\&\&\&\\\\ \&  \& 1\&\&\\\\ 2 \& 3\& \&\\displaystyle -\\frac{2}{3}\\\\ \& \& -1\& & \\displaystyle \\frac{3}{10}\\\\ 3\& 2\& \& \\displaystyle \\frac{5}{6}\\\\ \& \& \\displaystyle \\frac{3}{2}\\\\ 5 \&5 \\end{array}'"></div>

                    Using the Newton's divided difference formula, the interpolating polynomial is

                    <div v-katex:display="'\\begin{array}{ccl}P_n(x) \&=\& f[x_0] + f[x_0,x_1](x - x_0) +f[x_0,x_1,x_2](x-x_0)(x-x_1)\\\\   \& \& + \\ldots + f[x_0,x_1,\\ldots,x_n](x-x_0)(x-x_1)\\cdots(x-x_{n-1})\\\\ P_3(x) \& = \& 1 + 1\\cdot(x - 0) - \\displaystyle \\frac{2}{3}(x-0)(x - 2) + \\frac{3}{10}(x-0)(x-2)(x-3)\\\\   \& = \& 1 + x - \\displaystyle \\frac{2}{3}x(x - 2) + \\frac{3}{10}x(x-2)(x-3)\\\\  \\end{array}'"></div>

                </div>
                <!--./Example 4.5-->
                The Newton's interpolating formula is
                <div v-katex:display="'\\begin{aligned} P_n(x) \&= a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + \\cdots + a_n(x - x_0)(x - x_1)\\cdots(x - x_{n-1}) \\\\ \&= P_{n-1}(x) + a_n(x - x_0)(x - x_1)\\cdots(x - x_{n-1})  \\end{aligned}'"></div>
                Thus

                <div v-katex:display="'\\begin{aligned} P_0(x)\&= a_0 = 1 \\\\ P_1(x)\&= a_0 + a_1(x-x_0)\\\\ P_1(2)\&= 1 + a_1(2-0) = 3, \\Longrightarrow a_1 = 1\\\\ P_2(x)\&= a_0 + a_1(x-x_0) + a_2(x-x_0)(x-x_1)\\\\ P_2(3)\&= 1 +1(3-0) +a_2(3-0)(3-2) = 2, \\Longrightarrow a_2 = \\displaystyle -\\frac{2}{3}\\\\ P_3(x)\&= a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + a_3(x - x_0)(x - x_1)(x-x_2)\\\\  P_3(5)\&= \\displaystyle 1 +1(5-0)+\\left(-\\frac{2}{3}\\right)(5-0)(5-2) + a_3(5-0)(5-2)(5 - 3) = 5\\\\ \&  \\Longrightarrow a_3 = \\frac{9}{30} = \\frac{3}{10}\\\\ P_3(x)\&= 1 + x - \\displaystyle \\frac{2}{3}x(x - 2) + \\frac{3}{10}x(x-2)(x-3)\\\\ \\end{aligned}'"></div>
                <!--Section 4.3.1-->
                <div class="my-4">
                    <h5 class="h5-responsive mb-3 font-weight-bold "> 4.3.1 The Newton Interpolation with Equally Spaced Nodes</h5>


                    Newton's interpolatory divided-difference formula has a simpler form when
                    <span v-katex="'x_0, x_1, \\ldots , x_n'"></span> are arranged consecutively with equal spacing. In this case, we first
                    introduce the notation



                    <div v-katex:display="'h = x_{i+1} - x_i~~~\\text{for each }~~ i = 0, 1,\\ldots, n-1.'"></div>

                    Then we let a new variable <span v-katex="'s'"></span> be defined by the equation
                    <div v-katex:display="'x = x_0 + sh'"></div>

                    The difference <span v-katex="'x - x_i'"></span> can then be written as

                    <div v-katex:display="'x - x_i = (s - i)h'"></div>

                    and the divided-difference formula becomes

                    <div v-katex:display="'\\begin{array}{ccl} P_n(x) \&=\& f[x_0] + f[x_0,x_1](x - x_0) +f[x_0,x_1,x_2](x-x_0)(x-x_1)\\\\  \& \& + \\ldots + f[x_0,x_1,\\ldots,x_n](x-x_0)(x-x_1)\\cdots(x-x_{n-1})\\\\ \&=\& f[x_0] + sh f[x_0,x_1] + s(s-1)h^2 f[x_0,x_1,x_2]\\\\ \& \& + \\ldots + s(s-1)\\cdots(s-n+1)f[x_0,x_1,\\ldots,x_n]\\\\ \&=\&\\sum_{k=0}^n s(s-1)\\cdots(s-k+1)h^k f[x_0,x_1,\\ldots,x_k] \\end{array}'"></div>

                    Using a generalization of the binomial-coefficient notation,

                    <div v-katex:display="'\\left(\\begin{array}{c}s\\\\ k \\end{array}\\right) = \\frac{s(s-1)\\cdots(s-k+1)}{k!}'"></div>

                    where s$ need not be an integer, we can express <span v-katex="'P_n(x)'"></span> compactly as follows.

                    <!--Equation 4.14-->
                    <div class="table-responsive table-stripped" style="width:100%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <div v-katex:display="'P_n(x) = P_n(x_0 + sh) = f[x_0] + \\sum_{k=0}^n \\left(\\begin{array}{c}s\\\\k \\end{array}\\right)k!h^kf[x_0,x_1,\\ldots,x_k]'"></div>
                                    </th>
                                    <th>
                                        <div v-katex:display="'(4.14)'"></div>
                                    </th>


                                </tr>
                            </thead>

                        </table>
                    </div>
                    <!--./Equation 4.14-->

                </div>
                <!--./Section 4.3.1-->
                <!--Section 4.3.2-->
                <div class="my-4">
                    <h5 class="h5-responsive mb-3 font-weight-bold "> 4.3.2 Newton forward difference formula</h5>

                    Let's introduce the notations:

                    <div v-katex:display="'\\Delta  f_i = f(x_{i+1}) - f(x_i)~~~~~~~\\text{1st forward difference}'"></div>

                    then  <span v-katex="'\\Delta f_0 = f(x_1) - f(x_0)'"></span> ,  <span v-katex="'\\Delta f_1 = f(x_2) - f(x_1)'"></span>, etc. So

                    <div v-katex:display="'f[x_0,x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0} = \\frac{\\Delta f_0}{h}'"></div>

                    Also, note that

                    <div v-katex:display="'\\begin{aligned} \\Delta^2 f_i \&= \\Delta(\\Delta f_i) = \\Delta(f(x_{i+1}) -f(x_i))\\\\ \&= \\Delta f(x_{i+1}) - \\Delta f(x_i)\\\\ \&= [f(x_{i+2}) - f(x_{i+1})] - [f(x_{i+1}) - f(x_i)]\\\\ \&= f(x_{i+2}) - 2f(x_{i+1}) + f(x_i)~~~~~~\\text{2nd forward difference}\\\\ \\end{aligned}'"></div>

                    For example <span v-katex="'\\Delta^2 f_0 = f(x_2) - 2f(x_1) + f(x_0)'"></span>. It can also be shown that

                    <div v-katex:display="'\\Delta^3 f_0 = f(x_3) -3f(x_2) + 3f(x_1) - f(x_0)'"></div>

                    Higher order differences are again the differences of the next lower order differences..
                    With this notation the first two divided diffrences for <span v-katex="'f'"></span> can be written as

                    <div v-katex:display="'\\begin{aligned} f[x_0,x_1]\&= \\frac{f(x_1) - f(x_0)}{x_1 - x_0} = \\frac{\\Delta f(x_0)}{h}\\\\ f[x_0,x_1,x_2]\&= \\frac{f[x_{1},x_{2}] - f[x_0,x_{1}]}{x_{2} - x_0}\\\\ \&= \\frac{\\displaystyle \\frac{f(x_2)-f(x_1)}{x_2 - x_1} - \\frac{f(x_1)-f(x_0)}{x_1 - x_0}}{x_2 - x_0}\\\\   \&= \\frac{f(x_2) - 2f(x_1) + f(x_0)}{h \\times 2h} = \\frac{\\Delta^2 f_0}{2h^2} \\end{aligned}'"></div>
                    In general, we have

                    <div v-katex:display="'f[x_0,x_1,\\ldots,x_k] = \\frac{1}{k! h^k}\\Delta^k f_0 '"></div>

                    Thus, the interpolating polynomial given by equation (4.14) can be written using forward differences as

                    <!--Equation 4.15-->
                    <div class="table-responsive table-stripped" style="width:100%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <div v-katex:display="'P_n(x) = f_0 + s\\Delta f_0 + \\frac{s(s-1)}{2!}\\Delta^2 f_0 + \\frac{s(s-1)(s-2)}{3!}\\Delta^3f_0 +\\ldots+ \\frac{s(s-1)\\cdots(s-n+1)}{n!}\\Delta^n f_0'"></div>
                                    </th>
                                    <th>
                                        <div v-katex:display="'(4.15)'"></div>
                                    </th>


                                </tr>
                            </thead>

                        </table>
                    </div>
                    <!--./Equation 4.15-->
                    or

                    <!--Equation 4.16-->
                    <div class="table-responsive" style="width:100%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <div v-katex:display="'P_n(x) = \\sum_{k=0}^{n}\\left(\\begin{array}{c}s\\\\k \\end{array}\\right)\\Delta^k f_0'"></div>
                                    </th>
                                    <th>
                                        <div v-katex:display="'(4.16)'"></div>
                                    </th>


                                </tr>
                            </thead>

                        </table>
                    </div>
                    <!--./Equation 4.16-->
                    The forward difference table with  <span v-katex="'n = 4'"></span> is given by

                    <div v-katex:display="'\\begin{array}{c|c|c|c|c|c} x_i \&~~f(x_i)~~ \&~~ \\Delta f~~ \&~~ \\Delta^2 f~~ \&~~ \\Delta^3 f ~~\&~~ \\Delta^4 f \\\\ \\hline x_0 \& f_0 \&	 \& \& \& \\\\    \&     \&\\Delta f_0  \& \& \& \\\\ x_1 \& f_1 \&  \&\\Delta^2 f_0 \& \& \\\\ \&     \&\\Delta f_1  \& \&\\Delta^3 f_0 \& \\\\ x_2 \& f_2 \& \& \\Delta^2 f_1\& \& \\Delta^4 f_0 \\\\  \&     \&\\Delta f_2  \& \& \\Delta^3 f_1\& \\\\ x_3 \& f_3 \& \&\\Delta^2 f_2 \& \& \\\\ \&     \&\\Delta f_3  \& \& \& \\\\ x_4 \& f_4 \& \& \& \& \\\\ \\end{array}'"></div>


                    <!--Example 4.6-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 4.6</span>

                        Given the points  <span v-katex="'(-3,-1)'"></span>,  <span v-katex="'(0,2)'"></span> and  <span v-katex="'(3,-2)'"></span> construct a forward difference table; hence
                        deduce the polynomial of degree  <span v-katex="'\\leq 2'"></span> that goes through the points in Newton form
                        <br />
                        <deep>Solution.</deep>

                        <div v-katex:display="'\\begin{array}{c|c|c|c} x_i \&~~f(x_i)~~ \&~~ \\Delta f~~ \&~~ \\Delta^2 f\\\\ \\hline -3 \& -1 \&	 \&  \\\\     \&     \&3 \& \\\\ 0 \& 2 \&  \&-7 \\\\  \&     \&-4  \& \\\\ 3 \& -2 \& \& \\\\ \\end{array}'"></div>

                        Using formula (4.15) with <span v-katex="'n = 2'"></span> we have

                        <div v-katex:display="'P_2(x) = f_0 + s\\Delta f_0 + \\frac{s(s-1)}{2!}\\Delta^2f_0 '"></div>
                        <div v-katex:display="'3~,~~~~x = x_0 + sh,~~~s = \\frac{x-x_0}{h} = \\frac{x+3}{3}~'"></div>
                        <div v-katex:display="'\\begin{aligned} P_2(x) \&=\\displaystyle   -1 + \\frac{(x+3)}{3}(3) + \\frac{\\displaystyle \\frac{(x+3)}{3}\\left(\\frac{x+3}{3} - 1\\right)}{2!}(-7)\\\\  \&= -1 + (x+3) + \\frac{x(x+3)(-7)}{2\\cdot 3^2}\\\\       \&= -1 + (x + 3) - \\frac{7}{18}x(x+3) \\end{aligned}'"></div>
                    </div>
                    <!--./Example 4.6-->
                    <!--Example 4.7-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 4.7</span>

                        Construct a Newton's forward difference table corresponding to the following data
                        and find a polynomial of least degree that goes through the points.

                        <div v-katex:display="'\\begin{array}{c|c|c|c|c|c} x \&~~-2~~ \&~~-1~~ \&~~ 0~~ \&~~1~~\&~~2~~ \\\\ \\hline f(x)\& -1 \& 3 \& 1 \& -1 \& 3 \\end{array} '"></div>

                        <deep>Solution.</deep>
                        The forward difference table with <span v-katex="'n = 4'"></span> is given by

                        <div v-katex:display="'\\begin{array}{c|c|c|c|c|c} x_i \&~~f(x_i)~~ \&~~ \\Delta f~~ \&~~ \\Delta^2 f~~ \&~~ \\Delta^3 f ~~\&~~ \\Delta^4 f \\\\ \\hline-2 \& -1 \&	 \& \& \& \\\\    \&     \&4  \& \& \& \\\\-1 \& 3 \&  \& -6 \& \& \\\\    \&     \&-2 \& \&6 \& \\\\ 0 \& 1 \& \& 0\& \& 0 \\\\    \&     \&-2 \& \&6\& \\\\ 1 \& -1 \& \&6 \& \& \\\\    \&     \&4  \& \& \& \\\\ 2 \& 3 \& \& \& \& \\\\ \\end{array}'"></div>

                        Using formula (4.15) with <span v-katex="'n = 4'"></span> we have

                        <div v-katex:display="'  h  = 1~,~~x_0 = -2~,~~~s = \\frac{x-x_0}{h} = x+2~'"></div>
                        <div v-katex:display="'\\begin{aligned} P_4(x) \&= f_0  + s \\Delta f_0 + \\frac{s(s-1)}{2!}\\Delta^2 f_0 + \\frac{s(s-1)(s-2)}{3!}\\Delta^3 f_0 +  \\frac{s(s-1)(s-2)(s-3)}{4!}\\Delta^4 f_0\\\\  \&= -1 + (x+2)(4) + \\frac{(x+2)(x+1)}{2!}(-6) +\\frac{(x+2)(x+1)(x)}{3!}(6)\\\\  \&= -1 + 4(x+2)  -3(x+1)(x+2) + x(x+1)(x+2) \\end{aligned}'"></div>


                    </div>
                    <!--./Example 4.7-->

                </div>
                <!--./Section 4.3.2-->
            </div>


            <!--./Section 4.3-->
            <!--Section 4.4-->
            <div class="my-4 py-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    4.4 Error in polynomial Interpolation
                </h4>
                <hr class="blue mb-4 mt-0 ">

                <!--Theorem 4.3-->
                <div class="theorem my-3 p-3 ">
                    <theorem-color>Theorem 4.3</theorem-color>

                    Let <span v-katex="'f(x)'"></span> be a function defined
                    in an interval <span v-katex="'(a,b)'"></span> and suppose
                    that <span v-katex="'f (x)'"></span> has <span v-katex="'n + 1'"></span> continuous
                    derivatives on <span v-katex="'(a, b)'"></span>. If

                    <div v-katex:display="'a  \\leq  x_0 < x_1 < \\ldots < x_n  \\leq  b,'"></div>
                    then
                    <div v-katex:display="'f(x) - P_n(x) =\\frac{(x - x_0)(x - x_1)\\cdots  (x - x_n)}{(n + 1)!} f^{(n+1)}(\\xi)'"></div>

                    for some <span v-katex="'\\xi \\in (x_0,x_N)'"></span>.
                </div>
                <!--./Theorem 4.3-->
                <deep>Note:</deep> The <span v-katex="'n'"></span>th degree polynomial
                generated by the Newtons divided difference
                formula is the exact same polynomial generated by
                Lagrange formula. Thus, the error <span v-katex="'E_n'"></span> is the same':

                <div v-katex:display="'E_n(x) = f(x) - P_n(x) =\\frac{(x - x_0)(x - x_1)\\cdots  (x - x_n)}{(n + 1)!}f^{(n+1)}(\\xi)'"></div>


                The absolute value  <span v-katex="'|E_n(x)|'"></span> is known as the <deep>error bound</deep>.<br />
                <deep>Example:</deep> Find the error bound <span v-katex="'E_1'"></span> when
                the function <span v-katex="'f(x) = x^2e^{-x/2}'"></span> is approximated using
                the Newton's divided difference formula using the points


                <div v-katex:display="'x_0 = 1.1,\\;\\; x_1 = 2,\\;\\; x_2 = 3.5,\\;\\; x_3 = 5,\\;\\; x_4 = 7.1 '"></div>



                <deep>Solution:</deep> The error of <span v-katex="'P_1(x)'"></span> is


                <div v-katex:display="'\\begin{aligned}E_1  \&= \\frac{f\'\'(\\xi)}{2!}(x - x_0)(x - x_1)\\\\     \&= \\frac{f\'\'(\\xi)}{2!}(x - 1.1)(x - 2)\\\\ \\end{aligned}'"></div>

                The second derivative is
                <div v-katex:display="'f\'\'(x) = e^{-\\frac{x}{2}} \\left(\\frac{x^2}{4}-2 x+2\\right) '"></div>
                The maximum of the second derivative is (see graph below)



                <div v-katex:display="'Max~|f\'\'(x)| \\leq |f\'\'(2)| = 0.367879'"></div>

                <!--Space for Figure-->
                <div class="my-3 red-text text-center p-4" style="border:2px solid blue">
                    Space for figure
                </div>
                <!--./Space for Figure-->
                The maximum of <span v-katex="'(x-1.1)(x-2)'"></span> is attained at the critical point <span v-katex="'x = 1.55'"></span>. Thus,

                <div v-katex:display="'|(x-1.1)(x-2)| \\leq |(1.55-1.1)(1.55-2)| = 0.2025'"></div>

                The error bound is


                <div v-katex:display="'\\begin{aligned} |E_1|  \& = \\left|\\frac{f\'\'(\\xi)}{2!}(x - 1.1)(x - 2)\\right|\\\\ \& \\leq  \\frac{0.367879}{2}0.2025  = 0.0372477  \\end{aligned}'"></div>

                <!--Section 4.4.1-->
                <div class="my-3">
                    <h5 class="h5-responsive font-weight-bold">4.4.1 Error estimation when <span v-katex="'f(x)'"></span> is unknown</h5>

                    Recall that the the Mean Value  Theorem (MVT)
                    states that if <span v-katex="'f(x)'"></span> is continuous on the closed
                    interval <span v-katex="'[a,b]'"></span> , and differentiable on the open
                    interval <span v-katex="' (a,b)'"></span> , then there exists a
                    point <span v-katex="'c'"></span> in <span v-katex="'(a,b)'"></span> such that


                    <div v-katex:display="'f\'(c) = \\frac{f(b)-f(a)}{b-a}.'"></div>

                    Notice that the first divided difference is

                    <div v-katex:display="'f[x_0,x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}.'"></div>

                    Thus, by the MVT, if <span v-katex="'f\'(x)'"></span> exists, then

                    <div v-katex:display="'f[x_0,x_1] = f\'(\\xi)  '"></div>

                    for some <span v-katex="'\\xi \\in (x_0,x_1)'"></span>.<br />

                    The following theorem generalises this observation

                    <!--Theorem 4.4-->
                    <div class="theorem my-3 p-3 ">
                        <theorem-color>Theorem 4.4 </theorem-color>
                        Suppose <span v-katex="'f'"></span> has <span v-katex="'n'"></span> continuous
                        derivatives and <span v-katex="'x_0,x_1,\\ldots,x_n'"></span> are distinct
                        numbers in <span v-katex="'[a,b]'"></span>.
                        Then <span v-katex="'\\xi'"></span> in <span v-katex="'(a,b)'"></span> exists with

                        <div v-katex:display="'f[x_0,x_1,\\ldots,x_n] = \\frac{f^{(n)}(\\xi)}{n!} '"></div>


                    </div>
                    <!--./Theorem 4.4-->
                    This theorem is used to bound the error in cases where 
                    the <span v-katex="'f(x)'"></span> and its <span v-katex="'n'"></span>th derivative is not known.
      The error is approximated using the <deep>next term rule</deep> defined as
                    <div v-katex:display="'\\begin{aligned}E_n(x) \&= f^{(n+1)}(\\xi) \\frac{(x - x_0)(x - x_1)\\cdots  (x - x_n)}{(n + 1)!}\\\\ \&\\approx f[x_0,x_1,\\ldots,x_n,x_{n+1}] (x - x_0)(x - x_1)\\cdots  (x - x_n) \\end{aligned}'"></div>
                </div>

                <!--./Section 4.4.1-->
            </div>
            <!--./Section 4.4-->
        </section>
    </div>
</template>

<script>
    // @ is an alias to /src


    export default {
        name: 'unit4'
    }
</script>
