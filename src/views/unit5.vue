<template>
    <div class="unit5">
        <section class="py-3 px-3 mx-4 grey-text" style="background-color:#fff3e0">
            <h3 class=" h3-responsive font-weight-bold"> 5.Numerical Integration</h3>
        </section>

        <section class="dark-grey-text mb-4 p-3 mx-4">

            <!--Section 5.1-->
            <div class="mb-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    5.1 Trapezoid rule
                </h4>
                <hr class="blue mb-4 mt-0 ">

                <!--Space for Figure-->
                <div class="my-3 red-text text-center p-4" style="border:2px solid blue">
                    Space for figure
                </div>
                <!--./Space for Figure-->
                The trapezoid rule is based on estimating the area under a curve using trapezoid.
                The area under the curve <span v-katex="'y = f(x)'"></span> in the above diagram,
                between <span v-katex="'x_0'"></span> and <span v-katex="'x_1'"></span> can be approximated as


                <!--Equation 5.1-->
                <div class="table-responsive" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'\\text{Area } = \\int_{x_0}^{x_1} f(x)~dx = \\int_{x_0}^{x_0+h} f(x)~ dx \\approx \\frac{1}{2} h(f_0 + f_1)'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(5.1)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 5.1-->
                To apply the trapezoid rule to an
                integral <span v-katex="'\\displaystyle \\int_a^b f(x)~dx'"></span> we
                divide up the interval <span v-katex="'[a,b]'"></span> into <span v-katex="'n'"></span> equally spaced subintervals


                <div v-katex:display="'(x_0,x_1),(x_1,x_2),\\ldots,(x_{n-1},x_n).'"></div>

                The division points <span v-katex="'x_i'"></span> are equally spaced:
                <div v-katex:display="'x_i = a + i h,\\;\\;\\;\\text{where }\\;\\;\\;h = \\frac{b-a}{n}'"></div>


                <!--Space for Figure-->
                <div class="my-3 red-text text-center p-4" style="border:2px solid blue">
                    Space for figure
                </div>
                <!--./Space for Figure-->
                We apply equation (5.1) on each subinterval and add the results to obtain
                the <deep>extended or composite trapezoidal rule:</deep>


                <div class="table-responsive" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>


                                <th>
                                    <div v-katex:display="'\\begin{aligned}\\int_a^b f(x)~dx \& \\approx  \\frac{1}{2}h(f_0+f_1) + \\frac{1}{2}h(f_1+f_2)+  \\ldots + \\frac{1}{2}h(f_{n-2}+f_{n-1}) + \\frac{1}{2}h(f_{n-1}+f_n)~~~~\&(5.2)\\\\     \&= \\frac{h}{2}\\left(f_0 + 2f_1 + 2f_2 + \\ldots + 2f_{n-2} + 2f_{n-1}+f_n\\right)\&(5.3) \\end{aligned}'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>

                <!--Example 5.1-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 5.1</span>

                    Evaluate <span v-katex="'\\displaystyle{ \\int_2^6 \\frac{1}{1+x}~dx}'"></span> using the Trapezoidal rule with <span v-katex="'h = 1'"></span>.<br />
                    Solution:<br />
                    <span v-katex="'a = 2'"></span> and <span v-katex="'b = 6'"></span>, thus <span v-katex="'n = (b-a)/h = 4'"></span>,

                    <div v-katex:display="'\\begin{aligned} \\int_2^6 \\frac{1}{1+x}~dx \& \\approx  \\frac{1}{2}\\left[ f(x_0) + 2f(x_1)+2f(x_2)+2f(x_3)+f(x_4)\\right]\\\\ \&=\\frac{1}{2}\\left[ f(2) + 2f(3)+2f(4)+2f(5)+f(6)\\right]\\\\ \&=\\frac{1}{2}\\left[\\frac{1}{3} + 2\\cdot \\frac{1}{4}+ 2\\cdot \\frac{1}{5}+ 2\\cdot \\frac{1}{6}+ \\frac{1}{7}\\right] = \\frac{359}{420} = 0.855\\\\\\end{aligned}'"></div>

                    The exact solution is <span v-katex="'\\ln|x+1|_2^6 = \\ln 7 - \\ln 3 = 0.847'"></span>

                </div>
                <!--./Example 5.1-->
                <!--Example 5.2-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 5.2</span>

                    Evaluate the integral <span v-katex="'\\displaystyle \\int_0^1 e^{-x^2}~dx'"></span> using the trapezoid rule with <span v-katex="'h = 0.25'"></span><br />
                    Solution:

                    <div v-katex:display="'\\begin{aligned} \\int_0^{1} e^{-x^2} \& \\approx  \\frac{0.25}{2}  \\left[f(0) + 2 f(0.25) + 2 f(0.5) + 2 f(0.75) + f(1) \\right] \\\\  \&= \\frac{0.25}{2}\\left[ e^0 + 2e^{-(0.25)^2} + 2e^{-(0.5)^2} +  2e^{-(0.75)^2} +   e^{-(1)^2}\\right] = 0.74298\\end{aligned}'"></div>



                </div>
                <!--./Example 5.2-->

            </div>

            <!--./Section 5.1-->
            <!--Section 5.2-->
            <div class="mb-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    5.2 Newton-Cotes formula
                </h4>
                <hr class="blue mb-4 mt-0 ">

                Suppose that we have to evaluate the integral

                <!--Equation 5.4-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'\\int_a^b f(x)~dx'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(5.4)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 5.4-->
                where <span v-katex="'f(x)'"></span> is a real valued function.
                Since polynomials are easy to integrate,
                we can approximate the function <span v-katex="'f(x)'"></span> by
                its Lagrange interpolation polynomial <span v-katex="'P_n'"></span> of
                degree <span v-katex="'n'"></span>, so that the integral is approximated as


                <!--Equation 5.5-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'\\int_a^b f(x)~dx \\approx \\int_a^b P_n(x)~dx'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(5.5)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 5.5-->
                Recall from the previous chapter that the Lagrange
                interpolation polynomial
                of degree <span v-katex="'n'"></span> for the function <span v-katex="'f'"></span>,
                with these interpolation points, is of the form
                <!--Equation 5.6-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'P_n(x) = L_0(x)f_0 + L_1(x)f_1 + \\ldots + L_n(x)f_n = \\sum_{k=0}^n  L_k(x)f(x_k)'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(5.6)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 5.6-->
                with the error of the interpolation given by

                <div v-katex:display="'E_{n+1} = \\frac{\\pi_{n+1}(x)}{(n+1)!}f^{(n+1)}(\\xi),\\;\\;\\;\\;\\text{with }\\; x_0  <  \\xi < x_n'"></div>


                where



                <!--Equation 5.7-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'L_k(x) = \\frac{(x-x_0)(x-x_1)\\cdots(x-x_{k-1})(x-x_{k+1})\\cdots(x-x_n)}{(x_k-x_0)(x_k-x_1)\\cdots(x_k-x_{k-1})(x_k-x_{k+1})\\cdots(x_k-x_n)}~,~~~k=0,1,2,\\ldots,n'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(5.7)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 5.7-->
                and

                <div v-katex:display="'\\pi_{n+1}(x) = (x-x_0)(x-x_1)(x-x_2)\\cdots(x-x_{n-1})(x-x_n).'"></div>

                For simplicity, we shall assume that the points <span v-katex="'x_i'"></span>,  are equally spaced, that is,

                <div v-katex:display="' x_i = a + ih ,\\;\\;\\;\\; i = 0,1,\\ldots, n'"></div>

                where <span v-katex="'h'"></span> is the step size defined by

                <div v-katex:display="'h = \\frac{b - a}{n}'"></div>

                Substituting (5.6) into the (5.5) gives

                <!--Equation 5.8-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'\\int_a^b f(x)~dx \\approx \\sum_{k = 0}^{n}w_k f(x_k)'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(5.8)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 5.8-->
                where
                <!--Equation 5.9-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'w_k = \\int_a^b L_k(x)~dx,\\;\\;\\;\\;k = 0,1,\\ldots,n'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(5.9)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 5.9-->
                The values <span v-katex="'w_k'"></span>, <span v-katex="'k = 0,1,\\ldots,n'"></span>, are
                referred to as the <deep>quadrature weights</deep>,
                while the interpolation points <span v-katex="'x_k'"></span>, <span v-katex="'k=0, 1,\\ldots,n'"></span>,
                are called the <deep>quadrature points</deep>.
                The formula (5.8), with <deep>quadrature weights</deep>
                and equally spaced quadrature points, is called
                the <deep>Newton-Cotes formula</deep> of order <span v-katex="'n'"></span>.<br /><br />

                <deep>Derivation of the Trapezium Rule</deep>

                <br />

                To derive the Trapezium rule,
                we take <span v-katex="'n = 1'"></span>. The Lagrange interpolation polynomial
                of degree 1 for the function <span v-katex="'f'"></span> is simply

                <div v-katex:display="'\\begin{aligned} P_1(x)\&= L_0(x)f(x_0) + L_1(x)f(x_1)\\\\     \&= \\frac{x - x_1}{x_0 - x_1}f(x_0) + \\frac{x-x_0}{x_1-x_0}f(x_1)\\\\     \&= \\frac{x_1-x}{x_1 - x_0}f(x_0) + \\frac{x-x_0}{x_1-x_0}f(x_1)\\\\     \&= \\frac{1}{h}[(x_1-x)f(x_0)+ (x-x_0)f(x_1)]  \\end{aligned}'"></div>

                Integrating <span v-katex="'P_1(x)'"></span> from <span v-katex="'x_0'"></span> to <span v-katex="'x_1'"></span> gives,

                <div v-katex:display="'\\int_{x_0}^{x_1} f(x)~dx \\approx \\frac{x_1 - x_0}{2}[f(x_0) + f(x_1)] =  \\frac{h}{2}[f(x_0) + f(x_1)]'"></div>

                which is the Trapezium formula obtained in (5.1).<br />

                <deep>N.B</deep> When integrating Lagrange polynomials, it is convenient to express <span v-katex="'x'"></span> in terms of the variable <span v-katex="'s'"></span> so that

                <div v-katex:display="'x = x_0 + sh\\;\\;\\;\\;\\text{and }\\;\\;\\;x - x_i = (s-i)h.'"></div>

                To integrate from <span v-katex="'x_0'"></span> to <span v-katex="'x_1'"></span> we note that

                <div v-katex:display="'dx = h~ds,\\;\\; s = 0\\;\\text{when }x = x_0,\\;\\; \\text{and }s = 1\\;\\text{when }x = x_1.'"></div>


                Thus,

                <div v-katex:display="'\\begin{aligned} \\int_{x_0}^{x_1}P_1(x) \&= \\int_{x_0}^{x_1}\\left[ \\frac{x_1-x}{x_1 - x_0}f(x_0) + \\frac{x-x_0}{x_1-x_0}f(x_1)\\right]~dx\\\\  \& = h \\int_0^1 \\left[\\frac{-(s-1)h}{h}f(x_0) + \\frac{sh}{h}f(x_1) \\right]~ds\\\\  \& = \\frac{h}{2}[f(x_0) + f(x_1)] \\end{aligned}'"></div>


            </div>
            <!--./Section 5.2-->
            <!--Section 5.3-->
            <div class="py-3 my-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    5.3 Simpson's Formula
                </h4>
                <hr class="blue mb-4 mt-0 ">

                <deep>Derivation of Simpson's 1st Rule</deep><br />

                A slightly more sophisticated quadrature formula is
                obtained by taking <span v-katex="'n = 2'"></span>. In this case, the three
                points <span v-katex="'x_0, x_1'"></span> and <span v-katex="'x_2'"></span> are used and integration
                is done over the interval <span v-katex="'[x_0,x_2]'"></span>. The quadrature
                weights are calculated from


                <div v-katex:display="'\\begin{aligned} w_0 \& = \\int_{x_0}^{x_2} L_0(x)~dx\\\\ \& = \\int_{x_0}^{x_2} \\frac{(x-x_1)(x-x_2)}{(x_0 - x_1)(x_0-x_2)}~dx\\\\ \& = h \\int_0^2 \\frac{(s-1)(s-2)h^2}{(-h)(-2h)}~ds\\\\ \& = \\frac{h}{2}\\int_0^2 (s^2 - 3s + 2)~ds\\\\ \& =\\frac{h}{3} \\end{aligned}'"></div>


                <div v-katex:display="'\\begin{aligned} w_1\& = \\int_{x_0}^{x_2} L_1(x)~dx\\\\ \& = \\int_{x_0}^{x_2} \\frac{(x-x_0)(x-x_2)}{(x_1 - x_0)(x_1-x_2)}~dx\\\\ \& = h \\int_0^2 \\frac{s(s-2)h^2}{(h)(-h)}~ds\\\\ \& = -h\\int_0^2 (s^2 - 2s)~ds\\\\ \& =\\frac{4h}{3} \\end{aligned}'"></div>

                <div v-katex:display="'\\begin{aligned} w_2\& = \\int_{x_0}^{x_2} L_2(x)~dx\\\\ \& = \\int_{x_0}^{x_2} \\frac{(x-x_0)(x-x_1)}{(x_2 - x_0)(x_2-x_1)}~dx\\\\  \& = h \\int_0^2 \\frac{s(s-1)h^2}{(2h)(h)}~ds\\\\  \& = \\frac{h}{2}\\int_0^2 (s^2 - s)~ds\\\\ \ &= \\frac{h}{3} \\end{aligned}'"></div>

                This gives,
                <!--Equation 5.10-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'\\int_{x_0}^{x_2}f(x)~dx = \\frac{h}{3}\\left[f(x_0) + 4f(x_1) + f(x_2) \\right]'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(5.10)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 5.10-->

                <deep>Derivation of Composite Trapezium and Simpson's rule</deep><br />

                The Trapezoid rule for the sub-interval <span v-katex="'[x_i,x_{i+1}]'"></span> is


                <!--Equation 5.11-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'\\int_{x_i}^{x_{i+1}} f(x)dx \\approx \\frac{n}{2}[f(x_i) + f(x_{i+1})]'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(5.11)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 5.11-->
                Suppose that the interval <span v-katex="'[a,b]'"></span> is partitioned
                into <span v-katex="'n'"></span> equally spaced sub-intervals of
                length <span v-katex="'h'"></span> as shown in the figure below


                <!--Space for Figure-->
                <div class="my-3 red-text text-center p-4" style="border:2px solid blue">
                    Space for figure
                </div>
                <!--./Space for Figure-->
                The sum of the Trapezoid rule on each interval is

                <div v-katex:display="'\\begin{aligned}\\sum_{i = 0}^{n-1}\\left[\\int_{x_i}^{x_{i+1}} f(x)dx \\right]\&= \\int_{a}^b f(x)dx \\\\\& \\approx \\frac{h}{2}\\sum_{i=0}^{n-1}[f(x_i) + f(x_{i+1})]\\\\\& = \\frac{h}{2}\\left[f(x_0) + f(x_n) + 2 \\sum_{i=1}^{n-1} f(x_i)\\right]\\\\\& = \\frac{h}{2}\\left(f_0 + 2f_1 + 2f_2 + \\ldots + 2f_{n-2} + 2f_{n-1}+f_n\\right) \\end{aligned} '"></div>

                Where  <span v-katex="'f_i = f(x_{i})'"></span>.<br />
                The formula for the Simpson's rule over three points <span v-katex="'x_i'"></span>, <span v-katex="'x_{i+1}'"></span> and <span v-katex="'x_{2i}'"></span> is
                <!--Equation 5.12-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="'\\int_{x_i}^{x_{i+2}}f(x)~dx = \\frac{h}{3}\\left[f(x_i) + 4f(x_{i+1}) + f(x_{i+2}) \\right]'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(5.12)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 5.12-->
                Suppose that <span v-katex="'[a, b]'"></span> is subdivided into
                <span v-katex="'2N'"></span> subintervals <span v-katex="'[x_i , x_{i+1}]'"></span> of equal width <span v-katex="'h=(b-a)/(2N)'"></span> by using <span v-katex="'x_i=a +ih'"></span> for <span v-katex="'i=0,1,\\ldots,2N'"></span> as shown below

                <!--Space for Figure-->
                <div class="my-3 red-text text-center p-4" style="border:2px solid blue">
                    Space for figure
                </div>
                <!--./Space for Figure-->
                The sum of Simpson's rules over the entire interval (taking 3-points at a time is)
                <div v-katex:display="'\\begin{aligned} \\sum_{i = 0}^{n-1}\\left[\\int_{x_i}^{x_{i+2}} f(x)dx \\right]\&= \\int_{a}^b f(x)dx \\\\ \& \\approx \\frac{h}{3}\\sum_{i=0}^{n-1}[f(x_{2i}) + 4f(x_{2i+1}+f(x_{2i+2})]\\\\ \& = \\frac{h}{3}[(f_0 + 4f_1 + f_2)+(f_2 + 4f_3 + f_4) + (f_4 + 4f_5 + f_6)\\\\ \& + \\cdots + (f_{2n-4} + 4f_{2n-3} + f_{2n-2})+(f_{2n-2} + 4f_{2n-1} + f_{2n}) \\\\ \& = \\frac{h}{2}(f_0 + 4f_1 + 2f_2 + 4f_3 + 2f_4 + \\cdots + 2f_{2n-2} + 4f_{2n-1}+f_{2n}) \\end{aligned} '"></div>

                The above formula is the composite Simpson's rule.
                <!--Example 5.3-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 5.3</span>
                    Approximate the integral

                    <div v-katex:display="'\\int_0^1 e^{x^2} '"></div>

                    using the
                    <ol style="list-style:lower-latin">

                        <li>
                            Composite Trapezoid rule with <span v-katex="'n = 8'"></span>.<br /><br />
                            <deep>Solution:</deep>

                            <div v-katex:display="'\\begin{aligned} \\int_0^1 e^{x^2}\& \\approx \\frac{h}{2}[f_0 + 2f_1 + 2f_2+2f_3+2f_4+ 2f_5+2f_6+2f_7+f_8]\\\\ \& = \\frac{0.25}{2}\\left[e^0 + 2\\left(e^{0.25^2}+e^{0.5^2}+e^{0.75^2}+e^{1^2}+e^{1.25^2}+e^{1.5^2}+e^{1.75^2}\\right)+e^{2^2} \\right]\\\\ \& = 1.4697123\\end{aligned}'"></div>
                        </li>

                        <li>
                            Composite Simpson's rule with  <span v-katex="'2n = 8'"></span>.<br /><br />
                            <deep>Solution:</deep>

                            <div v-katex:display="'\\begin{aligned} \\int_0^1 e^{x^2}\& \\approx \\frac{h}{3}[f_0 + 4f_1 + 2f_2+4f_3+2f_4+ 4f_5+2f_6+4f_7+f_8]\\\\ \& = \\frac{0.25}{3}\\left[e^0 + 4e^{0.25^2}+2e^{0.5^2}+4e^{0.75^2}+2e^{1^2}+4e^{1.25^2}+2e^{1.5^2}+4e^{1.75^2}+e^{2^2} \\right]\\\\ \& = 1.4627234 \\end{aligned}'"></div>
                        </li>


                    </ol>
                </div>
                <!--./Example 5.3-->
                <!--Section 5.3.1-->
                <div class="my-4 py-3">
                    <h5 class="h5-responsive font-weight-bold">
                        5.3.1 Error analysis of the Trapezoid rule


                    </h5>

                    <!--Theorem 5.1-->
                    <div class="theorem my-3 p-3 ">
                        <theorem-color>Theorem 5.1</theorem-color>

                        <deep>Theorem on accuracy of the trapezoid rule</deep><br />

                        If <span v-katex="'f\'\'(x)'"></span> exists and is continuous on the
                        interval <span v-katex="'[a,b]'"></span> and if the composite trapezoid
                        rule <span v-katex="'T'"></span> with uniform spacing <span v-katex="'h'"></span> is used to
                        estimate the integral

                        <div v-katex:display="' I = \\int_a^b f(x)~dx'"></div>

                        then for some <span v-katex="'\\xi'"></span> in <span v-katex="'(a,b)'"></span>

                        <!--Equation 5.13-->
                        <div class="table-responsive table-stripped" style="width:100%;">

                            <table class="table">
                                <thead>
                                    <tr>

                                        <th>
                                            <div v-katex:display="'E_T = I - T = -\\frac{h^2}{12}(b-a)f\'\'(\\xi)'"></div>
                                        </th>
                                        <th>
                                            <div v-katex:display="'(5.13)'"></div>
                                        </th>


                                    </tr>
                                </thead>

                            </table>
                        </div>
                        <!--./Equation 5.13-->



                    </div>
                    <!--./Theorem 5.1-->
                    <!--Example 5.4-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 5.4</span>

                        Calculate the error bound in
                        evaluating <span v-katex="'\\displaystyle \\int_0^1 e^{-x^2}~dx'"></span> with <span v-katex="'h = 0.25'"></span> when using the trapezoid rule.<br />

                        <deep>Solution.</deep>

                        <div v-katex:display="'\\begin{aligned}f(x)\&= e^{-x^2}\\\\ f\'(x)\&= -2xe^{-x^2}\\\\ f\'\'(x)\&= -2e^{-x^2} + 4x^2 e^{-x^2} \\end{aligned}'"></div>

                        On [0,1], the derivative  <span v-katex="'f\'\'(x)'"></span> has a magnitude that is no bigger than 2. Thus, the error bound is

                        <div v-katex:display="' \\frac{h^2(b-a)}{12}f\'\'(\\xi) \\leq \\frac{(0.25)^2}{12}(1)(2) = 0.0104'"></div>


                    </div>
                    <!--./Example 5.4-->
                    <!--Example 5.5-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 5.5</span>
                        Evaluate the integral <span v-katex="'\\displaystyle \\int_0^2 \\ln(1+x)~dx'"></span> by the trapezoid rule with an accuracy of at least <span v-katex="'\\varepsilon = 0.05'"></span><br />
                        <deep>Solution</deep>: In order to obtain an accuracy <span v-katex="'\\varepsilon=0.05'"></span>, we estimate <span v-katex="'h'"></span> such that


                        <div v-katex:display="'\\frac{h^2(b-a)}{12}f\'\'(\\xi) \\leq \\varepsilon'"></div>



                        <div v-katex:display="'f(x) = \\ln(1+x),\\;\\;\\;f\'(x) = \\frac{1}{1+x},\\;\\;\\;f\'\'(x) = -\\frac{1}{(1+x)^2} '"></div>

                        Thus, <span v-katex="'f\'\'(x)'"></span> has an absolute maximum of 1 on [0,2] and

                        <div v-katex:display="'\\begin{aligned} \\frac{h^2}{12} (2-0)(1) \& \\leq  0.05 \\\\ h^2 \& \\leq  0.3 \\\\ h \&  \\leq   0.548 \\\\ \\end{aligned}'"></div>
                        <div v-katex:display="'n = \\frac{b-a}{h} \\geq \\frac{2}{0.548} = 3.65'"></div>

                        Hence, <span v-katex="'n = 4'"></span> or more points will produce the desired accuracy.


                        <div v-katex:display="'\\begin{aligned} \\int_0^2 f(x)~dx \&\\approx \\frac{0.5}{2}\\left[ f(x_0) + 2f(x_1)+2f(x_2)+2f(x_3)+f(x_4)\\right]\\\\ \&= 0.25 \\left[\\ln(1) + 2\\ln(1.5) + 2\\ln(2) + 2\\ln(2.5) + \\ln(3)\\right] \\\\ \&= 1.282105 \\end{aligned}'"></div>

                    </div>
                    <!--./Example 5.5-->
                </div>
                <!--./Section 5.3.1-->
                <!--Section 5.3.2-->
                <div class="my-3 py-3">
                    <h5 class="h5-responsive font-weight-bold">
                        5.3.2 Measuring Precision


                    </h5>
                    <!--Definition 5.1-->
                    <div class="note note-definition my-2">
                        <span class="text-success"> Definition 5.1 </span>
                        <strong>degree of accuracy</strong> or <strong>precision</strong>

                        of a quadrature formula is the largest positive integer <span v-katex="'n'"></span> such that the formula is exact for <span v-katex="'x^k'"></span> for each <span v-katex="'k = 0,1,2,\\ldots,n'"></span>.


                    </div>
                    <!--./Definition 5.1-->
                    The degree of a quadrature formula is <span v-katex="'n'"></span> if and
                    only if the error is zero for all polynomials of
                    degree <span v-katex="'k=0,1,\\ldots,n'"></span>, but it not zero for some
                    polynomials of degree <span v-katex="'n+1'"></span>.


                    <!--Example 5.6-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 5.6</span>

                        The quadrature formula
                        <div v-katex:display="'\\displaystyle \\int_{-1}^{1} f(x)~dx \\approx c_0 f(-1) +c_1f(0)+c_2f(1)'"></div>

                        is exact for all polynomials of degree less than or equal
                        to 2
                        <br />
                        Determine <span v-katex="'c_0'"></span>, <span v-katex="'c_1'"></span> and <span v-katex="'c_2'"></span>.<br />

                        <deep>Solution:</deep>  Since the formula is exact for <span v-katex="'f(x) = 1,\\;\\;x,\\;\\;x^2'"></span>, we have
                        <div v-katex:display="'\\begin{aligned} \\int_{-1}^1 1~dx \&= c_0 + c_1 + c_2 = 2\\\\ \\int_{-1}^1 x~dx \&= -c_0 + c_2 = 0\\\\ \\int_{-1}^1 x^2~dx \&= c_0 + c_2 = \\frac{2}{3}\\\\ \& c_0 = c_2 = \\frac{1}{3},\\;\\;\\; c_1 = \\frac{4}{3} \\end{aligned}'"></div>
                    </div>
                    <!--./Example 5.6-->
                    <!--Example 5.7-->
                    <div style="background-color: #e2e3e5" class="my-3 p-3">
                        <span class="font-weight-bold">Example 5.7</span>
                        Find the constants <span v-katex="'c_0'"></span>, <span v-katex="'c_1'"></span> and <span v-katex="'x_1'"></span> so that the quadrature formula

                        <div v-katex:display="'\\int_{0}^1 f(x) dx = c_0 f(0) + c_1 f(x_1)'"></div>
                        has the highest possible degree of precision.<br />
                        <deep>Solution:</deep> Since there are three unknowns  <span v-katex="'c_0'"></span>, <span v-katex="'c_1'"></span> and <span v-katex="'x_1'"></span>, we expect the formula to be exact for <span v-katex="'f(x) = 1, x'"></span> and <span v-katex="'x^2'"></span>. Thus,

                        <div v-katex:display="'\\begin{aligned}f(x) = 1:,\\;\\; \\int_{0}^1 f(x) dx \&= 1 = c_0 + c_1,\\\\ f(x) = x:,\\;\\; \\int_{0}^1 f(x) dx \&= \\frac{1}{2} = c_1x_1,\\\\ f(x) = x^2:,\\;\\; \\int_{0}^1 f(x) dx \&= \\frac{1}{3} = c_1x_1^2, \\end{aligned}'"></div>

                        Solving, yields <span v-katex="'x_1 = \\frac{2}{3}'"></span> and <span v-katex="'c_1 = \\frac{3}{4}'"></span>.
                        The first equation gives <span v-katex="'c_0=1 - c_1=\\frac{1}{4}'"></span>.
                        The formula is
                        <div v-katex:display="'\\int_0^1 f(x)dx = \\frac{1}{4}f(0) + \\frac{3}{4}f\\left(\\frac{2}{3}\\right)'"></div>
                    </div>
                    <!--./Example 5.7-->
                </div>
                <!--./Section 5.3.2-->
            </div>

            <!--./Section 5.3-->
            <!--Section 5.4-->
            <div class="my-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    5.4 Gaussian Quadrature Formulas
                </h4>
                <hr class="blue mb-4 mt-0 ">

                Most numerical integration formulas are based on the pattern


                <!--Equation 5.14-->
                <div class="table-responsive table-stripped" style="width:100%;">

                    <table class="table">
                        <thead>
                            <tr>

                                <th>
                                    <div v-katex:display="' \\int_{a}^b f(x)dx \\approx A_0f(x_0) + A_1f(x_1) + A_2f(x_2) + \\cdots + A_nf(x_n).'"></div>
                                </th>
                                <th>
                                    <div v-katex:display="'(5.14)'"></div>
                                </th>


                            </tr>
                        </thead>

                    </table>
                </div>
                <!--./Equation 5.14-->
                The formula can be used for any prescribed <deep>nodes</deep> <span v-katex="'x_0'"></span>, <span v-katex="'x_1,\\ldots, x_n'"></span> and the <deep>weights</deep><span v-katex="'A_0, A_1,\\ldots, A_n'"></span>.
                To determine the weights, it may be assumed that an interpolation polynomial <span v-katex="'P(x)'"></span> is a good approximation of <span v-katex="'f(x)'"></span> and
                <span v-katex="'\\int_{a}^b P(x)dx'"></span> is a good approximation of <span v-katex="'\\int_{a}^b f(x)dx'"></span>. If the polynomial <span v-katex="'P(x)'"></span> that interpolates <span v-katex="'f(x)'"></span> is

                <div v-katex:display="'P(x)=\\sum_{i=0}^nf(x_i)\\ell_i(x),'"></div>


                where <span v-katex="'\\displaystyle \\ell_i(x)'"></span> is the <span v-katex="'\\displaystyle i^{\\text{th}}'"></span> Lagrange polynomial, then

                <div v-katex:display="'\\int_a^b\\;f(x)\\;dx\\simeq \\int_a^b\\;P(x)dx=\\sum_{i=0}^nf(x_i)\\; \\int_a^b\\;\\ell_i(x)\\;dx,'"></div>

                If we let

                <div v-katex:display="'\\displaystyle A_i=\\int_a^b\\;\\ell_i(x)'"></div>

                then we have a quadrature rule.

                <!--Example 5.8-->
                <div style="background-color: #e2e3e5" class="my-3  p-3">
                    <span class="font-weight-bold">Example 5.8</span>
                    Construct a quadrature rule on the interval [0,4] using the
                    nodes 0, 1, 2 and use your quadrature rule to approximate

                    <div v-katex:display="'\\int_0^4\\;\\frac{4x}{\\sqrt{x^2+1}}\\;dx.'"></div>

                    The nodes are given: <span v-katex="'x_0=0, ~ x_1=1, ~ x_2=2'"></span> so we need to first
                    find and then integrate the Lagrange polynomials <span v-katex="'\\displaystyle \\ell_i(x)'"></span>.<br>

                    Nb. <span v-katex="'\\displaystyle \\int_0^4\\;f(x)\\;dx\\simeq f(x_0)\\;  \\int_0^4\\;\\ell_0(x)\\;dx+f(x_1)\\; \\int_0^4\\;\\ell_1(x)\\;dx+f(x_2)\\; \\int_0^4\\;\\ell_2(x)\\;dx'"></span> where

                    <div v-katex:display="'\\begin{aligned} \\ell_0(x)\&=\\frac{(x-1)(x-2}{(0-1)(0-2)}=\\frac{1}{2}(x-1)(x-2),\\cr \\ell_1(x)\&=\\frac{(x-0)(x-2)}{(1-0)(1-2)}=-x(x-2)\\cr \\ell_2(x)\&=\\frac{(x-0)(x-1)}{(2-0)(2-1)}=\\frac{1}{2}x(x-1). \\end{aligned}'"></div>

                    The coefficients are then
                    <div v-katex:display="'\\begin{aligned} A_0=\\int_0^4\\;\\ell_0(x)\\;dx&=\\int_0^4\\;\\frac{1}{2}(x-1)(x-2)\\;dx=\\frac{8}{3},\\cr A_1=\\int_0^4\\;\\ell_1(x)\\;dx&=\\int_0^4\\;-x(x-2)\\;dx=-\\frac{16}{3}\\cr A_2=\\int_0^4\\;\\ell_2(x)\\;dx\&=\\int_0^4\\;\\frac{1}{2}x(x-1)\\;dx=~~~\\frac{20}{3}. \\end{aligned}'"></div>
                    Thus the quadrature rule is

                    <div v-katex:display="'\\int_0^4\\;f(x)\\;dx\\approx \\frac{8}{3}f(0)-\\frac{16}{3}f(1)+\\frac{20}{3}f(2).'"></div>


                    Now, <span v-katex="'\\dosplaystyle f(x)=\\frac{4x}{\\sqrt{x^2+1}}'"></span>, <span v-katex="'\\displaystyle f(0)=0, ~~ f(1)=2\\sqrt{2}, ~~f(2)=\\frac{8}{\\sqrt{5}}'"></span>. Thus



                    <div v-katex:display="'\\int_0^4\\;f(x)\\;dx\\approx \\frac{8}{3}\\times 0-\\frac{16}{3}\\times 2\\sqrt{2}+\\frac{20}{3}\\times \\frac{8}{\\sqrt{5}}=8.766447.'"></div>


                </div>
                <!--./Example 5.8-->
                <h5 class="h5-responsive font-weight-bold mt-3 py-3">
                    Determining the nodes weights by undetermined
                    coefficients
                </h5>
                The following example illustrates how nodes and
                weights may be determined by the method of undetermined
                coefficients.


                <!--Example 5.9-->
                <div style="background-color: #e2e3e5" class="my-3  p-3">
                    <span class="font-weight-bold">Example 5.9</span>
                    For the case <span v-katex="'n=2'"></span>, the quadrature formula is

                    <div v-katex:display="'\\int_{-1}^1\\,f(x)\\,dx= A_1f(x_1)+A_2f(x_2).'"></div>

                    In the formula we have 4 unknowns, <span v-katex="'A_1, A_2'"></span>, <span v-katex="'x_1'"></span> and <span v-katex="'x_2'"></span>, so
                    we are possibly looking at a cubic polynomial. To obtain the
                    unknowns we thus evaluate the integral when:

                    <ol>
                        <li style="margin-bottom:10px;">
                            <span v-katex="'f(x)=x^3'"></span>,
                        </li>
                        <li style="margin-bottom:10px;">
                            <span v-katex="'f(x)=x^2'"></span>,
                        </li>
                        <li style="margin-bottom:10px;">
                            <span v-katex="'f(x)=x '"></span> and,
                        </li>
                        <li>
                            <span v-katex="'f(x)=1'"></span>.
                        </li>
                    </ol>

                    Doing so gives <span v-katex="'A_1=A_2=1'"></span> and <span v-katex="'\\displaystyle x_2=-x_1=\\sqrt{\\frac{1}{3}}'"></span>. This yields the formula

                    <div v-katex:display="'\\int_{-1}^{1}f(x)dx \\approx f\\left(-\\frac{1}{\\sqrt{3}}\\right)+f\\left(\\frac{1}{\\sqrt{3}}\\right)'"></div>.
                </div>
                <!--./Example 5.9-->
                <!--Section 5.4.1-->
                <div class="my-3 py-3">
                    <h5 class="h5-responsive font-weight-bold"> 3.4.1 Gaussian Quadrature Theorem</h5>
                    It was observed by Friedrich Gauss
                    that a special placement of the nodes
                    may yield better accuracy of the integration
                    instead of searching for arbitrary nodes.
                    The result of Gauss is summarised in the theorem below,

                    <!--Theorem 5.2-->
                    <div class="theorem my-3 p-3 ">
                        <theorem-color>Theorem 5.2</theorem-color><deep>Gauss Quadrature Theorem</deep><br />



                        Let <span v-katex="'q'"></span> be a non-trivial polynomial of degree <span v-katex="'n+1'"></span> such that

                        <div v-katex:display="' \\int_a^b x^k q(x) dx = 0,\\;\\;\\; 0 \\leq k \\leq n'"></div>

                        Let <span v-katex="'x_0, x_1,\\ldots, x_n'"></span> be the zeros of <span v-katex="'q'"></span>. Then the formula

                        <div v-katex:display="' \\int_a^b f(x) dx \\approx \\sum_{i = 0}^n A_i f(x_i),;\\;\\;\\text{where }\\;\\;\\; A_i = \\int_a^b \\ell_i(x)dx'"></div>


                        with these <span v-katex="'x_i'"></span>'s as nodes will be exact for
                        all polynomials of degree at most <span v-katex="'2n+1'"></span>.
                        Furthermore, the nodes line in the open interval <span v-katex="'(a,b)'"></span>
                    </div>
                    <!--./Theorem 5.2-->
                    <!--Example 5.10-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 5.10</span>

                        Determine the Gaussian quadrature formula
                        with three Gaussian nodes and three weights for the integral

                        <div v-katex:display="'\\int_{-1}^{1}f(x)'"></div>

                        <deep>Solution.</deep>
                        Applying the Gaussian Quadrature Theorem,
                        we must find the polynomial <span v-katex="'q'"></span> and its roots.
                        The degree of <span v-katex="'q'"></span> is 3, so <span v-katex="'q'"></span> takes the form

                        <div v-katex:display="'q(x) = c_0 + c_1x + c_2x^2 + c_3x^3'"></div>

                        The conditions that <span v-katex="'q'"></span> must satisfy are

                        <div v-katex:display="'\\int_{-1}^1 q(x)dx = \\int_{-1}^1 x q(x)dx = \\int_{-1}^1x^2q(x)dx = 0.'"></div>

                        If we let <span v-katex="'c_0 = c_2 = 0'"></span>, then <span v-katex="'q(x) = c_1x + c_3x^3'"></span>, and so

                        <div v-katex:display="'\\int_{-1}^1 q(x)dx = \\int_{-1}^1x^2q(x)dx = 0'"></div>

                        because the integral of an odd function over a
                        symmetric interval is 0. To obtain  <span v-katex="'c_1'"></span> and  <span v-katex="'c_3'"></span>,
                        we impose the condition

                        <div v-katex:display="'\\int_{-1}^{1}x(c_1x + c_3x^3)dx = 0 '"></div>

                        to obtain

                        <div v-katex:display="'\\frac{2}{3}c_1 + \\frac{2}{5}c_3 = 0'"></div>

                        A convenient solution of this is <span v-katex="'c_1 = -3'"></span> and <span v-katex="'c_3 = 5'"></span>. Hence, we obtain
                        <div v-katex:display="'q(x) = 5x^3 - 3x '"></div>

                        with roots <span v-katex="'-\\sqrt{3/5}'"></span>,
                        0 and <span v-katex="'\\sqrt{3 /5}'"></span>. These are the
                        Gaussian nodes for the desired
                        quadrature formula.<br />

                        To obtain the weights <span v-katex="'A_0, A_1'"></span> and <span v-katex="'A_2'"></span>,
                        we use the method of undetermined coefficients.
                        We want to determine <span v-katex="'A_0'"></span>, <span v-katex="'A_1'"></span> and <span v-katex="'A_2'"></span> in
                        the formula

                        <div v-katex:display="'\\int_{-1}^1 f(x)dx \\approx A_0f\\left(\\sqrt{-\\frac{3}{5}}\\right)+ A_1f(0) + A_2f\\left(\\sqrt{\\frac{3}{5}}\\right) '"></div>

                        This equation must be exact for <span v-katex="'f(x) = 1, x'"></span> and <span v-katex="'x^2'"></span>.
                        Substituting these <span v-katex="'f'"></span> monomials and computing the
                        integrals gives
                        <div v-katex:display="'\\begin{aligned} A_0 + A_1 + A_2\& = 2\\\\ A_0 - A_2\& = 0\\\\ A_0 + A_2 \&= \\frac{10}{9} \\end{aligned}'"></div>

                        The weights are <span v-katex="'A_0 = A_2 = \\frac{5}{9}'"></span> and <span v-katex="'A_1 = \\frac{8}{9}'"></span>. Thus the formula is

                        <div v-katex:display="'\\int_{-1}^1 f(x)dx \\approx \\frac{5}{9} f\\left(\\sqrt{-\\frac{3}{5}}\\right)+ \\frac{8}{9}f(0) + \\frac{5}{9}f\\left(\\sqrt{\\frac{3}{5}}\\right) '"></div>
                    </div>
                    <!--./Example 5.10-->
                    <!--Example 5.11-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 5.11</span>
                        Use the two-point Gaussian Quadrature rule,
                        <div v-katex:display="'\\int_{-1}^{1}f(x)~dx \\approx f\\left(\\frac{-\\sqrt{3}}{3}\\right) + f\\left(\\frac{\\sqrt{3}}{3} \\right),'"></div>

                        to approximate the integral

                        <div v-katex:display="'\\int_0^1 x^2 e^{-x}~dx'"></div>

                        and compare your result against the exact value of the integral<br />

                        <deep>Solution:</deep>

                        We note that the limits of integration are not <span v-katex="'-1'"></span> and <span v-katex="'1'"></span>.  In this case, we use a linear shift using
                        <div v-katex:display="'      x=\\frac{(b-a)t+b+a}{2} '"></div>
                        to transform the interval <span v-katex="'[a,b]'"></span> to
                        <span v-katex="'[-1,1]'"></span>.<br />



                        To use the formula, we start by defining <span v-katex="'\\displaystyle x = \\frac{1+t}{2}'"></span>

                        <div v-katex:display="'\\begin{aligned} \& ~~~~\\int_0^1 x^2 e^{-x}~dx = \\frac{1}{2}\\int_{-1}^{1}\\left(\\frac{1+t}{2}\\right)^2\\exp(-\\frac{1+t}{2})\\\\ \&\\approx \\frac{1}{2}\\left\\{\\left(\\frac{1-\\frac{\\sqrt{3}}{2}}{2} \\right)^2\\exp\\left[-\\left(\\frac{1-\\frac{\\sqrt{3}}{2}}{2}\\right)\\right] +   \\left(\\frac{1 + \\frac{\\sqrt{3}}{2}}{2}\\right)^2\\exp\\left[-\\left(\\frac{1+\\frac{\\sqrt{3}}{2}}{2}\\right)\\right] \\right\\}\\\\  \&= \\frac{1}{2}\\left\\{(0.8095)(0.04466) + (0.4544)(0.6220) \\right\\} = 0.1594 \\end{aligned}'"></div>

                        Exact value of the integral is

                        <div v-katex:display="'\\int_0^1 x^2 e^{-x}~dx = \\left. -x^2e^{-x} - 2xe^{-x}-2e^{-x}\\right |_0^1 = 0.1606'"></div>

                        Thus, the Error is <span v-katex="'= 0.0012'"></span>

                    </div>
                    <!--./Example 5.11-->
                </div>
                <!--./Section 5.4.1-->


            </div>
            <!--./Section 5.4-->
            <!--Exercise 5.1-->
            <div class="my-3 p-3" style="background-color:#fff3e0">
                <h5 class="h4-responsive">Exercise 5.1  <deep>Numerical Integration:</deep></h5>

                <ol>
                    <li style="margin-bottom:15px">
                        Using the smallest step-size possible, approximate
                        <div v-katex:display="'\\int_2^6 \\frac{1}{1 + x}~dx'"></div>

                        Simpson's rule using only the values of <span v-katex="'f(x)'"></span> at <span v-katex="'x = 2, 3, 4, 5 '"></span>
      and <span v-katex="'6'"></span>.
                    </li>


                    <li style="margin-bottom:15px">
                        Evaluate the integral <span v-katex="'{\\displaystyle \\int_0^1 x^2e^{-x}\\,dx}'"></span> analytically
      correct to two decimal places. Use the trapezoidal rule, then
      Simpson's rule both with <span v-katex="'h=0.25'"></span> to compute the same integral.
      Compare the results.
                    </li>
                    <li style="margin-bottom:15px">
                        Determine the values of <span v-katex="'n'"></span> and <span v-katex="'h'"></span> required to approximate
                        <div v-katex:display="'\\int_0^2 \\frac{1}{x+4}~dx'"></div>
                        to within <span v-katex="'10^{-5}'"></span> then compute the approximation using
                        <ol style="list-style-type:lower-latin">
                            <li style="margin-bottom:10px;">

                                Composite Trapezoid rule
                            </li>
                            <li style="margin-bottom:10px;">
                                Composite Simpson rule
                            </li>
                        </ol>
                    </li>
                    <li style="margin-bottom:15px">

                        Consider the integral <span v-katex="'{\\displaystyle \\int_0^1 \\sin \\left(\\frac{\\pi x^2}{2}\\right)dx}'"></span>. Suppose
      that we wish to integrate numerically, with an error of magnitude
      less than <span v-katex="'10^{-3}'"></span>.
                        <ol style="list-style-type:lower-latin">
                            <li style="margin-bottom:10px;">
                                What width <span v-katex="'h'"></span> is needed if we wish to use the composite
      Trapezoid rule?
                            </li>
                            <li style="margin-bottom:10px;">
                                What width <span v-katex="'h'"></span> is needed if we wish to use the composite
      Simpson rule?
                            </li>
                        </ol>
                    </li>

                    <li style="margin-bottom:15px">
                        Evaluate the integral
                        <div v-katex:display="'\\int_0^2 \\ln(1 + x)~dx'"></div>
                        by
                        <ol style="list-style-type:lower-latin">
                            <li style="margin-bottom:10px;">
                                Trapezoidal rule with accuracy <span v-katex="'\\epsilon = 0.05'"></span>
                            </li>
                            <li style="margin-bottom:10px;">
                                Simpson rule using step size <span v-katex="'h = 0.5'"></span>
                            </li>
                        </ol>
                    </li>

                    <li style="margin-bottom:15px">
                        Suppose an approximation to <span v-katex="'\\displaystyle I=\\int_0^{2h} f(x) \\, dx'"></span> is
      sought, and <span v-katex="'f(x)'"></span> in <span v-katex="'[0,2h]'"></span> is approximated by the linear
      function through the TWO points <span v-katex="'(0,f(0))'"></span>, and <span v-katex="'(h,f(h))'"></span>.

                        <ol style="list-style-type:lower-latin">
                            <li style="margin-bottom:10px;">
                                Write down the Lagrange representation of the polynomial that
                                interpolates <span v-katex="'f'"></span> at the two points <span v-katex="'(0,f(0))'"></span>, and <span v-katex="'(h,f(h))'"></span>.
                            </li>
                            <li style="margin-bottom:10px;">
                                By integrating the polynomial in (a) above
                                between <span v-katex="'0'"></span> and <span v-katex="'2h'"></span>, prove that the desired quadrature formula is
      simply
                                <div v-katex:display="' I \\approx \\tilde{I} =2hf(h).'"></div>
                            </li>
                        </ol>
                    </li>
                    <li style="margin-bottom:15px">


                        <ol style="list-style-type:lower-latin">
                            <li style="margin-bottom:10px;">
                                 Use a three-point Gaussian Quadrature 
                                rule to approximate <span v-katex="'\\displaystyle=\\int_0^2 e^{-x^2} \\, dx'"></span>.<br />
                                <deep>Note:</deep>
                                <div v-katex:display="' \\displaystyle \\left \\{ \\begin{array}{ccc} x_0 = -\\sqrt{\\frac{3}{5}}& ~~ \& A_0=\\frac{5}{9}\\\\ x_1 = 0\& ~~ \& A_1=\\frac{8}{9}\\\\ x_2 = \\sqrt{\\frac{3}{5}}\& ~~ \& A_2=\\frac{5}{9} \\end{array} \\right .'"></div>
                            </li>
                           
                        </ol>
                    </li>

                    <li style="margin-bottom:15px">

                        Let <span v-katex="'p_2(x)'"></span> be the quadratic polynomial interpolating <span v-katex="'f(x)'"></span> at
                                                                                                       <span v-katex="'(0,f(0))'"></span>, <span v-katex="'(h,f(h))'"></span> and <span v-katex="'(2h,f(2h))'"></span>.
                        <ol style="list-style-type:lower-latin">
                            <li style="margin-bottom:10px;">
                                Write down the Lagrange representation of <span v-katex="'p_2(x)'"></span>.
                            </li>
                            <li style="margin-bottom:10px;">
                                By integrating <span v-katex="'p_2(x)'"></span> between <span v-katex="'0'"></span> and <span v-katex="'3h'"></span>, derive the
      following numerical integration rule that 
                                approximates <span v-katex="'\\displaystyle I=\\int_0^{3h} f(x)\\, dx'"></span>; 
                                                                   that is, show that
                                <div v-katex:display="'I \\approx \\frac{3h}{4} \\left [ f(0) +3f(2h)\\right ].'"></div>
                            </li>
                        </ol>
                    </li>
                    <li style="margin-bottom:15px">
                        Let <span v-katex="'p_2(x)'"></span> be the quadratic polynomial interpolating <span v-katex="'f(x)'"></span> at
                                                                                                       <span v-katex="'(0,f(0))'"></span>, <span v-katex="'(h,f(h))'"></span> and <span v-katex="'(2h,f(2h))'"></span>.
                        <ol style="list-style-type:lower-latin">
                            <li style="margin-bottom:10px;">
                                Write down the the polynomial <span v-katex="'p_2(x)'"></span> in Newton
      forward-difference form.
                            </li>
                            <li style="margin-bottom:10px;">
                                By integrating <span v-katex="'p_2(x)'"></span> between <span v-katex="'h'"></span> and <span v-katex="'2h'"></span>, derive the
      following numerical integration rule that approximates <span v-katex="'\\displaystyle I=\\int_h^{2h} f(x)\\, dx'"></span>; that is, show that
                                <div v-katex:display="'  I \\approx \\frac{h}{12} \\left [ -f(0) +8f(h)+5f(2h)\\right ].'"></div>
                            </li>
                        </ol>
                    </li>
                    <li style="margin-bottom:15px">
                        Use the two-point Gaussian Quadrature rule,
                        <div v-katex:display="'\\int_{-1}^{1}f(x)~dx \\approx f\\left(\\frac{-\\sqrt{3}}{3}\\right) + f\\left(\\frac{\\sqrt{3}}{3} \\right),'"></div>
                        to approximate the integral
                        <div v-katex:display="'\\int_0^1 x^2 e^{-x}~dx'"></div>
                        and compare your result against the exact value of the integral.
                    </li>
                    <li style="margin-bottom:15px">

                        Prove that the Gaussian quadrature formula with three Gaussian
                        nodes and three weights for the integral <span v-katex="'\\displaystyle \\int_{-1}^1 f(x)~dx'"></span>
      is
                        <div v-katex:display="' \\int_{-1}^{1} f(x)~dx \\approx \\frac{5}{9} f\\left( -\\sqrt{\\frac{3}{5}} \\right) + \\frac{8}{9} f(0) + \\frac{5}{9}f\\left( \\sqrt{\\frac{3}{5}}\\right)'"></div>

                        use the above
                        formula to approximate the integral

                        <div v-katex:display="'\\int_{-1}^1 x^4~dx'"></div>

                    </li>
                    <li style="margin-bottom:15px">
                        The quadrature formula <span v-katex="'\\displaystyle \\int_{-1}^{1} f(x)~dx \\approx c_0 f(-1) +c_1f(0)+c_2f(1)'"></span> is
                                                     exact for all polynomials of degree less than or equal
      to 2. Determine <span v-katex="'c_0'"></span>, <span v-katex="'c_1'"></span> and <span v-katex="'c_2'"></span>.
                    </li>
                    <li style="margin-bottom:15px">
                        The quadrature formula <span v-katex="'\\displaystyle \\int_{0}^{1} f(x)~dx \\approx c_0 f(0) +c_1f(x_1)'"></span>
       has the highest degree of precision. Determine <span v-katex="'c_0'"></span>, <span v-katex="'c_1'"></span> and
                                                                                     <span v-katex="'x_1'"></span>.
                    </li>
                    <li style="margin-bottom:15px">
                        The quadrature formula <span v-katex="'\\displaystyle \\int_{0}^{1} f(x)~dx \\approx \\frac{1}{2} f(x_0) +c_1f(x_1)'"></span>
       has the highest degree of precision. Determine <span v-katex="'x_0'"></span>, <span v-katex="'c_1'"></span> and
                                                                                     <span v-katex="'x_1'"></span>.
                    </li>
                    <li style="margin-bottom:15px">
                        Establish a numerical integration formula of the form
                        <div v-katex:display="'\\int_a^b f(x)~dx \\approx A f(a) + B f\'(b)'"></div>
                        that is accurate for polynomials of as high a degree as possible.
                    </li>

                    <li style="margin-bottom:15px">
                        Construct a quadrature rule of the form
                        <div v-katex:display="' \\int_{-1}^{1} f(x)~dx \\approx \\alpha f\\left(-\\frac{1}{2}\\right) + \\beta f(0) + \\gamma f\\left(\\frac{1}{2}\\right)'"></div>

                        that is exact for all polynomials of degree <span v-katex="'\\leq 2'"></span>; that is,
      determine values for <span v-katex="'\\alpha'"></span>, <span v-katex="'\\beta'"></span> and <span v-katex="'\\gamma'"></span>.
                    </li>
                </ol>

            </div>
            <!--./Exercise 5.1-->
        </section>
    </div>

</template>

<script>


    export default {
        name: 'unit5'
    }
</script>
