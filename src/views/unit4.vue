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
        </section>
    </div>
</template>

<script>
    // @ is an alias to /src


    export default {
        name: 'unit4'
    }
</script>
