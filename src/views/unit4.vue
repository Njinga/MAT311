<template>
    <div class="unit4">
        <section class="py-3 px-3 mx-4 grey-text" style="background-color:#fff3e0">
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
                <div v-katex:display="'\\begin{array}{c|c|c|c|c} \\textrm{Temperature } \& 0^o \& 5^o \& 10^o \& 14^o \\\\ \\hline \\textrm{Viscosity  } \& 1.792 \& 1.519 \& 1.308 \& 1.140 \\\\ \\end{array}'"></div>
                <!--./Table-->
                From this table, how can we estimate a reasonable value for the viscosity at a temperature of <span v-katex="'8^o'"></span> ?
                The method of <deep>Polynomial Interpolation</deep> is used to find polynomial that passes assumes the values
                in the table. This polynomial should provide acceptable intermediate values for temperatures not tabulated.<br />

                <deep>Interpolation Problem Statement</deep><br />
                Given <span v-katex="'(n+1)'"></span> distinct points as shown in the table below

                <div v-katex:display="'\\begin{array}{c|c|c|c|c} x \& x_0 \& x_1 \& \\cdots \& x_n \\\\ \\hline y \& y_0 \& y_1 \& \\cdots \& x_n  \\end{array}'"></div>

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
                            <div v-katex:display="'\\begin{array}{ccccc} P_n(x_0) \&=\& f_0\& =\& a_0 + a_1 x_0 + a_2x_0^2 + \\ldots + a_nx_0^n \\\\ P_n(x_1) \&=\& f_1\& =\& a_0 + a_1 x_1 + a_2x_1^2 + \\ldots + a_nx_1^n\\\\ \\vdots \& \& \\vdots\& \& \\vdots \\\\ P_n(x_n) \&=\& f_n\& =\& a_0 + a_1 x_n + a_2x_n^2 + \\ldots + a_nx_n^n \\end{array}'"></div>
                         </div>
                        <div class="col">
                            
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


                <!--SVG code for Figure-->

                <div class="my-3 text-center">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                         width="" height="" viewBox="0 0 973.000000 487.000000"
                         preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,487.000000) scale(0.100000,-0.100000)"
                           fill="#000000" stroke="none">
                            <path d="M1960 4575 l0 -295 -35 0 c-28 0 -35 -4 -35 -20 0 -16 7 -20 35 -20
l35 0 0 -830 0 -830 -35 0 c-24 0 -35 -5 -35 -15 0 -10 11 -15 35 -15 l35 0 0
-830 0 -830 -415 0 c-362 0 -415 -2 -415 -15 0 -13 53 -15 415 -15 l415 0 0
-420 c0 -413 0 -420 20 -420 20 0 20 7 20 420 l0 420 830 0 830 0 0 -40 c0
-29 4 -40 15 -40 11 0 15 11 15 40 l0 40 1675 0 1675 0 0 -40 c0 -33 3 -40 20
-40 17 0 20 7 20 40 l0 40 792 0 c724 0 790 -1 772 -16 -21 -18 -27 -18 51 8
49 17 49 25 -1 42 -56 19 -57 19 -49 6 4 -7 -258 -10 -779 -10 l-786 0 0 35
c0 28 -4 35 -20 35 -16 0 -20 -7 -20 -35 l0 -35 -1675 0 -1675 0 0 35 c0 24
-5 35 -15 35 -10 0 -15 -11 -15 -35 l0 -35 -830 0 -830 0 0 830 0 830 35 0
c24 0 35 5 35 15 0 10 -11 15 -35 15 l-35 0 0 830 0 830 35 0 c28 0 35 4 35
20 0 16 -7 20 -35 20 l-35 0 0 295 c0 288 0 295 -20 295 -20 0 -20 -7 -20
-295z" />
                            <path d="M7379 4778 c-61 -107 -185 -307 -240 -389 -35 -52 -39 -55 -73 -51
-43 5 -86 -32 -86 -75 0 -27 -26 -41 -812 -434 l-813 -406 -100 8 c-55 4 -156
15 -225 23 -175 22 -328 21 -425 -4 -241 -62 -428 -218 -735 -617 l-155 -200
-37 4 c-30 5 -41 1 -62 -20 -14 -14 -26 -38 -26 -51 0 -23 -17 -34 -170 -111
-149 -75 -195 -105 -160 -105 6 0 82 36 170 80 88 44 164 80 170 80 5 0 -28
-51 -73 -112 -108 -145 -120 -165 -109 -172 5 -3 53 55 107 128 l96 134 39 -5
c32 -5 43 -1 64 20 17 17 26 37 26 57 0 30 3 31 813 436 l812 407 92 -7 c50
-3 143 -13 205 -21 272 -37 410 -28 559 34 213 89 382 244 654 602 133 175
133 175 168 171 45 -5 87 32 87 75 0 27 11 34 176 116 119 59 173 92 167 98
-7 7 -67 -18 -183 -76 -95 -47 -174 -84 -176 -82 -3 2 26 51 64 108 38 57 106
167 152 244 45 77 92 155 102 173 16 26 17 32 5 32 -8 0 -38 -42 -68 -92z
m-385 -580 c-19 -31 -195 -262 -269 -353 -203 -247 -416 -404 -610 -450 -85
-21 -273 -18 -460 5 -88 11 -178 20 -200 21 -35 0 64 52 745 394 432 217 789
394 793 394 5 1 5 -5 1 -11z m-1944 -768 c96 -11 192 -24 213 -28 36 -7 8 -22
-750 -401 -433 -216 -782 -387 -776 -380 5 8 66 86 134 174 283 368 408 488
610 585 155 74 270 84 569 50z" />
                            <path d="M1760 4365 c14 -29 20 -59 20 -110 0 -51 -6 -81 -20 -110 -20 -39
-20 -39 -1 -15 32 40 46 113 32 174 -6 28 -21 62 -32 76 -20 25 -20 24 1 -15z" />
                            <path d="M1233 4378 c-6 -7 -13 -25 -17 -40 -3 -14 -14 -29 -24 -31 -16 -4
-16 -5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -76 -6 -32 -13 -64 -17
-70 -3 -7 1 -4 10 6 8 10 20 50 27 88 10 59 15 69 33 70 17 1 18 2 4 6 -20 5
-22 20 -8 57 10 28 8 33 -7 14z" />
                            <path d="M1263 4368 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                            <path d="M1362 4377 c-47 -56 -41 -221 8 -252 7 -4 4 5 -6 19 -27 42 -31 161
-6 209 21 39 22 46 4 24z" />
                            <path d="M481 4259 c-12 -44 -11 -53 2 -66 13 -13 14 -12 10 11 -3 14 0 40 7
57 8 19 9 34 3 40 -6 6 -14 -10 -22 -42z" />
                            <path d="M1486 4293 c3 -11 1 -37 -4 -57 -9 -32 -8 -37 11 -48 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 41 -5 54 -13 14 -14 13 -10 -5z" />
                            <path d="M567 4293 c-6 -9 -29 -89 -34 -117 -2 -11 -9 -27 -16 -35 -8 -11 -5
-10 10 2 12 11 28 45 37 84 15 59 16 88 3 66z" />
                            <path d="M1545 4290 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                            <path d="M868 4283 c29 -2 74 -2 100 0 26 2 2 3 -53 3 -55 0 -76 -1 -47 -3z" />
                            <path d="M625 4269 c-17 -6 -17 -8 -2 -8 14 -1 17 -11 17 -55 0 -44 -4 -55
-17 -59 -10 -3 0 -5 22 -5 22 0 32 2 23 5 -13 3 -18 18 -20 67 -3 59 -4 63
-23 55z" />
                            <path d="M1620 4269 c-16 -4 -19 -7 -7 -8 14 -1 17 -11 17 -55 0 -44 -4 -55
-17 -59 -10 -3 0 -5 22 -6 22 0 35 3 28 7 -7 4 -13 35 -15 68 -3 59 -4 60 -28
53z" />
                            <path d="M868 4223 c29 -2 74 -2 100 0 26 2 2 3 -53 3 -55 0 -76 -1 -47 -3z" />
                            <path d="M1420 4200 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                            <path d="M455 4150 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0
-13 -4 -16 -10z" />
                            <path d="M1140 4139 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                            <path d="M5627 3116 c-9 -13 -22 -45 -28 -71 -14 -56 0 -136 32 -175 20 -25
20 -24 -1 15 -28 55 -28 165 0 218 23 42 20 50 -3 13z" />
                            <path d="M5403 3123 c10 -3 17 -10 14 -16 -2 -7 -13 -47 -23 -91 -14 -59 -23
-80 -39 -86 -15 -7 -9 -9 25 -9 28 -1 40 2 32 8 -9 6 -11 19 -7 45 7 33 10 36
44 38 l36 1 -33 4 c-32 4 -33 6 -27 36 13 64 15 67 49 67 45 0 60 -19 46 -56
-6 -16 -17 -32 -23 -36 -9 -6 -9 -8 1 -8 19 0 52 38 52 59 0 33 -38 51 -105
50 -33 -1 -52 -3 -42 -6z" />
                            <path d="M5880 3128 c0 -3 7 -19 15 -34 23 -44 20 -160 -5 -209 -21 -39 -21
-40 -1 -15 32 39 46 119 32 176 -10 40 -41 102 -41 82z" />
                            <path d="M4821 2999 c-12 -44 -11 -53 2 -66 13 -13 14 -12 10 11 -3 14 0 40 7
57 8 19 9 34 3 40 -6 6 -14 -10 -22 -42z" />
                            <path d="M5747 3038 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                            <path d="M4906 3029 c-2 -8 -9 -30 -16 -49 -6 -19 -14 -46 -16 -60 -3 -13 -10
-31 -17 -40 -7 -9 -3 -8 10 3 20 17 60 143 49 155 -3 3 -7 -1 -10 -9z" />
                            <path d="M5810 3030 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                            <path d="M5078 3023 c29 -2 74 -2 100 0 26 2 2 3 -53 3 -55 0 -76 -1 -47 -3z" />
                            <path d="M5078 2963 c29 -2 74 -2 100 0 26 2 2 3 -53 3 -55 0 -76 -1 -47 -3z" />
                            <path d="M5690 2939 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                            <path d="M4795 2890 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0
-13 -4 -16 -10z" />
                            <path d="M1760 2675 c14 -29 20 -59 20 -110 0 -51 -6 -81 -20 -110 -20 -39
-20 -39 -1 -15 32 40 46 113 32 174 -6 28 -21 62 -32 76 -20 25 -20 24 1 -15z" />
                            <path d="M1233 2688 c-6 -7 -13 -25 -17 -40 -3 -14 -14 -29 -24 -31 -16 -4
-16 -5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -77 -6 -32 -14 -64 -18
-70 -5 -7 -1 -4 9 6 9 10 22 49 29 88 10 60 15 70 33 71 17 1 18 2 4 6 -20 5
-22 20 -8 57 10 28 8 33 -7 14z" />
                            <path d="M1263 2678 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                            <path d="M1353 2674 c-31 -48 -30 -178 2 -220 12 -15 12 -12 -1 21 -20 50 -15
162 10 200 9 14 14 25 11 25 -2 0 -12 -12 -22 -26z" />
                            <path d="M481 2569 c-12 -44 -11 -53 2 -66 13 -13 14 -12 10 11 -3 14 0 40 7
57 8 19 9 34 3 40 -6 6 -14 -10 -22 -42z" />
                            <path d="M1486 2603 c3 -11 1 -37 -4 -57 -9 -32 -8 -37 11 -48 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 41 -5 54 -13 14 -14 13 -10 -5z" />
                            <path d="M567 2603 c-6 -9 -29 -89 -34 -117 -2 -11 -9 -27 -16 -35 -8 -11 -5
-10 10 2 12 11 28 45 37 84 15 59 16 88 3 66z" />
                            <path d="M1545 2600 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                            <path d="M868 2593 c29 -2 74 -2 100 0 26 2 2 3 -53 3 -55 0 -76 -1 -47 -3z" />
                            <path d="M612 2578 c-7 -7 -12 -33 -12 -58 0 -66 36 -92 74 -54 29 29 13 124
-21 124 -3 0 0 -6 6 -14 7 -8 11 -36 9 -63 -3 -41 -6 -48 -25 -51 -18 -3 -23
3 -28 32 -7 37 1 77 19 88 7 5 7 8 1 8 -6 0 -16 -5 -23 -12z" />
                            <path d="M1606 2574 c-9 -9 -16 -32 -16 -54 0 -41 20 -70 49 -70 28 0 41 21
41 70 0 66 -36 92 -74 54z m59 -24 c4 -16 4 -44 0 -61 -5 -24 -11 -29 -28 -27
-18 2 -23 11 -25 47 -4 54 2 71 27 71 13 0 21 -9 26 -30z" />
                            <path d="M868 2533 c29 -2 74 -2 100 0 26 2 2 3 -53 3 -55 0 -76 -1 -47 -3z" />
                            <path d="M1420 2510 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                            <path d="M455 2460 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0
-13 -4 -16 -10z" />
                            <path d="M1140 2449 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                            <path d="M3597 596 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                            <path d="M6979 611 c11 -7 12 -17 3 -52 -9 -36 -9 -47 4 -59 13 -13 14 -13 9
2 -4 9 -2 33 4 54 11 39 2 64 -23 64 -6 0 -5 -4 3 -9z" />
                            <path d="M3655 600 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                            <path d="M7045 600 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                            <path d="M8739 591 c11 -7 12 -17 3 -52 -11 -44 -3 -69 22 -69 6 0 5 4 -3 9
-11 7 -12 17 -3 52 11 44 3 69 -22 69 -6 0 -5 -4 3 -9z" />
                            <path d="M3716 568 c-30 -43 -9 -118 34 -118 24 0 50 37 50 70 0 33 -26 70
-50 70 -10 0 -26 -10 -34 -22z m59 -48 c0 -52 -1 -55 -25 -55 -22 0 -25 5 -28
44 -4 57 3 73 30 69 21 -3 23 -9 23 -58z" />
                            <path d="M7120 579 c-16 -4 -19 -7 -7 -8 14 -1 17 -11 17 -55 0 -44 -4 -55
-17 -59 -10 -3 0 -5 22 -6 22 0 35 3 28 7 -7 4 -13 35 -15 68 -3 59 -4 60 -28
53z" />
                            <path d="M8805 580 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                            <path d="M3530 510 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                            <path d="M6920 509 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                            <path d="M8680 489 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                        </g>
                    </svg>
                </div>
                <!--./SVG code for Figure-->
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


                <!--SVG code-->
                <div class="my-3 text-center">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                         width="" height="" viewBox="0 0 998.000000 628.000000"
                         preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,628.000000) scale(0.100000,-0.100000)"
                           fill="#000000" stroke="none">
                            <path d="M881 5929 c-7 -22 -15 -48 -18 -57 -4 -10 -2 -13 5 -8 9 5 12 -582
12 -2473 l0 -2481 -415 0 c-362 0 -415 -2 -415 -15 0 -13 53 -15 415 -15 l415
0 0 -420 c0 -413 0 -420 20 -420 20 0 20 7 20 420 l0 420 745 0 745 0 0 -35
c0 -24 5 -35 15 -35 10 0 15 11 15 35 l0 35 405 0 405 0 0 -35 c0 -28 4 -35
20 -35 16 0 20 7 20 35 l0 35 700 0 700 0 0 -35 c0 -28 4 -35 20 -35 16 0 20
7 20 35 l0 35 1675 0 1675 0 0 -35 c0 -24 5 -35 15 -35 10 0 15 11 15 35 l0
35 576 0 c505 0 575 -2 564 -15 -9 -10 4 -8 49 8 61 22 61 22 34 33 -54 22
-76 27 -69 15 5 -8 -151 -11 -573 -11 l-581 0 0 40 c0 29 -4 40 -15 40 -11 0
-15 -11 -15 -40 l0 -40 -1675 0 -1675 0 0 40 c0 33 -3 40 -20 40 -17 0 -20 -7
-20 -40 l0 -40 -700 0 -700 0 0 40 c0 33 -3 40 -20 40 -17 0 -20 -7 -20 -40
l0 -40 -405 0 -405 0 0 40 c0 29 -4 40 -15 40 -11 0 -15 -11 -15 -40 l0 -40
-745 0 -745 0 0 2481 c0 1561 4 2478 9 2474 10 -6 -16 84 -29 98 -3 4 -12 -11
-19 -34z" />
                            <path d="M441 5849 c-12 -44 -11 -53 2 -66 13 -13 14 -12 10 11 -3 14 0 40 7
57 8 19 9 34 3 40 -6 6 -14 -10 -22 -42z" />
                            <path d="M526 5879 c-2 -8 -9 -30 -16 -49 -6 -19 -14 -46 -16 -60 -3 -13 -10
-31 -17 -40 -7 -9 -3 -8 10 3 20 17 60 143 49 155 -3 3 -7 -1 -10 -9z" />
                            <path d="M415 5740 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0
-13 -4 -16 -10z" />
                            <path d="M4551 5257 c-22 -28 -41 -88 -41 -134 0 -48 28 -124 49 -137 6 -4 1
10 -11 31 -32 54 -32 162 -1 216 23 38 24 48 4 24z" />
                            <path d="M4319 5251 c12 -8 13 -18 2 -63 -22 -102 -32 -127 -49 -131 -9 -3 3
-5 28 -5 25 0 38 2 29 5 -14 3 -15 10 -7 44 10 36 13 39 47 41 l36 1 -34 4
c-33 4 -33 5 -27 46 9 53 15 59 57 55 29 -3 34 -7 37 -31 2 -17 -4 -37 -14
-48 -9 -10 -12 -19 -6 -19 12 0 52 47 52 61 0 5 -9 18 -20 29 -16 16 -33 20
-82 20 -42 0 -58 -3 -49 -9z" />
                            <path d="M4806 5234 c15 -21 19 -47 19 -109 0 -62 -4 -88 -19 -109 -10 -16
-13 -25 -6 -21 22 13 40 73 40 130 0 57 -18 117 -40 130 -7 4 -4 -5 6 -21z" />
                            <path d="M3743 5174 c3 -6 0 -28 -8 -50 -14 -41 -6 -75 18 -73 9 0 9 2 0 6
-16 6 -16 27 -1 70 10 27 9 35 -1 45 -8 7 -11 8 -8 2z" />
                            <path d="M4667 5156 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                            <path d="M3806 5113 c-9 -32 -23 -71 -31 -88 l-15 -30 23 26 c21 24 55 134 44
146 -3 2 -12 -22 -21 -54z" />
                            <path d="M4725 5160 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                            <path d="M3998 5153 c29 -2 74 -2 100 0 26 2 2 3 -53 3 -55 0 -76 -1 -47 -3z" />
                            <path d="M2590 5130 c0 -16 7 -20 35 -20 28 0 35 4 35 20 0 16 -7 20 -35 20
-28 0 -35 -4 -35 -20z" />
                            <path d="M2730 5130 c0 -18 7 -20 70 -20 63 0 70 2 70 20 0 18 -7 20 -70 20
-63 0 -70 -2 -70 -20z" />
                            <path d="M2940 5130 c0 -18 7 -20 75 -20 68 0 75 2 75 20 0 18 -7 20 -75 20
-68 0 -75 -2 -75 -20z" />
                            <path d="M3160 5130 c0 -18 7 -20 70 -20 63 0 70 2 70 20 0 18 -7 20 -70 20
-63 0 -70 -2 -70 -20z" />
                            <path d="M3370 5130 c0 -16 7 -20 35 -20 28 0 35 4 35 20 0 16 -7 20 -35 20
-28 0 -35 -4 -35 -20z" />
                            <path d="M3998 5093 c29 -2 74 -2 100 0 26 2 2 3 -53 3 -55 0 -76 -1 -47 -3z" />
                            <path d="M4600 5070 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                            <path d="M3710 5019 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                            <path d="M4517 4826 c-9 -13 -22 -45 -28 -71 -14 -56 0 -136 32 -175 20 -25
20 -24 -1 15 -28 55 -28 165 0 218 23 42 20 50 -3 13z" />
                            <path d="M4780 4815 c25 -49 28 -165 5 -209 -19 -36 -19 -47 -1 -20 8 12 20
42 27 68 14 57 0 137 -32 176 -20 25 -20 24 1 -15z" />
                            <path d="M4409 4834 c6 -3 7 -12 4 -20 -3 -8 0 -14 7 -14 15 0 9 33 -8 36 -7
1 -8 0 -3 -2z" />
                            <path d="M4373 4799 c-3 -17 -12 -33 -20 -36 -11 -4 -12 -8 -3 -13 9 -6 8 -26
-4 -85 -9 -43 -14 -80 -12 -82 6 -7 25 56 32 109 5 38 12 52 28 58 18 7 18 9
3 9 -15 1 -17 7 -11 36 3 19 3 35 0 35 -4 0 -9 -14 -13 -31z" />
                            <path d="M3761 4709 c-12 -44 -11 -53 2 -66 13 -13 14 -12 10 11 -3 14 0 40 7
57 8 19 9 34 3 40 -6 6 -14 -10 -22 -42z" />
                            <path d="M4637 4748 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                            <path d="M3847 4743 c-6 -9 -29 -89 -34 -117 -2 -11 -9 -27 -16 -35 -8 -11 -5
-10 10 2 12 11 28 45 37 84 15 59 16 88 3 66z" />
                            <path d="M4700 4740 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                            <path d="M4028 4733 c29 -2 74 -2 100 0 26 2 2 3 -53 3 -55 0 -76 -1 -47 -3z" />
                            <path d="M2590 4705 c0 -13 54 -15 425 -15 371 0 425 2 425 15 0 13 -54 15
-425 15 -371 0 -425 -2 -425 -15z" />
                            <path d="M8930 4670 c0 -22 5 -40 10 -40 6 0 10 18 10 40 0 22 -4 40 -10 40
-5 0 -10 -18 -10 -40z" />
                            <path d="M4028 4673 c29 -2 74 -2 100 0 26 2 2 3 -53 3 -55 0 -76 -1 -47 -3z" />
                            <path d="M4580 4649 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                            <path d="M3735 4600 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0
-13 -4 -16 -10z" />
                            <path d="M4290 4590 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                            <path d="M8918 4470 c-2 -51 0 -70 10 -70 7 0 12 14 12 39 0 21 3 53 6 70 5
24 3 31 -9 31 -12 0 -16 -15 -19 -70z" />
                            <path d="M8900 4288 c0 -13 -3 -47 -6 -75 -5 -35 -3 -53 4 -53 6 0 14 21 17
48 3 26 9 59 11 75 4 20 2 27 -10 27 -10 0 -16 -9 -16 -22z" />
                            <path d="M7690 4285 c0 -10 10 -15 28 -15 15 0 44 -8 64 -19 35 -17 48 -17 48
0 0 8 -67 34 -112 43 -21 5 -28 3 -28 -9z" />
                            <path d="M9335 4281 c-6 -5 -107 -59 -226 -120 -190 -98 -218 -109 -224 -94
-6 16 -9 14 -17 -8 -9 -28 -58 -53 -464 -239 -243 -112 -228 -107 -244 -70
-14 33 -36 42 -26 10 3 -11 8 -28 11 -37 5 -15 -24 -30 -172 -91 -256 -104
-455 -176 -638 -232 -88 -26 -161 -47 -163 -46 -1 2 5 22 13 46 15 42 13 63
-4 44 -4 -5 -15 -30 -25 -56 l-17 -47 -92 -20 c-174 -39 -269 -51 -408 -51
-129 0 -139 1 -149 20 -6 11 -15 18 -21 15 -5 -4 -7 -11 -4 -16 15 -23 -152 5
-475 80 -118 27 -255 57 -305 66 -49 9 -91 18 -93 20 -2 2 6 22 18 45 13 25
18 46 13 51 -6 6 -19 -10 -32 -39 l-23 -49 -186 0 c-159 1 -202 -3 -287 -22
-117 -27 -258 -78 -368 -133 l-79 -39 -46 42 c-31 29 -47 38 -50 30 -3 -8 12
-29 32 -48 20 -19 36 -36 36 -38 0 -2 -24 -16 -53 -33 -29 -16 -155 -98 -280
-181 -227 -151 -452 -291 -468 -291 -4 0 3 25 17 55 27 63 28 65 13 65 -10 0
-61 -104 -62 -127 0 -6 -30 -25 -66 -42 -250 -114 -398 -137 -691 -106 -224
23 -375 22 -481 -4 -46 -11 -93 -23 -103 -27 -19 -7 -19 -6 2 23 34 49 11 48
-33 -1 -35 -39 -58 -51 -185 -101 -181 -72 -320 -135 -320 -146 0 -15 14 -11
96 27 144 66 345 145 362 142 9 -1 29 5 43 15 85 57 327 79 573 53 347 -37
499 -13 785 125 156 75 188 94 506 305 275 182 329 214 490 294 218 107 381
143 617 137 237 -7 250 -9 638 -98 118 -28 271 -59 340 -70 71 -12 128 -26
132 -33 17 -31 47 -60 53 -54 4 4 0 19 -9 32 -9 14 -16 28 -16 31 0 3 30 2 68
-1 84 -8 252 10 407 43 66 14 127 26 135 26 8 0 20 3 25 7 6 5 39 16 75 25
130 33 461 149 697 245 241 97 242 97 257 76 17 -26 32 -16 17 12 -10 18 3 25
152 92 89 40 236 108 326 152 90 43 166 78 168 78 3 0 2 -16 -2 -36 -9 -53 16
-40 30 15 l10 42 238 122 c131 67 238 126 238 132 1 13 -15 17 -26 6z" />
                            <path d="M7528 4241 c-51 -33 -63 -47 -48 -56 6 -4 26 7 45 23 18 17 43 33 54
37 23 7 29 25 8 25 -7 0 -34 -13 -59 -29z" />
                            <path d="M7887 4184 c-8 -9 84 -124 94 -118 8 5 -20 50 -64 107 -15 18 -20 20
-30 11z" />
                            <path d="M7381 4062 c-32 -63 -38 -86 -21 -80 16 5 70 122 60 132 -5 5 -21
-17 -39 -52z" />
                            <path d="M8020 3978 c0 -19 59 -118 70 -118 14 0 13 4 -20 70 -28 56 -50 77
-50 48z" />
                            <path d="M7296 3845 c-9 -30 -19 -62 -23 -71 -4 -11 -2 -15 7 -12 14 4 48 88
49 121 2 37 -18 14 -33 -38z" />
                            <path d="M5889 3854 c-45 -13 -78 -39 -66 -50 3 -3 22 3 44 14 21 10 50 22 66
26 15 3 27 11 27 16 0 13 -15 12 -71 -6z" />
                            <path d="M6046 3852 c-3 -6 8 -15 26 -21 17 -6 46 -22 64 -36 18 -14 35 -21
39 -15 5 9 -69 70 -86 70 -4 0 -14 3 -22 6 -8 3 -18 1 -21 -4z" />
                            <path d="M8793 3782 c-28 -82 -14 -105 15 -25 27 74 29 85 17 89 -5 2 -20 -27
-32 -64z" />
                            <path d="M5705 3704 c-45 -61 -51 -74 -37 -74 16 0 95 111 85 121 -4 4 -26
-16 -48 -47z" />
                            <path d="M6230 3710 c0 -15 71 -120 81 -120 16 0 10 16 -28 74 -35 53 -53 69
-53 46z" />
                            <path d="M7226 3612 c-18 -66 -20 -82 -7 -82 8 0 41 103 41 128 0 32 -19 6
-34 -46z" />
                            <path d="M8688 3577 c-38 -53 -44 -65 -31 -69 10 -4 83 94 83 110 0 23 -15 11
-52 -41z" />
                            <path d="M8250 3567 c0 -17 96 -111 103 -100 5 7 -87 113 -99 113 -2 0 -4 -6
-4 -13z" />
                            <path d="M6355 3510 c-7 -11 55 -130 68 -130 13 0 7 20 -23 80 -32 63 -35 66
-45 50z" />
                            <path d="M8530 3454 c-19 -7 -50 -13 -67 -13 -18 -1 -33 -5 -33 -11 0 -14 64
-13 111 2 37 11 48 22 32 31 -5 2 -24 -2 -43 -9z" />
                            <path d="M4340 3443 c0 -8 115 -53 135 -53 17 0 0 19 -29 33 -44 21 -106 32
-106 20z" />
                            <path d="M4195 3418 c-49 -25 -76 -48 -69 -59 2 -4 26 5 51 21 26 17 53 30 60
30 7 0 13 7 13 15 0 19 -7 19 -55 -7z" />
                            <path d="M5477 3285 c-28 -58 -33 -75 -18 -75 8 0 71 110 71 124 0 3 -6 6 -13
6 -7 0 -25 -25 -40 -55z" />
                            <path d="M4016 3244 c-36 -59 -44 -78 -27 -72 19 6 82 111 73 120 -6 6 -24
-13 -46 -48z" />
                            <path d="M7080 3221 c0 -5 -16 -30 -35 -56 -20 -25 -33 -50 -30 -56 9 -14 19
-5 59 55 41 61 42 66 21 66 -8 0 -15 -4 -15 -9z" />
                            <path d="M4717 3173 c-3 -5 18 -33 47 -62 30 -29 56 -49 59 -44 3 5 -18 33
-47 62 -30 29 -56 49 -59 44z" />
                            <path d="M5352 3083 c-24 -30 -41 -58 -37 -61 9 -9 95 86 95 104 0 24 -14 14
-58 -43z" />
                            <path d="M6596 3111 c-12 -18 106 -103 121 -87 4 5 -1 13 -11 20 -10 6 -38 25
-62 43 -24 18 -46 29 -48 24z" />
                            <path d="M3910 3043 c-27 -61 -35 -93 -23 -93 9 0 63 114 63 133 0 22 -22 1
-40 -40z" />
                            <path d="M6895 3045 c-16 -8 -42 -16 -57 -20 -44 -9 -35 -28 10 -20 51 9 102
32 102 44 0 14 -18 13 -55 -4z" />
                            <path d="M2933 3018 c-37 -7 -53 -14 -53 -25 0 -11 5 -13 18 -8 9 4 41 10 70
13 33 3 51 9 49 16 -5 15 -22 16 -84 4z" />
                            <path d="M4885 3011 c-6 -10 30 -38 84 -66 23 -11 36 -14 44 -6 7 7 2 13 -16
20 -14 6 -44 21 -66 35 -22 14 -43 22 -46 17z" />
                            <path d="M3100 2966 c0 -7 6 -19 13 -25 8 -6 22 -29 32 -51 10 -22 24 -40 32
-40 17 0 16 4 -4 43 -35 69 -73 107 -73 73z" />
                            <path d="M5185 2955 c-16 -8 -42 -14 -57 -15 -16 0 -28 -4 -28 -10 0 -5 15
-10 33 -9 38 0 121 32 111 42 -10 10 -24 8 -59 -8z" />
                            <path d="M2738 2925 c-48 -35 -64 -53 -55 -62 7 -6 117 76 117 88 0 15 -13 10
-62 -26z" />
                            <path d="M2556 2758 c-25 -28 -42 -56 -39 -62 7 -10 103 88 103 105 0 20 -21
6 -64 -43z" />
                            <path d="M3206 2761 c-3 -4 5 -39 17 -77 14 -41 26 -63 31 -56 7 11 -30 142
-39 142 -2 0 -6 -4 -9 -9z" />
                            <path d="M3703 2600 c-26 -36 -38 -62 -31 -66 6 -4 13 -3 17 2 25 34 71 109
71 116 0 21 -20 3 -57 -52z" />
                            <path d="M3288 2544 c-16 -15 62 -114 89 -114 19 0 17 4 -20 42 -18 18 -39 43
-47 56 -8 13 -18 20 -22 16z" />
                            <path d="M3570 2465 c-14 -8 -42 -19 -62 -25 -21 -6 -38 -16 -38 -22 0 -24
129 23 138 50 5 16 -7 15 -38 -3z" />
                            <path d="M2277 2379 c-24 -37 -35 -65 -29 -71 5 -5 24 15 47 53 21 35 34 64
28 70 -5 5 -24 -17 -46 -52z" />
                            <path d="M2175 2204 c-11 -18 -14 -29 -7 -36 7 -7 15 0 26 20 18 36 19 42 7
42 -5 0 -16 -12 -26 -26z" />
                            <path d="M2345 628 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9 2
-4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                            <path d="M3189 631 c11 -7 12 -17 3 -52 -11 -44 -3 -69 22 -69 6 0 5 4 -3 9
-11 7 -12 17 -3 52 11 44 3 69 -22 69 -6 0 -5 -4 3 -9z" />
                            <path d="M4627 628 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12 10
11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                            <path d="M8005 628 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9 2
-4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                            <path d="M2405 620 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                            <path d="M3255 620 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                            <path d="M4690 620 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                            <path d="M8065 620 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                            <path d="M9357 596 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                            <path d="M2466 594 c-9 -9 -16 -32 -16 -54 0 -41 20 -70 49 -70 28 0 41 21 41
70 0 66 -36 92 -74 54z m59 -24 c4 -16 4 -44 0 -61 -5 -24 -11 -29 -28 -27
-18 2 -23 11 -25 47 -4 54 2 71 27 71 13 0 21 -9 26 -30z" />
                            <path d="M3330 599 c-16 -4 -19 -7 -7 -8 25 -1 25 -107 0 -114 -10 -3 0 -5 22
-6 22 0 35 3 28 7 -7 4 -13 35 -15 68 -3 59 -4 60 -28 53z" />
                            <path d="M4752 598 c-15 -15 -16 -38 -2 -38 6 0 10 8 8 18 -2 12 4 17 22 17
34 0 38 -29 9 -69 l-22 -31 31 29 c36 33 39 47 16 70 -18 19 -45 21 -62 4z" />
                            <path d="M9415 600 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                            <path d="M8115 549 c-4 -6 -4 -13 -1 -16 3 -4 6 -1 6 5 0 7 5 12 11 12 6 0 8
-9 4 -22 -16 -56 -17 -63 -7 -53 5 6 14 24 20 42 8 26 8 33 -5 37 -20 8 -21 8
-28 -5z" />
                            <path d="M8196 547 c3 -8 0 -26 -5 -41 -9 -21 -8 -28 5 -33 8 -3 21 0 27 6 9
9 8 11 -7 5 -16 -6 -17 -4 -11 17 4 13 7 26 7 29 0 20 -3 30 -12 30 -5 0 -7
-6 -4 -13z" />
                            <path d="M2280 529 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                            <path d="M3130 529 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                            <path d="M4570 529 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                            <path d="M7940 529 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                            <path d="M9290 510 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                            <path d="M4820 502 c0 -7 -15 -12 -34 -12 -19 0 -38 -4 -41 -10 -4 -6 10 -10
33 -10 28 0 42 5 46 16 4 9 4 19 1 22 -3 3 -5 0 -5 -6z" />
                        </g>
                    </svg>
                   <deep> Figure 4.1: Lagrange interpolating polynomial through <span v-katex="'n + 1'"></span> points</deep>
                </div>
                <!--./SVG code-->

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
                       

                        <!--SVG code-->
                                                                                                  <div class="my-3">
                                                                                                      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                                                                                           width="" height="" viewBox="0 0 1361.000000 559.000000"
                                                                                                           preserveAspectRatio="xMidYMid meet">

                                                                                                          <g transform="translate(0.000000,559.000000) scale(0.100000,-0.100000)"
                                                                                                             fill="#000000" stroke="none">
                                                                                                              <path d="M1960 5255 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M2293 5393 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M1856 5368 c-9 -12 -16 -30 -16 -40 0 -10 -7 -18 -17 -18 -14 0 -15
-2 -4 -9 11 -7 11 -20 2 -75 -6 -36 -14 -73 -18 -83 -4 -10 -2 -14 4 -10 10 6
21 46 38 134 4 18 14 34 23 36 15 4 15 5 1 6 -12 1 -15 8 -11 29 2 15 9 33 15
40 5 6 7 12 4 12 -3 0 -13 -10 -21 -22z" />
                                                                                                              <path d="M370 5369 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M1885 5371 c-3 -5 -1 -12 5 -16 5 -3 10 1 10 9 0 18 -6 21 -15 7z" />
                                                                                                              <path d="M3597 5338 c4 -7 8 -53 8 -102 0 -68 3 -90 14 -94 10 -3 12 0 8 12
-4 10 -7 58 -7 107 0 74 -3 89 -16 89 -10 0 -12 -4 -7 -12z" />
                                                                                                              <path d="M4809 5336 c7 -8 10 -47 9 -102 -3 -82 -1 -89 17 -92 16 -3 18 -1 8
9 -9 9 -13 45 -13 106 0 79 -2 93 -16 93 -13 0 -14 -3 -5 -14z" />
                                                                                                              <path d="M5347 5253 c1 -54 2 -101 3 -105 0 -5 6 -8 13 -8 9 0 11 26 9 105 -2
73 -7 105 -15 105 -9 0 -11 -28 -10 -97z" />
                                                                                                              <path d="M6737 5298 c1 -29 2 -77 2 -105 1 -36 5 -53 14 -53 9 0 11 26 9 105
-2 73 -7 105 -15 105 -8 0 -11 -18 -10 -52z" />
                                                                                                              <path d="M7267 5298 c1 -29 2 -77 2 -105 1 -36 5 -53 14 -53 9 0 11 26 9 105
-2 73 -7 105 -15 105 -8 0 -11 -18 -10 -52z" />
                                                                                                              <path d="M9199 5254 c2 -73 0 -99 -10 -105 -9 -6 -2 -9 21 -9 19 0 30 4 24 8
-7 4 -15 50 -19 105 -4 53 -10 97 -14 97 -3 0 -4 -43 -2 -96z" />
                                                                                                              <path d="M9807 5253 c1 -54 2 -101 3 -105 0 -5 6 -8 13 -8 9 0 11 26 9 105 -2
73 -7 105 -15 105 -9 0 -11 -28 -10 -97z" />
                                                                                                              <path d="M11728 5338 c7 -7 12 -44 12 -95 0 -68 -3 -84 -17 -92 -14 -8 -10
-10 22 -10 22 1 32 3 22 6 -15 4 -18 14 -17 51 6 111 1 152 -17 152 -13 0 -14
-3 -5 -12z" />
                                                                                                              <path d="M12347 5298 c1 -29 2 -77 2 -105 1 -36 5 -53 14 -53 9 0 11 26 9 105
-2 73 -7 105 -15 105 -8 0 -11 -18 -10 -52z" />
                                                                                                              <path d="M2815 5333 c-6 -2 -9 -37 -7 -88 3 -81 2 -86 -20 -94 -19 -8 -14 -10
27 -9 28 0 42 2 33 5 -15 4 -18 19 -20 97 -2 56 -7 91 -13 89z" />
                                                                                                              <path d="M4458 5333 c28 -5 45 -44 33 -75 -5 -13 -28 -44 -51 -70 l-42 -48 56
0 c31 0 56 5 56 10 0 6 -19 10 -41 10 l-42 0 47 50 c25 27 46 58 46 70 0 27
-35 60 -62 59 l-23 -2 23 -4z" />
                                                                                                              <path d="M6443 5329 c28 -16 19 -78 -12 -80 -11 0 -8 -3 7 -10 19 -7 23 -15
20 -46 -2 -30 -8 -39 -28 -44 -21 -6 -21 -7 -5 -8 29 -1 65 26 65 49 0 11 -9
28 -20 38 -18 17 -19 20 -5 32 21 18 19 57 -4 70 -25 13 -42 13 -18 -1z" />
                                                                                                              <path d="M8996 5331 c-5 -8 -8 -40 -7 -72 l2 -58 -43 -4 -43 -4 43 -1 c34 -2
42 -6 42 -21 0 -11 -8 -22 -17 -24 -10 -3 2 -5 27 -5 25 0 37 2 28 5 -10 2
-18 13 -18 23 0 10 8 21 18 23 16 4 16 5 0 6 -14 1 -18 14 -20 74 -2 48 -6 67
-12 58z" />
                                                                                                              <path d="M11472 5285 c1 -43 2 -45 5 -12 3 30 8 37 26 37 44 0 51 18 8 22
l-41 4 2 -51z" />
                                                                                                              <path d="M1147 5306 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M360 5303 c0 -11 -7 -37 -15 -57 -15 -36 -13 -56 6 -56 6 0 7 5 4 11
-4 6 1 31 10 56 13 33 14 48 6 56 -8 8 -11 6 -11 -10z" />
                                                                                                              <path d="M1205 5310 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M11631 5308 c0 -9 -8 -24 -17 -32 -8 -9 -11 -16 -5 -16 6 0 11 -21
11 -49 0 -50 17 -78 42 -68 8 4 7 6 -4 6 -15 1 -18 11 -18 55 0 49 2 55 23 59
22 4 22 4 0 6 -16 1 -23 9 -26 29 -2 15 -5 19 -6 10z" />
                                                                                                              <path d="M2085 5298 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9
2 -4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                                                                                                              <path d="M3051 5298 c0 -9 -9 -22 -18 -27 -10 -6 -12 -11 -5 -11 8 0 12 -16
12 -44 0 -44 18 -76 43 -76 7 0 4 5 -5 11 -13 7 -18 23 -18 59 0 42 3 49 23
53 22 4 22 4 0 6 -14 1 -23 9 -26 24 -3 13 -5 16 -6 5z" />
                                                                                                              <path d="M6380 5295 c0 -9 5 -15 11 -13 6 2 11 8 11 13 0 5 -5 11 -11 13 -6 2
-11 -4 -11 -13z" />
                                                                                                              <path d="M9091 5298 c0 -9 -9 -22 -18 -27 -10 -6 -12 -11 -5 -11 8 0 12 -16
12 -44 0 -40 18 -76 38 -76 3 0 1 5 -6 12 -7 7 -12 33 -12 59 0 41 3 48 23 52
22 4 22 4 0 6 -14 1 -23 9 -26 24 -3 13 -5 16 -6 5z" />
                                                                                                              <path d="M1290 5289 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M2145 5290 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M4402 5288 c6 -18 28 -21 28 -4 0 9 -7 16 -16 16 -9 0 -14 -5 -12
-12z" />
                                                                                                              <path d="M2225 5260 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M2981 5254 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                                                                                                              <path d="M3399 5214 c2 -40 -1 -59 -10 -65 -9 -6 0 -8 26 -8 22 1 32 3 22 6
-15 4 -18 14 -17 51 3 64 2 72 -12 72 -9 0 -12 -16 -9 -56z" />
                                                                                                              <path d="M3456 5255 c4 -8 10 -12 15 -9 11 6 2 24 -11 24 -5 0 -7 -7 -4 -15z" />
                                                                                                              <path d="M3819 5214 c2 -40 -1 -59 -10 -65 -9 -6 0 -8 26 -8 22 1 32 3 23 6
-15 4 -18 16 -18 64 0 40 -4 59 -12 59 -9 0 -12 -16 -9 -56z" />
                                                                                                              <path d="M3866 5256 c3 -9 11 -16 16 -16 13 0 5 23 -10 28 -7 2 -10 -2 -6 -12z" />
                                                                                                              <path d="M4569 5214 c2 -40 -1 -59 -10 -65 -9 -6 -2 -8 21 -8 19 0 29 3 23 6
-9 3 -13 26 -13 64 0 40 -4 59 -12 59 -9 0 -12 -16 -9 -56z" />
                                                                                                              <path d="M4638 5263 c7 -3 12 -25 12 -58 0 -33 -5 -55 -12 -58 -7 -3 3 -5 22
-5 19 0 29 2 23 5 -8 3 -13 23 -13 52 0 46 -13 72 -34 70 -6 0 -5 -3 2 -6z" />
                                                                                                              <path d="M5138 5258 c7 -7 12 -33 12 -59 0 -37 -4 -49 -17 -52 -10 -3 0 -5 21
-6 36 -1 38 0 21 13 -14 10 -17 21 -12 50 7 45 0 66 -21 66 -12 0 -13 -3 -4
-12z" />
                                                                                                              <path d="M5196 5256 c3 -9 11 -16 16 -16 13 0 5 23 -10 28 -7 2 -10 -2 -6 -12z" />
                                                                                                              <path d="M5485 5256 c11 -8 16 -19 12 -30 -4 -10 -1 -16 8 -16 8 0 15 6 15 13
0 15 -31 47 -45 47 -5 0 0 -6 10 -14z" />
                                                                                                              <path d="M5559 5214 c2 -40 -1 -59 -10 -65 -9 -6 0 -8 26 -8 22 1 32 3 22 6
-15 4 -18 14 -17 51 2 67 1 72 -12 72 -9 0 -12 -16 -9 -56z" />
                                                                                                              <path d="M5616 5255 c4 -8 10 -12 15 -9 11 6 2 24 -11 24 -5 0 -7 -7 -4 -15z" />
                                                                                                              <path d="M6539 5214 c2 -40 -1 -59 -10 -65 -9 -6 0 -8 26 -8 22 1 32 3 23 6
-15 4 -18 16 -18 64 0 40 -4 59 -12 59 -9 0 -12 -16 -9 -56z" />
                                                                                                              <path d="M6586 5255 c4 -8 10 -15 15 -15 5 0 9 7 9 15 0 8 -7 15 -15 15 -9 0
-12 -6 -9 -15z" />
                                                                                                              <path d="M7069 5214 c2 -40 -1 -59 -10 -65 -9 -6 0 -8 26 -8 22 1 32 3 23 6
-15 4 -18 16 -18 64 0 40 -4 59 -12 59 -9 0 -12 -16 -9 -56z" />
                                                                                                              <path d="M7110 5266 c0 -2 7 -9 15 -16 12 -10 15 -10 15 4 0 9 -7 16 -15 16
-8 0 -15 -2 -15 -4z" />
                                                                                                              <path d="M7192 5250 c-12 -12 -22 -32 -22 -45 0 -25 31 -65 50 -65 6 0 1 9
-10 20 -11 11 -20 31 -20 45 0 14 9 34 20 45 26 26 10 26 -18 0z" />
                                                                                                              <path d="M7478 5258 c7 -7 12 -33 12 -59 0 -37 -4 -49 -17 -52 -10 -3 0 -5 21
-6 36 -1 38 0 21 13 -14 10 -17 21 -12 50 7 45 0 66 -21 66 -12 0 -13 -3 -4
-12z" />
                                                                                                              <path d="M7536 5256 c3 -9 11 -16 16 -16 13 0 5 23 -10 28 -7 2 -10 -2 -6 -12z" />
                                                                                                              <path d="M9268 5263 c7 -3 12 -25 12 -58 0 -33 -5 -55 -12 -58 -7 -3 3 -5 22
-5 19 0 29 2 23 5 -8 3 -13 23 -13 52 0 46 -13 72 -34 70 -6 0 -5 -3 2 -6z" />
                                                                                                              <path d="M9609 5214 c2 -40 -1 -59 -10 -65 -9 -6 0 -8 26 -8 22 1 32 3 23 6
-15 4 -18 16 -18 64 0 40 -4 59 -12 59 -9 0 -12 -16 -9 -56z" />
                                                                                                              <path d="M9650 5266 c0 -2 7 -9 15 -16 12 -10 15 -10 15 4 0 9 -7 16 -15 16
-8 0 -15 -2 -15 -4z" />
                                                                                                              <path d="M9890 5250 c-26 -26 -25 -62 1 -86 22 -19 22 -19 10 3 -15 28 -7 74
16 90 9 7 11 13 5 13 -7 0 -21 -9 -32 -20z" />
                                                                                                              <path d="M9955 5247 c8 -13 12 -27 8 -30 -3 -4 -1 -7 5 -7 17 0 15 26 -4 44
-22 23 -27 20 -9 -7z" />
                                                                                                              <path d="M10018 5258 c7 -7 12 -33 12 -59 0 -37 -4 -49 -17 -52 -10 -3 0 -5
21 -6 36 -1 38 0 21 13 -14 10 -17 21 -12 50 7 45 0 66 -21 66 -12 0 -13 -3
-4 -12z" />
                                                                                                              <path d="M10076 5256 c3 -9 11 -16 16 -16 13 0 5 23 -10 28 -7 2 -10 -2 -6
-12z" />
                                                                                                              <path d="M11808 5259 c6 -7 12 -34 12 -60 0 -37 -4 -49 -17 -52 -10 -3 0 -5
22 -6 32 0 36 2 23 10 -13 7 -18 23 -18 58 0 37 -4 50 -17 56 -15 5 -16 4 -5
-6z" />
                                                                                                              <path d="M12149 5214 c2 -40 -1 -59 -10 -65 -9 -6 0 -8 26 -8 22 1 32 3 23 6
-15 4 -18 16 -18 64 0 40 -4 59 -12 59 -9 0 -12 -16 -9 -56z" />
                                                                                                              <path d="M12196 5255 c4 -8 10 -15 15 -15 5 0 9 7 9 15 0 8 -7 15 -15 15 -9 0
-12 -6 -9 -15z" />
                                                                                                              <path d="M12272 5250 c-33 -31 -25 -89 15 -104 16 -6 16 -6 0 12 -23 25 -21
68 3 92 26 26 10 26 -18 0z" />
                                                                                                              <path d="M12430 5250 c-26 -26 -25 -62 1 -86 22 -19 22 -19 10 3 -15 28 -7 74
16 90 9 7 11 13 5 13 -7 0 -21 -9 -32 -20z" />
                                                                                                              <path d="M12495 5247 c8 -13 12 -27 8 -30 -3 -4 -1 -7 5 -7 17 0 15 26 -4 44
-22 23 -27 20 -9 -7z" />
                                                                                                              <path d="M12568 5211 c4 -51 2 -60 -14 -64 -11 -3 -1 -5 20 -6 36 -1 38 0 21
13 -14 10 -17 21 -12 50 6 38 1 66 -12 66 -4 0 -5 -27 -3 -59z" />
                                                                                                              <path d="M12616 5256 c3 -9 11 -16 16 -16 13 0 5 23 -10 28 -7 2 -10 -2 -6
-12z" />
                                                                                                              <path d="M2904 5245 c-8 -21 3 -34 39 -43 22 -6 33 -16 37 -33 5 -21 7 -22 13
-6 9 25 2 34 -41 55 -20 10 -36 24 -34 30 3 17 -8 15 -14 -3z" />
                                                                                                              <path d="M3247 5242 c-23 -25 -21 -55 4 -78 21 -19 21 -19 8 9 -10 22 -10 36
-2 58 13 34 12 35 -10 11z" />
                                                                                                              <path d="M3332 5232 c9 -24 9 -37 -1 -59 -13 -28 -13 -28 8 -9 26 24 27 58 1
81 -19 17 -19 17 -8 -13z" />
                                                                                                              <path d="M3516 5238 c-21 -29 -20 -41 4 -69 l20 -24 -11 31 c-6 21 -7 39 0 57
13 33 7 35 -13 5z" />
                                                                                                              <path d="M3676 5238 c-20 -29 -20 -41 2 -67 17 -22 17 -21 17 33 0 31 -1 56
-2 56 -1 0 -9 -10 -17 -22z" />
                                                                                                              <path d="M3754 5235 c0 -14 6 -25 13 -25 6 0 9 9 6 20 -8 30 -21 33 -19 5z" />
                                                                                                              <path d="M4726 5238 c-21 -29 -20 -41 4 -69 l20 -24 -11 31 c-6 21 -7 39 0 57
13 33 7 35 -13 5z" />
                                                                                                              <path d="M4992 5248 c-21 -27 -22 -55 -5 -77 18 -22 18 -21 18 33 0 31 -1 56
-1 56 -1 0 -6 -6 -12 -12z" />
                                                                                                              <path d="M5077 5223 c4 -27 1 -48 -7 -58 -15 -18 1 -20 18 -3 16 16 15 60 -2
84 -13 17 -14 15 -9 -23z" />
                                                                                                              <path d="M5262 5248 c-16 -16 -15 -73 1 -86 9 -8 12 2 12 44 0 30 0 54 0 54
-1 0 -6 -5 -13 -12z" />
                                                                                                              <path d="M5422 5248 c-23 -23 -8 -98 20 -98 7 0 7 4 -1 14 -7 8 -10 31 -7 55
5 45 5 46 -12 29z" />
                                                                                                              <path d="M6656 5244 c-9 -8 -16 -26 -16 -40 0 -24 31 -64 50 -64 6 0 1 9 -10
20 -22 22 -27 69 -8 88 7 7 9 12 6 12 -4 0 -14 -7 -22 -16z" />
                                                                                                              <path d="M6910 5241 c-17 -32 -12 -69 12 -85 12 -9 27 -16 32 -16 6 0 0 7 -13
16 -20 14 -23 23 -18 60 5 49 3 53 -13 25z" />
                                                                                                              <path d="M6995 5204 c0 -54 0 -55 18 -33 18 22 15 53 -7 76 -8 9 -11 -1 -11
-43z" />
                                                                                                              <path d="M7345 5236 c-12 -17 -13 -30 -6 -49 17 -44 26 -37 26 19 0 30 -1 54
-2 54 -2 0 -10 -11 -18 -24z" />
                                                                                                              <path d="M7424 5235 c0 -14 6 -25 13 -25 6 0 9 9 6 20 -8 30 -21 33 -19 5z" />
                                                                                                              <path d="M9450 5241 c-14 -27 -13 -66 3 -79 9 -8 12 2 12 44 0 30 -1 54 -2 54
-1 0 -7 -9 -13 -19z" />
                                                                                                              <path d="M9535 5204 c0 -54 0 -55 18 -33 18 22 15 53 -7 76 -8 9 -11 -1 -11
-43z" />
                                                                                                              <path d="M9722 5248 c-16 -16 -15 -73 1 -86 9 -8 12 2 12 44 0 30 0 54 0 54
-1 0 -6 -5 -13 -12z" />
                                                                                                              <path d="M11541 5232 c14 -42 0 -79 -33 -85 l-23 -4 23 -2 c26 -1 62 31 62 58
0 10 -9 29 -20 42 l-20 24 11 -33z" />
                                                                                                              <path d="M11990 5241 c-14 -27 -13 -66 3 -79 9 -8 12 2 12 44 0 30 -1 54 -2
54 -1 0 -7 -9 -13 -19z" />
                                                                                                              <path d="M12075 5204 c0 -54 0 -55 18 -33 18 22 15 53 -7 76 -8 9 -11 -1 -11
-43z" />
                                                                                                              <path d="M1279 5244 c6 -3 4 -19 -4 -38 -13 -30 -11 -46 4 -46 3 0 7 10 8 23
1 12 4 31 5 41 2 10 -3 20 -10 22 -7 1 -8 0 -3 -2z" />
                                                                                                              <path d="M1080 5220 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M2195 5210 c-4 -6 1 -7 11 -3 14 5 16 3 9 -13 -17 -41 -18 -64 -2
-64 8 0 21 8 28 18 11 14 11 15 -1 5 -22 -20 -30 -15 -20 13 6 14 10 32 10 40
0 16 -26 19 -35 4z" />
                                                                                                              <path d="M2020 5199 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M6375 5190 c-4 -6 -3 -16 3 -22 6 -6 12 -6 17 2 4 6 3 16 -3 22 -6 6
-12 6 -17 -2z" />
                                                                                                              <path d="M11455 5191 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z" />
                                                                                                              <path d="M2900 5164 c0 -14 4 -23 9 -20 5 3 7 15 4 26 -7 28 -13 25 -13 -6z" />
                                                                                                              <path d="M1760 5140 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0
-16 -4 -16 -10z" />
                                                                                                              <path d="M3718 5143 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
                                                                                                              <path d="M7388 5143 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
                                                                                                              <path d="M9488 5143 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
                                                                                                              <path d="M1940 4825 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M2313 4963 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M310 4944 c-18 -21 -17 -131 1 -149 12 -12 14 -2 14 75 0 50 -1 90
-1 90 -1 0 -7 -7 -14 -16z" />
                                                                                                              <path d="M385 4870 c0 -93 8 -105 25 -40 8 28 8 52 0 80 -17 65 -25 53 -25
-40z" />
                                                                                                              <path d="M1843 4948 c-6 -7 -13 -25 -17 -40 -3 -14 -14 -29 -24 -31 -16 -4
-16 -5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -76 -6 -32 -13 -64 -17
-70 -3 -7 1 -4 10 6 8 10 20 50 27 88 10 59 15 69 33 70 17 1 18 2 4 6 -20 5
-22 20 -8 57 10 28 8 33 -7 14z" />
                                                                                                              <path d="M1873 4938 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                                                                                                              <path d="M1127 4898 c9 -11 10 -24 2 -52 -9 -31 -8 -41 5 -54 13 -14 14 -13
10 5 -3 11 -1 37 4 57 9 32 8 37 -11 48 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M1190 4890 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M1246 4858 c-30 -43 -9 -118 34 -118 24 0 50 37 50 70 0 33 -26 70
-50 70 -10 0 -26 -10 -34 -22z m59 -48 c0 -52 -1 -55 -25 -55 -22 0 -25 5 -28
44 -4 57 3 73 30 69 21 -3 23 -9 23 -58z" />
                                                                                                              <path d="M2065 4868 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9
2 -4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                                                                                                              <path d="M2520 4865 c0 -17 322 -137 334 -125 6 6 4 11 -5 14 -8 3 -85 32
-171 65 -103 38 -158 54 -158 46z" />
                                                                                                              <path d="M2125 4860 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M2186 4834 c-9 -9 -16 -32 -16 -54 0 -41 20 -70 49 -70 28 0 41 21
41 70 0 66 -36 92 -74 54z m59 -24 c4 -16 4 -44 0 -61 -5 -24 -11 -29 -28 -27
-18 2 -23 11 -25 47 -4 54 2 71 27 71 13 0 21 -9 26 -30z" />
                                                                                                              <path d="M1070 4799 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M2000 4769 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M1750 4709 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M3000 4445 c0 -132 2 -145 18 -144 10 0 12 3 5 6 -10 3 -13 41 -13
138 0 97 3 135 13 138 7 3 5 6 -5 6 -16 1 -18 -12 -18 -144z" />
                                                                                                              <path d="M3803 4583 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M2919 4574 c6 -3 7 -12 4 -20 -3 -8 0 -14 7 -14 15 0 9 33 -8 36 -7
1 -8 0 -3 -2z" />
                                                                                                              <path d="M2883 4539 c-3 -17 -12 -33 -20 -36 -11 -4 -12 -8 -3 -13 9 -6 8 -26
-4 -85 -9 -43 -14 -80 -12 -82 6 -7 25 56 32 109 5 38 12 52 28 58 18 7 18 9
3 9 -15 1 -17 7 -11 36 3 19 3 35 0 35 -4 0 -9 -14 -13 -31z" />
                                                                                                              <path d="M3117 4476 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M3555 4488 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9
2 -4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                                                                                                              <path d="M3175 4480 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M3615 4480 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M3236 4448 c-30 -43 -9 -118 34 -118 24 0 50 37 50 70 0 33 -26 70
-50 70 -10 0 -26 -10 -34 -22z m59 -48 c0 -52 -1 -55 -25 -55 -22 0 -25 5 -28
44 -4 57 3 73 30 69 21 -3 23 -9 23 -58z" />
                                                                                                              <path d="M3685 4459 c-17 -6 -17 -8 -2 -8 14 -1 17 -11 17 -55 0 -44 -4 -55
-17 -59 -10 -3 0 -5 22 -5 22 0 32 2 23 5 -13 3 -18 18 -20 67 -3 59 -4 63
-23 55z" />
                                                                                                              <path d="M3996 4401 c-3 -5 58 -46 136 -91 164 -94 152 -88 158 -76 5 9 -52
45 -224 141 -36 20 -67 32 -70 26z" />
                                                                                                              <path d="M3050 4390 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M3372 4389 c2 -7 10 -15 17 -17 8 -3 12 1 9 9 -2 7 -10 15 -17 17 -8
3 -12 -1 -9 -9z" />
                                                                                                              <path d="M3490 4389 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M2800 4330 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M2677 4200 c-82 -21 -151 -41 -154 -44 -24 -24 58 -9 300 55 21 5 35
14 32 19 -8 14 -11 13 -178 -30z" />
                                                                                                              <path d="M355 4113 c-6 -2 -9 -39 -7 -92 3 -87 3 -90 -20 -94 -13 -2 0 -4 27
-4 28 -1 42 1 33 4 -15 4 -18 19 -20 97 -2 56 -7 91 -13 89z" />
                                                                                                              <path d="M1940 3975 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M2313 4113 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M4470 3975 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M5713 4113 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M1842 4097 c-6 -6 -13 -24 -17 -39 -4 -15 -14 -29 -23 -31 -15 -4
-14 -5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -76 -6 -32 -13 -64 -17
-70 -3 -7 1 -4 10 6 8 10 20 50 27 88 10 59 15 69 33 70 17 1 18 2 4 6 -20 5
-22 20 -8 57 10 29 8 33 -8 13z" />
                                                                                                              <path d="M1873 4088 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                                                                                                              <path d="M4372 4097 c-6 -6 -13 -24 -17 -39 -4 -15 -14 -29 -23 -31 -15 -4
-14 -5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -77 -6 -32 -14 -64 -18
-70 -5 -7 -1 -4 9 6 9 10 22 49 29 88 10 60 15 70 33 71 17 1 18 2 4 6 -20 5
-22 20 -8 57 10 29 8 33 -8 13z" />
                                                                                                              <path d="M4403 4088 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                                                                                                              <path d="M1127 4048 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M1190 4040 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M1265 4019 c-11 -4 -14 -8 -7 -8 8 -1 12 -19 12 -55 0 -34 -5 -56
-12 -59 -7 -3 5 -5 27 -5 22 0 32 2 23 5 -13 3 -18 18 -20 67 -3 59 -4 63 -23
55z" />
                                                                                                              <path d="M2059 4021 c11 -7 12 -17 3 -52 -9 -36 -9 -47 4 -59 13 -13 14 -13 9
2 -4 9 -2 33 4 54 11 39 2 64 -23 64 -6 0 -5 -4 3 -9z" />
                                                                                                              <path d="M2520 4017 c0 -10 320 -137 328 -129 11 10 -8 21 -84 50 -222 84
-244 91 -244 79z" />
                                                                                                              <path d="M5027 4018 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M5467 4006 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M2125 4010 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M4593 3973 c-11 -49 -4 -73 21 -73 6 0 5 4 -3 9 -11 7 -12 17 -3 52
6 24 8 47 3 52 -4 4 -12 -14 -18 -40z" />
                                                                                                              <path d="M4655 4010 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M5090 4010 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M5525 4010 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M2200 3989 c-16 -4 -19 -7 -7 -8 14 -1 17 -11 17 -55 0 -44 -4 -55
-17 -59 -10 -3 0 -5 22 -6 22 0 35 3 28 7 -7 4 -13 35 -15 68 -3 59 -4 60 -28
53z" />
                                                                                                              <path d="M4716 3984 c-9 -9 -16 -32 -16 -54 0 -57 45 -91 78 -58 16 16 16 100
0 116 -17 17 -44 15 -62 -4z m59 -24 c4 -16 4 -44 0 -61 -5 -24 -11 -29 -28
-27 -18 2 -23 11 -25 47 -4 54 2 71 27 71 13 0 21 -9 26 -30z" />
                                                                                                              <path d="M5165 3989 c-11 -4 -14 -8 -7 -8 8 -1 12 -19 12 -55 0 -34 -5 -56
-12 -59 -7 -3 5 -5 27 -5 22 0 32 2 23 5 -13 3 -18 18 -20 67 -3 59 -4 63 -23
55z" />
                                                                                                              <path d="M5618 3990 c33 -14 27 -49 -15 -92 l-37 -38 47 0 c32 0 47 4 47 13 0
9 -10 12 -32 9 l-33 -4 33 32 c45 44 39 91 -12 89 -20 0 -20 -1 2 -9z" />
                                                                                                              <path d="M5577 3983 c-10 -10 -8 -33 2 -33 6 0 9 9 8 20 -1 23 -1 22 -10 13z" />
                                                                                                              <path d="M5904 3978 c-3 -5 -4 -11 -3 -12 2 -2 96 -39 209 -84 130 -52 208
-78 214 -72 6 6 1 13 -15 19 -13 5 -108 43 -211 84 -109 43 -190 71 -194 65z" />
                                                                                                              <path d="M1070 3949 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M2000 3919 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4530 3919 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4850 3916 c0 -9 7 -16 16 -16 9 0 14 5 12 12 -6 18 -28 21 -28 4z" />
                                                                                                              <path d="M4970 3919 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M5287 3924 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
                                                                                                              <path d="M5400 3920 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M1750 3859 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4280 3859 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4137 3732 c-86 -49 -144 -89 -139 -94 5 -5 69 26 153 73 168 96 155
87 143 98 -5 4 -74 -29 -157 -77z" />
                                                                                                              <path d="M3000 3595 c0 -132 2 -145 18 -144 10 0 12 3 5 6 -10 3 -13 41 -13
138 0 97 3 135 13 138 7 3 5 6 -5 6 -16 1 -18 -12 -18 -144z" />
                                                                                                              <path d="M3803 3733 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M2919 3724 c6 -3 7 -12 4 -20 -3 -8 0 -14 7 -14 15 0 9 33 -8 36 -7
1 -8 0 -3 -2z" />
                                                                                                              <path d="M2883 3689 c-3 -17 -12 -33 -20 -36 -11 -4 -12 -8 -3 -13 9 -6 8 -26
-4 -85 -9 -43 -14 -80 -12 -82 6 -7 25 56 32 109 5 38 12 52 28 58 18 7 18 9
3 9 -15 1 -17 7 -11 36 3 19 3 35 0 35 -4 0 -9 -14 -13 -31z" />
                                                                                                              <path d="M6200 3555 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M7878 3693 c9 -3 12 -41 12 -138 0 -97 -3 -135 -12 -138 -8 -3 -6 -6
5 -6 15 -1 17 12 17 144 0 132 -2 145 -17 144 -11 0 -13 -3 -5 -6z" />
                                                                                                              <path d="M6096 3668 c-9 -12 -16 -30 -16 -40 0 -10 -7 -18 -17 -18 -14 0 -15
-2 -4 -9 11 -7 11 -20 2 -75 -6 -36 -14 -73 -18 -83 -4 -10 -2 -14 4 -10 10 6
21 46 38 134 4 18 14 34 23 36 15 4 15 5 1 6 -12 1 -15 8 -11 29 2 15 9 33 15
40 5 6 7 12 4 12 -3 0 -13 -10 -21 -22z" />
                                                                                                              <path d="M6126 3671 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z" />
                                                                                                              <path d="M3117 3626 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M3549 3641 c11 -7 12 -17 3 -52 -11 -44 -3 -69 22 -69 6 0 5 4 -3 9
-11 7 -12 17 -3 52 11 44 3 69 -22 69 -6 0 -5 -4 3 -9z" />
                                                                                                              <path d="M3175 3630 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M3615 3630 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M3255 3609 c-11 -4 -14 -8 -7 -8 8 -1 12 -19 12 -55 0 -34 -5 -56
-12 -59 -7 -3 5 -5 27 -5 22 0 32 2 23 5 -13 3 -18 18 -20 67 -3 59 -4 63 -23
55z" />
                                                                                                              <path d="M3672 3608 c-15 -15 -16 -38 -2 -38 6 0 10 8 8 18 -2 12 4 17 22 17
34 0 38 -29 9 -69 l-22 -31 31 29 c36 33 39 47 16 70 -18 19 -45 21 -62 4z" />
                                                                                                              <path d="M6325 3598 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9
2 -4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                                                                                                              <path d="M6757 3586 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M7189 3601 c11 -7 12 -17 3 -52 -9 -36 -9 -47 4 -59 13 -13 14 -13 9
2 -4 9 -2 33 4 54 11 39 2 64 -23 64 -6 0 -5 -4 3 -9z" />
                                                                                                              <path d="M7627 3598 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M6385 3590 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M6815 3590 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M7255 3590 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M7690 3590 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M8100 3593 c0 -14 541 -216 550 -207 9 9 -509 215 -537 214 -7 0 -13
-3 -13 -7z" />
                                                                                                              <path d="M6442 3568 c-18 -18 -15 -103 3 -118 9 -7 18 -10 22 -6 3 3 1 6 -5 6
-15 0 -25 54 -17 91 5 24 11 29 28 27 19 -3 22 -11 25 -51 2 -27 -2 -55 -9
-63 -16 -19 -4 -18 15 2 9 9 16 32 16 54 0 57 -45 91 -78 58z" />
                                                                                                              <path d="M6890 3569 c-16 -4 -19 -7 -7 -8 14 -1 17 -11 17 -55 0 -44 -4 -55
-17 -59 -10 -3 0 -5 22 -6 22 0 35 3 28 7 -7 4 -13 35 -15 68 -3 59 -4 60 -28
53z" />
                                                                                                              <path d="M7348 3570 c33 -14 27 -49 -15 -92 l-37 -38 47 0 c32 0 47 4 47 13 0
9 -10 12 -32 9 l-33 -4 33 32 c45 44 39 91 -12 89 -20 0 -20 -1 2 -9z" />
                                                                                                              <path d="M7752 3568 c-15 -15 -16 -28 -2 -28 6 0 10 7 10 15 0 8 9 15 20 15
15 0 20 -7 20 -25 0 -14 -5 -25 -12 -25 -6 0 -4 -6 6 -13 24 -18 17 -49 -14
-59 -24 -7 -24 -7 4 -5 39 3 57 31 34 53 -13 13 -14 21 -6 34 24 38 -28 70
-60 38z" />
                                                                                                              <path d="M7307 3563 c-10 -10 -8 -33 2 -33 6 0 9 9 8 20 -1 23 -1 22 -10 13z" />
                                                                                                              <path d="M3996 3552 c-7 -11 285 -175 295 -165 5 5 -53 44 -135 91 -150 86
-152 87 -160 74z" />
                                                                                                              <path d="M3050 3540 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M3372 3539 c2 -7 10 -15 17 -17 8 -3 12 1 9 9 -2 7 -10 15 -17 17 -8
3 -12 -1 -9 -9z" />
                                                                                                              <path d="M3490 3539 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M3740 3512 c0 -7 -15 -12 -34 -12 -19 0 -38 -4 -41 -10 -4 -6 10 -10
33 -10 28 0 42 5 46 16 4 9 4 19 1 22 -3 3 -5 0 -5 -6z" />
                                                                                                              <path d="M6260 3499 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M6577 3504 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
                                                                                                              <path d="M6690 3500 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M7012 3499 c2 -7 10 -15 17 -17 8 -3 12 1 9 9 -2 7 -10 15 -17 17 -8
3 -12 -1 -9 -9z" />
                                                                                                              <path d="M7130 3499 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M7450 3496 c0 -9 7 -16 16 -16 9 0 14 5 12 12 -6 18 -28 21 -28 4z" />
                                                                                                              <path d="M7570 3499 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M2800 3480 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M7740 3464 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0
-10 -7 -10 -16z" />
                                                                                                              <path d="M6000 3440 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0
-16 -4 -16 -10z" />
                                                                                                              <path d="M2671 3351 c-87 -22 -146 -42 -149 -50 -3 -9 1 -12 9 -9 8 3 85 22
171 44 86 21 154 42 152 46 -8 12 -28 9 -183 -31z" />
                                                                                                              <path d="M6105 3309 c-110 -45 -202 -83 -204 -85 -2 -2 -1 -7 2 -11 9 -8 427
157 427 169 0 15 -25 7 -225 -73z" />
                                                                                                              <path d="M348 3273 c57 -11 50 -82 -14 -144 -19 -18 -34 -37 -34 -41 0 -4 25
-8 55 -8 38 0 55 4 55 13 0 8 -14 11 -47 9 l-48 -4 48 49 c32 33 47 57 47 75
0 30 -33 59 -65 57 -17 -2 -17 -2 3 -6z" />
                                                                                                              <path d="M1940 3135 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M2313 3273 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M4470 3135 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M5713 3273 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M8520 3135 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M10638 3273 c9 -3 12 -41 12 -138 0 -97 -3 -135 -12 -138 -8 -3 -6
-6 5 -6 15 -1 17 12 17 144 0 132 -2 145 -17 144 -11 0 -13 -3 -5 -6z" />
                                                                                                              <path d="M1843 3258 c-6 -7 -13 -25 -17 -40 -3 -14 -14 -29 -24 -31 -16 -4
-16 -5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -77 -6 -32 -14 -64 -18
-70 -5 -7 -1 -4 9 6 9 10 22 49 29 88 10 60 15 70 33 71 17 1 18 2 4 6 -20 5
-22 20 -8 57 10 28 8 33 -7 14z" />
                                                                                                              <path d="M1873 3248 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                                                                                                              <path d="M4373 3258 c-6 -7 -13 -25 -17 -40 -3 -14 -14 -29 -24 -31 -16 -4
-16 -5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -76 -6 -32 -13 -64 -17
-70 -3 -7 1 -4 10 6 8 10 20 50 27 88 10 59 15 69 33 70 17 1 18 2 4 6 -20 5
-22 20 -8 57 10 28 8 33 -7 14z" />
                                                                                                              <path d="M4403 3248 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                                                                                                              <path d="M8423 3258 c-6 -7 -13 -25 -17 -40 -3 -14 -14 -29 -24 -31 -16 -4
-16 -5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -77 -6 -32 -14 -64 -18
-70 -5 -7 -1 -4 9 6 9 10 22 49 29 88 10 60 15 70 33 71 17 1 18 2 4 6 -20 5
-22 20 -8 57 10 28 8 33 -7 14z" />
                                                                                                              <path d="M8453 3248 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                                                                                                              <path d="M300 3231 c0 -11 4 -21 9 -21 18 0 21 18 6 30 -13 10 -15 9 -15 -9z" />
                                                                                                              <path d="M1127 3208 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M1190 3200 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M1275 3183 c20 -5 35 -21 35 -35 0 -5 -16 -25 -35 -47 -19 -21 -35
-41 -35 -45 0 -3 18 -6 40 -6 22 0 40 5 40 10 0 6 -14 10 -31 10 l-30 0 37 35
c34 33 36 36 22 57 -9 13 -26 24 -39 25 -19 1 -20 1 -4 -4z" />
                                                                                                              <path d="M2059 3181 c11 -7 12 -17 3 -52 -9 -36 -9 -47 4 -59 13 -13 14 -13 9
2 -4 9 -2 33 4 54 11 39 2 64 -23 64 -6 0 -5 -4 3 -9z" />
                                                                                                              <path d="M4589 3181 c11 -7 12 -17 3 -52 -9 -36 -9 -47 4 -59 13 -13 14 -13 9
2 -4 9 -2 33 4 54 11 39 2 64 -23 64 -6 0 -5 -4 3 -9z" />
                                                                                                              <path d="M5027 3178 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M5467 3166 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M8647 3166 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M9077 3178 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M9517 3166 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M9949 3181 c11 -7 12 -17 3 -52 -9 -36 -9 -47 4 -59 13 -13 14 -13 9
2 -4 9 -2 33 4 54 11 39 2 64 -23 64 -6 0 -5 -4 3 -9z" />
                                                                                                              <path d="M10387 3166 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M1237 3165 c-4 -8 -2 -17 3 -20 6 -4 10 3 10 14 0 25 -6 27 -13 6z" />
                                                                                                              <path d="M2125 3170 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M2516 3172 c-7 -12 325 -135 336 -124 7 7 -154 72 -318 129 -7 3 -15
0 -18 -5z" />
                                                                                                              <path d="M4655 3170 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M5090 3170 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M5525 3170 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M8705 3170 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M9140 3170 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M9575 3170 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M10015 3170 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3
0 -8 -4 -11 -10z" />
                                                                                                              <path d="M10445 3170 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3
0 -8 -4 -11 -10z" />
                                                                                                              <path d="M10980 3170 c0 -16 418 -221 426 -209 3 6 4 12 3 14 -10 9 -410 205
-419 205 -5 0 -10 -4 -10 -10z" />
                                                                                                              <path d="M2218 3140 c33 -14 27 -49 -15 -92 l-37 -38 47 0 c32 0 47 4 47 13 0
9 -10 12 -32 9 l-33 -4 33 32 c45 44 39 91 -12 89 -20 0 -20 -1 2 -9z" />
                                                                                                              <path d="M4730 3139 c-16 -4 -19 -7 -7 -8 14 -1 17 -11 17 -55 0 -44 -4 -55
-17 -59 -10 -3 0 -5 22 -6 22 0 35 3 28 7 -7 4 -13 35 -15 68 -3 59 -4 60 -28
53z" />
                                                                                                              <path d="M5175 3143 c20 -5 35 -21 35 -35 0 -5 -16 -25 -35 -47 -19 -21 -35
-41 -35 -45 0 -3 18 -6 40 -6 22 0 40 5 40 10 0 6 -14 10 -31 10 l-30 0 37 35
c34 33 36 36 22 57 -9 13 -26 24 -39 25 -19 1 -20 1 -4 -4z" />
                                                                                                              <path d="M5587 3143 c-11 -10 -8 -35 3 -28 6 4 8 11 5 16 -4 5 3 9 15 9 27 0
38 -29 16 -45 -14 -11 -15 -13 -1 -19 8 -3 15 -17 15 -31 0 -20 -5 -25 -25
-25 -16 0 -25 6 -25 15 0 8 -4 15 -10 15 -15 0 -12 -16 4 -30 35 -28 93 11 69
48 -7 12 -8 24 -1 36 6 12 6 22 -2 32 -13 14 -51 19 -63 7z" />
                                                                                                              <path d="M8766 3134 c-9 -9 -16 -32 -16 -54 0 -57 45 -91 78 -58 18 18 15 103
-3 118 -9 7 -18 10 -22 6 -3 -3 -1 -6 5 -6 15 0 25 -54 17 -91 -5 -24 -11 -29
-28 -27 -19 3 -22 11 -25 51 -2 27 2 55 9 63 16 19 4 18 -15 -2z" />
                                                                                                              <path d="M9215 3139 c-11 -4 -14 -8 -7 -8 8 -1 12 -19 12 -55 0 -34 -5 -56
-12 -59 -7 -3 5 -5 27 -5 22 0 32 2 23 5 -13 3 -18 18 -20 67 -3 59 -4 63 -23
55z" />
                                                                                                              <path d="M9668 3140 c33 -14 27 -49 -15 -92 l-37 -38 47 0 c32 0 47 4 47 13 0
9 -10 12 -32 9 l-33 -4 33 32 c45 44 39 91 -12 89 -20 0 -20 -1 2 -9z" />
                                                                                                              <path d="M10077 3143 c-11 -10 -8 -35 3 -28 6 4 8 11 5 16 -4 5 3 9 15 9 27 0
38 -29 16 -45 -14 -11 -15 -13 -1 -19 8 -3 15 -17 15 -31 0 -20 -5 -25 -25
-25 -16 0 -25 6 -25 15 0 8 -4 15 -10 15 -15 0 -12 -16 4 -30 35 -28 93 11 69
48 -7 12 -8 24 -1 36 6 12 6 22 -2 32 -13 14 -51 19 -63 7z" />
                                                                                                              <path d="M10556 3140 c-6 -8 -9 -31 -7 -52 2 -35 0 -38 -24 -38 -17 0 -24 4
-19 12 4 7 3 8 -4 4 -22 -13 -12 -26 18 -26 30 0 41 -14 18 -23 -7 -3 3 -6 22
-6 26 -1 31 2 20 9 -13 9 -13 11 0 20 9 6 10 10 3 10 -7 0 -13 20 -15 53 -2
37 -6 48 -12 37z" />
                                                                                                              <path d="M2177 3133 c-10 -10 -8 -33 2 -33 6 0 9 9 8 20 -1 23 -1 22 -10 13z" />
                                                                                                              <path d="M5137 3125 c-4 -8 -2 -17 3 -20 6 -4 10 3 10 14 0 25 -6 27 -13 6z" />
                                                                                                              <path d="M5905 3130 c-4 -6 4 -14 17 -19 13 -5 107 -43 210 -84 104 -41 190
-71 193 -67 3 5 2 11 -2 13 -7 4 -188 77 -365 148 -29 11 -50 15 -53 9z" />
                                                                                                              <path d="M9627 3133 c-10 -10 -8 -33 2 -33 6 0 9 9 8 20 -1 23 -1 22 -10 13z" />
                                                                                                              <path d="M1070 3109 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M2000 3079 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4530 3079 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4850 3076 c0 -9 7 -16 16 -16 9 0 14 5 12 12 -6 18 -28 21 -28 4z" />
                                                                                                              <path d="M4970 3079 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M5287 3084 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
                                                                                                              <path d="M5400 3080 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M8580 3080 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M8900 3076 c0 -9 7 -16 16 -16 9 0 14 5 12 12 -6 18 -28 21 -28 4z" />
                                                                                                              <path d="M9020 3079 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M9337 3084 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
                                                                                                              <path d="M9450 3080 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M9772 3079 c2 -7 10 -15 17 -17 8 -3 12 1 9 9 -2 7 -10 15 -17 17 -8
3 -12 -1 -9 -9z" />
                                                                                                              <path d="M9890 3079 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M10207 3084 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
                                                                                                              <path d="M10320 3080 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5
0 -10 -4 -10 -10z" />
                                                                                                              <path d="M1750 3019 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4280 3019 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M8330 3019 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4143 2889 c-83 -47 -143 -87 -143 -96 0 -12 6 -11 33 5 17 11 85 50
150 87 64 37 115 71 111 76 -3 5 -6 9 -7 9 -1 0 -66 -37 -144 -81z" />
                                                                                                              <path d="M3000 2755 c0 -132 2 -145 18 -144 10 0 12 3 5 6 -10 3 -13 41 -13
138 0 97 3 135 13 138 7 3 5 6 -5 6 -16 1 -18 -12 -18 -144z" />
                                                                                                              <path d="M3803 2893 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M2919 2884 c6 -3 7 -12 4 -20 -3 -8 0 -14 7 -14 15 0 9 33 -8 36 -7
1 -8 0 -3 -2z" />
                                                                                                              <path d="M8395 2829 c-137 -32 -261 -61 -274 -64 -14 -4 -20 -10 -15 -15 7 -7
529 104 543 116 1 1 1 7 0 12 -2 4 -116 -18 -254 -49z" />
                                                                                                              <path d="M2883 2849 c-3 -17 -12 -33 -20 -36 -11 -4 -12 -8 -3 -13 9 -6 8 -26
-4 -85 -9 -43 -14 -80 -12 -82 6 -7 25 56 32 109 5 38 12 52 28 58 18 7 18 9
3 9 -15 1 -17 7 -11 36 3 19 3 35 0 35 -4 0 -9 -14 -13 -31z" />
                                                                                                              <path d="M6200 2705 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M7878 2843 c9 -3 12 -41 12 -138 0 -97 -3 -135 -12 -138 -8 -3 -6 -6
5 -6 15 -1 17 12 17 144 0 132 -2 145 -17 144 -11 0 -13 -3 -5 -6z" />
                                                                                                              <path d="M10850 2705 c0 -132 2 -145 18 -144 10 0 12 3 5 6 -10 3 -13 41 -13
138 0 97 3 135 13 138 7 3 5 6 -5 6 -16 1 -18 -12 -18 -144z" />
                                                                                                              <path d="M13393 2843 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M6096 2818 c-9 -12 -16 -30 -16 -40 0 -10 -7 -18 -17 -18 -15 0 -15
-2 -4 -9 13 -8 13 -20 3 -75 -7 -36 -15 -73 -19 -82 -4 -11 -2 -15 4 -11 10 6
21 46 38 134 4 18 14 34 23 36 15 4 15 5 1 6 -12 1 -15 8 -11 29 2 15 9 33 15
40 5 6 7 12 4 12 -3 0 -13 -10 -21 -22z" />
                                                                                                              <path d="M10769 2834 c6 -3 7 -12 4 -20 -3 -8 0 -14 7 -14 15 0 9 33 -8 36 -7
1 -8 0 -3 -2z" />
                                                                                                              <path d="M6126 2821 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4
-12 2 -15 -3z" />
                                                                                                              <path d="M10733 2799 c-3 -17 -12 -33 -20 -36 -11 -4 -12 -8 -3 -13 9 -6 8
-26 -4 -85 -9 -43 -14 -80 -12 -82 6 -7 25 56 32 109 5 38 12 52 28 58 18 7
18 9 3 9 -15 1 -17 7 -11 36 3 19 3 35 0 35 -4 0 -9 -14 -13 -31z" />
                                                                                                              <path d="M3117 2786 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M3549 2801 c11 -7 12 -17 3 -52 -9 -36 -9 -47 4 -59 13 -13 14 -13 9
2 -4 9 -2 33 4 54 11 39 2 64 -23 64 -6 0 -5 -4 3 -9z" />
                                                                                                              <path d="M3175 2790 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M3615 2790 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M3269 2758 c36 -19 36 -33 -3 -76 -20 -22 -36 -42 -36 -46 0 -3 18
-6 40 -6 22 0 40 5 40 10 0 6 -14 10 -31 10 l-30 0 37 35 c34 33 36 36 22 57
-9 13 -26 24 -39 26 l-24 3 24 -13z" />
                                                                                                              <path d="M3672 2758 c-15 -15 -16 -28 -2 -28 6 0 10 7 10 15 0 8 9 15 20 15
15 0 20 -7 20 -25 0 -14 -5 -25 -12 -25 -6 0 -4 -6 6 -13 24 -18 17 -49 -14
-59 -24 -7 -24 -7 4 -5 40 3 56 30 32 55 -11 13 -14 22 -7 27 16 10 13 42 -5
49 -24 9 -39 7 -52 -6z" />
                                                                                                              <path d="M3227 2745 c-4 -8 -2 -17 3 -20 6 -4 10 3 10 14 0 25 -6 27 -13 6z" />
                                                                                                              <path d="M6325 2748 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9
2 -4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                                                                                                              <path d="M6757 2736 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M7195 2748 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9
2 -4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                                                                                                              <path d="M7627 2748 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M10966 2743 c3 -11 1 -37 -4 -57 -9 -32 -8 -37 11 -48 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 41 -5 54 -13 14 -14 13 -10 -5z" />
                                                                                                              <path d="M11399 2751 c11 -7 12 -17 3 -52 -11 -44 -3 -69 22 -69 6 0 5 4 -3 9
-11 7 -12 17 -3 52 11 44 3 69 -22 69 -6 0 -5 -4 3 -9z" />
                                                                                                              <path d="M11837 2748 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M12275 2748 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9
2 -4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                                                                                                              <path d="M12707 2748 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M13147 2736 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M6385 2740 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M6815 2740 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M7255 2740 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M7690 2740 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M11025 2740 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3
0 -8 -4 -11 -10z" />
                                                                                                              <path d="M11465 2740 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3
0 -8 -4 -11 -10z" />
                                                                                                              <path d="M11900 2740 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5
0 -10 -4 -10 -10z" />
                                                                                                              <path d="M12335 2740 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3
0 -8 -4 -11 -10z" />
                                                                                                              <path d="M12770 2740 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5
0 -10 -4 -10 -10z" />
                                                                                                              <path d="M13205 2740 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3
0 -8 -4 -11 -10z" />
                                                                                                              <path d="M6455 2719 c-17 -6 -17 -8 -2 -8 14 -1 17 -11 17 -55 0 -44 -4 -55
-17 -59 -10 -3 0 -5 22 -5 22 0 32 2 23 5 -13 3 -18 18 -20 67 -3 59 -4 63
-23 55z" />
                                                                                                              <path d="M6908 2720 c33 -14 27 -49 -15 -92 l-37 -38 47 0 c32 0 47 4 47 13 0
9 -10 12 -32 9 l-33 -4 33 32 c45 44 39 91 -12 89 -20 0 -20 -1 2 -9z" />
                                                                                                              <path d="M7317 2723 c-11 -10 -8 -33 4 -33 6 0 9 7 5 15 -4 10 1 15 15 15 27
0 37 -30 15 -45 -14 -11 -15 -13 -1 -19 8 -3 15 -17 15 -31 0 -20 -5 -25 -25
-25 -16 0 -25 6 -25 15 0 8 -4 15 -10 15 -15 0 -12 -16 4 -30 35 -28 93 11 69
48 -7 12 -8 24 -1 36 6 12 6 22 -2 32 -13 14 -51 19 -63 7z" />
                                                                                                              <path d="M7796 2720 c-6 -8 -9 -31 -7 -52 2 -35 1 -37 -31 -41 l-33 -4 33 -1
c32 -2 43 -16 20 -25 -7 -3 3 -6 22 -6 26 -1 31 2 20 9 -13 9 -13 11 0 20 9 6
10 10 3 10 -7 0 -13 20 -15 53 -2 37 -6 48 -12 37z" />
                                                                                                              <path d="M11086 2708 c-30 -43 -9 -118 34 -118 24 0 50 37 50 70 0 33 -26 70
-50 70 -10 0 -26 -10 -34 -22z m59 -48 c0 -52 -1 -55 -25 -55 -22 0 -25 5 -28
44 -4 57 3 73 30 69 21 -3 23 -9 23 -58z" />
                                                                                                              <path d="M11535 2719 c-17 -6 -17 -8 -2 -8 14 -1 17 -11 17 -55 0 -44 -4 -55
-17 -59 -10 -3 0 -5 22 -5 22 0 32 2 23 5 -13 3 -18 18 -20 67 -3 59 -4 63
-23 55z" />
                                                                                                              <path d="M11989 2718 c36 -19 36 -33 -3 -76 -20 -22 -36 -42 -36 -46 0 -3 18
-6 40 -6 22 0 40 5 40 10 0 6 -14 10 -31 10 l-30 0 37 35 c34 33 36 36 22 57
-9 13 -26 24 -39 26 l-24 3 24 -13z" />
                                                                                                              <path d="M12392 2718 c-15 -15 -16 -28 -2 -28 6 0 10 7 10 15 0 8 9 15 20 15
15 0 20 -7 20 -25 0 -14 -5 -25 -12 -25 -6 0 -4 -6 6 -13 24 -18 17 -49 -14
-59 -24 -7 -24 -7 4 -5 40 3 56 30 32 55 -11 13 -14 22 -7 27 16 10 13 42 -5
49 -24 9 -39 7 -52 -6z" />
                                                                                                              <path d="M12878 2724 c-5 -4 -8 -27 -8 -50 0 -41 -2 -43 -32 -47 l-33 -4 33
-1 c32 -2 43 -16 20 -25 -7 -3 3 -6 22 -6 26 -1 31 2 20 9 -13 9 -13 11 0 20
9 6 10 10 3 10 -7 0 -13 20 -15 51 -2 28 -6 47 -10 43z" />
                                                                                                              <path d="M4000 2707 c0 -11 137 -96 282 -174 4 -2 9 1 12 6 4 5 -47 39 -111
76 -65 37 -133 76 -150 87 -27 16 -33 17 -33 5z" />
                                                                                                              <path d="M6867 2713 c-10 -10 -8 -33 2 -33 6 0 9 9 8 20 -1 23 -1 22 -10 13z" />
                                                                                                              <path d="M11947 2705 c-4 -8 -2 -17 3 -20 6 -4 10 3 10 14 0 25 -6 27 -13 6z" />
                                                                                                              <path d="M13270 2710 c0 -13 30 -13 50 0 11 7 7 10 -17 10 -18 0 -33 -4 -33
-10z" />
                                                                                                              <path d="M3050 2700 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M3372 2699 c2 -7 10 -15 17 -17 8 -3 12 1 9 9 -2 7 -10 15 -17 17 -8
3 -12 -1 -9 -9z" />
                                                                                                              <path d="M3490 2699 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M3660 2654 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0
-10 -7 -10 -16z" />
                                                                                                              <path d="M13320 2650 c6 -12 9 -28 6 -36 -8 -20 -56 -18 -56 2 0 8 -5 12 -10
9 -17 -10 9 -35 36 -35 33 0 55 26 45 52 -4 12 -14 24 -20 26 -10 3 -10 0 -1
-18z" />
                                                                                                              <path d="M6260 2649 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M6577 2654 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
                                                                                                              <path d="M6690 2650 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M7012 2648 c6 -18 28 -21 28 -4 0 9 -7 16 -16 16 -9 0 -14 -5 -12
-12z" />
                                                                                                              <path d="M7130 2649 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M7450 2646 c0 -9 7 -16 16 -16 9 0 14 5 12 12 -6 18 -28 21 -28 4z" />
                                                                                                              <path d="M7570 2649 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M10900 2650 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5
0 -10 -4 -10 -10z" />
                                                                                                              <path d="M11222 2649 c2 -7 10 -15 17 -17 8 -3 12 1 9 9 -2 7 -10 15 -17 17
-8 3 -12 -1 -9 -9z" />
                                                                                                              <path d="M11340 2649 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0
-10 -5 -10 -11z" />
                                                                                                              <path d="M11660 2646 c0 -9 7 -16 16 -16 17 0 14 22 -4 28 -7 2 -12 -3 -12
-12z" />
                                                                                                              <path d="M11780 2649 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0
-10 -5 -10 -11z" />
                                                                                                              <path d="M12092 2649 c2 -7 10 -15 17 -17 8 -3 12 1 9 9 -2 7 -10 15 -17 17
-8 3 -12 -1 -9 -9z" />
                                                                                                              <path d="M12210 2649 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0
-10 -5 -10 -11z" />
                                                                                                              <path d="M12530 2646 c0 -9 7 -16 16 -16 9 0 14 5 12 12 -6 18 -28 21 -28 4z" />
                                                                                                              <path d="M12650 2649 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0
-10 -5 -10 -11z" />
                                                                                                              <path d="M12967 2654 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
                                                                                                              <path d="M13080 2650 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5
0 -10 -4 -10 -10z" />
                                                                                                              <path d="M2800 2640 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M8105 2620 c-3 -5 -4 -10 0 -10 3 0 123 -18 267 -40 229 -36 303 -42
286 -25 -4 5 -509 85 -534 85 -7 0 -16 -4 -19 -10z" />
                                                                                                              <path d="M12380 2614 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0
-10 -7 -10 -16z" />
                                                                                                              <path d="M6000 2590 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0
-16 -4 -16 -10z" />
                                                                                                              <path d="M10650 2590 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5
0 -10 -4 -10 -10z" />
                                                                                                              <path d="M2683 2506 c-94 -23 -163 -45 -163 -52 0 -12 316 61 333 76 22 20
-21 14 -170 -24z" />
                                                                                                              <path d="M6114 2466 c-111 -45 -201 -85 -200 -91 0 -5 6 -9 11 -7 33 10 391
155 398 162 27 25 -30 8 -209 -64z" />
                                                                                                              <path d="M11188 2444 c-182 -91 -235 -124 -198 -124 9 0 409 197 419 206 3 3
0 8 -5 13 -5 6 -93 -33 -216 -95z" />
                                                                                                              <path d="M358 2420 c16 -7 22 -18 22 -40 0 -22 -6 -33 -22 -40 -18 -7 -19 -9
-5 -9 46 -2 41 -90 -6 -92 -18 -1 -18 -2 -4 -6 49 -13 90 62 48 88 -18 12 -18
12 0 30 11 11 19 25 19 33 0 18 -38 46 -60 45 -9 0 -6 -4 8 -9z" />
                                                                                                              <path d="M1940 2285 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M2313 2423 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M4470 2285 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M5713 2423 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M8520 2285 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M10638 2423 c9 -3 12 -41 12 -138 0 -97 -3 -135 -12 -138 -8 -3 -6
-6 5 -6 15 -1 17 12 17 144 0 132 -2 145 -17 144 -11 0 -13 -3 -5 -6z" />
                                                                                                              <path d="M1843 2408 c-6 -7 -13 -25 -17 -40 -3 -14 -14 -29 -24 -31 -16 -4
-16 -5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -76 -6 -32 -13 -64 -17
-70 -3 -7 1 -4 10 6 8 10 20 50 27 88 10 59 15 69 33 70 17 1 18 2 4 6 -20 5
-22 20 -8 57 10 28 8 33 -7 14z" />
                                                                                                              <path d="M1873 2398 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                                                                                                              <path d="M4373 2408 c-6 -7 -13 -25 -17 -40 -3 -14 -14 -29 -24 -31 -16 -4
-16 -5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -76 -6 -32 -13 -64 -17
-70 -3 -7 1 -4 10 6 8 10 20 50 27 88 10 59 15 69 33 70 17 1 18 2 4 6 -20 5
-22 20 -8 57 10 28 8 33 -7 14z" />
                                                                                                              <path d="M4403 2398 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                                                                                                              <path d="M8423 2408 c-6 -7 -13 -25 -17 -40 -3 -14 -14 -29 -24 -31 -16 -4
-16 -5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -76 -6 -32 -13 -64 -17
-70 -3 -7 1 -4 10 6 8 10 20 50 27 88 10 59 15 69 33 70 17 1 18 2 4 6 -20 5
-22 20 -8 57 10 28 8 33 -7 14z" />
                                                                                                              <path d="M8453 2398 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                                                                                                              <path d="M302 2391 c4 -13 18 -16 19 -4 0 4 -5 9 -11 12 -7 2 -11 -2 -8 -8z" />
                                                                                                              <path d="M1127 2358 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M1190 2350 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M1278 2333 c25 -5 31 -40 7 -49 -12 -5 -11 -9 6 -23 13 -10 18 -22
14 -34 -9 -22 -55 -23 -55 -1 0 8 -5 12 -10 9 -17 -10 9 -35 36 -35 22 0 54
23 54 39 0 5 -7 14 -15 21 -11 9 -13 16 -5 24 26 26 3 58 -38 55 -10 -1 -8 -4
6 -6z" />
                                                                                                              <path d="M2065 2328 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9
2 -4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                                                                                                              <path d="M2520 2325 c0 -17 322 -137 334 -125 6 6 4 11 -5 14 -8 3 -85 32
-171 65 -103 38 -158 54 -158 46z" />
                                                                                                              <path d="M4595 2328 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9
2 -4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                                                                                                              <path d="M5027 2328 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M5467 2316 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M8647 2316 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M9077 2328 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M9517 2316 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M9955 2328 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9
2 -4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                                                                                                              <path d="M10386 2323 c3 -11 1 -37 -4 -57 -9 -32 -8 -37 11 -48 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 41 -5 54 -13 14 -14 13 -10 -5z" />
                                                                                                              <path d="M1240 2316 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3
-10 -1 -10 -9z" />
                                                                                                              <path d="M2125 2320 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M4655 2320 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M5090 2320 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M5525 2320 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M8705 2320 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M9140 2320 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M9575 2320 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M10015 2320 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3
0 -8 -4 -11 -10z" />
                                                                                                              <path d="M10445 2320 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3
0 -8 -4 -11 -10z" />
                                                                                                              <path d="M2187 2303 c-11 -10 -8 -35 3 -28 6 4 8 11 5 16 -4 5 3 9 15 9 27 0
38 -29 16 -45 -14 -11 -15 -13 -1 -19 8 -3 15 -17 15 -31 0 -20 -5 -25 -25
-25 -16 0 -25 6 -25 15 0 8 -4 15 -10 15 -15 0 -12 -16 4 -30 35 -28 93 11 69
48 -7 12 -8 24 -1 36 6 12 6 22 -2 32 -13 14 -51 19 -63 7z" />
                                                                                                              <path d="M4748 2300 c33 -14 27 -49 -15 -92 l-37 -38 47 0 c32 0 47 4 47 13 0
9 -10 12 -32 9 l-33 -4 33 32 c45 44 39 91 -12 89 -20 0 -20 -1 2 -9z" />
                                                                                                              <path d="M5178 2303 c25 -5 31 -40 7 -49 -12 -5 -11 -9 6 -23 13 -10 18 -22
14 -34 -9 -22 -55 -23 -55 -1 0 8 -5 12 -10 9 -17 -10 9 -35 36 -35 22 0 54
23 54 39 0 5 -7 14 -15 21 -11 9 -13 16 -5 24 26 26 3 58 -38 55 -10 -1 -8 -4
6 -6z" />
                                                                                                              <path d="M5615 2281 c-15 -20 -15 -23 -2 -12 15 12 17 10 17 -24 0 -36 -1 -37
-30 -33 -16 3 -30 1 -30 -4 0 -4 14 -8 30 -8 30 0 41 -14 18 -23 -7 -3 1 -6
17 -6 23 -1 27 2 15 9 -13 9 -13 11 0 20 9 6 10 10 3 10 -7 0 -13 19 -15 49
l-3 49 -20 -27z" />
                                                                                                              <path d="M8780 2299 c-16 -4 -19 -7 -7 -8 14 -1 17 -11 17 -55 0 -44 -4 -55
-17 -59 -10 -3 0 -5 22 -6 22 0 35 3 28 7 -7 4 -13 35 -15 68 -3 59 -4 60 -28
53z" />
                                                                                                              <path d="M9229 2298 c36 -19 36 -33 -3 -76 -20 -22 -36 -42 -36 -46 0 -3 18
-6 40 -6 22 0 40 5 40 10 0 6 -14 10 -31 10 l-30 0 37 35 c34 33 36 36 22 57
-9 13 -26 24 -39 26 l-24 3 24 -13z" />
                                                                                                              <path d="M9637 2303 c-10 -10 -8 -33 3 -33 5 0 7 7 4 15 -4 10 0 15 15 15 28
0 39 -29 17 -45 -14 -11 -15 -13 -1 -19 8 -3 15 -17 15 -31 0 -20 -5 -25 -25
-25 -16 0 -25 6 -25 15 0 8 -4 15 -10 15 -15 0 -12 -16 4 -30 35 -28 93 11 69
48 -7 12 -8 24 -1 36 6 12 6 22 -2 32 -13 14 -51 19 -63 7z" />
                                                                                                              <path d="M10112 2289 c-8 -11 -9 -18 -3 -14 7 4 11 -7 11 -31 0 -35 -1 -36
-30 -32 -16 3 -30 1 -30 -4 0 -4 14 -8 30 -8 30 0 41 -14 18 -23 -7 -3 1 -6
17 -6 23 -1 27 2 15 9 -13 9 -13 11 0 20 9 6 10 10 3 10 -7 0 -13 20 -15 50
-3 47 -4 49 -16 29z" />
                                                                                                              <path d="M4707 2293 c-10 -10 -8 -33 2 -33 6 0 9 9 8 20 -1 23 -1 22 -10 13z" />
                                                                                                              <path d="M5140 2286 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3
-10 -1 -10 -9z" />
                                                                                                              <path d="M9187 2285 c-4 -8 -2 -17 3 -20 6 -4 10 3 10 14 0 25 -6 27 -13 6z" />
                                                                                                              <path d="M10510 2290 c0 -13 30 -13 50 0 11 7 7 10 -17 10 -18 0 -33 -4 -33
-10z" />
                                                                                                              <path d="M294 2279 c-3 -6 0 -17 8 -25 12 -12 14 -10 16 11 2 26 -11 34 -24
14z" />
                                                                                                              <path d="M5900 2282 c0 -12 418 -177 427 -169 3 4 4 9 2 11 -7 7 -409 166
-419 166 -6 0 -10 -4 -10 -8z" />
                                                                                                              <path d="M1070 2259 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M10562 2218 c3 -29 0 -33 -24 -36 -17 -2 -28 2 -31 13 -4 12 -5 11
-3 -2 2 -24 43 -29 66 -8 10 9 16 24 13 36 -9 34 -23 32 -21 -3z" />
                                                                                                              <path d="M2000 2229 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4530 2229 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4850 2226 c0 -9 7 -16 16 -16 17 0 14 22 -4 28 -7 2 -12 -3 -12 -12z" />
                                                                                                              <path d="M4970 2229 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M5287 2234 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
                                                                                                              <path d="M5400 2230 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M8580 2230 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M8900 2226 c0 -9 7 -16 16 -16 9 0 14 5 12 12 -6 18 -28 21 -28 4z" />
                                                                                                              <path d="M9020 2229 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M9337 2234 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
                                                                                                              <path d="M9450 2230 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M9772 2229 c2 -7 10 -15 17 -17 8 -3 12 1 9 9 -2 7 -10 15 -17 17 -8
3 -12 -1 -9 -9z" />
                                                                                                              <path d="M9890 2229 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M10207 2234 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
                                                                                                              <path d="M10320 2230 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5
0 -10 -4 -10 -10z" />
                                                                                                              <path d="M1750 2169 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4280 2169 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M8330 2169 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4133 2037 c-80 -46 -138 -86 -133 -91 10 -10 301 154 294 166 -8 13
-11 11 -161 -75z" />
                                                                                                              <path d="M3000 1905 c0 -132 2 -145 18 -144 10 0 12 3 5 6 -10 3 -13 41 -13
138 0 97 3 135 13 138 7 3 5 6 -5 6 -16 1 -18 -12 -18 -144z" />
                                                                                                              <path d="M3803 2043 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M2919 2034 c6 -3 7 -12 4 -20 -3 -8 0 -14 7 -14 15 0 9 33 -8 36 -7
1 -8 0 -3 -2z" />
                                                                                                              <path d="M8372 1977 c-145 -34 -262 -66 -260 -72 2 -5 10 -8 18 -7 48 10 498
114 513 118 16 5 15 25 -1 23 -4 0 -125 -28 -270 -62z" />
                                                                                                              <path d="M2883 1999 c-3 -17 -12 -33 -20 -36 -11 -4 -12 -8 -3 -13 9 -6 8 -26
-4 -85 -9 -43 -14 -80 -12 -82 6 -7 25 56 32 109 5 38 12 52 28 58 18 7 18 9
3 9 -15 1 -17 7 -11 36 3 19 3 35 0 35 -4 0 -9 -14 -13 -31z" />
                                                                                                              <path d="M6200 1865 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M7878 2003 c9 -3 12 -41 12 -138 0 -97 -3 -135 -12 -138 -8 -3 -6 -6
5 -6 15 -1 17 12 17 144 0 132 -2 145 -17 144 -11 0 -13 -3 -5 -6z" />
                                                                                                              <path d="M6096 1978 c-9 -12 -16 -30 -16 -40 0 -10 -7 -18 -17 -18 -14 0 -15
-2 -4 -9 11 -7 11 -20 2 -75 -6 -36 -14 -73 -18 -83 -4 -10 -2 -14 4 -10 10 6
21 46 38 134 4 18 14 34 23 36 15 4 15 5 1 6 -12 1 -15 8 -11 29 2 15 9 33 15
40 5 6 7 12 4 12 -3 0 -13 -10 -21 -22z" />
                                                                                                              <path d="M6126 1981 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z" />
                                                                                                              <path d="M3117 1936 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M3555 1948 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9
2 -4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                                                                                                              <path d="M3175 1940 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M3615 1940 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M3268 1913 c25 -5 31 -40 8 -49 -12 -5 -11 -9 5 -25 10 -10 16 -25
13 -34 -8 -20 -54 -20 -54 1 0 8 -5 12 -10 9 -17 -10 9 -35 36 -35 22 0 54 23
54 39 0 5 -7 14 -15 21 -11 9 -13 16 -5 24 26 26 3 58 -38 55 -10 -1 -8 -4 6
-6z" />
                                                                                                              <path d="M3701 1888 c-14 -18 -17 -27 -8 -19 15 12 17 10 17 -17 0 -26 -4 -31
-27 -35 l-28 -4 28 -2 c28 -1 37 -15 15 -24 -7 -3 3 -6 22 -6 26 -1 31 2 20 9
-13 9 -13 11 0 20 9 6 10 10 3 10 -7 0 -13 20 -15 51 l-3 51 -24 -34z" />
                                                                                                              <path d="M6325 1908 c4 -9 2 -33 -4 -54 -9 -32 -8 -41 5 -54 13 -13 14 -13 9
2 -4 9 -2 33 4 54 9 32 8 41 -5 54 -13 13 -14 13 -9 -2z" />
                                                                                                              <path d="M6757 1896 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M7189 1911 c11 -7 12 -17 3 -52 -9 -36 -9 -47 4 -59 13 -13 14 -13 9
2 -4 9 -2 33 4 54 11 39 2 64 -23 64 -6 0 -5 -4 3 -9z" />
                                                                                                              <path d="M7627 1908 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M3230 1896 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3
-10 -1 -10 -9z" />
                                                                                                              <path d="M6385 1900 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M6815 1900 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M7255 1900 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M7690 1900 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M6442 1868 c-15 -15 -16 -38 -2 -38 6 0 10 8 8 18 -2 12 4 17 22 17
34 0 38 -29 9 -69 l-22 -31 31 29 c36 33 39 47 16 70 -18 19 -45 21 -62 4z" />
                                                                                                              <path d="M6877 1873 c-11 -10 -8 -33 4 -33 6 0 9 7 5 15 -4 10 1 15 15 15 27
0 37 -30 15 -45 -14 -11 -15 -13 -1 -19 8 -3 15 -17 15 -31 0 -20 -5 -25 -25
-25 -16 0 -25 6 -25 15 0 8 -4 15 -10 15 -15 0 -12 -16 4 -30 35 -28 93 11 69
48 -7 12 -8 24 -1 36 6 12 6 22 -2 32 -13 14 -51 19 -63 7z" />
                                                                                                              <path d="M7345 1851 c-15 -20 -15 -23 -2 -12 15 12 17 10 17 -24 0 -36 -1 -37
-30 -33 -16 3 -30 1 -30 -4 0 -4 14 -8 30 -8 30 0 41 -14 18 -23 -7 -3 1 -6
17 -6 23 -1 27 2 15 9 -13 9 -13 11 0 20 9 6 10 10 3 10 -7 0 -13 19 -15 49
l-3 49 -20 -27z" />
                                                                                                              <path d="M4000 1858 c0 -12 270 -173 284 -170 20 6 2 21 -71 63 -184 106 -213
121 -213 107z" />
                                                                                                              <path d="M7750 1840 c0 -16 4 -30 9 -30 5 0 7 8 4 18 -3 12 4 21 24 29 l28 11
-32 1 c-30 1 -33 -2 -33 -29z" />
                                                                                                              <path d="M3050 1850 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M3372 1849 c2 -7 10 -15 17 -17 8 -3 12 1 9 9 -2 7 -10 15 -17 17 -8
3 -12 -1 -9 -9z" />
                                                                                                              <path d="M3490 1849 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M6260 1809 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M6577 1814 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
                                                                                                              <path d="M6690 1810 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M7012 1809 c2 -7 10 -15 17 -17 8 -3 12 1 9 9 -2 7 -10 15 -17 17 -8
3 -12 -1 -9 -9z" />
                                                                                                              <path d="M7130 1809 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M7450 1806 c0 -9 7 -16 16 -16 17 0 14 22 -4 28 -7 2 -12 -3 -12 -12z" />
                                                                                                              <path d="M7570 1809 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M7805 1788 c0 -26 -5 -33 -25 -39 -17 -5 -19 -7 -7 -8 25 -1 57 17
57 32 0 7 -6 21 -13 30 -11 16 -12 14 -12 -15z" />
                                                                                                              <path d="M2800 1790 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M6510 1772 c0 -7 -15 -12 -34 -12 -19 0 -38 -4 -41 -10 -4 -6 10 -10
33 -10 28 0 42 5 46 16 4 9 4 19 1 22 -3 3 -5 0 -5 -6z" />
                                                                                                              <path d="M7740 1765 c0 -8 2 -15 4 -15 2 0 6 7 10 15 3 8 1 15 -4 15 -6 0 -10
-7 -10 -15z" />
                                                                                                              <path d="M6000 1750 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0
-16 -4 -16 -10z" />
                                                                                                              <path d="M2677 1660 c-82 -21 -151 -41 -154 -44 -24 -24 58 -9 300 55 21 5 35
14 32 19 -8 14 -11 13 -178 -30z" />
                                                                                                              <path d="M6105 1617 c-110 -44 -202 -81 -204 -83 -1 -1 0 -7 3 -12 3 -6 93 25
212 72 182 73 226 96 197 102 -4 1 -98 -34 -208 -79z" />
                                                                                                              <path d="M376 1571 c-5 -8 -8 -40 -7 -72 l2 -58 -43 -4 -43 -4 43 -1 c34 -2
42 -6 42 -21 0 -11 -8 -22 -17 -24 -10 -3 2 -5 27 -5 25 0 37 2 28 5 -10 2
-18 13 -18 23 0 10 8 21 18 23 16 4 16 5 0 6 -14 1 -18 14 -20 74 -2 48 -6 67
-12 58z" />
                                                                                                              <path d="M1940 1435 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M2313 1573 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M4470 1435 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M5713 1573 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M1843 1558 c-6 -7 -13 -25 -17 -40 -3 -14 -14 -29 -24 -31 -16 -4
-16 -5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -76 -6 -32 -13 -64 -17
-70 -3 -7 1 -4 10 6 8 10 20 50 27 88 10 59 15 69 33 70 17 1 18 2 4 6 -20 5
-22 20 -8 57 10 28 8 33 -7 14z" />
                                                                                                              <path d="M1873 1548 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                                                                                                              <path d="M4373 1558 c-6 -7 -13 -25 -17 -40 -3 -14 -14 -29 -24 -31 -16 -4
-16 -5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -76 -6 -32 -13 -64 -17
-70 -3 -7 1 -4 10 6 8 10 20 50 27 88 10 59 15 69 33 70 17 1 18 2 4 6 -20 5
-22 20 -8 57 10 28 8 33 -7 14z" />
                                                                                                              <path d="M4403 1548 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                                                                                                              <path d="M1127 1508 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M1190 1500 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M1296 1480 c-6 -8 -9 -31 -7 -52 2 -35 0 -38 -24 -38 -17 0 -24 4
-19 12 4 7 3 8 -4 4 -22 -13 -12 -26 18 -26 30 0 41 -14 18 -23 -7 -3 3 -6 22
-6 26 -1 31 2 20 9 -13 9 -13 11 0 20 9 6 10 10 3 10 -7 0 -13 20 -15 53 -2
37 -6 48 -12 37z" />
                                                                                                              <path d="M2059 1481 c11 -7 12 -17 3 -52 -9 -36 -9 -47 4 -59 13 -13 14 -13 9
2 -4 9 -2 33 4 54 11 39 2 64 -23 64 -6 0 -5 -4 3 -9z" />
                                                                                                              <path d="M2520 1477 c0 -10 320 -137 328 -129 11 10 -8 21 -84 50 -222 84
-244 91 -244 79z" />
                                                                                                              <path d="M4589 1481 c11 -7 12 -17 3 -52 -11 -44 -3 -69 22 -69 6 0 5 4 -3 9
-11 7 -12 17 -3 52 11 44 3 69 -22 69 -6 0 -5 -4 3 -9z" />
                                                                                                              <path d="M5027 1478 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12
10 11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M5467 1466 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M2125 1470 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M4655 1470 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M5090 1470 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M5525 1470 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M2215 1431 c-15 -20 -15 -23 -2 -12 15 12 17 10 17 -24 0 -36 -1 -37
-30 -33 -16 3 -30 1 -30 -4 0 -4 14 -8 30 -8 30 0 41 -14 18 -23 -7 -3 1 -6
17 -6 23 -1 27 2 15 9 -13 9 -13 11 0 20 9 6 10 10 3 10 -7 0 -13 19 -15 49
l-3 49 -20 -27z" />
                                                                                                              <path d="M4717 1453 c-11 -10 -8 -35 3 -28 6 4 8 11 5 16 -4 5 3 9 15 9 27 0
38 -29 16 -45 -14 -11 -15 -13 -1 -19 8 -3 15 -17 15 -31 0 -20 -5 -25 -25
-25 -16 0 -25 6 -25 15 0 8 -4 15 -10 15 -15 0 -12 -16 4 -30 35 -28 93 11 69
48 -7 12 -8 24 -1 36 6 12 6 22 -2 32 -13 14 -51 19 -63 7z" />
                                                                                                              <path d="M5196 1450 c-6 -8 -9 -31 -7 -52 2 -35 0 -38 -24 -38 -17 0 -24 4
-19 12 4 7 3 8 -4 4 -22 -13 -12 -26 18 -26 30 0 41 -14 18 -23 -7 -3 3 -6 22
-6 26 -1 31 2 20 9 -13 9 -13 11 0 20 9 6 10 10 3 10 -7 0 -13 20 -15 53 -2
37 -6 48 -12 37z" />
                                                                                                              <path d="M5580 1420 c0 -16 4 -30 9 -30 5 0 7 9 4 20 -4 15 0 20 13 20 11 0
26 5 34 10 11 7 5 10 -22 10 -36 0 -38 -2 -38 -30z" />
                                                                                                              <path d="M1070 1409 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M5638 1365 c4 -32 2 -35 -24 -36 -25 -2 -26 -2 -6 -6 42 -8 70 39 39
65 -10 9 -12 4 -9 -23z" />
                                                                                                              <path d="M2000 1379 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4530 1379 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4850 1376 c0 -9 7 -16 16 -16 17 0 14 22 -4 28 -7 2 -12 -3 -12 -12z" />
                                                                                                              <path d="M4970 1379 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M5287 1384 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
                                                                                                              <path d="M5400 1380 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M5570 1350 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M1750 1319 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4280 1319 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M4137 1192 c-86 -49 -144 -89 -139 -94 5 -5 69 26 153 73 168 96 155
87 143 98 -5 4 -74 -29 -157 -77z" />
                                                                                                              <path d="M3000 1055 c0 -132 2 -145 18 -144 10 0 12 3 5 6 -10 3 -13 41 -13
138 0 97 3 135 13 138 7 3 5 6 -5 6 -16 1 -18 -12 -18 -144z" />
                                                                                                              <path d="M3803 1193 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4
-12 -5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M2919 1184 c6 -3 7 -12 4 -20 -3 -8 0 -14 7 -14 15 0 9 33 -8 36 -7
1 -8 0 -3 -2z" />
                                                                                                              <path d="M2883 1149 c-3 -17 -12 -33 -20 -36 -11 -4 -12 -8 -3 -13 9 -6 8 -26
-4 -85 -9 -43 -14 -80 -12 -82 6 -7 25 56 32 109 5 38 12 52 28 58 18 7 18 9
3 9 -15 1 -17 7 -11 36 3 19 3 35 0 35 -4 0 -9 -14 -13 -31z" />
                                                                                                              <path d="M3117 1086 c3 -14 0 -39 -5 -56 -10 -26 -8 -31 11 -42 19 -10 20 -9
10 4 -9 11 -10 24 -2 52 9 31 8 42 -4 53 -13 13 -14 12 -10 -11z" />
                                                                                                              <path d="M3549 1101 c11 -7 12 -17 3 -52 -9 -36 -9 -47 4 -59 13 -13 14 -13 9
2 -4 9 -2 33 4 54 11 39 2 64 -23 64 -6 0 -5 -4 3 -9z" />
                                                                                                              <path d="M3175 1090 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M3615 1090 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M3286 1070 c-6 -8 -9 -31 -7 -52 2 -35 0 -38 -24 -38 -17 0 -24 4
-19 12 4 7 3 8 -4 4 -22 -13 -12 -26 18 -26 30 0 41 -14 18 -23 -7 -3 3 -6 22
-6 26 -1 31 2 20 9 -13 9 -13 11 0 20 9 6 10 10 3 10 -7 0 -13 20 -15 53 -2
37 -6 48 -12 37z" />
                                                                                                              <path d="M3670 1040 c0 -16 4 -30 9 -30 5 0 7 8 4 18 -3 12 4 21 24 29 l28 11
-32 1 c-30 1 -33 -2 -33 -29z" />
                                                                                                              <path d="M3725 988 c0 -26 -5 -33 -25 -39 -17 -5 -19 -7 -7 -8 25 -1 57 17 57
32 0 7 -6 21 -13 30 -11 16 -12 14 -12 -15z" />
                                                                                                              <path d="M3050 1000 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M3372 999 c2 -7 10 -15 17 -17 8 -3 12 1 9 9 -2 7 -10 15 -17 17 -8
3 -12 -1 -9 -9z" />
                                                                                                              <path d="M3490 999 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M3660 964 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z" />
                                                                                                              <path d="M2800 940 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M2671 811 c-87 -22 -146 -42 -149 -50 -3 -9 1 -12 9 -9 8 3 85 22
171 44 86 21 154 42 152 46 -8 12 -28 9 -183 -31z" />
                                                                                                              <path d="M312 685 c1 -43 2 -45 5 -12 4 33 7 37 32 37 16 0 33 6 39 13 8 9 0
12 -34 12 l-44 0 2 -50z" />
                                                                                                              <path d="M1940 595 c0 -144 0 -145 23 -144 16 1 18 2 5 6 -16 4 -18 19 -18
138 0 119 2 134 18 138 13 4 11 5 -5 6 -23 1 -23 0 -23 -144z" />
                                                                                                              <path d="M2313 733 c15 -4 17 -19 17 -138 0 -119 -2 -134 -17 -138 -14 -4 -12
-5 5 -6 22 -1 22 0 22 144 0 144 0 145 -22 144 -17 -1 -19 -2 -5 -6z" />
                                                                                                              <path d="M1843 718 c-6 -7 -13 -25 -17 -40 -3 -14 -14 -29 -24 -31 -16 -4 -16
-5 1 -6 13 -1 17 -7 13 -18 -3 -10 -10 -44 -15 -76 -6 -32 -13 -64 -17 -70 -3
-7 1 -4 10 6 8 10 20 50 27 88 10 59 15 69 33 70 17 1 18 2 4 6 -20 5 -22 20
-8 57 10 28 8 33 -7 14z" />
                                                                                                              <path d="M1873 708 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                                                                                                              <path d="M1127 668 c9 -11 10 -24 2 -52 -9 -31 -8 -42 4 -53 13 -13 14 -12 10
11 -3 14 0 39 5 56 10 26 8 31 -11 42 -19 10 -20 9 -10 -4z" />
                                                                                                              <path d="M1190 660 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M381 639 c6 -12 9 -37 6 -56 -5 -29 -4 -33 8 -23 25 21 12 100 -16
100 -6 0 -5 -8 2 -21z" />
                                                                                                              <path d="M2059 641 c11 -7 12 -17 3 -52 -9 -36 -9 -47 4 -59 13 -13 14 -13 9
2 -4 9 -2 33 4 54 11 39 2 64 -23 64 -6 0 -5 -4 3 -9z" />
                                                                                                              <path d="M2125 630 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z" />
                                                                                                              <path d="M1250 620 c0 -13 30 -13 50 0 11 7 7 10 -17 10 -18 0 -33 -4 -33 -10z" />
                                                                                                              <path d="M300 581 c0 -29 15 -33 16 -5 1 13 -2 24 -7 24 -5 0 -9 -9 -9 -19z" />
                                                                                                              <path d="M2180 570 c0 -16 4 -30 9 -30 5 0 7 9 4 20 -4 15 0 20 13 20 11 0 26
5 34 10 11 7 5 10 -22 10 -36 0 -38 -2 -38 -30z" />
                                                                                                              <path d="M1070 569 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M1299 562 c6 -11 8 -28 5 -36 -8 -21 -54 -21 -54 0 0 8 -5 12 -10 9
-16 -10 8 -35 34 -35 11 0 27 4 34 9 17 10 12 63 -6 69 -11 3 -12 0 -3 -16z" />
                                                                                                              <path d="M338 543 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
                                                                                                              <path d="M2000 539 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                              <path d="M2238 515 c4 -32 2 -35 -24 -36 -25 -2 -26 -2 -6 -6 42 -8 70 39 39
65 -10 9 -12 4 -9 -23z" />
                                                                                                              <path d="M2170 500 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z" />
                                                                                                              <path d="M1750 479 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z" />
                                                                                                          </g>
                                                                                                      </svg>

                                                                                                  </div>
                        <!--SVG code-->

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
