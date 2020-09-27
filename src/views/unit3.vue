<template>
    <div class="unit2">
        <section class="py-3 px-3 mx-4 grey-text" style="background-color:#fff3e0">
            <h3 class=" h3-responsive font-weight-bold"> 3. Roots of Nonlinear Equations</h3>
        </section>

        <section class="dark-grey-text mb-4 p-3 mx-4">

            <!--Section 3.1-->
            <div class="mb-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    3.1 Bisection Method
                </h4>
                <hr class="blue mb-4 mt-0 ">
                <h5 class="pb-2 mb-3 font-weight-bold">Intended learning outcomes</h5>


                By the end of this section, you will be able to
                <ul>
                    <li>
                        Derive and apply the Bisection Method to compute roots of nonlinear equations
                    </li>
                    <li>
                        Derive the statement of the Bisection theorem from the convergence analysis
                        of the Bisection Method algorithm
                    </li>
                    <li>
                        Compute an estimate of the number of steps required for the Bisection
                        Method algorithm to give a solution that is accurate to within a
                        specified error tolerance
                    </li>
                    <li>
                        Identify the strengths and weaknesses of the Bisection method
                    </li>
                </ul>

                The Bisection method is a root finding
                algorithm which is based on the <deep>Intermediate Value Theorem</deep>.

                <!--Theorem 3.1-->
                <div class="theorem my-3 p-3 ">
                    <theorem-color>Theorem 3.1</theorem-color> <deep>Intermediate-Value Theorem (IVT)</deep><br>

                    If a function <span v-katex="'f(x)'"></span> is <i>continuous</i> on <span v-katex="'[a,b]'"></span> and <span v-katex="'K'"></span> is a number between
                    <span v-katex="'f(a)'"></span> and <span v-katex="'f(b)'"></span>, then there exist a number <span v-katex="'c'"></span> in <span v-katex="'(a,b)'"></span> for which <span v-katex="'f(c)=K'"></span>.
                </div>
                <!--./Theorem 3.1-->
                The figure below shows one choice for the number that is guaranteed by the  IVT.

                <!--Don't forget to remove this div once you are done with the diagram-->
                <div class=" my-3 p-3 " style="background-color:coral; font-size:30px;">
                    Diagram needed
                </div>

                <!--SVG code-->

                <!--./SVG code-->

                <deep>NB:</deep> If a function  <span v-katex="'f(a)'"></span> and  <span v-katex="'f(b)'"></span> have opposite signs
                i.e if  <span v-katex="'f(a)f(b) < 0'"></span>, by the IVT    <span v-katex="'\\exists'"></span> a number  <span v-katex="'c'"></span> in  <span v-katex="'(a,b)'"></span> for which  <span v-katex="'f(c) = 0'"></span>

                <!--Theorem 3.2-->
                <div class="theorem my-3 p-3 ">
                    <theorem-color>Theorem 3.2</theorem-color> Let <span v-katex="'f(x)'"></span> be a real valued function,
                    defined and continuous on a bounded closed interval <span v-katex="'[a,b]'"></span>.
                    Assume further that <span v-katex="'f(a)f(b) < 0'"></span>, then, there
                    exists <span v-katex="'\\xi'"></span> in <span v-katex="'[a,b]'"></span> such that
                    <span v-katex="'f(\\xi)=0'"></span>.


                </div>
                <!--./Theorem 3.2-->
                <!--Example 1-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 3.1</span>

                    Examples of the application of the IVT

                    <ol>
                        <li>
                            Does the function <span v-katex="'x^5 - 2x^3 + 3x^2 - 1 = 0'"></span> have a solution in [0,1]?<br>
                            Answer: Consider <span v-katex="'f(x) = x^5 - 2x^3 + 3x^2 - 1'"></span>, we have<br>
                            <div v-katex:display="'f(0) = -1 < 0  \\text{ and } f(1) = 1 > 0'"></div>
                            and <span v-katex="'f(x)'"></span> is continuous. Hence the IVT implies that a number <span v-katex="'x'"></span> exists
                            with <span v-katex="'0 < x < 1'"></span> for which <span v-katex="'f(x) = 0'"></span>
                            <br><br />
                        </li>
                        <li>
                            Does <span v-katex="'h(x) = x \\sin x - 1'"></span> have a solution in [0, 2].<br>
                            Answer: Compute <span v-katex="'h(0)'"></span> and <span v-katex="'h(1)'"></span>.
                            <div v-katex:display="'h(0) = -1.000000~~~\\text{ and } ~~~h(2) = 0.818595'"></div>

                            Since <span v-katex="'h(0)h(1) < 0'"></span> there is a root in (0,2)
                        </li>
                    </ol>

                </div>
                <!--./Exapmle 1-->
                <!--Section 3.1.1-->
                <div class="my-4">
                    <h5 class="h5-responsive mt-4 mb-2">
                        3.1.1 Bisection method algorithm
                    </h5>
                    The bisection method algorithm calls for the repeated
                    halving of subintervals of <span v-katex="'[a,b]'"></span> and, at each step,
                    locating the half containing <span v-katex="'c'"></span>. This is summarized below:<br />

                    <deep>Bisection Method Algorithm to find root in <span v-katex="'[a,b]'"></span></deep>

                    <ol>
                        <li>
                            Bisect <span v-katex="'[a,b]'"></span> into two halves <span v-katex="'[a,c]'"></span>
                            and <span v-katex="'[c,b]'"></span> where
                            <span v-katex="'\\displaystyle{c=\\frac{a + b}{2}}'"></span>
                        </li>
                        <li>
                            Identify the interval
                            containing the root by checking
                            the signs of <span v-katex="'f(a)f(c)'"></span> and <span v-katex="'f(c)f(b)'"></span>.
                        </li>
                        <li>
                            If <span v-katex="'f(a)f(c) < 0'"></span> then
                            interval <span v-katex="'[a,c]'"></span> has the
                            root. Otherwise the other
                            interval <span v-katex="'[c,b]'"></span> has
                            the root.
                        </li>
                        <li>
                            Bisect the new interval that contains the root and repeat steps 1-3.
                        </li>
                        <li>
                            At each step take the midpoint of the interval as
                            the most updated approximation of the root.
                        </li>
                        <li>
                            Stop the procedure after a specified number of iterations
                            or when the width of the interval containing the root is
                            less than a given tolerance <span v-katex="'\\varepsilon'"></span>.
                        </li>
                    </ol>
                    To begin, we set <span v-katex="'a_1 = a'"></span>,
                    and <span v-katex="'b_1 = b'"></span>, and
                    let <span v-katex="'c_1'"></span> be the midpoint of <span v-katex="'[a,b]'"></span>; that is

                    <!--Equation 3.1-->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'c_1 = a_1 + \\frac{b_1 - a_1}{2} = \\frac{a_1 + b_1}{2}'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(3.1)'"></div>
                            </div>

                        </div>

                    </div>
                    <!--./Equation 3.1-->
                    <p>
                        If <span v-katex="'f(c_1) = 0'"></span>, then <span v-katex="'c = c_1'"></span>,
                        and we are done. If <span v-katex="'f(c_1) \\neq 0'"></span>,
                        then <span v-katex="'f(c_1)'"></span> has the same sign as
                        either <span v-katex="'f(a_1)'"></span> or <span v-katex="'f(b_1)'"></span>.
                        When <span v-katex="'f(c_1)'"></span> and <span v-katex="'f(a_1)'"></span> have
                        the same sign, <span v-katex="'c \\in (c_1,b_1)'"></span> and we set
                        <span v-katex="'a_2=c_1'"></span> and <span v-katex="'b_2=b_1'"></span>.
                        When <span v-katex="'f(c_1)'"></span> and <span v-katex="'f(a_1)'"></span> have
                        opposite signs, <span v-katex="'c \\in (a_1,c_1)'"></span>, and we set
                        <span v-katex="'a_2=a_1'"></span> and <span v-katex="'b_2=c_1'"></span>. We then
                        reapply the process to the
                        interval <span v-katex="'[a_2,b_2]'"></span>. This
                        procedure is illustrated in the figure below
                    </p>
        

                    <!--SVG code-->
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                         width="" height="" viewBox="0 0 805.000000 279.000000"
                         preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,279.000000) scale(0.100000,-0.100000)"
                           fill="#000000" stroke="none">
                            <path d="M7396 2616 c3 -7 -2 -41 -10 -74 -20 -77 -20 -106 1 -123 15 -13 15
-12 4 6 -11 17 -11 29 0 65 7 25 14 52 15 60 2 8 6 30 9 48 5 25 2 32 -9 32
-9 0 -13 -6 -10 -14z" />
                            <path d="M414 2572 c-31 -21 -45 -91 -21 -110 10 -9 12 -4 9 23 -2 19 3 48 11
64 9 17 15 31 14 31 -1 0 -7 -4 -13 -8z" />
                            <path d="M475 2570 c-3 -5 -4 -10 -1 -10 3 0 -1 -20 -8 -45 -12 -39 -12 -46 2
-57 9 -7 13 -8 9 -2 -3 6 0 36 7 67 12 51 8 74 -9 47z" />
                            <path d="M3901 2554 c-22 -28 -28 -78 -11 -89 6 -4 10 7 10 25 0 17 7 44 15
60 19 37 13 38 -14 4z" />
                            <path d="M3977 2566 c-4 -10 -5 -21 -2 -24 9 -9 17 6 13 25 -3 17 -4 17 -11
-1z" />
                            <path d="M570 2543 c-18 -9 -20 -13 -7 -13 14 0 17 -9 17 -54 0 -44 -4 -55
-17 -59 -10 -3 2 -5 27 -5 25 0 37 2 28 5 -14 3 -18 18 -20 71 l-3 68 -25 -13z" />
                            <path d="M4040 2543 c-18 -9 -20 -13 -7 -13 14 0 17 -9 17 -54 0 -44 -4 -55
-17 -59 -10 -3 2 -5 27 -5 25 0 37 2 28 5 -14 3 -18 18 -20 71 l-3 68 -25 -13z" />
                            <path d="M7451 2533 c10 -17 10 -29 -4 -64 -19 -48 -16 -62 6 -27 27 42 29 64
7 89 -18 21 -19 21 -9 2z" />
                            <path d="M7530 2503 c-18 -9 -20 -13 -7 -13 14 0 17 -9 17 -54 0 -44 -4 -55
-17 -59 -10 -3 2 -5 27 -5 25 0 37 2 28 5 -14 3 -18 18 -20 71 l-3 68 -25 -13z" />
                            <path d="M502 2188 l3 -53 3495 0 3495 0 3 53 c3 47 1 52 -17 52 -17 0 -21 -6
-21 -35 l0 -35 -1720 0 -1720 0 0 35 c0 28 -4 35 -20 35 -16 0 -20 -7 -20 -35
l0 -35 -1725 0 -1725 0 0 35 c0 25 -4 35 -16 35 -12 0 -14 -10 -12 -52z" />
                            <path d="M3907 1752 c9 -5 7 -27 -7 -86 -12 -51 -15 -87 -10 -100 8 -19 9 -19
9 6 1 22 19 107 37 171 4 13 0 17 -18 17 -14 0 -18 -3 -11 -8z" />
                            <path d="M414 1702 c-31 -21 -45 -91 -21 -110 10 -9 12 -4 9 23 -2 19 3 48 11
64 9 17 15 31 14 31 -1 0 -7 -4 -13 -8z" />
                            <path d="M475 1700 c-3 -5 -4 -10 -1 -10 3 0 -1 -20 -8 -45 -12 -39 -12 -46 2
-57 9 -7 13 -8 9 -2 -3 6 0 36 7 67 12 51 8 74 -9 47z" />
                            <path d="M2162 1687 c-13 -14 -22 -36 -22 -55 0 -43 16 -49 17 -6 1 19 8 46
17 59 21 31 16 32 -12 2z" />
                            <path d="M2237 1693 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3
-9 2 -12 -2z" />
                            <path d="M580 1683 c17 -6 40 -32 40 -45 0 -5 -19 -29 -41 -53 l-42 -45 47 0
c25 0 46 5 46 10 0 6 -14 10 -32 10 l-32 0 37 34 c20 18 37 38 37 43 0 20 -33
53 -53 52 -15 0 -17 -2 -7 -6z" />
                            <path d="M2282 1678 c-14 -14 -16 -48 -2 -48 5 0 9 10 7 23 -2 17 3 22 23 22
20 0 26 -6 28 -29 3 -22 -5 -37 -34 -67 l-38 -39 47 0 c32 0 47 4 47 13 0 9
-10 12 -32 9 l-33 -4 33 32 c36 35 42 74 13 90 -26 13 -44 13 -59 -2z" />
                            <path d="M546 1664 c-8 -22 -7 -34 3 -34 5 0 9 11 9 25 0 29 -3 31 -12 9z" />
                            <path d="M3965 1630 c0 -34 -6 -55 -20 -70 l-20 -23 22 14 c39 23 57 95 31
117 -10 8 -13 -1 -13 -38z" />
                            <path d="M4032 1637 c-15 -18 -19 -35 -7 -33 5 0 10 8 10 16 0 21 35 19 49 -3
9 -13 7 -25 -7 -50 l-19 -32 26 24 c31 29 33 52 8 74 -22 20 -46 22 -60 4z" />
                            <path d="M4100 1531 c0 -8 -12 -11 -37 -9 -22 2 -38 -2 -41 -10 -6 -20 74 -16
82 4 4 9 4 19 1 22 -3 3 -5 0 -5 -7z" />
                            <path d="M502 1318 l3 -53 1735 -3 c954 -1 1745 0 1758 3 19 5 22 12 22 55 0
43 -3 50 -20 50 -16 0 -20 -7 -20 -35 l0 -35 -855 0 -855 0 0 35 c0 24 -5 35
-15 35 -10 0 -15 -11 -15 -35 l0 -35 -855 0 -855 0 0 35 c0 25 -4 35 -16 35
-12 0 -14 -10 -12 -52z" />
                            <path d="M3907 882 c10 -6 8 -26 -6 -87 -12 -50 -16 -86 -11 -99 8 -19 9 -19
9 6 1 22 19 107 37 171 4 13 0 17 -18 17 -15 0 -19 -3 -11 -8z" />
                            <path d="M2141 814 c-23 -29 -27 -60 -11 -84 8 -12 10 -9 10 13 0 15 7 43 14
62 18 42 14 44 -13 9z" />
                            <path d="M2220 823 c-1 -10 -7 -35 -14 -56 -12 -33 -12 -38 3 -46 13 -8 16 -4
16 22 0 18 4 47 9 65 5 21 4 32 -3 32 -6 0 -11 -8 -11 -17z" />
                            <path d="M3032 817 c-13 -14 -22 -36 -22 -55 0 -43 16 -49 17 -6 1 19 8 46 17
59 21 31 16 32 -12 2z" />
                            <path d="M3107 823 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3
-9 2 -12 -2z" />
                            <path d="M2303 814 c-7 -3 -13 -15 -13 -26 0 -12 3 -18 8 -14 4 4 7 13 7 19 0
7 9 12 20 12 30 0 33 -43 4 -53 l-23 -9 22 -5 c16 -4 22 -14 22 -32 0 -21 -5
-26 -25 -26 -16 0 -25 6 -25 15 0 8 -5 15 -11 15 -14 0 -7 -21 13 -33 20 -13
64 -1 72 20 4 9 0 23 -8 31 -11 12 -12 19 -3 33 21 34 -20 70 -60 53z" />
                            <path d="M3150 801 c-13 -25 -13 -31 0 -31 6 0 10 9 10 20 0 13 7 20 19 20 35
0 37 -59 2 -61 -11 0 -8 -3 7 -10 32 -12 26 -51 -8 -60 l-25 -7 25 -1 c45 -2
69 47 34 67 -14 8 -14 10 0 21 20 17 20 26 0 45 -21 22 -51 20 -64 -3z" />
                            <path d="M3965 760 c0 -34 -6 -55 -20 -70 l-20 -23 22 14 c39 23 57 95 31 117
-10 8 -13 -1 -13 -38z" />
                            <path d="M4032 768 c-15 -15 -16 -38 -2 -38 6 0 10 8 8 18 -2 11 4 18 20 20
18 3 22 -1 22 -23 0 -17 -7 -29 -22 -35 l-23 -9 22 0 c22 -1 40 -32 28 -51
-10 -16 -55 -12 -55 6 0 8 -5 12 -10 9 -20 -12 12 -36 43 -33 40 4 58 32 35
54 -13 13 -14 20 -5 35 23 36 -30 78 -61 47z" />
                            <path d="M3140 694 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0
-10 -7 -10 -16z" />
                            <path d="M2242 448 l3 -53 865 -3 c476 -1 875 0 888 3 19 5 22 12 22 55 0 43
-3 50 -20 50 -17 0 -20 -7 -20 -40 l0 -40 -420 0 -420 0 0 40 c0 29 -4 40 -15
40 -11 0 -15 -11 -15 -40 l0 -40 -420 0 -420 0 0 40 c0 29 -4 40 -16 40 -12 0
-14 -10 -12 -52z" />
                        </g>
                    </svg>

                    <!--./SVG code-->

                    <div class="algorithm p-3">

                        <deep>Bisection method algorithm over <span v-katex="'N_0'"></span> iterations</deep>
                        <hr class="mt-0 black" style="width:360px;">

                        INPUTS: the function <span v-katex="'f(x)'"></span>, <span v-katex="'[a,b]'"></span>,
                        the number of iterations <span v-katex="'N_0'"></span><br>
                        OUTPUT: the approximate solution <span v-katex="'c'"></span><br>
                        for <span v-katex="'i = 1: N_0'"></span><br />
                        <span v-katex="'~~~~\\displaystyle{c = \\frac{a+b}{2}}'"></span><br />
                        <span v-katex="'~~~~if (f(c) == 0)'"></span><br />
                        <span v-katex="'~~~~~~\\text{break};'"></span> <br />
                        <span v-katex="' ~~~~\\text{elseif} (f(a)*f(c) < 0 )'"></span><br />
                        <span v-katex="'~~~~~~b = c;'"></span><br />
                        <span v-katex="'~~~~\\text{else}'"></span><br />
                        <span v-katex="'~~~~~~a = c;'"></span><br />
                        <span v-katex="'~~~~\\text{end}'"></span><br />
                        end
                    </div>

                    <!--Example 3.2-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 3.2</span>

                        The root of <span v-katex="'e^x - 2 = 0'"></span> is known to
                        exist in [0,2]. Use 8 iterations to find
                        an approximate
                        value of the root (or find an approximate
                        value of the root to within a tolerance
                        of <span v-katex="'\\varepsilon'"></span>)

                        <div class="container mb-4">
                            <div class="row">
                                <div class="col th">iter.#</div>
                                <div class="col th">
                                    <div v-katex:display="'a'"></div>
                                </div>
                                <div class="col th">
                                    <div v-katex:display="'c'"></div>
                                </div>
                                <div class="col th">
                                    <div v-katex:display="'b'"></div>
                                </div>
                                <div class="col th">
                                    <div v-katex:display="'f(a)'"></div>
                                </div>
                                <div class="col th">
                                    <div v-katex:display="'f(c)'"></div>
                                </div>
                                <div class="col th">
                                    <div v-katex:display="'f(b)'"></div>
                                </div>
                                <div class="col th">
                                    <div v-katex:display="'\\varepsilon'"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col th">1</div>
                                <div class="col th"> 0.0000</div>
                                <div class="col th">1.0000000</div>
                                <div class="col th"> 2.000000</div>
                                <div class="col th"> -1.0000</div>
                                <div class="col th"> 0.7183</div>
                                <div class="col th"> 5.3891</div>
                                <div class="col th"> 2.0000000</div>
                            </div>
                            <div class="row">
                                <div class="col th">2</div>
                                <div class="col th">  0.0000</div>
                                <div class="col th">0.5000000</div>
                                <div class="col th">1.000000</div>
                                <div class="col th">  -1.0000</div>
                                <div class="col th">  -0.3513</div>
                                <div class="col th"> 0.7183</div>
                                <div class="col th"> 1.0000000</div>
                            </div>
                            <div class="row">
                                <div class="col th">3</div>
                                <div class="col th"> 0.5000  </div>
                                <div class="col th">0.7500000  </div>
                                <div class="col th"> 1.000000    </div>
                                <div class="col th">-0.3513   </div>
                                <div class="col th">  0.1170   </div>
                                <div class="col th">  0.7183  </div>
                                <div class="col th"> 0.5000000</div>
                            </div>
                            <div class="row">

                                <div class="col th">4</div>
                                <div class="col th"> 0.5000</div>
                                <div class="col th">0.6250000</div>
                                <div class="col th">0.750000</div>
                                <div class="col th">-0.3513</div>
                                <div class="col th">-0.1318</div>
                                <div class="col th">0.1170</div>
                                <div class="col th"> 0.2500000</div>
                            </div>
                            <div class="row">

                                <div class="col th">5</div>
                                <div class="col th">   0.6250</div>
                                <div class="col th">0.6875000</div>
                                <div class="col th"> 0.750000</div>
                                <div class="col th">-0.1318</div>
                                <div class="col th">-0.0113</div>
                                <div class="col th">0.1170</div>
                                <div class="col th">0.1250000</div>
                            </div>
                            <div class="row">

                                <div class="col th">6</div>
                                <div class="col th">  0.6875</div>
                                <div class="col th">0.7187500</div>
                                <div class="col th">0.750000</div>
                                <div class="col th">-0.0113</div>
                                <div class="col th">           0.0519     </div>
                                <div class="col th">0.1170</div>
                                <div class="col th"> 0.0625000</div>
                            </div>
                            <div class="row">

                                <div class="col th">7</div>
                                <div class="col th"> 0.6875 </div>
                                <div class="col th">0.7031250</div>
                                <div class="col th"> 0.718750 </div>
                                <div class="col th">-0.0113     </div>
                                <div class="col th"> 0.0201</div>
                                <div class="col th">0.0519</div>
                                <div class="col th">0.0312500</div>
                            </div>
                            <div class="row">
                                <div class="col th">8</div>
                                <div class="col th">0.6875</div>
                                <div class="col th">0.6953125</div>
                                <div class="col th">0.703125 </div>
                                <div class="col th"> -0.0113</div>
                                <div class="col th">0.0043</div>
                                <div class="col th">0.0201</div>
                                <div class="col th">0.0156250</div>
                            </div>
                        </div>
                        where  <span v-katex="'\\varepsilon'"></span> = Error bound
                    </div>
                    <!--./Exapmle 3.2-->
                    The results given above were generated using the following matlab codes.<br />
                    The MATLAB function f1.m defines the function <span v-katex="'f1(x) = e^x - 2'"></span>  whose root is being sought.

                    <div style="font-style:oblique" class="my-4">
                        %% f1.m is a function file <br>
                        function y = f1(x)<br />
                        y = exp(x) - 2;
                    </div>
                    The MATLAB function bisect1.m perfoms the bisection procedure over [0,2] for <span v-katex="'N_0'"></span> iterations.

                    <div style="font-style:oblique" class="my-4">

                        %% -- bisect1.m <br />
                        %% This program is used for finding a root of f(x) = 0 <br />
                        %% between [a,b] after N0 iterations.<br />
                        %% The program uses the function f1.m<br />
                        N0  = 8; <br />
                        a = 0;<br />
                        b = 2;<br />
                        for i = 1: N0<br />
                        c = (a+b)/2;<br />
                        fprintf('%10.0f %10.4f %10.7f %10.6f %10.4f %10.4f %10.4f %10.7f\n',i,a,c,b,f1(a),f1(c),f1(b),b-a)<br />
                        if (f1(c) == 0)<br />
                        break;<br />
                        elseif (f1(a)*f1(c) &lt; 0 )<br />
                        b = c;<br />
                        else<br />
                        a = c;<br />
                        <move-right>end</move-right><br />
                        <br />
                        end<br />
                    </div>
                </div>
                <!--./Section 3.1.1-->
                <!--Section 3.1.2-->
                <div class="my-4">
                    <h5 class="h5-responsive mt-4 mb-2">
                        3.1.2 Convergence Analysis of Bisection Method
                    </h5>

                    <!--Theorem 3.3-->
                    <div class="theorem my-3 p-3 ">
                        <theorem-color>Theorem 3.3</theorem-color>
                        Assume that <span v-katex="'f \\in C[a,b]'"></span> and there exists a number <span v-katex="'r \\in [a,b]'"></span> such that <span v-katex="'f(r) = 0'"></span>. If
                        <span v-katex="'f(a)'"></span> and <span v-katex="'f(b)'"></span> have opposite signs, and <span v-katex="'\\left\\{c_n \\right\\}_{n=0}^{\\infty}'"></span> represents the sequence
                        of midpoints generated by the bisection process, then


                        <!--Equation 3.2-->
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div v-katex:display="' |r - c_n| \\leq \\frac{b - a}{2^{n+1}}~~~~~\\rm{for}~~n = 0, 1, \\ldots'"></div>
                                </div>
                                <div class="col">
                                    <div v-katex:display="'(3.2)'"></div>
                                </div>

                            </div>



                        </div>

                        <!--./Equation 3.2-->
                        and therefore the sequence converges to the root <span v-katex="'r'"></span>, that is

                        <div v-katex:display="' \\lim_{n\\rightarrow \\infty} c_n = r'"></div>


                    </div>
                    <!--./Theorem 3.3-->
                    Proof.<br />
                    Suppose <span v-katex="'f'"></span> is a continuous function that
                    takes values of opposite sign at the ends
                    of an interval <span v-katex="'[a_0,b_0]'"></span>.
                    Then there is a root <span v-katex="'r'"></span> in <span v-katex="'[a_0,b_0]'"></span>,
                    and if we use the midpoint <span v-katex="'\\displaystyle{c_0=\frac{a_0+b_0}{2}}'"></span> as
                    our estimate of <span v-katex="'r'"></span>, we have

                    <!--Equation 3.3-->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="' |r - c_0| \\leq \\frac{b_0 - a_0}{2}'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(3.3)'"></div>
                            </div>

                        </div>



                    </div>

                    <!--./Equation 3.3-->
                    as illustrated in the Figure below.

                    <div class="my-3">
                        <!--SVG cove-->
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                             width="" height="" viewBox="0 0 1158.000000 334.000000"
                             preserveAspectRatio="xMidYMid meet" class="my-3">

                            <g transform="translate(0.000000,334.000000) scale(0.100000,-0.100000)"
                               fill="#000000" stroke="none">
                                <path d="M2911 3067 c-9 -79 -6 -112 11 -115 24 -5 60 35 56 61 -2 12 -13 27
-26 32 -17 7 -22 16 -19 33 2 12 -1 22 -7 22 -6 0 -13 -15 -15 -33z m49 -55
c0 -30 -16 -52 -37 -52 -16 0 -17 34 -3 61 16 29 40 24 40 -9z" />
                                <path d="M3338 3033 c-8 -10 -18 -25 -21 -35 -7 -21 16 -52 34 -45 10 4 9 6
-3 6 -22 1 -24 39 -4 66 19 26 50 13 40 -17 -12 -40 -10 -53 10 -53 11 0 21 7
23 15 4 13 3 13 -6 0 -16 -23 -23 -5 -13 33 9 32 8 36 -12 41 -30 8 -31 8 -48
-11z" />
                                <path d="M3012 3018 c-7 -7 -12 -26 -12 -43 0 -56 51 -77 72 -30 13 29 1 77
-20 81 -7 1 -8 0 -2 -3 5 -2 10 -25 10 -49 0 -37 -3 -44 -20 -44 -25 0 -37 42
-21 76 12 27 11 30 -7 12z" />
                                <path d="M3462 3018 c-18 -18 -15 -74 6 -89 14 -11 15 -11 5 1 -16 18 -17 72
-1 88 7 7 10 12 7 12 -3 0 -10 -5 -17 -12z" />
                                <path d="M3511 2975 c1 -43 2 -46 10 -24 6 16 6 35 0 50 -8 20 -10 16 -10 -26z" />
                                <path d="M3173 3003 c20 -2 54 -2 75 0 20 2 3 4 -38 4 -41 0 -58 -2 -37 -4z" />
                                <path d="M3037 2903 c94 -2 252 -2 350 0 98 1 21 2 -172 2 -192 1 -273 -1
-178 -2z" />
                                <path d="M3182 2858 c-14 -14 -16 -48 -2 -48 5 0 9 10 7 23 -2 17 3 22 23 22
20 0 26 -6 28 -29 3 -22 -5 -37 -34 -67 l-38 -39 47 0 c32 0 47 4 47 13 0 9
-10 12 -32 9 l-33 -4 33 32 c36 35 42 74 13 90 -26 13 -44 13 -59 -2z" />
                                <path d="M671 2499 c-30 -10 -56 -21 -58 -23 -2 -2 24 -13 59 -25 44 -14 57
-16 44 -6 -18 13 275 15 2498 15 1838 0 2515 -3 2510 -11 -7 -12 15 -7 71 15
l30 12 -65 22 c-45 15 -59 17 -46 7 18 -13 -275 -15 -2493 -15 -2233 0 -2512
2 -2501 15 7 8 11 15 9 14 -2 0 -28 -9 -58 -20z" />
                                <path d="M4084 1950 c0 -85 2 -120 3 -77 2 42 2 112 0 155 -1 42 -3 7 -3 -78z" />
                                <path d="M4950 1945 c0 -90 4 -145 10 -145 6 0 10 55 10 145 0 90 -4 145 -10
145 -6 0 -10 -55 -10 -145z" />
                                <path d="M4169 2001 c12 -8 12 -17 -2 -65 -8 -31 -12 -58 -8 -61 4 -2 15 21
24 53 16 57 11 82 -17 82 -6 0 -5 -4 3 -9z" />
                                <path d="M4243 1988 c-2 -16 1 -18 10 -9 7 7 8 14 1 21 -6 6 -10 2 -11 -12z" />
                                <path d="M4695 1986 c-32 -32 -42 -73 -23 -92 13 -13 14 -12 11 13 -3 19 4 41
21 66 29 43 26 48 -9 13z" />
                                <path d="M4756 1981 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z" />
                                <path d="M4811 1966 c-19 -22 -23 -78 -9 -106 28 -54 88 -23 88 45 0 58 -50
96 -79 61z m54 -61 c0 -51 -3 -60 -19 -63 -24 -5 -36 14 -36 60 0 52 9 70 34
66 19 -3 21 -9 21 -63z" />
                                <path d="M4413 1943 c26 -2 68 -2 95 0 26 2 4 3 -48 3 -52 0 -74 -1 -47 -3z" />
                                <path d="M3276 1626 l-59 -23 62 -21 c48 -16 60 -18 51 -7 -11 13 135 15 1195
15 1089 0 1206 -2 1195 -16 -10 -12 -1 -10 41 6 30 12 55 23 57 25 2 1 -25 12
-60 24 -44 14 -57 16 -44 6 18 -13 -121 -15 -1188 -15 -1073 0 -1207 2 -1196
15 15 18 18 19 -54 -9z" />
                                <path d="M562 768 c-7 -7 -12 -24 -12 -38 0 -14 5 -31 12 -38 19 -19 66 -14
80 8 13 20 24 20 1263 20 1239 0 1250 0 1263 -20 8 -13 23 -20 42 -20 19 0 34
7 42 20 13 20 24 20 1268 20 1244 0 1255 0 1268 -20 16 -27 68 -27 84 0 13 20
24 20 2568 20 2544 0 2555 0 2568 -20 14 -22 61 -27 80 -8 15 15 15 61 0 76
-17 17 -63 15 -78 -3 -11 -13 -309 -15 -2570 -15 -2261 0 -2559 2 -2570 15
-16 19 -64 19 -80 0 -11 -13 -164 -15 -1270 -15 -1106 0 -1259 2 -1270 15 -16
19 -64 19 -80 0 -11 -13 -164 -15 -1265 -15 -1101 0 -1254 2 -1265 15 -15 18
-61 20 -78 3z" />
                                <path d="M10966 596 c3 -7 -2 -41 -10 -74 -20 -77 -20 -106 1 -123 15 -13 15
-12 4 6 -11 17 -11 29 0 65 7 25 14 52 15 60 2 8 6 30 9 48 5 25 2 32 -9 32
-9 0 -13 -6 -10 -14z" />
                                <path d="M504 552 c-29 -19 -46 -94 -24 -107 6 -4 10 7 10 27 0 18 7 45 14 61
16 30 16 30 0 19z" />
                                <path d="M565 550 c-3 -5 -4 -10 -1 -10 3 0 -1 -20 -8 -45 -12 -39 -12 -46 2
-57 9 -7 13 -8 9 -2 -3 6 0 36 7 67 12 51 8 74 -9 47z" />
                                <path d="M5731 534 c-23 -29 -27 -60 -11 -84 7 -11 10 -7 10 18 0 18 7 46 15
62 19 37 13 38 -14 4z" />
                                <path d="M5807 546 c-4 -10 -5 -21 -2 -24 9 -9 17 6 13 25 -3 17 -4 17 -11 -1z" />
                                <path d="M3187 539 c8 -8 7 -25 -3 -62 -16 -62 -17 -75 -5 -61 5 5 15 32 24
61 14 51 9 73 -17 73 -6 0 -6 -4 1 -11z" />
                                <path d="M3256 531 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z" />
                                <path d="M668 523 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
                                <path d="M5850 511 c-15 -30 -12 -97 6 -115 34 -35 74 -6 74 54 0 71 -15 79
-20 10 -4 -57 -8 -65 -25 -65 -18 0 -20 8 -23 62 -3 57 -1 62 20 66 23 4 23 4
1 6 -13 0 -27 -7 -33 -18z" />
                                <path d="M11021 513 c10 -17 10 -29 -4 -64 -19 -48 -16 -62 6 -27 27 42 29 64
7 89 -18 21 -19 21 -9 2z" />
                                <path d="M638 507 c-11 -27 -10 -85 2 -108 25 -45 80 -10 80 51 0 71 -15 79
-20 10 -4 -57 -8 -65 -25 -65 -17 0 -21 8 -25 65 -3 42 -8 59 -12 47z" />
                                <path d="M11108 493 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
                                <path d="M11078 477 c-11 -27 -10 -85 2 -108 25 -45 80 -10 80 51 0 71 -15 79
-20 10 -4 -57 -8 -65 -25 -65 -17 0 -21 8 -25 65 -3 42 -8 59 -12 47z" />
                            </g>
                        </svg>

                        <!--./SVG code-->
                    </div>
                    
                    If the bisection algorithm is now applied and if the computed
                    quantities are denoted <span v-katex="'a_0, b_0, c_0, a_1, b_1, c_1'"></span> and so on, then by the same reasoning,

                    <!--Equation 3.4-->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'  |r - c_n| \\leq \\frac{b_n - a_n}{2}'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(3.4)'"></div>
                            </div>

                        </div>



                    </div>
                    <!--./Equation 3.4-->
                    Observe that the successive interval widths form the pattern


                    <div v-katex:display="'b_1 - a_1 = \\frac{b_0 - a_0}{2}'"></div>
                    <div v-katex:display="'~~~~~~~~~~~~~~~~~~~b_2 - a_2 = \\frac{b_1 - a_1}{2} = \\frac{b_0 - a_0}{2^2}'"></div>

                    It is left as an exercise for you to use mathematical induction to show that

                    <!--Equation 3.5-->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'|b_n - a_n| \\leq \\frac{b_0 - a_0}{2^n}'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(3.5)'"></div>
                            </div>

                        </div>
                    </div>
                    <!--./Equation 3.5-->
                    Combining equations (3.4) and (3.5) results in

                    <!--Equation 3.6-->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'0 \\leq  |r - c_n| \\leq \\frac{b_0 - a_0}{2^{n+1}}~~~~~~\\textrm{ for all } n'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(3.6)'"></div>
                            </div>

                        </div>



                    </div>
                    <!--./Equation 3.6-->
                    An automatic root-finding procedure needs to monitor progress
                    toward the root and stop when current guess is close enough to
                    the desired root.
                    <ul>
                        <li>
                            Convergence checking will avoid searching to unnecessary
                            accuracy.
                        </li>
                        <li>
                            Check closeness of successive approximations
                            <div v-katex:display="'|x_k - x_{k-1}| < \\varepsilon '"></div>
                        </li>
                        <li>
                            Check how close  <span v-katex="'f(x)'"></span> is to zero at the current guess
                            <div v-katex:display="'|f(x_k)| < \\varepsilon'"></div>
                        </li>
                    </ul>

                    If an error tolerance has been prescribed in advance, it is possible to determine the number
                    of steps required in the bisection method.<br />
                    Suppose that we want <span v-katex="'|r - c_n| < \\varepsilon.'"></span> Then it
                    is necessary to solve the following inequality for <span v-katex="'n'"></span>:


                    <div v-katex:display="'\\frac{b - a}{2^{n+1}} < \\varepsilon'"></div>


                    By taking logarithms, we obtain
                    <div v-katex:display="' n > \\frac{\\log(b-a) - \\log(2\\varepsilon)}{\\log 2}'"></div>


                    <!--Example 3.3-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 3.3</span>
                        How many steps of the bisection algorithm are
                        needed to compute the root of a function
                        <span v-katex="'f(x)'"></span> to a precision of <span v-katex="'\\varepsilon  = 0.01'"></span> on the interval [0,2]<br>
                        <deep>Answer.</deep><span v-katex="'~~a = 0'"></span> and <span v-katex="'b = 2'"></span>.
                        <div v-katex:display="'\\frac{b - a}{2^{n+1}} < \\varepsilon'"></div>
                        <div v-katex:display="'~~~~\\frac{2-0}{2^{n+1}} < 0.01'"></div>
                        <div v-katex:display="'~~~~~~~~2^n > 100'"></div>
                        <div v-katex:display="'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~n > \\frac{\\log 100}{\\log 2} = 6.64'"></div>

                        Thus no more than <span v-katex="'n = 7'"></span> iterations would be needed to
                        achieve the convergence to within 0.01.

                    </div>
                    <!--./Example 3.3-->

                    <deep>Advantages of the bisection method</deep>
                    <ul>
                        <li>
                            It is simple to implement
                        </li>
                        <li>
                            It offers a good estimate of the maximum error <span v-katex="'\\varepsilon_{\\rm max}'"></span>

                            <div v-katex:display="'\\varepsilon_{\\rm max} \\leq \\frac{b - a}{2}'"></div>
                        </li>
                        <li>
                            Convergence is guaranteed if the root lies
                            inside the initial interval estimate <span v-katex="'[a,b]'"></span>
                            <br /><br />
                        </li>

                    </ul>

                    <deep>Disadvantages of the bisection method</deep>
                    <ul>
                        <li>
                            It converges slowly
                        </li>
                        <li>
                            It requires an initial interval estimate <span v-katex="'[a,b]'"></span> to enclose the root.
                        </li>

                    </ul>
                </div>



                <!--./Section 3.1.2-->
                <!--Exercise 3.1-->
                <div class=" mb-4 p-3 " style="background-color:#fff3e0">
                    <h4 class="h4-responsive">Exercise 3.1  <deep>Exercises on the Bisection Method</deep></h4>

                    <ol>
                        <li>
                            Apply the bisection method to the equation  <span v-katex="'\\sin x - 0.75 = 0'"></span> in the interval [0.8, 0.9] and
                            try to determine the actual root with three correct decimals.
                        </li>
                        <li>
                            Determine the first four approximations of the actual root of the equation  <span v-katex="'x^3 -\\frac{1}{2}'"></span>
                            in the interval [0,1] by the bisection method.
                        </li>
                        <li>
                            Take 4 steps of the bisection method to estimate a root of  <span v-katex="'\\sin x - 0.50'"></span> starting with the intervals (a) [0,1] and (b) [2, 3]. Estimate
                            the error in your result.
                        </li>
                        <li>
                            How many steps of the bisection method are required to bracket
                            the root in an interval of length  <span v-katex="'\\leq 10^{-3}'"></span> when the initial
                            nontrivial bracket is  <span v-katex="'[0, \\pi]'"></span>?
                        </li>
                        <li>
                            Show that  <span v-katex="'f(x) = x^3 - x - 1'"></span> has exactly one zero in the
                            interval [1, 2]. Approximate the zero with absolute error
                            <span v-katex="'\\leq 5\\times 10^{-3}'"></span> using the bisection method.
                        </li>
                        <li>
                            Use the bisection method to find  <span v-katex="'\\sqrt{3}'"></span> with relative
                            error  <span v-katex="'\\leq 5 \\times 10^{-3}'"></span>.
                        </li>
                        <li>
                            Consider the function  <span v-katex="'f(x) = x^3 +4x^2 - 10'"></span>.
                            <ol style="list-style:lower-latin;">
                                <li>
                                    Show that  <span v-katex="'f(x)'"></span> has exactly one root in [1, 2].
                                </li>
                                <li>
                                    By performing 4 iterations of the bisection method, show that this root lies
                                    in the <br /> interval [1.3125, 1.375].
                                </li>
                                <li>
                                    How many iterations would be required to locate this zero to a tolerance of
                                    <span v-katex="'10^{-5}'"></span>?
                                </li>
                            </ol>
                            <br><br>
                        </li>
                        <li>
                            <p class="text-center"> MATLAB Exercises</p>
                            Use the Bisection method to find solutions accurate to within <span v-katex="'10^{-5}'"></span> for the following problems.
                            Present your results in tabular form showing <span v-katex="'a,c,b,f(a),f(c),f(b)'"></span> and the error bound <span v-katex="'\\varepsilon'"></span> at each
                            step of the iteration.
                            <ol style="list-style:lower-latin">
                                <li>
                                    <span v-katex="'~~~~~~\\displaystyle x - 2^{-x} = 0  ~~\\text{for }~~ 0\\leq x \\leq 1'"></span>
                                </li>
                                <li>
                                    <span v-katex="'~~~~~~\\displaystyle  e^x - x^2 + 3x - 2 = 0~~\\text{for }~~ 0 \\leq x \\leq 1'"></span>
                                </li>
                                <li>
                                    <span v-katex="'~~~~~~\\displaystyle  2x\\cos(2x) - (x+1)^2 = 0 ~~\\text{for}~~-3 \\leq x \\leq -2'"></span>
                                </li>
                                <li>
                                    <span v-katex="'~~~~~~\\displaystyle x\\cos x - 2x^2 + 3x - 1 = 0 ~~\\text{for}~~ 0.2 \\leq x \\leq 0.3'"></span>
                                </li>
                                <li>
                                    <span v-katex="'~~~~~~\\displaystyle 3x - e^x = 0 ~~\\text{for}~~1 \\leq x \\leq 2'"></span>
                                </li>
                                <li>
                                    <span v-katex="'~~~~~~\\displaystyle x + 3\\cos x - e^x = 0 ~~\\text{for}~~0 \\leq x \\leq 1'"></span>
                                </li>
                                <li>
                                    <span v-katex="'~~~~~~\\displaystyle x^2 - 4x + 4 - \\ln x =0~~\\text{for}~~ 1 \\leq x \\leq 2'"></span>
                                </li>
                                <li>
                                    <span v-katex="'~~~~~~\\displaystyle x + 1 - 2\\sin \\pi x = 0 ~~\\text{for}~~ 0 \\leq x \\leq 0.5'"></span>
                                </li>
                                <li>
                                    <span v-katex="'~~~~~~\\displaystyle e^x -2 - \\cos(e^x-2)= 0 ~~\\text{for}~~ 0.5 \\leq x \\leq 1.5'"></span>
                                </li>
                                <li>
                                    <span v-katex="'~~~~~~\\displaystyle x^3 - 25 = 0 ~~\\text{for}~~ 2.5 \\leq x \\leq 3.5'"></span>
                                </li>



                            </ol>
                        </li>
                    </ol>
                </div>

                <!--./Exercise 3.1-->
            </div>

            <!--./Section 3.1-->
            <!--Section 3.2 -->
            <div class="my-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    3.2 Fixed Point Method
                </h4>
                <hr class="blue mb-4 mt-0 ">
                <div>
                    <h5 class="pb-2 mb-3 font-weight-bold">Intended learning outcomes</h5>
                    By the end of this section, you will be able to
                    <ul>
                        <li>
                            Define a fixed point of a given function
                        </li>
                        <li>
                            Derive and apply the Fixed Point Iteration Method algorithm
                        </li>
                        <li>
                            Describe the condition of convergence of the Fixed Point Iteration Method
                        </li>
                        <li>
                            Prove the Fixed Point Theorem
                        </li>
                        <li>
                            State and apply Brouwer's theorem for the existence
                            and uniqueness of fixed point on a given interval
                        </li>
                        <li>
                            Develop a fixed point function to approximate a solution
                            of a given non-linear equation on a given interval.
                        </li>
                        <li>
                            Determine the number of iterations necessary to
                            estimate the solution to within a given
                            tolerance level.
                        </li>
                        <li>
                            Define the Rate of Convergence and convergence
                            factor (asymptotic error constant)
                        </li>
                        <li>
                            Identify the strengths and weaknesses of the Fixed Point Iteration method
                        </li>

                    </ul>

                </div>


                <!--Section 3.2.1-->
                <div class="my-3">
                    <h5 class="pb-2 mb-3 font-weight-bold">3.2.1 Fixed Point Iteration</h5>

                    If the equation, <span v-katex="'f(x) = 0'"></span> is rearranged in the form


                    <div v-katex:display="' x = g(x)'"></div>

                    then an iterative method may be written as

                    <!--Equation 3.7-->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'x_{n+1} = g(x_n)~~~~~~~~~n = 0,1,2,\\ldots'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(3.7)'"></div>
                            </div>

                        </div>



                    </div>
                    <!--./Equation 3.7-->
                    where  <span v-katex="'n'"></span> is the number of iterative steps and  <span v-katex="'x_0'"></span> is the initial guess. This method
                    is called the <deep>Fixed Point Iteration</deep> or <deep>Successive Substitution Method.</deep>


                    <br />

                    Fixed point iteration is a simple method.
                    It only works when the iteration function is convergent.

                    <br><br />
                    To solve
                    <div v-katex:display="'f(x) = 0'"></div>

                    rewrite as
                    <div v-katex:display="' x_{new} = g(x_{old})'"></div>

                    An algorithmic definition of the fixed point  method is as follows:
                    <div class="algorithm p-3 my-3">

                        <deep>Fixed point method algorithm </deep>
                        <hr class="mt-0 black" style="width:240px;">

                        <span v-katex="'\\text{initialize:} x_0 = \\ldots'"></span><br />

                        <span v-katex="'\\text{for } n = 0,1,2,\\ldots;'"></span> <br />

                        <span v-katex="'~~~~x_{n+1} = g(x_n)'"></span><br />

                        if converged, stop<br />
                        end
                    </div>

                    <!--Definition 3.1 -->
                    <div class="note note-definition mb-2">
                        <span class="text-success"> Definition 3.1</span><br>
                        <strong>Definition of Fixed Point</strong>

                        If <span v-katex="'c = g(c)'"></span>, the we say <span v-katex="'c'"></span> is a <deep> fixed point</deep> for the function <span v-katex="'g(x)'"></span>.

                    </div>
                    <!--./Definition 3.1-->
                    <!--Theorem 3.4-->
                    <div class="theorem my-3 p-3 ">
                        <theorem-color>Theorem 3.4 </theorem-color>
                        <deep> Fixed Point Theorem </deep><br />

                        Let <span v-katex="'g \\in C[a,b]'"></span> be such that <span v-katex="'g(x) \\in [a,b]'"></span>, for all <span v-katex="'x'"></span> in <span v-katex="'[a,b]'"></span>. Suppose, in addition,
                        that <span v-katex="'g\'(x)'"></span> exists on <span v-katex="'(a,b)'"></span>. Assume that a constant <span v-katex="'K'"></span> exists with



                        <div v-katex:display="'|g\'(x)| \\leq K < 1,\\;\;\\text{ for all } x \\text{ in } (a,b) '"></div>

                        Assume that <span v-katex="'c'"></span> in <span v-katex="'(a,b)'"></span> is a fixed
                        point for <span v-katex="'g'"></span>. Then if <span v-katex="'x_0'"></span> is any point
                        in (<span v-katex="'(a,b)'"></span>, the sequence


                        <div v-katex:display="'x_{n+1} = g(x_n)~~~~~~~~~n = 0,1,2,\\ldots'"></div>

                        converges to the unique fixed point <span v-katex="'c'"></span>.
                    </div>


                    <!--./Theorem 3.4-->
                    <!--Proof of theorem 3.4-->
                    <div>
                        <i>Proof</i><br />
                        Let <span v-katex="'~~~~~~ e_n = '"></span>  <span v-katex="'c - x_n'"></span>,<span v-katex="' \\;  n = 0,1,2,\\ldots'"></span> <br />
                        Now <span v-katex="'~~~~e_n = g(c) - g(x_{n-1}) ,\\; n = 1,2,3,\\ldots'"></span><br />
                        So  <span v-katex="'~~~~~~~ e_n = g\'(\\xi_n)(c - x_{n-1})'"></span><br /><br />

                        by the mean value theorem <span v-katex="'\\displaystyle g\'(\\xi_n) = \\frac{g(c) - g(x_{n-1})}{c - x_{n-1}}'"></span>,
                        where <span v-katex="'\\xi_n'"></span> lies between <span v-katex="'c'"></span> and <span v-katex="'x_{n-1}'"></span>. Hence

                        <div v-katex:display="'e_n =  g\'(\\xi_n)e_{n-1}~,~~~~~n = 1,2,3\\ldots'"></div>

                        Then using the inequality <span v-katex="'g\'(\\xi_n) < K < 1'"></span> we have

                        <div v-katex:display="'|e_n| \\leq K|e_{n-1}| \\leq K^2|e_{n-2}| \\leq K^3|e_{n-3}| \\leq \\ldots \\leq K^n|e_0|'"></div>


                        But  <span v-katex="'|e_0| = |c - x_0|'"></span> is less than the length of the interval  <span v-katex="'(a,b)'"></span> which is a finite number. Also<br />

                        since  <span v-katex="'0 \\leq K \\leq 1'"></span>, we have <span v-katex="'\\lim_{n \\rightarrow \\infty} K^n = 0'"></span> and

                        <div v-katex:display="' \\lim_{n \\rightarrow \\infty} |e_n| = \\lim_{n \\rightarrow \\infty} |c - x_n| \leq  \\lim_{n \\rightarrow \\infty}K^n |c - x_0| = 0'"></div>

                        Hence the numbers  <span v-katex="'x_n'"></span> form a sequence that converges to the root  <span v-katex="'c \\text{ as } n'"></span> increases, i.e
                        <span v-katex="'\\{x_n\\}_0^\\infty'"></span> converges to  <span v-katex="'c'"></span>.
                    </div>
                    <!--./Proof-->
                    <!--Theorem 3.5-->
                    <div class="theorem my-3 p-3 ">
                        <theorem-color>Theorem 3.5 </theorem-color>
                        <deep> Brouwer - Existence and Uniqueness) </deep><br />



                        Suppose  <span v-katex="'g \\in C[a, b]'"></span> and  <span v-katex="'g(x) \\in  [a, b]'"></span> for all  <span v-katex="'x \\in [a, b]'"></span>. Then
                        <div style="font-family:inherit">
                            <ul>
                                <li>
                                    <span v-katex="'g'"></span> has fixed point in  <span v-katex="'[a, b]'"></span> (existence), and
                                </li>

                                <li>
                                    if, in addition,  <span v-katex="'g\'(x)'"></span> exists on  <span v-katex="'(a, b)'"></span> and if there exists a
                                    constant  <span v-katex="'0 < K < 1'"></span> such that

                                    <div v-katex:display="'|g\'(x)| \\leq K ,\\;\\; \\text{for all}\\;\\;\\; x \\in (a, b),'"></div>

                                    then there is exactly one fixed point in  <span v-katex="'[a, b]'"></span> (uniqueness)
                                </li>
                            </ul>


                        </div>
                    </div>
                    <!--./Theorem 3.5-->
                    <!--Example 3.4-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 3.4</span>

                        Show that  <span v-katex="'g(x) = 2^{-x}'"></span> has a unique fixed point on [0, 1].<br><br>

                        <deep>Answer</deep>: <span v-katex="'g \\in C[0,]]'"></span> and <span v-katex="'g\'(x) = -(\\ln 2)2^{-x} < 0'"></span> which implies <span v-katex="'g'"></span> is
                        monotone decreasing.




                        <ul>
                            <li>
                                <span v-katex="'g(0) = 1'"></span> and  <span v-katex="'g(1) = 1/2 > 0.'"></span> Since  <span v-katex="'g'"></span> is
                                decreasing then  <span v-katex="'g(x) \\in [0, 1]'"></span> for all  <span v-katex="'x \\in [0, 1]'"></span>.
                            </li>
                            <li>
                                By the first conclusion of the Brouwer Theorem,  <span v-katex="'g'"></span> has a fixed point in  <span v-katex="'[0, 1]'"></span>.
                            </li>
                            <li>
                                <span v-katex="'|g\'(x)| = |-(\\ln 2)2^{-x}| \\leq |\\ln 2| < 1'"></span> for  <span v-katex="'x \\in (0,1)'"></span>.
                            </li>
                            <li>
                                By the second conclusion of the Brouwer Theorem, the fixed point is unique.
                            </li>
                        </ul>
                    </div>
                    <!--./Example 3.4-->
                    <!--Example 3.5-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 3.5</span>

                        Given <span v-katex="'f(x) = x^3 - 7x  + 2 = 0'"></span> in [0,1].
                        Find a sequence that <span v-katex="'\\{x_n\\}'"></span> that converges to the root of <span v-katex="'f(x)=0'"></span> in [0,1].<br /><br />

                        <deep>Answer:</deep> Rewrite <span v-katex="'f(x)=0'"></span> as <span v-katex="'x = \\frac{1}{7}(x^3+2)'"></span>. Then <span v-katex="'g(x)  = \\frac{1}{7}(x^3+2)'"></span>
                        and <span v-katex="'g\'(x)=\\frac{3x^2}{7} < \\frac{3}{7}'"></span> for all <span v-katex="'x \\in [0,1]'"></span>. Hence, by the FPT the sequence
                        <span v-katex="'\\{x_n\\}'"></span> defined by


                        <div v-katex:display="'x_{n+1} = \\frac{1}{7}(x_n^3+2)'"></div>

                        converges to a root of
                        <span v-katex="'x^3 - 7x + 2 = 0'"></span>

                    </div>
                    <!--./Example 3.5-->
                    <!--Example 3.6-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 3.6</span>

                        Solve <span v-katex="'f(x) = x^3 - x - 1 = 0'"></span> on <span v-katex="'(1,2)'"></span> using the fixed point method with <span v-katex="'x_0 = 1.3'"></span>.<br /><br />


                        <deep>Answer:</deep> Note <span v-katex="'f(1) = -1'"></span> and <span v-katex="'f(2) = 5'"></span>, Therefore by the IVT a root exists on (1,2).
                        Set <span v-katex="'g(x)=(1 + x)^{\\frac{1}{3}}'"></span>. Note that <span v-katex="'g\'(x)=\\frac{1}{3}(1+x)^{-2/3}'"></span>. So, on (1,2) we have

                        <div v-katex:display="'\\frac{1}{3(1+2)^{2/3}} < g\'(x) < \\frac{1}{3(1+1)^{2/3}}'"></div>

                        Therefore

                        <div v-katex:display="' 0 < g\'(x) <  \\frac{1}{3(2^{2/3})} = K'"></div>


                        and <span v-katex="'|g\'(x)| \\leq K < 1'"></span> on (1,2). By the FPT the sequence

                        <div v-katex:display="'x_{n+1}  = (1+x_n)^{\\frac{1}{3}}'"></div>

                        will converge to a fixed point on (1,2).

                    </div>
                    <!--./Example 3.6-->

                    <div v-katex:display="'~~~~~~~~~~~~~~x_{n+1} = (1+x_n)^{\\frac{1}{3}}~,~~~~~x_0 = 1.3'"></div>
                    <div v-katex:display="'x_{1} =           1.320006122'"></div>
                    <div v-katex:display="'x_{2} =          1.323822354'"></div>
                    <div v-katex:display="' x_3 =          1.324547818'"></div>
                    <div v-katex:display="' x_4     =     1.324685639'"></div>
                    <div v-katex:display="' x_5     =     1.324711818'"></div>
                    <div v-katex:display="'  x_6       =   1.324716791'"></div>
                    <div v-katex:display="'   x_7      =    1.324717736'"></div>
                    <div v-katex:display="'x_8      =    1.324717915'"></div>
                    <div v-katex:display="' x_9      =    1.324717949'"></div>
                    <div v-katex:display="' x_{10}      =    1.324717956'"></div>
                    <div v-katex:display="'  x_{11}      =    1.324717957'"></div>
                    <div v-katex:display="'  x_{12}      =    1.324717957'"></div>
                    <div v-katex:display="'  x_{13}      =    1.324717957'"></div>
                    <div v-katex:display="' x_{14}      =    1.324717957'"></div>
                    <div v-katex:display="'x_{15}      =    1.324717957'"></div>

                    The root is <span v-katex="'x = 1.324717957'"></span>.<br><br />

                    The results were generated using the MATLAB code fixedpoint.m which uses a function <span v-katex="'g(x)'"></span>
                    defined in the MATLAB file g.m.

                    <div class="my-3">
                        %% g.m<br />
                        function y = g(x)<br />
                        y = (1+x)^(1/3);
                    </div>
                    <div class="my-3">

                        clear <br />
                        %%---fixedpoint.m <br />
                        %% This program uses the fixed point method to find the solution of <br />
                        %% f(x) = x^3 - x - 1 = 0 on (1,2) given x0 = 1.3 over 15 iterations. <br />
                        N0 = 15; x0 = 1.3 <br />
                        while i &lt; 15 <br />
                        <div class="ml-4">
                            c = g(x0);<br />
                            x0 = c;<br />
                            i = i + 1;
                        </div>
                        fprintf('%10.0f %20.9f\n',i,c)<br />
                        end
                    </div>

                    <!--Example 3.7-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 3.7</span>

                        Use the fixed point iteration method to determine a solution accurate to within
                        <span v-katex="'10^{-2}'"></span>  for <span v-katex="'x^4 - 3x^2 - 3 = 0'"></span> on [1,2]. Use <span v-katex="'x_0 = 1'"></span>. <br /><br />


                        <deep>Answer:</deep> Set <span v-katex="'x = (3x^2 + 3)^{1/4}'"></span> and <span v-katex="'g(x) = (3x^2 + 3)^{1/4}'"></span>.

                        <div v-katex:display="'x_{n+1} = (3x^2  + 3)^{\\frac{1}{4}}'"></div>

                        <br /><br />

                        <div v-katex:display="'  x_1 =            1.565085'"></div>
                        <div v-katex:display="' x_2 =             1.793573 '"></div>
                        <div v-katex:display="' x_3 =            1.885944'"></div>
                        <div v-katex:display="'    x_4 =             1.922848'"></div>
                        <div v-katex:display="'  x_5 =           1.937508'"></div>
                        <div v-katex:display="'  x_5 =          1.937508'"></div>

                        Thus  <span v-katex="'x_6 = 1.943317'"></span> is accurate to within <span v-katex="'10^{-2}'"></span>. The results for this example can be computed
                        manually using a calculator or the following MATLAB codes can be used.




                    </div>
                    <!--./Example 3.7-->


                    <div class="my-3">
                        %% g1.m<br />
                        function y = g1(x)<br />
                        y = (3*x^2 + 3)^(1/4);
                    </div>

                    <div class="my-3">

                        clear<br />
                        %%---fixedpoint1.m<br />
                        %% This program uses the fixed point method to find the solution of<br />
                        %% f(x) = x^4 - 3x^2 - 3 = 0 on (1,2) given x0 = 1 to within an accuracy of<br />
                        %% 10^{-2}.<br /><br />

                        TOL = 10^(-2); <br />
                        x0 = 1;<br /><br />

                        x(1) = x0;<br />
                        x(2) = g1(x(1));<br />
                        n = 1;<br />
                        while  abs(x(n+1) - x(n))  &gt; TOL<br />

                        <div class="ml-4">
                            n = n+1;<br />
                            x(n+1) = g1(x(n));
                        </div>
                        end<br />
                        x &apos;

                    </div>

                </div>
                <!--./Section 3.2.1-->
                <!--Section 3.2.2-->
                <div class="my-3">
                    <h5 class="pb-2 mb-3 font-weight-bold">3.2.2 Error estimate of  fixed point method</h5>

                    While the Fixed-Point Theorem justifies that the algorithm will
                    converge to a fixed-point/solution of the function/equation, it
                    does not tell us anything directly about the error present in each
                    stage of the algorithm.


                    <!--Theorem 3.6-->
                    <div class="theorem my-3 p-3 ">
                        <theorem-color>Theorem 3.6 </theorem-color>
                        If <span v-katex="'g'"></span> satisfied the hypotheses of the Fixed-Point Theorem, then
                        bounds for the error involved in using <span v-katex="'x_n'"></span> to approximate <span v-katex="'x'"></span> are


                        <div v-katex:display="'|x_n - x| \\leq  K^n  { \\rm max }\\{x_0 - a, b - x_0\\}'"></div>

                        and

                        <div v-katex:display="'|x_n - x| \\leq \\frac{K^n}{1-K}|x_1 - x_0|,\\;\\; \\text{for}\\;\\; n \\geq 1.'"></div>

                    </div>
                    <!--./Theorem 3.6-->
                    <!--Example 3.8-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 3.8</span>

                        Consider the equation  <span v-katex="'x^3 + 4x^2 -10 = 0'"></span>.

                        <ol style="list-style:lower-latin;">
                            <li>
                                Develop a fixed point function to approximate a solution to
                                this equation on the interval [1, 2].
                            </li>
                            <li>
                                Determine the number of iterations necessary to estimate
                                the solution to within  <span v-katex="'10^{-6}'"></span> if  <span v-katex="'x_0 = 1'"></span>
                            </li>
                            <li>
                                Estimate the solution
                            </li>
                        </ol>



                        <deep>Answer:</deep>

                        <ol style="list-style:lower-latin;">
                            <li>
                                Rewrite  <span v-katex="'x^3 + 4x^2 - 10 = 0'"></span> as  <span v-katex="'x^2(x+4) = 10'"></span>, thus
                                <div v-katex:display="'x = \\sqrt{\\frac{10}{x+4}} = g(x) '"></div>
                            </li>
                            <li>
                                Upon taking the derivative of  <span v-katex="'g(x)'"></span> we see that on [1,2], we have
                                <div v-katex:display="'|g\'(x)| = \\left|\\frac{-5}{\\sqrt{10}(x+4)^{3/2}}\\right|  \\leq \\frac{5}{\\sqrt{10}(5)^{3/2}} =0.1415 = K '"></div>

                                If  <span v-katex="'x_0 = 1'"></span>, the  <span v-katex="'x_1 = \\sqrt{2}'"></span>, and

                                <div v-katex:display="' |x_n - x| \\leq \\frac{K^n}{1 - K}|x_1 - x_0| = \\frac{0.1415^n}{1-0.1415}|\\sqrt{2}-1| < 10^{-6}'"></div>

                                Thus,  <span v-katex="'n \\geq 7'"></span>

                            </li>
                            <li>
                                <span v-katex="'x_7 \\approx 1.365232'"></span>
                            </li>
                        </ol>

                    </div>
                    <!--./Example 3.8-->

                </div>
                <!--./Section 3.2.2-->
                <!--Section 3.2.3-->
                <div class="my-3">
                    <h5 class="pb-2 mb-3 font-weight-bold">3.2.3 Rate of Convergence</h5>

                    <!--Definition 3.2-->
                    <div class="note note-definition mt-2 mb-3">
                        <span class="text-success"> Definition 3.2 </span>
                        <strong>Rate of Convergence</strong> <br />

                        Suppose that <span v-katex="'\\{x_n \\}'"></span> is a sequence of numbers generated by an algorithm, and the limit
                        of the sequence is <span v-katex="'s'"></span>. If

                        <div v-katex:display="'\\lim_{n \\rightarrow \\infty} \\frac{|x_{n+1} - s|}{|x_n - s|^p} = K~~~~~,K \\neq 0'"></div>

                        for some positive constants <span v-katex="'K'"></span> and <span v-katex="'p'"></span>, the we say that the sequence
                        <span v-katex="'\\{x_n \\}'"></span> converges to <span v-katex="'s'"></span> with <span v-katex="'p'"></span> being the <deep>order of convergence.</deep> <span v-katex="'K'"></span> is called the asymptotic error constant.

                    </div>
                    <!--./Definition 3.2-->
                    If <span v-katex="'p = 1'"></span>, convergence is linear.<br />
                    If <span v-katex="'p = 2'"></span>, convergence is quadratic.<br />
                    If <span v-katex="'p = 1'"></span> and <span v-katex="'K = 1'"></span>, convergence is sub-linear<br />
                    If <span v-katex="'p = 1'"></span> and <span v-katex="'K = 0'"></span>, convergence is super-linear<br />
                    Larger values of <span v-katex="'p'"></span> imply faster rates of convergence.

                </div>
                <!--./Section 3.2.3-->
                <!--Section 3.2.4-->
                <div class="my-3">
                    <h5 class="pb-2 mb-3 font-weight-bold">3.2.4 Convergence of the Fixed Point Method</h5>

                    Suppose that an algorithm based on the fixed point iteration is employed.

                    <div v-katex:display="'s = g(s)'"></div>

                    Suppose that an algorithm based on the fixed point iteration is employed.

                    <div v-katex:display="' x_{n+1} = g(x_n)'"></div>


                    Assume that  <span v-katex="'g(x)'"></span> is continuous on an interval  <span v-katex="'[a,b]'"></span> and
                    differentiable on  <span v-katex="'(a,b)'"></span>, where  <span v-katex="'(a,b)'"></span>
                    is an interval containing  <span v-katex="'s'"></span> and all the estimates  <span v-katex="'x_0, x_1, x_2, \\ldots'"></span>. The Mean Value Theorem tells us that


                    <div v-katex:display="'|g(x_n) - g(s)| = |g\'(c_n)(x_n - s)|'"></div>

                    where  <span v-katex="'c_n'"></span> lies between  <span v-katex="'s'"></span> and  <span v-katex="'x_n'"></span>. Then

                    <div v-katex:display="'\\frac{|x_{n+1} - s|}{|x_n - s|} = g\'(c_n) '"></div>


                    If  <span v-katex="'g\''"></span> is continuous at  <span v-katex="'s'"></span>, then

                    <div v-katex:display="' \\lim_{n \\rightarrow \\infty} |g\'(c_n)| = |g\'(s)| '"></div>

                    <div v-katex:display="'\\text{So}~~~~ \\lim_{n \\rightarrow \\infty} \\frac{|x_{n+1} - s|}{|x_n - s|} = |g\'(s)| = K'"></div>

                    Therefore  <span v-katex="'p = 1'"></span> and  <span v-katex="'K = |g\'(s)|'"></span>,
                    so the convergence is linear in this case if  <span v-katex="'K >0'"></span>.<br />

                    Note that for a linearly convergent scheme, we must have  <span v-katex="'K < 1'"></span>. If  <span v-katex="'K'"></span> is very small, the convergence
                    is more rapid than if  <span v-katex="'K'"></span> is near  <span v-katex="'1'"></span>. The
                    number  <span v-katex="'K'"></span> is called the <deep>convergence factor (asymptotic error constant).</deep><br />

                    Suppose that <span v-katex="'g\'(s) = 0'"></span> and <span v-katex="'g'"></span> has a continuous second derivative on some open interval centred on s,

                    and <span v-katex="'x_0'"></span> is selected from this interval. By the Taylor's theorem, we have


                    <div v-katex:display="'g(x_n) - g(s) = g\'(s)(x-s) + \\frac{1}{2}g\'\'(c_n)(x_n-s)^2'"></div>

                    If <span v-katex="'g\'(s)=0'"></span>, we see that

                    <div v-katex:display="' g(x_n) - g(s) = \\frac{1}{2}g\'\'(c_n)(x_n-s)^2'"></div>

                    where <span v-katex="'c_n'"></span> lies between <span v-katex="'x_n'"></span> and <span v-katex="'s'"></span>. Then

                    <div v-katex:display="'\\frac{|x_{n+1} - s|}{|x_n - s|^2} = \\frac{1}{2}|g\'\'(c_n)|'"></div>

                    It follows that

                    <div v-katex:display="'\\lim_{n \\rightarrow \\infty}\\frac{|x_{n+1} - s|}{|x_n - s|^2} = \\frac{1}{2}|g\'\'(s)|'"></div>

                    Assuming that <span v-katex="'g\'\'(s) \\neq 0'"></span>, we have convergence of order <span v-katex="'p=2'"></span> and the convergence factor is
                    <span v-katex="'\\frac{1}{2}|g\'\'(s)|'"></span>. Therefore the fixed point iteration scheme converges quadratically in this case.


                </div>
                <!--./Section 3.2.4-->
                <!--Exercise 3.1-->
                <div class=" mb-4 p-3 " style="background-color:#fff3e0">
                    <h4 class="h4-responsive">Exercise 3.1  <deep>Exercises on Fixed point iteration</deep></h4>
                    <ol>
                        <li style="margin-bottom:20px">
                            Show that <span v-katex="'x = 4'"></span> is a fixed point of the following iteration
                            schemes:
                            <ol style="list-style:lower-latin;">
                                <li style="margin-bottom:10px">
                                    <span v-katex="'\\displaystyle{~x_{n+1} =\\frac{1}{4}(8x_n-x_n^2)}'"></span>
                                </li>
                                <li style="margin-bottom:10px">
                                    <span v-katex="'\\displaystyle{~x_{n+1} =\\frac{1}{3}(x_n^2-4)}'"></span>
                                </li>
                                <li>
                                    <span v-katex="'\\displaystyle{~x_{n+1} =\\sqrt{3x_n + 4}}'"></span>
                                </li>
                            </ol>

                            Analyze theoretically (don't calculate iterates) to determine which
                            of these methods should converge to the root at <span v-katex="'x = 4'"></span> given a
                            starting guess close enough. Which method should converge the
                            fastest?
                        </li>
                        <li style="margin-bottom:20px">
                            Use a fixed-point iteration method to determine the an
                            approximation to <span v-katex="'\\sqrt{3}'"></span> that is accurate
                            to within <span v-katex="'10^{-4}'"></span>, starting with <span v-katex="'x_0 = 1'"></span>.
                        </li>
                        <li style="margin-bottom:20px">
                            The following four methods are proposed to compute <span v-katex="'21^{1/3}'"></span>. Rank them in order,
                            based on their apparent speed of convergence, assuming <span v-katex="'x_0=1'"></span>.
                            <ol style="list-style:lower-latin;">
                                <li style="margin-bottom:10px">
                                    <span v-katex="'x_n =\\displaystyle \\frac{20x_{n-1} + 21/x_{n-1}^2}{21}'"></span>
                                </li>
                                <li style="margin-bottom:10px">
                                    <span v-katex="'x_n = \\displaystyle x_{n-1} - \\frac{x_{n-1}^2 - 21}{3x_{n-1}^2}'"></span>
                                </li>
                                <li style="margin-bottom:10px">
                                    <span v-katex="' x_n = \\displaystyle x_{n-1} - \\frac{x_{n-1}^4 - 21x_{n-1}}{x_{n-1}^2 - 21}'"></span>
                                </li>
                                <li>
                                    <span v-katex="'x_n = \\displaystyle \\left(\\frac{21}{x_{n-1}}\\right)^{1/2}'"></span>
                                </li>
                            </ol>
                        </li>

                        <li style="margin-bottom:20px">
                            Show that the iteration scheme <span v-katex="'x_{n+1} = (1 + x_n)^{1/3}'"></span>
                            converges to a solution of <span v-katex="'x^3 - x - 1=0'"></span> if the initial guess
                            <span v-katex="'x_0'"></span> is between 1 and 2.
                        </li>
                        <li style="margin-bottom:20px">
                            Show that the order of convergence for the following iterative
                            processes is first order
                            <ol style="list-style:lower-latin;">
                                <li style="margin-bottom:10px">
                                    <span v-katex="'x_{n+1} = 1 - \\sin x_n  \\text{ for }  x_0 \\in [0, \\pi]; f(x) = \sin x + x - 1'"></span>
                                </li>
                                <li>
                                    <span v-katex="'\\displaystyle x_{n+1} = \\frac{1}{10}(x_n^3 + 4)  \\text{ for }  x_0 \\in [0, 1]; f(x) = x^3 - 10x + 4'"></span>
                                </li>
                            </ol>
                        </li>
                        <li style="margin-bottom:20px">
                            Determine the interval of <span v-katex="'x'"></span> where convergence is certain for
                            the iterative processes below:
                            <ol style="list-style:lower-latin;">
                                <li style="margin-bottom:10px">
                                    <span v-katex="'\\displaystyle{x_{n + 1} =  (10x_n -4)^{1/3}}'"></span>
                                </li>
                                <li style="margin-bottom:10px">
                                    <span v-katex="'\\displaystyle{x_{n + 1} = \\frac{1}{2} - x_n^3 }'"></span>
                                </li>
                                <li style="margin-bottom:10px">
                                    <span v-katex="'\\displaystyle{x_{n + 1} =  0.5(\\sin x_n + \\cos x_n)}'"></span>
                                </li>
                                <li>
                                    <span v-katex="'\\displaystyle{x_{n + 1} =  1 + \\tan^{-1}(x_n)}'"></span>
                                </li>
                            </ol>
                        </li>
                        <li style="margin-bottom:20px">
                            Consider the iterative scheme
                            <div v-katex:display="' x_{n+1} = \\frac{12}{1 + x_n}'"></div>
                            <ol style="list-style:lower-latin;">
                                <li style="margin-bottom:10px">
                                    Find the positive fixed point, <span v-katex="'s'"></span>, of the scheme.
                                </li>
                                <li>
                                    Prove that the scheme converges to  <span v-katex="'s'"></span> for sufficiently
                                    close  <span v-katex="'x_0'"></span>. Determine the order and the corresponding asymptotic
                                    error constant for this method.
                                </li>
                            </ol>
                        </li>
                        <li style="margin-bottom:20px">
                            The positive root of  <span v-katex="'f(x) = \\alpha - \\beta x^2 - x '"></span> with
                            <span v-katex="'\\alpha'"></span>,  <span v-katex="'\\beta >0'"></span> is sought and the simple iteration

                            <div v-katex:display="' x_{n+1} = \\alpha - \\beta x_n^2'"></div>

                            is used. Show that convergence will occur for sufficiently close
                            starting value, provided

                            <div v-katex:display="' \\alpha \\beta < \\frac{3}{4}'"></div>
                        </li>
                        <li style="margin-bottom:20px">
                            <ol style="list-style:lower-latin;">
                                <li style="margin-bottom:10px">
                                    State the fixed-point theorem
                                </li>
                                <li style="margin-bottom:10px">
                                    Show that the iteration function of the equation


                                    <div v-katex:display="'x = \\frac{a}{6 + ax}'"></div>

                                    satisfies the assumptions of the fixed point theorem for <span v-katex="'0 \\leq a < 6'"></span>.
                                </li>
                                <li>
                                    Compute the root of the equation with accuracy <span v-katex="'\\varepsilon = 0.01'"></span> and
                                    <span v-katex="'a = 3'"></span> using the fixed point iterations.
                                </li>
                            </ol>
                        </li>
                        <li style="margin-bottom:20px">
                            For which values of the parameter <span v-katex="'\\beta'"></span> the iteration
                            function of the equation


                            <div v-katex:display="' x = \\frac{3}{3 + \\beta^2 x}~~,~~~~~~~~~x \\in [0, 1]'"></div>

                            satisfies the assumptions of the fixed point theorem.
                        </li>
                        <li style="margin-bottom:20px">
                            Evaluate the approximate solution of the equation

                            <div v-katex:display="' x = \\frac{3}{3 +  x}~~,~~~~~~~~~x \\in [0, 1]'"></div>

                            with accuracy <span v-katex="'\\varepsilon  = 0.0005'"></span> using minimum number of
                            iterations.
                        </li>
                        <li style="margin-bottom:20px">
                            For the scheme <span v-katex="'x_{n+1} = x_n + c(x_n^2 - 7)'"></span>, find the range
                            of values of <span v-katex="'c'"></span> for which convergence to the positive fixed point
                            is guaranteed. For what value of <span v-katex="'c'"></span> is convergence quadratic?
                        </li>
                        <li style="margin-bottom:20px">
                            The iteration <span v-katex="'x_{n+1} = 2 - (1+c)x_n + c x_n^3'"></span> will converge
                            for sufficiently close <span v-katex="'x_0'"></span> to <span v-katex="'s=1'"></span> for some values of <span v-katex="'c'"></span>. Find
                            the values of <span v-katex="'c'"></span> which this is true. For what value of <span v-katex="'c'"></span> will the
                            convergence be quadratic?
                        </li>
                        <li style="margin-bottom:20px">
                            Show that a method for computing <span v-katex="'\\sqrt{a}'"></span> is

                            <div v-katex:display="'x_{n+1} = \\frac{x_n(x_n^2 + 3a)}{3x_n^2 + a}~~~~n \\geq 0'"></div>

                            Also determine the order of this method together with its asymptotic
                            error constant.
                        </li>
                        <li style="margin-bottom:20px">
                            Show that the
                            iteration scheme
                            <div v-katex:display="'\\alpha_{n+1}= \\frac{\\alpha_n^2 - a\\alpha_n +a^2 +5a}{\\alpha_n +5}'"></div>
                            converges to the fixed point <span v-katex="'a'"></span> quadratically (i.e order of
                            convergence is 2) for all <span v-katex="'a \\neq -5'"></span>.
                        </li>
                    </ol>

                </div>

            </div>
            <!--./Section 3.2-->
            <!--Section 3.3 -->
            <div class="my-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    3.3 The Newton Raphson Method
                </h4>
                <hr class="blue mb-4 mt-0 ">
                <div>
                    <h5 class="pb-2 mb-3 font-weight-bold">Intended learning outcomes</h5>
                    By the end of this section, you will be able to
                    <ul>
                        <li>
                            Derive and apply the Newton's Method algorithm to compute roots of nonlinear equations
                        </li>
                        <li>
                            Prove the quadratic convergence of Newton's Method
                        </li>
                        <li>
                            Identify the strengths and weaknesses of Newton's method
                        </li>

                    </ul>

                    If <span v-katex="'x_0'"></span> is an approximation of the root <span v-katex="'\\bar{x}'"></span> then we can write

                    <div v-katex:display="'\\bar{x} = x_0 + \\varepsilon_0 '"></div>

                    So that
                    <div v-katex:display="' f(\\bar{x}) = f(x_0 + \\varepsilon_0) = 0'"></div>

                    If we expand the functional evaluation as a Taylor series
                    about <span v-katex="'x_0'"></span>, we have



                    <!--Equation 3.8-->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'f(x_0 + \\varepsilon_0) = f(x_0) + f\'(x_0)\\,(\\bar{x} - x_0) +\\frac{1}{2}\\,f\'\'(x_0)\\,(\\bar{x} - x_0)^2 + \\ldots'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(3.8)'"></div>
                            </div>

                        </div>



                    </div>
                    <!--./Equation 3.8-->
                    <!--Equation 3.9-->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'= f(x_0) + f\'(x_0)\\varepsilon_0 + \\frac{1}{2}\\,f\'\'(x_0)\\varepsilon_0^2 + \\ldots = 0'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(3.9)'"></div>
                            </div>

                        </div>



                    </div>
                    <!--./Equation 3.9-->
                    Hence provided that <span v-katex="'\\varepsilon_0'"></span> is small,

                    <div v-katex:display="'f(x_0) + f\'(x_0)\\varepsilon_0 \\approx 0'"></div>

                    <!--Equation 3.10-->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="' \\varepsilon_0 \\approx -\\,\\frac{f(x_0)}{f\'(x_0)}\\,, \\quad \\text{ provided }\\quad f\'(x_0) \\neq 0 '"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(3.10)'"></div>
                            </div>

                        </div>

                    </div>
                    <!--./Equation 3.10-->
                    Thus an improved approximation to the root <span v-katex="'\bar{x}'"></span> is approximated by

                    <!--Equation 3.11-->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="' x_1 = x_0 - \\frac{f(x_0)}{ f\'(x_0)}'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(3.11)'"></div>
                            </div>

                        </div>



                    </div>
                    <!--./Equation 3.11-->
                    A general expression for subsequent improvements is


                    <!--Equation 3.12-->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div v-katex:display="'x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}'"></div>
                            </div>
                            <div class="col">
                                <div v-katex:display="'(3.12)'"></div>
                            </div>

                        </div>



                    </div>
                    <!--./Equation 3.12-->
                    This is called the <i>Newton's</i> or <em>Newton-Raphson</em> method.

                    <div class="algorithm p-3 my-3">

                        <deep>Newton method algorithm</deep>
                        <hr class="mt-0 black" style="width:200px;">

                        initialize: <span v-katex="'x_0 = \\ldots'"></span> <br />
                        for <span v-katex="'n = 0,1,2,\\ldots'"></span><br />
                        <span v-katex="'~~~~x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}'"></span><br />
                        if converged, stop <br />
                        end


                    </div>


                    <!--Example 3.9-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 3.9</span>
                        Use the Newton's method to find the iterative scheme for finding
                        the square root of a positive number.

                        <br />
                        <span class="font-weight-bold">Answer. </span>

                        Given a number <span v-katex="'a'"></span>, finding <span v-katex="'\\sqrt{a}'"></span> is equivalent to finding the
                        positive root to the equation <span v-katex="'f(x)=a - x^2'"></span>. Formulating the Newton's method for solving this
                        expression yields.

                        <div v-katex:display="'x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}~~~~~~~~~~~'"></div>
                        <div v-katex:display="' = x_n - \\frac{a - x_n^2}{-2x_n}'"></div>
                        <div v-katex:display="'   = \\frac{2x_n^2 + a - x_n^2}{2x_n}'"></div>
                        <div v-katex:display="'= \\frac{1}{2}\\left(x_n + \\frac{a}{x_n} \\right) '"></div>


                    </div>
                    <!--./Example 3.9-->
                    <!--Example 3.10-->
                    <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                        <span class="font-weight-bold">Example 3.10</span>

                        Use the Newton's method to find the solution of
                        <span v-katex="'f(x) = x^3 - x - 1'"></span>, using <span v-katex="'x_0 = 1.3'"></span>.

                        <br />
                        <span class="font-weight-bold">Answer. </span>

                        The first derivative is <span v-katex="'f\'(x) = 3x^2 - 1'"></span>. Thus the iteration formula is

                        <div v-katex:display="'~~~~~~~~~~x_{n+1} = x_n - \\frac{(x_n^3 - x_n - 1)}{3x_n^2-1}'"></div>
                        <div v-katex:display="' = \\frac{2x_n^3  + 1}{3x_n^2-1}'"></div>

                        <div class="container text-center">


                            <span v-katex="'n~~~~~~~x_n~~~~~~~~~~~~~~~~'"></span><br />
                            <hr class="blue mb-0 mt-0 " style="width:150px">
                            <span v-katex="'1~~~~~~~1.300000000'"></span><br />
                            <span v-katex="'2~~~~~~~1.325307125'"></span><br />
                            <span v-katex="'3~~~~~~~1.324718280'"></span><br />
                            <span v-katex="'4~~~~~~~1.324717957'"></span><br />
                            <span v-katex="'5~~~~~~~1.324717957'"></span><br />

                        </div>


                    </div>
                    <!--./Example 3.10-->
                    Note that the approximation converges to the root after only 4 iterations compared with
                    11 iterations for the fixed point method applied to the same problem (discussed in the previous section).<br />

                    The above results can be computed manually using a calculator or the MATLAB code below,
                    <div class="font-italic my-3 black-text">
                        clear<br />
                        %%% ---newton1.m <br />
                        %%%  This program is used to find solution of f(x) = x^3 - x -  1 = 0<br />
                        %%   using the Newton's method. The iterative scheme is <br />
                        %%   x(n+1)= (2*x(n)^3  + 1 )/(3*x(n)^2 - 1)<br /><br />

                        x(1) = 1.3;<br /><br />

                        for n = 1:15<br />
                        x(n+1)= (2*x(n)^3  + 1 )/(3*x(n)^2 - 1);<br /><br />

                        fprintf('%10.0f %20.9f\n',n,x(n))<br /><br />

                        end
                    </div>

                    <!--Section 3.3.1-->
                    <div class="my-4">
                        <h5 class=" h5-responsive mb-2 font-weight-bold"> 3.3.1 Convergence of Newton's Method</h5>

                        <!--Theorem 3.7-->
                        <div class="theorem my-3 p-3 ">
                            <theorem-color>Theorem 3.7</theorem-color>

                            If <span v-katex="'f'"></span>, <span v-katex="'f\''"></span> and <span v-katex="'f\'\''"></span> are continuous in a sufficiently
                            small neighbourhood of a simple root <span v-katex="'\\alpha'"></span> of a
                            function <span v-katex="'f(x)=0'"></span>, then the newton's method
                            converges to that root quadratically.

                        </div>
                        <!--./Theorem 3.7-->
                        Assume that the function <span v-katex="'f(x)'"></span> is at least twice continuously-differentiable in some
                        sufficiently large neighbourhood of a simple root, <span v-katex="'\\alpha'"></span> of <span v-katex="'f(x)=0'"></span>.
                        That is, <span v-katex="'f\'(\\alpha) \\neq 0'"></span>"'
                        and there exists an <span v-katex="'M > 0'"></span> such that <span v-katex="'|f\'\'(x)| < M'"></span> for all <span v-katex="'x'"></span> in some neighbourhood of <span v-katex="'\\alpha'"></span>. The
                        two assumptions that <span v-katex="'f\'(\\alpha) \\neq 0'"></span> and the continuity of <span v-katex="'f\''"></span> insure that <span v-katex="'\\exists \\gamma> 0'"></span> such that <span v-katex="'|f\'(x)| > \\gamma > 0'"></span> <span v-katex="'\\forall x'"></span> near <span v-katex="'\\alpha'"></span>.

                        <br />

                        Using Taylor's theorem to expand <span v-katex="'f'"></span> around <span v-katex="'\\alpha'"></span>, <span v-katex="'f(\\alpha)'"></span> is written as


                        <div v-katex:display="'f(\\alpha) = f(x_n) + (\\alpha - x_n)f\'(x_n) + \\frac{(\\alpha - x_n)^2}{2}f\'\'(\\xi_n) '"></div>

                        for some point <span v-katex="'\\xi_n \\in [\\alpha,x_n]'"></span>. Since <span v-katex="'\\alpha'"></span> is a root, we have <span v-katex="'f(\\alpha) = 0'"></span> and the
                        expansion becomes

                        <div v-katex:display="'0 = f(x_n) + (\\alpha - x_n)f\'(x_n) + \\frac{(\\alpha - x_n)^2}{2}f\'\'(\\xi_n)'"></div>

                        The assumption that <span v-katex="'f\'(\\alpha) \\neq 0'"></span> permits us to divide through the equation by <span v-katex="'f\'(x_n)'"></span>, to obtain

                        <div v-katex:display="'0 = \\frac{f(x_n)}{f\'(x_n)} + (\\alpha - x_n) + \\frac{(\\alpha - x_n)^2}{2} \\frac{f\'\'(\\xi_n)}{f\'(x_n)}'"></div>

                        Writing  the the first term above in terms of the definition
                        of Newton's method <span v-katex="'\\displaystyle{\\left( ~\\text{ i.e }~~\\frac{f(x_n)}{f\'(x_n)} =  x_n -x_{n+1}\\right)} '"></span> produces

                        <div v-katex:display="' 0 = x_n -x_{n+1} + \\alpha - x_n  + \\frac{(\\alpha - x_n)^2}{2} \\frac{f\'\'(\\xi_n)}{f\'(x_n)}'"></div>


                        This leads to
                        <div v-katex:display="'~~~~~~~~~~~~~~~~x_{n+1} - \\alpha = \\frac{(\\alpha - x_n)^2}{2}\\frac{f\'\'(\\xi_n)}{f\'(x_n)}'"></div>
                        <div v-katex:display="'\\frac{x_{n+1} - \\alpha}{(x_{n} - \\alpha)^2}= \\frac{1}{2}\\frac{f\'\'(\\xi_n)}{f\'(x_n)}'"></div>

                        The initial assumptions which permittted the assertions that <span v-katex="'|f\'(\\alpha)| > \\gamma > 0'"></span>
                        and <span v-katex="'|f\'\'(\\xi_n)| < M'"></span> in some sufficiently small neighbourhood of <span v-katex="'\\alpha'"></span> show that Newton's method
                        is quadratically convergent.



                    </div>
                    <!--./Section 3.3.1-->
                    <!--Section 3.3.2-->
                    <div class="my-4">
                        <h5 class=" h5-responsive mb-2 font-weight-bold"> 3.3.2 Pitfalls of the Newton-Raphson Method</h5>

                        While the Newton-Raphson method converges fast, sometimes it may fail
                        to converge but oscillate between two values because of one of the
                        following reasons:

                        <ol>
                            <li style="margin-bottom:10px; margin-top:15px">
                                Small values for the derivatives <span v-katex="'f\'(x_n)'"></span> can lead to very large deviations
                                in the calculation of <span v-katex="'f(x_n)/f\'(x_n)'"></span>.
                            </li>
                            <li style="margin-bottom:10px">
                                Sometimes the Newton's method can be caught in an endless cycling around
                                the root. This can be the case when the root is near an inflection point.
                            </li>
                            <li style="margin-bottom:10px">
                                Newton's method requires a mechanism to compute the value of the derivative
                                of <span v-katex="'f'"></span> at each approximation. Frequently, <span v-katex="'f\'(x)'"></span> is far more difficult and
                                needs more arithmetic operations (i.e is computationally expensive) to
                                calculate than <span v-katex="'f(x)'"></span>.
                            </li>
                        </ol>

                        If situation 1 or 2 occurs it may be necessary to use
                        another criterion to stop the iterations. One alternative is to stop
                        after a predetermined number of iterations.  Another criterion is to
                        stop when <span v-katex="'|\,x_{n+1} - x_n\,| < \\varepsilon,'"></span> where <span v-katex="'\\varepsilon'"></span> is some error
                        term, and <span v-katex="'f(x_n)=0'"></span>, or at least <span v-katex="'|\\,f(x_n)\\,| < \\varepsilon'"></span>.<br />

                        To circumvent the problem of evaluating the derivative at each step of the Newton's method,
                        we introduce a slight variation in the formula as discussed in the next section.



                        <!--Exercise 3.3-->
                        <div class=" mb-4 p-3 mt-3 " style="background-color:#fff3e0">
                            <h4 class="h4-responsive">Exercise 3.3  <deep>Exercises on Newton's method</deep></h4>
                            <ol>
                                <li style="margin-bottom:15px">
                                    Formulate the Newton-Raphson  method for computing;
                                    <ol style="list-style:lower-latin">
                                        <li style="margin-bottom:10px">
                                            the  <span v-katex="'k'"></span>-th root of a number  <span v-katex="'N > 0'"></span>
                                        </li>
                                        <li style="margin-bottom:10px">
                                            the reciprocal of a real number  <span v-katex="'R'"></span>.
                                        </li>
                                    </ol>


                                </li>


                                <li style="margin-bottom:15px">
                                    Consider the function <span v-katex="'f(x) = (x- 2)^2 - \\ln x '"></span> on the
                                    interval <span v-katex="'1 \\leq x \\leq 2'"></span>.
                                    <ol style="list-style:lower-latin">
                                        <li style="margin-bottom:10px">
                                            Prove that there is exactly one root of this equation in this
                                            interval.
                                        </li>
                                        <li style="margin-bottom:10px">
                                            Use Newton's method with the initial guess <span v-katex="'x_0 = 1.5'"></span> to find
                                            a root to 6 significant digits.
                                        </li>
                                        <li style="margin-bottom:10px">
                                            Use the Secant method to approximate a root to 6 digits
                                            accurately using the endpoints of the interval as initial data.
                                            Tabulate your data to show <span v-katex="'x_n'"></span> and <span v-katex="'x_{n+1}'"></span> at each stage.
                                        </li>
                                    </ol>
                                </li>
                                <li style="margin-bottom:15px">


                                    <ol style="list-style:lower-latin">

                                        <li style="margin-bottom:10px">

                                            Show that the function

                                            <div v-katex:display="' f(x) = e^x - x^2'"></div>

                                            has exactly one zero in the interval [-1, 0].
                                        </li>

                                        <li style="margin-bottom:10px">
                                            Use 4 iterations of the Newton-Raphson method with an
                                            initial guess of <span v-katex="'x_0 = 0'"></span> to obtain an approximation to this root.
                                        </li>
                                        <li style="margin-bottom:10px">
                                            Use 4 iterations of the Secant method with <span v-katex="'x_0 = 0'"></span> and <span v-katex="'x_1 =-0.2'"></span> to approximate the same root.
                                        </li>

                                    </ol>
                                </li>
                                <li style="margin-bottom:15px">
                                    Use Newton's method to find solutions to within <span v-katex="'10^{-5}'"></span> for the following problems
                                    <ol style="list-style:lower-latin">
                                        <li style="margin-bottom:10px">
                                            <div v-katex="' ~~~\\displaystyle{\\cos x = x^3,~~~~x_0  = 0.5 }'"></div>
                                        </li>
                                        <li style="margin-bottom:10px">
                                            <div v-katex="'~~~\\displaystyle{3e^x - 4\\cos x = 0 ,~~~~x_0  =1 }'"></div>
                                        </li>

                                        <li style="margin-bottom:10px">
                                            <div v-katex="'~~~\\displaystyle{\\sin x - x^2 = 0 ,~~~~x_0  = 0}'"></div>
                                        </li>
                                        <li style="margin-bottom:10px">
                                            <div v-katex="'~~~\\displaystyle{e^x - 3x = 0 ,~~~~x_0  = 1}'"></div>
                                        </li>
                                        <li style="margin-bottom:10px">
                                            <div v-katex="'~~~\\displaystyle{e^x  + 2^{-x} + 2\\cos x - 6 = 0 ,~~~~x_0  = 1}'"></div>
                                        </li>
                                        <li style="margin-bottom:10px">
                                            <div v-katex="'~~~\\displaystyle{\\ln (x - 1) + \cos (x - 1) = 0 ,~~~~x_0  = 1.5 }'"></div>
                                        </li>
                                    </ol>
                                </li>
                            </ol>

                        </div>
                        <!--./Exercise 3.3-->

                    </div>
                    <!--./3.3.2-->




                </div>

            </div>
            <!--./Section 3.3-->
            <!--Section 3.4-->
            <div class="mb-3">
                <h4 class="h4-responsive pt-2 font-weight-bold blue-text">
                    3.4 The Secant Method
                </h4>
                <hr class="blue mb-4 mt-0 ">
                <h5 class="pb-2 mb-3 font-weight-bold">Intended learning outcomes</h5>


                By the end of this section, you will be able to
                <ul>
                    <li>
                        Derive and apply the Secant Method algorithm to compute roots of nonlinear equations
                    </li>

                </ul>

                We define

                <!--Equation 3.13-->
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div v-katex:display="'f\'(x_{n}) = \\lim_{x \\rightarrow x_{n}} \\frac{f(x) -f(x_{n})}{\\displaystyle x - x_{n}} '"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(3.13)'"></div>
                        </div>
                    </div>
                </div>
                <!--./Equation 3.13-->
                Letting <span v-katex="'x = x_{n-1}'"></span>,


                <div v-katex:display="'f\'(x_{n}) \\approx \\frac{f(x_{n-1}) - f(x_{n})}{\\displaystyle x_{n-1} -x_{n}} = \\frac{f(x_{n}) - f(x_{n-1})}{\\displaystyle x_{n} - x_{n-1}}'"></div>

                Substituting the above expression in Newton's formula gives
                <!--Equation 3.14-->
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div v-katex:display="' x_{n+1} = x_n - f(x_n)\\frac{(x_n - x_{n-1})}{\\displaystyle f(x_n) -f(x_{n-1})}'"></div>
                        </div>
                        <div class="col">
                            <div v-katex:display="'(3.14)'"></div>
                        </div>
                    </div>
                </div>
                <!--./Equation 3.14-->
                This modified Newton's method is called the {\bf Secant method}.
                The process involves two initial approximations <span v-katex="'x_0'"></span> and <span v-katex="'x_1'"></span>. The
                next approximation <span v-katex="'x_2'"></span> is the <span v-katex="'x'"></span>-intercept of the line joining
                <span v-katex="'(x_0, f(x_0))'"></span> and <span v-katex="'(x_1, f(x_1))'"></span>. The approximation <span v-katex="'x_3'"></span> is in
                turn obtained as the <span v-katex="'x'"></span>-intercept of the line joining <span v-katex="'(x_1, f(x_1)'"></span>
                and <span v-katex="'(x_2, f(x_2))'"></span> and so on.


                <div class="algorithm p-3 my-3">

                    <deep>Secant method algorithm</deep>
                    <hr class="mt-0 black" style="width:200px;">

                    initialize: <span v-katex="'x_0 = \\ldots'"></span>, <span v-katex="'x_1 = \\ldots'"></span>  <br />
                    for  <span v-katex="'n=1,2,3,\ldots'"></span> <br />
                    <span v-katex="'~~~~\\displaystyle x_{n+1}=x_n - f(x_n)\\frac{(x_n - x_{n-1})}{\\displaystyle f(x_n) - f(x_{n-1})} '"></span> <br />
                    if converged, stop  <br />
                    end
                </div>

                <!--Example 3.11-->
                <div style="background-color: #e2e3e5" class="my-3 mb-4 p-3">
                    <span class="font-weight-bold">Example 3.11</span>

                    Find the solution of <span v-katex="'x - x^{1/3} - 2 = 0'"></span> using
                    both the Newton (using <span v-katex="'x_0=3'"></span>) and Secant
                    method (using <span v-katex="'x_0=4'"></span> and <span v-katex="'x_1=3'"></span>). Compare the results.<br />

                    <deep>Newton's Method solution</deep><br />

                    The first derivative is

                    <div v-katex:display="' f\'(x) = 1 - \\frac{1}{3}x^{-2/3} '"></div>

                    Set

                    <div v-katex:display="'f(x_n) = x_n - x_n^{1/3} - 2 '"></div>
                    <div v-katex:display="' f\'(x_n) = 1 - \\frac{1}{3}x_{n}^{-2/3}'"></div>

                    The iteration formula is

                    <div v-katex:display="' x_{n+1}=x_n - \\frac{x_n - x_n^{1/3} - 2}{1 - \\frac{1}{3}x_{n}^{-2/3}}'"></div>

                    <div class="text-center">
                        <span v-katex="'n~~~~~~~~~~~x_n~~~~~~~~~~~~~~~~~~~~~~~~f\'(x_n)~~~~~~~~~~~~~~~~~~~~~~~f(x_n)~~~~~~~~~~~~~'"></span><br />
                        <hr class="blue mb-1 mt-0 " style="width:500px">
                        <hr class="blue mb-1 mt-1 " style="width:500px">
                        <span v-katex="'0~~~~~~~3.000000000~~~~0.839750048~~~~-4.422495703 \\times 10^{-1}'"></span><br />
                        <span v-katex="'1~~~~~~~3.526644293 ~~~~0.856129758~~~~4.506791821 \\times 10^{-3}~~~~'"></span><br />
                        <span v-katex="'2~~~~~~~3.521380147~~~~0.855986412~~~~~3.771414137 \\times 10^{-7}~~~'"></span><br />
                        <span v-katex="'3~~~~~~~3.521379707~~~~0.855986400~~~~2.664535259 \\times 10^{-15}~~~'"></span><br />
                        <span v-katex="'4~~~~~~3.521379707~~~~    0.855986400~~~~0.00000000000~~~~~~~~~~~~~'"></span><br /><br />


                    </div>
                    <deep>Secant Method solution</deep><br />
                    Set
                    <div v-katex:display="'f(x_n) = x_n - x_n^{1/3} - 2  '"></div>
                    <div v-katex:display="' f(x_{n-1}) = x_{n-1} - x_{n-1}^{1/3} - 2'"></div>


                    <div v-katex:display="' x_{n+1} = x_n - f(x_n)\\frac{(x_n - x_{n-1})}{\\displaystyle f(x_n) - f(x_{n-1})}'"></div>


                    <div class="text-center">
                        <span v-katex="'n~~~~~~~~~~~x_n~~~~~~~~~~~~~~~~~~~~~~~~f\'(x_n)~~~~~~~~~~~~~~~~~~~~~~~f(x_n)~~~~~~~~~~~~~'"></span><br />
                        <hr class="blue mb-1 mt-0 " style="width:500px">
                        <hr class="blue mb-1 mt-1 " style="width:500px">
                        <span v-katex="'0~~~~~~~4.000000000~~~~3.000000000~~~~-4.422495703 \\times 10^{-1}'"></span><br />
                        <span v-katex="'1~~~~~~~3.000000000~~~~3.517342618~~~~-3.455470954 \\times 10^{-3}'"></span><br />
                        <span v-katex="'2~~~~~~~3.517342618~~~~3.521416653~~~~~3.162504256 \\times 10^{-5}~~~~'"></span><br />
                        <span v-katex="'~3~~~~~~~3.521416653~~~~3.521379704~~~~-2.034715063 \\times 10^{-9}'"></span><br />
                        <span v-katex="'~~~4~~~~~~~3.521379704~~~~3.521379707~~~~-1.332267630 \\times 10^{-15}'"></span><br />
                        <span v-katex="'~~~5~~~~~~~3.521379707~~~~3.521379707~~~~0.000000000~~~~~~~~~~~~~~~~~~~'"></span><br /><br />

                    </div>


                    We observe that the Secant method converges almost as quickly as the Newton's method.


                </div>
                <!--./Example 3.11-->
                The following MATLAB code was used to generate the results for the Secant Method.
                <div class="font-italic">
                    clear <br />
                    %%% ---secant1.m<br />
                    %%%  This program is used to find solution of f(x) = x - x^(1/3) -  2 = 0<br />
                    %%   using the secant method with x0 = 4 and x1 = 3;.<br />
                    %%<br />
                    x(1) = 4;<br />
                    x(2) = 3;<br />
                    for n = 2:7<br />
                    <div class="ml-3">
                        f(n) = x(n) - x(n)^(1/3) - 2;<br />
                        f(n-1) = x(n-1) - x(n-1)^(1/3) - 2;<br />
                        x(n+1) = x(n) - f(n)*(x(n) - x(n-1))/(f(n) - f(n-1));<br />
                        fprintf('%10.0f %20.9f %20.9f %20.9e\n',n-2,x(n-1),x(n),f(n))<br />
                    </div>
                    end<br />
                </div>


                <!--Exercise 3.4-->
                <div class="my-3 p-3" style="background-color:#fff3e0">
                    <h4 class="h4-responsive">Exercise 3.4  <deep>Exercises on Secant method</deep></h4>

                    <ol>
                        <li>
                            Use the Secant method to find solutions
                            to within <span v-katex="'10^{-5}'"></span> for the following
      problems. Use the end points of the given
      intervals as <span v-katex="'x_0'"></span>, <span v-katex="'x_1'"></span>.
                            <ol style="list-style:lower-latin">
                                <li>
                                    <div v-katex="'~~~\\displaystyle{e^x  + 2^{-x} + 2\\cos x - 6 = 0 ,~~~~\\text{ for } 1 \\leq x \\leq 2}'"></div>
                                </li>
                                <li>
                                    <div v-katex="'~~~\\displaystyle{\\ln (x - 1) + \\cos (x - 1) = 0 ,~~~~\\text{ for } 1.3 \\leq x \\leq 2}'"></div>
                                </li>
                                <li>
                                    <div v-katex="'~~~\\displaystyle{2x\\cos 2x - (x-2)^2 = 0 ,~~~~\\text{ for } 2 \\leq x \\leq 3}'"></div>
                                </li>
                                <li>
                                    <div v-katex="'~~~\\displaystyle{(x - 2)^2 - \\ln x = 0 ,~~~~\\text{ for } 1 \\leq x \\leq 2}'"></div>
                                </li>
                                <li>
                                    <div v-katex="'~~~\\displaystyle{ e^x - 3x^2 = 0 ,~~~~\\text{ for } 0 \\leq x \\leq 1}'"></div>
                                </li>
                            </ol>
                        </li>
                    </ol>


                </div>
                <!--./Exercise 3.4-->
            </div>
                <!--./Section 3.4-->
</section>





    </div>

</template>

<script>
    // @ is an alias to /src


    export default {
        name: 'unit3'


    }
</script>
