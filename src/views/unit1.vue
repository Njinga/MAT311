<template>
    <div class="unit1">
        <section class="py-3 px-3 mx-4" style="background-color:#fff3e0">
            <h3 class=" h3-responsive font-weight-bold"> 1. Errors</h3>
        </section>
        <!--Chapter 1.1 start here-->
        <section class="dark-grey-text mb-4 pt-3 px-3 mx-4">
            <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                1.1 Sources of errors
            </h4>
            <hr class="blue mb-4 mt-0 ">
            <div>
                <p>
                    Errors may be categorized as follows:
                    <ol>
                        <li>
                            <strong>Modelling Errors:</strong>Mathematical equations which are used to represent physical phenomena
                            are known as <i>mathematical models</i>. Mathematical formulations are seldom
                            exactly descriptive of any real situation, but only of more or less idealized models. The
                            modelling itself introduces errors into the mix. Mathematical equations can be solved
                            exactly but the solution differs from physical reality that is being modelled.
                        </li>
                        <li>
                            <strong>Human Errors:</strong>This classification includes all aspects of human intervention which
                            cause errors in the calculation e.g arithmetic errors, programming errors, etc.
                        </li>
                        <li>
                            <strong>Measurement Errors:</strong>In measuring observable phenomena, errors are introduced by
                            measuring devices and the manner in which data is collected.
                        </li>
                        <li>
                            <strong>Machine Errors:</strong>Theway in which computers represent numbers internally introduces
                            errors into the mix.
                        </li>
                        <li>
                            <strong>Mathematical Approximations:</strong> Some mathematical calculations simply cannot be
                            given exactly. Instead an approximation may be used. Examples of mathematical approximation
                            are Taylor series representation e.g
                            <div class="row">
                                <div class="col">
                                    <div v-katex:display="'\\cos x \\approx 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!}+...,'"></div>
                                </div>
                                <div class="col">
                                    <div v-katex:display="'(1.1)'"></div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <div v-katex:display="'\\frac{1}{1-x} = 1 + x + x^2+...'"></div>
                                </div>
                                <div class="col">
                                    <div v-katex:display="'(1.2)'"></div>
                                </div>
                            </div>
                            The above approximations are good when <span v-katex="'x'"></span> is small but are very crude when <span v-katex="'x'"></span> is large.
                        </li>

                    </ol>
                </p>
            </div>
            <div class="mb-4 pt-3">
                <h4 class="h4-responsive font-weight-bold">1.1.1 Definitions</h4>

                <div class="note note-definition">
                    <span class="text-success"> Definition 1.1</span><br>
                    <strong>Error</strong> Suppose that <span v-katex="'x'"></span> and <span v-katex="'\\tilde{x}'"></span> are two numbers of which <span v-katex="'\\tilde{x}'"></span> is an approximation
                    to <span v-katex="'x'"></span>. The error of <span v-katex="'\\tilde{x}'"></span> as an approximation to <span v-katex="'x'"></span> is defined as
                    <div class="row text-center mt-2">
                        <div class="col">
                            <div v-katex:display="'\\text{Error = exact value - approximate value}'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(1.3)'"></div>
                        </div>
                    </div>
                    <div class="row text-center mt-2">
                        <div class="col">
                            <div v-katex:display="'\\text{Error} = x-\\tilde{x}'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(1.4)'"></div>
                        </div>
                    </div>
                </div>

                <div class="note note-definition mt-2">
                    <span class="text-success"> Definition 1.2</span><br>
                    <strong>Absolute error</strong> If <span v-katex="'\\tilde{x}'"></span> is an approximation to <span v-katex="'x'"></span>, we say that the absolute error in <span v-katex="'\\tilde{x}'"></span> is

                    <div class="row text-center mt-2">
                        <div class="col">
                            <div v-katex:display="'\\text{Absolute Error} =|x - \\tilde{x}|'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(1.5)'"></div>
                        </div>
                    </div>
                </div>


                <div class="note note-definition mt-2">
                    <span class="text-success"> Definition 1.3</span><br>
                    <strong>Relative error</strong> If  <span v-katex="'\\tilde{x}'"></span> is an approximation to x, we say that the relative
                    error in  <span v-katex="'\\tilde{x}'"></span> is

                    <div class="row text-center mt-2">
                        <div class="col">
                            <div v-katex:display="'\\text{Relative Error}= \\frac{|\\text{exact value}-\\text{approximate value}|}{|\\text{exact value}|}'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(1.6)'"></div>
                        </div>
                    </div>
                    <div class="row text-center mt-2">
                        <div class="col">
                            <div v-katex:display="'\\text{Relative Error}= \\frac{|x-\\tilde{x}|}{|x|}~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(1.7)'"></div>
                        </div>
                    </div>
                </div>

                <div class="note note-definition mt-2">
                    <span class="text-success"> Definition 1.4</span><br>
                    <strong>Percentage error</strong> If  <span v-katex="'\\tilde{x}'"></span> is an approximation to  <span v-katex="'x'"></span>, we say that the percentage
                    error in  <span v-katex="'\\tilde{x}'"></span> is

                    <div class="row text-center mt-2">
                        <div class="col">
                            <div v-katex:display="'\\text{Percentage Error}= 100\\frac{|x-\\tilde{x}|}{|x|}'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(1.8)'"></div>
                        </div>
                    </div>
                </div>

                <div class=" mt-2" style="background-color:#e2e3e5">
                    <span class="font-weight-bold"> Definition 1.4 </span>Consider the following approximations
                    <ol style="list-style:lower-roman;">
                        <li>
                            <span v-katex="'~~x = 2347.59~~~~~~~~{\\rm by}~~~~~~~\\tilde{x} = 2347.6'"></span>
                        </li>
                        <li>
                            <span v-katex="'~~x = 0.02~~~~~~~~{\\rm by}~~~~~~~\\tilde{x} = 0.01'"></span>
                        </li>
                    </ol>
                    Find the absolute, relative and percentage error in each case<br>
                    Answer:
                    <ol style="list-style:lower-roman">
                        <li>
                            <br>
                            <!--row 1-->
                            <div class="row">
                                <div class="col">
                                    <div v-katex:display="'\\rm {Absolute~ error} = |2347.59 - 2347.6| = 0.01 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'"></div>
                                </div>
                                <div class="col">
                                    <div v-katex:display="'(1.9)'"></div>
                                </div>
                            </div>
                            <!--row 2-->
                            <div class="row">
                                <div class="col">
                                    <div v-katex:display="'\\rm {Relative~ error} = \\frac{|2347.59 - 2347.6|}{2347.59} = \\frac{0.01}{2347.59} = 0.000004259~~~~~~~~~~~~ '"></div>
                                </div>
                                <div class="col">
                                    <div v-katex:display="'(1.10)'"></div>
                                </div>
                            </div>
                            <!--row 3-->
                            <div class="row">
                                <div class="col">
                                    <div v-katex:display="'\\rm {Percentage ~error} = 100\\frac{|2347.59 - 2347.6|}{2347.59} = 100\\frac{0.01}{2347.59} = 0.0004259'"></div>
                                </div>
                                <div class="col">
                                    <div v-katex:display="'(1.11)'"></div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <br>
                            <!--row 1-->
                            <div class="row">
                                <div class="col">
                                    <div v-katex:display="'\\rm {Absolute~ error} = |0.02 - 0.01| = 0.01 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'"></div>
                                </div>
                                <div class="col">
                                    <div v-katex:display="'(1.12)'"></div>
                                </div>
                            </div>
                            <!--row 2-->
                            <div class="row">
                                <div class="col">
                                    <div v-katex:display="'\\rm{ Relative~ error} = \\frac{|0.02 - 0.01|}{0.02} = \\frac{0.01}{0.02} = 0.5~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ '"></div>
                                </div>
                                <div class="col">
                                    <div v-katex:display="'(1.13)'"></div>
                                </div>
                            </div>
                            <!--row 3-->
                            <div class="row">
                                <div class="col">
                                    <div v-katex:display="'{\\rm Percentage ~error} = 100\\frac{|0.02 - 0.01|}{0.02} = 100\\frac{0.01}{0.02} = 50~~~~~~~~~~~~~~~~~~~~~'"></div>
                                </div>
                                <div class="col">
                                    <div v-katex:display="'(1.14)'"></div>
                                </div>
                            </div>
                        </li>
                    </ol>

                </div>
            </div>
        </section>
        <!--/Chapter 1.1 Start here -->
        <!--Chapter 1.2 start here-->
        <section class="dark-grey-text mb-4 pt-3 px-3 mx-4" id="c-1-2">
            <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                1.2 Error Analysis
            </h4>
            <hr class="blue mb-4 mt-0 ">
            <div>
                A computer's representation of real numbers is limited to the fixed precision of the mantissa. True values are sometimes not stored exactly by a computer's representation. This is called <strong>round-off error</strong>.
                The actual number stored in a computer may undergo chopping or rounding of the last digit.

                <!--Chapter 1.2.1 start here-->
                <div class="mt-4" id="c-1-2-1">
                    <h4 class="h4-responsive">1.2.1 Significant digits</h4>
                    <div class="note note-definition">
                        <span class="text-success">Defination 1.5</span><br>
                        Significant digits (figures) are digits beginning with the leftmost
                        <strong>nonzero</strong> digit and ending with the rightmost <strong>correct</strong> digit, including final zeros that
                        are exact.
                    </div>
                    <div class="ml-3 mt-2">
                        <h4 class="h4-responsive my-4">Basic Rules of significant digits</h4>
                        <ol>
                            <li>
                                All nonzero digits are significant.
                            </li>
                            <li>
                                All zeroes between significant digits are significant.
                            </li>
                            <li>
                                All zeroes which are both to the right of the decimal point and to the right of all non-zero significant digits are themselves significant.
                            </li>
                        </ol>

                    </div>
                    Significant figure are the "interesting" or "important" figures e.g
                    <ul>
                        <li>
                            3.14159 has six significant digits (all the numbers give you useful information)
                        </li>
                        <li>
                            1000 has one significant digit (only the 1 is interesting; you don't know anything for sure about the hundreds, tens, or units places; the zeroes may just be placeholders;
                            they may have rounded something off to get this value)
                        </li>
                        <li>
                            1000.0 has five significant digits (the ".0" tells us something interesting about the presumed accuracy of the measurement being made: that the measurement is accurate
                            to the tenths place, but that there happen to be zero tenths)
                        </li>
                        <li>
                            0.00035 has two significant digits (only the 3 and 5 tell us something; the other zeroes are placeholders,
                            only providing information about relative size)
                        </li>
                        <li>
                            0.000350 has three significant digits (that last zero tells us that the measurement was made accurate to
                            that last digit, which just happened to have a value of zero)
                        </li>
                        <li>
                            1006 has four significant digits (the 1 and 6 are interesting, and we have to count the zeroes,
                            because they're between the two interesting numbers)
                        </li>
                        <li>
                            560 has two significant digits (the last zero is just a placeholder)
                        </li>
                        <li>
                            560.0 has four significant digits (the zero in the tenths place means that
                            the measurement was made accurate to the tenths place, and that there just
                            happen to be zero tenths; the 5 and 6 give useful information, and the other
                            zero is between significant digits, and must therefore also be counted)
                        </li>
                    </ul>

                </div>
            </div>
            <!--./Chapter 1.2.1 end here-->
            <!--Chapter 1.2.2 start here-->
            <div class="mt-4" id="c-1-2-2">
                <h4 class="h4-responsive">1.2.2 Chopping and Rounding Off</h4>
                Consider any real number <span v-katex="'R'"></span> that is expressed in a <em>normalized decimal form</em>:
                <div class="row">
                    <div class="col">
                        <div v-katex:display="'R =  \\pm 0.d_1d_2d_3\\cdots d_kd_{k+1}\\cdots \\times 10^{n}'"></div>

                    </div>
                    <div class="col">
                        <div v-katex:display="'(1.15)'"></div>
                    </div>
                </div>
                where <span v-katex="'d_1 \\neq 0'"></span> and <span v-katex="'0 \\leq d_j \\leq 9'"></span> for <span v-katex="'j   > 1'"></span>.
                Suppose that <span v-katex="'k'"></span> is the maximum number of decimal digits
                carried in the floating-point computations of a computer,
                then the real number <span v-katex="'R'"></span> is represented by
                <span v-katex="'fl_{\\rm chop}(R)'"></span>, which is given by
                <div v-katex:display="'fl_{\\rm chop}(R) = \\pm 0.d_1d_2d_3\\cdots d_k  \\times 10^{n}'"></div>

                where <span v-katex="' d_1 \\neq 0'"></span> and <span v-katex0="' \\leq d_j \\leq 9'"></span> for <span v-katex="'1 < j \leq k'"></span>.
                The number <span v-katex="' fl_{\rm chop}(R)'"></span> is called the <strong>chopped floating-point representation</strong> of <span v-katex="'R'"></span> .
                In this case, the <span v-katex="'k'"></span>th digit of
                <span v-katex="'fl_{\\rm chop}(R) '"></span> agrees with the <span v-katex="'k'"></span>th digit of <span v-katex="'R'"></span>.<br>
                An alternative <span v-katex="'k-'"></span>digit representation is the <strong>rounded floating-point representation</strong>  <span v-katex="'fl_{\\rm round}(R) '"></span>, which is given by
                <div v-katex:display="'fl_{\\rm round}(R) = \\pm 0.d_1d_2d_3\\cdots r_k  \\times 10^{n}'"></div>


                where <span v-katex="'d_1 \\neq 0'"></span> and <span v-katex="'0 \\leq d_j \\leq 9'"></span> for <span v-katex="'1 < j < k'"></span>
                and the last digit  <span v-katex="'r_k'"></span> is obtained by rounding the
                number  <span v-katex="'d_k d_{k+1}d_{k+2}\\cdots'"></span> to the nearest integer.
                For example, the real number

                <div v-katex:display="' R = \\frac{22}{7} =    3.142857142857143 '"></div>

                has the following six digit representations:
                <ul style="list-style:none;">
                    <li>
                        <div v-katex:display="'fl_{\\rm chop}(R) = 0.314285 \\times 10^{1}'"></div>
                    </li>
                    <li>
                        <div v-katex:display="'fl_{\\rm round}(R) = 0.314286 \\times 10^{1}'"></div>
                    </li>
                </ul>
                For common purposes the chopping and rounding would be written as 3.14285 and 3.14286 respectively.
            </div>
            <!--./Chapter 1.2.2 end here-->
            <!--Chapter 1.2.3 start here-->
            <div class="mt-4" id="c-1-2-3">
                <h4 class="h4-responsive">1.2.3 Loss of Significance</h4>
                <p>
                    One of the most common deterioration in precision is the
                    subtraction of one quantity from another nearly equal quantity.
                    The closer these two numbers are to each other the more pronounced
                    is the effect.
                </p>


                Consider the two numbers <span v-katex="'p = 3.1415926536'"></span>
                and  <span v-katex="'q = 3.1415957341'"></span>,
                which are nearly equal and both carry 11 decimal digits of precision.
                Suppose that their difference is formed
                <div v-katex:display="'p - q = -0.0000030805'"></div>

                Since the first six digits of <span v-katex="'p'"></span> and <span v-katex="'q'"></span> are the same,
                their difference <span v-katex="'p - q'"></span> contains only five decimal digits
                of precision. This phenomenon is called <strong>loss of significance </strong>
                or <strong>subtractive cancellation</strong>.

                <div style="background-color: #e2e3e5" class="mt-3 mb-4">
                    <strong>Example 1.2</strong>
                    Compare the results of calculating <span v-katex="'f(500)'"></span> and <span v-katex="'g(500)'"></span> using six digits and rounding.
                    The functions are
                    <div v-katex:display="'f(x) = x\\left(\\sqrt{x+1} - \\sqrt{x}\\right)\\;\\;\\;\\;\\text{and}\\;\\;\\;\\;g(x) = \\frac{x}{\\sqrt{x+1}+\\sqrt{x}}'"></div>
                </div>
                Answer: For the first function <span v-katex="'f(x),'"></span>
                <div v-katex:display="'f(500) = 500 (\\sqrt{501} - \\sqrt{500})~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'"></div>
                <div v-katex:display="'~~~~~~~~~=500 (22.3830 - 22.3607) = 500(0.0223) = 11.1500'"></div>
                for <span v-katex="'g(x),'"></span>
                <div v-katex:display="'g(500) = \\frac{500}{\\sqrt{501} + \\sqrt{500}}~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'"></div>
                <div v-katex:display="'~~~~~~~~~~~~~~~~~~=\\frac{500}{22.3830 + 22.3607} = \\frac{500}{44.7437} = 11.1748'"></div>

                <div class="mt-4">
                    Note that the second function <span v-katex="'g(x),'"></span> is algebraically equivalent to <span v-katex="'f(x),'"></span> as shown by the
                    computation
                    <div v-katex:display="'f(x) = \\frac{x(\\sqrt{x+1}-\\sqrt{x})(\\sqrt{x+1}+\\sqrt{x})}{(\\sqrt{x+1}+\\sqrt{x})}'"></div>
                    <div v-katex:display="'  = \\frac{x}{(\\sqrt{x+1}-\\sqrt{x})} = g(x)~~~~~~~'"></div>


                    The answer, <span v-katex="'g(500) = 11.1748'"></span>, involves less error and is the same as that obtained by rounding the true answer <span v-katex="'11.174755300747198...'"></span> to six digits.

                    <div style="background-color: #e2e3e5;" class="my-4">
                        <strong> Example 1.3</strong> Compare the results of calculating <span v-katex="'f(0.01)'"></span> and <span v-katex="'P(0.01) '"></span> using six digits and rounding, where
                        <div v-katex:display="' f(x) = \\frac{e^{x} - 1 - x}{x^2}\\;\\;\\;\\;\\text{and}\\;\\;\\;\\; P(x) = \\frac{1}{2} + \\frac{x}{6} + \\frac{x^2}{24}.'"></div>
                        Answer:The function <span v-katex="'P(x)'"></span> is the Taylor polynomial of degree <span v-katex="'n = 2'"></span> for <span v-katex="'f(x)'"></span> expanded about <span v-katex="'x=0'"></span>.
                        For the first function
                        <div v-katex:display="'f(0.01) = \\frac{e^{0.01} - 1 - 0.01}{(0.01)^2} =\\frac{1.010050 - 1 - 0.01}{0.001} = 0.5.'"></div>
                        For the second function
                        <div v-katex:display="' P(0.01) = \\frac{1}{2} + \\frac{0.01}{6} + \\frac{0.0001}{24}~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'"></div>
                        <div v-katex:display="'= 0.5  + 0.001667 + 0.000004 = 0.501671'"></div>
                        The answer <span v-katex="'P(0.01) = 0.501671'"></span> contains less error and is the same as that obtained by rounding the true answer <span v-katex="'0.50167084168057542'"></span> ... to six digits.

                    </div>
                    <div style="background-color: #e2e3e5;" class="my-4">
                        <strong>Example 1.4</strong> Let <span v-katex="'P(x) = x^3 - 3x^2 + 3x - 1'"></span> and <span v-katex="'Q(x) = ((x-3)x + 3)x - 1'"></span>. Use
                        three-digit rounding arithmetic to compute approximations to <span v-katex="'P(2.19)'"></span> and <span v-katex="'$Q(2.19)$'"></span>. Compare
                        them with the true values, <span v-katex="'P(2.19) = Q(2.19) = 1.685159'"></span>
                        <div v-katex:display="'P(2.19)  \\approx  (2.19)^3 - 3(2.19)^2 + 3(2.19) - 1'"></div>
                        <div v-katex:display="'~~~~~~~~~~= 10.5 - 14.4  + 6.57 - 1 = 1.67'"></div>
                        <div v-katex:display="'Q(2.19) \\approx ((2.19 - 3)2.19 + 3) - 1 = 1.69'"></div>
                        The errors are <span v-katex="'0.015159'"></span> and <span v-katex="'-0.004841'"></span>, respectively. Thus the approximation <span v-katex="'Q(2.19) \\approx 1.69'"></span> has less error.
                    </div>
                    The last three examples suggest three different ways of avoiding loss of significance. Sometimes the loss of significance can be avoided by
                    rearranging terms in the function using a known identity from
                    trigonometry or algebra.
                    <div style="background-color: #e2e3e5;" class="my-4">
                        <strong>Example 1.5</strong>Refer to Page 62 - 67 of Cheney and Kincaid i.e Chapter 4
                        from Example 4.5
                    </div>

                </div>
            </div>
            <!--./Chapter 1.2.3 end here-->
        </section>
        <!--./Chapter 1.2 end here-->
        <!--Exercises start here-->
        <section class="dark-grey-text mb-4 pt-3 px-3 mx-4" style="background-color:#fff3e0" id="ex-1">
            <h4 class="h4-responsive">Exercise1.1  <strong>Error analysis</strong></h4>
            <ol>
                <li>
                    Using three-digit rounding arithmetic, perform the following
                    calculations. Compute the absolute and relative error. Repeat the
                    computations using three-digit chopping arithmetic.
                    <ol style="list-style:lower-latin">
                        <li>
                            <span v-katex="'133 + 0.921'"></span>
                        </li>
                        <li>
                            <span v-katex="'133 - 0.499'"></span>
                        </li>
                        <li>
                            <span v-katex="'(121 - 0.327) - 119'"></span>
                        </li>
                        <li>
                            <span v-katex="'\\displaystyle \\left(\\frac{2}{9}\\right)\\cdot\\left(\\frac{9}{7} \\right)'"></span>
                        </li>
                    </ol>
                </li>
                <li>
                    Suppose that we are working with a five-place decimal machine
                    and wish to add the numbers <span v-katex="'x'"></span> and <span v-katex="'y'"></span> where
      <div v-katex:display="' x=0.37218 \\times 10^4~~~~~~\\text{and}~~~~~~y=0.71422\\times 10^{-1}'"></div>
      Show that the relative error involved in the machine addition is
      approximately <span v-katex="'\\displaystyle 0.77 \\times 10^{-5}'"></span>
                </li>
                <li>
                    What is the relative error involved in rounding <span v-katex="'4.9997'"></span> to
                                                                    <span v-katex="'5.0000'"></span>?
                </li>
                <li>
                    Consider a computer that uses five-decimal-digit numbers. Let
                    <span v-katex="'fl(x)'"></span> denote the floating-point machine number closest to <span v-katex="'x'"></span>.
      Show that if <span v-katex="'x=0.5321487513'"></span> and <span v-katex="'y=0.5321304421'"></span> then the
      operation <span v-katex="'fl(x) - fl(y)'"></span> involves a large relative error of <span v-katex="'9\\%'"></span>
                </li>
                <li>
                    Using <span v-katex="'x = 0.785398'"></span>, compute each of the following.
                    Theoretically, all values should be the same. Are they??? (N.B put
                    your calculator in radians mode)
                    <div v-katex:display="'\\cos^2 x - \\sin^2 x~~,~~(\\cos x - \\sin x)(\\cos x - \\sin x)~~,~~~1 - 2\\sin^2 x~~~~,~~~\\cos 2x'"></div>

                </li>
                <li>
                    Let <span v-katex="'P(x) = x^3 - 3x^2 + 3x - 1'"></span>. Find a function <span v-katex="'Q(x)'"></span> that is a reformulation
      of <span v-katex="'P(x)'"></span> to avoid loss of significance. Use three digit rounding arithmetic
      to compute approximations to <span v-katex="'P(2.19)'"></span> and <span v-katex="'Q(2.19)'"></span>. Find the absolute errors
      involved in the computations.
                </li>
                <li>
                    How can the following functions be re-written to avoid
                    problems due to loss of precision?
                    <div v-katex:display="'f(x) = \\sqrt{x^2 + 4} - 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'"></div>
                    <div v-katex:display="'f(x) = 1 - \\cos x~~~\\text{in the vicinity of } x = 0'"></div>
                    <div v-katex:display="'f(x) = x - \\sin x~~~\\text{in the vicinity of } x = 0'"></div>
                    <div v-katex:display="'~~~f(x) = e^x - x - 1 ~~~\\text{in the vicinity of } x = 0'"></div>
                    <div v-katex:display="'f(x) = \\ln(x+1) - \\ln(x)~~~\\text{for large } x~~~~~~~~~'"></div>
                    <div v-katex:display="'f(x) = \\cos^2(x) - \\sin^2(x)~~~\\text{for } x \\approx \\pi/4~~~~~~~'"></div>
                    <div v-katex:display="'f(x) = \\sqrt{\\frac{1+\\cos(x)}{2}}~~~\\text{for } x \\approx \\pi~~~~~~~~~~~~~~~~'"></div>
                </li>
                <li>
                    Find the roots of the following quadratic equation (as accurately as possible) using
                    eight digits and rounding
                    <div v-katex:display="'x^2 - 100000x + 1 = 0 '"></div>
                </li>
                <li>
                    Given the function <span v-katex="'\\displaystyle{f(h) = \\sqrt{9-h} - 3}'"></span>
                    <ol style="list-style:lower-roman;">
                        <li>
                            find a suitable function <span v-katex="'g(h)'"></span> that has been reformulated to
                            be  algebraically  equivalent to <span v-katex="'f(h)'"></span> with the aim of avoiding loss
                            of significance error.
                        </li>
                        <li>
                            Compare the results of calculating  <span v-katex="'f(0.0001)'"></span> and <span v-katex="'g(0.0001)'"></span>
                            using <strong>six digits</strong> and <strong>chopping</strong>.
                        </li>
                    </ol>
                </li>
            </ol>
        </section>

        <!--./Exercises end here-->

    </div>

</template>

<script>
    // @ is an alias to /src


    export default {
        name: 'unit1'


    }
</script>
<style scoped>

    .note {
        padding: 10px;
        border-left: 6px solid;
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }

        .note strong {
            font-weight: 600;
        }

        .note p {
            font-weight: 500;
        }

        .note.note-definition {
            background-color: #f9fbe3;
            border-color: #49a75f;
        }

        .note.note-primary {
            background-color: #dfeefd;
            border-color: #176ac4;
        }

        .note.note-secondary {
            background-color: #e2e3e5;
            border-color: #58595a;
        }

        .note.note-success {
            background-color: #e2f0e5;
            border-color: #49a75f;
        }

        .note.note-danger {
            background-color: #fae7e8;
            border-color: #e45460;
        }

        .note.note-warning {
            background-color: #faf4e0;
            border-color: #c2a442;
        }

        .note.note-info {
            background-color: #e4f2f5;
            border-color: #2492a5;
        }

        .note.note-light {
            background-color: #fefefe;
            border-color: #0f0f0f;
        }

        .note.note-exmaple {
            background-color: #e2e3e5;
        }
</style>