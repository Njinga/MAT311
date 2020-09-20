<template>
    <div class="unit8">
        <section class="py-3 px-3 mx-4 grey-text" style="background-color:#fff3e0">
            <h3 class=" h3-responsive font-weight-bold"> 8. Numerical Differentiation</h3>
        </section>


        <section class="dark-grey-text mb-4 pt-3 px-3 mx-4">

            In this chapter we discuss the numerical approximations of
            derivatives. We begin by giving reasons why we may need to
            approximate derivatives at all.

            <ul class="mt-3">
                <li style="margin-bottom:10px">
                    We may not know how to analytically differentiate a complication function
                </li>
                <li style="margin-bottom:10px">
                    In some cases  the exact formulas for the derivatives are  available but are so complicated
                    such that computationally evaluating the derivative may be costly (requiring a lot of function evaluations).
                </li>
            </ul>

            <!--Section 8.1-->
            <div class="my-3 py-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    8.1 Forward, backward and central differences
                </h4>
                <hr class="blue mb-4 mt-0 ">


                Assume <span v-katex="'u(x)'"></span> is sufficiently smooth. Then, by Taylor's theorem,


                <!--Equations 8.1 & 8.2 -->
                <div class="table-responsive" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'\\begin{aligned}u(x+h)=\&u(x)+hu\'(x)+\\frac{h^2}{2}u\'\'(x)+\\frac{h^3}{3!}u\'\'\'(x)+\\frac{h^4}{4!}u\'\'\'\'(x)+\\dots,\\\\      u(x-h)=\&u(x)-hu\'(x)+\\frac{h^2}{2}u\'\'(x)      -\\frac{h^3}{3!}u\'\'\'(x)+\\frac{h^4}{4!}u\'\'\'\'(x)-\\dots  \\end{aligned}'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(8.1)'"></div>
                                    <div v-katex:display="'(8.2)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equations 8.1 & 8.2-->
                Solving for <span v-katex="'u\''"></span> in equation 8.1 gives

                <!--Equation 8.3-->
                <div class="table-responsive" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'   u\'(x) = \\frac{u(x+h)-u(x)}{h}-\\frac{h}{2}u\'\'(x)-\\dots'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(8.3)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 8.3-->
                From equation (8.3) we get the <span class="font-weight-bold">forward difference</span> approximation

                <div v-katex:display="'u\'(x)\\approx\\frac{u(x+h)-u(x)}{h},'"></div>

                with error <span v-katex="'O(h)'"></span>. Similarly, from equation (8.2) we get the  <span class="font-weight-bold"> backward difference</span> approximation

                <div v-katex:display="'u\'(x)\\approx\\frac{u(x)-u(x-h)}{h},'"></div>

                with error <span v-katex="'O(h)'"></span>. Subtracting equation (8.2) from equation
                (8.1) and solving for <span v-katex="'u\''"></span> leads to the <span class="font-weight-bold">
                    central difference,
                </span>
                approximation


                <div v-katex:display="'u\'(x)\\approx\\frac{u(x+h)-u(x-h)}{2h},'"></div>

                with error <span v-katex="'O(h^2)'"></span>.<br />

                A summary of the common differentiation first order derivatives is given below<br />

                Several common approximations are

                <!--Equation 8.4-->
                <div class="table-responsive" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'\\left.\\begin{array}{cclc}  f^{\\prime}(x) \& \\approx \&              \\displaystyle  \\frac{f(x+h) - f(x)}{h}        \& \\;\\;\\;\\; (a) \\\\      \&  \&  \&  \\\\   f^{\\prime}(x) \& \\approx \&              \\displaystyle   \\frac{f(x) - f(x-h)}{h}        \& \\;\\;\\;\\; (b) \\\\      \&  \&  \&  \\\\   f^{\\prime}(x) \& \\approx \&              \\displaystyle  \\frac{f(x+h) - f(x-h)}{2h}     \& \\;\\;\\;\\; (c) \\\\       \&  \&  \&  \\\\   f^{\\prime}(x) \& \\approx \&   \\displaystyle     \\frac{- f(x+2h) + 4 f(x+h) - 3f(x)}{2h}  \& \\;\\;\\;\\; (d)  \\\\       \&  \&  \&  \\\\   f^{\\prime}(x) \& \\approx \&              \\displaystyle  \\frac{- f(x+2h) + 4f(x+h )                     -4f(x-h ) +  f(x+2h)  }  {4h}  \& \\;\\;\\;\\; (e) \\end{array}            \\;\\;\\;\\;\\;\\right\\}    '"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(8.4)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 8.4-->
                <!--Problem 8.1-->
                <div class="my-4 p-3" style="background-color:#FA8072">

                    <h6 class="font-weight-bold h6-responsive"> Problem 8.1 </h6>

                    Use Taylor series expansion and some algebraic manipulations to derive the first derivative formulas (d) and (e) in given in equation (8.4)
                </div>
                <!--./Problem 8.1-->
                <!--Example 7.6-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 8.1</span>

                    <ol>
                        <li>
                            Derive the approximation formula
                            <div v-katex:display="'f\'(x) =  \\frac{1}{2h}[ 4f(x+h) -3f(x)  -f(x+2h)]'"></div>

                            and show that its error term is <span v-katex="'\\displaystyle \\frac{h^2}{3}f\'\'\'(\\xi)'"></span>
                        </li>
                        <li>
                            Use the formula derived above to approximate <span v-katex="'f\'(1.9)'"></span> with <span v-katex="'f(x) = ln(x)'"></span> using <span v-katex="'h = 0.1, 0.01, 0.001'"></span>. Compute the error in each case.
                        </li>
                    </ol>

                    <span class="font-weight-bold">Solution</span>
                    <ol>
                        <li>
                            Using Taylor series to expand <span v-katex="'f(x+h)'"></span>, <span v-katex="'f(x+2h)'"></span> gives


                            <!--Equations 8.5 & 8.6 -->
                            <div class="table-responsive" style="width:100%;">

                                <table class="table">
                                    <thead>
                                        <tr>

                                            <th>
                                                <div v-katex:display="'\\begin{aligned} f(x+h)\&=f(x) + h f\'(x)+\\frac{1}{2} h^2 f\'\'(x)+ \\frac{1}{6}h^3f\'\'\'(x)\\\\ f(x+2h)\&=f(x) + 2h f\'(x)+2h^2 f\'\'(x)+ \\frac{4}{3}h^3f\'\'\'(x), \\end{aligned}'"></div>
                                            </th>
                                            <th>
                                                <div v-katex:display="'(8.5)'"></div>
                                                <div v-katex:display="'(8.6)'"></div>
                                            </th>


                                        </tr>
                                    </thead>

                                </table>
                            </div>
                            <!--./Equations 8.5 & 8.6-->
                            Subtracting equation (8.6) from <span v-katex="'4\\times'"></span>(8.5) gives


                            <!--Equations 8.7 -->
                            <div class="table-responsive" style="width:100%;">

                                <table class="table">
                                    <thead>
                                        <tr>

                                            <th>
                                                <div v-katex:display="'4f(x+h) - f(x+2h) = 3f(x) + 2hf\'(x) - \\frac{2}{3}h^3f\'\'\'(x)'"></div>
                                            </th>
                                            <th>
                                                <div v-katex:display="'(8.7)'"></div>

                                            </th>


                                        </tr>
                                    </thead>

                                </table>
                            </div>
                            <!--./Equations 8.7-->
                            Solving for <span v-katex="'f\'(x)'"></span> in (8.7) gives

                            <div v-katex:display="'\\begin{aligned}f\'(x) =  \\frac{4f(x+h)-3f(x) - f(x+2h)}{2h} + \\frac{1}{3}h^2f\'\'\'(\\xi) \\end{aligned} '"></div>

                            Thus

                            <div v-katex:display="'f\'(x)\\approx \\frac{4f(x+h)-3f(x) - f(x+2h)}{2h}'"></div>


                            and the error term is <span v-katex="'\\displaystyle  \\frac{1}{3}h^2f\'\'\'(\\xi)'"></span>.


                        </li>
                        <li>
                            With <span v-katex="'f(x) = ln(x)'"></span>, the derivative is <span v-katex="'\\displaystyle f\'(x) = \\frac{1}{x}'"></span>.  Setting <span v-katex="'x = 1.9'"></span> and substituting in the above equations gives

                            <div v-katex:display="'\\begin{aligned}h = 0.1,\\;\\;f\'(1.9) \&\\approx \\frac{1}{0.2}[4ln(2)-3ln(1.9)-ln(2.1)]\\\\                    \& = 0.525448595\\\\ h = 0.01,\\;\\;f\'(1.9) \&\\approx \\frac{1}{0.02}[4ln(1.91)-3ln(1.9)-ln(1.92)]\\\\                    \& = 0.526306183\\\\ h = 0.001,\\;\\;f\'(1.9) \&\\approx \\frac{1}{0.002}[4ln(1.901)-3ln(1.9)-ln(1.902)]\\\\                    \& = 0.526315692   \\end{aligned}'"></div>

                            The exact value is <span v-katex="'\\displaystyle f\'(1.9) = \\frac{1}{1.9} = 0.526315789'"></span>. The errors are computed as follows:

                            <div v-katex:display="'\\begin{aligned} h =0.1,\\;\\; \\textrm{Error } \&= |0.526315789 -  0.525448595| = 0.000867194\\\\ h =0.01,\\;\\; \\textrm{Error } \&= |0.526315789 -  0.526306183| = 0.000009606\\\\ h =0.001,\\;\\; \\textrm{Error } \&= |0.526315789 -  0.526315692| = 0.000000097 \\end{aligned}'"></div>



                            <div v-katex:display="'\\begin{array}{|c|c|c|}\\hline   h \& f\'(1.9) \& \\textrm{Error } \\\\ \\hline 0.1   \&0.525448595\& 0.000867194\\\\ \\hline 0.01  \&0.526306183\& 0.000009606\\\\ \\hline 0.001 \&0.526315692\& 0.000000097\\\\ \\hline \\end{array}'"></div>
                        </li>
                    </ol>
                </div>
                <!--./Example 8.1-->
                Adding up both equations (8.1) and (8.2), and solving for
                <span v-katex="'u\'\''"></span> yields the central difference approximation for second derivatives


                <div v-katex:display="'  \\begin{aligned}   u\'\'(x) \\approx\&\\frac{u(x-h)-2u(x)+u(x+h)}{h^2},  \\end{aligned}'"></div>

                with error <span v-katex="'O(h^2)'"></span>.


              
            </div>

            <!--./Section 8.1-->
            <!--Section 8.2-->
            <div class="mb-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    8.2 Derivation using Lagrange interpolation
                </h4>
                <hr class="blue mb-4 mt-0 ">

                <!--Section 8.2.1-->
                <div class="my-3 py-3">
                    <h5 class="h5-responsive font-weight-bold"> 8.2.1 Derivative by Interpolation</h5>

                    Polynomial interpolation based on a set of <span v-katex="'n+1'"></span> points
                    <span v-katex="'y_i=f(x_i),\\;(i =0,\\cdots,n)'"></span>, such as the Lagrange polynomial,
                    can be used approximate the derivative of a given function <span v-katex="'f(x)'"></span> .<br />
                    The Lagrange interpolation polynomial is given by




                    <!--Equations 8.8 -->
                    <div class="table-responsive" style="width:100%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <div v-katex:display="'f(x)\\approx =\\sum_{i=0}^n f_i \\ell_i(x)'"></div>
                                    </th>
                                    <th>
                                        <div v-katex:display="'(8.8)'"></div>

                                    </th>


                                </tr>
                            </thead>

                        </table>
                    </div>
                    <!--./Equations 8.8-->
                    where <span v-katex="'f_i = f(x_i)'"></span> and <span v-katex="'\\ell_i(x)'"></span> is the <span v-katex="'i'"></span>th  Lagrange cardinal basis polynomial:



                    <!--Equations 8.7 -->
                    <div class="table-responsive" style="width:100%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <div v-katex:display="'  \\ell_i(x)=\\prod_{j=0,\\;j\\ne i}^n \\frac{x-x_j}{x_i-x_j}'"></div>
                                    </th>
                                    <th>
                                        <div v-katex:display="'(8.9)'"></div>

                                    </th>


                                </tr>
                            </thead>

                        </table>
                    </div>
                    <!--./Equations 8.9-->
                    According to the error analysis, the interpolation
                    error is



                    <!--Equations 8.10 -->
                    <div class="table-responsive" style="width:100%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <div v-katex:display="'R_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod_{i=0}^n(x-x_i)  =\\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}\\,w(x)'"></div>
                                    </th>
                                    <th>
                                        <div v-katex:display="'(8.10)'"></div>

                                    </th>


                                </tr>
                            </thead>

                        </table>
                    </div>
                    <!--./Equations 8.10-->
                    where <div v-katex:display="'w(x) =  \\prod_{i=0}^n(x-x_i) '"></div>



                    The interpolating polynomial (8.8) can be differentiated to get an approximation of the derivative of the function <span v-katex="'f(x)'"></span>.



                    <!--Equations 8.11 -->
                    <div class="table-responsive" style="width:100%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <div v-katex:display="'  f\'(x) \\approx \\sum_{i=0}^n f_i \\ell\'_i(x)'"></div>
                                    </th>
                                    <th>
                                        <div v-katex:display="'(8.11)'"></div>

                                    </th>


                                </tr>
                            </thead>

                        </table>
                    </div>
                    <!--./Equations 8.11-->
                    with error

                    <div v-katex:display="'\\begin{aligned}  E_n(x) = R\'_n(x)\&=\\frac{1}{(n+1)!}\\frac{d}{dx}\\left((f^{(n+1)}(\\xi(x))\\\,w(x)\\right)  \\\\  \&=\\frac{1}{(n+1)!}\\left[w\'(x)f^{(n+1)}(\\xi(x))   +w(x)\\frac{d}{dx}f^{(n+1)}(\\xi(x))\\right] \\end{aligned}'"></div>

                    where <span v-katex="'\\xi(x)\\in [x_0,\\,x_n]'"></span>. Note that, at each node <span v-katex="'x_i'"></span> we have  <span v-katex="'w(x_i)=0'"></span>. Thus, the error <span v-katex="'E_n(x)'"></span> becomes





                    <!--Equations 8.12 -->
                    <div class="table-responsive" style="width:100%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <div v-katex:display="'E_n(x)=R\'_n(x)=w\'(x)\\frac{f^{(n+1)}(\\xi(x))}{(n+1)!}'"></div>
                                    </th>
                                    <th>
                                        <div v-katex:display="'(8.12)'"></div>

                                    </th>


                                </tr>
                            </thead>

                        </table>
                    </div>
                    <!--./Equations 8.12-->
                    The numerical integration formula at the node <span v-katex="'x_k'"></span> is given by


                    <!--Equations 8.13 -->
                    <div class="table-responsive" style="width:100%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <div v-katex:display="'f\'(x_k)  = \\sum_{j = 0}^{n}f(x_j)\\ell_j\'(x_k) + \\frac{1}{(n+1)!}f^{(n+1)}(\\xi_{k})\\prod_{\\stackrel{j=0}{j\\neq k}} (x_k - x_j)'"></div>
                                    </th>
                                    <th>
                                        <div v-katex:display="'(8.13)'"></div>

                                    </th>


                                </tr>
                            </thead>

                        </table>
                    </div>
                    <!--./Equations 8.13-->
                    We refer to the formula (13) as a <span class="font-weight-bold">differentiation by interpolation algorithm.</span> <br />

                    We demonstrate how to use the differentiation by integration formula (13) in the two special cases where <span v-katex="'n = 1'"></span> and <span v-katex="'n = 2'"></span> below.<br />


                    With <span v-katex="'n = 1'"></span>, we have linear interpolation based on two points. This means that we use two interpolation points <span v-katex="'(x_0, f(x_0))'"></span> and

                    <span v-katex="'(x_1, f(x_1))'"></span>, to approximate <span v-katex="'f\'(x_0)'"></span>. The Lagrange interpolation polynomial in this case is

                    <div v-katex:display="'f(x) = f(x_0)\\ell_0(x) + f(x_1)\\ell_1(x_1)'"></div>

                    Where

                    <div v-katex:display="'\\ell_0(x) = \\frac{x-x_1}{x_0 - x_1},\\;\\;\\;\\; \\ell_1(x) = \\frac{x-x_0}{x_1 - x_0}.'"></div>

                    Hence
                    <div v-katex:display="'  \\ell\'_0(x)=\\frac{d}{dx}\\left(\\frac{x-x_1}{x_0-x_1}\\right)=\\frac{1}{x_0-x_1},\\;\\;\\;\\;\\;  \\ell\'_1(x)=\\frac{d}{dx}\\left(\\frac{x-x_0}{x_1-x_0}\\right)=\\frac{1}{x_1-x_0}'"></div>

                    Thus, we have
                    <div v-katex:display="' f\'(x_0) = \\frac{f(x_0)}{x_0- x_1} + \\frac{f(x_1)}{x_1 - x_0} + \\frac{1}{2}f\'\'(\\xi)(x_0 - x_1) = \\frac{f(x_1) - f(x_0)}{x_1 - x_0} - \\frac{1}{2}f\'\'(\\xi)(x_1 - x_0).'"></div>

                    Assuming that <span v-katex="'\\xi \\in (x_0,x_1)'"></span>, and letting <span v-katex="'x_1 = x_0 + h'"></span> gives

                    <div v-katex:display="'f\'(x_0) = \\frac{f(x_0 + h) - f(x_0)}{h} - \\frac{h}{2}f\'\'(\\xi)'"></div>

                    which is the forward difference formula for approximating <span v-katex="'f\'(x_0)'"></span>.<br />

                    Next, we consider the case when <span v-katex="'n = 2'"></span>. Here, we are looking for a quadratic interpolation polynomial based on three points <span v-katex="'(x_0, f(x_0))'"></span>,
                    <span v-katex="'(x_1, f(x_1))'"></span> and <span v-katex="'(x_2, f(x_2))'"></span>. The Lagrange interpolation polynomial in this case is


                    <div v-katex:display="'f(x) = f(x_0)\\ell_0(x) + f(x_1)\\ell_1(x_1) + f(x_2)\\ell_2(x_2)'"></div>

                    where

                    <div v-katex:display="'\\begin{aligned} \\ell_{0}(x)\& = \\frac{(x-x_1)(x-x_2)}{(x_0-x_1)(x_0-x_2)},\\\\ \\ell_{1}(x)\& = \\frac{(x-x_0)(x-x_2)}{(x_1-x_0)(x_1-x_2)},\\\\ \\ell_{2}(x)\& = \\frac{(x-x_0)(x-x_1)}{(x_2-x_0)(x_2-x_1)},\\\\ \\end{aligned}'"></div>

                    Thus,
                    <div v-katex:display="'\\begin{aligned}    \\ell\'_0(x)&=\\frac{d}{dx}\\left(\\frac{(x-x_1)(x-x_2)}{(x_0-x_1)(x_0-x_2)}\\right)    =\\frac{2x-x_1-x_2}{(x_0-x_1)(x_0-x_2)}   \\\\   \\ell\'_1(x)&=\\frac{d}{dx}\\left(\\frac{(x-x_0)(x-x_2)}{(x_1-x_0)(x_1-x_2)}\\right)   =\\frac{2x-x_0-x_2}{(x_1-x_0)(x_1-x_2)}    \\\\    \\ell\'_2(x)\&=\\frac{d}{dx}\\left(\\frac{(x-x_0)(x-x_1)}{(x_2-x_0)(x_2-x_1)}\\right)    =\\frac{2x-x_0-x_1}{(x_2-x_0)(x_2-x_1)}      \\end{aligned}'"></div>

                    Hence,

                    <div v-katex:display="'\\begin{aligned}f\'(x)\& \\approx  f(x_0)\\frac{2x-x_1-x_2}{(x_0-x_1)(x_0-x_2)} + f(x_1)\\frac{x-x_2}{(x_1-x_0)(x_1-x_2)} \&+f(x_2)\\frac{x-x_1}{(x_2-x_0)(x_2-x_1)}\\end{aligned} '"></div>


                    Since <span v-katex="'x_i = x_0 + ih'"></span>, the above equation reduces to


                    <div v-katex:display="'f\'(x) = f(x_0)\\frac{2x-x_1-x_2}{2h^2} + f(x_1)\\frac{x-x_2}{-h^2} + f(x_2)\\frac{x-x_1}{2h^2}'"></div>

                    Evaluating at <span v-katex="'x_0,x_1'"></span> and <span v-katex="'x_2'"></span> gives the so-called <span class="font-weight-bold">3-Point Formulas</span>, namely





                    <!--Equations 8.14 to 8.16 -->
                    <div class="table-responsive" style="width:100%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <div v-katex:display="'\\begin{aligned}f\'(x_0)\& =  \\frac{1}{2h}[-3f(x_0) + 4f(x_1)- f(x_2)]\\\\ f\'(x_1)\& =  \\frac{1}{2h}[-f(x_0) + f(x_2)]\\\\ f\'(x_2)\& = \\frac{1}{2h}[f(x_0) - 4f(x_1) + 3f(x_2)]\\end{aligned} '"></div>
                                    </th>
                                    <th>
                                        <div v-katex:display="'(8.14)'"></div>
                                        <div v-katex:display="'(8.15)'"></div>
                                        <div v-katex:display="'(8.16)'"></div>


                                    </th>


                                </tr>
                            </thead>

                        </table>
                    </div>
                    <!--./Equations 8.14 to 8.16-->
                    Note that  we can change the last 2
                    formulas (8.18 and  8.19) to approximate <span v-katex="'f\'(x_0)'"></span> by substituting <span v-katex="'x_0'"></span> for
                    <span v-katex="'x_1=x_0 + h'"></span> in formula 2 and <span v-katex="'x_0'"></span> for <span v-katex="'x_2=x_0 + 2h'"></span> in formula 3.
                    The formulas then become



                    <!--Equations 8.17 to 8.19 -->
                    <div class="table-responsive" style="width:100%;">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th>
                                        <div v-katex:display="'\\begin{aligned} f\'(x_0)\&=\\frac{1}{2h}[-3f(x_0)+4f(x_0+h)-f(x_0+2h)]\\\\ f\'(x_0)\&=\\frac{1}{2h}[-f(x_0-h)+f(x_0+h)]\\\\ f\'(x_0)\&=\\frac{1}{2h}[f(x_0-2h)-4f(x_0-h)+3f(x_0)] \\end{aligned}'"></div>
                                    </th>
                                    <th>
                                        <div v-katex:display="'(8.17)'"></div>
                                        <div v-katex:display="'(8.18)'"></div>
                                        <div v-katex:display="'(8.19)'"></div>

                                    </th>


                                </tr>
                            </thead>

                        </table>
                    </div>
                    <!--./Equations 8.17 to 8.19-->
                    Note that formulas (8.17) and (8.19) are now identical. That it, replacing <span v-katex="'h'"></span> with <span v-katex="'-h'"></span> in
                    formula (8.17) gives (8.19). Consequently, there are only 2 formulas.


                    <!--Example 8.2-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 8.2</span>

                        Use the following times and positions to predict the speed at each time listed. Use the three-point formulas above.

                        <div v-katex:display="'\\begin{array}{|c|c|c|c|c|c|c|}\\hline \\textrm{Time }~~~~ \\quad\& 0 \& 3 \& 5 \& 8 \& 10 \& 13\\\\ \\hline \\text{Distance } \& 0 \& 225 \& 383 \& 623 \& 742 \& 993 \\\\ \\hline \\end{array}'"></div>

                        Use <span v-katex="'h=5'"></span> to get, for example,


                        <div v-katex:display="'\\begin{aligned} f\'(0)~\&=\\frac{1}{2h}\\left[-3f(0)+4f(5)-f(10)\\right]=\\frac{1}{10}(3(0)+4(383)-742)=79.\\cr f\'(13)\&=\\frac{1}{2h}\\left[f(3)-4f(8)+3f(13)\\right]=\\frac{1}{10}(225-4(623)+993)=71.2. \\end{aligned}'"></div>

                        The results are given in the tableau below.

                        <div v-katex:display="'\\begin{array}{|c|c|c|c|c|c|c|}\\hline  \\textrm{Time } \\quad\& 0 \& 3 \& 5 \& 8 \& 10 \& 13\\\\ \\hline  \\textrm{Speed }~ \& 79 \& 82.4 \& 74.2 \& 76.8 \& 69.4 \& 71.2\\\\ \\hline \\end{array}'"></div>

                    </div>
                    <!--./Example 8.2-->


                    <!--Exercise 8.1-->

                    <div class="my-4 p-3" style="background-color:#fff3e0">
                        <h6 class="h4-responsive">
                            Exercise 8.1  <deep>Numerical Differentiation</deep>
                        </h6>
                        <ol>
                            <li>

                                Derive the two formulas for estimating derivatives

                                <div v-katex:display="'\\begin{aligned} f\'(x) \&\\approx \\frac{1}{4h}[f(x+2h)-f(x-2h)]\\\\ f\'\'(x)\&\\approx \\frac{1}{4h^2}[f(x+2h) - 2f(x) + f(x-2h)] \\end{aligned}'"></div>

                                and establish the formulas for the errors in using them.
                                
                            </li>

                            <li>

                                3-Point formulas for approximating <span v-katex="'f\'(x_0)'"></span> are given by
                                <div v-katex:display="'\\begin{aligned} f\'(x_0)\&= \\frac{1}{2h}[-3f(x_0) + 4f(x_0+h) - f(x_0 + 2h)]\\\\ f\'(x_0)\&= \\frac{1}{2h}[-f(x_0 - h) + f(x_0 + h)]\\\\ f\'(x_0)\&= \\frac{1}{2h}[f(x_0-2h) - 4f(x_0 - h) + 3f(x_0)]\\\\ \\end{aligned} '"></div>

                                Given the following times and distances


                                <div v-katex:display="'\\begin{array}{|c|c|c|c|c|c|c|}\\hline \\textrm{Time } \& 0 \&3 \&5\& 8 \& 10 \& 13 \\\\ \\hline \\textrm{Distance}\& 0\& 225\& 383\& 623\& 742\& 993\\\\ \\hline \\end{array}'"></div>

                                Use the three-point formulas above to show that the speeds at each time are given by

                                <div v-katex:display="'\\begin{array}{|c|c|c|c|c|c|c|}\\hline \\textrm{Time }\& 0 &3 &5& 8 & 10 & 13 \\\\ \\hline \\textrm{Speed } \& 79\& 82.4\& 74.2\& 76.8\& 69.4\& 71.2\\\\ \\hline \\end{array}'"></div>
                            </li>

                            <li>

                                Establish the errors for the following differentiation rules.

                                <div v-katex:display="'\\begin{aligned} f\'\'\'(x)\&\\approx \\frac{1}{2h^3}[f(x+2h)-2f(x+h)+2f(x-h)-f(x-2h)]\\\\ f^{(4)}(x)\&\\approx \\frac{1}{h^4}[f(x+2h)-4f(x+h)+6f(x)-4f(x-h)+f(x-2h)] \\end{aligned}'"></div>
                                
                            </li>

                            <li>

                                Derive the approximation formula

                                <div v-katex:display="'f\'(x) =  \\frac{1}{2h}[ 4f(x+h) -3f(x)  -f(x+2h)] '"></div>

                                and show that its error term is <span v-katex="'\\displaystyle \\frac{h^2}{3}f\'\'\'(\\xi)'"></span> <br />

                                Use the formula above to approximate <span v-katex="'f\'(1.9)'"></span> with <span v-katex="'f(x) = ln(x)'"></span> using <span v-katex="'h = 0.1, 0.01, 0.001.'"></span>. Compute the error in each case.


                                
                            </li>

                            <li>

                                Use Taylor series expansions to derive the following difference formulas:

                                <ol style="list-style:lower-latin">

                                    <li>
                                        <span class="font-weight-bold">Forward-Difference Formulas:</span>
                                        <div v-katex:display="'\\begin{aligned} f\'(x)  \&=  \\frac{-11f(x)+18f(x+h)-9f(x+2h)+2f(x+3h)}{6h} - \\frac{h^3}{4}f^{(4)}(\\xi) \\\\ f\'\'(x) \&=  \\frac{2f(x)-5f(x+h)+4f(x+2h)-f(x+3h)}{h^2}+ \\frac{11}{12}h^2f^{(4)}(\\xi)\\\\ \\end{aligned}'"></div>
                                    </li>


                                    <li>

                                        <span class="font-weight-bold">Backward-Difference Formulas:</span>
                                        <div v-katex:display="'\\begin{aligned} f\'(x)  \&=  \\frac{11f(x)-2f(x-3h)+9f(x-2h)-18f(x-h)}{6h} + \\frac{h^3}{4}f^{(4)}(\\xi) \\\\ f\'\'(x) \&=  \\frac{2f(x)-f(x-3h)+4f(x-2h)-5f(x-h)}{h^2}+ \\frac{11}{12}h^2f^{(4)}(\\xi)\\\\ \\end{aligned}'"></div>
                                    </li>


                                    <li>

                                        <span class="font-weight-bold">Central-Difference Formulas:</span>


                                        <div v-katex:display="'\\begin{aligned} f\'(x)&= \\frac{f(x-2h)-8f(x-h)+8f(x+h)-f(x+2h)}{12h} + \\frac{1}{30}h^4f^{(5)}(\\xi)\\\\ f\'\'(x)&= \\frac{-30f(x) - f(x-2h)+16f(x-h)+16f(x+h)-f(x+2h)}{12h^2} + \\frac{1}{90}h^4 f^{(6)}(\\xi)\\\\ \\end{aligned}'"></div>
                                    </li>

                                </ol>
                               
                            </li>
                        </ol>
                    
                       
                    </div>
                    <!--./Exercise 8.1-->

                </div>
                <!--./Section 8.2.1-->

            </div>
            <!--./Section 8.2-->
        </section>
    </div>

</template>

<script>


export default {
  name: 'unit8'

}
</script>
